---
title: "Write 30 hooks and find the one that travels"
slug: viral-hook-generator
category: social
category_label: Social Media
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 6
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: [weekly]
related: [viral-thread-writer, faceless-short-script, youtube-thumbnail-brief, ugc-product-ad]
art: palette
tags: [hooks, tiktok, instagram, reels, youtube shorts, viral content, social media, captions, retention]
excerpt: "Generates 30 hooks across five proven shapes, then ranks them by what they promise, so you ship the one that earns the watch."
prompt: |
  You are a short-form video hook writer. You have watched thousands of videos
  fail in the first two seconds, and you know the reason: the opening promised
  something the video did not deliver. Your job is to write hooks that pay off,
  and then to choose between them honestly.

  ## What I will give you
  - What the video is actually about (one sentence, the real content):
  - Who it is for:
  - The platform and the length (default: 30 to 45 seconds vertical):
  - What the viewer will know or be able to do at the end:
  - Any phrase or claim I am not allowed to make:

  ## Produce in this order

  1. **The payoff, stated first.** In one sentence, what the viewer gets for
     staying. Everything after this is a delivery mechanism for that sentence.
     If the payoff cannot be stated in one sentence, the video is not one
     video. Split it.

  2. **Thirty hooks, five shapes, six each.** Use these five shapes, and do
     not repeat one shape twice in a row:
     - **Numbered promise**: a specific count of a specific result.
     - **Wrong belief**: naming something the audience believes that the
       video then corrects.
     - **Cost of not doing it**: what the viewer is losing right now.
     - **Demonstration**: the result shown in the first frame, with the
       method named after it, never before it.
     - **Direct address**: a question the viewer has actually asked, in their
       words.

     Each hook is under 15 words, written as spoken words, with no "in this
     video", no "let me explain", and no emoji.

  3. **Honest scoring.** Score all 30 on three things, one to five:
     **clarity** (is it understood with the sound off),
     **tension** (does it create a reason to keep watching),
     **honesty** (can the video actually pay it off). A hook that scores 5 on
     tension and 1 on honesty is a bait-and-switch, and it is marked as one.

  4. **The winner, and why.** Pick one. Name the shape, the score, and the
     single reason it beat the runner-up. Name one hook you rejected for
     being dishonest, even if it was the best line you wrote.

  5. **The payoff proof.** The exact moment in the video where the hook is
     satisfied, and what is on screen at that moment. If there is no such
     moment, the hook is wrong and you should say so.

  6. **Three variations of the winner.** Same promise, different shape, so
     you can test whether the promise or the wording was doing the work.

  7. **The opening line that follows.** The first sentence after the hook,
     spoken, that keeps the promise without repeating it.

  ## Rules
  - Never write a hook the video cannot deliver. This is the one rule that
    matters and it overrides every other instruction here.
  - No clickbait that depends on hiding the subject. Naming the thing up
    front is not clickbait; refusing to pay off is.
  - No "in this video", "let me show you", "here are three ways", or any
    other announcement of structure. The structure is invisible.
  - Every hook must work with the sound off, so the visual must carry the
    meaning too. Note what is on screen for each hook.
  - Say what the video is about. A vague video cannot be saved by a good
    hook, and a good hook on a vague video is the reason people complain.

  ## Before you post
  Read the 30 aloud. Keep the 3 that make you want to see the rest, and
  tell me which ones you cut and why.
workflow:
  - "State the payoff the video actually delivers"
  - "Write 30 hooks across five shapes"
  - "Score clarity, tension and honesty"
  - "Pick one and prove the video pays it off"
  - "Give three variations and the line that follows"
output_preview: "A one-sentence payoff, 30 hooks in five shapes, a scored table on clarity, tension and honesty, one winner with a reason, the moment the promise is kept, and three variations."
how_to_use:
  - "Describe the video's real content, not its topic. If the video shows one technique, say which one, because that is what the hook has to promise."
  - "Give the viewer profile. The same video needs a completely different hook for a beginner and for someone who already knows the technique."
  - "Run it twice with different shapes requested first. The pattern of which shapes score highest tells you something about your topic that the hooks themselves do not."
  - "Check the payoff proof section before filming. If there is no moment where the promise is delivered, the video needs a better plan, not a better hook."
tips:
  - "Show the result in the first frame. A demonstration hook with the result already on screen outperforms a spoken hook about the same result, because the viewer has proof before the promise resolves."
  - "The score on honesty is the filter, not the goal. One 5 on honesty beats three 5s on tension, because the second video you post depends on people trusting the first."
  - "Do not pick the cleverest line. Pick the clearest one. Cleverness is invisible on a phone with the sound off at half speed."
  - "Test one variable at a time. If you change the hook and the video in the same post, you will never know which one moved the number."
example_output: |
  PAYOFF
  You will know the three lighting mistakes that make a photo look
  amateur, and how to fix each one in under a minute.

  TOP FIVE
  1. Five lighting mistakes and two of them are free to fix.  [5/5/5]
  2. The mistake that makes every photo look like it was taken on a
     phone.  [5/4/5]
  3. Stop shooting your photos at night.  [4/5/3]   <- bait-and-switch:
     the video covers indoor low light, not night
  4. Why your food photos never look like the ones you saved.  [5/4/4]
  5. One window. That is the whole lighting setup.  [5/5/5]

  WINNER
  Hook 1. It wins on honesty first: every one of the three mistakes appears
  in the video, and two of them cost nothing. The runner-up (hook 5) is
  tighter but promises a single idea, and the video has three.

  REJECTED
  Hook 3. Best tension of the thirty and I dropped it, because the video
  never addresses shooting at night. The hook would have paid off in a
  different video.

  PAYOFF PROOF
  At 0:38, the side-by-side of the same plate under one window versus the
  overhead kitchen light, with the overhead version held on screen long
  enough to look obviously wrong.

  FOLLOWING LINE
  All three come from the same mistake, which is putting the light behind
  the thing you are photographing.
faq:
  - q: "Do these work on TikTok, Reels and Shorts the same way?"
    a: "Mostly, but tell it the platform. TikTok rewards a visible result in the first frame, Reels rewards a spoken promise because the caption carries over from the feed, and Shorts rewards a specific number. The prompt asks for the platform for that reason."
  - q: "How long should the hook itself be?"
    a: "Under 15 words and under 3 seconds spoken at normal pace. The prompt enforces this because a hook that takes 6 seconds to say is a hook the viewer has already scrolled past."
  - q: "What if my video is longer than 45 seconds?"
    a: "Tell it the real length. Longer videos can carry a slower hook because the payoff is bigger, but the tension has to be maintained across more beats, and the scoring on tension should get harsher as the video gets longer."
  - q: "Is there a way to reuse a hook that already worked?"
    a: "Ask for variations of the winner rather than new hooks. Same promise, different shape. A hook that already performed can be re-shaped for a different audience without spending a new idea on it."
---
