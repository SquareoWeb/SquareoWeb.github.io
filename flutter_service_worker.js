'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4b35cfc6713f2fab100b1657fd9be472",
"assets/AssetManifest.bin.json": "0bbc869dcc1a465197f0505da66607bf",
"assets/AssetManifest.json": "c3e6e8741fa412ab130a9c506aa6e731",
"assets/assets/fonts/Abel-Regular.ttf": "1052d6ca3993ae24a932304560a4c8b4",
"assets/assets/fonts/CustomIcons.ttf": "6c1ed97dc7f7b25e63a0b6febcfc10f7",
"assets/assets/fonts/PlaywritePL-Regular.ttf": "921db4cee45bbe69e0e51ebdf1cbf30b",
"assets/assets/fonts/Queensides-Regular.ttf": "1354805b99f7ae4449ec5c2020cd6d45",
"assets/assets/icon/getx.png": "cb152befc8070517aeb4378fa585c2e0",
"assets/assets/icon/hive.png": "e7b2ff5773a10b36a5f771c39e813c32",
"assets/assets/icon/Squareo%2520no%2520name.png": "12b26c7e4bffee8e1c1ff61bb8ab5ae6",
"assets/assets/icon/Squareo.png": "008f6d9fa1c29aa73c937463ecb7015c",
"assets/assets/icon/squareo_bg.png": "8723a31f515d228ec8d8b8a4ca415b9e",
"assets/assets/icon/squareo_icon.png": "ba433aabf6b21dfed962c3fe2317d03e",
"assets/assets/icon/squareo_profile.png": "4d50f3ed0e5908e757d1b703e27ec8f9",
"assets/assets/icon/squareo_profile_2.png": "4d50f3ed0e5908e757d1b703e27ec8f9",
"assets/assets/icon/Squareo_video.gif": "b4f7a656108f6bf31fcef24d1769740d",
"assets/assets/images/a_logo.png": "1a838b953d5400603cfb1ea1fef0b427",
"assets/assets/images/circle_1.png": "4131f9487f960ba6fa9d2b1906d63595",
"assets/assets/images/circle_2.png": "7e9cbf5ff2947f2061ed0b34749bbeb6",
"assets/assets/images/circle_3.png": "c1df15c6795cdb51a0e4a73fd2268548",
"assets/assets/images/c_logo.png": "19061e98c28e18e89d979653a1de2f36",
"assets/assets/images/move1.PNG": "afa8542e104334d09ebc8d9e4ee9cee2",
"assets/assets/images/move2.PNG": "651a18f7acbe59e721f3cd2902db3113",
"assets/assets/images/pfp12313.PNG": "3dd843d0d5ef30f55689f1fab966f6db",
"assets/assets/images/w_logo.png": "c762ac5c6b38f79c377db7f773dbc62e",
"assets/assets/sounds/a+.mp3": "604373c9fe8af4fa0ca994d7dd00e159",
"assets/assets/sounds/buy.mp3": "3a02f6cbbeaf186c747792edf21c4ce1",
"assets/assets/sounds/count.mp3": "6cd16d001a38f787452c752d7247b26d",
"assets/assets/sounds/count_end.mp3": "a55c3c8a72359446cf2f6a7672e7535f",
"assets/assets/sounds/drag.mp3": "9e19020579913c8c2906541f4692d98e",
"assets/assets/sounds/legendary.mp3": "a9e8e9f7e4f04a7cbdd785daeccc4948",
"assets/assets/sounds/water.mp3": "4919bc179389b4079c79f081e996a80d",
"assets/assets/sounds/win.mp3": "9752a11cad559126b17d603dbb30fbf6",
"assets/FontManifest.json": "9f60732a788d958259067f86f9d97ec9",
"assets/fonts/MaterialIcons-Regular.otf": "5a5f67c00ede1bc3c281b9f264d01495",
"assets/NOTICES": "20bc4304d67cc46a7eb48a6d69cfb96d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/mesh_gradient/shaders/animated_mesh_gradient.frag": "1890be5ac6e1b673019ee2604c2d59c5",
"assets/packages/mesh_gradient/shaders/point_mesh_gradient.frag": "6721e3c3c3b65cb49c2709c828288ffd",
"assets/packages/typicons_flutter/fonts/typicons.ttf": "71dfc759864e862022c573e696c81a5e",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "07c19b69fa5f53224712e8471c00344d",
"canvaskit/canvaskit.wasm": "f312edac4fb4c74852dc1a4f069ab100",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "100d192729121969872b80009e47a5b7",
"canvaskit/chromium/canvaskit.wasm": "f9074e52c7e9c770f1130c6ed9e2677f",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "ab140650f4d351b74f4e6bca3e8dd0e0",
"canvaskit/skwasm.wasm": "7fe5c39ff8466de52fbb0c66473abbe3",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ae6d857aa41a292aef79ba3881668535",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "15bbf6f5abb52ee762f95669605a03c2",
"/": "15bbf6f5abb52ee762f95669605a03c2",
"main.dart.js": "e180248ba58d5aca81eb02c817717965",
"manifest.json": "6ff2f3c79e70560aec4888763aa7f736",
"version.json": "a972a81cbc299e09c3357decae6d957d"};
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
