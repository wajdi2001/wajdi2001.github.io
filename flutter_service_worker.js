'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "fab897b4269e5d4c009260df78760cae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1dc91a82afffb5208d90883e3df5066c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a60f3c77f84539c3ae568a91dabc9d84",
".git/logs/refs/heads/main": "fcd9f5febb77a409f6923ef93dec7cc1",
".git/logs/refs/remotes/origin/main": "763fcfc2a9d6194b7648e1a456e8c89b",
".git/objects/01/7114f4bd908638b82019d0a0e09865ea4aa4a0": "1f9c154bd33cf3529fc554a181a61279",
".git/objects/01/828f9730df15f51b6763f7f9d7fc1b7ce25090": "7174c104ca38cef2bf12edaa3af4c05f",
".git/objects/02/b9ae2e708ad10f4381c321f079a1978d67c6df": "8fc585bb3b06ddb78d4feef7a7e63c7c",
".git/objects/02/bf43897a4973d12517f84c5850fa32c441a56b": "d2d806cc754b3484c05bf7bb2399c38d",
".git/objects/02/f57843cf5c836dcd349ac53e093c7a0cf4ebd8": "6dfcca116ea403b7626dd4f8ac2f1ed0",
".git/objects/05/614a681531744e7fd12c951f4d089b8eefacfd": "c721bfe0913eadfdd2a5b2d12ba09770",
".git/objects/06/ef4e2a1fbdf2fc7071e3fbd2aa6748b35ac357": "f427b76c58b53222e8d56fce40258766",
".git/objects/09/27b8133cfc1ed1c326677f8f1275fae4529606": "a610c88a483a5433f49298b8a9c2bfdc",
".git/objects/0d/7788a08f3bdd72afcf83169794930c8f0fd390": "234b7f26e4b4b18d1ba95e102aeefb5d",
".git/objects/10/5bfc83e7058e295959bde00c3fd674c095ec2a": "838377ac179756333e2ab4a72b6ffbd0",
".git/objects/11/1faefa2946df5a7d4affb71e864f3ca5bbd8fd": "90d7d1ad0aaf1bd3b1b2ab66bb2f2a6f",
".git/objects/12/5d84798ef8835f7a5091ca37611549ef0a9328": "3654ab5b661c38323035d9ad67c2eef6",
".git/objects/16/7b4717e0eb4791094f3b85332b563dd94f53de": "f6e7ac22832ee6a8e340baba075da005",
".git/objects/17/76ed1820e18195101108e0be103319db6f3a30": "caf63b3a0fef37f4e977fef31300cb78",
".git/objects/1b/cbd546ac51cb5de13ebe83b2a1a0ae40c6a4a4": "5ae28c0e7e15f8b54a759df9f0fb92b2",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/a3c4d8916cb5df66a27dcfa1d75a67f2ece092": "416efc9015ad57696a98e675736beff7",
".git/objects/25/28f226fde8a35a4610ab78a10786061f8d0066": "68e3be371f69e9b0f16bf5532b7f7315",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/6925565f15a1da831fd726f31be241ec3fb82d": "638ce88eab1a9283ed6a7cc1b64b2fd9",
".git/objects/2a/2b9e282dcbe572960a8d5c6267c51f4d3e723f": "4dc264c61f7319a25e1584ce4b554e5a",
".git/objects/2b/eaf979140949b85db845d66bced5a6937bdbaa": "583460831cae8a3f4c298b5ecebdff8e",
".git/objects/2d/3659109ebcbadaa5e74d54eaedd3b7aeb12ee5": "19c021495eff7880c941978ab2e2b49d",
".git/objects/3a/29833f3af0c2dbfbefc14fa78e2af1e6c0bf51": "e42114208004690e5fdfea128c79da11",
".git/objects/40/12225c0b220d0e1d67001daa7e01bba3df6953": "62a756494cd4486a4ac4ba6c10ccb080",
".git/objects/48/7616b6b32772aaaf4d7f420d0529208e07ceb0": "0bab56e0690bf89971dab6ff2d780800",
".git/objects/56/636fb2c9c609a11e580321d87e9d3b9b51cd20": "c75dd8ea19817d2e044249753a7519d8",
".git/objects/58/88c38f4fc8eb09f17318fc2ba9be395d253c18": "196ecce12d392f0b0fe9f7f5a7a44871",
".git/objects/5a/17b8c6f1cdf441a1b42231c1f064216e4a7112": "6646db6d774c9552178d064b3a1236b3",
".git/objects/60/eddd8b5840c4f2e96a28ab1a125e07b904ba88": "d271c652a4f1af3feedec7d6858a198f",
".git/objects/61/bd8c89e8f64a79fddc5c5027810cbd167169b2": "cdf407f86d34135b1b16ecb3293032e4",
".git/objects/67/c59845970d63c9c9cbaad724c14cfc0c267f96": "9e29af622bef8c352c8ec82b0abcd3bc",
".git/objects/6a/2c9d4c1f242183b5e005bc9c46343754a65982": "78809a2a2c9316ffcd81b6342cb4c1b7",
".git/objects/6e/6c772bca3e7eaefe60785d4fdb349dec39124b": "869ccd8956d3e7647db1286054108db2",
".git/objects/6f/bfad1ade1ac4e4e4aab8040ec8961a21916fa9": "01964d39b4651fbfab77f42eadab8818",
".git/objects/71/df0038c81d42bf25d40460864087e364ebbee5": "10b223ecddc2e460a2dca5809684078d",
".git/objects/74/ac01ecdab76b3c6a306931118122175c7deb78": "7ddc01b0dc8e2b72d69d3dcde6b15a31",
".git/objects/74/d916bbf9ebe572f3e3bf73c05a6d600e97f5e3": "f0835f6f3ad1a5f7cc3812c5c03167af",
".git/objects/7d/085bba948901e1f61812a5bff6082591506ca5": "73b494a798e962b4febfa8544d1b481a",
".git/objects/7d/9ca2772701b2a0ba8f1023bd620c59eaa0b37d": "161779db3f8b748b365de9bb315f7f77",
".git/objects/84/b2539406cd93f9aff24809ef62223bab691581": "201a99c1052bc64c819c1b1a68f4a5c7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/71d9267f695192e6613e4f11e43c02080f6024": "08b50e4abefeae52b15974c60f49da58",
".git/objects/88/53a6667e012cb1a666f631bb28903329179d20": "dba7aa4b7973693c0536d63767f7b9e4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9cb3cb71725fb7f7b12a240f5906dce1944770": "1e737c65540a3d25c97d31f3cb696ad1",
".git/objects/8a/a56c1771aa9e07aad4509a7274b4fb1a1cae3e": "db816259985f492de3a14379d54edbf4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c961c5ccd114fb5baada6c894e4c8a8195fa63": "c6ba35b014609272301cb9202db758b9",
".git/objects/92/8d8f416d22c5123acfe6d6184de293496e7d23": "79c9009cf5af87a7abb30a96b8993813",
".git/objects/92/fc3013c2283ccd5c4d8cd47f391d0434ddbbb5": "db000bbd38ffa675794ca937c89bc030",
".git/objects/93/ea849f8ccf7b27b6310bb5fa79534a98c95f17": "6ae2f530f917d8a60aca8cd21c229152",
".git/objects/98/c10f11e0e8003c07426eda037604dfe67f1aa9": "20147db378af6001bbb5191b6471b20f",
".git/objects/a1/a6c8e345aca76b79d2c28d20b9d434538e83bc": "095eeb07007d76c3e6ed52953a47a854",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/e1440ba8569019014408d06f097972cc7f280f": "8e4772d6cafe7d9978e2e88d075c5721",
".git/objects/b2/ff4a5ba5b50f3cdcc2d914e1a41bfce2879b4e": "a6a256f78bea715d2fca961e5eb3e128",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/5827f4b8152ab87e572d23fe2fdcaa63fcd7f3": "4fb80083d961a5b7d40f78cca698395b",
".git/objects/c5/fa430f85a6a9deffba4c67af0ca03f29a11f8c": "22288a1136e88fd9da2ec087d7a09b58",
".git/objects/c6/5ace62019e80225b800c93224de48cda2b51e3": "3c24e7575df8f0eafa240bd2429ea57e",
".git/objects/c7/ef3d190606b5678e075c97d9ad71c4c815cca0": "97c4dac24c3eb01e038964712b6b98d6",
".git/objects/ca/13f5f3f59448deaa55e1a5d744dc3d000171da": "c035f1d02538efa4774f3b941d8dfa18",
".git/objects/ce/15594b7fcb570a76c754afaa02767a7c61ef41": "f3d52db1f2bdc06419614c93b0c4b47f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/ca9a663aaf7d4d51bd9e92b0a72a3c35aad2cb": "451717687ea6a3c8946222e8a7135b7f",
".git/objects/da/764d3427d712db05a48a836bb00ec93f361d93": "b3b4cd1e47631c240cd762d7c0c3d1bd",
".git/objects/e3/3afd43473e10754779197293464292358090d0": "e08f61245169235aeb83666a6504c98e",
".git/objects/e4/917fd296151879313f4785ddf8dfc47c907612": "af8fc39dddd6a29789c5b8c4a1944bea",
".git/objects/e6/74d85806543c101154c2a89af879cbd9506e26": "2d5caba72f08d9b6329e0b8649d5c15c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/de20740eedd59a6a44383b10b41e3461cb6b19": "c86d1f62dcebad7438ed3ce7561f5fa7",
".git/objects/f4/6a0429d3e7ff42f24f77f0a89ef50c9013fa3d": "d207c4395a26994ee0cbc5a0ba3ba58b",
".git/objects/f4/a266dd37d5066da46c9a6b8898073ae2930a64": "90c22367f91de9fd622ad04f0a5fd7c8",
".git/objects/fd/787a81c3e608898214c09e62216eefa8f2ba90": "ffec126c6bfda0bcc1ee33fc3e64bcf3",
".git/refs/heads/main": "12f000c974f1a32f019b6c36f11d2f3b",
".git/refs/remotes/origin/main": "12f000c974f1a32f019b6c36f11d2f3b",
"assets/AssetManifest.bin": "3ffd97128aa86ee8fa117f1027d8949b",
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
"flutter_bootstrap.js": "013e9a9ad79fe16a50bd0a905bc6dd0e",
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
