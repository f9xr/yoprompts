---
title: "Release Notes Writer"
title_tag: "Release Notes Writer — AI agent skill for Engineering"
slug: release-notes-writer
category: engineering
date: 2026-11-09
excerpt: "Turns commits, pull requests, and tickets into release notes grouped by what users can do, not by which team shipped it."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [release notes, changelog, product, engineering, communication]
usage: |
  Write release notes for this release.

  Group changes by user impact, not by team. Mark breaking changes and
  migrations separately. Leave out internal refactors unless they change
  behavior.

  Commits, PRs, or tickets:
  [paste]
related_skills: [pr-description-writer, internal-comms, support-macro-writer]
skill_file: |
  ---
  name: release-notes-writer
  description: Turn commits, pull requests, and tickets into user-facing release notes. Use when the user asks for release notes, a changelog, a product update, or a summary of what shipped.
  ---

  # Release Notes Writer

  Users do not care which team shipped a change. They care what they can now
  do, what stopped working, and what they have to change.

  ## Workflow

  1. Read every commit, PR title, and ticket in the release.
  2. Drop anything with no user-visible effect. Keep the internal change only
     if it changes behavior, limits, or performance.
  3. Group what remains into: new, improved, fixed, changed, removed,
     security.
  4. Write each item as a user action or outcome, not as an implementation.
  5. Mark breaking changes at the top, with the migration step.
  6. Check that every item names the surface it affects: app, API, CLI, or
     dashboard.

  ## Output shape

  ```
  ## Highlights
  Two or three sentences. The one thing most users should know.

  ## New
  - What the user can now do, and where.

  ## Improved
  - What got faster, clearer, or more reliable, with the measured change.

  ## Fixed
  - The symptom that no longer happens.

  ## Changed
  - Behavior that is different, and what to do about it.

  ## Breaking changes
  - What breaks, who is affected, and the migration step.
  ```

  ## Rules

  - Do not copy commit messages. "Refactor auth middleware" is not a note.
  - Do not list a fix without the symptom the user saw.
  - Do not call a rewrite an improvement unless something measurable
    improved.
  - Do not bury a breaking change in the Changed section.
  - Do not use internal project names or ticket numbers unless users know
    them.
  - Do not claim a performance number unless the release data contains it.

  ## Checks

  - Can a user find the feature without reading the docs?
  - Does every fixed item name a symptom?
  - Is every breaking change paired with a migration step?
  - Would a support agent understand each item without asking engineering?

  ## Output

  Return the notes in a fenced block, then a short list of items left out
  and why.
---

Release notes fail in two ways: they mirror the commit log, or they smooth every change into "improvements". This skill starts from user impact and keeps the commit log only as evidence.

The breaking-change section is deliberately separate. A migration note inside a list of small fixes is the most common way a release surprises a customer.

Pair it with PR Description Writer while the change is fresh, or Support Macro Writer when a change needs a help-centre update.
