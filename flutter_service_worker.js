'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "af5b2e90a25822765646b0f70afb1acd",
"assets/AssetManifest.smcbin": "15eee8daac0868b5f1e8084574290661",
"assets/assets/big_image/app_update_bg.png": "7c09ef7a5e38cba2103be90ca986e141",
"assets/assets/big_image/face_id_bg.png": "2454b64833e52282cadf4259f49c317e",
"assets/assets/big_image/secure_remind.png": "6a21837edfc147df8f7a619211a5b236",
"assets/assets/home_images/home_logo.png": "e11eee9dd2e22dba95598f7914d5fd07",
"assets/assets/icons/all_network.png": "129bb8ada3a1e09bf70b1236a9a25aa0",
"assets/assets/icons/arrow-bottom.png": "e616ce799a253d75350a3070630625de",
"assets/assets/icons/arrow_bottom_black.png": "98d61a1ffe30af1240522811ee601a80",
"assets/assets/icons/arrow_bottom_fill.png": "7edd40e25b9145336d5e4523ef60d40d",
"assets/assets/icons/arrow_down_gray.png": "7e3a8393fd7dd3804705a84c5d4d4ba0",
"assets/assets/icons/arrow_right_fill.png": "8e87cbc0a975454c0ff569f7446f683c",
"assets/assets/icons/big_notice.png": "75b3ed5117b61e4699d3cd14690e7622",
"assets/assets/icons/broswer.png": "b230a3f79cab689eea846461d440051b",
"assets/assets/icons/cancel_grey.png": "55117b6baa2c2f68e17f4a81b43debd0",
"assets/assets/icons/check_primary.png": "941e83c42797b85d85d0ce0d7329f707",
"assets/assets/icons/close.png": "cd7b26d9d0afe434a142a43cd4dfba92",
"assets/assets/icons/close_eye.png": "1bb6715efe2b55a22132ebccdc37151e",
"assets/assets/icons/complete.png": "60a58fbd950f288b37b8df9918eb822c",
"assets/assets/icons/copy-t.png": "abd6d555be19cf1f64c70fc2396dd232",
"assets/assets/icons/earth.png": "de1d09880e9d728d53c7475edddb6705",
"assets/assets/icons/exchange.png": "2e89460cc77800bdaac4dd25a11a027b",
"assets/assets/icons/exchange_primary.png": "a42f4353239e984db16e11370c1ffd32",
"assets/assets/icons/eye_not_allow.png": "69334846944b02915a4ecf14fcb67383",
"assets/assets/icons/forward.png": "49ea7ca893f2abfdaaa80de01eab3d6d",
"assets/assets/icons/important.png": "a59661833b18836485d32bd44e27b070",
"assets/assets/icons/input_search.png": "5e291eea0f6e6e487bc50f54cb4d00b7",
"assets/assets/icons/message.png": "352a4e90c55aa593b3a1701162d57699",
"assets/assets/icons/nav-home-active.png": "03fb13be174d1e62cb68480d876c71ee",
"assets/assets/icons/nav-market-u.png": "f2132677ce38baadb8d502883771d7b0",
"assets/assets/icons/nav-my.png": "9976a7d63f4b70617accd36e80263f54",
"assets/assets/icons/nav-transfer-active.png": "5536084a240281562015e8f0a1ab4d2a",
"assets/assets/icons/nav-transfer-u.png": "4b3f7a4ae3fed31d1ab2dfd316ac6da3",
"assets/assets/icons/nav_home.png": "c8c85335d876786feda223b01deba36d",
"assets/assets/icons/nav_market_active.png": "dad5d011d54c177d792923614483cec6",
"assets/assets/icons/nav_my_active.png": "3ded03885c615bf571db21344b20f667",
"assets/assets/icons/nav_transfer-active.png": "76358aa907250cd8b9ee77aad4be195b",
"assets/assets/icons/nav_transfer_active.png": "5536084a240281562015e8f0a1ab4d2a",
"assets/assets/icons/primary_arrow_right.png": "d8be04a7b3636e982d20ecd80d9c9a18",
"assets/assets/icons/receive.png": "17cbe0ece71fdd48cc24da10da5ff3cb",
"assets/assets/icons/receive_primary.png": "6df55f549178eb509011a67c7f22a716",
"assets/assets/icons/refresh.png": "22b55c7eee3df2fb56baae72a16aeff6",
"assets/assets/icons/risk_notice.png": "db648909b06b91be94b66e4969dd52ae",
"assets/assets/icons/round_close.png": "f294f78b601db424352539db4f6e874e",
"assets/assets/icons/round_num1.png": "877f246e23799fe04e3a8c796f34d301",
"assets/assets/icons/round_num2.png": "328d97b97ea78ad997d7af73e38e01e9",
"assets/assets/icons/scanner-text.png": "b94f3f125e4be4a397ef44c7764bfb4d",
"assets/assets/icons/scanner.png": "bb5bc95c35b8e18e9a4e3e87bb94789c",
"assets/assets/icons/search.png": "0db085e8b3e8f3dee33ac6cd90da5768",
"assets/assets/icons/send.png": "dd257dcd4d76b6bcdf8189c377f1b87b",
"assets/assets/icons/send_primary.png": "03677d0e807679e1b8262c0a6d841fa7",
"assets/assets/icons/share.png": "0cf2aab805a7f16aea5902fdac805e79",
"assets/assets/icons/switch_grey.png": "3d5a8a6702279db3efce8c2c138cf4b7",
"assets/assets/icons/switch_icon.png": "c0415176ecdaaf13b3a752155bc55b42",
"assets/assets/icons/switch_op.png": "348bc1f4599ae3bd30396f6b2cc3cd4f",
"assets/assets/icons/transfer_record.png": "9e4a2d3be699d09816a8dff477ae1bfd",
"assets/assets/icons/wallet.png": "9040432772de200d39e0cf047b6e36af",
"assets/assets/icons/wallet_add.png": "81f2dcc40a817c37f80b19a6f287ec6e",
"assets/assets/icons/wallet_backup.png": "11e21e79c361328eeeec6bb7f581b480",
"assets/assets/icons/wallet_edit.png": "bafa51667619f96db1baf8ec165da8da",
"assets/assets/icons/wallet_icon.png": "70c2304451d136deabc9550b2570ab84",
"assets/assets/icons/wallet_secure.png": "47ce885c4c2db4ff8eb43e6cc4dfa1bf",
"assets/assets/icons/warn_important.png": "3b1b3940fac09db39358a212281e6b5d",
"assets/assets/icons/white_important.png": "2ed17b7841e8d90743833a53fa62081a",
"assets/assets/icons/yellow_star.png": "ad14014117f6969a14e0c9bb409576d6",
"assets/assets/logo/uou_logo.png": "086e7b5042be174f6c75fdc6bc63dc7b",
"assets/assets/logo/uou_logo_fill.png": "dcdb7d00cf136341cbe65d5e4daa3aec",
"assets/assets/my_wallet/about.png": "090e5b124c64f02e853b79119de2b7ca",
"assets/assets/my_wallet/address.png": "2d097ebb2f325fc38a57dc97e43f5b08",
"assets/assets/my_wallet/add_user.png": "aab1ae77a20c74bc8fe381ba1a49ada9",
"assets/assets/my_wallet/help.png": "80b57d5ecd1e60e85301c2ba42d0418b",
"assets/assets/my_wallet/notice.png": "3a97572110fd2c344275fd4aa3d86446",
"assets/assets/my_wallet/setting.png": "d912e4b6f99ddbc9a171d627a14b92f4",
"assets/assets/my_wallet/wallet.png": "1162db3f57560b509149109cbc52c11b",
"assets/assets/receive_eth/copy.png": "e675c7185529f381e5690e0b88cdc7c1",
"assets/assets/receive_eth/set_number.png": "8f731158086f82f259fe49c82b1946c4",
"assets/assets/receive_eth/share.png": "636603b3edd18300e8dded914fab1176",
"assets/assets/share_icon/facebook.png": "a35887370a49997a68f22a8a23b02ebc",
"assets/assets/share_icon/instagram.png": "cb445922e3920027af2f15bb409074bd",
"assets/assets/share_icon/more.png": "361551792b2e6b4a115c25f49c8a509e",
"assets/assets/share_icon/saveImage.png": "b55e15565efd22861a8b3a073cd696a7",
"assets/assets/share_icon/sms.png": "9a92690c46cc8b4469a4aea8a6cfe7f1",
"assets/assets/share_icon/telegram.png": "081b51abdb9d76940f7d396d0e8f5cc7",
"assets/assets/share_icon/twitter.png": "3aafdc489cd2165719725862b2d245f7",
"assets/assets/share_icon/whatsApp.png": "07c517baa701c96d1d0497f2c0d91fef",
"assets/assets/tips_word_confirm/copy.png": "6f3730f7529ddf60d3a6f7f6e0c39d8a",
"assets/assets/tips_word_confirm/tips.png": "99be7b2b2dd61052ecc92497f3653b71",
"assets/assets/tips_word_confirm/warning-1.png": "2ab45eaf387adddba35a75c1db7e0b93",
"assets/assets/tips_word_confirm/warning-2.png": "c1feac9ae2654d236cdeb656cc48d73f",
"assets/assets/transaction_type/charge.png": "2989d52d9f523013f71dc76606ca9ab7",
"assets/assets/transaction_type/contract.png": "e24e64771ca889b5d239a30c99db12ea",
"assets/assets/transaction_type/receive.png": "1a47d4270a983bc9af0d5da840f020fa",
"assets/assets/wallet_manage/edit.png": "e065eda6b236d5943a0adb74122126c6",
"assets/assets/wallet_manage/move.png": "4bf70716f68cc66ddbb1d13ab05720f3",
"assets/assets/wallet_manage/remove.png": "95866b47d7e7c9f504c041aa3d005e19",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "eae2f52f52164b08c02be62eca533630",
"assets/NOTICES": "5d5145c6f90ccccce88df0265bb34bf6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/resources/langs/en-US.json": "6a7898ad0f0052b98222816c21ef7f74",
"assets/resources/langs/zh-CN.json": "0ddab13a4dc7241a1cc3cd39138e4a49",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"index.html": "0f3653f1c9061071b7f50fcf109e255f",
"/": "0f3653f1c9061071b7f50fcf109e255f",
"main.dart.js": "f752956988b90b9f7d9ab8ecd8e8b8bf",
"version.json": "79c0904321453250c579460f8f8142c2"};
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
