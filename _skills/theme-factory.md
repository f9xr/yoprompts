---
title: "Theme Factory"
slug: theme-factory
category: design
date: 2026-10-28
excerpt: "Applies a coherent set of colors, fonts, and spacing to slides, documents, reports, and HTML artifacts."
creator: "Anthropic"
license: "Apache-2.0"
repo_url: "https://github.com/anthropics/skills/tree/main/skills/theme-factory"
tags: [themes, typography, color, design system, styling]
usage: |
  Use the theme-factory skill to restyle this deck and its handouts with one
  theme, including code blocks and charts.
install: |
  npx skills add anthropics/skills@theme-factory
---

Theme Factory provides curated visual themes and applies one consistently across an artifact. A theme is more than a background color: it defines type, spacing, borders, chart colors, and the contrast rules that keep the result readable.

The skill picks a theme for the content and audience, then applies it to every element rather than styling the first slide and leaving the rest to default. It also checks contrast and hierarchy after the change.

Use it when a document is structurally finished but visually inconsistent, or when several artifacts need to look like they came from the same place.
