---
title: "Agent Permissions Audit"
slug: agent-permissions-audit
category: security
date: 2026-11-12
excerpt: "Audits what an AI agent can actually do: every tool, MCP server, OAuth scope and token it holds, what it can reach with them, and the smallest set it needs."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [security, agents, permissions, mcp, oauth, least privilege, tokens]
usage: |
  Audit the permissions this agent has. List every tool, MCP server, OAuth
  scope, token and filesystem path it can reach. Say what an attacker could
  do with each one, then give me the smallest set that still does the job.

  Agent configuration and tool list:
  [paste config, tool definitions, scopes, and env var names]
related_skills: [security-review, mcp-builder, rag-architect]
skill_file: |
  ---
  name: agent-permissions-audit
  description: Audit an AI agent's tools, MCP servers, OAuth scopes, tokens and file access for least privilege, and name the blast radius of each permission. Use when the user asks whether an agent is safe to run, what access it really has, or how to reduce its permissions.
  ---

  # Agent Permissions Audit

  An agent is a credential with a conversation attached. Audit the credential
  first, the prompt second.

  ## Inputs

  Ask for whatever is missing:

  - The agent's tool and function definitions, including descriptions
  - MCP servers it connects to: transport, auth method, endpoint
  - OAuth scopes and whether consent is per-user or service-wide
  - API keys and what they can reach, not just their names
  - Filesystem, shell, browser, and network access
  - Approval gates: which actions pause for a human and which do not
  - Where the agent runs: laptop, server, CI, or a third party's cloud
  - What the agent is supposed to be able to do, in one sentence

  If the one-sentence purpose is missing, stop and ask. Least privilege is
  measured against a task, not against a list.

  ## Method

  1. Write the intended job in one sentence, with its inputs and outputs.
  2. Build a table: permission, what it technically allows, what the task
     needs, verdict (keep, narrow, remove, gate).
  3. For every permission kept, name the blast radius: what one compromised
     run or one injected instruction could reach.
  4. Check what composes. Two harmless tools that together move data out are
     not harmless.
  5. Check who can write what the agent reads. Any content the agent can fetch
     is an input an attacker may control.
  6. Report the smallest set that still completes the task.

  ## Checks

  ### Credentials

  - Keys are scoped to the account, project, bucket, or database the task
    needs, not to the organization.
  - Read and write are separate keys where the provider allows it.
  - Tokens are short-lived, rotated, and not shared between agents.
  - No credential appears in the prompt, tool description, logs, or output.
  - The key belongs to a service identity, not to a person who may leave.

  ### Tool surface

  - Every tool earns its place. Unused tools are attack surface with no
    benefit.
  - Destructive tools (delete, transfer, deploy, send, execute) are gated on
    human approval, or excluded.
  - Arguments are validated by the server, not only by the model.
  - Tools that accept a free-form query or URL are treated as network access.
  - Shell and code execution run in a sandbox with a timeout and no host
    credentials mounted.

  ### Untrusted input

  - Web pages, emails, issues, tickets, PDFs, and tool results are data, not
    instructions.
  - The agent cannot be talked into new permissions by content it reads.
  - Content that reaches a write tool passed through a schema or an allowlist.
  - Exfiltration paths are blocked: no outbound URL built from fetched text,
    no image markdown pointing at an attacker domain.

  ### Isolation and logging

  - The agent's runtime cannot read other tenants' data or unrelated
    credentials.
  - Logs record tool name, arguments and outcome without recording secrets or
    personal data.
  - A run can be stopped and its side effects identified.
  - Rate and spend limits exist, so a loop cannot empty an account.

  ## Severity

  - Critical: unauth third party can reach credentials, tenant data, or
    destructive tools.
  - High: untrusted content can reach a write, send, or execute tool.
  - Medium: standing broad scope where a narrow one would work, gated action
    with a gate that can be bypassed.
  - Low: unused tool, verbose log, long-lived read-only token.

  ## Output format

  ```
  Task: ...

  Permissions
  | Permission | Allows | Needed? | Verdict |

  Blast radius
  1. permission -> worst realistic outcome

  Combined risks
  1. tool A + tool B -> ...

  Smallest set
  - keep: ...
  - narrow to: ...
  - remove: ...
  - gate: ...

  Not reviewed
  - ...
  ```

  Never call a permission safe because the model is well behaved. The
  permission is the control; the prompt is not.
---

Most agent audits read the system prompt and stop, which is the one part an attacker does not need to change. This skill starts at the credential and the tool list, because that is what determines the worst outcome of a bad run.

The composition step matters more than any single row. A search tool and an email tool are each reasonable; together they are a way to mail an attacker whatever the agent can find.

Pair it with Security Review for the server-side code and MCP Builder for the server's own auth model.
