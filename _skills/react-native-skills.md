---
title: "React Native Skills"
slug: react-native-skills
category: engineering
date: 2026-10-23
excerpt: "React Native and Expo best practices for list performance, animation, navigation, state, rendering, and monorepo configuration."
creator: "Vercel"
license: "MIT"
repo_url: "https://github.com/vercel-labs/agent-skills/tree/main/skills/react-native-skills"
tags: [react native, expo, mobile, performance, animation]
usage: |
  Use react-native-skills to optimize [screen or list].
install: |
  npx skills add vercel-labs/agent-skills@react-native-skills
---

React Native Skills collects the mobile patterns that most affect perceived speed and stability. List performance comes first, with FlashList, stable keys, and memoization guidance, followed by animation and navigation.

It covers UI patterns, state management, render costs, monorepo layout, and platform configuration. The rules call out iOS and Android differences rather than assuming one behavior.

Each section is prioritized so an agent can fix the critical issues before spending time on configuration details.
