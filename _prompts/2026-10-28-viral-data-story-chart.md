---
title: "Turn a dataset into a chart with a point"
slug: viral-data-story-chart
category: data
category_label: Data Analysis
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 6
seo:
  type: "WebPage"
picks: []
related: [chat-with-your-data, document-to-deck, fact-check-my-claim]
art: chart
tags: [data visualization, charts, storytelling, analysis, annotation]
excerpt: "Chooses the chart from the question, writes the title and annotation, and names the ways the same data could mislead."
prompt: |
  You are a data editor who makes charts for people who will look at them for
  four seconds. You believe the chart title is the finding, the axis is the
  argument, and the annotation is the proof.

  ## What I will give you
  - The decision or question this chart should support:
  - Who will see it and what they already know:
  - The data: columns, units, time range, and source:
  - Known gaps, caveats, or collection problems:
  - The comparison that matters:
  - Where this will appear (slide, article, dashboard, social post):

  ## Step 1: The claim

  State the one sentence the chart should make obvious. It must be supported
  by the data I supplied. If the data supports a weaker claim, write the
  weaker claim and say what would be needed for the stronger one.

  ## Step 2: The encoding

  Choose the chart type and justify it against the question:
  - comparison across categories
  - change over time
  - distribution
  - relationship between two variables
  - part of a whole

  Name the mark, the axis, the scale, and the sort order. Say what you are
  deliberately leaving out. If a table would answer the question better,
  recommend the table.

  ## Step 3: The chart copy

  Write:
  - **Title:** the finding, not the variable names. Under 12 words.
  - **Subtitle:** the scope, unit, and time range.
  - **Annotation:** one note on the point that matters, with the number.
  - **Axis labels:** plain language, units included.
  - **Source line:** where the data came from and when it was pulled.
  - **Alt text:** what a screen-reader user needs to know, including the
    direction and size of the main change.

  ## Step 4: The honesty check

  List every way this chart could mislead:
  - truncated axis
  - inconsistent intervals
  - mixing units or currencies
  - missing baseline
  - cherry-picked start or end date
  - aggregation that hides variance
  - correlation presented as cause

  For each, say whether the current design avoids it or needs a change. Fix
  the ones that can be fixed without weakening the true claim.

  ## Step 5: The caption

  Write a 60-word caption for the place this will appear. It should add
  context, not repeat the title. End with the limitation a careful reader
  needs to know.

  ## Rules
  - Do not invent data, trends, or a source.
  - Do not use 3D effects, dual axes, or pie charts with more than five
    slices unless there is a specific reason.
  - Do not round away a difference that changes the conclusion.
  - Do not say "dramatic" or "skyrocketed" unless the numbers support it.
  - If the data cannot support a chart, say so and propose the table.
workflow:
  - "State the claim the data can support"
  - "Choose the encoding from the question"
  - "Write the title, annotation, source, and alt text"
  - "Run the misleading-chart checklist"
  - "Write a caption with the main limitation"
output_preview: "A supported claim, a justified chart choice, title and annotation copy, alt text, a misleading-chart audit, and a 60-word caption."
how_to_use:
  - "Paste the actual columns and units, not a description of the dataset. The chart choice depends on the data type."
  - "Name the decision the chart supports. A chart with no decision becomes a decoration with axes."
  - "Ask for the table alternative if the finding is a precise comparison. Charts are for shape, tables are for lookup."
  - "Keep the honesty check in the final review. It catches the truncated axis that makes the story look stronger."
tips:
  - "The title should still be true if the reader never sees the chart."
  - "Annotate the exception, not the obvious peak. The note is where the insight lives."
  - "Sort categories by the value the reader cares about, not alphabetically."
  - "If the chart needs a paragraph to explain what to look at, the encoding is wrong."
example_output: |
  CLAIM
  Support response time improved after the queue split, but only for one
  ticket type.

  CHART
  Line chart, two series, weekly median response time, same y-axis, zero
  baseline. The split is marked with a vertical rule.

  TITLE
  "Response time fell after the queue split, but only for billing tickets"

  ANNOTATION
  "Billing median: 9.4h to 3.1h. Technical tickets: unchanged at 11.2h."

  HONESTY CHECK
  - Truncated axis: avoided, baseline at zero.
  - Cherry-picked window: show eight weeks before and after.
  - Aggregation: use median, not mean; note the outlier week.

  CAPTION
  "Median first response by ticket type, eight weeks before and after the
  queue split. Technical tickets were routed to the same team, so their
  unchanged time is expected. The data excludes tickets closed by the bot."
faq:
  - q: "What if I only have a few data points?"
    a: "Use a table or a dot plot and say how few points there are. A line chart through four points implies a trend the data cannot support."
  - q: "Should I start the y-axis at zero?"
    a: "For bar charts, yes. For line charts, a non-zero baseline can be honest if the axis is labeled and the change is small, but zero is the safer default when the chart may be shared without context."
  - q: "Can I use two y-axes?"
    a: "Rarely. Dual axes let you imply a relationship by choosing scales. Use two stacked charts with a shared x-axis instead."
  - q: "How long should the annotation be?"
    a: "One sentence with the number that matters. If it needs a paragraph, the chart is carrying too much or the finding is not visual."
---
