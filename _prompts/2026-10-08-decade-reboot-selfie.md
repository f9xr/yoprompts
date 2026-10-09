---
title: "Reboot a photo into any decade"
slug: decade-reboot-selfie
category: images
category_label: Image Generation
difficulty: beginner
tools: [chatgpt, gemini]
read_time: 6
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: []
related: [collectible-figure-photo, scroll-stopping-image]
art: palette
tags: [image generation, vintage photo, decade, selfie, chatgpt, viral content]
excerpt: "Rewrites a modern photo into another year by changing materials, light and format, so it reads as a real photograph of that time instead of a filter."
prompt: |
  You are a photo archivist and restoration artist. You know a decade is not a
  filter. A 1978 photograph is a stack of decisions: the camera, the film
  stock, the flash, the print, and the paper it dried on. Change the filter
  and everyone sees a filter. Change the decisions and the image belongs to
  the year.

  ## What I will give you
  - The decade or exact year I want to travel to:
  - The photo I am starting from (describe it, or paste it):
  - Any detail I insist on keeping (a face, a pose, a garment):

  ## Produce in this order

  1. **Era read.** Two sentences naming what a photo from this year was
     actually made with - camera class, film stock or sensor, and the typical
     print or screen it ended up on - and what that did to colour and
     contrast. No adjectives yet.

  2. **Keep list.** The three things that must survive the trip so the person
     is still themselves: face structure, hair mass, and pose. Everything else
     is fair game.

  3. **Materials.** How the image should be built: grain size and pattern,
     halation around highlights, shadow colour, dynamic range, edge softness.
     Name each one physically rather than as a mood.

  4. **Light.** The light source the year used and where it sat - hard on-
     camera flash, soft window, sodium street lamp, studio strobe with a hot
     rim - with the direction and the falloff.

  5. **Wardrobe and props.** Two or three clothing or object choices that date
     the frame, picked for silhouette rather than costume. Nothing that reads
     as a themed party.

  6. **Format.** Frame shape, border or screen treatment. If the year printed a
     paper margin or a date stamp, place it and say what it does.

  7. **Exclusions.** The modern tells that would break the illusion: current
     logos, contemporary devices, teeth whitening, today's makeup, digital
     smoothness.

  ## Rules
  - Never write "make it look like the 80s". Say what the 80s did to film,
    light and paper, and let that carry the decade.
  - Keep my proportions. A decade changes the processing, not the bone
    structure.
  - If the photo cannot survive the trip - wrong angle, a modern object in
    frame - name the element that fails and offer the crop that rescues it.
  - Finish with one paste-ready prompt under 100 words for the whole image,
    with no commentary around it.
workflow:
  - "Read what the target year actually shot with"
  - "Protect the three features that carry identity"
  - "Rebuild grain, halation, colour and light physically"
  - "Add the era's frame format, then a paste-ready prompt"
output_preview: "An era read, a keep list, a physical materials plan and a sub-100-word prompt that turns today's photo into a photo from the year you asked for."
how_to_use:
  - "Name an exact year, not a decade, whenever you can. 1977 and 1983 share almost nothing."
  - "Give it a photo with an uncluttered background. The background is where modern objects hide and give the edit away."
  - "Check the keep list before you look at wardrobe. If the face drifted, the year is irrelevant."
  - "Reuse the same keep list across a series of photos so they all stay recognisably the same people."
tips:
  - "Halation is the fastest decade signal there is. Highlights that bleed a warm ring belong to film, not to a slider."
  - "Ask for shadow colour explicitly. Era film almost always stains the shadows one way, and guessing it is what makes an edit look like an edit."
  - "Keep the background period, not just the person. A correct subject in a modern room still reads as modern."
  - "Stop at two props. Four turns a portrait into a period drama and the eye stops believing the face."
example_output: |
  ERA READ
  A 1979 consumer photo was shot on 35mm colour negative, printed on
  light-sensitive paper with slightly warm blacks, and lit by a hard on-camera
  flash. Highlights clipped fast, grain was coarse and even, and reds sat
  over-saturated next to muted greens.

  KEEP LIST
  Face structure: high forehead, straight nose. Hair mass: shoulder-length,
  straight, centre-part. Pose: hands in pockets, weight on right leg.

  MATERIALS
  Coarse, even grain across the whole frame. Warm halation around the flash
  highlight on the forehead. Shadows stained warm brown, not neutral. Reduced
  dynamic range so the background falls off quickly. Soft frame edges from the
  enlarger.

  LIGHT
  Hard on-camera flash, directly frontal, with a fast falloff and a hard
  shadow edge a few centimetres behind the subject.

  FORMAT
  Slightly rounded print corners, a thin cream paper border, and a faint
  orange date stamp in the lower right.

  PASTE-READY
  A 1979 colour film portrait: frontal hard flash, coarse even grain, warm
  halation on highlights, brown-stained shadows, reduced dynamic range, reds
  pushed and greens muted, thin cream paper border and a faint orange date
  stamp lower right. Keep the face, hair and pose exactly. No modern logos, no
  current devices, no digital smoothing.
faq:
  - q: "Why insist on an exact year and not just a decade?"
    a: "Because film stocks, lenses and even paper changed several times inside a decade. A prompt for the 80s gets you the most famous year of the 80s every time; a prompt for 1983 gets you 1983."
  - q: "Can I use this on a group photo?"
    a: "Yes, and the keep list scales. Give each face its own three anchors, or run one era read across the whole frame at once so the processing is identical for everyone."
  - q: "The result looks like a filter. What went wrong?"
    a: "You skipped the materials step. A filter changes colour only; an era changes colour, grain, halation and light together. Ask for the grain and the shadow colour first and the filter look disappears."
  - q: "Should I ask for the date stamp?"
    a: "Only if the target year printed one. A real date stamp on an image that never had one is the fastest way to look fake, so let the era read decide."
---
