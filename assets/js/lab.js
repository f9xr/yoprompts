(function () {
  'use strict';

  var YOP = window.YOP || {};

  function on(target, type, handler) {
    if (target) { target.addEventListener(type, handler); }
  }

  function each(list, fn) { Array.prototype.forEach.call(list || [], fn); }

  function escapeHtml(value) {
    return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* Tabs */
  each(document.querySelectorAll('[data-lab-tab]'), function (button) {
    on(button, 'click', function () {
      var target = button.getAttribute('data-lab-tab');
      each(document.querySelectorAll('[data-lab-tab]'), function (b) {
        b.classList.toggle('is-active', b === button);
        b.setAttribute('aria-selected', b === button ? 'true' : 'false');
      });
      each(document.querySelectorAll('[data-lab-panel]'), function (panel) {
        panel.hidden = panel.getAttribute('data-lab-panel') !== target;
      });
    });
  });

  /* Validator */
  var valInput = document.getElementById('val-input');
  var valResult = document.getElementById('val-result');
  on(document.getElementById('val-run'), 'click', function () {
    if (!valInput || !valResult) { return; }
    var text = valInput.value || '';
    var errors = [];
    var warns = [];
    var match = text.match(/^---\s*\n([\s\S]*?)\n---/);
    if (!match) { errors.push('Missing front matter block (--- ... ---)'); }
    else {
      var fm = match[1];
      if (!/^name\s*:/m.test(fm)) { errors.push('Missing required field: name'); }
      if (!/^description\s*:/m.test(fm)) { errors.push('Missing required field: description'); }
      var name = (fm.match(/^name\s*:\s*["\']?(.+?)["\']?\s*$/m) || [])[1] || '';
      var desc = (fm.match(/^description\s*:\s*["\']?(.+?)["\']?\s*$/m) || [])[1] || '';
      if (name && name.length > 64) { errors.push('name exceeds 64 characters (' + name.length + ')'); }
      if (desc && desc.length > 1024) { errors.push('description exceeds 1024 characters (' + desc.length + ')'); }
      if (!/^[a-z0-9-]+$/.test(name.replace(/["\']/g,''))) { warns.push('name should use lowercase letters, numbers and hyphens'); }
    }
    if (!text.replace(/^---[\s\S]*?---/, '').trim()) { warns.push('No body instructions found after front matter'); }
    valResult.innerHTML = '';
    if (!errors.length && !warns.length) {
      valResult.innerHTML = '<span class="ok">Valid. Front matter and basic structure look good.</span>';
      return;
    }
    if (errors.length) {
      var ul = document.createElement('ul');
      errors.forEach(function (e) { var li = document.createElement('li'); li.className='bad'; li.textContent = e; ul.appendChild(li); });
      valResult.appendChild(ul);
    }
    if (warns.length) {
      var ul2 = document.createElement('ul');
      warns.forEach(function (e) { var li = document.createElement('li'); li.textContent = e; ul2.appendChild(li); });
      valResult.appendChild(ul2);
    }
  });
  on(document.getElementById('val-clear'), 'click', function () { if (valInput) { valInput.value=''; } if (valResult) { valResult.innerHTML=''; } });

  /* Generator */
  on(document.getElementById('gen-run'), 'click', function () {
    var name = document.getElementById('gen-name').value.trim();
    var desc = document.getElementById('gen-desc').value.trim();
    var license = document.getElementById('gen-license').value.trim() || 'MIT';
    var tools = document.getElementById('gen-tools').value.trim();
    var body = document.getElementById('gen-body').value;
    var result = document.getElementById('gen-result');
    var out = '---\nname: ' + (name || 'my-skill') + '\ndescription: ' + (desc || 'Describe what this skill does.') + '\nlicense: ' + license + '\n';
    if (tools) {
      var arr = tools.split(',').map(function (t) { return t.trim(); }).filter(Boolean);
      out += 'allowed-tools:\n' + arr.map(function (t) { return '  - ' + t; }).join('\n') + '\n';
    }
    out += '---\n\n' + (body || '# Instructions\n\nDescribe the goal, workflow, constraints and output format.\n');
    if (result) { result.textContent = out; }
  });
  on(document.getElementById('gen-copy'), 'click', function () {
    var result = document.getElementById('gen-result');
    if (result && result.textContent && YOP.copyAndFlash) {
      YOP.copyAndFlash(this, result.textContent);
    }
  });
  on(document.getElementById('gen-download'), 'click', function () {
    var result = document.getElementById('gen-result');
    if (result && result.textContent && YOP.download) {
      YOP.download('SKILL.md', result.textContent);
    }
  });

  /* CLI builder */
  on(document.getElementById('cli-build'), 'click', function () {
    var repo = document.getElementById('cli-repo').value.trim();
    var skill = document.getElementById('cli-skill').value.trim();
    var ref = document.getElementById('cli-ref').value.trim();
    var result = document.getElementById('cli-result');
    if (!repo) { if (result) { result.textContent = 'Enter owner/repo.'; } return; }
    var cmd = 'npx skills add ' + repo;
    if (skill) { cmd += '@' + skill; }
    if (ref && ref !== 'main') { cmd += '#' + ref; }
    if (result) { result.innerHTML = '<code>' + escapeHtml(cmd) + '</code><div class="lab-actions"><button class="button button--sm" type="button" data-copy-install="' + escapeHtml(cmd) + '">Copy install</button></div>'; }
  });

  /* MCP scaffold - uses attributes */
  on(document, 'click', function (event) {
    var button = event.target.closest ? event.target.closest('[data-mcp-export]') : null;
    if (!button) { return; }
    var lang = button.getAttribute('data-mcp-export');
    var slugId = button.getAttribute('data-slug-input');
    var titleId = button.getAttribute('data-title-input');
    var repoId = button.getAttribute('data-repo-input');
    var slug = (slugId && document.getElementById(slugId) ? document.getElementById(slugId).value.trim() : button.getAttribute('data-slug')) || 'skill';
    var title = (titleId && document.getElementById(titleId) ? document.getElementById(titleId).value.trim() : button.getAttribute('data-title')) || slug;
    var repo = (repoId && document.getElementById(repoId) ? document.getElementById(repoId).value.trim() : button.getAttribute('data-repo')) || '';
    var safe = slug.replace(/[^a-z0-9]+/gi, '_');
    var template = lang === 'python'
      ? 'from mcp.server.fastmcp import FastMCP\n\nmcp = FastMCP("' + slug + '")\n\n@mcp.tool()\ndef run_' + safe + '(input: str) -> str:\n    """Run the ' + title + ' skill workflow."""\n    return "Replace with skill logic. Source: ' + repo + '"\n\nif __name__ == "__main__":\n    mcp.run()\n'
      : 'import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";\nimport { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";\nimport { z } from "zod";\n\nconst server = new McpServer({ name: "' + slug + '", version: "0.1.0" });\n\nserver.tool("run_' + safe + '", { input: z.string() }, async ({ input }) => ({ content: [{ type: "text", text: `Run ${input} with the ' + title + ' workflow.` }] }));\n\nawait server.connect(new StdioServerTransport());\n';
    if (YOP.download) { YOP.download(slug + '-mcp.' + (lang === 'python' ? 'py' : 'js'), template); }
    if (YOP.beep) { YOP.beep('success'); }
  });

  /* Diff */
  on(document.getElementById('diff-run'), 'click', function () {
    var a = document.getElementById('diff-a').value || '';
    var b = document.getElementById('diff-b').value || '';
    var result = document.getElementById('diff-result');
    if (!result) { return; }
    if (typeof window.Diff === 'undefined') {
      result.textContent = 'diff library failed to load. Check network.';
      return;
    }
    var diff = window.Diff.diffLines(a, b);
    result.innerHTML = diff.map(function (part) {
      var cls = part.added ? 'diff-add' : (part.removed ? 'diff-del' : 'diff-same');
      var prefix = part.added ? '+ ' : (part.removed ? '- ' : '  ');
      return '<div class="' + cls + '">' + prefix + escapeHtml(part.value).replace(/\n/g, '\n' + prefix).replace(/\n $/, '') + '</div>';
    }).join('');
  });

  /* README to SKILL */
  on(document.getElementById('readme-run'), 'click', function () {
    var input = document.getElementById('readme-input').value || '';
    var result = document.getElementById('readme-result');
    if (!result) { return; }
    var title = (input.match(/^#\s+(.+)$/m) || [])[1] || 'New Skill';
    var out = '---\nname: ' + title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'') + '\ndescription: ' + title + '. See README for details.\nlicense: MIT\n---\n\n# ' + title + '\n\n## Goal\n\nDescribe the purpose of this skill.\n\n## Usage\n\n```\nUse this skill to ...\n```\n\n## Notes\n\nPaste key instructions from the README here.\n';
    result.textContent = out;
  });
  on(document.getElementById('readme-copy'), 'click', function () {
    var result = document.getElementById('readme-result');
    if (result && result.textContent && YOP.copyAndFlash) { YOP.copyAndFlash(this, result.textContent); }
  });

  /* Auditor */
  var drop = document.getElementById('folder-drop');
  var input = document.getElementById('folder-input');
  var auditor = document.getElementById('auditor-result');
  function scanFile(file) {
    return file.text().then(function (text) {
      var issues = [];
      if (file.name === 'SKILL.md' || file.name.endsWith('.md')) {
        if (!/^---/.test(text)) { issues.push('No front matter'); }
        if (/allowed-tools/i.test(text)) {
          if (/(curl|wget|rm -rf|sudo)/i.test(text)) { issues.push('Possible risky command in file'); }
        }
      }
      return { path: file.webkitRelativePath || file.name, size: file.size, issues: issues };
    });
  }
  function handleFiles(files) {
    if (!auditor) { return; }
    auditor.innerHTML = '<span class="profiler-output">Scanning...</span>';
    Promise.all(Array.prototype.slice.call(files).map(scanFile)).then(function (results) {
      auditor.innerHTML = results.map(function (r) {
        return '<div><strong>' + escapeHtml(r.path) + '</strong> (' + Math.round(r.size/1024) + 'KB)' + (r.issues.length ? ' — <span class="bad">' + r.issues.join(', ') + '</span>' : ' — <span class="ok">ok</span>') + '</div>';
      }).join('') || '<span class="profiler-output">No files found.</span>';
    });
  }
  if (drop) {
    on(drop, 'click', function () { if (input) { input.click(); } });
    on(drop, 'dragover', function (event) { event.preventDefault(); drop.classList.add('is-over'); });
    on(drop, 'dragleave', function () { drop.classList.remove('is-over'); });
    on(drop, 'drop', function (event) {
      event.preventDefault(); drop.classList.remove('is-over');
      if (event.dataTransfer.files) { handleFiles(event.dataTransfer.files); }
    });
  }
  if (input) {
    on(input, 'change', function () { if (input.files) { handleFiles(input.files); } });
  }

  /* Cost calculator */
  on(document.getElementById('cost-calc'), 'click', function () {
    var inp = Number(document.getElementById('cost-input').value) || 0;
    var out = Number(document.getElementById('cost-output').value) || 0;
    var provider = document.getElementById('cost-provider').value;
    var model = document.getElementById('cost-model').value;
    var rates = { cheap: { in: 0.0000001, out: 0.0000004 }, mid: { in: 0.000001, out: 0.000003 }, pro: { in: 0.000003, out: 0.000015 } };
    var r = rates[model] || rates.mid;
    var cost = inp * r.in + out * r.out;
    var result = document.getElementById('cost-result');
    if (result) { result.innerHTML = '<strong>$' + cost.toFixed(6) + '</strong> (example rates for ' + provider + ' / ' + model + '). Multiply by requests for a monthly estimate.'; }
  });

  /* Context gauge */
  var ctxInput = document.getElementById('ctx-input');
  if (ctxInput) {
    on(ctxInput, 'input', function () {
      var text = ctxInput.value || '';
      var tokens = Math.ceil(text.length / 4);
      var limit = 128000;
      var pct = Math.min(100, (tokens / limit) * 100);
      var fill = document.querySelector('[data-gauge-fill]');
      var label = document.querySelector('[data-gauge-label]');
      if (fill) { fill.style.width = pct.toFixed(1) + '%'; }
      if (label) { label.textContent = pct.toFixed(pct < 1 ? 2 : 1) + '% of 128k'; }
      each(document.querySelectorAll('[data-metric="tokens"]'), function (n) { n.textContent = tokens.toLocaleString(); });
      each(document.querySelectorAll('[data-metric="words"]'), function (n) { n.textContent = text.trim() ? text.trim().split(/\s+/).length.toLocaleString() : '0'; });
      each(document.querySelectorAll('[data-metric="chars"]'), function (n) { n.textContent = text.length.toLocaleString(); });
      each(document.querySelectorAll('[data-metric="bytes"]'), function (n) { n.textContent = (new Blob([text]).size < 1024) ? (new Blob([text]).size + ' B') : (new Blob([text]).size/1024).toFixed(1) + ' KB'; });
    });
  }

  /* Profiler */
  on(document.getElementById('prof-run'), 'click', function () {
    var result = document.getElementById('prof-result');
    if (!result) { return; }
    var start = performance.now();
    var items = document.querySelectorAll('[data-filter-item], [data-skill-card]').length;
    var images = document.images.length;
    var scripts = document.scripts.length;
    var styles = document.styleSheets.length;
    var elapsed = (performance.now() - start).toFixed(2);
    var nav = performance.getEntriesByType ? performance.getEntriesByType('navigation')[0] : null;
    result.textContent = 'DOM query time: ' + elapsed + 'ms\nFilterable items: ' + items + '\nImages: ' + images + '\nScripts: ' + scripts + '\nStylesheets: ' + styles + (nav ? '\nDOMContentLoaded: ' + Math.round(nav.domContentLoadedEventEnd) + 'ms\nLoad: ' + Math.round(nav.loadEventEnd) + 'ms' : '');
  });

  /* WebLLM playground (best effort) */
  var playLoad = document.getElementById('play-load');
  var playRun = document.getElementById('play-run');
  var playStatus = document.getElementById('play-status');
  var playResult = document.getElementById('play-result');
  var engine = null;
  on(playLoad, 'click', async function () {
    if (typeof window.webllm === 'undefined') {
      if (playStatus) { playStatus.textContent = 'WebLLM not loaded or WebGPU unavailable.'; }
      return;
    }
    var model = document.getElementById('play-model').value;
    if (playStatus) { playStatus.textContent = 'Loading ' + model + '...'; }
    try {
      engine = await window.webllm.CreateMLCEngine(model, { initProgressCallback: function (p) { if (playStatus) { playStatus.textContent = p.text || Math.round(p.progress*100) + '%'; } } });
      if (playStatus) { playStatus.textContent = 'Model ready.'; }
    } catch (error) {
      if (playStatus) { playStatus.textContent = 'Failed: ' + error.message; }
    }
  });
  on(playRun, 'click', async function () {
    if (!engine) {
      if (playStatus) { playStatus.textContent = 'Load a model first.'; }
      return;
    }
    var skill = document.getElementById('play-skill').value || '';
    var query = document.getElementById('play-query').value || '';
    if (playResult) { playResult.textContent = 'Thinking...'; }
    try {
      var messages = [
        { role: 'system', content: 'You are following the SKILL.md instructions exactly.\n\n' + skill },
        { role: 'user', content: query }
      ];
      var reply = await engine.chat.completions.create({ messages: messages, temperature: 0.4, max_tokens: 512 });
      if (playResult) { playResult.textContent = reply.choices[0].message.content; }
      if (playStatus) { playStatus.textContent = 'Done.'; }
    } catch (error) {
      if (playResult) { playResult.textContent = 'Error: ' + error.message; }
    }
  });
})();
