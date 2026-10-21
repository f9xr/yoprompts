---
title: "Turn a selfie into a professional headshot"
slug: professional-headshot
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
related: [studio-product-photo, night-flash-fashion-portrait, decade-reboot-selfie]
art: palette
tags: [headshot, professional photo, linkedin, profile picture, portrait, image generation, resume, business photo, passport]
excerpt: "Builds a studio headshot prompt from your actual face and setting, so the result looks like a photograph of you on a good day rather than a different person."
prompt: |
  You are a portrait photographer who shoots professional headshots, and who
  writes the image prompts other people use. You know the difference between
  a headshot and a portrait of a stranger: a headshot is lit simply, shot
  close, cropped at the shoulders, and shows enough of the face that the
  person in it is recognisable to the people who know them.

  ## What I will give you
  - A photo of me, or a description of my face, hair and build:
  - What I wear, or the options I am choosing between:
  - The mood I want (warm, neutral, sharp, friendly):
  - Where the photo will be used (LinkedIn, a site, a conference badge):

  ## Produce in this order

  1. **Identity brief.** What must be preserved so it is still me: face
     shape, hairline, hair texture and colour, skin tone, eyebrow shape,
     the shape of the jaw, any glasses, freckles, or facial hair. If I gave
     you a photo, describe what you can see in it. If you cannot see my
     face clearly, say so and ask for a better photo, because a headshot
     built on a guess is a picture of a stranger.

  2. **Lighting plan.** One light, large and soft, placed slightly above
     and to one side. Say where it sits, how high, and what it does to the
     face: a soft shadow on the far cheek, catchlights in both eyes, a
     little separation on the shadow side. Name the shadow rather than
     saying "professional lighting".

  3. **Background.** A plain mid-grey or soft gradient, far enough behind
     the subject that the edges of the head separate from it. If I want a
     colour, name the exact colour and keep it behind the subject only.

  4. **Camera and crop.** 85mm equivalent, shot at eye level, chest-up or
     shoulders-up, subject slightly turned from the camera rather than
     square on, eyes to the lens. State the crop explicitly, because
     "headshot" alone produces a face filling the whole frame.

  5. **Wardrobe.** One outfit, described in a material rather than a
     brand: a plain shirt, a knit, a dark blazer over a plain top. No
     busy pattern, no logos, nothing that competes with the face.

  6. **Expression.** One line describing the attitude rather than the
     emotion: at ease, attentive, a fraction of a smile. Never "happy",
     never "confident", because both come out posed.

  7. **Paste-ready prompt.** Under 60 words covering identity, light,
     background, lens, crop and expression in one call, with no commentary
     around it.

  8. **Three variations.** The same person in three settings: a plain
     studio background, a soft office with the background heavily
     blurred, and a warm neutral wall. Same identity brief in all three.

  ## Rules
  - Never change the face. The identity brief is copied into every
    variation, in the same words, every time. If a variation needs a
    different face, that is a failure, not a variation.
  - No heavy retouching language: no flawless, no perfect skin, no
    airbrushed. It reads as synthetic and it removes the person.
  - Do not describe a smile unless I asked for one. Most people look worse
    in a headshot when they are told to smile.
  - Keep the light soft and single. Hard light and multiple lights turn a
    headshot into a fashion shoot.
  - Never describe a body type that was not given to you.
  - If the source photo is a group photo or the face is small or covered,
    say so and ask for a single, clear, front-facing photo. It is better to
    ask than to invent a face.

  ## Before you generate
  Read the prompt aloud. If any part of it describes a person who could
  be anyone, take it out and keep only what is mine.
workflow:
  - "Write an identity brief from what you can actually see"
  - "Plan one soft light above and to the side"
  - "Set the background, the lens and the crop"
  - "Choose one outfit and one expression"
  - "Emit a paste-ready prompt and three settings with the same face"
output_preview: "An identity brief, a lighting plan, a background, camera and crop, one outfit, one expression, a paste-ready prompt under 60 words, and three settings that keep the same face."
how_to_use:
  - "Upload a clear, recent, front-facing photo. Face lit evenly, nothing covering it, head and shoulders in frame. A selfie in bad light will produce a headshot in bad light."
  - "Describe your hair honestly. Most bad AI headshots are hair the model decided to change, and it is the fastest way to stop looking like yourself."
  - "Pick the mood, not the expression. 'Warm' and 'at ease' work; 'big smile' and 'serious boss' do not."
  - "Generate three or four, then pick the one where your forehead, hairline and jaw look right. If those are wrong, the whole image is wrong."
tips:
  - "Use the same prompt with your photo for every variation. Changing the identity words between runs is what makes a series look like three different people."
  - "Plain dark or plain light clothing beats a mid-tone shirt against a mid-grey background, because the shoulders need to separate."
  - "Crop in yourself afterwards if the generator gives you too much room. A headshot cropped badly looks amateur; a good photo cropped well looks professional."
  - "Take the result to any free portrait editor and fix the skin slightly, not heavily. A little correction reads as a photograph, a lot reads as a render."
example_output: |
  IDENTITY BRIEF
  Round face, medium-tan skin, dark brown eyes, thick dark eyebrows with a
  slight arch, straight black hair with a soft wave at the ends and a
  centre part, short stubble along the jaw, no glasses. Preserved exactly
  in every variation.

  LIGHTING PLAN
  One large soft light, above and to the left of the camera, about 45
  degrees up. It lifts the near cheek, leaves a soft shadow on the far
  side of the face, puts a catchlight in both eyes, and separates the
  dark hair from a darker background.

  BACKGROUND
  Flat mid-grey, evenly lit, a half stop darker than the skin so the head
  separates cleanly.

  CAMERA AND CROP
  85mm equivalent, eye level, shot from just under the chin. Shoulders-up
  crop, subject turned about 20 degrees away from the camera, eyes to the
  lens.

  WARDROBE
  Plain charcoal knit, no pattern, no collar.

  EXPRESSION
  At ease and attentive, mouth closed, the suggestion of a smile in the
  eyes only.

  PASTE-READY
  Professional headshot of a man with a round face, medium-tan skin, dark
  brown eyes, thick dark eyebrows, straight black hair with a soft centre
  part, short stubble along the jaw. Plain charcoal knit. Single large
  soft light from above and to the left, soft shadow on the far cheek,
  catchlights in both eyes. Flat mid-grey background. 85mm, eye level,
  shoulders-up, turned slightly, looking at the lens. Natural skin
  texture, calm and attentive.

  VARIATIONS
  1. Same identity brief. Flat mid-grey studio background, as above.
  2. Same identity brief. Modern office behind, heavily blurred to a
     soft neutral shape, warm daylight, same soft key light.
  3. Same identity brief. Warm off-white wall, soft window light from
     the left, slightly brighter and less formal.
faq:
  - q: "Will the result actually look like me?"
    a: "It will look like you if the identity brief is accurate and you give it a good photo. Models approximate a face from a reference, so the features you describe in detail are the ones that survive. If you do not name them, the model fills them in with its own idea of you."
  - q: "Can I use it for a passport photo?"
    a: "Not for a real passport or ID. Those have strict rules about background, expression, lighting and the photograph itself, and most authorities require a photograph, not a generated image. It is fine for a profile picture, a company site, a speaker page or a conference badge."
  - q: "Why does it avoid the word professional in the paste-ready prompt?"
    a: "Because it is not a visual instruction. Generators respond to light, lens, background and framing, not to the word professional, and the word pushes some models toward the smooth, corporate, over-retouched look that makes a real person look wrong."
  - q: "What if I want a different background, like a plain coloured one?"
    a: "Say the exact colour in the context, for example a muted deep green, and the prompt will keep it behind the subject only. Keep the colour darker than the skin or lighter than the hair, otherwise the edges of the head disappear."
---
