# THE DEFINITIVE BLUEPRINT
## Premium Residential Rooftop Solar Website — Research, UX Strategy & Build System

**Prepared as a complete strategic + implementation package**
**Baseline reference studied: solarsquare.in (not to be copied — only out-evolved)**

---

## 0. Methodology & Sources

This blueprint is built from direct inspection of live sites (fetched and analyzed section-by-section) rather than assumption:

- **SolarSquare** (solarsquare.in) — primary reference, India's largest residential-rooftop-focused D2C solar brand (₹53M Series C, MS Dhoni as brand ambassador as of July 2026)
- **Freyr Energy** (freyrenergy.com) — India's #3 organized residential rooftop player, aggressive performance-marketing UX
- **Tata Power Solaroof** (tatapowersolar.com / solaroof.tatapower.com) — India's #1 rooftop EPC by installed base (1,900+ MW), legacy-corporate UX
- **Sunrun** (sunrun.com) — America's #1 residential solar + storage installer, the global benchmark for trust-led, guarantee-anchored solar UX
- Structural knowledge of **Zunsolar** (formerly Zunroof), **Loom Solar**, and premium digital-product design language from agencies referenced in the brief (Cuberto, Locomotive, Ramotion, Pentagram, Apple)

Every recommendation below is traceable to something observed working (or failing) on a real site, or to an established UX/CRO/motion-design principle. Where a claim is a design opinion rather than an observed fact, it's framed as a recommendation, not a citation.

---

## 1. DELIVERABLE 1 — Competitor Comparison Table

### 1.1 Scoring Matrix (0–10 scale)

| Category | SolarSquare | Freyr Energy | Tata Power Solaroof | Sunrun (Global) |
|---|---|---|---|---|
| Overall design quality | 7.5 | 5.0 | 5.5 | 8.5 |
| Visual hierarchy | 7.0 | 4.5 | 5.0 | 8.5 |
| Hero effectiveness | 7.5 | 5.5 | 5.0 | 8.0 |
| Navigation clarity | 7.0 | 5.5 | 6.0 | 8.0 |
| CTA strategy | 8.0 | 6.5 | 5.5 | 8.5 |
| Lead generation UX | 7.5 | 5.0 | 6.0 | 8.0 |
| Trust indicators | 8.5 | 6.5 | 7.0 | 9.0 |
| Testimonials | 6.5 | 5.0 | 5.0 | 7.5 |
| Social proof | 7.5 | 6.0 | 6.5 | 8.5 |
| Savings calculator | 8.0 | 7.5 | 4.0 | 7.0 |
| Process explanation | 8.0 | 6.5 | 5.5 | 8.0 |
| Installation flow clarity | 7.5 | 6.0 | 5.5 | 7.5 |
| Pricing communication | 6.5 | 7.0 | 4.5 | 6.0 |
| FAQ | 6.0 | 6.5 | 5.0 | 7.0 |
| Motion design | 5.5 | 4.0 | 3.5 | 7.0 |
| Scroll experience | 6.0 | 4.0 | 4.0 | 7.5 |
| Mobile UX | 7.0 | 5.0 | 5.5 | 8.0 |
| Footer utility | 7.0 | 6.0 | 5.5 | 7.5 |
| Accessibility | 5.5 | 4.5 | 5.0 | 7.0 |
| Performance (perceived) | 6.5 | 4.5 | 5.5 | 7.5 |
| Emotional impact | 7.0 | 5.0 | 4.5 | 8.0 |
| **Weighted Average** | **7.1** | **5.5** | **5.2** | **7.8** |

### 1.2 Category-by-Category Reasoning

**Overall design quality.** SolarSquare wins in India because it commits to one clean visual system — a single accent blue, generous whitespace, consistent card radius — and doesn't dilute it with promotional clutter. Freyr Energy actively hurts itself with a countdown-timer popup, autoplay funnel videos, and dense repeated FAQ blocks that make the page feel like a lead-gen landing page rather than a brand home. Tata Power's site reads as a legacy corporate portal — functionally complete, aesthetically flat, clearly built for many business lines (industrial, utility-scale, rooftop) rather than a focused homeowner journey. Sunrun sets the bar globally: editorial-grade photography, confident negative space, and copy that leads with outcomes ("Own your power") rather than specs.

**Visual hierarchy.** SolarSquare's home page follows a legible rhythm: hero → segment picker (Homes/Society/Commercial) → 4 trust pillars → guarantee product (GoodZero™) → live stats → calculator → 4-step process → app → testimonials → FAQ → footer. That's a textbook hierarchy of *attention → relevance → differentiation → proof → action*. Freyr Energy breaks hierarchy immediately with a modal popup before any content loads, and duplicates entire FAQ/blog content blocks in the raw markup — a sign of templated sections stacked without a hierarchy pass.

**Hero section effectiveness.** SolarSquare's hero pairs an emotional line ("The Future is Solar. Bring it Home Today.") with an immediate social-proof strip ("Rated 4.8 on Google | 15,000+ ratings") directly under the CTA — proof sits in the first viewport, not three scrolls down. This is the single strongest hero pattern observed and should be the backbone of the new hero. Sunrun's hero leans harder into outcome language and lifestyle photography over product photography.

**Navigation.** SolarSquare separates "Our Offerings" (who it's for: Homes/Commercial/Society) from "Solar Solutions" (technical: On-grid/Off-grid) — a rare and correct UX decision, since a homeowner's mental model is "which of these is me?" not "which grid topology do I want?". Its city mega-menu (29+ cities) signals local presence without cluttering primary nav. Freyr's nav is functional but generic; Tata's nav has to serve too many business units, which is a structural problem the new site — being residential-only — doesn't have to inherit.

**CTA strategy.** SolarSquare uses one consistent CTA family ("Get a FREE Consultation" / "Schedule a FREE Visit") repeated verbatim across header, hero, footer, and sticky elements — CTA consistency reduces cognitive load. Sunrun does the same with "See if you qualify." Freyr fragments its CTAs across "GO SOLAR!", "Download Brochure," "Get a Quote," and a discount-countdown CTA — too many competing asks dilute conversion intent.

**Trust indicators.** SolarSquare stacks four distinct trust types in one section — outcome guarantee (money-back), operational trust (zero middlemen), engineering trust (IIT Bombay-tested WindPro Mount™, 170 kmph rating), and service trust (5-year maintenance) — covering financial, structural, and relational risk simultaneously. This four-axis trust model (Financial / Structural / Service / Social) is worth formalizing as a reusable pattern (see Deliverable 4).

**Testimonials.** All three Indian sites use static quote cards; none use video testimonials as primary content on the homepage even though SolarSquare *does* have a YouTube testimonial linked from an image thumbnail — an underused asset. Sunrun's testimonial treatment ties a specific number (dollars saved, backup hours delivered) to each quote, which is more persuasive than sentiment alone.

**Savings calculator.** This is the single most important interactive element for the category, since it turns an abstract decision into a personalized number. SolarSquare's calculator asks only pincode + average monthly bill — two inputs, near-instant output. Freyr Energy's is close behind and even shows financing math (EMI, tenure options) inline, which SolarSquare's does not — a gap the new site should close by merging both: SolarSquare's input simplicity + Freyr's output depth (system size, savings, generation, cost breakdown, EMI options) in one flow. Tata Power has no comparable on-page calculator — a significant miss for a lead-gen-critical category.

**Process explanation.** SolarSquare's 4-step "We Handle Everything. You Just Save." sequence (Free Visit & Survey → Free 3D Design → Installation & Subsidy → Solar On, We Maintain) is the clearest process communication of any site reviewed — each step removes one specific fear (Will it look right on my roof? Will I be stuck with paperwork? Who maintains it?). Freyr's 4-step version is functionally similar but less benefit-forward in its copy.

**Pricing communication.** All three Indian sites are commendably transparent with subsidy tables (₹30k/₹60k/₹78k by system size under PM Surya Ghar) — a category norm the new site must match exactly, since incorrect subsidy figures would be a trust-breaking error. Sunrun, in the more mature US market, instead leads with monthly payment / "$0 down" framing rather than sticker price — a technique worth adapting for India's EMI-driven buyers.

**Motion & scroll experience.** None of the three Indian sites shows evidence of scroll-triggered storytelling, animated counters that count up on view, or parallax — these are static-content sites with CSS hover states at best. This is the clearest whitespace opportunity for the new build: motion is a genuine differentiator in this category, not a "nice to have."

**Mobile UX.** SolarSquare's mobile-specific hero image swap (distinct mobile vs. desktop hero assets) shows mobile-first thinking. Freyr's sticky call/WhatsApp actions are a good pattern worth adopting. None of the three shows evidence of thumb-zone-optimized sticky CTA bars — an opportunity (see Deliverable 9).

**Accessibility.** All three sites rely on icon-plus-color cues with unclear alt-text discipline based on markup inspection, and none show visible focus states or skip-links. This is a low bar to clear — genuine WCAG AA compliance would itself be a differentiator in this category.

### 1.3 What to Steal, What to Reject

**Adopt:** SolarSquare's proof-in-hero pattern; SolarSquare's Homes/Commercial/Society segmentation; SolarSquare's four-axis trust model; SolarSquare's 4-step fear-removal process copy; Freyr's calculator depth (EMI breakdown); Freyr's sticky contact actions; Sunrun's outcome-first copywriting and monthly-payment framing; Sunrun's numbers-attached testimonials.

**Reject:** Freyr's popup-before-content pattern; Freyr's countdown-timer urgency (reads as low-trust dark pattern in a 25-year-purchase category); duplicated/templated FAQ blocks; Tata Power's multi-business-unit navigation sprawl; any site's lack of motion, animated proof, or accessible focus states.


---

## 2. DELIVERABLE 2 — Reverse-Engineering SolarSquare

### 2.1 Full Section-by-Section Breakdown (as observed live)

1. **Header** — Logo left, mega-menu ("Our Offerings" / "Solar Solutions" / "Cities" / "Blog" / "More"), persistent "Get Free Quote" button, language toggle (EN). City mega-menu lists 9 cities + "+20 more" — smart progressive disclosure.
2. **Hero** — Two-line headline (identity claim + brand claim), single CTA, dual hero images (mobile/desktop specific), rating strip directly beneath fold.
3. **Segment picker** — Three cards (Homes / Housing Societies / Commercial), each with icon, one-line benefit, arrow-link. This is the site's true "IA fork" — everything else downstream assumes the visitor self-selected here, yet the rest of the homepage still targets homes only, so the fork is partially decorative.
4. **Trust pillars (4-up icon grid)** — Guaranteed Savings / Hassle-free Process / Storm-proof Structure / Reliable After-sales. Each pairs a bold noun-phrase headline with one supporting sentence — the copy pattern to replicate.
5. **Guarantee product spotlight (GoodZero™)** — A named, brand-owned product wrapped around the generic "solar system" — this is a strong differentiation device: SolarSquare isn't selling *a* solar system, it's selling *GoodZero™*, a badge-able, learnable proper noun.
6. **Live counters section** — Homes Solarized / Power Installed / Subsidy Delivered / On National Portal, all rendering as "0" in raw HTML (JS-animated count-up on scroll) plus a state-coverage map. Directionally correct pattern; execution should be more resilient (server-rendered fallback numbers so the section never looks broken if JS fails).
7. **Savings calculator** — Two-input (pincode + monthly bill) progressive form with graceful "not yet serviceable" state — a good example of designing the *failure* state, not just the happy path.
8. **4-step process** — "We Handle Everything. You Just Save." Sequential numbered cards.
9. **App cross-sell** — Real-time monitoring app, Play Store badge, feature icons (track generation, visibility on savings, referral tracking, promised-vs-actual transparency).
10. **Social proof block** — Google rating (4.8★, 15,000+ ratings) + one embedded video testimonial + three written testimonials with photo, name, and a quantified before/after bill figure (₹18,000 → ₹0).
11. **FAQ (accordion)** — Extremely long (25+ questions), well-organized by theme (product → financial → technical → post-install), doubling as an SEO/long-tail content play.
12. **Blog teaser** — 4 recent posts.
13. **Press/"In the News"** — Logo-and-headline cards from Fortune India, Economic Times, Forbes, etc. — timed around the MS Dhoni investment news, a savvy trust/newsworthiness layer most competitors lack entirely.
14. **About/company narrative block** — Founder story (IIT Bombay origin, founded 2015), mission language, "why choose us" bullet list — placed unusually late (near-footer) given its persuasive value.
15. **Services deep-dive** — Rooftop Inspection & 3D Design / Installation / Financing / AMC, each with sub-bullets — effectively a second, more detailed process explanation, creating redundancy with Section 8.
16. **Awards & Certifications** — Text list, no visual badges — a missed opportunity; badges/logos read faster than prose.
17. **Second lead form ("Talk to a Solar Expert")** — mid-to-late page, WhatsApp-number field (smart for the Indian market — WhatsApp is often preferred to phone/email).
18. **Footer** — Standard link architecture, contact block, social icons, extensive city/state sitemap for local SEO, legal links including multiple GoodZero™ variant T&Cs.
19. **Exit-style slide-in form** — "Switch to solar at ₹0 Investment" with its own quantified subsidy hook (₹78,000) — a second/redundant conversion surface layered on top of the in-page forms.

### 2.2 What Works Well
- Proof-in-hero (rating badge in the first viewport).
- The four-axis trust model (financial/structural/service/social) — one of the most defensible patterns in the category.
- A branded guarantee product (GoodZero™) instead of a generic warranty page.
- Designing the calculator's failure state, not just the happy path.
- WhatsApp-first contact fields, correctly reading the Indian market.
- Press-mentions block as real-time credibility (tied to a funding/celebrity-endorsement news cycle).
- Long-tail FAQ doubling as SEO content without feeling like a wall of text (accordion collapse keeps it scannable).

### 2.3 What Should Be Improved
- **Redundant process explanation** — Sections 8 and 15 explain the same journey twice, once briefly and once in prose depth. These should merge into a single expandable process section.
- **Redundant lead forms** — three separate lead-capture surfaces (calculator, mid-page "Talk to a Solar Expert," slide-in ₹0 Investment form) compete with each other rather than escalating purposefully. A single persistent primary form + one well-timed secondary nudge converts better than three parallel asks.
- **Segment picker is a dead end** — clicking "Homes" leads away from the tailored homepage experience the visitor was just having; the homepage itself should already assume "residential" as default context (a Homes-first site, with Commercial/Society as secondary top-nav items) rather than forcing a fork on the first scroll.
- **Live counters render as "0" without JS** — no resilient fallback; a first-paint of "0 Homes Solarized" briefly undercuts the exact trust the section exists to build.
- **Awards list is unstyled prose** — badges/crests convert faster than a bullet list of award names.
- **No motion, parallax, or scroll-linked storytelling anywhere** — every section is a static stack; nothing in the experience *moves with intent*.
- **No visible roof/savings visualization** — despite offering a "Free 3D Solar Design" as a *service*, the marketing site never shows an example of what that 3D design output looks like — a huge missed show-don't-tell opportunity.
- **Testimonials are the least developed asset relative to their persuasive weight** — only one embedded video, buried as a thumbnail link rather than an inline player.

### 2.4 What Feels Outdated
- Icon style mixes Material Design system icons (visible literal icon-name text like "settings_input_component" leaking in nav labels — a markup/rendering hygiene issue) with custom illustration — inconsistent icon language.
- Countdown-free but still reliant on a slide-in exit-style form, a 2015-era growth-hacking pattern that reads as slightly desperate on a "premium" brand.
- Static card grids with no hover depth, elevation change, or micro-interaction feedback.
- Numbers that don't animate without JS and have no skeleton/placeholder treatment.

### 2.5 What Is Missing Entirely
- Before/after roof visualization or interactive 3D roof preview.
- Any comparison-to-alternatives content (e.g., solar vs. staying on grid, cost-of-waiting).
- Financing comparison table (cash vs. EMI vs. loan) on the homepage itself (it exists but is buried in the calculator's advanced state on Freyr, not SolarSquare).
- Environmental-impact visualization tied to the visitor's *own* system size (trees planted / CO₂ avoided, personalized rather than generic).
- Warranty/guarantee document preview or downloadable PDF.
- Live chat or WhatsApp widget visible in the persistent UI (only present as a form field, not a floating action).

---

## 3. DELIVERABLE 3 — Modern UI Trends for Premium Renewable-Energy Websites

Each trend below is scoped to *where it earns its place* in a solar-buying journey — not applied indiscriminately.

| Trend | Where it belongs | Why it converts | Where to avoid it |
|---|---|---|---|
| **Soft gradients (sun-warm → sky-cool)** | Hero background, section dividers | Reinforces "solar" emotionally without literal sun-clipart cliché | Never behind body text or forms — kills contrast/accessibility |
| **Glassmorphism (restrained)** | Floating calculator card, sticky CTA bar | Signals "modern tech product," lets a background photo/illustration breathe through | Never on primary CTA buttons — reduces tap-target legibility |
| **Premium elevated cards** | Trust pillars, process steps, testimonials | Subtle shadow + radius reads as "engineered," matching the physical-product trust the category needs | Overuse flattens hierarchy — reserve elevation for 1–2 levels max |
| **Micro-interactions** | Form fields, buttons, calculator sliders | Confirms input was received — critical in a form-heavy conversion flow | Avoid on decorative elements with no functional meaning |
| **3D illustration (isometric roof/house)** | Hero, "How it Works," roof visualization | Communicates "solar on a roof" without stock photography or real people (avoids the awkwardness of generic stock installers) | Avoid full 3D renders on mobile without a static-image fallback (performance) |
| **SVG line-draw animation** | Process step icons, "How it Works" | Cheap in file size, elegant on scroll-into-view, reinforces sequence | Avoid animating more than one icon at a time — visual noise |
| **Scroll storytelling (pinned sections)** | "How it Works" 4-step journey | Turns a passive read into a guided, paced narrative — ideal for the exact 4-step process every competitor already has in static form | Avoid on FAQ or footer — storytelling scroll-jacking on utility content frustrates users |
| **Animated statistics (count-up)** | Live homes-solarized / MW-installed counters | Observed on SolarSquare already, done right it builds momentum; must have a static SSR fallback | Don't animate every number on the page — reserve for headline stats |
| **Interactive savings calculator** | Persistent, prominent, above the fold or one scroll down | The single highest-leverage interactive element in this category, proven on both SolarSquare and Freyr | Don't gate it behind a form — the free calculation *is* the top-of-funnel hook |
| **Roof/before-after visualization** | Dedicated "See it on your home" section | Directly answers the #1 aesthetic objection ("will this look ugly on my roof") that SolarSquare's own FAQ explicitly names | Don't fake it with generic stock roofs — use an illustrated/parametric roof model instead |
| **Interactive timeline** | Installation journey (survey → design → install → subsidy → live) | Converts an abstract multi-week process into a concrete, reassuring schedule | Keep to 4–6 steps max — more feels bureaucratic |
| **Parallax (subtle, 2-layer max)** | Hero background only | Adds depth without disorienting; heavy multi-layer parallax reads as 2015-era agency-portfolio, not premium-2026 | Never on text-bearing layers — hurts readability and accessibility |
| **Dark-mode-aware sections** | Optional "Technology" or "Guarantees" deep-dive section | A dark, high-contrast section (navy/charcoal) makes a "guarantee" or "technology" block feel premium and distinct from the light marketing sections around it | Don't make the whole site dark — this is a residential/emotional category; light, warm, optimistic is correct as the dominant mode |
| **Sticky/floating CTA** | Persistent on scroll after hero, mobile bottom bar | Removes friction to the #1 action at all times | Must be dismissible/collapsible — persistent CTAs that can't be minimized annoy return visitors |
| **Loading experience** | Route transitions, calculator computation | A branded 400–600ms transition (not a generic spinner) reinforces polish | Never block interaction for more than ~800ms — perceived performance matters more than actual delay |
| **Form UX: progressive disclosure** | Lead forms, calculator | Ask pincode + bill first (2 fields), reveal name/phone only after value is shown (the number) — reduces form abandonment vs. asking everything upfront | Don't progressively disclose the *legally required* consent checkbox — keep that visible at final submit |
| **Empty/failure states designed intentionally** | Calculator "not yet serviceable," form validation | Already done reasonably well by SolarSquare; extend the same care to every possible failure state | — |


---

## 4. DELIVERABLE 4 — Ideal Information Architecture

### 4.1 Homepage Section Sequence (with reasoning for every position)

| # | Section | Purpose | Why it sits here |
|---|---|---|---|
| 1 | **Header** (sticky, transparent → solid on scroll) | Orientation + persistent CTA | Must never block the hero visually on load |
| 2 | **Hero** — outcome headline + rating/proof strip + single CTA + calculator teaser | Emotional hook + immediate credibility + immediate value | Combines SolarSquare's proof-in-hero with a direct calculator entry point — visitors get *value* (a number) before being asked for anything |
| 3 | **Trust bar** (logos: press, certifications, ratings) | Pattern-interrupt credibility before any claims are made | Placed higher than SolarSquare's — press/awards should not wait until near-footer |
| 4 | **The Problem** (rising tariffs, bill pain, 1 chart) | Frame the "why now" before the "why us" | A homeowner needs to feel the pain named before a solution lands — none of the four competitor sites do this explicitly; it's a differentiation opportunity |
| 5 | **Savings Calculator** (full interactive module) | Convert the pain into a personal number | This is the emotional pivot point of the whole page — moved earlier than SolarSquare's placement because it's the strongest engagement device on the page and shouldn't wait |
| 6 | **How It Works** (4-step scroll-storytelling) | Remove process-fear immediately after the number lands | A visitor who just saw "you could save ₹X/month" next asks "ok, HOW does this actually happen to me" |
| 7 | **Trust Pillars** (financial / structural / service / social — four-axis model) | Systematically answer every category-specific objection | Sits after process because "how" objections are resolved before "why trust you" objections |
| 8 | **Government Subsidy Explainer** (table + eligibility) | Remove the single largest financial-literacy barrier in Indian solar | Deserves its own section, not a buried FAQ answer, given how decision-critical it is |
| 9 | **See It On Your Home** (roof visualization / 3D preview) | Resolve the aesthetic objection with a visual, not a promise | This is the single biggest content gap identified in Deliverable 2 |
| 10 | **Guarantee Product Spotlight** (branded guarantee, e.g. "generation guarantee") | Convert an abstract warranty into an ownable, memorable brand asset | Mirrors SolarSquare's GoodZero™ pattern — proven differentiation device |
| 11 | **Real Projects / Case Studies** (map + filterable by city/system size) | Local-relevance proof ("someone like me, near me, did this") | Uses the multi-city presence competitors already have but never visualize as a map-first experience |
| 12 | **Testimonials** (video-first, quantified) | Peer proof with numbers attached (Sunrun pattern) | Placed after case studies so numeric social proof (MW, cities) is reinforced by individual human proof |
| 13 | **Technology & Guarantees deep-dive** (dark-mode section) | Engineering credibility for higher-consideration buyers who scroll this far | Dark section as a deliberate tonal break — signals "serious substance," not just marketing |
| 14 | **App / Post-install Experience** | Remove "what happens after I buy" anxiety | After trust is established, not before — leads with too much post-sale detail too early undersells the sale itself |
| 15 | **FAQ** (accordion, categorized) | Long-tail objection handling + SEO | Kept near bottom, as on all competitor sites — correct pattern, visitors self-select into it |
| 16 | **Final CTA / Lead Form** (single, well-designed, WhatsApp-first) | One clean final ask | Consolidates the 3 redundant SolarSquare forms into one — sticky CTA handles the "I'm ready earlier" visitors |
| 17 | **Footer** (city sitemap, legal, contact, socials) | Utility + local SEO | Standard, but includes a compact re-statement of the guarantee and rating as a final trust echo |

### 4.2 Why This Order Beats SolarSquare's

1. **Value before ask.** SolarSquare places the calculator after four other sections; the new IA moves it to position 5, right after credibility is briefly established, so the visitor gets a personalized number early rather than late.
2. **One conversion surface, not three.** Consolidating SolarSquare's calculator / mid-page form / exit slide-in into a single persistent sticky CTA plus one full final-CTA section removes competing asks.
3. **Visual proof for the #1 named objection.** SolarSquare's own FAQ explicitly surfaces "I'm not sure if I have enough space" / roof-damage fears — yet the homepage never *shows* a roof outcome. The new IA gives this its own section (position 9).
4. **Segment routing without a dead end.** Rather than SolarSquare's homepage-wide fork (Homes/Society/Commercial cards early, then homepage content assuming "Homes" anyway), the new site is homes-first by default — Society/Commercial become secondary top-nav destinations, not a false fork on the homepage itself.
5. **A dedicated emotional "problem" beat.** No competitor site names the pain (rising tariffs, bill anxiety) before presenting the solution — a classic StoryBrand/PAS (Problem-Agitate-Solve) gap this IA closes.

### 4.3 Secondary Page Architecture

```
/                          Home (residential-first)
/how-it-works              Deep process page (expanded version of homepage section)
/savings-calculator        Full-screen calculator with saved/shareable results
/technology                Panels, inverters, mounting structure, warranties
/guarantee                 The branded guarantee product, full terms in plain language
/projects                  Filterable case-study map (by city, system size, roof type)
/reviews                   Full testimonial library, video-first
/subsidy                   PM Surya Ghar explainer + eligibility checker
/financing                 EMI / loan / cash comparison tool
/commercial                Secondary audience (not competing with home IA)
/housing-societies         Secondary audience
/cities/[city]             Local SEO landing pages (pattern already proven by all 3 India competitors)
/blog                      Content marketing / SEO
/faq                       Full searchable FAQ
/contact                   Single consolidated contact + form
```

---

## 5. DELIVERABLE 5 — Design System

### 5.1 Typography Scale (fluid, clamp-based)

| Token | Mobile | Desktop | Use |
|---|---|---|---|
| `--text-display` | 34px | 64px | Hero headline only |
| `--text-h1` | 28px | 44px | Section titles |
| `--text-h2` | 22px | 32px | Sub-section titles |
| `--text-h3` | 18px | 22px | Card titles |
| `--text-body-lg` | 17px | 19px | Lead paragraphs |
| `--text-body` | 15px | 16px | Body copy |
| `--text-small` | 13px | 14px | Captions, legal, meta |
| `--text-micro` | 11px | 12px | Badges, tags |

**Typeface pairing:** A grotesque/humanist sans for display (e.g., a licensed equivalent of Söhne/General Sans/Inter Display) for warmth without losing precision; a highly legible workhorse sans (Inter/Public Sans equivalent) for body copy and forms, since forms are conversion-critical and must never sacrifice legibility for style. Avoid decorative or condensed faces entirely — this category needs to read as trustworthy, not trendy.

### 5.2 Spacing System (8px base grid)
`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128` — section vertical rhythm uses 64–128px between major sections on desktop, 48–64px on mobile; component-internal spacing stays on the 4–24px range.

### 5.3 Grid & Containers
- 12-column grid, 24px gutters desktop / 16px mobile
- Max content width: 1280px (marketing sections), 960px (long-form text like FAQ/blog)
- Breakpoints: 375 / 768 / 1024 / 1440 / 1920

### 5.4 Radius & Elevation
| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 8px | Inputs, chips, badges |
| `--radius-md` | 16px | Cards |
| `--radius-lg` | 24px | Hero panels, modals |
| `--radius-full` | 999px | Pills, avatar, toggle |
| `--elevation-1` | 0 2px 8px rgba(0,0,0,.06) | Resting cards |
| `--elevation-2` | 0 8px 24px rgba(0,0,0,.10) | Hover/active cards |
| `--elevation-3` | 0 16px 48px rgba(0,0,0,.16) | Modals, sticky calculator panel |

### 5.5 Color Palette

| Role | Token | Value (example) | Notes |
|---|---|---|---|
| Primary (brand solar blue) | `--color-primary-600` | #1D5FE0 | CTA buttons, links, active states |
| Primary dark | `--color-primary-800` | #0F2E6E | Header-on-scroll, dark section base |
| Solar accent (sun-warm) | `--color-accent-500` | #FFB020 | Guarantee badges, savings highlights — used sparingly, never as body text |
| Success/savings green | `--color-success-500` | #17A673 | Savings figures, "you save" callouts |
| Warning | `--color-warning-500` | #E0A419 | Form validation, limited-availability notices |
| Error | `--color-error-500` | #E0432D | Form errors only |
| Surface — base | `--surface-base` | #FFFFFF | Default background |
| Surface — subtle | `--surface-subtle` | #F6F8FC | Alternating section backgrounds |
| Surface — dark | `--surface-dark` | #0B1730 | Technology/Guarantee dark-mode section |
| Text — primary | `--text-primary` | #10182B | Body copy |
| Text — secondary | `--text-secondary` | #55607A | Captions, meta |
| Text — inverse | `--text-inverse` | #FFFFFF | On dark/primary surfaces |

Color psychology rationale: blue carries the trust/technology/sky association already used by every major solar brand globally (Sunrun, Tesla Energy) — deviating from blue as primary would fight category convention unnecessarily. The warm accent (sun-gold) is reserved *exclusively* for savings/guarantee moments so it retains meaning instead of becoming decorative wallpaper.

### 5.6 Iconography & Illustration Direction
- **Icon style:** single-weight line icons (1.5–2px stroke), consistent corner radius on terminals — never mix filled and outlined icons in the same section (an inconsistency observed and flagged on SolarSquare's own nav).
- **Illustration style:** flat-with-depth isometric (soft shadow, no hard outlines) for process/roof/house illustrations — approachable, not childish; avoid photorealistic 3D render (too heavy, ages faster) and avoid flat 2D line-art alone (too cold for a home-purchase category).
- **Photography direction:** real Indian homes and rooftops (not generic Western stock), natural daylight, golden-hour bias for hero imagery, always paired with real system context (visible panels) rather than lifestyle-only shots with no product visible.

### 5.7 Core Components (see full list in Deliverable 6)
Buttons (primary/secondary/ghost/text), Badges (guarantee, certification, rating), Chips (filter, city selector), Cards (trust, process, testimonial, project), Inputs (text, select, phone with country code, range slider for calculator), Forms (multi-step progressive), Tables (subsidy, pricing, comparison), Accordions (FAQ), Navigation (mega-menu, mobile drawer), Footer (multi-column + sitemap).


---

## 6. DELIVERABLE 6 — Component Library

For each component: Purpose · Layout · Desktop · Tablet · Mobile · Animation · Hover · Accessibility · Variants/States.

### 6.1 Primary Button
- **Purpose:** Drive the single highest-value action per screen.
- **Layout:** Icon-optional + label, min 44×44px tap target.
- **Desktop:** Fixed height 52px, 24px horizontal padding.
- **Tablet:** Same as desktop.
- **Mobile:** Full-width in forms/sticky bars, 48px height min.
- **Animation:** 150ms background/scale transition on press (scale 0.98).
- **Hover:** Background darkens 8%, subtle elevation-1 → elevation-2.
- **Accessibility:** 4.5:1 contrast minimum, visible focus ring (2px offset, primary-800), `aria-label` when icon-only.
- **Variants:** Primary (filled), Secondary (outline), Ghost (text+icon), Destructive (rare — cancellation flows only).
- **States:** Default / hover / active / focus / disabled / loading (inline spinner replaces label, width locked to prevent layout shift).

### 6.2 Trust Pillar Card
- **Purpose:** Deliver one trust claim + one supporting sentence, four-axis model (financial/structural/service/social).
- **Layout:** Icon (48px) top, headline, 1–2 line body, no CTA (informational, not actionable).
- **Desktop:** 4-column grid.
- **Tablet:** 2-column grid.
- **Mobile:** Single column, horizontal-scroll snap carousel as an alternative for space efficiency.
- **Animation:** Icon line-draws in on scroll-into-view (400ms, staggered 80ms per card).
- **Hover:** Elevation-1 → elevation-2, icon micro-bounce.
- **Accessibility:** Icons are decorative (aria-hidden), headline is the accessible name.
- **Variants:** Icon-top (default), icon-left (used in dense secondary pages).

### 6.3 Savings Calculator Module
- **Purpose:** Core conversion engine — turns pincode + bill into a personalized savings/system-size/subsidy breakdown.
- **Layout:** Two-column on desktop (inputs left, animated output right); stacked on mobile with output revealed via smooth height expansion.
- **Desktop:** Persistent card, glassmorphic surface over a subtle gradient background.
- **Tablet:** Same as desktop, narrower proportions.
- **Mobile:** Full-width, sticky "Calculate" button pinned above keyboard.
- **Animation:** Slider drag updates output numbers with a 300ms count-up/count-down tween on every change (not just final submit) — real-time feedback beats submit-and-wait.
- **Hover:** Slider thumb grows 110% on hover/focus.
- **Accessibility:** Slider fully operable via keyboard arrows; all outputs also rendered as readable text for screen readers (not canvas-only).
- **Variants:** Compact (homepage teaser, 2 inputs) → Full (dedicated `/savings-calculator` page, includes financing breakdown).
- **States:** Empty / calculating (skeleton shimmer, <600ms) / result / out-of-service-area (SolarSquare's pattern — retained and refined with a "notify me" capture).

### 6.4 Process Step (Scroll-Storytelling)
- **Purpose:** Explain the 4-step journey with paced, guided motion.
- **Layout:** Pinned section, step content changes as user scrolls through a fixed-height container; progress indicator (line or numbered dots) on the side.
- **Desktop:** Full pin-and-scrub scroll storytelling.
- **Tablet:** Simplified pin (2 steps per pin cycle).
- **Mobile:** No pinning (performance/usability risk on mobile scroll) — reverts to a clean vertical stepper with scroll-triggered reveal per step, not scroll-jacking.
- **Animation:** Cross-fade + 24px slide between steps, icon line-draw per step entry.
- **Hover:** N/A (scroll-driven, not hover-driven) on desktop; steps are tappable on mobile stepper to jump/expand.
- **Accessibility:** `prefers-reduced-motion` disables pinning entirely in favor of a static stacked list.
- **Variants:** Homepage (compact, 4 steps) / `/how-it-works` (expanded, sub-steps per step).

### 6.5 Testimonial Card
- **Purpose:** Peer proof, quantified.
- **Layout:** Photo/video thumbnail, name, city, quote, **bold quantified outcome** (e.g., "₹18,000 → ₹0").
- **Desktop:** Horizontal carousel, 3 visible.
- **Tablet:** 2 visible.
- **Mobile:** 1 visible, swipe with visible peek of next card (signals more content).
- **Animation:** Video thumbnails show a subtle pulse play-icon; carousel auto-advances every 6s, pausing on hover/touch.
- **Hover:** Card lifts (elevation-2), play icon scales.
- **Accessibility:** Carousel has visible prev/next controls (not swipe-only), auto-advance pauses on focus.
- **Variants:** Text-only, Video, Case-study (links to full `/projects` entry).

### 6.6 Guarantee Badge / Product Spotlight
- **Purpose:** Convert an abstract warranty into a brand-owned, ownable asset (SolarSquare's GoodZero™ pattern, generalized).
- **Layout:** Shield/badge icon + product name (trademark-style) + 4 feature bullets in a 2×2 icon grid.
- **Desktop:** Full-bleed section, dark or gradient background for tonal separation.
- **Tablet/Mobile:** Stacked, badge remains prominent above the fold of the section.
- **Animation:** Badge has a subtle shimmer/glint sweep on scroll-into-view (once only, not looping — avoid decorative distraction).
- **Hover:** Feature icons micro-bounce individually.
- **Accessibility:** Trademark symbol and full guarantee terms always linked to a plain-language `/guarantee` page, never only in a tooltip.
- **Variants:** Homepage spotlight (compact), full `/guarantee` page (expanded with legal terms in plain language accordion).

### 6.7 Subsidy/Pricing Table
- **Purpose:** Remove financial-literacy barriers with a scannable, government-sourced numbers table.
- **Layout:** Simple 2–3 column table, system-size rows.
- **Desktop:** Standard table.
- **Tablet:** Standard table, horizontal scroll if needed.
- **Mobile:** Card-per-row transformation (each system size becomes a mini card) rather than a horizontally-scrolling table — far more legible on small screens.
- **Animation:** Row highlight on the system-size closest to the visitor's calculator result (cross-references Component 6.3).
- **Hover:** Row background tint.
- **Accessibility:** Semantic `<table>` markup with proper `<th scope>` — never a div-grid pretending to be a table.
- **Variants:** Subsidy-only, full pricing (size × price × subsidy × effective cost).

### 6.8 Sticky CTA Bar
- **Purpose:** Persistent, low-friction path to the primary action without blocking content.
- **Layout:** Desktop — slim top-of-viewport bar appearing after hero scroll-past; Mobile — bottom-anchored bar with two actions (Calculate Savings / WhatsApp Us).
- **Desktop:** 64px height, collapses to icon-only if user scrolls up quickly (assumes re-reading, not seeking action).
- **Tablet:** Same as mobile pattern.
- **Mobile:** 56px height bottom bar, safe-area-inset aware (notch/home-indicator safe).
- **Animation:** Slide-in 250ms ease-out on trigger; slide-out on footer intersection (don't overlap final CTA/footer).
- **Hover:** N/A on mobile; desktop buttons get standard button hover.
- **Accessibility:** Dismissible via a small close affordance that persists dismissal for the session (localStorage-equivalent in production, not for the artifact environment).
- **Variants:** Two-action (Calculate + Contact), One-action (Calculate only, used on already-deep pages like `/how-it-works`).

### 6.9 Multi-Step Lead Form
- **Purpose:** The final, single consolidated conversion surface (replacing the 3 redundant forms found on SolarSquare).
- **Layout:** Step 1 — pincode + bill (already pre-filled if calculator was used earlier in session); Step 2 — name + WhatsApp number; Step 3 — confirmation with what-happens-next timeline.
- **Desktop:** Modal or inline card, progress dots visible.
- **Tablet:** Inline card.
- **Mobile:** Full-screen step takeover, large touch targets, numeric keyboard auto-invoked for phone/pincode fields.
- **Animation:** Horizontal slide between steps (300ms), success state uses a checkmark draw-in animation (400ms).
- **Hover:** Standard input focus states (border color shift + subtle glow).
- **Accessibility:** Each step announces itself to screen readers (`aria-live` region for step change), consent checkbox never hidden behind progressive disclosure.
- **Variants:** Inline (homepage final section), Modal (triggered from sticky CTA), Embedded (contact page, no modal chrome).

### 6.10 Accordion (FAQ)
- **Purpose:** Scannable long-tail objection handling.
- **Layout:** Category tabs above, single-open accordion within category (not all-open, to reduce scroll fatigue vs. SolarSquare's very long always-expanded-feeling list).
- **Desktop/Tablet/Mobile:** Consistent single-column pattern across breakpoints — no adaptation needed, accordions are inherently responsive.
- **Animation:** Height auto-expand 250ms ease, chevron rotates 180°.
- **Hover:** Row background tint.
- **Accessibility:** Full `aria-expanded`/`aria-controls` pattern, keyboard operable.
- **Variants:** Homepage (top 6 only + "see all"), full `/faq` (categorized, searchable).

---

## 7. DELIVERABLE 7 — Motion Design Bible

### 7.1 Principles
Motion in this build exists to do exactly three jobs: **(1) direct attention** to what matters next, **(2) confirm** that an action was received, and **(3) pace** a long story (the 4-step journey) so it reads as guided rather than dumped. Motion must never exist purely for decoration — every animation in this system should be removable in `prefers-reduced-motion` without losing any information, only losing polish.

### 7.2 Timing & Easing Standards

| Token | Duration | Easing | Use |
|---|---|---|---|
| `--motion-instant` | 100ms | `ease-out` | Button press feedback |
| `--motion-fast` | 200ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Hover states, input focus |
| `--motion-base` | 300ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Card reveals, accordion expand |
| `--motion-slow` | 500ms | `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) | Section reveals, hero entrance |
| `--motion-story` | 600–900ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Scroll-storytelling step transitions |
| `--motion-delay-stagger` | 60–100ms per item | — | Staggered card/list entrances (cap at 5 staggered items; beyond that, animate as one group) |

**Rule of thumb:** nothing on this site should take longer than 900ms to resolve, and anything the user is *waiting on* (form submit, calculation) should show feedback within 100ms even if the real result takes longer (skeleton/shimmer bridges the gap).

### 7.3 Page Load Sequence
1. **0–100ms:** Header fades/slides in from top (–8px → 0), logo first.
2. **100–400ms:** Hero headline reveals via clip-path wipe or opacity+8px-rise, word-by-word or line-by-line (not letter-by-letter — too slow for a headline this long).
3. **300–500ms:** Hero CTA and rating strip fade in (staggered 80ms after headline starts).
4. **500ms+:** Hero image/illustration settles into place with a gentle scale (1.04 → 1.0) — never a hard cut-in.
5. Below-the-fold sections do **not** pre-animate on load — they animate on scroll-into-view only (see 7.4), keeping initial load lean.

### 7.4 Scroll Reveals
- Standard section entrance: opacity 0→1 + translateY 24px→0, `--motion-slow`, triggered at 20% element visibility (not 100% — avoid a jarring "just appeared" feeling).
- Cards within a grid: staggered per 7.2, max 5 staggered before switching to group-fade.
- Counters: count from 0 to final value over 1200ms once 50% visible, using an ease-out curve so the count decelerates naturally into the final number (never a linear tick).
- Images: subtle Ken-Burns-style 1.0→1.03 scale over the scroll duration the image is in view, capped and GPU-accelerated (`transform` only, never `width/height`).

### 7.5 Cards
- Resting: elevation-1.
- Hover (desktop only): elevation-2, translateY(-4px), 200ms.
- Press/tap (mobile): scale(0.98), 100ms, no elevation change (elevation is a hover-only signal, meaningless on touch).

### 7.6 Buttons
- Hover: background color shift 8% darker/lighter depending on variant, 150ms.
- Active/press: scale(0.97), 100ms, ease-out.
- Loading: label swaps to inline spinner, button width locked via `min-width` to prevent layout shift; disabled pointer events.
- Success (e.g., form submitted): brief checkmark morph replacing spinner, 400ms, then either redirect or reveal confirmation content.

### 7.7 Accordion (FAQ)
- Expand: height auto via `grid-template-rows: 0fr → 1fr` technique (avoids the jank of animating `height: auto` directly), 250ms ease.
- Chevron: rotate 0→180deg, synced duration.
- Only one section's chevron/content should visibly move per interaction — closing a previously-open item and opening the new one should feel like one coordinated motion, not two disconnected ones (slight negative delay on the close relative to the open).

### 7.8 Navigation
- Desktop mega-menu: fade+8px drop on open, 200ms; backdrop dims page content behind it to 92% opacity to focus attention on the menu.
- Mobile drawer: slide-in from right, 300ms `--motion-slow` easing, with a scale-down (1.0→0.96) of the underlying page content to reinforce depth/layering.
- Sticky header state change (transparent→solid on scroll): background-color and shadow crossfade over 200ms, tied to scroll position, not a hard breakpoint jump.

### 7.9 Sticky/Floating CTA
- Entrance: slide up from below viewport, 250ms ease-out, triggered once hero has scrolled ~90% out of view.
- Exit: slide down and fade as the footer/final-CTA section enters the viewport (avoid two competing CTAs being visible simultaneously).

### 7.10 Calculator Interactions
- Slider drag: output numbers tween continuously as the thumb moves (not just on release) — this is the single most important "feels alive" moment in the whole site, since it's the primary conversion tool.
- On input blur/change (typed values, not slider): 300ms count tween to new values, plus a subtle highlight-flash (background color pulse, 400ms) on the changed number so the user's eye catches the update.
- Result reveal (first calculation): container height expands 400ms `--motion-slow`, content fades in 100ms after the expand begins (not simultaneously — sequencing container-then-content avoids a squashed-text feeling).

### 7.11 Form Transitions & Success States
- Step-to-step: horizontal slide (30px) + crossfade, 300ms.
- Field validation error: input border color shifts to error red over 150ms, error text slides down 4px + fades in, subtle single shake (±4px, 200ms total, 2 cycles) — shake used sparingly, only on submit-attempt with errors, never on every keystroke.
- Success state: checkmark SVG path draws in via `stroke-dashoffset` animation, 500ms, followed by confirmation copy fade-in.

### 7.12 Performance Considerations
- All animations use `transform` and `opacity` exclusively where possible — never animate `top/left/width/height/box-shadow` directly (forces layout reflow).
- Scroll-triggered reveals use `IntersectionObserver`, never scroll-event listeners with manual position math.
- Parallax layers capped at 2, both GPU-composited (`will-change: transform` applied only while in view, removed after, to avoid memory bloat).
- Video/Lottie assets lazy-load and only mount when within 200px of viewport.
- Total motion-library JS budget target: under 30KB gzipped for the core reveal/scroll system (favor CSS-driven animation wherever it can achieve the same effect over JS-driven).

### 7.13 Reduced-Motion Accessibility
`@media (prefers-reduced-motion: reduce)`:
- All scroll-storytelling pinning is disabled — content reflows to a static stacked layout with instant (0–50ms) opacity-only reveals.
- Count-up numbers render their final value immediately.
- Parallax and Ken-Burns image scaling are disabled entirely (static image).
- Button/card press feedback is retained (state changes, not motion) since it communicates function, not decoration — but the scale/transform is replaced with a color-only change.


---

## 8. DELIVERABLE 8 — Conversion Rate Optimization (CRO)

### 8.1 CTA Placement Strategy
- **One primary verb, everywhere.** Every competitor site fragments its CTA language (SolarSquare alone uses "Get a FREE Consultation," "Schedule a FREE Visit," "Learn More," "Know More," "Submit Details," "Book a FREE Consultation" — six variants for what is functionally one action). The new site standardizes on **one primary CTA phrase** ("Get My Free Savings Estimate") used verbatim in header, hero, sticky bar, and final section, with at most one secondary phrase ("Talk to an Expert") reserved for the WhatsApp/phone path only.
- **Value-first CTA copy.** "Calculate My Savings" outperforms "Get a Quote" because it promises information, not a sales call — lowering perceived commitment at the exact moment trust is lowest (first visit).
- **CTA density curve.** Light in the first 2 sections (one CTA only, in hero), increasing through the middle of the page as trust builds, converging to a single strong final-CTA section — mirrors the natural trust curve rather than asking equally hard at every scroll depth.

### 8.2 Lead Form Timing
- **Two-tier ask, not one.** Tier 1 (low friction): pincode + monthly bill → unlocks the calculator's personalized number. Tier 2 (higher friction): name + WhatsApp number → only requested *after* the visitor has already seen their personalized savings figure, so the ask feels like "claim this," not "give me your info to find out."
- **No form before content.** Freyr Energy's popup-before-paint pattern is explicitly rejected — it damages first-impression trust in a 25-year purchase category more than it gains in early capture rate.
- **Pre-fill everything possible.** If a visitor used the calculator earlier in the session, the final lead form should arrive pre-filled with pincode/bill, removing repeated data entry — a details-level trust signal ("this site remembers what I told it and respects my time").

### 8.3 Sticky CTA
Covered fully in Deliverable 6.8/7.9 — key CRO point: the sticky bar's two actions (Calculate / WhatsApp) map to the two dominant intents in this category — "I want a number" vs. "I want to talk to a human right now" — rather than forcing every visitor down one funnel shape.

### 8.4 Exit-Intent (Used Sparingly, Value-First)
Reject SolarSquare's ₹0-investment slide-in in its current generic form. Replace with a **conditional, context-aware** exit prompt: only trigger if the visitor has already interacted with the calculator (i.e., has shown real intent) and is about to leave *without* submitting Tier 2 info — the prompt then simply says "Don't lose your savings estimate — we'll text it to you," offering to save/send their *own already-computed number* rather than a generic discount pitch. This reframes exit-intent from "one more sales push" to "a genuine convenience," which is both higher-converting and more honest.

### 8.5 Trust Placement
Per Deliverable 4's IA, trust signals are distributed across the page rather than clustered in one block: press logos near the top (pattern-interrupt), the four-axis trust pillars mid-page, the guarantee spotlight as its own moment, and quantified testimonials later — trust should compound as the visitor scrolls, not spike once and fade.

### 8.6 Testimonials & Social Proof
- Lead with the **number**, not the sentiment: "₹18,000 → ₹0" as the visual headline of a testimonial card, quote as supporting text — reverses the typical hierarchy (quote-first) because numbers are what a skeptical bill-payer scans for first.
- Mix formats: video (highest trust, lowest scan-speed) + text-with-photo (fast scan) + case-study links (deepest proof, for high-intent visitors) — cover the full spectrum of visitor patience.

### 8.7 Savings Visualization
The calculator output should visualize three things simultaneously, not just a single number: (1) monthly bill before/after (bar comparison), (2) cumulative 25-year savings (a rising line, since this reframes a "big upfront cost" purchase into a "large lifetime gain" purchase), and (3) environmental equivalence (trees/CO₂) personalized to their system size — turning an abstract "you save money" into three distinct, memorable takeaways.

### 8.8 Government Subsidy Messaging
Treat the subsidy as a **countdown-free urgency device rooted in fact**, not manufactured pressure: state plainly that subsidy amounts and eligibility are set by current government policy and could change with future scheme revisions — this is genuinely true (schemes are periodically revised) and creates legitimate reason-to-act-now without resorting to fake countdown timers (which the research explicitly flagged as a trust-eroding pattern on Freyr Energy).

### 8.9 Guarantees & Certifications
A named, brand-owned guarantee product (Deliverable 6.6) outperforms a generic "we offer a warranty" statement because it's memorable and referenceable ("ask about our [BrandName] Guarantee" is a shareable phrase; "ask about our warranty" is not). Certifications (UL, MNRE empanelment, IIT-tested structural claims) should appear as **visual badges near the point of the specific claim they support** (e.g., the storm-rating claim gets the IIT-testing badge right next to it), not as a disconnected logo strip.

### 8.10 Addressing Customer Objections (Explicit Objection Map)

| Objection | Where it's answered | How |
|---|---|---|
| "Will it look ugly on my roof?" | Section 9 (See It On Your Home) | Visual roof preview |
| "Can I trust the subsidy/paperwork process?" | Section 8 (Subsidy Explainer) + guarantee spotlight | Plain-language table + "we handle it" claim, reinforced by process section |
| "What if it breaks / underperforms?" | Guarantee spotlight | Named, quantified guarantee (e.g., generation guarantee with money-back terms) |
| "Is this company legitimate / will they still exist in 10 years?" | Trust bar + press mentions + case studies | Funding news, press logos, install-count stats |
| "Can I actually afford this?" | Calculator + financing page | EMI breakdown, $0/₹0-down framing |
| "How long does installation actually take?" | How It Works (scroll story) | Concrete day/week estimates per step |
| "What happens after installation — am I on my own?" | App section + AMC/maintenance messaging | Real-time monitoring app, multi-year maintenance commitment |
| "Does it work in monsoon/cloudy weather?" | FAQ (kept, since it's a real, specific technical question best answered in that format) | Direct factual answer |

### 8.11 Psychological Triggers (Used Responsibly)
- **Social proof** (rating counts, install counts) — used throughout, always with real, specific numbers rather than vague claims.
- **Authority** (press mentions, certifications, IIT-testing) — placed early and re-echoed at point-of-claim.
- **Loss aversion, framed honestly** (cost of *not* switching — rising tariff trend chart) rather than manufactured scarcity (rejected countdown timers).
- **Reciprocity** (free calculator, free 3D design, free site visit) — the "free value first" pattern already used well by SolarSquare, retained and made even more prominent by moving the calculator earlier in the IA.
- **Commitment/consistency** (multi-step form where the first small step — pincode+bill — is easy, making the second step feel like a natural continuation rather than a fresh ask).

---

## 9. DELIVERABLE 9 — Mobile-First Optimization

Mobile is the primary design target for this category — the vast majority of Indian solar research and lead-gen traffic is mobile, evidenced by every competitor site shipping distinct mobile hero assets and WhatsApp-first contact fields. Every section below is specified mobile-first, with desktop treated as an enhancement.

### 9.1 Layout Changes by Section
- **Hero:** Single-column, headline max 3 lines at mobile type scale, hero image cropped to a portrait-friendly focal point (not a desktop 16:9 image simply scaled down — a genuinely separate crop, matching SolarSquare's own good practice of serving distinct mobile/desktop hero assets).
- **Trust pillars:** Horizontal swipe-snap carousel instead of a 4-column grid — avoids either cramming 4 items into one mobile screen or forcing 4 separate full-width stacked blocks that push key content far down the page.
- **Calculator:** Full-width, single-column, sticky "Calculate" button pinned above the mobile keyboard when a field is focused (critical — a submit button hidden behind an open keyboard is a top mobile-form abandonment cause).
- **Process/How It Works:** No scroll-pinning on mobile (per Deliverable 7.4) — clean vertical stepper instead, each step full-width with generous tap-to-expand detail.
- **Testimonials:** Single-card swipe view with a visible partial peek of the next card (signals "more here," addressing a common mobile-carousel discoverability failure).
- **Subsidy/pricing table:** Card-per-row transformation, never a horizontally-scrolling table (per Deliverable 6.7).
- **Footer:** Accordion-collapsed link groups (Quick Links / Cities / Legal) rather than SolarSquare's fully-expanded multi-column footer, which becomes an extremely long scroll on mobile.

### 9.2 Spacing & Touch Targets
- Minimum touch target: 44×44px (iOS HIG) / 48×48px (Material) — the new system standardizes on 48px as the universal minimum across both platforms.
- Minimum spacing between adjacent interactive elements: 8px, to prevent mis-taps on dense sections like the calculator's bill-range selector.
- Section vertical padding reduced from desktop's 64–128px to 48–64px on mobile — enough to maintain rhythm without excessive scroll fatigue.

### 9.3 Sticky Buttons
- Bottom sticky bar (per Deliverable 6.8), safe-area-inset-aware for notch/home-indicator devices, with two actions max (Calculate / WhatsApp) — never more than two, since a 3+ action sticky bar on a narrow viewport forces cramped, error-prone tap targets.

### 9.4 Forms
- Numeric keyboard auto-invoked for pincode/phone/bill fields (`inputmode="numeric"` / `type="tel"`).
- WhatsApp-first contact field (matches proven category pattern from SolarSquare/Freyr) with a small WhatsApp icon in the field itself, signaling the expected format immediately.
- Auto-advance focus to the next field on valid pincode completion (6 digits) — removes a manual "next field" tap.
- Inline, real-time validation (not only on submit) so errors are caught early rather than discovered after a full-form scroll-back.

### 9.5 Typography on Mobile
- Body copy floor: 15px (never smaller — a common mobile-web legibility failure).
- Line-length capped at ~60 characters even on wider mobile viewports (tablets) via max-width on text blocks, not just full-bleed.
- Headline line-count capped at 3 lines through fluid `clamp()` sizing rather than allowing awkward 4–5 line hero headlines on small devices.

### 9.6 Image Cropping & Performance
- Art-directed `<picture>` sources per breakpoint (not just responsive `srcset` scaling) for hero and section-lead images — mobile crops emphasize the roof/panel subject tighter, since wide establishing shots lose all detail at mobile width.
- All below-the-fold images lazy-load with a low-quality-image-placeholder (LQIP) blur-up, never a blank layout-shifting gap.
- WebP/AVIF with JPEG fallback; target under 150KB per hero image at mobile resolution.

### 9.7 Scroll Behaviour
- No scroll-jacking or pinned sections on mobile (per 9.1/7.4) — native scroll momentum is never intercepted, since mobile users are far less tolerant of hijacked scroll than desktop users.
- Section-reveal animations use lighter, shorter durations on mobile (200–300ms vs. desktop's 300–500ms) to feel responsive rather than sluggish on lower-powered devices.

### 9.8 Gesture Interactions
- Swipe-snap carousels (trust pillars, testimonials, project gallery) use native scroll-snap CSS wherever possible rather than a JS carousel library, for both performance and native-feeling momentum/rubber-banding.
- Calculator slider is drag-optimized with a generously oversized invisible hit-area beyond the visible thumb (common pattern for improving slider usability on touch).

### 9.9 Tablet Adaptations
- Tablet (768–1024px) is treated as its own explicit breakpoint, not just a stretched mobile or squeezed desktop: trust pillars go 2-column (not 4, not 1), calculator retains the desktop two-column layout since tablet width comfortably fits it, and the mega-menu collapses to the mobile drawer pattern below 1024px (touch-primary devices, even at tablet width, generally behave more like mobile for menu interaction).

---

## 10. DELIVERABLE 10 — Google AI Studio Master Build Prompt

Copy everything in the fenced block below directly into Google AI Studio (or any comparable AI app-builder) as a single build instruction.

```
ROLE
You are a senior product designer and frontend architect at a top-tier digital
agency (think: the design and engineering quality of Cuberto, Locomotive,
Ramotion, Pentagram, and Apple's marketing site team combined). You build
production-grade, original, premium marketing websites — never templates,
never clones.

PROJECT
Build a completely original, premium marketing website for a residential
rooftop solar company in India. The company designs, installs, and maintains
solar panel systems for homes, helping families cut electricity bills by up
to 90% with government-subsidy support, transparent pricing, and a branded
performance guarantee.

STRATEGIC CONTEXT (read carefully, then never reference this text again)
The client admires solarsquare.in for its structure, business model, and
customer journey. You must NEVER copy solarsquare.in's layout, wording,
artwork, icons, illustrations, or specific visual design. Instead, you are
implementing an independently-researched, superior strategy that:
- Keeps the parts of the residential-solar customer journey that work
  (segment clarity, a savings calculator, a clear multi-step process,
  strong trust signals, a branded guarantee, transparent subsidy math)
- Fixes every UX weakness found in the category (redundant/competing lead
  forms, buried trust content, no visual answer to "will this look good on
  my roof," no motion/scroll storytelling, no dedicated "why now" framing,
  weak accessibility, inconsistent icon systems, cluttered urgency tactics)
- Elevates the whole experience with premium motion, a disciplined design
  system, and mobile-first execution

INFORMATION ARCHITECTURE (homepage section order — build in this exact order)
1. Sticky header — transparent over hero, solid on scroll; primary nav:
   Home / How It Works / Technology / Guarantee / Projects / Reviews / FAQ;
   persistent single CTA button: "Get My Free Savings Estimate"
2. Hero — outcome-led headline (2 lines max), one CTA, a rating/proof strip
   directly below the CTA (e.g., "4.8★ rated · 15,000+ installations"),
   hero visual: an isometric illustrated house with solar panels (NOT a
   stock photo, NOT a literal copy of any real company's illustration)
3. Trust bar — press-style logo strip + certification badges (fictional
   but realistic: e.g., "ISO Certified," "MNRE listed," a structural
   wind-rating claim) — keep entirely original naming and numbers,
   clearly placeholder/illustrative, not impersonating any real company
4. "The Problem" — a short section naming rising electricity costs, with
   a simple animated bar/line chart showing illustrative tariff growth
   over time
5. Interactive Savings Calculator — two inputs (pincode, average monthly
   bill), real-time slider-driven output: system size, monthly savings,
   25-year cumulative savings, subsidy amount, effective cost, and an
   environmental-equivalence stat (trees/CO2) — all values computed
   client-side from simple illustrative formulas (document your formula
   assumptions in a code comment)
6. "How It Works" — 4-step scroll-driven storytelling section (survey →
   3D design/preview → installation & subsidy paperwork → live + monitored)
   with numbered steps, icon line-draw animation on scroll-into-view;
   on mobile, degrade gracefully to a clean vertical stepper (no
   scroll-jacking on mobile)
7. Trust Pillars — 4-card grid covering: financial trust (guarantee),
   structural trust (build quality/wind rating), service trust
   (multi-year maintenance), social trust (rating/install count)
8. Government Subsidy Explainer — a clear table of illustrative subsidy
   tiers by system size, plus 2–3 lines of eligibility guidance
9. "See It On Your Home" — a visual section showing an illustrated
   before/after or interactive roof preview concept (can be a simple
   toggle/slider component swapping between two illustrated house states)
10. Guarantee Spotlight — a named, branded guarantee product (invent an
    original name, e.g., "SunSure Promise" — do NOT reuse any real
    competitor's product name) with a 2x2 feature-icon grid and a dark or
    gradient section background for tonal separation from surrounding
    light sections
11. Projects / Case Studies — a filterable grid or simple map-styled
    layout of illustrative project cards (city, system size, savings)
12. Testimonials — video-style and text testimonial cards, each leading
    with a bold quantified outcome (e.g., "₹15,000 → ₹1,200 / month"),
    swipeable carousel on mobile with visible next-card peek
13. Technology & Guarantees deep-dive — dark-mode section covering panel
    quality, inverter, mounting/structural engineering, and warranty terms
14. App / Post-Install Experience — a short section describing a
    real-time monitoring companion app with 3–4 feature icons
15. FAQ — categorized accordion (Product / Financial / Technical /
    Process), single-open behavior, at least 10 realistic Q&As
16. Final CTA section — one consolidated multi-step lead form (Step 1:
    pincode + bill, pre-filled if the calculator was already used in this
    session via component state; Step 2: name + WhatsApp-style phone
    field; Step 3: confirmation state with a simple "what happens next"
    mini-timeline)
17. Footer — link columns, contact block, social icons, and a compact
    closing trust echo (rating + guarantee mention)

ALSO BUILD:
- A persistent mobile bottom sticky bar (Calculate / Contact actions) and
  a slim desktop sticky bar that appears after the hero scrolls out of view
- A `prefers-reduced-motion` code path that disables all scroll-pinning,
  parallax, and count-up animation in favor of instant, static equivalents

DESIGN SYSTEM (implement as CSS custom properties / a shared theme object —
do not hardcode values inline)
- Typography: a humanist/grotesque display face for headlines, a highly
  legible workhorse sans for body and forms; fluid type scale using
  clamp() from mobile to desktop; body copy never below 15px
- Spacing: 8px base grid (4/8/12/16/24/32/48/64/96/128)
- Grid: 12 columns, 1280px max content width, breakpoints at 375/768/1024/1440
- Radius: 8px (inputs/chips) / 16px (cards) / 24px (hero panels/modals) /
  999px (pills)
- Elevation: 3 levels only (resting / hover / modal), always via
  box-shadow + optional transform, never via border color alone
- Color: a primary "solar blue" (trust/technology), a warm "solar gold"
  accent used ONLY for savings/guarantee moments (never as a general
  decorative color), a savings-green for positive financial figures, a
  light neutral surface system, and one dark navy surface reserved for
  the Technology/Guarantee section only — the site's dominant mode is
  light, warm, and optimistic, not dark
- Icons: single-weight line icon style, consistent stroke width and
  corner treatment throughout — never mix filled and outlined icons
- Illustration: flat-with-soft-depth isometric style for house/roof/process
  illustrations — original artwork only, described in code as SVG/vector
  shapes you generate, never referencing or attempting to reproduce any
  real company's actual icon or illustration files

MOTION RULES
- Page load: header and hero animate in first (headline reveal, then CTA
  and proof strip staggered ~80ms after), nothing below the fold
  pre-animates on load
- Scroll reveals: opacity + 24px translateY on 20% visibility threshold,
  300-500ms, cubic-bezier(0.16, 1, 0.3, 1) for larger reveals
- Counters animate 0 → final value over ~1200ms on scroll-into-view with
  an ease-out deceleration curve, and MUST render a correct static final
  value if JavaScript fails or before hydration (no visible "0" flash)
- Buttons: 100ms press-scale (0.97), loading state locks button width and
  swaps label for an inline spinner
- Calculator: slider drag updates output numbers continuously in real time,
  not only on release or submit
- Cards: hover lifts (translateY -4px + shadow increase) on desktop only;
  tap-scale (0.98) feedback on touch, no hover-dependent information ever
  hidden behind a hover state on touch devices
- All animation code must use transform/opacity only — never animate
  top/left/width/height/box-shadow directly

CRO REQUIREMENTS
- Exactly ONE primary CTA phrase used verbatim across header, hero, sticky
  bar, and final section (e.g., "Get My Free Savings Estimate") — do not
  vary the wording
- The savings calculator must be usable and show a real (formula-driven)
  result BEFORE any name/phone/email is requested — never gate the
  calculator behind a form
- Only ONE full lead-capture form on the entire page (the final consolidated
  multi-step form) — do not add a popup-on-load, a slide-in, and an inline
  form as three separate competing asks
- No countdown timers, no fake scarcity, no autoplay-with-sound video

ACCESSIBILITY (WCAG 2.1 AA)
- All interactive elements keyboard-operable with visible focus states
  (2px outline, offset, sufficient contrast)
- Color contrast minimum 4.5:1 for body text, 3:1 for large text/icons
- Every image has meaningful alt text (or is marked decorative/aria-hidden
  if purely ornamental)
- Accordions and carousels use correct ARIA patterns (aria-expanded,
  aria-controls, live regions for step changes)
- Respect prefers-reduced-motion fully, as specified above
- Forms have properly associated <label> elements, inline validation
  messages linked via aria-describedby, and errors are never conveyed by
  color alone (pair with icon + text)

TECHNICAL REQUIREMENTS
- Semantic HTML5 throughout (proper heading hierarchy h1→h6, <nav>,
  <main>, <section>, real <table> markup for the pricing/subsidy table —
  never a div-grid pretending to be a table)
- Mobile-first CSS, responsive at all breakpoints specified above
- Lazy-load all below-the-fold images and any heavy motion assets
- Core Web Vitals discipline: reserve space for images/dynamic content to
  prevent layout shift (CLS), defer non-critical JS, keep the largest
  hero asset optimized and prioritized for LCP
- Clean, componentized code structure (one concern per component/section)
  so the client's team can maintain and extend it
- SEO-friendly structure: descriptive <title>, meta description, one <h1>
  per page, logical heading hierarchy, descriptive link text

CONTENT RULES
- Write all copy yourself, original, benefit-led, plain-language — do not
  copy sentences, headlines, or taglines from any real company
- Use realistic but clearly placeholder numbers/claims (mark financial and
  subsidy figures as illustrative) — do not present invented statistics as
  verified real-world government data
- Keep tone confident, warm, and plain-spoken — avoid jargon-heavy or
  overly technical language in customer-facing copy; technical depth
  belongs in the dedicated Technology section only

QUALITY BAR
The finished site should feel like it was designed by a top-tier digital
product agency: intentional typography, disciplined color usage, a
motion system that feels alive but never gratuitous, flawless mobile
behavior, and a customer journey that answers objections in the right
order without ever asking for the same information twice. It should look
nothing like any existing solar company's website while clearly serving
the same residential rooftop solar audience and the same underlying
business model. Build it now.
```

### 10.1 How to Use This Prompt
1. Paste the fenced block as-is into Google AI Studio's build/chat interface.
2. If the tool asks for a framework preference, specify React + Tailwind (or plain HTML/CSS/JS) as a follow-up — the prompt above is framework-agnostic by design so it works either way.
3. Review the first draft against Deliverables 4–9 above as a checklist; iterate section-by-section rather than regenerating the whole site at once, since large single-shot regenerations tend to lose earlier design-system discipline.
4. Once structure is approved, run a dedicated follow-up pass focused only on motion polish (Deliverable 7) and one focused only on accessibility (WCAG checklist in the prompt) — treating these as separate passes produces materially better results than asking for everything simultaneously.

---

## Closing Note

This blueprint deliberately keeps every category-proven mechanic (savings calculator, 4-step process, subsidy transparency, WhatsApp-first contact, guarantee-as-product) because these are genuinely what this audience needs to make a confident decision — the goal was never novelty for its own sake. The differentiation comes from sequencing (value before ask), consolidation (one form, one CTA phrase, no redundant asks), the missing "see it on your home" visual proof, a disciplined motion and design system, and closing the accessibility and mobile-craft gaps every competitor left open. That combination — not a new gimmick — is what makes this the stronger site.
