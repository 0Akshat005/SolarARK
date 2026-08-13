## IMPORTANT — Fix the Actual Hero Container, Not Just the Spacing

The current implementation still has the same visual problem shown in the latest screenshot.

**DO NOT make another cosmetic adjustment. Inspect and fix the actual hero section height/layout.**

### What is still wrong

The hero background image is currently ending too early.

The screenshot shows:

- the solar house is still visually active at the bottom
- the balcony/terrace is still visible
- the cityscape continues downward
- then the hero suddenly stops at a horizontal line
- the next section's sky/image immediately appears underneath

This creates the appearance that the hero image has been **cut or sliced horizontally**.

The problem is NOT:
- headline position
- CTA position
- trust badge
- image fade
- adding more padding around the content

The problem is:

> **The actual hero section/background container is too short.**

---

# 1. Inspect the actual hero DOM and CSS first

Before changing anything, identify:

- the outer hero section/container
- the hero background-image layer
- any absolutely positioned image layer
- the content wrapper
- the navbar wrapper
- the next section immediately following the hero

Check for properties such as:

```css
height
min-height
max-height
100vh
100svh
100dvh
overflow: hidden
position: absolute
inset
background-size: cover
aspect-ratio
```

Also check whether the background image is attached to a child element whose height is smaller than the hero itself.

This is critical.

---

# 2. Make the hero itself substantially taller

The hero must extend far enough downward for the complete visual composition to finish naturally.

Do NOT just add bottom padding to the text.

Do NOT just move the content upward/downward.

Do NOT simply change the next section's margin.

Instead, increase the **actual hero section height**.

### Desktop target

The hero should occupy approximately the full visible first-screen composition.

Use a responsive minimum height rather than a fragile fixed height.

A good starting point is conceptually:

```css
.hero {
    min-height: clamp(720px, 92vh, 900px);
}
```

However, **inspect the existing layout first and tune the value based on the actual navbar + hero composition**.

The important requirement is not the exact number.

The important requirement is:

> **The bottom of the hero must be lower than it currently is by enough to reveal the complete lower portion of the image.**

---

# 3. The background image MUST extend with the hero

This is extremely important.

If the hero uses a separate background/image layer such as:

```css
.hero-image
.hero-bg
.hero-background
.hero-visual
```

that layer must have the **same effective height as the hero**.

Do NOT leave a child image at the old height while increasing the parent height.

The final relationship must be:

```text
┌───────────────────────────────┐
│           HERO                │
│                               │
│       CONTENT       SOLAR     │
│                    HOUSE      │
│                    PANELS     │
│                               │
│                    BALCONY   │
│                    PLANTS    │
│                    CITY      │
│                               │
│        COMPLETE IMAGE        │
└───────────────────────────────┘
          NEXT SECTION
```

NOT:

```text
HERO CONTAINER
┌───────────────────────────────┐
│                               │
│        CONTENT + IMAGE        │
│                               │
├──────── IMAGE ENDS HERE ──────┤  ← WRONG
│        NEXT SECTION           │
└───────────────────────────────┘
```

---

# 4. Do NOT crop the image at the current boundary

The current image composition is already good.

Preserve:

- solar panels
- rooftop
- house facade
- balcony
- plants
- cityscape
- warm sunset atmosphere

The lower portion of the image must remain visible.

Do not solve the problem by zooming the image so aggressively that the lower house disappears.

Use:

```css
background-size: cover;
```

or the equivalent responsive image implementation, but adjust its positioning only as much as needed.

Prefer a natural composition such as:

```css
background-position: center center;
```

and then fine-tune only if necessary.

---

# 5. Remove the false “section transition” completely

There should NOT be a large gradient between the hero and next section.

Remove any implementation resembling:

```css
linear-gradient(..., transparent, white)
```

that occupies a large percentage of the hero.

Also remove:

- oversized pseudo-element fades
- bottom blur effects
- white overlays extending hundreds of pixels
- duplicated background imagery
- transparent overlays that reveal the next section

The hero should remain visually intact until its actual bottom.

---

# 6. Let the hero end naturally

The correct visual sequence is:

```text
NAVBAR
↓
HERO CONTENT
↓
SOLAR HOME
↓
BALCONY / LOWER VISUAL DETAIL
↓
CITYSCAPE
↓
CLEAN HERO BOUNDARY
↓
NEXT SECTION
```

There should be no dramatic “fade out.”

A very subtle transition of **20–30px maximum** can be used only if genuinely necessary.

A hard but visually clean boundary is preferable to a huge fade.

---

# 7. Do NOT pull the next section upward

Do not attempt to solve this using:

```css
margin-top: -...
transform: translateY(...)
position: relative;
top: -...
```

on the next section.

That would merely hide the real problem.

The next section should simply begin **after the hero is complete**.

---

# 8. Ensure the hero is not clipped by overflow

Inspect for:

```css
overflow: hidden;
```

on the hero and its parent containers.

`overflow: hidden` is fine if the background belongs inside the hero, but make sure the image itself is not being clipped by a smaller nested wrapper.

Pay particular attention to:

```css
.hero
.hero-content
.hero-background
.hero-image-wrapper
```

and any absolute positioning.

---

# 9. Keep the content where it currently works

Do NOT redesign the hero content.

Keep:

**Power your home.**  
**Pay less every month.**

Keep the existing supporting copy, CTA, secondary CTA and trust message.

They are not the current problem.

Only make tiny vertical adjustments if the newly extended hero requires improved balance.

---

# 10. The hero should feel complete before the next section

At the current screenshot width, the hero should extend noticeably farther down than it does now.

Do not stop it immediately below the trust pill.

There needs to be sufficient visual room beneath the trust content for the background scene to continue naturally.

The trust pill does NOT define the bottom of the hero.

The **image composition defines the bottom of the hero**.

---

# 11. Desktop acceptance test

After implementation, open the page at approximately:

### 1440 × 900

and

### 1920 × 1080

Inspect the hero.

The following must be true:

✅ Solar panels are fully visible.

✅ House and balcony remain visible.

✅ Lower cityscape remains visible.

✅ No horizontal “cut” appears through the image.

✅ No large white fade appears.

✅ The next section does not visually intrude into the hero.

✅ Hero background and hero container end at the same location.

✅ The hero feels like one complete photographic composition.

---

# 12. Mobile/tablet

Do not simply copy the desktop height.

Use responsive values so the hero remains appropriately framed.

On mobile, prioritize:

1. headline readability
2. solar/home visibility
3. correct visual crop
4. natural hero ending

---

# FINAL REQUIREMENT

Do not report this task as complete until you have visually verified that the horizontal boundary seen in the attached screenshot has moved **downward because the actual hero container/background has become taller**.

I specifically do NOT want:

> "I adjusted the spacing."

I want:

> **"The hero section itself now extends farther down, the background image extends with it, and the next section begins only after the hero composition is complete."**

Make the actual structural/CSS change necessary to achieve that result.