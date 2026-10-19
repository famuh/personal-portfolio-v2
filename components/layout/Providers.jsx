"use client";

import { ThemeProvider } from "next-themes";
import { LazyMotion, MotionConfig } from "framer-motion";

const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

// - Theme: follows prefers-color-scheme by default, remembers an explicit
//   choice in localStorage ("theme"), and writes `.dark` on <html> before
//   paint (no flash).
// - Motion: every framer-motion animation respects prefers-reduced-motion;
//   features load lazily (use `m.*`, not `motion.*` — `strict` enforces it).
export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <LazyMotion features={loadFeatures} strict>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  );
}
