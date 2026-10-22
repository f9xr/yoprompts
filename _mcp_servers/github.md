---
title: "GitHub MCP Server"
slug: github
excerpt: "Connect an agent to repositories, issues, pull requests, code search, and Actions through GitHub's official MCP server."
creator: "GitHub"
license: "MIT"
transport: "local"
repo_url: "https://github.com/github/github-mcp-server"
tags: [github, code, issues, pull requests]
config: |
  {
    "mcpServers": {
      "github": {
        "command": "docker",
        "args": [
          "run", "-i", "--rm",
          "-e", "GITHUB_PERSONAL_ACCESS_TOKEN",
          "ghcr.io/github/github-mcp-server"
        ],
        "env": {
          "GITHUB_PERSONAL_ACCESS_TOKEN": "<your-token>"
        }
      }
    }
  }
---

GitHub's official MCP server exposes the platform through focused toolsets: repository contents, issues, pull requests, code search, commit history, releases, and Actions. A token scopes it to exactly the repositories and actions you allow.

Use it when an agent needs to read code outside the current workspace, triage issues, review a pull request, or check a workflow run without leaving the conversation.

The server is available as a Docker image and as a remote endpoint. The local Docker configuration above keeps the token on your machine.
