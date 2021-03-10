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
    "url": "webpack-runtime-7e0ac149a60ec832d5e9.js"
  },
  {
    "url": "framework-02b10e5202954cae3bcf.js"
  },
  {
    "url": "styles.70142e700204666b4874.css"
  },
  {
    "url": "styles-7766feb820b7bb9d8281.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2d34f92e25bab12847ffa0d6584d9b03"
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
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-53ed2e229dfaf45ce180.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "a89f342785ab3d16ed2e505614f40c96"
  },
  {
    "url": "page-data/sq/d/265560810.json",
    "revision": "c58c97860bb8f40c16647c1b723b559b"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "3be363ed0f57d9c19896cd156dbfa5f5"
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
    "revision": "8b42764b833145d84d2b7d49dde00a28"
  },
  {
    "url": "polyfill-9e1d151e97705c3bce18.js"
  },
  {
    "url": "component---src-pages-404-mdx-197ee9f51b73655f2720.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "13774d6c81d6c0259489716361db84df"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "b0a34379a52c51d25d243d21f83139c2"
  },
  {
    "url": "component---src-pages-clients-mdx-e964a62c6ce0690d7c48.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "18f4d097e4e4b0a878e991731ed0245f"
  },
  {
    "url": "6ec4d6a33d4cc72596bf6f5251612200d6a75cc2-5b05229fe8e0da55b420.js"
  },
  {
    "url": "0c34818df9f3687b29e65c3f437c694cc9a7bdc4-ad970ccd27426c248729.js"
  },
  {
    "url": "867abfacdeb9b3fcc19a7416df186c3afde55a6e-0f0b82a04eb98668c867.js"
  },
  {
    "url": "6a44566b7d0244e757e3a2f563106d76db481f88-7cfeb603cac535d3603d.js"
  },
  {
    "url": "c5c2fca5218118c969fe1f1c65f0da6292fa76e9-8f09b142d98c5a6f4aad.js"
  },
  {
    "url": "e80b7f91084fbc7b4a7d2421cce2612e8cbd6f90-a13d5b6eee1d6b9d0f8a.js"
  },
  {
    "url": "7ba4bbf4aefea763e49128eb41f842ebacf43e24-e63ea9d3d7c23c5a9ee8.js"
  },
  {
    "url": "component---src-pages-dashboard-tsx-8b7d2d9828b20f205a70.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "1ad03e070e2b817ca8911d0a3b207c9d"
  },
  {
    "url": "63c2e5c4b769a1872b3fe0fdc9da98434b329add-9f802a54488d11d0f7f4.js"
  },
  {
    "url": "component---src-pages-devices-tsx-2f4888285b38575457dc.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "0f9ffeab6adc362ba3e2cf0f8c8c6714"
  },
  {
    "url": "component---src-pages-dtmi-mdx-ecbfa2a5d573b0df6ee1.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "74ceae1c9b4ef8df132bae579ad0b6ba"
  },
  {
    "url": "component---src-pages-github-tsx-f6675726671ea41c048c.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "314572c35e60ba4f16b1aff5120496ba"
  },
  {
    "url": "component---src-pages-index-mdx-064c7ea28338aa3343c1.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "bd47ace27f7b6d17bb8bd571ec28ca3a"
  },
  {
    "url": "component---src-components-spec-tsx-b753d0ac29ff3a75dcad.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "49eaa12f0e921074ea4a9f767483d457"
  },
  {
    "url": "component---src-pages-services-tsx-55c257405e2268dae8c3.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "6536dedd53059a982401d3f7d8d15973"
  },
  {
    "url": "component---src-pages-tools-mdx-7015a0fd752d54cefa61.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "11d82c1fd89b98d626781c0dbd68c191"
  },
  {
    "url": "component---src-pages-traces-mdx-45dab14dc5e596210dbe.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "bb8b2152e8e4c2b7fb1c9416f325915d"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "956ff7cdfb14ca0175145a22c134f608"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "f70a7e2ee940a3797b44520ce5ea4b75"
  },
  {
    "url": "page-data/reference/led-status/page-data.json",
    "revision": "42876f702ce821e951c971187b1aae30"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "5a997cb7a1ae7af4d353169abe88469d"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "e57bc2254484453f6df494d3b2aa6979"
  },
  {
    "url": "page-data/reference/service-tests/page-data.json",
    "revision": "d26674a248dfcf66f022cfdb89bf3ba1"
  },
  {
    "url": "component---src-templates-service-mdx-89f953ea782a435d3b1f.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "8a3eccf6389cf4e0f25665afcbb8d256"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "1364fa834c2f5d1ffcb366683b9fe462"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "8d3fc0207496d81647ccdf24f42af90d"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "714bb3e03f49adc56517ce849a90aa16"
  },
  {
    "url": "page-data/services/analogbutton/page-data.json",
    "revision": "d7f37ac657ffb2ae2f24ffb22381197a"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "3135f4467e0e02909e72fe68b0064067"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "9df006a93b9d376bee8e5665493ca6dc"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "df4ed922f42a2afddf37b0214eb82759"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "05706555a219919f99ba6596ed3fe3ae"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "99d4365ee914c44a1e473739577aa219"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "c9896ebb90e79e66ac2eee471e2c5e93"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "e2d36f7c572b90b2345709c77c67d39b"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "a2ab369483a8cfbe38ed5375f8a8f855"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "c9078c3c196616487ebf2a7dfa8ead31"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "cb866196d36ac0f5bcc15d3f6e53aedc"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "0ac62a683819bdb2bc86da8ce6a85b30"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "a926f4ea3926bf0f970dbaf4bffc232c"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "0a5408bccfa9293b13f952e652fa47ee"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "bd414c17a1ad1d5ebef3930bceb5a217"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "a9d9991060ec355c49495f6f1f956b49"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "c7a616d8370d131acd2f86d628cea4f2"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "2ebc4767aa12576d8cf8d0d69d6875ea"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "888e31ca8cdc6075996bc806c99244e7"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "d6262a876893ed35ccffe0ce8a96e96b"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "68cdd470e85817f75e318c59a379fa80"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "c88170560ce76e43acebd335c67f94d3"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "ca5919469fd08aa8b871c6d80d204f4d"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "983adff628336d816340c6559ccceaa5"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "b730d0f59b09b830996d8debbca3d522"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "f97a0cc06ca4d4b294fc3d5e7a1bf811"
  },
  {
    "url": "page-data/services/ledmatrix/page-data.json",
    "revision": "16c06155d0b9840445849a41fc0c3e26"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "f9a91af898f8f930bec8bf3f99a1909b"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "5935baa2d97f00aaa481ec87d878bad3"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "ca7b9ce685563727a68b643982fceb65"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "c0ebd1917909f3b7745843f1a07ef0da"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "cfb7fa91529c8ce8f718f1a6e876560f"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "39636aca25e92b5658d6b9ab0cb5968c"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "251496c74e53f6584f4f6605ed39a15b"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "2fe4f878940f22882466e25373436154"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "87c9fc1afa3c1ae5038baa23f278f103"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "295791a123ca33f126c1f3fe237b42da"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "fc3c6b460b4b510075c5e8a7367c41f7"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "6526fe288bc7cf586be9b6c74c91c4eb"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "20ee51e87445fbf6ec5eef317ba7aa05"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "3b145ce85046508b35843b7a49ecc0cd"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "72e9f7585a4fc027b5e2f641e13533b2"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "274ea9937d1b46574239ec3383329c54"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "411b17a5ea7d8c42e51a5c84055189ce"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "8991e142be864b0295791789784a3654"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "1e2c11c0f6ab05c7a94b55de3bcc7b32"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "45d8012b84b3777506b47b909f4a2ef4"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "fe84a60abed9fb793473e48f4eb485b0"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "fba637a8761901a8dcee1f6a50982e20"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "cf0701937e6bcdd5559695d90d20949e"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "b60829a3c5702b3b642b237b2b8906e0"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "093584ba446a37871ff7ff7af3baba25"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "329da8eed84dd2d8b549aded88de9243"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "b57872498dcb7bb5914b457af4cb31f3"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "8a2f736d8c851aa09dc91dad0425b852"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "388c880c5441866b70e0559859a3b9ca"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "fac773dbbb78b97cb6e95c731803a6c4"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "a9491ff0e509cda052fc0c7ea3febf82"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "556d68ed320b7ae5e2632ad2a933fe55"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "52368cbd190bf85314558cff9c2b07be"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "d9de130c27b783f3a2ffd80d161e3b88"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "e6ae5a7f042a38a0fa9ca90095a2716f"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "715f9b4d6cb662b0024969169b7ec76f"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "6b28280618ba0fd4329d148246f9055e"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "13734c36d613cdf325600a1bf31121c6"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "3e77bbda2672d3b98d670d32a69acd96"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "d2a72e2a876d78c500371e25a3708adf"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "26760000573eb0ef0dc0acec65d0a3a9"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "c6e3e766ee96e201053a3f339a52f985"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "0a3ec4119d98d9205bcebed5e231b935"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "b06c81a3c0d9b38c9f222927f374c970"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "752340967f5868bd6c627b310a0b93d4"
  },
  {
    "url": "5854d9dcca59c715ad87de8bcedce8fa817bdd95-bb7bbc25846b2bd3c042.js"
  },
  {
    "url": "963be91104bf6b66495ae1ee58e2aa7a46991ea7-76e944cab79f10a7c083.js"
  },
  {
    "url": "component---src-pages-tools-azure-device-twin-designer-tsx-f44c6549b9cc7de44fb9.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "120911645e7ca370be8df8413462c34a"
  },
  {
    "url": "b2aab2bc29d9fafdace515a372a0c94477976bac-5ef5dc1032f85c7cceeb.js"
  },
  {
    "url": "component---src-pages-tools-collector-tsx-72a75bcb85b2eb4e0a9a.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "3baf882ccdcdd364345ed6c7483f8ca5"
  },
  {
    "url": "9b4f0e4afd1e041d33a9602de8b1b47037d3d041-bd4669fd68a7ebe2cb43.js"
  },
  {
    "url": "component---src-pages-tools-device-registration-tsx-abcda8a140d219be637d.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "7e46bf826ce6934f708e4e4fb6718023"
  },
  {
    "url": "component---src-pages-tools-model-uploader-tsx-39e497ea846615e59cbe.js"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-tsx-60e019cd40f450373bcd.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "109a23f3ac8833bf01cb5be61088c977"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-272350e60bb5b4ef0fa2.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "61cd6cf2365ac2bd60dafda1d3bca292"
  },
  {
    "url": "component---src-pages-tools-led-animation-designer-tsx-075dfb201c50e784c9a0.js"
  },
  {
    "url": "page-data/tools/led-animation-designer/page-data.json",
    "revision": "7b423f975ec32c1fd039cd1338ab0524"
  },
  {
    "url": "component---src-pages-tools-makecode-mdx-6508ea4beefb01610a0f.js"
  },
  {
    "url": "page-data/tools/makecode/page-data.json",
    "revision": "fc770dc901b0875bbe030b862bc18685"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-tsx-c5aacf16febc1d77d707.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "eb68b97fb89cba75718c473be3caa3b2"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-tsx-32650fd7e7e27495cd0e.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "37670052b639bd7386a717946227653a"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "6b06b771b9d4a08ac670e7b79df8c336"
  },
  {
    "url": "6d5d946bd81d862c789d2a20f7bc74f4ab10f400-3d410f04f6a00592ee83.js"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-tsx-f7243962d2ceb89bdea2.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "4b5c553651cf1c94ce716ab9b8e2363d"
  },
  {
    "url": "component---src-pages-tools-player-mdx-703bcb80f11c062e4c63.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "5d9dfa83fa282227e2d5c3383388ed88"
  },
  {
    "url": "component---src-pages-tools-prototest-tsx-c58139ed4b56c0e03916.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "eebd9f2af49608f247eaf78585c90a65"
  },
  {
    "url": "component---src-pages-tools-role-manager-tsx-cce6ce2288c34c9a120d.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "e0c7d40f61126cbf8f494e5254ae0727"
  },
  {
    "url": "component---src-pages-tools-service-editor-tsx-45ce060d70f8f9463844.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "da749fea32d480e5dca6f4b4086430eb"
  },
  {
    "url": "3dcbafda74151648e78934a2af5a56839dd02318-df61f36c58811af51ffc.js"
  },
  {
    "url": "component---src-pages-tools-service-test-editor-tsx-65816ed565114bbedd0e.js"
  },
  {
    "url": "page-data/tools/service-test-editor/page-data.json",
    "revision": "ac66cbad3e07238d20c3d5fcb79e50ed"
  },
  {
    "url": "component---src-pages-tools-settings-manager-tsx-7df12c12b12f542ffc9d.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "6a15e3c79e31e8fe4e8d5e9302ffd6d5"
  },
  {
    "url": "component---src-pages-tools-updater-tsx-55994dc559b2e5455735.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "231f234275f0e2720e31a97c39448a06"
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-5495e4c01d4b08dda318.js`))) {
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
