---
title: "Turn one photo into a believable movie poster"
slug: cinematic-movie-poster
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
picks: []
related: [scroll-stopping-image, collectible-figure-photo]
art: palette
tags: [image generation, movie poster, cinema, title design, chatgpt, viral content]
excerpt: "Builds a poster around one image and a small, legible title, then enforces the layout rules that make it read as a real film rather than a photo with text dropped on top."
prompt: |
  You are a poster designer who has replaced a hundred mock-ups that looked
  like a photo with text dropped on top. You know a real poster is a grid, a
  single focal image, and a title small enough to be believed. The moment the
  type gets big and centred, it stops being a film and becomes a meme.

  ## What I will give you
  - The photo or subject I am starting from (describe it, or paste it):
  - The genre or mood, in one line:
  - The title, or "invent one" (two or three words):

  ## Produce in this order

  1. **One line of story.** State the premise in a single sentence a stranger
     could repeat. If it needs "and", cut it in half and keep the half the
     image shows.

  2. **Billing block.** The fake credits line: three invented director and
     actor names, one studio name, and the standard order. Keep every word
     short so the small print stays plausible.

  3. **Title treatment.** Placement, weight, case, and the two letters that
     get the one flourish. Say where the title sits relative to the subject's
     eyeline.

  4. **Composition.** Where the subject sits, the negative space reserved for
     the title, and the rule-of-thirds line the layout obeys. Name the single
     focal point.

  5. **Grade.** The two dominant colours, the colour of the highlights, the
     contrast curve, and the one practical light in the scene.

  6. **Tagline.** One line above the billing block, under eight words, that
     adds information rather than repeating the title.

  7. **Exclusions.** No awards wreaths, no cast logos, no real studio marks,
     no release dates, no small print that will render as mush.

  ## Rules
  - The title is part of the image, not an overlay. Describe it as printed or
    lit, with a position, not just a font name.
  - Keep the title to three words. Long titles force the model to invent type,
    and inventing type is where posters fall apart.
  - The billing block is decorative. If any word in it is supposed to be read,
    move it out of the block.
  - Finish with one paste-ready prompt under 110 words covering image, type
    and layout in a single call, with no commentary around it.
workflow:
  - "Compress the film into one line"
  - "Invent a plausible billing block and tagline"
  - "Place the title into the composition, not on top of it"
  - "Emit image plus layout as one paste-ready prompt"
output_preview: "A one-line premise, a believable billing block, a title treatment and composition plan, and a single paste-ready poster prompt."
how_to_use:
  - "Choose a tall source photo. Posters are vertical and a square photo forces the model to invent the extra image, which is where it drifts."
  - "Give it three title words or fewer. Four is the point where generators start misspelling their own output."
  - "Say where the title sits before how it looks. Position keeps the composition honest; styling applied afterwards floats."
  - "Read the billing block out loud. If you can actually read it, it is too big and the poster will look like a parody."
tips:
  - "Reserve the negative space first. A poster with room for its title always beats a busier one that has to squeeze type on afterwards."
  - "One flourish letter is enough. Two or three is a logo; a poster title should look edited, not branded."
  - "Keep the tagline additive. If it repeats the title in different words, cut it and give the space back to the image."
  - "Fake the studio name short and plausible. Legible nonsense in the billing block is the tell that separates a fake poster from a real one."
example_output: |
  ONE LINE
  A storm chaser drives toward the one cell she has not survived yet.

  BILLING BLOCK
  A REYES FILM - DIRECTED BY A. REYES - M. OKAFOR  D. LINDQVIST  J. PERALTA

  TITLE TREATMENT
  Two words, upper and lower case, set in a hairline sans. Sits in the lower
  third, left-aligned to the same margin as the billing block, just below the
  subject's eyeline. The single flourish is the tail of the R in STORM.

  COMPOSITION
  Subject in the right third, back to camera, looking at the horizon on the
  upper third line. The left two thirds are dark sky reserved for the title
  and tagline. Focal point is the headlight, not the face.

  GRADE
  Dominant slate blue and warm orange, highlights pushed to pale amber, a
  gentle S-curve, one practical light from the car headlights.

  TAGLINE
  Some storms follow you home.

  PASTE-READY
  Cinematic vertical movie poster: a lone figure in the right third, back to
  camera, facing a dark sky. Hairline sans title in the lower left third,
  small billing block beneath it, one tagline line above. Slate blue and warm
  orange grade, amber highlights, one headlight as the practical source. Tall
  crop, generous negative space left and top. No awards, no logos, no release
  date, no legible small print.
faq:
  - q: "Why keep the title so small?"
    a: "Because real posters trust the image and use type sparingly. Big centred type is the signature of a mock-up, and it is the first thing that makes a result read as AI."
  - q: "How do I stop the billing block from becoming gibberish?"
    a: "Ask for invented but real-looking short names and accept that the block is texture. The moment you need it legible, move that information into the tagline where the model can render it cleanly."
  - q: "What if the model misspells the title?"
    a: "Shorten it, state it plainly, then generate the poster without the title and add the words yourself. A real font over the top beats a generated false start every time."
  - q: "Can I do a series of posters?"
    a: "Yes, and you should reuse the same title treatment and billing block across them. A consistent type style is what makes a set read as a franchise rather than unrelated images."
---
