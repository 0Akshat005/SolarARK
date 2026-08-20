Replace the **existing testimonial/leadership quote section completely** with a new full-section composition based on the supplied reference image.

This is a **section redesign**, not a card redesign.

## CORE DIRECTION

The new section must occupy the full available content width and feel like an **editorial brand statement / leadership endorsement**, not a white card floating on the page.

### DO NOT create:
- A centered white card
- A bordered card
- A boxed testimonial
- A dashboard-style component
- Excessive rounded containers
- Unnecessary shadows
- A small profile/avatar testimonial

Instead, create one **open, full-width visual section** where the image and typography belong to the same composition.

---

# 1. SECTION COMPOSITION

Use the supplied reference image as the visual direction.

Create a wide horizontal layout:

**LEFT ≈ 45% → large portrait/visual**  
**RIGHT ≈ 55% → quote + attribution**

The entire section should breathe edge-to-edge within the site's normal content container, but there should be **no visible enclosing card boundary**.

The background should be a subtle warm off-white / ivory rather than pure white.

Use the page background and section background as one continuous visual surface where possible.

### Overall feeling

Think:

**premium corporate editorial statement**

not:

**testimonial widget**

---

# 2. USE THE REAL PERSON IMAGE

This is critical.

Use the **actual supplied Shrikant Tikhile photograph** already provided for the project.

Do NOT:
- generate a new face
- redraw the person
- replace his face
- use an AI-generated portrait
- change facial identity
- heavily beautify the person
- distort facial proportions

The supplied original image should remain the source of truth.

You may:
- crop
- mask
- remove/soften the original office background
- improve exposure
- improve contrast
- integrate the portrait into the composition
- extend/blend the surrounding environment where technically necessary

The person's face must remain authentic.

The portrait should become a **large visual anchor**, not a tiny circular profile image.

---

# 3. IMAGE TREATMENT

Do not place the person inside a small circle.

Use a large crop occupying roughly the left half of the section.

The image should feel integrated into the section through:

- soft edge blending
- warm atmospheric treatment
- subtle solar/environmental context
- carefully controlled background
- optional very soft circular/architectural shape behind the subject

Avoid obvious clipping or a generic rectangular photo box.

The person should appear substantial enough that the user immediately understands:

**“This is a real person behind the company.”**

---

# 4. QUOTE CONTENT — PARETO PRINCIPLE

Do not preserve the current long paragraph.

Use a concise 2–3 line message.

Preferred copy:

**“Join us in illuminating Maharashtra with clean solar energy. Together, we empower homes and build lasting livelihoods.”**

Do not add another paragraph explaining the quote.

The quote itself should carry the emotional message.

---

# 5. TYPOGRAPHY

Use the site's newly established typography system.

The quote should be the dominant textual element, but it should NOT occupy excessive vertical space.

Suggested hierarchy:

### Quote
Large, confident, highly readable.

Approximate desktop range:
**32–44px**, depending on the actual type system and available width.

Use normal editorial line-height rather than extremely tight SaaS-style typography.

### Attribution
Much smaller and quieter:

**Shrikant Tikhile**

Then:

**Director, SolarARK Projects Pvt. Ltd.**

Then optionally:

**Amravati & Nagpur Regional Solar Operations**

Do not make all three lines equally bold.

Hierarchy:

**Name → strongest**  
**Role → secondary**  
**Region/operations → tertiary**

---

# 6. QUOTE MARK

Retain the large quotation-mark motif from the reference.

But keep it restrained.

Use the SolarARK maroon/burgundy brand accent.

It should function as a visual entry point into the quote, not as decoration competing with the portrait.

Avoid multiple competing quote icons.

---

# 7. COLOR SYSTEM

Keep the overall section restrained.

Recommended:

- Background → warm ivory / off-white
- Primary text → deep navy/charcoal
- Quote accent → SolarARK maroon
- Secondary text → muted gray
- Optional atmospheric solar accent → extremely subtle champagne/warm beige

Do NOT introduce multiple bright colors.

Do NOT turn the section yellow/gold.

Do NOT use red typography throughout the quote.

Maroon should be used primarily for:
- quote icon
- small divider/accent
- name or one carefully chosen attribution detail

---

# 8. SPACING

Use the available section height intelligently.

The current implementation wastes space by centering a small card.

The new composition should be **compact but visually substantial**.

Target approximately:

**420–560px desktop section height**, depending on the final image crop.

Do NOT create a huge 800px+ testimonial section.

The user should see the complete message without excessive scrolling.

Internal spacing should feel intentional:

Image ↔ quote  
Quote ↔ divider  
Divider ↔ attribution

No excessive empty gaps.

---

# 9. BACKGROUND DETAILS

Use only subtle supporting details.

Possible elements:

- very soft solar/sun glow
- subtle warm gradient
- faint architectural curve
- extremely low-opacity line pattern
- subtle solar-panel texture in the image side

These must remain secondary.

Do NOT add:
- floating blobs everywhere
- multiple decorative circles
- excessive gradients
- glowing effects
- random icons
- unnecessary abstract illustrations

The actual person and quote are the story.

---

# 10. DESKTOP LAYOUT

Recommended structure:

```text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   LARGE REAL PORTRAIT        QUOTE                           │
│   integrated visually        “Join us in illuminating        │
│                              Maharashtra with clean solar     │
│                              energy. Together, we empower     │
│                              homes and build lasting         │
│                              livelihoods.”                   │
│                                                              │
│                              ─────                           │
│                              Shrikant Tikhile                │
│                              Director, SolarARK Projects...   │
│                              Amravati & Nagpur...             │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

The section should read as **one composition**, not two cards placed beside each other.

---

# 11. MOBILE

On mobile:

1. Portrait first
2. Quote immediately below
3. Attribution below quote

Do not shrink the person into an unreadable image.

Do not create excessive vertical whitespace.

Keep the quote approximately 24–30px depending on the global typography system.

---

# 12. REMOVE THE OLD DESIGN

Completely remove the previous implementation's:

- white testimonial card
- centered quote layout
- small circular profile photo
- excessive top/bottom whitespace
- floating quotation icon placement
- redundant spacing
- card border/shadow treatment

Do not preserve the old card and style it differently.

Actually replace the structure.

---

# 13. RESPONSIVENESS

Validate at:

- 1440px
- 1280px
- 1024px
- 768px
- 430px
- 390px

Check:

- image crop
- face visibility
- quote wrapping
- attribution hierarchy
- section height
- visual balance
- no horizontal overflow
- no awkward empty areas

---

# 14. IMPORTANT DESIGN PRINCIPLE

The section should communicate three things in a few seconds:

**REAL PERSON → REAL LEADERSHIP → REAL MISSION**

Do not overwhelm the user with information.

The portrait provides human trust.

The short quote provides mission/emotion.

The attribution provides credibility.

That is enough.

Use the **Pareto principle**: approximately 20% of the content should create 80% of the perceived credibility.

---

# 15. IMPLEMENTATION SAFETY

Do not change unrelated sections.

Preserve:

- existing global typography system
- SolarARK brand colors
- responsive architecture
- existing asset pipeline
- page routing
- SEO structure
- animations outside this section
- other testimonial/content sections

Use the supplied reference image as the visual target, but implement it natively with HTML/CSS/React components rather than inserting the screenshot itself as the section.

Before finalizing, verify that the result is clearly a **full-width editorial section and NOT a card**.

The final result should feel like a polished section from a premium renewable-energy brand website rather than a generic testimonial component.