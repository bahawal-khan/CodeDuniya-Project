"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import type { OnMount } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { Play, RotateCcw, Terminal, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useSetSelectedCode } from "@/lib/codeyaar-context";
import { cn } from "@/lib/utils";

// Monaco is the single heaviest dependency in the app — load it only when a
// playground actually mounts, same discipline as the syntax highlighter and
// Pyodide below.
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => <Skeleton className="h-[40vh] rounded-none sm:h-[50vh]" />,
});

type Lang = "html" | "javascript" | "js" | "css" | "python" | "jsx" | "sql" | "bash" | "text";

interface CodePlaygroundProps {
  language: string;
  initialCode: string;
  className?: string;
  // Enables localStorage auto-save/restore, scoped per lesson+purpose (e.g.
  // `example-${lesson.id}` vs `challenge-${lesson.id}`). Omit for
  // throwaway/no-persistence use.
  storageKey?: string;
}

interface PyodideInterface {
  runPythonAsync: (code: string) => Promise<unknown>;
  setStdout: (opts: { batched: (s: string) => void }) => void;
}

interface PyodideWindow extends Window {
  loadPyodide?: (opts: { indexURL: string }) => Promise<PyodideInterface>;
  __pyodide?: PyodideInterface;
}

function normalizeLang(lang: string): Lang {
  const l = lang.toLowerCase();
  if (l === "js" || l === "javascript" || l === "jsx") return "javascript";
  if (l === "html" || l === "css" || l === "sql") return l as Lang;
  if (l === "python" || l === "py") return "python";
  return "javascript";
}

const MONACO_LANG: Record<Lang, string> = {
  html: "html",
  css: "css",
  javascript: "javascript",
  js: "javascript",
  jsx: "javascript",
  python: "python",
  sql: "sql",
  bash: "shell",
  text: "plaintext",
};

function storageKeyFor(key: string) {
  return `codeduniya_playground_${key}`;
}

export function CodePlayground({ language, initialCode, className, storageKey }: CodePlaygroundProps) {
  const lang = normalizeLang(language);
  const { theme } = useTheme();
  const [code, setCode] = React.useState(initialCode);
  const [output, setOutput] = React.useState<string>("");
  const [htmlPreview, setHtmlPreview] = React.useState<string>("");
  const [running, setRunning] = React.useState(false);
  const [mode, setMode] = React.useState<"preview" | "console">(
    lang === "html" || lang === "css" ? "preview" : "console"
  );
  const [restorePrompt, setRestorePrompt] = React.useState<string | null>(null);
  const saveTimeout = React.useRef<ReturnType<typeof setTimeout>>();
  const setSelectedCode = useSetSelectedCode();

  const handleEditorMount: OnMount = (editor) => {
    editor.onDidChangeCursorSelection((e) => {
      const model = editor.getModel();
      const text = model?.getValueInRange(e.selection) ?? "";
      setSelectedCode(text.trim() || undefined);
    });
  };

  React.useEffect(() => {
    setCode(initialCode);
    setOutput("");
    setHtmlPreview("");
  }, [initialCode]);

  // On mount, offer to restore any auto-saved code that differs from the
  // lesson's default starter code.
  React.useEffect(() => {
    if (!storageKey) return;
    const saved = window.localStorage.getItem(storageKeyFor(storageKey));
    if (saved && saved !== initialCode) {
      setRestorePrompt(saved);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  function handleCodeChange(value: string | undefined) {
    const next = value ?? "";
    setCode(next);
    if (!storageKey) return;
    if (saveTimeout.current) clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => {
      window.localStorage.setItem(storageKeyFor(storageKey), next);
    }, 500);
  }

  function reset() {
    setCode(initialCode);
    setOutput("");
    setHtmlPreview("");
    if (storageKey) window.localStorage.removeItem(storageKeyFor(storageKey));
  }

  function restoreSaved() {
    if (restorePrompt) setCode(restorePrompt);
    setRestorePrompt(null);
  }

  function dismissRestore() {
    if (storageKey) window.localStorage.removeItem(storageKeyFor(storageKey));
    setRestorePrompt(null);
  }

  async function run() {
    setRunning(true);
    setOutput("");
    setHtmlPreview("");

    try {
      if (lang === "html" || lang === "css") {
        // Treat as full HTML document or inject CSS
        let src = code;
        if (lang === "css") {
          src = `<!DOCTYPE html><html><head><style>${code}</style></head><body>
            <h1>CSS Preview</h1>
            <p class="card">Yeh ek sample paragraph hai.</p>
            <div class="box">Box model test</div>
          </body></html>`;
        } else if (!code.includes("<html") && !code.includes("<!DOCTYPE")) {
          src = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
            body{font-family:system-ui,sans-serif;padding:16px;background:#FBF6EC;color:#241B2F}
          </style></head><body>${code}</body></html>`;
        }
        setHtmlPreview(src);
        setMode("preview");
        setOutput("Preview update ho gaya ✓");
      } else if (lang === "javascript") {
        const logs: string[] = [];
        const fakeConsole = {
          log: (...args: unknown[]) =>
            logs.push(args.map((a) => (typeof a === "object" ? JSON.stringify(a, null, 2) : String(a))).join(" ")),
          error: (...args: unknown[]) => logs.push("Error: " + args.map(String).join(" ")),
          warn: (...args: unknown[]) => logs.push("Warn: " + args.map(String).join(" ")),
        };
        try {
          // eslint-disable-next-line no-new-func
          const fn = new Function("console", code);
          fn(fakeConsole);
          setOutput(logs.length ? logs.join("\n") : "(Koi console output nahi — code chal gaya)");
        } catch (e) {
          setOutput("Error: " + (e instanceof Error ? e.message : String(e)));
        }
        setMode("console");
      } else if (lang === "python") {
        // Lightweight Python via Pyodide CDN (cached after first load)
        setOutput("Python load ho raha hai... (pehli baar thora time lag sakta hai)");
        try {
          const win = window as unknown as PyodideWindow;
          if (!win.loadPyodide) {
            await new Promise<void>((resolve, reject) => {
              const s = document.createElement("script");
              s.src = "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js";
              s.onload = () => resolve();
              s.onerror = () => reject(new Error("Pyodide load fail"));
              document.head.appendChild(s);
            });
          }
          if (!win.__pyodide) {
            win.__pyodide = await win.loadPyodide!({
              indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/",
            });
          }
          const pyodide = win.__pyodide!;
          const lines: string[] = [];
          pyodide.setStdout({ batched: (s: string) => lines.push(s) });
          await pyodide.runPythonAsync(code);
          setOutput(lines.length ? lines.join("\n") : "(Python chal gaya — print() se output dekho)");
        } catch (e) {
          setOutput("Python error: " + (e instanceof Error ? e.message : String(e)));
        }
        setMode("console");
      } else if (lang === "sql") {
        // No SQL lesson content exists yet, so we don't ship the ~1-1.5MB
        // sql.js WASM bundle for an unreachable feature. Real syntax
        // highlighting still works via Monaco above. Swap this branch for a
        // lazy-loaded sql.js runner once SQL content lands.
        setOutput("SQL execution jald aa raha hai — abhi ke liye syntax highlighting available hai.");
        setMode("console");
      } else {
        setOutput("Is language ka live run abhi support nahi — code copy karke apne editor mein try karo.");
        setMode("console");
      }
    } finally {
      setRunning(false);
    }
  }

  const canRun = ["html", "css", "javascript", "python"].includes(lang);

  return (
    <div className={cn("overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-card dark:border-cream/10 dark:bg-nightcard dark:shadow-cardDark", className)}>
      <Dialog open={!!restorePrompt} onOpenChange={(open) => !open && dismissRestore()}>
        <DialogContent>
          <DialogTitle>Pichla code wapas laayen?</DialogTitle>
          <DialogDescription>
            Tumne is playground mein pehle kuch likha tha. Wahi se continue karna chahte ho, ya original code se start karna chahte ho?
          </DialogDescription>
          <div className="mt-4 flex gap-2">
            <Button size="sm" onClick={restoreSaved}>Continue Karo</Button>
            <Button size="sm" variant="outline" onClick={dismissRestore}>Nayi Shuruat</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/8 bg-cream/60 px-3 py-2.5 dark:border-cream/10 dark:bg-night/50">
        <div className="flex items-center gap-2">
          <Code2 className="h-4 w-4 text-rani" />
          <span className="text-xs font-bold uppercase tracking-wide text-ink/60 dark:text-cream/60">
            Live Playground · {lang}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="outline" size="sm" onClick={reset} className="h-8 gap-1 text-xs">
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </Button>
          {canRun && (
            <Button type="button" size="sm" onClick={run} disabled={running} className="h-8 gap-1 text-xs">
              <Play className="h-3.5 w-3.5" />
              {running ? "Chal raha..." : "Run"}
            </Button>
          )}
        </div>
      </div>

      {/* Editor — explicit height clamp avoids Monaco's known ResizeObserver
          issues when its parent height is unconstrained. */}
      <div className="h-[40vh] w-full sm:h-[50vh]">
        <MonacoEditor
          language={MONACO_LANG[lang]}
          value={code}
          onChange={handleCodeChange}
          onMount={handleEditorMount}
          theme={theme === "dark" ? "vs-dark" : "light"}
          options={{
            fontSize: 13,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: "on",
            automaticLayout: true,
            padding: { top: 12 },
          }}
        />
      </div>

      {/* Output */}
      <div className="border-t border-ink/8 dark:border-cream/10">
        <div className="flex items-center gap-2 bg-ink/5 px-3 py-2 dark:bg-cream/5">
          <Terminal className="h-3.5 w-3.5 text-teal" />
          <span className="text-xs font-semibold text-ink/55 dark:text-cream/55">
            {mode === "preview" ? "Preview" : "Output"}
          </span>
        </div>
        {mode === "preview" && htmlPreview ? (
          <iframe
            title="preview"
            sandbox="allow-scripts"
            srcDoc={htmlPreview}
            className="h-[240px] w-full bg-white"
          />
        ) : (
          <pre className="max-h-[200px] overflow-auto whitespace-pre-wrap px-4 py-3 font-mono text-[12.5px] text-ink/80 dark:text-cream/80">
            {output || "Run dabao — output yahan dikhega"}
          </pre>
        )}
      </div>
    </div>
  );
}
