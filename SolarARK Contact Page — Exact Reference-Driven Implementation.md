# SolarARK Contact Page — Exact Reference-Driven Implementation

## Objective

Redesign the existing Contact page to closely reproduce the visual hierarchy, layout, spacing, card treatment, typography behavior, form structure, and office-directory presentation of the FIRST supplied inspiration image.

The target experience is the SolarARK contact/assessment page shown in the first image:
- warm cream page canvas
- three compact contact information cards at the top
- large two-column main section below
- assessment-request form in the left card
- registered-office directory in the right column
- deep SolarARK red CTA treatment
- white rounded cards, subtle neutral borders, restrained shadows
- dense but very readable business-information layout

Do NOT use the second attachment as a visual reference. It is unrelated.

---

## Repository constraints

Work only within the existing application architecture.

Primary files to inspect and update:
- `src/components/ContactPage.tsx`
- `src/index.css`

Before writing code:
1. Read the entire existing `ContactPage.tsx`.
2. Read `src/index.css`.
3. Reuse existing components, color variables, icon libraries, utility-class patterns, typography tokens, button styles, header, footer, form behavior, and routing patterns whenever available.
4. Do not replace the app shell, router, header, footer, or business logic.
5. Do not introduce Tailwind, a UI kit, CSS-in-JS, a new design system, or new dependencies unless the repository already uses them.
6. Preserve all existing user interactions, validation, form submission behavior, routes, and contact data. Improve presentation only unless an existing feature is visibly broken.

---

## Reference image priority

Match the first supplied image in this priority order:

1. Desktop layout and proportions
2. Card composition and spacing
3. Visual hierarchy
4. Color balance and CTA prominence
5. Form field geometry
6. Office-directory structure
7. Typography hierarchy
8. Responsive behavior
9. Micro-details such as badges, dividers, icon containers, and hover states

Do not aim for a generic “modern contact page.” The result must read as SolarARK’s version of the supplied reference.

---

# 1. Page composition

## Page background

Use a very light warm cream/off-white background across the contact-page content area.

Target feel:
- soft, premium, warm, editorial
- not pure white
- not gray
- not yellow

Suggested token direction, adapting to existing SolarARK colors:
```css
--contact-canvas: #faf8f4;
--surface: #ffffff;
--surface-border: #ebe6df;
--text-primary: #101c32;
--text-secondary: #7b7b7b;
--solar-red-700: #8f1012;
--solar-red-600: #b31a1c;
--solar-red-100: #faeeee;
--solar-red-50: #fff6f5;
--green-50: #eefbf5;
--green-600: #198b69;
--amber-50: #fff8e9;
--amber-600: #b87512;
```

Do not blindly add duplicate variables if equivalent repository tokens already exist. Prefer extending the current token system.

## Main container

Desktop:
- centered content container
- max-width: 1120px to 1200px
- horizontal page padding: 24px minimum
- desktop top spacing after the existing header: 48px to 64px
- bottom spacing before existing footer: 64px to 96px

Use:
```css
width: min(100% - 48px, 1180px);
margin-inline: auto;
```

On mobile, reduce side padding to 16px.

---

# 2. Top contact-information cards

## Layout

Add or restyle the top row as three equal-width information cards:

1. Direct Call / Helpline
2. Written Inquiries & Proposals
3. Engineering Desk Hours

Desktop:
- 3-column equal grid
- gap: 16px to 20px
- cards should align perfectly in height
- each card around 118px to 142px tall depending on content

Tablet:
- 2-column layout, with the third card spanning full width only if visually necessary
- preserve rhythm and avoid tiny card widths

Mobile:
- one column
- 12px to 16px gap

Use semantic content. Preserve current SolarARK contact data if it differs from the reference.

## Card anatomy

Each information card contains:
- icon inside a small softly tinted rounded-square container near top-left
- compact status badge aligned top-right
- small uppercase/slightly tracked label
- prominent key information line
- muted supporting text near the bottom

Card rules:
```css
background: var(--surface);
border: 1px solid var(--surface-border);
border-radius: 16px;
padding: 20px;
box-shadow: 0 2px 8px rgba(26, 31, 44, 0.04);
```

Avoid heavy shadows, gradients, glassmorphism, oversized icons, or giant badges.

## Badge variants

Use restrained variants:
- Direct call: pale red/pink background, dark SolarARK red text
- Official email: pale mint background, green text
- Open six days: pale amber background, warm amber/brown text

Badge specs:
- all caps
- 10px to 11px
- 600 weight
- moderate tracking
- pill radius
- no thick border
- minimum height 18px to 20px

---

# 3. Main desktop grid

## Grid ratios

Below the information cards, create the principal two-column layout.

Desktop:
```css
grid-template-columns: minmax(0, 1.02fr) minmax(420px, 1fr);
gap: 32px;
align-items: start;
```

The form card should feel slightly wider or visually heavier than the office directory, as in the reference.

At widths below ~1024px:
- transition to a single column
- form card first
- offices card second

Do not squeeze both primary cards side-by-side below 1024px.

---

# 4. Assessment form card

## Form card surface

The left card is a large white surface with generous but restrained padding.

Desktop:
- radius: 20px
- padding: 32px
- minimum visual height approximately 540px to 600px, driven naturally by content
- border: 1px solid the neutral surface border
- shadow: soft, low-contrast, slightly more pronounced than the small cards

Suggested:
```css
background: #fff;
border: 1px solid var(--surface-border);
border-radius: 20px;
padding: 32px;
box-shadow: 0 10px 28px rgba(28, 35, 46, 0.07);
```

Mobile:
- radius: 16px
- padding: 20px

## Form header

At the top:
1. Small red-tinted overline badge with a tiny document/survey icon:
   `Free 3D Rooftop Survey`
2. Main title:
   `Request a Free Solar Site Assessment`
3. Short explanatory paragraph:
   use existing approved SolarARK copy or reference-equivalent copy about a certified engineer inspecting roof structure, shade, and savings potential.

Typography:
- Overline: 10px–11px, semibold, SolarARK red, compact
- Heading: Space Grotesk / existing heading font, 26px–30px desktop, 600 weight, tight line-height around 1.15–1.2
- Body: Instrument Sans / existing body font, 13px–14px, line-height 1.55, muted gray
- Do not use 700 for body, labels, metadata, badges, or office details.

Space:
- badge to heading: 10px–12px
- heading to description: 8px–10px
- description to form: 22px–26px

## Form fields

Use actual existing form state, form components, validation, and submit handler. Do not replace working logic.

Desktop form grid:
- Row 1: Full Name | Mobile Number
- Row 2: City / District | Property Category
- Row 3: Average Monthly Electricity Bill spans both columns
- Row 4: Message / Special Requirements spans both columns
- Submit button spans both columns
- Privacy note centered below CTA

Grid:
```css
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
gap: 14px;
```

For fields that span both columns:
```css
grid-column: 1 / -1;
```

Mobile:
- use a single-column field layout
- preserve field order

## Field design

Labels:
- 12px to 13px
- 600 weight
- dark primary text
- 6px to 8px gap below label
- use a subtle required asterisk

Controls:
- height: 44px to 46px
- textarea: 72px to 88px
- border-radius: 11px to 12px
- 1px soft neutral-gray border
- white background
- left/right padding: 13px to 14px
- font size: 13px to 14px
- placeholder: muted, legible, non-italic
- select chevron should use native control or existing project mechanism

Focus state:
```css
border-color: var(--solar-red-600);
box-shadow: 0 0 0 3px rgba(179, 26, 28, 0.12);
outline: none;
```

Invalid state:
- use accessible native attributes where applicable
- show existing error behavior
- red should not be the only indication of invalidity
- never remove error text or ARIA support

Disable manual textarea resizing if it distorts the intended layout:
```css
resize: none;
```

## CTA

The submit button must be visually identical in spirit to the reference:

- full width
- height: 50px to 54px
- 12px to 14px radius; use pill-like softness, but not an exaggerated capsule unless existing SolarARK buttons use that shape
- deep SolarARK red gradient
- white semibold text
- centered label plus small sending/paper-plane icon
- tactile but restrained shadow

Suggested:
```css
background: linear-gradient(180deg, #b92021 0%, #880d0f 100%);
color: white;
box-shadow:
  inset 0 1px 0 rgba(255,255,255,.22),
  0 8px 16px rgba(126, 13, 15, .20);
```

Hover:
```css
transform: translateY(-1px);
filter: brightness(1.04);
box-shadow:
  inset 0 1px 0 rgba(255,255,255,.26),
  0 11px 20px rgba(126, 13, 15, .25);
```

Active:
```css
transform: translateY(0);
```

Respect `prefers-reduced-motion`; do not animate layout or introduce large transitions.

## Privacy note

Place a compact reassurance line below the CTA:
- centered
- muted gray
- 10px to 11px
- small lock icon
- example intent: “Privacy Assured: We only contact you regarding your solar rooftop assessment.”

Do not add legal claims that SolarARK has not approved.

---

# 5. Registered offices directory

## Right-column header

At the top of the office directory:
1. Small red-tinted pill: `Regional Footprint`
2. Heading: `SolarArk Registered Offices`
3. One-line muted introduction about regional headquarters and engineering centers across Maharashtra.

Typography:
- overline as specified above
- heading 25px to 29px, heading font, 600 weight
- intro 13px to 14px, muted text

Use the repository’s exact brand capitalization if it is not `SolarArk`.

## Office stack

Display office locations as a vertical list of compact white office cards.

Desktop:
- 12px to 14px vertical gap
- cards should not be excessively tall
- retain legible text and contact actions
- the office directory should naturally follow the form’s visual height, not be artificially stretched

Office-card structure:
- top row:
  - city / location title left
  - office-type badge right
- address row:
  - small location-pin icon
  - address text
- light horizontal divider
- bottom action row:
  - phone left
  - email center/next to phone when space allows
  - “Get Directions” text link on right with external-link icon

Office card styling:
```css
background: #fff;
border: 1px solid var(--surface-border);
border-radius: 14px;
padding: 18px;
box-shadow: 0 2px 7px rgba(26, 31, 44, .035);
```

Use a real button or anchor for directions. If the existing data provides Google Maps URLs, keep them. If it does not, do not fabricate URLs.

## Office tags

Examples:
- CENTRAL HQ
- MARATHWADA HUB
- VIDARBHA HUB
- OPERATIONS HUB

Style:
- red text
- pale red background
- thin, low-contrast red outline only if needed
- 9px to 10px uppercase type
- 600 weight
- rounded full pill
- no dominant visual weight

## Contact action rules

- Phone and email should remain clickable using `tel:` and `mailto:` if existing implementation supports those.
- “Get Directions” must have a clear focus state.
- On narrow widths, bottom actions may wrap:
  - phone and email remain grouped
  - directions moves to a separate right-aligned or full-width row
- Never truncate office titles, phone numbers, or email addresses without a responsive alternative.

---

# 6. Icon rules

Use only the project’s current icon solution. Do not add a new icon package.

Required visual icons:
- phone
- envelope
- clock
- document/survey
- location pin
- lock
- paper plane/send
- external link

Rules:
- 16px to 20px for inline icons
- 18px to 22px for top-card icon containers
- consistent stroke weight
- icon container: 36px to 40px rounded square with faint tinted background
- icons never substitute for text labels
- decorative icons must be `aria-hidden`
- interactive icon-only controls require accessible labels

---

# 7. Typography implementation

Use existing typography tokens and actual loaded fonts from the repository.

Do not import additional font families for this page.

Hierarchy:
- Display/headings: existing Space Grotesk heading token
- UI/body/form/office copy: existing Instrument Sans body token

Required weight discipline:
- Headings: 600
- Prominent card data: 600–700 only where truly needed
- Form labels: 600
- Buttons: 600
- Body copy: 400–500
- Metadata, addresses, office contact details: 400–500
- Badges/eyebrows: 600
- Do not use `font-weight: 700` as a default for every small UI element.
- Do not use 800 or 900 unless those weights are confirmed as loaded in the current app.

Use `font-variant-numeric: tabular-nums;` for phone numbers, times, and numeric values if consistent with current typography rules.

---

# 8. Responsive requirements

## Desktop: 1280px and above

- top cards: 3 columns
- contact and offices: 2 columns
- form fields: 2 columns
- preserve spacious, centered composition
- body should resemble reference density; avoid excessive whitespace

## Laptop: 1024px–1279px

- retain 2-column main layout only if both cards remain comfortable
- reduce outer width and gap modestly
- avoid office-card action collision

## Tablet: 768px–1023px

- top row becomes 2 columns if needed
- main layout stacks to one column
- fields can remain two columns only if their usable width is at least ~300px each; otherwise stack
- directory card remains after form

## Mobile: below 768px

- one column throughout
- container padding: 16px
- top cards: 1 column
- primary cards: 16px radius and 20px padding
- heading: around 24px to 28px
- fields: single column
- CTA: full width and touch target at least 44px high
- allow office contact controls to wrap gracefully
- ensure no horizontal scroll at 320px width

Test at:
- 320px
- 375px
- 480px
- 768px
- 1024px
- 1280px
- 1440px

---

# 9. Accessibility requirements

- Use a semantic `<section>` for the page’s main content and a heading hierarchy with one clear page `<h1>`.
- Inputs must have visible labels; placeholders are supplementary only.
- Associate errors and helper copy with controls via appropriate IDs/ARIA attributes if the present implementation uses custom validation.
- Ensure visible `:focus-visible` states for inputs, CTA, `tel:`, `mailto:`, and directions links.
- Meet WCAG AA contrast for primary text, muted text, CTA text, badges, and focus rings.
- Do not convey status with color alone.
- Honor `prefers-reduced-motion`.
- Preserve keyboard order: page heading → information cards’ links → form fields → form CTA → office directory links.

---

# 10. Quality bar and non-goals

## Must achieve

- Clearly recognizable match to first reference image.
- Clean, white elevated cards over a warm cream canvas.
- Strong left-form/right-directory layout on desktop.
- Compact operational/contact cards at the top.
- A polished deep-red SolarARK CTA.
- Clear typographic hierarchy without excessive bold text.
- Responsive behavior that feels intentionally designed, not merely collapsed.

## Must not do

- Do not duplicate global navigation or footer.
- Do not use the second supplied image.
- Do not add hero banners, stock imagery, maps, illustration blocks, testimonials, or unrelated content.
- Do not change actual contact information, office data, routing, API calls, form submission endpoints, or business logic.
- Do not create fake directions links, fake certifications, fake support SLAs, or unapproved claims.
- Do not use excessive gradients, neon effects, huge text, card-on-card visual clutter, or deep black shadows.
- Do not hardcode layout using absolute positioning except for tiny decorative details that remain responsive.
- Do not leave unused styles, dead components, duplicate tokens, or console warnings.

---

# 11. Acceptance checklist

Before finishing:

- [ ] The desktop page matches the first image’s composition: 3 top info cards, then form left / offices right.
- [ ] Page background is warm off-white; principal cards are white.
- [ ] Form is legible, two-column on sufficiently wide screens, and single-column on small screens.
- [ ] CTA looks SolarARK-red, tactile, and full width.
- [ ] Offices display as clearly separated compact cards with address and actions.
- [ ] Every text label, input, button, link, badge, and icon has consistent alignment.
- [ ] Typography uses existing loaded font tokens and valid loaded weights only.
- [ ] No global page, router, header, footer, or business logic regression exists.
- [ ] No horizontal overflow occurs from 320px to desktop.
- [ ] Keyboard focus and contrast are visibly accessible.
- [ ] Run the project’s existing lint/build command and resolve all new errors and warnings.