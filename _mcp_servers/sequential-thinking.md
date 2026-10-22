---
title: "Sequential Thinking MCP"
slug: sequential-thinking
excerpt: "Structured, revisable thought sequences that give an agent a scratchpad for multi-step reasoning."
creator: "Anthropic"
license: "Other"
transport: "local"
repo_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking"
tags: [reasoning, problem solving, thinking, structured]
config: |
  {
    "mcpServers": {
      "sequential-thinking": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
      }
    }
  }
---

Sequential Thinking gives an agent an explicit place to work through a problem in steps. Thoughts can be added, revised, and branched, so an early assumption can be corrected without discarding the whole line of reasoning.

It is a reference server from the Model Context Protocol project, runs locally, and needs no key. The output is a structured thought sequence rather than a final answer, so the agent still decides when the reasoning is complete.

It is useful for planning, debugging, and any task where the path matters as much as the result.
