---
title: "SaaS Spend Audit"
slug: saas-spend-audit
category: finance
date: 2026-11-12
excerpt: "Audits recurring software spend for unused seats, duplicate tools, auto-renewals, and contracts that no longer match usage, with a cut list ranked by savings and risk."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [saas, spend, procurement, cost, finance, renewals, vendors]
usage: |
  Audit this software spend.

  Find unused seats, overlapping tools, auto-renewals, and contracts that no
  longer match usage. Rank cuts by annual savings and by what breaks if we
  cut them. Do not assume a tool is unused because one person says so.

  Vendor list with cost, seats, renewal date, and owner:
  [paste]
related_skills: [budget-forecast, financial-model-review, workflow-automator]
skill_file: |
  ---
  name: saas-spend-audit
  description: Audit recurring software subscriptions for unused seats, duplicate functionality, upcoming renewals, and contract terms that no longer fit usage. Use when the user asks to reduce software spend, review SaaS subscriptions, prepare for renewals, or find duplicate tools.
  ---

  # SaaS Spend Audit

  Software spend leaks in small amounts: a seat for someone who left, a tool
  bought for one project, a plan upgraded for a launch and never downgraded.

  ## Workflow

  1. Build the inventory: vendor, cost, billing frequency, seats, owner,
     renewal date, notice period.
  2. Normalize everything to annual cost.
  3. Check seats against actual usage.
  4. Group by function to find overlap.
  5. Sort renewals by date and notice period, not by size.
  6. Rank actions by savings, effort, and what breaks.

  ## Inventory fields

  - Vendor and product.
  - Contract owner. A tool with no owner is a tool nobody will cancel.
  - Annual cost, including add-ons and overages.
  - Seats purchased and seats active in the last 30 days.
  - Renewal date and notice period. The notice period is the real deadline.
  - Payment method: card, invoice, or committed contract.
  - Department and cost center.

  ## Checks

  ### Seats

  - Active versus purchased, per vendor.
  - Accounts with no login in 60 or 90 days.
  - Seats assigned to people who left.
  - Shared logins, which hide true usage and break the audit.
  - Minimum seat commitments that make cutting seats pointless.

  ### Overlap

  - Two tools that do the same job, usually from two teams that did not talk.
  - A platform tool plus a point solution that duplicates one feature.
  - A bundled capability already paid for in a larger contract.
  - Tools bought for a project that ended.

  ### Contract terms

  - Auto-renewal with a short cancellation window.
  - Annual prepay where monthly would cost less at current usage.
  - Overage rates that are higher than the next tier.
  - Price escalators at renewal.
  - Support tiers nobody uses.

  ### Usage

  - Features paid for but never enabled.
  - Environments, sandboxes, and staging seats billed as production.
  - Storage and API overages caused by retention that was never configured.

  ## Actions

  Rank each as: cancel, downgrade, consolidate, renegotiate, or keep.

  For each, give the annual saving, the effort, the owner, and what stops
  working. "What stops working" is the field that gets an action approved or
  rejected, so write it honestly.

  ## Output

  ```
  Inventory summary
  - Total annual spend, count of vendors, largest ten.

  Savings opportunities
  1. Vendor. Action. Annual saving. Effort. What breaks.

  Renewal calendar
  - Date, vendor, notice deadline, owner.

  Cannot verify
  - Usage data that was missing or unreliable.
  ```
---

Software audits usually stop at the invoice list, which is the one thing finance already has. The savings are in seat counts, overlap, and notice periods.

The renewal calendar matters more than the ranking. A 40 percent saving discovered after the notice date is a saving for next year.

Pair it with Budget Forecast to fold the reductions into the plan, or Workflow Automator when a tool is being replaced by an internal automation.
