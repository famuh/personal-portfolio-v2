# Redesign plan — Fadhil Muhammad portfolio (Oct 2026)

## Reference analysis → what we take, and where

| Reference | Pattern taken | Used in |
|---|---|---|
| lezenda.com | Proof strip near the top (looping value/label ticker), process as numbered steps, closing "ready to…?" CTA with direct contact | `ProofMarquee` under hero, `Process` section, `ClosingCta` |
| chemtest.fr | Scroll-to-reveal text (words go from faint → ink as you scroll) | `About` statement only — one paragraph, so it stays readable. Text is always in the DOM; reduced-motion shows it fully inked |
| henrietta (Tattoo Digital) | Scroll moves you through items one at a time | `FeaturedWork`: sticky stacking case-study cards on ≥ lg. On mobile it collapses to a normal list (no scroll hijacking, nav never trapped) |
| abduarrahmanscv.web.app | Clean info architecture: hero + contact → profile → services → experience → skill groups → projects → teaching → education; case study template Overview / Problem / Solution / Results | Overall IA of home + `/about`; `/work/[slug]` template |
| tiraki.nz | Paper-white editorial look, stacked one-word-per-line hero headline with split-text reveal (GSAP SplitText + Lenis) | Hero headline line-mask reveal (done with framer-motion, no GSAP); warm paper background |
| caeli-energie.com | Calm layered composition, generous whitespace, audience cards in 3 columns | Capability cards, spacing scale, section rhythm |
| inkwell.tech | Variety of section shapes (statement, timeline, grid, list), mono grotesk labels as "furniture" | Every home section uses a different layout; mono eyebrow labels (`Eyebrow` component) |

Note: reference sites were inspected via static HTML (structure, fonts, libraries); their runtime animations were inferred, not recorded.

## Design system
- Tokens in `app/globals.css` (`:root` light, `.dark` dark): bg / surface / surface-2 / ink / ink-muted / line / accent / accent-strong / on-accent; type scale (`--text-display`…), spacing (`--space-section`, `--gutter`), radius, shadow, motion durations & easing. JS mirror in `lib/motion.js`.
- Type: Fraunces (display, editorial serif — continues the /creation Bodoni idea but more readable), Geist (body), JetBrains Mono (labels only — brand continuity).
- Color: warm paper `#F4F1EA` + near-black ink, one accent green (deep `#0B6B43` for text on light, mint `#3DDC97` in dark). Neon `#00ff99` retired.
- Theme: `next-themes`, default = system, persisted in localStorage, no flash.

## Sitemap
- `/` home story · `/work` index + archive · `/work/[slug]` case studies · `/about` · `/contact`
- Removed: `/services` (→ home capabilities), `/resume` (→ `/about`), `/creation` (→ `/`), `/social` — all redirected in `next.config.mjs`.

## Home sections
Hero (name, positioning, value prop, CTAs, availability, lazy 3D lanyard) → Proof marquee → About (scroll-reveal) → Numbers → Featured case studies (problem → solution → result) → Capabilities + stack → How I work → Experience timeline → Recognition + testimonials → Closing CTA → Footer.

## Animation list (all disabled/instant under prefers-reduced-motion)
1. Hero line-mask reveal + highlighter sweep on key verbs (opening, ~1.2s total).
2. Proof marquee (CSS, pauses on hover/focus).
3. Scroll-linked word inking in About.
4. Count-up numbers when in view.
5. Sticky stacking case-study cards (desktop).
6. Process progress line fills with scroll.
7. Experience timeline line draws with scroll.
8. Section reveal (fade + 16px rise), one shared `Reveal` component.
9. Route transition: single 250ms fade (replaces stair wipe + double overlay that delayed content by 2.4s).

## Packages
- Added: `next-themes` (≈2 kB, flash-free theme switching + persistence).
- Removed: `react-countup` (replaced by a 20-line framer-motion counter), `@radix-ui/react-select` (unused), `@radix-ui/react-tabs` + `@radix-ui/react-scroll-area` (tabs/scroll areas dropped for skimmable pages), stray `package-lock.json`.
- Kept: three / R3F / drei / rapier / meshline (lanyard, now lazy-loaded desktop-only), react-icons (brand/tech logos), framer-motion, Radix dialog/tooltip/slot.
