// Top-of-page heading block shared by /work, /about and /contact — same
// CSS opening animation as the homepage hero, at a smaller scale. The lead
// paragraph is usually the LCP element, so it renders without a delay.
const d = (ms) => ({ "--delay": `${ms}ms` });

export default function PageIntro({ eyebrow, title, lead, children }) {
  return (
    <section className="shell flex flex-col gap-8 pb-12 pt-16 sm:pt-24">
      <p style={d(0)} className="animate-rise eyebrow text-ink-muted">{eyebrow}</p>
      <h1 className="max-w-[14ch] overflow-hidden pb-[0.08em] text-h1">
        <span style={d(80)} className="animate-mask-up block">{title}</span>
      </h1>
      {lead && (
        <p className="measure text-lead text-ink-muted">{lead}</p>
      )}
      {children && <div style={d(350)} className="animate-rise">{children}</div>}
    </section>
  );
}
