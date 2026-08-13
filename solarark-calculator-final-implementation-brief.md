# SolarARK Savings Calculator — Final Visual Implementation Brief

## Purpose

Redesign **only** the SolarARK Savings Calculator section.

The attached visual reference is the **primary visual benchmark** for:
- composition
- spacing
- hierarchy
- proportions
- typography
- result emphasis
- input/result relationship
- CTA placement
- overall visual polish

The reference is **not** a literal template to copy.

Build the real interface with HTML/CSS/React and the existing SolarARK calculation engine.

---

## 1. Preserve the Calculation Engine

Do **not** change:
- `calculator.ts`
- calculation formulas
- serviceability logic
- subsidy logic
- system-size calculation
- savings calculation
- payback calculation
- existing result/data flow

This is a visual and UX redesign.

All displayed values must come from the existing calculation engine.

Never hardcode reference-image numbers such as ₹7,820, ₹4,06,500, 8.5 kW, or ₹78,000 unless they are the actual output for the selected user inputs.

---

## 2. Overall User Journey

The calculator should communicate:

**Enter my bill → See my savings → Get my estimate**

The user should understand the interface almost immediately.

Do not make the calculator feel like financial software.

---

## 3. Intro Area

Use a concise, homeowner-focused heading.

Preferred direction:

**Calculate Your Solar Savings & Govt. Subsidy  
in Real Time**

Keep the supporting copy short.

Use a compact calculator eyebrow if helpful.

Do not let the introduction consume excessive vertical space.

Avoid long explanatory paragraphs.

---

## 4. Main Layout

Use one coherent, light calculator experience.

Desktop:
- Left side: user inputs
- Right side: personalized savings result

Approximate balance:
- 38–40% input area
- 60–62% result area

Do not create a dark dashboard.

Do not use large nested panels.

Use subtle borders, restrained radius and very soft elevation only where needed.

---

## 5. Input Side — Your Details

Hierarchy:

**Step indicator → Your Details**

### Pincode

Label:
`Enter your 6-digit pincode`

Use:
- clean input
- clear serviceability state
- friendly validation
- no technical error language

### Monthly Electricity Bill

Label:
`Average monthly electricity bill`

Show the current ₹ value prominently.

Use:
- smooth slider
- obvious thumb position
- 4–5 quick-select values
- clear active state

The slider should feel like a premium consumer control.

Avoid form-heavy styling.

---

## 6. Result Side — Your Solar Savings Estimate

Hierarchy:

**Step indicator → Your Solar Savings Estimate**

Primary result:

`YOU SAVE`

Then:

**₹X,XXX / month**

This must be the most visually prominent numerical element in the entire calculator.

Optional small supporting line:
`Estimated monthly savings`

A small residential solar illustration may appear if it supports the result, but it must remain secondary.

Never use a screenshot of another webpage.

---

## 7. Bill Transformation

Immediately communicate the most useful outcome:

**CURRENT MONTHLY BILL**

`₹X,XXX`

→

**WITH SOLAR**

`~₹XXX`

→

**YOU SAVE**

`₹X,XXX / month`

Use a simple, intuitive visual comparison.

Preferred:
- restrained red/pink for current cost
- green for solar
- clean comparison bars or transformation
- very little explanatory text

Do not turn this into a financial chart/dashboard.

---

## 8. Secondary Results

Show only the two most decision-relevant values initially:
- Recommended Solar System
- Effective Investment

Everything else should be secondary.

Use:
`See Full Savings Breakdown →`

to reveal:
- PM Surya Ghar subsidy
- payback period
- lifetime savings
- generation
- CO₂ impact
- financing information where applicable

Do not show six or eight equally weighted metrics at once.

---

## 9. Primary CTA

Use:

**Get My Free Savings Estimate →**

The CTA should feel like the natural next step after the user sees the personalized result.

Do not introduce another competing primary CTA.

Any reassurance beneath it should be concise and verified.

---

## 10. Visual Language

The calculator must visually belong to the SolarARK system established by the rest of the site.

Use:
- warm white
- very light blue
- SolarARK blue
- restrained solar yellow
- subtle green for verified savings

Use:
- generous whitespace
- strong typography hierarchy
- minimal borders
- subtle depth
- clean alignment

Avoid:
- dark navy dashboards
- cards inside cards
- excessive rounded rectangles
- glassmorphism
- excessive pills
- neon/glowing UI
- dense tables
- dashboard chrome
- decorative effects with no functional purpose

Premium should come from:
**hierarchy + spacing + typography + interaction quality + restraint**

---

## 11. Reference Image Rule

The supplied visual reference is a **visual benchmark only**.

Never:
- place the screenshot inside the calculator
- use the screenshot as a background
- crop a webpage screenshot into the result panel
- bake screenshot UI/text into an asset

The calculator must be built from real components.

If a supporting image is used, use the supplied standalone image asset, not the reference screenshot.

---

## 12. Motion

Use restrained interaction.

On calculation:
- smoothly reveal the results
- animate only the primary savings number
- smoothly update the bill comparison
- lightly emphasize the main result

Do not animate every metric.

No flashy transitions.

Respect `prefers-reduced-motion`.

Use the existing motion system/dependency.

Do not add another animation framework.

---

## 13. Progressive Disclosure

Do not show all financial information immediately.

Initial result should answer:
1. How much could I save?
2. What solar size might I need?
3. What is the effective investment?

Everything else belongs in:
`See Full Savings Breakdown →`

This follows the Pareto principle and reduces cognitive load.

---

## 14. Conversion Psychology

The intended sequence is:

**Curiosity → Low-friction input → Personalized result → Satisfaction → Next action**

Do not ask for unnecessary lead information before showing meaningful value.

Do not use fake urgency.

Do not use fear-heavy language.

The calculator should feel like a helpful discovery tool.

---

## 15. Responsive Behavior

### Desktop
Maintain the balanced input/result composition.

### Tablet
Preserve hierarchy and comfortable spacing.

### Mobile
Use a focused vertical sequence:

Pincode  
↓  
Monthly bill  
↓  
Calculate  
↓  
Savings result  
↓  
Bill transformation  
↓  
Secondary result  
↓  
CTA  
↓  
Full breakdown

Do not simply stack desktop cards.

No horizontal overflow.

---

## 16. Claim Safety

Use the existing calculation engine as the source of truth.

Do not invent or hardcode:
- savings
- subsidy
- payback
- tariff assumptions
- lifetime savings
- system size
- environmental impact
- customer data

Keep assumptions and disclaimers accessible but visually quiet.

---

## 17. Navigation Safety

There must be **ONE** primary website navbar.

Do not introduce new navigation items during this calculator task.

Do not duplicate the navbar.

Use the currently approved SolarARK navigation structure.

---

## 18. Implementation Process

Before editing:
1. Read `/solar-website-masterplan.md`.
2. Inspect the existing calculator component(s).
3. Inspect `calculator.ts`.
4. Understand the existing calculation data flow.
5. Inspect the current navbar rendering.
6. Identify reusable components.
7. Make a concise implementation plan.

Then implement **only** the calculator redesign and directly related styling/layout corrections.

Do not modify:
- Hero
- Header design beyond removing accidental duplication
- rooftop storytelling section
- Why Now section
- other homepage sections
- calculator math
- application architecture

---

## 19. Verification

Verify at:
- 1440px
- 1024px
- 768px
- 390px

Test:
- pincode
- serviceability
- monthly bill slider
- quick presets
- calculation
- result reveal
- bill transformation
- full breakdown
- CTA
- keyboard accessibility
- reduced motion
- console errors
- TypeScript
- production build

Before finishing, confirm:
- no reference screenshot appears inside the UI
- no duplicate navbar
- no dark dashboard
- no excessive card nesting
- no information overload
- no invented values
- no broken mobile layout

---

## 20. Final Quality Bar

The user should feel:

> “Let me enter my bill and see what solar could save me.”

Not:

> “I need to understand this calculator first.”

The final calculator should feel:

**simple, visual, fast, personal, trustworthy, premium and memorable.**

Make it sophisticated through **simplicity, hierarchy, interaction and restraint**.

Stop after implementation and verification.
