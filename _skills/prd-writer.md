---
title: "PRD Writer"
slug: prd-writer
category: business
date: 2026-11-04
excerpt: "Writes a product requirements document that states the problem, the evidence, the non-goals, and the decisions, without pretending the open questions are settled."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [product, prd, requirements, planning, business]
usage: |
  Turn this idea into a one-page PRD.

  Separate what we know from what we assume. Name the non-goals and the
  decisions still open. Do not invent user research.

  Idea and context:
  [paste notes]
related_skills: [customer-interview-synthesis, meeting-to-action, pricing-strategy]
skill_file: |
  ---
  name: prd-writer
  description: Write product requirements documents from an idea, interview notes, or a feature request. Use when the user asks for a PRD, product spec, feature brief, requirements document, or a one-page plan that separates evidence from assumptions.
  ---

  # PRD Writer

  A useful PRD makes the decision reviewable. It names the problem, the
  evidence, the non-goals, and the open questions in one page.

  ## Workflow

  1. State the problem in one sentence a customer would recognize.
  2. Attach the evidence. Quote interviews or link data. If there is no
     evidence, label it as an assumption.
  3. Define the smallest scope that tests the problem.
  4. List what this version will not do.
  5. Name the decisions still open and who owns each.
  6. Write acceptance criteria that can be checked without a meeting.

  ## Sections

  ### Problem

  One paragraph. Who has it, when it happens, and what it costs. No solution
  language in this section.

  ### Evidence

  - Interview quotes with source.
  - Usage or support data with the time range.
  - Current workaround and why it fails.
  - Explicitly mark assumptions and how they will be tested.

  ### Goal and signal

  One measurable outcome. A signal that moves within one release cycle or a
  defined window. Do not list three goals.

  ### Scope

  - Must have for this version.
  - Should have if the schedule allows.
  - Out of scope, with the reason.

  ### User stories

  Keep them short: as a [role], I want [action], so that [outcome]. Add the
  edge cases that change the design.

  ### Acceptance criteria

  Each criterion is observable and testable. No "works well" or "fast".

  ### Non-goals

  Name the tempting adjacent feature and why it is deferred. This section
  prevents more scope creep than any process.

  ### Open questions

  Question, owner, and the date it must be answered. An open question with
  no owner is a decision that will be made by accident.

  ### Rollout

  Flag, cohort, or release. What to watch. What triggers a rollback.

  ## Writing rules

  - Separate facts from assumptions in the formatting, not just the wording.
  - Prefer a table for scope and open questions.
  - No invented user research. If the evidence is thin, say it is thin.
  - No solution detail before the problem is clear.
  - Keep the whole document to one page unless the feature is regulated or
    cross-team.

  ## Review pass

  - Can a designer start without asking what the problem is?
  - Can an engineer estimate without inventing requirements?
  - Can a reviewer find the evidence in under a minute?
  - Is every open question owned?
  - Does the non-goals list include the obvious scope trap?
---

The most expensive PRD failure is not a missing section. It is a document that presents assumptions as evidence, so the team builds the wrong thing with confidence.

This skill keeps the evidence boundary visible. Facts get sources, assumptions get a test, and open questions get an owner. The non-goals section exists because the adjacent feature is always the one that eats the release.

Pair it with Customer Interview Synthesis for the evidence, Meeting to Action for the follow-up, or Pricing Strategy when the feature changes packaging.
