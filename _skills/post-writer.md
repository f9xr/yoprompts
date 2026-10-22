---
title: "LinkedIn Post Writer"
slug: post-writer
category: social
date: 2026-10-23
excerpt: "Drafts LinkedIn posts in a saved voice profile, turning rough notes, transcripts, or a topic into a publish-ready post."
creator: "Charlie Hills"
license: "MIT"
repo_url: "https://github.com/charlie947/social-media-skills/tree/main/skills/post-writer"
tags: [linkedin, social media, writing, voice, posts]
usage: |
  Use post-writer to draft a LinkedIn post about [topic].
install: |
  npx skills add charlie947/social-media-skills@post-writer
---

LinkedIn Post Writer reads the writer's `about-me.md` and `voice.md` before drafting. It uses those files to match sentence length, vocabulary, opinions, and the subjects the writer actually talks about.

The skill accepts a rough topic, a context dump, or a transcript and returns a structured post with a hook, a clear body, and a close that invites a response. The final post is always delivered in a code block for easy copying.

It works best after the voice-builder skill has created the profile. Without one, it asks for samples and context rather than falling back to a generic LinkedIn voice.
