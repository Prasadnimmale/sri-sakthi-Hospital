"use client";

import type { Variants } from "framer-motion";

/** True when the visitor asked the OS to reduce motion. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Shared easing for calm, medical-feeling motion. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Smooth-scroll to a section id without any page navigation/reload. */
export function scrollToSection(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const fadeUp = (delay = 0, y = 26): Variants => {
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: EASE },
    },
  };
}

export function fade(direction: "left" | "right", delay = 0): Variants {
  const x = direction === "left" ? -28 : 28;
  return {
    hidden: { opacity: 0, x },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay, ease: EASE },
    },
  };
}

export const stagger = (staggerChildren = 0.09, delayChildren = 0.1): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

export const viewportOnce = { once: true, margin: "-80px" } as const;
