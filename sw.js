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
    "url": "webpack-runtime-9536f9dcfc73e8813925.js"
  },
  {
    "url": "framework-5a5c0b1a0a0f20c48ea8.js"
  },
  {
    "url": "styles.70142e700204666b4874.css"
  },
  {
    "url": "styles-d0a724d08ea630e0e2da.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2775ed53911bc4ab7ea36a375c24894f"
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
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-704355529c306bfb0add.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f815a9d0a381450788153d10464c4348"
  },
  {
    "url": "page-data/sq/d/1044929081.json",
    "revision": "503f835c5d2f77f376b9b2c338a46571"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "a96a6cf1793718f9d47ec17cf33d6aec"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "7f51e399cc0d8856f937a0ce9214fe0c"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "744839af34bc83b2beaa07313a386ed5"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "6fc55c14034e5507ed1ba2d55e9b6ca9"
  },
  {
    "url": "polyfill-623288f9790caaf6aa11.js"
  },
  {
    "url": "component---src-pages-404-mdx-49b04a2d6bb823bb3c24.js"
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
    "url": "component---src-pages-clients-mdx-f6b2354b2050b5fe6944.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "893d167be4d77de95db2c3daf10a687f"
  },
  {
    "url": "component---src-pages-dashboard-tsx-77bf7b70f49d51961830.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "08e2dbb74be4715bf0b867244315771a"
  },
  {
    "url": "component---src-pages-devices-tsx-c6a7605d0c0637c2cbcd.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "41d8fa8dcafc0a55d4e24f9a07599806"
  },
  {
    "url": "component---src-pages-dtmi-mdx-3e6427a88887f3cbfa1b.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "c859a27fc98325f2b521313230d59397"
  },
  {
    "url": "component---src-pages-github-mdx-181ee2e7bb137c7d2030.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "86c7c46768a4fb707967a5b66087ed9c"
  },
  {
    "url": "component---src-pages-index-mdx-bb924002d4eb08af16d0.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "efca763123a85f8d4368b6e72964d9ea"
  },
  {
    "url": "component---src-components-spec-tsx-699c411561ce01cf55db.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "3b8cd629d32a0678e55571ce49e340b0"
  },
  {
    "url": "component---src-pages-services-tsx-984a707364e7c13afed8.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "c50b62b6133316bba367c9053ec9dbfd"
  },
  {
    "url": "component---src-pages-tools-mdx-af34836ee950497fde8d.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "eadad32932bf77b87b16c4a09a666dbe"
  },
  {
    "url": "component---src-pages-traces-mdx-6613512a2cee5e6d8c0a.js"
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
    "url": "component---src-templates-service-mdx-5c54dfaf5c1af1f0d9ee.js"
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
    "url": "component---src-pages-tools-azure-device-twin-designer-tsx-a4643cc58832ba394e37.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "4cb856d6e06171bef43b0742cc27ffbc"
  },
  {
    "url": "b2aab2bc29d9fafdace515a372a0c94477976bac-98cb7b474d75f778a09a.js"
  },
  {
    "url": "component---src-pages-tools-collector-tsx-e8d16eb5430e375dc4f4.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "434a6a80c4b427fb69b553a67014d32d"
  },
  {
    "url": "component---src-pages-tools-device-registration-tsx-a9cbe1b97bd9525173e3.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "93bf5d1ce8dde30edba329e591a859a7"
  },
  {
    "url": "component---src-pages-tools-model-uploader-tsx-5c19d356d5f76d2fc649.js"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-tsx-57810755ab51c5cf101a.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "a1650ab193aa04a5c24278edfbe0cc25"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-86f6a12871e000c83249.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "4d5ee87008ff1ca963a877607cfcd118"
  },
  {
    "url": "component---src-pages-tools-led-animation-designer-tsx-b3dd3bac991262d91f5b.js"
  },
  {
    "url": "page-data/tools/led-animation-designer/page-data.json",
    "revision": "7113b22cbc63ffac8333fa2d553236ec"
  },
  {
    "url": "component---src-pages-tools-makecode-mdx-4e42a394e1903c2faa7d.js"
  },
  {
    "url": "page-data/tools/makecode/page-data.json",
    "revision": "c61fac5c40d1f4a2e319b796b7dd3ddc"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-mdx-e3d10c0a69e9c1fdd4a1.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "e47c61dc116c0806b9bd5e57fdf9cab1"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-mdx-ac3a9c64fa863216aa97.js"
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
    "url": "6d5d946bd81d862c789d2a20f7bc74f4ab10f400-c7670e776fdbb5b6612b.js"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-tsx-0bb318663279b8154397.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "e1e1e1382c76e9a15e77ed31a1432539"
  },
  {
    "url": "component---src-pages-tools-player-mdx-595d63f013ffb4027b2f.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "78b2fffa0f80e4edfd8d916ebcce3d81"
  },
  {
    "url": "component---src-pages-tools-prototest-tsx-dd4f897a5c0d56c4f0a2.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "9e02c04de36228952fbb77e65320da7c"
  },
  {
    "url": "component---src-pages-tools-role-manager-tsx-4a637a510f4e0f4a6101.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "287ab723642cac649f38c0ac31e8aa68"
  },
  {
    "url": "component---src-pages-tools-service-editor-tsx-f4e9a337a473d54d076f.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "ef9f0df70b13251fb8a2671edfc0e7f7"
  },
  {
    "url": "3dcbafda74151648e78934a2af5a56839dd02318-6674a92ad5f1dbee32cf.js"
  },
  {
    "url": "component---src-pages-tools-service-test-editor-tsx-e6d21876ba517b69314c.js"
  },
  {
    "url": "page-data/tools/service-test-editor/page-data.json",
    "revision": "5351ba415dc205554ef0ac941b4bd909"
  },
  {
    "url": "component---src-pages-tools-settings-manager-tsx-3de36a2d299e23341525.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "b14e16b18d45292a9022510344317642"
  },
  {
    "url": "component---src-pages-tools-updater-tsx-673046002131cf92ed54.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "9c66e790593b7d59610ee969cd903dee"
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-89c0f4fb2c3fcc2af848.js`))) {
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
