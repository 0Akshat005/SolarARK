You are a senior frontend engineer working inside the SolarARK codebase.

Attached image:
- This is the **target design** for the Solar Savings calculator hero.
- Left: editorial villa photo + headline + trust badges.
- Center: calculator card (“Your Details” step) with pincode and monthly bill slider.
- Right: narrow vertical band with sunlight + tree pop-out and tagline.

Context
- Stack: React + TypeScript + Vite, Tailwind for layout + design tokens already defined in `index.css` / DESIGN.md.
- File: `src/components/SavingsCalculator.tsx` currently implements the calculator UI; we want to **revamp** its outer layout + styling to match the attached design while keeping the calculation logic and props intact.
- You MUST use our existing brand colors, typography roles, spacing scale and glass-panel utilities from `index.css` instead of random Tailwind colors.

Exact UI we want (component scope = full hero section around the calculator):

1. Split-screen layout
   - Full-width horizontal section with three logical zones:
     - Left **hero panel** (~40–45% width).
     - Center **calculator card** (~40–45% width).
     - Right **sunlight / tree band** (~15–20% width).
   - On mobile: stack vertically (hero → calculator → right band), keeping all content and hierarchy.

2. Left hero panel
   - Background: large villa-with-solar photo filling the panel.
   - Overlaid copy (top-left):
     - Eyebrow: “Clean energy. Brighter tomorrows.”
     - Main headline: two-line display type like “See your real savings.” (use the exact SolarARK copy already defined in this repo; do not invent new slogans).
     - Subline: “Know your solar savings in 30 seconds.”
   - Below headline: three circular trust badges in a row:
     - “Accurate savings – Based on MSEDCL rates.”
     - “Govt. subsidy – PM Surya Ghar.”
     - “25-year assurance – Reliable. Worry-free.”
   - Bottom-left: handwritten style caption (use existing Marathi/English line from the repo if present) with a subtle curved underline.
   - Use our `hero-display`, `eyebrow`, and spacing tokens to match the density of the screenshot.

3. Center calculator card (“Your Details” step)
   - Card sits on a warm off-white background, slightly overlapping the left hero via z-index and shadow.
   - Top stepper:
     - Step 1 “Your Details” highlighted with maroon line and filled circle.
     - Step 2 “Your Savings” shown as upcoming, with muted circle.
   - Pincode field:
     - Label above input.
     - Input with left location icon.
     - Right-hand serviceability pill (“MSEDCL Serviceable”) aligned as in the design.
   - Monthly bill slider:
     - Large ₹ value centered (“₹8,500 / month” style, but use dynamic value from state).
     - Horizontal slider with red thumb and min/max labels (₹1k … ₹25k+).
     - Four preset pill buttons below (₹1k, ₹3k, ₹6k, ₹12k, ₹20k+), centered.
   - Primary CTA:
     - Wide maroon rounded pill button: “Show My Solar Savings” with sun icon on the left and arrow on the right.
     - Below CTA: three tiny trust lines with icons (“Takes 30 seconds”, “No spam”, “100% confidential”).
   - Reuse existing calculator logic (`calculateSolarSavings`, pincode validation, etc.) and wire all inputs/CTAs to that logic.

4. Right sunlight / tree band (CRITICAL)
   - Narrow vertical panel on the far right, full height:
     - Background: sunset city / landscape image.
     - The **tree pop-out** must overlap both the hero and the calculator card:
       - Use an absolutely positioned tree image that crosses the boundary between left and center panels (z-index above both).
       - Soft shadow and slight scale to feel like it’s “popping out”, but no heavy animations.
     - Vertical text block:
       - Small “01 / 02” paginator.
       - Tagline stacked vertically: “Cleaner / Stronger / More independent”.
   - Ensure this band is responsive: on mobile, tree sits above or behind the calculator card without breaking layout.

Implementation rules
- Phase 1: Build the layout structure and DOM hierarchy for this hero in `SavingsCalculator.tsx` (section + 3 columns), using Tailwind layout utilities only (grid/flex, gap, padding). No colors beyond neutral backgrounds.
- Phase 2: Apply SolarARK design tokens and brand styles from DESIGN.md / `index.css` to match the screenshot: colors, fonts, radii, shadows, glass effects.
- Phase 3: Polish interactions:
  - Hover/focus-visible states for CTA and pills.
  - Smooth transitions (`transition-all duration-200`) for slider thumb, pills and CTA.
  - Respect `prefers-reduced-motion` for any subtle entrance effects.

Output
1. Short summary of how you mapped the screenshot to the React structure.
2. The updated `SavingsCalculator.tsx` code implementing this full hero layout (keep calculation logic intact).
3. Notes on how the tree pop-out is layered (which elements use `relative`, `absolute`, and z-index).