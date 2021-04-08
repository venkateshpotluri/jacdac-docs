(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[111],{

/***/ "w0oc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardCompass; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HaE+");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dYIP");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7/Hy");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Lml+");
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("uyZR");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("tRbT");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("6Obz");
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("ZfHV");
/* harmony import */ var _widgets_PowerButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("TaZW");
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("aVfY");











function DashboardCompass(props) {
  var service = props.service;
  var headingRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_9__[/* CompassReg */ "Q"].Heading);
  var enabledRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_9__[/* CompassReg */ "Q"].Enabled);

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__[/* useRegisterUnpackedValue */ "c"])(headingRegister, props),
      heading = _useRegisterUnpackedV[0];

  var enabled = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__[/* useRegisterBoolValue */ "a"])(enabledRegister, props);

  var _useRegisterUnpackedV2 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__[/* useRegisterUnpackedValue */ "c"])(service.statusCodeRegister, props),
      status = _useRegisterUnpackedV2[0];

  var off = !enabled;
  var server = Object(_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(service);
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active,
      textProps = _useWidgetTheme.textProps;

  if (heading === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null);
  var calibrating = status === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_9__[/* SystemStatusCodes */ "ef"].Calibrating;
  var w = 64;
  var h = 64;
  var mw = 5;
  var r = (w >> 1) - 4;
  var sw = 3;
  var cx = w >> 1;
  var cy = h >> 1;
  var sp = 1;
  var pr = 5;
  var pri = 3;

  var handleChange = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(ev, newValue) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return server === null || server === void 0 ? void 0 : server.reading.setValues([newValue]);

            case 2:
              headingRegister.refresh();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleChange(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var valueDisplay = function valueDisplay(angle) {
    return Math.round(angle) + "\xB0";
  };

  var toggleOff = function toggleOff() {
    return enabledRegister.sendSetBoolAsync(off, true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    width: w,
    height: h
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r,
    fill: controlBackground,
    stroke: background,
    strokeWidth: sw
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", {
    transform: "rotate(" + (off ? 0 : heading) + ", " + (w >> 1) + ", " + (h >> 1) + ")"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M " + (cx - mw) + " " + (cy + sp / 2) + " l " + mw + " " + r + " l " + mw + " " + -r + " z",
    fill: background,
    stroke: background,
    strokeWidth: sp
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M " + (cx - mw) + " " + (cy - sp / 2) + " l " + mw + " " + -r + " l " + mw + " " + r + " z",
    stroke: background,
    fill: off ? controlBackground : active,
    strokeWidth: sp
  })), calibrating && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r,
    opacity: 0.9,
    fill: background
  }), calibrating && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("text", Object.assign({
    x: cx,
    y: cy,
    fontSize: 8
  }, textProps), "calibrating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_widgets_PowerButton__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    r: pr,
    ri: pri,
    cx: w - pr - 1,
    cy: h - pr - 1,
    color: color,
    strokeWidth: 1,
    off: off,
    onClick: server && toggleOff
  }))), server && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    color: color,
    valueLabelDisplay: "auto",
    valueLabelFormat: valueDisplay,
    min: 0,
    max: 360,
    step: 1,
    value: heading,
    onChange: handleChange,
    "aria-label": "heading"
  })));
}

/***/ })

}]);
//# sourceMappingURL=111-02736ee1b756f2ace714.js.map