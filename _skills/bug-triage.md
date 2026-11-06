---
title: "Bug Triage"
slug: bug-triage
category: engineering
date: 2026-11-04
excerpt: "Turns a vague bug report into a reproducible case with a severity, a suspected layer, and the one detail a developer needs next."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [bugs, triage, engineering, debugging, issues]
usage: |
  Triage this bug report.

  Return severity, reproduction steps, the missing detail that blocks a fix,
  and the most likely layer. Do not guess the root cause.

  Report:
  [paste issue and logs]
related_skills: [webapp-testing, research-synthesis, react-best-practices]
skill_file: |
  ---
  name: bug-triage
  description: Triage bug reports and issue threads into reproducible cases with severity, evidence, and next steps. Use when the user asks to triage a bug, reproduce an issue, write a bug report, assess severity, or decide what detail is missing before a fix.
  ---

  # Bug Triage

  Triage decides what to do next. Root cause comes later. The output is a
  clear reproduction and the smallest missing fact.

  ## Workflow

  1. Rewrite the report as one sentence: expected, actual, when.
  2. Extract environment: version, browser or OS, account type, feature flag,
     data state.
  3. Write the shortest reproduction that still fails. Cut steps that are
     not required.
  4. Check whether the report already contains the failing layer: client,
     API, job, database, or integration.
  5. Assign severity from impact and frequency, not from tone.
  6. Name the one missing detail that blocks a fix.
  7. Route to the likely owner.

  ## Severity

  - **S1**: data loss, security exposure, payment failure, or the product is
    unusable for most users.
  - **S2**: a core workflow is broken for a meaningful group, with no workaround.
  - **S3**: broken with a workaround, or limited to a small group.
  - **S4**: visual, copy, or edge case with low impact.

  Frequency is part of severity. A crash that happens once for one account is
  not S1. A wrong total on every invoice is.

  ## Reproduction format

  ```
  Environment: ...
  Steps:
  1. ...
  2. ...
  Expected: ...
  Actual: ...
  Frequency: every time / intermittent, N of M
  Evidence: screenshot, request id, log line
  ```

  If the reproduction cannot be confirmed, label it "reported, not reproduced"
  and list what was tried. Never present a guess as a confirmed repro.

  ## Missing detail

  Pick one, not five:

  - Exact request id or trace id.
  - Timestamp with timezone.
  - Account, plan, or role.
  - Whether it happens on a fresh session.
  - The last successful action before the failure.
  - The full error, not the first line.

  ## Layer hints

  - Client: layout, state, offline, browser-specific.
  - API: status code, schema, validation, auth.
  - Job or queue: delay, retry, duplicate, ordering.
  - Database: constraint, migration, lock, replication lag.
  - Integration: third-party timeout, webhook signature, rate limit.

  ## Response rules

  - Do not propose a fix before the reproduction is clear.
  - Do not ask for a screen recording when a request id would answer faster.
  - Do not merge two symptoms into one issue until the reproduction matches.
  - Put the severity and the missing detail at the top.

  ## Output format

  Return severity, reproduction, evidence, missing detail, likely layer, and
  owner. Keep it short enough to paste into the issue.
---

Most bug threads stall because the report and the fix talk past each other. Triage makes the report reproducible and names the one missing fact, which is usually faster than asking for everything.

Severity uses impact and frequency together so a loud but rare report does not jump the queue, and a quiet data error does not sit behind cosmetic work.

Pair it with Webapp Testing to turn the reproduction into a test, or with React Best Practices when the suspected layer is the client.
