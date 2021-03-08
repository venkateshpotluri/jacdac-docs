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
    "url": "webpack-runtime-94a2423c13c10275bdb1.js"
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
    "revision": "7e54b5f099695d7f2d70f554f780fe12"
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
    "revision": "1aa3c6a7fdeca2c21a700e4d5db8090c"
  },
  {
    "url": "page-data/sq/d/2270080012.json",
    "revision": "f1ff1bf71fd7ab405067a178a88bd303"
  },
  {
    "url": "page-data/sq/d/2461311362.json",
    "revision": "4c079006bfc7c9ed2796bdcd8e784fda"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "e73e04892d5ba6e9dddb6773353f6152"
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
    "revision": "36df40896b68c6d70b451c391ff57a1c"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "ff709116df5a927cf591159db43b798d"
  },
  {
    "url": "polyfill-59ee27a2411ab13ccf1c.js"
  },
  {
    "url": "component---src-pages-404-mdx-d92eec4f29622d368411.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "1c98e269bbe053ef54208d6040d19e9f"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "2846e49d34bc25004f1a1678e6cef223"
  },
  {
    "url": "component---src-pages-clients-mdx-f236ddb40e7bac664800.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "6f72ec2714b4bcc4503595df03e091c7"
  },
  {
    "url": "component---src-pages-dashboard-mdx-ccb340511296319f7643.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "0e342bf14417470fd91b2f1ab9b1083e"
  },
  {
    "url": "component---src-pages-devices-mdx-02886106bff594236055.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "08b1f02688f8acb5ac4ce74cc0144b2b"
  },
  {
    "url": "component---src-pages-dtmi-mdx-82a51696e1201f561415.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "965ee71178dd91744e65d2565f109eea"
  },
  {
    "url": "component---src-pages-github-mdx-2b612b19b3037ed9c893.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "2e7b4a5ec4da9154f6d5da0e608485e2"
  },
  {
    "url": "component---src-pages-index-mdx-51828e9060124481d95b.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "a135a6c49b0072a981b4a57f2bd9e87b"
  },
  {
    "url": "component---src-components-spec-tsx-e7b84d4d2083b0000dc9.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "e1a62ea247b6e17bb709fce0ac68156d"
  },
  {
    "url": "component---src-pages-services-mdx-ec5e50d6fe65eee6e4f4.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "1ee630c4802dbc54e8069b123b37b082"
  },
  {
    "url": "component---src-pages-tools-mdx-cff68949109c100c3dd9.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "3c6b89831737da150181722f980322d5"
  },
  {
    "url": "component---src-pages-traces-mdx-a9dedfac44ecd3a51d61.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "23254d4df69e1e0cb18fd24b96d40e6e"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "87f093f5b118df0070fadb5ddd1ba822"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "75f0bd666a1f2a97ed4c30d99c08a701"
  },
  {
    "url": "page-data/reference/led-status/page-data.json",
    "revision": "89a4d535726146257994c906ad783563"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "dbfa3db74ebf5fa5587bd643b0b37908"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "f7fc1e19c3475099655f8de5ee440733"
  },
  {
    "url": "page-data/reference/service-tests/page-data.json",
    "revision": "e45d5e513b66cfa227d21932610572d6"
  },
  {
    "url": "component---src-templates-service-mdx-455390868075073f0e59.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "2ac511c1d24b5b9057e4622074d427f9"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "71cfdd3abfd798bc2d280383e148490f"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "533e9f3e41acadffea6c1a2e3d8d71ba"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "5d949db3f658a5482a096f4c8cf4beec"
  },
  {
    "url": "page-data/services/analogbutton/page-data.json",
    "revision": "ec0834afda877e1aaba128767830989b"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "58ad66b5fa8b333c9d0dfb001f61b637"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "a76f82c39d7fa389e803352bf86428f2"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "de5add48c7ccfbd2c6bd639f761ebf19"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "7a9d015e41f11307bc18230acb6d5f7a"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "264f6e269d3fe6edbc76d6a9a1286ef3"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "0facf8e14aeb3a537099e3d0b036c9d6"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "214ea2cc26cfdbf28df6b62c5e570ed4"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "23d7233bd3c538ded0d9e25f8a2b9eaa"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "d11610d0731fa6684ed35ad9a4c5b628"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "441e322e25965d6776813c915401f469"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "12daf63e0612f23be4a476204b2c18fd"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "7fd08212ccf605d7daf9d4be0901b710"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "9661bc6ed43ae3158c09a5a1cc2a9326"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "5c49dd03a8d6b08680560da12d3b204d"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "4b91129eb2fb3da84c082e3edf5ec0a8"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "da44f0fb3efa8ff957439858c28f9ff0"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "c1aa5a262d7cdae99188adff4477c4be"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "55d7156ce18cd05c60cd74cc57f1a1e3"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "8ccf3918e7e46e0aac897cc5e836b39f"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "8a7ea3cd285baa6a0e265fccba150552"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "2f3dd008ec2594c9427fa9499654ee5d"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "edfff69f561f62be6ffb3fd7021486f2"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "2c60a630bc1128a21055233f5d1c4b72"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "c47247ca12ec6ad5ff621e447986c298"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "e3df56584cb6e78deb997a4a08d4c6b2"
  },
  {
    "url": "page-data/services/ledmatrix/page-data.json",
    "revision": "12e02d3dfcfa8b7d00f8c2fa9774050e"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "b87b778d2810b6a983bbb2c2ec6f33d4"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "ef116a8b4199eda711b28e2444405f35"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "e8da3ca398b9eb3a672e1eb9f99f2ece"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "a270dda14ca54ba46f111d232c886a02"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "9c9c3940f4b55a66b2f41b6045d3e7a2"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "73f922ff49590c595c4f76a1593c1af2"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "4f3a337daee0c78f201baa46e3e48921"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "997e0e72c1a62e7424e0461077824e38"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "d9e1a5193580b18b88fba6c2663f22ed"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "b8fa32a6e13252f35bf31449e64ee19e"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "05c73f53ab79906d763c3908101f17d6"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "372b03193d49ed15aa3ffbc138b6e26d"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "e85d93a69f924b230fcd720f7cb0e9fd"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "330b091128b8bdaf4c9f2abc812d4f1c"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "48bc05bf7af136032cd8df26a4a42468"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "e5fb43877e79893d75de505789dc0e81"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "192c4ab08826321cdb7c3255e5d36cf4"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "52cd95151aebd3c733a2c1874df5e6e7"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "3cb3483141dc39834ac3a04962690652"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "6ef992612e40c42c8bc5c711fb4962c2"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "281e1d84acd46577c4136297a1a2411b"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "6dc9b1658d8e85cf6c0717a6b901d75d"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "f9217928638cfcbe31f81f0198741e05"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "12a4a6791cec162ede6725c27f5bc2c8"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "0ce1f749c32785f82e2ea8d6c8cb28c5"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "ce35be248c505d7aed6059d7dce603f9"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "2ef4d3ee833a3dd808c35cbbf672ad6d"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "1ef460fe93677c6dd67575a04aacb8c6"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "3d4aba92db0a8118e84ddd8087c03775"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "5101291dc10acd698b779838a17c5d03"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "7a986364e1d654f8c8c359551005eaa7"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "f5c7183feb697bfae52dc68612a7e53d"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "9ea2838c0869195e6ddcc4b89533212b"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "db6241dc6408bb1ae688cf5d52f52bf7"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "9ee65548e59adf5fdf4c98410942bd90"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "f7b5e816d8dba3fa0abeaf97deeb2541"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "3cc1cf88cba99c000d153945040ff2ce"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "970e732e8d2290c14d37ad4430f72fa4"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "c587fd9b9c0e8e66357cbb7e3304314e"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "30406d1dce81882df1f00a2667289e9d"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "3b6f16c3d3ef3fadc7ea29be1ac6ac69"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "e8cd6d41868ccf2b354362e1b296be0d"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "87f7358b91f0712945d832a808107706"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "4f6c082e894e07c2e88e26abf2e3b7f3"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "f4e32ebf99f112e053f378b949966361"
  },
  {
    "url": "component---src-pages-tools-azure-device-twin-designer-mdx-cd89740eb5e1be4188d2.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "07f09b27167cb3dba54c4d3a53937cc6"
  },
  {
    "url": "component---src-pages-tools-azure-iot-hub-mdx-7378fb195cf334ec32b3.js"
  },
  {
    "url": "page-data/tools/azure-iot-hub/page-data.json",
    "revision": "31efee865d1643d4163ff248138dbd50"
  },
  {
    "url": "component---src-pages-tools-collector-mdx-14ef58a3c99136e6921e.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "b0d8f5691925a22f3b1c1c9b3a52136e"
  },
  {
    "url": "component---src-pages-tools-device-registration-mdx-8776bc1ae06703c42575.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "589586050424235c39551aeeda6c4510"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-mdx-6f65b4053435529069dc.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "ca856e69efe30e6a39c5b9485169196c"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-efa740bf68c7977d9171.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "2feb363386ed3d08eb92a1dae167bbc3"
  },
  {
    "url": "component---src-pages-tools-led-animation-designer-mdx-ab254328e87f0583485a.js"
  },
  {
    "url": "page-data/tools/led-animation-designer/page-data.json",
    "revision": "092f8b9dce12e2d9b19e82f8229d1338"
  },
  {
    "url": "component---src-pages-tools-makecode-mdx-819cba2ba1f0a97f1f7e.js"
  },
  {
    "url": "page-data/tools/makecode/page-data.json",
    "revision": "abc9280a64b2ef905d454d6248050a4a"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-mdx-ccca135638a346125ef1.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "cf5626ba312f45a61a79d87d9619d334"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-mdx-50522fc60469c1aa0dc1.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "a08cdb16010b93955b8f6ee608052c2f"
  },
  {
    "url": "component---src-pages-tools-model-uploader-mdx-519f1b0b7a394a4eff78.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "8ae291a5c69de996fc25f22fd75fbfbe"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-3d41a26d10bff8555fbb.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "2e48bcb2eec701496ec1ecec3679cbaf"
  },
  {
    "url": "component---src-pages-tools-player-mdx-72dc7b10fe0bce9de6c9.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "e8d82bb9446c1cf77dee405f15ff687d"
  },
  {
    "url": "component---src-pages-tools-prototest-mdx-9e2afe504ca290a0cda4.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "d30a616c78a9f8b3fb7da0c10c0ce2aa"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-3e4f2a1d59ed951854da.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "914d985552ba48a52a3cb281d3b92812"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-0bd3044c1f93d6ba4e23.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "8a066af35eabe82d87d6effbbd7aa77d"
  },
  {
    "url": "component---src-pages-tools-service-test-editor-mdx-21e943b38f62c52a587c.js"
  },
  {
    "url": "page-data/tools/service-test-editor/page-data.json",
    "revision": "837f33653cccd7c9acc1f125fe634cbf"
  },
  {
    "url": "component---src-pages-tools-settings-manager-mdx-f31f3c764d297cddcbba.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "6f369e65d87eb2dce276c1dba27d7dbb"
  },
  {
    "url": "component---src-pages-tools-updater-mdx-29e9610060c5c0f0ef04.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "101859ab3c8d57caf2269c8f7d7a6e0f"
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-62cce2141d26668b1471.js`))) {
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
