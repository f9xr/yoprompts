---
title: "Turn an idea into an image model brief"
slug: image-brief-builder
category: images
category_label: Image Generation
difficulty: beginner
tools: [chatgpt, gemini, claude]
# Measured from rendered page length at ~200 wpm; all six prompt
# pages are within 5% of each other, so they all land on 7.
read_time: 7
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: [essential]
# Every prompt sits in its own category, so the layout's
# same-category fallback can never match. These are curated.
related: [linkedin-post-writer, seo-content-strategy]
art: palette
tags: [image generation, midjourney, art direction, visual design]
excerpt: "Turns a vague idea into a structured image brief: subject, composition, lighting, lens, palette and negative constraints."
prompt: |
  You are an art director who writes briefs for image models. You know that
  these models respond to physical and photographic description, not to
  praise. "Stunning", "beautiful", and "professional" produce the same
  muddy middle-ground image every time.

  ## What I will give you
  - The idea, in whatever form I have it (usually one sentence):
  - Where the image will be used, and its required dimensions:
  - The feeling it needs to carry:
  - What must not change (product shape, face, logo, text, palette):

  ## Produce the brief in this order

  1. **One-sentence subject.** A single person, object, or scene doing one
     specific thing. No adjectives about quality. If my sentence contains
     more than one subject, split it and tell me which one to keep.

  2. **Composition.** Where the subject sits in frame, camera height, angle,
     distance, and how much negative space remains.

  3. **Light.** Source, direction, hardness, time of day, and one named
     lighting setup you can describe physically (rim light, bounce through
     a window, hard noon sun, single softbox at 45 degrees).

  4. **Surface and material.** What the key surfaces are made of, and how
     they behave under that light. This is usually the difference between a
  convincing image and a render.

  5. **Palette.** Four colours with hex values, plus one colour deliberately
     excluded.

  6. **Lens and technical.** Focal length, aperture, and film stock or
     sensor character.

  7. **Negative constraints.** What must not appear, phrased as
     exclusions the model can obey.

  ## Rules
  - Describe what a camera or a lens would see. If a word would not survive
    being pointed at a physical object, cut it.
  - No style-imitation instructions, no artist names, no "trending".
  - If the brief would be under 40 words, something is missing — ask me the
    one question that resolves it rather than padding.
  - Give me the brief as one paragraph, ready to paste, after the breakdown.
  - Then give me two variations that change exactly one parameter each, so I
    can see what that parameter is doing.
workflow:
  - "Compress the idea into one physical subject"
  - "Fix composition, light, and material"
  - "Lock a four-colour palette with one exclusion"
  - "Add lens character and negative constraints"
output_preview: "A seven-part breakdown, a paste-ready paragraph, and two single-variable variations to test what each parameter actually controls."
how_to_use:
  - "Give it the real use and dimensions. A hero image and a thumbnail need different compositions, not the same one cropped."
  - "Always read the negative constraints out loud. That section catches more problems than the positive description."
  - "Paste the paragraph into your model of choice unchanged. Editing it inline removes most of the benefit."
  - "Generate the two single-variable variations before the full set, so you learn which parameter matters."
tips:
  - "Replace every quality adjective with a physical fact. 'Professional headshot' becomes '85mm at f/2, subject turned 30 degrees from camera, soft north light'."
  - "If the result looks like a render, the missing piece is almost always material and light behaviour, not composition."
  - "Ask for the palette as hex values and pass them literally. Vague colour names map to whatever the model felt like."
  - "Keep the negative constraints list. Adding one wrong element per generation is a normal outcome, not a failure."
example_output: |
  SUBJECT
  A mechanic's hands holding a single hex bolt, mid-inspection.

  PASTE-READY
  Extreme close-up of a mechanic's grease-stained hands holding a single
  hexagonal steel bolt at eye level, thumbs and forefinger rotating it
  slowly. Camera 40mm at f/4, shallow focus on the bolt's chamfered
  edge. Hard directional light from a low workshop window at 30 degrees,
  raking across brushed steel. Background falls to near-black with a
  single amber out-of-focus highlight. Palette #1a1c20, #8a8f98, #b8860b,
  #d9cbb0; exclude all blue. No gloves, no text, no logos.

  VARIATION A (change one parameter)
  Same brief, aperture f/11 — the entire bolt goes sharp and the image
  loses its intimacy.
faq:
  - q: "Does this work with Midjourney parameters?"
    a: "Yes. Paste the paragraph as the prompt and then append parameters separately, for example `ar 16:9 --style raw --stylize 150`. The brief itself should stay prose; the parameters are a different layer."
  - q: "Why no style names?"
    a: "Because they cluster the output around whatever the training data associates with that name, which is usually a look rather than an image. Physical description is more controllable and more repeatable."
  - q: "Can I reuse it for video?"
    a: "Partially. Composition, lens, and palette carry over. The subject needs a motion clause, and light behaviour needs to be described across time rather than at an instant."
  - q: "What if my idea genuinely needs a person with an expression?"
    a: "Describe the expression as muscle and posture — brows drawn, mouth held flat — rather than as an emotion. Models map physical description far more reliably than emotional labels."
---