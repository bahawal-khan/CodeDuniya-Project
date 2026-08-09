"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "animate-pulse rounded-xl2 bg-ink/8 dark:bg-cream/8",
        className
      )}
    />
  );
}

// The gap this fills: pages are already static Server Components, so the
// only remaining loading moment is client-side, before localStorage-backed
// progress finishes reading on mount. Route-level loading.tsx can't help
// here since there's no awaited server work to suspend on.
export function useHasMounted() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return mounted;
}
