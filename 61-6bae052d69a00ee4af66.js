(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

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

/***/ "xV1m":
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
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), 'Warning');

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=61-6bae052d69a00ee4af66.js.map