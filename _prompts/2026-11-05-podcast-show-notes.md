---
title: "Turn a podcast episode into show notes people use"
slug: podcast-show-notes
category: writing
category_label: AI Writing
difficulty: beginner
tools: [chatgpt, claude, gemini]
read_time: 6
seo:
  type: "WebPage"
picks: []
related: [viral-podcast-clip-finder, viral-thread-writer, one-idea-post-week]
art: palette
tags: [podcast, show notes, transcript, content, repurposing, summary]
excerpt: "Turns a transcript into a summary, timestamp chapters, quotable lines, and a resource list without inventing a single detail."
prompt: |
  You are a podcast editor writing show notes from a transcript. You are
  accurate before you are interesting. A wrong name costs more than a missing
  chapter.

  ## What I will give you

  - The episode transcript, with timestamps if available
  - Guest name, role, and how they spell it
  - Links mentioned in the episode
  - The show's usual format and length
  - The one action we want listeners to take

  If a name or link is unclear in the transcript, mark it unclear. Do not
  guess.

  ## Produce

  1. **Title.** Under 70 characters, specific, no clickbait.
  2. **Summary.** 60 to 90 words, written from the episode, not the bio.
  3. **Chapters.** Five to eight timestamped moments with a short title.
  4. **Quotes.** Five lines that stand alone, attributed.
  5. **Resources.** Every person, company, book, tool, and link mentioned.
  6. **Guest bio.** Only facts the guest supplied.
  7. **CTA.** One action.

  ## Rules

  - Never invent a quote, timestamp, name, or resource.
  - Use the guest's spelling and title.
  - Keep the host's voice in the summary.
  - Do not pad the notes with generic statements.
  - Mark inaudible passages as unclear.
  - Use the transcript order for chapters, even if the topic jumps.

  ## Output format

  Return Markdown ready for the podcast host. Put chapters in a table with
  time and title. Put resources in a bullet list, and mark anything not linked
  in the episode.
workflow:
  - "Read the transcript for the episode arc"
  - "Pull the moments that change the conversation"
  - "Write the summary and the title"
  - "Build and verify chapter timestamps"
  - "List quotes, resources, and the single CTA"
output_preview: "A complete show-notes block with a specific title, factual summary, timestamped chapters, attributed quotes, and a verified resource list."
how_to_use:
  - "Provide the guest's name spelling and links. Those are the details a model is most likely to get wrong."
  - "Give the real transcript, not a summary. Show notes built from a summary lose the specific moments that make the episode worth listening to."
  - "Check every timestamp against the audio before publishing."
tips:
  - "Chapters are the most-used part of show notes. Make each title a reason to jump."
  - "A quote should make sense with no surrounding context. If it needs setup, it is not a pull quote."
  - "Mark a guessed name as unclear. A correction after publishing is more expensive than a gap."
  - "One CTA. A newsletter, a review, and a follow all in one block cancels each other out."
example_output: |
  TITLE
  Why small teams ship faster with fewer meetings

  SUMMARY
  Guest Maya Chen explains why her five-person team replaced weekly status
  meetings with written updates... (72 words)

  CHAPTERS
  00:00  The meeting that should have been an email
  04:12  How written updates changed decisions
  11:40  The cost of a status meeting
  19:05  What breaks when the team grows

  QUOTES
  "A status meeting is a tax on people who already know the status." - Maya Chen
faq:
  - q: "Can it work without timestamps?"
    a: "It can produce a summary and quotes, but chapters need timestamps. If the transcript has none, add them from the audio or skip the chapter section."
  - q: "How long should show notes be?"
    a: "Long enough to help a listener decide and jump. A short summary, five to eight chapters, and a resource list is usually enough."
  - q: "Should show notes include the full transcript?"
    a: "Usually no. Link to a separate transcript page for accessibility and search, and keep the show notes scannable."
  - q: "What if the guest says something controversial?"
    a: "Quote accurately and attribute it. Do not soften the quote, and do not add context the guest did not provide."
---
Show notes are a navigation tool. Listeners use them to decide whether to press play and where to jump, and search engines use the specific names and topics to index the episode.

The prompt refuses to invent names or timestamps because a wrong attribution is worse than a missing chapter, and it keeps the output in the host's voice instead of press-release language.

Pair it with Viral Podcast Clip Finder to choose the moments worth clipping, or with One Idea Post Week to turn the episode into a week of posts.
