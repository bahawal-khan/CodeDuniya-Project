import { NextRequest } from "next/server";
import { streamText, createTextStreamResponse } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

export const runtime = "edge"; // fast on Vercel

const BASE_SYSTEM_PROMPT = `Tum CodeYaar ho — Pakistani beginners ka coding dost.

Personality rules (strictly follow):
- Hamesha Roman Urdu mein baat karo (thori English technical terms allowed).
- Tone: casual, friendly, motivating, thora mazaak bhi. Bilkul real dost ki tarah — lekin childish nahi, competent aur knowledgeable dost jaisa.
- Kabhi bhi formal mat bano. "Yar", "Bhai", "Baji" use karo.
- Errors pe soft raho: "Tension na le", "Koi baat nahi".
- Desi analogies use karo jab concept samjhao (cricket, chai, rickshaw, recipe, lock-key, traffic signal, ID card, etc.).
- Short aur clear answers do. Lamba lecture mat do.
- Agar student stuck ho to step-by-step help karo.
- Motivation do jab demotivated lage.
- Kabhi bhi judge mat karo.
- Student ko khud sochne madad karo — seedha jawab dene se pehle unhe guide karne ki koshish karo jahan mumkin ho, taake woh AI pe depend na ho jayein aur fundamentals seekhein.
- Agar student ne is conversation mein pehle kabhi code ya koi cheez share ki ho, use conversation history mein dekho — kabhi mat kaho ke "yaad nahi" ya "code nahi mila", jo pehle bheja gaya wo tumhare paas history mein maujood hai.

Agar current lesson ka context mile to uske around help karo.`;

// Product spec section 8: distinct modes rather than pure freeform chat.
const MODE_PROMPTS: Record<string, string> = {
  explain:
    "Mode: Explain. Agar student ne code share kiya hai (is message mein ya conversation mein pehle), to us code ko line-by-line explain karo — har important line ka kaam batao, phir overall concept ko ek desi analogy ke sath samjhao. Agar sirf ek concept ka naam poocha hai (koi code nahi), to seedha concept explain karo.",
  hint:
    "Mode: Hint. Seedha jawab MAT do. Sirf ek chhota hint do jo student ko sahi direction mein sochne pe majboor kare — taake woh khud solve kar sake.",
  debug:
    "Mode: Debug. Agar code diya gaya hai to line-by-line dekho, exact masla identify karo, aur fix batao — lekin pehle student se poocho ke woh khud dhoondna chahega ya seedha fix chahiye.",
  practice:
    "Mode: Practice. Is topic pe ek chhota practice sawal ya coding challenge generate karo, jo student ke current level ke mutabiq ho.",
  interview:
    "Mode: Interview. Ek real technical interview jaisa sawal poocho is topic pe, aur student ke jawab pe constructive feedback do — bilkul jaise ek senior developer mock interview le raha ho.",
  review:
    "Mode: Code Review. Diya gaya code parho aur ek real code review do — kya achha hai, kya improve ho sakta hai, koi bug ya bad practice to nahi.",
};

function buildSystemPrompt(mode?: string) {
  const modePrompt = mode && MODE_PROMPTS[mode] ? `\n\n${MODE_PROMPTS[mode]}` : "";
  return BASE_SYSTEM_PROMPT + modePrompt;
}

function textToStream(text: string): ReadableStream<string> {
  return new ReadableStream<string>({
    start(controller) {
      controller.enqueue(text);
      controller.close();
    },
  });
}

async function mockResponse(message: string, context?: { lessonTitle?: string; pathTitle?: string }) {
  const { getCodeYaarReply } = await import("@/lib/codeyaar");
  const reply = getCodeYaarReply(message, {
    lessonTitle: context?.lessonTitle,
    pathTitle: context?.pathTitle,
  });
  return createTextStreamResponse({ stream: textToStream(reply) });
}

// Code snippets/explanations need more room than short chat questions.
const MAX_MESSAGE_LENGTH = 4000;
// Bounds on conversation history we'll forward to the LLM — caps both
// token cost and abuse via a client sending a huge fabricated history.
const MAX_HISTORY_MESSAGES = 16;
const MAX_HISTORY_MESSAGE_LENGTH = 4000;

// Best-effort same-origin check. Not foolproof (headers are spoofable), but it
// blocks casual cross-site abuse of a route that can incur real LLM API costs
// once GROQ_API_KEY/OPENAI_API_KEY is set. For heavier production traffic,
// add proper rate limiting (Vercel Firewall or Upstash Ratelimit).
function isSameOriginRequest(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true; // same-origin browser requests may omit Origin on simple POSTs
  try {
    return new URL(origin).host === req.headers.get("host");
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!isSameOriginRequest(req)) {
      return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
    }

    const body = await req.json();
    const { message, history, context } = body as {
      message: string;
      history?: { role: string; text: string }[];
      context?: { lessonTitle?: string; pathTitle?: string; mode?: string; selectedCode?: string };
    };

    if (!message || typeof message !== "string" || !message.trim()) {
      return new Response(JSON.stringify({ error: "Message required" }), { status: 400 });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return new Response(
        JSON.stringify({ error: `Message too long (max ${MAX_MESSAGE_LENGTH} characters)` }),
        { status: 413 }
      );
    }

    // Prior turns of this conversation. Trusted client input, so re-validate
    // shape/size server-side rather than forwarding it as-is to the LLM.
    const priorMessages = Array.isArray(history)
      ? history
          .filter(
            (m): m is { role: string; text: string } =>
              !!m && (m.role === "user" || m.role === "yaar") && typeof m.text === "string" && m.text.trim().length > 0
          )
          .slice(-MAX_HISTORY_MESSAGES)
          .map((m) => ({
            role: (m.role === "user" ? "user" : "assistant") as "user" | "assistant",
            content: m.text.slice(0, MAX_HISTORY_MESSAGE_LENGTH),
          }))
      : [];

    const groqKey = process.env.GROQ_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;

    // No key configured → local mock, streamed through the same interface
    // the client always consumes, so the UI never has to branch on backend.
    if (!groqKey && !openaiKey) {
      return mockResponse(message, context);
    }

    let userContent = message;
    if (context?.lessonTitle || context?.pathTitle) {
      userContent = `[Context: Student is on path "${context.pathTitle || "unknown"}", lesson "${context.lessonTitle || "unknown"}"]\n\n${userContent}`;
    }
    if (context?.selectedCode) {
      userContent = `${userContent}\n\n[Selected code]:\n${context.selectedCode}`;
    }

    // Groq's API is OpenAI-compatible (Chat Completions shape only, not the
    // newer Responses API), so we reuse @ai-sdk/openai with a custom baseURL
    // instead of a separate Groq SDK — one provider path for both.
    const provider = groqKey
      ? createOpenAI({ baseURL: "https://api.groq.com/openai/v1", apiKey: groqKey })
      : createOpenAI({ apiKey: openaiKey });
    const model = provider.chat(groqKey ? "llama-3.3-70b-versatile" : "gpt-4o-mini");

    try {
      const result = streamText({
        model,
        system: buildSystemPrompt(context?.mode),
        messages: [...priorMessages, { role: "user", content: userContent }],
        temperature: 0.75,
        // Line-by-line code explanations and reviews run long — 600 tokens
        // was cutting them off mid-answer.
        maxOutputTokens: 1400,
      });

      // Auth/network errors from the provider surface when the stream is
      // actually read, not when streamText() is called — and once a
      // streaming Response is returned to the client it can't be swapped
      // for another one. So we peek the first chunk here, server-side,
      // before committing to the real stream; a failure at this point
      // (the common case for bad/invalid keys) degrades cleanly to the
      // mock instead of the client receiving a half-open response.
      const reader = result.textStream.getReader();
      let first: ReadableStreamReadResult<string>;
      try {
        first = await reader.read();
      } catch (streamErr) {
        console.error("CodeYaar stream error (first chunk):", streamErr);
        return mockResponse(message, context);
      }

      const stitched = new ReadableStream<string>({
        async start(controller) {
          if (!first.done && first.value) controller.enqueue(first.value);
          if (first.done) {
            controller.close();
            return;
          }
          try {
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              controller.enqueue(value);
            }
          } catch (streamErr) {
            console.error("CodeYaar stream error (mid-stream):", streamErr);
          } finally {
            controller.close();
          }
        },
      });

      return createTextStreamResponse({ stream: stitched });
    } catch (err) {
      // Construction-time failure (bad key format, etc.) — degrade to mock
      // rather than surfacing a broken half-open stream to the client.
      console.error("CodeYaar LLM setup error:", err);
      return mockResponse(message, context);
    }
  } catch (err) {
    console.error("CodeYaar API error:", err);
    return mockResponse("", {});
  }
}
