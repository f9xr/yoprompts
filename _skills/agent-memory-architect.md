---
title: "Agent Memory Architect"
slug: agent-memory-architect
category: meta
date: 2026-11-04
excerpt: "Designs what an agent should remember, where each memory lives, when it expires, and how it is retrieved without flooding the context window."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [agents, memory, context, architecture, meta]
usage: |
  Design a memory system for this agent.

  Cover what to store, where, expiry, retrieval, and what must never be
  stored. Include the failure mode for each choice.

  Agent and workflow:
  [describe the agent]
related_skills: [mcp-builder, skill-creator, workflow-automator]
skill_file: |
  ---
  name: agent-memory-architect
  description: Design memory and context systems for AI agents. Use when the user asks about agent memory, long-term context, conversation state, retrieval strategy, memory expiry, or how an agent should remember users across sessions.
  ---

  # Agent Memory Architect

  Memory is a product decision. Every stored fact costs context, privacy, and
  maintenance. Store less, retrieve better.

  ## Memory types

  | Type | Lives | Use for | Expiry |
  | --- | --- | --- | --- |
  | Working | Context window | Current task | End of turn |
  | Session | Session store | Thread state, preferences for this visit | Session end |
  | User | Database | Stable preferences, account facts | Review every 90 days |
  | Team | Database | Shared conventions, vocabulary | Review quarterly |
  | Knowledge | Vector or file store | Documents, policies, references | Per source |

  Do not put session facts in long-term memory. Do not put user facts in the
  system prompt.

  ## Design workflow

  1. List the decisions the agent must make.
  2. For each decision, name the fact required.
  3. Assign the shortest-lived store that still works.
  4. Define the write rule: explicit, inferred, or approved.
  5. Define the read rule: always, on demand, or never.
  6. Define expiry and deletion.
  7. Number the context budget.

  ## Write rules

  - **Explicit**: the user says "remember this". Safe.
  - **Inferred**: the agent decides. Useful, but needs a review path and an
    easy delete.
  - **Approved**: the agent proposes and the user confirms. Best for sensitive
    facts such as health, money, or identity.

  Never infer sensitive attributes. Never store a secret, token, or password
  in agent memory.

  ## Retrieval rules

  - Load stable preferences at session start, not on every turn.
  - Retrieve knowledge only when the task names the topic.
  - Cap retrieved chunks by token budget, not by count.
  - Prefer recency and relevance together, not recency alone.
  - Show the source of a retrieved fact when the answer depends on it.

  ## Context budget

  Reserve roughly: 20 percent system and tools, 30 percent task and history,
  30 percent retrieved evidence, 20 percent output. Adjust by task, but make
  the split explicit. An agent that fills the window with memory has no room
  to reason.

  ## Failure modes

  - Stale preference applied to a changed account.
  - Duplicate memories that disagree.
  - A retrieved document from the wrong tenant.
  - Prompt injection stored as a memory.
  - Memory growth with no delete path.
  - Sensitive data in logs or embeddings.

  ## Output format

  Return a table of memory type, fact, store, write rule, read rule, expiry,
  and risk. Then a short list of what must never be stored. Then the context
  budget.
---

Agent memory fails in both directions: an agent that forgets the user's name, and an agent that remembers a stale plan forever. The fix is not a bigger vector store. It is assigning each fact to the shortest-lived store that still does the job.

Write rules matter because inferred memory is where sensitive data and prompt injection enter. The skill makes the write path explicit and gives every memory an expiry.

Pair it with MCP Builder when memory is exposed as a tool, or with Workflow Automator when the agent acts across systems.
