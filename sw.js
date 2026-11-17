/* CORE Club service worker: works offline, updates in the background */
const CACHE = "coreclub-v7";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // App files: serve from cache at once, refresh the cache in the background
  if (url.origin === location.origin) {
    e.respondWith(caches.open(CACHE).then(async c => {
      const cached = await c.match(req, { ignoreSearch: true });
      const fresh = fetch(req).then(r => { if (r && r.ok) c.put(req, r.clone()); return r; }).catch(() => cached);
      return cached || fresh;
    }));
    return;
  }
  // Google Fonts: cache after first use
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.open(CACHE).then(async c => {
      const cached = await c.match(req);
      if (cached) return cached;
      const r = await fetch(req); if (r && r.ok) c.put(req, r.clone()); return r;
    }));
  }
});
