---
title: "SQL Optimizer"
slug: sql-optimizer
category: data
date: 2026-11-04
excerpt: "Reads a slow query and its plan, finds the real bottleneck, and returns a safer rewrite with the index and the tradeoff named."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [sql, database, performance, query, data]
usage: |
  Optimize this query. Explain the plan first, then the rewrite.

  Name the bottleneck, the index change, and what could regress.
  Do not change the result set or the filters.

  Query and plan:
  [paste SQL and EXPLAIN output]
related_skills: [data-story, seo-codebase-audit]
skill_file: |
  ---
  name: sql-optimizer
  description: Diagnose and rewrite slow SQL queries using the execution plan, schema, and indexes. Use when the user asks to optimize a query, read an EXPLAIN plan, add indexes, reduce database load, or fix a slow report.
  ---

  # SQL Optimizer

  Optimize the plan, not the formatting. A query can look clean and still
  scan a table three times.

  ## Workflow

  1. Confirm the database engine and version. Plans and hints differ.
  2. Read the plan before the SQL. Find the operation with the highest cost
     or the largest row estimate gap.
  3. Identify the bottleneck: missing index, unusable index, wrong join
     order, function on a column, type mismatch, or excessive data transfer.
  4. Rewrite the smallest part that changes the plan.
  5. Compare estimated rows to actual rows. A large gap is a statistics or
     predicate problem.
  6. Return the rewrite, the index, and the tradeoff.

  ## Common bottlenecks

  - **Full scan on a filtered table.** Add or fix the index. Check that the
    predicate is sargable.
  - **Function on an indexed column.** WHERE date(created_at) = ... prevents
    the index. Rewrite as a range.
  - **Implicit cast.** VARCHAR joined to INT kills the index. Match types.
  - **Leading wildcard.** LIKE '%term' cannot use a normal index. Use full
    text or a trigram index only if the engine supports it.
  - **OR across columns.** Often becomes a scan. Test a UNION ALL rewrite.
  - **SELECT *.** Pulls columns the query does not use. Name the columns.
  - **Nested loop over many rows.** Check the join order and the index on the
    inner side.
  - **Distinct used as a bandage.** Find the duplicate source instead.
  - **Offset pagination on a large table.** Use keyset pagination.
  - **Repeated subquery.** Use a CTE or a join when the planner supports it.

  ## Index rules

  - Match the leftmost columns of the index to equality predicates first,
    then range predicates.
  - Include columns needed for the select list only when the engine supports
    covering indexes and the extra width is justified.
  - Do not add an index without naming the write cost and the storage cost.
  - Prefer one composite index over several single-column indexes when the
    query always filters the same way.
  - Check cardinality. An index on a low-cardinality column rarely helps alone.

  ## Rewrite rules

  - Keep the result set identical unless the user allows a change.
  - Do not use optimizer hints unless the user asks and the engine supports
    them.
  - Do not move logic into the application as a first step. Fix the query
    first.
  - If the schema is the real problem, say so and stop.

  ## Output format

  ```
  Engine: PostgreSQL 16
  Bottleneck: sequential scan on orders (1.2M rows), predicate wrapped in date().

  Plan evidence:
  - Node: Seq Scan cost 0..48210, rows 1204000
  - Filter: date(created_at) = '2026-11-01'

  Rewrite:
  SELECT ... WHERE created_at >= '2026-11-01' AND created_at < '2026-11-02';

  Index:
  CREATE INDEX CONCURRENTLY idx_orders_created_at ON orders (created_at);

  Tradeoff: write cost on insert, about 40MB.
  Risk: timezone assumptions must match the stored values.
  ```

  If the plan is missing, ask for it. Guessing at performance is how indexes
  get added that no query uses.
---

Most slow queries are not slow because the SQL is long. One predicate wrapped in a function, one implicit cast, or one missing composite index usually explains the whole plan.

The skill reads the plan first because the plan is the evidence. The rewrite, the index, and the tradeoff come together so the change can be reviewed instead of copied.

Pair it with SEO Codebase Audit when the database sits behind a content site, or with Data Story Builder when the query feeds a report.
