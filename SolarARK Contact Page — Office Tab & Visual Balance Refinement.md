Refine the **current SolarARK Contact page implementation** shown in the supplied reference.

Do NOT redesign the whole Contact page.

The current layout is broadly correct. Make only the visual/UX corrections that improve polish, consistency and responsiveness.

---

# 1. PRIMARY ISSUE — FIX THE “AKOLA” TAB

The biggest visible problem is the office selector under:

**SolarArk Registered Offices**

Current order:

- Amravati (Headquarters)
- Chh. Sambhajinagar (Aurangabad)
- Wardha
- Akola

Currently **Akola wraps onto a second line by itself**.

This looks accidental and breaks the visual rhythm.

### Required behavior

On desktop, all four office tabs should remain in **one horizontal row**.

Use a compact, resilient layout such as:

```css
display: flex;
flex-wrap: nowrap;
gap: 8px;
```

with enough width optimization to fit all four tabs.

Reduce only unnecessary horizontal padding / gap / typography sizing enough to make the four tabs fit naturally.

Do NOT make the tabs tiny.

---

# 2. RESPONSIVE OVERFLOW

Do not solve mobile/tablet wrapping by allowing arbitrary second-row wrapping.

Instead:

### Desktop
All 4 tabs visible on one row.

### Tablet / narrow widths
Use a horizontally scrollable tab rail if necessary:

```text
overflow-x: auto;
white-space: nowrap;
```

Hide the scrollbar visually where appropriate while preserving usability.

The user should be able to swipe/scroll through the office locations.

Do NOT create a layout such as:

```text
Amravati | Sambhajinagar | Wardha
Akola
```

with a single orphaned location.

The navigation must always feel like **one connected control group**.

---

# 3. TAB CONSISTENCY

All four tabs should have:

- consistent height
- consistent vertical padding
- consistent border treatment
- consistent icon size
- consistent typography
- consistent corner radius

The active tab can remain more prominent.

### Active
**Amravati (Headquarters)**

Keep the existing SolarARK maroon active treatment.

### Inactive
Use white/very-light neutral background and subtle border.

Do not make inactive tabs colourful.

---

# 4. LABEL LENGTH

Keep the existing office names.

Do not shorten official names simply to force the layout.

However, ensure:

**Chh. Sambhajinagar (Aurangabad)**

has appropriate text sizing and padding so it does not consume excessive space.

Use a compact UI typography treatment rather than squeezing everything with tiny text.

---

# 5. ACTIVE TAB HIERARCHY

The active state currently uses a strong maroon pill with shadow.

Keep the brand treatment, but slightly refine it:

- strong enough to identify the selected office
- not so heavy that it dominates the entire map section
- subtle shadow
- clear white text
- same height as inactive tabs

The active state should communicate:

**“This is the location currently shown on the map.”**

---

# 6. DO NOT CREATE A SECOND ROW JUST FOR SPACE

Do not solve the issue by giving the tabs more vertical space.

The best solution is horizontal composition.

The hierarchy should remain:

```text
Regional Footprint & Map
↓
SolarArk Registered Offices
↓
One compact office selector row
↓
Map
```

Keep the selector visually close to the heading and map.

---

# 7. CONTACT CARDS — SMALL REFINEMENT ONLY

The three contact cards at the top are now acceptable.

Do NOT redesign them again.

Make only subtle corrections:

### Contact hierarchy

Primary:

**+91 7080909590**

Secondary:

**info@thesolarark.com**

Supporting:

**Mon – Sat: 9:30 AM – 7:00 PM**

The small pills:

- INSTANT CALL
- OFFICIAL EMAIL
- OPEN 6 DAYS

should remain secondary.

Do not let those pills become stronger visual elements than the actual contact information.

Reduce their visual prominence slightly if necessary.

---

# 8. TYPOGRAPHY

Use the already-approved SolarARK typography system.

Do not introduce new fonts.

Office tabs:

- Instrument Sans
- medium/semibold weight
- compact but readable

Section heading:

- Space Grotesk

Map information:

- Space Grotesk for important location name
- Instrument Sans for address/details

Do not use excessive font-weight 700 for small labels.

---

# 9. SPACING CORRECTION

The space between:

**SolarArk Registered Offices**

and the tabs is currently slightly loose.

Tighten the relationship slightly.

Desired flow:

```text
Heading
Subheading
Small gap
Office tabs
Small gap
Map
```

Do not increase section height.

---

# 10. MAP RELATIONSHIP

The office selector should clearly feel like a **control for the map**.

When the user selects:

- Amravati
- Chh. Sambhajinagar
- Wardha
- Akola

the map/card content should update exactly as it already does.

Do NOT alter map functionality.

Do NOT change address data.

Do NOT change the Google Maps integration.

Only improve the selector presentation.

---

# 11. MAP INFO CARD

The current map information card is useful.

Keep it.

Only ensure:

- it does not unnecessarily cover important map content
- it remains readable
- contact details fit without awkward wrapping
- the address hierarchy is clear

Do not redesign the map.

---

# 12. FORM SECTION

The left-side:

**Request a Free Solar Site Assessment**

is already structurally good.

Do not redesign it.

Only ensure typography and spacing remain consistent with the global design system.

Do not change:
- field names
- validation
- business logic
- CTA text
- submission flow

---

# 13. DESKTOP TARGET

At desktop widths around 1280–1440px, the office selector should visually resemble:

```text
[ Amravati (Headquarters) ] [ Chh. Sambhajinagar (Aurangabad) ] [ Wardha ] [ Akola ]
```

All four should be on the same baseline.

No orphaned second-row button.

---

# 14. RESPONSIVE TARGET

### 1440px
All four tabs visible on one row.

### 1280px
All four visible on one row if naturally possible.

### 1024px
Prefer one row; otherwise allow controlled horizontal scrolling.

### 768px
Horizontal scrollable tab rail.

### 430px
Horizontal scrollable tab rail.

### 390px
Horizontal scrollable tab rail.

Never produce an awkward single wrapped tab.

---

# 15. IMPORTANT — PRESERVE THE CURRENT DESIGN

Do not redesign:

- page structure
- contact form
- map
- office content
- address information
- global colour system
- global typography system
- navigation
- routing
- form functionality

This is a **precision refinement**, not a new page design.

---

# FINAL DESIGN GOAL

The Contact page should feel like a polished professional solar company's operational contact page.

The specific improvement we need is:

**No accidental wrapping.  
No orphaned Akola tab.  
One cohesive office selector.  
Clear active state.  
Better rhythm.  
No unnecessary redesign.**

Fix the layout through **spacing, sizing, flex behavior and responsive overflow**, not through adding more decoration.