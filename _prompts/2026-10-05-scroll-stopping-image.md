---
title: "Make a ChatGPT image that stops the scroll"
slug: scroll-stopping-image
category: images
category_label: Image Generation
difficulty: intermediate
tools: [chatgpt, gemini]
read_time: 7
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: [essential]
related: [image-brief-builder, consistent-character-series]
art: palette
tags: [image generation, social media, thumbnails, chatgpt, viral content]
excerpt: "Designs an image for the size it will actually be seen at: one idea, one subject, and a composition that survives being shrunk to a stamp."
prompt: |
  You are a visual editor whose only job is to make someone stop. You know
  that a feed image is first seen at about 120 pixels wide, beside a caption,
  a name and a row of buttons. Anything that does not survive that size is
  wasted work.

  ## What I will give you
  - The subject, in one sentence:
  - Where it gets posted (feed, short video cover, article thumbnail):
  - The single idea a viewer should take without reading the caption:

  ## Produce in this order

  1. **One idea.** Restate the image as one sentence a stranger could repeat
     after seeing it once. If it needs "and" to fit, cut half of it and tell
     me which half is the image.

  2. **Thumbnail test.** Describe how it reads at 120 px wide. Name the first
     shape the eye lands on and the second. If they are the same shape, the
     image has no hierarchy and you should say so now.

  3. **Composition.** Subject placement, the crop boundaries, and what may sit
     in the outer 15 percent, because the platform will cover it with its own
     interface.

  4. **Contrast map.** Where the brightest and darkest values sit and the one
     edge where they meet. That edge is the image; describe it before anything
     else.

  5. **Colour budget.** Three colours with hex values and the job each one
     does, plus one colour excluded so the palette cannot drift between
     generations.

  6. **Type space.** Where a two-word caption or a platform badge can sit
     without touching the subject, or the single word "none" if the image is
     better without one.

  7. **Three variants.** The same subject at three crops or angles, each with
     one sentence naming the feed it is for.

  ## Rules
  - Everything physical: shapes, values, distances, materials, light.
  - One subject. If the sentence contains "and", split it.
  - No quality adjectives. "Bold", "eye-catching" and "professional" describe
    a reaction, not a picture, and they produce the same generic result every
    time.
  - If the thumbnail test fails, say so before continuing and give the single
    change that fixes it.
  - Finish with one paste-ready prompt for an image model, under 90 words,
    with no commentary around it.
workflow:
  - "Compress the idea into one sentence"
  - "Prove it survives at 120 pixels wide"
  - "Lock composition, contrast and a three-colour palette"
  - "Ship three crop variants plus a paste-ready prompt"
output_preview: "A seven-step teardown ending in three feed-specific variants and a sub-90-word prompt you can paste straight into ChatGPT."
how_to_use:
  - "Write the one-line idea before anything else. Most failed images are two good ideas fighting for the same frame."
  - "Actually shrink your reference to thumbnail size before you accept the composition. Reading it at full size hides the problem."
  - "Post the three variants on different days rather than side by side, so you learn which composition earned the stop instead of which one won a popularity contest."
  - "Keep the excluded colour. It is the only part of the palette that stops the model improvising between runs."
tips:
  - "The outer 15 percent rule matters more than the subject. A perfect image with a like button over the face is a bad image."
  - "If the caption test needs words to work, the image is an illustration of the caption, not a replacement for it. Ask for a different concept."
  - "Ask for the contrast map first when the model gives you a muddy result. Flat value ranges are the usual cause, not style."
  - "Reuse the three colours as your account palette. Repetition across posts builds recognition faster than any single post going off."
example_output: |
  ONE IDEA
  A single cracked egg, mid-fall, one yolk still whole.

  THUMBNAIL TEST AT 120 PX
  First shape: the yolk, a bright disc slightly left of centre. Second shape:
  the dark shell edge arcing above it. The background is a flat mid-grey that
  separates both.

  CONTRAST MAP
  Values peak at the yolk (#f5c542) and trough inside the shell shadow
  (#14161a). The edge where they meet runs diagonally from lower-left to
  upper-right and is the only high-contrast boundary in the frame.

  COLOUR BUDGET
  #f5c542 yolk as the single focal accent, #14161a shell and cast shadow for
  structure, #d7d3cc background as neutral ground. Exclude all blue.

  TYPE SPACE
  Lower-left quadrant, clear of the yolk and the shell, for a two-word badge.

  PASTE-READY
  Macro photograph of one cracked brown egg falling, yolk still unbroken and
  bright, shell fragments suspended above it. Hard key light from the upper
  left, deep shadow under the shell. Flat neutral grey background, generous
  clear space lower left. Shallow depth of field at 100mm, f/2.8. Palette
  limited to amber, near-black and warm grey. No blue, no text, no hands.
faq:
  - q: "Does this work for text-heavy images like quote cards?"
    a: "It works better than a generic prompt, because the type space step forces the layout to be decided up front. But a quote card has two subjects, the words and the picture, so give it the words first and let the image be background."
  - q: "Why three colours and not a whole palette?"
    a: "Because a longer palette is a suggestion and a shorter one is a constraint. Three with an exclusion is enough to make two generations look like the same account."
  - q: "What if ChatGPT still gives me a flat, forgettable result?"
    a: "Ask it for the contrast map alone, before the rest of the teardown. Flat value ranges are almost always the cause, and fixing the values fixes the image even when the subject is unremarkable."
  - q: "Should I show it the image I want to compete with?"
    a: "Yes, as a layout reference rather than a style reference. Describe what the competing image does structurally, then ask for your subject under the same structure."
---
