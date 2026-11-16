"""Validate the built site: front matter integrity, internal links, headings,
duplicate ids, meta descriptions, JSON-LD, prompt required fields, and the
related-link graph for both the MCP and prompt collections.

Run after `jekyll build`:

    python3 scripts/check_site.py _site            # fail on any related-link problem
    python3 scripts/check_site.py _site --report   # full list of prompts with no inbound link
"""

import json
import os
import re
import sys

REQUIRED_PROMPT_FIELDS = [
    'title', 'slug', 'category', 'category_label', 'difficulty', 'tools',
    'read_time', 'excerpt', 'prompt', 'workflow', 'art', 'how_to_use', 'tags',
    'faq',
]

BASEURL = '/yoprompts'


def read(path):
    with open(path, encoding='utf-8', errors='ignore') as handle:
        return handle.read()


def html_pages(root):
    for dirpath, _, names in os.walk(root):
        for name in names:
            if name.endswith('.html'):
                yield os.path.join(dirpath, name)


def resolve(root, page, link):
    link = link.split('#')[0].split('?')[0]
    if not link:
        return True

    if link.startswith(BASEURL):
        target = os.path.join(root, link[len(BASEURL):].lstrip('/'))
    elif link.startswith('/') or re.match(r'^[a-z]+:', link):
        return True  # outside this site, or root-absolute without baseurl
    else:
        target = os.path.normpath(os.path.join(os.path.dirname(page), link))

    candidates = [target, os.path.join(target, 'index.html'), target.rstrip('/') + '.html']
    return any(os.path.exists(candidate) for candidate in candidates)


def front_matter(path):
    text = read(path)
    match = re.match(r'^---\r?\n(.*?)\r?\n---', text, re.S)
    return match.group(1) if match else None


def front_matter_list(fm, key):
    """Read a front matter list in either inline or block form.

    Both `related: [a, b]` and the indented `- a` form are valid YAML, so the
    checker accepts either rather than forcing one style on future entries.
    """
    inline = re.search(r'^%s:\s*\[(.*?)\]\s*$' % re.escape(key), fm, re.M)
    if inline:
        return [value.strip().strip('"\'')
                for value in inline.group(1).split(',')
                if value.strip().strip('"\'')]

    block = re.search(r'^%s:\s*\r?\n((?:[ \t]*-[ \t]*\S.*(?:\r?\n|$))+)' % re.escape(key), fm, re.M)
    if block:
        return [line.strip().lstrip('-').strip().strip('"\'')
                for line in block.group(1).splitlines()
                if line.strip().lstrip('-').strip()]

    return []


def main(root, report=False):
    errors = []

    # Collection documents: required fields, unique slugs, usable title tags.
    slugs = {}
    title_tags = {}
    mcp_docs = []
    prompt_docs = []
    for folder in ('_prompts', '_skills', '_mcp_servers'):
        if not os.path.isdir(folder):
            continue
        for name in os.listdir(folder):
            if not name.endswith('.md'):
                continue
            path = os.path.join(folder, name)
            fm = front_matter(path)
            if fm is None:
                errors.append('%s: missing front matter' % path)
                continue
            slug = re.search(r'^slug:\s*(.+)$', fm, re.M)
            slug = slug.group(1).strip().strip('"\'') if slug else ''
            if not slug:
                errors.append('%s: missing slug' % path)
            elif (folder, slug) in slugs:
                errors.append('%s: duplicate slug %r (also %s)' % (path, slug, slugs[(folder, slug)]))
            else:
                slugs[(folder, slug)] = path

            # `title` is the visible H1; `title_tag` is what head.html puts in
            # <title>. A tag that is only the bare title ("PDF") carries no
            # page-type keyword and is the exact regression this check exists
            # to catch, so it fails the build rather than shipping quietly.
            title = re.search(r'^title:\s*(.+)$', fm, re.M)
            title = title.group(1).strip().strip('"\'') if title else ''
            tag = re.search(r'^title_tag:\s*(.+)$', fm, re.M)
            tag = tag.group(1).strip().strip('"\'') if tag else ''
            if not tag:
                errors.append('%s: missing title_tag, so <title> falls back to %r' % (path, title))
            elif tag == title:
                errors.append('%s: title_tag is the bare page title %r, with no page-type keyword' % (path, tag))
            elif len(tag) > 60:
                errors.append('%s: title_tag is %d characters and will truncate' % (path, len(tag)))
            if tag:
                if tag in title_tags:
                    errors.append('%s: duplicate title_tag %r (also %s)' % (path, tag, title_tags[tag]))
                else:
                    title_tags[tag] = path

            if folder == '_prompts':
                for field in REQUIRED_PROMPT_FIELDS:
                    if not re.search(r'^%s:\s*\S' % field, fm, re.M):
                        errors.append('%s: missing required field %r' % (path, field))

            if folder == '_mcp_servers' and slug:
                mcp_docs.append((path, slug, fm))

            if folder == '_prompts' and slug:
                prompt_docs.append((path, slug, fm))

    # `related` is the only internal graph each collection has. Both layouts
    # resolve it with a `where` lookup, so a slug that does not exist does not
    # error at build time — the section simply disappears. Self-links,
    # duplicates and a missing pair all read the same way: a page with nothing
    # linking to it.
    def audit_related(docs, label):
        """Return the four rule violations, per-slug paths and inbound counts."""
        paths = {slug: path for path, slug, _ in docs}
        inbound = {slug: 0 for slug in paths}
        problems = []

        for path, slug, fm in docs:
            related = front_matter_list(fm, 'related')

            if len(related) < 2:
                problems.append('%s: %d related %s entr%s, at least 2 are required'
                                % (path, len(related), label,
                                   'y' if len(related) == 1 else 'ies'))

            seen = set()
            for target in related:
                if target == slug:
                    problems.append('%s: related entry %r links to itself' % (path, target))
                elif target not in paths:
                    problems.append('%s: related entry %r is not a %s slug' % (path, target, label))
                elif target in seen:
                    problems.append('%s: related entry %r is listed twice' % (path, target))
                else:
                    seen.add(target)
                    inbound[target] += 1

        return problems, paths, inbound

    mcp_problems, mcp_paths, mcp_inbound = audit_related(mcp_docs, 'MCP')
    prompt_problems, _, prompt_inbound = audit_related(prompt_docs, 'prompt')
    errors.extend(mcp_problems)
    errors.extend(prompt_problems)

    # A page can pass the rules and still be unreachable, which is what happened
    # to ElevenLabs. The MCP collection refuses that outright; prompts only
    # report it, because a new page legitimately lands with no inbound links
    # until another page names it. Both skip the check on a collection too small
    # for reciprocal links to be possible.
    if len(mcp_paths) >= 3:
        errors.extend('%s: no other MCP entry links here, so the page has no inbound related link'
                      % mcp_paths[slug]
                      for slug, count in sorted(mcp_inbound.items()) if count == 0)

    prompt_orphans = sorted(slug for slug, count in prompt_inbound.items() if count == 0)

    # Rendered pages.
    titles = {}
    for page in html_pages(root):
        html = read(page)
        h1s = len(re.findall(r'<h1[\s>]', html))
        if h1s != 1:
            errors.append('%s: %d <h1> elements' % (page, h1s))

        if '<meta name="description"' not in html:
            errors.append('%s: missing meta description' % page)

        ids = re.findall(r'\sid="([^"]+)"', html)
        duplicates = sorted({value for value in ids if ids.count(value) > 1})
        if duplicates:
            errors.append('%s: duplicate ids %s' % (page, ', '.join(duplicates[:5])))

        title = re.search(r'<title>(.*?)</title>', html, re.S)
        if title:
            key = title.group(1).strip()
            titles.setdefault(key, []).append(page)

        for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S):
            try:
                json.loads(block)
            except json.JSONDecodeError as error:
                errors.append('%s: invalid JSON-LD (%s)' % (page, error))

        for match in re.finditer(r'(?:href|src)="(' + BASEURL + r'[^"#?]*)"', html):
            if not resolve(root, page, match.group(1)):
                errors.append('%s: broken internal link %s' % (page, match.group(1)))

    for title, pages in titles.items():
        if len(pages) > 1:
            errors.append('duplicate <title> %r on %s' % (title, ', '.join(pages[:3])))

    if prompt_orphans:
        shown = prompt_orphans if report else prompt_orphans[:10]
        print('%d prompt(s) have no inbound related link:' % len(prompt_orphans))
        print('  ' + ', '.join(shown) + (' ...' if len(shown) < len(prompt_orphans) else ''))
        print('  Informational only. Run with --report to see the full list.\n')

    if errors:
        print('\n'.join(errors[:80]))
        print('\n%d problem(s) found' % len(errors))
        return 1

    print('Site checks passed.')
    return 0


if __name__ == '__main__':
    flags = {arg for arg in sys.argv[1:] if arg.startswith('--')}
    paths = [arg for arg in sys.argv[1:] if not arg.startswith('--')]
    sys.exit(main(paths[0] if paths else '_site', report='--report' in flags))
