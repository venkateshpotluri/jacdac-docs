(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "30+C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("kKAo");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("H2TA");






var styles = {
  /* Styles applied to the root element. */
  root: {
    overflow: 'hidden'
  }
};
var Card = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Card(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$raised = props.raised,
      raised = _props$raised === void 0 ? false : _props$raised,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "raised"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Paper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className),
    elevation: raised ? 8 : 1,
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(styles, {
  name: 'MuiCard'
})(Card));

/***/ }),

/***/ "3SIa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
}), 'NotificationsNone');

exports.default = _default;

/***/ }),

/***/ "4l/8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return statusAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useDeviceStatusLightStyle; });
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IzqI");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dYIP");
/* harmony import */ var _hooks_useLedAnimationStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("XEv/");




var statusHue = 32;
var statusSaturation = 255; //Every 524ms it changes from 5.9% and 1.6% (i.e. 1 sec duty cycle)

var bootloaderAnimation = [0, [[statusHue, statusSaturation, 96, 524 / 8], [statusHue, statusSaturation, 96, 0.1], [statusHue, statusSaturation, 72, 524 / 8], [statusHue, statusSaturation, 72, 0.1]]]; // 50ms every 150ms (50 on, 100 off) seven times (i.e. for 1 second)

var identifyAnimation = [7, [[statusHue, statusSaturation, 255, 50 / 8], [statusHue, statusSaturation, 255, 0.1], [statusHue, statusSaturation, 0, 100 / 8], [statusHue, statusSaturation, 0, 0.1]]]; // lights at 100% for 270ms, then 5.9% for rest of 530ms, 
// then goes into application that turns it on full for 200ms

var startupAnimation = [1, [[statusHue, statusSaturation, 255, 270 / 8], [statusHue, statusSaturation, 255, 0.1], [statusHue, statusSaturation, 6 / 100 * 0xff, 530 / 8], [statusHue, statusSaturation, 6 / 100 * 0xff, 0.1], [statusHue, statusSaturation, 255, 200 / 8], [statusHue, statusSaturation, 255, 0.1], [statusHue, statusSaturation, 0, 0.1]]]; // Synchronized fast blink 50us every 500ms

var connectedAnimation = [0, [[statusHue, statusSaturation, 0, 500 / 8], [statusHue, statusSaturation, 0, 0.1], [statusHue, statusSaturation, 96, 24 / 8], [statusHue, statusSaturation, 96, 0.1], [statusHue, statusSaturation, 0, 0.1]]]; //5ms every 250ms

var disconnectedAnimation = [0, [[statusHue, statusSaturation, 128, 40 / 8], [statusHue, statusSaturation, 128, 0.1], [statusHue, statusSaturation, 16, 250 / 8], [statusHue, statusSaturation, 16, 0.1]]]; // fast blink 70ms on, 70ms off - 30 times (4.2 seconds) before a reboot

var panicFrames = [30, [[statusHue, statusSaturation, 128, 70 / 8], [statusHue, statusSaturation, 128, 0.1], [statusHue, statusSaturation, 16, 70 / 8], [statusHue, statusSaturation, 16, 0.1]]];
function statusAnimation(status) {
  switch (status) {
    case "startup":
      return startupAnimation;

    case "identify":
      return identifyAnimation;

    case "connected":
      return connectedAnimation;

    case "disconnected":
      return disconnectedAnimation;

    case "panic":
      return panicFrames;

    case "bootloader":
      return bootloaderAnimation;

    default:
      return [0, []];
  }
}
function useDeviceStatusLightStyle(device, options) {
  var register = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(device, function (d) {
    return d.service(0).register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__[/* ControlReg */ "T"].StatusLight);
  });
  var bootloader = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(device, function (d) {
    return d.hasService(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__[/* SRV_BOOTLOADER */ "zd"]);
  });
  var identifying = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(device, function (d) {
    return d === null || d === void 0 ? void 0 : d.identifying;
  });
  var registerAnimation = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(register) || [0, []]; // pick animation step

  var animation = identifying ? identifyAnimation : bootloader ? bootloaderAnimation : registerAnimation;
  return Object(_hooks_useLedAnimationStyle__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(animation, options);
}

/***/ }),

/***/ "50B7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ofer");






var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 16
  },

  /* Styles applied to the avatar element. */
  avatar: {
    flex: '0 0 auto',
    marginRight: 16
  },

  /* Styles applied to the action element. */
  action: {
    flex: '0 0 auto',
    alignSelf: 'flex-start',
    marginTop: -8,
    marginRight: -8
  },

  /* Styles applied to the content wrapper element. */
  content: {
    flex: '1 1 auto'
  },

  /* Styles applied to the title Typography element. */
  title: {},

  /* Styles applied to the subheader Typography element. */
  subheader: {}
};
var CardHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function CardHeader(props, ref) {
  var action = props.action,
      avatar = props.avatar,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      subheaderProp = props.subheader,
      subheaderTypographyProps = props.subheaderTypographyProps,
      titleProp = props.title,
      titleTypographyProps = props.titleTypographyProps,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["action", "avatar", "classes", "className", "component", "disableTypography", "subheader", "subheaderTypographyProps", "title", "titleTypographyProps"]);

  var title = titleProp;

  if (title != null && title.type !== _Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] && !disableTypography) {
    title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      variant: avatar ? 'body2' : 'h5',
      className: classes.title,
      component: "span",
      display: "block"
    }, titleTypographyProps), title);
  }

  var subheader = subheaderProp;

  if (subheader != null && subheader.type !== _Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] && !disableTypography) {
    subheader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      variant: avatar ? 'body2' : 'body1',
      className: classes.subheader,
      color: "textSecondary",
      component: "span",
      display: "block"
    }, subheaderTypographyProps), subheader);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className),
    ref: ref
  }, other), avatar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classes.avatar
  }, avatar), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classes.content
  }, title, subheader), action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classes.action
  }, action));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiCardHeader'
})(CardHeader));

/***/ }),

/***/ "6IG3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "7.2",
  cy: "14.4",
  r: "3.2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "14.8",
  cy: "18",
  r: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "15.2",
  cy: "8.8",
  r: "4.8"
})), 'BubbleChart');

exports.default = _default;

/***/ }),

/***/ "8dGm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"
}), 'Reply');

exports.default = _default;

/***/ }),

/***/ "B2Qq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M7 2v11h3v9l7-12h-4l4-8z"
}), 'FlashOn');

exports.default = _default;

/***/ }),

/***/ "DgOb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
}), 'Computer');

exports.default = _default;

/***/ }),

/***/ "F3CG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Create');

exports.default = _default;

/***/ }),

/***/ "FgCT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z"
}), 'ConfirmationNumber');

exports.default = _default;

/***/ }),

/***/ "HK/0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"
}), 'DeviceHub');

exports.default = _default;

/***/ }),

/***/ "LoFq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useDeviceSpecification; });
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Z8Ma");
/* harmony import */ var _useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dYIP");



function useDeviceSpecification(device) {
  var _device$service;

  var firmwareIdentifierRegister = device === null || device === void 0 ? void 0 : (_device$service = device.service(0)) === null || _device$service === void 0 ? void 0 : _device$service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__[/* ControlReg */ "T"].FirmwareIdentifier);
  var firmwareIdentifier = Object(_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterIntValue */ "c"])(firmwareIdentifierRegister);
  var specification = Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__[/* deviceSpecificationFromFirmwareIdentifier */ "b"])(firmwareIdentifier);
  return specification;
}

/***/ }),

/***/ "Mtft":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"
}), 'DataUsage');

exports.default = _default;

/***/ }),

/***/ "NHHF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return KindIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return kindName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allKinds; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("F3CG");
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Y0qX");
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_CallToAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tBi4");
/* harmony import */ var _material_ui_icons_CallToAction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CallToAction__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_FlashOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("B2Qq");
/* harmony import */ var _material_ui_icons_FlashOn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FlashOn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_DataUsage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Mtft");
/* harmony import */ var _material_ui_icons_DataUsage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DataUsage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("8dGm");
/* harmony import */ var _material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_DeviceUnknown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("YNWc");
/* harmony import */ var _material_ui_icons_DeviceUnknown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeviceUnknown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_DeviceHub__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("HK/0");
/* harmony import */ var _material_ui_icons_DeviceHub__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeviceHub__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("6IG3");
/* harmony import */ var _material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("DgOb");
/* harmony import */ var _material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_BlurLinear__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("bhb1");
/* harmony import */ var _material_ui_icons_BlurLinear__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BlurLinear__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ConfirmationNumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("FgCT");
/* harmony import */ var _material_ui_icons_ConfirmationNumber__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ConfirmationNumber__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("3SIa");
/* harmony import */ var _material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("oTnw");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("ZfHV");
/* harmony import */ var _icons_JacdacIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("w8dJ");
 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name




function KindIcon(props) {
  var kind = props.kind,
      className = props.className;
  var icon;

  switch (kind) {
    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_RO */ "nc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DataUsage__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_RW */ "oc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_ANNOUNCE */ "mc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* CONST_NODE_NAME */ "K"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* COMMAND_NODE_NAME */ "G"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CallToAction__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* EVENT_NODE_NAME */ "nb"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_FlashOn__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* REPORT_NODE_NAME */ "Uc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* BUS_NODE_NAME */ "l"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DeviceHub__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* DEVICE_NODE_NAME */ "eb"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_JacdacIcon__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* VIRTUAL_DEVICE_NODE_NAME */ "if"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* SERVICE_NODE_NAME */ "sd"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PIPE_NODE_NAME */ "zc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_BlurLinear__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PIPE_REPORT_NODE_NAME */ "Bc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_BlurLinear__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* CRC_ACK_NODE_NAME */ "L"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ConfirmationNumber__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* SERVICE_TEST_NODE_NAME */ "td"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_14___default.a, {
        className: className
      });
      break;

    default:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DeviceUnknown__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: className
      });
      break;
  }

  return icon;
}
function kindName(kind) {
  switch (kind) {
    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_RO */ "nc"]:
      return "read only";

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_RW */ "oc"]:
      return "read write";

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* VIRTUAL_DEVICE_NODE_NAME */ "if"]:
      return "simulated device";

    default:
      return kind;
  }
}
function allKinds() {
  return [_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* REPORT_NODE_NAME */ "Uc"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_RW */ "oc"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_RO */ "nc"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* CONST_NODE_NAME */ "K"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* EVENT_NODE_NAME */ "nb"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* COMMAND_NODE_NAME */ "G"]];
}

/***/ }),

/***/ "TKHO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hsvToCss; });
function hsvToCss(hue, saturation, value, brightness, monochrome) {
  var csshue = hue * 360 / 0xff;
  var csssat = (monochrome ? 0xff : saturation) / 0xff;
  var cssval = value / 0xff;

  var _hsv_to_hsl = hsv_to_hsl(csshue, csssat, cssval),
      h = _hsv_to_hsl[0],
      s = _hsv_to_hsl[1],
      l = _hsv_to_hsl[2];

  var mixl = 0.3;
  var alpha = (mixl + (1 - mixl) * l) * brightness;
  return "hsla(" + h + ", " + s * 100 + "%, " + l * 100 + "%, " + alpha;
}

function hsv_to_hsl(h, s, v) {
  // both hsv and hsl values are in [0, 1]
  var l = (2 - s) * v / 2;

  if (l != 0) {
    if (l == 1) {
      s = 0;
    } else if (l < 0.5) {
      s = s * v / (l * 2);
    } else {
      s = s * v / (2 - l * 2);
    }
  }

  return [h, s, l];
}

/***/ }),

/***/ "XEv/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useLedAnimationStyle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TKHO");
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Zo1I");




function interpolate(frames, time) {
  var framet = 0;
  var nframes = frames.length;

  for (var i = 0; i < nframes; ++i) {
    var frame = frames[i];

    if (i == nframes - 1 || time >= framet && time < framet + frame[3]) {
      // found time interval
      var frame1 = i == nframes - 1 ? frames[0] : frames[i + 1];
      var ratio = (time - framet) / frame[3];
      var ratiom1 = 1 - ratio;
      return {
        hue: ratio * frame[0] + ratiom1 * frame1[0],
        saturation: ratio * frame[1] + ratiom1 * frame1[1],
        value: ratio * frame[2] + ratiom1 * frame1[2]
      };
    } else {
      // keep adding time
      framet += frame[3]; // current start time of frame
    }
  }

  return {
    hue: 0,
    saturation: 0,
    value: 0
  };
}

function useLedAnimationStyle(animation, options) {
  var repetitions = animation[0],
      frames = animation[1];

  var _ref = options || {},
      monochrome = _ref.monochrome,
      cssProperty = _ref.cssProperty,
      step = _ref.step,
      interval = _ref.interval; // generate a CSS animation for the curren frames


  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (!(frames !== null && frames !== void 0 && frames.length) || repetitions < 0) return {
      className: "",
      helmetStyle: undefined
    };
    var className = "a-" + (Math.random() + "").replace(/^.*\./, '');
    var DURATION = 3;
    var property = cssProperty || "background-color";
    var total8ms = frames.reduce(function (t, row) {
      return t + row[DURATION];
    }, 0);
    var totals = total8ms * 8 / 1000 + (interval || 0) / 1000;
    var kf = "@keyframes " + className + " {\n";

    if (step) {
      var t8ms = 0;
      frames.forEach(function (frame) {
        var hue = frame[0],
            sat = frame[1],
            value = frame[2],
            duration = frame[3];
        var csscolor = Object(_jacdac_ts_src_jdom_color__WEBPACK_IMPORTED_MODULE_1__[/* hsvToCss */ "a"])(hue, sat, value, 0xff, monochrome);
        var percent = t8ms * 8 / 1000 / totals * 100;
        kf += "  " + Object(_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__[/* roundWithPrecision */ "L"])(percent, 5) + "% { " + property + ": " + csscolor + "); }\n";
        t8ms += duration; // console.log({ total8ms, totals, t8ms, duration, percent })
      });
    } else {
      // 30fps
      var KEYFRAME_DURATION = 30 >> 3;
      var nkframes = Math.ceil(total8ms / KEYFRAME_DURATION);

      for (var kframei = 0; kframei < nkframes; ++kframei) {
        var kt = kframei / nkframes * total8ms;

        var _interpolate = interpolate(frames, kt),
            hue = _interpolate.hue,
            saturation = _interpolate.saturation,
            value = _interpolate.value; // generate new keyframe


        var percent = Math.round(kframei / (nkframes - 1) * 100);
        var csscolor = Object(_jacdac_ts_src_jdom_color__WEBPACK_IMPORTED_MODULE_1__[/* hsvToCss */ "a"])(hue, saturation, value, 0xff, monochrome);
        kf += "  " + Object(_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__[/* roundWithPrecision */ "L"])(percent, 5) + "% { " + property + ": " + csscolor + "); }\n";
      }
    }

    kf += "}\n"; // @keyframes
    // class

    kf += "." + className + " {\nanimation-duration: " + totals + "s;\nanimation-name: " + className + ";\nanimation-delay: 0s;\nanimation-timing-function: linear;\nanimation-iteration-count: " + (!repetitions ? 'infinite' : repetitions) + ";\n}";
    return {
      helmetStyle: kf,
      className: className
    };
  }, [frames === null || frames === void 0 ? void 0 : frames.map(function (frame) {
    return frame.toString();
  }).join(), monochrome, step, cssProperty, interval, repetitions]),
      helmetStyle = _useMemo.helmetStyle,
      className = _useMemo.className;

  return {
    className: className,
    helmetStyle: helmetStyle
  };
}

/***/ }),

/***/ "Y0qX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
}), 'Lock');

exports.default = _default;

/***/ }),

/***/ "YNWc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zM12 6.72c-1.96 0-3.5 1.52-3.5 3.47h1.75c0-.93.82-1.75 1.75-1.75s1.75.82 1.75 1.75c0 1.75-2.63 1.57-2.63 4.45h1.76c0-1.96 2.62-2.19 2.62-4.45 0-1.96-1.54-3.47-3.5-3.47zm-.88 8.8h1.76v1.76h-1.76z"
}), 'DeviceUnknown');

exports.default = _default;

/***/ }),

/***/ "bhb1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M5 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM3 21h18v-2H3v2zM5 9.5c.83 0 1.5-.67 1.5-1.5S5.83 6.5 5 6.5 3.5 7.17 3.5 8 4.17 9.5 5 9.5zm0 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM3 3v2h18V3H3zm14 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm0 4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM13 9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"
}), 'BlurLinear');

exports.default = _default;

/***/ }),

/***/ "dI3M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useDeviceImage; });
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+ZDr");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Z8Ma");


function useDeviceImage(specification, suffix) {
  return specification && Object(gatsby_link__WEBPACK_IMPORTED_MODULE_0__["withPrefix"])("images/devices/" + Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__[/* identifierToUrlPath */ "g"])(specification.id) + (suffix ? "." + suffix : '') + ".jpg");
}

/***/ }),

/***/ "dYIP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useRegisterHumanValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useRegisterIntValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useRegisterUnpackedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useRegisterStringValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useRegisterBoolValue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfHV");


function useRegisterHumanValue(register) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(register === null || register === void 0 ? void 0 : register.humanValue),
      value = _useState[0],
      setValue = _useState[1]; // update value


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* REPORT_UPDATE */ "Wc"], function () {
      setValue(register === null || register === void 0 ? void 0 : register.humanValue);
    });
  }, [register]);
  return value;
}
function useRegisterIntValue(register) {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(register === null || register === void 0 ? void 0 : register.intValue),
      value = _useState2[0],
      setValue = _useState2[1]; // update value


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* REPORT_UPDATE */ "Wc"], function () {
      setValue(register === null || register === void 0 ? void 0 : register.intValue);
    });
  }, [register]);
  return value;
}
function useRegisterUnpackedValue(register) {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(register === null || register === void 0 ? void 0 : register.unpackedValue),
      value = _useState3[0],
      setValue = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* REPORT_UPDATE */ "Wc"], function () {
      setValue(register === null || register === void 0 ? void 0 : register.unpackedValue);
    });
  }, [register]);
  return value || [];
}
function useRegisterStringValue(register) {
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(register === null || register === void 0 ? void 0 : register.stringValue),
      value = _useState4[0],
      setValue = _useState4[1]; // update value


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* REPORT_UPDATE */ "Wc"], function () {
      setValue(register === null || register === void 0 ? void 0 : register.stringValue);
    });
  }, [register]);
  return value;
}
function useRegisterBoolValue(register) {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(register === null || register === void 0 ? void 0 : register.boolValue),
      value = _useState5[0],
      setValue = _useState5[1]; // update value


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* REPORT_UPDATE */ "Wc"], function () {
      setValue(register === null || register === void 0 ? void 0 : register.boolValue);
    });
  }, [register]);
  return value;
}

/***/ }),

/***/ "oTnw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckCircle');

exports.default = _default;

/***/ }),

/***/ "oa/T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");





var styles = {
  /* Styles applied to the root element. */
  root: {
    padding: 16,
    '&:last-child': {
      paddingBottom: 24
    }
  }
};
var CardContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function CardContent(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiCardContent'
})(CardContent));

/***/ }),

/***/ "puVa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DeviceAvatar; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("iuhU");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__("5AJ6");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/Person.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var Person = (Object(createSvgIcon["a" /* default */])( /*#__PURE__*/react["createElement"]("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'Person'));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Avatar/Avatar.js







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: 40,
      height: 40,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(20),
      lineHeight: 1,
      borderRadius: '50%',
      overflow: 'hidden',
      userSelect: 'none'
    },

    /* Styles applied to the root element if not `src` or `srcSet`. */
    colorDefault: {
      color: theme.palette.background.default,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
    },

    /* Styles applied to the root element if `variant="circle"`. */
    circle: {},

    /* Styles applied to the root element if `variant="circular"`. */
    circular: {},

    /* Styles applied to the root element if `variant="rounded"`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="square"`. */
    square: {
      borderRadius: 0
    },

    /* Styles applied to the img element if either `src` or `srcSet` is defined. */
    img: {
      width: '100%',
      height: '100%',
      textAlign: 'center',
      // Handle non-square image. The property isn't supported by IE 11.
      objectFit: 'cover',
      // Hide alt text.
      color: 'transparent',
      // Hide the image broken icon, only works on Chrome.
      textIndent: 10000
    },

    /* Styles applied to the fallback icon */
    fallback: {
      width: '75%',
      height: '75%'
    }
  };
};

function useLoaded(_ref) {
  var src = _ref.src,
      srcSet = _ref.srcSet;

  var _React$useState = react["useState"](false),
      loaded = _React$useState[0],
      setLoaded = _React$useState[1];

  react["useEffect"](function () {
    if (!src && !srcSet) {
      return undefined;
    }

    setLoaded(false);
    var active = true;
    var image = new Image();
    image.src = src;
    image.srcSet = srcSet;

    image.onload = function () {
      if (!active) {
        return;
      }

      setLoaded('loaded');
    };

    image.onerror = function () {
      if (!active) {
        return;
      }

      setLoaded('error');
    };

    return function () {
      active = false;
    };
  }, [src, srcSet]);
  return loaded;
}

var Avatar_Avatar = /*#__PURE__*/react["forwardRef"](function Avatar(props, ref) {
  var alt = props.alt,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      imgProps = props.imgProps,
      sizes = props.sizes,
      src = props.src,
      srcSet = props.srcSet,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'circle' : _props$variant,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["alt", "children", "classes", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"]);

  var children = null; // Use a hook instead of onError on the img element to support server-side rendering.

  var loaded = useLoaded({
    src: src,
    srcSet: srcSet
  });
  var hasImg = src || srcSet;
  var hasImgNotFailing = hasImg && loaded !== 'error';

  if (hasImgNotFailing) {
    children = /*#__PURE__*/react["createElement"]("img", Object(esm_extends["a" /* default */])({
      alt: alt,
      src: src,
      srcSet: srcSet,
      sizes: sizes,
      className: classes.img
    }, imgProps));
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = /*#__PURE__*/react["createElement"](Person, {
      className: classes.fallback
    });
  }

  return /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, classes.system, classes[variant], className, !hasImgNotFailing && classes.colorDefault),
    ref: ref
  }, other), children);
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Avatar_Avatar = (Object(withStyles["a" /* default */])(styles, {
  name: 'MuiAvatar'
})(Avatar_Avatar));
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./src/jacdac/useDeviceSpecification.ts
var useDeviceSpecification = __webpack_require__("LoFq");

// EXTERNAL MODULE: ./src/components/CmdButton.tsx + 58 modules
var CmdButton = __webpack_require__("mv/Z");

// EXTERNAL MODULE: ./src/components/hooks/useDeviceHost.ts
var useDeviceHost = __webpack_require__("nyay");

// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__("NHHF");

// EXTERNAL MODULE: ./src/components/devices/useDeviceStatusLightStyle.ts
var useDeviceStatusLightStyle = __webpack_require__("4l/8");

// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__("qhky");

// EXTERNAL MODULE: ./src/components/devices/useDeviceName.ts
var useDeviceName = __webpack_require__("mAuX");

// EXTERNAL MODULE: ./src/components/devices/useDeviceImage.ts
var useDeviceImage = __webpack_require__("dI3M");

// EXTERNAL MODULE: ./src/components/icons/JacdacIcon.tsx
var JacdacIcon = __webpack_require__("w8dJ");

// CONCATENATED MODULE: ./src/components/devices/DeviceAvatar.tsx














var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    img: {
      marginTop: "58%"
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3)
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7)
    }
  });
});
function DeviceAvatar(props) {
  var device = props.device,
      size = props.size;
  var specification = Object(useDeviceSpecification["a" /* default */])(device);
  var imageUrl = Object(useDeviceImage["a" /* default */])(specification, "avatar");
  var name = Object(useDeviceName["a" /* default */])(device);
  var classes = useStyles();
  var sizeClassName = size === "small" ? classes.small : size === "large" ? classes.large : undefined;
  var host = Object(useDeviceHost["a" /* default */])(device);

  var _useDeviceStatusLight = Object(useDeviceStatusLightStyle["a" /* default */])(device),
      statusLEDClassName = _useDeviceStatusLight.className,
      statusLEDHelmetStyle = _useDeviceStatusLight.helmetStyle;

  var handleIdentify = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return device.identify();

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleIdentify() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, statusLEDHelmetStyle && /*#__PURE__*/react_default.a.createElement(Helmet["b" /* default */], null, /*#__PURE__*/react_default.a.createElement("style", null, statusLEDHelmetStyle)), /*#__PURE__*/react_default.a.createElement(CmdButton["a" /* default */], {
    trackName: "device.identify",
    size: "small",
    title: "identify " + (host ? "simulator" : "device") + " " + name,
    onClick: handleIdentify,
    className: statusLEDClassName,
    icon: host ? /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
      kind: constants["if" /* VIRTUAL_DEVICE_NODE_NAME */]
    }) : !imageUrl ? /*#__PURE__*/react_default.a.createElement(JacdacIcon["a" /* default */], null) : /*#__PURE__*/react_default.a.createElement(esm_Avatar_Avatar, {
      className: sizeClassName,
      alt: (specification === null || specification === void 0 ? void 0 : specification.name) || "Image of the device",
      src: imageUrl,
      classes: {
        img: classes.img
      }
    })
  }));
}

/***/ }),

/***/ "tBi4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z"
}), 'CallToAction');

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=c37b5bd9aed7a7d87c7dc14e0995fcee0a1542f0-e07ac0a8f0503220c022.js.map