"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import { profile } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeToggle from "./layout/ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 h-(--header-h) border-b print:hidden transition-[background-color,border-color] duration-(--dur-base)",
        scrolled ? "border-line bg-canvas/70 backdrop-blur-xl backdrop-saturate-150" : "border-transparent bg-canvas/0"
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-chip focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
      >
        Skip to content
      </a>
      <div className="shell flex h-full items-center justify-between gap-6">
        <Link href="/" className="group flex items-baseline gap-0.5 text-base font-semibold tracking-tight" aria-label={`${profile.name} — home`}>
          <span>{profile.name}</span>
          <span aria-hidden="true" className="inline-block size-2 rounded-full bg-accent transition-transform duration-(--dur-base) group-hover:scale-150" />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Nav />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild size="sm">
              <Link href="/cv">
                <FileText aria-hidden="true" />
                CV
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
