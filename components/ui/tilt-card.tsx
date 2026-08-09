"use client";

// Shared "premium card" hover wrapper: lift + subtle scale + soft glow +
// cursor-tracked 3D tilt. Used only on genuine card-grid surfaces (path
// cards, feature tiles, stat cards) — not on plain content boxes — so hover
// polish stays meaningful instead of blanket-applied everywhere.

import * as React from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const SPRING = { stiffness: 300, damping: 24, mass: 0.6 };

export function TiltCard({
  children,
  className,
  glowClassName = "bg-rani/25",
}: {
  children: React.ReactNode;
  className?: string;
  /** Tailwind bg-color class for the soft blurred glow behind the card on hover. */
  glowClassName?: string;
}) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [6, -6]), SPRING);
  const rotateY = useSpring(useTransform(px, [0, 1], [-6, 6]), SPRING);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={reduce ? undefined : { y: -6, scale: 1.015 }}
      whileTap={reduce ? undefined : { scale: 0.99 }}
      transition={SPRING}
      style={{ perspective: 900 }}
      className={cn("group/tilt relative h-full", className)}
    >
      {/* Soft glow — fades in behind the card on hover, blurred and contained. */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-2 -z-10 rounded-[1.75rem] opacity-0 blur-xl transition-opacity duration-300 group-hover/tilt:opacity-100",
          glowClassName
        )}
      />
      <motion.div
        style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
