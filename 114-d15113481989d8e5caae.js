(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[114],{

/***/ "HqAP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardLED; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HaE+");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("soIx");
/* harmony import */ var _hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("asyI");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7/Hy");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Lml+");
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("IzqI");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("dYIP");
/* harmony import */ var _hooks_useAnimationFrame__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("y4gn");
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("yNWl");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("tRbT");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("6Obz");
/* harmony import */ var _jacdac_ts_src_hosts_ledservicehost__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("NttO");
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_ts_src_jdom_color__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("TKHO");
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("aVfY");
















function DashboardLED(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_jacdac_Context__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]),
      bus = _useContext.bus;

  var service = props.service,
      services = props.services,
      variant = props.variant;
  var widgetSize = Object(_widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(variant, services.length);
  var host = Object(_hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(color),
      active = _useWidgetTheme.active;

  var brightnessRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* LedReg */ "Rb"].Brightness);

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_8__[/* useRegisterUnpackedValue */ "e"])(brightnessRegister),
      brightness = _useRegisterUnpackedV[0];

  var animationData = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_8__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* LedReg */ "Rb"].Animation));

  var _useRegisterUnpackedV2 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_8__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* LedReg */ "Rb"].WaveLength)),
      waveLength = _useRegisterUnpackedV2[0];

  var _useRegisterUnpackedV3 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_8__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* LedReg */ "Rb"].LedCount)),
      ledCount = _useRegisterUnpackedV3[0]; // restart animation with steps


  var animation = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return new _jacdac_ts_src_hosts_ledservicehost__WEBPACK_IMPORTED_MODULE_13__[/* LedAnimation */ "a"](animationData);
  }, [animationData]); // animate

  Object(_hooks_useAnimationFrame__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(function () {
    animation.update(bus.timestamp);
    return true;
  }, [animation]);
  var hsv = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(animation, function (a) {
    return a === null || a === void 0 ? void 0 : a.hsv;
  });

  var handleBrightnessChange = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(ev, newValue) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return brightnessRegister.sendSetPackedAsync("u0.16", [newValue], true);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleBrightnessChange(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(); // nothing to see


  if (hsv === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], null);
  var opacity = brightness;
  var fill = Object(_jacdac_ts_src_jdom_color__WEBPACK_IMPORTED_MODULE_15__[/* hsvToCss */ "a"])(hsv[0], hsv[1], hsv[2], brightness * 0xff, waveLength !== undefined);
  var ln = Math.min(ledCount || 1, 5);
  var lw = 15.5;
  var m = 1;
  var w = (lw + m) * ln;
  var h = 42;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    item: true,
    xs: 2
  }, brightness !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    orientation: "vertical",
    min: 0,
    max: 1,
    step: 0.01,
    color: color,
    valueLabelDisplay: "off",
    value: brightness,
    onChange: handleBrightnessChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    width: w,
    height: h,
    size: "5em"
  }, Array(ln).fill(0).map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", {
      key: i,
      transform: "translate(" + i * (lw + m) + ", 0)"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
      fill: "#999",
      d: "M14.2 13V7.1C14.2 3.2 11 0 7.1 0 3.2 0 0 3.2 0 7.1v13.7c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9v-1.5c0-1.2-.5-2.3-1.3-3.2z",
      opacity: ".65"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
      fill: "#8c8c8c",
      d: "M2.8 17.5l-1.2-1.4h1L5 17.5v18.6c0 .3-.5.5-1.1.5-.6 0-1.1-.2-1.1-.5zm10.1 6.7c0-.7-1.1-1.3-2.1-1.8-.4-.2-1.2-.6-1.2-.9v-3.4l2.5-2h-.9l-3.7 2v3.5c0 .7.9 1.2 1.9 1.7.4.2 1.3.8 1.3 1.1v16.9c0 .4.5.7 1.1.7.6 0 1.1-.3 1.1-.7z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
      opacity: opacity,
      fill: fill,
      d: "M14.2 13V7.1C14.2 3.2 11 0 7.1 0 3.2 0 0 3.2 0 7.1v13.7c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9v-1.5c0-1.2-.5-2.3-1.3-3.2z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
      fill: "#d1d1d1",
      d: "M14.2 13v3.1c0 2.7-3.2 5-7.1 5-3.9 0-7.1-2.2-7.1-5v4.6c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9v-1.5c0-1.1-.5-2.2-1.3-3.1z",
      opacity: ".9"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
      fill: "#e6e6e6",
      d: "M14.2 13v3.1c0 2.7-3.2 5-7.1 5-3.9 0-7.1-2.2-7.1-5v4.6c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9v-1.5c0-1.1-.5-2.2-1.3-3.1z",
      opacity: ".7"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
      fill: "#e6e6e6",
      d: "M14.2 13v3.1c0 2.7-3.2 5-7.1 5-3.9 0-7.1-2.2-7.1-5v3.1c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9 0-1.1-.5-2.2-1.3-3.1z",
      opacity: ".25"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ellipse", {
      cx: "-7.2",
      cy: "-16.1",
      fill: "#e6e6e6",
      opacity: ".25",
      rx: "7.1",
      ry: "5",
      transform: "scale(-1)"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ellipse", {
      cx: "-7.2",
      cy: "-16.1",
      fill: "#e6e6e6",
      opacity: ".25",
      rx: "7.1",
      ry: "5",
      transform: "scale(-1)"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
      opacity: ".61",
      fill: "#fff",
      d: "M7.2 22c-4.3 0-6.1-2-6.1-2l.7-.7S3.4 21 7.2 21c2.4.1 4.7-.9 6.3-2.7l.8.6C12.4 21 9.9 22.1 7.2 22z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
      opacity: ".61",
      fill: "#fff",
      d: "M2.6 3.2C1.5 4.3.9 5.8.9 7.4v10.3l1.9 1.5V8.8c-.9-2.8-.3-4.2.7-5.2-.3-.1-.6-.2-.9-.4zm7.3-1.6l-.3.9c1.5.7 2.6 2.1 2.8 3.7h1c-.3-2-1.6-3.7-3.5-4.6z"
    }));
  }))));
}

/***/ })

}]);
//# sourceMappingURL=114-d15113481989d8e5caae.js.map