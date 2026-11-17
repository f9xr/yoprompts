---
title: "Ant Design AGENTS.md"
title_tag: "Ant Design AGENTS.md — agent instructions file"
slug: ant-design-agents
file_type: agents
date: 2026-11-16
excerpt: "A 300-line rulebook for a 84-component React library: style precedence, demo and test conventions, mandatory PR template, changelog format."
creator: "Ant Design"
license: "MIT"
repo_url: "https://github.com/ant-design/ant-design"
repo_branch: "master"
source_file: "AGENTS.md"
tags: [react, component library, conventions, pull requests, chinese]
related_files: [airflow-agents, agents-md]
---

Most AGENTS.md files are a page of setup commands. This one is a specification of a codebase: Ant Design has 84+ components, a CSS-in-JS theming layer, 150+ locales and a docs site, and the file spends its length on the rules that keep those in agreement.

The section worth stealing is style precedence. When a component root can receive `styles.root` from ConfigProvider, a `style` from ConfigProvider, its own `styles.root` and its own `style`, the file fixes the order from lowest to highest so an agent cannot invent a fifth path. Import conventions follow the same shape: demos and tests each have their own allowed entry points, and inline relative imports across those boundaries are called out as the thing that breaks the site build.

It also shows how far a context file can go without becoming documentation. Pull requests get a mandatory template, a title format, a branch strategy and change-type labels. Changelogs get scope, principles, format and emoji rules. Docs get API-table formatting, anchor-id rules and i18n requirements. None of it is prose for humans; all of it is checkable.

It closes with four coding behaviours — think before coding, prefer simplicity, make surgical changes, work from a goal — which is the part a reviewer notices first, because those are the habits that decide whether a diff is reviewable.

The file is written in Chinese, which makes it a useful counterexample to the assumption that an English file is the default.
