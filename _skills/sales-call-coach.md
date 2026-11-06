---
title: "Sales Call Coach"
slug: sales-call-coach
category: sales
date: 2026-11-04
excerpt: "Reviews a sales call transcript against the deal stage, finds the moment the call turned, and returns two changes for the next conversation."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [sales, calls, coaching, discovery, deals]
usage: |
  Review this sales call.

  Return what the buyer actually said they need, where the call turned, the
  missed question, and two changes for the next call. Quote the transcript.

  Call and deal stage:
  [paste transcript]
related_skills: [cold-email, customer-interview-synthesis, pricing-strategy]
skill_file: |
  ---
  name: sales-call-coach
  description: Review sales call transcripts and coach the next conversation. Use when the user asks for sales call feedback, discovery call review, objection handling, deal coaching, or help preparing for the next call.
  ---

  # Sales Call Coach

  Coach the next conversation, not the last one. The output is two changes
  the rep can use tomorrow.

  ## Workflow

  1. Identify the deal stage and what the call was supposed to achieve.
  2. Extract the buyer's own words about the problem, the impact, and the
     decision process.
  3. Find the turning point: the moment the buyer leaned in or pulled back.
  4. Check discovery: did the rep understand before pitching?
  5. Check next step: did the call end with a dated, specific action?
  6. Return two changes, maximum. More than two will not be used.

  ## What to listen for

  ### Discovery quality

  - Problem in the buyer's words, not the rep's.
  - Cost of the problem: time, money, risk, or status.
  - What they tried before and why it failed.
  - Who else is affected and who decides.
  - Timeline and the event that forces a decision.
  - Budget source, not just budget number.

  ### Talk balance

  The rep should talk less than the buyer in discovery. If the rep pitches
  before the problem is clear, flag the exact line where it happened.

  ### Objections

  Separate a real objection from a polite no. A real objection names a
  constraint: timing, authority, price, trust, or fit. Ask what is behind it
  before answering.

  ### Next step

  A calendar invite with a date, an owner, and an agenda. "Send me some
  information" is not a next step.

  ## Turning point

  Quote the line where the buyer's energy changed. Name what the rep did
  immediately before it. That sequence is the coaching moment.

  ## Common failure patterns

  - Feature dump before discovery.
  - Talking past the stated problem into a preferred solution.
  - Answering a price objection with a discount before understanding it.
  - Ending on a vague follow-up.
  - Ignoring a second stakeholder who was mentioned once.

  ## Output format

  ```
  Stage: discovery. Goal: qualify and book a technical call.
  Buyer language: "we lose two days every month reconciling" (line 42).

  Turning point
  Line 88: buyer goes quiet after the rep lists six integrations.

  Missed question
  "Who else touches this process today?" was never asked.

  Two changes for the next call
  1. Ask for the cost of the two lost days before showing any feature.
  2. End with a dated technical call and a named attendee.

  What went well
  - The rep reflected the buyer's words back accurately at line 31.
  ```

  Do not invent buyer intent. If the transcript is too short to judge, say
  what is missing.
---

Call reviews that grade every line produce a report nobody reads. This skill finds the turning point and turns it into two changes, because two changes is what a rep can actually carry into the next call.

The buyer's own language matters more than the rep's pitch. Quoting it keeps the coaching grounded and shows whether discovery actually happened.

Pair it with Cold Email when the next call follows an outbound sequence, or with Pricing Strategy when the objection is commercial.
