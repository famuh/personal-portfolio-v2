import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navLinks, profile, seo, socials } from "@/content/site";
import SocialLinks from "../shared/SocialLinks";

const linkedin = socials.find((s) => s.id === "linkedin");

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface print:hidden">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <p className="text-h3">{profile.name}</p>
          <p className="max-w-sm text-ink-muted">
            {profile.roles.join(" · ")}. Based in {profile.location.split(",")[0]}, working {profile.timezone}.
          </p>
          <a
            href={linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2 font-medium underline decoration-line-strong underline-offset-[6px] hover:decoration-accent-ink"
          >
            Connect on LinkedIn
            <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-(--dur-base) group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow mb-4 text-ink-muted">Pages</p>
          <ul className="flex flex-col gap-2">
            <li><Link href="/" className="hover:text-accent-ink">Home</Link></li>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-accent-ink">{l.label}</Link>
              </li>
            ))}
            <li><a href={profile.cv} download={profile.cvFileName} className="hover:text-accent-ink">Download CV (PDF)</a></li>
            <li><a href={profile.cvId} download={profile.cvIdFileName} hrefLang="id" className="hover:text-accent-ink">CV Bahasa Indonesia (PDF)</a></li>
          </ul>
        </nav>

        <div>
          <p className="eyebrow mb-4 text-ink-muted">Elsewhere</p>
          <SocialLinks />
        </div>
      </div>
      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-6 text-sm text-ink-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name} · {profile.studio}</p>
          <p>Last updated {seo.lastUpdated}</p>
        </div>
      </div>
    </footer>
  );
}
