---
title: "Runbook Writer"
slug: runbook-writer
category: engineering
date: 2026-11-09
excerpt: "Writes an operational runbook with detection, diagnosis, mitigation, rollback, and escalation for one specific failure."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [runbook, incident response, operations, sre, on-call]
usage: |
  Write a runbook for this failure mode.

  Start from the alert or symptom an on-call engineer sees. Give a decision
  tree, not a list of commands. Include the rollback and the escalation path.

  Service, failure, and current tooling:
  [describe]
related_skills: [incident-postmortem, slo-designer, bug-triage]
skill_file: |
  ---
  name: runbook-writer
  description: Write an operational runbook for a specific failure mode, including detection, diagnosis, mitigation, rollback, and escalation. Use when the user asks for a runbook, on-call guide, incident procedure, or operational checklist.
  ---

  # Runbook Writer

  A runbook is read by someone who is already having a bad day. It should
  reduce decisions, not add reading.

  ## Workflow

  1. Name the exact symptom the responder sees: the alert, the dashboard, or
     the customer report.
  2. State the user impact and the urgency in one line.
  3. Give the first three checks in order, with the result that points to
     each branch.
  4. For each branch, give the mitigation, the risk, and the expected effect.
  5. Give the rollback, including how to confirm it worked.
  6. Name the escalation path and the condition that triggers it.
  7. List what to capture for the postmortem while it is happening.

  ## Template

  ```
  # Runbook: <failure>

  ## Symptom
  What the responder sees. Include the alert name and the dashboard link.

  ## Impact
  Who is affected, how badly, and whether money or data is at risk.

  ## First checks
  1. Command or query. Expected result. If X, go to A. If Y, go to B.

  ## Mitigation A
  Steps. Risk. Expected recovery signal. Time to effect.

  ## Mitigation B
  Steps. Risk. Expected recovery signal. Time to effect.

  ## Rollback
  Steps. How to verify. What not to do.

  ## Escalate when
  Condition. Who to call. What to send them.

  ## Capture for postmortem
  Logs, IDs, timestamps, customer reports.
  ```

  ## Rules

  - Every command must be copy-pasteable and must name the environment.
  - Never write "check the logs" without the exact query or filter.
  - Every mitigation states its risk. A fix that can lose data is not a
    neutral step.
  - Do not invent a threshold, timeout, or service name. Mark unknowns as
    TODO and name the owner.
  - Put the rollback before the escalation. A responder should not read to
    the end to find the exit.
  - Keep one failure per runbook. A runbook for "the system is slow" is not a
    runbook.

  ## Output

  Return the runbook in a fenced block, then list:
  - The assumptions that need confirmation.
  - The checks that cannot be run without production access.
---

Runbooks go wrong when they are written as documentation instead of as a decision aid. The on-call engineer needs the first check, the branch, and the exit, in that order.

The rollback is placed before escalation on purpose. In a real incident, the safest reversible action is usually more useful than another diagnostic.

Pair it with SLO Designer for the alert that triggers it, or Incident Postmortem for the review after the incident closes.
