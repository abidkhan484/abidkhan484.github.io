'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/assets/agency-fb.ttf": "2b75f26156210fc0b82522467ad1bd5a",
"/assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"/assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"/assets/assets/avatar.jpg": "f01a69c90bfcf4b0a38f31864954a736",
"/assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"/assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"/assets/FontManifest.json": "35b57ee109744f48ad931b77909496ae",
"/assets/LICENSE": "a18d15f5b24ab8a860412c66b34faf51",
"/assets/AssetManifest.json": "244abb84435d5ae325ee0fa0a618e8e2",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/main.dart.js": "62bc09210e024a4f658cf5adc6f4bab1",
"/index.html": "12cf346205ebe605c4ecd9671b194c6c"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
