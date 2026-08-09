# CodeDuniya 🇵🇰

**Coding seekho jaise koi dost tumhein samjha raha ho.**

A production-ready educational platform for Pakistani / Urdu-speaking beginners, built with Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn-style UI, Framer Motion, and a floating AI study-buddy chatbot called **CodeYaar**.

---

## ✨ What's inside

- **5 learning paths**: Full Stack Web Dev, AI & ML Engineering, Complete Python, Complete JavaScript, Web Dev Basics — each with a full module roadmap, mini projects, and daily tasks. Architecture supports adding many more (see [Extending](#-extending)).
- **Bilingual lessons**: every lesson has a Roman Urdu + English toggle, a syntax-highlighted code example, line-by-line "yeh line kyun likhi hai" breakdowns, a "Kyun yeh kaam karta hai?" section, a **desi analogy** (loop → cricket over, function → ami ka recipe, variable → dabba, API → restaurant order, error → lock without key, etc.), and a "Try it yourself" task. Select lessons also carry a real-life example, common mistakes, a dry run, a cheat sheet, an interactive quiz and a coding challenge.
- **Live code playground** — Monaco Editor (the engine behind VS Code), lazy-loaded only when a lesson actually needs it. Runs HTML/CSS in a sandboxed iframe, JavaScript directly in-browser, and Python via Pyodide (WASM) — all client-side, no server-side code execution. Auto-saves your work per lesson.
- **CodeYaar** — a floating AI mentor on every page with a warm, funny, motivating Pakistani-dost personality. Six modes (Chat/Explain/Hint/Debug/Practice/Interview/Review), streams responses via the Vercel AI SDK, and can see whatever code you've selected in a playground. Falls back to a smart local mock when no API key is set — the app never breaks.
- **CodeDNA** — a deterministic (not ML) personalization engine: tracks quiz/challenge results per topic, flags weak topics, and prioritizes lessons/revision accordingly. See `lib/codedna.ts`.
- **Dashboard** — streak counter, XP, level, badges (with an unlock celebration toast), recommended next lesson, and a shared daily challenge.
- **Progress system** — lessons, projects, quizzes, challenges, streaks, badges — all persisted to `localStorage` (no backend required).
- **Search** across every lesson, dark/light mode, fully responsive, a sitewide motion system that respects `prefers-reduced-motion`.

### Design language
The visual identity draws on **Pakistani truck art** rather than generic SaaS defaults: a warm cream/night palette with saffron, rani pink and teal accents, a hand-painted "phool" scalloped edge on feature cards, and a dotted "phool patti" section divider. Fonts: Sora (display), Inter (body), JetBrains Mono (code).

---

## 📁 Project structure

```
codeduniya/
├── app/
│   ├── layout.tsx                 # Root layout: fonts, theme, navbar, footer, CodeYaar, toasts
│   ├── template.tsx               # Page-transition wrapper (remounts per navigation)
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Tailwind + signature CSS (phool-edge, patti-divider, reduced-motion)
│   ├── error.tsx / loading.tsx / not-found.tsx
│   ├── sitemap.ts / robots.ts / manifest.ts
│   ├── icon.tsx / apple-icon.tsx / opengraph-image.tsx   # Generated via next/og, no image assets needed
│   ├── api/codeyaar/route.ts      # Streaming AI mentor endpoint (edge runtime)
│   ├── paths/
│   │   ├── page.tsx                              # All paths grid
│   │   └── [slug]/
│   │       ├── page.tsx + path-detail-client.tsx           # Path roadmap (server + client split for SEO)
│   │       └── [moduleSlug]/[lessonSlug]/
│   │           └── page.tsx + lesson-detail-client.tsx     # Lesson page (server + client split for SEO)
│   ├── dashboard/page.tsx + dashboard-inner.tsx   # Progress, streak, level, badges, daily challenge
│   └── search/page.tsx + search-inner.tsx         # Lesson search
├── components/
│   ├── ui/                        # button, card, badge, progress, tabs, dialog, toast, skeleton (shadcn-style)
│   ├── navbar.tsx, theme-toggle.tsx, theme-provider.tsx
│   ├── path-card.tsx, code-block.tsx, code-playground.tsx, quiz.tsx
│   └── codeyaar-chat.tsx          # The floating AI mentor widget (modes, streaming)
├── data/
│   ├── types.ts                   # Lesson / Module / LearningPath types
│   ├── topic-tags.ts              # Typed topic-tag taxonomy used by CodeDNA
│   ├── paths.ts                   # Thin re-export shim — real content lives in data/courses/
│   └── courses/                   # One file per learning path + an aggregating index.ts
├── lib/
│   ├── utils.ts                   # cn() helper
│   ├── motion.ts                  # Shared Framer Motion variants (respects prefers-reduced-motion)
│   ├── progress.ts                # localStorage progress/XP/level/streak/badges/quiz/challenge store
│   ├── path-progress.ts           # % complete, naive next-lesson helper
│   ├── codedna.ts                 # Deterministic weak/strong-topic scoring + recommendations
│   ├── daily-challenge.ts         # Picks the shared daily challenge
│   ├── icon-map.tsx                # icon + theme color lookups
│   ├── codeyaar.ts                # CodeYaar's local mock reply engine (fallback when no API key)
│   └── codeyaar-context.tsx       # Tells CodeYaar what lesson/selected code you're looking at
├── tailwind.config.ts
├── .env.example
└── package.json
```

### Content scope (be aware)
Every module across all 5 paths has real titles, descriptions, topics and a mini project. **All 39 lessons** across the 5 paths are fully written out bilingually (explanation, code example, line-by-line notes, analogy, practice task, `hasFullContent: true`). A handful of flagship lessons additionally have a real-life example, common mistakes, a dry run, a cheat sheet, a quiz and a coding challenge — search `data/courses/` for `"quiz":` to find them and use them as the template for adding these to more lessons. The `Lesson` type in `data/types.ts` documents every optional field.

---

## 🚀 Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # run the production build locally
```

---

## 🤖 CodeYaar — AI Mentor

CodeYaar is wired to a real, streaming API route: `app/api/codeyaar/route.ts`, built on the **Vercel AI SDK** (`ai` + `@ai-sdk/openai`).

### How it works
- Chat UI calls `POST /api/codeyaar` and reads back a streaming plain-text response — real LLM or the local mock, the client never has to know which.
- If you set an API key → real LLM replies (Roman Urdu, dost-style), streamed token-by-token.
- If no key → the smart local mock (`lib/codeyaar.ts`) still works, wrapped in the same streaming interface, so the widget's behavior is identical either way — the app never breaks without a key.
- If the real provider call fails mid-request (bad key, network issue), the route peeks the first streamed chunk server-side before committing to it — a failure there degrades cleanly to the mock instead of the client seeing a half-open response.

### Modes
The chat widget has six modes (Chat, Explain, Hint, Debug, Practice, Interview, Review) — each appends a modifier to the base system prompt in `route.ts`. In Explain/Debug/Review mode, whatever code you've selected in a lesson's playground is automatically included as context (wired through `lib/codeyaar-context.tsx`).

### Recommended: Groq (fast + free tier)
1. Go to https://console.groq.com and create a free API key
2. In Vercel → Project → Settings → Environment Variables:
   - Name: `GROQ_API_KEY`
   - Value: your key
3. Redeploy

### Alternative: OpenAI
- Set `OPENAI_API_KEY` instead (uses `gpt-4o-mini`)

Both providers go through `@ai-sdk/openai` — Groq's API is OpenAI-compatible, so it's used via a custom `baseURL` rather than a separate SDK. Personality is locked in the system prompt (Roman Urdu, desi analogies, "yar/bhai" tone, explicitly *not* childish).

### Abuse protection
The route validates message length (max 1000 chars) and checks the request's `Origin` against `Host` to block casual cross-site abuse. This is lightweight and not foolproof — once you set a real API key, anyone hammering your deployed URL directly can still run up usage. If you expect real traffic, add proper rate limiting on top: [Vercel Firewall](https://vercel.com/docs/security/vercel-firewall) rules, or [Upstash Ratelimit](https://github.com/upstash/ratelimit) keyed by IP inside the route handler.

---

## ☁️ Deploy on Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "CodeDuniya v1"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. **Import into Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Framework Preset: **Next.js** (auto-detected)
   - Build Command: `next build` (default)
3. **Environment Variables** — copy `.env.example` and fill in what you need:
   - `GROQ_API_KEY` = your Groq key (recommended) — OR `OPENAI_API_KEY` = your OpenAI key. Without either, CodeYaar still works in mock mode.
   - `NEXT_PUBLIC_SITE_URL` = your deployed domain (used by the sitemap, robots.txt and page metadata)
4. Click **Deploy** — live URL in ~1–2 minutes
5. **Custom domain**: Project Settings → Domains → add your domain

No database required. Fully serverless-compatible. No server-side code execution anywhere — the code playground runs HTML/CSS/JS/Python entirely in the visitor's browser (iframe sandbox + Pyodide WASM), so there's no arbitrary-code-execution risk to the deployment.

---

## 🧩 Extending

- **New course/path**: add a new file to `data/courses/` (copy the shape of an existing one, e.g. `complete-python.ts`) and register it in `data/courses/index.ts`'s `learningPaths` array. That's the whole change — paths grid, dashboard, search, sitemap and routing all derive from that array. A dev-time check in `index.ts` catches duplicate path/module/lesson slugs across course files.
- **New lesson fields** (quiz, coding challenge, real-life example, common mistakes, dry run, cheat sheet): all optional on the `Lesson` type in `data/types.ts` — search any course file for `"quiz":` for a worked example, or see `lessonSlug/lesson-detail-client.tsx` for how each section renders.
- **New topic tag** (for CodeDNA weak/strong-topic tracking): add it to `data/topic-tags.ts`'s `TOPIC_TAGS` array, then reference it from a lesson's `topicTags`.
- **New badge**: add an entry to `computeBadges()` in `lib/progress.ts`.
- **Swap the analogy set**: analogies live directly on each `Lesson` (`analogyTitle/analogyEn/analogyUr`) — nothing hardcoded in the UI.
- **Real backend later**: `lib/progress.ts` is the single place that reads/writes progress; swap its `localStorage` calls for API calls to move to a real database without touching any page component.
- **Real SQL execution in the playground**: the language is already selectable in Monaco with syntax highlighting; wire up `sql.js` (WASM) in `components/code-playground.tsx`'s `run()` function once SQL lesson content exists — deferred for now since it's a large dependency with nothing to run yet.
