---
title: "Filesystem MCP Server"
slug: filesystem
excerpt: "Give an agent scoped read and write access to specific local directories through the reference Filesystem server."
creator: "Model Context Protocol"
license: "MIT"
transport: "local"
repo_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem"
tags: [files, filesystem, local]
config: |
  {
    "mcpServers": {
      "filesystem": {
        "command": "npx",
        "args": [
          "-y", "@modelcontextprotocol/server-filesystem",
          "C:\\Users\\you\\Projects"
        ]
      }
    }
  }
---

The Filesystem server is the reference MCP implementation for local file access. It only reaches the directories you pass as arguments, so permissions are bounded by the command line rather than by the agent's judgment.

It supports reading and writing files, listing and searching directories, moving and copying entries, and reading file metadata. Use it when an agent needs to work on documents or a project outside its usual workspace.

Start with the narrowest directory that contains the work. Adding a second directory is another argument, not a wider permission.
