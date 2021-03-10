(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "hXyX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardSevenSegmentDisplay; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dYIP");
/* harmony import */ var _hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("asyI");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7/Hy");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Lml+");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("tRbT");
/* harmony import */ var _RegisterInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("271P");
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("aVfY");









function DashboardSevenSegmentDisplay(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;

  var _ref = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* SevenSegmentDisplayReg */ "Fe"].Digits)) || [new Uint8Array(0)],
      digits = _ref[0];

  var brightnessRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* SevenSegmentDisplayReg */ "Fe"].Brightness);

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(brightnessRegister),
      brightness = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* SevenSegmentDisplayReg */ "Fe"].DigitCount)),
      digitCount = _useRegisterUnpackedV2[0];

  var _useRegisterUnpackedV3 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* SevenSegmentDisplayReg */ "Fe"].DecimalPoint)),
      decimalPoint = _useRegisterUnpackedV3[0];

  var host = Object(_hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(color),
      active = _useWidgetTheme.active,
      background = _useWidgetTheme.background;

  if (digitCount === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null);
  var md = 4;
  var rs = 4;
  var hs = 32;
  var ws = 28;
  var wd = ws + 2 * rs;
  var hd = 2 * rs;
  var w = digitCount * (wd + 4 * md) + md;
  var h = 2 * md + 3 * hd + 2 * hs;
  var opacity = brightness || 0;
  /*
  GFEDCBA DP
  - A -
  |   |
  G   B
  |   |
  - F -
  |   |   -
  E   C  |DP|
  - D -   -
  */

  var VerticalSegment = function VerticalSegment(props) {
    var bit = (props.digit & props.mask) == props.mask;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: background,
      stroke: "none",
      d: "M " + props.mx + " " + props.my + " l " + -rs + " " + rs + " v " + hs + " l " + rs + " " + rs + " l " + rs + " " + -rs + " v " + -hs + " Z"
    }), bit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      opacity: opacity,
      fill: active,
      stroke: "none",
      d: "M " + props.mx + " " + props.my + " l " + -rs + " " + rs + " v " + hs + " l " + rs + " " + rs + " l " + rs + " " + -rs + " v " + -hs + " Z"
    }));
  };

  var HorizontalSegment = function HorizontalSegment(props) {
    var bit = (props.digit & props.mask) == props.mask;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: background,
      stroke: "none",
      d: "M " + props.mx + " " + props.my + " l " + rs + " " + -rs + " h " + ws + " l " + rs + " " + rs + " l " + -rs + " " + rs + " h " + -ws + " Z"
    }), bit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      opacity: opacity,
      fill: active,
      stroke: "none",
      d: "M " + props.mx + " " + props.my + " l " + rs + " " + -rs + " h " + ws + " l " + rs + " " + rs + " l " + -rs + " " + rs + " h " + -ws + " Z"
    }));
  };

  var DotSegment = function DotSegment(props) {
    var bit = (props.digit & 0x80) == 0x80;
    var mx = rs + wd + 2 * rs;
    var my = rs + 2 * hd + 2 * hs;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      fill: background,
      stroke: "none",
      r: rs,
      cx: mx,
      cy: my
    }), bit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      opacity: opacity,
      fill: active,
      stroke: "none",
      r: rs,
      cx: mx,
      cy: my
    }));
  };

  var Digit = function Digit(dprops) {
    var x = dprops.x,
        y = dprops.y,
        digit = dprops.digit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      transform: "translate(" + x + ", " + y + ")"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalSegment, {
      key: "G",
      mx: rs,
      my: rs,
      digit: digit,
      mask: 0x01
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HorizontalSegment, {
      key: "F",
      mx: rs,
      my: rs + hs + hd,
      digit: digit,
      mask: 0x02
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalSegment, {
      key: "E",
      mx: rs,
      my: rs + hd + hs,
      digit: digit,
      mask: 0x04
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HorizontalSegment, {
      key: "D",
      mx: rs,
      my: rs + 2 * hd + 2 * hs,
      digit: digit,
      mask: 0x08
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalSegment, {
      key: "C",
      mx: rs + wd,
      my: rs + hd + hs,
      digit: digit,
      mask: 0x10
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalSegment, {
      key: "B",
      mx: rs + wd,
      my: rs,
      digit: digit,
      mask: 0x20
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HorizontalSegment, {
      key: "A",
      mx: rs,
      my: rs,
      digit: digit,
      mask: 0x40
    }), decimalPoint && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DotSegment, {
      digit: digit
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    width: w,
    height: h
  }, Array(digitCount).fill(0).map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Digit, {
      key: i,
      x: md + (wd + 4 * md) * i,
      y: md,
      digit: (digits === null || digits === void 0 ? void 0 : digits[i]) || 0
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegisterInput__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    register: brightnessRegister
  })));
}

/***/ })

}]);
//# sourceMappingURL=109-c3db1492060ff86ad0cd.js.map