"use client";

// Shared Framer Motion variants so animation "language" stays consistent
// across the app instead of every component inventing its own timing/easing.
// Mirrors the semantics already defined as CSS keyframes in tailwind.config.ts
// (fade-up, scale-in, slide-in-right) so the two systems agree visually.
import { useReducedMotion, Variants } from "framer-motion";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function useMotionVariants() {
  const reduce = useReducedMotion();

  const fadeUp: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT_EXPO } },
      };

  const scaleIn: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, scale: 0.92 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: EASE_OUT_EXPO } },
      };

  const slideInRight: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE_OUT_EXPO } },
      };

  const pageTransition: Variants = reduce
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 8 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE_OUT_EXPO } },
        exit: { opacity: 0, transition: { duration: 0.15 } },
      };

  return { reduce, fadeUp, scaleIn, slideInRight, pageTransition };
}
