"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PartyPopper } from "lucide-react";
import { onCelebrate } from "@/lib/progress";
import { useMotionVariants } from "@/lib/motion";

interface ToastContextValue {
  show: (message: string) => void;
}

const ToastContext = React.createContext<ToastContextValue | null>(null);

const DISPLAY_MS = 3200;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [queue, setQueue] = React.useState<{ id: number; message: string }[]>([]);
  const idRef = React.useRef(0);
  const { reduce } = useMotionVariants();

  const show = React.useCallback((message: string) => {
    idRef.current += 1;
    setQueue((q) => [...q, { id: idRef.current, message }]);
  }, []);

  // Single-slot display: only the oldest queued toast is ever visible, so
  // celebrations never stack into a wall of popups.
  const current = queue[0];

  React.useEffect(() => {
    if (!current) return;
    const timeout = setTimeout(() => {
      setQueue((q) => q.slice(1));
    }, reduce ? 1500 : DISPLAY_MS);
    return () => clearTimeout(timeout);
  }, [current, reduce]);

  React.useEffect(() => {
    onCelebrate(show);
    return () => onCelebrate(null);
  }, [show]);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 bottom-24 z-[60] flex justify-center px-4 md:bottom-8 md:justify-end md:pr-8">
        <AnimatePresence mode="wait">
          {current && (
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="pointer-events-auto flex max-w-[90vw] items-center gap-2.5 rounded-full border border-saffron/30 bg-white px-4 py-3 text-sm font-semibold text-ink shadow-card-hover dark:border-saffron/25 dark:bg-nightcard dark:text-cream dark:shadow-card-hover-dark md:max-w-sm"
              role="status"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-saffron-soft text-saffron-dark dark:bg-saffron/15 dark:text-saffron">
                <PartyPopper className="h-4 w-4" />
              </span>
              {current.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
}
