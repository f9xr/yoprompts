---
title: "Incident Postmortem"
slug: incident-postmortem
category: engineering
date: 2026-11-05
excerpt: "Turns an incident timeline, logs, and chat history into a blameless postmortem with a causal chain, contributing factors, and owned action items."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [incident, postmortem, reliability, sre, engineering]
usage: |
  Write a blameless postmortem for this incident.

  Build the timeline from the evidence, separate trigger from cause, and give
  every action item an owner and a due date. Do not invent a fact that is not
  in the material I provide.

  Incident notes, logs, and chat export:
  [paste evidence]
related_skills: [bug-triage, security-review, accessibility-audit]
skill_file: |
  ---
  name: incident-postmortem
  description: Write blameless incident postmortems from logs, timelines, and chat history. Use when the user asks for a postmortem, incident review, root cause analysis, reliability retro, or action items after an outage.
  ---

  # Incident Postmortem

  A postmortem is not a story about who clicked the button. It is a map of the
  system that made the button dangerous.

  ## Workflow

  1. Build the timeline first, in UTC, from the earliest signal to recovery.
  2. Mark the detection point, the first human response, and the mitigation.
     Those three moments explain most of the customer impact.
  3. Separate the trigger from the cause. The trigger is the change. The cause
     is the condition that let the change take the system down.
  4. List contributing factors across code, configuration, observability,
     process, and ownership.
  5. Write action items that remove a condition, not ones that ask people to be
     more careful.
  6. State what is still unknown and what evidence would settle it.

  ## Blameless rules

  - Name roles and systems, not individuals.
  - Replace "should have" with the missing guardrail that would have caught it.
  - Never publish a root cause with one node. Real incidents have several.
  - Do not claim a fix works before it is verified in the environment that
    failed.
  - Keep customer impact factual: how many, how long, which capability.

  ## Required sections

  - Summary
  - Impact
  - Timeline
  - Trigger and cause
  - Contributing factors
  - Detection and response
  - What went well
  - What made it worse
  - Action items with owner, due date, and verification
  - Open questions

  ## Action item test

  An action item is acceptable only if all of these are true:

  - It changes a system, a test, a runbook, or a permission.
  - Someone owns it by name.
  - It has a due date.
  - It has a way to prove it worked.
  - It would have reduced the impact or the time to detect.

  Reject "add more monitoring" unless it names the signal, the threshold, and
  the alert route.

  ## Output format

  Return Markdown with the timeline as a table. Put action items in a table
  with columns: action, owner, due, verification. Flag every gap in the
  evidence instead of filling it with a plausible detail.
---

The useful part of a postmortem is the causal chain, not the apology. A timeline built from logs and chat shows where detection lagged, where ownership was unclear, and where a guardrail was missing.

The skill forces blameless language because blame ends the investigation early. It also forces action items to name a system change and a verification step, which is the difference between a reto that improves reliability and one that produces a document nobody reads.

Pair it with Bug Triage when the incident is still being diagnosed, or with Security Review when the cause involves access or data exposure.
