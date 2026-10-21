---
title: "Find the real cause of an error"
slug: debug-this-error
category: coding
category_label: Coding
difficulty: advanced
tools: [claude, chatgpt, copilot]
read_time: 7
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: []
related: [code-review-audit, website-code-audit, blog-site-design-system]
art: terminal
tags: [debugging, error, stack trace, bug, root cause, python, javascript, exception, troubleshooting]
excerpt: "Works from the actual error output, separates the symptom from the cause, and gives ranked hypotheses with the check that tells each one apart."
prompt: |
  You are a debugger who has read a lot of stack traces. You know that the
  line in the error message is usually not the line that is wrong, that most
  bug reports are missing the one fact that would end the investigation, and
  that the fastest path is usually a ranked list of hypotheses with a cheap
  check for each one, not a guess presented as a conclusion.

  ## What I will give you
  - The full error, exactly as it appears, including the whole stack trace:
  - The relevant code (as much as you need, and say if you need more):
  - What I expected to happen, and what happened instead:
  - What I already tried:
  - The runtime, version, and environment:

  ## Work through this in order

  1. **Read the trace literally.** The deepest frame in your own code is
     where the value became wrong, not necessarily where it became wrong
     for the first time. Name the line, the function and the value that
     was wrong there, as far as the trace shows. If the trace does not
     show it, say exactly what it does not show.

  2. **Name the error class.** Null reference, type mismatch, missing key,
     off-by-one, race condition, configuration, timeout, encoding, or
     something else. Say why you think so, using the trace.

  3. **Separate the symptom from the cause.** The exception type is the
     symptom. State the cause you believe produced it, and say how far
     back the cause is likely to be. Most bugs are older than the line
     that reported them.

  4. **List what the trace tells you and what it does not.** The missing
     information, named specifically: the value of a variable, the shape
     of a payload, the contents of a cache, the state of a flag, the
     version of a dependency. Then ask me for the two that would
     narrow it fastest. Ask for them before continuing.

  5. **Ranked hypotheses.** Between three and five, most likely first. For
     each: what it predicts, what it would look like if it were true,
     and the cheapest check that would confirm or kill it. If two
     hypotheses predict the same evidence, say so, because the check
     does not separate them.

  6. **The fix for the top hypothesis.** A specific change, with the code,
     not a description of a change. Then the second-best fix, in case the
     first is wrong.

  7. **The guard against a repeat.** The check, test, assertion or log
     line that would have caught this before it reached a user.

  8. **The near-misses.** Other bugs that look like this one in the
     trace, and the one line in the trace that rules each of them out.

  ## Rules
  - Never guess the root cause and present it as fact. If you are not
     sure, say which hypothesis you believe and what would settle it.
  - Never invent a line number, a variable name, a function, or a file
     path that was not in the code or the trace I gave you. If you need a
     file I did not paste, ask for it.
  - Never propose a broad refactor as the fix for a specific bug. The fix
     is the smallest change that removes the cause.
  - Do not add defensive null checks or try-catch blocks around the
     failure point as the fix. Swallowing the error is not a fix.
  - If the error is not in the code I showed you, say so and ask for the
     right code instead of speculating.
  - If the trace is truncated or unhelpful, say that the trace itself is
     the problem and ask what to log or what to reproduce with.

  ## Before we finish
  Give me the one check that would most likely change the diagnosis, and
  tell me what each possible outcome of that check means.
workflow:
  - "Read the trace and name the deepest wrong value"
  - "Classify the error and separate symptom from cause"
  - "Ask for the two missing facts that narrow it fastest"
  - "Rank hypotheses with a cheap discriminating check each"
  - "Give the smallest fix and the guard against a repeat"
  - "Name the near-misses the trace rules out"
output_preview: "A literal read of the trace, an error class, a symptom and cause split, the two missing facts to request, three to five ranked hypotheses with checks, the smallest fix, a regression guard and the near-misses."
how_to_use:
  - "Paste the whole stack trace, not the top line. The bottom frame is where the value was already wrong, and that is usually the useful part."
  - "Paste the failing function and whatever it calls, not a file list. Dumping the repository is not what helps here."
  - "Answer the two facts it asks for before letting it continue. A model with the missing value usually skips straight to the answer."
  - "Run the top hypothesis check before you implement the fix. The fix for hypothesis three is usually wasted work, and the check is cheaper than the fix."
tips:
  - "Errors that appear at a boundary, a deserializer or a null check are usually raised somewhere else. Ask for the value, not for the code that threw."
  - "If the bug is intermittent, the trace is from the run that happened to fail. Say so, and ask for a different approach: a hypothesis list about the race rather than about the stack."
  - "Version mismatches are the most common cause people spend hours on. Check them first, and ask the model to assume the environment is wrong before it assumes the code is wrong."
  - "Paste the diff if the bug appeared after a change. The cause is almost always in the diff, and the model will not look for it unless the diff is in context."
example_output: |
  1. THE TRACE, LITERALLY
  Deepest frame in your code: app/models/order.py:88, inside finalize().
  The value that is wrong there: self.discount is None, so
  `self.discount * self.total` raises TypeError.
  The trace does not show where discount was set, or what it was
  supposed to be.

  2. ERROR CLASS
  TypeError from None. A value that was expected to be a number was None.
  Not a type mismatch between two wrong types.

  3. SYMPTOM AND CAUSE
  Symptom: TypeError at the multiplication.
  Cause: discount was never populated for orders that take the new
  discount path, so the cause is upstream of line 88 and probably in the
  code that builds the order, not in finalize().

  4. WHAT THE TRACE DOES NOT TELL ME
  - the value of self.discount when it is not None, and its type
  - which code path creates an order without setting discount
  - whether the new discount path is the only one that skips it

  GIVE ME:
  (a) the function that constructs Order, including the branch that
      handles a percentage discount
  (b) one real order where it worked, and one where it failed, as raw
      dicts

  5. HYPOTHESES, RANKED
  1. The percentage-discount branch constructs the order without passing
     a discount to finalize. Predicts: only percentage orders fail, every
     other type works. Check: log self.discount by order type.
  2. finalize() has a second entry path, from the admin bulk action,
     that skips the assignment. Predicts: failures cluster in the admin
     origin field. Check: group failures by origin.
  3. A migration renamed the discount column, so the query returns None.
     Predicts: failures start on the day the migration ran, and only for
     orders created after it. Check: the first failure timestamp against
     the deploy time.

  Hypotheses 1 and 2 both predict that non-percentage orders work, so the
  order-type check does not separate them. The origin field does.

  6. FIX FOR HYPOTHESIS 1
  In the percentage branch of the constructor, pass the discount through:
      order = Order(
          ...,
          discount=discount_value,
      )
  then in finalize():
      discount = self.discount or Decimal("0")
  (the second line is a guard, not the fix; do not add it if the first
  one is correct)

  7. GUARD
  A test that builds an order through the percentage path and asserts
  order.discount is not None before finalize() runs. It fails today, which
  is the point.

  8. NEAR-MISSES RULED OUT
  - Rounding to a float and getting a NaN: ruled out, the trace shows
    None, not a number.
  - A timezone or locale issue: ruled out, multiplication of two numbers
    does not raise on those.
  - Missing dependency version: not ruled out. If the trace came from a
    different environment than the one where it works, check this before
    hypothesis 1.

  THE ONE CHECK
  Log self.discount alongside order type and origin for the next failure.
  Discount set only on percentage orders points to hypothesis 1. Discount
  set on every order except ones from one origin points to hypothesis 2.
  Discount set on every order points to hypothesis 3.
faq:
  - q: "Will it fix my code?"
    a: "It gives you the specific change for the leading hypothesis plus a second fix for the runner-up, plus a regression guard. You still have to apply it and confirm it, and if the leading hypothesis is wrong, the second fix and the checks are what you use next."
  - q: "What if I do not have the full stack trace?"
    a: "Say so and paste what you have. It will work from the error message alone, but the hypotheses will be weaker, because the trace is what separates the real cause from the place it surfaced. It will ask for the trace if you have not given one."
  - q: "Can it handle a performance problem rather than a crash?"
    a: "Not with this prompt. It is built for errors, where there is a concrete failure. For slow code, use the code-review-audit prompt, which reviews a whole file with performance and correctness in scope."
  - q: "Why does it refuse to suggest try-catch blocks?"
    a: "Because a try-catch around the failing line hides the failure and moves it somewhere worse, usually into a log nobody reads. It is a legitimate fix only when the failure is genuinely expected and recoverable, and it is not a fix for a null value that should never have been null."
---
