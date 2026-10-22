---
title: "Memory MCP"
slug: memory
excerpt: "A knowledge-graph memory server that lets an agent persist entities, relations, and observations across sessions."
creator: "Anthropic"
license: "Other"
transport: "local"
repo_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/memory"
tags: [memory, knowledge graph, persistence, context]
config: |
  {
    "mcpServers": {
      "memory": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-memory"]
      }
    }
  }
---

The Memory server stores information as a knowledge graph of entities, relations, and observations. An agent can write facts during a session and read them back later, which gives long-running work a place to keep context that would otherwise fall out of the window.

It is one of the reference servers maintained in the Model Context Protocol repository. No API key or hosted account is required, and the graph is persisted locally.

It suits assistants that need continuity across conversations, such as a project companion that remembers decisions, people, and open threads.
