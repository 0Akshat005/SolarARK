You are pair‑programming with me on the SolarARK marketing site.
Your current task: **revamp the About page layout and content hierarchy** using an attached inspiration image ONLY as a layout / composition reference, not for copying its text or photography.

CONTEXT
- Codebase: React + TypeScript + Vite, using Tailwind utility classes and a custom design system defined in `index.css` and DESIGN.md.
- Existing About page: `src/components/AboutPage.tsx` contains current sections (origin story, beliefs, process, team, journey, CTAs). Keep the brand voice and factual content; we are improving structure and presentation, not re‑writing history.
- Inspiration: the attached `aboutpage.jpg` shows a multi‑band editorial layout with:
  - Top hero band: strong headline + supporting copy + small origin/mission block and building photo.
  - Mid bands: belief statement with 3 pillars, large rooftop photo with quote, team band, 4‑step process band.
  - Bottom band: photo strip “glimpse into our journey” + dual CTAs, footer.

STRICT SAFETY & COPYRIGHT CONSTRAINTS
- Treat `aboutpage.jpg` purely as **design inspiration** (structure, density, rhythm, proportions).
- Do NOT copy or closely paraphrase any headline, slogan, paragraph, or quote from the inspiration image.
- Do NOT reuse the photographic compositions or attempt to reconstruct the exact scenes.
- Keep all factual content derived from our existing AboutPage and SolarARK brand materials in this repo.
- If you need new microcopy, write **short, generic supportive lines** that fit SolarARK’s voice, not the competitor’s.

GOAL
Design and implement a new About layout that:
- Feels editorial, spacious, and trustworthy.
- Makes the **top 20% of content** (mission, origin story, belief pillars, team, process) carry **80% of the clarity and trust**, following the Pareto principle.
- Uses our existing SolarARK design language (typography, maroon/gold palette, spacing tokens) rather than inventing a new brand.

PARETO‑BASED CONTENT STRATEGY (80/20)
1. Identify the high‑impact 20%:
   - One primary hero message about “Energy that works for real life” or equivalent, in our own words.
   - A concise origin / “Where it began” block (SolarARK story).
   - A “What we believe” section with 3 short pillars (e.g. Thoughtful design, Reliable execution, Long‑term support).
   - A “Team / People behind SolarARK” band.
   - A 4‑step “How we work” process band.
2. Ensure these blocks are:
   - Visually dominant (larger type, more white space, stronger imagery).
   - Easy to scan on mobile and desktop.
3. Keep lower‑impact 80% (secondary paragraphs, minor stats, long descriptions):
   - Present but compact, supporting the main blocks instead of competing for attention.
   - Placed in side columns, smaller type, or supporting bands.

IMPLEMENTATION PHASES (follow in order)

### Phase 1 — Content audit & wireframe (no styling)
- Read `src/components/AboutPage.tsx` and list the existing sections and their main messages.
- Propose a revised section order that roughly mirrors the inspiration structure:
  1. Hero band (headline + subcopy + small origin block + supporting image slot).
  2. “What we believe” band with 3 pillars.
  3. Story band with a key quote and rooftop imagery slot.
  4. Team band (“A team that builds what matters”) with CTA to team details.
  5. 4‑step process band (“From understanding to lasting impact” with 4 steps).
  6. Journey / gallery band with small photo cards.
  7. Bottom CTA band (“Explore our projects” + “Talk to our team”).
- Implement a **structural wireframe** About page component:
  - Use semantic sections (`<section>`) and clear headings.
  - Use Tailwind layout utilities only: `grid`, `flex`, `gap`, `py-16`, `space-y-8`, responsive `sm/md/lg` breakpoints.
  - Use placeholder `<div>`s for images (e.g. `bg-slate-200 rounded-xl h-64`) — no real images yet.
  - Do NOT add colors or typography classes beyond base font/size; focus exclusively on hierarchy and layout.

### Phase 2 — Apply SolarARK design system
- Read DESIGN.md and `src/index.css` to align with our design tokens: maroon/gold palette, typography roles (hero-display, eyebrow, stat-figure), spacing and radius tokens.
- Apply styling to the wireframe:
  - Hero band: large `hero-display` headline, supporting body copy, subtle accent underline, and a right‑aligned image container.
  - Belief band: big belief statement on the left, 3 numbered pillars on the right in equal cards.
  - Team band: dark overlay band with team photo slot and prominent CTA button.
  - Process band: horizontal 4‑step row with icon + short label + 1‑line description per step.
  - Journey band: 3–5 small photo cards in a responsive grid with captions.
  - Bottom CTA band: dual buttons using our primary maroon gradient and a secondary outline style.
- Use only colors and typography sizes from DESIGN.md / index.css; do **not** introduce arbitrary hex values or default Tailwind palette colors.
- Ensure mobile‑first behavior:
  - Stack major bands vertically.
  - Convert multi‑column layouts into stacked sections with preserved reading order.

### Phase 3 — Content refinement & microcopy (SolarARK voice)
- Rewrite headings and short lines as needed, in **SolarARK’s brand voice**, but:
  - Keep our factual content consistent with existing AboutPage.
  - Avoid copying inspiration text; use fresh phrasings.
- For each band, keep text brutally concise:
  - Hero: 1 strong headline + 1 short supporting paragraph.
  - Beliefs: 1 sentence per pillar.
  - Process steps: 1‑line labels + 1‑line descriptions.
  - CTA band: 2 concise button labels (e.g. “Explore Our Projects”, “Talk to Our Team”).
- Apply Pareto principle: if a paragraph doesn’t add clarity or trust, shorten or move it to a secondary position.

### Accessibility & trust details
- Every interactive element gets `hover`, `focus-visible` and `disabled` states consistent with our design system.
- Headings follow a logical hierarchy (`h1` for page, `h2` for major bands, `h3` for pillars/steps).
- Ensure contrast ratios for text over dark bands meet WCAG AA.
- Keep the About page copy transparent and factual; no exaggerated claims.

OUTPUT FORMAT
- Modify `src/components/AboutPage.tsx` in‑place.
- Keep the component API and routing intact.
- In your response, show:
  1. A short summary of the new About layout (1–2 paragraphs).
  2. The updated `AboutPage.tsx` code.
  3. Any notes where you intentionally applied the 80/20 rule (e.g. “These three pillars replaced five minor bullet lists.”).

If something in the inspiration image conflicts with these constraints, prioritize **SolarARK’s existing content, design system, and safety rules** over visual mimicry.