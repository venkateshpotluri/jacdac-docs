(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6450],{

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

/***/ 58590:
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
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Clear');

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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8266);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13173);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_ConnectButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48432);
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
  var serviceClass = props.serviceClass;

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
    closeable: true
  }, !spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect your device?"), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect a ", spec.name, " device?"), transports.map(function (transport) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_jacdac_ConnectButton__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
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

/***/ 23976:
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






function DeviceGroup(props) {
  var title = props.title,
      action = props.action,
      devices = props.devices,
      expanded = props.expanded,
      toggleExpanded = props.toggleExpanded,
      children = props.children,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, ["title", "action", "devices", "expanded", "toggleExpanded", "children"]);

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
// EXTERNAL MODULE: ./src/jacdac/ConnectButtons.tsx
var ConnectButtons = __webpack_require__(68337);
// EXTERNAL MODULE: ./src/components/services/useRoleManager.ts
var useRoleManager = __webpack_require__(40549);
// EXTERNAL MODULE: ./src/components/hooks/useMediaQueries.tsx
var useMediaQueries = __webpack_require__(20509);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(6809);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
;// CONCATENATED MODULE: ./src/components/dashboard/Dashboard.tsx











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
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, ["showConnect", "showStartSimulators", "deviceSort", "deviceFilter"]);

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

  var roleManager = (0,useRoleManager/* default */.Z)();

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
  }, other), showStartSimulators && (simulators === null || simulators === void 0 ? void 0 : simulators.length) && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, "Simulate a ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, null, "button"), " or a", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, null, "servo"), "... or any other by clicking", /*#__PURE__*/react.createElement(Add/* default */.Z, null), ".")), /*#__PURE__*/react.createElement(DeviceGroup, Object.assign({
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
  }, /*#__PURE__*/react.createElement(ConnectAlert/* default */.Z, null))));
}

/***/ }),

/***/ 54886:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DashboardDevice; }
});

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(58063);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__(95823);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(29114);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__(26390);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__(47739);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandLess.js
var ExpandLess = __webpack_require__(16993);
// EXTERNAL MODULE: ./src/jacdac/useDeviceSpecification.ts
var useDeviceSpecification = __webpack_require__(77423);
// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 2 modules
var DeviceAvatar = __webpack_require__(1291);
// EXTERNAL MODULE: ./src/components/dashboard/DashboardServiceWidget.tsx + 4 modules
var DashboardServiceWidget = __webpack_require__(73205);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./src/components/services/useRoleManager.ts
var useRoleManager = __webpack_require__(40549);
;// CONCATENATED MODULE: ./src/components/services/useServiceRole.ts


function useServiceRole(service) {
  var _useState = (0,react.useState)(service === null || service === void 0 ? void 0 : service.role),
      role = _useState[0],
      setRole = _useState[1];

  (0,react.useEffect)(function () {
    return service === null || service === void 0 ? void 0 : service.subscribe(constants/* ROLE_CHANGE */.X5h, function () {
      setRole(service.role);
    });
  }, [service]);
  return role;
}
;// CONCATENATED MODULE: ./src/components/services/ServiceRole.tsx






function ServiceRole(props) {
  var service = props.service;

  var _useContext = (0,react.useContext)(AppContext/* default */.ZP),
      showSelectRoleDialog = _useContext.showSelectRoleDialog;

  var roleManager = (0,useRoleManager/* default */.Z)();
  var role = useServiceRole(service);

  var handleClick = function handleClick() {
    return showSelectRoleDialog(service);
  };

  var hasRoleForService = (0,useChange/* default */.Z)(roleManager, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.hasRoleForService(service);
  }); // hide if no role manager or role not compatible with required roles

  if (!hasRoleForService) return null;
  return /*#__PURE__*/react.createElement(Button/* default */.Z, {
    size: "small",
    onClick: handleClick
  }, role || "...");
}
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardServiceWidgetItem.tsx






function DashboardServiceWidgetItem(props) {
  var service = props.service;

  var _useRegisterUnpackedV = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(service.register(constants/* SystemReg.InstanceName */.ZJq.InstanceName), props),
      instanceName = _useRegisterUnpackedV[0];

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1,
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react.createElement(ServiceRole, {
    service: service
  })), instanceName && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    className: "no-pointer-events",
    variant: "caption",
    component: "span",
    style: {
      float: "right"
    }
  }, instanceName))), /*#__PURE__*/react.createElement(DashboardServiceWidget/* default */.ZP, props));
}
// EXTERNAL MODULE: ./src/components/DeviceActions.tsx
var DeviceActions = __webpack_require__(87993);
// EXTERNAL MODULE: ./src/components/RegisterInput.tsx + 2 modules
var RegisterInput = __webpack_require__(24162);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardServiceDetails.tsx






// filter out common registers
var ignoreRegisters = [constants/* SystemReg.StatusCode */.ZJq.StatusCode, constants/* SystemReg.StreamingPreferredInterval */.ZJq.StreamingPreferredInterval, constants/* SystemReg.StreamingSamples */.ZJq.StreamingSamples, constants/* SystemReg.StreamingInterval */.ZJq.StreamingInterval];
var collapsedRegisters = [constants/* SystemReg.Reading */.ZJq.Reading, constants/* SystemReg.Value */.ZJq.Value, constants/* SystemReg.Intensity */.ZJq.Intensity];
function DashboardServiceDetails(props) {
  var service = props.service,
      expanded = props.expanded,
      visible = props.visible;
  var specification = (0,useChange/* default */.Z)(service, function (spec) {
    return spec.specification;
  });
  var registers = (0,react.useMemo)(function () {
    var _packets$filter;

    var packets = specification === null || specification === void 0 ? void 0 : specification.packets;
    var ids = (packets === null || packets === void 0 ? void 0 : (_packets$filter = packets.filter(function (pkt) {
      return (0,spec/* isRegister */.x5)(pkt);
    })) === null || _packets$filter === void 0 ? void 0 : _packets$filter.map(function (pkt) {
      return pkt.identifier;
    })) || [];
    ids = ids.filter(function (id) {
      return ignoreRegisters.indexOf(id) < 0;
    });
    if (!expanded) // grab the first interresting register
      ids = ids.filter(function (id) {
        return collapsedRegisters.indexOf(id) > -1;
      }).slice(0, 1);
    return ids.map(function (id) {
      return service.register(id);
    }).filter(function (reg) {
      return !!reg;
    }) // hide optional const register without values
    .filter(function (reg) {
      var _reg$specification, _reg$specification2;

      return !((_reg$specification = reg.specification) !== null && _reg$specification !== void 0 && _reg$specification.optional) || ((_reg$specification2 = reg.specification) === null || _reg$specification2 === void 0 ? void 0 : _reg$specification2.kind) === "const" && reg.lastGetAttempts < constants/* REGISTER_OPTIONAL_POLL_COUNT */.Go2;
    });
  }, [specification, expanded]);
  if (!(registers !== null && registers !== void 0 && registers.length)) // nothing to see here
    return null;
  return /*#__PURE__*/react.createElement(react.Fragment, null, registers.map(function (register) {
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
      key: register.id,
      item: true,
      xs: true
    }, /*#__PURE__*/react.createElement(RegisterInput/* default */.Z, {
      register: register,
      showServiceName: true,
      showRegisterName: true,
      hideMissingValues: false,
      showTrend: false,
      visible: visible
    }));
  }));
}
// EXTERNAL MODULE: ./src/components/devices/useDeviceName.ts
var useDeviceName = __webpack_require__(5738);
;// CONCATENATED MODULE: ./src/components/hooks/useIntersectionObserver.ts

function useIntersectionObserver(elementRef, options) {
  var _useState = (0,react.useState)(),
      entry = _useState[0],
      setEntry = _useState[1];

  var _ref = options || {},
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0 : _ref$threshold,
      _ref$root = _ref.root,
      root = _ref$root === void 0 ? null : _ref$root,
      _ref$rootMargin = _ref.rootMargin,
      rootMargin = _ref$rootMargin === void 0 ? '0%' : _ref$rootMargin,
      freezeOnceVisible = _ref.freezeOnceVisible;

  var frozen = (entry === null || entry === void 0 ? void 0 : entry.isIntersecting) && freezeOnceVisible;

  var updateEntry = function updateEntry(_ref2) {
    var entry = _ref2[0];
    setEntry(entry);
  };

  (0,react.useEffect)(function () {
    var node = elementRef === null || elementRef === void 0 ? void 0 : elementRef.current; // DOM Ref

    var hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || frozen || !node) return;
    var observerParams = {
      threshold: threshold,
      root: root,
      rootMargin: rootMargin
    };
    var observer = new IntersectionObserver(updateEntry, observerParams); //console.log(`observe`, { node })

    observer.observe(node);
    return function () {
      return observer.disconnect();
    };
  }, [elementRef, threshold, root, rootMargin, frozen]);
  return entry;
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/node.ts
var node = __webpack_require__(60154);
// EXTERNAL MODULE: ./src/components/hooks/useMediaQueries.tsx
var useMediaQueries = __webpack_require__(20509);
// EXTERNAL MODULE: ./node_modules/notistack/dist/notistack.esm.js
var notistack_esm = __webpack_require__(70076);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardDevice.tsx





 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name












var ignoredServices = [constants/* SRV_CONTROL */.gm9, constants/* SRV_LOGGER */.w9j, constants/* SRV_SETTINGS */.B9b, constants/* SRV_PROTO_TEST */.$Bn];
function DashboardDevice(props) {
  var device = props.device,
      serviceFilter = props.serviceFilter,
      expanded = props.expanded,
      toggleExpanded = props.toggleExpanded,
      variant = props.variant,
      showAvatar = props.showAvatar,
      showHeader = props.showHeader;
  var name = (0,useDeviceName/* default */.Z)(device);
  var services = (0,useChange/* default */.Z)(device, function () {
    return device.services({
      specification: true
    }).filter(function (service) {
      return ignoredServices.indexOf(service.serviceClass) < 0;
    });
  });
  var specification = (0,useDeviceSpecification/* default */.Z)(device);

  var _useMediaQueries = (0,useMediaQueries/* default */.Z)(),
      mobile = _useMediaQueries.xs;

  var serviceGridRef = (0,react.useRef)();
  var intersection = useIntersectionObserver(serviceGridRef);
  var visible = !!(intersection !== null && intersection !== void 0 && intersection.isIntersecting);

  var _useSnackbar = (0,notistack_esm/* useSnackbar */.Ds)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  (0,react.useEffect)(function () {
    return device === null || device === void 0 ? void 0 : device.subscribe(constants/* RESTART */.d0K, function () {
      console.debug(device.shortId + " restarted...");
      enqueueSnackbar(device.shortId + " restarted...", {
        variant: "warning"
      });
    });
  });
  var ServiceWidgets = (0,react.useCallback)(function () {
    var _services$filter, _services$filter$filt;

    return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
      ref: serviceGridRef,
      component: "div",
      container: true,
      spacing: 2,
      justify: "center",
      alignItems: "flex-end",
      alignContent: "space-between"
    }, services === null || services === void 0 ? void 0 : (_services$filter = services.filter(function (srv) {
      return expanded || !srv.isMixin;
    })) === null || _services$filter === void 0 ? void 0 : (_services$filter$filt = _services$filter.filter(function (srv) {
      return !serviceFilter || serviceFilter(srv);
    })) === null || _services$filter$filt === void 0 ? void 0 : _services$filter$filt.map(function (service) {
      return /*#__PURE__*/react.createElement(DashboardServiceWidgetItem, {
        key: service.id,
        service: service,
        expanded: expanded,
        services: services,
        variant: variant,
        visible: visible
      });
    }));
  }, [(0,node/* dependencyId */.BX)(services), expanded, variant, visible]);
  if (!showHeader) return /*#__PURE__*/react.createElement(Paper/* default */.Z, {
    style: {
      padding: "0.25em"
    },
    variant: "outlined"
  }, /*#__PURE__*/react.createElement(ServiceWidgets, null));
  return /*#__PURE__*/react.createElement(Card/* default */.Z, {
    "aria-live": "polite",
    "aria-label": "device " + name + " started"
  }, /*#__PURE__*/react.createElement(CardHeader/* default */.Z, {
    style: {
      paddingBottom: 0
    },
    avatar: showAvatar && /*#__PURE__*/react.createElement(DeviceAvatar/* default */.Z, {
      device: device
    }),
    action: /*#__PURE__*/react.createElement(DeviceActions/* default */.Z, {
      device: device,
      showStop: expanded,
      hideIdentity: !expanded,
      showReset: expanded && !mobile,
      showSettings: expanded && !mobile
    }, toggleExpanded && /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
      onClick: toggleExpanded,
      title: expanded ? "Collapse" : "Expand"
    }, expanded ? /*#__PURE__*/react.createElement(ExpandLess/* default */.Z, null) : /*#__PURE__*/react.createElement(ExpandMore/* default */.Z, null))),
    title: /*#__PURE__*/react.createElement(DeviceName/* default */.Z, {
      showShortId: false,
      device: device
    }),
    subheader: /*#__PURE__*/react.createElement(react.Fragment, null, !mobile && specification && /*#__PURE__*/react.createElement(Typography/* default */.Z, {
      variant: "caption",
      gutterBottom: true
    }, specification.name))
  }), /*#__PURE__*/react.createElement(CardContent/* default */.Z, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/react.createElement(ServiceWidgets, null), expanded && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column",
    spacing: 1,
    alignContent: "stretch"
  }, services === null || services === void 0 ? void 0 : services.map(function (service) {
    return /*#__PURE__*/react.createElement(DashboardServiceDetails, {
      key: "details" + service.serviceIndex,
      service: service,
      services: services,
      expanded: expanded,
      variant: variant,
      visible: visible
    });
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

/***/ 70654:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46982);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


/* harmony default export */ __webpack_exports__["Z"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4.703 2.615s-.505.05-.72.15a3.011 3.011 0 00-.391.221c-.22.12-.42.266-.6.444-.52.516-.795 1.2-.834 2.05a6.857 6.857 0 00-.066.961V8.36a5.117 5.117 0 01-.137 1.032 1.73 1.73 0 01-.4.773 2.006 2.006 0 00-.15.149 6.534 6.534 0 01-.848.617c-.303.196-.481.474-.537.83v.017c-.01.07-.017.14-.018.215L0 12.006v.008c0 .08.003.156.012.226h.002c.024.214.082.378.177.492.129.153.345.328.649.52.304.192.552.398.74.62.19.221.332.549.428.985.037.17.065.54.084 1.106v1.514c0 .285.023.542.056.787.001.047 0 .092.002.14.007.587.135 1.107.385 1.559.25.453.604.803 1.063 1.05.458.248.978.372 1.56.372h14.139c.262 0 .505-.05.72-.15.139-.064.267-.14.391-.221.218-.12.42-.266.6-.444.52-.516.795-1.2.834-2.05.042-.299.066-.618.066-.963v-1.918c.014-.372.059-.715.137-1.03.078-.314.213-.572.4-.775a1.98 1.98 0 00.15-.146c.2-.179.48-.384.848-.618.303-.196.481-.475.537-.832l.002-.015a1.66 1.66 0 00.018-.217V11.988c0-.08-.004-.156-.012-.226h-.002c-.024-.214-.082-.378-.177-.492-.129-.153-.345-.328-.649-.52a3.208 3.208 0 01-.74-.62c-.19-.221-.332-.55-.428-.987-.037-.17-.065-.538-.084-1.104V6.523c0-.285-.023-.542-.056-.787-.001-.047 0-.092-.002-.14-.007-.587-.135-1.107-.385-1.559a2.598 2.598 0 00-1.063-1.05c-.458-.248-.978-.372-1.56-.372H4.703zm1.22 1.24c.307 0 .533.058.673.172.115.096.168.24.168.453a.885.885 0 01-.069.36.501.501 0 01-.142.201.346.346 0 01-.18.07c-.31.042-.543.095-.713.164a1.03 1.03 0 00-.543.536c-.093.201-.149.47-.174.818-.022.301-.033.725-.033 1.293-.012.796-.058 1.422-.137 1.861-.07.398-.206.74-.4 1.02-.197.282-.499.552-.898.804l-.616.39.618.386c.286.18.52.368.695.558.166.18.304.407.414.672.115.277.2.614.248 1.004.051.413.076.908.076 1.47 0 .587.013 1.025.037 1.34.03.367.094.64.196.835.123.236.303.403.537.496.168.067.395.114.693.148a.404.404 0 01.268.16c.081.1.123.259.123.471 0 .308-.064.608-.84.608-.477 0-.898-.094-1.25-.282a2.006 2.006 0 01-.813-.785 2.402 2.402 0 01-.31-1.197c-.048-2.666-.098-3.199-.139-3.37-.115-.472-.286-.83-.525-1.097a3.373 3.373 0 00-.776-.633c-.216-.13-.375-.254-.47-.369-.027-.032-.088-.136-.088-.416 0-.288.09-.471.293-.596.454-.28.781-.522.998-.746.244-.251.415-.565.51-.931.084-.328.132-.788.148-1.407.015-.58.03-1.305.049-2.177.016-.706.229-1.25.654-1.666.426-.416.988-.618 1.719-.618zm12.153 0c.477 0 .898.095 1.25.282.348.185.612.442.813.785.2.343.305.746.31 1.197.048 2.666.098 3.199.139 3.37.115.472.286.83.525 1.097.216.24.476.452.776.633.217.131.376.255.47.369.027.032.088.136.088.416 0 .287-.09.471-.293.596-.454.28-.78.522-.998.746-.243.25-.415.565-.51.931-.084.328-.132.788-.148 1.407-.015.58-.03 1.305-.049 2.177-.016.706-.229 1.25-.654 1.666-.426.416-.988.618-1.719.618-.307 0-.533-.058-.672-.172-.116-.096-.168-.24-.168-.453 0-.135.021-.253.069-.36a.512.512 0 01.14-.201.353.353 0 01.182-.07c.31-.042.543-.095.713-.164.238-.099.424-.284.54-.538.094-.201.152-.468.177-.816.021-.301.033-.727.033-1.295.012-.796.058-1.42.137-1.86.07-.397.204-.74.398-1.019.196-.281.499-.552.898-.804l.616-.39-.616-.386a3.412 3.412 0 01-.695-.558 2.275 2.275 0 01-.416-.672 3.871 3.871 0 01-.246-1.004 12.22 12.22 0 01-.078-1.47c0-.587-.012-1.025-.037-1.34-.03-.367-.092-.64-.194-.835a1.021 1.021 0 00-.539-.496 2.76 2.76 0 00-.691-.148.4.4 0 01-.268-.16c-.082-.1-.123-.259-.123-.471 0-.308.064-.608.84-.608zm-6.29 1.348c.052-.005.341-.005.394 0v.01a1.524 1.524 0 011.287 1.457c0 .62-.332.891-.332.916-.33.346-.123.744.467.695 0 0 2.4.012 2.445 0a.576.576 0 01.422.555l-.002 2.574c-.106.3-.396.36-.658.111-.025 0-.296-.332-.916-.332a1.521 1.521 0 00-1.457 1.286h-.008a4.897 4.897 0 000 .394h.008a1.524 1.524 0 001.457 1.287c.62 0 .89-.332.916-.332.27-.256.557-.225.658.112v2.783a.562.562 0 01-.563.562H8.061a.561.561 0 01-.563-.562V8.836c0-.261.18-.492.422-.555.046.012 2.443 0 2.443 0 .659.032.798-.349.469-.695 0-.025-.332-.296-.332-.916a1.521 1.521 0 011.285-1.457v-.01z",
    strokeWidth: ".75"
  }));
});

/***/ }),

/***/ 40549:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useRoleManager; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20392);



function useRoleManager() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z),
      bus = _useContext.bus;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(bus.roleManager),
      mgr = _useState[0],
      setMgr = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return bus.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .ROLE_MANAGER_CHANGE */ .kqR, function () {
      return setMgr(bus.roleManager);
    });
  });
  return mgr;
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8266);
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
    justify: "center",
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

/***/ 98874:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8266);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83332);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81864);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23581);
/* harmony import */ var _components_ui_ThemedLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2086);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13173);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81794);
/* harmony import */ var _components_icons_MakeCodeIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70654);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35414);
/* harmony import */ var _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23976);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54774);
/* harmony import */ var _components_ui_DarkModeContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91350);












function deviceSort(l, r) {
  var srvScore = function srvScore(srv) {
    return srv.packets.reduce(function (prev, pkt) {
      return prev + ((0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .isReading */ .vz)(pkt) ? 10 : (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .isValueOrIntensity */ .sX)(pkt) ? 1 : 0);
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
  return (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .strcmp */ .eT)(l.deviceId, r.deviceId);
}

function Carousel() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z),
      bus = _useContext.bus;

  var iframeBridge = bus.iframeBridge;
  var deviceFilter = iframeBridge.deviceFilter.bind(iframeBridge);
  var serviceFilter = iframeBridge.serviceFilter.bind(iframeBridge);
  var extensions = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(iframeBridge, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.candidateExtensions;
  });

  var handleAdd = function handleAdd() {
    return iframeBridge === null || iframeBridge === void 0 ? void 0 : iframeBridge.postAddExtensions();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    showHeader: false,
    deviceSort: deviceSort,
    deviceFilter: deviceFilter,
    serviceFilter: serviceFilter,
    showStartSimulators: false
  }), !!(extensions !== null && extensions !== void 0 && extensions.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    m: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    size: "medium",
    color: "primary",
    variant: "contained",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons_MakeCodeIcon__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null),
    onClick: handleAdd,
    "aria-label": "Add blocks"
  }, "Add blocks")));
}

function Page() {
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_ui_DarkModeContext__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z),
      toggleDarkMode = _useContext2.toggleDarkMode,
      darkModeMounted = _useContext2.darkModeMounted;

  var rawTheme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z)({
    palette: {
      primary: {
        main: "#63c"
      },
      secondary: {
        main: "#ffc400"
      },
      type: "light",
      contrastThreshold: 3.1
    }
  });
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z)(rawTheme);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (darkModeMounted) toggleDarkMode("light");
  }, [darkModeMounted]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_ThemedLayout__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("style", null, "\nhtml {\n    margin-right: 4px;\n}\nhtml, body {\n    background: transparent !important;\n    overflow: hidden !important;\n}\n")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Carousel, null));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-makecode-sim-tsx-c919f9484b8555044d69.js.map