---
title: "Stageshow"
title_tag: "Stageshow — AI agent skill for Design"
slug: stageshow
category: design
date: 2026-11-16
excerpt: "Builds faux product UI in React — windows, dashboards, phones and cursor demos — as a still or a short animation, then films it to check."
creator: "Benji Taylor"
license: "MIT"
version: "1.1.1"
repo_url: "https://github.com/benjitaylor/skills"
tags: [product ui, illustrations, react, motion, design, demo]
usage: |
  Use the stageshow skill to build a hero illustration of our billing page:
  a window with a plan switcher, one cursor press, and the price updating.

  It sits beside the headline at 720 × 340, light theme, standard fidelity.
related_skills: [frontend-design, landing-page-design]
install: |
  npx skills add benjitaylor/skills --skill stageshow
---

Stageshow makes the thing every marketing page needs and nobody wants to build: a believable miniature of your product, framed with intent, either as a still or as a ten-second loop where one thing happens. Windows, dashboards, phones, notifications, terminals, bento tiles and cursor walkthroughs, authored in React rather than captured with a browser.

The distinction that matters is that these are illustrations, not screenshots or automation. `a.click()` draws a cursor pressing a button; `a.set()` changes the scene. That is why the output looks designed instead of recorded — you can decide what the viewer needs to see and delete everything else, which is impossible with a real capture.

Two mechanics carry most of the quality. A kit supplies the parts that are hard to hand-roll — `Window`, `Phone`, `Thread`, `Popover`, `Camera`, plus small pieces like `Bar`, `Row`, `Chip`, `Kbd` — each with its own CSS, so spacing and type stay consistent. And a filming script turns the result into evidence: it captures a contact sheet at multiple widths and prints a verdict line per frame, so the agent checks its own work instead of guessing. The skill treats a passing rehearsal as the minimum, not the goal.

It is opinionated about what usually goes wrong: a whole window shrunk into a card with even margins, every row filled with real text, gray bars where the eye should land, filler in the corners. The rule it repeats is a budget for words — three to seven real strings, placeholder lines everywhere else.

Setup is `npx skills add benjitaylor/skills --skill stageshow`. The kit expects React, `react-dom` and `lucide-react`, and the preview runs with `npm install && npm run dev`. The MIT licence covers the code; the bundled product studies reference real apps' interactions, and the skill is explicit that you borrow the interaction, not another product's identity.
