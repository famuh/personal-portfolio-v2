import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CopyEmail from "@/components/shared/CopyEmail";
import SocialLinks from "@/components/shared/SocialLinks";
import Reveal from "@/components/shared/Reveal";

// Gradient field with a glass card on top.
export default function ClosingCta() {
  return (
    <section aria-labelledby="cta-title" className="section-y">
      <div className="shell">
        <div className="bg-mesh relative overflow-hidden rounded-panel border border-line p-3 sm:p-6">
          <div className="glass flex flex-col gap-8 rounded-card px-6 py-12 sm:px-12 sm:py-16">
            <Reveal className="flex flex-col gap-4">
              <h2 id="cta-title" className="max-w-[20ch] text-h1">Hiring, or have a project in mind?</h2>
              <p className="measure text-ink-muted">
                Send a short note about the role or the problem you're working on.
              </p>
            </Reveal>
            <Reveal index={1} className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact me
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <CopyEmail className="bg-canvas/70" />
            </Reveal>
            <Reveal index={2}>
              <SocialLinks />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
