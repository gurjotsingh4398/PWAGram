self.addEventListener("install", event => {
  console.log("[service worker] install sw...", event);
});

self.addEventListener("activate", event => {
  console.log("[service worker] activating sw...", event);
  return self.clients.claim();
});

self.addEventListener("fetch", event => {
  console.log("[service worker] fetching...");
  event.respondWith(fetch(event.request));
});
