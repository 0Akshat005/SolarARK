Act as a senior UI engineer and design-system architect. Inspect the attached/reference screenshot carefully before changing the implementation.

The current portfolio/project grid has a serious layout-system problem: the cards are being stretched by CSS Grid row heights, creating an enormous empty white area inside the tall INDUSTRIAL / AKOLA card and causing the lower cards to look vertically disconnected. The result feels like a broken masonry grid rather than an intentional premium editorial portfolio layout.

Do NOT simply reduce the height of that one card or add arbitrary margins. Fix the underlying grid architecture.

PRIMARY GOAL
Create a deliberate, high-end editorial/Bento portfolio grid where:
- card heights are driven by their own content/image proportions
- no card contains unexplained dead whitespace
- cards do not stretch merely because another card in the same grid row is taller
- the layout feels intentionally asymmetric, not accidentally uneven
- the visual rhythm remains sophisticated and premium
- the existing content, imagery, typography, labels and interactions are preserved unless a small adjustment is required for visual consistency

SPECIFIC PROBLEM TO FIX
The tall INDUSTRIAL / AKOLA card currently has:
1. a very tall image
2. a relatively short text section
3. a huge empty white region below the description
4. a CTA sitting at the extreme bottom

This happens because the card is stretching to the height of the surrounding grid structure.

Do NOT allow the card body to become a vertically stretched flex/grid container simply to match neighboring cards.

LAYOUT APPROACH
Rebuild the portfolio section using an intentional masonry/Bento composition.

Preferred desktop structure:
- Left area: two-column composition containing the residential + commercial cards and the larger industrial card below.
- Center/lower area: the two smaller cards remain compact and proportionate.
- Right area: the AKOLA industrial card can remain visually dominant, but its height must come primarily from its image and purposeful content—not from an artificially stretched white body.

Use explicit grid placement / grid-template-areas / carefully controlled aspect ratios rather than relying on implicit equal-height grid rows.

Important:
- Avoid `align-items: stretch` behavior where it causes card bodies to inherit an unrelated row height.
- Avoid `height: 100%` on card content when it produces empty space.
- Avoid arbitrary fixed heights that break responsive behavior.
- Avoid negative margins, absolute-position hacks, or JS-based height synchronization.
- Let image dimensions/aspect ratios establish visual hierarchy.
- Let text sections use natural height.
- Keep CTA anchored naturally after the content with consistent padding.

CARD SYSTEM
Treat every project card as:

IMAGE
→ META / CATEGORY + LOCATION
→ ONE concise project statement
→ FOOTER / CAPACITY + ARROW

The internal spacing should be consistent across cards, but card heights should NOT be globally equal.

Use:
- consistent horizontal padding
- consistent top/bottom padding
- consistent metadata typography
- consistent footer height where appropriate
- subtle 1px borders
- restrained corner radius (or the existing radius if already part of the design system)
- no heavy shadows
- no generic floating-card styling

IMAGE BEHAVIOR
Do not crop images aggressively just to force uniform card heights.

Use intentional aspect ratios:
- featured/tall industrial image: approximately 4:5 or similar editorial portrait ratio
- standard cards: approximately 4:3
- compact cards: approximately 4:3 or a slightly shorter ratio

Use `aspect-ratio` and `object-fit: cover` consistently.

MOST IMPORTANT VISUAL FIX
The AKOLA card should still feel like the dominant featured project, but the whitespace below its description must disappear.

Its body should collapse to the actual content height:

[metadata]
[description]
[small natural spacing]
[footer CTA]

Do NOT push the footer to the bottom of a giant container.

If the visual composition needs the featured card to remain taller than neighboring cards, achieve that through the image proportion / card placement, not through empty content space.

GRID RHYTHM
The overall composition should resemble a premium architecture/design portfolio:
- asymmetrical but controlled
- varied card sizes
- strong vertical rhythm
- no accidental gaps
- no large rectangular voids
- no row-based stretching
- clear visual hierarchy between featured and supporting projects

The negative space BETWEEN cards is intentional.
The negative space INSIDE a card should not look accidental.

RESPONSIVE BEHAVIOR
Desktop:
- preserve the asymmetric editorial composition
- maintain the featured AKOLA card as the visual anchor

Tablet:
- collapse intelligently into 2 columns
- prevent awkward stretched rows

Mobile:
- switch to a clean single-column sequence
- every card becomes natural height
- no fixed desktop heights survive into mobile
- maintain consistent image ratios and spacing

IMPLEMENTATION QUALITY
Before editing, inspect the existing DOM/component structure and CSS/grid implementation.

Prefer:
- CSS Grid with explicit placement
- `grid-template-areas`
- `minmax()`
- `aspect-ratio`
- intrinsic sizing
- reusable card primitives
- clean responsive breakpoints

Avoid:
- hardcoded pixel heights per individual card
- duplicated CSS hacks for specific cards
- absolute positioning for normal content
- transform-based alignment tricks
- JavaScript measuring/synchronizing card heights
- excessive media-query exceptions

VISUAL DETAIL
The final result should feel like a deliberately art-directed solar portfolio, not a generic dashboard/card grid.

Preserve the warm off-white background and restrained visual language visible in the reference.

The hierarchy should read approximately:
1. Featured industrial project
2. Large residential/commercial/industrial projects
3. Smaller supporting installations

The user should immediately perceive that the different card heights are intentional.

VALIDATION
After implementation:
1. Compare the result against the attached screenshot.
2. Specifically inspect the AKOLA card for any unexplained internal whitespace.
3. Check that neighboring cards are not forcing one another's heights.
4. Check that lower cards align naturally rather than being stretched.
5. Resize through desktop, tablet, and mobile widths.
6. Ensure there are no overflow, collapsed-grid, or image distortion issues.
7. Do not stop after making the visible gap smaller—the underlying grid behavior must be corrected.

Do not redesign the entire page. Keep the existing visual identity and content. Fix the composition and card sizing architecture so the grid looks intentionally designed.