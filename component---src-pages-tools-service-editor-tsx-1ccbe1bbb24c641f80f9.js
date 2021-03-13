(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

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

// EXTERNAL MODULE: ./jacdac-ts/src/hosts/hosts.ts + 22 modules
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
    var host = def && Object(hosts["b" /* addHost */])(bus, def.services());
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

// EXTERNAL MODULE: ./src/components/ui/HighlightTextField.tsx
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightTextField; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rePB");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3Mpw");
/* harmony import */ var prism_react_renderer_themes_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nY9v");
/* harmony import */ var prism_react_renderer_themes_vsDark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("SoeO");
/* harmony import */ var _DarkModeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("geQJ");
/* harmony import */ var use_editable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("kWdF");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ZiQX");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("H2TA");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("csfp");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("tRbT");
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("OXkz");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react/jsx-key */

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name







var GithubPullRequestButton = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(14), __webpack_require__.e(88)]).then(__webpack_require__.bind(null, "ha5o"));
});
var AnnotationTooltip = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(function (theme) {
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
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);
function HighlightTextField(props) {
  var _ref2;

  var code = props.code,
      onChange = props.onChange,
      language = props.language,
      annotations = props.annotations,
      pullRequestTitle = props.pullRequestTitle,
      pullRequestPath = props.pullRequestPath,
      pullRequestDescription = props.pullRequestDescription;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_DarkModeContext__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]),
      darkMode = _useContext.darkMode;

  var theme = darkMode === "dark" ? prism_react_renderer_themes_vsDark__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"] : prism_react_renderer_themes_github__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"];
  var editorRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(use_editable__WEBPACK_IMPORTED_MODULE_6__[/* useEditable */ "a"])(editorRef, onChange, {
    disabled: false,
    indentation: 4
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    container: true,
    spacing: 1,
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__[/* defaultProps */ "b"], {
    code: code,
    language: language,
    theme: theme
  }), function (_ref) {
    var className = _ref.className,
        style = _ref.style,
        tokens = _ref.tokens,
        getTokenProps = _ref.getTokenProps;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("pre", {
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
      var el = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        key: i,
        style: annotation && {
          borderBottom: "dashed 1px red"
        }
      }, line.filter(function (token) {
        return !token.empty;
      }).map(function (token, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", getTokenProps({
          token: token,
          key: key
        }));
      }), i < tokens.length - 1 ? "\n" : null);
      return title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AnnotationTooltip, {
        title: title,
        arrow: true,
        key: i
      }, el) : el;
    }));
  })), !!(annotations !== null && annotations !== void 0 && annotations.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    severity: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, annotations.map(function (a, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: i
    }, "line ", a.line, ": ", a.message);
  })))), pullRequestTitle && pullRequestPath && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GithubPullRequestButton, {
    title: pullRequestTitle,
    head: pullRequestPath,
    description: pullRequestDescription,
    files: (_ref2 = {}, _ref2[pullRequestPath + ".md"] = code, _ref2)
  }))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-service-editor-tsx-1ccbe1bbb24c641f80f9.js.map