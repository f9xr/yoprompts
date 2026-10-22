---
title: "Canvas Design"
slug: canvas-design
category: design
date: 2026-10-23
excerpt: "Creates original posters, art, and static visuals as PNG or PDF by defining a visual philosophy before generating the canvas."
creator: "Anthropic"
license: "Apache-2.0"
repo_url: "https://github.com/anthropics/skills/tree/main/skills/canvas-design"
tags: [design, art, posters, pdf, visual identity]
usage: |
  Use canvas-design to create a poster for [brief].
install: |
  npx skills add anthropics/skills@canvas-design
---

Canvas Design starts by writing a visual philosophy for the piece: subject, mood, composition, type, and constraints. That direction is created before any layout, so the result has a point of view instead of a stock template.

The skill works in code to produce polished static art, typically as PNG or PDF. It covers posters, editorial graphics, and other one-off visuals, and can extend to multi-page pieces.

It avoids copying existing artists or brands. When a reference is supplied, the skill extracts principles such as balance and contrast rather than reproducing the work.
