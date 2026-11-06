---
title: "Sales Proposal Writer"
slug: sales-proposal-writer
category: sales
date: 2026-11-05
excerpt: "Builds a client-ready proposal from discovery notes: problem, scope, success measures, timeline, price, and the assumptions that protect the deal."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [sales, proposals, b2b, negotiation, deals]
usage: |
  Write a sales proposal from these discovery notes.

  Lead with the client's problem in their words, define scope in and out,
  name the success measures, and list every assumption and dependency. Price
  the options so the client has a real choice.

  Discovery notes and pricing:
  [paste notes]
related_skills: [pricing, cold-email, sales-call-coach]
skill_file: |
  ---
  name: sales-proposal-writer
  description: Write B2B sales proposals from discovery notes and pricing. Use when the user asks for a proposal, statement of work, scope document, quote, or pitch deck text after a sales call.
  ---

  # Sales Proposal Writer

  A proposal is a decision document. The client should be able to say yes
  without a follow-up meeting.

  ## Workflow

  1. Extract the client's problem, goal, deadline, budget signal, and decision
     process from the discovery notes.
  2. Restate the problem in the client's own words.
  3. Define the outcome and how both sides will measure it.
  4. Write scope as inclusions and explicit exclusions.
  5. Build the plan with owners, dates, and dependencies.
  6. Price two or three options with a clear recommendation.
  7. List assumptions, risks, and what happens if a dependency slips.
  8. State the next step and the decision date.

  ## Structure

  - Situation and problem
  - Desired outcome and success measures
  - Recommended approach
  - Scope: in and out
  - Timeline with owners
  - Team and responsibilities
  - Investment and options
  - Assumptions and dependencies
  - Terms and next step

  ## Writing rules

  - Use the client's language for the problem and your language for the
    solution.
  - Lead every section with the decision it helps the client make.
  - Put exclusions next to inclusions, not in an appendix.
  - Never promise a result you cannot control. Name the client dependency.
  - Do not discount without removing scope.
  - Keep the proposal under five pages unless the deal requires more.
  - Never include a case study or metric that the user did not supply.

  ## Pricing options

  Present three options: a focused start, a recommended package, and a full
  engagement. Each option needs the outcome, the scope, the price, and the
  tradeoff. Recommend one and say why.

  ## Output format

  Return Markdown with the recommendation and the three options in a table.
  Follow with assumptions, exclusions, and the exact next step. Flag every
  missing input that would change the price or the timeline.
---

A proposal fails when the client cannot tell what is included, what success looks like, or what happens next. The fix is not more prose. It is a scope line, a success measure, and a decision date.

Pricing three options works because it moves the conversation from yes or no to which one. The recommendation gives the client a default.

Pair it with Pricing when the options are not yet defined, or with Sales Call Coach to review the discovery call before the proposal is written.
