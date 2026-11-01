---
title: "Write the FAQ page buyers actually search for"
slug: viral-faq-page-builder
category: seo
category_label: SEO
difficulty: intermediate
tools: [chatgpt, claude, perplexity]
read_time: 6
seo:
  type: "WebPage"
picks: []
related: [seo-blog-outline-ranker, landing-page-copy, viral-comparison-page]
art: terminal
tags: [faq, seo, schema, aeo, content, search]
excerpt: "Builds a search-ready FAQ from real buyer questions, with direct answers, schema-ready markup, and no invented claims."
prompt: |
  You are an FAQ editor and technical SEO. You write answers that a person
  can use in one read and a search engine can quote without distortion.

  ## What I will give you
  - The product or page the FAQ supports
  - Real questions from support, sales calls, search, or community threads
  - The audience and their level of knowledge
  - Facts that are confirmed, and facts that are still unknown
  - The competitors or alternatives people compare us to

  ## Produce in this order

  1. **Collect and cluster.** Group the real questions into themes: pricing,
     setup, fit, trust, comparison, and support. Drop questions nobody asks.

  2. **Pick ten.** Rank by search intent and by how often the question blocks
     a decision. Name the intent for each: informational, commercial, or
     transactional.

  3. **Write each answer** in this shape:
     - a direct answer in the first sentence
     - the detail that makes it true
     - the exception or condition, if one exists
     - a link only where it helps the reader go deeper

  4. **Add the unanswerable questions.** If a fact is unknown, write the
     question and mark the answer as pending. Do not guess.

  5. **Write the page copy.** Give a short intro under 40 words, the questions
     in a logical order, and a closing line with one next action.

  6. **Prepare schema.** Output a JSON-LD `FAQPage` block using the same
     questions and answers. Keep the text identical to the visible page.

  7. **Name the gaps.** List questions that need a real answer before
     publication, and who can supply it.

  ## Rules
  - Never invent a price, a policy, a date, or a capability.
  - Never write an answer that starts with "It depends" and stops there.
  - Do not repeat the question inside the answer.
  - Do not use marketing adjectives in the direct answer.
  - Keep each answer under 80 words unless the question genuinely needs more.
  - The schema text must match the visible answer exactly.

  ## Done test
  A reader can get the answer from the first sentence, and the page can pass
  a structured-data check without editing.
workflow:
  - "Cluster real questions by intent"
  - "Pick ten that block a decision"
  - "Write direct answers with conditions"
  - "Mark unknown answers as pending"
  - "Add matching FAQPage schema"
output_preview: "Clustered questions, ten ranked by intent, direct answers, pending items, page copy, and a matching FAQPage block."
how_to_use:
  - "Use real questions. A list invented from a template ranks for nothing and answers nobody."
  - "Give it the confirmed facts separately from the unknowns. The prompt will mark the rest as pending instead of filling the gap."
  - "Publish only the answers you can defend. A pending question is better than a confident wrong answer."
  - "Keep the schema and the page in sync. If you edit one, edit the other in the same commit."
tips:
  - "The first sentence is the answer. Everything after it is justification for a reader who wants more."
  - "Search questions are often shorter and blunter than support questions. Use both, but keep the wording people actually type."
  - "One strong comparison question can outrank a whole page of generic FAQs."
  - "Update the page when a policy changes. Stale FAQ answers damage trust faster than a missing answer."
example_output: |
  QUESTION
  Do you offer a free plan?
  Intent: commercial.

  ANSWER
  Yes. The free plan includes three projects and one user, with no time
  limit. Paid plans add shared workspaces and export. The free plan does not
  include the API.

  QUESTION
  How does this compare to a spreadsheet?
  Intent: commercial.

  ANSWER
  A spreadsheet is better for one-off calculations. This tool is built for
  repeated reports that several people update. If you only need a one-time
  model, keep the spreadsheet.

  PENDING
  Annual discount percentage. Owner: finance. Needed before launch.
faq:
  - q: "How many questions should an FAQ page have?"
    a: "Ten is usually enough to cover the decision. More questions help only when each one matches a real search or a real support ticket."
  - q: "Does FAQ schema still help in search?"
    a: "It helps search engines understand the page and it gives answer engines clean text to quote. It does not guarantee a rich result, and the visible answer still has to be good."
  - q: "Should I put the FAQ on its own page or inside the product page?"
    a: "Put the questions that block a purchase on the product page. Move long-tail and support questions to a dedicated page, then link between them."
  - q: "Can I use AI to generate the questions?"
    a: "Use it to cluster and rewrite, not to invent. Start from support tickets, sales calls, and search queries, then let the model shape the answers."
---

FAQ pages fail in two ways: they answer questions nobody asked, or they give a vague answer that sounds safe and helps no one. This prompt starts from real questions and forces a direct first sentence.

The schema step is deliberately tied to the visible text. Mismatched markup is worse than no markup, because it teaches search engines that the page cannot be trusted.
