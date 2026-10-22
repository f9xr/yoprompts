---
title: "Context7 MCP"
slug: context7
excerpt: "Upstash's Context7 injects current, version-specific library documentation into an agent's context so APIs are not guessed."
creator: "Upstash"
license: "MIT"
transport: "local"
repo_url: "https://github.com/upstash/context7"
tags: [documentation, context, libraries, frameworks]
config: |
  npx ctx7 setup
---

Context7 resolves a library or framework to its current documentation and pulls the relevant sections into the agent's context. That replaces recalled API shapes with version-specific references, which reduces hallucinated imports and outdated method signatures.

The setup command detects the client and writes the configuration for it. No API key is required for the standard endpoint.

It is most useful when an agent is working against a fast-moving SDK or a framework version newer than its training data.
