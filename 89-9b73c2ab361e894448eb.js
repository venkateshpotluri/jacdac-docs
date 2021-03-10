(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "dJYX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardReflectedLight; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dYIP");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7/Hy");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Lml+");
/* harmony import */ var _hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("asyI");
/* harmony import */ var _widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("soIx");
/* harmony import */ var _hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cJz4");
/* harmony import */ var _hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("jwKE");
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ZfHV");









function DashboardReflectedLight(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var brighessRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_8__[/* ReflectedLightReg */ "ad"].Brightness);

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__[/* useRegisterUnpackedValue */ "e"])(brighessRegister),
      brightness = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_8__[/* ReflectedLightReg */ "ad"].Variant)),
      sensorVariant = _useRegisterUnpackedV2[0];

  var host = Object(_hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground;

  var widgetSize = Object(_widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(variant, services.length);
  var maxValue = 1.0;

  var handleDown = function handleDown() {
    host.reading.setValues([brightness > 0 ? 0 : 1.0]);
    brighessRegister.refresh();
  };

  var buttonProps = Object(_hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])("line detector", host && handleDown);
  var actualBrightness = Object(_hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(brightness || 0, maxValue << 2);
  var w = 64;
  var h = 64;
  var m = 4;
  var sw = sensorVariant === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_8__[/* ReflectedLightVariant */ "bd"].InfraredAnalog ? 32 : 16;
  var dx = w >> 1;
  var x = (w - sw - dx) / 2 + actualBrightness / maxValue * dx;
  var sh = 32;
  var dark = "#000";
  var bright = "#ddd";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    width: w,
    height: h,
    size: widgetSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: 0,
    y: 0,
    width: w >> 1,
    height: h,
    fill: dark,
    "aria-label": "dark area"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: w >> 1,
    y: 0,
    width: w >> 1,
    height: h,
    fill: bright,
    "aria-label": "bright area"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(" + x + ", " + (h - m - sh) + ")"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", Object.assign({
    x: 0,
    y: 0,
    width: sw,
    height: sh,
    fill: background
  }, buttonProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: sw >> 1,
    cy: sh / 3,
    r: sw / 2 - 4,
    fill: dark,
    stroke: controlBackground,
    strokeWidth: 2,
    style: {
      userSelect: "none",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: sw >> 1,
    cy: sh * 2 / 3,
    r: sw / 2 - 4,
    fill: bright,
    stroke: controlBackground,
    strokeWidth: 2,
    style: {
      userSelect: "none",
      pointerEvents: "none"
    }
  })));
}

/***/ })

}]);
//# sourceMappingURL=89-9b73c2ab361e894448eb.js.map