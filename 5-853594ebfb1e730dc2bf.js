(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "1jOq":
/***/ (function(module, exports) {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy;

function wrappy(fn, cb) {
  if (fn && cb) return wrappy(fn)(cb);
  if (typeof fn !== 'function') throw new TypeError('need wrapper function');
  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k];
  });
  return wrapper;

  function wrapper() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    var ret = fn.apply(this, args);
    var cb = args[args.length - 1];

    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k];
      });
    }

    return ret;
  }
}

/***/ }),

/***/ "47th":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ApiKeyAccordion; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/components/useDbValue.ts
var useDbValue = __webpack_require__("2Opq");

// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__("06ul");

// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__("FQT7");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Accordion/Accordion.js
var Accordion = __webpack_require__("6C/C");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionSummary/AccordionSummary.js
var AccordionSummary = __webpack_require__("LvTE");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__("hlFM");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionDetails/AccordionDetails.js
var AccordionDetails = __webpack_require__("Kpcq");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__("r9w1");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("iuhU");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/AccordionActions/AccordionActions.js





var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end'
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var AccordionActions_AccordionActions = /*#__PURE__*/react["forwardRef"](function AccordionActions(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "className", "disableSpacing"]);

  return /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_AccordionActions_AccordionActions = (Object(withStyles["a" /* default */])(styles, {
  name: 'MuiAccordionActions'
})(AccordionActions_AccordionActions));
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__("1iKp");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CheckCircleOutline.js
var CheckCircleOutline = __webpack_require__("aMX1");
var CheckCircleOutline_default = /*#__PURE__*/__webpack_require__.n(CheckCircleOutline);

// EXTERNAL MODULE: ./node_modules/notistack/dist/notistack.esm.js
var notistack_esm = __webpack_require__("NKQG");

// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__("W1g9");

// CONCATENATED MODULE: ./src/components/ApiKeyAccordion.tsx







 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports




function ApiKeyAccordion(props) {
  var apiName = props.apiName,
      validateKey = props.validateKey,
      instructions = props.instructions,
      title = props.title;

  var _useDbValue = Object(useDbValue["a" /* default */])(apiName, ""),
      apiKey = _useDbValue.value,
      setApiKey = _useDbValue.setValue;

  var apiKeyId = Object(react_use_id_hook_esm["b" /* useId */])();

  var _useState = Object(react["useState"])(""),
      key = _useState[0],
      setKey = _useState[1];

  var _useState2 = Object(react["useState"])(!apiKey),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      validated = _useState3[0],
      setValidated = _useState3[1];

  var _useSnackbar = Object(notistack_esm["b" /* useSnackbar */])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  Object(useEffectAsync["a" /* default */])( /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(mounted) {
      var _ref2, statusCode;

      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (apiKey) {
                _context.next = 4;
                break;
              }

              setValidated(false);
              _context.next = 16;
              break;

            case 4:
              if (!validateKey) {
                _context.next = 10;
                break;
              }

              _context.next = 7;
              return validateKey(apiKey);

            case 7:
              _context.t0 = _context.sent;
              _context.next = 11;
              break;

            case 10:
              _context.t0 = {
                statusCode: 200
              };

            case 11:
              _ref2 = _context.t0;
              statusCode = _ref2.statusCode;

              if (mounted()) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return");

            case 15:
              if (statusCode === 200) {
                setValidated(true);
                setExpanded(false);
              } else {
                setValidated(false);
                if (statusCode === 403) setApiKey(undefined);
              }

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [apiKey]);

  var handleApiChange = function handleApiChange(event) {
    setKey(event.target.value);
  };

  var handleSave = function handleSave() {
    setApiKey(key);
    setKey("");
    enqueueSnackbar("key saved...");
  };

  var handleReset = function handleReset() {
    setApiKey("");
    enqueueSnackbar("key cleared...");
  };

  var handleExpanded = function handleExpanded() {
    setExpanded(!expanded);
  };

  return /*#__PURE__*/react_default.a.createElement(Accordion["a" /* default */], {
    expanded: expanded,
    onChange: handleExpanded
  }, /*#__PURE__*/react_default.a.createElement(AccordionSummary["a" /* default */], {
    expandIcon: /*#__PURE__*/react_default.a.createElement(ExpandMore_default.a, null)
  }, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "body1"
  }, (title || "API key") + " Configuration"), validated && /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    ml: 1,
    color: "success.main"
  }, /*#__PURE__*/react_default.a.createElement(CheckCircleOutline_default.a, null))), /*#__PURE__*/react_default.a.createElement(AccordionDetails["a" /* default */], {
    style: {
      display: "block"
    }
  }, validated && /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "success"
  }, "API key ready!"), instructions, /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
    id: apiKeyId,
    autoFocus: true,
    label: "API key",
    fullWidth: true,
    value: key,
    onChange: handleApiChange
  })), /*#__PURE__*/react_default.a.createElement(esm_AccordionActions_AccordionActions, null, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Button"], {
    "aria-label": "save api key",
    disabled: !key,
    variant: "contained",
    color: "primary",
    onClick: handleSave
  }, "Save"), /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Button"], {
    "aria-label": "clear api key",
    disabled: !apiKey,
    variant: "contained",
    onClick: handleReset
  }, "Clear")));
}

/***/ }),

/***/ "5uH7":
/***/ (function(module, exports) {

module.exports = register;

function register(state, name, method, options) {
  if (typeof method !== "function") {
    throw new Error("method for before hook must be a function");
  }

  if (!options) {
    options = {};
  }

  if (Array.isArray(name)) {
    return name.reverse().reduce(function (callback, name) {
      return register.bind(null, state, name, callback, options);
    }, method)();
  }

  return Promise.resolve().then(function () {
    if (!state.registry[name]) {
      return method(options);
    }

    return state.registry[name].reduce(function (method, registered) {
      return registered.hook.bind(null, method, options);
    }, method)();
  });
}

/***/ }),

/***/ "8oxB":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "EUoV":
/***/ (function(module, exports) {

module.exports = addHook;

function addHook(state, kind, name, hook) {
  var orig = hook;

  if (!state.registry[name]) {
    state.registry[name] = [];
  }

  if (kind === "before") {
    hook = function hook(method, options) {
      return Promise.resolve().then(orig.bind(null, options)).then(method.bind(null, options));
    };
  }

  if (kind === "after") {
    hook = function hook(method, options) {
      var result;
      return Promise.resolve().then(method.bind(null, options)).then(function (result_) {
        result = result_;
        return orig(result, options);
      }).then(function () {
        return result;
      });
    };
  }

  if (kind === "error") {
    hook = function hook(method, options) {
      return Promise.resolve().then(method.bind(null, options)).catch(function (error) {
        return orig(error, options);
      });
    };
  }

  state.registry[name].push({
    hook: hook,
    orig: orig
  });
}

/***/ }),

/***/ "R+3T":
/***/ (function(module, exports) {

module.exports = removeHook;

function removeHook(state, name, method) {
  if (!state.registry[name]) {
    return;
  }

  var index = state.registry[name].map(function (registered) {
    return registered.orig;
  }).indexOf(method);

  if (index === -1) {
    return;
  }

  state.registry[name].splice(index, 1);
}

/***/ }),

/***/ "VmuJ":
/***/ (function(module, exports, __webpack_require__) {

var wrappy = __webpack_require__("1jOq");

module.exports = wrappy(once);
module.exports.strict = wrappy(onceStrict);
once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function value() {
      return once(this);
    },
    configurable: true
  });
  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function value() {
      return onceStrict(this);
    },
    configurable: true
  });
});

function once(fn) {
  var f = function f() {
    if (f.called) return f.value;
    f.called = true;
    return f.value = fn.apply(this, arguments);
  };

  f.called = false;
  return f;
}

function onceStrict(fn) {
  var f = function f() {
    if (f.called) throw new Error(f.onceError);
    f.called = true;
    return f.value = fn.apply(this, arguments);
  };

  var name = fn.name || 'Function wrapped with `once`';
  f.onceError = name + " shouldn't be called more than once";
  f.called = false;
  return f;
}

/***/ }),

/***/ "Z8pk":
/***/ (function(module, exports, __webpack_require__) {

var register = __webpack_require__("5uH7");

var addHook = __webpack_require__("EUoV");

var removeHook = __webpack_require__("R+3T"); // bind with array of arguments: https://stackoverflow.com/a/21792913


var bind = Function.bind;
var bindable = bind.bind(bind);

function bindApi(hook, state, name) {
  var removeHookRef = bindable(removeHook, null).apply(null, name ? [state, name] : [state]);
  hook.api = {
    remove: removeHookRef
  };
  hook.remove = removeHookRef;
  ['before', 'error', 'after', 'wrap'].forEach(function (kind) {
    var args = name ? [state, kind, name] : [state, kind];
    hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args);
  });
}

function HookSingular() {
  var singularHookName = 'h';
  var singularHookState = {
    registry: {}
  };
  var singularHook = register.bind(null, singularHookState, singularHookName);
  bindApi(singularHook, singularHookState, singularHookName);
  return singularHook;
}

function HookCollection() {
  var state = {
    registry: {}
  };
  var hook = register.bind(null, state);
  bindApi(hook, state);
  return hook;
}

var collectionHookDeprecationMessageDisplayed = false;

function Hook() {
  if (!collectionHookDeprecationMessageDisplayed) {
    console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4');
    collectionHookDeprecationMessageDisplayed = true;
  }

  return HookCollection();
}

Hook.Singular = HookSingular.bind();
Hook.Collection = HookCollection.bind();
module.exports = Hook; // expose constructors as a named property for TypeScript

module.exports.Hook = Hook;
module.exports.Singular = Hook.Singular;
module.exports.Collection = Hook.Collection;

/***/ }),

/***/ "aMX1":
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
  d: "M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'CheckCircleOutline');

exports.default = _default;

/***/ }),

/***/ "ha5o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ GithubPullRequestButton; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__("Ji7U");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("md7G");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("foSv");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("1OyB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("vuIU");

// EXTERNAL MODULE: ./node_modules/universal-user-agent/dist-web/index.js
var dist_web = __webpack_require__("z6pS");

// EXTERNAL MODULE: ./node_modules/before-after-hook/index.js
var before_after_hook = __webpack_require__("Z8pk");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// CONCATENATED MODULE: ./node_modules/@octokit/endpoint/node_modules/is-plain-object/dist/is-plain-object.mjs
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor, prot;
  if (isObject(o) === false) return false; // If has modified constructor

  ctor = o.constructor;
  if (ctor === undefined) return true; // If has modified prototype

  prot = ctor.prototype;
  if (isObject(prot) === false) return false; // If constructor does not have an Object-specific method

  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  } // Most likely a plain Object


  return true;
}


// CONCATENATED MODULE: ./node_modules/@octokit/endpoint/dist-web/index.js





function lowercaseKeys(object) {
  if (!object) {
    return {};
  }

  return Object.keys(object).reduce(function (newObj, key) {
    newObj[key.toLowerCase()] = object[key];
    return newObj;
  }, {});
}

function mergeDeep(defaults, options) {
  var result = Object.assign({}, defaults);
  Object.keys(options).forEach(function (key) {
    if (isPlainObject(options[key])) {
      if (!(key in defaults)) Object.assign(result, Object(defineProperty["a" /* default */])({}, key, options[key]));else result[key] = mergeDeep(defaults[key], options[key]);
    } else {
      Object.assign(result, Object(defineProperty["a" /* default */])({}, key, options[key]));
    }
  });
  return result;
}

function removeUndefinedProperties(obj) {
  for (var key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }

  return obj;
}

function merge(defaults, route, options) {
  if (typeof route === "string") {
    var _route$split = route.split(" "),
        _route$split2 = Object(slicedToArray["a" /* default */])(_route$split, 2),
        method = _route$split2[0],
        url = _route$split2[1];

    options = Object.assign(url ? {
      method: method,
      url: url
    } : {
      url: method
    }, options);
  } else {
    options = Object.assign({}, route);
  } // lowercase header names before merging with defaults to avoid duplicates


  options.headers = lowercaseKeys(options.headers); // remove properties with undefined values before merging

  removeUndefinedProperties(options);
  removeUndefinedProperties(options.headers);
  var mergedOptions = mergeDeep(defaults || {}, options); // mediaType.previews arrays are merged, instead of overwritten

  if (defaults && defaults.mediaType.previews.length) {
    mergedOptions.mediaType.previews = defaults.mediaType.previews.filter(function (preview) {
      return !mergedOptions.mediaType.previews.includes(preview);
    }).concat(mergedOptions.mediaType.previews);
  }

  mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map(function (preview) {
    return preview.replace(/-preview/, "");
  });
  return mergedOptions;
}

function addQueryParameters(url, parameters) {
  var separator = /\?/.test(url) ? "&" : "?";
  var names = Object.keys(parameters);

  if (names.length === 0) {
    return url;
  }

  return url + separator + names.map(function (name) {
    if (name === "q") {
      return "q=" + parameters.q.split("+").map(encodeURIComponent).join("+");
    }

    return "".concat(name, "=").concat(encodeURIComponent(parameters[name]));
  }).join("&");
}

var urlVariableRegex = /\{[^}]+\}/g;

function removeNonChars(variableName) {
  return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}

function extractUrlVariableNames(url) {
  var matches = url.match(urlVariableRegex);

  if (!matches) {
    return [];
  }

  return matches.map(removeNonChars).reduce(function (a, b) {
    return a.concat(b);
  }, []);
}

function omit(object, keysToOmit) {
  return Object.keys(object).filter(function (option) {
    return !keysToOmit.includes(option);
  }).reduce(function (obj, key) {
    obj[key] = object[key];
    return obj;
  }, {});
} // Based on https://github.com/bramstein/url-template, licensed under BSD
// TODO: create separate package.
//
// Copyright (c) 2012-2014, Bram Stein
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//  1. Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in the
//     documentation and/or other materials provided with the distribution.
//  3. The name of the author may not be used to endorse or promote products
//     derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
// EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* istanbul ignore file */


function encodeReserved(str) {
  return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
    if (!/%[0-9A-Fa-f]/.test(part)) {
      part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
    }

    return part;
  }).join("");
}

function encodeUnreserved(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

function encodeValue(operator, value, key) {
  value = operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);

  if (key) {
    return encodeUnreserved(key) + "=" + value;
  } else {
    return value;
  }
}

function isDefined(value) {
  return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
  return operator === ";" || operator === "&" || operator === "?";
}

function getValues(context, operator, key, modifier) {
  var value = context[key],
      result = [];

  if (isDefined(value) && value !== "") {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      value = value.toString();

      if (modifier && modifier !== "*") {
        value = value.substring(0, parseInt(modifier, 10));
      }

      result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
    } else {
      if (modifier === "*") {
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function (value) {
            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
          });
        } else {
          Object.keys(value).forEach(function (k) {
            if (isDefined(value[k])) {
              result.push(encodeValue(operator, value[k], k));
            }
          });
        }
      } else {
        var tmp = [];

        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function (value) {
            tmp.push(encodeValue(operator, value));
          });
        } else {
          Object.keys(value).forEach(function (k) {
            if (isDefined(value[k])) {
              tmp.push(encodeUnreserved(k));
              tmp.push(encodeValue(operator, value[k].toString()));
            }
          });
        }

        if (isKeyOperator(operator)) {
          result.push(encodeUnreserved(key) + "=" + tmp.join(","));
        } else if (tmp.length !== 0) {
          result.push(tmp.join(","));
        }
      }
    }
  } else {
    if (operator === ";") {
      if (isDefined(value)) {
        result.push(encodeUnreserved(key));
      }
    } else if (value === "" && (operator === "&" || operator === "?")) {
      result.push(encodeUnreserved(key) + "=");
    } else if (value === "") {
      result.push("");
    }
  }

  return result;
}

function parseUrl(template) {
  return {
    expand: expand.bind(null, template)
  };
}

function expand(template, context) {
  var operators = ["+", "#", ".", "/", ";", "?", "&"];
  return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
    if (expression) {
      var operator = "";
      var values = [];

      if (operators.indexOf(expression.charAt(0)) !== -1) {
        operator = expression.charAt(0);
        expression = expression.substr(1);
      }

      expression.split(/,/g).forEach(function (variable) {
        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
        values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
      });

      if (operator && operator !== "+") {
        var separator = ",";

        if (operator === "?") {
          separator = "&";
        } else if (operator !== "#") {
          separator = operator;
        }

        return (values.length !== 0 ? operator : "") + values.join(separator);
      } else {
        return values.join(",");
      }
    } else {
      return encodeReserved(literal);
    }
  });
}

function parse(options) {
  // https://fetch.spec.whatwg.org/#methods
  var method = options.method.toUpperCase(); // replace :varname with {varname} to make it RFC 6570 compatible

  var url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
  var headers = Object.assign({}, options.headers);
  var body;
  var parameters = omit(options, ["method", "baseUrl", "url", "headers", "request", "mediaType"]); // extract variable names from URL to calculate remaining variables later

  var urlVariableNames = extractUrlVariableNames(url);
  url = parseUrl(url).expand(parameters);

  if (!/^http/.test(url)) {
    url = options.baseUrl + url;
  }

  var omittedParameters = Object.keys(options).filter(function (option) {
    return urlVariableNames.includes(option);
  }).concat("baseUrl");
  var remainingParameters = omit(parameters, omittedParameters);
  var isBinaryRequest = /application\/octet-stream/i.test(headers.accept);

  if (!isBinaryRequest) {
    if (options.mediaType.format) {
      // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
      headers.accept = headers.accept.split(/,/).map(function (preview) {
        return preview.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, "application/vnd$1$2.".concat(options.mediaType.format));
      }).join(",");
    }

    if (options.mediaType.previews.length) {
      var previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
      headers.accept = previewsFromAcceptHeader.concat(options.mediaType.previews).map(function (preview) {
        var format = options.mediaType.format ? ".".concat(options.mediaType.format) : "+json";
        return "application/vnd.github.".concat(preview, "-preview").concat(format);
      }).join(",");
    }
  } // for GET/HEAD requests, set URL query parameters from remaining parameters
  // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters


  if (["GET", "HEAD"].includes(method)) {
    url = addQueryParameters(url, remainingParameters);
  } else {
    if ("data" in remainingParameters) {
      body = remainingParameters.data;
    } else {
      if (Object.keys(remainingParameters).length) {
        body = remainingParameters;
      } else {
        headers["content-length"] = 0;
      }
    }
  } // default content-type for JSON if body is set


  if (!headers["content-type"] && typeof body !== "undefined") {
    headers["content-type"] = "application/json; charset=utf-8";
  } // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
  // fetch does not allow to set `content-length` header, but we can set body to an empty string


  if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
    body = "";
  } // Only return body/request keys if present


  return Object.assign({
    method: method,
    url: url,
    headers: headers
  }, typeof body !== "undefined" ? {
    body: body
  } : null, options.request ? {
    request: options.request
  } : null);
}

function endpointWithDefaults(defaults, route, options) {
  return parse(merge(defaults, route, options));
}

function withDefaults(oldDefaults, newDefaults) {
  var DEFAULTS = merge(oldDefaults, newDefaults);
  var endpoint = endpointWithDefaults.bind(null, DEFAULTS);
  return Object.assign(endpoint, {
    DEFAULTS: DEFAULTS,
    defaults: withDefaults.bind(null, DEFAULTS),
    merge: merge.bind(null, DEFAULTS),
    parse: parse
  });
}

var VERSION = "6.0.11";
var userAgent = "octokit-endpoint.js/".concat(VERSION, " ").concat(Object(dist_web["a" /* getUserAgent */])()); // DEFAULTS has all properties set that EndpointOptions has, except url.
// So we use RequestParameters and add method as additional required property.

var DEFAULTS = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": userAgent
  },
  mediaType: {
    format: "",
    previews: []
  }
};
var dist_web_endpoint = withDefaults(null, DEFAULTS);

// CONCATENATED MODULE: ./node_modules/@octokit/request/node_modules/is-plain-object/dist/is-plain-object.mjs
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function is_plain_object_isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function is_plain_object_isPlainObject(o) {
  var ctor, prot;
  if (is_plain_object_isObject(o) === false) return false; // If has modified constructor

  ctor = o.constructor;
  if (ctor === undefined) return true; // If has modified prototype

  prot = ctor.prototype;
  if (is_plain_object_isObject(prot) === false) return false; // If constructor does not have an Object-specific method

  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  } // Most likely a plain Object


  return true;
}


// EXTERNAL MODULE: ./node_modules/node-fetch/browser.js
var browser = __webpack_require__("oY9k");
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("JX7q");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js + 1 modules
var wrapNativeSuper = __webpack_require__("kHIg");

// CONCATENATED MODULE: ./node_modules/deprecation/dist-web/index.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var dist_web_Deprecation = /*#__PURE__*/function (_Error) {
  Object(inherits["a" /* default */])(Deprecation, _Error);

  var _super = _createSuper(Deprecation);

  function Deprecation(message) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Deprecation);

    _this = _super.call(this, message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(Object(assertThisInitialized["a" /* default */])(_this), _this.constructor);
    }

    _this.name = 'Deprecation';
    return _this;
  }

  return Deprecation;
}( /*#__PURE__*/Object(wrapNativeSuper["a" /* default */])(Error));


// EXTERNAL MODULE: ./node_modules/once/once.js
var once = __webpack_require__("VmuJ");
var once_default = /*#__PURE__*/__webpack_require__.n(once);

// CONCATENATED MODULE: ./node_modules/@octokit/request-error/dist-web/index.js







function dist_web_createSuper(Derived) { var hasNativeReflectConstruct = dist_web_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function dist_web_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var logOnce = once_default()(function (deprecation) {
  return console.warn(deprecation);
});
/**
 * Error with extra properties to help with debugging
 */

var dist_web_RequestError = /*#__PURE__*/function (_Error) {
  Object(inherits["a" /* default */])(RequestError, _Error);

  var _super = dist_web_createSuper(RequestError);

  function RequestError(message, statusCode, options) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, RequestError);

    _this = _super.call(this, message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(Object(assertThisInitialized["a" /* default */])(_this), _this.constructor);
    }

    _this.name = "HttpError";
    _this.status = statusCode;
    Object.defineProperty(Object(assertThisInitialized["a" /* default */])(_this), "code", {
      get: function get() {
        logOnce(new dist_web_Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
        return statusCode;
      }
    });
    _this.headers = options.headers || {}; // redact request credentials without mutating original request options

    var requestCopy = Object.assign({}, options.request);

    if (options.request.headers.authorization) {
      requestCopy.headers = Object.assign({}, options.request.headers, {
        authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
      });
    }

    requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
    // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
    .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]") // OAuth tokens can be passed as URL query parameters, although it is not recommended
    // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
    .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
    _this.request = requestCopy;
    return _this;
  }

  return RequestError;
}( /*#__PURE__*/Object(wrapNativeSuper["a" /* default */])(Error));


// CONCATENATED MODULE: ./node_modules/@octokit/request/dist-web/index.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var dist_web_VERSION = "5.4.14";

function getBufferResponse(response) {
  return response.arrayBuffer();
}

function fetchWrapper(requestOptions) {
  if (is_plain_object_isPlainObject(requestOptions.body) || Array.isArray(requestOptions.body)) {
    requestOptions.body = JSON.stringify(requestOptions.body);
  }

  var headers = {};
  var status;
  var url;
  var fetch = requestOptions.request && requestOptions.request.fetch || browser_default.a;
  return fetch(requestOptions.url, Object.assign({
    method: requestOptions.method,
    body: requestOptions.body,
    headers: requestOptions.headers,
    redirect: requestOptions.redirect
  }, requestOptions.request)).then(function (response) {
    url = response.url;
    status = response.status;

    var _iterator = _createForOfIteratorHelper(response.headers),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var keyAndValue = _step.value;
        headers[keyAndValue[0]] = keyAndValue[1];
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (status === 204 || status === 205) {
      return;
    } // GitHub API returns 200 for HEAD requests


    if (requestOptions.method === "HEAD") {
      if (status < 400) {
        return;
      }

      throw new dist_web_RequestError(response.statusText, status, {
        headers: headers,
        request: requestOptions
      });
    }

    if (status === 304) {
      throw new dist_web_RequestError("Not modified", status, {
        headers: headers,
        request: requestOptions
      });
    }

    if (status >= 400) {
      return response.text().then(function (message) {
        var error = new dist_web_RequestError(message, status, {
          headers: headers,
          request: requestOptions
        });

        try {
          var responseBody = JSON.parse(error.message);
          Object.assign(error, responseBody);
          var errors = responseBody.errors; // Assumption `errors` would always be in Array format

          error.message = error.message + ": " + errors.map(JSON.stringify).join(", ");
        } catch (e) {// ignore, see octokit/rest.js#684
        }

        throw error;
      });
    }

    var contentType = response.headers.get("content-type");

    if (/application\/json/.test(contentType)) {
      return response.json();
    }

    if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
      return response.text();
    }

    return getBufferResponse(response);
  }).then(function (data) {
    return {
      status: status,
      url: url,
      headers: headers,
      data: data
    };
  }).catch(function (error) {
    if (error instanceof dist_web_RequestError) {
      throw error;
    }

    throw new dist_web_RequestError(error.message, 500, {
      headers: headers,
      request: requestOptions
    });
  });
}

function dist_web_withDefaults(oldEndpoint, newDefaults) {
  var endpoint = oldEndpoint.defaults(newDefaults);

  var newApi = function newApi(route, parameters) {
    var endpointOptions = endpoint.merge(route, parameters);

    if (!endpointOptions.request || !endpointOptions.request.hook) {
      return fetchWrapper(endpoint.parse(endpointOptions));
    }

    var request = function request(route, parameters) {
      return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)));
    };

    Object.assign(request, {
      endpoint: endpoint,
      defaults: dist_web_withDefaults.bind(null, endpoint)
    });
    return endpointOptions.request.hook(request, endpointOptions);
  };

  return Object.assign(newApi, {
    endpoint: endpoint,
    defaults: dist_web_withDefaults.bind(null, endpoint)
  });
}

var dist_web_request = dist_web_withDefaults(dist_web_endpoint, {
  headers: {
    "user-agent": "octokit-request.js/".concat(dist_web_VERSION, " ").concat(Object(dist_web["a" /* getUserAgent */])())
  }
});

// CONCATENATED MODULE: ./node_modules/@octokit/graphql/dist-web/index.js







function graphql_dist_web_createSuper(Derived) { var hasNativeReflectConstruct = graphql_dist_web_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function graphql_dist_web_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var graphql_dist_web_VERSION = "4.6.0";

var dist_web_GraphqlError = /*#__PURE__*/function (_Error) {
  Object(inherits["a" /* default */])(GraphqlError, _Error);

  var _super = graphql_dist_web_createSuper(GraphqlError);

  function GraphqlError(request, response) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, GraphqlError);

    var message = response.data.errors[0].message;
    _this = _super.call(this, message);
    Object.assign(Object(assertThisInitialized["a" /* default */])(_this), response.data);
    Object.assign(Object(assertThisInitialized["a" /* default */])(_this), {
      headers: response.headers
    });
    _this.name = "GraphqlError";
    _this.request = request; // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(Object(assertThisInitialized["a" /* default */])(_this), _this.constructor);
    }

    return _this;
  }

  return GraphqlError;
}( /*#__PURE__*/Object(wrapNativeSuper["a" /* default */])(Error));

var NON_VARIABLE_OPTIONS = ["method", "baseUrl", "url", "headers", "request", "query", "mediaType"];
var GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;

function graphql(request, query, options) {
  if (typeof query === "string" && options && "query" in options) {
    return Promise.reject(new Error("[@octokit/graphql] \"query\" cannot be used as variable name"));
  }

  var parsedOptions = typeof query === "string" ? Object.assign({
    query: query
  }, options) : query;
  var requestOptions = Object.keys(parsedOptions).reduce(function (result, key) {
    if (NON_VARIABLE_OPTIONS.includes(key)) {
      result[key] = parsedOptions[key];
      return result;
    }

    if (!result.variables) {
      result.variables = {};
    }

    result.variables[key] = parsedOptions[key];
    return result;
  }, {}); // workaround for GitHub Enterprise baseUrl set with /api/v3 suffix
  // https://github.com/octokit/auth-app.js/issues/111#issuecomment-657610451

  var baseUrl = parsedOptions.baseUrl || request.endpoint.DEFAULTS.baseUrl;

  if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
    requestOptions.url = baseUrl.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql");
  }

  return request(requestOptions).then(function (response) {
    if (response.data.errors) {
      var headers = {};

      for (var _i = 0, _Object$keys = Object.keys(response.headers); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        headers[key] = response.headers[key];
      }

      throw new dist_web_GraphqlError(requestOptions, {
        headers: headers,
        data: response.data
      });
    }

    return response.data.data;
  });
}

function graphql_dist_web_withDefaults(request$1, newDefaults) {
  var newRequest = request$1.defaults(newDefaults);

  var newApi = function newApi(query, options) {
    return graphql(newRequest, query, options);
  };

  return Object.assign(newApi, {
    defaults: graphql_dist_web_withDefaults.bind(null, newRequest),
    endpoint: dist_web_request.endpoint
  });
}

var graphql$1 = graphql_dist_web_withDefaults(dist_web_request, {
  headers: {
    "user-agent": "octokit-graphql.js/".concat(graphql_dist_web_VERSION, " ").concat(Object(dist_web["a" /* getUserAgent */])())
  },
  method: "POST",
  url: "/graphql"
});

function withCustomRequest(customRequest) {
  return graphql_dist_web_withDefaults(customRequest, {
    method: "POST",
    url: "/graphql"
  });
}


// CONCATENATED MODULE: ./node_modules/@octokit/auth-token/dist-web/index.js



function dist_web_auth(_x) {
  return auth_token_dist_web_auth.apply(this, arguments);
}
/**
 * Prefix token for usage in the Authorization header
 *
 * @param token OAuth token or JSON Web Token
 */


function auth_token_dist_web_auth() {
  auth_token_dist_web_auth = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(token) {
    var tokenType;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tokenType = token.split(/\./).length === 3 ? "app" : /^v\d+\./.test(token) ? "installation" : "oauth";
            return _context.abrupt("return", {
              type: "token",
              token: token,
              tokenType: tokenType
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return auth_token_dist_web_auth.apply(this, arguments);
}

function withAuthorizationPrefix(token) {
  if (token.split(/\./).length === 3) {
    return "bearer ".concat(token);
  }

  return "token ".concat(token);
}

function dist_web_hook(_x2, _x3, _x4, _x5) {
  return _hook.apply(this, arguments);
}

function _hook() {
  _hook = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2(token, request, route, parameters) {
    var endpoint;
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            endpoint = request.endpoint.merge(route, parameters);
            endpoint.headers.authorization = withAuthorizationPrefix(token);
            return _context2.abrupt("return", request(endpoint));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _hook.apply(this, arguments);
}

var createTokenAuth = function createTokenAuth(token) {
  if (!token) {
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  }

  if (typeof token !== "string") {
    throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
  }

  token = token.replace(/^(token|bearer) +/i, "");
  return Object.assign(dist_web_auth.bind(null, token), {
    hook: dist_web_hook.bind(null, token)
  });
};


// CONCATENATED MODULE: ./node_modules/@octokit/core/dist-web/index.js








function core_dist_web_createSuper(Derived) { var hasNativeReflectConstruct = core_dist_web_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function core_dist_web_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var core_dist_web_VERSION = "3.2.5";

var dist_web_Octokit = /*#__PURE__*/function () {
  function Octokit() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(classCallCheck["a" /* default */])(this, Octokit);

    var hook = new before_after_hook["Collection"]();
    var requestDefaults = {
      baseUrl: dist_web_request.endpoint.DEFAULTS.baseUrl,
      headers: {},
      request: Object.assign({}, options.request, {
        hook: hook.bind(null, "request")
      }),
      mediaType: {
        previews: [],
        format: ""
      }
    }; // prepend default user agent with `options.userAgent` if set

    requestDefaults.headers["user-agent"] = [options.userAgent, "octokit-core.js/".concat(core_dist_web_VERSION, " ").concat(Object(dist_web["a" /* getUserAgent */])())].filter(Boolean).join(" ");

    if (options.baseUrl) {
      requestDefaults.baseUrl = options.baseUrl;
    }

    if (options.previews) {
      requestDefaults.mediaType.previews = options.previews;
    }

    if (options.timeZone) {
      requestDefaults.headers["time-zone"] = options.timeZone;
    }

    this.request = dist_web_request.defaults(requestDefaults);
    this.graphql = withCustomRequest(this.request).defaults(requestDefaults);
    this.log = Object.assign({
      debug: function debug() {},
      info: function info() {},
      warn: console.warn.bind(console),
      error: console.error.bind(console)
    }, options.log);
    this.hook = hook; // (1) If neither `options.authStrategy` nor `options.auth` are set, the `octokit` instance
    //     is unauthenticated. The `this.auth()` method is a no-op and no request hook is registered.
    // (2) If only `options.auth` is set, use the default token authentication strategy.
    // (3) If `options.authStrategy` is set then use it and pass in `options.auth`. Always pass own request as many strategies accept a custom request instance.
    // TODO: type `options.auth` based on `options.authStrategy`.

    if (!options.authStrategy) {
      if (!options.auth) {
        // (1)
        this.auth = /*#__PURE__*/Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", {
                    type: "unauthenticated"
                  });

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
      } else {
        // (2)
        var auth = createTokenAuth(options.auth); // @ts-ignore  ¯\_(ツ)_/¯

        hook.wrap("request", auth.hook);
        this.auth = auth;
      }
    } else {
      var authStrategy = options.authStrategy,
          otherOptions = Object(objectWithoutProperties["a" /* default */])(options, ["authStrategy"]);

      var _auth = authStrategy(Object.assign({
        request: this.request,
        log: this.log,
        // we pass the current octokit instance as well as its constructor options
        // to allow for authentication strategies that return a new octokit instance
        // that shares the same internal state as the current one. The original
        // requirement for this was the "event-octokit" authentication strategy
        // of https://github.com/probot/octokit-auth-probot.
        octokit: this,
        octokitOptions: otherOptions
      }, options.auth)); // @ts-ignore  ¯\_(ツ)_/¯


      hook.wrap("request", _auth.hook);
      this.auth = _auth;
    } // apply plugins
    // https://stackoverflow.com/a/16345172


    var classConstructor = this.constructor;
    classConstructor.plugins.forEach(function (plugin) {
      Object.assign(_this, plugin(_this, options));
    });
  }

  Object(createClass["a" /* default */])(Octokit, null, [{
    key: "defaults",
    value: function defaults(_defaults) {
      var OctokitWithDefaults = /*#__PURE__*/function (_this2) {
        Object(inherits["a" /* default */])(OctokitWithDefaults, _this2);

        var _super = core_dist_web_createSuper(OctokitWithDefaults);

        function OctokitWithDefaults() {
          var _this3;

          Object(classCallCheck["a" /* default */])(this, OctokitWithDefaults);

          var options = (arguments.length <= 0 ? undefined : arguments[0]) || {};

          if (typeof _defaults === "function") {
            _this3 = _super.call(this, _defaults(options));
            return Object(possibleConstructorReturn["a" /* default */])(_this3);
          }

          return _super.call(this, Object.assign({}, _defaults, options, options.userAgent && _defaults.userAgent ? {
            userAgent: "".concat(options.userAgent, " ").concat(_defaults.userAgent)
          } : null));
        }

        return OctokitWithDefaults;
      }(this);

      return OctokitWithDefaults;
    }
    /**
     * Attach a plugin (or many) to your Octokit instance.
     *
     * @example
     * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
     */

  }, {
    key: "plugin",
    value: function plugin() {
      var _a;

      var currentPlugins = this.plugins;

      for (var _len = arguments.length, newPlugins = new Array(_len), _key = 0; _key < _len; _key++) {
        newPlugins[_key] = arguments[_key];
      }

      var NewOctokit = (_a = /*#__PURE__*/function (_this4) {
        Object(inherits["a" /* default */])(_a, _this4);

        var _super2 = core_dist_web_createSuper(_a);

        function _a() {
          Object(classCallCheck["a" /* default */])(this, _a);

          return _super2.apply(this, arguments);
        }

        return _a;
      }(this), _a.plugins = currentPlugins.concat(newPlugins.filter(function (plugin) {
        return !currentPlugins.includes(plugin);
      })), _a);
      return NewOctokit;
    }
  }]);

  return Octokit;
}();

dist_web_Octokit.VERSION = core_dist_web_VERSION;
dist_web_Octokit.plugins = [];

// CONCATENATED MODULE: ./node_modules/octokit-plugin-create-pull-request/dist-web/index.js




function dist_web_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = dist_web_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function dist_web_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dist_web_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dist_web_arrayLikeToArray(o, minLen); }

function dist_web_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function valueToTreeObject(_x, _x2, _x3, _x4, _x5) {
  return _valueToTreeObject.apply(this, arguments);
}

function _valueToTreeObject() {
  _valueToTreeObject = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(octokit, owner, repo, path, value) {
    var _yield$octokit$reques, data, blobSha;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof value === "string")) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", {
              path: path,
              mode: "100644",
              content: value
            });

          case 2:
            _context.next = 4;
            return octokit.request("POST /repos/{owner}/{repo}/git/blobs", _objectSpread({
              owner: owner,
              repo: repo
            }, value));

          case 4:
            _yield$octokit$reques = _context.sent;
            data = _yield$octokit$reques.data;
            blobSha = data.sha;
            return _context.abrupt("return", {
              path: path,
              mode: "100644",
              sha: blobSha
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _valueToTreeObject.apply(this, arguments);
}

function createTree(_x6, _x7) {
  return _createTree.apply(this, arguments);
}

function _createTree() {
  _createTree = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee3(state, changes) {
    var octokit, owner, repo, fork, latestCommitSha, latestCommitTreeSha, tree, _yield$octokit$reques3, newTreeSha;

    return regenerator_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            octokit = state.octokit, owner = state.owner, repo = state.repo, fork = state.fork, latestCommitSha = state.latestCommitSha, latestCommitTreeSha = state.latestCommitTreeSha;
            _context3.next = 3;
            return Promise.all(Object.keys(changes.files).map( /*#__PURE__*/function () {
              var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2(path) {
                var value, result, _yield$octokit$reques2, file;

                return regenerator_default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        value = changes.files[path];

                        if (!(value === null)) {
                          _context2.next = 11;
                          break;
                        }

                        _context2.prev = 2;
                        _context2.next = 5;
                        return octokit.request("HEAD /repos/{owner}/{repo}/contents/:path", {
                          owner: fork,
                          repo: repo,
                          ref: latestCommitSha,
                          path: path
                        });

                      case 5:
                        return _context2.abrupt("return", {
                          path: path,
                          mode: "100644",
                          sha: null
                        });

                      case 8:
                        _context2.prev = 8;
                        _context2.t0 = _context2["catch"](2);
                        return _context2.abrupt("return");

                      case 11:
                        if (!(typeof value === "function")) {
                          _context2.next = 32;
                          break;
                        }

                        _context2.prev = 12;
                        _context2.next = 15;
                        return octokit.request("GET /repos/{owner}/{repo}/contents/:path", {
                          owner: fork,
                          repo: repo,
                          ref: latestCommitSha,
                          path: path
                        });

                      case 15:
                        _yield$octokit$reques2 = _context2.sent;
                        file = _yield$octokit$reques2.data;
                        _context2.next = 19;
                        return value(Object.assign(file, {
                          exists: true
                        }));

                      case 19:
                        result = _context2.sent;
                        _context2.next = 29;
                        break;

                      case 22:
                        _context2.prev = 22;
                        _context2.t1 = _context2["catch"](12);

                        if (!(_context2.t1.status !== 404)) {
                          _context2.next = 26;
                          break;
                        }

                        throw _context2.t1;

                      case 26:
                        _context2.next = 28;
                        return value({
                          exists: false
                        });

                      case 28:
                        result = _context2.sent;

                      case 29:
                        if (!(result === null || typeof result === "undefined")) {
                          _context2.next = 31;
                          break;
                        }

                        return _context2.abrupt("return");

                      case 31:
                        return _context2.abrupt("return", valueToTreeObject(octokit, owner, repo, path, result));

                      case 32:
                        return _context2.abrupt("return", valueToTreeObject(octokit, owner, repo, path, value));

                      case 33:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[2, 8], [12, 22]]);
              }));

              return function (_x13) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 3:
            tree = _context3.sent.filter(Boolean);

            if (!(tree.length === 0)) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", null);

          case 6:
            _context3.next = 8;
            return octokit.request("POST /repos/{owner}/{repo}/git/trees", {
              owner: fork,
              repo: repo,
              base_tree: latestCommitTreeSha,
              tree: tree
            });

          case 8:
            _yield$octokit$reques3 = _context3.sent;
            newTreeSha = _yield$octokit$reques3.data.sha;
            return _context3.abrupt("return", newTreeSha);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _createTree.apply(this, arguments);
}

function createCommit(_x8, _x9, _x10) {
  return _createCommit.apply(this, arguments);
}

function _createCommit() {
  _createCommit = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee4(state, treeCreated, changes) {
    var octokit, repo, fork, latestCommitSha, message, _yield$octokit$reques4, latestCommit;

    return regenerator_default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            octokit = state.octokit, repo = state.repo, fork = state.fork, latestCommitSha = state.latestCommitSha;
            message = treeCreated ? changes.commit : typeof changes.emptyCommit === "string" ? changes.emptyCommit : changes.commit; // https://developer.github.com/v3/git/commits/#create-a-commit

            _context4.next = 4;
            return octokit.request("POST /repos/{owner}/{repo}/git/commits", {
              owner: fork,
              repo: repo,
              message: message,
              tree: state.latestCommitTreeSha,
              parents: [latestCommitSha]
            });

          case 4:
            _yield$octokit$reques4 = _context4.sent;
            latestCommit = _yield$octokit$reques4.data;
            return _context4.abrupt("return", latestCommit.sha);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _createCommit.apply(this, arguments);
}

function composeCreatePullRequest(_x11, _x12) {
  return _composeCreatePullRequest.apply(this, arguments);
}

function _composeCreatePullRequest() {
  _composeCreatePullRequest = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee5(octokit, _ref) {
    var owner, repo, title, body, base, head, createWhenEmpty, changesOption, _ref$draft, draft, changes, state, _yield$octokit$reques5, repository, headers, isUser, user, forks, hasFork, _yield$octokit$reques6, _yield$octokit$reques7, latestCommit, baseCommitTreeSha, _iterator, _step, change, treeCreated, latestCommitTreeSha, hasNoChanges;

    return regenerator_default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            owner = _ref.owner, repo = _ref.repo, title = _ref.title, body = _ref.body, base = _ref.base, head = _ref.head, createWhenEmpty = _ref.createWhenEmpty, changesOption = _ref.changes, _ref$draft = _ref.draft, draft = _ref$draft === void 0 ? false : _ref$draft;
            changes = Array.isArray(changesOption) ? changesOption : [changesOption];

            if (!(changes.length === 0)) {
              _context5.next = 4;
              break;
            }

            throw new Error('[octokit-plugin-create-pull-request] "changes" cannot be an empty array');

          case 4:
            state = {
              octokit: octokit,
              owner: owner,
              repo: repo
            }; // https://developer.github.com/v3/repos/#get-a-repository

            _context5.next = 7;
            return octokit.request("GET /repos/{owner}/{repo}", {
              owner: owner,
              repo: repo
            });

          case 7:
            _yield$octokit$reques5 = _context5.sent;
            repository = _yield$octokit$reques5.data;
            headers = _yield$octokit$reques5.headers;
            isUser = !!headers["x-oauth-scopes"];

            if (repository.permissions) {
              _context5.next = 13;
              break;
            }

            throw new Error("[octokit-plugin-create-pull-request] Missing authentication");

          case 13:
            if (!base) {
              base = repository.default_branch;
            }

            state.fork = owner;

            if (!(isUser && !repository.permissions.push)) {
              _context5.next = 27;
              break;
            }

            _context5.next = 18;
            return octokit.request("GET /user");

          case 18:
            user = _context5.sent;
            _context5.next = 21;
            return octokit.request("GET /repos/{owner}/{repo}/forks", {
              owner: owner,
              repo: repo
            });

          case 21:
            forks = _context5.sent;
            hasFork = forks.data.find(
            /* istanbul ignore next - fork owner can be null, but we don't test that */
            function (fork) {
              return fork.owner && fork.owner.login === user.data.login;
            });

            if (hasFork) {
              _context5.next = 26;
              break;
            }

            _context5.next = 26;
            return octokit.request("POST /repos/{owner}/{repo}/forks", {
              owner: owner,
              repo: repo
            });

          case 26:
            state.fork = user.data.login;

          case 27:
            _context5.next = 29;
            return octokit.request("GET /repos/{owner}/{repo}/commits", {
              owner: owner,
              repo: repo,
              sha: base,
              per_page: 1
            });

          case 29:
            _yield$octokit$reques6 = _context5.sent;
            _yield$octokit$reques7 = Object(slicedToArray["a" /* default */])(_yield$octokit$reques6.data, 1);
            latestCommit = _yield$octokit$reques7[0];
            state.latestCommitSha = latestCommit.sha;
            state.latestCommitTreeSha = latestCommit.commit.tree.sha;
            baseCommitTreeSha = latestCommit.commit.tree.sha;
            _iterator = dist_web_createForOfIteratorHelper(changes);
            _context5.prev = 36;

            _iterator.s();

          case 38:
            if ((_step = _iterator.n()).done) {
              _context5.next = 52;
              break;
            }

            change = _step.value;
            treeCreated = false;

            if (!(change.files && Object.keys(change.files).length)) {
              _context5.next = 46;
              break;
            }

            _context5.next = 44;
            return createTree(state, change);

          case 44:
            latestCommitTreeSha = _context5.sent;

            if (latestCommitTreeSha) {
              state.latestCommitTreeSha = latestCommitTreeSha;
              treeCreated = true;
            }

          case 46:
            if (!(treeCreated || change.emptyCommit !== false)) {
              _context5.next = 50;
              break;
            }

            _context5.next = 49;
            return createCommit(state, treeCreated, change);

          case 49:
            state.latestCommitSha = _context5.sent;

          case 50:
            _context5.next = 38;
            break;

          case 52:
            _context5.next = 57;
            break;

          case 54:
            _context5.prev = 54;
            _context5.t0 = _context5["catch"](36);

            _iterator.e(_context5.t0);

          case 57:
            _context5.prev = 57;

            _iterator.f();

            return _context5.finish(57);

          case 60:
            hasNoChanges = baseCommitTreeSha === state.latestCommitTreeSha;

            if (!(hasNoChanges && createWhenEmpty === false)) {
              _context5.next = 63;
              break;
            }

            return _context5.abrupt("return", null);

          case 63:
            _context5.next = 65;
            return octokit.request("POST /repos/{owner}/{repo}/git/refs", {
              owner: state.fork,
              repo: repo,
              sha: state.latestCommitSha,
              ref: "refs/heads/".concat(head)
            });

          case 65:
            _context5.next = 67;
            return octokit.request("POST /repos/{owner}/{repo}/pulls", {
              owner: owner,
              repo: repo,
              head: "".concat(state.fork, ":").concat(head),
              base: base,
              title: title,
              body: body,
              draft: draft
            });

          case 67:
            return _context5.abrupt("return", _context5.sent);

          case 68:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[36, 54, 57, 60]]);
  }));
  return _composeCreatePullRequest.apply(this, arguments);
}

var octokit_plugin_create_pull_request_dist_web_VERSION = "3.9.3";
/**
 * @param octokit Octokit instance
 */

function createPullRequest(octokit) {
  return {
    createPullRequest: composeCreatePullRequest.bind(null, octokit)
  };
}

createPullRequest.VERSION = octokit_plugin_create_pull_request_dist_web_VERSION;

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__("r9w1");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__("kfFl");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__("EQI2");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js




var styles = {
  /* Styles applied to the root element. */
  root: {
    marginBottom: 12
  }
};
var DialogContentText_DialogContentText = /*#__PURE__*/react["forwardRef"](function DialogContentText(props, ref) {
  return /*#__PURE__*/react["createElement"](Typography["a" /* default */], Object(esm_extends["a" /* default */])({
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: ref
  }, props));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_DialogContentText_DialogContentText = (Object(withStyles["a" /* default */])(styles, {
  name: 'MuiDialogContentText'
})(DialogContentText_DialogContentText));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__("+JwS");

// EXTERNAL MODULE: ./src/components/AppContext.tsx + 1 modules
var AppContext = __webpack_require__("2K/c");

// EXTERNAL MODULE: ./src/components/github.ts + 1 modules
var github = __webpack_require__("LGN/");

// EXTERNAL MODULE: ./src/components/useDbValue.ts
var useDbValue = __webpack_require__("2Opq");

// EXTERNAL MODULE: ./node_modules/notistack/dist/notistack.esm.js
var notistack_esm = __webpack_require__("NKQG");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/GitHub.js
var GitHub = __webpack_require__("RwSH");
var GitHub_default = /*#__PURE__*/__webpack_require__.n(GitHub);

// EXTERNAL MODULE: ./src/components/ApiKeyAccordion.tsx + 1 modules
var ApiKeyAccordion = __webpack_require__("47th");

// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__("W1g9");

// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__("aVfY");

// CONCATENATED MODULE: ./src/components/GithubPullRequestButton.tsx















function GithubPullRequestButton(props) {
  var files = props.files,
      _props$label = props.label,
      label = _props$label === void 0 ? "Create Pull Request" : _props$label,
      title = props.title,
      description = props.description,
      head = props.head;

  var _useDbValue = Object(useDbValue["a" /* default */])(github["a" /* GITHUB_API_KEY */], ""),
      token = _useDbValue.value;

  var _useState = Object(react["useState"])(undefined),
      setResponse = _useState[1];

  var _useState2 = Object(react["useState"])(false),
      busy = _useState2[0],
      setBusy = _useState2[1];

  var _useContext = Object(react["useContext"])(AppContext["c" /* default */]),
      setAppError = _useContext.setError;

  var _useSnackbar = Object(notistack_esm["b" /* useSnackbar */])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var _useState3 = Object(react["useState"])(false),
      confirmDialog = _useState3[0],
      setConfirmDialog = _useState3[1];

  var bodyId = Object(react_use_id_hook_esm["b" /* useId */])();

  var _useState4 = Object(react["useState"])(description),
      body = _useState4[0],
      setBody = _useState4[1];

  var disabled = busy || !body || !title || !head || !files || !Object.keys(files).length;

  var handleOpenConfirm = function handleOpenConfirm() {
    return setConfirmDialog(true);
  };

  var handleCloseConfirm = function handleCloseConfirm() {
    return setConfirmDialog(false);
  };

  var handleBodyChange = function handleBodyChange(ev) {
    return setBody(ev.target.value);
  };

  var handleCreatePullRequest = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var MyOctokit, octokit, result, url, id;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              enqueueSnackbar("creating pull request...");
              setBusy(true);
              setConfirmDialog(false);
              _context.prev = 3;
              MyOctokit = dist_web_Octokit.plugin(createPullRequest);
              octokit = new MyOctokit({
                auth: token
              }); // Returns a normal Octokit PR response
              // See https://octokit.github.io/rest.js/#octokit-routes-pulls-create

              _context.next = 8;
              return octokit.createPullRequest({
                owner: "microsoft",
                repo: "jacdac",
                title: title,
                body: body,
                head: head,
                changes: [{
                  files: files,
                  commit: "added files"
                }]
              });

            case 8:
              result = _context.sent;

              if (result.status === 201) {
                setResponse(result.data);
                url = result.data.html_url;
                id = result.data.number;
                enqueueSnackbar( /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
                  component: "span"
                }, "Pull Request ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
                  target: "_blank",
                  rel: "no-referrer no-follower",
                  href: url
                }, "#", id), " created..."), {
                  variant: "success"
                });
              } else {
                setResponse(undefined);
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](3);
              setAppError(_context.t0);

            case 15:
              _context.prev = 15;
              setBusy(false);
              return _context.finish(15);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 12, 15, 18]]);
    }));

    return function handleCreatePullRequest() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1,
    direction: "row"
  }, !description && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
    id: bodyId,
    label: "message",
    "aria-label": "Description of the changes",
    placeholder: "Describe your changes",
    fullWidth: true,
    value: body,
    onChange: handleBodyChange
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Button"], {
    disabled: disabled,
    color: "primary",
    variant: "contained",
    onClick: handleOpenConfirm,
    startIcon: busy ? /*#__PURE__*/react_default.a.createElement(LoadingProgress["a" /* default */], null) : /*#__PURE__*/react_default.a.createElement(GitHub_default.a, null)
  }, label))), /*#__PURE__*/react_default.a.createElement(Dialog["a" /* default */], {
    open: confirmDialog,
    onClose: handleCloseConfirm
  }, /*#__PURE__*/react_default.a.createElement(DialogContent["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(esm_DialogContentText_DialogContentText, null, "We will open a new Pull Request in ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    href: "https://github.com/microsoft/jacdac",
    rel: "noreferrer nofollower"
  }, "microsoft/jacdac"), " with your files. If needed, we will fork ", /*#__PURE__*/react_default.a.createElement("code", null, "microsoft/jacdac"), " under your account and create a Pull Request in that repository."), /*#__PURE__*/react_default.a.createElement(ApiKeyAccordion["a" /* default */], {
    apiName: github["a" /* GITHUB_API_KEY */],
    title: "GitHub Developer Token",
    instructions: /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
      component: "span",
      variant: "caption"
    }, "Open ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
      target: "_blank",
      href: "https://github.com/settings/tokens/new",
      rel: "noreferrer nofollower"
    }, "https://github.com/settings/tokens/new"), " and generate a new personal access token with **repo** scope.")
  })), /*#__PURE__*/react_default.a.createElement(DialogActions["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Button"], {
    variant: "contained",
    color: "primary",
    onClick: handleCreatePullRequest,
    disabled: disabled || !token,
    "aria-label": "create pull request"
  }, "create pull request"))));
}

/***/ }),

/***/ "oY9k":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ref: https://github.com/tc39/proposal-global

var getGlobal = function getGlobal() {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  throw new Error('unable to locate global object');
};

var global = getGlobal();
module.exports = exports = global.fetch; // Needed for TypeScript and Webpack.

if (global.fetch) {
  exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "z6pS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUserAgent; });
function getUserAgent() {
  if (typeof navigator === "object" && "userAgent" in navigator) {
    return navigator.userAgent;
  }

  if (typeof process === "object" && "version" in process) {
    return "Node.js/".concat(process.version.substr(1), " (").concat(process.platform, "; ").concat(process.arch, ")");
  }

  return "<environment undetectable>";
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("8oxB")))

/***/ })

}]);
//# sourceMappingURL=5-853594ebfb1e730dc2bf.js.map