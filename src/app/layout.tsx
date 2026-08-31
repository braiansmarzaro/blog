import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "../components/scroll-to-top";
import Header from "./Header";
import { ThemeScript } from "./theme-script";
 import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Deivid Smarzaro",
  description: "Deivid Smarzaro's personal website",
};

const karla = Karla({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${karla.className} min-h-full px-6`}>
        <Analytics />
        <Header />
        <main className="mx-auto max-w-prose pb-4">
          {children}
          <ScrollToTop />
        </main>
        <footer className="mx-auto flex max-w-prose flex-col max-sm:items-start items-center gap-2 py-6 text-sm text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-4">
            <a
              className="decoration-zinc-500 underline-offset-4 transition-transform sm:hover:underline dark:decoration-zinc-400"
              href="https://github.com/braiansmarzaro/blog"
              target="_blank"
            >
              Code
            </a>
            
            
          </div>
          <blockquote className="text-zinc-800 dark:text-zinc-300">
            When you help someone climb the mountain, you reach the top yourself too 🏔️
          </blockquote>
        </footer>
      </body>
    </html>
  );
}
