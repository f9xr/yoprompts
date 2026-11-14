---
title: "Budget Forecast"
title_tag: "Budget Forecast — AI agent skill for Finance"
slug: budget-forecast
category: finance
date: 2026-11-12
excerpt: "Builds a rolling budget from real drivers, separates committed from discretionary spend, and shows which variance would actually change the plan."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [budget, forecast, finance, variance, planning, headcount]
usage: |
  Build a 12-month budget forecast from these numbers.

  Model from drivers, not from last year plus a percentage. Separate
  committed from discretionary spend, name the assumptions, and show which
  variance would change the plan.

  Current spend, headcount plan, and revenue:
  [provide]
related_skills: [financial-model-review, pricing, okr-writer]
skill_file: |
  ---
  name: budget-forecast
  description: Build a rolling budget or forecast from drivers, separate committed from discretionary spend, and explain variance. Use when the user asks for a budget, a forecast, a reforecast, headcount planning, or help explaining why actuals missed plan.
  ---

  # Budget Forecast

  A budget is a set of decisions about the future, written in money. If it
  cannot be traced to a driver, it is a guess with formatting.

  ## Workflow

  1. Establish the base: trailing twelve months of actuals by line item.
  2. Split every line into committed, variable, and discretionary.
  3. Tie each line to a driver: headcount, volume, contract, or a decision.
  4. Forecast the drivers, then the cost.
  5. Build the base case, then the two cases that matter.
  6. Show variance thresholds and what would trigger a reforecast.

  ## Classification

  ### Committed

  - Signed contracts with fixed terms.
  - Payroll for approved headcount, including taxes and benefits.
  - Renewals with a notice period already passed.
  - Debt service and lease obligations.

  Committed cost is not a forecast. It is a schedule. Show it separately so
  nobody argues about it.

  ### Variable

  - Hosting and usage-based infrastructure.
  - Payment processing and platform fees.
  - Support and delivery cost that scales with volume.

  Model variable cost per unit of the driver and state the unit. A blended
  percentage hides the step change when volume doubles.

  ### Discretionary

  - New hires not yet approved.
  - Marketing programs, tooling, travel, contractors.
  - Anything a manager can stop next month without penalty.

  Discretionary is where the plan is actually adjustable. Rank it by what it
  buys, not by what it costs.

  ## Driver model

  For each line, name the driver, the current value, the planned value, and
  the lag between the decision and the spend. A hire costs recruiting fees in
  month one and salary from the start date, not from the approval date.

  ## Scenarios

  Build three, and no more:

  - Base: the plan the team believes.
  - Downside: the driver that matters most comes in 20 percent worse.
  - Upside: the same driver beats plan, with the cost that comes with it.

  Each scenario changes drivers, not line items. If the only difference is a
  percentage on every row, the scenario is not a model.

  ## Output

  ```
  Assumptions
  - Driver, current value, planned value, source.

  Monthly budget
  - Committed, variable, discretionary, total. By month and by quarter.

  Scenarios
  - Base, downside, upside. The driver that moves in each.

  Variance triggers
  - Metric, threshold, action. Who is told and when.

  Open questions
  - Each with an owner and the date it must be answered.
  ```

  ## Rules

  - Do not forecast a percentage on a total. Forecast the driver.
  - Do not mix committed and discretionary in one number.
  - Do not present one scenario as the plan.
  - Do not annualize a single strong month.
  - Do not hide a step change inside an average.
  - Say when a number is an assumption rather than a commitment.

  ## Checks before delivery

  - Does every line have a driver?
  - Do committed costs match signed terms?
  - Does the downside case name the trigger that would make it real?
  - Is the hiring plan consistent with the revenue it is meant to produce?
  - Can a reader find the three assumptions that matter most?
---

A forecast built as "last year plus ten percent" survives exactly until the first variance meeting. This skill forces every line back to a driver, which is what makes the variance explainable.

The committed, variable, discretionary split is the useful part of the discipline. Committed spend is a schedule, discretionary spend is the decision, and mixing them is how a budget becomes unarguable in both directions.

Pair it with Financial Model Review when the numbers feed a fundraise, or Pricing when the plan depends on a price change.
