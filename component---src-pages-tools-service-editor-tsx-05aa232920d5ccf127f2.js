(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2219],{

/***/ 61459:
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
  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), 'Check');

exports.Z = _default;

/***/ }),

/***/ 72833:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uniqueServiceId": function() { return /* binding */ uniqueServiceId; },
/* harmony export */   "uniqueDeviceId": function() { return /* binding */ uniqueDeviceId; },
/* harmony export */   "uniqueFirmwareId": function() { return /* binding */ uniqueFirmwareId; },
/* harmony export */   "default": function() { return /* binding */ RandomGenerator; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81794);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13173);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15343);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(31186);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(61459);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95453);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36176);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42862);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19640);





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
  var n = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__/* .cryptoRandomUint32 */ .dG)(1);
  if (n === undefined) return undefined;
  return n[0] & 0xfffffff | 0x10000000;
}

function genFirmwareId() {
  var n = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__/* .cryptoRandomUint32 */ .dG)(1);
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

  while (id !== undefined && (!looksRandom(id) || (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_3__/* .serviceSpecificationFromClassIdentifier */ .d5)(id))) {
    id = genServId();
  }

  return id !== undefined && toFullHex([id]);
}
function uniqueDeviceId() {
  var n = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__/* .cryptoRandomUint32 */ .dG)(2);
  return n !== undefined && toFullHex([n[0], n[1]]);
}
function uniqueFirmwareId() {
  var id = genFirmwareId();

  while (id !== undefined && (!looksRandom(id) || (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_3__/* .deviceSpecificationFromFirmwareIdentifier */ .IL)(id))) {
    id = genFirmwareId();
  }

  return id !== undefined && toFullHex([id]);
}
var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
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
  var labelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_6__/* .useId */ .Me)();
  var fieldId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_6__/* .useId */ .Me)();
  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(device ? uniqueDeviceId() : uniqueServiceId()),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      copySuccess = _useState2[0],
      setCopySuccess = _useState2[1];

  var handleRegenerate = function handleRegenerate() {
    var v = device ? uniqueDeviceId() : firmware ? uniqueFirmwareId() : uniqueServiceId();
    setValue(v);
    setCopySuccess(false);
  };

  var handleCopy = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    id: labelId,
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true
  }, title), value !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    variant: "h5",
    component: "h2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
    id: fieldId,
    value: value,
    readOnly: true,
    inputProps: {
      "aria-labelledby": labelId
    }
  }), copySuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, null)), value === undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    severity: "error"
  }, "Oops, unable to generate a strong random number.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
    "aria-label": "copy random number to clipboard",
    size: "small",
    variant: "contained",
    onClick: handleCopy
  }, "Copy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
    "aria-label": "regenerate random number",
    size: "small",
    variant: "contained",
    color: "primary",
    onClick: handleRegenerate
  }, "Regenerate"))));
}

/***/ }),

/***/ 28650:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ServiceSpecification; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var jdom_spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./src/components/PacketSpecification.tsx + 10 modules
var PacketSpecification = __webpack_require__(40602);
// EXTERNAL MODULE: ./src/components/IDChip.tsx
var IDChip = __webpack_require__(92681);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
;// CONCATENATED MODULE: ./src/components/EnumSpecification.tsx



function EnumSpecification(props) {
  var serviceClass = props.serviceClass;
  var spec = (0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(serviceClass);
  var enums = Object.values((spec === null || spec === void 0 ? void 0 : spec.enums) || {}).filter(function (en) {
    return !en.derived;
  });
  if (!enums.length) return /*#__PURE__*/react.createElement(react.Fragment, null);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h2", null, "Enums"), enums.map(function (e) {
    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: e.name
    }, /*#__PURE__*/react.createElement("h3", null, e.name, " ", e.isFlags && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
      label: "flags",
      size: "small"
    })), /*#__PURE__*/react.createElement("ul", null, Object.keys(e.members).map(function (en) {
      return /*#__PURE__*/react.createElement("li", {
        key: en
      }, en, ": ", /*#__PURE__*/react.createElement("code", null, "0x", e.members[en].toString(16)));
    })));
  }));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__(8266);
// EXTERNAL MODULE: ./src/components/ServiceSpecificationStatusAlert.tsx
var ServiceSpecificationStatusAlert = __webpack_require__(49102);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 25 modules
var servers = __webpack_require__(69834);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
;// CONCATENATED MODULE: ./src/components/hooks/useServiceProviderFromServiceClass.ts



function useServiceProviderFromServiceClass(serviceClass) {
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus; // run once


  (0,react.useEffect)(function () {
    var devices = bus.devices({
      serviceClass: serviceClass
    });
    var def = !devices.length && (0,servers/* serviceProviderDefinitionFromServiceClass */.vd)(serviceClass);
    var provider = def && (0,servers/* addServiceProvider */.Q6)(bus, def);
    return function () {
      return bus.removeServiceProvider(provider);
    };
  }, [serviceClass]);
}
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/dashboard/DashboardDeviceItem.tsx
var DashboardDeviceItem = __webpack_require__(24301);
;// CONCATENATED MODULE: ./src/components/ServiceSpecification.tsx














function DashboardServiceDevices(props) {
  var serviceClass = props.serviceClass;

  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var devices = (0,useChange/* default */.Z)(bus, function (b) {
    return b.devices({
      serviceClass: serviceClass
    });
  });
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, devices.map(function (device) {
    return /*#__PURE__*/react.createElement(DashboardDeviceItem/* default */.Z, {
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
  var registers = packets.filter(jdom_spec/* isRegister */.x5);
  var events = packets.filter(jdom_spec/* isEvent */.cO);
  var commands = packets.filter(jdom_spec/* isCommand */.ao);
  var reports = packets.filter(function (r) {
    return r.secondary;
  });
  var pipeReports = packets.filter(jdom_spec/* isPipeReport */._5);
  var others = packets.filter(function (r) {
    return registers.indexOf(r) < 0 && events.indexOf(r) < 0 && commands.indexOf(r) < 0 && reports.indexOf(r) < 0 && pipeReports.indexOf(r) < 0;
  }); // spin up provider on demand

  useServiceProviderFromServiceClass(node.classIdentifier);

  var reportOf = function reportOf(pkt) {
    return reports.find(function (rep) {
      return (0,jdom_spec/* isReportOf */.Dm)(pkt, rep);
    });
  };

  var pipeReportOf = function pipeReportOf(pkt) {
    return pipeReports.find(function (rep) {
      return (0,jdom_spec/* isPipeReportOf */.yr)(pkt, rep);
    });
  };

  return /*#__PURE__*/react.createElement(react.Fragment, {
    key: "servicespec" + shortId
  }, /*#__PURE__*/react.createElement("h1", {
    key: "title"
  }, name, /*#__PURE__*/react.createElement(Box/* default */.Z, {
    ml: 1,
    component: "span"
  }, /*#__PURE__*/react.createElement(IDChip/* default */.Z, {
    id: node.classIdentifier,
    filter: "srv:" + shortId
  }))), /*#__PURE__*/react.createElement(ServiceSpecificationStatusAlert/* default */.Z, {
    specification: node
  }), /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    key: "notesshort",
    source: node.notes.short
  }), !!((_node$extends = node.extends) !== null && _node$extends !== void 0 && _node$extends.length) && /*#__PURE__*/react.createElement("p", {
    key: "extends"
  }, /*#__PURE__*/react.createElement("span", null, "Extends "), node.extends.map(function (extend, i) {
    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: "extend" + extend
    }, i > 0 && /*#__PURE__*/react.createElement("span", null, ", "), /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
      key: "extend" + extend,
      to: "/services/" + extend + "/"
    }, (0,jdom_spec/* serviceSpecificationFromName */.kB)(extend).name));
  }), "."), /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    key: "noteslong",
    source: node.notes.long || ""
  }), /*#__PURE__*/react.createElement(DashboardServiceDevices, {
    serviceClass: classIdentifier
  }), /*#__PURE__*/react.createElement(EnumSpecification, {
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
    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: "group" + group.name
    }, /*#__PURE__*/react.createElement("h2", null, group.name), group.note && /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
      key: "node" + group.name,
      source: group.note
    }), group.packets.sort(function (l, r) {
      return (l.derived ? 1 : -1) - (r.derived ? 1 : -1);
    }).map(function (pkt, i) {
      return /*#__PURE__*/react.createElement(PacketSpecification/* default */.Z, {
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

/***/ 24301:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DashboardDeviceItem; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19756);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80838);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _DashboardDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54886);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54774);
/* harmony import */ var _DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73205);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84377);







function DashboardDeviceItem(props) {
  var device = props.device,
      expanded = props.expanded,
      toggleExpanded = props.toggleExpanded,
      variant = props.variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(props, ["device", "expanded", "toggleExpanded", "variant"]);

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_4__/* .default */ .ZP),
      drawerType = _useContext.drawerType;

  var breakpoints = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(device, function () {
    var breakpointWeight = device.services().map(function (srv) {
      return (0,_DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_3__/* .dashboardServiceWeight */ .o)(srv) || (srv.readingRegister || srv.valueRegister || srv.intensityRegister ? 1 : 0);
    }).reduce(function (c, v) {
      return c + v;
    }, 0);
    if (breakpointWeight > 3 || drawerType !== _AppContext__WEBPACK_IMPORTED_MODULE_4__/* .DrawerType.None */ .jw.None) return {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, Object.assign({
    item: true
  }, breakpoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardDevice__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, Object.assign({
    device: device,
    expanded: expanded,
    toggleExpanded: toggleExpanded,
    variant: variant
  }, other)));
}

/***/ }),

/***/ 33024:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ HighlightTextField; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96156);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.js + 2 modules
var dist = __webpack_require__(18328);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/github/index.js
var github = __webpack_require__(13019);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/vsDark/index.js
var vsDark = __webpack_require__(41194);
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(91350);
;// CONCATENATED MODULE: ./node_modules/use-editable/dist/use-editable.es.js

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
  var h = (0,react.useState)([])[1],
      e = (0,react.useState)(function () {
    var a = [null, !1, c, [], [], -1, -1];
    "undefined" != typeof MutationObserver && (a[0] = new MutationObserver(function e(e) {
      var d;
      (d = a[3]).push.apply(d, e);
    }));
    return a;
  })[0],
      n = (0,react.useCallback)(function (d) {
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

  (0,react.useLayoutEffect)(function () {
    e[2] = c;

    if (a.current && !d.disabled) {
      return e[1] = !1, e[0].observe(a.current, m), 0 <= e[6] && t(a.current, e[6]), k;
    }
  });
  (0,react.useLayoutEffect)(function () {
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
var Alert = __webpack_require__(6809);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(14685);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
;// CONCATENATED MODULE: ./src/components/ui/HighlightTextField.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react/jsx-key */

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name







var GithubPullRequestButton = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(8136)]).then(__webpack_require__.bind(__webpack_require__, 12540));
});
var AnnotationTooltip = (0,withStyles/* default */.Z)(function (theme) {
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
})(Tooltip/* default */.ZP);
function HighlightTextField(props) {
  var _ref2;

  var code = props.code,
      onChange = props.onChange,
      language = props.language,
      annotations = props.annotations,
      pullRequestTitle = props.pullRequestTitle,
      pullRequestPath = props.pullRequestPath,
      pullRequestDescription = props.pullRequestDescription;

  var _useContext = (0,react.useContext)(DarkModeContext/* default */.Z),
      darkMode = _useContext.darkMode;

  var theme = darkMode === "dark" ? vsDark/* default */.Z : github/* default */.Z;
  var editorRef = (0,react.useRef)(null);
  useEditable(editorRef, onChange, {
    disabled: false,
    indentation: 4
  });
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1,
    direction: "row"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(dist/* default */.ZP, Object.assign({}, dist/* defaultProps */.lG, {
    code: code,
    language: language,
    theme: theme
  }), function (_ref) {
    var className = _ref.className,
        style = _ref.style,
        tokens = _ref.tokens,
        getTokenProps = _ref.getTokenProps;
    return /*#__PURE__*/react.createElement("pre", {
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
      var el = /*#__PURE__*/react.createElement("span", {
        key: i,
        style: annotation && {
          borderBottom: "dashed 1px red"
        }
      }, line.filter(function (token) {
        return !token.empty;
      }).map(function (token, key) {
        return /*#__PURE__*/react.createElement("span", getTokenProps({
          token: token,
          key: key
        }));
      }), i < tokens.length - 1 ? "\n" : null);
      return title ? /*#__PURE__*/react.createElement(AnnotationTooltip, {
        title: title,
        arrow: true,
        key: i
      }, el) : el;
    }));
  })), !!(annotations !== null && annotations !== void 0 && annotations.length) && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "error"
  }, /*#__PURE__*/react.createElement("ul", null, annotations.map(function (a, i) {
    return /*#__PURE__*/react.createElement("li", {
      key: i
    }, "line ", a.line, ": ", a.message);
  })))), pullRequestTitle && pullRequestPath && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(GithubPullRequestButton, {
    title: pullRequestTitle,
    head: pullRequestPath,
    description: pullRequestDescription,
    files: (_ref2 = {}, _ref2[pullRequestPath + ".md"] = code, _ref2)
  }))));
}

/***/ }),

/***/ 37207:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(13996);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./src/components/RandomGenerator.tsx
var RandomGenerator = __webpack_require__(72833);
// EXTERNAL MODULE: ./src/components/useLocalStorage.ts
var useLocalStorage = __webpack_require__(86581);
// EXTERNAL MODULE: ./src/components/ui/HighlightTextField.tsx + 1 modules
var HighlightTextField = __webpack_require__(33024);
// EXTERNAL MODULE: ./src/components/ServiceSpecification.tsx + 2 modules
var ServiceSpecification = __webpack_require__(28650);
;// CONCATENATED MODULE: ./src/components/tools/ServiceSpecificationEditor.tsx








var SERVICE_SPECIFICATION_STORAGE_KEY = "jacdac:servicespecificationeditorsource";
function ServiceSpecificationEditor() {
  var _useLocalStorage = (0,useLocalStorage/* default */.Z)(SERVICE_SPECIFICATION_STORAGE_KEY, ""),
      source = _useLocalStorage[0],
      setSource = _useLocalStorage[1];

  var json = (0,react.useMemo)(function () {
    return (0,jdspec/* parseServiceSpecificationMarkdownToJSON */.ml)(source, (0,spec/* serviceMap */.nT)());
  }, [source]);
  var servicePath = json && "services/" + (json.camelName || json.shortId || "0x" + json.classIdentifier.toString(16)).toLowerCase();
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    spacing: 1,
    container: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(HighlightTextField/* default */.Z, {
    code: source,
    language: "markdown",
    onChange: setSource,
    annotations: json === null || json === void 0 ? void 0 : json.errors,
    pullRequestTitle: json && "Service: " + json.name,
    pullRequestPath: servicePath,
    pullRequestDescription: "This pull request defines a new service."
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(RandomGenerator.default, {
    device: false
  }), json && /*#__PURE__*/react.createElement(ServiceSpecification/* default */.Z, {
    service: json
  })));
}
;// CONCATENATED MODULE: ./src/pages/tools/service-editor.tsx



function Page() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Service Specification Editor"), /*#__PURE__*/react.createElement("p", null, "Read the ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: "/reference/service-specification"
  }, "service specifiation"), " documentation. Use the packet console to monitor packets from your devices."), /*#__PURE__*/react.createElement(ServiceSpecificationEditor, null));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-service-editor-tsx-05aa232920d5ccf127f2.js.map