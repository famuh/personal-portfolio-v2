import { proofStrip } from "@/content/expertise";

// Quiet row of organisations from the CV, right under the hero.
export default function ProofMarquee() {
  return (
    <section aria-labelledby="proof-row" className="border-y border-line">
      <div className="shell flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:gap-10">
        <h2 id="proof-row" className="shrink-0 text-sm text-ink-muted">Worked and trained with</h2>
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {proofStrip.map((name) => (
            <li key={name} className="text-sm font-semibold tracking-tight text-ink/80">{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
