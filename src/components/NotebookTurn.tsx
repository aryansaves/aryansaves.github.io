"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent, type ReactNode } from "react";
import { clipHalfPlane, foldDepth, foldGeometry, type Fold, type Point, type Strip } from "@/lib/page-turn/geometry";
import styles from "./NotebookTurn.module.css";

type Phase = "rest" | "peek" | "drag" | "settle";
type Sample = { time: number; progress: number };
type Turn = {
  phase: Phase;
  progress: number;
  lift: number;
  grabY: number;
  width: number;
  height: number;
  startX: number;
  startY: number;
  startProgress: number;
  pointer: number | null;
  samples: Sample[];
  moved: boolean;
};

const clamp = (value: number, low: number, high: number) => Math.min(high, Math.max(low, value));
const polygon = (points: Point[]) => points.length < 3
  ? "polygon(0 0, 0 0, 0 0)"
  : `polygon(${points.map(({ x, y }) => `${x.toFixed(3)}px ${y.toFixed(3)}px`).join(",")})`;

function placeBand(element: HTMLSpanElement, strip: Strip) {
  element.style.width = `${strip.span}px`;
  element.style.height = `${strip.length}px`;
  element.style.transform = `translate(${strip.x}px, ${strip.y}px) rotate(${strip.angle}rad)`;
}

function flapClip(width: number, height: number, fold: Fold) {
  const { through, normal } = fold.crease;
  // Independent antialiasing of the two clip paths can expose a hairline
  // of front-face ink. Overlap only the crease by 0.6 CSS px; the original
  // outer paper edges and the reverse's transform stay exact.
  return polygon(clipHalfPlane([
    { x: 0, y: 0 }, { x: width, y: 0 },
    { x: width, y: height }, { x: 0, y: height },
  ], point => 0.6 - (
    (width - point.x - through.x) * normal.x + (point.y - through.y) * normal.y
  )));
}

/** One live portfolio face; only the blank paper reverse is carried by the fold. */
export function NotebookTurn({ children, decoration, className, paperImage }: {
  children: ReactNode;
  decoration: ReactNode;
  className: string;
  paperImage: string;
}) {
  const [turned, setTurned] = useState(false);
  const [busy, setBusy] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const face = useRef<HTMLDivElement>(null);
  const flap = useRef<HTMLDivElement>(null);
  const cast = useRef<HTMLDivElement>(null);
  const castBand = useRef<HTMLSpanElement>(null);
  const rollBand = useRef<HTMLSpanElement>(null);
  const control = useRef<HTMLButtonElement>(null);
  const animation = useRef(0);
  const reduced = useRef(false);
  const currentLeaf = useRef(false);
  const suppressClick = useRef(false);
  const turn = useRef<Turn>({
    phase: "rest", progress: 0, lift: 0, grabY: 0,
    width: 1, height: 1, startX: 0, startY: 0, startProgress: 0,
    pointer: null, samples: [], moved: false,
  });

  function measure() {
    const rect = face.current?.getBoundingClientRect();
    if (!rect) return;
    turn.current.width = rect.width;
    turn.current.height = rect.height;
    turn.current.grabY = rect.height;
  }

  function draw() {
    if (!root.current || !face.current || !flap.current || !cast.current || !castBand.current || !rollBand.current) return;
    const frame = turn.current;
    const fold = foldGeometry({ ...frame, spine: "left" });
    const depth = foldDepth(frame.progress);
    root.current.dataset.folding = "true";
    face.current.style.visibility = "visible";
    face.current.style.clipPath = polygon(fold.leaf);
    flap.current.style.clipPath = flapClip(frame.width, frame.height, fold);
    flap.current.style.transform = `translate(${fold.place.x}px, ${fold.place.y}px) rotate(${fold.place.angle}rad)`;
    flap.current.style.setProperty("--lift", `${depth * 0.22}`);
    cast.current.style.clipPath = polygon(fold.uncovered);
    castBand.current.style.opacity = `${depth * 0.32}`;
    rollBand.current.style.opacity = `${depth}`;
    placeBand(castBand.current, fold.cast);
    placeBand(rollBand.current, fold.roll);
  }

  function finish(target: 0 | 1) {
    cancelAnimationFrame(animation.current);
    animation.current = 0;
    turn.current.phase = "rest";
    turn.current.progress = target;
    turn.current.lift = 0;
    const pointer = turn.current.pointer;
    turn.current.pointer = null;
    if (pointer !== null && control.current?.hasPointerCapture(pointer)) control.current.releasePointerCapture(pointer);
    currentLeaf.current = target === 1;
    if (root.current) {
      root.current.dataset.folding = "false";
      root.current.dataset.turned = String(target === 1);
    }
    if (face.current) {
      face.current.style.clipPath = "";
      face.current.style.visibility = "";
    }
    setTurned(target === 1);
    setBusy(false);
  }

  function settle(target: 0 | 1, fullTurn = false, speed = 0) {
    cancelAnimationFrame(animation.current);
    if (reduced.current) {
      finish(target);
      return;
    }
    const frame = turn.current;
    const from = frame.progress;
    const initialLift = frame.lift;
    const distance = Math.abs(target - from);
    const duration = fullTurn ? 1050 : clamp(distance * 900, 180, 800);
    const started = performance.now();
    frame.phase = "settle";
    setBusy(true);

    function tick(now: number) {
      const t = clamp((now - started) / duration, 0, 1);
      // A whole turn gathers speed before settling; a released drag keeps
      // its initial momentum, with zero velocity as the paper lands.
      const eased = fullTurn
        ? t * t * t * (10 + t * (-15 + 6 * t))
        : 1 - Math.pow(1 - t, 3);
      frame.progress = from + (target - from) * eased;
      frame.lift = fullTurn
        ? -frame.height * 0.19 * Math.sin(Math.PI * eased)
        : initialLift * (1 - eased);
      // Faster flicks retain a small arc without introducing a final wobble.
      if (!fullTurn && Math.abs(speed) > 0.0004) {
        frame.lift -= frame.height * 0.025 * Math.sin(Math.PI * t);
      }
      draw();
      if (t < 1) animation.current = requestAnimationFrame(tick);
      else finish(target);
    }
    animation.current = requestAnimationFrame(tick);
  }

  function activate(pointerClick = false) {
    if (suppressClick.current && pointerClick) {
      suppressClick.current = false;
      return;
    }
    suppressClick.current = false;
    if (turn.current.phase === "settle" || turn.current.phase === "drag") return;
    measure();
    settle(currentLeaf.current ? 0 : 1, true);
  }

  function peek(event: PointerEvent<HTMLButtonElement>) {
    if (reduced.current || currentLeaf.current || event.pointerType !== "mouse" || !["rest", "peek"].includes(turn.current.phase)) return;
    measure();
    cancelAnimationFrame(animation.current);
    const frame = turn.current;
    const from = frame.progress;
    const started = performance.now();
    frame.phase = "peek";
    function tick(now: number) {
      if (frame.phase !== "peek") return;
      const t = clamp((now - started) / 240, 0, 1);
      frame.progress = from + (0.035 - from) * (1 - Math.pow(1 - t, 3));
      frame.lift = -frame.height * 0.075;
      draw();
      if (t < 1) animation.current = requestAnimationFrame(tick);
    }
    animation.current = requestAnimationFrame(tick);
  }

  function leave() {
    if (turn.current.phase === "peek") settle(0);
  }

  function pointerDown(event: PointerEvent<HTMLButtonElement>) {
    if (!event.isPrimary || event.button !== 0 || reduced.current || turn.current.phase === "settle") return;
    measure();
    cancelAnimationFrame(animation.current);
    suppressClick.current = false;
    const frame = turn.current;
    frame.phase = "drag";
    frame.pointer = event.pointerId;
    frame.startX = event.clientX;
    frame.startY = event.clientY;
    frame.startProgress = frame.progress;
    frame.samples = [{ time: event.timeStamp, progress: frame.progress }];
    frame.moved = false;
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.focus({ preventScroll: true });
  }

  function pointerMove(event: PointerEvent<HTMLButtonElement>) {
    const frame = turn.current;
    if (frame.phase !== "drag" || frame.pointer !== event.pointerId) return;
    const dx = event.clientX - frame.startX;
    const dy = event.clientY - frame.startY;
    if (Math.hypot(dx, dy) < 4 && !frame.moved) return;
    frame.moved = true;
    setBusy(true);
    frame.progress = clamp(frame.startProgress - dx / (frame.width * 2), 0, 1);
    frame.lift = dy - frame.height * 0.025 * Math.sin(Math.PI * frame.progress);
    frame.samples.push({ time: event.timeStamp, progress: frame.progress });
    frame.samples = frame.samples.filter(sample => event.timeStamp - sample.time <= 100);
    draw();
  }

  function release(event: PointerEvent<HTMLButtonElement>, cancelled = false) {
    const frame = turn.current;
    if (frame.phase !== "drag" || frame.pointer !== event.pointerId) return;
    frame.pointer = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (!frame.moved && !cancelled) {
      frame.phase = "rest";
      return; // The following native click performs the turn.
    }
    suppressClick.current = frame.moved && !cancelled;
    const last = frame.samples.at(-1);
    const first = frame.samples[0];
    const velocity = last && first && last.time > first.time
      ? (last.progress - first.progress) / (last.time - first.time) : 0;
    const elapsed = last ? event.timeStamp - last.time : Infinity;
    const speed = elapsed < 100 ? velocity : 0;
    const travelled = Math.abs(frame.progress - Number(currentLeaf.current));
    const target = cancelled ? Number(currentLeaf.current)
      : Math.abs(speed) > 0.0004 && travelled >= 0.02 ? Number(speed > 0)
      : currentLeaf.current ? Number(frame.progress >= 0.6) : Number(frame.progress > 0.4);
    settle(target as 0 | 1, false, speed);
  }

  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      reduced.current = preference.matches;
      if (preference.matches && turn.current.phase !== "rest") {
        cancelAnimationFrame(animation.current);
        const target = Number(currentLeaf.current);
        turn.current.phase = "rest";
        turn.current.progress = target;
        const pointer = turn.current.pointer;
        turn.current.pointer = null;
        if (pointer !== null && control.current?.hasPointerCapture(pointer)) control.current.releasePointerCapture(pointer);
        if (root.current) root.current.dataset.folding = "false";
        if (face.current) {
          face.current.style.clipPath = "";
          face.current.style.visibility = "";
        }
        setBusy(false);
      }
    };
    updatePreference();
    preference.addEventListener("change", updatePreference);
    // Resizing abandons a partial fold rather than stretching the measured
    // paper. The live article still determines the responsive notebook size.
    const observer = new ResizeObserver(() => {
      if (turn.current.phase === "rest") return;
      cancelAnimationFrame(animation.current);
      turn.current.phase = "rest";
      turn.current.progress = Number(currentLeaf.current);
      const pointer = turn.current.pointer;
      turn.current.pointer = null;
      if (pointer !== null && control.current?.hasPointerCapture(pointer)) control.current.releasePointerCapture(pointer);
      if (root.current) root.current.dataset.folding = "false";
      if (face.current) {
        face.current.style.clipPath = "";
        face.current.style.visibility = "";
      }
      setBusy(false);
    });
    if (face.current) observer.observe(face.current);

    // The existing skip link must also return to the portfolio when blank.
    const revealContent = () => {
      cancelAnimationFrame(animation.current);
      currentLeaf.current = false;
      turn.current.phase = "rest";
      turn.current.progress = 0;
      const pointer = turn.current.pointer;
      turn.current.pointer = null;
      if (pointer !== null && control.current?.hasPointerCapture(pointer)) control.current.releasePointerCapture(pointer);
      if (root.current) {
        root.current.dataset.folding = "false";
        root.current.dataset.turned = "false";
      }
      if (face.current) {
        face.current.inert = false;
        face.current.removeAttribute("aria-hidden");
        face.current.style.clipPath = "";
        face.current.style.visibility = "";
      }
      setTurned(false);
      setBusy(false);
    };
    const skip = document.querySelector<HTMLAnchorElement>('a[href="#portfolio-content"]');
    skip?.addEventListener("click", revealContent);
    return () => {
      cancelAnimationFrame(animation.current);
      observer.disconnect();
      preference.removeEventListener("change", updatePreference);
      skip?.removeEventListener("click", revealContent);
    };
  }, []);

  return (
    <div ref={root} className={`${className} ${styles.book}`} data-turned={turned} style={{ "--paper-image": `url('${paperImage}')` } as CSSProperties}>
      {decoration}
      <div className={styles.blank} aria-hidden="true">
        <span className={styles.pageNumber}>02</span>
      </div>
      <div ref={face} className={styles.face} aria-hidden={turned || undefined} inert={turned || busy}>
        {children}
        <span className={styles.pageNumber} aria-hidden="true">01</span>
      </div>
      <div ref={cast} className={styles.cast} aria-hidden="true"><span ref={castBand} className={styles.castBand} /></div>
      <div ref={flap} className={styles.flap} aria-hidden="true"><span className={styles.reverseLight} /><span ref={rollBand} className={styles.rollBand} /></div>
      <button
        ref={control}
        className={styles.turnControl}
        type="button"
        aria-label={turned ? "Return to portfolio page" : "Turn page to blank ruled leaf"}
        aria-controls="portfolio-content"
        aria-disabled={busy}
        onClick={event => activate(event.detail > 0)}
        onPointerEnter={peek}
        onPointerLeave={leave}
        onPointerDown={pointerDown}
        onPointerMove={pointerMove}
        onPointerUp={event => release(event)}
        onPointerCancel={event => release(event, true)}
        onLostPointerCapture={event => release(event, true)}
        onKeyDown={event => {
          if (event.key === "Escape" && turn.current.phase !== "rest") {
            event.preventDefault();
            settle(currentLeaf.current ? 1 : 0);
          }
          if ((event.key === "ArrowRight" && !turned) || (event.key === "ArrowLeft" && turned)) {
            event.preventDefault();
            activate();
          }
        }}
      >
        <span>{turned ? "return" : "turn page"}</span>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M5 17C5 10 10 6 18 6M12 3l6 3-3 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <span className={styles.announcement} role="status">{turned ? "Blank ruled leaf. Return to see the portfolio." : "Portfolio page, 1 of 2."}</span>
    </div>
  );
}
