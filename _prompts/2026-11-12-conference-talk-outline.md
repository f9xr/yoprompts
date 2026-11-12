---
title: "Outline a conference talk that survives the first five minutes"
slug: conference-talk-outline
category: presentations
category_label: Presentations
difficulty: intermediate
tools: [chatgpt, claude, gemini]
read_time: 6
seo:
  type: "WebPage"
picks: []
related: [document-to-deck, viral-conference-talk-pitch, demo-video-replica]
skills: [writing-guidelines, research-synthesis]
art: workflow
tags: [conference talk, presentation, speaker notes, storytelling, outline, public speaking]
excerpt: "Turns a topic and an audience into a talk outline with one argument, a concrete opening, a demo that earns its slot, and speaker notes that fit the time."
prompt: |
  You are a conference program reviewer who has watched hundreds of talks
  and remembers about four. Help me build one that earns its slot.

  ## What I will give you
  - The conference, audience, and what they already know:
  - The talk length and format (keynote, breakout, lightning):
  - The one thing I want the room to repeat afterwards:
  - The evidence I have: data, demo, story, or none:
  - What I am tempted to include that probably does not fit:

  ## Produce in this order

  1. **The argument.** One sentence the audience could repeat. If it needs a
     slide to explain, it is not the argument yet.

  2. **The opening 60 seconds.** A concrete moment: a number, a failure, a
     customer quote. No agenda slide, no biography, no "who am I". Say what
     the audience will be able to do by the end.

  3. **The structure.** Three to five movements, each with a claim and the
     evidence that carries it. Name the transition between each pair.

  4. **The demo or artifact.** What it shows, what it deliberately does not,
     and the two failure modes to rehearse around. If there is no demo, say
     what replaces it.

  5. **The cut list.** What I should drop from the tempting list, and why.
     Be specific about what it costs to keep.

  6. **The close.** The sentence to end on, and the one action to ask for.
     Do not end on "questions?".

  7. **Speaker notes.** Per slide: the point, one line of evidence, and the
     transition. Under 40 words each.

  ## Timing model
  - One idea per 90 seconds for a technical audience.
  - A demo gets 15 percent of the slot and never the last five minutes.
  - Leave 10 percent unallocated for the room.
  - A 20-minute slot has room for three movements, not five.

  ## Rules
  - Do not open with an agenda or a biography.
  - Do not put two arguments in one talk.
  - Do not include a slide that only exists to show work.
  - Do not promise a demo you cannot run offline.
  - Do not write speaker notes longer than the slide.
  - Do not invent data, quotes, or audience knowledge.

  ## Before you finish
  Check the opening against the close. If the last slide does not answer the
  first sentence, the talk has two subjects and needs one removed.
workflow:
  - "State the single argument the audience should repeat"
  - "Write the first 60 seconds around a concrete moment"
  - "Build three to five movements with named transitions"
  - "Decide what the demo proves and what it must not attempt"
  - "Cut the tempting material that does not carry the argument"
  - "Write speaker notes and a close that asks for one action"
output_preview: "One argument, a concrete opening, three to five movements with evidence and transitions, a demo plan with failure modes, an explicit cut list, and speaker notes under 40 words per slide."
how_to_use:
  - "Give the audience's actual level. A talk that explains the basics to experts loses the room in the first minute, and the reverse is worse."
  - "Name the one thing you want repeated afterwards. The prompt will cut anything that does not serve it."
  - "List what you are tempted to include. That list is where the talk usually goes wrong, and the prompt is asked to argue with it."
  - "State the real evidence you have. If there is no data and no demo, the prompt will build the talk around a story instead of inventing proof."
tips:
  - "The opening is the whole talk. Rehearse the first 60 seconds more than any other part."
  - "A demo that fails live is survivable; a demo that fails and was never rehearsed offline is not. Record a backup."
  - "Transitions are what make an outline feel like an argument instead of a list. Write them as sentences."
  - "If the cut list feels painful, the talk was probably two talks."
  - "The close should name the next action, not ask whether there are questions."
example_output: |
  ARGUMENT
  Most teams do not have a performance problem; they have a measurement
  problem, and they are optimising the wrong page.

  OPENING (60 seconds)
  A checkout page that scored 98 in the lab and lost 12 percent of mobile
  users. Show the two numbers side by side. Then: "By the end you will know
  which number to trust and what to fix first."

  MOVEMENTS
  1. Lab scores measure the machine, not the user.
     Evidence: the same page at p75 on a mid-range Android.
     Transition: "So what does the user actually experience?"
  2. Field data names the element.
     Evidence: LCP element breakdown from three real sites.
     Transition: "Once you know the element, the fix is usually small."
  3. The fixes that move a field metric.
     Evidence: three before-and-after windows.
     Transition: "Which brings us to what you can do Monday."

  DEMO
  Show one page before and after, with the field window. Do not live-edit
  code on stage. Record a backup and keep it one keystroke away.

  CUT LIST
  - The Lighthouse tour: 6 minutes, proves nothing the audience doubts.
  - The framework comparison: starts arguments, serves no claim.
  - The tooling setup: belongs in the handout.

  CLOSE
  "Measure the element your users wait for, not the score you can screenshot.
  Pick one page this week and check its field data."

  SPEAKER NOTES
  Slide 4: "98 in the lab. 12 percent lost in the field. Same page." (7 words)
faq:
  - q: "How many slides should a 20-minute talk have?"
    a: "Fewer than you think. The prompt works from movements rather than slide count, because a talk with 40 slides and three ideas is a worse talk than one with 12 slides and three ideas. Build the argument first, then give each claim the slides it needs."
  - q: "What if I am not allowed to show customer data?"
    a: "Replace it with a shape rather than a number: an index, a percentage change, or a redacted screenshot. The prompt will keep the argument intact and mark where the evidence is anonymised, instead of inventing a plausible figure."
  - q: "Should the outline include jokes or audience interaction?"
    a: "Only if they carry the argument. The prompt leaves interaction out by default because a poll that does not change the next slide costs two minutes and adds nothing. Ask for it explicitly if the format expects it."
  - q: "Can I reuse this outline for a written article?"
    a: "Yes, and it usually improves the article. The argument, the opening, and the movements map directly onto a post; the demo becomes a code block and the speaker notes become section headings."
---

Conference talks usually fail before the slides exist: the speaker picks a topic instead of an argument, then fills twenty minutes with material that proves they did the work.

This prompt starts from the sentence the audience should repeat, then removes everything that does not support it. The cut list is the part most people skip and the part that decides whether the talk lands.

Pair it with Document to Deck when the outline becomes slides, or Viral Conference Talk Pitch when the talk still needs to be accepted.
