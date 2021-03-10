(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "0U36":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ TraceSnippet; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/logparser.ts
var logparser = __webpack_require__("hkpt");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__("eD//");

// EXTERNAL MODULE: ./src/components/PacketListItem.tsx
var PacketListItem = __webpack_require__("7qUl");

// CONCATENATED MODULE: ./src/components/TraceView.tsx



function TraceView(props) {
  var trace = props.trace;
  var packets = trace.packets;
  return /*#__PURE__*/react_default.a.createElement(List["a" /* default */], null, packets.map(function (packet) {
    return /*#__PURE__*/react_default.a.createElement(PacketListItem["a" /* default */], {
      key: 'pkt' + packet.key,
      packet: packet,
      count: 1,
      showTime: true
    });
  }));
}
// CONCATENATED MODULE: ./src/components/TraceSnippet.tsx



function TraceSnippet(props) {
  var source = props.source;
  var trace = Object(react["useMemo"])(function () {
    return Object(logparser["b" /* parseTrace */])(source);
  }, [source]);
  return /*#__PURE__*/react_default.a.createElement(TraceView, {
    trace: trace
  });
}

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

/***/ "56Ss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("MquD");






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      minWidth: 56,
      color: theme.palette.action.active,
      flexShrink: 0,
      display: 'inline-flex'
    },

    /* Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      marginTop: 8
    }
  };
};
/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 */

var ListItemIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ListItemIcon(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className"]);

  var context = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_List_ListContext__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, context.alignItems === 'flex-start' && classes.alignItemsFlexStart),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiListItemIcon'
})(ListItemIcon));

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

/***/ "7qUl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PacketListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("R/WZ");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZBNC");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tr08");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("lopY");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("tVbE");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("56Ss");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("IsqK");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("hlFM");
/* harmony import */ var _PacketsContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("VKQG");
/* harmony import */ var _PacketBadge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("pdOp");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("2K/c");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("9Dj+");
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("DMAQ");
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("Zo1I");
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("BsyY");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("Wbzz");











var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function () {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
    item: {
      marginBottom: 0,
      borderBottom: "1px solid #ddd"
    }
  });
});
function PacketListItem(props) {
  var packet = props.packet,
      count = props.count,
      showTime = props.showTime;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PacketsContext__WEBPACK_IMPORTED_MODULE_9__[/* default */ "b"]),
      selectedPacket = _useContext.selectedPacket,
      setSelectedPacket = _useContext.setSelectedPacket;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_11__[/* default */ "c"]),
      setDrawerType = _useContext2.setDrawerType;

  var classes = useStyles();
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
  var mobile = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(theme.breakpoints.down(_layout__WEBPACK_IMPORTED_MODULE_12__[/* MOBILE_BREAKPOINT */ "c"]));
  var decoded = packet.decoded;

  var handleClick = function handleClick() {
    if (mobile) setDrawerType(_AppContext__WEBPACK_IMPORTED_MODULE_11__[/* DrawerType */ "b"].None);
    setSelectedPacket(packet);
    Object(gatsby__WEBPACK_IMPORTED_MODULE_17__["navigate"])('/tools/packet-inspector/');
  };

  var selected = packet === selectedPacket;
  var logMessage = packet.serviceClass === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_13__[/* SRV_LOGGER */ "Nd"] && packet.isReport && packet.isEvent;
  var pipePackets = packet.meta[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_13__[/* META_PIPE */ "Yb"]];
  var primary = packet.isCRCAck && "crc ack " + packet.friendlyCommandName || packet.isAnnounce && "announce from " + packet.friendlyDeviceName || pipePackets && "pipe port:" + packet.pipePort + " " + pipePackets.length + " packets" || logMessage && Object(_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_16__[/* jdunpack */ "c"])(packet.data, "s")[0] || ((decoded === null || decoded === void 0 ? void 0 : decoded.info.name) || packet.friendlyCommandName) + " " + (decoded ? Object(_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_15__[/* ellipseJoin */ "s"])(decoded.decoded.map(function (f) {
    return f.humanValue;
  }), 18) : "");
  var secondary = "" + (showTime ? Object(_jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_14__[/* prettyDuration */ "d"])(packet.timestamp) + ": " : "") + (packet.isCommand ? 'to' : 'from') + " " + packet.friendlyDeviceName + "/" + packet.friendlyServiceName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    button: true,
    className: classes.item,
    dense: true,
    onClick: handleClick,
    selected: selected
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PacketBadge__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    packet: packet,
    count: count
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    primary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      textOverflow: "ellipsis"
    }, primary),
    secondary: secondary
  }));
}

/***/ }),

/***/ "8Koj":
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
  d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
}), 'Code');

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

/***/ "IsqK":
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
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("MquD");







var styles = {
  /* Styles applied to the root element. */
  root: {
    flex: '1 1 auto',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4
  },

  /* Styles applied to the `Typography` components if primary and secondary are set. */
  multiline: {
    marginTop: 6,
    marginBottom: 6
  },

  /* Styles applied to the `Typography` components if dense. */
  dense: {},

  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    paddingLeft: 56
  },

  /* Styles applied to the primary `Typography` component. */
  primary: {},

  /* Styles applied to the secondary `Typography` component. */
  secondary: {}
};
var ListItemText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ListItemText(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      _props$inset = props.inset,
      inset = _props$inset === void 0 ? false : _props$inset,
      primaryProp = props.primary,
      primaryTypographyProps = props.primaryTypographyProps,
      secondaryProp = props.secondary,
      secondaryTypographyProps = props.secondaryTypographyProps,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_List_ListContext__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]),
      dense = _React$useContext.dense;

  var primary = primaryProp != null ? primaryProp : children;

  if (primary != null && primary.type !== _Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] && !disableTypography) {
    primary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: "span",
      display: "block"
    }, primaryTypographyProps), primary);
  }

  var secondary = secondaryProp;

  if (secondary != null && secondary.type !== _Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] && !disableTypography) {
    secondary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      variant: "body2",
      className: classes.secondary,
      color: "textSecondary",
      display: "block"
    }, secondaryTypographyProps), secondary);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, dense && classes.dense, inset && classes.inset, primary && secondary && classes.multiline),
    ref: ref
  }, other), primary, secondary);
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiListItemText'
})(ListItemText));

/***/ }),

/***/ "MquD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var ListContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});

if (false) {}

/* harmony default export */ __webpack_exports__["a"] = (ListContext);

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
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("ZfHV");
/* harmony import */ var _icons_JacdacIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("w8dJ");
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
    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* PACKET_KIND_RO */ "kc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DataUsage__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* PACKET_KIND_RW */ "lc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* PACKET_KIND_ANNOUNCE */ "jc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* CONST_NODE_NAME */ "H"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* COMMAND_NODE_NAME */ "D"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CallToAction__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* EVENT_NODE_NAME */ "lb"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_FlashOn__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* REPORT_NODE_NAME */ "Rc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* BUS_NODE_NAME */ "i"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DeviceHub__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* DEVICE_NODE_NAME */ "cb"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_JacdacIcon__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* VIRTUAL_DEVICE_NODE_NAME */ "cf"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* SERVICE_NODE_NAME */ "nd"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* PIPE_NODE_NAME */ "wc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_BlurLinear__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* PIPE_REPORT_NODE_NAME */ "yc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_BlurLinear__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* CRC_ACK_NODE_NAME */ "I"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ConfirmationNumber__WEBPACK_IMPORTED_MODULE_12___default.a, {
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
    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* PACKET_KIND_RO */ "kc"]:
      return "read only";

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* PACKET_KIND_RW */ "lc"]:
      return "read write";

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* VIRTUAL_DEVICE_NODE_NAME */ "cf"]:
      return "simulated device";

    default:
      return kind;
  }
}
function allKinds() {
  return [_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* REPORT_NODE_NAME */ "Rc"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* PACKET_KIND_RW */ "lc"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* PACKET_KIND_RO */ "kc"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* CONST_NODE_NAME */ "H"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* EVENT_NODE_NAME */ "lb"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_14__[/* COMMAND_NODE_NAME */ "D"]];
}

/***/ }),

/***/ "NMYK":
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
  d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
}), 'Message');

exports.default = _default;

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

/***/ "ZqJb":
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
  d: "M10 17l5-5-5-5v10z"
}), 'ArrowRight');

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

/***/ "eD//":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");
/* harmony import */ var _ListContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("MquD");






var styles = {
  /* Styles applied to the root element. */
  root: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative'
  },

  /* Styles applied to the root element if `disablePadding={false}`. */
  padding: {
    paddingTop: 8,
    paddingBottom: 8
  },

  /* Styles applied to the root element if dense. */
  dense: {},

  /* Styles applied to the root element if a `subheader` is provided. */
  subheader: {
    paddingTop: 0
  }
};
var List = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function List(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'ul' : _props$component,
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? false : _props$dense,
      _props$disablePadding = props.disablePadding,
      disablePadding = _props$disablePadding === void 0 ? false : _props$disablePadding,
      subheader = props.subheader,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);

  var context = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function () {
    return {
      dense: dense
    };
  }, [dense]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ListContext__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].Provider, {
    value: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, dense && classes.dense, !disablePadding && classes.padding, subheader && classes.subheader),
    ref: ref
  }, other), subheader, children));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiList'
})(List));

/***/ }),

/***/ "lPg6":
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
}), 'Error');

exports.default = _default;

/***/ }),

/***/ "pdOp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PacketBadge; });

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Badge/Badge.js
var Badge = __webpack_require__("IFCi");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/dist/specconstants.ts
var specconstants = __webpack_require__("N1P3");

// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__("NHHF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Warning.js
var Warning = __webpack_require__("xV1m");
var Warning_default = /*#__PURE__*/__webpack_require__.n(Warning);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Error.js
var Error = __webpack_require__("lPg6");
var Error_default = /*#__PURE__*/__webpack_require__.n(Error);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Message.js
var Message = __webpack_require__("NMYK");
var Message_default = /*#__PURE__*/__webpack_require__.n(Message);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Note.js
var Note = __webpack_require__("qSYY");
var Note_default = /*#__PURE__*/__webpack_require__.n(Note);

// CONCATENATED MODULE: ./src/components/LogMessageIcon.tsx


 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name


function LogMessageIcon(props) {
  var identifier = props.identifier,
      others = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["identifier"]);

  switch (identifier) {
    case constants["Ub" /* LoggerCmd */].Warn:
      return /*#__PURE__*/react_default.a.createElement(Warning_default.a, others);

    case constants["Ub" /* LoggerCmd */].Error:
      return /*#__PURE__*/react_default.a.createElement(Error_default.a, others);

    case constants["Ub" /* LoggerCmd */].Debug:
      return /*#__PURE__*/react_default.a.createElement(Note_default.a, others);

    default:
      return /*#__PURE__*/react_default.a.createElement(Message_default.a, others);
  }
}
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowLeft.js
var ArrowLeft = __webpack_require__("qeq0");
var ArrowLeft_default = /*#__PURE__*/__webpack_require__.n(ArrowLeft);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowRight.js
var ArrowRight = __webpack_require__("ZqJb");
var ArrowRight_default = /*#__PURE__*/__webpack_require__.n(ArrowRight);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Clear.js
var Clear = __webpack_require__("ytJY");
var Clear_default = /*#__PURE__*/__webpack_require__.n(Clear);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Code.js
var Code = __webpack_require__("8Koj");
var Code_default = /*#__PURE__*/__webpack_require__.n(Code);

// EXTERNAL MODULE: ./src/components/ui/Tooltip.tsx
var Tooltip = __webpack_require__("XfUf");

// CONCATENATED MODULE: ./src/components/PacketBadge.tsx











function PacketBadge(props) {
  var packet = props.packet,
      count = props.count;
  var decoded = packet.decoded;
  var requiredAck = !!packet.requiresAck;
  var failedAck = !!packet.meta[constants["Wb" /* META_ACK_FAILED */]];
  var receivedAck = !failedAck && !!packet.meta[constants["Vb" /* META_ACK */]];
  var getPacket = !!packet.meta[constants["Xb" /* META_GET */]];
  var direction = packet.isCommand ? "to" : "from";
  var logMessage = packet.serviceClass === specconstants["Lb" /* SRV_LOGGER */] && packet.isReport && !packet.isRegisterGet;
  return /*#__PURE__*/react_default.a.createElement(Badge["a" /* default */], {
    badgeContent: count
  }, getPacket && !failedAck && !receivedAck && /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
    title: "to/from " + packet.friendlyDeviceName
  }, /*#__PURE__*/react_default.a.createElement("span", null, /*#__PURE__*/react_default.a.createElement(Code_default.a, null))), direction === "to" && !getPacket && !failedAck && !receivedAck && /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
    title: "to " + packet.friendlyDeviceName
  }, /*#__PURE__*/react_default.a.createElement("span", null, /*#__PURE__*/react_default.a.createElement(ArrowLeft_default.a, null))), direction === "from" && !getPacket && !failedAck && !receivedAck && /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
    title: "from " + packet.friendlyDeviceName
  }, /*#__PURE__*/react_default.a.createElement("span", null, /*#__PURE__*/react_default.a.createElement(ArrowRight_default.a, null))), requiredAck === true && failedAck && /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
    title: "no ack"
  }, /*#__PURE__*/react_default.a.createElement("span", null, /*#__PURE__*/react_default.a.createElement(Clear_default.a, null))), requiredAck === true && receivedAck && /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
    title: "ack received"
  }, /*#__PURE__*/react_default.a.createElement("span", null, /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
    kind: constants["I" /* CRC_ACK_NODE_NAME */]
  }))), logMessage ? /*#__PURE__*/react_default.a.createElement(LogMessageIcon, {
    identifier: decoded === null || decoded === void 0 ? void 0 : decoded.info.identifier
  }) : /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
    kind: packet.isCRCAck ? "crc_ack" : packet.isPipe ? "pipe" : packet.isAnnounce ? "announce" : decoded === null || decoded === void 0 ? void 0 : decoded.info.kind
  }));
}

/***/ }),

/***/ "qSYY":
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
  d: "M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"
}), 'Note');

exports.default = _default;

/***/ }),

/***/ "qeq0":
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
  d: "M14 7l-5 5 5 5V7z"
}), 'ArrowLeft');

exports.default = _default;

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

/***/ }),

/***/ "tVbE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("VD++");
/* harmony import */ var _utils_isMuiElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ucBr");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("bfFb");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("MquD");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);











var styles = function styles(theme) {
  return {
    /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      paddingTop: 8,
      paddingBottom: 8,
      '&$focusVisible': {
        backgroundColor: theme.palette.action.selected
      },
      '&$selected, &$selected:hover': {
        backgroundColor: theme.palette.action.selected
      },
      '&$disabled': {
        opacity: 0.5
      }
    },

    /* Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`. */
    container: {
      position: 'relative'
    },

    /* Pseudo-class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
    focusVisible: {},

    /* Styles applied to the `component` element if dense. */
    dense: {
      paddingTop: 4,
      paddingBottom: 4
    },

    /* Styles applied to the `component` element if `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      alignItems: 'flex-start'
    },

    /* Pseudo-class applied to the inner `component` element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the inner `component` element if `divider={true}`. */
    divider: {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      backgroundClip: 'padding-box'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the inner `component` element if `button={true}`. */
    button: {
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`. */
    secondaryAction: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    },

    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {}
  };
};
var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"];
/**
 * Uses an additional container component if `ListItemSecondaryAction` is the last child.
 */

var ListItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ListItem(props, ref) {
  var _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'center' : _props$alignItems,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$button = props.button,
      button = _props$button === void 0 ? false : _props$button,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      componentProp = props.component,
      _props$ContainerCompo = props.ContainerComponent,
      ContainerComponent = _props$ContainerCompo === void 0 ? 'li' : _props$ContainerCompo,
      _props$ContainerProps = props.ContainerProps;
  _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;

  var ContainerClassName = _props$ContainerProps.className,
      ContainerProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_props$ContainerProps, ["className"]),
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? false : _props$dense,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$divider = props.divider,
      divider = _props$divider === void 0 ? false : _props$divider,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["alignItems", "autoFocus", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]);

  var context = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_List_ListContext__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);
  var childContext = {
    dense: dense || context.dense || false,
    alignItems: alignItems
  };
  var listItemRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  useEnhancedEffect(function () {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (false) {}
    }
  }, [autoFocus]);
  var children = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(childrenProp);
  var hasSecondaryAction = children.length && Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(children[children.length - 1], ['ListItemSecondaryAction']);
  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (instance) {
    // #StrictMode ready
    listItemRef.current = react_dom__WEBPACK_IMPORTED_MODULE_9__["findDOMNode"](instance);
  }, []);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(handleOwnRef, ref);

  var componentProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, childContext.dense && classes.dense, !disableGutters && classes.gutters, divider && classes.divider, disabled && classes.disabled, button && classes.button, alignItems !== "center" && classes.alignItemsFlexStart, hasSecondaryAction && classes.secondaryAction, selected && classes.selected),
    disabled: disabled
  }, other);

  var Component = componentProp || 'li';

  if (button) {
    componentProps.component = componentProp || 'div';
    componentProps.focusVisibleClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.focusVisible, focusVisibleClassName);
    Component = _ButtonBase__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"];
  }

  if (hasSecondaryAction) {
    // Use div by default.
    Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

    if (ContainerComponent === 'li') {
      if (Component === 'li') {
        Component = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_List_ListContext__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].Provider, {
      value: childContext
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](ContainerComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.container, ContainerClassName),
      ref: handleRef
    }, ContainerProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, componentProps, children), children.pop()));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_List_ListContext__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].Provider, {
    value: childContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: handleRef
  }, componentProps), children));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiListItem'
})(ListItem));

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
//# sourceMappingURL=78-4555f724abf609ce5863.js.map