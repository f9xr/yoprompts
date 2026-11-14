---
title: "Analytics Tracking Plan"
title_tag: "Analytics Tracking Plan — AI agent skill"
slug: analytics-tracking-plan
category: data
date: 2026-11-09
excerpt: "Defines events, properties, naming rules, ownership, and QA for a product area so the numbers mean the same thing in every tool."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [analytics, tracking, events, data, product]
usage: |
  Write a tracking plan for this feature.

  Name every event after the user action. Define required properties, types,
  and allowed values. Say which questions each event answers and which
  dashboards depend on it.

  Feature and current tools:
  [describe]
related_skills: [data-story, experiment-design, sql-optimizer]
skill_file: |
  ---
  name: analytics-tracking-plan
  description: Write a product analytics tracking plan with event names, properties, types, ownership, and QA. Use when the user asks for a tracking plan, event taxonomy, analytics spec, or help fixing inconsistent product data.
  ---

  # Analytics Tracking Plan

  A metric is only comparable if the event behind it means the same thing
  everywhere. The tracking plan is the contract.

  ## Workflow

  1. List the questions the team needs to answer. Not the events, the
     questions.
  2. Map each question to the smallest set of events that answers it.
  3. Name events after the user action in past tense: `checkout_completed`,
     `report_exported`.
  4. Define every property with a type, a required flag, and allowed values.
  5. Assign an owner and a review date.
  6. Define the QA: how a new event is verified before it reaches a dashboard.
  7. Note which events are deprecated and when they stop being sent.

  ## Naming rules

  - `object_action`, snake_case, past tense: `invoice_paid`.
  - No team prefixes, no version numbers, no experiment names.
  - One event per action. Do not encode the outcome in the name.
  - Properties describe the context, not the action again.
  - Use the same property name for the same concept everywhere.

  ## Event definition

  ```
  Event: checkout_completed
  Trigger: payment provider confirms the charge
  Owner: payments
  Required properties:
    order_id: string
    value: number, minor units
    currency: string, ISO 4217
    payment_method: enum(card, bank, wallet)
  Optional properties:
    coupon_code: string
    item_count: integer
  Answers: conversion rate, average order value, payment mix
  Dashboards: revenue, checkout funnel
  ```

  ## QA

  - Fire the event in a staging build and inspect the payload.
  - Check the property types against the plan.
  - Confirm the event appears once per action, not once per render.
  - Confirm no personal data is sent unless the plan says so.
  - Add a test or a schema check where the pipeline supports it.

  ## Rules

  - Do not create an event with no question behind it.
  - Do not use free-text properties for values a dashboard groups by.
  - Do not send email, name, or other personal data in event properties
    unless there is a documented reason and a retention rule.
  - Do not rename a live event without a migration and a deprecation date.
  - Do not let two teams define the same event differently.

  ## Output

  Return the plan as a table, then:
  - The questions that still have no event.
  - The events that duplicate an existing one.
  - The dashboards that will change.
---

Tracking plans usually arrive after the dashboards, which is why two teams end up with different definitions of "active user". This skill starts from the questions and works back to the events.

The property table is deliberately strict about types and enums. A free-text field is where a dashboard quietly stops grouping correctly.

Pair it with Data Story when the numbers need to be presented, or Experiment Design when an event is the success metric for a test.
