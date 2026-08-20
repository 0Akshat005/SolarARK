Act as a **senior UI/UX director, design-systems architect and frontend typography specialist**.

Your task is **NOT to immediately modify the website**.

First, deeply inspect the existing SolarARK website/codebase and produce a **research-backed implementation plan for Antigravity** that standardizes typography and the subtle headline-accent treatment across the entire website without damaging the existing visual identity.

The final implementation must feel like a **premium Indian renewable-energy/infrastructure brand**, not a generic SaaS dashboard, template, WordPress site or over-designed startup landing page.

---

# CONTEXT: CURRENT TYPOGRAPHY

The current project has these Google Fonts:

### Primary / global

**Instrument Sans**

```css
--font-main: 'Instrument Sans', sans-serif;
```

Current weights:
400–700

### Headings / categories / cards

**Space Grotesk**
Current weights:
500, 600

### Content / fallback

**Inter**
Current weights:
400, 500, 700

### Imported special-purpose fonts

**Orbitron**
700, 800, 900

**Cairo**
400, 600, 700, 800, 900

Do NOT assume all five fonts should continue to be used.

---

# PHASE 1 — AUDIT THE EXISTING SITE

Before recommending changes, inspect the entire codebase and determine:

1. Where each font is actually being used.
2. Which components/pages use `--font-main`.
3. Which headings use Space Grotesk.
4. Where Inter is being used intentionally versus accidentally as a fallback.
5. Whether Orbitron is genuinely required anywhere.
6. Whether Cairo is genuinely required anywhere.
7. Whether there are hardcoded font-family declarations bypassing the design system.
8. Whether font weights are being loaded but never used.
9. Whether multiple competing typography patterns exist across pages.
10. Whether typography changes between:

* Homepage
* About
* Services
* Earn With Us
* Projects
* Careers
* Gallery
* Contact
* Calculators/forms
* Cards
* Testimonials
* Navigation
* Buttons
* Metrics
* Badges
* Footer
* Any dynamic/application-like sections

Create a **typography inventory** before making recommendations.

Do not redesign components yet.

---

# PHASE 2 — RESEARCH CURRENT BEST PRACTICES

Research current professional web typography/design-system practices from authoritative sources and high-quality design-system references.

Use the research to evaluate:

* Font pairing
* Typography hierarchy
* Semantic type roles
* Responsive typography
* Fluid `clamp()` sizing
* Heading line-height
* Body line-height
* Letter spacing
* Paragraph measure / maximum line length
* Font weight usage
* Button typography
* Navigation typography
* Label/caption sizing
* Numerical/data typography
* Form typography
* Accessibility
* Contrast
* Readability
* Visual hierarchy
* Brand personality
* Cognitive load
* Scanning behavior
* Mobile typography
* Performance implications of loading unnecessary fonts/weights

Pay particular attention to the fact that typography should be treated as a **system**, not a collection of individually styled headings.

Use authoritative references where possible, especially standards/design-system documentation such as WCAG, USWDS, Material Design and comparable professional systems.

Current guidance commonly supports:

* body text around 16px or higher for normal reading,
* approximately 1.4–1.6 line-height for body content,
* tighter heading line-height around 1.0–1.3,
* controlled text measure rather than excessively wide paragraphs,
* and semantic type roles rather than arbitrary pixel-based styles.

Verify these rather than blindly treating them as absolute rules.

---

# PHASE 3 — DETERMINE THE BEST SOLARARK TYPE SYSTEM

After auditing and researching, decide whether the strongest system is:

### Option A

Instrument Sans → global/body/UI
Space Grotesk → display/headings

### Option B

Instrument Sans → global/body/UI
Inter → content/body
Space Grotesk → display only

### Option C

A different combination based on evidence

Do NOT preserve a font just because it already exists.

However, do NOT change fonts merely for novelty.

The decision must consider:

* SolarARK’s current visual identity
* premium renewable-energy positioning
* trust
* Indian consumer psychology
* readability
* hierarchy
* technical credibility
* warmth
* modernity
* perceived quality
* implementation complexity
* performance
* consistency across pages

### My initial hypothesis — verify it

I suspect the strongest direction may be:

**Space Grotesk = display/headline voice**
**Instrument Sans = body/UI/workhorse**

with Inter potentially removed unless a specific use case justifies it.

Orbitron and Cairo should only remain if the audit finds a genuinely necessary branded/functional role.

Do not blindly follow this hypothesis. Validate it.

---

# PHASE 4 — BUILD A REAL TYPOGRAPHY DESIGN SYSTEM

Do not create dozens of arbitrary styles.

Create semantic tokens/roles such as:

### Display

For hero headlines and major marketing statements.

### H1

Primary page heading.

### H2

Major section heading.

### H3

Subsection heading.

### H4

Card/component heading.

### Body Large

Lead/supporting copy.

### Body

Default readable text.

### Body Strong

Important supporting statements.

### Label

Forms, controls and compact UI.

### Caption

Metadata and secondary information.

### Navigation

Header/navigation links.

### Button

Primary and secondary CTA typography.

### Metric

Large numerical values.

### Eyebrow

Small uppercase category/context labels.

Every role should define:

* font family
* weight
* font size
* line height
* letter spacing
* responsive behavior
* semantic usage

Do NOT style typography by arbitrary component-specific values unless there is a genuine exception.

---

# PHASE 5 — CREATE A RESPONSIVE TYPE SCALE

Create a coherent type scale rather than manually guessing sizes on every breakpoint.

Prefer fluid typography where appropriate:

```css
clamp(min, preferred, max)
```

But do not use `clamp()` everywhere unnecessarily.

The scale should preserve the hierarchy between:

* display
* H1
* H2
* H3
* body
* labels
* captions

Desktop, tablet and mobile must feel like the same design system rather than three independently designed versions.

Avoid huge mobile headlines that create awkward wrapping.

---

# PHASE 6 — DEFINE WEIGHT RULES

Do not use 600/700/800/900 interchangeably.

Create a deliberate weight strategy.

Example:

* 400 → body
* 500 → navigation / supporting UI
* 600 → card headings / buttons
* 700 → major headings
* 800+ → only when genuinely justified for display typography

Validate the exact values against the chosen fonts.

Avoid fake bolding or unnecessary font-weight variation.

---

# PHASE 7 — LINE HEIGHT + LETTER SPACING

Establish consistent rules.

Approximate starting direction:

### Body

~1.45–1.65

### Lead

~1.4–1.55

### Headings

~1.05–1.2 depending on size and wrapping

### UI / buttons

~1.0–1.25

### Eyebrows / uppercase labels

Slightly increased tracking where appropriate.

Do not globally add letter-spacing to everything.

Large headlines generally need tighter tracking than uppercase small labels.

Test visually with the actual SolarARK copy.

---

# PHASE 8 — CONTROL CONTENT WIDTH

Typography quality is not only font selection.

Review paragraph/container widths.

Prevent long body paragraphs from stretching across excessively wide desktop containers.

Use sensible maximum measures where appropriate.

Target comfortable reading widths rather than blindly using full-width content.

This is especially important for:

* About text
* Service descriptions
* Project descriptions
* Careers content
* Contact information
* FAQs
* Long explanatory sections

---

# PHASE 9 — STANDARDIZE THE SUBTLE HEADLINE ACCENT COLOR

There is an existing visual experiment from the SolarARK section:

The sentence:

**Your solar cost doesn’t.**

was changed from strong red to a restrained ivory/champagne gradient.

Current experimental direction:

```css
background: linear-gradient(
  90deg,
  #F8F8F5 0%,
  #E7D8B9 50%,
  #FFFDF7 100%
);

-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
```

Do NOT blindly apply this exact gradient everywhere.

Research and evaluate whether this is actually the best solution for SolarARK.

Compare:

1. Pure warm white
2. Warm-white → champagne gradient
3. Warm-white → warm-gray gradient
4. Very subtle SolarARK-compatible accent
5. Another restrained treatment supported by the research

### Critical visual rule

The website should NOT become colourful.

This accent exists only to provide **subtle hierarchy and premium visual interest**.

It must never look:

* neon
* yellow
* orange
* rainbow
* SaaS-gradient
* gaming-style
* overly decorative
* AI-generated
* cheap
* flashy

Avoid saturated red/maroon headline text.

Keep the established SolarARK maroon for **buttons/CTAs and appropriate brand UI**.

Do not remove maroon from interaction elements just because we are reducing red typography.

---

# PHASE 10 — DEFINE WHEN THE ACCENT SHOULD BE USED

Do not apply the gradient to every heading.

That would destroy the hierarchy.

Create a clear rule such as:

Use the subtle accent only when a section contains a **key conceptual contrast or emotionally important phrase**.

Examples:

**Power your home.**
**Pay less every month.**

or:

**Your electricity bill keeps rising.**
**Your solar cost doesn’t.**

But do NOT turn every H2 into gradient text.

Most headings should remain neutral.

The accent should become recognizable because it is **rare**.

Think of it as a typographic brand accent, not a default text color.

---

# PHASE 11 — APPLY TYPOGRAPHY CONSISTENTLY ACROSS THE WEBSITE

Audit and map the proposed system to:

### Header

* logo relationship
* navigation
* phone CTA
* quote CTA

### Hero

* eyebrow
* display heading
* supporting paragraph
* CTA
* micro-copy

### About

* section heading
* supporting content
* statistics

### Services

* category labels
* service headings
* cards
* descriptions
* CTA

### Earn With Us

* financial/value messaging
* metrics
* cards
* CTA

### Projects

* project names
* locations
* project metrics
* descriptions

### Careers

* headings
* body copy
* vacancy information
* buttons

### Gallery

* labels
* captions
* category filters

### Contact

* labels
* inputs
* helper text
* CTA

### Calculators / financial sections

* data labels
* numerical hierarchy
* input values
* comparison values
* status indicators

### Footer

* navigation
* headings
* contact details
* legal text

Typography should feel unmistakably like the same SolarARK brand everywhere.

---

# PHASE 12 — SPECIAL CASE: NUMBERS

Financial and energy numbers need their own hierarchy.

Review:

* ₹ values
* percentages
* system capacities
* years
* project statistics
* savings estimates
* calculator outputs

Do not automatically use Orbitron.

Test whether Space Grotesk or Instrument Sans provides a more trustworthy and premium numerical appearance.

Reserve a special numerical font only if there is a real UX/brand justification.

---

# PHASE 13 — SPECIAL CASE: ORBITRON

Determine whether Orbitron is actually helping.

Orbitron strongly communicates:

* futuristic
* sci-fi
* technical
* digital

That may conflict with SolarARK's intended positioning if overused.

Do not remove it automatically.

Instead:

1. Identify every Orbitron instance.
2. Evaluate whether each instance benefits from its futuristic character.
3. Recommend retaining it only where it creates genuine semantic value.
4. Otherwise migrate those elements into the primary type system.

---

# PHASE 14 — SPECIAL CASE: CAIRO

Determine why Cairo exists.

If it is only present because it was imported but not needed, recommend removing it from the production font bundle.

Do not keep unused fonts merely because they are already imported.

---

# PHASE 15 — ACCESSIBILITY

Validate the resulting system against accessibility considerations.

Check:

* text contrast
* muted text contrast
* gradient text contrast
* button text contrast
* small labels
* form text
* disabled states
* focus states
* text resizing
* responsive wrapping

Most importantly:

**Never rely exclusively on color to communicate meaning.**

For example, grid-vs-solar comparisons should remain understandable through:

* labels
* layout
* icons
* numbers
* typography

even if the user cannot distinguish the accent colors.

---

# PHASE 16 — PERFORMANCE

Audit the Google Fonts implementation.

Determine:

* exactly which families are needed
* exactly which weights are needed
* whether unused weights are being downloaded
* whether font loading can be reduced
* whether the current import strategy causes unnecessary requests
* whether `font-display: swap` or an equivalent appropriate strategy is already used
* whether local/self-hosted fonts would offer a meaningful benefit

Do not make performance changes blindly.

---

# PHASE 17 — CREATE AN ANTIGRAVITY IMPLEMENTATION PLAN

Your final output must be a **production-ready implementation plan for Antigravity**, not generic design advice.

Structure it as:

## A. Executive recommendation

Clearly state:

* final font architecture
* final role of each font
* fonts to remove
* fonts to retain
* final accent-color strategy
* reason for each decision

## B. Typography tokens

Provide the proposed CSS variables/tokens.

Example structure:

```css
--font-display: ...
--font-body: ...
--font-ui: ...

--text-display: ...
--text-h1: ...
--text-h2: ...
--text-h3: ...
--text-body-lg: ...
--text-body: ...
--text-label: ...
--text-caption: ...

--leading-display: ...
--leading-heading: ...
--leading-body: ...

--tracking-display: ...
--tracking-label: ...
```

Use values based on your research and actual SolarARK content.

## C. Responsive type table

Provide:

| Role | Desktop | Tablet | Mobile | Weight | Line Height | Family |
| ---- | ------: | -----: | -----: | -----: | ----------: | ------ |

Use realistic values that have been tested against the existing UI.

## D. Accent treatment

Define:

* exact color/gradient
* acceptable usage
* prohibited usage
* fallback for accessibility
* which existing red typography should be migrated
* which maroon UI elements must remain unchanged

## E. Component migration map

Specify exactly which components/classes/files should change.

For example:

```text
Header
Hero
SectionHeading
ServiceCard
ProjectCard
Calculator
ContactForm
Footer
...
```

Do not invent filenames if they do not exist.

Use the actual codebase structure after inspection.

## F. Migration strategy

Explain how Antigravity should safely implement it without breaking:

* layout
* responsiveness
* animations
* functionality
* routing
* forms
* SEO
* existing design language

## G. QA checklist

Include visual QA at:

* 1440px
* 1280px
* 1024px
* 768px
* 430px
* 390px

Also test:

* font loading
* wrapping
* contrast
* buttons
* forms
* numbers
* headings
* navigation
* gradient fallbacks
* mobile typography
* no accidental font-family overrides

## H. Before/after examples

Show representative examples from the actual SolarARK site.

Especially demonstrate:

1. Hero heading
2. Section heading
3. Body copy
4. Card heading
5. Navigation
6. Button
7. Financial metric
8. Highlighted phrase using the subtle accent

---

# IMPORTANT DESIGN-DIRECTOR RULES

Do not optimize typography section-by-section independently.

Create **one coherent global typographic language** and then apply it contextually.

Do not overuse Space Grotesk.

Do not overuse the gradient.

Do not use red typography as a default emphasis technique.

Do not make every heading visually loud.

Do not make the website look like a fintech dashboard.

Do not make the renewable-energy theme depend on yellow/green everywhere.

Do not replace the existing SolarARK maroon CTA system.

Do not introduce unnecessary fonts just to create variety.

Do not blindly follow the currently implemented font architecture.

Do not make the result visually “safe” at the expense of brand character.

The objective is:

**clarity + trust + premium perception + strong hierarchy + SolarARK personality**

with the **minimum number of typographic rules necessary to create maximum consistency**.

---

# FINAL DELIVERABLE

After the research and audit, produce:

**“SolarARK Global Typography & Accent System — Antigravity Implementation Plan v1”**

It must contain:

1. Research findings
2. Existing-system audit
3. Final font recommendation
4. Final type hierarchy
5. Responsive scale
6. Weight strategy
7. Line-height strategy
8. Letter-spacing strategy
9. Content-width guidance
10. Accent-gradient recommendation
11. Accessibility guidance
12. Performance guidance
13. Component-by-component migration map
14. Exact implementation order
15. QA checklist
16. Risks / edge cases
17. “Do not change” list

Do not begin implementation yet.

The purpose of this task is to produce a **high-confidence implementation blueprint that Antigravity can execute safely across the entire SolarARK website**.
