---
title: "Account Plan Writer"
title_tag: "Account Plan Writer — AI agent skill for Sales"
slug: account-plan-writer
category: sales
date: 2026-11-12
excerpt: "Turns what you actually know about an account into a plan with a named buying group, a defensible entry point, and the next three moves."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [sales, account planning, enterprise, deals, stakeholders]
usage: |
  Write an account plan for this opportunity.

  Use only what I have told you. Mark every gap as unknown instead of
  inventing a stakeholder or a budget. Give me the buying group, the entry
  point, the risks, and the next three moves with owners.

  Account notes and deal history:
  [paste notes]
related_skills: [sales-call-coach, competitor-teardown, cold-email]
skill_file: |
  ---
  name: account-plan-writer
  description: Write a strategic account plan from deal notes, including the buying group, entry point, competitive position, risks, and next actions. Use when the user asks for an account plan, territory plan, deal strategy, or help with a stuck enterprise opportunity.
  ---

  # Account Plan Writer

  An account plan is a map of the people who decide, the reason they would
  change, and the next move. Anything else is a CRM field with paragraphs.

  ## Workflow

  1. Extract what is known. Separate facts from inferences.
  2. Map the buying group and mark the empty seats.
  3. State the business problem in the buyer's words.
  4. Name the entry point and why it is the cheapest path in.
  5. Score the competitive position honestly.
  6. Define the next three moves with an owner and a date.
  7. List what would make you walk away.

  ## Buying group

  Every seat gets a row: role, name if known, what they gain, what they
  risk, and status.

  - Economic buyer: approves the money.
  - Champion: sells internally when you are not in the room.
  - Technical evaluator: can veto on fit.
  - End users: feel the change.
  - Blocker: loses status, budget, or headcount if this lands.
  - Procurement and legal: control the timeline.

  An empty seat is a risk, not a gap to fill with a guess. Write "unknown"
  and make finding out the next action.

  ## Problem statement

  Quote the buyer. If the plan says "they need better analytics", it is not
  a problem statement. "Month-end close takes nine days and the board
  review is on day seven" is.

  ## Entry point

  Name the smallest first purchase that proves value and creates the path to
  the larger one. State why it is easier to approve than the full rollout:
  budget already exists, one team owns it, or a compliance deadline forces
  the decision.

  ## Competitive position

  - Where we win, with evidence.
  - Where we lose, with evidence.
  - What the incumbent would have to do to keep the account.
  - The criteria we want in the evaluation, and the ones we want out.

  Do not write "no competition". There is always a status quo, and it is
  usually the strongest competitor.

  ## Risks

  - No access to the economic buyer.
  - Champion with no political capital.
  - Procurement cycle longer than the quarter.
  - Technical requirement we cannot meet.
  - Budget owned by a team that does not benefit.

  Each risk gets a test that would confirm or kill it, and a date.

  ## Output

  ```
  Account snapshot
  - Segment, size, current spend, renewal date, incumbent.

  Buying group
  - Seat, name, gain, risk, status, next contact.

  Problem and entry point

  Competitive position

  Plan
  1. Move, owner, date, success signal.
  2. ...

  Risks and disqualifiers
  ```

  ## Rules

  - Never invent a stakeholder, a budget, or a timeline.
  - Never mark a seat covered because someone replied once.
  - Prefer three real moves over twelve aspirational ones.
  - Name the disqualifier. A plan with no walk-away condition is a hope.
  - Keep the whole plan to one page the rep will actually reread.
---

Most account plans fail because they describe the product instead of the buying group. This skill reverses the order: the people, the problem, the entry point, and only then the offer.

The empty-seat discipline is the part that changes behaviour. A plan that says "economic buyer: unknown, action: request intro through champion by Friday" is more useful than one that assumes the sponsor signs.

Pair it with Sales Call Coach after the next conversation, or Competitor Teardown when the incumbent is the real obstacle.
