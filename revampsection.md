You are an expert product designer and senior frontend engineer. Fully redesign and implement the “Solar Calculator” / savings-estimator section of my website:

https://solar-ark-sigma.vercel.app/

Do not make it a static mockup. Build a polished, production-quality, fully responsive and interactive calculator experience inspired by the supplied visual reference, while maintaining a clean SolarARK brand identity and a premium Indian residential-solar audience feel.

IMPORTANT:
- First inspect the existing project structure, routes, design system, components, and current calculator logic.
- Preserve the existing working site outside this calculator area unless a small supporting change is necessary.
- Reuse the project’s existing framework, styling approach, icon library, and component conventions where possible.
- Do not introduce a new UI framework or unnecessary dependencies.
- If the existing calculator already has business logic, preserve and improve it rather than replacing it with hard-coded display values.
- Code must be clean, maintainable, accessible, and responsive—not a static image-like design.

==================================================
PRIMARY GOAL
==================================================

Create a premium “Solar Savings Calculator” section that captures:
1. User location via Indian 6-digit pincode
2. Average monthly electricity bill
3. A calculation action
4. A useful personalized recommendation/result state

The visual direction should feel warm, trustworthy, high-end, modern, and conversion-focused:
- Cream/off-white background
- Deep navy text and surfaces
- Solar orange/coral as the principal accent
- Soft peach glow, warm shadows, faint grid/wave line art
- Large editorial serif display typography for the marketing headline
- Clean modern sans-serif for form labels, navigation, and calculator controls
- Rounded card corners, generally 28–40px on desktop
- Subtle micro-interactions rather than flashy animation

==================================================
SECTION STRUCTURE
==================================================

Build the calculator as a full-width section with two complementary panels on desktop and a stacked layout on mobile.

A. LEFT: BRAND / STORYTELLING PANEL
- Approx. 36–42% of desktop width.
- Use a softly textured warm ivory / light peach background.
- Top: display the SolarARK logo or existing brand mark.
- Add a small rounded badge with a sun icon and a line similar to:
  “SMART TODAY. SECURE FOREVER.”
- Large premium headline with intentional line breaks:
  “Predictable power.
   Lasting savings.
   It starts with you.”
- Make “It starts with you.” use the orange/coral accent and an elegant italic serif treatment.
- Add a brief supporting paragraph:
  “Share a couple of details and we’ll reveal your ideal solar system, estimated savings, and long-term benefits.”
- Reserve a large media block in the lower portion for a future image:
  - Use a clearly named placeholder area/component such as `CalculatorHeroImage`.
  - Do NOT use an external stock image.
  - The placeholder should be visually attractive even without an image: soft gradient, subtle house/solar abstract pattern, or neutral media frame.
  - Add a code comment showing where a future image source should be placed.
  - The image block should support `object-fit: cover`, maintain a premium crop, and gracefully render once an actual image is supplied.
- Add a small frosted/translucent security card over the media region:
  - Shield/lock icon
  - “Your data is 100% secure”
  - “Private. Protected. Never shared.”
- Optionally include very subtle decorative orbital lines, sun marks, curves, and dotted paths. These must not affect readability or interfere with controls.

B. RIGHT: INTERACTIVE CALCULATOR PANEL
- Approx. 58–64% of desktop width.
- It should appear as a large elevated off-white card, with generous padding, soft shadow, and a large rounded corner radius.
- Add a progress header:
  - Step 1: “Your Details” (active)
  - Step 2: “Your Solar Recommendation” (inactive until calculation is completed)
  - Use a thin orange progress line that animates when the form is valid/calculated.
- Add form label:
  “ENTER YOUR LOCATION”
- Add a pincode field:
  - Input type should support numeric keypad on mobile.
  - Accept exactly six numeric digits.
  - Format and validate in real time.
  - Show clear inline validation state.
  - Include a location-pin icon.
  - Include an optional serviceability state on the right:
    - Valid: green check icon + “Serviceable”
    - Invalid or unsupported: clear neutral/error state and helpful message
  - Do not claim a specific electricity-distribution provider unless it is backed by actual project logic/data.
  - If there is no real serviceability API, use a clearly documented configurable validation function/data source instead of pretending to make a live API call.

- Add the question:
  “WHAT’S YOUR AVERAGE MONTHLY ELECTRICITY BILL?”

- Add an interactive bill selector:
  - Desktop: a premium curved/arc slider inspired by the reference.
  - Mobile/tablet: use an accessible, touch-friendly horizontal range slider while retaining the same visual style.
  - Do not sacrifice usability for visual fidelity.
  - Show the selected amount prominently in the center, formatted in INR:
    Example: ₹8,500 / month
  - Include visible range cues such as ₹1k, ₹5k, ₹10k, ₹15k, ₹25k+.
  - Define sensible min/max/step values, for example:
    min ₹1,000
    max ₹25,000
    step ₹500
  - The selected amount must update instantly as the slider moves.
  - Use proper ARIA labels and keyboard support.
  - Ensure all text remains readable at every screen size.

- Add a subtle decorative energy-wave / dotted-line visual beneath the price display. Keep it CSS/SVG based and non-essential so that it can be hidden at smaller sizes without breaking the UI.

- Add a large primary CTA:
  “Calculate My Solar Savings”
  - Dark navy pill-shaped button.
  - Left circular glowing sun/energy icon.
  - Right coral/orange circular arrow icon.
  - Include hover, active, focus-visible, disabled, and loading states.
  - Disable it until the pincode is valid and the bill amount has a valid value.
  - On submit, show a brief loading state such as “Calculating your savings…” without blocking the page.
  - Use a real button and form submit behavior, not a clickable div.

- Under CTA, show trust indicators:
  - Clock icon: “Takes less than 30 seconds”
  - Shield icon: “No obligation”
- On desktop, place a handwritten-style or gently styled note near the CTA:
  “Get your personalized savings estimate”
  with a subtle curved arrow pointing toward the CTA.
- Hide or simplify this decorative note on mobile if space is constrained.

C. BOTTOM ASSURANCE STRIP
- Add a full-width deep navy strip across the bottom of the calculator section.
- Include three trust statements, each with a refined outlined icon:
  1. “Tier-1” / “High Efficiency Cells”
  2. “Expert” / “In-House Installation”
  3. “25-Year” / “Performance Guarantee”
- Use tasteful separators or spacing.
- On mobile, stack these into a clean, readable three-row or one-column layout.

==================================================
CALCULATION AND RESULT EXPERIENCE
==================================================

Implement actual interactive behavior.

1. Form state
- Maintain pincode, validation status, selected monthly bill, loading state, and recommendation/results state.
- Persist the user’s selected bill and pincode during the current session so accidental navigation or layout changes do not erase the form.
- Handle invalid form submissions accessibly by moving focus to the first error and announcing errors appropriately.

2. Calculation
- Encapsulate the calculator logic in a reusable utility/function, for example:
  `calculateSolarRecommendation({ monthlyBill, pincode })`
- Make all assumptions configurable at the top of the utility or in a constants/config file.
- Use a transparent illustrative estimate model, not a fake exact quote.
- Suggested configurable output fields:
  - Estimated recommended system size in kW
  - Approximate monthly solar generation in kWh
  - Approximate monthly savings in INR
  - Approximate annual savings in INR
  - Indicative payback period
  - Estimated CO₂ avoided annually, if the project has a suitable methodology
- Clearly label estimates as indicative, since real output varies by location, roof, tariff, shading, consumption pattern, and approvals.
- Avoid inventing real-world provider-specific rules, subsidies, tariffs, or service coverage. Keep values configurable and clearly marked as estimate assumptions.

3. Results panel / step two
- After successful submit, animate the progress state from Step 1 to Step 2.
- Smooth-scroll or transition to a recommendation panel within this same section.
- The results panel should continue the premium design language, not look like a generic dashboard.
- Prominently show:
  “Your Solar Recommendation”
- Present the key outputs in elegant cards or a concise visual summary:
  - Recommended system size
  - Estimated monthly savings
  - Estimated annual savings
  - Indicative payback period
- Include a small “Based on ₹X/month electricity bill” summary.
- Include an “Edit details” button that returns to the form with all prior values retained.
- Include a secondary conversion action appropriate for the existing product flow, such as:
  “Talk to a solar expert” or “Get detailed quote”
  Only wire it to an existing route/action if one already exists; otherwise use a clearly marked placeholder callback or TODO.
- Ensure the results experience remains fully usable on mobile.

==================================================
RESPONSIVE BEHAVIOR
==================================================

Desktop:
- Use the split brand-panel + calculator-card composition.
- Maintain airy spacing and premium proportions.
- Do not allow content to feel compressed on 1280px-wide screens.

Tablet:
- Retain hierarchy and card quality.
- The two-column layout may narrow or transition at an appropriate breakpoint.
- Ensure slider labels never collide.

Mobile:
- Stack content vertically.
- Place marketing/brand introduction first, followed by the calculator card.
- Reduce display type size carefully; keep it editorial and readable.
- Make the pincode field, slider, CTA, and result cards full-width/touch friendly.
- Use the simple range slider rather than the decorative curved control if needed.
- Do not use horizontal scrolling.
- Keep tappable controls at least 44px tall.
- Preserve key content and functionality; only reduce non-essential decorative elements.

==================================================
ACCESSIBILITY AND QUALITY
==================================================

- Use semantic landmarks, headings, labels, fieldsets where appropriate, and actual button/input elements.
- Ensure keyboard navigation works for every interactive element.
- Add clear `:focus-visible` styles that fit the design.
- Meet strong color contrast standards, especially for navy/orange/cream combinations.
- Respect `prefers-reduced-motion`.
- Do not communicate important states with color alone.
- Add descriptive aria-labels for icon-only elements.
- Avoid text embedded in decorative images.
- Do not make the curved slider the only available control; include an accessible semantic range input underneath or use it as the functional control.
- Avoid layout shifts while transitioning into loading/results states.
- Keep animations fast, subtle, and purposeful: 150–300ms where appropriate.
- Optimize for performance: SVG/CSS decorations over large assets, no unnecessarily heavy libraries, and lazy-load any eventual large image.

==================================================
VISUAL DETAILS
==================================================

Use these approximate design tokens, adapting them to the existing site branding where necessary:

- Background cream: #F8F4EF
- Card surface: #FFFDFC
- Deep navy: #07162B or closest existing brand navy
- Solar orange/coral: #E9532D
- Warm accent glow: rgba(233, 83, 45, 0.18)
- Success green: #2F9E58
- Muted text: #68707A
- Border: rgba(7, 22, 43, 0.12)
- Large display serif: use an existing premium serif if already in the project; otherwise use a performance-friendly fallback stack
- UI sans: use the existing project font; otherwise a clean modern sans-serif fallback

Visual constraints:
- Avoid generic SaaS dashboard styling.
- Avoid excessive gradients, glassmorphism, and oversized icons.
- Avoid creating a replica of the reference; capture its hierarchy, warmth, and premium conversion focus in an original implementation.
- Ensure no important text is positioned only as an absolute decorative overlay.
- The hero/media area must remain intentionally blank/placeholder-friendly until an image is added later.

==================================================
DELIVERABLES
==================================================

1. Implement the redesigned calculator section in the existing project.
2. Create or refactor reusable components where useful, for example:
   - SolarCalculator
   - PincodeInput
   - ElectricityBillSlider
   - CalculatorProgress
   - SolarRecommendationResults
   - TrustStrip
   - CalculatorHeroImage
3. Add a small calculation utility/config module with documented assumptions.
4. Add form validation and complete loading/error/success states.
5. Ensure desktop, tablet, and mobile responsiveness.
6. Add concise comments only where future customization is expected, especially:
   - Future hero image source
   - Pincode serviceability data/API integration
   - Calculation assumptions
   - Quote/contact callback integration
7. Verify there are no console errors, broken imports, inaccessible controls, or hard-coded static interactions.
8. Return a concise summary of:
   - Files changed
   - Existing logic reused
   - Configuration values to customize
   - Exact place to add the future image asset