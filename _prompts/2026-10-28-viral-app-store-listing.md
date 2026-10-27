---
title: "Write an app store listing people install"
slug: viral-app-store-listing
category: marketing
category_label: Marketing
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 6
seo:
  type: "WebPage"
picks: []
related: [landing-page-copy, viral-ad-angle-matrix, scroll-stopping-image]
art: workflow
tags: [app store, aso, mobile, copywriting, conversion]
excerpt: "Writes an app store listing around the job the app does, with a subtitle, short description, long description, screenshot captions, and a keyword field."
prompt: |
  You are an app store listing editor. You know the listing is not a feature
  list. It is a shelf: the icon, the first screenshot, and the first two lines
  decide whether the other assets are seen at all.

  ## What I will give you
  - The app, platform, and price:
  - The job the app does:
  - Who it is for and when they open it:
  - The one thing it does better:
  - Real proof: ratings, usage, results, press:
  - The main objection or failed alternative:
  - Current keywords and competitors:
  - Words I cannot use because of a claim or trademark:

  ## Step 1: The shelf promise

  Write one sentence a user could repeat after seeing the icon, title, and
  first screenshot. If the listing needs the long description to explain the
  job, the shelf promise is not clear yet.

  ## Step 2: The listing copy

  Write:
  - **App name and subtitle:** name as it will appear, plus a subtitle under
    30 characters that names the job.
  - **Short description:** under 80 characters, one benefit, no keyword list.
  - **Long description:** first two lines carry the promise; then five short
    blocks, each with a heading and two sentences.
  - **Keyword field:** under 100 characters, no repeats, no competitor
    trademarks, no words already in the title.
  - **What's new:** three bullets a user can understand without release notes.

  ## Step 3: Screenshot captions

  Write five captions, each under six words. For each, name:
  - the screen to show
  - the action visible in the screenshot
  - the caption that names the benefit

  The first screenshot must show the core job, not the welcome screen. The
  captions should read as a story in order, not five unrelated features.

  ## Step 4: The preview video

  Write a 20-second script in three beats: the problem in the user's words,
  the action, and the result. No logo sting, no voiceover that repeats the
  caption.

  ## Step 5: The claim check

  Mark every number, ranking, and comparison as verified or unverified. Remove
  the unverified ones. Flag:
  - "best", "number one", or "#1" without a source and date
  - a rating that is not current
  - a free trial that requires a subscription
  - a keyword that describes a feature the app does not have

  ## Rules
  - No keyword stuffing. Write for a person, then check the keyword field.
  - No fake reviews, ratings, or awards.
  - Do not name a competitor in the keyword field.
  - Do not promise a platform feature the app cannot use.
  - The first screenshot must show the real interface, not a mockup that
    differs from the product.
workflow:
  - "Name the shelf promise"
  - "Write the title, subtitle, and descriptions"
  - "Build a five-shot screenshot story"
  - "Script the preview video"
  - "Audit claims, keywords, and trademarks"
output_preview: "A shelf promise, title and subtitle, short and long descriptions, keyword field, release notes, five screenshot captions, a preview script, and a claim audit."
how_to_use:
  - "Give it the platform. Apple and Google have different character limits and review rules."
  - "Start with the first screenshot. If it does not show the core job, no amount of description fixes the listing."
  - "Paste the current listing before asking for a rewrite. The model needs to know what to keep."
  - "Test the icon and first screenshot as a pair. The caption cannot rescue an unclear image."
tips:
  - "The subtitle should name the job, not the category. 'Invoices in 30 seconds' beats 'Business productivity'."
  - "Write the long description in blocks. Store listings are skimmed, not read."
  - "The keyword field is for words not already in the title. Repeating them wastes space."
  - "A screenshot caption should describe the benefit, not the button. 'Send in one tap' beats 'Tap send'."
example_output: |
  TITLE / SUBTITLE
  "Receiptly / Snap, match, export"

  SHORT DESCRIPTION
  "Turn a photo of a receipt into an expense row in 30 seconds."

  FIRST SCREENSHOT
  Screen: camera pointed at a receipt, with the parsed amount and category
  visible. Caption: "Snap the receipt."

  SECOND SCREENSHOT
  Screen: the matched expense row with the receipt thumbnail. Caption:
  "It finds the match."

  KEYWORD FIELD
  "receipt scanner expense tracker mileage reimbursement small business"

  CLAIM CHECK
  "Number one expense app" removed. There is no current source.
faq:
  - q: "Should the title include keywords?"
    a: "Only if they read naturally. The title is the strongest ranking signal, but a title that sounds like a keyword list reduces installs."
  - q: "How many screenshots do I need?"
    a: "Five is enough to tell the story: the core job, the result, the proof, the secondary job, and the trust or privacy point. More screenshots are rarely seen."
  - q: "Does the long description matter for ranking?"
    a: "It matters less than the title, subtitle, and keyword field on many stores, but it matters for conversion. Write it for the person who is already interested."
  - q: "Can I mention a competitor?"
    a: "Avoid competitor names in metadata. You can describe the alternative in general terms, but do not use a trademark you do not own."
---
