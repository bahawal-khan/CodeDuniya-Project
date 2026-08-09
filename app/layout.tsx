import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { YaarContextProvider } from "@/lib/codeyaar-context";
import { ToastProvider } from "@/components/ui/toast";
import { Navbar } from "@/components/navbar";
import { CodeYaarChat } from "@/components/codeyaar-chat";
import { Sparkles } from "lucide-react";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["400", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jbmono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbmono" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://codeduniya.vercel.app";
const TITLE = "CodeDuniya — Coding Seekho Apne Andaz Mein";
const DESCRIPTION =
  "Pakistan ka apna coding platform — Roman Urdu aur English mein, ek dost (CodeYaar) ke sath, zero se hero tak.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s" },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "CodeDuniya",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${inter.variable} ${jbmono.variable} font-body`}>
        <ThemeProvider>
          <YaarContextProvider>
            <ToastProvider>
              <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">{children}</main>
                <footer className="border-t border-ink/10 dark:border-cream/10">
                  <div className="patti-divider text-rani dark:text-saffron" />
                  <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-ink/60 dark:text-cream/60 md:flex-row">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-rani" />
                      <span className="font-display font-bold text-ink dark:text-cream">CodeDuniya</span>
                      <span>— coding seekho apne andaz mein.</span>
                    </div>
                    <p>Made with ❤️ for Pakistani beginners.</p>
                  </div>
                </footer>
                <CodeYaarChat />
              </div>
            </ToastProvider>
          </YaarContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
