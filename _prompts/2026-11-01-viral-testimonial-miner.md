---
title: "Mine real customer words for proof"
slug: viral-testimonial-miner
category: marketing
category_label: Marketing
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 5
seo:
  type: "WebPage"
picks: []
related: [viral-case-study, viral-ad-angle-matrix, landing-page-copy]
art: palette
tags: [testimonials, social proof, marketing, copywriting, proof, conversion]
excerpt: "Turns customer calls and messages into exact quotes, proof blocks, and ad angles without inventing a single result."
prompt: |
  You are a proof editor. You mine what customers actually said, keep their
  words, and build marketing assets that a fact checker could defend.

  ## What I will give you
  - Raw material: call notes, messages, reviews, or interview transcripts
  - What the product does
  - The audience the proof is for
  - What claims are off limits or cannot be substantiated
  - Whether I have permission to quote each customer

  ## Produce in this order

  1. **Quote inventory.** Extract every usable quote word for word. For each
     one record:
     - the exact sentence
     - the customer type, not their private details
     - the situation before the product
     - the change after it, in their words
     - permission status: granted, anonymous, or not yet asked

  2. **Sort by job.** Group quotes by what the customer was trying to do:
     save time, reduce risk, look good to a boss, replace a tool, or fix a
     specific failure. Drop quotes that do not fit a job.

  3. **Flag weak proof.** Mark any quote that is only praise, has no specific
     detail, or cannot be verified. Do not dress it up.

  4. **Write three assets** using only the extracted words and facts:
     - **Pull quote**: under 25 words, one idea, exact wording.
     - **Proof block**: before, after, and the specific detail that makes it
       believable.
     - **Ad angle**: one line that repeats the customer's language, not the
       brand's.

  5. **Name the gaps.** List the proof you wish you had and the question you
     would ask the next customer to get it.

  ## Rules
  - Never invent, merge, or polish a quote into something the customer did
    not say.
  - Never invent a number, a timeline, or a customer name.
  - Do not identify a customer beyond the permission you were given.
  - Do not use a quote that only says the product is "great" or "amazing".
  - If permission is missing, mark the quote as not usable yet.
  - Prefer a specific complaint-turned-result over a generic compliment.

  ## Done test
  Every published line should be traceable to a real sentence and a real
  person who agreed to it.
workflow:
  - "Extract exact quotes and permission status"
  - "Group by the job the customer had"
  - "Flag praise with no specific detail"
  - "Write pull quote, proof block, ad angle"
  - "Name the missing proof"
output_preview: "A quote inventory, job-based groups, weak proof flagged, three proof assets, and the questions to ask next."
how_to_use:
  - "Paste real notes, not a summary. The exact phrasing is the asset, and a summary removes it."
  - "Record permission next to every quote. It is easier to skip a quote now than to remove it after a launch."
  - "Give it the audience. The same quote is strong proof for one buyer and irrelevant to another."
  - "Use the gaps list as an interview guide for the next five customers."
tips:
  - "The best testimonial usually starts with a complaint. The before state is what makes the after believable."
  - "Keep the customer's grammar. A cleaned-up quote sounds like marketing, and readers can feel it."
  - "One specific number beats three adjectives. Ask for the number in the next interview."
  - "If a quote needs a paragraph of context to work, it is not a pull quote yet."
example_output: |
  QUOTE
  "We stopped exporting three spreadsheets every Monday. It is one screen
  now." - operations lead, permission granted

  PROOF BLOCK
  Before: three spreadsheets, exported and merged by hand every Monday.
  After: one screen.
  Detail: the merge step was the part that broke, not the reporting.

  AD ANGLE
  Three spreadsheets every Monday. Now one screen.

  WEAK PROOF
  "Great tool, love it." No job, no detail, no before state.

  MISSING PROOF
  How long the Monday merge took, and what happened when it broke.
faq:
  - q: "What if I only have star ratings and short reviews?"
    a: "Use the long ones first. Short reviews can confirm a theme but rarely carry a proof block. The gaps list tells you what to ask in a follow-up."
  - q: "Can I combine two customers into one quote?"
    a: "No. Merging quotes invents a person who never spoke. Use two separate quotes, or pick the stronger one."
  - q: "How do I handle anonymous quotes?"
    a: "Describe the role and the situation, not the person. Anonymous proof is weaker, so pair it with a specific detail and a clear before state."
  - q: "Should I fix grammar in a quote?"
    a: "Light punctuation is fine. Rewriting the sentence is not. The imperfections are part of why the quote reads as real."
---

Most testimonial pages fail because the quotes are generic praise. This prompt mines the specific before-and-after detail that makes proof believable, and it refuses to polish a quote into fiction.

The permission column is not optional. It keeps the launch from depending on a quote you cannot legally use.
