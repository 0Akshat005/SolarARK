# SolarARK Hero Section — Production Implementation Prompt

You are implementing the **homepage hero section for the SolarARK website**.

Reference website: **https://www.thesolarark.com/**

The goal is **not to copy another website**. The goal is to create a distinctive, premium, trustworthy SolarARK hero inspired by the visual principles we discussed: real project footage, cinematic composition, restrained overlays, strong hierarchy, and proof-driven design.

The final result must feel like a **real Indian renewable-energy EPC company with genuine installations**, not an AI-generated concept, generic SaaS landing page, WordPress template, or over-designed marketing mockup.

---

## 1. FIRST: INSPECT THE EXISTING SOLARARK WEBSITE

Before changing the hero:

1. Open and inspect **https://www.thesolarark.com/**.
2. Study the existing:
   - logo
   - brand colors
   - typography
   - navigation
   - existing hero content
   - hero video
   - CTA labels
   - contact information
   - existing icons/assets
   - responsive behavior
   - existing spacing and design language
3. Preserve any legitimate existing SolarARK content unless there is a clear UX reason to refine it.
4. Do **not invent company claims, statistics, awards, certifications, addresses, project counts, ratings, or performance figures** that are not already supported by the existing website/content.

The official website is the source of truth for SolarARK's actual brand/content.

---

# 2. IMPORTANT: USE THE REAL HERO VIDEO FROM THE OFFICIAL SITE

The hero should use the **actual real-world project video from the official SolarARK website**, not an AI-generated background and not a stock video.

### Requirement

Locate the hero/background video currently used on:

**https://www.thesolarark.com/**

Because the site is JavaScript-driven, inspect the rendered page and network/assets rather than relying only on the initial HTML.

Look for:

- `<video>`
- `<source>`
- MP4/WebM files
- video poster images
- CDN asset URLs
- background video assets
- dynamically loaded media
- bundled/static media references

### Download/copy the actual asset

Download/copy the **highest-quality usable hero video** from the official client site into the project assets, preferably:

```text
/public/videos/solarark-hero.mp4
```

If the website exposes multiple versions:

- choose the highest-quality practical version
- prefer MP4/H.264 for compatibility
- retain the original aspect ratio
- do not transcode unnecessarily
- do not visually alter the footage
- do not substitute AI imagery

If there is a mobile-specific video, use it responsively.

### Critical authenticity rule

The actual footage must remain visibly authentic.

Do NOT:

- replace it with generated imagery
- add artificial solar panels
- add fake buildings
- add fake people
- generate cinematic effects over the solar installation
- excessively color-grade it
- blur the installation
- make the video look like a stock advertisement

The real solar installation is one of the strongest trust signals in the hero.

---

# 3. CORE DESIGN CONCEPT

The hero must communicate:

> **“This company actually installs solar systems in the real world.”**

The video is therefore the **main visual character**.

Do not cover the most important portion of the solar installation with UI.

The design should feel like a cinematic editorial layer sitting **on top of a genuine project video**.

Think:

**Real project → Trust → Understanding → Savings → CTA**

rather than:

**Decorations → Cards → Statistics → CTA**

---

# 4. HERO BACKGROUND TREATMENT

Use the real SolarARK video full-bleed.

Recommended:

```css
.hero {
  position: relative;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

Create subtle readability overlays.

### Overlay hierarchy

Use a restrained layered gradient rather than a heavy black filter.

Conceptually:

```text
LEFT
████████████░░░░░░░░░░
darkest      transparent
          →

TOP
very subtle dark veil

BOTTOM
subtle dark transition
```

The left side should provide enough contrast for the headline while preserving the natural colors of the project.

### Important

The overlay must **NOT**:

- make the entire hero dark
- kill the brightness of the solar panels
- make the project footage look artificial
- cover the SolarARK logo unnecessarily

The logo/header region should remain visually clean.

---

# 5. HEADER / NAVIGATION

Use the existing SolarARK navigation structure/content where appropriate.

Recommended visual treatment:

### Header

Transparent / glass-light header over video.

Keep it lightweight.

Left:

**SolarARK logo**

Center:

- Home
- About Us
- Services
- Earn with us
- Our Projects
- Careers
- Gallery
- Contact Us

Right:

**Call Now**

**Get A Quote →**

### Header behavior

At initial load:

- transparent
- minimal
- no giant solid box

On scroll:

- add subtle backdrop blur
- slight translucent background
- preserve readability

### Important

Do not place a strong dark gradient directly over the SolarARK logo.

The logo should remain immediately recognizable.

---

# 6. HERO CONTENT HIERARCHY

Use the SolarARK messaging already established in the current design.

### Eyebrow / trust badge

Use:

**PM SURYA GHAR AUTHORIZED EPC PARTNER**

Keep it compact and premium.

Avoid making it look like a generic SaaS pill.

---

### Main headline

Use:

**Power your home.**

Then:

**Pay less every month.**

The first line should be the dominant headline.

The second line uses SolarARK red.

Suggested hierarchy:

```text
Power your home.
Pay less every month.
```

Large, bold, highly readable.

Do not make the headline excessively huge at the expense of the real video.

---

### Supporting copy

Use the strongest existing SolarARK-approved content.

Preferred direction:

> Harness clean rooftop solar energy for your home. Slash your monthly electricity bills by up to 90% with turnkey installation and seamless government subsidies.

However:

Before implementation, verify this exact claim against existing SolarARK content and retain only supported wording.

The paragraph should be approximately 2–3 lines on desktop.

---

# 7. PRIMARY CTA

Primary button:

**Get Free Solar Estimate →**

Visual:

- SolarARK red
- white text
- slightly rounded corners
- subtle hover lift
- clean arrow interaction

The CTA must be immediately understandable.

Avoid:

- excessive gradients
- excessive glow
- animated gimmicks

---

# 8. SECONDARY CTA

Secondary:

**See How Much You Can Save ↗**

or, if an existing official SolarARK calculator uses a different approved label, use that existing label.

The secondary CTA should visually support the primary CTA without competing with it.

Use:

- transparent / glass / soft-light treatment
- dark text on readable background
- restrained border

---

# 9. REASSURANCE MICROCOPY

Directly below the CTA:

```text
✓ 60-second estimate   •   No obligation   •   End-to-end support
```

Use actual approved wording from SolarARK where available.

This is important psychologically because it reduces fear of clicking the CTA.

Keep it small.

Do not turn these into three unnecessary cards.

---

# 10. PROJECT SPOTLIGHT — IMPORTANT NEW ELEMENT

Because the hero footage is a real SolarARK installation, create a small contextual label in a low-distraction area, preferably bottom-right.

Example:

```text
PROJECT SPOTLIGHT

Industrial Rooftop Installation
Maharashtra, India
```

Only use this exact location/project description if it is actually supported by the video/site.

Otherwise:

```text
PROJECT FOOTAGE

SolarARK Installation
```

This element should visually communicate:

> “You're looking at a real project.”

### Add subtle video controls

Near the project label:

- Play/Pause
- Mute/Unmute

Do not make the controls visually dominant.

Use small circular controls with subtle translucency.

---

# 11. REPLACE THE LARGE GENERIC BENEFIT BAR

Do NOT reproduce the oversized white 4-column floating card previously used in the old concept.

That approach looks too much like a conventional landing-page template and hides the actual project footage.

Instead create a **cinematic proof rail**.

### Proof rail structure

A dark translucent horizontal rail near the bottom:

```text
REAL PROJECTS
Solar installations across Maharashtra

|

QUALITY COMPONENTS
Tier-1 technology & engineering

|

COMPLETE EPC
Design → Install → Commission

|

AFTER-SALES SUPPORT
Long-term assistance when you need it
```

Only use claims that are actually supported by SolarARK content.

### Design

- dark translucent background
- approximately 75–85% opacity
- soft backdrop blur
- extremely subtle border
- rounded corners
- thin separators
- small refined line icons
- generous horizontal spacing
- no oversized illustrations
- no bright gradients

The rail should feel like a **premium engineering proof strip**, not a feature-card carousel.

---

# 12. WHY THE PROOF RAIL MATTERS

The hero should psychologically move the visitor through:

```text
REAL INSTALLATION
        ↓
THEY KNOW WHAT THEY ARE DOING
        ↓
THEY CAN HELP ME SAVE
        ↓
LOW-RISK FIRST STEP
        ↓
GET ESTIMATE
```

Every visual element should support this progression.

Do not add design elements merely because there is empty space.

---

# 13. DO NOT OVERLOAD THE HERO

Avoid simultaneously showing:

- too many statistics
- oversized percentage cards
- fake awards
- decorative floating cards
- excessive icons
- multiple badges
- too many trust logos
- huge feature boxes
- unnecessary illustrations

The real project video is already visually rich.

The interface should frame it.

---

# 14. VIDEO VISUAL PRIORITY

The solar installation itself must remain visible.

On desktop:

- headline occupies roughly left 38–42%
- solar installation remains dominant on right
- project label sits over a lower-detail area
- proof rail does not completely hide the most important panel area

Use intelligent positioning based on the actual video rather than blindly centering everything.

If the video framing changes:

- adjust overlay
- adjust content max-width
- adjust project label position
- adjust proof rail position

Do not crop away the solar installation just to make the layout easier.

---

# 15. CINEMATIC QUALITY

The result should feel:

- cinematic
- premium
- trustworthy
- warm
- human
- technically competent
- Indian-market relevant
- established
- calm
- confident

Avoid:

- overly dark cyberpunk solar aesthetic
- fake futuristic holograms
- excessive glassmorphism
- neon green energy effects
- generic AI-generated landscapes
- overly polished stock-photo look
- startup/SaaS dashboard aesthetics

SolarARK should feel like an **engineering-led renewable-energy brand**.

---

# 16. COLOR SYSTEM

Base on the existing SolarARK identity.

Primary:

- deep navy / charcoal for readability
- SolarARK red for brand/action
- warm off-white
- restrained gold/yellow only for small emphasis

Do not introduce unrelated neon green as a dominant brand color.

Green may appear naturally in the actual footage.

---

# 17. TYPOGRAPHY

Use the project's existing font if one is already established.

Otherwise use a modern professional sans-serif.

Recommended character:

- bold
- clean
- slightly editorial
- highly legible

Headline:

large and assertive.

Body:

comfortable line-height.

Navigation:

compact and refined.

Avoid:

- overly geometric futuristic fonts
- excessive letter spacing
- thin low-contrast text

---

# 18. RESPONSIVE DESIGN

Desktop is the primary reference, but implement properly for:

### Large desktop
1600px+

### Standard desktop
1280–1440px

### Tablet
768–1024px

### Mobile
320–767px

On mobile:

- prioritize the headline
- maintain real video
- crop intelligently
- keep SolarARK logo visible
- preserve CTA hierarchy
- move proof rail into a compact horizontal scroll or stacked proof list
- move Project Spotlight lower
- ensure controls remain accessible
- do not allow content to cover the main solar panels unnecessarily

---

# 19. VIDEO PERFORMANCE

Because this is a real hero video:

- autoplay
- muted
- playsInline
- loop
- preload intelligently
- use poster image
- ensure graceful fallback
- avoid blocking page rendering
- optimize loading
- preserve good visual quality

Example behavior:

```html
<video
  autoplay
  muted
  loop
  playsinline
  preload="metadata"
  poster="/images/solarark-hero-poster.webp">
</video>
```

Use the actual downloaded SolarARK asset.

Do not create a fake placeholder once the video has been found.

---

# 20. ACCESSIBILITY

Ensure:

- sufficient text contrast
- keyboard-accessible CTAs
- accessible labels for video controls
- reduced-motion support
- semantic heading hierarchy
- proper button/link semantics
- mobile touch targets
- no essential information exists only inside the video

If `prefers-reduced-motion` is enabled:

- stop autoplay
- show the poster frame
- preserve the complete hero experience

---

# 21. INTERACTION DETAILS

Keep interaction subtle and premium.

CTA hover:

- slight upward translation
- tiny shadow increase
- arrow movement

Navigation hover:

- minimal red indicator

Proof rail:

- no exaggerated card animations

Video controls:

- smooth opacity reveal

Scroll cue:

- subtle downward animation only

Do not make everything move.

---

# 22. BELOW-HERO TRANSITION

The bottom of the hero should transition naturally into the next section.

Use:

- dark-to-light fade
- controlled overlap
- or clean architectural transition

Avoid a large floating white box that visually cuts the video in half.

The hero should feel like one coherent composition.

---

# 23. IMPLEMENTATION QUALITY

Do not simply reproduce the screenshot as a static graphic.

Build it as a real production component.

Recommended architecture:

```text
Hero
 ├── HeroVideo
 ├── HeroOverlay
 ├── Header
 ├── HeroContent
 │    ├── PartnerBadge
 │    ├── Headline
 │    ├── Description
 │    ├── CTAGroup
 │    └── TrustMicrocopy
 ├── ProjectSpotlight
 ├── VideoControls
 ├── ProofRail
 └── ScrollCue
```

Keep everything reusable and responsive.

---

# 24. IMPORTANT: DO NOT CHANGE UNRELATED SECTIONS

Only modify what is necessary for the homepage hero and its immediately associated components.

Do not randomly redesign the rest of the website.

Do not introduce a new design system that conflicts with the existing SolarARK site.

---

# 25. FINAL QUALITY CHECK

Before considering the task complete, verify the following:

### Authenticity
- Real SolarARK hero video is being used.
- Video was sourced from the official SolarARK website.
- No AI-generated background is being used.
- The solar installation remains visually prominent.

### Trust
- No unsupported claims.
- No fake awards.
- No invented statistics.
- Project footage is clearly contextualized.
- CTA feels low-risk.

### Visual quality
- Hero looks premium.
- Left content is highly readable.
- Overlay is subtle, not oppressive.
- Logo remains clean and unobstructed.
- Solar panels remain the visual protagonist.
- Proof rail feels integrated rather than pasted on.

### UX
- Primary CTA is immediately obvious.
- Secondary action is clear.
- Mobile experience is strong.
- Video controls work.
- Header remains readable.
- No element unnecessarily blocks the project footage.

### Performance
- Video loads efficiently.
- Hero does not create layout shift.
- Responsive images/poster are optimized.
- Animations are restrained.
- Reduced-motion behavior works.

---

# 26. MOST IMPORTANT DESIGN PRINCIPLE

Do not ask:

> “What can we add to make the hero look impressive?”

Ask:

> **“What can we remove so the real SolarARK installation feels impressive?”**

The final hero should make a visitor feel:

**“This looks real.”**  
**“They have actually done this.”**  
**“They understand solar.”**  
**“I can trust them enough to ask for an estimate.”**

That is the success criteria.

Use the official SolarARK website as the source of truth, download and integrate its real hero video, and then implement the above system with production-quality responsive code.