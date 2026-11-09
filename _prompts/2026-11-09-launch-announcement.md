---
title: "Write a launch announcement that survives contact with users"
slug: launch-announcement
category: marketing
category_label: Marketing
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 5
seo:
  type: "WebPage"
picks: []
related: [viral-product-launch-post, landing-page-copy, viral-launch-day-plan]
skills: [copywriting, internal-comms, landing-page-design]
art: workflow
tags: [launch, announcement, marketing, copywriting, product, positioning]
excerpt: "Turns a launch into an announcement that names the change, the user, the proof, and the next step, without hype the product cannot support."
prompt: |
  You are a product marketer who has launched products and cleaned up the
  launches that overpromised. You write the claim the product can still
  support after a month of real users.

  ## What I will give you
  - What shipped, in plain terms:
  - Who it is for, and what they do today instead:
  - The problem it solves, in the user's words:
  - The proof: a benchmark, a customer result, a demo, or none:
  - Availability, pricing, and any limits:
  - What it does not do yet:
  - The channels and the launch date:

  ## Produce in this order

  1. **The one sentence.** What changed, for whom, and why it matters. If it
     needs a paragraph, the launch is not clear yet.

  2. **Three angles.** User problem, capability, and proof. Pick one and say
     why the other two are weaker for this audience.

  3. **The announcement.** Headline, lede, three short body paragraphs, and
     one call to action. Name the limitation in the body, not in a footnote.

  4. **Channel variants.** Email, blog, social post, in-app message, and
     changelog entry. Respect each channel's length and tone.

  5. **Support FAQ.** The five questions users will ask on day one, with
     answers that match the product.

  6. **What not to claim.** The tempting lines that the proof does not
     support, and the safer version of each.

  7. **Launch-day checklist.** The links, the owners, the monitoring, and the
     rollback if something breaks.

  ## Rules
  - Do not use "revolutionary", "game-changing", "seamless", "effortless",
    or "best-in-class".
  - Do not claim a benchmark without the number and the source.
  - Do not announce a roadmap item as shipped.
  - Do not hide a limitation in a footnote. Say it in the body.
  - One call to action per channel.
  - Do not use fake scarcity or a countdown that resets.
  - Do not promise a result the product cannot produce.

  ## Before you finish
  Remove every adjective the proof does not support. Read the lede as a
  skeptical user. If it sounds like every other launch, rewrite it around the
  specific change.
workflow:
  - "Reduce the launch to one sentence"
  - "Choose an angle and justify it"
  - "Write the announcement with the limitation included"
  - "Adapt it to each channel"
  - "Prepare the support FAQ"
  - "List what not to claim and the launch-day checks"
output_preview: "A one-sentence launch, three angles with a chosen one, an announcement with a real CTA and a stated limitation, five channel variants, a support FAQ, and the claims to avoid."
how_to_use:
  - "Describe what actually shipped, not the roadmap. The prompt will refuse to announce a feature that is not available."
  - "Give the proof, even if it is only a demo. A launch with no proof is a launch with no angle, and the prompt will say so."
  - "State the limitation in the input. The announcement will include it in the body, which is the difference between a launch and a trust problem."
  - "Name the channels and their constraints. A single announcement pasted into every channel reads like a press release in a chat app."
tips:
  - "The one sentence is the whole launch. If you cannot say it without a paragraph, the positioning is not finished."
  - "The limitation is a feature. Users who discover it themselves trust the announcement less, and support pays for the difference."
  - "The support FAQ is the most useful artifact for day one. It catches the mismatch between the announcement and the product before users do."
  - "Keep the changelog entry factual. The changelog is where users go to confirm what changed, and hype there reads as noise."
example_output: |
  ONE SENTENCE
  Teams can now import a CSV and get a row-level error report instead of a
  generic timeout.

  ANGLES
  - User problem: "Your import failed and you do not know which row."
  - Capability: "Row-level errors and a progress view."
  - Proof: "A 50,000-row import now completes without a request timeout."
  Chosen: user problem. The audience already knows imports fail; they do not
  know why.

  ANNOUNCEMENT
  Headline: Find the row that broke your import
  Lede: Imports now run in the background and tell you which row failed, and
  why, instead of timing out with a generic error.
  Body:
  Upload a CSV and you get an import id. The page shows progress, a count of
  rows imported, and the first error for every failed row. Large imports no
  longer block the request.
  This does not change the file format. Existing files work as before.
  It does not retry a failed row automatically yet.
  CTA: Import a file.

  EMAIL
  Subject: Your import now tells you which row failed
  120 words. One screenshot. One link to the import page.

  SOCIAL
  A failed CSV import used to say "something went wrong". Now it says which
  row, and why. No format change. One link.

  IN-APP
  "Imports run in the background now. See progress and row-level errors on
  the import page."

  CHANGELOG
  Imports run asynchronously. Added a progress view and row-level errors.
  No file format change. Failed rows are not retried automatically.

  SUPPORT FAQ
  1. Do I need to change my CSV? No.
  2. Why is my import still running? Large files take longer; the page shows
     progress.
  3. Can I retry one row? Not yet; re-upload the file.
  4. Where is the error? On the import page, first error per row.
  5. Did the file format change? No.

  WHAT NOT TO CLAIM
  - "Never lose an import again." No proof, and a worker crash can still
    lose a job.
  - "Instant imports." The import is asynchronous, not instant.
  - "Automatic retries." Not shipped.

  LAUNCH-DAY CHECKLIST
  - Import page link checked in production.
  - Support macro updated.
  - Queue depth and failure rate on a dashboard.
  - Rollback: disable the async flag, keep the old path for 30 days.
faq:
  - q: "Can it write a launch post for a feature with no proof?"
    a: "It can, but the output will be short on specifics. The prompt will use the user problem as the angle and avoid claims it cannot support. A launch with no proof is usually better as a changelog entry than a campaign."
  - q: "Should the announcement mention limitations?"
    a: "Yes, in the body. Users find limitations quickly, and an announcement that hides them damages trust. The prompt includes the limitation you give it and refuses to invent one."
  - q: "How many channels should I use?"
    a: "Start with the two where your users already are, plus the changelog. A launch spread across five channels is harder to keep consistent and harder to measure."
  - q: "Can it write the email sequence too?"
    a: "It can write the launch email and the in-app message. For a full sequence, use the welcome email or onboarding prompt, and give it the launch context."
---
