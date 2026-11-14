---
title: "Eval Harness Writer"
title_tag: "Eval Harness Writer — AI agent skill for Skill Building"
slug: eval-harness-writer
category: meta
date: 2026-11-09
excerpt: "Builds an evaluation harness for an LLM feature with a real dataset, explicit graders, regression gates, and a report a team can act on."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [evaluation, llm, testing, quality, prompts]
usage: |
  Build an eval harness for this LLM feature.

  Define the task, the dataset, the pass criteria, and the regression gate.
  Include the cases the model is likely to fail and how a human should review
  the ambiguous ones.

  Feature and current prompt:
  [describe]
related_skills: [prompt-optimizer, unit-test-writer, rag-architect]
skill_file: |
  ---
  name: eval-harness-writer
  description: Build an evaluation harness for an LLM feature with a dataset, graders, thresholds, and regression gates. Use when the user asks for evals, LLM testing, prompt regression tests, or a way to measure output quality.
  ---

  # Eval Harness Writer

  An eval is only useful if it can fail. A harness that always passes is
  decoration.

  ## Workflow

  1. Write the task as a contract: input, expected output, and what counts as
     wrong.
  2. Assemble a dataset from real inputs. Include the boring middle, not only
     the hard cases.
  3. Choose a grader per property: exact match, schema check, unit test,
     rubric, model judge, or human review.
  4. Set a threshold and a regression gate before running anything.
  5. Run the baseline and record it.
  6. Inspect failures by hand. Fix the grader before fixing the prompt.
  7. Keep a held-out set that is not used for tuning.

  ## Dataset design

  - 30 to 100 cases for a first harness, not 5.
  - Include normal, boundary, empty, adversarial, and refusal cases.
  - Store the input, the expected properties, and the source of the case.
  - Version the dataset with the prompt.
  - Do not train on the test set, even informally.

  ## Graders

  ### Deterministic

  - JSON schema and required fields.
  - Exact values, ranges, and units.
  - Forbidden phrases or missing citations.
  - Code that runs and passes a test.

  ### Rubric

  - A small number of binary checks, each with a clear definition.
  - No 1 to 10 scales unless the anchors are written down.
  - Two independent judges for subjective properties.

  ### Model judge

  - Give the judge the rubric, the input, and the output.
  - Ask for a verdict and a reason, not a score alone.
  - Calibrate the judge against human labels on a sample.
  - Never use the same model to generate and judge without checking for
    self-preference.

  ## Regression gate

  - A new prompt ships only if the overall score does not drop.
  - A safety or format check must pass on every case, not on average.
  - Record the run date, prompt version, model version, and dataset version.
  - Alert on a drop larger than the noise measured across repeated runs.

  ## Report

  ```
  Run: <date> <prompt version> <model version>
  Cases: <n>
  Pass rate: <x> percent
  Failed checks: <check>: <count>
  Regressions: <case ids and the change>
  Needs human review: <case ids>
  ```

  ## Rules

  - Do not report a single average when one category failed.
  - Do not tune on the held-out set.
  - Do not trust a model judge without calibration.
  - Do not compare runs across model versions without saying so.
  - Do not claim improvement without a baseline run.

  ## Output

  Return:
  - The harness structure and the dataset fields.
  - The grader for each property.
  - The pass threshold and regression gate.
  - The first ten cases to write.
---

Most LLM features are tested by trying a few prompts and reading the output. That catches obvious breakage and misses everything else. This skill turns the informal check into a repeatable run with a baseline.

The grader comes before the prompt fix on purpose. When an eval fails, the first question is whether the measurement is wrong. Fixing the prompt against a bad grader makes the metric move without making the product better.

Pair it with Prompt Optimizer to improve a prompt against the harness, or RAG Architect when the feature depends on retrieval.
