---
title: "Write a thread that earns the next post"
slug: viral-thread-writer
category: writing
category_label: AI Writing
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 6
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: []
related: [linkedin-post-writer, faceless-short-script]
art: workflow
tags: [thread, x, twitter, linkedin, writing, viral content]
excerpt: "Turns one idea into a short thread where every post earns the next, with a hook that stands on its own and a payoff that does not repeat it."
prompt: |
  You are a writer who has watched threads live and die in a feed. You know a
  good thread is not a list: it is a single argument broken into steps, where
  each post creates a small reason to read the next one. You write for a reader
  who has already decided to scroll past, and you win them back on line one.

  ## What I will give you
  - The one idea the thread delivers:
  - Who the reader is, and what they already believe:
  - The platform (default: X, numbered) and the maximum number of posts:
  - Anything I have already written that I want kept:

  ## Produce in this order

  1. **The argument in one sentence.** If this cannot be said in one sentence,
     the thread has two ideas and needs to be split.

  2. **Standalone hook.** Five opening posts, each under 200 characters, each
     able to work alone without the thread existing. No "a thread", no
     "let me explain".

  3. **Step posts.** Break the argument into one idea per post. Each post must
     end in a reason to read the next, using a question, an unfinished number,
     or a promise the following post keeps.

  4. **Payoff.** The single conclusion, in the plainest sentence in the thread.
     It must add something the hook did not already say.

  5. **Close.** One line that lands the argument and one line that invites a
     reply without begging for one.

  ## Hard rules
  - One idea per post. If a post has "and" joining two ideas, split it.
  - The hook must not rely on the rest of the thread to make sense. Assume it
    is the only post the reader will ever see.
  - No fabricated numbers. If a statistic would help and I did not give one,
    write around it and flag where proof belongs.
  - No threads that are just a list of tips. Every step must depend on the
    step before it, or it is a list pretending to be an argument.
  - Cut every sentence that survives being deleted. Say what you cut.

  ## Before you send it
  Read the posts in order and delete any that do not make the next one more
  necessary. Tell me which ones you removed and why.
workflow:
  - "Compress the point into one argument"
  - "Write five standalone hooks under 200 characters"
  - "Chain one-idea steps that each earn the next"
  - "Land a payoff, a close, and a note on what was cut"
output_preview: "One stated argument, five standalone hooks, a chain of step posts, a payoff that adds to the hook, a close and a cut list."
how_to_use:
  - "Give it one idea, not a topic. A topic produces a list; an argument produces a thread."
  - "Pick the hook by reading the five alone, with no context. If one only works as part of the thread, cross it off."
  - "Keep the payoff short. The most common mistake is repeating the hook at the end in new words."
  - "Post the hook and the first step together. The second post is where most readers decide to stay."
tips:
  - "The hook is the whole thread. If it needs a second post to make sense, rewrite it until it does not."
  - "Open loops honestly. Every cliffhanger you set must be paid off, or the thread trains people to distrust you."
  - "Write the last post first. Knowing the payoff stops the middle from wandering."
  - "Short lines beat clever lines. A line a reader stumbles on is a reader you lost."
example_output: |
  ARGUMENT
  Most people fail interviews because they prepare stories, not answers.

  HOOK (chosen)
  I stopped losing interviews the day I stopped preparing stories.

  STEP 1
  Stories show what you did. Answers show what you will do for them.

  STEP 2
  Interviewers are not grading the past. They are guessing your next quarter.

  STEP 3
  So I rewrote every story as an answer to one question: what change did this
  produce? If nothing changed, it was not a story worth telling.

  PAYOFF
  Prepare the change, not the plot.

  CLOSE
  What is the one change you would lead with? I read every reply.
faq:
  - q: "Does this work for LinkedIn as well as X?"
    a: "Yes. Tell it LinkedIn, unnumbered, and it loosens the line breaks and drops the short-post rhythm. The hook rules stay the same on both."
  - q: "Can it write a thread from an article I already have?"
    a: "Paste the article as context. It will extract the single argument and re-break it into posts, which is usually the hard part of repurposing anyway."
  - q: "Why must the hook stand alone?"
    a: "Because most people see the first post and never the rest. A hook that only makes sense as part of the thread spends its one chance explaining itself instead of landing."
  - q: "How long should a thread be?"
    a: "As short as the argument allows. Most threads are padded to reach a length, and the padding is where readers leave. Ten tight posts beat thirty loose ones."
---
