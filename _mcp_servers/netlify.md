---
title: "Netlify MCP Server"
slug: netlify
excerpt: "Connects an agent to Netlify so it can create projects, deploy builds, and manage sites through the API and CLI."
creator: "Netlify"
license: "ISC"
transport: "remote"
repo_url: "https://github.com/netlify/netlify-mcp"
homepage: "https://docs.netlify.com/build/build-with-ai/netlify-mcp-server/"
tags: [deployment, hosting, netlify, sites, ci]
config: |
  {
    "mcpServers": {
      "netlify": {
        "url": "https://mcp.netlify.com/mcp"
      }
    }
  }
---

Netlify's MCP server lets an agent create projects, trigger builds, deploy sites, and manage environment variables and forms through the Netlify API and CLI. The hosted endpoint is the recommended path and authenticates with OAuth.

A local server is available through `npx -y @netlify/mcp` when remote servers are blocked. It requires Node.js 22 or later. If OAuth fails, a personal access token can be supplied through `NETLIFY_PERSONAL_ACCESS_TOKEN`, but it should be removed from the config once authentication works.

Deploys change production, so keep the agent on a branch deploy or a preview context until you have watched it complete a full deploy.
