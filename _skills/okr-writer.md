---
title: "OKR Writer"
title_tag: "OKR Writer — AI agent skill for Business"
slug: okr-writer
category: business
date: 2026-11-09
excerpt: "Turns a strategy into a small set of measurable OKRs with baselines, guardrails, owners, and explicit anti-goals."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [okr, strategy, planning, goals, metrics]
usage: |
  Turn this strategy into OKRs.

  Use no more than three objectives and three key results each. Every key
  result needs a baseline, a target, and a date. Name the guardrail metric and
  what we are deliberately not doing.

  Strategy and current metrics:
  [describe]
related_skills: [experiment-design, data-story, financial-model-review]
skill_file: |
  ---
  name: okr-writer
  description: Turn a strategy into measurable objectives and key results with baselines, guardrails, owners, and anti-goals. Use when the user asks for OKRs, quarterly goals, a planning framework, or help making a strategy measurable.
  ---

  # OKR Writer

  An OKR is a bet with a measurement. If the key result cannot move for a
  reason the team controls, it is a wish.

  ## Workflow

  1. Read the strategy and name the change it expects in the world.
  2. Write objectives as outcomes for a customer or the business, not as
     projects.
  3. Write key results that measure the outcome, not the activity.
  4. Attach a baseline, a target, and a date to every key result.
  5. Add one guardrail metric per objective: what must not get worse.
  6. Name the owner for each key result.
  7. Write the anti-goals: what the team will not do this quarter.

  ## Tests for a key result

  - Does it move if the team does the work? If not, it is a lagging
    indicator with no lever.
  - Can it be measured this quarter? If not, it is a vision statement.
  - Would a reasonable person disagree with the target? If not, it is too
    safe.
  - Does it describe an outcome rather than a deliverable? "Ship the new
    onboarding" is a project. "Increase activation from 34 to 45 percent" is a
    key result.
  - Is the baseline real? A target without a baseline is a guess.

  ## Output shape

  ```
  Objective 1: <outcome for a named group>

  - KR1: <metric> from <baseline> to <target> by <date>. Owner: <name>.
  - KR2: ...
  - KR3: ...

  Guardrail: <metric> must stay above or below <value>.
  Anti-goal: we will not <action> this quarter.
  ```

  ## Rules

  - Three objectives per team, three key results per objective. More means
    nothing is prioritised.
  - Do not use output metrics such as number of features, story points, or
    meetings.
  - Do not set a target that is already achieved by the current trend.
  - Do not write a key result that only one team can move if another team owns
    the dependency. Name the dependency.
  - Do not use a health metric as a key result and a guardrail at the same
    time.

  ## Output

  Return the OKR set, then:
  - The assumptions behind each baseline.
  - The metrics that do not exist yet and need instrumentation.
  - The dependency most likely to block a key result.
---

Most OKRs fail because they are project lists with numbers attached. This skill separates the outcome from the work and forces a baseline, which is where the honesty lives.

The anti-goal is the part teams skip and later need. A quarter with no stated trade-off is a quarter where everything is a priority.

Pair it with Experiment Design to test a key result, or Data Story when the result needs to be explained to people outside the team.
