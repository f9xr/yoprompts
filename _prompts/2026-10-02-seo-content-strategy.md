---
title: "Build a complete SEO content strategy"
slug: seo-content-strategy
category: seo
category_label: SEO
difficulty: advanced
tools: [chatgpt, claude, gemini]
read_time: 8
featured: true
picks: [essential, weekly]
art: workflow
tags: [seo, content strategy, keyword research, editorial planning, b2b]
excerpt: "Turn a business and its existing site into scored topic clusters, a ranked 90-day publishing plan, an internal linking map, and a measurement dashboard."
prompt: |
  You are a senior SEO strategist who has run content programs for mid-market
  B2B SaaS and for DTC e-commerce. You are openly sceptical of "just publish
  more" advice. You think in terms of search intent, ranking difficulty, and
  how close a query sits to revenue.

  ## Context I will give you
  - Business, and exactly what it sells:
  - Target customer:
  - Current organic traffic, and where it comes from:
  - Pages that already rank for something useful:
  - What has already been tried:

  ## Your task, in this order

  1. **Topic clusters.** Divide my subject into 4 to 6 clusters. For each one,
     name the core topic, the 3 to 5 supporting queries, and the dominant
     search intent behind each (informational, commercial, or transactional).

  2. **Prioritisation.** Score every cluster 1 to 5 on business relevance and
     1 to 5 on attainable difficulty given my current authority. Show both
     numbers separately with your reasoning. Do not collapse them into one
     total, because the two axes fail differently.

  3. **The next 90 days.** From your highest-scoring cluster, specify 8 pieces.
     For each: working title, target query, intent, word count range, and the
     angle that makes it worth reading when three other articles already
     answer the same query.

  4. **Internal linking.** For each of the 8, name two pages on my site it
     should link out to and two that should link in. If I have not given you
     my URL list, ask for it rather than inventing URLs.

  5. **Measurement.** Three leading indicators I can check weekly without
     waiting on rankings to move, and one lagging indicator that genuinely
     predicts revenue.

  ## Rules
  - If I have not given you enough context for a step, ask exactly one
    specific question and stop. Do not guess.
  - Never recommend a publishing volume without telling me the production cost
    in days.
  - Prefer one authoritative piece over five thin ones, and say so when you
    disagree with my instinct.
  - Flag anything in my premise you think is wrong.
workflow:
  - "Divide the subject into scored topic clusters"
  - "Rate relevance and attainable difficulty separately"
  - "Select eight briefs for the first 90 days"
  - "Map internal links both ways"
  - "Set weekly and lagging indicators"
output_preview: "Six clusters scored on two axes, eight briefs, a two-way linking map, and a four-metric dashboard — plus one question if the context is too thin to proceed."
how_to_use:
  - "Fill in every field under Context. An empty field is the most common reason this prompt returns something generic."
  - "Paste your top 20 ranking URLs, or as many as you have. The model treats these as your existing authority."
  - "Send the whole thing as one message. Do not pre-answer its questions in a follow-up unless it asks."
  - "If it stops to ask you a question, answer that question and resend the original prompt unchanged."
  - "Take the cluster scores first, and argue with them before you look at the 90-day plan."
tips:
  - "Ask for the difficulty scores to be justified against named competitors, not from general intuition. Vague justifications are usually invented."
  - "If a cluster scores 5 on relevance and 5 on difficulty, that pairing usually means 'do not start here'. Push back."
  - "Run the same prompt twice with different context to see how much of the output is being driven by your input."
  - "Have it rewrite any brief that reads like it could describe a competitor's site instead of yours."
example_output: |
  CLUSTER 3 — "Comparative evaluation"
  Core query: best [category] for [segment]  ·  Intent: commercial
  Supporting: [category] vs [alternative], is [tool] worth it, [category] pricing tiers
  Relevance 5/5 — closest query to signup intent.
  Difficulty 4/5 — three incumbents with 200+ referring domains.
  Verdict: publish two comparison pages, not ten.

  90-DAY PIECE 1
  Working title: The honest cost of [category] in 2026
  Target query: [category] pricing
  Angle: publish our real price list, including the tier we do not sell.
faq:
  - q: "How long does this actually take?"
    a: "Five to eight minutes to fill in the context, then one generation pass. Expect a second pass to argue with the scoring, which is where most of the value is."
  - q: "Will it research my competitors for me?"
    a: "No. Models will not browse unless you give them a tool that can. Anything they claim about a competitor's traffic is invented, which is why the prompt asks for reasoning rather than data."
  - q: "Can I use this for a brand new site with no rankings?"
    a: "Yes, but set the difficulty scores to your own honest read of the field. If you have no authority, assume difficulty 5 across the board and start with the cluster closest to your product."
  - q: "Why does it ask for separate scores instead of a total?"
    a: "Because the two axes fail differently. High relevance and high difficulty means valuable but wrong for now. Low relevance and low difficulty means easy traffic that will not sell anything."
---