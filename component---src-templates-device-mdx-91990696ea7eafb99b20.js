(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "7Q8/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubRepositoryCardHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ofer");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hlFM");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("50B7");
/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("LGN/");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("RwSH");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4+mf");
/* harmony import */ var _jacdac_ts_src_jdom_iframeclient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("olu4");
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("aVfY");
 // tslint:disable-next-line: no-submodule-imports







function GithubRepositoryCardHeader(props) {
  var slug = props.slug,
      showRelease = props.showRelease;

  var _useRepository = Object(_github__WEBPACK_IMPORTED_MODULE_4__[/* useRepository */ "h"])(slug),
      repo = _useRepository.response,
      repoLoading = _useRepository.loading,
      status = _useRepository.status;

  var _useLatestRelease = Object(_github__WEBPACK_IMPORTED_MODULE_4__[/* useLatestRelease */ "f"])(showRelease && slug),
      release = _useLatestRelease.response;

  var iframe = Object(_jacdac_ts_src_jdom_iframeclient__WEBPACK_IMPORTED_MODULE_7__[/* inIFrame */ "b"])();
  var target = iframe ? "_blank" : "";
  var title = repo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    href: repo.html_url,
    target: target
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    component: "span",
    variant: "h6"
  }, repo.organization.login)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    component: "span",
    ml: 0.5,
    mr: 0.5
  }, "/"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    href: repo.html_url,
    target: target
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    component: "span",
    variant: "h5"
  }, repo.name))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    href: "https://github.com/" + slug,
    target: target
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    component: "span",
    variant: "h6"
  }, slug)), repoLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null), status !== 403 && !repoLoading && !repo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    component: "p",
    variant: "caption"
  }, "Unable to find repository."));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    title: title,
    subheader: release && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      color: "textSecondary",
      target: "_blank",
      to: release.html_url
    }, release.name),
    avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5___default.a, null)
  });
}

/***/ }),

/***/ "81PJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Snippet; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ofer");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Indg");



function Snippet(props) {
  var value = props.value,
      mode = props.mode,
      download = props.download,
      url = props.url,
      caption = props.caption;
  var v = typeof value === 'function' ? value() : value;
  var className = mode && "language-" + (mode === "sts" ? "ts" : mode);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CodeBlock__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    className: className,
    downloadName: download,
    downloadText: download && v,
    url: url
  }, v), caption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    variant: "caption"
  }, caption));
}

/***/ }),

/***/ "9jPY":
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

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__("5AJ6");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/Cancel.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var Cancel = (Object(createSvgIcon["a" /* default */])( /*#__PURE__*/react["createElement"]("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__("ye/S");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__("bfFb");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__("NqtD");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__("VD++");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js











var Chip_styles = function styles(theme) {
  var backgroundColor = theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
  var deleteIconColor = Object(colorManipulator["c" /* fade */])(theme.palette.text.primary, 0.26);
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
        backgroundColor: Object(colorManipulator["b" /* emphasize */])(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: theme.shadows[1]
      }
    },

    /* Styles applied to the root element if `onClick` and `color="primary"` is defined or `clickable={true}`. */
    clickableColorPrimary: {
      '&:hover, &:focus': {
        backgroundColor: Object(colorManipulator["b" /* emphasize */])(theme.palette.primary.main, 0.08)
      }
    },

    /* Styles applied to the root element if `onClick` and `color="secondary"` is defined or `clickable={true}`. */
    clickableColorSecondary: {
      '&:hover, &:focus': {
        backgroundColor: Object(colorManipulator["b" /* emphasize */])(theme.palette.secondary.main, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` is defined. */
    deletable: {
      '&:focus': {
        backgroundColor: Object(colorManipulator["b" /* emphasize */])(backgroundColor, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="primary"` is defined. */
    deletableColorPrimary: {
      '&:focus': {
        backgroundColor: Object(colorManipulator["b" /* emphasize */])(theme.palette.primary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="secondary"` is defined. */
    deletableColorSecondary: {
      '&:focus': {
        backgroundColor: Object(colorManipulator["b" /* emphasize */])(theme.palette.secondary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      backgroundColor: 'transparent',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: Object(colorManipulator["c" /* fade */])(theme.palette.text.primary, theme.palette.action.hoverOpacity)
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
        backgroundColor: Object(colorManipulator["c" /* fade */])(theme.palette.primary.main, theme.palette.action.hoverOpacity)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: Object(colorManipulator["c" /* fade */])(theme.palette.secondary.main, theme.palette.action.hoverOpacity)
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
        color: Object(colorManipulator["c" /* fade */])(deleteIconColor, 0.4)
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
      color: Object(colorManipulator["c" /* fade */])(theme.palette.primary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="default"`. */
    deleteIconColorSecondary: {
      color: Object(colorManipulator["c" /* fade */])(theme.palette.secondary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`. */
    deleteIconOutlinedColorPrimary: {
      color: Object(colorManipulator["c" /* fade */])(theme.palette.primary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.main
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`. */
    deleteIconOutlinedColorSecondary: {
      color: Object(colorManipulator["c" /* fade */])(theme.palette.secondary.main, 0.7),
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


var Chip_Chip = /*#__PURE__*/react["forwardRef"](function Chip(props, ref) {
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
      other = Object(objectWithoutProperties["a" /* default */])(props, ["avatar", "classes", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant"]);

  var chipRef = react["useRef"](null);
  var handleRef = Object(useForkRef["a" /* default */])(chipRef, ref);

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
  var Component = ComponentProp || (clickable ? ButtonBase["a" /* default */] : 'div');
  var moreProps = Component === ButtonBase["a" /* default */] ? {
    component: 'div'
  } : {};
  var deleteIcon = null;

  if (onDelete) {
    var customClasses = Object(clsx_m["a" /* default */])(color !== 'default' && (variant === "default" ? classes["deleteIconColor".concat(Object(capitalize["a" /* default */])(color))] : classes["deleteIconOutlinedColor".concat(Object(capitalize["a" /* default */])(color))]), small && classes.deleteIconSmall);
    deleteIcon = deleteIconProp && /*#__PURE__*/react["isValidElement"](deleteIconProp) ? /*#__PURE__*/react["cloneElement"](deleteIconProp, {
      className: Object(clsx_m["a" /* default */])(deleteIconProp.props.className, classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    }) : /*#__PURE__*/react["createElement"](Cancel, {
      className: Object(clsx_m["a" /* default */])(classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    });
  }

  var avatar = null;

  if (avatarProp && /*#__PURE__*/react["isValidElement"](avatarProp)) {
    avatar = /*#__PURE__*/react["cloneElement"](avatarProp, {
      className: Object(clsx_m["a" /* default */])(classes.avatar, avatarProp.props.className, small && classes.avatarSmall, color !== 'default' && classes["avatarColor".concat(Object(capitalize["a" /* default */])(color))])
    });
  }

  var icon = null;

  if (iconProp && /*#__PURE__*/react["isValidElement"](iconProp)) {
    icon = /*#__PURE__*/react["cloneElement"](iconProp, {
      className: Object(clsx_m["a" /* default */])(classes.icon, iconProp.props.className, small && classes.iconSmall, color !== 'default' && classes["iconColor".concat(Object(capitalize["a" /* default */])(color))])
    });
  }

  if (false) {}

  return /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    role: clickable || onDelete ? 'button' : undefined,
    className: Object(clsx_m["a" /* default */])(classes.root, className, color !== 'default' && [classes["color".concat(Object(capitalize["a" /* default */])(color))], clickable && classes["clickableColor".concat(Object(capitalize["a" /* default */])(color))], onDelete && classes["deletableColor".concat(Object(capitalize["a" /* default */])(color))]], variant !== "default" && [classes.outlined, {
      'primary': classes.outlinedPrimary,
      'secondary': classes.outlinedSecondary
    }[color]], disabled && classes.disabled, small && classes.sizeSmall, clickable && classes.clickable, onDelete && classes.deletable),
    "aria-disabled": disabled ? true : undefined,
    tabIndex: clickable || onDelete ? 0 : undefined,
    onClick: onClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: handleRef
  }, moreProps, other), avatar || icon, /*#__PURE__*/react["createElement"]("span", {
    className: Object(clsx_m["a" /* default */])(classes.label, small && classes.labelSmall)
  }, label), deleteIcon);
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Chip_Chip = __webpack_exports__["a"] = (Object(withStyles["a" /* default */])(Chip_styles, {
  name: 'MuiChip'
})(Chip_Chip));

/***/ }),

/***/ "M1Nd":
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
  d: "M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"
}), 'Fingerprint');

exports.default = _default;

/***/ }),

/***/ "MyTZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "_frontmatter", function() { return /* binding */ _frontmatter; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MDXContent; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__("7ljp");

// EXTERNAL MODULE: ./src/components/Page.tsx
var Page = __webpack_require__("NqE+");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var jdom_spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./src/components/IDChip.tsx
var IDChip = __webpack_require__("XsSY");

// EXTERNAL MODULE: ./src/components/ServiceSpecificationCard.tsx
var ServiceSpecificationCard = __webpack_require__("cgyF");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__("TD2k");

// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__("kmB/");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__("dfam");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tab/Tab.js
var Tab = __webpack_require__("JrkS");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__("kKAo");

// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__("cV++");

// EXTERNAL MODULE: ./src/components/ui/Snippet.tsx
var Snippet = __webpack_require__("81PJ");

// EXTERNAL MODULE: ./jacdac-ts/src/azure-iot/dtdl.ts
var azure_iot_dtdl = __webpack_require__("tyJ9");

// CONCATENATED MODULE: ./src/components/DeviceDTDLSnippet.tsx




function DeviceDTDLSnippet(props) {
  var dev = props.dev,
      inlineServices = props.inlineServices;
  var dtdl = Object(react["useMemo"])(function () {
    return JSON.stringify(Object(azure_iot_dtdl["b" /* deviceSpecificationToDTDL */])(dev, {
      inlineServices: inlineServices
    }), null, 2);
  }, [dev]);
  return /*#__PURE__*/react_default.a.createElement(Snippet["a" /* default */], {
    value: dtdl,
    mode: "json",
    download: dev.name + ".json",
    caption: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
      to: "/dtmi"
    }, "DTDL"), " is an open source modelling language developed by Microsoft Azure.")
  });
}
// CONCATENATED MODULE: ./src/components/DeviceSpecificationSource.tsx
 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports







var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      marginBottom: theme.spacing(1)
    },
    pre: {
      margin: "0",
      padding: "0",
      backgroundColor: "transparent",
      whiteSpec: "pre-wrap"
    }
  });
});
function DeviceSpecificationSource(props) {
  var deviceSpecification = props.deviceSpecification,
      showSpecification = props.showSpecification,
      showDTDL = props.showDTDL,
      showJSON = props.showJSON;
  var classes = useStyles();

  var _useState = Object(react["useState"])(0),
      tab = _useState[0],
      setTab = _useState[1];

  var spec = deviceSpecification;

  var handleTabChange = function handleTabChange(event, newValue) {
    setTab(newValue);
  };

  var index = 0;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_default.a.createElement(Paper["a" /* default */], {
    square: true
  }, /*#__PURE__*/react_default.a.createElement(Tabs["a" /* default */], {
    value: tab,
    onChange: handleTabChange,
    "aria-label": "View specification formats"
  }, [showSpecification && "Specification", showJSON && "JSON", showDTDL && "Device Twin"].filter(function (n) {
    return !!n;
  }).map(function (n, i) {
    return /*#__PURE__*/react_default.a.createElement(Tab["a" /* default */], Object.assign({
      key: n,
      label: n
    }, Object(TabPanel["a" /* a11yProps */])(i)));
  })), showSpecification && /*#__PURE__*/react_default.a.createElement(TabPanel["b" /* default */], {
    key: "spec",
    value: tab,
    index: index++
  }, /*#__PURE__*/react_default.a.createElement(DeviceSpecification, {
    device: spec
  })), showJSON && /*#__PURE__*/react_default.a.createElement(TabPanel["b" /* default */], {
    key: "convjson",
    value: tab,
    index: index++
  }, /*#__PURE__*/react_default.a.createElement(Snippet["a" /* default */], {
    value: JSON.stringify(spec, null, 2),
    mode: "json"
  })), showDTDL && /*#__PURE__*/react_default.a.createElement(TabPanel["b" /* default */], {
    key: "dtdl",
    value: tab,
    index: index++
  }, /*#__PURE__*/react_default.a.createElement(DeviceDTDLSnippet, {
    dev: deviceSpecification
  }))));
}
// EXTERNAL MODULE: ./src/components/firmware/FirmwareCard.tsx
var FirmwareCard = __webpack_require__("o37L");

// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__("A5xw");

// EXTERNAL MODULE: ./src/components/devices/useDeviceImage.ts
var useDeviceImage = __webpack_require__("dI3M");

// CONCATENATED MODULE: ./src/components/DeviceSpecification.tsx












function DeviceSpecification(props) {
  var device = props.device,
      showSource = props.showSource;
  var gridBreakpoints = Object(useGridBreakpoints["a" /* default */])();
  var imageUrl = Object(useDeviceImage["a" /* default */])(device);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h2", {
    key: "title"
  }, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: device.link
  }, device.name)), /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "subtitle1"
  }, "by ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/devices/" + Object(jdom_spec["g" /* identifierToUrlPath */])(Object(jdspec["d" /* escapeDeviceIdentifier */])(device.company))
  }, device.company)), /*#__PURE__*/react_default.a.createElement("img", {
    alt: "image of the device",
    src: imageUrl,
    loading: "lazy"
  }), device.description && /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
    source: device.description
  }), device.repo && /*#__PURE__*/react_default.a.createElement(FirmwareCard["a" /* default */], {
    slug: device.repo
  }), !!device.firmwares.length && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h3", null, "Firmware identifiers"), /*#__PURE__*/react_default.a.createElement("ul", null, device.firmwares.map(function (firmware) {
    return /*#__PURE__*/react_default.a.createElement("li", {
      key: firmware
    }, /*#__PURE__*/react_default.a.createElement(IDChip["a" /* default */], {
      id: firmware,
      filter: "fw:0x" + firmware.toString(16)
    }));
  }))), /*#__PURE__*/react_default.a.createElement("h3", null, "Services"), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, device.services.map(function (sc) {
    return Object(jdom_spec["G" /* serviceSpecificationFromClassIdentifier */])(sc);
  }).map(function (spec) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], Object.assign({
      item: true,
      key: spec.shortId
    }, gridBreakpoints), /*#__PURE__*/react_default.a.createElement(ServiceSpecificationCard["a" /* default */], {
      specification: spec
    }));
  })), showSource && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h2", null, "Specification"), /*#__PURE__*/react_default.a.createElement(DeviceSpecificationSource, {
    deviceSpecification: device,
    showJSON: true,
    showDTDL: true
  })));
}
// CONCATENATED MODULE: ./src/templates/device.mdx


/* @jsx mdx */


/* @jsxRuntime classic */

/* @jsx mdx */





var _frontmatter = {};
var layoutProps = {
  _frontmatter: _frontmatter
};
var MDXLayout = Page["a" /* default */];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["components"]);

  return Object(esm["mdx"])(MDXLayout, Object.assign({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(esm["mdx"])(DeviceSpecification, {
    device: Object(jdom_spec["c" /* deviceSpecificationFromIdentifier */])(props.pageContext.node.id),
    mdxType: "DeviceSpecification"
  }), Object(esm["mdx"])("h2", {
    "id": "see-also",
    "style": {
      "position": "relative"
    }
  }, Object(esm["mdx"])("a", {
    parentName: "h2",
    "href": "#see-also",
    "aria-label": "see also permalink",
    "className": "anchor before"
  }, Object(esm["mdx"])("svg", {
    parentName: "a",
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }, Object(esm["mdx"])("path", {
    parentName: "svg",
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  }))), "See Also"), Object(esm["mdx"])("ul", null, Object(esm["mdx"])("li", {
    parentName: "ul"
  }, Object(esm["mdx"])("a", {
    parentName: "li",
    "href": "/jacdac-docs/reference/device-definition/"
  }, "device definition")), Object(esm["mdx"])("li", {
    parentName: "ul"
  }, Object(esm["mdx"])("a", {
    parentName: "li",
    "href": "/jacdac-docs/tools/device-registration/"
  }, "device registration"))));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "NqE+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // eslint-disable-next-line react/prop-types

var Page = function Page(_ref) {
  var props = _ref.props,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], props, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ }),

/***/ "XsSY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IDChip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("M1Nd");
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9jPY");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("PsDL");
/* harmony import */ var _PacketsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("VKQG");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2K/c");
/* harmony import */ var _ui_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("XfUf");
 // tslint:disable-next-line: no-submodule-imports match-default-export-name






function IDChip(props) {
  var id = props.id,
      className = props.className,
      filter = props.filter;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PacketsContext__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"]),
      packetFilter = _useContext.filter,
      setPacketFilter = _useContext.setFilter;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_5__[/* default */ "c"]),
      setDrawerType = _useContext2.setDrawerType;

  var ids = typeof id === "string" ? id : "0x" + (id !== undefined ? id.toString(16) : "???");
  var filtered = packetFilter && packetFilter.indexOf(filter) > -1;

  var handleFilterClick = function handleFilterClick() {
    var _packetFilter$replace;

    if (filtered) setPacketFilter(packetFilter === null || packetFilter === void 0 ? void 0 : (_packetFilter$replace = packetFilter.replace(filter, '')) === null || _packetFilter$replace === void 0 ? void 0 : _packetFilter$replace.trim());else setPacketFilter((packetFilter === null || packetFilter === void 0 ? void 0 : packetFilter.trim()) + ' ' + filter);
    setDrawerType(_AppContext__WEBPACK_IMPORTED_MODULE_5__[/* DrawerType */ "b"].Packets);
  };

  var icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_1___default.a, null);
  var title = filtered ? "remove filter " + filter : "add filter " + filter;
  if (filter) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Tooltip__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    title: filtered ? "remove filter " + filter : "add filter " + filter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    className: className,
    size: "small",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      "aria-label": title,
      onClick: handleFilterClick
    }, icon),
    label: ids
  })));else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    "aria-label": title,
    className: className,
    size: "small",
    icon: icon,
    title: "identifier " + ids,
    label: ids
  });
}

/***/ }),

/***/ "Y6fa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StatusAlert */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FQT7");


function StatusAlert(props) {
  var specification = props.specification;

  switch (specification === null || specification === void 0 ? void 0 : specification.status) {
    case "deprecated":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        severity: "warning"
      }, "Deprecated");

    case "experimental":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        severity: "info"
      }, "Experimental");

    default:
      return null;
  }
}
var ServiceSpecificationStatusAlert = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(StatusAlert);
/* harmony default export */ __webpack_exports__["a"] = (ServiceSpecificationStatusAlert);

/***/ }),

/***/ "cgyF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceSpecificationCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("30+C");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("50B7");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9jPY");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oa/T");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ofer");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("o4QW");
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Z8Ma");
/* harmony import */ var _IDChip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("XsSY");
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4+mf");
/* harmony import */ var _ui_Markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("kmB/");
/* harmony import */ var _ServiceSpecificationStatusAlert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Y6fa");
/* harmony import */ var _jacdac_ts_src_hosts_hosts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("y+c1");
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("yNWl");
/* harmony import */ var _KindIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("NHHF");
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("ZfHV");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("Wbzz");












function ServiceSpecificationCard(props) {
  var _spec, _spec2, _spec3, _spec4, _spec5;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_jacdac_Context__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"]),
      bus = _useContext.bus;

  var serviceClass = props.serviceClass,
      specification = props.specification,
      showReleaseStatus = props.showReleaseStatus,
      showServiceClass = props.showServiceClass;
  var spec = specification;
  if (!spec && serviceClass !== undefined) spec = Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_7__[/* serviceSpecificationFromClassIdentifier */ "G"])(serviceClass);
  var sc = ((_spec = spec) === null || _spec === void 0 ? void 0 : _spec.classIdentifier) || serviceClass;
  var srv = ((_spec2 = spec) === null || _spec2 === void 0 ? void 0 : _spec2.shortId) || (sc === null || sc === void 0 ? void 0 : sc.toString(16));
  var hostDefinition = Object(_jacdac_ts_src_hosts_hosts__WEBPACK_IMPORTED_MODULE_12__[/* hostDefinitionFromServiceClass */ "d"])(sc);

  var handleSimulatorClick = function handleSimulatorClick() {
    Object(_jacdac_ts_src_hosts_hosts__WEBPACK_IMPORTED_MODULE_12__[/* addHost */ "b"])(bus, hostDefinition.services(), hostDefinition.name);
    Object(gatsby__WEBPACK_IMPORTED_MODULE_16__["navigate"])("/dashboard/");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: ((_spec3 = spec) === null || _spec3 === void 0 ? void 0 : _spec3.name) || "???",
    subheader: showServiceClass && srv && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IDChip__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      id: sc,
      filter: "srv:" + srv
    }),
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, hostDefinition && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      size: "small",
      onClick: handleSimulatorClick,
      avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KindIcon__WEBPACK_IMPORTED_MODULE_14__[/* default */ "b"], {
        kind: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* VIRTUAL_DEVICE_NODE_NAME */ "cf"]
      }),
      "aria-label": "start simulator and open dashboard",
      label: "simulator"
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, ((_spec4 = spec) === null || _spec4 === void 0 ? void 0 : _spec4.notes["short"]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    variant: "body2",
    component: "div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Markdown__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    source: ((_spec5 = spec) === null || _spec5 === void 0 ? void 0 : _spec5.notes["short"].split(".", 1)[0]) + "."
  })), showReleaseStatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ServiceSpecificationStatusAlert__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    specification: spec
  })), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    variant: "outlined",
    "aria-label": "open service " + spec.shortId + " page",
    to: "/services/" + spec.shortId + "/"
  }, "More...")));
}

/***/ }),

/***/ "o37L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmwareCard; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HaE+");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("30+C");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oa/T");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("hlFM");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("6C/C");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("LvTE");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ofer");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Kpcq");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("eD//");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("tVbE");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("IsqK");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("jjAL");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("o4QW");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("Z3vd");
/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("LGN/");
/* harmony import */ var _useFirmwareBlobs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("iOk9");
/* harmony import */ var _GithubRepositoryCardHeader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("7Q8/");
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("FQT7");
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("4+mf");
/* harmony import */ var _ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("wZLv");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("1iKp");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("aVfY");












function FirmwareCard(props) {
  var slug = props.slug;

  var _useLatestReleases = Object(_github__WEBPACK_IMPORTED_MODULE_16__[/* useLatestReleases */ "g"])(slug),
      releases = _useLatestReleases.response;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      downloading = _useState[0],
      setDownloading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
      release = _useState3[0],
      setRelease = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      firmwaresExpanded = _useState4[0],
      setFirmwaresExpanded = _useState4[1];

  var _useFirmwareBlob = Object(_useFirmwareBlobs__WEBPACK_IMPORTED_MODULE_17__[/* useFirmwareBlob */ "b"])(slug),
      setFirmwareFile = _useFirmwareBlob.setFirmwareFile,
      firmwareBlobs = _useFirmwareBlob.firmwareBlobs;

  var tag = (release === null || release === void 0 ? void 0 : release.tag_name) || "";
  var disabled = downloading;
  var version = firmwareBlobs === null || firmwareBlobs === void 0 ? void 0 : firmwareBlobs[0].version;
  var updateAvailable = !!tag && !!version && tag.slice(1) !== version.substr(0, tag.length - 1);
  var downloadColor = updateAvailable ? "primary" : "inherit";
  var downloadVariant = updateAvailable ? "contained" : "text"; // initialize with latest release

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (releases !== null && releases !== void 0 && releases.length && !release) setRelease(releases[0]);
  }, [releases]);

  var handleReleaseChange = function handleReleaseChange(ev) {
    var v = ev.target.value;
    var rel = releases === null || releases === void 0 ? void 0 : releases.find(function (r) {
      return r.tag_name === v;
    });
    setRelease(rel);
  };

  var handleGitHubReleaseDownload = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var firmware;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setError("");
              setDownloading(true);
              _context.next = 5;
              return Object(_github__WEBPACK_IMPORTED_MODULE_16__[/* fetchReleaseBinary */ "c"])(slug, tag);

            case 5:
              firmware = _context.sent;
              if (firmware) setFirmwareFile(tag, firmware);

            case 7:
              _context.prev = 7;
              setDownloading(false);
              return _context.finish(7);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0,, 7, 10]]);
    }));

    return function handleGitHubReleaseDownload() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClear = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              try {
                setError("");
                setDownloading(true);
                setFirmwareFile(tag, undefined);
              } finally {
                setDownloading(false);
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleClear() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_GithubRepositoryCardHeader__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
    slug: slug
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], {
    severity: "error"
  }, error), !!(firmwareBlobs !== null && firmwareBlobs !== void 0 && firmwareBlobs.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    mb: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    expanded: firmwaresExpanded,
    onChange: function onChange() {
      return setFirmwaresExpanded(!firmwaresExpanded);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_22___default.a, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    variant: "body2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("code", null, "v", version), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, " (", firmwareBlobs.length, " firmwares)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    dense: true
  }, firmwareBlobs.map(function (blob) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
      key: blob.firmwareIdentifier
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
      primary: blob.name,
      secondary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_20__["Link"], {
        to: "/firmwares/0x" + blob.firmwareIdentifier.toString(16)
      }, "0x" + blob.firmwareIdentifier.toString(16))
    }));
  }))))), (releases === null || releases === void 0 ? void 0 : releases.length) === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], {
    severity: "warning"
  }, "No releases found."), !!(releases !== null && releases !== void 0 && releases.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], {
    fullWidth: true,
    helperText: "choose a version",
    value: tag,
    onChange: handleReleaseChange
  }, releases === null || releases === void 0 ? void 0 : releases.map(function (rel) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
      key: rel.tag_name,
      value: rel.tag_name
    }, rel.tag_name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], null, !downloading && release && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
    disabled: downloading,
    color: downloadColor,
    variant: downloadVariant,
    "aria-label": "Download last release from " + slug,
    onClick: handleGitHubReleaseDownload
  }, "Download"), !downloading && (firmwareBlobs === null || firmwareBlobs === void 0 ? void 0 : firmwareBlobs.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
    disabled: disabled,
    variant: "text",
    "arial-label": "Clear",
    onClick: handleClear
  }, "Clear"), downloading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"], null)));
}

/***/ }),

/***/ "tyJ9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DTDL_REFERENCE_URL */
/* unused harmony export DTDL_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DTDL_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return escapeName; });
/* unused harmony export serviceSpecificationToDTDL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return serviceSpecificationToComponent; });
/* unused harmony export serviceSpecificationDTMI */
/* unused harmony export deviceSpecificationDTMI */
/* unused harmony export DTMIToRoute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deviceSpecificationToDTDL; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KQm4");
/* harmony import */ var _jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Z8Ma");
/* harmony import */ var _jdom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Zo1I");


/* eslint-disable @typescript-eslint/no-explicit-any */

/***
 * Jacdac service/device specification to DTDL
 *
 *  DTDL specification: https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md.
 */


var DTDL_REFERENCE_URL = "https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md";
var DTDL_NAME = "Digital Twins Definition Language";
var DTDL_CONTEXT = "dtmi:dtdl:context;2"; // https://github.com/Azure/digital-twin-model-identifier
// ^dtmi:(?:_+[A-Za-z0-9]|[A-Za-z])(?:[A-Za-z0-9_]*[A-Za-z0-9])?(?::(?:_+[A-Za-z0-9]|[A-Za-z])(?:[A-Za-z0-9_]*[A-Za-z0-9])?)*;[1-9][0-9]{0,8}$

function toDTMI(segments, version) {
  return ("dtmi:jacdac:" + Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(segments).map(function (seg) {
    return seg === undefined ? "???" : typeof seg === "string" ? seg : "x" + seg.toString(16);
  }).map(function (seg) {
    return seg.replace(/(-|_)/g, "");
  }).join(":") + ";" + (version !== undefined ? version : 1)).toLowerCase();
}

function toUnit(pkt) {
  if (pkt.fields.length !== 1) return undefined;
  var field = pkt.fields[0];
  if (!field.unit) return undefined;
  /**
   *     type Unit = "m" | "kg" | "g" | "s" | "A" | "K" | "cd" | "mol" | "Hz" | "rad" | "sr" | "N" | "Pa" | "J" | "W" | "C" | "V" | "F" | "Ohm"
      | "S" | "Wb" | "T" | "H" | "Cel" | "lm" | "lx" | "Bq" | "Gy" | "Sv" | "kat" | "m2" | "m3" | "l" | "m/s" | "m/s2" | "m3/s" | "l/s"
      | "W/m2" | "cd/m2" | "bit" | "bit/s" | "lat" | "lon" | "pH" | "dB" | "dBW" | "Bspl" | "count" | "/" | "%RH" | "%EL" | "EL"
      | "1/s" | "1/min" | "beat/min" | "beats" | "S/m" | "B" | "VA" | "VAs" | "var" | "vars" | "J/m" | "kg/m3" | "deg";
   type SecondaryUnit = "ms" | "min" | "h" | "MHz" | "kW" | "kVA" | "kvar" | "Ah" | "Wh" | "kWh"
      | "varh" | "kvarh" | "kVAh" | "Wh/km" | "KiB" | "GB" | "Mbit/s" | "B/s" | "MB/s" | "mV" | "mA" | "dBm" | "ug/m3"
      | "mm/h" | "m/h" | "ppm" | "/100" | "/1000" | "hPa" | "mm" | "cm" | "km" | "km/h";
   */

  var units = {
    "m/s2": {
      semantic: "Acceleration",
      unit: "metrePerSecondSquared"
    },
    rad: {
      semantic: "Angle",
      unit: "radian"
    },
    "rad/s": {
      semantic: "AngularVelocity",
      unit: "radianPerSecond"
    },
    "rad/s2": {
      semantic: "AngularAcceleration",
      unit: "radianPerSecondSquared"
    },
    m: {
      semantic: "Length",
      unit: "metre"
    },
    m2: {
      semantic: "Area",
      unit: "squareMetre"
    },
    s: {
      semantic: "TimeSpan",
      unit: "second"
    },
    ms: {
      semantic: "TimeSpan",
      unit: "millisecond"
    },
    us: {
      semantic: "TimeSpan",
      unit: "microsecond"
    },
    K: {
      semantic: "Temperature",
      unit: "kelvin"
    },
    C: {
      semantic: "Temperature",
      unit: "degreeCelsius"
    },
    F: {
      semantic: "Temperature",
      unit: "degreeFahrenheit"
    },
    g: {
      semantic: "Acceleration",
      unit: "gForce"
    },
    mA: {
      semantic: "Current",
      unit: "milliampere"
    },
    uA: {
      semantic: "Current",
      unit: "microampere"
    },
    A: {
      semantic: "Current",
      unit: "ampere"
    },
    mV: {
      semantic: "Voltage",
      unit: "millivolt"
    },
    uV: {
      semantic: "Voltage",
      unit: "microvolt"
    },
    V: {
      semantic: "Voltage",
      unit: "volt"
    }
  };
  var unit = units[field.unit];
  if (unit) return unit; // ignoring some known units

  if (["#", "/"].indexOf(field.unit) > -1) return undefined; //console.warn(`unsupported unit ${field.unit}`)

  return undefined;
} // https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md#primitive-schemas


function enumDTDI(srv, en) {
  return toDTMI([srv.classIdentifier, en.name]);
}

function enumSchema(srv, en) {
  var dtdl = {
    "@type": "Enum",
    "@id": enumDTDI(srv, en),
    valueSchema: "integer",
    enumValues: Object.keys(en.members).map(function (k) {
      return {
        name: escapeName(k),
        displayName: k,
        enumValue: en.members[k]
      };
    })
  };
  return dtdl;
}

function fieldType(srv, pkt, field) {
  var type;
  if (field.type == "bool") type = "boolean";else if (field.isFloat) type = "float";else if (field.isSimpleType) {
    if (/^(u|i)/.test(field.type)) type = "integer";else if (field.type === "B") // base64 encoded binary data
      type = "string";
  } else if (field.type === "string" || field.type == "string0") type = "string";else if (field.shift && /^(u|i)/.test(field.type)) type = "float"; // decimal type
  else {
      var en = srv.enums[field.type];
      if (en) type = enumDTDI(srv, en);
    } //if (!type)
  //    console.warn(`unknown field type ${field.type}`, field)

  return {
    name: field.name == "_" ? pkt.name : field.name,
    type: type
  };
} // warps fields into an object


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
} // converts JADAC pkt data layout into a DTDL schema


function toSchema(srv, pkt, supportsArray) {
  var fields = pkt.fields.map(function (field) {
    return fieldType(srv, pkt, field);
  });
  if (!fields.length) return undefined; // a single data entry

  if (fields.length === 1 && !pkt.fields[0].startRepeats) return fields[0].type; // map fields into schema

  var schemas = fields.map(function (field) {
    return {
      name: field.name,
      schema: field.type
    };
  }); // is there an array?

  var repeatIndex = pkt.fields.findIndex(function (field) {
    return field.startRepeats;
  });

  if (repeatIndex < 0) {
    // no array
    // wrap schemas into an object
    return objectSchema(schemas);
  } // check if arrays are supported


  if (!supportsArray) {
    //console.warn(`arrays not supported in ${srv.shortName}.${pkt.name}`)
    return undefined;
  }

  if (repeatIndex == 0) {
    // the whole structure is an array
    return arraySchema(objectSchema(schemas));
  } else {
    // split fields into prelude and array data
    var nonRepeat = schemas.slice(0, repeatIndex);
    var repeats = schemas.slice(repeatIndex);
    return objectSchema([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nonRepeat), [{
      name: "repeat",
      schema: arraySchema(repeats.length > 1 ? objectSchema(repeats) : repeats[0])
    }]));
  }
}

function packetToDTDL(srv, pkt) {
  var types = {
    const: "Property",
    rw: "Property",
    ro: "Telemetry",
    event: "Telemetry"
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var dtdl = {
    "@type": types[pkt.kind] || "Unsupported" + pkt.kind,
    name: pkt.name,
    "@id": toDTMI([srv.classIdentifier, pkt.kind, pkt.name]),
    description: pkt.description
  };

  switch (pkt.kind) {
    case "report":
    case "command":
      // https://docs.microsoft.com/en-us/azure/digital-twins/concepts-models#azure-digital-twins-dtdl-implementation-specifics
      return undefined;

    case "const":
    case "rw":
    case "ro":
    case "event":
      {
        var unit = toUnit(pkt);

        if (unit) {
          dtdl.unit = unit.unit;
        }

        dtdl.schema = toSchema(srv, pkt, false);
        if (pkt.kind === "rw") dtdl.writable = true;

        if (!dtdl.schema && pkt.kind === "event") {
          // keep a count of the events
          dtdl["@type"] = [dtdl["@type"], "Event"];
          dtdl.schema = toDTMI([srv.classIdentifier, "event"]);
        } else if (unit && unit.semantic) dtdl["@type"] = [dtdl["@type"], unit.semantic];

        break;
      }

    default:
      //console.log(`unknown packet kind ${pkt.kind}`)
      break;
  }

  if (!dtdl.schema) {
    //console.log(`unknown schema for ${srv.name}.${pkt.name}`);
    return undefined;
  }

  return dtdl;
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

function serviceSpecificationToDTDL(srv) {
  var dtdl = {
    "@type": "Interface",
    "@id": serviceSpecificationDTMI(srv),
    displayName: escapeDisplayName(srv.name),
    description: srv.notes["short"],
    contents: srv.packets.filter(function (pkt) {
      return !pkt.derived && !pkt.internal;
    }).map(function (pkt) {
      try {
        return packetToDTDL(srv, pkt);
      } catch (e) {
        console.log("failed to generate DTDL for " + srv.name, e);
        return undefined;
      }
    }).filter(function (c) {
      return !!c;
    })
  };
  if (srv.extends.length) dtdl.extends = srv.extends.map(function (id) {
    return serviceSpecificationDTMI(Object(_jdom_spec__WEBPACK_IMPORTED_MODULE_1__[/* serviceSpecificationFromName */ "H"])(id));
  });
  var hasEvents = srv.packets.find(function (pkt) {
    return pkt.kind === "event";
  });
  var hasEnums = Object.keys(srv.enums).length;

  if (hasEvents || hasEnums) {
    dtdl.schemas = [];
    if (hasEvents) dtdl.schemas.push({
      "@id": toDTMI([srv.classIdentifier, "event"]),
      "@type": "Object",
      fields: [{
        name: "count",
        schema: "integer"
      }]
    });
    if (hasEnums) dtdl.schemas = dtdl.schemas.concat(Object.keys(srv.enums).map(function (en) {
      return enumSchema(srv, srv.enums[en]);
    }));
  }

  dtdl["@context"] = DTDL_CONTEXT;
  return dtdl;
}
function serviceSpecificationToComponent(srv, name) {
  var dtdl = {
    "@type": "Component",
    name: name,
    displayName: escapeDisplayName(srv.name),
    schema: serviceSpecificationDTMI(srv)
  };
  return dtdl;
}
function serviceSpecificationDTMI(srv) {
  return toDTMI(["services", srv.classIdentifier]);
}
function deviceSpecificationDTMI(dev) {
  return toDTMI(["devices", dev.id.replace(/-/g, ":")]);
}
function DTMIToRoute(dtmi) {
  var route = dtmi.toLowerCase().replace(/;/, "-").replace(/:/g, "/") + ".json";
  return route;
}
function deviceSpecificationToDTDL(dev, options) {
  var services = dev.services.map(function (srv) {
    return Object(_jdom_spec__WEBPACK_IMPORTED_MODULE_1__[/* serviceSpecificationFromClassIdentifier */ "G"])(srv);
  });
  var uniqueServices = Object(_jdom_utils__WEBPACK_IMPORTED_MODULE_2__[/* uniqueMap */ "Z"])(services, function (srv) {
    return srv.classIdentifier.toString();
  }, function (srv) {
    return srv;
  });
  var schemas = uniqueServices.map(function (srv) {
    return serviceSpecificationToDTDL(srv);
  }); // allocate names

  var names = [];
  services.forEach(function (srv) {
    var name = escapeName(srv.shortId || srv.shortName);
    if (names.indexOf(name) < 0) names.push(name);else {
      var count = 2;

      while (names.indexOf(name + count) > -1) {
        count++;
      }

      names.push(name + count);
    }
  });
  var dtdl = {
    "@type": "Interface",
    "@id": deviceSpecificationDTMI(dev),
    displayName: escapeDisplayName(dev.name),
    description: dev.description,
    contents: services.map(function (srv, i) {
      return serviceSpecificationToComponent(srv, names[i]);
    }),
    "@context": DTDL_CONTEXT
  };
  if (options !== null && options !== void 0 && options.inlineServices) return [dtdl].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(schemas));else return dtdl;
}

/***/ })

}]);
//# sourceMappingURL=component---src-templates-device-mdx-91990696ea7eafb99b20.js.map