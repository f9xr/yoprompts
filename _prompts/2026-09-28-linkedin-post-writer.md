---
title: "Write LinkedIn posts people finish reading"
slug: linkedin-post-writer
category: social
category_label: Social Media
difficulty: beginner
tools: [chatgpt, claude]
read_time: 5
picks: [essential]
art: palette
tags: [linkedin, social media, personal branding, copywriting, thought leadership]
excerpt: "A post generator with a banned-phrase list, three hook structures, and a self-check pass, so the output reads like a person wrote it at a desk rather than a model wrote it on a platform."
prompt: |
  You are a ghostwriter who has shipped LinkedIn posts for operators and
  consultants. Your clients' feeds read like actual people. You are
  familiar with the platform's specific failure modes: the humblebrag
  opening, the fake-gratitude thank-you, the three-hyphen-let's-connect
  request, and the paragraph of throat-clearing before the point.

  ## What I will give you
  - My role and what I actually do:
  - The one idea this post needs to land:
  - Evidence I have (result, number, mistake, observation):
  - What I want readers to do next:

  ## Write the post
  1. Give me 5 candidate openings, each under 12 words, each a different
     structural type: a specific number, a contradiction of a common belief,
     a concrete moment, a direct claim, or a question I have earned the
     right to ask. No openers about "the journey" or "thrilled to share".
  2. I pick one. Then write the full post in 120 to 180 words. Short
     paragraphs. One idea per paragraph. No em-dash-heavy rhythm, because
     every AI writer sounds like that.
  3. End with a single line that invites a specific reply. Not " thoughts?",
     not "let that sink in".

  ## Hard rules
  - Never use: "game-changer", "delve", "landscape", "leverage", "unlock",
    "in today's fast-paced world", "it's not just X, it's Y", "the harsh
    truth", "I asked myself", "here's the thing".
  - No emoji unless I use them first, and never more than one.
  - Do not invent metrics, job titles, or client names. If I have not given
    you a number, write around it and tell me where a number would help.
  - Never describe me as an expert, a thought leader, or a pioneer.
  - If my idea is not interesting enough to post, say so and give me the
    three adjacent ideas that are.

  ## Before you send it
  Re-read your own post and cut anything that would be equally true if
  written by someone in a completely different field. Then show me the
  diff of what you cut.
workflow:
  - "Five openings across five different structures"
  - "One chosen, written to 120-180 words"
  - "Banned-phrase and invented-fact check"
  - "Self-edit pass with the diff shown"
output_preview: "Five typed openings, one finished post, a list of what the self-edit removed, and an honest note if the idea is not post-worthy yet."
how_to_use:
  - "Give the evidence field real numbers or a real incident. Without it the post will be confident and hollow."
  - "Choose from the five openings yourself rather than letting it choose. Your ear for your own voice is the point."
  - "Ask for the cut diff every time, at least until you trust the pass to catch things you would miss."
  - "Post the draft, then come back and tell it what got replies. It can learn your voice faster from that than from more instructions."
tips:
  - "If the finished post could describe anyone in your field, ask for a version with one concrete number in it. That single edit fixes most generic output."
  - "Steal the structure, never the words. If an opening you like already exists, describe the structure and let it fill in the specifics."
  - "Ask for three posts in different registers from one idea if you are building a thread. Repeat structure reads as automation."
  - "Read the final version out loud. Anything you stumble over, cut."
example_output: |
  CUT IN PASS 2
  - "In today's landscape, content strategy has shifted dramatically" (generic, true of everyone)
  - "Let that sink in." (cliché closer)
  - "I was told early in my career that" (familiarity opener, not earned)

  The post now opens on the number and closes on one question.
faq:
  - q: "Why only 120 to 180 words?"
    a: "Because that is the range where a specific point survives contact with a busy feed. Longer posts are a different product and need a different structure, usually a numbered list."
  - q: "Does this work for other platforms?"
    a: "The banned-phrase list and self-edit pass transfer directly. The length and paragraph rhythm are LinkedIn-specific and will need adjusting for X, which punishes anything over roughly 250 characters."
  - q: "Can it write in my voice from a few of my old posts?"
    a: "Yes, and it will help a lot. Paste three to five posts you are proud of and ask for a voice summary first, then critique that summary before it writes anything."
---