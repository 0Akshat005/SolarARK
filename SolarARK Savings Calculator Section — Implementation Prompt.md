Implement/refine the **SolarARK “Solar Savings Calculator” section** shown in the attached reference image, but do not copy it blindly. First inspect the **entire current revamped website** at `https://solar-ark-sigma.vercel.app/` and analyze the section immediately above and below it so this component feels like a natural continuation of the site.

### Core goal
Make this section feel like a **high-trust decision-making section**, not another hero. The user should understand it within a few seconds:

**Enter bill → see potential savings → understand the benefit → take action.**

### Visual direction
Use the reference as the design direction:

- Warm, realistic rooftop-solar background with a visible residential solar installation.
- Use a **very subtle cinematic dark vignette only on the far-left/content area** to improve readability.
- Do NOT make the whole section dark.
- Preserve the positive, warm feeling of the solar/home image.
- Keep the solar panels clearly visible; do not cover the important panel area with oversized cards.
- Use SolarARK navy + brand red as the main palette.
- Use green only for genuine savings/result states.
- Use warm yellow/orange sparingly for emphasis.
- Avoid excessive glassmorphism, gradients, glow, shadows or decorative UI.

### Section structure

#### Left side — problem + understanding
Eyebrow:

`GRID TARIFF ESCALATION VS SOLAR STABILITY`

Headline:

`Your electricity bill keeps going up.`  
`Your rooftop doesn’t have to.`

Use the second line in SolarARK red.

Supporting copy should be concise and human. Prefer explaining the consequence first, then the reason. Do not overload the user with DISCOM/tariff terminology.

Add only **3 compact proof points** below:

- Lock costs for 25+ years
- Slash bills up to 90%
- Clean energy for life

Use minimal line icons.

#### Left-side comparison visual
Keep the rising-cost comparison, but make it a **secondary supporting visual**, not a huge opaque card.

Show:

`TODAY → 5 YEARS → 10 YEARS`

with:

**Grid electricity:** rising line  
**SolarARK:** stable line

Use actual verified/calculated values where available. Do **not** hardcode invented savings figures.

The visual should be compact enough that the real rooftop remains visible.

A short conclusion below:

`The longer you stay on the grid, the more you keep paying.`

Do not add another large CTA here.

---

### Right side — calculator should be the focal interaction

Use a large, clean, premium white card with subtle shadow and soft border.

Structure:

**1 — Your Details**

- 6-digit pincode
- Serviceability state
- Average monthly electricity bill
- Slider
- Quick-select bill amounts

Then:

**2 — Your Solar Savings Estimate**

Show the calculated result prominently:

`YOU SAVE`

`₹X,XXX / month`

and yearly equivalent.

Then a compact comparison:

`CURRENT MONTHLY BILL` vs `WITH SOLAR`

Use red for current grid cost and green for solar result.

Show:

`Net Monthly Benefit`

### Primary CTA

`Get My Free Savings Estimate →`

This must be the strongest interaction in the section.

Under it:

`No Obligation · 100% Free · Personalized 3D Site Survey`

Only use claims that are genuinely supported by the SolarARK business process.

### Secondary information
Below the CTA, keep two small result cards:

- Recommended System
- Effective Investment / After Subsidy

If a value cannot be calculated reliably, show a neutral loading/placeholder state rather than fake data such as `₹NaN`.

Include:

`See full savings breakdown ↓`

as a secondary interaction.

---

### Trust treatment

Keep the bottom trust row, but make it **compact and quiet** so it does not become another visual layer.

Possible items:

`Trusted by families & businesses`  
`High Quality Components`  
`Expert Installation`  
`After-Sales Support`  
`Customer Rating`

Only display actual verified SolarARK statistics/reviews.

Do not invent customer counts or ratings.

---

### Background / composition rules

The image should remain emotionally visible around the UI.

Use the composition:

**dark readability zone → content → calculator → bright residential solar/home outcome**

This creates the psychological sequence:

**problem → understanding → calculation → visible reward → action**

The right side should retain a **hopeful residential rooftop/home feeling**, not another generic solar-farm image.

---

### Important spacing rule

Study the section immediately above and below the component and match:

- container width
- vertical rhythm
- section padding
- border radius language
- heading scale
- typography
- color treatment
- animation style

Do not make this section visually disconnected from the rest of the website.

It should feel like it was designed as part of the same system.

---

### Motion

If appropriate, introduce subtle scroll/interaction animations:

- bill value animates smoothly when slider changes
- savings number counts up
- comparison bars/lines animate when values update
- CTA has a restrained hover interaction
- cards reveal with small upward movement

Do **not** use bouncing, excessive parallax or flashy animations.

The animation should make the calculation feel alive and understandable.

---

### Responsive behavior

Desktop:
- split composition
- calculator dominant on right
- real rooftop visible behind/around the section

Tablet:
- preserve calculator priority
- reduce background prominence

Mobile:
- stack in this order:

`Headline → proof points → calculator → comparison → trust`

Keep the background visible but never allow it to reduce readability.

---

### Critical trust rules

Do not invent:

- savings amounts
- tariff increases
- system sizes
- subsidies
- ratings
- customer counts
- project statistics

Use the existing SolarARK site's verified content and the actual calculator logic.

The final section should feel **credible enough that a homeowner would trust entering their pincode and electricity bill**.

### Pareto principle

Do not add more UI just because there is available space.

The most important elements are:

**1. Clear problem**  
**2. Easy calculator input**  
**3. Clear savings result**  
**4. Strong CTA**  
**5. Real solar/home imagery**  
**6. Minimal trust proof**

Everything else is secondary.

Before finishing, compare this section visually with the **previous section and next section** and refine its spacing, brightness, hierarchy and color so the entire landing page feels like one premium, cohesive SolarARK experience rather than a collection of individually designed sections.