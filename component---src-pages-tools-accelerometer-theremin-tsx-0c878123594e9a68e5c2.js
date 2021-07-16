(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5023],{

/***/ 88880:
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports.Z = _default;

/***/ }),

/***/ 66717:
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
  d: "M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"
}), 'Devices');

exports.Z = _default;

/***/ }),

/***/ 94431:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ConnectAlert; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33287);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13173);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20392);
/* harmony import */ var _buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84125);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42862);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54774);
// tslint:disable-next-line: no-submodule-imports
 // tslint:disable-next-line: no-submodule-imports








var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({
    button: {
      marginLeft: theme.spacing(2)
    }
  });
});

function NoSsrConnectAlert(props) {
  var classes = useStyles();
  var serviceClass = props.serviceClass,
      closeable = props.closeable;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z),
      bus = _useContext.bus;

  var transports = bus.transports;
  var devices = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(bus, function (b) {
    return b.devices({
      serviceClass: serviceClass,
      ignoreSelf: true
    });
  });
  var spec = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass); // don't show if no transport, some devices

  if (!transports.length || devices !== null && devices !== void 0 && devices.length) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    displayPrint: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    severity: "info",
    closeable: closeable
  }, !spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect your device?"), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect a ", spec.name, " device?"), transports.map(function (transport) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      key: transport.type,
      transport: transport,
      className: classes.button,
      full: true,
      transparent: true
    });
  })));
}

function ConnectAlert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(NoSsrConnectAlert, props));
}

/***/ }),

/***/ 65063:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Dashboard; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(19756);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/jacdac/useSelectedNodes.ts

function useSelectedNodes(singleSelection) {
  var nodes = (0,react.useRef)(new Set());

  var _useState = (0,react.useState)(0),
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
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__(53074);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
// EXTERNAL MODULE: ./src/components/ui/GridHeader.tsx
var GridHeader = __webpack_require__(95393);
// EXTERNAL MODULE: ./src/components/dashboard/DashboardDeviceItem.tsx
var DashboardDeviceItem = __webpack_require__(24301);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardDeviceGroup.tsx

var _excluded = ["title", "action", "devices", "expanded", "toggleExpanded", "children"];





function DeviceGroup(props) {
  var title = props.title,
      action = props.action,
      devices = props.devices,
      expanded = props.expanded,
      toggleExpanded = props.toggleExpanded,
      children = props.children,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var handleExpand = function handleExpand(device) {
    return function () {
      return toggleExpanded(device);
    };
  };

  var sectionId = (0,react_use_id_hook_esm/* useId */.Me)();
  if (!action && !(devices !== null && devices !== void 0 && devices.length)) return null;
  return /*#__PURE__*/react.createElement("section", {
    id: sectionId
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(GridHeader/* default */.Z, {
    title: title,
    action: action
  }), devices === null || devices === void 0 ? void 0 : devices.map(function (device) {
    return /*#__PURE__*/react.createElement(DashboardDeviceItem/* default */.Z, Object.assign({
      key: device.id,
      device: device,
      expanded: expanded(device),
      toggleExpanded: handleExpand(device)
    }, other));
  }), children));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(88880);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Clear.js
var Clear = __webpack_require__(58590);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Devices.js
var Devices = __webpack_require__(66717);
// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__(94431);
// EXTERNAL MODULE: ./src/components/buttons/ConnectButtons.tsx
var ConnectButtons = __webpack_require__(45608);
// EXTERNAL MODULE: ./src/components/services/useRoleManagerClient.ts
var useRoleManagerClient = __webpack_require__(39922);
// EXTERNAL MODULE: ./src/components/hooks/useMediaQueries.tsx
var useMediaQueries = __webpack_require__(20509);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 24 modules
var servers = __webpack_require__(48363);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
;// CONCATENATED MODULE: ./src/components/alert/SimulateDeviceAlert.tsx








function SimulateDeviceHint() {
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var handleStartSimulator = function handleStartSimulator(serviceClass) {
    return function () {
      return (0,servers/* startServiceProviderFromServiceClass */.V6)(bus, serviceClass);
    };
  };

  var _useContext2 = (0,react.useContext)(AppContext/* default */.ZP),
      toggleShowDeviceHostsDialog = _useContext2.toggleShowDeviceHostsDialog;

  return /*#__PURE__*/react.createElement(react.Fragment, null, "Simulate devices (", /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    onClick: handleStartSimulator(constants/* SRV_BUTTON */.XJR),
    title: "button",
    "aria-label": "start button simulator"
  }, /*#__PURE__*/react.createElement("span", {
    "aria-label": "button emoji",
    role: "img"
  }, "\uD83D\uDD18")), ",", /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    onClick: handleStartSimulator(constants/* SRV_BUZZER */.J1$),
    title: "buzzer",
    "aria-label": "start buzzer simulator"
  }, /*#__PURE__*/react.createElement("span", {
    "aria-label": "piano emoji",
    role: "img"
  }, "\uD83C\uDFB9")), /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    onClick: handleStartSimulator(constants/* SRV_JOYSTICK */.vRO),
    title: "joystick",
    "aria-label": "start joystick simulator"
  }, /*#__PURE__*/react.createElement("span", {
    "aria-label": "joystick emoji",
    role: "img"
  }, "\uD83D\uDD79\uFE0F")), ",", /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    onClick: handleStartSimulator(constants/* SRV_LED */.i04),
    title: "LED",
    "aria-label": "start LED simulator"
  }, /*#__PURE__*/react.createElement("span", {
    "aria-label": "lightbulb emoji",
    role: "img"
  }, "\uD83D\uDCA1")), ",", /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    onClick: handleStartSimulator(constants/* SRV_TRAFFIC_LIGHT */.jHN),
    title: "traffic light",
    "aria-label": "start traffic light simulator"
  }, /*#__PURE__*/react.createElement("span", {
    "aria-label": "traffic light emoji",
    role: "img"
  }, "\uD83D\uDEA6")), ", ...) by clicking \xA0", /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "start simulator",
    onClick: toggleShowDeviceHostsDialog
  }, /*#__PURE__*/react.createElement(Add/* default */.Z, null)), ".");
}
function SimulateDeviceAlert() {
  return /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, /*#__PURE__*/react.createElement(SimulateDeviceHint, null));
}
;// CONCATENATED MODULE: ./src/components/dashboard/Dashboard.tsx

var Dashboard_excluded = ["showConnect", "showStartSimulators", "deviceSort", "deviceFilter"];










 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name








function defaultDeviceSort(l, r) {
  var srvScore = function srvScore(srv) {
    return srv.packets.reduce(function (prev, pkt) {
      return prev + ((0,spec/* isReading */.vz)(pkt) ? 10 : (0,spec/* isValueOrIntensity */.sX)(pkt) ? 1 : 0);
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
  return (0,utils/* strcmp */.eT)(l.deviceId, r.deviceId);
} // eslint-disable-next-line @typescript-eslint/no-unused-vars


function defaultDeviceFilter(d) {
  return true;
}

function Dashboard(props) {
  var showConnect = props.showConnect,
      showStartSimulators = props.showStartSimulators,
      _props$deviceSort = props.deviceSort,
      deviceSort = _props$deviceSort === void 0 ? defaultDeviceSort : _props$deviceSort,
      _props$deviceFilter = props.deviceFilter,
      deviceFilter = _props$deviceFilter === void 0 ? defaultDeviceFilter : _props$deviceFilter,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, Dashboard_excluded);

  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var _useContext2 = (0,react.useContext)(AppContext/* default */.ZP),
      toggleShowDeviceHostsDialog = _useContext2.toggleShowDeviceHostsDialog;

  var devices = (0,useDevices/* default */.Z)({
    announced: true,
    ignoreSelf: true
  }).filter(deviceFilter).sort(deviceSort);

  var _useMediaQueries = (0,useMediaQueries/* default */.Z)(),
      mobile = _useMediaQueries.mobile;

  var _useSelectedNodes = useSelectedNodes(mobile),
      selected = _useSelectedNodes.selected,
      toggleSelected = _useSelectedNodes.toggleSelected;

  var _splitFilter = (0,utils/* splitFilter */.ap)(devices, function (d) {
    return !!bus.findServiceProvider(d.deviceId);
  }),
      simulators = _splitFilter[0],
      physicals = _splitFilter[1];

  var roleManager = (0,useRoleManagerClient/* default */.Z)();

  var handleClearSimulators = function handleClearSimulators() {
    bus.serviceProviders().forEach(function (dev) {
      return bus.removeServiceProvider(dev);
    });
  };

  var handleStartSimulators = function handleStartSimulators() {
    return roleManager === null || roleManager === void 0 ? void 0 : roleManager.startSimulators();
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(DeviceGroup, Object.assign({
    title: "Simulators",
    action: /*#__PURE__*/react.createElement(react.Fragment, null, showStartSimulators && !!roleManager && /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
      title: "start missing simulators",
      onClick: handleStartSimulators
    }, /*#__PURE__*/react.createElement(Devices/* default */.Z, null)), /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
      title: "start simulator",
      onClick: toggleShowDeviceHostsDialog
    }, /*#__PURE__*/react.createElement(Add/* default */.Z, null)), /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
      title: "clear simulators",
      onClick: handleClearSimulators
    }, /*#__PURE__*/react.createElement(Clear/* default */.Z, null)), " "),
    devices: simulators,
    expanded: selected,
    toggleExpanded: toggleSelected
  }, other), showStartSimulators && !(simulators !== null && simulators !== void 0 && simulators.length) && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(SimulateDeviceAlert, null))), /*#__PURE__*/react.createElement(DeviceGroup, Object.assign({
    title: "Devices",
    action: showConnect && /*#__PURE__*/react.createElement(ConnectButtons/* default */.Z, {
      full: false,
      transparent: true
    }),
    devices: physicals,
    expanded: selected,
    toggleExpanded: toggleSelected
  }, other), showConnect && !physicals.length && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(ConnectAlert/* default */.Z, {
    closeable: true
  }))));
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

var _excluded = ["device", "expanded", "toggleExpanded", "variant"];






function DashboardDeviceItem(props) {
  var device = props.device,
      expanded = props.expanded,
      toggleExpanded = props.toggleExpanded,
      variant = props.variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(props, _excluded);

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_4__/* .default */ .ZP),
      drawerType = _useContext.drawerType;

  var breakpoints = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(device, function () {
    var breakpointWeight = device.services().map(function (srv) {
      return (0,_DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_3__/* .dashboardServiceWeight */ .o2)(srv) || (srv.readingRegister || srv.valueRegister || srv.intensityRegister ? 1 : 0);
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

/***/ 2928:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServices; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54774);



function useServices(options) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z),
      bus = _useContext.bus;

  var services = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(bus, function (b) {
    return b.services(options);
  }, [JSON.stringify(options)]);
  return services;
}

/***/ }),

/***/ 95393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ GridHeader; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33287);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4998);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);



var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    container: true,
    direction: "row",
    spacing: 1,
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.hr, classes.start)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true
  }, action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    component: "span",
    mr: 1
  }, action), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    component: "span",
    variant: variant || "subtitle1"
  }, title), count !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    component: "span",
    ml: 0.5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    label: count
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: classes.hr
  }))));
}

/***/ }),

/***/ 82702:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AccelerometerTheremin; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/hooks/useServices.ts
var useServices = __webpack_require__(2928);
// EXTERNAL MODULE: ./src/components/ui/GridHeader.tsx
var GridHeader = __webpack_require__(95393);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(29114);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(31186);
// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__(94431);
// EXTERNAL MODULE: ./src/components/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__(31477);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 24 modules
var servers = __webpack_require__(48363);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__(57683);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/buzzerserver.ts
var buzzerserver = __webpack_require__(69589);
// EXTERNAL MODULE: ./src/components/ui/WebAudioContext.tsx
var WebAudioContext = __webpack_require__(94564);
;// CONCATENATED MODULE: ./src/components/hooks/usePlayTone.tsx










function usePlayTone() {
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var buzzers = (0,useServices/* default */.Z)({
    serviceClass: constants/* SRV_BUZZER */.J1$
  });

  var _useState = (0,react.useState)(),
      buzzerServer = _useState[0],
      setBuzzerServer = _useState[1];

  var _useContext2 = (0,react.useContext)(WebAudioContext/* default */.ZP),
      playTone = _useContext2.playTone,
      onClickActivateAudioContext = _useContext2.onClickActivateAudioContext,
      activated = _useContext2.activated; // useEffect invokes a function call whenever the variables
  // (passed as an array) change.
  // if clean up is required, return a clean up callback
  //
  // listen for playTone commands from the buzzer via subscribe
  // subscribe returns a clean up function that is invoked when the user
  // browses away from the page.
  // playtone uses the audio context set in handleBrowserAudioEnable


  (0,react.useEffect)(function () {
    return buzzerServer === null || buzzerServer === void 0 ? void 0 : buzzerServer.subscribe(buzzerserver/* default.PLAY_TONE */.Z.PLAY_TONE, function (_ref) {
      var frequency = _ref.frequency,
          duration = _ref.duration,
          volume = _ref.volume;
      return playTone(frequency, duration, volume);
    });
  }, [buzzerServer]); // clean out buzzer server on page close.
  // defines an empty function that returns a function.
  // invoked each time buzzerServer changes

  (0,react.useEffect)(function () {
    return function () {
      return (buzzerServer === null || buzzerServer === void 0 ? void 0 : buzzerServer.device) && bus.removeServiceProvider(buzzerServer.device);
    };
  }, [buzzerServer]); // when start browser audio button is clicked:
  // get a browser audio context
  // spin up a virtual buzzer that we latermap to the browser audio engine

  var toggleBrowserAudio = function toggleBrowserAudio() {
    // browser security dictates that the audio context be used within a click event
    // must be done once to allow background sounds
    onClickActivateAudioContext();

    if (!buzzerServer) {
      var dev = (0,servers/* startServiceProviderFromServiceClass */.V6)(bus, constants/* SRV_BUZZER */.J1$);
      var srv = dev.services().find(function (s) {
        return s.serviceClass === constants/* SRV_BUZZER */.J1$;
      });
      setBuzzerServer(srv);
    } else {
      setBuzzerServer(undefined);
    }
  };

  var buzzerPlayTone = (0,react.useCallback)( /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(frequency, duration, volume) {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Promise.all( // for each buzzer, map x acceleration to buzzer output
              buzzers === null || buzzers === void 0 ? void 0 : buzzers.map( /*#__PURE__*/function () {
                var _ref3 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(buzzer) {
                  var pkt;
                  return regenerator_default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          pkt = packet/* default.from */.Z.from(constants/* BuzzerCmd.PlayTone */.Rv2.PlayTone, (0,buzzerserver/* tonePayload */.x)(frequency, duration, volume));
                          _context.next = 3;
                          return buzzer.sendPacketAsync(pkt);

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x4) {
                  return _ref3.apply(this, arguments);
                };
              }()));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }(), [buzzers]);
  var browserAudio = activated && !!buzzerServer;
  return {
    playTone: buzzerPlayTone,
    toggleBrowserAudio: toggleBrowserAudio,
    browserAudio: browserAudio
  };
}
// EXTERNAL MODULE: ./src/components/dashboard/Dashboard.tsx + 3 modules
var Dashboard = __webpack_require__(65063);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
;// CONCATENATED MODULE: ./src/pages/tools/accelerometer-theremin.tsx














var TONE_DURATION = 50;
var TONE_THROTTLE = 100; // this is a React component that gets run numerous time,
// whenever a change is detected in the React state
// for example, useServices is a hook that tracks the accelerometer services,
// so it will render again and update the accelerometers array whenever the bus connects/disconnects
// an accelerometer

function AccelerometerTheremin() {
  var _usePlayTone = usePlayTone(),
      playTone = _usePlayTone.playTone,
      toggleBrowserAudio = _usePlayTone.toggleBrowserAudio,
      browserAudio = _usePlayTone.browserAudio; // identifiers for accessibility


  var sectionId = (0,react_use_id_hook_esm/* useId */.Me)(); // useServices accepts a number of filters and returns any services that match
  // get all accelerometer + buzzer services
  // under the hood, it uses the bus and events.

  var accelerometers = (0,useServices/* default */.Z)({
    serviceClass: constants/* SRV_ACCELEROMETER */.QF7
  }); // create two state variables to hold the service selected as our accelerometer
  // and the virtual buzzerServer created when someone turns audio on on the page
  // when using setAccelService/setBuzzerServer, React will render again this component

  var _useState = (0,react.useState)(),
      accelService = _useState[0],
      setAccelService = _useState[1]; // use a closure to capture accel variable
  // act as a toggle for the button the indicates streaming state.


  var handleSelectAccelerometerService = function handleSelectAccelerometerService(accel) {
    return function () {
      accelService == accel ? setAccelService(undefined) : setAccelService(accel);
    };
  }; // filter to only show accelerometers in dashboard


  var dashboardDeviceFilter = function dashboardDeviceFilter(d) {
    return d.hasService(constants/* SRV_ACCELEROMETER */.QF7);
  }; // register for accelerometer data events


  (0,react.useEffect)(function () {
    // ?. checks that the callee is defined
    var unsubs = accelService === null || accelService === void 0 ? void 0 : accelService.readingRegister.subscribe(constants/* REPORT_UPDATE */.rGZ, // don't trigger more than every 100ms
    (0,utils/* throttle */.P2)( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var _accelService$reading, x;

      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // get x acceleration data
              _accelService$reading = accelService.readingRegister.unpackedValue, x = _accelService$reading[0]; // get all acceleration data
              // const [x, y, z] = accelService.readingRegister.unpackedValue

              _context.next = 3;
              return playTone(1000 + x * 1000, TONE_DURATION, 1);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })), TONE_THROTTLE)); // cleanup callback

    return function () {
      return unsubs === null || unsubs === void 0 ? void 0 : unsubs();
    };
  }, [accelService, playTone]); // re-register if accelerometers, buzzers change

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("section", {
    id: sectionId
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react.createElement(GridHeader/* default */.Z, {
    title: "Audio controls"
  }), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    variant: "outlined",
    onClick: toggleBrowserAudio
  }, browserAudio ? "Stop browser audio" : "Start browser audio")), !accelerometers.length && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(GridHeader/* default */.Z, {
    title: "Connect a device"
  }), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react.createElement(ConnectAlert/* default */.Z, {
    serviceClass: constants/* SRV_ACCELEROMETER */.QF7
  }))), !!accelerometers.length && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(GridHeader/* default */.Z, {
    title: "Available accelerometers"
  }), accelerometers.map(function (accelerometer) {
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
      item: true,
      xs: 12,
      sm: 6,
      lg: 4,
      xl: 3,
      key: accelerometer.id
    }, /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(DeviceCardHeader/* default */.Z, {
      device: accelerometer.device,
      showAvatar: true,
      showMedia: true
    }), /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
      variant: "h5"
    }, (accelerometer === accelService ? "Streaming from " : "") + (accelerometer.device.physical ? "Physical " : "Virtual ") + ("Accelerometer " + accelerometer.friendlyName))), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
      variant: "outlined",
      onClick: handleSelectAccelerometerService(accelerometer)
    }, accelerometer === accelService ? "Stop streaming" : "Start streaming"))));
  })))), /*#__PURE__*/react.createElement(Dashboard/* default */.Z, {
    deviceFilter: dashboardDeviceFilter
  }));
}

/***/ })

}]);