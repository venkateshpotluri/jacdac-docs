/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 92066:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(22917);

var _asyncToGenerator = __webpack_require__(50358);

var _slicedToArray = __webpack_require__(72458);

var _toConsumableArray = __webpack_require__(30063);

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

function _arrange2(comparators) {
  var _arrange = function _arrange(items) {
    var comparatorFns = singleOrArray(comparators).map(function (comp) {
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

  var _iterator2 = _createForOfIteratorHelper(singleOrArray(selectKeys)),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var keyInput = _step2.value;

      if (typeof keyInput === "function") {
        var _processedSelectKeys;

        (_processedSelectKeys = processedSelectKeys).push.apply(_processedSelectKeys, _toConsumableArray(keyInput(items)));
      } else {
        processedSelectKeys.push(keyInput);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
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

function select(selectKeys) {
  var _select = function _select(items) {
    var processedSelectKeys = processSelectors(items, selectKeys);
    if (!processedSelectKeys.length) return items;
    return items.map(function (d) {
      var mapped = {};

      var _iterator3 = _createForOfIteratorHelper(processedSelectKeys),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var key = _step3.value;
          mapped[key] = d[key];
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return mapped;
    });
  };

  return _select;
}

var _excluded = ["worker", "data", "previousData"];
var handlers = {
  arrange: function arrange(props) {
    var column = props.column,
        descending = props.descending,
        data = props.data;
    return tidy(data, _arrange2(descending ? desc(column) : column));
  },
  drop: function drop(props) {
    var columns = props.columns,
        data = props.data;
    if (!columns) return data;else return tidy(data, select(columns.map(function (column) {
      return "-".concat(column);
    })));
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
  recordwindow: function recordwindow(props) {
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
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            message = event.data; // eslint-disable-next-line @typescript-eslint/no-unused-vars

            worker = message.worker, rest = _objectWithoutPropertiesLoose(message, _excluded);

            if (!(worker !== "data")) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return");

          case 4:
            _context.next = 6;
            return transformData(message);

          case 6:
            newData = _context.sent;
            //console.debug("Jacdac data out:", { message })
            resp = _extends({
              worker: worker
            }, rest, {
              data: newData
            });
            self.postMessage(resp);

          case 9:
          case "end":
            return _context.stop();
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

/***/ 22917:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(3076);


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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [3268], function() { return __webpack_require__(92066); })
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
/******/ 			return "" + "09ed088d5c7a914b7ee738d21fa5a6d03bb6dd65" + "-" + "495fc99c9c699ee958f9" + ".js";
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
/******/ 			return __webpack_require__.e(3268).then(next);
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