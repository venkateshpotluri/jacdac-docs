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
    "url": "webpack-runtime-dee6578eb38a40c09128.js"
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
    "revision": "1d9372d7642e482d587fe78c6f8c4304"
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
    "revision": "7aa700cadedeae950ef38755620aaaa4"
  },
  {
    "url": "page-data/sq/d/2461311362.json",
    "revision": "4c079006bfc7c9ed2796bdcd8e784fda"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "e535cff9402ea46ea3bb80d56465c9d5"
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
    "url": "page-data/sq/d/650773314.json",
    "revision": "6511755c507987c6e0c6bdda50150070"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "a715e38792fb11bb96a50089ef864a06"
  },
  {
    "url": "polyfill-59ee27a2411ab13ccf1c.js"
  },
  {
    "url": "component---src-pages-404-mdx-d92eec4f29622d368411.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "7765feab1e3b9c04b9f6a53d7a9b145f"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "aa1c67734b8e54c3603b76b9415f0ea9"
  },
  {
    "url": "component---src-pages-clients-mdx-f236ddb40e7bac664800.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "51b11fd028dbf626ca0c86416b079650"
  },
  {
    "url": "component---src-pages-dashboard-mdx-ccb340511296319f7643.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "305f46e3ceb76e931e45dcf98bc73360"
  },
  {
    "url": "component---src-pages-devices-mdx-02886106bff594236055.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "9d9a428e28d3dfb747fd1834179343ac"
  },
  {
    "url": "component---src-pages-dtmi-mdx-82a51696e1201f561415.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "3c0620c06317f6231d02f6f2f4fd768c"
  },
  {
    "url": "component---src-pages-github-mdx-2b612b19b3037ed9c893.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "8614b295d95944525a7178c0dee5695a"
  },
  {
    "url": "component---src-pages-index-mdx-51828e9060124481d95b.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "212dd8e2dd876feb2b5c466507d14c6d"
  },
  {
    "url": "component---src-components-spec-tsx-231d7eab293edf26f958.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "11c62995549afd2c0dde4981e4b109b9"
  },
  {
    "url": "component---src-pages-services-mdx-ec5e50d6fe65eee6e4f4.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "da6fa447ffb37f838801107cffb474db"
  },
  {
    "url": "component---src-pages-tools-mdx-cff68949109c100c3dd9.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "01c9a30214503e4ec7b8bbee87808504"
  },
  {
    "url": "component---src-pages-traces-mdx-a9dedfac44ecd3a51d61.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "e7fcce14d90ca391c53b499fc38320b8"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "08f94c87069db449373b3c4d9b13de57"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "9d83fa46fe9afdc4953a29cb62a7a4e1"
  },
  {
    "url": "page-data/reference/led-status/page-data.json",
    "revision": "48f4ded45e978944c67cfa020897d9f5"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "4e56882aad213daa07d6bcf10a43f702"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "3024b73ae0f232eca224d1575c40e212"
  },
  {
    "url": "page-data/reference/service-tests/page-data.json",
    "revision": "75f560515bc46d736a8f04c2e138123c"
  },
  {
    "url": "component---src-templates-service-mdx-afd0004990cc59085c71.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "aeacf8157bc1297a2e305614e1f678f5"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "7a6957fcc96b491b8e8f1f5203d00a50"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "c4fb5e00fa2ff8465a31d0498586b7ae"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "69ebefe8a1ab3d66f7ce7343a3aae27e"
  },
  {
    "url": "page-data/services/analogbutton/page-data.json",
    "revision": "41746ec2d0b86254df6bca5780bbb449"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "91ee57f246c0997e900476f692abaef1"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "0ccb4045782f5d224f20debe53cd05e6"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "e8dcf6c685f5ee9f0ae2e705dd1be4f3"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "b4e95d74ad39f0614c3cac8c076cf839"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "35744c3cbc1e48288262b5b591074aef"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "bf32ec50f6791823c99efc383a0a19b9"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "391d0deb7f1a5d89f580a00878e4e6cc"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "966eb1fa76299a76adfd59e3534fd84c"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "5c290ccfd69682884643679695df7d21"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "d3abf5da11f64ce5f31c6458ff6ff33b"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "d322b5ae130311b9fd948258db7f37e9"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "bdbe5b7212a23d32fff3e465fbbf17e4"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "9d5ebddb1fa0480ff95eb15e585bd021"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "0039c2a7f3b90f4a5a24a6842610dc56"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "17da1c3bbdafd501814f142917bbe5fd"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "3ad17f6160198d4915908572b762a256"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "74144235a26b78472de6e7b8680d77da"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "7cebcaee04c31953fbcf746a47e43d60"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "22dd688f03875d8182b4d0eaaff1238d"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "132e44c0113d6825b5869ed1f60b0607"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "4f6122bc411da4669074eb3369ac9226"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "6308924c4d4d54884ee3c3111aa89a59"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "6381675376d69ea4b18aaa2874844aba"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "4babb744fa8743d4bb89a5880d361cfe"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "cffe836defe1deea27b8966b2504b222"
  },
  {
    "url": "page-data/services/ledmatrix/page-data.json",
    "revision": "cc118a8d3bc9a5bddde11b6544b63c70"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "fffb3afad756aa5e6121bcd387a7d0c7"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "a450f5b0bb26c86072937177377e3689"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "8478d336eb44c9f7db39c935f4f67665"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "dd4f7b0772a3bb07d61882a47f6d24ba"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "98529c3595f799735c99f2ea992e706b"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "9f2e99bd46358ca20a124a106d461fe6"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "9589ff525f84ae37945c9993c2a6825e"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "b96174c94e4eff49efec40a1e102f803"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "79a2267df26147330c6335ca36f67001"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "c914063b543bc769b787ce05abec1e2b"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "475195c322c2c8d174df9cf5913dc21b"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "28aa6d226d87330f392eb4bf0d022583"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "104ff150e0c575066428b89ebf79698b"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "3aee10e2e23c607dd60da78385567969"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "6fbc710749ddad5df11da31e0f5708f0"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "e3c7720e1c676dfbd1a5a091f9694af1"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "445eec0a7fd9778afefaed881b9b5180"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "99aec41e36d5306426b88584925834b1"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "7de9949f0def91cc56703d089e595235"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "93e71a69704f1af8213565d10b3ffbcb"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "d0dc7fa59c2b3dcff2beaaa48759ad2f"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "92e880c328b6f9f388e59133655cce6d"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "d0248e3c2833f525e23c882895e9cd72"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "0bbaa357f49ab1895a7c0bb95d7f8686"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "dbe176adb650e989026372fee92e63ad"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "6094822f529f0445b7f8d185f5468fa0"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "fba5cf321282f37a6239ac928629ca6b"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "6f0fbea5a2f13b550b09e24d2d26f3d7"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "a45be644b1732f7b32cdf66bf25ba0ce"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "b454f64090064a725d5aeca8d191ace3"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "58a765abd2f28da9ed1e96a9c3183e51"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "e1a660d42766e2f1251eb872cfef89ce"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "b83d0a40f3b19ea6810512b501f1309e"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "2c4025e5bcd984367948ce9c9c43277c"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "cc8d1635fca582ef6fe37e7db95934f9"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "234bf9ec7408230873171dc4a0d95521"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "b5d81f08f77b1c619c52777591137ef8"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "feaee3c58f2d64e3e43631758d6c4c92"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "c65002e0193e30ae382edba17744b747"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "d46cb5cd1c42a44ce82e37f701c8ef84"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "8ad41b9b5ff8f16b1b8296a7ca1067c5"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "148ecefa643cdd1d732db9923def0705"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "b2ab3bd7388047cc6495de093f4c6de5"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "99ca612a48b389ca9b350438e9a1ace2"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "f0594261a2edf444da07e5ab3a7e9e08"
  },
  {
    "url": "component---src-pages-tools-azure-device-twin-designer-mdx-cd89740eb5e1be4188d2.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "ca5ec1aadf4705c120cee3d6b8f4d9ac"
  },
  {
    "url": "component---src-pages-tools-azure-iot-hub-mdx-7378fb195cf334ec32b3.js"
  },
  {
    "url": "page-data/tools/azure-iot-hub/page-data.json",
    "revision": "23d32bcfe670be7218fa76c092e09892"
  },
  {
    "url": "component---src-pages-tools-collector-mdx-14ef58a3c99136e6921e.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "6925ec318e3e39dddbfffd121c79ecc3"
  },
  {
    "url": "component---src-pages-tools-device-registration-mdx-8776bc1ae06703c42575.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "b46281e20572a52541142e81fb159f92"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-mdx-6f65b4053435529069dc.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "bf7106da4d14a1b12cf57b91eef16b8d"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-efa740bf68c7977d9171.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "c85186785a433d86b323b54c794dad75"
  },
  {
    "url": "component---src-pages-tools-led-animation-designer-mdx-ab254328e87f0583485a.js"
  },
  {
    "url": "page-data/tools/led-animation-designer/page-data.json",
    "revision": "471d6a4a4b995c2737aa1cce05958584"
  },
  {
    "url": "component---src-pages-tools-makecode-mdx-3d244390a59a9714749c.js"
  },
  {
    "url": "page-data/tools/makecode/page-data.json",
    "revision": "ab681de72dd125e52f8bb172175bf700"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-mdx-ccca135638a346125ef1.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "ed099510c7211f2deb69c4d1f3fc3974"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-mdx-50522fc60469c1aa0dc1.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "642b323a270a14c754a3889a737c441a"
  },
  {
    "url": "component---src-pages-tools-model-uploader-mdx-519f1b0b7a394a4eff78.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "24fa8610ff734a3416c044c73a7db84a"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-3d41a26d10bff8555fbb.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "7d45b6b8d89312f19ad20674e8ab6b2c"
  },
  {
    "url": "component---src-pages-tools-player-mdx-72dc7b10fe0bce9de6c9.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "f44947c8ede131d168a4ffa060df3191"
  },
  {
    "url": "component---src-pages-tools-prototest-mdx-9e2afe504ca290a0cda4.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "e76fbe9500d6b5e4fda64ac5da4cddec"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-3e4f2a1d59ed951854da.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "89a4ee3c7d83a91f1f81c75478017bd4"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-9ee6fff4132d92900a11.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "a4b49015c5cdc0d0c58da4cfcc80bcce"
  },
  {
    "url": "component---src-pages-tools-service-test-editor-mdx-21e943b38f62c52a587c.js"
  },
  {
    "url": "page-data/tools/service-test-editor/page-data.json",
    "revision": "f7b915244501d0be0ecee68f7f7dd719"
  },
  {
    "url": "component---src-pages-tools-settings-manager-mdx-f31f3c764d297cddcbba.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "58f99d64ca1c0f88a80f30479cf74152"
  },
  {
    "url": "component---src-pages-tools-updater-mdx-29e9610060c5c0f0ef04.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "19466425316124c5340c53146166d32c"
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-6db7192628ab37a1d453.js`))) {
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
