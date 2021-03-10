(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

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

/***/ "mzE5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Page; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__("tr08");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__("lopY");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

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

// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__("FQT7");

// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__("UJQR");

// EXTERNAL MODULE: ./src/components/layout.tsx + 35 modules
var layout = __webpack_require__("9Dj+");

// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__("yNWl");

// EXTERNAL MODULE: ./src/jacdac/ConnectButton.tsx
var ConnectButton = __webpack_require__("nyfv");

// EXTERNAL MODULE: ./src/components/AppContext.tsx + 1 modules
var AppContext = __webpack_require__("2K/c");

// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__("l6uw");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

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

  return /*#__PURE__*/react_default.a.createElement("section", null, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
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

// CONCATENATED MODULE: ./src/components/dashboard/Dashboard.tsx













 // tslint:disable-next-line: no-submodule-imports match-default-export-name



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
}

function Dashboard(props) {
  var other = Object.assign({}, props);

  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var _useContext2 = Object(react["useContext"])(AppContext["c" /* default */]),
      toggleShowDeviceHostsDialog = _useContext2.toggleShowDeviceHostsDialog;

  var devices = Object(useDevices["a" /* default */])({
    announced: true,
    ignoreSelf: true
  }).sort(deviceSort);
  var theme = Object(useTheme["a" /* default */])();
  var mobile = Object(useMediaQuery["a" /* default */])(theme.breakpoints.down(layout["c" /* MOBILE_BREAKPOINT */]));

  var _useSelectedNodes = useSelectedNodes(mobile),
      selected = _useSelectedNodes.selected,
      toggleSelected = _useSelectedNodes.toggleSelected;

  var _splitFilter = Object(utils["O" /* splitFilter */])(devices, function (d) {
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
    }, /*#__PURE__*/react_default.a.createElement(Clear_default.a, null)), "            "),
    devices: hosted,
    expanded: selected,
    toggleExpanded: toggleSelected
  }, other)), /*#__PURE__*/react_default.a.createElement(DeviceGroup, Object.assign({
    title: "Devices",
    action: /*#__PURE__*/react_default.a.createElement(ConnectButton["a" /* default */], {
      full: false,
      transparent: true,
      showAlways: true
    }),
    devices: physicals,
    expanded: selected,
    toggleExpanded: toggleSelected
  }, other), !physicals.length && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "info"
  }, "Please ", /*#__PURE__*/react_default.a.createElement(ConnectButton["a" /* default */], {
    showAlways: true,
    full: true,
    transparent: true
  }), " to see your physical devices."))));
}
// CONCATENATED MODULE: ./src/pages/dashboard.tsx


function Page() {
  return /*#__PURE__*/react_default.a.createElement(Dashboard, {
    showAvatar: true,
    showHeader: true
  });
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-dashboard-tsx-e840b49cdfe315a63eb2.js.map