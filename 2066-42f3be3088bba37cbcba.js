/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 92066:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var _asyncToGenerator = __webpack_require__(50358);

var _toConsumableArray = __webpack_require__(30063);

var _slicedToArray = __webpack_require__(72458);

var _assertThisInitialized = __webpack_require__(49418);

var _get = __webpack_require__(49817);

var _inherits = __webpack_require__(97377);

var _possibleConstructorReturn = __webpack_require__(66970);

var _getPrototypeOf = __webpack_require__(64852);

var _wrapNativeSuper = __webpack_require__(60530);

var _classCallCheck = __webpack_require__(3040);

var _createClass = __webpack_require__(79417);

var _regeneratorRuntime = __webpack_require__(22917);

__webpack_require__(38559);

__webpack_require__(84944);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(numbers);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function tidy(items) {
  if (typeof items === "function") {
    throw new Error("You must supply the data as the first argument to tidy()");
  }

  var result = items;

  for (var _len = arguments.length, fns = new Array(_len > 1 ? _len - 1 : 0), _key3 = 1; _key3 < _len; _key3++) {
    fns[_key3 - 1] = arguments[_key3];
  }

  for (var _i = 0, _fns = fns; _i < _fns.length; _i++) {
    var fn = _fns[_i];

    if (fn) {
      result = fn(result);
    }
  }

  return result;
}

function filter(filterFn) {
  var _filter = function _filter(items) {
    return items.filter(filterFn);
  };

  return _filter;
}

function singleOrArray(d) {
  return d == null ? [] : Array.isArray(d) ? d : [d];
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function numbers(values, valueof) {
  var _iterator, _step, value, index, _iterator2, _step2, _value;

  return _regeneratorRuntime.wrap(function numbers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(valueof === undefined)) {
            _context.next = 21;
            break;
          }

          _iterator = _createForOfIteratorHelper(values);
          _context.prev = 2;

          _iterator.s();

        case 4:
          if ((_step = _iterator.n()).done) {
            _context.next = 11;
            break;
          }

          value = _step.value;

          if (!(value != null && (value = +value) >= value)) {
            _context.next = 9;
            break;
          }

          _context.next = 9;
          return value;

        case 9:
          _context.next = 4;
          break;

        case 11:
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);

          _iterator.e(_context.t0);

        case 16:
          _context.prev = 16;

          _iterator.f();

          return _context.finish(16);

        case 19:
          _context.next = 40;
          break;

        case 21:
          index = -1;
          _iterator2 = _createForOfIteratorHelper(values);
          _context.prev = 23;

          _iterator2.s();

        case 25:
          if ((_step2 = _iterator2.n()).done) {
            _context.next = 32;
            break;
          }

          _value = _step2.value;

          if (!((_value = valueof(_value, ++index, values)) != null && (_value = +_value) >= _value)) {
            _context.next = 30;
            break;
          }

          _context.next = 30;
          return _value;

        case 30:
          _context.next = 25;
          break;

        case 32:
          _context.next = 37;
          break;

        case 34:
          _context.prev = 34;
          _context.t1 = _context["catch"](23);

          _iterator2.e(_context.t1);

        case 37:
          _context.prev = 37;

          _iterator2.f();

          return _context.finish(37);

        case 40:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[2, 13, 16, 19], [23, 34, 37, 40]]);
} // https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423


var Adder = /*#__PURE__*/function () {
  "use strict";

  function Adder() {
    _classCallCheck(this, Adder);

    this._partials = new Float64Array(32);
    this._n = 0;
  }

  _createClass(Adder, [{
    key: "add",
    value: function add(x) {
      var p = this._partials;
      var i = 0;

      for (var j = 0; j < this._n && j < 32; j++) {
        var y = p[j],
            hi = x + y,
            lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
        if (lo) p[i++] = lo;
        x = hi;
      }

      p[i] = x;
      this._n = i + 1;
      return this;
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      var p = this._partials;
      var n = this._n,
          x,
          y,
          lo,
          hi = 0;

      if (n > 0) {
        hi = p[--n];

        while (n > 0) {
          x = hi;
          y = p[--n];
          hi = x + y;
          lo = y - (hi - x);
          if (lo) break;
        }

        if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
          y = lo * 2;
          x = hi + y;
          if (y == x - hi) hi = x;
        }
      }

      return hi;
    }
  }]);

  return Adder;
}();

function fsum(values, valueof) {
  var adder = new Adder();

  if (valueof === undefined) {
    var _iterator3 = _createForOfIteratorHelper(values),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var value = _step3.value;

        if (value = +value) {
          adder.add(value);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  } else {
    var index = -1;

    var _iterator4 = _createForOfIteratorHelper(values),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _value2 = _step4.value;

        if (_value2 = +valueof(_value2, ++index, values)) {
          adder.add(_value2);
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }

  return +adder;
}

var InternMap = /*#__PURE__*/function (_Map) {
  "use strict";

  _inherits(InternMap, _Map);

  var _super = _createSuper(InternMap);

  function InternMap(entries) {
    var _this;

    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : keyof;

    _classCallCheck(this, InternMap);

    _this = _super.call(this);
    Object.defineProperties(_assertThisInitialized(_this), {
      _intern: {
        value: new Map()
      },
      _key: {
        value: key
      }
    });

    if (entries != null) {
      var _iterator5 = _createForOfIteratorHelper(entries),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _step5$value = _slicedToArray(_step5.value, 2),
              _key2 = _step5$value[0],
              value = _step5$value[1];

          _this.set(_key2, value);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }

    return _this;
  }

  _createClass(InternMap, [{
    key: "get",
    value: function get(key) {
      return _get(_getPrototypeOf(InternMap.prototype), "get", this).call(this, intern_get(this, key));
    }
  }, {
    key: "has",
    value: function has(key) {
      return _get(_getPrototypeOf(InternMap.prototype), "has", this).call(this, intern_get(this, key));
    }
  }, {
    key: "set",
    value: function set(key, value) {
      return _get(_getPrototypeOf(InternMap.prototype), "set", this).call(this, intern_set(this, key), value);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      return _get(_getPrototypeOf(InternMap.prototype), "delete", this).call(this, intern_delete(this, key));
    }
  }]);

  return InternMap;
}( /*#__PURE__*/_wrapNativeSuper(Map));

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

function identity$1(x) {
  return x;
}

function group(values) {
  for (var _len2 = arguments.length, keys = new Array(_len2 > 1 ? _len2 - 1 : 0), _key4 = 1; _key4 < _len2; _key4++) {
    keys[_key4 - 1] = arguments[_key4];
  }

  return nest(values, identity$1, identity$1, keys);
}

function nest(values, map, reduce, keys) {
  return function regroup(values, i) {
    if (i >= keys.length) return reduce(values);
    var groups = new InternMap();
    var keyof = keys[i++];
    var index = -1;

    var _iterator6 = _createForOfIteratorHelper(values),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var value = _step6.value;
        var key = keyof(value, ++index, values);

        var _group = groups.get(key);

        if (_group) _group.push(value);else groups.set(key, [value]);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    var _iterator7 = _createForOfIteratorHelper(groups),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _step7$value = _slicedToArray(_step7.value, 2),
            _key5 = _step7$value[0],
            _values = _step7$value[1];

        groups.set(_key5, regroup(_values, i));
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    return map(groups);
  }(values, 0);
}

function max$1(values, valueof) {
  var max;

  if (valueof === undefined) {
    var _iterator8 = _createForOfIteratorHelper(values),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var value = _step8.value;

        if (value != null && (max < value || max === undefined && value >= value)) {
          max = value;
        }
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
  } else {
    var index = -1;

    var _iterator9 = _createForOfIteratorHelper(values),
        _step9;

    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var _value3 = _step9.value;

        if ((_value3 = valueof(_value3, ++index, values)) != null && (max < _value3 || max === undefined && _value3 >= _value3)) {
          max = _value3;
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
  }

  return max;
}

function min$1(values, valueof) {
  var min;

  if (valueof === undefined) {
    var _iterator10 = _createForOfIteratorHelper(values),
        _step10;

    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var value = _step10.value;

        if (value != null && (min > value || min === undefined && value >= value)) {
          min = value;
        }
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
  } else {
    var index = -1;

    var _iterator11 = _createForOfIteratorHelper(values),
        _step11;

    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var _value4 = _step11.value;

        if ((_value4 = valueof(_value4, ++index, values)) != null && (min > _value4 || min === undefined && _value4 >= _value4)) {
          min = _value4;
        }
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
  }

  return min;
} // ISC license, Copyright 2018 Vladimir Agafonkin.


function quickselect(array, k) {
  var left = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var right = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : array.length - 1;
  var compare = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ascending;

  while (right > left) {
    if (right - left > 600) {
      var n = right - left + 1;
      var m = k - left + 1;
      var z = Math.log(n);
      var s = 0.5 * Math.exp(2 * z / 3);
      var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect(array, k, newLeft, newRight, compare);
    }

    var t = array[k];
    var i = left;
    var j = right;
    swap(array, left, k);
    if (compare(array[right], t) > 0) swap(array, left, right);

    while (i < j) {
      swap(array, i, j), ++i, --j;

      while (compare(array[i], t) < 0) {
        ++i;
      }

      while (compare(array[j], t) > 0) {
        --j;
      }
    }

    if (compare(array[left], t) === 0) swap(array, left, j);else ++j, swap(array, j, right);
    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }

  return array;
}

function swap(array, i, j) {
  var t = array[i];
  array[i] = array[j];
  array[j] = t;
}

function quantile(values, p, valueof) {
  values = Float64Array.from(numbers(values, valueof));
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return min$1(values);
  if (p >= 1) return max$1(values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = max$1(quickselect(values, i0).subarray(0, i0 + 1)),
      value1 = min$1(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}

function median$1(values, valueof) {
  return quantile(values, 0.5, valueof);
}

function _arrange2(comparators) {
  var _arrange = function _arrange(items) {
    var comparatorFns = singleOrArray(comparators).map(function (comp) {
      return typeof comp === "function" ? comp : asc(comp);
    });
    return items.slice().sort(function (a, b) {
      var _iterator12 = _createForOfIteratorHelper(comparatorFns),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var comparator = _step12.value;
          var result = comparator(a, b);
          if (result) return result;
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
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

function desc(key) {
  var keyFn = typeof key === "function" ? key : function (d) {
    return d[key];
  };
  return function _desc(a, b) {
    return emptyAwareComparator(keyFn(a), keyFn(b), true);
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

  return ascending(a, b);
}

function isEmpty(value) {
  return value == null || value !== value;
}

function summarize(summarizeSpec, options) {
  var _summarize = function _summarize(items) {
    options = options != null ? options : {};
    var summarized = {};
    var keys = Object.keys(summarizeSpec);

    for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
      var key = _keys[_i2];
      summarized[key] = summarizeSpec[key](items);
    }

    if (options.rest && items.length) {
      var objectKeys = Object.keys(items[0]);

      for (var _i3 = 0, _objectKeys = objectKeys; _i3 < _objectKeys.length; _i3++) {
        var objKey = _objectKeys[_i3];

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

function mutate(mutateSpec) {
  var _mutate = function _mutate(items) {
    var mutatedItems = [];

    var _iterator13 = _createForOfIteratorHelper(items),
        _step13;

    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var item = _step13.value;

        var mutatedItem = _extends({}, item);

        for (var key in mutateSpec) {
          var mutateSpecValue = mutateSpec[key];
          var mutatedResult = typeof mutateSpecValue === "function" ? mutateSpecValue(mutatedItem) : mutateSpecValue;
          mutatedItem[key] = mutatedResult;
        }

        mutatedItems.push(mutatedItem);
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }

    return mutatedItems;
  };

  return _mutate;
}

function assignGroupKeys(d, keys) {
  if (d == null || typeof d !== "object" || Array.isArray(d)) return d;
  var keysObj = Object.fromEntries(keys.filter(function (key) {
    return typeof key[0] !== "function";
  }));
  return Object.assign(keysObj, d);
}

function groupTraversal(grouped, outputGrouped, keys, addSubgroup, addLeaves) {
  var level = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  var _iterator14 = _createForOfIteratorHelper(grouped.entries()),
      _step14;

  try {
    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
      var _step14$value = _slicedToArray(_step14.value, 2),
          key = _step14$value[0],
          value = _step14$value[1];

      var keysHere = [].concat(_toConsumableArray(keys), [key]);

      if (value instanceof Map) {
        var subgroup = addSubgroup(outputGrouped, keysHere, level);
        groupTraversal(value, subgroup, keysHere, addSubgroup, addLeaves, level + 1);
      } else {
        addLeaves(outputGrouped, keysHere, value, level);
      }
    }
  } catch (err) {
    _iterator14.e(err);
  } finally {
    _iterator14.f();
  }

  return outputGrouped;
}

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

var identity = function identity(d) {
  return d;
};

function groupBy(groupKeys, fns, options) {
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
          return exportLevels(results, _extends({}, options, {
            export: "levels",
            levels: ["entries-object"]
          }));

        default:
          return exportLevels(results, _extends({}, options, {
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

groupBy.grouped = function (options) {
  return _extends({}, options, {
    export: "grouped"
  });
};

groupBy.entries = function (options) {
  return _extends({}, options, {
    export: "entries"
  });
};

groupBy.entriesObject = function (options) {
  return _extends({}, options, {
    export: "entries-object"
  });
};

groupBy.object = function (options) {
  return _extends({}, options, {
    export: "object"
  });
};

groupBy.map = function (options) {
  return _extends({}, options, {
    export: "map"
  });
};

groupBy.keys = function (options) {
  return _extends({}, options, {
    export: "keys"
  });
};

groupBy.values = function (options) {
  return _extends({}, options, {
    export: "values"
  });
};

groupBy.levels = function (options) {
  return _extends({}, options, {
    export: "levels"
  });
};

function runFlow(items, fns, addGroupKeys) {
  var result = items;
  if (!(fns == null ? void 0 : fns.length)) return result;

  var _iterator15 = _createForOfIteratorHelper(fns),
      _step15;

  try {
    var _loop = function _loop() {
      var fn = _step15.value;
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

    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
      var _ret = _loop();

      if (_ret === "continue") continue;
    }
  } catch (err) {
    _iterator15.e(err);
  } finally {
    _iterator15.f();
  }

  return result;
}

function makeGrouped(items, groupKeys) {
  var groupKeyFns = singleOrArray(groupKeys).map(function (key, i) {
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
  var grouped = group.apply(void 0, [items].concat(_toConsumableArray(groupKeyFns)));
  return grouped;
}

function ungroup(grouped, addGroupKeys) {
  var items = [];
  groupTraversal(grouped, items, [], identity, function (root, keys, values) {
    var valuesToAdd = values;

    if (addGroupKeys !== false) {
      valuesToAdd = values.map(function (d) {
        return assignGroupKeys(d, keys);
      });
    }

    root.push.apply(root, _toConsumableArray(valuesToAdd));
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
      mapLeaf = _options$mapLeaf === void 0 ? identity : _options$mapLeaf,
      _options$mapLeaves = options.mapLeaves,
      mapLeaves = _options$mapLeaves === void 0 ? identity : _options$mapLeaves,
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
      mapEntry = _options$mapEntry === void 0 ? identity : _options$mapEntry;
  var _options$levels = options.levels,
      levels = _options$levels === void 0 ? ["entries"] : _options$levels;
  var levelSpecs = [];

  var _iterator16 = _createForOfIteratorHelper(levels),
      _step16;

  try {
    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
      var levelOption = _step16.value;

      switch (levelOption) {
        case "entries":
        case "entries-object":
        case "entries-obj":
        case "entriesObject":
          {
            var _ret2 = function () {
              var levelMapEntry = (levelOption === "entries-object" || levelOption === "entries-obj" || levelOption === "entriesObject") && options.mapEntry == null ? function (_ref4) {
                var _ref5 = _slicedToArray(_ref4, 2),
                    key = _ref5[0],
                    values = _ref5[1];

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
    _iterator16.e(err);
  } finally {
    _iterator16.f();
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

function keysFromItems(items) {
  if (items.length < 1) return [];
  var keys = Object.keys(items[0]);
  return keys;
}

function everything() {
  return function (items) {
    var keys = keysFromItems(items);
    return keys;
  };
}

function processSelectors(items, selectKeys) {
  var processedSelectKeys = [];

  var _iterator17 = _createForOfIteratorHelper(singleOrArray(selectKeys)),
      _step17;

  try {
    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
      var keyInput = _step17.value;

      if (typeof keyInput === "function") {
        var _processedSelectKeys;

        (_processedSelectKeys = processedSelectKeys).push.apply(_processedSelectKeys, _toConsumableArray(keyInput(items)));
      } else {
        processedSelectKeys.push(keyInput);
      }
    }
  } catch (err) {
    _iterator17.e(err);
  } finally {
    _iterator17.f();
  }

  if (processedSelectKeys.length && processedSelectKeys[0][0] === "-") {
    processedSelectKeys = [].concat(_toConsumableArray(everything()(items)), _toConsumableArray(processedSelectKeys));
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

function _select2(selectKeys) {
  var _select = function _select(items) {
    var processedSelectKeys = processSelectors(items, selectKeys);
    if (!processedSelectKeys.length) return items;
    return items.map(function (d) {
      var mapped = {};

      var _iterator18 = _createForOfIteratorHelper(processedSelectKeys),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var key = _step18.value;
          mapped[key] = d[key];
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }

      return mapped;
    });
  };

  return _select;
}

function mean$1(items, accessor) {
  var n = 0;

  for (var i = 0; i < items.length; ++i) {
    var value = accessor(items[i], i, items);

    if (+value === value) {
      n += 1;
    }
  }

  return n ? fsum(items, accessor) / n : void 0;
}

function min(key) {
  var keyFn = typeof key === "function" ? key : function (d) {
    return d[key];
  };
  return function (items) {
    return min$1(items, keyFn);
  };
}

function max(key) {
  var keyFn = typeof key === "function" ? key : function (d) {
    return d[key];
  };
  return function (items) {
    return max$1(items, keyFn);
  };
}

function mean(key) {
  var keyFn = typeof key === "function" ? key : function (d) {
    return d[key];
  };
  return function (items) {
    return mean$1(items, keyFn);
  };
}

function median(key) {
  var keyFn = typeof key === "function" ? key : function (d) {
    return d[key];
  };
  return function (items) {
    return median$1(items, keyFn);
  };
}

var _excluded = ["worker", "data", "previousData"];
var handlers = {
  arrange: function arrange(props) {
    var column = props.column,
        descending = props.descending,
        data = props.data;
    return tidy(data, _arrange2(descending ? desc(column) : column));
  },
  select: function select(props) {
    var columns = props.columns,
        data = props.data;
    if (!columns) return data;else return tidy(data, _select2(columns.map(function (column) {
      return "".concat(column);
    })));
  },
  drop: function drop(props) {
    var columns = props.columns,
        data = props.data;
    if (!columns) return data;else return tidy(data, _select2(columns.map(function (column) {
      return "-".concat(column);
    })));
  },
  filter_string: function filter_string(props) {
    var column = props.column,
        logic = props.logic,
        rhs = props.rhs,
        data = props.data;
    if (!column || rhs === undefined) return data;

    switch (logic) {
      case "gt":
        return tidy(data, filter(function (d) {
          return d[column] > rhs;
        }));

      case "lt":
        return tidy(data, filter(function (d) {
          return d[column] < rhs;
        }));

      case "ge":
        return tidy(data, filter(function (d) {
          return d[column] >= rhs;
        }));

      case "le":
        return tidy(data, filter(function (d) {
          return d[column] <= rhs;
        }));

      case "eq":
        return tidy(data, filter(function (d) {
          return d[column] == rhs;
        }));

      case "ne":
        return tidy(data, filter(function (d) {
          return d[column] != rhs;
        }));

      default:
        return data;
    }
  },
  filter_columns: function filter_columns(props) {
    var columns = props.columns,
        logic = props.logic,
        data = props.data;

    var _columns = _slicedToArray(columns, 2),
        left = _columns[0],
        right = _columns[1];

    if (!left || !right) return data;

    switch (logic) {
      case "gt":
        return tidy(data, filter(function (d) {
          return d[columns[0]] > d[columns[1]];
        }));

      case "lt":
        return tidy(data, filter(function (d) {
          return d[columns[0]] < d[columns[1]];
        }));

      case "ge":
        return tidy(data, filter(function (d) {
          return d[columns[0]] >= d[columns[1]];
        }));

      case "le":
        return tidy(data, filter(function (d) {
          return d[columns[0]] <= d[columns[1]];
        }));

      case "eq":
        return tidy(data, filter(function (d) {
          return d[columns[0]] === d[columns[1]];
        }));

      case "ne":
        return tidy(data, filter(function (d) {
          return d[columns[0]] !== d[columns[1]];
        }));

      default:
        return data;
    }
  },
  mutate_columns: function mutate_columns(props) {
    var newcolumn = props.newcolumn,
        lhs = props.lhs,
        rhs = props.rhs,
        logic = props.logic,
        data = props.data;
    if (newcolumn === undefined || !lhs || !rhs || !logic) return data;
    var calc = {};

    switch (logic) {
      case "plus":
        calc[newcolumn] = function (d) {
          return d[lhs] + d[rhs];
        };

        return tidy(data, mutate(calc));

      case "minus":
        calc[newcolumn] = function (d) {
          return d[lhs] - d[rhs];
        };

        return tidy(data, mutate(calc));

      case "mult":
        calc[newcolumn] = function (d) {
          return d[lhs] * d[rhs];
        };

        return tidy(data, mutate(calc));

      case "div":
        calc[newcolumn] = function (d) {
          return d[lhs] / d[rhs];
        };

        return tidy(data, mutate(calc));

      case "gt":
        calc[newcolumn] = function (d) {
          return d[lhs] > d[rhs];
        };

        return tidy(data, mutate(calc));

      case "lt":
        calc[newcolumn] = function (d) {
          return d[lhs] < d[rhs];
        };

        return tidy(data, mutate(calc));

      case "ge":
        calc[newcolumn] = function (d) {
          return d[lhs] >= d[rhs];
        };

        return tidy(data, mutate(calc));

      case "le":
        calc[newcolumn] = function (d) {
          return d[lhs] <= d[rhs];
        };

        return tidy(data, mutate(calc));

      case "eq":
        calc[newcolumn] = function (d) {
          return d[lhs] == d[rhs];
        };

        return tidy(data, mutate(calc));

      case "ne":
        calc[newcolumn] = function (d) {
          return d[lhs] != d[rhs];
        };

        return tidy(data, mutate(calc));

      default:
        return data;
    }
  },
  mutate_number: function mutate_number(props) {
    var newcolumn = props.newcolumn,
        lhs = props.lhs,
        rhs = props.rhs,
        logic = props.logic,
        data = props.data;
    if (newcolumn === undefined || !lhs || rhs === undefined || !logic) return data;
    var calc = {};

    switch (logic) {
      case "plus":
        calc[newcolumn] = function (d) {
          return d[lhs] + rhs;
        };

        return tidy(data, mutate(calc));

      case "minus":
        calc[newcolumn] = function (d) {
          return d[lhs] - rhs;
        };

        return tidy(data, mutate(calc));

      case "mult":
        calc[newcolumn] = function (d) {
          return d[lhs] * rhs;
        };

        return tidy(data, mutate(calc));

      case "div":
        calc[newcolumn] = function (d) {
          return d[lhs] / rhs;
        };

        return tidy(data, mutate(calc));

      case "gt":
        calc[newcolumn] = function (d) {
          return d[lhs] > rhs;
        };

        return tidy(data, mutate(calc));

      case "lt":
        calc[newcolumn] = function (d) {
          return d[lhs] < rhs;
        };

        return tidy(data, mutate(calc));

      case "ge":
        calc[newcolumn] = function (d) {
          return d[lhs] >= rhs;
        };

        return tidy(data, mutate(calc));

      case "le":
        calc[newcolumn] = function (d) {
          return d[lhs] <= rhs;
        };

        return tidy(data, mutate(calc));

      case "eq":
        calc[newcolumn] = function (d) {
          return d[lhs] == rhs;
        };

        return tidy(data, mutate(calc));

      case "ne":
        calc[newcolumn] = function (d) {
          return d[lhs] != rhs;
        };

        return tidy(data, mutate(calc));

      default:
        return data;
    }
  },
  summarize_by_group: function summarize_by_group(props) {
    var column = props.column,
        by = props.by,
        calc = props.calc,
        data = props.data;
    if (!column || !by || !calc) return data;

    switch (calc) {
      case "mean":
        return tidy(data, // eslint-disable-next-line @typescript-eslint/no-explicit-any
        groupBy(by, [// eslint-disable-next-line @typescript-eslint/no-explicit-any
        summarize({
          Mean: mean(column)
        })]));

      case "med":
        return tidy(data, // eslint-disable-next-line @typescript-eslint/no-explicit-any
        groupBy(by, [// eslint-disable-next-line @typescript-eslint/no-explicit-any
        summarize({
          Median: median(column)
        })]));

      case "min":
        return tidy(data, // eslint-disable-next-line @typescript-eslint/no-explicit-any
        groupBy(by, [summarize({
          Min: min(column)
        })]));

      case "max":
        return tidy(data, // eslint-disable-next-line @typescript-eslint/no-explicit-any
        groupBy(by, [summarize({
          Max: max(column)
        })]));

      default:
        return data;
    }
  },
  record_window: function record_window(props) {
    var _previousData;

    var data = props.data,
        previousData = props.previousData,
        horizon = props.horizon;
    if (!(data != null && data.length)) return data;
    var now = data[data.length - 1].time;
    var previousNow = previousData == null ? void 0 : (_previousData = previousData[(previousData == null ? void 0 : previousData.length) - 1]) == null ? void 0 : _previousData.time;
    if (now === undefined || previousNow === undefined) return data.filter(function (r) {
      return now - r.time < horizon;
    });
    return [].concat(_toConsumableArray(previousData.filter(function (r) {
      return now - r.time < horizon;
    })), _toConsumableArray(data.filter(function (r) {
      return now - r.time < horizon && r.time > previousNow;
    })));
  }
};

function transformData(message) {
  try {
    var handler = handlers[message.type];
    return handler == null ? void 0 : handler(message);
  } catch (e) {
    console.debug(e);
    return undefined;
  }
}

function handleMessage(_x) {
  return _handleMessage.apply(this, arguments);
}

function _handleMessage() {
  _handleMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(event) {
    var message, worker, rest, newData, resp;
    return _regeneratorRuntime.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            message = event.data; // eslint-disable-next-line @typescript-eslint/no-unused-vars

            worker = message.worker, rest = _objectWithoutPropertiesLoose(message, _excluded);

            if (!(worker !== "data")) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return");

          case 4:
            _context2.next = 6;
            return transformData(message);

          case 6:
            newData = _context2.sent;
            //console.debug("Jacdac data out:", { message })
            resp = _extends({
              worker: worker
            }, rest, {
              data: newData
            });
            self.postMessage(resp);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _handleMessage.apply(this, arguments);
}

self.addEventListener("message", handleMessage);
console.debug("jacdac data: worker registered");

/***/ }),

/***/ 67481:
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 91597:
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 27413:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(67481);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 49418:
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 50358:
/***/ (function(module) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 3040:
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 41961:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(25273);

var isNativeReflectConstruct = __webpack_require__(52834);

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 79417:
/***/ (function(module) {

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

module.exports = _createClass;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 49817:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var superPropBase = __webpack_require__(24467);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 64852:
/***/ (function(module) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports.default = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 97377:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(25273);

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
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 56680:
/***/ (function(module) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 52834:
/***/ (function(module) {

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

module.exports = _isNativeReflectConstruct;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 4677:
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 37470:
/***/ (function(module) {

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

module.exports = _iterableToArrayLimit;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 36640:
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 81577:
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 66970:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(75576).default;

var assertThisInitialized = __webpack_require__(49418);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 25273:
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports.default = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 72458:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(91597);

var iterableToArrayLimit = __webpack_require__(37470);

var unsupportedIterableToArray = __webpack_require__(78593);

var nonIterableRest = __webpack_require__(36640);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 24467:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(64852);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 30063:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(27413);

var iterableToArray = __webpack_require__(4677);

var unsupportedIterableToArray = __webpack_require__(78593);

var nonIterableSpread = __webpack_require__(81577);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 78593:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(67481);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 60530:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(64852);

var setPrototypeOf = __webpack_require__(25273);

var isNativeFunction = __webpack_require__(56680);

var construct = __webpack_require__(41961);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  module.exports.default = module.exports, module.exports.__esModule = true;
  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 22917:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(3076);


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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [3268,7648], function() { return __webpack_require__(92066); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + {"3268":"09ed088d5c7a914b7ee738d21fa5a6d03bb6dd65","7648":"8c94476aecfffef8bb188161ebc5955ec9aac41a"}[chunkId] + "-" + {"3268":"495fc99c9c699ee958f9","7648":"2f225a2fee78d4883c23"}[chunkId] + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/jacdac-docs/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			2066: 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = function(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			return Promise.all([
/******/ 				__webpack_require__.e(3268),
/******/ 				__webpack_require__.e(7648)
/******/ 			]).then(next);
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;