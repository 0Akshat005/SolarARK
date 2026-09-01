# SOLARARK — FIX + POLISH THE “FROM ROOFTOP TO RUNNING SYSTEM” SECTION

Use the existing SolarARK website:
https://solar-ark-sigma.vercel.app/

The current implementation is conceptually correct, but the visual execution needs a substantial refinement.

The reference design is the intended direction.

DO NOT redesign the concept.
DO NOT revert to cards.
DO NOT introduce a new visual language.

Instead, fix the hierarchy, readability, responsiveness, spacing, and background treatment so the section feels like a premium solar/engineering website.

--------------------------------------------------
1. MOST IMPORTANT PROBLEM TO FIX
--------------------------------------------------

The architectural background illustration is currently too visually dominant.

It is sitting behind the process content and making:

- icons difficult to read
- stage labels low contrast
- descriptions difficult to scan
- the timeline visually unclear
- mobile composition especially cluttered

The illustration must become an ATMOSPHERIC BACKGROUND ELEMENT.

It must NEVER compete with typography or the process timeline.

Think:

CONTENT = foreground
TIMELINE = foreground
ILLUSTRATION = background atmosphere

Not:

CONTENT + IMAGE + TIMELINE all fighting for attention.

--------------------------------------------------
2. BACKGROUND ILLUSTRATION — DESKTOP
--------------------------------------------------

Use the supplied architectural solar-house illustration.

DO NOT change the illustration itself.

Position it:

- right half of section
- approximately 55–65% from left
- vertically around the middle/lower half
- slightly behind the process line
- extend/fade it naturally into the page background

Maximum visual opacity:
approximately 0.22–0.30

Use a soft mask/fade so the image disappears toward:

- left side
- top
- bottom

The left content area must remain visually clean.

IMPORTANT:

No dark image edges.
No image rectangle.
No visible image boundary.
No hard box.
No shadow around the image.

The house should feel like an architectural sketch quietly embedded into the page.

Add a very subtle warm radial glow behind the illustration if required.

The illustration should NEVER overlap important text.

--------------------------------------------------
3. BACKGROUND MUST NEVER SIT BEHIND READABLE COPY
--------------------------------------------------

Maintain a safe foreground zone.

The following must always have a clean, high-contrast background:

- eyebrow
- heading
- body copy
- Explore our services
- timeline numbers
- timeline labels
- timeline descriptions

Use layering:

background illustration
↓
very subtle background fade/overlay
↓
timeline
↓
content

The illustration can intersect empty space, but not typography.

--------------------------------------------------
4. DESKTOP COMPOSITION
--------------------------------------------------

Target desktop section height:

520–580px.

Do not make the section unnecessarily tall.

Use a centered max-width container matching the existing SolarARK website.

Desktop composition:

TOP:
eyebrow + heading + paragraph

UPPER RIGHT:
Explore our services

MIDDLE / LOWER:
single continuous four-stage journey

BACKGROUND:
architectural illustration on right

BOTTOM:
closing statement + metadata

The section should feel editorial and spacious rather than component-based.

--------------------------------------------------
5. HEADING
--------------------------------------------------

Exact copy:

Solar, properly planned.
Properly supported.

Highlight only:

supported.

Color:
SolarARK red.

Use existing Instrument Sans.

Desktop:

font-size: 52–60px
font-weight: 600
line-height: 0.98–1.05
letter-spacing: -0.035em

Do not use an ultra-heavy font weight.

The heading should be the strongest visual element.

--------------------------------------------------
6. BODY COPY
--------------------------------------------------

Exact copy:

We assess, size, coordinate and support your system—
so the move to solar feels straightforward from day one.

Desktop width:
approximately 470–520px.

Font:
Instrument Sans
16–17px
font-weight: 400
line-height: 1.5–1.6

Color:
existing dark navy with slightly reduced opacity.

--------------------------------------------------
7. SERVICE CTA
--------------------------------------------------

Exact text:

Explore our services ↗

This is NOT a conventional button.

Keep it visually lightweight.

Desktop:
position toward the upper-right.

Style:

dark navy text
small arrow inside a very subtle circular outline
minimal warm glow on hover

Hover:

text → SolarARK red
arrow → moves 3–4px right
soft warm glow
subtle underline reveal

Do NOT use:

filled pill
large button
heavy border
drop shadow

Link directly to the Services section/page.

--------------------------------------------------
8. PROCESS TIMELINE
--------------------------------------------------

The four stages are the main visual system.

Do NOT place them into cards.

Use one continuous engineered line:

01 ───────── 02 ───────── 03 ───────── 04

The line should span the usable width.

It must feel intentional and perfectly aligned.

Each node:

48–54px diameter
cream/ivory interior
thin SolarARK red/orange border
very subtle warm glow

Numbers:

01
02
03
04

Instrument Sans
15–17px
600

Under every node:

short vertical connector

Then icon

Then stage title

Then short description

--------------------------------------------------
9. EXACT STAGE CONTENT
--------------------------------------------------

01

ROOF

Right system
for your site


02

SYSTEM

Sized to your
actual usage


03

APPROVAL

Subsidy & DISCOM
coordination


04

SUPPORT

Support beyond
installation

Keep this copy exactly.

Do not add paragraphs.

The Pareto principle is intentional here:
only the information necessary to understand SolarARK's journey.

--------------------------------------------------
10. TIMELINE READABILITY
--------------------------------------------------

The current screenshot has the illustration crossing behind stages 03 and 04.

FIX THIS.

Timeline content must have a consistently clean visual zone.

Use one of these techniques:

preferred:
move illustration behind the line but fade it heavily

OR:

use a subtle translucent ivory gradient behind the timeline content

The background should be quiet enough that:

ROOF
Right system for your site

and

APPROVAL
Subsidy & DISCOM coordination

are immediately readable.

Never sacrifice text contrast for the illustration.

--------------------------------------------------
11. BOTTOM CLOSING MESSAGE
--------------------------------------------------

Use:

One team. Every step of your solar journey.

Below:

ASSESSMENT • DESIGN • APPROVALS • INSTALLATION • SUPPORT

Keep it compact.

This should behave as the final visual punctuation of the section.

Do NOT make it look like another component/card.

--------------------------------------------------
12. MOBILE MUST BE A SEPARATE COMPOSITION
--------------------------------------------------

IMPORTANT:

Do NOT simply shrink the desktop layout.

The current mobile layout is NOT acceptable.

Desktop and mobile should share the same design language, but mobile needs its own composition.

--------------------------------------------------
13. MOBILE CONTENT PRIORITY
--------------------------------------------------

Mobile order:

01 eyebrow

02 heading

03 paragraph

04 Explore our services

05 visual journey

06 closing statement

07 metadata

Everything must fit naturally within the section.

No horizontal overflow.

No cropped content.

No hidden stage.

No content disappearing below the viewport unexpectedly.

--------------------------------------------------
14. MOBILE BACKGROUND IMAGE
--------------------------------------------------

The desktop illustration placement must NOT be reused on mobile.

This is critical.

On mobile:

move the architectural illustration to the LOWER BACKGROUND.

Position:

center / slightly right

lower 45–65% of section

opacity:
approximately 0.10–0.18

strong fade toward the top

strong fade behind text

The illustration should feel like a faint environmental texture.

The tree must NOT sit directly behind the stage labels.

The house must NOT pass through text.

The upper 35–40% of the mobile section should have an almost completely clean background.

This creates proper reading hierarchy.

--------------------------------------------------
15. MOBILE HEADING
--------------------------------------------------

Use:

36–42px
600
line-height: 1.0–1.08
letter-spacing: -0.03em

Do NOT force awkward line breaks.

Allow the browser to wrap naturally.

The desired visual rhythm is approximately:

Solar, properly planned.
Properly supported.

not:

Solar, properly
planned. Properly
supported.

unless the actual viewport requires it.

--------------------------------------------------
16. MOBILE BODY
--------------------------------------------------

16px
line-height: 1.5

Maximum width:
~370px

Keep enough horizontal padding:

20–24px minimum.

Do not let text touch viewport edges.

--------------------------------------------------
17. MOBILE CTA
--------------------------------------------------

Place immediately after the paragraph.

Do not push it into the timeline.

Spacing:

20–26px above
24–32px below

Keep it exactly as lightweight as desktop.

--------------------------------------------------
18. MOBILE TIMELINE — DO NOT USE 2x2 GRID
--------------------------------------------------

The current 2x2 arrangement feels like a generic feature grid.

Do NOT use four isolated columns.

Instead use a VERTICAL OR DIAGONAL JOURNEY.

Preferred mobile structure:

01
│
02
│
03
│
04

with the line visually connecting the stages.

Each stage can alternate slightly left/right if necessary, but maintain a single visual axis.

Example:

01  ROOF
    Right system for your site
       │
       ↓
02  SYSTEM
    Sized to your actual usage
       │
       ↓
03  APPROVAL
    Subsidy & DISCOM coordination
       │
       ↓
04  SUPPORT
    Support beyond installation

This immediately communicates progression and uses significantly less width.

Do NOT create four boxed cards.

--------------------------------------------------
19. MOBILE ICONS
--------------------------------------------------

Use the same thin-line icon family.

Icon size:

24–28px

Node:

42–46px

Keep icons and labels visually secondary to the heading.

--------------------------------------------------
20. MOBILE SPACING
--------------------------------------------------

Use a deliberate rhythm.

Suggested:

section padding:
72px 20px 56px

eyebrow → heading:
16px

heading → body:
14–18px

body → CTA:
22px

CTA → journey:
38–48px

stage → stage:
24–32px

journey → closing statement:
44–52px

closing statement → metadata:
10–14px

Do not introduce excessive empty gaps.

--------------------------------------------------
21. RESPONSIVE BREAKPOINT LOGIC
--------------------------------------------------

Desktop:
≥ 1024px

Use horizontal journey.

Tablet:
768–1023px

Keep horizontal journey only if it remains genuinely readable.
Otherwise progressively tighten it.

Mobile:
< 768px

Switch to vertical journey.

Do not rely on desktop scaling.

--------------------------------------------------
22. COLOR SYSTEM
--------------------------------------------------

Use the existing SolarARK palette.

Background:
warm ivory / off-white

Approx:
#F8F4EE

Primary text:
deep navy

Approx:
#10233F

Brand red:
Approx:
#982522

Warm solar accent:
Approx:
#D96B3C

Borders:
very subtle warm gray/beige.

Do not introduce:

green primary accents
purple
bright orange
neon gradients
generic SaaS blue

SolarARK should remain:

IVORY + NAVY + RED + SUBTLE WARM PEACH.

--------------------------------------------------
23. TYPOGRAPHY
--------------------------------------------------

Use Instrument Sans throughout.

Do not import or introduce another display font.

Maintain the website's existing font variables.

Typography should be:

clean
architectural
slightly editorial
confident
not excessively bold

Avoid excessive uppercase text except for eyebrow and process labels.

--------------------------------------------------
24. MICRO INTERACTION
--------------------------------------------------

Keep animation subtle.

On entering viewport:

eyebrow:
fade + 8px upward

heading:
fade + 12px upward

timeline:
line draws horizontally on desktop

mobile:
line reveals vertically

nodes:
small opacity/scale reveal

illustration:
slow opacity reveal

No exaggerated parallax.

No floating cards.

No bouncing.

No spinning.

No excessive blur.

The animation should feel engineered and premium.

--------------------------------------------------
25. ACCESSIBILITY
--------------------------------------------------

Maintain WCAG-friendly text contrast.

Do not rely on the illustration for meaning.

Icons are decorative/supportive.

All CTA links must remain keyboard accessible.

Do not place text on image areas where contrast depends on the image staying unchanged.

--------------------------------------------------
26. FINAL VISUAL CHECK

Before finishing, compare the implementation against the supplied reference and verify:

DESKTOP:

✓ heading is dominant
✓ illustration is subtle
✓ text remains perfectly readable
✓ timeline is one coherent system
✓ no cards
✓ no unnecessary containers
✓ CTA is understated
✓ section height is compact
✓ bottom message is visible
✓ visual hierarchy is obvious within 3–5 seconds

MOBILE:

✓ no horizontal overflow
✓ no 2x2 card/grid feel
✓ no text over the tree/house
✓ illustration is much lighter
✓ heading remains dominant
✓ CTA appears naturally after copy
✓ all four stages are easy to scan
✓ journey feels sequential
✓ closing statement is visible
✓ metadata is visible
✓ section does not feel excessively tall

MOST IMPORTANT:

The background illustration is decoration.
The typography and journey are the product.

Never sacrifice readability, hierarchy, or responsiveness to show the illustration.

The final result should feel like a premium architectural/engineering brand website—not WordPress, not SaaS, not a generic template.