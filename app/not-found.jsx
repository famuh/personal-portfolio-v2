import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col items-start justify-center gap-8 py-24">
      <p className="eyebrow text-accent-ink">404</p>
      <h1 className="max-w-[14ch] text-h1">
        This page doesn&apos;t exist.
      </h1>
      <p className="measure text-lead text-ink-muted">It may have moved during the redesign. The work, about and contact pages are all one click away.</p>
      <Button asChild size="lg">
        <Link href="/">
          <ArrowLeft aria-hidden="true" />
          Back home
        </Link>
      </Button>
    </section>
  );
}
