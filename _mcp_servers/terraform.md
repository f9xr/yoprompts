---
title: "Terraform MCP Server"
title_tag: "Terraform MCP server: setup, config and tools"
slug: terraform
excerpt: "Connects an agent to the Terraform Registry and HCP Terraform for provider docs, module discovery, and workspace operations."
creator: "HashiCorp"
license: "MPL-2.0"
transport: "local"
repo_url: "https://github.com/hashicorp/terraform-mcp-server"
tags: [terraform, infrastructure as code, iac, hcp terraform, registry, devops]
config: |
  {
    "mcpServers": {
      "terraform": {
        "command": "docker",
        "args": [
          "run", "-i", "--rm",
          "-e", "TFE_ADDRESS",
          "-e", "TFE_TOKEN",
          "hashicorp/terraform-mcp-server"
        ],
        "env": {
          "TFE_ADDRESS": "https://app.terraform.io",
          "TFE_TOKEN": "<your-token>"
        }
      }
    }
  }
---

The Terraform MCP server connects an agent to the public Terraform Registry and, when a token is supplied, to HCP Terraform or Terraform Enterprise. Registry tools search provider documentation, resolve module versions, and read policy details without any credentials.

HCP Terraform tools list organizations, projects, and workspaces, and can inspect runs and variables. Write operations are gated behind `ENABLE_TF_OPERATIONS` and should stay off until you have reviewed the workflow with a read-only token.

Start with the `registry` toolset, which needs no account. Add `terraform` tools only for a specific workspace, and use a token scoped to that organization.
