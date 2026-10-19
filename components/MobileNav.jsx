"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Download } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, profile } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import SocialLinks from "./shared/SocialLinks";
import { isActive } from "./Nav";

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="flex size-10 items-center justify-center rounded-chip border border-line text-ink"
      >
        <Menu aria-hidden="true" className="size-4" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between px-(--gutter) pb-10 pt-24">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <SheetDescription className="sr-only">Site pages and contact links</SheetDescription>

        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-2">
            {[{ label: "Home", href: "/" }, ...navLinks].map((link, i) => {
              const active = link.href === "/" ? pathname === "/" : isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-baseline gap-4 text-h2",
                      active ? "text-ink" : "text-ink-muted hover:text-ink"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex flex-col gap-6">
          <Button asChild size="lg" className="w-full">
            <a href={profile.cv} download>
              <Download aria-hidden="true" />
              Download CV
            </a>
          </Button>
          <SocialLinks />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
