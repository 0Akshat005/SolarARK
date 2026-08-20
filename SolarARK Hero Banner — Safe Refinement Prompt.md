Update **only the SolarARK homepage hero/header area** based on the current implementation. Do not redesign unrelated sections.

### 1. Hero must become video-first
Remove **all content currently sitting on top of the hero background video**, including:

- “PM SURYA GHAR AUTHORIZED EPC PARTNER” pill
- “Power your home.”
- “Pay less every month.”
- Hero description paragraph
- “Get Free Solar Estimate” CTA
- “See How Much You Can Save” CTA
- The small benefit row: “60-second estimate • No obligation • End-to-end support”

The hero should now function as a **clean, immersive background-video experience**.

Keep the existing **background video file** and its current implementation. Do not replace, crop unnecessarily, or recreate the video.

### 2. Hero composition
The hero should contain:

- The existing background video only
- Full-bleed width
- Correct responsive height
- `object-fit: cover` / equivalent behavior
- No visible text, cards, buttons, badges, or floating UI over the video
- No unnecessary heavy dark overlay

Keep only a **very subtle cinematic darkening/gradient if technically necessary** to maintain visual depth and prevent the video from looking washed out. It should not look like the previous text-readability overlay.

The result should feel like a **premium solar-energy website hero**, not an empty section.

Do not reduce the visual impact of the video.

### 3. Move the PM Surya Ghar pill below the hero
Take the existing:

**“PM SURYA GHAR AUTHORIZED EPC PARTNER”**

pill and remove it from the hero overlay.

Place it **immediately below the hero section**, as part of the next content flow.

Important:
- It should NOT remain absolutely positioned over the video.
- It should scroll naturally with the page.
- Give it enough top/bottom spacing so it looks intentionally placed rather than accidentally detached.
- Visually make it feel like a small transition element connecting the cinematic hero to the actual homepage content.
- Preserve its existing styling, icon, typography and brand treatment unless a small spacing adjustment is required.
- Do not make it excessively large.

Desired relationship:

`HEADER → FULL VIDEO HERO → PM SURYA GHAR PILL → NEXT HOMEPAGE CONTENT`

### 4. Increase SolarARK logo size
Increase the **SolarARK logo in the header slightly**.

Do not make it oversized.

Target a premium proportion:
- Desktop logo height: approximately **42–46px**
- Keep width automatically proportional
- Maintain comfortable clearance from the header edges
- Do not increase the header height unnecessarily
- Keep the logo visually stronger than the current version while preserving the existing navigation balance

The logo should feel like the **primary brand anchor** without competing with the navigation or CTA.

Check the logo at:
- Desktop
- Tablet
- Mobile

On mobile, scale it proportionally rather than allowing it to dominate the header.

### 5. Preserve everything else
Do **not** alter unnecessarily:

- Navigation structure
- Navigation labels
- Header CTA
- Phone button
- Header spacing system
- Typography system
- Brand colors
- Existing video asset
- Existing responsive behavior outside this modification
- Below-the-fold sections
- Existing functionality
- SEO/content structure
- Performance optimizations already implemented

Do not introduce new libraries or unnecessary components.

### 6. Critical visual goal
The final hierarchy should be:

**1. SolarARK logo + navigation**  
**2. Cinematic full-width solar video**  
**3. PM Surya Ghar authorization pill below the hero**  
**4. Existing homepage content**

The hero should now feel **cleaner, more premium, less cluttered, and more visually immersive**.

Do not compensate for the removed hero content by adding new text or decorative elements.

Before finishing, verify:
- No old hero text remains in the DOM/visual layer.
- The video still loads and plays correctly.
- The pill is truly below the hero and scrolls normally.
- The logo is noticeably larger but still balanced.
- No layout shift or unwanted gap has been introduced between hero and the next section.
- Desktop and mobile both remain polished.