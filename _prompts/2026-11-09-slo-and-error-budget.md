---
title: "Write an SLO your on-call engineer can act on"
slug: slo-and-error-budget
category: coding
category_label: Coding
difficulty: advanced
tools: [chatgpt, claude]
read_time: 7
seo:
  type: "WebPage"
picks: []
related: [incident-postmortem-prompt, website-code-audit, debug-this-error]
skills: [slo-designer, runbook-writer]
mcp_servers: [grafana]
art: chart
tags: [slo, sli, error budget, reliability, observability, sre, monitoring]
excerpt: "Turns a service description and real metrics into an SLI, an SLO, an error budget, and burn-rate alerts with an action for each."
prompt: |
  You are an SRE who has run SLOs for real services and has seen more vanity
  targets than useful ones. You know an SLO without a baseline is a guess, and
  an alert without an action is noise.

  ## What I will give you
  - The user journey the service supports:
  - The metrics that exist today, and the data window:
  - The dependencies that can break the journey:
  - The cost of downtime, in user, revenue, or trust terms:
  - The alerting and dashboard tooling:
  - The team that will carry the pager:

  ## Produce in this order

  1. **SLI candidates.** Two or three ways to measure the journey, then pick
     one. Define the good event and the valid event precisely enough to
     write a query.

  2. **Baseline.** The current value from real data, over at least four
     weeks, split by mobile and desktop or by region if it matters. If the
     data does not exist, give the instrumentation plan and the wait time
     instead of a number.

  3. **Target.** The SLO and the reason for it. Express the error budget in
     the unit the team already uses: minutes, requests, or failed
     transactions.

  4. **Burn-rate alerts.** A fast window and a slow window, the threshold for
     each, and the action each one requires. Every alert names an owner and a
     runbook.

  5. **Error budget policy.** What happens when the budget is spent: freeze
     feature work, reduce change rate, or accept the risk with a named
     decision maker.

  6. **What this SLO will not catch.** The failures that do not show up in
     the chosen SLI, and the ones that need a different signal.

  ## Rules
  - Do not set 100 percent. A target without an error budget is not an SLO.
  - Do not invent a baseline. If there is no data, say what to measure and
    how long to wait.
  - Do not use infrastructure uptime as a user-facing SLI unless the user
    experiences it directly.
  - Do not create more than three objectives for one service.
  - Do not page on a metric with no runbook.
  - Do not use a health metric as both a key result and a guardrail.

  ## Before you finish
  Read each alert as the person who will be woken by it. If the alert does
  not change what they do next, remove it and say why.
workflow:
  - "Choose a user-facing SLI and define good and valid events"
  - "Pull a real baseline before naming a target"
  - "Set the target and the error budget"
  - "Design fast and slow burn-rate alerts"
  - "Write the error budget policy"
  - "Name what the SLO will not catch"
output_preview: "An SLI query definition, a real baseline or an instrumentation plan, an SLO with an error budget, two burn-rate alerts with actions, a budget policy, and the blind spots."
how_to_use:
  - "Start with the user journey, not the service name. A service can be up while checkout is broken, and the SLO should describe checkout."
  - "Paste the actual metric names and a screenshot or export of the current values. The prompt cannot set a credible target without a baseline."
  - "Name the team that carries the pager. An SLO owned by nobody becomes a dashboard nobody reads."
  - "Keep the first version to one SLI. A service with three new SLOs at once usually ends up with three alerts nobody has tuned."
tips:
  - "Page on fast burn, not on a single error. A brief spike is not worth waking someone, and a sustained leak is."
  - "The error budget policy is the part leadership signs. Without it, the SLO is a number that changes nothing."
  - "Review the SLO after the first incident it catches. If it did not catch the incident, the SLI is measuring the wrong thing."
  - "Put the runbook link in the alert itself. A responder should not have to search during an incident."
example_output: |
  SLI
  Proportion of authenticated checkout requests that complete with a charge
  confirmation and a response under 800ms.

  Good event: request returns 200 with a charge id and latency under 800ms.
  Valid event: authenticated POST /checkout with a valid cart.
  Window: 28 days, rolling.

  BASELINE
  Current 28-day value: 99.62 percent. The p75 latency is 410ms, so latency
  is not the main contributor today. Errors are.

  TARGET
  99.5 percent. Error budget: about 3.3 hours of full failure, or 0.5 percent
  of checkout attempts. The target is below the current baseline because the
  last two incidents were both payment-provider timeouts, and the team wants
  room to learn before tightening.

  ALERTS
  Fast burn: 2 percent of budget in 1 hour. Page the payments on-call.
  Slow burn: 10 percent of budget in 6 hours. Open a ticket for the next
  business day.

  ERROR BUDGET POLICY
  When the budget is spent, feature work on checkout stops until the
  reliability work is merged. The decision to accept the risk belongs to the
  payments lead, not the on-call engineer.

  WHAT THIS WILL NOT CATCH
  - A slow checkout that still succeeds under 800ms but feels wrong.
  - A pricing error that charges the wrong amount.
  - A failure isolated to one payment method below the alert threshold.
faq:
  - q: "What if we have no metrics yet?"
    a: "The prompt will give you an instrumentation plan and a waiting period instead of a target. That is the honest output. Setting an SLO from intuition produces a target the team will either ignore or game."
  - q: "Should the SLO be 99.9 or 99.99?"
    a: "The number should come from the baseline and the cost of missing it, not from a convention. A 99.99 target on a service with a 99.7 baseline is a permanent failure state, and the team will stop trusting the metric."
  - q: "How many alerts should an SLO have?"
    a: "Two is usually enough: a fast burn for a sharp failure and a slow burn for a leak. More alerts than that tend to overlap, and overlapping alerts train people to silence them."
  - q: "Who owns the error budget policy?"
    a: "The engineering lead and the product lead jointly. The on-call engineer can report that the budget is spent, but cannot decide alone to stop feature work."
---
