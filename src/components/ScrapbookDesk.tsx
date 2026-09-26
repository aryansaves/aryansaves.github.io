"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { publicUrl } from "@/lib/urls";
import styles from "./ScrapbookDesk.module.css";

const scraps = [
  { name: "Checker", position: "upperLeft", print: 0 },
  { name: "Planet", position: "upperRight", print: 1, image: "planet.png", width: 335, height: 305 },
  { name: "Flower", position: "lowerLeft", print: 2, image: "flower.png", width: 217, height: 481 },
  { name: "Wave", position: "lowerRight", print: 3 },
] as const;

function scatterCatScraps() {
  return Array.from({ length: 48 }, (_, index) => ({
    x: -12 + Math.random() * 110,
    y: -16 + Math.random() * 110,
    size: 23 + Math.random() * 19,
    angle: -32 + Math.random() * 64,
    delay: index * 0.045,
  }));
}

type ScrapName = (typeof scraps)[number]["name"];

function isFullyUnderSheet(element: HTMLElement) {
  const sheet = document.querySelector<HTMLElement>("[data-resume-sheet]");
  if (!sheet) return false;

  const scrapBounds = element.getBoundingClientRect();
  const sheetBounds = sheet.getBoundingClientRect();
  return (
    scrapBounds.left >= sheetBounds.left &&
    scrapBounds.right <= sheetBounds.right &&
    scrapBounds.top >= sheetBounds.top &&
    scrapBounds.bottom <= sheetBounds.bottom
  );
}

function Scrap({
  scrap,
  onLostChange,
}: {
  scrap: (typeof scraps)[number];
  onLostChange: (name: ScrapName, lost: boolean) => void;
}) {
  const [print, setPrint] = useState<number>(scrap.print);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [origin, setOrigin] = useState<{ x: number; y: number; width: number } | null>(null);
  const elementRef = useRef<HTMLButtonElement>(null);
  const [angle, setAngle] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const gesture = useRef<{ x: number; y: number; startX: number; startY: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    const desk = element?.parentElement;
    const sheet = document.querySelector<HTMLElement>("[data-resume-sheet]");
    if (!element || !desk || !sheet) return;
    // Disjoint margin slots keep randomized, rotated scraps clear of each other.
    const left = scrap.position.toLowerCase().includes("left");
    const upper = scrap.position.startsWith("upper");
    const randomX = Math.random();
    const randomY = Math.random();
    const rotation = -10 + Math.random() * 20;
    const radians = Math.abs(rotation) * Math.PI / 180;
    const ratio = scrap.name === "Flower" ? 1.8 : scrap.name === "Planet" ? 1 : scrap.name === "Wave" ? 1 / 1.3 : 1.25;
    const arrange = () => {
      const bounds = desk.getBoundingClientRect();
      const paper = sheet.getBoundingClientRect();
      const startX = left ? 18 : paper.right - bounds.left + 30;
      const endX = left ? paper.left - bounds.left - 30 : bounds.width - 18;
      const slotHeight = Math.min(bounds.height, window.innerHeight) / 2;
      const availableWidth = Math.max(1, endX - startX);
      const availableHeight = Math.max(1, slotHeight - 64);
      const rotatedWidth = Math.cos(radians) + ratio * Math.sin(radians);
      const rotatedHeight = ratio * Math.cos(radians) + Math.sin(radians);
      const width = Math.min(scrap.name === "Flower" ? 145 : 194, availableWidth / rotatedWidth, availableHeight / rotatedHeight);
      const boxWidth = width * rotatedWidth;
      const boxHeight = width * rotatedHeight;
      setOrigin({
        x: startX + randomX * (availableWidth - boxWidth) + (boxWidth - width) / 2,
        y: (upper ? 0 : slotHeight) + 32 + randomY * (availableHeight - boxHeight) + (boxHeight - width * ratio) / 2,
        width,
      });
    };
    setAngle(`${rotation.toFixed(2)}deg`);
    arrange();
    const observer = new ResizeObserver(arrange);
    observer.observe(desk);
    observer.observe(sheet);
    window.addEventListener("resize", arrange);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", arrange);
    };
  }, [scrap.name, scrap.position]);

  const move = (x: number, y: number) => setOffset({ x, y });

  const pointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.button !== 0 || !event.isPrimary) return;
    gesture.current = { x: event.clientX, y: event.clientY, startX: offset.x, startY: offset.y, moved: false };
    suppressClick.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
  };

  const pointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    const start = gesture.current;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.hypot(dx, dy) > 5) start.moved = true;
    if (start.moved) move(start.startX + dx, start.startY + dy);
  };

  const pointerEnd = (event: PointerEvent<HTMLButtonElement>) => {
    if (!gesture.current) return;
    suppressClick.current = gesture.current.moved;
    const wasMoved = gesture.current.moved;
    gesture.current = null;
    setDragging(false);
    if (wasMoved) onLostChange(scrap.name, isFullyUnderSheet(event.currentTarget));
  };

  const keyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") suppressClick.current = false;
    const directions: Record<string, [number, number]> = {
      ArrowLeft: [-8, 0], ArrowRight: [8, 0], ArrowUp: [0, -8], ArrowDown: [0, 8],
    };
    const direction = directions[event.key];
    if (direction) {
      event.preventDefault();
      move(offset.x + direction[0], offset.y + direction[1]);
      const scrapElement = event.currentTarget;
      requestAnimationFrame(() => onLostChange(scrap.name, isFullyUnderSheet(scrapElement)));
    }
    if (event.key === "Escape") {
      setOffset({ x: 0, y: 0 });
      onLostChange(scrap.name, false);
    }
  };

  return (
    <button
      ref={elementRef}
      type="button"
      className={`${styles.scrap} ${styles[scrap.position]}`}
      data-print={print}
      data-dragging={dragging}
      style={{
        visibility: origin ? "visible" : "hidden",
        ...(origin ? { left: origin.x, top: origin.y, width: origin.width, right: "auto", bottom: "auto" } : {}),
        "--drag-x": `${offset.x}px`,
        "--drag-y": `${offset.y}px`,
        ...(angle ? { "--angle": angle } : {}),
      } as CSSProperties}
      aria-label={`${scrap.name} scrap: change pattern`}
      aria-describedby="desk-instructions"
      onPointerDown={pointerDown}
      onPointerMove={pointerMove}
      onPointerUp={pointerEnd}
      onPointerCancel={pointerEnd}
      onLostPointerCapture={pointerEnd}
      onKeyDown={keyDown}
      onTransitionEnd={(event) => {
        if (event.target === event.currentTarget && event.propertyName === "transform") {
          onLostChange(scrap.name, isFullyUnderSheet(event.currentTarget));
        }
      }}
      onClick={() => {
        if (suppressClick.current) { suppressClick.current = false; return; }
        setPrint((value) => (value + 1) % 4);
      }}
    >
      <span className={styles.print} aria-hidden="true" />
      {"image" in scrap && (
        <Image className={styles.sticker} src={publicUrl(`/art/${scrap.image}`)} alt="" width={scrap.width} height={scrap.height} draggable={false} />
      )}
      <span className={styles.fold} aria-hidden="true" />
    </button>
  );
}

function ScrapCelebration() {
  const refreshButton = useRef<HTMLButtonElement>(null);
  const [catScraps] = useState(scatterCatScraps);
  useEffect(() => {
    const audio = new Audio(publicUrl("/audio/casino-jackpot.mp3"));
    audio.volume = 0.55;
    void audio.play().catch(() => undefined);
    refreshButton.current?.focus({ preventScroll: true });
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Keep keyboard focus on the one action while the celebration covers the page.
    const trapFocus = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Tab") {
        event.preventDefault();
        refreshButton.current?.focus();
      }
    };
    document.addEventListener("keydown", trapFocus);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", trapFocus);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return createPortal(
    <div className={styles.celebration} style={{ "--scrap-paper": `url('${publicUrl("/art/scrap-rough.png")}')` } as CSSProperties} role="dialog" aria-modal="true" aria-labelledby="error-title">
      <div className={styles.confetti} aria-hidden="true">
        {Array.from({ length: 54 }, (_, index) => (
          <i
            key={index}
            style={{
              "--confetti-x": `${(index * 41) % 101}%`,
              "--confetti-delay": `${(index % 11) * -0.13}s`,
              "--confetti-speed": `${1.9 + (index % 7) * 0.17}s`,
              "--confetti-turn": `${180 + (index % 5) * 90}deg`,
            } as CSSProperties}
          />
          ))}
      </div>
      <span className={`${styles.partyPopper} ${styles.partyPopperLeft}`} aria-hidden="true" />
      <span className={`${styles.partyPopper} ${styles.partyPopperRight}`} aria-hidden="true" />

      <div className={styles.scrapFlood} aria-hidden="true">
        {catScraps.map((cat, index) => (
          <div
            className={styles.catScrap}
            key={index}
            style={{
              "--scrap-x": `${cat.x}%`,
              "--scrap-y": `${cat.y}%`,
              "--scrap-size": `${cat.size}vmin`,
              "--scrap-angle": `${cat.angle}deg`,
              "--scrap-delay": `${cat.delay}s`,
              "--scrap-level": index,
            } as CSSProperties}
            aria-hidden="true"
          >
            <picture>
              <source media="(prefers-reduced-motion: reduce)" srcSet={publicUrl("/art/rainbow-cat-remix-still.svg")} />
              <Image src={publicUrl("/art/rainbow-cat-remix.svg")} alt="" width={800} height={800} unoptimized />
            </picture>
          </div>
        ))}
      </div>

      <div className={styles.jackpotPaper}>
        <strong id="error-title">ALL SCRAPS LOST!</strong>
        <button ref={refreshButton} className={styles.catRefresh} type="button" onClick={() => window.location.reload()} aria-label="Refresh the page and rearrange the scraps">
          <picture>
            <source media="(prefers-reduced-motion: reduce)" srcSet={publicUrl("/art/8-bit-cat-still.svg")} />
            <Image className={styles.pixelCat} src={publicUrl("/art/8-bit-cat.svg")} alt="" width={356} height={364} unoptimized />
          </picture>
        </button>
      </div>
    </div>,
    document.body,
  );
}

export function ScrapbookDesk() {
  const lostScraps = useRef(new Set<ScrapName>());
  const [celebrating, setCelebrating] = useState(false);

  const updateLostScraps = (name: ScrapName, lost: boolean) => {
    if (lost) lostScraps.current.add(name);
    else lostScraps.current.delete(name);
    // Once discovered, keep the celebration open through resize/focus changes.
    if (lostScraps.current.size === scraps.length) setCelebrating(true);
  };

  return (
    <div className={styles.desk} style={{ "--desk-texture": `url('${publicUrl("/art/paper.webp")}')`, "--scrap-paper": `url('${publicUrl("/art/scrap-rough.png")}')` } as CSSProperties}>
      <div className={`${styles.backing} ${styles.checks}`} aria-hidden="true" />
      <div className={`${styles.backing} ${styles.waves}`} aria-hidden="true" />
      <div className={`${styles.backing} ${styles.stripes}`} aria-hidden="true" />
      <svg className={styles.scribble} viewBox="0 0 140 230" fill="none" aria-hidden="true">
        <path d="M82 8C-20 52 138 90 86 134C44 171 5 112 42 87C89 56 131 158 80 207M80 207L77 184M80 207L104 196" />
      </svg>
      <div className={styles.scraps}>
        {scraps.map((scrap) => <Scrap key={scrap.name} scrap={scrap} onLostChange={updateLostScraps} />)}
      </div>
      <span id="desk-instructions" className={styles.srOnly}>Drag freely to move. Click or press Enter to change the pattern. Arrow keys move the scrap. Escape returns it to its randomized starting position.</span>
      {celebrating && <ScrapCelebration />}
    </div>
  );
}
