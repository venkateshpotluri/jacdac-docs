(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

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

/***/ "FrwU":
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
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.default = _default;

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

/***/ "UhlP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("iuhU");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__("ye/S");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__("NqtD");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useControlled.js
var useControlled = __webpack_require__("yCxk");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/useFormControl.js
var useFormControl = __webpack_require__("EHdT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__("PsDL");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/SwitchBase.js










var SwitchBase_styles = {
  root: {
    padding: 9
  },
  checked: {},
  disabled: {},
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
  }
};
/**
 * @ignore - internal component.
 */

var SwitchBase_SwitchBase = /*#__PURE__*/react["forwardRef"](function SwitchBase(props, ref) {
  var autoFocus = props.autoFocus,
      checkedProp = props.checked,
      checkedIcon = props.checkedIcon,
      classes = props.classes,
      className = props.className,
      defaultChecked = props.defaultChecked,
      disabledProp = props.disabled,
      icon = props.icon,
      id = props.id,
      inputProps = props.inputProps,
      inputRef = props.inputRef,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      readOnly = props.readOnly,
      required = props.required,
      tabIndex = props.tabIndex,
      type = props.type,
      value = props.value,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["autoFocus", "checked", "checkedIcon", "classes", "className", "defaultChecked", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"]);

  var _useControlled = Object(useControlled["a" /* default */])({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase',
    state: 'checked'
  }),
      _useControlled2 = Object(slicedToArray["a" /* default */])(_useControlled, 2),
      checked = _useControlled2[0],
      setCheckedState = _useControlled2[1];

  var muiFormControl = Object(useFormControl["a" /* default */])();

  var handleFocus = function handleFocus(event) {
    if (onFocus) {
      onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };

  var handleInputChange = function handleInputChange(event) {
    var newChecked = event.target.checked;
    setCheckedState(newChecked);

    if (onChange) {
      // TODO v5: remove the second argument.
      onChange(event, newChecked);
    }
  };

  var disabled = disabledProp;

  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }

  var hasLabelFor = type === 'checkbox' || type === 'radio';
  return /*#__PURE__*/react["createElement"](IconButton["a" /* default */], Object(esm_extends["a" /* default */])({
    component: "span",
    className: Object(clsx_m["a" /* default */])(classes.root, className, checked && classes.checked, disabled && classes.disabled),
    disabled: disabled,
    tabIndex: null,
    role: undefined,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref: ref
  }, other), /*#__PURE__*/react["createElement"]("input", Object(esm_extends["a" /* default */])({
    autoFocus: autoFocus,
    checked: checkedProp,
    defaultChecked: defaultChecked,
    className: classes.input,
    disabled: disabled,
    id: hasLabelFor && id,
    name: name,
    onChange: handleInputChange,
    readOnly: readOnly,
    ref: inputRef,
    required: required,
    tabIndex: tabIndex,
    type: type,
    value: value
  }, inputProps)), checked ? checkedIcon : icon);
}); // NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.

 false ? undefined : void 0;
/* harmony default export */ var internal_SwitchBase = (Object(withStyles["a" /* default */])(SwitchBase_styles, {
  name: 'PrivateSwitchBase'
})(SwitchBase_SwitchBase));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js

 // @inheritedComponent IconButton








var Switch_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      width: 34 + 12 * 2,
      height: 14 + 12 * 2,
      overflow: 'hidden',
      padding: 12,
      boxSizing: 'border-box',
      position: 'relative',
      flexShrink: 0,
      zIndex: 0,
      // Reset the stacking context.
      verticalAlign: 'middle',
      // For correct alignment with the text.
      '@media print': {
        colorAdjust: 'exact'
      }
    },

    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
      marginLeft: -8
    },

    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
      marginRight: -8
    },

    /* Styles applied to the internal `SwitchBase` component's `root` class. */
    switchBase: {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      // Render above the focus ripple.
      color: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
      transition: theme.transitions.create(['left', 'transform'], {
        duration: theme.transitions.duration.shortest
      }),
      '&$checked': {
        transform: 'translateX(20px)'
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        opacity: 0.5
      },
      '&$disabled + $track': {
        opacity: theme.palette.type === 'light' ? 0.12 : 0.1
      }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="primary"`. */
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: Object(colorManipulator["c" /* fade */])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.primary.main
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
      }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="secondary"`. */
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: Object(colorManipulator["c" /* fade */])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.secondary.main
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
      }
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      width: 40,
      height: 24,
      padding: 7,
      '& $thumb': {
        width: 16,
        height: 16
      },
      '& $switchBase': {
        padding: 4,
        '&$checked': {
          transform: 'translateX(16px)'
        }
      }
    },

    /* Pseudo-class applied to the internal `SwitchBase` component's `checked` class. */
    checked: {},

    /* Pseudo-class applied to the internal SwitchBase component's disabled class. */
    disabled: {},

    /* Styles applied to the internal SwitchBase component's input element. */
    input: {
      left: '-100%',
      width: '300%'
    },

    /* Styles used to create the thumb passed to the internal `SwitchBase` component `icon` prop. */
    thumb: {
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%'
    },

    /* Styles applied to the track element. */
    track: {
      height: '100%',
      width: '100%',
      borderRadius: 14 / 2,
      zIndex: -1,
      transition: theme.transitions.create(['opacity', 'background-color'], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
      opacity: theme.palette.type === 'light' ? 0.38 : 0.3
    }
  };
};
var Switch_Switch = /*#__PURE__*/react["forwardRef"](function Switch(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'secondary' : _props$color,
      _props$edge = props.edge,
      edge = _props$edge === void 0 ? false : _props$edge,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "className", "color", "edge", "size"]);

  var icon = /*#__PURE__*/react["createElement"]("span", {
    className: classes.thumb
  });
  return /*#__PURE__*/react["createElement"]("span", {
    className: Object(clsx_m["a" /* default */])(classes.root, className, {
      'start': classes.edgeStart,
      'end': classes.edgeEnd
    }[edge], size === "small" && classes["size".concat(Object(capitalize["a" /* default */])(size))])
  }, /*#__PURE__*/react["createElement"](internal_SwitchBase, Object(esm_extends["a" /* default */])({
    type: "checkbox",
    icon: icon,
    checkedIcon: icon,
    classes: {
      root: Object(clsx_m["a" /* default */])(classes.switchBase, classes["color".concat(Object(capitalize["a" /* default */])(color))]),
      input: classes.input,
      checked: classes.checked,
      disabled: classes.disabled
    },
    ref: ref
  }, other)), /*#__PURE__*/react["createElement"]("span", {
    className: classes.track
  }));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Switch_Switch = __webpack_exports__["a"] = (Object(withStyles["a" /* default */])(Switch_styles, {
  name: 'MuiSwitch'
})(Switch_Switch));

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

/***/ "uvdN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Page; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__("yNWl");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__("9pTp");

// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__("FQT7");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__("r9w1");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js + 1 modules
var Switch = __webpack_require__("UhlP");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__("30+C");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__("oa/T");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__("o4QW");

// EXTERNAL MODULE: ./src/components/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__("5oJA");

// EXTERNAL MODULE: ./src/components/useServiceClient.ts
var useServiceClient = __webpack_require__("wsLH");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__("dI71");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__("BsyY");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__("W9jF");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pipes.ts
var pipes = __webpack_require__("o8zs");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/serviceclient.ts
var serviceclient = __webpack_require__("eoX3");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// CONCATENATED MODULE: ./jacdac-ts/src/jdom/settingsclient.ts










var settingsclient_SettingsClient = /*#__PURE__*/function (_JDServiceClient) {
  Object(inheritsLoose["a" /* default */])(SettingsClient, _JDServiceClient);

  function SettingsClient(service) {
    var _this;

    _this = _JDServiceClient.call(this, service) || this;
    service.registersUseAcks = true;
    return _this;
  }

  var _proto = SettingsClient.prototype;

  _proto.clear = /*#__PURE__*/function () {
    var _clear = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.service.sendCmdAsync(constants["Me" /* SettingsCmd */].Clear);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function clear() {
      return _clear.apply(this, arguments);
    }

    return clear;
  }();

  _proto.listKeys = /*#__PURE__*/function () {
    var _listKeys = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      var inp, _yield$inp$readAll, output, keys;

      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              inp = new pipes["a" /* InPipeReader */](this.bus);
              _context2.next = 3;
              return this.service.sendPacketAsync(inp.openCommand(constants["Me" /* SettingsCmd */].ListKeys), true);

            case 3:
              _context2.next = 5;
              return inp.readAll();

            case 5:
              _yield$inp$readAll = _context2.sent;
              output = _yield$inp$readAll.output;
              keys = output.map(function (pkt) {
                return pkt.stringData;
              });
              return _context2.abrupt("return", keys.filter(function (k) {
                return !!k;
              }));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function listKeys() {
      return _listKeys.apply(this, arguments);
    }

    return listKeys;
  }();

  _proto.list = /*#__PURE__*/function () {
    var _list = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
      var inp, _yield$inp$readAll2, output;

      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              inp = new pipes["a" /* InPipeReader */](this.bus);
              _context3.next = 3;
              return this.service.sendPacketAsync(inp.openCommand(constants["Me" /* SettingsCmd */].List), true);

            case 3:
              _context3.next = 5;
              return inp.readAll();

            case 5:
              _yield$inp$readAll2 = _context3.sent;
              output = _yield$inp$readAll2.output;
              return _context3.abrupt("return", output.map(function (pkt) {
                var _pkt$jdunpack = pkt.jdunpack("z b"),
                    key = _pkt$jdunpack[0],
                    valueb = _pkt$jdunpack[1];

                var value = valueb.length > 0 ? Object(utils["l" /* bufferToString */])(valueb) : undefined;
                return key && {
                  key: key,
                  value: value
                };
              }).filter(function (kv) {
                return !!kv;
              }));

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function list() {
      return _list.apply(this, arguments);
    }

    return list;
  }();

  _proto.setValue = /*#__PURE__*/function () {
    var _setValue = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee4(key, value) {
      var pkt;
      return regenerator_default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              key = key.trim();

              if (!(value === undefined)) {
                _context4.next = 6;
                break;
              }

              _context4.next = 4;
              return this.deleteValue(key);

            case 4:
              _context4.next = 10;
              break;

            case 6:
              pkt = packet["a" /* default */].from(constants["Me" /* SettingsCmd */].Set, Object(pack["a" /* jdpack */])("z b", [key, Object(utils["P" /* stringToBuffer */])(value)]));
              _context4.next = 9;
              return this.service.sendPacketAsync(pkt);

            case 9:
              this.emit(constants["v" /* CHANGE */]);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function setValue(_x, _x2) {
      return _setValue.apply(this, arguments);
    }

    return setValue;
  }();

  _proto.getValue = /*#__PURE__*/function () {
    var _getValue = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee5(key) {
      var pkt, resp, _jdunpack, rkey, value;

      return regenerator_default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (key) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return", undefined);

            case 2:
              key = key.trim();
              pkt = packet["a" /* default */].from(constants["Me" /* SettingsCmd */].Get, Object(pack["a" /* jdpack */])("s", [key]));
              _context5.next = 6;
              return this.service.sendCmdAwaitResponseAsync(pkt);

            case 6:
              resp = _context5.sent;
              _jdunpack = Object(pack["c" /* jdunpack */])(resp.data, "z b"), rkey = _jdunpack[0], value = _jdunpack[1];

              if (!(key !== rkey)) {
                _context5.next = 11;
                break;
              }

              console.error("device returned different key, got \"" + rkey + "\", expected \"" + key + "\"");
              return _context5.abrupt("return", undefined);

            case 11:
              return _context5.abrupt("return", Object(utils["l" /* bufferToString */])(value));

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function getValue(_x3) {
      return _getValue.apply(this, arguments);
    }

    return getValue;
  }();

  _proto.deleteValue = /*#__PURE__*/function () {
    var _deleteValue = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee6(key) {
      var pkt;
      return regenerator_default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (key) {
                _context6.next = 2;
                break;
              }

              return _context6.abrupt("return");

            case 2:
              key = key.trim();
              pkt = packet["a" /* default */].from(constants["Me" /* SettingsCmd */].Delete, Object(pack["a" /* jdpack */])("s", [key]));
              _context6.next = 6;
              return this.service.sendPacketAsync(pkt);

            case 6:
              this.emit(constants["v" /* CHANGE */]);

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function deleteValue(_x4) {
      return _deleteValue.apply(this, arguments);
    }

    return deleteValue;
  }();

  return SettingsClient;
}(serviceclient["a" /* JDServiceClient */]);


// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Delete.js
var Delete = __webpack_require__("FrwU");
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__("1waj");
var Add_default = /*#__PURE__*/__webpack_require__.n(Add);

// EXTERNAL MODULE: ./src/components/CmdButton.tsx + 58 modules
var CmdButton = __webpack_require__("mv/Z");

// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__("W1g9");

// CONCATENATED MODULE: ./src/components/SettingsCard.tsx







 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: match-default-export-name no-submodule-imports





function SettingRow(props) {
  var client = props.client,
      name = props.name,
      value = props.value,
      mutable = props.mutable;
  var isSecret = name[0] == "$";
  var displayName = isSecret ? name.slice(1) : name;

  var handleComponentDelete = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return client.deleteValue(name);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleComponentDelete() {
      return _ref.apply(this, arguments);
    };
  }();

  var nameError = "";
  var valueError = "";
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
    fullWidth: true,
    error: !!nameError,
    variant: "outlined",
    label: "key",
    helperText: nameError,
    value: displayName,
    disabled: true
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
    fullWidth: true,
    error: !!valueError,
    variant: "outlined",
    helperText: valueError,
    value: isSecret ? "..." : value,
    disabled: true
  })), mutable && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(CmdButton["a" /* default */], {
    trackName: "settings.delete",
    title: "Delete settings",
    onClick: handleComponentDelete,
    icon: /*#__PURE__*/react_default.a.createElement(Delete_default.a, null)
  }))));
}

function AddSettingRow(props) {
  var client = props.client;

  var _useState = Object(react["useState"])(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react["useState"])(""),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react["useState"])(true),
      secret = _useState3[0],
      setSecret = _useState3[1];

  var secretLabelId = Object(react_use_id_hook_esm["b" /* useId */])();

  var handleNameChange = function handleNameChange(ev) {
    setName(ev.target.value.trim());
  };

  var handleValueChange = function handleValueChange(ev) {
    setValue(ev.target.value);
  };

  var handleChecked = function handleChecked(ev, checked) {
    setSecret(checked);
  };

  var handleAdd = /*#__PURE__*/function () {
    var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return client.setValue("" + (secret ? "$" : "") + name, value);

            case 2:
              setName("");
              setValue("");
              setSecret(true);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleAdd() {
      return _ref2.apply(this, arguments);
    };
  }();

  var keyError = "";
  var valueError = "";
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
    fullWidth: true,
    error: !!keyError,
    variant: "outlined",
    label: "Add key",
    helperText: keyError,
    value: name,
    onChange: handleNameChange
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
    fullWidth: true,
    error: !!valueError,
    variant: "outlined",
    label: "value",
    helperText: valueError,
    value: value,
    onChange: handleValueChange
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Switch["a" /* default */], {
    checked: secret,
    onChange: handleChecked,
    "aria-labelledby": secretLabelId
  }), /*#__PURE__*/react_default.a.createElement("label", {
    id: secretLabelId
  }, "Secret")), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(CmdButton["a" /* default */], {
    trackName: "settings.add",
    disabled: !name || !!keyError || !!valueError,
    title: "Add setting",
    onClick: handleAdd,
    icon: /*#__PURE__*/react_default.a.createElement(Add_default.a, null)
  }))));
}

function SettingsCard(props) {
  var service = props.service,
      mutable = props.mutable;
  var client = Object(useServiceClient["a" /* default */])(service, function (srv) {
    return new settingsclient_SettingsClient(srv);
  });
  var values = Object(useChange["b" /* useChangeAsync */])(client, function (c) {
    return c === null || c === void 0 ? void 0 : c.list();
  });
  if (!client) return null; // wait till loaded

  var handleClear = /*#__PURE__*/function () {
    var _ref3 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return client === null || client === void 0 ? void 0 : client.clear();

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleClear() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(DeviceCardHeader["a" /* default */], {
    device: service.device,
    showMedia: true
  }), /*#__PURE__*/react_default.a.createElement(CardContent["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, values === null || values === void 0 ? void 0 : values.map(function (_ref4) {
    var key = _ref4.key,
        value = _ref4.value;
    return /*#__PURE__*/react_default.a.createElement(SettingRow, {
      key: key,
      name: key,
      value: value,
      client: client,
      mutable: mutable
    });
  }), mutable && /*#__PURE__*/react_default.a.createElement(AddSettingRow, {
    client: client,
    key: "add"
  }))), mutable && /*#__PURE__*/react_default.a.createElement(CardActions["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(CmdButton["a" /* default */], {
    trackName: "settings.clearall",
    title: "Clear all settings",
    icon: /*#__PURE__*/react_default.a.createElement(Delete_default.a, null),
    onClick: handleClear
  }, "Clear")));
}
// CONCATENATED MODULE: ./src/components/tools/SettingsManager.tsx








function SettingsManager() {
  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var services = Object(useChange["a" /* default */])(bus, function (b) {
    return b.services({
      serviceClass: constants["oe" /* SRV_SETTINGS */]
    });
  });
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(ConnectAlert["a" /* default */], {
    serviceClass: constants["oe" /* SRV_SETTINGS */]
  }), !services.length && /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "info"
  }, "We could not find any device with the settings storage service on the bus!"), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, services.map(function (service) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
      key: service.id,
      item: true,
      xs: 12
    }, /*#__PURE__*/react_default.a.createElement(SettingsCard, {
      service: service,
      mutable: true
    }));
  })));
}
// CONCATENATED MODULE: ./src/pages/tools/settings-manager.tsx



function Page() {
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h1", null, "Settings Manager"), /*#__PURE__*/react_default.a.createElement("p", null, "Configure settings in a ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/services/settings/"
  }, "setting store"), "."), /*#__PURE__*/react_default.a.createElement(SettingsManager, null));
}

/***/ }),

/***/ "wsLH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useServiceClient; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KQm4");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useServiceClient(service, factory, deps) {
  if (deps === void 0) {
    deps = [];
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined),
      client = _useState[0],
      setClient = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var c = service && factory(service);
    setClient(c);
    return function () {
      return c === null || c === void 0 ? void 0 : c.unmount();
    };
  }, [service].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(deps))); // don't use factory in cache!

  return client;
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-settings-manager-tsx-5e977a115d2579472578.js.map