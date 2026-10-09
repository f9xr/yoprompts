---
title: "Keep the same character in every image"
slug: consistent-character-series
category: images
category_label: Image Generation
difficulty: intermediate
tools: [chatgpt, gemini, claude]
read_time: 7
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: [essential]
related: [image-brief-builder, scroll-stopping-image]
art: palette
tags: [image generation, character design, series, consistency, chatgpt]
excerpt: "Builds a reusable character sheet with fixed facts, then generates scene prompts that repeat those facts verbatim, so a series never drifts."
prompt: |
  You are a character designer who has to ship the same person twenty times
  without the face, the coat or the proportions changing. You know that a
  model will happily redraw the character slightly differently every time
  unless the facts it must repeat are written down and repeated back.

  ## What I will give you
  - Who the character is, in one sentence:
  - The setting or series this belongs to:
  - What has to stay identical across every image:

  ## Produce in this order

  1. **Identity block.** Eight fixed facts that never change: apparent age,
     build, height impression, hair (length, colour, parting), face (the one
     feature that anchors recognition), default outfit and its two visible
     details, one accessory, and the colour the character always owns.

  2. **Anchor feature.** The single trait that carries recognition when
     everything else is cropped or in shadow. One sentence, chosen for
     contrast rather than for beauty.

  3. **Repeated wording.** The exact sentence that will be pasted at the top
     of every scene prompt, unchanged. This block is the mechanism, so it
     must be copy-pasteable, not described.

  4. **Scene prompts.** Five scenes in the same series, each written as:
     the repeated wording, then one new sentence for the action, the light
     and the framing, then the exclusions.

  5. **Deliberate variation.** For each scene, the one thing allowed to
     change (camera distance, time of day, weather) so the series has rhythm
     without losing the character.

  6. **Drift check.** After all five, list the three facts most likely to
     slip between generations and how each would be spotted in a contact
     sheet.

  ## Rules
  - The identity block is descriptive, never a reference to another person
    or character. If it cannot stand alone, rewrite it.
  - Every scene prompt repeats the same wording word for word. Do not
    paraphrase it, do not abbreviate it.
  - Exclusions are mandatory: name at least the three elements that would
    break the series if they appeared.
  - Describe the character physically, not by temperament. "Confident" cannot
    be drawn.
  - Output the five scenes as separate blocks I can copy one at a time.
workflow:
  - "Write eight immutable identity facts"
  - "Pick one anchor feature that survives a crop"
  - "Freeze a repeatable sentence for every scene prompt"
  - "Generate five scenes with one controlled variation each"
output_preview: "A fixed identity block, one copy-pasteable sentence, five scene prompts and a drift check that tells you what to look for in a contact sheet."
how_to_use:
  - "Paste the repeated wording exactly as given. Editing it between generations is the most common cause of drift and it is entirely avoidable."
  - "Generate all five scenes in one session. Split across sessions, a model resets its interpretation of the identity block."
  - "Look at the drift check before you look at the pictures. It names the three failures worth hunting for and saves you a lot of squinting."
  - "When a scene fails, regenerate only that scene with the identity block pasted again, rather than changing the block itself."
tips:
  - "Give the character one owned colour. Series recognition comes from a repeated colour before it comes from a repeated face."
  - "Keep the anchor feature high-contrast. A subtle trait disappears under different lighting and the series splits in two."
  - "Two visible outfit details is the right number. One reads as an accident, four reads as a costume that gets redrawn differently each time."
  - "If you need the character at different ages or in different outfits, fork the identity block into a dated version rather than editing it in place."
example_output: |
  IDENTITY BLOCK
  Apparent late twenties, lean build, reads tall. Dark hair to the jaw, parted
  on the left, one strand falling forward over the right eye. Sharp nose,
  wide-set eyes, faint scar through the left eyebrow. Olive field jacket with
  a folded left sleeve and a brass zip pull. Wears a plain silver ring on the
  right hand. Owns the colour rust.

  ANCHOR FEATURE
  The scar through the left eyebrow: it survives shadow, profile crops and
  distance in a way nothing else does.

  REPEATED WORDING
  A lean figure in their late twenties, jaw-length dark hair parted left with
  one strand over the right eye, a scar through the left eyebrow, an olive
  field jacket with a folded left sleeve, a silver ring on the right hand,
  wearing rust.

  SCENE 1
  [Repeated wording] Standing under a rust awning in flat rain, three-quarter
  framing at eye level, hard practical light from a shop window to the left.
  Exclude text, extra figures, logos.

  DRIFT CHECK
  The strand over the right eye, the folded left sleeve, and the ring hand.
  All three vanish first, all three are visible in a contact sheet without
  zooming.
faq:
  - q: "Why not just describe the character once and trust the model?"
    a: "Because a description written fresh each time is a description written differently each time. The fixed block exists so the wording, not your memory, is what carries the identity."
  - q: "Does this work for images where the character is far away?"
    a: "Partly. At distance the anchor feature carries the recognition and everything else becomes silhouette. That is why the anchor is chosen for contrast rather than for detail."
  - q: "How many scenes can I get away with before it drifts anyway?"
    a: "Within one session, most models hold five comfortably. Past that, paste the identity block again at the start of the next batch instead of assuming continuity."
  - q: "Can I use a photo of myself as the identity block?"
    a: "Yes, and for a self-portrait series it is the most reliable option. Keep the written block as well, because it tells the model what to look for rather than leaving it to interpret the photo."
---
