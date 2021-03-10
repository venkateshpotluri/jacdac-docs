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
    "url": "webpack-runtime-78c2c4e8df5a213709c1.js"
  },
  {
    "url": "framework-ce102410f97c7398f38f.js"
  },
  {
    "url": "styles.70142e700204666b4874.css"
  },
  {
    "url": "styles-8077d6b199609737b3d5.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "928432f16fda3112ad74101d1916ee17"
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
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-684034c90e884862e383.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f815a9d0a381450788153d10464c4348"
  },
  {
    "url": "page-data/sq/d/1044929081.json",
    "revision": "7c3bff2b38af04f4d4714d8fb6e6ad3c"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "49bd8cee8335f1c31e53f8e4900ed3d2"
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
    "revision": "1556cf8e0617ee1302b28cfb6995d901"
  },
  {
    "url": "polyfill-31dfa72dbd3be1fb7142.js"
  },
  {
    "url": "component---src-pages-404-mdx-e67616bc2f20fe7079c1.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "bebcb57b8931b6aa584a860c617a5c0b"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "eb1af619b3724651ad8e47f5dce7f5a3"
  },
  {
    "url": "component---src-pages-clients-mdx-049b3c16b8ed573754a1.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "893d167be4d77de95db2c3daf10a687f"
  },
  {
    "url": "component---src-pages-dashboard-mdx-bdf5c77178bb3fe3dbdc.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "ef29f4ac00cd788415d27759d437e48f"
  },
  {
    "url": "component---src-pages-devices-mdx-ae5f753a613789b8c62f.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "e82e1ad9c21b942c441a0e669abf8a33"
  },
  {
    "url": "component---src-pages-dtmi-mdx-082c8f729aa498d787dd.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "c859a27fc98325f2b521313230d59397"
  },
  {
    "url": "component---src-pages-github-mdx-6fa245484abb9cfe5fec.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "86c7c46768a4fb707967a5b66087ed9c"
  },
  {
    "url": "component---src-pages-index-mdx-40baa6dd456eda900cc5.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "efca763123a85f8d4368b6e72964d9ea"
  },
  {
    "url": "component---src-components-spec-tsx-e665e252dcc352f626d9.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "3b8cd629d32a0678e55571ce49e340b0"
  },
  {
    "url": "component---src-pages-services-mdx-8b78f3fc4f2b863f8cbf.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "0a65bf6f4a4e5acf956bcf68d5501053"
  },
  {
    "url": "component---src-pages-tools-mdx-609b526c8248e2a77139.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "eadad32932bf77b87b16c4a09a666dbe"
  },
  {
    "url": "component---src-pages-traces-mdx-4f4692ac160dc834e33e.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "637c8c766f588843ee6d1b34d2210b8e"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "e5596458087fbc477cf83520993fbbe4"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "49e8705dcd94e22a82caef8e340eb22a"
  },
  {
    "url": "page-data/reference/led-status/page-data.json",
    "revision": "0827376c453849d5b7ab7cf25829026a"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "ec5ba398aad0375aab6f592967c91677"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "98f1da83e57e17bf2618da03571c9acc"
  },
  {
    "url": "page-data/reference/service-tests/page-data.json",
    "revision": "5216113fd2ea08f0f50178a9d1d596e1"
  },
  {
    "url": "component---src-templates-service-mdx-daa050ca3270099d5b31.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "8d2a0709dcf865e4e12b9a181c7dd4e5"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "377cbe3590c8b8f56985ef91cef52663"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "450e76d742c2e95f7ea97339c0f0a9e7"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "50024897493b903cde5d2ef56c1ab126"
  },
  {
    "url": "page-data/services/analogbutton/page-data.json",
    "revision": "2558ffe4dbb8ec23e9cbd3b26488b057"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "d78e7b1de3ec4437cb0081b5f1f4869c"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "b9ff75040587de3e65965503fa66a27a"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "cd05c9d89e43ecb8f704f9d5551e376f"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "395c4a3e51dde9b88e6b4bab97faed40"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "6cca1fd7c44b9f30ce86db1af130a8a8"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "8521fa5f26d230a4b1f7eb51d1f48e81"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "534fceefc0a1ab883682d1f5b1fe9fa8"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "b506c871ac2f42d3aedef7c6d91e687c"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "a6ad6309a9f196026d3f584417a48dca"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "616e30e0eafb3009de55a6ee67df88c6"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "0bee729027739c5d160267ca16b594fc"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "0aa9a596389a06d6ca2f627ad3cc0ebd"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "a682ac045a6847eb78de9ce45aeb2d33"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "4adc257c8db37c516bf9b51a4ee94e9e"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "31b2f082333a05234402b1c2572fd4b0"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "aeafb58e91419fef4019d399a552fe82"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "72174562b6cff317fa79caadc5a66335"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "362a5c4d9f4f4f2b6f767b741cfa9c7e"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "a7ea83837f182b07b12bebcfb29085be"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "b253cda39989c14a09204e5fefa8c919"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "b035fe4a201579c379bd940d5a6f7918"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "47d0f8a23738c97372a872418eb53a0a"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "dfaa9f2bf1fc040371600de6112bd715"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "25506bb2ab1a38dd6f1608202136a0c3"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "8a29d8b099923fc316ca0c0864aa591f"
  },
  {
    "url": "page-data/services/ledmatrix/page-data.json",
    "revision": "9ed0d99a44c4e891ccbedab1cdc9556a"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "d18d28ebb0b7aeed5a42c5813397e2dd"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "f31efbff3c4388b8d7b73ab4efcc6ee2"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "94b5d27800e8ae7ae18e2f32aec63fe7"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "a78e35ae2694dc5c640019b2520cc3f6"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "d088b88f9fd7656b55d12f58fd8e537e"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "6cde13c25f739cf624c2888275084a7f"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "4ed16da2149f32b22ab2f472dd3c1d9c"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "7418aa82a2f957efbe6ee117780e4f8d"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "625ad89b384a06dad6f5d6662780f3bb"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "659f5c94637413976592ff0f1ab1c7bf"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "72eb1267fb11afff5d6870d0ec6b2b7c"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "a451959d3cde0c68f41a80d860ad810b"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "bb1e440b2aa350acf0f82a297fecf39a"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "73123cf991f1202d59111b511250d3e8"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "f4d45dc8bf5f142dadd02b900587cd7d"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "4577ca8604a8ab8451aa75610bbec5e9"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "d7cd8a223ac8ca2385a9e046cfee5f3c"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "3ff0064d1ab83a0810e692ad0bf28601"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "ff4535dda5ae6d094e6964d6af252117"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "bc70b9dfc0bcca8e922fb612a8dfb0d1"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "10113afab3549e5c139f0948a3e7f6b2"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "7b1018aff5b2a2104c9c3e7eefc6b5b5"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "9e59cca1b874a215ae869840aaf0a64b"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "735df70ddae88ea39a053ae7059a28ad"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "ce39f3583c844d82eb8424a7324ad158"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "13d47ffdfc638f37f46e5dd4272a3c4e"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "8c58b056b1c90b4d028bc4ed82adc13c"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "48d463ee378d5e467ecb468d1dc362db"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "7eec2a9ee13663080e7bf7ff025fa53f"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "761807a7128e6751eafea6fcd28f8a5b"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "30e21b2e28d99fd28225054acd45878b"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "dbf7678d143b4e1236810ac003f15b50"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "1ba37e7bd2f1c3f063cb478814664098"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "ad8d8b29216c844a530db8f3109bbbd0"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "b7d4980c04b8835c9301235c2da7644d"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "597504a1783e87850f6c1605847543e5"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "a6ca8ccd7bd27bf1df669fe90ebcfa4c"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "ce878aae11a25f2351c7893b1bbce72c"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "ec3ea5092e7741aedcec08872136e016"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "c62e91fe2c5329820560bc31eeccfea0"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "896c2cfa45afbc3c344258276c919151"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "e84f6eb756273854829228d671a3b9e3"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "ae1bb1914e065b67f08af4604e5c818c"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "738a017b7f175022d3d6264905d4622a"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "740b03dd35ce38c79433e4253a54cd57"
  },
  {
    "url": "component---src-pages-tools-azure-device-twin-designer-mdx-39cac407f08d31453f23.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "0b768ece78cc64fdf3d4318cdf14fa4b"
  },
  {
    "url": "component---src-pages-tools-azure-iot-hub-mdx-da3963e099d6ec7c74ed.js"
  },
  {
    "url": "page-data/tools/azure-iot-hub/page-data.json",
    "revision": "f92f054445a7908e3670d1544c8a89d5"
  },
  {
    "url": "component---src-pages-tools-collector-mdx-68b24c63c4a30ca75d75.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "f060f9a01d1108cb5d138cb9fc6a6182"
  },
  {
    "url": "component---src-pages-tools-device-registration-mdx-213fe9fb0c7a7352d83e.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "05cd4ce62fba18d541c1529cb3565623"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-mdx-c68372270bdd39b1204e.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "0e0cbe9a41cdd92cf5665d4460995324"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-48ee019f6c1ec47e650a.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "4d5ee87008ff1ca963a877607cfcd118"
  },
  {
    "url": "component---src-pages-tools-led-animation-designer-mdx-56cb46f42c92139947ac.js"
  },
  {
    "url": "page-data/tools/led-animation-designer/page-data.json",
    "revision": "dd149e47c5abeed93d19897974608dc1"
  },
  {
    "url": "component---src-pages-tools-makecode-mdx-8fc40c51f5af1d1102ba.js"
  },
  {
    "url": "page-data/tools/makecode/page-data.json",
    "revision": "c61fac5c40d1f4a2e319b796b7dd3ddc"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-mdx-a82a0d675ee381f9b704.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "95e77e2ed69165eb394c3d0628daa728"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-mdx-13f70852d3f60af26fa7.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "d37967fe962a3d9be1a19811848616b0"
  },
  {
    "url": "component---src-pages-tools-model-uploader-mdx-1cadcb46a9393a179f74.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "e9578bc8f766effddfaa255c0344a323"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-f85dd1daba0c0429c825.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "85dee3e4a9e7de02d00dedb39bffd462"
  },
  {
    "url": "component---src-pages-tools-player-mdx-600755be96af85173b29.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "78b2fffa0f80e4edfd8d916ebcce3d81"
  },
  {
    "url": "component---src-pages-tools-prototest-mdx-a0a100af5bc8a7f8b261.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "fa711f7cb68aff653b766212ef08b809"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-ca2e55eeb96144d1ba81.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "4afb6b1684f1816bcc979d98a4027d82"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-3c6d1ef86e08c4ae1d61.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "79516ae73d17082e221b9610b2cc012d"
  },
  {
    "url": "component---src-pages-tools-service-test-editor-mdx-5208219b519733f7e51d.js"
  },
  {
    "url": "page-data/tools/service-test-editor/page-data.json",
    "revision": "568b49d3279d080c0430cd2d0640d791"
  },
  {
    "url": "component---src-pages-tools-settings-manager-mdx-d179a9b62a68ff519797.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "6791b0ae7c56c50deebd2c58fdab198d"
  },
  {
    "url": "component---src-pages-tools-updater-mdx-70cc99baddf74d31dc26.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "99492ab3e3681962f3c2a74726b154cc"
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-a15edfc0373f14d336b2.js`))) {
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
