'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "835b1023dd5f0f7882b60a7a62f781b4",
"index.html": "2fd15cbedcf83f7369e23e845ab2597c",
"/": "2fd15cbedcf83f7369e23e845ab2597c",
"main.dart.js": "971cfd8c49ec6e32080c167bd0b14d01",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon2.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.png": "ff8d7cf23fa50f0906339d40db9234fb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f4f5948a40b504304627e11a80b1d202",
"assets/AssetManifest.json": "17f1d818887293911f7a26a44ca795c7",
"assets/NOTICES": "b5e985f3a0fb2d7d363672af2f5e2e73",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/partybackground.jpeg": "a8ee10d6ac4ce72e525bd73319297ba1",
"assets/assets/images/logoResized1.png": "226743ac2880ff83b347242668baf254",
"assets/assets/images/logoResized2.png": "3e77d809fde3a3e09e62c821cc92307c",
"assets/assets/images/logoResized3.png": "ee3adb82a43be5d286dac713fe46810b",
"assets/assets/images/usheringServices.jpeg": "c31a179f32d0a4956fb1af85bbe8168a",
"assets/assets/images/drinksVendor.jpeg": "4b883a9bb1ee7a7a8e1eac990052c8eb",
"assets/assets/images/payment_method.png": "634244c4910bf2752e51cdc310b76d90",
"assets/assets/images/desktop_create_event.png": "30a61250cef267816841d0956d8e5bcd",
"assets/assets/images/view2.png": "5acade194d4ff737466219867eeb4128",
"assets/assets/images/vacantAdvertSpace.jpeg": "06abc97928ee817bcaa2bfe531c255ae",
"assets/assets/images/view1.png": "1dfcd578be1962f3b1ed4805836c07cb",
"assets/assets/images/appStore.png": "096c304afd5f5d079b3ec6fe2022910e",
"assets/assets/images/background.png": "e37a256a04768e83dda01e1204ed6ff7",
"assets/assets/images/placeholder.png": "007e964402fcfefeffbcb175f0c29f83",
"assets/assets/images/venue.jpeg": "756237b21c1c0a4f12dc398b38ceb0b4",
"assets/assets/images/logoResized.png": "ff8d7cf23fa50f0906339d40db9234fb",
"assets/assets/images/party.jpeg": "bb9b8b38e4ae8c9406d9d00dd1a22785",
"assets/assets/images/5.jpeg": "497128b74f2d96b5b18e293bf823dca4",
"assets/assets/images/eventPlanners.jpeg": "9d2d15c25a977cd924ef4cd66676c29b",
"assets/assets/images/2.jpeg": "a8436b4af7b1af2755c5eaa1038d5be9",
"assets/assets/images/4.png": "cba883133af3b1b28e50653c7a631323",
"assets/assets/images/catering.png": "674ec3fd9f2f8c7b8ac88c19e01c275f",
"assets/assets/images/playStore.png": "5f580544ef71c01d2d275cb3151b9e5c",
"assets/assets/images/5.png": "f1f2f88fc0b252103a0370ba79f1c6b0",
"assets/assets/images/frontLogo.png": "fa05f515694cc0109260c6260b6f9c16",
"assets/assets/images/cleaningServices.jpeg": "85a3a35cf095efc10233ed185409b955",
"assets/assets/images/payment_empty.png": "1972859468aabf4d5b4267d92d5729a9",
"assets/assets/images/no_record_found.png": "584a6589b91bd8230d4ef368c96f1dae",
"assets/assets/images/6.png": "f02606b8a0a4e763886c0bfa084df041",
"assets/assets/images/dj.jpeg": "f109dd8d6efcf204f791fd1abf43c3a5",
"assets/assets/images/canopiesAndChairs.jpeg": "2d7c946b717467d3f120915c4e42d0e7",
"assets/assets/images/3.png": "591140109d8b1976381b90d224d7bcee",
"assets/assets/images/1.png": "527294dab9dd02de9918bc82bf24a2ec",
"assets/assets/images/makeup.jpeg": "31c0251af6f08397f1fe6afbe7f5ffa2",
"assets/assets/images/securityServices.jpeg": "70c64352ea86a57951791f25d9b4c60f",
"assets/assets/images/partybackground.gif": "60efab7b73f36dad2c303cf298a83e50",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
