---
title: "Brand Guidelines"
slug: brand-guidelines
category: design
date: 2026-10-28
excerpt: "Applies Anthropic's official colors and typography to artifacts, with the rules for when each style belongs."
creator: "Anthropic"
license: "Apache-2.0"
repo_url: "https://github.com/anthropics/skills/tree/main/skills/brand-guidelines"
tags: [branding, design system, typography, color, anthropic]
usage: |
  Use the brand-guidelines skill to restyle this one-page report in Anthropic's
  palette and type scale.
install: |
  npx skills add anthropics/skills@brand-guidelines
---

Brand Guidelines encodes a specific visual system: Anthropic's palette, typefaces, and the rules for using them across documents, slides, and web artifacts. It is not a generic theme generator.

The useful part is the constraint. Colors have roles, type has a hierarchy, and the skill applies both instead of guessing at a tasteful combination. The result looks like it belongs to the brand rather than to the model's default aesthetic.

Fork it as a template for your own brand. Replace the palette, fonts, and examples, then keep the structure that makes the rules enforceable.
