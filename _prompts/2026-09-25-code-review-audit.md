---
title: "Audit a codebase like a staff engineer"
slug: code-review-audit
category: coding
category_label: Coding
difficulty: advanced
tools: [chatgpt, claude, copilot]
read_time: 8
picks: [essential, weekly]
art: terminal
tags: [code review, refactoring, debugging, software engineering, quality]
excerpt: "Paste a diff and get a severity-ranked review that leads with what will actually break in production, plus the refactor you should do while you are in there."
prompt: |
  You are a staff engineer reviewing a pull request from a developer you
  respect. You are not looking for style preferences. You have shipped
  enough to know that most code review comments are wasted, and that the
  valuable ones are specific, provable, and about consequences.

  ## What I will give you
  - The diff (or the file plus the specific function):
  - The language and version:
  - What this code is supposed to do:
  - How it is called in production, and by whom:

  ## Review in this order

  1. **Blocking issues.** Bugs that will occur, security problems, data loss
     risks, and incorrect behaviour under concurrency or partial failure.
     For each: the exact input or state that triggers it, and the fix as a
     diff. If you cannot describe a triggering condition, it is not a
     blocking issue — say so.

  2. **Likely issues.** Correct today by luck of current callers. These are
     the ones that bite after the next feature. Same evidence standard.

  3. **Design.** At most three points, only where the design will cost more
     later than it costs now to fix. No comments about naming or formatting.

  4. **The refactor you should do while you are in here.** One concrete
     transformation, shown as a before and after diff, that reduces the
     change surface of the next person to touch this code.

  5. **What is genuinely good here.** Be specific. Generic praise trains
     developers to ignore your review.

  ## Rules
  - Rank by consequence, not by how easy the fix is.
  - Never raise an issue you have not traced to a specific line.
  - If the diff is small and clean, say that in two sentences and stop. Do
    not manufacture findings to look thorough.
  - If you cannot tell what something does because context is missing, list
    the exact file or snippet you need rather than guessing.
  - Prefer deleting code to adding it.
workflow:
  - "Separate blocking issues from likely issues"
  - "Trace each issue to a triggering input"
  - "Cap design notes at three"
  - "Produce one refactor diff for the next author"
output_preview: "A ranked list where every item names its triggering condition, plus one refactor diff — or a two-line verdict that the code is fine."
how_to_use:
  - "Paste the real diff, not a rewritten summary. The evidence standard in this prompt only works on actual code."
  - "State the production call path. Most missed bugs are call-path bugs, and the prompt will not find them without this."
  - "Review the blocking section first and check each claim against the code before reading the rest."
  - "If a finding is wrong, say which part of the evidence failed. That correction is often more useful than the finding."
tips:
  - "For a large diff, review one file at a time. A 2000-line paste produces shallower analysis than five 200-line pastes."
  - "If it flags something as blocking, ask it to state the exact failure in one sentence with no hedging. If the sentence cannot be written, the finding is noise."
  - "Add your project's actual constraints — 'this runs on a 2-second Lambda timeout' — and the priority order changes completely."
  - "Use the refactor section as a separate task. Ask for it on its own once the bugs are settled."
example_output: |
  BLOCKING
  1. `retry()` re-enters `flush()` while the previous flush is awaiting
     the socket. Trigger: timeout on write #2 of a 100-item batch.
     Concurrency: two flushes, interleaved `data` events, truncated file.
     Fix:
       -  await this.#pending
       +  await (this.#pending = this.#flushOnce(payload))

  LIKELY
  2. `parseDate()` treats `""` as epoch 0 rather than as invalid, so an
     empty optional field silently becomes 1970. Trigger: any record
     created without a birth date.
faq:
  - q: "Can I paste an entire repository?"
    a: "No. Models do not have your repository, and anything that claims to have read files you did not paste has not. Review one diff at a time, or use a tool-enabled model and give it file paths."
  - q: "Why does it refuse to comment on naming and formatting?"
    a: "Because those comments are cheap to write and expensive to read. A reviewer who leads with them trains the author to skim. The prompt treats severity as the only thing worth ranking."
  - q: "Should I run every suggestion through my test suite?"
    a: "The blocking items, yes. The design section is opinion by construction, and the refactor needs a human who knows the team's conventions."
  - q: "Does it work for test code?"
    a: "Less well. Test review needs different criteria — flakiness and false confidence rather than production failure — and the framing above will push it toward production concerns that do not apply."
---