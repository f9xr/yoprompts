---
title: "React View Transitions"
slug: react-view-transitions
category: engineering
date: 2026-10-23
excerpt: "Implements native-feeling page, route, and shared element animations with React's View Transition API and Next.js integration."
creator: "Vercel"
license: "MIT"
repo_url: "https://github.com/vercel-labs/agent-skills/tree/main/skills/react-view-transitions"
tags: [react, view transitions, animation, next.js, css]
usage: |
  Use react-view-transitions to animate [route or list].
install: |
  npx skills add vercel-labs/agent-skills@react-view-transitions
---

React View Transitions explains when an animation improves navigation and when it only adds delay. It covers the `<ViewTransition>` component, transition types, and the CSS pseudo-elements that control enter, exit, update, and share states.

The skill includes placement rules that decide whether an animation actually runs, plus patterns for directional navigation, list reorder, Suspense reveals, and shared element morphs.

Next.js integration uses the `transitionTypes` prop on `next/link`. Accessibility is part of the workflow, with reduced-motion handling built into the recipes.
