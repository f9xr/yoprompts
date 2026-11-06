---
title: "Make a slow SQL query fast without changing the answer"
slug: sql-performance-tuning
category: data
category_label: Data Analysis
difficulty: advanced
tools: [chatgpt, claude, gemini]
read_time: 9
seo:
  type: "WebPage"
picks: []
related: [chat-with-your-data, website-code-audit, debug-this-error]
art: chart
tags: [sql, database, performance, query, indexing, explain plan, data]
excerpt: "Reads a slow query and its execution plan, finds the real bottleneck, and returns a safer rewrite with the index and the tradeoff named."
prompt: |
  You are a database performance engineer. You optimise the execution plan,
  not the formatting. A query can look clean and still scan a table three
  times.

  ## What I will give you

  - Database engine and version
  - The slow query
  - The execution plan, preferably with actual rows and timings
  - Table and index definitions for the tables involved
  - Approximate row counts
  - The result set the query must preserve
  - Read and write volume

  If the plan is missing, ask for it. Do not guess at performance.

  ## Workflow

  1. Confirm the engine and version. Plans differ.
  2. Read the plan before the SQL. Find the node with the highest cost or the
     largest gap between estimated and actual rows.
  3. Identify the bottleneck: missing index, unusable index, wrong join order,
     function on a column, implicit cast, excessive transfer, or a statistics
     problem.
  4. Rewrite only the part that changes the plan.
  5. Give the index change and the write cost it adds.
  6. State what could regress and how to test it.
  7. Keep the result set identical unless I explicitly allow a change.

  ## Common fixes to check

  - Wrap a date column in a range instead of a function.
  - Match join column types to avoid an implicit cast.
  - Replace a leading wildcard with full text or a trigram index.
  - Use keyset pagination instead of a large offset.
  - Remove SELECT * and name the columns.
  - Replace OR across columns with UNION ALL when the plan scans.
  - Add a composite index in equality-then-range order.
  - Refresh statistics before adding another index.

  ## Output format

  Engine, bottleneck, plan evidence, rewrite, index, tradeoff, and regression
  risk. If the schema is the real problem, say so and stop.
workflow:
  - "Read the execution plan and find the expensive node"
  - "Separate a missing index from an unusable one"
  - "Rewrite the smallest part that changes the plan"
  - "Quantify the write and storage cost of the index"
  - "Return the rewrite, the tradeoff, and a test plan"
output_preview: "A plan-first diagnosis, a minimal rewrite, an index statement with its write cost, and the regression test to run before shipping."
how_to_use:
  - "Paste the plan with actual row counts when you can. Estimated rows alone hide the statistics problem that usually explains the cost."
  - "Include the schema and indexes. A rewrite without them is a guess about why the planner chose that path."
  - "Say whether the result set may change. The prompt will preserve it unless you allow a semantic change."
tips:
  - "The biggest gap between estimated and actual rows is usually the real finding, not the slowest node."
  - "An index added for one query can slow every insert. Name the write cost before you ship it."
  - "Test on production-shaped data. A rewrite that wins on a 1,000-row sample can lose on 10 million."
  - "If the query feeds a dashboard, check whether the dashboard needs every row or only the latest."
example_output: |
  Engine: PostgreSQL 16

  Bottleneck: sequential scan on orders (1.2M rows). The predicate wraps
  created_at in date(), so the index cannot be used.

  Rewrite:
  SELECT id, total FROM orders
  WHERE created_at >= '2026-11-01' AND created_at < '2026-11-02';

  Index:
  CREATE INDEX CONCURRENTLY idx_orders_created_at ON orders (created_at);

  Tradeoff: about 40MB and a small insert cost.
  Risk: timezone assumptions must match the stored values.
faq:
  - q: "What if I cannot run EXPLAIN?"
    a: "Ask for it or use the database's plan cache view. Without a plan the advice is generic, and generic indexing advice is how unused indexes accumulate."
  - q: "Should I add an index for every slow query?"
    a: "No. One composite index often serves several queries. Check the write cost and whether an existing index can be reordered first."
  - q: "Can the model rewrite the query safely?"
    a: "It can propose a rewrite and explain the tradeoff. Run it against a copy, compare the result sets, and review the plan before shipping."
  - q: "What about ORM-generated SQL?"
    a: "Paste the generated SQL and the ORM call. The fix may belong in the ORM query, not in the database."
---
Slow queries usually fail for one reason: the planner cannot use the path you assumed. The prompt reads the plan first because the plan is the evidence, and it returns the rewrite, the index, and the tradeoff together so the change can be reviewed.

It also names the regression risk, which is the part missing from most query-tuning advice.

Pair it with Chat With Your Data when the query feeds an analysis, or with Debug This Error when the database is returning errors instead of being slow.
