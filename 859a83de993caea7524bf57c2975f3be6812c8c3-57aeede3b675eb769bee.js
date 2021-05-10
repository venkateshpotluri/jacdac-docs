(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5910],{

/***/ 31186:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34621);





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
var CardActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function CardActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["disableSpacing", "classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(styles, {
  name: 'MuiCardActions'
})(CardActions));

/***/ }),

/***/ 95148:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34621);






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
var CardMedia = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function CardMedia(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      image = props.image,
      src = props.src,
      style = props.style,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["children", "classes", "className", "component", "image", "src", "style"]);

  var isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1;
  var composedStyle = !isMediaComponent && image ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    backgroundImage: "url(\"".concat(image, "\")")
  }, style) : style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(classes.root, className, isMediaComponent && classes.media, "picture img".indexOf(Component) !== -1 && classes.img),
    ref: ref,
    style: composedStyle,
    src: isMediaComponent ? image || src : undefined
  }, other), children);
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(styles, {
  name: 'MuiCardMedia'
})(CardMedia));

/***/ }),

/***/ 50144:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34621);
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38582);






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      minWidth: 56,
      color: theme.palette.action.active,
      flexShrink: 0,
      display: 'inline-flex'
    },

    /* Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      marginTop: 8
    }
  };
};
/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 */

var ListItemIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ListItemIcon(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["classes", "className"]);

  var context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.root, className, context.alignItems === 'flex-start' && classes.alignItemsFlexStart),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(styles, {
  name: 'MuiListItemIcon'
})(ListItemIcon));

/***/ }),

/***/ 38030:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34621);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80453);
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38582);







var styles = {
  /* Styles applied to the root element. */
  root: {
    flex: '1 1 auto',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4
  },

  /* Styles applied to the `Typography` components if primary and secondary are set. */
  multiline: {
    marginTop: 6,
    marginBottom: 6
  },

  /* Styles applied to the `Typography` components if dense. */
  dense: {},

  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    paddingLeft: 56
  },

  /* Styles applied to the primary `Typography` component. */
  primary: {},

  /* Styles applied to the secondary `Typography` component. */
  secondary: {}
};
var ListItemText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ListItemText(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      _props$inset = props.inset,
      inset = _props$inset === void 0 ? false : _props$inset,
      primaryProp = props.primary,
      primaryTypographyProps = props.primaryTypographyProps,
      secondaryProp = props.secondary,
      secondaryTypographyProps = props.secondaryTypographyProps,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z),
      dense = _React$useContext.dense;

  var primary = primaryProp != null ? primaryProp : children;

  if (primary != null && primary.type !== _Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z && !disableTypography) {
    primary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: "span",
      display: "block"
    }, primaryTypographyProps), primary);
  }

  var secondary = secondaryProp;

  if (secondary != null && secondary.type !== _Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z && !disableTypography) {
    secondary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
      variant: "body2",
      className: classes.secondary,
      color: "textSecondary",
      display: "block"
    }, secondaryTypographyProps), secondary);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.root, className, dense && classes.dense, inset && classes.inset, primary && secondary && classes.multiline),
    ref: ref
  }, other), primary, secondary);
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(styles, {
  name: 'MuiListItemText'
})(ListItemText));

/***/ }),

/***/ 35966:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34621);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81664);






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      boxSizing: 'border-box',
      lineHeight: '48px',
      listStyle: 'none',
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(14)
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the root element if `inset={true}`. */
    inset: {
      paddingLeft: 72
    },

    /* Styles applied to the root element if `disableSticky={false}`. */
    sticky: {
      position: 'sticky',
      top: 0,
      zIndex: 1,
      backgroundColor: 'inherit'
    }
  };
};
var ListSubheader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ListSubheader(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'li' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$disableSticky = props.disableSticky,
      disableSticky = _props$disableSticky === void 0 ? false : _props$disableSticky,
      _props$inset = props.inset,
      inset = _props$inset === void 0 ? false : _props$inset,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["classes", "className", "color", "component", "disableGutters", "disableSticky", "inset"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(classes.root, className, color !== 'default' && classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(color))], inset && classes.inset, !disableSticky && classes.sticky, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(styles, {
  name: 'MuiListSubheader'
})(ListSubheader));

/***/ }),

/***/ 15029:
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
  d: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"
}), 'HourglassEmpty');

exports.Z = _default;

/***/ }),

/***/ 35650:
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
}), 'PlayCircleFilled');

exports.Z = _default;

/***/ }),

/***/ 92671:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": function() { return /* binding */ getTestCommandFunctions; },
/* harmony export */   "V": function() { return /* binding */ getTestExpressionFunctions; }
/* harmony export */ });
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="jdtest.d.ts" />
function getTestCommandFunctions() {
  return testFunctions.filter(function (f) {
    return f.context === "command" || f.context === "either";
  });
}
function getTestExpressionFunctions() {
  return testFunctions.filter(function (f) {
    return f.context === "expression" || f.context === "either";
  });
}
var testFunctions = [{
  id: "changes",
  args: ["register"],
  prompt: "check that {1} changes",
  context: "command"
}, {
  id: "ask",
  args: [],
  prompt: undefined,
  context: "command"
}, {
  id: "events",
  args: ["events"],
  prompt: "check that events {1} are observed",
  context: "command"
}, {
  id: "awaitEvent",
  args: ["event", ["boolean", true]],
  prompt: "wait for event {1} and then check {2} (other events ignored)",
  context: "command"
}, {
  id: "nextEvent",
  args: ["event", ["boolean", true]],
  prompt: "next event must be {1}, then check {2}",
  context: "command"
}, {
  id: "assign",
  args: ["register", "number"],
  prompt: "write value {2:val} to {1}",
  context: "command"
}, {
  id: "check",
  args: ["boolean"],
  prompt: "check that {1}",
  context: "command"
}, {
  id: "increases",
  args: ["register"],
  prompt: "check that {1} increases",
  context: "command"
}, {
  id: "decreases",
  args: ["register"],
  prompt: "check that {1} decreases",
  context: "command"
}, {
  id: "increasesBy",
  args: ["register", "number"],
  prompt: "check that  {1} (initially {1:val}) increases by {2:val}",
  context: "command"
}, {
  id: "decreasesBy",
  args: ["register", "number"],
  prompt: "check that {1} (initially {1:val}) decreases by {2:val}",
  context: "command"
}, {
  id: "stepsUpTo",
  args: ["register", "number"],
  prompt: "{1} should step up (by ones) from {1:val} to {2:val}",
  context: "command"
}, {
  id: "stepsDownTo",
  args: ["register", "number"],
  prompt: "{1} should step down (by ones) from {1:val} to {2:val}",
  context: "command"
}, {
  id: "start",
  args: ["any"],
  prompt: undefined,
  context: "expression"
}, {
  id: "closeTo",
  args: ["number", "number", "number"],
  prompt: "evaluate {1} until it is close to {2:val}, as given by error {3:val}",
  context: "either"
}];

/***/ }),

/***/ 31477:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DeviceCardHeader; }
});

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__(95823);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./src/components/DeviceActions.tsx
var DeviceActions = __webpack_require__(87993);
// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__(26390);
// EXTERNAL MODULE: ./src/jacdac/useDeviceSpecification.ts
var useDeviceSpecification = __webpack_require__(77423);
// EXTERNAL MODULE: ./src/components/devices/useDeviceImage.ts
var useDeviceImage = __webpack_require__(81546);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(19756);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js
var CardMedia = __webpack_require__(95148);
;// CONCATENATED MODULE: ./src/components/ui/CardMediaWithSkeleton.tsx



var useStyles = (0,makeStyles/* default */.Z)(function (theme) {
  return (0,createStyles/* default */.Z)({
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
      others = (0,objectWithoutPropertiesLoose/* default */.Z)(props, ["image", "src", "className"]);

  var classes = useStyles();
  var hasImage = !!image || !!src;
  return hasImage ? /*#__PURE__*/react.createElement(CardMedia/* default */.Z, Object.assign({
    className: className || classes.media
  }, others, {
    image: image,
    src: src
  })) : /*#__PURE__*/react.createElement(react.Fragment, null);
}
;// CONCATENATED MODULE: ./src/components/DeviceCardMedia.tsx




function DeviceCardMedia(props) {
  var device = props.device;
  var specification = (0,useDeviceSpecification/* default */.Z)(device);
  var imageUrl = (0,useDeviceImage/* default */.Z)(specification);
  return /*#__PURE__*/react.createElement(CardMediaWithSkeleton, {
    image: imageUrl,
    title: specification === null || specification === void 0 ? void 0 : specification.name
  });
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 2 modules
var DeviceAvatar = __webpack_require__(1291);
;// CONCATENATED MODULE: ./src/components/DeviceCardHeader.tsx

 // tslint:disable-next-line: no-submodule-imports











function DeviceFirmwareVersionChip(props) {
  var _device$service;

  var device = props.device;
  var firmwareVersionRegister = device === null || device === void 0 ? void 0 : (_device$service = device.service(0)) === null || _device$service === void 0 ? void 0 : _device$service.register(constants/* ControlReg.FirmwareVersion */.toU.FirmwareVersion);

  var _useRegisterUnpackedV = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(firmwareVersionRegister),
      firmwareVersion = _useRegisterUnpackedV[0];

  return firmwareVersion && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    size: "small",
    label: firmwareVersion
  }) || /*#__PURE__*/react.createElement(react.Fragment, null);
}

function DeviceTemperatureChip(props) {
  var _device$service2;

  var device = props.device;
  var tempRegister = device === null || device === void 0 ? void 0 : (_device$service2 = device.service(0)) === null || _device$service2 === void 0 ? void 0 : _device$service2.register(constants/* ControlReg.McuTemperature */.toU.McuTemperature);

  var _useRegisterUnpackedV2 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(tempRegister),
      temperature = _useRegisterUnpackedV2[0];

  return temperature !== undefined && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    size: "small",
    label: temperature + "\xB0"
  }) || /*#__PURE__*/react.createElement(react.Fragment, null);
}

function DeviceCardHeader(props) {
  var device = props.device,
      showFirmware = props.showFirmware,
      showTemperature = props.showTemperature,
      showMedia = props.showMedia,
      showDeviceId = props.showDeviceId,
      showAvatar = props.showAvatar,
      showSettings = props.showSettings;
  var specification = (0,useDeviceSpecification/* default */.Z)(device);
  return /*#__PURE__*/react.createElement(react.Fragment, null, showMedia && /*#__PURE__*/react.createElement(DeviceCardMedia, {
    device: device
  }), /*#__PURE__*/react.createElement(CardHeader/* default */.Z, {
    avatar: showAvatar && /*#__PURE__*/react.createElement(DeviceAvatar/* default */.Z, {
      device: device
    }),
    action: /*#__PURE__*/react.createElement(DeviceActions/* default */.Z, {
      device: device,
      showReset: true,
      showSettings: showSettings
    }),
    title: /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
      color: "textPrimary",
      to: "/devices/" + ((0,spec/* identifierToUrlPath */.uM)(specification === null || specification === void 0 ? void 0 : specification.id) || "")
    }, /*#__PURE__*/react.createElement(DeviceName/* default */.Z, {
      device: device
    })),
    subheader: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
      variant: "caption",
      gutterBottom: true
    }, [specification === null || specification === void 0 ? void 0 : specification.name, showDeviceId && device.deviceId].filter(function (s) {
      return !!s;
    }).join(", ")), showFirmware && /*#__PURE__*/react.createElement(DeviceFirmwareVersionChip, {
      device: device
    }), showTemperature && /*#__PURE__*/react.createElement(DeviceTemperatureChip, {
      device: device
    }))
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












var ignoredServices = [constants/* SRV_CTRL */.CRz, constants/* SRV_LOGGER */.w9j, constants/* SRV_SETTINGS */.B9b, constants/* SRV_PROTO_TEST */.$Bn];
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

  var _useMediaQueries = (0,useMediaQueries/* default */.Z)(),
      mobile = _useMediaQueries.mobile;

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

/***/ 43676:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ServiceTestRunner; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/useServiceClient.ts
var useServiceClient = __webpack_require__(79465);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(81253);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js





var styles = {
  /* Styles applied to the root element. */
  root: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: 'translateY(-50%)'
  }
};
/**
 * Must be used as the last child of ListItem to function properly.
 */

var ListItemSecondaryAction = /*#__PURE__*/react.forwardRef(function ListItemSecondaryAction(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["classes", "className"]);

  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';
/* harmony default export */ var ListItemSecondaryAction_ListItemSecondaryAction = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiListItemSecondaryAction'
})(ListItemSecondaryAction));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(4381);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(50144);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(38030);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(29114);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(80791);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js
var ListSubheader = __webpack_require__(35966);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__(8266);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(31186);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(63349);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(41788);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(5991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdtestfuns.ts
var jdtestfuns = __webpack_require__(92671);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdutils.ts
var jdutils = __webpack_require__(30055);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/eventsource.ts
var eventsource = __webpack_require__(45484);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/serviceclient.ts
var serviceclient = __webpack_require__(56763);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
;// CONCATENATED MODULE: ./jacdac-ts/src/test/testrunner.ts






function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var JDTestCommandStatus;

(function (JDTestCommandStatus) {
  JDTestCommandStatus[JDTestCommandStatus["NotReady"] = 0] = "NotReady";
  JDTestCommandStatus[JDTestCommandStatus["Active"] = 1] = "Active";
  JDTestCommandStatus[JDTestCommandStatus["RequiresUserInput"] = 2] = "RequiresUserInput";
  JDTestCommandStatus[JDTestCommandStatus["Passed"] = 3] = "Passed";
  JDTestCommandStatus[JDTestCommandStatus["Failed"] = 4] = "Failed";
})(JDTestCommandStatus || (JDTestCommandStatus = {}));

var JDTestStatus;

(function (JDTestStatus) {
  JDTestStatus[JDTestStatus["NotReady"] = 0] = "NotReady";
  JDTestStatus[JDTestStatus["Active"] = 1] = "Active";
  JDTestStatus[JDTestStatus["Passed"] = 2] = "Passed";
  JDTestStatus[JDTestStatus["Failed"] = 3] = "Failed";
})(JDTestStatus || (JDTestStatus = {}));

function commandStatusToTestStatus(status) {
  switch (status) {
    case JDTestCommandStatus.Active:
      return JDTestStatus.Active;

    case JDTestCommandStatus.Passed:
      return JDTestStatus.Passed;

    case JDTestCommandStatus.Failed:
      return JDTestStatus.Failed;

    case JDTestCommandStatus.NotReady:
      return JDTestStatus.NotReady;

    case JDTestCommandStatus.RequiresUserInput:
      return JDTestStatus.Active;
  }
}

function cmdToTestFunction(cmd) {
  var id = cmd.call.callee.name;
  return (0,jdtestfuns/* getTestCommandFunctions */.f)().find(function (t) {
    return t.id == id;
  });
}

function unparse(e) {
  switch (e.type) {
    case "ArrayExpression":
      {
        var ae = e;
        return "[" + ae.elements.map(unparse).join(", ") + "]";
      }

    case "CallExpression":
      {
        var caller = e;
        return unparse(caller.callee) + "(" + caller.arguments.map(unparse).join(", ") + ")";
      }

    case "MemberExpression":
      {
        var _root = e;
        return _root.computed ? unparse(_root.object) + "[" + unparse(_root.property) + "]" : unparse(_root.object) + "." + unparse(_root.property);
      }

    case "BinaryExpression":
    case "LogicalExpression":
      {
        var be = e;
        return "(" + unparse(be.left) + " " + be.operator + " " + unparse(be.right) + ")";
      }

    case "UnaryExpression":
      {
        var ue = e;
        return "" + ue.operator + unparse(ue.argument);
      }

    case "Identifier":
      {
        return e.name;
      }

    case "Literal":
      {
        return e.raw;
      }

    default:
      return "TODO";
  }
}

var JDExprEvaluator = /*#__PURE__*/function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function JDExprEvaluator(env, start) {
    this.exprStack = [];
    this.env = env;
    this.start = start;
  }

  var _proto = JDExprEvaluator.prototype;

  _proto.tos = function tos() {
    return this.exprStack[this.exprStack.length - 1];
  };

  _proto.eval = function _eval(e) {
    this.exprStack = [];
    this.visitExpression(e);
    return this.exprStack.pop();
  };

  _proto.getStartVal = function getStartVal(e) {
    return this.start.find(function (r) {
      return r.e === e;
    }).v;
  };

  _proto.visitExpression = function visitExpression(e) {
    switch (e.type) {
      case "ArrayExpression":
        {
          // nothing to do here yet (only used for event function)
          break;
        }

      case "CallExpression":
        {
          var caller = e;
          var callee = caller.callee;

          switch (callee.name) {
            case "start":
              {
                this.exprStack.push(this.getStartVal(caller.arguments[0]));
                return;
              }

            case "closeTo":
              {
                var args = caller.arguments;
                var goal = this.getStartVal(args[1]);
                var error = this.getStartVal(args[2]);
                this.visitExpression(args[0]);
                var ev = this.exprStack.pop();
                this.exprStack.push(ev >= goal - error && ev <= goal + error);
                break;
              }

            default: // ERROR

          }

          break;
        }

      case "BinaryExpression":
        {
          var be = e;
          this.visitExpression(be.left);
          this.visitExpression(be.right);
          var right = this.exprStack.pop();
          var left = this.exprStack.pop();

          switch (be.operator) {
            case "+":
              this.exprStack.push(left + right);
              return;

            case "-":
              this.exprStack.push(left - right);
              return;

            case "/":
              this.exprStack.push(left / right);
              return;

            case "*":
              this.exprStack.push(left * right);
              return;

            case "%":
              this.exprStack.push(left % right);
              return;

            case ">>":
              this.exprStack.push(left >> right);
              return;

            case ">>>":
              this.exprStack.push(left >>> right);
              return;

            case "<<":
              this.exprStack.push(left << right);
              return;

            case "|":
              this.exprStack.push(left | right);
              return;

            case "&":
              this.exprStack.push(left & right);
              return;

            case "^":
              this.exprStack.push(left ^ right);
              return;

            case "==":
              this.exprStack.push(left == right);
              return;

            case "!=":
              this.exprStack.push(left != right);
              return;

            case "===":
              this.exprStack.push(left === right);
              return;

            case "!==":
              this.exprStack.push(left !== right);
              return;

            case "<":
              this.exprStack.push(left < right);
              return;

            case ">":
              this.exprStack.push(left > right);
              return;

            case "<=":
              this.exprStack.push(left <= right);
              return;

            case ">=":
              this.exprStack.push(left >= right);
              return;
          }

          break;
        }

      case "UnaryExpression":
        {
          var ue = e;
          this.visitExpression(ue.argument);
          var top = this.exprStack.pop();

          switch (ue.operator) {
            case "!":
              this.exprStack.push(!top);
              return;

            case "~":
              this.exprStack.push(~top);
              return;

            case "-":
              this.exprStack.push(-top);
              return;

            case "+":
              this.exprStack.push(+top);
              return;
          }

          break;
        }

      case "LogicalExpression":
        {
          var le = e;
          this.visitExpression(le.left);

          switch (le.operator) {
            case "||":
              if (this.tos()) return;else this.visitExpression(le.right);
              return;

            case "&&":
              if (!this.tos()) return;else this.visitExpression(le.right);
              return;

            default:
          }

          break;
        }

      case "MemberExpression":
        {
          // member expressions are of form [register|event].field
          var _root2 = e;
          var lhs = _root2.object;
          var rhs = _root2.property;
          var val = this.env(lhs.name, rhs.name); // console.log(`${lhs.name}.${rhs.name} = ${val}`)

          this.exprStack.push(val);
          return;
        }

      case "Identifier":
        {
          var id = e;
          this.exprStack.push(this.env(id.name, ""));
          return;
        }

      case "Literal":
        {
          var lit = e;
          this.exprStack.push(lit.value);
          return;
        }

      default:
    }
  };

  return JDExprEvaluator;
}();

var JDCommandEvaluator = /*#__PURE__*/function () {
  function JDCommandEvaluator(testRunner, command) {
    this._prompt = "";
    this._progress = "";
    this._status = JDTestCommandStatus.Active;
    this._startExpressions = [];
    this._rangeComplete = undefined;
    this._eventsComplete = undefined;
    this.testRunner = testRunner;
    this.command = command;
  }

  var _proto2 = JDCommandEvaluator.prototype;

  // TODO: define an interface between test runner and command evaluator
  // TODO: so this all can be done modularly
  _proto2.start = function start() {
    var _this = this;

    this._startExpressions = [];
    var testFun = cmdToTestFunction(this.command);
    var args = this.command.call.arguments;
    var startExprs = [];

    switch (testFun.id) {
      case "check":
      case "awaitEvent":
      case "nextEvent":
        {
          (0,jdutils/* exprVisitor */.ao)(null, args, function (p, ce) {
            if (ce.type !== "CallExpression") return;
            if (ce.callee.name === "start") startExprs.push(ce.arguments[0]);else if (ce.callee.name === "closeTo") {
              startExprs.push(ce.arguments[1]);
              startExprs.push(ce.arguments[2]);
            }
          });
          break;
        }

      case "changes":
      case "increases":
      case "decreases":
        {
          startExprs.push(args[0]);
          break;
        }

      case "increasesBy":
      case "decreasesBy":
      case "stepsUpTo":
      case "stepsDownTo":
        {
          startExprs.push(args[0]);
          startExprs.push(args[1]);
          break;
        }

      case "closeTo":
        {
          startExprs.push(args[1]);
          startExprs.push(args[2]);
          break;
        }

      case "assign":
        {
          startExprs.push(args[1]);
          break;
        }

      case "events":
        {
          var eventList = this.command.call.arguments[0];
          this._eventsComplete = eventList.elements.map(function (id) {
            return id.name;
          });
          break;
        }
    } // evaluate the start expressions and store the results


    startExprs.forEach(function (child) {
      if (_this._startExpressions.findIndex(function (r) {
        return r.e === child;
      }) < 0) {
        var exprEval = new JDExprEvaluator(_this.env, []);

        _this._startExpressions.push({
          e: child,
          v: exprEval.eval(child)
        });
      }
    });
    this.createPrompt();
  };

  _proto2.createPrompt = function createPrompt() {
    var _this2 = this;

    var testFun = cmdToTestFunction(this.command);
    var replaceId = this.command.call.arguments.map(function (a, i) {
      return ["{" + (i + 1) + "}", unparse(a)];
    });
    var replaceVal = this.command.call.arguments.map(function (a, i) {
      var aStart = _this2._startExpressions.find(function (r) {
        return r.e === a;
      });

      return ["{" + (i + 1) + ":val}", aStart && aStart.v ? (0,utils/* roundWithPrecision */.JI)(aStart.v, 3).toString() : unparse(a)];
    });
    this._prompt = testFun.id === "ask" || testFun.id === "say" ? this.command.prompt.slice(0) : testFun.prompt.slice(0);
    replaceId.forEach(function (p) {
      return _this2._prompt = _this2._prompt.replace(p[0], p[1]);
    });
    replaceVal.forEach(function (p) {
      return _this2._prompt = _this2._prompt.replace(p[0], p[1]);
    });
  };

  _proto2.setEvent = function setEvent(ev) {};

  _proto2.checkExpression = function checkExpression(e) {
    var expr = new JDExprEvaluator(this.env, this._startExpressions);
    return expr.eval(e) ? JDTestCommandStatus.Passed : JDTestCommandStatus.Active;
  };

  _proto2.getStart = function getStart(e) {
    return this._startExpressions.find(function (r) {
      return r.e === e;
    });
  };

  _proto2.evaluate = function evaluate() {
    var testFun = cmdToTestFunction(this.command);
    var args = this.command.call.arguments;
    this._status = JDTestCommandStatus.Active;
    this._progress = "";

    switch (testFun.id) {
      case "ask":
        {
          this._status = JDTestCommandStatus.RequiresUserInput;
          break;
        }

      case "check":
        {
          this._status = this.checkExpression(args[0]);
          break;
        }

      case "closeTo":
        {
          var goal = this.getStart(args[1]);
          var error = this.getStart(args[2]);
          var expr = new JDExprEvaluator(this.env, this._startExpressions);
          var ev = expr.eval(args[0]);
          if (Math.abs(ev - goal.v) <= error.v) this._status = JDTestCommandStatus.Passed;
          this._progress = "current: " + pretify(ev) + "; goal: " + pretify(goal.v) + "; error: " + pretify(error.v);
          break;
        }

      case "changes":
      case "increases":
      case "decreases":
        {
          var regSaved = this._startExpressions.find(function (r) {
            return r.e === args[0];
          });

          var regValue = this.env(unparse(args[0]));
          var status = regValue && regSaved.v && (testFun.id === "changes" && regValue !== regSaved.v || testFun.id === "increases" && regValue > regSaved.v || testFun.id === "decreases" && regValue < regSaved.v) ? JDTestCommandStatus.Passed : JDTestCommandStatus.Active;
          this._status = status;
          regSaved.v = regValue;
          break;
        }

      case "increasesBy":
      case "decreasesBy":
        {
          var _regSaved = this.getStart(args[0]);

          var amtSaved = this.getStart(args[1]);

          var _regValue = this.env(unparse(args[0]));

          if (testFun.id === "increasesBy") {
            if (_regValue >= _regSaved.v + amtSaved.v) {
              this._status = JDTestCommandStatus.Passed;
            } else if (_regValue >= _regSaved.v && _regValue < _regSaved.v + amtSaved.v) {
              this._status = JDTestCommandStatus.Active;
              this._progress = "current: " + pretify(_regValue) + ", goal: " + pretify(_regSaved.v + amtSaved.v);
            } else {
              this._status = JDTestCommandStatus.Active;
            }
          } else {
            if (_regValue <= _regSaved.v - amtSaved.v) {
              this._status = JDTestCommandStatus.Passed;
              this._progress = "completed";
            } else if (_regValue <= _regSaved.v && _regValue > _regSaved.v - amtSaved.v) {
              this._status = JDTestCommandStatus.Active;
              this._progress = "current: " + pretify(_regValue) + " goal: " + pretify(_regSaved.v - amtSaved.v);
            } else {
              this._status = JDTestCommandStatus.Active;
            }
          }

          break;
        }

      case "stepsUpTo":
      case "stepsDownTo":
        {
          this._status = JDTestCommandStatus.Active;

          var _regValue2 = this.env(unparse(args[0]));

          var beginSaved = this.getStart(args[0]);
          var endSaved = this.getStart(args[1]);

          if (this._rangeComplete === undefined) {
            this._rangeComplete = _regValue2;
          } else {
            if (_regValue2 === this._rangeComplete + (testFun.id == "stepsUpTo" ? 1 : -1)) this._rangeComplete = _regValue2;

            if (this._rangeComplete === endSaved.v) {
              this._status = JDTestCommandStatus.Passed;
            }
          }

          if (this._rangeComplete != undefined) {
            this._progress = testFun.id == "stepsUpTo" ? "from " + pretify(beginSaved.v) + " up to " + pretify(this._rangeComplete) : "from " + pretify(beginSaved.v) + " down to " + pretify(this._rangeComplete);
          }

          break;
        }

      case "events":
        {
          if (this.testRunner.hasEvent) {
            var _ev = this.testRunner.consumeEvent();

            if (_ev === this._eventsComplete[0]) {
              this._eventsComplete.shift();

              if (this._eventsComplete.length === 0) this._status = JDTestCommandStatus.Passed;
            } else {
              this._status = JDTestCommandStatus.Failed;
            }

            this._progress = "got event " + _ev + "; remaining = [" + this._eventsComplete + "]";
          } else {
            this._progress = "no events received; remaining = [" + this._eventsComplete + "]";
          }

          break;
        }

      case "awaitEvent":
      case "nextEvent":
        {
          var event = args[0];
          this._progress = "waiting for event " + event.name;

          if (this.testRunner.hasEvent) {
            var _ev2 = this.testRunner.consumeEvent();

            if (_ev2 !== event.name) {
              if (testFun.id === "nextEvent") this._status = JDTestCommandStatus.Failed;
            } else {
              // this._status = JDTestCommandStatus.Passed
              this._status = this.checkExpression(this.command.call.arguments[1]);
            }
          } else {
            this._progress = "no events received; " + this._progress;
          }

          break;
        }

      case "assign":
        {
          var reg = args[0];
          var jdreg = this.testRunner.serviceTestRunner.registers[reg.name];

          var _expr = new JDExprEvaluator(this.env, this._startExpressions);

          var _ev3 = _expr.eval(args[1]);

          if (jdreg) {
            var _jdreg$specification;

            var fmt = (_jdreg$specification = jdreg.specification) === null || _jdreg$specification === void 0 ? void 0 : _jdreg$specification.packFormat;
            jdreg.sendSetPackedAsync(fmt, [_ev3]);
            this._status = JDTestCommandStatus.Passed;
            this._progress = "wrote " + _ev3 + " to register " + reg.name;
          }
        }
    }

    function pretify(v) {
      return (0,utils/* roundWithPrecision */.JI)(v, 3);
    }
  };

  (0,createClass/* default */.Z)(JDCommandEvaluator, [{
    key: "prompt",
    get: function get() {
      return this._prompt;
    }
  }, {
    key: "status",
    get: function get() {
      return this._status;
    }
  }, {
    key: "progress",
    get: function get() {
      return this._progress;
    }
  }, {
    key: "env",
    get: function get() {
      var _this3 = this;

      return function (root, fld) {
        if (fld === void 0) {
          fld = "";
        }

        return _this3.testRunner.serviceTestRunner.lookup(root, fld);
      };
    }
  }]);

  return JDCommandEvaluator;
}();

var JDTestCommandRunner = /*#__PURE__*/function (_JDEventSource) {
  (0,inheritsLoose/* default */.Z)(JDTestCommandRunner, _JDEventSource);

  function JDTestCommandRunner(testRunner, command) {
    var _this4;

    _this4 = _JDEventSource.call(this) || this;
    _this4._status = JDTestCommandStatus.NotReady;
    _this4._output = {
      message: "",
      progress: ""
    };
    _this4._commmandEvaluator = null;
    _this4.testRunner = testRunner;
    _this4.command = command;
    return _this4;
  }

  var _proto3 = JDTestCommandRunner.prototype;

  _proto3.reset = function reset() {
    this.status = JDTestCommandStatus.NotReady;
    this.output = {
      message: "",
      progress: ""
    };
    this._commmandEvaluator = null;
  };

  _proto3.start = function start() {
    this.status = JDTestCommandStatus.Active;
    this._commmandEvaluator = new JDCommandEvaluator(this.testRunner, this.command);

    this._commmandEvaluator.start();

    this.envChange();
  };

  _proto3.envChange = function envChange() {
    if (this.isActive) {
      this._commmandEvaluator.evaluate();

      var newOutput = {
        message: this._commmandEvaluator.prompt,
        progress: this._commmandEvaluator.progress
      };
      this.output = newOutput;
      if (this._commmandEvaluator.status === JDTestCommandStatus.RequiresUserInput) this.status = JDTestCommandStatus.RequiresUserInput;else this.finish(this._commmandEvaluator.status);
    }
  };

  _proto3.cancel = function cancel() {
    this.finish(JDTestCommandStatus.Failed);
  };

  _proto3.finish = function finish(s) {
    if (this.isActive && (s === JDTestCommandStatus.Failed || s === JDTestCommandStatus.Passed)) {
      this.status = s;
      this.testRunner.finishCommand();
    }
  };

  (0,createClass/* default */.Z)(JDTestCommandRunner, [{
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(s) {
      if (s != this._status) {
        this._status = s;
        this.emit(constants/* CHANGE */.Ver);
      }
    }
  }, {
    key: "indeterminate",
    get: function get() {
      return this.status !== JDTestCommandStatus.Failed && this.status !== JDTestCommandStatus.Passed;
    }
  }, {
    key: "isActive",
    get: function get() {
      return this.status === JDTestCommandStatus.Active || this.status === JDTestCommandStatus.RequiresUserInput;
    }
  }, {
    key: "output",
    get: function get() {
      return this._output;
    },
    set: function set(value) {
      if (!this._output || this._output.message !== value.message || this._output.progress !== value.progress) {
        this._output = value;
        this.emit(constants/* CHANGE */.Ver);
      }
    }
  }]);

  return JDTestCommandRunner;
}(eventsource/* JDEventSource */.a);
var JDTestRunner = /*#__PURE__*/function (_JDEventSource2) {
  (0,inheritsLoose/* default */.Z)(JDTestRunner, _JDEventSource2);

  function JDTestRunner(serviceTestRunner, testSpec) {
    var _this5;

    _this5 = _JDEventSource2.call(this) || this;
    _this5._status = JDTestStatus.NotReady;
    _this5.serviceTestRunner = serviceTestRunner;
    _this5.testSpec = testSpec;
    _this5.commands = testSpec.testCommands.map(function (c) {
      return new JDTestCommandRunner((0,assertThisInitialized/* default */.Z)(_this5), c);
    });
    return _this5;
  }

  var _proto4 = JDTestRunner.prototype;

  _proto4.reset = function reset() {
    if (this.status !== JDTestStatus.NotReady) {
      this._status = JDTestStatus.NotReady;
      this._commandIndex = undefined;
      this._currentEvent = undefined;
      this.commands.forEach(function (t) {
        return t.reset();
      });
      this.emit(constants/* CHANGE */.Ver);
    }
  };

  _proto4.start = function start() {
    this.reset();
    this.status = JDTestStatus.Active;
    this.commandIndex = 0;
    this.serviceTestRunner.refreshEnvironment();
  };

  _proto4.next = function next() {
    this.serviceTestRunner.next();
  };

  _proto4.cancel = function cancel() {
    this.finish(JDTestStatus.Failed);
  };

  _proto4.finish = function finish(newStatus) {
    if (this.status === JDTestStatus.Active) {
      this.status = newStatus;
    }
  };

  _proto4.envChange = function envChange() {
    if (this.status === JDTestStatus.Active) {
      var _this$currentCommand;

      (_this$currentCommand = this.currentCommand) === null || _this$currentCommand === void 0 ? void 0 : _this$currentCommand.envChange();
    }
  };

  _proto4.eventChange = function eventChange(event) {
    if (this.status === JDTestStatus.Active) {
      this._currentEvent = event;
      this.envChange();
    }
  };

  _proto4.consumeEvent = function consumeEvent() {
    var ret = this._currentEvent;
    this._currentEvent = undefined;
    return ret;
  };

  _proto4.finishCommand = function finishCommand() {
    if (this.commandIndex === this.commands.length - 1) this.finish(commandStatusToTestStatus(this.currentCommand.status));else this.commandIndex++;
  };

  (0,createClass/* default */.Z)(JDTestRunner, [{
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(s) {
      if (s != this._status) {
        this._status = s;
        this.emit(constants/* CHANGE */.Ver);
      }
    }
  }, {
    key: "indeterminate",
    get: function get() {
      return this.status !== JDTestStatus.Failed && this.status !== JDTestStatus.Passed;
    }
  }, {
    key: "description",
    get: function get() {
      return this.testSpec.description;
    }
  }, {
    key: "prompt",
    get: function get() {
      return this.testSpec.prompt;
    }
  }, {
    key: "commandIndex",
    get: function get() {
      return this._commandIndex;
    },
    set: function set(index) {
      if (this._commandIndex !== index) {
        var _this$currentCommand2;

        this._commandIndex = index;
        (_this$currentCommand2 = this.currentCommand) === null || _this$currentCommand2 === void 0 ? void 0 : _this$currentCommand2.start();
        this.emit(constants/* CHANGE */.Ver);
      }
    }
  }, {
    key: "hasEvent",
    get: function get() {
      return this._currentEvent != undefined;
    }
  }, {
    key: "currentCommand",
    get: function get() {
      return this.commands[this._commandIndex];
    }
  }]);

  return JDTestRunner;
}(eventsource/* JDEventSource */.a);

function refresh_env(_x) {
  return _refresh_env.apply(this, arguments);
}

function _refresh_env() {
  _refresh_env = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(registers) {
    var k, register, retry, val, _register$unpackedVal;

    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = regenerator_default().keys(registers);

          case 1:
            if ((_context.t1 = _context.t0()).done) {
              _context.next = 12;
              break;
            }

            k = _context.t1.value;
            register = registers[k];
            retry = 0;
            val = undefined;

          case 6:
            _context.next = 8;
            return register.refresh();

          case 8:
            val = (_register$unpackedVal = register.unpackedValue) === null || _register$unpackedVal === void 0 ? void 0 : _register$unpackedVal[0];

          case 9:
            if (val === undefined && retry++ < 2) {
              _context.next = 6;
              break;
            }

          case 10:
            _context.next = 1;
            break;

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _refresh_env.apply(this, arguments);
}

var JDServiceTestRunner = /*#__PURE__*/function (_JDServiceClient) {
  (0,inheritsLoose/* default */.Z)(JDServiceTestRunner, _JDServiceClient);

  function JDServiceTestRunner(testSpec, service) {
    var _this6;

    _this6 = _JDServiceClient.call(this, service) || this;
    _this6._testIndex = -1;
    _this6._registers = {};
    _this6._events = {};
    _this6.testSpec = testSpec;
    _this6.tests = _this6.testSpec.tests.map(function (t) {
      return new JDTestRunner((0,assertThisInitialized/* default */.Z)(_this6), t);
    });
    var serviceSpec = (0,spec/* serviceSpecificationFromClassIdentifier */.d5)(service.serviceClass);

    _this6.testSpec.tests.forEach(function (t) {
      t.events.forEach(function (eventName) {
        if (!_this6.events[eventName]) {
          var pkt = serviceSpec.packets.find(function (pkt) {
            return (0,spec/* isEvent */.cO)(pkt) && pkt.name === eventName;
          });
          var event = service.event(pkt.identifier);
          _this6.events[eventName] = event;

          _this6.mount(event.subscribe(constants/* EVENT */.Ks0, function () {
            var _this6$currentTest;

            (_this6$currentTest = _this6.currentTest) === null || _this6$currentTest === void 0 ? void 0 : _this6$currentTest.eventChange(eventName);
          }));
        }
      });
      t.registers.forEach(function (regName) {
        if (!_this6._registers[regName]) {
          var pkt = serviceSpec.packets.find(function (pkt) {
            return (0,spec/* isRegister */.x5)(pkt) && pkt.name === regName;
          });
          var register = service.register(pkt.identifier);
          _this6._registers[regName] = register;

          _this6.mount(register.subscribe(constants/* CHANGE */.Ver, function () {
            var _this6$currentTest2;

            (_this6$currentTest2 = _this6.currentTest) === null || _this6$currentTest2 === void 0 ? void 0 : _this6$currentTest2.envChange();
          }));
        }
      });
    });

    _this6.start();

    return _this6;
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var _proto5 = JDServiceTestRunner.prototype;

  _proto5.lookup = function lookup(root, fld) {
    if (fld === void 0) {
      fld = "";
    }

    if (root in this.registers) {
      var _this$registers$root$;

      if (!fld) return (_this$registers$root$ = this.registers[root].unpackedValue) === null || _this$registers$root$ === void 0 ? void 0 : _this$registers$root$[0];else {
        var field = this.registers[root].fields.find(function (f) {
          return f.name === fld;
        });
        return field === null || field === void 0 ? void 0 : field.value;
      }
    } else if (root in this.events) {
      var _this$events$root$fie;

      var _field = (_this$events$root$fie = this.events[root].fields) === null || _this$events$root$fie === void 0 ? void 0 : _this$events$root$fie.find(function (f) {
        return f.name === fld;
      });

      return _field === null || _field === void 0 ? void 0 : _field.value;
    }

    return undefined;
  };

  _proto5.refreshEnvironment = function refreshEnvironment() {
    refresh_env(this.registers);
  };

  _proto5.stats = function stats() {
    var r = {
      total: this.tests.length,
      success: 0,
      failed: 0,
      indeterminate: 0
    };

    for (var _iterator = _createForOfIteratorHelperLoose(this.tests), _step; !(_step = _iterator()).done;) {
      var test = _step.value;

      switch (test.status) {
        case JDTestStatus.Failed:
          r.failed++;
          break;

        case JDTestStatus.Passed:
          r.success++;
          break;

        default:
          r.indeterminate++;
      }
    }

    return r;
  };

  _proto5.start = function start() {
    this.tests.forEach(function (t) {
      return t.reset();
    });
    this.testIndex = 0;
  };

  _proto5.next = function next() {
    this.testIndex++;
  };

  (0,createClass/* default */.Z)(JDServiceTestRunner, [{
    key: "registers",
    get: function get() {
      return this._registers;
    }
  }, {
    key: "events",
    get: function get() {
      return this._events;
    }
  }, {
    key: "testIndex",
    get: function get() {
      return this._testIndex;
    },
    set: function set(index) {
      if (this._testIndex !== index) {
        // stop previous test if needed
        var ct = this.currentTest;

        if (ct) {
          if (ct.status === JDTestStatus.Active) {
            ct.cancel();
          }
        } // update test


        this._testIndex = index;
        this.emit(constants/* CHANGE */.Ver);
      }
    }
  }, {
    key: "currentTest",
    get: function get() {
      return this.tests[this._testIndex];
    },
    set: function set(test) {
      var index = this.tests.indexOf(test);
      if (index > -1) this.testIndex = index;
    }
  }]);

  return JDServiceTestRunner;
}(serviceclient/* JDServiceClient */.P);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Error.js
var Error = __webpack_require__(13840);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CheckCircle.js
var CheckCircle = __webpack_require__(39545);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/HourglassEmpty.js
var HourglassEmpty = __webpack_require__(15029);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayCircleFilled.js
var PlayCircleFilled = __webpack_require__(35650);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/dashboard/DashboardDevice.tsx + 5 modules
var DashboardDevice = __webpack_require__(54886);
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2285);
// EXTERNAL MODULE: ./jacdac-ts/src/test/testspec.ts + 1 modules
var testspec = __webpack_require__(45831);
;// CONCATENATED MODULE: ./src/components/test/ServiceTestRunner.tsx


 // tslint:disable-next-line: match-default-export-name no-submodule-imports












function TestStatusIcon(props) {
  var test = props.test;
  var status = (0,useChange/* default */.Z)(test, function (t) {
    return t.status;
  });

  switch (status) {
    case JDTestStatus.Active:
      return /*#__PURE__*/react.createElement(PlayCircleFilled/* default */.Z, {
        color: "action"
      });

    case JDTestStatus.Failed:
      return /*#__PURE__*/react.createElement(Error/* default */.Z, {
        color: "error"
      });

    case JDTestStatus.Passed:
      return /*#__PURE__*/react.createElement(CheckCircle/* default */.Z, {
        color: "primary"
      });

    default:
      return /*#__PURE__*/react.createElement(HourglassEmpty/* default */.Z, {
        color: "disabled"
      });
  }
}

function TestListItem(props) {
  var test = props.test,
      currentTest = props.currentTest,
      onSelectTest = props.onSelectTest;
  var description = (0,useChange/* default */.Z)(test, function (t) {
    return t.description;
  });
  var selected = test === currentTest;

  var handleSelectTest = function handleSelectTest() {
    return onSelectTest(test);
  };

  return /*#__PURE__*/react.createElement(ListItem/* default */.Z, {
    selected: selected,
    button: true,
    onClick: handleSelectTest
  }, /*#__PURE__*/react.createElement(ListItemIcon/* default */.Z, null, /*#__PURE__*/react.createElement(TestStatusIcon, {
    test: test
  })), /*#__PURE__*/react.createElement(ListItemText/* default */.Z, {
    primary: description
  }));
}

function TestList(props) {
  var testRunner = props.testRunner,
      currentTest = props.currentTest,
      onSelectTest = props.onSelectTest;
  var tests = testRunner.tests;
  var stats = (0,useChange/* default */.Z)(testRunner, function (r) {
    return r.stats();
  });
  return /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, /*#__PURE__*/react.createElement(List/* default */.Z, {
    dense: true,
    subheader: /*#__PURE__*/react.createElement(ListSubheader/* default */.Z, null, stats.total + " tests, " + stats.success + " success, " + stats.failed + " failed")
  }, tests === null || tests === void 0 ? void 0 : tests.map(function (test, i) {
    return /*#__PURE__*/react.createElement(TestListItem, {
      key: i,
      test: test,
      currentTest: currentTest,
      onSelectTest: onSelectTest
    });
  }))));
}

function CommandStatusIcon(props) {
  var command = props.command;
  var status = (0,useChange/* default */.Z)(command, function (c) {
    return c.status;
  });

  switch (status) {
    case JDTestCommandStatus.Active:
    case JDTestCommandStatus.RequiresUserInput:
      return /*#__PURE__*/react.createElement(PlayCircleFilled/* default */.Z, {
        color: "action"
      });

    case JDTestCommandStatus.Failed:
      return /*#__PURE__*/react.createElement(Error/* default */.Z, {
        color: "error"
      });

    case JDTestCommandStatus.Passed:
      return /*#__PURE__*/react.createElement(CheckCircle/* default */.Z, {
        color: "primary"
      });

    default:
      return /*#__PURE__*/react.createElement(HourglassEmpty/* default */.Z, {
        color: "disabled"
      });
  }
}

function CommandListItem(props) {
  var command = props.command;

  var _useChange = (0,useChange/* default */.Z)(command, function (c) {
    return c.output;
  }),
      message = _useChange.message,
      progress = _useChange.progress;

  var status = (0,useChange/* default */.Z)(command, function (c) {
    return c.status;
  });

  var handleAnswer = function handleAnswer(status) {
    return function () {
      return command.finish(status);
    };
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ListItem/* default */.Z, {
    selected: status === JDTestCommandStatus.Active
  }, /*#__PURE__*/react.createElement(ListItemIcon/* default */.Z, null, /*#__PURE__*/react.createElement(CommandStatusIcon, {
    command: command
  })), /*#__PURE__*/react.createElement(ListItemText/* default */.Z, {
    primary: message,
    secondary: progress
  })), status === JDTestCommandStatus.RequiresUserInput && /*#__PURE__*/react.createElement(ListItem/* default */.Z, null, /*#__PURE__*/react.createElement(ListItemSecondaryAction_ListItemSecondaryAction, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "outlined",
    onClick: handleAnswer(JDTestCommandStatus.Passed)
  }, "Yes")), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "outlined",
    onClick: handleAnswer(JDTestCommandStatus.Failed)
  }, "No"))))));
}

function ActiveTest(props) {
  var test = props.test;
  var commands = test.commands;
  var status = (0,useChange/* default */.Z)(test, function (t) {
    return t.status;
  });

  var handleRestart = function handleRestart() {
    return test.start();
  };

  var handleNext = function handleNext() {
    return test.next();
  }; // auto start


  (0,react.useEffect)(function () {
    return test.start();
  }, [test]);
  return /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h5"
  }, "DO"), /*#__PURE__*/react.createElement(Box/* default */.Z, {
    m: 2
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "body1"
  }, test.prompt)), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h5"
  }, "TEST"), /*#__PURE__*/react.createElement(List/* default */.Z, {
    dense: false
  }, commands.map(function (cmd, i) {
    return /*#__PURE__*/react.createElement(CommandListItem, {
      key: i,
      command: cmd
    });
  })), status === JDTestStatus.Passed && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "success"
  }, "Test passed"), status === JDTestStatus.Failed && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "error"
  }, "Test failed")), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: status === JDTestStatus.Active ? "outlined" : "contained",
    color: status === JDTestStatus.Passed ? "primary" : undefined,
    onClick: handleNext
  }, "Next"), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "outlined",
    onClick: handleRestart
  }, "Restart")));
}

function ServiceTestRunner(props) {
  var service = props.service,
      _props$serviceTest = props.serviceTest,
      serviceTest = _props$serviceTest === void 0 ? (0,testspec/* serviceTestFromServiceClass */.H)(service.serviceClass) : _props$serviceTest;
  var factory = (0,react.useCallback)(function (service) {
    return serviceTest && new JDServiceTestRunner(serviceTest, service);
  }, [service, serviceTest]);
  var testRunner = (0,useServiceClient/* default */.Z)(service, factory);
  var currentTest = (0,useChange/* default */.Z)(testRunner, function (t) {
    return t === null || t === void 0 ? void 0 : t.currentTest;
  });

  var handleSelectTest = function handleSelectTest(test) {
    testRunner.currentTest = test;
  };

  if (!serviceTest) return /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "warning"
  }, "Sorry, there are no tests available for service", " ", service.specification.name, ".");
  if (!testRunner) return /*#__PURE__*/react.createElement(LoadingProgress/* default */.Z, null);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react.createElement(TestList, {
    testRunner: testRunner,
    currentTest: currentTest,
    onSelectTest: handleSelectTest
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 6
  }, currentTest ? /*#__PURE__*/react.createElement(ActiveTest, {
    test: currentTest
  }) : /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, "Select a test to get started.")), service && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react.createElement(DashboardDevice/* default */.Z, {
    showAvatar: true,
    showHeader: true,
    device: service.device
  })));
}

/***/ }),

/***/ 7746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useGridBreakpoints; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84377);


function useGridBreakpoints(itemCount) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP),
      drawerType = _useContext.drawerType;

  if (itemCount !== undefined) {
    switch (itemCount) {
      case 1:
      case 2:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6
        };

      case 3:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 4,
          xl: 4
        };
    }
  }

  if (drawerType != _AppContext__WEBPACK_IMPORTED_MODULE_1__/* .DrawerType.None */ .jw.None) return {
    xs: 12,
    md: 6,
    sm: 6,
    lg: 6,
    xl: 4
  };else return {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 3
  };
}

/***/ }),

/***/ 79465:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServiceClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85061);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function useServiceClient(service, factory, deps) {
  if (deps === void 0) {
    deps = [];
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
      client = _useState[0],
      setClient = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var c = service && factory(service);
    setClient(c);
    return function () {
      return c === null || c === void 0 ? void 0 : c.unmount();
    };
  }, [service].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(deps))); // don't use factory in cache!

  return client;
}

/***/ })

}]);
//# sourceMappingURL=859a83de993caea7524bf57c2975f3be6812c8c3-57aeede3b675eb769bee.js.map