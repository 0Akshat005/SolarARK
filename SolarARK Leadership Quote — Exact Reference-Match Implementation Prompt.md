Refine the **existing leadership/testimonial section** to match the supplied reference image as closely as possible.

### IMPORTANT — THIS IS NOT A CARD

The supplied reference is a **full-width editorial composition**.

Do NOT interpret it as:

- image card + text card
- testimonial card
- two separate boxed columns
- floating white container
- rounded profile card
- dashboard component

The biggest implementation mistake to avoid is creating a visible rectangular image box with a separate text block beside it.

The **image, background and typography must visually belong to one continuous section.**

---

# 1. TARGET COMPOSITION

Use the supplied reference image as the direct visual target.

Overall structure:

```text
FULL-WIDTH WARM IVORY SECTION
────────────────────────────────────────────────────────

        LARGE INTEGRATED PORTRAIT
        + solar/sunset environment
                     │
                     │
                     │        QUOTE
                     │        ─────
                     │        ATTRIBUTION
                     │
────────────────────────────────────────────────────────
```

The section should feel like a **single editorial canvas**.

There must be NO enclosing card around the whole section.

There must be NO separate visible card around the portrait.

There must be NO visible border separating image and text.

---

# 2. IMAGE MUST FEEL INTEGRATED

Use the supplied reference image as the exact visual direction.

The portrait must occupy approximately **40–45% of the section width**.

It should visually blend into the warm ivory background.

### Critical:

Do NOT use:

```css
border-radius: 20px;
box-shadow: ...
background: white;
```

on a normal rectangular image card.

Instead, the image should behave like an **art-directed visual composition**:

- Large crop
- Soft edge transition
- Warm atmospheric blending
- Solar/sunset environment extending around the subject
- Background fading naturally into the section
- No obvious rectangular image boundary

The lower edge of the image may dissolve/blend into the section background rather than stopping as a hard rectangle.

The supplied person's face must remain authentic.

Do not regenerate or replace the person.

---

# 3. SECTION BACKGROUND

Use a very subtle warm ivory:

```css
background: #F7F3EC;
```

or an equivalent slightly warm neutral from the existing SolarARK design system.

The background should feel almost continuous with the surrounding page.

Do NOT place a large white rectangle inside this background.

Do NOT create a second nested background panel.

---

# 4. IMAGE COMPOSITION

The portrait should be visually large enough to establish human credibility immediately.

Approximate relationship:

- Subject + environment: ~45%
- Quote/content: ~55%

The subject should occupy most of the visual height.

Use the solar/sunset environment as part of the composition.

The solar panels should remain visible enough to establish the renewable-energy context.

The circular warm halo behind the subject may remain, but keep it subtle.

Do not add additional decorative shapes unnecessarily.

---

# 5. QUOTE

Use this exact concise copy:

**“Join us in illuminating Maharashtra with clean solar energy — together, we empower homes and build lasting livelihoods.”**

The reference should be treated as a **2–3 line desktop composition**.

Do not allow it to become a 4–5 line oversized paragraph.

This means:

- constrain the text width intelligently
- use a moderate display size
- adjust line height
- avoid excessive font weight
- do not make the text column unnecessarily narrow

The quote should be substantial, but not visually overpower the person.

---

# 6. TYPOGRAPHY

Use the established SolarARK typography system.

Do NOT introduce another font.

### Quote

Use a premium display treatment.

Approximately:

- Desktop: 32–40px
- Tablet: 28–34px
- Mobile: 24–29px

Exact value should be adapted to the site's typography tokens.

Line height:

approximately 1.15–1.25.

The quote should feel editorial rather than like a gigantic hero heading.

### Color

Use deep navy/charcoal.

Do NOT use red typography for the quote.

---

# 7. QUOTE MARK

Use one subtle SolarARK maroon quotation mark.

Place it above the quote as shown in the reference.

It should be:

- compact
- recognizable
- elegant
- visually connected to the text

Do NOT use giant floating quote marks in the background.

Do NOT duplicate quote icons.

---

# 8. HORIZONTAL RULE

Keep the small maroon horizontal rule beneath the quote.

Use it as a visual bridge to the attribution.

It should be short and subtle.

Approximate:

```css
width: 48px–64px;
height: 2px;
```

No huge divider.

---

# 9. ATTRIBUTION

Use:

**Shrikant Tikhile**

**Director, SolarARK Projects Pvt. Ltd.**

**Amravati & Nagpur Regional Solar Operations**

Hierarchy:

1. Name → strongest
2. Role/company → secondary
3. Regional operations → muted

Do not turn the attribution into another card.

Do not add biography.

---

# 10. SPACING

The current implementation has too much empty space and the previous version became too boxy.

Use the available section width efficiently.

Suggested desktop structure:

```text
Section padding:
~72–96px horizontal

Image:
~40–45% width

Content:
~45–50% width

Gap:
~56–80px
```

The exact values should adapt to the existing container system.

Vertical section size should be approximately:

**400–500px on desktop**

Do NOT create a giant testimonial section.

The reference should feel compact and premium.

---

# 11. ALIGNMENT

Vertically center the overall composition.

The quote should sit approximately around the visual center of the portrait.

Do NOT put the quote excessively high.

Do NOT center every individual element mechanically.

Use visual alignment rather than purely mathematical centering.

The face should remain one of the strongest focal points.

The quote should be the second strongest focal point.

---

# 12. REMOVE THE “IMAGE CARD” LOOK

Explicitly remove/reduce:

- rectangular border
- card shadow
- prominent corner radius
- isolated white image background
- separate image container
- visual separation line between image and text

The image should feel like it is **part of the page itself**.

The reference image should appear possible to recreate with normal HTML/CSS composition rather than a `<Card>` component.

---

# 13. DO NOT ADD DECORATION JUST TO FILL SPACE

Avoid:

- extra blobs
- excessive gradients
- multiple circles
- floating icons
- abstract illustrations
- statistics
- badges
- CTA buttons
- unnecessary labels

The visual story is already strong:

**real person + solar environment + concise leadership statement**

That is enough.

---

# 14. RESPONSIVE BEHAVIOR

### Desktop

Two-column editorial composition.

### Tablet

Maintain the visual relationship but reduce image/content proportions carefully.

### Mobile

Stack:

1. Integrated portrait
2. Quote mark
3. Quote
4. Divider
5. Attribution

The portrait should remain large enough to preserve human recognition.

Do not force the image into a tiny avatar.

Do not create a separate card on mobile.

---

# 15. IMAGE HANDLING

Use the supplied project image/reference as the visual source.

The person must NOT be AI-regenerated.

Preserve the person's actual facial identity.

Allowed image processing:

- crop
- resize
- exposure adjustment
- contrast adjustment
- subtle color grading
- background blending
- masking
- soft edge fade

Not allowed:

- face regeneration
- face replacement
- identity changes
- artificial facial enhancement
- changing clothing/personality

---

# 16. VISUAL PRIORITY

The final section must communicate in this order:

### 1.
**Real leader**

### 2.
**Real solar context**

### 3.
**Real mission**

### 4.
**Credibility through attribution**

Everything else is secondary.

---

# 17. REFERENCE-MATCH CHECK

Before completing implementation, compare the result directly against the supplied reference and ask:

- Does it look like ONE section rather than two cards?
- Is the image visually integrated?
- Is there any obvious rectangular image boundary?
- Is there a visible container around the whole composition?
- Is the person large enough?
- Is the quote only 2–3 lines on desktop?
- Is there excessive empty space?
- Is the typography proportional to the portrait?
- Does the section feel premium and editorial?
- Does the composition use the available width effectively?

If the answer to any of these is “no”, refine before finishing.

### CRITICAL FINAL RULE

Do NOT create a “card version” of the reference.

The reference should be interpreted as an **open, full-width editorial section with an integrated portrait and a concise leadership quote**.

The implementation should look as though the image naturally belongs to the page background, with the typography visually emerging beside it — not as though a designer placed two separate boxes side-by-side.