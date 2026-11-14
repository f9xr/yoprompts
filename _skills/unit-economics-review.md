---
title: "Unit Economics Review"
title_tag: "Unit Economics Review — AI agent skill for Finance"
slug: unit-economics-review
category: finance
date: 2026-11-12
excerpt: "Checks CAC, margin, payback, and retention for the definitions that make them comparable, then says which number would have to change for the business to work."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [unit economics, cac, ltv, payback, margin, finance, saas]
usage: |
  Review these unit economics.

  Start with the definitions, because CAC and LTV are calculated differently
  in every deck. Then check whether the numbers are comparable across
  segments and whether payback survives a change in churn.

  Numbers, definitions used, and segment breakdown:
  [paste]
related_skills: [financial-model-review, budget-forecast, pricing]
skill_file: |
  ---
  name: unit-economics-review
  description: Review CAC, LTV, gross margin, and payback period for definitional consistency and segment comparability, and identify which lever decides whether the unit economics work. Use when the user asks about unit economics, CAC payback, LTV to CAC, contribution margin, or whether a growth channel is profitable.
  ---

  # Unit Economics Review

  Unit economics are only meaningful as a set. A CAC without a margin, a
  payback without a churn assumption, and an LTV without a discount rate are
  three unrelated numbers.

  ## Workflow

  1. Write down the definition of each metric as the company calculates it.
  2. Check what is included in cost: sales, marketing, onboarding, support,
     hosting, payment fees.
  3. Check the time window and cohort alignment.
  4. Recalculate on one consistent basis.
  5. Compare segments rather than averaging.
  6. Name the single lever that decides viability.

  ## Definitions

  ### CAC

  - Fully loaded: salaries, tools, commissions, ad spend, agency fees.
  - Blended or paid-only? Blended hides an expensive channel inside organic.
  - Which period's spend is matched to which period's new customers?
  - Are expansions counted as new customers? They should not be.

  ### Gross margin

  - Revenue minus hosting, third-party fees, and direct support.
  - Exclude sales and marketing, or margin and payback double-count the same
    cost.
  - Usage-based products need margin by cohort, because the heaviest
    customers arrive later.

  ### LTV

  - Use gross margin, not revenue.
  - Use observed retention, not a survey intention.
  - Cap the horizon: a five-year LTV on an 18-month average life is fiction.
  - Discount future cash if the comparison matters.

  ### Payback

  - Months of gross margin to recover CAC.
  - State whether it is on revenue or on margin. The two differ by the margin
    percentage and the difference is usually the argument.

  ## Comparability checks

  - Same cohort, same window, same currency, same segment definition.
  - Annual contracts normalized to monthly, or kept separate.
  - Enterprise deals with implementation cost shown separately.
  - Churn measured on the same base as the LTV.

  ## Sanity checks

  - Does CAC include the sales team that sells the product being measured?
  - Does the margin include the support cost the product creates?
  - Is payback shorter than the average contract length? If not, the customer
    leaves before the cost is recovered.
  - Does LTV exceed CAC by a margin that survives a 20 percent worse churn?
  - Do the segments have different economics that the average conceals?

  ## Output

  ```
  Definitions in use
  - CAC, margin, LTV, payback, with inclusions and window.

  Recalculated
  - Same metrics on one basis, with the difference explained.

  By segment
  - Segment, CAC, margin, payback, retention. Where the average misleads.

  The decisive lever
  - The number that must move, by how much, for the unit to work.

  What is assumed
  - Every assumption the conclusion depends on.
  ```
---

Unit economics arguments are usually definitional. One side counts marketing spend, the other counts only ad spend, and the meeting ends without a decision.

This skill starts by writing the definitions down and recalculating on one basis, then compares segments. A blended CAC that looks healthy often contains one channel that never pays back.

Pair it with Financial Model Review when the numbers feed a plan, or Pricing when the fix is the price rather than the channel.
