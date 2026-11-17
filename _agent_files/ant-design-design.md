---
title: "Ant Design DESIGN.md"
title_tag: "Ant Design DESIGN.md — design tokens for agents"
slug: ant-design-design
file_type: design
date: 2026-11-16
excerpt: "An enterprise design system written for agents: #1677FF primary, a full type scale, component tokens, and the do's and don'ts that keep them intact."
creator: "Ant Design"
license: "MIT"
repo_url: "https://github.com/ant-design/ant-design"
repo_branch: "master"
source_file: "DESIGN.md"
tags: [design tokens, react, design system, typography, colors]
related_files: [design-md-spec, ai2-asta-design]
---

Ant Design is the clearest test of whether DESIGN.md works at scale. Its system is enormous — a component library, a token architecture, light and dark themes, RTL, 150+ locales — and the file compresses all of it into something an agent can hold in context without losing the values that matter.

The tokens come first: `#1677FF` for primary, `#52C41A` success, `#FAAD14` warning, `#FF4D4F` error, a neutral surface ladder from `#FFFFFF` to `#F5F5F5`, and an outline pair for borders. The type scale is explicit too, from a 38px display down to 14px titles, with line heights attached. Those are exactly the numbers an agent otherwise approximates, and approximating them is how generated UI ends up nearly Ant Design.

Then the prose does the part tokens cannot. Each colour is tied to a role, the layout section states spacing and grid behaviour, the elevation section explains when a shadow is allowed, and the components section defines properties that recur across the library. "Do's and Don'ts" is where the file earns its place: it names the specific misuses — a primary colour used decoratively, a shadow stacked on a border — that a token list alone would permit.

It is written to the Google Labs format at version alpha, so it follows the fixed section order and keeps tokens in front matter. For a team adopting the format, it is the best available example of the density a real design system needs.
