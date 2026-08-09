"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMotionVariants } from "@/lib/motion";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;

// Radix mounts/unmounts DialogContent based on `open` itself, so the motion
// variants here just play an entrance animation each time it mounts —
// simpler and safer than forceMount + AnimatePresence, which needs the
// parent (not this component) to own the conditional render.
function DialogContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>) {
  const { scaleIn } = useMotionVariants();
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-[70] bg-ink/40 backdrop-blur-sm dark:bg-black/60" />
      <DialogPrimitive.Content asChild {...props}>
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className={cn(
            "fixed left-1/2 top-1/2 z-[71] w-[min(92vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-ink/10 bg-white p-6 shadow-card-hover dark:border-cream/10 dark:bg-nightcard dark:shadow-card-hover-dark",
            className
          )}
        >
          {children}
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full p-1 text-ink/50 transition-colors hover:bg-ink/5 hover:text-ink dark:text-cream/50 dark:hover:bg-cream/10 dark:hover:text-cream">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </motion.div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

function DialogTitle({ className, ...props }: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn("font-display text-lg font-bold text-ink dark:text-cream", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn("mt-1.5 text-sm text-ink/65 dark:text-cream/65", className)}
      {...props}
    />
  );
}

export { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription };
