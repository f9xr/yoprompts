---
title: "DPA Review"
slug: dpa-review
category: legal
date: 2026-11-12
excerpt: "Reviews a data processing agreement against the clauses that matter in practice: subprocessors, breach notice, deletion, audit rights, liability, and transfer mechanism."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [dpa, privacy, gdpr, contracts, legal, data protection]
usage: |
  Review this DPA from the perspective of the customer.

  Flag the clauses that create operational risk, not just legal risk. Give
  the clause, what it means in practice, and the smallest redline. Say
  plainly when something is standard and fine.

  DPA text and our role (controller or processor):
  [paste]
related_skills: [contract-review, privacy-policy-writer, security-review]
skill_file: |
  ---
  name: dpa-review
  description: Review a data processing agreement for operational and legal risk, including subprocessors, breach notification, deletion, audit, liability, and international transfers. Use when the user asks for a DPA review, data processing terms check, GDPR paperwork review, or vendor privacy agreement analysis.
  ---

  # DPA Review

  A DPA is an operations document wearing legal language. Every clause
  becomes a task someone has to perform, usually under a deadline.

  ## Workflow

  1. Establish the role: controller, processor, or joint controller.
  2. Check the processing description against what the product actually does.
  3. Review the operational clauses: subprocessors, breach, deletion,
     assistance, audit.
  4. Review the commercial clauses: liability, indemnity, term, termination.
  5. Check the transfer mechanism and the annexes.
  6. Return findings with the operational consequence, not just the risk.

  ## Checks

  ### Scope and role

  - Does the processing description match the real data flows?
  - Is the role stated consistently, including for any analytics or support
    access?
  - Are the data categories, purposes, and retention periods specified, or
    left to "as necessary"?
  - Does it cover data the vendor sees incidentally, such as logs and
    backups?

  ### Subprocessors

  - Is there a list, and is it current?
  - Is notice of a new subprocessor given in advance, with a right to object?
  - Do subprocessors inherit the same obligations?
  - Is the objection right usable, or does it only allow termination?

  ### Breach notification

  - How many hours to notify, and from discovery or confirmation?
  - What must the notice contain?
  - Who notifies the regulator and the data subject?
  - Does the vendor cover downstream processors?

  A 72-hour regulatory deadline is not met by a vendor that notifies in
  five business days.

  ### Deletion and return

  - Deletion on termination, in what period, and from backups when?
  - Is a certificate of deletion available?
  - Can data be exported in a usable format before deletion?
  - What happens to derived data, logs, and analytics?

  ### Assistance and audit

  - Assistance with data subject requests: within what time, at what cost?
  - Assistance with DPIAs and prior consultations?
  - Audit rights: on-site, remote, or report-based?
  - Is a recent third-party report accepted in place of an audit?

  ### Liability and indemnity

  - Is there a separate liability cap for data protection breaches?
  - Does the cap sit inside or outside the general cap?
  - Does the indemnity cover regulatory fines, and is that realistic?
  - Does the customer's own liability survive?

  ### Transfers

  - Which transfer mechanism applies, and is it the current version?
  - Are the annexes completed with actual countries and safeguards?
  - Is there a supplementary measures section, or a promise to add one?

  ## Output

  ```
  Role and scope
  - Fit between the DPA and the real processing.

  Findings
  1. Clause. What it says. What it means operationally. Redline.

  Standard and acceptable
  - Clauses reviewed with no change needed.

  Missing
  - Protections that are absent rather than weak.

  Not legal advice
  - Where counsel must decide.
  ```
---

A DPA review that only marks clauses as "acceptable" or "concerning" leaves the team unable to act. This skill translates each clause into the operational obligation it creates, which is what makes the redline worth sending.

Breach notice timing and deletion-from-backups are the two clauses most often signed without anyone checking whether the company can actually comply.

Pair it with Contract Review for the commercial agreement around it, or Privacy Policy Writer for the public-facing counterpart.
