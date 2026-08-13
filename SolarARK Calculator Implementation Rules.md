# SolarARK Savings Calculator — Implementation Rules

## ROLE

Act as a senior product designer + senior frontend engineer implementing the SolarARK Savings Calculator.

This calculator is a high-priority conversion component.

The objective is NOT to reproduce a reference screenshot.

The objective is to build the best possible real-world SolarARK calculator using:

1. The existing SolarARK calculation engine
2. The existing SolarARK masterplan
3. The attached visual reference as a visual-quality benchmark only

## SOURCE OF TRUTH

### Functional / Content Source of Truth
Use:

`/solar-website-masterplan.md`

and the existing calculator implementation/code.

Preserve the existing calculation engine and business logic.

### Visual Source of Truth
Use the supplied calculator reference image ONLY to understand:

- hierarchy
- spacing
- visual clarity
- result emphasis
- interaction flow
- information density
- overall polish

DO NOT reproduce the screenshot literally.

DO NOT copy screenshot elements into the website.

---

# 1. PRIMARY USER EXPERIENCE

The calculator must feel extremely simple.

The user's mental model should be:

**My bill → My savings → My next step**

The user should NOT feel that they are operating financial software.

Within approximately 3 seconds, the interface should answer:

- What do I enter?
- What will I get?
- Where do I click?

If the interface requires explanation, simplify it.

---

# 2. INITIAL STATE

Before calculation, prioritize ONLY:

### Required input
- Pincode
- Average monthly electricity bill

### Primary action
`Calculate My Savings →`

The monthly bill is the primary interaction.

Use:

- large visible ₹ value
- smooth slider
- small number of quick-select values
- obvious active state
- immediate serviceability feedback

Do NOT show advanced financial information before calculation.

Do NOT show:

- payback
- lifetime savings
- subsidy breakdown
- CO₂
- system size
- investment
- multiple result cards

before the user calculates.

---

# 3. RESULT STATE

After calculation, the result should feel like a reward.

The primary visual result should be:

## `₹X,XXX / month`

with a concise label such as:

`Estimated monthly savings`

Then show ONLY the two most decision-relevant supporting values:

- Recommended solar system
- Effective investment

Everything else is secondary.

---

# 4. BILL TRANSFORMATION

Create one extremely easy-to-understand comparison:

**Current electricity bill**

`₹X,XXX / month`

↓

**With Solar**

`~₹XXX / month`

↓

**You Save**

`₹X,XXX / month`

This should be visual-first.

Use:

- restrained comparison bars
- clean directional transition
- subtle color
- clear typography

Do NOT create a financial analytics dashboard.

---

# 5. PROGRESSIVE DISCLOSURE

Advanced information must NOT compete with the primary savings result.

Place deeper information behind:

`See Full Savings Breakdown →`

Only reveal after interaction:

- PM Surya Ghar subsidy
- payback period
- lifetime savings
- generation
- CO₂ impact
- financing information

Do NOT expose six or eight equally important metrics simultaneously.

Do NOT turn the advanced breakdown into another large card grid.

---

# 6. CRITICAL REFERENCE-IMAGE RULE

The reference image is NOT an asset.

NEVER place:

- the reference screenshot
- a screenshot crop
- a website screenshot
- a UI screenshot
- any baked-in reference text

inside the calculator interface.

The screenshot currently appearing as a small image inside the "Your Solar Savings Estimate" area is WRONG and MUST be removed.

That area must use:

- real HTML/CSS
- actual calculator values
- optional standalone solar/home imagery only if genuinely useful

The UI must be built from components, not from a screenshot.

---

# 7. VISUAL DIRECTION

Move away from the current dark SaaS-dashboard appearance.

Use:

- warm white
- very light blue
- SolarARK blue
- restrained solar yellow
- subtle green for savings

Use visual hierarchy rather than containers.

Avoid:

- giant dark panels
- nested cards
- cards inside cards
- excessive rounded rectangles
- excessive pills
- glassmorphism
- glowing dashboard effects
- dense financial tables
- unnecessary borders
- decorative UI with no function

Premium should come from:

- typography
- spacing
- composition
- clear hierarchy
- interaction quality
- restrained motion

---

# 8. DO NOT COPY THE REFERENCE'S LAYOUT LITERALLY

Do NOT force the implementation to have:

`left card + right card + four metric cards`

simply because the screenshot contains them.

The reference is showing a DESIGN INTENT, not a DOM structure.

Use professional judgment to determine the best layout.

The final implementation should feel like an original SolarARK product experience.

---

# 9. VISUAL SUPPORTING IMAGE

A small residential solar visual may be used inside the result experience ONLY if it improves understanding.

If used, it must be:

- real-looking
- Indian residential
- premium but attainable
- clearly associated with rooftop solar

The image must support the savings story.

It must NOT dominate the calculator.

It must NOT become another card.

It must NOT be a screenshot.

---

# 10. CONVERSION PSYCHOLOGY

The sequence should be:

**Curiosity**
→
**Low-friction input**
→
**Personalized result**
→
**Satisfaction**
→
**Next step**

After the result:

`Get My Free Savings Estimate →`

The CTA should feel like the natural continuation of the user's discovery.

Do NOT ask for unnecessary personal information before showing meaningful value.

Do NOT use fake urgency.

Do NOT use manipulative language.

---

# 11. MICROCOPY

Keep copy extremely short.

Prefer:

- labels
- values
- one-line helper text

Avoid long paragraphs.

The user should be able to scan the calculator, not read it.

---

# 12. CLAIM SAFETY

The calculation engine is the source of truth.

Do NOT hardcode reference-image numbers.

Do NOT invent or alter:

- savings
- subsidy
- payback
- tariff assumptions
- system size
- lifetime savings
- environmental impact

Any assumptions should remain available in small supporting text.

Do not present unverified business claims as facts.

---

# 13. MOTION

Use restrained interaction.

On calculation:

- gently reveal the result
- animate the primary savings number
- animate the bill transformation
- subtly highlight the result

Do NOT animate every metric.

No flashy effects.

Respect `prefers-reduced-motion`.

Use the existing motion system/dependency.

Do not add another animation framework.

---

# 14. RESPONSIVE DESIGN

### Desktop
Use a balanced input + result composition.

### Tablet
Preserve hierarchy and whitespace.

### Mobile
Use one focused sequence:

Pincode
→
Monthly bill
→
Calculate
→
Savings result
→
Bill comparison
→
CTA
→
Full breakdown

Do NOT simply stack desktop cards.

Do NOT create horizontal overflow.

---

# 15. EXISTING CODE

Before editing:

1. Read `/solar-website-masterplan.md`
2. Inspect the existing calculator component(s)
3. Inspect `calculator.ts`
4. Understand the existing calculation data flow
5. Identify reusable components
6. Make a concise implementation plan

Then implement ONLY the calculator redesign.

Do NOT:

- change calculator math
- rewrite App.tsx unnecessarily
- install a new UI framework
- modify Hero
- modify Header
- modify rooftop storytelling
- modify Why Now
- modify unrelated homepage sections

---

# 16. FINAL QUALITY BAR

The calculator should feel like:

**"Let me quickly see what solar could do for my home."**

NOT:

**"Let me understand this financial dashboard."**

The result should be:

- simple
- visual
- fast
- reassuring
- premium
- memorable
- easy for an Indian homeowner

Apply the Pareto principle aggressively.

The user only needs the information necessary to make the next decision.

Everything else should be secondary.

---

# 17. VERIFICATION

Verify:

- 1440px
- 1024px
- 768px
- 390px

Test:

- pincode
- serviceability
- bill slider
- quick presets
- calculation
- result reveal
- bill comparison
- full breakdown
- CTA
- keyboard interaction
- reduced motion
- console
- TypeScript
- production build

Finally confirm:

- no screenshot/image of the reference appears inside the calculator
- no duplicated UI
- no dark dashboard
- no excessive card nesting
- no information overload
- no invented values
- no broken mobile layout

STOP after verification.