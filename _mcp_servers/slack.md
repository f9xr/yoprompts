---
title: "Slack MCP Server"
slug: slack
excerpt: "Connect an agent to Slack to read channel history, search messages, and post updates with a bot token scoped to one workspace."
creator: "Model Context Protocol"
license: "MIT"
transport: "local"
repo_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/slack"
tags: [slack, chat, notifications, collaboration]
config: |
  {
    "mcpServers": {
      "slack": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-slack"],
        "env": {
          "SLACK_BOT_TOKEN": "xoxb-your-token",
          "SLACK_TEAM_ID": "T00000000"
        }
      }
    }
  }
---

The Slack server lets an agent read channel history, search messages, and post a message through a bot token. It is useful for turning a long thread into a summary, checking what the team already decided, or posting a scheduled update.

The bot token defines the boundary. Grant only the scopes the task needs, and invite the bot to specific channels rather than the whole workspace. Reading private channels is a permission decision, not a prompt decision.

Keep the token in an environment variable. A Slack token in a committed config is a workspace-wide incident waiting to happen.
