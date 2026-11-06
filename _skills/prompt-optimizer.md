---
title: "Prompt Optimizer"
slug: prompt-optimizer
category: meta
date: 2026-11-05
excerpt: "Diagnoses a weak prompt, removes the ambiguity, adds the missing constraints, and returns a tested rewrite with a reason for each change."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [prompt engineering, meta, optimization, ai, instructions]
usage: |
  Improve this prompt.

  Name what is ambiguous, what the model will guess, and what is missing.
  Return the rewrite, then a short list of what changed and why. Do not add
  constraints that the original task does not need.

  Prompt:
  [paste prompt]
related_skills: [find-skills, skill-creator, agent-memory-architect]
skill_file: |
  ---
  name: prompt-optimizer
  description: Diagnose and rewrite prompts that produce inconsistent or shallow output. Use when the user asks to improve a prompt, fix vague instructions, add constraints, design a system prompt, or make an AI output more reliable.
  ---

  # Prompt Optimizer

  A prompt fails for one of four reasons: the task is unclear, the context is
  missing, the constraints are absent, or the output format is undefined.
  Diagnose before rewriting.

  ## Workflow

  1. State the task the prompt is trying to complete in one sentence.
  2. Mark every phrase the model could interpret two ways.
  3. List the context the model needs but does not have.
  4. List the constraints the output must respect: length, tone, format,
     sources, and forbidden behaviour.
  5. Check whether the prompt asks for a process, an answer, or both.
  6. Rewrite with the smallest set of changes that fixes the failure.
  7. Add one verification instruction so the model checks its own output.

  ## Common failures

  - A role with no goal. "You are an expert" does nothing without a task.
  - Too many goals in one prompt.
  - No audience and no reading level.
  - No definition of done.
  - No format, so the model picks a wall of text.
  - Constraints buried in the middle of a paragraph.
  - Examples that contradict the instructions.
  - Asking for honesty while rewarding confidence.
  - No instruction for missing information.

  ## Rewrite rules

  - Keep the user's intent. Do not turn a small task into a framework.
  - Put the goal first, the context second, the constraints third, the format
    last.
  - Use a numbered output contract.
  - Tell the model what to do when a fact is missing: ask, mark it unknown, or
    stop.
  - Prefer one strong example over three weak ones.
  - Remove adjectives that do not change behaviour.
  - Keep the prompt as short as the task allows.

  ## Verification instruction

  End the prompt with a check such as: "Before returning, verify that every
  required section is present and that no claim is unsupported by the input."

  ## Output format

  Return: diagnosis, rewritten prompt in a fenced block, change log, and one
  test input the user can run to compare the old and new versions.
---

Most prompt rewrites add length when the problem is ambiguity. The optimizer names the failure first, so the rewrite can be smaller than the original and still produce better output.

The verification instruction matters because a model that checks its own output catches missing sections more reliably than one that is told to try harder.

Pair it with Skill Creator when the prompt is becoming a reusable skill, or with Find Skills when the capability already exists.
