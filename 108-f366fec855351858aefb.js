(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[108],{

/***/ "SmDE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardAnalogButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dYIP");
/* harmony import */ var _hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("asyI");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7/Hy");
/* harmony import */ var _hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("jwKE");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Lml+");
/* harmony import */ var _widgets_svgutils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("bf+Y");
/* harmony import */ var _hooks_useAnimationFrame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("y4gn");
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("aVfY");










var ACTIVE_SPEED = 0.05;
var INACTIVE_SPEED = 0.1;
function DashboardAnalogButton(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var pressureRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* AnalogButtonReg */ "e"].Pressure);

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(pressureRegister),
      pressure = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* AnalogButtonReg */ "e"].ActiveThreshold)),
      activeThreshold = _useRegisterUnpackedV2[0]; //const [buttonVariant] = useRegisterUnpackedValue<[AnalogButtonVariant]>(service.register(AnalogButtonReg.Variant));


  var widgetSize = "clamp(5em, 25vw, 100%)";
  var host = Object(_hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(service);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      down = _useState[0],
      setDown = _useState[1];

  var color = host ? "secondary" : "primary";
  var label = "button pressure " + pressure;

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active;

  var handleDown = function handleDown() {
    setDown(true);
  };

  var handleUp = function handleUp() {
    setDown(false);
  };

  var buttonProps = Object(_hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(label, host && handleDown, host && handleUp);
  Object(_hooks_useAnimationFrame__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(function () {
    if (!host) return false;

    var _host$reading$values = host.reading.values(),
        p = _host$reading$values[0];

    var keepAnimating = true;

    if (down) {
      if (p > 1 - ACTIVE_SPEED) {
        host.reading.setValues([1]);
        keepAnimating = false;
      } else host.reading.setValues([p + ACTIVE_SPEED]);
    } else {
      if (p < INACTIVE_SPEED) {
        host.reading.setValues([0]);
        keepAnimating = false;
      } else host.reading.setValues([p - INACTIVE_SPEED]);
    }

    host.reading.sendGetAsync(); // refresh ui

    return keepAnimating;
  }, [down]);
  if (pressure === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null);
  var buttonActive = pressure > activeThreshold;
  var w = 64;
  var mo = down ? 3 : 5;
  var r = w / 2;
  var cx = r;
  var cy = r;
  var ro = r;
  var rp = r - mo;
  var ri = rp - mo;
  var ps = mo;
  var range = 360;
  var a = pressure * range;
  var d = Object(_widgets_svgutils__WEBPACK_IMPORTED_MODULE_7__[/* describeArc */ "b"])(cx, cy, rp, 0, a);
  /*
      {buttonVariant === AnalogButtonVariant.Capacitive && <path transform={`translate(20,20)`} aria-hidden={true}
          pointerEvents="none"
          style={{ userSelect: "none" }}
          fill={background}
          d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path>}
          */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    width: w,
    size: widgetSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: 0,
    y: 0,
    rx: 2,
    ry: 2,
    width: w,
    height: w,
    fill: background
  }), pressure && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: d,
    stroke: active,
    strokeLinecap: "round",
    strokeWidth: ps
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: cx,
    cy: mo,
    r: mo / 3,
    "aria-label": "active threshold " + activeThreshold,
    fill: controlBackground,
    transform: "rotate(" + range * activeThreshold + ", " + cx + ", " + cy + ")"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", Object.assign({
    cx: cx,
    cy: cy,
    r: ri,
    "aria-live": "polite",
    fill: buttonActive ? active : controlBackground
  }, buttonProps)));
}

/***/ })

}]);
//# sourceMappingURL=108-f366fec855351858aefb.js.map