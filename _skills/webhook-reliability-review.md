---
title: "Webhook Reliability Review"
title_tag: "Webhook Reliability Review — AI agent skill for Automation"
slug: webhook-reliability-review
category: automation
date: 2026-11-12
excerpt: "Audits a webhook or cron integration for the failures that actually happen: duplicate delivery, dropped events, ordering, retries without idempotency, and silent breakage."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [webhooks, automation, reliability, idempotency, retries, integration]
usage: |
  Review this webhook integration for reliability.

  Assume the network is unreliable and the sender will retry. Check
  duplicate handling, ordering, signature verification, retry behavior, and
  what happens when the receiver is down for an hour.

  Sender, receiver, and current handler code:
  [paste]
related_skills: [workflow-automator, runbook-writer, security-review]
skill_file: |
  ---
  name: webhook-reliability-review
  description: Review a webhook or scheduled-job integration for duplicate delivery, missed events, ordering problems, retry storms, and silent failures. Use when the user asks about webhook reliability, idempotency, event delivery, queue processing, or a cron job that quietly stopped working.
  ---

  # Webhook Reliability Review

  Webhooks are delivered at least once, in no guaranteed order, and the
  sender usually gives up after a few attempts. A handler built for the happy
  path loses data quietly.

  ## Workflow

  1. Map the delivery contract: at-least-once or at-most-once, retry
     schedule, timeout, and whether ordering is promised.
  2. Check the acknowledgement: respond fast, process later.
  3. Check idempotency on the receiver.
  4. Check what happens when the receiver is down for an hour.
  5. Check signature verification and replay protection.
  6. Check observability: would anyone notice a silent stop?

  ## Checks

  ### Acknowledgement

  - Respond with 2xx before doing slow work.
  - Enqueue the event, then process it in a worker.
  - Do not acknowledge before the event is durably stored.
  - Set a handler timeout shorter than the sender's timeout.
  - Return a 5xx on transient failure so the sender retries, and a 2xx on
    permanent failure so it does not.

  ### Idempotency

  - Store the provider event id and reject or skip a repeat.
  - Make the write itself idempotent, not just the handler.
  - Use upserts with a natural key where one exists.
  - Guard side effects: email, invoice, webhook fan-out, third-party call.
  - Handle the case where the duplicate arrives mid-processing.

  ### Ordering

  - Assume out-of-order delivery unless the provider explicitly guarantees it.
  - Compare timestamps or sequence numbers before applying state.
  - Never apply "latest wins" without a version or a clock you control.
  - For state machines, reject transitions that move backwards.

  ### Delivery gaps

  - Retries stop. What reconciles missing events: a poll, a nightly diff, a
    backfill endpoint?
  - Is there a way to replay a date range?
  - Does a failed event go to a dead-letter store with the payload?
  - Is there an alert when deliveries fail repeatedly?

  ### Security

  - Verify the signature with the raw body, before parsing.
  - Reject timestamps outside a small window to stop replays.
  - Do not trust fields the sender does not sign, such as the tenant id in a
    URL parameter.
  - Keep the signing secret out of logs and client code.

  ### Observability

  - Count received, processed, failed, and dropped.
  - Alert on a gap in receipts, not only on errors.
  - Log the provider event id with every step.
  - Record processing latency, so a slow backlog is visible before it is an
    outage.

  ## Scheduled jobs

  - A cron that runs every five minutes needs a lock, or two runs overlap.
  - A job that fails must alert; exit codes that nobody reads are not
    monitoring.
  - Long jobs need a checkpoint, not a restart from zero.
  - Timezone and daylight-saving changes break schedules more often than
    code does.

  ## Output

  ```
  Delivery contract
  - Semantics, retry window, timeout, ordering.

  Findings, ranked
  1. Failure mode. Evidence. Consequence. Fix.

  Recovery
  - How to replay, backfill, and reconcile.

  Monitoring gaps
  - What would go unnoticed today.

  Not verifiable here
  - What needs provider docs or production traffic.
  ```
---

Most webhook incidents are not code bugs. They are assumptions: that an event arrives once, in order, and that a 200 means it was handled. This skill checks those assumptions against the delivery contract.

The reconciliation question is the one teams skip. Retries eventually stop, and without a poll or a diff there is no way to know what was missed.

Pair it with Workflow Automator when designing the automation, or Runbook Writer for the recovery procedure.
