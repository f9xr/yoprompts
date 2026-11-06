# Agent discovery: what is shipped and what needs infrastructure

This file records the state of "agent readiness" work for YoPrompts. Some of it
is served by the static site; some of it can only be completed outside this
repository (DNS, CDN response headers). Each section says which.

Site: `https://f9xr.org/yoprompts/` (GitHub Pages, project subdirectory).

---

## 1. Discovery documents now served by the site

Jekyll drops dot-prefixed paths by default. `_config.yml` now re-includes
`.well-known` so these are published:

| Path | Purpose | Standard |
| --- | --- | --- |
| `/.well-known/security.txt` | Security contact and expiry | RFC 9116 |
| `/.well-known/api-catalog` | Linkset pointing agents at the docs, sitemap and machine index | RFC 9727 |
| `/.well-known/oauth-protected-resource` | Declares there are no protected resources or scopes | RFC 9728 |
| `/auth.md` | Plain-language statement that no authentication is required | auth.md convention |
| `/llms.txt` | Machine-readable index of the whole library | llms.txt convention |
| `/feed.xml` | RSS (already present, jekyll-feed) | RSS 2.0 |
| `/sitemap.xml` | All canonical URLs (already present, jekyll-sitemap) | Sitemaps |

---

## 2. Link response headers (RFC 8288) - needs a CDN

**Status: partially done.** The relations are published as HTML `<link>`
elements in `_includes/head.html`, which every page serves today. The HTTP
`Link:` header form is defined in `_headers` at the repo root.

GitHub Pages does not allow custom response headers, so the `Link:` header
cannot be emitted by the current host. It activates with no further work if the
site is put behind a host that reads `_headers`:

- **Netlify:** reads `_headers` automatically.
- **Cloudflare Pages:** reads `_headers` automatically.
- **Cloudflare (proxy only):** use a Transform Rule / Modify Response Header to
  add `Link: </.well-known/api-catalog>; rel="api-catalog"`.

Once active, the header is:

```
Link: </.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"
Link: </llms.txt>; rel="service-desc"; type="text/plain"
Link: </resources/>; rel="service-doc"; type="text/html"
Link: </sitemap.xml>; rel="sitemap"; type="application/xml"
```

---

## 3. DNS for AI Discovery (DNS-AID) - needs DNS access

**Status: not possible from this repository.** The domain `f9xr.org` DNS zone
is not managed here. Add the following records at the DNS provider. The draft
uses SVCB/HTTPS records served under `_agents` service labels, and the zone
should be DNSSEC-signed so validating resolvers return authenticated data.

Example records (replace endpoint targets with the real agent endpoints once
they exist):

```
; Index of agent entry points for the site
_index._agents.yoprompts.f9xr.org.      3600 IN HTTPS 1 . alpn="h2,h3" port=443
_index._agents.yoprompts.f9xr.org.      3600 IN SVCB  1 . alpn="h2"   endpoint="https://f9xr.org"

; Agent-to-agent service
_a2a._agents.yoprompts.f9xr.org.        3600 IN SVCB  1 . alpn="h2"   endpoint="https://f9xr.org"
```

Notes:

- DNSSEC must be enabled on `f9xr.org` for validators to trust the records.
- There is no agent endpoint yet, so these records would advertise the website
  itself. Publish them only if you intend to run a real agent endpoint; an
  advertised endpoint that does not answer is worse than none.
- Reference: `draft-mozleywilliams-dnsop-dnsaid` and RFC 9460 (SVCB/HTTPS).

---

## 4. Markdown for Agents - needs a server or CDN

**Status: not possible on GitHub Pages.** Content negotiation
(`Accept: text/markdown` returning `Content-Type: text/markdown`) is a
server-side behaviour. A static host always returns HTML.

Options, in order of effort:

1. **Cloudflare "Markdown for Agents"** on the `f9xr.org` zone converts HTML to
   markdown automatically for requests that ask for it.
2. **Netlify edge function** that re-serves the matching `llms.txt` section or a
   generated `.md` file when `Accept` includes `text/markdown`.
3. **Pre-generate `.md` twins** of each page and rely on the `Link: rel=alternate`
   hint. Cheap, but it is not true negotiation.

Until then, `/llms.txt` and `/auth.md` give agents a markdown entry point that
already exists.

---

## 5. OAuth / OIDC discovery - not applicable

**Status: nothing to publish, by design.** The site has no accounts, no tokens
and no protected API. Publishing an `/.well-known/openid-configuration` or
`/.well-known/oauth-authorization-server` would mean inventing an issuer and
endpoints that do not exist.

Instead, `/.well-known/oauth-protected-resource` is served with:

```json
{
  "resource": "https://f9xr.org/yoprompts/",
  "scopes_supported": [],
  "authorization_servers": []
}
```

An empty `authorization_servers` tells an agent that no token is required. If a
protected API is ever added, publish real OAuth metadata at that point and link
it from `auth.md`.

---

## 6. WebMCP

**Status: shipped.** `assets/js/main.js` module 11 registers read-only tools
with `document.modelContext.registerTool()` when the browser exposes WebMCP:

- `search_prompts` - search the library, return matching titles and URLs.
- `get_prompt` - return one prompt by slug, with its copy-ready text when it is
  on the current page.
- `list_prompt_categories` - list the categories currently published.

It is feature-detected and wrapped in try/catch, so browsers without WebMCP are
unaffected and a failure can never break the page.

---

## Verification

- `curl -I https://f9xr.org/yoprompts/` - check for `Link:` headers (only once a
  CDN is in front).
- `curl https://f9xr.org/yoprompts/.well-known/api-catalog` - expect
  `application/linkset+json`.
- `dig +dnssec _index._agents.yoprompts.f9xr.org HTTPS` - once DNS-AID is added.
- Re-run https://isitagentready.com targeting `https://f9xr.org/yoprompts/`.
