(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

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

/***/ "3SIa":
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
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
}), 'NotificationsNone');

exports.default = _default;

/***/ }),

/***/ "6IG3":
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

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "7.2",
  cy: "14.4",
  r: "3.2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "14.8",
  cy: "18",
  r: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "15.2",
  cy: "8.8",
  r: "4.8"
})), 'BubbleChart');

exports.default = _default;

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

/***/ "8dGm":
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
  d: "M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"
}), 'Reply');

exports.default = _default;

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

/***/ "B2Qq":
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
  d: "M7 2v11h3v9l7-12h-4l4-8z"
}), 'FlashOn');

exports.default = _default;

/***/ }),

/***/ "DgOb":
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
  d: "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
}), 'Computer');

exports.default = _default;

/***/ }),

/***/ "DzGZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HR5l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M4.703 2.615s-.505.05-.72.15a3.011 3.011 0 00-.391.221c-.22.12-.42.266-.6.444-.52.516-.795 1.2-.834 2.05a6.857 6.857 0 00-.066.961V8.36a5.117 5.117 0 01-.137 1.032 1.73 1.73 0 01-.4.773 2.006 2.006 0 00-.15.149 6.534 6.534 0 01-.848.617c-.303.196-.481.474-.537.83v.017c-.01.07-.017.14-.018.215L0 12.006v.008c0 .08.003.156.012.226h.002c.024.214.082.378.177.492.129.153.345.328.649.52.304.192.552.398.74.62.19.221.332.549.428.985.037.17.065.54.084 1.106v1.514c0 .285.023.542.056.787.001.047 0 .092.002.14.007.587.135 1.107.385 1.559.25.453.604.803 1.063 1.05.458.248.978.372 1.56.372h14.139c.262 0 .505-.05.72-.15.139-.064.267-.14.391-.221.218-.12.42-.266.6-.444.52-.516.795-1.2.834-2.05.042-.299.066-.618.066-.963v-1.918c.014-.372.059-.715.137-1.03.078-.314.213-.572.4-.775a1.98 1.98 0 00.15-.146c.2-.179.48-.384.848-.618.303-.196.481-.475.537-.832l.002-.015a1.66 1.66 0 00.018-.217V11.988c0-.08-.004-.156-.012-.226h-.002c-.024-.214-.082-.378-.177-.492-.129-.153-.345-.328-.649-.52a3.208 3.208 0 01-.74-.62c-.19-.221-.332-.55-.428-.987-.037-.17-.065-.538-.084-1.104V6.523c0-.285-.023-.542-.056-.787-.001-.047 0-.092-.002-.14-.007-.587-.135-1.107-.385-1.559a2.598 2.598 0 00-1.063-1.05c-.458-.248-.978-.372-1.56-.372H4.703zm1.22 1.24c.307 0 .533.058.673.172.115.096.168.24.168.453a.885.885 0 01-.069.36.501.501 0 01-.142.201.346.346 0 01-.18.07c-.31.042-.543.095-.713.164a1.03 1.03 0 00-.543.536c-.093.201-.149.47-.174.818-.022.301-.033.725-.033 1.293-.012.796-.058 1.422-.137 1.861-.07.398-.206.74-.4 1.02-.197.282-.499.552-.898.804l-.616.39.618.386c.286.18.52.368.695.558.166.18.304.407.414.672.115.277.2.614.248 1.004.051.413.076.908.076 1.47 0 .587.013 1.025.037 1.34.03.367.094.64.196.835.123.236.303.403.537.496.168.067.395.114.693.148a.404.404 0 01.268.16c.081.1.123.259.123.471 0 .308-.064.608-.84.608-.477 0-.898-.094-1.25-.282a2.006 2.006 0 01-.813-.785 2.402 2.402 0 01-.31-1.197c-.048-2.666-.098-3.199-.139-3.37-.115-.472-.286-.83-.525-1.097a3.373 3.373 0 00-.776-.633c-.216-.13-.375-.254-.47-.369-.027-.032-.088-.136-.088-.416 0-.288.09-.471.293-.596.454-.28.781-.522.998-.746.244-.251.415-.565.51-.931.084-.328.132-.788.148-1.407.015-.58.03-1.305.049-2.177.016-.706.229-1.25.654-1.666.426-.416.988-.618 1.719-.618zm12.153 0c.477 0 .898.095 1.25.282.348.185.612.442.813.785.2.343.305.746.31 1.197.048 2.666.098 3.199.139 3.37.115.472.286.83.525 1.097.216.24.476.452.776.633.217.131.376.255.47.369.027.032.088.136.088.416 0 .287-.09.471-.293.596-.454.28-.78.522-.998.746-.243.25-.415.565-.51.931-.084.328-.132.788-.148 1.407-.015.58-.03 1.305-.049 2.177-.016.706-.229 1.25-.654 1.666-.426.416-.988.618-1.719.618-.307 0-.533-.058-.672-.172-.116-.096-.168-.24-.168-.453 0-.135.021-.253.069-.36a.512.512 0 01.14-.201.353.353 0 01.182-.07c.31-.042.543-.095.713-.164.238-.099.424-.284.54-.538.094-.201.152-.468.177-.816.021-.301.033-.727.033-1.295.012-.796.058-1.42.137-1.86.07-.397.204-.74.398-1.019.196-.281.499-.552.898-.804l.616-.39-.616-.386a3.412 3.412 0 01-.695-.558 2.275 2.275 0 01-.416-.672 3.871 3.871 0 01-.246-1.004 12.22 12.22 0 01-.078-1.47c0-.587-.012-1.025-.037-1.34-.03-.367-.092-.64-.194-.835a1.021 1.021 0 00-.539-.496 2.76 2.76 0 00-.691-.148.4.4 0 01-.268-.16c-.082-.1-.123-.259-.123-.471 0-.308.064-.608.84-.608zm-6.29 1.348c.052-.005.341-.005.394 0v.01a1.524 1.524 0 011.287 1.457c0 .62-.332.891-.332.916-.33.346-.123.744.467.695 0 0 2.4.012 2.445 0a.576.576 0 01.422.555l-.002 2.574c-.106.3-.396.36-.658.111-.025 0-.296-.332-.916-.332a1.521 1.521 0 00-1.457 1.286h-.008a4.897 4.897 0 000 .394h.008a1.524 1.524 0 001.457 1.287c.62 0 .89-.332.916-.332.27-.256.557-.225.658.112v2.783a.562.562 0 01-.563.562H8.061a.561.561 0 01-.563-.562V8.836c0-.261.18-.492.422-.555.046.012 2.443 0 2.443 0 .659.032.798-.349.469-.695 0-.025-.332-.296-.332-.916a1.521 1.521 0 011.285-1.457v-.01z",
    strokeWidth: ".75"
  }));
});

/***/ }),

/***/ "F3CG":
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
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Create');

exports.default = _default;

/***/ }),

/***/ "FgCT":
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
  d: "M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z"
}), 'ConfirmationNumber');

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

/***/ "HK/0":
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
  d: "M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"
}), 'DeviceHub');

exports.default = _default;

/***/ }),

/***/ "IsqK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ofer");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("MquD");







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
var ListItemText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ListItemText(props, ref) {
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
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_List_ListContext__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]),
      dense = _React$useContext.dense;

  var primary = primaryProp != null ? primaryProp : children;

  if (primary != null && primary.type !== _Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] && !disableTypography) {
    primary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: "span",
      display: "block"
    }, primaryTypographyProps), primary);
  }

  var secondary = secondaryProp;

  if (secondary != null && secondary.type !== _Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] && !disableTypography) {
    secondary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      variant: "body2",
      className: classes.secondary,
      color: "textSecondary",
      display: "block"
    }, secondaryTypographyProps), secondary);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, dense && classes.dense, inset && classes.inset, primary && secondary && classes.multiline),
    ref: ref
  }, other), primary, secondary);
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiListItemText'
})(ListItemText));

/***/ }),

/***/ "Mtft":
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
  d: "M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"
}), 'DataUsage');

exports.default = _default;

/***/ }),

/***/ "NHHF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return KindIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return kindName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allKinds; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("F3CG");
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Y0qX");
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_CallToAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tBi4");
/* harmony import */ var _material_ui_icons_CallToAction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CallToAction__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_FlashOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("B2Qq");
/* harmony import */ var _material_ui_icons_FlashOn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FlashOn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_DataUsage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Mtft");
/* harmony import */ var _material_ui_icons_DataUsage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DataUsage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("8dGm");
/* harmony import */ var _material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_DeviceUnknown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("YNWc");
/* harmony import */ var _material_ui_icons_DeviceUnknown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeviceUnknown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_DeviceHub__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("HK/0");
/* harmony import */ var _material_ui_icons_DeviceHub__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeviceHub__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("6IG3");
/* harmony import */ var _material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("DgOb");
/* harmony import */ var _material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_BlurLinear__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("bhb1");
/* harmony import */ var _material_ui_icons_BlurLinear__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BlurLinear__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ConfirmationNumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("FgCT");
/* harmony import */ var _material_ui_icons_ConfirmationNumber__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ConfirmationNumber__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("3SIa");
/* harmony import */ var _material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("oTnw");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("ZfHV");
/* harmony import */ var _icons_JacdacIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("w8dJ");
 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name




function KindIcon(props) {
  var kind = props.kind,
      className = props.className;
  var icon;

  switch (kind) {
    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_RO */ "kc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DataUsage__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_RW */ "lc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_ANNOUNCE */ "jc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* CONST_NODE_NAME */ "H"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* COMMAND_NODE_NAME */ "D"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CallToAction__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* EVENT_NODE_NAME */ "kb"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_FlashOn__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* REPORT_NODE_NAME */ "Rc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* BUS_NODE_NAME */ "i"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DeviceHub__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* DEVICE_NODE_NAME */ "bb"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_JacdacIcon__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* VIRTUAL_DEVICE_NODE_NAME */ "ff"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* SERVICE_NODE_NAME */ "pd"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PIPE_NODE_NAME */ "wc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_BlurLinear__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PIPE_REPORT_NODE_NAME */ "yc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_BlurLinear__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* CRC_ACK_NODE_NAME */ "I"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ConfirmationNumber__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* SERVICE_TEST_NODE_NAME */ "qd"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_14___default.a, {
        className: className
      });
      break;

    default:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DeviceUnknown__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: className
      });
      break;
  }

  return icon;
}
function kindName(kind) {
  switch (kind) {
    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_RO */ "kc"]:
      return "read only";

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_RW */ "lc"]:
      return "read write";

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* VIRTUAL_DEVICE_NODE_NAME */ "ff"]:
      return "simulated device";

    default:
      return kind;
  }
}
function allKinds() {
  return [_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* REPORT_NODE_NAME */ "Rc"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_RW */ "lc"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_RO */ "kc"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* CONST_NODE_NAME */ "H"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* EVENT_NODE_NAME */ "kb"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* COMMAND_NODE_NAME */ "D"]];
}

/***/ }),

/***/ "Y0qX":
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
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
}), 'Lock');

exports.default = _default;

/***/ }),

/***/ "YNWc":
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
  d: "M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zM12 6.72c-1.96 0-3.5 1.52-3.5 3.47h1.75c0-.93.82-1.75 1.75-1.75s1.75.82 1.75 1.75c0 1.75-2.63 1.57-2.63 4.45h1.76c0-1.96 2.62-2.19 2.62-4.45 0-1.96-1.54-3.47-3.5-3.47zm-.88 8.8h1.76v1.76h-1.76z"
}), 'DeviceUnknown');

exports.default = _default;

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

/***/ "bhb1":
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
  d: "M5 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM3 21h18v-2H3v2zM5 9.5c.83 0 1.5-.67 1.5-1.5S5.83 6.5 5 6.5 3.5 7.17 3.5 8 4.17 9.5 5 9.5zm0 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM3 3v2h18V3H3zm14 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm0 4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM13 9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"
}), 'BlurLinear');

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

// EXTERNAL MODULE: ./jacdac-ts/src/test/testspec.ts
var testspec = __webpack_require__("rNA1");

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

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CheckCircle.js
var CheckCircle = __webpack_require__("oTnw");
var CheckCircle_default = /*#__PURE__*/__webpack_require__.n(CheckCircle);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/makecode.ts
var jdom_makecode = __webpack_require__("ys11");

// CONCATENATED MODULE: ./src/components/ServiceSpecificationList.tsx

















function ServiceSpecificatinListItem(props) {
  var _deviceSpecifications;

  var service = props.service;
  var shortId = service.shortId,
      classIdentifier = service.classIdentifier,
      name = service.name,
      notes = service.notes,
      tags = service.tags;
  var makecode = Object(jdom_makecode["c" /* resolveMakecodeServiceFromClassIdentifier */])(classIdentifier);
  var simulator = Object(hosts["d" /* hostDefinitionFromServiceClass */])(classIdentifier);
  var device = !!((_deviceSpecifications = Object(jdom_spec["e" /* deviceSpecificationsForService */])(classIdentifier)) !== null && _deviceSpecifications !== void 0 && _deviceSpecifications.length);
  var test = Object(testspec["a" /* serviceTestFromServiceClass */])(classIdentifier);
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
        kind: constants["ff" /* VIRTUAL_DEVICE_NODE_NAME */]
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
    }), test && /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
      icon: /*#__PURE__*/react_default.a.createElement(CheckCircle_default.a, null),
      size: "small",
      label: "test"
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
      sensors = filter.sensors,
      test = filter.test;
  var allTags = Object(react["useMemo"])(function () {
    return Object(utils["Y" /* unique */])(Object(utils["f" /* arrayConcatMany */])(Object(jdom_spec["F" /* serviceSpecifications */])().map(function (srv) {
      return [srv.group].concat(Object(toConsumableArray["a" /* default */])(srv.tags));
    })).filter(function (t) {
      return !!t;
    }));
  }, []);
  var services = Object(react["useMemo"])(function () {
    var m = query.toLowerCase();
    var r = Object(jdom_spec["F" /* serviceSpecifications */])();

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
      return !!Object(jdom_makecode["c" /* resolveMakecodeServiceFromClassIdentifier */])(srv.classIdentifier);
    });
    if (simulators) r = r.filter(function (srv) {
      return !!Object(hosts["d" /* hostDefinitionFromServiceClass */])(srv.classIdentifier);
    });
    if (devices) r = r.filter(function (srv) {
      var _deviceSpecifications;

      return !!((_deviceSpecifications = Object(jdom_spec["e" /* deviceSpecificationsForService */])(srv.classIdentifier)) !== null && _deviceSpecifications !== void 0 && _deviceSpecifications.length);
    });
    if (test) r = r.filter(function (srv) {
      return !!Object(testspec["a" /* serviceTestFromServiceClass */])(srv.classIdentifier);
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

  var handleTestClick = function handleTestClick() {
    return setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      test: !test
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
      kind: constants["ff" /* VIRTUAL_DEVICE_NODE_NAME */]
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
  }), /*#__PURE__*/react_default.a.createElement(FilterChip, {
    label: "Test",
    icon: /*#__PURE__*/react_default.a.createElement(CheckCircle_default.a, null),
    value: test,
    onClick: handleTestClick
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
  }, "https://github.com/microsoft/jacdac/tree/main/services"), ". Use the", " ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    href: "/tools/service-editor/"
  }, "Service Specification Editor"), " ", "and send us a pull request to register your own service."), /*#__PURE__*/react_default.a.createElement("ul", null, /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/devices/"
  }, "Devices")), /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/tools/service-editor/"
  }, "Service Specification Editor"))));
}

/***/ }),

/***/ "oTnw":
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckCircle');

exports.default = _default;

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

/***/ "rNA1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return serviceTestFromServiceClass; });
/* harmony import */ var _jacdac_spec_dist_services_tests_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("sh2y");
var _jacdac_spec_dist_services_tests_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t("sh2y", 1);
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../jacdac-spec/spectool/jdspec.d.ts" />
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../jacdac-spec/spectool/jdtest.d.ts" />
 // eslint-disable-next-line @typescript-eslint/no-explicit-any

var _serviceTests = _jacdac_spec_dist_services_tests_json__WEBPACK_IMPORTED_MODULE_0__;
/**
 * Given a service specification, see if it has a test
 * @param spec
 */

function serviceTestFromServiceClass(serviceClass) {
  return serviceClass !== undefined && _serviceTests.find(function (test) {
    return test.serviceClassIdentifier === serviceClass;
  });
}

/***/ }),

/***/ "sh2y":
/***/ (function(module) {

module.exports = JSON.parse("[{\"description\":\"Base tests\",\"serviceClassIdentifier\":536870899,\"tests\":[]},{\"description\":\"Sensor tests\",\"serviceClassIdentifier\":536870898,\"tests\":[]},{\"description\":\"Button tests\",\"serviceClassIdentifier\":343122531,\"tests\":[{\"description\":\"downUp: press down and up\",\"registers\":[],\"commands\":[{\"prompt\":\"press the button and release it immediately\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"did you observe an Up event, followed by a Down event?\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]},{\"description\":\"click: click the button\",\"registers\":[],\"commands\":[{\"prompt\":\"press the button down for 500ms and less than 1500ms and release it\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"did you observe a Click event?\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]},{\"description\":\"long click: hold the button\",\"registers\":[],\"commands\":[{\"prompt\":\"press the button down at least 1500ms and release it\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"did you observe a LongClick event?\\\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]}]},{\"description\":\"Potentiometer tests\",\"serviceClassIdentifier\":522667846,\"tests\":[{\"description\":\"position changes on movement\",\"registers\":[],\"commands\":[{\"prompt\":\"move the slider/potentiometer\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"did the position register's value change?\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]}]},{\"description\":\"Rotary encoder tests\",\"serviceClassIdentifier\":284830153,\"tests\":[{\"description\":\"knob turn\",\"registers\":[\"position\"],\"commands\":[{\"prompt\":\"turn the knob back and forth\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"changes\"}}}]},{\"description\":\"clockwise turn\",\"registers\":[\"position\"],\"commands\":[{\"prompt\":\"turn the knob clockwise\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"increases\"}}}]},{\"description\":\"counter-clockwise turn\",\"registers\":[\"position\"],\"commands\":[{\"prompt\":\"turn the knob counter-clockwise\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"decreases\"}}}]},{\"description\":\"one rotation clockwise\",\"registers\":[\"position\",\"clicks_per_turn\"],\"commands\":[{\"prompt\":\"turn one complete rotation clockwise\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"Identifier\",\"name\":\"clicks_per_turn\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"increasesBy\"}}}]},{\"description\":\"one rotation counter-clockwise\",\"registers\":[\"position\",\"clicks_per_turn\"],\"commands\":[{\"prompt\":\"turn one complete rotation counter-clockwise\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"Identifier\",\"name\":\"clicks_per_turn\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"decreasesBy\"}}}]},{\"description\":\"no missing value clockwise\",\"registers\":[\"position\",\"clicks_per_turn\"],\"commands\":[{\"prompt\":\"slowly turn clockwise one complete rotation\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"Identifier\",\"name\":\"position\"},\"right\":{\"type\":\"Identifier\",\"name\":\"clicks_per_turn\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"rangesFromUpTo\"}}},{\"prompt\":\"is the knob at the same physical position?\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]},{\"description\":\"no missing value counter-clockwise\",\"registers\":[\"position\",\"clicks_per_turn\"],\"commands\":[{\"prompt\":\"slowly turn counter-clockwise one complete rotation\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"BinaryExpression\",\"operator\":\"-\",\"left\":{\"type\":\"Identifier\",\"name\":\"position\"},\"right\":{\"type\":\"Identifier\",\"name\":\"clicks_per_turn\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"rangesFromDownTo\"}}}]},{\"description\":\"reset test\",\"registers\":[\"position\"],\"commands\":[{\"prompt\":\"reset test (automated)\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"reset\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"==\",\"left\":{\"type\":\"Identifier\",\"name\":\"position\"},\"right\":{\"type\":\"Literal\",\"value\":0,\"raw\":\"0\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"check\"}}}]}]}]");

/***/ }),

/***/ "tBi4":
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
  d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z"
}), 'CallToAction');

exports.default = _default;

/***/ }),

/***/ "wb2y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ye/S");






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 1,
      margin: 0,
      // Reset browser default style.
      border: 'none',
      flexShrink: 0,
      backgroundColor: theme.palette.divider
    },

    /* Styles applied to the root element if `absolute={true}`. */
    absolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    },

    /* Styles applied to the root element if `variant="inset"`. */
    inset: {
      marginLeft: 72
    },

    /* Styles applied to the root element if `light={true}`. */
    light: {
      backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__[/* fade */ "c"])(theme.palette.divider, 0.08)
    },

    /* Styles applied to the root element if `variant="middle"`. */
    middle: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      height: '100%',
      width: 1
    },

    /* Styles applied to the root element if `flexItem={true}`. */
    flexItem: {
      alignSelf: 'stretch',
      height: 'auto'
    }
  };
};
var Divider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Divider(props, ref) {
  var _props$absolute = props.absolute,
      absolute = _props$absolute === void 0 ? false : _props$absolute,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'hr' : _props$component,
      _props$flexItem = props.flexItem,
      flexItem = _props$flexItem === void 0 ? false : _props$flexItem,
      _props$light = props.light,
      light = _props$light === void 0 ? false : _props$light,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$role = props.role,
      role = _props$role === void 0 ? Component !== 'hr' ? 'separator' : undefined : _props$role,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'fullWidth' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["absolute", "classes", "className", "component", "flexItem", "light", "orientation", "role", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, variant !== 'fullWidth' && classes[variant], absolute && classes.absolute, flexItem && classes.flexItem, light && classes.light, orientation === 'vertical' && classes.vertical),
    role: role,
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiDivider'
})(Divider));

/***/ }),

/***/ "xCA3":
/***/ (function(module) {

module.exports = JSON.parse("[{\"service\":\"accelerometer\",\"client\":{\"name\":\"jacdac-accelerometer\",\"repo\":\"microsoft/pxt-jacdac/accelerometer\",\"qName\":\"modules.AccelerometerClient\",\"default\":\"modules.accelerometer\"}},{\"service\":\"barometer\",\"client\":{\"name\":\"jacdac-barometer\",\"repo\":\"microsoft/pxt-jacdac/barometer\",\"qName\":\"modules.BarometerClient\",\"default\":\"modules.barometer\"}},{\"service\":\"button\",\"client\":{\"name\":\"jacdac-button\",\"repo\":\"microsoft/pxt-jacdac/button\",\"qName\":\"modules.ButtonClient\",\"default\":\"modules.button\"}},{\"service\":\"buzzer\",\"client\":{\"name\":\"jacdac-buzzer\",\"repo\":\"microsoft/pxt-jacdac/buzzer\",\"qName\":\"modules.BuzzerClient\",\"default\":\"modules.buzzer\"}},{\"service\":\"characterscreen\",\"client\":{\"name\":\"jacdac-character-screen\",\"repo\":\"microsoft/pxt-jacdac/character-screen\",\"qName\":\"modules.CharacterScreenClient\",\"default\":\"modules.characterScreen\"}},{\"service\":\"compass\",\"client\":{\"name\":\"jacdac-compass\",\"repo\":\"microsoft/pxt-jacdac/compass\",\"qName\":\"modules.CompassClient\",\"default\":\"modules.compass\"}},{\"service\":\"distance\",\"client\":{\"name\":\"jacdac-distance\",\"repo\":\"microsoft/pxt-jacdac/distance\",\"qName\":\"modules.DistanceClient\",\"default\":\"modules.distance\"}},{\"service\":\"dmx\",\"client\":{\"name\":\"jacdac-dmx\",\"repo\":\"microsoft/pxt-jacdac/dmx\",\"qName\":\"modules.DmxClient\",\"default\":\"modules.dmx\"}},{\"service\":\"eco2\",\"client\":{\"name\":\"jacdac-e-co2\",\"repo\":\"microsoft/pxt-jacdac/e-co2\",\"qName\":\"modules.ECO2Client\",\"default\":\"modules.eCO2\"}},{\"service\":\"gyroscope\",\"client\":{\"name\":\"jacdac-gyroscope\",\"repo\":\"microsoft/pxt-jacdac/gyroscope\",\"qName\":\"modules.GyroscopeClient\",\"default\":\"modules.gyroscope\"}},{\"service\":\"heartrate\",\"client\":{\"name\":\"jacdac-heart-rate\",\"repo\":\"microsoft/pxt-jacdac/heart-rate\",\"qName\":\"modules.HeartRateClient\",\"default\":\"modules.heartRate\"}},{\"service\":\"humidity\",\"client\":{\"name\":\"jacdac-humidity\",\"repo\":\"microsoft/pxt-jacdac/humidity\",\"qName\":\"modules.HumidityClient\",\"default\":\"modules.humidity\"}},{\"service\":\"illuminance\",\"client\":{\"name\":\"jacdac-illuminance\",\"repo\":\"microsoft/pxt-jacdac/illuminance\",\"qName\":\"modules.IlluminanceClient\",\"default\":\"modules.illuminance\"}},{\"service\":\"joystick\",\"client\":{\"name\":\"jacdac-joystick\",\"repo\":\"microsoft/pxt-jacdac/joystick\",\"qName\":\"modules.JoystickClient\",\"default\":\"modules.joystick\"}},{\"service\":\"led\",\"client\":{\"name\":\"jacdac-led\",\"repo\":\"microsoft/pxt-jacdac/led\",\"qName\":\"modules.LedClient\",\"default\":\"modules.led\"}},{\"service\":\"ledpixel\",\"client\":{\"name\":\"jacdac-led-pixel\",\"repo\":\"microsoft/pxt-jacdac/led-pixel\",\"qName\":\"modules.LedPixelClient\",\"default\":\"modules.ledPixel\"}},{\"service\":\"lightlevel\",\"client\":{\"name\":\"jacdac-light-level\",\"repo\":\"microsoft/pxt-jacdac/light-level\",\"qName\":\"modules.LightLevelClient\",\"default\":\"modules.lightLevel\"}},{\"service\":\"magnetomer\",\"client\":{\"name\":\"jacdac-magnetometer\",\"repo\":\"microsoft/pxt-jacdac/magnetometer\",\"qName\":\"modules.MagnetometerClient\",\"default\":\"modules.magnetometer\"}},{\"service\":\"modelrunner\",\"client\":{\"name\":\"jacdac-model-runner\",\"repo\":\"microsoft/pxt-jacdac/model-runner\",\"qName\":\"modules.ModelRunnerClient\",\"default\":\"modules.modelRunner\"}},{\"service\":\"motion\",\"client\":{\"name\":\"jacdac-motion\",\"repo\":\"microsoft/pxt-jacdac/motion\",\"qName\":\"modules.MotionClient\",\"default\":\"modules.motion\"}},{\"service\":\"motor\",\"client\":{\"name\":\"jacdac-motor\",\"repo\":\"microsoft/pxt-jacdac/motor\",\"qName\":\"modules.MotorClient\",\"default\":\"modules.motor\"}},{\"service\":\"multitouch\",\"client\":{\"name\":\"jacdac-multitouch\",\"repo\":\"microsoft/pxt-jacdac/multitouch\",\"qName\":\"modules.MultitouchClient\",\"default\":\"modules.multitouch\"}},{\"service\":\"potentiometer\",\"client\":{\"name\":\"jacdac-potentiometer\",\"repo\":\"microsoft/pxt-jacdac/potentiometer\",\"qName\":\"modules.PotentiometerClient\",\"default\":\"modules.potentiometer\"}},{\"service\":\"pulseoximeter\",\"client\":{\"name\":\"jacdac-pulse-oximeter\",\"repo\":\"microsoft/pxt-jacdac/pulse-oximeter\",\"qName\":\"modules.PulseOximeterClient\",\"default\":\"modules.pulseOximeter\"}},{\"service\":\"raingauge\",\"client\":{\"name\":\"jacdac-rain-gauge\",\"repo\":\"microsoft/pxt-jacdac/rain-gauge\",\"qName\":\"modules.RainGaugeClient\",\"default\":\"modules.rainGauge\"}},{\"service\":\"realtimeclock\",\"client\":{\"name\":\"jacdac-real-time-clock\",\"repo\":\"microsoft/pxt-jacdac/real-time-clock\",\"qName\":\"modules.RealTimeClockClient\",\"default\":\"modules.realTimeClock\"}},{\"service\":\"reflectedlight\",\"client\":{\"name\":\"jacdac-reflected-light\",\"repo\":\"microsoft/pxt-jacdac/reflected-light\",\"qName\":\"modules.ReflectedLightClient\",\"default\":\"modules.reflectedLight\"}},{\"service\":\"rotaryencoder\",\"client\":{\"name\":\"jacdac-rotary-encoder\",\"repo\":\"microsoft/pxt-jacdac/rotary-encoder\",\"qName\":\"modules.RotaryEncoderClient\",\"default\":\"modules.rotaryEncoder\"}},{\"service\":\"sensoraggregator\",\"client\":{\"name\":\"jacdac-sensor-aggregator\",\"repo\":\"microsoft/pxt-jacdac/sensor-aggregator\",\"qName\":\"modules.SensorAggregatorClient\",\"default\":\"modules.sensorAggregator\"}},{\"service\":\"servo\",\"client\":{\"name\":\"jacdac-servo\",\"repo\":\"microsoft/pxt-jacdac/servo\",\"qName\":\"modules.ServoClient\",\"default\":\"modules.servo\"}},{\"service\":\"settings\",\"client\":{\"name\":\"jacdac-settings\",\"repo\":\"microsoft/pxt-jacdac/settings\",\"qName\":\"modules.SettingsClient\",\"default\":\"modules.settings\"}},{\"service\":\"soilmoisture\",\"client\":{\"name\":\"jacdac-soil-moisture\",\"repo\":\"microsoft/pxt-jacdac/soil-moisture\",\"qName\":\"modules.SoilMoistureClient\",\"default\":\"modules.soilMoisture\"}},{\"service\":\"solenoid\",\"client\":{\"name\":\"jacdac-solenoid\",\"repo\":\"microsoft/pxt-jacdac/solenoid\",\"qName\":\"modules.SolenoidClient\",\"default\":\"modules.solenoid\"}},{\"service\":\"tcp\",\"client\":{\"name\":\"jacdac-tcp\",\"repo\":\"microsoft/pxt-jacdac/tcp\",\"qName\":\"modules.TcpClient\",\"default\":\"modules.tcp\"}},{\"service\":\"thermocouple\",\"client\":{\"name\":\"jacdac-thermocouple\",\"repo\":\"microsoft/pxt-jacdac/thermocouple\",\"qName\":\"modules.ThermocoupleClient\",\"default\":\"modules.thermocouple\"}},{\"service\":\"thermometer\",\"client\":{\"name\":\"jacdac-thermometer\",\"repo\":\"microsoft/pxt-jacdac/thermometer\",\"qName\":\"modules.ThermometerClient\",\"default\":\"modules.thermometer\"}},{\"service\":\"tvoc\",\"client\":{\"name\":\"jacdac-tvoc\",\"repo\":\"microsoft/pxt-jacdac/tvoc\",\"qName\":\"modules.TvocClient\",\"default\":\"modules.tvoc\"}},{\"service\":\"uvindex\",\"client\":{\"name\":\"jacdac-uv-index\",\"repo\":\"microsoft/pxt-jacdac/uv-index\",\"qName\":\"modules.UvIndexClient\",\"default\":\"modules.uvIndex\"}},{\"service\":\"waterlevel\",\"client\":{\"name\":\"jacdac-water-level\",\"repo\":\"microsoft/pxt-jacdac/water-level\",\"qName\":\"modules.WaterLevelClient\",\"default\":\"modules.waterLevel\"}},{\"service\":\"weightscale\",\"client\":{\"name\":\"jacdac-weight-scale\",\"repo\":\"microsoft/pxt-jacdac/weight-scale\",\"qName\":\"modules.WeightScaleClient\",\"default\":\"modules.weightScale\"}},{\"service\":\"wifi\",\"client\":{\"name\":\"jacdac-wifi\",\"repo\":\"microsoft/pxt-jacdac/wifi\",\"qName\":\"modules.WifiClient\",\"default\":\"modules.wifi\"}},{\"service\":\"winddirection\",\"client\":{\"name\":\"jacdac-wind-direction\",\"repo\":\"microsoft/pxt-jacdac/wind-direction\",\"qName\":\"modules.WindDirectionClient\",\"default\":\"modules.windDirection\"}},{\"service\":\"windspeed\",\"client\":{\"name\":\"jacdac-wind-speed\",\"repo\":\"microsoft/pxt-jacdac/wind-speed\",\"qName\":\"modules.WindSpeedClient\",\"default\":\"modules.windSpeed\"}}]");

/***/ }),

/***/ "ys11":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeCodeServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resolveMakecodeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return resolveMakecodeServiceFromClassIdentifier; });
/* harmony import */ var _jacdac_spec_services_makecode_extensions_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xCA3");
var _jacdac_spec_services_makecode_extensions_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t("xCA3", 1);
/* harmony import */ var _spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Z8Ma");


function makeCodeServices() {
  return _jacdac_spec_services_makecode_extensions_json__WEBPACK_IMPORTED_MODULE_0__.slice(0);
}
function resolveMakecodeService(service) {
  return service && _jacdac_spec_services_makecode_extensions_json__WEBPACK_IMPORTED_MODULE_0__.find(function (mk) {
    return mk.service === service.shortId;
  });
}
function resolveMakecodeServiceFromClassIdentifier(serviceClass) {
  var srv = Object(_spec__WEBPACK_IMPORTED_MODULE_1__[/* serviceSpecificationFromClassIdentifier */ "D"])(serviceClass);
  return srv && resolveMakecodeService(srv);
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-services-tsx-af8d43bc3636b1859af3.js.map