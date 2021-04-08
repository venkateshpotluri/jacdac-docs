(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[116],{

/***/ "jSS8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardPower; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dYIP");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7/Hy");
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uyZR");
/* harmony import */ var _widgets_PowerButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("TaZW");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Lml+");







function DashboardPower(props) {
  var service = props.service;
  var enabledRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* PowerReg */ "Ec"].Enabled);
  var enabled = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterBoolValue */ "a"])(enabledRegister, props);
  var overload = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterBoolValue */ "a"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* PowerReg */ "Ec"].Overload), props);

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "c"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* PowerReg */ "Ec"].BatteryCharge), props),
      batteryCharge = _useRegisterUnpackedV[0];

  var server = Object(_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(service);
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(color),
      background = _useWidgetTheme.background,
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

  var toggleEnabled = function toggleEnabled() {
    return enabledRegister.sendSetBoolAsync(!enabled, true);
  };

  var widgetSize = "clamp(3rem, 10vw, 16vw)";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    width: w,
    height: h,
    size: widgetSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_PowerButton__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    cx: w / 2,
    cy: h / 2,
    r: ro,
    ri: ri,
    off: !enabled,
    color: color,
    "aria-label": label,
    borderStroke: !!overload && "red",
    onClick: toggleEnabled
  }), batteryCharge !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "battery charge " + Math.floor(batteryCharge * 100) + "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: w - bw - mw,
    y: mw,
    width: bw * batteryCharge,
    height: hw,
    rx: rw,
    ry: rw,
    fill: active
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: w - bw - mw,
    y: mw,
    width: bw,
    height: hw,
    rx: rw,
    ry: rw,
    fill: "none",
    stroke: background,
    strokeWidth: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", Object.assign({
    x: w - 2 * mw,
    y: mw + hw / 2
  }, textProps, {
    textAnchor: "end",
    fontSize: hw * 0.6
  }), Math.floor(batteryCharge * 100), "%"))));
}

/***/ })

}]);
//# sourceMappingURL=116-570c070cd05ddc5e360d.js.map