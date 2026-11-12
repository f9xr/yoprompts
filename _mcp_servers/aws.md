---
title: "AWS MCP Server"
slug: aws
excerpt: "AWS's managed remote MCP server for API calls, documentation search, and official guidance, with IAM permissions and CloudTrail audit logging."
creator: "AWS"
transport: "remote"
homepage: "https://docs.aws.amazon.com/agent-toolkit/latest/userguide/getting-started-aws-mcp-server.html"
tags: [aws, cloud, infrastructure, api, iam, documentation]
config: |
  {
    "mcpServers": {
      "aws-mcp": {
        "type": "http",
        "url": "https://aws-mcp.us-east-1.api.aws/mcp"
      }
    }
  }
---

AWS MCP Server is the managed endpoint that replaces the earlier local AWS API and AWS Knowledge servers. It combines API access with documentation search, and runs on AWS infrastructure rather than on the developer machine.

The endpoint is regional: `https://aws-mcp.<region>.api.aws/mcp` for `us-east-1`, `us-west-2`, `ap-southeast-1`, `ap-southeast-2`, `ap-northeast-1`, `eu-central-1`, `eu-west-1`, and `eu-west-2`. Pick the region your account mainly uses and substitute it in the URL above.

Authentication is either OAuth in the browser or SigV4 through the AWS CLI and the MCP Proxy for AWS. OAuth is the quicker path for desktop and web clients; SigV4 is the better fit for coding agents, multi-account work, a default region, or a read-only mode that hides write tools from the agent entirely.

Permissions come from IAM, and requests are recorded in CloudTrail, so the agent cannot exceed the principal it authenticates as. OAuth sign-in needs `signin:AuthorizeOAuth2Access` and `signin:CreateOAuth2Token`, covered by the `AWSMCPSignInOAuthAccessPolicy` managed policy.

The separate `awslabs/mcp` repository still publishes local Python servers, such as `awslabs.aws-documentation-mcp-server`, for setups that cannot use a remote endpoint. Running both that suite and this one tends to duplicate tools and confuse the agent, so pick one.
