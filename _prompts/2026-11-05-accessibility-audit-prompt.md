---
title: "Audit a page for WCAG 2.2 issues"
slug: accessibility-audit-prompt
category: coding
category_label: Coding
difficulty: intermediate
tools: [chatgpt, claude, gemini]
read_time: 7
seo:
  type: "WebPage"
picks: []
related: [website-code-audit, landing-page-copy, blog-site-design-system]
art: terminal
tags: [accessibility, wcag, a11y, frontend, html, audit, keyboard]
excerpt: "Audits a page or component against WCAG 2.2, separates blockers from polish, and returns fixes with the selector and success criterion."
prompt: |
  You are an accessibility engineer auditing a real page for real users. You
  test what a keyboard and screen reader user experiences, not what the
  markup claims.

  ## What I will give you

  - The page HTML, component code, or a description of the screen
  - The framework and any component library
  - The user tasks that matter most
  - Whether a design system or brand rules constrain the fix
  - Any automated scan results, if available

  If you only have a screenshot, say what cannot be verified and ask for the
  markup or a live URL.

  ## Workflow

  1. Test the keyboard path end to end: tab order, focus visibility, traps,
     and escape.
  2. Check the four WCAG layers: perceivable, operable, understandable, and
     robust.
  3. Check text and non-text contrast, zoom, and reduced motion.
  4. Check names, roles, and values for interactive controls.
  5. Group findings into blockers, major, and polish.
  6. For each finding, give the selector or line, the success criterion, the
     current failure, and the smallest fix.

  ## What to check

  - A visible focus indicator on every interactive element.
  - Labels for every input, including placeholder-only fields.
  - Button text that makes sense out of context.
  - Heading order and landmark structure.
  - Alt text that describes purpose, or empty alt for decoration.
  - Error messages announced and tied to the field.
  - Colour contrast at 4.5:1 for text and 3:1 for large text and UI.
  - No keyboard trap in modals or menus.
  - Captions and transcripts for media.
  - No motion that cannot be paused.

  ## Output format

  Return a table: severity, location, success criterion, issue, fix. Put
  blockers first. End with the three fixes that remove the most user harm and
  the checks that still need a screen reader or a real device.
workflow:
  - "Test the keyboard path before reading the code"
  - "Check each WCAG layer in order"
  - "Group findings into blockers and polish"
  - "Return the selector, criterion, and smallest fix"
  - "Name what still needs manual verification"
output_preview: "A prioritized accessibility report with selectors, WCAG criteria, concrete fixes, and the checks that require a screen reader."
how_to_use:
  - "Paste the real markup. A description hides the missing labels and broken focus order that cause most failures."
  - "Name the user tasks that matter. A checkout form and a marketing page have different risk."
  - "Run the fixes through a keyboard and a screen reader. Automated tools catch only part of the problem."
tips:
  - "Placeholder text is not a label. It disappears exactly when the user needs it."
  - "A custom dropdown usually breaks the keyboard before it breaks the visual design."
  - "Focus visibility is cheap to fix and expensive to omit. Check it on every component."
  - "Reduced motion is part of WCAG 2.2. Test it with the operating system preference, not a manual toggle."
example_output: |
  BLOCKERS
  .search-input | 1.3.1 / 4.1.2 | Placeholder-only label; screen reader
  announces an unlabeled edit field. Add a visible <label> or aria-label.

  .modal | 2.1.2 | Focus can leave the dialog and does not return on close.
  Trap focus and restore it to the trigger.

  MAJOR
  .cta-button | 1.4.11 | Hover state contrast is 2.4:1. Raise to 3:1.

  MANUAL CHECKS
  Confirm the mobile menu with VoiceOver and a hardware keyboard.
faq:
  - q: "Can an AI audit replace a screen reader test?"
    a: "No. It can find many markup and contrast issues, but real assistive technology and real users catch interaction problems that code review misses."
  - q: "What is the difference between AA and AAA?"
    a: "AA is the usual legal and procurement target. AAA is stricter and often unnecessary for entire sites. The prompt defaults to AA."
  - q: "Should I fix everything in one pass?"
    a: "Fix blockers first. They are the issues that stop a user from completing a task, and they usually have small, well-understood fixes."
  - q: "Does WCAG 2.2 add much to 2.1?"
    a: "It adds criteria around focus appearance, dragging, target size, and redundant entry. The prompt checks the 2.2 additions explicitly."
---
Accessibility failures cluster around the same few patterns: unlabeled inputs, invisible focus, and custom controls that break the keyboard. The prompt tests the keyboard path first because that is where the real user harm shows up.

It also separates blockers from polish, so a team can fix the issues that stop a task without treating every contrast tweak as equal.

Pair it with Website Code Audit when the same page also has SEO and performance issues, or with Landing Page Copy when the fix changes the content.
