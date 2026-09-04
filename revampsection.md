
# SolarARK Services Page — 4-Phase Implementation Plan

## Phase 1 — Audit + Page Foundation

**Goal:** Lock the content, layout system, and reusable structure before building the section.

### Build

* Audit existing `/services` implementation and reuse existing global components wherever they already match the reference.
* Verify service content against the official SolarARK website.
* Establish the page-level grid, spacing, typography, colors, borders, image treatment and CTA styles from the supplied references.
* Reuse the site's existing:

  * Header/navigation
  * Button/CTA
  * Container
  * Footer
  * Typography tokens
* Do **not** create duplicate versions of global components.

### Technical approach

Use responsive CSS Grid/Flexbox with fluid sizing (`clamp()`, `minmax()`, `aspect-ratio`) instead of fixed positioning.

Create the page around reusable data-driven components rather than hard-coded markup.

### Dependency

None.

### Acceptance criteria

* Content hierarchy is finalized.
* Existing site-wide components are reused where appropriate.
* Services page visually follows the established SolarARK system.
* No unnecessary page-specific abstractions are introduced.

---

# Phase 2 — Core Services Experience

**Goal:** Build the majority of the page's user-facing experience.

### Build

**1. Services Hero**

* Editorial headline and supporting statement.
* Same spacing/typography hierarchy as the reference.
* Restrained maroon/terracotta emphasis.

**2. Three Solution Categories**

* Residential
* Commercial
* Industrial

Use one reusable `SolutionCard` component with unique content/image data.

Desktop should use the strong **three-panel image-led layout** shown in the reference; tablet/mobile should naturally transition to fewer columns/stacked cards.

**3. Our Approach**

* Site Assessment
* System Design
* Installation
* Ongoing Support

Use the reference's image + process structure rather than a generic timeline/card layout.

**4. Featured Projects / Proof**

* Reuse existing project data/components where possible.
* Show a concise selection of real SolarARK projects.
* Link through to actual project pages.

### Content strategy

Apply the 80/20 rule aggressively:

**Hero → identify solution type → explain value → show how SolarARK works → prove it with projects.**

Avoid filling the page with technical information that belongs on deeper service/detail pages.

### Technical approach

* `SolutionsGrid`
* `SolutionCard`
* `ApproachSection`
* `ProcessSteps`
* `ProjectCard`

Make cards/data reusable so the same patterns can be extended to other revamped pages without rebuilding them.

### Acceptance criteria

* The three service categories are the dominant decision point.
* Each category is immediately understandable.
* The process section communicates professionalism and methodology.
* Real project proof supports the services.
* Desktop composition closely follows the reference while remaining responsive.

---

# Phase 3 — Conversion + Responsive Refinement

**Goal:** Finish the page as a conversion-oriented experience rather than simply matching the visual reference.

### Build/refine

**Assessment CTA**

* Strong closing CTA immediately before the footer.
* Reuse the same primary assessment button used in the header.
* Clear single next action rather than multiple competing CTAs.

**Responsive behavior**
Test at:

`320px / 375px / 768px / 1024px / 1280px / 1440px+`

Pay particular attention to:

* Hero headline wrapping
* Three-card → stacked transition
* Approach image/process transformation
* Project card overflow/swiping
* CTA sizing
* Footer stacking
* Navigation collapse

### UX refinement

Add restrained interactions:

* image hover treatment
* subtle arrow movement
* appropriate focus/hover states
* minimal reveal/motion

Avoid excessive animations or trendy effects that conflict with the calm SolarARK aesthetic.

### Acceptance criteria

* No horizontal overflow at any supported width.
* No clipped/overlapping content.
* Mobile layout feels intentionally designed rather than compressed desktop.
* CTA remains obvious and usable.
* Interactions enhance usability without distracting from content.

---

# Phase 4 — Final QA + Visual Match

**Goal:** Make the result production-ready and ensure it actually feels like the supplied SolarARK design system.

### Verify

**Content**

* Every service statement is accurate to the official SolarARK source.
* No invented project figures, locations or claims.
* All links and CTAs point to valid destinations.

**Visual**

* Typography hierarchy
* Maroon/terracotta accent usage
* Warm background treatment
* Image quality/cropping
* Section spacing
* Borders/rules
* Button styling
* Footer consistency

**Technical**

* Responsive behavior
* Accessibility basics
* Keyboard/focus states
* Image alt text
* Loading/performance
* Console errors
* Broken routes/assets

### Acceptance criteria

The page should pass this final test:

> **At first glance it should look like it belongs to the same SolarARK website as the supplied Home, Projects and About references; at the same time, the content hierarchy should make the three solutions and assessment CTA immediately understandable.**

---

## Final development sequence

```text
PHASE 1
Audit + Foundation
        ↓
PHASE 2
Hero + Solutions + Approach + Projects
        ↓
PHASE 3
CTA + Responsive + Interaction
        ↓
PHASE 4
QA + Visual/Content Verification
```
