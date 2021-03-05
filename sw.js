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
    "url": "webpack-runtime-f1ae69674f18dee8bd54.js"
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
    "revision": "7c266180b40aa2f3b7734901a70fceb9"
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
    "revision": "44f9cd02e9a15d7186535aebe216ca5d"
  },
  {
    "url": "page-data/sq/d/2270080012.json",
    "revision": "8a50acd1418ec95b57f9739dc9d34a03"
  },
  {
    "url": "page-data/sq/d/2461311362.json",
    "revision": "f65a56b33b711682e6ca265624180d04"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "70717855f8ffc03f1bd18af126819128"
  },
  {
    "url": "page-data/sq/d/398483500.json",
    "revision": "fc1d3db6871ff7a0d5feb641d1cc7ddc"
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
    "revision": "86c20038a0efcea46ef05ac99802bc7b"
  },
  {
    "url": "polyfill-59ee27a2411ab13ccf1c.js"
  },
  {
    "url": "component---src-pages-404-mdx-df8fb348d90b25b5ced1.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "d8cc6ca41f19162492c88ff51bdda3c3"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "5f993f1faa30726078392959bfd9f344"
  },
  {
    "url": "component---src-pages-clients-mdx-1c2d75eaaa52a83d7666.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "4e5a50076afcac3c9d67b1cfa5baa8c7"
  },
  {
    "url": "component---src-pages-dashboard-mdx-ccb340511296319f7643.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "aa747fc7e0cc50f22db6ee5ce4f063ee"
  },
  {
    "url": "component---src-pages-devices-mdx-ecd3e159987412d0201b.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "9206dabd01cab2ecdee6e814d61307f4"
  },
  {
    "url": "component---src-pages-dtmi-mdx-548f45577c38a85d6ce2.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "8a9c2c9135db3dbce8172bee8ebfc05a"
  },
  {
    "url": "component---src-pages-github-mdx-37f93c44981c27913cd5.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "a8560842a69975b281a453d5e0937404"
  },
  {
    "url": "component---src-pages-index-mdx-79e0ebfd8430400a3dad.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "9fe8c4a372014258d4653c359e2a32b3"
  },
  {
    "url": "component---src-components-spec-tsx-e7b84d4d2083b0000dc9.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "56111991b80bc6fc59f8b65bf3440f43"
  },
  {
    "url": "component---src-pages-services-mdx-a2d74a975081430560a3.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "9e0e5ea3552e1a80c5f417bfa948bb5a"
  },
  {
    "url": "component---src-pages-tools-mdx-b948ec4a96dec29b0d28.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "6c8e22f9275b78f2d4459dba0171da7c"
  },
  {
    "url": "component---src-pages-traces-mdx-d5337095fda6ea4dc7fc.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "25d8462d4e6602de59d52ed1a635f9ad"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "fca119d6a40e209e4ff5a7cb0919f364"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "f8cf85724331e1d4f2760a0508533afe"
  },
  {
    "url": "page-data/reference/led-status/page-data.json",
    "revision": "596a5c21ecc8fad1bfd1350be1e0d8c6"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "3457fa6c0420f38c3e387b8cbe2447e1"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "094432735e5e53a1f09b0dcb7476d388"
  },
  {
    "url": "page-data/reference/service-tests/page-data.json",
    "revision": "3eb8e52766d3a5d822981191923511dd"
  },
  {
    "url": "component---src-templates-service-mdx-4febef048f9ab2c02bf2.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "3ef1e0b52619cc64803fc0acee2c9748"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "8a28fc1e7f29f248cdabd1400a757859"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "eba5203229f0d92d6d6bd2a845791193"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "78a271d859a7bba47d324eb46063f095"
  },
  {
    "url": "page-data/services/analogbutton/page-data.json",
    "revision": "d9ca68fc5fde116a9b0d32bb9c21776c"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "6d0b2aac3c6f495e9309e0bcb6ac2171"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "6eaa2da5561f6286cf7eecb9c43c1295"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "1b5b6c067861cdf262698c74f702fe16"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "9f2b93ac24fa208825e521a6197c0904"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "c3f6b211262b26c187e1581a590dca3e"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "75391ba7eaf62f91497c1482ffba9f77"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "760617f8fb95020829e578c8d47a6f93"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "56b0d113cc59a98ca8ed2c46f494f026"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "587d3165ddf9fa120c32140e9f471fcd"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "94fd7d95395935c052dbe9d8ca9d9e0b"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "3e4f4d5bfe988fd61891054c8a31c838"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "aa96d2d597171385262c5b0b4cabd2f8"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "9c93b58d2f4212c813a38d6704a45b9a"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "67cf46fc93aa7d5294defa4baa180de3"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "cc176f0d503c89ffbedae2cc64c6900d"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "38392c36173aebcb262cd302c1ef27c4"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "0f718270ef4b835232e57b1e89410b7f"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "6471900aa29f22821cfc1091515eedf0"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "0b7ee96a30da3c62c32cbb8359cd8086"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "2f45529b97a9faded8186f64f1397c34"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "fe64bd1813e21120a3c31e743e9235b7"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "155db39842ee1183af2d1d6f7bfb3a3d"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "edfd34c1bada5c82a8ecabf13d91622a"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "5dc10ab33dc72a242065c9628ae72037"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "f790d306e028587260b446c61b6117b1"
  },
  {
    "url": "page-data/services/ledmatrix/page-data.json",
    "revision": "fe21e5c66321e55d9ace8ca9d7a05ddd"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "3fcca2644e838e9645bbad18c554db5a"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "4c1c344c0c49c89a0bccabcebe96cc70"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "6cf3cc9183533506104d26455bd8cca3"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "730b42e657759cf60a0103ef34f838e1"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "9e72306c36a53f09fd08842b594d5357"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "0d04663a075cbb10ac4cfcdc94af58b6"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "397cde2c6357b3828ce403abd3181a3b"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "d551ab0597125fc55251fc8aa0560fcc"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "7985b9aaeb0e1895f17b6748db456a10"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "9a1ef945e294451c028bb1ee852833e2"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "3f7893172d97b8c63d26fa9b46f912a7"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "48bf7e421d25cf6479b5eeacd13db8ec"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "4e70ae82396d531904b160d478dd1e7a"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "733d6e801231caa37db6b3a5271e7ec3"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "1d48caf0c817af1c538fddaf176a15f6"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "c15185d7709cf8e7c3f7de3fac0a154d"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "1ca25b6f1ce37cc0f7ef2fab6f528353"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "b135c800463ea62f579b86f718b1b8bc"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "1b61a50004272beec6330f72b42b80ad"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "3bb9868dccfe4f2870034af846572ae6"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "c6c1d8b4bab5a3a82c322779f5bc1c6a"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "103ed13a65840e69d20277952652087e"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "5135666646da6ab783c6a217864eb33e"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "6f8faea4a9af83eb98eb68be962d8ba4"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "2f2e49ae26dc27cea55f42adba6433b4"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "f66158b8e5d325748a0520d39c7a60a9"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "d6b0abf3473d6d9668aea8fcca01e5e4"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "f2d20e767df61a4bac2f92fa1beddbba"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "8e3896a8db0c7b47df464977f198228e"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "6b09a175bdb9f2c78c5781b0de6d5091"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "c3ab48cf6fcd4dfde14af5ad83ba3cdd"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "fdf152d4cd8518964c24b1c709963811"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "017cd3cee36b1775cdf7a9b083a352b2"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "88c778a2539f635617920bf5d55cdc0b"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "30d97c16fb41106f63479b88f10fc2d1"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "3a9c9b57ca3f1422f0ba76be48ca5d80"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "c1377b98f2abea0b655c386e15177f84"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "1ae90c307cc9928c4d1ccb3dc664e808"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "faff4b2abb35e4820ef3d2911314912b"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "4212b6b1f6cb710f17509beca561beff"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "6fad575343e4ec3c111526d55538e3e5"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "6b9552740efb3c14e76343617745a360"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "d8d8f33aa89aaae8d59fc0c25f07846c"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "7fd9092866056b0ddd00b09ad22d6992"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "b1e7b38da53fbf54619e6a878956e364"
  },
  {
    "url": "component---src-pages-tools-azure-device-twin-designer-mdx-91df993cba1527932dde.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "93b0fb4dd5e45810dd97b394eb483d49"
  },
  {
    "url": "component---src-pages-tools-azure-iot-hub-mdx-3d0d66910b236bb9d211.js"
  },
  {
    "url": "page-data/tools/azure-iot-hub/page-data.json",
    "revision": "004e7c864927a97d02c4b2cd40aab3d8"
  },
  {
    "url": "component---src-pages-tools-collector-mdx-6f0b3a1e701a73fd3a14.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "86213c56e8414a10344468e5f4261760"
  },
  {
    "url": "component---src-pages-tools-device-registration-mdx-a066077d349b8f4c411b.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "c51fb1740b2ac652c5360079112274cc"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-mdx-814e5e30f09d26fc910f.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "8d2eab49ce9899d2e71ada95bbc8dea2"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-95d68a61c3a472b83269.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "703023a572e25ce06b67c1c2a1e868f5"
  },
  {
    "url": "component---src-pages-tools-led-animation-designer-mdx-d5954efb08807ec7ae9d.js"
  },
  {
    "url": "page-data/tools/led-animation-designer/page-data.json",
    "revision": "fe388e237bfd8c7828035bde2d170d99"
  },
  {
    "url": "component---src-pages-tools-makecode-mdx-30afa7784ba0055da54d.js"
  },
  {
    "url": "page-data/tools/makecode/page-data.json",
    "revision": "5dd6ca05a91aa8c49f647219fddf5574"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-mdx-ccca135638a346125ef1.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "7bcba7b179b966c761077fb71a02c3e4"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-mdx-50522fc60469c1aa0dc1.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "de05d4f367f37029233dada4916f1d8b"
  },
  {
    "url": "component---src-pages-tools-model-uploader-mdx-4e3baa3faa924f6943bb.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "2bf4f35b0ee244656fc667bf1b00f17f"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-48880069f366f80282bd.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "bc028e025c67a55b95e7b60dad922d7e"
  },
  {
    "url": "component---src-pages-tools-player-mdx-7ffe802b61cda79ad3bc.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "3cf324700d7b50cd21d5220dcbfda394"
  },
  {
    "url": "component---src-pages-tools-prototest-mdx-d0efbf32d6a748f265e3.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "704ee849fbb64aab9cd8ad57ef226561"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-876e9829fe8dfbf8eb34.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "2e2a90bf4e39840311b1068f0d0e0fe8"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-9f629f50b5733658b5e0.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "309f2903b526f4a9db930f0c572ae1da"
  },
  {
    "url": "component---src-pages-tools-service-test-editor-mdx-e31a146e8c69d05102ea.js"
  },
  {
    "url": "page-data/tools/service-test-editor/page-data.json",
    "revision": "682c89884bd455d78cb45e9b3d12b991"
  },
  {
    "url": "component---src-pages-tools-settings-manager-mdx-66120ddb7736eb17af61.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "421825917a175be68dab91aab982ed95"
  },
  {
    "url": "component---src-pages-tools-updater-mdx-c8f9529d56096a1b3ff9.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "9c10a1abeb0d7b8f008f7274a1855ce0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a4531b6021f7244d01b003572b8f90d1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-51ee60737c50a45599ba.js`))) {
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
