"use client";

import * as React from "react";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QuizQuestion } from "@/data/types";
import { cn } from "@/lib/utils";

export function Quiz({
  questions,
  onComplete,
}: {
  questions: QuizQuestion[];
  onComplete: (result: { score: number; total: number }) => void;
}) {
  const [answers, setAnswers] = React.useState<(number | null)[]>(() => questions.map(() => null));
  const [submitted, setSubmitted] = React.useState(false);
  const allAnswered = answers.every((a) => a !== null);

  function selectOption(qIndex: number, optIndex: number) {
    if (submitted) return;
    setAnswers((prev) => prev.map((a, i) => (i === qIndex ? optIndex : a)));
  }

  function submit() {
    if (!allAnswered || submitted) return;
    setSubmitted(true);
    const score = questions.reduce(
      (sum, q, i) => sum + (answers[i] === q.correctIndex ? 1 : 0),
      0
    );
    onComplete({ score, total: questions.length });
  }

  return (
    <div className="space-y-4">
      {questions.map((q, qIndex) => (
        <Card key={qIndex} className="p-4">
          <p className="text-sm font-semibold">{q.question}</p>
          <p className="mb-3 text-xs text-ink/50 dark:text-cream/50">{q.questionUr}</p>
          <div className="space-y-2">
            {q.options.map((opt, optIndex) => {
              const isSelected = answers[qIndex] === optIndex;
              const isCorrect = optIndex === q.correctIndex;
              const showResult = submitted && (isSelected || isCorrect);
              return (
                <button
                  key={optIndex}
                  type="button"
                  onClick={() => selectOption(qIndex, optIndex)}
                  disabled={submitted}
                  aria-pressed={isSelected}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-xl border p-2.5 text-left text-sm transition-colors",
                    isSelected && !submitted && "border-rani/40 bg-rani-soft dark:border-saffron/40 dark:bg-saffron/10",
                    !isSelected && !submitted && "border-ink/10 hover:bg-ink/5 dark:border-cream/10 dark:hover:bg-cream/5",
                    submitted && isCorrect && "border-teal/40 bg-teal-soft dark:border-teal/40 dark:bg-teal/15",
                    submitted && isSelected && !isCorrect && "border-rani/40 bg-rani-soft dark:border-rani/40 dark:bg-rani/15"
                  )}
                >
                  {showResult && isCorrect && <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />}
                  {showResult && isSelected && !isCorrect && <XCircle className="h-4 w-4 shrink-0 text-rani" />}
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>
          {submitted && (
            <p className="mt-2 flex items-start gap-1.5 text-xs text-ink/60 dark:text-cream/60">
              <HelpCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {q.explanation}
            </p>
          )}
        </Card>
      ))}

      {!submitted ? (
        <Button onClick={submit} disabled={!allAnswered}>
          Quiz Submit Karo
        </Button>
      ) : (
        <p className="text-sm font-semibold text-teal-dark dark:text-teal">
          {questions.reduce((sum, q, i) => sum + (answers[i] === q.correctIndex ? 1 : 0), 0)} / {questions.length} sahi — shabash!
        </p>
      )}
    </div>
  );
}
