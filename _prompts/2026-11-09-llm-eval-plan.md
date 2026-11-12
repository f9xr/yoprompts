---
title: "Build an eval that can actually fail"
slug: llm-eval-plan
category: coding
category_label: Coding
difficulty: advanced
tools: [chatgpt, claude]
read_time: 7
seo:
  type: "WebPage"
picks: []
related: [prompt-rewrite, code-review-audit, chat-with-your-data]
skills: [eval-harness-writer, prompt-optimizer]
art: terminal
tags: [evaluation, llm, testing, prompts, quality, regression, ai]
excerpt: "Turns an LLM feature into a dataset, graders, a pass threshold, and a regression gate, with the cases the model is most likely to fail."
prompt: |
  You are an evaluation engineer for LLM features. You have seen too many
  evals that always pass, and you know the first job is to make the harness
  capable of failing.

  ## What I will give you
  - The feature and the task it performs:
  - Sample inputs and the outputs we consider good:
  - Examples of bad outputs we have seen:
  - The model and prompt version in use:
  - The tools available for running evals:
  - Cost and latency limits:
  - What a human currently checks by hand:

  ## Produce in this order

  1. **The task contract.** Input, expected output, and what counts as wrong.
     Include the cases where the correct answer is a refusal.

  2. **The dataset.** 30 to 100 cases grouped by category: normal,
     boundary, empty, adversarial, and refusal. For each group, say where the
     cases come from. Keep a held-out set that is not used for tuning.

  3. **The graders.** One grader per property: deterministic check, rubric,
     model judge, or human review. For a model judge, give the rubric, the
     calibration sample, and the agreement threshold.

  4. **The pass threshold and regression gate.** What must pass on every
     case, what can pass on average, and the noise band measured across
     repeated runs.

  5. **The baseline run.** The report format, the fields to record, and the
     first run to execute before changing anything.

  6. **The first ten cases.** Write them out, with the expected property for
     each.

  ## Rules
  - Do not report a single average when one category failed.
  - Do not tune on the held-out set, even informally.
  - Do not trust a model judge without calibration against human labels.
  - Do not compare runs across model versions without saying so.
  - Do not claim an improvement without a baseline.
  - Version the prompt, the dataset, and the model together.
  - A safety or format check must pass on every case, not on average.

  ## Before you finish
  Find one case the current prompt would plausibly fail. If you cannot find
  one, the dataset is too easy and you should say so.
workflow:
  - "Write the task contract, including refusals"
  - "Build a dataset from real inputs by category"
  - "Choose a grader for each property"
  - "Set the threshold and the regression gate"
  - "Run the baseline and record it"
  - "Write the first ten cases"
output_preview: "A task contract, a categorized dataset, a grader per property, a threshold and regression gate, a baseline report, and ten written test cases."
how_to_use:
  - "Paste real inputs and real bad outputs. An eval built from imagined failures tests the imagination, not the product."
  - "Name the tooling you already have. The prompt will fit the harness to your stack instead of inventing a framework you cannot run."
  - "Decide what a refusal should look like before running the prompt. A model that refuses in a different format can fail a strict grader for the wrong reason."
  - "Keep the first dataset small enough to inspect by hand. Thirty cases you have read are worth more than three hundred you have not."
tips:
  - "The held-out set is the only defense against overfitting the prompt to the eval. Decide which cases are held out before you start tuning."
  - "A model judge is useful for tone and helpfulness, not for facts. Use a deterministic check for anything that can be checked deterministically."
  - "Record the noise band by running the same prompt three times. A two-point difference inside the noise is not an improvement."
  - "When a case fails, inspect the grader before rewriting the prompt. A bad grader can make a good prompt look broken."
example_output: |
  TASK CONTRACT
  Input: a support question and a retrieved article.
  Output: a two-sentence answer with a citation, or a refusal.
  Wrong: an answer with no citation, an answer that contradicts the article,
  or an answer to a question the article does not cover.

  DATASET
  - Normal: 20 questions answered directly by the article.
  - Boundary: 10 questions answered by two sections.
  - Empty: 5 questions with no relevant article.
  - Adversarial: 5 questions with a plausible but wrong article.
  - Refusal: 10 questions outside the corpus.
  Held out: 10 of the normal and 5 of the refusal cases.

  GRADERS
  - Citation present: deterministic.
  - Citation matches the source: deterministic against the article id.
  - Answer supported by the article: rubric with three binary checks.
  - Refusal when unsupported: deterministic.
  - Tone: model judge, calibrated on 20 human labels, 85 percent agreement
    required.

  GATE
  - Citation present: 100 percent.
  - Refusal when unsupported: 100 percent.
  - Supported answer: no drop larger than 3 points.
  - Tone: no drop larger than the 5-point noise band.

  BASELINE
  Run 1: citation 94 percent, refusal 80 percent, supported 71 percent,
  tone 4.1 of 5.

  FIRST TEN CASES
  1. Normal: "How do I reset my password?" Expected: citation, supported.
  2. Normal: "Where is the billing page?" Expected: citation, supported.
  3. Boundary: "Why was I charged twice?" Expected: two sections cited.
  4. Empty: "Do you support SSO on the free plan?" Expected: refusal.
  5. Adversarial: "Can I export to CSV?" with an article about PDF export.
     Expected: refusal, not a confident wrong answer.
  6. Refusal: "What is your competitor's pricing?" Expected: refusal.
  7. Refusal: "Can you recommend a plan?" Expected: refusal or a documented
     recommendation, never an invented one.
  8. Normal: "How do I invite a teammate?" Expected: citation, supported.
  9. Boundary: "What happens when I downgrade?" Expected: two sections.
  10. Empty: "Is there an on-premises version?" Expected: refusal.
faq:
  - q: "How many eval cases do I need?"
    a: "Thirty is enough for a first harness and one hundred is a reasonable ceiling for a single feature. The number matters less than the categories: a hundred normal cases and no refusals will not catch the failure that ships."
  - q: "Can I use the model to grade itself?"
    a: "Only for properties where you have calibrated it against human labels and checked for self-preference. For facts, citations, and format, use a deterministic check. The prompt will separate those."
  - q: "What is a regression gate?"
    a: "The rule that decides whether a new prompt ships. It is a threshold plus a noise band, so a small change inside the noise does not trigger a false alarm and a real drop does."
  - q: "What if the eval disagrees with my judgment?"
    a: "Read the failing case and the grader together. Either the case is wrong, the grader is wrong, or your judgment is wrong. Fix the first two before changing the prompt."
---
