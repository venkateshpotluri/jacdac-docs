(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

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

/***/ "36VR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ PacketView; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./src/components/PacketListItem.tsx
var PacketListItem = __webpack_require__("7qUl");

// EXTERNAL MODULE: ./src/components/PacketsContext.tsx + 3 modules
var PacketsContext = __webpack_require__("VKQG");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__("dI71");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("JX7q");

// CONCATENATED MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  function memoized() {
    var newArgs = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }

  return memoized;
}

/* harmony default export */ var memoize_one_esm = (memoizeOne);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// CONCATENATED MODULE: ./node_modules/react-window/dist/index.esm.js





 // Animation frame based implementation of setTimeout.
// Inspired by Joe Lambert, https://gist.github.com/joelambert/1002116#file-requesttimeout-js

var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
var now = hasNativePerformanceNow ? function () {
  return performance.now();
} : function () {
  return Date.now();
};

function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}

function requestTimeout(callback, delay) {
  var start = now();

  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }

  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}

var size = -1; // This utility copied from "dom-helpers" package.

function getScrollbarSize(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (size === -1 || recalculate) {
    var div = document.createElement('div');
    var style = div.style;
    style.width = '50px';
    style.height = '50px';
    style.overflow = 'scroll';
    document.body.appendChild(div);
    size = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }

  return size;
}

var cachedRTLResult = null; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
// Chrome does not seem to adhere; its scrollLeft values are positive (measured relative to the left).
// Safari's elastic bounce makes detecting this even more complicated wrt potential false positives.
// The safest way to check this is to intentionally set a negative offset,
// and then verify that the subsequent "scroll" event matches the negative offset.
// If it does not match, then we can assume a non-standard RTL scroll implementation.

function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement('div');
    var outerStyle = outerDiv.style;
    outerStyle.width = '50px';
    outerStyle.height = '50px';
    outerStyle.overflow = 'scroll';
    outerStyle.direction = 'rtl';
    var innerDiv = document.createElement('div');
    var innerStyle = innerDiv.style;
    innerStyle.width = '100px';
    innerStyle.height = '100px';
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);

    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = 'positive-descending';
    } else {
      outerDiv.scrollLeft = 1;

      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = 'negative';
      } else {
        cachedRTLResult = 'positive-ascending';
      }
    }

    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }

  return cachedRTLResult;
}

var IS_SCROLLING_DEBOUNCE_INTERVAL = 150;

var defaultItemKey = function defaultItemKey(_ref) {
  var columnIndex = _ref.columnIndex,
      data = _ref.data,
      rowIndex = _ref.rowIndex;
  return rowIndex + ":" + columnIndex;
}; // In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.


var devWarningsOverscanCount = null;
var devWarningsOverscanRowsColumnsCount = null;
var devWarningsTagName = null;

if (false) {}

function createGridComponent(_ref2) {
  var _class, _temp;

  var getColumnOffset = _ref2.getColumnOffset,
      getColumnStartIndexForOffset = _ref2.getColumnStartIndexForOffset,
      getColumnStopIndexForStartIndex = _ref2.getColumnStopIndexForStartIndex,
      getColumnWidth = _ref2.getColumnWidth,
      getEstimatedTotalHeight = _ref2.getEstimatedTotalHeight,
      getEstimatedTotalWidth = _ref2.getEstimatedTotalWidth,
      getOffsetForColumnAndAlignment = _ref2.getOffsetForColumnAndAlignment,
      getOffsetForRowAndAlignment = _ref2.getOffsetForRowAndAlignment,
      getRowHeight = _ref2.getRowHeight,
      getRowOffset = _ref2.getRowOffset,
      getRowStartIndexForOffset = _ref2.getRowStartIndexForOffset,
      getRowStopIndexForStartIndex = _ref2.getRowStopIndexForStartIndex,
      initInstanceProps = _ref2.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref2.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref2.validateProps;
  return _temp = _class = /*#__PURE__*/function (_PureComponent) {
    Object(inheritsLoose["a" /* default */])(Grid, _PureComponent); // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor


    function Grid(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
      _this._resetIsScrollingTimeoutId = null;
      _this._outerRef = void 0;
      _this.state = {
        instance: Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)),
        isScrolling: false,
        horizontalScrollDirection: 'forward',
        scrollLeft: typeof _this.props.initialScrollLeft === 'number' ? _this.props.initialScrollLeft : 0,
        scrollTop: typeof _this.props.initialScrollTop === 'number' ? _this.props.initialScrollTop : 0,
        scrollUpdateWasRequested: false,
        verticalScrollDirection: 'forward'
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = memoize_one_esm(function (overscanColumnStartIndex, overscanColumnStopIndex, overscanRowStartIndex, overscanRowStopIndex, visibleColumnStartIndex, visibleColumnStopIndex, visibleRowStartIndex, visibleRowStopIndex) {
        return _this.props.onItemsRendered({
          overscanColumnStartIndex: overscanColumnStartIndex,
          overscanColumnStopIndex: overscanColumnStopIndex,
          overscanRowStartIndex: overscanRowStartIndex,
          overscanRowStopIndex: overscanRowStopIndex,
          visibleColumnStartIndex: visibleColumnStartIndex,
          visibleColumnStopIndex: visibleColumnStopIndex,
          visibleRowStartIndex: visibleRowStartIndex,
          visibleRowStopIndex: visibleRowStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = memoize_one_esm(function (scrollLeft, scrollTop, horizontalScrollDirection, verticalScrollDirection, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          horizontalScrollDirection: horizontalScrollDirection,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          verticalScrollDirection: verticalScrollDirection,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (rowIndex, columnIndex) {
        var _this$props = _this.props,
            columnWidth = _this$props.columnWidth,
            direction = _this$props.direction,
            rowHeight = _this$props.rowHeight;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && columnWidth, shouldResetStyleCacheOnItemSizeChange && direction, shouldResetStyleCacheOnItemSizeChange && rowHeight);

        var key = rowIndex + ":" + columnIndex;
        var style;

        if (itemStyleCache.hasOwnProperty(key)) {
          style = itemStyleCache[key];
        } else {
          var _offset = getColumnOffset(_this.props, columnIndex, _this._instanceProps);

          var isRtl = direction === 'rtl';
          itemStyleCache[key] = style = {
            position: 'absolute',
            left: isRtl ? undefined : _offset,
            right: isRtl ? _offset : undefined,
            top: getRowOffset(_this.props, rowIndex, _this._instanceProps),
            height: getRowHeight(_this.props, rowIndex, _this._instanceProps),
            width: getColumnWidth(_this.props, columnIndex, _this._instanceProps)
          };
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = memoize_one_esm(function (_, __, ___) {
        return {};
      });

      _this._onScroll = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientHeight = _event$currentTarget.clientHeight,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollTop = _event$currentTarget.scrollTop,
            scrollHeight = _event$currentTarget.scrollHeight,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
          // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
          // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
          // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.

          var calculatedScrollLeft = scrollLeft;

          if (direction === 'rtl') {
            switch (getRTLOffsetType()) {
              case 'negative':
                calculatedScrollLeft = -scrollLeft;
                break;

              case 'positive-descending':
                calculatedScrollLeft = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          calculatedScrollLeft = Math.max(0, Math.min(calculatedScrollLeft, scrollWidth - clientWidth));
          var calculatedScrollTop = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? 'forward' : 'backward',
            scrollLeft: calculatedScrollLeft,
            scrollTop: calculatedScrollTop,
            verticalScrollDirection: prevState.scrollTop < scrollTop ? 'forward' : 'backward',
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1);
        });
      };

      return _this;
    }

    Grid.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = Grid.prototype;

    _proto.scrollTo = function scrollTo(_ref3) {
      var scrollLeft = _ref3.scrollLeft,
          scrollTop = _ref3.scrollTop;

      if (scrollLeft !== undefined) {
        scrollLeft = Math.max(0, scrollLeft);
      }

      if (scrollTop !== undefined) {
        scrollTop = Math.max(0, scrollTop);
      }

      this.setState(function (prevState) {
        if (scrollLeft === undefined) {
          scrollLeft = prevState.scrollLeft;
        }

        if (scrollTop === undefined) {
          scrollTop = prevState.scrollTop;
        }

        if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
          return null;
        }

        return {
          horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? 'forward' : 'backward',
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          scrollUpdateWasRequested: true,
          verticalScrollDirection: prevState.scrollTop < scrollTop ? 'forward' : 'backward'
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(_ref4) {
      var _ref4$align = _ref4.align,
          align = _ref4$align === void 0 ? 'auto' : _ref4$align,
          columnIndex = _ref4.columnIndex,
          rowIndex = _ref4.rowIndex;
      var _this$props2 = this.props,
          columnCount = _this$props2.columnCount,
          height = _this$props2.height,
          rowCount = _this$props2.rowCount,
          width = _this$props2.width;
      var _this$state = this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollTop = _this$state.scrollTop;
      var scrollbarSize = getScrollbarSize();

      if (columnIndex !== undefined) {
        columnIndex = Math.max(0, Math.min(columnIndex, columnCount - 1));
      }

      if (rowIndex !== undefined) {
        rowIndex = Math.max(0, Math.min(rowIndex, rowCount - 1));
      }

      var estimatedTotalHeight = getEstimatedTotalHeight(this.props, this._instanceProps);
      var estimatedTotalWidth = getEstimatedTotalWidth(this.props, this._instanceProps); // The scrollbar size should be considered when scrolling an item into view,
      // to ensure it's fully visible.
      // But we only need to account for its size when it's actually visible.

      var horizontalScrollbarSize = estimatedTotalWidth > width ? scrollbarSize : 0;
      var verticalScrollbarSize = estimatedTotalHeight > height ? scrollbarSize : 0;
      this.scrollTo({
        scrollLeft: columnIndex !== undefined ? getOffsetForColumnAndAlignment(this.props, columnIndex, align, scrollLeft, this._instanceProps, verticalScrollbarSize) : scrollLeft,
        scrollTop: rowIndex !== undefined ? getOffsetForRowAndAlignment(this.props, rowIndex, align, scrollTop, this._instanceProps, horizontalScrollbarSize) : scrollTop
      });
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props3 = this.props,
          initialScrollLeft = _this$props3.initialScrollLeft,
          initialScrollTop = _this$props3.initialScrollTop;

      if (this._outerRef != null) {
        var outerRef = this._outerRef;

        if (typeof initialScrollLeft === 'number') {
          outerRef.scrollLeft = initialScrollLeft;
        }

        if (typeof initialScrollTop === 'number') {
          outerRef.scrollTop = initialScrollTop;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var direction = this.props.direction;
      var _this$state2 = this.state,
          scrollLeft = _this$state2.scrollLeft,
          scrollTop = _this$state2.scrollTop,
          scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
        // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
        // So we need to determine which browser behavior we're dealing with, and mimic it.
        var outerRef = this._outerRef;

        if (direction === 'rtl') {
          switch (getRTLOffsetType()) {
            case 'negative':
              outerRef.scrollLeft = -scrollLeft;
              break;

            case 'positive-ascending':
              outerRef.scrollLeft = scrollLeft;
              break;

            default:
              var clientWidth = outerRef.clientWidth,
                  scrollWidth = outerRef.scrollWidth;
              outerRef.scrollLeft = scrollWidth - clientWidth - scrollLeft;
              break;
          }
        } else {
          outerRef.scrollLeft = Math.max(0, scrollLeft);
        }

        outerRef.scrollTop = Math.max(0, scrollTop);
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          columnCount = _this$props4.columnCount,
          direction = _this$props4.direction,
          height = _this$props4.height,
          innerRef = _this$props4.innerRef,
          innerElementType = _this$props4.innerElementType,
          innerTagName = _this$props4.innerTagName,
          itemData = _this$props4.itemData,
          _this$props4$itemKey = _this$props4.itemKey,
          itemKey = _this$props4$itemKey === void 0 ? defaultItemKey : _this$props4$itemKey,
          outerElementType = _this$props4.outerElementType,
          outerTagName = _this$props4.outerTagName,
          rowCount = _this$props4.rowCount,
          style = _this$props4.style,
          useIsScrolling = _this$props4.useIsScrolling,
          width = _this$props4.width;
      var isScrolling = this.state.isScrolling;

      var _this$_getHorizontalR = this._getHorizontalRangeToRender(),
          columnStartIndex = _this$_getHorizontalR[0],
          columnStopIndex = _this$_getHorizontalR[1];

      var _this$_getVerticalRan = this._getVerticalRangeToRender(),
          rowStartIndex = _this$_getVerticalRan[0],
          rowStopIndex = _this$_getVerticalRan[1];

      var items = [];

      if (columnCount > 0 && rowCount) {
        for (var _rowIndex = rowStartIndex; _rowIndex <= rowStopIndex; _rowIndex++) {
          for (var _columnIndex = columnStartIndex; _columnIndex <= columnStopIndex; _columnIndex++) {
            items.push(Object(react["createElement"])(children, {
              columnIndex: _columnIndex,
              data: itemData,
              isScrolling: useIsScrolling ? isScrolling : undefined,
              key: itemKey({
                columnIndex: _columnIndex,
                data: itemData,
                rowIndex: _rowIndex
              }),
              rowIndex: _rowIndex,
              style: this._getItemStyle(_rowIndex, _columnIndex)
            }));
          }
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalHeight = getEstimatedTotalHeight(this.props, this._instanceProps);
      var estimatedTotalWidth = getEstimatedTotalWidth(this.props, this._instanceProps);
      return Object(react["createElement"])(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: this._onScroll,
        ref: this._outerRefSetter,
        style: Object(esm_extends["a" /* default */])({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, Object(react["createElement"])(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: estimatedTotalHeight,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: estimatedTotalWidth
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      var _this$props5 = this.props,
          columnCount = _this$props5.columnCount,
          onItemsRendered = _this$props5.onItemsRendered,
          onScroll = _this$props5.onScroll,
          rowCount = _this$props5.rowCount;

      if (typeof onItemsRendered === 'function') {
        if (columnCount > 0 && rowCount > 0) {
          var _this$_getHorizontalR2 = this._getHorizontalRangeToRender(),
              _overscanColumnStartIndex = _this$_getHorizontalR2[0],
              _overscanColumnStopIndex = _this$_getHorizontalR2[1],
              _visibleColumnStartIndex = _this$_getHorizontalR2[2],
              _visibleColumnStopIndex = _this$_getHorizontalR2[3];

          var _this$_getVerticalRan2 = this._getVerticalRangeToRender(),
              _overscanRowStartIndex = _this$_getVerticalRan2[0],
              _overscanRowStopIndex = _this$_getVerticalRan2[1],
              _visibleRowStartIndex = _this$_getVerticalRan2[2],
              _visibleRowStopIndex = _this$_getVerticalRan2[3];

          this._callOnItemsRendered(_overscanColumnStartIndex, _overscanColumnStopIndex, _overscanRowStartIndex, _overscanRowStopIndex, _visibleColumnStartIndex, _visibleColumnStopIndex, _visibleRowStartIndex, _visibleRowStopIndex);
        }
      }

      if (typeof onScroll === 'function') {
        var _this$state3 = this.state,
            _horizontalScrollDirection = _this$state3.horizontalScrollDirection,
            _scrollLeft = _this$state3.scrollLeft,
            _scrollTop = _this$state3.scrollTop,
            _scrollUpdateWasRequested = _this$state3.scrollUpdateWasRequested,
            _verticalScrollDirection = _this$state3.verticalScrollDirection;

        this._callOnScroll(_scrollLeft, _scrollTop, _horizontalScrollDirection, _verticalScrollDirection, _scrollUpdateWasRequested);
      }
    }; // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.


    _proto._getHorizontalRangeToRender = function _getHorizontalRangeToRender() {
      var _this$props6 = this.props,
          columnCount = _this$props6.columnCount,
          overscanColumnCount = _this$props6.overscanColumnCount,
          overscanColumnsCount = _this$props6.overscanColumnsCount,
          overscanCount = _this$props6.overscanCount,
          rowCount = _this$props6.rowCount;
      var _this$state4 = this.state,
          horizontalScrollDirection = _this$state4.horizontalScrollDirection,
          isScrolling = _this$state4.isScrolling,
          scrollLeft = _this$state4.scrollLeft;
      var overscanCountResolved = overscanColumnCount || overscanColumnsCount || overscanCount || 1;

      if (columnCount === 0 || rowCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getColumnStartIndexForOffset(this.props, scrollLeft, this._instanceProps);
      var stopIndex = getColumnStopIndexForStartIndex(this.props, startIndex, scrollLeft, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || horizontalScrollDirection === 'backward' ? Math.max(1, overscanCountResolved) : 1;
      var overscanForward = !isScrolling || horizontalScrollDirection === 'forward' ? Math.max(1, overscanCountResolved) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(columnCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    _proto._getVerticalRangeToRender = function _getVerticalRangeToRender() {
      var _this$props7 = this.props,
          columnCount = _this$props7.columnCount,
          overscanCount = _this$props7.overscanCount,
          overscanRowCount = _this$props7.overscanRowCount,
          overscanRowsCount = _this$props7.overscanRowsCount,
          rowCount = _this$props7.rowCount;
      var _this$state5 = this.state,
          isScrolling = _this$state5.isScrolling,
          verticalScrollDirection = _this$state5.verticalScrollDirection,
          scrollTop = _this$state5.scrollTop;
      var overscanCountResolved = overscanRowCount || overscanRowsCount || overscanCount || 1;

      if (columnCount === 0 || rowCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getRowStartIndexForOffset(this.props, scrollTop, this._instanceProps);
      var stopIndex = getRowStopIndexForStartIndex(this.props, startIndex, scrollTop, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || verticalScrollDirection === 'backward' ? Math.max(1, overscanCountResolved) : 1;
      var overscanForward = !isScrolling || verticalScrollDirection === 'forward' ? Math.max(1, overscanCountResolved) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(rowCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return Grid;
  }(react["PureComponent"]), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    useIsScrolling: false
  }, _temp;
}

var validateSharedProps = function validateSharedProps(_ref5, _ref6) {
  var children = _ref5.children,
      direction = _ref5.direction,
      height = _ref5.height,
      innerTagName = _ref5.innerTagName,
      outerTagName = _ref5.outerTagName,
      overscanColumnsCount = _ref5.overscanColumnsCount,
      overscanCount = _ref5.overscanCount,
      overscanRowsCount = _ref5.overscanRowsCount,
      width = _ref5.width;
  var instance = _ref6.instance;

  if (false) {}
};

var DEFAULT_ESTIMATED_ITEM_SIZE = 50;

var index_esm_getEstimatedTotalHeight = function getEstimatedTotalHeight(_ref, _ref2) {
  var rowCount = _ref.rowCount;
  var rowMetadataMap = _ref2.rowMetadataMap,
      estimatedRowHeight = _ref2.estimatedRowHeight,
      lastMeasuredRowIndex = _ref2.lastMeasuredRowIndex;
  var totalSizeOfMeasuredRows = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredRowIndex >= rowCount) {
    lastMeasuredRowIndex = rowCount - 1;
  }

  if (lastMeasuredRowIndex >= 0) {
    var itemMetadata = rowMetadataMap[lastMeasuredRowIndex];
    totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = rowCount - lastMeasuredRowIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedRowHeight;
  return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
};

var index_esm_getEstimatedTotalWidth = function getEstimatedTotalWidth(_ref3, _ref4) {
  var columnCount = _ref3.columnCount;
  var columnMetadataMap = _ref4.columnMetadataMap,
      estimatedColumnWidth = _ref4.estimatedColumnWidth,
      lastMeasuredColumnIndex = _ref4.lastMeasuredColumnIndex;
  var totalSizeOfMeasuredRows = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredColumnIndex >= columnCount) {
    lastMeasuredColumnIndex = columnCount - 1;
  }

  if (lastMeasuredColumnIndex >= 0) {
    var itemMetadata = columnMetadataMap[lastMeasuredColumnIndex];
    totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = columnCount - lastMeasuredColumnIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedColumnWidth;
  return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
};

var getItemMetadata = function getItemMetadata(itemType, props, index, instanceProps) {
  var itemMetadataMap, itemSize, lastMeasuredIndex;

  if (itemType === 'column') {
    itemMetadataMap = instanceProps.columnMetadataMap;
    itemSize = props.columnWidth;
    lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
  } else {
    itemMetadataMap = instanceProps.rowMetadataMap;
    itemSize = props.rowHeight;
    lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
  }

  if (index > lastMeasuredIndex) {
    var offset = 0;

    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (var i = lastMeasuredIndex + 1; i <= index; i++) {
      var size = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset,
        size: size
      };
      offset += size;
    }

    if (itemType === 'column') {
      instanceProps.lastMeasuredColumnIndex = index;
    } else {
      instanceProps.lastMeasuredRowIndex = index;
    }
  }

  return itemMetadataMap[index];
};

var findNearestItem = function findNearestItem(itemType, props, instanceProps, offset) {
  var itemMetadataMap, lastMeasuredIndex;

  if (itemType === 'column') {
    itemMetadataMap = instanceProps.columnMetadataMap;
    lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
  } else {
    itemMetadataMap = instanceProps.rowMetadataMap;
    lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
  }

  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch(itemType, props, instanceProps, lastMeasuredIndex, 0, offset);
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch(itemType, props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
  }
};

var findNearestItemBinarySearch = function findNearestItemBinarySearch(itemType, props, instanceProps, high, low, offset) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata(itemType, props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

var findNearestItemExponentialSearch = function findNearestItemExponentialSearch(itemType, props, instanceProps, index, offset) {
  var itemCount = itemType === 'column' ? props.columnCount : props.rowCount;
  var interval = 1;

  while (index < itemCount && getItemMetadata(itemType, props, index, instanceProps).offset < offset) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch(itemType, props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
};

var index_esm_getOffsetForIndexAndAlignment = function getOffsetForIndexAndAlignment(itemType, props, index, align, scrollOffset, instanceProps, scrollbarSize) {
  var size = itemType === 'column' ? props.width : props.height;
  var itemMetadata = getItemMetadata(itemType, props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
  // To ensure it reflects actual measurements instead of just estimates.

  var estimatedTotalSize = itemType === 'column' ? index_esm_getEstimatedTotalWidth(props, instanceProps) : index_esm_getEstimatedTotalHeight(props, instanceProps);
  var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
  var minOffset = Math.max(0, itemMetadata.offset - size + scrollbarSize + itemMetadata.size);

  if (align === 'smart') {
    if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
      align = 'auto';
    } else {
      align = 'center';
    }
  }

  switch (align) {
    case 'start':
      return maxOffset;

    case 'end':
      return minOffset;

    case 'center':
      return Math.round(minOffset + (maxOffset - minOffset) / 2);

    case 'auto':
    default:
      if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
        return scrollOffset;
      } else if (minOffset > maxOffset) {
        // Because we only take into account the scrollbar size when calculating minOffset
        // this value can be larger than maxOffset when at the end of the list
        return minOffset;
      } else if (scrollOffset < minOffset) {
        return minOffset;
      } else {
        return maxOffset;
      }

  }
};

var VariableSizeGrid = /*#__PURE__*/createGridComponent({
  getColumnOffset: function getColumnOffset(props, index, instanceProps) {
    return getItemMetadata('column', props, index, instanceProps).offset;
  },
  getColumnStartIndexForOffset: function getColumnStartIndexForOffset(props, scrollLeft, instanceProps) {
    return findNearestItem('column', props, instanceProps, scrollLeft);
  },
  getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(props, startIndex, scrollLeft, instanceProps) {
    var columnCount = props.columnCount,
        width = props.width;
    var itemMetadata = getItemMetadata('column', props, startIndex, instanceProps);
    var maxOffset = scrollLeft + width;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < columnCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata('column', props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  getColumnWidth: function getColumnWidth(props, index, instanceProps) {
    return instanceProps.columnMetadataMap[index].size;
  },
  getEstimatedTotalHeight: index_esm_getEstimatedTotalHeight,
  getEstimatedTotalWidth: index_esm_getEstimatedTotalWidth,
  getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
    return index_esm_getOffsetForIndexAndAlignment('column', props, index, align, scrollOffset, instanceProps, scrollbarSize);
  },
  getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
    return index_esm_getOffsetForIndexAndAlignment('row', props, index, align, scrollOffset, instanceProps, scrollbarSize);
  },
  getRowOffset: function getRowOffset(props, index, instanceProps) {
    return getItemMetadata('row', props, index, instanceProps).offset;
  },
  getRowHeight: function getRowHeight(props, index, instanceProps) {
    return instanceProps.rowMetadataMap[index].size;
  },
  getRowStartIndexForOffset: function getRowStartIndexForOffset(props, scrollTop, instanceProps) {
    return findNearestItem('row', props, instanceProps, scrollTop);
  },
  getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(props, startIndex, scrollTop, instanceProps) {
    var rowCount = props.rowCount,
        height = props.height;
    var itemMetadata = getItemMetadata('row', props, startIndex, instanceProps);
    var maxOffset = scrollTop + height;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < rowCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata('row', props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  initInstanceProps: function initInstanceProps(props, instance) {
    var _ref5 = props,
        estimatedColumnWidth = _ref5.estimatedColumnWidth,
        estimatedRowHeight = _ref5.estimatedRowHeight;
    var instanceProps = {
      columnMetadataMap: {},
      estimatedColumnWidth: estimatedColumnWidth || DEFAULT_ESTIMATED_ITEM_SIZE,
      estimatedRowHeight: estimatedRowHeight || DEFAULT_ESTIMATED_ITEM_SIZE,
      lastMeasuredColumnIndex: -1,
      lastMeasuredRowIndex: -1,
      rowMetadataMap: {}
    };

    instance.resetAfterColumnIndex = function (columnIndex, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instance.resetAfterIndices({
        columnIndex: columnIndex,
        shouldForceUpdate: shouldForceUpdate
      });
    };

    instance.resetAfterRowIndex = function (rowIndex, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instance.resetAfterIndices({
        rowIndex: rowIndex,
        shouldForceUpdate: shouldForceUpdate
      });
    };

    instance.resetAfterIndices = function (_ref6) {
      var columnIndex = _ref6.columnIndex,
          rowIndex = _ref6.rowIndex,
          _ref6$shouldForceUpda = _ref6.shouldForceUpdate,
          shouldForceUpdate = _ref6$shouldForceUpda === void 0 ? true : _ref6$shouldForceUpda;

      if (typeof columnIndex === 'number') {
        instanceProps.lastMeasuredColumnIndex = Math.min(instanceProps.lastMeasuredColumnIndex, columnIndex - 1);
      }

      if (typeof rowIndex === 'number') {
        instanceProps.lastMeasuredRowIndex = Math.min(instanceProps.lastMeasuredRowIndex, rowIndex - 1);
      } // We could potentially optimize further by only evicting styles after this index,
      // But since styles are only cached while scrolling is in progress-
      // It seems an unnecessary optimization.
      // It's unlikely that resetAfterIndex() will be called while a user is scrolling.


      instance._getItemStyleCache(-1);

      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };

    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps(_ref7) {
    var columnWidth = _ref7.columnWidth,
        rowHeight = _ref7.rowHeight;

    if (false) {}
  }
});
var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;

var defaultItemKey$1 = function defaultItemKey(index, data) {
  return index;
}; // In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.


var devWarningsDirection = null;
var devWarningsTagName$1 = null;

if (false) {}

function createListComponent(_ref) {
  var _class, _temp;

  var getItemOffset = _ref.getItemOffset,
      getEstimatedTotalSize = _ref.getEstimatedTotalSize,
      getItemSize = _ref.getItemSize,
      getOffsetForIndexAndAlignment = _ref.getOffsetForIndexAndAlignment,
      getStartIndexForOffset = _ref.getStartIndexForOffset,
      getStopIndexForStartIndex = _ref.getStopIndexForStartIndex,
      initInstanceProps = _ref.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref.validateProps;
  return _temp = _class = /*#__PURE__*/function (_PureComponent) {
    Object(inheritsLoose["a" /* default */])(List, _PureComponent); // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor


    function List(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)),
        isScrolling: false,
        scrollDirection: 'forward',
        scrollOffset: typeof _this.props.initialScrollOffset === 'number' ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = memoize_one_esm(function (overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex: overscanStartIndex,
          overscanStopIndex: overscanStopIndex,
          visibleStartIndex: visibleStartIndex,
          visibleStopIndex: visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = memoize_one_esm(function (scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection: scrollDirection,
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (index) {
        var _this$props = _this.props,
            direction = _this$props.direction,
            itemSize = _this$props.itemSize,
            layout = _this$props.layout;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);

        var style;

        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _offset = getItemOffset(_this.props, index, _this._instanceProps);

          var size = getItemSize(_this.props, index, _this._instanceProps); // TODO Deprecate direction "horizontal"

          var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
          var isRtl = direction === 'rtl';
          var offsetHorizontal = isHorizontal ? _offset : 0;
          itemStyleCache[index] = style = {
            position: 'absolute',
            left: isRtl ? undefined : offsetHorizontal,
            right: isRtl ? offsetHorizontal : undefined,
            top: !isHorizontal ? _offset : 0,
            height: !isHorizontal ? size : '100%',
            width: isHorizontal ? size : '100%'
          };
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = memoize_one_esm(function (_, __, ___) {
        return {};
      });

      _this._onScrollHorizontal = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;

          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
            // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.
            switch (getRTLOffsetType()) {
              case 'negative':
                scrollOffset = -scrollLeft;
                break;

              case 'positive-descending':
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollLeft ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._onScrollVertical = function (event) {
        var _event$currentTarget2 = event.currentTarget,
            clientHeight = _event$currentTarget2.clientHeight,
            scrollHeight = _event$currentTarget2.scrollHeight,
            scrollTop = _event$currentTarget2.scrollTop;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1, null);
        });
      };

      return _this;
    }

    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = List.prototype;

    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function (prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }

        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = 'auto';
      }

      var itemCount = this.props.itemCount;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1));
      this.scrollTo(getOffsetForIndexAndAlignment(this.props, index, align, scrollOffset, this._instanceProps));
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props2 = this.props,
          direction = _this$props2.direction,
          initialScrollOffset = _this$props2.initialScrollOffset,
          layout = _this$props2.layout;

      if (typeof initialScrollOffset === 'number' && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props3 = this.props,
          direction = _this$props3.direction,
          layout = _this$props3.layout;
      var _this$state = this.state,
          scrollOffset = _this$state.scrollOffset,
          scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // So we need to determine which browser behavior we're dealing with, and mimic it.
            switch (getRTLOffsetType()) {
              case 'negative':
                outerRef.scrollLeft = -scrollOffset;
                break;

              case 'positive-ascending':
                outerRef.scrollLeft = scrollOffset;
                break;

              default:
                var clientWidth = outerRef.clientWidth,
                    scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          direction = _this$props4.direction,
          height = _this$props4.height,
          innerRef = _this$props4.innerRef,
          innerElementType = _this$props4.innerElementType,
          innerTagName = _this$props4.innerTagName,
          itemCount = _this$props4.itemCount,
          itemData = _this$props4.itemData,
          _this$props4$itemKey = _this$props4.itemKey,
          itemKey = _this$props4$itemKey === void 0 ? defaultItemKey$1 : _this$props4$itemKey,
          layout = _this$props4.layout,
          outerElementType = _this$props4.outerElementType,
          outerTagName = _this$props4.outerTagName,
          style = _this$props4.style,
          useIsScrolling = _this$props4.useIsScrolling,
          width = _this$props4.width;
      var isScrolling = this.state.isScrolling; // TODO Deprecate direction "horizontal"

      var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;

      var _this$_getRangeToRend = this._getRangeToRender(),
          startIndex = _this$_getRangeToRend[0],
          stopIndex = _this$_getRangeToRend[1];

      var items = [];

      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items.push(Object(react["createElement"])(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : undefined,
            style: this._getItemStyle(_index)
          }));
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalSize = getEstimatedTotalSize(this.props, this._instanceProps);
      return Object(react["createElement"])(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: onScroll,
        ref: this._outerRefSetter,
        style: Object(esm_extends["a" /* default */])({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, Object(react["createElement"])(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: isHorizontal ? '100%' : estimatedTotalSize,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: isHorizontal ? estimatedTotalSize : '100%'
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === 'function') {
        var itemCount = this.props.itemCount;

        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(),
              _overscanStartIndex = _this$_getRangeToRend2[0],
              _overscanStopIndex = _this$_getRangeToRend2[1],
              _visibleStartIndex = _this$_getRangeToRend2[2],
              _visibleStopIndex = _this$_getRangeToRend2[3];

          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }

      if (typeof this.props.onScroll === 'function') {
        var _this$state2 = this.state,
            _scrollDirection = _this$state2.scrollDirection,
            _scrollOffset = _this$state2.scrollOffset,
            _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    }; // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.


    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props5 = this.props,
          itemCount = _this$props5.itemCount,
          overscanCount = _this$props5.overscanCount;
      var _this$state3 = this.state,
          isScrolling = _this$state3.isScrolling,
          scrollDirection = _this$state3.scrollDirection,
          scrollOffset = _this$state3.scrollOffset;

      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getStartIndexForOffset(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || scrollDirection === 'backward' ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === 'forward' ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return List;
  }(react["PureComponent"]), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    layout: 'vertical',
    overscanCount: 2,
    useIsScrolling: false
  }, _temp;
} // NOTE: I considered further wrapping individual items with a pure ListItem component.
// This would avoid ever calling the render function for the same index more than once,
// But it would also add the overhead of a lot of components/fibers.
// I assume people already do this (render function returning a class component),
// So my doing it would just unnecessarily double the wrappers.


var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
  var children = _ref2.children,
      direction = _ref2.direction,
      height = _ref2.height,
      layout = _ref2.layout,
      innerTagName = _ref2.innerTagName,
      outerTagName = _ref2.outerTagName,
      width = _ref2.width;
  var instance = _ref3.instance;

  if (false) { var isHorizontal; }
};

var DEFAULT_ESTIMATED_ITEM_SIZE$1 = 50;

var getItemMetadata$1 = function getItemMetadata(props, index, instanceProps) {
  var _ref = props,
      itemSize = _ref.itemSize;
  var itemMetadataMap = instanceProps.itemMetadataMap,
      lastMeasuredIndex = instanceProps.lastMeasuredIndex;

  if (index > lastMeasuredIndex) {
    var offset = 0;

    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (var i = lastMeasuredIndex + 1; i <= index; i++) {
      var size = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset,
        size: size
      };
      offset += size;
    }

    instanceProps.lastMeasuredIndex = index;
  }

  return itemMetadataMap[index];
};

var findNearestItem$1 = function findNearestItem(props, instanceProps, offset) {
  var itemMetadataMap = instanceProps.itemMetadataMap,
      lastMeasuredIndex = instanceProps.lastMeasuredIndex;
  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch$1(props, instanceProps, lastMeasuredIndex, 0, offset);
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch$1(props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
  }
};

var findNearestItemBinarySearch$1 = function findNearestItemBinarySearch(props, instanceProps, high, low, offset) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata$1(props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

var findNearestItemExponentialSearch$1 = function findNearestItemExponentialSearch(props, instanceProps, index, offset) {
  var itemCount = props.itemCount;
  var interval = 1;

  while (index < itemCount && getItemMetadata$1(props, index, instanceProps).offset < offset) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch$1(props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
};

var index_esm_getEstimatedTotalSize = function getEstimatedTotalSize(_ref2, _ref3) {
  var itemCount = _ref2.itemCount;
  var itemMetadataMap = _ref3.itemMetadataMap,
      estimatedItemSize = _ref3.estimatedItemSize,
      lastMeasuredIndex = _ref3.lastMeasuredIndex;
  var totalSizeOfMeasuredItems = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredIndex >= itemCount) {
    lastMeasuredIndex = itemCount - 1;
  }

  if (lastMeasuredIndex >= 0) {
    var itemMetadata = itemMetadataMap[lastMeasuredIndex];
    totalSizeOfMeasuredItems = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = itemCount - lastMeasuredIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedItemSize;
  return totalSizeOfMeasuredItems + totalSizeOfUnmeasuredItems;
};

var VariableSizeList = /*#__PURE__*/createListComponent({
  getItemOffset: function getItemOffset(props, index, instanceProps) {
    return getItemMetadata$1(props, index, instanceProps).offset;
  },
  getItemSize: function getItemSize(props, index, instanceProps) {
    return instanceProps.itemMetadataMap[index].size;
  },
  getEstimatedTotalSize: index_esm_getEstimatedTotalSize,
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(props, index, align, scrollOffset, instanceProps) {
    var direction = props.direction,
        height = props.height,
        layout = props.layout,
        width = props.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata$1(props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
    // To ensure it reflects actual measurements instead of just estimates.

    var estimatedTotalSize = index_esm_getEstimatedTotalSize(props, instanceProps);
    var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
    var minOffset = Math.max(0, itemMetadata.offset - size + itemMetadata.size);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        return Math.round(minOffset + (maxOffset - minOffset) / 2);

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(props, offset, instanceProps) {
    return findNearestItem$1(props, instanceProps, offset);
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(props, startIndex, scrollOffset, instanceProps) {
    var direction = props.direction,
        height = props.height,
        itemCount = props.itemCount,
        layout = props.layout,
        width = props.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata$1(props, startIndex, instanceProps);
    var maxOffset = scrollOffset + size;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < itemCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata$1(props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  initInstanceProps: function initInstanceProps(props, instance) {
    var _ref4 = props,
        estimatedItemSize = _ref4.estimatedItemSize;
    var instanceProps = {
      itemMetadataMap: {},
      estimatedItemSize: estimatedItemSize || DEFAULT_ESTIMATED_ITEM_SIZE$1,
      lastMeasuredIndex: -1
    };

    instance.resetAfterIndex = function (index, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instanceProps.lastMeasuredIndex = Math.min(instanceProps.lastMeasuredIndex, index - 1); // We could potentially optimize further by only evicting styles after this index,
      // But since styles are only cached while scrolling is in progress-
      // It seems an unnecessary optimization.
      // It's unlikely that resetAfterIndex() will be called while a user is scrolling.

      instance._getItemStyleCache(-1);

      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };

    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps(_ref5) {
    var itemSize = _ref5.itemSize;

    if (false) {}
  }
});
var FixedSizeGrid = /*#__PURE__*/createGridComponent({
  getColumnOffset: function getColumnOffset(_ref, index) {
    var columnWidth = _ref.columnWidth;
    return index * columnWidth;
  },
  getColumnWidth: function getColumnWidth(_ref2, index) {
    var columnWidth = _ref2.columnWidth;
    return columnWidth;
  },
  getRowOffset: function getRowOffset(_ref3, index) {
    var rowHeight = _ref3.rowHeight;
    return index * rowHeight;
  },
  getRowHeight: function getRowHeight(_ref4, index) {
    var rowHeight = _ref4.rowHeight;
    return rowHeight;
  },
  getEstimatedTotalHeight: function getEstimatedTotalHeight(_ref5) {
    var rowCount = _ref5.rowCount,
        rowHeight = _ref5.rowHeight;
    return rowHeight * rowCount;
  },
  getEstimatedTotalWidth: function getEstimatedTotalWidth(_ref6) {
    var columnCount = _ref6.columnCount,
        columnWidth = _ref6.columnWidth;
    return columnWidth * columnCount;
  },
  getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(_ref7, columnIndex, align, scrollLeft, instanceProps, scrollbarSize) {
    var columnCount = _ref7.columnCount,
        columnWidth = _ref7.columnWidth,
        width = _ref7.width;
    var lastColumnOffset = Math.max(0, columnCount * columnWidth - width);
    var maxOffset = Math.min(lastColumnOffset, columnIndex * columnWidth);
    var minOffset = Math.max(0, columnIndex * columnWidth - width + scrollbarSize + columnWidth);

    if (align === 'smart') {
      if (scrollLeft >= minOffset - width && scrollLeft <= maxOffset + width) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        // "Centered" offset is usually the average of the min and max.
        // But near the edges of the list, this doesn't hold true.
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

        if (middleOffset < Math.ceil(width / 2)) {
          return 0; // near the beginning
        } else if (middleOffset > lastColumnOffset + Math.floor(width / 2)) {
          return lastColumnOffset; // near the end
        } else {
          return middleOffset;
        }

      case 'auto':
      default:
        if (scrollLeft >= minOffset && scrollLeft <= maxOffset) {
          return scrollLeft;
        } else if (minOffset > maxOffset) {
          // Because we only take into account the scrollbar size when calculating minOffset
          // this value can be larger than maxOffset when at the end of the list
          return minOffset;
        } else if (scrollLeft < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(_ref8, rowIndex, align, scrollTop, instanceProps, scrollbarSize) {
    var rowHeight = _ref8.rowHeight,
        height = _ref8.height,
        rowCount = _ref8.rowCount;
    var lastRowOffset = Math.max(0, rowCount * rowHeight - height);
    var maxOffset = Math.min(lastRowOffset, rowIndex * rowHeight);
    var minOffset = Math.max(0, rowIndex * rowHeight - height + scrollbarSize + rowHeight);

    if (align === 'smart') {
      if (scrollTop >= minOffset - height && scrollTop <= maxOffset + height) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        // "Centered" offset is usually the average of the min and max.
        // But near the edges of the list, this doesn't hold true.
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

        if (middleOffset < Math.ceil(height / 2)) {
          return 0; // near the beginning
        } else if (middleOffset > lastRowOffset + Math.floor(height / 2)) {
          return lastRowOffset; // near the end
        } else {
          return middleOffset;
        }

      case 'auto':
      default:
        if (scrollTop >= minOffset && scrollTop <= maxOffset) {
          return scrollTop;
        } else if (minOffset > maxOffset) {
          // Because we only take into account the scrollbar size when calculating minOffset
          // this value can be larger than maxOffset when at the end of the list
          return minOffset;
        } else if (scrollTop < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getColumnStartIndexForOffset: function getColumnStartIndexForOffset(_ref9, scrollLeft) {
    var columnWidth = _ref9.columnWidth,
        columnCount = _ref9.columnCount;
    return Math.max(0, Math.min(columnCount - 1, Math.floor(scrollLeft / columnWidth)));
  },
  getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(_ref10, startIndex, scrollLeft) {
    var columnWidth = _ref10.columnWidth,
        columnCount = _ref10.columnCount,
        width = _ref10.width;
    var left = startIndex * columnWidth;
    var numVisibleColumns = Math.ceil((width + scrollLeft - left) / columnWidth);
    return Math.max(0, Math.min(columnCount - 1, startIndex + numVisibleColumns - 1 // -1 is because stop index is inclusive
    ));
  },
  getRowStartIndexForOffset: function getRowStartIndexForOffset(_ref11, scrollTop) {
    var rowHeight = _ref11.rowHeight,
        rowCount = _ref11.rowCount;
    return Math.max(0, Math.min(rowCount - 1, Math.floor(scrollTop / rowHeight)));
  },
  getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(_ref12, startIndex, scrollTop) {
    var rowHeight = _ref12.rowHeight,
        rowCount = _ref12.rowCount,
        height = _ref12.height;
    var top = startIndex * rowHeight;
    var numVisibleRows = Math.ceil((height + scrollTop - top) / rowHeight);
    return Math.max(0, Math.min(rowCount - 1, startIndex + numVisibleRows - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref13) {
    var columnWidth = _ref13.columnWidth,
        rowHeight = _ref13.rowHeight;

    if (false) {}
  }
});
var FixedSizeList = /*#__PURE__*/createListComponent({
  getItemOffset: function getItemOffset(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount,
        itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset) {
    var direction = _ref4.direction,
        height = _ref4.height,
        itemCount = _ref4.itemCount,
        itemSize = _ref4.itemSize,
        layout = _ref4.layout,
        width = _ref4.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size + itemSize);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        {
          // "Centered" offset is usually the average of the min and max.
          // But near the edges of the list, this doesn't hold true.
          var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

          if (middleOffset < Math.ceil(size / 2)) {
            return 0; // near the beginning
          } else if (middleOffset > lastItemOffset + Math.floor(size / 2)) {
            return lastItemOffset; // near the end
          } else {
            return middleOffset;
          }
        }

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
    var itemCount = _ref5.itemCount,
        itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction,
        height = _ref6.height,
        itemCount = _ref6.itemCount,
        itemSize = _ref6.itemSize,
        layout = _ref6.layout,
        width = _ref6.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var offset = startIndex * itemSize;
    var size = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(itemCount - 1, startIndex + numVisibleItems - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
    var itemSize = _ref7.itemSize;

    if (false) {}
  }
}); // Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349

function shallowDiffers(prev, next) {
  for (var attribute in prev) {
    if (!(attribute in next)) {
      return true;
    }
  }

  for (var _attribute in next) {
    if (prev[_attribute] !== next[_attribute]) {
      return true;
    }
  }

  return false;
} // It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-api.html#reactmemo


function areEqual(prevProps, nextProps) {
  var prevStyle = prevProps.style,
      prevRest = Object(objectWithoutPropertiesLoose["a" /* default */])(prevProps, ["style"]);

  var nextStyle = nextProps.style,
      nextRest = Object(objectWithoutPropertiesLoose["a" /* default */])(nextProps, ["style"]);

  return !shallowDiffers(prevStyle, nextStyle) && !shallowDiffers(prevRest, nextRest);
} // It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-component.html#shouldcomponentupdate


function shouldComponentUpdate(nextProps, nextState) {
  return !areEqual(this.props, nextProps) || shallowDiffers(this.state, nextState);
}


// EXTERNAL MODULE: ./node_modules/react-virtualized-auto-sizer/dist/index.esm.js
var index_esm = __webpack_require__("jYz7");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__("kKAo");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputBase/InputBase.js + 1 modules
var InputBase = __webpack_require__("MjS+");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/FilterList.js
var FilterList = __webpack_require__("Vgje");
var FilterList_default = /*#__PURE__*/__webpack_require__.n(FilterList);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/QueryBuilder.js
var QueryBuilder = __webpack_require__("CNkq");
var QueryBuilder_default = /*#__PURE__*/__webpack_require__.n(QueryBuilder);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Clear.js
var Clear = __webpack_require__("ytJY");
var Clear_default = /*#__PURE__*/__webpack_require__.n(Clear);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__("hlFM");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Menu/Menu.js + 2 modules
var Menu = __webpack_require__("gd/W");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__("jjAL");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__("56Ss");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__("NHHF");

// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__("yNWl");

// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// EXTERNAL MODULE: ./src/components/DeviceName.tsx
var DeviceName = __webpack_require__("5eZE");

// EXTERNAL MODULE: ./node_modules/use-debounce/esm/useDebounce.js + 1 modules
var useDebounce = __webpack_require__("+khf");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__("tr08");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slider/Slider.js + 1 modules
var Slider = __webpack_require__("6Obz");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__("DMAQ");

// CONCATENATED MODULE: ./src/components/TraceTimeFilterRangeSlider.tsx





function TraceTimeFilterRangeSlider() {
  var _useContext = Object(react["useContext"])(PacketsContext["b" /* default */]),
      trace = _useContext.trace,
      timeRange = _useContext.timeRange,
      setTimeRange = _useContext.setTimeRange;

  var _useState = Object(react["useState"])([0, 1000]),
      minMax = _useState[0],
      setMinMax = _useState[1];

  var _useState2 = Object(react["useState"])(timeRange),
      value = _useState2[0],
      setValue = _useState2[1];

  var theme = Object(useTheme["a" /* default */])();

  var _useDebounce = Object(useDebounce["a" /* default */])(value, 1000),
      debouncedValue = _useDebounce[0];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  Object(react["useEffect"])(function () {
    var mintime = trace === null || trace === void 0 ? void 0 : trace.startTimestamp;
    var maxtime = trace === null || trace === void 0 ? void 0 : trace.endTimestamp;
    var range = mintime !== undefined && maxtime !== undefined && [mintime, maxtime]; // update range

    setMinMax(range);
    setValue(range);
  }, [trace]);
  Object(react["useEffect"])(function () {
    setTimeRange(debouncedValue);
  }, [debouncedValue]);
  if (!minMax || !debouncedValue) return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null);
  return /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    display: "flex",
    pl: theme.spacing(0.25),
    pr: theme.spacing(0.25)
  }, /*#__PURE__*/react_default.a.createElement(Slider["a" /* default */], {
    min: minMax[0],
    max: minMax[1],
    value: value,
    onChange: handleChange,
    valueLabelDisplay: "auto",
    getAriaValueText: pretty["d" /* prettyDuration */],
    valueLabelFormat: pretty["d" /* prettyDuration */]
  }));
}
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__("l6uw");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/GroupWork.js
var GroupWork = __webpack_require__("zgjz");
var GroupWork_default = /*#__PURE__*/__webpack_require__.n(GroupWork);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./src/components/ui/Tooltip.tsx
var Tooltip = __webpack_require__("XfUf");

// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__("W1g9");

// CONCATENATED MODULE: ./src/components/PacketFilter.tsx
 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports













 // tslint:disable-next-line: match-default-export-name no-submodule-imports





var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: theme.spacing(0.5)
    },
    divider: {
      height: 28,
      margin: 4
    }
  });
});

function FilterMenu(props) {
  var text = props.text,
      icon = props.icon,
      className = props.className,
      handleAddFilter = props.handleAddFilter;

  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var _React$useState = react_default.a.useState(null),
      anchorEl = _React$useState[0],
      setAnchorEl = _React$useState[1];

  var kinds = Object(KindIcon["a" /* allKinds */])();
  var classes = useStyles();
  var devices = Object(useChange["a" /* default */])(bus, function (b) {
    return b.devices();
  });
  var services = Object(utils["Z" /* uniqueMap */])(Object(utils["f" /* arrayConcatMany */])(devices.map(function (device) {
    return device.services();
  })), function (service) {
    return service.serviceClass.toString();
  }, function (srv) {
    return srv;
  });
  var serviceIds = services.map(function (service) {
    var _service$specificatio;

    return ((_service$specificatio = service.specification) === null || _service$specificatio === void 0 ? void 0 : _service$specificatio.shortId) || "0x" + service.serviceClass.toString();
  });
  var serviceSpecs = services.map(function (service) {
    return service.specification;
  }).filter(function (spec) {
    return !!spec;
  });
  var packets = Object(utils["Z" /* uniqueMap */])(Object(utils["f" /* arrayConcatMany */])(serviceSpecs.map(function (spec) {
    return spec.packets.filter(function (pkt) {
      return pkt.name;
    });
  })), function (pkt) {
    return pkt.identifier.toString(16);
  }, function (pkt) {
    return pkt;
  });

  var packetFilter = function packetFilter(pkt) {
    return Object(spec["s" /* isRegister */])(pkt) ? "register" : Object(spec["h" /* isCommand */])(pkt) ? "command" : Object(spec["j" /* isEvent */])(pkt) ? "event" : Object(spec["p" /* isPipeReport */])(pkt) ? "pipe" : "pkt";
  };

  var handleAdd = function handleAdd(filter) {
    return function () {
      handleAddFilter(filter);
      setAnchorEl(null);
    };
  };

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    className: className,
    component: "span"
  }, /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
    title: text
  }, /*#__PURE__*/react_default.a.createElement("span", null, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["IconButton"], {
    className: classes.iconButton,
    "aria-controls": "simple-menu",
    "aria-haspopup": "true",
    onClick: handleClick
  }, icon || /*#__PURE__*/react_default.a.createElement(FilterList_default.a, null)))), /*#__PURE__*/react_default.a.createElement(Menu["a" /* default */], {
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, kinds.map(function (kind) {
    return /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
      key: kind,
      onClick: handleAdd("kind:" + kind)
    }, /*#__PURE__*/react_default.a.createElement(ListItemIcon["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
      kind: kind
    })), /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], null, Object(KindIcon["c" /* kindName */])(kind)), "\xA0", /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
      variant: "subtitle2"
    }, "kind:", kind));
  }), [{
    cmd: "collapse-ack",
    label: "Disable collapse acks",
    value: false
  }, {
    cmd: "announce",
    value: false
  }, {
    cmd: "repeated-announce",
    kind: "announce",
    value: false
  }, {
    cmd: "get",
    kind: "ro",
    value: true
  }, {
    cmd: "set",
    kind: "rw",
    value: true
  }, {
    cmd: "collapse-gets",
    kind: "ro",
    label: "Disable collapse gets",
    value: false
  }, {
    cmd: "pipes",
    kind: "pipe",
    value: true
  }, {
    cmd: "collapse-pipes",
    kind: "pipe",
    label: "Disable collapse pipes",
    value: false
  }].map(function (_ref) {
    var cmd = _ref.cmd,
        kind = _ref.kind,
        value = _ref.value,
        label = _ref.label;
    return /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
      key: cmd,
      onClick: handleAdd(cmd + ":" + value)
    }, /*#__PURE__*/react_default.a.createElement(ListItemIcon["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
      kind: kind || cmd
    })), /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], null, label || (value ? "Show " + cmd : "Hide " + cmd)), "\xA0", /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
      variant: "subtitle2"
    }, cmd + ":" + value));
  }), /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
    key: "port",
    onClick: handleAdd("port:42")
  }, /*#__PURE__*/react_default.a.createElement(ListItemIcon["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
    kind: "pipe"
  })), /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], null, "Filter by port 42"), "\xA0", /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "subtitle2"
  }, "port:42")), /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
    key: "grouping",
    onClick: handleAdd("grouping:false")
  }, /*#__PURE__*/react_default.a.createElement(ListItemIcon["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(GroupWork_default.a, null)), /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], null, "Disable grouping"), "\xA0", /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "subtitle2"
  }, "grouping:false")), devices === null || devices === void 0 ? void 0 : devices.map(function (device) {
    return /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
      key: "dev:" + device.id,
      onClick: handleAdd("dev:" + (device.name || device.shortId))
    }, /*#__PURE__*/react_default.a.createElement(ListItemIcon["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
      kind: "device"
    })), /*#__PURE__*/react_default.a.createElement(DeviceName["a" /* default */], {
      device: device
    }), "\xA0", /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
      variant: "subtitle2"
    }, "dev:", device.name || device.shortId));
  }), serviceIds === null || serviceIds === void 0 ? void 0 : serviceIds.map(function (srv) {
    return /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
      key: "srv:" + srv,
      onClick: handleAdd("srv:" + srv)
    }, /*#__PURE__*/react_default.a.createElement(ListItemIcon["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
      kind: "service"
    })), /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], null, srv), "\xA0", /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
      variant: "subtitle2"
    }, "srv:", srv));
  }), packets === null || packets === void 0 ? void 0 : packets.map(function (pkt) {
    return /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
      key: packetFilter(pkt) + ":" + pkt.identifier,
      onClick: handleAdd(packetFilter(pkt) + ":" + pkt.name)
    }, /*#__PURE__*/react_default.a.createElement(ListItemIcon["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
      kind: pkt.kind
    })), /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], null, pkt.name), "\xA0", /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
      variant: "subtitle2"
    }, packetFilter(pkt), ":", pkt.name));
  })));
}

function PacketFilter() {
  var _useContext2 = Object(react["useContext"])(PacketsContext["b" /* default */]),
      trace = _useContext2.trace,
      timeRange = _useContext2.timeRange,
      toggleTimeRange = _useContext2.toggleTimeRange,
      filter = _useContext2.filter,
      setFilter = _useContext2.setFilter;

  var classes = useStyles();

  var _useState = Object(react["useState"])(filter),
      text = _useState[0],
      setText = _useState[1];

  var _useDebounce = Object(useDebounce["a" /* default */])(text, 1000),
      debouncedText = _useDebounce[0];

  var filterId = Object(react_use_id_hook_esm["b" /* useId */])(); // background filter update

  Object(react["useEffect"])(function () {
    return setText(filter);
  }, [filter]); // set filter once bounced

  Object(react["useEffect"])(function () {
    setFilter(debouncedText);
  }, [debouncedText]);

  var handleChange = function handleChange(ev) {
    var newText = ev.target.value;
    setText(newText);
  };

  var handleAddFilter = function handleAddFilter(k) {
    setText(text + " " + k);
  };

  var handleClearFilter = function handleClearFilter() {
    setText("");
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, timeRange && /*#__PURE__*/react_default.a.createElement(TraceTimeFilterRangeSlider, null), /*#__PURE__*/react_default.a.createElement(Paper["a" /* default */], {
    square: true,
    elevation: 1
  }, /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    display: "flex"
  }, /*#__PURE__*/react_default.a.createElement(FilterMenu, {
    text: "Filters",
    handleAddFilter: handleAddFilter
  }), /*#__PURE__*/react_default.a.createElement(IconButtonWithTooltip["a" /* default */], {
    className: classes.iconButton,
    disabled: !timeRange && !(trace !== null && trace !== void 0 && trace.length),
    title: timeRange ? "clear time range" : "use time range",
    onClick: toggleTimeRange
  }, /*#__PURE__*/react_default.a.createElement(QueryBuilder_default.a, null)), /*#__PURE__*/react_default.a.createElement(InputBase["a" /* default */], {
    id: filterId,
    multiline: true,
    className: classes.input,
    placeholder: "Filter packets",
    inputProps: {
      "aria-label": "filter packets"
    },
    value: text,
    spellCheck: false,
    onChange: handleChange
  }), text && /*#__PURE__*/react_default.a.createElement(IconButtonWithTooltip["a" /* default */], {
    className: classes.iconButton,
    title: "clear filter",
    onClick: handleClearFilter
  }, /*#__PURE__*/react_default.a.createElement(Clear_default.a, null)))));
}
// CONCATENATED MODULE: ./src/components/tools/PacketView.tsx


 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name




var PacketView_useStyles = Object(makeStyles["a" /* default */])(function () {
  return Object(createStyles["a" /* default */])({
    items: {
      flex: 1
    }
  });
});

var PacketView_VirtualPacketItem = function VirtualPacketItem(props) {
  var style = props.style,
      index = props.index,
      data = props.data;
  var packets = data.packets,
      showTime = data.showTime;
  var packet = packets[index];
  if (!packet) return /*#__PURE__*/react_default.a.createElement("div", {
    key: "",
    style: style
  });
  return /*#__PURE__*/react_default.a.createElement("div", {
    key: packet.key,
    style: style
  }, /*#__PURE__*/react_default.a.createElement(PacketListItem["a" /* default */], {
    packet: packet.packet,
    count: packet.count,
    showTime: showTime
  }));
};

function VirtualPacketList(props) {
  var showTime = props.showTime;
  var classes = PacketView_useStyles();

  var _useContext = Object(react["useContext"])(PacketsContext["b" /* default */]),
      packets = _useContext.packets;

  var itemData = {
    showTime: showTime,
    packets: packets
  };
  return /*#__PURE__*/react_default.a.createElement(index_esm["a" /* default */], {
    className: classes.items
  }, function (_ref) {
    var height = _ref.height,
        width = _ref.width;
    return /*#__PURE__*/react_default.a.createElement(FixedSizeList, {
      itemCount: packets.length,
      itemSize: 54,
      height: height,
      width: width,
      itemData: itemData
    }, PacketView_VirtualPacketItem);
  });
}

function PacketView(props) {
  var showTime = props.showTime;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(PacketFilter, null), /*#__PURE__*/react_default.a.createElement(VirtualPacketList, {
    showTime: showTime
  }));
}

/***/ }),

/***/ "7qUl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PacketListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("R/WZ");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZBNC");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tr08");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("lopY");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("tVbE");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("56Ss");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("IsqK");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("hlFM");
/* harmony import */ var _PacketsContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("VKQG");
/* harmony import */ var _PacketBadge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("pdOp");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("2K/c");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("9Dj+");
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("DMAQ");
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("Zo1I");
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("BsyY");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("Wbzz");











var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function () {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
    item: {
      marginBottom: 0,
      borderBottom: "1px solid #ddd"
    }
  });
});
function PacketListItem(props) {
  var packet = props.packet,
      count = props.count,
      showTime = props.showTime;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PacketsContext__WEBPACK_IMPORTED_MODULE_9__[/* default */ "b"]),
      selectedPacket = _useContext.selectedPacket,
      setSelectedPacket = _useContext.setSelectedPacket;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_11__[/* default */ "c"]),
      setDrawerType = _useContext2.setDrawerType;

  var classes = useStyles();
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
  var mobile = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(theme.breakpoints.down(_layout__WEBPACK_IMPORTED_MODULE_12__[/* MOBILE_BREAKPOINT */ "c"]));
  var decoded = packet.decoded;

  var handleClick = function handleClick() {
    if (mobile) setDrawerType(_AppContext__WEBPACK_IMPORTED_MODULE_11__[/* DrawerType */ "b"].None);
    setSelectedPacket(packet);
    Object(gatsby__WEBPACK_IMPORTED_MODULE_17__["navigate"])('/tools/packet-inspector/');
  };

  var selected = packet === selectedPacket;
  var logMessage = packet.serviceClass === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_13__[/* SRV_LOGGER */ "Nd"] && packet.isReport && packet.isEvent;
  var pipePackets = packet.meta[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_13__[/* META_PIPE */ "Yb"]];
  var primary = packet.isCRCAck && "crc ack " + packet.friendlyCommandName || packet.isAnnounce && "announce from " + packet.friendlyDeviceName || pipePackets && "pipe port:" + packet.pipePort + " " + pipePackets.length + " packets" || logMessage && Object(_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_16__[/* jdunpack */ "c"])(packet.data, "s")[0] || ((decoded === null || decoded === void 0 ? void 0 : decoded.info.name) || packet.friendlyCommandName) + " " + (decoded ? Object(_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_15__[/* ellipseJoin */ "s"])(decoded.decoded.map(function (f) {
    return f.humanValue;
  }), 18) : "");
  var secondary = "" + (showTime ? Object(_jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_14__[/* prettyDuration */ "d"])(packet.timestamp) + ": " : "") + (packet.isCommand ? 'to' : 'from') + " " + packet.friendlyDeviceName + "/" + packet.friendlyServiceName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    button: true,
    className: classes.item,
    dense: true,
    onClick: handleClick,
    selected: selected
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PacketBadge__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    packet: packet,
    count: count
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    primary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      textOverflow: "ellipsis"
    }, primary),
    secondary: secondary
  }));
}

/***/ }),

/***/ "8Koj":
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
  d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
}), 'Code');

exports.default = _default;

/***/ }),

/***/ "CNkq":
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

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
})), 'QueryBuilder');

exports.default = _default;

/***/ }),

/***/ "NMYK":
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
  d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
}), 'Message');

exports.default = _default;

/***/ }),

/***/ "Vgje":
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
  d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
}), 'FilterList');

exports.default = _default;

/***/ }),

/***/ "ZqJb":
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
  d: "M10 17l5-5-5-5v10z"
}), 'ArrowRight');

exports.default = _default;

/***/ }),

/***/ "jYz7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 * 4) Add nonce for style element.
 **/

function createDetectElementResize(nonce) {
  // Check `document` and `window` in case of server-side rendering
  var _window;

  if (typeof window !== 'undefined') {
    _window = window;
  } else if (typeof self !== 'undefined') {
    _window = self;
  } else {
    _window = global;
  }

  var attachEvent = typeof document !== 'undefined' && document.attachEvent;

  if (!attachEvent) {
    var requestFrame = function () {
      var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
        return _window.setTimeout(fn, 20);
      };

      return function (fn) {
        return raf(fn);
      };
    }();

    var cancelFrame = function () {
      var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
      return function (id) {
        return cancel(id);
      };
    }();

    var resetTriggers = function resetTriggers(element) {
      var triggers = element.__resizeTriggers__,
          expand = triggers.firstElementChild,
          contract = triggers.lastElementChild,
          expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + 'px';
      expandChild.style.height = expand.offsetHeight + 1 + 'px';
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };

    var checkTriggers = function checkTriggers(element) {
      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
    };

    var scrollListener = function scrollListener(e) {
      // Don't measure (which forces) reflow for scrolls that happen inside of children!
      if (e.target.className && typeof e.target.className.indexOf === 'function' && e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
        return;
      }

      var element = this;
      resetTriggers(this);

      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }

      this.__resizeRAF__ = requestFrame(function () {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;

          element.__resizeListeners__.forEach(function (fn) {
            fn.call(element, e);
          });
        }
      });
    };
    /* Detect CSS Animations support to detect element display/re-attach */


    var animation = false,
        keyframeprefix = '',
        animationstartevent = 'animationstart',
        domPrefixes = 'Webkit Moz O ms'.split(' '),
        startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
        pfx = '';
    {
      var elm = document.createElement('fakeelement');

      if (elm.style.animationName !== undefined) {
        animation = true;
      }

      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            animationstartevent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }
    var animationName = 'resizeanim';
    var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
    var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
  }

  var createStyles = function createStyles(doc) {
    if (!doc.getElementById('detectElementResize')) {
      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
      var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
          head = doc.head || doc.getElementsByTagName('head')[0],
          style = doc.createElement('style');
      style.id = 'detectElementResize';
      style.type = 'text/css';

      if (nonce != null) {
        style.setAttribute('nonce', nonce);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }

      head.appendChild(style);
    }
  };

  var addResizeListener = function addResizeListener(element, fn) {
    if (attachEvent) {
      element.attachEvent('onresize', fn);
    } else {
      if (!element.__resizeTriggers__) {
        var doc = element.ownerDocument;

        var elementStyle = _window.getComputedStyle(element);

        if (elementStyle && elementStyle.position == 'static') {
          element.style.position = 'relative';
        }

        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement('div')).className = 'resize-triggers';
        var expandTrigger = doc.createElement('div');
        expandTrigger.className = 'expand-trigger';
        expandTrigger.appendChild(doc.createElement('div'));
        var contractTrigger = doc.createElement('div');
        contractTrigger.className = 'contract-trigger';

        element.__resizeTriggers__.appendChild(expandTrigger);

        element.__resizeTriggers__.appendChild(contractTrigger);

        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener('scroll', scrollListener, true);
        /* Listen for a css animation to detect element display/re-attach */

        if (animationstartevent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName == animationName) {
              resetTriggers(element);
            }
          };

          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
        }
      }

      element.__resizeListeners__.push(fn);
    }
  };

  var removeResizeListener = function removeResizeListener(element, fn) {
    if (attachEvent) {
      element.detachEvent('onresize', fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);

      if (!element.__resizeListeners__.length) {
        element.removeEventListener('scroll', scrollListener, true);

        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);

          element.__resizeTriggers__.__animationListener__ = null;
        }

        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {// Preact compat; see developit/preact-compat/issues/228
        }
      }
    }
  };

  return {
    addResizeListener: addResizeListener,
    removeResizeListener: removeResizeListener
  };
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var AutoSizer = function (_React$PureComponent) {
  inherits(AutoSizer, _React$PureComponent);

  function AutoSizer() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, AutoSizer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = AutoSizer.__proto__ || Object.getPrototypeOf(AutoSizer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      height: _this.props.defaultHeight || 0,
      width: _this.props.defaultWidth || 0
    }, _this._onResize = function () {
      var _this$props = _this.props,
          disableHeight = _this$props.disableHeight,
          disableWidth = _this$props.disableWidth,
          onResize = _this$props.onResize;

      if (_this._parentNode) {
        // Guard against AutoSizer component being removed from the DOM immediately after being added.
        // This can result in invalid style values which can result in NaN values if we don't handle them.
        // See issue #150 for more context.
        var _height = _this._parentNode.offsetHeight || 0;

        var _width = _this._parentNode.offsetWidth || 0;

        var _style = window.getComputedStyle(_this._parentNode) || {};

        var paddingLeft = parseInt(_style.paddingLeft, 10) || 0;
        var paddingRight = parseInt(_style.paddingRight, 10) || 0;
        var paddingTop = parseInt(_style.paddingTop, 10) || 0;
        var paddingBottom = parseInt(_style.paddingBottom, 10) || 0;
        var newHeight = _height - paddingTop - paddingBottom;
        var newWidth = _width - paddingLeft - paddingRight;

        if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
          _this.setState({
            height: _height - paddingTop - paddingBottom,
            width: _width - paddingLeft - paddingRight
          });

          onResize({
            height: _height,
            width: _width
          });
        }
      }
    }, _this._setRef = function (autoSizer) {
      _this._autoSizer = autoSizer;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(AutoSizer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var nonce = this.props.nonce;

      if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
        // Delay access of parentNode until mount.
        // This handles edge-cases where the component has already been unmounted before its ref has been set,
        // As well as libraries like react-lite which have a slightly different lifecycle.
        this._parentNode = this._autoSizer.parentNode; // Defer requiring resize handler in order to support server-side rendering.
        // See issue #41

        this._detectElementResize = createDetectElementResize(nonce);

        this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

        this._onResize();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._detectElementResize && this._parentNode) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          disableHeight = _props.disableHeight,
          disableWidth = _props.disableWidth,
          style = _props.style;
      var _state = this.state,
          height = _state.height,
          width = _state.width; // Outer div should not force width/height since that may prevent containers from shrinking.
      // Inner component should overflow and use calculated width/height.
      // See issue #68 for more information.

      var outerStyle = {
        overflow: 'visible'
      };
      var childParams = {}; // Avoid rendering children before the initial measurements have been collected.
      // At best this would just be wasting cycles.

      var bailoutOnChildren = false;

      if (!disableHeight) {
        if (height === 0) {
          bailoutOnChildren = true;
        }

        outerStyle.height = 0;
        childParams.height = height;
      }

      if (!disableWidth) {
        if (width === 0) {
          bailoutOnChildren = true;
        }

        outerStyle.width = 0;
        childParams.width = width;
      }

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
        className: className,
        ref: this._setRef,
        style: _extends({}, outerStyle, style)
      }, !bailoutOnChildren && children(childParams));
    }
  }]);
  return AutoSizer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

AutoSizer.defaultProps = {
  onResize: function onResize() {},
  disableHeight: false,
  disableWidth: false,
  style: {}
};
/* harmony default export */ __webpack_exports__["a"] = (AutoSizer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "pdOp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PacketBadge; });

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Badge/Badge.js
var Badge = __webpack_require__("IFCi");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/dist/specconstants.ts
var specconstants = __webpack_require__("N1P3");

// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__("NHHF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Warning.js
var Warning = __webpack_require__("xV1m");
var Warning_default = /*#__PURE__*/__webpack_require__.n(Warning);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Error.js
var Error = __webpack_require__("lPg6");
var Error_default = /*#__PURE__*/__webpack_require__.n(Error);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Message.js
var Message = __webpack_require__("NMYK");
var Message_default = /*#__PURE__*/__webpack_require__.n(Message);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Note.js
var Note = __webpack_require__("qSYY");
var Note_default = /*#__PURE__*/__webpack_require__.n(Note);

// CONCATENATED MODULE: ./src/components/LogMessageIcon.tsx


 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name


function LogMessageIcon(props) {
  var identifier = props.identifier,
      others = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["identifier"]);

  switch (identifier) {
    case constants["Ub" /* LoggerCmd */].Warn:
      return /*#__PURE__*/react_default.a.createElement(Warning_default.a, others);

    case constants["Ub" /* LoggerCmd */].Error:
      return /*#__PURE__*/react_default.a.createElement(Error_default.a, others);

    case constants["Ub" /* LoggerCmd */].Debug:
      return /*#__PURE__*/react_default.a.createElement(Note_default.a, others);

    default:
      return /*#__PURE__*/react_default.a.createElement(Message_default.a, others);
  }
}
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowLeft.js
var ArrowLeft = __webpack_require__("qeq0");
var ArrowLeft_default = /*#__PURE__*/__webpack_require__.n(ArrowLeft);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowRight.js
var ArrowRight = __webpack_require__("ZqJb");
var ArrowRight_default = /*#__PURE__*/__webpack_require__.n(ArrowRight);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Clear.js
var Clear = __webpack_require__("ytJY");
var Clear_default = /*#__PURE__*/__webpack_require__.n(Clear);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Code.js
var Code = __webpack_require__("8Koj");
var Code_default = /*#__PURE__*/__webpack_require__.n(Code);

// EXTERNAL MODULE: ./src/components/ui/Tooltip.tsx
var Tooltip = __webpack_require__("XfUf");

// CONCATENATED MODULE: ./src/components/PacketBadge.tsx











function PacketBadge(props) {
  var packet = props.packet,
      count = props.count;
  var decoded = packet.decoded;
  var requiredAck = !!packet.requiresAck;
  var failedAck = !!packet.meta[constants["Wb" /* META_ACK_FAILED */]];
  var receivedAck = !failedAck && !!packet.meta[constants["Vb" /* META_ACK */]];
  var getPacket = !!packet.meta[constants["Xb" /* META_GET */]];
  var direction = packet.isCommand ? "to" : "from";
  var logMessage = packet.serviceClass === specconstants["Lb" /* SRV_LOGGER */] && packet.isReport && !packet.isRegisterGet;
  return /*#__PURE__*/react_default.a.createElement(Badge["a" /* default */], {
    badgeContent: count
  }, getPacket && !failedAck && !receivedAck && /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
    title: "to/from " + packet.friendlyDeviceName
  }, /*#__PURE__*/react_default.a.createElement("span", null, /*#__PURE__*/react_default.a.createElement(Code_default.a, null))), direction === "to" && !getPacket && !failedAck && !receivedAck && /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
    title: "to " + packet.friendlyDeviceName
  }, /*#__PURE__*/react_default.a.createElement("span", null, /*#__PURE__*/react_default.a.createElement(ArrowLeft_default.a, null))), direction === "from" && !getPacket && !failedAck && !receivedAck && /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
    title: "from " + packet.friendlyDeviceName
  }, /*#__PURE__*/react_default.a.createElement("span", null, /*#__PURE__*/react_default.a.createElement(ArrowRight_default.a, null))), requiredAck === true && failedAck && /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
    title: "no ack"
  }, /*#__PURE__*/react_default.a.createElement("span", null, /*#__PURE__*/react_default.a.createElement(Clear_default.a, null))), requiredAck === true && receivedAck && /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
    title: "ack received"
  }, /*#__PURE__*/react_default.a.createElement("span", null, /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
    kind: constants["I" /* CRC_ACK_NODE_NAME */]
  }))), logMessage ? /*#__PURE__*/react_default.a.createElement(LogMessageIcon, {
    identifier: decoded === null || decoded === void 0 ? void 0 : decoded.info.identifier
  }) : /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
    kind: packet.isCRCAck ? "crc_ack" : packet.isPipe ? "pipe" : packet.isAnnounce ? "announce" : decoded === null || decoded === void 0 ? void 0 : decoded.info.kind
  }));
}

/***/ }),

/***/ "qSYY":
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
  d: "M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"
}), 'Note');

exports.default = _default;

/***/ }),

/***/ "qeq0":
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
  d: "M14 7l-5 5 5 5V7z"
}), 'ArrowLeft');

exports.default = _default;

/***/ }),

/***/ "xV1m":
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
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), 'Warning');

exports.default = _default;

/***/ }),

/***/ "zgjz":
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
}), 'GroupWork');

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=59-4a5c7231f8f0e60d4443.js.map