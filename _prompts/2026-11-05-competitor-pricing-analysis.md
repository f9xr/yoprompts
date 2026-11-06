---
title: "Analyse competitor pricing without guessing"
slug: competitor-pricing-analysis
category: business
category_label: Business
difficulty: intermediate
tools: [chatgpt, claude, gemini, perplexity]
read_time: 8
seo:
  type: "WebPage"
picks: []
related: [pricing-and-positioning, viral-comparison-page, viral-pricing-page-copy]
art: chart
tags: [pricing, competitors, analysis, positioning, business, packaging]
excerpt: "Builds a sourced competitor pricing map, normalises the plans, and shows where the market leaves room for a different model."
prompt: |
  You are a pricing analyst. You work from published prices and sourced facts.
  Where a price is not public, you mark it unknown instead of estimating it.

  ## What I will give you

  - My product, buyer, and current price
  - The competitors to include
  - The market and currency
  - The customer segment I care about
  - Any sales data I can share

  If a competitor's page cannot be accessed, list it as inaccessible and do
  not fill the number from memory.

  ## Workflow

  1. Collect each competitor's public plans: name, price, billing period,
     included units, limits, and add-ons.
  2. Normalise to a monthly cost at three usage levels: small, typical, large.
  3. Record the source URL and the date checked for every price.
  4. Identify the packaging model: seat, usage, flat, or hybrid.
  5. Find where the market is crowded and where it is thin.
  6. Compare the value metric, not just the number.
  7. Recommend a pricing position and the risk in choosing it.

  ## Rules

  - Never invent a price, a discount, or an enterprise quote.
  - Mark "contact sales" as unknown, not as a number.
  - Keep the currency and the tax basis explicit.
  - Separate list price from promotional price.
  - Note annual discounts separately from monthly price.
  - Do not compare plans with different included units without normalising.

  ## Output format

  Return a table: competitor, plan, list price, billing, included units,
  source, date checked. Then the normalised comparison at three usage levels,
  the crowding map, and a recommended position with the tradeoff.
workflow:
  - "Collect public plans and source every price"
  - "Normalise plans to three usage levels"
  - "Map packaging models and market crowding"
  - "Compare value metrics, not just headline prices"
  - "Recommend a position and name the risk"
output_preview: "A sourced pricing table, a normalised cost comparison, a crowding map, and a recommended position with the tradeoff stated."
how_to_use:
  - "Give the usage levels that matter to your buyer. A per-seat price means nothing without the seat count."
  - "Paste or link the public pricing pages. The model should not rely on remembered prices."
  - "Check the date on every source. Pricing pages change and stale data misleads the whole analysis."
tips:
  - "Normalise before you compare. A cheap seat price with a usage cap can be the most expensive plan at scale."
  - "The value metric explains more than the price. Look at what the competitor charges for, not just how much."
  - "A crowded price point is a signal to change packaging, not necessarily to undercut."
  - "Mark enterprise as unknown. A guessed enterprise number distorts the positioning."
example_output: |
  COMPETITOR TABLE
  Acme | Starter | $29/mo | monthly | 3 seats, 10k events | acme.com/pricing | 2026-11-05
  Acme | Growth  | $99/mo | monthly | 10 seats, 100k events | acme.com/pricing | 2026-11-05
  Beta | Team    | contact sales | annual | unknown | beta.com/pricing | 2026-11-05

  NORMALISED AT 15 SEATS / 80K EVENTS
  Acme: $99 + $15 per extra seat = $174/mo
  Beta: unknown

  POSITION
  Price by events, not seats. The market charges for seats, which punishes
  collaboration. Risk: buyers may compare headline seat price first.
faq:
  - q: "Can it find prices that are behind a login?"
    a: "No. It marks them unknown. Estimating a private enterprise price is how a pricing analysis becomes fiction."
  - q: "How many competitors should I include?"
    a: "Three to six direct competitors is enough to see the pattern. More than that adds rows without changing the decision."
  - q: "Should I match the lowest price?"
    a: "Not automatically. Match the value metric first, then decide whether the price position should be lower, equal, or premium."
  - q: "What is a value metric?"
    a: "The unit the customer pays for, such as seats, events, projects, or revenue. It shapes how the price grows with the customer's success."
---
Pricing analysis goes wrong when it compares headline numbers across plans with different units. The prompt normalises every competitor to the same usage level and records the source and date for each price.

That makes the output useful for a real decision: where the market is crowded, which value metric is underserved, and what the tradeoff is in choosing a different model.

Pair it with Pricing and Positioning to turn the analysis into a decision, or with Viral Comparison Page to publish a fair, sourced comparison.
