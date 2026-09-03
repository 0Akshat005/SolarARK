SOLARARK — FINAL SURGICAL FIX FOR ALL 4 STEP BACKGROUNDS

DO NOT redesign the component.
DO NOT change typography, copy, spacing, CTA, navigation, colors, or content.

ONLY fix:
A) image darkness / vignette
B) image framing per step

==================================================
A — REMOVE THE EXCESSIVE BLACK VIGNETTE
==================================================

The current background is still much too dark.

This is NOT the intended SolarARK visual treatment.

Remove the heavy black/navy wash and replace it with a VERY SUBTLE
left readability gradient.

The photograph must remain naturally exposed.

Target:
- left edge: only enough darkening for white text
- around 35% width: mostly transparent
- center: transparent
- right 60%: essentially original photograph

Do NOT apply a dark overlay across the whole image.

Do NOT add a second vignette.

Do NOT add a bottom vignette.

Do NOT darken the subject.

Do NOT darken the important equipment.

The photograph should feel approximately 80–90% like the original image.

Think:

ORIGINAL PHOTO
+
SUBTLE LEFT TEXT GRADIENT

NOT:

PHOTO
+
DARK NAVY FILTER

The surrounding Indian architecture, rooftop texture, natural light,
technician and equipment must all remain clearly visible.

==================================================
B — EACH STEP NEEDS ITS OWN IMAGE FRAMING
==================================================

Do NOT use one universal `background-position: center`.

Each step has a different photographic focal point.

----------------------------------------------
STEP 01 — SURVEY
----------------------------------------------

Focal subject:
surveyor + tripod + rooftop.

Keep:
- full surveyor
- tripod
- rooftop
- parapet
- surrounding houses
- water tank / rooftop context

Position the surveyor around the RIGHT 65–75% of the frame.

Keep substantial negative space on the LEFT for text.

Suggested starting point:

background-position: 68% center;

Do NOT zoom unnecessarily.

----------------------------------------------
STEP 02 — DESIGN
----------------------------------------------

Focal subject:
engineer + workstation / solar design visualization.

Keep:
- engineer
- monitor
- design drawing/model
- desk
- realistic workspace
- surrounding environment

Position the primary workstation around the RIGHT/MIDDLE portion.

Keep the LEFT side quieter for text.

Do NOT let text cover the monitor.

Suggested starting point:

background-position: 58% center;

----------------------------------------------
STEP 03 — INSTALL
----------------------------------------------

Focal subject:
technicians + actual solar installation.

Keep:
- foreground technician
- second technician
- solar modules
- mounting structure
- rooftop
- surrounding Indian environment

Place the working technicians toward the RIGHT side.

Keep enough of the solar array visible to immediately communicate
INSTALLATION.

Do NOT crop the foreground worker's body or the active panel area.

Suggested starting point:

background-position: 62% center;

----------------------------------------------
STEP 04 — COMMISSION
----------------------------------------------

THIS STEP REQUIRES SPECIAL FRAMING.

Focal subjects:
technician + complete inverter.

The CURRENT CROP IS WRONG.

The technician and inverter must BOTH remain fully visible.

The inverter must NOT be cut off.
The technician's head, shoulders and operating hand must NOT be cut off.

The inverter should occupy roughly the RIGHT 55–65% region.

The technician should sit around the CENTER-RIGHT.

The LEFT side should contain the darker living-room background,
creating natural negative space for the copy.

Use a slightly wider crop rather than aggressively zooming in.

Suggested starting point:

background-position: 64% center;
background-size: cover;

If the inverter begins to crop, reduce zoom rather than moving it behind
the text.

Do NOT allow the left text to overlap the inverter.

==================================================
C — IMPORTANT: STOP USING ONE OVERLAY/CROP FOR ALL STATES
==================================================

Each slide is an art-directed photograph.

The CSS can share the same component,
but:

background-position
and
overlay strength

must be independently controlled per step.

Use separate classes/data attributes:

.step-survey
.step-design
.step-install
.step-commission

Each gets its own background positioning.

==================================================
D — PRESERVE NATURAL PHOTOGRAPHY
==================================================

Do not make the images look cinematic by crushing the exposure.

No:
- black vignette
- heavy gradient
- dramatic shadow overlay
- artificial blue tint
- excessive contrast
- darkened faces
- darkened equipment

Keep natural daylight / indoor warmth.

==================================================
E — FINAL VISUAL TEST
==================================================

At normal desktop viewing distance:

STEP 01:
I should immediately see a real rooftop survey.

STEP 02:
I should immediately see a real solar design workspace.

STEP 03:
I should immediately see real people installing solar panels.

STEP 04:
I should immediately see a technician commissioning a real inverter.

The photograph must be understandable BEFORE the user reads the text.

If the photograph is difficult to recognize,
the crop or overlay is wrong.

IMPORTANT:
Do not "improve" the composition by adding UI.
Fix the photography with correct framing and restrained overlay.

Make ONLY these image-treatment changes.