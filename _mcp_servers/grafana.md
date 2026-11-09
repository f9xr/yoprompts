---
title: "Grafana MCP Server"
slug: grafana
excerpt: "Lets an agent search dashboards, query Prometheus and Loki, inspect alerts, and read incidents in a Grafana instance."
creator: "Grafana Labs"
license: "Apache-2.0"
transport: "local"
repo_url: "https://github.com/grafana/mcp-grafana"
tags: [observability, dashboards, prometheus, loki, alerts, monitoring]
config: |
  {
    "mcpServers": {
      "grafana": {
        "command": "uvx",
        "args": ["mcp-grafana"],
        "env": {
          "GRAFANA_URL": "http://localhost:3000",
          "GRAFANA_SERVICE_ACCOUNT_TOKEN": "<your-service-account-token>"
        }
      }
    }
  }
---

Grafana's official MCP server exposes a Grafana instance to an agent. It can search dashboards, read panels and datasources, run PromQL and LogQL queries, inspect alert rules, and read incidents and OnCall schedules.

Several tool groups are disabled by default, including SQL datasources, CloudWatch, Elasticsearch, and admin operations. Enable only the groups you need with `--enabled-tools` so the agent cannot reach data it has no reason to see.

Create a dedicated service account token for the server and grant the smallest role that supports the tools you enable. Start with read-only dashboards and queries, then add write tools after the read path is proven.
