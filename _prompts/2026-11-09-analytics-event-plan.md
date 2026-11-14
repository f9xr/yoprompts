---
title: "Design analytics events that answer real questions"
title_tag: "Analytics event plan prompt for product teams"
slug: analytics-event-plan
category: data
category_label: Data Analysis
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 6
seo:
  type: "WebPage"
picks: []
related: [chat-with-your-data, viral-data-story-chart, pricing-and-positioning]
skills: [analytics-tracking-plan, data-story]
art: chart
tags: [analytics, tracking plan, events, data, product, metrics, instrumentation]
excerpt: "Starts from the questions the team needs to answer, then defines the events, properties, types, owners, and QA that make the numbers comparable."
prompt: |
  You are a product analyst who has inherited dashboards nobody trusts. You
  know the problem is usually upstream of the chart: two teams defined the
  same event differently.

  ## What I will give you
  - The feature or flow:
  - The decisions the team needs to make with the data:
  - The events and tools that exist today:
  - The dashboards and reports that depend on them:
  - Privacy constraints and personal data rules:
  - Who owns the analytics pipeline:

  ## Produce in this order

  1. **The questions.** Rank them by the decision each one supports. Drop
     any question with no decision behind it.

  2. **The events.** The smallest set that answers those questions. Name
     each event as `object_action` in past tense, for example
     `checkout_completed`. One event per action.

  3. **The properties.** A table per event with name, type, required flag,
     and allowed values for enums. Use the same name for the same concept
     everywhere.

  4. **Ownership.** An owner and a review date for each event, and the person
     who approves a change.

  5. **QA.** How a new event is verified before it reaches a dashboard, and
     the schema check that keeps it honest.

  6. **Deprecation.** Which events are replaced, the migration, and the date
     they stop being sent.

  7. **Gaps.** The questions that still have no event, and the dashboards
     that will change.

  ## Rules
  - Do not create an event with no question behind it.
  - Do not use free-text properties for values a dashboard groups by.
  - Do not send email, name, or other personal data unless there is a
    documented reason and a retention rule.
  - Do not rename a live event without a migration and a deprecation date.
  - Do not let two teams define the same event differently.
  - Do not use a page view as a proxy for an action when the action is
    available.
  - Do not invent a metric the data cannot support.

  ## Before you finish
  Remove every event that no question uses. If the list is still long, find
  the event that answers the most questions and start there.
workflow:
  - "List the decisions and the questions behind them"
  - "Define the smallest event set"
  - "Write the property table with types and enums"
  - "Assign owners and review dates"
  - "Define QA and schema checks"
  - "Plan deprecations and name the gaps"
output_preview: "A ranked question list, a minimal event taxonomy, a typed property table, owners, QA steps, a deprecation plan, and the questions still unanswered."
how_to_use:
  - "Start with decisions, not metrics. A metric with no decision behind it becomes a dashboard nobody opens."
  - "Paste the current event names and a sample payload. The prompt needs to see what already exists to avoid creating a duplicate."
  - "Name the tools in the pipeline. The QA section changes depending on whether events go through a tag manager, a SDK, or a warehouse."
  - "Keep the first plan to one flow. A tracking plan for the whole product is a quarter-long project and usually stalls."
tips:
  - "One event per action is the rule that prevents most mess. Encoding the outcome in the event name creates two events for one action and breaks the funnel."
  - "Enum properties are worth the extra work. A free-text payment method field will contain card, Card, credit card, and stripe within a month."
  - "Put the event owner in the plan. An event without an owner is never deprecated, even after the feature is removed."
  - "Test the event in staging with the actual payload, not just the event name. Type errors are the most common reason a dashboard silently drops a row."
example_output: |
  QUESTIONS
  1. Which checkout step loses the most users? Decision: where to invest next.
  2. Does the new payment method increase completion? Decision: keep or
     remove it.
  3. Which plan upgrades happen after a failed payment? Decision: recovery
     campaign.

  EVENTS
  - checkout_started
  - checkout_step_completed
  - payment_method_selected
  - checkout_completed
  - payment_failed
  - subscription_upgraded

  PROPERTIES
  checkout_step_completed
  - step: enum(cart, address, payment, review), required
  - order_id: string, required
  - item_count: integer, required
  - value: number, minor units, required
  - currency: string, ISO 4217, required

  payment_method_selected
  - method: enum(card, bank, wallet), required
  - provider: enum(stripe, adyen), required

  OWNERSHIP
  checkout events: payments team, reviewed 2027-01-15.
  subscription events: growth team, reviewed 2027-01-15.

  QA
  - Fire the event in staging and inspect the payload.
  - Check the enum values against the plan.
  - Confirm one event per action, not one per render.
  - Confirm no personal data in properties.
  - Add a warehouse schema check for required fields.

  DEPRECATION
  `checkout_step_viewed` is replaced by `checkout_step_completed`. Stop
  sending it on 2027-01-01. Update the funnel dashboard before that date.

  GAPS
  - Refunds have no event, so the recovery question cannot be answered yet.
  - The mobile app uses a different event name for the same step.
faq:
  - q: "Should I use a page view or a custom event?"
    a: "A custom event when the user does something meaningful. A page view is a proxy, and proxies drift when the layout changes. The prompt will choose an event when the action is available."
  - q: "How many properties should an event have?"
    a: "Enough to answer the question and group the result, and no more. Every extra property is another field to validate and another chance for a type error."
  - q: "Can it work with an existing messy taxonomy?"
    a: "Yes. Give it the current names and sample payloads, and it will propose a mapping and a deprecation path instead of a clean-slate plan that breaks every dashboard."
  - q: "What about privacy?"
    a: "State the rules up front. The prompt will keep personal data out of event properties unless there is a documented reason and a retention rule, and it will flag any existing event that violates the rule."
---
