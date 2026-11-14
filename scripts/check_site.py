"""Validate the built site: front matter integrity, internal links, headings,
duplicate ids, meta descriptions, JSON-LD and prompt required fields.

Run after `jekyll build`:

    python3 scripts/check_site.py _site
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


def main(root):
    errors = []

    # Collection documents: required fields, unique slugs, usable title tags.
    slugs = {}
    title_tags = {}
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

    if errors:
        print('\n'.join(errors[:80]))
        print('\n%d problem(s) found' % len(errors))
        return 1

    print('Site checks passed.')
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1] if len(sys.argv) > 1 else '_site'))
