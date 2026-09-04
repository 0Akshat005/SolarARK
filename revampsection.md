Refine ONLY the existing “Featured Projects” section on the SolarARK services/solutions page.

IMPORTANT:
The currently implemented section is visually too tall because the dark navy background fills the entire section and consumes unnecessary vertical space. This is NOT what the provided SolarARK design reference shows.

Use the previously provided `solutionpage.png` / reference design as the PRIMARY visual specification and the currently implemented screenshot as the element/content reference.

DO NOT redesign the section conceptually.
DO NOT change the project content, project cards, navigation, footer, typography system, or overall SolarARK brand language.
Do not introduce a new visual style.
Preserve the existing functionality and carousel behavior.

THE MAIN FIX:
The Featured Projects section should feel like a compact, editorial project showcase sitting inside a controlled dark visual band — NOT like a huge full-height dark-blue block.

### 1. REDUCE THE SECTION HEIGHT SIGNIFICANTLY

Remove the unnecessary oversized vertical dark-blue canvas currently surrounding the content.

The dark background should still exist, but it must behave as a tight section container whose height is determined naturally by its content.

Aim for the visual proportion shown in the reference:
- compact upper content area
- project cards become the dominant visual object
- very limited empty vertical space below the cards
- no giant dark background extending far beyond the actual content

Do NOT solve this by simply shrinking everything.
Instead, improve the composition and reclaim wasted space.

### 2. RECREATE THE REFERENCE COMPOSITION

Use the reference's hierarchy:

[FEATURED PROJECTS]
Real spaces. Real impact.
Short supporting paragraph
View All Projects

                         ←   →

[PROJECT CARD] [PROJECT CARD] [PROJECT CARD]

                                      01 ─── 03

The section should feel approximately like one carefully composed editorial frame.

The left introductory block and the project cards should share the same visual rhythm and grid.

### 3. USE THE AVAILABLE SPACE MORE INTELLIGENTLY

Do not center everything vertically inside a giant section.

Use a structured max-width container.

Recommended composition:
- generous horizontal breathing room
- compact top/bottom padding
- heading aligned with the project-card grid
- carousel arrows positioned near the upper-right project area
- pagination positioned near the lower-right edge of the project-card row
- project cards should visually anchor the entire section

Use CSS Grid/Flexbox and responsive spacing rather than absolute page-level positioning.

Avoid arbitrary large heights such as:
height: 700px;
min-height: 700px;
or viewport-based heights that create empty space.

The section should naturally size to its content.

### 4. PROJECT CARDS ARE THE HERO OF THIS SECTION

The cards should remain large enough to feel premium, but they should not create excessive overall section height.

Keep:
- strong photography
- rounded corners consistent with the reference
- dark image treatment/overlay only where needed for text readability
- project capacity prominent
- category/location underneath
- circular arrow interaction

The image itself should have a controlled aspect ratio similar to the reference.

Do NOT make cards unnecessarily tall.

Use:
aspect-ratio
object-fit: cover
responsive grid sizing

rather than fixed card heights.

### 5. DARK BACKGROUND TREATMENT

The reference uses a dark, sophisticated section, but the darkness should feel like a framing device around the project showcase.

The current result feels like a large dark-blue empty canvas.

Fix that by:
- reducing vertical padding
- keeping the dark section tightly wrapped around the content
- using subtle tonal variation / restrained ambient image influence only where appropriate
- avoiding a heavy full-section vignette
- avoiding large empty dark areas

The dark background should support the imagery, not compete with it.

Maintain the SolarARK maroon/terracotta accent.

Do NOT introduce green, blue eco gradients, excessive glow, glassmorphism, or black cinematic effects.

### 6. SPACING

Follow a premium editorial spacing system.

Prioritize:
- strong relationship between heading and supporting copy
- intentional gap between intro content and cards
- consistent card-to-card spacing
- minimal unnecessary space beneath cards

The current implementation has too much vertical breathing room.

Reduce it substantially while preserving enough whitespace for a premium feel.

Think:
“luxury editorial portfolio section”
rather than
“large landing-page banner”.

### 7. DESKTOP LAYOUT

At desktop width, target approximately:

┌───────────────────────────────────────────────────────────────┐
│ FEATURED PROJECTS                               ←     →       │
│                                                               │
│ Real spaces. Real impact.                                    │
│ Supporting description                                       │
│                                                               │
│ View All Projects                                            │
│                                                               │
│ [──────── card ────────] [──────── card ────────] [──────── card ────────] │
│                                                               │
│                                                        01 ─── 03 │
└───────────────────────────────────────────────────────────────┘

But use the actual reference proportions rather than literally reproducing this ASCII layout.

The card row should occupy the majority of the visual weight.

### 8. RESPONSIVE BEHAVIOR

Desktop:
- 3 cards visible
- compact section height
- arrows visible
- pagination aligned cleanly

Tablet:
- adapt card widths naturally
- reduce gaps/padding
- avoid forcing desktop proportions

Mobile:
- one card visible / horizontal carousel
- horizontal swipe should feel natural
- heading and CTA stack cleanly
- arrows must not overlap important content
- pagination remains visible
- section remains compact

At no breakpoint should the dark background become unnecessarily tall.

### 9. PRESERVE EXISTING FUNCTIONALITY

Keep:
- current carousel logic
- project links
- arrow controls
- project pagination
- hover interactions

Only improve their positioning and visual composition.

Do not rewrite functionality unnecessarily.

### 10. IMPLEMENTATION QUALITY

Build this as a reusable responsive component.

Avoid:
- hard-coded desktop coordinates
- large fixed heights
- excessive absolute positioning
- duplicated markup
- viewport-specific hacks
- arbitrary negative margins

Use:
- CSS Grid
- Flexbox
- max-width containers
- fluid spacing
- aspect-ratio
- clamp()
- responsive media queries

### FINAL VISUAL TARGET

The final result should look much closer to the previously supplied SolarARK `solutionpage.png` reference:

- compact dark section
- project cards visually dominant
- strong editorial heading
- controlled whitespace
- clean arrows/pagination
- no giant dark-blue empty area
- premium SolarARK maroon accent
- sophisticated, warm, restrained visual language

Most importantly:

DO NOT simply shrink the current section.

RECOMPOSE THE EXISTING ELEMENTS so the same content occupies significantly less unnecessary vertical space and the project cards become the main visual anchor, matching the proportions and spatial intelligence of the reference design.

Before finishing, compare the implementation against the reference at 1440px, 1280px, 1024px, 768px and 375px widths and correct any spacing, overflow, alignment or proportion issues.