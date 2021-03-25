(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[117],{

/***/ "2rwa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardRandomNumberGenerator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tRbT");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("r9w1");
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Ei1D");
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("l6uw");
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Zo1I");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("dYIP");
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ZfHV");
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("W1g9");
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("aVfY");

 // tslint:disable-next-line: no-submodule-imports match-default-export-name








function DashboardRandomNumberGenerator(props) {
  var service = props.service;
  var randomRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__[/* RngReg */ "od"].Random);

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_6__[/* useRegisterUnpackedValue */ "c"])(randomRegister, props),
      rnd = _useRegisterUnpackedV[0];

  var textId = Object(react_use_id_hook__WEBPACK_IMPORTED_MODULE_8__[/* useId */ "b"])();

  var handleRefresh = function handleRefresh() {
    return randomRegister.refresh();
  };

  if (!rnd) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    container: true,
    spacing: 2,
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    id: textId,
    fullWidth: true,
    variant: "outlined",
    helperText: "generated random number",
    value: Object(_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__[/* toHex */ "V"])(rnd === null || rnd === void 0 ? void 0 : rnd.slice(0, 8))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    title: "generate new number",
    onClick: handleRefresh
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_3___default.a, null))));
}

/***/ })

}]);
//# sourceMappingURL=117-3dea81da646f8a946a92.js.map