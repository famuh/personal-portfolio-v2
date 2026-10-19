"use client";

import { useEffect } from "react";
import { m } from "framer-motion";
import { DUR, EASE_OUT_EXPO } from "@/lib/motion";

// Single, short route transition (replaces the old stair wipe + black
// overlay that held content back for ~2.4s). template.jsx re-mounts on every
// navigation. The very first page load renders without it so server HTML is
// visible immediately (good for LCP and no-JS); only client-side navigations
// fade in.
let hasNavigated = false;

export default function Template({ children }) {
  const animateIn = hasNavigated;
  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <m.div
      initial={animateIn ? { opacity: 0, y: 8 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DUR.base, ease: EASE_OUT_EXPO }}
    >
      {children}
    </m.div>
  );
}
