# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio of Fadhil Muhammad, deployed on Vercel at https://pamulab.vercel.app ("Famuh", studio name Pamulab), positioned as **IT Consultant / Senior Developer / Analyst**. Next.js 15 App Router, JavaScript (`.jsx`, no TypeScript despite the `@/*` alias in `jsconfig.json`), Tailwind CSS v4, shadcn/ui + Radix primitives, framer-motion, next-themes. The redesign rationale (reference analysis, sitemap, animation list) is in `docs/REDESIGN-PLAN.md`.

## Commands

Package manager is **pnpm** (pinned via `packageManager`; `pnpm-lock.yaml` is the lockfile of record — never commit a `package-lock.json`).

- `pnpm dev` — dev server (Turbopack) at localhost:3000. Placeholder content is visibly marked here (see below).
- `pnpm build` / `pnpm start` — production build / serve
- `pnpm lint` — ESLint (flat config, `next/core-web-vitals`)

No test suite. To add a shadcn/ui component use the shadcn CLI (`components.json`: new-york, RSC, lucide).

## Architecture

**Routes** (`app/`): `/` (home story), `/work` (case studies + filterable archive + design gallery), `/work/[slug]` (static case-study pages via `generateStaticParams`), `/about`, `/contact`, plus `sitemap.js`, `robots.js`, `opengraph-image.jsx`, `icon.svg`, `not-found.jsx`. Retired routes `/resume`, `/services`, `/creation`, `/social` are 308-redirected in `next.config.mjs` (their `page.jsx` are redirect stubs). Pages stay server components so they can export `metadata`; interactivity lives in small client components.

**Content layer** — all copy and data is in `content/`, never in components:
- `site.js` (profile, nav, socials, SEO), `projects.js` (case studies, archive, design gallery), `experience.js` (jobs, education, recognition), `expertise.js` (capabilities, process, stack, FAQ, proof strip).
- `placeholders.js` holds **every** piece of dummy data (each marked `// TODO: ganti dengan data asli`). Case studies list which of their fields are placeholders in a `placeholders: [...]` array. Components wrap such values in `components/shared/Ph.jsx`, which draws a dashed amber underline in dev and renders nothing extra in production.

**Design system** — `app/globals.css` is the single source of design tokens: color (`--canvas`, `--surface`, `--ink`, `--ink-muted`, `--line`, `--accent`, `--accent-ink`, …) defined for `:root` (light) and `.dark`, exposed as Tailwind utilities (`bg-canvas`, `text-ink`, `text-accent-ink`…); fluid type scale (`text-display`, `text-h1..h3`, `text-statement`, `text-lead`, `eyebrow`); radius (`rounded-chip/control/card/panel`); elevation (`shadow-card/lift`); motion (`ease-out-expo`, `--dur-*`). shadcn token names are aliased to the brand palette. Use tokens — no raw hex/px in components. Look: white canvas, one sans family (Geist for headings and body, Geist Mono for small details), headings get weight/tracking from the `text-*` tokens. Extra utilities: `glass` (frosted panel), `bg-mesh` (soft mint/sky/lime gradient), and the `--mat*` tokens used by `components/shared/CuttingMat.jsx` (the cutting-mat background behind the case-study bento). Keep gradients static — animating blurred layers measurably hurt mobile performance. Copy style: plain sentences, no em-dash flourishes, no numbered section labels.

**Theme**: `components/layout/Providers.jsx` — next-themes (`class` attribute, default `system`, persisted) + `LazyMotion` (features loaded async from `lib/motion-features.js`, **`strict`: use `m.*`, never `motion.*`**) + `MotionConfig reducedMotion="user"`.

**Motion rules**: JS motion values mirror the CSS tokens in `lib/motion.js`. Above-the-fold opening animations are pure CSS (`animate-rise`, `animate-mask-up` with a `--delay` style var) so they run before hydration; never wrap above-the-fold/LCP content in `<Reveal>` (it's hidden until JS). Below the fold use `components/shared/Reveal.jsx`. A global `prefers-reduced-motion` rule in `globals.css` collapses CSS motion. Route transition is a single fade in `app/template.jsx` (skipped on first load).

**Components**: `components/home/*` (homepage sections; `CaseStudyBento` + `CaseStudyCard` are shared with /work), `components/shared/*` (Reveal, SectionHeading, PageIntro, Timeline, Chip, CountUp, CopyEmail, SocialLinks, Ph, CuttingMat), `components/layout/*` (Providers, ThemeToggle, Footer), `components/Header.jsx` / `Nav.jsx` / `MobileNav.jsx`, `components/Lanyard.jsx` (3D ID card; loaded by `home/HeroCard.jsx` only on capable desktops after first user interaction, static image otherwise). `components/ui/*` are shadcn primitives restyled with tokens.

**Ask my portfolio** (optional chatbot, provider-agnostic): `components/ask/AskLauncher.jsx` (floating button, lazy-loads `AskPanel.jsx`) → `app/api/ask/route.js` → `lib/ask/provider.js` (plain `fetch`, no vendor SDK) with a system prompt built by `lib/ask/context.js` from `content/` (placeholder fields are excluded). Env vars (set in Vercel): `NEXT_PUBLIC_ASK_PORTFOLIO=true` (shows the button; read at build time), `ASK_PROVIDER` (`openai` = any OpenAI-compatible API incl. Gemini/Groq/OpenRouter/Ollama, or `anthropic`), `ASK_API_KEY`, `ASK_MODEL`, optional `ASK_BASE_URL`. Without key/model the route returns 503. In-memory per-IP rate limit (20 requests / 10 min, per serverless instance).

**Notes**: `content/notes.js` → `/notes` and `/notes/[slug]`; case studies can link a note via `relatedNote`.

**CV**: `/cv` renders the CV from `content/` (single column, A4 print styles under `@media print` in globals.css; Header/Footer/chat carry `print:hidden`). The downloadable file `public/assets/resume/myresume.pdf` (linked via `profile.cv`, saved as `Fadhil-Muhammad-CV.pdf` through `profile.cvFileName`) is exported from that page: open `/cv` in Chrome/Edge → Print → Save as PDF (A4, margins default, background graphics on), and keep it at 2 pages. Re-export whenever experience or skills change. `/resume` redirects to `/cv`.

**Images**: optimized WebP copies live in `public/assets/opt/` (originals in `public/assets/img|design` are unused); SVG illustrations in `public/assets/illustrations/`. Firebase Storage URLs used by the old site return HTTP 402 — don't reference them.

**Legacy files (unused, safe to delete)**: `app/creation/_components/*`, `components/{StairEffect,Stair,PageTransition,Stats,Photo,ImagePreview,Social,kinetic-grid,TextHighlight}.jsx`, `components/ui/{select,tabs,scroll-area}.jsx` (these import packages that were removed), `public/assets/img/*`, `public/assets/design/*`, `public/*.svg` boilerplate.
