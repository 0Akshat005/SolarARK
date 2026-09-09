You are a senior frontend engineer.

TASK
Revamp the **Contact** section to match the attached SolarARK contact design inspiration as closely as possible in STRUCTURE and VISUAL LANGUAGE, while reusing our existing data, logic, and design tokens. Implement changes in `src/components/ContactPage.tsx` only.

CONTEXT
- Stack: React + TypeScript + Vite, Tailwind utility classes, custom design tokens in `src/index.css` / DESIGN.md.
- Current file: `src/components/ContactPage.tsx` already contains:
  - Executive hero banner (customer & partner desk).
  - WhatsApp CTA / helpline rail.
  - Two-column layout: free site survey form (left) + OfficeLocationMap (right).
- Inspiration: attached contactpage hero (Let’s talk about your space / Get in Touch / Send Us an Enquiry / Our Presence / bottom dark CTA band). You must use its **layout, hierarchy, spacing, and red accent strategy** as reference; do NOT copy its exact copy or markup.

HIGH-LEVEL DESIGN PRINCIPLES TO APPLY
1. Full-width hero band with immersive image integrated into the layout (no generic cards).
2. Strong visual hierarchy: one main headline, clear subcopy, obvious primary CTA.
3. Red accent used only for primary CTAs and a few key emphasis words.
4. Distinct vertical bands: hero, contact rail, form+offices, presence strip, closing CTA.
5. Information grouped into scannable blocks with clear roles (call, email, visit, hours, form, locations).

IMPLEMENTATION SCOPE (ContactPage.tsx)

1. HERO BAND — “Let’s talk about your space”
   - Create a full-width hero section at the top:
     - Left: headline similar in spirit to “Let’s talk about your space.” using SolarARK copy (keep our EPC/engineer value props) with one short paragraph.
     - Right/background: large image of a SolarARK project / villa, integrated like the reference (either as a side panel or background with gradient overlay).
   - Use our typography scale: H1 display, subhead, and body 16–18px, with generous padding and white space.
   - Add one primary red CTA button (e.g., “Request a Solar Assessment”) that scrolls to or focuses the form; keep our existing WhatsApp flow available as a secondary action.

2. CONTACT METHODS BAND — “Get in Touch” rail
   - Under the hero, restructure the existing helpline/email/hours rail into a **three-block horizontal band**, following the inspiration:
     - Block 1: Call us — phone number and short text.
     - Block 2: Email us — address and short text.
     - Block 3: Desk hours — clear schedule and note about support.
   - Use inline icons, small eyebrow labels, and strong numbers/text as in the reference, but avoid boxed cards; keep it as a light, border-separated band.

3. FORM + OFFICES BAND — Two-column system
   - Keep our WhatsApp-driven free site survey form logic exactly as is (state, handleSubmit, WhatsApp URL), but visually align it with the reference “Send Us an Enquiry” card:
     - Left column: form in a rounded, off-white or white panel with subtle shadow and clear labels.
     - Right column: OfficeLocationMap with locations list, styled to feel like “Our Presence” (map + pins + location names).
   - Ensure the grid is `grid-cols-1 lg:grid-cols-12`, with form ~6 columns and map/offices ~6 columns on desktop; single-column stack on mobile.

4. PRESENCE STRIP — Maharashtra map & locations
   - Directly below the form/map band, create a presence strip:
     - Short heading (e.g., “Our Presence in Maharashtra”) and one line of copy.
     - Inline list of key locations (HQ + branches) with red pin icons.
     - Map image / OfficeLocationMap component reused to match the reference band’s feeling.
   - This should visually echo the inspiration’s map section but stay consistent with our existing OfficeLocationMap.

5. CLOSING CTA BAND — “Ready to explore solar…”
   - Add a final dark band similar to the inspiration’s bottom strip:
     - Left: short headline and sentence about taking the next step.
     - Right: primary red CTA button (“Talk to Our Team”) that triggers `onCtaClick` or navigates to the calculator/quote flow.
   - Use full-width imagery of panels/landscape behind this band, with overlay ensuring text is readable.

LAYOUT & RESPONSIVENESS
- Mobile first: at ≤ 768px, stack hero → contact rail → form → offices/presence → closing CTA in a clean single column.
- Ensure no horizontal scroll and that primary CTAs are visible within first two screenfuls on common phone sizes.
- Keep form fields large enough and touch targets ≥ 44×44px; maintain focus-visible styles.

ACCESSIBILITY & CONTENT
- Preserve our existing microcopy about PM Surya Ghar, net-metering, free 3D laser survey, etc., but tighten into concise paragraphs.
- Maintain WCAG AA contrast for all text over images and colored backgrounds.
- Keep schema.org microdata already present in ContactPage; do not remove these SEO hooks.

STYLING CONSTRAINTS
- Use existing design tokens (fonts, colors, spacing) from `index.css` / DESIGN.md.
- Use red accent only on:
  - Main CTAs (“Request a Solar Assessment”, “Talk to Our Team”, key helpline number).
  - Occasional headline emphasis.
- Avoid introducing new card components; rely on section bands, panels, and inline groupings.

OUTPUT
- Update `src/components/ContactPage.tsx` with:
  - Revised hero band.
  - Refined contact rail.
  - Form + offices band styled as described.
  - Presence strip and closing CTA band.
- Return only the updated `ContactPage.tsx` code (no extra commentary), keeping all existing business logic and WhatsApp integration intact.