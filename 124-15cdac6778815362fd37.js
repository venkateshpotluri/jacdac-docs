(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[124],{

/***/ "F4wc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardSolenoid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dYIP");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7/Hy");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Lml+");
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZfHV");
/* harmony import */ var _hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cJz4");
/* harmony import */ var _hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("jwKE");
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("uyZR");








function DashboardSolenoid(props) {
  var service = props.service;
  var pulledRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* SolenoidReg */ "Re"].Pulled);
  var pulled = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__[/* useRegisterBoolValue */ "a"])(pulledRegister, props);
  var server = Object(_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(service);
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(color),
      active = _useWidgetTheme.active,
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      textProps = _useWidgetTheme.textProps;

  var w = 128;
  var bw = 84;
  var h = 72;
  var m = 6;
  var bh = h - 2 * m;
  var bsh = bh - 6 * m;
  var pos = Object(_hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(pulled ? m : w - bw - 2 * m, w);
  var label = pulled ? "pull solenoid" : "push solenoid";

  var onToggle = function onToggle(ev) {
    var _server$register;

    server === null || server === void 0 ? void 0 : (_server$register = server.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* SolenoidReg */ "Re"].Pulled)) === null || _server$register === void 0 ? void 0 : _server$register.setValues([!pulled ? 1 : 0]);
    pulledRegister.refresh();
  };

  var buttonProps = Object(_hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(label, !!server && onToggle);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    width: w,
    height: h,
    background: background
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: m + pos,
    y: m + (bh - bsh) / 2,
    width: bw,
    height: bsh,
    rx: m,
    ry: m,
    fill: active,
    stroke: controlBackground
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", Object.assign({
    x: m,
    y: m,
    width: bw,
    height: bh,
    rx: m,
    ry: m,
    stroke: background,
    fill: controlBackground
  }, buttonProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", Object.assign({}, textProps, {
    x: m + bw / 2,
    y: m + bh / 2
  }), pulled ? "pulled" : "pushed"));
}

/***/ })

}]);
//# sourceMappingURL=124-15cdac6778815362fd37.js.map