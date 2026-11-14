---
title: "Write release notes people actually read"
title_tag: "Write release notes people actually read — AI prompt"
slug: release-notes
category: writing
category_label: AI Writing
difficulty: beginner
tools: [chatgpt, claude, gemini]
read_time: 5
seo:
  type: "WebPage"
picks: []
related: [pull-request-description, launch-announcement, technical-spec]
skills: [release-notes-writer, writing-guidelines]
art: terminal
tags: [release notes, changelog, product updates, communication, writing, shipping]
excerpt: "Turns a merged pull request list into release notes organised by what changed for the user, with the migration note and the breaking change stated plainly."
prompt: |
  You are a product writer who writes release notes that a customer can act
  on. You know a changelog is not a commit log with headings.

  ## What I will give you
  - The product and who reads these notes:
  - The changes: merged PRs, tickets, or a rough list:
  - What is breaking, deprecated, or needs action:
  - The version number and release date:
  - Where these notes will be published:

  ## Produce in this order

  1. **The headline.** One sentence a reader would repeat: the most useful
     thing in this release, in their terms.

  2. **What changed, grouped by user outcome.** New, Improved, Fixed.
     Within each group, order by impact, not by when it merged. Each entry:
     what changed, why it matters, and what to do.

  3. **Action required.** Breaking changes, deprecations, config moves, and
     minimum version bumps. State the deadline and the exact steps.

  4. **Migration note.** The command, flag, or setting, written so it can be
     copied. Include the rollback if the change is risky.

  5. **Known issues.** What is still broken, with the workaround. Omitting
     this costs more trust than the bug itself.

  6. **The credits.** Contributors and reporters, if the project does that.

  ## Rules
  - Write for the reader, not the author. No ticket ids in the prose.
  - Lead with the benefit, then the mechanism.
  - One sentence per change. If it needs a paragraph, it needs its own post.
  - Call a breaking change breaking. Do not bury it under "Improved".
  - Do not say "various bug fixes and performance improvements".
  - Do not use "seamless", "powerful", "robust", or "exciting".
  - Do not invent a feature that is not in the list.
  - Keep the whole thing under 400 words unless the release is major.

  ## Before you finish
  Ask: if a reader only reads the headline and the action-required
  section, do they know whether this release affects them?
workflow:
  - "Identify the one change that matters most to readers"
  - "Group changes by outcome: new, improved, fixed"
  - "Move breaking changes into their own action-required section"
  - "Write the migration step as a copyable command"
  - "State known issues with workarounds"
  - "Cut jargon, ticket ids, and filler"
output_preview: "A short headline, changes grouped by user outcome, an action-required section with copyable steps, known issues, and a version line, all under about 400 words."
how_to_use:
  - "Paste the merged PR titles and let the prompt rewrite them. Titles describe the implementation; notes describe the change."
  - "Mark the breaking changes explicitly. The prompt will not guess which changes need user action."
  - "Say who reads the notes. A developer changelog and a customer newsletter need different levels of detail."
  - "Include the version number and date so the notes can be filed and linked."
tips:
  - "The action-required section is the only part most readers scan. Put it above the feature list if the release breaks anything."
  - "Group by outcome, not by team. Nobody cares which squad shipped it."
  - "A known-issues section is a trust signal. The alternative is a support queue discovering it for you."
  - "If a change needs a screenshot to explain, it probably needs a help article instead of a line in the notes."
  - "Keep last release's notes open while writing. Repetition across releases is a sign the change was never actually shipped."
example_output: |
  ## 4.2: faster imports and a breaking change to webhooks

  Imports over 10,000 rows now finish in the background, so the page no
  longer times out. You will get an email when the import completes.

  ### New
  - Background imports for files over 10,000 rows. Upload and leave the page.
  - A progress endpoint at `GET /imports/{id}` for scripts and dashboards.

  ### Improved
  - Import errors now name the row and the column instead of failing the
    whole file.
  - The import history keeps 90 days instead of 30.

  ### Fixed
  - Duplicate uploads no longer create two imports.
  - The import button no longer stays disabled after a validation error.

  ### Action required
  Webhook payloads now send `event_id` at the top level instead of inside
  `data`. The old field is removed on 2026-12-12.

  Before:
  `{ "data": { "event_id": "..." } }`
  After:
  `{ "event_id": "...", "data": { ... } }`

  If your handler reads `data.event_id`, update it before the removal date.

  ### Known issues
  - Imports with more than 50,000 rows can take longer than the 24-hour
    retention window. Split the file for now.

faq:
  - q: "Should release notes list every change?"
    a: "No. List the changes a reader can act on or notice, and summarise the rest. The prompt groups by outcome and drops internal refactors, which is what keeps the notes short enough to read."
  - q: "How do I write notes when the release is only bug fixes?"
    a: "Lead with the most visible fix and say what it means for the user. A release of fixes is still a release; the prompt avoids the empty 'various fixes' line by naming each one and its effect."
  - q: "Should I include ticket numbers?"
    a: "Only in a developer changelog where readers trace work. In customer-facing notes, numbers add noise. The prompt drops them from the prose and keeps the change description."
  - q: "What about security fixes?"
    a: "State that a security issue was fixed and whether users must act, but do not publish exploit details before the patch is widely deployed. The prompt will keep the entry factual and leave the disclosure timeline to you."
---

Release notes are the cheapest trust-building surface a product has and the one most often generated from commit titles. This prompt rewrites the change list into outcomes, moves breaking changes to the top, and keeps the whole thing short.

The action-required section is the part that prevents support tickets. A breaking change buried under "Improved" is a change that gets discovered in production.

Pair it with Pull Request Description while the change is still in review, or Launch Announcement when the release is big enough to need its own post.
