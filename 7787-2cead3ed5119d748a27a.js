(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7787],{

/***/ 7787:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardCharacterScreen; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89196);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48059);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70274);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2285);







var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(function () {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({
    text: {
      fontFamily: "monospace",
      fontWeight: 100
    },
    box: {}
  });
});
function DashboardCharacterScreen(props) {
  var service = props.service;
  var classes = useStyles();

  var _useRegisterUnpackedV = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.Message */ .OEJ.Message), props),
      message = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.Rows */ .OEJ.Rows), props),
      rows = _useRegisterUnpackedV2[0];

  var _useRegisterUnpackedV3 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.Columns */ .OEJ.Columns), props),
      columns = _useRegisterUnpackedV3[0];

  var _useRegisterUnpackedV4 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.TextDirection */ .OEJ.TextDirection), props),
      textDirection = _useRegisterUnpackedV4[0];

  var _useWidgetTheme = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)("primary"),
      textPrimary = _useWidgetTheme.textPrimary,
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground;

  if (rows === undefined || columns === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, null); // size unknown

  var cw = 8;
  var ch = 10;
  var m = 1;
  var mo = 2;
  var fs = 8;
  var rtl = textDirection === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenTextDirection.RightToLeft */ .mbk.RightToLeft;
  var w = columns * (cw + m) - m + 2 * mo;
  var h = rows * (ch + m) - m + 2 * mo;
  var lines = (message || "").split(/\n/g);
  var els = [];
  var y = mo;

  for (var row = 0; row < rows; ++row) {
    var x = mo;
    var line = lines[row];

    for (var column = 0; column < columns; ++column) {
      var char = line === null || line === void 0 ? void 0 : line[rtl ? columns - 1 - column : column];
      els.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
        key: row + "-" + column
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
        x: x,
        y: y,
        width: cw,
        height: ch,
        className: classes.box,
        fill: controlBackground
      }), char && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
        x: x + cw / 2,
        y: y + ch - fs / 3,
        textAnchor: "middle",
        fontSize: fs,
        className: classes.text,
        fill: textPrimary,
        "aria-label": char
      }, char)));
      x += cw + m;
    }

    y += ch + m;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    tabIndex: 0,
    title: "character screen displaying \"" + message + "\"",
    width: w,
    height: h
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: 0,
    y: 0,
    width: w,
    height: h,
    r: m / 2,
    fill: background
  }), els));
}

/***/ })

}]);
//# sourceMappingURL=7787-2cead3ed5119d748a27a.js.map