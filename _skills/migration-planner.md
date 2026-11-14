---
title: "Migration Planner"
title_tag: "Migration Planner — AI agent skill for Engineering"
slug: migration-planner
category: engineering
date: 2026-11-12
excerpt: "Plans a framework, database, or platform migration as reversible steps with a compatibility window, a verification gate at each step, and an honest rollback."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [migration, refactor, rollout, rollback, engineering, database]
usage: |
  Plan this migration.

  Break it into steps that can ship independently, each with a rollback and
  a check that proves it worked. Do not plan a big-bang cutover. Name what
  breaks the plan and what cannot be rolled back.

  What is moving, from what, to what:
  [describe]
related_skills: [api-docs-writer, unit-test-writer, runbook-writer]
skill_file: |
  ---
  name: migration-planner
  description: Plan a code, framework, database, or platform migration as small reversible steps with compatibility windows and verification gates. Use when the user asks for a migration plan, upgrade strategy, cutover plan, or a safe path off a deprecated dependency.
  ---

  # Migration Planner

  A migration is a sequence of states where both the old and the new system
  work. If any step requires everything to change at once, the plan is not
  finished.

  ## Workflow

  1. Define the end state and the invariant that must hold throughout.
  2. Inventory what depends on the old system, including things outside the
     repository.
  3. Order the work so each step is independently shippable.
  4. Add a compatibility layer only where it removes a big-bang cutover.
  5. Define the check that proves each step worked.
  6. Define rollback for each step, and mark the points of no return.
  7. Set the deletion date for the old path.

  ## Step design

  Each step has: what changes, what still works, how it is verified, how it
  is rolled back, and who owns it.

  Typical order for a data migration:

  1. Add the new column or table. Write to both. Read from the old one.
  2. Backfill in batches, with a resume point.
  3. Compare old and new on a sample, then on everything.
  4. Switch reads behind a flag, per cohort.
  5. Remove the dual write.
  6. Drop the old column after the retention window.

  Typical order for a framework upgrade:

  1. Pin and upgrade the toolchain without changing behaviour.
  2. Port the smallest surface, keep the rest on the old path.
  3. Run both paths in CI until the port is complete.
  4. Remove the compatibility layer.
  5. Delete the old code and the flags.

  ## Verification

  - A test that fails before the step and passes after it.
  - A metric that would move if the step were wrong.
  - A comparison between old and new output on real data.
  - A canary cohort with a defined blast radius.

  "The tests pass" is not verification for a migration. The tests were
  written against the old behaviour.

  ## Rollback

  For every step, write the command, flag, or revert that undoes it, and how
  long it takes. Mark the steps that cannot be undone: dropping a column,
  deleting a bucket, changing a public identifier, sending a notification.

  For each irreversible step, require a backup and a waiting period.

  ## Risks to name

  - A consumer outside the repository: mobile app version, partner
    integration, webhook subscriber, cached client.
  - Data written during the cutover, including retries and queued jobs.
  - Timezone, encoding, and identifier changes that look like data loss.
  - A dependency that upgrades transitively and breaks an unrelated path.
  - The team losing the context before the cleanup step ships.

  ## Output

  ```
  End state and invariant

  Steps
  1. Change. Still works. Verify. Rollback. Owner. Irreversible? 

  Compatibility window
  - Start, end, and what must be gone by then.

  Verification plan
  - Comparison method, canary, metrics.

  Point of no return
  - Step, why, and the backup required.

  Cleanup
  - What gets deleted, when, and who confirms.
  ```
---

Migrations fail less from the technical change than from the step that cannot be undone and was scheduled last. This skill makes irreversibility explicit and forces every step to stand alone.

The compatibility window is the other discipline: without a deletion date, the dual-write path outlives the migration and becomes the next incident.

Pair it with Runbook Writer for the cutover day, or Unit Test Writer for the comparison harness.
