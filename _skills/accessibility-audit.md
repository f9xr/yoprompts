---
title: "Accessibility Audit"
slug: accessibility-audit
category: design
date: 2026-11-04
excerpt: "Audits a page or component against WCAG 2.2, separates blockers from polish, and returns fixes with the affected selector and success criterion."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [accessibility, wcag, audit, frontend, design]
usage: |
  Audit this page for WCAG 2.2 AA issues.

  Return blockers first, then measurable fixes with the selector and the
  success criterion. Do not suggest a redesign unless the current markup
  cannot meet the criterion.

  Page or component:
  [paste HTML or describe the screen]
related_skills: [frontend-design, web-design-guidelines, seo-audit]
skill_file: |
  ---
  name: accessibility-audit
  description: Audit web pages and components for WCAG 2.2 accessibility issues. Use when the user asks for an accessibility audit, a11y review, WCAG compliance check, screen reader fixes, keyboard navigation review, contrast check, or accessible component guidance.
  ---

  # Accessibility Audit

  Audit what a user actually experiences, not what the markup claims.

  ## Workflow

  1. Identify the page type, the interactive parts, and the user tasks that
     matter most.
  2. Check the four WCAG layers in order: perceivable, operable,
     understandable, robust.
  3. Test the keyboard path end to end before reading the code.
  4. Group findings into blockers, major, and polish.
  5. For every finding, give the selector or line, the success criterion,
     the current failure, and the smallest fix.

  ## Checks

  ### Perceivable

  - Text contrast at least 4.5:1 body and 3:1 large text. Non-text UI at
    least 3:1.
  - Images have useful alt text, or empty alt if decorative.
  - Form fields have visible labels, not placeholder-only labels.
  - Color is never the only carrier of meaning.
  - Video has captions; audio has transcripts.
  - Content reflows at 320 CSS pixels and 400 percent zoom without loss.

  ### Operable

  - Every action works with a keyboard. No traps, no missing focus.
  - Focus is visible and has at least 3:1 contrast against its background.
  - Skip link is the first focusable element.
  - Touch targets are at least 24 by 24 CSS pixels (WCAG 2.2).
  - Drag actions have a single-pointer alternative (WCAG 2.2).
  - No keyboard shortcut fires a single character without a way to turn it
    off or remap it.
  - Animation respects prefers-reduced-motion.

  ### Understandable

  - Page language is set, and language changes are marked.
  - Labels and instructions appear before the field they describe.
  - Errors name the field, say what went wrong, and say how to fix it.
  - Help and error text is programmatically associated with the input.
  - Navigation and component names are consistent across pages.
  - Nothing asks for the same information twice in one process (WCAG 2.2).

  ### Robust

  - One h1, headings in order, landmarks used once.
  - Native elements before ARIA. No role that contradicts behavior.
  - Buttons are buttons, links are links.
  - State exposed with aria-expanded, aria-pressed, aria-current, or
    aria-selected as appropriate.
  - Live regions exist for status updates and use polite or assertive
    correctly.

  ## Component patterns

  - Dialog: focus moves in, is trapped, Escape closes, focus returns.
  - Menu: arrow keys move, Escape closes, Tab leaves.
  - Tabs: arrow keys move, aria-selected updates, panel is labelled.
  - Combobox: full ARIA pattern, not a div with a list.
  - Toast: aria-live polite, never steals focus, dismissible.

  ## Report format

  ```
  Blockers
  1. [selector] Issue. WCAG 2.2.1. Current: ... Fix: ...

  Major
  2. ...

  Polish
  3. ...
  ```

  End with a keyboard test script the reviewer can run in order. If a fix
  needs design input, say what decision is required instead of guessing.
---

Most accessibility failures are visible before any code is read. Tab through the page once and the missing focus ring, skipped heading, or unlabeled field usually shows up in the first minute.

The audit separates blockers from polish because a team cannot fix thirty items at once. Each finding includes the success criterion so the fix survives design review, and the smallest change so it does not become a rewrite.

Pair it with the Frontend Design skill when the fix changes layout, and with SEO Audit when the same markup is hurting crawlability.
