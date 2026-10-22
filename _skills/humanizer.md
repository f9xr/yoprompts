---
title: "Humanizer"
slug: humanizer
excerpt: "Strips the tells out of AI-generated prose, from tricolons and hedges to the it-is-not-X-it-is-Y cadence, while keeping every supported fact."
creator: "blader"
license: "MIT"
repo_url: "https://github.com/blader/humanizer"
tags: [writing, editing, prose, ai-isms]
usage: |
  /plugin marketplace add blader/humanizer
  /plugin install humanizer@humanizer
---

Humanizer names the specific patterns that make text read as machine-written and rewrites them rather than replacing flagged phrases one at a time. The list covers staging tricks, forced triads, inflated significance, borrowed authority, decorative formatting, and chatbot leftovers.

It works in three modes: pasted text, a named file, or an embedded pass inside another task. A writing sample overrides the defaults, so the rewrite matches the writer's sentence length, punctuation, and vocabulary instead of flattening everything into the same neutral voice.

The skill keeps claims intact. It may shorten, merge, or restructure, but it does not add a fact, name, number, or citation that was not in the source.
