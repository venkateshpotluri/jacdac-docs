(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7510,8590,3717],{

/***/ 50144:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34621);
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38582);






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

var ListItemIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ListItemIcon(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["classes", "className"]);

  var context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.root, className, context.alignItems === 'flex-start' && classes.alignItemsFlexStart),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(styles, {
  name: 'MuiListItemIcon'
})(ListItemIcon));

/***/ }),

/***/ 38030:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34621);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80453);
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38582);







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
var ListItemText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ListItemText(props, ref) {
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
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z),
      dense = _React$useContext.dense;

  var primary = primaryProp != null ? primaryProp : children;

  if (primary != null && primary.type !== _Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z && !disableTypography) {
    primary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: "span",
      display: "block"
    }, primaryTypographyProps), primary);
  }

  var secondary = secondaryProp;

  if (secondary != null && secondary.type !== _Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z && !disableTypography) {
    secondary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
      variant: "body2",
      className: classes.secondary,
      color: "textSecondary",
      display: "block"
    }, secondaryTypographyProps), secondary);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.root, className, dense && classes.dense, inset && classes.inset, primary && secondary && classes.multiline),
    ref: ref
  }, other), primary, secondary);
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(styles, {
  name: 'MuiListItemText'
})(ListItemText));

/***/ }),

/***/ 79942:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M14 7l-5 5 5 5V7z"
}), 'ArrowLeft');

exports.Z = _default;

/***/ }),

/***/ 33629:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M10 17l5-5-5-5v10z"
}), 'ArrowRight');

exports.Z = _default;

/***/ }),

/***/ 58590:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Clear');

exports.Z = _default;

/***/ }),

/***/ 45973:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
}), 'Code');

exports.Z = _default;

/***/ }),

/***/ 23443:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
}), 'Message');

exports.Z = _default;

/***/ }),

/***/ 12655:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"
}), 'Note');

exports.Z = _default;

/***/ }),

/***/ 53717:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), 'Warning');

exports.Z = _default;

/***/ }),

/***/ 97309:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ PacketBadge; }
});

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Badge/Badge.js
var Badge = __webpack_require__(28142);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/dist/specconstants.ts
var specconstants = __webpack_require__(73512);
// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__(50048);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(19756);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Warning.js
var Warning = __webpack_require__(53717);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Error.js
var Error = __webpack_require__(13840);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Message.js
var Message = __webpack_require__(23443);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Note.js
var Note = __webpack_require__(12655);
;// CONCATENATED MODULE: ./src/components/LogMessageIcon.tsx


 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name


function LogMessageIcon(props) {
  var identifier = props.identifier,
      others = (0,objectWithoutPropertiesLoose/* default */.Z)(props, ["identifier"]);

  switch (identifier) {
    case constants/* LoggerCmd.Warn */.eQc.Warn:
      return /*#__PURE__*/react.createElement(Warning/* default */.Z, others);

    case constants/* LoggerCmd.Error */.eQc.Error:
      return /*#__PURE__*/react.createElement(Error/* default */.Z, others);

    case constants/* LoggerCmd.Debug */.eQc.Debug:
      return /*#__PURE__*/react.createElement(Note/* default */.Z, others);

    default:
      return /*#__PURE__*/react.createElement(Message/* default */.Z, others);
  }
}
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowLeft.js
var ArrowLeft = __webpack_require__(79942);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowRight.js
var ArrowRight = __webpack_require__(33629);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Clear.js
var Clear = __webpack_require__(58590);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Code.js
var Code = __webpack_require__(45973);
// EXTERNAL MODULE: ./src/components/ui/Tooltip.tsx
var Tooltip = __webpack_require__(60102);
;// CONCATENATED MODULE: ./src/components/PacketBadge.tsx











function PacketBadge(props) {
  var packet = props.packet,
      count = props.count;
  var decoded = packet.decoded;
  var requiredAck = !!packet.requiresAck;
  var failedAck = !!packet.meta[constants/* META_ACK_FAILED */.GiR];
  var receivedAck = !failedAck && !!packet.meta[constants/* META_ACK */.K3O];
  var getPacket = !!packet.meta[constants/* META_GET */.cWR];
  var direction = packet.isCommand ? "to" : "from";
  var logMessage = packet.serviceClass === specconstants/* SRV_LOGGER */.w9j && packet.isReport && !packet.isRegisterGet;
  return /*#__PURE__*/react.createElement(Badge/* default */.Z, {
    badgeContent: count
  }, getPacket && !failedAck && !receivedAck && /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
    title: "to/from " + packet.friendlyDeviceName
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Code/* default */.Z, null))), direction === "to" && !getPacket && !failedAck && !receivedAck && /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
    title: "to " + packet.friendlyDeviceName
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(ArrowLeft/* default */.Z, null))), direction === "from" && !getPacket && !failedAck && !receivedAck && /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
    title: "from " + packet.friendlyDeviceName
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(ArrowRight/* default */.Z, null))), requiredAck === true && failedAck && /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
    title: "no ack"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Clear/* default */.Z, null))), requiredAck === true && receivedAck && /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
    title: "ack received"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(KindIcon/* default */.ZP, {
    kind: constants/* CRC_ACK_NODE_NAME */.REx
  }))), logMessage ? /*#__PURE__*/react.createElement(LogMessageIcon, {
    identifier: decoded === null || decoded === void 0 ? void 0 : decoded.info.identifier
  }) : /*#__PURE__*/react.createElement(KindIcon/* default */.ZP, {
    kind: packet.isCRCAck ? "crc_ack" : packet.isPipe ? "pipe" : packet.isAnnounce ? "announce" : decoded === null || decoded === void 0 ? void 0 : decoded.info.kind
  }));
}

/***/ }),

/***/ 70306:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ PacketListItem; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4381);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(50144);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38030);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8266);
/* harmony import */ var _PacketsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69882);
/* harmony import */ var _PacketBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97309);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84377);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10913);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81794);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91635);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35313);
/* harmony import */ var _hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20509);











var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(function () {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)({
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

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_PacketsContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z),
      selectedPacket = _useContext.selectedPacket,
      setSelectedPacket = _useContext.setSelectedPacket;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP),
      setDrawerType = _useContext2.setDrawerType;

  var classes = useStyles();

  var _useMediaQueries = (0,_hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(),
      mobile = _useMediaQueries.mobile;

  var decoded = packet.decoded;

  var handleClick = function handleClick() {
    if (mobile) setDrawerType(_AppContext__WEBPACK_IMPORTED_MODULE_3__/* .DrawerType.None */ .jw.None);
    setSelectedPacket(packet);
    (0,gatsby__WEBPACK_IMPORTED_MODULE_8__.navigate)("/tools/packet-inspector/");
  };

  var selected = packet === selectedPacket;
  var logMessage = packet.serviceClass === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_LOGGER */ .w9j && packet.isReport && packet.isEvent;
  var pipePackets = packet.meta[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .META_PIPE */ .YHR];
  var primary = packet.isCRCAck && "crc ack " + packet.friendlyCommandName || packet.isAnnounce && "announce from " + packet.friendlyDeviceName || pipePackets && "pipe port:" + packet.pipePort + " " + pipePackets.length + " packets" || logMessage && (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_7__/* .jdunpack */ .TE)(packet.data, "s")[0] || ((decoded === null || decoded === void 0 ? void 0 : decoded.info.name) || packet.friendlyCommandName) + " " + (decoded ? (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .ellipseJoin */ .VA)(decoded.decoded.map(function (f) {
    return f.humanValue;
  }), 18) : "");
  var secondary = "" + (showTime ? (0,_jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_5__/* .prettyDuration */ .Xh)(packet.timestamp) + ": " : "") + (packet.isCommand ? "to" : "from") + " " + packet.friendlyDeviceName + "/" + packet.friendlyServiceName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    button: true,
    className: classes.item,
    dense: true,
    onClick: handleClick,
    selected: selected
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PacketBadge__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    packet: packet,
    count: count
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
    primary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
      textOverflow: "ellipsis"
    }, primary),
    secondary: secondary
  }));
}

/***/ }),

/***/ 27510:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ TraceSnippet; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/logparser.ts
var logparser = __webpack_require__(87202);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(80791);
// EXTERNAL MODULE: ./src/components/PacketListItem.tsx
var PacketListItem = __webpack_require__(70306);
;// CONCATENATED MODULE: ./src/components/TraceView.tsx



function TraceView(props) {
  var trace = props.trace;
  var packets = trace.packets;
  return /*#__PURE__*/react.createElement(List/* default */.Z, null, packets.map(function (packet) {
    return /*#__PURE__*/react.createElement(PacketListItem/* default */.Z, {
      key: 'pkt' + packet.key,
      packet: packet,
      count: 1,
      showTime: true
    });
  }));
}
;// CONCATENATED MODULE: ./src/components/TraceSnippet.tsx



function TraceSnippet(props) {
  var source = props.source;
  var trace = (0,react.useMemo)(function () {
    return (0,logparser/* parseTrace */.k9)(source);
  }, [source]);
  return /*#__PURE__*/react.createElement(TraceView, {
    trace: trace
  });
}

/***/ })

}]);
//# sourceMappingURL=7510-4e0504bf8c401c7e6d65.js.map