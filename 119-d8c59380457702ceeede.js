(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ "Ps5K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashbaordRainGauge; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HaE+");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZfHV");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7/Hy");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Lml+");
/* harmony import */ var _hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("asyI");
/* harmony import */ var _hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cJz4");
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("IzqI");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("dYIP");
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("W1g9");
/* harmony import */ var _hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("jwKE");
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("Zo1I");













var TILT = 15;
function DashbaordRainGauge(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var precipitationRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* RainGaugeReg */ "bd"].Precipitation);

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_9__[/* useRegisterUnpackedValue */ "e"])(precipitationRegister),
      precipitation = _useRegisterUnpackedV[0];

  var clipId = Object(react_use_id_hook__WEBPACK_IMPORTED_MODULE_10__[/* useId */ "b"])();
  var host = Object(_hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(service);
  var tiltCount = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(host, function (h) {
    return h === null || h === void 0 ? void 0 : h.tiltCount;
  });
  var level = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(host, function (h) {
    return h === null || h === void 0 ? void 0 : h.level;
  });
  var tiltAngle = tiltCount !== undefined ? tiltCount % 2 ? -TILT : TILT : 0;
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active,
      textPrimary = _useWidgetTheme.textPrimary;

  var a = Object(_hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(tiltAngle, 45);
  var l = Object(_hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(level !== undefined ? level : 0.5, 1);
  var clickeable = !!host;

  var handleClick = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              event.stopPropagation();
              _context.next = 4;
              return host === null || host === void 0 ? void 0 : host.rain(0.25);

            case 4:
              _context.next = 6;
              return precipitationRegister.refresh();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var buttonProps = Object(_hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])("rain gauge at level " + Math.round(25 + level * 100) + "%", handleClick);
  var w = 128;
  var h = 64;
  var bw = w / 2;
  var bh = h / 3;
  var bx = (w - bw) / 2;
  var by = h - bh - 24;
  var sw = 1;
  var ty = h - 4;
  var fs = 8;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    width: w,
    height: h
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("clipPath", {
    id: clipId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("rect", {
    transform: "rotate(" + -a + ", " + w / 2 + ", " + (by + bh) + ")",
    x: 0,
    y: by + bh * (1 - l),
    width: w,
    height: h
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", {
    transform: "rotate(" + a + ", " + w / 2 + ", " + (by + bh) + ")"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("rect", Object.assign({
    x: bx,
    y: by,
    tabIndex: 0,
    width: bw,
    height: bh,
    strokeWidth: sw,
    stroke: active,
    fill: background,
    "aria-live": "polite"
  }, buttonProps, {
    className: clickeable ? "clickeable" : undefined,
    role: clickeable ? "button" : undefined
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("rect", {
    x: bx,
    y: by,
    width: bw,
    height: bh,
    stroke: active,
    fill: active,
    "aria-label": "water",
    clipPath: "url(#" + clipId + ")",
    pointerEvents: "none",
    style: {
      userSelect: "none"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("text", {
    x: w / 2,
    y: ty,
    fontSize: fs,
    textAnchor: "middle",
    fill: textPrimary,
    "aria-label": "precipitation " + Object(_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_12__[/* roundWithPrecision */ "L"])(precipitation || 0, 1) + " millimeters"
  }, Object(_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_12__[/* roundWithPrecision */ "L"])(precipitation || 0, 1), "mm"));
}

/***/ })

}]);
//# sourceMappingURL=119-d8c59380457702ceeede.js.map