'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3ffd97128aa86ee8fa117f1027d8949b",
"assets/AssetManifest.bin.json": "4789dc6076a47bc392338f58c62945f9",
"assets/AssetManifest.json": "c894c52ac86c1bdb0cae023a6f8064bf",
"assets/assets/205_airfilter1.jpeg": "4d7a37bc4bd019ba30b4f012352bc614",
"assets/assets/205_brakedisc1.jpg": "144627549b53532807dd81f1b3d9606e",
"assets/assets/205_sidemirror1.jpeg": "df33147b2c690059404bc07330934250",
"assets/assets/205_windshield1.png": "8e6711929f78ae04cb641a992927f1d9",
"assets/assets/corolla.png": "def44b8d39b68936a04a275b48b17fe3",
"assets/assets/corolla_battery1.jpg": "ff256eaba13a49cc653f1960440c5cfe",
"assets/assets/corolla_headlight1.jpg": "495fe8e2e8d4a5d6df3a6717277cb7ca",
"assets/assets/corolla_rearbumper1.jpeg": "fe41e4b84e0e84e7fc32cd34a2ac4ee2",
"assets/assets/corolla_sparkplugs1.jpeg": "4521e13efe89b81c3576825b6cd65f8a",
"assets/assets/delivery-truck.png": "64e2ef97ecc30820a883db6a195bd4e0",
"assets/assets/fonts/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/Montserrat-BoldItalic.ttf": "a49032b6a945b021303f16b664f87e6c",
"assets/assets/fonts/Montserrat-ExtraBold.ttf": "9e07cac927a9b4d955e2138bf6136d6a",
"assets/assets/fonts/Montserrat-ExtraBoldItalic.ttf": "8a4a6844448e210672d54f8b32932ee9",
"assets/assets/fonts/Montserrat-ExtraLight.ttf": "a7fe50578d9aa3966c925cb9722db03a",
"assets/assets/fonts/Montserrat-ExtraLightItalic.ttf": "9c3e2f21cc8fba26dc3da67e89a9365d",
"assets/assets/fonts/Montserrat-Light.ttf": "94fbe93542f684134cad1d775947ca92",
"assets/assets/fonts/Montserrat-LightItalic.ttf": "c54486c33610a1fca147afc18af3034f",
"assets/assets/fonts/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/Montserrat-MediumItalic.ttf": "2ed625fc9f039d801a5aab9b6f9cd8ef",
"assets/assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/Montserrat-Thin.ttf": "b3638b16904211d1d24d04ce53810c4d",
"assets/assets/fonts/Montserrat-ThinItalic.ttf": "ff9c45e92d16324b8964447d12d1f458",
"assets/assets/ford.png": "fce2f68cc3cb245b94bdcdbdfb8cc8e5",
"assets/assets/hundai.png": "7f8206b5e48df49e3152a59ebbcd8291",
"assets/assets/lexus.png": "613ff4aa0ad52a0d6ab09342d3b6229e",
"assets/assets/logo.jpeg": "ba962f631bc54ca7fba1c6dd6f9bc90f",
"assets/assets/mustang.jpeg": "8a403a6ae519295eebf4c5cdea37e22c",
"assets/assets/mustang_brakepads1.jpeg": "8b59f74490365f9ab86e50656f31da04",
"assets/assets/mustang_radiator1.jpg": "a6945f9e1618e89710ba5f194f1ef1ef",
"assets/assets/mustang_suspension1.jpeg": "c5ebbd80684fb1166b314fb189a84b99",
"assets/assets/mustang_taillight1.jpg": "2c3230cfaa9fa0779d0197a3bbf2aeca",
"assets/assets/peugeot.png": "4689eddd453b68a62164554b20b4e2aa",
"assets/assets/peugeot_205.jpeg": "965c3bb3e478cf4006bf14cb2c890966",
"assets/assets/toyota.png": "f5d65a81827456fb3f653c35701ce072",
"assets/assets/volkswagen.png": "1051c9bc93e8ceedb1b4e07f838cedec",
"assets/assets/warehouse.png": "be16d1ffb3658e5b44b65916d3137bee",
"assets/FontManifest.json": "7ce4ae2177c31bd8cb7e54704b05e4f1",
"assets/fonts/MaterialIcons-Regular.otf": "e2e835384e8f4480d6207bbe57267146",
"assets/NOTICES": "846f618398b169730587e90391d6031c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "32cc31c7f950543ad75e035fcaeb2892",
"canvaskit/canvaskit.js.symbols": "e75ff65b124a21ffeb54378f89d5ea42",
"canvaskit/canvaskit.wasm": "b480222d639991228c2aea82562d9f5f",
"canvaskit/chromium/canvaskit.js": "6a5bd08897043608cb8858ce71bcdd8a",
"canvaskit/chromium/canvaskit.js.symbols": "449da0fffb4c99831e550398f07acb8e",
"canvaskit/chromium/canvaskit.wasm": "ea6fca9abed67fa27c7cd08c581cfdb9",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "76041d494fd28ac539725448add02793",
"canvaskit/skwasm.wasm": "af752eaafd096775f6c324d431283563",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "07f9e8326fe770f5526eef3c551ed91f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a92e817726f56479387534abfbb4d984",
"/": "a92e817726f56479387534abfbb4d984",
"main.dart.js": "38313d3cf9a7592a29fa6937acc2554a",
"manifest.json": "337fbd5671357c8c166d74e98a8397da",
"version.json": "882561a23e46efb349f16f4735e1e14a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
