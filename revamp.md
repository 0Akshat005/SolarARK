You can use this prompt to have Antigravity specifically **fix and refine the Contact section for mobile**, while preserving the desktop layout and using the attached design as the reference. [developerux](https://developerux.com/2026/06/24/responsive-design-mobile-first-approach/)

```md
You are a senior frontend engineer working in the SolarARK codebase.

TASK (MOBILE-ONLY)
Audit and FIX the **mobile responsive design** for the Contact section/page, without redesigning desktop. Only adjust layout & styling for small screens (~320–480px width) so the Contact experience is clear, fast to use, and thumb-friendly. Desktop should remain visually the same.

CONTEXT
- Stack: React + TypeScript + Vite + Tailwind.
- Component: `src/components/ContactPage.tsx` (hero band, “Get in Touch” column, enquiry form, Our Presence/map strip, bottom CTA hero).
- The desktop layout deliberately follows the attached Contact design (two-column hero, clean contact + form, map band, final CTA). On mobile, some parts break:
  - Two-column “Get in Touch / Send Us an Enquiry” layout feels squeezed.
  - The hero image card that looks great on desktop becomes a big, heavy card on phones.
  - The form fields and CTAs are cramped and hard to scan.

MOBILE CONTACT-PAGE PRINCIPLES
Apply mobile-first landing/contact-page best practices:
- Single-column flow and clear hierarchy: headline → reasons to contact → form/primary CTA → secondary info (locations, hours, map).[web:94][web:86]
- Readable type and adequate line-height (body ~16px, no micro text).[web:103]
- Finger-friendly tap targets for phone/email links, CTA buttons, and form controls (≥ 44×44px + spacing).[web:86][web:103]
- No horizontal scrolling; images scale to width, not height-first.

WHAT TO FIX (SECTION BY SECTION)

1. Hero band (“Let’s talk about your space.”) + hero image card
- On ≤ 767px:
  - Stack content vertically: headline + subcopy first, then image, not side-by-side.
  - Make the hero image **full-width and lightweight**, not a heavy “card”:
    - `w-full h-auto`, subtle radius, minimal or no box-shadow.
    - It should feel integrated with the section, not like a separate card floating between sections.
  - Ensure padding (`px-4`, `py-6`) so text never hugs screen edges.
  - Confirm that the primary call-to-scroll (down to the form) is obvious.

2. “Get in Touch” vs “Send Us an Enquiry” two-column block
- Convert the layout to a **single-column stack** on phones:
  - “Get in Touch” (phone, email, address, hours, WhatsApp CTA) appears first.
  - Enquiry form appears immediately after, full-width.
- For the left column:
  - Keep each contact method (call, email, visit, hours) as a full-width row with icon + text.
  - Make phone and email links easily tappable, with sufficient padding and spacing.
- For the right column (form):
  - Remove any side-by-side fields on mobile; each input spans full width.
  - Ensure labels stay above fields with comfortable vertical spacing.
  - Make the primary form CTA button (“Request a Solar Assessment” / equivalent) full-width or nearly full-width, with strong contrast.

3. Enquiry form UX on mobile (CRITICAL)
- Use correct input types (`tel` for phone, `email` for email, etc.) and support mobile keyboards.
- Make error states and helper text readable and non-overlapping; text should wrap cleanly and not push fields off-screen.
- Keep 12–16px vertical spacing between fields so the form feels breathable but not overly long.

4. “Our Presence” / map strip
- On mobile, stack this section as:
  - Short title + one-sentence description.
  - Location list (Amravati, Sambhajinagar, Wardha, Akola) as a vertical list with clear bullets.
  - Map graphic below, full-width (`w-full h-auto`), no side-by-side squeeze with text.
- If the desktop design uses a right-aligned image + left list, make that a simple vertical sequence on phones, no multi-column layout.

5. Bottom CTA hero (“Ready to explore solar for your property?”)
- Ensure the CTA hero behaves like a full-width band on mobile:
  - Heading + short supporting text + CTA button(s) stacked vertically.
  - Primary CTA button (e.g., “Talk to Our Team”) is full-width or nearly full-width and easy to tap.
- Confirm that any background image is handled as a full-bleed background or full-width image behind text, without tiny image cards.

6. General mobile polish for Contact page
- Remove or adjust any fixed heights that cause clipping or awkward white bands on small screens.
- Ensure no horizontal scroll at 360–414px widths.
- Maintain brand consistency by using existing color tokens, typography utilities, radii, and button styles from `index.css` / DESIGN.md; don’t introduce random Tailwind colors.
- Keep copy and overall desktop structure unchanged unless a minor wording tweak is necessary to avoid wrapping issues.

IMPLEMENTATION RULES
- Use Tailwind responsive utilities (`sm:`, `md:`, `lg:`) so desktop layout is unchanged while mobile’s layout is fixed.
- Prefer mobile-first: base styles safe for mobile, then add larger-breakpoint enhancements for desktop/tablet.
- Keep all WhatsApp and tel/email links functioning as they currently do.

OUTPUT
- Update `src/components/ContactPage.tsx` (and any small shared subcomponents if absolutely needed) so:
  - The hero, contact-info column, enquiry form, map strip, and bottom CTA hero are clean, single-column, and touch-friendly on mobile.
- In your response, provide:
  1. A brief list of the mobile issues you found.
  2. The revised component code focusing on mobile fixes (desktop behavior preserved).
```