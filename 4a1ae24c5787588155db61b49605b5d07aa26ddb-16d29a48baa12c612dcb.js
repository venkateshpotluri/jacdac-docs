(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4762],{

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
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 23 modules
var servers = __webpack_require__(37801);
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

/***/ 54886:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DashboardDevice; }
});

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(59355);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(8129);
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
// EXTERNAL MODULE: ./src/components/layout.tsx + 20 modules
var layout = __webpack_require__(16473);
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
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardDevice.tsx





 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name











var ignoredServices = [constants/* SRV_CTRL */.CRz, constants/* SRV_LOGGER */.w9j, constants/* SRV_SETTINGS */.B9b];
function DashboardDevice(props) {
  var device = props.device,
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
  var theme = (0,useTheme/* default */.Z)();
  var mobile = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down(layout/* MOBILE_BREAKPOINT */.Gh));
  var serviceGridRef = (0,react.useRef)();
  var intersection = useIntersectionObserver(serviceGridRef);
  var visible = !!(intersection !== null && intersection !== void 0 && intersection.isIntersecting);
  var ServiceWidgets = (0,react.useCallback)(function () {
    var _services$filter;

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
    })) === null || _services$filter === void 0 ? void 0 : _services$filter.map(function (service) {
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

/***/ })

}]);
//# sourceMappingURL=4a1ae24c5787588155db61b49605b5d07aa26ddb-16d29a48baa12c612dcb.js.map