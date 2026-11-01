---
title: "Workflow Automator"
slug: workflow-automator
category: automation
date: 2026-11-01
excerpt: "Maps a recurring manual task into a trigger, ordered steps, tool calls, failure handling, and a test plan before any code is written."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [automation, workflow, agents, integration, operations]
usage: |
  Use the workflow-automator skill on this weekly task. Map the trigger, the
  steps, the tools, and what should happen when a step fails.
skill_file: |
  ---
  name: workflow-automator
  description: Design a reliable automation from a recurring manual task, with triggers, tool calls, failure handling, and a test plan.
  ---

  # Workflow Automator

  Use this skill before writing an automation. The goal is a design that can be
  reviewed, not a script that happens to work once.

  ## Inputs

  - The task as it is done today, step by step
  - How often it runs and who starts it
  - The tools and accounts involved
  - What a correct result looks like
  - What happens today when something goes wrong

  Watch for hidden steps. "Export the report" usually means log in, choose a
  date range, wait for the file, rename it, and upload it somewhere.

  ## Method

  1. Write the current process as numbered steps, including the boring ones.
  2. Mark each step as trigger, fetch, transform, decide, write, or notify.
  3. Identify every step that needs a human decision. Keep those human unless
     the rule is unambiguous and reversible.
  4. Define the trigger precisely: schedule, webhook, file arrival, or manual
     start. Name the time zone for schedules.
  5. Define the data contract between steps: fields, types, required values,
     and what an empty result means.
  6. Define failure handling per step: retry count, backoff, alert target, and
     whether the run can resume or must restart.
  7. Define idempotency. Running the same job twice must not create duplicate
     records, messages, or charges.
  8. Write the test plan before implementation: one normal case, one empty
     case, one permission failure, one duplicate run, and one partial failure.

  ## Output shape

  - **Automation summary.** Two sentences: what runs, and when.
  - **Step table.** Columns: step, type, tool, input, output, failure action.
  - **Human checkpoints.** The steps that still need a person, and why.
  - **Secrets and access.** Which credentials are needed and where they live.
  - **Test plan.** The five cases above with expected results.
  - **Rollout.** Start in shadow mode, compare output, then enable writes.

  ## Rules

  - Never invent an API endpoint or a permission scope. Mark unknowns as
    unknowns.
  - Never let an automation send, charge, delete, or publish without a stated
    guard.
  - Never store a secret in code, logs, or a prompt.
  - Prefer a boring scheduled job over a clever event chain when both work.
  - If a step cannot be tested, it cannot be automated yet.

  ## Done test

  Another engineer should be able to build the automation from the step table,
  and an operator should know exactly what to do when a run fails.
related_skills: [mcp-builder, deploy-to-vercel, find-skills]
---

This skill treats automation as a design review rather than a coding race. It makes the trigger, the data contract, and the failure path explicit, because those are the parts that break silently in production.

The test plan is part of the deliverable. An automation with no empty case and no duplicate-run check is not ready, even if the happy path works.

Works in any agent that supports `SKILL.md`. It needs no tools of its own and can be paired with an MCP server for whichever platform you are automating.
