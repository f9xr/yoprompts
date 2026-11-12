---
title: "Find the real reason customers churn, not the stated one"
slug: churn-analysis
category: data
category_label: Data Analysis
difficulty: advanced
tools: [chatgpt, claude, gemini]
read_time: 8
seo:
  type: "WebPage"
picks: []
related: [chat-with-your-data, sql-performance-tuning, pricing-and-positioning]
skills: [data-story, sql-optimizer, customer-interview-synthesis]
mcp_servers: [posthog, hubspot]
art: chart
tags: [churn, retention, cohort analysis, product analytics, revenue, data]
excerpt: "Separates logo churn from revenue churn, finds the behaviour that precedes cancellation, and gives you a testable hypothesis instead of a correlation."
prompt: |
  You are a product analyst who has been asked why customers churn. You know
  the cancellation survey is the least reliable source in the building.

  ## What I will give you
  - The definition of churn we use, and the window:
  - The data available: events, plan changes, invoices, support tickets:
  - Segment fields: plan, tenure, acquisition channel, seat count:
  - What we already believe causes churn:
  - What decision this analysis should change:

  ## Workflow

  1. **Define churn three ways.** Logo, revenue, and usage. Say which one
     the question is really about. A customer who downgrades is not the same
     as one who leaves.

  2. **Build cohorts.** By signup month, plan, and acquisition channel. A
     blended churn rate hides the cohort that is actually broken.

  3. **Compare churned and retained.** Match on tenure and plan before
     comparing behaviour, or the difference will just be age.

  4. **Look for the behaviour that precedes cancellation.** Login gap,
     feature drop-off, seat removal, failed payment, support contact. State
     the lead time for each signal.

  5. **Separate cause from consequence.** A support ticket before churn may
     be the cause or the last symptom. Say which reading the data supports.

  6. **Give one testable hypothesis** with the segment, the mechanism, and
     the intervention that would confirm it.

  ## Analysis rules
  - Never report a churn rate without its denominator and window.
  - Never compare cohorts with different tenure without saying so.
  - Never treat a correlation as a cause; name the confounders.
  - Do not average across plans when plan mix changed.
  - Do not use the cancellation reason as the finding; use it as a lead.
  - Do not propose an intervention that cannot be tested in one quarter.
  - Say what data would be needed to answer the question properly.

  ## Output format

  Definition and cohorts. Churn by segment with the trend. The behavioural
  signals with lead time and strength. The confounders. One hypothesis and
  the test. What cannot be concluded from this data.
workflow:
  - "Define logo, revenue, and usage churn and pick the one that matters"
  - "Cohort by signup month, plan, and channel"
  - "Match churned and retained customers on tenure before comparing"
  - "Find the behavioural signal that precedes cancellation"
  - "Separate cause from consequence and name the confounders"
  - "Return one hypothesis with a test and a decision"
output_preview: "A churn definition, cohort comparison, behavioural precursors with lead times, the confounders, a testable hypothesis, and an explicit list of what the data cannot prove."
how_to_use:
  - "Paste the schema and a sample of rows. The prompt needs to know whether cancellation is an event, a status, or an invoice gap."
  - "State the decision. 'Reduce churn' is not a decision; 'whether to invest in onboarding or in the admin experience' is."
  - "Give the segment fields you have. Without plan and tenure, the analysis collapses into an average that describes nobody."
  - "Include the cancellation reasons if you collect them, but expect the prompt to treat them as leads rather than findings."
tips:
  - "The strongest churn signal is usually a usage drop with a specific lead time, not a survey answer."
  - "Compare churned customers to retained customers at the same tenure. Otherwise you are measuring age."
  - "A downgrade is a save. Analyse it separately from a cancellation, because the intervention is different."
  - "Check whether churn clusters around the renewal date; if it does, the problem may be the invoice, not the product."
  - "If the data cannot separate cause from consequence, say so and propose the smallest experiment that would."
example_output: |
  DEFINITION
  Logo churn: no active subscription for 30 days. Revenue churn includes
  downgrades. This analysis is about logo churn; the question is retention,
  not expansion.

  COHORTS
  Blended monthly logo churn is 3.1 percent. The 2026-05 cohort is 6.4
  percent at month three, and it is the only cohort above 4. It acquired
  heavily through the partner channel and on the Starter plan.

  BEHAVIOURAL SIGNALS
  - No admin login for 21 days: 4.2x more likely to cancel within 60 days.
  - Fewer than two active seats at day 30: 3.1x.
  - A failed payment in the 14 days before renewal: 2.4x.
  - A support ticket in the last 30 days: 1.3x, and mostly a consequence.

  CONFOUNDERS
  Plan mix shifted toward Starter, which churns faster by design. Tenure
  differs between cohorts, so the matched comparison is the one to trust.

  HYPOTHESIS
  Starter customers who never add a second seat do not reach the point where
  the product is shared, and cancel at the first invoice. Test: prompt seat
  invites during onboarding for the next two cohorts, and compare month-three
  churn against the matched control.

  CANNOT CONCLUDE
  Whether price or missing features drive the Starter gap. The cancellation
  reasons are too sparse and were collected after the decision.

faq:
  - q: "Can I run this on a small dataset?"
    a: "Yes, but the conclusions get weaker. Ask for confidence intervals and let the prompt mark which segments are too small to compare. A cohort of 40 customers can produce a dramatic-looking rate that is mostly noise."
  - q: "What is the difference between logo and revenue churn here?"
    a: "Logo churn counts customers who leave; revenue churn counts the money that leaves, including downgrades. They answer different questions, and a healthy logo number can hide a revenue problem caused by customers shrinking."
  - q: "Should I use survey cancellation reasons?"
    a: "As leads, not conclusions. People give acceptable reasons, not accurate ones, and they answer after the decision is made. The prompt will compare the reason against the behaviour and flag the conflicts."
  - q: "How do I know the signal is causal?"
    a: "You usually do not, from observational data alone. The prompt names the confounders and proposes a test you can run in a quarter. That is the honest endpoint of a churn analysis."
---

Churn analyses usually end with a list of correlations and a slide that says "improve onboarding". This prompt separates logo, revenue, and usage churn, matches cohorts on tenure, and returns one hypothesis with a test attached.

The cause-versus-consequence check is where most of the value sits. A support ticket before cancellation is often the sound of a customer trying to leave, not the reason they left.

Pair it with Chat With Your Data for the query work, or Customer Interview Synthesis to check the hypothesis against real conversations.
