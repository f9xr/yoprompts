---
title: "Financial Model Review"
slug: financial-model-review
category: finance
date: 2026-11-05
excerpt: "Audits a spreadsheet model for broken formulas, hidden hardcodes, unit mismatches, and assumptions that do not survive a sensitivity check."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [finance, modeling, spreadsheet, forecasting, analysis]
usage: |
  Review this financial model.

  Check the structure, the formulas, the assumptions, and the sensitivities.
  Name every hardcode you find and show the unit of each input. Do not
  re-forecast the business unless the assumptions require it.

  Model summary or exported cells:
  [paste structure, formulas, or figures]
related_skills: [data-story, contract-review, sql-optimizer]
skill_file: |
  ---
  name: financial-model-review
  description: Review financial models and forecasts for structural errors, hardcoded values, unit mismatches, and fragile assumptions. Use when the user asks for a model audit, forecast review, unit economics check, scenario analysis, or spreadsheet error hunt.
  ---

  # Financial Model Review

  A model is an argument about the future. Review the logic before you review
  the output.

  ## Workflow

  1. Identify the purpose, the time horizon, the currency, and the unit of
     each statement.
  2. Map the structure: inputs, calculations, outputs, and checks.
  3. Colour-code the model by type: input, formula, hardcode, link.
  4. Trace the revenue, cost, cash, and balance sheet paths end to end.
  5. Run a sensitivity on the assumptions that move the answer most.
  6. Test the downside case and the cash trough.
  7. List findings by severity with the cell or line where possible.

  ## What to check

  - Hardcoded numbers inside formula ranges.
  - Revenue drivers that do not multiply back to the total.
  - Costs that grow with users but are modelled as fixed.
  - Working capital that ignores payment terms.
  - Tax and interest calculated on the wrong base.
  - Circular references with no intentional resolution.
  - Unit mismatches between thousands and millions.
  - Month and year labels that do not match the formulas.
  - Balance sheet that does not balance.
  - Cash flow that does not tie to the bank balance.

  ## Assumption rules

  - Every assumption needs a source, a range, and an owner.
  - State the base, bull, and bear values for the five largest drivers.
  - Do not use a single point forecast as the plan.
  - Test what happens if the largest customer leaves and if hiring slips a
    quarter.
  - Show the runway in months at the trough, not at the end of the period.

  ## Output format

  Return a findings table with severity, location, issue, and fix. Then show
  the three assumptions that dominate the outcome, the base and downside
  results, and the checks that still fail. Flag every number you could not
  verify from the provided material.
---

Forecast errors rarely come from a single wrong cell. They come from a revenue build that does not tie, a cost base that grows slower than the plan assumes, or a cash schedule that ignores payment terms.

The review starts with structure because a model with clean formulas and a broken logic still produces a confident wrong answer. Sensitivities show which assumption actually decides the outcome.

Pair it with Data Story to explain the result to a board, or with Contract Review when the forecast depends on deal terms.
