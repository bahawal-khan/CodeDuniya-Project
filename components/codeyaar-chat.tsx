"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Code2, Copy, Check } from "lucide-react";
import { getCodeYaarReply, codeYaarStarters } from "@/lib/codeyaar";
import { useYaarContext } from "@/lib/codeyaar-context";
import { loadProgress } from "@/lib/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  role: "user" | "yaar";
  text: string;
}

// Product spec section 8: distinct modes instead of pure freeform chat.
// "chat" (no mode key sent) is the default, unmodified personality.
const MODES: { id: string; label: string }[] = [
  { id: "chat", label: "Chat" },
  { id: "explain", label: "Explain" },
  { id: "hint", label: "Hint" },
  { id: "debug", label: "Debug" },
  { id: "practice", label: "Practice" },
  { id: "interview", label: "Interview" },
  { id: "review", label: "Review" },
];

// A mode tab only changes how CodeYaar answers your *next* typed message —
// it doesn't do anything by itself. These give visible feedback that the
// click registered, since the tab highlight alone is easy to miss.
const MODE_HINTS: Record<string, string> = {
  chat: "Normal baat cheet — kuch bhi pooch lo.",
  explain: "Concept ka naam likho, step-by-step analogy ke sath samjhaya jayega.",
  hint: "Jahan atke ho woh likho — seedha jawab nahi, sirf sahi direction ka hint milega.",
  debug: "Apna code paste ya select karo — line-by-line masla dhoonda jayega.",
  practice: "Topic likho, usi level ka ek practice sawal ya challenge milega.",
  interview: "Topic likho, ek mock interview sawal milega jiska jawab dena hai.",
  review: "Apna code paste ya select karo — real code review milega.",
};

const MODE_PLACEHOLDERS: Record<string, string> = {
  chat: "Kuch bhi pooch lo yar...",
  explain: "Konsa concept samjhana hai?",
  hint: "Kahan atak gaye ho?",
  debug: "Apna code yahan paste karo...",
  practice: "Konsa topic practice karna hai?",
  interview: "Konsa topic ka interview sawal chahiye?",
  review: "Apna code paste karo...",
};

function openingLine(streak: number, lessonTitle?: string) {
  if (lessonTitle) {
    return `Yar kya haal hai? Dekh raha hoon tu "${lessonTitle}" wale lesson par ho. Kuch samjhana hai ya bas hi salam karna tha? 😄`;
  }
  if (streak >= 3) {
    return `Wah bhai! ${streak} din ki streak chal rahi hai — mast lag raha hai! 🔥 Aaj kya seekhna hai?`;
  }
  return "Yar kya haal hai? Aaj kya scene hai coding ka? Main CodeYaar hoon — jo bhi puchna ho, seedha pooch lo. Main yahan hoon!";
}

export function CodeYaarChat() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [input, setInput] = React.useState("");
  const [typing, setTyping] = React.useState(false);
  const [mode, setMode] = React.useState("chat");
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const { lessonTitle, pathTitle, selectedCode } = useYaarContext();
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  const codeAwareMode = ["explain", "debug", "review"].includes(mode);

  React.useEffect(() => {
    if (open && messages.length === 0) {
      const progress = loadProgress();
      setMessages([
        { id: "opening", role: "yaar", text: openingLine(progress.streak, lessonTitle) },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  React.useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  async function send(text: string) {
    if (!text.trim()) return;
    const userMsg: ChatMessage = { id: crypto.randomUUID(), role: "user", text };
    // Built from the pre-update closure + the new message, not read back from
    // state, since setMessages() below hasn't committed yet at this point.
    const history = [...messages, userMsg];
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);

    const replyId = crypto.randomUUID();

    try {
      const res = await fetch("/api/codeyaar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          // Full thread so far — without this the model only ever sees the
          // single latest message and has no idea what code/topic an earlier
          // message in the same conversation referred to.
          history: history.slice(0, -1).map((m) => ({ role: m.role, text: m.text })),
          context: {
            lessonTitle,
            pathTitle,
            mode: mode === "chat" ? undefined : mode,
            selectedCode: codeAwareMode ? selectedCode : undefined,
          },
        }),
      });

      if (!res.ok || !res.body) throw new Error("stream unavailable");

      // Server always streams plain text now (real LLM or a single-chunk
      // mock stream — see app/api/codeyaar/route.ts), so the client never
      // has to branch on which backend answered.
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";
      let placed = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        if (!placed) {
          setTyping(false);
          setMessages((m) => [...m, { id: replyId, role: "yaar", text: accumulated }]);
          placed = true;
        } else {
          setMessages((m) => m.map((msg) => (msg.id === replyId ? { ...msg, text: accumulated } : msg)));
        }
      }

      if (!placed) {
        // Stream opened but produced nothing — fall back rather than show a blank bubble.
        const reply = getCodeYaarReply(text, { lessonTitle, pathTitle });
        setMessages((m) => [...m, { id: replyId, role: "yaar", text: reply }]);
      }
    } catch {
      const reply = getCodeYaarReply(text, { lessonTitle, pathTitle });
      setMessages((m) => [...m, { id: replyId, role: "yaar", text: reply }]);
    } finally {
      setTyping(false);
    }
  }

  function copyMessage(id: string, text: string) {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId((c) => (c === id ? null : c)), 1500);
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        aria-label="CodeYaar se baat karo"
        className="fixed bottom-5 right-5 z-50 flex h-15 w-15 items-center justify-center rounded-full bg-gradient-to-br from-saffron via-rani to-teal text-white shadow-lg glow-rani animate-float-y md:bottom-8 md:right-8"
        style={{ width: 60, height: 60 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Online pulse */}
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-70" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-teal border-2 border-white dark:border-night" />
          </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed bottom-24 right-4 z-50 flex h-[min(75vh,620px)] w-[min(94vw,380px)] flex-col overflow-hidden rounded-3xl border border-ink/8 bg-white shadow-card-hover dark:border-cream/10 dark:bg-nightcard dark:shadow-card-hover-dark md:right-8"
          >
            {/* Header */}
            <div className="relative flex items-center gap-3 overflow-hidden bg-gradient-to-r from-saffron via-rani to-teal p-4 text-white">
              <div className="absolute inset-0 bg-black/5" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm shadow-sm">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="relative">
                <p className="font-display text-lg font-bold leading-tight">CodeYaar</p>
                <p className="flex items-center gap-1.5 text-xs font-medium opacity-95">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  Online — hamesha yahan hai
                </p>
              </div>
            </div>

            {/* Mode selector */}
            <div className="border-b border-ink/6 px-3 py-2 dark:border-cream/8">
              <Tabs value={mode} onValueChange={setMode}>
                <TabsList className="w-full justify-start overflow-x-auto scrollbar-thin">
                  {MODES.map((m) => (
                    <TabsTrigger key={m.id} value={m.id} className="shrink-0 px-3 py-1 text-xs">
                      {m.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              <p className="mt-1.5 flex items-center gap-1 text-[11px] text-ink/50 dark:text-cream/50">
                {codeAwareMode && <Code2 className="h-3 w-3 shrink-0 text-teal-dark dark:text-teal" />}
                {codeAwareMode && selectedCode
                  ? "Selected code shamil ho jayega is message mein."
                  : MODE_HINTS[mode] ?? MODE_HINTS.chat}
              </p>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="scrollbar-thin flex-1 space-y-3.5 overflow-y-auto px-4 py-4">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className={cn("flex flex-col", m.role === "user" ? "items-end" : "items-start")}
                >
                  <div
                    className={cn(
                      "max-w-[88%] whitespace-pre-wrap break-words rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed shadow-sm",
                      m.role === "user"
                        ? "rounded-br-md bg-rani text-white"
                        : "rounded-bl-md bg-cream text-ink dark:bg-nightsoft dark:text-cream"
                    )}
                  >
                    {m.text}
                  </div>
                  <button
                    type="button"
                    onClick={() => copyMessage(m.id, m.text)}
                    aria-label="Message copy karo"
                    className="mt-1 flex items-center gap-1 px-1 text-[10px] font-medium text-ink/35 transition-colors hover:text-rani dark:text-cream/35 dark:hover:text-saffron"
                  >
                    {copiedId === m.id ? (
                      <>
                        <Check className="h-3 w-3 text-teal-dark dark:text-teal" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" /> Copy
                      </>
                    )}
                  </button>
                </motion.div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-cream px-4 py-3 dark:bg-nightsoft">
                    <span className="typing-dot h-1.5 w-1.5 rounded-full bg-rani/70" />
                    <span className="typing-dot h-1.5 w-1.5 rounded-full bg-rani/70" />
                    <span className="typing-dot h-1.5 w-1.5 rounded-full bg-rani/70" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick starters */}
            {messages.length <= 1 && !typing && (
              <div className="flex flex-wrap gap-2 border-t border-ink/6 px-3 py-2.5 dark:border-cream/8">
                {codeYaarStarters.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-medium text-ink/80 transition-all hover:border-rani/30 hover:bg-rani-soft hover:text-rani-dark dark:border-cream/12 dark:bg-nightsoft dark:text-cream/80 dark:hover:border-saffron/30 dark:hover:bg-saffron/10"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input — auto-growing textarea, not a single-line input, so
                pasted multi-line code survives intact. Enter sends, Shift+Enter
                adds a newline (standard chat convention). */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
                if (inputRef.current) inputRef.current.style.height = "auto";
              }}
              className="flex items-end gap-2 border-t border-ink/6 bg-cream/50 p-3 dark:border-cream/8 dark:bg-night/40"
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  const el = e.target;
                  el.style.height = "auto";
                  el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                    if (inputRef.current) inputRef.current.style.height = "auto";
                  }
                }}
                rows={1}
                placeholder={MODE_PLACEHOLDERS[mode] ?? MODE_PLACEHOLDERS.chat}
                className="max-h-40 flex-1 resize-none rounded-2xl border border-ink/8 bg-white px-4 py-2.5 text-sm leading-relaxed outline-none transition-shadow focus:ring-2 focus:ring-rani/25 dark:border-cream/10 dark:bg-nightcard dark:focus:ring-saffron/25"
              />
              <motion.button
                type="submit"
                aria-label="Send"
                whileTap={{ scale: 0.88 }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rani to-saffron text-white shadow-sm transition-shadow hover:shadow-glow-rani"
              >
                <Send className="h-4 w-4" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
