const CACHE_NAME = "agtema-khodam-v1";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  // التطبيق الأساسي يحتاج الإنترنت لأنه يعتمد على Google Apps Script
});
