(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1762,119],{

/***/ 4998:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Chip_Chip; }
});

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(27490);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(47895);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(6018);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/Cancel.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var Cancel = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/react.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(37595);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(11291);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(81664);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(67055);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js











var styles = function styles(theme) {
  var backgroundColor = theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
  var deleteIconColor = (0,colorManipulator/* fade */.U1)(theme.palette.text.primary, 0.26);
  return {
    /* Styles applied to the root element. */
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 32,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      borderRadius: 32 / 2,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create(['background-color', 'box-shadow']),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      textDecoration: 'none',
      border: 'none',
      // Remove `button` border
      padding: 0,
      // Remove `button` padding
      verticalAlign: 'middle',
      boxSizing: 'border-box',
      '&$disabled': {
        opacity: 0.5,
        pointerEvents: 'none'
      },
      '& $avatar': {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
        fontSize: theme.typography.pxToRem(12)
      },
      '& $avatarColorPrimary': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark
      },
      '& $avatarColorSecondary': {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.dark
      },
      '& $avatarSmall': {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: theme.typography.pxToRem(10)
      }
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      height: 24
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
    clickable: {
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: theme.shadows[1]
      }
    },

    /* Styles applied to the root element if `onClick` and `color="primary"` is defined or `clickable={true}`. */
    clickableColorPrimary: {
      '&:hover, &:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.primary.main, 0.08)
      }
    },

    /* Styles applied to the root element if `onClick` and `color="secondary"` is defined or `clickable={true}`. */
    clickableColorSecondary: {
      '&:hover, &:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.secondary.main, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` is defined. */
    deletable: {
      '&:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(backgroundColor, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="primary"` is defined. */
    deletableColorPrimary: {
      '&:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.primary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="secondary"` is defined. */
    deletableColorSecondary: {
      '&:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.secondary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      backgroundColor: 'transparent',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: (0,colorManipulator/* fade */.U1)(theme.palette.text.primary, theme.palette.action.hoverOpacity)
      },
      '& $avatar': {
        marginLeft: 4
      },
      '& $avatarSmall': {
        marginLeft: 2
      },
      '& $icon': {
        marginLeft: 4
      },
      '& $iconSmall': {
        marginLeft: 2
      },
      '& $deleteIcon': {
        marginRight: 5
      },
      '& $deleteIconSmall': {
        marginRight: 3
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(theme.palette.primary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: (0,colorManipulator/* fade */.U1)(theme.palette.primary.main, theme.palette.action.hoverOpacity)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: (0,colorManipulator/* fade */.U1)(theme.palette.secondary.main, theme.palette.action.hoverOpacity)
      }
    },
    // TODO v5: remove

    /* Styles applied to the `avatar` element. */
    avatar: {},

    /* Styles applied to the `avatar` element if `size="small"`. */
    avatarSmall: {},

    /* Styles applied to the `avatar` element if `color="primary"`. */
    avatarColorPrimary: {},

    /* Styles applied to the `avatar` element if `color="secondary"`. */
    avatarColorSecondary: {},

    /* Styles applied to the `icon` element. */
    icon: {
      color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      marginLeft: 5,
      marginRight: -6
    },

    /* Styles applied to the `icon` element if `size="small"`. */
    iconSmall: {
      width: 18,
      height: 18,
      marginLeft: 4,
      marginRight: -4
    },

    /* Styles applied to the `icon` element if `color="primary"`. */
    iconColorPrimary: {
      color: 'inherit'
    },

    /* Styles applied to the `icon` element if `color="secondary"`. */
    iconColorSecondary: {
      color: 'inherit'
    },

    /* Styles applied to the label `span` element. */
    label: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingLeft: 12,
      paddingRight: 12,
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the label `span` element if `size="small"`. */
    labelSmall: {
      paddingLeft: 8,
      paddingRight: 8
    },

    /* Styles applied to the `deleteIcon` element. */
    deleteIcon: {
      WebkitTapHighlightColor: 'transparent',
      color: deleteIconColor,
      height: 22,
      width: 22,
      cursor: 'pointer',
      margin: '0 5px 0 -6px',
      '&:hover': {
        color: (0,colorManipulator/* fade */.U1)(deleteIconColor, 0.4)
      }
    },

    /* Styles applied to the `deleteIcon` element if `size="small"`. */
    deleteIconSmall: {
      height: 16,
      width: 16,
      marginRight: 4,
      marginLeft: -4
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="default"`. */
    deleteIconColorPrimary: {
      color: (0,colorManipulator/* fade */.U1)(theme.palette.primary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="default"`. */
    deleteIconColorSecondary: {
      color: (0,colorManipulator/* fade */.U1)(theme.palette.secondary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`. */
    deleteIconOutlinedColorPrimary: {
      color: (0,colorManipulator/* fade */.U1)(theme.palette.primary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.main
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`. */
    deleteIconOutlinedColorSecondary: {
      color: (0,colorManipulator/* fade */.U1)(theme.palette.secondary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.main
      }
    }
  };
};

function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */


var Chip = /*#__PURE__*/react.forwardRef(function Chip(props, ref) {
  var avatarProp = props.avatar,
      classes = props.classes,
      className = props.className,
      clickableProp = props.clickable,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      ComponentProp = props.component,
      deleteIconProp = props.deleteIcon,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      iconProp = props.icon,
      label = props.label,
      onClick = props.onClick,
      onDelete = props.onDelete,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'default' : _props$variant,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["avatar", "classes", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant"]);

  var chipRef = react.useRef(null);
  var handleRef = (0,useForkRef/* default */.Z)(chipRef, ref);

  var handleDeleteIconClick = function handleDeleteIconClick(event) {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();

    if (onDelete) {
      onDelete(event);
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      // will be handled in keyUp, otherwise some browsers
      // might init navigation
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleKeyUp = function handleKeyUp(event) {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      } else if (event.key === 'Escape' && chipRef.current) {
        chipRef.current.blur();
      }
    }

    if (onKeyUp) {
      onKeyUp(event);
    }
  };

  var clickable = clickableProp !== false && onClick ? true : clickableProp;
  var small = size === 'small';
  var Component = ComponentProp || (clickable ? ButtonBase/* default */.Z : 'div');
  var moreProps = Component === ButtonBase/* default */.Z ? {
    component: 'div'
  } : {};
  var deleteIcon = null;

  if (onDelete) {
    var customClasses = (0,clsx_m/* default */.Z)(color !== 'default' && (variant === "default" ? classes["deleteIconColor".concat((0,capitalize/* default */.Z)(color))] : classes["deleteIconOutlinedColor".concat((0,capitalize/* default */.Z)(color))]), small && classes.deleteIconSmall);
    deleteIcon = deleteIconProp && /*#__PURE__*/react.isValidElement(deleteIconProp) ? /*#__PURE__*/react.cloneElement(deleteIconProp, {
      className: (0,clsx_m/* default */.Z)(deleteIconProp.props.className, classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    }) : /*#__PURE__*/react.createElement(Cancel, {
      className: (0,clsx_m/* default */.Z)(classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    });
  }

  var avatar = null;

  if (avatarProp && /*#__PURE__*/react.isValidElement(avatarProp)) {
    avatar = /*#__PURE__*/react.cloneElement(avatarProp, {
      className: (0,clsx_m/* default */.Z)(classes.avatar, avatarProp.props.className, small && classes.avatarSmall, color !== 'default' && classes["avatarColor".concat((0,capitalize/* default */.Z)(color))])
    });
  }

  var icon = null;

  if (iconProp && /*#__PURE__*/react.isValidElement(iconProp)) {
    icon = /*#__PURE__*/react.cloneElement(iconProp, {
      className: (0,clsx_m/* default */.Z)(classes.icon, iconProp.props.className, small && classes.iconSmall, color !== 'default' && classes["iconColor".concat((0,capitalize/* default */.Z)(color))])
    });
  }

  if (false) {}

  return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    role: clickable || onDelete ? 'button' : undefined,
    className: (0,clsx_m/* default */.Z)(classes.root, className, color !== 'default' && [classes["color".concat((0,capitalize/* default */.Z)(color))], clickable && classes["clickableColor".concat((0,capitalize/* default */.Z)(color))], onDelete && classes["deletableColor".concat((0,capitalize/* default */.Z)(color))]], variant !== "default" && [classes.outlined, {
      'primary': classes.outlinedPrimary,
      'secondary': classes.outlinedSecondary
    }[color]], disabled && classes.disabled, small && classes.sizeSmall, clickable && classes.clickable, onDelete && classes.deletable),
    "aria-disabled": disabled ? true : undefined,
    tabIndex: clickable || onDelete ? 0 : undefined,
    onClick: onClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: handleRef
  }, moreProps, other), avatar || icon, /*#__PURE__*/react.createElement("span", {
    className: (0,clsx_m/* default */.Z)(classes.label, small && classes.labelSmall)
  }, label), deleteIcon);
});
 false ? 0 : void 0;
/* harmony default export */ var Chip_Chip = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiChip'
})(Chip));

/***/ }),

/***/ 62481:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"
}), 'BugReport');

exports.Z = _default;

/***/ }),

/***/ 30263:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel');

exports.Z = _default;

/***/ }),

/***/ 95552:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"
}), 'OpenInBrowser');

exports.Z = _default;

/***/ }),

/***/ 66601:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
}), 'Pause');

exports.Z = _default;

/***/ }),

/***/ 42404:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M8 5v14l11-7z"
}), 'PlayArrow');

exports.Z = _default;

/***/ }),

/***/ 34264:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"
}), 'PlayForWork');

exports.Z = _default;

/***/ }),

/***/ 8567:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
}), 'Save');

exports.Z = _default;

/***/ }),

/***/ 34257:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M6 6h12v12H6z"
}), 'Stop');

exports.Z = _default;

/***/ }),

/***/ 20119:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ImportButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8266);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83332);
/* harmony import */ var _material_ui_icons_OpenInBrowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95552);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79885);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69672);

 // tslint:disable-next-line: no-submodule-imports match-default-export-name




var DropzoneDialog = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/* import() */ 7806).then(__webpack_require__.bind(__webpack_require__, 67806));
});
function ImportButton(props) {
  var text = props.text,
      onFilesUploaded = props.onFilesUploaded,
      disabled = props.disabled,
      acceptedFiles = props.acceptedFiles,
      icon = props.icon,
      filesLimit = props.filesLimit,
      className = props.className;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      open = _useState[0],
      setOpen = _useState[1];

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleSave = function handleSave(files) {
    if (files !== null && files !== void 0 && files.length) onFilesUploaded(files);
    setOpen(false);
  };

  var handleClose = function handleClose() {
    return setOpen(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    className: className
  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    title: text,
    onClick: handleOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_OpenInBrowser__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null)), !icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    disabled: disabled,
    variant: "outlined",
    onClick: handleOpen,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_OpenInBrowser__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null)
  }, text), open && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DropzoneDialog, {
    open: open,
    onSave: handleSave,
    maxFileSize: 5000000,
    onClose: handleClose,
    acceptedFiles: acceptedFiles,
    clearOnUnmount: true,
    filesLimit: filesLimit || 1,
    submitButtonText: "import"
  })));
}

/***/ }),

/***/ 961:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// NAMESPACE OBJECT: ./src/components/blockly/dsl/toolsdsl.ts
var toolsdsl_namespaceObject = {};
__webpack_require__.r(toolsdsl_namespaceObject);
__webpack_require__.d(toolsdsl_namespaceObject, {
  "Z": function() { return toolsdsl; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js
var NoSsr = __webpack_require__(42862);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(21258);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(42656);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(25342);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(75167);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(53719);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(85413);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js + 4 modules
var wrapNativeSuper = __webpack_require__(83001);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/environment.ts
var environment = __webpack_require__(96699);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/expr.ts
var vm_expr = __webpack_require__(18108);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/eventsource.ts
var eventsource = __webpack_require__(45484);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/compile.ts + 1 modules
var compile = __webpack_require__(79973);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/events.ts
var vm_events = __webpack_require__(59448);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/utils.ts
var Mutex = /*#__PURE__*/function () {
  function Mutex() {
    this.promises = [];
  }

  var _proto = Mutex.prototype;

  _proto.shift = function shift() {
    this.promises.shift();
    if (this.promises[0]) this.promises[0]();
  };

  _proto.acquire = function acquire(f) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      _this.promises.push(function () {
        return f().then(function (v) {
          _this.shift();

          resolve(v);
        }, function (e) {
          _this.shift();

          reject(e);
        });
      });

      if (_this.promises.length == 1) _this.promises[0]();
    });
  };

  return Mutex;
}();
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/client.ts
var client = __webpack_require__(47235);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/runner.ts







function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









 // eslint-disable-next-line @typescript-eslint/no-explicit-any

var VMInternalStatus;

(function (VMInternalStatus) {
  VMInternalStatus["Ready"] = "ready";
  VMInternalStatus["Enabled"] = "enabled";
  VMInternalStatus["Running"] = "running";
  VMInternalStatus["Sleeping"] = "sleep";
  VMInternalStatus["Completed"] = "completed";
  VMInternalStatus["Stopped"] = "stopped";
})(VMInternalStatus || (VMInternalStatus = {}));

var VM_WAKE_SLEEPER = "vmWakeSleeper";

var VMJumpException = /*#__PURE__*/function (_Error) {
  (0,inheritsLoose/* default */.Z)(VMJumpException, _Error);

  function VMJumpException(label) {
    var _this;

    _this = _Error.call(this) || this;
    _this.label = label;
    return _this;
  }

  return VMJumpException;
}( /*#__PURE__*/(0,wrapNativeSuper/* default */.Z)(Error));

var VMTimerException = /*#__PURE__*/function (_Error2) {
  (0,inheritsLoose/* default */.Z)(VMTimerException, _Error2);

  function VMTimerException(ms) {
    var _this2;

    _this2 = _Error2.call(this) || this;
    _this2.ms = ms;
    return _this2;
  }

  return VMTimerException;
}( /*#__PURE__*/(0,wrapNativeSuper/* default */.Z)(Error));

var VMCommandEvaluator = /*#__PURE__*/function () {
  function VMCommandEvaluator(parent, env, gc) {
    this._regSaved = undefined;
    this._changeSaved = undefined;
    this._started = false;
    this.parent = parent;
    this.env = env;
    this.gc = gc;
  }

  var _proto = VMCommandEvaluator.prototype;

  _proto.trace = function trace(msg, context) {
    if (context === void 0) {
      context = {};
    }

    this.parent.trace(msg, _objectSpread({
      command: this.gc.command.type
    }, context));
  };

  _proto.callEval = function callEval() {
    var _this3 = this;

    return function (caller, ee) {
      var callee = caller.callee;
      var namespace = callee.object.name;
      var funName = callee.property.name;
      var args = caller.arguments;

      if (namespace === "$fun") {
        switch (funName) {
          case "roleBoundExpression":
            {
              var _role = args[0].name;
              return _this3.env.roleBound(_role);
            }

          default: // ERROR

        }

        throw new environment/* VMException */.nt(environment/* VMExceptionCode.InternalError */.S8.InternalError, "unknown function " + namespace + "." + funName);
      } else throw new environment/* VMException */.nt(environment/* VMExceptionCode.InternalError */.S8.InternalError, "unknown namespace " + namespace);
    };
  };

  _proto.newEval = function newEval() {
    var _this4 = this;

    return new vm_expr/* VMExprEvaluator */.W( /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(e) {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this4.env.lookupAsync(e);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), this.callEval() // TODO: call expression for bound
    );
  };

  _proto.evalExpressionAsync = /*#__PURE__*/function () {
    var _evalExpressionAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(e) {
      var expr;
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              expr = this.newEval();
              _context2.next = 3;
              return expr.evalAsync(e);

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function evalExpressionAsync(_x2) {
      return _evalExpressionAsync.apply(this, arguments);
    }

    return evalExpressionAsync;
  }();

  _proto.checkExpressionAsync = /*#__PURE__*/function () {
    var _checkExpressionAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3(e) {
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.evalExpressionAsync(e);

            case 2:
              if (!_context3.sent) {
                _context3.next = 6;
                break;
              }

              _context3.t0 = true;
              _context3.next = 7;
              break;

            case 6:
              _context3.t0 = false;

            case 7:
              return _context3.abrupt("return", _context3.t0);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function checkExpressionAsync(_x3) {
      return _checkExpressionAsync.apply(this, arguments);
    }

    return checkExpressionAsync;
  }();

  _proto.startAsync = /*#__PURE__*/function () {
    var _startAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee4() {
      var args;
      return regenerator_default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(this.gc.command.callee.type !== "MemberExpression" && (this.inst === "awaitRegister" || this.inst === "awaitChange"))) {
                _context4.next = 10;
                break;
              }

              // need to capture register value for awaitChange/awaitRegister
              args = this.gc.command.arguments;
              _context4.next = 4;
              return this.evalExpressionAsync(args[0]);

            case 4:
              this._regSaved = _context4.sent;

              if (!(this.inst === "awaitChange")) {
                _context4.next = 9;
                break;
              }

              _context4.next = 8;
              return this.evalExpressionAsync(args[1]);

            case 8:
              this._changeSaved = _context4.sent;

            case 9:
              return _context4.abrupt("return", true);

            case 10:
              return _context4.abrupt("return", false);

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function startAsync() {
      return _startAsync.apply(this, arguments);
    }

    return startAsync;
  }();

  _proto.evaluate = /*#__PURE__*/function () {
    var _evaluate = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee5() {
      var neededStart, args, expr, _values, _iterator, _step, a, _expr, event, _role2, _event, regValue, _expr2, ev, reg, _this$gc, _expr3, _ev, _this$gc2, _expr4, _ev2, evString, _expr5, _ev3;

      return regenerator_default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (this._started) {
                _context5.next = 7;
                break;
              }

              _context5.next = 3;
              return this.startAsync();

            case 3:
              neededStart = _context5.sent;
              this._started = true;

              if (!neededStart) {
                _context5.next = 7;
                break;
              }

              return _context5.abrupt("return", VMInternalStatus.Running);

            case 7:
              args = this.gc.command.arguments;

              if (!(this.gc.command.callee.type === "MemberExpression")) {
                _context5.next = 24;
                break;
              }

              // interpret as a service command (role.comand)
              expr = this.newEval(); // TODO

              _values = [];
              _iterator = _createForOfIteratorHelperLoose(this.gc.command.arguments);

            case 12:
              if ((_step = _iterator()).done) {
                _context5.next = 21;
                break;
              }

              a = _step.value;
              _context5.t0 = _values;
              _context5.next = 17;
              return expr.evalAsync(a);

            case 17:
              _context5.t1 = _context5.sent;

              _context5.t0.push.call(_context5.t0, _context5.t1);

            case 19:
              _context5.next = 12;
              break;

            case 21:
              _context5.next = 23;
              return this.env.sendCommandAsync(this.gc.command.callee, _values);

            case 23:
              return _context5.abrupt("return", VMInternalStatus.Completed);

            case 24:
              _context5.t2 = this.inst;
              _context5.next = _context5.t2 === "branchOnCondition" ? 27 : _context5.t2 === "jump" ? 33 : _context5.t2 === "label" ? 34 : _context5.t2 === "awaitEvent" ? 35 : _context5.t2 === "roleBound" ? 46 : _context5.t2 === "awaitCondition" ? 49 : _context5.t2 === "awaitChange" ? 57 : _context5.t2 === "awaitRegister" ? 57 : _context5.t2 === "writeRegister" ? 63 : _context5.t2 === "writeLocal" ? 63 : _context5.t2 === "watch" ? 77 : _context5.t2 === "log" ? 83 : _context5.t2 === "halt" ? 90 : _context5.t2 === "nop" ? 91 : _context5.t2 === "wait" ? 92 : 97;
              break;

            case 27:
              _context5.next = 29;
              return this.checkExpressionAsync(args[0]);

            case 29:
              _expr = _context5.sent;

              if (!_expr) {
                _context5.next = 32;
                break;
              }

              throw new VMJumpException(args[1].name);

            case 32:
              return _context5.abrupt("return", VMInternalStatus.Completed);

            case 33:
              throw new VMJumpException(args[0].name);

            case 34:
              return _context5.abrupt("return", VMInternalStatus.Completed);

            case 35:
              event = args[0];

              if (!this.env.hasEvent(event)) {
                _context5.next = 45;
                break;
              }

              _context5.next = 39;
              return this.checkExpressionAsync(args[1]);

            case 39:
              if (!_context5.sent) {
                _context5.next = 43;
                break;
              }

              _context5.t3 = VMInternalStatus.Completed;
              _context5.next = 44;
              break;

            case 43:
              _context5.t3 = VMInternalStatus.Running;

            case 44:
              return _context5.abrupt("return", _context5.t3);

            case 45:
              return _context5.abrupt("return", VMInternalStatus.Running);

            case 46:
              _role2 = args[0].name;
              _event = args[1].name;
              return _context5.abrupt("return", this.env.roleTransition(_role2, _event) ? VMInternalStatus.Completed : VMInternalStatus.Running);

            case 49:
              _context5.next = 51;
              return this.checkExpressionAsync(args[0]);

            case 51:
              if (!_context5.sent) {
                _context5.next = 55;
                break;
              }

              _context5.t4 = VMInternalStatus.Completed;
              _context5.next = 56;
              break;

            case 55:
              _context5.t4 = VMInternalStatus.Running;

            case 56:
              return _context5.abrupt("return", _context5.t4);

            case 57:
              _context5.next = 59;
              return this.evalExpressionAsync(args[0]);

            case 59:
              regValue = _context5.sent;

              if (!(this.inst === "awaitRegister" && regValue !== this._regSaved || this.inst === "awaitChange" && (this._changeSaved === 0 && regValue !== this._regSaved || this._changeSaved < 0 && regValue <= this._regSaved + this._changeSaved || this._changeSaved > 0 && regValue >= this._regSaved + this._changeSaved))) {
                _context5.next = 62;
                break;
              }

              return _context5.abrupt("return", VMInternalStatus.Completed);

            case 62:
              return _context5.abrupt("return", VMInternalStatus.Running);

            case 63:
              _expr2 = this.newEval();
              _context5.next = 66;
              return _expr2.evalAsync(args[1]);

            case 66:
              ev = _context5.sent;
              this.trace("eval-end", {
                expr: (0,vm_expr/* unparse */.Z)(args[1])
              });
              reg = args[0];

              if (!(this.inst === "writeRegister")) {
                _context5.next = 75;
                break;
              }

              _context5.next = 72;
              return this.env.writeRegisterAsync(reg, ev);

            case 72:
              this.trace("write-after-wait", {
                reg: (0,vm_expr/* unparse */.Z)(reg),
                expr: ev
              });
              _context5.next = 76;
              break;

            case 75:
              this.env.writeGlobal(reg, ev);

            case 76:
              return _context5.abrupt("return", VMInternalStatus.Completed);

            case 77:
              _expr3 = this.newEval();
              _context5.next = 80;
              return _expr3.evalAsync(args[0]);

            case 80:
              _ev = _context5.sent;
              this.parent.watch((_this$gc = this.gc) === null || _this$gc === void 0 ? void 0 : _this$gc.sourceId, _ev);
              return _context5.abrupt("return", VMInternalStatus.Completed);

            case 83:
              _expr4 = this.newEval();
              _context5.next = 86;
              return _expr4.evalAsync(args[0]);

            case 86:
              _ev2 = _context5.sent;
              evString = _ev2 + "";
              this.parent.writeLog((_this$gc2 = this.gc) === null || _this$gc2 === void 0 ? void 0 : _this$gc2.sourceId, evString);
              return _context5.abrupt("return", VMInternalStatus.Completed);

            case 90:
              return _context5.abrupt("return", VMInternalStatus.Stopped);

            case 91:
              return _context5.abrupt("return", VMInternalStatus.Completed);

            case 92:
              _expr5 = this.newEval();
              _context5.next = 95;
              return _expr5.evalAsync(args[0]);

            case 95:
              _ev3 = _context5.sent;
              throw new VMTimerException(_ev3 * 1000);

            case 97:
              throw new environment/* VMException */.nt(environment/* VMExceptionCode.InternalError */.S8.InternalError, "Unknown instruction " + this.inst);

            case 98:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function evaluate() {
      return _evaluate.apply(this, arguments);
    }

    return evaluate;
  }();

  (0,createClass/* default */.Z)(VMCommandEvaluator, [{
    key: "inst",
    get: function get() {
      var _this$gc$command$call;

      return (_this$gc$command$call = this.gc.command.callee) === null || _this$gc$command$call === void 0 ? void 0 : _this$gc$command$call.name;
    }
  }]);

  return VMCommandEvaluator;
}();

var VMCommandRunner = /*#__PURE__*/function () {
  function VMCommandRunner(parent, handlerId, env, gc) {
    this._status = VMInternalStatus.Running;
    this.parent = parent;
    this.handlerId = handlerId;
    this.gc = gc;
    this._eval = new VMCommandEvaluator(this, env, gc);
  }

  var _proto2 = VMCommandRunner.prototype;

  _proto2.trace = function trace(msg, context) {
    if (context === void 0) {
      context = {};
    }

    this.parent.trace(msg, _objectSpread({
      handler: this.handlerId
    }, context));
  };

  _proto2.watch = function watch(id, val) {
    this.parent.watch(id, val);
  };

  _proto2.writeLog = function writeLog(id, val) {
    this.parent.writeLog(id, val);
  };

  _proto2.stepAsync = /*#__PURE__*/function () {
    var _stepAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee6() {
      return regenerator_default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!(this.status === VMInternalStatus.Running)) {
                _context6.next = 5;
                break;
              }

              this.trace((0,vm_expr/* unparse */.Z)(this.gc.command));
              _context6.next = 4;
              return this._eval.evaluate();

            case 4:
              this.status = _context6.sent;

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function stepAsync() {
      return _stepAsync.apply(this, arguments);
    }

    return stepAsync;
  }();

  (0,createClass/* default */.Z)(VMCommandRunner, [{
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(s) {
      this._status = s;
    }
  }]);

  return VMCommandRunner;
}();

var VMHandlerRunner = /*#__PURE__*/function (_JDEventSource) {
  (0,inheritsLoose/* default */.Z)(VMHandlerRunner, _JDEventSource);

  function VMHandlerRunner(parent, id, env, handler) {
    var _this5;

    _this5 = _JDEventSource.call(this) || this; // find the label commands (targets of jumps)

    _this5._commandIndex = undefined;
    _this5._currentCommand = undefined;
    _this5.stopped = false;
    _this5._labelToIndex = {};
    _this5.parent = parent;
    _this5.id = id;
    _this5.env = env;
    _this5.handler = handler;

    _this5.handler.commands.forEach(function (c, index) {
      var _cmd$command;

      var cmd = c;
      var id = (_cmd$command = cmd.command) === null || _cmd$command === void 0 ? void 0 : _cmd$command.callee;

      if ((id === null || id === void 0 ? void 0 : id.name) === "label") {
        var _label = cmd.command.arguments[0];
        _this5._labelToIndex[_label.name] = index;
      }
    });

    _this5.reset();

    return _this5;
  }

  var _proto3 = VMHandlerRunner.prototype;

  _proto3.trace = function trace(msg, context) {
    if (context === void 0) {
      context = {};
    }

    this.parent.trace(msg, _objectSpread({
      id: this.id
    }, context));
  };

  _proto3.watch = function watch(id, val) {
    this.parent.watch(id, val);
  };

  _proto3.writeLog = function writeLog(id, val) {
    this.parent.writeLog(id, val);
  };

  _proto3.gotoTop = function gotoTop() {
    if (this.status === VMInternalStatus.Ready && this.handler.commands.length) this.commandIndex = 0;
  };

  _proto3.reset = function reset() {
    this.commandIndex = undefined;
    this.stopped = false;
  };

  _proto3.cancel = function cancel() {
    this.stopped = true;
    this.env.unsubscribe();
  };

  _proto3.wake = function wake() {
    if (this._currentCommand) {
      this._currentCommand.status = VMInternalStatus.Completed;
      this.next();
    }
  } // run-to-completion semantics
  // returns command if breakpoint encountered when not single stepping
  ;

  _proto3.runToCompletionAsync =
  /*#__PURE__*/
  function () {
    var _runToCompletionAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee7(singleStep) {
      return regenerator_default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (singleStep === void 0) {
                singleStep = false;
              }

              if (!(this.stopped || !this.handler.commands.length)) {
                _context7.next = 3;
                break;
              }

              return _context7.abrupt("return", undefined);

            case 3:
              if (this.commandIndex === undefined) {
                this.commandIndex = 0;
              }

              _context7.next = 6;
              return this.singleStepCheckBreakAsync(singleStep);

            case 6:
              _context7.t0 = _context7.sent;

              if (!_context7.t0) {
                _context7.next = 9;
                break;
              }

              _context7.t0 = !singleStep;

            case 9:
              if (!_context7.t0) {
                _context7.next = 11;
                break;
              }

              return _context7.abrupt("return", this._currentCommand);

            case 11:
              if (!this.next()) {
                _context7.next = 21;
                break;
              }

              _context7.t1 = singleStep;

              if (_context7.t1) {
                _context7.next = 17;
                break;
              }

              _context7.next = 16;
              return this.singleStepCheckBreakAsync();

            case 16:
              _context7.t1 = _context7.sent;

            case 17:
              if (!_context7.t1) {
                _context7.next = 19;
                break;
              }

              return _context7.abrupt("return", this._currentCommand);

            case 19:
              _context7.next = 11;
              break;

            case 21:
              return _context7.abrupt("return", undefined);

            case 22:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function runToCompletionAsync(_x4) {
      return _runToCompletionAsync.apply(this, arguments);
    }

    return runToCompletionAsync;
  }();

  _proto3.next = function next() {
    if (this._currentCommand.status === VMInternalStatus.Completed && this.commandIndex < this.handler.commands.length - 1) {
      this.commandIndex++;
      return true;
    }

    return false;
  };

  _proto3.getCommand = function getCommand() {
    var cmd = this.handler.commands[this._commandIndex];

    if (cmd.type === "ite") {
      throw new environment/* VMException */.nt(environment/* VMExceptionCode.InternalError */.S8.InternalError, "ite not compiled away");
    }

    return cmd;
  };

  _proto3.singleStepCheckBreakAsync = /*#__PURE__*/function () {
    var _singleStepCheckBreakAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee8(singleStep) {
      var _this$_currentCommand;

      var sid;
      return regenerator_default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (singleStep === void 0) {
                singleStep = false;
              }

              this.trace("step begin");
              sid = (_this$_currentCommand = this._currentCommand.gc) === null || _this$_currentCommand === void 0 ? void 0 : _this$_currentCommand.sourceId;
              _context8.t0 = !singleStep;

              if (!_context8.t0) {
                _context8.next = 8;
                break;
              }

              _context8.next = 7;
              return this.parent.breakpointOnAsync(sid);

            case 7:
              _context8.t0 = _context8.sent;

            case 8:
              if (!_context8.t0) {
                _context8.next = 10;
                break;
              }

              return _context8.abrupt("return", true);

            case 10:
              _context8.next = 12;
              return this.singleStepAsync();

            case 12:
              this.trace("step end");
              return _context8.abrupt("return", false);

            case 14:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function singleStepCheckBreakAsync(_x5) {
      return _singleStepCheckBreakAsync.apply(this, arguments);
    }

    return singleStepCheckBreakAsync;
  }();

  _proto3.singleStepAsync = /*#__PURE__*/function () {
    var _singleStepAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee9() {
      var sid, _ref2, _label2, index, vmt;

      return regenerator_default().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              sid = this._currentCommand.gc.sourceId;
              _context9.prev = 1;
              _context9.next = 4;
              return this._currentCommand.stepAsync();

            case 4:
              _context9.next = 24;
              break;

            case 6:
              _context9.prev = 6;
              _context9.t0 = _context9["catch"](1);

              if (!(_context9.t0 instanceof VMJumpException)) {
                _context9.next = 15;
                break;
              }

              _ref2 = _context9.t0, _label2 = _ref2.label;
              index = this._labelToIndex[_label2];
              this.commandIndex = index;
              this._currentCommand.status = VMInternalStatus.Completed;
              _context9.next = 24;
              break;

            case 15:
              if (!(_context9.t0 instanceof VMTimerException)) {
                _context9.next = 22;
                break;
              }

              vmt = _context9.t0;
              this._currentCommand.status = VMInternalStatus.Sleeping;
              _context9.next = 20;
              return this.parent.sleepAsync(this, vmt.ms);

            case 20:
              _context9.next = 24;
              break;

            case 22:
              this.emit(vm_events/* VM_COMMAND_FAILED */.ai, this._currentCommand.gc.sourceId);
              throw _context9.t0;

            case 24:
              if (this._currentCommand.status === VMInternalStatus.Stopped) this.stopped = true;

            case 25:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this, [[1, 6]]);
    }));

    function singleStepAsync() {
      return _singleStepAsync.apply(this, arguments);
    }

    return singleStepAsync;
  }();

  (0,createClass/* default */.Z)(VMHandlerRunner, [{
    key: "status",
    get: function get() {
      return this.stopped ? VMInternalStatus.Stopped : this._commandIndex === undefined ? VMInternalStatus.Ready : this._currentCommand.status === VMInternalStatus.Completed && this._commandIndex < this.handler.commands.length - 1 ? VMInternalStatus.Running : this._currentCommand.status;
    }
  }, {
    key: "command",
    get: function get() {
      return this._currentCommand;
    }
  }, {
    key: "atTop",
    get: function get() {
      return this.status === VMInternalStatus.Running && this._commandIndex === 0;
    }
  }, {
    key: "commandIndex",
    get: function get() {
      return this._commandIndex;
    },
    set: function set(index) {
      if (index === undefined) {
        this._commandIndex = undefined;
        this._currentCommand = undefined;
      } else if (index !== this._commandIndex) {
        this._commandIndex = index;
        this._currentCommand = new VMCommandRunner(this, this.id, this.env, this.getCommand());
      }
    }
  }]);

  return VMHandlerRunner;
}(eventsource/* JDEventSource */.a);

function isEveryHandler(h) {
  (0,utils/* assert */.hu)(!!h);

  if (h.commands.length) {
    var cmd = h.commands[0].command.callee;
    return cmd.name === "wait";
  }

  return false;
}

var VMStatus;

(function (VMStatus) {
  VMStatus["Stopped"] = "stopped";
  VMStatus["Running"] = "running";
  VMStatus["Paused"] = "paused";
})(VMStatus || (VMStatus = {}));

var MAX_LOG = 100;
var VMProgramRunner = /*#__PURE__*/function (_JDClient) {
  (0,inheritsLoose/* default */.Z)(VMProgramRunner, _JDClient);

  // program, environment
  // debugging
  function VMProgramRunner(bus, roleManager, program) {
    var _this6;

    _this6 = _JDClient.call(this) || this;
    _this6._handlerRunners = [];
    _this6._roles = [];
    _this6._waitQueue = [];
    _this6._everyQueue = [];
    _this6._runQueue = [];
    _this6._sleepQueue = [];
    _this6._watch = {};
    _this6._log = [];
    _this6._breaks = {};
    _this6._in_run = false;
    _this6.bus = bus;
    _this6.roleManager = roleManager;
    _this6.program = program;
    var compiled = (0,compile/* compileProgram */.IJ)(program);

    var _checkProgram = (0,compile/* checkProgram */.i_)(compiled),
        registers = _checkProgram.registers,
        events = _checkProgram.events,
        errors = _checkProgram.errors;

    _this6._roles = compiled.roles;
    if (errors !== null && errors !== void 0 && errors.length) console.debug("ERRORS", errors); // data structures for running program

    _this6._status = VMStatus.Stopped;
    _this6._env = new environment/* VMEnvironment */.uH(registers, events);
    _this6._handlerRunners = compiled.handlers.map(function (h, index) {
      return new VMHandlerRunner((0,assertThisInitialized/* default */.Z)(_this6), index, _this6._env, h);
    }); // TODO: can't add multiple handlers until we have deduplicate CHANGE on Event

    /*
    const len = this._handlerRunners.length
    compiled.handlers.forEach((h, index) =>
        this._handlerRunners.push(
            new VMHandlerRunner(this, len + index, this._env, h)
        )
    )*/

    _this6._waitRunMutex = new Mutex();
    _this6._breaksMutex = new Mutex();
    _this6._sleepMutex = new Mutex(); // TODO: only try to wake handlers that are waiting on change to reg or event

    _this6.mount(_this6._env.subscribe(environment/* REGISTER_CHANGE */.nI, function (reg) {
      _this6.waitingToRunning();
    }));

    _this6.mount(_this6._env.subscribe(environment/* EVENT_CHANGE */.KT, function (event) {
      _this6.waitingToRunning();
    }));

    _this6.mount(_this6._env.subscribe(environment/* GLOBAL_CHANGE */.pO, function (name) {
      _this6.emit(vm_events/* VM_GLOBAL_CHANGE */.b4, name);

      _this6.waitingToRunning();
    }));

    _this6.mount(_this6.subscribe(VM_WAKE_SLEEPER, /*#__PURE__*/function () {
      var _ref3 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee10(h) {
        return regenerator_default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _this6.wakeSleeper(h);

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function (_x6) {
        return _ref3.apply(this, arguments);
      };
    }()));

    _this6.initializeRoleManagement();

    return _this6;
  } // control of VM


  var _proto4 = VMProgramRunner.prototype;

  _proto4.globals = function globals() {
    var g = this._env.globals();

    return Object.keys(g).map(function (k) {
      return {
        name: k,
        value: g[k].value
      };
    });
  };

  _proto4.setStatus = function setStatus(s) {
    if (s !== this._status) {
      this._status = s;
      this.emit(constants/* CHANGE */.Ver);
    }
  } // debugging
  ;

  _proto4.trace = function trace(message, context) {
    if (context === void 0) {
      context = {};
    }

    this.emit(constants/* TRACE */.jes, {
      message: message,
      context: context
    });
  };

  _proto4.watch = function watch(sourceId, value) {
    this._watch[sourceId] = value;
    this.emit(vm_events/* VM_WATCH_CHANGE */.UM, sourceId);
  };

  _proto4.writeLog = function writeLog(sourceId, value) {
    var s = value + "";
    var last = this._log[this._log.length - 1];
    if ((last === null || last === void 0 ? void 0 : last.text) === s) last.count++;else this._log.push({
      text: value + "",
      count: 1
    });

    while (this._log.length > MAX_LOG) {
      this._log.shift();
    }

    this.emit(vm_events/* VM_LOG_ENTRY */.aG, sourceId);
  };

  _proto4.lookupWatch = function lookupWatch(sourceId) {
    return this._watch[sourceId];
  };

  _proto4.setBreakpointsAsync = /*#__PURE__*/function () {
    var _setBreakpointsAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee12(breaks) {
      var _this7 = this;

      return regenerator_default().wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return this._breaksMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee11() {
                return regenerator_default().wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        _this7._breaks = {};
                        breaks.forEach(function (b) {
                          _this7._breaks[b] = true;
                        });

                      case 2:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11);
              })));

            case 2:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function setBreakpointsAsync(_x7) {
      return _setBreakpointsAsync.apply(this, arguments);
    }

    return setBreakpointsAsync;
  }();

  _proto4.clearBreakpointsAsync = /*#__PURE__*/function () {
    var _clearBreakpointsAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee14() {
      var _this8 = this;

      return regenerator_default().wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return this._breaksMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee13() {
                return regenerator_default().wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        _this8._breaks = {};

                      case 1:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13);
              })));

            case 2:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function clearBreakpointsAsync() {
      return _clearBreakpointsAsync.apply(this, arguments);
    }

    return clearBreakpointsAsync;
  }();

  _proto4.breakpointOnAsync = /*#__PURE__*/function () {
    var _breakpointOnAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee16(id) {
      var _this9 = this;

      var ret;
      return regenerator_default().wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              ret = false;
              _context16.next = 3;
              return this._breaksMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee15() {
                var _this9$_breaks;

                return regenerator_default().wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        ret = !!((_this9$_breaks = _this9._breaks) !== null && _this9$_breaks !== void 0 && _this9$_breaks[id]);

                      case 1:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15);
              })));

            case 3:
              return _context16.abrupt("return", ret);

            case 4:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, this);
    }));

    function breakpointOnAsync(_x8) {
      return _breakpointOnAsync.apply(this, arguments);
    }

    return breakpointOnAsync;
  }() // utility called by handlerRunner
  ;

  _proto4.sleepAsync =
  /*#__PURE__*/
  function () {
    var _sleepAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee18(h, ms, handler) {
      var _this10 = this;

      return regenerator_default().wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              if (handler === void 0) {
                handler = undefined;
              }

              (0,utils/* assert */.hu)(h.status === VMInternalStatus.Sleeping);
              _context18.next = 4;
              return this._sleepMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee17() {
                var id;
                return regenerator_default().wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        id = setTimeout(function () {
                          _this10.emit(VM_WAKE_SLEEPER, h ? h : handler);
                        }, ms);

                        _this10._sleepQueue.push({
                          ms: ms,
                          handlerRunner: h,
                          id: id,
                          handler: handler
                        });

                      case 2:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17);
              })));

            case 4:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18, this);
    }));

    function sleepAsync(_x9, _x10, _x11) {
      return _sleepAsync.apply(this, arguments);
    }

    return sleepAsync;
  }();

  _proto4.startAsync = /*#__PURE__*/function () {
    var _startAsync2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee20() {
      var _this11 = this;

      return regenerator_default().wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              if (!(this.status !== VMStatus.Stopped)) {
                _context20.next = 2;
                break;
              }

              return _context20.abrupt("return");

            case 2:
              // already running
              this.trace("start");
              _context20.prev = 3;
              this.roleManager.setRoles(this._roles);
              _context20.next = 7;
              return this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee19() {
                return regenerator_default().wrap(function _callee19$(_context19) {
                  while (1) {
                    switch (_context19.prev = _context19.next) {
                      case 0:
                        _this11._waitQueue = _this11._handlerRunners.slice(0);

                        _this11._waitQueue.forEach(function (h) {
                          return h.reset();
                        });

                        _this11._runQueue = [];
                        _this11._everyQueue = [];

                        _this11._env.clearEvents();

                        _this11._env.initRoles();

                        _this11.stopSleepers(); // make sure to have another handler for every

                        /*
                        for (const h of this._waitQueue) {
                            if (isEveryHandler(h.handler)) {
                                const dup = new VMHandlerRunner(
                                    this,
                                    undefined,
                                    this._env,
                                    h.handler
                                )
                                dup.reset()
                                this._everyQueue.push(dup)
                            }
                        }*/


                      case 7:
                      case "end":
                        return _context19.stop();
                    }
                  }
                }, _callee19);
              })));

            case 7:
              this.clearBreakpointsAsync();
              this.setStatus(VMStatus.Running);
              this.waitingToRunning();
              _context20.next = 16;
              break;

            case 12:
              _context20.prev = 12;
              _context20.t0 = _context20["catch"](3);
              console.debug(_context20.t0);
              this.emit(vm_events/* VM_INTERNAL_ERROR */.c2, _context20.t0);

            case 16:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20, this, [[3, 12]]);
    }));

    function startAsync() {
      return _startAsync2.apply(this, arguments);
    }

    return startAsync;
  }();

  _proto4.cancel = function cancel() {
    if (this.status === VMStatus.Stopped) return; // nothing to cancel

    this.setStatus(VMStatus.Stopped);
    this.trace("cancelled");
  };

  _proto4.resumeAsync = /*#__PURE__*/function () {
    var _resumeAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee21() {
      return regenerator_default().wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              if (!(this.status !== VMStatus.Paused)) {
                _context21.next = 2;
                break;
              }

              return _context21.abrupt("return");

            case 2:
              this.trace("resume");
              this.setStatus(VMStatus.Running);
              _context21.next = 6;
              return this.runAsync();

            case 6:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21, this);
    }));

    function resumeAsync() {
      return _resumeAsync.apply(this, arguments);
    }

    return resumeAsync;
  }();

  _proto4.getCurrentRunner = /*#__PURE__*/function () {
    var _getCurrentRunner = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee23() {
      var _this12 = this;

      return regenerator_default().wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              _context23.next = 2;
              return this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee22() {
                return regenerator_default().wrap(function _callee22$(_context22) {
                  while (1) {
                    switch (_context22.prev = _context22.next) {
                      case 0:
                        if (!_this12._runQueue.length) {
                          _context22.next = 2;
                          break;
                        }

                        return _context22.abrupt("return", _this12._runQueue[0]);

                      case 2:
                        return _context22.abrupt("return", undefined);

                      case 3:
                      case "end":
                        return _context22.stop();
                    }
                  }
                }, _callee22);
              })));

            case 2:
              return _context23.abrupt("return", _context23.sent);

            case 3:
            case "end":
              return _context23.stop();
          }
        }
      }, _callee23, this);
    }));

    function getCurrentRunner() {
      return _getCurrentRunner.apply(this, arguments);
    }

    return getCurrentRunner;
  }();

  _proto4.stepAsync = /*#__PURE__*/function () {
    var _stepAsync2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee24() {
      var h, newHead;
      return regenerator_default().wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              if (!(this.status !== VMStatus.Paused)) {
                _context24.next = 2;
                break;
              }

              return _context24.abrupt("return");

            case 2:
              this.trace("step");
              _context24.next = 5;
              return this.getCurrentRunner();

            case 5:
              h = _context24.sent;

              if (!h) {
                _context24.next = 15;
                break;
              }

              _context24.next = 9;
              return this.runHandlerAsync(h, true);

            case 9:
              _context24.next = 11;
              return this.postProcessHandler(h);

            case 11:
              _context24.next = 13;
              return this.getCurrentRunner();

            case 13:
              newHead = _context24.sent;

              if (newHead && newHead !== h) {
                this.emitBreakpoint(newHead);
              }

            case 15:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee24, this);
    }));

    function stepAsync() {
      return _stepAsync2.apply(this, arguments);
    }

    return stepAsync;
  }();

  _proto4.runAsync = /*#__PURE__*/function () {
    var _runAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee25() {
      var h;
      return regenerator_default().wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              if (!(this.status === VMStatus.Stopped)) {
                _context25.next = 2;
                break;
              }

              return _context25.abrupt("return");

            case 2:
              if (!this._in_run) {
                _context25.next = 4;
                break;
              }

              return _context25.abrupt("return");

            case 4:
              this.trace("run");
              this._in_run = true;
              _context25.prev = 6;
              h = undefined;

            case 8:
              _context25.t0 = this.status === VMStatus.Running;

              if (!_context25.t0) {
                _context25.next = 13;
                break;
              }

              _context25.next = 12;
              return this.getCurrentRunner();

            case 12:
              _context25.t0 = h = _context25.sent;

            case 13:
              if (!_context25.t0) {
                _context25.next = 21;
                break;
              }

              (0,utils/* assert */.hu)(!h.atTop);
              _context25.next = 17;
              return this.runHandlerAsync(h);

            case 17:
              _context25.next = 19;
              return this.postProcessHandler(h);

            case 19:
              _context25.next = 8;
              break;

            case 21:
              _context25.next = 27;
              break;

            case 23:
              _context25.prev = 23;
              _context25.t1 = _context25["catch"](6);
              console.debug(_context25.t1);
              this.emit(vm_events/* VM_INTERNAL_ERROR */.c2, _context25.t1);

            case 27:
              this._in_run = false;
              this.trace("run end");

            case 29:
            case "end":
              return _context25.stop();
          }
        }
      }, _callee25, this, [[6, 23]]);
    }));

    function runAsync() {
      return _runAsync.apply(this, arguments);
    }

    return runAsync;
  }();

  _proto4.emitBreakpoint = function emitBreakpoint(h) {
    var _h$command$gc;

    this.emit(vm_events/* VM_BREAKPOINT */.Di, h, h.status === VMInternalStatus.Completed ? "" : (_h$command$gc = h.command.gc) === null || _h$command$gc === void 0 ? void 0 : _h$command$gc.sourceId);
  };

  _proto4.runHandlerAsync = /*#__PURE__*/function () {
    var _runHandlerAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee26(h, oneStep) {
      var brkCommand, ex;
      return regenerator_default().wrap(function _callee26$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              if (oneStep === void 0) {
                oneStep = false;
              }

              _context26.prev = 1;
              _context26.next = 4;
              return h.runToCompletionAsync(oneStep);

            case 4:
              brkCommand = _context26.sent;

              if (brkCommand && !oneStep || this.status === VMStatus.Paused) {
                this.setStatus(VMStatus.Paused);
                this.emitBreakpoint(h);
              }

              if (h.status === VMInternalStatus.Completed) {
                h.reset();
              }

              _context26.next = 13;
              break;

            case 9:
              _context26.prev = 9;
              _context26.t0 = _context26["catch"](1);

              if (_context26.t0 instanceof environment/* VMException */.nt) {
                ex = _context26.t0;
                if (ex.code === environment/* VMExceptionCode.RoleNoService */.S8.RoleNoService) this.emit(vm_events/* VM_ROLE_MISSING */.XD, _context26.t0.data);
              } else {
                console.debug(_context26.t0);
                this.emit(vm_events/* VM_INTERNAL_ERROR */.c2, _context26.t0);
              } // on handler error, reset the handler


              h.reset();

            case 13:
            case "end":
              return _context26.stop();
          }
        }
      }, _callee26, this, [[1, 9]]);
    }));

    function runHandlerAsync(_x12, _x13) {
      return _runHandlerAsync.apply(this, arguments);
    }

    return runHandlerAsync;
  }();

  _proto4.postProcessHandler = /*#__PURE__*/function () {
    var _postProcessHandler = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee29(h) {
      var _this13 = this;

      var done;
      return regenerator_default().wrap(function _callee29$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              if (!(h.status === VMInternalStatus.Ready || h.status === VMInternalStatus.Sleeping || h.status === VMInternalStatus.Stopped)) {
                _context29.next = 13;
                break;
              }

              done = undefined;
              _context29.next = 4;
              return this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee27() {
                var moveToWait;
                return regenerator_default().wrap(function _callee27$(_context27) {
                  while (1) {
                    switch (_context27.prev = _context27.next) {
                      case 0:
                        (0,utils/* assert */.hu)(!!_this13._runQueue.length);
                        (0,utils/* assert */.hu)(h === _this13._runQueue[0]);
                        done = _this13._runQueue.shift();
                        moveToWait = h.status === VMInternalStatus.Ready;

                        if (moveToWait && !isEveryHandler(h.handler)) {
                          _this13._waitQueue.push(done);

                          done = undefined;
                        }

                      case 5:
                      case "end":
                        return _context27.stop();
                    }
                  }
                }, _callee27);
              })));

            case 4:
              if (!(done && h.status === VMInternalStatus.Ready && isEveryHandler(h.handler))) {
                _context29.next = 13;
                break;
              }

              if (!(this.status === VMStatus.Running)) {
                _context29.next = 10;
                break;
              }

              _context29.next = 8;
              return this.runHandlerAsync(h);

            case 8:
              _context29.next = 13;
              break;

            case 10:
              if (!(this.status === VMStatus.Paused)) {
                _context29.next = 13;
                break;
              }

              _context29.next = 13;
              return this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee28() {
                return regenerator_default().wrap(function _callee28$(_context28) {
                  while (1) {
                    switch (_context28.prev = _context28.next) {
                      case 0:
                        _this13._runQueue.unshift(h); // this.emitBreakpoint(h)


                      case 1:
                      case "end":
                        return _context28.stop();
                    }
                  }
                }, _callee28);
              })));

            case 13:
            case "end":
              return _context29.stop();
          }
        }
      }, _callee29, this);
    }));

    function postProcessHandler(_x14) {
      return _postProcessHandler.apply(this, arguments);
    }

    return postProcessHandler;
  }() // call this whenever some event/change arises
  ;

  _proto4.waitingToRunning =
  /*#__PURE__*/
  function () {
    var _waitingToRunning = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee31() {
      var _this14 = this;

      return regenerator_default().wrap(function _callee31$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              if (!(this.status !== VMStatus.Stopped)) {
                _context32.next = 7;
                break;
              }

              this.trace("waiting to running - try");
              _context32.next = 4;
              return this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee30() {
                var handlersStarted, newRunners, sleepingRunners, _loop, _iterator2, _step2;

                return regenerator_default().wrap(function _callee30$(_context31) {
                  while (1) {
                    switch (_context31.prev = _context31.next) {
                      case 0:
                        if (!(_this14.status === VMStatus.Paused && _this14._runQueue.length)) {
                          _context31.next = 2;
                          break;
                        }

                        return _context31.abrupt("return");

                      case 2:
                        _this14.trace("waiting to running - start");

                        handlersStarted = [];
                        newRunners = [];
                        sleepingRunners = [];
                        _loop = /*#__PURE__*/regenerator_default().mark(function _loop() {
                          var h;
                          return regenerator_default().wrap(function _loop$(_context30) {
                            while (1) {
                              switch (_context30.prev = _context30.next) {
                                case 0:
                                  h = _step2.value;
                                  _context30.next = 3;
                                  return _this14.runHandlerAsync(h, true);

                                case 3:
                                  if (h.status === VMInternalStatus.Sleeping) {
                                    sleepingRunners.push(h);
                                  } else if (!h.atTop && handlersStarted.findIndex(function (hs) {
                                    return hs === h.handler;
                                  }) === -1) {
                                    newRunners.push(h);
                                    handlersStarted.push(h.handler);
                                  }

                                case 4:
                                case "end":
                                  return _context30.stop();
                              }
                            }
                          }, _loop);
                        });
                        _iterator2 = _createForOfIteratorHelperLoose(_this14._waitQueue);

                      case 8:
                        if ((_step2 = _iterator2()).done) {
                          _context31.next = 12;
                          break;
                        }

                        return _context31.delegateYield(_loop(), "t0", 10);

                      case 10:
                        _context31.next = 8;
                        break;

                      case 12:
                        newRunners.forEach(function (h) {
                          _this14._runQueue.push(h);

                          var index = _this14._waitQueue.indexOf(h);

                          if (index >= 0) _this14._waitQueue.splice(index, 1);
                        });
                        sleepingRunners.forEach(function (h) {
                          var index = _this14._waitQueue.indexOf(h);

                          if (index >= 0) _this14._waitQueue.splice(index, 1);
                        });

                      case 14:
                      case "end":
                        return _context31.stop();
                    }
                  }
                }, _callee30);
              })));

            case 4:
              _context32.next = 6;
              return this.runAsync();

            case 6:
              this._env.clearEvents();

            case 7:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee31, this);
    }));

    function waitingToRunning() {
      return _waitingToRunning.apply(this, arguments);
    }

    return waitingToRunning;
  }();

  _proto4.stopSleepers = /*#__PURE__*/function () {
    var _stopSleepers = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee33() {
      var _this15 = this;

      return regenerator_default().wrap(function _callee33$(_context34) {
        while (1) {
          switch (_context34.prev = _context34.next) {
            case 0:
              _context34.next = 2;
              return this._sleepMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee32() {
                var _iterator3, _step3, s;

                return regenerator_default().wrap(function _callee32$(_context33) {
                  while (1) {
                    switch (_context33.prev = _context33.next) {
                      case 0:
                        for (_iterator3 = _createForOfIteratorHelperLoose(_this15._sleepQueue); !(_step3 = _iterator3()).done;) {
                          s = _step3.value;
                          clearTimeout(s.id);
                        }

                        _this15._sleepQueue = [];

                      case 2:
                      case "end":
                        return _context33.stop();
                    }
                  }
                }, _callee32);
              })));

            case 2:
            case "end":
              return _context34.stop();
          }
        }
      }, _callee33, this);
    }));

    function stopSleepers() {
      return _stopSleepers.apply(this, arguments);
    }

    return stopSleepers;
  }();

  _proto4.wakeSleeper = /*#__PURE__*/function () {
    var _wakeSleeper = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee36(h) {
      var _this16 = this;

      var handlerRunner;
      return regenerator_default().wrap(function _callee36$(_context37) {
        while (1) {
          switch (_context37.prev = _context37.next) {
            case 0:
              _context37.prev = 0;
              // let handlerMs: number = undefined
              handlerRunner = undefined; // let handler: VMHandler = undefined

              _context37.next = 4;
              return this._sleepMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee34() {
                var index, p;
                return regenerator_default().wrap(function _callee34$(_context35) {
                  while (1) {
                    switch (_context35.prev = _context35.next) {
                      case 0:
                        index = _this16._sleepQueue.findIndex(function (p) {
                          return (p === null || p === void 0 ? void 0 : p.handlerRunner) === h;
                        } // || p?.handler === h
                        );
                        (0,utils/* assert */.hu)(index >= 0);

                        if (index >= 0) {
                          p = _this16._sleepQueue[index]; //  handlerMs = p.ms

                          //  handlerMs = p.ms
                          handlerRunner = p.handlerRunner; // handler = p?.handler

                          // handler = p?.handler
                          _this16._sleepQueue.splice(index, 1); // clearTimeout(p.id)

                        }

                      case 3:
                      case "end":
                        return _context35.stop();
                    }
                  }
                }, _callee34);
              })));

            case 4:
              if (!(this.status === VMStatus.Stopped)) {
                _context37.next = 6;
                break;
              }

              return _context37.abrupt("return");

            case 6:
              _context37.next = 8;
              return this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee35() {
                return regenerator_default().wrap(function _callee35$(_context36) {
                  while (1) {
                    switch (_context36.prev = _context36.next) {
                      case 0:
                        /*
                        if (!handlerRunner && isEveryHandler(handler)) {
                            const index = this._everyQueue.findIndex(
                                h => h.handler === handler
                            )
                            if (index >= 0) {
                                handlerRunner = this._everyQueue[index]
                                this._everyQueue.splice(index, 1)
                                handlerRunner.gotoTop()
                            }
                        }*/
                        if (handlerRunner) {
                          // transition to the run queue
                          handlerRunner.wake();

                          _this16._runQueue.push(handlerRunner);
                        }

                      case 1:
                      case "end":
                        return _context36.stop();
                    }
                  }
                }, _callee35);
              })));

            case 8:
              if (!handlerRunner) {
                _context37.next = 20;
                break;
              }

              if (!(this.status === VMStatus.Running)) {
                _context37.next = 14;
                break;
              }

              this.trace("wake sleeper run");
              this.runAsync();
              _context37.next = 20;
              break;

            case 14:
              if (!(this.status === VMStatus.Paused)) {
                _context37.next = 20;
                break;
              }

              _context37.t0 = this;
              _context37.next = 18;
              return this.getCurrentRunner();

            case 18:
              _context37.t1 = _context37.sent;

              _context37.t0.emitBreakpoint.call(_context37.t0, _context37.t1);

            case 20:
              _context37.next = 26;
              break;

            case 22:
              _context37.prev = 22;
              _context37.t2 = _context37["catch"](0);
              console.debug(_context37.t2);
              this.emit(vm_events/* VM_INTERNAL_ERROR */.c2, _context37.t2);

            case 26:
            case "end":
              return _context37.stop();
          }
        }
      }, _callee36, this, [[0, 22]]);
    }));

    function wakeSleeper(_x15) {
      return _wakeSleeper.apply(this, arguments);
    }

    return wakeSleeper;
  }();

  _proto4.initializeRoleManagement = function initializeRoleManagement() {
    var _this17 = this;

    // adding a (role,service) binding
    var addRoleService = function addRoleService(role) {
      var service = _this17.roleManager.getService(role);

      if (service) {
        _this17._env.serviceChanged(role, service);
      }
    }; // initialize


    this.roleManager.roles.forEach(function (r) {
      if (_this17._roles.find(function (rv) {
        return rv.role === r.role;
      })) {
        addRoleService(r.role);
      }
    });
    this.mount(this.roleManager.subscribe(constants/* ROLE_BOUND */.l9m, /*#__PURE__*/function () {
      var _ref16 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee37(role) {
        return regenerator_default().wrap(function _callee37$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                addRoleService(role);

                _this17.waitingToRunning();

              case 2:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee37);
      }));

      return function (_x16) {
        return _ref16.apply(this, arguments);
      };
    }()));
    this.mount(this.roleManager.subscribe(constants/* ROLE_UNBOUND */.CCp, function (role) {
      _this17._env.serviceChanged(role, undefined);

      _this17.waitingToRunning();
    }));
  };

  (0,createClass/* default */.Z)(VMProgramRunner, [{
    key: "status",
    get: function get() {
      return this._status;
    }
  }, {
    key: "logData",
    get: function get() {
      return this._log.slice(0);
    }
  }]);

  return VMProgramRunner;
}(client/* JDClient */.z);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
;// CONCATENATED MODULE: ./src/components/vm/useVMRunner.ts


 // tslint:disable-next-line: match-default-export-name no-submodule-imports






function useVMRunner(roleManager, program, autoRun) {
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var _useContext2 = (0,react.useContext)(AppContext/* default */.ZP),
      setError = _useContext2.setError;

  var _useState = (0,react.useState)(),
      runner = _useState[0],
      setRunner = _useState[1];

  var _useState2 = (0,react.useState)(!!autoRun),
      _autoStart = _useState2[0],
      _setAutoStart = _useState2[1];

  var run = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _setAutoStart(!!autoRun);

              _context.next = 3;
              return runner.startAsync();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function run() {
      return _ref.apply(this, arguments);
    };
  }();

  var cancel = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _setAutoStart(false);

              runner.cancel();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function cancel() {
      return _ref2.apply(this, arguments);
    };
  }(); // auto start


  (0,react.useEffect)(function () {
    if (_autoStart && runner) runner.startAsync();
    return function () {
      return runner === null || runner === void 0 ? void 0 : runner.cancel();
    };
  }, [runner, _autoStart]); // create runner

  (0,react.useEffect)(function () {
    try {
      var newTestRunner = program && new VMProgramRunner(bus, roleManager, program);
      setRunner(newTestRunner);
      return function () {
        return newTestRunner === null || newTestRunner === void 0 ? void 0 : newTestRunner.unmount();
      };
    } catch (e) {
      console.debug(e);
      setRunner(undefined);
    }
  }, [roleManager, program]); // errors

  (0,react.useEffect)(function () {
    return runner === null || runner === void 0 ? void 0 : runner.subscribe(constants/* ERROR */.pnR, function (e) {
      return setError(e);
    });
  }, [runner]); // traces

  var handleTrace = function handleTrace(value) {
    var message = value.message,
        context = value.context;
    if (flags/* default.diagnostics */.Z.diagnostics) console.debug("vm> " + message, context);
  };

  (0,react.useEffect)(function () {
    return runner === null || runner === void 0 ? void 0 : runner.subscribe(constants/* TRACE */.jes, handleTrace);
  }, [runner]);
  return {
    runner: runner,
    run: run,
    cancel: cancel
  };
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./src/components/CodeBlock.tsx + 4 modules
var CodeBlock = __webpack_require__(50274);
;// CONCATENATED MODULE: ./src/components/vm/VMDiagnostics.tsx



function VMDiagnostics(props) {
  var program = props.program;
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "subtitle1"
  }, "VM"), /*#__PURE__*/react.createElement(CodeBlock.default, {
    className: "json",
    downloadName: "test.json.vm",
    downloadText: JSON.stringify(program, null, 2)
  }, JSON.stringify(program, null, 2)));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(14685);
// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 3 modules
var DeviceAvatar = __webpack_require__(4726);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 24 modules
var servers = __webpack_require__(48363);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(49013);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Cancel.js
var Cancel = __webpack_require__(30263);
// EXTERNAL MODULE: ./src/components/blockly/BlockContext.tsx + 14 modules
var BlockContext = __webpack_require__(85379);
// EXTERNAL MODULE: ./src/components/vm/VMgenerator.ts
var VMgenerator = __webpack_require__(15056);
// EXTERNAL MODULE: ./src/components/blockly/fields/LogViewField.tsx
var LogViewField = __webpack_require__(86899);
// EXTERNAL MODULE: ./src/components/blockly/fields/VariablesFields.tsx
var VariablesFields = __webpack_require__(15757);
// EXTERNAL MODULE: ./src/components/blockly/fields/WatchValueField.tsx
var WatchValueField = __webpack_require__(2006);
// EXTERNAL MODULE: ./src/components/blockly/toolbox.ts
var toolbox = __webpack_require__(16582);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/toolsdsl.ts






var WATCH_BLOCK = "jacdac_tools_watch";
var LOG_BLOCK = "jacdac_tools_log";
var VIEW_LOG_BLOCK = "jacdac_tools_log_view";
var VARIABLES_BLOCK = "jacdac_variables_view";
var colour = toolbox/* toolsColour */.FR;
var toolsDSL = {
  id: "tools",
  createBlocks: function createBlocks() {
    return [{
      kind: "block",
      type: VARIABLES_BLOCK,
      message0: "variables %1 %2",
      args0: [{
        type: "input_dummy"
      }, {
        type: VariablesFields/* default.KEY */.Z.KEY,
        name: "variables"
      }],
      colour: colour,
      inputsInline: false,
      tooltip: "Watch variables values",
      helpUrl: "",
      template: "meta"
    }, {
      kind: "block",
      type: WATCH_BLOCK,
      message0: "watch %1 %2",
      args0: [{
        type: "input_value",
        name: "value"
      }, {
        type: WatchValueField/* default.KEY */.Z.KEY,
        name: "watch"
      }],
      colour: colour,
      inputsInline: true,
      tooltip: "Watch a value in the editor",
      helpUrl: "",
      nextStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
      transformData: toolbox/* identityTransformData */.FW
    }, {
      kind: "block",
      type: LOG_BLOCK,
      message0: "log %1",
      args0: [{
        type: "input_value",
        name: "value"
      }],
      colour: colour,
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      tooltip: "Log an entry to the console",
      helpUrl: ""
    }, {
      kind: "block",
      type: VIEW_LOG_BLOCK,
      message0: "console %1 %2",
      args0: [{
        type: "input_dummy"
      }, {
        type: LogViewField/* default.KEY */.Z.KEY,
        name: "watch"
      }],
      colour: colour,
      inputsInline: false,
      tooltip: "View console content",
      template: "meta"
    }];
  },
  createCategory: function createCategory() {
    return [{
      kind: "category",
      name: "Debugger",
      colour: colour,
      contents: [{
        kind: "label",
        text: "Variables"
      }, {
        kind: "block",
        type: VARIABLES_BLOCK
      }, {
        kind: "block",
        type: WATCH_BLOCK
      }, {
        kind: "label",
        text: "Logging"
      }, {
        kind: "block",
        type: LOG_BLOCK,
        values: {
          value: {
            kind: "block",
            type: "text"
          }
        }
      }, {
        kind: "block",
        type: VIEW_LOG_BLOCK
      }]
    }, {
      kind: "sep"
    }];
  },
  compileCommandToVM: function compileCommandToVM(_ref) {
    var block = _ref.block,
        blockToExpression = _ref.blockToExpression;
    var type = block.type;

    if (type === LOG_BLOCK) {
      var inputs = block.inputs;

      var _blockToExpression = blockToExpression(undefined, inputs[0].child),
          expr = _blockToExpression.expr,
          errors = _blockToExpression.errors;

      return {
        cmd: (0,VMgenerator/* makeVMBase */.IZ)(block, {
          type: "CallExpression",
          arguments: [expr],
          callee: (0,compile/* toIdentifier */.EB)("log")
        }),
        errors: errors
      };
    }

    return undefined;
  },
  compileEventToVM: function compileEventToVM(_ref2) {
    var block = _ref2.block,
        blockToExpression = _ref2.blockToExpression;
    var type = block.type;

    if (type === WATCH_BLOCK) {
      var inputs = block.inputs;

      var _blockToExpression2 = blockToExpression(undefined, inputs[0].child),
          expr = _blockToExpression2.expr,
          errors = _blockToExpression2.errors;

      return {
        expression: {
          type: "CallExpression",
          arguments: [expr],
          callee: (0,compile/* toIdentifier */.EB)("watch")
        },
        errors: errors,
        meta: true
      };
    }

    return undefined;
  }
};
/* harmony default export */ var toolsdsl = (toolsDSL);
;// CONCATENATED MODULE: ./src/components/blockly/BlockRoles.tsx

 // tslint:disable-next-line: match-default-export-name no-submodule-imports











function RoleChip(props) {
  var _useContext = (0,react.useContext)(BlockContext/* default */.C),
      workspace = _useContext.workspace;

  var role = props.role,
      service = props.service,
      serviceShortId = props.serviceShortId;

  var _useContext2 = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext2.bus;

  var server = (0,useServiceServer/* default */.Z)(service);

  var handleRoleClick = function handleRoleClick() {
    // spin off simulator
    if (!service) {
      var specification = (0,spec/* serviceSpecificationFromName */.kB)(serviceShortId);
      if (specification) (0,servers/* addServiceProvider */.Q6)(bus, (0,servers/* serviceProviderDefinitionFromServiceClass */.vd)(specification.classIdentifier));
    } // add twin block


    if (workspace) {
      // try to find existing twin block
      var twinBlock = workspace.getTopBlocks(false).find(function (b) {
        var _b$inputList$0$fieldR, _b$inputList$0$fieldR2;

        return b.type === toolsdsl_namespaceObject.TWIN_BLOCK && ((_b$inputList$0$fieldR = b.inputList[0].fieldRow.find(function (f) {
          return f.name === "role";
        })) === null || _b$inputList$0$fieldR === void 0 ? void 0 : (_b$inputList$0$fieldR2 = _b$inputList$0$fieldR.getVariable()) === null || _b$inputList$0$fieldR2 === void 0 ? void 0 : _b$inputList$0$fieldR2.name) === role;
      });

      if (!twinBlock) {
        twinBlock = workspace.newBlock(toolsdsl_namespaceObject.TWIN_BLOCK);
        var variable = workspace.getVariable(role, serviceShortId);
        console.log("new twin", {
          twinBlock: twinBlock
        });
        var field = twinBlock.inputList[0].fieldRow.find(function (f) {
          return f.name === "role";
        });
        field.setValue(variable.getId());
        var m = workspace.getMetrics();
        twinBlock.moveBy(m.viewWidth / 2, m.viewHeight / 3);
        twinBlock.initSvg();
        twinBlock.render(false);
      }

      workspace.centerOnBlock(twinBlock.id);
    }
  };

  var handleDelete = function handleDelete() {
    return bus.removeServiceProvider(server.device);
  };

  return /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    label: role,
    variant: service ? "default" : "outlined",
    avatar: service && /*#__PURE__*/react.createElement(DeviceAvatar/* default */.Z, {
      device: service.device
    }),
    onClick: handleRoleClick,
    onDelete: server ? handleDelete : undefined,
    deleteIcon: /*#__PURE__*/react.createElement(Tooltip/* default */.ZP, {
      title: "stop simulator"
    }, /*#__PURE__*/react.createElement(Cancel/* default */.Z, null))
  });
}

function BlockRoles() {
  var _useContext3 = (0,react.useContext)(BlockContext/* default */.C),
      roleManager = _useContext3.roleManager;

  var roles = (0,useChange/* default */.Z)(roleManager, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.roles;
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, roles === null || roles === void 0 ? void 0 : roles.map(function (_ref) {
    var role = _ref.role,
        service = _ref.service,
        serviceShortId = _ref.serviceShortId;
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
      item: true,
      key: role
    }, /*#__PURE__*/react.createElement(RoleChip, {
      role: role,
      service: service,
      serviceShortId: serviceShortId
    }));
  }));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayArrow.js
var PlayArrow = __webpack_require__(42404);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Stop.js
var Stop = __webpack_require__(34257);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Pause.js
var Pause = __webpack_require__(66601);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayForWork.js
var PlayForWork = __webpack_require__(34264);
// EXTERNAL MODULE: ./src/components/hooks/useMounted.ts
var useMounted = __webpack_require__(72179);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithProgress.tsx + 1 modules
var IconButtonWithProgress = __webpack_require__(16845);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/BugReport.js
var BugReport = __webpack_require__(62481);
;// CONCATENATED MODULE: ./src/components/vm/VMRunnerButtons.tsx



 // tslint:disable-next-line: match-default-export-name no-submodule-imports















function useWorkspaceBreakpoints(program) {
  var _useContext = (0,react.useContext)(BlockContext/* default */.C),
      workspace = _useContext.workspace;

  var breakpoints = (0,react.useMemo)(function () {
    var _arrayConcatMany, _program$handlers;

    return ((_arrayConcatMany = (0,utils/* arrayConcatMany */.ue)(program === null || program === void 0 ? void 0 : (_program$handlers = program.handlers) === null || _program$handlers === void 0 ? void 0 : _program$handlers.filter(function (h) {
      return !h.meta;
    }) // don't debug watch statements
    . // don't debug watch statements
    map(function (h) {
      return h.commands.map(function (cmd) {
        return cmd.sourceId;
      });
    }))) === null || _arrayConcatMany === void 0 ? void 0 : _arrayConcatMany.filter(function (id) {
      return !!id;
    })) || [];
  }, [program]);

  var setBreakpointHighlight = function setBreakpointHighlight(sourceId) {
    workspace === null || workspace === void 0 ? void 0 : workspace.highlightBlock(sourceId);
  };

  return {
    breakpoints: breakpoints,
    setBreakpointHighlight: setBreakpointHighlight
  };
}

function VMRunnerButtons(props) {
  var runner = props.runner,
      run = props.run,
      cancel = props.cancel;
  var status = (0,useChange/* default */.Z)(runner, function (t) {
    return t === null || t === void 0 ? void 0 : t.status;
  });
  var stopped = !status || status === VMStatus.Stopped;
  var program = runner === null || runner === void 0 ? void 0 : runner.program;

  var _useState = (0,react.useState)(false),
      indeterminate = _useState[0],
      setIndeterminate = _useState[1];

  var _useState2 = (0,react.useState)(undefined),
      breakpoint = _useState2[0],
      setBreakpoint = _useState2[1];

  var pausing = breakpoint === "";
  var paused = !!(breakpoint !== null && breakpoint !== void 0 && breakpoint.length);
  var mounted = (0,useMounted/* default */.Z)();
  var disabled = indeterminate || !runner;

  var _useWorkspaceBreakpoi = useWorkspaceBreakpoints(program),
      breakpoints = _useWorkspaceBreakpoi.breakpoints,
      setBreakpointHighlight = _useWorkspaceBreakpoi.setBreakpointHighlight; //console.log("runner status", status)


  var handleRun = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setIndeterminate(true);
              setBreakpoint(undefined);
              _context.next = 5;
              return run();

            case 5:
              _context.prev = 5;
              if (mounted()) setIndeterminate(false);
              return _context.finish(5);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0,, 5, 8]]);
    }));

    return function handleRun() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleCancel = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setIndeterminate(true);
              _context2.next = 4;
              return runner.clearBreakpointsAsync();

            case 4:
              setBreakpoint(undefined);
              _context2.next = 7;
              return cancel();

            case 7:
              _context2.prev = 7;
              if (mounted()) setIndeterminate(false);
              return _context2.finish(7);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0,, 7, 10]]);
    }));

    return function handleCancel() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleResume = /*#__PURE__*/function () {
    var _ref3 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3() {
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setIndeterminate(true);
              setBreakpoint(undefined);
              _context3.next = 5;
              return runner.clearBreakpointsAsync();

            case 5:
              _context3.next = 7;
              return runner.resumeAsync();

            case 7:
              _context3.prev = 7;
              if (mounted()) setIndeterminate(false);
              return _context3.finish(7);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0,, 7, 10]]);
    }));

    return function handleResume() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handlePause = /*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee4() {
      return regenerator_default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setIndeterminate(true);
              _context4.next = 4;
              return runner.setBreakpointsAsync(breakpoints);

            case 4:
              _context4.next = 6;
              return runner.resumeAsync();

            case 6:
              setBreakpoint("");

            case 7:
              _context4.prev = 7;
              if (mounted()) setIndeterminate(false);
              return _context4.finish(7);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0,, 7, 10]]);
    }));

    return function handlePause() {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleStep = function handleStep() {
    return runner.stepAsync();
  }; // register breakpoint handler


  (0,react.useEffect)(function () {
    return runner === null || runner === void 0 ? void 0 : runner.subscribe(vm_events/* VM_BREAKPOINT */.Di, function (_, sourceId) {
      if (mounted()) setBreakpoint(sourceId);
    });
  }, [runner]); // setting blockly breakpoint

  (0,react.useEffect)(function () {
    setBreakpointHighlight(breakpoint);
    return function () {
      return setBreakpointHighlight(undefined);
    };
  }, [breakpoint]); // reset breakpoint in ui when runner, paused mode changes

  (0,react.useEffect)(function () {
    return setBreakpoint(undefined);
  }, [runner]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: paused ? "resume" : stopped ? "start" : "stop",
    disabled: disabled,
    color: stopped ? "primary" : "default",
    onClick: paused ? handleResume : stopped ? handleRun : handleCancel
  }, paused || stopped ? /*#__PURE__*/react.createElement(PlayArrow/* default */.Z, null) : /*#__PURE__*/react.createElement(Stop/* default */.Z, null)), " "), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(IconButtonWithProgress/* default */.Z, {
    title: pausing ? "cancel pause" : paused ? "step" : "pause",
    disabled: disabled,
    indeterminate: pausing,
    onClick: pausing ? handleResume : paused ? handleStep : handlePause
  }, paused ? /*#__PURE__*/react.createElement(PlayForWork/* default */.Z, null) : /*#__PURE__*/react.createElement(Pause/* default */.Z, null))), (pausing || paused) && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    icon: /*#__PURE__*/react.createElement(BugReport/* default */.Z, null),
    label: pausing ? "pausing" : "paused",
    color: "secondary"
  })));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(88880);
;// CONCATENATED MODULE: ./src/components/vm/VMStartSimulatorButton.tsx





function VMStartSimulatorButton() {
  var _useContext = (0,react.useContext)(AppContext/* default */.ZP),
      toggleShowDeviceHostsDialog = _useContext.toggleShowDeviceHostsDialog;

  return /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "start simulator",
    onClick: toggleShowDeviceHostsDialog
  }, /*#__PURE__*/react.createElement(Add/* default */.Z, null));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Save.js
var Save = __webpack_require__(8567);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./src/components/ImportButton.tsx
var ImportButton = __webpack_require__(20119);
// EXTERNAL MODULE: ./node_modules/blockly/index.js
var blockly = __webpack_require__(74640);
;// CONCATENATED MODULE: ./src/components/blockly/BlockFileButtons.tsx











function LoadButton() {
  var _useContext = (0,react.useContext)(BlockContext/* default */.C),
      workspace = _useContext.workspace;

  var _useContext2 = (0,react.useContext)(AppContext/* default */.ZP),
      setError = _useContext2.setError;

  var disabled = !workspace;

  var handleFiles = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(files) {
      var file, text, jsfile, xml, dom;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              file = files === null || files === void 0 ? void 0 : files[0];

              if (file) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              _context.prev = 3;
              _context.next = 6;
              return file.text();

            case 6:
              text = _context.sent;
              jsfile = JSON.parse(text);
              console.debug("imported file", jsfile);
              xml = jsfile === null || jsfile === void 0 ? void 0 : jsfile.xml;

              if (!(typeof xml !== "string")) {
                _context.next = 12;
                break;
              }

              throw new Error("Invalid file format");

            case 12:
              // try loading xml into a dummy blockly workspace
              dom = blockly.Xml.textToDom(xml); // all good, load in workspace

              workspace.clear();
              blockly.Xml.domToWorkspace(dom, workspace);
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](3);
              setError(_context.t0);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 17]]);
    }));

    return function handleFiles(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(ImportButton.default, {
    text: "Open...",
    icon: true,
    disabled: disabled,
    acceptedFiles: ["application/json"],
    onFilesUploaded: handleFiles,
    filesLimit: 1
  });
}

function SaveButton() {
  var _useContext3 = (0,react.useContext)(BlockContext/* default */.C),
      workspaceXml = _useContext3.workspaceXml; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var json = {
    xml: workspaceXml
  };
  var url = "data:application/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(json));
  return /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    download: "jacdac-blocks.json",
    href: url
  }, /*#__PURE__*/react.createElement(Tooltip/* default */.ZP, {
    title: "Save"
  }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.IconButton, null, /*#__PURE__*/react.createElement(Save/* default */.Z, null))));
}

function BlockFileButtons() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(SaveButton, null)), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(LoadButton, null)));
}
;// CONCATENATED MODULE: ./src/components/vm/VMToolbar.tsx






function VMToolbar(props) {
  var runner = props.runner,
      run = props.run,
      cancel = props.cancel;
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "row",
    spacing: 1,
    alignItems: "center",
    alignContent: "center"
  }, /*#__PURE__*/react.createElement(BlockFileButtons, null), /*#__PURE__*/react.createElement(VMRunnerButtons, {
    runner: runner,
    run: run,
    cancel: cancel
  }), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(VMStartSimulatorButton, null)), /*#__PURE__*/react.createElement(BlockRoles, null));
}
// EXTERNAL MODULE: ./src/components/blockly/BlockDiagnostics.tsx
var BlockDiagnostics = __webpack_require__(9370);
// EXTERNAL MODULE: ./src/components/blockly/BlockEditor.tsx + 3 modules
var BlockEditor = __webpack_require__(85105);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(90293);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat-map.js
var es_array_flat_map = __webpack_require__(86535);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unscopables.flat-map.js
var es_array_unscopables_flat_map = __webpack_require__(99244);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(35313);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(13996);
// EXTERNAL MODULE: ./src/components/blockly/fields/KeyboardKeyField.tsx
var KeyboardKeyField = __webpack_require__(90422);
// EXTERNAL MODULE: ./src/components/blockly/fields/LEDColorField.tsx
var LEDColorField = __webpack_require__(68514);
// EXTERNAL MODULE: ./src/components/blockly/fields/LEDMatrixField.tsx + 1 modules
var LEDMatrixField = __webpack_require__(11772);
// EXTERNAL MODULE: ./src/components/blockly/fields/NoteField.tsx
var NoteField = __webpack_require__(50585);
// EXTERNAL MODULE: ./src/components/blockly/fields/ServoAngleField.tsx + 1 modules
var ServoAngleField = __webpack_require__(891);
// EXTERNAL MODULE: ./src/components/blockly/fields/JDomTreeField.tsx
var JDomTreeField = __webpack_require__(90263);
// EXTERNAL MODULE: ./src/components/blockly/fields/TwinField.tsx
var TwinField = __webpack_require__(35361);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/servicesdsl.ts



















var SET_STATUS_LIGHT_BLOCK = "jacdac_set_status_light";
var ROLE_BOUND_EVENT_BLOCK = "jacdac_role_bound_event";
var ROLE_BOUND_BLOCK = "jacdac_role_bound";
var INSPECT_BLOCK = "jacdac_tools_inspect";
var TWIN_BLOCK = "jacdac_tools_twin";

function isBooleanField(field) {
  return field.type === "bool";
}

function isStringField(field) {
  return field.type === "string";
}

function toBlocklyType(field) {
  return field.encoding === "JSON" ? toolbox/* JSON_TYPE */.oj : isBooleanField(field) ? toolbox/* BOOLEAN_TYPE */.lu : isStringField(field) ? toolbox/* STRING_TYPE */.jt : (0,jdspec/* isNumericType */.FV)(field) ? toolbox/* NUMBER_TYPE */.sS : undefined;
}

function enumInfo(srv, field) {
  var _srv$enums;

  var e = (_srv$enums = srv.enums) === null || _srv$enums === void 0 ? void 0 : _srv$enums[field.type];
  return e;
}

var ignoredServices = [constants/* SRV_CONTROL */.gm9, constants/* SRV_LOGGER */.w9j, constants/* SRV_ROLE_MANAGER */.igi, constants/* SRV_PROTO_TEST */.$Bn, constants/* SRV_BOOTLOADER */.PWm];
var ignoredEvents = [constants/* SystemEvent.StatusCodeChanged */.nSK.StatusCodeChanged];
var includedRegisters = [constants/* SystemReg.Reading */.ZJq.Reading, constants/* SystemReg.Value */.ZJq.Value, constants/* SystemReg.Intensity */.ZJq.Intensity];
var customMessages = [{
  service: constants/* SRV_JOYSTICK */.vRO,
  register: constants/* JoystickReg.Direction */.ztd.Direction,
  field: "buttons",
  get: "is %1 %2 pressed"
}];
var commandColor = "#8c6a1d";
var ServicesBlockDomainSpecificLanguage = /*#__PURE__*/function () {
  function ServicesBlockDomainSpecificLanguage() {
    this.id = "jacdacServices";
    this.supportedServices = [];
  }

  var _proto = ServicesBlockDomainSpecificLanguage.prototype;

  _proto.createServiceColor = function createServiceColor(theme) {
    var sensorColor = theme.palette.success.main;
    var otherColor = theme.palette.info.main;

    var serviceColor = function serviceColor(srv) {
      return (0,spec/* isSensor */.rq)(srv) ? sensorColor : otherColor;
    };

    return serviceColor;
  };

  _proto.createBlocks = function createBlocks(options) {
    var theme = options.theme;
    var serviceColor = this.createServiceColor(theme); // blocks

    var customShadows = [{
      serviceClass: constants/* SRV_SERVO */.$X_,
      kind: "rw",
      identifier: constants/* ServoReg.Angle */.pmu.Angle,
      field: "_",
      shadow: {
        kind: "block",
        type: ServoAngleField/* default.SHADOW.type */.Z.SHADOW.type
      }
    }, {
      serviceClass: constants/* SRV_BUZZER */.J1$,
      kind: "command",
      identifier: constants/* BuzzerCmd.PlayNote */.Rv2.PlayNote,
      field: "frequency",
      shadow: {
        kind: "block",
        type: NoteField/* default.SHADOW.type */.Z.SHADOW.type
      }
    }];

    var lookupCustomShadow = function lookupCustomShadow(service, info, field) {
      var _customShadows$find;

      return (_customShadows$find = customShadows.find(function (cs) {
        return cs.serviceClass === service.classIdentifier && cs.kind == info.kind && cs.identifier === info.identifier && cs.field == field.name;
      })) === null || _customShadows$find === void 0 ? void 0 : _customShadows$find.shadow;
    };

    var serviceHelp = function serviceHelp(service) {
      return (0,gatsby_browser_entry.withPrefix)("/services/" + service.shortId);
    };

    var fieldsSupported = function fieldsSupported(pkt) {
      return pkt.fields.every(toBlocklyType);
    };

    var fieldName = function fieldName(reg, field) {
      return field.name === "_" ? reg.name : field.name;
    };

    var fieldToShadow = function fieldToShadow(service, info, field) {
      return lookupCustomShadow(service, info, field) || (isBooleanField(field) ? {
        kind: "block",
        type: "jacdac_on_off"
      } : isStringField(field) ? {
        kind: "block",
        type: "text"
      } : field.unit === "°" ? {
        kind: "block",
        type: "jacdac_angle"
      } : field.unit === "/" ? {
        kind: "block",
        type: "jacdac_ratio"
      } : /^%/.test(field.unit) ? {
        kind: "block",
        type: "jacdac_percent"
      } : field.type === "u8" ? {
        kind: "block",
        type: "jacdac_byte"
      } : {
        kind: "block",
        type: "math_number",
        value: field.defaultValue || 0,
        min: field.typicalMin || field.absoluteMin,
        max: field.typicalMax || field.absoluteMax
      });
    };

    var variableName = function variableName(srv) {
      return (0,jdspec/* humanify */.lW)(srv.camelName).toLowerCase() + " 1";
    };

    var fieldVariable = function fieldVariable(service) {
      return {
        type: "field_variable",
        name: "role",
        variable: variableName(service),
        variableTypes: [service.shortId],
        defaultType: service.shortId
      };
    };

    var fieldsToFieldInputs = function fieldsToFieldInputs(info) {
      return info.fields.map(function (field) {
        return {
          type: "input_value",
          name: fieldName(info, field),
          check: toBlocklyType(field)
        };
      });
    };

    var fieldsToValues = function fieldsToValues(service, info) {
      return (0,utils/* toMap */.qL)(info.fields, function (field) {
        return fieldName(info, field);
      }, function (field) {
        return fieldToShadow(service, info, field);
      });
    };

    var fieldsToMessage = function fieldsToMessage(info) {
      return info.fields.map(function (field, i) {
        return (0,jdspec/* humanify */.lW)(field.name) + " %" + (2 + i);
      }).join(" ");
    };

    var isEnabledRegister = function isEnabledRegister(info) {
      return info.fields.length === 1 && info.fields[0].type === "bool" && info.name === "enabled";
    };

    var customMessage = function customMessage(srv, reg, field) {
      return customMessages.find(function (m) {
        return m.service === srv.classIdentifier && m.register === reg.identifier && m.field === field.name;
      });
    };

    var allServices = (0,spec/* serviceSpecifications */.Le)();
    this.supportedServices = allServices.filter(function (service) {
      return !/^_/.test(service.shortId) && service.status !== "deprecated";
    }).filter(function (service) {
      return ignoredServices.indexOf(service.classIdentifier) < 0;
    });

    var resolveService = function resolveService(cls) {
      return allServices.filter(function (srv) {
        return srv.classIdentifier === cls;
      });
    };

    var registers = (0,utils/* arrayConcatMany */.ue)(this.supportedServices.map(function (service) {
      return service.packets.filter(function (pkt) {
        return (0,spec/* isRegister */.x5)(pkt) && !pkt.lowLevel && includedRegisters.indexOf(pkt.identifier) > -1;
      }).map(function (register) {
        return {
          service: service,
          register: register
        };
      });
    }));
    var events = this.supportedServices.map(function (service) {
      return {
        service: service,
        events: service.packets.filter(function (pkt) {
          return (0,spec/* isEvent */.cO)(pkt) && !pkt.lowLevel && ignoredEvents.indexOf(pkt.identifier) < 0;
        })
      };
    }).filter(function (kv) {
      return !!kv.events.length;
    });
    var commands = (0,utils/* arrayConcatMany */.ue)(this.supportedServices.map(function (service) {
      return service.packets.filter(function (pkt) {
        return (0,spec/* isCommand */.ao)(pkt) && !pkt.lowLevel && fieldsSupported(pkt);
      }).map(function (pkt) {
        return {
          service: service,
          command: pkt
        };
      });
    }));
    var customBlockDefinitions = [].concat((0,toConsumableArray/* default */.Z)(resolveService(constants/* SRV_HID_KEYBOARD */.Hg9).map(function (service) {
      return {
        kind: "block",
        type: "key",
        message0: "%1 %2 key %3",
        args0: [fieldVariable(service), {
          type: "field_dropdown",
          name: "action",
          options: [["press", "press"], ["down", "down"], ["up", "up"]]
        }, {
          type: KeyboardKeyField/* default.KEY */.Z.KEY,
          name: "combo"
        }],
        colour: serviceColor(service),
        inputsInline: true,
        previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        tooltip: "Send a keyboard key combo",
        helpUrl: serviceHelp(service),
        service: service,
        expression: "role.key(combo.selectors, combo.modifiers, action)",
        template: "custom"
      };
    })), (0,toConsumableArray/* default */.Z)(resolveService(constants/* SRV_LED */.i04).map(function (service) {
      return {
        kind: "block",
        type: "fade",
        message0: "fade %1 to %2 at speed %3",
        args0: [fieldVariable(service), {
          type: "input_value",
          name: "color",
          check: "Number"
        }, {
          type: "input_value",
          name: "speed",
          check: "Number"
        }],
        values: {
          color: {
            kind: "block",
            type: LEDColorField/* default.SHADOW.type */.Z.SHADOW.type
          },
          speed: {
            kind: "block",
            type: "jacdac_ratio"
          }
        },
        colour: serviceColor(service),
        inputsInline: true,
        previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        tooltip: "Fade LED color",
        helpUrl: serviceHelp(service),
        service: service,
        expression: "role.animate((color >> 16) & 0xff, (color >> 8) & 0xff, (color >> 0) & 0xff, speed * 0xff)",
        template: "custom"
      };
    })), (0,toConsumableArray/* default */.Z)(resolveService(constants/* SRV_SEVEN_SEGMENT_DISPLAY */.hvg).map(function (service) {
      return {
        kind: "block",
        type: "set_digits",
        message0: "set %1 digits to %2",
        args0: [fieldVariable(service), {
          type: "input_value",
          name: "digits",
          check: "Number"
        }],
        values: {
          digits: {
            kind: "block",
            type: "math_number"
          }
        },
        colour: serviceColor(service),
        inputsInline: true,
        previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        tooltip: "Display a number of the screen",
        helpUrl: serviceHelp(service),
        service: service,
        // encode digits
        template: "custom"
      };
    })), (0,toConsumableArray/* default */.Z)(resolveService(constants/* SRV_LED_MATRIX */.ZmS).map(function (service) {
      return {
        kind: "block",
        type: "show_leds",
        message0: "show %1 leds %2",
        args0: [fieldVariable(service), {
          type: LEDMatrixField/* default.KEY */.Z.KEY,
          name: "leds"
        }],
        colour: serviceColor(service),
        inputsInline: true,
        previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        tooltip: "Display LEDs on the LED matrix",
        helpUrl: serviceHelp(service),
        service: service,
        // encode digits
        template: "custom"
      };
    }))).map(function (def) {
      def.type = "jacdac_custom_" + def.service.shortId.toLowerCase() + "_" + def.type;
      return def;
    });
    var eventBlocks = events.map(function (_ref) {
      var service = _ref.service,
          events = _ref.events;
      return {
        kind: "block",
        type: "jacdac_events_" + service.shortId,
        message0: "on %1 %2",
        args0: [fieldVariable(service), {
          type: "field_dropdown",
          name: "event",
          options: events.map(function (event) {
            return [(0,jdspec/* humanify */.lW)(event.name), event.name];
          })
        }],
        colour: serviceColor(service),
        inputsInline: true,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        tooltip: "Events for the " + service.name + " service",
        helpUrl: serviceHelp(service),
        service: service,
        events: events,
        template: "event"
      };
    });
    var registerChangeByEventBlocks = registers.filter(function (_ref2) {
      var service = _ref2.service;
      return !service.packets.some(function (pkt) {
        return (0,spec/* isEvent */.cO)(pkt) && ignoredEvents.indexOf(pkt.identifier) < 0;
      });
    }).filter(function (_ref3) {
      var register = _ref3.register;
      return register.fields.length === 1 && (0,jdspec/* isNumericType */.FV)(register.fields[0]) && register.identifier !== constants/* SystemReg.Intensity */.ZJq.Intensity;
    }).map(function (_ref4) {
      var service = _ref4.service,
          register = _ref4.register;
      return {
        kind: "block",
        type: "jacdac_change_by_events_" + service.shortId + "_" + register.name,
        message0: "on %1 " + (0,jdspec/* humanify */.lW)(register.name) + " change by %2",
        args0: [fieldVariable(service)].concat((0,toConsumableArray/* default */.Z)(fieldsToFieldInputs(register))).filter(function (v) {
          return !!v;
        }),
        values: fieldsToValues(service, register),
        inputsInline: true,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        colour: serviceColor(service),
        tooltip: "Event raised when " + register.name + " changes",
        helpUrl: serviceHelp(service),
        service: service,
        register: register,
        template: "register_change_event"
      };
    });

    var _splitFilter = (0,utils/* splitFilter */.ap)(registers, function (reg) {
      return reg.register.fields.length == 1;
    }),
        registerSimples = _splitFilter[0],
        registerComposites = _splitFilter[1];

    var _splitFilter2 = (0,utils/* splitFilter */.ap)(registerSimples, function (_ref5) {
      var register = _ref5.register;
      return !!toBlocklyType(register.fields[0]);
    }),
        registerSimpleTypes = _splitFilter2[0],
        registerSimpleOthers = _splitFilter2[1];

    var registerSimplesGetBlocks = registerSimpleTypes.map(function (_ref6) {
      var _customMessage;

      var service = _ref6.service,
          register = _ref6.register;
      return {
        kind: "block",
        type: "jacdac_get_simple_" + service.shortId + "_" + register.name,
        message0: ((_customMessage = customMessage(service, register, register.fields[0])) === null || _customMessage === void 0 ? void 0 : _customMessage.get) || "%1 " + (0,jdspec/* humanify */.lW)(register.name),
        args0: [fieldVariable(service)],
        inputsInline: true,
        output: toBlocklyType(register.fields[0]),
        colour: serviceColor(service),
        tooltip: register.description,
        helpUrl: serviceHelp(service),
        service: service,
        register: register,
        field: register.fields[0],
        template: "register_get"
      };
    });
    var registerSimpleEnumTypes = registerSimpleOthers.filter(function (_ref7) {
      var service = _ref7.service,
          register = _ref7.register;
      return !!enumInfo(service, register.fields[0]);
    }).map(function (_ref8) {
      var service = _ref8.service,
          register = _ref8.register;
      return {
        service: service,
        register: register,
        field: register.fields[0],
        einfo: enumInfo(service, register.fields[0])
      };
    });
    var registerCompositeEnumTypes = (0,utils/* arrayConcatMany */.ue)(registerComposites.map(function (_ref9) {
      var service = _ref9.service,
          register = _ref9.register;
      return register.fields.map(function (field) {
        return {
          service: service,
          register: register,
          field: field,
          einfo: enumInfo(service, field)
        };
      }).filter(function (_ref10) {
        var einfo = _ref10.einfo;
        return !!einfo;
      });
    }));
    var registerEnumGetBlocks = [].concat((0,toConsumableArray/* default */.Z)(registerSimpleEnumTypes), (0,toConsumableArray/* default */.Z)(registerCompositeEnumTypes)).map(function (_ref11) {
      var _customMessage2;

      var service = _ref11.service,
          register = _ref11.register,
          field = _ref11.field,
          einfo = _ref11.einfo;
      return {
        kind: "block",
        type: "jacdac_get_enum_" + service.shortId + "_" + register.name + "_" + field.name,
        message0: ((_customMessage2 = customMessage(service, register, field)) === null || _customMessage2 === void 0 ? void 0 : _customMessage2.get) || "%1 " + (0,jdspec/* humanify */.lW)(register.name) + (field.name === "_" ? "" : " " + field.name) + " %2",
        args0: [fieldVariable(service), {
          type: "field_dropdown",
          name: field.name,
          options: Object.keys(einfo.members).map(function (member) {
            return [(0,jdspec/* humanify */.lW)(member), member];
          })
        }],
        inputsInline: true,
        output: "Boolean",
        colour: serviceColor(service),
        tooltip: register.description,
        helpUrl: serviceHelp(service),
        service: service,
        register: register,
        field: field,
        template: "register_get"
      };
    });
    var registerNumericsGetBlocks = registerComposites.filter(function (re) {
      return re.register.fields.some(jdspec/* isNumericType */.FV);
    }).map(function (_ref12) {
      var service = _ref12.service,
          register = _ref12.register;
      return {
        kind: "block",
        type: "jacdac_get_numerics_" + service.shortId + "_" + register.name,
        message0: "%1 " + (0,jdspec/* humanify */.lW)(register.name) + (register.fields.length > 1 ? " %2" : ""),
        args0: [fieldVariable(service), register.fields.length > 1 ? {
          type: "field_dropdown",
          name: "field",
          options: register.fields.filter(function (f) {
            return (0,jdspec/* isNumericType */.FV)(f);
          }).map(function (field) {
            return [(0,jdspec/* humanify */.lW)(field.name), fieldName(register, field)];
          })
        } : undefined].filter(function (v) {
          return !!v;
        }),
        inputsInline: true,
        output: "Number",
        colour: serviceColor(service),
        tooltip: register.description,
        helpUrl: serviceHelp(service),
        service: service,
        register: register,
        template: "register_get"
      };
    });
    var registerSetBlocks = registers.filter(function (_ref13) {
      var register = _ref13.register;
      return register.kind === "rw";
    }).filter(function (_ref14) {
      var register = _ref14.register;
      return fieldsSupported(register);
    }).map(function (_ref15) {
      var service = _ref15.service,
          register = _ref15.register;
      return {
        kind: "block",
        type: "jacdac_set_" + service.shortId + "_" + register.name,
        message0: isEnabledRegister(register) ? "set %1 %2" : "set %1 " + register.name + " to " + (register.fields.length === 1 ? "%2" : fieldsToMessage(register)),
        args0: [fieldVariable(service)].concat((0,toConsumableArray/* default */.Z)(fieldsToFieldInputs(register))),
        values: fieldsToValues(service, register),
        inputsInline: true,
        colour: serviceColor(service),
        tooltip: register.description,
        helpUrl: serviceHelp(service),
        service: service,
        register: register,
        previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        template: "register_set"
      };
    });
    var commandBlocks = commands.map(function (_ref16) {
      var service = _ref16.service,
          command = _ref16.command;
      return {
        kind: "block",
        type: "jacdac_command_" + service.shortId + "_" + command.name,
        message0: !command.fields.length ? (0,jdspec/* humanify */.lW)(command.name) + " %1" : (0,jdspec/* humanify */.lW)(command.name) + " %1 with " + fieldsToMessage(command),
        args0: [fieldVariable(service)].concat((0,toConsumableArray/* default */.Z)(fieldsToFieldInputs(command))),
        values: fieldsToValues(service, command),
        inputsInline: true,
        colour: serviceColor(service),
        tooltip: command.description,
        helpUrl: serviceHelp(service),
        service: service,
        command: command,
        previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        template: "command"
      };
    });
    this._serviceBlocks = [].concat((0,toConsumableArray/* default */.Z)(eventBlocks), (0,toConsumableArray/* default */.Z)(registerChangeByEventBlocks), (0,toConsumableArray/* default */.Z)(registerSimplesGetBlocks), (0,toConsumableArray/* default */.Z)(registerEnumGetBlocks), (0,toConsumableArray/* default */.Z)(registerNumericsGetBlocks), (0,toConsumableArray/* default */.Z)(registerSetBlocks), (0,toConsumableArray/* default */.Z)(customBlockDefinitions), (0,toConsumableArray/* default */.Z)(commandBlocks));
    var eventFieldGroups = [{
      output: toolbox/* NUMBER_TYPE */.sS,
      filter: jdspec/* isNumericType */.FV
    }, {
      output: toolbox/* BOOLEAN_TYPE */.lu,
      filter: isBooleanField
    }, {
      output: toolbox/* STRING_TYPE */.jt,
      filter: function filter(f) {
        return isStringField(f) && f.encoding !== "JSON";
      }
    }, {
      output: toolbox/* JSON_TYPE */.oj,
      filter: function filter(f) {
        return isStringField(f) && f.encoding === "JSON";
      }
    }]; // generate accessor blocks for event data with numbers

    this._eventFieldBlocks = (0,utils/* arrayConcatMany */.ue)((0,utils/* arrayConcatMany */.ue)(eventFieldGroups.map(function (_ref17) {
      var output = _ref17.output,
          filter = _ref17.filter;
      return events.map(function (_ref18) {
        var service = _ref18.service,
            events = _ref18.events;
        return events.filter(function (event) {
          return event.fields.filter(filter).length > 0;
        }).map(function (event) {
          return {
            service: service,
            event: event
          };
        }).map(function (_ref19) {
          var service = _ref19.service,
              event = _ref19.event;
          return {
            kind: "block",
            type: "jacdac_event_field_" + output.toLowerCase() + "_" + service.shortId + "_" + event.name,
            message0: event.name + " %1",
            args0: [{
              type: "field_dropdown",
              name: "field",
              options: event.fields.map(function (field) {
                return [(0,jdspec/* humanify */.lW)(field.name), field.name];
              })
            }],
            colour: serviceColor(service),
            inputsInline: true,
            tooltip: "Data fields of the " + event.name + " event",
            helpUrl: serviceHelp(service),
            service: service,
            event: event,
            output: output,
            template: "event_field"
          };
        });
      });
    })));
    this._runtimeBlocks = [{
      kind: "block",
      type: ROLE_BOUND_EVENT_BLOCK,
      message0: "on %1 %2",
      args0: [{
        type: "field_variable",
        name: "role",
        variable: "any",
        variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(this.supportedServices.map(function (service) {
          return service.shortId;
        }))),
        defaultType: "client"
      }, {
        type: "field_dropdown",
        name: "event",
        options: [["bound", "bound"], ["unbound", "unbound"]]
      }],
      inputsInline: true,
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      colour: commandColor,
      tooltip: "Runs code when a role is connected or disconnected",
      helpUrl: "",
      template: "role_binding_event"
    }, {
      kind: "block",
      type: ROLE_BOUND_BLOCK,
      message0: "%1 bound",
      args0: [{
        type: "field_variable",
        name: "role",
        variable: "any",
        variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(this.supportedServices.map(function (service) {
          return service.shortId;
        }))),
        defaultType: "client"
      }],
      output: "Boolean",
      inputsInline: true,
      colour: commandColor,
      tooltip: "Runs code when a role is connected or disconnected",
      helpUrl: "",
      template: "role_bound"
    }, {
      kind: "block",
      type: SET_STATUS_LIGHT_BLOCK,
      message0: "set %1 status light to %2",
      args0: [{
        type: "field_variable",
        name: "role",
        variable: "all",
        variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(this.supportedServices.map(function (service) {
          return service.shortId;
        }))),
        defaultType: "client"
      }, {
        type: "input_value",
        name: "color",
        check: "Number"
      }],
      values: {
        color: {
          kind: "block",
          type: LEDColorField/* default.SHADOW.type */.Z.SHADOW.type
        }
      },
      inputsInline: true,
      previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      colour: commandColor,
      tooltip: "Sets the color on the status light",
      helpUrl: ""
    }];
    var toolsBlocks = [{
      kind: "block",
      type: TWIN_BLOCK,
      message0: "view %1 %2 %3",
      args0: [{
        type: "field_variable",
        name: "role",
        variable: "none",
        variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(servicesDSL.supportedServices.map(function (service) {
          return service.shortId;
        }))),
        defaultType: "client"
      }, {
        type: "input_dummy"
      }, {
        type: TwinField/* default.KEY */.Z.KEY,
        name: "twin"
      }],
      colour: toolbox/* toolsColour */.FR,
      inputsInline: false,
      tooltip: "Twin of the selected service",
      nextStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
      helpUrl: "",
      template: "meta",
      transformData: toolbox/* identityTransformData */.FW
    }, {
      kind: "block",
      type: INSPECT_BLOCK,
      message0: "inspect %1 %2 %3",
      args0: [{
        type: "field_variable",
        name: "role",
        variable: "none",
        variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(servicesDSL.supportedServices.map(function (service) {
          return service.shortId;
        }))),
        defaultType: "client"
      }, {
        type: "input_dummy"
      }, {
        type: JDomTreeField/* default.KEY */.Z.KEY,
        name: "twin"
      }],
      colour: toolbox/* toolsColour */.FR,
      inputsInline: false,
      tooltip: "Inspect a service",
      helpUrl: "",
      template: "meta"
    }];
    return [].concat((0,toConsumableArray/* default */.Z)(this._serviceBlocks), (0,toConsumableArray/* default */.Z)(this._eventFieldBlocks), (0,toConsumableArray/* default */.Z)(this._runtimeBlocks), toolsBlocks);
  };

  _proto.createCategory = function createCategory(options) {
    var _source$blocks,
        _this = this;

    var theme = options.theme,
        source = options.source,
        liveServices = options.liveServices;
    var serviceColor = this.createServiceColor(theme);
    var blockServices = (source === null || source === void 0 ? void 0 : source.variables.map(function (v) {
      return v.type;
    }).filter(function (type) {
      return !!(0,spec/* serviceSpecificationFromName */.kB)(type);
    })) || [];
    var usedEvents = new Set(source === null || source === void 0 ? void 0 : (_source$blocks = source.blocks) === null || _source$blocks === void 0 ? void 0 : _source$blocks.map(function (block) {
      return {
        block: block,
        definition: (0,toolbox/* resolveBlockDefinition */.Pq)(block.type)
      };
    }).filter(function (_ref20) {
      var definition = _ref20.definition;
      return (definition === null || definition === void 0 ? void 0 : definition.template) === "event";
    }).map(function (_ref21) {
      var block = _ref21.block,
          definition = _ref21.definition;
      var eventName = block.inputs[0].fields["event"].value;
      return definition.events.find(function (ev) {
        return ev.name === eventName;
      });
    }).filter(function (ev) {
      return !!ev;
    }));

    var jdBlocks = this._serviceBlocks.filter(function (block) {
      return !!block.service;
    });

    var services = (0,utils/* uniqueMap */.EM)(jdBlocks, function (block) {
      return block.service.shortId;
    }, function (block) {
      return block.service;
    });
    var toolboxServices = (0,utils/* uniqueMap */.EM)(flags/* default.diagnostics */.Z.diagnostics ? services : [].concat((0,toConsumableArray/* default */.Z)(blockServices.map(function (srvid) {
      return services.find(function (service) {
        return service.shortId === srvid;
      });
    }).filter(function (srv) {
      return !!srv;
    })), (0,toConsumableArray/* default */.Z)(liveServices.map(function (srv) {
      return srv.specification;
    }))), function (srv) {
      return srv.shortId;
    }, function (srv) {
      return srv;
    }).filter(function (srv) {
      return srv && ignoredServices.indexOf(srv.classIdentifier) < 0;
    }).sort(function (l, r) {
      return l.name.localeCompare(r.name);
    });
    var servicesCategories = toolboxServices.map(function (service) {
      return {
        service: service,
        serviceBlocks: _this._serviceBlocks.filter(function (block) {
          return block.service === service;
        })
      };
    }).map(function (_ref22) {
      var service = _ref22.service,
          serviceBlocks = _ref22.serviceBlocks;
      return {
        kind: "category",
        name: service.name,
        colour: serviceColor(service),
        contents: [].concat((0,toConsumableArray/* default */.Z)(serviceBlocks.map(function (block) {
          return {
            kind: "block",
            type: block.type,
            values: block.values
          };
        })), (0,toConsumableArray/* default */.Z)(_this._eventFieldBlocks.filter(function (ev) {
          return ev.service === service && usedEvents.has(ev.event);
        }).map(function (block) {
          return {
            kind: "block",
            type: block.type,
            values: block.values
          };
        }))),
        button: {
          kind: "button",
          text: "Add " + service.name + " role",
          callbackKey: "jacdac_add_role_callback_" + service.shortId,
          service: service
        }
      };
    }).filter(function (cat) {
      var _cat$contents;

      return !!((_cat$contents = cat.contents) !== null && _cat$contents !== void 0 && _cat$contents.length);
    });
    var commonCategory = {
      kind: "category",
      name: "Roles",
      colour: commandColor,
      contents: [{
        kind: "block",
        type: ROLE_BOUND_EVENT_BLOCK
      }, {
        kind: "block",
        type: ROLE_BOUND_BLOCK
      }, {
        kind: "block",
        type: SET_STATUS_LIGHT_BLOCK,
        values: {
          color: {
            kind: "block",
            type: LEDColorField/* default.SHADOW.type */.Z.SHADOW.type
          }
        }
      }]
    };
    var toolsCategory = {
      kind: "category",
      name: "Tools",
      colour: toolbox/* toolsColour */.FR,
      contents: [{
        kind: "block",
        type: TWIN_BLOCK
      }, {
        kind: "block",
        type: INSPECT_BLOCK
      }]
    };
    return [].concat((0,toConsumableArray/* default */.Z)(servicesCategories), [commonCategory, toolsCategory]);
  };

  _proto.compileEventToVM = function compileEventToVM(options) {
    var makeAwaitEvent = function makeAwaitEvent(cmd, role, eventName) {
      return {
        expression: {
          type: "CallExpression",
          arguments: cmd == "awaitEvent" ? [(0,compile/* toMemberExpression */.vf)(role.toString(), eventName.toString())] : [(0,compile/* toIdentifier */.EB)(role.toString()), (0,compile/* toIdentifier */.EB)(eventName.toString())],
          callee: (0,compile/* toIdentifier */.EB)(cmd)
        },
        event: {
          role: role.toString(),
          event: eventName.toString()
        }
      };
    };

    var block = options.block,
        definition = options.definition,
        blockToExpression = options.blockToExpression;
    var inputs = block.inputs;
    var template = definition.template;

    switch (template) {
      case "event":
        {
          var role = inputs[0].fields["role"].value;
          var eventName = inputs[0].fields["event"].value;
          return makeAwaitEvent("awaitEvent", role.toString(), eventName.toString());
        }

      case "register_change_event":
        {
          var _role = inputs[0].fields["role"].value;
          var _ref23 = definition,
              register = _ref23.register;

          var _blockToExpression = blockToExpression(undefined, inputs[0].child),
              expr = _blockToExpression.expr,
              errors = _blockToExpression.errors;

          return {
            expression: {
              type: "CallExpression",
              arguments: [(0,compile/* toMemberExpression */.vf)(_role.toString(), register.name), expr],
              callee: (0,compile/* toIdentifier */.EB)("awaitChange")
            },
            errors: errors
          };
        }

      default:
        {
          var type = block.type;

          switch (type) {
            case ROLE_BOUND_EVENT_BLOCK:
              {
                var _role2 = inputs[0].fields["role"].value;
                var _eventName = inputs[0].fields["event"].value;
                return makeAwaitEvent("roleBound", _role2.toString(), _eventName.toString());
              }
          }
        }
    }

    return undefined;
  };

  _proto.compileExpressionToVM = function compileExpressionToVM(options) {
    var event = options.event,
        definition = options.definition,
        block = options.block;
    var inputs = block.inputs,
        id = block.id;
    var template = definition.template;

    switch (template) {
      case "register_get":
        {
          var _ref24 = definition,
              register = _ref24.register;
          var role = inputs[0].fields["role"].value;
          var field = inputs[0].fields["field"];
          return {
            expr: (0,compile/* toMemberExpression */.vf)(role, field ? (0,compile/* toMemberExpression */.vf)(register.name, field.value) : register.name),
            errors: []
          };
        }

      case "event_field":
        {
          var _ref25 = definition,
              eventInfo = _ref25.event;
          var errors = [];

          if (event.event !== eventInfo.name) {
            errors.push({
              sourceId: id,
              message: "Event " + eventInfo.name + " is not available in this handler."
            });
          }

          var _field = inputs[0].fields["field"];
          return {
            expr: (0,compile/* toMemberExpression */.vf)(event.role, (0,compile/* toMemberExpression */.vf)(event.event, _field.value)),
            errors: errors
          };
        }

      default:
        {
          var type = block.type;
          var _errors = [];

          switch (type) {
            case ROLE_BOUND_BLOCK:
              {
                var _role3 = inputs[0].fields["role"].value;
                return {
                  expr: {
                    type: "CallExpression",
                    arguments: [(0,compile/* toIdentifier */.EB)(_role3.toString())],
                    callee: (0,compile/* toMemberExpression */.vf)("$fun", "roleBoundExpression")
                  },
                  errors: _errors
                };
              }
          }
        }
    }

    return undefined;
  };

  _proto.compileCommandToVM = function compileCommandToVM(options) {
    var event = options.event,
        block = options.block,
        definition = options.definition,
        blockToExpression = options.blockToExpression;
    var template = definition.template;
    var inputs = block.inputs;

    switch (template) {
      case "register_set":
        {
          var _ref26 = definition,
              register = _ref26.register;

          var _blockToExpression2 = blockToExpression(event, inputs[0].child),
              expr = _blockToExpression2.expr,
              errors = _blockToExpression2.errors;

          var role = inputs[0].fields.role.value;
          return {
            cmd: (0,VMgenerator/* makeVMBase */.IZ)(block, {
              type: "CallExpression",
              arguments: [(0,compile/* toMemberExpression */.vf)(role, register.name), expr],
              callee: (0,compile/* toIdentifier */.EB)("writeRegister")
            }),
            errors: errors
          };
        }

      case "command":
        {
          var _ref27 = definition,
              serviceCommand = _ref27.command;
          var _role4 = inputs[0].fields.role.value;
          var exprsErrors = inputs.map(function (a) {
            return blockToExpression(event, a.child);
          });
          return {
            cmd: (0,VMgenerator/* makeVMBase */.IZ)(block, {
              type: "CallExpression",
              arguments: exprsErrors.map(function (p) {
                return p.expr;
              }),
              callee: (0,compile/* toMemberExpression */.vf)(_role4, serviceCommand.name)
            }),
            errors: exprsErrors.flatMap(function (p) {
              return p.errors;
            })
          };
        }

      default:
        {
          var type = block.type;

          switch (type) {
            case SET_STATUS_LIGHT_BLOCK:
              {
                console.log("SET_STATUS");
              }
          }
        }
    }

    return undefined;
  };

  return ServicesBlockDomainSpecificLanguage;
}();
var servicesDSL = new ServicesBlockDomainSpecificLanguage();
/* harmony default export */ var servicesdsl = (servicesDSL);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/loopsdsl.ts



var WAIT_BLOCK = "jacdac_wait";
var ON_START_BLOCK = "jacdac_start";
var REPEAT_EVERY_BLOCK = "jacdac_repeat_every";
var loopsdsl_colour = "#4fbac9";
var loopsDsl = {
  id: "loops",
  createBlocks: function createBlocks() {
    return [{
      kind: "block",
      type: WAIT_BLOCK,
      message0: "wait %1 s",
      args0: [{
        type: "input_value",
        name: "time",
        check: "Number"
      }],
      inputsInline: true,
      previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      colour: loopsdsl_colour,
      tooltip: "Wait the desired time",
      helpUrl: ""
    }, {
      kind: "block",
      type: ON_START_BLOCK,
      message0: "on start",
      args0: [],
      colour: loopsdsl_colour,
      inputsInline: true,
      tooltip: "Runs code when the device starts",
      helpUrl: "",
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL
    }, {
      kind: "block",
      type: REPEAT_EVERY_BLOCK,
      message0: "repeat every %1s",
      args0: [{
        type: "input_value",
        name: "interval",
        check: "Number"
      }],
      colour: loopsdsl_colour,
      inputsInline: true,
      tooltip: "Repeats code at a given interval in seconds",
      helpUrl: "",
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL
    }];
  },
  createCategory: function createCategory() {
    return [{
      kind: "sep"
    }, {
      kind: "category",
      name: "Events",
      colour: loopsdsl_colour,
      contents: [{
        kind: "block",
        type: REPEAT_EVERY_BLOCK,
        values: {
          interval: {
            kind: "block",
            type: "jacdac_time_picker"
          }
        }
      }, {
        kind: "block",
        type: ON_START_BLOCK
      }, {
        kind: "block",
        type: WAIT_BLOCK,
        values: {
          time: {
            kind: "block",
            type: "jacdac_time_picker"
          }
        }
      }].filter(function (b) {
        return !!b;
      })
    }];
  },
  compileEventToVM: function compileEventToVM(_ref) {
    var block = _ref.block,
        blockToExpression = _ref.blockToExpression;
    var type = block.type;

    if (type === ON_START_BLOCK) {
      return {
        expression: (0,VMgenerator/* makeVMBase */.IZ)(block, {
          type: "CallExpression",
          arguments: [],
          callee: (0,compile/* toIdentifier */.EB)("start")
        }).command,
        errors: (0,VMgenerator/* processErrors */.cC)(block, [])
      };
    } else if (type === REPEAT_EVERY_BLOCK) {
      var inputs = block.inputs;

      var _blockToExpression = blockToExpression(undefined, inputs[0].child),
          time = _blockToExpression.expr,
          errors = _blockToExpression.errors;

      return {
        expression: (0,VMgenerator/* makeVMBase */.IZ)(block, {
          type: "CallExpression",
          arguments: [time],
          callee: (0,compile/* toIdentifier */.EB)("wait")
        }).command,
        errors: (0,VMgenerator/* processErrors */.cC)(block, errors)
      };
    }

    return undefined;
  },
  compileCommandToVM: function compileCommandToVM(_ref2) {
    var event = _ref2.event,
        block = _ref2.block,
        blockToExpression = _ref2.blockToExpression;
    var type = block.type;

    if (type === WAIT_BLOCK) {
      var inputs = block.inputs;
      {
        var _blockToExpression2 = blockToExpression(event, inputs[0].child),
            time = _blockToExpression2.expr,
            errors = _blockToExpression2.errors;

        return {
          cmd: (0,VMgenerator/* makeVMBase */.IZ)(block, {
            type: "CallExpression",
            arguments: [time],
            callee: (0,compile/* toIdentifier */.EB)("wait")
          }),
          errors: (0,VMgenerator/* processErrors */.cC)(block, errors)
        };
      }
    }

    return undefined;
  }
};
/* harmony default export */ var loopsdsl = (loopsDsl);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/logicdsl.ts
var ops = {
  AND: "&&",
  OR: "||",
  EQ: "===",
  NEQ: "!==",
  LT: "<",
  GT: ">",
  LTE: "<=",
  GTE: ">=",
  NEG: "-"
};
var logicDsl = {
  id: "logic",
  types: ["variable_if", "logic_compare", "logic_operation", "logic_negate", "logic_boolean"],
  createCategory: function createCategory() {
    return [{
      kind: "category",
      name: "Logic",
      colour: "%{BKY_LOGIC_HUE}",
      contents: [{
        kind: "block",
        type: "dynamic_if"
      }, {
        kind: "block",
        type: "logic_compare",
        values: {
          A: {
            kind: "block",
            type: "math_number"
          },
          B: {
            kind: "block",
            type: "math_number"
          }
        }
      }, {
        kind: "block",
        type: "logic_operation",
        values: {
          A: {
            kind: "block",
            type: "logic_boolean"
          },
          B: {
            kind: "block",
            type: "logic_boolean"
          }
        }
      }, {
        kind: "block",
        type: "logic_negate",
        values: {
          BOOL: {
            kind: "block",
            type: "logic_boolean"
          }
        }
      }, {
        kind: "block",
        type: "logic_boolean"
      }]
    }];
  },
  compileExpressionToVM: function compileExpressionToVM(_ref) {
    var event = _ref.event,
        block = _ref.block,
        blockToExpressionInner = _ref.blockToExpressionInner;
    var type = block.type,
        inputs = block.inputs;

    switch (type) {
      case "logic_operation":
        {
          var left = blockToExpressionInner(event, inputs[0].child);
          var right = blockToExpressionInner(event, inputs[1].child);
          var op = inputs[1].fields["op"].value;
          return {
            expr: {
              type: "LogicalExpression",
              operator: ops[op] || op,
              left: left,
              right: right
            },
            errors: []
          };
        }

      case "logic_negate":
        {
          var argument = blockToExpressionInner(event, inputs[0].child);
          return {
            expr: {
              type: "UnaryExpression",
              operator: "!",
              argument: argument,
              prefix: false // TODO:?

            },
            errors: []
          };
        }

      case "logic_compare":
        {
          var _left = blockToExpressionInner(event, inputs[0].child);

          var _right = blockToExpressionInner(event, inputs[1].child);

          var _op = inputs[1].fields["op"].value;
          return {
            expr: {
              type: "BinaryExpression",
              operator: ops[_op] || _op,
              left: _left,
              right: _right
            },
            errors: []
          };
        }
    }

    return undefined;
  }
};
/* harmony default export */ var logicdsl = (logicDsl);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/mathdsl.ts
var mathdsl_ops = {
  NEG: "-",
  ADD: "+",
  MULTIPLY: "*",
  DIVIDE: "/",
  MINUS: "-"
};
var mathDsl = {
  id: "jacdacmath",
  createBlocks: function createBlocks() {
    return [{
      kind: "block",
      type: "jacdac_math_arithmetic",
      message0: "%1 %2 %3",
      args0: [{
        type: "input_value",
        name: "A",
        check: "Number"
      }, {
        type: "field_dropdown",
        name: "OP",
        options: [["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"], ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"], ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"], ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"]]
      }, {
        type: "input_value",
        name: "B",
        check: "Number"
      }],
      inputsInline: true,
      output: "Number",
      style: "math_blocks",
      helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
      extensions: ["math_op_tooltip"]
    }, {
      kind: "block",
      type: "jacdac_math_single",
      message0: "%1 %2",
      args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [["-", "NEG"], ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", "ABS"]]
      }, {
        type: "input_value",
        name: "NUM",
        check: "Number"
      }],
      output: "Number",
      style: "math_blocks",
      helpUrl: "%{BKY_MATH_SINGLE_HELPURL}",
      extensions: ["math_op_tooltip"]
    }, {
      kind: "block",
      type: "jacdac_math_random",
      message0: "random",
      args0: [],
      output: "Number",
      style: "math_blocks",
      vm: function vm() {
        return Math.random();
      }
    }, {
      kind: "block",
      type: "jacdac_math_clamp",
      message0: "clamp %1 in [%2, %3]",
      args0: [{
        type: "input_value",
        name: "value",
        check: "Number"
      }, {
        type: "input_value",
        name: "minInclusive",
        check: "Number"
      }, {
        type: "input_value",
        name: "maxInclusive",
        check: "Number"
      }],
      output: "Number",
      style: "math_blocks",
      vm: function vm(value, minInclusive, maxInclusive) {
        return value < minInclusive ? minInclusive : value > maxInclusive ? maxInclusive : value;
      }
    }, {
      kind: "block",
      type: "jacdac_math_map",
      message0: "map %1 from [%2, %3] to [%4, %5]",
      args0: [{
        type: "input_value",
        name: "value",
        check: "Number"
      }, {
        type: "input_value",
        name: "fromMin",
        check: "Number"
      }, {
        type: "input_value",
        name: "fromMax",
        check: "Number"
      }, {
        type: "input_value",
        name: "toMin",
        check: "Number"
      }, {
        type: "input_value",
        name: "toMax",
        check: "Number"
      }],
      output: "Number",
      style: "math_blocks"
    }];
  },
  createCategory: function createCategory() {
    return [{
      kind: "category",
      name: "Math",
      colour: "%{BKY_MATH_HUE}",
      contents: [{
        kind: "block",
        type: "jacdac_math_arithmetic",
        values: {
          A: {
            kind: "block",
            type: "math_number"
          },
          B: {
            kind: "block",
            type: "math_number"
          }
        }
      }, {
        kind: "block",
        type: "jacdac_math_single",
        values: {
          NUM: {
            kind: "block",
            type: "math_number"
          }
        }
      }, {
        kind: "block",
        type: "jacdac_math_random"
      }, {
        kind: "block",
        type: "jacdac_math_map"
      }, {
        kind: "block",
        type: "math_number"
      }]
    }];
  },
  compileExpressionToVM: function compileExpressionToVM(_ref) {
    var event = _ref.event,
        block = _ref.block,
        blockToExpressionInner = _ref.blockToExpressionInner;
    var type = block.type,
        inputs = block.inputs;

    switch (type) {
      case "math_single": // built-in blockly

      case "jacdac_math_single":
        {
          var argument = blockToExpressionInner(event, inputs[0].child);
          var op = inputs[0].fields["op"].value;
          return {
            expr: {
              type: "UnaryExpression",
              operator: mathdsl_ops[op] || op,
              argument: argument,
              prefix: false // TODO:?

            },
            errors: []
          };
        }

      case "math_arithmetic": // built-in blockly

      case "jacdac_math_arithmetic":
        {
          var left = blockToExpressionInner(event, inputs[0].child);
          var right = blockToExpressionInner(event, inputs[1].child);
          var _op = inputs[1].fields["op"].value;
          return {
            expr: {
              type: "BinaryExpression",
              operator: mathdsl_ops[_op] || _op,
              left: left,
              right: right
            },
            errors: []
          };
        }
    }

    return undefined;
  }
};
/* harmony default export */ var mathdsl = (mathDsl);
// EXTERNAL MODULE: ./src/components/blockly/dsl/variablesdsl.ts
var variablesdsl = __webpack_require__(86947);
// EXTERNAL MODULE: ./src/components/blockly/dsl/shadowdsl.ts
var shadowdsl = __webpack_require__(96958);
// EXTERNAL MODULE: ./src/components/blockly/dsl/fieldsdsl.ts
var fieldsdsl = __webpack_require__(76658);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/jsondsl.ts


var jsondsl_colour = "#654321";
var JSON_FIELD_TYPE = "JSONField";
var JSON_OBJECT_BLOCK = "json_object";
var JSON_FIELD_SET_BLOCK = "json_field_set";
var JSON_FIELD_GET_TEMPLATE = "jsonFieldGet";
var JSON_FIELD_VALUE_TYPE = [].concat((0,toConsumableArray/* default */.Z)(toolbox/* PRIMITIVE_TYPES */.eg), [toolbox/* JSON_TYPE */.oj]);
var JSON_FIELD_HAS_BLOCK = "json_field_has";
var jsonDSL = {
  id: "json",
  createBlocks: function createBlocks() {
    return [{
      kind: "block",
      type: JSON_OBJECT_BLOCK,
      message0: "{ %1 %2 }",
      args0: [{
        type: "input_dummy"
      }, {
        type: "input_statement",
        name: "fields",
        check: JSON_FIELD_TYPE
      }],
      output: toolbox/* JSON_TYPE */.oj,
      colour: jsondsl_colour
    }, {
      kind: "block",
      type: JSON_FIELD_SET_BLOCK,
      message0: "%1: %2",
      args0: [{
        type: "field_input",
        name: "name"
      }, {
        type: "input_value",
        name: "value",
        check: JSON_FIELD_VALUE_TYPE
      }],
      previousStatement: JSON_FIELD_TYPE,
      nextStatement: JSON_FIELD_TYPE,
      colour: jsondsl_colour
    }].concat((0,toConsumableArray/* default */.Z)(toolbox/* PRIMITIVE_TYPES.map */.eg.map(function (output) {
      return {
        kind: "block",
        type: "json_field_get_as_" + output.toLowerCase(),
        message0: "%1 [ %2 ] as " + output.toLowerCase(),
        args0: [{
          type: "input_value",
          name: "value",
          check: toolbox/* JSON_TYPE */.oj
        }, {
          type: "field_input",
          name: "name"
        }],
        output: output,
        colour: jsondsl_colour,
        template: JSON_FIELD_GET_TEMPLATE,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        vm: function vm(value, name) {
          return value === null || value === void 0 ? void 0 : value[name];
        }
      };
    })), [{
      kind: "block",
      type: JSON_FIELD_HAS_BLOCK,
      message0: "has %1 [ %2 ]",
      args0: [{
        type: "input_value",
        name: "value",
        check: toolbox/* JSON_TYPE */.oj
      }, {
        type: "field_input",
        name: "name"
      }],
      output: toolbox/* BOOLEAN_TYPE */.lu,
      colour: jsondsl_colour,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      vm: function vm(value, name) {
        return !!(value !== null && value !== void 0 && value[name]);
      }
    }]);
  },
  createCategory: function createCategory() {
    return [{
      kind: "category",
      name: "JSON",
      colour: jsondsl_colour,
      contents: [{
        kind: "label",
        text: "Create"
      }, {
        kind: "block",
        type: JSON_OBJECT_BLOCK
      }, {
        kind: "block",
        type: JSON_FIELD_SET_BLOCK,
        values: {
          value: {
            kind: "block",
            type: "math_number"
          }
        }
      }, {
        kind: "label",
        text: "Read"
      }].concat((0,toConsumableArray/* default */.Z)(toolbox/* PRIMITIVE_TYPES.map */.eg.map(function (output) {
        return {
          kind: "block",
          type: "json_field_get_as_" + output.toLowerCase(),
          values: {
            value: {
              kind: "block",
              type: "variables_get",
              check: toolbox/* JSON_TYPE */.oj
            }
          }
        };
      })), [{
        kind: "block",
        type: JSON_FIELD_HAS_BLOCK
      }])
    }];
  },
  compileExpressionToVM: function compileExpressionToVM(options) {
    var event = options.event,
        block = options.block,
        definition = options.definition,
        blockToExpressionInner = options.blockToExpressionInner;
    var type = block.type;
    var template = definition.template;

    if (type === JSON_OBJECT_BLOCK) {// TODO
    } else if (type === JSON_FIELD_SET_BLOCK) {// TODO
    } else if (template === JSON_FIELD_GET_TEMPLATE) {
      // TODO: genearte JSON
      console.log("json expr", {
        event: event,
        block: block,
        definition: definition,
        blockToExpressionInner: blockToExpressionInner
      });
      return undefined;
    } // don't know


    return undefined;
  }
};
/* harmony default export */ var jsondsl = (jsonDSL);
// EXTERNAL MODULE: ./src/components/blockly/fields/ScatterPlotField.tsx
var ScatterPlotField = __webpack_require__(97884);
// EXTERNAL MODULE: ./src/components/blockly/fields/DataColumnChooserField.ts
var DataColumnChooserField = __webpack_require__(44393);
// EXTERNAL MODULE: ./src/components/blockly/fields/LinePlotField.tsx
var LinePlotField = __webpack_require__(70659);
// EXTERNAL MODULE: ./src/components/blockly/fields/BarField.tsx
var BarField = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/components/blockly/fields/PieField.tsx
var PieField = __webpack_require__(37505);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/chartdsl.ts






var SCATTERPLOT_BLOCK = "chart_scatterplot";
var LINEPLOT_BLOCK = "chart_lineplot";
var PIEPLOT_BLOCK = "chart_pieplot";
var BARCHART_BLOCK = "chart_bar";
var chartdsl_colour = "#999";
var chartDSL = {
  id: "chart",
  createBlocks: function createBlocks() {
    return [{
      kind: "block",
      type: SCATTERPLOT_BLOCK,
      message0: "scatterplot x %1 y %2 %3 %4",
      args0: [{
        type: DataColumnChooserField/* default.KEY */.Z.KEY,
        name: "x"
      }, {
        type: DataColumnChooserField/* default.KEY */.Z.KEY,
        name: "y"
      }, {
        type: "input_dummy"
      }, {
        type: ScatterPlotField/* default.KEY */.Z.KEY,
        name: "plot"
      }],
      previousStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
      nextStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
      colour: chartdsl_colour,
      template: "meta",
      inputsInline: false,
      transformData: toolbox/* identityTransformData */.FW
    }, {
      kind: "block",
      type: BARCHART_BLOCK,
      message0: "bar index %1 value %2 %3 %4",
      args0: [{
        type: DataColumnChooserField/* default.KEY */.Z.KEY,
        name: "index"
      }, {
        type: DataColumnChooserField/* default.KEY */.Z.KEY,
        name: "value"
      }, {
        type: "input_dummy"
      }, {
        type: BarField/* default.KEY */.Z.KEY,
        name: "plot"
      }],
      previousStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
      nextStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
      colour: chartdsl_colour,
      template: "meta",
      inputsInline: false,
      transformData: toolbox/* identityTransformData */.FW
    }, {
      kind: "block",
      type: LINEPLOT_BLOCK,
      message0: "line x %1 y %2 %3 %4",
      args0: [{
        type: DataColumnChooserField/* default.KEY */.Z.KEY,
        name: "x"
      }, {
        type: DataColumnChooserField/* default.KEY */.Z.KEY,
        name: "y"
      }, {
        type: "input_dummy"
      }, {
        type: LinePlotField/* default.KEY */.Z.KEY,
        name: "plot"
      }],
      previousStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
      nextStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
      colour: chartdsl_colour,
      template: "meta",
      inputsInline: false,
      transformData: toolbox/* identityTransformData */.FW
    }, {
      kind: "block",
      type: PIEPLOT_BLOCK,
      message0: "pie name %1 value %2 %3 %4",
      args0: [{
        type: DataColumnChooserField/* default.KEY */.Z.KEY,
        name: "id"
      }, {
        type: DataColumnChooserField/* default.KEY */.Z.KEY,
        name: "value"
      }, {
        type: "input_dummy"
      }, {
        type: PieField/* default.KEY */.Z.KEY,
        name: "plot"
      }],
      previousStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
      nextStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
      colour: chartdsl_colour,
      template: "meta",
      inputsInline: false,
      transformData: toolbox/* identityTransformData */.FW
    }];
  },
  createCategory: function createCategory() {
    return [{
      kind: "category",
      name: "Charts",
      contents: [{
        kind: "block",
        type: SCATTERPLOT_BLOCK
      }, {
        kind: "block",
        type: BARCHART_BLOCK
      }, {
        kind: "block",
        type: LINEPLOT_BLOCK
      }, {
        kind: "block",
        type: PIEPLOT_BLOCK
      }],
      colour: chartdsl_colour
    }];
  }
};
/* harmony default export */ var chartdsl = (chartDSL);
// EXTERNAL MODULE: ./src/components/blockly/dsl/datadsl.ts + 1 modules
var datadsl = __webpack_require__(79018);
// EXTERNAL MODULE: ./src/components/blockly/fields/GaugeWidgetField.tsx
var GaugeWidgetField = __webpack_require__(61162);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/widgetdsl.ts



var DASHBOARD_GAUGE_BLOCK = "jacdac_widget_gauge";
var widgetdsl_colour = "#999";
var widgetDSL = {
  id: "widget",
  createBlocks: function createBlocks() {
    return [{
      kind: "block",
      type: DASHBOARD_GAUGE_BLOCK,
      message0: "gauge min %1 max %2 %3 %4 %5",
      args0: [{
        type: "field_number",
        name: "min"
      }, {
        type: "field_number",
        name: "max",
        value: 100
      }, {
        type: DataColumnChooserField/* default.KEY */.Z.KEY,
        name: "field"
      }, {
        type: "input_dummy"
      }, {
        type: GaugeWidgetField/* default.KEY */.Z.KEY,
        name: "widget"
      }],
      previousStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
      nextStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
      colour: widgetdsl_colour,
      template: "meta",
      inputsInline: false,
      transformData: toolbox/* identityTransformData */.FW
    }];
  },
  createCategory: function createCategory() {
    return [{
      kind: "category",
      name: "Widgets",
      contents: [{
        kind: "block",
        type: DASHBOARD_GAUGE_BLOCK
      }],
      colour: widgetdsl_colour
    }];
  }
};
/* harmony default export */ var widgetdsl = (widgetDSL);
;// CONCATENATED MODULE: ./src/components/vm/vmdsls.ts












var vmDsls = [servicesdsl, loopsdsl, logicdsl, mathdsl, jsondsl, variablesdsl/* default */.Z, toolsdsl, widgetdsl, chartdsl, datadsl/* default */.Z, shadowdsl/* default */.Z, fieldsdsl/* default */.Z];
/* harmony default export */ var vmdsls = (vmDsls);
;// CONCATENATED MODULE: ./src/components/vm/VMEditor.tsx












var VM_SOURCE_STORAGE_KEY = "tools:vmeditor";

function VMEditorWithContext() {
  var _useContext = (0,react.useContext)(BlockContext/* default */.C),
      dsls = _useContext.dsls,
      workspace = _useContext.workspace,
      workspaceJSON = _useContext.workspaceJSON,
      roleManager = _useContext.roleManager,
      setWarnings = _useContext.setWarnings;

  var _useState = (0,react.useState)(),
      program = _useState[0],
      setProgram = _useState[1];

  var autoStart = false;

  var _useVMRunner = useVMRunner(roleManager, program, autoStart),
      runner = _useVMRunner.runner,
      run = _useVMRunner.run,
      cancel = _useVMRunner.cancel;

  (0,react.useEffect)(function () {
    try {
      var newProgram = (0,VMgenerator/* default */.ZP)(workspaceJSON, dsls);
      if (JSON.stringify(newProgram) !== JSON.stringify(program)) setProgram(newProgram);
    } catch (e) {
      console.error(e);
      setProgram(undefined);
    }
  }, [dsls, workspaceJSON]);
  (0,react.useEffect)(function () {
    return program && (roleManager === null || roleManager === void 0 ? void 0 : roleManager.setRoles(program.roles));
  }, [roleManager, program]);
  (0,react.useEffect)(function () {
    return setWarnings((0,utils/* arrayConcatMany */.ue)(program === null || program === void 0 ? void 0 : program.handlers.map(function (h) {
      return h.errors;
    })));
  }, [program]);
  (0,react.useEffect)(function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var ws = workspace;
    var services = ws === null || ws === void 0 ? void 0 : ws.jacdacServices;

    if (services) {
      services.runner = runner;
    }
  }, [workspace, runner]);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(VMToolbar, {
    runner: runner,
    run: run,
    cancel: cancel
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(BlockEditor/* default */.Z, null)), flags/* default.diagnostics */.Z.diagnostics && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(VMDiagnostics, {
    program: program
  }), /*#__PURE__*/react.createElement(BlockDiagnostics/* default */.Z, null)));
}

function VMEditor() {
  var dsls = (0,react.useMemo)(function () {
    return vmdsls;
  }, []);
  return /*#__PURE__*/react.createElement(NoSsr/* default */.Z, null, /*#__PURE__*/react.createElement(BlockContext/* BlockProvider */.Z, {
    storageKey: VM_SOURCE_STORAGE_KEY,
    dsls: dsls
  }, /*#__PURE__*/react.createElement(VMEditorWithContext, null)));
}
;// CONCATENATED MODULE: ./src/pages/tools/vm-editor.tsx


function Page() {
  return /*#__PURE__*/react.createElement(VMEditor, null);
}

/***/ })

}]);