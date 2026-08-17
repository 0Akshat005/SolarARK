# Prompt for Antigravity — Sitewide Rebrand: Blue → Maroon Brand Identity

Paste everything below into Antigravity as one instruction. This replaces blue as the default primary color across all of `solar-ark-sigma.vercel.app` with the maroon brand identity already approved on the estimate form, and does it as a proper token migration — not a page-by-page patch job.

---

## 0. Read this first — why this needs to be a token migration, not a find-and-replace

Blue is currently the default primary color across this site, including in places I already specced myself in earlier work (listed in section 3). Some of those were built correctly — referencing a shared primary-color token — and some may have hardcoded the hex directly. This task has two real risks if rushed: (1) missing an occurrence because it was hardcoded outside the token system, and (2) accidentally recoloring something that was never "brand blue" to begin with (a genuine info-state blue, a third-party icon like WhatsApp, a chart color, etc.). Both failure modes come from treating this as a text search-and-replace instead of a proper audit. Do the audit first, make the change in one place, then verify it propagated everywhere it should and nowhere it shouldn't.

---

## 1. Establish the canonical token set first — before changing any component

Confirm (or create, if it doesn't exist as a real token yet) a full maroon ramp, not just one hex — a single flat color can't serve every UI role a "primary" needs to:

```css
--brand-primary:        /* the true maroon, sampled from the actual logo asset — same value already established for the estimate-form work */
--brand-primary-deep:   /* darker maroon — hover/active states, gradient starts */
--brand-primary-light:  /* a lighter/lifted maroon — for use on dark backgrounds where full-strength maroon would lose contrast */
--brand-primary-tint:   /* maroon at ~10–12% opacity — chip backgrounds, selected-card fills, soft highlights */
--brand-gold:           /* the existing gold/amber token from the estimate-form work — the gradient partner, reused as-is, not redefined */
--gradient-primary:     linear-gradient(100deg, var(--brand-primary-deep) 0%, var(--brand-primary) 55%, var(--brand-gold) 100%);
```

Every component below should reference these tokens, never a raw hex. If you find a component with blue hardcoded as a literal hex or an untokenized Tailwind class (`text-blue-600`, `bg-blue-500`, etc.), that's exactly the kind of miss this migration needs to catch — replace it with the token reference, not with a hardcoded maroon hex, so nothing drifts again next time this needs to change.

---

## 2. Full-repo sweep — how to find every instance

Search systematically, not just visually:
- Tailwind config / theme file for any `blue` scale currently mapped as the project's primary color
- Every component file for hardcoded hex values matching the current brand blue (the one used across the homepage form, About journey, and services journey work) and any near-variants
- CSS variable definitions (`:root`, theme files) currently pointing at a blue value
- Any styled-components/CSS-in-JS blue references
- SVG icon files with `fill`/`stroke` hardcoded to blue rather than `currentColor` or a token
- Static image assets that bake blue in directly: favicon, OG/social preview image, and the header logo file itself — check whether the logo asset currently rendered in the live nav is actually blue-accented ("Ark" in blue text, per the current About page) or already maroon; if the logo asset itself is wrong, that's the single highest-visibility fix on this list and should be corrected first
- Any focus-ring, selection-outline, or scrollbar styling referencing blue
- Toast/notification, loading-spinner, or progress-bar components if any use blue as an accent independent of semantic state colors

---

## 3. Known components already specced in earlier work — confirm and recolor these explicitly

These four were built from prompts that used brand blue as primary. Re-verify each one was actually built against a token (not a hardcoded hex) and update:

1. **Homepage estimate-form section** ("See What Solar Could Save You") — stepper active state, selected roof-card border/checkmark, primary CTA button, focus rings. All map directly to `--brand-primary`.
2. **About page "Our Journey" timeline** — this was deliberately built around one single consistent accent color (replacing the old multi-neon version). That single accent was `--brand-blue`; swap the token reference so it becomes `--brand-primary` and the connecting-line fill, icon-chip borders, and badge styling update automatically. If any of this was hardcoded to the blue hex directly instead of the token, fix it now.
3. **Services page "Turnkey Execution Journey"** — this one needs care, not a blanket swap. It uses a five-color process-accent palette (orange, blue, orange, green, purple) where only the **blue slot (stage 2)** was specced to intentionally match the site's primary brand color — the other four (orange ×2, green, purple) are a separate, deliberate accent set for sequential/process content and must stay exactly as they are. Confirm stage 2's accent references `--brand-primary` (or the old `--brand-blue`, now repointed) rather than a standalone blue hex, then verify only that one slot shifts to maroon while orange/green/purple are untouched.
4. **The "Claim Your Free Solar Savings Estimate" split form** — already recolored to maroon in prior work; use this as the visual reference for what "correct" looks like everywhere else, and confirm it's the single canonical instance per the consolidation done earlier (no older blue duplicate left anywhere).

---

## 4. The rest of the site — enumerate and sweep every remaining route

Beyond the four components above, audit every other page and shared element for blue used as primary/brand color, including but not limited to: the global header/nav (logo, active-link state/underline, "Get A Quote" button), the footer (links, social icons — but leave genuinely branded third-party icons like WhatsApp/Facebook/Instagram in their own real brand colors, don't force those to maroon), and every other route in the site's nav (About Us, Services, Earn with Us, Our Projects, Careers, Gallery, Contact Us, plus any legal/blog/404 pages that exist but aren't in the main nav). For each page found, check buttons, links, form inputs, badges, icons, and any decorative gradients.

---

## 5. What to leave alone — don't over-apply this

- **Semantic state colors stay semantic**: success/green, error/destructive-red, warning states — these communicate meaning independent of brand, recoloring them to maroon would actively hurt usability (e.g. a maroon "error" state next to a maroon brand button becomes ambiguous).
- **Gold/amber already in use** (badges, star ratings, laurel-wreath icons, the "24–48 hours" highlight) stays gold — it's already the correct brand-adjacent accent and is the gradient partner for maroon, not something being replaced.
- **Third-party/platform brand marks** (WhatsApp green, Google's multicolor "G", star-rating gold) keep their own real colors regardless of this migration.
- **The four-color-minus-one process palette** in the Turnkey Execution Journey (section 3, item 3) — only the one blue slot moves.

---

## 6. Accessibility re-verification

Every context where blue is being replaced needs its contrast re-checked against the new maroon values, not assumed to carry over — maroon and blue don't have the same luminance, so a combination that passed contrast with blue text-on-white or white-on-blue-button isn't guaranteed to still pass with maroon. Check at minimum: primary button text on `--brand-primary` and on `--gradient-primary` at both gradient ends, inline link text on the page background, focus-ring visibility against every background it appears on, and selected-state borders/checkmarks against their card backgrounds.

---

## 7. Verification pass — do this last, on every route

1. List every route in the site (main nav plus anything not in the nav) and screenshot each at desktop and mobile width, before/after.
2. Confirm zero remaining instances of the old brand-blue hex anywhere in the codebase (a final repo-wide search for that literal value should return nothing outside of comments/changelog, if any).
3. Confirm the header logo and any favicon/OG image match the true maroon brand, not the previous blue-accented version.
4. Confirm the Turnkey Execution Journey still shows four distinct process colors plus maroon in the blue slot — not five maroons, not the original blue left behind.
5. Confirm semantic colors (success/error/warning) and third-party brand marks are untouched.
6. Re-run contrast checks per section 6 on the actual rendered pages, not just the token definitions.
