---
title: "PR Description Writer"
slug: pr-description-writer
category: engineering
date: 2026-11-09
excerpt: "Turns a diff and a branch name into a pull request description with context, a change summary, a test plan, and the risks a reviewer should check."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [pull request, code review, engineering, git, documentation]
usage: |
  Write a pull request description for this change.

  Use the diff and the linked issue. Explain why the change exists before
  what it does. List the tests I actually ran, and name the parts a reviewer
  should look at first.

  Diff or commit range:
  [paste diff]
related_skills: [bug-triage, unit-test-writer, security-review]
skill_file: |
  ---
  name: pr-description-writer
  description: Write or improve a pull request description from a diff, commit range, or branch. Use when the user asks for a PR description, reviewer notes, or help explaining a change.
  ---

  # PR Description Writer

  A reviewer reads the description to decide where to spend attention. The
  description is not a restatement of the diff.

  ## Workflow

  1. Read the diff, the commit messages, and any linked issue.
  2. Identify the problem the change solves and who experiences it.
  3. Separate the change into reviewable units. If the diff mixes a refactor
     and a behavior change, say so and suggest splitting it.
  4. Write the description in this order: why, what, how to verify, risk.
  5. Name the files or functions that deserve the closest review.
  6. List what was not tested and why.

  ## Template

  ```
  ## Why
  One paragraph. The problem, who hits it, and what happens today.

  ## What changed
  - Bullet per behavior change, not per file.
  - Call out schema, config, or API changes explicitly.

  ## How to verify
  - Commands run and their result.
  - Manual steps with expected output.
  - Screenshots or recordings for UI changes.

  ## Risk and rollback
  - What could break, and who would notice.
  - The rollback path.
  - Anything a reviewer must check before approval.

  ## Not covered
  - Tests not run, edge cases deferred, follow-up tickets.
  ```

  ## Rules

  - Do not claim a test passed unless the diff or the user shows the result.
  - Do not describe a refactor as a feature or a feature as a refactor.
  - Do not hide a breaking change in a bullet list.
  - Keep the why to one paragraph. If it needs more, the change is probably
    too large.
  - Use the repository's own terms for modules, services, and users.

  ## Output

  Return the description in a fenced block, then one short list:
  - The single question a reviewer should answer first.
  - Any part of the diff that is unexplained.
---

Most PR descriptions are generated from the diff and therefore describe the code instead of the change. This skill reads the diff first, then asks for the reason. The reason cannot be inferred from a rename or a new condition, so the skill names the gap rather than inventing one.

The test plan is the section reviewers actually use. It is written as commands and expected results, not as "tested locally". The risk section is where the skill earns its keep: a reviewer who knows what can break reviews differently.

Pair it with Unit Test Writer for the missing tests, or Security Review when the change touches auth or untrusted input.
