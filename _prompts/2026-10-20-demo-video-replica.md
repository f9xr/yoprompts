---
title: "Replicate any product demo video with your product"
slug: demo-video-replica
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
related: [studio-product-photo, image-brief-builder, ugc-product-ad]
art: palette
tags: [video generation, product demo, shot list, studio lighting, commercial, whitelabel, video replication]
excerpt: "Feeds a demo video to an AI model and gets back a shot-by-shot brief: cyclorama, lighting plan, camera moves and colour grade, product left as a slot."
prompt: |
  Transcribe this demo video as clear directions. For the object that is
  being demoed, simply use the word product. Make sure all aspects of the
  demo are precisely described so that this particular demo video can be
  replicated with any product. Lightning, background, colour and theme
  need to be described exactly as in the demo example, the only thing that
  is whitelabeled is the product, don't describe it.

  ## Set and background
  Place the product on a seamless studio cyclorama that transitions from a
  cool medium blue-grey at the top to a soft near-white at the floor,
  creating a smooth gradient horizon with no visible seam line. The floor
  should have a subtle glossy sheen so the base of the product casts a
  faint soft reflection.

  ## Lighting
  Use a large soft key light from the upper left at roughly 45 degrees,
  cool white in tone, producing a gentle highlight along the top edge and
  left panel of the product. Add a secondary rim/back light positioned
  behind and slightly above the product to create a crisp bright edge
  highlight separating it from the background. Fill the right side with a
  softer, dimmer cool light to preserve gentle shadow falloff without
  going fully dark. Keep overall contrast moderate-to-high so metallic and
  glossy surfaces show clear specular highlights, but avoid harsh
  blown-out hotspots. Maintain a consistent cool blue-grey colour
  temperature throughout all shots, no warm tones.

  ## Camera and composition
  Use a slow, smooth orbital camera movement circling around the product
  at a slight downward angle (about 15-20 degrees above eye level), keeping
  the product centered in frame. Maintain a shallow depth of field so the
  background stays soft and creamy while the product remains in sharp
  focus. Use consistent framing across all shots with the product
  occupying roughly 40-50 percent of the vertical frame height, leaving
  generous negative space above and below.

  ## Shot sequence
  1. Wide three-quarter front view of the full product, showing its
     overall silhouette and proportions clearly against the gradient
     background.
  2. Close-up angled shot focusing on a distinctive structural or design
     detail of the product, emphasizing material texture and form lines.
  3. Front-facing shot slowly pushing in toward the product's control or
     branding area, revealing fine surface details and any text or
     interface elements engraved or printed on it.
  4. Extreme close-up on the branding/text area, filling most of the
     frame, showing material finish and any embossed or printed detailing
     in sharp focus.
  5. Return to a wide three-quarter view similar to the opening shot, but
     from a slightly different angle to bookend the sequence.
  6. Final closing shot: a tight side profile silhouette of the product
     against the same gradient background, softly lit to emphasize its
     outline and form.

  ## Colour grading
  Apply a cool, slightly desaturated grade throughout, emphasizing blues,
  greys, and silvers. Blacks should stay deep and neutral rather than
  blue-tinted, while highlights retain a crisp, clean white-blue cast. No
  warm colour accents anywhere in the sequence.

  ## Pacing and transitions
  Each shot should hold for two to three seconds with slow, continuous
  camera motion (orbit, push-in, or pan) rather than static framing. Use
  simple hard cuts between shots with no dissolve or fade effects,
  maintaining a clean, premium, minimalist commercial aesthetic
  throughout.
workflow:
  - "Upload the demo video and run the transcription prompt"
  - "Get back a full shot list with set, lighting and grade locked"
  - "Swap in your product: it is the only whitelabeled element"
  - "Feed the brief to a video model to replicate the demo"
output_preview: "A shot-by-shot replication brief: cyclorama gradient, three-point cool lighting, orbital camera plan, six-shot sequence and colour grade, with the product left as a blank slot."
how_to_use:
  - "Start with a demo video you like, not one you made. The value of this prompt is stealing the production values: the set, the lights, the grade and the edit."
  - "Paste the prompt with the video attached into a model that can watch video, such as ChatGPT or Gemini, and ask for the transcription only, no commentary."
  - "Keep the word product everywhere it appears in the output. That is the slot your item drops into; everything around it is fixed by the brief."
  - "Feed the resulting brief to a video model such as Sora or Veo and swap in your own product shot or description."
tips:
  - "The product is never described on purpose. If the brief starts drifting into adjectives about the object, cut them: a whitelabel demo only works when the frame is identical and only the product changes."
  - "Shot timing matters as much as lighting. Two to three seconds per shot with continuous motion is what separates a premium demo from a slideshow."
  - "Hard cuts only. Dissolves and fades date a demo instantly; a clean cut on motion keeps the pace premium and lets the camera move do the work."
  - "Match the colour temperature exactly. A cool blue-grey set with warm light sneaking in will break the replication no matter how good the camera work is."
example_output: |
  SET AND BACKGROUND
  Seamless studio cyclorama, cool medium blue-grey at the top grading to
  near-white at the floor, no seam line, faint glossy reflection under the
  product base.

  LIGHTING
  Cool white soft key upper left at 45 degrees; rim light behind and above
  for a crisp edge; dim cool fill on the right. Moderate-to-high contrast,
  no blown highlights, consistent cool temperature.

  CAMERA
  Slow orbit at 15-20 degrees above eye level, shallow depth of field,
  product at 40-50 percent of vertical frame height.

  SHOT SEQUENCE
  1. Wide three-quarter full view.
  2. Angled close-up on a structural detail.
  3. Front push-in toward the branding area.
  4. Extreme close-up on the branding/text.
  5. Wide three-quarter bookend from a new angle.
  6. Tight side profile silhouette.

  COLOUR GRADE
  Cool, slightly desaturated: blues, greys, silvers. Deep neutral blacks,
  crisp white-blue highlights, no warm accents.

  PACING
  Two to three seconds per shot, continuous motion, hard cuts only.

  PRODUCT
  [whitelabel slot]
faq:
  - q: "What does whitelabel the product mean here?"
    a: "The brief never describes the demoed object. Every other element, the cyclorama, lights, camera, grade and edit, is copied exactly, so you drop any product into the same frame and the demo still looks identical."
  - q: "Do I need a video-capable AI model?"
    a: "Yes. The transcription step needs a model that can watch video, such as ChatGPT or Gemini. A text-only model cannot extract the shot list from footage."
  - q: "Can I change the lighting or colour?"
    a: "You can, but then you are no longer replicating that demo. The point of this prompt is an exact copy of the production values; customise after you have a working replica, not before."
  - q: "What kind of product works best?"
    a: "Anything that sits on a table: electronics, cosmetics, bottles, tools. The set is built for a single hero object under studio light, so large or unstable products fight the framing."
---
