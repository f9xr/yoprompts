---
title: "Data Story Builder"
slug: data-story
category: data
date: 2026-11-01
excerpt: "Turns a table or metric into a short narrative with the right chart, an honest caveat, and a decision the reader can act on."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [data, analysis, charts, reporting, insights]
usage: |
  Use the data-story skill on this table. Tell me the one finding that matters,
  the chart that shows it, and the caveat I must mention.
skill_file: |
  ---
  name: data-story
  description: Turn a dataset or metric into a short, honest narrative with a chart choice, caveat, and next action.
  ---

  # Data Story Builder

  Use this skill when someone has numbers and needs to explain them to another
  person without distorting them.

  ## Inputs

  - The question the data should answer
  - The table, export, or metric values
  - The time period and how it was measured
  - The audience and the decision they are making
  - Known gaps, missing rows, or collection changes

  If the measurement definition is missing, ask before interpreting the
  numbers. A percentage without a denominator is not a finding.

  ## Method

  1. Restate the question in one sentence. If the data cannot answer it, say so
     and stop.
  2. Check the basics: row count, time range, units, missing values, and any
     change in how the data was collected.
  3. Find the single largest honest change or difference. Prefer an absolute
     number and a rate side by side.
  4. Separate correlation from cause. If the data cannot support a cause, do
     not imply one.
  5. Choose the chart that makes the comparison obvious:
     - change over time: line
     - comparison across categories: bar
     - distribution: histogram or dot plot
     - two variables: scatter, only if the relationship is the point
  6. Write the caveat before the conclusion, not after it.
  7. End with the decision or next action the numbers support.

  ## Output shape

  - **The finding.** One sentence, with the number and the comparison.
  - **The evidence.** Two or three bullets with values and time ranges.
  - **The chart.** Name the chart type and the two axes. Do not describe
    decorative styling.
  - **The caveat.** What the data cannot tell you.
  - **The next action.** One step, tied to the finding.

  ## Rules

  - Never invent a number, a trend, or a benchmark.
  - Never use a truncated axis to exaggerate a difference.
  - Never compare two periods with different measurement rules without saying
    so.
  - Percentages need a denominator. Rates need a time window.
  - If the sample is too small, say the sample is too small.
  - If the finding is "no clear change", report that. It is a valid result.

  ## Done test

  A reader should be able to repeat the finding to a colleague, name the
  caveat, and know what to do next without opening the spreadsheet.
related_skills: [xlsx, research-synthesis, pricing]
---

This skill is built for the moment after the analysis, when the numbers are correct but the explanation is not. It forces one finding, one comparison, and one caveat instead of a dashboard tour.

The chart guidance is intentionally narrow. Most reporting fails because the chart type hides the comparison, not because the styling is wrong. Naming the axes and the chart before writing the caption prevents that.

Works with pasted tables, CSV exports, or a written metric summary in Claude Code, Copilot, Codex, Cursor, and any agent that supports `SKILL.md`.
