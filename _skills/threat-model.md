---
title: "Threat Model"
title_tag: "Threat Model — AI agent skill for Security"
slug: threat-model
category: security
date: 2026-11-12
excerpt: "Builds a short, usable threat model for a feature or system: assets, actors, trust boundaries, the handful of threats that matter, and the cheapest control for each."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [security, threat modelling, architecture, trust boundaries, risk, design]
usage: |
  Threat model this feature. Name the assets, the actors, and where trust
  changes. List the threats that are actually reachable, rank them, and give
  the cheapest control for each. Skip anything that is only theoretical.

  Feature or architecture:
  [paste the design, data flow, or diagram description]
related_skills: [security-review, agent-permissions-audit, privacy-policy-writer]
skill_file: |
  ---
  name: threat-model
  description: Produce a compact threat model for a feature or system covering assets, actors, trust boundaries, reachable threats and the cheapest controls. Use when the user asks for a threat model, security design review, risk assessment, or asks what could go wrong before building.
  ---

  # Threat Model

  A threat model that lists forty risks changes no decisions. Find the five
  that a real attacker would try, and say what to build first.

  ## Inputs

  Ask for, or derive:

  - What the system does, in two sentences
  - Who uses it: anonymous, authenticated, admin, internal service, partner
  - The data it holds, and which parts are sensitive
  - Where it runs and what it talks to
  - What changes when it is compromised: money, data, availability,
    reputation, physical safety
  - The stage: design, pre-launch, live
  - Constraints: team size, deadline, existing platform controls

  If the data is unclear, stop and ask. You cannot rank threats to assets you
  cannot name.

  ## Method

  1. **Assets.** List what is worth attacking, ranked by what it costs if it
     leaks, changes, or goes offline.
  2. **Actors.** Anonymous internet, authenticated user, malicious tenant,
     insider, compromised dependency, automated scraper. Name the motive for
     each that is plausible here.
  3. **Entry points and trust boundaries.** Draw the line wherever data or a
     request crosses from less trusted to more trusted. Threats live on the
     lines.
  4. **Threats.** For each boundary, ask: can this input be forged, replayed,
     escalated, or made to do more than intended? Write the threat as a
     sentence an engineer can act on: actor, action, asset.
  5. **Rank.** Reachable and damaging first. Drop anything requiring an
     attacker capability you have no reason to expect, but say what you
     dropped.
  6. **Controls.** For each kept threat, the cheapest control that removes it
     or cuts its impact, and whether it is prevention or detection.

  ## What to cover

  - Identity: how a caller proves who they are, and what happens when the
    proof is stolen
  - Authorization: object level and tenant level, not just route level
  - Session and token lifetime, revocation, and reuse
  - Input that reaches a query, a shell, a template, a file path, or a URL
  - Data at rest and in transit, including backups and exports
  - Multi-tenancy: every query path and cache key
  - Third parties: what they receive, what they can do on your behalf
  - Abuse: rate limits, enumeration, scraping, resource exhaustion
  - Supply chain: dependencies, build pipeline, deploy credentials
  - Detection: what you would see, and how fast

  ## Output format

  ```
  Assets (ranked)
  1. ...

  Actors
  - ...

  Trust boundaries
  1. browser -> api: ...

  Threats (ranked)
  1. Actor does X to asset Y via Z. Reachable because ...
     Control: ... (prevention/detection) Cost: S/M/L

  Accepted risks
  - threat, why accepted, what would change that

  Dropped as unreachable
  - threat, why it does not apply here

  Open questions
  - ...
  ```

  ## Rules

  - Every threat names an actor and an asset. "Could be insecure" is not a
    threat.
  - Rank by expected loss, not by how interesting the attack is.
  - Prefer a control you can build this week over a programme you will not
    finish.
  - Say when a control belongs in the platform rather than the feature.
  - Never claim a risk is handled without naming the mechanism.
  - If two threats share one fix, say so and put the fix first.
---

Threat models fail when they are written as an inventory of everything that has ever gone wrong anywhere. This one is scoped to the boundaries of one system, so the list stays short enough to act on.

The ranking is deliberately economic. A design review that asks for five controls when two would cover the realistic attacks is a review the team will route around.

Pair it with Security Review for the code-level pass and Agent Permissions Audit when the system includes an AI agent with tools.
