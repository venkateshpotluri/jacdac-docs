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
    "url": "webpack-runtime-2b142a26a25f4874a093.js"
  },
  {
    "url": "framework-2b7edf4901273164bb4a.js"
  },
  {
    "url": "styles.70142e700204666b4874.css"
  },
  {
    "url": "styles-f66fd5c1cc567d831396.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "841b1efd080a496c282fac337b73b55a"
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
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-04f61738fed82d56a13e.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "06d6460dcc554287800119c0780dac97"
  },
  {
    "url": "page-data/sq/d/2307937736.json",
    "revision": "c97c40d6d108189a6dce02bc580a6602"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "318b0c337e44481ff8bbdf8d7b41ab76"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "a1c1f9e10ee4fe68f576187359ccbd4d"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "744839af34bc83b2beaa07313a386ed5"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "cb3b6f28ea65787a51961f346c7222ca"
  },
  {
    "url": "polyfill-d4d90feccc8ac9ef9552.js"
  },
  {
    "url": "component---src-pages-404-mdx-be55b0d799ec7c4ff2e7.js"
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
    "url": "component---src-pages-clients-mdx-e0c9ff1026a6333595b4.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "ea5d3a294803bc963607eef37b1638d5"
  },
  {
    "url": "18f7f18ac61ca08d1bf276acf7e97a3c54a8b094-14781b1bee56ea887155.js"
  },
  {
    "url": "b50463303e66f87da9d82bca27a94a35d0612ff5-3a0b7c119cd95240eda9.js"
  },
  {
    "url": "f53747a0894b4981ed685848e7e5383fffd8ad03-fea5cd8b1ee788ceb82d.js"
  },
  {
    "url": "564c7d9b0d75165b4670aa79319983ae3e0307f2-3cbec76081a27ea28bfb.js"
  },
  {
    "url": "0cbfaaca360b7f0c0bf11c7efe9029916b0097c0-478bd27093cc007bee8d.js"
  },
  {
    "url": "c86a81d4c44b6d30de64da82e2ba935152f042a9-4f018470bcd404fb77dd.js"
  },
  {
    "url": "0c34818df9f3687b29e65c3f437c694cc9a7bdc4-ab31de794a73635f01e8.js"
  },
  {
    "url": "867abfacdeb9b3fcc19a7416df186c3afde55a6e-254ae847cd3c096f0b00.js"
  },
  {
    "url": "90855b67050ef95bba91e5194b197207487149c8-fe80a21d444f9a3b97a9.js"
  },
  {
    "url": "c5c2fca5218118c969fe1f1c65f0da6292fa76e9-fa13888bf3042d6923e2.js"
  },
  {
    "url": "e364ab7cfe7483b98d48231ca462993a237724aa-ceed4bcf3e739a813149.js"
  },
  {
    "url": "e80b7f91084fbc7b4a7d2421cce2612e8cbd6f90-c24761c230599d3269f9.js"
  },
  {
    "url": "7ba4bbf4aefea763e49128eb41f842ebacf43e24-4645078e526dfc289f9d.js"
  },
  {
    "url": "component---src-pages-dashboard-tsx-4d0e66a46365b27d46bf.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "213904b37cb7592cd6f13ee2c4f86fd1"
  },
  {
    "url": "63c2e5c4b769a1872b3fe0fdc9da98434b329add-ff2154a79c650fcbcdce.js"
  },
  {
    "url": "component---src-pages-devices-tsx-c093b7306cc766319b92.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "dcdb17db02b3f08fe77f88fbd516ec58"
  },
  {
    "url": "component---src-pages-dtmi-mdx-a84c0a7152d572d295af.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "922c06ce22fbafe23ffbe902872f7bea"
  },
  {
    "url": "component---src-pages-github-tsx-6ed73e513a9562fe18ea.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "7adc12c94f43568d4bdb0cc62f1e94c6"
  },
  {
    "url": "component---src-pages-index-mdx-a92a66e4bea6c4cf2ad8.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "cd8ef10d6d8e0249c0b35ed3ebac5862"
  },
  {
    "url": "component---src-components-spec-tsx-485ed0f437981bbc1b41.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "7118df1f90f6c103d3e407e3e0012315"
  },
  {
    "url": "component---src-pages-services-tsx-709aef3abefb8407ebfe.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "82cbdb525dcf8c1ef73ee046171969c3"
  },
  {
    "url": "component---src-pages-tools-mdx-cb25f656ee9e100e13ee.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "f700e95b86abf2c15c9c99c61f937cd8"
  },
  {
    "url": "component---src-pages-traces-mdx-04e165580ebab321a808.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "d377cde3089a20cb9d7647e5a72ea207"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "3b8acbab75bf7a2d883f9ae9f3fe97c0"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "680208e088b78a6c6733767569ea8b31"
  },
  {
    "url": "page-data/reference/led-status/page-data.json",
    "revision": "b26ad55c1525fdb553d077c196955839"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "ea7d3d3f8a61324d3ae229ce5b960fc5"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "905b7bd6bbd4ddc598081fd21a9bcde8"
  },
  {
    "url": "page-data/reference/service-tests/page-data.json",
    "revision": "4a2072cf7e809507e448af13bddb24ed"
  },
  {
    "url": "component---src-templates-service-mdx-cdddc303b628db31a790.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "7226050dd00caba7af473748ed20852d"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "a9082905760ce8b53e3061b9116002df"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "205a6a49b93cc2644aff087d6760a9e0"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "567c0da6621e10b29b7f1361d885cd05"
  },
  {
    "url": "page-data/services/analogbutton/page-data.json",
    "revision": "9d10a7947ed011a5a6bd590cb9beb2a9"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "f99f95223cee6bef6dd7ef45d45f8ed3"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "59b3e0f4d6907edfd5d189165a8d184c"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "4b13227efe03939a0bb12177101974c0"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "4f3f116c17d83428c79cb1988d42918e"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "f3d162e777d3d91461b207a4b58e3e0d"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "0b6644bfc86230f025aa316cdde3f468"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "5fa8385152b98bc97c0765bbd51d5d33"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "837b1e1f1202ad3f574f24ffeb8b10df"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "e55d75d2d9b4a96080083fdba03419e4"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "3d6b775023ac07d90cfe10d9e6389141"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "db49f85892988897c82ed4296df89d92"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "55ad328f99e2e9a58ac0159e1b29e141"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "b3a17158cbe63bcbaf7cd50c0a0415c2"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "d38a6705d9f3a3141800c89bbefadd76"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "3a67f942ab6699fd0e628109ad3393cf"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "4e00ed377f7770a463d4d9ea76958b44"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "054123c96e93ae84084a4deb92126274"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "d90c51060ce810aeefd9a548b3bc297d"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "81011721748c3b63d1108b76a701b73e"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "646fbbfa9b0d2d0b0e49fbcb438cbfac"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "23ae794e465927a6bc404ae371d2c860"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "61078fefea901f9465440f9b536b92a2"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "a426b9e27a678bbbde111a700a3dd123"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "06297cf25afe8435dca5449834f9653b"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "3b96c3439d13dc444952bcb94a6e0647"
  },
  {
    "url": "page-data/services/ledmatrix/page-data.json",
    "revision": "af745e296c71ad05444227e51ded9c6b"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "6753531e4bb88ef6759114bf854eb7a2"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "b251de6b028617ebe2de6ec9d17003ad"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "964537349a217c3e8bde080bc99b0b1c"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "adbeea3d84d63c0a2df9faea46f1b93b"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "3a9440a3e21ba0e1af1619a92acbc93b"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "0ab9f777523c3b0e45cb1f17dc6ceede"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "7128959bd70e8ebe0642a5aa26bcca89"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "b4103b73d526b606332ae5d9edc96260"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "5bf6f6778bada8aeb17cd2f9d2c0eff5"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "055da7904399203e2787855782a6ca2f"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "42c9e1e154a274cb4b171eddda26e533"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "8c79226047977e1491bc2e12ff1e718f"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "a2d658888f62fef966fea55f9d6d9b35"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "acec686c89b8f84c4c4557cb41c6a8ab"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "bbb3fb0e4201f56f867f6e8a33c7eaeb"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "89c81cbe42fefe048a8e7f18f5f001d2"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "c0d2383fe2b09fcc6911ab08de3043a7"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "faeb1b1f0d4a6de37697cd57d94d31d3"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "4cb3f68f1fcf90ff22477c66ab63cbad"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "9f03f2b3acaf0c620b5a5d6121b4fdfd"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "9dc53bd7dae3680349c8fe80126242a8"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "99a89f596e0210b02b4b650bba8364a3"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "59381f07fd83c0283cad60bf40858b0d"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "3fe5065f98c6a9ad4f5c1807fa9fb846"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "6397f3f1148fa730374b9d3ae20e19b9"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "a32f27979973d922483450d805d1b387"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "989b32c1f11c59fcd0d5fa11514df874"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "d14fa06c0654426ca9b6278a68acf14b"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "488259eec651b5472eaccad2d28494ef"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "c6ef14969088504c2e834e0d02c87519"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "c798dee52d7250d7110df9e322712f05"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "64ac4fab21215792f3a5acad6e75b6c6"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "d9ec4c62bea4202b116d9f7aaa800a37"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "0b7f049da45cd4813bcf835af1dfd380"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "4e70874ed1c8d8ca13d72c3aabace77e"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "efdc52b30083c19ca2c596fe28f2c417"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "0889dba803cef5947df9c7b8f3ca33bd"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "ef69e12e632f9aa45557cba763b0809c"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "b80470e2fbbd00c5491668084ad3a7a9"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "12d848ddc2e130319be8e5b2934be460"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "9e40b01e92e8251aa699fa6a534497a2"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "294563113f9b8a04d32aa79284b991c6"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "e91b4cad7424b75eb0297db4eceaae78"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "24b9ebe930306115dcbe210c20009388"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "ed5814de338b32f42a1cf8f7652b6e35"
  },
  {
    "url": "5854d9dcca59c715ad87de8bcedce8fa817bdd95-077ca69c95bee5d233b1.js"
  },
  {
    "url": "963be91104bf6b66495ae1ee58e2aa7a46991ea7-47c293e707058d3504c5.js"
  },
  {
    "url": "component---src-pages-tools-azure-device-twin-designer-tsx-d7b2715ac6fa8b8f37dd.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "4a3a3db5ad8008a0e50a73f66cbdfeea"
  },
  {
    "url": "c733f1ab5716866b4fcee22f30b87eb4d89562eb-3d36b9cf40bb46157291.js"
  },
  {
    "url": "component---src-pages-tools-collector-tsx-e745b1a188b1e57ed679.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "740b8be8955088435bedfff205ccd1db"
  },
  {
    "url": "9b4f0e4afd1e041d33a9602de8b1b47037d3d041-4017e3b139909113a311.js"
  },
  {
    "url": "component---src-pages-tools-device-registration-tsx-7e71c35f04b5827d616d.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "b75fc9ebf275129bb02372ae4ad3deea"
  },
  {
    "url": "component---src-pages-tools-model-uploader-tsx-a3c4e21c86017bb22dfc.js"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-tsx-36c3fc6c8aa0a9d30473.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "81af322bae0cecb0e77527dd8a8b0b2e"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-8dc1d0e56348c671e969.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "537cd8f4ac8e0a6a3acac3ec1624aebb"
  },
  {
    "url": "component---src-pages-tools-led-animation-designer-tsx-fd021a580bd4e91130da.js"
  },
  {
    "url": "page-data/tools/led-animation-designer/page-data.json",
    "revision": "33c002dadc02f97189dcfdbb9d6a4154"
  },
  {
    "url": "component---src-pages-tools-makecode-mdx-ca98eec8aa9a128c6443.js"
  },
  {
    "url": "page-data/tools/makecode/page-data.json",
    "revision": "dc554b5a7b3bba043dc9096b8a2927b6"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-tsx-6b28c3bf864421edaecf.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "fff97a63d7d76d0afb3e023b1d340b17"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-tsx-26add926aa054c101e15.js"
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
    "url": "6d5d946bd81d862c789d2a20f7bc74f4ab10f400-bf682a3aa9899630326f.js"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-tsx-f18024b36bc5771931b7.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "88be1c3c5dcb00498e66a7bcf786752c"
  },
  {
    "url": "component---src-pages-tools-player-mdx-ab76e1c576c6e880b9c7.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "e92e52f3a9625a37299f7173dd8afda8"
  },
  {
    "url": "component---src-pages-tools-prototest-tsx-ca6a73078c6f712a9ece.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "3df7a168968ae7ae4a28fc1f91316022"
  },
  {
    "url": "component---src-pages-tools-role-manager-tsx-78d0082f4b411614cd6d.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "e114583f0593e01b5e1c864f600d00d7"
  },
  {
    "url": "component---src-pages-tools-service-editor-tsx-02f96531662785cf87e2.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "74d24c010c1994eeb355234e8c489853"
  },
  {
    "url": "3dcbafda74151648e78934a2af5a56839dd02318-722acc9935d6d8613006.js"
  },
  {
    "url": "component---src-pages-tools-service-test-editor-tsx-af2e81e6ae32815b6251.js"
  },
  {
    "url": "page-data/tools/service-test-editor/page-data.json",
    "revision": "a1216ffbe4732ada616c66d63a8c48f1"
  },
  {
    "url": "component---src-pages-tools-settings-manager-tsx-c8fa503e8e09f0df8dc0.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "969e038c1e6a37c17233d6e56ae3eed1"
  },
  {
    "url": "component---src-pages-tools-updater-tsx-faf90abbacccfe505563.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "c886a85ca1c107b2a26076b89433ebc8"
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-ce39f3828244faeebdc8.js`))) {
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
