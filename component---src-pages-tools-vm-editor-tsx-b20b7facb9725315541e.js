(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1762],{

/***/ 66213:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _get; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(77608);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/superPropBase.js

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = (0,getPrototypeOf/* default */.Z)(object);
    if (object === null) break;
  }

  return object;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

/***/ }),

/***/ 21407:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34621);
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90494);






var styles = {
  /* Styles applied to the root element. */
  root: {
    // Improve scrollable dialog support.
    zIndex: -1,
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent'
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
var Backdrop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Backdrop(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$invisible = props.invisible,
      invisible = _props$invisible === void 0 ? false : _props$invisible,
      open = props.open,
      transitionDuration = props.transitionDuration,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Fade__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z : _props$TransitionComp,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(props, ["children", "classes", "className", "invisible", "open", "transitionDuration", "TransitionComponent"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
    in: open,
    timeout: transitionDuration
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.root, className, invisible && classes.invisible),
    "aria-hidden": true,
    ref: ref
  }, children));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(styles, {
  name: 'MuiBackdrop'
})(Backdrop));

/***/ }),

/***/ 52468:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81253);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96156);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34621);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81664);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48649);
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21407);
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90494);
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(381);
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58063);












var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      '@media print': {
        // Use !important to override the Modal inline-style.
        position: 'absolute !important'
      }
    },

    /* Styles applied to the container element if `scroll="paper"`. */
    scrollPaper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    /* Styles applied to the container element if `scroll="body"`. */
    scrollBody: {
      overflowY: 'auto',
      overflowX: 'hidden',
      textAlign: 'center',
      '&:after': {
        content: '""',
        display: 'inline-block',
        verticalAlign: 'middle',
        height: '100%',
        width: '0'
      }
    },

    /* Styles applied to the container element. */
    container: {
      height: '100%',
      '@media print': {
        height: 'auto'
      },
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0
    },

    /* Styles applied to the `Paper` component. */
    paper: {
      margin: 32,
      position: 'relative',
      overflowY: 'auto',
      // Fix IE 11 issue, to remove at some point.
      '@media print': {
        overflowY: 'visible',
        boxShadow: 'none'
      }
    },

    /* Styles applied to the `Paper` component if `scroll="paper"`. */
    paperScrollPaper: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `scroll="body"`. */
    paperScrollBody: {
      display: 'inline-block',
      verticalAlign: 'middle',
      textAlign: 'left' // 'initial' doesn't work on IE 11

    },

    /* Styles applied to the `Paper` component if `maxWidth=false`. */
    paperWidthFalse: {
      maxWidth: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
    paperWidthXs: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444),
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({}, theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
    paperWidthSm: {
      maxWidth: theme.breakpoints.values.sm,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({}, theme.breakpoints.down(theme.breakpoints.values.sm + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="md"`. */
    paperWidthMd: {
      maxWidth: theme.breakpoints.values.md,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({}, theme.breakpoints.down(theme.breakpoints.values.md + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="lg"`. */
    paperWidthLg: {
      maxWidth: theme.breakpoints.values.lg,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({}, theme.breakpoints.down(theme.breakpoints.values.lg + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="xl"`. */
    paperWidthXl: {
      maxWidth: theme.breakpoints.values.xl,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({}, theme.breakpoints.down(theme.breakpoints.values.xl + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `fullWidth={true}`. */
    paperFullWidth: {
      width: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `fullScreen={true}`. */
    paperFullScreen: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: 'none',
      borderRadius: 0,
      '&$paperScrollBody': {
        margin: 0,
        maxWidth: '100%'
      }
    }
  };
};
var defaultTransitionDuration = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_2__/* .duration.enteringScreen */ .x9.enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_2__/* .duration.leavingScreen */ .x9.leavingScreen
};
/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */

var Dialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Dialog(props, ref) {
  var BackdropProps = props.BackdropProps,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableBackdro = props.disableBackdropClick,
      disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
      _props$disableEscapeK = props.disableEscapeKeyDown,
      disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
      _props$fullScreen = props.fullScreen,
      fullScreen = _props$fullScreen === void 0 ? false : _props$fullScreen,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$maxWidth = props.maxWidth,
      maxWidth = _props$maxWidth === void 0 ? 'sm' : _props$maxWidth,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      _props$PaperComponent = props.PaperComponent,
      PaperComponent = _props$PaperComponent === void 0 ? _Paper__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z : _props$PaperComponent,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      _props$scroll = props.scroll,
      scroll = _props$scroll === void 0 ? 'paper' : _props$scroll,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Fade__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
      TransitionProps = props.TransitionProps,
      ariaDescribedby = props['aria-describedby'],
      ariaLabelledby = props['aria-labelledby'],
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(props, ["BackdropProps", "children", "classes", "className", "disableBackdropClick", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "onEnter", "onEntered", "onEntering", "onEscapeKeyDown", "onExit", "onExited", "onExiting", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps", "aria-describedby", "aria-labelledby"]);

  var mouseDownTarget = react__WEBPACK_IMPORTED_MODULE_0__.useRef();

  var handleMouseDown = function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  };

  var handleBackdropClick = function handleBackdropClick(event) {
    // Ignore the events not coming from the "backdrop"
    // We don't want to close the dialog when clicking the dialog content.
    if (event.target !== event.currentTarget) {
      return;
    } // Make sure the event starts and ends on the same DOM element.


    if (event.target !== mouseDownTarget.current) {
      return;
    }

    mouseDownTarget.current = null;

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(classes.root, className),
    BackdropComponent: _Backdrop__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z,
    BackdropProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({
      transitionDuration: transitionDuration
    }, BackdropProps),
    closeAfterTransition: true,
    disableBackdropClick: disableBackdropClick,
    disableEscapeKeyDown: disableEscapeKeyDown,
    onEscapeKeyDown: onEscapeKeyDown,
    onClose: onClose,
    open: open,
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({
    appear: true,
    in: open,
    timeout: transitionDuration,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    role: "none presentation"
  }, TransitionProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(classes.container, classes["scroll".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(scroll))]),
    onMouseUp: handleBackdropClick,
    onMouseDown: handleMouseDown
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PaperComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({
    elevation: 24,
    role: "dialog",
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledby
  }, PaperProps, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(classes.paper, classes["paperScroll".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(scroll))], classes["paperWidth".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(String(maxWidth)))], PaperProps.className, fullScreen && classes.paperFullScreen, fullWidth && classes.paperFullWidth)
  }), children))));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)(styles, {
  name: 'MuiDialog'
})(Dialog));

/***/ }),

/***/ 89952:
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
    padding: 8,
    justifyContent: 'flex-end',
    flex: '0 0 auto'
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var DialogActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function DialogActions(props, ref) {
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
  name: 'MuiDialogActions'
})(DialogActions));

/***/ }),

/***/ 65733:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34621);





var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: '1 1 auto',
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      overflowY: 'auto',
      padding: '8px 24px',
      '&:first-child': {
        // dialog without title
        paddingTop: 20
      }
    },

    /* Styles applied to the root element if `dividers={true}`. */
    dividers: {
      padding: '16px 24px',
      borderTop: "1px solid ".concat(theme.palette.divider),
      borderBottom: "1px solid ".concat(theme.palette.divider)
    }
  };
};
var DialogContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function DialogContent(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$dividers = props.dividers,
      dividers = _props$dividers === void 0 ? false : _props$dividers,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["classes", "className", "dividers"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(classes.root, className, dividers && classes.dividers),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(styles, {
  name: 'MuiDialogContent'
})(DialogContent));

/***/ }),

/***/ 32253:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22122);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34621);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80453);




var styles = {
  /* Styles applied to the root element. */
  root: {
    marginBottom: 12
  }
};
var DialogContentText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function DialogContentText(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: ref
  }, props));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(styles, {
  name: 'MuiDialogContentText'
})(DialogContentText));

/***/ }),

/***/ 90494:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28481);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81423);
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(381);
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59355);
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19701);
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11291);









var styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
var defaultTimeout = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_1__/* .duration.enteringScreen */ .x9.enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_1__/* .duration.leavingScreen */ .x9.leavingScreen
};
/**
 * The Fade transition is used by the [Modal](/components/modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Fade = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Fade(props, ref) {
  var children = props.children,
      _props$disableStrictM = props.disableStrictModeCompat,
      disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? react_transition_group__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP : _props$TransitionComp,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "TransitionComponent", "timeout"]);

  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var foreignRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(children.ref, ref);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(enableStrictModeCompat ? nodeRef : undefined, foreignRef);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing],
            _ref2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(_ref, 2),
            node = _ref2[0],
            isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.


        if (isAppearing === undefined) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };

  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_7__/* .reflow */ .n)(node); // So the animation always start from the start.

    var transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_7__/* .getTransitionProps */ .C)({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_7__/* .getTransitionProps */ .C)({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    timeout: timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
        opacity: 0,
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, styles[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = (Fade);

/***/ }),

/***/ 61452:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* eslint-disable */
;

(function (root, factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(15911)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (Blockly) {
  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */

  /**
   * @fileoverview Blockly module.
   */

  /* eslint-disable */
  'use strict';

  return Blockly;
});

/***/ }),

/***/ 71269:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* eslint-disable */
;

(function (root, factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(43049)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (Blockly) {
  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */

  /**
   * @fileoverview Blockly Blocks module.
   */

  /* eslint-disable */
  'use strict';

  Blockly.Blocks = {};
  return Blockly.Blocks;
});

/***/ }),

/***/ 43049:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Do not edit this file; automatically generated by gulp.

/* eslint-disable */
;

(function (root, factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(15911)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (Blockly) {
  'use strict';

  Blockly.Blocks.colour = {};
  Blockly.Constants = {};
  Blockly.Constants.Colour = {};
  Blockly.Constants.Colour.HUE = 20;
  Blockly.defineBlocksWithJsonArray([{
    type: "colour_picker",
    message0: "%1",
    args0: [{
      type: "field_colour",
      name: "COLOUR",
      colour: "#ff0000"
    }],
    output: "Colour",
    helpUrl: "%{BKY_COLOUR_PICKER_HELPURL}",
    style: "colour_blocks",
    tooltip: "%{BKY_COLOUR_PICKER_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"]
  }, {
    type: "colour_random",
    message0: "%{BKY_COLOUR_RANDOM_TITLE}",
    output: "Colour",
    helpUrl: "%{BKY_COLOUR_RANDOM_HELPURL}",
    style: "colour_blocks",
    tooltip: "%{BKY_COLOUR_RANDOM_TOOLTIP}"
  }, {
    type: "colour_rgb",
    message0: "%{BKY_COLOUR_RGB_TITLE} %{BKY_COLOUR_RGB_RED} %1 %{BKY_COLOUR_RGB_GREEN} %2 %{BKY_COLOUR_RGB_BLUE} %3",
    args0: [{
      type: "input_value",
      name: "RED",
      check: "Number",
      align: "RIGHT"
    }, {
      type: "input_value",
      name: "GREEN",
      check: "Number",
      align: "RIGHT"
    }, {
      type: "input_value",
      name: "BLUE",
      check: "Number",
      align: "RIGHT"
    }],
    output: "Colour",
    helpUrl: "%{BKY_COLOUR_RGB_HELPURL}",
    style: "colour_blocks",
    tooltip: "%{BKY_COLOUR_RGB_TOOLTIP}"
  }, {
    type: "colour_blend",
    message0: "%{BKY_COLOUR_BLEND_TITLE} %{BKY_COLOUR_BLEND_COLOUR1} %1 %{BKY_COLOUR_BLEND_COLOUR2} %2 %{BKY_COLOUR_BLEND_RATIO} %3",
    args0: [{
      type: "input_value",
      name: "COLOUR1",
      check: "Colour",
      align: "RIGHT"
    }, {
      type: "input_value",
      name: "COLOUR2",
      check: "Colour",
      align: "RIGHT"
    }, {
      type: "input_value",
      name: "RATIO",
      check: "Number",
      align: "RIGHT"
    }],
    output: "Colour",
    helpUrl: "%{BKY_COLOUR_BLEND_HELPURL}",
    style: "colour_blocks",
    tooltip: "%{BKY_COLOUR_BLEND_TOOLTIP}"
  }]);
  Blockly.Blocks.lists = {};
  Blockly.Constants.Lists = {};
  Blockly.Constants.Lists.HUE = 260;
  Blockly.defineBlocksWithJsonArray([{
    type: "lists_create_empty",
    message0: "%{BKY_LISTS_CREATE_EMPTY_TITLE}",
    output: "Array",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_CREATE_EMPTY_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_CREATE_EMPTY_HELPURL}"
  }, {
    type: "lists_repeat",
    message0: "%{BKY_LISTS_REPEAT_TITLE}",
    args0: [{
      type: "input_value",
      name: "ITEM"
    }, {
      type: "input_value",
      name: "NUM",
      check: "Number"
    }],
    output: "Array",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_REPEAT_HELPURL}"
  }, {
    type: "lists_reverse",
    message0: "%{BKY_LISTS_REVERSE_MESSAGE0}",
    args0: [{
      type: "input_value",
      name: "LIST",
      check: "Array"
    }],
    output: "Array",
    inputsInline: !0,
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_REVERSE_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_REVERSE_HELPURL}"
  }, {
    type: "lists_isEmpty",
    message0: "%{BKY_LISTS_ISEMPTY_TITLE}",
    args0: [{
      type: "input_value",
      name: "VALUE",
      check: ["String", "Array"]
    }],
    output: "Boolean",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_ISEMPTY_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_ISEMPTY_HELPURL}"
  }, {
    type: "lists_length",
    message0: "%{BKY_LISTS_LENGTH_TITLE}",
    args0: [{
      type: "input_value",
      name: "VALUE",
      check: ["String", "Array"]
    }],
    output: "Number",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_LENGTH_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_LENGTH_HELPURL}"
  }]);
  Blockly.Blocks.lists_create_with = {
    init: function init() {
      this.setHelpUrl(Blockly.Msg.LISTS_CREATE_WITH_HELPURL);
      this.setStyle("list_blocks");
      this.itemCount_ = 3;
      this.updateShape_();
      this.setOutput(!0, "Array");
      this.setMutator(new Blockly.Mutator(["lists_create_with_item"]));
      this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
    },
    mutationToDom: function mutationToDom() {
      var a = Blockly.utils.xml.createElement("mutation");
      a.setAttribute("items", this.itemCount_);
      return a;
    },
    domToMutation: function domToMutation(a) {
      this.itemCount_ = parseInt(a.getAttribute("items"), 10);
      this.updateShape_();
    },
    decompose: function decompose(a) {
      var b = a.newBlock("lists_create_with_container");
      b.initSvg();

      for (var c = b.getInput("STACK").connection, d = 0; d < this.itemCount_; d++) {
        var e = a.newBlock("lists_create_with_item");
        e.initSvg();
        c.connect(e.previousConnection);
        c = e.nextConnection;
      }

      return b;
    },
    compose: function compose(a) {
      var b = a.getInputTargetBlock("STACK");

      for (a = []; b;) {
        a.push(b.valueConnection_), b = b.nextConnection && b.nextConnection.targetBlock();
      }

      for (b = 0; b < this.itemCount_; b++) {
        var c = this.getInput("ADD" + b).connection.targetConnection;
        c && -1 == a.indexOf(c) && c.disconnect();
      }

      this.itemCount_ = a.length;
      this.updateShape_();

      for (b = 0; b < this.itemCount_; b++) {
        Blockly.Mutator.reconnect(a[b], this, "ADD" + b);
      }
    },
    saveConnections: function saveConnections(a) {
      a = a.getInputTargetBlock("STACK");

      for (var b = 0; a;) {
        var c = this.getInput("ADD" + b);
        a.valueConnection_ = c && c.connection.targetConnection;
        b++;
        a = a.nextConnection && a.nextConnection.targetBlock();
      }
    },
    updateShape_: function updateShape_() {
      this.itemCount_ && this.getInput("EMPTY") ? this.removeInput("EMPTY") : this.itemCount_ || this.getInput("EMPTY") || this.appendDummyInput("EMPTY").appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE);

      for (var a = 0; a < this.itemCount_; a++) {
        if (!this.getInput("ADD" + a)) {
          var b = this.appendValueInput("ADD" + a).setAlign(Blockly.ALIGN_RIGHT);
          0 == a && b.appendField(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH);
        }
      }

      for (; this.getInput("ADD" + a);) {
        this.removeInput("ADD" + a), a++;
      }
    }
  };
  Blockly.Blocks.lists_create_with_container = {
    init: function init() {
      this.setStyle("list_blocks");
      this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
      this.appendStatementInput("STACK");
      this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
      this.contextMenu = !1;
    }
  };
  Blockly.Blocks.lists_create_with_item = {
    init: function init() {
      this.setStyle("list_blocks");
      this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
      this.setPreviousStatement(!0);
      this.setNextStatement(!0);
      this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
      this.contextMenu = !1;
    }
  };
  Blockly.Blocks.lists_indexOf = {
    init: function init() {
      var a = [[Blockly.Msg.LISTS_INDEX_OF_FIRST, "FIRST"], [Blockly.Msg.LISTS_INDEX_OF_LAST, "LAST"]];
      this.setHelpUrl(Blockly.Msg.LISTS_INDEX_OF_HELPURL);
      this.setStyle("list_blocks");
      this.setOutput(!0, "Number");
      this.appendValueInput("VALUE").setCheck("Array").appendField(Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST);
      this.appendValueInput("FIND").appendField(new Blockly.FieldDropdown(a), "END");
      this.setInputsInline(!0);
      var b = this;
      this.setTooltip(function () {
        return Blockly.Msg.LISTS_INDEX_OF_TOOLTIP.replace("%1", b.workspace.options.oneBasedIndex ? "0" : "-1");
      });
    }
  };
  Blockly.Blocks.lists_getIndex = {
    init: function init() {
      var a = [[Blockly.Msg.LISTS_GET_INDEX_GET, "GET"], [Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"], [Blockly.Msg.LISTS_GET_INDEX_REMOVE, "REMOVE"]];
      this.WHERE_OPTIONS = [[Blockly.Msg.LISTS_GET_INDEX_FROM_START, "FROM_START"], [Blockly.Msg.LISTS_GET_INDEX_FROM_END, "FROM_END"], [Blockly.Msg.LISTS_GET_INDEX_FIRST, "FIRST"], [Blockly.Msg.LISTS_GET_INDEX_LAST, "LAST"], [Blockly.Msg.LISTS_GET_INDEX_RANDOM, "RANDOM"]];
      this.setHelpUrl(Blockly.Msg.LISTS_GET_INDEX_HELPURL);
      this.setStyle("list_blocks");
      a = new Blockly.FieldDropdown(a, function (c) {
        c = "REMOVE" == c;
        this.getSourceBlock().updateStatement_(c);
      });
      this.appendValueInput("VALUE").setCheck("Array").appendField(Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST);
      this.appendDummyInput().appendField(a, "MODE").appendField("", "SPACE");
      this.appendDummyInput("AT");
      Blockly.Msg.LISTS_GET_INDEX_TAIL && this.appendDummyInput("TAIL").appendField(Blockly.Msg.LISTS_GET_INDEX_TAIL);
      this.setInputsInline(!0);
      this.setOutput(!0);
      this.updateAt_(!0);
      var b = this;
      this.setTooltip(function () {
        var c = b.getFieldValue("MODE"),
            d = b.getFieldValue("WHERE"),
            e = "";

        switch (c + " " + d) {
          case "GET FROM_START":
          case "GET FROM_END":
            e = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM;
            break;

          case "GET FIRST":
            e = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;
            break;

          case "GET LAST":
            e = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST;
            break;

          case "GET RANDOM":
            e = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;
            break;

          case "GET_REMOVE FROM_START":
          case "GET_REMOVE FROM_END":
            e = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;
            break;

          case "GET_REMOVE FIRST":
            e = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;
            break;

          case "GET_REMOVE LAST":
            e = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;
            break;

          case "GET_REMOVE RANDOM":
            e = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;
            break;

          case "REMOVE FROM_START":
          case "REMOVE FROM_END":
            e = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;
            break;

          case "REMOVE FIRST":
            e = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;
            break;

          case "REMOVE LAST":
            e = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;
            break;

          case "REMOVE RANDOM":
            e = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM;
        }

        if ("FROM_START" == d || "FROM_END" == d) e += "  " + ("FROM_START" == d ? Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP : Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP).replace("%1", b.workspace.options.oneBasedIndex ? "#1" : "#0");
        return e;
      });
    },
    mutationToDom: function mutationToDom() {
      var a = Blockly.utils.xml.createElement("mutation");
      a.setAttribute("statement", !this.outputConnection);
      var b = this.getInput("AT").type == Blockly.INPUT_VALUE;
      a.setAttribute("at", b);
      return a;
    },
    domToMutation: function domToMutation(a) {
      var b = "true" == a.getAttribute("statement");
      this.updateStatement_(b);
      a = "false" != a.getAttribute("at");
      this.updateAt_(a);
    },
    updateStatement_: function updateStatement_(a) {
      a != !this.outputConnection && (this.unplug(!0, !0), a ? (this.setOutput(!1), this.setPreviousStatement(!0), this.setNextStatement(!0)) : (this.setPreviousStatement(!1), this.setNextStatement(!1), this.setOutput(!0)));
    },
    updateAt_: function updateAt_(a) {
      this.removeInput("AT");
      this.removeInput("ORDINAL", !0);
      a ? (this.appendValueInput("AT").setCheck("Number"), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT");
      var b = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function (c) {
        var d = "FROM_START" == c || "FROM_END" == c;

        if (d != a) {
          var e = this.getSourceBlock();
          e.updateAt_(d);
          e.setFieldValue(c, "WHERE");
          return null;
        }
      });
      this.getInput("AT").appendField(b, "WHERE");
      Blockly.Msg.LISTS_GET_INDEX_TAIL && this.moveInputBefore("TAIL", null);
    }
  };
  Blockly.Blocks.lists_setIndex = {
    init: function init() {
      var a = [[Blockly.Msg.LISTS_SET_INDEX_SET, "SET"], [Blockly.Msg.LISTS_SET_INDEX_INSERT, "INSERT"]];
      this.WHERE_OPTIONS = [[Blockly.Msg.LISTS_GET_INDEX_FROM_START, "FROM_START"], [Blockly.Msg.LISTS_GET_INDEX_FROM_END, "FROM_END"], [Blockly.Msg.LISTS_GET_INDEX_FIRST, "FIRST"], [Blockly.Msg.LISTS_GET_INDEX_LAST, "LAST"], [Blockly.Msg.LISTS_GET_INDEX_RANDOM, "RANDOM"]];
      this.setHelpUrl(Blockly.Msg.LISTS_SET_INDEX_HELPURL);
      this.setStyle("list_blocks");
      this.appendValueInput("LIST").setCheck("Array").appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST);
      this.appendDummyInput().appendField(new Blockly.FieldDropdown(a), "MODE").appendField("", "SPACE");
      this.appendDummyInput("AT");
      this.appendValueInput("TO").appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_TO);
      this.setInputsInline(!0);
      this.setPreviousStatement(!0);
      this.setNextStatement(!0);
      this.setTooltip(Blockly.Msg.LISTS_SET_INDEX_TOOLTIP);
      this.updateAt_(!0);
      var b = this;
      this.setTooltip(function () {
        var c = b.getFieldValue("MODE"),
            d = b.getFieldValue("WHERE"),
            e = "";

        switch (c + " " + d) {
          case "SET FROM_START":
          case "SET FROM_END":
            e = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM;
            break;

          case "SET FIRST":
            e = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;
            break;

          case "SET LAST":
            e = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST;
            break;

          case "SET RANDOM":
            e = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;
            break;

          case "INSERT FROM_START":
          case "INSERT FROM_END":
            e = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;
            break;

          case "INSERT FIRST":
            e = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;
            break;

          case "INSERT LAST":
            e = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;
            break;

          case "INSERT RANDOM":
            e = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM;
        }

        if ("FROM_START" == d || "FROM_END" == d) e += "  " + Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", b.workspace.options.oneBasedIndex ? "#1" : "#0");
        return e;
      });
    },
    mutationToDom: function mutationToDom() {
      var a = Blockly.utils.xml.createElement("mutation"),
          b = this.getInput("AT").type == Blockly.INPUT_VALUE;
      a.setAttribute("at", b);
      return a;
    },
    domToMutation: function domToMutation(a) {
      a = "false" != a.getAttribute("at");
      this.updateAt_(a);
    },
    updateAt_: function updateAt_(a) {
      this.removeInput("AT");
      this.removeInput("ORDINAL", !0);
      a ? (this.appendValueInput("AT").setCheck("Number"), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT");
      var b = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function (c) {
        var d = "FROM_START" == c || "FROM_END" == c;

        if (d != a) {
          var e = this.getSourceBlock();
          e.updateAt_(d);
          e.setFieldValue(c, "WHERE");
          return null;
        }
      });
      this.moveInputBefore("AT", "TO");
      this.getInput("ORDINAL") && this.moveInputBefore("ORDINAL", "TO");
      this.getInput("AT").appendField(b, "WHERE");
    }
  };
  Blockly.Blocks.lists_getSublist = {
    init: function init() {
      this.WHERE_OPTIONS_1 = [[Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START, "FROM_START"], [Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END, "FROM_END"], [Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST, "FIRST"]];
      this.WHERE_OPTIONS_2 = [[Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START, "FROM_START"], [Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END, "FROM_END"], [Blockly.Msg.LISTS_GET_SUBLIST_END_LAST, "LAST"]];
      this.setHelpUrl(Blockly.Msg.LISTS_GET_SUBLIST_HELPURL);
      this.setStyle("list_blocks");
      this.appendValueInput("LIST").setCheck("Array").appendField(Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST);
      this.appendDummyInput("AT1");
      this.appendDummyInput("AT2");
      Blockly.Msg.LISTS_GET_SUBLIST_TAIL && this.appendDummyInput("TAIL").appendField(Blockly.Msg.LISTS_GET_SUBLIST_TAIL);
      this.setInputsInline(!0);
      this.setOutput(!0, "Array");
      this.updateAt_(1, !0);
      this.updateAt_(2, !0);
      this.setTooltip(Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP);
    },
    mutationToDom: function mutationToDom() {
      var a = Blockly.utils.xml.createElement("mutation"),
          b = this.getInput("AT1").type == Blockly.INPUT_VALUE;
      a.setAttribute("at1", b);
      b = this.getInput("AT2").type == Blockly.INPUT_VALUE;
      a.setAttribute("at2", b);
      return a;
    },
    domToMutation: function domToMutation(a) {
      var b = "true" == a.getAttribute("at1");
      a = "true" == a.getAttribute("at2");
      this.updateAt_(1, b);
      this.updateAt_(2, a);
    },
    updateAt_: function updateAt_(a, b) {
      this.removeInput("AT" + a);
      this.removeInput("ORDINAL" + a, !0);
      b ? (this.appendValueInput("AT" + a).setCheck("Number"), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL" + a).appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT" + a);
      var c = new Blockly.FieldDropdown(this["WHERE_OPTIONS_" + a], function (d) {
        var e = "FROM_START" == d || "FROM_END" == d;

        if (e != b) {
          var f = this.getSourceBlock();
          f.updateAt_(a, e);
          f.setFieldValue(d, "WHERE" + a);
          return null;
        }
      });
      this.getInput("AT" + a).appendField(c, "WHERE" + a);
      1 == a && (this.moveInputBefore("AT1", "AT2"), this.getInput("ORDINAL1") && this.moveInputBefore("ORDINAL1", "AT2"));
      Blockly.Msg.LISTS_GET_SUBLIST_TAIL && this.moveInputBefore("TAIL", null);
    }
  };
  Blockly.Blocks.lists_sort = {
    init: function init() {
      this.jsonInit({
        message0: Blockly.Msg.LISTS_SORT_TITLE,
        args0: [{
          type: "field_dropdown",
          name: "TYPE",
          options: [[Blockly.Msg.LISTS_SORT_TYPE_NUMERIC, "NUMERIC"], [Blockly.Msg.LISTS_SORT_TYPE_TEXT, "TEXT"], [Blockly.Msg.LISTS_SORT_TYPE_IGNORECASE, "IGNORE_CASE"]]
        }, {
          type: "field_dropdown",
          name: "DIRECTION",
          options: [[Blockly.Msg.LISTS_SORT_ORDER_ASCENDING, "1"], [Blockly.Msg.LISTS_SORT_ORDER_DESCENDING, "-1"]]
        }, {
          type: "input_value",
          name: "LIST",
          check: "Array"
        }],
        output: "Array",
        style: "list_blocks",
        tooltip: Blockly.Msg.LISTS_SORT_TOOLTIP,
        helpUrl: Blockly.Msg.LISTS_SORT_HELPURL
      });
    }
  };
  Blockly.Blocks.lists_split = {
    init: function init() {
      var a = this,
          b = new Blockly.FieldDropdown([[Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT, "SPLIT"], [Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST, "JOIN"]], function (c) {
        a.updateType_(c);
      });
      this.setHelpUrl(Blockly.Msg.LISTS_SPLIT_HELPURL);
      this.setStyle("list_blocks");
      this.appendValueInput("INPUT").setCheck("String").appendField(b, "MODE");
      this.appendValueInput("DELIM").setCheck("String").appendField(Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER);
      this.setInputsInline(!0);
      this.setOutput(!0, "Array");
      this.setTooltip(function () {
        var c = a.getFieldValue("MODE");
        if ("SPLIT" == c) return Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT;
        if ("JOIN" == c) return Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN;
        throw Error("Unknown mode: " + c);
      });
    },
    updateType_: function updateType_(a) {
      if (this.getFieldValue("MODE") != a) {
        var b = this.getInput("INPUT").connection;
        b.setShadowDom(null);
        var c = b.targetBlock();
        c && (b.disconnect(), c.isShadow() ? c.dispose() : this.bumpNeighbours());
      }

      "SPLIT" == a ? (this.outputConnection.setCheck("Array"), this.getInput("INPUT").setCheck("String")) : (this.outputConnection.setCheck("String"), this.getInput("INPUT").setCheck("Array"));
    },
    mutationToDom: function mutationToDom() {
      var a = Blockly.utils.xml.createElement("mutation");
      a.setAttribute("mode", this.getFieldValue("MODE"));
      return a;
    },
    domToMutation: function domToMutation(a) {
      this.updateType_(a.getAttribute("mode"));
    }
  };
  Blockly.Blocks.logic = {};
  Blockly.Constants.Logic = {};
  Blockly.Constants.Logic.HUE = 210;
  Blockly.defineBlocksWithJsonArray([{
    type: "logic_boolean",
    message0: "%1",
    args0: [{
      type: "field_dropdown",
      name: "BOOL",
      options: [["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"], ["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"]]
    }],
    output: "Boolean",
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_BOOLEAN_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_BOOLEAN_HELPURL}"
  }, {
    type: "controls_if",
    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
    args0: [{
      type: "input_value",
      name: "IF0",
      check: "Boolean"
    }],
    message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    args1: [{
      type: "input_statement",
      name: "DO0"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "logic_blocks",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    mutator: "controls_if_mutator",
    extensions: ["controls_if_tooltip"]
  }, {
    type: "controls_ifelse",
    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
    args0: [{
      type: "input_value",
      name: "IF0",
      check: "Boolean"
    }],
    message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    args1: [{
      type: "input_statement",
      name: "DO0"
    }],
    message2: "%{BKY_CONTROLS_IF_MSG_ELSE} %1",
    args2: [{
      type: "input_statement",
      name: "ELSE"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "logic_blocks",
    tooltip: "%{BKYCONTROLS_IF_TOOLTIP_2}",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    extensions: ["controls_if_tooltip"]
  }, {
    type: "logic_compare",
    message0: "%1 %2 %3",
    args0: [{
      type: "input_value",
      name: "A"
    }, {
      type: "field_dropdown",
      name: "OP",
      options: [["=", "EQ"], ["\u2260", "NEQ"], ["\u200F<", "LT"], ["\u200F\u2264", "LTE"], ["\u200F>", "GT"], ["\u200F\u2265", "GTE"]]
    }, {
      type: "input_value",
      name: "B"
    }],
    inputsInline: !0,
    output: "Boolean",
    style: "logic_blocks",
    helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}",
    extensions: ["logic_compare", "logic_op_tooltip"]
  }, {
    type: "logic_operation",
    message0: "%1 %2 %3",
    args0: [{
      type: "input_value",
      name: "A",
      check: "Boolean"
    }, {
      type: "field_dropdown",
      name: "OP",
      options: [["%{BKY_LOGIC_OPERATION_AND}", "AND"], ["%{BKY_LOGIC_OPERATION_OR}", "OR"]]
    }, {
      type: "input_value",
      name: "B",
      check: "Boolean"
    }],
    inputsInline: !0,
    output: "Boolean",
    style: "logic_blocks",
    helpUrl: "%{BKY_LOGIC_OPERATION_HELPURL}",
    extensions: ["logic_op_tooltip"]
  }, {
    type: "logic_negate",
    message0: "%{BKY_LOGIC_NEGATE_TITLE}",
    args0: [{
      type: "input_value",
      name: "BOOL",
      check: "Boolean"
    }],
    output: "Boolean",
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_NEGATE_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_NEGATE_HELPURL}"
  }, {
    type: "logic_null",
    message0: "%{BKY_LOGIC_NULL}",
    output: null,
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_NULL_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_NULL_HELPURL}"
  }, {
    type: "logic_ternary",
    message0: "%{BKY_LOGIC_TERNARY_CONDITION} %1",
    args0: [{
      type: "input_value",
      name: "IF",
      check: "Boolean"
    }],
    message1: "%{BKY_LOGIC_TERNARY_IF_TRUE} %1",
    args1: [{
      type: "input_value",
      name: "THEN"
    }],
    message2: "%{BKY_LOGIC_TERNARY_IF_FALSE} %1",
    args2: [{
      type: "input_value",
      name: "ELSE"
    }],
    output: null,
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_TERNARY_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_TERNARY_HELPURL}",
    extensions: ["logic_ternary"]
  }]);
  Blockly.defineBlocksWithJsonArray([{
    type: "controls_if_if",
    message0: "%{BKY_CONTROLS_IF_IF_TITLE_IF}",
    nextStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_IF_TOOLTIP}"
  }, {
    type: "controls_if_elseif",
    message0: "%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}",
    previousStatement: null,
    nextStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}"
  }, {
    type: "controls_if_else",
    message0: "%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}",
    previousStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_ELSE_TOOLTIP}"
  }]);
  Blockly.Constants.Logic.TOOLTIPS_BY_OP = {
    EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",
    NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",
    LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",
    LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",
    GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",
    GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",
    AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",
    OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}"
  };
  Blockly.Extensions.register("logic_op_tooltip", Blockly.Extensions.buildTooltipForDropdown("OP", Blockly.Constants.Logic.TOOLTIPS_BY_OP));
  Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN = {
    elseifCount_: 0,
    elseCount_: 0,
    suppressPrefixSuffix: !0,
    mutationToDom: function mutationToDom() {
      if (!this.elseifCount_ && !this.elseCount_) return null;
      var a = Blockly.utils.xml.createElement("mutation");
      this.elseifCount_ && a.setAttribute("elseif", this.elseifCount_);
      this.elseCount_ && a.setAttribute("else", 1);
      return a;
    },
    domToMutation: function domToMutation(a) {
      this.elseifCount_ = parseInt(a.getAttribute("elseif"), 10) || 0;
      this.elseCount_ = parseInt(a.getAttribute("else"), 10) || 0;
      this.rebuildShape_();
    },
    decompose: function decompose(a) {
      var b = a.newBlock("controls_if_if");
      b.initSvg();

      for (var c = b.nextConnection, d = 1; d <= this.elseifCount_; d++) {
        var e = a.newBlock("controls_if_elseif");
        e.initSvg();
        c.connect(e.previousConnection);
        c = e.nextConnection;
      }

      this.elseCount_ && (a = a.newBlock("controls_if_else"), a.initSvg(), c.connect(a.previousConnection));
      return b;
    },
    compose: function compose(a) {
      a = a.nextConnection.targetBlock();
      this.elseCount_ = this.elseifCount_ = 0;

      for (var b = [null], c = [null], d = null; a;) {
        switch (a.type) {
          case "controls_if_elseif":
            this.elseifCount_++;
            b.push(a.valueConnection_);
            c.push(a.statementConnection_);
            break;

          case "controls_if_else":
            this.elseCount_++;
            d = a.statementConnection_;
            break;

          default:
            throw TypeError("Unknown block type: " + a.type);
        }

        a = a.nextConnection && a.nextConnection.targetBlock();
      }

      this.updateShape_();
      this.reconnectChildBlocks_(b, c, d);
    },
    saveConnections: function saveConnections(a) {
      a = a.nextConnection.targetBlock();

      for (var b = 1; a;) {
        switch (a.type) {
          case "controls_if_elseif":
            var c = this.getInput("IF" + b),
                d = this.getInput("DO" + b);
            a.valueConnection_ = c && c.connection.targetConnection;
            a.statementConnection_ = d && d.connection.targetConnection;
            b++;
            break;

          case "controls_if_else":
            d = this.getInput("ELSE");
            a.statementConnection_ = d && d.connection.targetConnection;
            break;

          default:
            throw TypeError("Unknown block type: " + a.type);
        }

        a = a.nextConnection && a.nextConnection.targetBlock();
      }
    },
    rebuildShape_: function rebuildShape_() {
      var a = [null],
          b = [null],
          c = null;
      this.getInput("ELSE") && (c = this.getInput("ELSE").connection.targetConnection);

      for (var d = 1; this.getInput("IF" + d);) {
        var e = this.getInput("IF" + d),
            f = this.getInput("DO" + d);
        a.push(e.connection.targetConnection);
        b.push(f.connection.targetConnection);
        d++;
      }

      this.updateShape_();
      this.reconnectChildBlocks_(a, b, c);
    },
    updateShape_: function updateShape_() {
      this.getInput("ELSE") && this.removeInput("ELSE");

      for (var a = 1; this.getInput("IF" + a);) {
        this.removeInput("IF" + a), this.removeInput("DO" + a), a++;
      }

      for (a = 1; a <= this.elseifCount_; a++) {
        this.appendValueInput("IF" + a).setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF), this.appendStatementInput("DO" + a).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
      }

      this.elseCount_ && this.appendStatementInput("ELSE").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
    },
    reconnectChildBlocks_: function reconnectChildBlocks_(a, b, c) {
      for (var d = 1; d <= this.elseifCount_; d++) {
        Blockly.Mutator.reconnect(a[d], this, "IF" + d), Blockly.Mutator.reconnect(b[d], this, "DO" + d);
      }

      Blockly.Mutator.reconnect(c, this, "ELSE");
    }
  };
  Blockly.Extensions.registerMutator("controls_if_mutator", Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN, null, ["controls_if_elseif", "controls_if_else"]);

  Blockly.Constants.Logic.CONTROLS_IF_TOOLTIP_EXTENSION = function () {
    this.setTooltip(function () {
      if (this.elseifCount_ || this.elseCount_) {
        if (!this.elseifCount_ && this.elseCount_) return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
        if (this.elseifCount_ && !this.elseCount_) return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
        if (this.elseifCount_ && this.elseCount_) return Blockly.Msg.CONTROLS_IF_TOOLTIP_4;
      } else return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;

      return "";
    }.bind(this));
  };

  Blockly.Extensions.register("controls_if_tooltip", Blockly.Constants.Logic.CONTROLS_IF_TOOLTIP_EXTENSION);
  Blockly.Constants.Logic.LOGIC_COMPARE_ONCHANGE_MIXIN = {
    onchange: function onchange(a) {
      this.prevBlocks_ || (this.prevBlocks_ = [null, null]);
      var b = this.getInputTargetBlock("A"),
          c = this.getInputTargetBlock("B");
      b && c && !this.workspace.connectionChecker.doTypeChecks(b.outputConnection, c.outputConnection) && (Blockly.Events.setGroup(a.group), a = this.prevBlocks_[0], a !== b && (b.unplug(), !a || a.isDisposed() || a.isShadow() || this.getInput("A").connection.connect(a.outputConnection)), b = this.prevBlocks_[1], b !== c && (c.unplug(), !b || b.isDisposed() || b.isShadow() || this.getInput("B").connection.connect(b.outputConnection)), this.bumpNeighbours(), Blockly.Events.setGroup(!1));
      this.prevBlocks_[0] = this.getInputTargetBlock("A");
      this.prevBlocks_[1] = this.getInputTargetBlock("B");
    }
  };

  Blockly.Constants.Logic.LOGIC_COMPARE_EXTENSION = function () {
    this.mixin(Blockly.Constants.Logic.LOGIC_COMPARE_ONCHANGE_MIXIN);
  };

  Blockly.Extensions.register("logic_compare", Blockly.Constants.Logic.LOGIC_COMPARE_EXTENSION);
  Blockly.Constants.Logic.LOGIC_TERNARY_ONCHANGE_MIXIN = {
    prevParentConnection_: null,
    onchange: function onchange(a) {
      var b = this.getInputTargetBlock("THEN"),
          c = this.getInputTargetBlock("ELSE"),
          d = this.outputConnection.targetConnection;
      if ((b || c) && d) for (var e = 0; 2 > e; e++) {
        var f = 1 == e ? b : c;
        f && !f.workspace.connectionChecker.doTypeChecks(f.outputConnection, d) && (Blockly.Events.setGroup(a.group), d === this.prevParentConnection_ ? (this.unplug(), d.getSourceBlock().bumpNeighbours()) : (f.unplug(), f.bumpNeighbours()), Blockly.Events.setGroup(!1));
      }
      this.prevParentConnection_ = d;
    }
  };
  Blockly.Extensions.registerMixin("logic_ternary", Blockly.Constants.Logic.LOGIC_TERNARY_ONCHANGE_MIXIN);
  Blockly.Blocks.loops = {};
  Blockly.Constants.Loops = {};
  Blockly.Constants.Loops.HUE = 120;
  Blockly.defineBlocksWithJsonArray([{
    type: "controls_repeat_ext",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [{
      type: "input_value",
      name: "TIMES",
      check: "Number"
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
      type: "input_statement",
      name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}"
  }, {
    type: "controls_repeat",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [{
      type: "field_number",
      name: "TIMES",
      value: 10,
      min: 0,
      precision: 1
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
      type: "input_statement",
      name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}"
  }, {
    type: "controls_whileUntil",
    message0: "%1 %2",
    args0: [{
      type: "field_dropdown",
      name: "MODE",
      options: [["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}", "WHILE"], ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}", "UNTIL"]]
    }, {
      type: "input_value",
      name: "BOOL",
      check: "Boolean"
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
      type: "input_statement",
      name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_WHILEUNTIL_HELPURL}",
    extensions: ["controls_whileUntil_tooltip"]
  }, {
    type: "controls_for",
    message0: "%{BKY_CONTROLS_FOR_TITLE}",
    args0: [{
      type: "field_variable",
      name: "VAR",
      variable: null
    }, {
      type: "input_value",
      name: "FROM",
      check: "Number",
      align: "RIGHT"
    }, {
      type: "input_value",
      name: "TO",
      check: "Number",
      align: "RIGHT"
    }, {
      type: "input_value",
      name: "BY",
      check: "Number",
      align: "RIGHT"
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
      type: "input_statement",
      name: "DO"
    }],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FOR_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_for_tooltip"]
  }, {
    type: "controls_forEach",
    message0: "%{BKY_CONTROLS_FOREACH_TITLE}",
    args0: [{
      type: "field_variable",
      name: "VAR",
      variable: null
    }, {
      type: "input_value",
      name: "LIST",
      check: "Array"
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
      type: "input_statement",
      name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FOREACH_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_forEach_tooltip"]
  }, {
    type: "controls_flow_statements",
    message0: "%1",
    args0: [{
      type: "field_dropdown",
      name: "FLOW",
      options: [["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK}", "BREAK"], ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE}", "CONTINUE"]]
    }],
    previousStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FLOW_STATEMENTS_HELPURL}",
    extensions: ["controls_flow_tooltip", "controls_flow_in_loop_check"]
  }]);
  Blockly.Constants.Loops.WHILE_UNTIL_TOOLTIPS = {
    WHILE: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}",
    UNTIL: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}"
  };
  Blockly.Extensions.register("controls_whileUntil_tooltip", Blockly.Extensions.buildTooltipForDropdown("MODE", Blockly.Constants.Loops.WHILE_UNTIL_TOOLTIPS));
  Blockly.Constants.Loops.BREAK_CONTINUE_TOOLTIPS = {
    BREAK: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}",
    CONTINUE: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}"
  };
  Blockly.Extensions.register("controls_flow_tooltip", Blockly.Extensions.buildTooltipForDropdown("FLOW", Blockly.Constants.Loops.BREAK_CONTINUE_TOOLTIPS));
  Blockly.Constants.Loops.CUSTOM_CONTEXT_MENU_CREATE_VARIABLES_GET_MIXIN = {
    customContextMenu: function customContextMenu(a) {
      if (!this.isInFlyout) {
        var b = this.getField("VAR").getVariable(),
            c = b.name;

        if (!this.isCollapsed() && null != c) {
          var d = {
            enabled: !0
          };
          d.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", c);
          b = Blockly.Variables.generateVariableFieldDom(b);
          c = Blockly.utils.xml.createElement("block");
          c.setAttribute("type", "variables_get");
          c.appendChild(b);
          d.callback = Blockly.ContextMenu.callbackFactory(this, c);
          a.push(d);
        }
      }
    }
  };
  Blockly.Extensions.registerMixin("contextMenu_newGetVariableBlock", Blockly.Constants.Loops.CUSTOM_CONTEXT_MENU_CREATE_VARIABLES_GET_MIXIN);
  Blockly.Extensions.register("controls_for_tooltip", Blockly.Extensions.buildTooltipWithFieldText("%{BKY_CONTROLS_FOR_TOOLTIP}", "VAR"));
  Blockly.Extensions.register("controls_forEach_tooltip", Blockly.Extensions.buildTooltipWithFieldText("%{BKY_CONTROLS_FOREACH_TOOLTIP}", "VAR"));
  Blockly.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN = {
    LOOP_TYPES: ["controls_repeat", "controls_repeat_ext", "controls_forEach", "controls_for", "controls_whileUntil"],
    suppressPrefixSuffix: !0,
    getSurroundLoop: function getSurroundLoop(a) {
      do {
        if (-1 != Blockly.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN.LOOP_TYPES.indexOf(a.type)) return a;
        a = a.getSurroundParent();
      } while (a);

      return null;
    },
    onchange: function onchange(a) {
      if (this.workspace.isDragging && !this.workspace.isDragging() && a.type == Blockly.Events.BLOCK_MOVE && a.blockId == this.id) {
        var b = Blockly.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN.getSurroundLoop(this);
        this.setWarningText(b ? null : Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING);

        if (!this.isInFlyout) {
          var c = Blockly.Events.getGroup();
          Blockly.Events.setGroup(a.group);
          this.setEnabled(b);
          Blockly.Events.setGroup(c);
        }
      }
    }
  };
  Blockly.Extensions.registerMixin("controls_flow_in_loop_check", Blockly.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN);
  Blockly.Blocks.math = {};
  Blockly.Constants.Math = {};
  Blockly.Constants.Math.HUE = 230;
  Blockly.defineBlocksWithJsonArray([{
    type: "math_number",
    message0: "%1",
    args0: [{
      type: "field_number",
      name: "NUM",
      value: 0
    }],
    output: "Number",
    helpUrl: "%{BKY_MATH_NUMBER_HELPURL}",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_NUMBER_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"]
  }, {
    type: "math_arithmetic",
    message0: "%1 %2 %3",
    args0: [{
      type: "input_value",
      name: "A",
      check: "Number"
    }, {
      type: "field_dropdown",
      name: "OP",
      options: [["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"], ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"], ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"], ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"], ["%{BKY_MATH_POWER_SYMBOL}", "POWER"]]
    }, {
      type: "input_value",
      name: "B",
      check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
    extensions: ["math_op_tooltip"]
  }, {
    type: "math_single",
    message0: "%1 %2",
    args0: [{
      type: "field_dropdown",
      name: "OP",
      options: [["%{BKY_MATH_SINGLE_OP_ROOT}", "ROOT"], ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", "ABS"], ["-", "NEG"], ["ln", "LN"], ["log10", "LOG10"], ["e^", "EXP"], ["10^", "POW10"]]
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
    type: "math_trig",
    message0: "%1 %2",
    args0: [{
      type: "field_dropdown",
      name: "OP",
      options: [["%{BKY_MATH_TRIG_SIN}", "SIN"], ["%{BKY_MATH_TRIG_COS}", "COS"], ["%{BKY_MATH_TRIG_TAN}", "TAN"], ["%{BKY_MATH_TRIG_ASIN}", "ASIN"], ["%{BKY_MATH_TRIG_ACOS}", "ACOS"], ["%{BKY_MATH_TRIG_ATAN}", "ATAN"]]
    }, {
      type: "input_value",
      name: "NUM",
      check: "Number"
    }],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_TRIG_HELPURL}",
    extensions: ["math_op_tooltip"]
  }, {
    type: "math_constant",
    message0: "%1",
    args0: [{
      type: "field_dropdown",
      name: "CONSTANT",
      options: [["\u03C0", "PI"], ["e", "E"], ["\u03C6", "GOLDEN_RATIO"], ["sqrt(2)", "SQRT2"], ["sqrt(\xBD)", "SQRT1_2"], ["\u221E", "INFINITY"]]
    }],
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_CONSTANT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTANT_HELPURL}"
  }, {
    type: "math_number_property",
    message0: "%1 %2",
    args0: [{
      type: "input_value",
      name: "NUMBER_TO_CHECK",
      check: "Number"
    }, {
      type: "field_dropdown",
      name: "PROPERTY",
      options: [["%{BKY_MATH_IS_EVEN}", "EVEN"], ["%{BKY_MATH_IS_ODD}", "ODD"], ["%{BKY_MATH_IS_PRIME}", "PRIME"], ["%{BKY_MATH_IS_WHOLE}", "WHOLE"], ["%{BKY_MATH_IS_POSITIVE}", "POSITIVE"], ["%{BKY_MATH_IS_NEGATIVE}", "NEGATIVE"], ["%{BKY_MATH_IS_DIVISIBLE_BY}", "DIVISIBLE_BY"]]
    }],
    inputsInline: !0,
    output: "Boolean",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_IS_TOOLTIP}",
    mutator: "math_is_divisibleby_mutator"
  }, {
    type: "math_change",
    message0: "%{BKY_MATH_CHANGE_TITLE}",
    args0: [{
      type: "field_variable",
      name: "VAR",
      variable: "%{BKY_MATH_CHANGE_TITLE_ITEM}"
    }, {
      type: "input_value",
      name: "DELTA",
      check: "Number"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_MATH_CHANGE_HELPURL}",
    extensions: ["math_change_tooltip"]
  }, {
    type: "math_round",
    message0: "%1 %2",
    args0: [{
      type: "field_dropdown",
      name: "OP",
      options: [["%{BKY_MATH_ROUND_OPERATOR_ROUND}", "ROUND"], ["%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}", "ROUNDUP"], ["%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}", "ROUNDDOWN"]]
    }, {
      type: "input_value",
      name: "NUM",
      check: "Number"
    }],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ROUND_HELPURL}",
    tooltip: "%{BKY_MATH_ROUND_TOOLTIP}"
  }, {
    type: "math_on_list",
    message0: "%1 %2",
    args0: [{
      type: "field_dropdown",
      name: "OP",
      options: [["%{BKY_MATH_ONLIST_OPERATOR_SUM}", "SUM"], ["%{BKY_MATH_ONLIST_OPERATOR_MIN}", "MIN"], ["%{BKY_MATH_ONLIST_OPERATOR_MAX}", "MAX"], ["%{BKY_MATH_ONLIST_OPERATOR_AVERAGE}", "AVERAGE"], ["%{BKY_MATH_ONLIST_OPERATOR_MEDIAN}", "MEDIAN"], ["%{BKY_MATH_ONLIST_OPERATOR_MODE}", "MODE"], ["%{BKY_MATH_ONLIST_OPERATOR_STD_DEV}", "STD_DEV"], ["%{BKY_MATH_ONLIST_OPERATOR_RANDOM}", "RANDOM"]]
    }, {
      type: "input_value",
      name: "LIST",
      check: "Array"
    }],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ONLIST_HELPURL}",
    mutator: "math_modes_of_list_mutator",
    extensions: ["math_op_tooltip"]
  }, {
    type: "math_modulo",
    message0: "%{BKY_MATH_MODULO_TITLE}",
    args0: [{
      type: "input_value",
      name: "DIVIDEND",
      check: "Number"
    }, {
      type: "input_value",
      name: "DIVISOR",
      check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_MODULO_TOOLTIP}",
    helpUrl: "%{BKY_MATH_MODULO_HELPURL}"
  }, {
    type: "math_constrain",
    message0: "%{BKY_MATH_CONSTRAIN_TITLE}",
    args0: [{
      type: "input_value",
      name: "VALUE",
      check: "Number"
    }, {
      type: "input_value",
      name: "LOW",
      check: "Number"
    }, {
      type: "input_value",
      name: "HIGH",
      check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_CONSTRAIN_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTRAIN_HELPURL}"
  }, {
    type: "math_random_int",
    message0: "%{BKY_MATH_RANDOM_INT_TITLE}",
    args0: [{
      type: "input_value",
      name: "FROM",
      check: "Number"
    }, {
      type: "input_value",
      name: "TO",
      check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_RANDOM_INT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_INT_HELPURL}"
  }, {
    type: "math_random_float",
    message0: "%{BKY_MATH_RANDOM_FLOAT_TITLE_RANDOM}",
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_RANDOM_FLOAT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_FLOAT_HELPURL}"
  }, {
    type: "math_atan2",
    message0: "%{BKY_MATH_ATAN2_TITLE}",
    args0: [{
      type: "input_value",
      name: "X",
      check: "Number"
    }, {
      type: "input_value",
      name: "Y",
      check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_ATAN2_TOOLTIP}",
    helpUrl: "%{BKY_MATH_ATAN2_HELPURL}"
  }]);
  Blockly.Constants.Math.TOOLTIPS_BY_OP = {
    ADD: "%{BKY_MATH_ARITHMETIC_TOOLTIP_ADD}",
    MINUS: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MINUS}",
    MULTIPLY: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MULTIPLY}",
    DIVIDE: "%{BKY_MATH_ARITHMETIC_TOOLTIP_DIVIDE}",
    POWER: "%{BKY_MATH_ARITHMETIC_TOOLTIP_POWER}",
    ROOT: "%{BKY_MATH_SINGLE_TOOLTIP_ROOT}",
    ABS: "%{BKY_MATH_SINGLE_TOOLTIP_ABS}",
    NEG: "%{BKY_MATH_SINGLE_TOOLTIP_NEG}",
    LN: "%{BKY_MATH_SINGLE_TOOLTIP_LN}",
    LOG10: "%{BKY_MATH_SINGLE_TOOLTIP_LOG10}",
    EXP: "%{BKY_MATH_SINGLE_TOOLTIP_EXP}",
    POW10: "%{BKY_MATH_SINGLE_TOOLTIP_POW10}",
    SIN: "%{BKY_MATH_TRIG_TOOLTIP_SIN}",
    COS: "%{BKY_MATH_TRIG_TOOLTIP_COS}",
    TAN: "%{BKY_MATH_TRIG_TOOLTIP_TAN}",
    ASIN: "%{BKY_MATH_TRIG_TOOLTIP_ASIN}",
    ACOS: "%{BKY_MATH_TRIG_TOOLTIP_ACOS}",
    ATAN: "%{BKY_MATH_TRIG_TOOLTIP_ATAN}",
    SUM: "%{BKY_MATH_ONLIST_TOOLTIP_SUM}",
    MIN: "%{BKY_MATH_ONLIST_TOOLTIP_MIN}",
    MAX: "%{BKY_MATH_ONLIST_TOOLTIP_MAX}",
    AVERAGE: "%{BKY_MATH_ONLIST_TOOLTIP_AVERAGE}",
    MEDIAN: "%{BKY_MATH_ONLIST_TOOLTIP_MEDIAN}",
    MODE: "%{BKY_MATH_ONLIST_TOOLTIP_MODE}",
    STD_DEV: "%{BKY_MATH_ONLIST_TOOLTIP_STD_DEV}",
    RANDOM: "%{BKY_MATH_ONLIST_TOOLTIP_RANDOM}"
  };
  Blockly.Extensions.register("math_op_tooltip", Blockly.Extensions.buildTooltipForDropdown("OP", Blockly.Constants.Math.TOOLTIPS_BY_OP));
  Blockly.Constants.Math.IS_DIVISIBLEBY_MUTATOR_MIXIN = {
    mutationToDom: function mutationToDom() {
      var a = Blockly.utils.xml.createElement("mutation"),
          b = "DIVISIBLE_BY" == this.getFieldValue("PROPERTY");
      a.setAttribute("divisor_input", b);
      return a;
    },
    domToMutation: function domToMutation(a) {
      a = "true" == a.getAttribute("divisor_input");
      this.updateShape_(a);
    },
    updateShape_: function updateShape_(a) {
      var b = this.getInput("DIVISOR");
      a ? b || this.appendValueInput("DIVISOR").setCheck("Number") : b && this.removeInput("DIVISOR");
    }
  };

  Blockly.Constants.Math.IS_DIVISIBLE_MUTATOR_EXTENSION = function () {
    this.getField("PROPERTY").setValidator(function (a) {
      a = "DIVISIBLE_BY" == a;
      this.getSourceBlock().updateShape_(a);
    });
  };

  Blockly.Extensions.registerMutator("math_is_divisibleby_mutator", Blockly.Constants.Math.IS_DIVISIBLEBY_MUTATOR_MIXIN, Blockly.Constants.Math.IS_DIVISIBLE_MUTATOR_EXTENSION);
  Blockly.Extensions.register("math_change_tooltip", Blockly.Extensions.buildTooltipWithFieldText("%{BKY_MATH_CHANGE_TOOLTIP}", "VAR"));
  Blockly.Constants.Math.LIST_MODES_MUTATOR_MIXIN = {
    updateType_: function updateType_(a) {
      "MODE" == a ? this.outputConnection.setCheck("Array") : this.outputConnection.setCheck("Number");
    },
    mutationToDom: function mutationToDom() {
      var a = Blockly.utils.xml.createElement("mutation");
      a.setAttribute("op", this.getFieldValue("OP"));
      return a;
    },
    domToMutation: function domToMutation(a) {
      this.updateType_(a.getAttribute("op"));
    }
  };

  Blockly.Constants.Math.LIST_MODES_MUTATOR_EXTENSION = function () {
    this.getField("OP").setValidator(function (a) {
      this.updateType_(a);
    }.bind(this));
  };

  Blockly.Extensions.registerMutator("math_modes_of_list_mutator", Blockly.Constants.Math.LIST_MODES_MUTATOR_MIXIN, Blockly.Constants.Math.LIST_MODES_MUTATOR_EXTENSION);
  Blockly.Blocks.procedures = {};
  Blockly.Blocks.procedures_defnoreturn = {
    init: function init() {
      var a = new Blockly.FieldTextInput("", Blockly.Procedures.rename);
      a.setSpellcheck(!1);
      this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE).appendField(a, "NAME").appendField("", "PARAMS");
      this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
      (this.workspace.options.comments || this.workspace.options.parentWorkspace && this.workspace.options.parentWorkspace.options.comments) && Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT && this.setCommentText(Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT);
      this.setStyle("procedure_blocks");
      this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
      this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL);
      this.arguments_ = [];
      this.argumentVarModels_ = [];
      this.setStatements_(!0);
      this.statementConnection_ = null;
    },
    setStatements_: function setStatements_(a) {
      this.hasStatements_ !== a && (a ? (this.appendStatementInput("STACK").appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_DO), this.getInput("RETURN") && this.moveInputBefore("STACK", "RETURN")) : this.removeInput("STACK", !0), this.hasStatements_ = a);
    },
    updateParams_: function updateParams_() {
      var a = "";
      this.arguments_.length && (a = Blockly.Msg.PROCEDURES_BEFORE_PARAMS + " " + this.arguments_.join(", "));
      Blockly.Events.disable();

      try {
        this.setFieldValue(a, "PARAMS");
      } finally {
        Blockly.Events.enable();
      }
    },
    mutationToDom: function mutationToDom(a) {
      var b = Blockly.utils.xml.createElement("mutation");
      a && b.setAttribute("name", this.getFieldValue("NAME"));

      for (var c = 0; c < this.argumentVarModels_.length; c++) {
        var d = Blockly.utils.xml.createElement("arg"),
            e = this.argumentVarModels_[c];
        d.setAttribute("name", e.name);
        d.setAttribute("varid", e.getId());
        a && this.paramIds_ && d.setAttribute("paramId", this.paramIds_[c]);
        b.appendChild(d);
      }

      this.hasStatements_ || b.setAttribute("statements", "false");
      return b;
    },
    domToMutation: function domToMutation(a) {
      this.arguments_ = [];
      this.argumentVarModels_ = [];

      for (var b = 0, c; c = a.childNodes[b]; b++) {
        if ("arg" == c.nodeName.toLowerCase()) {
          var d = c.getAttribute("name");
          c = c.getAttribute("varid") || c.getAttribute("varId");
          this.arguments_.push(d);
          c = Blockly.Variables.getOrCreateVariablePackage(this.workspace, c, d, "");
          null != c ? this.argumentVarModels_.push(c) : console.log("Failed to create a variable with name " + d + ", ignoring.");
        }
      }

      this.updateParams_();
      Blockly.Procedures.mutateCallers(this);
      this.setStatements_("false" !== a.getAttribute("statements"));
    },
    decompose: function decompose(a) {
      var b = Blockly.utils.xml.createElement("block");
      b.setAttribute("type", "procedures_mutatorcontainer");
      var c = Blockly.utils.xml.createElement("statement");
      c.setAttribute("name", "STACK");
      b.appendChild(c);

      for (var d = 0; d < this.arguments_.length; d++) {
        var e = Blockly.utils.xml.createElement("block");
        e.setAttribute("type", "procedures_mutatorarg");
        var f = Blockly.utils.xml.createElement("field");
        f.setAttribute("name", "NAME");
        var g = Blockly.utils.xml.createTextNode(this.arguments_[d]);
        f.appendChild(g);
        e.appendChild(f);
        f = Blockly.utils.xml.createElement("next");
        e.appendChild(f);
        c.appendChild(e);
        c = f;
      }

      a = Blockly.Xml.domToBlock(b, a);
      "procedures_defreturn" == this.type ? a.setFieldValue(this.hasStatements_, "STATEMENTS") : a.removeInput("STATEMENT_INPUT");
      Blockly.Procedures.mutateCallers(this);
      return a;
    },
    compose: function compose(a) {
      this.arguments_ = [];
      this.paramIds_ = [];
      this.argumentVarModels_ = [];

      for (var b = a.getInputTargetBlock("STACK"); b;) {
        var c = b.getFieldValue("NAME");
        this.arguments_.push(c);
        c = this.workspace.getVariable(c, "");
        this.argumentVarModels_.push(c);
        this.paramIds_.push(b.id);
        b = b.nextConnection && b.nextConnection.targetBlock();
      }

      this.updateParams_();
      Blockly.Procedures.mutateCallers(this);
      a = a.getFieldValue("STATEMENTS");
      if (null !== a && (a = "TRUE" == a, this.hasStatements_ != a)) if (a) this.setStatements_(!0), Blockly.Mutator.reconnect(this.statementConnection_, this, "STACK"), this.statementConnection_ = null;else {
        a = this.getInput("STACK").connection;
        if (this.statementConnection_ = a.targetConnection) a = a.targetBlock(), a.unplug(), a.bumpNeighbours();
        this.setStatements_(!1);
      }
    },
    getProcedureDef: function getProcedureDef() {
      return [this.getFieldValue("NAME"), this.arguments_, !1];
    },
    getVars: function getVars() {
      return this.arguments_;
    },
    getVarModels: function getVarModels() {
      return this.argumentVarModels_;
    },
    renameVarById: function renameVarById(a, b) {
      var c = this.workspace.getVariableById(a);

      if ("" == c.type) {
        c = c.name;
        b = this.workspace.getVariableById(b);

        for (var d = !1, e = 0; e < this.argumentVarModels_.length; e++) {
          this.argumentVarModels_[e].getId() == a && (this.arguments_[e] = b.name, this.argumentVarModels_[e] = b, d = !0);
        }

        d && (this.displayRenamedVar_(c, b.name), Blockly.Procedures.mutateCallers(this));
      }
    },
    updateVarName: function updateVarName(a) {
      for (var b = a.name, c = !1, d = 0; d < this.argumentVarModels_.length; d++) {
        if (this.argumentVarModels_[d].getId() == a.getId()) {
          var e = this.arguments_[d];
          this.arguments_[d] = b;
          c = !0;
        }
      }

      c && (this.displayRenamedVar_(e, b), Blockly.Procedures.mutateCallers(this));
    },
    displayRenamedVar_: function displayRenamedVar_(a, b) {
      this.updateParams_();
      if (this.mutator && this.mutator.isVisible()) for (var c = this.mutator.workspace_.getAllBlocks(!1), d = 0, e; e = c[d]; d++) {
        "procedures_mutatorarg" == e.type && Blockly.Names.equals(a, e.getFieldValue("NAME")) && e.setFieldValue(b, "NAME");
      }
    },
    customContextMenu: function customContextMenu(a) {
      if (!this.isInFlyout) {
        var b = {
          enabled: !0
        },
            c = this.getFieldValue("NAME");
        b.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace("%1", c);
        var d = Blockly.utils.xml.createElement("mutation");
        d.setAttribute("name", c);

        for (c = 0; c < this.arguments_.length; c++) {
          var e = Blockly.utils.xml.createElement("arg");
          e.setAttribute("name", this.arguments_[c]);
          d.appendChild(e);
        }

        c = Blockly.utils.xml.createElement("block");
        c.setAttribute("type", this.callType_);
        c.appendChild(d);
        b.callback = Blockly.ContextMenu.callbackFactory(this, c);
        a.push(b);
        if (!this.isCollapsed()) for (c = 0; c < this.argumentVarModels_.length; c++) {
          b = {
            enabled: !0
          }, d = this.argumentVarModels_[c], b.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", d.name), d = Blockly.Variables.generateVariableFieldDom(d), e = Blockly.utils.xml.createElement("block"), e.setAttribute("type", "variables_get"), e.appendChild(d), b.callback = Blockly.ContextMenu.callbackFactory(this, e), a.push(b);
        }
      }
    },
    callType_: "procedures_callnoreturn"
  };
  Blockly.Blocks.procedures_defreturn = {
    init: function init() {
      var a = new Blockly.FieldTextInput("", Blockly.Procedures.rename);
      a.setSpellcheck(!1);
      this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE).appendField(a, "NAME").appendField("", "PARAMS");
      this.appendValueInput("RETURN").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
      this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
      (this.workspace.options.comments || this.workspace.options.parentWorkspace && this.workspace.options.parentWorkspace.options.comments) && Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT && this.setCommentText(Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT);
      this.setStyle("procedure_blocks");
      this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
      this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
      this.arguments_ = [];
      this.argumentVarModels_ = [];
      this.setStatements_(!0);
      this.statementConnection_ = null;
    },
    setStatements_: Blockly.Blocks.procedures_defnoreturn.setStatements_,
    updateParams_: Blockly.Blocks.procedures_defnoreturn.updateParams_,
    mutationToDom: Blockly.Blocks.procedures_defnoreturn.mutationToDom,
    domToMutation: Blockly.Blocks.procedures_defnoreturn.domToMutation,
    decompose: Blockly.Blocks.procedures_defnoreturn.decompose,
    compose: Blockly.Blocks.procedures_defnoreturn.compose,
    getProcedureDef: function getProcedureDef() {
      return [this.getFieldValue("NAME"), this.arguments_, !0];
    },
    getVars: Blockly.Blocks.procedures_defnoreturn.getVars,
    getVarModels: Blockly.Blocks.procedures_defnoreturn.getVarModels,
    renameVarById: Blockly.Blocks.procedures_defnoreturn.renameVarById,
    updateVarName: Blockly.Blocks.procedures_defnoreturn.updateVarName,
    displayRenamedVar_: Blockly.Blocks.procedures_defnoreturn.displayRenamedVar_,
    customContextMenu: Blockly.Blocks.procedures_defnoreturn.customContextMenu,
    callType_: "procedures_callreturn"
  };
  Blockly.Blocks.procedures_mutatorcontainer = {
    init: function init() {
      this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE);
      this.appendStatementInput("STACK");
      this.appendDummyInput("STATEMENT_INPUT").appendField(Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS).appendField(new Blockly.FieldCheckbox("TRUE"), "STATEMENTS");
      this.setStyle("procedure_blocks");
      this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
      this.contextMenu = !1;
    }
  };
  Blockly.Blocks.procedures_mutatorarg = {
    init: function init() {
      var a = new Blockly.FieldTextInput(Blockly.Procedures.DEFAULT_ARG, this.validator_);
      a.oldShowEditorFn_ = a.showEditor_;

      a.showEditor_ = function () {
        this.createdVariables_ = [];
        this.oldShowEditorFn_();
      };

      this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE).appendField(a, "NAME");
      this.setPreviousStatement(!0);
      this.setNextStatement(!0);
      this.setStyle("procedure_blocks");
      this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);
      this.contextMenu = !1;
      a.onFinishEditing_ = this.deleteIntermediateVars_;
      a.createdVariables_ = [];
      a.onFinishEditing_("x");
    },
    validator_: function validator_(a) {
      var b = this.getSourceBlock(),
          c = Blockly.Mutator.findParentWs(b.workspace);
      a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
      if (!a) return null;

      for (var d = (b.workspace.targetWorkspace || b.workspace).getAllBlocks(!1), e = a.toLowerCase(), f = 0; f < d.length; f++) {
        if (d[f].id != this.getSourceBlock().id) {
          var g = d[f].getFieldValue("NAME");
          if (g && g.toLowerCase() == e) return null;
        }
      }

      if (b.isInFlyout) return a;
      (b = c.getVariable(a, "")) && b.name != a && c.renameVariableById(b.getId(), a);
      b || (b = c.createVariable(a, "")) && this.createdVariables_ && this.createdVariables_.push(b);
      return a;
    },
    deleteIntermediateVars_: function deleteIntermediateVars_(a) {
      var b = Blockly.Mutator.findParentWs(this.getSourceBlock().workspace);
      if (b) for (var c = 0; c < this.createdVariables_.length; c++) {
        var d = this.createdVariables_[c];
        d.name != a && b.deleteVariableById(d.getId());
      }
    }
  };
  Blockly.Blocks.procedures_callnoreturn = {
    init: function init() {
      this.appendDummyInput("TOPROW").appendField(this.id, "NAME");
      this.setPreviousStatement(!0);
      this.setNextStatement(!0);
      this.setStyle("procedure_blocks");
      this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL);
      this.arguments_ = [];
      this.argumentVarModels_ = [];
      this.quarkConnections_ = {};
      this.quarkIds_ = null;
      this.previousEnabledState_ = !0;
    },
    getProcedureCall: function getProcedureCall() {
      return this.getFieldValue("NAME");
    },
    renameProcedure: function renameProcedure(a, b) {
      Blockly.Names.equals(a, this.getProcedureCall()) && (this.setFieldValue(b, "NAME"), this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", b)));
    },
    setProcedureParameters_: function setProcedureParameters_(a, b) {
      var c = Blockly.Procedures.getDefinition(this.getProcedureCall(), this.workspace),
          d = c && c.mutator && c.mutator.isVisible();
      d || (this.quarkConnections_ = {}, this.quarkIds_ = null);
      if (b) if (a.join("\n") == this.arguments_.join("\n")) this.quarkIds_ = b;else {
        if (b.length != a.length) throw RangeError("paramNames and paramIds must be the same length.");
        this.setCollapsed(!1);
        this.quarkIds_ || (this.quarkConnections_ = {}, this.quarkIds_ = []);
        c = this.rendered;
        this.rendered = !1;

        for (var e = 0; e < this.arguments_.length; e++) {
          var f = this.getInput("ARG" + e);
          f && (f = f.connection.targetConnection, this.quarkConnections_[this.quarkIds_[e]] = f, d && f && -1 == b.indexOf(this.quarkIds_[e]) && (f.disconnect(), f.getSourceBlock().bumpNeighbours()));
        }

        this.arguments_ = [].concat(a);
        this.argumentVarModels_ = [];

        for (e = 0; e < this.arguments_.length; e++) {
          a = Blockly.Variables.getOrCreateVariablePackage(this.workspace, null, this.arguments_[e], ""), this.argumentVarModels_.push(a);
        }

        this.updateShape_();
        if (this.quarkIds_ = b) for (e = 0; e < this.arguments_.length; e++) {
          b = this.quarkIds_[e], b in this.quarkConnections_ && (f = this.quarkConnections_[b], Blockly.Mutator.reconnect(f, this, "ARG" + e) || delete this.quarkConnections_[b]);
        }
        (this.rendered = c) && this.render();
      }
    },
    updateShape_: function updateShape_() {
      for (var a = 0; a < this.arguments_.length; a++) {
        var b = this.getField("ARGNAME" + a);

        if (b) {
          Blockly.Events.disable();

          try {
            b.setValue(this.arguments_[a]);
          } finally {
            Blockly.Events.enable();
          }
        } else b = new Blockly.FieldLabel(this.arguments_[a]), this.appendValueInput("ARG" + a).setAlign(Blockly.ALIGN_RIGHT).appendField(b, "ARGNAME" + a).init();
      }

      for (; this.getInput("ARG" + a);) {
        this.removeInput("ARG" + a), a++;
      }

      if (a = this.getInput("TOPROW")) this.arguments_.length ? this.getField("WITH") || (a.appendField(Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"), a.init()) : this.getField("WITH") && a.removeField("WITH");
    },
    mutationToDom: function mutationToDom() {
      var a = Blockly.utils.xml.createElement("mutation");
      a.setAttribute("name", this.getProcedureCall());

      for (var b = 0; b < this.arguments_.length; b++) {
        var c = Blockly.utils.xml.createElement("arg");
        c.setAttribute("name", this.arguments_[b]);
        a.appendChild(c);
      }

      return a;
    },
    domToMutation: function domToMutation(a) {
      var b = a.getAttribute("name");
      this.renameProcedure(this.getProcedureCall(), b);
      b = [];

      for (var c = [], d = 0, e; e = a.childNodes[d]; d++) {
        "arg" == e.nodeName.toLowerCase() && (b.push(e.getAttribute("name")), c.push(e.getAttribute("paramId")));
      }

      this.setProcedureParameters_(b, c);
    },
    getVars: function getVars() {
      return this.arguments_;
    },
    getVarModels: function getVarModels() {
      return this.argumentVarModels_;
    },
    onchange: function onchange(a) {
      if (this.workspace && !this.workspace.isFlyout && a.recordUndo) if (a.type == Blockly.Events.BLOCK_CREATE && -1 != a.ids.indexOf(this.id)) {
        var b = this.getProcedureCall();
        b = Blockly.Procedures.getDefinition(b, this.workspace);
        !b || b.type == this.defType_ && JSON.stringify(b.getVars()) == JSON.stringify(this.arguments_) || (b = null);

        if (!b) {
          Blockly.Events.setGroup(a.group);
          a = Blockly.utils.xml.createElement("xml");
          b = Blockly.utils.xml.createElement("block");
          b.setAttribute("type", this.defType_);
          var c = this.getRelativeToSurfaceXY(),
              d = c.y + 2 * Blockly.SNAP_RADIUS;
          b.setAttribute("x", c.x + Blockly.SNAP_RADIUS * (this.RTL ? -1 : 1));
          b.setAttribute("y", d);
          c = this.mutationToDom();
          b.appendChild(c);
          c = Blockly.utils.xml.createElement("field");
          c.setAttribute("name", "NAME");
          c.appendChild(Blockly.utils.xml.createTextNode(this.getProcedureCall()));
          b.appendChild(c);
          a.appendChild(b);
          Blockly.Xml.domToWorkspace(a, this.workspace);
          Blockly.Events.setGroup(!1);
        }
      } else a.type == Blockly.Events.BLOCK_DELETE ? (b = this.getProcedureCall(), b = Blockly.Procedures.getDefinition(b, this.workspace), b || (Blockly.Events.setGroup(a.group), this.dispose(!0), Blockly.Events.setGroup(!1))) : a.type == Blockly.Events.CHANGE && "disabled" == a.element && (b = this.getProcedureCall(), (b = Blockly.Procedures.getDefinition(b, this.workspace)) && b.id == a.blockId && ((b = Blockly.Events.getGroup()) && console.log("Saw an existing group while responding to a definition change"), Blockly.Events.setGroup(a.group), a.newValue ? (this.previousEnabledState_ = this.isEnabled(), this.setEnabled(!1)) : this.setEnabled(this.previousEnabledState_), Blockly.Events.setGroup(b)));
    },
    customContextMenu: function customContextMenu(a) {
      if (this.workspace.isMovable()) {
        var b = {
          enabled: !0
        };
        b.text = Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;
        var c = this.getProcedureCall(),
            d = this.workspace;

        b.callback = function () {
          var e = Blockly.Procedures.getDefinition(c, d);
          e && (d.centerOnBlock(e.id), e.select());
        };

        a.push(b);
      }
    },
    defType_: "procedures_defnoreturn"
  };
  Blockly.Blocks.procedures_callreturn = {
    init: function init() {
      this.appendDummyInput("TOPROW").appendField("", "NAME");
      this.setOutput(!0);
      this.setStyle("procedure_blocks");
      this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL);
      this.arguments_ = [];
      this.quarkConnections_ = {};
      this.quarkIds_ = null;
      this.previousEnabledState_ = !0;
    },
    getProcedureCall: Blockly.Blocks.procedures_callnoreturn.getProcedureCall,
    renameProcedure: Blockly.Blocks.procedures_callnoreturn.renameProcedure,
    setProcedureParameters_: Blockly.Blocks.procedures_callnoreturn.setProcedureParameters_,
    updateShape_: Blockly.Blocks.procedures_callnoreturn.updateShape_,
    mutationToDom: Blockly.Blocks.procedures_callnoreturn.mutationToDom,
    domToMutation: Blockly.Blocks.procedures_callnoreturn.domToMutation,
    getVars: Blockly.Blocks.procedures_callnoreturn.getVars,
    getVarModels: Blockly.Blocks.procedures_callnoreturn.getVarModels,
    onchange: Blockly.Blocks.procedures_callnoreturn.onchange,
    customContextMenu: Blockly.Blocks.procedures_callnoreturn.customContextMenu,
    defType_: "procedures_defreturn"
  };
  Blockly.Blocks.procedures_ifreturn = {
    init: function init() {
      this.appendValueInput("CONDITION").setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
      this.appendValueInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
      this.setInputsInline(!0);
      this.setPreviousStatement(!0);
      this.setNextStatement(!0);
      this.setStyle("procedure_blocks");
      this.setTooltip(Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP);
      this.setHelpUrl(Blockly.Msg.PROCEDURES_IFRETURN_HELPURL);
      this.hasReturnValue_ = !0;
    },
    mutationToDom: function mutationToDom() {
      var a = Blockly.utils.xml.createElement("mutation");
      a.setAttribute("value", Number(this.hasReturnValue_));
      return a;
    },
    domToMutation: function domToMutation(a) {
      this.hasReturnValue_ = 1 == a.getAttribute("value");
      this.hasReturnValue_ || (this.removeInput("VALUE"), this.appendDummyInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN));
    },
    onchange: function onchange(a) {
      if (this.workspace.isDragging && !this.workspace.isDragging()) {
        a = !1;
        var b = this;

        do {
          if (-1 != this.FUNCTION_TYPES.indexOf(b.type)) {
            a = !0;
            break;
          }

          b = b.getSurroundParent();
        } while (b);

        a ? ("procedures_defnoreturn" == b.type && this.hasReturnValue_ ? (this.removeInput("VALUE"), this.appendDummyInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN), this.hasReturnValue_ = !1) : "procedures_defreturn" != b.type || this.hasReturnValue_ || (this.removeInput("VALUE"), this.appendValueInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN), this.hasReturnValue_ = !0), this.setWarningText(null), this.isInFlyout || this.setEnabled(!0)) : (this.setWarningText(Blockly.Msg.PROCEDURES_IFRETURN_WARNING), this.isInFlyout || this.getInheritedDisabled() || this.setEnabled(!1));
      }
    },
    FUNCTION_TYPES: ["procedures_defnoreturn", "procedures_defreturn"]
  };
  Blockly.Blocks.texts = {};
  Blockly.Constants.Text = {};
  Blockly.Constants.Text.HUE = 160;
  Blockly.defineBlocksWithJsonArray([{
    type: "text",
    message0: "%1",
    args0: [{
      type: "field_input",
      name: "TEXT",
      text: ""
    }],
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
    tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
    extensions: ["text_quotes", "parent_tooltip_when_inline"]
  }, {
    type: "text_multiline",
    message0: "%1 %2",
    args0: [{
      type: "field_image",
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAdhgAAHYYBXaITgQAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMS42/U4J6AAAAP1JREFUOE+Vks0KQUEYhjmRIja4ABtZ2dm5A3t3Ia6AUm7CylYuQRaUhZSlLZJiQbFAyRnPN33y01HOW08z8873zpwzM4F3GWOCruvGIE4/rLaV+Nq1hVGMBqzhqlxgCys4wJA65xnogMHsQ5lujnYHTejBBCK2mE4abjCgMGhNxHgDFWjDSG07kdfVa2pZMf4ZyMAdWmpZMfYOsLiDMYMjlMB+K613QISRhTnITnsYg5yUd0DETmEoMlkFOeIT/A58iyK5E18BuTBfgYXfwNJv4P9/oEBerLylOnRhygmGdPpTTBZAPkde61lbQe4moWUvYUZYLfUNftIY4zwA5X2Z9AYnQrEAAAAASUVORK5CYII=",
      width: 12,
      height: 17,
      alt: "\xB6"
    }, {
      type: "field_multilinetext",
      name: "TEXT",
      text: ""
    }],
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
    tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"]
  }, {
    type: "text_join",
    message0: "",
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_JOIN_HELPURL}",
    tooltip: "%{BKY_TEXT_JOIN_TOOLTIP}",
    mutator: "text_join_mutator"
  }, {
    type: "text_create_join_container",
    message0: "%{BKY_TEXT_CREATE_JOIN_TITLE_JOIN} %1 %2",
    args0: [{
      type: "input_dummy"
    }, {
      type: "input_statement",
      name: "STACK"
    }],
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_CREATE_JOIN_TOOLTIP}",
    enableContextMenu: !1
  }, {
    type: "text_create_join_item",
    message0: "%{BKY_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM}",
    previousStatement: null,
    nextStatement: null,
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_CREATE_JOIN_ITEM_TOOLTIP}",
    enableContextMenu: !1
  }, {
    type: "text_append",
    message0: "%{BKY_TEXT_APPEND_TITLE}",
    args0: [{
      type: "field_variable",
      name: "VAR",
      variable: "%{BKY_TEXT_APPEND_VARIABLE}"
    }, {
      type: "input_value",
      name: "TEXT"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "text_blocks",
    extensions: ["text_append_tooltip"]
  }, {
    type: "text_length",
    message0: "%{BKY_TEXT_LENGTH_TITLE}",
    args0: [{
      type: "input_value",
      name: "VALUE",
      check: ["String", "Array"]
    }],
    output: "Number",
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_LENGTH_TOOLTIP}",
    helpUrl: "%{BKY_TEXT_LENGTH_HELPURL}"
  }, {
    type: "text_isEmpty",
    message0: "%{BKY_TEXT_ISEMPTY_TITLE}",
    args0: [{
      type: "input_value",
      name: "VALUE",
      check: ["String", "Array"]
    }],
    output: "Boolean",
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_ISEMPTY_TOOLTIP}",
    helpUrl: "%{BKY_TEXT_ISEMPTY_HELPURL}"
  }, {
    type: "text_indexOf",
    message0: "%{BKY_TEXT_INDEXOF_TITLE}",
    args0: [{
      type: "input_value",
      name: "VALUE",
      check: "String"
    }, {
      type: "field_dropdown",
      name: "END",
      options: [["%{BKY_TEXT_INDEXOF_OPERATOR_FIRST}", "FIRST"], ["%{BKY_TEXT_INDEXOF_OPERATOR_LAST}", "LAST"]]
    }, {
      type: "input_value",
      name: "FIND",
      check: "String"
    }],
    output: "Number",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_INDEXOF_HELPURL}",
    inputsInline: !0,
    extensions: ["text_indexOf_tooltip"]
  }, {
    type: "text_charAt",
    message0: "%{BKY_TEXT_CHARAT_TITLE}",
    args0: [{
      type: "input_value",
      name: "VALUE",
      check: "String"
    }, {
      type: "field_dropdown",
      name: "WHERE",
      options: [["%{BKY_TEXT_CHARAT_FROM_START}", "FROM_START"], ["%{BKY_TEXT_CHARAT_FROM_END}", "FROM_END"], ["%{BKY_TEXT_CHARAT_FIRST}", "FIRST"], ["%{BKY_TEXT_CHARAT_LAST}", "LAST"], ["%{BKY_TEXT_CHARAT_RANDOM}", "RANDOM"]]
    }],
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_CHARAT_HELPURL}",
    inputsInline: !0,
    mutator: "text_charAt_mutator"
  }]);
  Blockly.Blocks.text_getSubstring = {
    init: function init() {
      this.WHERE_OPTIONS_1 = [[Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START, "FROM_START"], [Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END, "FROM_END"], [Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST, "FIRST"]];
      this.WHERE_OPTIONS_2 = [[Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START, "FROM_START"], [Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END, "FROM_END"], [Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST, "LAST"]];
      this.setHelpUrl(Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL);
      this.setStyle("text_blocks");
      this.appendValueInput("STRING").setCheck("String").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT);
      this.appendDummyInput("AT1");
      this.appendDummyInput("AT2");
      Blockly.Msg.TEXT_GET_SUBSTRING_TAIL && this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL);
      this.setInputsInline(!0);
      this.setOutput(!0, "String");
      this.updateAt_(1, !0);
      this.updateAt_(2, !0);
      this.setTooltip(Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP);
    },
    mutationToDom: function mutationToDom() {
      var a = Blockly.utils.xml.createElement("mutation"),
          b = this.getInput("AT1").type == Blockly.INPUT_VALUE;
      a.setAttribute("at1", b);
      b = this.getInput("AT2").type == Blockly.INPUT_VALUE;
      a.setAttribute("at2", b);
      return a;
    },
    domToMutation: function domToMutation(a) {
      var b = "true" == a.getAttribute("at1");
      a = "true" == a.getAttribute("at2");
      this.updateAt_(1, b);
      this.updateAt_(2, a);
    },
    updateAt_: function updateAt_(a, b) {
      this.removeInput("AT" + a);
      this.removeInput("ORDINAL" + a, !0);
      b ? (this.appendValueInput("AT" + a).setCheck("Number"), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL" + a).appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT" + a);
      2 == a && Blockly.Msg.TEXT_GET_SUBSTRING_TAIL && (this.removeInput("TAIL", !0), this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL));
      var c = new Blockly.FieldDropdown(this["WHERE_OPTIONS_" + a], function (d) {
        var e = "FROM_START" == d || "FROM_END" == d;

        if (e != b) {
          var f = this.getSourceBlock();
          f.updateAt_(a, e);
          f.setFieldValue(d, "WHERE" + a);
          return null;
        }
      });
      this.getInput("AT" + a).appendField(c, "WHERE" + a);
      1 == a && (this.moveInputBefore("AT1", "AT2"), this.getInput("ORDINAL1") && this.moveInputBefore("ORDINAL1", "AT2"));
    }
  };
  Blockly.Blocks.text_changeCase = {
    init: function init() {
      var a = [[Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE, "UPPERCASE"], [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE, "LOWERCASE"], [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE, "TITLECASE"]];
      this.setHelpUrl(Blockly.Msg.TEXT_CHANGECASE_HELPURL);
      this.setStyle("text_blocks");
      this.appendValueInput("TEXT").setCheck("String").appendField(new Blockly.FieldDropdown(a), "CASE");
      this.setOutput(!0, "String");
      this.setTooltip(Blockly.Msg.TEXT_CHANGECASE_TOOLTIP);
    }
  };
  Blockly.Blocks.text_trim = {
    init: function init() {
      var a = [[Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH, "BOTH"], [Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT, "LEFT"], [Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT, "RIGHT"]];
      this.setHelpUrl(Blockly.Msg.TEXT_TRIM_HELPURL);
      this.setStyle("text_blocks");
      this.appendValueInput("TEXT").setCheck("String").appendField(new Blockly.FieldDropdown(a), "MODE");
      this.setOutput(!0, "String");
      this.setTooltip(Blockly.Msg.TEXT_TRIM_TOOLTIP);
    }
  };
  Blockly.Blocks.text_print = {
    init: function init() {
      this.jsonInit({
        message0: Blockly.Msg.TEXT_PRINT_TITLE,
        args0: [{
          type: "input_value",
          name: "TEXT"
        }],
        previousStatement: null,
        nextStatement: null,
        style: "text_blocks",
        tooltip: Blockly.Msg.TEXT_PRINT_TOOLTIP,
        helpUrl: Blockly.Msg.TEXT_PRINT_HELPURL
      });
    }
  };
  Blockly.Blocks.text_prompt_ext = {
    init: function init() {
      var a = [[Blockly.Msg.TEXT_PROMPT_TYPE_TEXT, "TEXT"], [Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]];
      this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL);
      this.setStyle("text_blocks");
      var b = this;
      a = new Blockly.FieldDropdown(a, function (c) {
        b.updateType_(c);
      });
      this.appendValueInput("TEXT").appendField(a, "TYPE");
      this.setOutput(!0, "String");
      this.setTooltip(function () {
        return "TEXT" == b.getFieldValue("TYPE") ? Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT : Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER;
      });
    },
    updateType_: function updateType_(a) {
      this.outputConnection.setCheck("NUMBER" == a ? "Number" : "String");
    },
    mutationToDom: function mutationToDom() {
      var a = Blockly.utils.xml.createElement("mutation");
      a.setAttribute("type", this.getFieldValue("TYPE"));
      return a;
    },
    domToMutation: function domToMutation(a) {
      this.updateType_(a.getAttribute("type"));
    }
  };
  Blockly.Blocks.text_prompt = {
    init: function init() {
      this.mixin(Blockly.Constants.Text.QUOTE_IMAGE_MIXIN);
      var a = [[Blockly.Msg.TEXT_PROMPT_TYPE_TEXT, "TEXT"], [Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]],
          b = this;
      this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL);
      this.setStyle("text_blocks");
      a = new Blockly.FieldDropdown(a, function (c) {
        b.updateType_(c);
      });
      this.appendDummyInput().appendField(a, "TYPE").appendField(this.newQuote_(!0)).appendField(new Blockly.FieldTextInput(""), "TEXT").appendField(this.newQuote_(!1));
      this.setOutput(!0, "String");
      this.setTooltip(function () {
        return "TEXT" == b.getFieldValue("TYPE") ? Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT : Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER;
      });
    },
    updateType_: Blockly.Blocks.text_prompt_ext.updateType_,
    mutationToDom: Blockly.Blocks.text_prompt_ext.mutationToDom,
    domToMutation: Blockly.Blocks.text_prompt_ext.domToMutation
  };
  Blockly.Blocks.text_count = {
    init: function init() {
      this.jsonInit({
        message0: Blockly.Msg.TEXT_COUNT_MESSAGE0,
        args0: [{
          type: "input_value",
          name: "SUB",
          check: "String"
        }, {
          type: "input_value",
          name: "TEXT",
          check: "String"
        }],
        output: "Number",
        inputsInline: !0,
        style: "text_blocks",
        tooltip: Blockly.Msg.TEXT_COUNT_TOOLTIP,
        helpUrl: Blockly.Msg.TEXT_COUNT_HELPURL
      });
    }
  };
  Blockly.Blocks.text_replace = {
    init: function init() {
      this.jsonInit({
        message0: Blockly.Msg.TEXT_REPLACE_MESSAGE0,
        args0: [{
          type: "input_value",
          name: "FROM",
          check: "String"
        }, {
          type: "input_value",
          name: "TO",
          check: "String"
        }, {
          type: "input_value",
          name: "TEXT",
          check: "String"
        }],
        output: "String",
        inputsInline: !0,
        style: "text_blocks",
        tooltip: Blockly.Msg.TEXT_REPLACE_TOOLTIP,
        helpUrl: Blockly.Msg.TEXT_REPLACE_HELPURL
      });
    }
  };
  Blockly.Blocks.text_reverse = {
    init: function init() {
      this.jsonInit({
        message0: Blockly.Msg.TEXT_REVERSE_MESSAGE0,
        args0: [{
          type: "input_value",
          name: "TEXT",
          check: "String"
        }],
        output: "String",
        inputsInline: !0,
        style: "text_blocks",
        tooltip: Blockly.Msg.TEXT_REVERSE_TOOLTIP,
        helpUrl: Blockly.Msg.TEXT_REVERSE_HELPURL
      });
    }
  };
  Blockly.Constants.Text.QUOTE_IMAGE_MIXIN = {
    QUOTE_IMAGE_LEFT_DATAURI: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC",
    QUOTE_IMAGE_RIGHT_DATAURI: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==",
    QUOTE_IMAGE_WIDTH: 12,
    QUOTE_IMAGE_HEIGHT: 12,
    quoteField_: function quoteField_(a) {
      for (var b = 0, c; c = this.inputList[b]; b++) {
        for (var d = 0, e; e = c.fieldRow[d]; d++) {
          if (a == e.name) {
            c.insertFieldAt(d, this.newQuote_(!0));
            c.insertFieldAt(d + 2, this.newQuote_(!1));
            return;
          }
        }
      }

      console.warn('field named "' + a + '" not found in ' + this.toDevString());
    },
    newQuote_: function newQuote_(a) {
      a = this.RTL ? !a : a;
      return new Blockly.FieldImage(a ? this.QUOTE_IMAGE_LEFT_DATAURI : this.QUOTE_IMAGE_RIGHT_DATAURI, this.QUOTE_IMAGE_WIDTH, this.QUOTE_IMAGE_HEIGHT, a ? "\u201C" : "\u201D");
    }
  };

  Blockly.Constants.Text.TEXT_QUOTES_EXTENSION = function () {
    this.mixin(Blockly.Constants.Text.QUOTE_IMAGE_MIXIN);
    this.quoteField_("TEXT");
  };

  Blockly.Constants.Text.TEXT_JOIN_MUTATOR_MIXIN = {
    mutationToDom: function mutationToDom() {
      var a = Blockly.utils.xml.createElement("mutation");
      a.setAttribute("items", this.itemCount_);
      return a;
    },
    domToMutation: function domToMutation(a) {
      this.itemCount_ = parseInt(a.getAttribute("items"), 10);
      this.updateShape_();
    },
    decompose: function decompose(a) {
      var b = a.newBlock("text_create_join_container");
      b.initSvg();

      for (var c = b.getInput("STACK").connection, d = 0; d < this.itemCount_; d++) {
        var e = a.newBlock("text_create_join_item");
        e.initSvg();
        c.connect(e.previousConnection);
        c = e.nextConnection;
      }

      return b;
    },
    compose: function compose(a) {
      var b = a.getInputTargetBlock("STACK");

      for (a = []; b;) {
        a.push(b.valueConnection_), b = b.nextConnection && b.nextConnection.targetBlock();
      }

      for (b = 0; b < this.itemCount_; b++) {
        var c = this.getInput("ADD" + b).connection.targetConnection;
        c && -1 == a.indexOf(c) && c.disconnect();
      }

      this.itemCount_ = a.length;
      this.updateShape_();

      for (b = 0; b < this.itemCount_; b++) {
        Blockly.Mutator.reconnect(a[b], this, "ADD" + b);
      }
    },
    saveConnections: function saveConnections(a) {
      a = a.getInputTargetBlock("STACK");

      for (var b = 0; a;) {
        var c = this.getInput("ADD" + b);
        a.valueConnection_ = c && c.connection.targetConnection;
        b++;
        a = a.nextConnection && a.nextConnection.targetBlock();
      }
    },
    updateShape_: function updateShape_() {
      this.itemCount_ && this.getInput("EMPTY") ? this.removeInput("EMPTY") : this.itemCount_ || this.getInput("EMPTY") || this.appendDummyInput("EMPTY").appendField(this.newQuote_(!0)).appendField(this.newQuote_(!1));

      for (var a = 0; a < this.itemCount_; a++) {
        if (!this.getInput("ADD" + a)) {
          var b = this.appendValueInput("ADD" + a).setAlign(Blockly.ALIGN_RIGHT);
          0 == a && b.appendField(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH);
        }
      }

      for (; this.getInput("ADD" + a);) {
        this.removeInput("ADD" + a), a++;
      }
    }
  };

  Blockly.Constants.Text.TEXT_JOIN_EXTENSION = function () {
    this.mixin(Blockly.Constants.Text.QUOTE_IMAGE_MIXIN);
    this.itemCount_ = 2;
    this.updateShape_();
    this.setMutator(new Blockly.Mutator(["text_create_join_item"]));
  };

  Blockly.Extensions.register("text_append_tooltip", Blockly.Extensions.buildTooltipWithFieldText("%{BKY_TEXT_APPEND_TOOLTIP}", "VAR"));

  Blockly.Constants.Text.TEXT_INDEXOF_TOOLTIP_EXTENSION = function () {
    var a = this;
    this.setTooltip(function () {
      return Blockly.Msg.TEXT_INDEXOF_TOOLTIP.replace("%1", a.workspace.options.oneBasedIndex ? "0" : "-1");
    });
  };

  Blockly.Constants.Text.TEXT_CHARAT_MUTATOR_MIXIN = {
    mutationToDom: function mutationToDom() {
      var a = Blockly.utils.xml.createElement("mutation");
      a.setAttribute("at", !!this.isAt_);
      return a;
    },
    domToMutation: function domToMutation(a) {
      a = "false" != a.getAttribute("at");
      this.updateAt_(a);
    },
    updateAt_: function updateAt_(a) {
      this.removeInput("AT", !0);
      this.removeInput("ORDINAL", !0);
      a && (this.appendValueInput("AT").setCheck("Number"), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX));
      Blockly.Msg.TEXT_CHARAT_TAIL && (this.removeInput("TAIL", !0), this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_CHARAT_TAIL));
      this.isAt_ = a;
    }
  };

  Blockly.Constants.Text.TEXT_CHARAT_EXTENSION = function () {
    this.getField("WHERE").setValidator(function (b) {
      b = "FROM_START" == b || "FROM_END" == b;
      b != this.isAt_ && this.getSourceBlock().updateAt_(b);
    });
    this.updateAt_(!0);
    var a = this;
    this.setTooltip(function () {
      var b = a.getFieldValue("WHERE"),
          c = Blockly.Msg.TEXT_CHARAT_TOOLTIP;
      ("FROM_START" == b || "FROM_END" == b) && (b = "FROM_START" == b ? Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP : Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP) && (c += "  " + b.replace("%1", a.workspace.options.oneBasedIndex ? "#1" : "#0"));
      return c;
    });
  };

  Blockly.Extensions.register("text_indexOf_tooltip", Blockly.Constants.Text.TEXT_INDEXOF_TOOLTIP_EXTENSION);
  Blockly.Extensions.register("text_quotes", Blockly.Constants.Text.TEXT_QUOTES_EXTENSION);
  Blockly.Extensions.registerMutator("text_join_mutator", Blockly.Constants.Text.TEXT_JOIN_MUTATOR_MIXIN, Blockly.Constants.Text.TEXT_JOIN_EXTENSION);
  Blockly.Extensions.registerMutator("text_charAt_mutator", Blockly.Constants.Text.TEXT_CHARAT_MUTATOR_MIXIN, Blockly.Constants.Text.TEXT_CHARAT_EXTENSION);
  Blockly.Blocks.variables = {};
  Blockly.Constants.Variables = {};
  Blockly.Constants.Variables.HUE = 330;
  Blockly.defineBlocksWithJsonArray([{
    type: "variables_get",
    message0: "%1",
    args0: [{
      type: "field_variable",
      name: "VAR",
      variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }],
    output: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
    tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
    extensions: ["contextMenu_variableSetterGetter"]
  }, {
    type: "variables_set",
    message0: "%{BKY_VARIABLES_SET}",
    args0: [{
      type: "field_variable",
      name: "VAR",
      variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }, {
      type: "input_value",
      name: "VALUE"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "variable_blocks",
    tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
    helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
    extensions: ["contextMenu_variableSetterGetter"]
  }]);
  Blockly.Constants.Variables.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN = {
    customContextMenu: function customContextMenu(a) {
      if (!this.isInFlyout) {
        if ("variables_get" == this.type) var b = "variables_set",
            c = Blockly.Msg.VARIABLES_GET_CREATE_SET;else b = "variables_get", c = Blockly.Msg.VARIABLES_SET_CREATE_GET;
        var d = {
          enabled: 0 < this.workspace.remainingCapacity()
        },
            e = this.getField("VAR").getText();
        d.text = c.replace("%1", e);
        c = Blockly.utils.xml.createElement("field");
        c.setAttribute("name", "VAR");
        c.appendChild(Blockly.utils.xml.createTextNode(e));
        e = Blockly.utils.xml.createElement("block");
        e.setAttribute("type", b);
        e.appendChild(c);
        d.callback = Blockly.ContextMenu.callbackFactory(this, e);
        a.push(d);
      } else if ("variables_get" == this.type || "variables_get_reporter" == this.type) b = {
        text: Blockly.Msg.RENAME_VARIABLE,
        enabled: !0,
        callback: Blockly.Constants.Variables.RENAME_OPTION_CALLBACK_FACTORY(this)
      }, e = this.getField("VAR").getText(), d = {
        text: Blockly.Msg.DELETE_VARIABLE.replace("%1", e),
        enabled: !0,
        callback: Blockly.Constants.Variables.DELETE_OPTION_CALLBACK_FACTORY(this)
      }, a.unshift(b), a.unshift(d);
    }
  };

  Blockly.Constants.Variables.RENAME_OPTION_CALLBACK_FACTORY = function (a) {
    return function () {
      var b = a.workspace,
          c = a.getField("VAR").getVariable();
      Blockly.Variables.renameVariable(b, c);
    };
  };

  Blockly.Constants.Variables.DELETE_OPTION_CALLBACK_FACTORY = function (a) {
    return function () {
      var b = a.workspace,
          c = a.getField("VAR").getVariable();
      b.deleteVariableById(c.getId());
      b.refreshToolboxSelection();
    };
  };

  Blockly.Extensions.registerMixin("contextMenu_variableSetterGetter", Blockly.Constants.Variables.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN);
  Blockly.Constants.VariablesDynamic = {};
  Blockly.Constants.VariablesDynamic.HUE = 310;
  Blockly.defineBlocksWithJsonArray([{
    type: "variables_get_dynamic",
    message0: "%1",
    args0: [{
      type: "field_variable",
      name: "VAR",
      variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }],
    output: null,
    style: "variable_dynamic_blocks",
    helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
    tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
    extensions: ["contextMenu_variableDynamicSetterGetter"]
  }, {
    type: "variables_set_dynamic",
    message0: "%{BKY_VARIABLES_SET}",
    args0: [{
      type: "field_variable",
      name: "VAR",
      variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }, {
      type: "input_value",
      name: "VALUE"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "variable_dynamic_blocks",
    tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
    helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
    extensions: ["contextMenu_variableDynamicSetterGetter"]
  }]);
  Blockly.Constants.VariablesDynamic.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN = {
    customContextMenu: function customContextMenu(a) {
      if (!this.isInFlyout) {
        var b = this.getFieldValue("VAR");
        var c = this.workspace.getVariableById(b).type;

        if ("variables_get_dynamic" == this.type) {
          b = "variables_set_dynamic";
          var d = Blockly.Msg.VARIABLES_GET_CREATE_SET;
        } else b = "variables_get_dynamic", d = Blockly.Msg.VARIABLES_SET_CREATE_GET;

        var e = {
          enabled: 0 < this.workspace.remainingCapacity()
        },
            f = this.getField("VAR").getText();
        e.text = d.replace("%1", f);
        d = Blockly.utils.xml.createElement("field");
        d.setAttribute("name", "VAR");
        d.setAttribute("variabletype", c);
        d.appendChild(Blockly.utils.xml.createTextNode(f));
        f = Blockly.utils.xml.createElement("block");
        f.setAttribute("type", b);
        f.appendChild(d);
        e.callback = Blockly.ContextMenu.callbackFactory(this, f);
        a.push(e);
      } else if ("variables_get_dynamic" == this.type || "variables_get_reporter_dynamic" == this.type) b = {
        text: Blockly.Msg.RENAME_VARIABLE,
        enabled: !0,
        callback: Blockly.Constants.Variables.RENAME_OPTION_CALLBACK_FACTORY(this)
      }, f = this.getField("VAR").getText(), e = {
        text: Blockly.Msg.DELETE_VARIABLE.replace("%1", f),
        enabled: !0,
        callback: Blockly.Constants.Variables.DELETE_OPTION_CALLBACK_FACTORY(this)
      }, a.unshift(b), a.unshift(e);
    },
    onchange: function onchange(a) {
      a = this.getFieldValue("VAR");
      a = Blockly.Variables.getVariable(this.workspace, a);
      "variables_get_dynamic" == this.type ? this.outputConnection.setCheck(a.type) : this.getInput("VALUE").connection.setCheck(a.type);
    }
  };

  Blockly.Constants.VariablesDynamic.RENAME_OPTION_CALLBACK_FACTORY = function (a) {
    return function () {
      var b = a.workspace,
          c = a.getField("VAR").getVariable();
      Blockly.Variables.renameVariable(b, c);
    };
  };

  Blockly.Constants.VariablesDynamic.DELETE_OPTION_CALLBACK_FACTORY = function (a) {
    return function () {
      var b = a.workspace,
          c = a.getField("VAR").getVariable();
      b.deleteVariableById(c.getId());
      b.refreshToolboxSelection();
    };
  };

  Blockly.Extensions.registerMixin("contextMenu_variableDynamicSetterGetter", Blockly.Constants.VariablesDynamic.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN);
  return Blockly.Blocks;
});

/***/ }),

/***/ 11221:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* eslint-disable */
;

(function (root, factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(90888), __webpack_require__(85115), __webpack_require__(71269), __webpack_require__(76881)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (Blockly, En, BlocklyBlocks, BlocklyJS) {
  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */

  /**
   * @fileoverview Blockly module for the browser. This includes Blockly core
   * and built in blocks, the JavaScript code generator and the English block
   * localization files.
   */

  /* eslint-disable */
  'use strict'; // Include the EN Locale by default.

  Blockly.setLocale(En);
  Blockly.Blocks = Blockly.Blocks || {};
  Object.keys(BlocklyBlocks).forEach(function (k) {
    Blockly.Blocks[k] = BlocklyBlocks[k];
  });
  Blockly.JavaScript = BlocklyJS;
  return Blockly;
});

/***/ }),

/***/ 90888:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* eslint-disable */
;

(function (root, factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(61452)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (Blockly) {
  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */

  /**
   * @fileoverview Blockly core module for the browser. It includes blockly.js
   *               and adds a helper method for setting the locale.
   */

  /* eslint-disable */
  'use strict'; // Add a helper method to set the Blockly locale.

  Blockly.setLocale = function (locale) {
    Blockly.Msg = Blockly.Msg || {};
    Object.keys(locale).forEach(function (k) {
      Blockly.Msg[k] = locale[k];
    });
  };

  return Blockly;
});

/***/ }),

/***/ 74640:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* eslint-disable */
;

(function (root, factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(11221)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (Blockly) {
  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */

  /**
   * @fileoverview Blockly module.
   */

  /* eslint-disable */
  'use strict';

  return Blockly;
});

/***/ }),

/***/ 76881:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* eslint-disable */
;

(function (root, factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(90888), __webpack_require__(75107)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (Blockly, BlocklyJavaScript) {
  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */

  /**
   * @fileoverview JavaScript Generator module.
   */

  /* eslint-disable */
  'use strict';

  Blockly.JavaScript = BlocklyJavaScript;
  return BlocklyJavaScript;
});

/***/ }),

/***/ 75107:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Do not edit this file; automatically generated by gulp.

/* eslint-disable */
;

(function (root, factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(15911)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (Blockly) {
  'use strict';

  Blockly.JavaScript = new Blockly.Generator("JavaScript");
  Blockly.JavaScript.addReservedWords("break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,new,return,super,switch,this,throw,try,typeof,var,void,while,with,yield,enum,implements,interface,let,package,private,protected,public,static,await,null,true,false,arguments," + Object.getOwnPropertyNames(Blockly.utils.global).join(","));
  Blockly.JavaScript.ORDER_ATOMIC = 0;
  Blockly.JavaScript.ORDER_NEW = 1.1;
  Blockly.JavaScript.ORDER_MEMBER = 1.2;
  Blockly.JavaScript.ORDER_FUNCTION_CALL = 2;
  Blockly.JavaScript.ORDER_INCREMENT = 3;
  Blockly.JavaScript.ORDER_DECREMENT = 3;
  Blockly.JavaScript.ORDER_BITWISE_NOT = 4.1;
  Blockly.JavaScript.ORDER_UNARY_PLUS = 4.2;
  Blockly.JavaScript.ORDER_UNARY_NEGATION = 4.3;
  Blockly.JavaScript.ORDER_LOGICAL_NOT = 4.4;
  Blockly.JavaScript.ORDER_TYPEOF = 4.5;
  Blockly.JavaScript.ORDER_VOID = 4.6;
  Blockly.JavaScript.ORDER_DELETE = 4.7;
  Blockly.JavaScript.ORDER_AWAIT = 4.8;
  Blockly.JavaScript.ORDER_EXPONENTIATION = 5;
  Blockly.JavaScript.ORDER_MULTIPLICATION = 5.1;
  Blockly.JavaScript.ORDER_DIVISION = 5.2;
  Blockly.JavaScript.ORDER_MODULUS = 5.3;
  Blockly.JavaScript.ORDER_SUBTRACTION = 6.1;
  Blockly.JavaScript.ORDER_ADDITION = 6.2;
  Blockly.JavaScript.ORDER_BITWISE_SHIFT = 7;
  Blockly.JavaScript.ORDER_RELATIONAL = 8;
  Blockly.JavaScript.ORDER_IN = 8;
  Blockly.JavaScript.ORDER_INSTANCEOF = 8;
  Blockly.JavaScript.ORDER_EQUALITY = 9;
  Blockly.JavaScript.ORDER_BITWISE_AND = 10;
  Blockly.JavaScript.ORDER_BITWISE_XOR = 11;
  Blockly.JavaScript.ORDER_BITWISE_OR = 12;
  Blockly.JavaScript.ORDER_LOGICAL_AND = 13;
  Blockly.JavaScript.ORDER_LOGICAL_OR = 14;
  Blockly.JavaScript.ORDER_CONDITIONAL = 15;
  Blockly.JavaScript.ORDER_ASSIGNMENT = 16;
  Blockly.JavaScript.ORDER_YIELD = 17;
  Blockly.JavaScript.ORDER_COMMA = 18;
  Blockly.JavaScript.ORDER_NONE = 99;
  Blockly.JavaScript.ORDER_OVERRIDES = [[Blockly.JavaScript.ORDER_FUNCTION_CALL, Blockly.JavaScript.ORDER_MEMBER], [Blockly.JavaScript.ORDER_FUNCTION_CALL, Blockly.JavaScript.ORDER_FUNCTION_CALL], [Blockly.JavaScript.ORDER_MEMBER, Blockly.JavaScript.ORDER_MEMBER], [Blockly.JavaScript.ORDER_MEMBER, Blockly.JavaScript.ORDER_FUNCTION_CALL], [Blockly.JavaScript.ORDER_LOGICAL_NOT, Blockly.JavaScript.ORDER_LOGICAL_NOT], [Blockly.JavaScript.ORDER_MULTIPLICATION, Blockly.JavaScript.ORDER_MULTIPLICATION], [Blockly.JavaScript.ORDER_ADDITION, Blockly.JavaScript.ORDER_ADDITION], [Blockly.JavaScript.ORDER_LOGICAL_AND, Blockly.JavaScript.ORDER_LOGICAL_AND], [Blockly.JavaScript.ORDER_LOGICAL_OR, Blockly.JavaScript.ORDER_LOGICAL_OR]];

  Blockly.JavaScript.init = function (a) {
    Blockly.JavaScript.definitions_ = Object.create(null);
    Blockly.JavaScript.functionNames_ = Object.create(null);
    Blockly.JavaScript.variableDB_ ? Blockly.JavaScript.variableDB_.reset() : Blockly.JavaScript.variableDB_ = new Blockly.Names(Blockly.JavaScript.RESERVED_WORDS_);
    Blockly.JavaScript.variableDB_.setVariableMap(a.getVariableMap());

    for (var b = [], c = Blockly.Variables.allDeveloperVariables(a), d = 0; d < c.length; d++) {
      b.push(Blockly.JavaScript.variableDB_.getName(c[d], Blockly.Names.DEVELOPER_VARIABLE_TYPE));
    }

    a = Blockly.Variables.allUsedVarModels(a);

    for (d = 0; d < a.length; d++) {
      b.push(Blockly.JavaScript.variableDB_.getName(a[d].getId(), Blockly.VARIABLE_CATEGORY_NAME));
    }

    b.length && (Blockly.JavaScript.definitions_.variables = "var " + b.join(", ") + ";");
  };

  Blockly.JavaScript.finish = function (a) {
    var b = [],
        c;

    for (c in Blockly.JavaScript.definitions_) {
      b.push(Blockly.JavaScript.definitions_[c]);
    }

    delete Blockly.JavaScript.definitions_;
    delete Blockly.JavaScript.functionNames_;
    Blockly.JavaScript.variableDB_.reset();
    return b.join("\n\n") + "\n\n\n" + a;
  };

  Blockly.JavaScript.scrubNakedValue = function (a) {
    return a + ";\n";
  };

  Blockly.JavaScript.quote_ = function (a) {
    a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
    return "'" + a + "'";
  };

  Blockly.JavaScript.multiline_quote_ = function (a) {
    return a.split(/\n/g).map(Blockly.JavaScript.quote_).join(" + '\\n' +\n");
  };

  Blockly.JavaScript.scrub_ = function (a, b, c) {
    var d = "";

    if (!a.outputConnection || !a.outputConnection.targetConnection) {
      var e = a.getCommentText();
      e && (e = Blockly.utils.string.wrap(e, Blockly.JavaScript.COMMENT_WRAP - 3), d += Blockly.JavaScript.prefixLines(e + "\n", "// "));

      for (var f = 0; f < a.inputList.length; f++) {
        a.inputList[f].type == Blockly.INPUT_VALUE && (e = a.inputList[f].connection.targetBlock()) && (e = Blockly.JavaScript.allNestedComments(e)) && (d += Blockly.JavaScript.prefixLines(e, "// "));
      }
    }

    a = a.nextConnection && a.nextConnection.targetBlock();
    c = c ? "" : Blockly.JavaScript.blockToCode(a);
    return d + b + c;
  };

  Blockly.JavaScript.getAdjusted = function (a, b, c, d, e) {
    c = c || 0;
    e = e || Blockly.JavaScript.ORDER_NONE;
    a.workspace.options.oneBasedIndex && c--;
    var f = a.workspace.options.oneBasedIndex ? "1" : "0";
    a = 0 < c ? Blockly.JavaScript.valueToCode(a, b, Blockly.JavaScript.ORDER_ADDITION) || f : 0 > c ? Blockly.JavaScript.valueToCode(a, b, Blockly.JavaScript.ORDER_SUBTRACTION) || f : d ? Blockly.JavaScript.valueToCode(a, b, Blockly.JavaScript.ORDER_UNARY_NEGATION) || f : Blockly.JavaScript.valueToCode(a, b, e) || f;
    if (Blockly.isNumber(a)) a = Number(a) + c, d && (a = -a);else {
      if (0 < c) {
        a = a + " + " + c;
        var g = Blockly.JavaScript.ORDER_ADDITION;
      } else 0 > c && (a = a + " - " + -c, g = Blockly.JavaScript.ORDER_SUBTRACTION);

      d && (a = c ? "-(" + a + ")" : "-" + a, g = Blockly.JavaScript.ORDER_UNARY_NEGATION);
      g = Math.floor(g);
      e = Math.floor(e);
      g && e >= g && (a = "(" + a + ")");
    }
    return a;
  };

  Blockly.JavaScript.colour = {};

  Blockly.JavaScript.colour_picker = function (a) {
    return [Blockly.JavaScript.quote_(a.getFieldValue("COLOUR")), Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript.colour_random = function (a) {
    return [Blockly.JavaScript.provideFunction_("colourRandom", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "() {", "  var num = Math.floor(Math.random() * Math.pow(2, 24));", "  return '#' + ('00000' + num.toString(16)).substr(-6);", "}"]) + "()", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.colour_rgb = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "RED", Blockly.JavaScript.ORDER_COMMA) || 0,
        c = Blockly.JavaScript.valueToCode(a, "GREEN", Blockly.JavaScript.ORDER_COMMA) || 0;
    a = Blockly.JavaScript.valueToCode(a, "BLUE", Blockly.JavaScript.ORDER_COMMA) || 0;
    return [Blockly.JavaScript.provideFunction_("colourRgb", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(r, g, b) {", "  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;", "  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;", "  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;", "  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);", "  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);", "  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);", "  return '#' + r + g + b;", "}"]) + "(" + b + ", " + c + ", " + a + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.colour_blend = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "COLOUR1", Blockly.JavaScript.ORDER_COMMA) || "'#000000'",
        c = Blockly.JavaScript.valueToCode(a, "COLOUR2", Blockly.JavaScript.ORDER_COMMA) || "'#000000'";
    a = Blockly.JavaScript.valueToCode(a, "RATIO", Blockly.JavaScript.ORDER_COMMA) || .5;
    return [Blockly.JavaScript.provideFunction_("colourBlend", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(c1, c2, ratio) {", "  ratio = Math.max(Math.min(Number(ratio), 1), 0);", "  var r1 = parseInt(c1.substring(1, 3), 16);", "  var g1 = parseInt(c1.substring(3, 5), 16);", "  var b1 = parseInt(c1.substring(5, 7), 16);", "  var r2 = parseInt(c2.substring(1, 3), 16);", "  var g2 = parseInt(c2.substring(3, 5), 16);", "  var b2 = parseInt(c2.substring(5, 7), 16);", "  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);", "  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);", "  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);", "  r = ('0' + (r || 0).toString(16)).slice(-2);", "  g = ('0' + (g || 0).toString(16)).slice(-2);", "  b = ('0' + (b || 0).toString(16)).slice(-2);", "  return '#' + r + g + b;", "}"]) + "(" + b + ", " + c + ", " + a + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.lists = {};

  Blockly.JavaScript.lists_create_empty = function (a) {
    return ["[]", Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript.lists_create_with = function (a) {
    for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) {
      b[c] = Blockly.JavaScript.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "null";
    }

    return ["[" + b.join(", ") + "]", Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript.lists_repeat = function (a) {
    var b = Blockly.JavaScript.provideFunction_("listsRepeat", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(value, n) {", "  var array = [];", "  for (var i = 0; i < n; i++) {", "    array[i] = value;", "  }", "  return array;", "}"]),
        c = Blockly.JavaScript.valueToCode(a, "ITEM", Blockly.JavaScript.ORDER_COMMA) || "null";
    a = Blockly.JavaScript.valueToCode(a, "NUM", Blockly.JavaScript.ORDER_COMMA) || "0";
    return [b + "(" + c + ", " + a + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.lists_length = function (a) {
    return [(Blockly.JavaScript.valueToCode(a, "VALUE", Blockly.JavaScript.ORDER_MEMBER) || "[]") + ".length", Blockly.JavaScript.ORDER_MEMBER];
  };

  Blockly.JavaScript.lists_isEmpty = function (a) {
    return ["!" + (Blockly.JavaScript.valueToCode(a, "VALUE", Blockly.JavaScript.ORDER_MEMBER) || "[]") + ".length", Blockly.JavaScript.ORDER_LOGICAL_NOT];
  };

  Blockly.JavaScript.lists_indexOf = function (a) {
    var b = "FIRST" == a.getFieldValue("END") ? "indexOf" : "lastIndexOf",
        c = Blockly.JavaScript.valueToCode(a, "FIND", Blockly.JavaScript.ORDER_NONE) || "''";
    b = (Blockly.JavaScript.valueToCode(a, "VALUE", Blockly.JavaScript.ORDER_MEMBER) || "[]") + "." + b + "(" + c + ")";
    return a.workspace.options.oneBasedIndex ? [b + " + 1", Blockly.JavaScript.ORDER_ADDITION] : [b, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.lists_getIndex = function (a) {
    var b = a.getFieldValue("MODE") || "GET",
        c = a.getFieldValue("WHERE") || "FROM_START",
        d = Blockly.JavaScript.valueToCode(a, "VALUE", "RANDOM" == c ? Blockly.JavaScript.ORDER_COMMA : Blockly.JavaScript.ORDER_MEMBER) || "[]";

    switch (c) {
      case "FIRST":
        if ("GET" == b) return [d + "[0]", Blockly.JavaScript.ORDER_MEMBER];
        if ("GET_REMOVE" == b) return [d + ".shift()", Blockly.JavaScript.ORDER_MEMBER];
        if ("REMOVE" == b) return d + ".shift();\n";
        break;

      case "LAST":
        if ("GET" == b) return [d + ".slice(-1)[0]", Blockly.JavaScript.ORDER_MEMBER];
        if ("GET_REMOVE" == b) return [d + ".pop()", Blockly.JavaScript.ORDER_MEMBER];
        if ("REMOVE" == b) return d + ".pop();\n";
        break;

      case "FROM_START":
        a = Blockly.JavaScript.getAdjusted(a, "AT");
        if ("GET" == b) return [d + "[" + a + "]", Blockly.JavaScript.ORDER_MEMBER];
        if ("GET_REMOVE" == b) return [d + ".splice(" + a + ", 1)[0]", Blockly.JavaScript.ORDER_FUNCTION_CALL];
        if ("REMOVE" == b) return d + ".splice(" + a + ", 1);\n";
        break;

      case "FROM_END":
        a = Blockly.JavaScript.getAdjusted(a, "AT", 1, !0);
        if ("GET" == b) return [d + ".slice(" + a + ")[0]", Blockly.JavaScript.ORDER_FUNCTION_CALL];
        if ("GET_REMOVE" == b) return [d + ".splice(" + a + ", 1)[0]", Blockly.JavaScript.ORDER_FUNCTION_CALL];
        if ("REMOVE" == b) return d + ".splice(" + a + ", 1);";
        break;

      case "RANDOM":
        d = Blockly.JavaScript.provideFunction_("listsGetRandomItem", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(list, remove) {", "  var x = Math.floor(Math.random() * list.length);", "  if (remove) {", "    return list.splice(x, 1)[0];", "  } else {", "    return list[x];", "  }", "}"]) + "(" + d + ", " + ("GET" != b) + ")";
        if ("GET" == b || "GET_REMOVE" == b) return [d, Blockly.JavaScript.ORDER_FUNCTION_CALL];
        if ("REMOVE" == b) return d + ";\n";
    }

    throw Error("Unhandled combination (lists_getIndex).");
  };

  Blockly.JavaScript.lists_setIndex = function (a) {
    function b() {
      if (c.match(/^\w+$/)) return "";
      var g = Blockly.JavaScript.variableDB_.getDistinctName("tmpList", Blockly.VARIABLE_CATEGORY_NAME),
          h = "var " + g + " = " + c + ";\n";
      c = g;
      return h;
    }

    var c = Blockly.JavaScript.valueToCode(a, "LIST", Blockly.JavaScript.ORDER_MEMBER) || "[]",
        d = a.getFieldValue("MODE") || "GET",
        e = a.getFieldValue("WHERE") || "FROM_START",
        f = Blockly.JavaScript.valueToCode(a, "TO", Blockly.JavaScript.ORDER_ASSIGNMENT) || "null";

    switch (e) {
      case "FIRST":
        if ("SET" == d) return c + "[0] = " + f + ";\n";
        if ("INSERT" == d) return c + ".unshift(" + f + ");\n";
        break;

      case "LAST":
        if ("SET" == d) return a = b(), a + (c + "[" + c + ".length - 1] = " + f + ";\n");
        if ("INSERT" == d) return c + ".push(" + f + ");\n";
        break;

      case "FROM_START":
        e = Blockly.JavaScript.getAdjusted(a, "AT");
        if ("SET" == d) return c + "[" + e + "] = " + f + ";\n";
        if ("INSERT" == d) return c + ".splice(" + e + ", 0, " + f + ");\n";
        break;

      case "FROM_END":
        e = Blockly.JavaScript.getAdjusted(a, "AT", 1, !1, Blockly.JavaScript.ORDER_SUBTRACTION);
        a = b();
        if ("SET" == d) return a + (c + "[" + c + ".length - " + e + "] = " + f + ";\n");
        if ("INSERT" == d) return a + (c + ".splice(" + c + ".length - " + e + ", 0, " + f + ");\n");
        break;

      case "RANDOM":
        a = b();
        e = Blockly.JavaScript.variableDB_.getDistinctName("tmpX", Blockly.VARIABLE_CATEGORY_NAME);
        a += "var " + e + " = Math.floor(Math.random() * " + c + ".length);\n";
        if ("SET" == d) return a + (c + "[" + e + "] = " + f + ";\n");
        if ("INSERT" == d) return a + (c + ".splice(" + e + ", 0, " + f + ");\n");
    }

    throw Error("Unhandled combination (lists_setIndex).");
  };

  Blockly.JavaScript.lists.getIndex_ = function (a, b, c) {
    return "FIRST" == b ? "0" : "FROM_END" == b ? a + ".length - 1 - " + c : "LAST" == b ? a + ".length - 1" : c;
  };

  Blockly.JavaScript.lists_getSublist = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "LIST", Blockly.JavaScript.ORDER_MEMBER) || "[]",
        c = a.getFieldValue("WHERE1"),
        d = a.getFieldValue("WHERE2");
    if ("FIRST" == c && "LAST" == d) b += ".slice(0)";else if (b.match(/^\w+$/) || "FROM_END" != c && "FROM_START" == d) {
      switch (c) {
        case "FROM_START":
          var e = Blockly.JavaScript.getAdjusted(a, "AT1");
          break;

        case "FROM_END":
          e = Blockly.JavaScript.getAdjusted(a, "AT1", 1, !1, Blockly.JavaScript.ORDER_SUBTRACTION);
          e = b + ".length - " + e;
          break;

        case "FIRST":
          e = "0";
          break;

        default:
          throw Error("Unhandled option (lists_getSublist).");
      }

      switch (d) {
        case "FROM_START":
          a = Blockly.JavaScript.getAdjusted(a, "AT2", 1);
          break;

        case "FROM_END":
          a = Blockly.JavaScript.getAdjusted(a, "AT2", 0, !1, Blockly.JavaScript.ORDER_SUBTRACTION);
          a = b + ".length - " + a;
          break;

        case "LAST":
          a = b + ".length";
          break;

        default:
          throw Error("Unhandled option (lists_getSublist).");
      }

      b = b + ".slice(" + e + ", " + a + ")";
    } else {
      e = Blockly.JavaScript.getAdjusted(a, "AT1");
      a = Blockly.JavaScript.getAdjusted(a, "AT2");
      var f = Blockly.JavaScript.lists.getIndex_,
          g = {
        FIRST: "First",
        LAST: "Last",
        FROM_START: "FromStart",
        FROM_END: "FromEnd"
      };
      b = Blockly.JavaScript.provideFunction_("subsequence" + g[c] + g[d], ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(sequence" + ("FROM_END" == c || "FROM_START" == c ? ", at1" : "") + ("FROM_END" == d || "FROM_START" == d ? ", at2" : "") + ") {", "  var start = " + f("sequence", c, "at1") + ";", "  var end = " + f("sequence", d, "at2") + " + 1;", "  return sequence.slice(start, end);", "}"]) + "(" + b + ("FROM_END" == c || "FROM_START" == c ? ", " + e : "") + ("FROM_END" == d || "FROM_START" == d ? ", " + a : "") + ")";
    }
    return [b, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.lists_sort = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "LIST", Blockly.JavaScript.ORDER_FUNCTION_CALL) || "[]",
        c = "1" === a.getFieldValue("DIRECTION") ? 1 : -1;
    a = a.getFieldValue("TYPE");
    var d = Blockly.JavaScript.provideFunction_("listsGetSortCompare", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(type, direction) {", "  var compareFuncs = {", '    "NUMERIC": function(a, b) {', "        return Number(a) - Number(b); },", '    "TEXT": function(a, b) {', "        return a.toString() > b.toString() ? 1 : -1; },", '    "IGNORE_CASE": function(a, b) {', "        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },", "  };", "  var compare = compareFuncs[type];", "  return function(a, b) { return compare(a, b) * direction; }", "}"]);
    return [b + ".slice().sort(" + d + '("' + a + '", ' + c + "))", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.lists_split = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "INPUT", Blockly.JavaScript.ORDER_MEMBER),
        c = Blockly.JavaScript.valueToCode(a, "DELIM", Blockly.JavaScript.ORDER_NONE) || "''";
    a = a.getFieldValue("MODE");
    if ("SPLIT" == a) b || (b = "''"), a = "split";else if ("JOIN" == a) b || (b = "[]"), a = "join";else throw Error("Unknown mode: " + a);
    return [b + "." + a + "(" + c + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.lists_reverse = function (a) {
    return [(Blockly.JavaScript.valueToCode(a, "LIST", Blockly.JavaScript.ORDER_FUNCTION_CALL) || "[]") + ".slice().reverse()", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.logic = {};

  Blockly.JavaScript.controls_if = function (a) {
    var b = 0,
        c = "";
    Blockly.JavaScript.STATEMENT_PREFIX && (c += Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_PREFIX, a));

    do {
      var d = Blockly.JavaScript.valueToCode(a, "IF" + b, Blockly.JavaScript.ORDER_NONE) || "false";
      var e = Blockly.JavaScript.statementToCode(a, "DO" + b);
      Blockly.JavaScript.STATEMENT_SUFFIX && (e = Blockly.JavaScript.prefixLines(Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, a), Blockly.JavaScript.INDENT) + e);
      c += (0 < b ? " else " : "") + "if (" + d + ") {\n" + e + "}";
      ++b;
    } while (a.getInput("IF" + b));

    if (a.getInput("ELSE") || Blockly.JavaScript.STATEMENT_SUFFIX) e = Blockly.JavaScript.statementToCode(a, "ELSE"), Blockly.JavaScript.STATEMENT_SUFFIX && (e = Blockly.JavaScript.prefixLines(Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, a), Blockly.JavaScript.INDENT) + e), c += " else {\n" + e + "}";
    return c + "\n";
  };

  Blockly.JavaScript.controls_ifelse = Blockly.JavaScript.controls_if;

  Blockly.JavaScript.logic_compare = function (a) {
    var b = {
      EQ: "==",
      NEQ: "!=",
      LT: "<",
      LTE: "<=",
      GT: ">",
      GTE: ">="
    }[a.getFieldValue("OP")],
        c = "==" == b || "!=" == b ? Blockly.JavaScript.ORDER_EQUALITY : Blockly.JavaScript.ORDER_RELATIONAL,
        d = Blockly.JavaScript.valueToCode(a, "A", c) || "0";
    a = Blockly.JavaScript.valueToCode(a, "B", c) || "0";
    return [d + " " + b + " " + a, c];
  };

  Blockly.JavaScript.logic_operation = function (a) {
    var b = "AND" == a.getFieldValue("OP") ? "&&" : "||",
        c = "&&" == b ? Blockly.JavaScript.ORDER_LOGICAL_AND : Blockly.JavaScript.ORDER_LOGICAL_OR,
        d = Blockly.JavaScript.valueToCode(a, "A", c);
    a = Blockly.JavaScript.valueToCode(a, "B", c);

    if (d || a) {
      var e = "&&" == b ? "true" : "false";
      d || (d = e);
      a || (a = e);
    } else a = d = "false";

    return [d + " " + b + " " + a, c];
  };

  Blockly.JavaScript.logic_negate = function (a) {
    var b = Blockly.JavaScript.ORDER_LOGICAL_NOT;
    return ["!" + (Blockly.JavaScript.valueToCode(a, "BOOL", b) || "true"), b];
  };

  Blockly.JavaScript.logic_boolean = function (a) {
    return ["TRUE" == a.getFieldValue("BOOL") ? "true" : "false", Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript.logic_null = function (a) {
    return ["null", Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript.logic_ternary = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "IF", Blockly.JavaScript.ORDER_CONDITIONAL) || "false",
        c = Blockly.JavaScript.valueToCode(a, "THEN", Blockly.JavaScript.ORDER_CONDITIONAL) || "null";
    a = Blockly.JavaScript.valueToCode(a, "ELSE", Blockly.JavaScript.ORDER_CONDITIONAL) || "null";
    return [b + " ? " + c + " : " + a, Blockly.JavaScript.ORDER_CONDITIONAL];
  };

  Blockly.JavaScript.loops = {};

  Blockly.JavaScript.controls_repeat_ext = function (a) {
    var b = a.getField("TIMES") ? String(Number(a.getFieldValue("TIMES"))) : Blockly.JavaScript.valueToCode(a, "TIMES", Blockly.JavaScript.ORDER_ASSIGNMENT) || "0",
        c = Blockly.JavaScript.statementToCode(a, "DO");
    c = Blockly.JavaScript.addLoopTrap(c, a);
    a = "";
    var d = Blockly.JavaScript.variableDB_.getDistinctName("count", Blockly.VARIABLE_CATEGORY_NAME),
        e = b;
    b.match(/^\w+$/) || Blockly.isNumber(b) || (e = Blockly.JavaScript.variableDB_.getDistinctName("repeat_end", Blockly.VARIABLE_CATEGORY_NAME), a += "var " + e + " = " + b + ";\n");
    return a + ("for (var " + d + " = 0; " + d + " < " + e + "; " + d + "++) {\n" + c + "}\n");
  };

  Blockly.JavaScript.controls_repeat = Blockly.JavaScript.controls_repeat_ext;

  Blockly.JavaScript.controls_whileUntil = function (a) {
    var b = "UNTIL" == a.getFieldValue("MODE"),
        c = Blockly.JavaScript.valueToCode(a, "BOOL", b ? Blockly.JavaScript.ORDER_LOGICAL_NOT : Blockly.JavaScript.ORDER_NONE) || "false",
        d = Blockly.JavaScript.statementToCode(a, "DO");
    d = Blockly.JavaScript.addLoopTrap(d, a);
    b && (c = "!" + c);
    return "while (" + c + ") {\n" + d + "}\n";
  };

  Blockly.JavaScript.controls_for = function (a) {
    var b = Blockly.JavaScript.variableDB_.getName(a.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME),
        c = Blockly.JavaScript.valueToCode(a, "FROM", Blockly.JavaScript.ORDER_ASSIGNMENT) || "0",
        d = Blockly.JavaScript.valueToCode(a, "TO", Blockly.JavaScript.ORDER_ASSIGNMENT) || "0",
        e = Blockly.JavaScript.valueToCode(a, "BY", Blockly.JavaScript.ORDER_ASSIGNMENT) || "1",
        f = Blockly.JavaScript.statementToCode(a, "DO");
    f = Blockly.JavaScript.addLoopTrap(f, a);

    if (Blockly.isNumber(c) && Blockly.isNumber(d) && Blockly.isNumber(e)) {
      var g = Number(c) <= Number(d);
      a = "for (" + b + " = " + c + "; " + b + (g ? " <= " : " >= ") + d + "; " + b;
      b = Math.abs(Number(e));
      a = (1 == b ? a + (g ? "++" : "--") : a + ((g ? " += " : " -= ") + b)) + (") {\n" + f + "}\n");
    } else a = "", g = c, c.match(/^\w+$/) || Blockly.isNumber(c) || (g = Blockly.JavaScript.variableDB_.getDistinctName(b + "_start", Blockly.VARIABLE_CATEGORY_NAME), a += "var " + g + " = " + c + ";\n"), c = d, d.match(/^\w+$/) || Blockly.isNumber(d) || (c = Blockly.JavaScript.variableDB_.getDistinctName(b + "_end", Blockly.VARIABLE_CATEGORY_NAME), a += "var " + c + " = " + d + ";\n"), d = Blockly.JavaScript.variableDB_.getDistinctName(b + "_inc", Blockly.VARIABLE_CATEGORY_NAME), a += "var " + d + " = ", a = Blockly.isNumber(e) ? a + (Math.abs(e) + ";\n") : a + ("Math.abs(" + e + ");\n"), a = a + ("if (" + g + " > " + c + ") {\n") + (Blockly.JavaScript.INDENT + d + " = -" + d + ";\n"), a += "}\n", a += "for (" + b + " = " + g + "; " + d + " >= 0 ? " + b + " <= " + c + " : " + b + " >= " + c + "; " + b + " += " + d + ") {\n" + f + "}\n";

    return a;
  };

  Blockly.JavaScript.controls_forEach = function (a) {
    var b = Blockly.JavaScript.variableDB_.getName(a.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME),
        c = Blockly.JavaScript.valueToCode(a, "LIST", Blockly.JavaScript.ORDER_ASSIGNMENT) || "[]",
        d = Blockly.JavaScript.statementToCode(a, "DO");
    d = Blockly.JavaScript.addLoopTrap(d, a);
    a = "";
    var e = c;
    c.match(/^\w+$/) || (e = Blockly.JavaScript.variableDB_.getDistinctName(b + "_list", Blockly.VARIABLE_CATEGORY_NAME), a += "var " + e + " = " + c + ";\n");
    c = Blockly.JavaScript.variableDB_.getDistinctName(b + "_index", Blockly.VARIABLE_CATEGORY_NAME);
    d = Blockly.JavaScript.INDENT + b + " = " + e + "[" + c + "];\n" + d;
    return a + ("for (var " + c + " in " + e + ") {\n" + d + "}\n");
  };

  Blockly.JavaScript.controls_flow_statements = function (a) {
    var b = "";
    Blockly.JavaScript.STATEMENT_PREFIX && (b += Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_PREFIX, a));
    Blockly.JavaScript.STATEMENT_SUFFIX && (b += Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, a));

    if (Blockly.JavaScript.STATEMENT_PREFIX) {
      var c = Blockly.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN.getSurroundLoop(a);
      c && !c.suppressPrefixSuffix && (b += Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_PREFIX, c));
    }

    switch (a.getFieldValue("FLOW")) {
      case "BREAK":
        return b + "break;\n";

      case "CONTINUE":
        return b + "continue;\n";
    }

    throw Error("Unknown flow statement.");
  };

  Blockly.JavaScript.math = {};

  Blockly.JavaScript.math_number = function (a) {
    a = Number(a.getFieldValue("NUM"));
    return [a, 0 <= a ? Blockly.JavaScript.ORDER_ATOMIC : Blockly.JavaScript.ORDER_UNARY_NEGATION];
  };

  Blockly.JavaScript.math_arithmetic = function (a) {
    var b = {
      ADD: [" + ", Blockly.JavaScript.ORDER_ADDITION],
      MINUS: [" - ", Blockly.JavaScript.ORDER_SUBTRACTION],
      MULTIPLY: [" * ", Blockly.JavaScript.ORDER_MULTIPLICATION],
      DIVIDE: [" / ", Blockly.JavaScript.ORDER_DIVISION],
      POWER: [null, Blockly.JavaScript.ORDER_COMMA]
    }[a.getFieldValue("OP")],
        c = b[0];
    b = b[1];
    var d = Blockly.JavaScript.valueToCode(a, "A", b) || "0";
    a = Blockly.JavaScript.valueToCode(a, "B", b) || "0";
    return c ? [d + c + a, b] : ["Math.pow(" + d + ", " + a + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.math_single = function (a) {
    var b = a.getFieldValue("OP");
    if ("NEG" == b) return a = Blockly.JavaScript.valueToCode(a, "NUM", Blockly.JavaScript.ORDER_UNARY_NEGATION) || "0", "-" == a[0] && (a = " " + a), ["-" + a, Blockly.JavaScript.ORDER_UNARY_NEGATION];
    a = "SIN" == b || "COS" == b || "TAN" == b ? Blockly.JavaScript.valueToCode(a, "NUM", Blockly.JavaScript.ORDER_DIVISION) || "0" : Blockly.JavaScript.valueToCode(a, "NUM", Blockly.JavaScript.ORDER_NONE) || "0";

    switch (b) {
      case "ABS":
        var c = "Math.abs(" + a + ")";
        break;

      case "ROOT":
        c = "Math.sqrt(" + a + ")";
        break;

      case "LN":
        c = "Math.log(" + a + ")";
        break;

      case "EXP":
        c = "Math.exp(" + a + ")";
        break;

      case "POW10":
        c = "Math.pow(10," + a + ")";
        break;

      case "ROUND":
        c = "Math.round(" + a + ")";
        break;

      case "ROUNDUP":
        c = "Math.ceil(" + a + ")";
        break;

      case "ROUNDDOWN":
        c = "Math.floor(" + a + ")";
        break;

      case "SIN":
        c = "Math.sin(" + a + " / 180 * Math.PI)";
        break;

      case "COS":
        c = "Math.cos(" + a + " / 180 * Math.PI)";
        break;

      case "TAN":
        c = "Math.tan(" + a + " / 180 * Math.PI)";
    }

    if (c) return [c, Blockly.JavaScript.ORDER_FUNCTION_CALL];

    switch (b) {
      case "LOG10":
        c = "Math.log(" + a + ") / Math.log(10)";
        break;

      case "ASIN":
        c = "Math.asin(" + a + ") / Math.PI * 180";
        break;

      case "ACOS":
        c = "Math.acos(" + a + ") / Math.PI * 180";
        break;

      case "ATAN":
        c = "Math.atan(" + a + ") / Math.PI * 180";
        break;

      default:
        throw Error("Unknown math operator: " + b);
    }

    return [c, Blockly.JavaScript.ORDER_DIVISION];
  };

  Blockly.JavaScript.math_constant = function (a) {
    return {
      PI: ["Math.PI", Blockly.JavaScript.ORDER_MEMBER],
      E: ["Math.E", Blockly.JavaScript.ORDER_MEMBER],
      GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", Blockly.JavaScript.ORDER_DIVISION],
      SQRT2: ["Math.SQRT2", Blockly.JavaScript.ORDER_MEMBER],
      SQRT1_2: ["Math.SQRT1_2", Blockly.JavaScript.ORDER_MEMBER],
      INFINITY: ["Infinity", Blockly.JavaScript.ORDER_ATOMIC]
    }[a.getFieldValue("CONSTANT")];
  };

  Blockly.JavaScript.math_number_property = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "NUMBER_TO_CHECK", Blockly.JavaScript.ORDER_MODULUS) || "0",
        c = a.getFieldValue("PROPERTY");
    if ("PRIME" == c) return [Blockly.JavaScript.provideFunction_("mathIsPrime", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(n) {", "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods", "  if (n == 2 || n == 3) {", "    return true;", "  }", "  // False if n is NaN, negative, is 1, or not whole.", "  // And false if n is divisible by 2 or 3.", "  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {", "    return false;", "  }", "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).", "  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {", "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {", "      return false;", "    }", "  }", "  return true;", "}"]) + "(" + b + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];

    switch (c) {
      case "EVEN":
        var d = b + " % 2 == 0";
        break;

      case "ODD":
        d = b + " % 2 == 1";
        break;

      case "WHOLE":
        d = b + " % 1 == 0";
        break;

      case "POSITIVE":
        d = b + " > 0";
        break;

      case "NEGATIVE":
        d = b + " < 0";
        break;

      case "DIVISIBLE_BY":
        a = Blockly.JavaScript.valueToCode(a, "DIVISOR", Blockly.JavaScript.ORDER_MODULUS) || "0", d = b + " % " + a + " == 0";
    }

    return [d, Blockly.JavaScript.ORDER_EQUALITY];
  };

  Blockly.JavaScript.math_change = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "DELTA", Blockly.JavaScript.ORDER_ADDITION) || "0";
    a = Blockly.JavaScript.variableDB_.getName(a.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME);
    return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + b + ";\n";
  };

  Blockly.JavaScript.math_round = Blockly.JavaScript.math_single;
  Blockly.JavaScript.math_trig = Blockly.JavaScript.math_single;

  Blockly.JavaScript.math_on_list = function (a) {
    var b = a.getFieldValue("OP");

    switch (b) {
      case "SUM":
        a = Blockly.JavaScript.valueToCode(a, "LIST", Blockly.JavaScript.ORDER_MEMBER) || "[]";
        a += ".reduce(function(x, y) {return x + y;})";
        break;

      case "MIN":
        a = Blockly.JavaScript.valueToCode(a, "LIST", Blockly.JavaScript.ORDER_COMMA) || "[]";
        a = "Math.min.apply(null, " + a + ")";
        break;

      case "MAX":
        a = Blockly.JavaScript.valueToCode(a, "LIST", Blockly.JavaScript.ORDER_COMMA) || "[]";
        a = "Math.max.apply(null, " + a + ")";
        break;

      case "AVERAGE":
        b = Blockly.JavaScript.provideFunction_("mathMean", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(myList) {", "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;", "}"]);
        a = Blockly.JavaScript.valueToCode(a, "LIST", Blockly.JavaScript.ORDER_NONE) || "[]";
        a = b + "(" + a + ")";
        break;

      case "MEDIAN":
        b = Blockly.JavaScript.provideFunction_("mathMedian", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(myList) {", "  var localList = myList.filter(function (x) {return typeof x == 'number';});", "  if (!localList.length) return null;", "  localList.sort(function(a, b) {return b - a;});", "  if (localList.length % 2 == 0) {", "    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;", "  } else {", "    return localList[(localList.length - 1) / 2];", "  }", "}"]);
        a = Blockly.JavaScript.valueToCode(a, "LIST", Blockly.JavaScript.ORDER_NONE) || "[]";
        a = b + "(" + a + ")";
        break;

      case "MODE":
        b = Blockly.JavaScript.provideFunction_("mathModes", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(values) {", "  var modes = [];", "  var counts = [];", "  var maxCount = 0;", "  for (var i = 0; i < values.length; i++) {", "    var value = values[i];", "    var found = false;", "    var thisCount;", "    for (var j = 0; j < counts.length; j++) {", "      if (counts[j][0] === value) {", "        thisCount = ++counts[j][1];", "        found = true;", "        break;", "      }", "    }", "    if (!found) {", "      counts.push([value, 1]);", "      thisCount = 1;", "    }", "    maxCount = Math.max(thisCount, maxCount);", "  }", "  for (var j = 0; j < counts.length; j++) {", "    if (counts[j][1] == maxCount) {", "        modes.push(counts[j][0]);", "    }", "  }", "  return modes;", "}"]);
        a = Blockly.JavaScript.valueToCode(a, "LIST", Blockly.JavaScript.ORDER_NONE) || "[]";
        a = b + "(" + a + ")";
        break;

      case "STD_DEV":
        b = Blockly.JavaScript.provideFunction_("mathStandardDeviation", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(numbers) {", "  var n = numbers.length;", "  if (!n) return null;", "  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;", "  var variance = 0;", "  for (var j = 0; j < n; j++) {", "    variance += Math.pow(numbers[j] - mean, 2);", "  }", "  variance = variance / n;", "  return Math.sqrt(variance);", "}"]);
        a = Blockly.JavaScript.valueToCode(a, "LIST", Blockly.JavaScript.ORDER_NONE) || "[]";
        a = b + "(" + a + ")";
        break;

      case "RANDOM":
        b = Blockly.JavaScript.provideFunction_("mathRandomList", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(list) {", "  var x = Math.floor(Math.random() * list.length);", "  return list[x];", "}"]);
        a = Blockly.JavaScript.valueToCode(a, "LIST", Blockly.JavaScript.ORDER_NONE) || "[]";
        a = b + "(" + a + ")";
        break;

      default:
        throw Error("Unknown operator: " + b);
    }

    return [a, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.math_modulo = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "DIVIDEND", Blockly.JavaScript.ORDER_MODULUS) || "0";
    a = Blockly.JavaScript.valueToCode(a, "DIVISOR", Blockly.JavaScript.ORDER_MODULUS) || "0";
    return [b + " % " + a, Blockly.JavaScript.ORDER_MODULUS];
  };

  Blockly.JavaScript.math_constrain = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "VALUE", Blockly.JavaScript.ORDER_COMMA) || "0",
        c = Blockly.JavaScript.valueToCode(a, "LOW", Blockly.JavaScript.ORDER_COMMA) || "0";
    a = Blockly.JavaScript.valueToCode(a, "HIGH", Blockly.JavaScript.ORDER_COMMA) || "Infinity";
    return ["Math.min(Math.max(" + b + ", " + c + "), " + a + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.math_random_int = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "FROM", Blockly.JavaScript.ORDER_COMMA) || "0";
    a = Blockly.JavaScript.valueToCode(a, "TO", Blockly.JavaScript.ORDER_COMMA) || "0";
    return [Blockly.JavaScript.provideFunction_("mathRandomInt", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(a, b) {", "  if (a > b) {", "    // Swap a and b to ensure a is smaller.", "    var c = a;", "    a = b;", "    b = c;", "  }", "  return Math.floor(Math.random() * (b - a + 1) + a);", "}"]) + "(" + b + ", " + a + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.math_random_float = function (a) {
    return ["Math.random()", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.math_atan2 = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "X", Blockly.JavaScript.ORDER_COMMA) || "0";
    return ["Math.atan2(" + (Blockly.JavaScript.valueToCode(a, "Y", Blockly.JavaScript.ORDER_COMMA) || "0") + ", " + b + ") / Math.PI * 180", Blockly.JavaScript.ORDER_DIVISION];
  };

  Blockly.JavaScript.procedures = {};

  Blockly.JavaScript.procedures_defreturn = function (a) {
    var b = Blockly.JavaScript.variableDB_.getName(a.getFieldValue("NAME"), Blockly.PROCEDURE_CATEGORY_NAME),
        c = "";
    Blockly.JavaScript.STATEMENT_PREFIX && (c += Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_PREFIX, a));
    Blockly.JavaScript.STATEMENT_SUFFIX && (c += Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, a));
    c && (c = Blockly.JavaScript.prefixLines(c, Blockly.JavaScript.INDENT));
    var d = "";
    Blockly.JavaScript.INFINITE_LOOP_TRAP && (d = Blockly.JavaScript.prefixLines(Blockly.JavaScript.injectId(Blockly.JavaScript.INFINITE_LOOP_TRAP, a), Blockly.JavaScript.INDENT));
    var e = Blockly.JavaScript.statementToCode(a, "STACK"),
        f = Blockly.JavaScript.valueToCode(a, "RETURN", Blockly.JavaScript.ORDER_NONE) || "",
        g = "";
    e && f && (g = c);
    f && (f = Blockly.JavaScript.INDENT + "return " + f + ";\n");

    for (var h = [], l = a.getVars(), k = 0; k < l.length; k++) {
      h[k] = Blockly.JavaScript.variableDB_.getName(l[k], Blockly.VARIABLE_CATEGORY_NAME);
    }

    c = "function " + b + "(" + h.join(", ") + ") {\n" + c + d + e + g + f + "}";
    c = Blockly.JavaScript.scrub_(a, c);
    Blockly.JavaScript.definitions_["%" + b] = c;
    return null;
  };

  Blockly.JavaScript.procedures_defnoreturn = Blockly.JavaScript.procedures_defreturn;

  Blockly.JavaScript.procedures_callreturn = function (a) {
    for (var b = Blockly.JavaScript.variableDB_.getName(a.getFieldValue("NAME"), Blockly.PROCEDURE_CATEGORY_NAME), c = [], d = a.getVars(), e = 0; e < d.length; e++) {
      c[e] = Blockly.JavaScript.valueToCode(a, "ARG" + e, Blockly.JavaScript.ORDER_COMMA) || "null";
    }

    return [b + "(" + c.join(", ") + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.procedures_callnoreturn = function (a) {
    return Blockly.JavaScript.procedures_callreturn(a)[0] + ";\n";
  };

  Blockly.JavaScript.procedures_ifreturn = function (a) {
    var b = "if (" + (Blockly.JavaScript.valueToCode(a, "CONDITION", Blockly.JavaScript.ORDER_NONE) || "false") + ") {\n";
    Blockly.JavaScript.STATEMENT_SUFFIX && (b += Blockly.JavaScript.prefixLines(Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, a), Blockly.JavaScript.INDENT));
    a.hasReturnValue_ ? (a = Blockly.JavaScript.valueToCode(a, "VALUE", Blockly.JavaScript.ORDER_NONE) || "null", b += Blockly.JavaScript.INDENT + "return " + a + ";\n") : b += Blockly.JavaScript.INDENT + "return;\n";
    return b + "}\n";
  };

  Blockly.JavaScript.texts = {};

  Blockly.JavaScript.text = function (a) {
    return [Blockly.JavaScript.quote_(a.getFieldValue("TEXT")), Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript.text_multiline = function (a) {
    a = Blockly.JavaScript.multiline_quote_(a.getFieldValue("TEXT"));
    -1 != a.indexOf("\n") && (a = "(" + a + ")");
    return [a, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript.text.forceString_ = function (a) {
    return Blockly.JavaScript.text.forceString_.strRegExp.test(a) ? a : "String(" + a + ")";
  };

  Blockly.JavaScript.text.forceString_.strRegExp = /^\s*'([^']|\\')*'\s*$/;

  Blockly.JavaScript.text_join = function (a) {
    switch (a.itemCount_) {
      case 0:
        return ["''", Blockly.JavaScript.ORDER_ATOMIC];

      case 1:
        return a = Blockly.JavaScript.valueToCode(a, "ADD0", Blockly.JavaScript.ORDER_NONE) || "''", a = Blockly.JavaScript.text.forceString_(a), [a, Blockly.JavaScript.ORDER_FUNCTION_CALL];

      case 2:
        var b = Blockly.JavaScript.valueToCode(a, "ADD0", Blockly.JavaScript.ORDER_NONE) || "''";
        a = Blockly.JavaScript.valueToCode(a, "ADD1", Blockly.JavaScript.ORDER_NONE) || "''";
        a = Blockly.JavaScript.text.forceString_(b) + " + " + Blockly.JavaScript.text.forceString_(a);
        return [a, Blockly.JavaScript.ORDER_ADDITION];

      default:
        b = Array(a.itemCount_);

        for (var c = 0; c < a.itemCount_; c++) {
          b[c] = Blockly.JavaScript.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "''";
        }

        a = "[" + b.join(",") + "].join('')";
        return [a, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    }
  };

  Blockly.JavaScript.text_append = function (a) {
    var b = Blockly.JavaScript.variableDB_.getName(a.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME);
    a = Blockly.JavaScript.valueToCode(a, "TEXT", Blockly.JavaScript.ORDER_NONE) || "''";
    return b + " += " + Blockly.JavaScript.text.forceString_(a) + ";\n";
  };

  Blockly.JavaScript.text_length = function (a) {
    return [(Blockly.JavaScript.valueToCode(a, "VALUE", Blockly.JavaScript.ORDER_FUNCTION_CALL) || "''") + ".length", Blockly.JavaScript.ORDER_MEMBER];
  };

  Blockly.JavaScript.text_isEmpty = function (a) {
    return ["!" + (Blockly.JavaScript.valueToCode(a, "VALUE", Blockly.JavaScript.ORDER_MEMBER) || "''") + ".length", Blockly.JavaScript.ORDER_LOGICAL_NOT];
  };

  Blockly.JavaScript.text_indexOf = function (a) {
    var b = "FIRST" == a.getFieldValue("END") ? "indexOf" : "lastIndexOf",
        c = Blockly.JavaScript.valueToCode(a, "FIND", Blockly.JavaScript.ORDER_NONE) || "''";
    b = (Blockly.JavaScript.valueToCode(a, "VALUE", Blockly.JavaScript.ORDER_MEMBER) || "''") + "." + b + "(" + c + ")";
    return a.workspace.options.oneBasedIndex ? [b + " + 1", Blockly.JavaScript.ORDER_ADDITION] : [b, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.text_charAt = function (a) {
    var b = a.getFieldValue("WHERE") || "FROM_START",
        c = Blockly.JavaScript.valueToCode(a, "VALUE", "RANDOM" == b ? Blockly.JavaScript.ORDER_NONE : Blockly.JavaScript.ORDER_MEMBER) || "''";

    switch (b) {
      case "FIRST":
        return [c + ".charAt(0)", Blockly.JavaScript.ORDER_FUNCTION_CALL];

      case "LAST":
        return [c + ".slice(-1)", Blockly.JavaScript.ORDER_FUNCTION_CALL];

      case "FROM_START":
        return a = Blockly.JavaScript.getAdjusted(a, "AT"), [c + ".charAt(" + a + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];

      case "FROM_END":
        return a = Blockly.JavaScript.getAdjusted(a, "AT", 1, !0), [c + ".slice(" + a + ").charAt(0)", Blockly.JavaScript.ORDER_FUNCTION_CALL];

      case "RANDOM":
        return [Blockly.JavaScript.provideFunction_("textRandomLetter", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(text) {", "  var x = Math.floor(Math.random() * text.length);", "  return text[x];", "}"]) + "(" + c + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
    }

    throw Error("Unhandled option (text_charAt).");
  };

  Blockly.JavaScript.text.getIndex_ = function (a, b, c) {
    return "FIRST" == b ? "0" : "FROM_END" == b ? a + ".length - 1 - " + c : "LAST" == b ? a + ".length - 1" : c;
  };

  Blockly.JavaScript.text_getSubstring = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "STRING", Blockly.JavaScript.ORDER_FUNCTION_CALL) || "''",
        c = a.getFieldValue("WHERE1"),
        d = a.getFieldValue("WHERE2");
    if ("FIRST" != c || "LAST" != d) if (b.match(/^'?\w+'?$/) || "FROM_END" != c && "LAST" != c && "FROM_END" != d && "LAST" != d) {
      switch (c) {
        case "FROM_START":
          var e = Blockly.JavaScript.getAdjusted(a, "AT1");
          break;

        case "FROM_END":
          e = Blockly.JavaScript.getAdjusted(a, "AT1", 1, !1, Blockly.JavaScript.ORDER_SUBTRACTION);
          e = b + ".length - " + e;
          break;

        case "FIRST":
          e = "0";
          break;

        default:
          throw Error("Unhandled option (text_getSubstring).");
      }

      switch (d) {
        case "FROM_START":
          a = Blockly.JavaScript.getAdjusted(a, "AT2", 1);
          break;

        case "FROM_END":
          a = Blockly.JavaScript.getAdjusted(a, "AT2", 0, !1, Blockly.JavaScript.ORDER_SUBTRACTION);
          a = b + ".length - " + a;
          break;

        case "LAST":
          a = b + ".length";
          break;

        default:
          throw Error("Unhandled option (text_getSubstring).");
      }

      b = b + ".slice(" + e + ", " + a + ")";
    } else {
      e = Blockly.JavaScript.getAdjusted(a, "AT1");
      a = Blockly.JavaScript.getAdjusted(a, "AT2");
      var f = Blockly.JavaScript.text.getIndex_,
          g = {
        FIRST: "First",
        LAST: "Last",
        FROM_START: "FromStart",
        FROM_END: "FromEnd"
      };
      b = Blockly.JavaScript.provideFunction_("subsequence" + g[c] + g[d], ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(sequence" + ("FROM_END" == c || "FROM_START" == c ? ", at1" : "") + ("FROM_END" == d || "FROM_START" == d ? ", at2" : "") + ") {", "  var start = " + f("sequence", c, "at1") + ";", "  var end = " + f("sequence", d, "at2") + " + 1;", "  return sequence.slice(start, end);", "}"]) + "(" + b + ("FROM_END" == c || "FROM_START" == c ? ", " + e : "") + ("FROM_END" == d || "FROM_START" == d ? ", " + a : "") + ")";
    }
    return [b, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.text_changeCase = function (a) {
    var b = {
      UPPERCASE: ".toUpperCase()",
      LOWERCASE: ".toLowerCase()",
      TITLECASE: null
    }[a.getFieldValue("CASE")];
    a = Blockly.JavaScript.valueToCode(a, "TEXT", b ? Blockly.JavaScript.ORDER_MEMBER : Blockly.JavaScript.ORDER_NONE) || "''";
    return [b ? a + b : Blockly.JavaScript.provideFunction_("textToTitleCase", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(str) {", "  return str.replace(/\\S+/g,", "      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});", "}"]) + "(" + a + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.text_trim = function (a) {
    var b = {
      LEFT: ".replace(/^[\\s\\xa0]+/, '')",
      RIGHT: ".replace(/[\\s\\xa0]+$/, '')",
      BOTH: ".trim()"
    }[a.getFieldValue("MODE")];
    return [(Blockly.JavaScript.valueToCode(a, "TEXT", Blockly.JavaScript.ORDER_MEMBER) || "''") + b, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.text_print = function (a) {
    return "window.alert(" + (Blockly.JavaScript.valueToCode(a, "TEXT", Blockly.JavaScript.ORDER_NONE) || "''") + ");\n";
  };

  Blockly.JavaScript.text_prompt_ext = function (a) {
    var b = "window.prompt(" + (a.getField("TEXT") ? Blockly.JavaScript.quote_(a.getFieldValue("TEXT")) : Blockly.JavaScript.valueToCode(a, "TEXT", Blockly.JavaScript.ORDER_NONE) || "''") + ")";
    "NUMBER" == a.getFieldValue("TYPE") && (b = "Number(" + b + ")");
    return [b, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.text_prompt = Blockly.JavaScript.text_prompt_ext;

  Blockly.JavaScript.text_count = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "TEXT", Blockly.JavaScript.ORDER_MEMBER) || "''";
    a = Blockly.JavaScript.valueToCode(a, "SUB", Blockly.JavaScript.ORDER_NONE) || "''";
    return [Blockly.JavaScript.provideFunction_("textCount", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(haystack, needle) {", "  if (needle.length === 0) {", "    return haystack.length + 1;", "  } else {", "    return haystack.split(needle).length - 1;", "  }", "}"]) + "(" + b + ", " + a + ")", Blockly.JavaScript.ORDER_SUBTRACTION];
  };

  Blockly.JavaScript.text_replace = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "TEXT", Blockly.JavaScript.ORDER_MEMBER) || "''",
        c = Blockly.JavaScript.valueToCode(a, "FROM", Blockly.JavaScript.ORDER_NONE) || "''";
    a = Blockly.JavaScript.valueToCode(a, "TO", Blockly.JavaScript.ORDER_NONE) || "''";
    return [Blockly.JavaScript.provideFunction_("textReplace", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(haystack, needle, replacement) {", '  needle = needle.replace(/([-()\\[\\]{}+?*.$\\^|,:#<!\\\\])/g,"\\\\$1")', '                 .replace(/\\x08/g,"\\\\x08");', "  return haystack.replace(new RegExp(needle, 'g'), replacement);", "}"]) + "(" + b + ", " + c + ", " + a + ")", Blockly.JavaScript.ORDER_MEMBER];
  };

  Blockly.JavaScript.text_reverse = function (a) {
    return [(Blockly.JavaScript.valueToCode(a, "TEXT", Blockly.JavaScript.ORDER_MEMBER) || "''") + ".split('').reverse().join('')", Blockly.JavaScript.ORDER_MEMBER];
  };

  Blockly.JavaScript.variables = {};

  Blockly.JavaScript.variables_get = function (a) {
    return [Blockly.JavaScript.variableDB_.getName(a.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME), Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript.variables_set = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "VALUE", Blockly.JavaScript.ORDER_ASSIGNMENT) || "0";
    return Blockly.JavaScript.variableDB_.getName(a.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME) + " = " + b + ";\n";
  };

  Blockly.JavaScript.variablesDynamic = {};
  Blockly.JavaScript.variables_get_dynamic = Blockly.JavaScript.variables_get;
  Blockly.JavaScript.variables_set_dynamic = Blockly.JavaScript.variables_set;
  return Blockly.JavaScript;
});

/***/ }),

/***/ 85115:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* eslint-disable */
;

(function (root, factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(90888)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (Blockly) {
  var Blockly = {};
  Blockly.Msg = {}; // This file was automatically generated.  Do not modify.

  'use strict';

  Blockly.Msg["ADD_COMMENT"] = "Add Comment";
  Blockly.Msg["CANNOT_DELETE_VARIABLE_PROCEDURE"] = "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
  Blockly.Msg["CHANGE_VALUE_TITLE"] = "Change value:";
  Blockly.Msg["CLEAN_UP"] = "Clean up Blocks";
  Blockly.Msg["COLLAPSED_WARNINGS_WARNING"] = "Collapsed blocks contain warnings.";
  Blockly.Msg["COLLAPSE_ALL"] = "Collapse Blocks";
  Blockly.Msg["COLLAPSE_BLOCK"] = "Collapse Block";
  Blockly.Msg["COLOUR_BLEND_COLOUR1"] = "colour 1";
  Blockly.Msg["COLOUR_BLEND_COLOUR2"] = "colour 2";
  Blockly.Msg["COLOUR_BLEND_HELPURL"] = "https://meyerweb.com/eric/tools/color-blend/#:::rgbp";
  Blockly.Msg["COLOUR_BLEND_RATIO"] = "ratio";
  Blockly.Msg["COLOUR_BLEND_TITLE"] = "blend";
  Blockly.Msg["COLOUR_BLEND_TOOLTIP"] = "Blends two colours together with a given ratio (0.0 - 1.0).";
  Blockly.Msg["COLOUR_PICKER_HELPURL"] = "https://en.wikipedia.org/wiki/Color";
  Blockly.Msg["COLOUR_PICKER_TOOLTIP"] = "Choose a colour from the palette.";
  Blockly.Msg["COLOUR_RANDOM_HELPURL"] = "http://randomcolour.com";
  Blockly.Msg["COLOUR_RANDOM_TITLE"] = "random colour";
  Blockly.Msg["COLOUR_RANDOM_TOOLTIP"] = "Choose a colour at random.";
  Blockly.Msg["COLOUR_RGB_BLUE"] = "blue";
  Blockly.Msg["COLOUR_RGB_GREEN"] = "green";
  Blockly.Msg["COLOUR_RGB_HELPURL"] = "https://www.december.com/html/spec/colorpercompact.html";
  Blockly.Msg["COLOUR_RGB_RED"] = "red";
  Blockly.Msg["COLOUR_RGB_TITLE"] = "colour with";
  Blockly.Msg["COLOUR_RGB_TOOLTIP"] = "Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK"] = "break out of loop";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE"] = "continue with next iteration of loop";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK"] = "Break out of the containing loop.";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE"] = "Skip the rest of this loop, and continue with the next iteration.";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_WARNING"] = "Warning: This block may only be used within a loop.";
  Blockly.Msg["CONTROLS_FOREACH_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#for-each";
  Blockly.Msg["CONTROLS_FOREACH_TITLE"] = "for each item %1 in list %2";
  Blockly.Msg["CONTROLS_FOREACH_TOOLTIP"] = "For each item in a list, set the variable '%1' to the item, and then do some statements.";
  Blockly.Msg["CONTROLS_FOR_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#count-with";
  Blockly.Msg["CONTROLS_FOR_TITLE"] = "count with %1 from %2 to %3 by %4";
  Blockly.Msg["CONTROLS_FOR_TOOLTIP"] = "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
  Blockly.Msg["CONTROLS_IF_ELSEIF_TOOLTIP"] = "Add a condition to the if block.";
  Blockly.Msg["CONTROLS_IF_ELSE_TOOLTIP"] = "Add a final, catch-all condition to the if block.";
  Blockly.Msg["CONTROLS_IF_HELPURL"] = "https://github.com/google/blockly/wiki/IfElse";
  Blockly.Msg["CONTROLS_IF_IF_TOOLTIP"] = "Add, remove, or reorder sections to reconfigure this if block.";
  Blockly.Msg["CONTROLS_IF_MSG_ELSE"] = "else";
  Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"] = "else if";
  Blockly.Msg["CONTROLS_IF_MSG_IF"] = "if";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_1"] = "If a value is true, then do some statements.";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_2"] = "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_3"] = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_4"] = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
  Blockly.Msg["CONTROLS_REPEAT_HELPURL"] = "https://en.wikipedia.org/wiki/For_loop";
  Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"] = "do";
  Blockly.Msg["CONTROLS_REPEAT_TITLE"] = "repeat %1 times";
  Blockly.Msg["CONTROLS_REPEAT_TOOLTIP"] = "Do some statements several times.";
  Blockly.Msg["CONTROLS_WHILEUNTIL_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#repeat";
  Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_UNTIL"] = "repeat until";
  Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_WHILE"] = "repeat while";
  Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL"] = "While a value is false, then do some statements.";
  Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_WHILE"] = "While a value is true, then do some statements.";
  Blockly.Msg["DELETE_ALL_BLOCKS"] = "Delete all %1 blocks?";
  Blockly.Msg["DELETE_BLOCK"] = "Delete Block";
  Blockly.Msg["DELETE_VARIABLE"] = "Delete the '%1' variable";
  Blockly.Msg["DELETE_VARIABLE_CONFIRMATION"] = "Delete %1 uses of the '%2' variable?";
  Blockly.Msg["DELETE_X_BLOCKS"] = "Delete %1 Blocks";
  Blockly.Msg["DISABLE_BLOCK"] = "Disable Block";
  Blockly.Msg["DUPLICATE_BLOCK"] = "Duplicate";
  Blockly.Msg["DUPLICATE_COMMENT"] = "Duplicate Comment";
  Blockly.Msg["ENABLE_BLOCK"] = "Enable Block";
  Blockly.Msg["EXPAND_ALL"] = "Expand Blocks";
  Blockly.Msg["EXPAND_BLOCK"] = "Expand Block";
  Blockly.Msg["EXTERNAL_INPUTS"] = "External Inputs";
  Blockly.Msg["HELP"] = "Help";
  Blockly.Msg["INLINE_INPUTS"] = "Inline Inputs";
  Blockly.Msg["IOS_CANCEL"] = "Cancel";
  Blockly.Msg["IOS_ERROR"] = "Error";
  Blockly.Msg["IOS_OK"] = "OK";
  Blockly.Msg["IOS_PROCEDURES_ADD_INPUT"] = "+ Add Input";
  Blockly.Msg["IOS_PROCEDURES_ALLOW_STATEMENTS"] = "Allow statements";
  Blockly.Msg["IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR"] = "This function has duplicate inputs.";
  Blockly.Msg["IOS_PROCEDURES_INPUTS"] = "INPUTS";
  Blockly.Msg["IOS_VARIABLES_ADD_BUTTON"] = "Add";
  Blockly.Msg["IOS_VARIABLES_ADD_VARIABLE"] = "+ Add Variable";
  Blockly.Msg["IOS_VARIABLES_DELETE_BUTTON"] = "Delete";
  Blockly.Msg["IOS_VARIABLES_EMPTY_NAME_ERROR"] = "You can't use an empty variable name.";
  Blockly.Msg["IOS_VARIABLES_RENAME_BUTTON"] = "Rename";
  Blockly.Msg["IOS_VARIABLES_VARIABLE_NAME"] = "Variable name";
  Blockly.Msg["LISTS_CREATE_EMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
  Blockly.Msg["LISTS_CREATE_EMPTY_TITLE"] = "create empty list";
  Blockly.Msg["LISTS_CREATE_EMPTY_TOOLTIP"] = "Returns a list, of length 0, containing no data records";
  Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TITLE_ADD"] = "list";
  Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TOOLTIP"] = "Add, remove, or reorder sections to reconfigure this list block.";
  Blockly.Msg["LISTS_CREATE_WITH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";
  Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"] = "create list with";
  Blockly.Msg["LISTS_CREATE_WITH_ITEM_TOOLTIP"] = "Add an item to the list.";
  Blockly.Msg["LISTS_CREATE_WITH_TOOLTIP"] = "Create a list with any number of items.";
  Blockly.Msg["LISTS_GET_INDEX_FIRST"] = "first";
  Blockly.Msg["LISTS_GET_INDEX_FROM_END"] = "# from end";
  Blockly.Msg["LISTS_GET_INDEX_FROM_START"] = "#";
  Blockly.Msg["LISTS_GET_INDEX_GET"] = "get";
  Blockly.Msg["LISTS_GET_INDEX_GET_REMOVE"] = "get and remove";
  Blockly.Msg["LISTS_GET_INDEX_LAST"] = "last";
  Blockly.Msg["LISTS_GET_INDEX_RANDOM"] = "random";
  Blockly.Msg["LISTS_GET_INDEX_REMOVE"] = "remove";
  Blockly.Msg["LISTS_GET_INDEX_TAIL"] = "";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FIRST"] = "Returns the first item in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FROM"] = "Returns the item at the specified position in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_LAST"] = "Returns the last item in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_RANDOM"] = "Returns a random item in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST"] = "Removes and returns the first item in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM"] = "Removes and returns the item at the specified position in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST"] = "Removes and returns the last item in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM"] = "Removes and returns a random item in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST"] = "Removes the first item in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM"] = "Removes the item at the specified position in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST"] = "Removes the last item in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM"] = "Removes a random item in a list.";
  Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_END"] = "to # from end";
  Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_START"] = "to #";
  Blockly.Msg["LISTS_GET_SUBLIST_END_LAST"] = "to last";
  Blockly.Msg["LISTS_GET_SUBLIST_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
  Blockly.Msg["LISTS_GET_SUBLIST_START_FIRST"] = "get sub-list from first";
  Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_END"] = "get sub-list from # from end";
  Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_START"] = "get sub-list from #";
  Blockly.Msg["LISTS_GET_SUBLIST_TAIL"] = "";
  Blockly.Msg["LISTS_GET_SUBLIST_TOOLTIP"] = "Creates a copy of the specified portion of a list.";
  Blockly.Msg["LISTS_INDEX_FROM_END_TOOLTIP"] = "%1 is the last item.";
  Blockly.Msg["LISTS_INDEX_FROM_START_TOOLTIP"] = "%1 is the first item.";
  Blockly.Msg["LISTS_INDEX_OF_FIRST"] = "find first occurrence of item";
  Blockly.Msg["LISTS_INDEX_OF_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
  Blockly.Msg["LISTS_INDEX_OF_LAST"] = "find last occurrence of item";
  Blockly.Msg["LISTS_INDEX_OF_TOOLTIP"] = "Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.";
  Blockly.Msg["LISTS_INLIST"] = "in list";
  Blockly.Msg["LISTS_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#is-empty";
  Blockly.Msg["LISTS_ISEMPTY_TITLE"] = "%1 is empty";
  Blockly.Msg["LISTS_ISEMPTY_TOOLTIP"] = "Returns true if the list is empty.";
  Blockly.Msg["LISTS_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#length-of";
  Blockly.Msg["LISTS_LENGTH_TITLE"] = "length of %1";
  Blockly.Msg["LISTS_LENGTH_TOOLTIP"] = "Returns the length of a list.";
  Blockly.Msg["LISTS_REPEAT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";
  Blockly.Msg["LISTS_REPEAT_TITLE"] = "create list with item %1 repeated %2 times";
  Blockly.Msg["LISTS_REPEAT_TOOLTIP"] = "Creates a list consisting of the given value repeated the specified number of times.";
  Blockly.Msg["LISTS_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
  Blockly.Msg["LISTS_REVERSE_MESSAGE0"] = "reverse %1";
  Blockly.Msg["LISTS_REVERSE_TOOLTIP"] = "Reverse a copy of a list.";
  Blockly.Msg["LISTS_SET_INDEX_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#in-list--set";
  Blockly.Msg["LISTS_SET_INDEX_INPUT_TO"] = "as";
  Blockly.Msg["LISTS_SET_INDEX_INSERT"] = "insert at";
  Blockly.Msg["LISTS_SET_INDEX_SET"] = "set";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST"] = "Inserts the item at the start of a list.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FROM"] = "Inserts the item at the specified position in a list.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_LAST"] = "Append the item to the end of a list.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM"] = "Inserts the item randomly in a list.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FIRST"] = "Sets the first item in a list.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FROM"] = "Sets the item at the specified position in a list.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_LAST"] = "Sets the last item in a list.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_RANDOM"] = "Sets a random item in a list.";
  Blockly.Msg["LISTS_SORT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
  Blockly.Msg["LISTS_SORT_ORDER_ASCENDING"] = "ascending";
  Blockly.Msg["LISTS_SORT_ORDER_DESCENDING"] = "descending";
  Blockly.Msg["LISTS_SORT_TITLE"] = "sort %1 %2 %3";
  Blockly.Msg["LISTS_SORT_TOOLTIP"] = "Sort a copy of a list.";
  Blockly.Msg["LISTS_SORT_TYPE_IGNORECASE"] = "alphabetic, ignore case";
  Blockly.Msg["LISTS_SORT_TYPE_NUMERIC"] = "numeric";
  Blockly.Msg["LISTS_SORT_TYPE_TEXT"] = "alphabetic";
  Blockly.Msg["LISTS_SPLIT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
  Blockly.Msg["LISTS_SPLIT_LIST_FROM_TEXT"] = "make list from text";
  Blockly.Msg["LISTS_SPLIT_TEXT_FROM_LIST"] = "make text from list";
  Blockly.Msg["LISTS_SPLIT_TOOLTIP_JOIN"] = "Join a list of texts into one text, separated by a delimiter.";
  Blockly.Msg["LISTS_SPLIT_TOOLTIP_SPLIT"] = "Split text into a list of texts, breaking at each delimiter.";
  Blockly.Msg["LISTS_SPLIT_WITH_DELIMITER"] = "with delimiter";
  Blockly.Msg["LOGIC_BOOLEAN_FALSE"] = "false";
  Blockly.Msg["LOGIC_BOOLEAN_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#values";
  Blockly.Msg["LOGIC_BOOLEAN_TOOLTIP"] = "Returns either true or false.";
  Blockly.Msg["LOGIC_BOOLEAN_TRUE"] = "true";
  Blockly.Msg["LOGIC_COMPARE_HELPURL"] = "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_EQ"] = "Return true if both inputs equal each other.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GT"] = "Return true if the first input is greater than the second input.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GTE"] = "Return true if the first input is greater than or equal to the second input.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LT"] = "Return true if the first input is smaller than the second input.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LTE"] = "Return true if the first input is smaller than or equal to the second input.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_NEQ"] = "Return true if both inputs are not equal to each other.";
  Blockly.Msg["LOGIC_NEGATE_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#not";
  Blockly.Msg["LOGIC_NEGATE_TITLE"] = "not %1";
  Blockly.Msg["LOGIC_NEGATE_TOOLTIP"] = "Returns true if the input is false. Returns false if the input is true.";
  Blockly.Msg["LOGIC_NULL"] = "null";
  Blockly.Msg["LOGIC_NULL_HELPURL"] = "https://en.wikipedia.org/wiki/Nullable_type";
  Blockly.Msg["LOGIC_NULL_TOOLTIP"] = "Returns null.";
  Blockly.Msg["LOGIC_OPERATION_AND"] = "and";
  Blockly.Msg["LOGIC_OPERATION_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#logical-operations";
  Blockly.Msg["LOGIC_OPERATION_OR"] = "or";
  Blockly.Msg["LOGIC_OPERATION_TOOLTIP_AND"] = "Return true if both inputs are true.";
  Blockly.Msg["LOGIC_OPERATION_TOOLTIP_OR"] = "Return true if at least one of the inputs is true.";
  Blockly.Msg["LOGIC_TERNARY_CONDITION"] = "test";
  Blockly.Msg["LOGIC_TERNARY_HELPURL"] = "https://en.wikipedia.org/wiki/%3F:";
  Blockly.Msg["LOGIC_TERNARY_IF_FALSE"] = "if false";
  Blockly.Msg["LOGIC_TERNARY_IF_TRUE"] = "if true";
  Blockly.Msg["LOGIC_TERNARY_TOOLTIP"] = "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";
  Blockly.Msg["MATH_ADDITION_SYMBOL"] = "+";
  Blockly.Msg["MATH_ARITHMETIC_HELPURL"] = "https://en.wikipedia.org/wiki/Arithmetic";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_ADD"] = "Return the sum of the two numbers.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_DIVIDE"] = "Return the quotient of the two numbers.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MINUS"] = "Return the difference of the two numbers.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MULTIPLY"] = "Return the product of the two numbers.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_POWER"] = "Return the first number raised to the power of the second number.";
  Blockly.Msg["MATH_ATAN2_HELPURL"] = "https://en.wikipedia.org/wiki/Atan2";
  Blockly.Msg["MATH_ATAN2_TITLE"] = "atan2 of X:%1 Y:%2";
  Blockly.Msg["MATH_ATAN2_TOOLTIP"] = "Return the arctangent of point (X, Y) in degrees from -180 to 180.";
  Blockly.Msg["MATH_CHANGE_HELPURL"] = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
  Blockly.Msg["MATH_CHANGE_TITLE"] = "change %1 by %2";
  Blockly.Msg["MATH_CHANGE_TOOLTIP"] = "Add a number to variable '%1'.";
  Blockly.Msg["MATH_CONSTANT_HELPURL"] = "https://en.wikipedia.org/wiki/Mathematical_constant";
  Blockly.Msg["MATH_CONSTANT_TOOLTIP"] = "Return one of the common constants: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (infinity).";
  Blockly.Msg["MATH_CONSTRAIN_HELPURL"] = "https://en.wikipedia.org/wiki/Clamping_(graphics)";
  Blockly.Msg["MATH_CONSTRAIN_TITLE"] = "constrain %1 low %2 high %3";
  Blockly.Msg["MATH_CONSTRAIN_TOOLTIP"] = "Constrain a number to be between the specified limits (inclusive).";
  Blockly.Msg["MATH_DIVISION_SYMBOL"] = "÷";
  Blockly.Msg["MATH_IS_DIVISIBLE_BY"] = "is divisible by";
  Blockly.Msg["MATH_IS_EVEN"] = "is even";
  Blockly.Msg["MATH_IS_NEGATIVE"] = "is negative";
  Blockly.Msg["MATH_IS_ODD"] = "is odd";
  Blockly.Msg["MATH_IS_POSITIVE"] = "is positive";
  Blockly.Msg["MATH_IS_PRIME"] = "is prime";
  Blockly.Msg["MATH_IS_TOOLTIP"] = "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";
  Blockly.Msg["MATH_IS_WHOLE"] = "is whole";
  Blockly.Msg["MATH_MODULO_HELPURL"] = "https://en.wikipedia.org/wiki/Modulo_operation";
  Blockly.Msg["MATH_MODULO_TITLE"] = "remainder of %1 ÷ %2";
  Blockly.Msg["MATH_MODULO_TOOLTIP"] = "Return the remainder from dividing the two numbers.";
  Blockly.Msg["MATH_MULTIPLICATION_SYMBOL"] = "×";
  Blockly.Msg["MATH_NUMBER_HELPURL"] = "https://en.wikipedia.org/wiki/Number";
  Blockly.Msg["MATH_NUMBER_TOOLTIP"] = "A number.";
  Blockly.Msg["MATH_ONLIST_HELPURL"] = "";
  Blockly.Msg["MATH_ONLIST_OPERATOR_AVERAGE"] = "average of list";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MAX"] = "max of list";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MEDIAN"] = "median of list";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MIN"] = "min of list";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MODE"] = "modes of list";
  Blockly.Msg["MATH_ONLIST_OPERATOR_RANDOM"] = "random item of list";
  Blockly.Msg["MATH_ONLIST_OPERATOR_STD_DEV"] = "standard deviation of list";
  Blockly.Msg["MATH_ONLIST_OPERATOR_SUM"] = "sum of list";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_AVERAGE"] = "Return the average (arithmetic mean) of the numeric values in the list.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MAX"] = "Return the largest number in the list.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MEDIAN"] = "Return the median number in the list.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MIN"] = "Return the smallest number in the list.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MODE"] = "Return a list of the most common item(s) in the list.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_RANDOM"] = "Return a random element from the list.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_STD_DEV"] = "Return the standard deviation of the list.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_SUM"] = "Return the sum of all the numbers in the list.";
  Blockly.Msg["MATH_POWER_SYMBOL"] = "^";
  Blockly.Msg["MATH_RANDOM_FLOAT_HELPURL"] = "https://en.wikipedia.org/wiki/Random_number_generation";
  Blockly.Msg["MATH_RANDOM_FLOAT_TITLE_RANDOM"] = "random fraction";
  Blockly.Msg["MATH_RANDOM_FLOAT_TOOLTIP"] = "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
  Blockly.Msg["MATH_RANDOM_INT_HELPURL"] = "https://en.wikipedia.org/wiki/Random_number_generation";
  Blockly.Msg["MATH_RANDOM_INT_TITLE"] = "random integer from %1 to %2";
  Blockly.Msg["MATH_RANDOM_INT_TOOLTIP"] = "Return a random integer between the two specified limits, inclusive.";
  Blockly.Msg["MATH_ROUND_HELPURL"] = "https://en.wikipedia.org/wiki/Rounding";
  Blockly.Msg["MATH_ROUND_OPERATOR_ROUND"] = "round";
  Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDDOWN"] = "round down";
  Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDUP"] = "round up";
  Blockly.Msg["MATH_ROUND_TOOLTIP"] = "Round a number up or down.";
  Blockly.Msg["MATH_SINGLE_HELPURL"] = "https://en.wikipedia.org/wiki/Square_root";
  Blockly.Msg["MATH_SINGLE_OP_ABSOLUTE"] = "absolute";
  Blockly.Msg["MATH_SINGLE_OP_ROOT"] = "square root";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_ABS"] = "Return the absolute value of a number.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_EXP"] = "Return e to the power of a number.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_LN"] = "Return the natural logarithm of a number.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_LOG10"] = "Return the base 10 logarithm of a number.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_NEG"] = "Return the negation of a number.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_POW10"] = "Return 10 to the power of a number.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_ROOT"] = "Return the square root of a number.";
  Blockly.Msg["MATH_SUBTRACTION_SYMBOL"] = "-";
  Blockly.Msg["MATH_TRIG_ACOS"] = "acos";
  Blockly.Msg["MATH_TRIG_ASIN"] = "asin";
  Blockly.Msg["MATH_TRIG_ATAN"] = "atan";
  Blockly.Msg["MATH_TRIG_COS"] = "cos";
  Blockly.Msg["MATH_TRIG_HELPURL"] = "https://en.wikipedia.org/wiki/Trigonometric_functions";
  Blockly.Msg["MATH_TRIG_SIN"] = "sin";
  Blockly.Msg["MATH_TRIG_TAN"] = "tan";
  Blockly.Msg["MATH_TRIG_TOOLTIP_ACOS"] = "Return the arccosine of a number.";
  Blockly.Msg["MATH_TRIG_TOOLTIP_ASIN"] = "Return the arcsine of a number.";
  Blockly.Msg["MATH_TRIG_TOOLTIP_ATAN"] = "Return the arctangent of a number.";
  Blockly.Msg["MATH_TRIG_TOOLTIP_COS"] = "Return the cosine of a degree (not radian).";
  Blockly.Msg["MATH_TRIG_TOOLTIP_SIN"] = "Return the sine of a degree (not radian).";
  Blockly.Msg["MATH_TRIG_TOOLTIP_TAN"] = "Return the tangent of a degree (not radian).";
  Blockly.Msg["NEW_COLOUR_VARIABLE"] = "Create colour variable...";
  Blockly.Msg["NEW_NUMBER_VARIABLE"] = "Create number variable...";
  Blockly.Msg["NEW_STRING_VARIABLE"] = "Create string variable...";
  Blockly.Msg["NEW_VARIABLE"] = "Create variable...";
  Blockly.Msg["NEW_VARIABLE_TITLE"] = "New variable name:";
  Blockly.Msg["NEW_VARIABLE_TYPE_TITLE"] = "New variable type:";
  Blockly.Msg["ORDINAL_NUMBER_SUFFIX"] = "";
  Blockly.Msg["PROCEDURES_ALLOW_STATEMENTS"] = "allow statements";
  Blockly.Msg["PROCEDURES_BEFORE_PARAMS"] = "with:";
  Blockly.Msg["PROCEDURES_CALLNORETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";
  Blockly.Msg["PROCEDURES_CALLNORETURN_TOOLTIP"] = "Run the user-defined function '%1'.";
  Blockly.Msg["PROCEDURES_CALLRETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";
  Blockly.Msg["PROCEDURES_CALLRETURN_TOOLTIP"] = "Run the user-defined function '%1' and use its output.";
  Blockly.Msg["PROCEDURES_CALL_BEFORE_PARAMS"] = "with:";
  Blockly.Msg["PROCEDURES_CREATE_DO"] = "Create '%1'";
  Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"] = "Describe this function...";
  Blockly.Msg["PROCEDURES_DEFNORETURN_DO"] = "";
  Blockly.Msg["PROCEDURES_DEFNORETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";
  Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "do something";
  Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"] = "to";
  Blockly.Msg["PROCEDURES_DEFNORETURN_TOOLTIP"] = "Creates a function with no output.";
  Blockly.Msg["PROCEDURES_DEFRETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";
  Blockly.Msg["PROCEDURES_DEFRETURN_RETURN"] = "return";
  Blockly.Msg["PROCEDURES_DEFRETURN_TOOLTIP"] = "Creates a function with an output.";
  Blockly.Msg["PROCEDURES_DEF_DUPLICATE_WARNING"] = "Warning: This function has duplicate parameters.";
  Blockly.Msg["PROCEDURES_HIGHLIGHT_DEF"] = "Highlight function definition";
  Blockly.Msg["PROCEDURES_IFRETURN_HELPURL"] = "http://c2.com/cgi/wiki?GuardClause";
  Blockly.Msg["PROCEDURES_IFRETURN_TOOLTIP"] = "If a value is true, then return a second value.";
  Blockly.Msg["PROCEDURES_IFRETURN_WARNING"] = "Warning: This block may be used only within a function definition.";
  Blockly.Msg["PROCEDURES_MUTATORARG_TITLE"] = "input name:";
  Blockly.Msg["PROCEDURES_MUTATORARG_TOOLTIP"] = "Add an input to the function.";
  Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TITLE"] = "inputs";
  Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TOOLTIP"] = "Add, remove, or reorder inputs to this function.";
  Blockly.Msg["REDO"] = "Redo";
  Blockly.Msg["REMOVE_COMMENT"] = "Remove Comment";
  Blockly.Msg["RENAME_VARIABLE"] = "Rename variable...";
  Blockly.Msg["RENAME_VARIABLE_TITLE"] = "Rename all '%1' variables to:";
  Blockly.Msg["TEXT_APPEND_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";
  Blockly.Msg["TEXT_APPEND_TITLE"] = "to %1 append text %2";
  Blockly.Msg["TEXT_APPEND_TOOLTIP"] = "Append some text to variable '%1'.";
  Blockly.Msg["TEXT_CHANGECASE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
  Blockly.Msg["TEXT_CHANGECASE_OPERATOR_LOWERCASE"] = "to lower case";
  Blockly.Msg["TEXT_CHANGECASE_OPERATOR_TITLECASE"] = "to Title Case";
  Blockly.Msg["TEXT_CHANGECASE_OPERATOR_UPPERCASE"] = "to UPPER CASE";
  Blockly.Msg["TEXT_CHANGECASE_TOOLTIP"] = "Return a copy of the text in a different case.";
  Blockly.Msg["TEXT_CHARAT_FIRST"] = "get first letter";
  Blockly.Msg["TEXT_CHARAT_FROM_END"] = "get letter # from end";
  Blockly.Msg["TEXT_CHARAT_FROM_START"] = "get letter #";
  Blockly.Msg["TEXT_CHARAT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-text";
  Blockly.Msg["TEXT_CHARAT_LAST"] = "get last letter";
  Blockly.Msg["TEXT_CHARAT_RANDOM"] = "get random letter";
  Blockly.Msg["TEXT_CHARAT_TAIL"] = "";
  Blockly.Msg["TEXT_CHARAT_TITLE"] = "in text %1 %2";
  Blockly.Msg["TEXT_CHARAT_TOOLTIP"] = "Returns the letter at the specified position.";
  Blockly.Msg["TEXT_COUNT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#counting-substrings";
  Blockly.Msg["TEXT_COUNT_MESSAGE0"] = "count %1 in %2";
  Blockly.Msg["TEXT_COUNT_TOOLTIP"] = "Count how many times some text occurs within some other text.";
  Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TOOLTIP"] = "Add an item to the text.";
  Blockly.Msg["TEXT_CREATE_JOIN_TITLE_JOIN"] = "join";
  Blockly.Msg["TEXT_CREATE_JOIN_TOOLTIP"] = "Add, remove, or reorder sections to reconfigure this text block.";
  Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_END"] = "to letter # from end";
  Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_START"] = "to letter #";
  Blockly.Msg["TEXT_GET_SUBSTRING_END_LAST"] = "to last letter";
  Blockly.Msg["TEXT_GET_SUBSTRING_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
  Blockly.Msg["TEXT_GET_SUBSTRING_INPUT_IN_TEXT"] = "in text";
  Blockly.Msg["TEXT_GET_SUBSTRING_START_FIRST"] = "get substring from first letter";
  Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_END"] = "get substring from letter # from end";
  Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_START"] = "get substring from letter #";
  Blockly.Msg["TEXT_GET_SUBSTRING_TAIL"] = "";
  Blockly.Msg["TEXT_GET_SUBSTRING_TOOLTIP"] = "Returns a specified portion of the text.";
  Blockly.Msg["TEXT_INDEXOF_HELPURL"] = "https://github.com/google/blockly/wiki/Text#finding-text";
  Blockly.Msg["TEXT_INDEXOF_OPERATOR_FIRST"] = "find first occurrence of text";
  Blockly.Msg["TEXT_INDEXOF_OPERATOR_LAST"] = "find last occurrence of text";
  Blockly.Msg["TEXT_INDEXOF_TITLE"] = "in text %1 %2 %3";
  Blockly.Msg["TEXT_INDEXOF_TOOLTIP"] = "Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.";
  Blockly.Msg["TEXT_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
  Blockly.Msg["TEXT_ISEMPTY_TITLE"] = "%1 is empty";
  Blockly.Msg["TEXT_ISEMPTY_TOOLTIP"] = "Returns true if the provided text is empty.";
  Blockly.Msg["TEXT_JOIN_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-creation";
  Blockly.Msg["TEXT_JOIN_TITLE_CREATEWITH"] = "create text with";
  Blockly.Msg["TEXT_JOIN_TOOLTIP"] = "Create a piece of text by joining together any number of items.";
  Blockly.Msg["TEXT_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";
  Blockly.Msg["TEXT_LENGTH_TITLE"] = "length of %1";
  Blockly.Msg["TEXT_LENGTH_TOOLTIP"] = "Returns the number of letters (including spaces) in the provided text.";
  Blockly.Msg["TEXT_PRINT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#printing-text";
  Blockly.Msg["TEXT_PRINT_TITLE"] = "print %1";
  Blockly.Msg["TEXT_PRINT_TOOLTIP"] = "Print the specified text, number or other value.";
  Blockly.Msg["TEXT_PROMPT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
  Blockly.Msg["TEXT_PROMPT_TOOLTIP_NUMBER"] = "Prompt for user for a number.";
  Blockly.Msg["TEXT_PROMPT_TOOLTIP_TEXT"] = "Prompt for user for some text.";
  Blockly.Msg["TEXT_PROMPT_TYPE_NUMBER"] = "prompt for number with message";
  Blockly.Msg["TEXT_PROMPT_TYPE_TEXT"] = "prompt for text with message";
  Blockly.Msg["TEXT_REPLACE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#replacing-substrings";
  Blockly.Msg["TEXT_REPLACE_MESSAGE0"] = "replace %1 with %2 in %3";
  Blockly.Msg["TEXT_REPLACE_TOOLTIP"] = "Replace all occurances of some text within some other text.";
  Blockly.Msg["TEXT_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#reversing-text";
  Blockly.Msg["TEXT_REVERSE_MESSAGE0"] = "reverse %1";
  Blockly.Msg["TEXT_REVERSE_TOOLTIP"] = "Reverses the order of the characters in the text.";
  Blockly.Msg["TEXT_TEXT_HELPURL"] = "https://en.wikipedia.org/wiki/String_(computer_science)";
  Blockly.Msg["TEXT_TEXT_TOOLTIP"] = "A letter, word, or line of text.";
  Blockly.Msg["TEXT_TRIM_HELPURL"] = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
  Blockly.Msg["TEXT_TRIM_OPERATOR_BOTH"] = "trim spaces from both sides of";
  Blockly.Msg["TEXT_TRIM_OPERATOR_LEFT"] = "trim spaces from left side of";
  Blockly.Msg["TEXT_TRIM_OPERATOR_RIGHT"] = "trim spaces from right side of";
  Blockly.Msg["TEXT_TRIM_TOOLTIP"] = "Return a copy of the text with spaces removed from one or both ends.";
  Blockly.Msg["TODAY"] = "Today";
  Blockly.Msg["UNDO"] = "Undo";
  Blockly.Msg["UNNAMED_KEY"] = "unnamed";
  Blockly.Msg["VARIABLES_DEFAULT_NAME"] = "item";
  Blockly.Msg["VARIABLES_GET_CREATE_SET"] = "Create 'set %1'";
  Blockly.Msg["VARIABLES_GET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#get";
  Blockly.Msg["VARIABLES_GET_TOOLTIP"] = "Returns the value of this variable.";
  Blockly.Msg["VARIABLES_SET"] = "set %1 to %2";
  Blockly.Msg["VARIABLES_SET_CREATE_GET"] = "Create 'get %1'";
  Blockly.Msg["VARIABLES_SET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#set";
  Blockly.Msg["VARIABLES_SET_TOOLTIP"] = "Sets this variable to be equal to the input.";
  Blockly.Msg["VARIABLE_ALREADY_EXISTS"] = "A variable named '%1' already exists.";
  Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE"] = "A variable named '%1' already exists for another type: '%2'.";
  Blockly.Msg["WORKSPACE_ARIA_LABEL"] = "Blockly Workspace";
  Blockly.Msg["WORKSPACE_COMMENT_DEFAULT_TEXT"] = "Say something...";
  Blockly.Msg["CONTROLS_FOREACH_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
  Blockly.Msg["CONTROLS_FOR_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
  Blockly.Msg["CONTROLS_IF_ELSEIF_TITLE_ELSEIF"] = Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"];
  Blockly.Msg["CONTROLS_IF_ELSE_TITLE_ELSE"] = Blockly.Msg["CONTROLS_IF_MSG_ELSE"];
  Blockly.Msg["CONTROLS_IF_IF_TITLE_IF"] = Blockly.Msg["CONTROLS_IF_MSG_IF"];
  Blockly.Msg["CONTROLS_IF_MSG_THEN"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
  Blockly.Msg["CONTROLS_WHILEUNTIL_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
  Blockly.Msg["LISTS_CREATE_WITH_ITEM_TITLE"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
  Blockly.Msg["LISTS_GET_INDEX_HELPURL"] = Blockly.Msg["LISTS_INDEX_OF_HELPURL"];
  Blockly.Msg["LISTS_GET_INDEX_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
  Blockly.Msg["LISTS_GET_SUBLIST_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
  Blockly.Msg["LISTS_INDEX_OF_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
  Blockly.Msg["LISTS_SET_INDEX_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
  Blockly.Msg["MATH_CHANGE_TITLE_ITEM"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
  Blockly.Msg["PROCEDURES_DEFRETURN_COMMENT"] = Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"];
  Blockly.Msg["PROCEDURES_DEFRETURN_DO"] = Blockly.Msg["PROCEDURES_DEFNORETURN_DO"];
  Blockly.Msg["PROCEDURES_DEFRETURN_PROCEDURE"] = Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"];
  Blockly.Msg["PROCEDURES_DEFRETURN_TITLE"] = Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"];
  Blockly.Msg["TEXT_APPEND_VARIABLE"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
  Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TITLE_ITEM"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
  Blockly.Msg["MATH_HUE"] = "230";
  Blockly.Msg["LOOPS_HUE"] = "120";
  Blockly.Msg["LISTS_HUE"] = "260";
  Blockly.Msg["LOGIC_HUE"] = "210";
  Blockly.Msg["VARIABLES_HUE"] = "330";
  Blockly.Msg["TEXTS_HUE"] = "160";
  Blockly.Msg["PROCEDURES_HUE"] = "290";
  Blockly.Msg["COLOUR_HUE"] = "20";
  Blockly.Msg["VARIABLES_DYNAMIC_HUE"] = "310";
  return Blockly.Msg;
});

/***/ }),

/***/ 20842:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(86535);

__webpack_require__(99244);

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (global, factory) {
   true ? module.exports = factory() : 0;
})(this, function () {
  'use strict';

  var SLICE$0 = Array.prototype.slice;

  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }

    ctor.prototype.constructor = ctor;
  }

  function Iterable(value) {
    return isIterable(value) ? value : Seq(value);
  }

  createClass(KeyedIterable, Iterable);

  function KeyedIterable(value) {
    return isKeyed(value) ? value : KeyedSeq(value);
  }

  createClass(IndexedIterable, Iterable);

  function IndexedIterable(value) {
    return isIndexed(value) ? value : IndexedSeq(value);
  }

  createClass(SetIterable, Iterable);

  function SetIterable(value) {
    return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
  }

  function isIterable(maybeIterable) {
    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
  }

  function isKeyed(maybeKeyed) {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
  }

  function isIndexed(maybeIndexed) {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
  }

  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }

  function isOrdered(maybeOrdered) {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
  }

  Iterable.isIterable = isIterable;
  Iterable.isKeyed = isKeyed;
  Iterable.isIndexed = isIndexed;
  Iterable.isAssociative = isAssociative;
  Iterable.isOrdered = isOrdered;
  Iterable.Keyed = KeyedIterable;
  Iterable.Indexed = IndexedIterable;
  Iterable.Set = SetIterable;
  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@'; // Used for setting prototype methods that IE8 chokes on.

  var DELETE = 'delete'; // Constants describing the size of trie nodes.

  var SHIFT = 5; // Resulted in best performance after ______?

  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1; // A consistent shared value representing "not set" which equals nothing other
  // than itself, and nothing that could be provided externally.

  var NOT_SET = {}; // Boolean references, Rough equivalent of `bool &`.

  var CHANGE_LENGTH = {
    value: false
  };
  var DID_ALTER = {
    value: false
  };

  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }

  function SetRef(ref) {
    ref && (ref.value = true);
  } // A function which returns a value representing an "owner" for transient writes
  // to tries. The return value will only ever equal itself, and will not equal
  // the return of any subsequent call of this function.


  function OwnerID() {} // http://jsperf.com/copy-array-inline


  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);

    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }

    return newArr;
  }

  function ensureSize(iter) {
    if (iter.size === undefined) {
      iter.size = iter.__iterate(returnTrue);
    }

    return iter.size;
  }

  function wrapIndex(iter, index) {
    // This implements "is array index" which the ECMAString spec defines as:
    //
    //     A String property name P is an array index if and only if
    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
    //     to 2^32−1.
    //
    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
    if (typeof index !== 'number') {
      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32

      if ('' + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }

      index = uint32Index;
    }

    return index < 0 ? ensureSize(iter) + index : index;
  }

  function returnTrue() {
    return true;
  }

  function wholeSlice(begin, end, size) {
    return (begin === 0 || size !== undefined && begin <= -size) && (end === undefined || size !== undefined && end >= size);
  }

  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }

  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }

  function resolveIndex(index, size, defaultIndex) {
    return index === undefined ? defaultIndex : index < 0 ? Math.max(0, size + index) : size === undefined ? index : Math.min(size, index);
  }
  /* global Symbol */


  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;
  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';
  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;

  function Iterator(next) {
    this.next = next;
  }

  Iterator.prototype.toString = function () {
    return '[Iterator]';
  };

  Iterator.KEYS = ITERATE_KEYS;
  Iterator.VALUES = ITERATE_VALUES;
  Iterator.ENTRIES = ITERATE_ENTRIES;

  Iterator.prototype.inspect = Iterator.prototype.toSource = function () {
    return this.toString();
  };

  Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
  };

  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? iteratorResult.value = value : iteratorResult = {
      value: value,
      done: false
    };
    return iteratorResult;
  }

  function iteratorDone() {
    return {
      value: undefined,
      done: true
    };
  }

  function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
  }

  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }

  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }

  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL] || iterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  function isArrayLike(value) {
    return value && typeof value.length === 'number';
  }

  createClass(Seq, Iterable);

  function Seq(value) {
    return value === null || value === undefined ? emptySequence() : isIterable(value) ? value.toSeq() : seqFromValue(value);
  }

  Seq.of = function ()
  /*...values*/
  {
    return Seq(arguments);
  };

  Seq.prototype.toSeq = function () {
    return this;
  };

  Seq.prototype.toString = function () {
    return this.__toString('Seq {', '}');
  };

  Seq.prototype.cacheResult = function () {
    if (!this._cache && this.__iterateUncached) {
      this._cache = this.entrySeq().toArray();
      this.size = this._cache.length;
    }

    return this;
  }; // abstract __iterateUncached(fn, reverse)


  Seq.prototype.__iterate = function (fn, reverse) {
    return seqIterate(this, fn, reverse, true);
  }; // abstract __iteratorUncached(type, reverse)


  Seq.prototype.__iterator = function (type, reverse) {
    return seqIterator(this, type, reverse, true);
  };

  createClass(KeyedSeq, Seq);

  function KeyedSeq(value) {
    return value === null || value === undefined ? emptySequence().toKeyedSeq() : isIterable(value) ? isKeyed(value) ? value.toSeq() : value.fromEntrySeq() : keyedSeqFromValue(value);
  }

  KeyedSeq.prototype.toKeyedSeq = function () {
    return this;
  };

  createClass(IndexedSeq, Seq);

  function IndexedSeq(value) {
    return value === null || value === undefined ? emptySequence() : !isIterable(value) ? indexedSeqFromValue(value) : isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
  }

  IndexedSeq.of = function ()
  /*...values*/
  {
    return IndexedSeq(arguments);
  };

  IndexedSeq.prototype.toIndexedSeq = function () {
    return this;
  };

  IndexedSeq.prototype.toString = function () {
    return this.__toString('Seq [', ']');
  };

  IndexedSeq.prototype.__iterate = function (fn, reverse) {
    return seqIterate(this, fn, reverse, false);
  };

  IndexedSeq.prototype.__iterator = function (type, reverse) {
    return seqIterator(this, type, reverse, false);
  };

  createClass(SetSeq, Seq);

  function SetSeq(value) {
    return (value === null || value === undefined ? emptySequence() : !isIterable(value) ? indexedSeqFromValue(value) : isKeyed(value) ? value.entrySeq() : value).toSetSeq();
  }

  SetSeq.of = function ()
  /*...values*/
  {
    return SetSeq(arguments);
  };

  SetSeq.prototype.toSetSeq = function () {
    return this;
  };

  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;
  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';
  Seq.prototype[IS_SEQ_SENTINEL] = true;
  createClass(ArraySeq, IndexedSeq);

  function ArraySeq(array) {
    this._array = array;
    this.size = array.length;
  }

  ArraySeq.prototype.get = function (index, notSetValue) {
    return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
  };

  ArraySeq.prototype.__iterate = function (fn, reverse) {
    var array = this._array;
    var maxIndex = array.length - 1;

    for (var ii = 0; ii <= maxIndex; ii++) {
      if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
        return ii + 1;
      }
    }

    return ii;
  };

  ArraySeq.prototype.__iterator = function (type, reverse) {
    var array = this._array;
    var maxIndex = array.length - 1;
    var ii = 0;
    return new Iterator(function () {
      return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++]);
    });
  };

  createClass(ObjectSeq, KeyedSeq);

  function ObjectSeq(object) {
    var keys = Object.keys(object);
    this._object = object;
    this._keys = keys;
    this.size = keys.length;
  }

  ObjectSeq.prototype.get = function (key, notSetValue) {
    if (notSetValue !== undefined && !this.has(key)) {
      return notSetValue;
    }

    return this._object[key];
  };

  ObjectSeq.prototype.has = function (key) {
    return this._object.hasOwnProperty(key);
  };

  ObjectSeq.prototype.__iterate = function (fn, reverse) {
    var object = this._object;
    var keys = this._keys;
    var maxIndex = keys.length - 1;

    for (var ii = 0; ii <= maxIndex; ii++) {
      var key = keys[reverse ? maxIndex - ii : ii];

      if (fn(object[key], key, this) === false) {
        return ii + 1;
      }
    }

    return ii;
  };

  ObjectSeq.prototype.__iterator = function (type, reverse) {
    var object = this._object;
    var keys = this._keys;
    var maxIndex = keys.length - 1;
    var ii = 0;
    return new Iterator(function () {
      var key = keys[reverse ? maxIndex - ii : ii];
      return ii++ > maxIndex ? iteratorDone() : iteratorValue(type, key, object[key]);
    });
  };

  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;
  createClass(IterableSeq, IndexedSeq);

  function IterableSeq(iterable) {
    this._iterable = iterable;
    this.size = iterable.length || iterable.size;
  }

  IterableSeq.prototype.__iterateUncached = function (fn, reverse) {
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }

    var iterable = this._iterable;
    var iterator = getIterator(iterable);
    var iterations = 0;

    if (isIterator(iterator)) {
      var step;

      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
    }

    return iterations;
  };

  IterableSeq.prototype.__iteratorUncached = function (type, reverse) {
    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }

    var iterable = this._iterable;
    var iterator = getIterator(iterable);

    if (!isIterator(iterator)) {
      return new Iterator(iteratorDone);
    }

    var iterations = 0;
    return new Iterator(function () {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, iterations++, step.value);
    });
  };

  createClass(IteratorSeq, IndexedSeq);

  function IteratorSeq(iterator) {
    this._iterator = iterator;
    this._iteratorCache = [];
  }

  IteratorSeq.prototype.__iterateUncached = function (fn, reverse) {
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }

    var iterator = this._iterator;
    var cache = this._iteratorCache;
    var iterations = 0;

    while (iterations < cache.length) {
      if (fn(cache[iterations], iterations++, this) === false) {
        return iterations;
      }
    }

    var step;

    while (!(step = iterator.next()).done) {
      var val = step.value;
      cache[iterations] = val;

      if (fn(val, iterations++, this) === false) {
        break;
      }
    }

    return iterations;
  };

  IteratorSeq.prototype.__iteratorUncached = function (type, reverse) {
    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }

    var iterator = this._iterator;
    var cache = this._iteratorCache;
    var iterations = 0;
    return new Iterator(function () {
      if (iterations >= cache.length) {
        var step = iterator.next();

        if (step.done) {
          return step;
        }

        cache[iterations] = step.value;
      }

      return iteratorValue(type, iterations, cache[iterations++]);
    });
  }; // # pragma Helper functions


  function isSeq(maybeSeq) {
    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
  }

  var EMPTY_SEQ;

  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }

  function keyedSeqFromValue(value) {
    var seq = Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() : isIterator(value) ? new IteratorSeq(value).fromEntrySeq() : hasIterator(value) ? new IterableSeq(value).fromEntrySeq() : typeof value === 'object' ? new ObjectSeq(value) : undefined;

    if (!seq) {
      throw new TypeError('Expected Array or iterable object of [k, v] entries, ' + 'or keyed object: ' + value);
    }

    return seq;
  }

  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);

    if (!seq) {
      throw new TypeError('Expected Array or iterable object of values: ' + value);
    }

    return seq;
  }

  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value) || typeof value === 'object' && new ObjectSeq(value);

    if (!seq) {
      throw new TypeError('Expected Array or iterable object of values, or keyed object: ' + value);
    }

    return seq;
  }

  function maybeIndexedSeqFromValue(value) {
    return isArrayLike(value) ? new ArraySeq(value) : isIterator(value) ? new IteratorSeq(value) : hasIterator(value) ? new IterableSeq(value) : undefined;
  }

  function seqIterate(seq, fn, reverse, useKeys) {
    var cache = seq._cache;

    if (cache) {
      var maxIndex = cache.length - 1;

      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];

        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
          return ii + 1;
        }
      }

      return ii;
    }

    return seq.__iterateUncached(fn, reverse);
  }

  function seqIterator(seq, type, reverse, useKeys) {
    var cache = seq._cache;

    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new Iterator(function () {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ? iteratorDone() : iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      });
    }

    return seq.__iteratorUncached(type, reverse);
  }

  function fromJS(json, converter) {
    return converter ? fromJSWith(converter, json, '', {
      '': json
    }) : fromJSDefault(json);
  }

  function fromJSWith(converter, json, key, parentJSON) {
    if (Array.isArray(json)) {
      return converter.call(parentJSON, key, IndexedSeq(json).map(function (v, k) {
        return fromJSWith(converter, v, k, json);
      }));
    }

    if (isPlainObj(json)) {
      return converter.call(parentJSON, key, KeyedSeq(json).map(function (v, k) {
        return fromJSWith(converter, v, k, json);
      }));
    }

    return json;
  }

  function fromJSDefault(json) {
    if (Array.isArray(json)) {
      return IndexedSeq(json).map(fromJSDefault).toList();
    }

    if (isPlainObj(json)) {
      return KeyedSeq(json).map(fromJSDefault).toMap();
    }

    return json;
  }

  function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
  }
  /**
   * An extension of the "same-value" algorithm as [described for use by ES6 Map
   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
   *
   * NaN is considered the same as NaN, however -0 and 0 are considered the same
   * value, which is different from the algorithm described by
   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   *
   * This is extended further to allow Objects to describe the values they
   * represent, by way of `valueOf` or `equals` (and `hashCode`).
   *
   * Note: because of this extension, the key equality of Immutable.Map and the
   * value equality of Immutable.Set will differ from ES6 Map and Set.
   *
   * ### Defining custom values
   *
   * The easiest way to describe the value an object represents is by implementing
   * `valueOf`. For example, `Date` represents a value by returning a unix
   * timestamp for `valueOf`:
   *
   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
   *     var date2 = new Date(1234567890000);
   *     date1.valueOf(); // 1234567890000
   *     assert( date1 !== date2 );
   *     assert( Immutable.is( date1, date2 ) );
   *
   * Note: overriding `valueOf` may have other implications if you use this object
   * where JavaScript expects a primitive, such as implicit string coercion.
   *
   * For more complex types, especially collections, implementing `valueOf` may
   * not be performant. An alternative is to implement `equals` and `hashCode`.
   *
   * `equals` takes another object, presumably of similar type, and returns true
   * if the it is equal. Equality is symmetrical, so the same result should be
   * returned if this and the argument are flipped.
   *
   *     assert( a.equals(b) === b.equals(a) );
   *
   * `hashCode` returns a 32bit integer number representing the object which will
   * be used to determine how to store the value object in a Map or Set. You must
   * provide both or neither methods, one must not exist without the other.
   *
   * Also, an important relationship between these methods must be upheld: if two
   * values are equal, they *must* return the same hashCode. If the values are not
   * equal, they might have the same hashCode; this is called a hash collision,
   * and while undesirable for performance reasons, it is acceptable.
   *
   *     if (a.equals(b)) {
   *       assert( a.hashCode() === b.hashCode() );
   *     }
   *
   * All Immutable collections implement `equals` and `hashCode`.
   *
   */


  function is(valueA, valueB) {
    if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
      return true;
    }

    if (!valueA || !valueB) {
      return false;
    }

    if (typeof valueA.valueOf === 'function' && typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();

      if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
        return true;
      }

      if (!valueA || !valueB) {
        return false;
      }
    }

    if (typeof valueA.equals === 'function' && typeof valueB.equals === 'function' && valueA.equals(valueB)) {
      return true;
    }

    return false;
  }

  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (!isIterable(b) || a.size !== undefined && b.size !== undefined && a.size !== b.size || a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash || isKeyed(a) !== isKeyed(b) || isIndexed(a) !== isIndexed(b) || isOrdered(a) !== isOrdered(b)) {
      return false;
    }

    if (a.size === 0 && b.size === 0) {
      return true;
    }

    var notAssociative = !isAssociative(a);

    if (isOrdered(a)) {
      var entries = a.entries();
      return b.every(function (v, k) {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done;
    }

    var flipped = false;

    if (a.size === undefined) {
      if (b.size === undefined) {
        if (typeof a.cacheResult === 'function') {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }

    var allEqual = true;

    var bSize = b.__iterate(function (v, k) {
      if (notAssociative ? !a.has(v) : flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
        allEqual = false;
        return false;
      }
    });

    return allEqual && a.size === bSize;
  }

  createClass(Repeat, IndexedSeq);

  function Repeat(value, times) {
    if (!(this instanceof Repeat)) {
      return new Repeat(value, times);
    }

    this._value = value;
    this.size = times === undefined ? Infinity : Math.max(0, times);

    if (this.size === 0) {
      if (EMPTY_REPEAT) {
        return EMPTY_REPEAT;
      }

      EMPTY_REPEAT = this;
    }
  }

  Repeat.prototype.toString = function () {
    if (this.size === 0) {
      return 'Repeat []';
    }

    return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
  };

  Repeat.prototype.get = function (index, notSetValue) {
    return this.has(index) ? this._value : notSetValue;
  };

  Repeat.prototype.includes = function (searchValue) {
    return is(this._value, searchValue);
  };

  Repeat.prototype.slice = function (begin, end) {
    var size = this.size;
    return wholeSlice(begin, end, size) ? this : new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
  };

  Repeat.prototype.reverse = function () {
    return this;
  };

  Repeat.prototype.indexOf = function (searchValue) {
    if (is(this._value, searchValue)) {
      return 0;
    }

    return -1;
  };

  Repeat.prototype.lastIndexOf = function (searchValue) {
    if (is(this._value, searchValue)) {
      return this.size;
    }

    return -1;
  };

  Repeat.prototype.__iterate = function (fn, reverse) {
    for (var ii = 0; ii < this.size; ii++) {
      if (fn(this._value, ii, this) === false) {
        return ii + 1;
      }
    }

    return ii;
  };

  Repeat.prototype.__iterator = function (type, reverse) {
    var this$0 = this;
    var ii = 0;
    return new Iterator(function () {
      return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone();
    });
  };

  Repeat.prototype.equals = function (other) {
    return other instanceof Repeat ? is(this._value, other._value) : deepEqual(other);
  };

  var EMPTY_REPEAT;

  function invariant(condition, error) {
    if (!condition) throw new Error(error);
  }

  createClass(Range, IndexedSeq);

  function Range(start, end, step) {
    if (!(this instanceof Range)) {
      return new Range(start, end, step);
    }

    invariant(step !== 0, 'Cannot step a Range by 0');
    start = start || 0;

    if (end === undefined) {
      end = Infinity;
    }

    step = step === undefined ? 1 : Math.abs(step);

    if (end < start) {
      step = -step;
    }

    this._start = start;
    this._end = end;
    this._step = step;
    this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);

    if (this.size === 0) {
      if (EMPTY_RANGE) {
        return EMPTY_RANGE;
      }

      EMPTY_RANGE = this;
    }
  }

  Range.prototype.toString = function () {
    if (this.size === 0) {
      return 'Range []';
    }

    return 'Range [ ' + this._start + '...' + this._end + (this._step !== 1 ? ' by ' + this._step : '') + ' ]';
  };

  Range.prototype.get = function (index, notSetValue) {
    return this.has(index) ? this._start + wrapIndex(this, index) * this._step : notSetValue;
  };

  Range.prototype.includes = function (searchValue) {
    var possibleIndex = (searchValue - this._start) / this._step;
    return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
  };

  Range.prototype.slice = function (begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }

    begin = resolveBegin(begin, this.size);
    end = resolveEnd(end, this.size);

    if (end <= begin) {
      return new Range(0, 0);
    }

    return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
  };

  Range.prototype.indexOf = function (searchValue) {
    var offsetValue = searchValue - this._start;

    if (offsetValue % this._step === 0) {
      var index = offsetValue / this._step;

      if (index >= 0 && index < this.size) {
        return index;
      }
    }

    return -1;
  };

  Range.prototype.lastIndexOf = function (searchValue) {
    return this.indexOf(searchValue);
  };

  Range.prototype.__iterate = function (fn, reverse) {
    var maxIndex = this.size - 1;
    var step = this._step;
    var value = reverse ? this._start + maxIndex * step : this._start;

    for (var ii = 0; ii <= maxIndex; ii++) {
      if (fn(value, ii, this) === false) {
        return ii + 1;
      }

      value += reverse ? -step : step;
    }

    return ii;
  };

  Range.prototype.__iterator = function (type, reverse) {
    var maxIndex = this.size - 1;
    var step = this._step;
    var value = reverse ? this._start + maxIndex * step : this._start;
    var ii = 0;
    return new Iterator(function () {
      var v = value;
      value += reverse ? -step : step;
      return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
    });
  };

  Range.prototype.equals = function (other) {
    return other instanceof Range ? this._start === other._start && this._end === other._end && this._step === other._step : deepEqual(this, other);
  };

  var EMPTY_RANGE;
  createClass(Collection, Iterable);

  function Collection() {
    throw TypeError('Abstract');
  }

  createClass(KeyedCollection, Collection);

  function KeyedCollection() {}

  createClass(IndexedCollection, Collection);

  function IndexedCollection() {}

  createClass(SetCollection, Collection);

  function SetCollection() {}

  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;
  var imul = typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ? Math.imul : function imul(a, b) {
    a = a | 0; // int

    b = b | 0; // int

    var c = a & 0xffff;
    var d = b & 0xffff; // Shift by 0 fixes the sign on the high part.

    return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0; // int
  }; // v8 has an optimization for storing 31-bit signed numbers.
  // Values which have either 00 or 11 as the high order bits qualify.
  // This function drops the highest order bit in a signed number, maintaining
  // the sign bit.

  function smi(i32) {
    return i32 >>> 1 & 0x40000000 | i32 & 0xBFFFFFFF;
  }

  function hash(o) {
    if (o === false || o === null || o === undefined) {
      return 0;
    }

    if (typeof o.valueOf === 'function') {
      o = o.valueOf();

      if (o === false || o === null || o === undefined) {
        return 0;
      }
    }

    if (o === true) {
      return 1;
    }

    var type = typeof o;

    if (type === 'number') {
      if (o !== o || o === Infinity) {
        return 0;
      }

      var h = o | 0;

      if (h !== o) {
        h ^= o * 0xFFFFFFFF;
      }

      while (o > 0xFFFFFFFF) {
        o /= 0xFFFFFFFF;
        h ^= o;
      }

      return smi(h);
    }

    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }

    if (typeof o.hashCode === 'function') {
      return o.hashCode();
    }

    if (type === 'object') {
      return hashJSObj(o);
    }

    if (typeof o.toString === 'function') {
      return hashString(o.toString());
    }

    throw new Error('Value type ' + type + ' cannot be hashed.');
  }

  function cachedHashString(string) {
    var hash = stringHashCache[string];

    if (hash === undefined) {
      hash = hashString(string);

      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }

      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }

    return hash;
  } // http://jsperf.com/hashing-strings


  function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hash = 0;

    for (var ii = 0; ii < string.length; ii++) {
      hash = 31 * hash + string.charCodeAt(ii) | 0;
    }

    return smi(hash);
  }

  function hashJSObj(obj) {
    var hash;

    if (usingWeakMap) {
      hash = weakMap.get(obj);

      if (hash !== undefined) {
        return hash;
      }
    }

    hash = obj[UID_HASH_KEY];

    if (hash !== undefined) {
      return hash;
    }

    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];

      if (hash !== undefined) {
        return hash;
      }

      hash = getIENodeHash(obj);

      if (hash !== undefined) {
        return hash;
      }
    }

    hash = ++objHashUID;

    if (objHashUID & 0x40000000) {
      objHashUID = 0;
    }

    if (usingWeakMap) {
      weakMap.set(obj, hash);
    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
      throw new Error('Non-extensible objects are not allowed as keys.');
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        'enumerable': false,
        'configurable': false,
        'writable': false,
        'value': hash
      });
    } else if (obj.propertyIsEnumerable !== undefined && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      // Since we can't define a non-enumerable property on the object
      // we'll hijack one of the less-used non-enumerable properties to
      // save our hash on it. Since this is a function it will not show up in
      // `JSON.stringify` which is what we want.
      obj.propertyIsEnumerable = function () {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
      };

      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
    } else if (obj.nodeType !== undefined) {
      // At this point we couldn't get the IE `uniqueID` to use as a hash
      // and we couldn't use a non-enumerable property to exploit the
      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
      // itself.
      obj[UID_HASH_KEY] = hash;
    } else {
      throw new Error('Unable to set a non-enumerable property on object.');
    }

    return hash;
  } // Get references to ES5 object methods.


  var isExtensible = Object.isExtensible; // True if Object.defineProperty works as expected. IE8 fails this test.

  var canDefineProperty = function () {
    try {
      Object.defineProperty({}, '@', {});
      return true;
    } catch (e) {
      return false;
    }
  }(); // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
  // and avoid memory leaks from the IE cloneNode bug.


  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1:
          // Element
          return node.uniqueID;

        case 9:
          // Document
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  } // If possible, use a WeakMap.


  var usingWeakMap = typeof WeakMap === 'function';
  var weakMap;

  if (usingWeakMap) {
    weakMap = new WeakMap();
  }

  var objHashUID = 0;
  var UID_HASH_KEY = '__immutablehash__';

  if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }

  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};

  function assertNotInfinite(size) {
    invariant(size !== Infinity, 'Cannot perform this action with an infinite size.');
  }

  createClass(Map, KeyedCollection); // @pragma Construction

  function Map(value) {
    return value === null || value === undefined ? emptyMap() : isMap(value) && !isOrdered(value) ? value : emptyMap().withMutations(function (map) {
      var iter = KeyedIterable(value);
      assertNotInfinite(iter.size);
      iter.forEach(function (v, k) {
        return map.set(k, v);
      });
    });
  }

  Map.of = function () {
    var keyValues = SLICE$0.call(arguments, 0);
    return emptyMap().withMutations(function (map) {
      for (var i = 0; i < keyValues.length; i += 2) {
        if (i + 1 >= keyValues.length) {
          throw new Error('Missing value for key: ' + keyValues[i]);
        }

        map.set(keyValues[i], keyValues[i + 1]);
      }
    });
  };

  Map.prototype.toString = function () {
    return this.__toString('Map {', '}');
  }; // @pragma Access


  Map.prototype.get = function (k, notSetValue) {
    return this._root ? this._root.get(0, undefined, k, notSetValue) : notSetValue;
  }; // @pragma Modification


  Map.prototype.set = function (k, v) {
    return updateMap(this, k, v);
  };

  Map.prototype.setIn = function (keyPath, v) {
    return this.updateIn(keyPath, NOT_SET, function () {
      return v;
    });
  };

  Map.prototype.remove = function (k) {
    return updateMap(this, k, NOT_SET);
  };

  Map.prototype.deleteIn = function (keyPath) {
    return this.updateIn(keyPath, function () {
      return NOT_SET;
    });
  };

  Map.prototype.update = function (k, notSetValue, updater) {
    return arguments.length === 1 ? k(this) : this.updateIn([k], notSetValue, updater);
  };

  Map.prototype.updateIn = function (keyPath, notSetValue, updater) {
    if (!updater) {
      updater = notSetValue;
      notSetValue = undefined;
    }

    var updatedValue = updateInDeepMap(this, forceIterator(keyPath), notSetValue, updater);
    return updatedValue === NOT_SET ? undefined : updatedValue;
  };

  Map.prototype.clear = function () {
    if (this.size === 0) {
      return this;
    }

    if (this.__ownerID) {
      this.size = 0;
      this._root = null;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }

    return emptyMap();
  }; // @pragma Composition


  Map.prototype.merge = function ()
  /*...iters*/
  {
    return mergeIntoMapWith(this, undefined, arguments);
  };

  Map.prototype.mergeWith = function (merger) {
    var iters = SLICE$0.call(arguments, 1);
    return mergeIntoMapWith(this, merger, iters);
  };

  Map.prototype.mergeIn = function (keyPath) {
    var iters = SLICE$0.call(arguments, 1);
    return this.updateIn(keyPath, emptyMap(), function (m) {
      return typeof m.merge === 'function' ? m.merge.apply(m, iters) : iters[iters.length - 1];
    });
  };

  Map.prototype.mergeDeep = function ()
  /*...iters*/
  {
    return mergeIntoMapWith(this, deepMerger, arguments);
  };

  Map.prototype.mergeDeepWith = function (merger) {
    var iters = SLICE$0.call(arguments, 1);
    return mergeIntoMapWith(this, deepMergerWith(merger), iters);
  };

  Map.prototype.mergeDeepIn = function (keyPath) {
    var iters = SLICE$0.call(arguments, 1);
    return this.updateIn(keyPath, emptyMap(), function (m) {
      return typeof m.mergeDeep === 'function' ? m.mergeDeep.apply(m, iters) : iters[iters.length - 1];
    });
  };

  Map.prototype.sort = function (comparator) {
    // Late binding
    return OrderedMap(sortFactory(this, comparator));
  };

  Map.prototype.sortBy = function (mapper, comparator) {
    // Late binding
    return OrderedMap(sortFactory(this, comparator, mapper));
  }; // @pragma Mutability


  Map.prototype.withMutations = function (fn) {
    var mutable = this.asMutable();
    fn(mutable);
    return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
  };

  Map.prototype.asMutable = function () {
    return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
  };

  Map.prototype.asImmutable = function () {
    return this.__ensureOwner();
  };

  Map.prototype.wasAltered = function () {
    return this.__altered;
  };

  Map.prototype.__iterator = function (type, reverse) {
    return new MapIterator(this, type, reverse);
  };

  Map.prototype.__iterate = function (fn, reverse) {
    var this$0 = this;
    var iterations = 0;
    this._root && this._root.iterate(function (entry) {
      iterations++;
      return fn(entry[1], entry[0], this$0);
    }, reverse);
    return iterations;
  };

  Map.prototype.__ensureOwner = function (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }

    if (!ownerID) {
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }

    return makeMap(this.size, this._root, ownerID, this.__hash);
  };

  function isMap(maybeMap) {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
  }

  Map.isMap = isMap;
  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
  var MapPrototype = Map.prototype;
  MapPrototype[IS_MAP_SENTINEL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeIn = MapPrototype.deleteIn; // #pragma Trie Nodes

  function ArrayMapNode(ownerID, entries) {
    this.ownerID = ownerID;
    this.entries = entries;
  }

  ArrayMapNode.prototype.get = function (shift, keyHash, key, notSetValue) {
    var entries = this.entries;

    for (var ii = 0, len = entries.length; ii < len; ii++) {
      if (is(key, entries[ii][0])) {
        return entries[ii][1];
      }
    }

    return notSetValue;
  };

  ArrayMapNode.prototype.update = function (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    var removed = value === NOT_SET;
    var entries = this.entries;
    var idx = 0;

    for (var len = entries.length; idx < len; idx++) {
      if (is(key, entries[idx][0])) {
        break;
      }
    }

    var exists = idx < len;

    if (exists ? entries[idx][1] === value : removed) {
      return this;
    }

    SetRef(didAlter);
    (removed || !exists) && SetRef(didChangeSize);

    if (removed && entries.length === 1) {
      return; // undefined
    }

    if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
      return createNodes(ownerID, entries, key, value);
    }

    var isEditable = ownerID && ownerID === this.ownerID;
    var newEntries = isEditable ? entries : arrCopy(entries);

    if (exists) {
      if (removed) {
        idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
      } else {
        newEntries[idx] = [key, value];
      }
    } else {
      newEntries.push([key, value]);
    }

    if (isEditable) {
      this.entries = newEntries;
      return this;
    }

    return new ArrayMapNode(ownerID, newEntries);
  };

  function BitmapIndexedNode(ownerID, bitmap, nodes) {
    this.ownerID = ownerID;
    this.bitmap = bitmap;
    this.nodes = nodes;
  }

  BitmapIndexedNode.prototype.get = function (shift, keyHash, key, notSetValue) {
    if (keyHash === undefined) {
      keyHash = hash(key);
    }

    var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
    var bitmap = this.bitmap;
    return (bitmap & bit) === 0 ? notSetValue : this.nodes[popCount(bitmap & bit - 1)].get(shift + SHIFT, keyHash, key, notSetValue);
  };

  BitmapIndexedNode.prototype.update = function (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === undefined) {
      keyHash = hash(key);
    }

    var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var bit = 1 << keyHashFrag;
    var bitmap = this.bitmap;
    var exists = (bitmap & bit) !== 0;

    if (!exists && value === NOT_SET) {
      return this;
    }

    var idx = popCount(bitmap & bit - 1);
    var nodes = this.nodes;
    var node = exists ? nodes[idx] : undefined;
    var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

    if (newNode === node) {
      return this;
    }

    if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
      return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
    }

    if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
      return nodes[idx ^ 1];
    }

    if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
      return newNode;
    }

    var isEditable = ownerID && ownerID === this.ownerID;
    var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
    var newNodes = exists ? newNode ? setIn(nodes, idx, newNode, isEditable) : spliceOut(nodes, idx, isEditable) : spliceIn(nodes, idx, newNode, isEditable);

    if (isEditable) {
      this.bitmap = newBitmap;
      this.nodes = newNodes;
      return this;
    }

    return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
  };

  function HashArrayMapNode(ownerID, count, nodes) {
    this.ownerID = ownerID;
    this.count = count;
    this.nodes = nodes;
  }

  HashArrayMapNode.prototype.get = function (shift, keyHash, key, notSetValue) {
    if (keyHash === undefined) {
      keyHash = hash(key);
    }

    var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var node = this.nodes[idx];
    return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
  };

  HashArrayMapNode.prototype.update = function (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === undefined) {
      keyHash = hash(key);
    }

    var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var removed = value === NOT_SET;
    var nodes = this.nodes;
    var node = nodes[idx];

    if (removed && !node) {
      return this;
    }

    var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

    if (newNode === node) {
      return this;
    }

    var newCount = this.count;

    if (!node) {
      newCount++;
    } else if (!newNode) {
      newCount--;

      if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
        return packNodes(ownerID, nodes, newCount, idx);
      }
    }

    var isEditable = ownerID && ownerID === this.ownerID;
    var newNodes = setIn(nodes, idx, newNode, isEditable);

    if (isEditable) {
      this.count = newCount;
      this.nodes = newNodes;
      return this;
    }

    return new HashArrayMapNode(ownerID, newCount, newNodes);
  };

  function HashCollisionNode(ownerID, keyHash, entries) {
    this.ownerID = ownerID;
    this.keyHash = keyHash;
    this.entries = entries;
  }

  HashCollisionNode.prototype.get = function (shift, keyHash, key, notSetValue) {
    var entries = this.entries;

    for (var ii = 0, len = entries.length; ii < len; ii++) {
      if (is(key, entries[ii][0])) {
        return entries[ii][1];
      }
    }

    return notSetValue;
  };

  HashCollisionNode.prototype.update = function (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === undefined) {
      keyHash = hash(key);
    }

    var removed = value === NOT_SET;

    if (keyHash !== this.keyHash) {
      if (removed) {
        return this;
      }

      SetRef(didAlter);
      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
    }

    var entries = this.entries;
    var idx = 0;

    for (var len = entries.length; idx < len; idx++) {
      if (is(key, entries[idx][0])) {
        break;
      }
    }

    var exists = idx < len;

    if (exists ? entries[idx][1] === value : removed) {
      return this;
    }

    SetRef(didAlter);
    (removed || !exists) && SetRef(didChangeSize);

    if (removed && len === 2) {
      return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
    }

    var isEditable = ownerID && ownerID === this.ownerID;
    var newEntries = isEditable ? entries : arrCopy(entries);

    if (exists) {
      if (removed) {
        idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
      } else {
        newEntries[idx] = [key, value];
      }
    } else {
      newEntries.push([key, value]);
    }

    if (isEditable) {
      this.entries = newEntries;
      return this;
    }

    return new HashCollisionNode(ownerID, this.keyHash, newEntries);
  };

  function ValueNode(ownerID, keyHash, entry) {
    this.ownerID = ownerID;
    this.keyHash = keyHash;
    this.entry = entry;
  }

  ValueNode.prototype.get = function (shift, keyHash, key, notSetValue) {
    return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
  };

  ValueNode.prototype.update = function (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    var removed = value === NOT_SET;
    var keyMatch = is(key, this.entry[0]);

    if (keyMatch ? value === this.entry[1] : removed) {
      return this;
    }

    SetRef(didAlter);

    if (removed) {
      SetRef(didChangeSize);
      return; // undefined
    }

    if (keyMatch) {
      if (ownerID && ownerID === this.ownerID) {
        this.entry[1] = value;
        return this;
      }

      return new ValueNode(ownerID, this.keyHash, [key, value]);
    }

    SetRef(didChangeSize);
    return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
  }; // #pragma Iterators


  ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;

    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  };

  BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;

    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];

      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  };

  ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
  };

  createClass(MapIterator, Iterator);

  function MapIterator(map, type, reverse) {
    this._type = type;
    this._reverse = reverse;
    this._stack = map._root && mapIteratorFrame(map._root);
  }

  MapIterator.prototype.next = function () {
    var type = this._type;
    var stack = this._stack;

    while (stack) {
      var node = stack.node;
      var index = stack.index++;
      var maxIndex;

      if (node.entry) {
        if (index === 0) {
          return mapIteratorValue(type, node.entry);
        }
      } else if (node.entries) {
        maxIndex = node.entries.length - 1;

        if (index <= maxIndex) {
          return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
        }
      } else {
        maxIndex = node.nodes.length - 1;

        if (index <= maxIndex) {
          var subNode = node.nodes[this._reverse ? maxIndex - index : index];

          if (subNode) {
            if (subNode.entry) {
              return mapIteratorValue(type, subNode.entry);
            }

            stack = this._stack = mapIteratorFrame(subNode, stack);
          }

          continue;
        }
      }

      stack = this._stack = this._stack.__prev;
    }

    return iteratorDone();
  };

  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }

  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }

  function makeMap(size, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_MAP;

  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }

  function updateMap(map, k, v) {
    var newRoot;
    var newSize;

    if (!map._root) {
      if (v === NOT_SET) {
        return map;
      }

      newSize = 1;
      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef(CHANGE_LENGTH);
      var didAlter = MakeRef(DID_ALTER);
      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);

      if (!didAlter.value) {
        return map;
      }

      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }

    if (map.__ownerID) {
      map.size = newSize;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }

    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }

  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }

      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }

    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
  }

  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }

  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }

    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var newNode;
    var nodes = idx1 === idx2 ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] : (newNode = new ValueNode(ownerID, keyHash, entry), idx1 < idx2 ? [node, newNode] : [newNode, node]);
    return new BitmapIndexedNode(ownerID, 1 << idx1 | 1 << idx2, nodes);
  }

  function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }

    var node = new ValueNode(ownerID, hash(key), [key, value]);

    for (var ii = 0; ii < entries.length; ii++) {
      var entry = entries[ii];
      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }

    return node;
  }

  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);

    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];

      if (node !== undefined && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }

    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }

  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);

    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }

    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
  }

  function mergeIntoMapWith(map, merger, iterables) {
    var iters = [];

    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = KeyedIterable(value);

      if (!isIterable(value)) {
        iter = iter.map(function (v) {
          return fromJS(v);
        });
      }

      iters.push(iter);
    }

    return mergeIntoCollectionWith(map, merger, iters);
  }

  function deepMerger(existing, value, key) {
    return existing && existing.mergeDeep && isIterable(value) ? existing.mergeDeep(value) : is(existing, value) ? existing : value;
  }

  function deepMergerWith(merger) {
    return function (existing, value, key) {
      if (existing && existing.mergeDeepWith && isIterable(value)) {
        return existing.mergeDeepWith(merger, value);
      }

      var nextValue = merger(existing, value, key);
      return is(existing, nextValue) ? existing : nextValue;
    };
  }

  function mergeIntoCollectionWith(collection, merger, iters) {
    iters = iters.filter(function (x) {
      return x.size !== 0;
    });

    if (iters.length === 0) {
      return collection;
    }

    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }

    return collection.withMutations(function (collection) {
      var mergeIntoMap = merger ? function (value, key) {
        collection.update(key, NOT_SET, function (existing) {
          return existing === NOT_SET ? value : merger(existing, value, key);
        });
      } : function (value, key) {
        collection.set(key, value);
      };

      for (var ii = 0; ii < iters.length; ii++) {
        iters[ii].forEach(mergeIntoMap);
      }
    });
  }

  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
    var isNotSet = existing === NOT_SET;
    var step = keyPathIter.next();

    if (step.done) {
      var existingValue = isNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }

    invariant(isNotSet || existing && existing.set, 'invalid keyPath');
    var key = step.value;
    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
    var nextUpdated = updateInDeepMap(nextExisting, keyPathIter, notSetValue, updater);
    return nextUpdated === nextExisting ? existing : nextUpdated === NOT_SET ? existing.remove(key) : (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
  }

  function popCount(x) {
    x = x - (x >> 1 & 0x55555555);
    x = (x & 0x33333333) + (x >> 2 & 0x33333333);
    x = x + (x >> 4) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }

  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }

  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;

    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }

    var newArray = new Array(newLen);
    var after = 0;

    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }

    return newArray;
  }

  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;

    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }

    var newArray = new Array(newLen);
    var after = 0;

    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }

      newArray[ii] = array[ii + after];
    }

    return newArray;
  }

  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
  createClass(List, IndexedCollection); // @pragma Construction

  function List(value) {
    var empty = emptyList();

    if (value === null || value === undefined) {
      return empty;
    }

    if (isList(value)) {
      return value;
    }

    var iter = IndexedIterable(value);
    var size = iter.size;

    if (size === 0) {
      return empty;
    }

    assertNotInfinite(size);

    if (size > 0 && size < SIZE) {
      return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
    }

    return empty.withMutations(function (list) {
      list.setSize(size);
      iter.forEach(function (v, i) {
        return list.set(i, v);
      });
    });
  }

  List.of = function ()
  /*...values*/
  {
    return this(arguments);
  };

  List.prototype.toString = function () {
    return this.__toString('List [', ']');
  }; // @pragma Access


  List.prototype.get = function (index, notSetValue) {
    index = wrapIndex(this, index);

    if (index >= 0 && index < this.size) {
      index += this._origin;
      var node = listNodeFor(this, index);
      return node && node.array[index & MASK];
    }

    return notSetValue;
  }; // @pragma Modification


  List.prototype.set = function (index, value) {
    return updateList(this, index, value);
  };

  List.prototype.remove = function (index) {
    return !this.has(index) ? this : index === 0 ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1);
  };

  List.prototype.insert = function (index, value) {
    return this.splice(index, 0, value);
  };

  List.prototype.clear = function () {
    if (this.size === 0) {
      return this;
    }

    if (this.__ownerID) {
      this.size = this._origin = this._capacity = 0;
      this._level = SHIFT;
      this._root = this._tail = null;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }

    return emptyList();
  };

  List.prototype.push = function ()
  /*...values*/
  {
    var values = arguments;
    var oldSize = this.size;
    return this.withMutations(function (list) {
      setListBounds(list, 0, oldSize + values.length);

      for (var ii = 0; ii < values.length; ii++) {
        list.set(oldSize + ii, values[ii]);
      }
    });
  };

  List.prototype.pop = function () {
    return setListBounds(this, 0, -1);
  };

  List.prototype.unshift = function ()
  /*...values*/
  {
    var values = arguments;
    return this.withMutations(function (list) {
      setListBounds(list, -values.length);

      for (var ii = 0; ii < values.length; ii++) {
        list.set(ii, values[ii]);
      }
    });
  };

  List.prototype.shift = function () {
    return setListBounds(this, 1);
  }; // @pragma Composition


  List.prototype.merge = function ()
  /*...iters*/
  {
    return mergeIntoListWith(this, undefined, arguments);
  };

  List.prototype.mergeWith = function (merger) {
    var iters = SLICE$0.call(arguments, 1);
    return mergeIntoListWith(this, merger, iters);
  };

  List.prototype.mergeDeep = function ()
  /*...iters*/
  {
    return mergeIntoListWith(this, deepMerger, arguments);
  };

  List.prototype.mergeDeepWith = function (merger) {
    var iters = SLICE$0.call(arguments, 1);
    return mergeIntoListWith(this, deepMergerWith(merger), iters);
  };

  List.prototype.setSize = function (size) {
    return setListBounds(this, 0, size);
  }; // @pragma Iteration


  List.prototype.slice = function (begin, end) {
    var size = this.size;

    if (wholeSlice(begin, end, size)) {
      return this;
    }

    return setListBounds(this, resolveBegin(begin, size), resolveEnd(end, size));
  };

  List.prototype.__iterator = function (type, reverse) {
    var index = 0;
    var values = iterateList(this, reverse);
    return new Iterator(function () {
      var value = values();
      return value === DONE ? iteratorDone() : iteratorValue(type, index++, value);
    });
  };

  List.prototype.__iterate = function (fn, reverse) {
    var index = 0;
    var values = iterateList(this, reverse);
    var value;

    while ((value = values()) !== DONE) {
      if (fn(value, index++, this) === false) {
        break;
      }
    }

    return index;
  };

  List.prototype.__ensureOwner = function (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }

    if (!ownerID) {
      this.__ownerID = ownerID;
      return this;
    }

    return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
  };

  function isList(maybeList) {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
  }

  List.isList = isList;
  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SENTINEL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.setIn = MapPrototype.setIn;
  ListPrototype.deleteIn = ListPrototype.removeIn = MapPrototype.removeIn;
  ListPrototype.update = MapPrototype.update;
  ListPrototype.updateIn = MapPrototype.updateIn;
  ListPrototype.mergeIn = MapPrototype.mergeIn;
  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  ListPrototype.withMutations = MapPrototype.withMutations;
  ListPrototype.asMutable = MapPrototype.asMutable;
  ListPrototype.asImmutable = MapPrototype.asImmutable;
  ListPrototype.wasAltered = MapPrototype.wasAltered;

  function VNode(array, ownerID) {
    this.array = array;
    this.ownerID = ownerID;
  } // TODO: seems like these methods are very similar


  VNode.prototype.removeBefore = function (ownerID, level, index) {
    if (index === level ? 1 << level :  false || this.array.length === 0) {
      return this;
    }

    var originIndex = index >>> level & MASK;

    if (originIndex >= this.array.length) {
      return new VNode([], ownerID);
    }

    var removingFirst = originIndex === 0;
    var newChild;

    if (level > 0) {
      var oldChild = this.array[originIndex];
      newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);

      if (newChild === oldChild && removingFirst) {
        return this;
      }
    }

    if (removingFirst && !newChild) {
      return this;
    }

    var editable = editableVNode(this, ownerID);

    if (!removingFirst) {
      for (var ii = 0; ii < originIndex; ii++) {
        editable.array[ii] = undefined;
      }
    }

    if (newChild) {
      editable.array[originIndex] = newChild;
    }

    return editable;
  };

  VNode.prototype.removeAfter = function (ownerID, level, index) {
    if (index === (level ? 1 << level : 0) || this.array.length === 0) {
      return this;
    }

    var sizeIndex = index - 1 >>> level & MASK;

    if (sizeIndex >= this.array.length) {
      return this;
    }

    var newChild;

    if (level > 0) {
      var oldChild = this.array[sizeIndex];
      newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);

      if (newChild === oldChild && sizeIndex === this.array.length - 1) {
        return this;
      }
    }

    var editable = editableVNode(this, ownerID);
    editable.array.splice(sizeIndex + 1);

    if (newChild) {
      editable.array[sizeIndex] = newChild;
    }

    return editable;
  };

  var DONE = {};

  function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;
    return iterateNodeOrLeaf(list._root, list._level, 0);

    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ? iterateLeaf(node, offset) : iterateNode(node, level, offset);
    }

    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;

      if (to > SIZE) {
        to = SIZE;
      }

      return function () {
        if (from === to) {
          return DONE;
        }

        var idx = reverse ? --to : from++;
        return array && array[idx];
      };
    }

    function iterateNode(node, level, offset) {
      var values;
      var array = node && node.array;
      var from = offset > left ? 0 : left - offset >> level;
      var to = (right - offset >> level) + 1;

      if (to > SIZE) {
        to = SIZE;
      }

      return function () {
        do {
          if (values) {
            var value = values();

            if (value !== DONE) {
              return value;
            }

            values = null;
          }

          if (from === to) {
            return DONE;
          }

          var idx = reverse ? --to : from++;
          values = iterateNodeOrLeaf(array && array[idx], level - SHIFT, offset + (idx << level));
        } while (true);
      };
    }
  }

  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
  }

  var EMPTY_LIST;

  function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
  }

  function updateList(list, index, value) {
    index = wrapIndex(list, index);

    if (index !== index) {
      return list;
    }

    if (index >= list.size || index < 0) {
      return list.withMutations(function (list) {
        index < 0 ? setListBounds(list, index).set(0, value) : setListBounds(list, 0, index + 1).set(index, value);
      });
    }

    index += list._origin;
    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef(DID_ALTER);

    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }

    if (!didAlter.value) {
      return list;
    }

    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }

    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }

  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = index >>> level & MASK;
    var nodeHas = node && idx < node.array.length;

    if (!nodeHas && value === undefined) {
      return node;
    }

    var newNode;

    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);

      if (newLowerNode === lowerNode) {
        return node;
      }

      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }

    if (nodeHas && node.array[idx] === value) {
      return node;
    }

    SetRef(didAlter);
    newNode = editableVNode(node, ownerID);

    if (value === undefined && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }

    return newNode;
  }

  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }

    return new VNode(node ? node.array.slice() : [], ownerID);
  }

  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }

    if (rawIndex < 1 << list._level + SHIFT) {
      var node = list._root;
      var level = list._level;

      while (node && level > 0) {
        node = node.array[rawIndex >>> level & MASK];
        level -= SHIFT;
      }

      return node;
    }
  }

  function setListBounds(list, begin, end) {
    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }

    if (end !== undefined) {
      end = end | 0;
    }

    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;

    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    } // If it's going to end after it starts, it's empty.


    if (newOrigin >= newCapacity) {
      return list.clear();
    }

    var newLevel = list._level;
    var newRoot = list._root; // New origin might need creating a higher root.

    var offsetShift = 0;

    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }

    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }

    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity); // New size might need creating a higher root.

    while (newTailOffset >= 1 << newLevel + SHIFT) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    } // Locate or create the new tail.


    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ? listNodeFor(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail; // Merge Tail into tree.

    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;

      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = oldTailOffset >>> level & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }

      node.array[oldTailOffset >>> SHIFT & MASK] = oldTail;
    } // If the size has been reduced, there's a chance the tail needs to be trimmed.


    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    } // If the new origin is within the tail, then we do not need a root.


    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin); // Otherwise, if the root has been trimmed, garbage collect.
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0; // Identify the new top root node of the subtree of the old root.

      while (newRoot) {
        var beginIndex = newOrigin >>> newLevel & MASK;

        if (beginIndex !== newTailOffset >>> newLevel & MASK) {
          break;
        }

        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }

        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      } // Trim the new sides of the new root.


      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }

      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }

      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }

    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }

    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }

  function mergeIntoListWith(list, merger, iterables) {
    var iters = [];
    var maxSize = 0;

    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = IndexedIterable(value);

      if (iter.size > maxSize) {
        maxSize = iter.size;
      }

      if (!isIterable(value)) {
        iter = iter.map(function (v) {
          return fromJS(v);
        });
      }

      iters.push(iter);
    }

    if (maxSize > list.size) {
      list = list.setSize(maxSize);
    }

    return mergeIntoCollectionWith(list, merger, iters);
  }

  function getTailOffset(size) {
    return size < SIZE ? 0 : size - 1 >>> SHIFT << SHIFT;
  }

  createClass(OrderedMap, Map); // @pragma Construction

  function OrderedMap(value) {
    return value === null || value === undefined ? emptyOrderedMap() : isOrderedMap(value) ? value : emptyOrderedMap().withMutations(function (map) {
      var iter = KeyedIterable(value);
      assertNotInfinite(iter.size);
      iter.forEach(function (v, k) {
        return map.set(k, v);
      });
    });
  }

  OrderedMap.of = function ()
  /*...values*/
  {
    return this(arguments);
  };

  OrderedMap.prototype.toString = function () {
    return this.__toString('OrderedMap {', '}');
  }; // @pragma Access


  OrderedMap.prototype.get = function (k, notSetValue) {
    var index = this._map.get(k);

    return index !== undefined ? this._list.get(index)[1] : notSetValue;
  }; // @pragma Modification


  OrderedMap.prototype.clear = function () {
    if (this.size === 0) {
      return this;
    }

    if (this.__ownerID) {
      this.size = 0;

      this._map.clear();

      this._list.clear();

      return this;
    }

    return emptyOrderedMap();
  };

  OrderedMap.prototype.set = function (k, v) {
    return updateOrderedMap(this, k, v);
  };

  OrderedMap.prototype.remove = function (k) {
    return updateOrderedMap(this, k, NOT_SET);
  };

  OrderedMap.prototype.wasAltered = function () {
    return this._map.wasAltered() || this._list.wasAltered();
  };

  OrderedMap.prototype.__iterate = function (fn, reverse) {
    var this$0 = this;
    return this._list.__iterate(function (entry) {
      return entry && fn(entry[1], entry[0], this$0);
    }, reverse);
  };

  OrderedMap.prototype.__iterator = function (type, reverse) {
    return this._list.fromEntrySeq().__iterator(type, reverse);
  };

  OrderedMap.prototype.__ensureOwner = function (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }

    var newMap = this._map.__ensureOwner(ownerID);

    var newList = this._list.__ensureOwner(ownerID);

    if (!ownerID) {
      this.__ownerID = ownerID;
      this._map = newMap;
      this._list = newList;
      return this;
    }

    return makeOrderedMap(newMap, newList, ownerID, this.__hash);
  };

  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }

  OrderedMap.isOrderedMap = isOrderedMap;
  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;

  function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }

  var EMPTY_ORDERED_MAP;

  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }

  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;

    if (v === NOT_SET) {
      // removed
      if (!has) {
        return omap;
      }

      if (list.size >= SIZE && list.size >= map.size * 2) {
        newList = list.filter(function (entry, idx) {
          return entry !== undefined && i !== idx;
        });
        newMap = newList.toKeyedSeq().map(function (entry) {
          return entry[0];
        }).flip().toMap();

        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
      }
    } else {
      if (has) {
        if (v === list.get(i)[1]) {
          return omap;
        }

        newMap = map;
        newList = list.set(i, [k, v]);
      } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
      }
    }

    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = undefined;
      return omap;
    }

    return makeOrderedMap(newMap, newList);
  }

  createClass(ToKeyedSequence, KeyedSeq);

  function ToKeyedSequence(indexed, useKeys) {
    this._iter = indexed;
    this._useKeys = useKeys;
    this.size = indexed.size;
  }

  ToKeyedSequence.prototype.get = function (key, notSetValue) {
    return this._iter.get(key, notSetValue);
  };

  ToKeyedSequence.prototype.has = function (key) {
    return this._iter.has(key);
  };

  ToKeyedSequence.prototype.valueSeq = function () {
    return this._iter.valueSeq();
  };

  ToKeyedSequence.prototype.reverse = function () {
    var this$0 = this;
    var reversedSequence = reverseFactory(this, true);

    if (!this._useKeys) {
      reversedSequence.valueSeq = function () {
        return this$0._iter.toSeq().reverse();
      };
    }

    return reversedSequence;
  };

  ToKeyedSequence.prototype.map = function (mapper, context) {
    var this$0 = this;
    var mappedSequence = mapFactory(this, mapper, context);

    if (!this._useKeys) {
      mappedSequence.valueSeq = function () {
        return this$0._iter.toSeq().map(mapper, context);
      };
    }

    return mappedSequence;
  };

  ToKeyedSequence.prototype.__iterate = function (fn, reverse) {
    var this$0 = this;
    var ii;
    return this._iter.__iterate(this._useKeys ? function (v, k) {
      return fn(v, k, this$0);
    } : (ii = reverse ? resolveSize(this) : 0, function (v) {
      return fn(v, reverse ? --ii : ii++, this$0);
    }), reverse);
  };

  ToKeyedSequence.prototype.__iterator = function (type, reverse) {
    if (this._useKeys) {
      return this._iter.__iterator(type, reverse);
    }

    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);

    var ii = reverse ? resolveSize(this) : 0;
    return new Iterator(function () {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, reverse ? --ii : ii++, step.value, step);
    });
  };

  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;
  createClass(ToIndexedSequence, IndexedSeq);

  function ToIndexedSequence(iter) {
    this._iter = iter;
    this.size = iter.size;
  }

  ToIndexedSequence.prototype.includes = function (value) {
    return this._iter.includes(value);
  };

  ToIndexedSequence.prototype.__iterate = function (fn, reverse) {
    var this$0 = this;
    var iterations = 0;
    return this._iter.__iterate(function (v) {
      return fn(v, iterations++, this$0);
    }, reverse);
  };

  ToIndexedSequence.prototype.__iterator = function (type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);

    var iterations = 0;
    return new Iterator(function () {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, iterations++, step.value, step);
    });
  };

  createClass(ToSetSequence, SetSeq);

  function ToSetSequence(iter) {
    this._iter = iter;
    this.size = iter.size;
  }

  ToSetSequence.prototype.has = function (key) {
    return this._iter.includes(key);
  };

  ToSetSequence.prototype.__iterate = function (fn, reverse) {
    var this$0 = this;
    return this._iter.__iterate(function (v) {
      return fn(v, v, this$0);
    }, reverse);
  };

  ToSetSequence.prototype.__iterator = function (type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);

    return new Iterator(function () {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, step.value, step.value, step);
    });
  };

  createClass(FromEntriesSequence, KeyedSeq);

  function FromEntriesSequence(entries) {
    this._iter = entries;
    this.size = entries.size;
  }

  FromEntriesSequence.prototype.entrySeq = function () {
    return this._iter.toSeq();
  };

  FromEntriesSequence.prototype.__iterate = function (fn, reverse) {
    var this$0 = this;
    return this._iter.__iterate(function (entry) {
      // Check if entry exists first so array access doesn't throw for holes
      // in the parent iteration.
      if (entry) {
        validateEntry(entry);
        var indexedIterable = isIterable(entry);
        return fn(indexedIterable ? entry.get(1) : entry[1], indexedIterable ? entry.get(0) : entry[0], this$0);
      }
    }, reverse);
  };

  FromEntriesSequence.prototype.__iterator = function (type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);

    return new Iterator(function () {
      while (true) {
        var step = iterator.next();

        if (step.done) {
          return step;
        }

        var entry = step.value; // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.

        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return iteratorValue(type, indexedIterable ? entry.get(0) : entry[0], indexedIterable ? entry.get(1) : entry[1], step);
        }
      }
    });
  };

  ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;

  function flipFactory(iterable) {
    var flipSequence = makeSequence(iterable);
    flipSequence._iter = iterable;
    flipSequence.size = iterable.size;

    flipSequence.flip = function () {
      return iterable;
    };

    flipSequence.reverse = function () {
      var reversedSequence = iterable.reverse.apply(this); // super.reverse()

      reversedSequence.flip = function () {
        return iterable.reverse();
      };

      return reversedSequence;
    };

    flipSequence.has = function (key) {
      return iterable.includes(key);
    };

    flipSequence.includes = function (key) {
      return iterable.has(key);
    };

    flipSequence.cacheResult = cacheResultThrough;

    flipSequence.__iterateUncached = function (fn, reverse) {
      var this$0 = this;
      return iterable.__iterate(function (v, k) {
        return fn(k, v, this$0) !== false;
      }, reverse);
    };

    flipSequence.__iteratorUncached = function (type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = iterable.__iterator(type, reverse);

        return new Iterator(function () {
          var step = iterator.next();

          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }

          return step;
        });
      }

      return iterable.__iterator(type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES, reverse);
    };

    return flipSequence;
  }

  function mapFactory(iterable, mapper, context) {
    var mappedSequence = makeSequence(iterable);
    mappedSequence.size = iterable.size;

    mappedSequence.has = function (key) {
      return iterable.has(key);
    };

    mappedSequence.get = function (key, notSetValue) {
      var v = iterable.get(key, NOT_SET);
      return v === NOT_SET ? notSetValue : mapper.call(context, v, key, iterable);
    };

    mappedSequence.__iterateUncached = function (fn, reverse) {
      var this$0 = this;
      return iterable.__iterate(function (v, k, c) {
        return fn(mapper.call(context, v, k, c), k, this$0) !== false;
      }, reverse);
    };

    mappedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);

      return new Iterator(function () {
        var step = iterator.next();

        if (step.done) {
          return step;
        }

        var entry = step.value;
        var key = entry[0];
        return iteratorValue(type, key, mapper.call(context, entry[1], key, iterable), step);
      });
    };

    return mappedSequence;
  }

  function reverseFactory(iterable, useKeys) {
    var reversedSequence = makeSequence(iterable);
    reversedSequence._iter = iterable;
    reversedSequence.size = iterable.size;

    reversedSequence.reverse = function () {
      return iterable;
    };

    if (iterable.flip) {
      reversedSequence.flip = function () {
        var flipSequence = flipFactory(iterable);

        flipSequence.reverse = function () {
          return iterable.flip();
        };

        return flipSequence;
      };
    }

    reversedSequence.get = function (key, notSetValue) {
      return iterable.get(useKeys ? key : -1 - key, notSetValue);
    };

    reversedSequence.has = function (key) {
      return iterable.has(useKeys ? key : -1 - key);
    };

    reversedSequence.includes = function (value) {
      return iterable.includes(value);
    };

    reversedSequence.cacheResult = cacheResultThrough;

    reversedSequence.__iterate = function (fn, reverse) {
      var this$0 = this;
      return iterable.__iterate(function (v, k) {
        return fn(v, k, this$0);
      }, !reverse);
    };

    reversedSequence.__iterator = function (type, reverse) {
      return iterable.__iterator(type, !reverse);
    };

    return reversedSequence;
  }

  function filterFactory(iterable, predicate, context, useKeys) {
    var filterSequence = makeSequence(iterable);

    if (useKeys) {
      filterSequence.has = function (key) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
      };

      filterSequence.get = function (key, notSetValue) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, iterable) ? v : notSetValue;
      };
    }

    filterSequence.__iterateUncached = function (fn, reverse) {
      var this$0 = this;
      var iterations = 0;

      iterable.__iterate(function (v, k, c) {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      }, reverse);

      return iterations;
    };

    filterSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);

      var iterations = 0;
      return new Iterator(function () {
        while (true) {
          var step = iterator.next();

          if (step.done) {
            return step;
          }

          var entry = step.value;
          var key = entry[0];
          var value = entry[1];

          if (predicate.call(context, value, key, iterable)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    };

    return filterSequence;
  }

  function countByFactory(iterable, grouper, context) {
    var groups = Map().asMutable();

    iterable.__iterate(function (v, k) {
      groups.update(grouper.call(context, v, k, iterable), 0, function (a) {
        return a + 1;
      });
    });

    return groups.asImmutable();
  }

  function groupByFactory(iterable, grouper, context) {
    var isKeyedIter = isKeyed(iterable);
    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();

    iterable.__iterate(function (v, k) {
      groups.update(grouper.call(context, v, k, iterable), function (a) {
        return a = a || [], a.push(isKeyedIter ? [k, v] : v), a;
      });
    });

    var coerce = iterableClass(iterable);
    return groups.map(function (arr) {
      return reify(iterable, coerce(arr));
    });
  }

  function sliceFactory(iterable, begin, end, useKeys) {
    var originalSize = iterable.size; // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32

    if (begin !== undefined) {
      begin = begin | 0;
    }

    if (end !== undefined) {
      if (end === Infinity) {
        end = originalSize;
      } else {
        end = end | 0;
      }
    }

    if (wholeSlice(begin, end, originalSize)) {
      return iterable;
    }

    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize); // begin or end will be NaN if they were provided as negative numbers and
    // this iterable's size is unknown. In that case, cache first so there is
    // a known size and these do not resolve to NaN.

    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
    } // Note: resolvedEnd is undefined when the original sequence's length is
    // unknown and this slice did not supply an end and should contain all
    // elements after resolvedBegin.
    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.


    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;

    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }

    var sliceSeq = makeSequence(iterable); // If iterable.size is undefined, the size of the realized sliceSeq is
    // unknown at this point unless the number of items to slice is 0

    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
      sliceSeq.get = function (index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ? iterable.get(index + resolvedBegin, notSetValue) : notSetValue;
      };
    }

    sliceSeq.__iterateUncached = function (fn, reverse) {
      var this$0 = this;

      if (sliceSize === 0) {
        return 0;
      }

      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }

      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;

      iterable.__iterate(function (v, k) {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0) !== false && iterations !== sliceSize;
        }
      });

      return iterations;
    };

    sliceSeq.__iteratorUncached = function (type, reverse) {
      if (sliceSize !== 0 && reverse) {
        return this.cacheResult().__iterator(type, reverse);
      } // Don't bother instantiating parent iterator if taking 0.


      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);

      var skipped = 0;
      var iterations = 0;
      return new Iterator(function () {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }

        if (++iterations > sliceSize) {
          return iteratorDone();
        }

        var step = iterator.next();

        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, undefined, step);
        } else {
          return iteratorValue(type, iterations - 1, step.value[1], step);
        }
      });
    };

    return sliceSeq;
  }

  function takeWhileFactory(iterable, predicate, context) {
    var takeSequence = makeSequence(iterable);

    takeSequence.__iterateUncached = function (fn, reverse) {
      var this$0 = this;

      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }

      var iterations = 0;

      iterable.__iterate(function (v, k, c) {
        return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0);
      });

      return iterations;
    };

    takeSequence.__iteratorUncached = function (type, reverse) {
      var this$0 = this;

      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }

      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);

      var iterating = true;
      return new Iterator(function () {
        if (!iterating) {
          return iteratorDone();
        }

        var step = iterator.next();

        if (step.done) {
          return step;
        }

        var entry = step.value;
        var k = entry[0];
        var v = entry[1];

        if (!predicate.call(context, v, k, this$0)) {
          iterating = false;
          return iteratorDone();
        }

        return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
      });
    };

    return takeSequence;
  }

  function skipWhileFactory(iterable, predicate, context, useKeys) {
    var skipSequence = makeSequence(iterable);

    skipSequence.__iterateUncached = function (fn, reverse) {
      var this$0 = this;

      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }

      var isSkipping = true;
      var iterations = 0;

      iterable.__iterate(function (v, k, c) {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      });

      return iterations;
    };

    skipSequence.__iteratorUncached = function (type, reverse) {
      var this$0 = this;

      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }

      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);

      var skipping = true;
      var iterations = 0;
      return new Iterator(function () {
        var step, k, v;

        do {
          step = iterator.next();

          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, undefined, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }

          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$0));
        } while (skipping);

        return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
      });
    };

    return skipSequence;
  }

  function concatFactory(iterable, values) {
    var isKeyedIterable = isKeyed(iterable);
    var iters = [iterable].concat(values).map(function (v) {
      if (!isIterable(v)) {
        v = isKeyedIterable ? keyedSeqFromValue(v) : indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedIterable) {
        v = KeyedIterable(v);
      }

      return v;
    }).filter(function (v) {
      return v.size !== 0;
    });

    if (iters.length === 0) {
      return iterable;
    }

    if (iters.length === 1) {
      var singleton = iters[0];

      if (singleton === iterable || isKeyedIterable && isKeyed(singleton) || isIndexed(iterable) && isIndexed(singleton)) {
        return singleton;
      }
    }

    var concatSeq = new ArraySeq(iters);

    if (isKeyedIterable) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(iterable)) {
      concatSeq = concatSeq.toSetSeq();
    }

    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(function (sum, seq) {
      if (sum !== undefined) {
        var size = seq.size;

        if (size !== undefined) {
          return sum + size;
        }
      }
    }, 0);
    return concatSeq;
  }

  function flattenFactory(iterable, depth, useKeys) {
    var flatSequence = makeSequence(iterable);

    flatSequence.__iterateUncached = function (fn, reverse) {
      var iterations = 0;
      var stopped = false;

      function flatDeep(iter, currentDepth) {
        var this$0 = this;

        iter.__iterate(function (v, k) {
          if ((!depth || currentDepth < depth) && isIterable(v)) {
            flatDeep(v, currentDepth + 1);
          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
            stopped = true;
          }

          return !stopped;
        }, reverse);
      }

      flatDeep(iterable, 0);
      return iterations;
    };

    flatSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(type, reverse);

      var stack = [];
      var iterations = 0;
      return new Iterator(function () {
        while (iterator) {
          var step = iterator.next();

          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }

          var v = step.value;

          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }

          if ((!depth || stack.length < depth) && isIterable(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }

        return iteratorDone();
      });
    };

    return flatSequence;
  }

  function flatMapFactory(iterable, mapper, context) {
    var coerce = iterableClass(iterable);
    return iterable.toSeq().map(function (v, k) {
      return coerce(mapper.call(context, v, k, iterable));
    }).flatten(true);
  }

  function interposeFactory(iterable, separator) {
    var interposedSequence = makeSequence(iterable);
    interposedSequence.size = iterable.size && iterable.size * 2 - 1;

    interposedSequence.__iterateUncached = function (fn, reverse) {
      var this$0 = this;
      var iterations = 0;

      iterable.__iterate(function (v, k) {
        return (!iterations || fn(separator, iterations++, this$0) !== false) && fn(v, iterations++, this$0) !== false;
      }, reverse);

      return iterations;
    };

    interposedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);

      var iterations = 0;
      var step;
      return new Iterator(function () {
        if (!step || iterations % 2) {
          step = iterator.next();

          if (step.done) {
            return step;
          }
        }

        return iterations % 2 ? iteratorValue(type, iterations++, separator) : iteratorValue(type, iterations++, step.value, step);
      });
    };

    return interposedSequence;
  }

  function sortFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }

    var isKeyedIterable = isKeyed(iterable);
    var index = 0;
    var entries = iterable.toSeq().map(function (v, k) {
      return [k, v, index++, mapper ? mapper(v, k, iterable) : v];
    }).toArray();
    entries.sort(function (a, b) {
      return comparator(a[3], b[3]) || a[2] - b[2];
    }).forEach(isKeyedIterable ? function (v, i) {
      entries[i].length = 2;
    } : function (v, i) {
      entries[i] = v[1];
    });
    return isKeyedIterable ? KeyedSeq(entries) : isIndexed(iterable) ? IndexedSeq(entries) : SetSeq(entries);
  }

  function maxFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }

    if (mapper) {
      var entry = iterable.toSeq().map(function (v, k) {
        return [v, mapper(v, k, iterable)];
      }).reduce(function (a, b) {
        return maxCompare(comparator, a[1], b[1]) ? b : a;
      });
      return entry && entry[0];
    } else {
      return iterable.reduce(function (a, b) {
        return maxCompare(comparator, a, b) ? b : a;
      });
    }
  }

  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a); // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.

    return comp === 0 && b !== a && (b === undefined || b === null || b !== b) || comp > 0;
  }

  function zipWithFactory(keyIter, zipper, iters) {
    var zipSequence = makeSequence(keyIter);
    zipSequence.size = new ArraySeq(iters).map(function (i) {
      return i.size;
    }).min(); // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.

    zipSequence.__iterate = function (fn, reverse) {
      /* generic:
      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        iterations++;
        if (fn(step.value[1], step.value[0], this) === false) {
          break;
        }
      }
      return iterations;
      */
      // indexed:
      var iterator = this.__iterator(ITERATE_VALUES, reverse);

      var step;
      var iterations = 0;

      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }

      return iterations;
    };

    zipSequence.__iteratorUncached = function (type, reverse) {
      var iterators = iters.map(function (i) {
        return i = Iterable(i), getIterator(reverse ? i.reverse() : i);
      });
      var iterations = 0;
      var isDone = false;
      return new Iterator(function () {
        var steps;

        if (!isDone) {
          steps = iterators.map(function (i) {
            return i.next();
          });
          isDone = steps.some(function (s) {
            return s.done;
          });
        }

        if (isDone) {
          return iteratorDone();
        }

        return iteratorValue(type, iterations++, zipper.apply(null, steps.map(function (s) {
          return s.value;
        })));
      });
    };

    return zipSequence;
  } // #pragma Helper Functions


  function reify(iter, seq) {
    return isSeq(iter) ? seq : iter.constructor(seq);
  }

  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
  }

  function resolveSize(iter) {
    assertNotInfinite(iter.size);
    return ensureSize(iter);
  }

  function iterableClass(iterable) {
    return isKeyed(iterable) ? KeyedIterable : isIndexed(iterable) ? IndexedIterable : SetIterable;
  }

  function makeSequence(iterable) {
    return Object.create((isKeyed(iterable) ? KeyedSeq : isIndexed(iterable) ? IndexedSeq : SetSeq).prototype);
  }

  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();

      this.size = this._iter.size;
      return this;
    } else {
      return Seq.prototype.cacheResult.call(this);
    }
  }

  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function forceIterator(keyPath) {
    var iter = getIterator(keyPath);

    if (!iter) {
      // Array might not be iterable in this environment, so we need a fallback
      // to our wrapped type.
      if (!isArrayLike(keyPath)) {
        throw new TypeError('Expected iterable or array-like: ' + keyPath);
      }

      iter = getIterator(Iterable(keyPath));
    }

    return iter;
  }

  createClass(Record, KeyedCollection);

  function Record(defaultValues, name) {
    var hasInitialized;

    var RecordType = function Record(values) {
      if (values instanceof RecordType) {
        return values;
      }

      if (!(this instanceof RecordType)) {
        return new RecordType(values);
      }

      if (!hasInitialized) {
        hasInitialized = true;
        var keys = Object.keys(defaultValues);
        setProps(RecordTypePrototype, keys);
        RecordTypePrototype.size = keys.length;
        RecordTypePrototype._name = name;
        RecordTypePrototype._keys = keys;
        RecordTypePrototype._defaultValues = defaultValues;
      }

      this._map = Map(values);
    };

    var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
    RecordTypePrototype.constructor = RecordType;
    return RecordType;
  }

  Record.prototype.toString = function () {
    return this.__toString(recordName(this) + ' {', '}');
  }; // @pragma Access


  Record.prototype.has = function (k) {
    return this._defaultValues.hasOwnProperty(k);
  };

  Record.prototype.get = function (k, notSetValue) {
    if (!this.has(k)) {
      return notSetValue;
    }

    var defaultVal = this._defaultValues[k];
    return this._map ? this._map.get(k, defaultVal) : defaultVal;
  }; // @pragma Modification


  Record.prototype.clear = function () {
    if (this.__ownerID) {
      this._map && this._map.clear();
      return this;
    }

    var RecordType = this.constructor;
    return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
  };

  Record.prototype.set = function (k, v) {
    if (!this.has(k)) {
      throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
    }

    if (this._map && !this._map.has(k)) {
      var defaultVal = this._defaultValues[k];

      if (v === defaultVal) {
        return this;
      }
    }

    var newMap = this._map && this._map.set(k, v);

    if (this.__ownerID || newMap === this._map) {
      return this;
    }

    return makeRecord(this, newMap);
  };

  Record.prototype.remove = function (k) {
    if (!this.has(k)) {
      return this;
    }

    var newMap = this._map && this._map.remove(k);

    if (this.__ownerID || newMap === this._map) {
      return this;
    }

    return makeRecord(this, newMap);
  };

  Record.prototype.wasAltered = function () {
    return this._map.wasAltered();
  };

  Record.prototype.__iterator = function (type, reverse) {
    var this$0 = this;
    return KeyedIterable(this._defaultValues).map(function (_, k) {
      return this$0.get(k);
    }).__iterator(type, reverse);
  };

  Record.prototype.__iterate = function (fn, reverse) {
    var this$0 = this;
    return KeyedIterable(this._defaultValues).map(function (_, k) {
      return this$0.get(k);
    }).__iterate(fn, reverse);
  };

  Record.prototype.__ensureOwner = function (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }

    var newMap = this._map && this._map.__ensureOwner(ownerID);

    if (!ownerID) {
      this.__ownerID = ownerID;
      this._map = newMap;
      return this;
    }

    return makeRecord(this, newMap, ownerID);
  };

  var RecordPrototype = Record.prototype;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn = RecordPrototype.removeIn = MapPrototype.removeIn;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeIn = MapPrototype.mergeIn;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  RecordPrototype.setIn = MapPrototype.setIn;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;

  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }

  function recordName(record) {
    return record._name || record.constructor.name || 'Record';
  }

  function setProps(prototype, names) {
    try {
      names.forEach(setProp.bind(undefined, prototype));
    } catch (error) {// Object.defineProperty failed. Probably IE8.
    }
  }

  function setProp(prototype, name) {
    Object.defineProperty(prototype, name, {
      get: function get() {
        return this.get(name);
      },
      set: function set(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  }

  createClass(Set, SetCollection); // @pragma Construction

  function Set(value) {
    return value === null || value === undefined ? emptySet() : isSet(value) && !isOrdered(value) ? value : emptySet().withMutations(function (set) {
      var iter = SetIterable(value);
      assertNotInfinite(iter.size);
      iter.forEach(function (v) {
        return set.add(v);
      });
    });
  }

  Set.of = function ()
  /*...values*/
  {
    return this(arguments);
  };

  Set.fromKeys = function (value) {
    return this(KeyedIterable(value).keySeq());
  };

  Set.prototype.toString = function () {
    return this.__toString('Set {', '}');
  }; // @pragma Access


  Set.prototype.has = function (value) {
    return this._map.has(value);
  }; // @pragma Modification


  Set.prototype.add = function (value) {
    return updateSet(this, this._map.set(value, true));
  };

  Set.prototype.remove = function (value) {
    return updateSet(this, this._map.remove(value));
  };

  Set.prototype.clear = function () {
    return updateSet(this, this._map.clear());
  }; // @pragma Composition


  Set.prototype.union = function () {
    var iters = SLICE$0.call(arguments, 0);
    iters = iters.filter(function (x) {
      return x.size !== 0;
    });

    if (iters.length === 0) {
      return this;
    }

    if (this.size === 0 && !this.__ownerID && iters.length === 1) {
      return this.constructor(iters[0]);
    }

    return this.withMutations(function (set) {
      for (var ii = 0; ii < iters.length; ii++) {
        SetIterable(iters[ii]).forEach(function (value) {
          return set.add(value);
        });
      }
    });
  };

  Set.prototype.intersect = function () {
    var iters = SLICE$0.call(arguments, 0);

    if (iters.length === 0) {
      return this;
    }

    iters = iters.map(function (iter) {
      return SetIterable(iter);
    });
    var originalSet = this;
    return this.withMutations(function (set) {
      originalSet.forEach(function (value) {
        if (!iters.every(function (iter) {
          return iter.includes(value);
        })) {
          set.remove(value);
        }
      });
    });
  };

  Set.prototype.subtract = function () {
    var iters = SLICE$0.call(arguments, 0);

    if (iters.length === 0) {
      return this;
    }

    iters = iters.map(function (iter) {
      return SetIterable(iter);
    });
    var originalSet = this;
    return this.withMutations(function (set) {
      originalSet.forEach(function (value) {
        if (iters.some(function (iter) {
          return iter.includes(value);
        })) {
          set.remove(value);
        }
      });
    });
  };

  Set.prototype.merge = function () {
    return this.union.apply(this, arguments);
  };

  Set.prototype.mergeWith = function (merger) {
    var iters = SLICE$0.call(arguments, 1);
    return this.union.apply(this, iters);
  };

  Set.prototype.sort = function (comparator) {
    // Late binding
    return OrderedSet(sortFactory(this, comparator));
  };

  Set.prototype.sortBy = function (mapper, comparator) {
    // Late binding
    return OrderedSet(sortFactory(this, comparator, mapper));
  };

  Set.prototype.wasAltered = function () {
    return this._map.wasAltered();
  };

  Set.prototype.__iterate = function (fn, reverse) {
    var this$0 = this;
    return this._map.__iterate(function (_, k) {
      return fn(k, k, this$0);
    }, reverse);
  };

  Set.prototype.__iterator = function (type, reverse) {
    return this._map.map(function (_, k) {
      return k;
    }).__iterator(type, reverse);
  };

  Set.prototype.__ensureOwner = function (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }

    var newMap = this._map.__ensureOwner(ownerID);

    if (!ownerID) {
      this.__ownerID = ownerID;
      this._map = newMap;
      return this;
    }

    return this.__make(newMap, ownerID);
  };

  function isSet(maybeSet) {
    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
  }

  Set.isSet = isSet;
  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';
  var SetPrototype = Set.prototype;
  SetPrototype[IS_SET_SENTINEL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.mergeDeep = SetPrototype.merge;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;
  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;

  function updateSet(set, newMap) {
    if (set.__ownerID) {
      set.size = newMap.size;
      set._map = newMap;
      return set;
    }

    return newMap === set._map ? set : newMap.size === 0 ? set.__empty() : set.__make(newMap);
  }

  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_SET;

  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }

  createClass(OrderedSet, Set); // @pragma Construction

  function OrderedSet(value) {
    return value === null || value === undefined ? emptyOrderedSet() : isOrderedSet(value) ? value : emptyOrderedSet().withMutations(function (set) {
      var iter = SetIterable(value);
      assertNotInfinite(iter.size);
      iter.forEach(function (v) {
        return set.add(v);
      });
    });
  }

  OrderedSet.of = function ()
  /*...values*/
  {
    return this(arguments);
  };

  OrderedSet.fromKeys = function (value) {
    return this(KeyedIterable(value).keySeq());
  };

  OrderedSet.prototype.toString = function () {
    return this.__toString('OrderedSet {', '}');
  };

  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }

  OrderedSet.isOrderedSet = isOrderedSet;
  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;
  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;

  function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_ORDERED_SET;

  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }

  createClass(Stack, IndexedCollection); // @pragma Construction

  function Stack(value) {
    return value === null || value === undefined ? emptyStack() : isStack(value) ? value : emptyStack().unshiftAll(value);
  }

  Stack.of = function ()
  /*...values*/
  {
    return this(arguments);
  };

  Stack.prototype.toString = function () {
    return this.__toString('Stack [', ']');
  }; // @pragma Access


  Stack.prototype.get = function (index, notSetValue) {
    var head = this._head;
    index = wrapIndex(this, index);

    while (head && index--) {
      head = head.next;
    }

    return head ? head.value : notSetValue;
  };

  Stack.prototype.peek = function () {
    return this._head && this._head.value;
  }; // @pragma Modification


  Stack.prototype.push = function ()
  /*...values*/
  {
    if (arguments.length === 0) {
      return this;
    }

    var newSize = this.size + arguments.length;
    var head = this._head;

    for (var ii = arguments.length - 1; ii >= 0; ii--) {
      head = {
        value: arguments[ii],
        next: head
      };
    }

    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }

    return makeStack(newSize, head);
  };

  Stack.prototype.pushAll = function (iter) {
    iter = IndexedIterable(iter);

    if (iter.size === 0) {
      return this;
    }

    assertNotInfinite(iter.size);
    var newSize = this.size;
    var head = this._head;
    iter.reverse().forEach(function (value) {
      newSize++;
      head = {
        value: value,
        next: head
      };
    });

    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }

    return makeStack(newSize, head);
  };

  Stack.prototype.pop = function () {
    return this.slice(1);
  };

  Stack.prototype.unshift = function ()
  /*...values*/
  {
    return this.push.apply(this, arguments);
  };

  Stack.prototype.unshiftAll = function (iter) {
    return this.pushAll(iter);
  };

  Stack.prototype.shift = function () {
    return this.pop.apply(this, arguments);
  };

  Stack.prototype.clear = function () {
    if (this.size === 0) {
      return this;
    }

    if (this.__ownerID) {
      this.size = 0;
      this._head = undefined;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }

    return emptyStack();
  };

  Stack.prototype.slice = function (begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }

    var resolvedBegin = resolveBegin(begin, this.size);
    var resolvedEnd = resolveEnd(end, this.size);

    if (resolvedEnd !== this.size) {
      // super.slice(begin, end);
      return IndexedCollection.prototype.slice.call(this, begin, end);
    }

    var newSize = this.size - resolvedBegin;
    var head = this._head;

    while (resolvedBegin--) {
      head = head.next;
    }

    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }

    return makeStack(newSize, head);
  }; // @pragma Mutability


  Stack.prototype.__ensureOwner = function (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }

    if (!ownerID) {
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }

    return makeStack(this.size, this._head, ownerID, this.__hash);
  }; // @pragma Iteration


  Stack.prototype.__iterate = function (fn, reverse) {
    if (reverse) {
      return this.reverse().__iterate(fn);
    }

    var iterations = 0;
    var node = this._head;

    while (node) {
      if (fn(node.value, iterations++, this) === false) {
        break;
      }

      node = node.next;
    }

    return iterations;
  };

  Stack.prototype.__iterator = function (type, reverse) {
    if (reverse) {
      return this.reverse().__iterator(type);
    }

    var iterations = 0;
    var node = this._head;
    return new Iterator(function () {
      if (node) {
        var value = node.value;
        node = node.next;
        return iteratorValue(type, iterations++, value);
      }

      return iteratorDone();
    });
  };

  function isStack(maybeStack) {
    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
  }

  Stack.isStack = isStack;
  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';
  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SENTINEL] = true;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;

  function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_STACK;

  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }
  /**
   * Contributes additional methods to a constructor
   */


  function mixin(ctor, methods) {
    var keyCopier = function keyCopier(key) {
      ctor.prototype[key] = methods[key];
    };

    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }

  Iterable.Iterator = Iterator;
  mixin(Iterable, {
    // ### Conversion to other types
    toArray: function toArray() {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);

      this.valueSeq().__iterate(function (v, i) {
        array[i] = v;
      });

      return array;
    },
    toIndexedSeq: function toIndexedSeq() {
      return new ToIndexedSequence(this);
    },
    toJS: function toJS() {
      return this.toSeq().map(function (value) {
        return value && typeof value.toJS === 'function' ? value.toJS() : value;
      }).__toJS();
    },
    toJSON: function toJSON() {
      return this.toSeq().map(function (value) {
        return value && typeof value.toJSON === 'function' ? value.toJSON() : value;
      }).__toJS();
    },
    toKeyedSeq: function toKeyedSeq() {
      return new ToKeyedSequence(this, true);
    },
    toMap: function toMap() {
      // Use Late Binding here to solve the circular dependency.
      return Map(this.toKeyedSeq());
    },
    toObject: function toObject() {
      assertNotInfinite(this.size);
      var object = {};

      this.__iterate(function (v, k) {
        object[k] = v;
      });

      return object;
    },
    toOrderedMap: function toOrderedMap() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedMap(this.toKeyedSeq());
    },
    toOrderedSet: function toOrderedSet() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },
    toSet: function toSet() {
      // Use Late Binding here to solve the circular dependency.
      return Set(isKeyed(this) ? this.valueSeq() : this);
    },
    toSetSeq: function toSetSeq() {
      return new ToSetSequence(this);
    },
    toSeq: function toSeq() {
      return isIndexed(this) ? this.toIndexedSeq() : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
    },
    toStack: function toStack() {
      // Use Late Binding here to solve the circular dependency.
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },
    toList: function toList() {
      // Use Late Binding here to solve the circular dependency.
      return List(isKeyed(this) ? this.valueSeq() : this);
    },
    // ### Common JavaScript methods and properties
    toString: function toString() {
      return '[Iterable]';
    },
    __toString: function __toString(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }

      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },
    // ### ES6 Collection methods (ES6 Array and Map)
    concat: function concat() {
      var values = SLICE$0.call(arguments, 0);
      return reify(this, concatFactory(this, values));
    },
    includes: function includes(searchValue) {
      return this.some(function (value) {
        return is(value, searchValue);
      });
    },
    entries: function entries() {
      return this.__iterator(ITERATE_ENTRIES);
    },
    every: function every(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;

      this.__iterate(function (v, k, c) {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });

      return returnValue;
    },
    filter: function filter(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },
    find: function find(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },
    forEach: function forEach(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },
    join: function join(separator) {
      assertNotInfinite(this.size);
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;

      this.__iterate(function (v) {
        isFirst ? isFirst = false : joined += separator;
        joined += v !== null && v !== undefined ? v.toString() : '';
      });

      return joined;
    },
    keys: function keys() {
      return this.__iterator(ITERATE_KEYS);
    },
    map: function map(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },
    reduce: function reduce(reducer, initialReduction, context) {
      assertNotInfinite(this.size);
      var reduction;
      var useFirst;

      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }

      this.__iterate(function (v, k, c) {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      });

      return reduction;
    },
    reduceRight: function reduceRight(reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },
    reverse: function reverse() {
      return reify(this, reverseFactory(this, true));
    },
    slice: function slice(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },
    some: function some(predicate, context) {
      return !this.every(not(predicate), context);
    },
    sort: function sort(comparator) {
      return reify(this, sortFactory(this, comparator));
    },
    values: function values() {
      return this.__iterator(ITERATE_VALUES);
    },
    // ### More sequential methods
    butLast: function butLast() {
      return this.slice(0, -1);
    },
    isEmpty: function isEmpty() {
      return this.size !== undefined ? this.size === 0 : !this.some(function () {
        return true;
      });
    },
    count: function count(predicate, context) {
      return ensureSize(predicate ? this.toSeq().filter(predicate, context) : this);
    },
    countBy: function countBy(grouper, context) {
      return countByFactory(this, grouper, context);
    },
    equals: function equals(other) {
      return deepEqual(this, other);
    },
    entrySeq: function entrySeq() {
      var iterable = this;

      if (iterable._cache) {
        // We cache as an entries array, so we can just return the cache!
        return new ArraySeq(iterable._cache);
      }

      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();

      entriesSequence.fromEntrySeq = function () {
        return iterable.toSeq();
      };

      return entriesSequence;
    },
    filterNot: function filterNot(predicate, context) {
      return this.filter(not(predicate), context);
    },
    findEntry: function findEntry(predicate, context, notSetValue) {
      var found = notSetValue;

      this.__iterate(function (v, k, c) {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });

      return found;
    },
    findKey: function findKey(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },
    findLast: function findLast(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },
    findLastEntry: function findLastEntry(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
    },
    findLastKey: function findLastKey(predicate, context) {
      return this.toKeyedSeq().reverse().findKey(predicate, context);
    },
    first: function first() {
      return this.find(returnTrue);
    },
    flatMap: function flatMap(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },
    flatten: function flatten(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },
    fromEntrySeq: function fromEntrySeq() {
      return new FromEntriesSequence(this);
    },
    get: function get(searchKey, notSetValue) {
      return this.find(function (_, key) {
        return is(key, searchKey);
      }, undefined, notSetValue);
    },
    getIn: function getIn(searchKeyPath, notSetValue) {
      var nested = this; // Note: in an ES6 environment, we would prefer:
      // for (var key of searchKeyPath) {

      var iter = forceIterator(searchKeyPath);
      var step;

      while (!(step = iter.next()).done) {
        var key = step.value;
        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;

        if (nested === NOT_SET) {
          return notSetValue;
        }
      }

      return nested;
    },
    groupBy: function groupBy(grouper, context) {
      return groupByFactory(this, grouper, context);
    },
    has: function has(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },
    hasIn: function hasIn(searchKeyPath) {
      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
    },
    isSubset: function isSubset(iter) {
      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
      return this.every(function (value) {
        return iter.includes(value);
      });
    },
    isSuperset: function isSuperset(iter) {
      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
      return iter.isSubset(this);
    },
    keyOf: function keyOf(searchValue) {
      return this.findKey(function (value) {
        return is(value, searchValue);
      });
    },
    keySeq: function keySeq() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },
    last: function last() {
      return this.toSeq().reverse().first();
    },
    lastKeyOf: function lastKeyOf(searchValue) {
      return this.toKeyedSeq().reverse().keyOf(searchValue);
    },
    max: function max(comparator) {
      return maxFactory(this, comparator);
    },
    maxBy: function maxBy(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },
    min: function min(comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },
    minBy: function minBy(mapper, comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },
    rest: function rest() {
      return this.slice(1);
    },
    skip: function skip(amount) {
      return this.slice(Math.max(0, amount));
    },
    skipLast: function skipLast(amount) {
      return reify(this, this.toSeq().reverse().skip(amount).reverse());
    },
    skipWhile: function skipWhile(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },
    skipUntil: function skipUntil(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },
    sortBy: function sortBy(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },
    take: function take(amount) {
      return this.slice(0, Math.max(0, amount));
    },
    takeLast: function takeLast(amount) {
      return reify(this, this.toSeq().reverse().take(amount).reverse());
    },
    takeWhile: function takeWhile(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },
    takeUntil: function takeUntil(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },
    valueSeq: function valueSeq() {
      return this.toIndexedSeq();
    },
    // ### Hashable Object
    hashCode: function hashCode() {
      return this.__hash || (this.__hash = hashIterable(this));
    } // ### Internal
    // abstract __iterate(fn, reverse)
    // abstract __iterator(type, reverse)

  }); // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  var IterablePrototype = Iterable.prototype;
  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
  IterablePrototype.__toJS = IterablePrototype.toArray;
  IterablePrototype.__toStringMapper = quoteString;

  IterablePrototype.inspect = IterablePrototype.toSource = function () {
    return this.toString();
  };

  IterablePrototype.chain = IterablePrototype.flatMap;
  IterablePrototype.contains = IterablePrototype.includes;
  mixin(KeyedIterable, {
    // ### More sequential methods
    flip: function flip() {
      return reify(this, flipFactory(this));
    },
    mapEntries: function mapEntries(mapper, context) {
      var this$0 = this;
      var iterations = 0;
      return reify(this, this.toSeq().map(function (v, k) {
        return mapper.call(context, [k, v], iterations++, this$0);
      }).fromEntrySeq());
    },
    mapKeys: function mapKeys(mapper, context) {
      var this$0 = this;
      return reify(this, this.toSeq().flip().map(function (k, v) {
        return mapper.call(context, k, v, this$0);
      }).flip());
    }
  });
  var KeyedIterablePrototype = KeyedIterable.prototype;
  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;

  KeyedIterablePrototype.__toStringMapper = function (v, k) {
    return JSON.stringify(k) + ': ' + quoteString(v);
  };

  mixin(IndexedIterable, {
    // ### Conversion to other types
    toKeyedSeq: function toKeyedSeq() {
      return new ToKeyedSequence(this, false);
    },
    // ### ES6 Collection methods (ES6 Array and Map)
    filter: function filter(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },
    findIndex: function findIndex(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },
    indexOf: function indexOf(searchValue) {
      var key = this.keyOf(searchValue);
      return key === undefined ? -1 : key;
    },
    lastIndexOf: function lastIndexOf(searchValue) {
      var key = this.lastKeyOf(searchValue);
      return key === undefined ? -1 : key;
    },
    reverse: function reverse() {
      return reify(this, reverseFactory(this, false));
    },
    slice: function slice(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },
    splice: function splice(index, removeNum
    /*, ...values*/
    ) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);

      if (numArgs === 0 || numArgs === 2 && !removeNum) {
        return this;
      } // If index is negative, it should resolve relative to the size of the
      // collection. However size may be expensive to compute if not cached, so
      // only call count() if the number is in fact negative.


      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(this, numArgs === 1 ? spliced : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum)));
    },
    // ### More collection methods
    findLastIndex: function findLastIndex(predicate, context) {
      var entry = this.findLastEntry(predicate, context);
      return entry ? entry[0] : -1;
    },
    first: function first() {
      return this.get(0);
    },
    flatten: function flatten(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },
    get: function get(index, notSetValue) {
      index = wrapIndex(this, index);
      return index < 0 || this.size === Infinity || this.size !== undefined && index > this.size ? notSetValue : this.find(function (_, key) {
        return key === index;
      }, undefined, notSetValue);
    },
    has: function has(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== undefined ? this.size === Infinity || index < this.size : this.indexOf(index) !== -1);
    },
    interpose: function interpose(separator) {
      return reify(this, interposeFactory(this, separator));
    },
    interleave: function interleave()
    /*...iterables*/
    {
      var iterables = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
      var interleaved = zipped.flatten(true);

      if (zipped.size) {
        interleaved.size = zipped.size * iterables.length;
      }

      return reify(this, interleaved);
    },
    keySeq: function keySeq() {
      return Range(0, this.size);
    },
    last: function last() {
      return this.get(-1);
    },
    skipWhile: function skipWhile(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },
    zip: function zip()
    /*, ...iterables */
    {
      var iterables = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, iterables));
    },
    zipWith: function zipWith(zipper
    /*, ...iterables */
    ) {
      var iterables = arrCopy(arguments);
      iterables[0] = this;
      return reify(this, zipWithFactory(this, zipper, iterables));
    }
  });
  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;
  mixin(SetIterable, {
    // ### ES6 Collection methods (ES6 Array and Map)
    get: function get(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },
    includes: function includes(value) {
      return this.has(value);
    },
    // ### More sequential methods
    keySeq: function keySeq() {
      return this.valueSeq();
    }
  });
  SetIterable.prototype.has = IterablePrototype.includes;
  SetIterable.prototype.contains = SetIterable.prototype.includes; // Mixin subclasses

  mixin(KeyedSeq, KeyedIterable.prototype);
  mixin(IndexedSeq, IndexedIterable.prototype);
  mixin(SetSeq, SetIterable.prototype);
  mixin(KeyedCollection, KeyedIterable.prototype);
  mixin(IndexedCollection, IndexedIterable.prototype);
  mixin(SetCollection, SetIterable.prototype); // #pragma Helper functions

  function keyMapper(v, k) {
    return k;
  }

  function entryMapper(v, k) {
    return [k, v];
  }

  function not(predicate) {
    return function () {
      return !predicate.apply(this, arguments);
    };
  }

  function neg(predicate) {
    return function () {
      return -predicate.apply(this, arguments);
    };
  }

  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  }

  function defaultZipper() {
    return arrCopy(arguments);
  }

  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }

  function hashIterable(iterable) {
    if (iterable.size === Infinity) {
      return 0;
    }

    var ordered = isOrdered(iterable);
    var keyed = isKeyed(iterable);
    var h = ordered ? 1 : 0;

    var size = iterable.__iterate(keyed ? ordered ? function (v, k) {
      h = 31 * h + hashMerge(hash(v), hash(k)) | 0;
    } : function (v, k) {
      h = h + hashMerge(hash(v), hash(k)) | 0;
    } : ordered ? function (v) {
      h = 31 * h + hash(v) | 0;
    } : function (v) {
      h = h + hash(v) | 0;
    });

    return murmurHashOfSize(size, h);
  }

  function murmurHashOfSize(size, h) {
    h = imul(h, 0xCC9E2D51);
    h = imul(h << 15 | h >>> -15, 0x1B873593);
    h = imul(h << 13 | h >>> -13, 5);
    h = (h + 0xE6546B64 | 0) ^ size;
    h = imul(h ^ h >>> 16, 0x85EBCA6B);
    h = imul(h ^ h >>> 13, 0xC2B2AE35);
    h = smi(h ^ h >>> 16);
    return h;
  }

  function hashMerge(a, b) {
    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
  }

  var Immutable = {
    Iterable: Iterable,
    Seq: Seq,
    Collection: Collection,
    Map: Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: Set,
    OrderedSet: OrderedSet,
    Record: Record,
    Range: Range,
    Repeat: Repeat,
    is: is,
    fromJS: fromJS
  };
  return Immutable;
});

/***/ }),

/***/ 14591:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _immutable = _interopRequireDefault(__webpack_require__(20842));

var _BlocklyToolbox = _interopRequireDefault(__webpack_require__(84706));

var _BlocklyWorkspace = _interopRequireDefault(__webpack_require__(5495));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var BlockPropType = _propTypes.default.shape({
  type: _propTypes.default.string,
  shadow: _propTypes.default.bool,
  fields: _propTypes.default.object,
  values: _propTypes.default.object,
  statements: _propTypes.default.object,
  next: _propTypes.default.object,
  mutation: _propTypes.default.shape({
    attributes: _propTypes.default.object,
    innerContent: _propTypes.default.string
  })
});

var categoryPropsNonRecursive = {
  type: _propTypes.default.string,
  name: _propTypes.default.string,
  custom: _propTypes.default.string,
  colour: _propTypes.default.string,
  blocks: _propTypes.default.arrayOf(BlockPropType)
};

var CategoryPropType = _propTypes.default.shape(_objectSpread(_objectSpread({}, categoryPropsNonRecursive), {}, {
  categories: _propTypes.default.arrayOf(_propTypes.default.shape(categoryPropsNonRecursive))
}));

var propTypes = {
  initialXml: _propTypes.default.string,
  workspaceConfiguration: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  wrapperDivClassName: _propTypes.default.string,
  toolboxCategories: _propTypes.default.arrayOf(CategoryPropType.isRequired),
  toolboxBlocks: _propTypes.default.arrayOf(BlockPropType.isRequired),
  xmlDidChange: _propTypes.default.func,
  workspaceDidChange: _propTypes.default.func,
  onImportXmlError: _propTypes.default.func,
  processToolboxCategory: _propTypes.default.func
};
var defaultProps = {
  initialXml: null,
  workspaceConfiguration: null,
  wrapperDivClassName: null,
  toolboxCategories: null,
  toolboxBlocks: null,
  xmlDidChange: null,
  workspaceDidChange: null,
  onImportXmlError: null,
  processToolboxCategory: null
};

var BlocklyEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(BlocklyEditor, _React$Component);

  var _super = _createSuper(BlocklyEditor);

  function BlocklyEditor() {
    var _this;

    _classCallCheck(this, BlocklyEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.toolboxDidUpdate();

      if (_this.props.xmlDidChange) {
        if (typeof console !== 'undefined') {
          // eslint-disable-next-line no-console
          console.error('Warning: xmlDidChange is deprecated and will be removed in future versions! Please use workspaceDidChange instead.');
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      if (_this.props.toolboxBlocks && !_immutable.default.fromJS(_this.props.toolboxBlocks).equals(_immutable.default.fromJS(prevProps.toolboxBlocks)) || _this.props.toolboxCategories && !_immutable.default.fromJS(_this.props.toolboxCategories).equals(_immutable.default.fromJS(prevProps.toolboxCategories))) {
        _this.toolboxDidUpdate();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toolboxDidUpdate", function () {
      var workspaceConfiguration = _this.props.workspaceConfiguration || {};

      if (_this.workspace && !workspaceConfiguration.readOnly) {
        _this.workspace.toolboxDidUpdate(_this.toolbox.getRootNode());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "xmlDidChange", function (newXml) {
      if (_this.props.xmlDidChange) {
        _this.props.xmlDidChange(newXml);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "workspaceDidChange", function (workspace) {
      if (_this.props.workspaceDidChange) {
        _this.props.workspaceDidChange(workspace);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "importFromXml", function (xml) {
      return _this.workspace.importFromXml(xml);
    });

    _defineProperty(_assertThisInitialized(_this), "resize", function () {
      _this.workspace.resize();
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var toolboxMode;

      if (_this.props.toolboxCategories) {
        toolboxMode = 'CATEGORIES';
      } else if (_this.props.toolboxBlocks) {
        toolboxMode = 'BLOCKS';
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: _this.props.wrapperDivClassName
      }, /*#__PURE__*/_react.default.createElement(_BlocklyToolbox.default, {
        categories: _immutable.default.fromJS(_this.props.toolboxCategories),
        blocks: _immutable.default.fromJS(_this.props.toolboxBlocks),
        didUpdate: _this.toolboxDidUpdate,
        processCategory: _this.props.processToolboxCategory,
        ref: function ref(toolbox) {
          _this.toolbox = toolbox;
        }
      }), /*#__PURE__*/_react.default.createElement(_BlocklyWorkspace.default, {
        ref: function ref(workspace) {
          _this.workspace = workspace;
        },
        initialXml: _this.props.initialXml,
        onImportXmlError: _this.props.onImportXmlError,
        toolboxMode: toolboxMode,
        xmlDidChange: _this.xmlDidChange,
        workspaceDidChange: _this.workspaceDidChange,
        wrapperDivClassName: _this.props.wrapperDivClassName,
        workspaceConfiguration: _this.props.workspaceConfiguration
      }));
    });

    return _this;
  }

  return BlocklyEditor;
}(_react.default.Component);

BlocklyEditor.propTypes = propTypes;
BlocklyEditor.defaultProps = defaultProps;
var _default = BlocklyEditor;
exports.default = _default;

/***/ }),

/***/ 84706:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _immutable = __webpack_require__(20842);

var _reactImmutableProptypes = _interopRequireDefault(__webpack_require__(94444));

var _BlocklyToolboxCategory = _interopRequireDefault(__webpack_require__(20223));

var _BlocklyToolboxBlock = _interopRequireDefault(__webpack_require__(6972));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var BlocklyToolbox = /*#__PURE__*/function (_React$Component) {
  _inherits(BlocklyToolbox, _React$Component);

  var _super = _createSuper(BlocklyToolbox);

  function BlocklyToolbox() {
    var _this;

    _classCallCheck(this, BlocklyToolbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.props.didUpdate();
    });

    _defineProperty(_assertThisInitialized(_this), "shouldComponentUpdate", function (nextProps) {
      return !((0, _immutable.is)(nextProps.categories, _this.props.categories) && (0, _immutable.is)(nextProps.blocks, _this.props.blocks));
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function () {
      _this.props.didUpdate();
    });

    _defineProperty(_assertThisInitialized(_this), "getRootNode", function () {
      return _this.rootNode;
    });

    _defineProperty(_assertThisInitialized(_this), "processCategory", function (category) {
      var processedCategory = category;

      if (processedCategory.has('categories')) {
        processedCategory = category.update('categories', function (subcategories) {
          return subcategories.map(_this.processCategory);
        });
      }

      if (_this.props.processCategory) {
        return _this.props.processCategory(processedCategory);
      }

      return processedCategory;
    });

    _defineProperty(_assertThisInitialized(_this), "renderCategories", function (categories) {
      return categories.map(function (category, i) {
        if (category.get('type') === 'sep') {
          return /*#__PURE__*/_react.default.createElement("sep", {
            key: "sep_".concat(i)
          });
        }

        if (category.get('type') === 'search') {
          return /*#__PURE__*/_react.default.createElement("search", {
            key: "search_".concat(i)
          });
        }

        return /*#__PURE__*/_react.default.createElement(_BlocklyToolboxCategory.default, {
          name: category.get('name'),
          custom: category.get('custom'),
          colour: category.get('colour'),
          expanded: category.get('expanded'),
          key: "category_".concat(category.get('name'), "_").concat(i),
          blocks: category.get('blocks'),
          button: category.get('button'),
          categories: category.get('categories')
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      if (_this.props.categories) {
        return /*#__PURE__*/_react.default.createElement("xml", {
          style: {
            display: 'none'
          },
          is: "div",
          ref: function ref(node) {
            _this.rootNode = node;
          }
        }, _this.renderCategories(_this.props.categories.map(_this.processCategory)));
      }

      return /*#__PURE__*/_react.default.createElement("xml", {
        style: {
          display: 'none'
        },
        is: "div",
        ref: function ref(node) {
          _this.rootNode = node;
        }
      }, _this.props.blocks.map(_BlocklyToolboxBlock.default.renderBlock));
    });

    return _this;
  }

  return BlocklyToolbox;
}(_react.default.Component);

_defineProperty(BlocklyToolbox, "propTypes", {
  categories: _reactImmutableProptypes.default.list,
  blocks: _reactImmutableProptypes.default.list,
  processCategory: _propTypes.default.func,
  didUpdate: _propTypes.default.func
});

_defineProperty(BlocklyToolbox, "defaultProps", {
  categories: null,
  blocks: null,
  processCategory: null,
  didUpdate: null
});

var _default = BlocklyToolbox;
exports.default = _default;

/***/ }),

/***/ 6972:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _reactImmutableProptypes = _interopRequireDefault(__webpack_require__(94444));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var BlocklyToolboxBlock = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(BlocklyToolboxBlock, _React$PureComponent);

  var _super = _createSuper(BlocklyToolboxBlock);

  function BlocklyToolboxBlock() {
    var _this;

    _classCallCheck(this, BlocklyToolboxBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      if (_this.props.mutation) {
        _this.props.mutation.get('attributes').forEach(function (value, attributeName) {
          _this.mutationElement.setAttribute(attributeName, value);

          return true;
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var fields = [];
      var values = [];
      var statements = [];
      var mutation = null;
      var nextBlock = null;

      if (_this.props.fields) {
        fields = _this.props.fields.map(function (fieldValue, fieldName, i) {
          return /*#__PURE__*/_react.default.createElement("field", {
            name: fieldName,
            key: "field_".concat(fieldName, "_").concat(i),
            is: "div"
          }, fieldValue);
        }).valueSeq();
      }

      if (_this.props.values) {
        values = _this.props.values.map(function (valueBlock, valueName, i) {
          return /*#__PURE__*/_react.default.createElement("value", {
            name: valueName,
            key: "value_".concat(valueName, "_").concat(i),
            is: "div"
          }, BlocklyToolboxBlock.renderBlock(valueBlock));
        }).valueSeq();
      }

      if (_this.props.statements) {
        statements = _this.props.statements.map(function (statementBlock, statementName, i) {
          return /*#__PURE__*/_react.default.createElement("statement", {
            name: statementName,
            key: "statement_".concat(statementName, "_").concat(i),
            is: "div"
          }, BlocklyToolboxBlock.renderBlock(statementBlock));
        }).valueSeq();
      }

      if (_this.props.mutation) {
        mutation = /*#__PURE__*/_react.default.createElement("mutation", {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: {
            __html: _this.props.mutation.get('innerContent')
          },
          ref: function ref(mutationElement) {
            _this.mutationElement = mutationElement;
          },
          is: "div"
        });
      }

      if (_this.props.next) {
        nextBlock = /*#__PURE__*/_react.default.createElement("next", {
          is: "div"
        }, BlocklyToolboxBlock.renderBlock(_this.props.next));
      }

      if (_this.props.shadow) {
        return /*#__PURE__*/_react.default.createElement("shadow", {
          type: _this.props.type,
          is: "div"
        }, mutation, fields, values, statements, nextBlock);
      }

      return /*#__PURE__*/_react.default.createElement("block", {
        type: _this.props.type,
        is: "div"
      }, mutation, fields, values, statements, nextBlock);
    });

    return _this;
  }

  return BlocklyToolboxBlock;
}(_react.default.PureComponent);

_defineProperty(BlocklyToolboxBlock, "propTypes", {
  type: _propTypes.default.string.isRequired,
  shadow: _propTypes.default.bool,
  fields: _reactImmutableProptypes.default.map,
  values: _reactImmutableProptypes.default.map,
  statements: _reactImmutableProptypes.default.map,
  next: _reactImmutableProptypes.default.map,
  mutation: _reactImmutableProptypes.default.mapContains({
    attributes: _reactImmutableProptypes.default.map,
    innerContent: _propTypes.default.string
  })
});

_defineProperty(BlocklyToolboxBlock, "defaultProps", {
  shadow: false,
  fields: null,
  values: null,
  statements: null,
  next: null,
  mutation: null
});

_defineProperty(BlocklyToolboxBlock, "renderBlock", function (block, key) {
  return /*#__PURE__*/_react.default.createElement(BlocklyToolboxBlock, {
    type: block.get('type'),
    key: key,
    fields: block.get('fields'),
    values: block.get('values'),
    statements: block.get('statements'),
    mutation: block.get('mutation'),
    shadow: block.get('shadow'),
    next: block.get('next')
  });
});

var _default = BlocklyToolboxBlock;
exports.default = _default;

/***/ }),

/***/ 46146:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var BlocklyToolboxButton = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(BlocklyToolboxButton, _React$PureComponent);

  var _super = _createSuper(BlocklyToolboxButton);

  function BlocklyToolboxButton() {
    var _this;

    _classCallCheck(this, BlocklyToolboxButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return /*#__PURE__*/_react.default.createElement("button", {
        text: _this.props.text,
        callbackkey: _this.props.callbackKey
      });
    });

    return _this;
  }

  return BlocklyToolboxButton;
}(_react.default.PureComponent);

_defineProperty(BlocklyToolboxButton, "propTypes", {
  text: _propTypes.default.string.isRequired,
  callbackKey: _propTypes.default.string.isRequired
});

_defineProperty(BlocklyToolboxButton, "renderButton", function (button, key) {
  return /*#__PURE__*/_react.default.createElement(BlocklyToolboxButton, {
    key: key,
    text: button.get('text'),
    callbackKey: button.get('callbackKey')
  });
});

var _default = BlocklyToolboxButton;
exports.default = _default;

/***/ }),

/***/ 20223:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _reactImmutableProptypes = _interopRequireDefault(__webpack_require__(94444));

var _BlocklyToolboxBlock = _interopRequireDefault(__webpack_require__(6972));

var _BlocklyToolboxButton = _interopRequireDefault(__webpack_require__(46146));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var BlocklyToolboxCategory = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(BlocklyToolboxCategory, _React$PureComponent);

  var _super = _createSuper(BlocklyToolboxCategory);

  function BlocklyToolboxCategory() {
    var _this;

    _classCallCheck(this, BlocklyToolboxCategory);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var subcategories = (_this.props.categories || []).map(BlocklyToolboxCategory.renderCategory);
      var blocks = (_this.props.blocks || []).map(_BlocklyToolboxBlock.default.renderBlock);
      var buttons = (_this.props.button || []).map(_BlocklyToolboxButton.default.renderButton);
      return /*#__PURE__*/_react.default.createElement("category", {
        name: _this.props.name,
        custom: _this.props.custom,
        colour: _this.props.colour,
        expanded: _this.props.expanded,
        is: "div"
      }, buttons, blocks, subcategories);
    });

    return _this;
  }

  return BlocklyToolboxCategory;
}(_react.default.PureComponent);

_defineProperty(BlocklyToolboxCategory, "propTypes", {
  name: _propTypes.default.string,
  custom: _propTypes.default.string,
  colour: _propTypes.default.string,
  expanded: _propTypes.default.string,
  categories: _reactImmutableProptypes.default.list,
  blocks: _reactImmutableProptypes.default.list,
  button: _reactImmutableProptypes.default.list
});

_defineProperty(BlocklyToolboxCategory, "defaultProps", {
  name: null,
  custom: null,
  colour: null,
  expanded: null,
  categories: null,
  blocks: null,
  button: null
});

_defineProperty(BlocklyToolboxCategory, "renderCategory", function (category, key) {
  if (category.get('type') === 'sep') {
    return /*#__PURE__*/_react.default.createElement("sep", {
      key: key
    });
  }

  if (category.get('type') === 'search') {
    return /*#__PURE__*/_react.default.createElement("search", {
      key: key
    });
  }

  return /*#__PURE__*/_react.default.createElement(BlocklyToolboxCategory, {
    name: category.get('name'),
    custom: category.get('custom'),
    colour: category.get('colour'),
    expanded: category.get('expanded'),
    key: key,
    blocks: category.get('blocks'),
    button: category.get('button'),
    categories: category.get('categories')
  });
});

var _default = BlocklyToolboxCategory;
exports.default = _default;

/***/ }),

/***/ 5495:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _blockly = _interopRequireDefault(__webpack_require__(74640));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function debounce(func, wait) {
  var timeout;
  return function debouncedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;

    var later = function later() {
      timeout = null;
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

var BlocklyWorkspace = /*#__PURE__*/function (_React$Component) {
  _inherits(BlocklyWorkspace, _React$Component);

  var _super = _createSuper(BlocklyWorkspace);

  function BlocklyWorkspace(props) {
    var _this;

    _classCallCheck(this, BlocklyWorkspace);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      // TODO figure out how to use setState here without breaking the toolbox when switching tabs
      _this.state.workspace = _blockly.default.inject(_this.editorDiv, _objectSpread(_objectSpread({}, _this.props.workspaceConfiguration), {}, {
        toolbox: _this.dummyToolbox
      }));

      if (_this.state.xml) {
        if (_this.importFromXml(_this.state.xml)) {
          _this.xmlDidChange();
        } else {
          _this.setState({
            xml: null
          }, _this.xmlDidChange);
        }
      }

      _this.state.workspace.addChangeListener(_this.workspaceDidChange);

      _this.state.workspace.addChangeListener(debounce(function () {
        var newXml = _blockly.default.Xml.domToText(_blockly.default.Xml.workspaceToDom(_this.state.workspace));

        if (newXml === _this.state.xml) {
          return;
        }

        _this.setState({
          xml: newXml
        }, _this.xmlDidChange);
      }, 200));
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillReceiveProps", function (newProps) {
      if (_this.props.initialXml !== newProps.initialXml) {
        _this.setState({
          xml: newProps.initialXml
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "shouldComponentUpdate", function () {
      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      if (_this.state.workspace) {
        _this.state.workspace.dispose();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "importFromXml", function (xml) {
      try {
        _blockly.default.Xml.domToWorkspace(_blockly.default.Xml.textToDom(xml), _this.state.workspace);

        return true;
      } catch (e) {
        if (_this.props.onImportXmlError) {
          _this.props.onImportXmlError(e);
        }

        return false;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "xmlDidChange", function () {
      if (_this.props.xmlDidChange) {
        _this.props.xmlDidChange(_this.state.xml);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "workspaceDidChange", function () {
      if (_this.props.workspaceDidChange) {
        _this.props.workspaceDidChange(_this.state.workspace);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toolboxDidUpdate", function (toolboxNode) {
      if (toolboxNode && _this.state.workspace) {
        _this.state.workspace.updateToolbox(toolboxNode);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resize", function () {
      _blockly.default.svgResize(_this.state.workspace);
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      // We have to fool Blockly into setting up a toolbox with categories initially;
      // otherwise it will refuse to do so after we inject the real categories into it.
      var dummyToolboxContent;

      if (_this.props.toolboxMode === 'CATEGORIES') {
        dummyToolboxContent = /*#__PURE__*/_react.default.createElement("category", {
          name: "Dummy toolbox",
          colour: "",
          is: "div"
        });
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: _this.props.wrapperDivClassName
      }, /*#__PURE__*/_react.default.createElement("xml", {
        style: {
          display: 'none'
        },
        ref: function ref(dummyToolbox) {
          _this.dummyToolbox = dummyToolbox;
        },
        is: "div"
      }, dummyToolboxContent), /*#__PURE__*/_react.default.createElement("div", {
        className: _this.props.wrapperDivClassName,
        ref: function ref(editorDiv) {
          _this.editorDiv = editorDiv;
        }
      }));
    });

    _this.state = {
      workspace: null,
      xml: _this.props.initialXml
    };
    return _this;
  }

  return BlocklyWorkspace;
}(_react.default.Component);

_defineProperty(BlocklyWorkspace, "propTypes", {
  initialXml: _propTypes.default.string,
  workspaceConfiguration: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  wrapperDivClassName: _propTypes.default.string,
  xmlDidChange: _propTypes.default.func,
  workspaceDidChange: _propTypes.default.func,
  onImportXmlError: _propTypes.default.func,
  toolboxMode: _propTypes.default.oneOf(['CATEGORIES', 'BLOCKS'])
});

_defineProperty(BlocklyWorkspace, "defaultProps", {
  initialXml: null,
  workspaceConfiguration: null,
  wrapperDivClassName: null,
  xmlDidChange: null,
  workspaceDidChange: null,
  onImportXmlError: null,
  toolboxMode: 'BLOCKS'
});

var _default = BlocklyWorkspace;
exports.default = _default;

/***/ }),

/***/ 691:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _BlocklyEditor.default;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _BlocklyToolbox.default;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _BlocklyToolboxBlock.default;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _BlocklyToolboxCategory.default;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _BlocklyWorkspace.default;
  }
});
exports.ZP = void 0;

var _BlocklyEditor = _interopRequireDefault(__webpack_require__(14591));

var _BlocklyToolbox = _interopRequireDefault(__webpack_require__(84706));

var _BlocklyToolboxBlock = _interopRequireDefault(__webpack_require__(6972));

var _BlocklyToolboxCategory = _interopRequireDefault(__webpack_require__(20223));

var _BlocklyWorkspace = _interopRequireDefault(__webpack_require__(5495));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _BlocklyEditor.default;
exports.ZP = _default;

/***/ }),

/***/ 94444:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * This is a straight rip-off of the React.js ReactPropTypes.js proptype validators,
 * modified to make it possible to validate Immutable.js data.
 *     ImmutableTypes.listOf is patterned after React.PropTypes.arrayOf, but for Immutable.List
 *     ImmutableTypes.shape  is based on React.PropTypes.shape, but for any Immutable.Iterable
 */


var Immutable = __webpack_require__(20842);

var ANONYMOUS = "<<anonymous>>";
var ImmutablePropTypes;

if (false) {} else {
  var productionTypeChecker = function productionTypeChecker() {
    invariant(false, "ImmutablePropTypes type checking code is stripped in production.");
  };

  productionTypeChecker.isRequired = productionTypeChecker;

  var getProductionTypeChecker = function getProductionTypeChecker() {
    return productionTypeChecker;
  };

  ImmutablePropTypes = {
    listOf: getProductionTypeChecker,
    mapOf: getProductionTypeChecker,
    orderedMapOf: getProductionTypeChecker,
    setOf: getProductionTypeChecker,
    orderedSetOf: getProductionTypeChecker,
    stackOf: getProductionTypeChecker,
    iterableOf: getProductionTypeChecker,
    recordOf: getProductionTypeChecker,
    shape: getProductionTypeChecker,
    contains: getProductionTypeChecker,
    mapContains: getProductionTypeChecker,
    orderedMapContains: getProductionTypeChecker,
    // Primitive Types
    list: productionTypeChecker,
    map: productionTypeChecker,
    orderedMap: productionTypeChecker,
    set: productionTypeChecker,
    orderedSet: productionTypeChecker,
    stack: productionTypeChecker,
    seq: productionTypeChecker,
    record: productionTypeChecker,
    iterable: productionTypeChecker
  };
}

ImmutablePropTypes.iterable.indexed = createIterableSubclassTypeChecker("Indexed", Immutable.Iterable.isIndexed);
ImmutablePropTypes.iterable.keyed = createIterableSubclassTypeChecker("Keyed", Immutable.Iterable.isKeyed);

function getPropType(propValue) {
  var propType = typeof propValue;

  if (Array.isArray(propValue)) {
    return "array";
  }

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }

  if (propValue instanceof Immutable.Iterable) {
    return "Immutable." + propValue.toSource().split(" ")[0];
  }

  return propType;
}

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    propFullName = propFullName || propName;
    componentName = componentName || ANONYMOUS;

    if (props[propName] == null) {
      var locationName = location;

      if (isRequired) {
        return new Error("Required " + locationName + " `" + propFullName + "` was not specified in " + ("`" + componentName + "`."));
      }
    } else {
      return validate.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
}

function createImmutableTypeChecker(immutableClassName, immutableClassTypeValidator) {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];

    if (!immutableClassTypeValidator(propValue)) {
      var propType = getPropType(propValue);
      return new Error("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `" + immutableClassName + "`."));
    }

    return null;
  }

  return createChainableTypeChecker(validate);
}

function createIterableSubclassTypeChecker(subclassName, validator) {
  return createImmutableTypeChecker("Iterable." + subclassName, function (propValue) {
    return Immutable.Iterable.isIterable(propValue) && validator(propValue);
  });
}

function createIterableTypeChecker(typeChecker, immutableClassName, immutableClassTypeValidator) {
  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];

    if (!immutableClassTypeValidator(propValue)) {
      var locationName = location;
      var propType = getPropType(propValue);
      return new Error("Invalid " + locationName + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an Immutable.js " + immutableClassName + "."));
    }

    if (typeof typeChecker !== "function") {
      return new Error("Invalid typeChecker supplied to `" + componentName + "` " + ("for propType `" + propFullName + "`, expected a function."));
    }

    var propValues = propValue.valueSeq().toArray();

    for (var i = 0, len = propValues.length; i < len; i++) {
      var error = typeChecker.apply(undefined, [propValues, i, componentName, location, "" + propFullName + "[" + i + "]"].concat(rest));

      if (error instanceof Error) {
        return error;
      }
    }
  }

  return createChainableTypeChecker(validate);
}

function createKeysTypeChecker(typeChecker) {
  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];

    if (typeof typeChecker !== "function") {
      return new Error("Invalid keysTypeChecker (optional second argument) supplied to `" + componentName + "` " + ("for propType `" + propFullName + "`, expected a function."));
    }

    var keys = propValue.keySeq().toArray();

    for (var i = 0, len = keys.length; i < len; i++) {
      var error = typeChecker.apply(undefined, [keys, i, componentName, location, "" + propFullName + " -> key(" + keys[i] + ")"].concat(rest));

      if (error instanceof Error) {
        return error;
      }
    }
  }

  return createChainableTypeChecker(validate);
}

function createListOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "List", Immutable.List.isList);
}

function createMapOfTypeCheckerFactory(valuesTypeChecker, keysTypeChecker, immutableClassName, immutableClassTypeValidator) {
  function validate() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return createIterableTypeChecker(valuesTypeChecker, immutableClassName, immutableClassTypeValidator).apply(undefined, args) || keysTypeChecker && createKeysTypeChecker(keysTypeChecker).apply(undefined, args);
  }

  return createChainableTypeChecker(validate);
}

function createMapOfTypeChecker(valuesTypeChecker, keysTypeChecker) {
  return createMapOfTypeCheckerFactory(valuesTypeChecker, keysTypeChecker, "Map", Immutable.Map.isMap);
}

function createOrderedMapOfTypeChecker(valuesTypeChecker, keysTypeChecker) {
  return createMapOfTypeCheckerFactory(valuesTypeChecker, keysTypeChecker, "OrderedMap", Immutable.OrderedMap.isOrderedMap);
}

function createSetOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "Set", Immutable.Set.isSet);
}

function createOrderedSetOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "OrderedSet", Immutable.OrderedSet.isOrderedSet);
}

function createStackOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "Stack", Immutable.Stack.isStack);
}

function createIterableOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "Iterable", Immutable.Iterable.isIterable);
}

function createRecordOfTypeChecker(recordKeys) {
  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];

    if (!(propValue instanceof Immutable.Record)) {
      var propType = getPropType(propValue);
      var locationName = location;
      return new Error("Invalid " + locationName + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected an Immutable.js Record."));
    }

    for (var key in recordKeys) {
      var checker = recordKeys[key];

      if (!checker) {
        continue;
      }

      var mutablePropValue = propValue.toObject();
      var error = checker.apply(undefined, [mutablePropValue, key, componentName, location, "" + propFullName + "." + key].concat(rest));

      if (error) {
        return error;
      }
    }
  }

  return createChainableTypeChecker(validate);
} // there is some irony in the fact that shapeTypes is a standard hash and not an immutable collection


function createShapeTypeChecker(shapeTypes) {
  var immutableClassName = arguments[1] === undefined ? "Iterable" : arguments[1];
  var immutableClassTypeValidator = arguments[2] === undefined ? Immutable.Iterable.isIterable : arguments[2];

  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];

    if (!immutableClassTypeValidator(propValue)) {
      var propType = getPropType(propValue);
      var locationName = location;
      return new Error("Invalid " + locationName + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected an Immutable.js " + immutableClassName + "."));
    }

    var mutablePropValue = propValue.toObject();

    for (var key in shapeTypes) {
      var checker = shapeTypes[key];

      if (!checker) {
        continue;
      }

      var error = checker.apply(undefined, [mutablePropValue, key, componentName, location, "" + propFullName + "." + key].concat(rest));

      if (error) {
        return error;
      }
    }
  }

  return createChainableTypeChecker(validate);
}

function createShapeChecker(shapeTypes) {
  return createShapeTypeChecker(shapeTypes);
}

function createMapContainsChecker(shapeTypes) {
  return createShapeTypeChecker(shapeTypes, "Map", Immutable.Map.isMap);
}

function createOrderedMapContainsChecker(shapeTypes) {
  return createShapeTypeChecker(shapeTypes, "OrderedMap", Immutable.OrderedMap.isOrderedMap);
}

module.exports = ImmutablePropTypes;

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

/***/ 35545:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js
var NoSsr = __webpack_require__(42862);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(21258);
// EXTERNAL MODULE: ./node_modules/react-blockly/dist/index.js
var dist = __webpack_require__(691);
// EXTERNAL MODULE: ./node_modules/blockly/index.js
var blockly = __webpack_require__(74640);
var blockly_default = /*#__PURE__*/__webpack_require__.n(blockly);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(6610);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(5991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js + 1 modules
var get = __webpack_require__(66213);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(10379);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(46070);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(77608);
// EXTERNAL MODULE: ./node_modules/blockly/core-browser.js
var core_browser = __webpack_require__(90888);
var core_browser_default = /*#__PURE__*/__webpack_require__.n(core_browser);
;// CONCATENATED MODULE: ./node_modules/@blockly/field-slider/src/field_slider.js







function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Number slider input field.
 * @author kozbial@google.com (Monica Kozbial)
 */

/**
 * Slider field.
 */

var FieldSlider = /*#__PURE__*/function (_Blockly$FieldNumber) {
  (0,inherits/* default */.Z)(FieldSlider, _Blockly$FieldNumber);

  var _super = _createSuper(FieldSlider);

  /**
   * Class for an number slider field.
   * @param {string|number=} opt_value The initial value of the field. Should
   *    cast to a number. Defaults to 0.
   * @param {?(string|number)=} opt_min Minimum value.
   * @param {?(string|number)=} opt_max Maximum value.
   * @param {?(string|number)=} opt_precision Precision for value.
   * @param {?Function=} opt_validator A function that is called to validate
   *    changes to the field's value. Takes in a number & returns a validated
   *    number, or null to abort the change.
   * @param {Object=} opt_config A map of options used to configure the field.
   *    See the [field creation documentation]{@link https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/number#creation}
   *    for a list of properties this parameter supports.
   * @extends {Blockly.FieldNumber}
   * @constructor
   */
  function FieldSlider(opt_value, opt_min, opt_max, opt_precision, opt_validator, opt_config) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, FieldSlider);

    _this = _super.call(this, opt_value, opt_min, opt_max, opt_precision, opt_validator, opt_config);
    /**
     * Array holding info needed to unbind events.
     * Used for disposing.
     * Ex: [[node, name, func], [node, name, func]].
     * @type {!Array.<Array<?>>}
     * @private
     */

    _this.boundEvents_ = [];
    /**
     * The HTML range input element.
     * @type {?HTMLInputElement}
     * @private
     */

    _this.sliderInput_ = null;
    return _this;
  }
  /**
   * Constructs a FieldSlider from a JSON arg object.
   * @param {!Object} options A JSON object with options (value, min, max, and
   *                          precision).
   * @return {!FieldSlider} The new field instance.
   * @package
   * @nocollapse
   */


  (0,createClass/* default */.Z)(FieldSlider, [{
    key: "showEditor_",
    value:
    /**
     * Show the inline free-text editor on top of the text along with the slider
     *    editor.
     * @param {Event=} opt_e Optional mouse event that triggered the field to
     *     open, or undefined if triggered programmatically.
     * @param {boolean=} _opt_quietInput Quiet input.
     * @protected
     * @override
     */
    function showEditor_(opt_e, _opt_quietInput) {
      // Mobile browsers have issues with in-line textareas (focus & keyboards).
      var noFocus = core_browser.utils.userAgent.MOBILE || core_browser.utils.userAgent.ANDROID || core_browser.utils.userAgent.IPAD;

      (0,get/* default */.Z)((0,getPrototypeOf/* default */.Z)(FieldSlider.prototype), "showEditor_", this).call(this, opt_e, noFocus); // Build the DOM.


      var editor = this.dropdownCreate_();
      core_browser.DropDownDiv.getContentDiv().appendChild(editor);
      core_browser.DropDownDiv.setColour(this.sourceBlock_.style.colourPrimary, this.sourceBlock_.style.colourTertiary);
      core_browser.DropDownDiv.showPositionedByField(this, this.dropdownDispose_.bind(this));
    }
    /**
     * Updates the slider when the field rerenders.
     * @protected
     * @override
     */

  }, {
    key: "render_",
    value: function render_() {
      (0,get/* default */.Z)((0,getPrototypeOf/* default */.Z)(FieldSlider.prototype), "render_", this).call(this);

      this.updateSlider_();
    }
    /**
     * Creates the slider editor and add event listeners.
     * @return {!Element} The newly created slider.
     * @private
     */

  }, {
    key: "dropdownCreate_",
    value: function dropdownCreate_() {
      var wrapper = document.createElement('div');
      wrapper.className = 'fieldSliderContainer';
      var sliderInput = document.createElement('input');
      sliderInput.setAttribute('type', 'range');
      sliderInput.setAttribute('min', this.min_);
      sliderInput.setAttribute('max', this.max_);
      sliderInput.setAttribute('step', this.precision_);
      sliderInput.setAttribute('value', this.getValue());
      sliderInput.className = 'fieldSlider';
      wrapper.appendChild(sliderInput);
      this.sliderInput_ = sliderInput;
      this.boundEvents_.push(core_browser.bindEventWithChecks_(sliderInput, 'input', this, this.onSliderChange_));
      return wrapper;
    }
    /**
     * Disposes of events belonging to the slider editor.
     * @private
     */

  }, {
    key: "dropdownDispose_",
    value: function dropdownDispose_() {
      var _iterator = _createForOfIteratorHelper(this.boundEvents_),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var event = _step.value;
          core_browser.unbindEvent_(event);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.sliderInput_ = null;
    }
    /**
     * Sets the text to match the slider's position.
     * @private
     */

  }, {
    key: "onSliderChange_",
    value: function onSliderChange_() {
      this.setEditorValue_(this.sliderInput_.value);
    }
    /**
     * Updates the slider when the field rerenders.
     * @private
     */

  }, {
    key: "updateSlider_",
    value: function updateSlider_() {
      if (!this.sliderInput_) {
        return;
      }

      this.sliderInput_.setAttribute('value', this.getValue());
    }
  }], [{
    key: "fromJson",
    value: function fromJson(options) {
      return new FieldSlider(options['value'], undefined, undefined, undefined, undefined, options);
    }
  }]);

  return FieldSlider;
}(core_browser.FieldNumber);
core_browser.fieldRegistry.register('field_slider', FieldSlider);
/**
 * CSS for slider field.
 */

core_browser.Css.register([
/* eslint-disable indent */
".fieldSliderContainer {\n      align-items: center;\n      display: flex;\n      height: 32px;\n      justify-content: center;\n      width: 150px;\n    }\n    .fieldSlider {\n      -webkit-appearance: none;\n      background: transparent; /* override white in chrome */\n      margin: 4px;\n      padding: 0;\n      width: 100%;\n    }\n    .fieldSlider:focus {\n      outline: none;\n    }\n    /* Webkit */\n    .fieldSlider::-webkit-slider-runnable-track {\n      background: #ddd;\n      border-radius: 5px;\n      height: 10px;\n    }\n    .fieldSlider::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      background: #fff;\n      border-radius: 50%;\n      box-shadow: 0 0 0 4px rgba(255,255,255,.15);\n      cursor: pointer;\n      height: 24px;\n      margin-top: -7px;\n      width: 24px;\n    }\n    /* Firefox */\n    .fieldSlider::-moz-range-track {\n      background: #ddd;\n      border-radius: 5px;\n      height: 10px;\n    }\n    .fieldSlider::-moz-range-thumb {\n      background: #fff;\n      border: none;\n      border-radius: 50%;\n      box-shadow: 0 0 0 4px rgba(255,255,255,.15);\n      cursor: pointer;\n      height: 24px;\n      width: 24px;\n    }\n    .fieldSlider::-moz-focus-outer {\n      /* override the focus border style */\n      border: 0;\n    }\n    /* IE */\n    .fieldSlider::-ms-track {\n      /* IE wont let the thumb overflow the track, so fake it */\n      background: transparent;\n      border-color: transparent;\n      border-width: 15px 0;\n      /* remove default tick marks */\n      color: transparent;\n      height: 10px;\n      width: 100%;\n      margin: -4px 0;\n    }\n    .fieldSlider::-ms-fill-lower  {\n      background: #ddd;\n      border-radius: 5px;\n    }\n    .fieldSlider::-ms-fill-upper  {\n      background: #ddd;\n      border-radius: 5px;\n    }\n    .fieldSlider::-ms-thumb {\n      background: #fff;\n      border: none;\n      border-radius: 50%;\n      box-shadow: 0 0 0 4px rgba(255,255,255,.15);\n      cursor: pointer;\n      height: 24px;\n      width: 24px;\n    }"
/* eslint-enable indent */
]);
;// CONCATENATED MODULE: ./node_modules/@blockly/field-slider/src/index.js
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

;// CONCATENATED MODULE: ./node_modules/@blockly/block-dynamic-connection/src/insertion_marker_manager_monkey_patch.js
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Overrides methods on Blockly.InsertionMarkerManager to
 * allow blocks to hook in dynamic functionality when they have pending
 * connections.
 * @author anjali@code.org (Anjali Pal)
 */


core_browser.InsertionMarkerManager.prototype.update = function (dxy, deleteArea) {
  var candidate = this.getCandidate_(dxy);
  this.wouldDeleteBlock_ = this.shouldDelete_(candidate, deleteArea);
  var shouldUpdate = this.wouldDeleteBlock_ || this.shouldUpdatePreviews_(candidate, dxy);

  if (shouldUpdate) {
    // Begin monkey patch
    if (candidate.closest && candidate.closest.sourceBlock_.onPendingConnection) {
      candidate.closest.sourceBlock_.onPendingConnection(candidate.closest);

      if (!this.pendingBlocks) {
        this.pendingBlocks = new Set();
      }

      this.pendingBlocks.add(candidate.closest.sourceBlock_);
    } // End monkey patch
    // Don't fire events for insertion marker creation or movement.


    core_browser.Events.disable();
    this.maybeHidePreview_(candidate);
    this.maybeShowPreview_(candidate);
    core_browser.Events.enable();
  }
};

var oldDispose = core_browser.InsertionMarkerManager.prototype.dispose;

core_browser.InsertionMarkerManager.prototype.dispose = function () {
  if (this.pendingBlocks) {
    this.pendingBlocks.forEach(function (block) {
      if (block.finalizeConnections) {
        block.finalizeConnections();
      }
    });
  }

  oldDispose.call(this);
};
;// CONCATENATED MODULE: ./node_modules/@blockly/block-dynamic-connection/src/dynamic_if.js
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Defines a version of the if block with dyanmic
 *     inputs that appear when a block is dragged over inputs on the block.
 */

core_browser.Blocks.dynamic_if = {
  /**
   * Counter for the next input to add to this block.
   * @type {number}
   */
  inputCounter: 1,

  /**
   * Minimum number of inputs for this block.
   * @type {number}
   */
  minInputs: 1,

  /**
   * Block for if/elseif/else statements. Must have one if input.
   * Can have any number of elseif inputs and optionally one else input.
   * @this {Blockly.Block}
   */
  init: function init() {
    this.setHelpUrl(core_browser.Msg.CONTROLS_IF_HELPURL);
    this.setStyle('logic_blocks');
    this.appendValueInput('IF0').setCheck('Boolean').appendField(core_browser.Msg.CONTROLS_IF_MSG_IF, 'if');
    this.appendStatementInput('DO0').appendField(core_browser.Msg.CONTROLS_IF_MSG_THEN);
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setTooltip(core_browser.Msg.LISTS_CREATE_WITH_TOOLTIP);
  },

  /**
   * Create XML to represent if/elseif/else inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function mutationToDom() {
    var container = core_browser.utils.xml.createElement('mutation');
    var inputNames = this.inputList.filter(function (input) {
      return input.name.includes('IF');
    }).map(function (input) {
      return input.name.replace('IF', '');
    }).join(',');
    container.setAttribute('inputs', inputNames);
    var hasElse = !!this.getInput('ELSE');
    container.setAttribute('else', hasElse);
    container.setAttribute('next', this.inputCounter);
    return container;
  },

  /**
   * Parse XML to restore the inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function domToMutation(xmlElement) {
    var inputs = xmlElement.getAttribute('inputs');

    if (inputs) {
      var inputNumbers = inputs.split(',');

      if (this.getInput('IF0')) {
        this.removeInput('IF0');
      }

      if (this.getInput('DO0')) {
        this.removeInput('DO0');
      }

      var first = inputNumbers[0];
      this.appendValueInput('IF' + first).setCheck('Boolean').appendField(core_browser.Msg.CONTROLS_IF_MSG_IF, 'if');
      this.appendStatementInput('DO' + first).appendField(core_browser.Msg.CONTROLS_IF_MSG_THEN);

      for (var i = 1; i < inputNumbers.length; i++) {
        this.appendValueInput('IF' + inputNumbers[i]).setCheck('Boolean').appendField(core_browser.Msg.CONTROLS_IF_MSG_ELSEIF, 'elseif');
        this.appendStatementInput('DO' + inputNumbers[i]).appendField(core_browser.Msg.CONTROLS_IF_MSG_THEN);
      }
    }

    var hasElse = xmlElement.getAttribute('else');

    if (hasElse == 'true') {
      this.appendStatementInput('ELSE').appendField(core_browser.Msg.CONTROLS_IF_MSG_ELSE, 'else');
    }

    var next = parseInt(xmlElement.getAttribute('next'));
    this.inputCounter = next;
  },

  /**
   * Finds the index of a connection. Used to determine where in the block to
   * insert new inputs.
   * @param {!Blockly.Connection} connection A connection on this block.
   * @return {?number} The index of the connection in the this.inputList.
   */
  findInputIndexForConnection: function findInputIndexForConnection(connection) {
    for (var i = 0; i < this.inputList.length; i++) {
      var input = this.inputList[i];

      if (input.connection == connection) {
        return i;
      }
    }

    return null;
  },

  /**
   * Inserts a boolean value input and statement input at the specified index.
   * @param {number} index Index of the input before which to add new inputs.
   */
  insertElseIf: function insertElseIf(index) {
    var caseNumber = this.inputCounter;
    this.appendValueInput('IF' + caseNumber).setCheck('Boolean').appendField(core_browser.Msg.CONTROLS_IF_MSG_ELSEIF, 'elseif');
    this.appendStatementInput('DO' + caseNumber).appendField(core_browser.Msg.CONTROLS_IF_MSG_THEN);
    this.moveInputBefore('IF' + caseNumber, this.inputList[index].name);
    this.moveInputBefore('DO' + caseNumber, this.inputList[index + 1].name);
    this.inputCounter++;
  },

  /**
   * Called when a block is dragged over one of the connections on this block.
   * @param {!Blockly.Connection} connection The connection on this block that
   * has a pending connection.
   */
  onPendingConnection: function onPendingConnection(connection) {
    if (connection.type === core_browser.NEXT_STATEMENT && !this.getInput('ELSE')) {
      this.appendStatementInput('ELSE').appendField(core_browser.Msg.CONTROLS_IF_MSG_ELSE, 'else');
    }

    var inputIndex = this.findInputIndexForConnection(connection);

    if (inputIndex === null) {
      return;
    }

    var input = this.inputList[inputIndex];

    if (connection.targetConnection && input.name.includes('IF')) {
      var nextIfInput = this.inputList[inputIndex + 2];

      if (!nextIfInput || nextIfInput.name == 'ELSE') {
        this.insertElseIf(inputIndex + 2);
      } else {
        var nextIfConnection = nextIfInput && nextIfInput.connection.targetConnection;

        if (nextIfConnection && !nextIfConnection.sourceBlock_.isInsertionMarker()) {
          this.insertElseIf(inputIndex + 2);
        }
      }
    }
  },

  /**
   * Called when a block drag ends if the dragged block had a pending connection
   * with this block.
   */
  finalizeConnections: function finalizeConnections() {
    var _this = this;

    var toRemove = []; // Remove Else If inputs if neither the if nor the do has a connected block.

    for (var i = 2; i < this.inputList.length - 1; i += 2) {
      var ifConnection = this.inputList[i];
      var doConnection = this.inputList[i + 1];

      if (!ifConnection.connection.targetConnection && !doConnection.connection.targetConnection) {
        toRemove.push(ifConnection.name);
        toRemove.push(doConnection.name);
      }
    }

    toRemove.forEach(function (input) {
      return _this.removeInput(input);
    }); // Remove Else input if it doesn't have a connected block.

    var elseInput = this.getInput('ELSE');

    if (elseInput && !elseInput.connection.targetConnection) {
      this.removeInput(elseInput.name);
    } // Remove the If input if it is empty and there is at least one Else If


    if (this.inputList.length > 2) {
      var ifInput = this.inputList[0];
      var doInput = this.inputList[1];
      var nextInput = this.inputList[2];

      if (nextInput.name.includes('IF') && !ifInput.connection.targetConnection && !doInput.connection.targetConnection) {
        this.removeInput(ifInput.name);
        this.removeInput(doInput.name);
        nextInput.removeField('elseif');
        nextInput.appendField(core_browser.Msg.CONTROLS_IF_MSG_IF, 'if');
      }
    }
  }
};
;// CONCATENATED MODULE: ./node_modules/@blockly/block-dynamic-connection/src/dynamic_text_join.js
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Defines a version of the text_join block with dyanmic
 *    inputs that appear when a block is dragged over inputs on the block.
 */

core_browser.Blocks.dynamic_text_join = {
  /**
   * Counter for the next input to add to this block.
   * @type {number}
   */
  inputCounter: 2,

  /**
   * Minimum number of inputs for this block.
   * @type {number}
   */
  minInputs: 2,

  /**
   * Block for concatenating any number of strings.
   * @this {Blockly.Block}
   */
  init: function init() {
    this.setHelpUrl(core_browser.Msg.TEXT_JOIN_HELPURL);
    this.setStyle('text_blocks');
    this.appendValueInput('ADD0').appendField(core_browser.Msg.TEXT_JOIN_TITLE_CREATEWITH);
    this.appendValueInput('ADD1');
    this.setOutput(true, 'String');
    this.setTooltip(core_browser.Msg.TEXT_JOIN_TOOLTIP);
  },

  /**
   * Create XML to represent number of text inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function mutationToDom() {
    var container = core_browser.utils.xml.createElement('mutation');
    var inputNames = this.inputList.map(function (input) {
      return input.name;
    }).join(',');
    container.setAttribute('inputs', inputNames);
    container.setAttribute('next', this.inputCounter);
    return container;
  },

  /**
   * Parse XML to restore the text inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function domToMutation(xmlElement) {
    var _this = this;

    var items = xmlElement.getAttribute('inputs');

    if (items) {
      var inputNames = items.split(',');
      this.inputList = [];
      inputNames.forEach(function (name) {
        return _this.appendValueInput(name);
      });
      this.inputList[0].appendField(core_browser.Msg.TEXT_JOIN_TITLE_CREATEWITH);
    }

    var next = parseInt(xmlElement.getAttribute('next'));
    this.inputCounter = next;
  },

  /**
   * Check whether a new input should be added and determine where it should go.
   * @param {!Blockly.Connection} connection The connection that has a
   *     pending connection.
   * @return {number} The index before which to insert a new input,
   *     or null if no input should be added.
   */
  getIndexForNewInput: function getIndexForNewInput(connection) {
    if (!connection.targetConnection) {
      // this connection is available
      return null;
    }

    var connectionIndex;

    for (var i = 0; i < this.inputList.length; i++) {
      if (this.inputList[i].connection == connection) {
        connectionIndex = i;
      }
    }

    if (connectionIndex == this.inputList.length - 1) {
      // this connection is the last one and already has a block in it, so
      // we should add a new connection at the end.
      return this.inputList.length + 1;
    }

    var nextInput = this.inputList[connectionIndex + 1];
    var nextConnection = nextInput && nextInput.connection.targetConnection;

    if (nextConnection && !nextConnection.sourceBlock_.isInsertionMarker()) {
      return connectionIndex + 1;
    } // Don't add new connection


    return null;
  },

  /**
   * Called when a block is dragged over one of the connections on this block.
   * @param {!Blockly.Connection} connection The connection on this block that
   *     has a pending connection.
   */
  onPendingConnection: function onPendingConnection(connection) {
    var insertIndex = this.getIndexForNewInput(connection);

    if (insertIndex == null) {
      return;
    }

    this.appendValueInput('ADD' + this.inputCounter++);
    this.moveNumberedInputBefore(this.inputList.length - 1, insertIndex);
  },

  /**
   * Called when a block drag ends if the dragged block had a pending connection
   * with this block.
   */
  finalizeConnections: function finalizeConnections() {
    var _this2 = this;

    if (this.inputList.length > this.minInputs) {
      var toRemove = [];
      this.inputList.forEach(function (input) {
        var targetConnection = input.connection.targetConnection;

        if (!targetConnection) {
          toRemove.push(input.name);
        }
      });

      if (this.inputList.length - toRemove.length < this.minInputs) {
        // Always show at least two inputs
        toRemove = toRemove.slice(this.minInputs);
      }

      toRemove.forEach(function (inputName) {
        return _this2.removeInput(inputName);
      }); // The first input should have the block text. If we removed the
      // first input, add the block text to the new first input.

      if (this.inputList[0].fieldRow.length == 0) {
        this.inputList[0].appendField(core_browser.Msg.TEXT_JOIN_TITLE_CREATEWITH);
      }
    }
  }
};
;// CONCATENATED MODULE: ./node_modules/@blockly/block-dynamic-connection/src/dynamic_list_create.js
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Defines a version of the list_create block with dyanmic
 *     inputs that appear when a block is dragged over inputs on the block.
 */

core_browser.Blocks.dynamic_list_create = {
  /**
   * Counter for the next input to add to this block.
   * @type {number}
   */
  inputCounter: 2,

  /**
   * Minimum number of inputs for this block.
   * @type {number}
   */
  minInputs: 2,

  /**
   * Block for concatenating any number of strings.
   * @this {Blockly.Block}
   */
  init: function init() {
    this.setHelpUrl(core_browser.Msg.LISTS_CREATE_WITH_HELPURL);
    this.setStyle('list_blocks');
    this.appendValueInput('ADD0').appendField(core_browser.Msg.LISTS_CREATE_WITH_INPUT_WITH);
    this.appendValueInput('ADD1');
    this.setOutput(true, 'Array');
    this.setTooltip(core_browser.Msg.LISTS_CREATE_WITH_TOOLTIP);
  },

  /**
   * Create XML to represent number of text inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function mutationToDom() {
    var container = core_browser.utils.xml.createElement('mutation');
    var inputNames = this.inputList.map(function (input) {
      return input.name;
    }).join(',');
    container.setAttribute('inputs', inputNames);
    container.setAttribute('next', this.inputCounter);
    return container;
  },

  /**
   * Parse XML to restore the text inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function domToMutation(xmlElement) {
    var _this = this;

    var items = xmlElement.getAttribute('inputs');

    if (items) {
      var inputNames = items.split(',');
      this.inputList = [];
      inputNames.forEach(function (name) {
        return _this.appendValueInput(name);
      });
      this.inputList[0].appendField(core_browser.Msg.LISTS_CREATE_WITH_INPUT_WITH);
    }

    var next = parseInt(xmlElement.getAttribute('next'));
    this.inputCounter = next;
  },

  /**
   * Check whether a new input should be added and determine where it should go.
   * @param {!Blockly.Connection} connection The connection that has a
   *     pending connection.
   * @return {number} The index before which to insert a new input,
   *     or null if no input should be added.
   */
  getIndexForNewInput: function getIndexForNewInput(connection) {
    if (!connection.targetConnection) {
      // this connection is available
      return null;
    }

    var connectionIndex;

    for (var i = 0; i < this.inputList.length; i++) {
      if (this.inputList[i].connection == connection) {
        connectionIndex = i;
      }
    }

    if (connectionIndex == this.inputList.length - 1) {
      // this connection is the last one and already has a block in it, so
      // we should add a new connection at the end.
      return this.inputList.length + 1;
    }

    var nextInput = this.inputList[connectionIndex + 1];
    var nextConnection = nextInput && nextInput.connection.targetConnection;

    if (nextConnection && !nextConnection.sourceBlock_.isInsertionMarker()) {
      return connectionIndex + 1;
    } // Don't add new connection


    return null;
  },

  /**
   * Called when a block is dragged over one of the connections on this block.
   * @param {!Blockly.Connection} connection The connection on this block that
   * has a pending connection.
   */
  onPendingConnection: function onPendingConnection(connection) {
    var insertIndex = this.getIndexForNewInput(connection);

    if (insertIndex == null) {
      return;
    }

    this.appendValueInput('ADD' + this.inputCounter++);
    this.moveNumberedInputBefore(this.inputList.length - 1, insertIndex);
  },

  /**
   * Called when a block drag ends if the dragged block had a pending connection
   * with this block.
   */
  finalizeConnections: function finalizeConnections() {
    var _this2 = this;

    if (this.inputList.length > this.minInputs) {
      var toRemove = [];
      this.inputList.forEach(function (input) {
        var targetConnection = input.connection.targetConnection;

        if (!targetConnection) {
          toRemove.push(input.name);
        }
      });

      if (this.inputList.length - toRemove.length < this.minInputs) {
        // Always show at least two inputs
        toRemove = toRemove.slice(this.minInputs);
      }

      toRemove.forEach(function (inputName) {
        return _this2.removeInput(inputName);
      }); // The first input should have the block text. If we removed the
      // first input, add the block text to the new first input.

      if (this.inputList[0].fieldRow.length == 0) {
        this.inputList[0].appendField(core_browser.Msg.LISTS_CREATE_WITH_INPUT_WITH);
      }
    }
  }
};
;// CONCATENATED MODULE: ./node_modules/@blockly/block-dynamic-connection/src/index.js
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Adds blocks that replace the built-in mutator UI with dynamic
 *     connections that appear when a block is dragged over inputs on the block.
 */




var overrideOldBlockDefinitions = function overrideOldBlockDefinitions() {
  Blockly.Blocks['list_create'] = Blockly.Blocks['dynamic_list_create'];
  Blockly.Blocks['text_join'] = Blockly.Blocks['dynamic_text_join'];
  Blockly.Blocks['controls_if'] = Blockly.Blocks['dynamic_if'];
};
;// CONCATENATED MODULE: ./node_modules/@blockly/theme-modern/src/index.js
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Modern theme.
 */

/* harmony default export */ var src = (core_browser_default().Theme.defineTheme('modern', {
  'base': (core_browser_default()).Themes.Classic,
  'blockStyles': {
    'colour_blocks': {
      'colourPrimary': '#a5745b',
      'colourSecondary': '#dbc7bd',
      'colourTertiary': '#845d49'
    },
    'list_blocks': {
      'colourPrimary': '#745ba5',
      'colourSecondary': '#c7bddb',
      'colourTertiary': '#5d4984'
    },
    'logic_blocks': {
      'colourPrimary': '#5b80a5',
      'colourSecondary': '#bdccdb',
      'colourTertiary': '#496684'
    },
    'loop_blocks': {
      'colourPrimary': '#5ba55b',
      'colourSecondary': '#bddbbd',
      'colourTertiary': '#498449'
    },
    'math_blocks': {
      'colourPrimary': '#5b67a5',
      'colourSecondary': '#bdc2db',
      'colourTertiary': '#495284'
    },
    'procedure_blocks': {
      'colourPrimary': '#995ba5',
      'colourSecondary': '#d6bddb',
      'colourTertiary': '#7a4984'
    },
    'text_blocks': {
      'colourPrimary': '#5ba58c',
      'colourSecondary': '#bddbd1',
      'colourTertiary': '#498470'
    },
    'variable_blocks': {
      'colourPrimary': '#a55b99',
      'colourSecondary': '#dbbdd6',
      'colourTertiary': '#84497a'
    },
    'variable_dynamic_blocks': {
      'colourPrimary': '#a55b99',
      'colourSecondary': '#dbbdd6',
      'colourTertiary': '#84497a'
    },
    'hat_blocks': {
      'colourPrimary': '#a55b99',
      'colourSecondary': '#dbbdd6',
      'colourTertiary': '#84497a',
      'hat': 'cap'
    }
  },
  'categoryStyles': {
    'colour_category': {
      'colour': '#a5745b'
    },
    'list_category': {
      'colour': '#745ba5'
    },
    'logic_category': {
      'colour': '#5b80a5'
    },
    'loop_category': {
      'colour': '#5ba55b'
    },
    'math_category': {
      'colour': '#5b67a5'
    },
    'procedure_category': {
      'colour': '#995ba5'
    },
    'text_category': {
      'colour': '#5ba58c'
    },
    'variable_category': {
      'colour': '#a55b99'
    },
    'variable_dynamic_category': {
      'colour': '#a55b99'
    }
  },
  'componentStyles': {},
  'fontStyle': {},
  'startHats': null
}));
;// CONCATENATED MODULE: ./node_modules/@blockly/theme-dark/src/index.js
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Dark theme.
 */

/**
 * Dark theme.
 */

/* harmony default export */ var theme_dark_src = (core_browser_default().Theme.defineTheme('theme_dark', {
  'base': (core_browser_default()).Themes.Classic,
  'componentStyles': {
    'workspaceBackgroundColour': '#1e1e1e',
    'toolboxBackgroundColour': 'blackBackground',
    'toolboxForegroundColour': '#fff',
    'flyoutBackgroundColour': '#252526',
    'flyoutForegroundColour': '#ccc',
    'flyoutOpacity': 1,
    'scrollbarColour': '#797979',
    'insertionMarkerColour': '#fff',
    'insertionMarkerOpacity': 0.3,
    'scrollbarOpacity': 0.4,
    'cursorColour': '#d0d0d0',
    'blackBackground': '#333'
  }
}));
;// CONCATENATED MODULE: ./node_modules/@blockly/disable-top-blocks/src/index.js



/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Plugin for changing the context menu to match the
 * `disableOrphans` event handler.
 */

/**
 * This plugin changes the logic of the enable/disable context menu item. It is
 * enabled for all blocks except top-level blocks that have output or
 * previous connections. In other words, the option is disabled for orphan
 * blocks. Using this plugin allows users to disable valid non-orphan blocks,
 * but not re-enable blocks that have been automatically disabled by
 * `disableOrphans`.
 */

var DisableTopBlocks = /*#__PURE__*/function () {
  function DisableTopBlocks() {
    (0,classCallCheck/* default */.Z)(this, DisableTopBlocks);
  }

  (0,createClass/* default */.Z)(DisableTopBlocks, [{
    key: "init",
    value:
    /**
     * Modifies the context menu 'disable' option as described above.
     */
    function init() {
      var disableMenuItem = core_browser.ContextMenuRegistry.registry.getItem('blockDisable');
      this.oldPreconditionFn = disableMenuItem.preconditionFn;

      disableMenuItem.preconditionFn = function (
      /** @type {!Blockly.ContextMenuRegistry.Scope} */
      scope) {
        var block = scope.block;

        if (!block.isInFlyout && block.workspace.options.disable && block.isEditable()) {
          if (block.getInheritedDisabled() || isOrphan(block)) {
            return 'disabled';
          }

          return 'enabled';
        }

        return 'hidden';
      };
    }
    /**
     * Turn off the effects of this plugin and restore the initial behavior.
     * This is never required to be called. It is optional in case you need to
     * disable the plugin.
     */

  }, {
    key: "dispose",
    value: function dispose() {
      var disableMenuItem = core_browser.ContextMenuRegistry.registry.getItem('blockDisable');
      disableMenuItem.preconditionFn = this.oldPreconditionFn;
    }
  }]);

  return DisableTopBlocks;
}();
/**
 * A block is an orphan if its parent is an orphan, or if it doesn't have a
 * parent but it does have a previous or output connection (so it expects to be
 * attached to something). This means all children of orphan blocks are also
 * orphans and cannot be manually re-enabled.
 * @param {!Blockly.BlockSvg} block Block to check.
 * @return {boolean} Whether the block is an orphan.
 */

function isOrphan(block) {
  // If the parent is an orphan block, this block should also be considered
  // an orphan so it cannot be manually re-enabled.
  var parent =
  /** @type {Blockly.BlockSvg} */
  block.getParent();

  if (parent && isOrphan(parent)) {
    return true;
  }

  return !parent && !!(block.outputConnection || block.previousConnection);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(85061);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(13996);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/hooks/useServices.ts
var useServices = __webpack_require__(2928);
;// CONCATENATED MODULE: ./src/components/vm/useToolbox.ts








var NEW_PROJET_XML = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="jacdac_configuration"></block></xml>';
var WHILE_CONDITION_BLOCK = "jacdac_while_event";
var WHILE_CONDITION_BLOCK_CONDITION = "condition";
var WAIT_BLOCK = "jacdac_wait";

function isBooleanField(field) {
  return field.type === "bool";
}

function isStringField(field) {
  return field.type === "string";
}

function isBoolean(pkt) {
  return pkt.fields.length === 1 && isBooleanField(pkt.fields[0]);
}

function toBlocklyType(field) {
  return isBooleanField(field) ? "Boolean" : isStringField(field) ? "String" : "Number";
}

var ignoredServices = [constants/* SRV_CONTROL */.gm9, constants/* SRV_LOGGER */.w9j, constants/* SRV_ROLE_MANAGER */.igi, constants/* SRV_PROTO_TEST */.$Bn, constants/* SRV_SETTINGS */.B9b, constants/* SRV_BOOTLOADER */.PWm];
var ignoredEvents = [constants/* SystemEvent.StatusCodeChanged */.nSK.StatusCodeChanged];
var includedRegisters = [constants/* SystemReg.Reading */.ZJq.Reading, constants/* SystemReg.Value */.ZJq.Value, constants/* SystemReg.Intensity */.ZJq.Intensity];
var cachedBlocks;
function loadBlocks() {
  if (cachedBlocks) return cachedBlocks;

  var fieldName = function fieldName(reg, field) {
    return field.name === "_" ? reg.name : field.name;
  };

  var fieldToShadow = function fieldToShadow(field) {
    return isBooleanField(field) ? {
      type: "jacdac_on_off",
      shadow: true
    } : isStringField(field) ? {
      type: "text",
      shadow: true
    } : field.unit === "°" ? {
      type: "jacdac_angle",
      shadow: true
    } : field.unit === "/" ? {
      type: "jacdac_percent",
      shadow: true
    } : {
      type: "math_number",
      value: field.defaultValue || 0,
      min: field.absoluteMin,
      max: field.absoluteMax,
      shadow: true
    };
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
        name: field.name,
        check: toBlocklyType(field)
      };
    });
  };

  var fieldsToValues = function fieldsToValues(info) {
    return (0,utils/* toMap */.qL)(info.fields, function (field) {
      return fieldName(info, field);
    }, function (field) {
      return fieldToShadow(field);
    });
  };

  var fieldsToMessage = function fieldsToMessage(info) {
    return info.fields.map(function (field, i) {
      return (0,jdspec/* humanify */.lW)(field.name) + " %" + (2 + i);
    }).join(" ");
  };

  var allServices = (0,spec/* serviceSpecifications */.Le)().filter(function (service) {
    return !/^_/.test(service.shortId);
  }).filter(function (service) {
    return ignoredServices.indexOf(service.classIdentifier) < 0;
  });
  var registers = allServices.map(function (service) {
    return {
      service: service,
      register: service.packets.find(function (pkt) {
        return (0,spec/* isRegister */.x5)(pkt) && includedRegisters.indexOf(pkt.identifier) > -1;
      })
    };
  }).filter(function (kv) {
    return !!kv.register;
  });
  var events = allServices.map(function (service) {
    return {
      service: service,
      events: service.packets.filter(function (pkt) {
        return (0,spec/* isEvent */.cO)(pkt) && ignoredEvents.indexOf(pkt.identifier) < 0;
      })
    };
  }).filter(function (kv) {
    return !!kv.events.length;
  });
  var commands = (0,utils/* arrayConcatMany */.ue)(allServices.map(function (service) {
    return service.packets.filter(function (pkt) {
      return (0,spec/* isCommand */.ao)(pkt);
    }).map(function (pkt) {
      return {
        service: service,
        command: pkt
      };
    });
  }));
  var HUE = 230;
  var eventBlocks = events.map(function (_ref) {
    var service = _ref.service,
        events = _ref.events;
    return {
      type: "jacdac_" + service.shortId + "_events",
      message0: "when %1 %2",
      args0: [fieldVariable(service), {
        type: "field_dropdown",
        name: "event",
        options: events.map(function (event) {
          return [(0,jdspec/* humanify */.lW)(event.name), event.name];
        })
      }],
      colour: HUE,
      inputsInline: true,
      nextStatement: null,
      tooltip: "",
      helpUrl: "",
      service: service,
      events: events,
      template: "event"
    };
  });
  var registerChangeEventBlocks = registers.filter(function (_ref2) {
    var service = _ref2.service;
    return !service.packets.some(function (pkt) {
      return (0,spec/* isEvent */.cO)(pkt) && ignoredEvents.indexOf(pkt.identifier) < 0;
    });
  }).map(function (_ref3) {
    var service = _ref3.service,
        register = _ref3.register;
    return {
      type: "jacdac_" + service.shortId + "_" + register.name + "_change_event",
      message0: "when %1 " + (0,jdspec/* humanify */.lW)(register.name) + " change by %2",
      args0: [fieldVariable(service), {
        type: "input_value",
        name: "threshold",
        check: "Number"
      }].filter(function (v) {
        return !!v;
      }),
      values: {
        threshold: {
          type: "math_number",
          value: 1,
          min: 0,
          shadow: true
        }
      },
      inputsInline: true,
      nextStatement: "Statement",
      colour: HUE,
      tooltip: "",
      helpUrl: "",
      service: service,
      register: register,
      template: "register_change_event"
    };
  });
  var registerGetBlocks = registers.map(function (_ref4) {
    var service = _ref4.service,
        register = _ref4.register;
    return {
      type: "jacdac_" + service.shortId + "_" + register.name + "_get",
      message0: "%1 " + (0,jdspec/* humanify */.lW)(register.name) + (register.fields.length > 1 ? " %2" : ""),
      args0: [fieldVariable(service), register.fields.length > 1 ? {
        type: "field_dropdown",
        name: "field",
        options: register.fields.map(function (field) {
          return [(0,jdspec/* humanify */.lW)(field.name), field.name];
        })
      } : undefined].filter(function (v) {
        return !!v;
      }),
      inputsInline: true,
      output: toBlocklyType(register.fields[0]),
      colour: HUE,
      tooltip: "",
      helpUrl: "",
      service: service,
      register: register,
      template: "register_get"
    };
  });
  var registerSetBlocks = registers.filter(function (_ref5) {
    var register = _ref5.register;
    return register.kind === "rw";
  }).map(function (_ref6) {
    var service = _ref6.service,
        register = _ref6.register;
    return {
      type: "jacdac_" + service.shortId + "_" + register.name + "_set",
      message0: "set %1 " + register.name + " to " + (register.fields.length === 1 ? "%2" : fieldsToMessage(register)),
      args0: [fieldVariable(service)].concat((0,toConsumableArray/* default */.Z)(fieldsToFieldInputs(register))),
      values: fieldsToValues(register),
      inputsInline: true,
      colour: HUE,
      tooltip: "",
      helpUrl: "",
      service: service,
      register: register,
      previousStatement: "Statement",
      nextStatement: "Statement",
      template: "register_set"
    };
  });
  var commandBlocks = commands.map(function (_ref7) {
    var service = _ref7.service,
        command = _ref7.command;
    return {
      type: "jacdac_" + service.shortId + "_value_get",
      message0: (0,jdspec/* humanify */.lW)(command.name) + " %1 with " + fieldsToMessage(command),
      args0: [fieldVariable(service)].concat((0,toConsumableArray/* default */.Z)(fieldsToFieldInputs(command))),
      values: fieldsToValues(command),
      inputsInline: true,
      colour: HUE,
      tooltip: "",
      helpUrl: "",
      service: service,
      command: command,
      previousStatement: "Statement",
      nextStatement: "Statement",
      template: "command"
    };
  });
  var serviceBlocks = [].concat((0,toConsumableArray/* default */.Z)(eventBlocks), (0,toConsumableArray/* default */.Z)(registerChangeEventBlocks), (0,toConsumableArray/* default */.Z)(registerGetBlocks), (0,toConsumableArray/* default */.Z)(registerSetBlocks), (0,toConsumableArray/* default */.Z)(commandBlocks));
  var shadowBlocks = [{
    type: "jacdac_on_off",
    message0: "%1",
    args0: [{
      type: "field_dropdown",
      name: "value",
      options: [["on", "on"], ["off", "off"]]
    }],
    colour: HUE,
    output: "Boolean"
  }, {
    type: "jacdac_time_picker",
    message0: "%1",
    args0: [{
      type: "field_dropdown",
      name: "value",
      options: [["0.1", "0.1"], ["1", "1"], ["5", "5"], ["30", "30"], ["60", "60"]]
    }],
    colour: HUE,
    output: "Number"
  }, {
    type: "jacdac_angle",
    message0: "%1",
    args0: [{
      type: "field_angle",
      name: "value",
      min: 0,
      max: 360,
      precision: 10
    }],
    colour: HUE,
    output: "Number"
  }, {
    type: "jacdac_percent",
    message0: "%1 %",
    args0: [{
      type: "field_slider",
      name: "value",
      min: 0,
      max: 100,
      precision: 1
    }],
    colour: HUE,
    output: "Number"
  }, {
    type: "jacdac_ratio",
    message0: "%1",
    args0: [{
      type: "field_slider",
      name: "value",
      min: 0,
      max: 1,
      precision: 0.1
    }],
    colour: HUE,
    output: "Number"
  }];
  var runtimeBlocks = [{
    type: WHILE_CONDITION_BLOCK,
    message0: "while %1",
    args0: [{
      type: "input_value",
      name: WHILE_CONDITION_BLOCK_CONDITION,
      check: "Boolean"
    }],
    style: "logic_blocks",
    inputsInline: true,
    nextStatement: "Statement",
    tooltip: "",
    helpUrl: ""
  }, {
    type: WAIT_BLOCK,
    message0: "wait %1 s",
    args0: [{
      type: "input_value",
      name: "TIME",
      check: "Number"
    }],
    inputsInline: true,
    previousStatement: "Statement",
    nextStatement: "Statement",
    colour: 230,
    tooltip: "",
    helpUrl: ""
  }];
  var mathBlocks = [{
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
  }];
  var blocks = [].concat((0,toConsumableArray/* default */.Z)(serviceBlocks), runtimeBlocks, shadowBlocks, mathBlocks); // register blocks with Blockly, happens once

  blocks.map(function (block) {
    return (blockly_default()).Blocks[block.type] = {
      init: function init() {
        this.jsonInit(block);
      }
    };
  });
  var jdBlocks = serviceBlocks.filter(function (block) {
    return !!block.service;
  });
  var services = (0,utils/* uniqueMap */.EM)(jdBlocks, function (block) {
    return block.service.shortId;
  }, function (block) {
    return block.service;
  });
  cachedBlocks = {
    blocks: blocks,
    serviceBlocks: serviceBlocks,
    services: services
  };
  return cachedBlocks;
}
var BUILTIN_TYPES = ["", "Boolean", "Number", "String"];
function scanServices(workspace) {
  var variables = blockly_default().Variables.allUsedVarModels(workspace).filter(function (v) {
    return BUILTIN_TYPES.indexOf(v.type) < 0;
  }); // remove buildins

  var services = variables.map(function (v) {
    return v.type;
  });
  return services;
}
function useToolbox(blockServices) {
  var _useMemo = (0,react.useMemo)(function () {
    return loadBlocks();
  }, []),
      serviceBlocks = _useMemo.serviceBlocks,
      services = _useMemo.services;

  var liveServices = (0,useServices/* default */.Z)({
    specification: true
  });
  var toolboxServices = (0,utils/* unique */.Tw)([].concat((0,toConsumableArray/* default */.Z)(blockServices), (0,toConsumableArray/* default */.Z)(liveServices.filter(function (srv) {
    return ignoredServices.indexOf(srv.serviceClass) < 0;
  }).map(function (service) {
    var _service$specificatio;

    return (_service$specificatio = service.specification) === null || _service$specificatio === void 0 ? void 0 : _service$specificatio.shortId;
  })))).map(function (serviceShortId) {
    return services.find(function (service) {
      return service.shortId === serviceShortId;
    });
  }).filter(function (srv) {
    return !!srv;
  });
  var toolboxCategories = [].concat((0,toConsumableArray/* default */.Z)(toolboxServices.map(function (service) {
    return {
      service: service,
      serviceBlocks: serviceBlocks.filter(function (block) {
        return block.service === service;
      })
    };
  }).map(function (_ref8) {
    var service = _ref8.service,
        serviceBlocks = _ref8.serviceBlocks;
    return {
      name: service.name,
      colour: "#5CA699",
      blocks: serviceBlocks.map(function (block) {
        return {
          type: block.type,
          values: block.values
        };
      }),
      button: Object.values((0,utils/* uniqueMap */.EM)(serviceBlocks, function (block) {
        return block.service.shortId;
      }, function (block) {
        return block.service;
      })).map(function (service) {
        return {
          text: "Add " + service.name,
          callbackKey: "jacdac_add_role_callback_" + service.shortId,
          service: service
        };
      })
    };
  })), [{
    name: "Commands",
    colour: "%{BKY_LISTS_HUE}",
    blocks: [{
      type: WHILE_CONDITION_BLOCK
    }, {
      type: "jacdac_wait",
      values: {
        TIME: {
          type: "jacdac_time_picker",
          shadow: true
        }
      }
    }]
  }, {
    name: "Logic",
    colour: "%{BKY_LOGIC_HUE}",
    blocks: [{
      type: "dynamic_if"
    }, {
      type: "logic_compare",
      values: {
        A: {
          type: "math_number",
          shadow: true
        },
        B: {
          type: "math_number",
          shadow: true
        }
      }
    }, {
      type: "logic_operation",
      values: {
        A: {
          type: "logic_boolean",
          shadow: true
        },
        B: {
          type: "logic_boolean",
          shadow: true
        }
      }
    }, {
      type: "logic_negate",
      values: {
        BOOL: {
          type: "logic_boolean",
          shadow: true
        }
      }
    }, {
      type: "logic_boolean"
    }]
  }, {
    name: "Math",
    colour: "%{BKY_MATH_HUE}",
    blocks: [{
      type: "jacdac_math_arithmetic",
      values: {
        A: {
          type: "math_number",
          shadow: true
        },
        B: {
          type: "math_number",
          shadow: true
        }
      }
    }, {
      type: "jacdac_math_single",
      values: {
        NUM: {
          type: "math_number",
          shadow: true
        }
      }
    }, {
      type: "math_number"
    }]
  }, {
    name: "Variables",
    colour: "%{BKY_VARIABLES_HUE}",
    custom: "VARIABLE"
  }]).filter(function (cat) {
    var _cat$blocks;

    return !!((_cat$blocks = cat.blocks) !== null && _cat$blocks !== void 0 && _cat$blocks.length);
  });
  return {
    toolboxCategories: toolboxCategories,
    newProjectXml: NEW_PROJET_XML
  };
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(52468);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(65733);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js
var DialogContentText = __webpack_require__(32253);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(89952);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
;// CONCATENATED MODULE: ./src/components/vm/BlocklyModalDialogs.tsx





function BlocklyModalDialogs() {
  var _useState = (0,react.useState)(),
      dialogType = _useState[0],
      setDialogType = _useState[1];

  var _useState2 = (0,react.useState)(""),
      message = _useState2[0],
      setMessage = _useState2[1];

  var _useState3 = (0,react.useState)(""),
      value = _useState3[0],
      setValue = _useState3[1];

  var valueId = (0,react_use_id_hook_esm/* useId */.Me)(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var callback = (0,react.useRef)();
  var showDialog = !!dialogType;
  (0,react.useEffect)(function () {
    // store older
    var previous = {
      alert: (blockly_default()).alert,
      confirm: (blockly_default()).confirm,
      prompt: (blockly_default()).prompt
    }; // replace

    (blockly_default()).alert = function (message, cb) {
      setMessage(message);
      callback.current = cb;
      setDialogType("alert");
    };

    (blockly_default()).confirm = function (message, cb) {
      setMessage(message);
      callback.current = cb;
      setDialogType("confirm");
    };

    (blockly_default()).prompt = function (message, defaultValue, cb) {
      setMessage(message);
      setValue(defaultValue);
      callback.current = cb;
      setDialogType("prompt");
    }; // cleanup


    return function () {
      console.log("cleanup");
      (blockly_default()).alert = previous.alert;
      (blockly_default()).confirm = previous.confirm;
      (blockly_default()).prompt = previous.prompt;
    };
  }, []);

  var handleCloseConfirm = function handleCloseConfirm() {
    return setDialogType(undefined);
  };

  var handleCancel = function handleCancel() {
    var _callback$current;

    (_callback$current = callback.current) === null || _callback$current === void 0 ? void 0 : _callback$current.call(callback, undefined);
    setDialogType(undefined);
  };

  var handleOk = function handleOk() {
    var _callback$current2;

    switch (dialogType) {
      case "alert":
        (_callback$current2 = callback.current) === null || _callback$current2 === void 0 ? void 0 : _callback$current2.call(callback);
        break;

      case "confirm":
        callback.current(true);
        break;

      case "prompt":
        callback.current(value);
        break;
    }

    setDialogType(undefined);
  };

  var handleValueChange = function handleValueChange(event) {
    setValue(event.target.value);
  };

  return /*#__PURE__*/react.createElement(Dialog/* default */.Z, {
    open: showDialog,
    onClose: handleCloseConfirm
  }, /*#__PURE__*/react.createElement(DialogContent/* default */.Z, null, /*#__PURE__*/react.createElement(DialogContentText/* default */.Z, null, message), dialogType === "prompt" && /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: valueId,
    value: value,
    label: "Value",
    onChange: handleValueChange
  })), /*#__PURE__*/react.createElement(DialogActions/* default */.Z, null, dialogType !== "alert" && /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    variant: "contained",
    onClick: handleCancel
  }, "Cancel"), /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    variant: "contained",
    color: "primary",
    onClick: handleOk
  }, "Ok")));
}
;// CONCATENATED MODULE: ./src/components/vm/jsongenerator.ts
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = jsongenerator_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function jsongenerator_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return jsongenerator_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return jsongenerator_arrayLikeToArray(o, minLen); }

function jsongenerator_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function domToJSON(workspace) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var clean = function clean(o) {
    return Object.keys(o).filter(function (k) {
      return o[k] === undefined || o[k] === null;
    }).forEach(function (k) {
      return delete o[k];
    });
  };

  var builtins = {
    logic_null: function logic_null() {
      return null;
    },
    text: function text(block) {
      return block.getFieldValue("TEXT");
    },
    math_number: function math_number(block) {
      return Number(block.getFieldValue("NUM") || "0");
    },
    logic_boolean: function logic_boolean(block) {
      return block.getFieldValue("BOOL") === "TRUE";
    },
    jacdac_on_off: function jacdac_on_off(block) {
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

  var variableToJSON = function variableToJSON(variable) {
    return {
      name: variable.name,
      type: variable.type,
      id: variable.getId()
    };
  };

  var fieldsToJSON = function fieldsToJSON(fields) {
    return !fields.length ? undefined : (0,utils/* toMap */.qL)(fields, function (field) {
      var _field$name;

      return (_field$name = field.name) === null || _field$name === void 0 ? void 0 : _field$name.toLowerCase();
    }, fieldToJSON);
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var xmlToJSON = function xmlToJSON(xml) {
    var j = {};
    if (flags/* default.diagnostics */.Z.diagnostics) j["xml"] = xml.outerHTML; // dump attributes

    for (var _iterator = _createForOfIteratorHelperLoose(xml.getAttributeNames()), _step; !(_step = _iterator()).done;) {
      var _name = _step.value;
      var v = xml.getAttribute(_name);
      j[_name.toLowerCase()] = v;
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose(xml.childNodes), _step2; !(_step2 = _iterator2()).done;) {
      var child = _step2.value;
      if (child.nodeType === Node.TEXT_NODE) j["value"] = xml.textContent;else if (child.nodeType === Node.ELEMENT_NODE) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var children = j["children"] || (j["children"] = []);
        children.push(xmlToJSON(child));
      }
    }

    return j;
  };

  var fieldToJSON = function fieldToJSON(field) {
    if (field.isSerializable()) {
      var container = blockly_default().utils.xml.createElement("field");
      var fieldXml = field.toXml(container);
      return xmlToJSON(fieldXml);
    }

    return undefined;
  };

  var flattenNext = function flattenNext(block) {
    // flatten the linked list of next into an array
    var children = [];
    var current = block.next;

    while (current) {
      children.push(current);
      current = current.next;
    }

    if (children.length) {
      block.children = children;
      block.next = undefined;
    }
  };

  var blockToJSON = function blockToJSON(block) {
    var _builtins$block$type;

    if (!(block !== null && block !== void 0 && block.isEnabled())) return undefined; // Skip over insertion markers.

    if (block.isInsertionMarker()) {
      var child = block.getChildren(false)[0];
      if (child) return blockToJSON(child);else return undefined;
    } // dump object


    var value = (_builtins$block$type = builtins[block.type]) === null || _builtins$block$type === void 0 ? void 0 : _builtins$block$type.call(builtins, block);
    var element = {
      type: block.type,
      id: block.id,
      value: value,
      inputs: value === undefined ? block.inputList.map(function (input) {
        var _input$connection;

        var container = {
          type: input.type,
          name: input.name,
          fields: fieldsToJSON(input.fieldRow),
          child: blockToJSON((_input$connection = input.connection) === null || _input$connection === void 0 ? void 0 : _input$connection.targetBlock())
        };
        return container;
      }) : undefined,
      next: blockToJSON(block.getNextBlock())
    };
    flattenNext(element);
    clean(element);
    return element;
  };

  try {
    var variables = blockly_default().Variables.allUsedVarModels(workspace);
    var blocks = workspace.getTopBlocks(true).filter(function (b) {
      return b.isEnabled();
    });
    var json = {
      variables: variables.map(variableToJSON),
      blocks: blocks.map(blockToJSON).filter(function (b) {
        return !!b;
      })
    };
    return json;
  } catch (e) {
    console.error(e);
    return undefined;
  }
}
function visitBlock(block, visitor) {
  var _visitor$visitBlock;

  if (!block) return;
  (_visitor$visitBlock = visitor.visitBlock) === null || _visitor$visitBlock === void 0 ? void 0 : _visitor$visitBlock.call(visitor, block);
  var inputs = block.inputs,
      children = block.children;
  inputs === null || inputs === void 0 ? void 0 : inputs.forEach(function (input) {
    return visitInput(input, visitor);
  });
  children === null || children === void 0 ? void 0 : children.forEach(function (child) {
    return visitBlock(child, visitor);
  });
}
function visitInput(input, visitor) {
  var _visitor$visitInput;

  if (!input) return;
  (_visitor$visitInput = visitor.visitInput) === null || _visitor$visitInput === void 0 ? void 0 : _visitor$visitInput.call(visitor, input);
  var fields = input.fields,
      child = input.child;
  if (fields) Object.keys(fields).map(function (k) {
    return visitField(k, fields[k], visitor);
  });
  visitBlock(child, visitor);
}
function visitField(name, field, visitor) {
  var _visitor$visitField;

  if (!field) return;
  (_visitor$visitField = visitor.visitField) === null || _visitor$visitField === void 0 ? void 0 : _visitor$visitField.call(visitor, name, field);
}
function visitWorkspace(workspace, visitor) {
  workspace.blocks.forEach(function (block) {
    return visitBlock(block, visitor);
  });
}
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(91350);
;// CONCATENATED MODULE: ./src/components/vm/it4generator.ts
function it4generator_createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = it4generator_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function it4generator_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return it4generator_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return it4generator_arrayLikeToArray(o, minLen); }

function it4generator_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




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
  MUL: "*",
  DIV: "/"
};

function blockToExpression(block) {
  if (!block) return undefined;
  var type = block.type,
      value = block.value,
      inputs = block.inputs;
  if (value !== undefined) // literal
    return {
      type: "Literal",
      value: value,
      raw: value + ""
    };
  console.log("block", block);

  switch (type) {
    case "jacdac_math_single":
      {
        var argument = blockToExpression(inputs[0].child);
        var op = inputs[0].fields["op"].value;
        return {
          type: "UnaryExpression",
          operator: ops[op] || op,
          argument: argument,
          prefix: false // TODO:?

        };
      }

    case "jacdac_math_arithmetic":
      {
        var left = blockToExpression(inputs[0].child);
        var right = blockToExpression(inputs[1].child);
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
        var _left = blockToExpression(inputs[0].child);

        var _right = blockToExpression(inputs[1].child);

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
        var _argument = blockToExpression(inputs[0].child);

        return {
          type: "UnaryExpression",
          operator: "!",
          argument: _argument,
          prefix: false // TODO:?

        };
      }

    case "logic_compare":
      {
        var _left2 = blockToExpression(inputs[0].child);

        var _right2 = blockToExpression(inputs[1].child);

        var _op3 = inputs[1].fields["op"].value;
        return {
          type: "BinaryExpression",
          operator: ops[_op3] || _op3,
          left: _left2,
          right: _right2
        };
      }
  }

  return undefined;
}

function blockToCommand(block) {
  var command;
  var type = block.type,
      inputs = block.inputs;

  switch (type) {
    case WAIT_BLOCK:
      {
        var time = blockToExpression(inputs[0].child);
        command = {
          type: "CallExpression",
          arguments: [time],
          callee: undefined // TODO

        };
      }
  }

  return {
    command: command
  };
}

function workspaceJSONToIT4Program(workspace) {
  console.debug("compile it4", {
    workspace: workspace
  });

  var _loadBlocks = loadBlocks(),
      serviceBlocks = _loadBlocks.serviceBlocks;

  var roles = workspace.variables.filter(function (v) {
    return BUILTIN_TYPES.indexOf(v.type) < 0;
  }).map(function (v) {
    return {
      role: v.name,
      serviceShortName: v.type
    };
  }); // visit all the nodes in the blockly tree

  var registers = [];
  var events = []; // collect registers and events

  visitWorkspace(workspace, {
    visitBlock: function visitBlock(b) {
      var def = /^jacdac_/.test(b.type) && serviceBlocks.find(function (d) {
        return d.type === b.type;
      });
      if (!def) return;
      var service = def.service;
      var _ref = def,
          register = _ref.register;
      var _ref2 = def,
          defEvents = _ref2.events;
      if (register) registers.push(service.shortId + "." + register.name);

      if (defEvents) {
        for (var _iterator = it4generator_createForOfIteratorHelperLoose(defEvents), _step; !(_step = _iterator()).done;) {
          var event = _step.value;
          events.push(service.shortId + "." + event.name);
        }
      }
    }
  });
  var handlers = workspace.blocks.map(function (top) {
    var _top$children;

    var type = top.type,
        inputs = top.inputs;
    var commands = [];

    if (type === WHILE_CONDITION_BLOCK) {
      // this is while (...)
      var condition = inputs[0].child;
      commands.push({
        command: {
          type: "CallExpression",
          arguments: [blockToExpression(condition)],
          callee: undefined // TODO

        }
      });
    } else {
      var def = serviceBlocks.find(function (def) {
        return def.type === type;
      });
      (0,utils/* assert */.hu)(!!def);
      var template = def.template;

      switch (template) {
        case "event":
          {
            var _ref3 = def,
                service = _ref3.service,
                _events = _ref3.events; // TODO

            break;
          }

        case "register_change_event":
        case "register_set":
        case "register_get":
          {
            var _ref4 = def,
                _service = _ref4.service,
                register = _ref4.register; // TODO

            break;
          }
      }
    } // process children


    (_top$children = top.children) === null || _top$children === void 0 ? void 0 : _top$children.forEach(function (child) {
      return commands.push(blockToCommand(child));
    });
    return {
      description: type,
      commands: commands
    };
  });
  return {
    description: "not required?",
    roles: roles,
    registers: (0,utils/* unique */.Tw)(registers),
    events: (0,utils/* unique */.Tw)(events),
    handlers: handlers
  };
}
;// CONCATENATED MODULE: ./src/components/vm/VmEditor.tsx














function VmEditor(props) {
  var className = props.className,
      onXmlChange = props.onXmlChange,
      onJSONChange = props.onJSONChange,
      onIT4ProgramChange = props.onIT4ProgramChange,
      initialXml = props.initialXml;

  var _useContext = (0,react.useContext)(DarkModeContext/* default */.Z),
      darkMode = _useContext.darkMode;

  var _useState = (0,react.useState)([]),
      services = _useState[0],
      setServices = _useState[1];

  var _useToolbox = useToolbox(services),
      toolboxCategories = _useToolbox.toolboxCategories,
      newProjectXml = _useToolbox.newProjectXml; // ReactBlockly
  // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var reactBlockly = (0,react.useRef)();
  var workspaceReady = (0,react.useRef)(false);
  var theme = darkMode === "dark" ? theme_dark_src : src;
  var gridColor = darkMode === "dark" ? "#555" : "#ccc";

  var resolveWorkspace = function resolveWorkspace() {
    var _reactBlockly$current, _reactBlockly$current2, _reactBlockly$current3;

    return (_reactBlockly$current = reactBlockly.current) === null || _reactBlockly$current === void 0 ? void 0 : (_reactBlockly$current2 = _reactBlockly$current.workspace) === null || _reactBlockly$current2 === void 0 ? void 0 : (_reactBlockly$current3 = _reactBlockly$current2.state) === null || _reactBlockly$current3 === void 0 ? void 0 : _reactBlockly$current3.workspace;
  };

  var initWorkspace = function initWorkspace() {
    if (workspaceReady.current) return;
    var workspace = resolveWorkspace();
    if (!workspace) return;
    workspaceReady.current = true; // Add the disableOrphans event handler. This is not done automatically by
    // the plugin and should be handled by your application.

    workspace.addChangeListener((blockly_default()).Events.disableOrphans); // The plugin must be initialized before it has any effect.

    var disableTopBlocksPlugin = new DisableTopBlocks();
    disableTopBlocksPlugin.init();
  }; // blockly did a change


  var handleChange = function handleChange(workspace) {
    initWorkspace(); // save xml

    if (onXmlChange) {
      var newXml = blockly_default().Xml.domToText(blockly_default().Xml.workspaceToDom(workspace));
      onXmlChange(newXml);
    } // save json


    if (onJSONChange || onIT4ProgramChange) {
      // emit json
      var _json = domToJSON(workspace);

      onJSONChange === null || onJSONChange === void 0 ? void 0 : onJSONChange(_json);

      if (onIT4ProgramChange) {
        try {
          var _program = workspaceJSONToIT4Program(_json);

          onIT4ProgramChange(_program);
        } catch (e) {
          console.error(e);
          onIT4ProgramChange(undefined);
        }
      }
    } // update toolbox with declared roles


    var newServices = scanServices(workspace);
    if (JSON.stringify(services) !== JSON.stringify(newServices)) setServices(newServices);
  }; // track workspace changes and update callbacks


  (0,react.useEffect)(function () {
    // collect buttons
    var workspace = resolveWorkspace();
    var buttons = (0,utils/* arrayConcatMany */.ue)(toolboxCategories === null || toolboxCategories === void 0 ? void 0 : toolboxCategories.filter(function (cat) {
      return cat.button;
    }).map(function (cat) {
      return cat.button;
    }));
    buttons.forEach(function (button) {
      return workspace.registerButtonCallback(button.callbackKey, function () {
        return blockly_default().Variables.createVariableButtonHandler(workspace, null, button.service.shortId);
      });
    });
  }, [JSON.stringify(toolboxCategories)]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(BlocklyModalDialogs, null), /*#__PURE__*/react.createElement(dist/* default */.ZP, {
    ref: reactBlockly,
    toolboxCategories: toolboxCategories,
    workspaceConfiguration: {
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
          vertical: false,
          horizontal: true
        }
      }
    },
    initialXml: initialXml || newProjectXml,
    wrapperDivClassName: className,
    workspaceDidChange: handleChange
  }));
}
// EXTERNAL MODULE: ./src/components/dashboard/Dashboard.tsx + 3 modules
var Dashboard = __webpack_require__(65063);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
// EXTERNAL MODULE: ./src/components/useLocalStorage.ts
var useLocalStorage = __webpack_require__(86581);
// EXTERNAL MODULE: ./src/components/vm/VMRunner.tsx + 2 modules
var VMRunner = __webpack_require__(88523);
;// CONCATENATED MODULE: ./src/pages/tools/vm-editor.tsx









var useStyles = (0,makeStyles/* default */.Z)(function () {
  return (0,createStyles/* default */.Z)({
    editor: {
      height: "calc(50vh)"
    }
  });
});
var VM_SOURCE_STORAGE_KEY = "jacdac:vmeditor:xml";
function Page() {
  var classes = useStyles();

  var _useLocalStorage = (0,useLocalStorage/* default */.Z)(VM_SOURCE_STORAGE_KEY, ""),
      xml = _useLocalStorage[0],
      setXml = _useLocalStorage[1];

  var _useState = (0,react.useState)(),
      source = _useState[0],
      setSource = _useState[1];

  var _useState2 = (0,react.useState)(),
      program = _useState2[0],
      setProgram = _useState2[1];

  var handleXml = function handleXml(xml) {
    setXml(xml);
  };

  var handleJSON = function handleJSON(json) {
    var newSource = JSON.stringify(json);
    if (JSON.stringify(source) !== newSource) setSource(json);
  };

  var handleI4Program = function handleI4Program(json) {
    var newProgram = JSON.stringify(json);
    if (JSON.stringify(program) !== newProgram) setProgram(json);
  };

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info",
    closeable: true
  }, "Start a simulator or connect a device to load the blocks automatically.")), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(NoSsr/* default */.Z, null, /*#__PURE__*/react.createElement(VmEditor, {
    className: classes.editor,
    initialXml: xml,
    onXmlChange: handleXml,
    onJSONChange: handleJSON,
    onIT4ProgramChange: handleI4Program
  }))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(VMRunner/* default */.Z, {
    program: program
  })), flags/* default.diagnostics */.Z.diagnostics && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    source: "\n### IT4 program\n\n```json\n" + JSON.stringify(program, null, 2) + "\n```   \n\n### Workspace JSON\n\n```json\n" + JSON.stringify(source, null, 2) + "\n```   \n\n### Blockly XML\n\n```xml\n" + xml + "\n```                \n"
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Dashboard/* default */.Z, {
    showStartSimulators: true
  })));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-vm-editor-tsx-b20b7facb9725315541e.js.map