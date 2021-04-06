(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ "eCSt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardRealTimeClock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dYIP");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ofer");
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("aVfY");





function DashboardRealTimeClock(props) {
  var service = props.service;

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "c"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* RealTimeClockReg */ "id"].LocalTime), props),
      year = _useRegisterUnpackedV[0],
      month = _useRegisterUnpackedV[1],
      dayOfMonth = _useRegisterUnpackedV[2],
      hour = _useRegisterUnpackedV[3],
      min = _useRegisterUnpackedV[4],
      seconds = _useRegisterUnpackedV[5];

  if (year === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null);
  var t = new Date(year, month - 1, dayOfMonth, hour, min, seconds);
  var date = t.toLocaleDateString();
  var time = t.toLocaleTimeString();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    align: "center",
    tabIndex: 0,
    role: "timer",
    "aria-label": date,
    variant: "body2"
  }, date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    align: "center",
    tabIndex: 0,
    role: "timer",
    "aria-label": time,
    variant: "body1"
  }, time));
}

/***/ })

}]);
//# sourceMappingURL=119-c3c00d798ff0344b9aa1.js.map