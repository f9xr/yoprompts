---
title: "Integration Spec Writer"
slug: integration-spec-writer
category: automation
date: 2026-11-12
excerpt: "Specifies an integration between two systems: events, field mapping, auth, rate limits, failure handling, and the reconciliation that proves it stayed in sync."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [integration, automation, api, field mapping, sync, specification]
usage: |
  Write the spec for this integration.

  Cover the direction of sync, the field mapping, the identity key, auth,
  rate limits, and what happens on conflict or failure. Name the source of
  truth for every field.

  Systems and the workflow to connect:
  [describe]
related_skills: [workflow-automator, api-docs-writer, webhook-reliability-review]
skill_file: |
  ---
  name: integration-spec-writer
  description: Write a build-ready specification for connecting two systems, covering source of truth, field mapping, identity keys, auth, rate limits, conflict resolution, and reconciliation. Use when the user asks for an integration spec, sync design, CRM-to-tool mapping, or a plan to connect two SaaS products.
  ---

  # Integration Spec Writer

  Integrations fail on the boring parts: which system owns a field, what
  happens when both changed it, and how anyone notices the two sides drifted.

  ## Workflow

  1. Name the workflow the integration serves, in one sentence.
  2. Assign a source of truth per field, not per system.
  3. Define the identity key and what happens when it is missing.
  4. Map the fields, including types, formats, and required values.
  5. Choose the transport: webhook, poll, or batch.
  6. Define conflict, retry, and failure behavior.
  7. Define reconciliation: how the two sides are compared, and how often.

  ## Source of truth

  Build a table: field, system of record, direction, overwrite rule. A field
  that is editable in both systems needs an explicit winner or a merge rule.
  "Last write wins" is a rule only if both systems share a clock, which they
  usually do not.

  ## Identity

  - Which field identifies a record across systems: email, external id, or a
    mapping table?
  - What happens when the key changes, for example after a domain rename?
  - What happens when two records match one?
  - What happens when the key is empty or duplicated?

  Most sync bugs surface here, not in the field mapping.

  ## Field mapping

  For each field: source name, target name, type, transform, required,
  default, and validation. Call out the ones that always cause trouble:
  dates and timezones, currency and decimals, enums that do not match,
  multi-select to single-select, and free text going into a picklist.

  ## Transport

  - Webhook: fastest, needs signature verification and replay handling.
  - Poll: simpler, needs a cursor and a lookback window for late writes.
  - Batch: good for backfills, bad for near-real-time expectations.

  State the expected volume, the rate limit on the receiving API, and the
  backoff behavior when it is hit.

  ## Failure handling

  - Retry policy with jitter and a cap.
  - Dead-letter destination with the full payload.
  - Idempotency key on every write.
  - Behavior when one side is down for an hour, and for a day.
  - How a partial failure is reported to the user.

  ## Reconciliation

  - A nightly count and checksum per object.
  - A sample diff that lists drifted records.
  - A repair path that is safe to re-run.
  - An owner and an alert threshold.

  Without reconciliation, an integration is assumed correct until someone
  notices a missing deal a quarter later.

  ## Output

  ```
  Purpose

  Source of truth
  - Field, system, direction, overwrite rule.

  Identity and matching

  Field mapping table

  Transport, volume, rate limits

  Failure and retry

  Reconciliation and alerts

  Out of scope
  ```
---

Integration specs usually stop at the field mapping, which is the easy part. The expensive questions are ownership, identity, and drift.

This skill forces a source of truth per field and a reconciliation job into the spec, because those are the two decisions that determine whether the integration is still trusted in six months.

Pair it with Webhook Reliability Review for the delivery mechanics, or API Docs Writer when the integration is public.
