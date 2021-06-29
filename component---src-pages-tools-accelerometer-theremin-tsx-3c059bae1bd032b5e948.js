(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5023],{

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

/***/ 67396:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AccelerometerTheremin; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91635);
/* harmony import */ var _jacdac_ts_src_jdom_packet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57683);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81794);
/* harmony import */ var _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65063);
/* harmony import */ var _components_hooks_useServiceProviderFromServiceClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36134);
/* harmony import */ var _components_hooks_useServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2928);











function tonePayload(frequency, ms, volume) {
  var period = Math.round(1000000 / frequency);
  var duty = period * volume >> 11;
  return (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdpack */ .AV)("u16 u16 u16", [period, duty, ms]);
}

var TONE_DURATION = 100;
var TONE_THROTTLE = 100;
function AccelerometerTheremin() {
  // collect accelerometers and buzzers on the bus
  var accelerometers = (0,_components_hooks_useServices__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .SRV_ACCELEROMETER */ .QF7
  });
  var buzzers = (0,_components_hooks_useServices__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .SRV_BUZZER */ .J1$
  }); // spin up a buzzer simulator

  (0,_components_hooks_useServiceProviderFromServiceClass__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .SRV_ACCELEROMETER */ .QF7);
  (0,_components_hooks_useServiceProviderFromServiceClass__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .SRV_BUZZER */ .J1$);
  console.log({
    accelerometers: accelerometers,
    buzzers: buzzers
  }); // register for accelerometer data events

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var unsubs = accelerometers.map(function (accelerometer) {
      return accelerometer.readingRegister.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .REPORT_UPDATE */ .rGZ, // don't trigger more than every 100ms
      (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__/* .throttle */ .P2)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _accelerometer$readin, x;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _accelerometer$readin = accelerometer.readingRegister.unpackedValue, x = _accelerometer$readin[0];
                _context2.next = 3;
                return Promise.all(buzzers.map( /*#__PURE__*/function () {
                  var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(buzzer) {
                    var pkt;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            pkt = _jacdac_ts_src_jdom_packet__WEBPACK_IMPORTED_MODULE_4__/* .default.from */ .Z.from(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .BuzzerCmd.PlayTone */ .Rv2.PlayTone, tonePayload(1000 + Math.abs(x) * 1000, TONE_DURATION, 1));
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
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })), TONE_THROTTLE));
    }); // cleanup callback

    return function () {
      return unsubs.forEach(function (u) {
        return u();
      });
    };
  }, [accelerometers, buzzers]); // re-register if accelerometers, buzzers change
  // TODO any specific rendering needed here?

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, null);
}

/***/ })

}]);