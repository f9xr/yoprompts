---
title: "GitLab MCP Server"
title_tag: "GitLab MCP server: setup, config and tools"
slug: gitlab
excerpt: "Connect an agent to GitLab projects, issues, merge requests, pipelines, and code search through GitLab's built-in MCP endpoint."
creator: "GitLab"
transport: "remote"
homepage: "https://docs.gitlab.com/user/model_context_protocol/mcp_server/"
tags: [gitlab, code, merge requests, issues, ci, devops]
config: |
  {
    "mcpServers": {
      "gitlab": {
        "type": "http",
        "url": "https://gitlab.com/api/v4/mcp"
      }
    }
  }
---

GitLab ships an MCP server as part of the product, served at `POST /api/v4/mcp` on GitLab.com and on self-managed instances. There is no separate process to run: the endpoint uses the same authentication and permissions as the rest of the API.

Toolsets are enabled per instance or per request with the `X-Gitlab-Enabled-Mcp-Server-Toolsets` header. The `core` toolset covers project and merge request work; `work_items` covers issues and epics. Turning off the rest keeps a large instance from filling the context window with tools the agent will never call.

Rate limits follow the namespace plan, counted per user, so a busy agent can exhaust the hourly allowance on a Free namespace quickly.

Use it to review a merge request, trace a failing pipeline, search across projects, or draft an issue from a conversation. For continuous integration changes, keep approval in the pipeline rather than in the chat.

Self-managed instances use their own hostname in place of `gitlab.com`; clients without native HTTP transport can bridge through `npx mcp-remote`.
