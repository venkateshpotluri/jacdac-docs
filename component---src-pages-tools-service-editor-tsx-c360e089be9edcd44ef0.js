(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "5rCv":
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
  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), 'Check');

exports.default = _default;

/***/ }),

/***/ "CHaH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ServiceSpecification; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var jdom_spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./src/components/PacketSpecification.tsx + 10 modules
var PacketSpecification = __webpack_require__("0cSH");

// EXTERNAL MODULE: ./src/components/IDChip.tsx
var IDChip = __webpack_require__("XsSY");

// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__("kmB/");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__("9jPY");

// CONCATENATED MODULE: ./src/components/EnumSpecification.tsx



function EnumSpecification(props) {
  var serviceClass = props.serviceClass;
  var spec = Object(jdom_spec["D" /* serviceSpecificationFromClassIdentifier */])(serviceClass);
  var enums = Object.values((spec === null || spec === void 0 ? void 0 : spec.enums) || {}).filter(function (en) {
    return !en.derived;
  });
  if (!enums.length) return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null);
  return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement("h2", null, "Enums"), enums.map(function (e) {
    return /*#__PURE__*/react_default.a.createElement(react["Fragment"], {
      key: e.name
    }, /*#__PURE__*/react_default.a.createElement("h3", null, e.name, " ", e.isFlags && /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
      label: "flags",
      size: "small"
    })), /*#__PURE__*/react_default.a.createElement("ul", null, Object.keys(e.members).map(function (en) {
      return /*#__PURE__*/react_default.a.createElement("li", {
        key: en
      }, en, ": ", /*#__PURE__*/react_default.a.createElement("code", null, "0x", e.members[en].toString(16)));
    })));
  }));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__("hlFM");

// EXTERNAL MODULE: ./src/components/ServiceSpecificationStatusAlert.tsx
var ServiceSpecificationStatusAlert = __webpack_require__("Y6fa");

// EXTERNAL MODULE: ./jacdac-ts/src/hosts/hosts.ts + 24 modules
var hosts = __webpack_require__("y+c1");

// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__("yNWl");

// CONCATENATED MODULE: ./src/components/hooks/useDeviceHostFromServiceClass.ts



function useDeviceHostFromServiceClass(serviceClass) {
  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus; // run once


  Object(react["useEffect"])(function () {
    var devices = bus.devices({
      serviceClass: serviceClass
    });
    var def = !devices.length && Object(hosts["d" /* hostDefinitionFromServiceClass */])(serviceClass);
    var host = def && Object(hosts["b" /* addHost */])(bus, def);
    return function () {
      return bus.removeDeviceHost(host);
    };
  }, [serviceClass]);
}
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// EXTERNAL MODULE: ./src/components/dashboard/DashboardDeviceItem.tsx
var DashboardDeviceItem = __webpack_require__("Nisz");

// CONCATENATED MODULE: ./src/components/ServiceSpecification.tsx














function DashboardServiceDevices(props) {
  var serviceClass = props.serviceClass;

  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var devices = Object(useChange["a" /* default */])(bus, function (b) {
    return b.devices({
      serviceClass: serviceClass
    });
  });
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, devices.map(function (device) {
    return /*#__PURE__*/react_default.a.createElement(DashboardDeviceItem["a" /* default */], {
      key: device.id,
      device: device,
      showAvatar: true,
      showHeader: true
    });
  }));
}

function ServiceSpecification(props) {
  var _node$extends;

  var node = props.service,
      showSource = props.showSource,
      showDevices = props.showDevices,
      showDerived = props.showDerived;
  var shortId = node.shortId,
      name = node.name,
      classIdentifier = node.classIdentifier;
  var packets = node.packets.filter(function (pkt) {
    return showDerived || !pkt.derived;
  });
  var registers = packets.filter(jdom_spec["s" /* isRegister */]);
  var events = packets.filter(jdom_spec["j" /* isEvent */]);
  var commands = packets.filter(jdom_spec["h" /* isCommand */]);
  var reports = packets.filter(function (r) {
    return r.secondary;
  });
  var pipeReports = packets.filter(jdom_spec["p" /* isPipeReport */]);
  var others = packets.filter(function (r) {
    return registers.indexOf(r) < 0 && events.indexOf(r) < 0 && commands.indexOf(r) < 0 && reports.indexOf(r) < 0 && pipeReports.indexOf(r) < 0;
  }); // spin up host on demand

  useDeviceHostFromServiceClass(node.classIdentifier);

  var reportOf = function reportOf(pkt) {
    return reports.find(function (rep) {
      return Object(jdom_spec["t" /* isReportOf */])(pkt, rep);
    });
  };

  var pipeReportOf = function pipeReportOf(pkt) {
    return pipeReports.find(function (rep) {
      return Object(jdom_spec["q" /* isPipeReportOf */])(pkt, rep);
    });
  };

  return /*#__PURE__*/react_default.a.createElement(react["Fragment"], {
    key: "servicespec" + shortId
  }, /*#__PURE__*/react_default.a.createElement("h1", {
    key: "title"
  }, name, /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    ml: 1,
    component: "span"
  }, /*#__PURE__*/react_default.a.createElement(IDChip["a" /* default */], {
    id: node.classIdentifier,
    filter: "srv:" + shortId
  }))), /*#__PURE__*/react_default.a.createElement(ServiceSpecificationStatusAlert["a" /* default */], {
    specification: node
  }), /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
    key: "notesshort",
    source: node.notes.short
  }), !!((_node$extends = node.extends) !== null && _node$extends !== void 0 && _node$extends.length) && /*#__PURE__*/react_default.a.createElement("p", {
    key: "extends"
  }, /*#__PURE__*/react_default.a.createElement("span", null, "Extends "), node.extends.map(function (extend, i) {
    return /*#__PURE__*/react_default.a.createElement(react["Fragment"], {
      key: "extend" + extend
    }, i > 0 && /*#__PURE__*/react_default.a.createElement("span", null, ", "), /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
      key: "extend" + extend,
      to: "/services/" + extend + "/"
    }, Object(jdom_spec["E" /* serviceSpecificationFromName */])(extend).name));
  }), "."), /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
    key: "noteslong",
    source: node.notes.long || ""
  }), /*#__PURE__*/react_default.a.createElement(DashboardServiceDevices, {
    serviceClass: classIdentifier
  }), /*#__PURE__*/react_default.a.createElement(EnumSpecification, {
    key: "enums",
    serviceClass: classIdentifier
  }), [{
    name: "Registers",
    packets: registers,
    note: node.notes["registers"]
  }, {
    name: "Events",
    packets: events,
    note: node.notes["events"]
  }, {
    name: "Commands",
    packets: commands,
    note: node.notes["commands"]
  }, {
    name: "Others",
    packets: others,
    note: node.notes["others"]
  }].filter(function (group) {
    return group.packets.length;
  }).map(function (group) {
    return /*#__PURE__*/react_default.a.createElement(react["Fragment"], {
      key: "group" + group.name
    }, /*#__PURE__*/react_default.a.createElement("h2", null, group.name), group.note && /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
      key: "node" + group.name,
      source: group.note
    }), group.packets.sort(function (l, r) {
      return (l.derived ? 1 : -1) - (r.derived ? 1 : -1);
    }).map(function (pkt, i) {
      return /*#__PURE__*/react_default.a.createElement(PacketSpecification["a" /* default */], {
        key: "pkt" + pkt.name,
        serviceClass: node.classIdentifier,
        packetInfo: pkt,
        reportInfo: reportOf(pkt),
        pipeReportInfo: pipeReportOf(pkt),
        showDevices: true
      });
    }));
  }));
}

/***/ }),

/***/ "Fm1u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Page; });

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__("A5xw");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./src/components/RandomGenerator.tsx
var RandomGenerator = __webpack_require__("gGoT");

// EXTERNAL MODULE: ./src/components/useLocalStorage.ts
var useLocalStorage = __webpack_require__("kdz+");

// EXTERNAL MODULE: ./src/components/ui/HighlightTextField.tsx + 1 modules
var HighlightTextField = __webpack_require__("lhji");

// EXTERNAL MODULE: ./src/components/ServiceSpecification.tsx + 2 modules
var ServiceSpecification = __webpack_require__("CHaH");

// CONCATENATED MODULE: ./src/components/tools/ServiceSpecificationEditor.tsx








var SERVICE_SPECIFICATION_STORAGE_KEY = "jacdac:servicespecificationeditorsource";
function ServiceSpecificationEditor() {
  var _useLocalStorage = Object(useLocalStorage["a" /* default */])(SERVICE_SPECIFICATION_STORAGE_KEY, ""),
      source = _useLocalStorage[0],
      setSource = _useLocalStorage[1];

  var json = Object(react["useMemo"])(function () {
    return Object(jdspec["g" /* parseServiceSpecificationMarkdownToJSON */])(source, Object(spec["C" /* serviceMap */])());
  }, [source]);
  var servicePath = json && "services/" + (json.camelName || json.shortId || "0x" + json.classIdentifier.toString(16)).toLowerCase();
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    spacing: 1,
    container: true
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(HighlightTextField["a" /* default */], {
    code: source,
    language: "markdown",
    onChange: setSource,
    annotations: json === null || json === void 0 ? void 0 : json.errors,
    pullRequestTitle: json && "Service: " + json.name,
    pullRequestPath: servicePath,
    pullRequestDescription: "This pull request defines a new service."
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(RandomGenerator["default"], {
    device: false
  }), json && /*#__PURE__*/react_default.a.createElement(ServiceSpecification["a" /* default */], {
    service: json
  })));
}
// CONCATENATED MODULE: ./src/pages/tools/service-editor.tsx



function Page() {
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h1", null, "Service Specification Editor"), /*#__PURE__*/react_default.a.createElement("p", null, "Read the ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/reference/service-specification"
  }, "service specifiation"), " documentation. Use the packet console to monitor packets from your devices."), /*#__PURE__*/react_default.a.createElement(ServiceSpecificationEditor, null));
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

/***/ "gGoT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueServiceId", function() { return uniqueServiceId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueDeviceId", function() { return uniqueDeviceId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueFirmwareId", function() { return uniqueFirmwareId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RandomGenerator; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HaE+");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Zo1I");
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Z8Ma");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("R/WZ");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ZBNC");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("30+C");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("oa/T");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("ofer");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("pdwK");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("o4QW");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("5rCv");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("FQT7");
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("4+mf");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("Bf0q");
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("W1g9");





 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports






function looksRandom(n) {
  var s = n.toString(16);
  var h = "0123456789abcdef";

  for (var i = 0; i < h.length; ++i) {
    var hh = h[i];
    if (s.indexOf(hh + hh + hh) >= 0) return false;
  }

  if (/f00d|dead|deaf|beef/.test(s)) return false;
  return true;
}

function genServId() {
  var n = Object(_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__[/* cryptoRandomUint32 */ "o"])(1);
  if (n === undefined) return undefined;
  return n[0] & 0xfffffff | 0x10000000;
}

function genFirmwareId() {
  var n = Object(_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__[/* cryptoRandomUint32 */ "o"])(1);
  if (n === undefined) return undefined;
  return n[0] & 0xfffffff | 0x30000000;
}

function toFullHex(n) {
  return "0x" + n.map(function (id) {
    return ("000000000" + id.toString(16)).slice(-8);
  }).join("");
}

function uniqueServiceId() {
  var id = genServId();

  while (id !== undefined && (!looksRandom(id) || Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_4__[/* serviceSpecificationFromClassIdentifier */ "D"])(id))) {
    id = genServId();
  }

  return id !== undefined && toFullHex([id]);
}
function uniqueDeviceId() {
  var n = Object(_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__[/* cryptoRandomUint32 */ "o"])(2);
  return n !== undefined && toFullHex([n[0], n[1]]);
}
function uniqueFirmwareId() {
  var id = genFirmwareId();

  while (id !== undefined && (!looksRandom(id) || Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_4__[/* deviceSpecificationFromFirmwareIdentifier */ "b"])(id))) {
    id = genFirmwareId();
  }

  return id !== undefined && toFullHex([id]);
}
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
  root: {
    minWidth: 275,
    marginBottom: "1rem"
  },
  title: {
    fontSize: 14
  }
}));
function RandomGenerator(props) {
  var device = props.device,
      firmware = props.firmware;
  var labelId = Object(react_use_id_hook__WEBPACK_IMPORTED_MODULE_16__[/* useId */ "b"])();
  var fieldId = Object(react_use_id_hook__WEBPACK_IMPORTED_MODULE_16__[/* useId */ "b"])();
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(device ? uniqueDeviceId() : uniqueServiceId()),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      copySuccess = _useState2[0],
      setCopySuccess = _useState2[1];

  var handleRegenerate = function handleRegenerate() {
    var v = device ? uniqueDeviceId() : firmware ? uniqueFirmwareId() : uniqueServiceId();
    setValue(v);
    setCopySuccess(false);
  };

  var handleCopy = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return navigator.clipboard.writeText(value);

            case 3:
              setCopySuccess(true);
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              setCopySuccess(false);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function handleCopy() {
      return _ref.apply(this, arguments);
    };
  }();

  var title = device ? "Random Device Identifier" : firmware ? "Random Firmware Identifier" : "Random Service Identifier";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    id: labelId,
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true
  }, title), value !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    variant: "h5",
    component: "h2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    id: fieldId,
    value: value,
    readOnly: true,
    inputProps: {
      "aria-labelledby": labelId
    }
  }), copySuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, null)), value === undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
    severity: "error"
  }, "Oops, unable to generate a strong random number.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_14__["Button"], {
    "aria-label": "copy random number to clipboard",
    size: "small",
    variant: "contained",
    onClick: handleCopy
  }, "Copy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_14__["Button"], {
    "aria-label": "regenerate random number",
    size: "small",
    variant: "contained",
    color: "primary",
    onClick: handleRegenerate
  }, "Regenerate"))));
}

/***/ }),

/***/ "lhji":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ HighlightTextField; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.js + 2 modules
var dist = __webpack_require__("3Mpw");

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/github/index.js
var github = __webpack_require__("nY9v");

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/vsDark/index.js
var vsDark = __webpack_require__("SoeO");

// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__("geQJ");

// CONCATENATED MODULE: ./node_modules/use-editable/dist/use-editable.es.js

var m = {
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
};

function p(a) {
  a = [a.firstChild];

  for (var d, c = ""; d = a.pop();) {
    d.nodeType === Node.TEXT_NODE ? c += d.textContent : d.nodeType === Node.ELEMENT_NODE && "BR" === d.nodeName && (c += "\n"), d.nextSibling && a.push(d.nextSibling), d.firstChild && a.push(d.firstChild);
  }

  "\n" !== c[c.length - 1] && (c += "\n");
  return c;
}

function r(a) {
  var c = window.getSelection();
  a = [a.firstChild];
  var d = c.focusNode;
  c = c.focusOffset;
  d && d.nodeType !== Node.TEXT_NODE && (c <= d.childNodes.length - 1 && (d = d.childNodes[c]), c = 0);

  for (var h, k = 0, l = 0, g = ""; h = a.pop();) {
    if (h.nodeType === Node.TEXT_NODE) {
      var e = h.textContent;
      h === d && (e = e.slice(0, c));
      k += e.length;
      g += e;

      for (var f, n = /\n/g; f = n.exec(e);) {
        g = e.slice(f.index + 1), l++;
      }

      if (h === d) {
        break;
      }
    } else {
      h.nodeType === Node.ELEMENT_NODE && "BR" === h.nodeName && (g = "", l++, k++);
    }

    h.nextSibling && h !== d && a.push(h.nextSibling);
    h.firstChild && a.push(h.firstChild);
  }

  return {
    position: k,
    content: g,
    line: l
  };
}

function t(a, c) {
  for (var d = window.getSelection(), k = document.createRange(), l = [a.firstChild], g = 0; a = l.pop();) {
    if (a.nodeType === Node.TEXT_NODE) {
      var h = a.textContent.length;

      if (g + h >= c) {
        (c -= g) === h ? k.setStartAfter(a) : k.setStart(a, c);
        break;
      }

      g += a.textContent.length;
    } else if (a.nodeType === Node.ELEMENT_NODE && "BR" === a.nodeName) {
      if (g + 1 >= c) {
        k.setStartAfter(a);
        break;
      }

      g++;
    }

    a.nextSibling && l.push(a.nextSibling);
    a.firstChild && l.push(a.firstChild);
  }

  d.empty();
  d.addRange(k);
}

function B(a) {
  var c = window.getSelection(),
      d = window.getSelection().getRangeAt(0);
  a = document.createTextNode(a);
  c.getRangeAt(0).deleteContents();
  d.insertNode(a);
  (d = document.createRange()).setStartAfter(a);
  c.empty();
  c.addRange(d);
}

function useEditable(a, c, d) {
  function k() {
    e[0].disconnect();
  }

  function l() {
    e[0].disconnect();
    e[1] = !0;
  }

  function g() {
    e[6] = -1;
  }

  d || (d = {});
  var h = Object(react["useState"])([])[1],
      e = Object(react["useState"])(function () {
    var a = [null, !1, c, [], [], -1, -1];
    "undefined" != typeof MutationObserver && (a[0] = new MutationObserver(function e(e) {
      var d;
      (d = a[3]).push.apply(d, e);
    }));
    return a;
  })[0],
      n = Object(react["useCallback"])(function (d) {
    var f = a.current;

    if (f) {
      var c = r(f);
      f = p(f);
      e[6] = c.position + (d.length - f.length);
      e[2](d, c);
    }
  }, []);

  if ("object" != typeof navigator) {
    return n;
  }

  Object(react["useLayoutEffect"])(function () {
    e[2] = c;

    if (a.current && !d.disabled) {
      return e[1] = !1, e[0].observe(a.current, m), 0 <= e[6] && t(a.current, e[6]), k;
    }
  });
  Object(react["useLayoutEffect"])(function () {
    if (!a.current || d.disabled) {
      e[4].length = 0, e[5] = -1;
    } else {
      var f = a.current;
      -1 < e[6] && (f.focus(), t(f, e[6]));
      var c = f.style.whiteSpace,
          k = f.contentEditable,
          u = !0;

      try {
        f.contentEditable = "plaintext-only";
      } catch (b) {
        f.contentEditable = "true", u = !1;
      }

      "pre" !== c && (f.style.whiteSpace = "pre-wrap");
      d.indentation && (f.style.tabSize = f.style.MozTabSize = "" + d.indentation);

      var v,
          C = new RegExp("^(?:" + " ".repeat(d.indentation || 0) + "|\\t)"),
          q = function q(b) {
        if (a.current && -1 !== e[6]) {
          var d = e[4],
              c = p(f),
              h = r(f),
              g = new Date().valueOf(),
              k = d[e[5]];
          !b && 500 > g - v || k && k[1] === c ? v = g : (d[b = ++e[5]] = [h, c], d.splice(b + 1), 500 < b && (e[5]--, d.shift()));
        }
      },
          w = function w() {
        var b;
        (b = e[3]).push.apply(b, e[0].takeRecords());

        if (e[3].length) {
          l();
          b = p(f);
          var d = r(f);
          e[6] = d.position;

          for (var a, c; a = e[3].pop();) {
            null !== a.oldValue && (a.target.textContent = a.oldValue);

            for (c = a.removedNodes.length - 1; 0 <= c; c--) {
              a.target.insertBefore(a.removedNodes[c], a.nextSibling);
            }

            for (c = a.addedNodes.length - 1; 0 <= c; c--) {
              a.addedNodes[c].parentNode && a.target.removeChild(a.addedNodes[c]);
            }
          }

          e[2](b, d);
        }
      },
          x = function x(b) {
        if (!b.defaultPrevented && b.target === f) {
          if (e[1]) {
            return b.preventDefault(), h([]);
          }

          if ((b.metaKey || b.ctrlKey) && "KeyZ" === b.code) {
            b.preventDefault(), b.shiftKey ? (b = ++e[5], (b = e[4][b]) || (e[5] = e[4].length - 1)) : (b = --e[5], (b = e[4][b]) || (e[5] = 0)), b && (l(), e[6] = b[0].position, e[2](b[1], b[0]));
          } else if (q(), "Enter" === b.key) {
            b.preventDefault();
            b = r(f);
            var a = /\S/g.exec(b.content);
            B(b = "\n" + b.content.slice(0, a ? a.index : b.content.length));
          } else if (!u && "Backspace" === b.key) {
            b.preventDefault(), (b = window.getSelection().getRangeAt(0)).startContainer !== b.endContainer || b.startOffset !== b.endOffset ? b.deleteContents() : (l(), b = r(f), b = Math.max(0, b.position - 1), a = p(f), n(a.slice(0, b) + a.slice(b + 1)));
          } else if (d.indentation && "Tab" === b.key) {
            b.preventDefault();
            var c = (a = r(f)).position - a.content.length,
                g = p(f);
            b = b.shiftKey ? g.slice(0, c) + a.content.replace(C, "") + g.slice(c + a.content.length) : g.slice(0, c) + "\t" + g.slice(c);
            n(b);
          }
        }
      },
          y = function y(a) {
        a.defaultPrevented || a.isComposing || ((a.metaKey || a.ctrlKey) && "KeyZ" === a.code || q(), w(), f.focus());
      },
          z = function z() {
        e[6] = r(f).position;
      },
          A = function A(a) {
        a.preventDefault();
        q(!0);
        B(a.clipboardData.getData("text/plain"));
        q(!0);
        w();
      };

      window.addEventListener("keydown", x);
      f.addEventListener("focus", z);
      f.addEventListener("blur", g);
      f.addEventListener("paste", A);
      f.addEventListener("keyup", y);
      return function () {
        window.removeEventListener("keydown", x);
        f.removeEventListener("focus", z);
        f.removeEventListener("blur", g);
        f.removeEventListener("paste", A);
        f.removeEventListener("keyup", y);
        f.style.whiteSpace = c;
        f.contentEditable = k;
      };
    }
  }, [a.current, d.disabled, d.indentation]);
  return n;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Alert/Alert.js + 4 modules
var Alert = __webpack_require__("ZiQX");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js
var Tooltip = __webpack_require__("csfp");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__("OXkz");

// CONCATENATED MODULE: ./src/components/ui/HighlightTextField.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react/jsx-key */

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name







var GithubPullRequestButton = /*#__PURE__*/Object(react["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(6), __webpack_require__.e(89)]).then(__webpack_require__.bind(null, "ha5o"));
});
var AnnotationTooltip = Object(withStyles["a" /* default */])(function (theme) {
  return {
    arrow: {
      color: theme.palette.error.main
    },
    tooltip: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.common.white,
      boxShadow: theme.shadows[1],
      fontSize: theme.typography.body2.fontSize
    }
  };
})(Tooltip["a" /* default */]);
function HighlightTextField(props) {
  var _ref2;

  var code = props.code,
      onChange = props.onChange,
      language = props.language,
      annotations = props.annotations,
      pullRequestTitle = props.pullRequestTitle,
      pullRequestPath = props.pullRequestPath,
      pullRequestDescription = props.pullRequestDescription;

  var _useContext = Object(react["useContext"])(DarkModeContext["a" /* default */]),
      darkMode = _useContext.darkMode;

  var theme = darkMode === "dark" ? vsDark["a" /* default */] : github["a" /* default */];
  var editorRef = Object(react["useRef"])(null);
  useEditable(editorRef, onChange, {
    disabled: false,
    indentation: 4
  });
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1,
    direction: "row"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(dist["a" /* default */], Object.assign({}, dist["b" /* defaultProps */], {
    code: code,
    language: language,
    theme: theme
  }), function (_ref) {
    var className = _ref.className,
        style = _ref.style,
        tokens = _ref.tokens,
        getTokenProps = _ref.getTokenProps;
    return /*#__PURE__*/react_default.a.createElement("pre", {
      ref: editorRef,
      className: className,
      spellCheck: false,
      style: _objectSpread(_objectSpread({}, style), {
        minHeight: "12rem",
        whiteSpace: "pre-wrap"
      })
    }, tokens.map(function (line, i) {
      var annotation = annotations === null || annotations === void 0 ? void 0 : annotations.find(function (a) {
        return a.line === i + 1;
      });
      var title = annotation === null || annotation === void 0 ? void 0 : annotation.message;
      var el = /*#__PURE__*/react_default.a.createElement("span", {
        key: i,
        style: annotation && {
          borderBottom: "dashed 1px red"
        }
      }, line.filter(function (token) {
        return !token.empty;
      }).map(function (token, key) {
        return /*#__PURE__*/react_default.a.createElement("span", getTokenProps({
          token: token,
          key: key
        }));
      }), i < tokens.length - 1 ? "\n" : null);
      return title ? /*#__PURE__*/react_default.a.createElement(AnnotationTooltip, {
        title: title,
        arrow: true,
        key: i
      }, el) : el;
    }));
  })), !!(annotations !== null && annotations !== void 0 && annotations.length) && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "error"
  }, /*#__PURE__*/react_default.a.createElement("ul", null, annotations.map(function (a, i) {
    return /*#__PURE__*/react_default.a.createElement("li", {
      key: i
    }, "line ", a.line, ": ", a.message);
  })))), pullRequestTitle && pullRequestPath && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Suspense["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(GithubPullRequestButton, {
    title: pullRequestTitle,
    head: pullRequestPath,
    description: pullRequestDescription,
    files: (_ref2 = {}, _ref2[pullRequestPath + ".md"] = code, _ref2)
  }))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-service-editor-tsx-c360e089be9edcd44ef0.js.map