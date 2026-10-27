---
title: "Write comparison pages that survive scrutiny"
slug: viral-comparison-page
category: seo
category_label: SEO
difficulty: advanced
tools: [chatgpt, claude, perplexity]
read_time: 8
seo:
  type: "WebPage"
picks: []
related: [seo-content-strategy, programmatic-seo-pages, landing-page-copy]
art: workflow
tags: [comparison page, competitors, seo, positioning, decision page]
excerpt: "Builds an honest comparison page from verified criteria, including who should not buy, so the page earns trust and citations."
prompt: |
  You are a product marketer who writes comparison pages that sales teams
  actually send to prospects. You know the page is judged by what it admits,
  not by what it claims.

  ## What I will give you
  - My product, price, and ideal customer:
  - The competitor and what I know about it:
  - Verified sources: pricing pages, docs, changelogs, reviews, demos:
  - Where my product is genuinely weaker:
  - The buyer's decision criteria, in their words:
  - The action I want after reading:
  - Claims I cannot support:

  ## Step 1: The decision

  State the decision the reader is trying to make. It is not "which product
  is better". It is usually "which product fits this team, this workflow,
  and this budget".

  Name the three criteria that actually decide it, and say which one is
  usually weighted highest. If I have not given you evidence, mark it as an
  assumption.

  ## Step 2: The evidence table

  Build a comparison table with:
  - criterion
  - my product
  - competitor
  - why it matters
  - source

  Every factual cell needs a source from the list I supplied. If a source is
  missing, write "unverified" and do not fill the cell with a guess. Do not
  use checkmarks without a sentence that explains the difference.

  ## Step 3: The honest sections

  1. **Where the competitor is better.** Three specific cases, with the
     buyer profile that benefits. No backhanded compliments.
  2. **Where my product is better.** Three specific cases, tied to evidence.
  3. **Who should not choose my product.** Name the budget, team size,
     workflow, or requirement that makes the competitor the right call.
  4. **The switch cost.** Migration time, data export, retraining, contract
     terms, and anything the buyer will discover after signing.

  ## Step 4: The page copy

  Write:
  - **H1:** the comparison, not "Us vs Them".
  - **Intro, 80 words:** the decision, who the page is for, and what it will
    not cover.
  - **Table:** the evidence table above.
  - **Three sections:** competitor strengths, my strengths, and the wrong-fit
    case.
  - **FAQ:** five questions a buyer would actually ask, with short answers.
  - **CTA:** one next step, plus what happens after the click.

  ## Step 5: The scrutiny pass

  List every claim that could be challenged. For each, name the source or
  mark it for removal. Flag:
  - outdated competitor pricing
  - features that exist but are limited by plan
  - review quotes without a link
  - "best" or "leading" without a source
  - a comparison that changes the unit or plan tier

  ## Rules
  - No invented features, prices, reviews, or customer counts.
  - Do not compare your enterprise plan to their free plan.
  - Do not use "unlike them" without naming the actual difference.
  - Do not hide the competitor's name in the URL and reveal it in the copy.
  - If the honest answer is "it depends", say what it depends on.
workflow:
  - "Define the decision and the three criteria"
  - "Build an evidence table with a source for every claim"
  - "Write the strengths, weaknesses, and wrong-fit sections"
  - "Draft the page copy and FAQ"
  - "Run the scrutiny pass and remove unsupported claims"
output_preview: "A decision frame, a sourced comparison table, honest strengths and weaknesses, a wrong-fit section, page copy, FAQ, and a claim-by-claim scrutiny pass."
how_to_use:
  - "Bring current pricing pages and docs. Comparison pages age faster than any other content on the site."
  - "Ask for the wrong-fit section first. If the model cannot name one, the page is still an ad."
  - "Use a research model for competitor facts and a writing model for the page. Keep the sources attached."
  - "Review the page every quarter. A stale price is worse than no comparison."
tips:
  - "The wrong-fit section is the most persuasive part of the page. It proves the rest is not marketing."
  - "Compare the same plan tier. Most dishonest comparison pages win by comparing different tiers."
  - "Put the source next to the claim, not in a footnote nobody reads."
  - "Answer the question in the first sentence. AI summaries and skimming readers both reward it."
example_output: |
  DECISION
  Which tool fits a five-person team that needs shared inboxes and simple
  automation, without an operations hire.

  WRONG FIT
  "Choose the competitor if you need a custom approval chain in the first
  month. We do not support multi-step approvals yet, and their template
  library is deeper for that workflow."

  TABLE ROW
  Criterion: shared inbox included on the base plan
  Us: yes, unlimited inboxes, $12/user
  Competitor: yes, two inboxes, $19/user, additional inboxes $8
  Source: both pricing pages, checked 28 October 2026

  CTA
  "Start a 14-day trial with your real inbox. We will import the last 30
  days of mail and show you the approval gap before you commit."
faq:
  - q: "Is it legal to name competitors?"
    a: "In most places, yes, if the claims are truthful and sourced. Rules vary by jurisdiction, so have counsel review the page if you are unsure."
  - q: "Should I include a feature table?"
    a: "Only if the features decide the purchase. A table of 40 checkmarks usually hides the three criteria that matter. Start with the decision, then add detail."
  - q: "How often should I update the page?"
    a: "At least quarterly, and whenever a competitor changes pricing or a major feature. Put a visible checked date on the page."
  - q: "Can I use review-site quotes?"
    a: "Yes, with a link to the original and enough context to avoid cherry-picking. Do not invent a quote or paraphrase one into a stronger claim."
---
