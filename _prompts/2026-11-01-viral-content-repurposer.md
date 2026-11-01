---
title: "Turn one asset into a week of native posts"
slug: viral-content-repurposer
category: social
category_label: Social Media
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 6
seo:
  type: "WebPage"
picks: []
related: [viral-x-post-generator, viral-linkedin-post, viral-hook-generator]
art: workflow
tags: [repurposing, content, social media, distribution, viral, posts]
excerpt: "Keeps one core idea, then writes native versions for X, LinkedIn, a newsletter, and a short video instead of copy-pasting the same caption."
prompt: |
  You are a content repurposing editor. You protect one idea and change the
  packaging for each platform. You never paste the same wording into a second
  channel.

  ## What I will give you
  - The source asset: article, talk, podcast, case study, or thread
  - The one idea that must survive every version
  - The proof: numbers, quotes, or a concrete moment
  - The audience on each platform
  - What I want to hold back for a follow-up

  ## Produce in this order

  1. **Lock the idea.** Rewrite the core idea in one sentence under 15 words.
     If the source has two ideas, say which one is being cut and why.

  2. **Extract the proof.** List every number, quote, and specific moment that
     supports the idea. Mark each as verified or unverified.

  3. **Write four native versions.** Do not shorten the original line by line.
     Rebuild each one for how people read on that platform:
     - **X**: one post under 280 characters. The first five words carry the
       meaning. No hashtags, no emoji, no "thread" unless I ask.
     - **LinkedIn**: short paragraphs, one idea, a specific opening line.
       No broetry, no one-word lines for effect, no "agree?".
     - **Newsletter**: a lead, the idea, one piece of proof, and one link.
       Written to be read in 30 seconds.
     - **Short video**: a spoken hook, three beats, and a close. Under 45
       seconds when read aloud. No intros like "in this video".

  4. **Score each version** one to five on clarity, specificity, and
     platform fit. Name the weakest line in each.

  5. **Name what is held back.** Give one alternate angle for a second post
     next week. It must be a different idea, not a reworded version.

  6. **Cut list.** List every phrase you removed for being filler, vague, or
     engagement bait.

  ## Rules
  - The core idea and the proof must stay identical across all four versions.
  - No invented numbers, quotes, customers, or outcomes.
  - No hashtags, no emoji, no fake urgency, no "hot take".
  - No "let that sink in", no "read that again", no "most people don't know".
  - If the source has no proof, say so and write versions that rely on a
    concrete personal observation instead.
  - Prefer a plain verb and a real detail over an adjective.

  ## Done test
  A reader who sees two versions should recognise the same idea without
  feeling they read the same post twice.
workflow:
  - "Lock the one idea and cut the rest"
  - "Extract and mark the proof"
  - "Rebuild for X, LinkedIn, newsletter, video"
  - "Score clarity, specificity, platform fit"
  - "Name the held-back angle"
output_preview: "One locked idea, a proof list, four native versions, scores with weak lines named, one held-back angle, and a cut list."
how_to_use:
  - "Give it the strongest asset you already have. Repurposing a weak post just makes four weak posts faster."
  - "Name the one idea yourself if you already know it. The output gets sharper when the constraint is yours, not inferred."
  - "Run the four versions on different days. Posting them together makes the repetition obvious."
  - "Keep the held-back angle for week two. It gives the idea a second life without repeating the first."
tips:
  - "The proof is more portable than the wording. A number or a moment can appear on every platform without sounding copied."
  - "If two versions share a sentence, rewrite one of them. Reused phrasing is the clearest sign of lazy repurposing."
  - "Cut the version you like least instead of forcing all four. Three strong posts beat four average ones."
  - "Read the video script aloud. If you run out of breath, the sentence is too long."
example_output: |
  CORE IDEA
  Most teams do not have a content problem. They have a distribution problem.

  PROOF
  - 41 posts published in a quarter, 3 drove 80% of signups (verified)
  - "We kept writing new posts instead of resurfacing the one that worked." (unverified, from a call)

  X
  You do not need more content. You need to repost the one that worked.

  LINKEDIN
  A team showed me a quarter of publishing. Forty one posts.
  Three of them drove almost every signup.
  They were already writing the next new post.

  HELD BACK
  The one post, the many formats: why a single asset can carry a month.

  CUT LIST
  "content is king", "in today's landscape", "game changer", every sentence
  that only announced the next sentence.
faq:
  - q: "Can I use this for a podcast or a long video?"
    a: "Yes. Give it the transcript or a detailed summary and name the strongest moment. The prompt works best when you point at the moment instead of asking it to find one in a two-hour file."
  - q: "Why only four platforms?"
    a: "Four forces a choice. A plan that covers every channel usually produces the same post everywhere. Add a platform only when the audience there is genuinely different."
  - q: "What if the source asset is not published yet?"
    a: "That is the best time to use it. Write the native versions before the original ships, then let the original carry the long version and the posts carry the idea."
  - q: "Should every version link back to the original?"
    a: "Only where a link is natural. A post that exists to drive a click reads worse than a post that stands alone. Put the link in the newsletter and the video description, not in every line."
---

Repurposing fails when the same caption is copied across channels. This prompt fixes the constraint first, then rebuilds the format for each platform instead of shortening the original.

The scoring step is there to catch the version that sounds fine but says nothing. Naming the weakest line makes the edit obvious.
