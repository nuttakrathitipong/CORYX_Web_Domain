'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2d4332f4077d6687ad9eba06cfe8d3ba",
"assets/AssetManifest.bin.json": "0f9dd72de0392d5551de10ade6554d36",
"assets/AssetManifest.json": "1257fe06a9673bf05f6d7fb612e7863c",
"assets/assets/images/aibuilder.png": "20c5370bb880ae9b41bee46e87e86da3",
"assets/assets/images/android_icon.png": "16d76bcc1b7c452ee1a0d10bd9f3c9a1",
"assets/assets/images/apps.png": "3b4b646fd409cb870a135ed4b739e890",
"assets/assets/images/arduino.png": "175f57ebc2a4aa2581ad4baecc5560e2",
"assets/assets/images/automate.png": "9ad2189e84c8732659b3b3d161dee35a",
"assets/assets/images/azure.png": "987141c7fb596a20430dd95774110fb1",
"assets/assets/images/bi.png": "a5a90dc11e83e4b4eccaa252c5975ce2",
"assets/assets/images/c.png": "e77435780ae86e1edccb4dab117dc167",
"assets/assets/images/co.png": "6fd7a8f2364b3a33c14e8f6dc862f710",
"assets/assets/images/coding.jpg": "8124bcb51b09bdf56c71135199ec76cf",
"assets/assets/images/coding.png": "8d605bb677fdac557b16b3e36cb1f4fb",
"assets/assets/images/databrick.png": "5dcf9b93cd17079cb650bc0107275ef2",
"assets/assets/images/dax.png": "b83c229bc83cfbb2b144ff7516eb4846",
"assets/assets/images/desktop_icon.png": "510deea38b7862484a8e26586f362152",
"assets/assets/images/firebase.png": "c9e1c7a50faa42d1583b54038aac3fae",
"assets/assets/images/flutter1.png": "d4b64d7bba6e6d281a30d110aff2be40",
"assets/assets/images/forms.png": "cd10be49a450e9891a58e429bf68957b",
"assets/assets/images/git.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/grafana.png": "799da75bc8e4675f6990a09e83b04985",
"assets/assets/images/gx3.png": "861bf2cac5b9bf4102a814af3e82ca13",
"assets/assets/images/img1.png": "7963516d4b31a0013cf24ea22872c26d",
"assets/assets/images/influx.png": "1050bfe6a1218d46f27a01224b859353",
"assets/assets/images/influxdb.png": "3d8d1e59885590c7f4b114b5f0ab3598",
"assets/assets/images/ios_icon.png": "fbd75fd6af3e3ba5c1277b76803c28e7",
"assets/assets/images/kafka.png": "2257cd9aac8274fb0adec4d936f908af",
"assets/assets/images/ladder.png": "da9dbc96ec374761f635682a6e058aff",
"assets/assets/images/linkedin.png": "b2597cd80c8da3f8d26d0c1bfb5ed71d",
"assets/assets/images/linux.png": "56974b4a61f4dbbe624cc6ca69b93b60",
"assets/assets/images/lists.png": "be82d37d32a383873ae1e9695e8c8d2a",
"assets/assets/images/logo1.jpg": "fab9f642c1a3262c0f1f2f3ff8a24529",
"assets/assets/images/logo2.jpg": "d82a8352fc50725e34eab7fc61e5a978",
"assets/assets/images/logo3.jpg": "41024e422db54dd7b6ca96ce3ec9d507",
"assets/assets/images/logo4.jpg": "15d42922ebc26f22937f7dd85e11c913",
"assets/assets/images/logo5.jpg": "f037f9c59d48a6c1f1581f6f74ecae44",
"assets/assets/images/logo6.png": "2cbbe7501c4034a7b23e23a33992a6cf",
"assets/assets/images/logo7.png": "5c91e0c3b110a8a2b0dc6e28ed412d1a",
"assets/assets/images/logo8.png": "202f6d5aaef95cb935aec9fe4ed51cc9",
"assets/assets/images/logo9.png": "3d9962ccfe5ec1216784e9430bf5be0d",
"assets/assets/images/mqtt.png": "aed36f1f8e5215ec2b462a559d31684f",
"assets/assets/images/oracle.jpg": "57386ccabe3170f60832790bf8fa9222",
"assets/assets/images/oracle.png": "fb51625832f97bf7ee7e2b9dd9b512c0",
"assets/assets/images/planner.png": "fa24895efc9c6f720a12d66372ef8048",
"assets/assets/images/pycharm.png": "5da70323336e660f903eaed202688082",
"assets/assets/images/python1.png": "f94eb89e1da1f5b2572332bfce032b3f",
"assets/assets/images/qt.png": "d492d80abcb4b7209547f470c80b7fa5",
"assets/assets/images/roki.png": "cb2a60e15a509a1adfa7917e1f9f68a4",
"assets/assets/images/sheets.png": "f244b651ac890f313b1439011ba3bffb",
"assets/assets/images/siemens.png": "68d892205b1c998a70fac03b3aef85d4",
"assets/assets/images/spark.png": "5d27c38ae6e215068125ef2f3dc3874b",
"assets/assets/images/sql.png": "2b5af72f6c5d772b7dfc9da531828028",
"assets/assets/images/streamanalytics.png": "62f8cd70c2e950282115c1ff7bd2ccaa",
"assets/assets/images/vrep.png": "10bab37400d1bcef8f227d37175c20c3",
"assets/assets/images/vscode.png": "c674346f730f23f63282c24423697c98",
"assets/assets/images/web_icon.png": "4a817a9e9f2e49e52583f172973d4d3f",
"assets/assets/images/windows.png": "5de5ef2789a2882028d7eda1303b82ea",
"assets/assets/projects/4M.MP4": "e8f2b2b471f273999af0508b77669d9a",
"assets/assets/projects/4m.png": "d6b2eadcf22c8fe37e2d72f064b684d7",
"assets/assets/projects/4mimg.png": "8da8b7bec739984871877771af9587d8",
"assets/assets/projects/5s.mp4": "b391ce0ece6ff4043e2fccb8cd2ede61",
"assets/assets/projects/5s.png": "945c279b9adefdc0e71d14f79693670e",
"assets/assets/projects/5simg.png": "4537247899c1b0b7b7926a047537d1a6",
"assets/assets/projects/access.mp4": "8f8277519093d635e967169516a0b8aa",
"assets/assets/projects/accident.mp4": "11ec7b33b3b9e4b9d8b9f2f9e323722d",
"assets/assets/projects/accimg.png": "e60cec5706f50d54b1cb364f1800c1f5",
"assets/assets/projects/agv.mp4": "27eb2b006f443091ca9482b28ca066c3",
"assets/assets/projects/agvimg.png": "1f2152c1e160604e09557d90fc45e37e",
"assets/assets/projects/ai1.jpg": "c69f93ef4e9b59706ce16d0e65743f46",
"assets/assets/projects/ai2.jpg": "2c204f07cb7e5ef0e4a07c07ab5a8ff9",
"assets/assets/projects/ai3.jpg": "5073a0ec69a493a9868ae181459f781f",
"assets/assets/projects/ai4.jpg": "6674b1e6e6cc48d98f59db8125e34163",
"assets/assets/projects/ai5.jpg": "ca102c603e03df8ade7d04cbb4078a72",
"assets/assets/projects/bi.png": "b2800844e0ba2eeb4201a987c15a8989",
"assets/assets/projects/booster.MP4": "e9ac9fcdf2ae387ec88c0f642fabcf30",
"assets/assets/projects/booster.png": "69af0a992bfbce7d823e611cfd6380bd",
"assets/assets/projects/boostersimg.png": "adf4fb8436961b892a2f233fb48c36df",
"assets/assets/projects/bosch.png": "f6921128286450b8e13146c3aa2174aa",
"assets/assets/projects/bubbleimg.png": "276363221863f7edc43c1988b93f91f0",
"assets/assets/projects/bubbletest.mov": "294c0c3d069cf97485338b17ed43f4b5",
"assets/assets/projects/bubbletest.mp4": "3d484da534f18a4ab05b0613285f7d40",
"assets/assets/projects/bubbletest.png": "69af0a992bfbce7d823e611cfd6380bd",
"assets/assets/projects/C.png": "dcb140cbf5d7e58706b22362568227fd",
"assets/assets/projects/car.mp4": "985587b41f5576fb221b341ba6f5f77c",
"assets/assets/projects/carimg.png": "a8fbeeb69b006a79e8d9f9eb0bb4ea7c",
"assets/assets/projects/coding.jpg": "8124bcb51b09bdf56c71135199ec76cf",
"assets/assets/projects/coding.png": "8d605bb677fdac557b16b3e36cb1f4fb",
"assets/assets/projects/daikin.png": "6abfc63a0c6f804d246645152f4ae94c",
"assets/assets/projects/dashboard.jpg": "eb5320685e1a0207d4dcbcf0cdde50b3",
"assets/assets/projects/detect1.jpg": "e431688e86177d6c9f248d40b5ff28d7",
"assets/assets/projects/detect2.jpg": "b0b156548ce0ad7bf5d24a994d933368",
"assets/assets/projects/ecr.mp4": "a40fc7388b546666d2460e3f52598b6a",
"assets/assets/projects/ecr.png": "fef206b347700a601a35decfb2a6f190",
"assets/assets/projects/ecrimg.png": "8ba235e16e03d59bebb3820bef674b31",
"assets/assets/projects/edar.mp4": "a7b951d0b98e26e95fdb30704312237d",
"assets/assets/projects/edar.png": "1c5e0c34ebbc0d63b24fd051d6de375a",
"assets/assets/projects/edarimg.png": "13540da9ca1672dbee1395e06ce1a8aa",
"assets/assets/projects/emailandfirebase.png": "d6620c0165f7ffda4a992a494edc6c24",
"assets/assets/projects/faceimg.png": "0ec6bd32f5e9138361b1291374ded1d7",
"assets/assets/projects/fibo.png": "7c80d418f63a184927de208645938899",
"assets/assets/projects/flutter.png": "9ceba8cfd9db18f7dfd8be50d46f7aee",
"assets/assets/projects/forms.png": "0c47896d771acaddb5522f7d6bdc1027",
"assets/assets/projects/it.MP4": "c338c07a7753dda4a36bed1d2944de2a",
"assets/assets/projects/it.png": "1fbac6a690a164067382e91cb1f1593e",
"assets/assets/projects/itimg.png": "c9c851c90b6d05e40ad5a645c4218ba6",
"assets/assets/projects/label.mp4": "83470dfead9c83993d5ee5b6961c4b65",
"assets/assets/projects/labelimg.png": "af11982abc90f3971df1754b17a1fb7b",
"assets/assets/projects/lane.mp4": "c44b59dd653c22dee7836dc461b1df51",
"assets/assets/projects/laneimg.png": "789311ded0dbf98e98ab8f80b152c0d0",
"assets/assets/projects/lists.png": "520154d38e46b11b553e08ff75d27f8f",
"assets/assets/projects/loginimg.png": "b663ec7b2826b61043137485f6a3fc25",
"assets/assets/projects/meter.png": "d78b22324207d4fdc60b6e633b50545d",
"assets/assets/projects/mitsu.png": "b99aca6f9c7b5c30fa30dc10627f8a30",
"assets/assets/projects/msm.mp4": "a425c53ec2f0a850aeb0568f34ed2372",
"assets/assets/projects/msmimg.png": "b98f1e7f3b72fd72be027656580803b2",
"assets/assets/projects/mut.png": "b60a4a9beb1f7c3e0315935f7b7e6653",
"assets/assets/projects/NewModel.MP4": "4d18e60dceefb5d68137c6e39a761da1",
"assets/assets/projects/NewModel.png": "28129d5e33f07b4957b9d93179c08c3b",
"assets/assets/projects/newmodelimg.png": "71c35921c63f4eb4c006bf05c4a4cac1",
"assets/assets/projects/outlook.png": "928023ff3989615feaa18362854f1afc",
"assets/assets/projects/pickimg.png": "d3d525562ab3f1e419dc4ebd1e8b1576",
"assets/assets/projects/picking.mp4": "ea0c238eef3a1c9315c512db76a6586d",
"assets/assets/projects/pincheck.png": "b44495620470000022434dba1d599e84",
"assets/assets/projects/pinheight.mp4": "7c43e56aac012a4d8d510b199f8ab26a",
"assets/assets/projects/pinimg.png": "0c5b0c65bc3096a95ecfc8e3cc0d9659",
"assets/assets/projects/planner.png": "05b253d6fd086eb461947c5a8355e490",
"assets/assets/projects/PO.mp4": "c6c5fd438c343bea8d5710c0f6e43cc4",
"assets/assets/projects/po.png": "14cc1a7821eddf4e279672e9ad1bff7f",
"assets/assets/projects/POimg.png": "103df156663ee34a20503c84d6a2332d",
"assets/assets/projects/powerapp.png": "9d9818ed44d060088e021a4a55369bca",
"assets/assets/projects/powerautomate.ico": "1a3716213f41c1b8d77a3c50881a84c3",
"assets/assets/projects/py.png": "08f6cfdd9a43b1a9b72793b42d21b13f",
"assets/assets/projects/python.png": "a9e58974ef23ffe5eb9bd3bbac0b5645",
"assets/assets/projects/scap.png": "bdd86cbe1fce4b1f1d787e91276fc727",
"assets/assets/projects/scrap.mp4": "36928bda10bff7666eae028e798661f3",
"assets/assets/projects/scrap.png": "7ff3819f5eb147cb99e50bc780714df4",
"assets/assets/projects/scrap2.png": "359a2451f9f9f37744dd3ec96227e87e",
"assets/assets/projects/scrapimg.png": "4fdd0f27664b896684d9470fb3f2e816",
"assets/assets/projects/seatbook.mp4": "cb78ed9a0958f86fdf3832dade94501a",
"assets/assets/projects/seatbookimg.png": "a796079d1f81ce18c8989ddb19591aba",
"assets/assets/projects/sharepoint.png": "184df60f893a8bfd8e6610998a1156eb",
"assets/assets/projects/siemens.png": "b0d98927b39bc6a056d4e9bdef258943",
"assets/assets/projects/signin.MP4": "fbc07575f2af81e6e6613abe79447b8e",
"assets/assets/projects/smartaccess1.jpg": "376e75938726a2f13a3f648a633b0451",
"assets/assets/projects/smartaccess2.jpg": "6f6ebe46b3af618c04ca956b158ab0a2",
"assets/assets/projects/smartaccess3.jpg": "b4f1c25bbd536e5b8d3c4b770f6d1c1d",
"assets/assets/projects/swim.png": "540f3942f7153ff59ec3043fafd04b09",
"assets/assets/projects/swimimg.png": "b099e6224332703fa0a6323e1973c568",
"assets/assets/projects/swimp.mp4": "276ac59b8f1d359f6a30f173552bc754",
"assets/assets/projects/swimp.png": "a7ecfb43a8f2ba84f7e873cc5f525d9e",
"assets/assets/projects/tank.mp4": "5b2b0f4f49e242f2293830546edc5998",
"assets/assets/projects/tankimg.png": "8a028c01ee85bddfced04742eb6a84eb",
"assets/assets/projects/teams.png": "920a7a591ba7dcb61e1aa2779d5ae30f",
"assets/assets/projects/todo.MP4": "8f7010102890fb29e28f0b78420cdd53",
"assets/assets/projects/todoimg.png": "185e63364b71ef5f2536acdb456dcb06",
"assets/assets/projects/toolimg.png": "27da4c6e67a106fc43cc4469c9401358",
"assets/assets/projects/toollife.mp4": "6ffe1aee7e5f1c37c5cceaaad4e2a4c7",
"assets/assets/projects/toollife.png": "7ddfe72aa47f8f700b1088144c3ea12b",
"assets/assets/projects/tools.png": "2d74b6576ef54f93e3d1b680e3fa044d",
"assets/assets/projects/trace.mp4": "2637fb013a015a060ec0c856902104ec",
"assets/assets/projects/trace.png": "b64ec02c25e99fcdc91e334980da71f9",
"assets/assets/projects/traceimg.png": "c28212943eb0cde172d83956fed950de",
"assets/assets/projects/training.jpg": "d40de1da78b098a22e86ee1cf409b7ff",
"assets/assets/projects/ui.gif": "eab2853cc202c16378f932d587fe1d0a",
"assets/assets/projects/werbi.MP4": "2abf69700755f2c80eff6877afc8a7d1",
"assets/assets/projects/werbi.png": "028e55c62bfc518f8e5cad1c8c32ea6d",
"assets/assets/projects/werbiimg.png": "7346e588719d9786285dda085ca96284",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c46222a16ee6aa201071aab2ddff4583",
"assets/NOTICES": "78bb98da328aac01996d394e4a342229",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "358100e3bc3c6ea400757776dd18b6d3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "825811ea5068fbbe62a9e861b7caa1cf",
"/": "825811ea5068fbbe62a9e861b7caa1cf",
"main.dart.js": "d13d0df1e396ab518d396c864bfa5755",
"manifest.json": "a43b48cf1e6677287f4d852ea8d1212d",
"version.json": "03ac4cb9478445346aaa58b867540bb2"};
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
