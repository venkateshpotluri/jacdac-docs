(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "XXbh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DrawerSearchInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("r9w1");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2K/c");
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("W1g9");
 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports



function DrawerSearchInput() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"]),
      searchQuery = _useContext.searchQuery,
      setSearchQuery = _useContext.setSearchQuery;

  var textId = Object(react_use_id_hook__WEBPACK_IMPORTED_MODULE_3__[/* useId */ "b"])();

  var handleChange = function handleChange(event) {
    setSearchQuery(event.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    id: textId,
    label: "Search",
    margin: "normal",
    variant: "outlined",
    type: "search",
    size: "small",
    "aria-label": "Search documentation",
    value: searchQuery,
    onChange: handleChange
  });
}

/***/ })

}]);
//# sourceMappingURL=68-6866bdfac4572c649efa.js.map