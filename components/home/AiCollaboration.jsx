import Image from "next/image";
import { aiCollaboration } from "@/content/expertise";
import Reveal from "@/components/shared/Reveal";
import AiLogo from "@/components/shared/AiLogo";

// Working with AI: one frosted panel on a soft gradient. Copy on the left,
// a marble bust turning into wireframe on the right with a few AI logos
// floating around it. Written for a non-technical reader (HR, managers).
const BUBBLES = [
  { logo: "claude", className: "left-[4%] top-[14%]", delay: "0s" },
  { logo: "openai", className: "right-[6%] top-[8%]", delay: "-2.5s" },
  { logo: "gemini", className: "right-[0%] top-[42%]", delay: "-4s" },
  { logo: "perplexity", className: "left-[0%] top-[50%]", delay: "-1.5s" },
  { logo: "githubCopilot", className: "right-[12%] bottom-[14%]", delay: "-5.5s" },
];

export default function AiCollaboration() {
  const { intro, illustration, tools } = aiCollaboration;

  return (
    <section aria-labelledby="ai-title" className="section-y">
      <div className="shell">
        <div className="relative overflow-hidden rounded-panel bg-mesh p-2 sm:p-3">
          <div className="glass grid items-center gap-8 rounded-[calc(var(--radius-panel)-0.5rem)] p-6 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:p-14">
            <div className="flex flex-col gap-6">
              <Reveal as="p" className="eyebrow flex items-center gap-2 text-ink-muted">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                Working with AI
              </Reveal>
              <Reveal index={1}>
                <h2 id="ai-title" className="max-w-[18ch] text-h2">AI speeds up the work. The judgment stays mine.</h2>
              </Reveal>
              <Reveal as="p" index={2} className="measure text-ink-muted">
                {intro}
              </Reveal>
              <Reveal index={3}>
                <ul className="flex flex-wrap gap-2" aria-label="AI tools I use most">
                  {tools.map((t) => (
                    <li key={t.name} className="glass inline-flex items-center gap-2 rounded-chip px-3 py-1.5 text-sm shadow-none">
                      <AiLogo id={t.logo} className="size-4 shrink-0" />
                      {t.name}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal index={2} className="relative mx-auto aspect-[8/13] w-full max-w-sm lg:max-w-md">
              <Image src={illustration.src} alt={illustration.alt} fill sizes="(min-width: 1024px) 448px, 384px" className="object-contain" />
              {BUBBLES.map((b) => (
                <span
                  key={b.logo}
                  aria-hidden="true"
                  style={{ "--delay": b.delay }}
                  className={`glass animate-float absolute flex size-11 items-center justify-center rounded-full sm:size-12 ${b.className}`}
                >
                  <AiLogo id={b.logo} className="size-5 sm:size-6" />
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
