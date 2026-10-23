/* ==========================================================================
   YoPrompts enhancements
   Loaded after main.js. Every module is progressive: the page is complete
   without it. Shared helpers are exposed on window.YOP for inline page
   scripts (listings, lab) that need the same clipboard and settings.
   ========================================================================== */

(function () {
  'use strict';

  var root = document.documentElement;

  var metaBase = document.querySelector('meta[name="yop-base"]');
  var base = metaBase ? metaBase.getAttribute('content') : '/';
  if (!base) { base = '/'; }
  if (base.charAt(base.length - 1) !== '/') { base += '/'; }

  var STORE = {
    theme: 'yop_theme',
    font: 'yop_font_scale',
    sound: 'yop_sound',
    installs: 'yop_install_history'
  };

  function each(list, fn) { Array.prototype.forEach.call(list || [], fn); }

  function on(target, type, handler, options) {
    if (target) { target.addEventListener(type, handler, options); }
  }

  function read(key, fallback) {
    try {
      var value = window.localStorage.getItem(key);
      return value === null ? fallback : value;
    } catch (error) { return fallback; }
  }

  function write(key, value) {
    try { window.localStorage.setItem(key, value); } catch (error) {}
  }

  function copyText(text) {
    var value = String(text || '');
    if (!value) { return Promise.reject(new Error('empty')); }
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(value);
    }
    return new Promise(function (resolve, reject) {
      var field = document.createElement('textarea');
      field.value = value;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.top = '-1000px';
      document.body.appendChild(field);
      field.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (error) { ok = false; }
      document.body.removeChild(field);
      ok ? resolve() : reject(new Error('copy-unavailable'));
    });
  }

  function copyAndFlash(button, text) {
    copyText(text).then(function () {
      var label = button.querySelector('.button__label');
      var original = button.getAttribute('data-original-label') || (label ? label.textContent : button.textContent);
      button.setAttribute('data-original-label', original);
      if (label) { label.textContent = 'Copied'; } else { button.textContent = 'Copied'; }
      button.classList.add('is-copied');
      beep('copy');
      testClipboard(text);
      setTimeout(function () {
        if (label) { label.textContent = original; } else { button.textContent = original; }
        button.classList.remove('is-copied');
      }, 1600);
    }).catch(function () {});
  }

  /* ---------------------------------------------------------------------
     Sound cues. One short oscillator burst, created only on the first cue so
     no AudioContext exists until the visitor asks for one.
     ------------------------------------------------------------------ */

  var audioContext = null;
  function beep(kind) {
    if (read(STORE.sound, 'off') !== 'on') { return; }
    try {
      var AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) { return; }
      audioContext = audioContext || new AudioCtx();
      var osc = audioContext.createOscillator();
      var gain = audioContext.createGain();
      var now = audioContext.currentTime;
      var frequencies = { copy: 660, success: 784, error: 260 };
      osc.frequency.value = frequencies[kind] || 620;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.06, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
      osc.connect(gain).connect(audioContext.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    } catch (error) {}
  }

  /* Cross-tab clipboard/settings. Best effort: not every browser exposes
     BroadcastChannel, and a failed post must never break an action. */
  var channel = null;
  function broadcast(message) {
    try {
      if (!channel && 'BroadcastChannel' in window) {
        channel = new window.BroadcastChannel('yoprompts');
      }
      if (channel) { channel.postMessage(message); }
    } catch (error) {}
  }

  function testClipboard(text) {
    try {
      var dict = { text: text };
      if (navigator.clipboard && navigator.clipboard.write && window.ClipboardItem) {
        navigator.clipboard.write([new window.ClipboardItem({ 'text/plain': new Blob([text], { type: 'text/plain' }) })]);
      }
      broadcast({ type: 'clipboard', text: String(text).slice(0, 280), at: Date.now() });
    } catch (error) {}
  }

  /* ---------------------------------------------------------------------
     Theme, text size and sound
     ------------------------------------------------------------------ */

  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme, announce) {
    root.setAttribute('data-theme', theme);
    if (themeMeta) { themeMeta.setAttribute('content', theme === 'light' ? '#f6f5f2' : '#0a0a0a'); }
    each(document.querySelectorAll('[data-theme-toggle]'), function (button) {
      button.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
      button.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
    });
    if (announce) { beep('success'); }
  }

  function setTheme(theme) {
    applyTheme(theme);
    write(STORE.theme, theme);
    broadcast({ type: 'theme', value: theme });
  }

  function toggleTheme() {
    setTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  }

  function applyFontScale(scale) {
    var value = Math.min(1.3, Math.max(0.85, Number(scale) || 1));
    root.style.setProperty('--font-scale', String(value));
    write(STORE.font, String(value));
    each(document.querySelectorAll('[data-font-value]'), function (node) {
      node.textContent = Math.round(value * 100) + '%';
    });
    return value;
  }

  function nudgeFont(direction) {
    var current = Number(read(STORE.font, root.style.getPropertyValue('--font-scale') || 1)) || 1;
    var scale = applyFontScale(Math.round((current + direction * 0.05) * 100) / 100);
    broadcast({ type: 'font', value: scale });
    beep('success');
  }

  function applySound(enabled) {
    write(STORE.sound, enabled ? 'on' : 'off');
    each(document.querySelectorAll('[data-sound-toggle]'), function (button) {
      button.setAttribute('aria-pressed', enabled ? 'true' : 'false');
    });
    if (enabled) { beep('copy'); }
  }

  function initSettings() {
    var storedTheme = read(STORE.theme, '');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      applyTheme(storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      /* The site is designed dark-first. Keeping dark as the default is
         intentional; the toggle is for readers who need a light canvas. */
      applyTheme('dark');
    }

    applyFontScale(read(STORE.font, 1));
    applySound(read(STORE.sound, 'off') === 'on');

    each(document.querySelectorAll('[data-theme-toggle]'), function (button) {
      on(button, 'click', toggleTheme);
    });
    each(document.querySelectorAll('[data-font-up]'), function (button) {
      on(button, 'click', function () { nudgeFont(1); });
    });
    each(document.querySelectorAll('[data-font-down]'), function (button) {
      on(button, 'click', function () { nudgeFont(-1); });
    });
    each(document.querySelectorAll('[data-sound-toggle]'), function (button) {
      on(button, 'click', function () {
        applySound(read(STORE.sound, 'off') !== 'on');
      });
    });

    if ('BroadcastChannel' in window) {
      try {
        channel = new window.BroadcastChannel('yoprompts');
        channel.addEventListener('message', function (event) {
          var data = event.data || {};
          if (data.type === 'theme') { applyTheme(data.value); }
          if (data.type === 'font') { applyFontScale(data.value); }
        });
      } catch (error) { channel = null; }
    }
  }

  /* ---------------------------------------------------------------------
     Global search
     ------------------------------------------------------------------ */

  var CONCEPTS = {
    seo: ['search', 'ranking', 'google', 'serp', 'keywords', 'traffic', 'backlinks'],
    writing: ['copy', 'edit', 'draft', 'prose', 'voice', 'tone', 'rewrite'],
    marketing: ['campaign', 'growth', 'email', 'launch', 'brand', 'funnel'],
    social: ['tiktok', 'instagram', 'linkedin', 'youtube', 'reels', 'threads'],
    design: ['ui', 'ux', 'layout', 'typography', 'color', 'visual'],
    engineering: ['code', 'react', 'deploy', 'debug', 'api', 'performance'],
    research: ['sources', 'analysis', 'synthesis', 'evidence', 'study'],
    productivity: ['planning', 'tasks', 'meetings', 'notes', 'workflow'],
    images: ['photo', 'midjourney', 'prompt', 'render', 'art'],
    career: ['resume', 'interview', 'job', 'salary', 'hiring'],
    data: ['table', 'metrics', 'chart', 'spreadsheet', 'analysis'],
    presentations: ['slides', 'deck', 'speaker', 'outline']
  };

  function conceptTerms(word) {
    if (CONCEPTS[word]) { return CONCEPTS[word]; }
    var extra = [];
    Object.keys(CONCEPTS).forEach(function (key) {
      if (CONCEPTS[key].indexOf(word) !== -1) { extra.push(key); }
    });
    return extra;
  }

  function searchScore(item, query, concepts) {
    var tokens = query.split(/\s+/).filter(Boolean);
    if (!tokens.length) { return 0; }

    var title = (item.title || '').toLowerCase();
    var tags = (item.tags || '').toLowerCase();
    var category = (item.category || '').toLowerCase();
    var description = (item.description || '').toLowerCase();
    var body = (item.body || '').toLowerCase();
    var type = (item.type || '').toLowerCase();
    var haystack = [title, tags, category, description, body, type].join(' ');
    var score = 0;

    for (var i = 0; i < tokens.length; i += 1) {
      var token = tokens[i];
      var variants = [token];
      if (concepts) { variants = variants.concat(conceptTerms(token)); }

      var matched = false;
      variants.forEach(function (variant) {
        if (!variant) { return; }
        if (title.indexOf(variant) !== -1) { score += 8; matched = true; }
        if (tags.indexOf(variant) !== -1) { score += 5; matched = true; }
        if (category.indexOf(variant) !== -1) { score += 4; matched = true; }
        if (description.indexOf(variant) !== -1) { score += 3; matched = true; }
        if (body.indexOf(variant) !== -1) { score += 1; matched = true; }
      });

      if (!matched && haystack.indexOf(token) === -1) { return 0; }
    }

    return score;
  }

  var searchIndex = null;
  var searchPromise = null;
  var searchActive = -1;

  function loadSearchIndex() {
    if (searchPromise) { return searchPromise; }
    var meta = document.querySelector('meta[name="yop-search-index"]');
    var url = meta ? meta.getAttribute('content') : base + 'search.json';
    searchPromise = fetch(url, { headers: { Accept: 'application/json' } })
      .then(function (response) { return response.ok ? response.json() : []; })
      .then(function (data) {
        searchIndex = Array.isArray(data) ? data : [];
        var status = document.querySelector('[data-search-status]');
        if (status) { status.textContent = searchIndex.length + ' items indexed'; }
        return searchIndex;
      })
      .catch(function () {
        var status = document.querySelector('[data-search-status]');
        if (status) { status.textContent = 'Search index unavailable'; }
        return [];
      });
    return searchPromise;
  }

  function resultMarkup(item) {
    var tags = (item.tags || '').split(',').map(function (tag) { return tag.trim(); }).filter(Boolean).slice(0, 3);
    return '<a class="site-search__result" href="' + item.url + '" data-search-result>' +
      '<span class="site-search__type">' + (item.type || 'Item') + '</span>' +
      '<span class="site-search__result-main">' +
        '<span class="site-search__result-title">' + escapeHtml(item.title || '') + '</span>' +
        '<span class="site-search__result-desc">' + escapeHtml(item.description || '') + '</span>' +
        (tags.length ? '<span class="site-search__result-tags">' + tags.map(function (tag) { return '<span class="tag-mono">' + escapeHtml(tag) + '</span>'; }).join('') + '</span>' : '') +
      '</span>' +
      '<span class="site-search__result-arrow" aria-hidden="true">&rarr;</span>' +
    '</a>';
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function renderSearch(query) {
    var results = document.querySelector('[data-search-results]');
    var empty = document.querySelector('[data-search-empty]');
    var status = document.querySelector('[data-search-status]');
    var concepts = document.querySelector('[data-search-concepts]');
    if (!results) { return; }

    searchActive = -1;
    var term = query.trim();

    if (!term) {
      results.innerHTML = '';
      if (empty) { empty.hidden = false; }
      if (status && searchIndex) { status.textContent = searchIndex.length + ' items indexed'; }
      return;
    }

    var matches = (searchIndex || [])
      .map(function (item) { return { item: item, score: searchScore(item, term.toLowerCase(), concepts && concepts.checked) }; })
      .filter(function (entry) { return entry.score > 0; })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, 20);

    if (empty) { empty.hidden = matches.length > 0; }
    if (status) {
      status.textContent = matches.length
        ? matches.length + ' result' + (matches.length === 1 ? '' : 's') + ' for "' + term + '"'
        : 'No matches for "' + term + '"';
    }
    results.innerHTML = matches.map(function (entry) { return resultMarkup(entry.item); }).join('');
  }

  function openSearch() {
    var dialog = document.querySelector('[data-site-search]');
    if (!dialog) { return; }
    if (typeof dialog.showModal === 'function') {
      if (!dialog.open) { dialog.showModal(); }
    } else {
      dialog.setAttribute('open', 'open');
    }
    var input = document.querySelector('[data-search-input]');
    if (input) { setTimeout(function () { input.focus(); input.select(); }, 20); }
    loadSearchIndex().then(function () {
      if (input && input.value) { renderSearch(input.value); }
    });
  }

  function closeSearch() {
    var dialog = document.querySelector('[data-site-search]');
    if (!dialog) { return; }
    if (typeof dialog.close === 'function' && dialog.open) { dialog.close(); }
    else { dialog.removeAttribute('open'); }
  }

  function initSearch() {
    var dialog = document.querySelector('[data-site-search]');
    var input = document.querySelector('[data-search-input]');
    if (!dialog) { return; }

    each(document.querySelectorAll('[data-search-open]'), function (button) {
      on(button, 'click', openSearch);
    });
    each(document.querySelectorAll('[data-search-close]'), function (button) {
      on(button, 'click', closeSearch);
    });

    on(input, 'input', function () {
      loadSearchIndex().then(function () { renderSearch(input.value); });
    });

    on(dialog, 'click', function (event) {
      if (event.target === dialog) { closeSearch(); }
    });

    var concepts = dialog.querySelector('[data-search-concepts]');
    on(concepts, 'change', function () {
      if (input) { renderSearch(input.value); }
    });

    on(input, 'keydown', function (event) {
      var links = dialog.querySelectorAll('[data-search-result]');
      if (!links.length) { return; }
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        searchActive += event.key === 'ArrowDown' ? 1 : -1;
        if (searchActive < 0) { searchActive = links.length - 1; }
        if (searchActive >= links.length) { searchActive = 0; }
        each(links, function (link, index) { link.classList.toggle('is-active', index === searchActive); });
        if (links[searchActive]) {
          links[searchActive].scrollIntoView({ block: 'nearest' });
          if (event.key === 'Enter') { links[searchActive].click(); }
        }
      } else if (event.key === 'Enter' && searchActive >= 0) {
        event.preventDefault();
        links[searchActive].click();
      }
    });

    /* The search dialog also accepts ?q= so links can jump straight into it. */
    try {
      var q = new URLSearchParams(window.location.search).get('q');
      if (q && window.location.hash === '#search') {
        if (input) { input.value = q; }
        openSearch();
      }
    } catch (error) {}
  }

  /* ---------------------------------------------------------------------
     Shortcuts and dialogs
     ------------------------------------------------------------------ */

  function openShortcuts() {
    var dialog = document.querySelector('[data-shortcuts-dialog]');
    if (!dialog) { return; }
    if (typeof dialog.showModal === 'function') {
      if (!dialog.open) { dialog.showModal(); }
    } else { dialog.setAttribute('open', 'open'); }
  }

  function closeShortcuts() {
    var dialog = document.querySelector('[data-shortcuts-dialog]');
    if (!dialog) { return; }
    if (typeof dialog.close === 'function' && dialog.open) { dialog.close(); }
    else { dialog.removeAttribute('open'); }
  }

  function isTyping(event) {
    var node = event.target;
    if (!node) { return false; }
    var tag = node.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || node.isContentEditable;
  }

  function toggleFocus() {
    root.classList.toggle('focus-mode');
    var active = root.classList.contains('focus-mode');
    each(document.querySelectorAll('[data-focus-toggle]'), function (button) {
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    beep(active ? 'success' : 'copy');
  }

  function navigate(path) {
    window.location.href = new URL(path, window.location.origin + base).href;
  }

  function initShortcuts() {
    var pendingG = false;
    var pendingTimer = null;

    each(document.querySelectorAll('[data-shortcuts-open]'), function (button) {
      on(button, 'click', openShortcuts);
    });
    each(document.querySelectorAll('[data-shortcuts-close]'), function (button) {
      on(button, 'click', closeShortcuts);
    });
    each(document.querySelectorAll('[data-shortcuts-dialog]'), function (dialog) {
      on(dialog, 'click', function (event) {
        if (event.target === dialog) { closeShortcuts(); }
      });
    });

    each(document.querySelectorAll('[data-focus-toggle]'), function (button) {
      on(button, 'click', toggleFocus);
    });
    each(document.querySelectorAll('[data-print-page]'), function (button) {
      on(button, 'click', function () { window.print(); });
    });

    on(document, 'keydown', function (event) {
      var key = event.key;

      if ((event.ctrlKey || event.metaKey) && key.toLowerCase() === 'k') {
        event.preventDefault();
        openSearch();
        return;
      }

      if (key === 'Escape') {
        var searchDialog = document.querySelector('[data-site-search]');
        if (searchDialog && searchDialog.open) { closeSearch(); return; }
        closeShortcuts();
        if (root.classList.contains('focus-mode')) { toggleFocus(); }
        return;
      }

      if (isTyping(event) || event.ctrlKey || event.metaKey || event.altKey) { return; }

      if (pendingG) {
        pendingG = false;
        if (pendingTimer) { window.clearTimeout(pendingTimer); }
        var routes = { h: '', p: 'prompts/', s: 'ai-agent-skills/', m: 'mcp-server-index/', c: 'categories/', r: 'resources/', l: 'lab/', b: 'blog/' };
        if (Object.prototype.hasOwnProperty.call(routes, key)) {
          event.preventDefault();
          navigate(routes[key]);
          return;
        }
      }

      if (key === '/' ) {
        event.preventDefault();
        openSearch();
      } else if (key === '?') {
        event.preventDefault();
        openShortcuts();
      } else if (key === 'g') {
        pendingG = true;
        pendingTimer = window.setTimeout(function () { pendingG = false; }, 1200);
      } else if (key === 't') {
        toggleTheme();
      } else if (key === '+' || key === '=') {
        event.preventDefault();
        nudgeFont(1);
      } else if (key === '-' || key === '_') {
        event.preventDefault();
        nudgeFont(-1);
      } else if (key === 'f') {
        toggleFocus();
      } else if (key === 'p') {
        event.preventDefault();
        window.print();
      }
    });
  }

  /* ---------------------------------------------------------------------
     Back to top
     ------------------------------------------------------------------ */

  function initBackToTop() {
    var button = document.querySelector('[data-back-to-top]');
    if (!button) { return; }
    var ticking = false;

    function sync() {
      var show = window.scrollY > 600;
      button.hidden = !show;
      button.classList.toggle('is-visible', show);
      ticking = false;
    }

    on(window, 'scroll', function () {
      if (ticking) { return; }
      ticking = true;
      window.requestAnimationFrame(sync);
    }, { passive: true });

    on(button, 'click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    sync();
  }

  /* ---------------------------------------------------------------------
     Pagination. Works with anything that hides items using a class or the
     style attribute, including the archive filter and the skills/MCP grids.
     ------------------------------------------------------------------ */

  function paginate(container) {
    var size = parseInt(container.getAttribute('data-page-size'), 10) || 12;
    var items = Array.prototype.slice.call(container.querySelectorAll('[data-page-item]'));
    if (!items.length) { return; }

    var current = parseInt(container.getAttribute('data-page'), 10) || 1;
    var visible = items.filter(function (item) {
      return !item.classList.contains('is-filtered-out') &&
        item.style.display !== 'none' &&
        !item.classList.contains('is-page-hidden');
    });

    var pages = Math.max(1, Math.ceil(visible.length / size));
    if (current > pages) { current = pages; }
    container.setAttribute('data-page', String(current));

    items.forEach(function (item) {
      item.classList.remove('is-page-hidden');
      if (item.style.display === 'none' || item.classList.contains('is-filtered-out')) { return; }
    });

    var start = (current - 1) * size;
    var shown = 0;
    items.forEach(function (item) {
      if (item.style.display === 'none' || item.classList.contains('is-filtered-out')) { return; }
      if (shown < start || shown >= start + size) {
        item.classList.add('is-page-hidden');
      }
      shown += 1;
    });

    var nav = document.querySelector('[data-pagination="' + container.id + '"]');
    if (!nav) { return; }

    if (pages <= 1) {
      nav.innerHTML = '';
      nav.hidden = true;
      return;
    }
    nav.hidden = false;

    var markup = '<button class="pagination__btn" type="button" data-page-go="' + (current - 1) + '"' + (current === 1 ? ' disabled' : '') + ' aria-label="Previous page">&larr;</button>';
    for (var page = 1; page <= pages; page += 1) {
      if (pages > 9 && page > 2 && page < pages - 1 && Math.abs(page - current) > 1) {
        if (page === 3 || page === pages - 2) { markup += '<span class="pagination__gap">...</span>'; }
        continue;
      }
      markup += '<button class="pagination__btn' + (page === current ? ' is-active' : '') + '" type="button" data-page-go="' + page + '" aria-label="Page ' + page + '"' + (page === current ? ' aria-current="page"' : '') + '>' + page + '</button>';
    }
    markup += '<button class="pagination__btn" type="button" data-page-go="' + (current + 1) + '"' + (current === pages ? ' disabled' : '') + ' aria-label="Next page">&rarr;</button>';
    markup += '<span class="pagination__status">Page ' + current + ' of ' + pages + '</span>';
    nav.innerHTML = markup;
  }

  function refreshPagination() {
    each(document.querySelectorAll('[data-paginate]'), paginate);
  }

  function initPagination() {
    if (!document.querySelector('[data-paginate]')) { return; }

    on(document, 'click', function (event) {
      var button = event.target.closest ? event.target.closest('[data-page-go]') : null;
      if (!button || button.disabled) { return; }
      var nav = button.closest('[data-pagination]');
      if (!nav) { return; }
      var container = document.getElementById(nav.getAttribute('data-pagination'));
      if (!container) { return; }
      container.setAttribute('data-page', button.getAttribute('data-page-go'));
      paginate(container);
      var top = container.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });

    /* Filters in main.js and inline page scripts only toggle classes/styles.
       Observing those mutations keeps pagination correct without coupling
       the two scripts together. */
    each(document.querySelectorAll('[data-paginate]'), function (container) {
      if (!('MutationObserver' in window)) { return; }
      var timer = null;
      var observer = new MutationObserver(function () {
        window.clearTimeout(timer);
        timer = window.setTimeout(function () { paginate(container); }, 40);
      });
      observer.observe(container, { subtree: true, childList: true, attributes: true, attributeFilter: ['class', 'style'] });
    });

    on(document, 'input', function (event) {
      if (event.target.closest && event.target.closest('[data-archive], .skills-toolbar, #mcp-toolbar')) {
        window.setTimeout(refreshPagination, 60);
      }
    });
    on(document, 'click', function (event) {
      if (event.target.closest && event.target.closest('[data-filter-group], .skills-toolbar, #mcp-toolbar')) {
        window.setTimeout(refreshPagination, 60);
      }
    });

    refreshPagination();
    window.YOP = window.YOP || {};
    window.YOP.refreshPagination = refreshPagination;
  }

  /* ---------------------------------------------------------------------
     GitHub hydration: contributors, last commit, issues
     ------------------------------------------------------------------ */

  function relativeDate(dateString) {
    if (!dateString) { return 'unknown'; }
    var then = new Date(dateString).getTime();
    if (!then) { return 'unknown'; }
    var days = Math.max(0, Math.round((Date.now() - then) / 86400000));
    if (days === 0) { return 'today'; }
    if (days === 1) { return 'yesterday'; }
    if (days < 30) { return days + ' days ago'; }
    if (days < 365) { return Math.round(days / 30) + ' months ago'; }
    return Math.round(days / 365) + ' years ago';
  }

  function initRepoMeta() {
    var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-repo-meta][data-repo]'));
    if (!nodes.length) { return; }

    var cache = {};
    try { cache = JSON.parse(window.localStorage.getItem('yop_repo_meta_v1') || '{}'); } catch (error) { cache = {}; }
    var MAX_AGE = 6 * 60 * 60 * 1000;
    var now = Date.now();

    function paint(repo, data) {
      var scope = document.querySelectorAll('[data-repo-meta][data-repo="' + repo + '"]');
      each(scope, function (node) {
        each(node.querySelectorAll('[data-meta-field]'), function (field) {
          var name = field.getAttribute('data-meta-field');
          if (data[name] !== undefined && data[name] !== null) {
            field.textContent = data[name];
          }
        });
      });
    }

    var repos = {};
    nodes.forEach(function (node) { repos[node.getAttribute('data-repo')] = true; });

    Object.keys(repos).forEach(function (repo) {
      if (cache[repo] && now - cache[repo].ts < MAX_AGE) { paint(repo, cache[repo].data); }
    });

    Object.keys(repos).forEach(function (repo) {
      if (cache[repo] && now - cache[repo].ts < MAX_AGE) { return; }

      var repoRequest = fetch('https://api.github.com/repos/' + repo, { headers: { Accept: 'application/vnd.github+json' } })
        .then(function (response) { return response.ok ? response.json() : null; })
        .catch(function () { return null; });

      var contributorRequest = fetch('https://api.github.com/repos/' + repo + '/contributors?per_page=100&anon=1', { headers: { Accept: 'application/vnd.github+json' } })
        .then(function (response) {
          if (!response.ok) { return null; }
          var link = response.headers.get('Link') || '';
          var match = link.match(/[?&]page=(\d+)>; rel="last"/);
          if (match) { return Number(match[1]); }
          return response.json().then(function (list) { return Array.isArray(list) ? list.length : null; });
        })
        .catch(function () { return null; });

      Promise.all([repoRequest, contributorRequest]).then(function (results) {
        var repoData = results[0];
        var contributors = results[1];
        if (!repoData) { return; }
        var data = {
          contributors: contributors ? String(contributors) : 'n/a',
          lastCommit: relativeDate(repoData.pushed_at),
          openIssues: String(repoData.open_issues_count || 0),
          stars: String(repoData.stargazers_count || 0),
          forks: String(repoData.forks_count || 0)
        };
        cache[repo] = { ts: now, data: data };
        try { window.localStorage.setItem('yop_repo_meta_v1', JSON.stringify(cache)); } catch (error) {}
        paint(repo, data);
      }).catch(function () {});
    });
  }

  /* ---------------------------------------------------------------------
     Detail-page instruments: token footprint, context gauge, size split,
     security scan, allowed-tools check, markdown render and flow map.
     ------------------------------------------------------------------ */

  function textMetrics(text) {
    var source = String(text || '');
    var words = source.trim() ? source.trim().split(/\s+/).length : 0;
    var tokens = Math.ceil(source.length / 4);
    return {
      chars: source.length,
      words: words,
      tokens: tokens,
      bytes: new Blob([source]).size
    };
  }

  function formatBytes(bytes) {
    if (bytes < 1024) { return bytes + ' B'; }
    if (bytes < 1024 * 1024) { return (bytes / 1024).toFixed(1) + ' KB'; }
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  function initDetailInstruments() {
    var content = document.getElementById('skill-md-content') || document.getElementById('prompt-body');
    if (!content) { return; }

    var source = function () { return content.textContent || ''; };

    function paintMetrics() {
      var metrics = textMetrics(source());
      each(document.querySelectorAll('[data-metric="tokens"]'), function (node) { node.textContent = metrics.tokens.toLocaleString(); });
      each(document.querySelectorAll('[data-metric="words"]'), function (node) { node.textContent = metrics.words.toLocaleString(); });
      each(document.querySelectorAll('[data-metric="chars"]'), function (node) { node.textContent = metrics.chars.toLocaleString(); });
      each(document.querySelectorAll('[data-metric="bytes"]'), function (node) { node.textContent = formatBytes(metrics.bytes); });

      each(document.querySelectorAll('[data-context-gauge]'), function (node) {
        var limit = parseInt(node.getAttribute('data-limit'), 10) || 128000;
        var percent = Math.min(100, (metrics.tokens / limit) * 100);
        var fill = node.querySelector('[data-gauge-fill]');
        var label = node.querySelector('[data-gauge-label]');
        if (fill) { fill.style.width = percent.toFixed(1) + '%'; }
        if (label) { label.textContent = percent.toFixed(percent < 1 ? 2 : 1) + '% of ' + (limit / 1000) + 'k'; }
      });

      var breakdown = document.querySelector('[data-size-breakdown]');
      if (breakdown) {
        breakdown.innerHTML = '<span class="size-bar__seg size-bar__seg--body" style="width:100%"></span>';
      }
    }

    function scanSecurity() {
      var text = source();
      var checks = [
        { label: 'Network fetch (curl/wget)', test: /\b(curl|wget|Invoke-WebRequest)\b/i, level: 'warn' },
        { label: 'Privilege escalation (sudo)', test: /\bsudo\b/i, level: 'high' },
        { label: 'Destructive delete (rm -rf)', test: /rm\s+-rf|Remove-Item[^\n]*-Recurse/i, level: 'high' },
        { label: 'Remote code (eval/exec)', test: /\b(eval|exec)\s*\(/i, level: 'warn' },
        { label: 'Hardcoded secret pattern', test: /(api[_-]?key|token|secret|password)\s*[:=]\s*['"]?[A-Za-z0-9_\-]{16,}/i, level: 'high' },
        { label: 'Local server / port bind', test: /\b(localhost|127\.0\.0\.1|0\.0\.0\.0):\d{2,5}\b/i, level: 'warn' },
        { label: 'Base64 decode', test: /base64\s+(-d|--decode)|atob\(/i, level: 'warn' },
        { label: 'SSH / key material', test: /ssh-rsa|BEGIN [A-Z ]*PRIVATE KEY/i, level: 'high' }
      ];
      var findings = checks.filter(function (check) { return check.test.test(text); });
      var output = document.querySelector('[data-security-scan]');
      if (!output) { return; }
      if (!findings.length) {
        output.innerHTML = '<span class="risk-badge risk-badge--low">Low</span> No risky command patterns found in the visible file. This is a static pattern check, not a guarantee.';
        return;
      }
      output.innerHTML = '<span class="risk-badge risk-badge--high">Review</span> ' +
        findings.map(function (finding) { return escapeHtml(finding.label); }).join(' &middot; ') +
        '<span class="risk-note">Always read the full skill before installing.</span>';
    }

    function scanAllowedTools() {
      var match = source().match(/^---\s*\n([\s\S]*?)\n---/);
      var output = document.querySelector('[data-allowed-tools]');
      if (!output) { return; }
      var tools = [];
      if (match) {
        var line = match[1].match(/allowed[-_]tools\s*:\s*(.+)/i);
        if (line) {
          tools = line[1].replace(/[\[\]]/g, '').split(',').map(function (tool) { return tool.trim().replace(/^['"]|['"]$/g, ''); }).filter(Boolean);
        }
      }
      if (!tools.length) {
        output.innerHTML = '<span class="risk-badge risk-badge--low">Not declared</span> No <code>allowed-tools</code> field in the front matter. Treat the skill as having the agent\'s default access.';
        return;
      }
      var broad = tools.filter(function (tool) { return /bash|shell|write|edit|network|webfetch|computer/i.test(tool); });
      output.innerHTML = tools.map(function (tool) { return '<span class="tag-mono">' + escapeHtml(tool) + '</span>'; }).join('') +
        (broad.length ? '<p class="risk-note">Requests broad access: ' + broad.map(escapeHtml).join(', ') + '. Confirm that matches the job.</p>' : '<p class="risk-note">Scope looks narrow.</p>');
    }

    function triggers() {
      var output = document.querySelector('[data-trigger-list]');
      if (!output) { return; }
      var text = source();
      var triggers = [];
      (function () {
        var match = text.match(/(?:triggers?|activate[sd]? (?:on|when)|use when)\s*[:\-]\s*(.+)/i);
        if (match) {
          triggers = match[1].split(/[;,]/).map(function (item) { return item.trim(); }).filter(Boolean).slice(0, 8);
        }
      })();
      if (!triggers.length) {
        var tags = (document.querySelector('[data-skill-tags]') || {}).textContent || '';
        triggers = tags.split(',').map(function (tag) { return tag.trim(); }).filter(Boolean).slice(0, 6);
      }
      output.innerHTML = triggers.length
        ? triggers.map(function (trigger) { return '<span class="tag-mono tag-mono--accent">' + escapeHtml(trigger) + '</span>'; }).join('')
        : '<span class="body-sm">No explicit activation phrases found. The description is the trigger.</span>';
    }

    function renderMarkdown() {
      var button = document.querySelector('[data-render-markdown]');
      var target = document.querySelector('[data-markdown-output]');
      if (!button || !target) { return; }
      on(button, 'click', function () {
        var showing = target.hidden === false;
        if (showing) {
          target.hidden = true;
          content.hidden = false;
          button.textContent = 'Render markdown';
          return;
        }
        target.innerHTML = markdownToHtml(source());
        target.hidden = false;
        content.hidden = true;
        button.textContent = 'Show source';
      });
    }

    function flowMap() {
      var button = document.querySelector('[data-flow-toggle]');
      var target = document.querySelector('[data-flow-output]');
      if (!button || !target) { return; }
      on(button, 'click', function () {
        if (!target.hidden) {
          target.hidden = true;
          button.textContent = 'Visualize steps';
          return;
        }
        target.innerHTML = buildFlow(source());
        target.hidden = false;
        button.textContent = 'Hide flow';
      });
    }

    function pathSwitcher() {
      var buttons = document.querySelectorAll('[data-path-agent]');
      var output = document.querySelector('[data-path-output]');
      if (!buttons.length || !output) { return; }
      each(buttons, function (button) {
        on(button, 'click', function () {
          each(buttons, function (other) {
            other.setAttribute('aria-pressed', other === button ? 'true' : 'false');
            other.classList.toggle('is-active', other === button);
          });
          output.textContent = button.getAttribute('data-path-value') || '';
        });
      });
    }

    function installBuilder() {
      var form = document.querySelector('[data-install-builder]');
      if (!form) { return; }
      var output = form.querySelector('[data-install-output]');
      var fields = form.querySelectorAll('[data-install-field]');
      function update() {
        var repo = (form.querySelector('[name="repo"]') || {}).value || '';
        var skill = (form.querySelector('[name="skill"]') || {}).value || '';
        var agent = (form.querySelector('[name="agent"]') || {}).value || '';
        var command = 'npx skills add ' + (repo || 'owner/repo') + (skill ? '@' + skill : '');
        if (agent && agent !== 'skills-cli') {
          command = agent + ' install ' + (repo || 'owner/repo') + (skill ? '#' + skill : '');
        }
        if (output) { output.textContent = command; }
      }
      each(fields, function (field) { on(field, 'input', update); on(field, 'change', update); });
      update();
    }

    function scaffold() {
      each(document.querySelectorAll('[data-mcp-export]'), function (button) {
        on(button, 'click', function () {
          var language = button.getAttribute('data-mcp-export');
          var slug = button.getAttribute('data-slug') || 'skill';
          var title = button.getAttribute('data-title') || slug;
          var repo = button.getAttribute('data-repo') || '';
          var template = language === 'python'
            ? 'from mcp.server.fastmcp import FastMCP\n\nmcp = FastMCP("' + slug + '")\n\n@mcp.tool()\ndef run_' + slug.replace(/[^a-z0-9]+/gi, '_') + '(input: str) -> str:\n    """Run the ' + title + ' skill workflow."""\n    return "Connect this tool to your agent runner and replace with the skill logic."\n\nif __name__ == "__main__":\n    mcp.run()\n'
            : 'import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";\nimport { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";\nimport { z } from "zod";\n\nconst server = new McpServer({ name: "' + slug + '", version: "0.1.0" });\n\nserver.tool("run_' + slug.replace(/[^a-z0-9]+/gi, '_') + '", { input: z.string() }, async ({ input }) => ({\n  content: [{ type: "text", text: `Run the ' + title + ' workflow for: ${input}` }]\n}));\n\nawait server.connect(new StdioServerTransport());\n';
          downloadFile(slug + '-mcp.' + (language === 'python' ? 'py' : 'js'), template);
          beep('success');
        });
      });
    }

    function readmeSnippet() {
      var button = document.querySelector('[data-readme-snippet]');
      if (!button) { return; }
      on(button, 'click', function () {
        var slug = button.getAttribute('data-slug') || '';
        var repo = button.getAttribute('data-repo') || 'owner/repo';
        var snippet = '[![Install with Skills CLI](https://img.shields.io/badge/skills-' + encodeURIComponent(slug) + '-7c3aed)](https://f9xr.org/yoprompts/ai-agent-skills/' + slug + '/)\n\n```bash\nnpx skills add ' + repo + '@' + slug + '\n```\n';
        copyAndFlash(button, snippet);
      });
    }

    paintMetrics();
    scanSecurity();
    scanAllowedTools();
    triggers();
    renderMarkdown();
    flowMap();
    pathSwitcher();
    installBuilder();
    scaffold();
    readmeSnippet();

    if (content.hasAttribute('data-repo-url')) {
      window.setTimeout(function () { paintMetrics(); scanSecurity(); triggers(); }, 2500);
    }
  }

  function markdownToHtml(markdown) {
    var lines = String(markdown || '').replace(/\r\n/g, '\n').split('\n');
    var html = [];
    var inCode = false;
    var inList = false;

    function closeList() {
      if (inList) { html.push('</ul>'); inList = false; }
    }

    lines.forEach(function (line) {
      if (/^```/.test(line)) {
        if (inCode) { html.push('</code></pre>'); inCode = false; }
        else { closeList(); html.push('<pre><code>'); inCode = true; }
        return;
      }
      if (inCode) { html.push(escapeHtml(line)); return; }

      if (/^\s*$/.test(line)) { closeList(); return; }
      var heading = line.match(/^(#{1,4})\s+(.*)$/);
      if (heading) {
        closeList();
        var level = heading[1].length;
        html.push('<h' + level + '>' + inlineMarkdown(heading[2]) + '</h' + level + '>');
        return;
      }
      var item = line.match(/^\s*[-*+]\s+(.*)$/);
      if (item) {
        if (!inList) { html.push('<ul>'); inList = true; }
        html.push('<li>' + inlineMarkdown(item[1]) + '</li>');
        return;
      }
      var ordered = line.match(/^\s*\d+[.)]\s+(.*)$/);
      if (ordered) {
        if (!inList) { html.push('<ul>'); inList = true; }
        html.push('<li>' + inlineMarkdown(ordered[1]) + '</li>');
        return;
      }
      closeList();
      html.push('<p>' + inlineMarkdown(line) + '</p>');
    });

    closeList();
    if (inCode) { html.push('</code></pre>'); }
    return html.join('\n');
  }

  function inlineMarkdown(text) {
    return escapeHtml(text)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" rel="noopener noreferrer">$1</a>');
  }

  function buildFlow(markdown) {
    var lines = String(markdown || '').replace(/\r\n/g, '\n').split('\n');
    var steps = [];
    lines.forEach(function (line) {
      var heading = line.match(/^#{1,3}\s+(.*)$/);
      if (heading) { steps.push(heading[1]); return; }
      var ordered = line.match(/^\s*\d+[.)]\s+(.*)$/);
      if (ordered) { steps.push(ordered[1]); }
    });
    if (!steps.length) { return '<p class="body-sm">No headings or numbered steps found in this file.</p>'; }
    return '<ol class="flow-map">' + steps.slice(0, 18).map(function (step, index) {
      return '<li class="flow-map__step"><span class="flow-map__index">' + String(index + 1).padStart(2, '0') + '</span><span>' + escapeHtml(step) + '</span></li>';
    }).join('') + '</ol>';
  }

  function downloadFile(name, text) {
    var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  /* ---------------------------------------------------------------------
     Installation history (session only) and copy tracking
     ------------------------------------------------------------------ */

  function trackInstall(button) {
    try {
      var history = JSON.parse(window.sessionStorage.getItem(STORE.installs) || '[]');
      history.unshift({
        title: button.getAttribute('data-install-title') || button.getAttribute('data-title') || 'Skill',
        command: button.getAttribute('data-install-command') || button.getAttribute('data-copy-text') || '',
        at: new Date().toISOString()
      });
      window.sessionStorage.setItem(STORE.installs, JSON.stringify(history.slice(0, 30)));
    } catch (error) {}
  }

  function initCopyTracking() {
    on(document, 'click', function (event) {
      var install = event.target.closest ? event.target.closest('[data-copy-text]') : null;
      if (install) {
        trackInstall(install);
        copyAndFlash(install, install.getAttribute('data-copy-text'));
        event.preventDefault();
        return;
      }

      var installBlock = event.target.closest ? event.target.closest('[data-copy-install]') : null;
      if (installBlock) {
        var command = installBlock.getAttribute('data-copy-install');
        trackInstall(installBlock);
        copyAndFlash(installBlock, command);
        event.preventDefault();
      }
    });
  }

  /* ---------------------------------------------------------------------
     PWA
     ------------------------------------------------------------------ */

  function initPWA() {
    if (!('serviceWorker' in navigator)) { return; }
    var meta = document.querySelector('meta[name="yop-sw"]');
    var sw = meta ? meta.getAttribute('content') : base + 'sw.js';
    window.addEventListener('load', function () {
      navigator.serviceWorker.register(sw, { scope: base }).catch(function () {});
    });
  }

  /* ---------------------------------------------------------------------
     Live install history panel (used by the lab page)
     ------------------------------------------------------------------ */

  function initHistoryPanel() {
    var panel = document.querySelector('[data-install-history]');
    if (!panel) { return; }
    function render() {
      var history = [];
      try { history = JSON.parse(window.sessionStorage.getItem(STORE.installs) || '[]'); } catch (error) {}
      panel.innerHTML = history.length
        ? history.map(function (item) {
            return '<li><span class="body-sm">' + escapeHtml(item.title) + '</span><code class="history-command">' + escapeHtml(item.command) + '</code></li>';
          }).join('')
        : '<li class="body-sm">No installs clicked in this session yet.</li>';
    }
    render();
    window.YOP = window.YOP || {};
    window.YOP.renderHistory = render;
  }

  /* Boot ----------------------------------------------------------------- */

  function boot() {
    initSettings();
    initSearch();
    initShortcuts();
    initBackToTop();
    initPagination();
    initRepoMeta();
    initDetailInstruments();
    initCopyTracking();
    initPWA();
    initHistoryPanel();
    refreshPagination();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  window.YOP = window.YOP || {};
  window.YOP.copy = copyText;
  window.YOP.copyAndFlash = copyAndFlash;
  window.YOP.escapeHtml = escapeHtml;
  window.YOP.download = downloadFile;
  window.YOP.beep = beep;
  window.YOP.base = base;
})();
