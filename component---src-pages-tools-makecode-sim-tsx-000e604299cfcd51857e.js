(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

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

/***/ "DzGZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HR5l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M4.703 2.615s-.505.05-.72.15a3.011 3.011 0 00-.391.221c-.22.12-.42.266-.6.444-.52.516-.795 1.2-.834 2.05a6.857 6.857 0 00-.066.961V8.36a5.117 5.117 0 01-.137 1.032 1.73 1.73 0 01-.4.773 2.006 2.006 0 00-.15.149 6.534 6.534 0 01-.848.617c-.303.196-.481.474-.537.83v.017c-.01.07-.017.14-.018.215L0 12.006v.008c0 .08.003.156.012.226h.002c.024.214.082.378.177.492.129.153.345.328.649.52.304.192.552.398.74.62.19.221.332.549.428.985.037.17.065.54.084 1.106v1.514c0 .285.023.542.056.787.001.047 0 .092.002.14.007.587.135 1.107.385 1.559.25.453.604.803 1.063 1.05.458.248.978.372 1.56.372h14.139c.262 0 .505-.05.72-.15.139-.064.267-.14.391-.221.218-.12.42-.266.6-.444.52-.516.795-1.2.834-2.05.042-.299.066-.618.066-.963v-1.918c.014-.372.059-.715.137-1.03.078-.314.213-.572.4-.775a1.98 1.98 0 00.15-.146c.2-.179.48-.384.848-.618.303-.196.481-.475.537-.832l.002-.015a1.66 1.66 0 00.018-.217V11.988c0-.08-.004-.156-.012-.226h-.002c-.024-.214-.082-.378-.177-.492-.129-.153-.345-.328-.649-.52a3.208 3.208 0 01-.74-.62c-.19-.221-.332-.55-.428-.987-.037-.17-.065-.538-.084-1.104V6.523c0-.285-.023-.542-.056-.787-.001-.047 0-.092-.002-.14-.007-.587-.135-1.107-.385-1.559a2.598 2.598 0 00-1.063-1.05c-.458-.248-.978-.372-1.56-.372H4.703zm1.22 1.24c.307 0 .533.058.673.172.115.096.168.24.168.453a.885.885 0 01-.069.36.501.501 0 01-.142.201.346.346 0 01-.18.07c-.31.042-.543.095-.713.164a1.03 1.03 0 00-.543.536c-.093.201-.149.47-.174.818-.022.301-.033.725-.033 1.293-.012.796-.058 1.422-.137 1.861-.07.398-.206.74-.4 1.02-.197.282-.499.552-.898.804l-.616.39.618.386c.286.18.52.368.695.558.166.18.304.407.414.672.115.277.2.614.248 1.004.051.413.076.908.076 1.47 0 .587.013 1.025.037 1.34.03.367.094.64.196.835.123.236.303.403.537.496.168.067.395.114.693.148a.404.404 0 01.268.16c.081.1.123.259.123.471 0 .308-.064.608-.84.608-.477 0-.898-.094-1.25-.282a2.006 2.006 0 01-.813-.785 2.402 2.402 0 01-.31-1.197c-.048-2.666-.098-3.199-.139-3.37-.115-.472-.286-.83-.525-1.097a3.373 3.373 0 00-.776-.633c-.216-.13-.375-.254-.47-.369-.027-.032-.088-.136-.088-.416 0-.288.09-.471.293-.596.454-.28.781-.522.998-.746.244-.251.415-.565.51-.931.084-.328.132-.788.148-1.407.015-.58.03-1.305.049-2.177.016-.706.229-1.25.654-1.666.426-.416.988-.618 1.719-.618zm12.153 0c.477 0 .898.095 1.25.282.348.185.612.442.813.785.2.343.305.746.31 1.197.048 2.666.098 3.199.139 3.37.115.472.286.83.525 1.097.216.24.476.452.776.633.217.131.376.255.47.369.027.032.088.136.088.416 0 .287-.09.471-.293.596-.454.28-.78.522-.998.746-.243.25-.415.565-.51.931-.084.328-.132.788-.148 1.407-.015.58-.03 1.305-.049 2.177-.016.706-.229 1.25-.654 1.666-.426.416-.988.618-1.719.618-.307 0-.533-.058-.672-.172-.116-.096-.168-.24-.168-.453 0-.135.021-.253.069-.36a.512.512 0 01.14-.201.353.353 0 01.182-.07c.31-.042.543-.095.713-.164.238-.099.424-.284.54-.538.094-.201.152-.468.177-.816.021-.301.033-.727.033-1.295.012-.796.058-1.42.137-1.86.07-.397.204-.74.398-1.019.196-.281.499-.552.898-.804l.616-.39-.616-.386a3.412 3.412 0 01-.695-.558 2.275 2.275 0 01-.416-.672 3.871 3.871 0 01-.246-1.004 12.22 12.22 0 01-.078-1.47c0-.587-.012-1.025-.037-1.34-.03-.367-.092-.64-.194-.835a1.021 1.021 0 00-.539-.496 2.76 2.76 0 00-.691-.148.4.4 0 01-.268-.16c-.082-.1-.123-.259-.123-.471 0-.308.064-.608.84-.608zm-6.29 1.348c.052-.005.341-.005.394 0v.01a1.524 1.524 0 011.287 1.457c0 .62-.332.891-.332.916-.33.346-.123.744.467.695 0 0 2.4.012 2.445 0a.576.576 0 01.422.555l-.002 2.574c-.106.3-.396.36-.658.111-.025 0-.296-.332-.916-.332a1.521 1.521 0 00-1.457 1.286h-.008a4.897 4.897 0 000 .394h.008a1.524 1.524 0 001.457 1.287c.62 0 .89-.332.916-.332.27-.256.557-.225.658.112v2.783a.562.562 0 01-.563.562H8.061a.561.561 0 01-.563-.562V8.836c0-.261.18-.492.422-.555.046.012 2.443 0 2.443 0 .659.032.798-.349.469-.695 0-.025-.332-.296-.332-.916a1.521 1.521 0 011.285-1.457v-.01z",
    strokeWidth: ".75"
  }));
});

/***/ }),

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

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__("hlFM");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__("Z3vd");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createMuiTheme.js + 14 modules
var createMuiTheme = __webpack_require__("viY9");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js + 1 modules
var responsiveFontSizes = __webpack_require__("q4d2");

// EXTERNAL MODULE: ./src/components/ui/ThemedLayout.tsx + 16 modules
var ThemedLayout = __webpack_require__("kxJ/");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./src/components/icons/MakeCodeIcon.tsx
var MakeCodeIcon = __webpack_require__("DzGZ");

// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__("qhky");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/makecode.ts
var makecode = __webpack_require__("ys11");

// EXTERNAL MODULE: ./src/components/dashboard/Dashboard.tsx + 2 modules
var Dashboard = __webpack_require__("tfF2");

// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__("UJQR");

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
  return Object(utils["O" /* strcmp */])(l.deviceId, r.deviceId);
} // hide the makecode device itself and power devices


var ignoredServices = [constants["Gd" /* SRV_CONTROL */], constants["Ud" /* SRV_LOGGER */], constants["me" /* SRV_SETTINGS */], constants["ie" /* SRV_ROLE_MANAGER */], constants["ae" /* SRV_POWER */]];

var deviceFilter = function deviceFilter(device) {
  return !!device.serviceClasses.filter(function (sc) {
    return ignoredServices.indexOf(sc) < 0;
  }).length;
};

function Carousel() {
  var devices = Object(useDevices["a" /* default */])({
    announced: true,
    ignoreSelf: true
  }).filter(deviceFilter);
  var extensions = Object(utils["X" /* unique */])(Object(utils["f" /* arrayConcatMany */])(devices.map(function (device) {
    return device.services().map(function (srv) {
      return Object(makecode["c" /* resolveMakecodeServiceFromClassIdentifier */])(srv.serviceClass);
    }).map(function (info) {
      return info === null || info === void 0 ? void 0 : info.client.repo;
    }).filter(function (q) {
      return !!q;
    });
  })));

  var handleAdd = function handleAdd() {
    // list all devices connected to the bus
    // and query for them, let makecode show the missing ones
    // send message to makecode
    window.parent.postMessage({
      type: "addextensions",
      extensions: extensions,
      broadcast: true
    }, "*");
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Dashboard["a" /* default */], {
    showHeader: false,
    deviceSort: deviceSort,
    deviceFilter: deviceFilter
  }), !!(extensions !== null && extensions !== void 0 && extensions.length) && /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    m: 1
  }, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    size: "medium",
    color: "primary",
    variant: "contained",
    startIcon: /*#__PURE__*/react_default.a.createElement(MakeCodeIcon["a" /* default */], null),
    onClick: handleAdd,
    "aria-label": "Add blocks"
  }, "Add blocks")));
}

function Page() {
  var rawTheme = Object(createMuiTheme["a" /* default */])({
    palette: {
      primary: {
        main: "#63c"
      },
      secondary: {
        main: "#ffc400"
      },
      contrastThreshold: 5.1
    }
  });
  var theme = Object(responsiveFontSizes["a" /* default */])(rawTheme);
  return /*#__PURE__*/react_default.a.createElement(ThemedLayout["a" /* default */], {
    theme: theme
  }, /*#__PURE__*/react_default.a.createElement(Helmet["b" /* default */], null, /*#__PURE__*/react_default.a.createElement("style", null, "\nhtml {\n    margin-right: 4px;\n    overflow-y: auto !important;\n}\nhtml, body {\n    background: transparent !important;\n}\n")), /*#__PURE__*/react_default.a.createElement(Carousel, null));
}
// CONCATENATED MODULE: ./src/pages/tools/makecode-sim.tsx


function makecode_sim_Page() {
  return /*#__PURE__*/react_default.a.createElement(Page, null);
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
  if (!action && !children) return null;
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

// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__("9pTp");

// EXTERNAL MODULE: ./src/jacdac/ConnectButtons.tsx
var ConnectButtons = __webpack_require__("j06+");

// CONCATENATED MODULE: ./src/components/dashboard/Dashboard.tsx












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
  return Object(utils["O" /* strcmp */])(l.deviceId, r.deviceId);
} // eslint-disable-next-line @typescript-eslint/no-unused-vars


function defaultDeviceFilter(d) {
  return true;
}

function Dashboard(props) {
  var showConnect = props.showConnect,
      _props$deviceSort = props.deviceSort,
      deviceSort = _props$deviceSort === void 0 ? defaultDeviceSort : _props$deviceSort,
      _props$deviceFilter = props.deviceFilter,
      deviceFilter = _props$deviceFilter === void 0 ? defaultDeviceFilter : _props$deviceFilter,
      other = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["showConnect", "deviceSort", "deviceFilter"]);

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

  var _splitFilter = Object(utils["N" /* splitFilter */])(devices, function (d) {
    return !!bus.deviceHost(d.deviceId);
  }),
      hosted = _splitFilter[0],
      physicals = _splitFilter[1];

  var handleClearSimulators = function handleClearSimulators() {
    bus.deviceHosts().forEach(function (dev) {
      return bus.removeDeviceHost(dev);
    });
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(DeviceGroup, Object.assign({
    title: "Simulators",
    action: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(IconButtonWithTooltip["a" /* default */], {
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

/***/ "xCA3":
/***/ (function(module) {

module.exports = JSON.parse("[{\"service\":\"accelerometer\",\"client\":{\"name\":\"jacdac-accelerometer\",\"repo\":\"microsoft/pxt-jacdac/accelerometer\",\"qName\":\"modules.AccelerometerClient\",\"default\":\"modules.accelerometer\"}},{\"service\":\"barometer\",\"client\":{\"name\":\"jacdac-barometer\",\"repo\":\"microsoft/pxt-jacdac/barometer\",\"qName\":\"modules.BarometerClient\",\"default\":\"modules.barometer\"}},{\"service\":\"button\",\"client\":{\"name\":\"jacdac-button\",\"repo\":\"microsoft/pxt-jacdac/button\",\"qName\":\"modules.ButtonClient\",\"default\":\"modules.button\"}},{\"service\":\"buzzer\",\"client\":{\"name\":\"jacdac-buzzer\",\"repo\":\"microsoft/pxt-jacdac/buzzer\",\"qName\":\"modules.BuzzerClient\",\"default\":\"modules.buzzer\"}},{\"service\":\"characterscreen\",\"client\":{\"name\":\"jacdac-character-screen\",\"repo\":\"microsoft/pxt-jacdac/character-screen\",\"qName\":\"modules.CharacterScreenClient\",\"default\":\"modules.characterScreen\"}},{\"service\":\"compass\",\"client\":{\"name\":\"jacdac-compass\",\"repo\":\"microsoft/pxt-jacdac/compass\",\"qName\":\"modules.CompassClient\",\"default\":\"modules.compass\"}},{\"service\":\"distance\",\"client\":{\"name\":\"jacdac-distance\",\"repo\":\"microsoft/pxt-jacdac/distance\",\"qName\":\"modules.DistanceClient\",\"default\":\"modules.distance\"}},{\"service\":\"dmx\",\"client\":{\"name\":\"jacdac-dmx\",\"repo\":\"microsoft/pxt-jacdac/dmx\",\"qName\":\"modules.DmxClient\",\"default\":\"modules.dmx\"}},{\"service\":\"eco2\",\"client\":{\"name\":\"jacdac-e-co2\",\"repo\":\"microsoft/pxt-jacdac/e-co2\",\"qName\":\"modules.ECO2Client\",\"default\":\"modules.eCO2\"}},{\"service\":\"gyroscope\",\"client\":{\"name\":\"jacdac-gyroscope\",\"repo\":\"microsoft/pxt-jacdac/gyroscope\",\"qName\":\"modules.GyroscopeClient\",\"default\":\"modules.gyroscope\"}},{\"service\":\"heartrate\",\"client\":{\"name\":\"jacdac-heart-rate\",\"repo\":\"microsoft/pxt-jacdac/heart-rate\",\"qName\":\"modules.HeartRateClient\",\"default\":\"modules.heartRate\"}},{\"service\":\"humidity\",\"client\":{\"name\":\"jacdac-humidity\",\"repo\":\"microsoft/pxt-jacdac/humidity\",\"qName\":\"modules.HumidityClient\",\"default\":\"modules.humidity\"}},{\"service\":\"illuminance\",\"client\":{\"name\":\"jacdac-illuminance\",\"repo\":\"microsoft/pxt-jacdac/illuminance\",\"qName\":\"modules.IlluminanceClient\",\"default\":\"modules.illuminance\"}},{\"service\":\"joystick\",\"client\":{\"name\":\"jacdac-joystick\",\"repo\":\"microsoft/pxt-jacdac/joystick\",\"qName\":\"modules.JoystickClient\",\"default\":\"modules.joystick\"}},{\"service\":\"led\",\"client\":{\"name\":\"jacdac-led\",\"repo\":\"microsoft/pxt-jacdac/led\",\"qName\":\"modules.LedClient\",\"default\":\"modules.led\"}},{\"service\":\"ledpixel\",\"client\":{\"name\":\"jacdac-led-pixel\",\"repo\":\"microsoft/pxt-jacdac/led-pixel\",\"qName\":\"modules.LedPixelClient\",\"default\":\"modules.ledPixel\"}},{\"service\":\"lightlevel\",\"client\":{\"name\":\"jacdac-light-level\",\"repo\":\"microsoft/pxt-jacdac/light-level\",\"qName\":\"modules.LightLevelClient\",\"default\":\"modules.lightLevel\"}},{\"service\":\"magnetomer\",\"client\":{\"name\":\"jacdac-magnetometer\",\"repo\":\"microsoft/pxt-jacdac/magnetometer\",\"qName\":\"modules.MagnetometerClient\",\"default\":\"modules.magnetometer\"}},{\"service\":\"modelrunner\",\"client\":{\"name\":\"jacdac-model-runner\",\"repo\":\"microsoft/pxt-jacdac/model-runner\",\"qName\":\"modules.ModelRunnerClient\",\"default\":\"modules.modelRunner\"}},{\"service\":\"motion\",\"client\":{\"name\":\"jacdac-motion\",\"repo\":\"microsoft/pxt-jacdac/motion\",\"qName\":\"modules.MotionClient\",\"default\":\"modules.motion\"}},{\"service\":\"motor\",\"client\":{\"name\":\"jacdac-motor\",\"repo\":\"microsoft/pxt-jacdac/motor\",\"qName\":\"modules.MotorClient\",\"default\":\"modules.motor\"}},{\"service\":\"multitouch\",\"client\":{\"name\":\"jacdac-multitouch\",\"repo\":\"microsoft/pxt-jacdac/multitouch\",\"qName\":\"modules.MultitouchClient\",\"default\":\"modules.multitouch\"}},{\"service\":\"potentiometer\",\"client\":{\"name\":\"jacdac-potentiometer\",\"repo\":\"microsoft/pxt-jacdac/potentiometer\",\"qName\":\"modules.PotentiometerClient\",\"default\":\"modules.potentiometer\"}},{\"service\":\"pulseoximeter\",\"client\":{\"name\":\"jacdac-pulse-oximeter\",\"repo\":\"microsoft/pxt-jacdac/pulse-oximeter\",\"qName\":\"modules.PulseOximeterClient\",\"default\":\"modules.pulseOximeter\"}},{\"service\":\"raingauge\",\"client\":{\"name\":\"jacdac-rain-gauge\",\"repo\":\"microsoft/pxt-jacdac/rain-gauge\",\"qName\":\"modules.RainGaugeClient\",\"default\":\"modules.rainGauge\"}},{\"service\":\"realtimeclock\",\"client\":{\"name\":\"jacdac-real-time-clock\",\"repo\":\"microsoft/pxt-jacdac/real-time-clock\",\"qName\":\"modules.RealTimeClockClient\",\"default\":\"modules.realTimeClock\"}},{\"service\":\"reflectedlight\",\"client\":{\"name\":\"jacdac-reflected-light\",\"repo\":\"microsoft/pxt-jacdac/reflected-light\",\"qName\":\"modules.ReflectedLightClient\",\"default\":\"modules.reflectedLight\"}},{\"service\":\"rotaryencoder\",\"client\":{\"name\":\"jacdac-rotary-encoder\",\"repo\":\"microsoft/pxt-jacdac/rotary-encoder\",\"qName\":\"modules.RotaryEncoderClient\",\"default\":\"modules.rotaryEncoder\"}},{\"service\":\"sensoraggregator\",\"client\":{\"name\":\"jacdac-sensor-aggregator\",\"repo\":\"microsoft/pxt-jacdac/sensor-aggregator\",\"qName\":\"modules.SensorAggregatorClient\",\"default\":\"modules.sensorAggregator\"}},{\"service\":\"servo\",\"client\":{\"name\":\"jacdac-servo\",\"repo\":\"microsoft/pxt-jacdac/servo\",\"qName\":\"modules.ServoClient\",\"default\":\"modules.servo\"}},{\"service\":\"settings\",\"client\":{\"name\":\"jacdac-settings\",\"repo\":\"microsoft/pxt-jacdac/settings\",\"qName\":\"modules.SettingsClient\",\"default\":\"modules.settings\"}},{\"service\":\"soilmoisture\",\"client\":{\"name\":\"jacdac-soil-moisture\",\"repo\":\"microsoft/pxt-jacdac/soil-moisture\",\"qName\":\"modules.SoilMoistureClient\",\"default\":\"modules.soilMoisture\"}},{\"service\":\"solenoid\",\"client\":{\"name\":\"jacdac-solenoid\",\"repo\":\"microsoft/pxt-jacdac/solenoid\",\"qName\":\"modules.SolenoidClient\",\"default\":\"modules.solenoid\"}},{\"service\":\"tcp\",\"client\":{\"name\":\"jacdac-tcp\",\"repo\":\"microsoft/pxt-jacdac/tcp\",\"qName\":\"modules.TcpClient\",\"default\":\"modules.tcp\"}},{\"service\":\"thermocouple\",\"client\":{\"name\":\"jacdac-thermocouple\",\"repo\":\"microsoft/pxt-jacdac/thermocouple\",\"qName\":\"modules.ThermocoupleClient\",\"default\":\"modules.thermocouple\"}},{\"service\":\"thermometer\",\"client\":{\"name\":\"jacdac-thermometer\",\"repo\":\"microsoft/pxt-jacdac/thermometer\",\"qName\":\"modules.ThermometerClient\",\"default\":\"modules.thermometer\"}},{\"service\":\"tvoc\",\"client\":{\"name\":\"jacdac-tvoc\",\"repo\":\"microsoft/pxt-jacdac/tvoc\",\"qName\":\"modules.TvocClient\",\"default\":\"modules.tvoc\"}},{\"service\":\"uvindex\",\"client\":{\"name\":\"jacdac-uv-index\",\"repo\":\"microsoft/pxt-jacdac/uv-index\",\"qName\":\"modules.UvIndexClient\",\"default\":\"modules.uvIndex\"}},{\"service\":\"waterlevel\",\"client\":{\"name\":\"jacdac-water-level\",\"repo\":\"microsoft/pxt-jacdac/water-level\",\"qName\":\"modules.WaterLevelClient\",\"default\":\"modules.waterLevel\"}},{\"service\":\"weightscale\",\"client\":{\"name\":\"jacdac-weight-scale\",\"repo\":\"microsoft/pxt-jacdac/weight-scale\",\"qName\":\"modules.WeightScaleClient\",\"default\":\"modules.weightScale\"}},{\"service\":\"wifi\",\"client\":{\"name\":\"jacdac-wifi\",\"repo\":\"microsoft/pxt-jacdac/wifi\",\"qName\":\"modules.WifiClient\",\"default\":\"modules.wifi\"}},{\"service\":\"winddirection\",\"client\":{\"name\":\"jacdac-wind-direction\",\"repo\":\"microsoft/pxt-jacdac/wind-direction\",\"qName\":\"modules.WindDirectionClient\",\"default\":\"modules.windDirection\"}},{\"service\":\"windspeed\",\"client\":{\"name\":\"jacdac-wind-speed\",\"repo\":\"microsoft/pxt-jacdac/wind-speed\",\"qName\":\"modules.WindSpeedClient\",\"default\":\"modules.windSpeed\"}}]");

/***/ }),

/***/ "ys11":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeCodeServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resolveMakecodeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return resolveMakecodeServiceFromClassIdentifier; });
/* harmony import */ var _jacdac_spec_services_makecode_extensions_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xCA3");
var _jacdac_spec_services_makecode_extensions_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t("xCA3", 1);
/* harmony import */ var _spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Z8Ma");


function makeCodeServices() {
  return _jacdac_spec_services_makecode_extensions_json__WEBPACK_IMPORTED_MODULE_0__.slice(0);
}
function resolveMakecodeService(service) {
  return service && _jacdac_spec_services_makecode_extensions_json__WEBPACK_IMPORTED_MODULE_0__.find(function (mk) {
    return mk.service === service.shortId;
  });
}
function resolveMakecodeServiceFromClassIdentifier(serviceClass) {
  var srv = Object(_spec__WEBPACK_IMPORTED_MODULE_1__[/* serviceSpecificationFromClassIdentifier */ "D"])(serviceClass);
  return srv && resolveMakecodeService(srv);
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
//# sourceMappingURL=component---src-pages-tools-makecode-sim-tsx-000e604299cfcd51857e.js.map