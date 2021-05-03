(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2288],{

/***/ 16993:
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
  d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), 'ExpandLess');

exports.Z = _default;

/***/ }),

/***/ 47739:
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
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore');

exports.Z = _default;

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
      console.log("role change", {
        service: service
      });
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
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(49013);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__(29181);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardServiceWidgetItem.tsx







 // eslint-disable-next-line @typescript-eslint/no-unused-vars


function DashboardServiceWidgetItem(props) {
  var service = props.service,
      expanded = props.expanded;
  var isMixin = service.isMixin;

  var _useRegisterUnpackedV = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(service.register(constants/* SystemReg.InstanceName */.ZJq.InstanceName), props),
      instanceName = _useRegisterUnpackedV[0];

  var server = (0,useServiceServer/* default */.Z)(service);

  var handleRemove = function handleRemove() {
    return server === null || server === void 0 ? void 0 : server.device.removeService(server);
  };

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
  }, instanceName)), expanded && !isMixin && server && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "Remove service",
    onClick: handleRemove
  }, /*#__PURE__*/react.createElement(Close/* default */.Z, null)))), /*#__PURE__*/react.createElement(DashboardServiceWidget/* default */.Z, props));
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
// EXTERNAL MODULE: ./src/components/layout.tsx + 15 modules
var layout = __webpack_require__(52018);
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











var ignoredServices = [constants/* SRV_CTRL */.CRz, constants/* SRV_LOGGER */.w9j];
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
      showReset: expanded && !mobile
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

/***/ 73205:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": function() { return /* binding */ dashboardServiceWeight; },
  "Z": function() { return /* binding */ DashboardServiceWidget; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(19756);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./src/components/RegisterInput.tsx + 2 modules
var RegisterInput = __webpack_require__(24162);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js
var NoSsr = __webpack_require__(42862);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(27136);
// EXTERNAL MODULE: ./src/components/widgets/ButtonWidget.tsx
var ButtonWidget = __webpack_require__(43746);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(49013);
// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__(48059);
// EXTERNAL MODULE: ./src/components/hooks/useSvgButtonProps.ts
var useSvgButtonProps = __webpack_require__(30833);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(60650);
// EXTERNAL MODULE: ./src/components/widgets/svgutils.ts
var svgutils = __webpack_require__(92526);
// EXTERNAL MODULE: ./src/components/hooks/useAnimationFrame.ts
var useAnimationFrame = __webpack_require__(17368);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardButton.tsx










function DashboardButton(props) {
  var service = props.service;

  var _useState = (0,react.useState)(false),
      pressed = _useState[0],
      setPressed = _useState[1];

  var analog = (0,useRegisterValue/* useRegisterBoolValue */.I8)(service.register(constants/* ButtonReg.Analog */.CP7.Analog)); // don't track reading, use events only

  var downEvent = service.event(constants/* ButtonEvent.Down */.XKP.Down);
  var upEvent = service.event(constants/* ButtonEvent.Up */.XKP.Up);
  (0,react.useEffect)(function () {
    return downEvent.subscribe(constants/* EVENT */.Ks0, function () {
      return setPressed(true);
    });
  }, [downEvent]);
  (0,react.useEffect)(function () {
    return upEvent.subscribe(constants/* EVENT */.Ks0, function () {
      return setPressed(false);
    });
  }, [upEvent]);
  if (!analog) return /*#__PURE__*/react.createElement(BinaryButton, Object.assign({}, props, {
    pressed: pressed
  }));else return /*#__PURE__*/react.createElement(AnalogButton, Object.assign({}, props, {
    pressed: pressed
  }));
}

function BinaryButton(props) {
  var service = props.service,
      pressed = props.pressed;
  var server = (0,useServiceServer/* default */.Z)(service);
  var color = server ? "secondary" : "primary";
  var label = "button " + (pressed ? "down" : "up");

  var handleDown = function handleDown() {
    return server === null || server === void 0 ? void 0 : server.down();
  };

  var handleUp = function handleUp() {
    return server === null || server === void 0 ? void 0 : server.up();
  };

  var widgetSize = "clamp(3rem, 10vw, 16vw)";
  return /*#__PURE__*/react.createElement(ButtonWidget/* default */.Z, {
    checked: !!pressed,
    color: color,
    onDown: server && handleDown,
    onUp: server && handleUp,
    label: label,
    size: widgetSize
  });
}

var ACTIVE_SPEED = 0.05;
var INACTIVE_SPEED = 0.1;

function AnalogButton(props) {
  var _mixins$find;

  var service = props.service,
      pressed = props.pressed,
      visible = props.visible;
  var mixins = service.mixins;
  var pressureRegister = service.register(constants/* ButtonReg.Pressure */.CP7.Pressure);

  var _useRegisterUnpackedV = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(pressureRegister, {
    visible: visible
  }),
      pressure = _useRegisterUnpackedV[0]; // find threshold if any


  var thresholdRegister = (_mixins$find = mixins.find(function (cfg) {
    return !!cfg.register(constants/* SystemReg.ActiveThreshold */.ZJq.ActiveThreshold);
  })) === null || _mixins$find === void 0 ? void 0 : _mixins$find.register(constants/* SystemReg.ActiveThreshold */.ZJq.ActiveThreshold);

  var _useRegisterUnpackedV2 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(thresholdRegister, {
    visible: visible
  }),
      threshold = _useRegisterUnpackedV2[0]; //const [buttonVariant] = useRegisterUnpackedValue<[AnalogButtonVariant]>(service.register(AnalogButtonReg.Variant));


  var widgetSize = "clamp(3rem, 10vw, 16vw)";
  var server = (0,useServiceServer/* default */.Z)(service);
  var color = server ? "secondary" : "primary";
  var label = "button pressure " + pressure;

  var _useWidgetTheme = (0,useWidgetTheme/* default */.Z)(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active;

  var _useState2 = (0,react.useState)(false),
      down = _useState2[0],
      setDown = _useState2[1];

  var handleDown = function handleDown() {
    setDown(true);
  };

  var handleUp = function handleUp() {
    setDown(false);
  };

  var buttonProps = (0,useSvgButtonProps/* default */.Z)(label, server && handleDown, server && handleUp);
  (0,useAnimationFrame/* default */.Z)(function () {
    if (!server) return false;

    var _server$reading$value = server.reading.values(),
        p = _server$reading$value[0];

    var keepAnimating = true;

    if (down) {
      if (p > 1 - ACTIVE_SPEED) {
        server.reading.setValues([1]);
        keepAnimating = false;
      } else server.reading.setValues([p + ACTIVE_SPEED]);
    } else {
      if (p < INACTIVE_SPEED) {
        server.reading.setValues([0]);
        keepAnimating = false;
      } else server.reading.setValues([p - INACTIVE_SPEED]);
    }

    server.reading.sendGetAsync(); // refresh ui

    return keepAnimating;
  }, [down]);
  var w = 64;
  var mo = pressed ? 3 : 5;
  var r = w / 2;
  var cx = r;
  var cy = r;
  var rp = r - mo;
  var ri = rp - mo;
  var ps = mo;
  var range = 360;
  /*
      {buttonVariant === AnalogButtonVariant.Capacitive && <path transform={`translate(20,20)`} aria-hidden={true}
          pointerEvents="none"
          style={{ userSelect: "none" }}
          fill={background}
          d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path>}
          */

  return /*#__PURE__*/react.createElement(SvgWidget/* default */.Z, {
    width: w,
    size: widgetSize
  }, /*#__PURE__*/react.createElement("rect", {
    x: 0,
    y: 0,
    rx: 2,
    ry: 2,
    width: w,
    height: w,
    fill: background
  }), pressure && /*#__PURE__*/react.createElement("path", {
    d: (0,svgutils/* describeArc */.x8)(cx, cy, rp, 0, pressure * range),
    stroke: active,
    strokeLinecap: "round",
    strokeWidth: ps
  }), threshold !== undefined && /*#__PURE__*/react.createElement("circle", {
    cx: cx,
    cy: mo,
    r: mo / 3,
    "aria-label": "active threshold " + threshold,
    fill: controlBackground,
    transform: "rotate(" + range * threshold + ", " + cx + ", " + cy + ")"
  }), /*#__PURE__*/react.createElement("circle", Object.assign({
    cx: cx,
    cy: cy,
    r: ri,
    "aria-live": "polite",
    fill: pressed ? active : controlBackground
  }, buttonProps)));
}
// EXTERNAL MODULE: ./src/components/hooks/useThrottledValue.ts
var useThrottledValue = __webpack_require__(72901);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 23 modules
var servers = __webpack_require__(37801);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./src/components/widgets/PowerButton.tsx
var PowerButton = __webpack_require__(2250);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardServo.tsx












function useActualAngle(service, visible) {
  var _useRegisterUnpackedV = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(service.register(constants/* ServoReg.Angle */.pmu.Angle), {
    visible: visible
  }),
      angle = _useRegisterUnpackedV[0]; // sec/60deg


  var _useRegisterUnpackedV2 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(service.register(constants/* ServoReg.ResponseSpeed */.pmu.ResponseSpeed), {
    visible: visible
  }),
      responseSpeed = _useRegisterUnpackedV2[0];

  var rotationalSpeed = 60 / (responseSpeed || servers/* SG90_RESPONSE_SPEED */.$);
  var actualAngle = (0,useThrottledValue/* default */.Z)(angle || 0, rotationalSpeed);
  return actualAngle;
}

function DashboardServo(props) {
  var service = props.service,
      visible = props.visible;
  var enabledRegister = service.register(constants/* ServoReg.Enabled */.pmu.Enabled);
  var enabled = (0,useRegisterValue/* useRegisterBoolValue */.I8)(enabledRegister, props);
  var off = !enabled;
  var angleRegister = service.register(constants/* ServoReg.Angle */.pmu.Angle);
  var angle = useActualAngle(service, visible);

  var _useRegisterUnpackedV3 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(service.register(constants/* ServoReg.Offset */.pmu.Offset), props),
      offset = _useRegisterUnpackedV3[0];

  var server = (0,useServiceServer/* default */.Z)(service);
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme = (0,useWidgetTheme/* default */.Z)(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active,
      textPrimary = _useWidgetTheme.textPrimary;

  var cx = 78;
  var cy = 55;
  var a = enabled ? angle + (offset || 0) : 0;
  var transform = "rotate(" + -a + ", " + cx + ", " + cy + ")";
  var h = 111.406;
  var w = 158.50195;
  var pr = 14;
  var pri = 6;
  var text = enabled ? Math.round(a) + "\xB0" : "off";

  var toggleOff = function toggleOff() {
    return enabledRegister.sendSetBoolAsync(!enabled, true);
  };

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    alignContent: "center"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(SvgWidget/* default */.Z, {
    tabIndex: 0,
    title: "servo at angle " + angle,
    width: w,
    height: h
  }, /*#__PURE__*/react.createElement("path", {
    fill: background,
    d: "M158.502 10.687H0v89.75h158.502z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: controlBackground,
    d: "M125.545 55.641c0-24.994-20.26-45.256-45.254-45.256-17.882.016-34.077 9.446-41.328 25.79-2.655.024-4.192.076-6.35.07-11.158 0-20.204 9.046-20.204 20.204 0 11.158 9.046 20.203 20.203 20.203 2.389-.005 4.354-.332 6.997-.256 7.56 15.59 23.356 24.485 40.682 24.5 24.992 0 45.254-20.264 45.254-45.256z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: enabled ? active : background,
    stroke: active,
    transform: transform,
    d: "M93.782 55.623c-.032-3.809-.19-6.403-.352-7.023h-.002c-.93-3.558-6.621-6.73-14.793-6.73-8.17 0-14.649 3.016-14.795 6.73-.25 6.419-4.049 62.795 13.561 62.806 14.308.008 16.52-39.277 16.38-55.783zm-8.05.08a7.178 7.178 0 010 .012 7.178 7.178 0 01-7.179 7.176 7.178 7.178 0 01-7.177-7.176 7.178 7.178 0 017.177-7.178 7.178 7.178 0 017.178 7.166z"
  }), /*#__PURE__*/react.createElement("text", {
    x: w / 2,
    y: 30,
    textAnchor: "middle",
    fill: textPrimary
  }, text), /*#__PURE__*/react.createElement(PowerButton/* default */.Z, {
    r: pr,
    ri: pri,
    cx: w - pr - 4,
    cy: pr + 14,
    color: color,
    strokeWidth: 1.5,
    off: off,
    onClick: toggleOff
  }))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(RegisterInput/* default */.Z, {
    register: angleRegister,
    visible: visible
  })));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slider/Slider.js + 1 modules
var Slider = __webpack_require__(50514);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardRotaryEncoder.tsx










function DashboardRotaryEncoder(props) {
  var service = props.service;
  var positionRegister = service.register(constants/* RotaryEncoderReg.Position */.$v5.Position);

  var _useRegisterUnpackedV = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(positionRegister, props),
      _useRegisterUnpackedV2 = _useRegisterUnpackedV[0],
      position = _useRegisterUnpackedV2 === void 0 ? 0 : _useRegisterUnpackedV2;

  var clicksPerTurnRegister = service.register(constants/* RotaryEncoderReg.ClicksPerTurn */.$v5.ClicksPerTurn);

  var _useRegisterUnpackedV3 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(clicksPerTurnRegister, props),
      _useRegisterUnpackedV4 = _useRegisterUnpackedV3[0],
      clicksPerTurn = _useRegisterUnpackedV4 === void 0 ? 12 : _useRegisterUnpackedV4;

  var server = (0,useServiceServer/* default */.Z)(service);
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme = (0,useWidgetTheme/* default */.Z)(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active,
      textProps = _useWidgetTheme.textProps;

  var label = "" + position;
  var widgetSize = "clamp(6rem, 15vw, 20vw)";
  var w = 37.794;
  var r = 0.06;
  var fs = Math.max(0.2, 0.5 - label.length * 0.1);

  var handleChange = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(ev, newValue) {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              server === null || server === void 0 ? void 0 : server.reading.setValues([newValue]);
              positionRegister.refresh();
              clicksPerTurnRegister.refresh();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleChange(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var throttled = (0,useThrottledValue/* default */.Z)(position, clicksPerTurn);
  var angle = throttled / clicksPerTurn * 360;
  var min = Math.floor(position / clicksPerTurn - 1) * clicksPerTurn;
  var max = Math.ceil(position / clicksPerTurn + 1) * clicksPerTurn;
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(SvgWidget/* default */.Z, {
    title: "rotary encoder at position " + position,
    size: widgetSize,
    width: w,
    height: w,
    viewBox: "0 0 1 1"
  }, /*#__PURE__*/react.createElement("g", {
    transform: "rotate(" + angle + ", 0.5, 0.5)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: background,
    d: "M.67.029a.037.037 0 01-.072-.02A.5.5 0 00.538 0a.037.037 0 01-.075 0 .5.5 0 00-.061.008.038.038 0 01-.073.02.5.5 0 00-.056.025.037.037 0 01-.064.04A.5.5 0 00.16.13.037.037 0 01.11.186a.5.5 0 00-.035.05.037.037 0 01-.035.066.5.5 0 00-.02.058.037.037 0 01-.016.074A.5.5 0 000 .495.037.037 0 01.005.57a.5.5 0 00.013.06.038.038 0 01.025.07.5.5 0 00.028.056.037.037 0 01.043.06.5.5 0 00.042.046.037.037 0 01.058.047.5.5 0 00.053.032.037.037 0 01.069.03.5.5 0 00.059.016.037.037 0 01.074.01.5.5 0 00.062 0 .037.037 0 01.074-.01.5.5 0 00.06-.016.037.037 0 01.068-.03.5.5 0 00.053-.032.037.037 0 01.058-.047.5.5 0 00.042-.045.037.037 0 01.043-.061A.5.5 0 00.957.7.037.037 0 01.982.63.5.5 0 00.995.57.037.037 0 011 .495.5.5 0 00.996.434.038.038 0 01.98.36.5.5 0 00.96.302.037.037 0 01.925.236.5.5 0 00.89.186.037.037 0 01.839.13.5.5 0 00.79.092.037.037 0 01.727.053.5.5 0 00.671.03z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: controlBackground,
    d: "M.1.499a.4.4 0 10.8 0 .4.4 0 10-.8 0z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 0.5,
    cy: 0.19,
    r: r,
    fill: active
  })), /*#__PURE__*/react.createElement("text", Object.assign({
    x: 0.5,
    y: 0.5,
    fontSize: fs
  }, textProps), label))), server && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Slider/* default */.Z, {
    color: color,
    min: min,
    max: max,
    step: 1,
    value: position,
    valueLabelDisplay: "off",
    onChange: handleChange
  })));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(76544);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2285);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardSwitch.tsx








function DashboardSwitch(props) {
  var service = props.service;
  var labelId = (0,react_use_id_hook_esm/* useId */.Me)();
  var on = (0,useRegisterValue/* useRegisterBoolValue */.I8)(service.register(constants/* SwitchReg.Active */.FNv.Active), props);

  var _useRegisterUnpackedV = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(service.register(constants/* SwitchReg.Variant */.FNv.Variant), props),
      switchVariant = _useRegisterUnpackedV[0];

  var server = (0,useServiceServer/* default */.Z)(service);
  var color = server ? "secondary" : "primary";
  var widgetSize = "clamp(5em, 25vw, 100%)";

  var handleToggle = function handleToggle() {
    return server === null || server === void 0 ? void 0 : server.toggle();
  };

  if (on === undefined) return /*#__PURE__*/react.createElement(LoadingProgress/* default */.Z, null);

  switch (switchVariant) {
    case constants/* SwitchVariant.PushButton */.fhu.PushButton:
      return /*#__PURE__*/react.createElement(ButtonWidget/* default */.Z, {
        checked: on,
        color: color,
        label: on ? "on" : "off",
        onDown: server && handleToggle,
        size: widgetSize
      });

    default:
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Switch/* default */.Z, {
        "aria-labelledby": labelId,
        color: color,
        checked: on,
        onChange: server && handleToggle
      }), /*#__PURE__*/react.createElement("label", {
        id: labelId
      }, on ? "on" : "off"));
  }
}
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardServiceWidget.tsx



var _serviceViews;







 // bundled





 // lazy devices

var DashboardAccelerometer = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(7470)]).then(__webpack_require__.bind(__webpack_require__, 67470));
});
var DashboardBuzzer = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 5769).then(__webpack_require__.bind(__webpack_require__, 15769));
});
var DashboardLEDPixel = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(264)]).then(__webpack_require__.bind(__webpack_require__, 10264));
});
var DashboardRoleManager = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(571)]).then(__webpack_require__.bind(__webpack_require__, 20571));
});
var DashboardTrafficLight = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 8847).then(__webpack_require__.bind(__webpack_require__, 18847));
});
var DashboardCharacterScreen = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 7787).then(__webpack_require__.bind(__webpack_require__, 7787));
});
var DashboardRainGauge = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 6214).then(__webpack_require__.bind(__webpack_require__, 46214));
});
var DashboardLEDMatrix = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 9979).then(__webpack_require__.bind(__webpack_require__, 79979));
});
var DashboardWindDirection = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 6902).then(__webpack_require__.bind(__webpack_require__, 26902));
});
var DashboardMatrixKeypad = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 7859).then(__webpack_require__.bind(__webpack_require__, 7859));
});
var DashboardReflectedLight = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 5149).then(__webpack_require__.bind(__webpack_require__, 65149));
});
var DashboardPower = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 1576).then(__webpack_require__.bind(__webpack_require__, 21576));
});
var DashboardSpeechSynthesis = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 3887).then(__webpack_require__.bind(__webpack_require__, 83887));
});
var DashboardSoilMoisture = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 457).then(__webpack_require__.bind(__webpack_require__, 40457));
});
var DashboardRealTimeClock = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 360).then(__webpack_require__.bind(__webpack_require__, 80360));
});
var DashboardLED = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 8282).then(__webpack_require__.bind(__webpack_require__, 68282));
});
var DashboardJoystick = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 7809).then(__webpack_require__.bind(__webpack_require__, 77809));
});
var DashboardSevenSegmentDisplay = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 353).then(__webpack_require__.bind(__webpack_require__, 50353));
});
var DashboardMotion = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 6861).then(__webpack_require__.bind(__webpack_require__, 66861));
});
var DashboardWaterLevel = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 193).then(__webpack_require__.bind(__webpack_require__, 40193));
});
var DashboardColor = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(1253)]).then(__webpack_require__.bind(__webpack_require__, 74435));
});
var DashboardSoundPlayer = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 9082).then(__webpack_require__.bind(__webpack_require__, 59082));
});
var DashboardSoundLevel = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(2921)]).then(__webpack_require__.bind(__webpack_require__, 82921));
});
var DashboardSoundSpectrum = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(4666)]).then(__webpack_require__.bind(__webpack_require__, 24666));
});
var DashboardRandomNumberGenerator = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 9989).then(__webpack_require__.bind(__webpack_require__, 29989));
});
var DashboardCompass = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 1025).then(__webpack_require__.bind(__webpack_require__, 51025));
});
var DashboardGyroscope = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(3737), __webpack_require__.e(317), __webpack_require__.e(5754)]).then(__webpack_require__.bind(__webpack_require__, 95754));
});
var DashboardSolenoid = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 3356).then(__webpack_require__.bind(__webpack_require__, 73356));
});
var DashboardBitRadio = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(880), __webpack_require__.e(3426), __webpack_require__.e(2352), __webpack_require__.e(8743)]).then(__webpack_require__.bind(__webpack_require__, 58743));
});
var serviceViews = (_serviceViews = {}, _serviceViews[constants/* SRV_ROLE_MANAGER */.igi] = {
  component: DashboardRoleManager,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants/* SRV_BUZZER */.J1$] = {
  component: DashboardBuzzer,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants/* SRV_LED_PIXEL */.zEX] = {
  component: DashboardLEDPixel,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants/* SRV_ACCELEROMETER */.QF7] = {
  component: DashboardAccelerometer,
  weight: function weight() {
    return 3;
  }
}, _serviceViews[constants/* SRV_ROTARY_ENCODER */.lNp] = {
  component: DashboardRotaryEncoder,
  bundled: true,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants/* SRV_BUTTON */.XJR] = {
  component: DashboardButton,
  bundled: true
}, _serviceViews[constants/* SRV_SERVO */.$X_] = {
  component: DashboardServo,
  bundled: true
}, _serviceViews[constants/* SRV_SWITCH */.Crg] = {
  component: DashboardSwitch,
  bundled: true
}, _serviceViews[constants/* SRV_TRAFFIC_LIGHT */.jHN] = {
  component: DashboardTrafficLight
}, _serviceViews[constants/* SRV_CHARACTER_SCREEN */.IB4] = {
  component: DashboardCharacterScreen,
  weight: function weight() {
    return 3;
  }
}, _serviceViews[constants/* SRV_RAIN_GAUGE */.NnQ] = {
  component: DashboardRainGauge
}, _serviceViews[constants/* SRV_LED_MATRIX */.ZmS] = {
  component: DashboardLEDMatrix,
  weight: function weight() {
    return 3;
  }
}, _serviceViews[constants/* SRV_WIND_DIRECTION */.M$m] = {
  component: DashboardWindDirection
}, _serviceViews[constants/* SRV_MATRIX_KEYPAD */.UB9] = {
  component: DashboardMatrixKeypad
}, _serviceViews[constants/* SRV_REFLECTED_LIGHT */.tky] = {
  component: DashboardReflectedLight
}, _serviceViews[constants/* SRV_POWER */.mQG] = {
  component: DashboardPower
}, _serviceViews[constants/* SRV_SPEECH_SYNTHESIS */.ydR] = {
  component: DashboardSpeechSynthesis
}, _serviceViews[constants/* SRV_SOIL_MOISTURE */.Bj3] = {
  component: DashboardSoilMoisture
}, _serviceViews[constants/* SRV_REAL_TIME_CLOCK */.XXX] = {
  component: DashboardRealTimeClock
}, _serviceViews[constants/* SRV_LED */.i04] = {
  component: DashboardLED
}, _serviceViews[constants/* SRV_JOYSTICK */.vRO] = {
  component: DashboardJoystick,
  weight: function weight() {
    return 3;
  }
}, _serviceViews[constants/* SRV_SEVEN_SEGMENT_DISPLAY */.hvg] = {
  component: DashboardSevenSegmentDisplay
}, _serviceViews[constants/* SRV_MOTION */.yRl] = {
  component: DashboardMotion
}, _serviceViews[constants/* SRV_WATER_LEVEL */.Szz] = {
  component: DashboardWaterLevel
}, _serviceViews[constants/* SRV_COLOR */.Coy] = {
  component: DashboardColor,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants/* SRV_SOUND_PLAYER */.OrM] = {
  component: DashboardSoundPlayer,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants/* SRV_SOUND_LEVEL */.GvX] = {
  component: DashboardSoundLevel,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants/* SRV_RNG */.NMZ] = {
  component: DashboardRandomNumberGenerator
}, _serviceViews[constants/* SRV_COMPASS */.JTB] = {
  component: DashboardCompass
}, _serviceViews[constants/* SRV_GYROSCOPE */.R0$] = {
  component: DashboardGyroscope,
  weight: function weight() {
    return 3;
  }
}, _serviceViews[constants/* SRV_SOUND_SPECTRUM */.vsp] = {
  component: DashboardSoundSpectrum,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants/* SRV_SOLENOID */.b68] = {
  component: DashboardSolenoid
}, _serviceViews[constants/* SRV_BIT_RADIO */.BYF] = {
  component: DashboardBitRadio,
  weight: function weight() {
    return 6;
  }
}, _serviceViews);
var collapsedRegisters = [constants/* SystemReg.Reading */.ZJq.Reading, constants/* SystemReg.Value */.ZJq.Value, constants/* SystemReg.Intensity */.ZJq.Intensity];

function ValueWidget(props) {
  var valueRegister = props.valueRegister,
      intensityRegister = props.intensityRegister,
      others = (0,objectWithoutPropertiesLoose/* default */.Z)(props, ["valueRegister", "intensityRegister"]);

  var visible = others.visible;
  var intensity = (0,useRegisterValue/* useRegisterBoolValue */.I8)(intensityRegister, others);
  var hasIntensity = intensity !== undefined;
  var off = hasIntensity ? !intensity : undefined;

  var toggleOff = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return intensityRegister.sendSetBoolAsync(off, true);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function toggleOff() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(RegisterInput/* default */.Z, {
    register: valueRegister,
    variant: "widget",
    showServiceName: false,
    showRegisterName: false,
    hideMissingValues: true,
    off: off,
    toggleOff: hasIntensity ? toggleOff : undefined,
    visible: visible
  });
}

function IntensityWidget(props) {
  var intensityRegister = props.intensityRegister,
      others = (0,objectWithoutPropertiesLoose/* default */.Z)(props, ["intensityRegister"]);

  var visible = others.visible;

  var _useRegisterUnpackedV = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(intensityRegister, others),
      intensity = _useRegisterUnpackedV[0];

  var off = intensity !== undefined && !intensity;
  return /*#__PURE__*/react.createElement(RegisterInput/* default */.Z, {
    register: intensityRegister,
    variant: "widget",
    showServiceName: false,
    showRegisterName: false,
    hideMissingValues: true,
    off: off,
    visible: visible
  });
}

function DefaultWidget(props) {
  var service = props.service,
      visible = props.visible;
  var specification = service.specification;
  var register = (0,react.useMemo)(function () {
    var rspec = specification === null || specification === void 0 ? void 0 : specification.packets.find(function (pkt) {
      return (0,spec/* isRegister */.x5)(pkt) && collapsedRegisters.indexOf(pkt.identifier) > -1;
    });
    return service.register(rspec === null || rspec === void 0 ? void 0 : rspec.identifier);
  }, [service]);
  if (!register) // nothing to see here
    return null; // if register is value, disable if enabled is 0.

  if (register.specification.identifier == constants/* SystemReg.Value */.ZJq.Value) {
    var intensityRegister = register.service.register(constants/* SystemReg.Intensity */.ZJq.Intensity);
    return /*#__PURE__*/react.createElement(ValueWidget, Object.assign({
      valueRegister: register,
      intensityRegister: intensityRegister
    }, props));
  } // case of no streaming,value just intensity, like a relay


  if (register.specification.identifier === constants/* SystemReg.Intensity */.ZJq.Intensity) return /*#__PURE__*/react.createElement(IntensityWidget, Object.assign({
    intensityRegister: register
  }, props));
  return /*#__PURE__*/react.createElement(RegisterInput/* default */.Z, {
    register: register,
    variant: "widget",
    showServiceName: false,
    showRegisterName: false,
    hideMissingValues: true,
    visible: visible
  });
}

function DashboardServiceWidget(props) {
  var service = props.service;
  var specification = service.specification;

  var _ref2 = serviceViews[specification.classIdentifier] || {},
      component = _ref2.component,
      bundled = _ref2.bundled;

  var server = (0,useServiceServer/* default */.Z)(service);
  var color = server ? "secondary" : "primary"; // no special support

  if (!component) return /*#__PURE__*/(0,react.createElement)(DefaultWidget, props); // precompiled

  if (bundled) return /*#__PURE__*/(0,react.createElement)(component, props); // lazy loading

  return /*#__PURE__*/react.createElement(NoSsr/* default */.Z, null, /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement(CircularProgress/* default */.Z, {
      color: color,
      disableShrink: true,
      variant: "indeterminate",
      size: "3em"
    })
  }, /*#__PURE__*/(0,react.createElement)(component, props)));
}
function dashboardServiceWeight(service) {
  var _view$weight;

  var view = serviceViews[service.serviceClass];
  return view === null || view === void 0 ? void 0 : (_view$weight = view.weight) === null || _view$weight === void 0 ? void 0 : _view$weight.call(view, service);
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
//# sourceMappingURL=f45028b77642bb06a1e26ecfd1b9356bfb549ad6-1ed79d2aa737c1804663.js.map