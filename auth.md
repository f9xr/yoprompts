# Agent authentication for YoPrompts

Canonical: https://f9xr.org/yoprompts/auth.md
Publisher: F9XR Team (https://f9xr.org)
Contact: hello@f9xr.org

## Summary

YoPrompts is a public, read-only prompt library. **No authentication is
required** to read, crawl, quote, or copy any prompt on this site. There is no
account system, no login, and no protected API surface.

If an agent can fetch a URL over HTTPS, it can use everything here.

## What is public

- `https://f9xr.org/yoprompts/` and every page under it.
- `https://f9xr.org/yoprompts/sitemap.xml` (all canonical URLs).
- `https://f9xr.org/yoprompts/llms.txt` (machine-readable index).
- `https://f9xr.org/yoprompts/feed.xml` (RSS).
- `https://f9xr.org/yoprompts/.well-known/api-catalog` (RFC 9727 linkset).

## What is not available

- No write API, no upload endpoint, no webhook. The site is static.
- No OAuth authorization server. There are therefore no OAuth or OIDC
  discovery endpoints to publish: see
  `/.well-known/oauth-protected-resource`, which declares an empty
  `authorization_servers` list because no token is ever needed.
- Prompt submissions are handled by humans by email, not by an API. See
  https://f9xr.org/yoprompts/submit-a-prompt/.

## Registration

There is no registration step for agents. To be identified, set a descriptive
`User-Agent` and, if you need a response, contact `hello@f9xr.org`.

## Licence and attribution

Prompts are free to use, including commercially, under the terms at
https://f9xr.org/yoprompts/terms/. Attribution is appreciated but not required.

## machine-readable block

```json
{
  "auth": "none",
  "scheme": "public",
  "resource": "https://f9xr.org/yoprompts/",
  "protected_resources": [],
  "authorization_servers": [],
  "registration_uri": null,
  "contact": "mailto:hello@f9xr.org",
  "terms": "https://f9xr.org/yoprompts/terms/"
}
```
