"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Search, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home", labelUr: "Home" },
  { href: "/paths", label: "Learning Paths", labelUr: "Paths" },
  { href: "/dashboard", label: "Dashboard", labelUr: "Dashboard" },
  { href: "/search", label: "Search Lessons", labelUr: "Search" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setOpen(false);
    }
  }

  // Close mobile menu on route change
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-cream/90 backdrop-blur-xl dark:border-cream/8 dark:bg-night/90">
      <div className="container flex h-16 items-center justify-between gap-3">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5 shrink-0">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-saffron via-rani to-teal text-white shadow-soft transition-transform duration-300 group-hover:scale-105 group-hover:shadow-glow">
            <Sparkles className="h-4.5 w-4.5" />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight">
            Code<span className="text-rani">Duniya</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.filter((l) => l.href !== "/search").map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                  isActive
                    ? "bg-rani-soft text-rani-dark dark:bg-rani/20 dark:text-rani"
                    : "text-ink/70 hover:bg-ink/5 hover:text-ink dark:text-cream/70 dark:hover:bg-cream/8 dark:hover:text-cream"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-rani dark:bg-saffron" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Search + Theme */}
        <div className="hidden md:flex items-center gap-2">
          <form onSubmit={handleSearch} className="relative group flex items-center">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35 transition-colors group-focus-within:text-rani dark:text-cream/35" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Lessons dhoondo..."
              className="w-48 rounded-full border border-ink/8 bg-white/60 py-2 pl-10 pr-16 text-sm outline-none transition-all duration-200
                         focus:w-56 focus:border-rani/30 focus:bg-white focus:ring-2 focus:ring-rani/20
                         dark:border-cream/8 dark:bg-nightcard/60 dark:focus:bg-nightcard dark:focus:ring-saffron/20"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-rani px-3 py-1 text-xs font-bold text-white transition-colors hover:bg-rani-dark disabled:opacity-40"
              disabled={!query.trim()}
            >
              Jao
            </button>
          </form>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="h-10 w-10 rounded-full"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-ink/8 bg-cream/98 px-4 pb-5 pt-3 backdrop-blur-xl dark:border-cream/8 dark:bg-night/98 md:hidden animate-pop-in">
          <form onSubmit={handleSearch} className="mb-4 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40 dark:text-cream/40" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Lessons dhoondo..."
                className="w-full rounded-2xl border border-ink/8 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-rani/20 dark:border-cream/8 dark:bg-nightcard"
                autoFocus
              />
            </div>
            <button
              type="submit"
              aria-label="Search"
              className="shrink-0 rounded-2xl bg-rani px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-rani-dark disabled:opacity-40"
              disabled={!query.trim()}
            >
              Dhoondo
            </button>
          </form>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.filter((l) => l.href !== "/search").map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3.5 text-base font-semibold transition-colors",
                    isActive
                      ? "bg-rani-soft text-rani-dark dark:bg-rani/20 dark:text-rani"
                      : "text-ink/80 hover:bg-ink/5 dark:text-cream/80 dark:hover:bg-cream/8"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
