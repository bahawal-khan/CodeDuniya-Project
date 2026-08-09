"use client";

import { useEffect } from "react";
import { TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-rani-soft text-rani dark:bg-rani/15">
        <TriangleAlert className="h-8 w-8" />
      </span>
      <h1 className="mt-5 font-display text-2xl font-extrabold">Yar, kuch gadbad ho gayi</h1>
      <p className="mt-2 max-w-sm text-sm text-ink/60 dark:text-cream/60">
        Koi unexpected error aa gaya hai. Tension na le, dobara try kar lo — agar phir bhi masla ho to home par
        wapas chale jao.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button onClick={reset}>Dobara Try Karo</Button>
        <Button variant="outline" asChild>
          <a href="/">Home Par Wapas Jao</a>
        </Button>
      </div>
    </div>
  );
}
