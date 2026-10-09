---
title: "Turn your photo into a collectible figure in its box"
slug: collectible-figure-photo
category: images
category_label: Image Generation
difficulty: beginner
tools: [chatgpt, gemini]
read_time: 7
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: []
related: [image-brief-builder, scroll-stopping-image]
art: palette
tags: [image generation, figurine, product photography, chatgpt, viral content]
excerpt: "Converts a photo of a person into a boxed vinyl figure: proportion rules, packaging layout and studio light described physically, so the result reads as a product shot."
prompt: |
  You are a product photographer and packaging designer shooting a boxed
  collectible figure. You know the illusion depends on two separate things
  being right at once: the figure has to look moulded rather than drawn, and
  the box has to look printed rather than rendered. Fix one without the other
  and the whole image collapses into a toy edit.

  ## What I will give you
  - The person in the photo, described in your own words first:
  - The photo you are converting (describe it or paste it):
  - The setting the box should sit in (studio sweep, desk, shelf, hands):

  ## Produce in this order

  1. **Read the photo.** Describe the person in five physical lines: build,
     hair length and colour, the one feature that makes them recognisable,
     what they are wearing, and their pose. Do not name emotions.

  2. **Figure proportions.** Reduce those five lines to a moulded figure:
     slightly enlarged head, simplified hair mass with two or three sculpted
     clumps rather than strands, three visible points of articulation, and
     the one accessory that carries the likeness.

  3. **The box.** Front window shape, a two-word series name, a name plate, a
     small age badge in the lower corner, and a colour band. Layout top to
     bottom, left to right, in the order a printer would lay it out.

  4. **Lighting.** Key light position and softness, one fill, and the single
     reflection that proves the window is plastic. That reflection is the
     difference between a box and a rectangle.

  5. **Surface.** Matte vinyl on the figure, gloss on the window, slight
     orange-peel texture on the printed card, and a thin seam line where the
     two halves of the head mould meet.

  6. **Composition.** Box angle, distance, and what sits behind it. Include
     the clear space a seller would leave for a price badge.

  7. **Exclusions.** Everything that would break the shot: named brands,
     real logos, legible small print, extra figures, hands that are not
     asked for.

  ## Rules
  - The person must stay recognisable as the person. If the likeness is not
    possible from what I gave you, say which line is missing rather than
    inventing it.
  - Never use a real brand, a real logo, or small print that will render as
    gibberish. Two words maximum anywhere on the box.
  - Everything physical: moulded edges, seam lines, light falloff, reflections.
  - Finish with one paste-ready prompt under 100 words for the whole shot,
    with no commentary around it.
workflow:
  - "Read the photo into five physical lines"
  - "Reduce those lines to a moulded figure with fixed proportions"
  - "Lay out the box like a printer, then light it like a photographer"
  - "Emit exclusions and a sub-100-word paste-ready prompt"
output_preview: "A five-line photo read, a figure spec, a printer-order box layout, a lighting plan with one window reflection, and a prompt you can paste in one go."
how_to_use:
  - "Give it a photo where the face is clear and the clothing is visible. The prompt works from what it can see, and a obscured outfit loses the strongest recognition cue."
  - "Keep the two-word series name short. Long names force the model to invent type, which is where the gibberish text comes from."
  - "Ask for the studio sweep setting first. Hands and shelves are harder because they introduce a second material and a second light."
  - "Check the window reflection before anything else. Without it the plastic reads as paper and the illusion fails immediately."
tips:
  - "The seam line down the side of the head is the cheapest realism available. It is a single detail that tells the eye the object was moulded."
  - "Two visible points of articulation is enough. Four makes it look like an action figure rather than a display piece, which changes the whole genre."
  - "Keep the clear space for a price badge. It forces a composition with margin, and margin is what makes a product shot look deliberate."
  - "If you want a series, reuse the colour band across figures. Collectors read the band first, exactly like the palette rule in a feed image."
example_output: |
  READ OF THE PHOTO
  Lean build, shoulders squared to camera. Dark hair to the collar, pushed
  back from the forehead. Strong brow and a narrow jaw are the recognisable
  pair. Wearing a plain zip jacket, collar up. Arms down, weight on the left
  leg.

  FIGURE
  Head scaled to roughly one third of total height, hair reduced to four
  sculpted clumps with the push-back shape kept. Visible joints at both
  shoulders and the neck. The raised collar is the accessory that carries the
  likeness.

  BOX
  Tall front window with rounded corners. Series name "FIELD ISSUE" across
  the top band, name plate below the window, small round age badge bottom
  right, rust colour band running the full width under the window.

  LIGHTING
  Large soft key high on the left at about 40 degrees, weak fill from the
  right, and one narrow vertical reflection travelling down the left third of
  the window to prove it is plastic.

  PASTE-READY
  Studio product shot of a boxed collectible figure: lean vinyl figure with
  an oversized head, pushed-back dark hair in four sculpted clumps, raised
  collar on a plain zip jacket, joints at the shoulders. Tall rounded window
  box, rust band under the window, two words of type only. Soft key light
  from upper left, thin vertical reflection on the window, matte vinyl against
  gloss plastic, seamless grey sweep behind. No brand marks, no small print,
  no hands, no second figure.
faq:
  - q: "Does it work without a photo, just from a written description?"
    a: "Yes, but it stops being a likeness and becomes a generic figure. The read-the-photo step is what makes it recognisable as a specific person rather than a stock character."
  - q: "Why forbid real brands?"
    a: "Two reasons. The model will render logos as illegible mush at this scale, and using a real brand turns a fun image into a fake product. Two words of invented type avoids both."
  - q: "Can I put other figures in the box beside it?"
    a: "Not in one box. A multi-figure pack needs its own packaging layout, and the model will usually give each figure a different scale. Shoot one per box and compose them together afterwards."
  - q: "What if the result looks like plastic but not vinyl?"
    a: "Add the seam line and the orange-peel texture explicitly. Vinyl reads as slightly soft and imperfect under a matte finish, while smooth glossy plastic reads as injection-moulded toy."
---
