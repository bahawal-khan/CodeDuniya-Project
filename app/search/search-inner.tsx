"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllLessonsFlat } from "@/data/paths";

export function SearchInner() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";
  const [query, setQuery] = React.useState(initialQ);

  const allLessons = React.useMemo(() => getAllLessonsFlat(), []);

  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allLessons;
    return allLessons.filter(
      ({ lesson, path, module: mod }) =>
        lesson.title.toLowerCase().includes(q) ||
        lesson.titleUrdu.toLowerCase().includes(q) ||
        lesson.summaryEn.toLowerCase().includes(q) ||
        lesson.summaryUr.toLowerCase().includes(q) ||
        path.title.toLowerCase().includes(q) ||
        mod.title.toLowerCase().includes(q)
    );
  }, [query, allLessons]);

  return (
    <div className="container max-w-2xl py-10">
      <h1 className="font-display text-3xl font-extrabold">Lessons Dhoondo</h1>
      <p className="mt-1 text-sm text-ink/60 dark:text-cream/60">Kisi bhi topic, path ya module ka naam likho.</p>

      <div className="relative mt-6">
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40 dark:text-cream/40" />
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. loop, variables, react..."
          className="w-full rounded-full border border-ink/10 bg-white py-3 pl-11 pr-4 text-sm outline-none ring-saffron focus:ring-2 dark:border-cream/10 dark:bg-nightcard"
        />
      </div>

      <div className="mt-6 space-y-3">
        {results.length === 0 && (
          <p className="py-10 text-center text-sm text-ink/50 dark:text-cream/50">Kuch nahi mila. Doosra keyword try karo!</p>
        )}
        {results.map(({ path, module: mod, lesson }) => (
          <Link key={lesson.id} href={`/paths/${path.slug}/${mod.slug}/${lesson.slug}`}>
            <Card className="p-4 transition-colors hover:bg-ink/5 dark:hover:bg-cream/5">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="font-semibold">{lesson.title}</p>
                  <p className="text-xs text-ink/45 dark:text-cream/45">{lesson.titleUrdu}</p>
                </div>
                <Badge variant="outline">{path.title}</Badge>
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-ink/65 dark:text-cream/65">{lesson.summaryUr}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
