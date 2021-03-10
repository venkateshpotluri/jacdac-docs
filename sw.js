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
    "url": "webpack-runtime-dd9d7b8202eb7c3124e6.js"
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
    "revision": "2f83e928a61c0878040f1923cf3b6773"
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
    "revision": "c872f40c4a87b9559709f5e317df8cc5"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "75af27c0b461190ea0a8419a46029b74"
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
    "revision": "bc0813eab54473205a9188160684d4cc"
  },
  {
    "url": "polyfill-59ee27a2411ab13ccf1c.js"
  },
  {
    "url": "component---src-pages-404-mdx-d92eec4f29622d368411.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "cc5fcf953aec25f08eb66c9bc4b0ac4b"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "e02deba52d56c2837de80326fabdb85f"
  },
  {
    "url": "component---src-pages-clients-mdx-f236ddb40e7bac664800.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "0f8dac2152393a62ae65d0653d7ef43e"
  },
  {
    "url": "component---src-pages-dashboard-mdx-ccb340511296319f7643.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "86ce475cbe6d8bc5c272b41c09a2cb45"
  },
  {
    "url": "component---src-pages-devices-mdx-02886106bff594236055.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "40ae6464737737b0ad71a176e8ef8fb7"
  },
  {
    "url": "component---src-pages-dtmi-mdx-ea96306ce8f14489eb90.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "f56c2c6a50bcf4890a992019cf07970f"
  },
  {
    "url": "component---src-pages-github-mdx-fe17ed274181fa0a8f68.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "a1ec306f733aba7502d177decfc1ef57"
  },
  {
    "url": "component---src-pages-index-mdx-51828e9060124481d95b.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "f8dfa3f5965f940b72771d12f4d39dde"
  },
  {
    "url": "component---src-components-spec-tsx-231d7eab293edf26f958.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "3b19a8376b92ffb2c137c6a7c65d7371"
  },
  {
    "url": "component---src-pages-services-mdx-ec5e50d6fe65eee6e4f4.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "baf0bd887d8118f1977b52c6423d48a6"
  },
  {
    "url": "component---src-pages-tools-mdx-cff68949109c100c3dd9.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "c9861ebf575b816cfb8339714c4895bb"
  },
  {
    "url": "component---src-pages-traces-mdx-a9dedfac44ecd3a51d61.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "c527603e6045dfe0265fef3c68e5c619"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "00c7582160ca1d61fd6f19f7b1f6aa14"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "31a8423e53dbff9113bad5573ca89439"
  },
  {
    "url": "page-data/reference/led-status/page-data.json",
    "revision": "07b2110a1826b1bc64a08bda26c568e7"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "e868f51fc38f895d0df2918de9f56155"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "2d04da5bd3460f26e980d79d5378a4ec"
  },
  {
    "url": "page-data/reference/service-tests/page-data.json",
    "revision": "feae40e4c6043a8e33fba7312c6e5aa4"
  },
  {
    "url": "component---src-templates-service-mdx-9354db20c68cab525f47.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "e3e0aa8e6f0355208c83ab2008504ddf"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "49ea0916c70da284b40d566d445b996d"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "d188cd1110e2f1653c97d9f0a546e126"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "d95d87ccf26187c0d4bfa56b042a2e48"
  },
  {
    "url": "page-data/services/analogbutton/page-data.json",
    "revision": "3962fe37166b8e28181130593e15942c"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "449357598b7ab625eeac5fc03baf685a"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "c3a3c07dd566bfbececf712428b2dcb3"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "4f73d25a143c8ea93e229210062df18c"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "2ae5fcb1b0f7896de7df65bb8f35e807"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "40530e256eb614a460f55178e3194102"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "132e3da9c407df9903c4689152a33039"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "9d35cad0321eb7eadcfc29c4571896b5"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "85dfb9ab71b3d197156d82f889cce94a"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "d90117349fd974a40895191cc60f7ed8"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "4759d9116bc3f4f6cecaa7cba474fd8a"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "c224d925ac6ac097270babab8157700e"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "81631d9e142e1df79fba4e7c4f440487"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "d59a1a0fd8048ef4f752b3c0f1273b6c"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "4092815f14ab81fa70231cb334bf671f"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "4127e1040eecee43de39a79bcf06c017"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "eed5f9f6abfb89819640a02e6c9798e4"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "389f9f492e0120c7c38ce62deecb46ef"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "7e4b30a12ffa4e06ffbf90a2a3dbb021"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "da9c818d13afed3ecd20c873745613c2"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "cf32c68ca468fbf37c20ed2697224143"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "8c34a638b908aed9c678d71dc527e380"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "4a5114e255b64dced99f0c2ebd67a357"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "ccb3863341b2f33b7d526df5f01c1063"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "c8bbd86f674b5291aec71f776d18d4d8"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "3ac1d1881847317f866f6edfba81431b"
  },
  {
    "url": "page-data/services/ledmatrix/page-data.json",
    "revision": "1d7b4a195026ee198ee10c26f0c528cd"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "b617654e4c0923b39c8b618298f57f81"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "efc0be2ad26a20bd1d148edbba4db1ee"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "e5a78f95693ae3778059ffcd5adc4e51"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "9ca170fea25580fd34e28c0bf843cb21"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "c6c1cd5031fe7d8d89d76c8541561038"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "247b5ecede5150c8bc1a7893bb61ee7f"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "9a9f3de7873fee60a41a193fd8284a95"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "859f612ee3a839a3170e4654d710f54c"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "fabd7c86f3b6a274371952bab0fe31a5"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "9c774452c143f75da0935c2579c188cd"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "64113d6892a74c6d006081f3ce1d827a"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "4235f204d9ed29aec49506c6a83f2a81"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "944588df7da2ce1d0e0f88d16a2d5850"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "37f1da31f0bbc281ec9d2f511489a1e7"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "3cd0b98b1b27b4da3eb06e41f18490dc"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "cce7ded16f05d9cbeceae608aa57eb78"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "2638abe966e878336533d5fa5e94df91"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "63eda296675119187f204636d7f7f0e0"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "21f42d0c344a058fea78b2701750e5e2"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "65733d590d9126d6b032fe4027afabe7"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "52c793fcc59c52a33fd39d164d2cb30e"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "7814aad37f7b3f565955c558128b61f3"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "7376209738915119a1d7514346b3e7b9"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "8f767888b7f4e029359be996e02f9ac8"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "9de21d63636856d25504d05c5057d00a"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "32fd1fb6b171d41f007731129118c2d6"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "debc4798668dc54dba01bd5bfba7a8c6"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "238dfef7ce932f64df55a7179b228532"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "9bca5ac305c54ad0675f527d7d7bc876"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "a2fdcc29b65cbc28358f6e273d9c38a4"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "1e95ad4e2dc89cd12760c4c0e11c9021"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "c6304de3fc5ed1de7d2d8a12159e870b"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "6e01ebe3e468f1d24e818810125db4cb"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "d7a87c92087c77ce7ad341a31ae01f34"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "8d83d9b275c150eac1973d9819e50e07"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "49272bbdae6d1d6257fa86827246bf8a"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "90f3b3ebe1861bbd4cc4a076fd32a284"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "cce66e0d62c59670709999383d1a9379"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "d9e37d4f23978e22d1b2647139fd5220"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "bafb8ec5f81c27fd491a637b0dd9e90d"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "b8ebc1016417c082940a988686ac4d27"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "a010156b27d136eba73de9a56ce84340"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "3b5f93a2d8e44759879ce6e16a9e2e20"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "32af3c3a69f9813e41cdd8fbe5c65cd3"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "c924430dea19b50974430cb765815f4d"
  },
  {
    "url": "component---src-pages-tools-azure-device-twin-designer-mdx-cd89740eb5e1be4188d2.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "ec64a599953e417e310aef34b098a3c1"
  },
  {
    "url": "component---src-pages-tools-azure-iot-hub-mdx-7378fb195cf334ec32b3.js"
  },
  {
    "url": "page-data/tools/azure-iot-hub/page-data.json",
    "revision": "1ed4684443ba7b508734975853b1ac70"
  },
  {
    "url": "component---src-pages-tools-collector-mdx-14ef58a3c99136e6921e.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "a34bcc4fe2eac69cc70defb0162b2b3a"
  },
  {
    "url": "component---src-pages-tools-device-registration-mdx-8776bc1ae06703c42575.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "913fab33ce0ba6e0d22d5f9ac1823dba"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-mdx-6f65b4053435529069dc.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "39683520a35f645597ec4f350f1554b4"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-efa740bf68c7977d9171.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "da953510514db23106e4633d558ba33f"
  },
  {
    "url": "component---src-pages-tools-led-animation-designer-mdx-ab254328e87f0583485a.js"
  },
  {
    "url": "page-data/tools/led-animation-designer/page-data.json",
    "revision": "26a2ad5f40ae26c0014d7d723ecb2c2b"
  },
  {
    "url": "component---src-pages-tools-makecode-mdx-297664ebd593b28e5598.js"
  },
  {
    "url": "page-data/tools/makecode/page-data.json",
    "revision": "0a3a50928ac5b9dde8490d9a7373721d"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-mdx-ccca135638a346125ef1.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "974c279d54d9f3f5cb25f0958494c796"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-mdx-50522fc60469c1aa0dc1.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "0a18b6b2839219836c0fbf10c24f8ea4"
  },
  {
    "url": "component---src-pages-tools-model-uploader-mdx-519f1b0b7a394a4eff78.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "da30a7348b5bd230eb8afc641473ce09"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-3d41a26d10bff8555fbb.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "34c2bd741245bd97e3fedfe3d1f53ac5"
  },
  {
    "url": "component---src-pages-tools-player-mdx-72dc7b10fe0bce9de6c9.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "db023473794fee04e87ea402fbc6cfd8"
  },
  {
    "url": "component---src-pages-tools-prototest-mdx-9e2afe504ca290a0cda4.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "ac965b1d1c72540cf02fae454fc45845"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-3e4f2a1d59ed951854da.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "2c78dd9d6e516f508086232320b1825b"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-9ee6fff4132d92900a11.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "8432c50aab1f1f4c47bea48da85f6621"
  },
  {
    "url": "component---src-pages-tools-service-test-editor-mdx-21e943b38f62c52a587c.js"
  },
  {
    "url": "page-data/tools/service-test-editor/page-data.json",
    "revision": "77346eedbda4f8e09f3a6134ba346afa"
  },
  {
    "url": "component---src-pages-tools-settings-manager-mdx-f31f3c764d297cddcbba.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "2966dbe848123cc31455bdb40b5a65de"
  },
  {
    "url": "component---src-pages-tools-updater-mdx-29e9610060c5c0f0ef04.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "69d2fd599741425f285a8d03e193e10a"
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-029c6d23e0ff5f15ebe8.js`))) {
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
