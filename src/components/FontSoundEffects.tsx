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
    });

    const triggers = Array.from(
      document.querySelectorAll<HTMLElement>("[data-font-sound]"),
    );
    const lastPlayed = new WeakMap<HTMLElement, number>();
    let soundUnlocked = navigator.userActivation?.hasBeenActive ?? false;

    const unlockSound = () => {
      soundUnlocked = true;
    };

    const playSound = (trigger: HTMLElement) => {
      if (!soundUnlocked && !navigator.userActivation?.hasBeenActive) return;

      const soundName = trigger.dataset.fontSound as SoundName | undefined;
      if (!soundName || !sounds[soundName]) return;

      const now = performance.now();
      if (now - (lastPlayed.get(trigger) ?? 0) < 180) return;
      lastPlayed.set(trigger, now);

      const sound = sounds[soundName];
      sound.pause();
      sound.currentTime = 0;
      void sound.play().catch(() => undefined);
    };

    const onPointerEnter = (event: PointerEvent) => {
      playSound(event.currentTarget as HTMLElement);
    };
    const onFocus = (event: FocusEvent) => {
      playSound(event.currentTarget as HTMLElement);
    };
    const onPointerDown = (event: PointerEvent) => {
      unlockSound();
      playSound(event.currentTarget as HTMLElement);
    };

    document.addEventListener("pointerdown", unlockSound, { capture: true });
    document.addEventListener("keydown", unlockSound, { capture: true });

    triggers.forEach((trigger) => {
      trigger.addEventListener("pointerenter", onPointerEnter);
      trigger.addEventListener("focus", onFocus);
      trigger.addEventListener("pointerdown", onPointerDown);
    });

    return () => {
      document.removeEventListener("pointerdown", unlockSound, { capture: true });
      document.removeEventListener("keydown", unlockSound, { capture: true });

      triggers.forEach((trigger) => {
        trigger.removeEventListener("pointerenter", onPointerEnter);
        trigger.removeEventListener("focus", onFocus);
        trigger.removeEventListener("pointerdown", onPointerDown);
      });

      Object.values(sounds).forEach((sound) => {
        sound.pause();
        sound.src = "";
      });
    };
  }, [itemSrc, titleSrc]);

  return null;
}
