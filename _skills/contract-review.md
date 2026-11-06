---
title: "Contract Review"
slug: contract-review
category: legal
date: 2026-11-05
excerpt: "Reads a commercial contract and flags risky clauses in plain language, ranked by exposure, with the exact language to negotiate."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [contracts, legal, risk, negotiation, business]
usage: |
  Review this contract for commercial risk.

  Summarise the deal in plain language, flag the clauses that create the most
  exposure, and suggest replacement language. This is not legal advice, so
  mark anything that needs a qualified lawyer.

  Contract text:
  [paste agreement]
related_skills: [prd-writer, financial-model-review, research-synthesis]
skill_file: |
  ---
  name: contract-review
  description: Review commercial contracts for risk, unclear obligations, and one-sided terms. Use when the user asks to review a contract, summarise an agreement, flag risky clauses, compare redlines, or draft negotiation language. Not a substitute for legal advice.
  ---

  # Contract Review

  Read for exposure, not for completeness. A contract is a map of what can go
  wrong and who pays for it.

  ## Important limits

  This is a commercial review, not legal advice. Flag jurisdiction-specific
  issues for a qualified lawyer. Never state that a clause is enforceable or
  unenforceable in a specific jurisdiction.

  ## Workflow

  1. Identify the parties, the service, the term, the fees, and the governing
     law.
  2. Summarise the deal in plain language in five sentences or fewer.
  3. Read the obligations of each party and list every one with a deadline.
  4. Read the risk allocation: indemnity, liability cap, warranty, insurance,
     and termination.
  5. Read the data and IP terms: ownership, licence, confidentiality, and
     return or deletion on exit.
  6. Rank findings by exposure: high, medium, low.
  7. For each high finding, give the clause, the risk, and replacement
     language.

  ## Clauses that deserve a flag

  - Unlimited liability or a cap many times the annual fee.
  - Indemnity that covers third-party claims with no fault threshold.
  - Auto-renewal with a short notice window.
  - Unilateral change rights on price, scope, or terms.
  - Termination for convenience only for one side.
  - Payment terms longer than 60 days with no interest.
  - A warranty that the service will be error-free or fit for a purpose.
  - Broad IP assignment that includes pre-existing material.
  - Data use rights that allow training or resale.
  - Audit rights with no notice or cost limit.
  - Non-compete or exclusivity that outlives the term.
  - Dispute resolution in a costly or distant forum.

  ## Review rules

  - Quote the clause number and the exact phrase you are reacting to.
  - Separate a real risk from a market-standard term. Do not flag both the
    same way.
  - Suggest language that is narrow enough to be accepted.
  - State what you would trade for the change.
  - Mark every assumption about the business context.

  ## Output format

  Return a table: clause, current language, risk, exposure, suggested change.
  Follow it with a short negotiation priority list and the questions to ask
  before signing. End with the items that need a lawyer in the relevant
  jurisdiction.
---

Most contract risk hides in ordinary-looking sentences: a broad indemnity, an auto-renewal window, or a data clause that permits training. The review ranks exposure so the negotiation focuses on the three clauses that matter rather than the thirty that do not.

The output always separates commercial judgment from legal advice. A useful review tells you what to ask, what to trade, and when to call a lawyer.

Pair it with Financial Model Review when the deal includes variable fees, or with PRD Writer when the scope itself is still unclear.
