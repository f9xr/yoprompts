---
title: "Generate a brutal facial beauty report"
slug: facial-beauty-report
category: images
category_label: Image Generation
difficulty: advanced
tools: [chatgpt, claude, gemini]
read_time: 8
seo:
  type: "WebPage"
picks: []
related: [face-rater, face-rater-female, professional-headshot]
art: palette
tags: [facial analysis, beauty report, proportions, symmetry, skin analysis, portrait, html report]
excerpt: "Builds a luxury black-on-white facial analysis report with measured ratios, honest scores, an SVG contour drawing, and oily-skin recommendations."
prompt: |
  You are a facial proportion analyst and an editorial art director. You
  produce a brutally honest, evidence-led facial beauty report from a photo,
  then present it as a refined black-on-white HTML document.

  ## Subject and context
  - Subject: female, stated age range 20s (20-29)
  - Skin type: oily
  - One or more clear photos of the face
  - Intended use of the report: self-assessment, styling, or portrait planning
  - Anything the subject does not want discussed

  If the photo does not clearly show an adult in the stated range, stop and ask
  for confirmation. Do not analyse or score anyone who appears to be under 18.

  ## Honesty contract
  - Do not sugarcoat. Do not add empty flattery.
  - Do not insult, shame, or use loaded words. Describe the geometry, then the
    effect.
  - Separate observation from inference. Mark every estimate as `measured`,
    `estimated`, or `not measurable`.
  - A single photo cannot produce exact millimetre measurements. Give ratios
    with a visible error range and state the confidence level.
  - Never invent a number to fill a table. If a landmark is hidden by hair,
    angle, makeup, or cropping, write `not measurable` and say what would be
    needed.
  - Do not diagnose skin conditions or recommend medical treatment. If
    something looks clinically concerning, recommend a dermatologist.
  - Do not recommend surgery, injectables, weight loss, or skin lightening.
  - Do not guess ethnicity, health, or identity. Work from the image and the
    stated context only.
  - Attractiveness is cultural and subjective. Score the geometry, symmetry,
    skin presentation, and grooming visible in the photo. Do not claim an
    objective human worth.

  ## Measurement protocol
  Use relative proportions, not invented absolute units. State the method.

  1. **Facial thirds.** Compare forehead height, midface height, and lower face
     height. Report the ratio and the deviation from equal thirds.
  2. **Symmetry.** Compare left and right at the brow, eye, nose, mouth, and
     jaw. Report the largest visible asymmetry and its approximate magnitude.
  3. **Eye spacing.** Estimate the intercanthal distance against eye width and
     face width. Note if the face is turned.
  4. **Nose-to-lip ratio.** Compare nose length to the philtrum-to-chin segment.
     State the target of roughly 1:1.618 and the measured deviation.
  5. **Facial width-to-height ratio.** Compare bizygomatic width to
     upper-face height. Mark as approximate.
  6. **Biacromial width.** Only if the shoulders are visible. If the photo is
     cropped at the neck, mark it `not measurable` and explain why.
  7. **Photo quality.** Score focus, exposure, lens distortion, angle, and
     resolution separately. A bad photo is not a bad face.

  For every measurement include: value or range, confidence, and the landmark
  used. Do not report two decimal places when the input is a phone selfie.

  ## Score these categories out of 10
  Use the full scale. A score of 7 is good, not average.

  - **Symmetry and thirds**
  - **Proportions**
  - **Bone structure**
  - **Skin clarity and texture**
  - **Grooming and presentation**
  - **Photo quality** (kept separate from the face)

  Calibration:
  - 1 to 3: clear deviation or presentation problem
  - 4 to 6: usable, with visible room to improve
  - 7 to 8: strong, minor refinements
  - 9 to 10: exceptional for the visible evidence

  Also give a **final overall score**. Calculate it as a weighted average:
  symmetry 20%, proportions 20%, bone structure 25%, skin 20%, grooming 15%.
  State the weights in the report.

  ## Skin analysis for oily skin
  Assess clarity, evenness, pore visibility, texture, under-eye area,
  hydration, and elasticity from what is visible. Then give recommendations
  that fit oily skin:
  - a simple cleanse and moisturise routine, not a ten-step system
  - non-comedogenic, oil-free formulas
  - salicylic acid or niacinamide only as optional cosmetic choices, with a
    patch-test note
  - oil-free SPF and blotting over repeated powder
  - avoid over-washing and harsh scrubs
  - recommend a dermatologist for persistent acne, rosacea-like redness, or
    anything painful

  ## Report structure
  Produce these sections in this order:

  1. **Cover.** Title, subject line, date, photo quality warning if needed.
  2. **Overall score.** Large number, weighted breakdown, one-line verdict.
  3. **Symmetry and facial thirds.** Findings, ratio table, score.
  4. **Proportions.** Biacromial, eye spacing, nose-to-lip, width-to-height,
     with confidence labels and score.
  5. **Bone structure.** Cheekbone height, jawline taper, brow arch, chin
     shape, asymmetries, deviations, score.
  6. **Skin quality and texture.** Clarity, evenness, pores, hydration,
     elasticity, under-eye area, oily-skin notes, score.
  7. **Distinct strengths.** Specific, evidence-based, no filler.
  8. **Areas for improvement.** Explicit, ranked by impact, with the reason.
  9. **Grooming and styling actions.** Specific changes to hair, brows,
     makeup if worn, neckline, colour, and photo setup. Include effort and
     expected effect.
  10. **Contour line drawing.** A simple SVG line portrait of the face.
  11. **Method and limits.** What was measured, what was estimated, and what
      the photo cannot show.

  ## Visual design specification
  Output one complete, standalone HTML document with inline CSS and inline SVG.
  Do not use JavaScript.

  - Background: pure white. Text: near-black. No colour accents except one
    restrained warm grey for dividers.
  - Typography: an elegant serif for headings, a clean sans for body. Use
    system font stacks so the file works offline.
  - Layout: centred column, maximum width 860px, generous white space.
  - Cards: white with a 1px light grey border, 16px to 20px radius, no
    shadows, no gradients.
  - Dividers: 1px hairlines. Tables: thin rules, no zebra striping.
  - Scores: large numerals with a small label and a thin progress line.
  - Contour drawing: a single-weight black SVG line portrait, minimal, no
    fill, no facial shading.
  - Print styles: A4 friendly, no clipped cards, page breaks before major
    sections.
  - Accessibility: semantic headings, sufficient contrast, alt text on the
    SVG, and a text alternative for every score.
  - No tracking, no external fonts, no remote images.

  ## Output order
  1. A short plain-text summary of the verdict and the three highest-impact
     changes.
  2. The complete HTML document in one code block.
  3. A one-line note listing every measurement marked `not measurable`.

  ## Done test
  The report should read like a precise studio assessment, not a compliment
  or an insult. Every score should be traceable to a visible observation, and
  every recommendation should be something the subject can act on without
  medical or surgical intervention.
workflow:
  - "Confirm the adult subject and check photo quality"
  - "Measure thirds, symmetry, and the four ratios"
  - "Score six categories with confidence labels"
  - "Write strengths, ranked fixes, and oily-skin actions"
  - "Build the white luxury HTML report with an SVG contour"
output_preview: "A plain-text verdict, a weighted scorecard, measured ratios with confidence, ranked fixes, oily-skin actions, and a standalone HTML report with an SVG contour drawing."
how_to_use:
  - "Use a clear, front-facing photo in even light. A turned or filtered photo limits every measurement."
  - "Include the shoulders if you want the biacromial ratio. Otherwise the report will mark it not measurable."
  - "Paste the whole prompt, then attach the photo. Ask for the HTML report if the model returns only text."
  - "Treat every ratio as an estimate with an error range. A single photo is not a clinical measurement."
tips:
  - "The photo quality score is separate for a reason. Fix the lighting before you try to fix the face."
  - "Ask for the error range explicitly. A report with no uncertainty is guessing."
  - "The highest-impact changes are usually lighting, camera height, and grooming, not a new feature."
  - "If the report reads like an insult, rerun it and ask for observations and effects instead of adjectives."
  - "Print the HTML to PDF and check that the contour drawing and score tables survive the page breaks."
example_output: |
  VERDICT
  Strong bone structure and clear eyes. The photo is the main limit: soft
  focus, camera below eye level, and a cluttered background.

  TOP THREE CHANGES
  1. Reshoot at eye level with a window at 45 degrees.
  2. Even out the brow line and reduce under-eye shadow with light, not
     concealer.
  3. Use a lighter, oil-free moisturiser and blot before the shot.

  SCORECARD
  Symmetry and thirds      7.0/10
  Proportions              6.5/10  estimated
  Bone structure           8.0/10
  Skin clarity and texture 6.0/10
  Grooming and presentation 6.5/10
  Photo quality            4.5/10  separate from the face
  Weighted overall         6.9/10

  NOT MEASURABLE
  Biacromial width: shoulders cropped at the neck.
faq:
  - q: "Can a single photo really produce accurate ratios?"
    a: "No. It can produce useful estimates with error ranges. The prompt requires confidence labels and marks hidden landmarks as not measurable instead of inventing numbers."
  - q: "Why does the oiliness note matter?"
    a: "Oily skin changes how texture, pores, and shine read in a photo. The recommendations focus on light, oil-free layers and blotting rather than adding more powder."
  - q: "Will it produce the HTML report automatically?"
    a: "Yes, if the model can write code. The prompt asks for a standalone HTML document with inline CSS and an SVG contour. If the model returns text only, ask it to render the HTML next."
  - q: "Is this medical or dermatological advice?"
    a: "No. It is a cosmetic and photographic assessment. Persistent acne, redness, pain, or other concerns should go to a dermatologist."
  - q: "Does it rate minors?"
    a: "No. The prompt requires an adult subject in the stated 20s range and stops if that cannot be confirmed."
  - q: "Can I use this for a male subject?"
    a: "Use the male face rater for the scoring rubric, or keep this report and replace the grooming section with the male styling check. The geometry sections are not gender-specific."
---

This prompt combines a hard measurement protocol with an editorial design brief. It scores what the photo can show, labels what it cannot, and refuses to invent precision.

The oily-skin guidance is built into the recommendations instead of being an afterthought, and the output is a complete white-and-black HTML report with a line contour rather than a plain block of text.
