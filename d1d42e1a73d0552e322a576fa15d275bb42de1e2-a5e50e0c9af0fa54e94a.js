(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5917,274],{

/***/ 32253:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27490);
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

/***/ 40344:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Di": function() { return /* reexport */ arrange_arrange; },
  "C8": function() { return /* reexport */ arrange_desc; },
  "Fp": function() { return /* reexport */ max_max; },
  "VV": function() { return /* reexport */ min_min; },
  "JG": function() { return /* reexport */ mutate; },
  "PQ": function() { return /* reexport */ rename; },
  "Ys": function() { return /* reexport */ select_select; },
  "Iz": function() { return /* reexport */ summarize; },
  "lu": function() { return /* reexport */ tidy_tidy; }
});

// UNUSED EXPORTS: TMath, addItems, addRows, asc, complete, contains, count, cumsum, debug, deviation, distinct, endsWith, everything, expand, fill, filter, first, fixedOrder, fullJoin, fullSeq, fullSeqDate, fullSeqDateISOString, groupBy, innerJoin, lag, last, lead, leftJoin, map, matches, mean, meanRate, median, mutateWithSummary, n, nDistinct, negate, numRange, pick, pivotLonger, pivotWider, rate, replaceNully, roll, slice, sliceHead, sliceMax, sliceMin, sliceSample, sliceTail, sort, startsWith, sum, summarizeAll, summarizeAt, summarizeIf, tally, total, totalAll, totalAt, totalIf, transmute, variance, vectorSeq, vectorSeqDate, when

;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/tidy.js
function tidy_tidy(items) {
  if (typeof items === "function") {
    throw new Error("You must supply the data as the first argument to tidy()");
  }

  var result = items;

  for (var _len = arguments.length, fns = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    fns[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _fns = fns; _i < _fns.length; _i++) {
    var fn = _fns[_i];

    if (fn) {
      result = fn(result);
    }
  }

  return result;
}


// EXTERNAL MODULE: ./node_modules/d3-array/src/ascending.js
var ascending = __webpack_require__(70684);
;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/helpers/singleOrArray.js
function singleOrArray_singleOrArray(d) {
  return d == null ? [] : Array.isArray(d) ? d : [d];
}


;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/arrange.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function arrange_arrange(comparators) {
  var _arrange = function _arrange(items) {
    var comparatorFns = singleOrArray_singleOrArray(comparators).map(function (comp) {
      return typeof comp === "function" ? comp : asc(comp);
    });
    return items.slice().sort(function (a, b) {
      var _iterator = _createForOfIteratorHelper(comparatorFns),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var comparator = _step.value;
          var result = comparator(a, b);
          if (result) return result;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return 0;
    });
  };

  return _arrange;
}

function asc(key) {
  var keyFn = typeof key === "function" ? key : function (d) {
    return d[key];
  };
  return function _asc(a, b) {
    return emptyAwareComparator(keyFn(a), keyFn(b), false);
  };
}

function arrange_desc(key) {
  var keyFn = typeof key === "function" ? key : function (d) {
    return d[key];
  };
  return function _desc(a, b) {
    return emptyAwareComparator(keyFn(a), keyFn(b), true);
  };
}

function fixedOrder(key, order, options) {
  var _ref = options != null ? options : {},
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? "start" : _ref$position;

  var positionFactor = position === "end" ? -1 : 1;
  var indexMap = new Map();

  for (var i = 0; i < order.length; ++i) {
    indexMap.set(order[i], i);
  }

  var keyFn = typeof key === "function" ? key : function (d) {
    return d[key];
  };
  return function _fixedOrder(a, b) {
    var _a, _b;

    var aIndex = (_a = indexMap.get(keyFn(a))) != null ? _a : -1;
    var bIndex = (_b = indexMap.get(keyFn(b))) != null ? _b : -1;

    if (aIndex >= 0 && bIndex >= 0) {
      return aIndex - bIndex;
    }

    if (aIndex >= 0) {
      return positionFactor * -1;
    }

    if (bIndex >= 0) {
      return positionFactor * 1;
    }

    return 0;
  };
}

function emptyAwareComparator(aInput, bInput, desc2) {
  var a = desc2 ? bInput : aInput;
  var b = desc2 ? aInput : bInput;

  if (isEmpty(a) && isEmpty(b)) {
    var rankA = a !== a ? 0 : a === null ? 1 : 2;
    var rankB = b !== b ? 0 : b === null ? 1 : 2;
    var order = rankA - rankB;
    return desc2 ? -order : order;
  }

  if (isEmpty(a)) {
    return desc2 ? -1 : 1;
  }

  if (isEmpty(b)) {
    return desc2 ? 1 : -1;
  }

  return (0,ascending/* default */.Z)(a, b);
}

function isEmpty(value) {
  return value == null || value !== value;
}


;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/summarize.js


function summarize_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = summarize_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function summarize_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return summarize_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return summarize_arrayLikeToArray(o, minLen); }

function summarize_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function summarize(summarizeSpec, options) {
  var _summarize = function _summarize(items) {
    options = options != null ? options : {};
    var summarized = {};
    var keys = Object.keys(summarizeSpec);

    for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
      var key = _keys[_i];
      summarized[key] = summarizeSpec[key](items);
    }

    if (options.rest && items.length) {
      var objectKeys = Object.keys(items[0]);

      for (var _i2 = 0, _objectKeys = objectKeys; _i2 < _objectKeys.length; _i2++) {
        var objKey = _objectKeys[_i2];

        if (keys.includes(objKey)) {
          continue;
        }

        summarized[objKey] = options.rest(objKey)(items);
      }
    }

    return [summarized];
  };

  return _summarize;
}

function _summarizeHelper(items, summaryFn, predicateFn, keys) {
  if (!items.length) return [];
  var summarized = {};
  var keysArr;

  if (keys == null) {
    keysArr = Object.keys(items[0]);
  } else {
    keysArr = [];

    var _iterator = summarize_createForOfIteratorHelper(singleOrArray(keys)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var keyInput = _step.value;

        if (typeof keyInput === "function") {
          var _keysArr;

          (_keysArr = keysArr).push.apply(_keysArr, _toConsumableArray(keyInput(items)));
        } else {
          keysArr.push(keyInput);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  var _iterator2 = summarize_createForOfIteratorHelper(keysArr),
      _step2;

  try {
    var _loop = function _loop() {
      var key = _step2.value;

      if (predicateFn) {
        var vector = items.map(function (d) {
          return d[key];
        });

        if (!predicateFn(vector)) {
          return "continue";
        }
      }

      summarized[key] = summaryFn(key)(items);
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _ret = _loop();

      if (_ret === "continue") continue;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return [summarized];
}

function summarizeAll(summaryFn) {
  var _summarizeAll = function _summarizeAll(items) {
    return _summarizeHelper(items, summaryFn);
  };

  return _summarizeAll;
}

function summarizeIf(predicateFn, summaryFn) {
  var _summarizeIf = function _summarizeIf(items) {
    return _summarizeHelper(items, summaryFn, predicateFn);
  };

  return _summarizeIf;
}

function summarizeAt(keys, summaryFn) {
  var _summarizeAt = function _summarizeAt(items) {
    return _summarizeHelper(items, summaryFn, void 0, keys);
  };

  return _summarizeAt;
}


// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(15892);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(8452);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(66475);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat.js
var es_array_flat = __webpack_require__(84944);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(32738);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(25008);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(22128);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/get.js + 1 modules
var esm_get = __webpack_require__(44005);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(72094);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(44524);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(12426);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js + 1 modules
var wrapNativeSuper = __webpack_require__(9502);
;// CONCATENATED MODULE: ./node_modules/internmap/src/index.js










function src_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = src_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function src_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return src_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return src_arrayLikeToArray(o, minLen); }

function src_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var InternMap = /*#__PURE__*/function (_Map) {
  (0,inherits/* default */.Z)(InternMap, _Map);

  var _super = _createSuper(InternMap);

  function InternMap(entries) {
    var _this;

    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : keyof;

    (0,classCallCheck/* default */.Z)(this, InternMap);

    _this = _super.call(this);
    Object.defineProperties((0,assertThisInitialized/* default */.Z)(_this), {
      _intern: {
        value: new Map()
      },
      _key: {
        value: key
      }
    });

    if (entries != null) {
      var _iterator = src_createForOfIteratorHelper(entries),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = (0,slicedToArray/* default */.Z)(_step.value, 2),
              _key2 = _step$value[0],
              value = _step$value[1];

          _this.set(_key2, value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return _this;
  }

  (0,createClass/* default */.Z)(InternMap, [{
    key: "get",
    value: function get(key) {
      return (0,esm_get/* default */.Z)((0,getPrototypeOf/* default */.Z)(InternMap.prototype), "get", this).call(this, intern_get(this, key));
    }
  }, {
    key: "has",
    value: function has(key) {
      return (0,esm_get/* default */.Z)((0,getPrototypeOf/* default */.Z)(InternMap.prototype), "has", this).call(this, intern_get(this, key));
    }
  }, {
    key: "set",
    value: function set(key, value) {
      return (0,esm_get/* default */.Z)((0,getPrototypeOf/* default */.Z)(InternMap.prototype), "set", this).call(this, intern_set(this, key), value);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      return (0,esm_get/* default */.Z)((0,getPrototypeOf/* default */.Z)(InternMap.prototype), "delete", this).call(this, intern_delete(this, key));
    }
  }]);

  return InternMap;
}( /*#__PURE__*/(0,wrapNativeSuper/* default */.Z)(Map));
var InternSet = /*#__PURE__*/function (_Set) {
  (0,inherits/* default */.Z)(InternSet, _Set);

  var _super2 = _createSuper(InternSet);

  function InternSet(values) {
    var _this2;

    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : keyof;

    (0,classCallCheck/* default */.Z)(this, InternSet);

    _this2 = _super2.call(this);
    Object.defineProperties((0,assertThisInitialized/* default */.Z)(_this2), {
      _intern: {
        value: new Map()
      },
      _key: {
        value: key
      }
    });

    if (values != null) {
      var _iterator2 = src_createForOfIteratorHelper(values),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var value = _step2.value;

          _this2.add(value);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    return _this2;
  }

  (0,createClass/* default */.Z)(InternSet, [{
    key: "has",
    value: function has(value) {
      return (0,esm_get/* default */.Z)((0,getPrototypeOf/* default */.Z)(InternSet.prototype), "has", this).call(this, intern_get(this, value));
    }
  }, {
    key: "add",
    value: function add(value) {
      return (0,esm_get/* default */.Z)((0,getPrototypeOf/* default */.Z)(InternSet.prototype), "add", this).call(this, intern_set(this, value));
    }
  }, {
    key: "delete",
    value: function _delete(value) {
      return (0,esm_get/* default */.Z)((0,getPrototypeOf/* default */.Z)(InternSet.prototype), "delete", this).call(this, intern_delete(this, value));
    }
  }]);

  return InternSet;
}( /*#__PURE__*/(0,wrapNativeSuper/* default */.Z)(Set));

function intern_get(_ref, value) {
  var _intern = _ref._intern,
      _key = _ref._key;

  var key = _key(value);

  return _intern.has(key) ? _intern.get(key) : value;
}

function intern_set(_ref2, value) {
  var _intern = _ref2._intern,
      _key = _ref2._key;

  var key = _key(value);

  if (_intern.has(key)) return _intern.get(key);

  _intern.set(key, value);

  return value;
}

function intern_delete(_ref3, value) {
  var _intern = _ref3._intern,
      _key = _ref3._key;

  var key = _key(value);

  if (_intern.has(key)) {
    value = _intern.get(value);

    _intern.delete(key);
  }

  return value;
}

function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}
;// CONCATENATED MODULE: ./node_modules/d3-array/src/identity.js
/* harmony default export */ function src_identity(x) {
  return x;
}
;// CONCATENATED MODULE: ./node_modules/d3-array/src/group.js


function group_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = group_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function group_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return group_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return group_arrayLikeToArray(o, minLen); }

function group_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function group(values) {
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  return nest(values, src_identity, src_identity, keys);
}
function groups(values) {
  for (var _len2 = arguments.length, keys = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    keys[_key2 - 1] = arguments[_key2];
  }

  return nest(values, Array.from, identity, keys);
}
function rollup(values, reduce) {
  for (var _len3 = arguments.length, keys = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    keys[_key3 - 2] = arguments[_key3];
  }

  return nest(values, identity, reduce, keys);
}
function rollups(values, reduce) {
  for (var _len4 = arguments.length, keys = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    keys[_key4 - 2] = arguments[_key4];
  }

  return nest(values, Array.from, reduce, keys);
}
function index(values) {
  for (var _len5 = arguments.length, keys = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    keys[_key5 - 1] = arguments[_key5];
  }

  return nest(values, identity, unique, keys);
}
function indexes(values) {
  for (var _len6 = arguments.length, keys = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    keys[_key6 - 1] = arguments[_key6];
  }

  return nest(values, Array.from, unique, keys);
}

function unique(values) {
  if (values.length !== 1) throw new Error("duplicate key");
  return values[0];
}

function nest(values, map, reduce, keys) {
  return function regroup(values, i) {
    if (i >= keys.length) return reduce(values);
    var groups = new InternMap();
    var keyof = keys[i++];
    var index = -1;

    var _iterator = group_createForOfIteratorHelper(values),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;
        var key = keyof(value, ++index, values);

        var _group = groups.get(key);

        if (_group) _group.push(value);else groups.set(key, [value]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = group_createForOfIteratorHelper(groups),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = (0,slicedToArray/* default */.Z)(_step2.value, 2),
            _key7 = _step2$value[0],
            _values = _step2$value[1];

        groups.set(_key7, regroup(_values, i));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return map(groups);
  }(values, 0);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.from-entries.js
var es_object_from_entries = __webpack_require__(38559);
;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/helpers/assignGroupKeys.js


function assignGroupKeys(d, keys) {
  if (d == null || typeof d !== "object" || Array.isArray(d)) return d;
  var keysObj = Object.fromEntries(keys.filter(function (key) {
    return typeof key[0] !== "function";
  }));
  return Object.assign(keysObj, d);
}


;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/helpers/groupTraversal.js



function groupTraversal_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = groupTraversal_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function groupTraversal_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return groupTraversal_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return groupTraversal_arrayLikeToArray(o, minLen); }

function groupTraversal_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function groupTraversal(grouped, outputGrouped, keys, addSubgroup, addLeaves) {
  var level = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  var _iterator = groupTraversal_createForOfIteratorHelper(grouped.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = (0,slicedToArray/* default */.Z)(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      var keysHere = [].concat((0,toConsumableArray/* default */.Z)(keys), [key]);

      if (value instanceof Map) {
        var subgroup = addSubgroup(outputGrouped, keysHere, level);
        groupTraversal(value, subgroup, keysHere, addSubgroup, addLeaves, level + 1);
      } else {
        addLeaves(outputGrouped, keysHere, value, level);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return outputGrouped;
}


;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/helpers/groupMap.js


function groupMap(grouped, groupFn) {
  var keyFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (keys) {
    return keys[keys.length - 1];
  };

  function addSubgroup(parentGrouped, keys) {
    var subgroup = new Map();
    parentGrouped.set(keyFn(keys), subgroup);
    return subgroup;
  }

  function addLeaves(parentGrouped, keys, values) {
    parentGrouped.set(keyFn(keys), groupFn(values, keys));
  }

  var outputGrouped = new Map();
  groupTraversal(grouped, outputGrouped, [], addSubgroup, addLeaves);
  return outputGrouped;
}


;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/helpers/identity.js
var identity_identity = function identity(d) {
  return d;
};


;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/groupBy.js





function groupBy_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = groupBy_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function groupBy_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return groupBy_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return groupBy_arrayLikeToArray(o, minLen); }

function groupBy_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function groupBy_groupBy(groupKeys, fns, options) {
  if (typeof fns === "function") {
    fns = [fns];
  } else if (arguments.length === 2 && fns != null && !Array.isArray(fns)) {
    options = fns;
  }

  var _groupBy = function _groupBy(items) {
    var grouped = makeGrouped(items, groupKeys);
    var results = runFlow(grouped, fns, options == null ? void 0 : options.addGroupKeys);

    if (options == null ? void 0 : options.export) {
      switch (options.export) {
        case "grouped":
          return results;

        case "levels":
          return exportLevels(results, options);

        case "entries-obj":
        case "entriesObject":
          return exportLevels(results, _objectSpread(_objectSpread({}, options), {}, {
            export: "levels",
            levels: ["entries-object"]
          }));

        default:
          return exportLevels(results, _objectSpread(_objectSpread({}, options), {}, {
            export: "levels",
            levels: [options.export]
          }));
      }
    }

    var ungrouped = ungroup(results, options == null ? void 0 : options.addGroupKeys);
    return ungrouped;
  };

  return _groupBy;
}

groupBy_groupBy.grouped = function (options) {
  return _objectSpread(_objectSpread({}, options), {}, {
    export: "grouped"
  });
};

groupBy_groupBy.entries = function (options) {
  return _objectSpread(_objectSpread({}, options), {}, {
    export: "entries"
  });
};

groupBy_groupBy.entriesObject = function (options) {
  return _objectSpread(_objectSpread({}, options), {}, {
    export: "entries-object"
  });
};

groupBy_groupBy.object = function (options) {
  return _objectSpread(_objectSpread({}, options), {}, {
    export: "object"
  });
};

groupBy_groupBy.map = function (options) {
  return _objectSpread(_objectSpread({}, options), {}, {
    export: "map"
  });
};

groupBy_groupBy.keys = function (options) {
  return _objectSpread(_objectSpread({}, options), {}, {
    export: "keys"
  });
};

groupBy_groupBy.values = function (options) {
  return _objectSpread(_objectSpread({}, options), {}, {
    export: "values"
  });
};

groupBy_groupBy.levels = function (options) {
  return _objectSpread(_objectSpread({}, options), {}, {
    export: "levels"
  });
};

function runFlow(items, fns, addGroupKeys) {
  var result = items;
  if (!(fns == null ? void 0 : fns.length)) return result;

  var _iterator = groupBy_createForOfIteratorHelper(fns),
      _step;

  try {
    var _loop = function _loop() {
      var fn = _step.value;
      if (!fn) return "continue";
      result = groupMap(result, function (items2, keys) {
        var context = {
          groupKeys: keys
        };
        var leafItemsMapped = fn(items2, context);

        if (addGroupKeys !== false) {
          leafItemsMapped = leafItemsMapped.map(function (item) {
            return assignGroupKeys(item, keys);
          });
        }

        return leafItemsMapped;
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _ret = _loop();

      if (_ret === "continue") continue;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}

function makeGrouped(items, groupKeys) {
  var groupKeyFns = singleOrArray_singleOrArray(groupKeys).map(function (key, i) {
    var keyFn = typeof key === "function" ? key : function (d) {
      return d[key];
    };
    var keyCache = new Map();
    return function (d) {
      var keyValue = keyFn(d);

      if (keyCache.has(keyValue)) {
        return keyCache.get(keyValue);
      }

      var keyWithName = [key, keyValue];
      keyCache.set(keyValue, keyWithName);
      return keyWithName;
    };
  });
  var grouped = group.apply(void 0, [items].concat((0,toConsumableArray/* default */.Z)(groupKeyFns)));
  return grouped;
}

function ungroup(grouped, addGroupKeys) {
  var items = [];
  groupTraversal(grouped, items, [], identity_identity, function (root, keys, values) {
    var valuesToAdd = values;

    if (addGroupKeys !== false) {
      valuesToAdd = values.map(function (d) {
        return assignGroupKeys(d, keys);
      });
    }

    root.push.apply(root, (0,toConsumableArray/* default */.Z)(valuesToAdd));
  });
  return items;
}

var defaultCompositeKey = function defaultCompositeKey(keys) {
  return keys.join("/");
};

function processFromGroupsOptions(options) {
  var _a;

  var flat = options.flat,
      single = options.single,
      _options$mapLeaf = options.mapLeaf,
      mapLeaf = _options$mapLeaf === void 0 ? identity_identity : _options$mapLeaf,
      _options$mapLeaves = options.mapLeaves,
      mapLeaves = _options$mapLeaves === void 0 ? identity_identity : _options$mapLeaves,
      addGroupKeys = options.addGroupKeys;
  var compositeKey;

  if (options.flat) {
    compositeKey = (_a = options.compositeKey) != null ? _a : defaultCompositeKey;
  }

  var groupFn = function groupFn(values, keys) {
    return single ? mapLeaf(addGroupKeys === false ? values[0] : assignGroupKeys(values[0], keys)) : mapLeaves(values.map(function (d) {
      return mapLeaf(addGroupKeys === false ? d : assignGroupKeys(d, keys));
    }));
  };

  var keyFn = flat ? function (keys) {
    return compositeKey(keys.map(function (d) {
      return d[1];
    }));
  } : function (keys) {
    return keys[keys.length - 1][1];
  };
  return {
    groupFn: groupFn,
    keyFn: keyFn
  };
}

function exportLevels(grouped, options) {
  var _processFromGroupsOpt = processFromGroupsOptions(options),
      groupFn = _processFromGroupsOpt.groupFn,
      keyFn = _processFromGroupsOpt.keyFn;

  var _options$mapEntry = options.mapEntry,
      mapEntry = _options$mapEntry === void 0 ? identity_identity : _options$mapEntry;
  var _options$levels = options.levels,
      levels = _options$levels === void 0 ? ["entries"] : _options$levels;
  var levelSpecs = [];

  var _iterator2 = groupBy_createForOfIteratorHelper(levels),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var levelOption = _step2.value;

      switch (levelOption) {
        case "entries":
        case "entries-object":
        case "entries-obj":
        case "entriesObject":
          {
            var _ret2 = function () {
              var levelMapEntry = (levelOption === "entries-object" || levelOption === "entries-obj" || levelOption === "entriesObject") && options.mapEntry == null ? function (_ref) {
                var _ref2 = (0,slicedToArray/* default */.Z)(_ref, 2),
                    key = _ref2[0],
                    values = _ref2[1];

                return {
                  key: key,
                  values: values
                };
              } : mapEntry;
              levelSpecs.push({
                id: "entries",
                createEmptySubgroup: function createEmptySubgroup() {
                  return [];
                },
                addSubgroup: function addSubgroup(parentGrouped, newSubgroup, key, level) {
                  parentGrouped.push(levelMapEntry([key, newSubgroup], level));
                },
                addLeaf: function addLeaf(parentGrouped, key, values, level) {
                  parentGrouped.push(levelMapEntry([key, values], level));
                }
              });
              return "break";
            }();

            if (_ret2 === "break") break;
          }

        case "map":
          levelSpecs.push({
            id: "map",
            createEmptySubgroup: function createEmptySubgroup() {
              return new Map();
            },
            addSubgroup: function addSubgroup(parentGrouped, newSubgroup, key) {
              parentGrouped.set(key, newSubgroup);
            },
            addLeaf: function addLeaf(parentGrouped, key, values) {
              parentGrouped.set(key, values);
            }
          });
          break;

        case "object":
          levelSpecs.push({
            id: "object",
            createEmptySubgroup: function createEmptySubgroup() {
              return {};
            },
            addSubgroup: function addSubgroup(parentGrouped, newSubgroup, key) {
              parentGrouped[key] = newSubgroup;
            },
            addLeaf: function addLeaf(parentGrouped, key, values) {
              parentGrouped[key] = values;
            }
          });
          break;

        case "keys":
          levelSpecs.push({
            id: "keys",
            createEmptySubgroup: function createEmptySubgroup() {
              return [];
            },
            addSubgroup: function addSubgroup(parentGrouped, newSubgroup, key) {
              parentGrouped.push([key, newSubgroup]);
            },
            addLeaf: function addLeaf(parentGrouped, key) {
              parentGrouped.push(key);
            }
          });
          break;

        case "values":
          levelSpecs.push({
            id: "values",
            createEmptySubgroup: function createEmptySubgroup() {
              return [];
            },
            addSubgroup: function addSubgroup(parentGrouped, newSubgroup) {
              parentGrouped.push(newSubgroup);
            },
            addLeaf: function addLeaf(parentGrouped, key, values) {
              parentGrouped.push(values);
            }
          });
          break;

        default:
          {
            if (typeof levelOption === "object") {
              levelSpecs.push(levelOption);
            }
          }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var addSubgroup = function addSubgroup(parentGrouped, keys, level) {
    var _a, _b;

    if (options.flat) {
      return parentGrouped;
    }

    var levelSpec = (_a = levelSpecs[level]) != null ? _a : levelSpecs[levelSpecs.length - 1];
    var nextLevelSpec = (_b = levelSpecs[level + 1]) != null ? _b : levelSpec;
    var newSubgroup = nextLevelSpec.createEmptySubgroup();
    levelSpec.addSubgroup(parentGrouped, newSubgroup, keyFn(keys), level);
    return newSubgroup;
  };

  var addLeaf = function addLeaf(parentGrouped, keys, values, level) {
    var _a;

    var levelSpec = (_a = levelSpecs[level]) != null ? _a : levelSpecs[levelSpecs.length - 1];
    levelSpec.addLeaf(parentGrouped, keyFn(keys), groupFn(values, keys), level);
  };

  var initialOutputObject = levelSpecs[0].createEmptySubgroup();
  return groupTraversal(grouped, initialOutputObject, [], addSubgroup, addLeaf);
}


;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/count.js






function count(groupKeys, options) {
  var _count = function _count(items) {
    options = options != null ? options : {};
    var _options = options,
        _options$name = _options.name,
        name = _options$name === void 0 ? "n" : _options$name,
        sort = _options.sort;
    var results = tidy(items, groupBy(groupKeys, [tally(options)]), sort ? arrange(desc(name)) : identity);
    return results;
  };

  return _count;
}


;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/rename.js
function rename(renameSpec) {
  var _rename = function _rename(items) {
    return items.map(function (d) {
      var _a;

      var mapped = {};
      var keys = Object.keys(d);

      for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
        var key = _keys[_i];
        var newKey = (_a = renameSpec[key]) != null ? _a : key;
        mapped[newKey] = d[key];
      }

      return mapped;
    });
  };

  return _rename;
}


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat-map.js
var es_array_flat_map = __webpack_require__(86535);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unscopables.flat-map.js
var es_array_unscopables_flat_map = __webpack_require__(99244);
;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/innerJoin.js


function innerJoin_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function innerJoin_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { innerJoin_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { innerJoin_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function innerJoin_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = innerJoin_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function innerJoin_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return innerJoin_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return innerJoin_arrayLikeToArray(o, minLen); }

function innerJoin_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function innerJoin_autodetectByMap(itemsA, itemsB) {
  if (itemsA.length === 0 || itemsB.length === 0) return {};
  var keysA = Object.keys(itemsA[0]);
  var keysB = Object.keys(itemsB[0]);
  var byMap = {};

  for (var _i = 0, _keysA = keysA; _i < _keysA.length; _i++) {
    var key = _keysA[_i];

    if (keysB.includes(key)) {
      byMap[key] = key;
    }
  }

  return byMap;
}

function innerJoin_makeByMap(by) {
  if (Array.isArray(by)) {
    var byMap = {};

    var _iterator = innerJoin_createForOfIteratorHelper(by),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;
        byMap[key] = key;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return byMap;
  } else if (typeof by === "object") {
    return by;
  }

  return _defineProperty({}, by, by);
}

function innerJoin_isMatch(d, j, byMap) {
  for (var jKey in byMap) {
    var dKey = byMap[jKey];

    if (d[dKey] !== j[jKey]) {
      return false;
    }
  }

  return true;
}

function innerJoin(itemsToJoin, options) {
  var _innerJoin = function _innerJoin(items) {
    var byMap = (options == null ? void 0 : options.by) == null ? innerJoin_autodetectByMap(items, itemsToJoin) : innerJoin_makeByMap(options.by);
    var joined = items.flatMap(function (d) {
      var matches = itemsToJoin.filter(function (j) {
        return innerJoin_isMatch(d, j, byMap);
      });
      return matches.map(function (j) {
        return innerJoin_objectSpread(innerJoin_objectSpread({}, d), j);
      });
    });
    return joined;
  };

  return _innerJoin;
}


;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/leftJoin.js


function leftJoin_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function leftJoin_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { leftJoin_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { leftJoin_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function leftJoin_leftJoin(itemsToJoin, options) {
  var _leftJoin = function _leftJoin(items) {
    if (!itemsToJoin.length) return items;
    var byMap = (options == null ? void 0 : options.by) == null ? autodetectByMap(items, itemsToJoin) : makeByMap(options.by);
    var joinObjectKeys = Object.keys(itemsToJoin[0]);
    var joined = items.flatMap(function (d) {
      var matches = itemsToJoin.filter(function (j) {
        return isMatch(d, j, byMap);
      });

      if (matches.length) {
        return matches.map(function (j) {
          return leftJoin_objectSpread(leftJoin_objectSpread({}, d), j);
        });
      }

      var undefinedFill = Object.fromEntries(joinObjectKeys.filter(function (key) {
        return d[key] == null;
      }).map(function (key) {
        return [key, void 0];
      }));
      return leftJoin_objectSpread(leftJoin_objectSpread({}, d), undefinedFill);
    });
    return joined;
  };

  return _leftJoin;
}


;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/fullJoin.js


function fullJoin_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = fullJoin_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function fullJoin_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return fullJoin_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fullJoin_arrayLikeToArray(o, minLen); }

function fullJoin_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function fullJoin_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function fullJoin_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { fullJoin_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { fullJoin_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function fullJoin(itemsToJoin, options) {
  var _fullJoin = function _fullJoin(items) {
    if (!itemsToJoin.length) return items;
    if (!items.length) return itemsToJoin;
    var byMap = (options == null ? void 0 : options.by) == null ? autodetectByMap(items, itemsToJoin) : makeByMap(options.by);
    var matchMap = new Map();
    var joinObjectKeys = Object.keys(itemsToJoin[0]);
    var joined = items.flatMap(function (d) {
      var matches = itemsToJoin.filter(function (j) {
        var matched = isMatch(d, j, byMap);

        if (matched) {
          matchMap.set(j, true);
        }

        return matched;
      });

      if (matches.length) {
        return matches.map(function (j) {
          return fullJoin_objectSpread(fullJoin_objectSpread({}, d), j);
        });
      }

      var undefinedFill = Object.fromEntries(joinObjectKeys.filter(function (key) {
        return d[key] == null;
      }).map(function (key) {
        return [key, void 0];
      }));
      return fullJoin_objectSpread(fullJoin_objectSpread({}, d), undefinedFill);
    });

    if (matchMap.size < itemsToJoin.length) {
      var leftEmptyObject = Object.fromEntries(Object.keys(items[0]).map(function (key) {
        return [key, void 0];
      }));

      var _iterator = fullJoin_createForOfIteratorHelper(itemsToJoin),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          if (!matchMap.has(item)) {
            joined.push(fullJoin_objectSpread(fullJoin_objectSpread({}, leftEmptyObject), item));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return joined;
  };

  return _fullJoin;
}


;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/mutate.js


function mutate_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function mutate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { mutate_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { mutate_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function mutate_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = mutate_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function mutate_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return mutate_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return mutate_arrayLikeToArray(o, minLen); }

function mutate_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function mutate(mutateSpec) {
  var _mutate = function _mutate(items) {
    var mutatedItems = [];

    var _iterator = mutate_createForOfIteratorHelper(items),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        var mutatedItem = mutate_objectSpread({}, item);

        for (var key in mutateSpec) {
          var mutateSpecValue = mutateSpec[key];
          var mutatedResult = typeof mutateSpecValue === "function" ? mutateSpecValue(mutatedItem) : mutateSpecValue;
          mutatedItem[key] = mutatedResult;
        }

        mutatedItems.push(mutatedItem);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return mutatedItems;
  };

  return _mutate;
}


;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/helpers/keysFromItems.js
function keysFromItems(items) {
  if (items.length < 1) return [];
  var keys = Object.keys(items[0]);
  return keys;
}


;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/selectors/everything.js


function everything() {
  return function (items) {
    var keys = keysFromItems(items);
    return keys;
  };
}


;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/select.js


function select_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = select_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function select_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return select_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return select_arrayLikeToArray(o, minLen); }

function select_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function processSelectors(items, selectKeys) {
  var processedSelectKeys = [];

  var _iterator = select_createForOfIteratorHelper(singleOrArray_singleOrArray(selectKeys)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var keyInput = _step.value;

      if (typeof keyInput === "function") {
        var _processedSelectKeys;

        (_processedSelectKeys = processedSelectKeys).push.apply(_processedSelectKeys, (0,toConsumableArray/* default */.Z)(keyInput(items)));
      } else {
        processedSelectKeys.push(keyInput);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (processedSelectKeys.length && processedSelectKeys[0][0] === "-") {
    processedSelectKeys = [].concat((0,toConsumableArray/* default */.Z)(everything()(items)), (0,toConsumableArray/* default */.Z)(processedSelectKeys));
  }

  var negationMap = {};
  var keysWithoutNegations = [];

  for (var k = processedSelectKeys.length - 1; k >= 0; k--) {
    var key = processedSelectKeys[k];

    if (key[0] === "-") {
      negationMap[key.substring(1)] = true;
      continue;
    }

    if (negationMap[key]) {
      negationMap[key] = false;
      continue;
    }

    keysWithoutNegations.unshift(key);
  }

  processedSelectKeys = Array.from(new Set(keysWithoutNegations));
  return processedSelectKeys;
}

function select_select(selectKeys) {
  var _select = function _select(items) {
    var processedSelectKeys = processSelectors(items, selectKeys);
    if (!processedSelectKeys.length) return items;
    return items.map(function (d) {
      var mapped = {};

      var _iterator2 = select_createForOfIteratorHelper(processedSelectKeys),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var key = _step2.value;
          mapped[key] = d[key];
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return mapped;
    });
  };

  return _select;
}


;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/pivotWider.js


function pivotWider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function pivotWider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pivotWider_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pivotWider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pivotWider_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = pivotWider_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function pivotWider_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return pivotWider_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return pivotWider_arrayLikeToArray(o, minLen); }

function pivotWider_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function pivotWider(options) {
  var _pivotWider = function _pivotWider(items) {
    var namesFrom = options.namesFrom,
        valuesFrom = options.valuesFrom,
        valuesFill = options.valuesFill,
        valuesFillMap = options.valuesFillMap,
        _options$namesSep = options.namesSep,
        namesSep = _options$namesSep === void 0 ? "_" : _options$namesSep;
    var namesFromKeys = Array.isArray(namesFrom) ? namesFrom : [namesFrom];
    var valuesFromKeys = Array.isArray(valuesFrom) ? valuesFrom : [valuesFrom];
    var wider = [];
    if (!items.length) return wider;
    var idColumns = Object.keys(items[0]).filter(function (key) {
      return !namesFromKeys.includes(key) && !valuesFromKeys.includes(key);
    });
    var nameValuesMap = {};

    var _iterator = pivotWider_createForOfIteratorHelper(items),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        var _iterator6 = pivotWider_createForOfIteratorHelper(namesFromKeys),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _nameKey = _step6.value;

            if (nameValuesMap[_nameKey] == null) {
              nameValuesMap[_nameKey] = {};
            }

            nameValuesMap[_nameKey][item[_nameKey]] = true;
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var nameValuesLists = [];

    for (var nameKey in nameValuesMap) {
      nameValuesLists.push(Object.keys(nameValuesMap[nameKey]));
    }

    var baseWideObj = {};
    var combos = makeCombinations(namesSep, nameValuesLists);

    var _iterator2 = pivotWider_createForOfIteratorHelper(combos),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _nameKey2 = _step2.value;

        if (valuesFromKeys.length === 1) {
          baseWideObj[_nameKey2] = valuesFillMap != null ? valuesFillMap[valuesFromKeys[0]] : valuesFill;
          continue;
        }

        var _iterator7 = pivotWider_createForOfIteratorHelper(valuesFromKeys),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var valueKey = _step7.value;
            baseWideObj["".concat(valueKey).concat(namesSep).concat(_nameKey2)] = valuesFillMap != null ? valuesFillMap[valueKey] : valuesFill;
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    function widenItems(items2) {
      if (!items2.length) return [];

      var wide = pivotWider_objectSpread({}, baseWideObj);

      var _iterator3 = pivotWider_createForOfIteratorHelper(idColumns),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var idKey = _step3.value;
          wide[idKey] = items2[0][idKey];
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var _iterator4 = pivotWider_createForOfIteratorHelper(items2),
          _step4;

      try {
        var _loop = function _loop() {
          var item = _step4.value;
          var nameKey = namesFromKeys.map(function (key) {
            return item[key];
          }).join(namesSep);

          if (valuesFromKeys.length === 1) {
            wide[nameKey] = item[valuesFromKeys[0]];
            return "continue";
          }

          var _iterator5 = pivotWider_createForOfIteratorHelper(valuesFromKeys),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var valueKey = _step5.value;
              wide["".concat(valueKey).concat(namesSep).concat(nameKey)] = item[valueKey];
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        };

        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _ret = _loop();

          if (_ret === "continue") continue;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return [wide];
    }

    if (!idColumns.length) {
      return widenItems(items);
    }

    var finish = tidy(items, groupBy(idColumns, [widenItems]));
    return finish;
  };

  return _pivotWider;
}

function makeCombinations() {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "_";
  var arrays = arguments.length > 1 ? arguments[1] : undefined;

  function combine(accum, prefix, remainingArrays) {
    if (!remainingArrays.length && prefix != null) {
      accum.push(prefix);
      return;
    }

    var array = remainingArrays[0];
    var newRemainingArrays = remainingArrays.slice(1);

    var _iterator8 = pivotWider_createForOfIteratorHelper(array),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var item = _step8.value;
        combine(accum, prefix == null ? item : "".concat(prefix).concat(separator).concat(item), newRemainingArrays);
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
  }

  var result = [];
  combine(result, null, arrays);
  return result;
}


;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/complete.js




function complete(expandKeys, replaceNullySpec) {
  var _complete = function _complete(items) {
    var expanded = expand(expandKeys)(items);
    var joined = leftJoin(items)(expanded);
    return replaceNullySpec ? replaceNully(replaceNullySpec)(joined) : joined;
  };

  return _complete;
}


;// CONCATENATED MODULE: ./node_modules/d3-array/src/min.js
function min_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = min_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function min_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return min_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return min_arrayLikeToArray(o, minLen); }

function min_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function min(values, valueof) {
  var min;

  if (valueof === undefined) {
    var _iterator = min_createForOfIteratorHelper(values),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;

        if (value != null && (min > value || min === undefined && value >= value)) {
          min = value;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    var index = -1;

    var _iterator2 = min_createForOfIteratorHelper(values),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _value = _step2.value;

        if ((_value = valueof(_value, ++index, values)) != null && (min > _value || min === undefined && _value >= _value)) {
          min = _value;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return min;
}
;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/summary/min.js


function min_min(key) {
  var keyFn = typeof key === "function" ? key : function (d) {
    return d[key];
  };
  return function (items) {
    return min(items, keyFn);
  };
}


;// CONCATENATED MODULE: ./node_modules/d3-array/src/max.js
function max_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = max_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function max_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return max_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return max_arrayLikeToArray(o, minLen); }

function max_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function max(values, valueof) {
  var max;

  if (valueof === undefined) {
    var _iterator = max_createForOfIteratorHelper(values),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;

        if (value != null && (max < value || max === undefined && value >= value)) {
          max = value;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    var index = -1;

    var _iterator2 = max_createForOfIteratorHelper(values),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _value = _step2.value;

        if ((_value = valueof(_value, ++index, values)) != null && (max < _value || max === undefined && _value >= _value)) {
          max = _value;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return max;
}
;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/summary/max.js


function max_max(key) {
  var keyFn = typeof key === "function" ? key : function (d) {
    return d[key];
  };
  return function (items) {
    return max(items, keyFn);
  };
}


;// CONCATENATED MODULE: ./node_modules/@tidyjs/tidy/dist/es/index.js
























































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

      for (a = []; b && !b.isInsertionMarker();) {
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

      for (var b = [null], c = [null], d = null; a && !a.isInsertionMarker();) {
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
      if (this.workspace.isDragging && !this.workspace.isDragging() && a.type == Blockly.Events.BLOCK_MOVE) {
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
      var a = Blockly.Procedures.findLegalName("", this);
      a = new Blockly.FieldTextInput(a, Blockly.Procedures.rename);
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

      for (var b = a.getInputTargetBlock("STACK"); b && !b.isInsertionMarker();) {
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
      var a = Blockly.Procedures.findLegalName("", this);
      a = new Blockly.FieldTextInput(a, Blockly.Procedures.rename);
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
      this.appendDummyInput("TOPROW").appendField("", "NAME");
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
          d = this.getProcedureCall();
          d || (d = Blockly.Procedures.findLegalName("", this), this.renameProcedure("", d));
          c.appendChild(Blockly.utils.xml.createTextNode(d));
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
      this.argumentVarModels_ = [];
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

      for (a = []; b && !b.isInsertionMarker();) {
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
  Blockly.JavaScript.isInitialized = !1;

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
    this.isInitialized = !0;
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
        a.inputList[f].type == Blockly.inputTypes.VALUE && (e = a.inputList[f].connection.targetBlock()) && (e = Blockly.JavaScript.allNestedComments(e)) && (d += Blockly.JavaScript.prefixLines(e, "// "));
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
    var b = Blockly.JavaScript.valueToCode(a, "RED", Blockly.JavaScript.ORDER_NONE) || 0,
        c = Blockly.JavaScript.valueToCode(a, "GREEN", Blockly.JavaScript.ORDER_NONE) || 0;
    a = Blockly.JavaScript.valueToCode(a, "BLUE", Blockly.JavaScript.ORDER_NONE) || 0;
    return [Blockly.JavaScript.provideFunction_("colourRgb", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(r, g, b) {", "  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;", "  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;", "  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;", "  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);", "  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);", "  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);", "  return '#' + r + g + b;", "}"]) + "(" + b + ", " + c + ", " + a + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.colour_blend = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "COLOUR1", Blockly.JavaScript.ORDER_NONE) || "'#000000'",
        c = Blockly.JavaScript.valueToCode(a, "COLOUR2", Blockly.JavaScript.ORDER_NONE) || "'#000000'";
    a = Blockly.JavaScript.valueToCode(a, "RATIO", Blockly.JavaScript.ORDER_NONE) || .5;
    return [Blockly.JavaScript.provideFunction_("colourBlend", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(c1, c2, ratio) {", "  ratio = Math.max(Math.min(Number(ratio), 1), 0);", "  var r1 = parseInt(c1.substring(1, 3), 16);", "  var g1 = parseInt(c1.substring(3, 5), 16);", "  var b1 = parseInt(c1.substring(5, 7), 16);", "  var r2 = parseInt(c2.substring(1, 3), 16);", "  var g2 = parseInt(c2.substring(3, 5), 16);", "  var b2 = parseInt(c2.substring(5, 7), 16);", "  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);", "  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);", "  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);", "  r = ('0' + (r || 0).toString(16)).slice(-2);", "  g = ('0' + (g || 0).toString(16)).slice(-2);", "  b = ('0' + (b || 0).toString(16)).slice(-2);", "  return '#' + r + g + b;", "}"]) + "(" + b + ", " + c + ", " + a + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.lists = {};

  Blockly.JavaScript.lists_create_empty = function (a) {
    return ["[]", Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript.lists_create_with = function (a) {
    for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) {
      b[c] = Blockly.JavaScript.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_NONE) || "null";
    }

    return ["[" + b.join(", ") + "]", Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript.lists_repeat = function (a) {
    var b = Blockly.JavaScript.provideFunction_("listsRepeat", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(value, n) {", "  var array = [];", "  for (var i = 0; i < n; i++) {", "    array[i] = value;", "  }", "  return array;", "}"]),
        c = Blockly.JavaScript.valueToCode(a, "ITEM", Blockly.JavaScript.ORDER_NONE) || "null";
    a = Blockly.JavaScript.valueToCode(a, "NUM", Blockly.JavaScript.ORDER_NONE) || "0";
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
        d = Blockly.JavaScript.valueToCode(a, "VALUE", "RANDOM" == c ? Blockly.JavaScript.ORDER_NONE : Blockly.JavaScript.ORDER_MEMBER) || "[]";

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
      POWER: [null, Blockly.JavaScript.ORDER_NONE]
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
        a = Blockly.JavaScript.valueToCode(a, "LIST", Blockly.JavaScript.ORDER_NONE) || "[]";
        a = "Math.min.apply(null, " + a + ")";
        break;

      case "MAX":
        a = Blockly.JavaScript.valueToCode(a, "LIST", Blockly.JavaScript.ORDER_NONE) || "[]";
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
    var b = Blockly.JavaScript.valueToCode(a, "VALUE", Blockly.JavaScript.ORDER_NONE) || "0",
        c = Blockly.JavaScript.valueToCode(a, "LOW", Blockly.JavaScript.ORDER_NONE) || "0";
    a = Blockly.JavaScript.valueToCode(a, "HIGH", Blockly.JavaScript.ORDER_NONE) || "Infinity";
    return ["Math.min(Math.max(" + b + ", " + c + "), " + a + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.math_random_int = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "FROM", Blockly.JavaScript.ORDER_NONE) || "0";
    a = Blockly.JavaScript.valueToCode(a, "TO", Blockly.JavaScript.ORDER_NONE) || "0";
    return [Blockly.JavaScript.provideFunction_("mathRandomInt", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(a, b) {", "  if (a > b) {", "    // Swap a and b to ensure a is smaller.", "    var c = a;", "    a = b;", "    b = c;", "  }", "  return Math.floor(Math.random() * (b - a + 1) + a);", "}"]) + "(" + b + ", " + a + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.math_random_float = function (a) {
    return ["Math.random()", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.math_atan2 = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "X", Blockly.JavaScript.ORDER_NONE) || "0";
    return ["Math.atan2(" + (Blockly.JavaScript.valueToCode(a, "Y", Blockly.JavaScript.ORDER_NONE) || "0") + ", " + b + ") / Math.PI * 180", Blockly.JavaScript.ORDER_DIVISION];
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
      c[e] = Blockly.JavaScript.valueToCode(a, "ARG" + e, Blockly.JavaScript.ORDER_NONE) || "null";
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
    var b = -1 != a.indexOf("+") ? Blockly.JavaScript.ORDER_ADDITION : Blockly.JavaScript.ORDER_ATOMIC;
    return [a, b];
  };

  Blockly.JavaScript.text.forceString_ = function (a) {
    return Blockly.JavaScript.text.forceString_.strRegExp.test(a) ? [a, Blockly.JavaScript.ORDER_ATOMIC] : ["String(" + a + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.text.forceString_.strRegExp = /^\s*'([^']|\\')*'\s*$/;

  Blockly.JavaScript.text_join = function (a) {
    switch (a.itemCount_) {
      case 0:
        return ["''", Blockly.JavaScript.ORDER_ATOMIC];

      case 1:
        return a = Blockly.JavaScript.valueToCode(a, "ADD0", Blockly.JavaScript.ORDER_NONE) || "''", Blockly.JavaScript.text.forceString_(a);

      case 2:
        var b = Blockly.JavaScript.valueToCode(a, "ADD0", Blockly.JavaScript.ORDER_NONE) || "''";
        a = Blockly.JavaScript.valueToCode(a, "ADD1", Blockly.JavaScript.ORDER_NONE) || "''";
        a = Blockly.JavaScript.text.forceString_(b)[0] + " + " + Blockly.JavaScript.text.forceString_(a)[0];
        return [a, Blockly.JavaScript.ORDER_ADDITION];

      default:
        b = Array(a.itemCount_);

        for (var c = 0; c < a.itemCount_; c++) {
          b[c] = Blockly.JavaScript.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_NONE) || "''";
        }

        a = "[" + b.join(",") + "].join('')";
        return [a, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    }
  };

  Blockly.JavaScript.text_append = function (a) {
    var b = Blockly.JavaScript.variableDB_.getName(a.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME);
    a = Blockly.JavaScript.valueToCode(a, "TEXT", Blockly.JavaScript.ORDER_NONE) || "''";
    return b + " += " + Blockly.JavaScript.text.forceString_(a)[0] + ";\n";
  };

  Blockly.JavaScript.text_length = function (a) {
    return [(Blockly.JavaScript.valueToCode(a, "VALUE", Blockly.JavaScript.ORDER_MEMBER) || "''") + ".length", Blockly.JavaScript.ORDER_MEMBER];
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
    var b = a.getFieldValue("WHERE1"),
        c = a.getFieldValue("WHERE2"),
        d = "FROM_END" != b && "LAST" != b && "FROM_END" != c && "LAST" != c,
        e = Blockly.JavaScript.valueToCode(a, "STRING", d ? Blockly.JavaScript.ORDER_MEMBER : Blockly.JavaScript.ORDER_NONE) || "''";
    if ("FIRST" == b && "LAST" == c) return [e, Blockly.JavaScript.ORDER_NONE];

    if (e.match(/^'?\w+'?$/) || d) {
      switch (b) {
        case "FROM_START":
          d = Blockly.JavaScript.getAdjusted(a, "AT1");
          break;

        case "FROM_END":
          d = Blockly.JavaScript.getAdjusted(a, "AT1", 1, !1, Blockly.JavaScript.ORDER_SUBTRACTION);
          d = e + ".length - " + d;
          break;

        case "FIRST":
          d = "0";
          break;

        default:
          throw Error("Unhandled option (text_getSubstring).");
      }

      switch (c) {
        case "FROM_START":
          a = Blockly.JavaScript.getAdjusted(a, "AT2", 1);
          break;

        case "FROM_END":
          a = Blockly.JavaScript.getAdjusted(a, "AT2", 0, !1, Blockly.JavaScript.ORDER_SUBTRACTION);
          a = e + ".length - " + a;
          break;

        case "LAST":
          a = e + ".length";
          break;

        default:
          throw Error("Unhandled option (text_getSubstring).");
      }

      b = e + ".slice(" + d + ", " + a + ")";
    } else {
      d = Blockly.JavaScript.getAdjusted(a, "AT1");
      a = Blockly.JavaScript.getAdjusted(a, "AT2");
      var f = Blockly.JavaScript.text.getIndex_,
          g = {
        FIRST: "First",
        LAST: "Last",
        FROM_START: "FromStart",
        FROM_END: "FromEnd"
      };
      b = Blockly.JavaScript.provideFunction_("subsequence" + g[b] + g[c], ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(sequence" + ("FROM_END" == b || "FROM_START" == b ? ", at1" : "") + ("FROM_END" == c || "FROM_START" == c ? ", at2" : "") + ") {", "  var start = " + f("sequence", b, "at1") + ";", "  var end = " + f("sequence", c, "at2") + " + 1;", "  return sequence.slice(start, end);", "}"]) + "(" + e + ("FROM_END" == b || "FROM_START" == b ? ", " + d : "") + ("FROM_END" == c || "FROM_START" == c ? ", " + a : "") + ")";
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
    var b = Blockly.JavaScript.valueToCode(a, "TEXT", Blockly.JavaScript.ORDER_NONE) || "''";
    a = Blockly.JavaScript.valueToCode(a, "SUB", Blockly.JavaScript.ORDER_NONE) || "''";
    return [Blockly.JavaScript.provideFunction_("textCount", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(haystack, needle) {", "  if (needle.length === 0) {", "    return haystack.length + 1;", "  } else {", "    return haystack.split(needle).length - 1;", "  }", "}"]) + "(" + b + ", " + a + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.text_replace = function (a) {
    var b = Blockly.JavaScript.valueToCode(a, "TEXT", Blockly.JavaScript.ORDER_NONE) || "''",
        c = Blockly.JavaScript.valueToCode(a, "FROM", Blockly.JavaScript.ORDER_NONE) || "''";
    a = Blockly.JavaScript.valueToCode(a, "TO", Blockly.JavaScript.ORDER_NONE) || "''";
    return [Blockly.JavaScript.provideFunction_("textReplace", ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(haystack, needle, replacement) {", '  needle = needle.replace(/([-()\\[\\]{}+?*.$\\^|,:#<!\\\\])/g,"\\\\$1")', '                 .replace(/\\x08/g,"\\\\x08");', "  return haystack.replace(new RegExp(needle, 'g'), replacement);", "}"]) + "(" + b + ", " + c + ", " + a + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript.text_reverse = function (a) {
    return [(Blockly.JavaScript.valueToCode(a, "TEXT", Blockly.JavaScript.ORDER_MEMBER) || "''") + ".split('').reverse().join('')", Blockly.JavaScript.ORDER_FUNCTION_CALL];
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

/***/ 70684:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

/***/ }),

/***/ 77847:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license
Papa Parse
v5.3.1
https://github.com/mholt/PapaParse
License: MIT
*/
!function (e, t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function s() {
  "use strict";

  var f = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== f ? f : {};
  var n = !f.document && !!f.postMessage,
      o = n && /blob:/i.test((f.location || {}).protocol),
      a = {},
      h = 0,
      b = {
    parse: function parse(e, t) {
      var i = (t = t || {}).dynamicTyping || !1;
      M(i) && (t.dynamicTypingFunction = i, i = {});

      if (t.dynamicTyping = i, t.transform = !!M(t.transform) && t.transform, t.worker && b.WORKERS_SUPPORTED) {
        var r = function () {
          if (!b.WORKERS_SUPPORTED) return !1;
          var e = (i = f.URL || f.webkitURL || null, r = s.toString(), b.BLOB_URL || (b.BLOB_URL = i.createObjectURL(new Blob(["(", r, ")();"], {
            type: "text/javascript"
          })))),
              t = new f.Worker(e);
          var i, r;
          return t.onmessage = _, t.id = h++, a[t.id] = t;
        }();

        return r.userStep = t.step, r.userChunk = t.chunk, r.userComplete = t.complete, r.userError = t.error, t.step = M(t.step), t.chunk = M(t.chunk), t.complete = M(t.complete), t.error = M(t.error), delete t.worker, void r.postMessage({
          input: e,
          config: t,
          workerId: r.id
        });
      }

      var n = null;
      b.NODE_STREAM_INPUT, "string" == typeof e ? n = t.download ? new l(t) : new p(t) : !0 === e.readable && M(e.read) && M(e.on) ? n = new g(t) : (f.File && e instanceof File || e instanceof Object) && (n = new c(t));
      return n.stream(e);
    },
    unparse: function unparse(e, t) {
      var n = !1,
          _ = !0,
          m = ",",
          y = "\r\n",
          s = '"',
          a = s + s,
          i = !1,
          r = null,
          o = !1;

      !function () {
        if ("object" != typeof t) return;
        "string" != typeof t.delimiter || b.BAD_DELIMITERS.filter(function (e) {
          return -1 !== t.delimiter.indexOf(e);
        }).length || (m = t.delimiter);
        ("boolean" == typeof t.quotes || "function" == typeof t.quotes || Array.isArray(t.quotes)) && (n = t.quotes);
        "boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines || (i = t.skipEmptyLines);
        "string" == typeof t.newline && (y = t.newline);
        "string" == typeof t.quoteChar && (s = t.quoteChar);
        "boolean" == typeof t.header && (_ = t.header);

        if (Array.isArray(t.columns)) {
          if (0 === t.columns.length) throw new Error("Option columns is empty");
          r = t.columns;
        }

        void 0 !== t.escapeChar && (a = t.escapeChar + s);
        "boolean" == typeof t.escapeFormulae && (o = t.escapeFormulae);
      }();
      var h = new RegExp(j(s), "g");
      "string" == typeof e && (e = JSON.parse(e));

      if (Array.isArray(e)) {
        if (!e.length || Array.isArray(e[0])) return u(null, e, i);
        if ("object" == typeof e[0]) return u(r || Object.keys(e[0]), e, i);
      } else if ("object" == typeof e) return "string" == typeof e.data && (e.data = JSON.parse(e.data)), Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : "object" == typeof e.data[0] ? Object.keys(e.data[0]) : []), Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [e.data])), u(e.fields || [], e.data || [], i);

      throw new Error("Unable to serialize unrecognized input");

      function u(e, t, i) {
        var r = "";
        "string" == typeof e && (e = JSON.parse(e)), "string" == typeof t && (t = JSON.parse(t));
        var n = Array.isArray(e) && 0 < e.length,
            s = !Array.isArray(t[0]);

        if (n && _) {
          for (var a = 0; a < e.length; a++) {
            0 < a && (r += m), r += v(e[a], a);
          }

          0 < t.length && (r += y);
        }

        for (var o = 0; o < t.length; o++) {
          var h = n ? e.length : t[o].length,
              u = !1,
              f = n ? 0 === Object.keys(t[o]).length : 0 === t[o].length;

          if (i && !n && (u = "greedy" === i ? "" === t[o].join("").trim() : 1 === t[o].length && 0 === t[o][0].length), "greedy" === i && n) {
            for (var d = [], l = 0; l < h; l++) {
              var c = s ? e[l] : l;
              d.push(t[o][c]);
            }

            u = "" === d.join("").trim();
          }

          if (!u) {
            for (var p = 0; p < h; p++) {
              0 < p && !f && (r += m);
              var g = n && s ? e[p] : p;
              r += v(t[o][g], p);
            }

            o < t.length - 1 && (!i || 0 < h && !f) && (r += y);
          }
        }

        return r;
      }

      function v(e, t) {
        if (null == e) return "";
        if (e.constructor === Date) return JSON.stringify(e).slice(1, 25);
        !0 === o && "string" == typeof e && null !== e.match(/^[=+\-@].*$/) && (e = "'" + e);

        var i = e.toString().replace(h, a),
            r = "boolean" == typeof n && n || "function" == typeof n && n(e, t) || Array.isArray(n) && n[t] || function (e, t) {
          for (var i = 0; i < t.length; i++) {
            if (-1 < e.indexOf(t[i])) return !0;
          }

          return !1;
        }(i, b.BAD_DELIMITERS) || -1 < i.indexOf(m) || " " === i.charAt(0) || " " === i.charAt(i.length - 1);

        return r ? s + i + s : i;
      }
    }
  };

  if (b.RECORD_SEP = String.fromCharCode(30), b.UNIT_SEP = String.fromCharCode(31), b.BYTE_ORDER_MARK = "\uFEFF", b.BAD_DELIMITERS = ["\r", "\n", '"', b.BYTE_ORDER_MARK], b.WORKERS_SUPPORTED = !n && !!f.Worker, b.NODE_STREAM_INPUT = 1, b.LocalChunkSize = 10485760, b.RemoteChunkSize = 5242880, b.DefaultDelimiter = ",", b.Parser = E, b.ParserHandle = i, b.NetworkStreamer = l, b.FileStreamer = c, b.StringStreamer = p, b.ReadableStreamStreamer = g, f.jQuery) {
    var d = f.jQuery;

    d.fn.parse = function (o) {
      var i = o.config || {},
          h = [];
      return this.each(function (e) {
        if (!("INPUT" === d(this).prop("tagName").toUpperCase() && "file" === d(this).attr("type").toLowerCase() && f.FileReader) || !this.files || 0 === this.files.length) return !0;

        for (var t = 0; t < this.files.length; t++) {
          h.push({
            file: this.files[t],
            inputElem: this,
            instanceConfig: d.extend({}, i)
          });
        }
      }), e(), this;

      function e() {
        if (0 !== h.length) {
          var e,
              t,
              i,
              r,
              n = h[0];

          if (M(o.before)) {
            var s = o.before(n.file, n.inputElem);

            if ("object" == typeof s) {
              if ("abort" === s.action) return e = "AbortError", t = n.file, i = n.inputElem, r = s.reason, void (M(o.error) && o.error({
                name: e
              }, t, i, r));
              if ("skip" === s.action) return void u();
              "object" == typeof s.config && (n.instanceConfig = d.extend(n.instanceConfig, s.config));
            } else if ("skip" === s) return void u();
          }

          var a = n.instanceConfig.complete;
          n.instanceConfig.complete = function (e) {
            M(a) && a(e, n.file, n.inputElem), u();
          }, b.parse(n.file, n.instanceConfig);
        } else M(o.complete) && o.complete();
      }

      function u() {
        h.splice(0, 1), e();
      }
    };
  }

  function u(e) {
    this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
      data: [],
      errors: [],
      meta: {}
    }, function (e) {
      var t = w(e);
      t.chunkSize = parseInt(t.chunkSize), e.step || e.chunk || (t.chunkSize = null);
      this._handle = new i(t), (this._handle.streamer = this)._config = t;
    }.call(this, e), this.parseChunk = function (e, t) {
      if (this.isFirstChunk && M(this._config.beforeFirstChunk)) {
        var i = this._config.beforeFirstChunk(e);

        void 0 !== i && (e = i);
      }

      this.isFirstChunk = !1, this._halted = !1;
      var r = this._partialLine + e;
      this._partialLine = "";

      var n = this._handle.parse(r, this._baseIndex, !this._finished);

      if (!this._handle.paused() && !this._handle.aborted()) {
        var s = n.meta.cursor;
        this._finished || (this._partialLine = r.substring(s - this._baseIndex), this._baseIndex = s), n && n.data && (this._rowCount += n.data.length);
        var a = this._finished || this._config.preview && this._rowCount >= this._config.preview;
        if (o) f.postMessage({
          results: n,
          workerId: b.WORKER_ID,
          finished: a
        });else if (M(this._config.chunk) && !t) {
          if (this._config.chunk(n, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
          n = void 0, this._completeResults = void 0;
        }
        return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(n.data), this._completeResults.errors = this._completeResults.errors.concat(n.errors), this._completeResults.meta = n.meta), this._completed || !a || !M(this._config.complete) || n && n.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), a || n && n.meta.paused || this._nextChunk(), n;
      }

      this._halted = !0;
    }, this._sendError = function (e) {
      M(this._config.error) ? this._config.error(e) : o && this._config.error && f.postMessage({
        workerId: b.WORKER_ID,
        error: e,
        finished: !1
      });
    };
  }

  function l(e) {
    var r;
    (e = e || {}).chunkSize || (e.chunkSize = b.RemoteChunkSize), u.call(this, e), this._nextChunk = n ? function () {
      this._readChunk(), this._chunkLoaded();
    } : function () {
      this._readChunk();
    }, this.stream = function (e) {
      this._input = e, this._nextChunk();
    }, this._readChunk = function () {
      if (this._finished) this._chunkLoaded();else {
        if (r = new XMLHttpRequest(), this._config.withCredentials && (r.withCredentials = this._config.withCredentials), n || (r.onload = v(this._chunkLoaded, this), r.onerror = v(this._chunkError, this)), r.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !n), this._config.downloadRequestHeaders) {
          var e = this._config.downloadRequestHeaders;

          for (var t in e) {
            r.setRequestHeader(t, e[t]);
          }
        }

        if (this._config.chunkSize) {
          var i = this._start + this._config.chunkSize - 1;
          r.setRequestHeader("Range", "bytes=" + this._start + "-" + i);
        }

        try {
          r.send(this._config.downloadRequestBody);
        } catch (e) {
          this._chunkError(e.message);
        }

        n && 0 === r.status && this._chunkError();
      }
    }, this._chunkLoaded = function () {
      4 === r.readyState && (r.status < 200 || 400 <= r.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : r.responseText.length, this._finished = !this._config.chunkSize || this._start >= function (e) {
        var t = e.getResponseHeader("Content-Range");
        if (null === t) return -1;
        return parseInt(t.substring(t.lastIndexOf("/") + 1));
      }(r), this.parseChunk(r.responseText)));
    }, this._chunkError = function (e) {
      var t = r.statusText || e;

      this._sendError(new Error(t));
    };
  }

  function c(e) {
    var r, n;
    (e = e || {}).chunkSize || (e.chunkSize = b.LocalChunkSize), u.call(this, e);
    var s = "undefined" != typeof FileReader;
    this.stream = function (e) {
      this._input = e, n = e.slice || e.webkitSlice || e.mozSlice, s ? ((r = new FileReader()).onload = v(this._chunkLoaded, this), r.onerror = v(this._chunkError, this)) : r = new FileReaderSync(), this._nextChunk();
    }, this._nextChunk = function () {
      this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
    }, this._readChunk = function () {
      var e = this._input;

      if (this._config.chunkSize) {
        var t = Math.min(this._start + this._config.chunkSize, this._input.size);
        e = n.call(e, this._start, t);
      }

      var i = r.readAsText(e, this._config.encoding);
      s || this._chunkLoaded({
        target: {
          result: i
        }
      });
    }, this._chunkLoaded = function (e) {
      this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e.target.result);
    }, this._chunkError = function () {
      this._sendError(r.error);
    };
  }

  function p(e) {
    var i;
    u.call(this, e = e || {}), this.stream = function (e) {
      return i = e, this._nextChunk();
    }, this._nextChunk = function () {
      if (!this._finished) {
        var e,
            t = this._config.chunkSize;
        return t ? (e = i.substring(0, t), i = i.substring(t)) : (e = i, i = ""), this._finished = !i, this.parseChunk(e);
      }
    };
  }

  function g(e) {
    u.call(this, e = e || {});
    var t = [],
        i = !0,
        r = !1;
    this.pause = function () {
      u.prototype.pause.apply(this, arguments), this._input.pause();
    }, this.resume = function () {
      u.prototype.resume.apply(this, arguments), this._input.resume();
    }, this.stream = function (e) {
      this._input = e, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
    }, this._checkIsFinished = function () {
      r && 1 === t.length && (this._finished = !0);
    }, this._nextChunk = function () {
      this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : i = !0;
    }, this._streamData = v(function (e) {
      try {
        t.push("string" == typeof e ? e : e.toString(this._config.encoding)), i && (i = !1, this._checkIsFinished(), this.parseChunk(t.shift()));
      } catch (e) {
        this._streamError(e);
      }
    }, this), this._streamError = v(function (e) {
      this._streamCleanUp(), this._sendError(e);
    }, this), this._streamEnd = v(function () {
      this._streamCleanUp(), r = !0, this._streamData("");
    }, this), this._streamCleanUp = v(function () {
      this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
    }, this);
  }

  function i(m) {
    var a,
        o,
        h,
        r = Math.pow(2, 53),
        n = -r,
        s = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
        u = /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/,
        t = this,
        i = 0,
        f = 0,
        d = !1,
        e = !1,
        l = [],
        c = {
      data: [],
      errors: [],
      meta: {}
    };

    if (M(m.step)) {
      var p = m.step;

      m.step = function (e) {
        if (c = e, _()) g();else {
          if (g(), 0 === c.data.length) return;
          i += e.data.length, m.preview && i > m.preview ? o.abort() : (c.data = c.data[0], p(c, t));
        }
      };
    }

    function y(e) {
      return "greedy" === m.skipEmptyLines ? "" === e.join("").trim() : 1 === e.length && 0 === e[0].length;
    }

    function g() {
      if (c && h && (k("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + b.DefaultDelimiter + "'"), h = !1), m.skipEmptyLines) for (var e = 0; e < c.data.length; e++) {
        y(c.data[e]) && c.data.splice(e--, 1);
      }
      return _() && function () {
        if (!c) return;

        function e(e, t) {
          M(m.transformHeader) && (e = m.transformHeader(e, t)), l.push(e);
        }

        if (Array.isArray(c.data[0])) {
          for (var t = 0; _() && t < c.data.length; t++) {
            c.data[t].forEach(e);
          }

          c.data.splice(0, 1);
        } else c.data.forEach(e);
      }(), function () {
        if (!c || !m.header && !m.dynamicTyping && !m.transform) return c;

        function e(e, t) {
          var i,
              r = m.header ? {} : [];

          for (i = 0; i < e.length; i++) {
            var n = i,
                s = e[i];
            m.header && (n = i >= l.length ? "__parsed_extra" : l[i]), m.transform && (s = m.transform(s, n)), s = v(n, s), "__parsed_extra" === n ? (r[n] = r[n] || [], r[n].push(s)) : r[n] = s;
          }

          return m.header && (i > l.length ? k("FieldMismatch", "TooManyFields", "Too many fields: expected " + l.length + " fields but parsed " + i, f + t) : i < l.length && k("FieldMismatch", "TooFewFields", "Too few fields: expected " + l.length + " fields but parsed " + i, f + t)), r;
        }

        var t = 1;
        !c.data.length || Array.isArray(c.data[0]) ? (c.data = c.data.map(e), t = c.data.length) : c.data = e(c.data, 0);
        m.header && c.meta && (c.meta.fields = l);
        return f += t, c;
      }();
    }

    function _() {
      return m.header && 0 === l.length;
    }

    function v(e, t) {
      return i = e, m.dynamicTypingFunction && void 0 === m.dynamicTyping[i] && (m.dynamicTyping[i] = m.dynamicTypingFunction(i)), !0 === (m.dynamicTyping[i] || m.dynamicTyping) ? "true" === t || "TRUE" === t || "false" !== t && "FALSE" !== t && (function (e) {
        if (s.test(e)) {
          var t = parseFloat(e);
          if (n < t && t < r) return !0;
        }

        return !1;
      }(t) ? parseFloat(t) : u.test(t) ? new Date(t) : "" === t ? null : t) : t;
      var i;
    }

    function k(e, t, i, r) {
      var n = {
        type: e,
        code: t,
        message: i
      };
      void 0 !== r && (n.row = r), c.errors.push(n);
    }

    this.parse = function (e, t, i) {
      var r = m.quoteChar || '"';
      if (m.newline || (m.newline = function (e, t) {
        e = e.substring(0, 1048576);
        var i = new RegExp(j(t) + "([^]*?)" + j(t), "gm"),
            r = (e = e.replace(i, "")).split("\r"),
            n = e.split("\n"),
            s = 1 < n.length && n[0].length < r[0].length;
        if (1 === r.length || s) return "\n";

        for (var a = 0, o = 0; o < r.length; o++) {
          "\n" === r[o][0] && a++;
        }

        return a >= r.length / 2 ? "\r\n" : "\r";
      }(e, r)), h = !1, m.delimiter) M(m.delimiter) && (m.delimiter = m.delimiter(e), c.meta.delimiter = m.delimiter);else {
        var n = function (e, t, i, r, n) {
          var s, a, o, h;
          n = n || [",", "\t", "|", ";", b.RECORD_SEP, b.UNIT_SEP];

          for (var u = 0; u < n.length; u++) {
            var f = n[u],
                d = 0,
                l = 0,
                c = 0;
            o = void 0;

            for (var p = new E({
              comments: r,
              delimiter: f,
              newline: t,
              preview: 10
            }).parse(e), g = 0; g < p.data.length; g++) {
              if (i && y(p.data[g])) c++;else {
                var _ = p.data[g].length;
                l += _, void 0 !== o ? 0 < _ && (d += Math.abs(_ - o), o = _) : o = _;
              }
            }

            0 < p.data.length && (l /= p.data.length - c), (void 0 === a || d <= a) && (void 0 === h || h < l) && 1.99 < l && (a = d, s = f, h = l);
          }

          return {
            successful: !!(m.delimiter = s),
            bestDelimiter: s
          };
        }(e, m.newline, m.skipEmptyLines, m.comments, m.delimitersToGuess);

        n.successful ? m.delimiter = n.bestDelimiter : (h = !0, m.delimiter = b.DefaultDelimiter), c.meta.delimiter = m.delimiter;
      }
      var s = w(m);
      return m.preview && m.header && s.preview++, a = e, o = new E(s), c = o.parse(a, t, i), g(), d ? {
        meta: {
          paused: !0
        }
      } : c || {
        meta: {
          paused: !1
        }
      };
    }, this.paused = function () {
      return d;
    }, this.pause = function () {
      d = !0, o.abort(), a = M(m.chunk) ? "" : a.substring(o.getCharIndex());
    }, this.resume = function () {
      t.streamer._halted ? (d = !1, t.streamer.parseChunk(a, !0)) : setTimeout(t.resume, 3);
    }, this.aborted = function () {
      return e;
    }, this.abort = function () {
      e = !0, o.abort(), c.meta.aborted = !0, M(m.complete) && m.complete(c), a = "";
    };
  }

  function j(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function E(e) {
    var S,
        O = (e = e || {}).delimiter,
        x = e.newline,
        I = e.comments,
        T = e.step,
        D = e.preview,
        A = e.fastMode,
        L = S = void 0 === e.quoteChar ? '"' : e.quoteChar;
    if (void 0 !== e.escapeChar && (L = e.escapeChar), ("string" != typeof O || -1 < b.BAD_DELIMITERS.indexOf(O)) && (O = ","), I === O) throw new Error("Comment character same as delimiter");
    !0 === I ? I = "#" : ("string" != typeof I || -1 < b.BAD_DELIMITERS.indexOf(I)) && (I = !1), "\n" !== x && "\r" !== x && "\r\n" !== x && (x = "\n");
    var F = 0,
        z = !1;
    this.parse = function (r, t, i) {
      if ("string" != typeof r) throw new Error("Input must be a string");
      var n = r.length,
          e = O.length,
          s = x.length,
          a = I.length,
          o = M(T),
          h = [],
          u = [],
          f = [],
          d = F = 0;
      if (!r) return C();

      if (A || !1 !== A && -1 === r.indexOf(S)) {
        for (var l = r.split(x), c = 0; c < l.length; c++) {
          if (f = l[c], F += f.length, c !== l.length - 1) F += x.length;else if (i) return C();

          if (!I || f.substring(0, a) !== I) {
            if (o) {
              if (h = [], k(f.split(O)), R(), z) return C();
            } else k(f.split(O));

            if (D && D <= c) return h = h.slice(0, D), C(!0);
          }
        }

        return C();
      }

      for (var p = r.indexOf(O, F), g = r.indexOf(x, F), _ = new RegExp(j(L) + j(S), "g"), m = r.indexOf(S, F);;) {
        if (r[F] !== S) {
          if (I && 0 === f.length && r.substring(F, F + a) === I) {
            if (-1 === g) return C();
            F = g + s, g = r.indexOf(x, F), p = r.indexOf(O, F);
          } else if (-1 !== p && (p < g || -1 === g)) f.push(r.substring(F, p)), F = p + e, p = r.indexOf(O, F);else {
            if (-1 === g) break;
            if (f.push(r.substring(F, g)), w(g + s), o && (R(), z)) return C();
            if (D && h.length >= D) return C(!0);
          }
        } else for (m = F, F++;;) {
          if (-1 === (m = r.indexOf(S, m + 1))) return i || u.push({
            type: "Quotes",
            code: "MissingQuotes",
            message: "Quoted field unterminated",
            row: h.length,
            index: F
          }), E();
          if (m === n - 1) return E(r.substring(F, m).replace(_, S));

          if (S !== L || r[m + 1] !== L) {
            if (S === L || 0 === m || r[m - 1] !== L) {
              -1 !== p && p < m + 1 && (p = r.indexOf(O, m + 1)), -1 !== g && g < m + 1 && (g = r.indexOf(x, m + 1));
              var y = b(-1 === g ? p : Math.min(p, g));

              if (r[m + 1 + y] === O) {
                f.push(r.substring(F, m).replace(_, S)), r[F = m + 1 + y + e] !== S && (m = r.indexOf(S, F)), p = r.indexOf(O, F), g = r.indexOf(x, F);
                break;
              }

              var v = b(g);

              if (r.substring(m + 1 + v, m + 1 + v + s) === x) {
                if (f.push(r.substring(F, m).replace(_, S)), w(m + 1 + v + s), p = r.indexOf(O, F), m = r.indexOf(S, F), o && (R(), z)) return C();
                if (D && h.length >= D) return C(!0);
                break;
              }

              u.push({
                type: "Quotes",
                code: "InvalidQuotes",
                message: "Trailing quote on quoted field is malformed",
                row: h.length,
                index: F
              }), m++;
            }
          } else m++;
        }
      }

      return E();

      function k(e) {
        h.push(e), d = F;
      }

      function b(e) {
        var t = 0;

        if (-1 !== e) {
          var i = r.substring(m + 1, e);
          i && "" === i.trim() && (t = i.length);
        }

        return t;
      }

      function E(e) {
        return i || (void 0 === e && (e = r.substring(F)), f.push(e), F = n, k(f), o && R()), C();
      }

      function w(e) {
        F = e, k(f), f = [], g = r.indexOf(x, F);
      }

      function C(e) {
        return {
          data: h,
          errors: u,
          meta: {
            delimiter: O,
            linebreak: x,
            aborted: z,
            truncated: !!e,
            cursor: d + (t || 0)
          }
        };
      }

      function R() {
        T(C()), h = [], u = [];
      }
    }, this.abort = function () {
      z = !0;
    }, this.getCharIndex = function () {
      return F;
    };
  }

  function _(e) {
    var t = e.data,
        i = a[t.workerId],
        r = !1;
    if (t.error) i.userError(t.error, t.file);else if (t.results && t.results.data) {
      var n = {
        abort: function abort() {
          r = !0, m(t.workerId, {
            data: [],
            errors: [],
            meta: {
              aborted: !0
            }
          });
        },
        pause: y,
        resume: y
      };

      if (M(i.userStep)) {
        for (var s = 0; s < t.results.data.length && (i.userStep({
          data: t.results.data[s],
          errors: t.results.errors,
          meta: t.results.meta
        }, n), !r); s++) {
          ;
        }

        delete t.results;
      } else M(i.userChunk) && (i.userChunk(t.results, n, t.file), delete t.results);
    }
    t.finished && !r && m(t.workerId, t.results);
  }

  function m(e, t) {
    var i = a[e];
    M(i.userComplete) && i.userComplete(t), i.terminate(), delete a[e];
  }

  function y() {
    throw new Error("Not implemented.");
  }

  function w(e) {
    if ("object" != typeof e || null === e) return e;
    var t = Array.isArray(e) ? [] : {};

    for (var i in e) {
      t[i] = w(e[i]);
    }

    return t;
  }

  function v(e, t) {
    return function () {
      e.apply(t, arguments);
    };
  }

  function M(e) {
    return "function" == typeof e;
  }

  return o && (f.onmessage = function (e) {
    var t = e.data;
    void 0 === b.WORKER_ID && t && (b.WORKER_ID = t.workerId);
    if ("string" == typeof t.input) f.postMessage({
      workerId: b.WORKER_ID,
      results: b.parse(t.input, t.config),
      finished: !0
    });else if (f.File && t.input instanceof File || t.input instanceof Object) {
      var i = b.parse(t.input, t.config);
      i && f.postMessage({
        workerId: b.WORKER_ID,
        results: i,
        finished: !0
      });
    }
  }), (l.prototype = Object.create(u.prototype)).constructor = l, (c.prototype = Object.create(u.prototype)).constructor = c, (p.prototype = Object.create(p.prototype)).constructor = p, (g.prototype = Object.create(u.prototype)).constructor = g, b;
});

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

var _useBlocklyWorkspace2 = _interopRequireDefault(__webpack_require__(48877));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var propTypes = {
  initialXml: _propTypes.default.string,
  toolboxConfiguration: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  workspaceConfiguration: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  className: _propTypes.default.string,
  onWorkspaceChange: _propTypes.default.func,
  onImportXmlError: _propTypes.default.func,
  onXmlChange: _propTypes.default.func,
  onInject: _propTypes.default.func,
  onDispose: _propTypes.default.func
};
var defaultProps = {
  initialXml: null,
  toolboxConfiguration: null,
  workspaceConfiguration: null,
  className: null,
  onWorkspaceChange: null,
  onImportXmlError: null,
  onXmlChange: null,
  onInject: null,
  onDispose: null
};

function BlocklyWorkspace(_ref) {
  var initialXml = _ref.initialXml,
      toolboxConfiguration = _ref.toolboxConfiguration,
      workspaceConfiguration = _ref.workspaceConfiguration,
      className = _ref.className,
      onWorkspaceChange = _ref.onWorkspaceChange,
      onXmlChange = _ref.onXmlChange,
      onImportXmlError = _ref.onImportXmlError,
      onInject = _ref.onInject,
      onDispose = _ref.onDispose;

  var editorDiv = _react.default.useRef(null);

  var _useBlocklyWorkspace = (0, _useBlocklyWorkspace2.default)({
    ref: editorDiv,
    initialXml: initialXml,
    toolboxConfiguration: toolboxConfiguration,
    workspaceConfiguration: workspaceConfiguration,
    onWorkspaceChange: onWorkspaceChange,
    onImportXmlError: onImportXmlError,
    onInject: onInject,
    onDispose: onDispose
  }),
      xml = _useBlocklyWorkspace.xml;

  var onXmlChangeRef = _react.default.useRef(onXmlChange);

  _react.default.useEffect(function () {
    onXmlChangeRef.current = onXmlChange;
  }, [onXmlChange]);

  _react.default.useEffect(function () {
    if (onXmlChangeRef.current && xml) {
      onXmlChangeRef.current(xml);
    }
  }, [xml]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: className,
    ref: editorDiv
  });
}

BlocklyWorkspace.propTypes = propTypes;
BlocklyWorkspace.defaultProps = defaultProps;
var _default = BlocklyWorkspace;
exports.default = _default;

/***/ }),

/***/ 16995:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = debounce;

function debounce(func, wait) {
  var timeout = null;
  var later = null;

  var debouncedFunction = function debouncedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    later = function later() {
      timeout = null;
      func.apply(void 0, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };

  var cancel = function cancel() {
    if (timeout !== null) {
      clearTimeout(timeout);
      later();
    }
  };

  return [debouncedFunction, cancel];
}

/***/ }),

/***/ 691:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
Object.defineProperty(exports, "JP", ({
  enumerable: true,
  get: function get() {
    return _useBlocklyWorkspace.default;
  }
}));
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _BlocklyWorkspace.default;
  }
});

var _useBlocklyWorkspace = _interopRequireDefault(__webpack_require__(48877));

var _BlocklyWorkspace = _interopRequireDefault(__webpack_require__(5495));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

/***/ }),

/***/ 48877:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(67294));

var _blockly = _interopRequireDefault(__webpack_require__(74640));

var _debounce3 = _interopRequireDefault(__webpack_require__(16995));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function importFromXml(xml, workspace, onImportXmlError) {
  try {
    _blockly.default.Xml.domToWorkspace(_blockly.default.Xml.textToDom(xml), workspace);

    return true;
  } catch (e) {
    if (onImportXmlError) {
      onImportXmlError(e);
    }

    return false;
  }
}

var useBlocklyWorkspace = function useBlocklyWorkspace(_ref) {
  var ref = _ref.ref,
      initialXml = _ref.initialXml,
      toolboxConfiguration = _ref.toolboxConfiguration,
      workspaceConfiguration = _ref.workspaceConfiguration,
      onWorkspaceChange = _ref.onWorkspaceChange,
      onImportXmlError = _ref.onImportXmlError,
      onInject = _ref.onInject,
      onDispose = _ref.onDispose;

  var _React$useState = _react.default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      workspace = _React$useState2[0],
      setWorkspace = _React$useState2[1];

  var _React$useState3 = _react.default.useState(initialXml),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      xml = _React$useState4[0],
      setXml = _React$useState4[1];

  var _React$useState5 = _react.default.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      didInitialImport = _React$useState6[0],
      setDidInitialImport = _React$useState6[1];

  var _React$useState7 = _react.default.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      didHandleNewWorkspace = _React$useState8[0],
      setDidHandleNewWorkspace = _React$useState8[1]; // we explicitly don't want to recreate the workspace when the configuration changes
  // so, we'll keep it in a ref and update as necessary in an effect hook


  var workspaceConfigurationRef = _react.default.useRef(workspaceConfiguration);

  _react.default.useEffect(function () {
    workspaceConfigurationRef.current = workspaceConfiguration;
  }, [workspaceConfiguration]);

  var toolboxConfigurationRef = _react.default.useRef(toolboxConfiguration);

  _react.default.useEffect(function () {
    toolboxConfigurationRef.current = toolboxConfiguration;

    if (toolboxConfiguration && workspace) {
      workspace.updateToolbox(toolboxConfiguration);
    }
  }, [toolboxConfiguration, workspace]);

  var onInjectRef = _react.default.useRef(onInject);

  var onDisposeRef = _react.default.useRef(onDispose);

  _react.default.useEffect(function () {
    onInjectRef.current = onInject;
  }, [onInject]);

  _react.default.useEffect(function () {
    onDisposeRef.current = onDispose;
  }, [onDispose]);

  var handleWorkspaceChanged = _react.default.useCallback(function (newWorkspace) {
    if (onWorkspaceChange) {
      onWorkspaceChange(newWorkspace);
    }
  }, [onWorkspaceChange]); // Workspace creation


  _react.default.useEffect(function () {
    var newWorkspace = _blockly.default.inject(ref.current, _objectSpread(_objectSpread({}, workspaceConfigurationRef.current), {}, {
      toolbox: toolboxConfigurationRef.current
    }));

    setWorkspace(newWorkspace);
    setDidInitialImport(false); // force a re-import if we recreate the workspace

    setDidHandleNewWorkspace(false); // Singal that a workspace change event needs to be sent.

    if (onInjectRef.current) {
      onInjectRef.current(newWorkspace);
    }

    var onDisposeFunction = onDisposeRef.current; // Dispose of the workspace when our div ref goes away (Equivalent to didComponentUnmount)

    return function () {
      newWorkspace.dispose();

      if (onDisposeFunction) {
        onDisposeFunction(newWorkspace);
      }
    };
  }, [ref]); // Send a workspace change event when the workspace is created


  _react.default.useEffect(function () {
    if (workspace && !didHandleNewWorkspace) {
      handleWorkspaceChanged(workspace);
    }
  }, [handleWorkspaceChanged, didHandleNewWorkspace, workspace]); // Workspace change listener


  _react.default.useEffect(function () {
    if (workspace == null) {
      return undefined;
    }

    var listener = function listener() {
      handleWorkspaceChanged(workspace);
    };

    workspace.addChangeListener(listener);
    return function () {
      workspace.removeChangeListener(listener);
    };
  }, [workspace, handleWorkspaceChanged]); // xmlDidChange callback


  _react.default.useEffect(function () {
    if (workspace == null) {
      return undefined;
    }

    var _debounce = (0, _debounce3.default)(function () {
      var newXml = _blockly.default.Xml.domToText(_blockly.default.Xml.workspaceToDom(workspace));

      if (newXml === xml) {
        return;
      }

      setXml(newXml);
    }, 200),
        _debounce2 = _slicedToArray(_debounce, 2),
        callback = _debounce2[0],
        cancel = _debounce2[1];

    workspace.addChangeListener(callback);
    return function () {
      workspace.removeChangeListener(callback);
      cancel();
    };
  }, [workspace, xml]); // Initial Xml Changes


  _react.default.useEffect(function () {
    if (xml && workspace && !didInitialImport) {
      var success = importFromXml(xml, workspace, onImportXmlError);

      if (!success) {
        setXml(null);
      }

      setDidInitialImport(true);
    }
  }, [xml, workspace, didInitialImport, onImportXmlError]);

  return {
    workspace: workspace,
    xml: xml
  };
};

var _default = useBlocklyWorkspace;
exports.default = _default;

/***/ }),

/***/ 87709:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDebouncedCallback; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

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
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.leading=false]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {number} [options.maxWait]
 *  Specify invoking on the trailing edge of the timeout.
 * @param {boolean} [options.trailing=true]
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

  var lastCallTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var lastInvokeTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var timerId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var lastArgs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  var lastThis = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var result = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var funcRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(func);
  var mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []); // You may have a question, why we have so many code under the useMemo definition.
  //
  // This was made as we want to escape from useCallback hell and
  // not to initialize a number of functions each time useDebouncedCallback is called.
  //
  // It means that we have less garbage for our GC calls which improves performance.
  // Also, it makes this library smaller.
  //
  // And the last reason, that the code without lots of useCallback with deps is easier to read.
  // You have only one place for that.

  var debounced = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var invokeFunc = function invokeFunc(time) {
      var args = lastArgs.current;
      var thisArg = lastThis.current;
      lastArgs.current = lastThis.current = null;
      lastInvokeTime.current = time;
      return result.current = funcRef.current.apply(thisArg, args);
    };

    var startTimer = function startTimer(pendingFunc, wait) {
      if (useRAF) cancelAnimationFrame(timerId.current);
      timerId.current = useRAF ? requestAnimationFrame(pendingFunc) : setTimeout(pendingFunc, wait);
    };

    var shouldInvoke = function shouldInvoke(time) {
      if (!mounted.current) return false;
      var timeSinceLastCall = time - lastCallTime.current;
      var timeSinceLastInvoke = time - lastInvokeTime.current; // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.

      return !lastCallTime.current || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    };

    var trailingEdge = function trailingEdge(time) {
      timerId.current = null; // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.

      if (trailing && lastArgs.current) {
        return invokeFunc(time);
      }

      lastArgs.current = lastThis.current = null;
      return result.current;
    };

    var timerExpired = function timerExpired() {
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
    };

    var func = function func() {
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
    };

    func.cancel = function () {
      if (timerId.current) {
        useRAF ? cancelAnimationFrame(timerId.current) : clearTimeout(timerId.current);
      }

      lastInvokeTime.current = 0;
      lastArgs.current = lastCallTime.current = lastThis.current = timerId.current = null;
    };

    func.isPending = function () {
      return !!timerId.current;
    };

    func.flush = function () {
      return !timerId.current ? result.current : trailingEdge(Date.now());
    };

    return func;
  }, [leading, maxing, wait, maxWait, trailing, useRAF]);
  return debounced;
}

/***/ }),

/***/ 10501:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ 50573:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ 22128:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ 32738:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 58984:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _construct; }
});

// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
var setPrototypeOf = __webpack_require__(83416);
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/construct.js


function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0,setPrototypeOf/* default */.Z)(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ 25008:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ 66475:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
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

/***/ }),

/***/ 44005:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _get; }
});

// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(12426);
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/superPropBase.js

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = (0,getPrototypeOf/* default */.Z)(object);
    if (object === null) break;
  }

  return object;
}
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/get.js

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

/***/ 12426:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 72094:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83416);

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
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(subClass, superClass);
}

/***/ }),

/***/ 42310:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ 16632:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ 44524:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75576);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22128);


function _possibleConstructorReturn(self, call) {
  if (call && (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__(call) === "object" || typeof call === "function")) {
    return call;
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(self);
}

/***/ }),

/***/ 83416:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ 15892:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _slicedToArray; }
});

// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__(50573);
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(47033);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__(16632);
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return (0,arrayWithHoles/* default */.Z)(arr) || _iterableToArrayLimit(arr, i) || (0,unsupportedIterableToArray/* default */.Z)(arr, i) || (0,nonIterableRest/* default */.Z)();
}

/***/ }),

/***/ 8452:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _toConsumableArray; }
});

// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(10501);
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,arrayLikeToArray/* default */.Z)(arr);
}
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(42310);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(47033);
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || (0,iterableToArray/* default */.Z)(arr) || (0,unsupportedIterableToArray/* default */.Z)(arr) || _nonIterableSpread();
}

/***/ }),

/***/ 47033:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10501);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(o, minLen);
}

/***/ }),

/***/ 9502:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _wrapNativeSuper; }
});

// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(12426);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
var setPrototypeOf = __webpack_require__(83416);
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/construct.js + 1 modules
var construct = __webpack_require__(58984);
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return (0,construct/* default */.Z)(Class, arguments, (0,getPrototypeOf/* default */.Z)(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return (0,setPrototypeOf/* default */.Z)(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

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

/***/ 70648:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(51694);
var classofRaw = __webpack_require__(84326);
var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ 86135:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(57593);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(79114);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
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

/***/ 71246:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(70648);
var Iterators = __webpack_require__(97497);
var wellKnownSymbol = __webpack_require__(5112);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 60490:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(35005);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 97659:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);
var Iterators = __webpack_require__(97497);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


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

/***/ 20408:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(19670);
var isArrayIteratorMethod = __webpack_require__(97659);
var toLength = __webpack_require__(17466);
var bind = __webpack_require__(49974);
var getIteratorMethod = __webpack_require__(71246);
var iteratorClose = __webpack_require__(99212);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ 99212:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(19670);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ 97497:
/***/ (function(module) {

module.exports = {};


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

/***/ 51694:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


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

/***/ 84944:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(82109);
var flattenIntoArray = __webpack_require__(6790);
var toObject = __webpack_require__(47908);
var toLength = __webpack_require__(17466);
var toInteger = __webpack_require__(99958);
var arraySpeciesCreate = __webpack_require__(65417);

// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
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

/***/ 38559:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(82109);
var iterate = __webpack_require__(20408);
var createProperty = __webpack_require__(86135);

// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
$({ target: 'Object', stat: true }, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, { AS_ENTRIES: true });
    return obj;
  }
});


/***/ }),

/***/ 79973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i_": function() { return /* binding */ checkProgram; },
  "IJ": function() { return /* binding */ compileProgram; },
  "EB": function() { return /* binding */ toIdentifier; },
  "vf": function() { return /* binding */ toMemberExpression; }
});

// UNUSED EXPORTS: getServiceFromRole

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
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
  id: "log",
  args: ["number"],
  prompt: "not used",
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
}, {
  id: "start",
  args: [],
  prompt: "start block",
  context: "command"
}];
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdutils.ts
var jdutils = __webpack_require__(30055);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
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
  }; // process start blocks

  prog.handlers.forEach(startBlock); // remove if-then-else

  newProgram.handlers = prog.handlers.map(function (h) {
    return {
      commands: removeIfThenElse(h),
      errors: h === null || h === void 0 ? void 0 : h.errors
    };
  });
  return newProgram;
}

function checkCall(cmd, id) {
  if (cmd.type === "cmd") {
    var callee = cmd.command.callee;

    if (callee.type === "Identifier") {
      var cid = callee.name;
      return id === cid;
    }
  }

  return undefined;
}

function startBlock(handler) {
  if (handler.commands.length && checkCall(handler.commands[0], "start")) {
    handler.commands.shift();
    handler.commands.push({
      type: "cmd",
      command: {
        type: "CallExpression",
        callee: toIdentifier("halt"),
        arguments: []
      }
    });
  }
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
      var def = (0,spec/* serviceSpecificationFromName */.kB)(shortId.serviceShortId);
      (0,utils/* assert */.hu)(!!def, "service " + shortId.serviceShortId + " not resolved");
      return def;
    } else {
      var service = (0,spec/* serviceSpecificationFromName */.kB)(role);
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

/***/ }),

/***/ 59448:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UM": function() { return /* binding */ VM_WATCH_CHANGE; },
/* harmony export */   "Di": function() { return /* binding */ VM_BREAKPOINT; },
/* harmony export */   "ai": function() { return /* binding */ VM_COMMAND_FAILED; },
/* harmony export */   "XD": function() { return /* binding */ VM_ROLE_MISSING; },
/* harmony export */   "b4": function() { return /* binding */ VM_GLOBAL_CHANGE; },
/* harmony export */   "c2": function() { return /* binding */ VM_INTERNAL_ERROR; },
/* harmony export */   "aG": function() { return /* binding */ VM_LOG_ENTRY; }
/* harmony export */ });
/* unused harmony export VM_GLOBAL_TYPE_MISMATCH */
var VM_WATCH_CHANGE = "vmWatchChange";
var VM_BREAKPOINT = "vmBreakpoint";
var VM_COMMAND_FAILED = "vmCommandFailed";
var VM_ROLE_MISSING = "vmRoleMissing";
var VM_GLOBAL_CHANGE = "vmVariableChange";
var VM_GLOBAL_TYPE_MISMATCH = "vmDynamicTypeError";
var VM_INTERNAL_ERROR = "vmInternalError";
var VM_LOG_ENTRY = "vmLogEntry";

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

/***/ 85379:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ BlockProvider; },
  "C": function() { return /* binding */ blockly_BlockContext; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(90293);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(42656);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/blockly/index.js
var blockly = __webpack_require__(74640);
var blockly_default = /*#__PURE__*/__webpack_require__.n(blockly);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(75167);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(53719);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(25342);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(85413);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/eventsource.ts
var eventsource = __webpack_require__(45484);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
;// CONCATENATED MODULE: ./jacdac-ts/src/servers/rolemanager.ts





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





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

        _this2._roles.push(_objectSpread({}, newRole));
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

    for (var _iterator = _createForOfIteratorHelperLoose(supportedNewRoles), _step; !(_step = _iterator()).done;) {
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


;// CONCATENATED MODULE: ./src/components/hooks/useRoleManager.ts



function useRoleManager() {
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var roleManager = (0,react.useMemo)(function () {
    return new RoleManager(bus);
  }, [bus]);
  return roleManager;
}
// EXTERNAL MODULE: ./src/components/useLocalStorage.ts
var useLocalStorage = __webpack_require__(86581);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(21258);
// EXTERNAL MODULE: ./src/components/blockly/dsl/dsl.ts
var dsl_dsl = __webpack_require__(94113);
// EXTERNAL MODULE: ./src/components/blockly/fields/ReactField.tsx
var ReactField = __webpack_require__(77576);
;// CONCATENATED MODULE: ./src/components/blockly/jsongenerator.ts
function jsongenerator_createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = jsongenerator_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function jsongenerator_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return jsongenerator_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return jsongenerator_arrayLikeToArray(o, minLen); }

function jsongenerator_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






function domToJSON(workspace, dsls) {
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

    for (var _iterator = jsongenerator_createForOfIteratorHelperLoose(xml.getAttributeNames()), _step; !(_step = _iterator()).done;) {
      var name = _step.value;
      var v = xml.getAttribute(name);
      j[name.toLowerCase()] = v;
    }

    for (var _iterator2 = jsongenerator_createForOfIteratorHelperLoose(xml.childNodes), _step2; !(_step2 = _iterator2()).done;) {
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
      // custom field can just return the value
      if (field instanceof ReactField/* default */.ZP) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var value = field.value;
        return {
          value: value
        };
      } else {
        var container = blockly_default().utils.xml.createElement("field");
        var fieldXml = field.toXml(container);
        return xmlToJSON(fieldXml);
      }
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
    var blockToJSONHidden = function blockToJSONHidden(block) {
      var _builtins$block$type;

      // skip disabled blocks
      if (!(block !== null && block !== void 0 && block.isEnabled())) return undefined; // skip over insertion markers.

      if (block.isInsertionMarker()) {
        var child = block.getChildren(false)[0];
        if (child) return blockToJSON(child);else return undefined;
      }

      var type = block.type; // allow DSL to handle conversion

      var value = (_builtins$block$type = builtins[block.type]) === null || _builtins$block$type === void 0 ? void 0 : _builtins$block$type.call(builtins, block);

      if (value === undefined) {
        var _dsl$blockToValue;

        var dsl = (0,dsl_dsl/* resolveDsl */.u)(dsls, type);
        value = dsl === null || dsl === void 0 ? void 0 : (_dsl$blockToValue = dsl.blockToValue) === null || _dsl$blockToValue === void 0 ? void 0 : _dsl$blockToValue.call(dsl, block);
      }

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
        next: blockToJSONHidden(block.getNextBlock())
      };
      clean(element);
      return element;
    };

    var top = blockToJSONHidden(block);

    if (top) {
      flattenNext(top);
      clean(top);
    }

    return top;
  };

  try {
    var variables = blockly_default().Variables.allUsedVarModels(workspace).sort(function (l, r) {
      return l.name.localeCompare(r.name);
    }); // stable sort name

    var blocks = workspace.getTopBlocks(true);
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
// EXTERNAL MODULE: ./src/components/blockly/toolbox.ts
var toolbox = __webpack_require__(16582);
;// CONCATENATED MODULE: ./src/components/blockly/useBlocklyEvents.ts


// do not use block context
function useBlocklyEvents(workspace) {
  var handleChange = function handleChange(event) {
    var type = event.type;

    switch (type) {
      case (blockly_default()).Events.BLOCK_CHANGE:
        {
          var _twinField$emitChange;

          var change = event;
          var block = workspace.getBlockById(change.blockId); // notify twin that the value changed

          var twinInput = block.inputList[1];
          var twinField = twinInput === null || twinInput === void 0 ? void 0 : twinInput.fieldRow.find(function (f) {
            return f.name === "twin";
          });
          twinField === null || twinField === void 0 ? void 0 : (_twinField$emitChange = twinField.emitChange) === null || _twinField$emitChange === void 0 ? void 0 : _twinField$emitChange.call(twinField);
          break;
        }
    }
  }; // register hook


  (0,react.useEffect)(function () {
    workspace === null || workspace === void 0 ? void 0 : workspace.addChangeListener(handleChange);
    return function () {
      return workspace === null || workspace === void 0 ? void 0 : workspace.removeChangeListener(handleChange);
    };
  }, [workspace]);
}
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(32738);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/createClass.js
var esm_createClass = __webpack_require__(25008);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/get.js + 1 modules
var get = __webpack_require__(44005);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(72094);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(44524);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(12426);
// EXTERNAL MODULE: ./node_modules/blockly/core-browser.js
var core_browser = __webpack_require__(90888);
;// CONCATENATED MODULE: ./node_modules/@blockly/field-slider/src/field_slider.js







function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = field_slider_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function field_slider_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return field_slider_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return field_slider_arrayLikeToArray(o, minLen); }

function field_slider_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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


  (0,esm_createClass/* default */.Z)(FieldSlider, [{
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

  (0,esm_createClass/* default */.Z)(DisableTopBlocks, [{
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
;// CONCATENATED MODULE: ./src/components/blockly/useBlocklyPlugins.ts




 // do not use block context

function useBlocklyPlugins(workspace) {
  //plugins
  (0,react.useEffect)(function () {
    if (!workspace) return; // context menu stuff

    if (blockly.ContextMenuRegistry.registry.getItem("blockInline")) blockly.ContextMenuRegistry.registry.unregister("blockInline");
    if (blockly.ContextMenuRegistry.registry.getItem("cleanWorkspace")) blockly.ContextMenuRegistry.registry.unregister("cleanWorkspace"); // Add the disableOrphans event handler. This is not done automatically by
    // the plugin and should be handled by your application.

    workspace.addChangeListener((blockly_default()).Events.disableOrphans); // The plugin must be initialized before it has any effect.

    var disableTopBlocksPlugin = new DisableTopBlocks();
    disableTopBlocksPlugin.init();
    return function () {
      return workspace.removeChangeListener((blockly_default()).Events.disableOrphans);
    };
  }, [workspace]);
}
// EXTERNAL MODULE: ./src/components/hooks/useServices.ts
var useServices = __webpack_require__(2928);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(59355);
// EXTERNAL MODULE: ./src/components/blockly/fields/fields.ts
var fields = __webpack_require__(29434);
;// CONCATENATED MODULE: ./src/components/blockly/useToolbox.ts








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

  (0,fields/* registerFields */.k)(); // re-register blocks with blocklys

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
      var shadow = type !== "variables_get";
      return "<value name=\"" + name + "\"><" + (shadow ? "shadow" : "field") + " type=\"" + type + "\" /></value>";
    }).join("\n") + "</block>";
    delete block.type;
  });
  return cat;
}

function useToolbox(dsls, source) {
  var liveServices = (0,useServices/* default */.Z)({
    specification: true
  });
  var theme = (0,useTheme/* default */.Z)();
  (0,react.useMemo)(function () {
    return loadBlocks(dsls, theme);
  }, [theme, dsls]);
  var dslsCategories = (0,utils/* arrayConcatMany */.ue)(dsls.map(function (dsl) {
    var _dsl$createCategory;

    return dsl === null || dsl === void 0 ? void 0 : (_dsl$createCategory = dsl.createCategory) === null || _dsl$createCategory === void 0 ? void 0 : _dsl$createCategory.call(dsl, {
      theme: theme,
      source: source,
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
  return toolboxConfiguration;
} // do not use block context

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
// EXTERNAL MODULE: ./src/components/blockly/WorkspaceContext.tsx
var WorkspaceContext = __webpack_require__(89801);
;// CONCATENATED MODULE: ./src/components/blockly/BlockContext.tsx















var BlockContext = /*#__PURE__*/(0,react.createContext)({
  dsls: [],
  workspace: undefined,
  workspaceXml: undefined,
  workspaceJSON: undefined,
  toolboxConfiguration: undefined,
  roleManager: undefined,
  setWarnings: function setWarnings() {},
  setWorkspace: function setWorkspace() {},
  setWorkspaceXml: function setWorkspaceXml() {}
});
BlockContext.displayName = "Block";
/* harmony default export */ var blockly_BlockContext = (BlockContext); // eslint-disable-next-line react/prop-types

function BlockProvider(props) {
  var storageKey = props.storageKey,
      dsls = props.dsls,
      children = props.children;

  var _useLocalStorage = (0,useLocalStorage/* default */.Z)(storageKey, toolbox/* NEW_PROJET_XML */.Uz),
      storedXml = _useLocalStorage[0],
      setStoredXml = _useLocalStorage[1];

  var roleManager = useRoleManager();

  var _useState = (0,react.useState)(undefined),
      workspace = _useState[0],
      setWorkspace = _useState[1];

  var _useState2 = (0,react.useState)(storedXml),
      workspaceXml = _useState2[0],
      _setWorkspaceXml = _useState2[1];

  var _useState3 = (0,react.useState)(undefined),
      workspaceJSON = _useState3[0],
      setWorkspaceJSON = _useState3[1];

  var _useState4 = (0,react.useState)([]),
      warnings = _useState4[0],
      setWarnings = _useState4[1];

  var setWorkspaceXml = function setWorkspaceXml(xml) {
    setStoredXml(xml);

    _setWorkspaceXml(xml);
  };

  var toolboxConfiguration = useToolbox(dsls, workspaceJSON);

  var initializeBlockServices = function initializeBlockServices(block) {
    var _block$jacdacServices;

    if ((_block$jacdacServices = block.jacdacServices) !== null && _block$jacdacServices !== void 0 && _block$jacdacServices.initialized) return;
    var services = block.jacdacServices;

    if (!services) {
      var _block$inputList;

      services = block.jacdacServices = new WorkspaceContext/* BlockServices */.LL();
      (_block$inputList = block.inputList) === null || _block$inputList === void 0 ? void 0 : _block$inputList.forEach(function (i) {
        var _i$fieldRow;

        return (_i$fieldRow = i.fieldRow) === null || _i$fieldRow === void 0 ? void 0 : _i$fieldRow.forEach(function (f) {
          var _notifyServicesChange, _ref;

          return (_notifyServicesChange = (_ref = f).notifyServicesChanged) === null || _notifyServicesChange === void 0 ? void 0 : _notifyServicesChange.call(_ref);
        });
      });
    }

    services.initialized = true; // register data transforms

    var _ref2 = (0,toolbox/* resolveBlockDefinition */.Pq)(block.type) || {},
        transformData = _ref2.transformData;

    if (transformData) {
      services.on(constants/* CHANGE */.Ver, /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var _block$nextConnection, _block$childBlocks_;

        var next, nextServices, newData;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (block.isEnabled()) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                next = ((_block$nextConnection = block.nextConnection) === null || _block$nextConnection === void 0 ? void 0 : _block$nextConnection.targetBlock()) || ((_block$childBlocks_ = block.childBlocks_) === null || _block$childBlocks_ === void 0 ? void 0 : _block$childBlocks_[0]);
                nextServices = next === null || next === void 0 ? void 0 : next.jacdacServices;

                if (!nextServices) {
                  _context.next = 15;
                  break;
                }

                _context.prev = 5;
                _context.next = 8;
                return transformData(block, services.data);

              case 8:
                newData = _context.sent;
                nextServices.data = newData;
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](5);
                console.debug(_context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 12]]);
      })));
    }
  };

  var handleBlockChange = function handleBlockChange(blockId) {
    var block = workspace.getBlockById(blockId);
    var services = block === null || block === void 0 ? void 0 : block.jacdacServices;
    services === null || services === void 0 ? void 0 : services.emit(constants/* CHANGE */.Ver);
  };

  var handleWorkspaceEvent = function handleWorkspaceEvent(event) {
    var type = event.type,
        workspaceId = event.workspaceId;
    if (workspaceId !== workspace.id) return; //console.log(`blockly event ${type}`, event)

    if (type === (blockly_default()).Events.FINISHED_LOADING) {
      workspace.getAllBlocks(false).forEach(function (b) {
        return initializeBlockServices(b);
      });
    } else if (type === (blockly_default()).Events.BLOCK_CREATE) {
      var bev = event;
      var block = workspace.getBlockById(bev.blockId);
      initializeBlockServices(block);
    } else if (type === (blockly_default()).Events.BLOCK_MOVE) {
      var cev = event; // eslint-disable-next-line @typescript-eslint/no-explicit-any

      var parentId = cev.newParentId;

      if (parentId) {
        handleBlockChange(parentId);
      } else {
        // unplugged, clear data
        var _block = workspace.getBlockById(cev.blockId);

        var services = _block === null || _block === void 0 ? void 0 : _block.jacdacServices;
        if (services) services.data = undefined;
      }
    } else if (type === (blockly_default()).Events.BLOCK_CHANGE) {
      var _cev = event;
      handleBlockChange(_cev.blockId);
    }
  }; // plugins


  useBlocklyPlugins(workspace);
  useBlocklyEvents(workspace);
  useToolboxButtons(workspace, toolboxConfiguration); // role manager

  (0,react.useEffect)(function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var ws = workspace;
    var services = ws === null || ws === void 0 ? void 0 : ws.jacdacServices;
    if (services) services.roleManager = roleManager;
  }, [workspace, roleManager]);
  (0,react.useEffect)(function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var wws = workspace;

    if (wws && !wws.jacdacServices) {
      wws.jacdacServices = new WorkspaceContext/* WorkspaceServices */.yq();
      wws.jacdacServices.roleManager = roleManager;
    }
  }, [workspace]);
  (0,react.useEffect)(function () {
    if (!workspace || workspace.isDragging()) return;
    var newWorkspaceJSON = domToJSON(workspace, dsls);

    if (JSON.stringify(newWorkspaceJSON) !== JSON.stringify(workspaceJSON)) {
      setWorkspaceJSON(newWorkspaceJSON);
    }
  }, [dsls, workspace, workspaceXml]);
  (0,react.useEffect)(function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var ws = workspace;
    var services = ws === null || ws === void 0 ? void 0 : ws.jacdacServices;
    if (services) services.workspaceJSON = workspaceJSON;
  }, [workspace, workspaceJSON]); // apply errors

  (0,react.useEffect)(function () {
    if (!workspace) return;
    var allErrors = (0,utils/* toMap */.qL)(warnings || [], function (e) {
      return e.sourceId || "";
    }, function (e) {
      return e.message;
    });
    workspace.getAllBlocks(false).forEach(function (b) {
      return b.setWarningText(allErrors[b.id] || null);
    });
  }, [workspace, warnings]); // register block creation

  (0,react.useEffect)(function () {
    var handlers = [handleWorkspaceEvent].concat((0,toConsumableArray/* default */.Z)(dsls.map(function (dsl) {
      var _dsl$createWorkspaceC;

      return (_dsl$createWorkspaceC = dsl.createWorkspaceChangeListener) === null || _dsl$createWorkspaceC === void 0 ? void 0 : _dsl$createWorkspaceC.call(dsl, workspace);
    }))).filter(function (c) {
      return !!c;
    });
    handlers.forEach(function (handler) {
      return workspace === null || workspace === void 0 ? void 0 : workspace.addChangeListener(handler);
    });
    return function () {
      return handlers === null || handlers === void 0 ? void 0 : handlers.forEach(function (handler) {
        return workspace === null || workspace === void 0 ? void 0 : workspace.removeChangeListener(handler);
      });
    };
  }, [workspace, dsls]); // mounting dsts

  (0,react.useEffect)(function () {
    var unmounnts = dsls.map(function (dsl) {
      var _dsl$mount;

      return (_dsl$mount = dsl.mount) === null || _dsl$mount === void 0 ? void 0 : _dsl$mount.call(dsl);
    }).filter(function (u) {
      return !!u;
    });
    return function () {
      return unmounnts.forEach(function (u) {
        return u();
      });
    };
  }, []);
  return /*#__PURE__*/react.createElement(BlockContext.Provider, {
    value: {
      dsls: dsls,
      workspace: workspace,
      workspaceXml: workspaceXml,
      workspaceJSON: workspaceJSON,
      toolboxConfiguration: toolboxConfiguration,
      roleManager: roleManager,
      setWarnings: setWarnings,
      setWorkspace: setWorkspace,
      setWorkspaceXml: setWorkspaceXml
    }
  }, children);
}

/***/ }),

/***/ 9370:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ BlockDiagnostics; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50274);
/* harmony import */ var _BlockContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85379);




function BlockDiagnostics() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_BlockContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .C),
      workspaceXml = _useContext.workspaceXml,
      workspaceJSON = _useContext.workspaceJSON;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    variant: "subtitle1"
  }, "Blockly JSON"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CodeBlock__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: "json",
    downloadName: "test.json",
    downloadText: JSON.stringify(workspaceJSON, null, 2)
  }, JSON.stringify(workspaceJSON, null, 2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    variant: "subtitle1"
  }, "Blockly XML"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CodeBlock__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: "xml"
  }, workspaceXml)));
}

/***/ }),

/***/ 85105:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ BlockEditor; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-blockly/dist/index.js
var dist = __webpack_require__(691);
// EXTERNAL MODULE: ./node_modules/blockly/core-browser.js
var core_browser = __webpack_require__(90888);
var core_browser_default = /*#__PURE__*/__webpack_require__.n(core_browser);
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
// EXTERNAL MODULE: ./node_modules/blockly/index.js
var blockly = __webpack_require__(74640);
var blockly_default = /*#__PURE__*/__webpack_require__.n(blockly);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
;// CONCATENATED MODULE: ./src/components/blockly/BlocklyModalDialogs.tsx





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
    fullWidth: true,
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
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(91350);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(35313);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(21258);
// EXTERNAL MODULE: ./src/components/blockly/BlockContext.tsx + 14 modules
var BlockContext = __webpack_require__(85379);
;// CONCATENATED MODULE: ./src/components/blockly/BlockEditor.tsx












var useStyles = (0,makeStyles/* default */.Z)(function (theme) {
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
function BlockEditor(props) {
  var className = props.className;

  var _useContext = (0,react.useContext)(BlockContext/* default */.C),
      toolboxConfiguration = _useContext.toolboxConfiguration,
      workspaceXml = _useContext.workspaceXml,
      setWorkspace = _useContext.setWorkspace,
      setWorkspaceXml = _useContext.setWorkspaceXml;

  var classes = useStyles();

  var _useContext2 = (0,react.useContext)(DarkModeContext/* default */.Z),
      darkMode = _useContext2.darkMode;

  var _useContext3 = (0,react.useContext)(AppContext/* default */.ZP),
      setError = _useContext3.setError;

  var theme = darkMode === "dark" ? theme_dark_src : src; // ReactBlockly
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
    initialXml: workspaceXml,
    onImportXmlError: function onImportXmlError() {
      return setError("Error loading blocks...");
    }
  }),
      workspace = _ref.workspace,
      xml = _ref.xml; // store ref


  (0,react.useEffect)(function () {
    return setWorkspace(workspace);
  }, [workspace]);
  (0,react.useEffect)(function () {
    return setWorkspaceXml(xml);
  }, [xml]); // resize blockly

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
  }), /*#__PURE__*/react.createElement(BlocklyModalDialogs, null));
}

/***/ }),

/***/ 89801:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yq": function() { return /* binding */ WorkspaceServices; },
/* harmony export */   "LL": function() { return /* binding */ BlockServices; },
/* harmony export */   "W5": function() { return /* binding */ WorkspaceProvider; }
/* harmony export */ });
/* unused harmony export WorkspaceContext */
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53719);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85413);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74640);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45484);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54774);



/* eslint-disable @typescript-eslint/ban-types */





var WorkspaceServices = /*#__PURE__*/function (_JDEventSource) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(WorkspaceServices, _JDEventSource);

  function WorkspaceServices() {
    return _JDEventSource.call(this) || this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(WorkspaceServices, [{
    key: "workspaceJSON",
    get: function get() {
      return this._workspaceJSON;
    },
    set: function set(value) {
      this._workspaceJSON = value;
      this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHANGE */ .Ver);
    }
  }, {
    key: "runner",
    get: function get() {
      return this._runner;
    },
    set: function set(value) {
      if (this._runner !== value) {
        this._runner = value;
        this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHANGE */ .Ver);
      }
    }
  }, {
    key: "roleManager",
    get: function get() {
      return this._roleManager;
    },
    set: function set(value) {
      if (this._roleManager !== value) {
        this._roleManager = value;
        this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHANGE */ .Ver);
      }
    }
  }]);

  return WorkspaceServices;
}(_jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_3__/* .JDEventSource */ .a);
var BlockServices = /*#__PURE__*/function (_JDEventSource2) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(BlockServices, _JDEventSource2);

  function BlockServices() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _JDEventSource2.call.apply(_JDEventSource2, [this].concat(args)) || this;
    _this.cache = {};
    _this.initialized = false;
    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(BlockServices, [{
    key: "data",
    get: function get() {
      return this._data;
    },
    set: function set(value) {
      if (this._data !== value) {
        this._data = value;
        this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHANGE */ .Ver);
      }
    }
  }, {
    key: "chartProps",
    get: function get() {
      return this._chartProps;
    },
    set: function set(value) {
      if (this._chartProps !== value) {
        this._chartProps = value;
        this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHANGE */ .Ver);
      }
    }
  }]);

  return BlockServices;
}(_jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_3__/* .JDEventSource */ .a);
var WorkspaceContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  workspace: undefined,
  workspaceJSON: undefined,
  sourceBlock: undefined,
  flyout: false,
  sourceId: undefined,
  services: undefined,
  role: undefined,
  roleServiceShortId: undefined,
  roleService: undefined,
  runner: undefined
});
WorkspaceContext.displayName = "Workspace";
/* harmony default export */ __webpack_exports__["ZP"] = (WorkspaceContext);
function WorkspaceProvider(props) {
  var field = props.field,
      children = props.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(field === null || field === void 0 ? void 0 : field.getSourceBlock()),
      sourceBlock = _useState[0],
      setSourceBlock = _useState[1];

  var sourceId = sourceBlock === null || sourceBlock === void 0 ? void 0 : sourceBlock.id;
  var workspace = sourceBlock === null || sourceBlock === void 0 ? void 0 : sourceBlock.workspace;
  var services = workspace === null || workspace === void 0 ? void 0 : workspace.jacdacServices;
  var roleManager = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(services, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.roleManager;
  });
  var runner = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(services, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.runner;
  });
  var workspaceJSON = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(services, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.workspaceJSON;
  });

  var resolveRole = function resolveRole() {
    var newSourceBlock = field.getSourceBlock();
    var roleInput = newSourceBlock === null || newSourceBlock === void 0 ? void 0 : newSourceBlock.inputList[0];
    var roleField = roleInput === null || roleInput === void 0 ? void 0 : roleInput.fieldRow.find(function (f) {
      return f.name === "role" && f instanceof blockly__WEBPACK_IMPORTED_MODULE_0__.FieldVariable;
    });

    if (roleField) {
      var _roleField$getVariabl;

      var xml = document.createElement("xml");
      roleField === null || roleField === void 0 ? void 0 : roleField.toXml(xml);
      var newRole = roleField === null || roleField === void 0 ? void 0 : (_roleField$getVariabl = roleField.getVariable()) === null || _roleField$getVariabl === void 0 ? void 0 : _roleField$getVariabl.name;
      return newRole;
    }

    return undefined;
  };

  var resolveRoleService = function resolveRoleService() {
    var newRoleService = role && (roleManager === null || roleManager === void 0 ? void 0 : roleManager.getService(role));
    return newRoleService;
  };

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(resolveRole()),
      role = _useState2[0],
      setRole = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(resolveRoleService()),
      roleService = _useState3[0],
      setRoleService = _useState3[1];

  var roleServiceShortId = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(roleManager, function (_) {
    var _$roles$find;

    return _ === null || _ === void 0 ? void 0 : (_$roles$find = _.roles.find(function (r) {
      return r.role === role;
    })) === null || _$roles$find === void 0 ? void 0 : _$roles$find.serviceShortId;
  });

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!!(sourceBlock !== null && sourceBlock !== void 0 && sourceBlock.isInFlyout)),
      flyout = _useState4[0],
      setFlyout = _useState4[1]; // resolve role


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return field === null || field === void 0 ? void 0 : field.events.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHANGE */ .Ver, function () {
      var newSourceBlock = field.getSourceBlock();
      setSourceBlock(newSourceBlock);
      setRole(resolveRole());
      setFlyout(!!(newSourceBlock !== null && newSourceBlock !== void 0 && newSourceBlock.isInFlyout));
    });
  }, [field, workspace, runner]); // resolve current role service

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setRoleService(resolveRoleService());
    return roleManager === null || roleManager === void 0 ? void 0 : roleManager.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHANGE */ .Ver, function () {
      return setRoleService(resolveRoleService());
    });
  }, [role, runner]);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/react-in-jsx-scope
    react__WEBPACK_IMPORTED_MODULE_1__.createElement(WorkspaceContext.Provider, {
      value: {
        sourceBlock: sourceBlock,
        workspaceJSON: workspaceJSON,
        sourceId: sourceId,
        services: services,
        role: role,
        roleServiceShortId: roleServiceShortId,
        roleService: roleService,
        runner: runner,
        flyout: flyout
      }
    }, children)
  );
}

/***/ }),

/***/ 73595:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74640);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fields_BuiltinDataSetField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69223);
/* harmony import */ var _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12456);
/* harmony import */ var _fields_DataTableField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54741);
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16582);
/* harmony import */ var _workers_data_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5221);






var DATA_ARRANGE_BLOCK = "data_arrange";
var DATA_ADD_VARIABLE_CALLBACK = "data_add_variable";
var DATA_DATAVARIABLE_READ_BLOCK = "data_dataset_read";
var DATA_DATAVARIABLE_WRITE_BLOCK = "data_dataset_write";
var DATA_DATASET_BUILTIN_BLOCK = "data_dataset_builtin";
var DATA_TABLE_TYPE = "DataTable";
var DATA_SHOW_TABLE_BLOCK = "data_show_table";
var colour = "#777";
var dataDsl = {
  id: "dataScience",
  createBlocks: function createBlocks() {
    return [{
      kind: "block",
      type: DATA_SHOW_TABLE_BLOCK,
      message0: "show table %1 %2",
      args0: [{
        type: "input_dummy"
      }, {
        type: _fields_DataTableField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "table"
      }],
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      colour: colour,
      template: "meta",
      inputsInline: false,
      transformData: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .identityTransformData */ .FW
    }, {
      kind: "block",
      type: DATA_ARRANGE_BLOCK,
      message0: "arrange %1 %2",
      colour: colour,
      args0: [{
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
        name: "column"
      }, {
        type: "field_dropdown",
        name: "order",
        options: [["ascending", "ascending"], ["descending", "descending"]]
      }],
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transformData: function transformData(b, data) {
        var column = b.getFieldValue("column");
        var order = b.getFieldValue("order");
        var descending = order === "descending";
        return (0,_workers_data_worker__WEBPACK_IMPORTED_MODULE_5__/* .postTransformData */ .L)({
          type: "arrange",
          column: column,
          descending: descending,
          data: data
        });
      },
      template: "meta"
    }, {
      kind: "block",
      type: DATA_DATASET_BUILTIN_BLOCK,
      message0: "dataset %1",
      args0: [{
        type: _fields_BuiltinDataSetField__WEBPACK_IMPORTED_MODULE_1__/* .default.KEY */ .Z.KEY,
        name: "dateset"
      }],
      inputsInline: false,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      colour: colour,
      template: "meta",
      transformData: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .identityTransformData */ .FW
    }, {
      kind: "block",
      type: DATA_DATAVARIABLE_READ_BLOCK,
      message0: "data variable %1",
      args0: [{
        type: "field_variable",
        name: "data",
        variable: "data",
        variableTypes: [DATA_TABLE_TYPE],
        defaultType: DATA_TABLE_TYPE
      }],
      inputsInline: false,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      colour: colour,
      template: "meta"
    }, // only 1 allowed to prevent cycles
    {
      kind: "block",
      type: DATA_DATAVARIABLE_WRITE_BLOCK,
      message0: "store in data variable %1",
      args0: [{
        type: "field_variable",
        name: "data",
        variable: "data",
        variableTypes: [DATA_TABLE_TYPE],
        defaultType: DATA_TABLE_TYPE
      }],
      inputsInline: false,
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      colour: colour,
      template: "meta"
    }];
  },
  createCategory: function createCategory() {
    return [{
      kind: "category",
      name: "Data",
      colour: colour,
      contents: [{
        kind: "label",
        text: "Data sets"
      }, {
        kind: "block",
        type: DATA_DATASET_BUILTIN_BLOCK
      }, {
        kind: "label",
        text: "Operators"
      }, {
        kind: "block",
        type: DATA_SHOW_TABLE_BLOCK
      }, {
        kind: "block",
        type: DATA_ARRANGE_BLOCK
      }, {
        kind: "label",
        text: "Data variables"
      }, {
        kind: "button",
        text: "Add dataset variable",
        callbackKey: DATA_ADD_VARIABLE_CALLBACK
      }, {
        kind: "block",
        type: DATA_DATAVARIABLE_READ_BLOCK
      }, {
        kind: "block",
        type: DATA_DATAVARIABLE_WRITE_BLOCK
      }]
    }];
  },
  createWorkspaceChangeListener: function createWorkspaceChangeListener() {
    return function (event) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var _ref = event,
          type = _ref.type,
          blockId = _ref.blockId;
      var isBlockChange = type === blockly__WEBPACK_IMPORTED_MODULE_0__.Events.BLOCK_CHANGE || type === blockly__WEBPACK_IMPORTED_MODULE_0__.Events.BLOCK_MOVE;

      if (isBlockChange || type === blockly__WEBPACK_IMPORTED_MODULE_0__.Events.FINISHED_LOADING) {
        var workspace = event.getEventWorkspace_();

        if (isBlockChange) {
          var block = workspace.getBlockById(blockId);
          if ((block === null || block === void 0 ? void 0 : block.type) !== DATA_DATAVARIABLE_WRITE_BLOCK) return; // nothing so see here
        } // collect set variables blocks,
        // and make sure only 1 of them is enabled


        var setvars = workspace.getBlocksByType(DATA_DATAVARIABLE_WRITE_BLOCK, true).filter(function (b) {
          return b.isEnabled();
        }); // mark and sweep variables, leaving one 1 enabled per kind

        var marked = {};

        while (setvars.length) {
          var _block = setvars.shift();

          var variable = _block.getField("data").getVariable();

          if (variable) {
            var name = variable.name;

            if (marked[name]) {
              if (_block.isEnabled()) {
                _block.setEnabled(false);

                _block.unplug(true);
              }
            } else marked[name] = true;
          }
        }
      }
    };
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (dataDsl);

/***/ }),

/***/ 94113:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": function() { return /* binding */ resolveDsl; }
/* harmony export */ });
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16582);

function resolveDsl(dsls, type) {
  var dsl = dsls === null || dsls === void 0 ? void 0 : dsls.find(function (dsl) {
    var _dsl$types;

    return ((_dsl$types = dsl.types) === null || _dsl$types === void 0 ? void 0 : _dsl$types.indexOf(type)) > -1;
  });
  if (dsl) return dsl;

  var _ref = (0,_toolbox__WEBPACK_IMPORTED_MODULE_0__/* .resolveBlockDefinition */ .Pq)(type) || {},
      dslName = _ref.dsl;

  if (!dslName) {
    console.warn("unknown dsl for " + type);
    return undefined;
  }

  return dsls === null || dsls === void 0 ? void 0 : dsls.find(function (dsl) {
    return dsl.id === dslName;
  });
}

/***/ }),

/***/ 76658:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fields_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29434);

var fieldsDsl = {
  id: "fields",
  createBlocks: function createBlocks() {
    return (0,_fields_fields__WEBPACK_IMPORTED_MODULE_0__/* .fieldShadows */ .w)();
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (fieldsDsl);

/***/ }),

/***/ 96958:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
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
    return [{
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
    }];
  },
  blockToValue: function blockToValue(block) {
    var _builtins$block$type;

    return (_builtins$block$type = builtins[block.type]) === null || _builtins$block$type === void 0 ? void 0 : _builtins$block$type.call(builtins, block);
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (shadowDsl);

/***/ }),

/***/ 86947:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79973);
/* harmony import */ var _vm_VMgenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15056);


var variablesDsl = {
  id: "variables",
  types: ["variables_get", "variables_set", "math_change"],
  createCategory: function createCategory() {
    return [{
      kind: "category",
      name: "Variables",
      colour: "%{BKY_VARIABLES_HUE}",
      custom: "VARIABLE"
    }];
  },
  compileExpressionToVM: function compileExpressionToVM(_ref) {
    var block = _ref.block;
    var type = block.type,
        inputs = block.inputs;

    if (type === "variables_get") {
      var variable = inputs[0].fields.var.value;
      var ret = {
        expr: (0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_0__/* .toMemberExpression */ .vf)("$", variable.toString()),
        errors: []
      };
      console.log(ret);
      return ret;
    }

    return undefined;
  },
  compileCommandToVM: function compileCommandToVM(_ref2) {
    var event = _ref2.event,
        block = _ref2.block,
        blockToExpression = _ref2.blockToExpression;
    var type = block.type,
        inputs = block.inputs;

    if (type === "math_change" || type === "variables_set") {
      var _blockToExpression = blockToExpression(event, inputs[0].child),
          expr = _blockToExpression.expr,
          errors = _blockToExpression.errors;

      var variable = inputs[0].fields.var.value;
      return {
        cmd: (0,_vm_VMgenerator__WEBPACK_IMPORTED_MODULE_1__/* .makeVMBase */ .IZ)(block, {
          type: "CallExpression",
          arguments: [(0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_0__/* .toMemberExpression */ .vf)("$", variable.toString()), type === "variables_set" ? expr : {
            type: "BinaryExpression",
            operator: "+",
            left: (0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_0__/* .toMemberExpression */ .vf)("$", variable.toString()),
            right: expr
          }],
          callee: (0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_0__/* .toIdentifier */ .EB)("writeLocal")
        }),
        errors: errors
      };
    }

    return undefined;
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (variablesDsl);

/***/ }),

/***/ 5221:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": function() { return /* binding */ postTransformData; },
/* harmony export */   "N": function() { return /* binding */ postLoadCSV; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tidyjs_tidy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40344);
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77847);
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_2__);



/* eslint-disable @typescript-eslint/ban-types */


// eslint-disable-next-line @typescript-eslint/no-explicit-any
var handlers = {
  arrange: function arrange(props) {
    var column = props.column,
        descending = props.descending,
        data = props.data;
    return (0,_tidyjs_tidy__WEBPACK_IMPORTED_MODULE_1__/* .tidy */ .lu)(data, (0,_tidyjs_tidy__WEBPACK_IMPORTED_MODULE_1__/* .arrange */ .Di)(descending ? (0,_tidyjs_tidy__WEBPACK_IMPORTED_MODULE_1__/* .desc */ .C8)(column) : column));
  }
};
function postTransformData(_x) {
  return _postTransformData.apply(this, arguments);
}

function _postTransformData() {
  _postTransformData = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(message) {
    var handler;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // TODO move to web worker
            handler = handlers[message.type];
            return _context.abrupt("return", handler === null || handler === void 0 ? void 0 : handler(message));

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            console.debug(_context.t0);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));
  return _postTransformData.apply(this, arguments);
}

var cachedCSVs = {};
function postLoadCSV(url) {
  var cached = cachedCSVs[url];
  if (cached) return Promise.resolve(cached);
  return new Promise(function (resolve) {
    papaparse__WEBPACK_IMPORTED_MODULE_2___default().parse(url, {
      download: true,
      header: true,
      dynamicTyping: true,
      transformHeader: function transformHeader(h) {
        return h.trim().toLocaleLowerCase();
      },
      complete: function complete(r) {
        return resolve(r);
      }
    });
  }).then(function (r) {
    cachedCSVs[url] = r;
    return r;
  });
}

/***/ }),

/***/ 9950:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ BarChartField; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85413);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89801);
/* harmony import */ var _ReactInlineField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12702);
/* harmony import */ var _useBlockChartProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53333);
/* harmony import */ var _useBlockData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51586);
/* harmony import */ var _PointerBoundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77298);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69672);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42862);
/* harmony import */ var _nivo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8844);










var Bar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(8029)]).then(__webpack_require__.bind(__webpack_require__, 78029));
});

function BarChartWidget() {
  var _series$, _series$2, _series$3, _series$3$data;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP),
      sourceBlock = _useContext.sourceBlock;

  var _useBlockData = (0,_useBlockData__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(sourceBlock),
      data = _useBlockData.data; // need to map data to nivo


  var index = sourceBlock === null || sourceBlock === void 0 ? void 0 : sourceBlock.getFieldValue("index");
  var value = sourceBlock === null || sourceBlock === void 0 ? void 0 : sourceBlock.getFieldValue("value");

  var _tidyToNivo = (0,_nivo__WEBPACK_IMPORTED_MODULE_7__/* .tidyToNivo */ .tL)(data, [index, value], ["index", "value"]),
      series = _tidyToNivo.series,
      labels = _tidyToNivo.labels; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var _useBlockChartProps = (0,_useBlockChartProps__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(sourceBlock, {
    colors: {
      scheme: "category10"
    },
    data: series === null || series === void 0 ? void 0 : (_series$ = series[0]) === null || _series$ === void 0 ? void 0 : _series$.data,
    margin: {
      top: 8,
      right: 8,
      bottom: 38,
      left: 64
    },
    indexBy: "index",
    axisTop: null,
    axisRight: null,
    axisBottom: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: index,
      legendPosition: "middle",
      legendOffset: 34
    },
    axisLeft: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: value,
      legendPosition: "middle",
      legendOffset: -32
    }
  }),
      chartProps = _useBlockChartProps.chartProps;

  if (chartProps) chartProps.data = series === null || series === void 0 ? void 0 : (_series$2 = series[0]) === null || _series$2 === void 0 ? void 0 : _series$2.data;
  var hasData = !!(series !== null && series !== void 0 && (_series$3 = series[0]) !== null && _series$3 !== void 0 && (_series$3$data = _series$3.data) !== null && _series$3$data !== void 0 && _series$3$data.length);
  if (!hasData) return null;
  chartProps.axisBottom.legend = labels[0];
  chartProps.axisLeft.legend = labels[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "0.25rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PointerBoundary__WEBPACK_IMPORTED_MODULE_5__/* .PointerBoundary */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Bar, Object.assign({
    width: 388,
    height: 240
  }, chartProps))))));
}

var BarChartField = /*#__PURE__*/function (_ReactInlineField) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(BarChartField, _ReactInlineField);

  BarChartField.fromJson = function fromJson(options) {
    return new BarChartField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function BarChartField(options) {
    return _ReactInlineField.call(this, options) || this;
  }

  var _proto = BarChartField.prototype;

  _proto.renderInlineField = function renderInlineField() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BarChartWidget, null);
  };

  return BarChartField;
}(_ReactInlineField__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);

BarChartField.KEY = "jacdac_field_bar_chart";
BarChartField.EDITABLE = false;


/***/ }),

/***/ 69223:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ BuiltinDataSetField; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85413);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74640);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35313);
/* harmony import */ var _dsl_workers_data_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5221);




var builtins = {
  dummy: (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.withPrefix)("/datasets/dummy.csv")
};

var BuiltinDataSetField = /*#__PURE__*/function (_FieldDropdown) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(BuiltinDataSetField, _FieldDropdown);

  // eslint-disable-next-line @typescript-eslint/ban-types
  BuiltinDataSetField.fromJson = function fromJson(options) {
    return new BuiltinDataSetField(options);
  } // eslint-disable-next-line @typescript-eslint/ban-types
  ;

  function BuiltinDataSetField(options) {
    return _FieldDropdown.call(this, function () {
      return Object.keys(builtins).map(function (k) {
        return [k, k];
      });
    }, undefined, options) || this;
  }

  var _proto = BuiltinDataSetField.prototype;

  _proto.updateData = function updateData() {
    var url = builtins[this.getValue()];
    if (!url) return; // load dataset as needed

    var sourceBlock = this.getSourceBlock();
    var services = sourceBlock === null || sourceBlock === void 0 ? void 0 : sourceBlock.jacdacServices;
    if (!services) return;
    if (services.cache[BuiltinDataSetField.KEY] === url) return; // already downloaded

    (0,_dsl_workers_data_worker__WEBPACK_IMPORTED_MODULE_2__/* .postLoadCSV */ .N)(url).then(function (_ref) {
      var data = _ref.data,
          errors = _ref.errors;
      console.debug("csv parse", {
        data: data,
        errors: errors
      });
      services.data = data;
      services.cache[BuiltinDataSetField.KEY] = url;
    });
  };

  _proto.setSourceBlock = function setSourceBlock(block) {
    _FieldDropdown.prototype.setSourceBlock.call(this, block);

    this.updateData();
  };

  _proto.doValueUpdate_ = function doValueUpdate_(newValue) {
    _FieldDropdown.prototype.doValueUpdate_.call(this, newValue);

    this.updateData();
  };

  _proto.notifyServicesChanged = function notifyServicesChanged() {
    this.updateData();
  };

  return BuiltinDataSetField;
}(blockly__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown);

BuiltinDataSetField.KEY = "jacdac_field_data_builtin_dataset";


/***/ }),

/***/ 12456:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DataColumnChooserField; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85413);
/* harmony import */ var _nivo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8844);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74640);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_1__);




var DataColumnChooserField = /*#__PURE__*/function (_FieldDropdown) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(DataColumnChooserField, _FieldDropdown);

  DataColumnChooserField.fromJson = function fromJson(options) {
    return new DataColumnChooserField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // the first argument is a dummy and never used
  ;

  function DataColumnChooserField(options) {
    return _FieldDropdown.call(this, function () {
      return [["", ""]];
    }, undefined, options) || this;
  }

  var _proto = DataColumnChooserField.prototype;

  _proto.fromXml = function fromXml(fieldElement) {
    this.setValue(fieldElement.textContent);
  };

  _proto.getOptions = function getOptions() {
    var sourceBlock = this.getSourceBlock();
    var services = sourceBlock === null || sourceBlock === void 0 ? void 0 : sourceBlock.jacdacServices;
    var data = services === null || services === void 0 ? void 0 : services.data;
    var headers = (0,_nivo__WEBPACK_IMPORTED_MODULE_0__/* .tidyHeaders */ .P2)(data);
    var options = (headers === null || headers === void 0 ? void 0 : headers.map(function (h) {
      return [h, h];
    })) || [];
    var value = this.getValue();
    return options.length < 1 ? [[value || "", value || ""]] : options;
  };

  _proto.doClassValidation_ = function doClassValidation_(newValue) {
    // skip super class validationervices chan
    return newValue;
  };

  return DataColumnChooserField;
}(blockly__WEBPACK_IMPORTED_MODULE_1__.FieldDropdown);

DataColumnChooserField.KEY = "jacdac_field_data_column_chooser";


/***/ }),

/***/ 54741:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DataTableField; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85413);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89801);
/* harmony import */ var _ReactInlineField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12702);
/* harmony import */ var _useBlockData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51586);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70274);






var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(function () {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
    root: {
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      background: "#fff",
      color: "#000",
      borderRadius: "0.25rem"
    },
    table: {
      margin: 0,
      fontSize: "0.8rem",
      lineHeight: "1rem",
      "& td": {
        borderColor: "#ccc",
        borderRightStyle: "solid 1px"
      }
    }
  });
});

function DataTableWidget() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP),
      sourceBlock = _useContext.sourceBlock; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var _useBlockData = (0,_useBlockData__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(sourceBlock),
      data = _useBlockData.data;

  var classes = useStyles();
  if (!(data !== null && data !== void 0 && data.length)) return null;
  var columns = Object.keys(data[0] || {});
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: classes.table
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, columns.map(function (c) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      key: c
    }, c);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, data.map(function (r, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: r.id || i
    }, columns.map(function (c) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        key: c
      }, r[c]);
    }));
  }))));
}

var DataTableField = /*#__PURE__*/function (_ReactInlineField) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(DataTableField, _ReactInlineField);

  DataTableField.fromJson = function fromJson(options) {
    return new DataTableField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function DataTableField(options) {
    return _ReactInlineField.call(this, options) || this;
  }

  var _proto = DataTableField.prototype;

  _proto.createContainer = function createContainer() {
    var c = document.createElement("div");
    c.style.display = "block";
    c.style.minWidth = "14rem";
    c.style.maxHeight = "60vh";
    c.style.overflowY = "auto";
    return c;
  };

  _proto.renderInlineField = function renderInlineField() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataTableWidget, null);
  };

  return DataTableField;
}(_ReactInlineField__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);

DataTableField.KEY = "jacdac_field_data_table";
DataTableField.EDITABLE = false;


/***/ }),

/***/ 61162:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ GaugeWidgetField; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85413);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89801);
/* harmony import */ var _ReactInlineField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12702);
/* harmony import */ var _useBlockData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51586);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69672);
/* harmony import */ var _nivo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8844);
/* harmony import */ var _tidyjs_tidy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40344);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80838);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81794);










var GaugeWidget = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 10719));
});

function GaugeWidgetView() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP),
      sourceBlock = _useContext.sourceBlock; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var _useBlockData = (0,_useBlockData__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(sourceBlock),
      data = _useBlockData.data;

  if (!(data !== null && data !== void 0 && data.length)) return null;
  var field = sourceBlock === null || sourceBlock === void 0 ? void 0 : sourceBlock.getFieldValue("field");
  var value = (0,_nivo__WEBPACK_IMPORTED_MODULE_5__/* .tidyFindLastValue */ .pc)(data, field);
  if (value === undefined) return null;
  var min = Number(sourceBlock === null || sourceBlock === void 0 ? void 0 : sourceBlock.getFieldValue("min"));
  var max = Number(sourceBlock === null || sourceBlock === void 0 ? void 0 : sourceBlock.getFieldValue("max"));

  if (min === max) {
    min = undefined;
    max = undefined;
  }

  if (isNaN(min)) min = (0,_tidyjs_tidy__WEBPACK_IMPORTED_MODULE_6__/* .tidy */ .lu)(data, (0,_tidyjs_tidy__WEBPACK_IMPORTED_MODULE_6__/* .summarize */ .Iz)({
    min: (0,_tidyjs_tidy__WEBPACK_IMPORTED_MODULE_6__/* .min */ .VV)(field)
  }))[0].min;
  if (isNaN(max)) max = (0,_tidyjs_tidy__WEBPACK_IMPORTED_MODULE_6__/* .tidy */ .lu)(data, (0,_tidyjs_tidy__WEBPACK_IMPORTED_MODULE_6__/* .summarize */ .Iz)({
    max: (0,_tidyjs_tidy__WEBPACK_IMPORTED_MODULE_6__/* .max */ .Fp)(field)
  }))[0].max; // round with precision

  var step = Math.ceil(Math.abs(value)) / 10;
  var precision = step < 1 ? Math.ceil(-Math.log10(step)) : 0;
  value = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .roundWithPrecision */ .JI)(value, precision); // clamp values

  value = Math.min(max, Math.max(min, value));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    container: true,
    justify: "center",
    alignContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GaugeWidget, {
    value: value,
    min: min,
    max: max
  }))));
}

var GaugeWidgetField = /*#__PURE__*/function (_ReactInlineField) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(GaugeWidgetField, _ReactInlineField);

  GaugeWidgetField.fromJson = function fromJson(options) {
    return new GaugeWidgetField(options);
  };

  var _proto = GaugeWidgetField.prototype;

  _proto.createContainer = function createContainer() {
    var c = document.createElement("div");
    c.style.width = "20rem";
    return c;
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function GaugeWidgetField(options) {
    return _ReactInlineField.call(this, options) || this;
  }

  _proto.renderInlineField = function renderInlineField() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GaugeWidgetView, null);
  };

  return GaugeWidgetField;
}(_ReactInlineField__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);

GaugeWidgetField.KEY = "jacdac_field_gauge_widget";
GaugeWidgetField.EDITABLE = false;


/***/ }),

/***/ 90263:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ JDomTreeField; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85413);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89801);
/* harmony import */ var _ReactInlineField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12702);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69672);
/* harmony import */ var _NoServiceAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42825);






var JDomServiceTreeView = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(272)]).then(__webpack_require__.bind(__webpack_require__, 60272));
});

function JDomTreeWidget() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP),
      roleService = _useContext.roleService,
      flyout = _useContext.flyout;

  var onPointerStopPropagation = function onPointerStopPropagation(event) {
    // make sure blockly does not handle drags when interacting with UI
    event.stopPropagation();
  };

  if (flyout) return null;
  if (!roleService) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NoServiceAlert__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      minWidth: "12rem",
      cursor: "inherit"
    },
    onPointerDown: onPointerStopPropagation,
    onPointerUp: onPointerStopPropagation,
    onPointerMove: onPointerStopPropagation
  }, roleService && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(JDomServiceTreeView, {
    service: roleService,
    defaultExpanded: [roleService.id]
  })));
}

var JDomTreeField = /*#__PURE__*/function (_ReactInlineField) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(JDomTreeField, _ReactInlineField);

  JDomTreeField.fromJson = function fromJson(options) {
    return new JDomTreeField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function JDomTreeField(options) {
    return _ReactInlineField.call(this, options) || this;
  }

  var _proto = JDomTreeField.prototype;

  _proto.renderInlineField = function renderInlineField() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(JDomTreeWidget, null);
  };

  return JDomTreeField;
}(_ReactInlineField__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);

JDomTreeField.KEY = "jacdac_field_jdom_service_tree";
JDomTreeField.EDITABLE = false;


/***/ }),

/***/ 90422:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ KeyboardKeyField; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53719);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85413);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _ReactField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77576);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69672);
/* harmony import */ var _jacdac_ts_src_servers_hidkeyboardserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41577);






var KeyboardKeyInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(532), __webpack_require__.e(7919), __webpack_require__.e(2860)]).then(__webpack_require__.bind(__webpack_require__, 82860));
});

var KeyboardKeyField = /*#__PURE__*/function (_ReactField) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(KeyboardKeyField, _ReactField);

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
    return (0,_jacdac_ts_src_servers_hidkeyboardserver__WEBPACK_IMPORTED_MODULE_3__/* .renderKeyboardKey */ .OJ)(selector, modifiers, true);
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

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(KeyboardKeyInput, {
      initialSelector: selector,
      initialModifiers: modifiers,
      onChange: handleChange
    }));
  };

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(KeyboardKeyField, [{
    key: "defaultValue",
    get: function get() {
      return {
        selector: 4,
        modifiers: 0
      };
    }
  }]);

  return KeyboardKeyField;
}(_ReactField__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP);

KeyboardKeyField.KEY = "jacdac_field_keyboard_key";


/***/ }),

/***/ 68514:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ LEDColorField; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85413);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69672);
/* harmony import */ var _ReactField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77576);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81794);
/* harmony import */ var _widgets_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41173);
/* harmony import */ var _ValueContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86415);







var LEDWidget = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/* import() */ 317).then(__webpack_require__.bind(__webpack_require__, 56931));
});

function LEDColorFieldWidget() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ValueContext__WEBPACK_IMPORTED_MODULE_4__/* .default */ .ZP),
      value = _useContext.value,
      onValueChange = _useContext.onValueChange;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LEDWidget, {
    ledColor: value,
    onLedColorChange: onValueChange,
    ledCount: 3,
    color: "secondary"
  }));
}

var LEDColorField = /*#__PURE__*/function (_ReactField) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(LEDColorField, _ReactField);

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
    return (0,_widgets_svg__WEBPACK_IMPORTED_MODULE_6__/* .child */ .iU)(this.fieldGroup_, "circle", {
      r: width >> 1,
      cx: r,
      cy: r,
      strokeWidth: 2,
      stroke: "#777"
    });
  };

  _proto.updateView = function updateView() {
    var c = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .rgbToHtmlColor */ .b)(this.value);
    var circle = this.view;

    if (c) {
      circle === null || circle === void 0 ? void 0 : circle.setAttribute("fill", c);
    }
  };

  _proto.getText_ = function getText_() {
    return (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .rgbToHtmlColor */ .b)(this.value);
  };

  _proto.renderField = function renderField() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LEDColorFieldWidget, null);
  };

  return LEDColorField;
}(_ReactField__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP);

LEDColorField.KEY = "jacdac_field_led_color";
LEDColorField.SHADOW = (0,_ReactField__WEBPACK_IMPORTED_MODULE_2__/* .toShadowDefinition */ ._t)(LEDColorField);


/***/ }),

/***/ 11772:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ LEDMatrixField; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(53719);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(85413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
// EXTERNAL MODULE: ./src/components/blockly/fields/ReactField.tsx
var ReactField = __webpack_require__(77576);
// EXTERNAL MODULE: ./node_modules/blockly/index.js
var blockly = __webpack_require__(74640);
var blockly_default = /*#__PURE__*/__webpack_require__.n(blockly);
// EXTERNAL MODULE: ./src/components/widgets/svg.ts
var svg = __webpack_require__(41173);
;// CONCATENATED MODULE: ./src/components/blockly/fields/ReactImageField.tsx





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
    return (0,svg/* child */.iU)(this.fieldGroup_, "image", {
      height: height,
      width: width,
      alt: this.getText()
    });
  };

  return ReactImageField;
}(ReactField/* default */.ZP);


;// CONCATENATED MODULE: ./src/components/blockly/fields/LEDMatrixField.tsx







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


/***/ }),

/***/ 70659:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ LinePlotField; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85413);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89801);
/* harmony import */ var _ReactInlineField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12702);
/* harmony import */ var _useBlockChartProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53333);
/* harmony import */ var _useBlockData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51586);
/* harmony import */ var _PointerBoundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77298);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69672);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42862);
/* harmony import */ var _nivo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8844);










var Line = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(5942)]).then(__webpack_require__.bind(__webpack_require__, 55942));
});

function LineChartWidget() {
  var _chartProps$data, _chartProps$data$0$da;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP),
      sourceBlock = _useContext.sourceBlock;

  var _useBlockData = (0,_useBlockData__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(sourceBlock),
      data = _useBlockData.data; // need to map data to nivo


  var x = sourceBlock === null || sourceBlock === void 0 ? void 0 : sourceBlock.getFieldValue("x");
  var y = sourceBlock === null || sourceBlock === void 0 ? void 0 : sourceBlock.getFieldValue("y");

  var _tidyToNivo = (0,_nivo__WEBPACK_IMPORTED_MODULE_7__/* .tidyToNivo */ .tL)(data, [x, y], ["x", "y"]),
      series = _tidyToNivo.series,
      labels = _tidyToNivo.labels; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var _useBlockChartProps = (0,_useBlockChartProps__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(sourceBlock, {
    colors: {
      scheme: "category10"
    },
    data: series,
    margin: {
      top: 8,
      right: 8,
      bottom: 38,
      left: 64
    },
    xScale: {
      type: "linear",
      min: "auto",
      max: "auto"
    },
    yScale: {
      type: "linear",
      min: "auto",
      max: "auto"
    },
    axisTop: null,
    axisRight: null,
    enablePoints: false,
    isInteractive: false,
    axisBottom: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: x,
      legendPosition: "middle",
      legendOffset: 34
    },
    axisLeft: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: y,
      legendPosition: "middle",
      legendOffset: -32
    }
  }),
      chartProps = _useBlockChartProps.chartProps;

  if (chartProps) chartProps.data = series;
  var hasData = !!(chartProps !== null && chartProps !== void 0 && (_chartProps$data = chartProps.data) !== null && _chartProps$data !== void 0 && (_chartProps$data$0$da = _chartProps$data[0].data) !== null && _chartProps$data$0$da !== void 0 && _chartProps$data$0$da.length);
  if (!hasData) return null; // avoid using same column, creates rendering issues

  if (x === y && x) return null;
  chartProps.axisBottom.legend = labels[0];
  chartProps.axisLeft.legend = labels[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "0.25rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PointerBoundary__WEBPACK_IMPORTED_MODULE_5__/* .PointerBoundary */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Line, Object.assign({
    width: 388,
    height: 240
  }, chartProps))))));
}

var LinePlotField = /*#__PURE__*/function (_ReactInlineField) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(LinePlotField, _ReactInlineField);

  LinePlotField.fromJson = function fromJson(options) {
    return new LinePlotField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function LinePlotField(options) {
    return _ReactInlineField.call(this, options) || this;
  }

  var _proto = LinePlotField.prototype;

  _proto.renderInlineField = function renderInlineField() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LineChartWidget, null);
  };

  return LinePlotField;
}(_ReactInlineField__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);

LinePlotField.KEY = "jacdac_field_line_plot";
LinePlotField.EDITABLE = false;


/***/ }),

/***/ 86899:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ LogViewField; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85413);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59355);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_vm_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59448);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89801);
/* harmony import */ var _ReactInlineField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12702);







function LogViewWidget() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP),
      runner = _useContext.runner;

  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      logs = _useState[0],
      setLogs = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLogs([]);
    runner === null || runner === void 0 ? void 0 : runner.subscribe(_jacdac_ts_src_vm_events__WEBPACK_IMPORTED_MODULE_4__/* .VM_LOG_ENTRY */ .aG, function () {
      setLogs((runner === null || runner === void 0 ? void 0 : runner.logData) || []);
    });
  }, [runner]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
    style: {
      padding: "0",
      marginBottom: "0",
      background: "none",
      color: theme.palette.text.primary,
      maxHeight: "80vh",
      overflowY: "auto"
    }
  }, logs.slice(-20).map(function (l) {
    return "" + (l.count > 1 ? l.count + ": " : "") + l.text;
  }).join("\n"));
}

var LogViewField = /*#__PURE__*/function (_ReactInlineField) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(LogViewField, _ReactInlineField);

  LogViewField.fromJson = function fromJson(options) {
    return new LogViewField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function LogViewField(options) {
    return _ReactInlineField.call(this, options) || this;
  }

  var _proto = LogViewField.prototype;

  _proto.renderInlineField = function renderInlineField() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LogViewWidget, null);
  };

  return LogViewField;
}(_ReactInlineField__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);

LogViewField.KEY = "jacdac_field_log_view";
LogViewField.EDITABLE = false;


/***/ }),

/***/ 42825:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ NoServiceAlert; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83332);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88880);
/* harmony import */ var _jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48363);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20392);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89801);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13173);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6809);








function NoServiceAlert() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z),
      bus = _useContext.bus;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_WorkspaceContext__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP),
      roleService = _useContext2.roleService,
      roleServiceShortId = _useContext2.roleServiceShortId,
      flyout = _useContext2.flyout;

  var spec = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_4__/* .serviceSpecificationFromName */ .kB)(roleServiceShortId);

  var handleStartSimulator = function handleStartSimulator() {
    return (0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_1__/* .startServiceProviderFromServiceClass */ .V6)(bus, spec.classIdentifier);
  }; // nothing to do here


  if (roleService || flyout) return null; // unresolved, unknown service

  if (!roleService && !roleServiceShortId) return null; // unknown spec

  if (!spec) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    severity: "warning"
  }, "Unknown service");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    variant: "outlined",
    color: "default",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, null),
    onClick: handleStartSimulator
  }, "start ", spec.name);
}

/***/ }),

/***/ 50585:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ NoteField; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53719);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85413);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _hooks_toneContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66775);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69672);
/* harmony import */ var _ReactField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77576);








var PianoWidget = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(532), __webpack_require__.e(317)]).then(__webpack_require__.bind(__webpack_require__, 28937));
});

var NoteField = /*#__PURE__*/function (_ReactField) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(NoteField, _ReactField);

  NoteField.fromJson = function fromJson(options) {
    return new NoteField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function NoteField(options) {
    var _this;

    _this = _ReactField.call(this, options === null || options === void 0 ? void 0 : options.value, undefined, options) || this;

    _this.events.on(_ReactField__WEBPACK_IMPORTED_MODULE_3__/* .UNMOUNT */ .lo, function () {
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
      var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(newFrequency) {
        var _this2$toneContext;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.value = newFrequency;
                if (!_this2.toneContext) _this2.toneContext = (0,_hooks_toneContext__WEBPACK_IMPORTED_MODULE_6__/* .createToneContext */ .W)();
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

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(PianoWidget, {
      playTone: handlePlayTone
    }));
  };

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(NoteField, [{
    key: "defaultValue",
    get: function get() {
      return 440;
    }
  }]);

  return NoteField;
}(_ReactField__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP);

NoteField.KEY = "jacdac_field_note";
NoteField.SHADOW = (0,_ReactField__WEBPACK_IMPORTED_MODULE_3__/* .toShadowDefinition */ ._t)(NoteField);


/***/ }),

/***/ 77298:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": function() { return /* binding */ PointerBoundary; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

function PointerBoundary(props) {
  var className = props.className,
      children = props.children;

  var onPointerStopPropagation = function onPointerStopPropagation(event) {
    // make sure blockly does not handle drags when interacting with UI
    event.stopPropagation();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: className,
    style: {
      cursor: "inherit"
    },
    onPointerDown: onPointerStopPropagation,
    onPointerUp: onPointerStopPropagation,
    onPointerMove: onPointerStopPropagation
  }, children);
}

/***/ }),

/***/ 77576:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z8": function() { return /* binding */ VALUE_CHANGE; },
/* harmony export */   "lo": function() { return /* binding */ UNMOUNT; },
/* harmony export */   "ZP": function() { return /* binding */ ReactField; },
/* harmony export */   "_t": function() { return /* binding */ toShadowDefinition; }
/* harmony export */ });
/* unused harmony exports SOURCE_BLOCK_CHANGE, MOUNT */
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(53719);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85413);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73935);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74640);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jacdac_Provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(727);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19640);
/* harmony import */ var _ui_DarkModeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7796);
/* harmony import */ var _ui_AppTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25853);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8266);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81794);
/* harmony import */ var _ValueContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86415);
/* harmony import */ var _jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45484);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71815);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89801);



/* eslint-disable @typescript-eslint/no-explicit-any */













var SOURCE_BLOCK_CHANGE = "sourceBlockChange";
var VALUE_CHANGE = "valueChange";
var MOUNT = "mount";
var UNMOUNT = "unmount";

var ReactField = /*#__PURE__*/function (_Blockly$Field) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z)(ReactField, _Blockly$Field);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function ReactField(value, validator, options, size) {
    var _this;

    _this = _Blockly$Field.call(this, value, validator, options) || this;
    _this.SERIALIZABLE = true;
    _this.events = new _jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_9__/* .JDEventSource */ .a();
    if (size) _this.size_ = new (blockly__WEBPACK_IMPORTED_MODULE_2___default().utils.Size)(size.width, size.height);
    return _this;
  }

  var _proto = ReactField.prototype;

  // override to support custom view
  _proto.initCustomView = function initCustomView() {
    return null;
  } // override to update view
  ;

  _proto.updateView = function updateView() {};

  _proto.getText_ = function getText_() {
    return JSON.stringify(this.value);
  };

  _proto.toXml = function toXml(fieldElement) {
    fieldElement.textContent = JSON.stringify(this.value);
    return fieldElement;
  };

  _proto.fromXml = function fromXml(fieldElement) {
    try {
      var v = JSON.parse(fieldElement.textContent);
      this.value = v;
    } catch (e) {
      console.log(e, {
        text: fieldElement.textContent
      });
      this.value = undefined;
    }
  };

  _proto.emitChange = function emitChange() {
    this.events.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .CHANGE */ .Ver);
  };

  _proto.setSourceBlock = function setSourceBlock(block) {
    var changed = block !== this.sourceBlock_;

    _Blockly$Field.prototype.setSourceBlock.call(this, block);

    if (changed) {
      var bs = block;

      if (!bs.jacdacServices) {
        var _bs$inputList;

        bs.jacdacServices = new _WorkspaceContext__WEBPACK_IMPORTED_MODULE_11__/* .BlockServices */ .LL();
        (_bs$inputList = bs.inputList) === null || _bs$inputList === void 0 ? void 0 : _bs$inputList.forEach(function (i) {
          var _i$fieldRow;

          return (_i$fieldRow = i.fieldRow) === null || _i$fieldRow === void 0 ? void 0 : _i$fieldRow.forEach(function (f) {
            var _notifyServicesChange, _ref;

            return (_notifyServicesChange = (_ref = f).notifyServicesChanged) === null || _notifyServicesChange === void 0 ? void 0 : _notifyServicesChange.call(_ref);
          });
        });
      }

      this.events.emit(SOURCE_BLOCK_CHANGE, block);
      this.emitChange();
    }
  };

  _proto.initView = function initView() {
    this.view = this.initCustomView();
    if (this.view) this.updateView();else _Blockly$Field.prototype.initView.call(this);
  };

  _proto.updateSize_ = function updateSize_() {
    if (!this.view) _Blockly$Field.prototype.updateSize_.call(this);
  };

  _proto.doValueUpdate_ = function doValueUpdate_(newValue) {
    var change = this.value_ !== newValue;

    if (this.view) {
      this.value_ = newValue;
      this.updateView();
    } else _Blockly$Field.prototype.doValueUpdate_.call(this, newValue);

    if (change) {
      this.events.emit(VALUE_CHANGE, this.value);
      this.emitChange();
    }
  };

  _proto.showEditor_ = function showEditor_() {
    var _this2 = this;

    this.div_ = blockly__WEBPACK_IMPORTED_MODULE_2___default().DropDownDiv.getContentDiv();
    react_dom__WEBPACK_IMPORTED_MODULE_1__.render(this.render(), this.div_);
    var border = this.sourceBlock_.getColourTertiary();
    blockly__WEBPACK_IMPORTED_MODULE_2___default().DropDownDiv.setColour(this.sourceBlock_.getColour(), border); // the div_ size has not been computed yet, so let the browse handle this

    setTimeout(function () {
      blockly__WEBPACK_IMPORTED_MODULE_2___default().DropDownDiv.showPositionedByField(_this2, _this2.dropdownDispose_.bind(_this2));

      _this2.events.emit(MOUNT);
    }, 200);
  };

  _proto.hide = function hide() {
    blockly__WEBPACK_IMPORTED_MODULE_2___default().DropDownDiv.hideIfOwner(this, true);
  };

  _proto.dropdownDispose_ = function dropdownDispose_() {
    // this blows on hot reloads
    try {
      this.events.emit(UNMOUNT);
      react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(this.div_);
    } catch (e) {
      console.error(e);
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var onValueChange = function onValueChange(newValue) {
      return _this3.value = newValue;
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_WorkspaceContext__WEBPACK_IMPORTED_MODULE_11__/* .WorkspaceProvider */ .W5, {
      field: this
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_DarkModeProvider__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      fixedDarkMode: "dark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_use_id_hook__WEBPACK_IMPORTED_MODULE_4__/* .IdProvider */ .vc, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_jacdac_Provider__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_AppTheme__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ValueContext__WEBPACK_IMPORTED_MODULE_8__/* .ValueProvider */ .Lt, {
      value: this.value,
      onValueChange: onValueChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
      m: 0.5,
      borderRadius: "0.25rem",
      bgcolor: "background.paper"
    }, this.renderField())))))));
  };

  _proto.renderField = function renderField() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "not implemented");
  };

  _proto.dispose = function dispose() {
    this.view = undefined;

    _Blockly$Field.prototype.dispose.call(this);
  };

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z)(ReactField, [{
    key: "defaultValue",
    get: function get() {
      return {};
    }
  }, {
    key: "value",
    get: function get() {
      try {
        var v = JSON.parse(this.getValue());
        return v || this.defaultValue;
      } catch (e) {
        console.warn(e);
        return this.defaultValue;
      }
    },
    set: function set(v) {
      this.setValue(JSON.stringify(v));
    }
  }]);

  return ReactField;
}((blockly__WEBPACK_IMPORTED_MODULE_2___default().Field)); // eslint-disable-next-line @typescript-eslint/no-explicit-any



function toShadowDefinition(fieldType) {
  (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .assert */ .hu)(!!fieldType.KEY);
  var type = fieldType.KEY + "_shadow";
  return {
    kind: "block",
    type: type,
    message0: "%1",
    args0: [{
      type: fieldType.KEY,
      name: "value"
    }],
    style: "math_blocks",
    output: "Number",
    template: "shadow"
  };
}

/***/ }),

/***/ 12702:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ReactInlineField; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85413);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73935);
/* harmony import */ var _ReactField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77576);
/* harmony import */ var _widgets_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41173);
/* harmony import */ var _ui_DarkModeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7796);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19640);
/* harmony import */ var _jacdac_Provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(727);
/* harmony import */ var _ui_AppTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25853);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74640);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89801);












var ReactInlineField = /*#__PURE__*/function (_ReactField) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(ReactInlineField, _ReactField);

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
    var fo = (0,_widgets_svg__WEBPACK_IMPORTED_MODULE_10__/* .child */ .iU)(this.fieldGroup_, "foreignObject", {
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
    react_dom__WEBPACK_IMPORTED_MODULE_1__.render(this.renderBlock(), this.container);
    return fo;
  };

  _proto.dispose = function dispose() {
    if (this.container) {
      react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(this.container);
      this.container = undefined;
    }

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = undefined;
    }

    _ReactField.prototype.dispose.call(this);
  };

  _proto.renderField = function renderField() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "not used");
  };

  _proto.renderInlineField = function renderInlineField() {
    return null;
  };

  _proto.renderBlock = function renderBlock() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_WorkspaceContext__WEBPACK_IMPORTED_MODULE_8__/* .WorkspaceProvider */ .W5, {
      field: this
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_DarkModeProvider__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      fixedDarkMode: "dark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_use_id_hook__WEBPACK_IMPORTED_MODULE_4__/* .IdProvider */ .vc, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_jacdac_Provider__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_AppTheme__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, null, this.renderInlineField())))));
  };

  _proto.getText_ = function getText_() {
    return "...";
  } // don't bind any mouse event
  ;

  _proto.bindEvents_ = function bindEvents_() {
    blockly__WEBPACK_IMPORTED_MODULE_7___default().Tooltip.bindMouseEvents(this.getClickTarget_());
  };

  return ReactInlineField;
}(_ReactField__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP);



/***/ }),

/***/ 97884:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ScatterPlotField; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85413);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89801);
/* harmony import */ var _ReactInlineField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12702);
/* harmony import */ var _useBlockChartProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53333);
/* harmony import */ var _useBlockData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51586);
/* harmony import */ var _PointerBoundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77298);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69672);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42862);
/* harmony import */ var _nivo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8844);










var ScatterPlot = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(6471)]).then(__webpack_require__.bind(__webpack_require__, 66471));
});

function ScatterChartWidget() {
  var _chartProps$data, _chartProps$data$0$da;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP),
      sourceBlock = _useContext.sourceBlock;

  var _useBlockData = (0,_useBlockData__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(sourceBlock),
      data = _useBlockData.data; // need to map data to nivo


  var x = sourceBlock === null || sourceBlock === void 0 ? void 0 : sourceBlock.getFieldValue("x");
  var y = sourceBlock === null || sourceBlock === void 0 ? void 0 : sourceBlock.getFieldValue("y");

  var _tidyToNivo = (0,_nivo__WEBPACK_IMPORTED_MODULE_7__/* .tidyToNivo */ .tL)(data, [x, y], ["x", "y"]),
      series = _tidyToNivo.series,
      labels = _tidyToNivo.labels; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var _useBlockChartProps = (0,_useBlockChartProps__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(sourceBlock, {
    colors: {
      scheme: "category10"
    },
    data: series,
    margin: {
      top: 8,
      right: 8,
      bottom: 38,
      left: 64
    },
    xScale: {
      type: "linear",
      min: "auto",
      max: "auto"
    },
    yScale: {
      type: "linear",
      min: "auto",
      max: "auto"
    },
    axisTop: null,
    axisRight: null,
    axisBottom: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: x,
      legendPosition: "middle",
      legendOffset: 34
    },
    axisLeft: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: y,
      legendPosition: "middle",
      legendOffset: -32
    }
  }),
      chartProps = _useBlockChartProps.chartProps;

  if (chartProps) chartProps.data = series;
  var hasData = !!(chartProps !== null && chartProps !== void 0 && (_chartProps$data = chartProps.data) !== null && _chartProps$data !== void 0 && (_chartProps$data$0$da = _chartProps$data[0].data) !== null && _chartProps$data$0$da !== void 0 && _chartProps$data$0$da.length);
  if (!hasData) return null;
  chartProps.axisBottom.legend = labels[0];
  chartProps.axisLeft.legend = labels[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "0.25rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PointerBoundary__WEBPACK_IMPORTED_MODULE_5__/* .PointerBoundary */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ScatterPlot, Object.assign({
    width: 388,
    height: 240
  }, chartProps))))));
}

var ScatterPlotField = /*#__PURE__*/function (_ReactInlineField) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(ScatterPlotField, _ReactInlineField);

  ScatterPlotField.fromJson = function fromJson(options) {
    return new ScatterPlotField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function ScatterPlotField(options) {
    return _ReactInlineField.call(this, options) || this;
  }

  var _proto = ScatterPlotField.prototype;

  _proto.renderInlineField = function renderInlineField() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ScatterChartWidget, null);
  };

  return ScatterPlotField;
}(_ReactInlineField__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);

ScatterPlotField.KEY = "jacdac_field_scatter_plot";
ScatterPlotField.EDITABLE = false;


/***/ }),

/***/ 891:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ServoAngleField; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(85413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(53719);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(42656);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slider/Slider.js + 1 modules
var Slider = __webpack_require__(50514);
// EXTERNAL MODULE: ./src/components/blockly/fields/ReactField.tsx
var ReactField = __webpack_require__(77576);
// EXTERNAL MODULE: ./src/components/blockly/fields/ValueContext.tsx
var ValueContext = __webpack_require__(86415);
;// CONCATENATED MODULE: ./src/components/blockly/fields/SliderField.tsx









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


// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
;// CONCATENATED MODULE: ./src/components/blockly/fields/ServoAngleField.tsx






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


/***/ }),

/***/ 35361:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ TwinField; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85413);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75167);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90293);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80838);
/* harmony import */ var _dashboard_DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73205);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89801);
/* harmony import */ var _ReactInlineField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12702);
/* harmony import */ var _NoServiceAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42825);
/* harmony import */ var _PointerBoundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77298);
/* harmony import */ var _hooks_useBestRegister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39687);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71815);
/* harmony import */ var _useBlockData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51586);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81794);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var HORIZON = 10;

function TwinWidget() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z),
      bus = _useContext.bus;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_WorkspaceContext__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP),
      roleService = _useContext2.roleService,
      flyout = _useContext2.flyout,
      sourceId = _useContext2.sourceId,
      sourceBlock = _useContext2.sourceBlock; // eslint-disable-next-line @typescript-eslint/ban-types


  var _useBlockData = (0,_useBlockData__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(sourceBlock, []),
      data = _useBlockData.data,
      setData = _useBlockData.setData; // data collection


  var register = (0,_hooks_useBestRegister__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(roleService);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_8__/* .REPORT_UPDATE */ .rGZ, function () {
      var newValue = register.unpackedValue;

      if (newValue !== undefined) {
        var newRow = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_11__/* .toMap */ .qL)(register.fields, function (f) {
          return f.name;
        }, function (f, i) {
          return newValue[i];
        });
        var newData = [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z)(data || []), [_objectSpread(_objectSpread({}, {
          time: bus.timestamp / 1000
        }), newRow)]).slice(-HORIZON);
        setData(newData);
      }
    });
  }, [register, sourceId, data]);
  if (flyout) return null;
  if (!roleService) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_NoServiceAlert__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    container: true,
    alignItems: "center",
    alignContent: "center",
    justify: "center",
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_PointerBoundary__WEBPACK_IMPORTED_MODULE_6__/* .PointerBoundary */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_dashboard_DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP, {
    service: roleService,
    visible: true,
    variant: "icon"
  }))));
}

var TwinField = /*#__PURE__*/function (_ReactInlineField) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z)(TwinField, _ReactInlineField);

  TwinField.fromJson = function fromJson(options) {
    return new TwinField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function TwinField(options) {
    return _ReactInlineField.call(this, options) || this;
  }

  var _proto = TwinField.prototype;

  _proto.renderInlineField = function renderInlineField() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(TwinWidget, null);
  };

  return TwinField;
}(_ReactInlineField__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z);

TwinField.KEY = "jacdac_field_twin";
TwinField.EDITABLE = false;


/***/ }),

/***/ 86415:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lt": function() { return /* binding */ ValueProvider; }
/* harmony export */ });
/* unused harmony export ValueContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* eslint-disable @typescript-eslint/no-explicit-any */

var ValueContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  value: undefined,
  onValueChange: undefined
});
ValueContext.displayName = "Value";
/* harmony default export */ __webpack_exports__["ZP"] = (ValueContext);
function ValueProvider(props) {
  var children = props.children,
      initialValue = props.value,
      onFieldValueChange = props.onValueChange;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var onValueChange = function onValueChange(newValue) {
    setValue(newValue);
    onFieldValueChange === null || onFieldValueChange === void 0 ? void 0 : onFieldValueChange(newValue);
  };

  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/react-in-jsx-scope
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(ValueContext.Provider, {
      value: {
        value: value,
        onValueChange: onValueChange
      }
    }, children)
  );
}

/***/ }),

/***/ 15757:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ VariablesField; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85413);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70274);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_vm_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59448);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89801);
/* harmony import */ var _ReactInlineField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12702);






var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    table: {
      padding: 0,
      margin: 0,
      fontSize: "0.9rem",
      lineHeight: "1rem",
      color: theme.palette.text.primary,
      "& td": {
        borderColor: "#ccc"
      }
    }
  });
});

function VariablesWidget() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP),
      runner = _useContext.runner;

  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(runner === null || runner === void 0 ? void 0 : runner.globals()),
      variables = _useState[0],
      setVariables = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return runner === null || runner === void 0 ? void 0 : runner.subscribe(_jacdac_ts_src_vm_events__WEBPACK_IMPORTED_MODULE_5__/* .VM_GLOBAL_CHANGE */ .b4, function () {
      return setVariables(runner.globals());
    });
  }, [runner]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, variables && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: classes.table
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, variables === null || variables === void 0 ? void 0 : variables.map(function (_ref) {
    var name = _ref.name,
        value = _ref.value;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, value));
  }))));
}

var VariablesField = /*#__PURE__*/function (_ReactInlineField) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(VariablesField, _ReactInlineField);

  VariablesField.fromJson = function fromJson(options) {
    return new VariablesField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function VariablesField(options) {
    return _ReactInlineField.call(this, options) || this;
  }

  var _proto = VariablesField.prototype;

  _proto.renderInlineField = function renderInlineField() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(VariablesWidget, null);
  };

  return VariablesField;
}(_ReactInlineField__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);

VariablesField.KEY = "jacdac_field_variables_view";
VariablesField.EDITABLE = false;


/***/ }),

/***/ 2006:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ WatchValueField; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85413);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90293);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59355);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8266);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(76544);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89801);
/* harmony import */ var _ReactInlineField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12702);
/* harmony import */ var _PointerBoundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77298);
/* harmony import */ var _jacdac_ts_src_vm_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59448);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81794);
/* harmony import */ var _useBlockData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51586);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20392);











var HORIZON = 10;

function WatchValueWidget() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z),
      bus = _useContext.bus;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP),
      runner = _useContext2.runner,
      sourceId = _useContext2.sourceId,
      sourceBlock = _useContext2.sourceBlock;

  var _useBlockData = (0,_useBlockData__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(sourceBlock, []),
      data = _useBlockData.data,
      setData = _useBlockData.setData;

  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(); // track changes

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(runner === null || runner === void 0 ? void 0 : runner.lookupWatch(sourceId)),
      value = _useState[0],
      setValue = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return runner === null || runner === void 0 ? void 0 : runner.subscribe(_jacdac_ts_src_vm_events__WEBPACK_IMPORTED_MODULE_8__/* .VM_WATCH_CHANGE */ .UM, function (watchSourceId) {
      if (watchSourceId === sourceId) {
        var newValue = runner.lookupWatch(sourceId);
        setValue(newValue);

        if (!isNaN(newValue)) {
          var newData = [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(data || []), [{
            time: bus.timestamp / 1000,
            value: newValue
          }]).slice(-HORIZON);
          setData(newData);
        }
      }
    });
  }, [runner, sourceId, data]);
  var valueNumber = typeof value === "number" ? value : undefined;

  if (!isNaN(valueNumber)) {
    var step = Math.ceil(Math.abs(valueNumber)) / 10;
    var precision = step < 1 ? Math.ceil(-Math.log10(step)) : 0;
    valueNumber = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_4__/* .roundWithPrecision */ .JI)(valueNumber, precision);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    bgcolor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
    color: theme.palette.text.primary
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    container: true,
    alignItems: "flex-end",
    alignContent: "center",
    justify: "center",
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PointerBoundary__WEBPACK_IMPORTED_MODULE_3__/* .PointerBoundary */ .A, null, !isNaN(valueNumber) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    variant: "body1"
  }, valueNumber) : typeof value === "boolean" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    value: !!value
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    variant: "body1"
  }, value === undefined ? "..." : value + "")))));
}

var WatchValueField = /*#__PURE__*/function (_ReactInlineField) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z)(WatchValueField, _ReactInlineField);

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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WatchValueWidget, null);
  };

  return WatchValueField;
}(_ReactInlineField__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);

WatchValueField.KEY = "jacdac_field_watch_value";
WatchValueField.EDITABLE = false;


/***/ }),

/***/ 29434:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": function() { return /* binding */ registerFields; },
/* harmony export */   "w": function() { return /* binding */ fieldShadows; }
/* harmony export */ });
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74640);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NoteField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50585);
/* harmony import */ var _KeyboardKeyField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90422);
/* harmony import */ var _LEDMatrixField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11772);
/* harmony import */ var _ServoAngleField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(891);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81794);
/* harmony import */ var _LEDColorField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68514);
/* harmony import */ var _TwinField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35361);
/* harmony import */ var _JDomTreeField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90263);
/* harmony import */ var _WatchValueField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2006);
/* harmony import */ var _LogViewField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86899);
/* harmony import */ var _VariablesFields__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15757);
/* harmony import */ var _DataTableField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54741);
/* harmony import */ var _ScatterPlotField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97884);
/* harmony import */ var _DataColumnChooserField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(12456);
/* harmony import */ var _LinePlotField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(70659);
/* harmony import */ var _GaugeWidgetField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61162);
/* harmony import */ var _BuiltinDataSetField__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(69223);
/* harmony import */ var _BarField__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9950);



















var reactFieldShadows;
function registerFields() {
  if (reactFieldShadows) return;
  reactFieldShadows = []; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var registerType = function registerType(fieldType) {
    var key = fieldType.KEY;
    (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__/* .assert */ .hu)(!!key);

    try {
      blockly__WEBPACK_IMPORTED_MODULE_0___default().fieldRegistry.unregister(key); // hot reload issues
    } catch (e) {// ignore hot reload issues
    }

    blockly__WEBPACK_IMPORTED_MODULE_0___default().fieldRegistry.register(key, fieldType);
    if (fieldType.SHADOW) reactFieldShadows.push(fieldType.SHADOW);
  };

  var fieldTypes = [_KeyboardKeyField__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, _NoteField__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _LEDMatrixField__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, _ServoAngleField__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, _LEDColorField__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, _TwinField__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, _JDomTreeField__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, _GaugeWidgetField__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, _WatchValueField__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, _LogViewField__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, _VariablesFields__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, _DataTableField__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, _DataColumnChooserField__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, _BuiltinDataSetField__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, _ScatterPlotField__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, _LinePlotField__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, _BarField__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z];
  fieldTypes.forEach(registerType);
}
function fieldShadows() {
  registerFields();
  return reactFieldShadows.slice(0);
}

/***/ }),

/***/ 8844:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P2": function() { return /* binding */ tidyHeaders; },
/* harmony export */   "pc": function() { return /* binding */ tidyFindLastValue; },
/* harmony export */   "tL": function() { return /* binding */ tidyToNivo; }
/* harmony export */ });
/* harmony import */ var _tidyjs_tidy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40344);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81794);
/* eslint-disable @typescript-eslint/ban-types */


function tidyHeaders(data) {
  var headers = Object.keys((data === null || data === void 0 ? void 0 : data[0]) || {});
  return headers;
}
function tidyFindLastValue(data, column) {
  if (!(data !== null && data !== void 0 && data.length)) return undefined;
  return data[data.length - 1][column];
}
function tidyToNivo( // eslint-disable-next-line @typescript-eslint/ban-types
data, columns, toColumns) {
  // avoid duplicates in column
  columns = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__/* .unique */ .Tw)(columns);
  var headers = tidyHeaders(data);
  var k = 0;
  var renaming = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__/* .toMap */ .qL)(columns, function (c, i) {
    return columns[i] || (headers === null || headers === void 0 ? void 0 : headers[k++]);
  }, function (c, i) {
    return toColumns[i];
  });
  var labels = Object.keys(renaming); // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // todo handle time

  var _index = 0;
  var tidied = data ? (0,_tidyjs_tidy__WEBPACK_IMPORTED_MODULE_0__/* .tidy */ .lu)(data, (0,_tidyjs_tidy__WEBPACK_IMPORTED_MODULE_0__/* .mutate */ .JG)({
    index: function index() {
      return _index++;
    }
  }), (0,_tidyjs_tidy__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(labels), (0,_tidyjs_tidy__WEBPACK_IMPORTED_MODULE_0__/* .rename */ .PQ)(renaming)) : [];
  var series = [{
    id: "data",
    data: tidied
  }];
  return {
    series: series,
    labels: labels
  };
}

/***/ }),

/***/ 16582:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Uz": function() { return /* binding */ NEW_PROJET_XML; },
/* harmony export */   "FW": function() { return /* binding */ identityTransformData; },
/* harmony export */   "Pq": function() { return /* binding */ resolveBlockDefinition; },
/* harmony export */   "oj": function() { return /* binding */ JSON_TYPE; },
/* harmony export */   "jt": function() { return /* binding */ STRING_TYPE; },
/* harmony export */   "lu": function() { return /* binding */ BOOLEAN_TYPE; },
/* harmony export */   "sS": function() { return /* binding */ NUMBER_TYPE; },
/* harmony export */   "eg": function() { return /* binding */ PRIMITIVE_TYPES; },
/* harmony export */   "Nd": function() { return /* binding */ BUILTIN_TYPES; },
/* harmony export */   "lL": function() { return /* binding */ CODE_STATEMENT_TYPE; },
/* harmony export */   "zN": function() { return /* binding */ DATA_SCIENCE_STATEMENT_TYPE; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74640);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_1__);



var NEW_PROJET_XML = '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>';
// eslint-disable-next-line @typescript-eslint/ban-types
var identityTransformData = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(block, data) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", data);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function identityTransformData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
function resolveBlockDefinition(type) {
  var b = (blockly__WEBPACK_IMPORTED_MODULE_1___default().Blocks)[type];
  return b === null || b === void 0 ? void 0 : b.jacdacDefinition;
}
var JSON_TYPE = "JSON";
var STRING_TYPE = "String";
var BOOLEAN_TYPE = "Boolean";
var NUMBER_TYPE = "Number";
var PRIMITIVE_TYPES = [STRING_TYPE, BOOLEAN_TYPE, NUMBER_TYPE];
var BUILTIN_TYPES = [""].concat(PRIMITIVE_TYPES);
var CODE_STATEMENT_TYPE = "Code";
var DATA_SCIENCE_STATEMENT_TYPE = "DataScienceStatement";

/***/ }),

/***/ 53333:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useBlockChartProps; }
/* harmony export */ });
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54774);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);


function useBlockChartProps(block, initialChartProps) {
  var services = block === null || block === void 0 ? void 0 : block.jacdacServices; // data on the current node

  var chartProps = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(services, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.chartProps;
  });
  var setChartProps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (value) {
    if (services) services.chartProps = value;
  }, [services]); // set initial value

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (services && initialChartProps !== undefined && services.chartProps === undefined) services.chartProps = initialChartProps;
  }, [services]);
  return {
    chartProps: chartProps,
    setChartProps: setChartProps
  };
}

/***/ }),

/***/ 51586:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useBlockData; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(90293);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./node_modules/use-debounce/esm/useDebouncedCallback.js
var useDebouncedCallback = __webpack_require__(87709);
;// CONCATENATED MODULE: ./node_modules/use-debounce/esm/useThrottledCallback.js

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds (or once per browser frame). The throttled function
 * comes with a `cancel` method to cancel delayed `func` invocations and a
 * `flush` method to immediately invoke them. Provide `options` to indicate
 * whether `func` should be invoked on the leading and/or trailing edge of the
 * `wait` timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
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
 * for details over the differences between `throttle` and `debounce`.
 *
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0]
 *  The number of milliseconds to throttle invocations to; if omitted,
 *  `requestAnimationFrame` is used (if available, otherwise it will be setTimeout(...,0)).
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * const scrollHandler = useThrottledCallback(updatePosition, 100)
 * window.addEventListener('scroll', scrollHandler)
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * const { callback } = useThrottledCallback(renewToken, 300000, { 'trailing': false })
 * <button onClick={callback}>click</button>
 *
 * // Cancel the trailing throttled invocation.
 * window.addEventListener('popstate', throttled.cancel);
 */

function useThrottledCallback(func, wait, _a) {
  var _b = _a === void 0 ? {} : _a,
      _c = _b.leading,
      leading = _c === void 0 ? true : _c,
      _d = _b.trailing,
      trailing = _d === void 0 ? true : _d;

  return (0,useDebouncedCallback/* default */.Z)(func, wait, {
    maxWait: wait,
    leading: leading,
    trailing: trailing
  });
}
;// CONCATENATED MODULE: ./src/jacdac/useChangeThrottled.ts




var DEFAULT_THROTTLE = 200;
function useChangeThrottled(node, query, time, deps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var _useState = (0,react.useState)((node === null || node === void 0 ? void 0 : node.changeId) || 0),
      version = _useState[0],
      setVersion = _useState[1];

  var value = query ? query(node) : undefined;
  var throttledSetVersion = useThrottledCallback(setVersion, time || DEFAULT_THROTTLE);
  (0,react.useEffect)(function () {
    return node === null || node === void 0 ? void 0 : node.subscribe(constants/* CHANGE */.Ver, function () {
      return throttledSetVersion(node.changeId);
    });
  }, [node].concat((0,toConsumableArray/* default */.Z)(deps || [])));
  return value;
}
;// CONCATENATED MODULE: ./src/components/blockly/useBlockData.ts

 // eslint-disable-next-line @typescript-eslint/ban-types

function useBlockData(block, initialValue) {
  var services = block === null || block === void 0 ? void 0 : block.jacdacServices; // data on the current node

  var data = useChangeThrottled(services, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.data;
  });
  var setData = (0,react.useCallback)(function (value) {
    if (services) services.data = value;
  }, [services]); // set initial value

  (0,react.useEffect)(function () {
    if (services && initialValue !== undefined && services.data === undefined) services.data = initialValue;
  }, [services]);
  return {
    data: data,
    setData: setData
  };
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

/***/ 39687:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useBestRegister; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73512);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13173);



function useBestRegister(service) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var specification = service === null || service === void 0 ? void 0 : service.specification;
    var hasReading = specification === null || specification === void 0 ? void 0 : specification.packets.some(function (reg) {
      return (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .isReading */ .vz)(reg);
    });
    if (hasReading) return service.register(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SystemReg.Reading */ .ZJq.Reading);
    var hasValue = specification === null || specification === void 0 ? void 0 : specification.packets.some(function (reg) {
      return (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .isValue */ .wh)(reg);
    });
    if (hasValue) return service.register(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SystemReg.Value */ .ZJq.Value);
    var hasIntensity = specification === null || specification === void 0 ? void 0 : specification.packets.some(function (reg) {
      return (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .isValueOrIntensity */ .sX)(reg);
    });
    if (hasIntensity) return service.register(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SystemReg.Intensity */ .ZJq.Intensity);
    return undefined;
  }, [service]);
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

/***/ 25853:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ AppTheme; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81864);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23581);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87761);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _DarkModeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91350);


 // eslint-disable-next-line @typescript-eslint/no-explicit-any

function AppTheme(props) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_DarkModeContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z),
      darkMode = _useContext.darkMode;

  var isDark = darkMode === "dark";
  var themeDef = {
    palette: {
      primary: {
        main: isDark ? "#56d364" : "#2e7d32"
      },
      secondary: {
        main: "#ffc400"
      },
      contrastThreshold: isDark ? 5.1 : 3.1,
      type: darkMode
    }
  };
  var rawTheme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(themeDef);
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(rawTheme);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, Object.assign({
    theme: theme
  }, props));
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

/***/ 15056:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IZ": function() { return /* binding */ makeVMBase; },
/* harmony export */   "cC": function() { return /* binding */ processErrors; },
/* harmony export */   "ZP": function() { return /* binding */ workspaceJSONToVMProgram; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90293);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85413);
/* harmony import */ var _babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83001);
/* harmony import */ var _jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79973);
/* harmony import */ var _blockly_toolbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16582);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74640);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blockly_dsl_dsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94113);







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
  if (!workspace) return undefined;
  var roles = workspace.variables.filter(function (v) {
    return _blockly_toolbox__WEBPACK_IMPORTED_MODULE_1__/* .BUILTIN_TYPES.indexOf */ .Nd.indexOf(v.type) < 0;
  }).map(function (v) {
    return {
      role: v.name,
      serviceShortId: v.type
    };
  });

  var EmptyExpression = /*#__PURE__*/function (_Error) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(EmptyExpression, _Error);

    function EmptyExpression() {
      return _Error.apply(this, arguments) || this;
    }

    return EmptyExpression;
  }( /*#__PURE__*/(0,_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(Error));

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
      var dsl = (0,_blockly_dsl_dsl__WEBPACK_IMPORTED_MODULE_3__/* .resolveDsl */ .u)(dsls, type);

      if (!dsl) {
        console.warn("unknown block " + type, {
          type: type,
          ev: ev,
          block: block,
          d: (blockly__WEBPACK_IMPORTED_MODULE_2___default().Blocks)[type]
        });
        errors.push({
          sourceId: block.id,
          message: "unknown block " + type
        });
      } else {
        var _dsl$compileExpressio;

        var definition = (0,_blockly_toolbox__WEBPACK_IMPORTED_MODULE_1__/* .resolveBlockDefinition */ .Pq)(type);
        var res = (_dsl$compileExpressio = dsl.compileExpressionToVM) === null || _dsl$compileExpressio === void 0 ? void 0 : _dsl$compileExpressio.call(dsl, {
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

        if (template === "shadow") {
          var field = inputs[0].fields["value"];
          var v = field.value;
          return {
            type: "Literal",
            value: v,
            raw: v + ""
          };
        }

        errors.push({
          sourceId: block.id,
          message: "unknown block " + type
        });
        console.warn("unsupported expression block " + type, {
          ev: ev,
          block: block,
          definition: definition
        });
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
            addCommands(event, [t].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(t.children ? t.children : [])), thenHandler);
          }

          if (e) {
            addCommands(event, [e].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(e.children ? e.children : [])), elseHandler);
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
          console.log("dynamic if");
          return {
            cmd: ifThenElse,
            errors: processErrors(block, errors.concat(thenHandler.errors).concat(elseHandler.errors))
          };
        }
      // more builts

      default:
        {
          var dsl = (0,_blockly_dsl_dsl__WEBPACK_IMPORTED_MODULE_3__/* .resolveDsl */ .u)(dsls, type);

          if (dsl) {
            var _dsl$compileCommandTo;

            var definition = (0,_blockly_toolbox__WEBPACK_IMPORTED_MODULE_1__/* .resolveBlockDefinition */ .Pq)(type);
            var template = definition === null || definition === void 0 ? void 0 : definition.template;
            if (template === "meta") return undefined;
            var dslRes = (_dsl$compileCommandTo = dsl.compileCommandToVM) === null || _dsl$compileCommandTo === void 0 ? void 0 : _dsl$compileCommandTo.call(dsl, {
              event: event,
              block: block,
              definition: definition,
              blockToExpression: blockToExpression
            });

            if (dslRes) {
              dslRes.errors = processErrors(block, dslRes.errors);
              return dslRes;
            }
          }

          console.warn("unsupported command block " + type, {
            block: block
          });
          return {
            cmd: undefined,
            errors: [{
              sourceId: block.id,
              message: "unsupported command block " + type
            }]
          };
        }
    }
  };

  var nop = {
    type: "CallExpression",
    arguments: [],
    callee: (0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_0__/* .toIdentifier */ .EB)("nop")
  };

  var addCommands = function addCommands(event, blocks, handler) {
    blocks === null || blocks === void 0 ? void 0 : blocks.filter(function (child) {
      return !!child;
    }).forEach(function (child) {
      try {
        var _ref = blockToCommand(event, child) || {},
            cmd = _ref.cmd,
            errors = _ref.errors;

        if (cmd) handler.commands.push(cmd);
        errors === null || errors === void 0 ? void 0 : errors.forEach(function (e) {
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
    });
  };

  var handlers = workspace.blocks.map(function (top) {
    var _topErrors2;

    var type = top.type;
    var command;
    var topEvent;
    var topErrors;
    var topMeta = false;

    try {
      var _dsl$compileEventToVM, _topErrors;

      var dsl = (0,_blockly_dsl_dsl__WEBPACK_IMPORTED_MODULE_3__/* .resolveDsl */ .u)(dsls, type);
      var definition = (0,_blockly_toolbox__WEBPACK_IMPORTED_MODULE_1__/* .resolveBlockDefinition */ .Pq)(type);

      var _ref2 = (dsl === null || dsl === void 0 ? void 0 : (_dsl$compileEventToVM = dsl.compileEventToVM) === null || _dsl$compileEventToVM === void 0 ? void 0 : _dsl$compileEventToVM.call(dsl, {
        block: top,
        definition: definition,
        blockToExpression: blockToExpression
      })) || {},
          expression = _ref2.expression,
          errors = _ref2.errors,
          event = _ref2.event,
          meta = _ref2.meta;

      command = expression;
      topErrors = errors;
      topEvent = event;
      topMeta = meta; // if dsl didn't compile anything try again

      var _ref3 = definition || {},
          template = _ref3.template;

      if (!command && !((_topErrors = topErrors) !== null && _topErrors !== void 0 && _topErrors.length)) {
        switch (template) {
          case "meta":
            {
              break;
            }

          default:
            {
              topErrors = [{
                sourceId: top.id,
                message: "unsupported handler block " + type
              }];
              console.debug("unsupported handler template " + template + " for " + type, {
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

/***/ }),

/***/ 41173:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iU": function() { return /* binding */ child; }
/* harmony export */ });
/* unused harmony exports title, hydrate, elt */
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

/***/ })

}]);