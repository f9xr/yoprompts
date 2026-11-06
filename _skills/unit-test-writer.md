---
title: "Unit Test Writer"
slug: unit-test-writer
category: engineering
date: 2026-11-05
excerpt: "Reads a function and its callers, then writes focused tests for behaviour, edge cases, and failure paths without testing the implementation."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [testing, unit tests, tdd, engineering, quality]
usage: |
  Write unit tests for this code.

  Cover the public behaviour, the edge cases, and the failure paths. Do not
  assert on private implementation details. Use the test framework already in
  the repo and name each test after the behaviour it protects.

  Code and file path:
  [paste function and path]
related_skills: [bug-triage, security-review, react-best-practices]
skill_file: |
  ---
  name: unit-test-writer
  description: Write and improve unit tests for functions, classes, and modules. Use when the user asks for tests, test coverage, edge cases, a failing test first, or help with a test framework.
  ---

  # Unit Test Writer

  Test the contract, not the code. A test that breaks when a private variable
  is renamed is a maintenance cost, not a safety net.

  ## Workflow

  1. Read the function, its callers, and the existing tests. Match the
     framework, naming convention, and assertion style already in the repo.
  2. List the public behaviours: what the caller can observe.
  3. List the inputs that matter: normal, boundary, empty, null, invalid,
     duplicate, and large.
  4. List the failure paths: thrown errors, rejected promises, timeouts, and
     partial writes.
  5. Write one test per behaviour, with a name that reads as a sentence.
  6. Run the suite. If a test fails, decide whether the code or the expectation
     is wrong before changing either.

  ## What to test

  - The happy path with realistic data.
  - Boundaries on both sides of every limit.
  - Empty and missing input.
  - Invalid type and invalid range.
  - Error propagation and the error message the caller sees.
  - Idempotency where the operation claims it.
  - Ordering where the contract promises it.
  - Concurrency only if the code is actually concurrent.

  ## What not to do

  - Do not assert on private methods or internal call order.
  - Do not mock the thing under test.
  - Do not over-mock until the test only proves the mock works.
  - Do not use sleep to wait for async work. Await the real signal.
  - Do not snapshot a large object to avoid naming the fields that matter.
  - Do not write a test that cannot fail.

  ## Test quality checks

  - Would this test fail if the behaviour regressed? If not, rewrite it.
  - Is the arrange section longer than the assertion? Simplify the fixture.
  - Does the test name explain the rule, not the function name?
  - Can a new contributor read the failure message and know what broke?
  - Is the test independent of execution order and shared state?

  ## Output format

  Return the test file in a fenced block, followed by a short list of the
  behaviours covered and any behaviour you could not test without a refactor.
  Name the refactor instead of testing around it.
---

Most test suites fail in two directions: they assert on implementation so they break constantly, or they only cover the happy path so they never catch the bug that ships. The skill reads the callers first because the contract lives at the boundary.

Every test is checked against one question: would it fail if the behaviour regressed? That question removes vanity coverage and keeps the suite useful.

Pair it with Bug Triage to turn a production bug into a regression test, or with Security Review when the failure path involves untrusted input.
