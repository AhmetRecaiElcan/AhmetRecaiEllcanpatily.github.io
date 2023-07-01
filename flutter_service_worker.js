'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8f778937d688f5c22da47cdfb4067941",
"assets/AssetManifest.json": "79ef91fa79a4faafbaed58489dcbf466",
"assets/assets/icons/icon.png": "d5e3379216e17620a939fd40ced838c3",
"assets/assets/images/fallow_instagram.png": "0c28ade83d02a22ff3a22351bd9851d5",
"assets/assets/images/help_me.png": "501f452acf8c10f439cf387292444159",
"assets/assets/images/login_background_image.png": "71337e0ac79eee615ecec38c1db1e935",
"assets/assets/images/patily_form.png": "86c8713907d1d8547e84577d3a8e9189",
"assets/assets/images/patily_sahiplen_image.png": "853795ab9cf2bb9b5f3dac5cc4056b87",
"assets/assets/images/pet_cook_image.png": "b9c70327b8b6749d177679ef2790cfd1",
"assets/assets/jsons/il-ilce.json": "2af2faaf4ca4dce39c51c0c2b4e52d58",
"assets/assets/jsons/iller.json": "caecc9aaa86e1dc342219e55abdb7242",
"assets/assets/jsons/lang/tr-TR.json": "92404a6a101b78241cc635f6eae7c56f",
"assets/assets/svg/bird.svg": "989709ea9f00a5dc628ed19e2dd8061d",
"assets/assets/svg/cat.svg": "79eea867a985231c5607455020249548",
"assets/assets/svg/chat.svg": "867aa5cfba76bb2f4ca953ead13bdc5a",
"assets/assets/svg/dog.svg": "8e6fb5c12edc4225493208b6669c707c",
"assets/assets/svg/eye_close.svg": "1ac91767a9c7eb4e8916398d000513c6",
"assets/assets/svg/eye_open.svg": "b3c76900e4638f49003cc1cb9e5b1030",
"assets/assets/svg/filter.svg": "5ff63e1c3fa311f4b1b732d2c692f4ed",
"assets/assets/svg/fish.svg": "fa776dc73798822b2256d52fcc6868bc",
"assets/assets/svg/home.svg": "d3e3c82cfee80fee014ec1bf0cf85560",
"assets/assets/svg/home_outline.svg": "d349278e5d2c1742d233a1ec8ac57bc2",
"assets/assets/svg/language.svg": "8b2dbc163960f52c0f852e1566bc5fff",
"assets/assets/svg/onboarding_one.svg": "b830243d7bdbac3fbeb6d774857852e3",
"assets/assets/svg/onboarding_three.svg": "5e4081e90bbebd9300bb377a08b51f00",
"assets/assets/svg/onboarding_two.svg": "807efe95849b28e0f48d6f0c98b45e16",
"assets/assets/svg/password.svg": "acb0d540687bb4de59f72b52a4ca0ad4",
"assets/assets/svg/plus.svg": "21b5724a569bed22e52b09c68a76202e",
"assets/assets/svg/profile.svg": "c0733cd107dd60997bf82dfa86c3b29d",
"assets/assets/svg/rabbit.svg": "c88eef045e45a7a64769a0dd8ed610ec",
"assets/assets/svg/send.svg": "a7181dc7e7ded6cc0c88f0be5b87eefb",
"assets/assets/svg/settings.svg": "d3de27d90bc9b0863b5c08731da4e2bc",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "c04fc6dac11c7ac9afb770867030db60",
"assets/NOTICES": "28cdb8e0105fdc133aa23ae43db7fb3b",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "7d8d4306237845212974af924b1ab33d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c2281cf0a22c29917ebf755ba9d11e50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "8e0542a7d7eec9dbada78c8605db3ccd",
"assets/packages/kartal/assets/placeholder.json": "fdbf3ef28e924d76fe7951860de81195",
"assets/packages/kartal/assets/placeholder_false.json": "29bd0e7ec0fa4d4a0f36d58ed0aa5cd4",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "85be4d4076a589c54ebccab30ad5d249",
"/": "85be4d4076a589c54ebccab30ad5d249",
"main.dart.js": "d4afb61c0e1a76d7c88b405fa96bc6d3",
"manifest.json": "05a1360837160653297c8f1a2f66310a",
"splash/img/dark-1x.png": "277171354b3165795d51c18cf551233e",
"splash/img/dark-2x.png": "e8651793a0190de8dc0af937c21c1560",
"splash/img/dark-3x.png": "db3b5584e995f0c075bd15ba2d9218f8",
"splash/img/dark-4x.png": "74a2bdc38bb0abe10efe225121402987",
"splash/img/light-1x.png": "277171354b3165795d51c18cf551233e",
"splash/img/light-2x.png": "e8651793a0190de8dc0af937c21c1560",
"splash/img/light-3x.png": "db3b5584e995f0c075bd15ba2d9218f8",
"splash/img/light-4x.png": "74a2bdc38bb0abe10efe225121402987",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "0547575a914b641f91314bc1c5a0eeee",
"version.json": "38c512e3fc487957478c574fb4d48e0c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
