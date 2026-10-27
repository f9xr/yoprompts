---
title: "Atlassian Rovo MCP"
slug: atlassian
excerpt: "Connect an agent to Jira, Confluence, Jira Service Management, Bitbucket, and Loom through Atlassian's Rovo MCP server."
creator: "Atlassian"
transport: "remote"
homepage: "https://developer.atlassian.com/cloud/rovo-mcp/guides/getting-started/"
tags: [jira, confluence, bitbucket, project management, documentation]
config: |
  {
    "mcpServers": {
      "atlassian": {
        "url": "https://mcp.atlassian.com/v2/mcp"
      }
    }
  }
---

Atlassian's Rovo MCP server connects an agent to the Teamwork Graph across Jira, Confluence, Bitbucket, Jira Service Management, and Loom. It can search work, summarize pages, create and update issues, and draft content in the tools a team already uses.

OAuth 2.1 is the recommended authentication path, and every action respects the authorizing user's existing permissions. API tokens are available in some organizations for non-interactive use.

Use the v2 endpoint at `https://mcp.atlassian.com/v2/mcp`. The older v1 and SSE endpoints are being retired.
