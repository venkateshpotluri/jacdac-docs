/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-484b3f8a8f7a7e8b22c5.js"
  },
  {
    "url": "framework-3e5fdc5ba728e15d7465.js"
  },
  {
    "url": "styles.34f14593a49505af7654.css"
  },
  {
    "url": "dc6a8720040df98778fe970bf6c000a41750d3ae-54b032b19b5e073207d2.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "5f511eb116c9e87483413f2c03fb6966"
  },
  {
    "url": "static/webfonts/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fBBc4.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxK.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBBc4.woff2"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7fd00566e425668c90b8.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "06d6460dcc554287800119c0780dac97"
  },
  {
    "url": "page-data/sq/d/2307937736.json",
    "revision": "30ee5ef4524e8c171198c2118fc02cb6"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "df41151e4f63c791619eb8ff91dac4d0"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "ecb96a3d843c7b6530eec48fa8871f5f"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "80aa6e6efba2ffcbce2f0a66da63af79"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "a59bc7e43d710f06a1b1ae756f1db2a8"
  },
  {
    "url": "polyfill-3dba7d40c3baf44701ca.js"
  },
  {
    "url": "component---src-pages-404-mdx-3f22a7fae79c1070091a.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "5474865ff78ae09a14a8b41d65b79ebe"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "94d36396f99319c72fcc1b40a9774bdb"
  },
  {
    "url": "component---src-pages-clients-mdx-e5a90e7f3e6472c8d77e.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "ea5d3a294803bc963607eef37b1638d5"
  },
  {
    "url": "e6d35e44a9abdc22e1c1e1a33c8255680b4ee67a-37209bc7369502642ed9.js"
  },
  {
    "url": "e39614159c1e52d35f6eac65ccd74e0ca8de41ae-fd110a055567006af12f.js"
  },
  {
    "url": "97e679f54c2c0186ade1e362cbfb82e06f41817f-e0705551c2832bf50a6e.js"
  },
  {
    "url": "103b2b263982846fe7173d9cc3f35acc1808d94f-94ba3018bb7912182bce.js"
  },
  {
    "url": "c6a7b4469beb7dd409edf408331af583daf94b7d-43dd3090fd7d411063be.js"
  },
  {
    "url": "2df7280def82c7b497131d3622ed028aecb8e663-b9ce7e15ac26022bffc0.js"
  },
  {
    "url": "74493c31a6571423b4de02ce9ddf127887738210-11004deab58f10fa0c4a.js"
  },
  {
    "url": "ecc66d45a30f170d6a1d7c210a0a1cebd03a3b5e-d72107eb66b8e72880b3.js"
  },
  {
    "url": "02e38aa8e5d6b10d1b45e05692733ade4c651bf6-e91505245023ec77d40f.js"
  },
  {
    "url": "bc1de39814113fdab2fbefae2ee854f0842f6be1-664a290830e9df6c7ea7.js"
  },
  {
    "url": "f45028b77642bb06a1e26ecfd1b9356bfb549ad6-f80879c5e3c221d0cba8.js"
  },
  {
    "url": "component---src-pages-dashboard-tsx-c9f3818c6fbc5f1b3cc1.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "8f3d12d9060a8dc7925be9df16c81d21"
  },
  {
    "url": "97c3b2d01729d14971f44dc6012293e420701658-7f612c1d6440bf6939cd.js"
  },
  {
    "url": "component---src-pages-devices-tsx-d067c4120646968cfba1.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "ff2b57ea5b1011c39c4708255057cb6b"
  },
  {
    "url": "component---src-pages-dtmi-mdx-9db7714e2abfc45a6a73.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "922c06ce22fbafe23ffbe902872f7bea"
  },
  {
    "url": "component---src-pages-github-tsx-250973ca88295f886192.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "7adc12c94f43568d4bdb0cc62f1e94c6"
  },
  {
    "url": "component---src-pages-index-mdx-1ed11f8d5e7fe23575f9.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "cd8ef10d6d8e0249c0b35ed3ebac5862"
  },
  {
    "url": "component---src-components-spec-tsx-e1533507bcf2276f10d9.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "7118df1f90f6c103d3e407e3e0012315"
  },
  {
    "url": "ea5bec84f4245e322b43fa433fccf95de0449133-1c239bba719a1bce159c.js"
  },
  {
    "url": "6e6f508a4d48336b02c09c52b4663db8917995a6-95e604546f0aa40f02c1.js"
  },
  {
    "url": "component---src-pages-services-tsx-b8dc503bafbf13fbb4df.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "82cbdb525dcf8c1ef73ee046171969c3"
  },
  {
    "url": "component---src-pages-tools-mdx-81ac4f6ce89a753b1748.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "f700e95b86abf2c15c9c99c61f937cd8"
  },
  {
    "url": "component---src-pages-traces-mdx-888308eff3efe87392cf.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "d377cde3089a20cb9d7647e5a72ea207"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "9a10e541383be19a57fceabd6629f05a"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "680208e088b78a6c6733767569ea8b31"
  },
  {
    "url": "page-data/reference/led-status/page-data.json",
    "revision": "8812d1d91773d4fd17ca8b0fd43b38b0"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "1ad79af8be47f4bcc67cd2ea9fb24111"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "f3f1d73298fe69993adb8b9099d708ae"
  },
  {
    "url": "page-data/reference/service-tests/page-data.json",
    "revision": "9e6708422933181a098c843aa92d3703"
  },
  {
    "url": "component---src-templates-service-tsx-a3899b3480082d82b7ba.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "2d6911ad2ea6d713ee69b8f0733d3a98"
  },
  {
    "url": "de590f55fa2f17e49ed8680dc5a022fe834f3017-f883d88e0bfa9991c920.js"
  },
  {
    "url": "component---src-templates-service-playground-tsx-15787456d9ff05341481.js"
  },
  {
    "url": "page-data/services/_base/playground/page-data.json",
    "revision": "c3e33e6fdcc038b4eecc02bb3bf59f19"
  },
  {
    "url": "859a83de993caea7524bf57c2975f3be6812c8c3-847cfb658dc9ff03a272.js"
  },
  {
    "url": "component---src-templates-service-test-tsx-9cbe4ac48eff1bd4b2cd.js"
  },
  {
    "url": "page-data/services/_base/test/page-data.json",
    "revision": "db4e7a729c8d1db67c37dfe8e32c2351"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "c60b950b204ae0f3996b64c443ed4819"
  },
  {
    "url": "page-data/services/_sensor/playground/page-data.json",
    "revision": "91b8af72627c5365ecba267e0d2470f6"
  },
  {
    "url": "page-data/services/_sensor/test/page-data.json",
    "revision": "b4bf6b1a0bd411fec60e6bafc11088b2"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "c0720c14d217a43fdf449317ea8a7aac"
  },
  {
    "url": "page-data/services/_system/playground/page-data.json",
    "revision": "e54b1e22296f4d27c1d6f79165b466b7"
  },
  {
    "url": "page-data/services/_system/test/page-data.json",
    "revision": "c209097440bee2f54a93a3a0f52dbcb1"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "cd2595a547c7a502d05f644b6364b7e0"
  },
  {
    "url": "page-data/services/accelerometer/playground/page-data.json",
    "revision": "2f893af2e2bc42013bee67085af1b03d"
  },
  {
    "url": "page-data/services/accelerometer/test/page-data.json",
    "revision": "3160bad8156367291635ab808cb3fd7c"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "f4cc9624786b8f4625e5a99b23ff2724"
  },
  {
    "url": "page-data/services/arcadegamepad/playground/page-data.json",
    "revision": "9a5201be21de80377e02ba184ba7c34b"
  },
  {
    "url": "page-data/services/arcadegamepad/test/page-data.json",
    "revision": "7d86024ef07729d2340e6ae5c158aa31"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "de73f06ae5150b4be63376b1b2172235"
  },
  {
    "url": "page-data/services/arcadesound/playground/page-data.json",
    "revision": "f730d9bc93968c6aa0708e514b36e138"
  },
  {
    "url": "page-data/services/arcadesound/test/page-data.json",
    "revision": "2e64dc3eaa5716ee16b755d7fd70b128"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "5a2f940548844b02cf0085c0c7d987d9"
  },
  {
    "url": "page-data/services/barcodereader/playground/page-data.json",
    "revision": "7c24e6915b0f55b712abfb86b351c15f"
  },
  {
    "url": "page-data/services/barcodereader/test/page-data.json",
    "revision": "2378ad574a59a3a65fedd61625b60d20"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "db8e612a49c8b0b722c466c2417342fb"
  },
  {
    "url": "page-data/services/barometer/playground/page-data.json",
    "revision": "8f3eb42189af10e157f12ecd1ad68f46"
  },
  {
    "url": "page-data/services/barometer/test/page-data.json",
    "revision": "d7a36075c75e917257076084a48e2d26"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "a35e7adefad73078ec16d023832f7bdc"
  },
  {
    "url": "page-data/services/bitradio/playground/page-data.json",
    "revision": "2c392da7c4e6f0ef271aaa6acdb848a7"
  },
  {
    "url": "page-data/services/bitradio/test/page-data.json",
    "revision": "85d0bff04e816fcd5841fdb3b0c3fef0"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "7aee6ad1d5b30bbfeac31339825aa638"
  },
  {
    "url": "page-data/services/bootloader/playground/page-data.json",
    "revision": "9090812ed1f3f972d95f9bc362654975"
  },
  {
    "url": "page-data/services/bootloader/test/page-data.json",
    "revision": "51b81489cb06c2f779b0cbeecc7b114c"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "8772236891a9a0f2d760e9935a38fa2d"
  },
  {
    "url": "page-data/services/button/playground/page-data.json",
    "revision": "36638bac94d1c8cda892a0c2c68109ff"
  },
  {
    "url": "page-data/services/button/test/page-data.json",
    "revision": "aef78f38799afba8cab6b3f4fafa217b"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "a110f05c352b7038995cd68d6f15bd8a"
  },
  {
    "url": "page-data/services/buzzer/playground/page-data.json",
    "revision": "b1c5eb49f0e5f845af2cae4602f33ea3"
  },
  {
    "url": "page-data/services/buzzer/test/page-data.json",
    "revision": "2f5b0ad61bfd692c43830c369b606aea"
  },
  {
    "url": "page-data/services/capacitivebutton/page-data.json",
    "revision": "02fedd063b9d58b4ae31e05549753189"
  },
  {
    "url": "page-data/services/capacitivebutton/playground/page-data.json",
    "revision": "9f6fe80b5cfdde97834132edb6f3c2a2"
  },
  {
    "url": "page-data/services/capacitivebutton/test/page-data.json",
    "revision": "23ecd624e43511e9029df16110adcc9e"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "15e5afa31b13ff81f982d9adb3b45045"
  },
  {
    "url": "page-data/services/characterscreen/playground/page-data.json",
    "revision": "406a9325d4b03240ade94ad2a37a60a9"
  },
  {
    "url": "page-data/services/characterscreen/test/page-data.json",
    "revision": "8c763653562c56bcb5b2b4e146dc8292"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "5822ac4b36128b623cc747c2eca7695e"
  },
  {
    "url": "page-data/services/color/playground/page-data.json",
    "revision": "c78bcf5b6c483658c2528a2209d11340"
  },
  {
    "url": "page-data/services/color/test/page-data.json",
    "revision": "d3626791f6fa13cb0c2b416a65c995c7"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "611e438489f9c8206fcab4a2db7f47cc"
  },
  {
    "url": "page-data/services/compass/playground/page-data.json",
    "revision": "5ed40b76f962d6efe1b0b1bde7a2e6f2"
  },
  {
    "url": "page-data/services/compass/test/page-data.json",
    "revision": "8a8be147d2f176d82a6673ebfc70c8ee"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "1766a5ece59dc1858748462c6d0e76f8"
  },
  {
    "url": "page-data/services/control/playground/page-data.json",
    "revision": "ddedfae6d13b56dae703d482679dd978"
  },
  {
    "url": "page-data/services/control/test/page-data.json",
    "revision": "08e13b9bd2e5e1deedfea43a6d2817c1"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "7562a32ce213620a1b14edd373765ba3"
  },
  {
    "url": "page-data/services/distance/playground/page-data.json",
    "revision": "2f821a1ec1b5677c7d138ded365c8900"
  },
  {
    "url": "page-data/services/distance/test/page-data.json",
    "revision": "7cd9216f33f1384e41eb09c44665915f"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "2fe552ab186b30eb2ad9ece0a7248951"
  },
  {
    "url": "page-data/services/dmx/playground/page-data.json",
    "revision": "4befc69070023cad59b0ecd87ca6f357"
  },
  {
    "url": "page-data/services/dmx/test/page-data.json",
    "revision": "06d153ffd87b6d3a4e638f92a7d978bc"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "90034c0fb21bc6b663256d4f87e697c6"
  },
  {
    "url": "page-data/services/eco2/playground/page-data.json",
    "revision": "9799cfe1b4f45f74ff4d771f61cf6efb"
  },
  {
    "url": "page-data/services/eco2/test/page-data.json",
    "revision": "6d075dc226fd692f923c0320d19914ed"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "4da2ee094f218a1ec602c95dd00836b5"
  },
  {
    "url": "page-data/services/gyroscope/playground/page-data.json",
    "revision": "1b0320c36fea8dfe16a9daa4a4b9b585"
  },
  {
    "url": "page-data/services/gyroscope/test/page-data.json",
    "revision": "d46be9419a0a11e2c44a79d5bcea0ef7"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "becb307a662d0f2d7c89bb616ffdba84"
  },
  {
    "url": "page-data/services/heartrate/playground/page-data.json",
    "revision": "e8ab2abc0fec1c8a5026ee47d632413e"
  },
  {
    "url": "page-data/services/heartrate/test/page-data.json",
    "revision": "b5775cd3127d933ec285ef44a960c4f9"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "ed8c414be6cbb7c5b82ce8a409dbcd8e"
  },
  {
    "url": "page-data/services/hidkeyboard/playground/page-data.json",
    "revision": "e87cf102370a0949c3f5df1cdafa5a5d"
  },
  {
    "url": "page-data/services/hidkeyboard/test/page-data.json",
    "revision": "913130d0874f8d13c280c2998d209e69"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "bed6c6b5051470fa6ad6542a742e0055"
  },
  {
    "url": "page-data/services/hidmouse/playground/page-data.json",
    "revision": "f536db44a79635e38877818c3d25c521"
  },
  {
    "url": "page-data/services/hidmouse/test/page-data.json",
    "revision": "0fd6aaa8152dfa38788efd555ac18e88"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "323232a544ce3f92794dfb1aa54a446b"
  },
  {
    "url": "page-data/services/humidity/playground/page-data.json",
    "revision": "fa6158b252a4d199f3a3ef2905c12d3e"
  },
  {
    "url": "page-data/services/humidity/test/page-data.json",
    "revision": "0f2e44584001ab964176d5e3522d31c7"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "bbc1d1887c752a3d6a51720d27b0cc13"
  },
  {
    "url": "page-data/services/illuminance/playground/page-data.json",
    "revision": "3d5243aa02a14b853a3ca5c151658012"
  },
  {
    "url": "page-data/services/illuminance/test/page-data.json",
    "revision": "cd00db446d2038a4edc98665ab316862"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "38e5c99e3c562ba9018ecd701913fc7a"
  },
  {
    "url": "page-data/services/indexedscreen/playground/page-data.json",
    "revision": "5ad746c17bc4c39b505f43ea74e4f54c"
  },
  {
    "url": "page-data/services/indexedscreen/test/page-data.json",
    "revision": "9793075e09330930c8092571c6a828d4"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "f97ff34817912788d5d2158dc49c015d"
  },
  {
    "url": "page-data/services/iothub/playground/page-data.json",
    "revision": "7f9c4f9b0336210d81b51d22dcb85e39"
  },
  {
    "url": "page-data/services/iothub/test/page-data.json",
    "revision": "0ec106395d7d4306cb3ec7d6e85c1865"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "dd840004100c8969f7e145ca8479056e"
  },
  {
    "url": "page-data/services/joystick/playground/page-data.json",
    "revision": "0c7b5b61fef57ec131b23d607911d2c1"
  },
  {
    "url": "page-data/services/joystick/test/page-data.json",
    "revision": "fc7ddebdb421ce03ddc91ab1701f4158"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "de13573a903682e75d254a56f26e1eb4"
  },
  {
    "url": "page-data/services/led/playground/page-data.json",
    "revision": "440bf615ff97b5a2a279b825397bd29a"
  },
  {
    "url": "page-data/services/led/test/page-data.json",
    "revision": "582fb072119bdad046878eea5d1a7edf"
  },
  {
    "url": "page-data/services/ledmatrix/page-data.json",
    "revision": "03a7c86f77f160831bb295f16157ef19"
  },
  {
    "url": "page-data/services/ledmatrix/playground/page-data.json",
    "revision": "0e25f4f23969f90564770d586bb5a46a"
  },
  {
    "url": "page-data/services/ledmatrix/test/page-data.json",
    "revision": "ae8fca9bc5d8d84eee950eedb4c78202"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "488a25f301c9b4c52c22de0f9a174c7c"
  },
  {
    "url": "page-data/services/ledpixel/playground/page-data.json",
    "revision": "f6d825a2dedef4157ab906978be6bd53"
  },
  {
    "url": "page-data/services/ledpixel/test/page-data.json",
    "revision": "505366328f54226327dc1ef96e040322"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "36136e7986921387f6f95dfc301bda2e"
  },
  {
    "url": "page-data/services/lightlevel/playground/page-data.json",
    "revision": "d4c74747a2f1e2321f986509396be50e"
  },
  {
    "url": "page-data/services/lightlevel/test/page-data.json",
    "revision": "81921730c38647372113b97b42f44947"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "d2151b146bdde721843e5eb88f33130f"
  },
  {
    "url": "page-data/services/logger/playground/page-data.json",
    "revision": "680b9ebd73baadb65ad96a5e0ae63fad"
  },
  {
    "url": "page-data/services/logger/test/page-data.json",
    "revision": "9a6b6a55f96e15fd326d2aabb632bc62"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "d32caa27a69973ae7e2ebe90926ff94d"
  },
  {
    "url": "page-data/services/magnetomer/playground/page-data.json",
    "revision": "f9ec046c7a16c567b6c5b75b92b8bee2"
  },
  {
    "url": "page-data/services/magnetomer/test/page-data.json",
    "revision": "3470cd4663009a7cfb4eb18254fb4096"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "782b2739467a9087a7b557da84f06323"
  },
  {
    "url": "page-data/services/matrixkeypad/playground/page-data.json",
    "revision": "6dd9d15576c9a55564a59fb2d4954b77"
  },
  {
    "url": "page-data/services/matrixkeypad/test/page-data.json",
    "revision": "a7ec7a5e0bd96241fff2cef24dd24298"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "d8b1d4ebf447491fa104a50ff06315dd"
  },
  {
    "url": "page-data/services/microphone/playground/page-data.json",
    "revision": "3a3f8d714bdf4d9b82d2aaaef0395552"
  },
  {
    "url": "page-data/services/microphone/test/page-data.json",
    "revision": "6c6e03959fb0c63e65ee83ff752434aa"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "a977e0cedfd7f10d2abe2641b3df7bf7"
  },
  {
    "url": "page-data/services/midioutput/playground/page-data.json",
    "revision": "80e13912c98611b78291b3f4e0eec97f"
  },
  {
    "url": "page-data/services/midioutput/test/page-data.json",
    "revision": "1659ed3408ab20b15ecd39175b91f09a"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "43f8a631b0f174f66ad6c5ef1bc117b4"
  },
  {
    "url": "page-data/services/modelrunner/playground/page-data.json",
    "revision": "7f0dccae7db2432519297bd296c45110"
  },
  {
    "url": "page-data/services/modelrunner/test/page-data.json",
    "revision": "fbd86a1eb50b2c33458935ff170c6245"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "788105aa5885fe4ff84437817085fd0d"
  },
  {
    "url": "page-data/services/motion/playground/page-data.json",
    "revision": "96c5bb4e1b369b0f5f9123a0248d1132"
  },
  {
    "url": "page-data/services/motion/test/page-data.json",
    "revision": "598bfcea6031cdf1761589826234078c"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "3ea50a5e425a89553c83d4bbeb7037dc"
  },
  {
    "url": "page-data/services/motor/playground/page-data.json",
    "revision": "5886fcfce6bd4f6806e51de646550e22"
  },
  {
    "url": "page-data/services/motor/test/page-data.json",
    "revision": "28d2060606cfff15ba00b4c343f3b33f"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "d216c2b8245dffbad661004100d3e026"
  },
  {
    "url": "page-data/services/multitouch/playground/page-data.json",
    "revision": "34913c21cb2cd3567149821b6e0d9143"
  },
  {
    "url": "page-data/services/multitouch/test/page-data.json",
    "revision": "ecb03a409ab453cd8606f99a942f7c5d"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "96194576729c88e9035c9e0a97271063"
  },
  {
    "url": "page-data/services/potentiometer/playground/page-data.json",
    "revision": "764d28b366a640a899cfa7cfc9587fe5"
  },
  {
    "url": "page-data/services/potentiometer/test/page-data.json",
    "revision": "3f0e40f0bf8bbbda79c3db34987ae485"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "cc6bc5b259bcb811dfde9da73da04659"
  },
  {
    "url": "page-data/services/power/playground/page-data.json",
    "revision": "b8d665ce5c5475a5c6d24d040e54d572"
  },
  {
    "url": "page-data/services/power/test/page-data.json",
    "revision": "0744e4e6cb245c2ad85665834378787a"
  },
  {
    "url": "page-data/services/pressurebutton/page-data.json",
    "revision": "9e99b0aa6a9288cebee6d54dc3d7ef13"
  },
  {
    "url": "page-data/services/pressurebutton/playground/page-data.json",
    "revision": "b1c891f0d129b575a6c9b754ae0c24f8"
  },
  {
    "url": "page-data/services/pressurebutton/test/page-data.json",
    "revision": "e8598d020637d839b294b296946f2adc"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "3c364e96693c369732cc98af20f77546"
  },
  {
    "url": "page-data/services/prototest/playground/page-data.json",
    "revision": "0b54ee61fcfcb0f4086076945a292a67"
  },
  {
    "url": "page-data/services/prototest/test/page-data.json",
    "revision": "ded7cab65d87790ff6872ea9f76d44f0"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "bbd07eda0bd4d9e89ab7f9b367648688"
  },
  {
    "url": "page-data/services/pulseoximeter/playground/page-data.json",
    "revision": "e6a822035d256275374601b50f8fc6ae"
  },
  {
    "url": "page-data/services/pulseoximeter/test/page-data.json",
    "revision": "2dac1d6c8945466877e2ee7270c20290"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "d9b16121a141ae7baa53ed80efac0940"
  },
  {
    "url": "page-data/services/raingauge/playground/page-data.json",
    "revision": "418ac3075a8e1b55808eef71edcdda5f"
  },
  {
    "url": "page-data/services/raingauge/test/page-data.json",
    "revision": "99b10a1ef88de8fce9006c6f4a758f1d"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "a55725e3c9a405fc6c4439718921aa9f"
  },
  {
    "url": "page-data/services/realtimeclock/playground/page-data.json",
    "revision": "a89b15bbc9eaf436bd1bdbf50a59a366"
  },
  {
    "url": "page-data/services/realtimeclock/test/page-data.json",
    "revision": "58a2dea1eed143ec9203c20f6d4f7172"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "5ad5516ffd2534d295eba2969d66e384"
  },
  {
    "url": "page-data/services/reflectedlight/playground/page-data.json",
    "revision": "f23f57b70f67ffadf1746c94957cba90"
  },
  {
    "url": "page-data/services/reflectedlight/test/page-data.json",
    "revision": "ec75c4f28d3e45eb607357d6022bbf16"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "dfd98e8c293685e61a73dde8d6fb6887"
  },
  {
    "url": "page-data/services/relay/playground/page-data.json",
    "revision": "9afb8dfbda30ac32a84a8d2fb8cfdf41"
  },
  {
    "url": "page-data/services/relay/test/page-data.json",
    "revision": "a9a61fafdb917f8159dc2cf30bbfbfca"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "fbdbbde7c8f263350163435c60b53ccc"
  },
  {
    "url": "page-data/services/rng/playground/page-data.json",
    "revision": "661dedfd98ee1eb35effe59adb5d57c9"
  },
  {
    "url": "page-data/services/rng/test/page-data.json",
    "revision": "8cc3e596707a0f5fb852841151f2b286"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "07817eb8dd8895b65012335cfd75d8f9"
  },
  {
    "url": "page-data/services/rolemanager/playground/page-data.json",
    "revision": "9f2b1521d92429f925a3731f72422002"
  },
  {
    "url": "page-data/services/rolemanager/test/page-data.json",
    "revision": "199f9f8ce761a22b5e2c080d44293980"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "8ac9dfdd42f75d17d18395ede2e866cd"
  },
  {
    "url": "page-data/services/rotaryencoder/playground/page-data.json",
    "revision": "a6bef17474e4ee521690a61eaf1d7fcb"
  },
  {
    "url": "page-data/services/rotaryencoder/test/page-data.json",
    "revision": "495a0b78f7023867cbd0f977ca7c0629"
  },
  {
    "url": "page-data/services/rover/page-data.json",
    "revision": "6ce2c27abb3385fab2cd0cf3fceeef4f"
  },
  {
    "url": "page-data/services/rover/playground/page-data.json",
    "revision": "e70c90cc62dfea622fd972454c4a64ad"
  },
  {
    "url": "page-data/services/rover/test/page-data.json",
    "revision": "642c35f756455df34e093830273b2b2e"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "731ddff22d012528c3915ac9d4cb0bb5"
  },
  {
    "url": "page-data/services/sensoraggregator/playground/page-data.json",
    "revision": "a9daf575a1cd2bbe5f96fdcfb8825278"
  },
  {
    "url": "page-data/services/sensoraggregator/test/page-data.json",
    "revision": "88ac47e01223969999906d553cb89935"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "b9317d8423ec7e30eab7eb6dee2d4ad5"
  },
  {
    "url": "page-data/services/servo/playground/page-data.json",
    "revision": "a5b1009e08cd7221840093ccde5367ef"
  },
  {
    "url": "page-data/services/servo/test/page-data.json",
    "revision": "2ffc3fa71f31188c1682ce102ef24200"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "e243d8404b0d357db6ad008c233e10ca"
  },
  {
    "url": "page-data/services/settings/playground/page-data.json",
    "revision": "c2068659766589793859cd3bed862b65"
  },
  {
    "url": "page-data/services/settings/test/page-data.json",
    "revision": "fedc12d83548fbd174fb0ff0a335ac07"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "671ccfcc1887bd5f650945cb8765c636"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/playground/page-data.json",
    "revision": "fd00b49bcff7471713f106f14c169c1c"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/test/page-data.json",
    "revision": "49a699dc7f6c7b3c12d07e8b7ecf86f1"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "956016a9550d1ebdf7690cee4d200909"
  },
  {
    "url": "page-data/services/soilmoisture/playground/page-data.json",
    "revision": "28c2e358a8ee5fa3e1654688d0645a1f"
  },
  {
    "url": "page-data/services/soilmoisture/test/page-data.json",
    "revision": "226134233d9250768700d42a249f90d6"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "37df833765af6058076a2828f4d91bec"
  },
  {
    "url": "page-data/services/solenoid/playground/page-data.json",
    "revision": "0ed15e999d97b24ecc952ac0117df825"
  },
  {
    "url": "page-data/services/solenoid/test/page-data.json",
    "revision": "21ca03d4d080fa8a61e42392a580be34"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "c2d5844b1a9f1b4ece58cc653228bc66"
  },
  {
    "url": "page-data/services/soundlevel/playground/page-data.json",
    "revision": "c7ebdfa11071df4698b6efcf616078c8"
  },
  {
    "url": "page-data/services/soundlevel/test/page-data.json",
    "revision": "64d629ef99fd27ab07bf1d575db21eee"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "e5179ad91b6974ed615f828e0c6edfcb"
  },
  {
    "url": "page-data/services/soundplayer/playground/page-data.json",
    "revision": "8af3ef91a503c79a054514f9ddd61e07"
  },
  {
    "url": "page-data/services/soundplayer/test/page-data.json",
    "revision": "da5d4eada9f20aff118dbde233d1a12b"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "27b0b17001afa100a47d222bf80d7ccb"
  },
  {
    "url": "page-data/services/soundspectrum/playground/page-data.json",
    "revision": "bbe62db0b70505359c4fbaae58c98ce8"
  },
  {
    "url": "page-data/services/soundspectrum/test/page-data.json",
    "revision": "fd5b5cea22d9090e5ba83c7c3f15ce64"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "487263dd0d512d45487eeb4f9b6013d5"
  },
  {
    "url": "page-data/services/speechsynthesis/playground/page-data.json",
    "revision": "980dc1cfaa9125963c45366c72ca7a9f"
  },
  {
    "url": "page-data/services/speechsynthesis/test/page-data.json",
    "revision": "87ac23566d016e20fc5c8bf65569e7a3"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "267604ffddcd1948e60f9ffe23f8b6bc"
  },
  {
    "url": "page-data/services/switch/playground/page-data.json",
    "revision": "ae49a9501721633fd59b3f07db05bf1b"
  },
  {
    "url": "page-data/services/switch/test/page-data.json",
    "revision": "657cc566195d108fd05ea385f48d0957"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "1d215ac93dbe947a7c75501e0205822b"
  },
  {
    "url": "page-data/services/tcp/playground/page-data.json",
    "revision": "3834edfbd658a955fa4ca6f86360f33b"
  },
  {
    "url": "page-data/services/tcp/test/page-data.json",
    "revision": "d8ce73922963a0314bb18a4e5b02c9ec"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "8090c6b4b4cc191aaea0e4010d39554d"
  },
  {
    "url": "page-data/services/thermocouple/playground/page-data.json",
    "revision": "652ba492826a23ca43de26416971517c"
  },
  {
    "url": "page-data/services/thermocouple/test/page-data.json",
    "revision": "cb9867b5a706ce2bc0f21be57aa175b6"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "331a72efa94d237830006b3b84487968"
  },
  {
    "url": "page-data/services/thermometer/playground/page-data.json",
    "revision": "9e1d993598702098907df3edcba530f9"
  },
  {
    "url": "page-data/services/thermometer/test/page-data.json",
    "revision": "4d99cbe09e78066bf3e4b9a31a2df40f"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "220249a01bd4e2dd7f5e6ce8d204e7b5"
  },
  {
    "url": "page-data/services/trafficlight/playground/page-data.json",
    "revision": "e7a9dc5aa296bb4420fc9cc5eb6c0fb0"
  },
  {
    "url": "page-data/services/trafficlight/test/page-data.json",
    "revision": "ec75e589dabe7c6825233f37b4072716"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "27d0de4be8273900fc9ecd33f3a6c478"
  },
  {
    "url": "page-data/services/tvoc/playground/page-data.json",
    "revision": "3e94002fdaf3497fa04cc5d9da33514f"
  },
  {
    "url": "page-data/services/tvoc/test/page-data.json",
    "revision": "057368d68fa1b243ed0b626e980828ea"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "ccb4290c2f4d9ad36f19b33697e0718a"
  },
  {
    "url": "page-data/services/uvindex/playground/page-data.json",
    "revision": "44575c752697edce463dc813d3f9d181"
  },
  {
    "url": "page-data/services/uvindex/test/page-data.json",
    "revision": "e8746816a027697b92b9937465d20694"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "2c4c902d397431484d72ea804aa8cd3c"
  },
  {
    "url": "page-data/services/vibration/playground/page-data.json",
    "revision": "cb90ad78168f1c3ea1b6272abdaabf45"
  },
  {
    "url": "page-data/services/vibration/test/page-data.json",
    "revision": "ef05fa26f45e7d71198007cbe7f9c327"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "25af35fba3727e99bcfcca5f98264ae8"
  },
  {
    "url": "page-data/services/waterlevel/playground/page-data.json",
    "revision": "9082b0bc90dfef7ec38cc8d332b88673"
  },
  {
    "url": "page-data/services/waterlevel/test/page-data.json",
    "revision": "a7baa4f0e8ce4b876e81be7fb7b7bd3b"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "49ffe173fc5425d0770cd4e66fa9ddf1"
  },
  {
    "url": "page-data/services/weightscale/playground/page-data.json",
    "revision": "8a76bf7a39f3d53d1ad9881655cb8cb2"
  },
  {
    "url": "page-data/services/weightscale/test/page-data.json",
    "revision": "7acea6de0536bc9c762e99869c64692a"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "7d85b1712cfcdd3e9a99ea9fc4ed8a86"
  },
  {
    "url": "page-data/services/wifi/playground/page-data.json",
    "revision": "a8c2d441b3782e183b7041acb21e6f1f"
  },
  {
    "url": "page-data/services/wifi/test/page-data.json",
    "revision": "3b8c77ed5153446f0ab159c1e9546a8e"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "8e534775623b414dd735e70c26abea8b"
  },
  {
    "url": "page-data/services/winddirection/playground/page-data.json",
    "revision": "381b7575c30ee1529cc8e7a89b9a151b"
  },
  {
    "url": "page-data/services/winddirection/test/page-data.json",
    "revision": "65612e0649c9021d7dcaecee4e39dfeb"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "03472f4443fc67ab36887f38a10bcdce"
  },
  {
    "url": "page-data/services/windspeed/playground/page-data.json",
    "revision": "399cc98d9b5e3b0d91268b55d19d3583"
  },
  {
    "url": "page-data/services/windspeed/test/page-data.json",
    "revision": "bf2d47900f61836b047dce5a5cb2d25a"
  },
  {
    "url": "component---src-templates-device-company-tsx-513ac2a3e0dcc17a1b6c.js"
  },
  {
    "url": "page-data/devices/microsoft/research/page-data.json",
    "revision": "f2bb67c9331ec03a73e11f37679c13e5"
  },
  {
    "url": "8e9e0d5773dc3c506f63656e499090b1434d20f3-5e93cd2540725909a305.js"
  },
  {
    "url": "7cd3ff411e9678ea7bece3fcd2fcfaadcd228989-b58236520aa6c13dacb4.js"
  },
  {
    "url": "5cb7c78286c5fcecf4d3c60360196e55585b6a15-eea426ddf8763f126eae.js"
  },
  {
    "url": "913832d59ba65bf5a995efa1c4e48fc9101c7c83-356c32958622053595dd.js"
  },
  {
    "url": "component---src-templates-device-tsx-ce937dc51ba7798c13f1.js"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccv2/page-data.json",
    "revision": "58681cfaa6dd8fd971c97f4000fed01f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadebtnv20/page-data.json",
    "revision": "f708231f4cab563b10a50d000d226665"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadecontrolsv2/page-data.json",
    "revision": "e23fff0ac334c79503b4219c8573030e"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankbtnv2/page-data.json",
    "revision": "cd6543b160167a5bd6677092ab06e29e"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankv2/page-data.json",
    "revision": "09a7cf3370784ad14e60fedcebc3df1b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmgamepadv2/page-data.json",
    "revision": "f40b19abf490970e277d0a9660f61ab9"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmachinelearning/page-data.json",
    "revision": "69ddc390731919921864433a2cdbaee3"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmotorv21/page-data.json",
    "revision": "c90005480bf222d3062dcae0d0f713b2"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpower/page-data.json",
    "revision": "ce7d423bfda4f1c1b0f2c0634c32fe63"
  },
  {
    "url": "page-data/devices/microsoft/research/jmprotov20/page-data.json",
    "revision": "a4a934598e75a2330af9c06474c98f01"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmnpxv20/page-data.json",
    "revision": "ec22906433dfc129c6486c31d3441ac0"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmnpxv21/page-data.json",
    "revision": "f7bdad83b8c1cdd2a1a25bd2e4813b2e"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov20/page-data.json",
    "revision": "b96a6b6509019eb35a6c9f2ac4b57f94"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov21/page-data.json",
    "revision": "0d171120ec122ffa3bd6ad0aa6fb6c8b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsliderv2/page-data.json",
    "revision": "1980ec65cc78a5758062280c7cb0a62a"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsndv20/page-data.json",
    "revision": "aa257984b2873e9b689a2e588b30c4d0"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtouchprotov20/page-data.json",
    "revision": "b32b020117a3f7999711e8b164a7de4f"
  },
  {
    "url": "page-data/devices/microsoft/research/thermometerhumidity/page-data.json",
    "revision": "ff1ee49699fd97b64f22a52156782eaf"
  },
  {
    "url": "component---src-pages-tools-azure-device-twin-designer-tsx-c9b52c10d037bd43052c.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "37836a66d9876ad5686553d849b3d175"
  },
  {
    "url": "component---src-pages-tools-collector-tsx-0e89b5d852d6843f02fb.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "740b8be8955088435bedfff205ccd1db"
  },
  {
    "url": "component---src-pages-tools-device-registration-tsx-bbe09824980b422b4a73.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "b75fc9ebf275129bb02372ae4ad3deea"
  },
  {
    "url": "a77c613bd0faa103b953c0d40475a17f2d569635-70daa8e5b43467c281f9.js"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-tsx-cd1913e59f93b12328c7.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "d1ca564ce9303b77123a5e2485dde4ef"
  },
  {
    "url": "component---src-pages-tools-flood-test-tsx-8f61e81d446f50380bec.js"
  },
  {
    "url": "page-data/tools/flood-test/page-data.json",
    "revision": "dd09d2acac71f8d45909dee0ce116cca"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-78e2885ca36df3346cc4.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "537cd8f4ac8e0a6a3acac3ec1624aebb"
  },
  {
    "url": "component---src-pages-tools-makecode-mdx-bd51b9537b604dc9ca80.js"
  },
  {
    "url": "page-data/tools/makecode/page-data.json",
    "revision": "dc554b5a7b3bba043dc9096b8a2927b6"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-tsx-223f623229a62accc2b8.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "fff97a63d7d76d0afb3e023b1d340b17"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-tsx-dbf2d94171b0d41fb443.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "bd96c922a5d94dbf672ae5913bb0ec74"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "7095019d6130ac9f259d741d39146031"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-tsx-cac8acc8841061095f42.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "8d41d6f7c470c9b9da7bd8d833d96d30"
  },
  {
    "url": "component---src-pages-tools-peers-tsx-63bcc5a2e24408a223ab.js"
  },
  {
    "url": "page-data/tools/peers/page-data.json",
    "revision": "48c3dc7edba995f063946f1d64f232b4"
  },
  {
    "url": "component---src-pages-tools-player-mdx-1a1ed27cfc912b636ad9.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "e92e52f3a9625a37299f7173dd8afda8"
  },
  {
    "url": "component---src-pages-tools-prototest-tsx-4430f1bebdc955513d31.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "b526b7b83a2e46bb8453744a9d82ade5"
  },
  {
    "url": "component---src-pages-tools-service-editor-tsx-bbb8ba5f6782bc4ac135.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "8f949af42a346b761b8afcfd01dc8389"
  },
  {
    "url": "component---src-pages-tools-service-test-tsx-210d79a979db03744048.js"
  },
  {
    "url": "page-data/tools/service-test/page-data.json",
    "revision": "3a03c4eb96659b515f1fd68d486b2465"
  },
  {
    "url": "component---src-pages-tools-service-test-editor-tsx-51359018ac2a7874542e.js"
  },
  {
    "url": "page-data/tools/service-test-editor/page-data.json",
    "revision": "5a13aa78b6a6aa4d72773020892d23b5"
  },
  {
    "url": "component---src-pages-tools-settings-manager-tsx-5e712cdafadf93ae3a3b.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "a92c478f70b14370fa5025d648d0d535"
  },
  {
    "url": "component---src-pages-tools-updater-tsx-836e0864cb9b589d6c67.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "1029f9eaa7b8827479590a35304e0197"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a1ecf38311493f86a105078d4c6ad501"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/jacdac-docs`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/jacdac-docs/app-e2ecceb4dc656a26d631.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/jacdac-docs/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
