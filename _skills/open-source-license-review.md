---
title: "Open Source License Review"
title_tag: "Open Source License Review — AI agent skill for Legal"
slug: open-source-license-review
category: legal
date: 2026-11-12
excerpt: "Checks dependency licenses against how the product is distributed, separates copyleft obligations from attribution chores, and names the packages that need a decision."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [licensing, open source, compliance, legal, dependencies, copyleft]
usage: |
  Review these dependencies for license risk.

  Tell me how the product is distributed, then flag the licenses that create
  obligations: copyleft, source disclosure, network use, attribution, and
  patent clauses. Do not call a license risky without saying what triggers
  the risk.

  Dependency list, distribution model, and whether we modify code:
  [paste]
related_skills: [contract-review, security-review, api-docs-writer]
skill_file: |
  ---
  name: open-source-license-review
  description: Review third-party dependency licenses against a distribution model, including copyleft triggers, attribution requirements, network-use clauses, and patent terms. Use when the user asks about open source license compliance, dependency licensing, a GPL or AGPL question, or whether a package can be shipped.
  ---

  # Open Source License Review

  A license is a set of conditions, not a risk score. The same package is
  fine in a SaaS backend and a problem in a shipped binary.

  ## Workflow

  1. Establish the distribution model. It decides almost everything.
  2. Group dependencies by license family.
  3. Identify which obligations are triggered by that distribution.
  4. Find the packages that need a decision, not a cleanup task.
  5. Distinguish direct dependencies from transitive ones.
  6. List the attribution work separately.

  ## Distribution models

  - Hosted service: users interact over the network; code is not distributed.
  - Shipped application: binary or bundle delivered to the user.
  - Library or SDK: your code is embedded in someone else's product.
  - Internal only: no distribution outside the organization.
  - Source-available: the repository itself is published.

  Ask for all that apply. A company can be in three of these at once.

  ## License families

  ### Permissive

  MIT, ISC, BSD-2, BSD-3, Apache-2.0. Require notice retention; Apache adds a
  patent grant and a NOTICE file obligation. Usually compatible with
  shipping, but the attribution must actually exist.

  ### Weak copyleft

  LGPL, MPL-2, EPL. Obligations attach to the licensed files or the library,
  not the whole application, provided the library stays separable. Static
  linking and modification change the analysis; say which applies.

  ### Strong copyleft

  GPL-2.0, GPL-3.0. Distribution of a derivative work triggers source
  disclosure under the same license. SaaS use is usually not distribution,
  but shipping a client or an on-prem image is.

  ### Network copyleft

  AGPL-3.0. The trigger is users interacting with a modified version over a
  network, which reaches hosted services. This is the license most often
  discovered after launch.

  ### Other

  SSPL, BUSL, Commons Clause, custom licenses. These restrict commercial use
  or hosting. They are not open source and need a business decision, not a
  compliance checkbox.

  ## Checks

  - Are license files present, or is the metadata the only source?
  - Do transitive dependencies change the picture?
  - Is any GPL or AGPL code linked into a shipped artifact?
  - Are modifications to copyleft code published as required?
  - Is attribution visible where the license requires it, such as an about
    screen or a notices file?
  - Are there dual licenses with a commercial option?
  - Do patent clauses conflict with the company's own patent posture?
  - Are there packages with no license at all? Absence is not permission.

  ## Output

  ```
  Distribution model

  By license family
  - Package, version, license, direct or transitive, obligation.

  Needs a decision
  1. Package. Trigger. Consequence. Options: replace, isolate, buy, accept.

  Attribution work
  - What must appear where.

  Unknowns
  - Packages with missing or contradictory metadata.
  ```
---

License reviews go wrong when they produce a red list without a distribution model. The same AGPL package is irrelevant in an internal tool and existential in a shipped appliance.

This skill asks what is actually distributed before judging any license, then separates decisions from chores: replacing a package is a decision, adding a notices file is a task.

Pair it with Contract Review when a customer agreement includes open source warranties, or Security Review for the dependency supply chain itself.
