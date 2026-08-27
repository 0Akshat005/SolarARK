# SolarARK Homepage — Pre-Calculator Service & Value Bridge

## Objective

Analyze the existing SolarARK website and repository before making any changes, then implement **one new homepage section positioned between the existing Hero/proof-rail area and the existing Savings Calculator**.

The purpose of this section is NOT to create another generic “Services” section.

Its purpose is to answer the user's most important questions **before asking them to interact with the calculator**:

- What exactly does SolarARK take care of?
- Is the solution designed specifically for my home?
- Is system sizing based on my actual electricity usage?
- Who handles subsidy / approvals / net metering?
- Will SolarARK still support me after installation?

The section should therefore function as a **trust + clarity bridge** between:

**Hero / Proof → Understanding → Calculator**

The user should reach the calculator thinking:

> “I understand what SolarARK actually handles, and now I want to see what this means for my house.”

Do not redesign the existing calculator. Do not redesign the Hero. Do not redesign the existing proof rail.

---

# 1. FIRST: AUDIT THE EXISTING WEBSITE BEFORE IMPLEMENTING

Before writing code, inspect the existing repository and current rendered homepage.

At minimum inspect:

- `src/App.tsx`
- `src/components/Hero.tsx`
- `src/components/SavingsCalculator.tsx`
- `src/components/HowItWorks.tsx`
- `src/components/ServicesPage.tsx`
- `src/index.css`
- existing shared components / reusable UI patterns
- existing animation conventions
- existing color / typography tokens
- responsive breakpoints
- existing CTA behavior
- existing spacing and container widths

The current homepage order is intentionally:

1. Hero
2. Hero proof / credibility rail
3. Savings Calculator
4. How It Works
5. deeper content
6. consultation

The new section must be inserted **between #2 and #3**.

In the current codebase, `SavingsCalculator` is rendered immediately after `Hero` in `src/App.tsx`. Preserve all existing calculator logic and state behavior. Only introduce the new section between them.

---

# 2. DO NOT MAKE IT LOOK LIKE A SECOND SERVICES PAGE

This is the most important design constraint.

SolarARK already has a dedicated `/services` page.

Therefore the homepage section must NOT become:

- Residential Solar
- Commercial Solar
- Industrial Solar
- Maintenance
- generic service cards
- stock-image service cards
- a conventional 3/4-column marketing grid
- repeated “Our Services” copy

That would create information duplication and make the homepage feel longer and less intentional.

Instead, present **the four crucial homeowner concerns SolarARK solves**.

The section is about the **customer experience**, not the company's service catalogue.

---

# 3. CORE UX CONCEPT

Use this conceptual sequence:

## ENGINEER
### Designed around your roof
Site assessment, roof conditions, orientation, shade and system design.

## SIZE
### Sized around your electricity use
The recommendation is connected to the user's actual bill/usage rather than a generic package.

## APPROVALS
### We handle the paperwork
PM Surya Ghar, DISCOM, subsidy and net-metering support.

## SUPPORT
### We stay after installation
Monitoring, commissioning support and long-term after-sales assistance.

These four concepts are the Pareto-focused content.

Do not add unnecessary fifth/sixth/seventh benefits.

The section should communicate **the 20% of information that resolves roughly 80% of the user's pre-calculator uncertainty**.

---

# 4. CONTENT DIRECTION

Use this primary headline:

**SolarARK handles the hard parts.**

Supporting copy:

**From checking your rooftop to sizing the right system, navigating approvals and supporting you after installation, we take care of the solar journey end to end.**

Do not make the wording corporate, exaggerated or AI-sounding.

Avoid phrases such as:

- “Revolutionizing the future”
- “Seamless solar ecosystem”
- “Comprehensive renewable energy solutions”
- “Powering a sustainable tomorrow”
- “Unparalleled excellence”
- “Best-in-class solutions”

The copy should sound like a credible solar EPC company speaking clearly to a homeowner.

---

# 5. FOUR INFORMATION PILLARS

Implement exactly four primary pillars.

### 01 — ENGINEERED FOR YOUR ROOF

Title:

**Engineered for your roof**

Description:

**Site assessment, roof conditions and system design are considered before your system is sized.**

Supporting micro-label:

`SITE + DESIGN`

Use an appropriate Lucide icon such as `Building2`, `Ruler`, `PenTool`, or another existing icon that visually matches the repository.

---

### 02 — SIZED AROUND YOUR BILL

Title:

**Sized around your bill**

Description:

**Your electricity use guides the recommendation — not a one-size-fits-all package.**

Supporting micro-label:

`RIGHT SYSTEM`

Use an appropriate Lucide icon such as `BarChart3`, `Gauge`, `TrendingDown`, `Calculator`, or similar.

---

### 03 — PAPERWORK, TAKEN CARE OF

Title:

**Paperwork, taken care of**

Description:

**Support with PM Surya Ghar, DISCOM approvals and net-metering through the process.**

Supporting micro-label:

`SUBSIDY + APPROVALS`

Use an icon such as `FileCheck`, `BadgeCheck`, `ClipboardCheck`, or similar.

---

### 04 — SUPPORTED AFTER INSTALLATION

Title:

**Supported after installation**

Description:

**From monitoring to post-installation assistance, SolarARK stays involved beyond commissioning.**

Supporting micro-label:

`LONG-TERM SUPPORT`

Use an icon such as `Headphones`, `Activity`, `ShieldCheck`, or similar.

---

# 6. VISUAL DESIGN — MUST FEEL NATIVE TO SOLARARK

The new section must feel like it was designed as part of the current SolarARK system, not pasted in from another website.

The existing design language uses:

- deep solar navy
- warm off-white / cream backgrounds
- maroon primary accent
- amber/gold solar accent
- Space Grotesk for headings
- Instrument Sans for UI/body
- rounded corners
- restrained borders
- soft shadows
- subtle glass/translucency where appropriate
- compact high-information layouts

Reuse these existing design tokens and patterns.

Do NOT introduce a new font.

Do NOT introduce a new color palette.

Do NOT introduce a new visual style.

Do NOT introduce excessive gradients.

Do NOT introduce excessive glassmorphism.

Do NOT introduce giant rounded cards floating separately from one another.

---

# 7. SECTION BACKGROUND + RELATIONSHIP TO PREVIOUS AND NEXT SECTIONS

This section must visually transition between two very different environments:

### Above:
Dark SolarARK hero / proof ecosystem.

### Below:
Warm off-white calculator ecosystem.

Therefore the new section should act as a **soft visual bridge**.

Recommended treatment:

- warm off-white base similar to the calculator section
- subtle tonal gradient from the existing dark section into the warm surface
- optionally use a very restrained top edge shadow/gradient rather than a hard color cut
- no large background image
- no distracting hero photography
- no large decorative illustration

The calculator already contains its own atmospheric rooftop imagery and warm solar glow. Do not compete with that.

The new section should be mostly **typography + information architecture**, allowing the calculator to remain the visual conversion centerpiece.

---

# 8. LAYOUT DIRECTION

Use a **single connected editorial panel**, not four unrelated marketing cards.

Desktop structure:

```text
                 SMALL EYEBROW

          SolarARK handles the hard parts.

      Supporting one-line explanation.


 ┌─────────────────────────────────────────────────────┐
 │                                                     │
 │  01          02          03          04             │
 │  ENGINEER    SIZE        APPROVALS   SUPPORT        │
 │                                                     │
 │  concise     concise     concise     concise        │
 │  explanation explanation explanation explanation    │
 │                                                     │
 └─────────────────────────────────────────────────────┘

            See what solar could save you  →
```

Think of it as a **service/value rail**.

The four items should feel connected.

Use a subtle horizontal progression/connector such as:

`01 ───── 02 ───── 03 ───── 04`

But keep it extremely understated.

Do NOT make this a loud stepper or timeline.

The existing `HowItWorks` section already owns the detailed process narrative, so this section should remain a compact overview rather than another process section.

---

# 9. VISUAL HIERARCHY

The hierarchy must be immediately understandable in under 3 seconds:

1. Section statement
2. Four things SolarARK handles
3. Small explanation under each
4. One transition CTA
5. Calculator begins

Use a strong but restrained heading.

The headline should not occupy half the viewport.

Target:

- eyebrow: approximately 10–12px
- heading: approximately 32–44px desktop depending on existing scale
- supporting copy: approximately 14–16px
- pillar title: approximately 15–18px
- body: approximately 12–14px
- micro-label: approximately 9–11px

Respect the existing CSS typography tokens instead of hardcoding arbitrary font sizes unnecessarily.

---

# 10. DO NOT OVER-DESIGN

The current SolarARK homepage already has:

- hero video
- proof rail
- live footage control
- calculator
- dynamic savings visualization
- installation process
- deeper content

Therefore this section must NOT compete with those elements.

Use the Pareto principle aggressively.

Avoid:

- huge illustrations
- multiple photographs
- complicated interactive animations
- 3D cards
- parallax
- excessive floating shapes
- multiple CTAs
- testimonials inside this section
- statistics that repeat the proof rail
- giant decorative solar graphics
- duplicated calculator information

The section should feel **expensive because it is controlled**, not because it contains lots of effects.

---

# 11. CTA STRATEGY

There should be only ONE primary action for this section.

Use a compact transition CTA such as:

**See what solar could save you →**

The CTA should scroll to:

`#calculator`

Use the existing calculator scroll behavior already present in `App.tsx` where possible.

Do not create a new navigation mechanism.

Do not create a second lead form.

Do not create “Learn More” links on every pillar.

Do not add four separate CTAs.

The psychological progression should be:

**I understand → now calculate**

---

# 12. ANIMATION

Animation must be subtle and consistent with the existing SolarARK motion language.

Use scroll-triggered entrance animation similar in spirit to `SavingsCalculator`.

Suggested:

- section heading: fade + small upward movement
- four pillars: staggered fade + 8–14px upward movement
- connector: subtle delayed reveal
- CTA: slight fade

Animation duration around `500–750ms`.

Use easing already present in the project where possible.

Do not use:

- dramatic spring animations
- large transforms
- continuous floating animations
- excessive blur animation
- animated gradients everywhere
- distracting hover tilts

The user should notice the content, not the animation.

Respect `prefers-reduced-motion`.

---

# 13. HOVER BEHAVIOR

Desktop hover should provide a small amount of feedback.

For a pillar:

- slightly increase surface contrast
- icon subtly shifts/brightens
- title can move 1–2px or receive a mild accent treatment
- optionally very small elevation increase

Do NOT:

- tilt the card
- scale it dramatically
- change its entire color
- add a huge glow
- make all surrounding cards move

The interaction should remain premium and calm.

---

# 14. ICON SYSTEM

Use the existing `lucide-react` icon system.

Do not add a new icon library.

Icons should be approximately 18–22px.

Use the existing SolarARK amber/gold accent for icon emphasis.

Icon containers should match the existing visual language:

- subtle rounded square
- restrained border
- dark/neutral surface depending on section treatment
- amber/gold icon

Do not use emoji.

Do not use custom cartoon illustrations.

---

# 15. RESPONSIVE DESIGN

This section must be designed mobile-first.

### Desktop

Four pillars can sit in one connected horizontal rail.

### Tablet

Use either:

- 2 × 2 layout, or
- compact horizontally connected structure

depending on available width.

### Mobile

Do NOT simply compress four desktop cards.

Use a single-column vertical stack with:

`01`
`ENGINEERED FOR YOUR ROOF`
description

then:

`02`
`SIZED AROUND YOUR BILL`

etc.

Keep the progression connector subtle or remove the horizontal line on mobile.

The mobile version must feel intentional, not like a broken desktop grid.

Maintain comfortable touch targets.

Avoid overly dense text.

---

# 16. SPACING

Use the existing page container system.

Do not introduce an arbitrary max-width that conflicts with the current homepage.

The section should have enough vertical breathing room to feel important, but not enough to push the calculator unnecessarily far below the fold.

Target approximately:

- 72–100px vertical section padding desktop
- 52–72px mobile
- compact spacing between heading and pillar rail
- 16–28px internal pillar spacing depending on breakpoint

The section should feel **substantial but compact**.

Think “one intelligent editorial pause,” not “another major homepage chapter.”

---

# 17. SECTION LENGTH

This is critical.

The user specifically needs clarity before the calculator.

The section should ideally fit approximately within **0.6–0.9 desktop viewport heights**, not become a giant scrolling section.

On a standard desktop screen, the user should be able to understand most of it without excessive scrolling.

The calculator should still arrive quickly.

---

# 18. CONTENT ACCURACY

Only use claims that are already supported by SolarARK's existing website/repository.

Do not invent:

- customer counts
- installation numbers
- warranty promises
- financing promises
- subsidy values
- geographic coverage
- certifications
- engineering claims
- service guarantees

The repository currently contains existing SolarARK claims and language around PM Surya Ghar, EPC, Tier-1 components, system design, commissioning, monitoring and after-sales support. Reuse only verified existing material.

Do not make the new section sound more impressive by adding unsupported claims.

---

# 19. IMPORTANT RELATIONSHIP WITH EXISTING PROOF RAIL

The Hero currently already communicates:

- Real Projects
- Quality Components
- Complete EPC
- After-Sales Support

Therefore do NOT simply repeat those exact labels.

The new section must go one level deeper.

Proof rail answers:

> “Why should I trust SolarARK?”

New section answers:

> “What exactly will SolarARK do for me?”

Calculator answers:

> “What could this look like for my house?”

That distinction must remain obvious.

---

# 20. IMPORTANT RELATIONSHIP WITH HOW IT WORKS

The existing How It Works section already communicates the detailed installation journey.

Therefore the new section must NOT become another:

`Survey → Design → Installation → Monitoring`

timeline.

The difference should be:

### New section:
**What SolarARK handles for the homeowner**

### Existing How It Works:
**How the installation journey progresses**

Do not duplicate its visual or content structure.

---

# 21. TECHNICAL IMPLEMENTATION

Create a dedicated component, preferably:

`src/components/ServiceBridge.tsx`

or another clearly named component such as:

`HomeownerValueBridge.tsx`

Keep the component self-contained and reusable.

Then update `src/App.tsx`:

Current structure:

```tsx
<Hero ... />

<div id="calculator">
  <SavingsCalculator ... />
</div>
```

Change conceptually to:

```tsx
<Hero ... />

<ServiceBridge
  onCalculatorClick={scrollToCalculator}
/>

<div id="calculator">
  <SavingsCalculator ... />
</div>
```

Preserve all existing calculator props/state.

Do not alter calculator business logic.

Do not alter the calculator's calculations.

Do not alter Hero video logic.

Do not alter existing navigation behavior.

Do not alter unrelated pages.

---

# 22. ACCESSIBILITY

Use semantic markup.

The section should have:

- one logical heading
- semantic list/grouping for the four pillars
- accessible interactive CTA
- visible focus state
- sufficient contrast
- keyboard accessibility

Do not make large non-interactive areas clickable unless there is an actual action.

If a pillar has no navigation/action, keep it informational.

Respect reduced motion.

---

# 23. PERFORMANCE

Keep this component lightweight.

Do not add:

- new large image assets
- new video
- heavy animation libraries
- canvas effects
- unnecessary JavaScript

Use existing dependencies and CSS.

Prefer CSS transforms/opacity for animation.

Do not introduce layout-shifting effects.

---

# 24. DESIGN QUALITY BAR

The final result should feel like:

**premium Indian solar EPC + editorial product design + conversion-focused UX**

It should NOT feel like:

- generic SaaS
- template solar website
- fintech dashboard
- AI-generated landing page
- generic card grid
- overly futuristic renewable-energy website

The visual personality should remain:

**confident, warm, engineered, premium, trustworthy, restrained.**

The user should feel that SolarARK is competent enough to handle the difficult parts without the website having to scream about it.

---

# 25. FINAL PAGE FLOW TO ACHIEVE

The first part of the homepage should read psychologically as:

### HERO
“Here is SolarARK.”

↓

### PROOF RAIL
“Here is why I can trust them.”

↓

### NEW SERVICE / VALUE BRIDGE
“Here is exactly what they will handle for me.”

↓

### CALCULATOR
“Now I can understand what solar could mean for my own home.”

↓

### HOW IT WORKS
“Now I know how the actual installation journey works.”

This should be the guiding UX architecture for the implementation.

---

# 26. BEFORE FINISHING — VISUAL QA

After implementation:

1. Run the project.
2. Inspect the actual rendered homepage at desktop width.
3. Inspect tablet width.
4. Inspect mobile width.
5. Compare visually against the existing Hero, proof rail and calculator.
6. Check that the section does not look like an isolated component.
7. Check that spacing above and below feels natural.
8. Check that the section does not visually overpower the calculator.
9. Check that typography matches the existing SolarARK typography system.
10. Check that colors match existing design tokens.
11. Check that animations are subtle.
12. Check that there is no duplicated content from ServicesPage or HowItWorks.
13. Check that the CTA scrolls correctly to `#calculator`.
14. Check for layout shifts and console errors.
15. Run the production build.

If the first implementation looks visually “too card-heavy,” simplify it rather than adding more decoration.

If it looks visually “too empty,” improve hierarchy, spacing and typography rather than adding random graphics.

---

# 27. NON-NEGOTIABLE CONSTRAINTS

Do not:

- redesign the navbar
- redesign the Hero
- redesign the proof rail
- redesign the Savings Calculator
- change calculator business logic
- add a conventional Services grid
- duplicate the Services page
- duplicate How It Works
- add unnecessary statistics
- invent claims
- add stock imagery
- add new fonts
- add new design systems
- add multiple CTAs
- add excessive animations
- add excessive gradients
- add visual clutter

Do:

- preserve the existing SolarARK visual language
- introduce one compact, high-value information bridge
- use the four homeowner concerns as the core information architecture
- use Pareto principle aggressively
- make the user mentally ready for the calculator
- maintain visual continuity with both the dark Hero/proof system and warm calculator system
- make the result look intentionally designed rather than “inserted between sections”

---

# SUCCESS CRITERIA

The implementation is successful only if a first-time visitor can quickly understand:

**1. SolarARK designs the system around my property.**  
**2. The recommendation is based on my electricity use.**  
**3. SolarARK helps with approvals/subsidy paperwork.**  
**4. SolarARK supports me after installation.**  
**5. Therefore, using the calculator is the logical next step.**

The section should make the calculator feel like the **next natural question**, not another unrelated component.