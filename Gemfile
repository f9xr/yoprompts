source "https://rubygems.org"

# Versions are pinned to match the GitHub Actions build. Keep this list in sync
# with the `plugins:` entry in _config.yml.
gem "jekyll", "3.10.0"

group :jekyll_plugins do
  gem "jekyll-seo-tag", "2.8.0"
  gem "jekyll-feed", "0.17.0"
  gem "jekyll-sitemap", "1.4.0"
end

# Jekyll 3.10 does not pull this in itself, but `kramdown: input: GFM` in
# _config.yml needs it. Without it the build dies with "cannot load such file
# -- kramdown-parser-gfm".
gem "kramdown-parser-gfm", "~> 1.1"
