---
title: "MCP Builder"
slug: mcp-builder
category: meta
date: 2026-10-23
excerpt: "Builds production-quality MCP servers in Python or TypeScript, from tool design and schema to evaluations and documentation."
creator: "Anthropic"
license: "Apache-2.0"
repo_url: "https://github.com/anthropics/skills/tree/main/skills/mcp-builder"
tags: [mcp, model context protocol, api, typescript, python]
usage: |
  Use mcp-builder to build an MCP server for [API].
install: |
  npx skills add anthropics/skills@mcp-builder
---

MCP Builder guides the full server lifecycle: choose the tools, design their inputs and outputs, implement the server, and test it against realistic tasks.

It covers both Python with FastMCP and TypeScript with the official MCP SDK, including transport choice, authentication, error handling, and tool descriptions that models can actually use.

The evaluation phase matters as much as the code. The skill defines representative tasks, runs them against the server, and records where the model chooses the wrong tool or passes malformed arguments.
