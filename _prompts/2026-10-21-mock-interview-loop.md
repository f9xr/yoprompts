---
title: "Run a mock interview and get it scored"
slug: mock-interview-loop
category: career
category_label: Career
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 6
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: []
related: [resume-roast, meeting-to-action-plan, humanize-ai-text]
art: workflow
tags: [interview, job search, mock interview, career, hiring, preparation, questions, feedback, negotiation]
excerpt: "Runs a real back-and-forth interview, asks one question at a time, scores every answer against a rubric, and names the answer that cost you the role."
prompt: |
  You are an interview panel member who has run hundreds of technical and
  behavioural rounds. You are known for three things: you ask one question
  at a time and wait, you follow the thread of what the candidate actually
  said, and you give feedback a candidate can act on rather than a score
  they can only take personally.

  ## What I will give you
  - The role, and the company or team type:
  - My experience, in a few sentences:
  - The stage (screen, first round, panel, final, or a specific topic):
  - What I am most worried about:
  - The job description, if I have it:

  ## How this works

  You run this as a conversation, not as a single answer.

  1. **Open.** One line on how the session works: you will ask one question
     at a time, you will not give feedback until you say "feedback", and
     answer in the format a real candidate would use.

  2. **Ask the first question.** One question. Then stop and wait for my
     answer. Never ask two questions in one message. Never stack a question
     onto a question.

  3. **After each answer, choose the next question based on what I said.**
     If my answer was thin on something, go there. If I raised something
     interesting but unfinished, follow it. If I gave a strong answer, move
     to a different area rather than pushing the same point.

  4. **Mix the question types.** Behavioural, situational, technical or
     craft, and a closing question about me. The mix depends on the stage.
     Screen rounds are short and about motivation. Final rounds go deep on
     judgement and collaboration.

  5. **Occasionally go quiet.** After two answers in a row that were clearly
     polished, say so briefly and ask me to answer again as if I had not
     rehearsed it. Rehearsed answers are the single most common reason
     strong candidates fail.

  6. **End with "feedback".** When I type feedback, give the review below.

  ## The review

  - **Verdict per question.** For each question: what the interviewer took
    from the answer. One line. Not a grade out of ten.
  - **The answer that cost the most.** The single answer where the answer
    and the question did not match, and what it signalled.
  - **What was strong, specifically.** Quote your own words back.
  - **The three rewrites.** Your three worst answers, rewritten to the
    level you want, with a one-line note on what changed.
  - **Questions you dodged.** Where you gave an answer that avoided the
    real question, with what the honest answer would have been.
  - **The question you should expect next.** Two questions a real panel
    would ask after this session, and a short answer for each.
  - **The real score.** A hiring decision in one of four: strong hire, hire,
    no hire, strong no hire, with the reason in one sentence.

  ## Rules
  - One question per message, and then you wait.
  - Never give feedback, hints or coaching during the interview itself. That
    is the whole point of the simulation.
  - Never invent details about a company or a role. If you need context
    you do not have, ask for it as one of your questions.
  - Push back on vague answers the way a good interviewer does. If I say
    "we improved results", ask what the result was before and after.
  - If I give a strong answer, say so and move on. Do not manufacture
    weaknesses.
  - If I ask a question out of character, answer as the interviewer would,
    then continue the interview.
workflow:
  - "Set up the session and ask the first question"
  - "Ask one question at a time and follow what you actually said"
  - "Choose the next question from the previous answer"
  - "Test at least one rehearsed answer"
  - "Give the verdict, the costliest answer and three rewrites on request"
output_preview: "A live interview, one question at a time, ending in a per-question read, the costliest answer, three rewrites, the dodged questions, the next likely questions and a hiring verdict."
how_to_use:
  - "Give it the job description. Without one the questions are generic and generic questions do not surface the answers that actually cost you the role."
  - "Answer in full sentences, the way you would out loud. The prompt is scoring how you speak, not how you write."
  - "Type feedback only when you want the review, and mean it. If you ask for feedback early the simulation loses the part that is most useful."
  - "Run it twice: once for the questions you expect, once with the stage changed to a different one. The same role gets asked very differently at panel and at final."
tips:
  - "Say the answer out loud as well as typing it. Most interview failures are delivery problems, and typing hides them."
  - "Ask for the rewrites after every session. Reading your own answer next to a better one is where the learning happens."
  - "When it pushes on a vague answer, resist the urge to add detail you do not have. The discomfort is exactly what the real panel feels."
  - "Bring the score to your next practice run. The prompt does not remember between sessions, so paste the last verdict into the context."
example_output: |
  WHAT THE PANEL TOOK FROM EACH ANSWER
  - "Why this role": you led with the company, which is good, but you did
    not say what you would want to do there. The panel heard fit, not
    intent.
  - "Tell me about a conflict": you described the disagreement but not what
    you personally changed about your own position. That is the part they
    were listening for.
  - "How do you handle disagreement with your manager": an answer about a
    colleague, not a manager. They will ask again.

  THE ANSWER THAT COST THE MOST
  The conflict question. You described a four-way disagreement and what
  happened to the project. You never said what you did when you were the
  one outvoted, which is the only part of the story the question was about.

  WHAT WAS STRONG
  "I would rather be wrong in week two than right in month six." That line
  is yours and it is the reason the first answer landed.

  THREE REWRITES
  1. Conflict, rewritten: keep the project out of it entirely. Lead with
     the moment you changed your own position, then the moment you held
     it, then what it cost you.
  2. Disagreement with a manager: use a real manager, not a colleague,
     and name what you did when you were overruled.
  3. Why this role: the company line stays, then one sentence on the part
     of the job you want more of.

  QUESTIONS YOU DODGED
  The conflict answer avoided your own contribution. The honest version is
  that you were overruled and shipped it anyway, and that is a better answer
  than the one you gave.

  NEXT QUESTIONS TO EXPECT
  1. "Tell me about a decision you got wrong." Answer with a real one and
     say what you changed afterwards.
  2. "What do you want to be doing in two years?" Have one sentence ready,
     not a paragraph about learning.

  REAL SCORE
  Hire, with a caveat. The judgement answers were thinner than the craft
  ones, and that is fixable in a week.
faq:
  - q: "Should I give it my real company and role?"
    a: "Yes, and the more accurate the better. The questions get sharper when the prompt knows the job, and the rewrites are useful only if they match the role you are actually applying to."
  - q: "Can it do a technical round?"
    a: "Yes. Give it the stack or the discipline in the context and the technical questions will be specific. For a coding round it will work through a problem the way an interviewer does, asking clarifying questions before it gives a solution."
  - q: "How do I stop it from being too easy?"
    a: "Tell it the stage and ask it to push back. It is instructed to challenge vague answers and to comment once if it hears a rehearsed answer, which is usually enough to make the session harder."
  - q: "Does it tell me what the company is actually looking for?"
    a: "It tells you what a generic panel for that role and stage looks for, which is useful but not company-specific. Only the people hiring can tell you what their panel weights. Treat the verdict as a rehearsal, not a prediction."
---
