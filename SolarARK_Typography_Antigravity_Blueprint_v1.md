# SolarARK Global Typography & Accent System — Antigravity Implementation Plan v1

**Audited against:** `github.com/0Akshat005/SolarARK` (main) · live at `solar-ark-sigma.vercel.app`
**Do not implement blindly — this document reflects a real, evidence-based audit of the current repo, not the font list in the original brief (see Section B for why those differ).**

---

## A. Executive Recommendation

**Before anything else: production typography is currently broken.** `index.html` loads Adobe Fonts via `<link rel="stylesheet" href="https://use.typekit.net/YOUR_PROJECT_ID.css" />` — a literal, never-replaced placeholder. That request fails silently, so the *entire live site* is rendering in the browser's system-font fallback (`-apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`), not any font anyone has actually chosen. This is the single highest-priority fix in this whole plan — everything else is refinement on top of a site that currently has no intentional typeface at all.

**Font architecture:**

| Role | Family | Why |
|---|---|---|
| Display (H1/H2, hero lines, eyebrows, stat figures) | **Space Grotesk** | Geometric-grotesque, confident, technical without being cold — reads as modern/premium without tipping into "SaaS dashboard" |
| Body / UI / workhorse (paragraphs, nav, buttons, forms, labels, H3/H4) | **Instrument Sans** | Neutral, warm, exceptionally legible at small sizes — built for interfaces |

Two families, one grotesque-family voice (both are humanist/geometric grotesques, so they sit together without clashing), free (SIL OFL via Google Fonts, self-hostable), and — critically — **this is close to what the codebase already tried to do.** The current code already collapsed to a single custom family (Aktiv Grotesk, an Adobe/paid font) and deliberately dropped the five-font idea in the brief. That single-family instinct was correct and is preserved; only the specific (broken, paid, Adobe-dependent) typeface is being swapped for a free, reliable equivalent that matches the family pairing already hypothesized in the brief.

**Instrument Sans, Space Grotesk, Inter, Orbitron, Cairo** — of these, only two are recommended, and for reasons grounded in what's actually in the repo, not assumption:
- **Inter**: not currently loaded anywhere; redundant with Instrument Sans as workhorse. Not adding it.
- **Orbitron**: not currently loaded anywhere. Its sci-fi/techno character actively works against "trust + premium," which the brief itself calls out. Not adding it.
- **Cairo**: not currently loaded anywhere. Cairo exists for Arabic/Latin bilingual support; the site is English-only for an Indian audience with no Devanagari or Arabic content anywhere in the codebase. No justified use case. Not adding it.

**Weight strategy:** Neither Space Grotesk nor Instrument Sans ships weights above **700 (Bold)** on Google Fonts. The current code uses `font-extrabold` (800, 112 instances) and `font-black` (900, 1 instance) throughout — none of that is renderable in the new system without triggering synthetic/faux-bold, which the brief explicitly warns against. This forces (in a good way) exactly the weight discipline Section 7 of the brief asks for: everything consolidates to a 400/500/600/700 system.

---

## B. Existing-System Audit

### B.1 The brief's premise doesn't match the repo — here's what's actually there

The "Known Font Setup" in the brief (Instrument Sans / Space Grotesk / Inter / Orbitron / Cairo, all loaded via Google Fonts) **does not exist anywhere in this codebase.** I searched every `.tsx`, `.ts`, `.css`, `.html`, and `.json` file — zero matches for any of those five family names as an actual loaded font. What's actually there:

```css
/* src/index.css, lines 5–9 */
--font-primary: 'aktiv-grotesk', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
--font-extended: 'aktiv-grotesk-extended', var(--font-primary);
--font-condensed: 'aktiv-grotesk-condensed', var(--font-primary);
```

This points to **Aktiv Grotesk** (Dalton Maag, distributed via Adobe Fonts/Typekit) — a single-family system with Standard/Extended/Condensed grades, referenced in a code comment as coming from `SolarARK-Typography-Decision.md, Section 6 & 8`. **That decision document does not exist in the repo** — it's a dangling reference to a file that was never committed (or was written in a session that wasn't saved). So there's no way to recover *why* Aktiv Grotesk was chosen, only that it was, and that the integration was left incomplete.

The masterplan.md in the repo root describes yet a *third*, different idea ("a licensed equivalent of Söhne/General Sans/Inter Display" for display, "Inter/Public Sans" for body) — an earlier planning document that also never shipped. Three different typography intentions exist across this project's history; only one was actually wired into code, and it's broken.

### B.2 Critical bug: fonts never load in production

```html
<!-- index.html, lines 8–15 -->
<!-- Adobe Fonts — Aktiv Grotesk (Standard, Extended, Condensed)
     ⚠️  Replace YOUR_PROJECT_ID below with your actual Adobe Fonts Web Project ID. -->
<link rel="preconnect" href="https://use.typekit.net" />
<link rel="stylesheet" href="https://use.typekit.net/YOUR_PROJECT_ID.css" />
```

`YOUR_PROJECT_ID` was never replaced. This stylesheet request fails, Aktiv Grotesk never loads, and every visitor sees system fonts. There's also no evidence the team has an Adobe Fonts subscription with this typeface licensed — another reason to move to a free family rather than complete the Adobe integration.

### B.3 What's actually well-built (keep this)

The CSS custom-property architecture is genuinely good and should be preserved, just repointed:
- Semantic weight/tracking/line-height tokens (`--weight-*`, `--tracking-*`, `--lh-*`)
- Role-based utility classes: `.hero-display`, `.stat-figure`, `.eyebrow`
- Tailwind v4's CSS-first theming means `--font-sans` and `--font-heading` auto-generate the `font-sans` / `font-heading` Tailwind utilities — this is why `font-heading` already works as a className across 30 files. **This is the highest-leverage fact in this whole audit**: repointing two CSS variables fixes typography sitewide without touching any component file.

### B.4 Dead code found

| Item | Evidence | Action |
|---|---|---|
| `.nav-link` class | Defined in `index.css:107`, **0 usages** in any component | Remove, or wire up (currently nav items in `Header.tsx` use ad hoc `font-medium` instead) |
| `.label-text` class | Defined in `index.css:99`, **0 usages** | Remove |
| `.btn-label` class | Defined in `index.css:114`, **0 usages** | Remove |
| `--measure-body: 70ch`, `--measure-hero: 40ch` | Defined in `index.css:33-34`, **never referenced anywhere**. Components instead use ad hoc Tailwind `max-w-2xl`, `max-w-4xl` etc. per-instance | Formalize as real utilities and apply intentionally (see Section 9/C) |
| Inline `fontFamily: 'var(--font-heading, "Space Grotesk", sans-serif)'` × 4 in `TrustBar.tsx` | This CSS fallback can never trigger — `--font-heading` is always defined, so the `"Space Grotesk"` fallback is unreachable dead code, and a stale leftover reference to a font that isn't otherwise in the project | Remove the fallback string (`fontFamily: 'var(--font-heading)'`) if/when `TrustBar` is wired in (see B.5) |

### B.5 ~31% of components are currently unreachable — scope this work accordingly

Tracing every route in `App.tsx` against every file in `src/components/`, **9 of 29 component files are never imported and rendered anywhere in the live app**:

`ProblemSection.tsx`, `ProjectsGrid.tsx`, `AboutSection.tsx`, `TrustBar.tsx`, `TrustPillars.tsx`, `GuaranteeSpotlight.tsx`, `SubsidyExplainer.tsx`, `TurnkeyExecutionJourney.tsx`, `HomeRoofVisualizer.tsx`

`ProblemSection` and `ProjectsGrid` are even imported in `App.tsx` (lines 9, 12) and then never used in JSX — dead imports. `AboutSection` isn't imported anywhere at all, including its own would-be parent.

This matters for typography work specifically because these orphaned files contain real, fully-styled markup — including one of the three inconsistent accent-text treatments (`TrustBar.tsx`'s dead Space Grotesk fallback) and a good amount of `font-heading`/`eyebrow`/weight usage that currently affects **zero live pixels**. Recommend treating these as **out of scope for this pass** unless the team confirms they're being wired in soon — don't spend implementation time perfecting typography no user will ever see. Flagged for the team's own prioritization, not decided here.

**Live, reachable surface area:** `Header`, `Hero`, `SavingsCalculator`, `HowItWorks`, `DeepDiveTeaser`, `FinalCTAForm`, `AboutPage` (+`PageContextBar`, `OurJourney`), `ServicesPage`, `EarnWithUsPage`, `OurProjectsPage`, `GalleryPage`, `CareersPage`, `ContactPage`, `TechnologySection`, `AppExperience`, `Testimonials`, `FAQSection`, `Footer`, `StickyBars`, `SolarArkLogo`.

### B.6 Weight sprawl

Actual usage counts across `src/`:

| Weight utility | Count |
|---|---|
| `font-bold` (700) | 343 |
| `font-extrabold` (800) | 112 |
| `font-semibold` (600) | 67 |
| `font-medium` (500) | 73 |
| `font-normal` (400) | 61 |
| `font-black` (900) | 1 |

Six weight levels in active use is more variation than the brief's "deliberate weights" principle calls for, and (per Section A) 800/900 can't render in the recommended fonts anyway. This is a forcing function to consolidate to four: 400 / 500 / 600 / 700.

### B.7 Three inconsistent accent-text treatments (the brief asks for exactly one)

| Location | Treatment | Context |
|---|---|---|
| `SavingsCalculator.tsx:148-157` ("Your solar cost doesn't.") | Ivory/champagne gradient `linear-gradient(90deg, #F8F8F5 0%, #E7D8B9 50%, #FFFDF7 100%)` | Dark photographic hero background |
| `FinalCTAForm.tsx:143-149` ("Solar Savings Estimate") | Maroon gradient `linear-gradient(100deg, #5E1212 0%, #8B1E1E 55%, #A82424 100%)` | Light/white background |
| `HowItWorks.tsx:224-229` ("You just save.") | Solid coral `#FF6B6B`, no gradient | Dark photographic background |

This is the exact problem Section 11/12 of the brief describes: three different visual languages doing the same rhetorical job (rare emphasis on a value proposition), which makes none of them feel special. See Section E for the consolidated system.

### B.8 Sitewide `text-align: justify` on all paragraphs

```css
/* index.css, lines 120-124 */
p:not(.text-center):not(.text-left):not(.text-right):not(.whitespace-nowrap) {
  text-align: justify;
  text-justify: inter-word;
}
```

This is a default-on, sitewide rule — every `<p>` in the codebase is fully justified unless explicitly opted out. This is a known web-readability anti-pattern (see Section H).

### B.9 Brand maroon usage is already a deliberate, completed migration

A separate repo doc (`antigravity-prompt-sitewide-maroon-rebrand.md`) documents a prior, already-executed migration of the entire site's primary color from blue to maroon (`#8B1E1E`), including an explicit rule set: maroon owns CTAs/buttons/focus rings; gold/amber (`#FFB020`/`#E27D16`) is a separate deliberate accent; green/orange/purple in the Turnkey Execution Journey's process palette are intentional and off-limits; third-party brand marks (WhatsApp, etc.) stay their own colors. **This typography pass must respect that migration** — it's precedent, not something to second-guess or partially undo.

---

## C. Final Typography Tokens

Repoints the existing `:root` block in `src/index.css`. Variable *names* are mostly kept (minimizes blast radius); values change.

```css
:root {
  /* ── Typography — Space Grotesk (display) + Instrument Sans (body/UI) ──
     Self-hosted via Google Fonts (SIL OFL). Both cap at weight 700 —
     neither family ships 800/900, so do not use font-extrabold/font-black. */
  --font-display: 'Space Grotesk', 'Instrument Sans', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --font-body: 'Instrument Sans', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

  /* Tailwind v4 auto-generates the font-sans / font-heading utilities from these —
     do not rename without updating the ~332 existing font-heading usages */
  --font-sans: var(--font-body);
  --font-heading: var(--font-display);

  /* Weight tokens — 4 levels only, both families support all four */
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  /* --weight-black removed: not supported by either family, was only used 1×/3× (hero-display, eyebrow) */

  /* Tracking tokens — unchanged, already well-calibrated */
  --tracking-tight: -0.02em;   /* large display/headings */
  --tracking-normal: 0;
  --tracking-wide: 0.01em;     /* nav, buttons */
  --tracking-label: 0.08em;    /* uppercase eyebrows/labels — nudged down from 0.10em; Space Grotesk's wider letterforms need less added tracking than Aktiv Grotesk Condensed did */

  /* Line-height tokens — unchanged, already within recommended ranges */
  --lh-display: 1.08;
  --lh-heading: 1.2;
  --lh-body: 1.6;

  /* Measure tokens — now actually applied (see Section 9) */
  --measure-body: 65ch;   /* was 70ch — 65 sits centrally in the 45–75ch recommended range */
  --measure-hero: 38ch;
}

body {
  font-family: var(--font-body);
  font-weight: var(--weight-regular);
  line-height: var(--lh-body);
}

h1, h2, .font-heading {
  font-family: var(--font-display);
  font-weight: var(--weight-bold);
  letter-spacing: var(--tracking-tight);
  line-height: var(--lh-heading);
}

/* H3/H4 stay on the body family at semibold — display family reserved for
   H1/H2/hero per "don't overuse Space Grotesk" */
h3, h4 {
  font-family: var(--font-body);
  font-weight: var(--weight-semibold);
  line-height: var(--lh-heading);
}

.hero-display {
  font-family: var(--font-display);
  font-weight: var(--weight-bold);       /* was --weight-black (900) — unsupported */
  letter-spacing: var(--tracking-tight);
  line-height: var(--lh-display);
}

.stat-figure {
  font-family: var(--font-display);      /* was --font-condensed, which no longer exists */
  font-weight: var(--weight-bold);       /* was --weight-black (900) */
  font-variant-numeric: tabular-nums;
}

.eyebrow, .label-text {
  font-family: var(--font-display);      /* was --font-condensed */
  font-weight: var(--weight-semibold);   /* was --weight-bold at 900-adjacent visual weight; 600 reads correctly at small uppercase sizes in Space Grotesk */
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
}

.nav-link {
  font-family: var(--font-body);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wide);
}

.btn-label {
  font-family: var(--font-body);
  font-weight: var(--weight-semibold);   /* was bold; semibold is enough for button text at typical CTA sizes and reduces visual shouting */
  letter-spacing: var(--tracking-wide);
}

/* Measure utility — apply explicitly to long-form paragraph containers,
   not globally (see Section 9) */
.measure-body { max-width: var(--measure-body); }
.measure-hero { max-width: var(--measure-hero); }
```

**Removed entirely:** `--font-extended`, `--font-condensed` (Space Grotesk has no extended/condensed grade — differentiation now comes from family + weight + size, not grade), `--weight-black`, the sitewide `p { text-align: justify }` rule (Section H).

---

## D. Responsive Type Table

| Role | Desktop | Tablet | Mobile | Weight | Line Height | Family |
|---|---|---|---|---|---|---|
| Display (hero only) | `clamp(2.75rem, 2rem + 3vw, 3.75rem)` (44–60px) | `clamp(2rem, 1.5rem + 2.5vw, 2.75rem)` (32–44px) | `clamp(1.75rem, 1.5rem + 2vw, 2.25rem)` (28–36px) | 700 | 1.08 | Display |
| H1 (section titles) | `clamp(2rem, 1.5rem + 2vw, 2.75rem)` (32–44px) | `clamp(1.75rem, 1.4rem + 1.5vw, 2.25rem)` (28–36px) | `clamp(1.5rem, 1.3rem + 1vw, 1.875rem)` (24–30px) | 700 | 1.2 | Display |
| H2 (sub-section) | 1.75rem (28px) | 1.5rem (24px) | 1.375rem (22px) | 600 | 1.2 | Display |
| H3 (card titles) | 1.25rem (20px) | 1.125rem (18px) | 1.0625rem (17px) | 600 | 1.25 | Body |
| H4 | 1.0625rem (17px) | 1rem (16px) | 1rem (16px) | 600 | 1.3 | Body |
| Body Large / Lead | 1.125rem (18px) | 1.0625rem (17px) | 1rem (16px) | 400 | 1.55 | Body |
| Body | 1rem (16px) | 0.9375rem (15px) | 0.9375rem (15px) | 400 | 1.6 | Body |
| Body Strong | 1rem (16px) | 0.9375rem (15px) | 0.9375rem (15px) | 600 | 1.6 | Body |
| Navigation | 0.875rem (14px) | 0.8125rem (13px) | 0.9375rem (15px, mobile menu) | 500 | 1.2 | Body |
| Button | 0.875rem (14px) | 0.875rem (14px) | 0.9375rem (15px) | 600 | 1.0 | Body |
| Label / Form label | 0.8125rem (13px) | 0.8125rem (13px) | 0.8125rem (13px) | 500 | 1.3 | Body |
| Caption | 0.75rem (12px) | 0.75rem (12px) | 0.75rem (12px) | 400 | 1.4 | Body |
| Eyebrow | 0.6875rem (11px) | 0.6875rem (11px) | 0.625rem (10px) | 600 | 1.2 | Display |
| Metric / stat-figure | `clamp(1.5rem, 1.25rem + 1vw, 2rem)` (24–32px) | 1.5rem (24px) | 1.375rem (22px) | 700 | 1.1 | Display |

Existing component-level heading sizes (e.g. `HowItWorks.tsx`'s `text-3xl sm:text-4xl lg:text-[44px]`) are close to this scale already — this table formalizes the pattern into reusable tokens rather than requiring a rebuild.

---

## E. Accent Treatment

### Two canonical treatments — one per background context, nothing else

**On dark/photographic backgrounds** (keep as-is — this one's already good):
```css
background: linear-gradient(90deg, #F8F8F5 0%, #E7D8B9 50%, #FFFDF7 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
color: #F5EDE0; /* solid fallback for browsers without background-clip:text support */
```
This is the ivory/champagne treatment already live in `SavingsCalculator.tsx`. It's subtle, low-saturation, on-brand, and reads as premium rather than promotional. Keep it exactly as the canonical dark-background accent.

**On light backgrounds** (new — replaces the maroon-gradient treatment in `FinalCTAForm.tsx`):
```css
background: linear-gradient(100deg, #2A2118 0%, #6B5842 55%, #8B7355 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
color: #4A3C2B; /* solid fallback */
```
A warm charcoal-to-taupe gradient — same restrained, low-saturation character as the ivory treatment, just inverted for light backgrounds. This directly satisfies the brief's explicit "no red/maroon headline text" rule while giving both contexts one consistent accent *language* (warm neutral, directional gradient, no glow) instead of two unrelated ones.

### What gets fixed

| File | Current | New |
|---|---|---|
| `SavingsCalculator.tsx:148-157` | Ivory/champagne gradient | **Unchanged** — this is the reference standard |
| `FinalCTAForm.tsx:143-149` | Maroon gradient | Warm charcoal/taupe gradient (light-bg treatment above) |
| `HowItWorks.tsx:224-229` | Solid `#FF6B6B` coral | Ivory/champagne gradient (dark-bg treatment — matches `SavingsCalculator`, since both sit on dark photographic backgrounds) |

### Usage rule (unchanged from brief, now enforceable with 2 real code snippets instead of 0)

- Rare only: one accent phrase per page maximum, reserved for the single most important value-prop contrast statement.
- Never apply to every heading — most headings stay neutral (`text-slate-100` on dark, `text-[#0B1730]`/`text-slate-900` on light, per existing conventions).
- Never combine with maroon in the same statement (a maroon-adjacent gradient next to a maroon CTA button reads as one blob of "brand color," not "rare accent").

### Maroon stays exactly where the brief says it should

Per Section 12 and the existing `antigravity-prompt-sitewide-maroon-rebrand.md` precedent: `--brand-primary` / `--brand-maroon` (`#8B1E1E`) and its gradient (`--gradient-primary`, `--gradient-cta`) remain untouched on every CTA button, active nav/focus state, and other interactive element. **Nothing in this plan touches `.btn-primary-maroon` or any button styling.** The only maroon usage being changed is the one instance where it was doing headline-emphasis work instead of interactive-element work (`FinalCTAForm.tsx`'s gradient text).

---

## F. Component Migration Map

Grouped by actual route, using real files and the real internal section structure found in each (from in-file `{/* ── SECTION ── */}` comments).

### Global
| File | What changes |
|---|---|
| `index.html` | Remove broken Adobe Typekit `<link>` tags; add self-hosted `@font-face` or Google Fonts `<link>` for Instrument Sans + Space Grotesk (see Section H) |
| `src/index.css` | Full token repoint per Section C; remove sitewide `p{text-align:justify}`; remove dead `.nav-link`/`.label-text`/`.btn-label` or wire them up if reused |

### Homepage (`/`)
| File | Sections | Typography touch points |
|---|---|---|
| `Header.tsx` | Logo, nav, phone, CTA | Nav items currently use ad hoc `font-medium` — migrate to `.nav-link` class now that it's live |
| `Hero.tsx` | §1 background-video hero, §2 proof rail | Eyebrow, display heading, CTA |
| `SavingsCalculator.tsx` | Comparison card, calculator inputs/outputs | Contains the reference ivory-gradient accent (unchanged) and `.stat-figure` (2 live usages) |
| `HowItWorks.tsx` | §1–4 stage backdrop, editorial row, journey dock | Contains the coral headline needing accent-treatment migration (Section E) |
| `DeepDiveTeaser.tsx` | Bento teaser grid | Card headings |
| `FinalCTAForm.tsx` | §1 visual/trust panel, §2 form panel (3-step), §3 benefits strip | Contains the maroon-gradient headline needing accent-treatment migration (Section E) |
| `Footer.tsx` | Nav, contact/legal text | Standard body/label tokens |
| `StickyBars.tsx` | Desktop/mobile sticky CTA | Button tokens |

### About (`/about`)
`AboutPage.tsx` (§1 breadcrumb via `PageContextBar.tsx`, §2 Our Journey via `OurJourney.tsx`, §3 Who Are We, §4 Commitment/Quality, §5 Mission/Vision, §6 lead form via `FinalCTAForm.tsx`)

### Services (`/services`)
`ServicesPage.tsx` (§01 hero showcase, §02 category selector dock, §03 service showcases, §04 turnkey execution roadmap, §05 FAQ accordion)

### Earn With Us (`/earn-with-us`)
`EarnWithUsPage.tsx` (§1 breadcrumb, §2 hero, §3 proof strip/metrics, §4 workflow, §5 earnings calculator, §6 who-can-join grid, §7 welcome kit, §8 director's quote)

### Our Projects (`/projects`)
`OurProjectsPage.tsx` (§1 breadcrumb, §2 hero, §3 category/city filters, §4 project cards grid, §5 video reels, §6 gallery banner, §7 pincode consultation banner)

### Careers (`/careers`)
`CareersPage.tsx` (§1 breadcrumb, §2 hero, §3 proof strip, §4 culture pillars, §5 open positions explorer, §6 application studio, §7 recruitment roadmap, §8 FAQ accordion)

### Gallery (`/gallery`)
`GalleryPage.tsx` (§1 breadcrumb, §2 hero, §3 video reels, §4 category filters, §5 photo albums grid, §6 lightbox modal, §7 closing CTA)

### Contact (`/contact`)
`ContactPage.tsx` (contact cards, consultation form + offices directory)

### Secondary pages (not in main nav, but live routes: `/technology`, `/app`, `/reviews`, `/faq`)
`TechnologySection.tsx`, `AppExperience.tsx`, `Testimonials.tsx`, `FAQSection.tsx`

### Out of scope this pass (unreachable — see B.5)
`ProblemSection.tsx`, `ProjectsGrid.tsx`, `AboutSection.tsx`, `TrustBar.tsx`, `TrustPillars.tsx`, `GuaranteeSpotlight.tsx`, `SubsidyExplainer.tsx`, `TurnkeyExecutionJourney.tsx`, `HomeRoofVisualizer.tsx` — apply the same tokens *if and when* these get wired into a route, but don't burn implementation time on them now.

---

## G. Implementation Order

Sequenced so each step is independently safe to ship and verify before the next.

1. **Fix the critical font-loading bug.** Remove the broken Typekit `<link>`, self-host Instrument Sans + Space Grotesk (woff2, `font-display: swap`), repoint `--font-sans`/`--font-heading` in `index.css`. Because ~332 `font-heading` usages and the base `body` styles already reference these two Tailwind-generated utilities, this single change fixes typography sitewide with zero component edits and near-zero regression risk.
2. **Remove the sitewide justify rule** (`index.css` lines 120-129). One-line deletion, immediately improves readability everywhere.
3. **Consolidate weights.** Global find-and-replace `font-extrabold` → `font-bold` and `font-black` → `font-bold` across components (113 instances total, all literal Tailwind class strings — low-risk mechanical change). Update `.hero-display`, `.stat-figure`, `.eyebrow` weight tokens per Section C.
4. **Clean dead CSS.** Remove or wire up `.nav-link`/`.label-text`/`.btn-label`; remove `--font-extended`/`--font-condensed`/`--weight-black`; fix the dead `"Space Grotesk"` inline fallback in `TrustBar.tsx` (only if/when that component is wired in).
5. **Fix the two off-pattern accent treatments** (`FinalCTAForm.tsx`, `HowItWorks.tsx`) per Section E.
6. **Apply the measure utilities** (`.measure-body`/`.measure-hero`) to long-form paragraph containers in About, Services, Careers, Contact, FAQ per Section H — these currently use ad hoc `max-w-2xl`/`max-w-4xl`, which is fine visually but inconsistent; formalizing isn't urgent, treat as polish.
7. **Reconcile component-level heading sizes** against the Section D table where they've drifted (most are already close).
8. **Full QA pass** per Section I.

---

## H. Accessibility + Performance

**Accessibility — actionable findings only:**

- **Justified body text fails WCAG 1.4.8 (Visual Presentation, F88)** and is a well-documented readability problem independent of conformance level — justified text on narrow web columns creates uneven word-spacing "rivers" that particularly hurt readers with dyslexia or low vision. Remove the sitewide rule (Section G, step 2); this is unambiguous, do it regardless of target conformance level.
- **Contrast — computed, not estimated:**
  - `#8B1E1E` (brand maroon) on white: **9.1:1** — passes AAA even at normal text size. Every maroon CTA button and maroon link text is comfortably accessible.
  - `#5E1212` (maroon hover state) on white: **13.4:1** — even stronger.
  - The new light-bg accent gradient's lightest stop (`#8B7355`) on white: **~5.2:1** — passes AA for normal text; verify AAA isn't required for this specific use case (it isn't — accent headline text, not body copy).
  - The removed maroon-gradient's lightest stop (`#A82424`) on white was actually **7.1:1** (AAA) — so the `FinalCTAForm` fix in Section E is a brand-consistency change, not an accessibility one. Don't conflate the two when explaining this to stakeholders.
  - Gradient text on photographic backgrounds (`SavingsCalculator`, `HowItWorks`) can't be precisely computed since the backdrop is an image with a gradient scrim, not a flat color — spot-check contrast against the darkest and lightest frames of the actual photo/video during QA (Section I).
- **Gradient text fallback:** current inline implementations set `WebkitBackgroundClip`/`WebkitTextFillColor` but no unprefixed `backgroundClip` and no solid-color `color` fallback. Add both (see Section E code blocks) so text remains visible if `background-clip: text` isn't supported, and so copy/paste and text-selection don't render invisible text.
- **Focus states:** `*:focus-visible { outline: 2px solid #8B1E1E; }` (index.css:193-196) is already solid and doesn't need typography-related changes.
- **Grid-vs-solar comparisons:** already communicated through labels, icons, and numbers per existing components (e.g. `SavingsCalculator`'s comparison card) — no color-only-meaning issues found.

**Performance — actionable findings only:**

- **The most important performance fact:** right now, zero custom font bytes are being downloaded (the broken link fails before any font loads), so the site is *accidentally* fast at the cost of having no intended typography at all. Adding real fonts will add real weight — do it deliberately:
  - Self-host 2 families × weights actually used (400/500/600/700 = up to 8 files, likely fewer once weight consolidation in Section G.3 lands) as woff2, not the full variable-font range.
  - `font-display: swap` on all `@font-face` declarations.
  - Preload only the above-the-fold critical pair (Instrument Sans Regular 400 for body, Space Grotesk Bold 700 for the hero display heading) via `<link rel="preload" as="font" type="font/woff2" crossorigin>`.
  - No duplicate imports to worry about — there were none to begin with (Section B.2).

---

## I. QA Checklist

Test at each of: **1440px · 1280px · 1024px · 768px · 430px · 390px**

- [ ] Font loading: confirm Instrument Sans + Space Grotesk actually download and render (open DevTools → Network → Font, filter; confirm no 404s, confirm `font-display: swap` behavior on throttled connection)
- [ ] Wrapping: check hero headline, H1/H2 across About/Services/Earn-With-Us/Careers/Gallery/Contact with real SolarARK copy at all 6 breakpoints — no orphaned single words, no overflow
- [ ] Contrast: re-verify the 4 computed ratios in Section H render as expected on actual devices (not just DevTools color picker), plus spot-check both gradient-text-on-photo instances against their actual current backdrop frame
- [ ] Buttons: `.btn-primary-maroon` text remains legible at all weights/sizes after the weight consolidation in Section G.3
- [ ] Forms: labels, inputs, helper text, error/success states in `FinalCTAForm.tsx`, `SavingsCalculator.tsx`, `ContactPage.tsx`, `EarnWithUsPage.tsx` calculator, `CareersPage.tsx` application studio
- [ ] Metrics: `.stat-figure` tabular-numeral alignment in `SavingsCalculator.tsx` (2 live instances) at all breakpoints
- [ ] Gradient fallback: temporarily disable `background-clip: text` support (or test in an older browser/emulator) and confirm the solid-color fallback in both accent treatments is legible
- [ ] Justify-removal regression check: confirm removing the sitewide `p{text-align:justify}` rule doesn't leave any component visually relying on justification (unlikely, but check long-copy areas like Careers job descriptions and FAQ answers)
- [ ] Weight-consolidation regression check: spot-check the 112 former `font-extrabold` instances now rendering at 700 — confirm nothing reads as visually "too light" where 800 was doing real hierarchy work (if any do, that's a signal the size/color hierarchy needs to carry more weight than the font-weight was)

---

## J. Do-Not-Change List

This plan touches **typography tokens and the two off-brand accent-text instances only.** Explicitly out of scope:

- Layout, grid, spacing, component structure
- Routing (`App.tsx` route logic) — including *not* wiring up the 9 orphaned components (Section B.5); that's a separate product decision for the team
- Forms functionality, validation, submission logic
- Animations, scroll-triggered effects, `IntersectionObserver` usage, `prefers-reduced-motion` handling
- SEO (meta tags, `index.html` `<title>`/`<meta description>`)
- **The entire maroon/gold brand color system** (`--brand-primary`, `--brand-maroon`, `--brand-gold`, `--gradient-primary`, `--gradient-cta`, `.btn-primary-maroon` and all its states) — this was a separate, already-completed migration (Section B.9) and is not being revisited
- The Turnkey Execution Journey's 4-color process palette (orange ×2, maroon, green, purple) — explicitly protected by the prior maroon-migration doc
- Third-party brand marks (WhatsApp, social icons) — untouched
- Semantic state colors (success green, error/destructive red, warning) — untouched
- Existing CTA button system, radius tokens (`--radius-*`), elevation/shadow tokens, glassmorphism helpers — none of these are typography and none are touched by this plan
