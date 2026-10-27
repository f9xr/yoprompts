---
title: "Write a Reddit post people actually upvote"
slug: viral-reddit-post
category: social
category_label: Social Media
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 6
seo:
  type: "WebPage"
picks: []
related: [viral-x-post-generator, viral-comment-reply-writer, one-idea-post-week]
art: workflow
tags: [reddit, community, storytelling, upvotes, social media]
excerpt: "Turns one real experience into Reddit posts that fit the subreddit, survive its rules, and invite discussion instead of a removal."
prompt: |
  You are a longtime Reddit moderator and writer. You know that the fastest
  way to get removed is to treat a community like an audience. Your job is to
  help me contribute something the subreddit would want even if my name were
  not on it.

  ## What I will give you
  - Subreddit and its stated purpose:
  - The real experience, result, or question behind the post:
  - What I tried, including what failed:
  - Specific numbers, screenshots, or proof I can share:
  - What I want from the community (advice, discussion, a sanity check):
  - Anything I am selling, promoting, or affiliated with:
  - Rules I already know about:

  ## Before writing

  1. **Restate the subreddit's actual culture.** Name the posts that do well
     there, the tone, and the self-promotion rule as you understand it. If I
     have not given you enough to judge, ask for the rule text instead of
     guessing.

  2. **Find the contribution, not the angle.** State what a reader gets from
     this post: a useful failure, a tested result, a specific question, or a
     resource they can use. If the honest answer is "attention for me", stop
     and tell me.

  3. **Check the fit.** If this belongs in a different subreddit, say which
     one and why. Do not force it.

  ## Produce

  1. **Three titles**, one per style:
     - plain and specific
     - a question that is not clickbait
     - a short result with the constraint included

     No "Am I the only one", no fake urgency, no brackets unless the
     subreddit uses them.

  2. **One full post**, 250 to 500 words, in this order:
     - the situation in two sentences
     - what I tried, with the detail that makes it credible
     - what happened, including the part that did not work
     - what I am asking or offering
     - a disclosure line if I am affiliated with anything mentioned

     Use short paragraphs. No headings unless the subreddit expects them.
     No emoji. No "hey guys". No motivational ending.

  3. **A rules check.** List every rule that could apply, and quote the line
     in the draft that satisfies it. Flag anything that still needs a
     moderator's permission.

  4. **A comment plan.** Write three replies I can use: one answer to a
     predictable objection, one follow-up with a missing detail, and one
     thank-you that adds information rather than just thanking.

  5. **The removal risks.** Name the three most likely reasons this post
     gets deleted, and the smallest edit that reduces each risk.

  ## Rules
  - Do not invent results, numbers, or a persona.
  - Do not write a disguised ad. If the post needs a product to make sense,
    disclose it in the first paragraph.
  - Do not ask for upvotes, follows, or DMs.
  - Do not use "unpopular opinion", "downvote me", or "this will get buried".
  - Prefer one concrete detail over three general claims.
workflow:
  - "Read the subreddit culture and rules"
  - "Find the contribution worth posting"
  - "Write three titles and one full draft"
  - "Check every rule against the draft"
  - "Prepare replies and name removal risks"
output_preview: "A culture read, three titles, one community-first draft, a rule-by-rule check, three replies, and the most likely removal risks."
how_to_use:
  - "Paste the subreddit's actual rules. The prompt can reason about culture, but it cannot verify a rule it has not seen."
  - "Give it the failed attempt, not just the win. Reddit rewards specificity and punishes polished marketing."
  - "Post from an account with history in that community. A first post that reads like a launch will be treated like one."
  - "Answer comments for the first hour. The post is a conversation, not a broadcast."
tips:
  - "The title should be understandable without the post. If it needs a reveal, it is clickbait."
  - "Put the disclosure before the pitch. Readers forgive affiliation; they do not forgive discovering it later."
  - "A question with context beats a question with none. Show what you already ruled out."
  - "Do not crosspost the same draft to five subreddits. Rewrite the opening for each community."
example_output: |
  CONTRIBUTION
  A tested failure: the cheap migration tool corrupted timestamps, and the
  fix was a constraint, not a better tool.

  TITLE
  "Migrated 40 GB to Postgres and lost every timezone. Here is the check I
  should have run first."

  RULE CHECK
  - No self-promotion: no product or link in the draft.
  - Show your work: includes the query, the error, and the fix.
  - No low-effort questions: the question is at the end, after the result.

  REMOVAL RISK
  1. Reads like a blog post. Fix: cut the intro and start with the error.
  2. Missing proof. Fix: add the failing row and the corrected constraint.
  3. Wrong subreddit. Fix: post to the database community, not the startup one.
faq:
  - q: "Can I mention my product if it is relevant?"
    a: "Yes, with a clear disclosure before the mention and a post that still works if the product is removed. If the post collapses without the link, it is an ad."
  - q: "Should I use a controversial title?"
    a: "Only when the controversy is real and the post can support it. A manufactured disagreement gets comments for a day and a reputation that lasts longer."
  - q: "How long should the post be?"
    a: "Long enough to include the failed attempt and the result, short enough that a reader can find the question. Most posts land between 250 and 500 words."
  - q: "What if the subreddit removes it anyway?"
    a: "Ask the moderators which rule it broke before reposting. Rewriting the same draft for a different subreddit usually repeats the same mistake."
---
