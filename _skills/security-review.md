---
title: "Security Review"
slug: security-review
category: security
date: 2026-11-04
excerpt: "Reviews a change for the security bugs that actually ship: auth gaps, injection, secret handling, unsafe defaults, and missing tenant checks."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [security, code-review, auth, injection, engineering]
usage: |
  Review this change for security issues.

  Focus on exploitable paths, not style. Give the file and line, the attack
  path, and the smallest fix. Do not invent threats the code cannot reach.

  Change or diff:
  [paste code]
related_skills: [webapp-testing, bug-triage, api-docs-writer]
skill_file: |
  ---
  name: security-review
  description: Review code changes for exploitable security issues such as broken authorization, injection, secret exposure, unsafe defaults, and missing tenant isolation. Use when the user asks for a security review, threat model, auth check, or secure code review.
  ---

  # Security Review

  Find the bug an attacker can reach. A theoretical issue with no path is
  noise.

  ## Workflow

  1. Map the trust boundary: who can call this, with what role, from where.
  2. Trace untrusted input to every sink: database, shell, file, URL, HTML,
     template, log.
  3. Check authorization on the object, not just the route.
  4. Check secrets and defaults.
  5. Check failure behavior: does it fail closed or leak?
  6. For each finding, give the attack path and the smallest fix.

  ## Checks

  ### Authentication and authorization

  - Every route has an auth check, including the new one.
  - Object-level check: the caller owns or can access this record.
  - Tenant check: the query filters by tenant, not only by id.
  - Role check uses server state, never a client-supplied role.
  - Admin and internal endpoints are separately protected.
  - Direct object references are not guessable without a check.

  ### Injection

  - SQL uses parameters, never string concatenation.
  - Shell commands avoid user input; if unavoidable, use an allowlist.
  - HTML output is escaped by context: text, attribute, URL, script.
  - Templates do not render user input as code.
  - Paths are resolved and checked against an allowed root.
  - SSRF: user-supplied URLs are validated and blocked from internal ranges.

  ### Secrets

  - No key, token, password, or private key in code, logs, errors, or client
    bundles.
  - Secrets come from the environment or a secret manager.
  - Errors do not echo the secret or the full request.
  - Tokens have the shortest scope and lifetime that work.

  ### Data handling

  - Sensitive fields are not logged.
  - Personal data is minimized and has a retention rule.
  - File uploads check type, size, and storage location.
  - Deserialization does not accept arbitrary classes or functions.

  ### Defaults and failure

  - Deny by default when a permission is unknown.
  - Rate limits on auth, reset, and expensive endpoints.
  - CSRF protection for cookie-based state changes.
  - Cookies are Secure, HttpOnly, and SameSite where appropriate.
  - CORS is explicit, not wildcard with credentials.

  ### Dependencies and supply chain

  - New dependencies are necessary and maintained.
  - Install scripts and postinstall hooks are understood.
  - Lockfiles are committed.

  ## Severity

  - Critical: remote code execution, auth bypass, tenant data leak.
  - High: stored injection, secret exposure, privilege escalation.
  - Medium: SSRF, weak rate limit, missing CSRF on a sensitive action.
  - Low: verbose error, missing header with no exploit path.

  ## Output format

  ```
  Critical
  1. file:line. Issue. Attack path: ... Fix: ...

  High
  2. ...

  Notes
  - Areas reviewed with no finding: ...
  - Not reviewed: ...
  ```

  Never claim a vulnerability without a path. If the path depends on a
  configuration you cannot see, say so and name the assumption.
---

Security reviews that list every possible weakness train teams to ignore the report. This skill starts from reachability: who can call the code, with what input, and what happens next.

Authorization gets special attention because route-level checks are common and object-level checks are not. Tenant isolation gets its own line because it is the bug that becomes a headline.

Pair it with Bug Triage for the reproduction and Webapp Testing for the regression test.
