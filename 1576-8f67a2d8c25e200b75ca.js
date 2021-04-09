(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1576],{

/***/ 21576:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardPower; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89196);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48059);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49013);
/* harmony import */ var _widgets_PowerButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2250);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60650);







function DashboardPower(props) {
  var service = props.service;
  var enabledRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerReg.Enabled */ .$xp.Enabled);
  var enabled = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterBoolValue */ .I8)(enabledRegister, props);
  var overload = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterBoolValue */ .I8)(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerReg.Overload */ .$xp.Overload), props);

  var _useRegisterUnpackedV = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerReg.BatteryCharge */ .$xp.BatteryCharge), props),
      batteryCharge = _useRegisterUnpackedV[0];

  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(service);
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(color),
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    width: w,
    height: h,
    size: widgetSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_PowerButton__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    cx: w / 2,
    cy: h / 2,
    r: ro,
    ri: ri,
    off: !enabled,
    color: color,
    "aria-label": label,
    borderStroke: !!overload && "red",
    onClick: toggleEnabled
  }), batteryCharge !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "battery charge " + Math.floor(batteryCharge * 100) + "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: w - bw - mw,
    y: mw,
    width: bw * batteryCharge,
    height: hw,
    rx: rw,
    ry: rw,
    fill: active
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: w - bw - mw,
    y: mw,
    width: bw,
    height: hw,
    rx: rw,
    ry: rw,
    fill: "none",
    stroke: background,
    strokeWidth: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", Object.assign({
    x: w - 2 * mw,
    y: mw + hw / 2
  }, textProps, {
    textAnchor: "end",
    fontSize: hw * 0.6
  }), Math.floor(batteryCharge * 100), "%"))));
}

/***/ })

}]);
//# sourceMappingURL=1576-8f67a2d8c25e200b75ca.js.map