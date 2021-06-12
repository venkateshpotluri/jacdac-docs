(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2470],{

/***/ 32470:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DrawerSearchInput; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1059);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84377);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19640);
 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports



function DrawerSearchInput() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP),
      searchQuery = _useContext.searchQuery,
      setSearchQuery = _useContext.setSearchQuery;

  var textId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)();

  var handleChange = function handleChange(event) {
    setSearchQuery(event.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
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