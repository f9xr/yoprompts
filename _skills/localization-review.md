---
title: "Localization Review"
slug: localization-review
category: content
date: 2026-11-05
excerpt: "Reviews translated copy for meaning, tone, and register, then flags hardcoded terms, broken variables, and strings that will not fit the interface."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [localization, translation, i18n, content, quality]
usage: |
  Review this localized copy against the source.

  Check meaning, tone, and register. Flag variables, placeholders, and strings
  that will break layout. Do not rewrite the whole thing if a targeted fix
  will do.

  Source and translation:
  [paste both versions]
related_skills: [copy-editing, api-docs-writer, brand-guidelines]
skill_file: |
  ---
  name: localization-review
  description: Review localized and translated content for meaning, tone, placeholders, and layout risk. Use when the user asks for a translation review, localization QA, i18n check, or help with localized product copy.
  ---

  # Localization Review

  Localization is not a word-for-word swap. The job is to preserve the intent
  and make it feel native in the target language.

  ## Workflow

  1. Read the source and the translation side by side.
  2. Check meaning at the sentence level, then at the paragraph level.
  3. Check tone and register against the product voice.
  4. Verify every variable, placeholder, and HTML tag.
  5. Flag strings that will overflow a button, a tab, or a card.
  6. Check numbers, dates, currencies, and units.
  7. Return targeted fixes, not a full rewrite.

  ## What to check

  - Literal translation that changes the meaning.
  - Missing or duplicated variables such as {name} or %s.
  - Broken markup or escaped characters.
  - Tone that is too formal or too casual for the market.
  - Idioms that do not carry across languages.
  - Gender and plural forms that the source does not encode.
  - Date and number formats that differ from the locale.
  - Text expansion beyond the available space.
  - Terms that conflict with the glossary.

  ## Rules

  - Do not change the meaning to make the sentence smoother.
  - Do not translate a brand name unless the glossary says so.
  - Keep the placeholder order valid for the runtime.
  - Mark ambiguous source strings as a source problem, not a translation
    problem.
  - For a string with no context, say what context is needed.
  - Do not claim a translation is correct in a market you cannot verify.

  ## Output format

  Return a table: source, current translation, issue, suggested fix, severity.
  Then list the strings that need more context, the glossary conflicts, and
  the layout risks. Keep the table in the target language where it helps the
  reviewer.
---

Translation QA catches the wrong things when it only checks grammar. The bugs that reach users are a missing variable, a date in the wrong order, or a button label that grows by 40 percent.

The review works from the source and returns targeted fixes, so the translator keeps ownership of the voice while the engineer gets the placeholders and layout risks.

Pair it with Copy Editing for the source language, or with API Docs Writer when the localized content is developer documentation.
