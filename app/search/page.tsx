import type { Metadata } from "next";
import * as React from "react";
import { SearchInner } from "./search-inner";

export const metadata: Metadata = {
  title: "Lessons Dhoondo — CodeDuniya",
  description: "Kisi bhi topic, path ya module ka naam search karo — sab lessons ek jagah.",
};

export default function SearchPage() {
  return (
    <React.Suspense fallback={<div className="container py-16 text-center text-sm text-ink/50">Loading...</div>}>
      <SearchInner />
    </React.Suspense>
  );
}
