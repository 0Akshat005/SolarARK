You are a senior frontend engineer working on the SolarARK **Services** page.

TASK (MOBILE-ONLY)
Audit and FIX the **mobile responsive design** for the Services section (and Services page) without redesigning desktop. Only adjust layout and styling for small screens (≈320–480px width) so the services story is clear, scannable, and thumb-friendly, while preserving the existing desktop look.

CONTEXT
- Stack: React + TypeScript + Vite + Tailwind.
- Component: `src/components/ServicesPage.tsx` plus any child components it uses (service cards, category bands, process/benefits, CTAs).
- Current desktop layout: multi-column bands, service cards for Residential / Commercial / Industrial, process/journey content, trust elements.
- Current mobile issues: cramped columns, service cards squeezed side-by-side, long text with no breathing room, CTAs and icons too small or misaligned.

MOBILE DESIGN PRINCIPLES
Apply mobile-first responsive best practices:
- Single-column layout with clear vertical flow for services and CTAs.[web:94][web:103]
- Large, readable text (body 16–18px, headings scaled but not huge).[web:80][web:94]
- Tap targets ≥ 44×44px, with at least 8px spacing between buttons/cards.[web:94][web:103]
- Priority on scanning: service categories and primary CTAs should be easy to scan in 1–2 thumb scrolls.[web:80][web:93]

WHAT TO FIX (FOCUS AREAS)

1. Services hero band
   - On mobile (≤ 767px):
     - Use single-column stack: hero heading + supporting copy + main CTA(s).
     - Ensure margins (`px-4`, `py-6`) so text doesn’t hit the edges.
     - If there is a hero image, place it above or below the copy, full-width (`w-full h-auto`), not side-by-side.

2. Service category cards (Residential / Housing Society / Commercial & Industrial)
   - Convert any 3-column grid into a **vertical list**:
     - Each service card becomes full-width with: icon/label, short description, and CTA if present.
   - Maintain consistent spacing (`space-y-*`) between cards.
   - Avoid tiny cards in two or three columns on phones; prioritize clarity, not density.

3. Detailed service bands (e.g., “Design & Engineering”, “Execution”, “Support”)
   - For sections using text + image side by side:
     - Stack them vertically on mobile: text block first, then image (or vice versa based on importance).
     - Use `space-y-*` to separate blocks; eliminate awkward half-columns.
   - Shorten overly long paragraphs or increase line-height so they are readable on small screens.

4. CTAs & lead prompts within Services
   - Make CTAs (buttons like “Request Site Survey”, “Explore Pricing”, etc.) full-width or near full-width on mobile.
   - Ensure high contrast, proper padding, and visible hover/focus-visible states.
   - Keep at least one clear CTA visible within the first screenful on mobile.

5. Processes / timelines / icon rows
   - Any horizontal process row (e.g., 4-step journey) should become a vertical stack:
     - Step number, title, and 1-line description per step.
   - Ensure icons and labels are large enough and don’t wrap in confusing ways.

6. Carousels / image strips in Services
   - Prevent horizontal overflow and tiny thumbnails on mobile:
     - If using a slider, make sure arrow controls / dots are comfortably tappable.
     - If using static grids, use 2-column or single-column layout, no ultra-wide rows.

7. General mobile polish for Services page
   - Remove unnecessary fixed heights that cause clipping.
   - Ensure there is **no horizontal scroll** at common mobile widths.
   - Use consistent text alignment (left or center) per band; avoid mixing alignments within the same mobile section.
   - Maintain coherence with the rest of the site: same typography scale, spacing rhythm, and button styles.

IMPLEMENTATION RULES
- Use Tailwind responsive utilities (`sm:`, `md:`, `lg:`) to switch from single-column mobile to multi-column desktop layouts.
- Follow mobile-first CSS: base styles should be mobile-friendly; desktop enhancements layered via larger breakpoints.[web:94][web:103]
- Do NOT change the desktop structure or copy unless absolutely required by mobile constraints.

OUTPUT
- Update `ServicesPage.tsx` and any child components to:
  - Use single-column, stacked mobile layouts for all services content.
  - Fix spacing, typography, CTAs, and images specifically for mobile.
- In your response, provide:
  1. A brief list of mobile issues you found (per section).
  2. The updated components with mobile fixes only (desktop preserved).