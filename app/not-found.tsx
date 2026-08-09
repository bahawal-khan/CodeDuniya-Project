import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-rani-soft text-rani dark:bg-rani/15">
        <Compass className="h-8 w-8" />
      </span>
      <h1 className="mt-5 font-display text-2xl font-extrabold">Yeh raasta nahi mila</h1>
      <p className="mt-2 max-w-sm text-sm text-ink/60 dark:text-cream/60">
        Lagta hai tum kisi galat gali mein aa gaye ho. Chalo wapas seedhe raaste par chalte hain.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Home Par Wapas Jao</Link>
      </Button>
    </div>
  );
}
