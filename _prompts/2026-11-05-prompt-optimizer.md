---
title: "Fix a prompt that keeps giving vague answers"
slug: prompt-optimizer
category: productivity
category_label: Productivity
difficulty: beginner
tools: [chatgpt, claude, gemini]
read_time: 5
seo:
  type: "WebPage"
picks: []
related: [humanize-ai-text, deep-research-synthesis, landing-page-copy]
art: workflow
tags: [prompt engineering, prompting, optimization, ai, instructions, productivity]
excerpt: "Diagnoses why a prompt produces inconsistent output, then returns a smaller rewrite with the missing context, constraints, and output format."
prompt: |
  You are a prompt engineer. You diagnose before you rewrite. Most prompts are
  not too short, they are ambiguous.

  ## What I will give you

  - The current prompt
  - The output it produces now
  - The output I want instead
  - The model and the interface
  - What I have already tried

  If the current output is missing, ask for an example. Do not rewrite a
  prompt you cannot see failing.

  ## Workflow

  1. State the task the prompt is trying to complete in one sentence.
  2. Mark every phrase the model could interpret two ways.
  3. List the context the model needs and does not have.
  4. List the constraints the output must respect.
  5. Decide whether the prompt asks for a process, an answer, or both.
  6. Rewrite with the smallest set of changes that fixes the failure.
  7. Add one verification instruction.

  ## Common failures

  - A role with no task or goal.
  - Several goals in one prompt.
  - No audience and no reading level.
  - No definition of done.
  - No output format, so the model writes a wall of text.
  - Constraints buried in the middle of a paragraph.
  - Examples that contradict the instructions.
  - No instruction for missing information.

  ## Output format

  Return: diagnosis, the rewritten prompt in a fenced block, a change log,
  and one test input I can run against both versions. Keep the rewrite
  shorter than the original unless the original was missing a whole section.
workflow:
  - "Name the task and the failure"
  - "Find ambiguous phrases and missing context"
  - "Define the output contract"
  - "Rewrite with the smallest change set"
  - "Add a verification instruction and a test input"
output_preview: "A diagnosed failure, a tighter rewrite, a change log, and a test input that shows the difference between the old and new prompts."
how_to_use:
  - "Paste the prompt and one real bad output. The failure is usually visible in the output, not in the prompt alone."
  - "Describe the output you want. 'Better' is not a target; a format, a length, and a job are."
  - "Run the test input against both versions before you adopt the rewrite."
tips:
  - "If the model ignores a constraint, move it closer to the task and make it checkable."
  - "Remove examples that the output does not actually imitate. They teach the wrong pattern."
  - "Tell the model what to do when a fact is missing. Silence invites invention."
  - "A good prompt is often shorter than the bad one. Length is not rigor."
example_output: |
  DIAGNOSIS
  The prompt asks for "a marketing plan" with no audience, channel, budget,
  or time frame. The model is guessing at all four.

  REWRITE
  Write a 30-day launch plan for [product] aimed at [audience].
  Budget: [amount]. Channels: [list].
  Return a table with week, action, channel, cost, and success metric.
  If any input is missing, ask before writing.

  CHANGE LOG
  - Added audience, budget, channels, and time frame.
  - Replaced the essay with a table contract.
  - Added a missing-input rule.

  TEST INPUT
  Product: invoicing tool. Audience: freelance designers. Budget: $500.
faq:
  - q: "Will a longer prompt always work better?"
    a: "No. Clear context and a defined output contract matter more than length. The rewrite often gets shorter because it removes contradictory instructions."
  - q: "Should I use the same prompt across models?"
    a: "Start with one model, then test the rewrite on the others. Instruction-following differs, especially around formatting and refusals."
  - q: "How do I know the rewrite is better?"
    a: "Run the same test input through both versions and compare against your definition of done. A prompt is better only if the output is."
  - q: "What about system prompts?"
    a: "The same diagnosis applies, but keep persistent rules separate from the task. A system prompt should define behaviour, not carry every one-off instruction."
---
Most prompt problems are not missing words. They are missing decisions: who the output is for, what done looks like, and what the model should do when a fact is absent.

The optimizer names the failure before rewriting, so the result can be smaller and more reliable than the original.

Pair it with Humanize AI Text when the output is fine but the voice is not, or with Deep Research Synthesis when the prompt needs a research process rather than a format fix.
