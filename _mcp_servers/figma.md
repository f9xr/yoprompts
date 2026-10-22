---
title: "Figma MCP"
slug: figma
excerpt: "Figma's official server for translating designs to code and extracting variables, components, and design tokens."
creator: "Figma"
transport: "local + remote"
homepage: "https://help.figma.com/hc/en-us/articles/32132100833559"
tags: [design, figma, design-to-code, components]
---

Figma's official MCP server bridges a design file and a codebase. An agent can read a frame, extract variables and components, and generate markup that matches the design instead of approximating it from a screenshot.

It is available as a local server and as a remote endpoint at `mcp.figma.com`. Authentication and desktop-app requirements are covered in Figma's setup guide.

Typical use is a design-to-code pass: pull the component structure and tokens, map them onto the project's existing styles, then implement the screen.
