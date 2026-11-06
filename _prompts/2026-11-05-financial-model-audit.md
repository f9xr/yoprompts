---
title: "Audit a financial model before the board sees it"
slug: financial-model-audit
category: business
category_label: Business
difficulty: advanced
tools: [chatgpt, claude, gemini]
read_time: 9
seo:
  type: "WebPage"
picks: []
related: [pricing-and-positioning, chat-with-your-data, deep-research-synthesis]
art: chart
tags: [finance, model, forecast, unit economics, spreadsheet, board]
excerpt: "Checks a forecast for broken structure, hidden hardcodes, unit errors, and assumptions that fail under a downside case."
prompt: |
  You are a financial analyst reviewing a model for a board pack. You check
  the logic before you comment on the output.

  ## What I will give you

  - The model structure, or the key tabs and rows
  - The currency and units of each statement
  - The revenue and cost drivers
  - The assumptions and their sources
  - The current cash balance and the forecast period
  - The decision the model supports

  If the units are ambiguous, stop and ask. A model that mixes thousands and
  millions is wrong before the first formula.

  ## Workflow

  1. Map inputs, calculations, outputs, and checks.
  2. Trace revenue, cost, cash, and the balance sheet end to end.
  3. Find hardcoded values inside formula ranges.
  4. Test the balance sheet and the cash tie-out.
  5. Sensitise the five largest drivers.
  6. Run a downside case and find the cash trough.
  7. Report findings by severity with the location.

  ## What to check

  - Revenue drivers that do not multiply back to the total.
  - Costs that grow with users but are modelled as fixed.
  - Working capital that ignores payment terms.
  - Tax and interest on the wrong base.
  - Headcount costs missing taxes or benefits.
  - Balance sheet that does not balance.
  - Cash flow that does not tie to the bank balance.
  - Month labels that do not match the formulas.
  - Circular references with no intentional resolution.

  ## Output format

  Findings table: severity, location, issue, fix. Then the three assumptions
  that dominate the outcome, base and downside results, the runway at the
  trough, and the checks that still fail.
workflow:
  - "Map the model structure and confirm units"
  - "Trace revenue, cost, cash, and balance sheet"
  - "Find hardcodes and broken ties"
  - "Sensitise the largest drivers"
  - "Run the downside case and report the trough"
output_preview: "A prioritized model audit with cell-level findings, the dominant assumptions, a downside case, and the runway at the cash trough."
how_to_use:
  - "Provide the structure and the formulas, not just the totals. Most errors live between the rows."
  - "State the units explicitly. If the model mixes currencies, say which one the board expects."
  - "Give the cash balance and the period. The runway calculation needs both."
tips:
  - "The most common error is a revenue build that does not tie to the total. Check that first."
  - "A model can be internally consistent and still be wrong if the assumptions ignore payment terms."
  - "Run the downside case before the board meeting, not after."
  - "Name the five drivers that matter. Sensitivity tables with twenty rows hide the one that decides the outcome."
example_output: |
  HIGH - Cash!F14
  Issue: Collections assume 100% in the month of sale, but terms are Net 30.
  Fix: Apply a 45-day collection lag and re-run the trough.

  HIGH - Revenue!D22:D34
  Issue: Seat count is hardcoded at 120 inside the formula range.
  Fix: Link to the hiring plan input.

  DOMINANT ASSUMPTIONS
  Monthly churn 3.0% | seat growth 8/month | gross margin 72%

  DOWNSIDE
  Churn 4.5%, hiring slips one quarter: runway 11 months at the trough.
faq:
  - q: "Can this replace an accountant or CFO?"
    a: "No. It finds structural and assumption errors. A qualified finance professional still owns the forecast and the judgment calls."
  - q: "What if I only have the exported PDF?"
    a: "The review can still check consistency and assumptions, but it cannot find hidden hardcodes. Export the formulas or share the model if you need a full audit."
  - q: "How many scenarios are enough?"
    a: "Base and downside are the minimum. Add an upside only if it changes a decision, such as a hiring plan or a fundraise."
  - q: "What is the cash trough?"
    a: "The lowest cash balance in the forecast, not the ending balance. Runway should be measured there because that is when the business runs out."
---
Board packs fail on numbers that tie visually but not logically: collections that ignore payment terms, costs that grow slower than the plan assumes, or a cash schedule that never touches the bank balance.

The audit starts with structure and units because a clean-looking model with a broken revenue build still produces a confident wrong answer.

Pair it with Chat With Your Data when the model pulls from a warehouse, or with Pricing and Positioning when the assumptions depend on a pricing change.
