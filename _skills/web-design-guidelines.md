---
title: "Web Design Guidelines"
slug: web-design-guidelines
category: design
date: 2026-10-23
excerpt: "Reviews UI code against more than 100 web interface rules for accessibility, focus, forms, animation, typography, images, and performance."
creator: "Vercel"
license: "MIT"
repo_url: "https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines"
tags: [design, accessibility, ux, audit, frontend]
usage: |
  Use web-design-guidelines to review [file or route].
install: |
  npx skills add vercel-labs/agent-skills@web-design-guidelines
---

Web Design Guidelines audits UI code against a broad set of interface rules rather than a single framework. It covers semantic HTML, ARIA use, keyboard access, focus states, form validation, and error messaging.

Additional checks cover animation and reduced motion, typography, image dimensions and alt text, navigation state, dark mode, touch behavior, and locale formatting.

The output is a compliance review tied to specific files and lines, with fixes ordered by user impact. It works on a file, a route, or a pattern supplied by the user.
