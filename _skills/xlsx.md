---
title: "XLSX"
slug: xlsx
category: data
date: 2026-10-28
excerpt: "Create and edit Excel workbooks with formulas, formatting, charts, pivot tables, and analysis that stays auditable."
creator: "Anthropic"
license: "Source-available"
repo_url: "https://github.com/anthropics/skills/tree/main/skills/xlsx"
tags: [excel, spreadsheets, formulas, analysis, charts]
usage: |
  Use the xlsx skill to clean sales.xlsx, add a summary sheet with formulas,
  and chart revenue by month without hardcoding the totals.
install: |
  npx skills add anthropics/skills@xlsx
---

The XLSX skill works with the workbook itself: sheets, formulas, number formats, conditional formatting, charts, and pivot tables. It can read an existing file, extend it, and write the result back without flattening formulas into values.

That distinction is the point. A spreadsheet whose totals are pasted numbers cannot be checked or updated. The skill prefers formulas and named ranges so the person who opens the file can see how each figure was produced.

The skill is source-available rather than open source. It is intended as a reference implementation, so verify calculations and formatting on a copy before using it for decisions.
