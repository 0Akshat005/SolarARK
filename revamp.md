You are working in the SolarARK repo:
https://github.com/0Akshat005/SolarARK/tree/main

GOAL
Safely update the **global typography and colour system** so the entire website uses a locked, premium theme:

- Headings → Geist
- Body/UI → Inter
- Theme → Warm Ivory / White + Deep Charcoal + Solar Ark Maroon / Terracotta
- Style → Editorial, architectural, engineering-led, visual-heavy

Do this by updating global tokens (CSS + Tailwind config) and key components, **without breaking layout or accessibility**.[cite:188]

FONT SYSTEM

1. Install and wire fonts
   - Add self-hosted or CDN-based font faces for:
     - `Geist` (400–600)
     - `Inter` (400–600)
   - Declare font-family tokens:
     - `--font-heading: 'Geist', system-ui, sans-serif;`
     - `--font-body: 'Inter', system-ui, sans-serif;`
   - Ensure fallbacks for older browsers.

2. Usage rules (apply across site)
   - Hero / major headings (H1, large hero labels):
     - Geist, weight **500–600**
   - Section headings (H2/H3):
     - Geist **500**
   - Body copy, paragraphs, long descriptions:
     - Inter **400**
   - Buttons / nav:
     - Inter **500**
   - Small labels / eyebrow text:
     - Inter **500**, uppercase, increased letter-spacing.
   - Avoid 800/900 weights and ultra-bold text. Keep emphasis via size, spacing, and hierarchy, not heavy weights.

3. Implementation
   - Update global CSS tokens (in `src/index.css` or theme config) to use Geist/Inter for:
     - `--font-heading`, `--font-display`, `--font-body`, `--font-sans`.
   - Update utility classes (`.hero-display`, `.eyebrow`, `.btn-label`, nav links) to respect the above font + weight rules.
   - Do NOT change copy or existing font sizes; keep type scale, adjust only families and weights.

COLOR THEME

Final palette:

- **Warm Ivory (main background):** `#F7F5F0`
- **Pure White (surfaces):** `#FFFFFF`
- **Deep Charcoal (dark bands/footer):** `#151817`
- **Soft Grey (dividers/panels):** `#E6E3DD`
- **Solar Ark Maroon (accent):** `#7A211D`
- **Logo Terracotta (secondary accent):** `#B24635`
- **Muted Text Grey:** `#6C6C68`

Colour ratio target:
- ~65% Ivory/White
- ~20% real solar photography
- ~10% Deep Charcoal
- ~5% Maroon/Terracotta

Implementation:

1. Update global colour tokens:
   - Map new palette into CSS variables (bg-page, bg-section, text-heading, text-secondary, brand-maroon, brand-terra, etc.).
   - Use Warm Ivory as main page background and section backgrounds.
   - Use Deep Charcoal for footer, dark feature strips, and rare highlight bands.

2. Accent usage rules (very important):
   - **Maroon/Terracotta are accents only.**
   - Use maroon/terracotta primarily for:
     - Primary CTAs
     - Key badges / labels
     - Occasional small emphasis in headings
   - Do NOT colour entire headings red or multiple words in maroon. No “every heading has red words” pattern.
   - Keep most headings in charcoal; maroon only where it truly matters (e.g., one key phrase per page).

3. Prohibited treatments:
   - No green gradients.
   - No bright yellow accent.
   - No blue “tech solar” theme.
   - No multi-coloured icon sets; keep icons neutral or maroon/charcoal only.

SITE-WIDE UPDATES

1. Apply typography + colours to:
   - Layout shell (App, header, footer).
   - Hero sections on Home, Projects, About, Contact, Calculator.
   - Cards, buttons, badges, filters.
   - Forms and inputs.

2. Maintain:
   - Existing spacing, grid, and component structure.
   - All current functionality and routing.

3. Accessibility:
   - Ensure text contrast meets WCAG AA on Ivory and Charcoal backgrounds.
   - Check buttons and links remain clearly identifiable after colour changes.

OUTPUT
- Update the global CSS/theme and any key components necessary so the **entire site** visually follows:
  - Fonts → Geist (headings) + Inter (body/UI)
  - Palette → Warm Ivory / White + Deep Charcoal + Solar Ark Maroon/Terracotta
- Return:
  1. The updated theme / CSS token definitions.
  2. Examples of updated components (one hero, one card, one button) showing the new system in use.