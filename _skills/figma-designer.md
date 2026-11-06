---
title: "Figma Designer"
slug: figma-designer
category: design
date: 2026-11-04
featured: false
excerpt: "Designs inside Figma with real variables, text styles, auto layout, and component states instead of loose layers and hardcoded values."
creator: "Elaya Design"
license: "MIT"
version: "1.0.0"
repo_url: "https://github.com/elayadesign/ai-design-skills/tree/main/skills/figma-designer"
homepage: "https://github.com/elayadesign/ai-design-skills"
tags: [figma, design systems, tokens, components, design]
usage: |
  Use the figma-designer skill.

  Build the pricing section for this file. Reuse the existing variables
  and text styles first. Bind every fill, padding, gap, and radius to a
  token. Add hover, focus, and disabled states.
related_skills: [landing-page-design, taste-skill, theme-factory, web-design-guidelines]
---

Figma files drift when values are typed instead of bound. This skill treats the Figma file as a design system: spacing and radius variables, a two-layer color model with Light and Dark modes, named text styles, auto layout everywhere, and components with every state.

It starts by checking what already exists in the file and its libraries, then builds the foundations before any screen. The Foundations frame shows each token and text style with samples bound to the variables, so editing a token updates the canvas.

Components get Default, Hover, Pressed, Focus, and Disabled variants, and buttons get all five types across five states. Copy uses real content, contrast is checked, nested radii follow the formula, and every layer gets a meaningful name.

The skill is from the Elaya Design collection. It sits on top of the official Figma skills and assumes the Figma MCP is available.
