# SOLARARK TYPOGRAPHY — DEBUG THE FLASH → REVERT PROBLEM

The typography implementation plan has already been executed.

There is now a specific runtime problem:

> After a hard refresh, the NEW / intended typography is visible for a brief moment, then the website switches back to the OLD typography.

This means the issue is likely **font loading, CSS cascade, runtime class application, hydration, late-loaded stylesheet, inline style, cache/service worker, or another override**.

Do NOT redesign the typography again.

Do NOT change the approved font system.

The task is to find the **exact root cause** of the flash-then-revert behaviour and fix it.

---

## 1. FIRST — REPRODUCE THE BUG

Open the deployed site and reproduce this exact sequence:

1. Normal page load.
2. Hard refresh.
3. Observe typography during the first paint.
4. Observe typography after all resources finish loading.
5. Compare the computed typography before and after the switch.

Test in:
- Chrome
- Incognito/private window if possible
- desktop
- mobile viewport

Do not assume the cause.

---

# 2. IDENTIFY EXACTLY WHAT IS CHANGING

For at least these elements, inspect the browser's **Computed Styles**:

- `<body>`
- main H1
- main H2
- card heading
- paragraph
- navigation
- button
- one metric/stat

For each element record before and after the visual switch:

```text
font-family
font-size
font-weight
line-height
letter-spacing
font-style
```

Also inspect:

```text
document.fonts.check(...)
document.fonts.status
```

The objective is to determine:

### Is the FONT changing?

Example:

```text
Space Grotesk
→
old loaded font
```

or:

### Is the CSS font-family changing?

Example:

```text
var(--font-display)
→
some hardcoded font-family
```

or:

### Is only the font WEIGHT changing?

or:

### Is a completely different stylesheet/class being applied later?

Do not proceed until this is known.

---

# 3. CHECK THE CSS CASCADE

Search the complete codebase for:

```text
font-family:
fontFamily:
font-sans
font-heading
font-body
font-display
font-main
```

Also search for:

```text
!important
```

and:

```text
style={{
```

Pay particular attention to inline styles such as:

```tsx
style={{ fontFamily: ... }}
```

Find every declaration that can override:

```css
--font-body
--font-display
--font-sans
--font-heading
```

The existing implementation already defines:

```css
--font-display: 'Space Grotesk', 'Instrument Sans', ...;
--font-body: 'Instrument Sans', ...;
--font-sans: var(--font-body);
--font-heading: var(--font-display);
```

and these variable names must remain unchanged.

Therefore, find anything overriding them later.

---

# 4. CHECK FOR LATE-LOADED STYLESHEETS

This is a high-priority investigation.

Inspect:

```text
index.html
index.css
all imported CSS files
component-level CSS
third-party stylesheets
external CSS
Google Fonts
Tailwind-generated CSS
```

Determine whether a later stylesheet is applying an old font after the intended CSS has already rendered.

Look specifically for:

- duplicate font imports
- duplicate Google Fonts links
- CSS imported after `index.css`
- third-party component CSS
- old stylesheet files still referenced
- stale compiled CSS
- generated CSS containing previous font-family definitions

Use browser DevTools:

**Network → CSS**

and determine the load order.

---

# 5. CHECK GOOGLE FONTS

The current codebase audit states that the actual project imports:

```html
Instrument Sans
Space Grotesk
```

with:

```text
display=swap
```

and the fonts are wired through the existing CSS variables.

Verify the runtime implementation exactly.

Look for:

- another Google Fonts `<link>`
- old font import still present
- duplicate `@import`
- a component injecting fonts
- an old external stylesheet
- incorrect family names
- incorrect weight requests

Do NOT add more fonts to “fix” this.

---

# 6. CHECK WHETHER THE OLD TYPOGRAPHY IS ACTUALLY A DIFFERENT FONT

Determine exactly what the user means by “old typography”.

Use DevTools → Computed → `font-family`.

Record:

```text
Expected family:
Actual family after page settles:
```

For example:

```text
Expected:
Space Grotesk

Actual:
Instrument Sans
```

or:

```text
Expected:
Instrument Sans

Actual:
some legacy font
```

Do NOT guess.

The final fix depends on the actual computed values.

---

# 7. CHECK TAILWIND v4

The existing project uses Tailwind v4 with:

```css
@import "tailwindcss";
```

and the Tailwind Vite plugin. This is intentional and should not be replaced.

Inspect how:

```text
font-sans
font-heading
```

are resolved at build time.

Confirm that Tailwind is resolving them to:

```text
font-sans → Instrument Sans
font-heading → Space Grotesk
```

Check the generated production CSS.

Do not assume the source CSS and generated CSS are identical.

---

# 8. CHECK COMPONENT OVERRIDES

The previous audit already found widespread use of:

```text
font-heading
font-bold
```

and specifically identified weight inconsistencies in several components.

Now perform a more important check:

Search every component for:

```text
font-family
fontFamily
font-sans
font-heading
font-bold
font-semibold
text-[...]
```

Pay particular attention to:

- Header.tsx
- Hero.tsx
- Footer.tsx
- TrustBar.tsx
- SavingsCalculator.tsx
- HowItWorks.tsx
- ProblemSection.tsx
- OurJourney.tsx
- GuaranteeSpotlight.tsx
- DeepDiveTeaser.tsx
- AppExperience.tsx
- HomeRoofVisualizer.tsx
- ProjectsGrid.tsx
- AboutSection.tsx
- LeadershipQuote.tsx

The previous audit explicitly stated that several of these had not yet been line-by-line checked.

Do this now.

---

# 9. CHECK INLINE STYLES

Search for:

```tsx
style={{
  fontFamily:
}}
```

and:

```tsx
fontFamily:
```

throughout the entire codebase.

An inline style can override the global typography system even when the CSS variables are correct.

Existing code already contains at least one inline `fontFamily: 'var(--font-heading)'` usage in `TrustBar.tsx`, which needs to be verified at runtime.

Find every similar case.

---

# 10. CHECK HYDRATION / RENDER TIMING

Determine whether the brief correct typography is applied:

```text
before React mounts
```

and then replaced:

```text
after React mounts
```

or:

```text
after a component state update
```

or:

```text
after a lazy-loaded component appears
```

If yes, inspect:

- conditional rendering
- className changes
- style changes
- theme providers
- layout providers
- CSS-in-JS
- component state
- animation libraries
- route transitions

The typography must not change merely because React finished rendering.

---

# 11. CHECK SERVICE WORKER / CACHE

Inspect whether the deployed application uses:

- service worker
- PWA caching
- Workbox
- aggressive browser caching
- cached CSS/JS assets
- stale Vite build assets
- old CDN assets

The hard-refresh behaviour can expose a stale-build problem.

Compare:

```text
fresh network request
vs
cached request
```

Check whether old CSS is being served from:

```text
disk cache
memory cache
service worker
CDN
```

Do not immediately tell me to “clear browser cache”.

First prove whether stale assets are involved.

---

# 12. CHECK PRODUCTION BUILD

This is essential.

Run the production build.

Then inspect the generated CSS/JS output.

Search the generated assets for old font-family names.

The final production bundle must contain only the intended typography rules.

Look for:

```text
Space Grotesk
Instrument Sans
```

and identify any unexpected old font strings.

If the source code is correct but the production bundle contains the old font, the issue is build/configuration related.

If production is correct but the browser renders the old font, the issue is runtime/cache/cascade related.

---

# 13. USE DEVTOOLS TO FIND THE WINNING RULE

For one heading that visually changes:

1. Inspect the element.
2. Open **Computed**.
3. Expand `font-family`.
4. Identify the exact stylesheet and line responsible.
5. Check which rule wins after page load.
6. Check what rule was winning before the switch.

Report:

```text
Element:
Expected font:
Final font:
Winning selector:
Winning file:
Winning line:
Earlier rule:
Why it wins:
```

This is the most important diagnostic step.

---

# 14. DO NOT “FIX” IT WITH !IMPORTANT

Do not solve the problem by adding:

```css
!important
```

to:

```css
font-family
```

unless the investigation proves there is an unavoidable third-party conflict and the scope is very narrowly justified.

The proper solution is to remove the incorrect source of the override.

---

# 15. DO NOT DUPLICATE THE FONT SYSTEM

Do NOT create another parallel typography system.

Do not rename:

```text
--font-display
--font-body
--font-sans
--font-heading
```

because the project already depends on them across hundreds of usages.

Fix the source of the override.

---

# 16. EXPECTED FINAL STATE

After the fix:

### On first paint
Correct intended typography.

### During font loading
No unexpected switch to an old font.

### After fonts finish loading
Same intended typography remains.

### After React mounts
Same typography remains.

### After route changes
Same typography remains.

### After hard refresh
Same typography remains.

### After normal refresh
Same typography remains.

### In production deployment
Same typography remains.

---

# 17. VERIFY THESE EXACT ROLES

Final computed typography should follow:

### Space Grotesk
- H1
- H2
- hero display
- card headings where intended
- major display text
- selected metrics

### Instrument Sans
- body
- navigation
- buttons
- forms
- labels
- captions
- supporting text
- normal UI

### Inter
Not loaded unless there is a newly approved explicit reason.

### Orbitron
Not loaded unless there is a newly approved explicit reason.

### Cairo
Not loaded unless there is a newly approved explicit reason.

The existing audit confirmed that only Instrument Sans and Space Grotesk are actually imported in the current codebase.

---

# 18. DO NOT DO THESE THINGS

Do not:

- redesign the website
- change the selected fonts
- add random fonts
- add another Google Fonts import
- change the global variable names
- rewrite component layouts
- change the site's content
- change colors
- modify business logic
- modify routing
- modify forms
- add `!important` everywhere
- merely tell me to clear cache

---

# 19. DELIVERABLE

Do not just say “fixed”.

Return a short root-cause report containing:

## Root Cause
Exactly what causes the typography to switch back.

## Evidence
Exact file / selector / resource responsible.

## Fix Applied
What was changed.

## Why It Fixes The Flash-Revert
Explain the loading/cascade/runtime sequence in simple terms.

## Verification
Confirm the result after:
- hard refresh
- normal refresh
- first load
- React mount
- route navigation
- production build

## Files Changed
List only the files actually changed.

---

# FINAL INSTRUCTION

Treat this as a **production debugging task**, not a typography redesign task.

The existing typography plan is already established.

The priority is:

**find why the correct typography appears briefly and then gets replaced by the old typography.**

Do not stop at “the CSS looks correct”.

Use the browser's computed styles, CSS cascade, Network panel, generated production CSS, font loading state and runtime component styles to identify the exact winning rule/resource.

Only after the root cause is proven should you make the smallest safe fix.