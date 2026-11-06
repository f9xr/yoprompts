---
title: "API Docs Writer"
slug: api-docs-writer
category: content
date: 2026-11-04
excerpt: "Turns an endpoint, schema, or OpenAPI file into reference docs with real request examples, error cases, and the details developers actually search for."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [api, documentation, openapi, developers, content]
usage: |
  Write reference documentation for this endpoint.

  Include auth, parameters, a request example, a response example, every
  error code, and one runnable curl command. Use the real field names.

  Endpoint or OpenAPI operation:
  [paste spec or code]
related_skills: [copy-editing, research-synthesis]
skill_file: |
  ---
  name: api-docs-writer
  description: Write and improve API reference documentation from code, OpenAPI specs, or endpoint descriptions. Use when the user asks for API docs, endpoint documentation, developer guides, request and response examples, or clearer error reference.
  ---

  # API Docs Writer

  Write for the developer who is already halfway through an integration and
  searching for one field name.

  ## Workflow

  1. Read the route, handler, schema, and tests. The tests show the cases the
     happy-path description misses.
  2. List every input, every output, and every error the handler can return.
  3. Write the reference in this order: purpose, auth, request, response,
     errors, limits, example.
  4. Run the example request if possible. If it cannot run, mark it as sample
     data, never as live output.
  5. Cut every sentence that does not help the reader call the endpoint.

  ## Required sections

  ### Purpose

  One sentence: what the endpoint does and when to use it. Name the resource,
  not the internal service.

  ### Authentication

  Scheme, header name, token type, and scopes. Link to the auth guide instead
  of repeating it.

  ### Request

  - Method and path.
  - Path, query, and body parameters in a table: name, type, required,
    default, constraints, description.
  - Use the real field names and casing.
  - State the content type and the maximum body size.

  ### Response

  - Status codes that can occur, including success and partial success.
  - A realistic JSON example with every field the client can rely on.
  - Note nullable fields explicitly.
  - Do not invent fields that the handler does not return.

  ### Errors

  For each error: status, code, when it happens, what the client should do.
  Cover validation, auth, permission, not found, conflict, rate limit, and
  server errors when the handler can produce them.

  ### Limits

  Pagination, rate limits, idempotency, retries, timeouts, and webhook
  delivery behavior. Put the number and the unit.

  ### Example

  One copy-ready request, one response, and one short shell command. Keep the
  token as a placeholder.

  ## Writing rules

  - Second person, present tense, active voice.
  - One idea per sentence in parameter descriptions.
  - Say what the field does, not that it is important.
  - Prefer a short table over a paragraph of nested lists.
  - Never use "simply", "just", or "obviously".
  - Define an acronym on first use.
  - Keep example values plausible: real shape, not foo and bar.

  ## Review pass

  - Every parameter in the spec appears in the docs.
  - Every error branch in the handler appears in the error table.
  - The example matches the schema.
  - A developer can make the first successful call without opening the code.
  - Search terms a developer would type appear in the section they expect.

  ## Output format

  Return Markdown with heading levels ready to paste into a docs site. Put
  the runnable example in a fenced block. Flag any behavior you could not
  confirm from the code instead of guessing.
---

Reference docs fail in the gaps: the field that is nullable, the error the happy path never hits, the rate limit discovered in production. Reading the tests and the error branches closes most of those gaps before the prose is written.

The structure follows the order a developer works in: what it does, how to authenticate, what to send, what comes back, what can go wrong. That order is also what search results and AI answers quote.

Pair it with Copy Editing for the final language pass, or with Research Synthesis when the docs need a conceptual guide alongside the reference.
