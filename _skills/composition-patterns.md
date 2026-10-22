---
title: "React Composition Patterns"
slug: composition-patterns
category: engineering
date: 2026-10-23
excerpt: "React composition patterns for scalable component APIs, covering compound components, state lifting, render props, and React 19 changes."
creator: "Vercel"
license: "MIT"
repo_url: "https://github.com/vercel-labs/agent-skills/tree/main/skills/composition-patterns"
tags: [react, components, architecture, typescript, react 19]
usage: |
  Use composition-patterns to refactor [component or prop API].
install: |
  npx skills add vercel-labs/agent-skills@composition-patterns
---

React Composition Patterns targets components that have accumulated boolean props and special cases. It shows how to split them into compound components with a shared context, lift state to the right owner, and keep the public API small.

The skill is organized by priority. Component architecture and state management come first, followed by implementation patterns and the React 19 API changes that affect refs, context, and actions.

Each rule includes when to apply it and when a simpler component is the better choice. The goal is a flexible API that stays readable, not abstraction for its own sake.
