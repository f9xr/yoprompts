---
title: "DESIGN.md Format Specification"
title_tag: "DESIGN.md format spec — Google Labs"
slug: design-md-spec
file_type: design
date: 2026-11-16
excerpt: "Google Labs' open format for describing a visual identity to coding agents: YAML design tokens plus prose, with a CLI that validates and exports."
creator: "Google Labs"
license: "Apache-2.0"
repo_url: "https://github.com/google-labs-code/design.md/tree/main/docs"
source_file: "spec.md"
tags: [design tokens, format spec, design system, specification, google]
related_files: [agents-md, ant-design-design]
---

This is the document the rest of the DESIGN.md entries are written against: an open, alpha specification published by Google Labs for describing a visual identity in a form a coding agent can follow across sessions and across tools.

Its central decision is to keep two kinds of content in one file and be explicit about which wins. The YAML tokens are normative — the hex value and the font size are the truth. The markdown prose is context: which colour is for what, when elevation is allowed, what never to do. A model that only gets tokens guesses at intent; a model that only gets prose invents hex codes. The format refuses to choose.

Tokens can sit in front matter or in fenced YAML blocks inside the section they belong to, and both are merged into one document, which is how a file stays readable to a person while remaining parseable. Cross-references use a `{path.to.token}` syntax borrowed from the Design Token JSON spec, so `{colors.primary}` resolves without repeating a value, and the tokens convert to and from `tokens.json`, Figma variables and Tailwind theme configs.

The section order is fixed and short: Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts. It also specifies what a consumer should do with content it does not recognise, which is the part that makes an alpha format safe to adopt — unknown sections are preserved, not dropped.

The repository ships the CLI that validates a file against the spec and exports its tokens, and the spec keeps a local copy of itself in the docs folder, so a project that vendors it always has the version it was written for.
