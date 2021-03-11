(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[127],{

/***/ "zMc1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashbaordWaterLevel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfHV");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7/Hy");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Lml+");
/* harmony import */ var _hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("asyI");
/* harmony import */ var _widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("soIx");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("dYIP");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("tRbT");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("6Obz");








function DashbaordWaterLevel(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var levelRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* WaterLevelReg */ "df"].Level);

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_6__[/* useRegisterUnpackedValue */ "e"])(levelRegister),
      value = _useRegisterUnpackedV[0];

  var host = Object(_hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active,
      textProps = _useWidgetTheme.textProps;

  var hasValue = !isNaN(value);
  var widgetSize = Object(_widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(variant, services.length);
  var tvalue = hasValue ? Math.round(value * 100) + "%" : "--";
  var mx = 5;
  var wx = 6;
  var n = 8;
  var w = (wx + mx) * n + 2 * mx;
  var mty = 42;
  var mby = mx;
  var hy = w * 2;
  var h = hy + mty + mby;
  var r = 1;

  var onChange = function onChange(event, newValue) {
    var svalue = newValue;
    host === null || host === void 0 ? void 0 : host.reading.setValues([svalue]);
    levelRegister.refresh();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    container: true,
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    width: w,
    height: h,
    size: widgetSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    fill: background,
    x: 0,
    y: 0,
    width: w,
    height: h,
    r: r
  }), Array(n).fill(0).map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      key: "back" + i,
      stroke: controlBackground,
      d: "M " + (2 * mx + i * (wx + mx)) + " " + (h - mby) + " v " + -hy,
      strokeWidth: wx,
      strokeLinecap: i % 2 === 0 ? "round" : "square"
    });
  }), hasValue && Array(n).fill(0).map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      key: "water" + i,
      stroke: active,
      d: "M " + (2 * mx + i * (wx + mx)) + " " + (h - mby - 2) + " v " + -hy * value,
      strokeWidth: wx + 2,
      strokeLinecap: "square"
    });
  }), tvalue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", Object.assign({
    key: "text",
    x: w >> 1,
    y: mty >> 1
  }, textProps), tvalue))), host && hasValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    orientation: "vertical",
    valueLabelDisplay: "off",
    min: 0,
    max: 1,
    step: 0.05,
    value: value,
    onChange: onChange,
    color: color
  })));
}

/***/ })

}]);
//# sourceMappingURL=127-0b72e7770e51622a6374.js.map