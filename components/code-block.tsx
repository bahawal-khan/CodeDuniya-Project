"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy } from "lucide-react";

// Prism (react-syntax-highlighter) is the single biggest chunk on lesson pages —
// load it only when a code block actually renders, client-side.
const SyntaxHighlighter = dynamic(
  () => import("react-syntax-highlighter").then((m) => m.Prism),
  {
    ssr: false,
    loading: () => (
      <div className="h-24 animate-pulse bg-ink/5 dark:bg-cream/5" />
    ),
  }
);

export function CodeBlock({ language, code }: { language: string; code: string }) {
  const { theme } = useTheme();
  const [copied, setCopied] = React.useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="relative overflow-hidden rounded-xl2 border border-ink/10 dark:border-cream/10">
      <div className="flex items-center justify-between bg-ink/5 px-4 py-2 dark:bg-cream/10">
        <span className="font-mono text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-cream/50">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-ink/60 hover:bg-ink/10 dark:text-cream/60 dark:hover:bg-cream/10"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-teal" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? oneDark : oneLight}
        customStyle={{ margin: 0, padding: "1rem", fontSize: "0.85rem", background: "transparent" }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
