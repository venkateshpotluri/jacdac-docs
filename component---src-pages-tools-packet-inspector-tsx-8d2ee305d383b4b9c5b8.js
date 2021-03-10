(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "0cSH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PacketSpecification; });

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var jdom_spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__("FQT7");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__("9jPY");

// EXTERNAL MODULE: ./src/components/DeviceList.tsx + 8 modules
var DeviceList = __webpack_require__("raEh");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./src/components/IDChip.tsx
var IDChip = __webpack_require__("XsSY");

// EXTERNAL MODULE: ./src/components/KindChip.tsx
var KindChip = __webpack_require__("J89t");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Category.js
var Category = __webpack_require__("qBB9");
var Category_default = /*#__PURE__*/__webpack_require__.n(Category);

// EXTERNAL MODULE: ./src/components/ui/Tooltip.tsx
var Tooltip = __webpack_require__("XfUf");

// CONCATENATED MODULE: ./src/components/PacketMembersChip.tsx
 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports match-default-export-name



function PacketMembersChip(props) {
  var members = props.members,
      className = props.className,
      spec = props.spec;
  if (!(members !== null && members !== void 0 && members.length)) return null;
  var label = spec === null || spec === void 0 ? void 0 : spec.packFormat;
  var title = "pack format";
  return /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
    title: title
  }, /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
    style: {
      textDecoration: "none"
    },
    href: "/reference/pack-format/",
    component: "a",
    clickable: true,
    className: className,
    size: "small",
    icon: /*#__PURE__*/react_default.a.createElement(Category_default.a, null),
    label: label
  }));
}
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__("kmB/");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__("DMAQ");

// CONCATENATED MODULE: ./src/components/PacketSpecification.tsx
 // tslint:disable-next-line: no-submodule-imports


 // tslint:disable-next-line: no-submodule-imports









var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    root: {
      marginBottom: theme.spacing(1)
    },
    field: {
      "& > div": {
        verticalAlign: "middle"
      }
    },
    chip: {
      margin: theme.spacing(0.5)
    }
  });
});

function MemberType(props) {
  var member = props.member;
  var classes = useStyles();
  var helperText = Object(pretty["e" /* prettyMemberUnit */])(member, true);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("li", {
    className: classes.field
  }, member.name !== "_" && member.name + ": ", /*#__PURE__*/react_default.a.createElement("code", null, helperText)));
}

function MembersType(props) {
  var members = props.members,
      title = props.title;
  var repeatIndex = members.findIndex(function (m) {
    return !!m.startRepeats;
  });
  if (repeatIndex < 0) repeatIndex = members.length;
  var beforeRepeat = members.slice(0, repeatIndex);
  var afterRepeat = members.slice(repeatIndex);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, !!title && /*#__PURE__*/react_default.a.createElement("h4", null, title), !!beforeRepeat.length && /*#__PURE__*/react_default.a.createElement("ul", null, beforeRepeat.map(function (member, i) {
    return /*#__PURE__*/react_default.a.createElement(MemberType, {
      key: "member" + member.name,
      member: member
    });
  })), !!afterRepeat.length && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h5", null, "starts repeating"), /*#__PURE__*/react_default.a.createElement("ul", null, afterRepeat.map(function (member, i) {
    return /*#__PURE__*/react_default.a.createElement(MemberType, {
      key: "member" + member.name,
      member: member
    });
  }))));
}

function PacketSpecification(props) {
  var serviceClass = props.serviceClass,
      packetInfo = props.packetInfo,
      reportInfo = props.reportInfo,
      pipeReportInfo = props.pipeReportInfo,
      showDevices = props.showDevices;

  var _useState = Object(react["useState"])([]),
      args = _useState[0],
      setArgs = _useState[1];

  var classes = useStyles();
  if (!packetInfo) return /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "error"
  }, "Unknown member " + serviceClass.toString(16) + ":" + packetInfo.identifier);
  var fields = packetInfo.fields;
  var isCmd = Object(jdom_spec["h" /* isCommand */])(packetInfo);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    id: packetInfo.kind + ":" + packetInfo.identifier
  }, packetInfo.name, /*#__PURE__*/react_default.a.createElement(PacketMembersChip, {
    spec: packetInfo,
    className: classes.chip,
    members: packetInfo.fields
  }), packetInfo.identifier !== undefined && /*#__PURE__*/react_default.a.createElement(IDChip["a" /* default */], {
    className: classes.chip,
    id: packetInfo.identifier,
    filter: "pkt:0x" + packetInfo.identifier.toString(16)
  }), /*#__PURE__*/react_default.a.createElement(KindChip["a" /* default */], {
    className: classes.chip,
    kind: packetInfo.kind
  }), packetInfo.optional && /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
    className: classes.chip,
    size: "small",
    label: "optional"
  }), packetInfo.derived && /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
    className: classes.chip,
    size: "small",
    label: "derived"
  })), /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
    source: packetInfo.description
  }), !!fields.length && /*#__PURE__*/react_default.a.createElement(MembersType, {
    members: fields,
    title: isCmd && "Arguments"
  }), !!reportInfo && /*#__PURE__*/react_default.a.createElement(MembersType, {
    members: reportInfo.fields,
    title: "Report"
  }), !!pipeReportInfo && /*#__PURE__*/react_default.a.createElement(MembersType, {
    members: pipeReportInfo.fields,
    title: "Pipe report"
  }), showDevices && Object(jdom_spec["h" /* isCommand */])(packetInfo) && /*#__PURE__*/react_default.a.createElement(DeviceList["a" /* default */], {
    serviceClass: serviceClass,
    commandIdentifier: packetInfo.identifier
  }), showDevices && Object(jdom_spec["s" /* isRegister */])(packetInfo) && /*#__PURE__*/react_default.a.createElement(DeviceList["a" /* default */], {
    serviceClass: serviceClass,
    registerIdentifiers: [packetInfo.identifier]
  }), showDevices && Object(jdom_spec["j" /* isEvent */])(packetInfo) && /*#__PURE__*/react_default.a.createElement(DeviceList["a" /* default */], {
    serviceClass: serviceClass,
    eventIdentifiers: [packetInfo.identifier]
  }));
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

/***/ "J89t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KindChip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9jPY");
/* harmony import */ var _KindIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("NHHF");
/* harmony import */ var _PacketsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("VKQG");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2K/c");
/* harmony import */ var _ui_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("XfUf");






function KindChip(props) {
  var kind = props.kind,
      className = props.className;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PacketsContext__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"]),
      filter = _useContext.filter,
      setFilter = _useContext.setFilter;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_4__[/* default */ "c"]),
      setDrawerType = _useContext2.setDrawerType;

  var icon = Object(_KindIcon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"])({
    kind: kind
  });
  var chipFilter = "kind:" + kind;
  var filtered = filter && filter.indexOf(chipFilter) > -1;

  var handleClick = function handleClick() {
    var _filter$replace;

    if (filtered) setFilter(filter === null || filter === void 0 ? void 0 : (_filter$replace = filter.replace(chipFilter, '')) === null || _filter$replace === void 0 ? void 0 : _filter$replace.trim());else setFilter((filter === null || filter === void 0 ? void 0 : filter.trim()) + ' ' + chipFilter);
    setDrawerType(_AppContext__WEBPACK_IMPORTED_MODULE_4__[/* DrawerType */ "b"].Packets);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Tooltip__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    title: filtered ? "remove filter " + chipFilter : "add filter " + chipFilter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    onClick: handleClick,
    className: className,
    size: "small",
    label: Object(_KindIcon__WEBPACK_IMPORTED_MODULE_2__[/* kindName */ "c"])(kind),
    icon: icon
  })));
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

/***/ "XsSY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IDChip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("M1Nd");
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9jPY");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("PsDL");
/* harmony import */ var _PacketsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("VKQG");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2K/c");
/* harmony import */ var _ui_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("XfUf");
 // tslint:disable-next-line: no-submodule-imports match-default-export-name






function IDChip(props) {
  var id = props.id,
      className = props.className,
      filter = props.filter;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PacketsContext__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"]),
      packetFilter = _useContext.filter,
      setPacketFilter = _useContext.setFilter;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_5__[/* default */ "c"]),
      setDrawerType = _useContext2.setDrawerType;

  var ids = typeof id === "string" ? id : "0x" + (id !== undefined ? id.toString(16) : "???");
  var filtered = packetFilter && packetFilter.indexOf(filter) > -1;

  var handleFilterClick = function handleFilterClick() {
    var _packetFilter$replace;

    if (filtered) setPacketFilter(packetFilter === null || packetFilter === void 0 ? void 0 : (_packetFilter$replace = packetFilter.replace(filter, '')) === null || _packetFilter$replace === void 0 ? void 0 : _packetFilter$replace.trim());else setPacketFilter((packetFilter === null || packetFilter === void 0 ? void 0 : packetFilter.trim()) + ' ' + filter);
    setDrawerType(_AppContext__WEBPACK_IMPORTED_MODULE_5__[/* DrawerType */ "b"].Packets);
  };

  var icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_1___default.a, null);
  var title = filtered ? "remove filter " + filter : "add filter " + filter;
  if (filter) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Tooltip__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    title: filtered ? "remove filter " + filter : "add filter " + filter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    className: className,
    size: "small",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      "aria-label": title,
      onClick: handleFilterClick
    }, icon),
    label: ids
  })));else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    "aria-label": title,
    className: className,
    size: "small",
    icon: icon,
    title: "identifier " + ids,
    label: ids
  });
}

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

/***/ "cgyF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceSpecificationCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("30+C");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("50B7");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9jPY");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oa/T");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ofer");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("o4QW");
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Z8Ma");
/* harmony import */ var _IDChip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("XsSY");
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4+mf");
/* harmony import */ var _ui_Markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("kmB/");
/* harmony import */ var _ServiceSpecificationStatusAlert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Y6fa");
/* harmony import */ var _jacdac_ts_src_hosts_hosts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("y+c1");
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("yNWl");
/* harmony import */ var _KindIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("NHHF");
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("ZfHV");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("Wbzz");












function ServiceSpecificationCard(props) {
  var _spec, _spec2, _spec3, _spec4, _spec5;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_jacdac_Context__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"]),
      bus = _useContext.bus;

  var serviceClass = props.serviceClass,
      specification = props.specification,
      showReleaseStatus = props.showReleaseStatus,
      showServiceClass = props.showServiceClass;
  var spec = specification;
  if (!spec && serviceClass !== undefined) spec = Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_7__[/* serviceSpecificationFromClassIdentifier */ "G"])(serviceClass);
  var sc = ((_spec = spec) === null || _spec === void 0 ? void 0 : _spec.classIdentifier) || serviceClass;
  var srv = ((_spec2 = spec) === null || _spec2 === void 0 ? void 0 : _spec2.shortId) || (sc === null || sc === void 0 ? void 0 : sc.toString(16));
  var hostDefinition = Object(_jacdac_ts_src_hosts_hosts__WEBPACK_IMPORTED_MODULE_12__[/* hostDefinitionFromServiceClass */ "d"])(sc);

  var handleSimulatorClick = function handleSimulatorClick() {
    Object(_jacdac_ts_src_hosts_hosts__WEBPACK_IMPORTED_MODULE_12__[/* addHost */ "b"])(bus, hostDefinition.services(), hostDefinition.name);
    Object(gatsby__WEBPACK_IMPORTED_MODULE_16__["navigate"])("/dashboard/");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: ((_spec3 = spec) === null || _spec3 === void 0 ? void 0 : _spec3.name) || "???",
    subheader: showServiceClass && srv && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IDChip__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      id: sc,
      filter: "srv:" + srv
    }),
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, hostDefinition && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      size: "small",
      onClick: handleSimulatorClick,
      avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KindIcon__WEBPACK_IMPORTED_MODULE_14__[/* default */ "b"], {
        kind: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* VIRTUAL_DEVICE_NODE_NAME */ "cf"]
      }),
      "aria-label": "start simulator and open dashboard",
      label: "simulator"
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, ((_spec4 = spec) === null || _spec4 === void 0 ? void 0 : _spec4.notes["short"]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    variant: "body2",
    component: "div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Markdown__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    source: ((_spec5 = spec) === null || _spec5 === void 0 ? void 0 : _spec5.notes["short"].split(".", 1)[0]) + "."
  })), showReleaseStatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ServiceSpecificationStatusAlert__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    specification: spec
  })), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    variant: "outlined",
    "aria-label": "open service " + spec.shortId + " page",
    to: "/services/" + spec.shortId + "/"
  }, "More...")));
}

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

/***/ "q5JT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Page; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__("FQT7");

// EXTERNAL MODULE: ./src/components/PacketsContext.tsx + 3 modules
var PacketsContext = __webpack_require__("VKQG");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/History.js
var History = __webpack_require__("yEku");
var History_default = /*#__PURE__*/__webpack_require__.n(History);

// EXTERNAL MODULE: ./src/components/KindChip.tsx
var KindChip = __webpack_require__("J89t");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./src/components/PacketSpecification.tsx + 1 modules
var PacketSpecification = __webpack_require__("0cSH");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__("DMAQ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__("tr08");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__("hlFM");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js
var TableContainer = __webpack_require__("nCZa");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/Table.js
var Table = __webpack_require__("/EAt");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableHead/TableHead.js
var TableHead = __webpack_require__("Imu7");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/TableRow.js
var TableRow = __webpack_require__("sRsu");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/TableCell.js
var TableCell = __webpack_require__("3PeG");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/TableBody.js
var TableBody = __webpack_require__("Uf6+");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var jdom_packet = __webpack_require__("W9jF");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// EXTERNAL MODULE: ./src/components/ui/PaperBox.tsx
var PaperBox = __webpack_require__("YbiL");

// EXTERNAL MODULE: ./src/components/ui/Tooltip.tsx
var Tooltip = __webpack_require__("XfUf");

// CONCATENATED MODULE: ./src/components/PacketHeaderLayout.tsx







function PacketHeaderLayout(props) {
  var _know;

  var packet = props.packet,
      data = props.data,
      showSlots = props.showSlots,
      showFlags = props.showFlags;
  var theme = Object(useTheme["a" /* default */])();
  var pkt = packet || jdom_packet["a" /* default */].fromBinary(Object(utils["u" /* fromHex */])(data));
  var header = pkt.header;
  var frameFlags = header[3];
  var slots = [{
    offset: 0,
    size: 2,
    name: "frame_crc",
    description: "CRC"
  }, {
    offset: 2,
    size: 1,
    name: "frame_size",
    description: "Size of the data field in bytes."
  }, {
    offset: 3,
    size: 1,
    name: "frame_flags",
    description: "Flags specific to this frame."
  }, {
    offset: 4,
    size: 8,
    name: "device_identifiter",
    description: "64-bit device identifier"
  }, {
    offset: 12,
    size: 1,
    name: "packet_size",
    description: "The size of the payload field. Maximum size is 236 bytes."
  }, {
    offset: 13,
    size: 1,
    name: 'service_number',
    know: (_know = {}, _know[constants["Hb" /* JD_SERVICE_INDEX_PIPE */].toString(16)] = "pipe", _know[constants["Db" /* JD_SERVICE_INDEX_CRC_ACK */].toString(16)] = "crc ack", _know),
    description: "A number that specifies an operation and code combination."
  }, {
    offset: 14,
    size: 2,
    name: 'service_command',
    description: 'Identifier for the command'
  }];
  var flags = [{
    position: 1,
    flag: constants["zb" /* JD_FRAME_FLAG_COMMAND */],
    name: "COMMAND",
    description: "Determines if the frame contains command or report packets. If set, the frame contains command packets, if not set, the frame contains report packets."
  }, {
    position: 2,
    flag: constants["yb" /* JD_FRAME_FLAG_ACK_REQUESTED */],
    name: "ACK_REQUESTED",
    description: "Determines if the receiver should return an ACK to the sender. If set, the receiver should repsond with an ACK frame, if not set, no response is required."
  }, {
    position: 4,
    flag: constants["Ab" /* JD_FRAME_FLAG_IDENTIFIER_IS_SERVICE_CLASS */],
    name: "IDENTIFIER_IS_SERVICE_CLASS",
    description: "The packet is a multi command. The service class is the first 4 bytes of the device id."
  }].filter(function (f) {
    return frameFlags & f.flag;
  });
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(PaperBox["a" /* default */], {
    key: "header",
    padding: 0
  }, /*#__PURE__*/react_default.a.createElement("pre", null, /*#__PURE__*/react_default.a.createElement("code", null, slots.map(function (slot) {
    return /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
      component: "span",
      key: slot.name,
      mr: theme.spacing(0.1)
    }, /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
      title: slot.name
    }, /*#__PURE__*/react_default.a.createElement("span", null, Object(utils["V" /* toHex */])(header.slice(slot.offset, slot.offset + slot.size)))));
  })))), showSlots && /*#__PURE__*/react_default.a.createElement(PaperBox["a" /* default */], {
    key: "slots"
  }, /*#__PURE__*/react_default.a.createElement(TableContainer["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Table["a" /* default */], {
    size: "small"
  }, /*#__PURE__*/react_default.a.createElement(TableHead["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(TableRow["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, "Value"), /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, "Offset"), /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, "Size"), /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, "Name"), /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, "Description"))), /*#__PURE__*/react_default.a.createElement(TableBody["a" /* default */], null, slots.map(function (slot) {
    var _slot$know;

    var buf = header.slice(slot.offset, slot.offset + slot.size);
    var known = (_slot$know = slot.know) === null || _slot$know === void 0 ? void 0 : _slot$know[Object(utils["V" /* toHex */])(buf)];
    return /*#__PURE__*/react_default.a.createElement(TableRow["a" /* default */], {
      key: slot.name
    }, /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, /*#__PURE__*/react_default.a.createElement("code", null, Object(utils["V" /* toHex */])(buf)), known && /*#__PURE__*/react_default.a.createElement("code", null, "(", known, ")")), /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, slot.offset), /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, slot.size), /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, slot.name), /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, slot.description));
  }))))), showFlags && !!flags.length && /*#__PURE__*/react_default.a.createElement(PaperBox["a" /* default */], {
    key: "flags"
  }, /*#__PURE__*/react_default.a.createElement(TableContainer["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Table["a" /* default */], {
    size: "small"
  }, /*#__PURE__*/react_default.a.createElement(TableHead["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(TableRow["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, "Flag"), /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, "Name"), /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, "Description"))), /*#__PURE__*/react_default.a.createElement(TableBody["a" /* default */], null, flags.map(function (flag) {
    return /*#__PURE__*/react_default.a.createElement(TableRow["a" /* default */], {
      key: flag.name
    }, /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, /*#__PURE__*/react_default.a.createElement("code", null, flag.position)), /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, flag.name), /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, flag.description));
  }))))));
}
// EXTERNAL MODULE: ./src/components/PacketBadge.tsx + 1 modules
var PacketBadge = __webpack_require__("pdOp");

// CONCATENATED MODULE: ./src/components/PacketDataLayout.tsx





function PacketDataLayout(props) {
  var _decoded$info;

  var packet = props.packet,
      showHex = props.showHex,
      showDecoded = props.showDecoded;
  var data = packet.data,
      decoded = packet.decoded;
  var info = decoded === null || decoded === void 0 ? void 0 : decoded.info;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, showHex && !!data.length && /*#__PURE__*/react_default.a.createElement(PaperBox["a" /* default */], {
    padding: 0
  }, /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
    title: (decoded === null || decoded === void 0 ? void 0 : (_decoded$info = decoded.info) === null || _decoded$info === void 0 ? void 0 : _decoded$info.packFormat) || "unknown data layout"
  }, /*#__PURE__*/react_default.a.createElement("pre", null, Object(utils["V" /* toHex */])(data)))), showDecoded && !!(decoded !== null && decoded !== void 0 && decoded.decoded.length) && /*#__PURE__*/react_default.a.createElement(PaperBox["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(TableContainer["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Table["a" /* default */], {
    size: "small"
  }, /*#__PURE__*/react_default.a.createElement(TableHead["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(TableRow["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, "name"), /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, "value"))), /*#__PURE__*/react_default.a.createElement(TableBody["a" /* default */], null, decoded.decoded.map(function (member, i) {
    return /*#__PURE__*/react_default.a.createElement(TableRow["a" /* default */], {
      key: i
    }, /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, member.info.name == '_' ? info.name : member.info.name), /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], null, /*#__PURE__*/react_default.a.createElement("code", null, member.humanValue)));
  }))))));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__("eD//");

// EXTERNAL MODULE: ./src/components/PacketListItem.tsx
var PacketListItem = __webpack_require__("7qUl");

// CONCATENATED MODULE: ./src/components/PacketList.tsx



function PacketList(props) {
  var packets = props.packets;
  return /*#__PURE__*/react_default.a.createElement(List["a" /* default */], null, packets === null || packets === void 0 ? void 0 : packets.filter(function (pkt) {
    return !!pkt;
  }).map(function (pkt) {
    return /*#__PURE__*/react_default.a.createElement(PacketListItem["a" /* default */], {
      key: pkt.key,
      packet: pkt
    });
  }));
}
// EXTERNAL MODULE: ./src/components/ServiceSpecificationCard.tsx
var ServiceSpecificationCard = __webpack_require__("cgyF");

// CONCATENATED MODULE: ./src/components/tools/PacketInspector.tsx


 // tslint:disable-next-line: no-submodule-imports match-default-export-name












function PacketInspector() {
  var _useContext = Object(react["useContext"])(PacketsContext["b" /* default */]),
      packet = _useContext.selectedPacket;

  if (!packet) return /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "info"
  }, "Click on a packet in the ", /*#__PURE__*/react_default.a.createElement(History_default.a, null), " packet list.");
  var decoded = packet.decoded;
  var info = decoded === null || decoded === void 0 ? void 0 : decoded.info;
  var ack = packet.meta[constants["Vb" /* META_ACK */]];
  var pipePackets = packet.meta[constants["Yb" /* META_PIPE */]];
  var get = packet.meta[constants["Xb" /* META_GET */]];
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h2", null, /*#__PURE__*/react_default.a.createElement(PacketBadge["a" /* default */], {
    packet: packet
  }), packet.friendlyCommandName + " " + (packet.isCommand ? "to" : "from") + " " + packet.friendlyDeviceName + "/" + packet.friendlyServiceName), /*#__PURE__*/react_default.a.createElement("div", null, packet.timestamp, "ms, ", /*#__PURE__*/react_default.a.createElement(KindChip["a" /* default */], {
    kind: info === null || info === void 0 ? void 0 : info.kind
  }), ", size ", packet.size), /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "body2"
  }, Object(pretty["h" /* printPacket */])(packet)), packet.sender && /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "body2"
  }, "sender: ", packet.sender), /*#__PURE__*/react_default.a.createElement("h3", null, "Header"), /*#__PURE__*/react_default.a.createElement(PacketHeaderLayout, {
    packet: packet,
    showSlots: true,
    showFlags: true
  }), /*#__PURE__*/react_default.a.createElement(PacketDataLayout, {
    packet: packet,
    showHex: true,
    showDecoded: true
  }), ack && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h3", null, "Ack received"), /*#__PURE__*/react_default.a.createElement(PacketList, {
    packets: [ack]
  })), get && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h3", null, "GET request"), /*#__PURE__*/react_default.a.createElement(PacketList, {
    packets: [get]
  })), pipePackets && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h3", null, "Pipe packets"), /*#__PURE__*/react_default.a.createElement(PacketList, {
    packets: pipePackets.filter(function (pp) {
      return !!pp;
    })
  })), info && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h3", null, "Specification"), /*#__PURE__*/react_default.a.createElement(ServiceSpecificationCard["a" /* default */], {
    showServiceClass: true,
    serviceClass: packet.serviceClass,
    showReleaseStatus: true
  }), /*#__PURE__*/react_default.a.createElement(PacketSpecification["a" /* default */], {
    serviceClass: packet.serviceClass,
    packetInfo: info
  })));
}
// CONCATENATED MODULE: ./src/pages/tools/packet-inspector.tsx


function Page() {
  return /*#__PURE__*/react_default.a.createElement(PacketInspector, null);
}

/***/ }),

/***/ "qBB9":
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

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 2l-5.5 9h11z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17.5",
  cy: "17.5",
  r: "4.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 13.5h8v8H3z"
})), 'Category');

exports.default = _default;

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
//# sourceMappingURL=component---src-pages-tools-packet-inspector-tsx-8d2ee305d383b4b9c5b8.js.map