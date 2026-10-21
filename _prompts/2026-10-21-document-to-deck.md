---
title: "Turn any document into a deck that lands"
slug: document-to-deck
category: presentations
category_label: Presentations
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 7
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: []
related: [blog-site-design-system, deep-research-synthesis, one-idea-post-week]
art: workflow
tags: [presentations, slides, powerpoint, pitch deck, keynote, executive summary, storytelling, meetings]
excerpt: "Turns a report, brief or doc into a slide structure with one message per slide, speaker notes that add something new, and a hard slide limit you set."
prompt: |
  You are a presentation designer who has watched good decks die in a room.
  You know why: the deck was a document with the paragraphs cut up. You build
  decks where every slide carries one idea, the deck argues something, and
  the notes give the detail the slide could not hold.

  ## What I will give you
  - The source material (paste it, or summarize it):
  - Who is in the room and what they are there to decide:
  - How long I have to speak:
  - The one thing I need them to remember at the end:

  ## Produce in this order

  1. **Find the argument.** State in one sentence what this deck argues. Not
     what it covers. If the source material supports more than one argument,
     pick the one that matters in this room and say which parts of the source
     you are dropping to make room for it.

  2. **Design the spine.** The sequence of slides, each one a single idea, in
     the order a listener can follow. Give each slide a working title that is
     the idea itself, not a label. "Revenue grew 18 percent" is a slide
     title. "Revenue" is a heading, and headings put the work on the
     audience.

  3. **Set the slide budget.** How many slides the time allows, at a stated
     reading pace. If the material needs more slides than the time allows,
     say what you cut and offer it as an appendix instead.

  4. **Write each slide.** For every slide: the working title, the single
     idea in one sentence, what is on it (words, a chart, an image, a
     number), and what is deliberately not on it. Slides carry one idea. A
     slide that needs two titles is two slides.

  5. **Specify the visuals.** For each slide that needs a chart, say which
     chart type, what is on each axis, and what the reader should see. Never
     invent the data for a chart you cannot see.

  6. **Write the speaker notes.** Real notes, not a restatement of the slide.
     The notes carry the argument, the caveat, the detail, and the line you
     say while the slide is up. Each slide gets three to five sentences.

  7. **Write the transitions.** One sentence between consecutive slides
     that tells the audience why the next slide follows. Without them the
     deck becomes a list of slides.

  8. **Write the opening and the close.** The opening is one sentence that
     says why this room should care. The close is one sentence that says
     what you want them to do next. Neither one restates the deck.

  9. **Pressure test.** The two slides most likely to lose the room, and what
     to cut if you are running late. Name the slide that is safe to drop.

  ## Rules
  - Never invent a number, a date, a customer name, or a result. If the
    source does not contain it, write [NEEDS DATA] and keep going.
  - No slide may contain more than about 25 words of on-screen text.
  - Never write "Key takeaway" or "Agenda" as a slide title.
  - Every slide must have a reason to exist in this room. If it only makes
    sense in the document, it goes in the appendix.
  - No bullet points that are complete sentences. Bullets are fragments of
    thought; the sentence is what you say.
workflow:
  - "Find the one argument the deck makes"
  - "Lay out the spine with idea-as-title slides"
  - "Set the slide budget against the time"
  - "Write the slides, the visuals and the notes"
  - "Write the transitions, the opening, the close"
  - "Name the two slides that lose the room"
output_preview: "A one-sentence argument, a slide spine with idea titles, a slide budget, per-slide content with visuals and speaker notes, transitions, an opening, a close, and two droppable slides."
how_to_use:
  - "Give it the real decision the room is making. A deck built for a decision is shorter, sharper and survives contact with a skeptical question."
  - "Paste the source in full, even if it is long. Cutting the source before the prompt removes exactly the detail that makes a deck credible."
  - "Decide the time limit first. The slide budget only works if it comes from a real number of minutes."
  - "Take the droppable slides seriously. If you will not cut them, you will talk over them, and nobody reads a slide while you talk over it."
tips:
  - "If the deck needs more than about 12 slides for 15 minutes, the argument is too broad. Split it rather than shrinking the type."
  - "Speaker notes are where the real content lives. A slide that carries the whole argument in 12 words is usually a slide with nothing behind it."
  - "Ask for the appendix explicitly. Ten extra slides as appendix costs nothing and saves the two you might need."
  - "Put the number on the slide, not the trend. A slide that says 'growth accelerated' is asking the audience to do arithmetic in their heads while you talk."
example_output: |
  ARGUMENT
  We should spend the next quarter on reliability, not on the two features
  that are still being asked for, because churn is driven by outages.

  SPINE (11 slides, 15 minutes)
  1. "We lost 14 percent of accounts to outages this year"
  2. "The two most-requested features affect 4 percent of accounts"
  3. "Where the money actually went last quarter"
  4. "What reliability costs us per month"
  5. "The gap between what we promise and what we deliver"
  6. "Three fixes, ordered by cost to ship"
  7. "Fix one: the thing that breaks most often"
  8. "Fix two: the thing that breaks most expensively"
  9. "Fix three: the thing that takes longest"
  10. "What this quarter looks like if we do it"
  11. "What we are not doing, and what that costs us"

  SLIDE 4
  Title: "Reliability costs us 61,000 a month"
  On it: one number, one bar chart, three outages labelled.
  Not on it: the outage detail, which is in the notes.
  Notes: We measured this in March, and the figure is conservative because
  it only counts refunds, not the accounts that quietly stopped renewing.
  It is also the number the board already saw in the appendix, so nothing
  here is new to them.

  TRANSITION 4 to 5
  That is what reliability costs. Here is what we told customers it would
  cost, which is a different number.

  DROPPABLE
  Slide 2 and slide 9. Slide 2 is in the appendix, and slide 9 only matters
  if the room asks about sequencing, which it has not.
faq:
  - q: "Can it produce an actual PowerPoint file?"
    a: "No. It produces the structure, the slide content, the visual specs and the speaker notes, which is the part that needs a human. Paste the output into your tool of choice, or ask a coding model to turn the outline into a real deck file."
  - q: "How many slides should a 15 minute deck have?"
    a: "Between 8 and 12, and the prompt sets the budget from your speaking pace. The limit is not about the audience's attention, it is about you: past about 12 slides you start reading the slides instead of talking."
  - q: "What if the source material is a spreadsheet or a report with lots of numbers?"
    a: "Give it the numbers with their units and the period they cover, and ask for [NEEDS DATA] anywhere the source is silent. It will not invent figures, so any gap shows up as a visible marker you can fill."
  - q: "Should I give it my slide template?"
    a: "Not for structure, which is what this prompt is for. Once you have the structure, apply the template. Mixing the two at once tends to produce a deck that fits the template and says nothing."
---
