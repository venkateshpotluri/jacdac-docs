(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[112],{

/***/ "HqAP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardLED; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("asyI");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7/Hy");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dYIP");
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("yNWl");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("tRbT");
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ZfHV");
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("aVfY");








function DashboardLED(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_jacdac_Context__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]),
      bus = _useContext.bus;

  var service = props.service;
  var host = Object(_hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(service);
  var color = host ? "secondary" : "primary";

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_6__[/* LedReg */ "Vb"].Color), props),
      r = _useRegisterUnpackedV[0],
      g = _useRegisterUnpackedV[1],
      b = _useRegisterUnpackedV[2];

  var _useRegisterUnpackedV2 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_6__[/* LedReg */ "Vb"].WaveLength), props),
      waveLength = _useRegisterUnpackedV2[0];

  var _useRegisterUnpackedV3 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_6__[/* LedReg */ "Vb"].LedCount), props),
      ledCount = _useRegisterUnpackedV3[0];
  /*
  const animation = useMemo(() => new LedAnimation(animationData), [
      animationData,
  ])
  useAnimationFrame(() => {
      animation.update(bus.timestamp)
      return true
  }, [animation])
   const hsv = useChange(animation, a => a?.hsv)
  */
  // nothing to see


  if (r === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null);
  var opacity = 1;
  var fill = "rgb(" + r + ", " + g + ", " + b + ")";
  var ln = Math.min(ledCount || 1, 5);
  var lw = 15.5;
  var m = 1;
  var w = (lw + m) * ln;
  var h = 42;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    width: w,
    height: h,
    size: "5em"
  }, Array(ln).fill(0).map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      key: i,
      transform: "translate(" + i * (lw + m) + ", 0)"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "#999",
      d: "M14.2 13V7.1C14.2 3.2 11 0 7.1 0 3.2 0 0 3.2 0 7.1v13.7c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9v-1.5c0-1.2-.5-2.3-1.3-3.2z",
      opacity: ".65"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "#8c8c8c",
      d: "M2.8 17.5l-1.2-1.4h1L5 17.5v18.6c0 .3-.5.5-1.1.5-.6 0-1.1-.2-1.1-.5zm10.1 6.7c0-.7-1.1-1.3-2.1-1.8-.4-.2-1.2-.6-1.2-.9v-3.4l2.5-2h-.9l-3.7 2v3.5c0 .7.9 1.2 1.9 1.7.4.2 1.3.8 1.3 1.1v16.9c0 .4.5.7 1.1.7.6 0 1.1-.3 1.1-.7z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      opacity: opacity,
      fill: fill,
      d: "M14.2 13V7.1C14.2 3.2 11 0 7.1 0 3.2 0 0 3.2 0 7.1v13.7c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9v-1.5c0-1.2-.5-2.3-1.3-3.2z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "#d1d1d1",
      d: "M14.2 13v3.1c0 2.7-3.2 5-7.1 5-3.9 0-7.1-2.2-7.1-5v4.6c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9v-1.5c0-1.1-.5-2.2-1.3-3.1z",
      opacity: ".9"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "#e6e6e6",
      d: "M14.2 13v3.1c0 2.7-3.2 5-7.1 5-3.9 0-7.1-2.2-7.1-5v4.6c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9v-1.5c0-1.1-.5-2.2-1.3-3.1z",
      opacity: ".7"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "#e6e6e6",
      d: "M14.2 13v3.1c0 2.7-3.2 5-7.1 5-3.9 0-7.1-2.2-7.1-5v3.1c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9 0-1.1-.5-2.2-1.3-3.1z",
      opacity: ".25"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
      cx: "-7.2",
      cy: "-16.1",
      fill: "#e6e6e6",
      opacity: ".25",
      rx: "7.1",
      ry: "5",
      transform: "scale(-1)"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
      cx: "-7.2",
      cy: "-16.1",
      fill: "#e6e6e6",
      opacity: ".25",
      rx: "7.1",
      ry: "5",
      transform: "scale(-1)"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      opacity: ".61",
      fill: "#fff",
      d: "M7.2 22c-4.3 0-6.1-2-6.1-2l.7-.7S3.4 21 7.2 21c2.4.1 4.7-.9 6.3-2.7l.8.6C12.4 21 9.9 22.1 7.2 22z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      opacity: ".61",
      fill: "#fff",
      d: "M2.6 3.2C1.5 4.3.9 5.8.9 7.4v10.3l1.9 1.5V8.8c-.9-2.8-.3-4.2.7-5.2-.3-.1-.6-.2-.9-.4zm7.3-1.6l-.3.9c1.5.7 2.6 2.1 2.8 3.7h1c-.3-2-1.6-3.7-3.5-4.6z"
    }));
  }))));
}

/***/ })

}]);
//# sourceMappingURL=112-456020a5bc3b3f2a72e2.js.map