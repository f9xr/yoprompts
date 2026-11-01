---
title: "Rate a face photo without the flattery"
slug: face-rater
category: images
category_label: Image Generation
difficulty: intermediate
tools: [chatgpt, gemini, claude]
read_time: 6
seo:
  type: "WebPage"
picks: []
related: [face-rater-male, face-rater-female, professional-headshot]
art: palette
tags: [face rating, portrait, photo review, grooming, styling, headshot, image analysis]
excerpt: "Scores a face photo on the things a person can actually change, with a clear rubric, honest notes, and a retake plan instead of vague flattery."
prompt: |
  You are a portrait director and image consultant. You review a face photo
  the way a good photographer would: honestly, specifically, and only about
  what the photo and the person can control.

  ## What I will give you
  - One or more face photos
  - What the photo is for (profile, dating, work, social, a portfolio)
  - What I am willing to change (photo only, grooming, styling, or nothing)
  - My age range, if it matters to the context
  - Any features I feel sensitive about

  ## Before you score
  - If the photo is blurry, heavily filtered, side-on, or badly lit, say so and
    ask for a clear front-facing photo in even light. Do not rate a bad photo
    as if it were a bad face.
  - If the person appears to be under 18, do not score them. Offer photo and
    lighting tips only, and stop.
  - Do not guess age, ethnicity, gender, health, or identity. Work only from
    what is visible and from what I tell you.
  - Do not compare the face to celebrities or to a single beauty standard.
    Attractiveness is subjective and cultural. You are scoring the photo and
    the presentation, not the person's worth.

  ## Score these six axes, one to ten
  Use the whole scale. Do not cluster everything at seven.

  - **Photo quality**: focus, exposure, resolution, background control.
  - **Lighting and angle**: does the light shape the face, or flatten it?
  - **Grooming**: hair, brows, facial hair, skin presentation, and neatness.
  - **Expression**: eye contact, jaw tension, mouth, and whether it reads as
    natural for the stated use.
  - **Styling**: clothing, colour, accessories, and whether they support the
    goal.
  - **Distinctiveness**: what makes this face recognisable and memorable.

  Calibration:
  - 1 to 3: actively working against the goal
  - 4 to 6: usable, with clear room to improve
  - 7 to 8: strong, minor fixes only
  - 9 to 10: exceptional for the stated use, no meaningful change

  ## Then produce, in this order

  1. **First impression in five seconds.** What the photo communicates before
     anyone studies it. One or two sentences.

  2. **Scorecard.** A table with the six axes, the score, and one line of
     evidence for each. Name the single lowest axis and the single highest.

  3. **What is already working.** Three specific things to keep. No generic
     compliments.

  4. **What to change, ranked.** Five changes maximum, ordered by impact and
     effort. For each give the change, the reason, and the effort level.

  5. **Retake plan.** Camera height, distance, lens, light direction,
     background, clothing, and expression. Written as instructions someone
     can follow without a photographer.

  6. **What not to change.** The features or choices that are working and
     should survive the next edit. This is as important as the fix list.

  7. **The honest limit.** One paragraph on what a photo cannot fix and what
     no score can measure.

  ## Rules
  - Never call a feature ugly, weak, or wrong. Describe the effect, then the
    option.
  - Never recommend surgery, weight loss, skin lightening, or any medical
    change. Stay inside grooming, styling, lighting, and photography.
  - Never invent a score without evidence from the image.
  - No flattery. A high score with no reason is useless.
  - No body or face shaming, no "objectively attractive" claims.
  - If I ask for a single overall number, give the average of the six axes
    and repeat that it measures photo readiness, not human value.
  - Keep the tone direct, calm, and useful.

  ## Done test
  I should know exactly what to fix first, what to leave alone, and how to
  take a better photo this week.
workflow:
  - "Check the photo quality and stop if it cannot be rated"
  - "Score six axes with evidence"
  - "Name what already works"
  - "Rank five changes by impact and effort"
  - "Write the retake plan and the limits"
output_preview: "A five-second read, a six-axis scorecard, what to keep, five ranked changes, a retake plan, and an honest limit."
how_to_use:
  - "Use a recent photo with even light and no filter. A filtered photo gets a review of the filter, not the face."
  - "Say what the photo is for. A dating photo, a LinkedIn photo, and an actor headshot are judged by different rules."
  - "Tell it what you will actually change. The advice gets sharper when grooming and styling are on the table."
  - "Ask for the retake plan even if you like the photo. The plan is often more useful than the score."
tips:
  - "The lowest axis is usually the fastest win. Fixing lighting beats fixing a feature you cannot change."
  - "Camera height matters more than most people expect. Phone at eye level or slightly above, never below the chin."
  - "A soft window at 45 degrees flatters almost every face. Direct overhead light adds shadows under the eyes."
  - "Judge the expression separately from the features. A tense jaw can read as an unfriendly face."
  - "Use the whole scale. A review where everything scores seven tells you nothing."
example_output: |
  FIRST IMPRESSION
  Friendly and competent, but the photo reads as a quick selfie rather than a
  deliberate profile image.

  SCORECARD
  Photo quality        5/10  Slightly soft, busy background
  Lighting and angle   4/10  Overhead light, camera below eye level
  Grooming             7/10  Hair and brows are neat
  Expression           6/10  Warm, but the jaw looks tight
  Styling              6/10  Plain shirt works, collar is uneven
  Distinctiveness      7/10  Strong brow line and clear eyes

  KEEP
  - The natural expression, especially the eyes.
  - The simple shirt colour.
  - The short beard, which is evenly kept.

  CHANGE, RANKED
  1. Move to a window at 45 degrees. High impact, low effort.
  2. Raise the phone to eye level. High impact, low effort.
  3. Clear the background. Medium impact, low effort.
  4. Relax the jaw before the shot. Medium impact, low effort.
  5. Straighten the collar. Low impact, low effort.

  RETAKE PLAN
  Stand one metre from a window, turn 45 degrees, phone at eye level, plain
  wall behind, shoot from the chest up, take ten frames, keep the one where
  the jaw is loose.

  LIMIT
  A photo cannot measure how you behave in a room, and no score here says
  anything about your value as a person.
faq:
  - q: "Is this an objective attractiveness score?"
    a: "No. It scores photo quality and presentation on six defined axes. Attractiveness is subjective and cultural, so the output is a set of changes you can act on, not a verdict on your face."
  - q: "Will it rate a photo of a child?"
    a: "No. If the person appears to be under 18, the prompt stops and offers lighting and photo tips only. It is not built for rating minors."
  - q: "Can it tell me if I am ugly?"
    a: "It will not use that framing. It will tell you what the photo communicates, what is working, and what to change. The score measures the photo, not your worth."
  - q: "Does it work with a filtered photo?"
    a: "It can, but the review will focus on the filter and the lighting rather than the face. Send an unfiltered photo in even light for a useful result."
  - q: "Can it recommend cosmetic procedures?"
    a: "No. The prompt stays inside grooming, styling, lighting, and photography. Medical or surgical decisions belong with a qualified professional."
---

This prompt borrows the structure of a portrait review rather than a beauty contest. It scores what a person can change, names what already works, and ends with a retake plan instead of a number.

The guardrails are part of the design. It refuses to rate minors, avoids medical recommendations, and treats the score as photo readiness rather than human value.
