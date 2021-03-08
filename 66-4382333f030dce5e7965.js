(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "n8kx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardCharacterScreen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dYIP");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7/Hy");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("R/WZ");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ZBNC");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Lml+");
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("aVfY");







var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(function () {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({
    text: {
      fontFamily: "monospace",
      fontWeight: 100
    },
    box: {}
  });
});
function DashboardCharacterScreen(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var classes = useStyles();

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* CharacterScreenReg */ "J"].Message)),
      message = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* CharacterScreenReg */ "J"].Rows)),
      rows = _useRegisterUnpackedV2[0];

  var _useRegisterUnpackedV3 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* CharacterScreenReg */ "J"].Columns)),
      columns = _useRegisterUnpackedV3[0];

  var _useRegisterUnpackedV4 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* CharacterScreenReg */ "J"].TextDirection)),
      textDirection = _useRegisterUnpackedV4[0];

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])("primary"),
      textPrimary = _useWidgetTheme.textPrimary,
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground;

  if (rows === undefined || columns === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null); // size unknown

  var cw = 8;
  var ch = 10;
  var m = 1;
  var mo = 2;
  var fs = 8;
  var rtl = textDirection === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* CharacterScreenTextDirection */ "K"].RightToLeft;
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
      els.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        key: row + "-" + column
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        x: x,
        y: y,
        width: cw,
        height: ch,
        className: classes.box,
        fill: controlBackground
      }), char && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    tabIndex: 0,
    title: "character screen displaying \"" + message + "\"",
    width: w,
    height: h
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
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
//# sourceMappingURL=66-4382333f030dce5e7965.js.map