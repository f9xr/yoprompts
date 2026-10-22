---
title: "Find the clip that will go viral"
slug: viral-podcast-clip-finder
category: social
category_label: Social Media
difficulty: intermediate
tools: [chatgpt, claude, gemini]
read_time: 6
seo:
  type: "WebPage"
picks: []
related: [viral-hook-generator, faceless-short-script, youtube-thumbnail-brief]
art: palette
tags: [podcast, clips, shorts, repurposing, viral, captions, video]
excerpt: "Finds the 10 most clippable moments in a transcript, scores each for hook, emotion and payoff, then writes captions for the top three."
prompt: |
  You are a short-form editor who turns long interviews into clips people
  finish. You know a clip is not the best sentence in the episode. It is the
  smallest moment that still makes sense alone, creates tension, and pays it
  off before the viewer leaves.

  ## What I will give you
  - The transcript with timestamps, or a detailed episode summary:
  - The platform and target length (default: 30 to 60 seconds vertical):
  - Who the clip is for:
  - Topics or claims to avoid:
  - Whether captions will be burned in:

  ## Produce in this order

  1. **Ten candidate moments.** For each, give the timestamp range, the exact
     quote, and one sentence on why it stands alone. Do not pick moments that
     need the previous five minutes to make sense.

  2. **Score each candidate**, one to five, on **hook** (does the first line
     create a reason to stop), **emotion** (is there a stake, surprise, or
     disagreement), **payoff** (is the promise resolved inside the clip), and
     **context** (can a new viewer follow it without the episode). A high hook
     with low context is a bad clip, not a bold one.

  3. **Top three, fully edited.** For each winner:
     - Start and end timestamps, trimmed to the exact sentence.
     - The first on-screen line, under 12 words.
     - A caption for the post, under 220 characters, that adds context instead
       of repeating the quote.
     - The on-screen text beats, in order, with the moment each appears.
     - One b-roll or visual note if the talking head alone is static.
     - The reason this clip beat the next one.

  4. **The cut list.** Name two moments you rejected and the specific reason:
     needs setup, no payoff, too long, or misrepresents the speaker.

  5. **A series plan.** Group the three clips into a posting order, with one
     sentence on what each clip proves that the others do not.

  ## Rules
  - Never change the meaning of a quote by trimming the qualifier that made
    it true.
  - Do not add a claim the speaker did not make, even as a caption.
  - Keep the clip self-contained. If it needs a title card to explain the
    setup, it is not the right clip.
  - Write captions for sound-off viewing. The visual and the text must carry
    the point.
  - No fake reaction faces, no unrelated b-roll, no text that argues with the
    speaker.
workflow:
  - "Read the transcript for self-contained moments"
  - "List 10 candidates with exact timestamps"
  - "Score hook, emotion, payoff and context"
  - "Edit the top three with captions and text beats"
  - "Order the clips into a series"
output_preview: "Ten timestamped candidates, scored on hook, emotion, payoff and context, three fully edited clips with captions and on-screen text, plus a cut list and posting order."
how_to_use:
  - "Paste the transcript with timestamps. Without them the model can find the quote but cannot give you a cut point."
  - "Tell it the platform first. A 60-second LinkedIn clip and a 30-second TikTok clip need different openings."
  - "Ask for the cut list. The rejected moments tell you what the episode is actually about."
  - "Check every winner against the full transcript before editing. A clip that misstates the speaker is not worth the views."
tips:
  - "The best clip usually starts one sentence before the insight, not on the insight. The setup is what makes the payoff land."
  - "Choose disagreement over agreement. A calm consensus is hard to clip; a specific correction is easy."
  - "Burn in captions, but keep them under two lines. A wall of text is the fastest way to lose a sound-off viewer."
  - "Post the clearest clip first. The first clip teaches the platform who watches the second one."
example_output: |
  TOP CANDIDATE
  12:04 to 12:41
  "We stopped asking for more traffic and started asking why people leave.
  The answer was one form field."

  SCORES
  Hook 5, emotion 4, payoff 5, context 5.

  EDIT
  On-screen first line: "One form field was costing us every signup."
  Caption: "The fix was not more ads. It was deleting a field nobody needed.
  Full episode in the comments."
  Text beats:
  0:00 "One form field"
  0:04 "Every signup"
  0:11 "The fix"
  0:19 "What changed"

  WHY IT WON
  It opens with a cost, names the cause in the same breath, and resolves
  inside 37 seconds. The runner-up was funnier but needed the previous answer
  to make sense.

  REJECTED
  08:12: strong line, but the speaker was responding to a question that
  carried the context.
  21:30: good story, no payoff inside 60 seconds.

  SERIES ORDER
  1. The form field clip: proves the method is concrete.
  2. The pricing clip: proves it applies beyond signup.
  3. The hiring clip: proves it changes how the team works.
faq:
  - q: "What if I do not have a transcript?"
    a: "Generate one first, then check the timestamps against the audio. A summary is enough to find themes but not enough to choose exact cut points."
  - q: "How long should a clip be?"
    a: "Long enough to pay off the hook and no longer. For most interviews that is 30 to 60 seconds. A 90-second clip needs a second turn, not a slower first one."
  - q: "Should every clip have a hook overlay?"
    a: "Only if the first spoken line is not already clear with the sound off. A redundant overlay distracts from a strong opening."
  - q: "Can I use the same clip on every platform?"
    a: "Re-cut it. The quote can stay, but the first frame, caption, and length should change. Cross-posting the same file is why the second platform underperforms."
---
