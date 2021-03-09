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
    "url": "webpack-runtime-0afe1962882c2ac44944.js"
  },
  {
    "url": "framework-d2b9019ed825b9acf8aa.js"
  },
  {
    "url": "styles.70142e700204666b4874.css"
  },
  {
    "url": "styles-7707e6ae9f2ec8cfb656.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9f02166ed1e897ab51c521ffd99188b4"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b017944d397662186822.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "5a74bd78d7ee3af02de0513d5fc5540e"
  },
  {
    "url": "page-data/sq/d/2461311362.json",
    "revision": "32d0df5019251c9ecafa068a31a5681b"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "391b854f109df54e4dc18e6b47faf3d6"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "f061dfc53ae24bee83192adc29890f6c"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "744839af34bc83b2beaa07313a386ed5"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "5bef3207d15a67e8d3367f1d0a9131b4"
  },
  {
    "url": "polyfill-59ee27a2411ab13ccf1c.js"
  },
  {
    "url": "component---src-pages-404-mdx-d92eec4f29622d368411.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "ffd315bb8600711ac19bd5e91cb9b155"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "18c946c7c65af143bf05066faaf43af6"
  },
  {
    "url": "component---src-pages-clients-mdx-f236ddb40e7bac664800.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "09a77149ac21d8c19e5431613d15f531"
  },
  {
    "url": "component---src-pages-dashboard-mdx-ccb340511296319f7643.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "df6101fb892e646152c598eb3cfd31da"
  },
  {
    "url": "component---src-pages-devices-mdx-02886106bff594236055.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "db64615ae0b75088711111ec413103a0"
  },
  {
    "url": "component---src-pages-dtmi-mdx-82a51696e1201f561415.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "9a4ff0104e9b72cc4c3210b1af2e90e0"
  },
  {
    "url": "component---src-pages-github-mdx-2b612b19b3037ed9c893.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "630c2bef444c4b97d0b2d12cda2f413c"
  },
  {
    "url": "component---src-pages-index-mdx-51828e9060124481d95b.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "2dd34cc9bc19f62ae2db622f8a8b63b6"
  },
  {
    "url": "component---src-components-spec-tsx-231d7eab293edf26f958.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "bc833387fa5d71c3c1d5663d66d7cf66"
  },
  {
    "url": "component---src-pages-services-mdx-ec5e50d6fe65eee6e4f4.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "1d7f2fd602ca9383c416bbd7d6142f84"
  },
  {
    "url": "component---src-pages-tools-mdx-cff68949109c100c3dd9.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "ace6e2896e4b66f14bb770104f8e66ba"
  },
  {
    "url": "component---src-pages-traces-mdx-a9dedfac44ecd3a51d61.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "9257b4f099ee3a2663d3168e99ab7084"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "6e4cddf6c8e0fe6430657befdb535ff8"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "4c9182d505d638416e0ac5ba687970e8"
  },
  {
    "url": "page-data/reference/led-status/page-data.json",
    "revision": "fee5f1b3fe8dd4ce1afe62df56019a97"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "2ac2d5801f2c0047d57f59498595cdf8"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "4e0324150660fb1b3c190b232e9b5db1"
  },
  {
    "url": "page-data/reference/service-tests/page-data.json",
    "revision": "603ece870d3677c29b23da54d99100aa"
  },
  {
    "url": "component---src-templates-service-mdx-afd0004990cc59085c71.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "871700d7e165ce2cd2fcdb86bc241b00"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "5423c456235e2b2b603cc2f27bfa3451"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "17ab9aac9e0edb85fd43a1118bd0df46"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "702ec6e9daba4f77dd32412e8b172cff"
  },
  {
    "url": "page-data/services/analogbutton/page-data.json",
    "revision": "9fc9dc43df502615b4be3b0a61f45c33"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "c932e63e31a4af3d4a3b21becdd176ba"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "76b7b5362e81e5f092522cf1e72e3c88"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "828e8f91cff0dcf7d6610574a19f2cdf"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "eb2f8cadfb981fff9ec9b40f5790a445"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "f5e8bb342fcebda699fc5eb9b31ae2fe"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "559223e3cca922379e90cd79836b6e01"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "869553000d0670b33ea50c4a865d9c8e"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "50ea42495dfdf2fd83050665f5c46cf2"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "9ab18ffee1388f0b8b32e92c53f13448"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "74d3f842e443d6988bf4d571986066a5"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "6b20d6c6efebfab48de50ac501e95024"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "65c27a4dab2b0fc794b95ece699b8061"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "de00f02353dce83afc65919f0b58c60f"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "85a12d662651f79f42589bafc5d8f4d7"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "6e38e1259c05ab74e72caf960e5bf967"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "79d1623eac11652761dec618cae28fb6"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "3a5afb568cb46a44bd2b3e79b1f38d76"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "812bfec32d9796ebd00080ae7f453def"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "c7b3c2adaea2f906ee752e0e90797a4b"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "040ba150a7840f85bdd6a955a4d9239c"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "4f59f4fce229ac05a27731bb8f460127"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "160e6afdafc280ef2d2707ce82c01e6a"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "351e182615013b632268c8f08e1a0317"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "4c3ca403ea3dba47d38075228258bd66"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "878d801be90667bc5786a50c655d33ba"
  },
  {
    "url": "page-data/services/ledmatrix/page-data.json",
    "revision": "25962769813c0516d03307af8582e9b4"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "ad283aa6cead29104ff0a2d2ab8e2f40"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "79ea132baca5035946a7b9f51bbc362a"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "9f447832edeeef557c49136f9c81e7df"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "f595344c5192702b9ee5ce495a14a566"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "49518f46ecba9c80bc65c05211f59f12"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "f74706d0e13d89d8d6acc564166c453c"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "db316ce2cfc8e7a145afa21564744390"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "d3b44f63ea7c2217916c0907279253d8"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "6a9392a2bf9bab047d3413fae0e1f685"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "ab577ab2103a2598d5b1f904511cfd57"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "33bd9f66e679438897390240dc95547c"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "0ef68d9c8530b0858fbc1953f889cd1d"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "5db928500d409bf41d3d0d99022eb5b9"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "5fec3e7f15f217509c1190aac6b3c988"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "82269cc317b77ee3cc78519c2b719100"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "4900a20ea4b5dbf7885b734a109e5ce9"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "5e2297d11e84fa262c6c9b5930ea66ec"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "1c3de987cdea9aab8574a774c0726810"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "b670c92710f7724aedee6a88777d574a"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "9ac2451b018511e645f453d542b2505a"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "9a79af37fc382f2f21b523d369494329"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "91ea968a39991c775e31532f18d75af7"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "7f8f1e8f2c835dbb040f7a9f433b147a"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "867526d2358ed87fc91cea37af9c5556"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "f61a43c1ac8b8ddae671be9f0b1014d5"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "afd3f9a779a23d8411ecf5f8119d2d42"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "67003e3d60edb05a6efd51f3d9e08a62"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "d9e1988da8a9ec92de1fa6a193f5016f"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "8c9658945e6ebe8d6af4b68d4887d7ec"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "416c7c54a0a34363c15d2c60116bbbd6"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "86b4fdd403210ecc71b78fc8d4e08c98"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "f00d1218c73f94a99f3aa67cad728911"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "37d4a22f43284d04888359a008178378"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "2901242a6eea6d2fc0b4ee0350ce83dc"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "fe4b1e5cc8876b8e46df720d69e33cab"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "a5da23434c8b43248486274681306105"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "f567b027773d9314c675ec965eb30b47"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "c7071e7d0f386592ced49580e545efc6"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "d837d79f363bbab9f9b084ce1f50938a"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "139fdb1ce0fda4e77ee56f1ff9716f3f"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "a88baf62340e09a6f76c55381a473fdd"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "ffa5dd2b46be8b713cba362afb2d2c63"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "4e9d489bca5cd3e0af5a939a6b26023e"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "ed1215f9d31224cafa1e34d9167d9296"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "4db20ddee65f364c0f1e88fa5e03c726"
  },
  {
    "url": "component---src-pages-tools-azure-device-twin-designer-mdx-cd89740eb5e1be4188d2.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "9e4ed175e86eace2c744a49be3c99991"
  },
  {
    "url": "component---src-pages-tools-azure-iot-hub-mdx-7378fb195cf334ec32b3.js"
  },
  {
    "url": "page-data/tools/azure-iot-hub/page-data.json",
    "revision": "f9b6d450e769186ff21ab2237aa59823"
  },
  {
    "url": "component---src-pages-tools-collector-mdx-14ef58a3c99136e6921e.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "0f218f55fe9ec340f1481deed75ac450"
  },
  {
    "url": "component---src-pages-tools-device-registration-mdx-8776bc1ae06703c42575.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "11cbc297746b59503f5c55cdb2f6eb5a"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-mdx-6f65b4053435529069dc.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "ff20462ae64c78625ec6fdc755d43df3"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-efa740bf68c7977d9171.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "51455c6926e906d71d954223180e8f3a"
  },
  {
    "url": "component---src-pages-tools-led-animation-designer-mdx-ab254328e87f0583485a.js"
  },
  {
    "url": "page-data/tools/led-animation-designer/page-data.json",
    "revision": "6e85d9eccf1561638fb05041382a42f6"
  },
  {
    "url": "component---src-pages-tools-makecode-mdx-297664ebd593b28e5598.js"
  },
  {
    "url": "page-data/tools/makecode/page-data.json",
    "revision": "cdda235784f5db38f8b283e563d7a758"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-mdx-ccca135638a346125ef1.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "e4c33134665e0a95de2fa73ece02e53d"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-mdx-50522fc60469c1aa0dc1.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "eddc47c313d68fd1ee57780c33a0727e"
  },
  {
    "url": "component---src-pages-tools-model-uploader-mdx-519f1b0b7a394a4eff78.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "b958134ab382b970f485d8222b7a506c"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-3d41a26d10bff8555fbb.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "79b334476a7d487a4da81842fd6c8039"
  },
  {
    "url": "component---src-pages-tools-player-mdx-72dc7b10fe0bce9de6c9.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "82e9cf565b82e9fe2975cac5a67b7f5e"
  },
  {
    "url": "component---src-pages-tools-prototest-mdx-9e2afe504ca290a0cda4.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "30154c1e38d7d40328c3fde33750b445"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-3e4f2a1d59ed951854da.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "342afadb6ab369121d5c32f0293e256c"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-9ee6fff4132d92900a11.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "529329e4d806c1c4bed25d267a6786ea"
  },
  {
    "url": "component---src-pages-tools-service-test-editor-mdx-21e943b38f62c52a587c.js"
  },
  {
    "url": "page-data/tools/service-test-editor/page-data.json",
    "revision": "30a8d482d940ba4067843bda5bb78192"
  },
  {
    "url": "component---src-pages-tools-settings-manager-mdx-f31f3c764d297cddcbba.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "44568ff10ba6a3f39f3e20a6e0261336"
  },
  {
    "url": "component---src-pages-tools-updater-mdx-29e9610060c5c0f0ef04.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "85798998ca1db0b64af31c90f71cedec"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a4531b6021f7244d01b003572b8f90d1"
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-eb8e3845dd670ac6ffcb.js`))) {
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
