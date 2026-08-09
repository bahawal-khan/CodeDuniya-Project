"use client";

import * as React from "react";
import { Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CertificateCardProps {
  completedCount: number;
  totalCount: number;
  streak: number;
}

export function CertificateCard({ completedCount, totalCount, streak }: CertificateCardProps) {
  const ready = completedCount >= 10;

  function downloadCert() {
    const canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height = 700;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background
    ctx.fillStyle = "#FBF6EC";
    ctx.fillRect(0, 0, 1000, 700);

    // Border
    ctx.strokeStyle = "#D6336C";
    ctx.lineWidth = 12;
    ctx.strokeRect(30, 30, 940, 640);

    ctx.strokeStyle = "#F2A93B";
    ctx.lineWidth = 4;
    ctx.strokeRect(50, 50, 900, 600);

    // Title
    ctx.fillStyle = "#241B2F";
    ctx.font = "bold 48px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText("CodeDuniya", 500, 140);

    ctx.fillStyle = "#D6336C";
    ctx.font = "24px Georgia, serif";
    ctx.fillText("Certificate of Progress", 500, 190);

    ctx.fillStyle = "#241B2F";
    ctx.font = "20px sans-serif";
    ctx.fillText("Yeh certify kiya jata hai ke learner ne", 500, 280);

    ctx.font = "bold 36px Georgia, serif";
    ctx.fillText(`${completedCount} lessons complete kiye`, 500, 340);

    ctx.font = "18px sans-serif";
    ctx.fillStyle = "#555";
    ctx.fillText(`Streak: ${streak} din  ·  Platform: CodeDuniya`, 500, 400);
    ctx.fillText("Coding seekho apne andaz mein — Roman Urdu + English", 500, 440);

    ctx.fillStyle = "#0E7C7B";
    ctx.font = "16px sans-serif";
    ctx.fillText(new Date().toLocaleDateString("en-PK"), 500, 520);

    ctx.fillStyle = "#241B2F";
    ctx.font = "14px sans-serif";
    ctx.fillText("Free progress certificate — keep learning!", 500, 580);

    const link = document.createElement("a");
    link.download = `codeduniya-certificate-${completedCount}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  return (
    <Card className="p-5">
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-saffron-soft dark:bg-saffron/15">
          <Award className="h-5 w-5 text-saffron-dark dark:text-saffron" />
        </span>
        <div className="flex-1">
          <h3 className="font-display font-bold">Free Progress Certificate</h3>
          <p className="mt-1 text-sm text-ink/65 dark:text-cream/65">
            {ready
              ? "Mubarak ho! 10+ lessons complete — certificate download kar sakte ho (bilkul free)."
              : `Certificate unlock ke liye ${Math.max(0, 10 - completedCount)} aur lessons complete karo. (${completedCount}/${totalCount})`}
          </p>
          <Button
            size="sm"
            className="mt-3"
            disabled={!ready}
            onClick={downloadCert}
          >
            <Download className="h-4 w-4" />
            Certificate Download
          </Button>
        </div>
      </div>
    </Card>
  );
}
