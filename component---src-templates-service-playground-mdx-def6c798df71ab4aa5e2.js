(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "2Jyw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_frontmatter", function() { return _frontmatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zLVn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7ljp");
/* harmony import */ var _home_runner_work_jacdac_docs_jacdac_docs_src_components_Page_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("NqE+");
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4+mf");
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Z8Ma");
/* harmony import */ var _components_ServiceSpecification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("CHaH");


/* @jsx mdx */


/* @jsxRuntime classic */

/* @jsx mdx */





var _frontmatter = {};
var layoutProps = {
  _frontmatter: _frontmatter
};
var MDXLayout = _home_runner_work_jacdac_docs_jacdac_docs_src_components_Page_tsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])(MDXLayout, Object.assign({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])(_components_ServiceSpecification__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    service: Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_5__[/* serviceSpecificationFromClassIdentifier */ "G"])(props.pageContext.node.classIdentifier),
    mdxType: "ServiceSpecification"
  }));
}
;
MDXContent.isMDXComponent = true;

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
  var spec = Object(jdom_spec["G" /* serviceSpecificationFromClassIdentifier */])(serviceClass);
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
    }, Object(jdom_spec["H" /* serviceSpecificationFromName */])(extend).name));
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

/***/ "NqE+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // eslint-disable-next-line react/prop-types

var Page = function Page(_ref) {
  var props = _ref.props,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], props, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ })

}]);
//# sourceMappingURL=component---src-templates-service-playground-mdx-def6c798df71ab4aa5e2.js.map