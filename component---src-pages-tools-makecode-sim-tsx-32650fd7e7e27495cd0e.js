(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "F/ij":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ makecode_sim_Page; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__("Z3vd");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createMuiTheme.js + 14 modules
var createMuiTheme = __webpack_require__("viY9");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js + 1 modules
var responsiveFontSizes = __webpack_require__("q4d2");

// EXTERNAL MODULE: ./src/components/ui/ThemedLayout.tsx + 3 modules
var ThemedLayout = __webpack_require__("kxJ/");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__("UJQR");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./src/components/icons/MakeCodeIcon.tsx
var MakeCodeIcon = __webpack_require__("DzGZ");

// EXTERNAL MODULE: ./src/components/dashboard/DashboardDeviceItem.tsx
var DashboardDeviceItem = __webpack_require__("Nisz");

// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__("qhky");

// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__("geQJ");

// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__("NHHF");

// EXTERNAL MODULE: ./src/components/AppContext.tsx + 1 modules
var AppContext = __webpack_require__("2K/c");

// CONCATENATED MODULE: ./src/components/makecode/MakeCodeSim.tsx
















function deviceSort(l, r) {
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
} // hide the makecode device itself and power devices


var ignoredServices = [constants["zd" /* SRV_CONTROL */], constants["Nd" /* SRV_LOGGER */], constants["fe" /* SRV_SETTINGS */], constants["be" /* SRV_ROLE_MANAGER */], constants["Td" /* SRV_POWER */]];

function Carousel() {
  var _useContext = Object(react["useContext"])(AppContext["c" /* default */]),
      toggleShowDeviceHostsDialog = _useContext.toggleShowDeviceHostsDialog;

  var devices = Object(useDevices["a" /* default */])({
    announced: true,
    ignoreSelf: true
  }) // ignore MakeCode device (role manager) and power devices
  .filter(function (device) {
    return device.serviceClasses.filter(function (sc) {
      return ignoredServices.indexOf(sc) < 0;
    }).length;
  }) // show best in front
  .sort(deviceSort);

  var handleAdd = function handleAdd() {
    // list all devices connected to the bus
    // and query for them, let makecode show the missing ones
    var extensions = Object(utils["Y" /* unique */])(Object(utils["f" /* arrayConcatMany */])(devices.map(function (device) {
      return device.services().map(function (srv) {
        return Object(spec["C" /* resolveMakecodeServiceFromClassIdentifier */])(srv.serviceClass);
      }).map(function (info) {
        return info === null || info === void 0 ? void 0 : info.client.repo;
      }).filter(function (q) {
        return !!q;
      });
    })));

    if (extensions !== null && extensions !== void 0 && extensions.length) {
      // send message to makecode
      window.parent.postMessage({
        type: "addextensions",
        extensions: extensions,
        broadcast: true
      }, "*");
    }
  };

  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    alignItems: "flex-start",
    spacing: 1
  }, devices.map(function (device) {
    return /*#__PURE__*/react_default.a.createElement(DashboardDeviceItem["a" /* default */], {
      key: device.id,
      device: device,
      showAvatar: true,
      showHeader: true
    });
  }), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1,
    direction: "row"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    size: "medium",
    variant: "contained",
    startIcon: /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
      kind: constants["cf" /* VIRTUAL_DEVICE_NODE_NAME */]
    }),
    onClick: toggleShowDeviceHostsDialog,
    "aria-label": "Start Simulator"
  }, "Start simulator")), !!(devices !== null && devices !== void 0 && devices.length) && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    size: "medium",
    color: "primary",
    variant: "contained",
    startIcon: /*#__PURE__*/react_default.a.createElement(MakeCodeIcon["a" /* default */], null),
    onClick: handleAdd,
    "aria-label": "Add blocks"
  }, "Add blocks")))));
}

function Page() {
  var _useContext2 = Object(react["useContext"])(DarkModeContext["a" /* default */]),
      toggleDarkMode = _useContext2.toggleDarkMode;

  var rawTheme = Object(createMuiTheme["a" /* default */])({
    palette: {
      primary: {
        main: '#63c'
      },
      secondary: {
        main: '#ffc400'
      },
      contrastThreshold: 5.1,
      type: "dark"
    }
  });
  var theme = Object(responsiveFontSizes["a" /* default */])(rawTheme);
  Object(react["useEffect"])(function () {
    return toggleDarkMode('dark');
  }, []); // always dark mode

  return /*#__PURE__*/react_default.a.createElement(ThemedLayout["a" /* default */], {
    theme: theme
  }, /*#__PURE__*/react_default.a.createElement(Helmet["b" /* default */], null, /*#__PURE__*/react_default.a.createElement("style", null, "\nhtml {\n    margin-right: 4px;\n    overflow-y: auto !important;\n}\nhtml, body {\n    background: transparent !important;\n}\n")), /*#__PURE__*/react_default.a.createElement(Carousel, null));
}
// CONCATENATED MODULE: ./src/pages/tools/makecode-sim.tsx


function makecode_sim_Page() {
  return /*#__PURE__*/react_default.a.createElement(Page, null);
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






function DashboardDeviceItem(props) {
  var device = props.device,
      expanded = props.expanded,
      toggleExpanded = props.toggleExpanded,
      variant = props.variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(props, ["device", "expanded", "toggleExpanded", "variant"]);

  var breakpoints = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(device, function () {
    var breakpointWeight = device.services().map(function (srv) {
      return Object(_DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_5__[/* dashboardServiceWeight */ "a"])(srv) || (srv.readingRegister || srv.valueRegister || srv.intensityRegister ? 1 : 0);
    }).reduce(function (c, v) {
      return c + v;
    }, 0);
    if (breakpointWeight > 3) return {
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
  }, [expanded]); // based on size, expanded or reduce widget size

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], Object.assign({
    item: true
  }, breakpoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_DashboardDevice__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object.assign({
    device: device,
    expanded: expanded,
    toggleExpanded: toggleExpanded,
    variant: variant
  }, other)));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-makecode-sim-tsx-32650fd7e7e27495cd0e.js.map