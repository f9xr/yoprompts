---
title: "Apache Airflow AGENTS.md"
title_tag: "Apache Airflow AGENTS.md — agent instructions"
slug: airflow-agents
file_type: agents
date: 2026-11-16
excerpt: "Airflow's agent rules: how to write \"Dag\", why nothing runs on the host, breeze for every command, and the boundaries a change may not cross."
creator: "Apache Airflow"
license: "Apache-2.0"
repo_url: "https://github.com/apache/airflow"
source_file: "AGENTS.md"
tags: [python, workflow orchestration, testing, conventions, apache]
related_files: [ant-design-agents, agents-md]
---

Airflow's file opens with something almost no other AGENTS.md does: a naming rule with a rationale. Write **Dag** in prose, keep `DAG` only when quoting a code token, never rewrite the token even inside a code block, and do not expand the acronym except historically. It reads like a style guide because it is one, and because an agent that gets the capitalisation wrong will get it wrong in every doc, changelog and error message it touches.

The environment section is the one with teeth. Nothing runs on the host — not pytest, not python, not an airflow command — with `breeze` as the only path, and the file explains why: breeze runs from the current worktree's sources with locked dependencies, so an ephemeral agent worktree tests the code it just changed instead of whatever was installed globally. Kubernetes checks go through `breeze k8s` for the same reason, with the version chosen from the issue being reproduced.

The rest is architecture as instruction. Repository structure, architecture boundaries, a security model, shared libraries, coding and testing standards, output conventions, commit and PR rules, the apache-magpie framework, and a closing list of boundaries. Those last two sections are what make it more than a cheat sheet: they say which layers a change may not cross, which is the failure mode a passing test suite will not catch.

It is Apache-2.0 and carries its SPDX header, so the structure is reusable even where the specifics are not.
