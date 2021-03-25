(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "1waj":
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports.default = _default;

/***/ }),

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

/***/ "9pTp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectAlert; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("R/WZ");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZBNC");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hlFM");
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FQT7");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Z8Ma");
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("yNWl");
/* harmony import */ var _jacdac_ConnectButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nyfv");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Bf0q");
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("IzqI");
// tslint:disable-next-line: no-submodule-imports
 // tslint:disable-next-line: no-submodule-imports








var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    button: {
      marginLeft: theme.spacing(2)
    }
  });
});

function NoSsrConnectAlert(props) {
  var classes = useStyles();
  var serviceClass = props.serviceClass;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_jacdac_Context__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]),
      bus = _useContext.bus;

  var transports = bus.transports;
  var devices = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(bus, function (b) {
    return b.devices({
      serviceClass: serviceClass,
      ignoreSelf: true
    });
  });
  var spec = Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_5__[/* serviceSpecificationFromClassIdentifier */ "D"])(serviceClass); // don't show if no transport, some devices

  if (!transports.length || devices !== null && devices !== void 0 && devices.length) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    displayPrint: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    severity: "info",
    closeable: true
  }, !spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "Did you connect your device?"), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "Did you connect a ", spec.name, " device?"), transports.map(function (transport) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_jacdac_ConnectButton__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      key: transport.type,
      transport: transport,
      className: classes.button,
      full: true,
      transparent: true
    });
  })));
}

function ConnectAlert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(NoSsrConnectAlert, props));
}

/***/ }),

/***/ "H6TX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridHeader; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("R/WZ");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZBNC");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tRbT");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("hlFM");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ofer");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("9jPY");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("iuhU");



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    hr: {
      background: theme.palette.text.disabled,
      marginBottom: "unset"
    },
    start: {
      width: theme.spacing(2)
    }
  });
});
function GridHeader(props) {
  var title = props.title,
      count = props.count,
      variant = props.variant,
      action = props.action;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    container: true,
    direction: "row",
    spacing: 1,
    justify: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(classes.hr, classes.start)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    item: true
  }, action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    component: "span",
    mr: 1
  }, action), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    component: "span",
    variant: variant || "subtitle1"
  }, title), count !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    component: "span",
    ml: 0.5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    label: count
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
    className: classes.hr
  }))));
}

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

  var _useRegisterUnpackedV = Object(_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "c"])(firmwareIdentifierRegister),
      firmwareIdentifier = _useRegisterUnpackedV[0];

  var specification = Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__[/* deviceSpecificationFromFirmwareIdentifier */ "b"])(firmwareIdentifier);
  return specification;
}

/***/ }),

/***/ "Nisz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDeviceItem; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zLVn");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tRbT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DashboardDevice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("kLoJ");
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("IzqI");
/* harmony import */ var _DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("rOp/");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("2K/c");







function DashboardDeviceItem(props) {
  var device = props.device,
      expanded = props.expanded,
      toggleExpanded = props.toggleExpanded,
      variant = props.variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(props, ["device", "expanded", "toggleExpanded", "variant"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_6__[/* default */ "c"]),
      drawerType = _useContext.drawerType;

  var breakpoints = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(device, function () {
    var breakpointWeight = device.services().map(function (srv) {
      return Object(_DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_5__[/* dashboardServiceWeight */ "a"])(srv) || (srv.readingRegister || srv.valueRegister || srv.intensityRegister ? 1 : 0);
    }).reduce(function (c, v) {
      return c + v;
    }, 0);
    if (breakpointWeight > 3 || drawerType !== _AppContext__WEBPACK_IMPORTED_MODULE_6__[/* DrawerType */ "b"].None) return {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 6,
      xl: 6
    };else if (breakpointWeight == 3) return {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4
    };else if (breakpointWeight == 2) return {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
      xl: 4
    };else return {
      xs: expanded ? 12 : 6,
      sm: 4,
      md: 3,
      lg: 2,
      xl: "auto"
    };
  }, [expanded, drawerType]); // based on size, expanded or reduce widget size

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], Object.assign({
    item: true
  }, breakpoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_DashboardDevice__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object.assign({
    device: device,
    expanded: expanded,
    toggleExpanded: toggleExpanded,
    variant: variant
  }, other)));
}

/***/ }),

/***/ "PTt+":
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
  d: "M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"
}), 'Devices');

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useRegisterUnpackedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useRegisterBoolValue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfHV");


function useRegisterHumanValue(register, options) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(register === null || register === void 0 ? void 0 : register.humanValue),
      value = _useState[0],
      setValue = _useState[1];

  var _ref = options || {
    visible: true
  },
      visible = _ref.visible; // update value


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return visible && (register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* REPORT_UPDATE */ "ad"], function () {
      setValue(register === null || register === void 0 ? void 0 : register.humanValue);
    }));
  }, [register, visible]);
  return value;
}
function useRegisterUnpackedValue(register, options) {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(register === null || register === void 0 ? void 0 : register.unpackedValue),
      value = _useState2[0],
      setValue = _useState2[1];

  var _ref2 = options || {},
      visible = _ref2.visible;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return visible && (register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* REPORT_UPDATE */ "ad"], function () {
      setValue(register === null || register === void 0 ? void 0 : register.unpackedValue);
    }));
  }, [register, visible]);
  return value || [];
}
function useRegisterBoolValue(register, options) {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(register === null || register === void 0 ? void 0 : register.boolValue),
      value = _useState3[0],
      setValue = _useState3[1];

  var _ref3 = options || {},
      visible = _ref3.visible; // update value


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return visible && (register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* REPORT_UPDATE */ "ad"], function () {
      setValue(register === null || register === void 0 ? void 0 : register.boolValue);
    }));
  }, [register, visible]);
  return value;
}

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

// CONCATENATED MODULE: ./src/components/devices/useDeviceStatusLightStyle.ts
var statusHue = 32;
var statusSaturation = 255;
//Every 524ms it changes from 5.9% and 1.6% (i.e. 1 sec duty cycle)
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
  /*
  const bootloader = useChange(device, d => d.hasService(SRV_BOOTLOADER))
  const identifying = useChange(device, d => d?.identifying)
  TODO
  const registerAnimation = useRegisterUnpackedValue<LedAnimationData>(
      register
  ) || [0, []]
   // pick animation step
  const animation: LedAnimationData = identifying
      ? identifyAnimation
      : bootloader
      ? bootloaderAnimation
      : undefined
  */
  return {};
}
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__("qhky");

// EXTERNAL MODULE: ./src/components/devices/useDeviceName.ts
var useDeviceName = __webpack_require__("mAuX");

// EXTERNAL MODULE: ./src/components/devices/useDeviceImage.ts
var useDeviceImage = __webpack_require__("dI3M");

// EXTERNAL MODULE: ./src/components/icons/TransportIcon.tsx
var TransportIcon = __webpack_require__("ywOB");

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
  var source = device.source;

  var _useDeviceStatusLight = useDeviceStatusLightStyle(device),
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
      kind: constants["mf" /* VIRTUAL_DEVICE_NODE_NAME */]
    }) : !imageUrl ? /*#__PURE__*/react_default.a.createElement(TransportIcon["a" /* default */], {
      type: source
    }) : /*#__PURE__*/react_default.a.createElement(esm_Avatar_Avatar, {
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

/***/ "tfF2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Dashboard; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__("tr08");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__("lopY");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./src/jacdac/useSelectedNodes.ts

function useSelectedNodes(singleSelection) {
  var nodes = Object(react["useRef"])(new Set());

  var _useState = Object(react["useState"])(0),
      change = _useState[0],
      setChange = _useState[1];

  var selected = function selected(node) {
    return nodes.current.has(node === null || node === void 0 ? void 0 : node.id);
  };

  var setSelected = function setSelected(node, value) {
    if (!node) return;
    var s = selected(node);

    if (!!value !== s) {
      if (!value) nodes.current.delete(node.id);else {
        if (singleSelection) nodes.current.clear();
        nodes.current.add(node.id);
      }
      setChange(change + 1);
    }
  };

  return {
    hasSelection: nodes.current.size > 0,
    selected: selected,
    setSelected: setSelected,
    toggleSelected: function toggleSelected(node) {
      setSelected(node, !selected(node));
    },
    clear: function clear() {
      nodes.current.clear();
      setChange(0);
    }
  };
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__("UJQR");

// EXTERNAL MODULE: ./src/components/layout.tsx + 16 modules
var layout = __webpack_require__("9Dj+");

// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__("yNWl");

// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__("2K/c");

// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__("l6uw");

// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__("W1g9");

// EXTERNAL MODULE: ./src/components/ui/GridHeader.tsx
var GridHeader = __webpack_require__("H6TX");

// EXTERNAL MODULE: ./src/components/dashboard/DashboardDeviceItem.tsx
var DashboardDeviceItem = __webpack_require__("Nisz");

// CONCATENATED MODULE: ./src/components/dashboard/DashboardDeviceGroup.tsx






function DeviceGroup(props) {
  var title = props.title,
      action = props.action,
      devices = props.devices,
      expanded = props.expanded,
      toggleExpanded = props.toggleExpanded,
      children = props.children,
      other = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["title", "action", "devices", "expanded", "toggleExpanded", "children"]);

  var handleExpand = function handleExpand(device) {
    return function () {
      return toggleExpanded(device);
    };
  };

  var sectionId = Object(react_use_id_hook_esm["b" /* useId */])();
  if (!action && !(devices !== null && devices !== void 0 && devices.length)) return null;
  return /*#__PURE__*/react_default.a.createElement("section", {
    id: sectionId
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react_default.a.createElement(GridHeader["a" /* default */], {
    title: title,
    action: action
  }), devices === null || devices === void 0 ? void 0 : devices.map(function (device) {
    return /*#__PURE__*/react_default.a.createElement(DashboardDeviceItem["a" /* default */], Object.assign({
      key: device.id,
      device: device,
      expanded: expanded(device),
      toggleExpanded: handleExpand(device)
    }, other));
  }), children));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__("1waj");
var Add_default = /*#__PURE__*/__webpack_require__.n(Add);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Clear.js
var Clear = __webpack_require__("ytJY");
var Clear_default = /*#__PURE__*/__webpack_require__.n(Clear);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Devices.js
var Devices = __webpack_require__("PTt+");
var Devices_default = /*#__PURE__*/__webpack_require__.n(Devices);

// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__("9pTp");

// EXTERNAL MODULE: ./src/jacdac/ConnectButtons.tsx
var ConnectButtons = __webpack_require__("j06+");

// EXTERNAL MODULE: ./src/components/services/useRoleManager.ts
var useRoleManager = __webpack_require__("UF2u");

// CONCATENATED MODULE: ./src/components/dashboard/Dashboard.tsx












 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name






function defaultDeviceSort(l, r) {
  var srvScore = function srvScore(srv) {
    return srv.packets.reduce(function (prev, pkt) {
      return prev + (Object(spec["r" /* isReading */])(pkt) ? 10 : Object(spec["w" /* isValueOrIntensity */])(pkt) ? 1 : 0);
    }, 0) || 0;
  };

  var score = function score(srvs) {
    return srvs.reduce(function (prev, srv) {
      return srvScore(srv);
    }, 0);
  };

  var ls = score(l.services().slice(1).map(function (srv) {
    return srv.specification;
  }).filter(function (spec) {
    return !!spec;
  }));
  var rs = score(r.services().slice(1).map(function (srv) {
    return srv.specification;
  }).filter(function (spec) {
    return !!spec;
  }));
  if (ls !== rs) return -ls + rs;
  return Object(utils["P" /* strcmp */])(l.deviceId, r.deviceId);
} // eslint-disable-next-line @typescript-eslint/no-unused-vars


function defaultDeviceFilter(d) {
  return true;
}

function Dashboard(props) {
  var showConnect = props.showConnect,
      showStartSimulators = props.showStartSimulators,
      _props$deviceSort = props.deviceSort,
      deviceSort = _props$deviceSort === void 0 ? defaultDeviceSort : _props$deviceSort,
      _props$deviceFilter = props.deviceFilter,
      deviceFilter = _props$deviceFilter === void 0 ? defaultDeviceFilter : _props$deviceFilter,
      other = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["showConnect", "showStartSimulators", "deviceSort", "deviceFilter"]);

  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var _useContext2 = Object(react["useContext"])(AppContext["c" /* default */]),
      toggleShowDeviceHostsDialog = _useContext2.toggleShowDeviceHostsDialog;

  var devices = Object(useDevices["a" /* default */])({
    announced: true,
    ignoreSelf: true
  }).filter(deviceFilter).sort(deviceSort);
  var theme = Object(useTheme["a" /* default */])();
  var mobile = Object(useMediaQuery["a" /* default */])(theme.breakpoints.down(layout["c" /* MOBILE_BREAKPOINT */]));

  var _useSelectedNodes = useSelectedNodes(mobile),
      selected = _useSelectedNodes.selected,
      toggleSelected = _useSelectedNodes.toggleSelected;

  var _splitFilter = Object(utils["O" /* splitFilter */])(devices, function (d) {
    return !!bus.deviceHost(d.deviceId);
  }),
      hosted = _splitFilter[0],
      physicals = _splitFilter[1];

  var roleManager = Object(useRoleManager["a" /* default */])();

  var handleClearSimulators = function handleClearSimulators() {
    bus.deviceHosts().forEach(function (dev) {
      return bus.removeDeviceHost(dev);
    });
  };

  var handleStartSimulators = function handleStartSimulators() {
    return roleManager === null || roleManager === void 0 ? void 0 : roleManager.startSimulators();
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(DeviceGroup, Object.assign({
    title: "Simulators",
    action: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, showStartSimulators && !!roleManager && /*#__PURE__*/react_default.a.createElement(IconButtonWithTooltip["a" /* default */], {
      title: "start missing simulators",
      onClick: handleStartSimulators
    }, /*#__PURE__*/react_default.a.createElement(Devices_default.a, null)), /*#__PURE__*/react_default.a.createElement(IconButtonWithTooltip["a" /* default */], {
      title: "start simulator",
      onClick: toggleShowDeviceHostsDialog
    }, /*#__PURE__*/react_default.a.createElement(Add_default.a, null)), /*#__PURE__*/react_default.a.createElement(IconButtonWithTooltip["a" /* default */], {
      title: "clear simulators",
      onClick: handleClearSimulators
    }, /*#__PURE__*/react_default.a.createElement(Clear_default.a, null)), " "),
    devices: hosted,
    expanded: selected,
    toggleExpanded: toggleSelected
  }, other)), /*#__PURE__*/react_default.a.createElement(DeviceGroup, Object.assign({
    title: "Devices",
    action: showConnect && /*#__PURE__*/react_default.a.createElement(ConnectButtons["a" /* default */], {
      full: false,
      transparent: true
    }),
    devices: physicals,
    expanded: selected,
    toggleExpanded: toggleSelected
  }, other), showConnect && !physicals.length && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(ConnectAlert["a" /* default */], null))));
}

/***/ }),

/***/ "ytJY":
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
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Clear');

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=7a6ddfc67c61f6ab4d0fd9135a6802daa2a5a396-78c6e5b93bb657c0b16f.js.map