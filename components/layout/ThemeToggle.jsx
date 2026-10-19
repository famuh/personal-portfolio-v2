"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const label = mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle theme";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className={cn(
        "relative flex size-10 items-center justify-center overflow-hidden rounded-chip border border-line text-ink transition-colors duration-(--dur-base) hover:border-ink",
        className
      )}
    >
      <Sun
        aria-hidden="true"
        className={cn(
          "absolute size-4 transition-[transform,opacity] duration-(--dur-slow) ease-out-expo",
          isDark ? "translate-y-6 rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100"
        )}
      />
      <Moon
        aria-hidden="true"
        className={cn(
          "absolute size-4 transition-[transform,opacity] duration-(--dur-slow) ease-out-expo",
          isDark ? "translate-y-0 rotate-0 opacity-100" : "-translate-y-6 -rotate-90 opacity-0"
        )}
      />
    </button>
  );
}
