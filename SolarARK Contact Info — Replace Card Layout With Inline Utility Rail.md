# SolarARK Contact Information — Replace Box Cards With an Editorial Utility Rail

Refine **only the three contact-information items at the top of the Contact page**.

The current implementation is still using three large bordered cards. This is not the desired direction.

## CRITICAL DESIGN CHANGE

**Do NOT use three cards.**

Do NOT use:

- three rectangular boxes
- individual borders around each contact item
- individual shadows
- large rounded containers
- dashboard-style cards
- equal “product card” treatment

The information is too simple to justify three large containers.

Instead, redesign this area as a **single lightweight contact utility rail / editorial information strip**.

The three contact methods should visually belong to the page itself.

---

# 1. DESIGN CONCEPT

Think:

**premium corporate contact rail**

not:

**three feature cards**

The section should feel similar to a high-end service company's contact bar:

```text
CALL SOLARARK          │          EMAIL US          │          DESK HOURS
+91 7080909590         │     info@thesolarark.com   │   Mon–Sat · 9:30–7:00
Speak directly...      │     For enquiries...       │   Sunday emergency...
```

There should be **no box around each item**.

There may be one extremely subtle shared background/surface if needed, but the preferred direction is to let the page background remain visible.

---

# 2. USE A THREE-COLUMN INLINE GRID

Create a single horizontal layout:

```text
CALL             |             EMAIL             |             HOURS
```

Use approximately:

- Call: 36%
- Email: 36%
- Hours: 28%

Do not make all three mechanically identical if their content naturally requires different widths.

---

# 3. REMOVE THE LARGE CARDS

Remove:

- card border
- card shadow
- large rounded corners
- individual card background
- unnecessary internal padding
- excessive vertical whitespace

The current cards consume too much visual and physical space.

The entire contact rail should be roughly **110–150px tall on desktop**, depending on typography and surrounding section spacing.

The information should feel compact.

---

# 4. ICONS

Keep the three icons, but make them smaller and more refined.

Use:

### Call
Phone icon

### Email
Envelope icon

### Hours
Clock icon

Do NOT place each icon inside a large colored square.

Instead use either:

### Option A — small icon beside the label

```text
☎  CALL SOLARARK
```

or:

### Option B — tiny circular/soft icon treatment

with approximately 32–38px diameter.

Prefer Option A if it looks cleaner.

The icon should support recognition, not become a decorative focal point.

---

# 5. LABELS

Replace the verbose labels with concise labels.

### Call
**CALL SOLARARK**

### Email
**EMAIL US**

### Hours
**DESK HOURS**

Use:

- Instrument Sans
- 500–600
- uppercase
- subtle letter spacing
- muted/secondary colour

Do not make these labels visually dominant.

---

# 6. MAIN INFORMATION

The most important piece in each column should be the actual information.

### Call

**+91 7080909590**

Use Space Grotesk.

Make it the strongest item in the rail.

Add a subtle action affordance only if useful.

The number must be clickable:

```html
<a href="tel:+917080909590">
```

### Email

**info@thesolarark.com**

Use Space Grotesk.

Make it clickable:

```html
<a href="mailto:info@thesolarark.com">
```

### Hours

**Mon – Sat · 9:30 AM – 7:00 PM**

Use Space Grotesk.

Keep the value prominent but slightly less visually strong than the phone number.

---

# 7. SUPPORTING TEXT

Use only one short supporting line per item.

### Call

**Speak directly with our team.**

### Email

**For enquiries, proposals & documents.**

### Hours

**Sunday: emergency net-metering support**

Use Instrument Sans.

Muted colour.

Small but readable.

Do NOT reintroduce the previous verbose copy.

---

# 8. REMOVE OR MINIMIZE STATUS PILLS

The current:

- INSTANT CALL
- OFFICIAL EMAIL
- OPEN 6 DAYS

are unnecessary as large pills.

Do not place them in the top-right of each item.

If status information is genuinely useful, transform it into small inline text:

```text
Available now
Official
6 days / week
```

But first preference is to remove the status pills entirely if the information is already obvious from the content.

The contact method itself should be the hierarchy.

---

# 9. INTERNAL DIVIDERS

Use only two subtle vertical dividers:

```text
CALL       │       EMAIL       │       HOURS
```

The dividers should:

- be 1px
- use a very light neutral
- have generous vertical breathing room
- remain visually secondary

Do NOT use strong borders.

On mobile, remove the vertical dividers.

---

# 10. VISUAL HIERARCHY

The priority should be:

### 1. Contact value
Phone / email / hours

### 2. Contact label
Call SolarARK / Email Us / Desk Hours

### 3. Supporting explanation

Everything else should be secondary.

The user should scan:

**number → email → availability**

without reading a collection of badges and boxes.

---

# 11. BRAND COLOR

Keep SolarARK's existing restrained palette.

Suggested:

- Main text → deep navy
- Supporting text → muted gray
- Phone accent → SolarARK maroon
- Email → neutral/deep navy with a very subtle green semantic accent if already part of the design system
- Hours → neutral with restrained warm accent

Do NOT make each column a different bright colour.

Do NOT create a rainbow contact strip.

The page should remain visually calm.

---

# 12. SUBTLE PRIMARY-ACTION EMPHASIS

The Call item is the highest-value action.

Give it slightly stronger emphasis through:

- slightly larger number
- stronger weight
- subtle maroon accent
- clickable hover state

Do NOT put it inside another button/card.

The phone number itself is the CTA.

---

# 13. CONTACT RAIL CONTAINER

The preferred design is:

**No container at all**, if the surrounding page background allows it.

If the current page needs separation from the content above/below, use only:

- a very subtle top/bottom border
- or a thin divider line
- or very light warm surface tint

Do NOT create a large rounded rectangle around the entire rail.

This is important.

The final result should feel like **information integrated into the page**, not a component floating on the page.

---

# 14. SPACING

Use whitespace instead of boxes to create separation.

Suggested desktop structure:

```text
             CALL SOLARARK              EMAIL US                DESK HOURS

             +91 7080909590             info@...                Mon–Sat...
             Speak directly...           For enquiries...        Sunday...
                    │                       │
```

The three areas should have enough horizontal breathing room.

Avoid excessive top/bottom padding.

Target a compact section rather than a tall block.

---

# 15. RELATIONSHIP TO THE FORM + MAP BELOW

The contact rail should become a **quiet information bridge** between the page introduction and the main Contact experience.

It should not compete with:

- the Solar Site Assessment form
- Registered Offices
- map
- primary CTA

Therefore the rail must remain visually lighter than those main content areas.

This is a key reason to avoid cards.

---

# 16. MOBILE BEHAVIOUR

On mobile:

Do not create three large cards.

Use a compact vertical list:

```text
CALL SOLARARK
+91 7080909590
Speak directly with our team.
────────────────────

EMAIL US
info@thesolarark.com
For enquiries, proposals & documents.
────────────────────

DESK HOURS
Mon – Sat · 9:30 AM – 7:00 PM
Sunday: emergency net-metering support
```

Use subtle horizontal dividers.

Keep the phone and email as real links.

Do not make the mobile version unnecessarily tall.

---

# 17. ACCESSIBILITY

Ensure:

- phone is a real `tel:` link
- email is a real `mailto:` link
- focus states are visible
- text contrast is sufficient
- icons are not the only source of meaning
- touch targets are comfortable
- no information depends exclusively on colour

---

# 18. TYPOGRAPHY

Use the existing SolarARK typography system.

### Labels
Instrument Sans, 500–600.

### Contact values
Space Grotesk, 600–700 where appropriate.

### Supporting text
Instrument Sans, 400–500.

Do not introduce new fonts.

Do not increase font weight just to compensate for the removal of cards.

---

# 19. RESPONSIVE TESTING

Test at:

- 1440px
- 1280px
- 1024px
- 768px
- 430px
- 390px

At desktop:

**all three should feel like one horizontal contact rail.**

At mobile:

**all three should feel like one vertically connected information group.**

There must be no awkward wrapping, large dead space, or oversized containers.

---

# 20. DO NOT TOUCH

Do not modify:

- Contact form
- Map
- Registered office functionality
- Office selector
- Business information
- page routing
- form submission
- global brand colours
- global typography architecture
- unrelated sections

This task is specifically about the **three top contact information items**.

---

# FINAL UX GOAL

The current implementation communicates:

**“Here are three cards.”**

The new implementation should communicate:

**“Here are three simple ways to reach SolarARK.”**

The improvement must come from:

**hierarchy + whitespace + typography + proximity + subtle dividers**

rather than:

**borders + shadows + cards + badges.**

Use the Pareto principle aggressively.

These three pieces of information do not require three UI containers.

Make the design feel like it was intentionally designed for a mature renewable-energy company — **quiet, confident, efficient and premium**.