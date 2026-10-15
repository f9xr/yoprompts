---
title: "Design a thumbnail people cannot scroll past"
slug: youtube-thumbnail-brief
category: images
category_label: Image Generation
difficulty: beginner
tools: [chatgpt, gemini]
read_time: 5
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: []
related: [scroll-stopping-image, cinematic-movie-poster]
art: palette
tags: [youtube, thumbnail, click through rate, image generation, creator, viral content]
excerpt: "Turns a video into five thumbnail concepts built for a phone screen, ranks them, and writes the paste-ready image prompt for the winner."
prompt: |
  You are a thumbnail designer who has watched more click-through data than
  most creators have watched videos. You know a thumbnail is a billboard read
  by a thumb on a phone: one subject, one emotion, three words or fewer, and a
  background that does not fight the subject. You design for the smallest
  screen first and the desktop never.

  ## What I will give you
  - The video topic, and what the video actually delivers:
  - The channel and who watches it:
  - Whether I can photograph a real subject or must generate the image:
  - Any brand colours or a face I must keep consistent:

  ## Produce in this order

  1. **Curiosity gap.** The one unanswered question the thumbnail should plant
     in a viewer's mind. It must be answered inside the video, or the click is
     a lie.

  2. **Five concepts.** For each: the single subject, the facial expression or
     object state, the text in three words or fewer, the background, the
     dominant contrasting colours, and where the subject sits in the frame.
     Make all five genuinely different, not the same idea recoloured.

  3. **Ranked pick.** Rank the five for a busy feed and say which one you would
     ship and why in two sentences.

  4. **Mobile test.** Describe how the winner reads at 120 pixels wide: what
     still survives, and what detail gets cut.

  5. **Paste-ready image prompt.** Under 90 words for the winning concept:
     subject, expression, lighting, background, palette, composition and crop,
     with no text baked in.

  6. **Text overlay note.** The exact three words and where they sit, kept
     separate from the generated image so the words stay legible.

  7. **A/B variant.** One small change to the winner worth testing: a swapped
     expression, colour or crop, not a whole new concept.

  ## Exclusions
  - No more than three words of text. A thumbnail is not a slide.
  - No clutter: no arrows, circles, starbursts or emoji stacks.
  - No promise the video does not keep. The curiosity gap must be paid off.
  - No low-contrast subject-on-background. If it does not pop at phone size,
    it does not ship.
workflow:
  - "State the one curiosity gap the video really answers"
  - "Design five distinct concepts for a phone screen"
  - "Rank them, then run the winner through a 120px test"
  - "Emit the image prompt and the separate text overlay"
output_preview: "A stated curiosity gap, five distinct concepts, a ranked winner with a mobile-size read, a paste-ready image prompt and a text overlay note."
how_to_use:
  - "Describe what the video actually delivers, not just its title. The weakest thumbnails promise something the video never pays off."
  - "Say whether you can photograph a real face. A real expressive face beats a generated one almost every time, so use it when you can."
  - "Generate the image without text, then add the three words yourself in an editor. Generated text is the fastest way to look amateur."
  - "Test the top two with the same title and compare click-through before changing anything else."
tips:
  - "One face, one emotion, one object. The moment there are two subjects, the eye stops choosing and keeps scrolling."
  - "Expression beats beauty. A clear reaction reads at thumbnail size; a neutral portrait does not."
  - "Contrast is warmth against cool, or light against dark. Put the subject on the opposite side of the background."
  - "Design at 120 pixels wide and scale up. If it works tiny, it works everywhere."
example_output: |
  CURIOSITY GAP
  Why does this cheap knife outlast the expensive one?

  CONCEPT (winner)
  Subject: the two knives crossed, cheap one in focus.
  Text: "THE CHEAP ONE?" (three words).
  Background: flat dark wood, no props.
  Palette: warm steel highlights against a cool dark backdrop.
  Composition: knives on the lower third, text in the upper left.

  MOBILE TEST
  At 120px the crossed shape still reads and the question survives. The brand
  names vanish, which is fine because they are not the point.

  PASTE-READY
  Two kitchen knives crossed on dark flat wood, the cheaper one in sharp
  focus, warm steel highlights against a cool dark background, shallow depth
  of field, lower-third composition, generous empty space upper left, moody
  side light, photorealistic, no text.

  TEXT OVERLAY
  "THE CHEAP ONE?" in bold sans, upper left, white with a thin dark outline.

  A/B VARIANT
  Swap the expression to a skeptical raised eyebrow reaction in the corner.
faq:
  - q: "Can I use this if I am the face on the channel?"
    a: "Yes, and you should reuse the same expression types across videos so viewers recognise you in the feed. Consistency plus one clear emotion is what builds a clickable channel."
  - q: "Why keep the text separate from the generated image?"
    a: "Because image models still misspell and mangle type. Generating the scene clean and adding the words in an editor gives you legible, on-brand text every time."
  - q: "How many words is too many?"
    a: "Anything past three starts to disappear at phone size. If the idea needs more, it belongs in the title, not the thumbnail."
  - q: "Should the thumbnail match the title word for word?"
    a: "No. They should combine into one sentence. The title states the topic and the thumbnail plants the question, so together they read as a complete offer."
---
