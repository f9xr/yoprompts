/* ==========================================================================
   YoPrompts by F9XR Team

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
     08  Analytics consent
     09  Nav dropdown panels
     10  Footer reveal
    ========================================================================== */

  /* Analytics identity. Kept here rather than in head.html so that gtag.js is
     never requested until consent has actually been granted. */
  var GA_ID = 'G-SYTFR8FYXC';
  var CONSENT_KEY = 'yoprompts_consent';

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

    var FOCUSABLE =
      'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

    function focusables() {
      return Array.prototype.filter.call(
        drawer.querySelectorAll(FOCUSABLE),
        function (node) {
          /* offsetParent is null for display:none subtrees, which is how the
             closed drawer reports its own contents as unfocusable. */
          return node.offsetParent !== null;
        }
      );
    }

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      drawer.hidden = !open;

      if (open) {
        var items = focusables();
        if (items.length) {
          items[0].focus();
        }
      }
    }

    on(toggle, 'click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    on(document, 'keydown', function (event) {
      if (toggle.getAttribute('aria-expanded') !== 'true') {
        return;
      }

      if (event.key === 'Escape') {
        setOpen(false);
        toggle.focus();
        return;
      }

      /* Trap Tab inside the drawer while it is open, otherwise focus walks
         out to the page behind it and the open panel becomes a keyboard trap
         of its own. */
      if (event.key !== 'Tab') {
        return;
      }

      var items = focusables();
      if (!items.length) {
        return;
      }

      var first = items[0];
      var last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        last.focus();
        event.preventDefault();
      } else if (!event.shiftKey && document.activeElement === last) {
        first.focus();
        event.preventDefault();
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

    /* Only now does the stylesheet hide anything. Adding the class last means a
       browser that never got here still renders every card fully visible. */
    each(targets, function (node) {
      observer.observe(node);
    });

    document.documentElement.classList.add('reveal-ready');
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

      /* The track is a scrollable region, so it has to be reachable and
         operable from the keyboard. Native scrolling only responds to arrow
         keys when the element itself takes focus, which is why the markup
         gives it tabindex="0". */
      on(track, 'keydown', function (event) {
        var distance = step();

        switch (event.key) {
          case 'ArrowLeft':
            track.scrollLeft -= distance;
            break;
          case 'ArrowRight':
            track.scrollLeft += distance;
            break;
          case 'Home':
            track.scrollLeft = 0;
            break;
          case 'End':
            track.scrollLeft = track.scrollWidth;
            break;
          default:
            return;
        }

        event.preventDefault();
        sync();
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
      var unit = archive.getAttribute('data-filter-unit') || 'prompts';

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
        (item.getAttribute('data-category') || '').split(' ').indexOf(state.category) === -1
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
              ? total + ' ' + unit
              : shown + ' of ' + total + ' ' + unit;
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


  /* 08  Analytics consent ================================================= */

  /* Nothing here runs unless the visitor answers the banner, and the banner
     itself is hidden in the markup. The defaults in head.html already deny
     every storage type, so if this module never executes, analytics is off and
     no Google script is ever requested. */

  function readConsent() {
    try {
      var value = window.localStorage.getItem(CONSENT_KEY);
      return value === 'granted' || value === 'denied' ? value : null;
    } catch (error) {
      /* Private mode or blocked storage. Treat as undecided, which means the
         banner still appears but nothing is persisted. */
      return null;
    }
  }

  function writeConsent(choice) {
    try {
      window.localStorage.setItem(CONSENT_KEY, choice);
    } catch (error) {
      /* Choice applies for this page view only. */
    }
  }

  function loadGA() {
    if (document.getElementById('yoprompts-ga')) {
      return;
    }

    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted',
      security_storage: 'granted'
    });

    var script = document.createElement('script');
    script.id = 'yoprompts-ga';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);

    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  function doNotTrack() {
    var dnt =
      navigator.doNotTrack ||
      window.doNotTrack ||
      navigator.msDoNotTrack ||
      null;
    return dnt === '1' || dnt === 'yes';
  }

  function initConsent() {
    if (typeof window.gtag !== 'function') {
      return;
    }

    var banner = document.querySelector('[data-consent-banner]');
    var status = document.querySelector('[data-consent-status]');
    var stored = readConsent();

    if (stored === 'granted') {
      loadGA();
    }

    var describe = function () {
      if (!status) {
        return;
      }
      if (stored === 'granted') {
        status.textContent =
          'Analytics are currently allowed on this device. Google Analytics loads when you visit.';
      } else if (stored === 'denied') {
        status.textContent =
          'Analytics are currently declined on this device. No analytics script is requested.';
      } else {
        status.textContent =
          'No choice saved yet, so no analytics code is running.';
      }
    };

    var apply = function (choice) {
      stored = choice;
      writeConsent(choice);

      if (choice === 'granted') {
        loadGA();
      } else {
        /* Nothing to unload: gtag.js is only ever injected after consent, so
           declining means it was never requested in the first place. */
      }

      if (banner) {
        banner.hidden = true;
      }

      describe();
    };

    each(document.querySelectorAll('[data-consent-accept]'), function (button) {
      on(button, 'click', function () {
        apply('granted');
      });
    });

    each(document.querySelectorAll('[data-consent-reject]'), function (button) {
      on(button, 'click', function () {
        apply('denied');
      });
    });

    describe();

    /* Ask only when there is no saved decision, and not at all when the browser
       is already signalling Do Not Track. */
    if (banner && !stored && !doNotTrack()) {
      banner.hidden = false;

      /* Non-modal, so focus is moved to the region rather than trapped. A
         keyboard visitor should not be left unaware that the prompt is there. */
      var firstButton = banner.querySelector('[data-consent-accept]');
      if (firstButton) {
        firstButton.focus();
      }
    }
  }


  /* 09  Nav dropdown panels ============================================== */

  /* The panel itself is CSS driven: `.nav-item.has-menu:hover` and
     `:focus-within` both open it, so the menu works with JavaScript off and
     with a keyboard before this module ever runs. What it cannot do without
     help is close on Escape or keep `aria-expanded` honest, which is all this
     adds. */
  function initNavMenus() {
    var menus = document.querySelectorAll('[data-nav-menu]');
    if (!menus.length) {
      return;
    }

    var close = function (item) {
      item.classList.remove('is-open');
      var toggle = item.querySelector('[data-nav-menu-toggle]');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
      }
    };

    var open = function (item) {
      each(menus, close);
      item.classList.add('is-open');
      var toggle = item.querySelector('[data-nav-menu-toggle]');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'true');
      }
    };

    each(menus, function (item) {
      var toggle = item.querySelector('[data-nav-menu-toggle]');

      on(toggle, 'click', function (event) {
        event.preventDefault();
        if (item.classList.contains('is-open')) {
          close(item);
        } else {
          open(item);
        }
      });

      on(item, 'focusin', function () {
        if (!item.matches(':hover')) {
          open(item);
        }
      });

      on(item, 'mouseleave', function () {
        if (!item.contains(document.activeElement)) {
          close(item);
        }
      });

      on(item, 'focusout', function () {
        window.setTimeout(function () {
          if (!item.contains(document.activeElement)) {
            close(item);
          }
        }, 0);
      });
    });

    on(document, 'keydown', function (event) {
      if (event.key !== 'Escape') {
        return;
      }
      each(menus, function (item) {
        if (item.classList.contains('is-open')) {
          var toggle = item.querySelector('[data-nav-menu-toggle]');
          close(item);
          if (toggle) {
            toggle.focus();
          }
        }
      });
    });

    on(document, 'click', function (event) {
      each(menus, function (item) {
        if (!item.contains(event.target)) {
          close(item);
        }
      });
    });
  }


  /* 10  Footer reveal ==================================================== */

  /* The footer is pinned behind the page and the content slides up off it at
     the end of the scroll. Purely decorative, so it is opt-in: main.js
     measures the footer, publishes the height as a custom property, and only
     then adds the class that switches the footer to fixed. If the footer is
     taller than the viewport the effect would hide part of it for good, so
     it is skipped entirely in that case, as it is under reduced motion. */
  function initFooterReveal() {
    var foot = document.querySelector('[data-footer-reveal]');
    var main = document.getElementById('main');
    var root = document.documentElement;

    if (!foot || !main || reduceMotion) {
      return;
    }

    var enabled = false;

    function measure() {
      var height = foot.offsetHeight;
      var fits = height > 0 && height < window.innerHeight * 0.92;

      root.style.setProperty('--footer-h', fits ? height + 'px' : '0px');

      if (fits !== enabled) {
        enabled = fits;
        root.classList.toggle('footer-reveal-ready', fits);
      }
    }

    measure();
    on(window, 'resize', measure);
    if ('ResizeObserver' in window) {
      new ResizeObserver(measure).observe(foot);
    }
  }


  /* Boot ================================================================== */

  function boot() {
    initCopy();
    initHeader();
    initDrawer();
    initReveals();
    initCarousels();
    initFilters();
    initConsent();
    initNavMenus();
    initFooterReveal();
  }

  if (document.readyState === 'loading') {
    on(document, 'DOMContentLoaded', boot);
  } else {
    boot();
  }
})();