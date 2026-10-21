---
title: "Ask your data a question and get an honest answer"
slug: chat-with-your-data
category: data
category_label: Data Analysis
difficulty: intermediate
tools: [chatgpt, claude, gemini]
read_time: 7
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: [weekly]
related: [deep-research-synthesis, seo-content-strategy, weekly-review-planner]
art: chart
tags: [data analysis, spreadsheet, csv, excel, analytics, chart, metrics, business intelligence, chat with data]
excerpt: "Paste a table, ask one question, and get an answer with its arithmetic shown, its assumptions named, and the rows that disagree with it left in."
prompt: |
  You are a data analyst who is trusted with decisions. Your habits are
  fixed: you show the arithmetic, you name the assumption behind every number,
  and you never let a clean answer hide a messy row.

  ## What I will give you
  - The data, pasted as a table, CSV, or pasted rows (name the columns):
  - The question I want answered (one question):
  - The decision this answer feeds:
  - Anything I already suspect, so you can check it rather than confirm it:

  ## Work through this in order

  1. **Read the data before answering.** State what each column is, how many
     rows there are, and the type of each column (number, date, category,
     free text). Call out anything that looks like an identifier, a total, or
     a duplicated row.

  2. **Check the data first.** Report missing values, mismatched units,
     impossible values, dates outside the range, and rows that appear twice.
     This section comes before the answer for a reason: a wrong answer built
     on broken rows is worse than no answer.

  3. **State the assumptions.** Every filter, threshold, time window and
     unit conversion you are about to apply, listed as a plain assumption
     before it is applied. If two readings of the data are possible, pick one,
     say so, and give the other as a sensitivity note.

  4. **Do the calculation.** Show the working: the filter applied, the rows
     that survived, the aggregation, and the arithmetic. A number with no
     visible path to it is a number nobody can check.

  5. **Give the answer.** The direct answer first, in two sentences, before
     any chart description or caveat. If the answer is "the data does not
     settle this", say exactly that.

  6. **Show the disagreement.** The rows, segments or periods that pull
     against the headline number, with how far they pull. Averages hide the
     thing that matters; the outliers are often the finding.

  7. **Say what the data cannot tell you.** At least one question the data
     cannot answer, and what you would need to collect to answer it.

  8. **One chart spec.** The chart that would make this obvious, described
     as chart type, axes, and the series to plot. Describe it in words. Do
     not invent numbers to draw.

  ## Rules
  - Never invent, impute, or smooth a value that was not in the data. If a
    cell is empty, it stays empty and you say so.
  - Never compute a percentage without naming the denominator, and never
    average an average without saying that you did.
  - If the question cannot be answered from the columns given, say which
    column is missing and stop. Do not approximate from a related column
    without asking.
  - Small sample sizes change what a number means. Say so when the rows
    behind an aggregate are few.
  - Correlation is not cause. If the question asks why, separate what the
    data shows from what you would need to test to know the cause.
  - No chart is more persuasive than the sentence underneath it.
workflow:
  - "Read the columns and count the rows"
  - "Report missing, mismatched and duplicated data before answering"
  - "List the assumptions, then show the arithmetic"
  - "Lead with the answer, then the disagreement, then the limits"
output_preview: "A column inventory, a data quality section, explicit assumptions, visible arithmetic, a two-sentence answer, the rows that disagree, and a chart described in words."
how_to_use:
  - "Paste the rows as plain text or a markdown table. Chat models read a fenced CSV block more reliably than a screenshot description."
  - "Ask one question per run. A question with three parts gets three shallow answers, and the arithmetic for each gets harder to verify."
  - "Give it the decision, not just the question. Knowing the answer changes what gets checked, so it decides what to report as a caveat."
  - "Read section 2 before section 4. If the data has a broken row, the clean-looking answer is the most dangerous output this prompt can give you."
tips:
  - "Ask for the row count first. A surprising number of results are a filter that was too narrow, and the row count exposes it immediately."
  - "Ask for medians and spread alongside averages. One extreme value moves an average and barely moves a median, and the gap between them is the story."
  - "Run the prompt twice on different questions over the same data. Inconsistent answers between runs mean the column interpretation drifted."
  - "Paste the same table into a spreadsheet and check one number yourself. Models are reliable at arithmetic and unreliable at column semantics."
example_output: |
  1. COLUMNS
  order_date (date), region (category), plan (category), mrr (number, currency),
  seats (number). 1,248 rows. order_id repeats: 14 duplicate rows.

  2. DATA QUALITY
  - region blank on 31 rows (2.5%)
  - mrr stored as text with a currency symbol on 6 rows
  - 3 order_dates fall outside the reporting window
  - 14 rows are exact duplicates and are excluded from every figure below

  3. ASSUMPTIONS
  - mrr parsed as a plain number, currency symbol stripped, blank treated as
    zero and counted separately
  - "active" means plan is not churned; the data does not say, so I did not
    filter on it
  - reporting window is the min and max order_date in the table

  4. CALCULATION
  1,203 rows after removing 14 duplicates and 3 out-of-window rows.
  MRR by region, ordered by total:
    EMEA     84,200   (37.4%)
    AMER    101,650   (45.1%)
    APAC     39,400   (17.5%)
    Total   225,250   (1,203 rows, mean 187.2)

  5. ANSWER
  AMER holds 45.1% of MRR across 1,203 rows. EMEA is second at 37.4%, and
  the gap between them is 17,450 per month.

  6. THE DISAGREEMENT
  Excluding the 31 rows with a blank region moves APAC from 17.5% to 19.6% and
  pulls AMER down to 43.0%. The blank-region rows are disproportionately
  APAC, so the regional split is more uncertain than the totals suggest.

  7. WHAT THE DATA CANNOT TELL ME
  It cannot say whether high-MRR accounts churn more. There is no churn or
  renewal date column, only order_date.

  8. CHART SPEC
  Horizontal bar chart. Y axis: region. X axis: MRR in currency. One series,
  sorted descending, with a fifth bar for the blank-region group shown
  separately rather than dropped.
faq:
  - q: "Can it work with an Excel file directly?"
    a: "Most chat tools will not parse a spreadsheet attachment without a code interpreter or a file upload tool attached. Convert to CSV or paste the visible range as text. With a code interpreter available, say so in your context and the prompt will ask for the file path instead of the rows."
  - q: "What if my data is too large to paste?"
    a: "Describe the schema and paste a representative sample, then say which rows were sampled. Be explicit about the sampling, because the honest answer to most questions depends on how representative those rows are, and the model cannot judge that without being told."
  - q: "Will it produce charts?"
    a: "It describes the chart in words: type, axes, series, and what the reader should see. It will not draw it, and it will not fake values to fill a chart spec. Use the spec in a spreadsheet or a plotting tool to render the real chart."
  - q: "How is this different from just asking a model to summarize my data?"
    a: "A plain summary gives you a conclusion with no visible arithmetic and no mention of the rows that disagree with it. The order of this prompt matters most at step 2, which reports data problems before the answer rather than after it, and at step 4, which shows the working so the number can be checked."
---
