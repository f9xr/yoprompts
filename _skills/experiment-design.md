---
title: "Experiment Design"
slug: experiment-design
category: data
date: 2026-11-05
excerpt: "Turns a product question into a testable experiment with a primary metric, guardrails, sample size, and a decision rule written before launch."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [experimentation, ab testing, analytics, product, statistics]
usage: |
  Design an experiment for this question.

  Give me the hypothesis, the primary metric, the guardrails, the sample size,
  and the decision rule. State what result would make us stop early.

  Question and context:
  [describe change, audience, and baseline]
related_skills: [data-story, product-analytics, competitor-teardown]
skill_file: |
  ---
  name: experiment-design
  description: Design product experiments and A/B tests with a hypothesis, primary metric, guardrails, sample size, and a decision rule. Use when the user asks for an experiment plan, A/B test design, sample size, metric selection, or a decision framework for a launch.
  ---

  # Experiment Design

  An experiment is a decision tool. If the result cannot change a decision,
  the test is a report with extra steps.

  ## Workflow

  1. Write the decision the experiment will inform. Name the two options.
  2. Write the hypothesis as a falsifiable sentence with a direction and a
     magnitude that matters.
  3. Choose one primary metric. Everything else is a guardrail or diagnostic.
  4. Define the unit of randomisation and the population.
  5. Estimate the baseline and the minimum detectable effect.
  6. Calculate the sample size and the expected duration.
  7. Write the decision rule, the stop rules, and the analysis plan before
     launch.
  8. Name the threats to validity and how to check for them.

  ## The hypothesis

  Format: "For [population], [change] will move [primary metric] by at least
  [effect] within [duration], because [mechanism]."

  Reject a hypothesis that predicts a direction but not a size. A 0.1 percent
  lift is not a reason to ship a redesign.

  ## Metric rules

  - One primary metric. More than one is a fishing trip.
  - Guardrails cover revenue, retention, latency, errors, and support load.
  - Diagnostic metrics explain the result. They never decide it.
  - Define the metric in SQL or in the product's event schema, not in prose.
  - Check for novelty effects and seasonality before the result is trusted.

  ## Stop rules

  - Stop for harm when a guardrail crosses its threshold.
  - Stop for futility when the observed effect is far below the minimum and
    the confidence interval excludes the target.
  - Do not stop early for a win. Peeking inflates false positives.

  ## Threats to validity

  - Sample ratio mismatch.
  - Assignment leakage across devices or accounts.
  - Instrumentation changes mid-test.
  - Novelty and primacy effects.
  - Multiple comparisons.
  - Survivorship bias in the analysed cohort.

  ## Output format

  Return a one-page experiment brief with: decision, hypothesis, population,
  unit, primary metric, guardrails, baseline, minimum detectable effect,
  sample size, duration, decision rule, stop rules, validity checks, and
  owner. If the baseline is missing, say the sample size is provisional.
---

The expensive mistake in experimentation is not a bad result. It is a test that could never have produced a decision because the metric was vague, the sample was too small, or the rule was written after the data arrived.

The skill writes the decision rule before launch so the result cannot be reinterpreted into whatever the team already wanted to ship.

Pair it with Data Story to explain a finished result, or with Product Analytics when the baseline and event schema still need work.
