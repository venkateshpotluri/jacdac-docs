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
    "url": "webpack-runtime-f6e04938218de56cd0f3.js"
  },
  {
    "url": "framework-3e5fdc5ba728e15d7465.js"
  },
  {
    "url": "styles.bccdf25dec8581450000.css"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a437c2db44b2b2a2be3f6d3e48526959"
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
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-3e31ddc49ffcb4f16006.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "7a2a96ab2788237c8c5a395b4e3a9449"
  },
  {
    "url": "page-data/sq/d/2307937736.json",
    "revision": "dfe196cac281af5781826317e9fd0241"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "60a802ea6801fb33d1e61adf50260b48"
  },
  {
    "url": "page-data/sq/d/2898794040.json",
    "revision": "c5fc1e98c61754925dd5069b4079a7b1"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "b1adc72b1b5d5cf4d4ba85c152514807"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "80aa6e6efba2ffcbce2f0a66da63af79"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "3baa316e7a0ca123d329cf0a2ce5977f"
  },
  {
    "url": "polyfill-963c963924ca4e59ffb6.js"
  },
  {
    "url": "component---src-pages-404-mdx-3f22a7fae79c1070091a.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "af358e229d10e4282a8ee2c1d135945c"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "0a37758104877c86af86e21d944a2969"
  },
  {
    "url": "component---src-pages-clients-mdx-9600d342b56b51d28a80.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "9be0850a21e1c0fbd7afa699649413b0"
  },
  {
    "url": "component---src-pages-connector-mdx-4a0cff07e8d4a4cea47f.js"
  },
  {
    "url": "page-data/connector/page-data.json",
    "revision": "74243350f565b1856d3b83287adc7a22"
  },
  {
    "url": "f3f9a1d234f307307be1d4bf4437cd8455a717d6-204b076976d14705fb69.js"
  },
  {
    "url": "fe9279ec7271a7ecc6fc46a8f018953abef65561-1a2f64cdf02de6acd35e.js"
  },
  {
    "url": "deb97fadcdb336410d490ca599ff7abf3b046268-f74b28a72fd490a8c421.js"
  },
  {
    "url": "279d7c0160efc70f7737bb3340d7c079de5c561a-785fdfa7708ebb067402.js"
  },
  {
    "url": "73adcdd8a542553a7ae3e11b5d40c78a618eeada-19c6c29f05dc3ff320c6.js"
  },
  {
    "url": "7c900424e1ceeb16f5253194a4f36ae3d870ef6d-7332ab5c03623a003bc5.js"
  },
  {
    "url": "6b6990f222072935044e69ef7f8d8ea69768f871-db40d97e1633f498ff53.js"
  },
  {
    "url": "88b687c320850ad20070f01d10769eb670cd687e-cc0459600d5ebb2d51e9.js"
  },
  {
    "url": "985414420a02a193492b3ec3e8f53f05278e3b6a-ec14dcb1682029618529.js"
  },
  {
    "url": "764b3c2138e8ca093be82979494a11d3d5314f45-3992d542df91fc9ea2cc.js"
  },
  {
    "url": "component---src-pages-dashboard-tsx-51145672e9543031838c.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "2dd8b60e5e0fed22adb82f2435f2024f"
  },
  {
    "url": "97c3b2d01729d14971f44dc6012293e420701658-0e801c83bf065745a2d5.js"
  },
  {
    "url": "component---src-pages-devices-tsx-d4be1070c395322208be.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "481c224c126f99e1075e8edcb5be958d"
  },
  {
    "url": "component---src-pages-dtmi-mdx-9db7714e2abfc45a6a73.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "266334ed60e1b9e66ae66252b9b62dc4"
  },
  {
    "url": "component---src-pages-errors-mdx-e8961c38ca61cfa6e753.js"
  },
  {
    "url": "page-data/errors/page-data.json",
    "revision": "a0c407976ab058f6a1191d2b004f5bc1"
  },
  {
    "url": "component---src-pages-github-tsx-0b2aba127bdadb5b7c56.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "202ca2fecd59aa43ea19ed470d059a13"
  },
  {
    "url": "component---src-pages-index-mdx-3d44278273c3db40eb9f.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "4b07ca5daf94c60bebf97d09492e0a1e"
  },
  {
    "url": "component---src-components-spec-tsx-2e114b25e27ec6a8ed9d.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "c5a6acb138e02949b55e754a68fcdb43"
  },
  {
    "url": "ea5bec84f4245e322b43fa433fccf95de0449133-1c239bba719a1bce159c.js"
  },
  {
    "url": "6e6f508a4d48336b02c09c52b4663db8917995a6-95e604546f0aa40f02c1.js"
  },
  {
    "url": "component---src-pages-services-tsx-85f983efae5e55da141e.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "cfb6b126f9f5c54b6d24ce90411e962f"
  },
  {
    "url": "component---src-pages-tools-mdx-cec8e8543a1618ea6dc6.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "466d0e3bcdc0d21cab062433da09d5cd"
  },
  {
    "url": "component---src-pages-traces-mdx-888308eff3efe87392cf.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "04909856718313dcd238e615435ee61b"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "d8d32fecf66c4ad223482fee702d4ea9"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "8621769facaaca2e90a660faa3b65412"
  },
  {
    "url": "page-data/reference/led-status/page-data.json",
    "revision": "e68c43a411610a6e1d7a68f7f9a1cc46"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "43fe46ca98fed64e67fe32959ed7b292"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "2de4433416f66cedfb261216be46ed03"
  },
  {
    "url": "page-data/reference/service-tests/page-data.json",
    "revision": "ea54f4f156ce50ff4185866553db6d7f"
  },
  {
    "url": "component---src-templates-service-tsx-06ebbacebb94bec274f6.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "a00aab9c75ef399596d46474141f5429"
  },
  {
    "url": "de590f55fa2f17e49ed8680dc5a022fe834f3017-bee8f8b78cf97b6fd534.js"
  },
  {
    "url": "4a1ae24c5787588155db61b49605b5d07aa26ddb-3e7177e9fd26f3daf11c.js"
  },
  {
    "url": "component---src-templates-service-playground-tsx-ed8d67fde1ecabe75856.js"
  },
  {
    "url": "page-data/services/_base/playground/page-data.json",
    "revision": "94c0c51ebd7c3297856570ca01b7365f"
  },
  {
    "url": "39504046960eea78697a10eb737b49eea4403ae4-6cf785de7c00416bf8be.js"
  },
  {
    "url": "859a83de993caea7524bf57c2975f3be6812c8c3-6675b6e068a712ac7c64.js"
  },
  {
    "url": "component---src-templates-service-test-tsx-f5402a2edfa0579dcecc.js"
  },
  {
    "url": "page-data/services/_base/test/page-data.json",
    "revision": "5b4adb0de371e9cc9517e762b540f80e"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "b31ae7d9f4d938e06509fb1c58d57504"
  },
  {
    "url": "page-data/services/_sensor/playground/page-data.json",
    "revision": "83ac7823c6d9a4dd8944637bd09ffb02"
  },
  {
    "url": "page-data/services/_sensor/test/page-data.json",
    "revision": "ae8891139e40a4d36a2709b28d6cc908"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "aeba2f136176c596ca3a3d16c1ed0546"
  },
  {
    "url": "page-data/services/_system/playground/page-data.json",
    "revision": "fc82f5f55c529ddbad95e2b8aff105d0"
  },
  {
    "url": "page-data/services/_system/test/page-data.json",
    "revision": "129f55fdc520a8d560e6c07e6fdae82a"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "9fbd068eb9ac29d52f64616f348c0854"
  },
  {
    "url": "page-data/services/accelerometer/playground/page-data.json",
    "revision": "a3959463394d9705b9d75c83ac50bf97"
  },
  {
    "url": "page-data/services/accelerometer/test/page-data.json",
    "revision": "7b3def4ddbc0da36f3ac1a460e873321"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "4e3d7b50dc856567d570583fbd872f8c"
  },
  {
    "url": "page-data/services/arcadegamepad/playground/page-data.json",
    "revision": "83618279b11e809be75d4c7be0a1916d"
  },
  {
    "url": "page-data/services/arcadegamepad/test/page-data.json",
    "revision": "40e28787e84c7e00a58d8201a4a92395"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "b52affc04d4fdd1e2fa984a37da3260a"
  },
  {
    "url": "page-data/services/arcadesound/playground/page-data.json",
    "revision": "b6d9e4a3cab1bdecdfdb2cf258eb4846"
  },
  {
    "url": "page-data/services/arcadesound/test/page-data.json",
    "revision": "7b27404d1652fcef0b3e58cb2341f44b"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "c4d97f0e5f53f3e42c7552213c00b754"
  },
  {
    "url": "page-data/services/barcodereader/playground/page-data.json",
    "revision": "e70d355c2c0a5142fba3bd2d9f1018bf"
  },
  {
    "url": "page-data/services/barcodereader/test/page-data.json",
    "revision": "8e8932787ef9fd7c9862197e0f01e865"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "bf3a02dbc6afa563d305be3d0325b1c2"
  },
  {
    "url": "page-data/services/barometer/playground/page-data.json",
    "revision": "7137cd8c4aa1e12be34d9851e8aba5d4"
  },
  {
    "url": "page-data/services/barometer/test/page-data.json",
    "revision": "10352dbcf17d9092333355dde3982644"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "8b7d5a14bb6b416cb0eefe50a54c0e0d"
  },
  {
    "url": "page-data/services/bitradio/playground/page-data.json",
    "revision": "2a6d658fae12c869d84ac4adbedd22fe"
  },
  {
    "url": "page-data/services/bitradio/test/page-data.json",
    "revision": "6484eb230ce0162daf52fddcd90bf4d8"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "a9cd19c733d063fc059f87426b91afeb"
  },
  {
    "url": "page-data/services/bootloader/playground/page-data.json",
    "revision": "00191fbb8e072a1bcbbbcdf4c3dd28bd"
  },
  {
    "url": "page-data/services/bootloader/test/page-data.json",
    "revision": "fc79cbcfa717d289027cbc7ba007822e"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "4a83c804426f3681cf3625849fd04d48"
  },
  {
    "url": "page-data/services/button/playground/page-data.json",
    "revision": "ce06948d4d336f77bda7be6b2e9cb63a"
  },
  {
    "url": "page-data/services/button/test/page-data.json",
    "revision": "81fb8125eb69bec736d0f74c5172f370"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "ab1e1320b0d86a05e54a60f3717c732c"
  },
  {
    "url": "page-data/services/buzzer/playground/page-data.json",
    "revision": "3944885f532bc7f63d5b27813d14d95d"
  },
  {
    "url": "page-data/services/buzzer/test/page-data.json",
    "revision": "35c2b515c3972514c41a9ac722a72072"
  },
  {
    "url": "page-data/services/capacitivebutton/page-data.json",
    "revision": "40151bfce0a7bce0d2a306f1a155fc9c"
  },
  {
    "url": "page-data/services/capacitivebutton/playground/page-data.json",
    "revision": "09c168dfdb218791ef4e55dcc9ea98b8"
  },
  {
    "url": "page-data/services/capacitivebutton/test/page-data.json",
    "revision": "95128609479bda151eee722ff8083e94"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "e00763a8ec128506da130d030d4aeb0c"
  },
  {
    "url": "page-data/services/characterscreen/playground/page-data.json",
    "revision": "7af0dca8ea7f127231991b4f17ca2e1c"
  },
  {
    "url": "page-data/services/characterscreen/test/page-data.json",
    "revision": "174efc640e7a0c6af1f2233a58a25288"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "9a483abff301266474ba485b2a6926c1"
  },
  {
    "url": "page-data/services/color/playground/page-data.json",
    "revision": "3b8f263c15cb5238813491804181f9cb"
  },
  {
    "url": "page-data/services/color/test/page-data.json",
    "revision": "47795ec694727745b5d68567e709f162"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "ee80d519b3cc59a3fb622767412bac62"
  },
  {
    "url": "page-data/services/compass/playground/page-data.json",
    "revision": "236d81d96fdab1483a41f1798e009a68"
  },
  {
    "url": "page-data/services/compass/test/page-data.json",
    "revision": "ba32a7114cdc4d598a56461c8fda60f8"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "0d9e0ea95d53415e79787d6bdaa95fa7"
  },
  {
    "url": "page-data/services/control/playground/page-data.json",
    "revision": "ff41bb0798cc92835bdd28a44f7b4852"
  },
  {
    "url": "page-data/services/control/test/page-data.json",
    "revision": "482d3fa5d4f4a0eb5a77cc72c0b65ed8"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "14cddfbfd6eb94599b6d90525852145b"
  },
  {
    "url": "page-data/services/distance/playground/page-data.json",
    "revision": "fd814891ccbe528439c3c37b1c43a3e6"
  },
  {
    "url": "page-data/services/distance/test/page-data.json",
    "revision": "e05a3742258efb49b942e21569465e51"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "1210ceb35c1ffcd3fbdad3903df1cbe4"
  },
  {
    "url": "page-data/services/dmx/playground/page-data.json",
    "revision": "d0d247d1640d005e1860d9ad867e566b"
  },
  {
    "url": "page-data/services/dmx/test/page-data.json",
    "revision": "c2b07bd9fc6ee24e14511949ad109eca"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "83d5265b383249213859239b73816c53"
  },
  {
    "url": "page-data/services/eco2/playground/page-data.json",
    "revision": "ab248708536af3c07e81b76d63803fbc"
  },
  {
    "url": "page-data/services/eco2/test/page-data.json",
    "revision": "79637ed3d34f3fb247e0202bacba1321"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "371155b64be7a216a86bf83a32fe8a0a"
  },
  {
    "url": "page-data/services/gyroscope/playground/page-data.json",
    "revision": "c4076e73a87fa6690559c8d68504c59f"
  },
  {
    "url": "page-data/services/gyroscope/test/page-data.json",
    "revision": "c60ea5c91a238da8a35e981de9164bea"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "992d84581fb74d08705e02be9e4bff4d"
  },
  {
    "url": "page-data/services/heartrate/playground/page-data.json",
    "revision": "befb0f9d1e1f0fd9eac6a26254d8c3a3"
  },
  {
    "url": "page-data/services/heartrate/test/page-data.json",
    "revision": "2e70767e00164ebf77ce33c9d954ef82"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "b3fb3543415ee329edc026c89c7fd2a2"
  },
  {
    "url": "page-data/services/hidkeyboard/playground/page-data.json",
    "revision": "e7b9a10e078a1618081ef9b711e3be0e"
  },
  {
    "url": "page-data/services/hidkeyboard/test/page-data.json",
    "revision": "dbf305c318c378e7dd78b2cca8198aec"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "92c0fd8248c757dfe368858f43548f24"
  },
  {
    "url": "page-data/services/hidmouse/playground/page-data.json",
    "revision": "9819fc55a35d3cc09f495d569110f93a"
  },
  {
    "url": "page-data/services/hidmouse/test/page-data.json",
    "revision": "37387c5f8414c6b027d6cc8a4d9f1528"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "234db406abdd647807e4c5aa8b19b282"
  },
  {
    "url": "page-data/services/humidity/playground/page-data.json",
    "revision": "defe1a2ccd5e26e063645e4753d96ff2"
  },
  {
    "url": "page-data/services/humidity/test/page-data.json",
    "revision": "5cfc8be27703b68e89886f427fe6fd15"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "a0d6a3714591db06981098ae30d5f534"
  },
  {
    "url": "page-data/services/illuminance/playground/page-data.json",
    "revision": "5a08b6e0bf566a6fd6a1fbc262c2d821"
  },
  {
    "url": "page-data/services/illuminance/test/page-data.json",
    "revision": "1cbfe3894f80613641236a14bdf7b6c5"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "3beb279f00eaf1f4c80812b05a4f1989"
  },
  {
    "url": "page-data/services/indexedscreen/playground/page-data.json",
    "revision": "09229b3c8e48c45d401a7bfacea53897"
  },
  {
    "url": "page-data/services/indexedscreen/test/page-data.json",
    "revision": "ec515593b93c0b0b862948346700e1cb"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "3b81861ae139ed7dc25c9bd57cda3b2c"
  },
  {
    "url": "page-data/services/iothub/playground/page-data.json",
    "revision": "732e965c0e970e75245df5cf9f98aa93"
  },
  {
    "url": "page-data/services/iothub/test/page-data.json",
    "revision": "ef7e77040881929356636c487c3690b0"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "2c67baf0c9b7d06548d44ff5c513b5ba"
  },
  {
    "url": "page-data/services/joystick/playground/page-data.json",
    "revision": "2ee0c4c501a1d88691ee69d6258ab899"
  },
  {
    "url": "page-data/services/joystick/test/page-data.json",
    "revision": "08d4fc76cac58bda558c15a1dc269cde"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "c731abc228f75bb76ba8611a3da84fc1"
  },
  {
    "url": "page-data/services/led/playground/page-data.json",
    "revision": "d7efdf087d952af94fa49f3f78d98bc4"
  },
  {
    "url": "page-data/services/led/test/page-data.json",
    "revision": "3a5d97a3d16515aa56de3f4cddedf1f2"
  },
  {
    "url": "page-data/services/ledmatrix/page-data.json",
    "revision": "b8d9b2afd2111bbe24607aa58d348b0b"
  },
  {
    "url": "page-data/services/ledmatrix/playground/page-data.json",
    "revision": "0a3c568499128cbddf05ab9f766f3fb0"
  },
  {
    "url": "page-data/services/ledmatrix/test/page-data.json",
    "revision": "0370384e7a78ac643f394c9e222f66c6"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "c694812ed00a44cce633ea8df7eea512"
  },
  {
    "url": "page-data/services/ledpixel/playground/page-data.json",
    "revision": "f19707196d691de44da3625b427984ef"
  },
  {
    "url": "page-data/services/ledpixel/test/page-data.json",
    "revision": "d36885c66e9f406c20b321153384d800"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "f11b3dbe796586513b09b0f6d8783d98"
  },
  {
    "url": "page-data/services/lightlevel/playground/page-data.json",
    "revision": "f89c58615674b05935810573fe73dc72"
  },
  {
    "url": "page-data/services/lightlevel/test/page-data.json",
    "revision": "c189a72627dffc3f132d1532a31653fa"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "84bac21e3a6b05b5abab00691c20451f"
  },
  {
    "url": "page-data/services/logger/playground/page-data.json",
    "revision": "12d94ba4101bfec2220aa0cead6310fd"
  },
  {
    "url": "page-data/services/logger/test/page-data.json",
    "revision": "5467953bf7981701c0aca681b92121b9"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "2c3ea574f55ef254def7788bd56bc20b"
  },
  {
    "url": "page-data/services/magnetomer/playground/page-data.json",
    "revision": "b82caf7902c55fa9fcba5bfce5a8e14f"
  },
  {
    "url": "page-data/services/magnetomer/test/page-data.json",
    "revision": "62e219ce1e3638287795d36876081dd1"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "5c503476475677b829c388239ec1b9f1"
  },
  {
    "url": "page-data/services/matrixkeypad/playground/page-data.json",
    "revision": "176b0dd42cc2c426db487766059c6d4a"
  },
  {
    "url": "page-data/services/matrixkeypad/test/page-data.json",
    "revision": "dd7844a5a6a77aa0fcc616c460b1a2c0"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "87392d6a0848371e3aabe93e448d2160"
  },
  {
    "url": "page-data/services/microphone/playground/page-data.json",
    "revision": "a62716fb5b32d60031373b17af119353"
  },
  {
    "url": "page-data/services/microphone/test/page-data.json",
    "revision": "9fd13f600bc93e0118ebc7f2ee390bf9"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "176c248f9d0d2c70b217db249d5070de"
  },
  {
    "url": "page-data/services/midioutput/playground/page-data.json",
    "revision": "94dd813b679b3220822e643f099d8903"
  },
  {
    "url": "page-data/services/midioutput/test/page-data.json",
    "revision": "d2f900652c3eb035754331fd88b3354a"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "0b2b96c08f8758efc8359de257935fae"
  },
  {
    "url": "page-data/services/modelrunner/playground/page-data.json",
    "revision": "feac809edbfe100a39aaa20d9bbb2c7a"
  },
  {
    "url": "page-data/services/modelrunner/test/page-data.json",
    "revision": "dc153e3605e1ddb98e781500cc38c3f0"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "355d2651134ffbfc917ca57ac2790b76"
  },
  {
    "url": "page-data/services/motion/playground/page-data.json",
    "revision": "4ea301b7150e94542798328d1341d8d0"
  },
  {
    "url": "page-data/services/motion/test/page-data.json",
    "revision": "345b007486b67ea9e071258911afab66"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "dbc20ede7dde0840559ac418ab18f08b"
  },
  {
    "url": "page-data/services/motor/playground/page-data.json",
    "revision": "f2d5769d0ac5ccdd7bbb1d9ffaf475e2"
  },
  {
    "url": "page-data/services/motor/test/page-data.json",
    "revision": "0ff1cb5097fa5fff4a383f92188c231a"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "ce52935d8b7462be4d52a585d174c61b"
  },
  {
    "url": "page-data/services/multitouch/playground/page-data.json",
    "revision": "df46c657f21f167063d61126f391a511"
  },
  {
    "url": "page-data/services/multitouch/test/page-data.json",
    "revision": "3436a559c5699faebe9f9e3c78cc55cf"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "7cb7dc714072b848d05b4e191cceda0d"
  },
  {
    "url": "page-data/services/potentiometer/playground/page-data.json",
    "revision": "09532680b434ba0e67093e603ef01b9d"
  },
  {
    "url": "page-data/services/potentiometer/test/page-data.json",
    "revision": "5fa3e9882e57f4affeabffbb033ee4a6"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "0cbd08703cd1951a8b636a38d308c030"
  },
  {
    "url": "page-data/services/power/playground/page-data.json",
    "revision": "93767f6b3c7e98d12600624568e7950f"
  },
  {
    "url": "page-data/services/power/test/page-data.json",
    "revision": "8e494bbdb5fdcc6a4bce08577ae55379"
  },
  {
    "url": "page-data/services/pressurebutton/page-data.json",
    "revision": "9879376c94afc17d1cfeaee8371f4f68"
  },
  {
    "url": "page-data/services/pressurebutton/playground/page-data.json",
    "revision": "2244046bb87cd6fdea9947a211322af4"
  },
  {
    "url": "page-data/services/pressurebutton/test/page-data.json",
    "revision": "2e7a407eec030f9bad4043485ecb27b0"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "596198dc56c763afa4639183d0804642"
  },
  {
    "url": "page-data/services/prototest/playground/page-data.json",
    "revision": "5c53d5697bc7cd3eaa924286038b9aa6"
  },
  {
    "url": "page-data/services/prototest/test/page-data.json",
    "revision": "b9ad6c30c06211bd78baa6c06c440b5b"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "1b0862344b37d15b3a513980f55f8fb7"
  },
  {
    "url": "page-data/services/pulseoximeter/playground/page-data.json",
    "revision": "99e5eea345b2732c6712cbcb90967ba4"
  },
  {
    "url": "page-data/services/pulseoximeter/test/page-data.json",
    "revision": "8244b47d023deb5ab4d0140322965fb2"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "df264f42eaff4683cbb45c62a2384b09"
  },
  {
    "url": "page-data/services/raingauge/playground/page-data.json",
    "revision": "0b1f403254f1bf9e9a17a351cdd478c0"
  },
  {
    "url": "page-data/services/raingauge/test/page-data.json",
    "revision": "b484433aa55e2dcd5f70ba2e6f3bcc98"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "5b98630684f562df1c12a4a392103ed8"
  },
  {
    "url": "page-data/services/realtimeclock/playground/page-data.json",
    "revision": "6c7ddf680a58293f5d54d93575a7f1e8"
  },
  {
    "url": "page-data/services/realtimeclock/test/page-data.json",
    "revision": "04868cbc499d98488ee809bea426172a"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "48c2265fc24b90c3b1d6d9d3e1dffc0e"
  },
  {
    "url": "page-data/services/reflectedlight/playground/page-data.json",
    "revision": "2ddef2acd8efb26140a0e232062c318d"
  },
  {
    "url": "page-data/services/reflectedlight/test/page-data.json",
    "revision": "75134a69e0426b803ed06adcf587e68b"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "998d4ccedc3dacb4ca27927581415c51"
  },
  {
    "url": "page-data/services/relay/playground/page-data.json",
    "revision": "1a8823fe3ab2c2cb8a03995f3885d012"
  },
  {
    "url": "page-data/services/relay/test/page-data.json",
    "revision": "9ff5e50c77d481ea5e61c39e2f6295d3"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "eee8acc515209b1158ec58b2219c8ef3"
  },
  {
    "url": "page-data/services/rng/playground/page-data.json",
    "revision": "647f29943a386b6ef8deaa50cf9b7702"
  },
  {
    "url": "page-data/services/rng/test/page-data.json",
    "revision": "3d176dcb72f55eae638f385783d2eadd"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "fda7814813a544bfa0550c55d6366780"
  },
  {
    "url": "page-data/services/rolemanager/playground/page-data.json",
    "revision": "1ef63f3fcd748d8b8d91b9d6d5201dee"
  },
  {
    "url": "page-data/services/rolemanager/test/page-data.json",
    "revision": "5f1dd8eddc0886238ce66ebbd1f2ad51"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "e267010382a2842692c49c860ef6f46a"
  },
  {
    "url": "page-data/services/rotaryencoder/playground/page-data.json",
    "revision": "36b3c6d124e7b777ddd1bbf4b68cd690"
  },
  {
    "url": "page-data/services/rotaryencoder/test/page-data.json",
    "revision": "b7bc3c044233a67efdd9890104434f17"
  },
  {
    "url": "page-data/services/rover/page-data.json",
    "revision": "dc523e431af49cb5ec4e54ed52768094"
  },
  {
    "url": "page-data/services/rover/playground/page-data.json",
    "revision": "552ddec28fb88ebc0dfa7389a057f77c"
  },
  {
    "url": "page-data/services/rover/test/page-data.json",
    "revision": "acbe9869146cb92537cc2b186478617e"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "f856cb3fe9aea4dad012ab8c1b8bdf80"
  },
  {
    "url": "page-data/services/sensoraggregator/playground/page-data.json",
    "revision": "bc23e533fd82be8a497d86eea5afbe0b"
  },
  {
    "url": "page-data/services/sensoraggregator/test/page-data.json",
    "revision": "2318d80e71a6d5a05efb88c8be4bd74a"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "d86a9f1a2d9150ada0e931139f3b55ff"
  },
  {
    "url": "page-data/services/servo/playground/page-data.json",
    "revision": "d9364c33ba3f5d684f5e68d7f56064fa"
  },
  {
    "url": "page-data/services/servo/test/page-data.json",
    "revision": "70b56c7c93408a95bd219d7d9f70a58e"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "c2185f7db37e1c56d3c57edd94be6748"
  },
  {
    "url": "page-data/services/settings/playground/page-data.json",
    "revision": "e77f5cee6cc0d1f20c44a9274cf18477"
  },
  {
    "url": "page-data/services/settings/test/page-data.json",
    "revision": "d32cdb5a37c0ccb4814b367269effc23"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "27b3acc06b1e225c9dfa68e0788aaebf"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/playground/page-data.json",
    "revision": "0845ce759d6b1fd09b979a12d6f1885f"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/test/page-data.json",
    "revision": "56cbf78ac3112c531ff37cbf79e1eadd"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "055ea59d75e33afaf2064077f392730d"
  },
  {
    "url": "page-data/services/soilmoisture/playground/page-data.json",
    "revision": "813bcaeb84c9aa9bc3f20ab3cf74a9c5"
  },
  {
    "url": "page-data/services/soilmoisture/test/page-data.json",
    "revision": "da803767d8b29a9a777e45794debaf05"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "93563b0249989e4bc9ef998036101587"
  },
  {
    "url": "page-data/services/solenoid/playground/page-data.json",
    "revision": "52b8d2a1669479b21502024af08a4d47"
  },
  {
    "url": "page-data/services/solenoid/test/page-data.json",
    "revision": "7ac06c8d3fb043fc621ba1e7b6b63d53"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "f2a3b962df5bb52d0f85a65248f188a8"
  },
  {
    "url": "page-data/services/soundlevel/playground/page-data.json",
    "revision": "56b4df804c54a27a393793cd1782b5e2"
  },
  {
    "url": "page-data/services/soundlevel/test/page-data.json",
    "revision": "00ccb86370d472b06055b6e654947b5b"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "774391cf4627dfd716bd8c53d295891b"
  },
  {
    "url": "page-data/services/soundplayer/playground/page-data.json",
    "revision": "e8ece0a420a1bdc2b245bc065826007c"
  },
  {
    "url": "page-data/services/soundplayer/test/page-data.json",
    "revision": "0f389c2922629fd8d5d3a198e945b61c"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "6b55b26741e3f3ea75a543e471d635ff"
  },
  {
    "url": "page-data/services/soundspectrum/playground/page-data.json",
    "revision": "c14e35315157518350704421844d67bc"
  },
  {
    "url": "page-data/services/soundspectrum/test/page-data.json",
    "revision": "e92eb3403866abf24adad2e1860de4b4"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "d583edfd9e3874d14e1c4e2c7e3a9718"
  },
  {
    "url": "page-data/services/speechsynthesis/playground/page-data.json",
    "revision": "a2763f22d4ded26c82d5a489e3eef6b9"
  },
  {
    "url": "page-data/services/speechsynthesis/test/page-data.json",
    "revision": "ec331eb43257d24a758241fce1d0f2c8"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "4f9d2c9d9425ae4230103d45842e650d"
  },
  {
    "url": "page-data/services/switch/playground/page-data.json",
    "revision": "8d38e8e0ae4bc503bb1df6701c5b910d"
  },
  {
    "url": "page-data/services/switch/test/page-data.json",
    "revision": "09412f850f4c130992f70cb2bcd83e42"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "a5cbaaf5e4d4d8abcefa51508a881512"
  },
  {
    "url": "page-data/services/tcp/playground/page-data.json",
    "revision": "803583ac1738297fb9e39f0f93c70c38"
  },
  {
    "url": "page-data/services/tcp/test/page-data.json",
    "revision": "c9a78b67edcd0c7d9d9d041fb4fe3003"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "093793d3c32529982f1663ab4f919094"
  },
  {
    "url": "page-data/services/thermocouple/playground/page-data.json",
    "revision": "20dc9abb6bbe8b985808750074bafc39"
  },
  {
    "url": "page-data/services/thermocouple/test/page-data.json",
    "revision": "d57609e37a8a3e5bde0252656588191a"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "d67dfda345433766bc060e0c1ad32a05"
  },
  {
    "url": "page-data/services/thermometer/playground/page-data.json",
    "revision": "eb9cd5ab951872a70b6257078f4c0ae7"
  },
  {
    "url": "page-data/services/thermometer/test/page-data.json",
    "revision": "571366b81e06e602b827782167f5b40c"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "4799bafe35bf1cbf4b7866a54504619b"
  },
  {
    "url": "page-data/services/trafficlight/playground/page-data.json",
    "revision": "6ef74b676063196e866b8a7ff8467cdb"
  },
  {
    "url": "page-data/services/trafficlight/test/page-data.json",
    "revision": "e3127ac2e0fcd2e73e725435adbc0e73"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "c8ac5ebb6249029c893b83b92170842c"
  },
  {
    "url": "page-data/services/tvoc/playground/page-data.json",
    "revision": "01786d417e0397421f4f4ac98adba0e0"
  },
  {
    "url": "page-data/services/tvoc/test/page-data.json",
    "revision": "faca393d2cd6c08f0b0dc17e0a636a47"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "0731fbe29c3d474e443386ba2cdb002a"
  },
  {
    "url": "page-data/services/uvindex/playground/page-data.json",
    "revision": "7f34391b0adde5f8201073cee02331dc"
  },
  {
    "url": "page-data/services/uvindex/test/page-data.json",
    "revision": "1983120e22b1bde839ffdb3c2663a152"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "e736790818005ab1cb382b14c368c5fb"
  },
  {
    "url": "page-data/services/vibration/playground/page-data.json",
    "revision": "249e05133af6477c7d3caca539050e9a"
  },
  {
    "url": "page-data/services/vibration/test/page-data.json",
    "revision": "74ac4028a8daac491f60b0b8419ff444"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "90fc4491c5c776e61a6968f775dce4d6"
  },
  {
    "url": "page-data/services/waterlevel/playground/page-data.json",
    "revision": "8cd3e9fd50414757b5feb92182cdc8d1"
  },
  {
    "url": "page-data/services/waterlevel/test/page-data.json",
    "revision": "d8bc21f255208eb0b9203bea609c2bdf"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "c48399e8b1bd4b8970c0f5f870b3c9f7"
  },
  {
    "url": "page-data/services/weightscale/playground/page-data.json",
    "revision": "f739006860192b1ffe94228cb4230bb1"
  },
  {
    "url": "page-data/services/weightscale/test/page-data.json",
    "revision": "5cd31f738df7cdfea25cc72f2fb49fae"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "ad54122a6b83990c26c7317010b3cdb0"
  },
  {
    "url": "page-data/services/wifi/playground/page-data.json",
    "revision": "26d4f3693cbe7f8e5262f1f38043d857"
  },
  {
    "url": "page-data/services/wifi/test/page-data.json",
    "revision": "f497b11a967101b20fd2780486f3f12d"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "becb40dcae02998b6c0185c5a4486834"
  },
  {
    "url": "page-data/services/winddirection/playground/page-data.json",
    "revision": "00a333cd25f0e4c66bed8cd71cd9d699"
  },
  {
    "url": "page-data/services/winddirection/test/page-data.json",
    "revision": "f6aac5b8933437ea1f336f1048c1a5a3"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "76013051d51c8eba80aa0953c303ed5f"
  },
  {
    "url": "page-data/services/windspeed/playground/page-data.json",
    "revision": "6e999fe708eb5aecf8fb3850dab6e1dc"
  },
  {
    "url": "page-data/services/windspeed/test/page-data.json",
    "revision": "3e452c0610282e58886cbb9638ff760d"
  },
  {
    "url": "component---src-templates-device-company-tsx-62d63e7a1a231c2d2e90.js"
  },
  {
    "url": "page-data/devices/microsoft/research/page-data.json",
    "revision": "94dbecf430fd027e1c5dd37b083b1fc1"
  },
  {
    "url": "ef01f47eef27202b11bdea13949dd8389e5b6fa8-c9d3e8a14f5242230e6f.js"
  },
  {
    "url": "c11953ab27c90907db3dfe47cf195a4a04b2f2e8-d033c3e3e959cb36ccb8.js"
  },
  {
    "url": "5cb7c78286c5fcecf4d3c60360196e55585b6a15-5d63dff3b0c76ba5b6b6.js"
  },
  {
    "url": "913832d59ba65bf5a995efa1c4e48fc9101c7c83-bdcd4f640e968a32cdd9.js"
  },
  {
    "url": "6362df6d6ad2d4629b1004aa17c180a25ab662e1-e2978b7fa650a4aa120f.js"
  },
  {
    "url": "component---src-templates-device-tsx-6b7d9375b8e878ddae1e.js"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccv2/page-data.json",
    "revision": "238df491d2ebc511dc90612308213b3c"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadebtnv20/page-data.json",
    "revision": "b3dd50ced1711e121d9dad9442ffbe5f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadecontrolsv2/page-data.json",
    "revision": "a60fb202979cce3dd6ca5cbd23779114"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankbtnv2/page-data.json",
    "revision": "69d5b399da5e85dd6fcde41d477e4386"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankv2/page-data.json",
    "revision": "de6af2241b4880003b23f33729abc74f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmgamepadv2/page-data.json",
    "revision": "c49f7a7419989429bacb10d890a3688a"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmachinelearning/page-data.json",
    "revision": "1e144f23fa2f3ef2f419a9badfe00865"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmotorv21/page-data.json",
    "revision": "6ddda3cf7eb79031062d84540835c639"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpower/page-data.json",
    "revision": "5258ce938716c0c02bade424c36b03c1"
  },
  {
    "url": "page-data/devices/microsoft/research/jmprotov20/page-data.json",
    "revision": "bc10ed742e6bcd8baa060650020b9235"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmnpxv20/page-data.json",
    "revision": "5919e2f56c6dc1df7c9e247a0794740a"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmnpxv21/page-data.json",
    "revision": "a82d2b3c9a2df9726ba1f8835ddf9131"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov20/page-data.json",
    "revision": "a448e8fc49facd051dda2e00ada87e7a"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov21/page-data.json",
    "revision": "19ec3284df7950b84e963c5f67d27fac"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsliderv2/page-data.json",
    "revision": "8ac99e9c995c41e28842284d21286181"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsndv20/page-data.json",
    "revision": "dac07c410dcc152663f9c265b6ab755b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtouchprotov20/page-data.json",
    "revision": "77cfdbdca3d92b5839437f97b868dbbb"
  },
  {
    "url": "page-data/devices/microsoft/research/thermometerhumidity/page-data.json",
    "revision": "fc8bd57726b1df41cc0ec5cd57f20d3e"
  },
  {
    "url": "component---src-pages-tools-azure-device-twin-designer-tsx-7325aa56d846849fd4fb.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "ff5285a436ec812b17df5eb8792f62ce"
  },
  {
    "url": "component---src-pages-tools-collector-tsx-06c2a6ac7fcc4724f83a.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "1572e9d03bac7733f1811a6446baf873"
  },
  {
    "url": "component---src-pages-tools-device-registration-tsx-7d82c16f194f915306b0.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "1139da1a73c88b45468e9dd8a5cfcf68"
  },
  {
    "url": "a77c613bd0faa103b953c0d40475a17f2d569635-022787b79271a8978144.js"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-tsx-cd1913e59f93b12328c7.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "d1a7319607b73105408a9de918fd6823"
  },
  {
    "url": "component---src-pages-tools-flood-test-tsx-afc6ac94b0496392b973.js"
  },
  {
    "url": "page-data/tools/flood-test/page-data.json",
    "revision": "677f8989a3f9a1576caaaf8c05db5e42"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-78e2885ca36df3346cc4.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "4a751e68e828ee7cd8ac85ce4b16fa03"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-tsx-a6c95cb79abc4f3ec886.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "8f6256b0f209021e94527886b16a3c47"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-tsx-05e2f7a2ebf78073e0ca.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "6d1b94935036d16de59d8d4bb7fe7c2d"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "846e0ce087c7b98e7eaa8c4225bacd27"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-tsx-e2df3d181be3bb25e7d2.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "3c7d6b3107bf56b6c2128273625f1aed"
  },
  {
    "url": "component---src-pages-tools-peers-tsx-43f93b89cc48048d9d76.js"
  },
  {
    "url": "page-data/tools/peers/page-data.json",
    "revision": "63b4595307209ca97537075a7a1dbf1a"
  },
  {
    "url": "component---src-pages-tools-player-mdx-1a1ed27cfc912b636ad9.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "1e0c394909775532a4d1fd14a1edd2ba"
  },
  {
    "url": "component---src-pages-tools-prototest-tsx-395cf7e0adb63d9d05d3.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "bd2af067366e07e1b37f6dd103dbd8e0"
  },
  {
    "url": "component---src-pages-tools-release-assets-tsx-bfc363534b66890944dc.js"
  },
  {
    "url": "page-data/tools/release-assets/page-data.json",
    "revision": "a6d523f1fc83918342b187e0d839d3dd"
  },
  {
    "url": "component---src-pages-tools-service-editor-tsx-d91c2850334375ec2698.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "58c2a3b5b848d813db14254bff224a2a"
  },
  {
    "url": "component---src-pages-tools-service-test-tsx-210d79a979db03744048.js"
  },
  {
    "url": "page-data/tools/service-test/page-data.json",
    "revision": "392a32860c6f371b25e88acad1871db0"
  },
  {
    "url": "f1139de310d90dc95ca6e4e18c0f2676774ddbf9-c34fdaddd712e06e067f.js"
  },
  {
    "url": "component---src-pages-tools-service-test-editor-tsx-b04b0886c1cdc40af0dc.js"
  },
  {
    "url": "page-data/tools/service-test-editor/page-data.json",
    "revision": "def730d1d1cf2aa826b51909094a80cb"
  },
  {
    "url": "component---src-pages-tools-settings-tsx-448ec39cc21e21c71690.js"
  },
  {
    "url": "page-data/tools/settings/page-data.json",
    "revision": "d3f9d166bda2362b1903214ab87cf158"
  },
  {
    "url": "component---src-pages-tools-updater-tsx-fc11df32d3bf16b48852.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "864c93ce3b218b17339d430700617342"
  },
  {
    "url": "component---src-pages-tools-vm-editor-runner-tsx-30550a84a1afa864d215.js"
  },
  {
    "url": "page-data/tools/vm-editor-runner/page-data.json",
    "revision": "5c830e2f6c40dba7759e509cf271252a"
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-e375ddd2d704263719be.js`))) {
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
