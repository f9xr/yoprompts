---
title: "Write a pull request a reviewer can actually review"
title_tag: "Pull request description prompt for reviewers"
slug: pull-request-description
category: coding
category_label: Coding
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 5
seo:
  type: "WebPage"
picks: []
related: [code-review-audit, debug-this-error, release-notes]
skills: [pr-description-writer, unit-test-writer]
mcp_servers: [github]
art: terminal
tags: [pull request, code review, git, engineering, documentation, diff]
excerpt: "Turns a diff into a pull request description with the reason for the change, a test plan you can run, and the risks a reviewer should check first."
prompt: |
  You are a senior engineer who reviews more pull requests than you write. You
  know the description decides where a reviewer spends attention, and you have
  seen too many descriptions that only restate the diff.

  ## What I will give you
  - The diff or commit range:
  - The issue or reason for the change:
  - The commands I ran, and their result:
  - Anything I could not test:
  - The repository convention for branch names and PR titles:

  ## Produce in this order

  1. **The reason.** One paragraph. The problem, who hits it, and what happens
     today. If the diff does not support a clear reason, say what is missing
     instead of inventing one.

  2. **The title.** Under 72 characters, imperative mood, no ticket prefix
     unless the repository requires it. Give three options.

  3. **What changed.** One bullet per behavior change, not per file. Group
     refactors separately. Call out schema, config, API, and permission
     changes explicitly.

  4. **How to verify.** Commands with expected output, then manual steps.
     Mark anything I did not actually run as "not run" instead of claiming it.

  5. **Review order.** The files or functions a reviewer should read first,
     and the one question they should answer before approving.

  6. **Risk and rollback.** What can break, who would notice, and how to undo
     it. If there is no rollback, say so.

  7. **Not covered.** Tests not run, edge cases deferred, follow-up work.

  ## Rules
  - Never claim a test passed unless I gave you the result.
  - Never describe a refactor as a feature or a feature as a refactor.
  - Do not hide a breaking change in a bullet list.
  - Keep the reason to one paragraph.
  - Use the repository's own names for modules, services, and users.
  - If the diff mixes unrelated changes, say where to split it.

  ## Before you finish
  Read the description as the reviewer. If any bullet does not help them
  decide what to check, delete it and say what you removed.
workflow:
  - "State the reason before the change"
  - "Group bullets by behavior, not by file"
  - "Write a test plan with real commands"
  - "Name the review order and the first question"
  - "List risk, rollback, and what was not tested"
output_preview: "A one-paragraph reason, three title options, behavior-level bullets, a runnable test plan, a review order, and an honest list of what was not tested."
how_to_use:
  - "Paste the diff, not a summary of it. The prompt needs to see what changed to separate behavior from refactor."
  - "Include the commands you actually ran and their output. If you did not run tests, say so and the prompt will mark them as not run."
  - "Name the repository convention for PR titles. A prompt that guesses the convention produces a title a maintainer has to rewrite."
  - "If the diff is large, split it by concern before running the prompt. A description cannot fix a PR that should be three PRs."
tips:
  - "The review order is the highest-leverage section. Reviewers start at the top and stop when they run out of time, so put the risky file first."
  - "A rollback line is worth more than a risk paragraph. If you cannot write the rollback, you do not yet understand the change."
  - "Run the prompt again with the reviewer's comment as input. It will rewrite the description around the confusion instead of defending it."
  - "Keep the test plan in the PR body, not in a comment. It survives the review and helps the next person who bisects the change."
example_output: |
  REASON
  The import job retries a failed row forever, so one malformed CSV line
  keeps the worker busy and blocks every row behind it. Support has seen this
  three times this month.

  TITLE
  1. Stop retrying a permanently failed import row
  2. Cap import retries and record the failure
  3. Fail an import row after three attempts

  WHAT CHANGED
  - A row that fails validation is retried at most three times, then marked
    failed.
  - The import summary now includes a failed count and the first error per
    row.
  - The retry counter is stored on the job row. No schema change.

  HOW TO VERIFY
  - `npm test -- import` passes locally.
  - Manual: upload `fixtures/bad-row.csv`, confirm the job finishes and the
    summary shows one failed row.
  - Not run: the worker integration test, because it needs Redis.

  REVIEW ORDER
  Start with `src/import/retry.ts`. The question: can a row be retried after
  it is marked failed?

  RISK AND ROLLBACK
  A row that used to retry forever will now stop. If the validation is too
  strict, legitimate rows will fail. Roll back by reverting the commit; the
  job row keeps the failure data.

  NOT COVERED
  - A backfill for rows already stuck in the retry loop.
  - The admin view of failed rows.
faq:
  - q: "Can it write the PR description from a commit message only?"
    a: "It can, but the result will be thin. A commit message usually says what changed and rarely says why. Paste the diff or the linked issue as well, or the prompt will ask for the missing reason instead of inventing one."
  - q: "Should the description include screenshots?"
    a: "For a UI change, yes, and the prompt will ask for them in the verification section. It cannot create the screenshot, so the PR is incomplete until you add one."
  - q: "What if the PR is a pure refactor?"
    a: "Say so in the input. The prompt will then focus on proving behavior did not change, which is the only useful review for a refactor. It will not dress it up as a feature."
  - q: "Does it work for a stacked PR?"
    a: "Yes, if you give it the base branch and say which change belongs to this PR. Without that, it will describe the whole stack and the reviewer will not know where this PR ends."
---
