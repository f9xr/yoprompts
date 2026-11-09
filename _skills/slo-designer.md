---
title: "SLO Designer"
slug: slo-designer
category: engineering
date: 2026-11-09
excerpt: "Defines SLIs, SLOs, error budgets, and burn-rate alerts that engineers can act on, without inventing numbers the system has not measured."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [slo, sli, error budget, reliability, observability]
usage: |
  Design an SLO for this service.

  Pick the user-facing SLI first. Give a baseline from real data, an error
  budget, a burn-rate alert, and the action each alert requires. Do not invent
  a target without a measurement.

  Service and current metrics:
  [describe]
related_skills: [runbook-writer, incident-postmortem, web-performance-audit]
skill_file: |
  ---
  name: slo-designer
  description: Design service level indicators, objectives, error budgets, and burn-rate alerts. Use when the user asks for an SLO, SLI, reliability target, error budget policy, or alerting strategy.
  ---

  # SLO Designer

  An SLO is a promise backed by a measurement. If the measurement does not
  exist, the first deliverable is the measurement, not the target.

  ## Workflow

  1. Identify the user journey, not the server. What does the user try to do?
  2. Choose the SLI: availability, latency, freshness, correctness, or
     throughput. One SLI per objective.
  3. Define the good event and the valid event precisely enough to query.
  4. Pull a baseline from real data over at least four weeks.
  5. Set the target from the baseline and the cost of missing it, not from a
     round number.
  6. Compute the error budget and the burn-rate windows.
  7. Write the action each alert requires and who owns it.

  ## SLI definitions

  ```
  SLI: proportion of <valid events> that are <good events>
  Good event: request completed with status < 500 and latency < 300ms
  Valid event: authenticated request to /api/search
  Window: 28 days, rolling
  ```

  ## Error budget

  - Budget = 1 - target, expressed in minutes or events.
  - Show the budget in the unit the team already uses.
  - State what happens when the budget is exhausted: freeze feature work,
    reduce change rate, or accept the risk with a named owner.

  ## Alerting

  - Page on fast burn, not on a single error.
  - Multi-window burn rates: a short window to catch a sharp failure and a
    long window to catch a slow leak.
  - Every alert names the runbook and the first action.
  - Do not alert on a symptom the team cannot act on.

  ## Rules

  - Do not invent a baseline. If there is no data, say what to instrument and
    how long to wait.
  - Do not set 100 percent. A target without an error budget is not an SLO.
  - Do not use infrastructure uptime as a user-facing SLI unless the user
    experiences it directly.
  - Do not create more than three objectives for one service.
  - Do not page on a metric with no runbook.

  ## Output

  Return:
  - The SLI query or definition.
  - The baseline and the target.
  - The error budget in user terms.
  - The burn-rate alerts with window, threshold, and action.
  - The unknowns and the data still needed.
---

The most common SLO failure is a target chosen before a baseline exists. This skill refuses to pick a number until it has a measurement, and it says what to instrument when there is none.

The error budget is the part teams actually use. Writing down what happens when it is spent turns the SLO from a dashboard into a policy.

Pair it with Runbook Writer for the alert response, or Incident Postmortem to review whether the SLO caught the incident.
