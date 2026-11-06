---
title: "Docker MCP Server"
slug: docker
excerpt: "Let an agent inspect containers, images, logs, and networks on the local Docker daemon so it can debug a stack without shell access."
creator: "ckreiling"
license: "MIT"
transport: "local"
repo_url: "https://github.com/ckreiling/mcp-server-docker"
tags: [docker, containers, devops, logs, local]
config: |
  {
    "mcpServers": {
      "docker": {
        "command": "uvx",
        "args": ["mcp-server-docker"]
      }
    }
  }
---

The Docker MCP server exposes the local daemon to an agent: list containers and images, read logs, inspect a container, and run a one-off command in a container. It turns a debugging conversation into a set of read operations instead of a stream of shell commands.

Access to the Docker socket is effectively root on the host. Run it on a development machine, not on a shared build host, and do not expose the socket to a remote agent you do not control.

Use it to answer questions like why a container restarted, which image a service is actually running, and whether a port is published as expected.
