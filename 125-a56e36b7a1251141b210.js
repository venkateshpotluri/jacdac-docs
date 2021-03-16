(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[125],{

/***/ "0HhB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardSoilMoisture; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dYIP");
/* harmony import */ var _widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("soIx");
/* harmony import */ var _hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("asyI");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7/Hy");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Lml+");
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("W1g9");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("tRbT");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("6Obz");









function DashboardSoilMoisture(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var moistureReg = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* SoilMoistureReg */ "Ne"].Moisture);

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(moistureReg),
      value = _useRegisterUnpackedV[0];

  var widgetSize = Object(_widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(variant, services.length);
  var host = Object(_hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(color),
      active = _useWidgetTheme.active,
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      textProps = _useWidgetTheme.textProps;

  var clipId = Object(react_use_id_hook__WEBPACK_IMPORTED_MODULE_7__[/* useId */ "b"])();
  var hasValue = !isNaN(value);
  var tvalue = hasValue ? Math.round(value * 100) + "%" : "--";
  var w = 5;
  var h = 9.488;
  var cm = 3.3;
  var ch = (h - cm) * ((0.12 + value) / 1.12);

  var onChange = function onChange(event, newValue) {
    var svalue = newValue;
    host === null || host === void 0 ? void 0 : host.reading.setValues([svalue]);
    moistureReg.refresh();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    container: true,
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    width: w,
    height: h,
    size: widgetSize
  }, hasValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: clipId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: 0,
    y: h - ch,
    width: w,
    height: ch
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: background,
    d: "M4.812 7.997V.5a.5.5 0 00-.5-.5H.689a.5.5 0 00-.5.5v7.497l.503 1.491h.466l.503-1.491V3.373a.792.792 0 01.84-.791.792.792 0 01.838.79v4.625l.503 1.491h.466z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: active,
    d: "M4.812 7.997V.5a.5.5 0 00-.5-.5H.689a.5.5 0 00-.5.5v7.497l.503 1.491h.466l.503-1.491V3.373a.792.792 0 01.84-.791.792.792 0 01.838.79v4.625l.503 1.491h.466z",
    clipPath: "url(#" + clipId + ")"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: controlBackground,
    d: "M4.075 8.548a.075.075 0 100-.15.075.075 0 100 .15zM4.425 7.281a.075.075 0 100-.15.075.075 0 100 .15zM4.425 5.948a.075.075 0 100-.15.075.075 0 100 .15zM3.725 4.614a.075.075 0 100-.15.075.075 0 100 .15zM3.725 3.948a.075.075 0 100-.15.075.075 0 100 .15zM3.725 5.281a.075.075 0 100-.15.075.075 0 100 .15zM4.425 6.614a.075.075 0 100-.15.075.075 0 100 .15zM4.425 7.948a.075.075 0 100-.15.075.075 0 100 .15zM3.725 7.281a.075.075 0 100-.15.075.075 0 100 .15zM3.725 5.948a.075.075 0 100-.15.075.075 0 100 .15zM4.425 4.614a.075.075 0 100-.15.075.075 0 100 .15zM4.425 3.948a.075.075 0 100-.15.075.075 0 100 .15zM4.425 5.281a.075.075 0 100-.15.075.075 0 100 .15zM3.725 6.614a.075.075 0 100-.15.075.075 0 100 .15zM3.725 7.948a.075.075 0 100-.15.075.075 0 100 .15zM.925 8.548a.075.075 0 100-.15.075.075 0 100 .15zM.575 7.281a.075.075 0 100-.15.075.075 0 100 .15zM.575 5.948a.075.075 0 100-.15.075.075 0 100 .15zM1.275 4.614a.075.075 0 100-.15.075.075 0 100 .15zM1.275 3.948a.075.075 0 100-.15.075.075 0 100 .15zM1.275 5.281a.075.075 0 100-.15.075.075 0 100 .15zM.575 6.614a.075.075 0 100-.15.075.075 0 100 .15zM.575 7.948a.075.075 0 100-.15.075.075 0 100 .15zM1.275 7.281a.075.075 0 100-.15.075.075 0 100 .15zM1.275 5.948a.075.075 0 100-.15.075.075 0 100 .15zM.575 4.614a.075.075 0 100-.15.075.075 0 100 .15zM.575 3.948a.075.075 0 100-.15.075.075 0 100 .15zM.575 5.281a.075.075 0 100-.15.075.075 0 100 .15zM1.275 6.614a.075.075 0 100-.15.075.075 0 100 .15zM1.275 7.948a.075.075 0 100-.15.075.075 0 100 .15z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", Object.assign({
    x: w / 2,
    y: "1.4",
    fontSize: "1.058",
    strokeWidth: ".026"
  }, textProps), tvalue))), host && hasValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
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
//# sourceMappingURL=125-a56e36b7a1251141b210.js.map