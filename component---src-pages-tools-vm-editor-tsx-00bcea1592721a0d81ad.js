(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1762,274,119],{

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

/***/ 88880:
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports.Z = _default;

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

/***/ 52377:
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
  d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
}), 'GetApp');

exports.Z = _default;

/***/ }),

/***/ 58504:
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
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
}), 'Launch');

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

/***/ 51223:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);
var create = __webpack_require__(70030);
var definePropertyModule = __webpack_require__(3070);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 65417:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(70111);
var isArray = __webpack_require__(43157);
var wellKnownSymbol = __webpack_require__(5112);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ 6790:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(43157);
var toLength = __webpack_require__(17466);
var bind = __webpack_require__(49974);

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ 49974:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aFunction = __webpack_require__(13099);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 60490:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(35005);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 43157:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(84326);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ 70030:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(19670);
var defineProperties = __webpack_require__(36048);
var enumBugKeys = __webpack_require__(80748);
var hiddenKeys = __webpack_require__(3501);
var html = __webpack_require__(60490);
var documentCreateElement = __webpack_require__(80317);
var sharedKey = __webpack_require__(6200);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ 36048:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(19781);
var definePropertyModule = __webpack_require__(3070);
var anObject = __webpack_require__(19670);
var objectKeys = __webpack_require__(81956);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ 81956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(16324);
var enumBugKeys = __webpack_require__(80748);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 47908:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(84488);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 86535:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(82109);
var flattenIntoArray = __webpack_require__(6790);
var toObject = __webpack_require__(47908);
var toLength = __webpack_require__(17466);
var aFunction = __webpack_require__(13099);
var arraySpeciesCreate = __webpack_require__(65417);

// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A;
    aFunction(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});


/***/ }),

/***/ 99244:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(51223);

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flatMap');


/***/ }),

/***/ 2864:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LM": function() { return /* binding */ DTDL_CONTEXT; },
/* harmony export */   "Jg": function() { return /* binding */ escapeName; },
/* harmony export */   "d0": function() { return /* binding */ DTDLUnits; }
/* harmony export */ });
/* unused harmony exports DTDL_REFERENCE_URL, DTDL_NAME, objectSchema, arraySchema, escapeDisplayName */
/***
 *  DTDL specification: https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md.
 */
var DTDL_REFERENCE_URL = "https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md";
var DTDL_NAME = "Digital Twins Definition Language";
var DTDL_CONTEXT = "dtmi:dtdl:context;2"; // warps fields into an object

function objectSchema(schemas) {
  return {
    "@type": "Object",
    fields: schemas
  };
} // wraps a schema into an array

function arraySchema(schema) {
  return {
    "@type": "Array",
    elementSchema: schema
  };
}
function escapeName(name) {
  name = name.trim().replace(/[^a-zA-Z0-9_]/g, "_");
  if (!/^[a-zA-Z]/.test(name)) name = "a" + name;
  name = name[0].toLowerCase() + name.slice(1);
  return name.slice(0, 64);
}
function escapeDisplayName(name) {
  return name.slice(0, 64);
}
function DTDLUnits() {
  return ["metrePerSecondSquared", "centimetrePerSecondSquared", "gForce", "radian", "degreeOfArc", "minuteOfArc", "secondOfArc", "turn", "radianPerSecondSquared", "radianPerSecond", "degreePerSecond", "revolutionPerSecond", "revolutionPerMinute", "squareMetre", "squareCentimetre", "squareMillimetre", "squareKilometre", "hectare", "squareFoot", "squareInch", "acre", "farad", "millifarad", "microfarad", "nanofarad", "picofarad", "ampere", "microampere", "milliampere", "bitPerSecond", "kibibitPerSecond", "mebibitPerSecond", "gibibitPerSecond", "tebibitPerSecond", "exbibitPerSecond", "zebibitPerSecond", "yobibitPerSecond", "bytePerSecond", "kibibytePerSecond", "mebibytePerSecond", "gibibytePerSecond", "tebibytePerSecond", "exbibytePerSecond", "zebibytePerSecond", "yobibytePerSecond", "bit", "kibibit", "mebibit", "gibibit", "tebibit", "exbibit", "zebibit", "yobibit", "byte", "kibibyte", "mebibyte", "gibibyte", "tebibyte", "exbibyte", "zebibyte", "yobibyte", "kilogramPerCubicMetre", "gramPerCubicMetre", "metre", "centimetre", "millimetre", "micrometre", "nanometre", "kilometre", "foot", "inch", "mile", "nauticalMile", "astronomicalUnit", "coulomb", "joule", "kilojoule", "megajoule", "gigajoule", "electronvolt", "megaelectronvolt", "kilowattHour", "newton", "pound", "ounce", "ton", "hertz", "kilohertz", "megahertz", "gigahertz", "kilogramPerCubicMetre", "gramPerCubicMetre", "lux", "footcandle", "henry", "millihenry", "microhenry", "radian", "degreeOfArc", "minuteOfArc", "secondOfArc", "turn", "radian", "degreeOfArc", "minuteOfArc", "secondOfArc", "turn", "metre", "centimetre", "millimetre", "micrometre", "nanometre", "kilometre", "foot", "inch", "mile", "nauticalMile", "astronomicalUnit", "candelaPerSquareMetre", "watt", "microwatt", "milliwatt", "kilowatt", "megawatt", "gigawatt", "horsepower", "kilowattHourPerYear", "lumen", "candela", "weber", "maxwell", "tesla", "kilogram", "gram", "milligram", "microgram", "tonne", "slug", "gramPerSecond", "kilogramPerSecond", "gramPerHour", "kilogramPerHour", "watt", "microwatt", "milliwatt", "kilowatt", "megawatt", "gigawatt", "horsepower", "kilowattHourPerYear", "pascal", "kilopascal", "bar", "millibar", "millimetresOfMercury", "poundPerSquareInch", "inchesOfMercury", "inchesOfWater", "unity percent", "ohm", "milliohm", "kiloohm", "megaohm", "decibel", "bel", "kelvin", "degreeCelsius", "degreeFahrenheit", "newton", "pound", "ounce", "ton", "second", "millisecond", "microsecond", "nanosecond", "minute", "hour", "day", "year", "newtonMetre", "metrePerSecond", "centimetrePerSecond", "kilometrePerSecond", "metrePerHour", "kilometrePerHour", "milePerHour", "milePerSecond", "knot", "volt", "millivolt", "microvolt", "kilovolt", "megavolt", "cubicMetre", "cubicCentimetre", "litre", "millilitre", "cubicFoot", "cubicInch", "fluidOunce", "gallon", "litrePerSecond", "millilitrePerSecond", "litrePerHour", "millilitrePerHour"].sort();
}

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

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(75167);
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


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

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

/***/ 66775:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": function() { return /* binding */ createToneContext; }
/* harmony export */ });
var VOLUME_GAIN = 0.4;
function createToneContext(defaultVolume) {
  try {
    console.log("create tone context");
    var ctx = new (window.AudioContext || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.webkitAudioContext)(); // play silence sound within onlick to unlock it

    var buffer = ctx.createBuffer(1, 1, 22050);
    var source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.start(); // output node with volume

    var volume = ctx.createGain();
    volume.connect(ctx.destination);
    volume.gain.value = (defaultVolume !== undefined ? defaultVolume : 0.2) * VOLUME_GAIN;

    var setVolume = function setVolume(v) {
      if (volume && !isNaN(v)) {
        volume.gain.value = v * VOLUME_GAIN;
      }
    };

    var playTone = function playTone(frequency, duration) {
      try {
        var tone = ctx.createOscillator();
        tone.type = "sawtooth";
        tone.connect(volume);
        tone.frequency.value = frequency; // update frequency

        tone.start(); // start and stop

        tone.stop(ctx.currentTime + duration / 1000);
      } catch (e) {
        console.debug(e);
      }
    };

    var close = function close() {
      try {
        if (ctx.state === "running") ctx.close();
      } catch (e) {
        console.warn(e);
      }
    };

    console.log("tone context created");
    return {
      setVolume: setVolume,
      playTone: playTone,
      close: close
    };
  } catch (e) {
    return undefined;
  }
}

/***/ }),

/***/ 2928:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServices; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54774);



function useServices(options) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z),
      bus = _useContext.bus;

  var services = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(bus, function (b) {
    return b.services(options);
  }, [JSON.stringify(options)]);
  return services;
}

/***/ }),

/***/ 79739:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ PaperBox; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12265);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59355);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8266);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58063);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

var _excluded = ["children", "padding", "elevation", "bgcolor"];


function PaperBox(props) {
  var children = props.children,
      padding = props.padding,
      elevation = props.elevation,
      bgcolor = props.bgcolor,
      others = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, _excluded);

  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, Object.assign({}, others, {
    bgcolor: bgcolor,
    mb: theme.spacing(0.25)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    square: true,
    elevation: elevation
  }, padding !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    p: theme.spacing(padding || 0.25)
  }, children), padding === 0 && children));
}

/***/ }),

/***/ 48664:
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
// EXTERNAL MODULE: ./node_modules/react-blockly/dist/index.js
var dist = __webpack_require__(691);
// EXTERNAL MODULE: ./node_modules/@blockly/theme-modern/src/index.js
var src = __webpack_require__(2990);
// EXTERNAL MODULE: ./node_modules/@blockly/theme-dark/src/index.js
var theme_dark_src = __webpack_require__(26576);
// EXTERNAL MODULE: ./node_modules/blockly/index.js
var blockly = __webpack_require__(74640);
var blockly_default = /*#__PURE__*/__webpack_require__.n(blockly);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/hooks/useServices.ts
var useServices = __webpack_require__(2928);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(59355);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(53719);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(85413);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(42656);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./src/components/hooks/toneContext.ts
var toneContext = __webpack_require__(66775);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
// EXTERNAL MODULE: ./src/components/vm/fields/ReactField.tsx
var ReactField = __webpack_require__(15171);
;// CONCATENATED MODULE: ./src/components/vm/fields/NoteField.tsx








var PianoWidget = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(532), __webpack_require__.e(317)]).then(__webpack_require__.bind(__webpack_require__, 28937));
});

var NoteField = /*#__PURE__*/function (_ReactField) {
  (0,inheritsLoose/* default */.Z)(NoteField, _ReactField);

  NoteField.fromJson = function fromJson(options) {
    return new NoteField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function NoteField(options) {
    var _this;

    _this = _ReactField.call(this, options === null || options === void 0 ? void 0 : options.value, undefined, options) || this;

    _this.events.on(ReactField/* UNMOUNT */.lo, function () {
      var _this$toneContext;

      (_this$toneContext = _this.toneContext) === null || _this$toneContext === void 0 ? void 0 : _this$toneContext.close();
      _this.toneContext = undefined;
    });

    return _this;
  }

  var _proto = NoteField.prototype;

  _proto.getText_ = function getText_() {
    return (this.value | 0) + "";
  };

  _proto.renderField = function renderField() {
    var _this2 = this;

    var handlePlayTone = /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(newFrequency) {
        var _this2$toneContext;

        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.value = newFrequency;
                if (!_this2.toneContext) _this2.toneContext = (0,toneContext/* createToneContext */.W)();
                (_this2$toneContext = _this2.toneContext) === null || _this2$toneContext === void 0 ? void 0 : _this2$toneContext.playTone(newFrequency, 400);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function handlePlayTone(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(PianoWidget, {
      playTone: handlePlayTone
    }));
  };

  (0,createClass/* default */.Z)(NoteField, [{
    key: "defaultValue",
    get: function get() {
      return 440;
    }
  }]);

  return NoteField;
}(ReactField/* default */.ZP);

NoteField.KEY = "jacdac_field_note";
NoteField.SHADOW = (0,ReactField/* toShadowDefinition */._t)(NoteField);

// EXTERNAL MODULE: ./jacdac-ts/src/servers/hidkeyboardserver.ts
var hidkeyboardserver = __webpack_require__(41577);
;// CONCATENATED MODULE: ./src/components/vm/fields/KeyboardKeyField.tsx






var KeyboardKeyInput = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(532), __webpack_require__.e(7919), __webpack_require__.e(2860)]).then(__webpack_require__.bind(__webpack_require__, 82860));
});

var KeyboardKeyField = /*#__PURE__*/function (_ReactField) {
  (0,inheritsLoose/* default */.Z)(KeyboardKeyField, _ReactField);

  function KeyboardKeyField() {
    return _ReactField.apply(this, arguments) || this;
  }

  KeyboardKeyField.fromJson = function fromJson(options) {
    return new KeyboardKeyField(options === null || options === void 0 ? void 0 : options.value, undefined, options);
  };

  var _proto = KeyboardKeyField.prototype;

  _proto.getText_ = function getText_() {
    var _this$value = this.value,
        selector = _this$value.selector,
        modifiers = _this$value.modifiers;
    return (0,hidkeyboardserver/* renderKeyboardKey */.OJ)(selector, modifiers, true);
  };

  _proto.renderField = function renderField() {
    var _this = this;

    var _this$value2 = this.value,
        selector = _this$value2.selector,
        modifiers = _this$value2.modifiers;

    var handleChange = function handleChange(newSelector, newModifiers) {
      _this.value = {
        selector: newSelector,
        modifiers: newModifiers
      };
    };

    return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(KeyboardKeyInput, {
      initialSelector: selector,
      initialModifiers: modifiers,
      onChange: handleChange
    }));
  };

  (0,createClass/* default */.Z)(KeyboardKeyField, [{
    key: "defaultValue",
    get: function get() {
      return {
        selector: 4,
        modifiers: 0
      };
    }
  }]);

  return KeyboardKeyField;
}(ReactField/* default */.ZP);

KeyboardKeyField.KEY = "jacdac_field_keyboard_key";

;// CONCATENATED MODULE: ./src/components/widgets/svg.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
function mkTitle(txt) {
  var t = elt("title");
  t.textContent = txt;
  return t;
}

function title(el, txt) {
  var t = mkTitle(txt);
  el.appendChild(t);
  return t;
}
function hydrate(el, props) {
  for (var k in props) {
    if (k == "title") {
      title(el, props[k]);
    } else el.setAttributeNS(null, k, props[k]);
  }
}
function elt(name, props) {
  var el = document.createElementNS("http://www.w3.org/2000/svg", name);
  if (props) hydrate(el, props);
  return el;
}
function child(parent, name, props) {
  var el = elt(name, props);
  parent.appendChild(el);
  return el;
}
;// CONCATENATED MODULE: ./src/components/vm/fields/ReactImageField.tsx





var ReactImageField = /*#__PURE__*/function (_ReactField) {
  (0,inheritsLoose/* default */.Z)(ReactImageField, _ReactField);

  function ReactImageField(value, width, height) {
    if (width === void 0) {
      width = 32;
    }

    if (height === void 0) {
      height = 32;
    }

    return _ReactField.call(this, value, undefined, undefined, {
      width: width,
      height: height
    }) || this;
  }

  var _proto = ReactImageField.prototype;

  _proto.setSize = function setSize(width, height) {
    this.size_ = new (blockly_default()).utils.Size(width, height);
    var img = this.view;

    if (img) {
      img.setAttribute("width", width + "");
      img.setAttribute("height", height + "");
    }
  };

  _proto.updateView = function updateView() {
    var imgUri = this.renderValue();
    var img = this.view;

    if (imgUri) {
      img === null || img === void 0 ? void 0 : img.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", imgUri);
      img === null || img === void 0 ? void 0 : img.setAttribute("alt", this.getText());
    }
  }
  /**
   * Renders the value to a data uri string
   */
  ;

  _proto.renderValue = function renderValue() {
    return undefined;
  };

  _proto.initCustomView = function initCustomView() {
    var _this$size_ = this.size_,
        width = _this$size_.width,
        height = _this$size_.height;
    return child(this.fieldGroup_, "image", {
      height: height,
      width: width,
      alt: this.getText()
    });
  };

  return ReactImageField;
}(ReactField/* default */.ZP);


;// CONCATENATED MODULE: ./src/components/vm/fields/LEDMatrixField.tsx







var LEDMatrixWidget = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 317).then(__webpack_require__.bind(__webpack_require__, 71598));
});

var LEDMatrixField = /*#__PURE__*/function (_ReactImageField) {
  (0,inheritsLoose/* default */.Z)(LEDMatrixField, _ReactImageField);

  function LEDMatrixField(value) {
    var _this;

    _this = _ReactImageField.call(this, value) || this;

    _this.events.on(ReactField/* VALUE_CHANGE */.Z8, function () {
      var _this$value = _this.value,
          rows = _this$value.rows,
          columns = _this$value.columns;

      _this.setSize(32, 32 / columns * rows);
    });

    return _this;
  }

  LEDMatrixField.fromJson = function fromJson(options) {
    return new LEDMatrixField(options === null || options === void 0 ? void 0 : options.value);
  };

  var _proto = LEDMatrixField.prototype;

  _proto.getText_ = function getText_() {
    var _this$value2 = this.value,
        leds = _this$value2.leds,
        rows = _this$value2.rows,
        columns = _this$value2.columns;
    return leds + " (" + rows + "x" + columns + ")";
  };

  _proto.renderValue = function renderValue() {
    var _this$value3 = this.value,
        leds = _this$value3.leds,
        rows = _this$value3.rows,
        columns = _this$value3.columns; // render current state to LEDmatrix field

    var columnspadded = columns + (8 - columns % 8);
    var ledsBytes = (0,utils/* fromHex */.H_)(leds);
    var cvs = document.createElement("canvas");
    var b = 3;
    var pw = 8;
    var ph = 8;
    var w = rows * pw + (rows - 1) * b;
    var h = columns * ph + (columns - 1) * b;
    cvs.width = w + 2 * b;
    cvs.height = h + 2 * b;
    var ctx = cvs.getContext("2d");
    ctx.fillStyle = "#444";
    ctx.fillRect(b, b, w, h);
    ctx.fillStyle = "blue";

    for (var x = 0; x < columns; ++x) {
      for (var y = 0; y < rows; ++y) {
        var bitindex = y * columnspadded + x;
        var byte = ledsBytes[bitindex >> 3];
        var bit = bitindex % 8;
        var on = 1 === (byte >> bit & 1);
        ctx.fillStyle = on ? "#ffc400" : "#000";
        ctx.fillRect(x * (pw + b) + b, y * (ph + b) + b, pw, ph);
      }
    }

    var dataUri = cvs.toDataURL("image/png");
    return dataUri;
  };

  _proto.renderField = function renderField() {
    var _this2 = this;

    var _this$value4 = this.value,
        leds = _this$value4.leds,
        rows = _this$value4.rows,
        columns = _this$value4.columns;
    var ledsBytes = (0,utils/* fromHex */.H_)(leds);
    console.log("led bytes", {
      leds: leds,
      ledsBytes: ledsBytes
    });

    var onChange = function onChange(newLeds) {
      return _this2.value = {
        leds: (0,utils/* toHex */.NC)(newLeds),
        rows: rows,
        columns: columns
      };
    };

    return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(LEDMatrixWidget, {
      color: "secondary",
      brightness: 1,
      leds: ledsBytes,
      rows: rows,
      columns: columns,
      onChange: onChange
    }));
  };

  (0,createClass/* default */.Z)(LEDMatrixField, [{
    key: "defaultValue",
    get: function get() {
      return {
        leds: (0,utils/* toHex */.NC)(new Uint8Array(0)),
        rows: 5,
        columns: 5
      };
    }
  }]);

  return LEDMatrixField;
}(ReactImageField);

LEDMatrixField.KEY = "jacdac_field_led_matrix";

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slider/Slider.js + 1 modules
var Slider = __webpack_require__(50514);
// EXTERNAL MODULE: ./src/components/vm/fields/ValueContext.tsx
var ValueContext = __webpack_require__(84419);
;// CONCATENATED MODULE: ./src/components/vm/fields/SliderField.tsx









function FieldWithSlider(props) {
  var children = props.children;

  var _useContext = (0,react.useContext)(ValueContext/* default */.ZP),
      value = _useContext.value,
      onValueChange = _useContext.onValueChange;

  var handleChange = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(ev, nv) {
      var newValue;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newValue = nv;
              onValueChange(newValue);

            case 2:
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

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, children), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Slider/* default */.Z, {
    color: "secondary",
    valueLabelDisplay: "auto",
    valueLabelFormat: Math.round(value) + "\xB0",
    min: -90,
    max: 90,
    step: 5,
    value: value,
    onChange: handleChange,
    "aria-label": "angle"
  })));
}

var SliderField = /*#__PURE__*/function (_ReactField) {
  (0,inheritsLoose/* default */.Z)(SliderField, _ReactField);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function SliderField(value, options) {
    return _ReactField.call(this, value, undefined, options) || this;
  }

  var _proto = SliderField.prototype;

  _proto.getText_ = function getText_() {
    return this.value + "";
  };

  _proto.renderField = function renderField() {
    return /*#__PURE__*/react.createElement(FieldWithSlider, null, this.renderWidget());
  };

  _proto.renderWidget = function renderWidget() {
    return null;
  };

  (0,createClass/* default */.Z)(SliderField, [{
    key: "defaultValue",
    get: function get() {
      return 0;
    }
  }]);

  return SliderField;
}(ReactField/* default */.ZP);


;// CONCATENATED MODULE: ./src/components/vm/fields/ServoAngleField.tsx






var ServoWidget = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 9422));
});

function ServiceFieldWidget() {
  var _useContext = (0,react.useContext)(ValueContext/* default */.ZP),
      value = _useContext.value;

  return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(ServoWidget, {
    angle: value,
    offset: 0,
    color: "secondary",
    enabled: true
  }));
}

var ServoAngleField = /*#__PURE__*/function (_SliderField) {
  (0,inheritsLoose/* default */.Z)(ServoAngleField, _SliderField);

  function ServoAngleField() {
    return _SliderField.apply(this, arguments) || this;
  }

  ServoAngleField.fromJson = function fromJson(options) {
    return new ServoAngleField(options === null || options === void 0 ? void 0 : options.value, options);
  };

  var _proto = ServoAngleField.prototype;

  _proto.getText_ = function getText_() {
    return this.value + "°";
  };

  _proto.renderWidget = function renderWidget() {
    return /*#__PURE__*/react.createElement(ServiceFieldWidget, null);
  };

  return ServoAngleField;
}(SliderField);

ServoAngleField.KEY = "jacdac_field_servo_angle";
ServoAngleField.SHADOW = (0,ReactField/* toShadowDefinition */._t)(ServoAngleField);

;// CONCATENATED MODULE: ./src/components/vm/fields/LEDColorField.tsx







var LEDWidget = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 317).then(__webpack_require__.bind(__webpack_require__, 56931));
});

function LEDColorFieldWidget() {
  var _useContext = (0,react.useContext)(ValueContext/* default */.ZP),
      value = _useContext.value,
      onValueChange = _useContext.onValueChange;

  return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(LEDWidget, {
    ledColor: value,
    onLedColorChange: onValueChange,
    ledCount: 3,
    color: "secondary"
  }));
}

var LEDColorField = /*#__PURE__*/function (_ReactField) {
  (0,inheritsLoose/* default */.Z)(LEDColorField, _ReactField);

  LEDColorField.fromJson = function fromJson(options) {
    return new LEDColorField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function LEDColorField(options) {
    return _ReactField.call(this, options === null || options === void 0 ? void 0 : options.value, undefined, options, {
      width: 28,
      height: 28
    }) || this;
  }

  var _proto = LEDColorField.prototype;

  _proto.initCustomView = function initCustomView() {
    var width = this.size_.width;
    var r = width >> 1;
    return child(this.fieldGroup_, "circle", {
      r: width >> 1,
      cx: r,
      cy: r,
      strokeWidth: 2,
      stroke: "#777"
    });
  };

  _proto.updateView = function updateView() {
    var c = (0,utils/* rgbToHtmlColor */.b)(this.value);
    var circle = this.view;

    if (c) {
      circle === null || circle === void 0 ? void 0 : circle.setAttribute("fill", c);
    }
  };

  _proto.getText_ = function getText_() {
    return (0,utils/* rgbToHtmlColor */.b)(this.value);
  };

  _proto.renderField = function renderField() {
    return /*#__PURE__*/react.createElement(LEDColorFieldWidget, null);
  };

  return LEDColorField;
}(ReactField/* default */.ZP);

LEDColorField.KEY = "jacdac_field_led_color";
LEDColorField.SHADOW = (0,ReactField/* toShadowDefinition */._t)(LEDColorField);

// EXTERNAL MODULE: ./src/components/dashboard/DashboardServiceWidget.tsx + 5 modules
var DashboardServiceWidget = __webpack_require__(23069);
// EXTERNAL MODULE: ./src/components/vm/WorkspaceContext.tsx
var WorkspaceContext = __webpack_require__(26934);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./src/components/ui/DarkModeProvider.tsx
var DarkModeProvider = __webpack_require__(7796);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
// EXTERNAL MODULE: ./src/jacdac/Provider.tsx
var Provider = __webpack_require__(727);
// EXTERNAL MODULE: ./src/components/ui/AppTheme.tsx
var AppTheme = __webpack_require__(25853);
;// CONCATENATED MODULE: ./src/components/vm/fields/ReactInlineField.tsx












var ReactInlineField = /*#__PURE__*/function (_ReactField) {
  (0,inheritsLoose/* default */.Z)(ReactInlineField, _ReactField);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function ReactInlineField(options) {
    return _ReactField.call(this, options === null || options === void 0 ? void 0 : options.value, undefined, options, {
      width: 1,
      height: 1
    }) || this;
  }

  var _proto = ReactInlineField.prototype;

  _proto.createContainer = function createContainer() {
    var c = document.createElement("div");
    c.style.display = "inline-block";
    c.style.minWidth = "14rem";
    return c;
  };

  _proto.initCustomView = function initCustomView() {
    var _this = this;

    var _this$size_ = this.size_,
        width = _this$size_.width,
        height = _this$size_.height;
    var fo = child(this.fieldGroup_, "foreignObject", {
      x: 0,
      y: 0,
      width: width,
      height: height
    });
    this.container = this.createContainer();
    fo.appendChild(this.container);
    this.resizeObserver = new ResizeObserver(function (entries) {
      var entry = entries[0];
      var contentRect = entry.contentRect;
      _this.size_.width = contentRect.width;
      _this.size_.height = contentRect.height;
      fo.setAttribute("width", _this.size_.width + "");
      fo.setAttribute("height", _this.size_.height + "");

      _this.forceRerender();
    });
    this.resizeObserver.observe(this.container);
    react_dom.render(this.renderBlock(), this.container);
    return fo;
  };

  _proto.dispose = function dispose() {
    if (this.container) {
      react_dom.unmountComponentAtNode(this.container);
      this.container = undefined;
    }

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = undefined;
    }

    _ReactField.prototype.dispose.call(this);
  };

  _proto.renderField = function renderField() {
    return /*#__PURE__*/react.createElement("div", null, "not used");
  };

  _proto.renderInlineField = function renderInlineField() {
    return null;
  };

  _proto.renderBlock = function renderBlock() {
    return /*#__PURE__*/react.createElement(WorkspaceContext/* WorkspaceProvider */.W5, {
      field: this
    }, /*#__PURE__*/react.createElement(DarkModeProvider/* default */.Z, {
      fixedDarkMode: "dark"
    }, /*#__PURE__*/react.createElement(react_use_id_hook_esm/* IdProvider */.vc, null, /*#__PURE__*/react.createElement(Provider/* default */.Z, null, /*#__PURE__*/react.createElement(AppTheme/* default */.Z, null, this.renderInlineField())))));
  };

  _proto.getText_ = function getText_() {
    return "...";
  } // don't bind any mouse event
  ;

  _proto.bindEvents_ = function bindEvents_() {
    blockly_default().Tooltip.bindMouseEvents(this.getClickTarget_());
  };

  return ReactInlineField;
}(ReactField/* default */.ZP);


// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(88880);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 23 modules
var servers = __webpack_require__(37801);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var jdom_spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(6809);
;// CONCATENATED MODULE: ./src/components/vm/fields/NoServiceAlert.tsx








function NoServiceAlert() {
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var _useContext2 = (0,react.useContext)(WorkspaceContext/* default */.ZP),
      roleService = _useContext2.roleService,
      roleServiceShortId = _useContext2.roleServiceShortId,
      flyout = _useContext2.flyout;

  var spec = (0,jdom_spec/* serviceSpecificationFromName */.kB)(roleServiceShortId);

  var handleStartSimulator = function handleStartSimulator() {
    return (0,servers/* startServiceProviderFromServiceClass */.V6)(bus, spec.classIdentifier);
  }; // nothing to do here


  if (roleService || flyout) return null; // unresolved, unknown service

  if (!roleService && !roleServiceShortId) return null; // unknown spec

  if (!spec) return /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "warning"
  }, "Unknown service");
  return /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "outlined",
    color: "default",
    startIcon: /*#__PURE__*/react.createElement(Add/* default */.Z, null),
    onClick: handleStartSimulator
  }, "start ", spec.name);
}
;// CONCATENATED MODULE: ./src/components/vm/fields/PointerBoundary.tsx

function PointerBoundary(props) {
  var className = props.className,
      children = props.children;

  var onPointerStopPropagation = function onPointerStopPropagation(event) {
    // make sure blockly does not handle drags when interacting with UI
    event.stopPropagation();
  };

  return /*#__PURE__*/react.createElement("div", {
    className: className,
    style: {
      cursor: "inherit"
    },
    onPointerDown: onPointerStopPropagation,
    onPointerUp: onPointerStopPropagation,
    onPointerMove: onPointerStopPropagation
  }, children);
}
;// CONCATENATED MODULE: ./src/components/vm/fields/TwinField.tsx









function TwinWidget() {
  var _useContext = (0,react.useContext)(WorkspaceContext/* default */.ZP),
      roleService = _useContext.roleService,
      flyout = _useContext.flyout;

  if (flyout) return null;
  if (!roleService) return /*#__PURE__*/react.createElement(NoServiceAlert, null);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    alignItems: "center",
    alignContent: "center",
    justify: "center",
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(PointerBoundary, null, /*#__PURE__*/react.createElement(DashboardServiceWidget/* default */.ZP, {
    service: roleService,
    visible: true,
    variant: "icon"
  }))));
}

var TwinField = /*#__PURE__*/function (_ReactInlineField) {
  (0,inheritsLoose/* default */.Z)(TwinField, _ReactInlineField);

  TwinField.fromJson = function fromJson(options) {
    return new TwinField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function TwinField(options) {
    return _ReactInlineField.call(this, options) || this;
  }

  var _proto = TwinField.prototype;

  _proto.renderInlineField = function renderInlineField() {
    return /*#__PURE__*/react.createElement(TwinWidget, null);
  };

  return TwinField;
}(ReactInlineField);

TwinField.KEY = "jacdac_field_twin";
TwinField.EDITABLE = false;

;// CONCATENATED MODULE: ./src/components/vm/fields/JDomTreeField.tsx






var JDomServiceTreeView = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(272)]).then(__webpack_require__.bind(__webpack_require__, 60272));
});

function JDomTreeWidget() {
  var _useContext = (0,react.useContext)(WorkspaceContext/* default */.ZP),
      roleService = _useContext.roleService,
      flyout = _useContext.flyout;

  var onPointerStopPropagation = function onPointerStopPropagation(event) {
    // make sure blockly does not handle drags when interacting with UI
    event.stopPropagation();
  };

  if (flyout) return null;
  if (!roleService) return /*#__PURE__*/react.createElement(NoServiceAlert, null);
  return /*#__PURE__*/react.createElement("div", {
    style: {
      minWidth: "12rem",
      cursor: "inherit"
    },
    onPointerDown: onPointerStopPropagation,
    onPointerUp: onPointerStopPropagation,
    onPointerMove: onPointerStopPropagation
  }, roleService && /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(JDomServiceTreeView, {
    service: roleService,
    defaultExpanded: [roleService.id]
  })));
}

var JDomTreeField = /*#__PURE__*/function (_ReactInlineField) {
  (0,inheritsLoose/* default */.Z)(JDomTreeField, _ReactInlineField);

  JDomTreeField.fromJson = function fromJson(options) {
    return new JDomTreeField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function JDomTreeField(options) {
    return _ReactInlineField.call(this, options) || this;
  }

  var _proto = JDomTreeField.prototype;

  _proto.renderInlineField = function renderInlineField() {
    return /*#__PURE__*/react.createElement(JDomTreeWidget, null);
  };

  return JDomTreeField;
}(ReactInlineField);

JDomTreeField.KEY = "jacdac_jdom_service_tree";
JDomTreeField.EDITABLE = false;

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__(8266);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(76544);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/events.ts
var events = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(90293);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
;// CONCATENATED MODULE: ./src/components/TrendChart.tsx




var useStyles = (0,makeStyles/* default */.Z)(function () {
  return (0,createStyles/* default */.Z)({
    mini: {
      display: "inline-block",
      width: "10rem"
    }
  });
});
function useTrendChartData(maxLength) {
  if (maxLength === void 0) {
    maxLength = 25;
  }

  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var _useState = (0,react.useState)([]),
      trendData = _useState[0],
      setTrendData = _useState[1];

  var addTrendValue = function addTrendValue(value) {
    if (isNaN(value)) return;
    var timestamp = bus.timestamp;
    var entry = [timestamp, value];
    setTrendData(function (trendData) {
      return [].concat((0,toConsumableArray/* default */.Z)(trendData.slice(-(maxLength - 1))), [entry]);
    });
  };

  return {
    trendData: trendData,
    addTrendValue: addTrendValue
  };
}
function TrendChart(props) {
  var useGradient = props.useGradient,
      data = props.data,
      unit = props.unit,
      _props$width = props.width,
      width = _props$width === void 0 ? 80 : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? 15 : _props$height,
      dot = props.dot,
      mini = props.mini;
  var theme = (0,useTheme/* default */.Z)();
  var classes = useStyles(); // nothing to show for

  if ((data === null || data === void 0 ? void 0 : data.length) < 2) return null;
  var vpw = width;
  var vph = height;
  var color = theme.palette.secondary.main;
  var shape = unit === "#" ? "step" : "line";
  var symmetric = unit === "g" ? true : false;
  var values = data.map(function (r) {
    return r[1];
  });
  var mint = data[0][0];
  var maxt = data[data.length - 1][0];
  var minv = unit === "/" ? 0 : Math.min.apply(null, values);
  var maxv = unit === "/" ? 1 : Math.max.apply(null, values);
  var opposite = unit !== "/" && Math.sign(minv) != Math.sign(maxv);

  if (isNaN(minv) && isNaN(maxv)) {
    minv = 0;
    maxv = 1;
  }

  if (symmetric) {
    maxv = Math.max(Math.abs(minv), Math.abs(maxv));
    minv = -maxv;
  }

  var rv = maxv - minv;
  var margin = 2;
  var h = maxv - minv || 10;
  var w = maxt - mint || 10;
  var strokeWidth = 0.25;
  var axisWidth = 0.2;
  var axisColor = "#ccc";
  var pointRadius = strokeWidth * 1.5;
  var toffset = -pointRadius * 3;

  var x = function x(t) {
    return (t - mint) / w * vpw;
  };

  var y = function y(v) {
    if (v === undefined || isNaN(v)) v = minv; // adding random for lineragradient bug workaround
    // which does not render perfectly
    // horizontal lines

    return (Math.random() * 0.0001 * rv - (v - minv)) / h * (vph - 2 * margin);
  };

  var lastRow = data[data.length - 1];
  var path = shape == "step" ? data.map(function (row, ri) {
    return ri == 0 ? "M " + x(row[0]) + " " + y(row[1]) : "H " + x(row[0]) + " V " + y(row[1]);
  }).join(" ") : data.map(function (row, ri) {
    return (ri == 0 ? "M" : "L") + " " + x(row[0]) + " " + y(row[1]);
  }).join(" ");
  return /*#__PURE__*/react.createElement("div", {
    className: mini ? classes.mini : undefined
  }, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 " + vpw + " " + vph,
    style: {
      maxHeight: mini ? "5vh" : "10vh",
      maxWidth: "100%"
    }
  }, useGradient && /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    key: "gradaxis",
    id: "gradientaxis",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/react.createElement("stop", {
    offset: "0%",
    stopOpacity: "0",
    stopColor: axisColor
  }), /*#__PURE__*/react.createElement("stop", {
    offset: "5%",
    stopOpacity: "0",
    stopColor: axisColor
  }), /*#__PURE__*/react.createElement("stop", {
    offset: "40%",
    stopOpacity: "1",
    stopColor: axisColor
  }), /*#__PURE__*/react.createElement("stop", {
    offset: "100%",
    stopOpacity: "1",
    stopColor: axisColor
  })), useGradient && /*#__PURE__*/react.createElement("linearGradient", {
    id: "gradient0",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/react.createElement("stop", {
    offset: "0%",
    stopOpacity: "0",
    stopColor: color
  }), /*#__PURE__*/react.createElement("stop", {
    offset: "5%",
    stopOpacity: "0",
    stopColor: color
  }), /*#__PURE__*/react.createElement("stop", {
    offset: "40%",
    stopOpacity: "1",
    stopColor: color
  }), /*#__PURE__*/react.createElement("stop", {
    offset: "100%",
    stopOpacity: "1",
    stopColor: color
  }))), /*#__PURE__*/react.createElement("g", {
    transform: "translate(" + toffset + ", " + (vph - margin) + ")"
  }, opposite && /*#__PURE__*/react.createElement("line", {
    x1: x(mint),
    x2: x(maxt),
    y1: y(0),
    y2: y(0),
    strokeWidth: axisWidth,
    stroke: useGradient ? "url(#gradientaxis)" : axisColor
  }), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: path,
    fill: "none",
    stroke: useGradient ? "url(#gradient0)" : color,
    strokeWidth: strokeWidth,
    strokeLinejoin: "round"
  }), dot && /*#__PURE__*/react.createElement("circle", {
    cx: x(lastRow[0]),
    cy: y(lastRow[1]),
    r: pointRadius,
    fill: color
  })))));
}
;// CONCATENATED MODULE: ./src/components/vm/fields/WatchValueField.tsx










function WatchValueWidget() {
  var _useContext = (0,react.useContext)(WorkspaceContext/* default */.ZP),
      runner = _useContext.runner,
      sourceId = _useContext.sourceId;

  var theme = (0,useTheme/* default */.Z)(); // track changes

  var _useState = (0,react.useState)(runner === null || runner === void 0 ? void 0 : runner.lookupWatch(sourceId)),
      value = _useState[0],
      setValue = _useState[1];

  var _useTrendChartData = useTrendChartData(),
      trendData = _useTrendChartData.trendData,
      addTrendValue = _useTrendChartData.addTrendValue;

  (0,react.useEffect)(function () {
    setValue(undefined);
    return runner === null || runner === void 0 ? void 0 : runner.subscribe(events/* VM_EVENT */.J, function (code, watchSourceId) {
      if (code === events/* VMCode.WatchChange */.H.WatchChange && watchSourceId === sourceId) {
        var newValue = runner.lookupWatch(sourceId);
        setValue(newValue);
        addTrendValue(newValue);
      }
    });
  }, [runner, sourceId]);
  var valueNumber = typeof value === "number" ? value : undefined;

  if (!isNaN(valueNumber)) {
    var step = Math.ceil(Math.abs(valueNumber)) / 10;
    var precision = step < 1 ? Math.ceil(-Math.log10(step)) : 0;
    valueNumber = (0,utils/* roundWithPrecision */.JI)(valueNumber, precision);
  }

  return /*#__PURE__*/react.createElement(Box/* default */.Z, {
    bgcolor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
    color: theme.palette.text.primary
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    alignItems: "flex-end",
    alignContent: "center",
    justify: "center",
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(PointerBoundary, null, !isNaN(valueNumber) ? /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "body1"
  }, valueNumber) : typeof value === "boolean" ? /*#__PURE__*/react.createElement(Switch/* default */.Z, {
    value: !!value
  }) : /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "body1"
  }, value === undefined ? "..." : value + ""))), !isNaN(valueNumber) && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(PointerBoundary, null, /*#__PURE__*/react.createElement(TrendChart, {
    data: trendData,
    mini: true,
    dot: 2,
    useGradient: true
  })))));
}

var WatchValueField = /*#__PURE__*/function (_ReactInlineField) {
  (0,inheritsLoose/* default */.Z)(WatchValueField, _ReactInlineField);

  WatchValueField.fromJson = function fromJson(options) {
    return new WatchValueField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function WatchValueField(options) {
    return _ReactInlineField.call(this, options) || this;
  }

  var _proto = WatchValueField.prototype;

  _proto.createContainer = function createContainer() {
    var c = document.createElement("div");
    c.style.display = "inline-block";
    c.style.minWidth = "4rem";
    return c;
  };

  _proto.renderInlineField = function renderInlineField() {
    return /*#__PURE__*/react.createElement(WatchValueWidget, null);
  };

  return WatchValueField;
}(ReactInlineField);

WatchValueField.KEY = "jacdac_watch_value";
WatchValueField.EDITABLE = false;

;// CONCATENATED MODULE: ./src/components/vm/fields/fields.ts










var reactFieldShadows;
function registerFields() {
  if (reactFieldShadows) return;
  reactFieldShadows = []; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var registerType = function registerType(fieldType) {
    var key = fieldType.KEY;
    (0,utils/* assert */.hu)(!!key);

    try {
      blockly_default().fieldRegistry.unregister(key); // hot reload issues
    } catch (e) {// ignore hot reload issues
    }

    blockly_default().fieldRegistry.register(key, fieldType);
    if (fieldType.SHADOW) reactFieldShadows.push(fieldType.SHADOW);
  };

  var fieldTypes = [KeyboardKeyField, NoteField, LEDMatrixField, ServoAngleField, LEDColorField, TwinField, JDomTreeField, WatchValueField];
  fieldTypes.forEach(registerType);
}
function fieldShadows() {
  registerFields();
  return reactFieldShadows.slice(0);
}
// EXTERNAL MODULE: ./src/components/vm/toolbox.ts
var toolbox = __webpack_require__(20055);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/ir.ts
var VMFunctions = [{
  id: "label",
  args: ["Identifier"],
  prompt: "label target {1}",
  context: "command"
}, {
  id: "jump",
  args: ["Identifier"],
  prompt: "jump to label {1}",
  context: "command"
}, {
  id: "branchOnCondition",
  args: ["boolean", "Identifier"],
  prompt: "if {1} then jump to label {2}",
  context: "command"
}, {
  id: "awaitRegister",
  args: ["register"],
  prompt: "wait on register {1} to change value",
  context: "command"
}, {
  id: "awaitChange",
  args: ["register", "number"],
  prompt: "wait for register {1} to change by {2}",
  context: "command"
}, {
  id: "wait",
  args: ["number"],
  prompt: "wait for {1} milliseconds",
  context: "command"
}, {
  id: "watch",
  args: ["number"],
  prompt: "watch expression {1}",
  context: "command"
}, {
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
}, {
  id: "nop",
  args: [],
  prompt: "no operation",
  context: "command"
}, {
  id: "onRoleConnected",
  args: ["Identifier"],
  prompt: "fires when a role is connected",
  context: "command"
}, {
  id: "onRoleDisconnected",
  args: ["Identifier"],
  prompt: "fires when a role is disconnected",
  context: "command"
}];
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdutils.ts
var jdutils = __webpack_require__(30055);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/compile.ts




function toIdentifier(id) {
  return {
    type: "Identifier",
    name: id
  };
}
function toMemberExpression(root, field) {
  return {
    type: "MemberExpression",
    object: toIdentifier(root),
    property: typeof field === "string" ? toIdentifier(field) : field,
    computed: false
  };
}

function handlerVisitor(handler, visitITE, visitCommand) {
  handler.commands.forEach(visitBase);

  function visitBase(base) {
    switch (base.type) {
      case "cmd":
        {
          if (visitCommand) visitCommand(base);
          break;
        }

      case "ite":
        {
          var _ite$else, _ite$then;

          var _ite = base;
          if (visitITE) visitITE(_ite, 0);
          _ite === null || _ite === void 0 ? void 0 : (_ite$else = _ite.else) === null || _ite$else === void 0 ? void 0 : _ite$else.forEach(visitBase);
          if (visitITE) visitITE(_ite, 1);
          _ite === null || _ite === void 0 ? void 0 : (_ite$then = _ite.then) === null || _ite$then === void 0 ? void 0 : _ite$then.forEach(visitBase);
          if (visitITE) visitITE(_ite, 2);
        }
    }
  }
}

function compileProgram(prog) {
  var newProgram = {
    roles: prog.roles.slice(0),
    handlers: []
  };
  newProgram.handlers = prog.handlers.map(function (h) {
    return {
      commands: removeIfThenElse(h),
      errors: h === null || h === void 0 ? void 0 : h.errors
    };
  });
  return newProgram;
}

function removeIfThenElse(handler) {
  var newSequence = [];
  var labels = [];
  var labelId = 1;
  handlerVisitor(handler, function (ite, time) {
    switch (time) {
      case 0:
        {
          // create the labels and branch instruction
          var then = "then_" + labelId;
          var end = "end_" + labelId;
          labels.push({
            then: then,
            end: end
          });
          labelId++;
          newSequence.push({
            type: "cmd",
            command: {
              type: "CallExpression",
              callee: toIdentifier("branchOnCondition"),
              arguments: [ite.expr, toIdentifier(then)]
            }
          });
          break;
        }

      case 1:
        {
          // insert the jump and then label
          var _labels = labels[labels.length - 1],
              _then = _labels.then,
              _end = _labels.end;
          newSequence.push({
            type: "cmd",
            command: {
              type: "CallExpression",
              callee: toIdentifier("jump"),
              arguments: [toIdentifier(_end)]
            }
          });
          newSequence.push({
            type: "cmd",
            command: {
              type: "CallExpression",
              callee: toIdentifier("label"),
              arguments: [toIdentifier(_then)]
            }
          });
          break;
        }

      case 2:
        {
          (0,utils/* assert */.hu)(labels.length > 0);
          var _end2 = labels[labels.length - 1].end;
          newSequence.push({
            type: "cmd",
            command: {
              type: "CallExpression",
              callee: toIdentifier("label"),
              arguments: [toIdentifier(_end2)]
            }
          });
          labels.pop();
        }
    }
  }, function (cmd) {
    newSequence.push(cmd);
  });
  return newSequence;
}

var getServiceFromRole = function getServiceFromRole(info) {
  return function (role) {
    // lookup in roles first
    var shortId = info.roles.find(function (pair) {
      return pair.role === role;
    });

    if (shortId) {
      // must succeed
      var def = (0,jdom_spec/* serviceSpecificationFromName */.kB)(shortId.serviceShortId);
      (0,utils/* assert */.hu)(!!def, "service " + shortId.serviceShortId + " not resolved");
      return def;
    } else {
      var service = (0,jdom_spec/* serviceSpecificationFromName */.kB)(role);
      return service;
    }
  };
};
function checkProgram(prog) {
  var allErrors = [];
  var goodHandlers = [];

  var errorFun = function errorFun(e) {
    allErrors.push({
      sourceId: undefined,
      message: e
    });
  };

  var symbolResolver = new jdutils/* SpecSymbolResolver */.ll(undefined, getServiceFromRole(prog), errorFun);
  var checker = new jdutils/* VMChecker */.Ys(symbolResolver, function (_) {
    return true;
  }, errorFun);
  prog.handlers.forEach(function (h) {
    if (h !== null && h !== void 0 && h.errors.length) {
      h === null || h === void 0 ? void 0 : h.errors.forEach(function (e) {
        return allErrors.push(e);
      });
      return;
    }

    var errorCount = allErrors.length;
    symbolResolver.roles = [];
    handlerVisitor(h, undefined, function (c) {
      return checker.checkCommand(c.command, VMFunctions);
    });

    if ((h === null || h === void 0 ? void 0 : h.errors.length) === 0 && allErrors.length === errorCount) {
      h.roles = symbolResolver.roles;
      goodHandlers.push(h);
    } else {
      h === null || h === void 0 ? void 0 : h.errors.forEach(function (e) {
        return allErrors.push(e);
      });
    }
  });
  prog.handlers = goodHandlers;
  return {
    registers: symbolResolver.registers.map(function (s) {
      var _s$split = s.split("."),
          root = _s$split[0],
          fld = _s$split[1];

      return {
        role: root,
        register: fld
      };
    }),
    events: symbolResolver.events.map(function (e) {
      var _e$split = e.split("."),
          root = _e$split[0],
          fld = _e$split[1];

      return {
        role: root,
        event: fld
      };
    }),
    errors: allErrors
  };
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat-map.js
var es_array_flat_map = __webpack_require__(86535);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unscopables.flat-map.js
var es_array_unscopables_flat_map = __webpack_require__(99244);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(35313);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(13996);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js + 4 modules
var wrapNativeSuper = __webpack_require__(83001);
;// CONCATENATED MODULE: ./src/components/vm/VMgenerator.ts







var ops = {
  AND: "&&",
  OR: "||",
  EQ: "===",
  NEQ: "!==",
  LT: "<",
  GT: ">",
  LTE: "<=",
  GTE: ">=",
  NEG: "-",
  ADD: "+",
  MULTIPLY: "*",
  DIVIDE: "/",
  MINUS: "-"
};
var makeVMBase = function makeVMBase(block, command) {
  return {
    sourceId: block.id,
    type: "cmd",
    command: command
  };
};
var processErrors = function processErrors(block, errors) {
  return errors.map(function (e) {
    return {
      sourceId: e.sourceId ? e.sourceId : block.id,
      message: e.message
    };
  });
};
function workspaceJSONToVMProgram(workspace, dsls) {
  console.debug("compile vm", {
    workspace: workspace,
    dsls: dsls
  });
  var roles = workspace.variables.filter(function (v) {
    return toolbox/* BUILTIN_TYPES.indexOf */.Nd.indexOf(v.type) < 0;
  }).map(function (v) {
    return {
      role: v.name,
      serviceShortId: v.type
    };
  });

  var EmptyExpression = /*#__PURE__*/function (_Error) {
    (0,inheritsLoose/* default */.Z)(EmptyExpression, _Error);

    function EmptyExpression() {
      return _Error.apply(this, arguments) || this;
    }

    return EmptyExpression;
  }( /*#__PURE__*/(0,wrapNativeSuper/* default */.Z)(Error));

  var blockToExpression = function blockToExpression(ev, blockIn) {
    var errors = [];

    var blockToExpressionInner = function blockToExpressionInner(ev, block) {
      if (!block) {
        throw new EmptyExpression();
      }

      var type = block.type,
          value = block.value,
          inputs = block.inputs;
      console.log("block2e", {
        ev: ev,
        block: block,
        type: type,
        value: value,
        inputs: inputs
      });
      if (value !== undefined) // literal
        return {
          type: "Literal",
          value: value,
          raw: value + ""
        };

      switch (type) {
        case "math_single": // built-in blockly

        case "jacdac_math_single":
          {
            var argument = blockToExpressionInner(ev, inputs[0].child);
            var op = inputs[0].fields["op"].value;
            return {
              type: "UnaryExpression",
              operator: ops[op] || op,
              argument: argument,
              prefix: false // TODO:?

            };
          }

        case "math_arithmetic": // built-in blockly

        case "jacdac_math_arithmetic":
          {
            var left = blockToExpressionInner(ev, inputs[0].child);
            var right = blockToExpressionInner(ev, inputs[1].child);
            var _op = inputs[1].fields["op"].value;
            return {
              type: "BinaryExpression",
              operator: ops[_op] || _op,
              left: left,
              right: right
            };
          }

        case "logic_operation":
          {
            var _left = blockToExpressionInner(ev, inputs[0].child);

            var _right = blockToExpressionInner(ev, inputs[1].child);

            var _op2 = inputs[1].fields["op"].value;
            return {
              type: "LogicalExpression",
              operator: ops[_op2] || _op2,
              left: _left,
              right: _right
            };
          }

        case "logic_negate":
          {
            var _argument = blockToExpressionInner(ev, inputs[0].child);

            return {
              type: "UnaryExpression",
              operator: "!",
              argument: _argument,
              prefix: false // TODO:?

            };
          }

        case "logic_compare":
          {
            var _left2 = blockToExpressionInner(ev, inputs[0].child);

            var _right2 = blockToExpressionInner(ev, inputs[1].child);

            var _op3 = inputs[1].fields["op"].value;
            return {
              type: "BinaryExpression",
              operator: ops[_op3] || _op3,
              left: _left2,
              right: _right2
            };
          }

        default:
          {
            var definition = (0,toolbox/* resolveServiceBlockDefinition */.yn)(type);

            if (!definition) {
              console.warn("unknown block " + type, {
                type: type,
                ev: ev,
                block: block,
                d: (blockly_default()).Blocks[type]
              });
            } else {
              var _dsl$compileExpressio;

              // try any DSL
              var dslName = definition.dsl;
              var dsl = dsls.find(function (d) {
                return d.id === dslName;
              });
              var res = dsl === null || dsl === void 0 ? void 0 : (_dsl$compileExpressio = dsl.compileExpressionToVM) === null || _dsl$compileExpressio === void 0 ? void 0 : _dsl$compileExpressio.call(dsl, {
                event: ev,
                definition: definition,
                block: block,
                blockToExpressionInner: blockToExpressionInner
              });

              if (res) {
                if (res.errors) res.errors.forEach(function (e) {
                  return errors.push(e);
                });
                return res.expr;
              }

              var template = definition.template;

              switch (template) {
                case "shadow":
                  {
                    var field = inputs[0].fields["value"];
                    var v = field.value;
                    return {
                      type: "Literal",
                      value: v,
                      raw: v + ""
                    };
                  }

                default:
                  {
                    console.warn("unsupported block template " + template + " for " + type, {
                      ev: ev,
                      block: block
                    });
                    break;
                  }
              }

              break;
            }
          }
      }

      throw new EmptyExpression();
    };

    return {
      expr: blockToExpressionInner(ev, blockIn),
      errors: errors
    };
  };

  var blockToCommand = function blockToCommand(event, block) {
    var type = block.type,
        inputs = block.inputs;
    console.debug("block2c", {
      event: event,
      type: type,
      block: block,
      inputs: inputs
    });

    switch (type) {
      case "dynamic_if":
        {
          var _inputs$, _inputs$2;

          var thenHandler = {
            commands: [],
            errors: []
          };
          var elseHandler = {
            commands: [],
            errors: []
          };
          var t = (_inputs$ = inputs[1]) === null || _inputs$ === void 0 ? void 0 : _inputs$.child;
          var e = (_inputs$2 = inputs[2]) === null || _inputs$2 === void 0 ? void 0 : _inputs$2.child;

          if (t) {
            addCommands(event, [t].concat((0,toConsumableArray/* default */.Z)(t.children ? t.children : [])), thenHandler);
          }

          if (e) {
            addCommands(event, [e].concat((0,toConsumableArray/* default */.Z)(e.children ? e.children : [])), elseHandler);
          }

          var exprErrors = undefined;

          try {
            var _inputs$3;

            exprErrors = blockToExpression(event, (_inputs$3 = inputs[0]) === null || _inputs$3 === void 0 ? void 0 : _inputs$3.child);
          } catch (e) {
            if (e instanceof EmptyExpression) {
              exprErrors = {
                expr: {
                  type: "Literal",
                  value: false,
                  raw: "false "
                },
                errors: []
              };
            } else {
              throw e;
            }
          }

          var _exprErrors = exprErrors,
              expr = _exprErrors.expr,
              errors = _exprErrors.errors;
          var ifThenElse = {
            sourceId: block.id,
            type: "ite",
            expr: expr,
            then: thenHandler.commands,
            else: elseHandler.commands
          };
          return {
            cmd: ifThenElse,
            errors: processErrors(block, errors.concat(thenHandler.errors).concat(elseHandler.errors))
          };
        }
      // more builts

      default:
        {
          var definition = (0,toolbox/* resolveServiceBlockDefinition */.yn)(type);

          if (definition) {
            var _dsl$compileCommandTo;

            var dslName = definition.dsl;
            var dsl = dsls.find(function (dsl) {
              return dsl.id === dslName;
            });
            var dslRes = dsl === null || dsl === void 0 ? void 0 : (_dsl$compileCommandTo = dsl.compileCommandToVM) === null || _dsl$compileCommandTo === void 0 ? void 0 : _dsl$compileCommandTo.call(dsl, {
              event: event,
              block: block,
              definition: definition,
              blockToExpression: blockToExpression
            });

            if (dslRes) {
              dslRes.errors = processErrors(block, dslRes.errors);
              return dslRes;
            }

            console.warn("unsupported block " + type, {
              block: block
            });
            return {
              cmd: undefined,
              errors: []
            };
          }
        }
    }
  };

  var nop = {
    type: "CallExpression",
    arguments: [],
    callee: toIdentifier("nop")
  };

  var addCommands = function addCommands(event, blocks, handler) {
    blocks === null || blocks === void 0 ? void 0 : blocks.forEach(function (child) {
      if (child) {
        try {
          var _blockToCommand = blockToCommand(event, child),
              cmd = _blockToCommand.cmd,
              errors = _blockToCommand.errors;

          if (cmd) handler.commands.push(cmd);
          errors.forEach(function (e) {
            return handler.errors.push(e);
          });
        } catch (e) {
          if (e instanceof EmptyExpression) {
            handler.commands.push({
              sourceId: child.id,
              type: "cmd",
              command: nop
            });
          } else {
            console.debug(e);
          }
        }
      }
    });
  };

  var handlers = workspace.blocks.map(function (top) {
    var _topErrors2;

    var type = top.type;
    var command;
    var topEvent;
    var topErrors;
    var topMeta = false;
    var definition = (0,toolbox/* resolveServiceBlockDefinition */.yn)(type);
    (0,utils/* assert */.hu)(!!definition);
    var template = definition.template,
        dslName = definition.dsl;
    var dsl = dslName && (dsls === null || dsls === void 0 ? void 0 : dsls.find(function (d) {
      return d.id === dslName;
    }));

    try {
      var _dsl$compileEventToVM, _topErrors;

      var _ref = (dsl === null || dsl === void 0 ? void 0 : (_dsl$compileEventToVM = dsl.compileEventToVM) === null || _dsl$compileEventToVM === void 0 ? void 0 : _dsl$compileEventToVM.call(dsl, {
        block: top,
        definition: definition,
        blockToExpression: blockToExpression
      })) || {},
          expression = _ref.expression,
          errors = _ref.errors,
          event = _ref.event,
          meta = _ref.meta;

      command = expression;
      topErrors = errors;
      topEvent = event;
      topMeta = meta; // if dsl didn't compile anything try again

      if (!command && !((_topErrors = topErrors) !== null && _topErrors !== void 0 && _topErrors.length)) {
        switch (template) {
          case "meta":
            {
              break;
            }

          default:
            {
              console.warn("unsupported handler template " + template + " for " + type, {
                top: top
              });
              break;
            }
        }
      }
    } catch (e) {
      console.debug(e);

      if (e instanceof EmptyExpression) {
        return undefined;
      } else {
        throw e;
      }
    } // nothing to compile here


    if (!command && !((_topErrors2 = topErrors) !== null && _topErrors2 !== void 0 && _topErrors2.length)) return undefined;
    var handler = {
      commands: [{
        sourceId: top.id,
        type: "cmd",
        command: command
      }],
      errors: topErrors || [],
      meta: !!topMeta
    };
    addCommands(topEvent, top.children, handler);
    return handler;
  }).filter(function (handler) {
    return !!handler;
  });
  return {
    roles: roles,
    handlers: handlers
  };
}
;// CONCATENATED MODULE: ./src/components/vm/dsl/servicesdsl.ts


















function isBooleanField(field) {
  return field.type === "bool";
}

function isStringField(field) {
  return field.type === "string";
}

function toBlocklyType(field) {
  return isBooleanField(field) ? "Boolean" : isStringField(field) ? "String" : (0,jdspec/* isNumericType */.FV)(field) ? "Number" : undefined;
}

function enumInfo(srv, field) {
  var _srv$enums;

  var e = (_srv$enums = srv.enums) === null || _srv$enums === void 0 ? void 0 : _srv$enums[field.type];
  return e;
}

var ignoredServices = [constants/* SRV_CONTROL */.gm9, constants/* SRV_LOGGER */.w9j, constants/* SRV_ROLE_MANAGER */.igi, constants/* SRV_PROTO_TEST */.$Bn, constants/* SRV_SETTINGS */.B9b, constants/* SRV_BOOTLOADER */.PWm];
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
      return (0,jdom_spec/* isSensor */.rq)(srv) ? sensorColor : otherColor;
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
        type: ServoAngleField.SHADOW.type
      }
    }, {
      serviceClass: constants/* SRV_BUZZER */.J1$,
      kind: "command",
      identifier: constants/* BuzzerCmd.PlayNote */.Rv2.PlayNote,
      field: "frequency",
      shadow: {
        kind: "block",
        type: NoteField.SHADOW.type
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

    var allServices = (0,jdom_spec/* serviceSpecifications */.Le)();
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
        return (0,jdom_spec/* isRegister */.x5)(pkt) && !pkt.lowLevel && includedRegisters.indexOf(pkt.identifier) > -1;
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
          return (0,jdom_spec/* isEvent */.cO)(pkt) && !pkt.lowLevel && ignoredEvents.indexOf(pkt.identifier) < 0;
        })
      };
    }).filter(function (kv) {
      return !!kv.events.length;
    });
    var commands = (0,utils/* arrayConcatMany */.ue)(this.supportedServices.map(function (service) {
      return service.packets.filter(function (pkt) {
        return (0,jdom_spec/* isCommand */.ao)(pkt) && !pkt.lowLevel && fieldsSupported(pkt);
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
        message0: "send %1 key %2",
        args0: [fieldVariable(service), {
          type: KeyboardKeyField.KEY,
          name: "combo"
        }],
        colour: serviceColor(service),
        inputsInline: true,
        previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        tooltip: "Send a keyboard key combo",
        helpUrl: serviceHelp(service),
        service: service,
        expression: "role.key(combo.selectors, combo.modifiers)",
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
            type: LEDColorField.SHADOW.type
          },
          speed: {
            kind: "block",
            type: "jacdac_ratio",
            shadow: true
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
          type: LEDMatrixField.KEY,
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
        return (0,jdom_spec/* isEvent */.cO)(pkt) && ignoredEvents.indexOf(pkt.identifier) < 0;
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
    this._serviceBlocks = [].concat((0,toConsumableArray/* default */.Z)(eventBlocks), (0,toConsumableArray/* default */.Z)(registerChangeByEventBlocks), (0,toConsumableArray/* default */.Z)(registerSimplesGetBlocks), (0,toConsumableArray/* default */.Z)(registerEnumGetBlocks), (0,toConsumableArray/* default */.Z)(registerNumericsGetBlocks), (0,toConsumableArray/* default */.Z)(registerSetBlocks), (0,toConsumableArray/* default */.Z)(customBlockDefinitions), (0,toConsumableArray/* default */.Z)(commandBlocks)); // generate accessor blocks for event data with numbers

    this._eventFieldBlocks = (0,utils/* arrayConcatMany */.ue)(events.map(function (_ref17) {
      var service = _ref17.service,
          events = _ref17.events;
      return events.filter(function (event) {
        return event.fields.filter(jdspec/* isNumericType */.FV).length > 0;
      }).map(function (event) {
        return {
          service: service,
          event: event
        };
      }).map(function (_ref18) {
        var service = _ref18.service,
            event = _ref18.event;
        return {
          kind: "block",
          type: "jacdac_event_field_" + service.shortId + "_" + event.name,
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
          output: "Number",
          template: "event_field"
        };
      });
    }));
    this._runtimeBlocks = [{
      kind: "block",
      type: toolbox/* CONNECTION_BLOCK */.CW,
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
        options: [["connected", "connected"], ["disconnected", "disconnected"]]
      }],
      inputsInline: true,
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      colour: commandColor,
      tooltip: "Runs code when a role is connected or disconnected",
      helpUrl: "",
      template: "connection"
    }, {
      kind: "block",
      type: toolbox/* CONNECTED_BLOCK */.rF,
      message0: "%1 connected",
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
      template: "connected"
    }, {
      kind: "block",
      type: toolbox/* SET_STATUS_LIGHT_BLOCK */.OU,
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
          type: LEDColorField.SHADOW.type
        }
      },
      inputsInline: true,
      previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      colour: commandColor,
      tooltip: "Sets the color on the status light",
      helpUrl: ""
    }];
    return [].concat((0,toConsumableArray/* default */.Z)(this._serviceBlocks), (0,toConsumableArray/* default */.Z)(this._eventFieldBlocks), (0,toConsumableArray/* default */.Z)(this._runtimeBlocks));
  };

  _proto.createCategory = function createCategory(options) {
    var _source$blocks,
        _this = this;

    var theme = options.theme,
        program = options.program,
        source = options.source,
        liveServices = options.liveServices;
    var serviceColor = this.createServiceColor(theme);
    var blockServices = (program === null || program === void 0 ? void 0 : program.roles.map(function (r) {
      return r.serviceShortId;
    })) || (source === null || source === void 0 ? void 0 : source.variables.map(function (v) {
      return v.type;
    })) || [];
    var usedEvents = new Set(source === null || source === void 0 ? void 0 : (_source$blocks = source.blocks) === null || _source$blocks === void 0 ? void 0 : _source$blocks.map(function (block) {
      return {
        block: block,
        definition: (0,toolbox/* resolveServiceBlockDefinition */.yn)(block.type)
      };
    }).filter(function (_ref19) {
      var definition = _ref19.definition;
      return definition.template === "event";
    }).map(function (_ref20) {
      var block = _ref20.block,
          definition = _ref20.definition;
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
    }).map(function (_ref21) {
      var service = _ref21.service,
          serviceBlocks = _ref21.serviceBlocks;
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
      name: "Services",
      colour: commandColor,
      contents: [{
        kind: "block",
        type: toolbox/* CONNECTION_BLOCK */.CW
      }, {
        kind: "block",
        type: toolbox/* CONNECTED_BLOCK */.rF
      }, {
        kind: "block",
        type: toolbox/* SET_STATUS_LIGHT_BLOCK */.OU,
        values: {
          color: {
            kind: "block",
            type: LEDColorField.SHADOW.type
          }
        }
      }]
    };
    return [].concat((0,toConsumableArray/* default */.Z)(servicesCategories), [commonCategory, {
      kind: "sep"
    }]);
  };

  _proto.compileEventToVM = function compileEventToVM(options) {
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
          return {
            expression: {
              type: "CallExpression",
              arguments: [toMemberExpression(role.toString(), eventName.toString())],
              callee: toIdentifier("awaitEvent")
            },
            event: {
              role: role.toString(),
              event: eventName.toString()
            }
          };
        }

      case "register_change_event":
        {
          var _role = inputs[0].fields["role"].value;
          var _ref22 = definition,
              register = _ref22.register;

          var _blockToExpression = blockToExpression(undefined, inputs[0].child),
              expr = _blockToExpression.expr,
              errors = _blockToExpression.errors;

          return {
            expression: {
              type: "CallExpression",
              arguments: [toMemberExpression(_role.toString(), register.name), expr],
              callee: toIdentifier("awaitChange")
            },
            errors: errors
          };
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
          var _ref23 = definition,
              register = _ref23.register;
          var role = inputs[0].fields["role"].value;
          var field = inputs[0].fields["field"];
          return {
            expr: toMemberExpression(role, field ? toMemberExpression(register.name, field.value) : register.name),
            errors: []
          };
        }

      case "event_field":
        {
          var _ref24 = definition,
              eventInfo = _ref24.event;
          var errors = [];

          if (event.event !== eventInfo.name) {
            errors.push({
              sourceId: id,
              message: "Event " + eventInfo.name + " is not available in this handler."
            });
          }

          var _field = inputs[0].fields["field"];
          return {
            expr: toMemberExpression(event.role, toMemberExpression(event.event, _field.value)),
            errors: errors
          };
        }

      default:
        return undefined;
    }
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
          var _ref25 = definition,
              register = _ref25.register;

          var _blockToExpression2 = blockToExpression(event, inputs[0].child),
              expr = _blockToExpression2.expr,
              errors = _blockToExpression2.errors;

          var role = inputs[0].fields.role.value;
          return {
            cmd: makeVMBase(block, {
              type: "CallExpression",
              arguments: [toMemberExpression(role, register.name), expr],
              callee: toIdentifier("writeRegister")
            }),
            errors: errors
          };
        }

      case "command":
        {
          var _ref26 = definition,
              serviceCommand = _ref26.command;
          var _role2 = inputs[0].fields.role.value;
          var exprsErrors = inputs.map(function (a) {
            return blockToExpression(event, a.child);
          });
          return {
            cmd: makeVMBase(block, {
              type: "CallExpression",
              arguments: exprsErrors.map(function (p) {
                return p.expr;
              }),
              callee: toMemberExpression(_role2, serviceCommand.name)
            }),
            errors: exprsErrors.flatMap(function (p) {
              return p.errors;
            })
          };
        }
    }

    return undefined;
  };

  return ServicesBlockDomainSpecificLanguage;
}();
var servicesDSL = new ServicesBlockDomainSpecificLanguage();
/* harmony default export */ var servicesdsl = (servicesDSL);
;// CONCATENATED MODULE: ./src/components/vm/dsl/toolsdsl.ts







var colour = "#888";
var toolsDSL = {
  id: "tools",
  createBlocks: function createBlocks() {
    return [{
      kind: "block",
      type: toolbox/* TWIN_BLOCK */.Zt,
      message0: "view %1 %2 %3",
      args0: [{
        type: "field_variable",
        name: "role",
        variable: "none",
        variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(servicesdsl.supportedServices.map(function (service) {
          return service.shortId;
        }))),
        defaultType: "client"
      }, {
        type: "input_dummy"
      }, {
        type: TwinField.KEY,
        name: "twin"
      }],
      colour: colour,
      inputsInline: false,
      tooltip: "Twin of the selected service",
      helpUrl: "",
      template: "meta"
    }, {
      kind: "block",
      type: toolbox/* INSPECT_BLOCK */.Xd,
      message0: "inspect %1 %2 %3",
      args0: [{
        type: "field_variable",
        name: "role",
        variable: "none",
        variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(servicesdsl.supportedServices.map(function (service) {
          return service.shortId;
        }))),
        defaultType: "client"
      }, {
        type: "input_dummy"
      }, {
        type: JDomTreeField.KEY,
        name: "twin"
      }],
      colour: colour,
      inputsInline: false,
      tooltip: "Inspect a service",
      helpUrl: "",
      template: "meta"
    }, {
      kind: "block",
      type: toolbox/* WATCH_BLOCK */.HN,
      message0: "watch %1 %2",
      args0: [{
        type: "input_value",
        name: "value",
        check: ["Number", "Boolean", "String"]
      }, {
        type: WatchValueField.KEY,
        name: "watch"
      }],
      colour: colour,
      inputsInline: true,
      tooltip: "Watch a value in the editor",
      helpUrl: ""
    }];
  },
  createCategory: function createCategory() {
    return [{
      kind: "category",
      name: "Tools",
      colour: colour,
      contents: [{
        kind: "block",
        type: toolbox/* WATCH_BLOCK */.HN
      }, {
        kind: "block",
        type: toolbox/* TWIN_BLOCK */.Zt
      }, {
        kind: "block",
        type: toolbox/* INSPECT_BLOCK */.Xd
      }]
    }];
  },
  compileEventToVM: function compileEventToVM(_ref) {
    var block = _ref.block,
        blockToExpression = _ref.blockToExpression;
    var type = block.type;

    if (type === toolbox/* WATCH_BLOCK */.HN) {
      var inputs = block.inputs;

      var _blockToExpression = blockToExpression(undefined, inputs[0].child),
          expr = _blockToExpression.expr,
          errors = _blockToExpression.errors;

      return {
        expression: {
          type: "CallExpression",
          arguments: [expr],
          callee: toIdentifier("watch")
        },
        errors: errors,
        meta: true
      };
    }

    return undefined;
  }
};
/* harmony default export */ var toolsdsl = (toolsDSL);
;// CONCATENATED MODULE: ./src/components/vm/dsl/azureiothubdsl.ts


var azureiothubdsl_colour = "#8a57c2";

var AzureIoTHubBlockDomainSpecificLanguage = /*#__PURE__*/function () {
  function AzureIoTHubBlockDomainSpecificLanguage() {
    this.id = "azureiothub";
  }

  var _proto = AzureIoTHubBlockDomainSpecificLanguage.prototype;

  _proto.createBlocks = function createBlocks() {
    return this._blocks = [{
      kind: "block",
      type: "device_twin_receive_telemetry",
      message0: "on receive cloud-to-device message",
      args0: [],
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      colour: azureiothubdsl_colour
    }, {
      kind: "block",
      type: "device_twin_receive_telemetry_number",
      message0: "received number %1",
      args0: [{
        type: "field_input",
        name: "name",
        text: "value"
      }],
      output: "Number",
      colour: azureiothubdsl_colour
    }, {
      kind: "block",
      type: "device_twin_receive_telemetry_string",
      message0: "received string %1",
      args0: [{
        type: "field_input",
        name: "name",
        text: "value"
      }],
      output: "String",
      colour: azureiothubdsl_colour
    }, {
      kind: "block",
      type: "device_twin_send_telemetry",
      message0: "send device-to-cloud message %1 %2",
      args0: [{
        type: "input_dummy"
      }, {
        type: "input_statement",
        name: "fields"
      }],
      previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      colour: azureiothubdsl_colour
    }, {
      kind: "block",
      type: "device_twin_send_telemetry_value",
      message0: "with %1 = %2",
      args0: [{
        type: "field_input",
        name: "name",
        text: "value"
      }, {
        type: "input_value",
        name: "value",
        check: toolbox/* PRIMITIVE_TYPES */.eg
      }],
      previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      colour: azureiothubdsl_colour
    }];
  };

  _proto.createCategory = function createCategory() {
    return [{
      kind: "category",
      name: "Azure IoT Hub",
      colour: azureiothubdsl_colour,
      contents: (0,toConsumableArray/* default */.Z)(this._blocks.map(function (_ref) {
        var type = _ref.type;
        return {
          kind: "block",
          type: type
        };
      }))
    }];
  };

  return AzureIoTHubBlockDomainSpecificLanguage;
}();

var azureIoTHubDSL = new AzureIoTHubBlockDomainSpecificLanguage();
/* harmony default export */ var azureiothubdsl = (azureIoTHubDSL);
// EXTERNAL MODULE: ./jacdac-ts/src/azure-iot/dtdl.ts
var dtdl = __webpack_require__(2864);
;// CONCATENATED MODULE: ./src/components/vm/dsl/devicetwindsl.ts



var DEVICE_TWIN_SEND_TELEMETRY = "device_twin_send_telemetry";
var DEVICE_TWIN_DEFINITION_BLOCK = "device_twin_definition";
var DEVICE_TWIN_PROPERTY_BLOCK = "device_twin_property";
var DEVICE_TWIN_PROPERTY_TYPE = "DeviceTwinProperty";
var DEVICE_TWIN_VALUE_TYPE = "DeviceTwinValue";
var devicetwindsl_colour = "#843ed0";
var deviceTwinContentType = "DeviceTwinContent";
var deviceTwinCommonOptionType = "DeviceTwinCommonOption";
var deviceTwinPropertyOptionType = "DeviceTwinPropertyOption";
var deviceTwinStatementType = [deviceTwinContentType];
var deviceTwinCommonOptionStatementType = [deviceTwinCommonOptionType];
var deviceTwinPropertyOptionStatementType = [deviceTwinPropertyOptionType].concat(deviceTwinCommonOptionStatementType);

var DeviceTwinBlockDomainSpecificLanguage = /*#__PURE__*/function () {
  function DeviceTwinBlockDomainSpecificLanguage() {
    this.id = "devicetwin";
  }

  var _proto = DeviceTwinBlockDomainSpecificLanguage.prototype;

  _proto.createBlocks = function createBlocks() {
    return this._blocks = [{
      kind: "block",
      type: DEVICE_TWIN_DEFINITION_BLOCK,
      message0: "device twin",
      args0: [],
      inputsInline: true,
      nextStatement: deviceTwinStatementType,
      colour: devicetwindsl_colour
    }, {
      kind: "block",
      type: DEVICE_TWIN_PROPERTY_BLOCK,
      message0: "property %1 %2 %3",
      args0: [{
        type: "field_variable",
        name: "name",
        variable: "property 1",
        variableTypes: [DEVICE_TWIN_PROPERTY_TYPE],
        defaultType: DEVICE_TWIN_PROPERTY_TYPE
      }, {
        type: "input_dummy"
      }, {
        type: "input_statement",
        name: "options",
        check: deviceTwinPropertyOptionStatementType
      }],
      previousStatement: deviceTwinStatementType,
      nextStatement: deviceTwinStatementType,
      colour: devicetwindsl_colour,
      inputsInline: false
    }, // options
    {
      kind: "block",
      type: "device_twin_option_property_field",
      message0: "field %1 %2 %3",
      args0: [{
        type: "field_variable",
        name: "variable",
        variable: "value 1",
        variableTypes: [DEVICE_TWIN_VALUE_TYPE],
        defaultType: DEVICE_TWIN_VALUE_TYPE
      }, {
        type: "field_dropdown",
        name: "unit",
        options: (0,dtdl/* DTDLUnits */.d0)().map(function (unit) {
          return [unit, unit];
        })
      }, {
        type: "input_value",
        name: "value"
      }],
      previousStatement: deviceTwinCommonOptionStatementType,
      nextStatement: deviceTwinCommonOptionStatementType,
      colour: devicetwindsl_colour,
      inputsInline: false
    }, // events
    {
      kind: "block",
      type: "device_twin_property_change",
      message0: "on property %1 change",
      args0: [{
        type: "field_variable",
        name: "name",
        variable: "property 1",
        variableTypes: [DEVICE_TWIN_PROPERTY_TYPE],
        defaultType: DEVICE_TWIN_PROPERTY_TYPE
      }],
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      colour: devicetwindsl_colour
    }];
  };

  _proto.createCategory = function createCategory() {
    return [{
      kind: "category",
      name: "Device Twin",
      colour: devicetwindsl_colour,
      contents: (0,toConsumableArray/* default */.Z)(this._blocks.map(function (_ref) {
        var type = _ref.type;
        return {
          kind: "block",
          type: type
        };
      }))
    }];
  };

  return DeviceTwinBlockDomainSpecificLanguage;
}();

var deviceTwinDSL = new DeviceTwinBlockDomainSpecificLanguage();
/* harmony default export */ var devicetwindsl = (deviceTwinDSL);
;// CONCATENATED MODULE: ./src/components/vm/dsl/mathdsl.ts
var mathDSL = {
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
      style: "math_blocks"
    }, {
      kind: "block",
      type: "jacdac_math_random_range",
      message0: "random from %1 to %2",
      args0: [{
        type: "input_value",
        name: "min",
        check: "Number"
      }, {
        type: "input_value",
        name: "max",
        check: "Number"
      }],
      output: "Number",
      style: "math_blocks",
      inputsInline: true
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
      style: "math_blocks"
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
        type: "jacdac_math_random_range"
      }, {
        kind: "block",
        type: "jacdac_math_map"
      }, {
        kind: "block",
        type: "math_number"
      }]
    }];
  }
};
/* harmony default export */ var mathdsl = (mathDSL);
;// CONCATENATED MODULE: ./src/components/vm/dsl/logicdsl.ts
var logicDsl = {
  id: "logic",
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
  }
};
/* harmony default export */ var logicdsl = (logicDsl);
;// CONCATENATED MODULE: ./src/components/vm/dsl/variablesdsl.ts
var variablesDsl = {
  id: "variables",
  createCategory: function createCategory() {
    return [{
      kind: "category",
      name: "Variables",
      colour: "%{BKY_VARIABLES_HUE}",
      custom: "VARIABLE"
    }];
  }
};
/* harmony default export */ var variablesdsl = (variablesDsl);
;// CONCATENATED MODULE: ./src/components/vm/dsl/shadowdsl.ts


var builtins = {
  jacdac_on_off: function jacdac_on_off(block) {
    return block.getFieldValue("value") === "on";
  },
  jacdac_yes_no: function jacdac_yes_no(block) {
    return block.getFieldValue("value") === "on";
  },
  jacdac_time_picker: function jacdac_time_picker(block) {
    return Number(block.getFieldValue("value") || "0");
  },
  jacdac_angle: function jacdac_angle(block) {
    return Number(block.getFieldValue("value") || "0");
  },
  jacdac_percent: function jacdac_percent(block) {
    return Number(block.getFieldValue("value") || "0");
  },
  jacdac_ratio: function jacdac_ratio(block) {
    return Number(block.getFieldValue("value") || "0");
  }
};
var shadowDsl = {
  id: "shadow",
  createBlocks: function createBlocks() {
    return [].concat((0,toConsumableArray/* default */.Z)(fieldShadows()), [{
      kind: "block",
      type: "jacdac_on_off",
      message0: "%1",
      args0: [{
        type: "field_dropdown",
        name: "value",
        options: [["enabled", "on"], ["disabled", "off"]]
      }],
      style: "logic_blocks",
      output: "Boolean"
    }, {
      kind: "block",
      type: "jacdac_yes_no",
      message0: "%1",
      args0: [{
        type: "field_dropdown",
        name: "value",
        options: [["yes", "on"], ["no", "off"]]
      }],
      style: "logic_blocks",
      output: "Boolean"
    }, {
      kind: "block",
      type: "jacdac_time_picker",
      message0: "%1",
      args0: [{
        type: "field_dropdown",
        name: "value",
        options: [["0.1", "0.1"], ["1", "1"], ["5", "5"], ["30", "30"], ["60", "60"]]
      }],
      style: "math_blocks",
      output: "Number"
    }, {
      kind: "block",
      type: "jacdac_angle",
      message0: "%1",
      args0: [{
        type: "field_angle",
        name: "value",
        min: 0,
        max: 360,
        precision: 10
      }],
      style: "math_blocks",
      output: "Number"
    }, {
      kind: "block",
      type: "jacdac_percent",
      message0: "%1",
      args0: [{
        type: "field_slider",
        name: "value",
        min: 0,
        max: 100,
        precision: 1
      }],
      style: "math_blocks",
      output: "Number"
    }, {
      kind: "block",
      type: "jacdac_byte",
      message0: "%1",
      args0: [{
        type: "field_slider",
        name: "value",
        min: 0,
        max: 255,
        precision: 1
      }],
      style: "math_blocks",
      output: "Number"
    }, {
      kind: "block",
      type: "jacdac_ratio",
      message0: "%1",
      args0: [{
        type: "field_slider",
        name: "value",
        min: 0,
        max: 1,
        precision: 0.1
      }],
      style: "math_blocks",
      output: "Number"
    }, {
      kind: "block",
      type: "jacdac_color",
      message0: "%1",
      args0: [{
        type: "field_colour",
        name: "col",
        colour: "#ff0000",
        colourOptions: ["#ff0000", "#ff8000", "#ffff00", "#ff9da5", "#00ff00", "#b09eff", "#00ffff", "#007fff", "#65471f", "#0000ff", "#7f00ff", "#ff0080", "#ff00ff", "#ffffff", "#999999", "#000000"],
        columns: 4
      }],
      style: "math_blocks",
      output: "Color"
    }]);
  },
  blockToValue: function blockToValue(block) {
    var _builtins$block$type;

    return (_builtins$block$type = builtins[block.type]) === null || _builtins$block$type === void 0 ? void 0 : _builtins$block$type.call(builtins, block);
  }
};
/* harmony default export */ var shadowdsl = (shadowDsl);
;// CONCATENATED MODULE: ./src/components/vm/dsl/loopsdsl.ts



var loopsdsl_colour = "#4fbac9";
var loopsDsl = {
  id: "loops",
  createBlocks: function createBlocks() {
    return [{
      kind: "block",
      type: toolbox/* WAIT_BLOCK */.sX,
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
      type: toolbox/* REPEAT_EVERY_BLOCK */.BB,
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
      name: "Commands",
      order: 4,
      colour: loopsdsl_colour,
      contents: [{
        kind: "block",
        type: toolbox/* REPEAT_EVERY_BLOCK */.BB,
        values: {
          interval: {
            kind: "block",
            type: "jacdac_time_picker"
          }
        }
      }, {
        kind: "block",
        type: toolbox/* WAIT_BLOCK */.sX,
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

    if (type === toolbox/* REPEAT_EVERY_BLOCK */.BB) {
      var inputs = block.inputs;

      var _blockToExpression = blockToExpression(undefined, inputs[0].child),
          time = _blockToExpression.expr,
          errors = _blockToExpression.errors;

      return {
        expression: makeVMBase(block, {
          type: "CallExpression",
          arguments: [time],
          callee: toIdentifier("wait")
        }).command,
        errors: processErrors(block, errors)
      };
    }

    return undefined;
  },
  compileCommandToVM: function compileCommandToVM(_ref2) {
    var event = _ref2.event,
        block = _ref2.block,
        blockToExpression = _ref2.blockToExpression;
    var type = block.type;

    if (type === toolbox/* WAIT_BLOCK */.sX) {
      var inputs = block.inputs;
      {
        var _blockToExpression2 = blockToExpression(event, inputs[0].child),
            time = _blockToExpression2.expr,
            errors = _blockToExpression2.errors;

        return {
          cmd: makeVMBase(block, {
            type: "CallExpression",
            arguments: [time],
            callee: toIdentifier("wait")
          }),
          errors: processErrors(block, errors)
        };
      }
    }

    return undefined;
  }
};
/* harmony default export */ var loopsdsl = (loopsDsl);
;// CONCATENATED MODULE: ./src/components/vm/dsl/DslContext.tsx










var DslContext = /*#__PURE__*/(0,react.createContext)({
  dsls: []
});
DslContext.displayName = "DSL";
/* harmony default export */ var dsl_DslContext = (DslContext); // eslint-disable-next-line react/prop-types

var DslProvider = function DslProvider(_ref) {
  var children = _ref.children;
  var dsls = (0,react.useMemo)(function () {
    return [servicesdsl, azureiothubdsl, devicetwindsl, toolsdsl, loopsdsl, logicdsl, mathdsl, variablesdsl, shadowdsl];
  }, []);
  return /*#__PURE__*/react.createElement(DslContext.Provider, {
    value: {
      dsls: dsls
    }
  }, children);
};
;// CONCATENATED MODULE: ./src/components/vm/useToolbox.ts










// overrides blockly emboss filter for svg elements
(blockly_default()).BlockSvg.prototype.setHighlighted = function (highlighted) {
  if (!this.rendered) {
    return;
  }

  if (highlighted) {
    this.addSelect();
  } else {
    this.removeSelect();
  }
};

function loadBlocks(dsls, theme) {
  var blocks = (0,utils/* arrayConcatMany */.ue)(dsls.map(function (dsl) {
    var _dsl$createBlocks;

    return dsl === null || dsl === void 0 ? void 0 : (_dsl$createBlocks = dsl.createBlocks) === null || _dsl$createBlocks === void 0 ? void 0 : _dsl$createBlocks.call(dsl, {
      theme: theme
    }).map(function (b) {
      b.dsl = dsl.id; // ensure DSL is set

      return b;
    });
  }));
  console.log("blocks", {
    blocks: blocks
  }); // register field editors

  registerFields(); // re-register blocks with blocklys

  blocks.forEach(function (block) {
    return (blockly_default()).Blocks[block.type] = {
      jacdacDefinition: block,
      init: function init() {
        this.jsonInit(block);
      }
    };
  });
  return {
    blocks: blocks
  };
}

function patchCategoryJSONtoXML(cat) {
  var _cat$contents;

  if (cat.button) {
    if (!cat.contents) cat.contents = [];
    cat.contents.unshift(cat.button);
  }

  (_cat$contents = cat.contents) === null || _cat$contents === void 0 ? void 0 : _cat$contents.filter(function (node) {
    return node.kind === "block";
  }).map(function (node) {
    return node;
  }).filter(function (block) {
    var exists = (blockly_default()).Blocks[block.type];
    if (!exists && flags/* default.diagnostics */.Z.diagnostics) console.warn("block type '" + block.type + "' not found, consider refreshing page...");
    return !!block.values && exists;
  }) // avoid broken blocks
  .forEach(function (block) {
    // yup, this suck but we have to go through it
    block.blockxml = "<block type=\"" + block.type + "\">" + Object.keys(block.values).map(function (name) {
      var type = block.values[name].type;
      return "<value name=\"" + name + "\"><shadow type=\"" + type + "\" /></value>";
    }).join("\n") + "</block>";
    delete block.type;
  });
  return cat;
}

function useToolbox(props) {
  var source = props.source,
      program = props.program;
  var liveServices = (0,useServices/* default */.Z)({
    specification: true
  });

  var _useContext = (0,react.useContext)(dsl_DslContext),
      dsls = _useContext.dsls;

  var theme = (0,useTheme/* default */.Z)();
  (0,react.useMemo)(function () {
    return loadBlocks(dsls, theme);
  }, [theme, dsls]);
  var dslsCategories = (0,utils/* arrayConcatMany */.ue)(dsls.map(function (dsl) {
    var _dsl$createCategory;

    return dsl === null || dsl === void 0 ? void 0 : (_dsl$createCategory = dsl.createCategory) === null || _dsl$createCategory === void 0 ? void 0 : _dsl$createCategory.call(dsl, {
      theme: theme,
      source: source,
      program: program,
      liveServices: liveServices
    });
  })).filter(function (cat) {
    return !!cat;
  }).sort(function (l, r) {
    return -(l.order - r.order);
  });
  var toolboxConfiguration = {
    kind: "categoryToolbox",
    contents: dslsCategories.filter(function (cat) {
      return !!cat;
    }).map(function (node) {
      return node.kind === "category" ? patchCategoryJSONtoXML(node) : node;
    })
  };
  return {
    toolboxConfiguration: toolboxConfiguration,
    newProjectXml: toolbox/* NEW_PROJET_XML */.Uz
  };
}
function useToolboxButtons(workspace, toolboxConfiguration) {
  // track workspace changes and update callbacks
  (0,react.useEffect)(function () {
    if (!workspace) return; // collect buttons

    var buttons = toolboxConfiguration === null || toolboxConfiguration === void 0 ? void 0 : toolboxConfiguration.contents // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map(function (cat) {
      return cat.button;
    }).filter(function (btn) {
      return !!btn;
    });
    buttons === null || buttons === void 0 ? void 0 : buttons.forEach(function (button) {
      return workspace.registerButtonCallback(button.callbackKey, function () {
        return blockly_default().Variables.createVariableButtonHandler(workspace, null, button.service.shortId);
      });
    });
  }, [workspace, JSON.stringify(toolboxConfiguration)]);
}
// EXTERNAL MODULE: ./src/components/vm/BlocklyModalDialogs.tsx
var BlocklyModalDialogs = __webpack_require__(50769);
// EXTERNAL MODULE: ./src/components/vm/jsongenerator.ts
var jsongenerator = __webpack_require__(8374);
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(91350);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./src/components/vm/useBlocklyEvents.ts
var useBlocklyEvents = __webpack_require__(52152);
// EXTERNAL MODULE: ./src/components/vm/useBlocklyPlugins.ts + 8 modules
var useBlocklyPlugins = __webpack_require__(30567);
;// CONCATENATED MODULE: ./src/components/vm/VMBlockEditor.tsx



















var VMBlockEditor_useStyles = (0,makeStyles/* default */.Z)(function (theme) {
  return (0,createStyles/* default */.Z)({
    editor: {
      height: "calc(100vh - " + (flags/* default.diagnostics */.Z.diagnostics ? 15 : 10) + "rem)",
      "& .blocklyTreeLabel": {
        fontFamily: theme.typography.fontFamily
      },
      "& .blocklyText": {
        fontWeight: "normal !important",
        fontFamily: theme.typography.fontFamily + " !important"
      }
    }
  });
});
function VMBlockEditor(props) {
  var className = props.className,
      onXmlChange = props.onXmlChange,
      onJSONChange = props.onJSONChange,
      onVMProgramChange = props.onVMProgramChange,
      initialXml = props.initialXml,
      runner = props.runner,
      roleManager = props.roleManager,
      workspaceRef = props.workspaceRef;

  var _useContext = (0,react.useContext)(dsl_DslContext),
      dsls = _useContext.dsls;

  var classes = VMBlockEditor_useStyles();

  var _useContext2 = (0,react.useContext)(DarkModeContext/* default */.Z),
      darkMode = _useContext2.darkMode;

  var _useContext3 = (0,react.useContext)(AppContext/* default */.ZP),
      setError = _useContext3.setError;

  var _useState = (0,react.useState)(),
      source = _useState[0],
      setSource = _useState[1];

  var _useState2 = (0,react.useState)(),
      program = _useState2[0],
      setProgram = _useState2[1];

  var _useToolbox = useToolbox({
    source: source,
    program: program
  }),
      toolboxConfiguration = _useToolbox.toolboxConfiguration,
      newProjectXml = _useToolbox.newProjectXml;

  var theme = darkMode === "dark" ? theme_dark_src/* default */.Z : src/* default */.Z;
  var gridColor = darkMode === "dark" ? "#555" : "#ccc"; // ReactBlockly
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var blocklyRef = (0,react.useRef)(null);

  var _ref = (0,dist/* useBlocklyWorkspace */.JP)({
    ref: blocklyRef,
    toolboxConfiguration: toolboxConfiguration,
    workspaceConfiguration: {
      collapse: false,
      disable: false,
      comments: false,
      css: true,
      trashcan: false,
      sounds: false,
      grid: {
        spacing: 25,
        length: 1,
        colour: gridColor,
        snap: true
      },
      renderer: "zelos",
      theme: theme,
      oneBasedIndex: false,
      move: {
        scrollbars: {
          vertical: true,
          horizontal: true
        }
      },
      media: (0,gatsby_browser_entry.withPrefix)("blockly/media/"),
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.1,
        scaleSpeed: 1.2,
        pinch: true
      }
    },
    initialXml: initialXml || newProjectXml,
    onImportXmlError: function onImportXmlError() {
      return setError("Error loading blocks...");
    }
  }),
      workspace = _ref.workspace,
      xml = _ref.xml; // store ref


  (0,react.useEffect)(function () {
    if (workspaceRef) {
      workspaceRef.current = workspace;
      return function () {
        return workspaceRef.current = undefined;
      };
    }
  }, [workspace, workspaceRef]); // surface state to react

  (0,react.useEffect)(function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var ws = workspace;
    if (ws) ws.jacdacServices = new WorkspaceContext/* WorkspaceServices */.yq();
  }, [workspace]);
  (0,react.useEffect)(function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var ws = workspace;
    var services = ws === null || ws === void 0 ? void 0 : ws.jacdacServices;

    if (services) {
      services.runner = runner;
    }
  }, [workspace, runner]);
  (0,react.useEffect)(function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var ws = workspace;
    var services = ws === null || ws === void 0 ? void 0 : ws.jacdacServices;

    if (services) {
      services.roleManager = roleManager;
    }
  }, [workspace, roleManager]); // plugins

  (0,useBlocklyPlugins/* default */.Z)(workspace);
  (0,useBlocklyEvents/* default */.Z)(workspace);
  useToolboxButtons(workspace, toolboxConfiguration); // blockly did a change

  (0,react.useEffect)(function () {
    if (!workspace || workspace.isDragging()) return;
    onXmlChange === null || onXmlChange === void 0 ? void 0 : onXmlChange(xml); // save json

    if (onJSONChange || onVMProgramChange) {
      // emit json
      var newSource = (0,jsongenerator/* domToJSON */.iL)(workspace, dsls);

      if (JSON.stringify(newSource) !== JSON.stringify(source)) {
        setSource(newSource);
        onJSONChange === null || onJSONChange === void 0 ? void 0 : onJSONChange(newSource);

        if (onVMProgramChange) {
          try {
            var newProgram = workspaceJSONToVMProgram(newSource, dsls);

            if (JSON.stringify(newProgram) !== JSON.stringify(program)) {
              setProgram(newProgram);
              onVMProgramChange(newProgram);
            }
          } catch (e) {
            console.error(e);
            onVMProgramChange(undefined);
          }
        }
      }
    }
  }, [dsls, workspace, xml]); // apply errors

  (0,react.useEffect)(function () {
    if (!workspace) return;
    var allErrors = (0,utils/* toMap */.qL)((0,utils/* arrayConcatMany */.ue)(program === null || program === void 0 ? void 0 : program.handlers.map(function (h) {
      var _h$errors;

      return (_h$errors = h.errors) === null || _h$errors === void 0 ? void 0 : _h$errors.filter(function (e) {
        return !!e.sourceId;
      });
    })) || [], function (e) {
      return e.sourceId;
    }, function (e) {
      return e.message;
    });
    workspace.getAllBlocks(false).forEach(function (b) {
      return b.setWarningText(allErrors[b.id] || null);
    });
  }, [workspace, program]); // resize blockly

  (0,react.useEffect)(function () {
    var observer = new ResizeObserver(function () {
      return workspace === null || workspace === void 0 ? void 0 : workspace.resize();
    });
    observer.observe(blocklyRef.current);
    return function () {
      return observer.disconnect();
    };
  }, [workspace, blocklyRef.current]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)(classes.editor, className),
    ref: blocklyRef
  }), /*#__PURE__*/react.createElement(BlocklyModalDialogs/* default */.Z, null));
}
// EXTERNAL MODULE: ./src/components/useLocalStorage.ts
var useLocalStorage = __webpack_require__(86581);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(25342);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(75167);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/environment.ts
var environment = __webpack_require__(96699);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/expr.ts
var vm_expr = __webpack_require__(18108);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/eventsource.ts
var eventsource = __webpack_require__(45484);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/utils.ts
var vm_utils = __webpack_require__(94624);
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

              return _context.abrupt("return", VMInternalStatus.Running);

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
              return _context.abrupt("return", VMInternalStatus.Completed);

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
              return _context.abrupt("return", VMInternalStatus.Completed);

            case 19:
              throw new VMJumpException(args[0].name);

            case 20:
              return _context.abrupt("return", VMInternalStatus.Completed);

            case 21:
              event = args[0];

              if (!this.env.hasEvent(event)) {
                _context.next = 24;
                break;
              }

              return _context.abrupt("return", this.checkExpression(args[1]) ? VMInternalStatus.Completed : VMInternalStatus.Running);

            case 24:
              return _context.abrupt("return", VMInternalStatus.Running);

            case 25:
              return _context.abrupt("return", this.checkExpression(args[0]) ? VMInternalStatus.Completed : VMInternalStatus.Running);

            case 26:
              regValue = this.evalExpression(args[0]);

              if (!(this.inst === "awaitRegister" && regValue !== this._regSaved || this.inst === "awaitChange" && (this._changeSaved === 0 && regValue !== this._regSaved || this._changeSaved < 0 && regValue <= this._regSaved + this._changeSaved || this._changeSaved > 0 && regValue >= this._regSaved + this._changeSaved))) {
                _context.next = 29;
                break;
              }

              return _context.abrupt("return", VMInternalStatus.Completed);

            case 29:
              return _context.abrupt("return", VMInternalStatus.Running);

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
              return _context.abrupt("return", VMInternalStatus.Completed);

            case 42:
              _expr3 = new vm_expr/* VMExprEvaluator */.W(function (e) {
                return _this4.env.lookup(e);
              }, undefined);
              _ev = _expr3.eval(args[0]);
              this.parent.watch((_this$gc = this.gc) === null || _this$gc === void 0 ? void 0 : _this$gc.sourceId, _ev);
              return _context.abrupt("return", VMInternalStatus.Completed);

            case 46:
              return _context.abrupt("return", VMInternalStatus.Stopped);

            case 47:
              return _context.abrupt("return", VMInternalStatus.Completed);

            case 48:
              _expr4 = new vm_expr/* VMExprEvaluator */.W(function (e) {
                return _this4.env.lookup(e);
              }, undefined);
              _ev2 = _expr4.eval(args[0]);
              throw new VMTimerException(_ev2 * 1000);

            case 51:
              return _context.abrupt("return", VMInternalStatus.Completed);

            case 52:
              return _context.abrupt("return", VMInternalStatus.Completed);

            case 53:
              throw new vm_utils/* VMError */.L1(events/* VMCode.InternalError */.H.InternalError, "Unknown instruction " + this.inst);

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

  _proto2.stepAsync = /*#__PURE__*/function () {
    var _stepAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this.status === VMInternalStatus.Running)) {
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
  } // run-to-completion semantics (true if breakpoint)
  ;

  _proto3.runToCompletionAsync =
  /*#__PURE__*/
  function () {
    var _runToCompletionAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3(singleStep) {
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (singleStep === void 0) {
                singleStep = false;
              }

              if (!(this.stopped || !this.handler.commands.length)) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt("return", undefined);

            case 3:
              if (this.commandIndex === undefined) {
                this.commandIndex = 0;
              }

              _context3.next = 6;
              return this.singleStepCheckBreakAsync(singleStep);

            case 6:
              _context3.t0 = _context3.sent;

              if (!_context3.t0) {
                _context3.next = 9;
                break;
              }

              _context3.t0 = !singleStep;

            case 9:
              if (!_context3.t0) {
                _context3.next = 11;
                break;
              }

              return _context3.abrupt("return", this._currentCommand);

            case 11:
              if (!this.next()) {
                _context3.next = 21;
                break;
              }

              _context3.t1 = singleStep;

              if (_context3.t1) {
                _context3.next = 17;
                break;
              }

              _context3.next = 16;
              return this.singleStepCheckBreakAsync();

            case 16:
              _context3.t1 = _context3.sent;

            case 17:
              if (!_context3.t1) {
                _context3.next = 19;
                break;
              }

              return _context3.abrupt("return", this._currentCommand);

            case 19:
              _context3.next = 11;
              break;

            case 21:
              return _context3.abrupt("return", undefined);

            case 22:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function runToCompletionAsync(_x) {
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
      throw new vm_utils/* VMError */.L1(events/* VMCode.InternalError */.H.InternalError, "ite not compiled away");
    }

    return cmd;
  };

  _proto3.singleStepCheckBreakAsync = /*#__PURE__*/function () {
    var _singleStepCheckBreakAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee4(singleStep) {
      var _this$_currentCommand;

      var sid;
      return regenerator_default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (singleStep === void 0) {
                singleStep = false;
              }

              this.trace("step begin");
              sid = (_this$_currentCommand = this._currentCommand.gc) === null || _this$_currentCommand === void 0 ? void 0 : _this$_currentCommand.sourceId;
              _context4.t0 = !singleStep;

              if (!_context4.t0) {
                _context4.next = 8;
                break;
              }

              _context4.next = 7;
              return this.parent.breakpointOnAsync(sid);

            case 7:
              _context4.t0 = _context4.sent;

            case 8:
              if (!_context4.t0) {
                _context4.next = 10;
                break;
              }

              return _context4.abrupt("return", true);

            case 10:
              _context4.next = 12;
              return this.singleStepAsync();

            case 12:
              this.trace("step end");
              return _context4.abrupt("return", false);

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function singleStepCheckBreakAsync(_x2) {
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
              this.parent.emit(events/* VM_EVENT */.J, events/* VMCode.CommandStarted */.H.CommandStarted, sid);
              _context5.prev = 2;
              _context5.next = 5;
              return this._currentCommand.stepAsync();

            case 5:
              _context5.next = 25;
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
              this._currentCommand.status = VMInternalStatus.Completed;
              _context5.next = 25;
              break;

            case 16:
              if (!(_context5.t0 instanceof VMTimerException)) {
                _context5.next = 23;
                break;
              }

              vmt = _context5.t0;
              this._currentCommand.status = VMInternalStatus.Sleeping;
              _context5.next = 21;
              return this.parent.sleepAsync(this, vmt.ms);

            case 21:
              _context5.next = 25;
              break;

            case 23:
              this.emit(events/* VM_EVENT */.J, events/* VMCode.CommandFailed */.H.CommandFailed, this._currentCommand.gc.sourceId);
              throw _context5.t0;

            case 25:
              if (this._currentCommand.status === VMInternalStatus.Completed) this.parent.emit(events/* VM_EVENT */.J, events/* VMCode.CommandCompleted */.H.CommandCompleted, this._currentCommand.gc.sourceId);
              if (this._currentCommand.status === VMInternalStatus.Stopped) this.stopped = true;

            case 27:
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
      return this.stopped ? VMInternalStatus.Stopped : this._commandIndex === undefined ? VMInternalStatus.Ready : this._currentCommand.status;
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
    _this6._breaks = {};
    _this6._in_run = false;
    _this6.bus = bus;
    _this6.roleManager = roleManager;
    _this6.program = program;
    var compiled = compileProgram(program);

    var _checkProgram = checkProgram(compiled),
        registers = _checkProgram.registers,
        events = _checkProgram.events,
        errors = _checkProgram.errors;

    _this6._roles = compiled.roles;

    if (errors.length) {
      console.warn("ERRORS", errors);
    } // data structures for running program


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

    _this6._waitRunMutex = new vm_utils/* Mutex */.WU();
    _this6._breaksMutex = new vm_utils/* Mutex */.WU();
    _this6._sleepMutex = new vm_utils/* Mutex */.WU(); // run on any change to environment

    _this6.mount(_this6._env.subscribe(constants/* CHANGE */.Ver, function () {
      _this6.waitingToRunning();
    }));

    _this6.mount(_this6.subscribe(VM_WAKE_SLEEPER, /*#__PURE__*/function () {
      var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee6(h) {
        return regenerator_default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this6.wakeSleeper(h);

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }()));

    _this6.initializeRoleManagement();

    return _this6;
  } // control of VM


  var _proto4 = VMProgramRunner.prototype;

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
  } // watch statement - watch an expression
  ;

  _proto4.watch = function watch(sourceId, value) {
    var oldValue = this._watch[sourceId];

    if (oldValue !== value) {
      this._watch[sourceId] = value;
      this.emit(events/* VM_EVENT */.J, events/* VMCode.WatchChange */.H.WatchChange, sourceId);
    }
  };

  _proto4.lookupWatch = function lookupWatch(sourceId) {
    return this._watch[sourceId];
  } // breakpoints
  ;

  _proto4.setBreakpointsAsync =
  /*#__PURE__*/
  function () {
    var _setBreakpointsAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee8(breaks) {
      var _this7 = this;

      return regenerator_default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this._breaksMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee7() {
                return regenerator_default().wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _this7._breaks = {};
                        breaks.forEach(function (b) {
                          _this7._breaks[b] = true;
                        });

                      case 2:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              })));

            case 2:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function setBreakpointsAsync(_x4) {
      return _setBreakpointsAsync.apply(this, arguments);
    }

    return setBreakpointsAsync;
  }();

  _proto4.clearBreakpointsAsync = /*#__PURE__*/function () {
    var _clearBreakpointsAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee10() {
      var _this8 = this;

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
                        _this8._breaks = {};

                      case 1:
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

    function clearBreakpointsAsync() {
      return _clearBreakpointsAsync.apply(this, arguments);
    }

    return clearBreakpointsAsync;
  }();

  _proto4.breakpointOnAsync = /*#__PURE__*/function () {
    var _breakpointOnAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee12(id) {
      var _this9 = this;

      var ret;
      return regenerator_default().wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              ret = false;
              _context12.next = 3;
              return this._breaksMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee11() {
                var _this9$_breaks;

                return regenerator_default().wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        ret = !!((_this9$_breaks = _this9._breaks) !== null && _this9$_breaks !== void 0 && _this9$_breaks[id]);

                      case 1:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11);
              })));

            case 3:
              return _context12.abrupt("return", ret);

            case 4:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function breakpointOnAsync(_x5) {
      return _breakpointOnAsync.apply(this, arguments);
    }

    return breakpointOnAsync;
  }() // timers
  ;

  _proto4.sleepAsync =
  /*#__PURE__*/
  function () {
    var _sleepAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee14(handlerRunner, ms, handler) {
      var _this10 = this;

      return regenerator_default().wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              if (handler === void 0) {
                handler = undefined;
              }

              _context14.next = 3;
              return this._sleepMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee13() {
                var id;
                return regenerator_default().wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        id = setTimeout(function () {
                          _this10.emit(VM_WAKE_SLEEPER, handlerRunner ? handlerRunner : handler);
                        }, ms);

                        _this10._sleepQueue.push({
                          ms: ms,
                          handlerRunner: handlerRunner,
                          id: id,
                          handler: handler
                        });

                      case 2:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13);
              })));

            case 3:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function sleepAsync(_x6, _x7, _x8) {
      return _sleepAsync.apply(this, arguments);
    }

    return sleepAsync;
  }();

  _proto4.wakeSleeper = /*#__PURE__*/function () {
    var _wakeSleeper = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee17(h) {
      var _this11 = this;

      var handlerRunner;
      return regenerator_default().wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _context17.prev = 0;
              // let handlerMs: number = undefined
              handlerRunner = undefined; // let handler: VMHandler = undefined

              _context17.next = 4;
              return this._sleepMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee15() {
                var index, p;
                return regenerator_default().wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        index = _this11._sleepQueue.findIndex(function (p) {
                          return (p === null || p === void 0 ? void 0 : p.handlerRunner) === h;
                        } // || p?.handler === h
                        );
                        (0,utils/* assert */.hu)(index >= 0);

                        if (index >= 0) {
                          p = _this11._sleepQueue[index]; //  handlerMs = p.ms

                          //  handlerMs = p.ms
                          handlerRunner = p.handlerRunner; // handler = p?.handler

                          // handler = p?.handler
                          _this11._sleepQueue.splice(index, 1); // clearTimeout(p.id)

                        }

                      case 3:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15);
              })));

            case 4:
              if (!(this.status === VMStatus.Stopped)) {
                _context17.next = 6;
                break;
              }

              return _context17.abrupt("return");

            case 6:
              _context17.next = 8;
              return this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee16() {
                return regenerator_default().wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
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

                          _this11._runQueue.push(handlerRunner);
                        }

                      case 1:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16);
              })));

            case 8:
              /*
              const theHandler = handlerRunner?.handler || handler
              if (isEveryHandler(theHandler)) {
                  // setup next
                  this.sleepAsync(undefined, handlerMs, theHandler)
              }*/
              if (handlerRunner) this.runAsync();
              _context17.next = 15;
              break;

            case 11:
              _context17.prev = 11;
              _context17.t0 = _context17["catch"](0);
              console.debug(_context17.t0);
              this.emit(events/* VM_EVENT */.J, events/* VMCode.InternalError */.H.InternalError, _context17.t0);

            case 15:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, this, [[0, 11]]);
    }));

    function wakeSleeper(_x9) {
      return _wakeSleeper.apply(this, arguments);
    }

    return wakeSleeper;
  }();

  _proto4.startAsync = /*#__PURE__*/function () {
    var _startAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee19() {
      var _this12 = this;

      return regenerator_default().wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              if (!(this.status !== VMStatus.Stopped)) {
                _context19.next = 2;
                break;
              }

              return _context19.abrupt("return");

            case 2:
              // already running
              this.trace("start");
              _context19.prev = 3;
              this.roleManager.setRoles(this._roles);
              _context19.next = 7;
              return this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee18() {
                return regenerator_default().wrap(function _callee18$(_context18) {
                  while (1) {
                    switch (_context18.prev = _context18.next) {
                      case 0:
                        _this12._waitQueue = _this12._handlerRunners.slice(0);

                        _this12._waitQueue.forEach(function (h) {
                          return h.reset();
                        });

                        _this12._runQueue = [];
                        _this12._everyQueue = []; // make sure to have another handler for every

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

                      case 4:
                      case "end":
                        return _context18.stop();
                    }
                  }
                }, _callee18);
              })));

            case 7:
              this.clearBreakpointsAsync();
              this.setStatus(VMStatus.Running);
              this.waitingToRunning();
              this.runAsync();
              _context19.next = 17;
              break;

            case 13:
              _context19.prev = 13;
              _context19.t0 = _context19["catch"](3);
              console.debug(_context19.t0);
              this.emit(events/* VM_EVENT */.J, events/* VMCode.InternalError */.H.InternalError, _context19.t0);

            case 17:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19, this, [[3, 13]]);
    }));

    function startAsync() {
      return _startAsync.apply(this, arguments);
    }

    return startAsync;
  }();

  _proto4.cancel = function cancel() {
    if (this.status === VMStatus.Stopped) return; // nothing to cancel

    this.setStatus(VMStatus.Stopped);
    this.trace("cancelled");
  };

  _proto4.resumeAsync = /*#__PURE__*/function () {
    var _resumeAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee20() {
      return regenerator_default().wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              if (!(this.status !== VMStatus.Paused)) {
                _context20.next = 2;
                break;
              }

              return _context20.abrupt("return");

            case 2:
              this.trace("resume");
              this.setStatus(VMStatus.Running);
              _context20.next = 6;
              return this.runAsync();

            case 6:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20, this);
    }));

    function resumeAsync() {
      return _resumeAsync.apply(this, arguments);
    }

    return resumeAsync;
  }();

  _proto4.stepAsync = /*#__PURE__*/function () {
    var _stepAsync2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee21() {
      var h, newHead;
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
              this.trace("step");
              _context21.next = 5;
              return this.getCurrentRunner();

            case 5:
              h = _context21.sent;

              if (!h) {
                _context21.next = 15;
                break;
              }

              _context21.next = 9;
              return this.runHandlerAsync(h, true);

            case 9:
              _context21.next = 11;
              return this.postProcessHandler(h);

            case 11:
              _context21.next = 13;
              return this.getCurrentRunner();

            case 13:
              newHead = _context21.sent;

              if (newHead && newHead !== h) {
                this.emitBreakpoint(newHead);
              }

            case 15:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21, this);
    }));

    function stepAsync() {
      return _stepAsync2.apply(this, arguments);
    }

    return stepAsync;
  }();

  _proto4.emitBreakpoint = function emitBreakpoint(h) {
    var _h$command$gc;

    this.emit(events/* VM_EVENT */.J, events/* VMCode.Breakpoint */.H.Breakpoint, h, h.status === VMInternalStatus.Completed ? "" : (_h$command$gc = h.command.gc) === null || _h$command$gc === void 0 ? void 0 : _h$command$gc.sourceId);
  };

  _proto4.runHandlerAsync = /*#__PURE__*/function () {
    var _runHandlerAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee22(h, oneStep) {
      var brkCommand;
      return regenerator_default().wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              if (oneStep === void 0) {
                oneStep = false;
              }

              _context22.prev = 1;
              _context22.next = 4;
              return h.runToCompletionAsync(oneStep);

            case 4:
              brkCommand = _context22.sent;

              if (brkCommand && !oneStep || this.status === VMStatus.Paused) {
                this.setStatus(VMStatus.Paused);
                this.emitBreakpoint(h);
              }

              if (h.status === VMInternalStatus.Completed) {
                h.reset();
              }

              _context22.next = 13;
              break;

            case 9:
              _context22.prev = 9;
              _context22.t0 = _context22["catch"](1);

              if (_context22.t0 instanceof environment/* VMRoleNoServiceException */.iq) {
                this.emit(events/* VM_EVENT */.J, events/* VMCode.RoleMissing */.H.RoleMissing, _context22.t0.role);
              } else {
                console.debug(_context22.t0);
                this.emit(events/* VM_EVENT */.J, events/* VMCode.InternalError */.H.InternalError, _context22.t0);
              } // on handler error, reset the handler


              h.reset();

            case 13:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee22, this, [[1, 9]]);
    }));

    function runHandlerAsync(_x10, _x11) {
      return _runHandlerAsync.apply(this, arguments);
    }

    return runHandlerAsync;
  }();

  _proto4.postProcessHandler = /*#__PURE__*/function () {
    var _postProcessHandler = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee24(h) {
      var _this13 = this;

      var moveToWait, done;
      return regenerator_default().wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              if (!(h.status === VMInternalStatus.Ready || h.status === VMInternalStatus.Sleeping)) {
                _context24.next = 8;
                break;
              }

              moveToWait = h.status === VMInternalStatus.Ready;
              done = undefined;
              _context24.next = 5;
              return this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee23() {
                return regenerator_default().wrap(function _callee23$(_context23) {
                  while (1) {
                    switch (_context23.prev = _context23.next) {
                      case 0:
                        if (_this13._runQueue.length) {
                          (0,utils/* assert */.hu)(h === _this13._runQueue[0]);
                          done = _this13._runQueue.shift();

                          if (moveToWait && !isEveryHandler(h.handler)) {
                            _this13._waitQueue.push(done);

                            done = undefined;
                          }
                        }

                      case 1:
                      case "end":
                        return _context23.stop();
                    }
                  }
                }, _callee23);
              })));

            case 5:
              if (!(done && h.status === VMInternalStatus.Ready && isEveryHandler(h.handler))) {
                _context24.next = 8;
                break;
              }

              _context24.next = 8;
              return this.runHandlerAsync(h);

            case 8:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee24, this);
    }));

    function postProcessHandler(_x12) {
      return _postProcessHandler.apply(this, arguments);
    }

    return postProcessHandler;
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
              _context25.next = 9;
              return this._env.refreshRegistersAsync();

            case 9:
              h = undefined;

            case 10:
              _context25.t0 = this.status === VMStatus.Running;

              if (!_context25.t0) {
                _context25.next = 15;
                break;
              }

              _context25.next = 14;
              return this.getCurrentRunner();

            case 14:
              _context25.t0 = h = _context25.sent;

            case 15:
              if (!_context25.t0) {
                _context25.next = 23;
                break;
              }

              (0,utils/* assert */.hu)(!h.atTop);
              _context25.next = 19;
              return this.runHandlerAsync(h);

            case 19:
              _context25.next = 21;
              return this.postProcessHandler(h);

            case 21:
              _context25.next = 10;
              break;

            case 23:
              _context25.next = 29;
              break;

            case 25:
              _context25.prev = 25;
              _context25.t1 = _context25["catch"](6);
              console.debug(_context25.t1);
              this.emit(events/* VM_EVENT */.J, events/* VMCode.InternalError */.H.InternalError, _context25.t1);

            case 29:
              this._in_run = false;
              this.trace("run end");

            case 31:
            case "end":
              return _context25.stop();
          }
        }
      }, _callee25, this, [[6, 25]]);
    }));

    function runAsync() {
      return _runAsync.apply(this, arguments);
    }

    return runAsync;
  }() // call this whenever some event/change arises
  ;

  _proto4.waitingToRunning =
  /*#__PURE__*/
  function () {
    var _waitingToRunning = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee28() {
      var _this14 = this;

      var waitCopy, handlersStarted, newRunners, sleepingRunners, _loop, _iterator, _step;

      return regenerator_default().wrap(function _callee28$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              if (!(this.status !== VMStatus.Stopped)) {
                _context29.next = 19;
                break;
              }

              waitCopy = undefined;
              _context29.next = 4;
              return this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee26() {
                return regenerator_default().wrap(function _callee26$(_context26) {
                  while (1) {
                    switch (_context26.prev = _context26.next) {
                      case 0:
                        if (!(_this14.status === VMStatus.Paused && _this14._runQueue.length)) {
                          _context26.next = 2;
                          break;
                        }

                        return _context26.abrupt("return");

                      case 2:
                        waitCopy = _this14._waitQueue.slice(0);

                      case 3:
                      case "end":
                        return _context26.stop();
                    }
                  }
                }, _callee26);
              })));

            case 4:
              if (waitCopy) {
                _context29.next = 6;
                break;
              }

              return _context29.abrupt("return");

            case 6:
              handlersStarted = [];
              newRunners = [];
              sleepingRunners = [];
              _loop = /*#__PURE__*/regenerator_default().mark(function _loop() {
                var h;
                return regenerator_default().wrap(function _loop$(_context28) {
                  while (1) {
                    switch (_context28.prev = _context28.next) {
                      case 0:
                        h = _step.value;
                        _context28.next = 3;
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
                        return _context28.stop();
                    }
                  }
                }, _loop);
              });
              _iterator = _createForOfIteratorHelperLoose(waitCopy);

            case 11:
              if ((_step = _iterator()).done) {
                _context29.next = 15;
                break;
              }

              return _context29.delegateYield(_loop(), "t0", 13);

            case 13:
              _context29.next = 11;
              break;

            case 15:
              _context29.next = 17;
              return this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee27() {
                return regenerator_default().wrap(function _callee27$(_context27) {
                  while (1) {
                    switch (_context27.prev = _context27.next) {
                      case 0:
                        newRunners.forEach(function (h) {
                          _this14._runQueue.push(h);

                          var index = _this14._waitQueue.indexOf(h);

                          if (index >= 0) _this14._waitQueue.splice(index, 1);
                        });
                        sleepingRunners.forEach(function (h) {
                          var index = _this14._waitQueue.indexOf(h);

                          if (index >= 0) _this14._waitQueue.splice(index, 1);
                        });

                      case 2:
                      case "end":
                        return _context27.stop();
                    }
                  }
                }, _callee27);
              })));

            case 17:
              this._env.consumeEvent();

              this.runAsync();

            case 19:
            case "end":
              return _context29.stop();
          }
        }
      }, _callee28, this);
    }));

    function waitingToRunning() {
      return _waitingToRunning.apply(this, arguments);
    }

    return waitingToRunning;
  }();

  _proto4.getCurrentRunner = /*#__PURE__*/function () {
    var _getCurrentRunner = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee30() {
      var _this15 = this;

      return regenerator_default().wrap(function _callee30$(_context31) {
        while (1) {
          switch (_context31.prev = _context31.next) {
            case 0:
              _context31.next = 2;
              return this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee29() {
                return regenerator_default().wrap(function _callee29$(_context30) {
                  while (1) {
                    switch (_context30.prev = _context30.next) {
                      case 0:
                        if (!_this15._runQueue.length) {
                          _context30.next = 2;
                          break;
                        }

                        return _context30.abrupt("return", _this15._runQueue[0]);

                      case 2:
                        return _context30.abrupt("return", undefined);

                      case 3:
                      case "end":
                        return _context30.stop();
                    }
                  }
                }, _callee29);
              })));

            case 2:
              return _context31.abrupt("return", _context31.sent);

            case 3:
            case "end":
              return _context31.stop();
          }
        }
      }, _callee30, this);
    }));

    function getCurrentRunner() {
      return _getCurrentRunner.apply(this, arguments);
    }

    return getCurrentRunner;
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
      var _ref14 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee31(role) {
        return regenerator_default().wrap(function _callee31$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                addRoleService(role);

              case 1:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee31);
      }));

      return function (_x13) {
        return _ref14.apply(this, arguments);
      };
    }()));
    this.mount(this.roleManager.subscribe(constants/* ROLE_UNBOUND */.CCp, function (role) {
      _this16._env.serviceChanged(role, undefined);
    }));
  };

  (0,createClass/* default */.Z)(VMProgramRunner, [{
    key: "status",
    get: function get() {
      return this._status;
    }
  }]);

  return VMProgramRunner;
}(client/* JDClient */.z);
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
;// CONCATENATED MODULE: ./jacdac-ts/src/servers/rolemanager.ts





function rolemanager_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function rolemanager_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { rolemanager_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { rolemanager_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function rolemanager_createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = rolemanager_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

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
      return (0,jdom_spec/* serviceSpecificationFromName */.kB)(serviceShortId);
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

    this.bindServices();
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

    if (!(0,jdom_spec/* serviceSpecificationFromName */.kB)(serviceShortId)) return; // unknown role type

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
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
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
      var specification = (0,jdom_spec/* serviceSpecificationFromName */.kB)(serviceShortId);
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
    return runner === null || runner === void 0 ? void 0 : runner.subscribe(events/* VM_EVENT */.J, function (code, _, sourceId) {
      if (code === events/* VMCode.Breakpoint */.H.Breakpoint) {
        if (mounted()) setBreakpoint(sourceId);
      }
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
;// CONCATENATED MODULE: ./src/components/vm/VMToolbar.tsx






function VMToolbar(props) {
  var roleManager = props.roleManager,
      runner = props.runner,
      run = props.run,
      cancel = props.cancel,
      xml = props.xml,
      program = props.program,
      workspace = props.workspace;
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

  return /*#__PURE__*/react.createElement(DslProvider, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
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
  }, /*#__PURE__*/react.createElement(NoSsr/* default */.Z, null, /*#__PURE__*/react.createElement(VMBlockEditor, {
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
//# sourceMappingURL=component---src-pages-tools-vm-editor-tsx-00bcea1592721a0d81ad.js.map