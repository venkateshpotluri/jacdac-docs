(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "jSS8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardPower; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HaE+");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dYIP");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7/Hy");
/* harmony import */ var _hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("asyI");
/* harmony import */ var _widgets_PowerButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("TaZW");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Lml+");









function DashboardPower(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var enabledRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* PowerReg */ "Bc"].Enabled);

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__[/* useRegisterUnpackedValue */ "e"])(enabledRegister),
      enabled = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* PowerReg */ "Bc"].Overload)),
      overload = _useRegisterUnpackedV2[0];

  var _useRegisterUnpackedV3 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* PowerReg */ "Bc"].BatteryCharge)),
      batteryCharge = _useRegisterUnpackedV3[0];

  var host = Object(_hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active,
      textProps = _useWidgetTheme.textProps;

  var w = 64;
  var h = w;
  var r = h - 4 >> 1;
  var ro = r - 4;
  var ri = ro - 8;
  var label = overload ? "overload" : enabled ? "on" : "off";
  var mw = 2;
  var bw = 12;
  var hw = 4;
  var rw = mw / 2;

  var toggleEnabled = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return enabledRegister.sendSetBoolAsync(!enabled);

            case 2:
              enabledRegister.refresh();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function toggleEnabled() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    width: w,
    height: h
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_widgets_PowerButton__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    cx: w / 2,
    cy: h / 2,
    r: ro,
    ri: ri,
    off: !enabled,
    color: color,
    "aria-label": label,
    borderStroke: !!overload && "red",
    onClick: toggleEnabled
  }), batteryCharge !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", null, "battery charge " + Math.floor(batteryCharge * 100) + "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("rect", {
    x: w - bw - mw,
    y: mw,
    width: bw * batteryCharge,
    height: hw,
    rx: rw,
    ry: rw,
    fill: active
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("rect", {
    x: w - bw - mw,
    y: mw,
    width: bw,
    height: hw,
    rx: rw,
    ry: rw,
    fill: "none",
    stroke: background,
    strokeWidth: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("text", Object.assign({
    x: w - 2 * mw,
    y: mw + hw / 2
  }, textProps, {
    textAnchor: "end",
    fontSize: hw * 0.6
  }), Math.floor(batteryCharge * 100), "%"))));
}

/***/ })

}]);
//# sourceMappingURL=85-5e51b284161bdab13780.js.map