(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "5oJA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DeviceCardHeader; });

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__("9jPY");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__("50B7");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__("dYIP");

// EXTERNAL MODULE: ./src/components/DeviceActions.tsx
var DeviceActions = __webpack_require__("8zWW");

// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__("SCH5");

// EXTERNAL MODULE: ./src/jacdac/useDeviceSpecification.ts
var useDeviceSpecification = __webpack_require__("LoFq");

// EXTERNAL MODULE: ./src/components/devices/useDeviceImage.ts
var useDeviceImage = __webpack_require__("dI3M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js
var CardMedia = __webpack_require__("Ie8z");

// CONCATENATED MODULE: ./src/components/ui/CardMediaWithSkeleton.tsx



var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    media: {
      height: 0,
      paddingTop: '75%' // 4:3

    }
  });
});
/*
        [theme.breakpoints.down('lg')]: {
            paddingTop: '56.72%', // 16:9
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '18%',
        },
        [theme.breakpoints.down('md')]: { // 6:3
            paddingTop: '50%',
        }
*/

function CardMediaWithSkeleton(props) {
  var image = props.image,
      src = props.src,
      className = props.className,
      others = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["image", "src", "className"]);

  var classes = useStyles();
  var hasImage = !!image || !!src;
  return hasImage ? /*#__PURE__*/react_default.a.createElement(CardMedia["a" /* default */], Object.assign({
    className: className || classes.media
  }, others, {
    image: image,
    src: src
  })) : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null);
}
// CONCATENATED MODULE: ./src/components/DeviceCardMedia.tsx




function DeviceCardMedia(props) {
  var device = props.device;
  var specification = Object(useDeviceSpecification["a" /* default */])(device);
  var imageUrl = Object(useDeviceImage["a" /* default */])(specification);
  return /*#__PURE__*/react_default.a.createElement(CardMediaWithSkeleton, {
    image: imageUrl,
    title: specification === null || specification === void 0 ? void 0 : specification.name
  });
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 3 modules
var DeviceAvatar = __webpack_require__("puVa");

// CONCATENATED MODULE: ./src/components/DeviceCardHeader.tsx

 // tslint:disable-next-line: no-submodule-imports











function DeviceFirmwareVersionChip(props) {
  var _device$service;

  var device = props.device;
  var firmwareVersionRegister = device === null || device === void 0 ? void 0 : (_device$service = device.service(0)) === null || _device$service === void 0 ? void 0 : _device$service.register(constants["T" /* ControlReg */].FirmwareVersion);
  var firmwareVersion = Object(useRegisterValue["d" /* useRegisterStringValue */])(firmwareVersionRegister);
  return firmwareVersion && /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
    size: "small",
    label: firmwareVersion
  }) || /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null);
}

function DeviceTemperatureChip(props) {
  var _device$service2;

  var device = props.device;
  var tempRegister = device === null || device === void 0 ? void 0 : (_device$service2 = device.service(0)) === null || _device$service2 === void 0 ? void 0 : _device$service2.register(constants["T" /* ControlReg */].McuTemperature);
  var temperature = Object(useRegisterValue["c" /* useRegisterIntValue */])(tempRegister);
  return temperature !== undefined && /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
    size: "small",
    label: temperature + "\xB0"
  }) || /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null);
}

function DeviceCardHeader(props) {
  var device = props.device,
      showFirmware = props.showFirmware,
      showTemperature = props.showTemperature,
      showMedia = props.showMedia,
      showDeviceId = props.showDeviceId,
      showAvatar = props.showAvatar;
  var specification = Object(useDeviceSpecification["a" /* default */])(device);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, showMedia && /*#__PURE__*/react_default.a.createElement(DeviceCardMedia, {
    device: device
  }), /*#__PURE__*/react_default.a.createElement(CardHeader["a" /* default */], {
    avatar: showAvatar && /*#__PURE__*/react_default.a.createElement(DeviceAvatar["a" /* default */], {
      device: device
    }),
    action: /*#__PURE__*/react_default.a.createElement(DeviceActions["a" /* default */], {
      device: device,
      showReset: true
    }),
    title: /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
      color: "textPrimary",
      to: "/devices/" + (Object(spec["g" /* identifierToUrlPath */])(specification === null || specification === void 0 ? void 0 : specification.id) || "")
    }, /*#__PURE__*/react_default.a.createElement(DeviceName["a" /* default */], {
      device: device
    })),
    subheader: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
      variant: "caption",
      gutterBottom: true
    }, [specification === null || specification === void 0 ? void 0 : specification.name, showDeviceId && device.deviceId].filter(function (s) {
      return !!s;
    }).join(", ")), showFirmware && /*#__PURE__*/react_default.a.createElement(DeviceFirmwareVersionChip, {
      device: device
    }), showTemperature && /*#__PURE__*/react_default.a.createElement(DeviceTemperatureChip, {
      device: device
    }))
  }));
}

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

/***/ "Ie8z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");






var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  /* Styles applied to the root element if `component="video, audio, picture, iframe, or img"`. */
  media: {
    width: '100%'
  },

  /* Styles applied to the root element if `component="picture or img"`. */
  img: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
  }
};
var MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
var CardMedia = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function CardMedia(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      image = props.image,
      src = props.src,
      style = props.style,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "component", "image", "src", "style"]);

  var isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1;
  var composedStyle = !isMediaComponent && image ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    backgroundImage: "url(\"".concat(image, "\")")
  }, style) : style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, isMediaComponent && classes.media, "picture img".indexOf(Component) !== -1 && classes.img),
    ref: ref,
    style: composedStyle,
    src: isMediaComponent ? image || src : undefined
  }, other), children);
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiCardMedia'
})(CardMedia));

/***/ }),

/***/ "o4QW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");





var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var CardActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function CardActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["disableSpacing", "classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiCardActions'
})(CardActions));

/***/ }),

/***/ "r9w1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pdwK");
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("TLZQ");
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("KmP9");
/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("1AYd");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ADg1");
/* harmony import */ var _FormHelperText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Spdj");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cVXz");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("H2TA");













var variantComponent = {
  standard: _Input__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
  filled: _FilledInput__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
  outlined: _OutlinedInput__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]
};
var styles = {
  /* Styles applied to the root element. */
  root: {}
};
/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/api/form-control/)
 * - [InputLabel](/api/input-label/)
 * - [FilledInput](/api/filled-input/)
 * - [OutlinedInput](/api/outlined-input/)
 * - [Input](/api/input/)
 * - [FormHelperText](/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */

var TextField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TextField(props, ref) {
  var autoComplete = props.autoComplete,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      defaultValue = props.defaultValue,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      FormHelperTextProps = props.FormHelperTextProps,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      helperText = props.helperText,
      hiddenLabel = props.hiddenLabel,
      id = props.id,
      InputLabelProps = props.InputLabelProps,
      inputProps = props.inputProps,
      InputProps = props.InputProps,
      inputRef = props.inputRef,
      label = props.label,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      placeholder = props.placeholder,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      rows = props.rows,
      rowsMax = props.rowsMax,
      _props$select = props.select,
      select = _props$select === void 0 ? false : _props$select,
      SelectProps = props.SelectProps,
      type = props.type,
      value = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["autoComplete", "autoFocus", "children", "classes", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "hiddenLabel", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "select", "SelectProps", "type", "value", "variant"]);

  if (false) {}

  var InputMore = {};

  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }

    if (label) {
      var _InputLabelProps$requ;

      var displayRequired = (_InputLabelProps$requ = InputLabelProps === null || InputLabelProps === void 0 ? void 0 : InputLabelProps.required) !== null && _InputLabelProps$requ !== void 0 ? _InputLabelProps$requ : required;
      InputMore.label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, label, displayRequired && "\xA0*");
    }
  }

  if (select) {
    // unset defaults from textbox inputs
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = undefined;
    }

    InputMore['aria-describedby'] = undefined;
  }

  var helperTextId = helperText && id ? "".concat(id, "-helper-text") : undefined;
  var inputLabelId = label && id ? "".concat(id, "-label") : undefined;
  var InputComponent = variantComponent[variant];
  var InputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](InputComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    "aria-describedby": helperTextId,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    rowsMax: rowsMax,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    inputProps: inputProps
  }, InputMore, InputProps));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormControl__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className),
    disabled: disabled,
    error: error,
    fullWidth: fullWidth,
    hiddenLabel: hiddenLabel,
    ref: ref,
    required: required,
    color: color,
    variant: variant
  }, other), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_InputLabel__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    htmlFor: id,
    id: inputLabelId
  }, InputLabelProps), label), select ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Select__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    "aria-describedby": helperTextId,
    id: id,
    labelId: inputLabelId,
    value: value,
    input: InputElement
  }, SelectProps), children) : InputElement, helperText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormHelperText__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    id: helperTextId
  }, FormHelperTextProps), helperText));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(styles, {
  name: 'MuiTextField'
})(TextField));

/***/ }),

/***/ "zLXT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HaE+");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("30+C");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("o4QW");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("50B7");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("oa/T");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("tRbT");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("r9w1");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_hooks_useDevices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("UJQR");
/* harmony import */ var _components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("5oJA");
/* harmony import */ var _components_CmdButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("mv/Z");
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("N1P3");
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("BsyY");
/* harmony import */ var _components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("9pTp");
/* harmony import */ var _components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("H6TX");
/* harmony import */ var _jacdac_ConnectButtons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("j06+");













function FloodCard(props) {
  var device = props.device,
      numResponses = props.numResponses,
      startCounter = props.startCounter,
      size = props.size;

  var handleClick = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var service, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              service = device.service(0);
              data = Object(_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_13__[/* jdpack */ "a"])("u32 u32 u8", [numResponses, startCounter, size]);
              _context.next = 4;
              return service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_12__[/* ControlCmd */ "v"].FloodPing, data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    device: device
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_CmdButton__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    onClick: handleClick
  }, "Flood")));
}

function Page() {
  var devices = Object(_components_hooks_useDevices__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])({});

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(100),
      numResponses = _useState[0],
      setNumResponses = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(0),
      startCounter = _useState2[0],
      setStartCounter = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(32),
      size = _useState3[0],
      setSize = _useState3[1];

  var handleChangeNumberResponses = function handleChangeNumberResponses(ev) {
    var i = parseInt(ev.target.value);
    if (!isNaN(i)) setNumResponses(i);
  };

  var handleChangeStartCounter = function handleChangeStartCounter(ev) {
    var i = parseInt(ev.target.value);
    if (!isNaN(i)) setStartCounter(Math.max(0, i));
  };

  var handleChangeSize = function handleChangeSize(ev) {
    var i = parseInt(ev.target.value);
    if (!isNaN(i)) setSize(Math.max(1, i));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, "Flood Test"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    title: "Configuration"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    label: "number of responses",
    value: numResponses,
    onChange: handleChangeNumberResponses,
    type: "number"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    label: "start counter",
    value: startCounter,
    onChange: handleChangeStartCounter,
    type: "number"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    label: "size",
    value: size,
    onChange: handleChangeSize,
    type: "number"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_jacdac_ConnectButtons__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
      full: false,
      transparent: true
    }),
    title: "Devices"
  }), devices.map(function (device) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      key: device.id,
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FloodCard, {
      device: device,
      numResponses: numResponses,
      startCounter: startCounter,
      size: size
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], null));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-flood-test-tsx-1e93017fedb8e1b7c7e4.js.map