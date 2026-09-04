Refine ONLY the existing “OUR APPROACH” section.

Use the supplied SolarARK `solutionpage.png` reference as the PRIMARY visual specification.
Use the current implementation only to understand what already exists.

IMPORTANT:
Do NOT redesign the whole page.
Do NOT change the global header, footer, typography system, colors, navigation, or unrelated sections.
Do NOT invent a new visual language.

The current section is functional, but its composition is not accurate to the reference. Rebuild the section's INTERNAL LAYOUT and visual hierarchy so it closely follows the reference while remaining responsive and production-quality.

==================================================
CORE DESIGN INTENT
==================================================

This section should communicate one idea:

“SolarARK designs around the individual site rather than applying a generic solar template.”

The left side is the editorial explanation.
The right side is the visual proof + process.

Think:
EDITORIAL INTRO + IMMERSIVE PROCESS VISUAL

NOT:
TEXT + GIANT IMAGE + FLOATING UI CARDS

==================================================
1. FIX THE OVERALL COMPOSITION
==================================================

Use a balanced two-column editorial grid.

LEFT:
A relatively narrow text column.

RIGHT:
A larger but CONTROLLED image-led process canvas.

The section should feel compact and intentional, with the two columns vertically aligned around the same visual center.

Do NOT let the image dominate the page vertically.

Do NOT create a huge empty section around the image.

Do NOT vertically center everything inside an unnecessarily tall section.

Use natural content-driven height.

The visual proportion should feel close to the supplied reference:
- left content roughly 30–35%
- right visual roughly 65–70%
- generous horizontal breathing room
- restrained vertical padding

Use CSS Grid rather than arbitrary positioning.

==================================================
2. LEFT EDITORIAL COLUMN
==================================================

Preserve the conceptual content hierarchy:

OUR APPROACH
Built around
the site, not
a template.

Supporting paragraph.

Our Process →

The heading is the primary visual element.

Use a strong editorial line break similar to the reference.

Do NOT make the text width excessively wide.

The accent/maroon treatment should emphasize only the key phrase:
“a template.”

The left column should feel calm, spacious and premium.

The supporting copy should remain comfortably readable and should NOT stretch across the entire page.

The “Our Process →” link should be a simple editorial text link with a restrained arrow.

Do not put the CTA inside a large button.

==================================================
3. RIGHT PROCESS VISUAL
==================================================

THIS IS THE MOST IMPORTANT CORRECTION.

The current implementation uses a large image with oversized dark floating cards.

Remove that visual treatment.

Instead create ONE controlled rounded image canvas.

The image should:
- have a refined rounded rectangle
- use a realistic solar rooftop/project image
- have a subtle dark tonal overlay for readability
- remain visually photographic
- avoid excessive black/vignette treatment
- avoid looking like a dashboard

Use:
aspect-ratio
object-fit: cover
overflow: hidden
border-radius

Do NOT use a giant fixed height.

The image should scale naturally with its grid column.

==================================================
4. PROCESS INFORMATION INSIDE THE IMAGE
==================================================

Use the four process stages:

01 Site Assessment
02 System Design
03 Installation
04 Ongoing Support

But DO NOT present them as four large floating cards.

The reference uses a much lighter INFORMATIONAL ANNOTATION system.

Each stage should feel like a small editorial annotation connected to a point on the image.

Visual model:

01 Site Assessment
short description
        |
        └──────── ●

                         ● ─────── Installation
                                  short description

02 System Design
short description
        |
        └──────── ●

                         ● ─────── Ongoing Support
                                  short description

This means:

- small number
- concise title
- short supporting copy
- subtle connector line
- small anchor point
- no heavy card container

==================================================
5. ANNOTATION STYLE
==================================================

The annotations must feel integrated with the photography.

Use:
- white/light text
- very subtle translucent backing ONLY when absolutely necessary
- thin connector lines
- small circular anchor points
- one restrained maroon emphasis point

Avoid:
- large glassmorphism panels
- thick borders
- giant rounded cards
- excessive shadows
- glowing neon dots
- dashboard UI styling

The image should remain visible underneath.

The annotations should feel like an architect's/site-planning markup rather than software UI.

==================================================
6. CONNECTOR GEOMETRY
==================================================

Use carefully controlled connector lines to connect each process item to a meaningful location within the rooftop image.

Important:
Do NOT randomly position lines.

The line should visually terminate at a believable feature of the solar installation.

For example:
Site Assessment → roof/site area
System Design → solar array/layout
Installation → panel installation zone
Ongoing Support → completed system

Use subtle thin lines with small anchor points.

Only the connector layer may use controlled absolute positioning INSIDE the image canvas.

Do NOT use absolute positioning for the entire section layout.

==================================================
7. REMOVE THE CURRENT FLOATING CARD LOOK
==================================================

The current “01 Site Assessment” panel is too large and visually heavy.

Reduce it substantially.

The process information should occupy perhaps 10–15% of the image's visual weight, not become the main object.

The photograph remains the hero.

The annotation system explains the photograph.

That relationship is critical.

==================================================
8. IMAGE TREATMENT
==================================================

Use a high-quality solar rooftop image with:
- strong architectural geometry
- visible solar arrays
- enough negative space for annotations
- daylight / natural atmosphere
- realistic photography

Avoid:
- overly dark image
- artificial cinematic black overlay
- generic AI-looking architecture
- excessive blue tint
- green “eco” imagery
- obvious stock-photo appearance

The reference feels warm, architectural and premium.

Match that feeling.

==================================================
9. SPACING
==================================================

The current section has too much vertical space.

Reduce the section padding while keeping it premium.

Suggested relationship:

section top padding
↓
left heading / right image begin
↓
image height determined naturally
↓
small bottom breathing space

Do NOT add large empty areas above or below.

The section should occupy significantly less vertical space than the current implementation.

Do not compensate by shrinking the actual typography excessively.

Recompose the layout instead.

==================================================
10. RESPONSIVE DESIGN
==================================================

Desktop:
- two-column editorial layout
- left narrative
- right image/process canvas
- four annotations integrated into image

Tablet:
- slightly narrower left column
- image scales naturally
- annotation positions adapt
- reduce connector complexity if necessary

Mobile:
DO NOT attempt to preserve the desktop overlay literally.

Use:

OUR APPROACH
headline
description
Our Process →

[image]

01 Site Assessment
description

02 System Design
description

03 Installation
description

04 Ongoing Support
description

On mobile, the annotations can become a clean vertical sequence BELOW the image or as restrained overlays only where legibility is excellent.

Prioritize readability and usability over forcing the desktop composition onto a small screen.

No horizontal overflow.

==================================================
11. DESIGN QUALITY
==================================================

Use the reference's visual principles:

- warm off-white background
- dark charcoal/navy typography
- SolarARK maroon accent
- thin rules
- generous but controlled whitespace
- refined rounded image treatment
- editorial typography
- restrained shadows
- no unnecessary effects

The result should feel like a premium architecture / energy consultancy website, not a generic solar landing page.

==================================================
12. CONTENT / UX LOGIC
==================================================

Keep the process to these four core stages because they communicate the majority of the customer's journey:

01 Site Assessment
Understand the property, energy needs and site potential.

02 System Design
Translate site conditions and energy requirements into an appropriate system design.

03 Installation
Professional, precise execution of the planned system.

04 Ongoing Support
Monitoring, maintenance and long-term system support.

Keep descriptions concise.

Do not overload this section with technical specifications.

A professional solar assessment begins with understanding site conditions and energy requirements before system design, while installation and ongoing support follow as distinct stages. This hierarchy is consistent with established solar project workflows. 

==================================================
13. IMPLEMENTATION QUALITY
==================================================

Build this as reusable components.

Suggested structure:

<ApproachSection>
  <ApproachIntro />
  <ProcessVisual>
    <ProcessAnnotation />
    <ProcessConnector />
  </ProcessVisual>
</ApproachSection>

Use a data array for the four process steps.

Use responsive CSS rather than duplicated desktop/mobile markup wherever practical.

Avoid:
- fixed page heights
- arbitrary pixel offsets
- negative-margin hacks
- excessive absolute positioning
- duplicated process markup
- viewport-specific hacks

==================================================
FINAL TARGET
==================================================

The final section should visually read as:

OUR APPROACH              ┌──────────────────────────────┐
                          │       SOLAR ROOFTOP          │
Built around              │                              │
the site, not             │  01 ───── ●                 │
a template.               │                              │
                          │                ● ───── 03   │
Supporting copy           │                              │
                          │  02 ───── ●                 │
Our Process →             │                ● ───── 04   │
                          └──────────────────────────────┘

This is only a structural reference, NOT a literal implementation.

The critical visual outcome:

LEFT = editorial explanation
RIGHT = one refined photographic canvas
PROCESS = lightweight annotations integrated into the image
SECTION = compact, balanced and spacious without wasted vertical area

Before finishing, compare the result directly against the supplied `solutionpage.png` at desktop, tablet and mobile sizes.

Do NOT stop after making it merely “similar”.
Correct the hierarchy, proportions, spacing, annotation scale and image treatment until it feels intentionally designed from the same SolarARK system as the reference.