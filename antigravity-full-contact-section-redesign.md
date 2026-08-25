# Prompt for Antigravity: Full Contact-Section Redesign (excludes global header/hero)

Paste everything below into Antigravity as a single task. This supersedes the earlier "wire up OfficeLocationMap" prompts — it now covers the entire Contact page body as one cohesive design pass, not just the offices/map block.

---

## Scope boundary — do NOT touch

- `src/components/Header.tsx` (global site nav) — untouched.
- Any hero/page-title banner rendered above the Contact page body (if one exists in `App.tsx` routing, e.g. via `PageContextBar.tsx`) — untouched.
- The hidden `itemScope`/`itemProp` Schema.org structured-data block at the top of `ContactPage.tsx` (SEO micro-metadata for `SolarEnergyContractor`) — untouched, keep exactly as-is.
- The WhatsApp submission logic, `handleSubmit`, and the `offices` data array's content (addresses/phones/emails) — untouched.

## In scope — redesign as one cohesive system

Everything in `src/components/ContactPage.tsx` from the top 3 info cards through the end of the two-column form/offices section. Treat these as one visual system with a consistent spacing rhythm, elevation scale, and typography hierarchy — not three independently-styled blocks.

### 1. Top 3 info cards (Direct Call / Written Inquiries / Engineering Desk Hours)
Currently: `bg-white border border-[#EBE6DF] rounded-2xl p-5 shadow-[0_2px_8px_rgba(26,31,44,0.04)]`, each with a colored icon badge (red-50/emerald-50/amber-50), a small uppercase eyebrow label, a bold value line, and a muted caption.

Keep this pattern (it's good — icon + eyebrow + value + caption is a clean scan pattern) but tighten consistency:
- Ensure all 3 cards use identical vertical rhythm: icon badge → eyebrow label (`text-[11px] font-semibold text-stone-400 uppercase tracking-wider font-heading`) → value (`font-heading text-lg sm:text-xl font-bold`) → caption (`text-xs text-stone-500`). Audit that spacing between these four elements is the same `space-y` value on all 3 cards (currently `space-y-3` on the outer card — confirm inner elements don't have inconsistent extra margins).
- On mobile (`grid-cols-1`), these 3 cards should never feel like a wall of white boxes — add a hairline `border-t border-[#EBE6DF]` divider treatment only if cards touch edge-to-edge on very small screens; otherwise keep current `gap-4 sm:gap-5`.
- Hover state (`hover:border-[#8B1E1E]/40 hover:shadow-sm`) should be consistent across all 3 — verify no card is missing it.

### 2. Two-column section: Assessment form (left) + Offices/Map (right)
- Both columns must share the same outer card treatment: `bg-white border border-[#EBE6DF] rounded-[20px] shadow-[0_10px_28px_rgba(28,35,46,0.07)]`, same corner radius, same padding scale (`p-6 sm:p-8` on desktop). Right now the form card already has this — apply the *same* outer card wrapper to `OfficeLocationMap`'s container (wrap it in a `<div className="lg:col-span-6 bg-white border border-[#EBE6DF] rounded-[20px] p-6 sm:p-8 shadow-[0_10px_28px_rgba(28,35,46,0.07)]">` instead of leaving it as a bare `space-y-4` div), so both columns read as equal-weight sibling cards at a glance — this is the single most important visual-hierarchy fix in this pass.
- Both column headers (form's "Request a Free Solar Site Assessment" and the map block's "SolarArk Registered Offices") must use identical heading treatment: same eyebrow pill pattern (`inline-flex ... bg-red-50 text-[#8B1E1E] border border-red-100 font-heading`), same `h1`/`h2` sizing (`font-heading text-2xl sm:text-[28px] font-bold text-[#0B1730] tracking-tight leading-[1.18]`), same subtitle style (`text-xs sm:text-[13px] text-stone-500`). Confirm both are already aligned (they should be, per the OfficeLocationMap component) — fix if drifted.
- Vertical rhythm inside each column: use `space-y-6` for the form card's internal sections, and ensure the map card's internal `space-y-4` doesn't make it look shorter/denser than the form card — pad the map card's bottom (e.g. `pb-2` on the last child) so both columns terminate at roughly the same visual baseline on desktop, avoiding a lopsided two-column layout.
- On `lg` breakpoint the grid is `grid-cols-12` with each column at `col-span-6` — keep this 50/50 split (do not go asymmetric).
- On mobile (`grid-cols-1`), the form should render first (primary conversion action), offices/map second — confirm current DOM order matches this (form markup before offices markup) since mobile users should be asked to convert before browsing locations.

### 3. Micro-interactions and accessibility pass (apply site-wide within this section)
- All interactive elements (form inputs, submit button, office-selector rows, map pills) need visible `focus-visible` states, not just `:hover` — add `focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/30 focus-visible:outline-none` to the office-selector `<button>` rows in `OfficeLocationMap.tsx` if missing (form inputs already have `focus:ring-2 focus:ring-[#8B1E1E]/20` — mirror that ring color/opacity for consistency across both columns).
- Confirm `aria-live="polite"` (or equivalent) isn't needed but IS present implicitly via the `submitted` conditional swap in the form — no change needed there, just verify it wasn't broken by other edits.
- Verify color-contrast: `text-stone-400`/`text-stone-500` on `bg-white` must meet at least WCAG AA for small text (4.5:1) — if any caption text feels too light after edits, bump to `text-stone-500`/`text-stone-600` rather than lightening further.

## Task

1. Ensure `src/components/OfficeLocationMap.tsx` from PR #1 (branch `feature/office-location-map`, latest commit `refactor(contact): redesign map as compact list+map replacing tall card stack`) is merged/present locally first.
2. Apply the "In scope" changes above to `src/components/ContactPage.tsx` only. Do not modify `OfficeLocationMap.tsx` except the `focus-visible` addition noted in section 3, if it's missing.
3. Import and render it per the prior integration instruction:
   ```tsx
   import { OfficeLocationMap } from "./OfficeLocationMap";
   ```
   replacing the old office-directory markup in the right column, now wrapped in the matching outer card container described above.
4. Run `npm run build` / `tsc --noEmit` — zero new errors.
5. Commit with message: `feat(contact): unify contact section design system (cards, form, offices/map)`

## Acceptance Criteria

- Global `Header.tsx` and any page hero/title above the contact body are pixel-identical to before — no changes.
- The 3 top info cards, the form card, and the offices/map card all share one consistent visual language: same border color, corner radius, shadow depth, heading treatment, and spacing rhythm.
- Form (left) and offices/map (right) columns look like equal-weight sibling cards at a glance, terminating at roughly the same height on desktop.
- Mobile order: info cards → form → offices/map (form before locations, since form is the primary conversion action).
- All interactive elements have visible focus states in addition to hover states.
- No console errors; clicking through all 4 office rows still updates the map/overlay correctly.
