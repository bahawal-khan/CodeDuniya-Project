"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Flame, Languages, MessagesSquare, Sparkles, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PathCard } from "@/components/path-card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { learningPaths, getAllLessonsFlat } from "@/data/paths";
import { useMotionVariants } from "@/lib/motion";

const FEATURES = [
  {
    icon: Languages,
    title: "Roman Urdu + English",
    titleUr: "Roman Urdu + English",
    desc: "Har concept dono zabanon mein — jo samajh aaye usay parho.",
    color: "text-saffron-dark dark:text-saffron",
    bg: "bg-saffron-soft dark:bg-saffron/15",
    glow: "bg-saffron/25",
  },
  {
    icon: MessagesSquare,
    title: "CodeYaar, your coding dost",
    titleUr: "CodeYaar, Tumhara Coding Dost",
    desc: "Ek AI dost jo hamesha available hai, judge nahi karta, bas madad karta hai.",
    color: "text-rani-dark dark:text-rani",
    bg: "bg-rani-soft dark:bg-rani/15",
    glow: "bg-rani/25",
  },
  {
    icon: Sparkles,
    title: "Desi Analogies",
    titleUr: "Desi Analogies",
    desc: "Loop = cricket over, Function = ami ka recipe. Concepts jo dil se samajh aayen.",
    color: "text-saffron-dark dark:text-saffron",
    bg: "bg-saffron-soft dark:bg-saffron/15",
    glow: "bg-saffron/25",
  },
  {
    icon: Trophy,
    title: "Streaks & Badges",
    titleUr: "Streaks Aur Badges",
    desc: "Roz thora seekho, streak banao, badges jeeto — seekhna game ban jaye.",
    color: "text-rani-dark dark:text-rani",
    bg: "bg-rani-soft dark:bg-rani/15",
    glow: "bg-rani/25",
  },
];

const CONTAINER: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export default function HomePage() {
  const { fadeUp, scaleIn } = useMotionVariants();
  const totalLessons = getAllLessonsFlat().length;

  const STATS = [
    { value: `${learningPaths.length}`, label: "Learning Paths" },
    { value: `${totalLessons}+`, label: "Lessons" },
    { value: "2", label: "Zabanein — UR + EN" },
    { value: "100%", label: "Free, Hamesha" },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="container relative overflow-hidden py-16 md:py-24">
        {/* Ambient background glow — decorative only, contained to hero */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-rani/15 blur-3xl dark:bg-rani/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-saffron/15 blur-3xl dark:bg-saffron/10"
        />

        <div className="relative grid items-center gap-10 md:grid-cols-2">
          <motion.div variants={CONTAINER} initial="hidden" animate="visible">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-1.5 rounded-full bg-rani-soft px-3 py-1 text-xs font-bold text-rani-dark dark:bg-rani/20 dark:text-rani"
            >
              <Sparkles className="h-3.5 w-3.5" /> Pakistan ka apna coding platform
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl"
            >
              Coding seekho jaise koi
              <span className="text-rani"> dost </span>
              tumhein samjha raha ho.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 max-w-md text-base leading-relaxed text-ink/70 dark:text-cream/70">
              CodeDuniya mein har lesson Roman Urdu aur English dono mein hai, har mushkil concept ka ek desi
              analogy hai, aur atkne par <strong>CodeYaar</strong> hamesha sath hai.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/paths/web-development-basics">
                  Bilkul Naya Hoon, Shuru Karo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/paths">Sab Paths Dekho</Link>
              </Button>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-2.5 text-xs text-ink/50 dark:text-cream/50">
              Naya coder ho? Yeh button seedha "Web Development Basics" — hamara sab se aasan path — kholega.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3 text-sm">
              <Link
                href="/dashboard"
                className="flex items-center gap-1.5 rounded-full border border-ink/10 px-3 py-1.5 font-semibold text-ink/70 transition-colors hover:border-saffron/30 hover:bg-saffron-soft hover:text-saffron-dark dark:border-cream/10 dark:text-cream/70 dark:hover:bg-saffron/15 dark:hover:text-saffron"
              >
                <Flame className="h-4 w-4 text-saffron-dark dark:text-saffron" /> Daily streaks
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center gap-1.5 rounded-full border border-ink/10 px-3 py-1.5 font-semibold text-ink/70 transition-colors hover:border-teal/30 hover:bg-teal-soft hover:text-teal-dark dark:border-cream/10 dark:text-cream/70 dark:hover:bg-teal/15 dark:hover:text-teal"
              >
                <Trophy className="h-4 w-4 text-teal-dark dark:text-teal" /> Mini projects
              </Link>
            </motion.div>

            {/* Trust strip — real numbers, not decoration */}
            <motion.div
              variants={fadeUp}
              className="mt-10 grid max-w-md grid-cols-4 gap-4 border-t border-ink/10 pt-6 dark:border-cream/10"
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-xl font-extrabold text-rani dark:text-rani md:text-2xl">{s.value}</p>
                  <p className="mt-0.5 text-[11px] font-medium leading-tight text-ink/55 dark:text-cream/55">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Signature element: live CodeYaar chat mockup */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.25 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="animate-float-y">
              <Card className="phool-edge overflow-hidden text-rani dark:text-saffron">
                <div className="flex items-center gap-3 bg-gradient-to-r from-saffron via-rani to-teal p-4 text-white">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/25">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display font-bold leading-tight">CodeYaar</p>
                    <p className="flex items-center gap-1.5 text-xs opacity-90">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" /> online
                    </p>
                  </div>
                </div>
                <div className="space-y-3 p-4 text-ink dark:text-cream">
                  <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-ink/5 px-4 py-2.5 text-sm dark:bg-cream/10">
                    Bhai code mein error aa raha hai 😩
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-rani px-4 py-2.5 text-sm text-white">
                    Tension na le! Error aana bilkul lock ko bina key ke kholne ki koshish jaisa hai — kuch to
                    missing hai. Error message copy-paste kar de, dekhte hain kya masla hai 🔑
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-ink/5 px-4 py-2.5 text-sm dark:bg-cream/10">
                    Shukriya yar! 🙌
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="patti-divider text-teal dark:text-teal" />

      {/* FEATURES */}
      <section className="container py-14 md:py-20">
        <h2 className="text-center font-display text-2xl font-bold md:text-3xl">
          Yeh CodeDuniya ko sab se alag banata hai
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm text-ink/60 dark:text-cream/60">
          Har feature is liye banaya gaya hai ke Pakistani beginners ko coding apni lagay, kisi doosri duniya ki nahi.
        </p>
        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <RevealItem key={f.title} className="h-full">
              <TiltCard glowClassName={f.glow} className="h-full">
                <Card className="group h-full p-5 transition-shadow duration-300 hover:shadow-card-hover dark:hover:shadow-card-hover-dark">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl2 ${f.bg} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                  >
                    <f.icon className={`h-5 w-5 ${f.color}`} />
                  </span>
                  <h3 className="mt-4 font-display font-bold">{f.title}</h3>
                  <p className="text-xs font-semibold text-ink/45 dark:text-cream/45">{f.titleUr}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-cream/65">{f.desc}</p>
                </Card>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <div className="patti-divider text-saffron dark:text-saffron" />

      {/* PATHS PREVIEW */}
      <section className="container py-14 md:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">Learning Paths</h2>
            <p className="mt-1 text-sm text-ink/60 dark:text-cream/60">Apna raasta chuno, hum sath sath chalein ge.</p>
          </div>
          <Button asChild variant="link">
            <Link href="/paths">Sab paths dekho <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((p, i) => (
            <PathCard key={p.id} path={p} index={i} recommended={i === 0} />
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="container pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rani via-rani-dark to-ink px-6 py-14 text-center text-white md:py-20"
        >
          <div aria-hidden className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-saffron/25 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-teal/20 blur-3xl" />
          <span className="relative inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" /> Bilkul Free, Hamesha Ke Liye
          </span>
          <h2 className="relative mx-auto mt-4 max-w-lg font-display text-2xl font-extrabold leading-tight md:text-3xl">
            Aaj hi apna coding safar shuru karo — CodeYaar tumhara intezaar kar raha hai.
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-sm text-white/80">
            Koi credit card nahi, koi confusing setup nahi. Bas ek click aur pehla lesson shuru.
          </p>
          <div className="relative mt-7">
            <Button asChild size="lg" className="bg-white text-rani-dark hover:bg-cream hover:text-rani-dark">
              <Link href="/paths/web-development-basics">
                Free Mein Shuru Karo <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
