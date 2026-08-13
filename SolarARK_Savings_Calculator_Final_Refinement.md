# SolarARK Savings Calculator — Final UI/UX Refinement Brief

## Objective

Perform **one focused UX/UI refinement pass** on the existing SolarARK Savings Calculator.

The calculator is already functionally implemented.

**Do NOT rebuild the calculator.**
**Do NOT change the calculation engine, formulas, inputs, or business logic.**

The goal is to make the existing calculator feel **premium, compact, balanced, human-designed, and easy to understand at first glance**, while avoiding the typical AI-generated / SaaS dashboard / WordPress card-grid appearance.

Apply the **Pareto principle**: emphasize the small set of information that drives most user decisions.

---

## 1. Fix the Space Balance

The left input area currently has excessive unused vertical space below the bill selector.

**Do NOT fill this space with additional content.**

Instead:

- Reduce unnecessary vertical height of the overall calculator shell.
- Vertically balance the left and right sides.
- Align the main input content more intentionally with the primary savings result.
- Keep whitespace intentional, but eliminate whitespace that feels accidental.
- Bring the left-side content into stronger visual alignment with the primary result.

The calculator should feel **compact and deliberately composed**, not stretched.

---

## 2. Fix the Background Image

The current rooftop image is too faint to function as meaningful visual storytelling, but it must also remain secondary to the calculator.

Treat it as a **subtle atmospheric layer**:

- Keep the rooftop/solar image primarily toward the upper-right background.
- Preserve recognizable solar panels and warm natural light.
- Dissolve the image smoothly into the page background.
- Avoid any visible rectangular image boundary.
- Do not put the image inside a card.
- Do not increase the white overlay so much that the image becomes meaningless.
- Do not allow the image to compete with the savings result.

The desired feeling is:

> “The SolarARK environment surrounds the calculator.”

NOT:

> “A calculator has been placed on top of a stock photo.”

---

## 3. Establish a Strong Result Hierarchy

The most important result is:

**₹X,XXX / month**

This must remain the strongest visual element.

The user should immediately understand:

**CURRENT BILL → WITH SOLAR → YOU SAVE**

Everything else is secondary.

---

## 4. Reduce Secondary Metrics

The current implementation shows too many secondary metrics simultaneously:

- Recommended system
- Effective investment
- Government subsidy
- Payback
- CO₂ offset

Do not delete the underlying information.

Instead, initially show only:

- Recommended system
- Effective investment

Move the remaining information behind:

**“See Full Savings Breakdown →”**

The expanded area can contain:

- Government subsidy
- Payback
- CO₂ offset
- Lifetime savings
- Other secondary calculations

Use **progressive disclosure**.

Do not replace the hidden information with another large card grid.

---

## 5. Reduce Nested Containers

The current hierarchy is becoming:

Outer container  
→ Result card  
→ Transformation card  
→ Metric cards

This creates a dashboard/SaaS feeling.

Flatten the hierarchy.

Prefer:

**One clean calculator surface**
+
**One primary result area**
+
**One bill transformation area**
+
**Minimal secondary details**

Use whitespace, typography, dividers, and alignment instead of excessive containers.

Avoid making every piece of information look like a separate card.

---

## 6. Improve the Top Section Proportions

The heading area is currently too tall.

Keep the heading visually strong but concise.

Reduce unnecessary vertical spacing between:

- Eyebrow / trust indicator
- Headline
- Supporting text
- Calculator

The calculator should enter the viewport sooner.

The user came here to **calculate**, not read a long introduction.

Do not add additional copy.

---

## 7. Make the Input Side Feel Complete

The input flow should visually read as one clear sequence:

**YOUR DETAILS**
↓
**PINCODE**
↓
**MONTHLY BILL**
↓
**QUICK SELECT**

Do not add another information block merely to fill space.

Improve the feeling of completeness through:

- Stronger vertical rhythm
- Better alignment
- Comfortable interaction areas
- Clear section hierarchy
- Subtle visual progression

The left side should feel intentionally designed rather than empty.

---

## 8. Primary CTA

Keep the existing primary CTA:

**“Get My Free Savings Estimate →”**

The CTA should appear immediately after the primary result and bill comparison.

Desired order:

**RESULT**
→
**CTA**

before:

**ADVANCED DETAILS**

Do not bury the CTA below a long list of secondary metrics.

---

## 9. Final Information Hierarchy

Use this exact priority:

### Priority 1
**Monthly savings**

### Priority 2
**Current bill → Solar bill**

### Priority 3
**Get My Free Savings Estimate**

### Priority 4
**Recommended system + Effective investment**

### Priority 5
**Advanced savings breakdown**

Everything else should visually recede.

If an element does not help the user understand one of these five things, reduce its visual prominence or move it into the advanced breakdown.

---

## 10. Trust / Microcopy

Avoid generic trust UI such as:

**“100% Secure • Instant Results • No Spam”**

unless it is explicitly required and verified.

If it is not necessary, remove it or reduce it significantly.

Do not replace it with additional badges.

The interface should feel trustworthy through:

- clarity
- spacing
- typography
- professional interaction design
- restrained visual language

rather than a collection of trust badges.

---

## 11. Color & Visual Language

Preserve the established SolarARK visual system:

- Warm white
- Very light blue
- SolarARK blue
- Restrained green
- Subtle solar yellow

Avoid:

- Dark dashboards
- Heavy gradients
- Glassmorphism
- Neon effects
- Excessive shadows
- Excessive rounded cards
- Decorative UI without purpose

The visual language should feel **clean, optimistic, premium, and approachable**.

---

## 12. Motion

If motion is already present, keep it restrained.

Appropriate:

- Savings number count-up
- Smooth bill transformation
- Subtle result reveal

Do not animate every metric or card.

Respect:

`prefers-reduced-motion`

---

## 13. Mobile Layout

At approximately 390px, the information order should become:

**Pincode**
↓
**Monthly bill**
↓
**Savings result**
↓
**Bill transformation**
↓
**Primary CTA**
↓
**Recommended system / Effective investment**
↓
**Full savings breakdown**

Do not force desktop spacing or the desktop two-column composition onto mobile.

Avoid:

- Horizontal overflow
- Tiny text
- Excessive nested cards
- Huge vertical gaps

---

## 14. Claim Safety

Do not invent, hardcode, or alter calculated values.

Continue using the existing calculation engine.

Any values visible in reference screenshots are **visual references only**.

Do not hardcode example values such as:

- ₹7,820
- ₹78,000
- 8.5 kW
- 4.3 years
- 10 tonnes

unless they are actually produced by the existing calculation logic for the selected inputs.

---

## 15. Technical Scope

Modify ONLY:

- Calculator layout
- Calculator spacing
- Result hierarchy
- Calculator background-image treatment
- Directly related calculator styles
- Progressive disclosure presentation of secondary metrics

Do NOT modify:

- Calculator formulas
- Calculation logic
- Existing input behavior
- Hero
- Header/navigation
- Rooftop storytelling section
- Why Now section
- Other homepage sections

Reuse existing components and dependencies.

**Do not install anything new.**

---

## 16. Responsive QA

After implementation, verify at:

- 1440px desktop
- 1024px laptop/tablet
- 768px tablet
- 390px mobile

Check for:

- No excessive empty space
- No excessive nested cards
- No distracting background image
- No information overload
- No horizontal overflow
- No broken alignment
- No console errors
- TypeScript passes
- Production build passes

---

## Final Acceptance Standard

At 1440px, the calculator should feel:

**Compact**
**Balanced**
**Visual**
**Clear**
**Premium**
**Human-designed**

At first glance, the user should instantly understand:

> “I enter my bill here.”

> “Here is what I could save.”

> “Here is what I do next.”

If an element does not improve one of those three things, reduce it, simplify it, or move it into progressive disclosure.

### STOP CONDITION

After completing this refinement:

**STOP.**

Do not redesign unrelated sections.
Do not add new features.
Do not add decorative elements simply to make the page look “more impressive.”

The objective is a polished, conversion-focused calculator — not a more complicated one.
