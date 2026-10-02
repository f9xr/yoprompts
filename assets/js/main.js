/* ==========================================================================
   YoPrompts — by F9XR Team

   Progressive enhancement only. Every feature below is additive: with
   JavaScript disabled the pages still render, still link, and the prompt
   text is still readable and selectable.

   Modules
     01  Utilities
     02  Copy to clipboard
     03  Sticky header state
     04  Mobile navigation drawer
     05  Scroll reveals
     06  Stories carousel
     07  Archive filtering (search + pill groups)
   ========================================================================== */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;


  /* 01  Utilities ======================================================== */

  function each(list, fn) {
    Array.prototype.forEach.call(list || [], fn);
  }

  function on(target, type, handler) {
    if (target) {
      target.addEventListener(type, handler);
    }
  }

  /* Resolves a copy target. "body" points at the visible prompt container on
     a prompt detail page; anything else names a hidden prompt-source
     script embedded in a card. */
  function readPrompt(key) {
    if (key === 'body') {
      var shell = document.getElementById('prompt-body');
      return shell ? shell.textContent : '';
    }

    var nodes = document.querySelectorAll(
      'script[type="application/x-prompt"][data-key="' + key + '"]'
    );
    return nodes.length ? nodes[0].textContent : '';
  }

  function normalise(text) {
    return String(text || '').replace(/\r\n/g, '\n').replace(/[ \t]+$/gm, '').trim();
  }


  /* 02  Copy to clipboard ================================================ */

  function legacyCopy(text) {
    return new Promise(function (resolve, reject) {
      var field = document.createElement('textarea');
      field.value = text;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.top = '-1000px';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();

      var ok = false;
      try {
        ok = document.execCommand('copy');
      } catch (error) {
        ok = false;
      }

      document.body.removeChild(field);
      ok ? resolve() : reject(new Error('copy-unavailable'));
    });
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return legacyCopy(text);
  }

  var COPY_RESET_MS = 2000;

  function flashCopied(button) {
    var label = button.querySelector('.button__label');
    var original = button.getAttribute('data-label') || (label ? label.textContent : '');

    button.setAttribute('data-label', original);
    if (label) {
      label.textContent = 'Copied';
    }
    button.setAttribute('aria-live', 'polite');
    button.classList.add('is-copied');

    window.setTimeout(function () {
      if (label) {
        label.textContent = original;
      }
      button.classList.remove('is-copied');
      button.removeAttribute('aria-live');
    }, COPY_RESET_MS);
  }

  function initCopy() {
    on(document, 'click', function (event) {
      var button = event.target.closest ? event.target.closest('[data-copy]') : null;
      if (!button) {
        return;
      }

      event.preventDefault();

      var text = normalise(readPrompt(button.getAttribute('data-copy')));
      if (!text) {
        return;
      }

      copyText(text).then(
        function () {
          flashCopied(button);
        },
        function () {
          // Clipboard blocked (insecure context, denied permission). Select
          // the source instead so the user can copy it by hand.
          selectFallback(button.getAttribute('data-copy'));
        }
      );
    });
  }

  function selectFallback(key) {
    if (key !== 'body') {
      return;
    }

    var shell = document.getElementById('prompt-body');
    if (!shell) {
      return;
    }

    var range = document.createRange();
    range.selectNodeContents(shell);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    shell.scrollIntoView({ block: 'nearest' });
  }


  /* 03  Sticky header state ============================================== */

  function initHeader() {
    var header = document.querySelector('[data-header]');
    if (!header) {
      return;
    }

    var ticking = false;

    function update() {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
      ticking = false;
    }

    on(
      window,
      'scroll',
      function () {
        if (ticking) {
          return;
        }
        ticking = true;
        window.requestAnimationFrame(update);
      },
      false
    );

    update();
  }


  /* 04  Mobile navigation drawer ========================================= */

  function initDrawer() {
    var toggle = document.querySelector('[data-drawer-toggle]');
    var drawer = document.querySelector('[data-drawer]');
    if (!toggle || !drawer) {
      return;
    }

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      drawer.hidden = !open;
    }

    on(toggle, 'click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    on(document, 'keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    each(drawer.querySelectorAll('a'), function (link) {
      on(link, 'click', function () {
        setOpen(false);
      });
    });

    setOpen(false);
  }


  /* 05  Scroll reveals =================================================== */

  function initReveals() {
    var targets = document.querySelectorAll('.reveal');
    if (!targets.length) {
      return;
    }

    if (reduceMotion || !('IntersectionObserver' in window)) {
      each(targets, function (node) {
        node.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    each(targets, function (node) {
      observer.observe(node);
    });
  }


  /* 06  Stories carousel ================================================= */

  function initCarousels() {
    each(document.querySelectorAll('[data-carousel]'), function (region) {
      var track = region.querySelector('[data-carousel-track]');
      if (!track) {
        return;
      }

      var step = function () {
        var card = track.firstElementChild;
        if (!card) {
          return track.clientWidth * 0.8;
        }
        var gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
        return card.offsetWidth + gap;
      };

      var sync = function () {
        var prev = region.querySelector('[data-carousel-prev]');
        var next = region.querySelector('[data-carousel-next]');
        var max = track.scrollWidth - track.clientWidth - 2;

        if (prev) {
          prev.disabled = track.scrollLeft <= 2;
        }
        if (next) {
          next.disabled = track.scrollLeft >= max;
        }
      };

      on(region.querySelector('[data-carousel-prev]'), 'click', function () {
        track.scrollLeft -= step();
      });

      on(region.querySelector('[data-carousel-next]'), 'click', function () {
        track.scrollLeft += step();
      });

      on(track, 'scroll', function () {
        window.requestAnimationFrame(sync);
      }, { passive: true });

      on(window, 'resize', sync);
      sync();
    });
  }


  /* 07  Archive filtering ================================================= */

  function initFilters() {
    each(document.querySelectorAll('[data-archive]'), function (archive) {
      var items = archive.querySelectorAll('[data-filter-item]');
      var search = archive.querySelector('[data-filter-search]');
      var clear = archive.querySelector('[data-filter-clear]');
      var counter = archive.querySelector('[data-filter-count]');
      var empty = archive.querySelector('[data-filter-empty]');
      var groups = archive.querySelectorAll('[data-filter-group]');
      var total = items.length;

      if (!items.length) {
        return;
      }

      var state = { search: '', category: 'all', tool: 'all', difficulty: 'all' };

      var haystack = function (item) {
        var cached = item.getAttribute('data-haystack');
        if (cached === null) {
          cached = [
            item.getAttribute('data-title') || '',
            item.getAttribute('data-search') || '',
            item.getAttribute('data-category') || '',
            item.getAttribute('data-tools') || '',
            item.getAttribute('data-difficulty') || ''
          ]
            .join(' ')
            .toLowerCase();
          item.setAttribute('data-haystack', cached);
        }
        return cached;
      };

      var matches = function (item) {
        var terms = state.search.split(' ').filter(Boolean);

        for (var i = 0; i < terms.length; i += 1) {
          if (haystack(item).indexOf(terms[i]) === -1) {
            return false;
          }
        }

        if (
          state.category !== 'all' &&
          item.getAttribute('data-category') !== state.category
        ) {
          return false;
        }

        if (state.difficulty !== 'all' &&
          item.getAttribute('data-difficulty') !== state.difficulty) {
          return false;
        }

        if (state.tool !== 'all') {
          var tools = (item.getAttribute('data-tools') || '').split(' ');
          if (tools.indexOf(state.tool) === -1) {
            return false;
          }
        }

        return true;
      };

      // Picks up ?q= so the WebSite SearchAction in the page's structured data
      // describes something the page actually does.
      var fromQuery = function () {
        if (!window.URLSearchParams || !search) {
          return;
        }
        var q = new URLSearchParams(window.location.search).get('q');
        if (q) {
          search.value = q;
          state.search = q.trim().toLowerCase();
        }
      };

      var apply = function () {
        var shown = 0;

        each(items, function (item) {
          var visible = matches(item);
          item.classList.toggle('is-filtered-out', !visible);
          if (visible) {
            shown += 1;
          }
        });

        if (counter) {
          counter.textContent =
            shown === total
              ? total + ' prompts'
              : shown + ' of ' + total + ' prompts';
        }

        if (empty) {
          empty.classList.toggle('is-visible', shown === 0);
        }

        if (clear) {
          clear.classList.toggle('is-visible', state.search.length > 0);
        }
      };

      on(search, 'input', function () {
        state.search = search.value.trim().toLowerCase();
        apply();
      });

      on(clear, 'click', function () {
        search.value = '';
        state.search = '';
        apply();
        search.focus();
      });

      each(groups, function (group) {
        var name = group.getAttribute('data-filter-group');

        on(group, 'click', function (event) {
          var pill = event.target.closest('[data-filter-value]');
          if (!pill || !group.contains(pill)) {
            return;
          }

          state[name] = pill.getAttribute('data-filter-value');

          each(group.querySelectorAll('[data-filter-value]'), function (sibling) {
            sibling.setAttribute('aria-pressed', sibling === pill ? 'true' : 'false');
          });

          apply();
        });
      });

      fromQuery();
      apply();
    });
  }


  /* Boot ================================================================== */

  function boot() {
    initCopy();
    initHeader();
    initDrawer();
    initReveals();
    initCarousels();
    initFilters();
  }

  if (document.readyState === 'loading') {
    on(document, 'DOMContentLoaded', boot);
  } else {
    boot();
  }
})();