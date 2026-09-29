"use client";

import { useEffect } from "react";

type FontSoundEffectsProps = {
  titleSrc: string;
  itemSrc: string;
};

type SoundName = "title" | "item";

export function FontSoundEffects({ titleSrc, itemSrc }: FontSoundEffectsProps) {
  useEffect(() => {
    const sounds: Record<SoundName, HTMLAudioElement> = {
      title: new Audio(titleSrc),
      item: new Audio(itemSrc),
    };

    sounds.title.volume = 0.22;
    sounds.item.volume = 0.28;

    Object.values(sounds).forEach((sound) => {
      sound.preload = "auto";
      sound.load();
    });

    const triggers = Array.from(
      document.querySelectorAll<HTMLElement>("[data-font-sound]"),
    );
    const lastPlayed = new WeakMap<HTMLElement, number>();
    const playSound = (trigger: HTMLElement) => {
      // Let the browser decide whether audio is permitted, including on first hover.
      const soundName = trigger.dataset.fontSound as SoundName | undefined;
      if (!soundName || !sounds[soundName]) return;

      const now = performance.now();
      const previousPlay = lastPlayed.get(trigger);
      if (previousPlay !== undefined && now - previousPlay < 180) return;
      lastPlayed.set(trigger, now);

      const sound = sounds[soundName];
      sound.pause();
      sound.currentTime = 0;
      void sound.play().catch(() => {
        // A blocked hover must not debounce the first permitted click or keypress.
        if (lastPlayed.get(trigger) === now) lastPlayed.delete(trigger);
      });
    };

    const onPointerEnter = (event: PointerEvent) => {
      playSound(event.currentTarget as HTMLElement);
    };
    const onFocus = (event: FocusEvent) => {
      playSound(event.currentTarget as HTMLElement);
    };
    const onPointerDown = (event: PointerEvent) => {
      playSound(event.currentTarget as HTMLElement);
    };

    const onClick = (event: MouseEvent) => {
      playSound(event.currentTarget as HTMLElement);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        playSound(event.currentTarget as HTMLElement);
      }
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener("pointerenter", onPointerEnter);
      trigger.addEventListener("focus", onFocus);
      trigger.addEventListener("pointerdown", onPointerDown);
      trigger.addEventListener("click", onClick);
      trigger.addEventListener("keydown", onKeyDown);
    });

    return () => {
      triggers.forEach((trigger) => {
        trigger.removeEventListener("pointerenter", onPointerEnter);
        trigger.removeEventListener("focus", onFocus);
        trigger.removeEventListener("pointerdown", onPointerDown);
        trigger.removeEventListener("click", onClick);
        trigger.removeEventListener("keydown", onKeyDown);
      });

      Object.values(sounds).forEach((sound) => {
        sound.pause();
        sound.src = "";
      });
    };
  }, [itemSrc, titleSrc]);

  return null;
}
