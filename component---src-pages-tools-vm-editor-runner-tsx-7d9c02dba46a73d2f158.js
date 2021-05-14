(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1297],{

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
      hosted = _splitFilter[0],
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
    devices: hosted,
    expanded: selected,
    toggleExpanded: toggleSelected
  }, other)), /*#__PURE__*/react.createElement(DeviceGroup, Object.assign({
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

/***/ 30765:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/node_modules/jsep/build/jsep.js
var jsep = __webpack_require__(25297);
var jsep_default = /*#__PURE__*/__webpack_require__.n(jsep);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdutils.ts
var jdutils = __webpack_require__(30055);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/ir.ts
var IT4Functions = [{
  id: "awaitEvent",
  args: ["event", ["boolean", true]],
  prompt: "wait for event {1} and then check {2} (other events ignored)",
  context: "command"
}, {
  id: "awaitCondition",
  args: ["boolean"],
  prompt: "wait for condition {1}",
  context: "command"
}, {
  id: "writeRegister",
  args: ["register", "number"],
  prompt: "write value {2:val} to {1}",
  context: "command"
}, {
  id: "writeLocal",
  args: ["register", "number"],
  prompt: "write value {2:val} to {1}",
  context: "command"
}, {
  id: "halt",
  args: [],
  prompt: "terminates the current handler",
  context: "command"
}];
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/markdown.ts
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var supportedExpressions = ["MemberExpression", "ArrayExpression", "BinaryExpression", "Identifier", "Literal", "UnaryExpression", "LogicalExpression"];
function parseITTTMarkdownToJSON(filecontent, filename) {
  if (filename === void 0) {
    filename = "";
  }

  filecontent = (filecontent || "").replace(/\r/g, "");
  var info = {
    description: "",
    handlers: []
  };
  var backticksType = "";
  var errors = [];
  var lineNo = 0;
  var currentHandler = null;
  var handlerHeading = "";

  try {
    for (var _iterator = _createForOfIteratorHelperLoose(filecontent.split(/\n/)), _step; !(_step = _iterator()).done;) {
      var line = _step.value;
      lineNo++;
      processLine(line);
    }
  } catch (e) {
    error("exception: " + e.message);
  }

  if (currentHandler) finishHandler();
  if (errors.length) info.errors = errors;
  return info;

  function processLine(line) {
    if (backticksType) {
      if (line.trim() == "```") {
        backticksType = null;
        if (backticksType == "default") return;
      }
    } else {
      var m = /^```(.*)/.exec(line);

      if (m) {
        backticksType = m[1] || "default";
        if (backticksType == "default") return;
      }
    }

    var interpret = backticksType == "default" || line.slice(0, 4) == "    " || /^\t/.exec(line);

    if (!interpret) {
      var _m = /^(#+)\s*(.*)/.exec(line);

      if (_m) {
        handlerHeading = "";
        var hd = _m[1],
            cont = _m[2];

        if (hd == "#") {
          if (!info.description) info.description = cont.trim();else error("use ## to start a handler, not #");
        } else if (hd == "##") {
          if (currentHandler) finishHandler();
          handlerHeading = cont.trim();
        }
      }
    } else {
      var expanded = line.replace(/\/\/.*/, "").trim();
      if (!expanded) return;
      processCommand(expanded);
    }
  }

  function argsRequiredOptional(args, optional) {
    if (optional === void 0) {
      optional = false;
    }

    return args.filter(function (a) {
      return !optional && typeof a === "string" || optional && typeof a === "object";
    });
  }

  function processCommand(expanded) {
    if (!currentHandler) {
      if (!handlerHeading) error("every handler must have a description (via ##)");
      currentHandler = {
        description: handlerHeading,
        commands: []
      };
      handlerHeading = "";
    }

    var call = /^([a-zA-Z]\w*)\(.*\)$/.exec(expanded);

    if (!call) {
      error("a command must be a call to a registered ITTT function (JavaScript syntax)");
      return;
    }

    var callee = call[1];
    var cmdIndex = IT4Functions.findIndex(function (r) {
      return callee == r.id;
    });

    if (cmdIndex < 0) {
      error(callee + " is not a registered ITTT function.");
      return;
    } else if (currentHandler.commands.length === 0 && callee !== "awaitEvent" && callee !== "awaitCondition") {
      error("An ITTT handler must begin with call to an await function (awaitEvent | awaitCondition)");
      return;
    }

    var root = jsep_default()(expanded);

    if (!root || !root.type || root.type != "CallExpression" || !root.callee || !root.arguments) {
      error("a command must be a call expression in JavaScript syntax");
    } else {
      // check for unsupported expression types
      (0,jdutils/* exprVisitor */.ao)(null, root, function (p, c) {
        if (supportedExpressions.indexOf(c.type) < 0) error("Expression of type " + c.type + " not currently supported");
      }); // check arguments

      var command = IT4Functions[cmdIndex];
      var minArgs = argsRequiredOptional(command.args).length;
      var maxArgs = command.args.length;
      if (root.arguments.length < minArgs) error(callee + " expects at least " + minArgs + " arguments; got " + root.arguments.length);else if (root.arguments.length > maxArgs) {
        error(callee + " expects at most " + maxArgs + " arguments; got " + root.arguments.length);
      } else {
        // deal with optional arguments
        var newExpressions = [];

        for (var i = root.arguments.length; i < command.args.length; i++) {
          var _ref = command.args[i],
              name = _ref[0],
              def = _ref[1];
          var lit = {
            type: "Literal",
            value: def,
            raw: def.toString()
          };
          newExpressions.push(lit);
        }

        root.arguments = root.arguments.concat(newExpressions);
      }
      currentHandler.commands.push({
        guard: undefined,
        command: root
      });
    }
  }

  function finishHandler() {
    info.handlers.push(currentHandler);
    currentHandler = null;
  }

  function error(msg) {
    if (!msg) msg = "syntax error";
    if (errors.some(function (e) {
      return e.line == lineNo && e.message == msg;
    })) return;
    errors.push({
      file: filename,
      line: lineNo,
      message: msg
    });
  }
}
// EXTERNAL MODULE: ./src/components/useLocalStorage.ts
var useLocalStorage = __webpack_require__(86581);
// EXTERNAL MODULE: ./src/components/ui/HighlightTextField.tsx + 1 modules
var HighlightTextField = __webpack_require__(33024);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./src/components/ui/GridHeader.tsx
var GridHeader = __webpack_require__(95393);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(41788);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(5991);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/environment.ts
var environment = __webpack_require__(96699);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/expr.ts
var vm_expr = __webpack_require__(18108);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/eventsource.ts
var eventsource = __webpack_require__(45484);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/vmrunner.ts





var VMStatus;

(function (VMStatus) {
  VMStatus[VMStatus["Ready"] = 0] = "Ready";
  VMStatus[VMStatus["Waiting"] = 1] = "Waiting";
  VMStatus[VMStatus["Completed"] = 2] = "Completed";
  VMStatus[VMStatus["Stopped"] = 3] = "Stopped";
})(VMStatus || (VMStatus = {}));

var IT4CommandEvaluator = /*#__PURE__*/function () {
  function IT4CommandEvaluator(env, gc) {
    this.env = env;
    this.gc = gc;
  }

  var _proto = IT4CommandEvaluator.prototype;

  _proto.checkExpression = function checkExpression(e) {
    var _this = this;

    var expr = new vm_expr/* JDExprEvaluator */.f(function (e) {
      return _this.env.lookup(e);
    }, undefined);
    return expr.eval(e) ? true : false;
  };

  _proto.evaluate = function evaluate() {
    var _this2 = this;

    console.log((0,vm_expr/* unparse */.Z)(this.gc.command));
    this._status = VMStatus.Waiting;
    var args = this.gc.command.arguments;

    switch (this.inst) {
      case "awaitEvent":
        {
          var event = args[0];

          if (this.env.hasEvent(event)) {
            this._status = this.checkExpression(args[1]) ? VMStatus.Completed : VMStatus.Waiting;
          }

          break;
        }

      case "awaitCondition":
        {
          this._status = this.checkExpression(args[0]) ? VMStatus.Completed : VMStatus.Waiting;
          break;
        }

      case "writeRegister":
      case "writeLocal":
        {
          var expr = new vm_expr/* JDExprEvaluator */.f(function (e) {
            return _this2.env.lookup(e);
          }, undefined);
          var ev = expr.eval(args[1]);
          var reg = args[0];

          if (this.inst === "writeRegister" && this.env.writeRegister(reg, ev) || this.inst === "writeLocal" && this.env.writeLocal(reg, ev)) {
            this._status = VMStatus.Completed;
          }

          this._status = VMStatus.Completed;
          break;
        }

      case "halt":
        {
          this._status = VMStatus.Stopped;
          break;
        }
    }
  };

  (0,createClass/* default */.Z)(IT4CommandEvaluator, [{
    key: "status",
    get: function get() {
      return this._status;
    }
  }, {
    key: "inst",
    get: function get() {
      return this.gc.command.callee.name;
    }
  }]);

  return IT4CommandEvaluator;
}();

var IT4CommandRunner = /*#__PURE__*/function () {
  function IT4CommandRunner(env, gc) {
    this._status = VMStatus.Waiting;
    this._eval = new IT4CommandEvaluator(env, gc);
  }

  var _proto2 = IT4CommandRunner.prototype;

  _proto2.reset = function reset() {
    this.status = VMStatus.Waiting;
  };

  _proto2.step = function step() {
    if (this.isWaiting) {
      this._eval.evaluate();

      this.finish(this._eval.status);
    }
  };

  _proto2.cancel = function cancel() {
    this.finish(VMStatus.Stopped);
  };

  _proto2.finish = function finish(s) {
    if (this.isWaiting && s === VMStatus.Completed || s === VMStatus.Stopped) {
      this.status = s;
    }
  };

  (0,createClass/* default */.Z)(IT4CommandRunner, [{
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(s) {
      if (s != this._status) {
        this._status = s;
      }
    }
  }, {
    key: "isWaiting",
    get: function get() {
      return this.status === VMStatus.Waiting;
    }
  }]);

  return IT4CommandRunner;
}();

var IT4HandlerRunner = /*#__PURE__*/function () {
  function IT4HandlerRunner(id, env, handler) {
    this.stopped = false;
    this.id = id;
    this.env = env;
    this.handler = handler;
    this.reset();
  }

  var _proto3 = IT4HandlerRunner.prototype;

  _proto3.reset = function reset() {
    this._commandIndex = undefined;
    this._currentCommand = undefined;
    this.stopped = false;
  };

  _proto3.cancel = function cancel() {
    this.stopped = true;
    this.env.unsubscribe();
  };

  _proto3.post_process = function post_process() {
    if (this._currentCommand.status === VMStatus.Stopped) this.stopped = true;
  } // run-to-completion semantics
  ;

  _proto3.step = function step() {
    if (this.stopped) return;

    if (this._commandIndex === undefined) {
      this._commandIndex = 0;
      this._currentCommand = new IT4CommandRunner(this.env, this.handler.commands[this._commandIndex]);
    }

    this._currentCommand.step();

    this.post_process();
    console.log("IT4HandlerRunner" + this.id + ".step: " + this._commandIndex);

    while (this._currentCommand.status === VMStatus.Completed && this._commandIndex < this.handler.commands.length - 1) {
      this._commandIndex++;
      this._currentCommand = new IT4CommandRunner(this.env, this.handler.commands[this._commandIndex]);

      this._currentCommand.step();

      this.post_process();
      console.log("IT4HandlerRunner" + this.id + ".step: " + this._commandIndex);
    }
  };

  (0,createClass/* default */.Z)(IT4HandlerRunner, [{
    key: "status",
    get: function get() {
      return this.stopped ? VMStatus.Stopped : this._currentCommand === undefined ? VMStatus.Ready : this._currentCommand.status;
    }
  }]);

  return IT4HandlerRunner;
}();

var IT4ProgramRunner = /*#__PURE__*/function (_JDEventSource) {
  (0,inheritsLoose/* default */.Z)(IT4ProgramRunner, _JDEventSource);

  function IT4ProgramRunner(program, bus) {
    var _this3;

    _this3 = _JDEventSource.call(this) || this;
    _this3._waitQueue = [];
    _this3._running = false;
    _this3._env = new environment/* VMEnvironment */.uH(bus, function () {
      _this3.run();
    });
    _this3._handlers = program.handlers.map(function (h, index) {
      return new IT4HandlerRunner(index, _this3._env, h);
    });
    _this3._waitQueue = _this3._handlers.slice(0);
    return _this3;
  }

  var _proto4 = IT4ProgramRunner.prototype;

  _proto4.cancel = function cancel() {
    console.log("VM stop");
    this._running = false;
    this._waitQueue = this._handlers.slice(0);

    this._waitQueue.forEach(function (h) {
      return h.reset();
    });

    console.log(this._running);
  };

  _proto4.start = function start() {
    console.log("VM start");
    this._running = true;
    this.run();
  };

  _proto4.run = function run() {
    if (!this._running) return;
    console.log("run");

    this._env.refreshEnvironment();

    if (this._waitQueue.length > 0) {
      var nextTime = [];

      this._waitQueue.forEach(function (h) {
        h.step();

        if (h.status !== VMStatus.Stopped) {
          if (h.status === VMStatus.Completed) h.reset();
          nextTime.push(h);
        }
      });

      this._waitQueue = nextTime;

      this._env.consumeEvent();
    }
  };

  (0,createClass/* default */.Z)(IT4ProgramRunner, [{
    key: "status",
    get: function get() {
      return this._running === false ? VMStatus.Ready : this._waitQueue.length > 0 ? VMStatus.Waiting : VMStatus.Completed;
    }
  }]);

  return IT4ProgramRunner;
}(eventsource/* JDEventSource */.a);
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2285);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
;// CONCATENATED MODULE: ./src/components/vm/VMRunner.tsx

 // tslint:disable-next-line: match-default-export-name no-submodule-imports




function VMRunner(props) {
  var json = props.json,
      bus = props.bus;
  var factory = (0,react.useCallback)(function (bus) {
    return json && new IT4ProgramRunner(json, bus);
  }, [bus, json]);
  var testRunner = (0,useChange/* default */.Z)(bus, factory);
  var status = (0,useChange/* default */.Z)(testRunner, function (t) {
    return t === null || t === void 0 ? void 0 : t.status;
  });

  var handleRun = function handleRun() {
    return testRunner.start();
  };

  var handleCancel = function handleCancel() {
    return testRunner.cancel();
  };

  if (!testRunner) return /*#__PURE__*/react.createElement(LoadingProgress/* default */.Z, null);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "outlined",
    color: status !== VMStatus.Ready ? "primary" : "default",
    onClick: handleRun
  }, "Run"), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "outlined",
    onClick: handleCancel
  }, "Cancel")));
}
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./src/components/dashboard/Dashboard.tsx + 2 modules
var Dashboard = __webpack_require__(23976);
;// CONCATENATED MODULE: ./src/components/tools/VMEditorRunner.tsx










var VM_MARKDOWN_SOURCE_STORAGE_KEY = "jacdac:vmeditorsource:markdown";
function VMEditorRunner() {
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var _useLocalStorage = (0,useLocalStorage/* default */.Z)(VM_MARKDOWN_SOURCE_STORAGE_KEY, "# VM Handler program\n\n"),
      source = _useLocalStorage[0],
      setSource = _useLocalStorage[1];

  var json = (0,react.useMemo)(function () {
    return parseITTTMarkdownToJSON(source);
  }, [source]);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    spacing: 2,
    container: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    spacing: 2,
    container: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12,
    sm: 7
  }, /*#__PURE__*/react.createElement(HighlightTextField/* default */.Z, {
    code: source,
    language: "markdown",
    onChange: setSource,
    annotations: json === null || json === void 0 ? void 0 : json.errors
  }))), json && bus === undefined && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "warning"
  }, "Cannot run VM without a bus!"), /*#__PURE__*/react.createElement(GridHeader/* default */.Z, {
    title: "Preview"
  }), json && bus && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12,
    xl: 7
  }, /*#__PURE__*/react.createElement(VMRunner, {
    json: json,
    bus: bus
  })), /*#__PURE__*/react.createElement(Dashboard/* default */.Z, null));
}
;// CONCATENATED MODULE: ./src/pages/tools/vm-editor-runner.tsx


function Page() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "VM Editor/Runner"), /*#__PURE__*/react.createElement(VMEditorRunner, null));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-vm-editor-runner-tsx-7d9c02dba46a73d2f158.js.map