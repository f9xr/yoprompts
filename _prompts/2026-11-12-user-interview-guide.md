---
title: "Write a user interview guide that does not lead the witness"
title_tag: "Write a user interview guide that does not lead the witness"
slug: user-interview-guide
category: research
category_label: Research
difficulty: intermediate
tools: [chatgpt, claude, gemini]
read_time: 6
seo:
  type: "WebPage"
picks: []
related: [deep-research-synthesis, meeting-to-action-plan, fact-check-my-claim]
skills: [customer-interview-synthesis, research-synthesis]
art: workflow
tags: [user research, interviews, discovery, product, questions, qualitative research]
excerpt: "Builds a 30-minute interview guide around past behaviour, with questions that do not lead, a screening rule, and a note-taking format you can synthesise later."
prompt: |
  You are a user researcher who runs discovery interviews for product teams.
  You care more about what happened last time than what people say they
  would do.

  ## What I will give you
  - The decision this research should inform:
  - Who I plan to talk to, and how they are recruited:
  - What I already believe, and what would change my mind:
  - The product area and the workflow around it:
  - Time available per interview:

  ## Produce in this order

  1. **Decision and learning goals.** The decision, then three to five
     things I need to learn to make it. If a question does not map to a
     learning goal, it does not belong in the guide.

  2. **Screening rule.** Who is in, who is out, and the one question that
     separates them. Exclude people who cannot describe a recent instance.

  3. **Warm-up.** Two questions that establish the last time they did the
     thing, in their own words.

  4. **Core questions.** Five to seven, each about a specific past episode.
     Ask for the last time, the steps, the workaround, and what happened
     next. No hypotheticals, no "would you", no feature pitches.

  5. **Probes.** Three follow-ups that work on almost any answer: "What
     happened next?", "What did you do instead?", "How did you decide?".

  6. **Closing.** The question that usually surfaces the real problem, and
     the ask for a follow-up.

  7. **Note-taking format.** A table with columns for quote, behaviour,
     context, and the learning goal it serves.

  ## Rules
  - Ask about behaviour, not opinions about future behaviour.
  - Never ask "would you use" or "do you like".
  - Never describe the solution before the last five minutes.
  - Do not ask two questions in one sentence.
  - Do not ask a question the answer to which is yes or no.
  - Do not invent a persona or a finding.
  - Keep the guide to one page. It is a script, not a survey.

  ## Before you finish
  Read each question and ask: could two different people answer it with
  "yes" and give me nothing? Rewrite those.
workflow:
  - "Name the decision the interviews must inform"
  - "Turn it into three to five learning goals"
  - "Write a screening rule that requires a recent experience"
  - "Draft past-tense questions with no solution in them"
  - "Add probes and a closing question that surfaces the real problem"
  - "Set up a note table that maps quotes to learning goals"
output_preview: "A one-page guide with learning goals, a screening rule, five to seven past-behaviour questions, reusable probes, a closing question, and a note-taking table built for synthesis."
how_to_use:
  - "State the decision explicitly. Interviews run without a decision produce interesting quotes and no direction."
  - "Tell it what you already believe. The guide will include a question that could actually contradict you."
  - "Recruit for recency. Someone who last did the task two years ago is describing a different product."
  - "Pilot the guide with one person outside the sample and cut any question that produced a monologue."
tips:
  - "The best question in user research is some version of 'walk me through the last time'."
  - "Silence is a technique. After an answer, wait four seconds before probing; the second sentence is usually the useful one."
  - "If a participant asks what you are building, answer briefly and return to their experience. Pitching ends the interview."
  - "Take notes in the participant's words, not your interpretation. The interpretation belongs in synthesis, where it can be tested."
  - "Five interviews per segment usually reveal the pattern; a sixth rarely changes the guide, only the confidence."
example_output: |
  DECISION
  Whether to invest next quarter in automating expense approval or in
  improving the import flow.

  LEARNING GOALS
  1. How approval actually happens today, including off-tool workarounds.
  2. Where the delay comes from: the approver, the data, or the policy.
  3. What people do when the tool blocks them.
  4. Whether the import is a recurring pain or a one-time setup cost.

  SCREENING
  In: submitted at least three expense reports in the last 60 days.
  Out: finance staff who administer the policy but do not submit reports.
  Screener: "When did you last submit an expense report?"

  WARM-UP
  - "Take me back to the last expense report you filed. When was it?"
  - "What was the reason for the expense?"

  CORE QUESTIONS
  - "Walk me through it, starting from the receipt."
  - "Where did you have to leave the tool?"
  - "Who else was involved, and how did you reach them?"
  - "What did you do when it was rejected or stuck?"
  - "How long did it take from submission to reimbursement?"
  - "What did you do differently the time before that?"

  PROBES
  - "What happened next?"
  - "What did you do instead?"
  - "How did you decide that?"

  CLOSING
  "If you could change one step, which one, and what would it look like?"
  Then: "Can I follow up if something you said needs a second look?"

  NOTES
  | Quote | Behaviour | Context | Learning goal |

faq:
  - q: "How many questions should an interview guide have?"
    a: "Five to seven core questions for a 30-minute interview. More than that turns the session into a survey and the participant stops going deep. The guide leaves room for probes, which is where most of the value comes from."
  - q: "Can I use this for usability testing?"
    a: "Partly. The screening, warm-up, and probing structure carry over, but usability testing needs tasks and observation notes rather than discovery questions. Ask the model for a task-based guide instead and keep this one for problem discovery."
  - q: "What if stakeholders want to ask about the feature idea?"
    a: "Keep it for the last five minutes and label it as a reaction, not evidence. The prompt excludes solution talk by default because early pitching teaches participants what answer you want."
  - q: "How do I avoid leading questions when I know the product well?"
    a: "Ask about the last real episode and let the participant name the steps. The prompt writes questions in past tense for that reason; a question about a specific event is much harder to lead than one about a general habit."
---

Interview guides fail in a predictable way: they ask people to predict their own future behaviour, then the team treats the answers as evidence. This prompt keeps every question in the past tense and tied to a recent episode.

The learning-goal mapping is the second discipline. A question that does not serve a decision is a question that produces a quotable line and no direction.

Pair it with Customer Interview Synthesis once the notes exist, or Deep Research Synthesis when the interviews are one source among several.
