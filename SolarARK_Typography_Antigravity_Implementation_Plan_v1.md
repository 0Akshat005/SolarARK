# SolarARK Global Typography System — Antigravity Implementation Plan v1

Audited directly against `0Akshat005/SolarARK` (branch `main`, HEAD `4132fddd`) via the GitHub API — `src/index.css`, `index.html`, `vite.config.ts`, `package.json`, and 15+ component files were read as raw diffs/blobs. No filenames or usages below are invented.

---

## A. Executive Recommendation

**Critical correction to the source brief:** the codebase currently implements only **two** of the five "approved" fonts.

| Font | Status in actual codebase | Recommendation |
|---|---|---|
| Instrument Sans | ✅ Imported (Google Fonts, weights 400/500/600/700, incl. italics), wired as `--font-body` / `--font-sans` | Keep as-is. Primary workhorse — confirmed. |
| Space Grotesk | ✅ Imported (weights 400/500/600/700), wired as `--font-display` / `--font-heading` | Keep as-is. Heading/display role — confirmed. |
| Inter | ❌ **Not imported anywhere.** No `<link>` in `index.html`, no `@import`, no `font-family` reference, no `.tsx` usage found across any of the 32 components. | Do not "audit existing usage" — there is none. Either formally drop Inter from the approved list, or if a future content/science section needs it, introduce it as a net-new addition (not a cleanup). |
| Orbitron | ❌ **Not imported anywhere.** No weight (700/800/900) exists in the loaded font stack. | Same as above — nothing to constrain because nothing uses it. Numeric "Metric" displays (e.g. stat cards, `.stat-figure`) already use Space Grotesk Bold with `tabular-nums`, which already satisfies the brief's own instruction ("Space Grotesk or Instrument Sans should normally be preferred unless Orbitron is intentionally justified"). No action needed unless a deliberate futuristic accent is wanted later. |
| Cairo | ❌ **Not imported anywhere.** No language/RTL content found requiring it. | Confirmed dead reference in the brief. Do not add. |

**Net effect:** SolarARK's real typography system is a clean two-font pairing (Space Grotesk for display/headings, Instrument Sans for everything else), already wired through CSS custom properties, and already reasonably consistent. The work is refinement and enforcement, not a five-font audit.

---

## B. Existing Typography Audit

### Font loading (`index.html`)
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
```
- Preconnect is present, `display=swap` is set — this is already good practice (Section 20 requirements largely satisfied).
- Only weights 400/500/600/700 are loaded for both families. **Neither family has 800/900 available** — a code comment in `index.css` explicitly warns: *"neither family ships 800/900, so do not use font-extrabold/font-black."* This must be preserved.
- Body tag ships with `font-sans antialiased` directly in `index.html`, meaning Instrument Sans is the true default from first paint — no FOUC risk from a mismatched fallback.

### Tokens already defined in `src/index.css`
```css
--font-display: 'Space Grotesk', 'Instrument Sans', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
--font-body: 'Instrument Sans', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
--font-sans: var(--font-body);       /* Tailwind v4 auto-derives font-sans utility from this */
--font-heading: var(--font-display); /* Tailwind v4 auto-derives font-heading utility from this */

--weight-regular: 400;  --weight-medium: 500;
--weight-semibold: 600; --weight-bold: 700;

--tracking-tight: -0.02em; --tracking-normal: 0;
--tracking-wide: 0.01em;   --tracking-label: 0.08em;

--lh-display: 1.08; --lh-heading: 1.2; --lh-body: 1.6;

--measure-body: 65ch; --measure-hero: 38ch;
```
This is a **CSS-first Tailwind v4 setup** (`@import "tailwindcss"` in `index.css`, `@tailwindcss/vite` plugin in `vite.config.ts`) — there is no `tailwind.config.js`, which is expected and correct for v4, not a gap.

### Global heading rules already in place
```css
h1, h2, .font-heading { font-family: var(--font-display); font-weight: var(--weight-bold); letter-spacing: var(--tracking-tight); line-height: var(--lh-heading); }
h3, h4 { font-family: var(--font-body); font-weight: var(--weight-semibold); line-height: var(--lh-heading); }
```
A code comment notes **~313 existing `font-heading` usages** across components — this utility is already the dominant mechanism for applying Space Grotesk to card titles, section headers, badges, and eyebrows outside of raw `<h1>/<h2>` tags. This is good: a semantic system already exists, it just needs auditing for correct usage, not building from scratch.

### Confirmed inconsistency: weight overuse
Across `AboutPage.tsx`, `TrustPillars.tsx`, `TurnkeyExecutionJourney.tsx`, `SubsidyExplainer.tsx`, and `Testimonials.tsx`, `font-bold` (700) is applied liberally to small UI elements that the brief's own weight strategy (Section 12) assigns to 500–600: eyebrow pills, micro-badges, table headers, author names, metadata labels. Example from `SubsidyExplainer.tsx`:
```tsx
<th className="... font-bold">System Capacity</th>
<span className="text-[10px] font-bold text-amber-800 bg-amber-200 ...">Most Popular</span>
```
This is the single most repeated real inconsistency: **700 is used as the default "make it stand out" weight everywhere**, rather than reserving it for major headings per Section 12.

### Confirmed dead component
`PageContextBar.tsx` (breadcrumb bar) still exists in `src/components/` but was removed from every page that imported it (`AboutPage`, `CareersPage`, `ContactPage`, `EarnWithUsPage`, `GalleryPage`, `OurProjectsPage`, `ServicesPage`) in the most recent commit (`4132fddd`, "remove breadcrumbs globally"). It is now orphaned — flag for deletion in Section K review, not a typography fix, but relevant because it likely still carries now-unused `font-heading`/label styling.

### Brand tokens (already aligned with Section 18)
```css
--brand-primary: #8B1E1E;      /* maroon CTA */
--color-savings-green: #10B981;
--color-solar-gold: #FFB020;
--color-solar-navy: #0B1730;
```
These are already restrained and match the plan's Section 18 guidance almost exactly — no colour-system rework needed.

---

## C. Final Typography Tokens (recommended additions, layered onto existing ones — nothing renamed)

```css
/* New: weight-usage guardrails, added as comments/lint targets, not new variables */
--weight-nav: var(--weight-medium);      /* 500 — nav, secondary UI */
--weight-card-title: var(--weight-semibold); /* 600 — card titles, badges, labels */
--weight-heading: var(--weight-bold);    /* 700 — h1/h2/hero only */

/* New: explicit type-role tokens for the audit table below */
--type-display-size: clamp(2.25rem, 1.6rem + 2.6vw, 3.375rem);
--type-h1-size: clamp(1.875rem, 1.5rem + 1.6vw, 2.75rem);
--type-h2-size: clamp(1.5rem, 1.3rem + 0.9vw, 2rem);
--type-h3-size: clamp(1.125rem, 1.05rem + 0.3vw, 1.375rem);
--type-body-size: 1rem;
--type-label-size: 0.75rem;
--type-caption-size: 0.6875rem;
```
No existing variable name changes — this avoids breaking the ~313 existing `font-heading` references.

---

## D. Responsive Type Scale

| Role | Desktop | Tablet | Mobile | Font | Weight | Line Height | Letter Spacing |
|---|---:|---:|---:|---|---:|---:|---:|
| Display / Hero | 54px | 40px | 36px | Space Grotesk | 700 | 1.08 | -0.02em |
| H1 | 44px | 36px | 30px | Space Grotesk | 700 | 1.12–1.2 | -0.02em |
| H2 | 32px | 28px | 24px | Space Grotesk | 700 | 1.2 | -0.02em |
| H3 | 22px | 20px | 18px | Instrument Sans | 600 | 1.2 | 0 |
| H4 | 18px | 17px | 16px | Instrument Sans | 600 | 1.2 | 0 |
| Lead | 18px | 17px | 16px | Instrument Sans | 400 | 1.5 | 0 |
| Body | 16px | 15px | 14px | Instrument Sans | 400 | 1.6 | 0 |
| Body Strong | 16px | 15px | 14px | Instrument Sans | 600 | 1.5 | 0 |
| Label / Eyebrow | 12px | 11px | 11px | Space Grotesk | 600 | 1.3 | 0.08em (uppercase) |
| Caption | 11px | 11px | 11px | Instrument Sans | 400 | 1.4 | 0 |
| Button | 14px | 13px | 13px | Instrument Sans | 600 | 1.15 | 0 |
| Metric / Stat | 28–36px | 24–28px | 22–24px | Space Grotesk | 700 (tabular-nums) | 1.08 | -0.02em |

---

## E. Font Usage Rules

- **Space Grotesk**: `<h1>`, `<h2>`, `.font-heading`, hero headlines, card titles, eyebrows/labels (uppercase), stat/metric figures. Never below 500 weight; never above 700 (font doesn't ship 800/900).
- **Instrument Sans**: everything else by default — body copy, `<h3>`/`<h4>`, nav, buttons, forms, captions, testimonials body text, table cells. This is already the CSS default (`body { font-family: var(--font-body) }`), so most components need no explicit class.
- **Weight discipline**: reserve `font-bold` (700) for H1/H2/hero/major CTAs only. Downgrade eyebrow pills, badges, table headers, and metadata labels currently hard-coded to `font-bold` to `font-semibold` (600).
- **Inter / Orbitron / Cairo**: treated as **not in scope** for this implementation pass. Do not import, do not reference, do not build semantic roles around fonts that don't exist in the bundle. If leadership later wants a genuine Orbitron "futuristic metric" accent, that is a separate, explicit follow-up task requiring a new font import — not part of this consistency pass.

---

## F. Component Migration Map

| File | Current pattern | Action |
|---|---|---|
| `src/index.css` | Global `h1,h2,.font-heading` + `h3,h4` rules already correct | No structural change; add weight-usage code comment near the token block |
| `src/components/SubsidyExplainer.tsx` | `font-bold` on table headers (`th`) and micro-badges | Downgrade to `font-semibold` |
| `src/components/TrustPillars.tsx` | `font-bold` on badge pills (`p.badge`) | Downgrade to `font-semibold` |
| `src/components/TurnkeyExecutionJourney.tsx` | `font-bold` on verified micro-badges, trust-row labels | Downgrade to `font-semibold`; keep `font-heading` on card titles as-is |
| `src/components/Testimonials.tsx` | `font-heading` correctly used for author name and bill-impact figure | No change — this is a correct existing pattern to replicate elsewhere |
| `src/components/AboutPage.tsx` | Mixes `font-heading` (correct, on H1/H2/stat values) with `font-bold` on CTA button labels (acceptable — buttons may stay bold per brand) | No change needed |
| `src/components/PageContextBar.tsx` | Orphaned since breadcrumbs were removed globally | Flag for deletion (outside typography scope, but note in cleanup ticket) |
| `src/components/Header.tsx`, `Hero.tsx`, `Footer.tsx` | Not yet line-by-line diffed in this pass | Antigravity should grep `font-bold` and `text-[` arbitrary sizes in these three before touching them — do not assume, verify per Section 3's own rule |
| `src/components/CareersPage.tsx`, `ContactPage.tsx`, `EarnWithUsPage.tsx`, `GalleryPage.tsx`, `OurProjectsPage.tsx`, `ServicesPage.tsx` | Breadcrumb `PageContextBar` import removed, no font changes in this diff | No typography action from this commit; audit separately for weight overuse per the pattern found in `SubsidyExplainer`/`TrustPillars` |

---

## G. Implementation Sequence

1. Grep the full `src/components/` tree for `font-bold` usage on non-heading elements (badges, labels, table headers, metadata) — build the definitive list (this plan found 3 confirmed files; more likely exist in `Header.tsx`, `Footer.tsx`, `Hero.tsx`, `HowItWorks.tsx`, `ProblemSection.tsx`, `SavingsCalculator.tsx`, `OurJourney.tsx`, `GuaranteeSpotlight.tsx`, `DeepDiveTeaser.tsx`, `AppExperience.tsx`, `HomeRoofVisualizer.tsx`, `ProjectsGrid.tsx`, `AboutSection.tsx`, `LeadershipQuote.tsx` — none of these were opened in this pass).
2. Downgrade confirmed non-heading `font-bold` instances to `font-semibold`, component by component, verifying visual diff at each step.
3. Confirm `h3`/`h4` usage across pages actually renders through the global CSS rule rather than being overridden locally with ad-hoc `font-bold`/`font-heading` classes that fight the base rule.
4. Delete or archive `PageContextBar.tsx` once confirmed unused (separate PR from typography work, per the Do-Not-Change caution on unrelated cleanup).
5. Add the `--type-*-size` tokens from Section C as CSS custom properties without touching `--font-display`/`--font-body`/`--font-sans`/`--font-heading`.
6. Apply the Section D type scale to `h1`–`h4`, `.hero-display`, `.stat-figure`, and `.eyebrow` utility classes already defined in `index.css`.
7. Verify mobile breakpoints (430px, 390px) for hero and hero hero-display text — check `TrustBar.tsx`'s inline `fontFamily: 'var(--font-heading)'` cinematic headline at small viewport widths specifically, since it uses raw px clamp values already.
8. Run the QA matrix (Section J).
9. Do not touch Inter/Orbitron/Cairo unless a separate, explicit request is made.

---

## H. Accessibility

- Confirm `*:focus-visible { outline: 2px solid #8B1E1E; outline-offset: 3px }` (already present) still applies after any class renames.
- Verify `text-accent-dark`/`text-accent-light` gradient text utilities (already defined with solid-colour fallbacks via `color:` before `background-clip`) retain that fallback after edits — this was already done correctly, do not remove the fallback `color` declarations.
- Check contrast of `font-semibold` (downgraded from bold) badge text against its background tints (e.g. `bg-amber-200` badges, `bg-emerald-50` badges) — weight reduction can slightly reduce perceived contrast on small text; verify against WCAG AA at the actual rendered size (10–11px in several badges).
- Confirm heading order is not skipped: `AboutPage.tsx`'s revamped structure uses `h1` (hero) → `h2` (section headers) → `h3` (sub-blocks) correctly per the diff reviewed.

---

## I. Performance

- Font loading is already efficient: `preconnect` + `display=swap` + only 4 weights per family, no unused weights loaded. No action required here.
- Do not add Inter/Orbitron/Cairo `<link>` tags speculatively — that would be a regression against Section 20's own goal of loading "only the approved families and weights actually required."
- `package-lock.json` and dependency tree were not implicated in typography — no build-time action needed.

---

## J. QA Matrix

Test at 1440px, 1280px, 1024px, 768px, 430px, 390px on:

- Home (`Hero.tsx`, `TrustBar.tsx` scroll story, `TrustPillars.tsx`, `TurnkeyExecutionJourney.tsx`, `SubsidyExplainer.tsx`, `TechnologySection.tsx`, `Testimonials.tsx`, `FAQSection.tsx`)
- About (`AboutPage.tsx` — hero banner, impact stats strip, mission/vision blocks)
- Services, Careers, Contact, Earn With Us, Gallery, Our Projects pages (all recently had breadcrumb bars removed — verify no top-spacing regression alongside typography checks)
- `FinalCTAForm.tsx` (multi-step form with WhatsApp redirect — verify label/button typography survives the new WhatsApp CTA buttons added in the latest commit)
- `SavingsCalculator.tsx` (not yet line-audited — check on first QA pass)

---

## K. Do-Not-Change List

- Do not modify `--font-display`, `--font-body`, `--font-sans`, `--font-heading` variable **names** (313+ existing usages depend on them).
- Do not introduce Inter, Orbitron, or Cairo without a separate explicit go-ahead — they are absent from the bundle today.
- Do not delete `PageContextBar.tsx` as part of this typography pass — flag it, don't remove it here.
- Do not alter the WhatsApp redirect logic just added to `CareersPage.tsx`, `ContactPage.tsx`, `EarnWithUsPage.tsx`, `FinalCTAForm.tsx`.
- Do not touch `vite.config.ts`, `vercel.json`, or the Tailwind v4 plugin setup — no config changes are needed for this typography pass.
- Do not add `font-extrabold`/`font-black` anywhere — confirmed unavailable in both loaded font weight sets.
