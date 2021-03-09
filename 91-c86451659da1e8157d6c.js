(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ "ns0S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardWindDirection; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HaE+");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dYIP");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7/Hy");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Lml+");
/* harmony import */ var _hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("asyI");
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("W1g9");
/* harmony import */ var _hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cJz4");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("tRbT");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("6Obz");
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("aVfY");












function DashboardWindDirection(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var directionRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* WindDirectionReg */ "ff"].WindDirection);

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__[/* useRegisterUnpackedValue */ "e"])(directionRegister),
      direction = _useRegisterUnpackedV[0];

  var host = Object(_hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active;

  var arrowHeadId = Object(react_use_id_hook__WEBPACK_IMPORTED_MODULE_8__[/* useId */ "b"])();
  var a = Object(_hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(direction, 360);
  if (direction === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null);
  var w = 64;
  var h = 64;
  var mw = 5;
  var mh = 4.5;
  var r = (w >> 1) - 4;
  var sw = 3;
  var cx = w >> 1;
  var cy = h * 4 / 5;
  var cy2 = h * 2 / 5;

  var handleChange = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(ev, newValue) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return host === null || host === void 0 ? void 0 : host.reading.setValues([newValue]);

            case 2:
              directionRegister.refresh();

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    width: w,
    height: h
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("marker", {
    id: arrowHeadId,
    markerWidth: mw,
    markerHeight: mh,
    refX: 0,
    refY: mh / 2,
    orient: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("polygon", {
    fill: active,
    points: "0 0, " + mw + " " + mh / 2 + ", 0 " + mh
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", {
    transform: "rotate(" + a + ", " + (w >> 1) + ", " + (h >> 1) + ")"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("circle", {
    cx: w >> 1,
    cy: h >> 1,
    r: r,
    fill: controlBackground,
    stroke: background,
    strokeWidth: sw
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("line", {
    x1: cx,
    y1: cy,
    x2: cx,
    y2: cy2,
    stroke: active,
    strokeWidth: sw,
    markerEnd: "url(#" + arrowHeadId + ")",
    "aria-label": "arrow point at " + direction + "\xB0"
  })))), host && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    color: color,
    valueLabelDisplay: "auto",
    min: 0,
    max: 360,
    step: 5,
    value: direction,
    onChange: handleChange
  })));
}

/***/ })

}]);
//# sourceMappingURL=91-c86451659da1e8157d6c.js.map