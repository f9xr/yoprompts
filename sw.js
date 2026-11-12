---
layout: null
permalink: /sw.js
---
/* Cache name carries the build timestamp, so a deploy retires the previous
   cache instead of serving last week's CSS and JS from it. */
const CACHE_NAME = 'yoprompts-{{ site.time | date: "%Y%m%d%H%M" }}';
const PRECACHE = [
  './',
  './assets/css/main.css',
  './assets/css/enhancements.css',
  './assets/js/clipboard.js',
  './assets/js/main.js',
  './assets/js/enhancements.js',
  './assets/js/lab.js'
];

const ASSET = /\.(css|js|svg|webp|png|jpg|woff2?)$/i;

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(PRECACHE.map(function (url) {
        return new Request(url, { cache: 'reload' });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
        if (key !== CACHE_NAME) { return caches.delete(key); }
        return null;
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* Navigation: network first, so a new deploy is picked up on the next visit,
   with the cached copy only as an offline fallback. */
function networkFirst(request) {
  return fetch(request).then(function (response) {
    var copy = response.clone();
    caches.open(CACHE_NAME).then(function (cache) { cache.put(request, copy); });
    return response;
  }).catch(function () {
    return caches.match(request).then(function (cached) {
      return cached || caches.match('./');
    });
  });
}

/* Assets: serve the cache immediately, then refresh it in the background. */
function staleWhileRevalidate(request) {
  return caches.match(request).then(function (cached) {
    var network = fetch(request).then(function (response) {
      var copy = response.clone();
      caches.open(CACHE_NAME).then(function (cache) { cache.put(request, copy); });
      return response;
    }).catch(function () { return cached; });

    return cached || network;
  });
}

self.addEventListener('fetch', function (event) {
  var request = event.request;
  if (request.method !== 'GET') { return; }

  var url = new URL(request.url);
  if (url.origin !== self.location.origin) { return; }

  if (request.mode === 'navigate' || (request.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(networkFirst(request));
    return;
  }

  if (ASSET.test(url.pathname)) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  event.respondWith(
    caches.match(request).then(function (cached) {
      return cached || fetch(request).catch(function () { return cached; });
    })
  );
});
