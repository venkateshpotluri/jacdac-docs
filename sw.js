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
    "url": "webpack-runtime-99dcbfd22ae19f155965.js"
  },
  {
    "url": "framework-67a2db31f3cef5e7b7a8.js"
  },
  {
    "url": "styles.70142e700204666b4874.css"
  },
  {
    "url": "styles-fbf036ab87746356518e.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a41c831e1633aaf4b41af1fab5a060b5"
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
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ed69e37097cc5629aac4.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "06d6460dcc554287800119c0780dac97"
  },
  {
    "url": "page-data/sq/d/2307937736.json",
    "revision": "70405d3a783e87faca15aafc2e355c30"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "88426dcf9cf2f1e61c8503620b44be59"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "f65f2c004a2e64d357106470d3730cbd"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "744839af34bc83b2beaa07313a386ed5"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "48d4eb94b02586fb7427fbe018463bf2"
  },
  {
    "url": "polyfill-3c5518b09aa415786dfe.js"
  },
  {
    "url": "component---src-pages-404-mdx-02b5a6178b24079484aa.js"
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
    "url": "component---src-pages-clients-mdx-a3f2594e2f33991001b6.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "ea5d3a294803bc963607eef37b1638d5"
  },
  {
    "url": "569eb5b6cf64d0f5525629d85b97956c05ffd729-67865764f538d2417b08.js"
  },
  {
    "url": "fd66305ad27b9121aadcde012e3ea922b39abc35-42fd8cdbdfb3817f5725.js"
  },
  {
    "url": "103b2b263982846fe7173d9cc3f35acc1808d94f-b53aa1e75f07a8cf7c90.js"
  },
  {
    "url": "9285c799fb4b4a09e11877937e6789e77405a9e3-3cbec76081a27ea28bfb.js"
  },
  {
    "url": "78b9bb75cd81dbb25336aae36dc98149d36b0b9f-f1f48a377f60a1b04bb9.js"
  },
  {
    "url": "2de522411680d451b031a062adfb0b1dabd2d973-8497131e9d8dfa22e47a.js"
  },
  {
    "url": "74493c31a6571423b4de02ce9ddf127887738210-73b26d8c9d02215bfff2.js"
  },
  {
    "url": "ecc66d45a30f170d6a1d7c210a0a1cebd03a3b5e-8222a92e843e27140723.js"
  },
  {
    "url": "02e38aa8e5d6b10d1b45e05692733ade4c651bf6-6643d10c5ee30afc3a22.js"
  },
  {
    "url": "bc1de39814113fdab2fbefae2ee854f0842f6be1-ddf06a8d5b79b3978f12.js"
  },
  {
    "url": "f45028b77642bb06a1e26ecfd1b9356bfb549ad6-89cb46445a171086936d.js"
  },
  {
    "url": "7a6ddfc67c61f6ab4d0fd9135a6802daa2a5a396-55f3d306d0118c206021.js"
  },
  {
    "url": "component---src-pages-dashboard-tsx-d9c5de28115974c08819.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "213904b37cb7592cd6f13ee2c4f86fd1"
  },
  {
    "url": "d7973c5d134e88483f5da3e6e2a9421b6a761b10-e9d44cb32b607b78c469.js"
  },
  {
    "url": "component---src-pages-devices-tsx-d80c37a8ee3a9bf2b89f.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "dcdb17db02b3f08fe77f88fbd516ec58"
  },
  {
    "url": "component---src-pages-dtmi-mdx-d1af6b63fea9464d39a8.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "922c06ce22fbafe23ffbe902872f7bea"
  },
  {
    "url": "component---src-pages-github-tsx-071832deca14a736aaed.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "7adc12c94f43568d4bdb0cc62f1e94c6"
  },
  {
    "url": "component---src-pages-index-mdx-cb87360fc9a23b963487.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "cd8ef10d6d8e0249c0b35ed3ebac5862"
  },
  {
    "url": "component---src-components-spec-tsx-2c30d0977956d23b4376.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "7118df1f90f6c103d3e407e3e0012315"
  },
  {
    "url": "ea5bec84f4245e322b43fa433fccf95de0449133-37888a6571d29edeb0bc.js"
  },
  {
    "url": "6e6f508a4d48336b02c09c52b4663db8917995a6-d3c182a814eae860c8cb.js"
  },
  {
    "url": "component---src-pages-services-tsx-3e89083ac3a132974fb5.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "82cbdb525dcf8c1ef73ee046171969c3"
  },
  {
    "url": "component---src-pages-tools-mdx-96dc942dde792bd6cfed.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "f700e95b86abf2c15c9c99c61f937cd8"
  },
  {
    "url": "component---src-pages-traces-mdx-55b54a943f2da078a6e4.js"
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
    "revision": "3dc031c4057ba00a2ffffcb663ee929c"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "ea7d3d3f8a61324d3ae229ce5b960fc5"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "a299d96ac61af512b3c99026cdb60546"
  },
  {
    "url": "page-data/reference/service-tests/page-data.json",
    "revision": "c8519d2bb55327c6fa7f3895c338a47b"
  },
  {
    "url": "component---src-templates-service-tsx-c40bf16cf3aaabd84882.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "ffff192c0c89b5ccfbd4863df8a123c6"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "37d702c8b0338211b3ff7423d52ceb5f"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "c5cb6360d1de4aad21da0d646c87124f"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "a4a3ba4132f45c7352fb5e6d30840f95"
  },
  {
    "url": "page-data/services/analogbutton/page-data.json",
    "revision": "5bdaf8eb6c7aa631e71c2a707e40aa21"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "1e6c3b6818b548c38e61dddb04c4b3fe"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "4dde1df0f1e3918cc9dfe344f33a779c"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "2c9f51735549f89d63d6604f379c0ba2"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "182e8bc84ab243b8eb84fef91edbc873"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "7aa5e79a2bba283d7ebe883f7618c0b3"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "846384e7e6d475cfd9fc346d24cd40ab"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "720aede4eb4d9325fdde042ceebfdc39"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "8a5a7b771f2d612f90d2249cad51b34d"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "291afc7c7ff06b4104d29cd70290e9b1"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "050c0c2b451681190d71043e16b6f16b"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "3da5a9d08e28465da42e1a862fcc402f"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "b9cf42c54241e14fd95e69fbdb1bf492"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "bfd6da306679a6def86ccdbf354dff66"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "027e701ab13d5e6adef3ff32ce75bb3a"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "ca05d76d3ab5b76d946fc74f87e6b021"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "b09565fc6856700c443532c8f14b8d57"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "6608b388649922e09fcb38de398baed9"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "3936b5afe5c9520ef137ff1bdf3e2733"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "a5d93f8fcd90a52a2d750595d5497806"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "393ec319da03d9cf71f794c2aad72a1b"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "1b26ede9816c814c5dcd23724965fd8c"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "f856c69b00ef98ab97865566a7e5d515"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "714dde10928c843803ac52e497a73f86"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "3f37d2410b3fd99da0d5f9c5ea32e6e6"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "dafb6eeb957650514bac0764edc0f131"
  },
  {
    "url": "page-data/services/ledmatrix/page-data.json",
    "revision": "a4df90edcc04c0d0f704453c12e5f40e"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "5c71a83ddf4d525f10efda4cd1d3aeac"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "70e88aa82b754e1026a2b36861fe593b"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "25bc6d125ec6e98a2ac74b046c145eba"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "32e557e4843b3be7e44ff8695b7491ec"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "efa68afdf8bb19b5e251fc4861d10e4e"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "80e69175b4a5d05a319192305dc4445b"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "856bdc9a3cf8d87e3f017fe2e56be683"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "5239a551898f8e88d619653b1b8da2f1"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "a601d93e895694fe1de9896622e40392"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "2b9a7556fac30587c28061311f41e9a4"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "74ccb7c343916281bd121a9a8ea34ad6"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "10bc1e03c84a35213f9421c20e8e006b"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "ce2d34e477115c765a38f9105f59fba6"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "f24f1c67e3d41628bac73f171b503416"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "3d68d78549fe6ab8fbee36be16c7b3ae"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "087e7fcab3b91842c02a75f4255628bc"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "5a4338c8f43e5d9a2e998a3979620463"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "94f32389decf53886804da24871cb14e"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "d743ed842943a8e25e31389312b82258"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "1adf5f82c76a4fd69ae12fd749d6366e"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "a5f1e90ffcb5b36124d0edf75a3fc0af"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "f112aa82bc6ce3dbb458cc16852d0097"
  },
  {
    "url": "page-data/services/rover/page-data.json",
    "revision": "863c9330955e9f484d0bd657d6921c07"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "a2baac0887e57eb5a48a859b15ad327c"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "85ab54e241cbe6149d8164cf39a6e17b"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "bdd9a38470ebba8182433a44dc493fa4"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "7ba7adbbb3e9502298e9fcf8eccce618"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "a463f84f90946e7e4c515816d5581c80"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "2ed8afb8c2b305dd544055b8aba31233"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "d86ae96f9d1fcef3a9bc03adffae1eda"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "ecbe712e063290215319c09bb9d74144"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "8674e66a64dad490d7305dc3ea61551c"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "de1bb7130283253426fd87885808110a"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "b9742e5d99c7d6e32cdeae577a5eac96"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "27fb8c93ecffc0e6c3f7afbfdff5fdda"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "0caf2bd20671338e8f23d05bbaf9e84b"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "e31d2da13d9a083dbc14fb1d7b1c117b"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "a28d2e8002175e7359fb6a83fea6a638"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "1808fafb9d0bc22a85793e417ff9fe3d"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "396ef70696d87b133fddcddabd50fc81"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "f9dc256d8122a4e7b64035620d825b64"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "80d13e96de298cb3eb86bb0cbb7d7ef1"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "f0868f702ea31ffc580ac5108dbcfa11"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "716d0ccbb9d65fc9bac04b92a913bd5c"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "0ae67723c84304f846ae1e81b3fb45f7"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "4082716ad0ee7c29a56ac8b0339bcf14"
  },
  {
    "url": "cedf955bcb9c16f8fa8010180273d48c1156d4ea-58cb00e2b1cbd99c8c78.js"
  },
  {
    "url": "7be8bd5e1d50433339e51f16955b42d6c2521d6b-f2b1cd1bd5c5765a2a70.js"
  },
  {
    "url": "a93809c29f21527c5152987808106017bef635d2-4dc19c2e3774bb4171c2.js"
  },
  {
    "url": "component---src-pages-tools-azure-device-twin-designer-tsx-812fc787810ebcb13fab.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "4a3a3db5ad8008a0e50a73f66cbdfeea"
  },
  {
    "url": "213f6b1d983941c1fa45e0629211a4163c86d0cb-86997cd816c0802f0ab6.js"
  },
  {
    "url": "component---src-pages-tools-collector-tsx-c02c249308e57c9e8746.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "740b8be8955088435bedfff205ccd1db"
  },
  {
    "url": "5cb7c78286c5fcecf4d3c60360196e55585b6a15-f7066ffa882da93900b3.js"
  },
  {
    "url": "component---src-pages-tools-device-registration-tsx-483febe90e8c388cbedf.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "b75fc9ebf275129bb02372ae4ad3deea"
  },
  {
    "url": "component---src-pages-tools-model-uploader-tsx-9e7341693154198f81f4.js"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-tsx-1f0031ec04208784cc4d.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "81af322bae0cecb0e77527dd8a8b0b2e"
  },
  {
    "url": "component---src-pages-tools-flood-test-tsx-8f84e099019f979415d8.js"
  },
  {
    "url": "page-data/tools/flood-test/page-data.json",
    "revision": "8c2893d243c8e082f3097affa2a61423"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-77f33519c4d7f36bdc44.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "537cd8f4ac8e0a6a3acac3ec1624aebb"
  },
  {
    "url": "component---src-pages-tools-makecode-mdx-319a13cd5655c4f31d66.js"
  },
  {
    "url": "page-data/tools/makecode/page-data.json",
    "revision": "dc554b5a7b3bba043dc9096b8a2927b6"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-tsx-0ac4ac8c3a1c8c9435e0.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "fff97a63d7d76d0afb3e023b1d340b17"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-tsx-be452cd324e7a7f9edd8.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "61e9dde0235718f6fc9c6b7209855630"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "a838dbf6f2db4c39cdcfc7a5c3a17004"
  },
  {
    "url": "de590f55fa2f17e49ed8680dc5a022fe834f3017-4d54e26d500912ec85fe.js"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-tsx-a1908fcdf19139576b25.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "88be1c3c5dcb00498e66a7bcf786752c"
  },
  {
    "url": "component---src-pages-tools-player-mdx-9b73caf8f7db5fcf92c9.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "e92e52f3a9625a37299f7173dd8afda8"
  },
  {
    "url": "component---src-pages-tools-prototest-tsx-7f9214748bc025e8c340.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "3df7a168968ae7ae4a28fc1f91316022"
  },
  {
    "url": "component---src-pages-tools-service-editor-tsx-4fc7174d005f0031a1b5.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "74d24c010c1994eeb355234e8c489853"
  },
  {
    "url": "859a83de993caea7524bf57c2975f3be6812c8c3-4dd5183615851c4bfc57.js"
  },
  {
    "url": "component---src-pages-tools-service-test-tsx-6f62dc4ae20ccf7960c5.js"
  },
  {
    "url": "page-data/tools/service-test/page-data.json",
    "revision": "77e8979ad6aa9d38e005a705806733dc"
  },
  {
    "url": "component---src-pages-tools-service-test-editor-tsx-200f2d685fa786f6a31f.js"
  },
  {
    "url": "page-data/tools/service-test-editor/page-data.json",
    "revision": "a1216ffbe4732ada616c66d63a8c48f1"
  },
  {
    "url": "component---src-pages-tools-settings-manager-tsx-6e96bf2640168af50d31.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "969e038c1e6a37c17233d6e56ae3eed1"
  },
  {
    "url": "component---src-pages-tools-updater-tsx-9896a1228a0d885af576.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "c886a85ca1c107b2a26076b89433ebc8"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "4052059cc1679e983d09b775d2c4392c"
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-7fdf40ee5b2d28f6fd22.js`))) {
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
