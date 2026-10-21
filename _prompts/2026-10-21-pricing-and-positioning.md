---
title: "Decide what to charge and who it is for"
slug: pricing-and-positioning
category: business
category_label: Business
difficulty: advanced
tools: [claude, chatgpt]
read_time: 7
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: []
related: [landing-page-copy, deep-research-synthesis, cold-email-writer, weekly-review-planner]
art: chart
tags: [pricing, positioning, business strategy, pricing strategy, value metric, packaging, tiering, monetization]
excerpt: "Finds the price from the value delivered and the cost to deliver it, then tests three tiers and a value metric against the objections each one raises."
prompt: |
  You are a pricing strategist. You have seen businesses price by copying a
  competitor, and you have seen the cost of that. Your method is value first:
  price is the exchange rate between what the customer gets and what it
  costs you to deliver, and the price is whatever falls out of that, not a
  number you picked first.

  ## What I will give you
  - What I sell and who buys it:
  - What a customer gets, and what outcome they are buying:
  - My costs to deliver it, and which of them scale with usage:
  - What they currently pay for the alternative, including doing nothing:
  - What I have tried on price so far:
  - Any constraint, such as a price floor, a contract, or a channel rule:

  ## Produce in this order

  1. **What is actually being bought.** The outcome, not the product. Write
     it as the change in the customer's situation, and say what they would
     have to do instead if they did not buy. The price has to make that
     alternative look expensive enough.

  2. **The value ceiling.** The most the outcome is worth to this buyer,
     from their point of view, and the reasoning. Name the anchor you used:
     what it costs them to solve this another way, what it costs to not
     solve it, or what budget it comes out of. If there is no credible
     ceiling, say the value is not established yet and that is the real
     problem.

  3. **The cost floor.** Your delivery cost per customer, split into the
     part that does not scale and the part that does. The price must clear
     the floor with a margin you state. Name the floor.

  4. **The price.** Where the price sits between the floor and the ceiling,
     and why that point and not the others. If the range between them is
     narrow, say so and recommend which end.

  5. **The value metric.** What you charge per unit of, and why that unit
     is the one that grows with the value the customer gets. A metric that
     grows with usage but not with value is a metric customers will fight.
     Compare three candidate metrics and name the one to use and the two to
     reject.

  6. **Three tiers.** For each: who it is for, what it includes, the price,
     and the one thing it is for. A tier with no specific customer is a
     tier with no purpose. Say which tier you expect most revenue in and
     which one exists to catch the buyer who will not pay the middle price.

  7. **The objection each tier raises.** A reason a specific customer
     would refuse to buy that tier, and what would have to be true for
     them to move up. Name the objection that is really about trust or
     timing rather than price.

  8. **The price-change test.** What happens to volume and revenue if the
     price moves up 20 percent and if it moves down 20 percent, and what
     that tells you about whether the price is right or simply unknown.
     Be explicit about what you are guessing.

  9. **The experiment.** The cheapest test that would produce real
     information within a month, what it would cost, and what result would
     make you change the price. One experiment, not a pricing roadmap.

  10. **What to do about the alternative.** The customer doing nothing is
      the real competitor. Name what it costs them to keep doing nothing,
      and where in the page, the email or the product that fact belongs.

  ## Rules
  - Never invent a competitor price, a willingness to pay, a survey
    result, or a churn rate. If you do not have the number, use
    [NEEDS DATA] and give the reasoning in ranges instead.
  - Never price on cost alone. Cost sets the floor. It does not set the
    price.
  - Never recommend a discount as the answer to a price objection. Diagnose
    which of the four objections is real first: value, trust, timing or
    budget.
  - No tier that is the middle tier with features removed. Each tier must
    serve a buyer with a different reason to buy.
  - Always state the margin you are assuming. A price with no margin
    behind it is a guess.
  - If the ceiling and the floor cross, say that the business does not
    work as currently delivered, and say what would have to change. That
    is more useful than a price.
workflow:
  - "Define the outcome being bought and the value ceiling"
  - "Compute the delivery cost floor and the margin"
  - "Set the price and the value metric, rejecting two alternatives"
  - "Design three tiers each with a named buyer"
  - "Diagnose the objection each tier raises"
  - "Run the price-change test and propose one cheap experiment"
output_preview: "The outcome being bought, a reasoned value ceiling, a delivery cost floor, a price with its margin, a chosen value metric with two rejected ones, three tiers with named buyers, the objection per tier, a price-change test with the guesses named, one experiment and a plan for the do-nothing competitor."
how_to_use:
  - "Bring real delivery costs, even rough ones. A pricing analysis without a cost floor is a wish list."
  - "Describe what the customer is buying, not what you built. The gap between those two is where most pricing mistakes live."
  - "Be honest about the do-nothing alternative. Most businesses lose more to it than to any competitor."
  - "Take the tier objection section seriously. It is where you will find that your cheapest tier exists for a reason nobody can articulate."
tips:
  - "Price the value metric, not the feature. When customers complain about price, they are usually complaining about the unit you chose, and changing the unit changes the conversation without changing the revenue."
  - "If most of your customers are on the cheapest tier, your tiers are not tiered. One of them is your real product and the other two are decoration."
  - "Raising the price on existing customers is a separate experiment with a separate risk. Do not fold it into a new-customer test."
  - "Run the pricing argument past someone who has to sell it. If your sales team cannot say the price out loud without flinching, the objection section is not finished."
example_output: |
  1. WHAT IS BEING BOUGHT
  An answer, delivered in a day, instead of a week of someone on the team
   reading spreadsheets and asking around. They are buying back a week of
   one person's attention, every month.

  2. THE VALUE CEILING
  Ceiling is 900 per month. Anchor: the alternative is a part-time analyst
  at 2,500 per month who produces the same thing, plus the week of delay.
  Even at a tenth of that cost the outcome is worth more than 300.
  The value is established.

  3. THE COST FLOOR
  Fixed: 400 per month (infrastructure and the support time that does not
  scale).
  Variable: 12 per report, averaging 40 reports per month, so 480.
  Total delivery cost: 880 per month at current volume.
  At a price of 400 the floor is already crossed, so the current price is
  below cost. That is the finding.

  4. THE PRICE
  Floor is 880, ceiling is 900. The range is 20 wide, so price cannot be
  set by this method and the business does not work as currently
  delivered. Two ways out, in order of preference:
  (a) Cut the fixed cost, which is mostly avoidable tooling and support
      overhead, and
  (b) Raise the price and accept a much smaller customer base, since the
      value ceiling allows it.
  Recommended: 700 per month for the mid tier, which is 180 below the
  ceiling and covers the floor once the fixed cost comes down to 300.

  5. THE VALUE METRIC
  Rejected: per seat. Grows with headcount, not with value, and it punishes
  the customer for sharing access.
  Rejected: per report. Closest to value, but it bills for questions the
  customer did not need, and it invites report-stuffing.
  Chosen: per workspace, with a fair-use band inside it. Grows with how
  many teams use the answer, which is when the value grows.

  6. THREE TIERS
  Solo, 150: one workspace, up to 30 reports. For a person checking one
  number a week.
  Team, 700: five workspaces, shared history, exports. For a team that
  asks the same question from different angles.
  Company, 1,500: unlimited workspaces, API, audit log, named support.
  For a business where the answer has to be defensible.
  Expect most revenue in Team. Company exists for the buyer who needs
  defensibility, not more seats.

  7. OBJECTIONS
  Solo: "This is too much for something I use once a week." Real answer is
  a fair-use reset, not a discount.
  Team: "We already have someone who does this." This is a trust
  objection, not a price one. The answer is the export and the audit trail,
  not the price.
  Company: "We are not ready to commit at that level." This one is timing.
  Answer with a pilot on one workspace.

  8. PRICE-CHANGE TEST
  At 840 (20 percent up): volume guess is 10 to 20 percent down, revenue
  up. Almost all of this is a guess, because I do not have a willingness
  to pay signal.
  At 560 (20 percent down): volume guess is 40 to 60 percent up, revenue
  roughly flat. This is the worst outcome and it is the one most likely
  to happen, which says the current price may be masking a volume problem.
  What I do not know: any of the volume numbers above.

  9. EXPERIMENT
  Put the 700 tier in front of 20 existing Solo customers as a two-week
  trial of one additional workspace. Costs nothing beyond the support time.
  Signal to act on: 4 or more accept. Below 2, the objection is value, not
  price, and the copy is the problem rather than the number.

  10. THE ALTERNATIVE
  They are currently paying 2,500 a month for part of a person's time and
  still waiting a week. That is the number to put next to the price, and
  it belongs in the pricing section of the page, not buried in a case
  study.
faq:
  - q: "My costs are almost entirely fixed. Does that change the method?"
    a: "It changes where the price sits, not how it is found. With near-zero marginal cost the floor is low, so the ceiling does more of the work, and the main risk becomes giving away margin on customers who would have paid more. That is an argument for the value metric, not for a discount."
  - q: "How do I use this if I am pre-revenue?"
    a: "Use steps 1, 2 and 10 only. Establish what outcome you are buying for and what the alternative costs today, then talk to five customers about the ceiling. There is no cost floor to compute yet, and inventing one before you have customers produces a number with nothing behind it."
  - q: "Should I raise prices for existing customers?"
    a: "Not as part of this. It is a separate decision with a separate risk, and mixing it with a repositioning makes both harder to read. Grandfather existing customers, test the new price with new ones, and decide on existing accounts once you know the new price is not shrinking the base."
  - q: "What if my competitors are much cheaper?"
    a: "That is only a problem if you are selling the same thing to the same buyer. Steps 1 and 2 are where you find out whether you are. If the answer is that you are, competing on price is the only option left and it is worth knowing that before you set anything."
---
