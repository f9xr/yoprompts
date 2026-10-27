---
title: "Build a production-ready Homestay website for India (Next.js + Razorpay + Stripe)"
slug: homestay-india-website-builder
category: coding
category_label: Coding
difficulty: advanced
tools: [claude, chatgpt, copilot]
read_time: 12
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: [essential]
related: [website-code-audit, fullstack-api-builder, seo-brief-writer]
art: terminal
tags: [nextjs, typescript, tailwind, shadcn-ui, zod, supabase, razorpay, stripe, resend, payments, webhooks, india, inr, ecommerce, security, accessibility]
excerpt: "Generate a secure, working Next.js App Router site for an India-based Homestay with INR pricing, dual payment gateways (Razorpay + Stripe), verified webhooks, idempotent order handling, and email flows."
description: "Build a complete, testable Homestay website with server-authoritative pricing in paise, Razorpay (UPI/cards/netbanking) and Stripe Checkout (international), Resend emails, Supabase orders, Zod validation, honeypot + rate limiting, and hardened webhook verification."
prompt: |
  # Role
  You are a principal full-stack engineer specializing in secure e-commerce, Indian payment flows, webhook reliability, and accessibility-first Next.js App Router applications.

  # Goal
  Build a small, production-lean but fully working website (no mocked UI blocks or unimplemented payment paths) for "Homestay", an India-based business selling Homestay services/products. All monetary values must be in INR. Do not cut corners on security or correctness.

  # Tech Stack (strict)
  - Framework: Next.js (App Router, TypeScript) with strict mode
  - Styling: Tailwind CSS
  - Components: shadcn/ui
  - Validation: Zod (client + server)
  - Email: Resend (owner notification + customer auto-reply/receipt)
  - Database: Supabase (orders table)
  - Payments: Razorpay (UPI + Indian cards + netbanking) and Stripe Checkout (international cards)
  - Environment: All secrets in environment variables only. Never expose secrets or provider keys in client bundles.

  # Required Pages
  Create the following routes with clean, semantic markup:
  - `/` (Home)
  - `/about` (About)
  - `/products-services` or `/products` (Products/Services) with clear pricing
  - `/checkout` (Checkout with provider selection)
  - `/contact` (Contact)
  - `/terms` (Terms)
  - `/privacy` (Privacy)
  - `/refund-policy` (Refund Policy)
  - `/success` and `/failure` (post-payment outcome pages)

  # UX & Accessibility (required)
  - Mobile-first, responsive design
  - Semantic HTML, proper landmarks, and logical heading hierarchy
  - Keyboard navigable with visible focus states
  - ARIA only where necessary, alt text for images
  - Loading, success, and error states for all async actions (forms, payments)
  - Form field labeling, accessible error messages, and field-level validation feedback

  # Contact Form (required)
  Implement with defense in depth:
  - Fields: `name`, `email`, `phone`, `message` (plus a hidden honeypot field e.g. `website`)
  - Validate with Zod on both client and server
  - Rate limit by IP (e.g. in-memory with window + max, or a simple token bucket). If Redis not available, implement a safe in-process limiter with clear comments.
  - On valid submission: email the owner via Resend, and send an auto-reply to the customer via Resend
  - Reject honeypot submissions silently (or with a generic success) to avoid tipping off bots
  - Never leak internal errors to the user; log server-side

  # Payments & Orders (critical)
  Treat the server as the source of truth:
  - At checkout, customer chooses provider: `razorpay` (UPI / Indian card / netbanking) OR `stripe` (international cards)
  - Prices MUST be defined and computed on the server in paise (INR). Never trust amounts, product IDs, or totals from the browser.
  - Create orders/sessions on the server before redirecting to the provider. Generate an internal `order_id` (stable, non-guessable)
  - **Razorpay**: Create order via server, pass order details to client only as needed, verify `razorpay_order_id`, `razorpay_payment_id`, `razorpay_signature` using HMAC SHA256 with `RAZORPAY_KEY_SECRET`
  - **Stripe**: Create Stripe Checkout Session server-side with `line_items` from server price map, success/cancel URLs, metadata containing `order_id`. Verify webhook signatures with `STRIPE_WEBHOOK_SECRET` using Stripe's signature verification
  - **Orders table schema (Supabase)**: `id` (uuid/serial), `customer_name`, `customer_email`, `customer_phone` (nullable), `amount` (integer, paise), `currency` (e.g. `INR`), `provider` (`razorpay`|`stripe`), `provider_ref` (order/payment/session id), `status` (`pending`|`paid`|`failed`|`cancelled`|`refunded`), `receipt_sent_at` (timestamp nullable), `owner_notified_at` (timestamp nullable), `created_at`, `updated_at`
  - Only mark order as `paid` after a verified webhook event. Do not trust client-side "success" redirects alone
  - Handle failed, cancelled, expired, and duplicate events idempotently (use provider event id / provider_ref + status checks to prevent double-processing)
  - On successful payment (verified): send receipt email to customer and notification email to owner via Resend. Record timestamps
  - Show clear success/failure pages with order details where safe to display
  - Run in **test mode** by default. Clearly guard live keys and log mode in non-production

  # API Routes & Security
  - Use Next.js Route Handlers. Validate all inputs with Zod
  - CSRF considerations where appropriate; prefer server-side validation
  - Rate limit payment creation and contact endpoints
  - Return generic error messages to clients; detailed errors only in server logs
  - Never log full card numbers, signatures, or secrets
  - Use server actions or route handlers consistently; keep business logic server-side

  # Testing & Verification (must pass before stopping)
  Run and fix until green:
  - `lint` (ESLint)
  - `type-check` (tsc --noEmit)
  - Tests for: form validation (Zod), honeypot rejection, pricing (server-side paise calculation), Razorpay signature verification, Stripe webhook signature verification, idempotent webhook handling, and order status transitions
  If no test runner is configured, add minimal unit tests (e.g. Vitest/Jest) focused on the above

  # Deliverables
  - Working app with all routes and flows implemented
  - `.env.example` with all required variables (NEXT_PUBLIC_* only where safe, server secrets clearly marked). Include placeholders for: Supabase URL/keys, Resend API key + from/domain, Razorpay key_id/key_secret/webhook_secret, Stripe secret/webhook_secret, app URL, owner email
  - `README.md` covering: local setup, environment setup, Razorpay test keys + webhooks (local tunneling e.g. ngrok), Stripe test keys + webhooks, Resend domain/setup, Supabase schema/migrations, deployment (Vercel/Node), and test mode notes
  - SQL/migration for `orders` table (Supabase) with indexes on `provider_ref`, `status`, `created_at`
  - Clear comments for webhook endpoints and verification logic
  - Final report: what works, what needs API keys, what is still in test mode, and any follow-ups

  # Rules
  - No mock payment flows that claim success without verification
  - No client-side price calculation or trusting client totals
  - Webhooks must be the source of truth for "paid"
  - Idempotency is mandatory
  - Accessibility is not optional
  - TypeScript strict, no `any` without justification
  - Clean, readable code; minimal dependencies
  - Fail safely and explicitly
workflow:
  - "Define the rooms, prices, and booking rules"
  - "Build the pages and server-authoritative pricing"
  - "Wire Razorpay and Stripe in test mode"
  - "Verify webhooks and idempotent order updates"
  - "Test the booking, email, and failure paths"
output_preview: "A working Next.js homestay site with INR pricing, two payment gateways, verified webhooks, email flows, and a documented test path."
how_to_use:
  - "Provide business details: Homestay name, pricing (INR), contact email, supported products/services, and any legal text for Terms/Privacy/Refund Policy."
  - "Add your test API keys later or use placeholders; run in test mode until live keys are provided."
  - "Set up webhook endpoints (Razorpay/Stripe) via tunneling for local testing."
  - "Run lint, type-check, and tests after generation and fix any issues before deploying."
tips:
  - "Keep all prices in a server-side config/map to avoid drift."
  - "Log webhook events with event IDs to debug duplicates."
  - "Test both success and failure paths for Razorpay and Stripe."
  - "Use Resend's test domain first, then switch to your verified domain."
example_output: |
  A complete Next.js App Router app with:
  - Secure checkout choosing Razorpay or Stripe
  - Verified webhook handlers marking orders paid idempotently
  - Contact form with honeypot + rate limiting + Resend emails
  - Supabase orders table + migrations
  - .env.example and detailed README
  - Passing lint, type-check, and payment/webhook tests
faq:
  - q: "Can I run without live keys?"
    a: "Yes. Use test keys and test mode. The app will not process live payments until live keys are configured and you switch modes."
  - q: "How are orders marked paid?"
    a: "Only via verified webhooks from Razorpay or Stripe. Client success redirects are not trusted."
  - q: "Is this safe for Indian payments?"
    a: "Yes. Prices are server-authoritative in paise, signatures are verified, and UPI/cards/netbanking are supported via Razorpay in test/live modes."
  - q: "What about spam on the contact form?"
    a: "Honeypot field + rate limiting + server-side validation with Zod."
---
