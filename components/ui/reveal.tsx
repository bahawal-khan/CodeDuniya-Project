"use client";

// Shared scroll-reveal primitives so every section on the site fades/slides
// in the same way instead of each page hand-rolling its own whileInView
// props. Respects prefers-reduced-motion throughout.

import * as React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Single element: fades up once as it enters the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Parent for a grid/row of cards: stagger the children's entrance instead of
 * having them all pop in at once. Pair with <RevealItem> for each child.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: 0.04 } },
  };
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={container}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 18,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  const item: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT_EXPO } },
      };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
