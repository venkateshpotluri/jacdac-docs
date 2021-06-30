(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5023],{

/***/ 94431:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ConnectAlert; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8266);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13173);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20392);
/* harmony import */ var _buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84125);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42862);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54774);
// tslint:disable-next-line: no-submodule-imports
 // tslint:disable-next-line: no-submodule-imports








var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({
    button: {
      marginLeft: theme.spacing(2)
    }
  });
});

function NoSsrConnectAlert(props) {
  var classes = useStyles();
  var serviceClass = props.serviceClass;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z),
      bus = _useContext.bus;

  var transports = bus.transports;
  var devices = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(bus, function (b) {
    return b.devices({
      serviceClass: serviceClass,
      ignoreSelf: true
    });
  });
  var spec = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass); // don't show if no transport, some devices

  if (!transports.length || devices !== null && devices !== void 0 && devices.length) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    displayPrint: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    severity: "info",
    closeable: true
  }, !spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect your device?"), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect a ", spec.name, " device?"), transports.map(function (transport) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      key: transport.type,
      transport: transport,
      className: classes.button,
      full: true,
      transparent: true
    });
  })));
}

function ConnectAlert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(NoSsrConnectAlert, props));
}

/***/ }),

/***/ 2928:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServices; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54774);



function useServices(options) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z),
      bus = _useContext.bus;

  var services = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(bus, function (b) {
    return b.services(options);
  }, [JSON.stringify(options)]);
  return services;
}

/***/ }),

/***/ 95393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ GridHeader; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8266);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4998);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);



var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    hr: {
      background: theme.palette.text.disabled,
      marginBottom: "unset"
    },
    start: {
      width: theme.spacing(2)
    }
  });
});
function GridHeader(props) {
  var title = props.title,
      count = props.count,
      variant = props.variant,
      action = props.action;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    container: true,
    direction: "row",
    spacing: 1,
    justify: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.hr, classes.start)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true
  }, action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    component: "span",
    mr: 1
  }, action), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    component: "span",
    variant: variant || "subtitle1"
  }, title), count !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    component: "span",
    ml: 0.5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    label: count
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: classes.hr
  }))));
}

/***/ }),

/***/ 67396:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AccelerometerTheremin; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48363);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91635);
/* harmony import */ var _jacdac_ts_src_jdom_packet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57683);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81794);
/* harmony import */ var _components_hooks_useServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2928);
/* harmony import */ var _components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95393);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36176);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(31186);
/* harmony import */ var _components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(94431);
/* harmony import */ var _components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31477);
/* harmony import */ var _jacdac_ts_src_servers_buzzerserver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69589);
/* harmony import */ var _components_ui_WebAudioContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(94564);


















function tonePayload(frequency, ms, volume) {
  var period = Math.round(1000000 / frequency);
  var duty = period * volume >> 11;
  return (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_5__/* .jdpack */ .AV)("u16 u16 u16", [period, duty, ms]);
}

var TONE_DURATION = 50;
var TONE_THROTTLE = 100;
function AccelerometerTheremin() {
  // bus is a variable that is shared across the entire site.
  // it represents the transport to the physical Jacdac bus (USB/BLE)
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z),
      bus = _useContext.bus; // useServices accepts a number of filters and returns any services that match
  // get all accelerometer + buzzer services


  var accelerometers = (0,_components_hooks_useServices__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_ACCELEROMETER */ .QF7
  });
  var buzzers = (0,_components_hooks_useServices__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_BUZZER */ .J1$
  }); // create two variables to hold the service selected as our accelerometer
  // and the virtual buzzerServer created when someone turns audio on on the page.

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      accelService = _useState[0],
      setAccelService = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      buzzerServer = _useState2[0],
      setBuzzerServer = _useState2[1];

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_ui_WebAudioContext__WEBPACK_IMPORTED_MODULE_14__/* .default */ .ZP),
      playTone = _useContext2.playTone,
      onClickActivateAudioContext = _useContext2.onClickActivateAudioContext,
      activated = _useContext2.activated; // useEffect invokes a function call whenever the variables
  // (passed as an array) change.
  // if clean up is required, return a clean up callback
  //
  // listen for playTone commands from the buzzer via subscribe
  // subscribe returns a clean up function that is invoked when the user
  // browses away from the page.
  // playtone uses the audio context set in handleBrowserAudioEnable


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return buzzerServer === null || buzzerServer === void 0 ? void 0 : buzzerServer.subscribe(_jacdac_ts_src_servers_buzzerserver__WEBPACK_IMPORTED_MODULE_13__/* .default.PLAY_TONE */ .Z.PLAY_TONE, function (_ref) {
      var frequency = _ref.frequency,
          duration = _ref.duration,
          volume = _ref.volume;
      return playTone(frequency, duration, volume);
    });
  }, [buzzerServer]); // clean out buzzer server on page close.
  // defines an empty function that returns a function.
  // invoked each time buzzerServer changes

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return function () {
      return (buzzerServer === null || buzzerServer === void 0 ? void 0 : buzzerServer.device) && bus.removeServiceProvider(buzzerServer.device);
    };
  }, [buzzerServer]); // use a closure to capture accel variable
  // act as a toggle for the button the indicates streaming state.

  var handleSelectAccelerometerService = function handleSelectAccelerometerService(accel) {
    return function () {
      accelService == accel ? setAccelService(null) : setAccelService(accel);
    };
  }; // when start browser audio button is clicked:
  // get a browser audio context
  // spin up a virtual buzzer that we latermap to the browser audio engine


  var handleBrowserAudioEnable = function handleBrowserAudioEnable() {
    onClickActivateAudioContext();

    if (!buzzerServer) {
      var dev = (0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_3__/* .startServiceProviderFromServiceClass */ .V6)(bus, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_BUZZER */ .J1$);
      var srv = dev.services().find(function (s) {
        return s.serviceClass === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_BUZZER */ .J1$;
      });
      setBuzzerServer(srv);
    } else {
      setBuzzerServer(undefined);
    }
  }; // register for accelerometer data events


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var unsubs = accelService === null || accelService === void 0 ? void 0 : accelService.readingRegister.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .REPORT_UPDATE */ .rGZ, // don't trigger more than every 100ms
    (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .throttle */ .P2)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var _accelService$reading, x;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // get x acceleration data
              _accelService$reading = accelService.readingRegister.unpackedValue, x = _accelService$reading[0]; // get all acceleration data
              // const [x, y, z] = accelService.readingRegister.unpackedValue

              _context2.next = 3;
              return Promise.all( // for each buzzer, map x acceleration to buzzer output
              buzzers.map( /*#__PURE__*/function () {
                var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(buzzer) {
                  var pkt;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          pkt = _jacdac_ts_src_jdom_packet__WEBPACK_IMPORTED_MODULE_6__/* .default.from */ .Z.from(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .BuzzerCmd.PlayTone */ .Rv2.PlayTone, tonePayload(1000 + x * 1000, TONE_DURATION, 1));
                          _context.next = 3;
                          return buzzer.sendPacketAsync(pkt);

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref3.apply(this, arguments);
                };
              }()));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })), TONE_THROTTLE)); // cleanup callback

    return function () {
      return unsubs === null || unsubs === void 0 ? void 0 : unsubs();
    };
  }, [accelService, buzzers]); // re-register if accelerometers, buzzers change

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    title: "Audio controls"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_10__.Button, {
    variant: "outlined",
    onClick: handleBrowserAudioEnable
  }, activated && buzzerServer ? "Stop browser audio" : "Start browser audio")), !accelerometers.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    title: "Connect a device"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_ACCELEROMETER */ .QF7
  }))), accelerometers.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    title: "Available accelerometers"
  }), accelerometers.map(function (accelerometer) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
      item: true,
      xs: 12,
      sm: 6,
      lg: 4,
      xl: 3,
      key: accelerometer.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
      device: accelerometer.device,
      showAvatar: true,
      showMedia: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* .default */ .Z, {
      variant: "h5"
    }, (accelerometer === accelService ? "Streaming from " : "") + (accelerometer.device.physical ? "Physical " : "Virtual ") + ("Accelerometer " + accelerometer.friendlyName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_10__.Button, {
      variant: "outlined",
      onClick: handleSelectAccelerometerService(accelerometer)
    }, accelerometer === accelService ? "Stop streaming" : "Start streaming"))));
  })));
}

/***/ })

}]);