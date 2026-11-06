---
title: "Kubernetes MCP Server"
slug: kubernetes
excerpt: "Let an agent inspect pods, deployments, events, and logs in a Kubernetes cluster through the local kubeconfig context."
creator: "Flux159"
license: "MIT"
transport: "local"
repo_url: "https://github.com/Flux159/mcp-server-kubernetes"
tags: [kubernetes, devops, containers, cluster, logs]
config: |
  {
    "mcpServers": {
      "kubernetes": {
        "command": "npx",
        "args": ["-y", "mcp-server-kubernetes"]
      }
    }
  }
---

The Kubernetes MCP server reads the current kubeconfig context and exposes pods, deployments, services, events, and logs to an agent. It is useful for answering why a pod is crash-looping, which image a deployment actually rolled out, and whether a recent change reached the cluster.

The kubeconfig context is the permission boundary. Use a namespace-scoped service account with read access, and switch context deliberately before starting a session.

Avoid write permissions during an incident review. An agent that can delete a pod can also make the incident worse while it is still diagnosing it.
