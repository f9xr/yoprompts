/* ==========================================================================
   YoPrompts clipboard

   One implementation of copy, flash, select and download for the whole site.
   Loaded before main.js and enhancements.js, and used by both, so a copy
   behaves identically on a prompt card, a prompt page, a skill page and the
   Lab. Exposed as window.YOPClipboard for page scripts.

   Every action stays progressive: without this file the prompt text is still
   visible and selectable, and nothing else changes.
   ========================================================================== */

(function () {
  'use strict';

  var RESET_MS = 1800;

  function notify(message) {
    if (window.YOP && window.YOP.toast) {
      window.YOP.toast(message);
    }
  }

  function legacyCopy(value) {
    return new Promise(function (resolve, reject) {
      var field = document.createElement('textarea');
      field.value = value;
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

  function copy(text) {
    var value = String(text || '');

    if (!value) {
      return Promise.reject(new Error('empty'));
    }

    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(value);
    }

    return legacyCopy(value);
  }

  /* Swaps a button's label for a confirmation, then puts it back. Works with
     buttons that carry a .button__label span and with plain-text buttons. */
  function flash(button, label, message) {
    if (!button) {
      return;
    }

    var node = button.querySelector('.button__label');
    var target = node || button;
    var original = button.getAttribute('data-original-label') || target.textContent;

    button.setAttribute('data-original-label', original);
    target.textContent = label || 'Copied';
    button.classList.add('is-copied');
    notify(message || 'Copied to clipboard');

    window.setTimeout(function () {
      target.textContent = original;
      button.classList.remove('is-copied');
      button.removeAttribute('data-original-label');
    }, RESET_MS);
  }

  function copyAndFlash(button, text) {
    return copy(text).then(function () {
      flash(button, 'Copied', 'Copied to clipboard');
    }).catch(function () {});
  }

  function select(node) {
    if (!node) {
      return;
    }

    var range = document.createRange();
    range.selectNodeContents(node);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    node.scrollIntoView({ block: 'nearest' });
  }

  function download(name, text) {
    var value = String(text || '');

    if (!value) {
      return false;
    }

    var blob = new Blob([value], { type: 'text/markdown;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');

    link.href = url;
    link.download = name || 'SKILL.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    return true;
  }

  /* Skill pages, and anything else that copies a fragment by reference,
     declare what to copy with a data attribute. Handling it here is why those
     pages need no clipboard code of their own. */
  function skillText() {
    var node = document.getElementById('skill-md-content');
    return node ? node.textContent : '';
  }

  function skillFileName() {
    var node = document.getElementById('skill-md-content');
    return (node && node.getAttribute('data-download-name')) || 'SKILL.md';
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest
      ? event.target.closest('[data-copy-block], [data-copy-text], [data-copy-install], [data-copy-skill], [data-download-skill]')
      : null;

    if (!button) {
      return;
    }

    event.preventDefault();

    if (button.hasAttribute('data-download-skill')) {
      if (download(skillFileName(), skillText())) {
        flash(button, 'Downloaded', 'Download started');
      }
      return;
    }

    if (button.hasAttribute('data-copy-skill')) {
      copyAndFlash(button, skillText());
      return;
    }

    if (button.hasAttribute('data-copy-block')) {
      var block = document.getElementById(button.getAttribute('data-copy-block'));
      copyAndFlash(button, block ? block.textContent : '');
      return;
    }

    if (button.hasAttribute('data-copy-text')) {
      copyAndFlash(button, button.getAttribute('data-copy-text'));
      return;
    }

    if (button.hasAttribute('data-copy-install')) {
      copyAndFlash(button, button.getAttribute('data-copy-install'));
    }
  });

  window.YOPClipboard = {
    copy: copy,
    flash: flash,
    copyAndFlash: copyAndFlash,
    select: select,
    download: download
  };

  window.YOP = window.YOP || {};
  window.YOP.copy = copy;
  window.YOP.download = download;
})();
