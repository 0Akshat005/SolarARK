# Prompt for Antigravity — "Our Journey" Timeline Section (About page)

Paste everything below into Antigravity as one instruction.

---

## 0. Before you write any code — audit first

This ports one section from an **old codebase** into the **current** `solar-ark-sigma.vercel.app` About page — it does not replace the whole page.

1. Locate the current About Us page component in this repo (the one live at the `/about` route, matching the attached screenshot: breadcrumb hero "About SolarArk," then a "Who Are We?" block with the pill badge, checklist cards, and the framed leadership image).
2. Identify this page's real design tokens — Tailwind config/CSS variables for color, font, radius, shadow — and its existing shared components (badge/pill, section heading, icon-chip, card). Reuse them; do not invent parallel versions.
3. Confirm the icon library already in use (the old component uses `lucide-react` — check this is already a dependency here before adding it again) and confirm whether this is a Next.js App Router project. If the section needs any client-side behavior (scroll-triggered reveal, below), add `"use client"` only to that component, not the page.
4. Decide placement: insert this section directly **after the "Who Are We?" block and before whatever section currently follows it** (the leadership/verified-engineering image callout or services section — check what's actually there). Rationale: it should land right after the "who we are" intro, so the milestones function as proof of that claim, and it gives the page a deliberate light → dark → light rhythm break instead of an unbroken run of white/cream sections.

---

## 1. Content — keep exactly as-is, do not rewrite

```js
const journeyMilestones = [
  {
    year: "2020",
    title: "SolarARK Projects",
    desc: "Projects began and Nagpur operations kicked off with initial designs.",
    icon: <Rocket />
  },
  {
    year: "2021",
    title: "575 Homes",
    desc: "Residences successfully solarised across cities in Maharashtra.",
    icon: <Home />
  },
  {
    year: "2022",
    title: "2230+ Solarised",
    desc: "100+ Commercial units and 50+ Housing Societies joined.",
    icon: <Users />
  },
  {
    year: "2023",
    title: "5000+ Customers",
    desc: "Happy clients transitioned with reliable MNRE setups.",
    icon: <Heart />
  },
  {
    year: "2024",
    title: "New Branches",
    desc: "Branch offices established at Akola, Chh. Sambhaji Nagar & Wardha.",
    icon: <MapPin />
  }
];
```

Section eyebrow: "OUR JOURNEY." Heading: **"Our Journey"** with "Journey" in brand blue — same split-color pattern as the existing "Who Are **We?**" heading on this page, so the two sections read as siblings. Subtext under the timeline: "Tracing our growth from inception to establishing branches across Maharashtra."

---

## 2. Why this section keeps a dark background (and why that's still on-brand)

Don't flatten this to another white/cream band — the rest of the About page is light, and one deliberately darker "proof of scale" band creates a genuine pacing moment, the way a stats band works on a lot of credible B2B/product sites. What changes is *how* dark: swap the old slate-black + rainbow-neon treatment for the site's own ink tone and its one brand blue, so it reads as "the same brand, one darker room" rather than a different product bolted on.

- Background: a real photo consistent with the site's existing photography (rooftop solar install at dusk/golden hour — reuse the leadership image's visual mood, or source a similar one already used elsewhere on the page, don't introduce a new photographic style).
- Overlay: a gradient using the site's actual ink/navy token (from your audited tokens — e.g. `--ink-primary` at ~80–90% opacity fading to ~65%), not pure black. This keeps the section feeling like the same brand's shadow, not a generic dark-mode panel.
- Everything else in this band pulls from the *same* light-mode brand palette already established sitewide (brand blue, blue-tint chips) — just rendered in white/light values for contrast, not a separate neon system.

---

## 3. Design tokens for this section

Use the project's real audited tokens; the values below are the target if they're not already defined.

- `--ink-primary` (dark overlay base): near `#10142B`
- `--brand-blue` (single accent — replaces all five neon colors from the old version): `#2F5DFA`
- `--brand-blue-soft`: `#5B85FF` — for the connecting line's glow, used once, subtly
- Badge on dark background: white text at ~90% opacity inside a `rgba(255,255,255,0.12)` pill with a hairline white/20% border — a translucent variant of the site's light-mode blue pill, not the light-mode pill dropped unmodified onto a dark photo (it would lose contrast)
- Year label: white, bold, large
- Title: white, bold
- Description: `rgba(226,232,240,0.85)` (soft slate, not full white — keeps hierarchy under the year/title)
- Icon chip: circular, `rgba(255,255,255,0.08)` background, 1.5px `--brand-blue` border, white icon stroke — one consistent treatment for all five milestones, no per-milestone color swap
- Connecting line: `--brand-blue` at full opacity for the filled/completed portion, `rgba(255,255,255,0.15)` for the unfilled portion

---

## 4. Layout

**Desktop (≥768px) — horizontal**, structurally the same as the old component:
- Centered eyebrow pill + heading + one-line subtext above the timeline
- A single horizontal track line, with a fill animation that draws left-to-right once (not looping) — this is the same "energy fill" motif used on the homepage estimate-form stepper; reuse that exact easing/duration if that component already exists in this codebase, so the two pages share a signature, not two different ones
- Five columns: year above the icon chip, icon chip on the line, title + short blue-accent underline + description below
- Small dot marker on the track under each icon chip, filling to solid blue only once the draw-in reaches that point — no independent ping/pulse animation per node; one clean draw is calmer and reads more premium than five simultaneous pulses

**Mobile (<768px) — vertical**, same content, same relative order:
- Left-aligned vertical track line
- Each milestone: icon chip on the line, year + title + underline + description to its right
- Keep the old version's mobile layout logic (`gap-6`, icon chip anchored to the line with a node dot) — it was already solid, just re-skin the colors per the tokens above

---

## 5. Motion — one entrance, not five independent effects

- Trigger the timeline draw-in **when the section scrolls into view** (IntersectionObserver, or whatever the codebase already uses for scroll-reveal — check first), not immediately on page mount like the old version did. Firing it at mount means anyone who loads the page already scrolled past it sees nothing.
- Sequence: track line draws left→right (~1.8s ease-out) → each milestone's content fades/slides up (12px) with a ~120ms stagger as the line passes its position, so the reveal feels caused by the line, not decorative.
- No independent glow/ping loops on the icon chips. A single subtle scale-up (1 → 1.04) on hover per card is enough interactivity for a desktop pointer; skip hover states entirely on touch.
- Respect `prefers-reduced-motion`: render the fully-drawn end state immediately, no animated line, no stagger.

---

## 6. Accessibility & quality floor

- Background photo needs real `alt` text or `role="presentation"` if it's purely decorative behind an overlay — check current contrast of white text against the darkest and lightest parts of the overlay and adjust overlay opacity until white text holds ≥4.5:1 throughout, not just at the darkest point.
- The track line and icon chips are decorative — mark them `aria-hidden`; the actual milestone content (year, title, description) should read in a sensible order to a screen reader as a simple sequential list, independent of the visual timeline.
- Keyboard/touch users get no meaningful interaction here besides scroll — don't make the cards focusable/tabbable, they're not actionable.
- Take a screenshot at desktop and mobile widths after building and confirm: no leftover neon colors, the heading pattern matches "Who Are We?," and the section transitions cleanly from the light section above and below it.
