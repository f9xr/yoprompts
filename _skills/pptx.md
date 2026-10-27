---
title: "PPTX"
slug: pptx
category: productivity
date: 2026-10-28
excerpt: "Build and edit PowerPoint decks with real layouts, speaker notes, charts, and consistent visual structure."
creator: "Anthropic"
license: "Source-available"
repo_url: "https://github.com/anthropics/skills/tree/main/skills/pptx"
tags: [powerpoint, slides, presentations, decks, editing]
usage: |
  Use the pptx skill to turn this brief into a 12-slide deck, reuse the
  existing master, and add speaker notes for each slide.
install: |
  npx skills add anthropics/skills@pptx
---

The PPTX skill edits presentations at the slide and layout level. It can build a deck from an outline, reuse an existing master, add charts and images, write speaker notes, and keep spacing and typography consistent across slides.

The alternative, generating an image of each slide, produces something that looks like a deck and behaves like a screenshot. This skill works with the actual presentation format so text remains editable and the file opens correctly in PowerPoint and Keynote.

The skill is source-available rather than open source. Review the license and test the output in your target application before using it in a client deliverable.
