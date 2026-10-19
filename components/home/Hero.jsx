import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile } from "@/content/site";
import { Button } from "@/components/ui/button";
import HeroCard from "./HeroCard";

// Opening sequence: badge, name (line mask), then the rest fades up. Pure CSS
// keyframes (see globals.css) so nothing waits for hydration; the global
// reduced-motion rule collapses it to the final state.
const d = (ms) => ({ "--delay": `${ms}ms` });

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="shell grid min-h-[calc(100svh-var(--header-h))] items-center gap-8 pb-14 pt-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-4 lg:pb-16">
        <div className="relative z-10 flex flex-col gap-7">
          <p style={d(0)} className="animate-rise glass inline-flex w-fit items-center gap-2 rounded-chip px-3 py-1 text-sm">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            {profile.now}
          </p>

          <h1 id="hero-title" className="text-display">
            <span className="block overflow-hidden pb-[0.08em]">
              <span style={d(80)} className="animate-mask-up block">Fadhil</span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span style={d(160)} className="animate-mask-up block">Muhammad</span>
            </span>
          </h1>

          {/* Likely LCP element: painted immediately, no animation delay. */}
          <div className="flex max-w-xl flex-col gap-3">
            <p className="text-lead font-medium">{profile.tagline}</p>
            <p className="text-ink-muted">{profile.valueProp}</p>
          </div>

          <div style={d(400)} className="animate-rise flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="#work">See my work</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                Get in touch
                <ArrowRight aria-hidden="true" className="transition-transform duration-(--dur-base) group-hover/btn:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          <dl style={d(500)} className="animate-rise flex flex-wrap gap-x-8 gap-y-3 pt-2 text-sm">
            <div>
              <dt className="text-ink-muted">Based in</dt>
              <dd className="font-medium">Medan, Indonesia</dd>
            </div>
            <div>
              <dt className="text-ink-muted">Building since</dt>
              <dd className="font-medium">{profile.startedYear}</dd>
            </div>
            <div>
              <dt className="text-ink-muted">Currently</dt>
              <dd className="font-medium">Software Engineer</dd>
            </div>
          </dl>
        </div>

        <div style={d(200)} className="animate-rise relative h-[400px] sm:h-[460px] lg:-mt-(--header-h) lg:h-svh lg:max-h-[820px]">
          {/* soft, static gradient light behind the card (animating blurred layers cost ~8 Lighthouse points on mobile) */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-[-20%] top-[15%] bottom-[5%]">
            <div className="absolute left-[10%] top-[10%] size-[60%] rounded-full bg-grad-mint blur-3xl" />
            <div className="absolute right-0 top-[30%] size-[55%] rounded-full bg-grad-sky blur-3xl" />
            <div className="absolute bottom-0 left-[25%] size-[45%] rounded-full bg-grad-lime blur-3xl" />
          </div>
          <HeroCard />
        </div>
      </div>
    </section>
  );
}
