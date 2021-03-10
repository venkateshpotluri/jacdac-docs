(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

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

/***/ "LoFq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useDeviceSpecification; });
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Z8Ma");
/* harmony import */ var _useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dYIP");



function useDeviceSpecification(device) {
  var _device$service;

  var firmwareIdentifierRegister = device === null || device === void 0 ? void 0 : (_device$service = device.service(0)) === null || _device$service === void 0 ? void 0 : _device$service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__[/* ControlReg */ "Q"].FirmwareIdentifier);
  var firmwareIdentifier = Object(_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterIntValue */ "c"])(firmwareIdentifierRegister);
  var specification = Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__[/* deviceSpecificationFromFirmwareIdentifier */ "b"])(firmwareIdentifier);
  return specification;
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

/***/ }),

/***/ "puVa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DeviceAvatar; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("iuhU");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__("5AJ6");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/Person.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var Person = (Object(createSvgIcon["a" /* default */])( /*#__PURE__*/react["createElement"]("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'Person'));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Avatar/Avatar.js







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: 40,
      height: 40,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(20),
      lineHeight: 1,
      borderRadius: '50%',
      overflow: 'hidden',
      userSelect: 'none'
    },

    /* Styles applied to the root element if not `src` or `srcSet`. */
    colorDefault: {
      color: theme.palette.background.default,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
    },

    /* Styles applied to the root element if `variant="circle"`. */
    circle: {},

    /* Styles applied to the root element if `variant="circular"`. */
    circular: {},

    /* Styles applied to the root element if `variant="rounded"`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="square"`. */
    square: {
      borderRadius: 0
    },

    /* Styles applied to the img element if either `src` or `srcSet` is defined. */
    img: {
      width: '100%',
      height: '100%',
      textAlign: 'center',
      // Handle non-square image. The property isn't supported by IE 11.
      objectFit: 'cover',
      // Hide alt text.
      color: 'transparent',
      // Hide the image broken icon, only works on Chrome.
      textIndent: 10000
    },

    /* Styles applied to the fallback icon */
    fallback: {
      width: '75%',
      height: '75%'
    }
  };
};

function useLoaded(_ref) {
  var src = _ref.src,
      srcSet = _ref.srcSet;

  var _React$useState = react["useState"](false),
      loaded = _React$useState[0],
      setLoaded = _React$useState[1];

  react["useEffect"](function () {
    if (!src && !srcSet) {
      return undefined;
    }

    setLoaded(false);
    var active = true;
    var image = new Image();
    image.src = src;
    image.srcSet = srcSet;

    image.onload = function () {
      if (!active) {
        return;
      }

      setLoaded('loaded');
    };

    image.onerror = function () {
      if (!active) {
        return;
      }

      setLoaded('error');
    };

    return function () {
      active = false;
    };
  }, [src, srcSet]);
  return loaded;
}

var Avatar_Avatar = /*#__PURE__*/react["forwardRef"](function Avatar(props, ref) {
  var alt = props.alt,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      imgProps = props.imgProps,
      sizes = props.sizes,
      src = props.src,
      srcSet = props.srcSet,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'circle' : _props$variant,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["alt", "children", "classes", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"]);

  var children = null; // Use a hook instead of onError on the img element to support server-side rendering.

  var loaded = useLoaded({
    src: src,
    srcSet: srcSet
  });
  var hasImg = src || srcSet;
  var hasImgNotFailing = hasImg && loaded !== 'error';

  if (hasImgNotFailing) {
    children = /*#__PURE__*/react["createElement"]("img", Object(esm_extends["a" /* default */])({
      alt: alt,
      src: src,
      srcSet: srcSet,
      sizes: sizes,
      className: classes.img
    }, imgProps));
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = /*#__PURE__*/react["createElement"](Person, {
      className: classes.fallback
    });
  }

  return /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, classes.system, classes[variant], className, !hasImgNotFailing && classes.colorDefault),
    ref: ref
  }, other), children);
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Avatar_Avatar = (Object(withStyles["a" /* default */])(styles, {
  name: 'MuiAvatar'
})(Avatar_Avatar));
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./src/jacdac/useDeviceSpecification.ts
var useDeviceSpecification = __webpack_require__("LoFq");

// EXTERNAL MODULE: ./src/components/CmdButton.tsx + 58 modules
var CmdButton = __webpack_require__("mv/Z");

// EXTERNAL MODULE: ./src/components/hooks/useDeviceHost.ts
var useDeviceHost = __webpack_require__("nyay");

// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__("NHHF");

// EXTERNAL MODULE: ./src/components/devices/useDeviceStatusLightStyle.ts
var useDeviceStatusLightStyle = __webpack_require__("4l/8");

// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__("qhky");

// EXTERNAL MODULE: ./src/components/useDeviceName.ts
var useDeviceName = __webpack_require__("aJrF");

// EXTERNAL MODULE: ./src/components/devices/useDeviceImage.ts
var useDeviceImage = __webpack_require__("dI3M");

// CONCATENATED MODULE: ./src/components/devices/DeviceAvatar.tsx













var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    img: {
      marginTop: "58%"
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3)
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7)
    }
  });
});
function DeviceAvatar(props) {
  var device = props.device,
      showMissing = props.showMissing,
      size = props.size;
  var specification = Object(useDeviceSpecification["a" /* default */])(device);
  var imageUrl = Object(useDeviceImage["a" /* default */])(specification, "avatar");
  var name = Object(useDeviceName["a" /* default */])(device);
  var classes = useStyles();
  var sizeClassName = size === "small" ? classes.small : size === "large" ? classes.large : undefined;
  var host = Object(useDeviceHost["a" /* default */])(device);

  var _useDeviceStatusLight = Object(useDeviceStatusLightStyle["a" /* default */])(device),
      statusLEDClassName = _useDeviceStatusLight.className,
      statusLEDHelmetStyle = _useDeviceStatusLight.helmetStyle;

  if (!showMissing && !host && !imageUrl) return null;

  var handleIdentify = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return device.identify();

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleIdentify() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, statusLEDHelmetStyle && /*#__PURE__*/react_default.a.createElement(Helmet["b" /* default */], null, /*#__PURE__*/react_default.a.createElement("style", null, statusLEDHelmetStyle)), /*#__PURE__*/react_default.a.createElement(CmdButton["a" /* default */], {
    trackName: "device.identify",
    size: "small",
    title: "identify " + (host ? "simulator" : "device") + " " + name,
    onClick: handleIdentify,
    className: statusLEDClassName,
    icon: host ? /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
      kind: constants["cf" /* VIRTUAL_DEVICE_NODE_NAME */]
    }) : /*#__PURE__*/react_default.a.createElement(esm_Avatar_Avatar, {
      className: sizeClassName,
      alt: (specification === null || specification === void 0 ? void 0 : specification.name) || "Image of the device",
      src: imageUrl,
      classes: {
        img: classes.img
      }
    })
  }));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-makecode-sim-tsx-5ef321773270de71aa32.js.map