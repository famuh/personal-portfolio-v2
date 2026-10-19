"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/utils";

export const isActive = (pathname, href) => pathname === href || pathname.startsWith(`${href}/`);

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Main">
      <ul className="flex items-center gap-7">
        {navLinks.map((link) => {
          const active = isActive(pathname, link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-(--dur-base) hover:text-ink",
                  "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-ink after:transition-transform after:duration-(--dur-base) after:ease-out-expo",
                  active ? "text-ink after:scale-x-100" : "text-ink-muted after:scale-x-0 hover:after:scale-x-100"
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
