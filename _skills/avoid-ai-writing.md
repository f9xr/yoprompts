---
title: "Avoid AI Writing"
slug: avoid-ai-writing
category: writing
date: 2026-10-22
excerpt: "Audit and rewrite text to remove machine-written patterns, with a detect-only mode, a voice profile, and an iterate-to-convergence pass."
creator: "Conor Bronsdon"
license: "MIT"
version: "3.10.0"
tags: [writing, editing, voice, ai-isms]
usage: |
  Remove the AI-isms from this draft. Keep every number, name, and quote.

  Then list the patterns you found and what you changed.
---

This skill treats AI writing as a set of specific, nameable patterns rather than a vague feeling. It can audit a draft without changing it, edit a file in place, or iterate until the tell-tale constructions are gone.

It supports optional voice profiles (casual, professional, technical, warm, or blunt) so the rewrite lands in a register you choose instead of a generic neutral tone.

Works in any assistant that supports the agentskills.io `SKILL.md` format, including Claude Code, Cursor, VS Code Copilot, and OpenHands. No external tools or APIs are required.
