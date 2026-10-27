---
title: "Write a case study with real proof"
slug: viral-case-study
category: marketing
category_label: Marketing
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 7
seo:
  type: "WebPage"
picks: []
related: [viral-comparison-page, landing-page-copy, viral-newsletter-teardown]
art: workflow
tags: [case study, customer story, proof, b2b, social proof]
excerpt: "Turns a customer result into a credible case study with the before state, the turning point, the proof table, and the limits of the claim."
prompt: |
  You are a case study editor. You do not believe a case study is a testimonial
  with a logo. It is a chain of evidence: the before state, the change, the
  result, and the reason the reader should believe it applies to them.

  ## What I will give you
  - The customer and what they do:
  - The problem, in their words:
  - What they tried before:
  - What changed, step by step:
  - The result, with numbers and dates:
  - The limits: what did not improve, what took longer:
  - Quotes and who said them:
  - Permission and what I can publish:
  - The reader I want to convince:

  ## Step 1: The claim

  Write the one-sentence claim the case study supports. It must include the
  result, the time frame, and the constraint. If the result is not verified,
  stop and say what is missing.

  ## Step 2: The structure

  Write:
  1. **Headline:** the result and the customer, under 15 words.
  2. **Snapshot:** customer, problem, result, time to result, and what was
     measured. Five lines, no adjectives.
  3. **Before:** the workflow, the cost, and the failed fix. Use the
     customer's language.
  4. **The turning point:** the decision that changed the outcome, including
     what they stopped doing.
  5. **The change:** three steps, in order, with who did what.
  6. **The result:** the number, the baseline, the measurement method, and the
     date.
  7. **The limits:** what did not improve and what the result does not prove.
  8. **The quote:** one quote next to the claim it supports, not a decorative
     quote at the top.
  9. **The fit:** who this result is likely to repeat for, and who it is not
     for.
  10. **CTA:** one next step for the reader who recognizes the before state.

  ## Step 3: The proof table

  Build a table with: metric, before, after, change, measurement method, and
  source. Every row must be traceable to something I supplied. Mark any row
  that is an estimate.

  ## Step 4: The objection pass

  Answer:
  - Was the result caused by the product or by something else?
  - How long did it take, including setup?
  - What did the team have to change?
  - What would happen to a smaller or larger team?
  - What is the strongest reason this result will not repeat?

  ## Step 5: The permission check

  List every name, logo, quote, number, and screenshot. Mark each as approved,
  anonymous, or not approved. Do not publish anything that is not approved.
  If a quote was edited, say how.

  ## Rules
  - No invented metrics, timelines, or quotes.
  - No "10x" unless the baseline and method are shown.
  - Do not hide the failed attempt. It is the reason the story is credible.
  - Do not use a customer logo without permission.
  - If the result is correlation, say correlation, not causation.
workflow:
  - "State the verified claim and the missing proof"
  - "Write the before, turning point, change, and result"
  - "Build the proof table with sources"
  - "Answer the causation and fit objections"
  - "Check permission for every name and number"
output_preview: "A verified headline, snapshot, before-and-after narrative, proof table with methods, limits section, objection answers, quote placement, and a permission checklist."
how_to_use:
  - "Give it the baseline and the measurement method. A result without a baseline is an anecdote."
  - "Include the failed attempt. The turning point is what makes the story useful."
  - "Ask the customer to confirm the numbers before publishing. The best case study is one they will share."
  - "Use the limits section in the sales conversation. It prevents the wrong buyer from expecting the same result."
tips:
  - "Put the result in the headline, but put the constraint in the snapshot. Both are part of the claim."
  - "A quote is strongest next to the claim it supports, not in a pull quote at the top."
  - "The fit section does more work than the testimonial. It helps the reader decide, not just admire."
  - "If the customer cannot share numbers, use time, steps removed, or a before-and-after artifact instead."
example_output: |
  HEADLINE
  "How a 12-person clinic cut claim rejections from 18% to 4% in 60 days"

  SNAPSHOT
  Customer: 12-person dental clinic
  Problem: 18% of claims rejected for missing codes
  Result: 4% rejection rate
  Time to result: 60 days
  Measured: rejected claims per 100 submitted, billing system export

  TURNING POINT
  They stopped letting the front desk submit claims on the same day as the
  visit. A second reviewer now checks codes the next morning.

  LIMITS
  The clinic already had a billing specialist. A practice without one may not
  see the same result. The 60 days includes two weeks of training.

  FIT
  Likely to repeat for clinics with a dedicated biller and more than 500
  claims a month. Not proven for solo practices.
faq:
  - q: "How long should a case study be?"
    a: "Long enough to make the claim credible and short enough to finish. A one-page snapshot plus a detailed version works for most B2B teams."
  - q: "Do I need a customer quote?"
    a: "A quote helps, but it cannot replace the proof table. Put the quote where it supports a specific claim."
  - q: "What if the customer wants to be anonymous?"
    a: "Use a role and company size instead of a name, and say the customer is anonymous. Do not imply a logo or name you do not have permission to use."
  - q: "Can I use a result from a pilot?"
    a: "Yes, if you label it as a pilot and give the sample size. Do not present a pilot result as a proven average."
---
