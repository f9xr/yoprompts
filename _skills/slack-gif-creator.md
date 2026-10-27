---
title: "Slack GIF Creator"
slug: slack-gif-creator
category: social
date: 2026-10-28
excerpt: "Builds small animated GIFs sized and paced for Slack emoji and message reactions."
creator: "Anthropic"
license: "Apache-2.0"
repo_url: "https://github.com/anthropics/skills/tree/main/skills/slack-gif-creator"
tags: [slack, gif, animation, emoji, design]
usage: |
  Use the slack-gif-creator skill to turn this simple loop into a 128x128
  animated emoji with a transparent background.
install: |
  npx skills add anthropics/skills@slack-gif-creator
---

Slack GIF Creator makes animation for a very specific canvas: small, short, and readable in a chat window. It handles frame size, timing, transparency, and file weight so the result works as an emoji or a reaction instead of a video that happens to loop.

It is built on Python image tooling and generates the frames from a described motion. The skill checks dimensions, frame count, and palette before calling the file done.

Use it for team reactions, launch announcements, or a small visual joke. The constraint is the feature: if the idea does not read at 128 pixels, the skill will simplify it.
