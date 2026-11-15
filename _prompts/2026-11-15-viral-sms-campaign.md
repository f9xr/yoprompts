---
title: "Write SMS that people do not report as spam"
title_tag: "SMS campaign prompt that survives opt-outs"
slug: viral-sms-campaign
category: marketing
category_label: Marketing
difficulty: advanced
tools: [chatgpt, claude]
read_time: 7
seo:
  type: "WebPage"
picks: []
related: [cold-email-writer, onboarding-email-sequence]
art: terminal
tags: [sms, lifecycle messaging, compliance, retention, marketing]
excerpt: "Builds a short SMS sequence that respects consent, quiet hours and the 160-character budget, then tells you which message will cause opt-outs."
prompt: |
  You are a lifecycle marketer who has run SMS for subscription brands and has
  had a campaign paused by a carrier. You know SMS is the only channel where a
  single badly timed message costs the contact permanently, and that consent,
  quiet hours and frequency are the constraints that decide whether copy
  matters at all.

  ## What I will give you
  - What the customer opted in for, in the exact wording of the opt-in:
  - The trigger event and what the customer just did:
  - My sending number's country, and the countries of my audience:
  - The quiet-hours window I am required to observe, if any:
  - What I want them to do, in one sentence:

  ## What I want back

  1. **A compliance read before any copy.** State whether my opt-in wording
     covers this message type, and name the specific gap if it does not. Flag
     any requirement I have not mentioned that applies to my sending country
     (opt-out keywords, sender identification, consent record retention). Do
     not write copy until this section is done.

  2. **Three messages, each under 160 characters including the opt-out
     instruction.** For each: the segment it goes to, the send timing relative
     to the trigger, and the action requested. Show the character count.

  3. **The opt-out sentence.** One version, reused verbatim in every message,
     counted against the budget. Transactional and marketing messages get
     different answers here; tell me which mine is.

  4. **The frequency check.** Given the trigger, what is the maximum number of
     messages this customer may receive in fourteen days without it reading as
     harassment, and the order they should arrive in.

  5. **Which message causes opt-outs, and why.** Name the one I should expect
     to lose contacts, and the metric that should make me stop the sequence.

  ## Rules
  - No message may open with the brand name. The sender ID already says who
    you are; spending characters on it wastes the only budget you have.
  - No shortened links from a domain that differs from the one the customer
    opted in on. That is the pattern filters and customers both read as spam.
  - Never send marketing copy inside quiet hours or on a public holiday in the
    recipient's timezone. If the timing conflicts, move the message, do not
    shorten it.
  - If the trigger does not justify an SMS, say so and suggest email instead.
workflow:
  - "Check the opt-in wording against the message type"
  - "Draft inside 160 characters including the opt-out line"
  - "Space messages against a fourteen-day frequency cap"
  - "Name the message most likely to lose contacts"
output_preview: "A compliance read, three messages with character counts and send timing, one reusable opt-out line, a fourteen-day frequency plan, and the predicted opt-out loser."
how_to_use:
  - "Paste the opt-in wording exactly as it appears on your form. Paraphrasing it hides the gap that gets campaigns paused."
  - "Give the country of the sending number and the audience separately. They are often different and only one of them governs quiet hours."
  - "Keep the compliance section even if it feels like boilerplate. It is the part that decides whether the copy ever gets sent."
  - "Send the first message to your own number and read it on a lock screen. Character counts that fit still get truncated by notification previews."
tips:
  - "Ask for the opt-out version before you approve copy. If the message only works without the opt-out line, it does not work."
  - "Run the sequence past support before launch. They are the ones who answer 'why did I get this' and they know which segment complains."
  - "Cap frequency in the tool, not in the document. A documented cap that the automation ignores is how brands send four texts in a day."
  - "If you sell in several countries, ask for the strictest applicable rule and apply it everywhere. Per-market variants double the copy and halve the oversight."
example_output: |
  COMPLIANCE READ
  Opt-in covers "order updates and offers". Marketing copy is covered.
  Gap: no sender identification in the first message, required in your
  sending country. Add it once, in the first message only.

  MESSAGE 2 (118 chars, marketing)
  "Your cart is still saved. Finish in 2 taps before the size sells out:
  [link] Reply STOP to opt out."
  Segment: cart abandoned 4h. Send 10:00-18:00 local only.

  PREDICTED OPT-OUT LOSER
  Message 3 (the "we miss you" nudge at day 12). Contacts who have not
  opened in 30 days treat it as a reminder that they subscribed.
  Stop the sequence if opt-outs exceed 1.2% of sends.
faq:
  - q: "Can I send SMS to people who gave a phone number at checkout?"
    a: "Not for marketing in most jurisdictions. A phone number collected for order updates is transactional consent, and using it for offers is the exact gap regulators look for. Ask for a separate, explicit opt-in."
  - q: "Why is 160 characters such a hard limit?"
    a: "Because concatenated messages arrive as two texts on some handsets and bill as two. Staying under 160 including the opt-out line keeps one message one message, which also makes the copy sharper."
  - q: "Do emoji help or hurt?"
    a: "They cost characters and, in marketing messages from unfamiliar senders, they raise the spam read. Use them only if your audience already texts you that way."
  - q: "How often can I message a customer?"
    a: "Fewer times than email, and never on consecutive days unless the trigger is genuinely urgent (a delivery, a failed payment, a booking that starts today). Fourteen days should hold no more than three marketing messages."
---
