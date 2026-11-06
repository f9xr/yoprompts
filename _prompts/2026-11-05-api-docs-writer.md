---
title: "Write API reference docs a developer can use"
slug: api-docs-writer
category: coding
category_label: Coding
difficulty: intermediate
tools: [chatgpt, claude, gemini]
read_time: 7
seo:
  type: "WebPage"
picks: []
related: [code-review-audit, debug-this-error, website-code-audit]
art: terminal
tags: [api, documentation, developers, openapi, reference, coding]
excerpt: "Turns an endpoint, schema, or OpenAPI operation into reference docs with real examples, every error case, and the field details developers search for."
prompt: |
  You are a developer writer. You write for the engineer who is halfway
  through an integration and looking for one field name.

  ## What I will give you

  - The route, handler, schema, or OpenAPI operation
  - Auth scheme and scopes
  - Tests or error branches if they exist
  - Rate limits and pagination rules
  - One real request and response, if available
  - The docs framework and heading conventions

  If the code is not available, ask for the spec. Do not invent fields or
  error codes.

  ## Required sections

  1. **Purpose.** One sentence: what it does and when to use it.
  2. **Authentication.** Scheme, header, token type, scopes, and a link to the
     auth guide.
  3. **Request.** Method, path, and a parameter table: name, type, required,
     default, constraints, description.
  4. **Response.** Status codes, a realistic JSON example, nullable fields,
     and pagination.
  5. **Errors.** Status, code, when it happens, and what the client should do.
  6. **Limits.** Rate limits, idempotency, retries, and timeouts.
  7. **Example.** One copy-ready request, one response, and one curl command.

  ## Writing rules

  - Second person, present tense, active voice.
  - Use the real field names and casing.
  - Say what the field does, not that it is important.
  - Prefer a short table over nested lists.
  - Never use "simply", "just", or "obviously".
  - Define an acronym on first use.
  - Use plausible example values, not foo and bar.
  - Mark anything you could not confirm from the code.

  ## Review pass

  - Every parameter in the spec appears in the docs.
  - Every error branch in the handler appears in the error table.
  - The example matches the schema.
  - A developer can make the first successful call without opening the code.
  - The terms developers search for appear in the section they expect.
workflow:
  - "Read the handler, schema, and tests"
  - "List inputs, outputs, and every error branch"
  - "Write the reference in caller order"
  - "Add a runnable example and error table"
  - "Verify the example against the schema"
output_preview: "Reference Markdown with auth, parameter tables, realistic request and response examples, a complete error table, and one runnable curl command."
how_to_use:
  - "Paste the handler and the tests. The tests reveal the cases the happy-path description misses."
  - "Give the real auth and rate-limit rules. Those are the two things developers search for first."
  - "Run the example before publishing. A broken example costs more trust than missing prose."
tips:
  - "The error table is the most valuable section. It is also the one most often missing."
  - "Name nullable fields explicitly. Silent nullability causes production bugs."
  - "Use real field casing. camelCase and snake_case confusion wastes hours."
  - "Put the curl example first for a developer audience, then explain the fields."
example_output: |
  ## Create an invoice

  Creates a draft invoice for a customer.

  ### Authentication
  Bearer token in the Authorization header. Requires the `invoices:write` scope.

  ### Request
  POST /v1/invoices

  | Field | Type | Required | Description |
  | customer_id | string | yes | Customer identifier. |
  | due_date | string | no | ISO 8601 date. Defaults to net 30. |
  | line_items | array | yes | At least one line item. |

  ### Errors
  | Status | Code | When |
  | 422 | invalid_customer | The customer does not exist. |
  | 409 | duplicate_invoice | An invoice for this period already exists. |
faq:
  - q: "Can it write docs from an OpenAPI file?"
    a: "Yes. Paste the operation or the relevant schema. It will still check for error branches and nullable fields that the spec often omits."
  - q: "Should examples be generated or real?"
    a: "Real where possible. Generated examples are acceptable only when they match the schema and are labelled as sample data."
  - q: "How do I handle internal endpoints?"
    a: "Say that they are internal and who can call them. Do not publish a public auth section for an endpoint that is not public."
  - q: "What if the code and the spec disagree?"
    a: "Treat the code as the source of truth for behaviour and flag the disagreement. A spec that lies is worse than no spec."
---
API docs fail in the gaps: the nullable field, the error the happy path never hits, and the rate limit discovered in production. Reading the tests and the error branches closes most of those gaps before the prose is written.

The section order follows the way a developer works: what it does, how to authenticate, what to send, what comes back, what can go wrong.

Pair it with Code Review Audit to catch handler bugs before they become documented behaviour, or with Debug This Error when a developer is stuck on a failing call.
