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
    "url": "webpack-runtime-62210295181b4e102294.js"
  },
  {
    "url": "framework-2c492f01b41e320fed35.js"
  },
  {
    "url": "styles.70142e700204666b4874.css"
  },
  {
    "url": "styles-6384b62456dc4fed6ffb.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c2f15e21a727dbc1d7ff4dab1a2ef92d"
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
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5a70c306e78ce5fd0bd7.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f815a9d0a381450788153d10464c4348"
  },
  {
    "url": "page-data/sq/d/1044929081.json",
    "revision": "477b0a28354381bef19988e1f7202093"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "9ccbc3adf3a42af4f84553c5c9d7484d"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "8f368bd37e55ca2cd2476ac0a60f659a"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "744839af34bc83b2beaa07313a386ed5"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "ea226aa575a8c5261fd63d7b25bcf75e"
  },
  {
    "url": "polyfill-c447eddb918a708d8fb8.js"
  },
  {
    "url": "component---src-pages-404-mdx-3e5c1a5a678c403ce124.js"
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
    "url": "component---src-pages-clients-mdx-056f7436c2ee5459a4af.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "893d167be4d77de95db2c3daf10a687f"
  },
  {
    "url": "component---src-pages-dashboard-tsx-783026747e3d81c3aba0.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "08e2dbb74be4715bf0b867244315771a"
  },
  {
    "url": "component---src-pages-devices-mdx-afca633a27df676f0d48.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "e82e1ad9c21b942c441a0e669abf8a33"
  },
  {
    "url": "component---src-pages-dtmi-mdx-812da548dac72dc25598.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "c859a27fc98325f2b521313230d59397"
  },
  {
    "url": "component---src-pages-github-mdx-2d8649f9225ae0aee507.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "86c7c46768a4fb707967a5b66087ed9c"
  },
  {
    "url": "component---src-pages-index-mdx-e84151b81baa24969c67.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "efca763123a85f8d4368b6e72964d9ea"
  },
  {
    "url": "component---src-components-spec-tsx-8ac555fc82c3f8417e3d.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "3b8cd629d32a0678e55571ce49e340b0"
  },
  {
    "url": "component---src-pages-services-tsx-a2f8a49113d4afde6f03.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "c50b62b6133316bba367c9053ec9dbfd"
  },
  {
    "url": "component---src-pages-tools-mdx-609b526c8248e2a77139.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "eadad32932bf77b87b16c4a09a666dbe"
  },
  {
    "url": "component---src-pages-traces-mdx-b040d375190337651463.js"
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
    "url": "component---src-templates-service-mdx-3bcf0675b798c20733cc.js"
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
    "url": "component---src-pages-tools-azure-device-twin-designer-tsx-40fab92f18f3cc429a95.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "4cb856d6e06171bef43b0742cc27ffbc"
  },
  {
    "url": "component---src-pages-tools-collector-tsx-30096a55eac8cb59df27.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "434a6a80c4b427fb69b553a67014d32d"
  },
  {
    "url": "component---src-pages-tools-device-registration-tsx-9634628271412010d4ae.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "93bf5d1ce8dde30edba329e591a859a7"
  },
  {
    "url": "component---src-pages-tools-model-uploader-tsx-6412ea875933f1eb9776.js"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-tsx-43632656fe5ed1a86732.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "a1650ab193aa04a5c24278edfbe0cc25"
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
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "d0f39cae36770e1eaa77c9f346fb45e5"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-da0166aba8c2ed20d747.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "85dee3e4a9e7de02d00dedb39bffd462"
  },
  {
    "url": "component---src-pages-tools-player-mdx-c437149d226ad166dc3e.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "78b2fffa0f80e4edfd8d916ebcce3d81"
  },
  {
    "url": "component---src-pages-tools-prototest-tsx-f1b1e6d8b5b8d9ca7f8d.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "9e02c04de36228952fbb77e65320da7c"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-6ca355eb276366d0860a.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "4afb6b1684f1816bcc979d98a4027d82"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-6e71ab71187c7eb62043.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "79516ae73d17082e221b9610b2cc012d"
  },
  {
    "url": "component---src-pages-tools-service-test-editor-mdx-f6adeae6c5536c848d58.js"
  },
  {
    "url": "page-data/tools/service-test-editor/page-data.json",
    "revision": "568b49d3279d080c0430cd2d0640d791"
  },
  {
    "url": "component---src-pages-tools-settings-manager-mdx-642677280a9d64422061.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "6791b0ae7c56c50deebd2c58fdab198d"
  },
  {
    "url": "component---src-pages-tools-updater-mdx-bc04fbb2a2b02348634a.js"
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-03c99321fd4baa95ca14.js`))) {
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
