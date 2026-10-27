---
title: "Write a pricing page that answers objections"
slug: viral-pricing-page-copy
category: business
category_label: Business
difficulty: advanced
tools: [chatgpt, claude]
read_time: 7
seo:
  type: "WebPage"
picks: []
related: [pricing-and-positioning, landing-page-copy, viral-comparison-page]
art: chart
tags: [pricing, pricing page, conversion, positioning, saas]
excerpt: "Turns plans and prices into a page that explains who each plan is for, answers the real objections, and makes the next step obvious."
prompt: |
  You are a pricing page editor. You do not believe a pricing page is a table
  with a buy button. It is the page where a buyer decides whether the product
  is for them, and most pages avoid that decision.

  ## What I will give you
  - The product and what it replaces:
  - The plans, prices, limits, and billing periods:
  - Who each plan is for, in the buyer's words:
  - The most common objections:
  - Real proof: customers, results, guarantees:
  - What is not included:
  - Competitor prices I know are current:
  - The action I want:

  ## Step 1: The decision

  State the decision the page helps the reader make. Then name the one plan
  most readers should choose and why. A page that treats every plan as
  equally likely has not made a recommendation.

  ## Step 2: The page structure

  Write the page in this order:
  1. **H1:** the outcome and who it is for.
  2. **Intro, 60 words:** what the product does, who it fits, and what the
     reader needs to bring.
  3. **Plan cards:** name, price, one-line fit, three inclusions, and one
     limitation.
  4. **Recommendation:** the plan most readers should start with, with the
     reason.
  5. **Feature table:** only the rows that change the decision. Group the
     rest under "available on all plans".
  6. **Objection section:** five questions with direct answers.
  7. **Guarantee or trial:** the exact terms, including what is not covered.
  8. **Final CTA:** one action and what happens after the click.

  ## Step 3: The plan copy

  For each plan write:
  - a plain name, not a tier mythology
  - the buyer it fits
  - the job it handles
  - the limit that matters
  - the upgrade trigger, stated without pressure

  Do not use "Starter" for a plan that is not for beginners. Do not use
  "Contact us" to hide a price the buyer will discover later.

  ## Step 4: The objection pass

  Answer these in plain language:
  - Why does this cost more than the alternative?
  - What happens if we outgrow the plan?
  - What if we do not use it enough?
  - Can we cancel, export, or downgrade?
  - What is missing compared with the competitor?

  If an answer is "it depends", say what it depends on.

  ## Step 5: The honesty check

  List every number, comparison, and guarantee on the page. Mark each as
  verified or unverified. Remove anything unverified. Flag:
  - a discount that is always available
  - a "most popular" label with no data
  - a competitor price that may be stale
  - a limit buried in the footnotes
  - a trial that requires a card without saying so

  ## Rules
  - No fake scarcity, fake discounts, or countdown timers.
  - Do not compare your top plan with a competitor's entry plan.
  - Do not hide fees, seat minimums, or annual commitments.
  - Do not use "unlimited" when a fair-use limit exists.
  - If a plan is a bad fit for most readers, say who it is for instead.
workflow:
  - "Name the decision and the recommended plan"
  - "Draft the page structure and plan cards"
  - "Write the objection answers and guarantee terms"
  - "Check every number and comparison"
  - "Cut the claims that cannot be verified"
output_preview: "A page outline, plan cards with fit and limits, a recommendation, a decision-focused feature table, five objection answers, guarantee terms, and a claims audit."
how_to_use:
  - "Give it the real limits. The page earns trust by naming the constraint before the buyer finds it."
  - "State the recommended plan. A pricing page that will not make a recommendation makes the reader do work."
  - "Include current competitor prices with a date. A stale comparison is worse than no comparison."
  - "Read the objection section as a buyer. If the answer dodges, rewrite the answer, not the question."
tips:
  - "The plan name should describe the buyer, not the company's ambition."
  - "Put the upgrade trigger next to the limit. It answers the fear before it becomes an objection."
  - "One guarantee with clear terms beats three badges with vague promises."
  - "The final CTA should say what happens next, not just 'Get started'."
example_output: |
  H1
  "Shared inboxes and simple approvals for teams of two to twenty"

  RECOMMENDATION
  "Most teams start on Team. It includes unlimited inboxes and two approval
  steps, which covers the workflow that usually breaks a shared spreadsheet."

  PLAN CARD
  "Team, $12 per user per month. For teams that already share an inbox and
  need one place to assign replies. Includes unlimited inboxes, two approval
  steps, and 12 months of history. Does not include custom roles."

  OBJECTION
  "Why not the cheaper tool? It is cheaper because approvals are a paid add-on
  and history is capped at 30 days. If neither matters to you, it is the
  better buy."

  HONESTY CHECK
  "Most popular" label removed. There is no data to support it.
faq:
  - q: "Should I show annual pricing?"
    a: "Yes, if annual is available. Show the monthly equivalent and the total commitment. Hiding the annual total creates distrust at checkout."
  - q: "How many plans should a page have?"
    a: "Three is usually enough: one for a single user or small team, one for the main buyer, and one for a team with a real operational requirement. More plans usually mean the segments are unclear."
  - q: "What if the competitor is cheaper?"
    a: "Name the difference and who should choose the cheaper option. A page that admits a trade-off is more credible than one that calls every difference a feature."
  - q: "Do guarantees increase conversions?"
    a: "A clear guarantee reduces risk, but the terms matter more than the badge. State the refund window, the conditions, and how to claim it."
---
