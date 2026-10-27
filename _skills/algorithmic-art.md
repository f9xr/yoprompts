---
title: "Algorithmic Art"
slug: algorithmic-art
category: design
date: 2026-10-28
excerpt: "Creates generative art with p5.js, using seeded randomness, interactive parameters, and reproducible output."
creator: "Anthropic"
license: "Apache-2.0"
repo_url: "https://github.com/anthropics/skills/tree/main/skills/algorithmic-art"
tags: [generative art, p5.js, creative coding, animation, design]
usage: |
  Use the algorithmic-art skill to build a seeded flow-field piece with three
  sliders for density, speed, and palette.
install: |
  npx skills add anthropics/skills@algorithmic-art
---

Algorithmic Art produces a small p5.js sketch rather than a static image. The sketch has a seed, a set of parameters, and a clear relationship between the two, so the same inputs reproduce the same result and a change can be explored instead of guessed.

The skill covers composition as well as code: flow fields, particle systems, noise, color, and motion. Each piece ships with controls for the values worth varying and a short explanation of what they do.

Use it for a poster, a background, a data-driven visual, or a teaching example. The output is source you can keep editing, not an image you have to reverse engineer.
