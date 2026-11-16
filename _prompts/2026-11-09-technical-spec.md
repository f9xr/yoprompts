---
title: "Write a technical spec that prevents rework"
title_tag: "Write a technical spec that prevents rework — AI prompt"
slug: technical-spec
category: coding
category_label: Coding
difficulty: advanced
tools: [chatgpt, claude]
read_time: 7
seo:
  type: "WebPage"
picks: []
related: [website-code-audit, code-review-audit, rag-system-design]
skills: [prd-writer, api-docs-writer]
art: workflow
tags: [technical spec, architecture, engineering, planning, design doc, api]
excerpt: "Turns a feature request into a technical spec with goals, non-goals, constraints, alternatives, interfaces, migration, and the risks that decide the design."
prompt: |
  You are a staff engineer who writes design docs that get read. You know a
  spec is not a project plan, and its main job is to surface the decision
  before the code exists.

  ## What I will give you
  - The problem and who has it:
  - What happens today, and why it is not enough:
  - The current system: services, data stores, interfaces:
  - Constraints: scale, latency, budget, team, deadline, compliance:
  - Non-negotiables and things that must not change:
  - The open questions the team has not answered:

  ## Produce in this order

  1. **Problem and why now.** The user or business problem, the current
     behavior, and the cost of leaving it alone. No solution yet.

  2. **Goals and non-goals.** Goals are outcomes the design must achieve.
     Non-goals are explicitly out of scope, including the ones a reader would
     assume are in scope.

  3. **Constraints and assumptions.** What is fixed, what is assumed, and
     which assumption is most likely to be wrong.

  4. **Options.** At least three, each with the tradeoff it makes and the
     condition under which it wins. Recommend one and say why the others
     lose.

  5. **Interfaces.** The API, data model, events, and failure behavior. For
     every interface, say what happens on error, timeout, retry, and partial
     success.

  6. **Migration and rollback.** The path from the current system, the
     backfill, the compatibility window, and how to undo it.

  7. **Observability and test plan.** The signals that prove it works, the
     failure signals, and the tests that would catch a regression.

  8. **Risks and open questions.** Each with an owner and a date. The
     assumption that would invalidate the recommendation gets its own line.

  9. **Build order.** The smallest shippable slice, then the next two.

  ## Rules
  - Do not present an option without a tradeoff.
  - Do not recommend an option without a reason the other options fail.
  - Do not hide an assumption. Name it and say what happens if it is false.
  - Do not define an interface without its error behavior.
  - Do not propose a migration without a rollback.
  - Do not invent scale numbers, latency budgets, or costs.
  - Do not write a spec for a solution that has not been described as a
    problem first.

  ## Before you finish
  Find the one assumption that would invalidate your recommendation. Put it
  at the top of the risks. If you cannot find one, the options were not real.
workflow:
  - "State the problem and the cost of leaving it"
  - "Write goals, non-goals, and assumptions"
  - "Compare at least three options and recommend one"
  - "Define interfaces including failure behavior"
  - "Plan migration, rollback, and observability"
  - "Name the risk that decides the design"
output_preview: "A problem statement, goals and non-goals, three options with tradeoffs, interfaces with error behavior, a migration and rollback plan, and the assumption most likely to break the design."
how_to_use:
  - "Describe the current system precisely. A spec written against a vague system produces interfaces that do not fit."
  - "List the non-negotiables. The prompt needs to know what cannot change before it can recommend an option."
  - "Give the open questions, even the embarrassing ones. A spec that pretends the team agrees is a spec that reopens the same debate in review."
  - "Keep the first spec short. A design doc that takes an hour to read is a design doc that gets skimmed."
tips:
  - "The non-goals section prevents the most rework. A reader who assumes a feature is in scope will plan around it."
  - "Error behavior is where interfaces usually fail in review. Write the timeout, retry, and partial-success path before the happy path."
  - "The migration and rollback is the part that turns a design into a plan. If it cannot be rolled back, it needs a different rollout."
  - "The risk that decides the design is the sentence people quote later. Make it explicit and put it at the top."
example_output: |
  PROBLEM
  Import jobs run in the request cycle, so a large CSV blocks the worker and
  times out after 30 seconds. About 12 percent of imports fail, and the user
  sees a generic error.

  GOALS
  - Imports over 10,000 rows complete without a request timeout.
  - The user can see progress and the reason for a failed row.
  - Existing imports keep working during the migration.

  NON-GOALS
  - A new file format.
  - Real-time import.
  - A redesign of the import UI beyond the progress state.

  CONSTRAINTS AND ASSUMPTIONS
  - The worker pool is shared with exports and must not be starved.
  - Assumption: the queue can hold a job for 24 hours. This is the
    assumption most likely to be wrong.

  OPTIONS
  1. Move the import to the existing queue. Wins on effort, loses on
     isolation: a large import can starve exports.
  2. Add a dedicated import queue and worker pool. Wins on isolation, loses
     on operational cost.
  3. Stream the import in the request with chunked writes. Wins on latency,
     loses on retry and progress.

  RECOMMENDATION
  Option 2. Option 1 puts imports and exports in the same failure domain, and
  Option 3 cannot show row-level progress without a second store.

  INTERFACES
  - `POST /imports` returns 202 with an import id.
  - `GET /imports/{id}` returns status, counts, and the first error per row.
  - On worker crash, the job returns to the queue after the visibility
    timeout and resumes from the last committed row.

  MIGRATION AND ROLLBACK
  - Write to the new queue behind a flag. Keep the old path for 30 days.
  - Rollback: turn the flag off. In-flight imports finish on the old path.

  OBSERVABILITY AND TEST
  - Metrics: queue depth, rows per second, failed rows, time to complete.
  - Test: a 50,000-row import with one malformed row, a worker crash mid-job,
    and a duplicate upload.

  RISKS AND OPEN QUESTIONS
  - The 24-hour queue retention assumption. Owner: platform. Date: this week.
  - A duplicate upload can create two imports. Needs an idempotency key.
  - The progress endpoint polls; the UI may need a push channel later.

  BUILD ORDER
  1. Queue, worker, and status endpoint behind a flag.
  2. Row-level errors and the progress UI.
  3. Idempotency and the backfill for stuck jobs.
faq:
  - q: "How long should a technical spec be?"
    a: "Long enough to make the decision and short enough to be read in one sitting. The prompt aims for the smallest document that covers the problem, the options, the interfaces, and the risk. Length is not a proxy for rigor."
  - q: "Should the spec include a timeline?"
    a: "It can include a build order, which is more useful than a date estimate. The prompt will give the smallest shippable slice and the next two steps, and leave the schedule to the team."
  - q: "What if we already know the solution?"
    a: "Write down the options you rejected anyway. The value of the spec is the record of why the chosen path won, and that record is what prevents the same debate next quarter."
  - q: "Who should review it?"
    a: "The people who will operate it and the people who own the interfaces it touches. The prompt names the open questions and owners, which makes the review list obvious."
---
