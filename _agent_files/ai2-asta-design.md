---
title: "Ai2 Asta DESIGN.md"
title_tag: "Ai2 Asta DESIGN.md — a dark-mode design system"
slug: ai2-asta-design
file_type: design
date: 2026-11-16
excerpt: "A research-assistant design system for agents: a teal and cream palette with true alpha layers, a full type scale, and button rules that hold up in dark mode."
creator: "Allen Institute for AI"
license: "Apache-2.0"
repo_url: "https://github.com/allenai/design/tree/main/asta"
source_file: "DESIGN.md"
tags: [design tokens, dark mode, research, typography, color]
related_files: [design-md-spec, ant-design-design]
---

Ai2 publishes DESIGN.md files for its products as standalone documents: no inheritance, no build step, nothing that references an internal system you cannot see. Asta, its research assistant, is the most complete of them, and it is the example to read if your product is dark-mode first.

The palette is where it differs from a typical token dump. Under the teal and cream primitives sit tint primitives (`teal-20`, `pink-40`) that are solid blends, and separately a set of alpha primitives (`extra-dark-teal-10` through `-90`, `cream-10` and up) with a comment explaining the distinction: a tint is a fixed blend, an alpha layer adapts to whatever surface it lands on — page, card, panel or another translucent layer. That is the kind of reasoning that never survives a token JSON export, and it is exactly what an agent needs to avoid stacking the wrong one.

Everything else follows the format's fixed sections. The typography scale, layout and elevation rules are stated with values; the shapes section fixes radii; components get their own rules, with buttons and type called out specifically. Assets are declared in front matter — logo, wordmark, slide backgrounds — so an agent knows what it may place and where the files live.

The repo carries a whole family of these files alongside their asset folders, and its README states the rule that makes the collection trustworthy: each file is fully resolved and self-contained, so copying one into your project is the entire installation.
