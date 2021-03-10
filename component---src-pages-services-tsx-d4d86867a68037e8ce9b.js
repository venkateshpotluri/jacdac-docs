(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "+khf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useDebounce; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// CONCATENATED MODULE: ./node_modules/use-debounce/esm/useDebouncedCallback.js

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked, or until the next browser frame is drawn. The debounced function
 * comes with a `cancel` method to cancel delayed `func` invocations and a
 * `flush` method to immediately invoke them. Provide `options` to indicate
 * whether `func` should be invoked on the leading and/or trailing edge of the
 * `wait` timeout. The `func` is invoked with the last arguments provided to the
 * debounced function. Subsequent calls to the debounced function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * If `wait` is omitted in an environment with `requestAnimationFrame`, `func`
 * invocation will be deferred until the next frame is drawn (typically about
 * 16ms).
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `debounce` and `throttle`.
 *
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0]
 *  The number of milliseconds to delay; if omitted, `requestAnimationFrame` is
 *  used (if available, otherwise it will be setTimeout(...,0)).
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * const resizeHandler = useDebouncedCallback(calculateLayout, 150);
 * window.addEventListener('resize', resizeHandler)
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * const clickHandler = useDebouncedCallback(sendMail, 300, {
 *   leading: true,
 *   trailing: false,
 * })
 * <button onClick={clickHandler}>click me</button>
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * const debounced = useDebouncedCallback(batchLog, 250, { 'maxWait': 1000 })
 * const source = new EventSource('/stream')
 * source.addEventListener('message', debounced)
 *
 * // Cancel the trailing debounced invocation.
 * window.addEventListener('popstate', debounced.cancel)
 *
 * // Check for pending invocations.
 * const status = debounced.pending() ? "Pending..." : "Ready"
 */

function useDebouncedCallback(func, wait, options) {
  var _this = this;

  var lastCallTime = Object(react["useRef"])(null);
  var lastInvokeTime = Object(react["useRef"])(0);
  var timerId = Object(react["useRef"])(null);
  var lastArgs = Object(react["useRef"])([]);
  var lastThis = Object(react["useRef"])();
  var result = Object(react["useRef"])();
  var funcRef = Object(react["useRef"])(func);
  var mounted = Object(react["useRef"])(true);
  funcRef.current = func; // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.

  var useRAF = !wait && wait !== 0 && typeof window !== 'undefined';

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  wait = +wait || 0;
  options = options || {};
  var leading = !!options.leading;
  var trailing = 'trailing' in options ? !!options.trailing : true; // `true` by default

  var maxing = ('maxWait' in options);
  var maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : null;
  var invokeFunc = Object(react["useCallback"])(function (time) {
    var args = lastArgs.current;
    var thisArg = lastThis.current;
    lastArgs.current = lastThis.current = null;
    lastInvokeTime.current = time;
    return result.current = funcRef.current.apply(thisArg, args);
  }, []);
  var startTimer = Object(react["useCallback"])(function (pendingFunc, wait) {
    if (useRAF) cancelAnimationFrame(timerId.current);
    timerId.current = useRAF ? requestAnimationFrame(pendingFunc) : setTimeout(pendingFunc, wait);
  }, [useRAF]);
  var shouldInvoke = Object(react["useCallback"])(function (time) {
    if (!mounted.current) return false;
    var timeSinceLastCall = time - lastCallTime.current;
    var timeSinceLastInvoke = time - lastInvokeTime.current; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return !lastCallTime.current || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }, [maxWait, maxing, wait]);
  var trailingEdge = Object(react["useCallback"])(function (time) {
    timerId.current = null; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs.current) {
      return invokeFunc(time);
    }

    lastArgs.current = lastThis.current = null;
    return result.current;
  }, [invokeFunc, trailing]);
  var timerExpired = Object(react["useCallback"])(function () {
    var time = Date.now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // https://github.com/xnimorz/use-debounce/issues/97


    if (!mounted.current) {
      return;
    } // Remaining wait calculation


    var timeSinceLastCall = time - lastCallTime.current;
    var timeSinceLastInvoke = time - lastInvokeTime.current;
    var timeWaiting = wait - timeSinceLastCall;
    var remainingWait = maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting; // Restart the timer

    startTimer(timerExpired, remainingWait);
  }, [maxWait, maxing, shouldInvoke, startTimer, trailingEdge, wait]);
  var cancel = Object(react["useCallback"])(function () {
    if (timerId.current) {
      useRAF ? cancelAnimationFrame(timerId.current) : clearTimeout(timerId.current);
    }

    lastInvokeTime.current = 0;
    lastArgs.current = lastCallTime.current = lastThis.current = timerId.current = null;
  }, [useRAF]);
  var flush = Object(react["useCallback"])(function () {
    return !timerId.current ? result.current : trailingEdge(Date.now());
  }, [trailingEdge]);
  Object(react["useEffect"])(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []);
  var debounced = Object(react["useCallback"])(function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var time = Date.now();
    var isInvoking = shouldInvoke(time);
    lastArgs.current = args;
    lastThis.current = _this;
    lastCallTime.current = time;

    if (isInvoking) {
      if (!timerId.current && mounted.current) {
        // Reset any `maxWait` timer.
        lastInvokeTime.current = lastCallTime.current; // Start the timer for the trailing edge.

        startTimer(timerExpired, wait); // Invoke the leading edge.

        return leading ? invokeFunc(lastCallTime.current) : result.current;
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime.current);
      }
    }

    if (!timerId.current) {
      startTimer(timerExpired, wait);
    }

    return result.current;
  }, [invokeFunc, leading, maxing, shouldInvoke, startTimer, timerExpired, wait]);
  var pending = Object(react["useCallback"])(function () {
    return !!timerId.current;
  }, []);
  var debouncedState = Object(react["useMemo"])(function () {
    return {
      callback: debounced,
      cancel: cancel,
      flush: flush,
      pending: pending
    };
  }, [debounced, cancel, flush, pending]);
  return debouncedState;
}
// CONCATENATED MODULE: ./node_modules/use-debounce/esm/useDebounce.js



function valueEquality(left, right) {
  return left === right;
}

function adjustFunctionValueOfSetState(value) {
  return typeof value === 'function' ? function () {
    return value;
  } : value;
}

function useStateIgnoreCallback(initialState) {
  var _a = Object(react["useState"])(adjustFunctionValueOfSetState(initialState)),
      state = _a[0],
      setState = _a[1];

  var setStateIgnoreCallback = Object(react["useCallback"])(function (value) {
    return setState(adjustFunctionValueOfSetState(value));
  }, []);
  return [state, setStateIgnoreCallback];
}

function useDebounce(value, delay, options) {
  var eq = options && options.equalityFn || valueEquality;

  var _a = useStateIgnoreCallback(value),
      state = _a[0],
      dispatch = _a[1];

  var debounced = useDebouncedCallback(Object(react["useCallback"])(function (value) {
    return dispatch(value);
  }, [dispatch]), delay, options);
  var previousValue = Object(react["useRef"])(value);
  Object(react["useEffect"])(function () {
    // We need to use this condition otherwise we will run debounce timer for the first render (including maxWait option)
    if (!eq(previousValue.current, value)) {
      debounced.callback(value);
      previousValue.current = value;
    }
  }, [value, debounced, eq]);
  return [state, {
    cancel: debounced.cancel,
    pending: debounced.pending,
    flush: debounced.flush
  }];
}

/***/ }),

/***/ "7SZd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ofer");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("H2TA");
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4hqb");







var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    height: '0.01em',
    // Fix IE 11 flexbox alignment. To remove at some point.
    maxHeight: '2em',
    alignItems: 'center',
    whiteSpace: 'nowrap'
  },

  /* Styles applied to the root element if `variant="filled"`. */
  filled: {
    '&$positionStart:not($hiddenLabel)': {
      marginTop: 16
    }
  },

  /* Styles applied to the root element if `position="start"`. */
  positionStart: {
    marginRight: 8
  },

  /* Styles applied to the root element if `position="end"`. */
  positionEnd: {
    marginLeft: 8
  },

  /* Styles applied to the root element if `disablePointerEvents=true`. */
  disablePointerEvents: {
    pointerEvents: 'none'
  },

  /* Styles applied if the adornment is used inside <FormControl hiddenLabel />. */
  hiddenLabel: {},

  /* Styles applied if the adornment is used inside <FormControl margin="dense" />. */
  marginDense: {}
};
var InputAdornment = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function InputAdornment(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disablePointer = props.disablePointerEvents,
      disablePointerEvents = _props$disablePointer === void 0 ? false : _props$disablePointer,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      position = props.position,
      variantProp = props.variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"]);

  var muiFormControl = Object(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_6__[/* useFormControl */ "b"])() || {};
  var variant = variantProp;

  if (variantProp && muiFormControl.variant) {
    if (false) {}
  }

  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].Provider, {
    value: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, disablePointerEvents && classes.disablePointerEvents, muiFormControl.hiddenLabel && classes.hiddenLabel, variant === 'filled' && classes.filled, {
      'start': classes.positionStart,
      'end': classes.positionEnd
    }[position], muiFormControl.margin === 'dense' && classes.marginDense),
    ref: ref
  }, other), typeof children === 'string' && !disableTypography ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Typography__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    color: "textSecondary"
  }, children) : children));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(styles, {
  name: 'MuiInputAdornment'
})(InputAdornment));

/***/ }),

/***/ "9CiV":
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
  d: "M20.38 8.57l-1.23 1.85a8 8 0 01-.22 7.58H5.07A8 8 0 0115.58 6.85l1.85-1.23A10 10 0 003.35 19a2 2 0 001.72 1h13.85a2 2 0 001.74-1 10 10 0 00-.27-10.44zm-9.79 6.84a2 2 0 002.83 0l5.66-8.49-8.49 5.66a2 2 0 000 2.83z"
}), 'Speed');

exports.default = _default;

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

/***/ "bSwy":
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
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
}), 'Search');

exports.default = _default;

/***/ }),

/***/ "fThz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ServiceCatalog; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("KQm4");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__("9jPY");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__("r9w1");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js
var InputAdornment = __webpack_require__("7SZd");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Divider/Divider.js
var Divider = __webpack_require__("wb2y");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__("IsqK");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__("eD//");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__("tVbE");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var jdom_spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// EXTERNAL MODULE: ./src/components/ui/GridHeader.tsx
var GridHeader = __webpack_require__("H6TX");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./src/components/icons/MakeCodeIcon.tsx
var MakeCodeIcon = __webpack_require__("DzGZ");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./jacdac-ts/src/hosts/hosts.ts + 22 modules
var hosts = __webpack_require__("y+c1");

// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__("NHHF");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// CONCATENATED MODULE: ./src/components/ui/ChipList.tsx


var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5)
      }
    }
  });
});
function ChipList(props) {
  var children = props.children;
  var classes = useStyles();
  if (!(children !== null && children !== void 0 && children.length)) return null;
  return /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.root
  }, children);
}
// EXTERNAL MODULE: ./src/components/icons/JacdacIcon.tsx
var JacdacIcon = __webpack_require__("w8dJ");

// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__("kmB/");

// CONCATENATED MODULE: ./src/components/ServiceSpecificationList.tsx














function ServiceSpecificatinListItem(props) {
  var _deviceSpecifications;

  var service = props.service;
  var shortId = service.shortId,
      classIdentifier = service.classIdentifier,
      name = service.name,
      notes = service.notes,
      tags = service.tags;
  var makecode = Object(jdom_spec["C" /* resolveMakecodeServiceFromClassIdentifier */])(classIdentifier);
  var simulator = Object(hosts["d" /* hostDefinitionFromServiceClass */])(classIdentifier);
  var device = !!((_deviceSpecifications = Object(jdom_spec["e" /* deviceSpecificationsForService */])(classIdentifier)) !== null && _deviceSpecifications !== void 0 && _deviceSpecifications.length);
  return /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/services/" + shortId,
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/react_default.a.createElement(ListItemText["a" /* default */], {
    key: classIdentifier,
    primary: name,
    secondary: /*#__PURE__*/react_default.a.createElement(ChipList, null, /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
      source: notes["short"]
    }), tags === null || tags === void 0 ? void 0 : tags.map(function (tag) {
      return /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
        key: tag,
        size: "small",
        label: tag
      });
    }), simulator && /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
      icon: /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
        kind: constants["cf" /* VIRTUAL_DEVICE_NODE_NAME */]
      }),
      size: "small",
      label: "simulator"
    }), device && /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
      icon: /*#__PURE__*/react_default.a.createElement(JacdacIcon["a" /* default */], null),
      size: "small",
      label: "devices"
    }), makecode && /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
      icon: /*#__PURE__*/react_default.a.createElement(MakeCodeIcon["a" /* default */], null),
      size: "small",
      label: "MakeCode"
    }))
  }));
}

function ServiceSpecificationList(props) {
  var services = props.services,
      title = props.title,
      count = props.count,
      shuffle = props.shuffle,
      status = props.status,
      infrastructure = props.infrastructure;
  var specs = Object(react["useMemo"])(function () {
    var r = services;
    if (status !== undefined) r = r.filter(function (spec) {
      return status.indexOf(spec.status) > -1;
    });
    if (infrastructure !== undefined) r = r.filter(function (spec) {
      return Object(jdom_spec["k" /* isInfrastructure */])(spec) == infrastructure;
    });
    if (shuffle) Object(utils["g" /* arrayShuffle */])(r);else r.sort(function (l, r) {
      return l.name.localeCompare(r.name);
    });
    if (count !== undefined) r = r.slice(0, count);
    return r;
  }, [services, count, shuffle, status, infrastructure]);
  if (!(specs !== null && specs !== void 0 && specs.length)) return null;
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1
  }, title && /*#__PURE__*/react_default.a.createElement(GridHeader["a" /* default */], {
    title: title,
    count: specs.length
  }), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(List["a" /* default */], null, specs.map(function (node) {
    return /*#__PURE__*/react_default.a.createElement(ListItem["a" /* default */], {
      button: true,
      key: node.shortId
    }, /*#__PURE__*/react_default.a.createElement(ServiceSpecificatinListItem, {
      service: node
    }));
  }))));
}
// EXTERNAL MODULE: ./node_modules/use-debounce/esm/useDebounce.js + 1 modules
var useDebounce = __webpack_require__("+khf");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Search.js
var Search = __webpack_require__("bSwy");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Speed.js
var Speed = __webpack_require__("9CiV");
var Speed_default = /*#__PURE__*/__webpack_require__.n(Speed);

// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__("W1g9");

// CONCATENATED MODULE: ./src/pages/services.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















function FilterChip(props) {
  var label = props.label,
      value = props.value,
      icon = props.icon,
      onClick = props.onClick;
  var descr = value ? "Disable " + label + " filter" : "Filter by " + label + " support";
  return /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
    label: label,
    "aria-label": descr,
    title: descr,
    icon: icon,
    variant: value ? "default" : "outlined",
    color: value ? "secondary" : undefined,
    onClick: onClick
  });
}

function ServiceCatalog() {
  var _useState = Object(react["useState"])({
    query: ""
  }),
      filter = _useState[0],
      setFilter = _useState[1];

  var _useDebounce = Object(useDebounce["a" /* default */])(filter, 200),
      deboundedFilter = _useDebounce[0];

  var searchId = Object(react_use_id_hook_esm["b" /* useId */])();
  var query = filter.query,
      tag = filter.tag,
      makeCode = filter.makeCode,
      simulators = filter.simulators,
      devices = filter.devices,
      sensors = filter.sensors;
  var allTags = Object(react["useMemo"])(function () {
    return Object(utils["Y" /* unique */])(Object(utils["f" /* arrayConcatMany */])(Object(jdom_spec["I" /* serviceSpecifications */])().map(function (srv) {
      return [srv.group].concat(Object(toConsumableArray["a" /* default */])(srv.tags));
    })).filter(function (t) {
      return !!t;
    }));
  }, []);
  var services = Object(react["useMemo"])(function () {
    var m = query.toLowerCase();
    var r = Object(jdom_spec["I" /* serviceSpecifications */])();

    if (m) {
      var _filter = function _filter(s) {
        return (s === null || s === void 0 ? void 0 : s.toLowerCase().indexOf(m)) > -1;
      };

      r = r.filter(function (srv) {
        return _filter(srv.name) || _filter(srv.notes["short"]);
      });
    }

    if (tag) {
      r = r.filter(function (srv) {
        return srv.group === tag || srv.tags.indexOf(tag) > -1;
      });
    }

    if (makeCode) r = r.filter(function (srv) {
      return !!Object(jdom_spec["C" /* resolveMakecodeServiceFromClassIdentifier */])(srv.classIdentifier);
    });
    if (simulators) r = r.filter(function (srv) {
      return !!Object(hosts["d" /* hostDefinitionFromServiceClass */])(srv.classIdentifier);
    });
    if (devices) r = r.filter(function (srv) {
      var _deviceSpecifications;

      return !!((_deviceSpecifications = Object(jdom_spec["e" /* deviceSpecificationsForService */])(srv.classIdentifier)) !== null && _deviceSpecifications !== void 0 && _deviceSpecifications.length);
    });
    if (sensors) r = r.filter(function (srv) {
      return Object(jdom_spec["u" /* isSensor */])(srv);
    });
    return r;
  }, [deboundedFilter]);

  var handleChange = function handleChange(event) {
    setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      query: event.target.value
    }));
  };

  var handleTagClick = function handleTagClick(t) {
    return function () {
      setFilter(_objectSpread(_objectSpread({}, filter), {}, {
        tag: tag === t ? "" : t
      }));
    };
  };

  var handleMakeCodeClick = function handleMakeCodeClick() {
    return setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      makeCode: !makeCode
    }));
  };

  var handleSimulatorClick = function handleSimulatorClick() {
    return setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      simulators: !simulators
    }));
  };

  var handleDevicesClick = function handleDevicesClick() {
    return setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      devices: !devices
    }));
  };

  var handleSensorsClick = function handleSensorsClick() {
    return setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      sensors: !sensors
    }));
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
    id: searchId,
    margin: "normal",
    type: "search",
    variant: "outlined",
    label: "Search services",
    "aria-label": "Search services",
    fullWidth: true,
    value: query,
    onChange: handleChange,
    InputProps: {
      startAdornment: /*#__PURE__*/react_default.a.createElement(InputAdornment["a" /* default */], {
        position: "start"
      }, /*#__PURE__*/react_default.a.createElement(Search_default.a, null))
    }
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(ChipList, null, allTags.map(function (t) {
    return /*#__PURE__*/react_default.a.createElement(FilterChip, {
      key: t,
      label: t,
      onClick: handleTagClick(t),
      value: tag === t
    });
  }), /*#__PURE__*/react_default.a.createElement(Divider["a" /* default */], {
    orientation: "vertical",
    flexItem: true
  }), /*#__PURE__*/react_default.a.createElement(FilterChip, {
    label: "Sensors",
    icon: /*#__PURE__*/react_default.a.createElement(Speed_default.a, null),
    value: sensors,
    onClick: handleSensorsClick
  }), /*#__PURE__*/react_default.a.createElement(FilterChip, {
    label: "Simulator",
    icon: /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
      kind: constants["cf" /* VIRTUAL_DEVICE_NODE_NAME */]
    }),
    value: simulators,
    onClick: handleSimulatorClick
  }), /*#__PURE__*/react_default.a.createElement(FilterChip, {
    label: "Devices",
    icon: /*#__PURE__*/react_default.a.createElement(JacdacIcon["a" /* default */], null),
    onClick: handleDevicesClick,
    value: devices
  }), /*#__PURE__*/react_default.a.createElement(FilterChip, {
    label: "MakeCode",
    icon: /*#__PURE__*/react_default.a.createElement(MakeCodeIcon["a" /* default */], null),
    value: makeCode,
    onClick: handleMakeCodeClick
  }))), !services.length && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, "There are no services matching this request."), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(ServiceSpecificationList, {
    title: "Stable",
    status: ["stable"],
    infrastructure: false,
    services: services
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(ServiceSpecificationList, {
    title: "Experimental",
    status: ["experimental"],
    infrastructure: false,
    services: services
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(ServiceSpecificationList, {
    title: "Jacdac",
    infrastructure: true,
    services: services
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(ServiceSpecificationList, {
    title: "Deprecated",
    status: ["deprecated"],
    infrastructure: false,
    services: services
  }))), /*#__PURE__*/react_default.a.createElement("h2", null, "See also"), /*#__PURE__*/react_default.a.createElement("p", null, "Known services are specified in", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    href: "https://github.com/microsoft/jacdac/tree/main/services"
  }, "https://github.com/microsoft/jacdac/tree/main/services"), ". Use the ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    href: "/tools/service-editor/"
  }, "Service Specification Editor"), " and send us a pull request to register your own service."), /*#__PURE__*/react_default.a.createElement("ul", null, /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/devices/"
  }, "Devices")), /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/tools/service-editor/"
  }, "Service Specification Editor"))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-services-tsx-d4d86867a68037e8ce9b.js.map