---
title: "Sentry MCP"
slug: sentry
excerpt: "Query Sentry issues, events, traces, and release health from an agent through Sentry's hosted MCP endpoint."
creator: "Sentry"
transport: "remote"
repo_url: "https://github.com/getsentry/sentry-mcp"
homepage: "https://docs.sentry.io/product/sentry-mcp/"
tags: [errors, monitoring, traces, debugging, observability]
config: |
  {
    "mcpServers": {
      "sentry": {
        "url": "https://mcp.sentry.dev/mcp"
      }
    }
  }
---

Sentry MCP exposes an organization's error and performance data to an agent. It can list projects and issues, pull event details and stack traces, inspect spans, and check release health.

The hosted endpoint uses OAuth and inherits the access of the signed-in Sentry user. Self-hosted Sentry installations use their own endpoint, documented upstream.

The practical use is debugging with evidence: ask for the issue behind an error, the events that share a fingerprint, and the release where it first appeared before proposing a fix.
