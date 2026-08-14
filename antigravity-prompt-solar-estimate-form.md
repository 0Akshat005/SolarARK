# Prompt for Antigravity — "See What Solar Could Save You" Estimate Section

Paste everything below into Antigravity as one instruction. It's written so Antigravity does its own discovery pass on your live codebase before touching anything — that's what keeps this section from clashing with the rest of SolarARK.

---

## 0. Before you write any code — audit first

This is a **revamp of an existing section**, not a new page. Before generating anything:

1. Find the current implementation of the hero/lead-form section on the homepage of this repo (the one currently deployed at `solar-ark-sigma.vercel.app`). Identify its component file, its DOM `id`/anchor, and every place in the codebase that links or scrolls to it (nav links, header CTA buttons, hero CTAs, footer links, sticky mobile CTA — anything with `href="#..."` or a `scrollIntoView`/`scrollTo` call targeting it).
2. Extract the project's real design tokens: Tailwind config (or CSS variables) for color palette, font families, border-radius scale, shadow scale, and spacing scale. Also check for an existing button, input, select, and card component so you reuse them instead of inventing new ones.
3. Confirm the tech stack (framework, styling approach, component library, form/validation library, icon set) actually in use — don't assume.

**Do not break any existing anchor.** If the current section's `id` is, say, `#get-estimate` or `#solar-estimate-form`, keep that exact `id` on the new markup so every existing link across the site continues to resolve without edits. If you must rename it, grep the whole repo for the old anchor string and update every reference in the same change — zero broken links is a hard requirement, not a nice-to-have.

---

## 1. What this section is

A 3-step, no-obligation solar estimate wizard that sits near the top of the homepage as the primary conversion point. Step 1 collects pincode, average monthly electricity bill, and roof type. Steps 2–3 (details, then the estimate result) already exist elsewhere in the flow or should be scaffolded as placeholders in the same component pattern — implement Step 1 fully; stub Steps 2 and 3 with the same visual language so the stepper is real, not decorative.

Reuse SolarARK's actual brand voice already live on the site: PM Surya Ghar subsidy eligibility, transparent pricing, certified-engineer credibility, 25-year guarantee tone. This form is the trust handshake before that promise — it should feel calm, competent, and fast, never salesy.

---

## 2. Design tokens (reconcile with what you found in step 0 — the site's real tokens win if they conflict with these; use these as the target if the section is genuinely new)

**Color**
- `--bg-page`: warm ivory, near `#FDF8F1` — not pure white, gives the page warmth against a very blue product
- `--ink-primary`: near-black navy, `#10142B` — headline, high-emphasis text
- `--ink-secondary`: `#5B6472` — subheads, descriptions, helper text
- `--brand-blue`: `#2F5DFA` — primary CTA, active states, links, focus rings
- `--brand-blue-tint`: `#EAF0FE` — badge pills, icon chips, selected-card background
- `--panel-tint`: `#EEF1FB` — the right-hand "what you'll receive" panel background, slightly cooler/greyer than the blue tint so it reads as a distinct zone, not a copy-paste
- `--border-subtle`: `#E3E7F0`
- `--surface`: `#FFFFFF` — cards, inputs

**Type**
- Display/headline face: a confident geometric or grotesque sans at heavy weight (700–800) — match whatever the rest of SolarARK already uses; don't introduce a second display face
- Body/UI face: same family at 400–600, used for labels, inputs, descriptions
- Set an explicit scale: eyebrow badge 12px/uppercase/tracked, H1 44–56px (clamp for responsive), subhead 18px, section labels 15px/600, body/help text 14px

**Shape & elevation**
- Card radius: 20px outer container, 12px inner cards/inputs
- Shadow: one soft ambient shadow on the outer container only (`0 20px 60px -20px rgba(16,20,43,0.12)`), everything inside stays flat — don't stack shadows on nested cards, it reads cheap
- Border: 1px `--border-subtle` on inputs and unselected option cards; selected states swap the border to `--brand-blue` at 1.5px plus the tint background, no shadow needed to signal selection

---

## 3. Layout, top to bottom

**Eyebrow badge** — centered pill, `--brand-blue-tint` background, `--brand-blue` text, uppercase, small dot or bullet separator between "FREE" and "NO OBLIGATION."

**Headline** — centered, `--ink-primary`, heaviest weight in the type scale: "See What Solar Could Save You." Keep it a single confident sentence, not a stacked two-liner unless the viewport forces a wrap.

**Subhead** — centered, `--ink-secondary`, one line: personalised estimate, roof design, subsidy eligibility, tied to their home specifically.

**Trust row** — three inline items, each a small circular icon chip (`--brand-blue-tint` bg, brand-blue stroke icon) plus a short label, divided by thin vertical rules: Free estimate / No sales pressure / Prepared by certified engineers. This row is doing real work — it's pre-objection handling before the form asks for anything — keep the icons literal (shield, people, badge), not decorative.

**The form container** — a single rounded card, split into two zones on desktop:
- **Left ~65%**: the active step and its fields (white surface)
- **Right ~35%**: "What you'll receive" panel (`--panel-tint` surface), visually distinct so it reads as a reward preview, not more form

On mobile, the right panel moves *below* the form, not above — the form is the job, the panel is reassurance.

**Stepper** (top of the left zone): three steps — "Your Home," "Your Details," "Your Solar Estimate." Current step is a filled `--brand-blue` circle with white numeral and blue label; future steps are outline/grey circles with grey labels; the connecting line between them is blue up to the current step, grey after. Only use this numbered 01/02/03 pattern because it's a real sequence the user must complete in order — that's the one place in this design a numbered marker is earned.

**Step 1 fields**:
- Two-column row (stacks to one column on mobile): "6-Digit Pincode" text input with a location-pin icon label, and "Average Monthly Electricity Bill" as a select/dropdown with a bill icon label. Real validation: pincode must be exactly 6 digits, numeric only, inline error under the field, not a toast.
- "What type of roof do you have?" — three selectable option cards in a row (stack on mobile): Concrete/RCC, Metal/Tin, Tiled/Sloped. Each card has a line-art icon of the roof type, a bold label, and a one-line description. Selected card gets the blue border + tint background + a small filled checkmark badge in the top-right corner. Make the whole card clickable, not just a tiny radio — bigger hit target, and keyboard-operable via arrow keys or tab+enter, not just mouse.

**Primary CTA** — full-width button, `--brand-blue`, white bold label "Get My Solar Estimate" with a trailing arrow icon. Disabled/muted state until pincode and bill range are filled (roof type can default to a pre-selected option as shown). On click: validate, then advance the stepper to Step 2 — don't submit silently.

**Micro-trust footer under the CTA** — small centered row, grey text: a clock icon + "Takes less than 60 seconds," a bullet, a padlock icon + "No obligation."

**Right panel content**:
- Gift icon in a circular chip at the top, centered
- "What you'll receive" heading with a short underline accent beneath it (small blue rule, not a full-width divider)
- Four rows, each: small rounded icon chip on the left (`--brand-blue-tint` bg), bold title, one-line grey description below it: Estimated solar system size, Approx. monthly savings, 3D roof design, Government subsidy eligibility
- A separated footer block at the bottom of the panel, slightly inset with its own subtle background and a padlock icon: "Your information is safe with us. We never share your details." This is a distinct trust callout, not just another list item — give it a hairline top border to separate it from the list above.

---

## 4. Interaction & motion — restrained, not decorative

- Step transitions: crossfade + slight horizontal slide (16px) between steps, ~200ms ease-out. No bounce, no overshoot — this is a trust-building form, not a game.
- The stepper's connector line should visually "charge" forward when a step completes — a brief left-to-right fill animation on the segment that just became active, echoing the product (solar = energy filling up) without becoming a gimmick. This is the one deliberate signature touch — everything else in the section stays quiet.
- Option-card selection: on click, brief scale (0.98 → 1) + border color transition, ~120ms. No shadow pop.
- Respect `prefers-reduced-motion`: fall back to instant state changes, no slides or fills.
- All interactive elements need a visible keyboard focus ring using `--brand-blue` at sufficient contrast — don't rely on the browser default, but don't remove it either without replacing it.

---

## 5. Responsive rules

- Breakpoint the two-zone card to a single column under ~900px; right panel renders after the form, with reduced padding.
- Trust row under the headline wraps to two lines gracefully on narrow viewports rather than truncating.
- Roof-type cards go from 3-across to a stacked single column below ~640px — don't shrink them to an unreadable 3-across grid on phones.
- Touch targets on mobile (inputs, option cards, CTA) stay at least 44px tall.

---

## 6. Accessibility floor

- Every input has a real, associated `<label>` (not just placeholder text as the only label).
- Roof-type cards are implemented as a radio group semantically (role="radio"/`<input type="radio">` visually hidden or styled), not plain `<div>`s with onClick only — screen reader users need to know these are mutually exclusive options in a group with a name ("What type of roof do you have?").
- The stepper announces the current step to assistive tech (`aria-current="step"` on the active step).
- Color is never the only signal for selection — the checkmark badge and border-weight change both carry the "selected" state.
- Form validation errors are announced (`aria-live="polite"` region or `aria-describedby` tying the error to its field), not just color-coded red text.

---

## 7. Link-integrity checklist (do this last, verify explicitly)

1. Grep the repo for every reference to the old section anchor/id and confirm each still resolves after your change.
2. Confirm the header/nav "Get Estimate" (or equivalent) CTA, any hero CTA, and any footer/sticky-mobile CTA still scroll to and land correctly on this section, with smooth-scroll behavior preserved if it existed before.
3. If the site uses a router with hash-based deep links (e.g., someone can land directly on `solar-ark-sigma.vercel.app/#section-id`), confirm that direct deep-link still scrolls to the right place on page load, not just on in-page click.
4. Take a screenshot of the rebuilt section at desktop and mobile widths and visually diff it against the reference design before calling this done.

---

*Reference: the attached screenshot is the approved visual direction — follow its layout, hierarchy, and copy exactly; the tokens and interaction notes above are there to help you execute it precisely within SolarARK's existing design system rather than as a generic template.*
