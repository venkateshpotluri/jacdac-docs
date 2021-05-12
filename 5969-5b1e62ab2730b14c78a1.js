(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5969],{

/***/ 25969:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardBuzzer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1059);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73512);



function DashboardBuzzer(props) {
  var service = props.service;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      selector = _useState[0],
      setSelector = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.None */ .Q2Q.None),
      modifiers = _useState2[0],
      setModifiers = _useState2[1];

  console.log({
    selector: selector,
    modifiers: modifiers.toString(16)
  });

  var handleKeyDown = function handleKeyDown(ev) {
    console.log({
      ev: ev
    });
    var altKey = ev.altKey,
        ctrlKey = ev.ctrlKey,
        shiftKey = ev.shiftKey,
        metaKey = ev.metaKey;
    var modifiers = (altKey && _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftAlt */ .Q2Q.LeftAlt) | (metaKey && _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftGUI */ .Q2Q.LeftGUI) | (ctrlKey && _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftControl */ .Q2Q.LeftControl) | (shiftKey && _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftShift */ .Q2Q.LeftShift);
    setModifiers(modifiers);
  };

  var values = [];
  if (modifiers & _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftAlt */ .Q2Q.LeftAlt) values.push("Alt");
  if (modifiers & _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftControl */ .Q2Q.LeftControl) values.push("Ctrl");
  if (modifiers & _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftGUI */ .Q2Q.LeftGUI) values.push("Cmd");
  if (modifiers & _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftShift */ .Q2Q.LeftShift) values.push("Shift");
  if (modifiers & _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.RightAlt */ .Q2Q.RightAlt) values.push("Right Alt");
  if (modifiers & _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.RightControl */ .Q2Q.RightControl) values.push("Right Ctrl");
  if (modifiers & _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.RightGUI */ .Q2Q.RightGUI) values.push("Right Cmd");
  if (modifiers & _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.RightShift */ .Q2Q.RightShift) values.push("Right Shift");
  if (selector) values.push(selector.toString());
  var value = values.join(" + ");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    value: value,
    spellCheck: false,
    fullWidth: true,
    helperText: "Type your key combo",
    onKeyDown: handleKeyDown
  });
}

/***/ })

}]);
//# sourceMappingURL=5969-5b1e62ab2730b14c78a1.js.map