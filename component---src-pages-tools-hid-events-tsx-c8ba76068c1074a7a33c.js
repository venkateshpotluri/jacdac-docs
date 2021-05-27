(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5444],{

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

/***/ 96422:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34621);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80453);






var styles = {
  /* Styles applied to the root element. */
  root: {
    margin: 0,
    padding: '16px 24px',
    flex: '0 0 auto'
  }
};
var DialogTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function DialogTitle(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["children", "classes", "className", "disableTypography"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(classes.root, className),
    ref: ref
  }, other), disableTypography ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    component: "h2",
    variant: "h6"
  }, children));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(styles, {
  name: 'MuiDialogTitle'
})(DialogTitle));

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

/***/ 43771:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SettingsClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41788);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _pack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91635);
/* harmony import */ var _packet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57683);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93642);
/* harmony import */ var _serviceclient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56763);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81794);










var SettingsClient = /*#__PURE__*/function (_JDServiceClient) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(SettingsClient, _JDServiceClient);

  function SettingsClient(service) {
    var _this;

    _this = _JDServiceClient.call(this, service) || this;
    service.registersUseAcks = true;
    return _this;
  }

  var _proto = SettingsClient.prototype;

  _proto.clear = /*#__PURE__*/function () {
    var _clear = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.service.sendCmdAsync(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SettingsCmd.Clear */ .vnb.Clear);

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
    var _listKeys = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var inp, _yield$inp$readAll, output, keys;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              inp = new _pipes__WEBPACK_IMPORTED_MODULE_4__/* .InPipeReader */ .oI(this.bus);
              _context2.next = 3;
              return this.service.sendPacketAsync(inp.openCommand(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SettingsCmd.ListKeys */ .vnb.ListKeys), true);

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
    var _list = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      var inp, _yield$inp$readAll2, output;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              inp = new _pipes__WEBPACK_IMPORTED_MODULE_4__/* .InPipeReader */ .oI(this.bus);
              _context3.next = 3;
              return this.service.sendPacketAsync(inp.openCommand(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SettingsCmd.List */ .vnb.List), true);

            case 3:
              _context3.next = 5;
              return inp.readAll();

            case 5:
              _yield$inp$readAll2 = _context3.sent;
              output = _yield$inp$readAll2.output;
              return _context3.abrupt("return", output.map(function (pkt) {
                var _pkt$jdunpack = pkt.jdunpack("z b"),
                    key = _pkt$jdunpack[0],
                    value = _pkt$jdunpack[1];

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
    var _setValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(key, value) {
      var pkt;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
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
              pkt = _packet__WEBPACK_IMPORTED_MODULE_3__/* .default.from */ .Z.from(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SettingsCmd.Set */ .vnb.Set, (0,_pack__WEBPACK_IMPORTED_MODULE_2__/* .jdpack */ .AV)("z b", [key, value]));
              _context4.next = 9;
              return this.service.sendPacketAsync(pkt);

            case 9:
              this.emit(_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE */ .Ver);

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

  _proto.setStringValue = /*#__PURE__*/function () {
    var _setStringValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(key, value) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.setValue(key, value ? (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .stringToBuffer */ .k8)(value) : undefined);

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function setStringValue(_x3, _x4) {
      return _setStringValue.apply(this, arguments);
    }

    return setStringValue;
  }();

  _proto.getValue = /*#__PURE__*/function () {
    var _getValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(key) {
      var pkt, resp, _jdunpack, rkey, value;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (key) {
                _context6.next = 2;
                break;
              }

              return _context6.abrupt("return", undefined);

            case 2:
              key = key.trim();
              pkt = _packet__WEBPACK_IMPORTED_MODULE_3__/* .default.from */ .Z.from(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SettingsCmd.Get */ .vnb.Get, (0,_pack__WEBPACK_IMPORTED_MODULE_2__/* .jdpack */ .AV)("s", [key]));
              _context6.next = 6;
              return this.service.sendCmdAwaitResponseAsync(pkt);

            case 6:
              resp = _context6.sent;
              _jdunpack = (0,_pack__WEBPACK_IMPORTED_MODULE_2__/* .jdunpack */ .TE)(resp.data, "z b"), rkey = _jdunpack[0], value = _jdunpack[1];

              if (!(key !== rkey)) {
                _context6.next = 11;
                break;
              }

              console.error("device returned different key, got \"" + rkey + "\", expected \"" + key + "\"");
              return _context6.abrupt("return", undefined);

            case 11:
              return _context6.abrupt("return", value);

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function getValue(_x5) {
      return _getValue.apply(this, arguments);
    }

    return getValue;
  }();

  _proto.getStringValue = /*#__PURE__*/function () {
    var _getStringValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(key) {
      var value;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.getValue(key);

            case 2:
              value = _context7.sent;
              return _context7.abrupt("return", value && (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .bufferToString */ .zT)(value));

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function getStringValue(_x6) {
      return _getStringValue.apply(this, arguments);
    }

    return getStringValue;
  }();

  _proto.deleteValue = /*#__PURE__*/function () {
    var _deleteValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(key) {
      var pkt;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (key) {
                _context8.next = 2;
                break;
              }

              return _context8.abrupt("return");

            case 2:
              key = key.trim();
              pkt = _packet__WEBPACK_IMPORTED_MODULE_3__/* .default.from */ .Z.from(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SettingsCmd.Delete */ .vnb.Delete, (0,_pack__WEBPACK_IMPORTED_MODULE_2__/* .jdpack */ .AV)("s", [key]));
              _context8.next = 6;
              return this.service.sendPacketAsync(pkt);

            case 6:
              this.emit(_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE */ .Ver);

            case 7:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function deleteValue(_x7) {
      return _deleteValue.apply(this, arguments);
    }

    return deleteValue;
  }();

  return SettingsClient;
}(_serviceclient__WEBPACK_IMPORTED_MODULE_5__/* .JDServiceClient */ .P);



/***/ }),

/***/ 94431:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ConnectAlert; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8266);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13173);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20392);
/* harmony import */ var _buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84125);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42862);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54774);
// tslint:disable-next-line: no-submodule-imports
 // tslint:disable-next-line: no-submodule-imports








var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({
    button: {
      marginLeft: theme.spacing(2)
    }
  });
});

function NoSsrConnectAlert(props) {
  var classes = useStyles();
  var serviceClass = props.serviceClass;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z),
      bus = _useContext.bus;

  var transports = bus.transports;
  var devices = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(bus, function (b) {
    return b.devices({
      serviceClass: serviceClass,
      ignoreSelf: true
    });
  });
  var spec = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass); // don't show if no transport, some devices

  if (!transports.length || devices !== null && devices !== void 0 && devices.length) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    displayPrint: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    severity: "info",
    closeable: true
  }, !spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect your device?"), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect a ", spec.name, " device?"), transports.map(function (transport) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      key: transport.type,
      transport: transport,
      className: classes.button,
      full: true,
      transparent: true
    });
  })));
}

function ConnectAlert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(NoSsrConnectAlert, props));
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

/***/ 95393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ GridHeader; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8266);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4998);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);



var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    container: true,
    direction: "row",
    spacing: 1,
    justify: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.hr, classes.start)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true
  }, action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    component: "span",
    mr: 1
  }, action), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    component: "span",
    variant: variant || "subtitle1"
  }, title), count !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    component: "span",
    ml: 0.5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    label: count
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: classes.hr
  }))));
}

/***/ }),

/***/ 82860:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": function() { return /* binding */ renderKeyboardKey; },
/* harmony export */   "Z": function() { return /* binding */ KeyboardKeyInput; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70274);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73512);
/* harmony import */ var react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81751);
/* harmony import */ var react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DarkModeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91350);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19640);







var selectors = {
  a: 0x04,
  b: 0x05,
  c: 0x06,
  d: 0x07,
  e: 0x08,
  f: 0x09,
  g: 0x0a,
  h: 0x0b,
  i: 0x0c,
  j: 0x0d,
  k: 0x0e,
  l: 0x0f,
  m: 0x10,
  n: 0x11,
  o: 0x12,
  p: 0x13,
  q: 0x14,
  r: 0x15,
  s: 0x16,
  t: 0x17,
  u: 0x18,
  v: 0x19,
  w: 0x1a,
  x: 0x1b,
  y: 0x1c,
  z: 0x1d,
  "1": 0x1e,
  "2": 0x1f,
  "3": 0x20,
  "4": 0x21,
  "5": 0x22,
  "6": 0x23,
  "7": 0x24,
  "8": 0x25,
  "9": 0x26,
  "0": 0x27,
  "!": 0x1e,
  "@": 0x1f,
  "#": 0x20,
  $: 0x21,
  "%": 0x22,
  "^": 0x23,
  "&": 0x24,
  "*": 0x25,
  "(": 0x26,
  ")": 0x27,
  enter: 0x28,
  escape: 0x29,
  backspace: 0x2a,
  tab: 0x2b,
  " ": 0x2c,
  "-": 0x2d,
  _: 0x2d,
  "=": 0x2e,
  "+": 0x2e,
  "[": 0x2f,
  "{": 0x2f,
  "]": 0x30,
  "}": 0x30,
  "\\": 0x31,
  "|": 0x31,
  // non-US #
  "~": 0x32,
  ";": 0x33,
  ":": 0x33,
  "'": 0x34,
  '"': 0x34,
  // grave accent tilde
  ",": 0x36,
  "<": 0x37,
  ".": 0x37,
  ">": 0x37,
  "/": 0x38,
  "?": 0x38,
  capslock: 0x39,
  f1: 0x3a,
  f2: 0x3b,
  f3: 0x3c,
  f4: 0x3d,
  f5: 0x3e,
  f6: 0x3f,
  f7: 0x40,
  f8: 0x41,
  f9: 0x42,
  f10: 0x43,
  f11: 0x44,
  f12: 0x45,
  printscreen: 0x46,
  scrolllock: 0x47,
  pause: 0x48,
  insert: 0x49,
  home: 0x4a,
  pageup: 0x4b,
  delete: 0x4c,
  end: 0x4d,
  pagedown: 0x4e,
  arrowright: 0x4f,
  arrowleft: 0x50,
  arrowdown: 0x51,
  arrowup: 0x52,
  numlock: 0x53,
  numpaddivide: 0x54,
  numpadmultiply: 0x55,
  numpadsubstract: 0x56,
  numpadadd: 0x57,
  numpadenter: 0x58,
  numpad1: 0x59,
  numpad2: 0x5a,
  numpad3: 0x5b,
  numpad4: 0x5c,
  numpad5: 0x5d,
  numpad6: 0x5e,
  numpad7: 0x5f,
  numpad8: 0x60,
  numpad9: 0x61,
  numpad0: 0x62,
  numpaddecimal: 0x63,
  numpadequal: 0x67,
  f13: 0x68,
  f14: 0x69,
  f15: 0x6a,
  f16: 0x6b,
  f17: 0x6c,
  f18: 0x6d,
  f19: 0x6e,
  f20: 0x6f,
  f21: 0x70,
  f22: 0x71,
  f23: 0x72,
  f24: 0x73,
  execute: 0x74,
  help: 0x75,
  contextmenu: 0x76,
  select: 0x77,
  stop: 0x78,
  again: 0x79,
  undo: 0x7a,
  cut: 0x7b,
  copy: 0x7c,
  paste: 0x7d,
  find: 0x7e,
  mute: 0x7f,
  volumeup: 0x80,
  volumedown: 0x81,
  numpadcomma: 0x85
};
var reverseSelectors = Object.keys(selectors).reduce(function (r, key) {
  if (!r[selectors[key]]) r[selectors[key]] = key;
  return r;
}, {});
var modifierCodes = {
  controlleft: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftControl */ .Q2Q.LeftControl,
  altleft: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftAlt */ .Q2Q.LeftAlt,
  shiftleft: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftShift */ .Q2Q.LeftShift,
  metaleft: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftGUI */ .Q2Q.LeftGUI,
  controlright: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.RightControl */ .Q2Q.RightControl,
  altright: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.RightAlt */ .Q2Q.RightAlt,
  shiftright: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.RightShift */ .Q2Q.RightShift,
  metaright: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.RightGUI */ .Q2Q.RightGUI
};
var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({
    capture: {
      cursor: "pointer",
      "&:hover": {
        borderColor: theme.palette.primary.main
      },
      "&:focus": {
        borderColor: theme.palette.action.active
      }
    },
    darkKeyboard: {
      backgroundColor: "#333 !important",
      borderColor: "#777 !important",
      color: "white !important",
      "& .hg-button": {
        background: "rgba(0, 0, 0, 0.5) !important",
        color: "white"
      },
      "& .hg-button.buttonSelected": {
        background: theme.palette.primary.dark + " !important",
        color: "white !important"
      }
    },
    keyboard: {
      "& .buttonSelected": {
        background: theme.palette.primary.dark + " !important",
        color: "white !important"
      }
    }
  });
});
function renderKeyboardKey(selector, modifiers, pretty) {
  var flags = pretty ? ["Ctrl", "Shift", "Alt", "Cmd", "Ctrl Right", "Shift Right", "AltRight", "Cmd Right"] : ["{controlleft}", "{shiftleft}", "{altleft}", "{metaleft}", "{controlright}", "{shiftright}", "{altright}", "{metaright}"];
  var sep = pretty ? " + " : " ";
  var values = [];
  flags.forEach(function (flag, i) {
    if (modifiers & 1 << i) {
      values.push(flag);
    }
  });
  var sel = reverseSelectors[selector];
  if (sel !== undefined) values.push(pretty ? sel.toUpperCase() : !pretty && sel.length > 1 ? "{" + sel + "}" : sel);
  var value = values.filter(function (v) {
    return !!v;
  }).join(sep);
  return value;
}
function KeyboardKeyInput(props) {
  var initialSelector = props.initialSelector,
      initialModifiers = props.initialModifiers,
      selector = props.selector,
      modifiers = props.modifiers,
      onChange = props.onChange;
  var uncontrolled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return selector === undefined || modifiers === undefined;
  }, []);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialSelector || 0),
      selector_ = _useState[0],
      setSelector_ = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialModifiers || _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.None */ .Q2Q.None),
      modifiers_ = _useState2[0],
      setModifiters_ = _useState2[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_DarkModeContext__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z),
      darkMode = _useContext.darkMode; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var _keyboardRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var classes = useStyles();
  var theme = "hg-theme-default hg-layout-default " + (darkMode === "dark" ? classes.darkKeyboard : classes.keyboard);
  var keyboardId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_4__/* .useId */ .Me)();
  var layout = {
    default: ["{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}", "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}", "{tab} q w e r t y u i o p [ ] \\", "{capslock} a s d f g h j k l ; ' {enter}", "{shiftleft} z x c v b n m , . / {shiftright}", "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}"]
  };
  var display = {
    "{escape}": "esc ⎋",
    "{tab}": "tab ⇥",
    "{backspace}": "backspace ⌫",
    "{enter}": "enter ↵",
    "{capslock}": "caps lock ⇪",
    "{shiftleft}": "shift ⇧",
    "{shiftright}": "shift ⇧",
    "{controlleft}": "ctrl ⌃",
    "{controlright}": "ctrl ⌃",
    "{altleft}": "alt ⌥",
    "{altright}": "alt ⌥",
    "{metaleft}": "cmd ⌘",
    "{metaright}": "cmd ⌘"
  };

  var handleKeyboardKeyPress = function handleKeyboardKeyPress(code) {
    code = code.toLowerCase().replace(/[{}]/g, "");
    var newSelector = selector_;
    var newModifiers = modifiers_;
    var msel = selectors[code];
    var mcode = modifierCodes[code];

    if (msel) {
      if (msel === selector) newSelector = undefined;else newSelector = msel;
    } else {
      if (mcode) {
        if (newModifiers & mcode) newModifiers &= ~mcode;else newModifiers |= mcode;
      }
    }

    setSelector_(newSelector);
    setModifiters_(newModifiers);
    onChange(newSelector, newModifiers);
  }; // update external values


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (selector !== undefined) {
      if (uncontrolled) console.warn("trying to set an uncontrolled selector");
      setSelector_(selector);
    }
  }, [selector]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (modifiers !== undefined) {
      if (uncontrolled) console.warn("trying to set an uncontrolled modifier");
      setModifiters_(modifiers);
    }
  }, [modifiers]);
  var value = renderKeyboardKey(selector_, modifiers_, false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _keyboardRef$current;

    (_keyboardRef$current = _keyboardRef.current) === null || _keyboardRef$current === void 0 ? void 0 : _keyboardRef$current.addButtonTheme(value, "buttonSelected");
    return function () {
      var _keyboardRef$current2;

      return (_keyboardRef$current2 = _keyboardRef.current) === null || _keyboardRef$current2 === void 0 ? void 0 : _keyboardRef$current2.removeButtonTheme(value, "buttonSelected");
    };
  }, [value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2___default()), {
    baseClass: keyboardId,
    keyboardRef: function keyboardRef(r) {
      return _keyboardRef.current = r;
    },
    onKeyPress: handleKeyboardKeyPress,
    layout: layout,
    theme: theme,
    display: display,
    mergeDisplay: true
  });
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

/***/ }),

/***/ 24180:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HIDEvents; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20392);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(31186);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(52468);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(96422);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(65733);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54774);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71815);
/* harmony import */ var _components_ui_KeyboardKeyInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82860);
/* harmony import */ var _components_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79885);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(94500);
/* harmony import */ var _jacdac_ts_src_jdom_settingsclient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43771);
/* harmony import */ var _components_useServiceClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79465);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81794);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91635);
/* harmony import */ var _jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80303);
/* harmony import */ var _components_hooks_useServices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2928);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36176);
/* harmony import */ var _components_ui_Alert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95453);
/* harmony import */ var _components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(95393);
/* harmony import */ var _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(13996);
/* harmony import */ var _components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(94431);
/* harmony import */ var _components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(31477);
/* harmony import */ var _components_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7746);



function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





















 // all settings keys are prefixed with this string

var PREFIX = "@ke_"; // data layout format (18bytes)

var FORMAT = "b[8] u32 u8 u8 u16 u16"; // data layout types

function HIDEventToBuffer(event, ev) {
  var deviceId = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_9__/* .fromHex */ .H_)(event.service.device.deviceId);
  var service = event.service,
      code = event.code;
  var serviceClass = service.serviceClass,
      serviceIndex = service.serviceIndex;
  var selector = ev.selector,
      modifiers = ev.modifiers;
  var payload = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_10__/* .jdpack */ .AV)(FORMAT, [deviceId, serviceClass, serviceIndex, code, selector, modifiers]);
  return payload;
}

function bufferToHIDEvent(key, data, bus) {
  var _device$service;

  if ((data === null || data === void 0 ? void 0 : data.length) !== 18) return undefined;

  var _jdunpack = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_10__/* .jdunpack */ .TE)(data, FORMAT),
      deviceId = _jdunpack[0],
      serviceClass = _jdunpack[1],
      serviceIndex = _jdunpack[2],
      eventCode = _jdunpack[3],
      selector = _jdunpack[4],
      modifiers = _jdunpack[5];

  var deviceIds = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_9__/* .toHex */ .NC)(deviceId);
  var device = bus.device(deviceIds, true);
  var event = device === null || device === void 0 ? void 0 : (_device$service = device.service(serviceIndex)) === null || _device$service === void 0 ? void 0 : _device$service.event(eventCode);
  if (!event || event.service.serviceClass !== serviceClass) return undefined;
  return {
    key: key,
    eventId: event.id,
    selector: selector,
    modifiers: modifiers
  };
}

function SelectHIDEvent(props) {
  var onAdd = props.onAdd;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      event = _useState[0],
      setEvent = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      selector = _useState2[0],
      setSelector = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .HidKeyboardModifiers.None */ .Q2Q.None),
      modifiers = _useState3[0],
      setModifiers = _useState3[1];

  var excludedServices = [_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_CONTROL */ .gm9, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_PROTO_TEST */ .$Bn, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_ROLE_MANAGER */ .igi, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_SETTINGS */ .B9b, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_LOGGER */ .w9j];

  var eventFilter = function eventFilter(ev) {
    return ev.code !== _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SystemEvent.StatusCodeChanged */ .nSK.StatusCodeChanged;
  };

  var services = (0,_components_hooks_useServices__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z)({
    ignoreSelf: true,
    specification: true
  }).filter(function (srv) {
    return excludedServices.indexOf(srv.serviceClass) < 0;
  }).filter(function (srv) {
    return srv.events.some(eventFilter);
  });
  var events = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_9__/* .arrayConcatMany */ .ue)(services.map(function (service) {
    return service.events.filter(eventFilter);
  }));

  var handleClickEvent = function handleClickEvent(newEvent) {
    return function () {
      return setEvent(event === newEvent ? undefined : newEvent);
    };
  };

  var handleKeyChange = function handleKeyChange(newSelector, newModifiers) {
    setSelector(newSelector);
    setModifiers(newModifiers);
  };

  var disabled = !event || !selector;

  var handleAdd = function handleAdd() {
    return onAdd({
      eventId: event.id,
      selector: selector,
      modifiers: modifiers
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
    container: true,
    spacing: 2
  }, !(events !== null && events !== void 0 && events.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
    severity: "info"
  }, "Connect your devices to bind keyboard commands.")), events.filter(function (ev) {
    return !event || ev === event;
  }).map(function (ev) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
      item: true,
      xs: 12,
      sm: 6,
      lg: 4,
      xl: 3,
      key: ev.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, {
      device: ev.service.device,
      showAvatar: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
      variant: "h5"
    }, ev.service.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
      variant: "h4"
    }, (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_16__/* .humanify */ .lW)(ev.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_13__.Button, {
      onClick: handleClickEvent(ev),
      variant: "outlined"
    }, ev === event ? "unselect" : "select"))));
  }), event && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
    title: "Enter your keyboard/mouse command"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_KeyboardKeyInput__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    selector: selector,
    modifiers: modifiers,
    onChange: handleKeyChange
  }))), !disabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
    title: "Save your binding"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_13__.Button, {
    variant: "contained",
    color: "primary",
    disabled: disabled,
    onClick: handleAdd
  }, "Save binding"))));
}

function HIDEvents() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z),
      bus = _useContext.bus;

  var settingsServices = (0,_components_hooks_useServices__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z)({
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_SETTINGS */ .B9b
  });

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      settingsService = _useState4[0],
      setSettingsService = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      hidEvents = _useState5[0],
      setHIDEvents = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      open = _useState6[0],
      setOpen = _useState6[1];

  var gridBreakpoints = (0,_components_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_19__/* .default */ .Z)();

  var handleOpenAdd = function handleOpenAdd() {
    return setOpen(true);
  };

  var handleCloseAdd = function handleCloseAdd() {
    return setOpen(false);
  };

  var settings = (0,_components_useServiceClient__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(settingsService, function (srv) {
    return new _jacdac_ts_src_jdom_settingsclient__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z(srv);
  });
  (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(settings, /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_25__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var hes, all, _iterator, _step, kv, key, value, he;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            hes = [];

            if (!settings) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return settings.list();

          case 4:
            all = _context.sent;

            for (_iterator = _createForOfIteratorHelperLoose(all.filter(function (entry) {
              var _entry$key;

              return (_entry$key = entry.key) === null || _entry$key === void 0 ? void 0 : _entry$key.startsWith(PREFIX);
            })); !(_step = _iterator()).done;) {
              kv = _step.value;
              key = kv.key, value = kv.value;
              he = bufferToHIDEvent(key, value, bus);
              if (he) hes.push(he);
            }

          case 6:
            if (JSON.stringify(hes) !== JSON.stringify(hidEvents)) setHIDEvents(hes);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));

  var handleAdd = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_25__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(hidEvent) {
      var event, payload;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setOpen(false);
              event = bus.node(hidEvent.eventId);

              if (event) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return");

            case 4:
              payload = HIDEventToBuffer(event, hidEvent);
              settings.setValue(PREFIX + (0,_jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_11__/* .randomDeviceId */ .b_)(), payload);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleAdd(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleRemoveBinding = function handleRemoveBinding(index) {
    return function () {
      var key = hidEvents[index].key;
      if (key) settings.deleteValue(key);
    };
  };

  var handleSelectSettingsService = function handleSelectSettingsService(service) {
    return function () {
      return setSettingsService(settingsService === service ? undefined : service);
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", null, "Accesibility Adapter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
    title: "Select an adapter"
  }), !(settingsServices !== null && settingsServices !== void 0 && settingsServices.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_SETTINGS */ .B9b
  })), settingsServices.filter(function (srv) {
    return !settingsService || srv === settingsService;
  }).map(function (srv) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, Object.assign({
      item: true,
      key: srv.id
    }, gridBreakpoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, {
      device: srv.device,
      showAvatar: true,
      showMedia: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_13__.Button, {
      variant: "outlined",
      onClick: handleSelectSettingsService(srv)
    }, settingsService === srv ? "unselect" : "select"))));
  }), settings && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
    title: "Command Bindings"
  }), !(hidEvents !== null && hidEvents !== void 0 && hidEvents.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
    severity: "info"
  }, "No bindings yet! Click", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("strong", null, "Add binding"), " to start building your adapter.")), hidEvents === null || hidEvents === void 0 ? void 0 : hidEvents.map(function (_ref3) {
    var eventId = _ref3.eventId,
        selector = _ref3.selector,
        modifiers = _ref3.modifiers;
    return {
      event: bus.node(eventId),
      selector: selector,
      modifiers: modifiers
    };
  }).map(function (_ref4, index) {
    var event = _ref4.event,
        selector = _ref4.selector,
        modifiers = _ref4.modifiers;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, Object.assign({
      item: true
    }, gridBreakpoints, {
      key: event.id
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, {
      device: event.service.device,
      showAvatar: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
      variant: "h6"
    }, event.service.name, " ", (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_16__/* .humanify */ .lW)(event.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
      variant: "h5"
    }, (0,_components_ui_KeyboardKeyInput__WEBPACK_IMPORTED_MODULE_5__/* .renderKeyboardKey */ .O)(selector, modifiers, true))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
      title: "Remove binding",
      onClick: handleRemoveBinding(index)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z, null)))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_13__.Button, {
    variant: "contained",
    color: "primary",
    onClick: handleOpenAdd
  }, "Add binding")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z, {
    open: open,
    onClose: handleCloseAdd,
    maxWidth: "lg",
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z, null, "Add binding"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_29__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(SelectHIDEvent, {
    onAdd: handleAdd
  }))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-hid-events-tsx-c8ba76068c1074a7a33c.js.map