---
title: "Datadog MCP Server"
title_tag: "Datadog MCP server: setup, config and tools"
slug: datadog
excerpt: "Datadog's managed MCP server for logs, metrics, traces, monitors, dashboards, incidents, and security signals from an agent."
creator: "Datadog"
license: "MIT"
transport: "remote"
repo_url: "https://github.com/datadog-labs/mcp-server"
homepage: "https://docs.datadoghq.com/mcp_server/setup"
tags: [observability, logs, metrics, traces, incidents, datadog]
related: [grafana, sentry, posthog]
config: |
  {
    "mcpServers": {
      "datadog": {
        "type": "http",
        "url": "https://mcp.datadoghq.com/v1/mcp"
      }
    }
  }
---

Datadog's managed MCP server connects an agent to the observability platform rather than to a local collector. It can query logs, metrics, and traces, read monitors and dashboards, and pull incident and security signal data for a time window.

The endpoint is regional. `mcp.datadoghq.com` serves the US1 site; other sites use their own host, such as `mcp.datadoghq.eu` for the EU. Requests are forwarded with the authenticated user's credentials, so the agent inherits exactly the permissions that user already has and cannot see beyond them.

Toolset scoping is worth setting on a large account: the `toolsets` query parameter limits the server to the products in use, which keeps the tool list out of the context window.

Use it to investigate a spike, correlate a deploy with an error rate change, or answer a question about a monitor without leaving the conversation. Anything that changes configuration should keep human confirmation on.
