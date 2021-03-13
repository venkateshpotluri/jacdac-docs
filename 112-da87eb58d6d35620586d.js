(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[112],{

/***/ "a9ED":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardColor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dYIP");
/* harmony import */ var _hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("asyI");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("15kH");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7/Hy");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Lml+");
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("aVfY");








function DashboardColor(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var register = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* ColorReg */ "P"].Color);

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(register),
      r = _useRegisterUnpackedV[0],
      g = _useRegisterUnpackedV[1],
      b = _useRegisterUnpackedV[2];

  var host = Object(_hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(color),
      background = _useWidgetTheme.background,
      textProps = _useWidgetTheme.textProps;

  if (r === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null);
  var value = "rgb(" + (r * 0xff >> 0) + ", " + (g * 0xff >> 0) + ", " + (b * 0xff >> 0) + ")";

  var handleChange = function handleChange(color) {
    console.log({
      color: color
    });
    var rgb = color.rgb;
    host.reading.setValues([rgb.r / 0xff, rgb.g / 0xff, rgb.b / 0xff]);
    register.refresh();
  };

  var w = 64;
  var rx = 4;
  if (host) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_4__[/* BlockPicker */ "a"], {
    color: value,
    triangle: "hide",
    onChangeComplete: host && handleChange
  });else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    width: w,
    height: w
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: 0,
    y: 0,
    width: w,
    height: w,
    rx: rx,
    ry: rx,
    fill: value,
    stroke: background,
    strokeWidth: 2,
    tabIndex: 0,
    "aria-live": "polite",
    "aria-label": "color " + value + " detected"
  }));
}

/***/ })

}]);
//# sourceMappingURL=112-da87eb58d6d35620586d.js.map