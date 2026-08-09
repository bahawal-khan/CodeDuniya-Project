"use client";

import { motion } from "framer-motion";
import { useMotionVariants } from "@/lib/motion";

// Next.js remounts template.tsx on every navigation (unlike layout.tsx), so
// this only wraps page content — Navbar/CodeYaarChat/footer stay in
// layout.tsx and never reset, keeping an open chat conversation intact
// across page changes.
export default function Template({ children }: { children: React.ReactNode }) {
  const { pageTransition } = useMotionVariants();
  return (
    <motion.div initial="hidden" animate="visible" exit="exit" variants={pageTransition}>
      {children}
    </motion.div>
  );
}
