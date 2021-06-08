(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1762,2369,4500],{

/***/ 4998:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Chip_Chip; }
});

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(81253);
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


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

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


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

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

/***/ 94500:
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
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.Z = _default;

/***/ }),

/***/ 52377:
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
  d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
}), 'GetApp');

exports.Z = _default;

/***/ }),

/***/ 58504:
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
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
}), 'Launch');

exports.Z = _default;

/***/ }),

/***/ 66601:
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
  d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
}), 'Pause');

exports.Z = _default;

/***/ }),

/***/ 42404:
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
  d: "M8 5v14l11-7z"
}), 'PlayArrow');

exports.Z = _default;

/***/ }),

/***/ 34264:
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
  d: "M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"
}), 'PlayForWork');

exports.Z = _default;

/***/ }),

/***/ 8567:
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
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
}), 'Save');

exports.Z = _default;

/***/ }),

/***/ 34257:
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
  d: "M6 6h12v12H6z"
}), 'Stop');

exports.Z = _default;

/***/ }),

/***/ 50274:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CodeBlock; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96156);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.js + 2 modules
var dist = __webpack_require__(18328);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/github/index.js
var github = __webpack_require__(13019);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/vsDark/index.js
var vsDark = __webpack_require__(41194);
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(91350);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/GetApp.js
var GetApp = __webpack_require__(52377);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Launch.js
var Launch = __webpack_require__(58504);
// EXTERNAL MODULE: ./src/components/ui/Tooltip.tsx
var Tooltip = __webpack_require__(60102);
// EXTERNAL MODULE: ./src/components/ui/PaperBox.tsx
var PaperBox = __webpack_require__(79739);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__(44942);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tab/Tab.js
var Tab = __webpack_require__(342);
// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__(3263);
// EXTERNAL MODULE: ./src/components/makecode/MakeCodeSnippetContext.tsx
var makecode_MakeCodeSnippetContext = __webpack_require__(54888);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/makecode.ts + 1 modules
var makecode = __webpack_require__(93127);
;// CONCATENATED MODULE: ./src/components/hooks/useWindowEvent.ts

function useWindowEvent_useWindowEvent(type, listener, passive, deps) {
  if (passive === void 0) {
    passive = false;
  }

  useEffect(function () {
    if (typeof window === "undefined") return undefined; // SSR
    // initiate the event handler

    window.addEventListener(type, listener, passive); // this will clean up the event every time the component is re-rendered

    return function () {
      window.removeEventListener(type, listener);
    };
  }, [type, listener, passive].concat(deps || []));
}
;// CONCATENATED MODULE: ./src/components/makecode/useMakeCodeRenderer.ts





function parseMakeCodeSnippet(source) {
  var ghost;
  var code;
  var meta = {
    dependencies: []
  };

  if (/^---\n/.test(source)) {
    var _front;

    var front;
    var parts = source.replace(/^---\n/, '').split(/---\n/gm);

    switch (parts.length) {
      case 1:
        front = ghost = undefined;
        code = source;
        break;

      case 2:
        front = parts[0];
        code = parts[1];
        break;

      default:
        front = parts[0];
        ghost = parts[1];
        code = parts[2];
        break;
    } // parse front matter


    (_front = front) === null || _front === void 0 ? void 0 : _front.replace(/(.+):\s*(.+)\s*\n/g, function (m, name, value) {
      switch (name) {
        case "dep":
          meta.dependencies.push(value);
          break;

        case "snippet":
          meta.snippet = !!value;
          break;

        default:
          meta[name] = value;
      }

      return "";
    });
  } else {
    code = source;
  } // sniff services


  var mkcds = (0,makecode/* makeCodeServices */.qs)();
  mkcds.filter(function (info) {
    var src = (ghost || "") + "\n" + (code || "");
    return src.indexOf(info.client.qName) > -1 || info.client.default && src.indexOf(info.client.default) > -1;
  }).map(function (info) {
    return info.client.name.replace(/^pxt-/, '') + "=github:" + info.client.repo;
  }).forEach(function (dep) {
    return meta.dependencies.push(dep);
  }); // add jacdac by default

  if (!meta.dependencies.length) meta.dependencies.push("jacdac=github:microsoft/pxt-jacdac"); // ensure unique deps

  meta.dependencies = (0,utils/* unique */.Tw)(meta.dependencies);
  return {
    code: code,
    ghost: ghost,
    meta: meta
  };
}
function useMakeCodeRenderer() {
  var _useContext = useContext(MakeCodeSnippetContext),
      target = _useContext.target,
      rendererUrl = _useContext.rendererUrl;

  var lang = "";
  var iframeId = "makecoderenderer" + target;
  var pendingRequests = useMemo(function () {
    return {};
  }, [target, lang]);

  var sendRequest = function sendRequest(req) {
    var iframe = typeof document !== "undefined" && document.getElementById(iframeId);
    if (iframe !== null && iframe !== void 0 && iframe.dataset.ready) iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow.postMessage(req, rendererUrl);
  };

  var render = function render(source) {
    var code = source.code,
        ghost = source.ghost,
        meta = source.meta;
    var dependencies = meta.dependencies,
        snippet = meta.snippet; // spin up iframe on demans

    if (typeof document !== "undefined" && !document.getElementById(iframeId)) {
      console.log("mkcd: loading iframe");
      var f = document.createElement("iframe");
      f.id = iframeId;
      f.style.position = "absolute";
      f.style.left = "0";
      f.style.bottom = "0";
      f.style.width = "1px";
      f.style.height = "1px";
      f.src = rendererUrl + "?render=1" + (lang ? "&lang=" + lang : '');
      document.body.appendChild(f);
    }

    var req = {
      type: "renderblocks",
      id: "r" + Math.random(),
      code: code,
      ghost: ghost,
      options: {
        dependencies: dependencies,
        snippetMode: snippet
      }
    };
    return new Promise(function (resolve, reject) {
      pendingRequests[req.id] = {
        req: req,
        resolve: resolve,
        reject: reject
      };
      sendRequest(req);
    });
  }; // listen for messages


  var handleMessage = function handleMessage(ev) {
    var msg = ev.data;
    if (msg.source != "makecode") return;

    switch (msg.type) {
      case "renderready":
        {
          console.log("mkcd: renderer ready, " + Object.keys(pendingRequests).length + " pending");
          var iframe = typeof document !== "undefined" && document.getElementById(iframeId);

          if (iframe) {
            console.log("flushing messages");
            iframe.dataset.ready = "1";
            Object.keys(pendingRequests).forEach(function (k) {
              return sendRequest(pendingRequests[k].req);
            });
          }

          break;
        }

      case "renderblocks":
        {
          var id = msg.id; // this is the id you sent

          var r = pendingRequests[id];
          if (!r) return;
          delete pendingRequests[id];
          r.resolve(msg);
          break;
        }
    }
  };

  useWindowEvent("message", handleMessage, false, []);
  return {
    render: render
  };
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
;// CONCATENATED MODULE: ./src/components/makecode/MakeCodeSimulator.tsx






var useStyles = (0,makeStyles/* default */.Z)(function () {
  return (0,createStyles/* default */.Z)({
    root: {
      width: "100%"
    },
    root2: {
      position: "relative",
      paddingTop: "86.75%"
    },
    iframe: {
      position: "absolute",
      left: 0,
      top: 0,
      border: "none",
      width: "100%",
      height: "100%"
    }
  });
});
function MakeCodeSimulator(props) {
  var _this = this;

  var _useContext = (0,react.useContext)(makecode_MakeCodeSnippetContext/* default */.Z),
      simUrl = _useContext.simUrl;

  var snippet = props.snippet;
  var code = snippet.code,
      ghost = snippet.ghost,
      meta = snippet.meta;
  var dependencies = meta.dependencies;

  var _useContext2 = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext2.bus;

  var frameRef = (0,react.useRef)();
  var classes = useStyles();
  var src = (ghost || "") + "\n" + (code || "");
  var url = simUrl + "#single=1&fullscren=1&nofooter=1&deps=" + encodeURIComponent(dependencies.join(",")) + "&code=" + encodeURIComponent(src);
  var origin = new URL(url).origin;
  (0,react.useEffect)(function () {
    return bus.subscribe([constants/* PACKET_SEND */.RaS, constants/* PACKET_PROCESS */.wY8], function (pkt) {
      var _frameRef$current, _frameRef$current$con;

      _this.packetSent++;
      var msg = {
        type: "messagepacket",
        channel: "jacdac",
        broadcast: true,
        data: pkt.toBuffer(),
        sender: pkt.sender
      };
      (_frameRef$current = frameRef.current) === null || _frameRef$current === void 0 ? void 0 : (_frameRef$current$con = _frameRef$current.contentWindow) === null || _frameRef$current$con === void 0 ? void 0 : _frameRef$current$con.postMessage(msg, origin);
    });
  });
  return /*#__PURE__*/react.createElement(PaperBox/* default */.Z, null, /*#__PURE__*/react.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.root2
  }, /*#__PURE__*/react.createElement("iframe", {
    ref: frameRef,
    className: classes.iframe,
    src: url,
    "aria-label": "MakeCode rendering iframe to generate blocks images."
  }))));
}
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(35313);
;// CONCATENATED MODULE: ./src/components/makecode/MakeCodeSnippet.tsx









function MakeCodeSnippet(props) {
  var renderedSource = props.renderedSource;

  var _ref = JSON.parse(renderedSource),
      source = _ref.source,
      rendered = _ref.rendered;

  var _ref2 = rendered || {},
      height = _ref2.height,
      width = _ref2.width,
      url = _ref2.url;

  var tabs = ["blocks", "typescript", "sim"];

  var _useContext = (0,react.useContext)(makecode_MakeCodeSnippetContext/* default */.Z),
      editor = _useContext.editor,
      setEditor = _useContext.setEditor;

  var _useState = (0,react.useState)(tabs.indexOf(editor) || 0),
      tab = _useState[0],
      setTab = _useState[1];

  var handleTabChange = function handleTabChange(event, newValue) {
    if (newValue < tabs.length - 1) setEditor(tabs[newValue]);
    setTab(newValue);
  };

  var snippet = (0,react.useMemo)(function () {
    return parseMakeCodeSnippet(source);
  }, [source]);
  var code = snippet.code;
  return /*#__PURE__*/react.createElement(PaperBox/* default */.Z, null, /*#__PURE__*/react.createElement(Tabs/* default */.Z, {
    value: tab,
    onChange: handleTabChange,
    "aria-label": "Select MakeCode editor"
  }, /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "Blocks"
  }), /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "JavaScript"
  }), /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "Simulator"
  })), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 0
  }, /*#__PURE__*/react.createElement("img", {
    src: (0,gatsby_browser_entry.withPrefix)(url),
    alt: source,
    loading: "lazy"
  })), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 1
  }, /*#__PURE__*/react.createElement(CodeBlock, {
    className: "typescript"
  }, code)), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 2
  }, /*#__PURE__*/react.createElement(MakeCodeSimulator, {
    snippet: snippet
  })));
}
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
;// CONCATENATED MODULE: ./src/components/CodeBlock.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name



 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name





var TraceSnippet = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 7510).then(__webpack_require__.bind(__webpack_require__, 27510));
});
var CodeSandboxButton = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 8574).then(__webpack_require__.bind(__webpack_require__, 18574));
});

function HighlightedCode(props) {
  var children = props.children,
      codeSandbox = props.codeSandbox,
      className = props.className,
      downloadName = props.downloadName,
      downloadText = props.downloadText,
      url = props.url;

  var _useContext = (0,react.useContext)(DarkModeContext/* default */.Z),
      darkMode = _useContext.darkMode;

  var language = (className === null || className === void 0 ? void 0 : className.replace(/language-/, "")) || "";
  var theme = darkMode === "dark" ? vsDark/* default */.Z : github/* default */.Z;
  var valueUri = !!downloadText && "data:application/json;charset=UTF-8," + encodeURIComponent(downloadText);
  return /*#__PURE__*/react.createElement(dist/* default */.ZP, Object.assign({}, dist/* defaultProps */.lG, {
    code: (children === null || children === void 0 ? void 0 : children.replace(/[\s\r\n]*$/g, "")) || "",
    language: language,
    theme: theme
  }), function (_ref) {
    var className = _ref.className,
        style = _ref.style,
        tokens = _ref.tokens,
        getLineProps = _ref.getLineProps,
        getTokenProps = _ref.getTokenProps;
    return /*#__PURE__*/react.createElement("pre", {
      className: className,
      style: _objectSpread({}, style)
    }, !!url && /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
      style: {
        float: "right"
      },
      href: url
    }, /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
      title: "Open " + url
    }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.IconButton, null, /*#__PURE__*/react.createElement(Launch/* default */.Z, null)))), !!downloadText && /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
      style: {
        float: "right"
      },
      href: valueUri,
      download: downloadName || "download"
    }, /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
      title: "Download"
    }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.IconButton, null, /*#__PURE__*/react.createElement(GetApp/* default */.Z, null)))), codeSandbox && /*#__PURE__*/react.createElement("div", {
      style: {
        float: "right"
      }
    }, /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(CodeSandboxButton, {
      source: children
    }))), tokens === null || tokens === void 0 ? void 0 : tokens.map(function (line, index) {
      var lineProps = getLineProps({
        line: line,
        key: index
      });
      return /*#__PURE__*/react.createElement("div", Object.assign({
        key: index
      }, lineProps), line.map(function (token, key) {
        return /*#__PURE__*/react.createElement("span", Object.assign({
          key: key
        }, getTokenProps({
          token: token,
          key: key
        })));
      }));
    }));
  });
}

function CodeBlock(props) {
  var children = props.children,
      className = props.className;
  var language = (className === null || className === void 0 ? void 0 : className.replace(/language-/, "")) || "";

  switch (language) {
    case "trace":
      return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(TraceSnippet, {
        source: children
      }));

    case "blocks":
      return /*#__PURE__*/react.createElement(MakeCodeSnippet, {
        renderedSource: children
      });

    case "vanilla":
      return /*#__PURE__*/react.createElement(HighlightedCode, Object.assign({}, props, {
        className: "javascript",
        codeSandbox: true
      }));

    default:
      return /*#__PURE__*/react.createElement(HighlightedCode, props);
  }
}

/***/ }),

/***/ 92366:
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js
var NoSsr = __webpack_require__(42862);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(21258);
// EXTERNAL MODULE: ./src/components/vm/VMBlockEditor.tsx + 2 modules
var VMBlockEditor = __webpack_require__(81698);
// EXTERNAL MODULE: ./src/components/useLocalStorage.ts
var useLocalStorage = __webpack_require__(86581);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(63349);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96156);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(5991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(41788);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js + 1 modules
var wrapNativeSuper = __webpack_require__(57869);
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
// EXTERNAL MODULE: ./jacdac-ts/src/vm/utils.ts
var utils = __webpack_require__(94624);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/client.ts
var client = __webpack_require__(47235);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/runner.ts







function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







 // eslint-disable-next-line @typescript-eslint/no-explicit-any

var VMStatus;

(function (VMStatus) {
  VMStatus["Ready"] = "ready";
  VMStatus["Enabled"] = "enabled";
  VMStatus["Running"] = "running";
  VMStatus["Sleeping"] = "sleep";
  VMStatus["Completed"] = "completed";
  VMStatus["Stopped"] = "stopped";
})(VMStatus || (VMStatus = {}));

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

  _proto.evalExpression = function evalExpression(e) {
    var _this3 = this;

    var expr = new vm_expr/* VMExprEvaluator */.W(function (e) {
      return _this3.env.lookup(e);
    }, undefined);
    return expr.eval(e);
  };

  _proto.checkExpression = function checkExpression(e) {
    return this.evalExpression(e) ? true : false;
  };

  _proto.start = function start() {
    if (this.gc.command.callee.type !== "MemberExpression" && (this.inst === "awaitRegister" || this.inst === "awaitChange")) {
      // need to capture register value for awaitChange/awaitRegister
      var args = this.gc.command.arguments;
      this._regSaved = this.evalExpression(args[0]);
      if (this.inst === "awaitChange") this._changeSaved = this.evalExpression(args[1]);
      return true;
    }

    return false;
  };

  _proto.evaluate = /*#__PURE__*/function () {
    var _evaluate = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var _this4 = this;

      var neededStart, args, expr, _values, _expr, event, regValue, _expr2, ev, reg, _this$gc, _expr3, _ev, _expr4, _ev2;

      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (this._started) {
                _context.next = 5;
                break;
              }

              neededStart = this.start();
              this._started = true;

              if (!neededStart) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", VMStatus.Running);

            case 5:
              args = this.gc.command.arguments;

              if (!(this.gc.command.callee.type === "MemberExpression")) {
                _context.next = 12;
                break;
              }

              // interpret as a service command (role.comand)
              expr = new vm_expr/* VMExprEvaluator */.W(function (e) {
                return _this4.env.lookup(e);
              }, undefined);
              _values = this.gc.command.arguments.map(function (a) {
                return expr.eval(a);
              });
              _context.next = 11;
              return this.env.sendCommandAsync(this.gc.command.callee, _values);

            case 11:
              return _context.abrupt("return", VMStatus.Completed);

            case 12:
              _context.t0 = this.inst;
              _context.next = _context.t0 === "branchOnCondition" ? 15 : _context.t0 === "jump" ? 19 : _context.t0 === "label" ? 20 : _context.t0 === "awaitEvent" ? 21 : _context.t0 === "awaitCondition" ? 25 : _context.t0 === "awaitChange" ? 26 : _context.t0 === "awaitRegister" ? 26 : _context.t0 === "writeRegister" ? 30 : _context.t0 === "writeLocal" ? 30 : _context.t0 === "watch" ? 42 : _context.t0 === "halt" ? 46 : _context.t0 === "nop" ? 47 : _context.t0 === "wait" ? 48 : _context.t0 === "onRoleConnected" ? 51 : _context.t0 === "onRoleDisonnected" ? 52 : 53;
              break;

            case 15:
              _expr = this.checkExpression(args[0]);

              if (!_expr) {
                _context.next = 18;
                break;
              }

              throw new VMJumpException(args[1].name);

            case 18:
              return _context.abrupt("return", VMStatus.Completed);

            case 19:
              throw new VMJumpException(args[0].name);

            case 20:
              return _context.abrupt("return", VMStatus.Completed);

            case 21:
              event = args[0];

              if (!this.env.hasEvent(event)) {
                _context.next = 24;
                break;
              }

              return _context.abrupt("return", this.checkExpression(args[1]) ? VMStatus.Completed : VMStatus.Running);

            case 24:
              return _context.abrupt("return", VMStatus.Running);

            case 25:
              return _context.abrupt("return", this.checkExpression(args[0]) ? VMStatus.Completed : VMStatus.Running);

            case 26:
              regValue = this.evalExpression(args[0]);

              if (!(this.inst === "awaitRegister" && regValue !== this._regSaved || this.inst === "awaitChange" && (this._changeSaved === 0 && regValue !== this._regSaved || this._changeSaved < 0 && regValue <= this._regSaved + this._changeSaved || this._changeSaved > 0 && regValue >= this._regSaved + this._changeSaved))) {
                _context.next = 29;
                break;
              }

              return _context.abrupt("return", VMStatus.Completed);

            case 29:
              return _context.abrupt("return", VMStatus.Running);

            case 30:
              _expr2 = new vm_expr/* VMExprEvaluator */.W(function (e) {
                return _this4.env.lookup(e);
              }, undefined);
              ev = _expr2.eval(args[1]);
              this.trace("eval-end", {
                expr: (0,vm_expr/* unparse */.Z)(args[1])
              });
              reg = args[0];

              if (!(this.inst === "writeRegister")) {
                _context.next = 40;
                break;
              }

              _context.next = 37;
              return this.env.writeRegisterAsync(reg, ev);

            case 37:
              this.trace("write-after-wait", {
                reg: (0,vm_expr/* unparse */.Z)(reg),
                expr: ev
              });
              _context.next = 41;
              break;

            case 40:
              this.env.writeLocal(reg, ev);

            case 41:
              return _context.abrupt("return", VMStatus.Completed);

            case 42:
              _expr3 = new vm_expr/* VMExprEvaluator */.W(function (e) {
                return _this4.env.lookup(e);
              }, undefined);
              _ev = _expr3.eval(args[0]);
              this.parent.watch((_this$gc = this.gc) === null || _this$gc === void 0 ? void 0 : _this$gc.sourceId, _ev);
              return _context.abrupt("return", VMStatus.Completed);

            case 46:
              return _context.abrupt("return", VMStatus.Stopped);

            case 47:
              return _context.abrupt("return", VMStatus.Completed);

            case 48:
              _expr4 = new vm_expr/* VMExprEvaluator */.W(function (e) {
                return _this4.env.lookup(e);
              }, undefined);
              _ev2 = _expr4.eval(args[0]);
              throw new VMTimerException(_ev2 * 1000);

            case 51:
              return _context.abrupt("return", VMStatus.Completed);

            case 52:
              return _context.abrupt("return", VMStatus.Completed);

            case 53:
              throw new utils/* VMError */.L1("Unknown instruction " + this.inst);

            case 54:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
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
    this._status = VMStatus.Running;
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

  _proto2.stepAsync = /*#__PURE__*/function () {
    var _stepAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this.status === VMStatus.Running)) {
                _context2.next = 5;
                break;
              }

              this.trace((0,vm_expr/* unparse */.Z)(this.gc.command));
              _context2.next = 4;
              return this._eval.evaluate();

            case 4:
              this.status = _context2.sent;

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
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
    _this5._breakRequested = false;
    _this5._singleStep = false;
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

  _proto3.reset = function reset() {
    this.commandIndex = undefined;
    this.stopped = false;
  };

  _proto3.cancel = function cancel() {
    this.stopped = true;
    this.env.unsubscribe();
  };

  _proto3.requestBreak = function requestBreak() {
    this._breakRequested = true;
  };

  _proto3.resume = function resume() {
    this._singleStep = false;
  };

  _proto3.wake = function wake() {
    if (this._currentCommand) {
      this._currentCommand.status = VMStatus.Completed;
    }
  } // run-to-completion semantics (true if breakpoint)
  ;

  _proto3.runToCompletionAsync =
  /*#__PURE__*/
  function () {
    var _runToCompletionAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3() {
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(this.stopped || !this.handler.commands.length)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return", undefined);

            case 2:
              if (this.commandIndex === undefined) {
                this.commandIndex = 0;
              }

              _context3.next = 5;
              return this.singleStepCheckBreakAsync();

            case 5:
              _context3.t0 = _context3.sent;

              if (_context3.t0) {
                _context3.next = 8;
                break;
              }

              _context3.t0 = this._singleStep;

            case 8:
              if (!_context3.t0) {
                _context3.next = 10;
                break;
              }

              return _context3.abrupt("return", this._currentCommand);

            case 10:
              if (!this.next()) {
                _context3.next = 20;
                break;
              }

              _context3.next = 13;
              return this.singleStepCheckBreakAsync();

            case 13:
              _context3.t1 = _context3.sent;

              if (_context3.t1) {
                _context3.next = 16;
                break;
              }

              _context3.t1 = this._singleStep;

            case 16:
              if (!_context3.t1) {
                _context3.next = 18;
                break;
              }

              return _context3.abrupt("return", this._currentCommand);

            case 18:
              _context3.next = 10;
              break;

            case 20:
              return _context3.abrupt("return", undefined);

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function runToCompletionAsync() {
      return _runToCompletionAsync.apply(this, arguments);
    }

    return runToCompletionAsync;
  }();

  _proto3.next = function next() {
    if (this._currentCommand.status === VMStatus.Completed && this.commandIndex < this.handler.commands.length - 1) {
      this.commandIndex++;
      return true;
    }

    return false;
  };

  _proto3.getCommand = function getCommand() {
    var cmd = this.handler.commands[this._commandIndex];

    if (cmd.type === "ite") {
      throw new utils/* VMError */.L1("ite not compiled away");
    }

    return cmd;
  };

  _proto3.singleStepCheckBreakAsync = /*#__PURE__*/function () {
    var _singleStepCheckBreakAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee4() {
      var _this$_currentCommand;

      var sid;
      return regenerator_default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              this.trace("step begin");
              sid = (_this$_currentCommand = this._currentCommand.gc) === null || _this$_currentCommand === void 0 ? void 0 : _this$_currentCommand.sourceId;
              _context4.next = 4;
              return this.parent.breakpointOnAsync(sid);

            case 4:
              _context4.t0 = _context4.sent;

              if (_context4.t0) {
                _context4.next = 7;
                break;
              }

              _context4.t0 = this._breakRequested;

            case 7:
              if (!_context4.t0) {
                _context4.next = 11;
                break;
              }

              this._singleStep = true;
              this._breakRequested = false;
              return _context4.abrupt("return", true);

            case 11:
              _context4.next = 13;
              return this.singleStepAsync();

            case 13:
              this.trace("step end");
              return _context4.abrupt("return", false);

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function singleStepCheckBreakAsync() {
      return _singleStepCheckBreakAsync.apply(this, arguments);
    }

    return singleStepCheckBreakAsync;
  }();

  _proto3.singleStepAsync = /*#__PURE__*/function () {
    var _singleStepAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee5() {
      var sid, _ref, _label2, index, vmt;

      return regenerator_default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              sid = this._currentCommand.gc.sourceId;
              this.emit(utils/* VM_COMMAND_ATTEMPTED */.Ed, sid);
              _context5.prev = 2;
              _context5.next = 5;
              return this._currentCommand.stepAsync();

            case 5:
              _context5.next = 24;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](2);

              if (!(_context5.t0 instanceof VMJumpException)) {
                _context5.next = 16;
                break;
              }

              _ref = _context5.t0, _label2 = _ref.label;
              index = this._labelToIndex[_label2];
              this.commandIndex = index;
              this._currentCommand.status = VMStatus.Completed;
              _context5.next = 24;
              break;

            case 16:
              if (!(_context5.t0 instanceof VMTimerException)) {
                _context5.next = 23;
                break;
              }

              vmt = _context5.t0;
              this._currentCommand.status = VMStatus.Sleeping;
              _context5.next = 21;
              return this.parent.sleepAsync(this, vmt.ms);

            case 21:
              _context5.next = 24;
              break;

            case 23:
              throw _context5.t0;

            case 24:
              if (this._currentCommand.status === VMStatus.Completed) this.emit(utils/* VM_COMMAND_COMPLETED */.p_, this._currentCommand.gc.sourceId);
              if (this._currentCommand.status === VMStatus.Stopped) this.stopped = true;

            case 26:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[2, 7]]);
    }));

    function singleStepAsync() {
      return _singleStepAsync.apply(this, arguments);
    }

    return singleStepAsync;
  }();

  (0,createClass/* default */.Z)(VMHandlerRunner, [{
    key: "status",
    get: function get() {
      return this.stopped ? VMStatus.Stopped : this._currentCommand === undefined ? VMStatus.Ready : this._currentCommand.status;
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
  if (h.handler.commands.length) {
    var cmd = h.handler.commands[0].command.callee;
    return cmd.name === "wait";
  }

  return false;
}

var VMProgramRunner = /*#__PURE__*/function (_JDClient) {
  (0,inheritsLoose/* default */.Z)(VMProgramRunner, _JDClient);

  // stated accessed concurrently
  function VMProgramRunner(bus, roleManager, program) {
    var _this6;

    _this6 = _JDClient.call(this) || this;
    _this6._handlers = [];
    _this6._running = false;
    _this6._in_run = false;
    _this6._watch = {};
    _this6._roles = [];
    _this6._handlerAtBreak = undefined;
    _this6._waitQueue = [];
    _this6._breaks = {};
    _this6._sleepQueue = [];
    _this6._disabledHandlers = [];
    _this6.bus = bus;
    _this6.roleManager = roleManager;
    _this6.program = program;
    var compiled = (0,compile/* compileProgram */.IJ)(program);

    var _checkProgram = (0,compile/* checkProgram */.i_)(compiled),
        registers = _checkProgram.registers,
        events = _checkProgram.events,
        errors = _checkProgram.errors;

    _this6._roles = compiled.roles;

    if (errors.length) {
      console.warn("ERRORS", errors);
    } // data structures for running program


    _this6._env = new environment/* VMEnvironment */.uH(registers, events);
    _this6._handlers = compiled.handlers.map(function (h, index) {
      return new VMHandlerRunner((0,assertThisInitialized/* default */.Z)(_this6), index, _this6._env, h);
    });
    _this6._waitMutex = new utils/* Mutex */.WU();
    _this6._breaksMutex = new utils/* Mutex */.WU();
    _this6._sleepMutex = new utils/* Mutex */.WU();
    _this6._disabledMutex = new utils/* Mutex */.WU(); // run on any change to environment

    _this6.mount(_this6._env.subscribe(constants/* CHANGE */.Ver, function () {
      _this6.runWithTry();
    }));

    _this6.mount(_this6.subscribe(utils/* VM_WAKE_SLEEPER */.gf, /*#__PURE__*/function () {
      var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee8(h) {
        var result;
        return regenerator_default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return _this6._sleepMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee6() {
                  var index, _id;

                  return regenerator_default().wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          index = _this6._sleepQueue.findIndex(function (p) {
                            return p.handler === h;
                          });

                          if (index >= 0) {
                            _id = _this6._sleepQueue[index].id;

                            _this6._sleepQueue.splice(index);

                            clearTimeout(_id);
                          }

                        case 2:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                })));

              case 3:
                h.wake();
                _context8.next = 6;
                return _this6.runHandler(h);

              case 6:
                result = _context8.sent;

                if (!(result && !isEveryHandler(h))) {
                  _context8.next = 10;
                  break;
                }

                _context8.next = 10;
                return _this6._waitMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee7() {
                  return regenerator_default().wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _this6._waitQueue.push(h);

                        case 1:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                })));

              case 10:
                _context8.next = 15;
                break;

              case 12:
                _context8.prev = 12;
                _context8.t0 = _context8["catch"](0);
                console.debug(_context8.t0);

              case 15:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()));

    _this6.initializeRoleManagement();

    return _this6;
  } // debugging


  var _proto4 = VMProgramRunner.prototype;

  _proto4.trace = function trace(message, context) {
    if (context === void 0) {
      context = {};
    }

    this.emit(constants/* TRACE */.jes, {
      message: message,
      context: context
    });
  } // watch statement - watch an expression
  ;

  _proto4.watch = function watch(sourceId, value) {
    var oldValue = this._watch[sourceId];

    if (oldValue !== value) {
      this._watch[sourceId] = value;
      this.emit(utils/* VM_WATCH_CHANGE */.UM, sourceId);
    }
  };

  _proto4.lookupWatch = function lookupWatch(sourceId) {
    return this._watch[sourceId];
  } // breakpoints
  ;

  _proto4.setBreakpointsAsync =
  /*#__PURE__*/
  function () {
    var _setBreakpointsAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee10(breaks) {
      var _this7 = this;

      return regenerator_default().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this._breaksMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee9() {
                return regenerator_default().wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        _this7._breaks = {};
                        breaks.forEach(function (b) {
                          _this7._breaks[b] = true;
                        });

                      case 2:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9);
              })));

            case 2:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function setBreakpointsAsync(_x2) {
      return _setBreakpointsAsync.apply(this, arguments);
    }

    return setBreakpointsAsync;
  }();

  _proto4.clearBreakpointsAsync = /*#__PURE__*/function () {
    var _clearBreakpointsAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee12() {
      var _this8 = this;

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
                        _this8._breaks = {};

                      case 1:
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

    function clearBreakpointsAsync() {
      return _clearBreakpointsAsync.apply(this, arguments);
    }

    return clearBreakpointsAsync;
  }();

  _proto4.breakpointOnAsync = /*#__PURE__*/function () {
    var _breakpointOnAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee14(id) {
      var _this9 = this;

      var ret;
      return regenerator_default().wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              ret = false;
              _context14.next = 3;
              return this._breaksMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee13() {
                var _this9$_breaks;

                return regenerator_default().wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        ret = !!((_this9$_breaks = _this9._breaks) !== null && _this9$_breaks !== void 0 && _this9$_breaks[id]);

                      case 1:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13);
              })));

            case 3:
              return _context14.abrupt("return", ret);

            case 4:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function breakpointOnAsync(_x3) {
      return _breakpointOnAsync.apply(this, arguments);
    }

    return breakpointOnAsync;
  }() // timers
  ;

  _proto4.sleepAsync =
  /*#__PURE__*/
  function () {
    var _sleepAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee16(handler, ms) {
      var _this10 = this;

      return regenerator_default().wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.next = 2;
              return this._sleepMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee15() {
                var id;
                return regenerator_default().wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        id = setTimeout(function () {
                          _this10.emit(utils/* VM_WAKE_SLEEPER */.gf, handler);
                        }, ms);

                        _this10._sleepQueue.push({
                          handler: handler,
                          id: id
                        });

                      case 2:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15);
              })));

            case 2:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, this);
    }));

    function sleepAsync(_x4, _x5) {
      return _sleepAsync.apply(this, arguments);
    }

    return sleepAsync;
  }() // control of VM
  ;

  _proto4.startAsync = /*#__PURE__*/function () {
    var _startAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee19() {
      var _this11 = this;

      return regenerator_default().wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              if (!this._running) {
                _context19.next = 2;
                break;
              }

              return _context19.abrupt("return");

            case 2:
              // already running
              this.trace("start");
              _context19.prev = 3;
              this.roleManager.setRoles(this._roles);
              this._running = true;
              this._in_run = false;
              _context19.next = 9;
              return this._waitMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee17() {
                return regenerator_default().wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        _this11._waitQueue = _this11._handlers.slice(0);

                        _this11._waitQueue.forEach(function (h) {
                          return h.reset();
                        });

                      case 2:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17);
              })));

            case 9:
              _context19.next = 11;
              return this._disabledMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee18() {
                return regenerator_default().wrap(function _callee18$(_context18) {
                  while (1) {
                    switch (_context18.prev = _context18.next) {
                      case 0:
                        _this11._disabledHandlers = [];

                      case 1:
                      case "end":
                        return _context18.stop();
                    }
                  }
                }, _callee18);
              })));

            case 11:
              this.run();
              _context19.next = 18;
              break;

            case 14:
              _context19.prev = 14;
              _context19.t0 = _context19["catch"](3);
              console.debug(_context19.t0);
              this.emit(constants/* ERROR */.pnR, _context19.t0);

            case 18:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19, this, [[3, 14]]);
    }));

    function startAsync() {
      return _startAsync.apply(this, arguments);
    }

    return startAsync;
  }();

  _proto4.cancel = function cancel() {
    if (!this._running) return; // nothing to cancel

    this._running = false;
    this.emit(constants/* CHANGE */.Ver);
    this.trace("cancelled");
  };

  _proto4.resumeAsync = /*#__PURE__*/function () {
    var _resumeAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee21() {
      var _this12 = this;

      return regenerator_default().wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              if (this._running) {
                _context21.next = 2;
                break;
              }

              return _context21.abrupt("return");

            case 2:
              this.trace("resume");
              this._handlerAtBreak = undefined;
              _context21.next = 6;
              return this._waitMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee20() {
                return regenerator_default().wrap(function _callee20$(_context20) {
                  while (1) {
                    switch (_context20.prev = _context20.next) {
                      case 0:
                        _this12._waitQueue.forEach(function (h) {
                          return h.resume();
                        });

                      case 1:
                      case "end":
                        return _context20.stop();
                    }
                  }
                }, _callee20);
              })));

            case 6:
              this.runWithTry();

            case 7:
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

  _proto4.step = function step() {
    if (!this._running || !this._handlerAtBreak) return;
    this.trace("step");
    this.runWithTry();
  };

  _proto4.runWithTry = function runWithTry() {
    try {
      this.run();
    } catch (e) {
      console.debug(e);
      this.emit(constants/* ERROR */.pnR, e);
    }
  };

  _proto4.runHandler = /*#__PURE__*/function () {
    var _runHandler = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee23(h) {
      var _this13 = this;

      var brkCommand, _brkCommand$gc;

      return regenerator_default().wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              if (this._running) {
                _context23.next = 2;
                break;
              }

              return _context23.abrupt("return", false);

            case 2:
              _context23.prev = 2;

              if (!(!this._handlerAtBreak || this._handlerAtBreak === h)) {
                _context23.next = 16;
                break;
              }

              _context23.next = 6;
              return h.runToCompletionAsync();

            case 6:
              brkCommand = _context23.sent;

              if (brkCommand) {
                this._handlerAtBreak = h;
                this.emit(utils/* VM_BREAKPOINT */.Di, h, (_brkCommand$gc = brkCommand.gc) === null || _brkCommand$gc === void 0 ? void 0 : _brkCommand$gc.sourceId);
              }

              if (!(h.status !== VMStatus.Stopped)) {
                _context23.next = 13;
                break;
              }

              if (h.status === VMStatus.Completed) {
                h.reset();

                if (isEveryHandler(h)) {
                  this.sleepAsync(h, 1);
                }
              }

              return _context23.abrupt("return", h.status !== VMStatus.Sleeping);

            case 13:
              return _context23.abrupt("return", false);

            case 14:
              _context23.next = 17;
              break;

            case 16:
              return _context23.abrupt("return", true);

            case 17:
              _context23.next = 24;
              break;

            case 19:
              _context23.prev = 19;
              _context23.t0 = _context23["catch"](2);

              if (this.handlerEnabled(h)) {
                _context23.next = 24;
                break;
              }

              _context23.next = 24;
              return this._disabledMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee22() {
                return regenerator_default().wrap(function _callee22$(_context22) {
                  while (1) {
                    switch (_context22.prev = _context22.next) {
                      case 0:
                        _this13._disabledHandlers.push(h);

                      case 1:
                      case "end":
                        return _context22.stop();
                    }
                  }
                }, _callee22);
              })));

            case 24:
            case "end":
              return _context23.stop();
          }
        }
      }, _callee23, this, [[2, 19]]);
    }));

    function runHandler(_x6) {
      return _runHandler.apply(this, arguments);
    }

    return runHandler;
  }();

  _proto4.handlerEnabled = function handlerEnabled(h) {
    var _this14 = this;

    return h.handler.roles.every(function (role) {
      return _this14.roleManager.boundRoles.find(function (binding) {
        return binding.role === role;
      });
    });
  };

  _proto4.run = /*#__PURE__*/function () {
    var _run = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee26() {
      var _this15 = this;

      var waitCopy, nextTime, _iterator, _step, h, result;

      return regenerator_default().wrap(function _callee26$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              if (this._running) {
                _context26.next = 2;
                break;
              }

              return _context26.abrupt("return");

            case 2:
              if (!this._in_run) {
                _context26.next = 4;
                break;
              }

              return _context26.abrupt("return");

            case 4:
              this.trace("run");
              this._in_run = true;
              _context26.prev = 6;
              _context26.next = 9;
              return this._env.refreshRegistersAsync();

            case 9:
              waitCopy = [];
              _context26.next = 12;
              return this._waitMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee24() {
                return regenerator_default().wrap(function _callee24$(_context24) {
                  while (1) {
                    switch (_context24.prev = _context24.next) {
                      case 0:
                        waitCopy = _this15._waitQueue.slice();
                        _this15._waitQueue = [];

                      case 2:
                      case "end":
                        return _context24.stop();
                    }
                  }
                }, _callee24);
              })));

            case 12:
              if (!(waitCopy.length > 0)) {
                _context26.next = 28;
                break;
              }

              nextTime = [];
              _iterator = _createForOfIteratorHelperLoose(waitCopy);

            case 15:
              if ((_step = _iterator()).done) {
                _context26.next = 23;
                break;
              }

              h = _step.value;
              _context26.next = 19;
              return this.runHandler(h);

            case 19:
              result = _context26.sent;
              if (result) nextTime.push(h);

            case 21:
              _context26.next = 15;
              break;

            case 23:
              _context26.next = 25;
              return this._waitMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee25() {
                return regenerator_default().wrap(function _callee25$(_context25) {
                  while (1) {
                    switch (_context25.prev = _context25.next) {
                      case 0:
                        nextTime.forEach(function (h) {
                          return _this15._waitQueue.push(h);
                        });

                      case 1:
                      case "end":
                        return _context25.stop();
                    }
                  }
                }, _callee25);
              })));

            case 25:
              this._env.consumeEvent();

              _context26.next = 29;
              break;

            case 28:
              this.emit(constants/* CHANGE */.Ver);

            case 29:
              _context26.next = 35;
              break;

            case 31:
              _context26.prev = 31;
              _context26.t0 = _context26["catch"](6);
              console.debug(_context26.t0);
              this.emit(constants/* ERROR */.pnR, _context26.t0);

            case 35:
              this._in_run = false;
              this.trace("run end");

            case 37:
            case "end":
              return _context26.stop();
          }
        }
      }, _callee26, this, [[6, 31]]);
    }));

    function run() {
      return _run.apply(this, arguments);
    }

    return run;
  }();

  _proto4.initializeRoleManagement = function initializeRoleManagement() {
    var _this16 = this;

    // adding a (role,service) binding
    var addRoleService = function addRoleService(role) {
      var service = _this16.roleManager.getService(role);

      if (service) {
        _this16._env.serviceChanged(role, service);
      }
    }; // initialize


    this.roleManager.roles.forEach(function (r) {
      if (_this16._roles.find(function (rv) {
        return rv.role === r.role;
      })) {
        addRoleService(r.role);
      }
    });
    this.mount(this.roleManager.subscribe(constants/* ROLE_BOUND */.l9m, /*#__PURE__*/function () {
      var _ref15 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee29(role) {
        return regenerator_default().wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                addRoleService(role);
                _context29.next = 3;
                return _this16._disabledMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee28() {
                  var enabled;
                  return regenerator_default().wrap(function _callee28$(_context28) {
                    while (1) {
                      switch (_context28.prev = _context28.next) {
                        case 0:
                          enabled = _this16._disabledHandlers.filter(function (h) {
                            return _this16.handlerEnabled(h);
                          });

                          if (!enabled.length) {
                            _context28.next = 5;
                            break;
                          }

                          _context28.next = 4;
                          return _this16._waitMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee27() {
                            return regenerator_default().wrap(function _callee27$(_context27) {
                              while (1) {
                                switch (_context27.prev = _context27.next) {
                                  case 0:
                                    enabled.forEach(function (h) {
                                      _this16._waitQueue.push(h);
                                    });

                                  case 1:
                                  case "end":
                                    return _context27.stop();
                                }
                              }
                            }, _callee27);
                          })));

                        case 4:
                          _this16._disabledHandlers = _this16._disabledHandlers.filter(function (h) {
                            return enabled.indexOf(h) === -1;
                          });

                        case 5:
                        case "end":
                          return _context28.stop();
                      }
                    }
                  }, _callee28);
                })));

              case 3:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29);
      }));

      return function (_x7) {
        return _ref15.apply(this, arguments);
      };
    }()));
    this.mount(this.roleManager.subscribe(constants/* ROLE_UNBOUND */.CCp, function (role) {
      _this16._env.serviceChanged(role, undefined); // TODO: some handlers may become disabled.

    }));
  };

  (0,createClass/* default */.Z)(VMProgramRunner, [{
    key: "status",
    get: function get() {
      var waitLen = this._waitQueue.length;
      var sleepLen = this._sleepQueue.length;
      var disabledLen = this._disabledHandlers.length;
      return this._running === false ? VMStatus.Stopped : waitLen + sleepLen + disabledLen > 0 ? VMStatus.Running : VMStatus.Completed;
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
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
;// CONCATENATED MODULE: ./jacdac-ts/src/servers/rolemanager.ts





function rolemanager_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function rolemanager_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { rolemanager_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { rolemanager_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function rolemanager_createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = rolemanager_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function rolemanager_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return rolemanager_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rolemanager_arrayLikeToArray(o, minLen); }

function rolemanager_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





// TODO: replicate MakeCode role manager logic
var RoleManager = /*#__PURE__*/function (_JDEventSource) {
  (0,inheritsLoose/* default */.Z)(RoleManager, _JDEventSource);

  function RoleManager(bus) {
    var _this;

    _this = _JDEventSource.call(this) || this;
    _this._roles = [];
    _this.bus = bus;

    _this.bus.on(constants/* DEVICE_ANNOUNCE */.Hob, _this.addServices.bind((0,assertThisInitialized/* default */.Z)(_this)));

    _this.bus.on(constants/* DEVICE_DISCONNECT */.O55, _this.removeServices.bind((0,assertThisInitialized/* default */.Z)(_this)));

    _this.bus.devices({
      ignoreSelf: true,
      announced: true
    }).forEach(function (dev) {
      return _this.addServices(dev);
    });

    _this.on(constants/* ROLE_UNBOUND */.CCp, function (role) {
      return console.log("role unbound", {
        role: role
      });
    });

    _this.on(constants/* ROLE_BOUND */.l9m, function (role) {
      return console.log("role bound", {
        role: role
      });
    });

    return _this;
  }

  var _proto = RoleManager.prototype;

  _proto.setRoles = function setRoles(newRoles) {
    var _this2 = this;

    var changed = false; // remove unknown roles

    var supportedNewRoles = newRoles.filter(function (_ref) {
      var serviceShortId = _ref.serviceShortId;
      return (0,spec/* serviceSpecificationFromName */.kB)(serviceShortId);
    }); // unbind removed roles

    var i = 0;

    var _loop = function _loop() {
      var role = _this2._roles[i];

      if (!supportedNewRoles.find(function (r) {
        return r.role === role.role;
      })) {
        changed = true;

        _this2._roles.splice(i, 1);

        _this2.emit(constants/* ROLE_UNBOUND */.CCp, role.role);
      } else {
        i++;
      }
    };

    while (i < this._roles.length) {
      _loop();
    } // update or add roles


    var _loop2 = function _loop2() {
      var newRole = _step.value;

      var existingRole = _this2._roles.find(function (r) {
        return r.role === newRole.role;
      });

      if (!existingRole) {
        // added role
        changed = true;

        _this2._roles.push(rolemanager_objectSpread({}, newRole));
      } else if (existingRole.serviceShortId !== newRole.serviceShortId) {
        // modified type, force rebinding
        changed = true;
        existingRole.serviceShortId = newRole.serviceShortId;

        if (existingRole.service) {
          existingRole.service = undefined;

          _this2.emit(constants/* ROLE_UNBOUND */.CCp, existingRole.role);
        }
      } // else unmodifed role

    };

    for (var _iterator = rolemanager_createForOfIteratorHelperLoose(supportedNewRoles), _step; !(_step = _iterator()).done;) {
      _loop2();
    } // emit change as needed


    if (changed) this.emit(constants/* CHANGE */.Ver); // bound services

    this.bindServices();
  };

  _proto.bindServices = function bindServices() {
    var _this3 = this;

    var changed = false;
    this.unboundRoles.forEach(function (binding) {
      var boundRoles = _this3.boundRoles;

      var service = _this3.bus.services({
        ignoreSelf: true,
        serviceName: binding.serviceShortId
      }).find(function (srv) {
        return !boundRoles.find(function (b) {
          return b.service === srv;
        });
      });

      binding.service = service;

      _this3.emit(constants/* ROLE_BOUND */.l9m, binding.role);

      changed = true;
    });
    if (changed) this.emit(constants/* CHANGE */.Ver);
  };

  _proto.addServices = function addServices(dev) {
    if (dev === this.bus.selfDevice) return;
    this.bindServices();
  };

  _proto.removeServices = function removeServices(dev) {
    var _this4 = this;

    var changed = false;

    this._roles.filter(function (r) {
      var _r$service;

      return ((_r$service = r.service) === null || _r$service === void 0 ? void 0 : _r$service.device) === dev;
    }).forEach(function (r) {
      r.service = undefined;

      _this4.emit(constants/* ROLE_UNBOUND */.CCp, r.role);

      changed = true;
    });

    if (changed) this.emit(constants/* CHANGE */.Ver);
  };

  _proto.getService = function getService(role) {
    var _this$_roles$find;

    return (_this$_roles$find = this._roles.find(function (r) {
      return r.role === role;
    })) === null || _this$_roles$find === void 0 ? void 0 : _this$_roles$find.service;
  };

  _proto.addRoleService = function addRoleService(role, serviceShortId) {
    var _this5 = this;

    if (!(0,spec/* serviceSpecificationFromName */.kB)(serviceShortId)) return; // unknown role type

    var binding = this._roles.find(function (r) {
      return r.role === role;
    }); // check if we already have this role


    if (binding && serviceShortId === binding.serviceShortId) return; // new role

    binding = {
      role: role,
      serviceShortId: serviceShortId
    };

    this._roles.push(binding);

    var ret = this.bus.services({
      ignoreSelf: true,
      serviceName: serviceShortId
    }).find(function (s) {
      return !_this5._roles.find(function (r) {
        return r.service === s;
      });
    });

    if (ret) {
      binding.service = ret;
      this.emit(constants/* ROLE_BOUND */.l9m, role);
    } else {
      this.emit(constants/* ROLE_UNBOUND */.CCp, role);
    }

    this.emit(constants/* CHANGE */.Ver);
  };

  (0,createClass/* default */.Z)(RoleManager, [{
    key: "roles",
    get: function get() {
      return this._roles.slice(0);
    }
  }, {
    key: "boundRoles",
    get: function get() {
      return this._roles.filter(function (r) {
        return !!r.service;
      });
    }
  }, {
    key: "unboundRoles",
    get: function get() {
      return this._roles.filter(function (r) {
        return !r.service;
      });
    }
  }]);

  return RoleManager;
}(eventsource/* JDEventSource */.a);


;// CONCATENATED MODULE: ./src/components/vm/useRoleManager.ts



function useRoleManager() {
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var roleManager = (0,react.useMemo)(function () {
    return new RoleManager(bus);
  }, []);
  return roleManager;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./src/components/CodeBlock.tsx + 4 modules
var CodeBlock = __webpack_require__(50274);
;// CONCATENATED MODULE: ./src/components/vm/VMDiagnostics.tsx



function VMDiagnostics(props) {
  var program = props.program,
      source = props.source,
      xml = props.xml;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "subtitle1"
  }, "VM"), /*#__PURE__*/react.createElement(CodeBlock.default, {
    className: "json",
    downloadName: "test.json.vm",
    downloadText: JSON.stringify(program, null, 2)
  }, JSON.stringify(program, null, 2))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "subtitle1"
  }, "Blockly JSON"), /*#__PURE__*/react.createElement(CodeBlock.default, {
    className: "json",
    downloadName: "test.json",
    downloadText: JSON.stringify(source, null, 2)
  }, JSON.stringify(source, null, 2))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "subtitle1"
  }, "Blockly XML"), /*#__PURE__*/react.createElement(CodeBlock.default, {
    className: "xml"
  }, xml)));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(14685);
// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 3 modules
var DeviceAvatar = __webpack_require__(4726);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 23 modules
var servers = __webpack_require__(37801);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/vm/toolbox.ts
var toolbox = __webpack_require__(20055);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(49013);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Cancel.js
var Cancel = __webpack_require__(30263);
;// CONCATENATED MODULE: ./src/components/vm/VMRoles.tsx

 // tslint:disable-next-line: match-default-export-name no-submodule-imports










function RoleChip(props) {
  var role = props.role,
      service = props.service,
      serviceShortId = props.serviceShortId,
      workspace = props.workspace;

  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

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

        return b.type === toolbox/* TWIN_BLOCK */.Zt && ((_b$inputList$0$fieldR = b.inputList[0].fieldRow.find(function (f) {
          return f.name === "role";
        })) === null || _b$inputList$0$fieldR === void 0 ? void 0 : (_b$inputList$0$fieldR2 = _b$inputList$0$fieldR.getVariable()) === null || _b$inputList$0$fieldR2 === void 0 ? void 0 : _b$inputList$0$fieldR2.name) === role;
      });

      if (!twinBlock) {
        twinBlock = workspace.newBlock(toolbox/* TWIN_BLOCK */.Zt);
        var variable = workspace.getVariable(role, serviceShortId);
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

function VMRoles(props) {
  var roleManager = props.roleManager,
      workspace = props.workspace;
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
      serviceShortId: serviceShortId,
      workspace: workspace
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
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var jdom_utils = __webpack_require__(81794);
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














function useWorkspaceBreakpoints(program, workspace) {
  var breakpoints = (0,react.useMemo)(function () {
    var _arrayConcatMany, _program$handlers;

    return ((_arrayConcatMany = (0,jdom_utils/* arrayConcatMany */.ue)(program === null || program === void 0 ? void 0 : (_program$handlers = program.handlers) === null || _program$handlers === void 0 ? void 0 : _program$handlers.map(function (h) {
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
      cancel = props.cancel,
      workspace = props.workspace;
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

  var _useWorkspaceBreakpoi = useWorkspaceBreakpoints(program, workspace),
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
              setBreakpoint(undefined);
              _context2.next = 5;
              return cancel();

            case 5:
              _context2.prev = 5;
              if (mounted()) setIndeterminate(false);
              return _context2.finish(5);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0,, 5, 8]]);
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
    return runner.step();
  }; // register breakpoint handler


  (0,react.useEffect)(function () {
    return runner === null || runner === void 0 ? void 0 : runner.subscribe(utils/* VM_BREAKPOINT */.Di, function (_, sourceId) {
      console.log("breakpoint", {
        sourceId: sourceId,
        mounted: mounted()
      });
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
// EXTERNAL MODULE: ./src/components/ImportButton.tsx + 9 modules
var ImportButton = __webpack_require__(94934);
// EXTERNAL MODULE: ./node_modules/blockly/index.js
var blockly = __webpack_require__(74640);
;// CONCATENATED MODULE: ./src/components/vm/VMFileButtons.tsx










function VMLoadButton(props) {
  var workspace = props.workspace;

  var _useContext = (0,react.useContext)(AppContext/* default */.ZP),
      setError = _useContext.setError;

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

function VMSaveButton(props) {
  var xml = props.xml,
      program = props.program; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var json = {
    xml: xml,
    program: program
  };
  var url = "data:application/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(json));
  return /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    download: "jacdac-blocks.json",
    href: url
  }, /*#__PURE__*/react.createElement(Tooltip/* default */.ZP, {
    title: "Save"
  }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.IconButton, null, /*#__PURE__*/react.createElement(Save/* default */.Z, null))));
}

function VMFileButtons(props) {
  var xml = props.xml,
      program = props.program,
      workspace = props.workspace;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(VMSaveButton, {
    xml: xml,
    program: program
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(VMLoadButton, {
    workspace: workspace
  })));
}
// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__(53074);
;// CONCATENATED MODULE: ./src/components/vm/VMToolbar.tsx








function VMToolbar(props) {
  var roleManager = props.roleManager,
      runner = props.runner,
      run = props.run,
      cancel = props.cancel,
      xml = props.xml,
      program = props.program,
      workspace = props.workspace;
  var roles = (0,useChange/* default */.Z)(roleManager, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.roles;
  });
  var devices = (0,useDevices/* default */.Z)({
    ignoreSelf: true
  });
  var noRoles = !(roles !== null && roles !== void 0 && roles.length) && !(devices !== null && devices !== void 0 && devices.length);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "row",
    spacing: 1,
    alignItems: "center",
    alignContent: "center"
  }, /*#__PURE__*/react.createElement(VMFileButtons, {
    xml: xml,
    program: program,
    workspace: workspace
  }), /*#__PURE__*/react.createElement(VMRunnerButtons, {
    runner: runner,
    run: run,
    cancel: cancel,
    workspace: workspace
  }), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(VMStartSimulatorButton, null)), /*#__PURE__*/react.createElement(VMRoles, {
    roleManager: roleManager,
    workspace: workspace
  }));
}
// EXTERNAL MODULE: ./src/components/vm/dsl/DslContext.tsx + 8 modules
var DslContext = __webpack_require__(62091);
;// CONCATENATED MODULE: ./src/components/vm/VMEditor.tsx










var VM_SOURCE_STORAGE_KEY = "jacdac:tools:vmeditor";
function VMEditor(props) {
  var storageKey = props.storageKey;
  var workspaceRef = (0,react.useRef)();

  var _useLocalStorage = (0,useLocalStorage/* default */.Z)(storageKey || VM_SOURCE_STORAGE_KEY, ""),
      xml = _useLocalStorage[0],
      setXml = _useLocalStorage[1];

  var _useState = (0,react.useState)(),
      source = _useState[0],
      setSource = _useState[1];

  var _useState2 = (0,react.useState)(),
      program = _useState2[0],
      setProgram = _useState2[1];

  var roleManager = useRoleManager();
  var autoStart = true;

  var _useVMRunner = useVMRunner(roleManager, program, autoStart),
      runner = _useVMRunner.runner,
      run = _useVMRunner.run,
      cancel = _useVMRunner.cancel;

  var handleXml = function handleXml(xml) {
    return setXml(xml);
  };

  var handleJSON = function handleJSON(json) {
    return setSource(json);
  };

  var handleI4Program = function handleI4Program(json) {
    if (json) roleManager.setRoles(json.roles);
    setProgram(json);
  };

  return /*#__PURE__*/react.createElement(DslContext/* DslProvider */.K, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(VMToolbar, {
    roleManager: roleManager,
    runner: runner,
    run: run,
    cancel: cancel,
    xml: xml,
    program: program,
    workspace: workspaceRef.current
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(NoSsr/* default */.Z, null, /*#__PURE__*/react.createElement(VMBlockEditor/* default */.Z, {
    initialXml: xml,
    onXmlChange: handleXml,
    onJSONChange: handleJSON,
    onVMProgramChange: handleI4Program,
    runner: runner,
    roleManager: roleManager,
    workspaceRef: workspaceRef
  }))), flags/* default.diagnostics */.Z.diagnostics && /*#__PURE__*/react.createElement(VMDiagnostics, {
    program: program,
    source: source,
    xml: xml
  })));
}
;// CONCATENATED MODULE: ./src/pages/tools/vm-editor.tsx


function Page() {
  return /*#__PURE__*/react.createElement(VMEditor, null);
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-vm-editor-tsx-9428157c47e17fa2e800.js.map