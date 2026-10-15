---
title: "Turn a phone photo into a studio product shot"
slug: studio-product-photo
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
related: [scroll-stopping-image, image-brief-builder]
art: palette
tags: [product photography, ecommerce, image generation, shopify, etsy, viral content]
excerpt: "Rebuilds a rough product photo as a clean studio shot by fixing light, background and shadow, while keeping the product itself exactly as it is."
prompt: |
  You are a commercial product photographer who now writes image prompts. You
  know a product image is judged in half a second on two things only: does it
  look like the real product, and does the light explain what the product is
  made of. You never invent a different product and you never add a feature
  that is not there.

  ## What I will give you
  - The product, and what it is made of:
  - The photo I am starting from (describe it, or paste it):
  - Anything that must not change (logo, label, proportions, colour):
  - Where it will be sold and the required crop (default: square):

  ## Produce in this order

  1. **Product read.** Two sentences on the material, finish, colour and the
     one feature a buyer needs to see. No adjectives yet, just facts.

  2. **Keep list.** The three things that must survive untouched: overall
     shape, logo or label placement, and surface texture. These are not
     negotiable.

  3. **Lighting plan.** The main light, the fill, and the rim, each with a
     position and a purpose. Name the material first and let the light follow
     it: matte needs shape, gloss needs reflection control, glass needs edges.

  4. **Background and surface.** The colour, the material, and whether the
     product sits or stands. Say how the background separates from the
     product's own colour.

  5. **Shadow and reflection.** Where the contact shadow falls, how soft it is,
     and whether a reflection is wanted or a distraction.

  6. **Composition.** Where the product sits in the crop, how much margin it
     gets, and the camera angle that shows the key feature without distortion.

  7. **Paste-ready prompt.** Under 100 words for the hero image, with no
     commentary around it.

  8. **Shot set.** One line each for three more images: a white-background
     catalogue shot, an in-use lifestyle shot that does not fake a setting the
     product is not for, and a macro detail of the key feature.

  ## Exclusions
  - Do not invent features, add-on parts, or a different colour. The product
    must match the photo exactly.
  - No props that imply a claim the product cannot make.
  - No reflections or gradients that fight the label. The label stays readable.
  - No heavy retouching that erases texture. Texture is how a buyer believes
    the material.
workflow:
  - "Read the material and the one feature that sells"
  - "Lock a keep list so the product stays identical"
  - "Light for the material, then set background and shadow"
  - "Emit a hero prompt plus three supporting shots"
output_preview: "A product read, a keep list, a material-led lighting plan, a hero paste-ready prompt and three supporting shots for a full listing."
how_to_use:
  - "Name the material before anything else. Matte, gloss and glass each fail with the wrong light, and the material decides the light."
  - "Photograph the product against as plain a background as you can. The generator keeps the product truer the less clutter it has to ignore."
  - "State exactly what must not change. Without a keep list, models love to tidy up a logo or straighten a shape."
  - "Reuse the same lighting and background across your whole catalogue so the collection looks consistent."
tips:
  - "Light is what proves a material. Soft light on matte, controlled light on gloss, and edge light on glass."
  - "Keep the contact shadow real. A product floating with no shadow is the fastest way to look computer-generated."
  - "Give the label its own clear area. If a highlight runs across the text, the listing reads as a good photo of an unreadable product."
  - "Build a set, not a single image. Buyers want the hero, the detail and the scale, and one good hero rarely closes a sale alone."
example_output: |
  PRODUCT READ
  Matte ceramic, stoneware glaze, warm off-white body with a dark speckle and
  an unglazed clay base. Key feature: the pour lip, which needs a profile angle
  to read.

  KEEP LIST
  Overall tapered shape. Unglazed base ring. Speckled glaze pattern.

  LIGHTING
  Main: large softbox above and slightly forward, to show the curved silhouette
  without hotspots. Fill: white card at the front left, to open the shadow. Rim:
  a narrow strip behind right, to separate the dark base from the surface.

  BACKGROUND
  Warm sand-coloured flat surface, seamless, sitting one shade lighter than the
  body so the silhouette separates without a hard line.

  SHADOW
  Soft contact shadow directly under the base, falling slightly right, matched
  to the main light.

  COMPOSITION
  Product on the lower third, slight three-quarter angle to show the pour lip,
  generous margin top for a title overlay.

  PASTE-READY
  A matte speckled stoneware pourer on a seamless warm sand surface, soft
  studio light from above, subtle front fill, thin rim light separating a dark
  unglazed base, soft contact shadow beneath, three-quarter profile angle,
  generous top margin, photorealistic, no text, no props.

  SHOT SET
  Hero: the three-quarter shot above.
  Catalogue: same lighting on a pure white sweep, straight-on angle.
  Lifestyle: on a breakfast table, coffee mid-pour, honest setting.
  Macro: the pour lip and speckle texture, shallow depth of field.
faq:
  - q: "Will the result still look like my actual product?"
    a: "Only if you give it a sharp, uncluttered source photo and a strict keep list. The prompt is designed to relight and rebackground your product, not to redesign it, but a blurry source gives it room to drift."
  - q: "Can I use this for a whole catalogue?"
    a: "Yes. Keep the lighting, background and angle identical across every product and the collection reads as one brand rather than a set of unrelated photos."
  - q: "The render changed my logo. How do I stop that?"
    a: "Add the logo to the keep list explicitly and ask for it to stay readable. Better still, generate a clean version without the label and place the real label on top in an editor."
  - q: "Do I still need real photography?"
    a: "For the hero, a real photo is still safest, especially for anything regulated. The prompt is strongest for lifestyle, catalogue variation and detail shots that would otherwise cost a studio day."
---
