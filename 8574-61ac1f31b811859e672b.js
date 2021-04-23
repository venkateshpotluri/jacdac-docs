(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8574],{

/***/ 99330:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34621);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80453);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      fontWeight: theme.typography.fontWeightMedium,
      marginTop: -2
    }
  };
};
var AlertTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function AlertTitle(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
    gutterBottom: true,
    component: "div",
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.root, className)
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(styles, {
  name: 'MuiAlertTitle'
})(AlertTitle));

/***/ }),

/***/ 42812:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(48983),
  __esModule: true
};

/***/ }),

/***/ 52598:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(45198),
  __esModule: true
};

/***/ }),

/***/ 81062:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(72066),
  __esModule: true
};

/***/ }),

/***/ 3478:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(78059),
  __esModule: true
};

/***/ }),

/***/ 37616:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(88077),
  __esModule: true
};

/***/ }),

/***/ 42873:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(98339),
  __esModule: true
};

/***/ }),

/***/ 85864:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(44003),
  __esModule: true
};

/***/ }),

/***/ 16881:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(15175),
  __esModule: true
};

/***/ }),

/***/ 94207:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(11358),
  __esModule: true
};

/***/ }),

/***/ 91848:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(92912),
  __esModule: true
};

/***/ }),

/***/ 85089:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(63800),
  __esModule: true
};

/***/ }),

/***/ 92854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(60165),
  __esModule: true
};

/***/ }),

/***/ 6093:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(99583),
  __esModule: true
};

/***/ }),

/***/ 29416:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(3276),
  __esModule: true
};

/***/ }),

/***/ 65175:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(85089);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
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
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),

/***/ 31205:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ 63075:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(85864);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ 33867:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(85864);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 34846:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(37616);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = _assign2.default || function (target) {
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

/***/ }),

/***/ 68462:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(91848);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(42873);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(96486);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ 81601:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ 51140:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(96486);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ 4509:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(81062);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(52598);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ 86287:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(42812);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ 96486:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(29416);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(6093);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ 717:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(52548);

/***/ }),

/***/ 37750:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var codesandboxURL = exports.codesandboxURL = 'https://codesandbox.io/api/v1/sandboxes/define?query=module=/example.js';
var codesandboxURLJSON = exports.codesandboxURLJSON = 'https://codesandbox.io/api/v1/sandboxes/define?json=1';

var getSandboxUrl = exports.getSandboxUrl = function getSandboxUrl(id) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 's';
  var fileName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'example';
  return 'https://codesandbox.io/' + type + '/' + id + '?module=/' + fileName;
};

/***/ }),

/***/ 54287:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _regenerator = __webpack_require__(717);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(85089);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(65175);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _fetchRelativeFile = __webpack_require__(10867);

var _fetchRelativeFile2 = _interopRequireDefault(_fetchRelativeFile);

var _replaceImports = __webpack_require__(28653);

var _replaceImports2 = _interopRequireDefault(_replaceImports);

var _absolutesToRelative = __webpack_require__(37759);

var _absolutesToRelative2 = _interopRequireDefault(_absolutesToRelative);

var _parseFile = __webpack_require__(475);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(example, importReplacements, pkg, examplePath, gitInfo, config) {
    var exampleContent, content;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!example) {
              _context.next = 8;
              break;
            }

            _context.next = 3;
            return _promise2.default.resolve(example);

          case 3:
            exampleContent = _context.sent;
            content = (0, _replaceImports2.default)(exampleContent, importReplacements.map(function (m) {
              return [(0, _absolutesToRelative2.default)(examplePath, m[0]), m[1]];
            }));
            return _context.abrupt('return', (0, _parseFile.parseFile)(content, pkg));

          case 8:
            return _context.abrupt('return', (0, _fetchRelativeFile2.default)(examplePath, pkg, importReplacements, gitInfo, config));

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function ensureExample(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  }

  return ensureExample;
}();

/***/ }),

/***/ 14177:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = ensureExtension;

var _pathBrowserify = __webpack_require__(24070);

var _pathBrowserify2 = _interopRequireDefault(_pathBrowserify);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function ensureExtension(filePath) {
  if (!_pathBrowserify2.default.extname(filePath)) {
    return filePath + '.js';
  } else {
    return filePath;
  }
}

/***/ }),

/***/ 17538:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _toConsumableArray2 = __webpack_require__(86287);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _set = __webpack_require__(92854);

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var ensureExtensionAndTemplate = function ensureExtensionAndTemplate(extension) {
  var extensions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var template = arguments[2];
  var extensionsSet = new _set2.default(['.js', '.json'].concat((0, _toConsumableArray3.default)(extensions)));
  extensionsSet.add(extension);

  if (['.ts', '.tsx'].includes(extension) || template === 'create-react-app-typescript') {
    if (!template) template = 'create-react-app-typescript';
    extensionsSet.add('.ts');
    extensionsSet.add('.tsx');
  }

  if (extension === '.vue' || template === 'vue-cli') {
    if (!template) template = 'vue-cli';
    extensionsSet.add('.vue');
  }

  if (!template) {
    template = 'create-react-app';
  }

  return {
    extensions: [].concat((0, _toConsumableArray3.default)(extensionsSet)),
    template: template
  };
};

exports.default = ensureExtensionAndTemplate;
/*
That other implementation:

  if (!config.template) {
    if (['.ts', '.tsx'].includes(extension)) {
      config.template = 'create-react-app-typescript';
    } else if (extension === '.vue' && !config.template) {
      config.template = 'vue-cli';
    } else {
      config.template = 'create-react-app';
    }
  }

  let extensions = ['.js', '.json'];
  if (config.extensions) extensions = [...extensions, ...config.extensions];
  if (
    extension &&
    !baseExtensions.includes(extension) &&
    !extensions.includes(extension)
  ) {
    extensions.push(extension);
  }
*/

/***/ }),

/***/ 49022:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _regenerator = __webpack_require__(717);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _typeof2 = __webpack_require__(96486);

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = __webpack_require__(85089);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(65175);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _fetchRelativeFile = __webpack_require__(10867);

var _fetchRelativeFile2 = _interopRequireDefault(_fetchRelativeFile);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(maybePkg, importReplacements, gitInfo, config) {
    var pkg;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _promise2.default.resolve(maybePkg);

          case 2:
            pkg = _context.sent;

            if (!((typeof pkg === 'undefined' ? 'undefined' : (0, _typeof3.default)(pkg)) === 'object')) {
              _context.next = 7;
              break;
            }

            return _context.abrupt('return', pkg);

          case 7:
            if (!(typeof pkg === 'string')) {
              _context.next = 11;
              break;
            }

            return _context.abrupt('return', (0, _fetchRelativeFile2.default)(pkg, // $FlowFixMe - we know here that this will not be a js file, the only time we NEED a pkg
            {}, importReplacements, gitInfo).then(function (_ref2) {
              var file = _ref2.file;
              return JSON.parse(file);
            }));

          case 11:
            if (pkg) {
              _context.next = 15;
              break;
            }

            return _context.abrupt('return', (0, _fetchRelativeFile2.default)('package.json', // $FlowFixMe - we know here that this will not be a js file, the only time we NEED a pkg
            {}, importReplacements, gitInfo, config).then(function (_ref3) {
              var file = _ref3.file;
              return JSON.parse(file);
            }));

          case 15:
            throw new Error('could not understand passed in package.json');

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function ensurePKGJSON(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  }

  return ensurePKGJSON;
}();

/***/ }),

/***/ 99473:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _regenerator = __webpack_require__(717);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = __webpack_require__(52598);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _extends2 = __webpack_require__(34846);

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__(85089);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(65175);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _fetchRelativeFile = __webpack_require__(10867);

var _fetchRelativeFile2 = _interopRequireDefault(_fetchRelativeFile);

var _ensureExtension = __webpack_require__(14177);

var _ensureExtension2 = _interopRequireDefault(_ensureExtension);

var _resolvePath = __webpack_require__(82963);

var _resolvePath2 = _interopRequireDefault(_resolvePath);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(internalImports, files, pkg, deps, gitInfo, importReplacements, config) {
    var accumulatedInternalDependencies = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [];

    var newFiles, moreInternalImports, _loop, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, f, moreFiles;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _promise2.default.all(internalImports.map(function (path) {
              return (0, _fetchRelativeFile2.default)(path, pkg, importReplacements, gitInfo, config);
            }));

          case 2:
            newFiles = _context.sent;
            moreInternalImports = [];

            _loop = function _loop(f) {
              files[(0, _ensureExtension2.default)(f.path)] = {
                content: f.file
              };
              deps = (0, _extends3.default)({}, deps, f.deps);
              f.internalImports.forEach(function (m) {
                return moreInternalImports.push((0, _resolvePath2.default)(f.path, m));
              });
            };

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 8;

            for (_iterator = (0, _getIterator3.default)(newFiles); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              f = _step.value;

              _loop(f);
            }

            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](8);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 16:
            _context.prev = 16;
            _context.prev = 17;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 19:
            _context.prev = 19;

            if (!_didIteratorError) {
              _context.next = 22;
              break;
            }

            throw _iteratorError;

          case 22:
            return _context.finish(19);

          case 23:
            return _context.finish(16);

          case 24:
            accumulatedInternalDependencies = accumulatedInternalDependencies.concat(internalImports);
            moreInternalImports = moreInternalImports.filter(function (mpt) {
              return !accumulatedInternalDependencies.includes(mpt);
            });

            if (!(moreInternalImports.length > 0)) {
              _context.next = 33;
              break;
            }

            _context.next = 29;
            return fetchInternalDependencies(moreInternalImports, files, pkg, deps, gitInfo, importReplacements, config, accumulatedInternalDependencies);

          case 29:
            moreFiles = _context.sent;
            return _context.abrupt('return', {
              files: (0, _extends3.default)({}, files, moreFiles.files),
              deps: (0, _extends3.default)({}, deps, moreFiles.deps)
            });

          case 33:
            return _context.abrupt('return', {
              files: files,
              deps: deps
            });

          case 34:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[8, 12, 16, 24], [17,, 19, 23]]);
  }));

  function fetchInternalDependencies(_x2, _x3, _x4, _x5, _x6, _x7, _x8) {
    return _ref.apply(this, arguments);
  }

  return fetchInternalDependencies;
}();

/***/ }),

/***/ 66633:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _regenerator = __webpack_require__(717);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = __webpack_require__(33867);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(34846);

var _extends4 = _interopRequireDefault(_extends3);

var _asyncToGenerator2 = __webpack_require__(65175);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _resolvePath = __webpack_require__(82963);

var _resolvePath2 = _interopRequireDefault(_resolvePath);

var _replaceImports = __webpack_require__(28653);

var _replaceImports2 = _interopRequireDefault(_replaceImports);

var _ensureExample = __webpack_require__(54287);

var _ensureExample2 = _interopRequireDefault(_ensureExample);

var _ensurePkgJSON = __webpack_require__(49022);

var _ensurePkgJSON2 = _interopRequireDefault(_ensurePkgJSON);

var _ensureExtensionAndTemplate = __webpack_require__(17538);

var _ensureExtensionAndTemplate2 = _interopRequireDefault(_ensureExtensionAndTemplate);

var _fetchInternalDependencies = __webpack_require__(99473);

var _fetchInternalDependencies2 = _interopRequireDefault(_fetchInternalDependencies);

var _pathBrowserify = __webpack_require__(24070);

var _pathBrowserify2 = _interopRequireDefault(_pathBrowserify);

var _templates = __webpack_require__(54151);

var _templates2 = _interopRequireDefault(_templates);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
    var examplePath = _ref.examplePath,
        pkgJSON = _ref.pkgJSON,
        gitInfo = _ref.gitInfo,
        _ref$importReplacemen = _ref.importReplacements,
        importReplacements = _ref$importReplacemen === undefined ? [] : _ref$importReplacemen,
        example = _ref.example,
        _ref$extensions = _ref.extensions,
        extensions = _ref$extensions === undefined ? [] : _ref$extensions,
        template = _ref.template;

    var extension, config, pkg, _ref3, file, deps, internalImports, fileName, files, final;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            extension = _pathBrowserify2.default.extname(examplePath) || '.js';
            config = (0, _ensureExtensionAndTemplate2.default)(extension, extensions, template);
            _context.next = 4;
            return (0, _ensurePkgJSON2.default)(pkgJSON, importReplacements, gitInfo, config);

          case 4:
            pkg = _context.sent;
            _context.next = 7;
            return (0, _ensureExample2.default)(example, importReplacements, pkg, examplePath, gitInfo, config);

          case 7:
            _ref3 = _context.sent;
            file = _ref3.file;
            deps = _ref3.deps;
            internalImports = _ref3.internalImports;
            fileName = 'example' + extension;
            files = (0, _extends4.default)({}, _templates2.default[config.template], (0, _defineProperty3.default)({}, fileName, {
              content: (0, _replaceImports2.default)(file, internalImports.map(function (m) {
                return [m, './' + (0, _resolvePath2.default)(examplePath, m)];
              }))
            }));
            _context.next = 15;
            return (0, _fetchInternalDependencies2.default)(internalImports.map(function (m) {
              return (0, _resolvePath2.default)(examplePath, m);
            }), files, pkg, deps, gitInfo, importReplacements, config, [examplePath]);

          case 15:
            final = _context.sent;
            return _context.abrupt('return', (0, _extends4.default)({}, final, {
              template: config.template,
              fileName: fileName
            }));

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ 55234:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _objectWithoutProperties2 = __webpack_require__(81601);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = getUrl;

var _pathBrowserify = __webpack_require__(24070);

var _pathBrowserify2 = _interopRequireDefault(_pathBrowserify);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var raw = {
  github: function github(filePath, _ref) {
    var account = _ref.account,
        repository = _ref.repository,
        _ref$branch = _ref.branch,
        branch = _ref$branch === undefined ? 'master' : _ref$branch;
    return 'https://raw.githubusercontent.com/' + account + '/' + repository + '/' + branch + '/' + filePath;
  },
  bitbucket: function bitbucket(filePath, _ref2) {
    var account = _ref2.account,
        repository = _ref2.repository,
        _ref2$branch = _ref2.branch,
        branch = _ref2$branch === undefined ? 'master' : _ref2$branch;
    return 'https://api.bitbucket.org/2.0/repositories/' + account + '/' + repository + '/src/' + branch + '/' + filePath;
  }
};

function getUrl(filePath, _ref3) {
  var host = _ref3.host,
      urlConfig = (0, _objectWithoutProperties3.default)(_ref3, ['host']);
  var getRaw = raw[host];

  if (typeof getRaw !== 'function') {
    throw new Error('Could not parse files from ' + host);
  }

  var url = getRaw(filePath, urlConfig);

  var extName = _pathBrowserify2.default.extname(filePath);

  if (!extName) {
    return {
      fileType: '.js',
      url: url + '.js'
    };
  } else {
    return {
      fileType: extName,
      url: url
    };
  }
}

/***/ }),

/***/ 10867:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _regenerator = __webpack_require__(717);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = __webpack_require__(86287);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = __webpack_require__(65175);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(34846);

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__(85089);

var _promise2 = _interopRequireDefault(_promise); // Imports that are not named may be .js, .json, or /index.js. Node resolves them
// in that order.


var fetchProbablyJS = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url, path, pkg, importReplacements, config) {
    var extensions, extension, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            extensions = config.extensions || []; // We add in the .js and .json extensions as the default accepted extensions

            extensions = ['.js', '.json'].concat((0, _toConsumableArray3.default)(extensions));
            extensions = [].concat((0, _toConsumableArray3.default)(extensions), (0, _toConsumableArray3.default)(extensions.map(function (extension) {
              return '/index' + extension;
            })));

          case 3:
            if (!extensions.length) {
              _context.next = 12;
              break;
            }

            extension = extensions.shift();
            _context.next = 7;
            return attemptToFetch(url, path, pkg, importReplacements, extension);

          case 7:
            data = _context.sent;

            if (!data) {
              _context.next = 10;
              break;
            }

            return _context.abrupt('return', data);

          case 10:
            _context.next = 3;
            break;

          case 12:
            throw new Error('file not found at: ' + url + '; tried extensions: ' + extensions.join(', '));

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchProbablyJS(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

var _parseFile = __webpack_require__(475);

var _replaceImports = __webpack_require__(28653);

var _replaceImports2 = _interopRequireDefault(_replaceImports);

var _absolutesToRelative = __webpack_require__(37759);

var _absolutesToRelative2 = _interopRequireDefault(_absolutesToRelative);

var _getUrl2 = __webpack_require__(55234);

var _getUrl3 = _interopRequireDefault(_getUrl2);

__webpack_require__(95628);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var fetchRequest = function fetchRequest(url) {
  return fetch(url).then(function (res) {
    if (res.status === 404) {
      throw new Error('file not found at: ' + url);
    }

    return res.text();
  });
};
/*
This is modified from the canvas answer here:
https://stackoverflow.com/questions/6150289/how-to-convert-image-into-base64-string-using-javascript
*/


function fetchImage(url, path) {
  return new _promise2.default(function (resolve) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = url;

    img.onload = function () {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var dataURL;
      canvas.height = this.naturalHeight;
      canvas.width = this.naturalWidth;
      ctx.drawImage(this, 0, 0);
      dataURL = canvas.toDataURL();
      resolve(dataURL);
    };
  }).then(function (file) {
    return {
      file: file,
      deps: {},
      internalImports: [],
      path: path
    };
  });
}

var fetchJS = function fetchJS(url, path, pkg, importReplacements) {
  return fetchRequest(url).then(function (content) {
    return (0, _replaceImports2.default)(content, importReplacements.map(function (m) {
      return [(0, _absolutesToRelative2.default)(path, m[0]), m[1]];
    }));
  }) // this is not correct
  .then(function (content) {
    return (0, _parseFile.parseFile)(content, pkg);
  }).then(function (file) {
    return (0, _extends3.default)({}, file, {
      path: path
    });
  });
};

var fetchSass = function fetchSass(url, path) {
  return fetchRequest(url).then(_parseFile.parseSassFile).then(function (file) {
    return (0, _extends3.default)({}, file, {
      path: path
    });
  });
};

var fetchScss = function fetchScss(url, path) {
  return fetchRequest(url).then(_parseFile.parseScssFile).then(function (file) {
    return (0, _extends3.default)({}, file, {
      path: path
    });
  });
};

var fetchRaw = function fetchRaw(url, path) {
  return fetch(url).then(function (res) {
    if (res.status === 404) {
      throw new Error('file not found at: ' + url);
    }

    return res.text();
  }).then(function (file) {
    return {
      file: file,
      deps: {},
      internalImports: [],
      path: path
    };
  });
};
/*
resolution order:
A.js
A.json
A.userExtension (in order provided)
A/index.js
A/index.json
A/index.userExtension (in order provided)
*/


var attemptToFetch = function attemptToFetch(url, path, pkg, importReplacements, extension) {
  var newPath = '' + path + extension;
  var newUrl = url.replace(/.js$/, extension);

  if (extension === '.json') {
    return fetchRaw(newUrl, newPath).catch(function (error) {
      if (error.message.includes('file not found at:')) return;else throw error;
    });
  }

  return fetchJS(newUrl, newPath, pkg, importReplacements).catch(function (error) {
    if (error.message.includes('file not found at:')) return;else throw error;
  });
};

var fetchFileContents = function fetchFileContents(url, path, _ref2, config) {
  var fileType = _ref2.fileType,
      pkg = _ref2.pkg,
      importReplacements = _ref2.importReplacements;

  if (config.extensions.includes(fileType) || fileType === '.js') {
    return fetchProbablyJS(url, path, pkg, importReplacements, config);
  }

  switch (fileType) {
    case '.png':
    case '.jpeg':
    case '.jpg':
    case '.gif':
    case '.bmp':
    case '.tiff':
      return fetchImage(url, path);

    case '.json':
    case '.css':
      return fetchRaw(url, path);

    case '.scss':
      return fetchScss(url, path);

    case '.sass':
      return fetchSass(url, path);

    default:
      throw new Error('unparseable filetype: ' + fileType + ' for file ' + path);
  }
};

exports.default = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(path, pkg, importReplacements, gitInfo, config) {
    var _getUrl, url, fileType, file;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            config = config || {
              extensions: []
            }; // The new path is the file name we will provide to codesandbox
            // Get the url from the gitInfo. For JS files, we will need to add the filetype
            // This method needs to determine the filetype, so we return it.

            _getUrl = (0, _getUrl3.default)(path, gitInfo), url = _getUrl.url, fileType = _getUrl.fileType;
            _context2.next = 4;
            return fetchFileContents(url, path, {
              fileType: fileType,
              pkg: pkg,
              importReplacements: importReplacements
            }, config);

          case 4:
            file = _context2.sent;
            return _context2.abrupt('return', file);

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  function fetchRelativeFile(_x6, _x7, _x8, _x9, _x10) {
    return _ref3.apply(this, arguments);
  }

  return fetchRelativeFile;
}();

/***/ }),

/***/ 7211:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _stringify = __webpack_require__(3478);

var _stringify2 = _interopRequireDefault(_stringify);

var _lzString = __webpack_require__(30370);

var _lzString2 = _interopRequireDefault(_lzString);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function compress(input) {
  return _lzString2.default.compressToBase64(input).replace(/\+/g, '-') // Convert '+' to '-'
  .replace(/\//g, '_') // Convert '/' to '_'
  .replace(/=+$/, ''); // Remove ending '='
}

function getParameters(files) {
  return compress((0, _stringify2.default)(files));
}

exports.default = getParameters;

/***/ }),

/***/ 1725:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _stringify = __webpack_require__(3478);

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = __webpack_require__(34846);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (_ref, config) {
  var files = _ref.files,
      deps = _ref.deps,
      _ref$template = _ref.template,
      template = _ref$template === undefined ? 'create-react-app' : _ref$template;
  if (!config) config = {};
  var _config = config,
      extraFiles = _config.extraFiles,
      extraDependencies = _config.extraDependencies,
      name = _config.name,
      main = _config.main,
      _config$fileName = _config.fileName,
      fileName = _config$fileName === undefined ? 'example' : _config$fileName;
  var dependencies = (0, _extends3.default)({}, deps, extraDependencies);
  main = !main && template === 'create-react-app-typescript' ? 'index.tsx' : 'index.js';

  if (template === 'create-react-app' || template === 'create-react-app-typescript') {
    ensureReact(dependencies);
  }

  if (template === 'vue-cli') {
    ensureVue(dependencies);
  }

  var finalFiles = (0, _extends3.default)({}, files, {
    'package.json': {
      content: (0, _packagejson2.default)(dependencies, name, main)
    },
    'sandbox.config.json': {
      content: (0, _stringify2.default)({
        template: template
      })
    }
  }, extraFiles);
  var parameters = (0, _getParameters2.default)({
    files: finalFiles
  });
  return {
    files: finalFiles,
    dependencies: dependencies,
    parameters: parameters,
    fileName: fileName
  };
};

var _getParameters = __webpack_require__(7211);

var _getParameters2 = _interopRequireDefault(_getParameters);

var _packagejson = __webpack_require__(59125);

var _packagejson2 = _interopRequireDefault(_packagejson);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var ensureReact = function ensureReact(deps) {
  if (!deps.react && !deps['react-dom']) {
    deps.react = 'latest';
    deps['react-dom'] = 'latest';
  } else if (!deps.react) {
    deps.react = deps['react-dom'];
  } else if (!deps['react-dom']) {
    deps['react-dom'] = deps.react;
  }
};

var ensureVue = function ensureVue(deps) {
  if (!deps.vue) {
    deps.vue = 'latest';
  }
};

/***/ }),

/***/ 82276:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _parseFile = __webpack_require__(475);

Object.defineProperty(exports, "parseFile", ({
  enumerable: true,
  get: function get() {
    return _parseFile.parseFile;
  }
}));
Object.defineProperty(exports, "parseScssFile", ({
  enumerable: true,
  get: function get() {
    return _parseFile.parseScssFile;
  }
}));
Object.defineProperty(exports, "parseSassFile", ({
  enumerable: true,
  get: function get() {
    return _parseFile.parseSassFile;
  }
}));

var _replaceImports = __webpack_require__(28653);

Object.defineProperty(exports, "replaceImports", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_replaceImports).default;
  }
}));

var _resolvePath = __webpack_require__(82963);

Object.defineProperty(exports, "resolvePath", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_resolvePath).default;
  }
}));

var _fetchFiles = __webpack_require__(66633);

Object.defineProperty(exports, "fetchFiles", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fetchFiles).default;
  }
}));

var _ensureExtensionAndTemplate = __webpack_require__(17538);

Object.defineProperty(exports, "ensureExtensionAndTemplate", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ensureExtensionAndTemplate).default;
  }
}));

var _sendFilesToCSB = __webpack_require__(89267);

Object.defineProperty(exports, "sendFilesToCSB", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sendFilesToCSB).default;
  }
}));

var _finaliseCSB = __webpack_require__(1725);

Object.defineProperty(exports, "finaliseCSB", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_finaliseCSB).default;
  }
}));

var _constants = __webpack_require__(37750);

Object.defineProperty(exports, "getSandboxUrl", ({
  enumerable: true,
  get: function get() {
    return _constants.getSandboxUrl;
  }
}));

var _templates = __webpack_require__(54151);

Object.defineProperty(exports, "templates", ({
  enumerable: true,
  get: function get() {
    return _templates.templates;
  }
}));

var _fetchRelativeFile = __webpack_require__(10867);

Object.defineProperty(exports, "fetchRelativeFile", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fetchRelativeFile).default;
  }
}));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

/***/ }),

/***/ 475:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _parseFile = __webpack_require__(95662);

Object.defineProperty(exports, "parseFile", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_parseFile).default;
  }
}));

var _parseScssfile = __webpack_require__(1510);

Object.defineProperty(exports, "parseScssFile", ({
  enumerable: true,
  get: function get() {
    return _parseScssfile.parseScssFile;
  }
}));
Object.defineProperty(exports, "parseSassFile", ({
  enumerable: true,
  get: function get() {
    return _parseScssfile.parseSassFile;
  }
}));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

/***/ }),

/***/ 88860:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _keys = __webpack_require__(94207);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(52598);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _extends2 = __webpack_require__(34846);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var getDeps = function getDeps(pkgJSON, name) {
  var deps = {}; // We are deliberately putting dependencies as the last assigned as we will care
  // most about the versions of dependencies over other types

  var dependencies = (0, _extends3.default)({}, pkgJSON.peerDependencies, pkgJSON.devDependencies, pkgJSON.dependencies);

  for (var dependency in dependencies) {
    // This exists because we need to resolve dependencies when files within
    // the dependency are being accessed directly. This may cause sandboxes
    // to depend on things they are not using very occasionally.
    if (name.includes(dependency)) {
      deps[dependency] = dependencies[dependency];
    }
  }

  return deps;
};

var parseDeps = function parseDeps(pkgJSON, imports) {
  var dependencies = {};
  var internalImports = []; // This is a common pattern of going over mpt of imports. Have not found a neat function extraction for it.

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(imports), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var mpt = _step.value;
      /* We are naming complete for readability, however the variable is not used. */

      /* eslint-disable-next-line no-unused-vars */

      if (/^\./.test(mpt)) {
        internalImports.push(mpt);
      } else {
        var foundDeps = getDeps(pkgJSON, mpt);

        if ((0, _keys2.default)(foundDeps).length < 1 && mpt !== pkgJSON.name) {
          console.warn('Could not find dependency version for ' + mpt);
        } else {
          dependencies = (0, _extends3.default)({}, dependencies, foundDeps);
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return {
    deps: dependencies,
    internalImports: internalImports
  };
};

exports.default = parseDeps;

/***/ }),

/***/ 95662:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _regenerator = __webpack_require__(717);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(85089);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(65175);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getAllImports = __webpack_require__(87986);

var _getAllImports2 = _interopRequireDefault(_getAllImports);

var _parseDeps2 = __webpack_require__(88860);

var _parseDeps3 = _interopRequireDefault(_parseDeps2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var parseFile = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(file, pkgJSON) {
    var fileCode, pkgJSONContent, imports, _parseDeps, deps, internalImports;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _promise2.default.resolve(file);

          case 2:
            fileCode = _context.sent;
            _context.next = 5;
            return _promise2.default.resolve(pkgJSON);

          case 5:
            pkgJSONContent = _context.sent;
            imports = (0, _getAllImports2.default)(fileCode);
            _parseDeps = (0, _parseDeps3.default)(pkgJSONContent, imports), deps = _parseDeps.deps, internalImports = _parseDeps.internalImports;
            return _context.abrupt('return', {
              file: fileCode,
              deps: deps,
              internalImports: internalImports
            });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function parseFile(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = parseFile;

/***/ }),

/***/ 1510:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseSassFile = exports.parseScssFile = undefined;

var _regenerator = __webpack_require__(717);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(85089);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(65175);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var matchScssString = '@import\\s*[\'"`]([^\'"`]+)[\'"`]\\s*;';
var matchSassString = '@import\\s*[\'"`]?([^\'"`;]+)[\'"`]?\\s*;';

var getAllImports = function getAllImports(code, matchString) {
  var matcher = new RegExp(matchString);
  var matches = [];
  var m = matcher.exec(code);

  while (m) {
    if (m[1]) {
      matches.push(m[1]);
      code = code.slice(m.index + m[0].length);
      matcher = new RegExp(matchString);
      m = matcher.exec(code);
    }
  }

  return matches.map(function (match) {
    if (match[0] !== '.' && match[0] !== '/') return './' + match;
    return match;
  });
};

var parseScssFile = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(file) {
    var fileCode, internalImports;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _promise2.default.resolve(file);

          case 2:
            fileCode = _context.sent;
            internalImports = getAllImports(fileCode, matchScssString).map(function (a) {
              return a + '.scss';
            });
            return _context.abrupt('return', {
              file: fileCode,
              internalImports: internalImports,
              deps: {}
            });

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function parseScssFile(_x) {
    return _ref.apply(this, arguments);
  };
}();

var parseSassFile = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(file) {
    var fileCode, internalImports;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _promise2.default.resolve(file);

          case 2:
            fileCode = _context2.sent;
            internalImports = getAllImports(fileCode, matchSassString).concat(getAllImports(fileCode, matchScssString)).map(function (a) {
              return a + '.sass';
            });
            return _context2.abrupt('return', {
              file: fileCode,
              internalImports: internalImports,
              deps: {}
            });

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function parseSassFile(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.parseScssFile = parseScssFile;
exports.parseSassFile = parseSassFile;

/***/ }),

/***/ 28653:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _slicedToArray2 = __webpack_require__(4509);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = __webpack_require__(52598);

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.default = function (code, oldAndNew) {
  var newCode = code;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(oldAndNew), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var mpt = _step.value;

      var _mpt = (0, _slicedToArray3.default)(mpt, 2),
          oldSource = _mpt[0],
          newSource = _mpt[1];

      newCode = (0, _replaceImport2.default)(newCode, oldSource, newSource);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return newCode;
};

var _replaceImport = __webpack_require__(52287);

var _replaceImport2 = _interopRequireDefault(_replaceImport);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

/***/ }),

/***/ 89267:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _regenerator = __webpack_require__(717);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(65175);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var sendFilesToCSB = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(parameters, config) {
    var fileName, type, formData;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!config) config = {};
            fileName = config.fileName ? config.fileName : 'example';
            type = config.type ? config.type : 's';
            formData = new _formData2.default();
            formData.append('parameters', parameters);
            return _context.abrupt('return', fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
              method: 'post',
              body: formData,
              mode: 'cors'
            }).then(function (response) {
              return response.json();
            }).then(function (_ref2) {
              var errors = _ref2.errors,
                  sandbox_id = _ref2.sandbox_id;
              if (errors) throw errors;
              return {
                sandboxId: sandbox_id,
                sandboxUrl: (0, _constants.getSandboxUrl)(sandbox_id, type, fileName)
              };
            }));

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function sendFilesToCSB(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _constants = __webpack_require__(37750);

__webpack_require__(95628);

var _formData = __webpack_require__(81621);

var _formData2 = _interopRequireDefault(_formData);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = sendFilesToCSB;

/***/ }),

/***/ 54151:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _react = __webpack_require__(15306);

var _react2 = _interopRequireDefault(_react);

var _reactTypescript = __webpack_require__(54514);

var _reactTypescript2 = _interopRequireDefault(_reactTypescript);

var _vue = __webpack_require__(1418);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = {
  'create-react-app': _react2.default,
  'create-react-app-typescript': _reactTypescript2.default,
  'vue-cli': _vue2.default
};

/***/ }),

/***/ 59125:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _keys = __webpack_require__(94207);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = function (dependencies) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'codesandboxer-example';
  var main = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'index.js';
  return '{\n  "name": "' + name + '",\n  "version": "0.0.0",\n  "description": "A simple example deployed using react-codesandboxer",\n  "main": "' + main + '",\n  "dependencies": {\n    ' + (0, _keys2.default)(dependencies).map(function (k) {
    return '"' + k + '": "' + dependencies[k] + '"';
  }).join(',\n    ') + '\n  }\n}';
};

/***/ }),

/***/ 54514:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = {
  'index.html': {
    content: '<div id="root"></div>'
  },
  'index.tsx': {
    content: '/**\n  This CodeSandbox has been automatically generated using\n  `codesandboxer`. If you\'re curious how that happened, you can\n  check out our docs here: https://github.com/codesandbox/codesandboxer\n\n  If you experience any struggles with this sandbox, please raise an issue\n  on github. :)\n*/\nimport * as React from \'react\';\nimport * as ReactDOM from \'react-dom\';\nimport App from \'./example\';\n\nReactDOM.render(\n<App />,\ndocument.getElementById(\'root\')\n);'
  }
};

/***/ }),

/***/ 15306:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = {
  'index.html': {
    content: '<div id="root"></div>'
  },
  'index.js': {
    content: '/**\n  This CodeSandbox has been automatically generated using\n  `codesandboxer`. If you\'re curious how that happened, you can\n  check out our docs here: https://github.com/codesandbox/codesandboxer\n\n  If you experience any struggles with this sandbox, please raise an issue\n  on github. :)\n*/\nimport React from \'react\';\nimport ReactDOM from \'react-dom\';\nimport App from \'./example\';\n\nReactDOM.render(\n<App />,\ndocument.getElementById(\'root\')\n);'
  }
};

/***/ }),

/***/ 1418:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = {
  'index.html': {
    content: '<div id="root"></div>'
  },
  'index.js': {
    content: '/**\n    This CodeSandbox has been automatically generated using\n    `codesandboxer`. If you\'re curious how that happened, you can\n    check out our docs here: https://github.com/codesandbox/codesandboxer\n  \n    If you experience any struggles with this sandbox, please raise an issue\n    on github. :)\n  */\n  import Vue from "vue";\n  import Example from \'./example\';\n  \n  Vue.config.productionTip = false;\n  \n  /* eslint-disable no-new */\n  new Vue({\n    el: "#root",\n    components: { Example },\n    template: "<Example/>"\n  });\n  '
  }
};

/***/ }),

/***/ 37759:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = absolutesToAbsolute;

function absolutesToAbsolute(currentLocation, targetLocation) {
  var cr = currentLocation.split('/');
  var tr = targetLocation.split('/'); // remove any shared values

  while (tr[0] && cr[0] === tr[0]) {
    cr.shift();
    tr.shift();
  }

  if (cr.length < 2) {
    return './' + tr.join('/');
  }

  cr.shift();
  return cr.map(function () {
    return '..';
  }).join('/') + '/' + tr.join('/');
}

/***/ }),

/***/ 87986:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _getRegexMatchStr = __webpack_require__(46305);

var _getRegexMatchStr2 = _interopRequireDefault(_getRegexMatchStr);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var getAllImports = function getAllImports(code) {
  var matcher = new RegExp((0, _getRegexMatchStr2.default)(), 'g');
  var matches = [];
  var m = matcher.exec(code);

  while (m) {
    // $1 and $3 capture groups are used for 'require' statements, while $4 and $6
    // are used for 'import' statements
    if (m[1] && m[2] && m[3]) {
      matches.push(m[2]);
    } else if (m[4] && m[5] && m[6]) {
      matches.push(m[5]);
    }

    code = code.slice(m.index + m[0].length);
    matcher = new RegExp((0, _getRegexMatchStr2.default)(), 'g');
    m = matcher.exec(code);
  }

  return matches;
};

exports.default = getAllImports;

/***/ }),

/***/ 46305:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
The below implementation takes its cues from the following repo:
https://github.com/mathieudutour/deps-regex

We have modified it so that it also supports the syntax:

export a from 'b'
*/

var matchingName = '\\s*(?:[\\w${},\\s*]+)\\s*'; // strings passed to matchingDeps require a trailing opening bracket. This is to
// allow replaceImport to pass in partial paths, so we can match against a file
// pattern.

var matchAnyDep = '([^\'"`]+)(';

var matchingDeps = function matchingDeps() {
  var deps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : matchAnyDep;
  return 's*[\'"`])' + deps + '[\'"`]s*';
}; // $1 and $3 capture groups are used for 'require' statements, while $4 and $6
// are used for 'import' statements


var getRegexStr = function getRegexStr(deps) {
  return (// the first half of this regex matches require statements
    '((?:(?:var|const|let)' + matchingName + '=\\s*)?require\\(' + matchingDeps(deps) + '\\);?)' + ( // the second half of this regex matches most imports
    '|((?:import|export)(?:(?:' + matchingName + 'from\\s*)|\\s*)' + matchingDeps(deps) + ';?)')
  );
};

exports.default = getRegexStr;

/***/ }),

/***/ 52287:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = replaceImport;

var _getRegexMatchStr = __webpack_require__(46305);

var _getRegexMatchStr2 = _interopRequireDefault(_getRegexMatchStr);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function replaceImport(code, oldSource, newSource) {
  var matchString = '';

  if (oldSource.match(/\*$/)) {
    matchString = '' + oldSource.replace(/\*$/, '()([^"\']*');
  } else {
    matchString = '(' + oldSource + ')(';
  }

  var regexMatchStr = (0, _getRegexMatchStr2.default)(matchString);
  var newRegex = new RegExp(regexMatchStr, 'g'); // $1 and $3 capture groups are used for 'require' statements, while $4 and $6
  // are used for 'import' statements

  return code.replace(newRegex, '$1$4' + newSource + '$3$6');
}

/***/ }),

/***/ 82963:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = resolvePath;

function resolvePath(basePath, relativePath) {
  var newSegments = basePath.split('/').filter(function (a) {
    return a;
  });
  var relativeSegments = relativePath.split('/').filter(function (a) {
    return a;
  });
  var segment = relativeSegments.shift(); // For our use-case, the basePath is always a file, not a directory.
  // This means we can do this safely.

  if (segment === '..' || segment === '.') newSegments.pop();

  while (segment) {
    switch (segment) {
      case '.':
        break;

      case '..':
        if (newSegments.length < 1) {
          throw new Error('Trying to access a filepath outside our scope');
        }

        newSegments.pop();
        break;

      default:
        newSegments.push(segment);
    }

    segment = relativeSegments.shift();
  }

  return newSegments.join('/');
}

/***/ }),

/***/ 81621:
/***/ (function(module) {

/* eslint-env browser */
module.exports = typeof self == 'object' ? self.FormData : window.FormData;

/***/ }),

/***/ 95628:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__.g.fetch;

/***/ }),

/***/ 4934:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Detect free variable `exports`. */

var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */

function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */


function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */


function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }

  return false;
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */


function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */


function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function cacheHas(cache, key) {
  return cache.has(key);
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */


function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */


function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */


function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */


function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}
/** Used for built-in method references. */


var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */

var coreJsData = root['__core-js_shared__'];
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */


var nativeObjectToString = objectProto.toString;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);
/* Built-in method references that are verified to be native. */

var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
/** Used to convert symbols to primitives and strings. */

var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */


function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */


function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */

function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
}
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */


function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);

  return this;
}
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */


function setCacheHas(value) {
  return this.__data__.has(value);
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function stackGet(key) {
  return this.__data__.get(key);
}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function stackHas(key) {
  return this.__data__.has(key);
}
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */


function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */


function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */


function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */


function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */


function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }

  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */


function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }

    objIsArr = true;
    objIsObj = false;
  }

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }

  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }

  if (!isSameTag) {
    return false;
  }

  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */


function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */


function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */


function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */


function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  } // Assume cyclic values are equal.


  var stacked = stack.get(array);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array); // Ignore non-index properties.

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }

    if (compared !== undefined) {
      if (compared) {
        continue;
      }

      result = false;
      break;
    } // Recursively compare arrays (susceptible to call stack limits).


    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }

  stack['delete'](array);
  stack['delete'](other);
  return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */


function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }

      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }

      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      } // Assume cyclic values are equal.


      var stacked = stack.get(object);

      if (stacked) {
        return stacked == other;
      }

      bitmask |= COMPARE_UNORDERED_FLAG; // Recursively compare objects (susceptible to call stack limits).

      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }

  }

  return false;
}
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */


function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }

  var index = objLength;

  while (index--) {
    var key = objProps[index];

    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  } // Assume cyclic values are equal.


  var stacked = stack.get(object);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;

  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    } // Recursively compare objects (susceptible to call stack limits).


    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }

    skipCtor || (skipCtor = key == 'constructor');
  }

  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }

  stack['delete'](object);
  stack['delete'](other);
  return result;
}
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */


function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */


var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;

        case mapCtorString:
          return mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag;

        case weakMapCtorString:
          return weakMapTag;
      }
    }

    return result;
  };
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */


function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */


function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */


function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */


function objectToString(value) {
  return nativeObjectToString.call(value);
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */


function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */


function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */


var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */

function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */


var isBuffer = nativeIsBuffer || stubFalse;
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */

function isEqual(value, other) {
  return baseIsEqual(value, other);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */


function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */


function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */


var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */

function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */


function stubArray() {
  return [];
}
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */


function stubFalse() {
  return false;
}

module.exports = isEqual;

/***/ }),

/***/ 45564:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';
/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */

function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */


function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */


function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/** Built-in value references. */

var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max;
/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */

function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];

    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }

  return result;
}
/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick.
 * @returns {Object} Returns the new object.
 */


function basePick(object, props) {
  object = Object(object);
  return basePickBy(object, props, function (value, key) {
    return key in object;
  });
}
/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick from.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */


function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index],
        value = object[key];

    if (predicate(value, key)) {
      result[key] = value;
    }
  }

  return result;
}
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */


function baseRest(func, start) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}
/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */


function isFlattenable(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */


function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */


function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */


var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */

function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */


function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */


function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */


function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [props] The property identifiers to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */


var pick = baseRest(function (object, props) {
  return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
});
module.exports = pick;

/***/ }),

/***/ 30370:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
var LZString = function () {
  // private property
  var f = String.fromCharCode;
  var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
  var baseReverseDic = {};

  function getBaseValue(alphabet, character) {
    if (!baseReverseDic[alphabet]) {
      baseReverseDic[alphabet] = {};

      for (var i = 0; i < alphabet.length; i++) {
        baseReverseDic[alphabet][alphabet.charAt(i)] = i;
      }
    }

    return baseReverseDic[alphabet][character];
  }

  var LZString = {
    compressToBase64: function compressToBase64(input) {
      if (input == null) return "";

      var res = LZString._compress(input, 6, function (a) {
        return keyStrBase64.charAt(a);
      });

      switch (res.length % 4) {
        // To produce valid Base64
        default: // When could this happen ?

        case 0:
          return res;

        case 1:
          return res + "===";

        case 2:
          return res + "==";

        case 3:
          return res + "=";
      }
    },
    decompressFromBase64: function decompressFromBase64(input) {
      if (input == null) return "";
      if (input == "") return null;
      return LZString._decompress(input.length, 32, function (index) {
        return getBaseValue(keyStrBase64, input.charAt(index));
      });
    },
    compressToUTF16: function compressToUTF16(input) {
      if (input == null) return "";
      return LZString._compress(input, 15, function (a) {
        return f(a + 32);
      }) + " ";
    },
    decompressFromUTF16: function decompressFromUTF16(compressed) {
      if (compressed == null) return "";
      if (compressed == "") return null;
      return LZString._decompress(compressed.length, 16384, function (index) {
        return compressed.charCodeAt(index) - 32;
      });
    },
    //compress into uint8array (UCS-2 big endian format)
    compressToUint8Array: function compressToUint8Array(uncompressed) {
      var compressed = LZString.compress(uncompressed);
      var buf = new Uint8Array(compressed.length * 2); // 2 bytes per character

      for (var i = 0, TotalLen = compressed.length; i < TotalLen; i++) {
        var current_value = compressed.charCodeAt(i);
        buf[i * 2] = current_value >>> 8;
        buf[i * 2 + 1] = current_value % 256;
      }

      return buf;
    },
    //decompress from uint8array (UCS-2 big endian format)
    decompressFromUint8Array: function decompressFromUint8Array(compressed) {
      if (compressed === null || compressed === undefined) {
        return LZString.decompress(compressed);
      } else {
        var buf = new Array(compressed.length / 2); // 2 bytes per character

        for (var i = 0, TotalLen = buf.length; i < TotalLen; i++) {
          buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1];
        }

        var result = [];
        buf.forEach(function (c) {
          result.push(f(c));
        });
        return LZString.decompress(result.join(''));
      }
    },
    //compress into a string that is already URI encoded
    compressToEncodedURIComponent: function compressToEncodedURIComponent(input) {
      if (input == null) return "";
      return LZString._compress(input, 6, function (a) {
        return keyStrUriSafe.charAt(a);
      });
    },
    //decompress from an output of compressToEncodedURIComponent
    decompressFromEncodedURIComponent: function decompressFromEncodedURIComponent(input) {
      if (input == null) return "";
      if (input == "") return null;
      input = input.replace(/ /g, "+");
      return LZString._decompress(input.length, 32, function (index) {
        return getBaseValue(keyStrUriSafe, input.charAt(index));
      });
    },
    compress: function compress(uncompressed) {
      return LZString._compress(uncompressed, 16, function (a) {
        return f(a);
      });
    },
    _compress: function _compress(uncompressed, bitsPerChar, getCharFromInt) {
      if (uncompressed == null) return "";
      var i,
          value,
          context_dictionary = {},
          context_dictionaryToCreate = {},
          context_c = "",
          context_wc = "",
          context_w = "",
          context_enlargeIn = 2,
          // Compensate for the first entry which should not count
      context_dictSize = 3,
          context_numBits = 2,
          context_data = [],
          context_data_val = 0,
          context_data_position = 0,
          ii;

      for (ii = 0; ii < uncompressed.length; ii += 1) {
        context_c = uncompressed.charAt(ii);

        if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
          context_dictionary[context_c] = context_dictSize++;
          context_dictionaryToCreate[context_c] = true;
        }

        context_wc = context_w + context_c;

        if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
          context_w = context_wc;
        } else {
          if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
            if (context_w.charCodeAt(0) < 256) {
              for (i = 0; i < context_numBits; i++) {
                context_data_val = context_data_val << 1;

                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
              }

              value = context_w.charCodeAt(0);

              for (i = 0; i < 8; i++) {
                context_data_val = context_data_val << 1 | value & 1;

                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }

                value = value >> 1;
              }
            } else {
              value = 1;

              for (i = 0; i < context_numBits; i++) {
                context_data_val = context_data_val << 1 | value;

                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }

                value = 0;
              }

              value = context_w.charCodeAt(0);

              for (i = 0; i < 16; i++) {
                context_data_val = context_data_val << 1 | value & 1;

                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }

                value = value >> 1;
              }
            }

            context_enlargeIn--;

            if (context_enlargeIn == 0) {
              context_enlargeIn = Math.pow(2, context_numBits);
              context_numBits++;
            }

            delete context_dictionaryToCreate[context_w];
          } else {
            value = context_dictionary[context_w];

            for (i = 0; i < context_numBits; i++) {
              context_data_val = context_data_val << 1 | value & 1;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }

              value = value >> 1;
            }
          }

          context_enlargeIn--;

          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          } // Add wc to the dictionary.


          context_dictionary[context_wc] = context_dictSize++;
          context_w = String(context_c);
        }
      } // Output the code for w.


      if (context_w !== "") {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
          if (context_w.charCodeAt(0) < 256) {
            for (i = 0; i < context_numBits; i++) {
              context_data_val = context_data_val << 1;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }

            value = context_w.charCodeAt(0);

            for (i = 0; i < 8; i++) {
              context_data_val = context_data_val << 1 | value & 1;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }

              value = value >> 1;
            }
          } else {
            value = 1;

            for (i = 0; i < context_numBits; i++) {
              context_data_val = context_data_val << 1 | value;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }

              value = 0;
            }

            value = context_w.charCodeAt(0);

            for (i = 0; i < 16; i++) {
              context_data_val = context_data_val << 1 | value & 1;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }

              value = value >> 1;
            }
          }

          context_enlargeIn--;

          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }

          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];

          for (i = 0; i < context_numBits; i++) {
            context_data_val = context_data_val << 1 | value & 1;

            if (context_data_position == bitsPerChar - 1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }

            value = value >> 1;
          }
        }

        context_enlargeIn--;

        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
      } // Mark the end of the stream


      value = 2;

      for (i = 0; i < context_numBits; i++) {
        context_data_val = context_data_val << 1 | value & 1;

        if (context_data_position == bitsPerChar - 1) {
          context_data_position = 0;
          context_data.push(getCharFromInt(context_data_val));
          context_data_val = 0;
        } else {
          context_data_position++;
        }

        value = value >> 1;
      } // Flush the last char


      while (true) {
        context_data_val = context_data_val << 1;

        if (context_data_position == bitsPerChar - 1) {
          context_data.push(getCharFromInt(context_data_val));
          break;
        } else context_data_position++;
      }

      return context_data.join('');
    },
    decompress: function decompress(compressed) {
      if (compressed == null) return "";
      if (compressed == "") return null;
      return LZString._decompress(compressed.length, 32768, function (index) {
        return compressed.charCodeAt(index);
      });
    },
    _decompress: function _decompress(length, resetValue, getNextValue) {
      var dictionary = [],
          next,
          enlargeIn = 4,
          dictSize = 4,
          numBits = 3,
          entry = "",
          result = [],
          i,
          w,
          bits,
          resb,
          maxpower,
          power,
          c,
          data = {
        val: getNextValue(0),
        position: resetValue,
        index: 1
      };

      for (i = 0; i < 3; i += 1) {
        dictionary[i] = i;
      }

      bits = 0;
      maxpower = Math.pow(2, 2);
      power = 1;

      while (power != maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;

        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }

        bits |= (resb > 0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (next = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2, 8);
          power = 1;

          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;

            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }

            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }

          c = f(bits);
          break;

        case 1:
          bits = 0;
          maxpower = Math.pow(2, 16);
          power = 1;

          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;

            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }

            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }

          c = f(bits);
          break;

        case 2:
          return "";
      }

      dictionary[3] = c;
      w = c;
      result.push(c);

      while (true) {
        if (data.index > length) {
          return "";
        }

        bits = 0;
        maxpower = Math.pow(2, numBits);
        power = 1;

        while (power != maxpower) {
          resb = data.val & data.position;
          data.position >>= 1;

          if (data.position == 0) {
            data.position = resetValue;
            data.val = getNextValue(data.index++);
          }

          bits |= (resb > 0 ? 1 : 0) * power;
          power <<= 1;
        }

        switch (c = bits) {
          case 0:
            bits = 0;
            maxpower = Math.pow(2, 8);
            power = 1;

            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;

              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }

              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }

            dictionary[dictSize++] = f(bits);
            c = dictSize - 1;
            enlargeIn--;
            break;

          case 1:
            bits = 0;
            maxpower = Math.pow(2, 16);
            power = 1;

            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;

              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }

              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }

            dictionary[dictSize++] = f(bits);
            c = dictSize - 1;
            enlargeIn--;
            break;

          case 2:
            return result.join('');
        }

        if (enlargeIn == 0) {
          enlargeIn = Math.pow(2, numBits);
          numBits++;
        }

        if (dictionary[c]) {
          entry = dictionary[c];
        } else {
          if (c === dictSize) {
            entry = w + w.charAt(0);
          } else {
            return null;
          }
        }

        result.push(entry); // Add w+entry[0] to the dictionary.

        dictionary[dictSize++] = w + entry.charAt(0);
        enlargeIn--;
        w = entry;

        if (enlargeIn == 0) {
          enlargeIn = Math.pow(2, numBits);
          numBits++;
        }
      }
    }
  };
  return LZString;
}();

if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return LZString;
  }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

/***/ }),

/***/ 24070:
/***/ (function(module) {

"use strict";
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
} // Resolves . and .. elements in a path with directory names


function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;

  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length) code = path.charCodeAt(i);else if (code === 47
    /*/*/
    ) break;else code = 47
    /*/*/
    ;

    if (code === 47
    /*/*/
    ) {
        if (lastSlash === i - 1 || dots === 1) {// NOOP
        } else if (lastSlash !== i - 1 && dots === 2) {
          if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46
          /*.*/
          || res.charCodeAt(res.length - 2) !== 46
          /*.*/
          ) {
              if (res.length > 2) {
                var lastSlashIndex = res.lastIndexOf('/');

                if (lastSlashIndex !== res.length - 1) {
                  if (lastSlashIndex === -1) {
                    res = '';
                    lastSegmentLength = 0;
                  } else {
                    res = res.slice(0, lastSlashIndex);
                    lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
                  }

                  lastSlash = i;
                  dots = 0;
                  continue;
                }
              } else if (res.length === 2 || res.length === 1) {
                res = '';
                lastSegmentLength = 0;
                lastSlash = i;
                dots = 0;
                continue;
              }
            }

          if (allowAboveRoot) {
            if (res.length > 0) res += '/..';else res = '..';
            lastSegmentLength = 2;
          }
        } else {
          if (res.length > 0) res += '/' + path.slice(lastSlash + 1, i);else res = path.slice(lastSlash + 1, i);
          lastSegmentLength = i - lastSlash - 1;
        }

        lastSlash = i;
        dots = 0;
      } else if (code === 46
    /*.*/
    && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }

  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');

  if (!dir) {
    return base;
  }

  if (dir === pathObject.root) {
    return dir + base;
  }

  return dir + sep + base;
}

var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0) path = arguments[i];else {
        if (cwd === undefined) cwd = process.cwd();
        path = cwd;
      }
      assertPath(path); // Skip empty entries

      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47
      /*/*/
      ;
    } // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
    // Normalize the path


    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0) return '/' + resolvedPath;else return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },
  normalize: function normalize(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var isAbsolute = path.charCodeAt(0) === 47
    /*/*/
    ;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47
    /*/*/
    ; // Normalize the path

    path = normalizeStringPosix(path, !isAbsolute);
    if (path.length === 0 && !isAbsolute) path = '.';
    if (path.length > 0 && trailingSeparator) path += '/';
    if (isAbsolute) return '/' + path;
    return path;
  },
  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47
    /*/*/
    ;
  },
  join: function join() {
    if (arguments.length === 0) return '.';
    var joined;

    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);

      if (arg.length > 0) {
        if (joined === undefined) joined = arg;else joined += '/' + arg;
      }
    }

    if (joined === undefined) return '.';
    return posix.normalize(joined);
  },
  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);
    if (from === to) return '';
    from = posix.resolve(from);
    to = posix.resolve(to);
    if (from === to) return ''; // Trim any leading backslashes

    var fromStart = 1;

    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47
      /*/*/
      ) break;
    }

    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart; // Trim any leading backslashes

    var toStart = 1;

    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47
      /*/*/
      ) break;
    }

    var toEnd = to.length;
    var toLen = toEnd - toStart; // Compare paths to find the longest common path from root

    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;

    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47
          /*/*/
          ) {
              // We get here if `from` is the exact base path for `to`.
              // For example: from='/foo/bar'; to='/foo/bar/baz'
              return to.slice(toStart + i + 1);
            } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47
          /*/*/
          ) {
              // We get here if `to` is the exact base path for `from`.
              // For example: from='/foo/bar/baz'; to='/foo/bar'
              lastCommonSep = i;
            } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }

        break;
      }

      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode) break;else if (fromCode === 47
      /*/*/
      ) lastCommonSep = i;
    }

    var out = ''; // Generate the relative path based on the path difference between `to`
    // and `from`

    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47
      /*/*/
      ) {
          if (out.length === 0) out += '..';else out += '/..';
        }
    } // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts


    if (out.length > 0) return out + to.slice(toStart + lastCommonSep);else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47
      /*/*/
      ) ++toStart;
      return to.slice(toStart);
    }
  },
  _makeLong: function _makeLong(path) {
    return path;
  },
  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47
    /*/*/
    ;
    var end = -1;
    var matchedSlash = true;

    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);

      if (code === 47
      /*/*/
      ) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) return '//';
    return path.slice(0, end);
  },
  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
    assertPath(path);
    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;

      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);

        if (code === 47
        /*/*/
        ) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }

          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47
        /*/*/
        ) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1) return '';
      return path.slice(start, end);
    }
  },
  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true; // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find

    var preDotState = 0;

    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);

      if (code === 47
      /*/*/
      ) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }

          continue;
        }

      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }

      if (code === 46
      /*.*/
      ) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }

    return path.slice(startDot, end);
  },
  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }

    return _format('/', pathObject);
  },
  parse: function parse(path) {
    assertPath(path);
    var ret = {
      root: '',
      dir: '',
      base: '',
      ext: '',
      name: ''
    };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47
    /*/*/
    ;
    var start;

    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }

    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1; // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find

    var preDotState = 0; // Get non-dir info

    for (; i >= start; --i) {
      code = path.charCodeAt(i);

      if (code === 47
      /*/*/
      ) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }

          continue;
        }

      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }

      if (code === 46
      /*.*/
      ) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }

      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';
    return ret;
  },
  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};
posix.posix = posix;
module.exports = posix;

/***/ }),

/***/ 94238:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _slicedToArray2 = __webpack_require__(4509);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = __webpack_require__(85089);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(16881);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(31205);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(63075);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(51140);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(68462);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactNodeResolver = __webpack_require__(75999);

var _reactNodeResolver2 = _interopRequireDefault(_reactNodeResolver);

var _lodash = __webpack_require__(4934);

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = __webpack_require__(45564);

var _lodash4 = _interopRequireDefault(_lodash3);

var _codesandboxer = __webpack_require__(82276);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var CodeSandboxDeployer = function (_Component) {
  (0, _inherits3.default)(CodeSandboxDeployer, _Component);

  function CodeSandboxDeployer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CodeSandboxDeployer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CodeSandboxDeployer.__proto__ || (0, _getPrototypeOf2.default)(CodeSandboxDeployer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      parameters: '',
      isLoading: false,
      isDeploying: false,
      fileName: 'example'
    }, _this.shouldReload = false, _this.loadFiles = function () {
      var _this$props = _this.props,
          onLoadComplete = _this$props.onLoadComplete,
          providedFiles = _this$props.providedFiles,
          dependencies = _this$props.dependencies,
          name = _this$props.name; // by assembling a deploy promise, we can save it for later if loadFiles is
      // being called by `preload`, and preload can use it once it is ready.
      // We return deployPromise at the end so that non-preloaded calls can then be
      // resolved

      var deployPromise = (0, _codesandboxer.fetchFiles)(_this.props).then(function (fetchedInfo) {
        var _finaliseCSB = (0, _codesandboxer.finaliseCSB)(fetchedInfo, {
          extraFiles: providedFiles,
          extraDependencies: dependencies,
          name: name
        }),
            parameters = _finaliseCSB.parameters;

        _this.setState({
          parameters: parameters,
          isLoading: false,
          files: fetchedInfo.files,
          fileName: fetchedInfo.fileName
        }, function () {
          if (onLoadComplete) {
            onLoadComplete({
              parameters: parameters,
              files: fetchedInfo.files
            });
          }
        });
      }).catch(function (error) {
        _this.setState({
          error: error,
          isLoading: false
        });

        if (onLoadComplete) onLoadComplete({
          error: error
        });
      });

      _this.setState({
        isLoading: true,
        deployPromise: deployPromise
      });

      return deployPromise;
    }, _this.deploy = function () {
      var _this$props2 = _this.props,
          afterDeploy = _this$props2.afterDeploy,
          skipRedirect = _this$props2.skipRedirect,
          afterDeployError = _this$props2.afterDeployError;
      var _this$state = _this.state,
          parameters = _this$state.parameters,
          error = _this$state.error,
          fileName = _this$state.fileName;
      if (error) return;
      (0, _codesandboxer.sendFilesToCSB)(parameters, {
        fileName: fileName
      }).then(function (_ref2) {
        var sandboxId = _ref2.sandboxId,
            sandboxUrl = _ref2.sandboxUrl;

        _this.setState({
          sandboxId: sandboxId,
          sandboxUrl: sandboxUrl,
          isDeploying: false,
          isLoading: false
        });

        if (!skipRedirect) {
          window.open(sandboxUrl);
        }

        if (afterDeploy) {
          afterDeploy((0, _codesandboxer.getSandboxUrl)(sandboxId, 'embed'), sandboxId);
        }
      }).catch(function (errors) {
        if (afterDeployError) {
          afterDeployError({
            name: 'error deploying to codesandbox',
            content: errors
          });
        }

        _this.setState({
          error: {
            name: 'error deploying to codesandbox',
            content: errors
          }
        });
      });
    }, _this.deployToCSB = function (e) {
      var _this$state2 = _this.state,
          deployPromise = _this$state2.deployPromise,
          isDeploying = _this$state2.isDeploying;

      if (e) {
        e.preventDefault();
      }

      if (isDeploying) return null;

      _this.setState({
        isDeploying: true
      });

      if (!_this.shouldReload && deployPromise) {
        deployPromise.then(_this.deploy);
      } else {
        _this.shouldReload = false;

        _this.loadFiles().then(_this.deploy);
      }
    }, _this.getButton = function (ref) {
      if (!ref) return;
      _this.button = ref;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CodeSandboxDeployer, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;
      /* If props related to loading files have been changed, next deploy should reload files */

      /* The props that are compared should be the same as the arguments of fetchFiles */


      var compareKeys = ['examplePath', 'gitInfo', 'importReplacements', 'dependencies', 'providedFiles', 'name', 'extensions', 'template'];

      if (!(0, _lodash2.default)((0, _lodash4.default)(this.props, compareKeys), (0, _lodash4.default)(prevProps, compareKeys))) {
        this.shouldReload = true;
      } else {
        /* pkgJSON and example also need to be compared, but may be promises, which must be resolved before they can be compared */
        _promise2.default.all([this.props.example, prevProps.example]).then(function (_ref3) {
          var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
              example = _ref4[0],
              prevExample = _ref4[1];

          if (example !== prevExample) {
            _this2.shouldReload = true;
          } else {
            _promise2.default.all([_this2.props.pkgJSON, prevProps.pkgJSON]).then(function (_ref5) {
              var _ref6 = (0, _slicedToArray3.default)(_ref5, 2),
                  pkgJSON = _ref6[0],
                  prevPkgJSON = _ref6[1];

              if (!(0, _lodash2.default)(pkgJSON, prevPkgJSON)) {
                _this2.shouldReload = true;
              }
            });
          }
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoDeploy) {
        this.deployToCSB();
        return;
      }

      if (this.button) this.button.addEventListener('click', this.deployToCSB);
      if (this.props.preload) this.loadFiles();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.button) this.button.removeEventListener('click', this.deployToCSB);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isLoading = _state.isLoading,
          isDeploying = _state.isDeploying,
          error = _state.error,
          sandboxId = _state.sandboxId,
          sandboxUrl = _state.sandboxUrl;
      return _react2.default.createElement(_reactNodeResolver2.default, {
        innerRef: this.getButton
      }, this.props.children({
        isLoading: isLoading,
        isDeploying: isDeploying,
        error: error,
        sandboxId: sandboxId,
        sandboxUrl: sandboxUrl
      }));
    }
  }]);
  return CodeSandboxDeployer;
}(_react.Component);

CodeSandboxDeployer.defaultProps = {
  children: function children() {
    return _react2.default.createElement('button', {
      type: 'submit'
    }, 'Deploy to CodeSandbox');
  },
  pkgJSON: {},
  dependencies: {},
  providedFiles: {},
  importReplacements: [],
  extensions: [],
  style: {
    display: 'inline-block'
  }
};
exports.default = CodeSandboxDeployer;

/***/ }),

/***/ 45779:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});

var _CodeSandboxer = __webpack_require__(94238);

Object.defineProperty(exports, "Z", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CodeSandboxer).default;
  }
}));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

/***/ }),

/***/ 89355:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
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

var _react = __webpack_require__(67294);

var _reactDom = __webpack_require__(73935);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
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
}

var NodeResolver = function (_Component) {
  _inherits(NodeResolver, _Component);

  function NodeResolver() {
    _classCallCheck(this, NodeResolver);

    return _possibleConstructorReturn(this, (NodeResolver.__proto__ || Object.getPrototypeOf(NodeResolver)).apply(this, arguments));
  }

  _createClass(NodeResolver, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.innerRef((0, _reactDom.findDOMNode)(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.innerRef(null);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return NodeResolver;
}(_react.Component);

exports.default = NodeResolver;

/***/ }),

/***/ 75999:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _NodeResolver = __webpack_require__(89355);

Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NodeResolver).default;
  }
}));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

/***/ }),

/***/ 48983:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(83036);
__webpack_require__(48385);
module.exports = __webpack_require__(94731).Array.from;


/***/ }),

/***/ 45198:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(46740);
__webpack_require__(83036);
module.exports = __webpack_require__(41764);


/***/ }),

/***/ 72066:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(46740);
__webpack_require__(83036);
module.exports = __webpack_require__(50861);


/***/ }),

/***/ 78059:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var core = __webpack_require__(94731);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 88077:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(80529);
module.exports = __webpack_require__(94731).Object.assign;


/***/ }),

/***/ 98339:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(96924);
var $Object = __webpack_require__(94731).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ 44003:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(1001);
var $Object = __webpack_require__(94731).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 15175:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(71500);
module.exports = __webpack_require__(94731).Object.getPrototypeOf;


/***/ }),

/***/ 11358:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(96559);
module.exports = __webpack_require__(94731).Object.keys;


/***/ }),

/***/ 92912:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(70845);
module.exports = __webpack_require__(94731).Object.setPrototypeOf;


/***/ }),

/***/ 63800:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(6519);
__webpack_require__(83036);
__webpack_require__(46740);
__webpack_require__(73140);
__webpack_require__(89750);
__webpack_require__(43112);
module.exports = __webpack_require__(94731).Promise;


/***/ }),

/***/ 60165:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(6519);
__webpack_require__(83036);
__webpack_require__(46740);
__webpack_require__(77347);
__webpack_require__(4026);
__webpack_require__(3718);
__webpack_require__(36891);
module.exports = __webpack_require__(94731).Set;


/***/ }),

/***/ 99583:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(83835);
__webpack_require__(6519);
__webpack_require__(54427);
__webpack_require__(19089);
module.exports = __webpack_require__(94731).Symbol;


/***/ }),

/***/ 3276:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(83036);
__webpack_require__(46740);
module.exports = __webpack_require__(27613).f('iterator');


/***/ }),

/***/ 71449:
/***/ (function(module) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 65345:
/***/ (function(module) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ 77055:
/***/ (function(module) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ 26504:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(89151);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 40199:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var forOf = __webpack_require__(12859);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ 44389:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(64874);
var toLength = __webpack_require__(68317);
var toAbsoluteIndex = __webpack_require__(9838);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 57186:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(11821);
var IObject = __webpack_require__(72312);
var toObject = __webpack_require__(19411);
var toLength = __webpack_require__(68317);
var asc = __webpack_require__(66427);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ 478:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(89151);
var isArray = __webpack_require__(57539);
var SPECIES = __webpack_require__(25346)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ 66427:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(478);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ 93965:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(84499);
var TAG = __webpack_require__(25346)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ 84499:
/***/ (function(module) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 39696:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(21738).f;
var create = __webpack_require__(34055);
var redefineAll = __webpack_require__(77271);
var ctx = __webpack_require__(11821);
var anInstance = __webpack_require__(77055);
var forOf = __webpack_require__(12859);
var $iterDefine = __webpack_require__(54346);
var step = __webpack_require__(54098);
var setSpecies = __webpack_require__(38539);
var DESCRIPTORS = __webpack_require__(95810);
var fastKey = __webpack_require__(55965).fastKey;
var validate = __webpack_require__(8758);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ 61227:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(93965);
var from = __webpack_require__(40199);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ 50196:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(99362);
var $export = __webpack_require__(49901);
var meta = __webpack_require__(55965);
var fails = __webpack_require__(93777);
var hide = __webpack_require__(96519);
var redefineAll = __webpack_require__(77271);
var forOf = __webpack_require__(12859);
var anInstance = __webpack_require__(77055);
var isObject = __webpack_require__(89151);
var setToStringTag = __webpack_require__(10420);
var dP = __webpack_require__(21738).f;
var each = __webpack_require__(57186)(0);
var DESCRIPTORS = __webpack_require__(95810);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ 94731:
/***/ (function(module) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 46184:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(21738);
var createDesc = __webpack_require__(38051);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 11821:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(71449);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
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

/***/ 11605:
/***/ (function(module) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 95810:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(93777)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 72571:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(89151);
var document = __webpack_require__(99362).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 35568:
/***/ (function(module) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 52052:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(99656);
var gOPS = __webpack_require__(32614);
var pIE = __webpack_require__(43416);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ 49901:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(99362);
var core = __webpack_require__(94731);
var ctx = __webpack_require__(11821);
var hide = __webpack_require__(96519);
var has = __webpack_require__(3571);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 93777:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 12859:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ctx = __webpack_require__(11821);
var call = __webpack_require__(13749);
var isArrayIter = __webpack_require__(4034);
var anObject = __webpack_require__(26504);
var toLength = __webpack_require__(68317);
var getIterFn = __webpack_require__(93898);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ 99362:
/***/ (function(module) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 3571:
/***/ (function(module) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 96519:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var dP = __webpack_require__(21738);
var createDesc = __webpack_require__(38051);
module.exports = __webpack_require__(95810) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 10203:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var document = __webpack_require__(99362).document;
module.exports = document && document.documentElement;


/***/ }),

/***/ 93254:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = !__webpack_require__(95810) && !__webpack_require__(93777)(function () {
  return Object.defineProperty(__webpack_require__(72571)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 29029:
/***/ (function(module) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ 72312:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(84499);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 4034:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(33135);
var ITERATOR = __webpack_require__(25346)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ 57539:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(84499);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 89151:
/***/ (function(module) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 13749:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(26504);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ 69163:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(34055);
var descriptor = __webpack_require__(38051);
var setToStringTag = __webpack_require__(10420);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(96519)(IteratorPrototype, __webpack_require__(25346)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ 54346:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(57346);
var $export = __webpack_require__(49901);
var redefine = __webpack_require__(11865);
var hide = __webpack_require__(96519);
var Iterators = __webpack_require__(33135);
var $iterCreate = __webpack_require__(69163);
var setToStringTag = __webpack_require__(10420);
var getPrototypeOf = __webpack_require__(91146);
var ITERATOR = __webpack_require__(25346)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ 18606:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ITERATOR = __webpack_require__(25346)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ 54098:
/***/ (function(module) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ 33135:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 57346:
/***/ (function(module) {

module.exports = true;


/***/ }),

/***/ 55965:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var META = __webpack_require__(3535)('meta');
var isObject = __webpack_require__(89151);
var has = __webpack_require__(3571);
var setDesc = __webpack_require__(21738).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(93777)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ 22729:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(99362);
var macrotask = __webpack_require__(50746).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(84499)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ 81351:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(71449);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ 50266:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(95810);
var getKeys = __webpack_require__(99656);
var gOPS = __webpack_require__(32614);
var pIE = __webpack_require__(43416);
var toObject = __webpack_require__(19411);
var IObject = __webpack_require__(72312);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(93777)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 34055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(26504);
var dPs = __webpack_require__(20121);
var enumBugKeys = __webpack_require__(35568);
var IE_PROTO = __webpack_require__(46210)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(72571)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(10203).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ 21738:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var anObject = __webpack_require__(26504);
var IE8_DOM_DEFINE = __webpack_require__(93254);
var toPrimitive = __webpack_require__(25408);
var dP = Object.defineProperty;

exports.f = __webpack_require__(95810) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 20121:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var dP = __webpack_require__(21738);
var anObject = __webpack_require__(26504);
var getKeys = __webpack_require__(99656);

module.exports = __webpack_require__(95810) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 18437:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var pIE = __webpack_require__(43416);
var createDesc = __webpack_require__(38051);
var toIObject = __webpack_require__(64874);
var toPrimitive = __webpack_require__(25408);
var has = __webpack_require__(3571);
var IE8_DOM_DEFINE = __webpack_require__(93254);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(95810) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ 42029:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(64874);
var gOPN = __webpack_require__(51471).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ 51471:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(36152);
var hiddenKeys = __webpack_require__(35568).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ 32614:
/***/ (function(__unused_webpack_module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 91146:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(3571);
var toObject = __webpack_require__(19411);
var IE_PROTO = __webpack_require__(46210)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ 36152:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(3571);
var toIObject = __webpack_require__(64874);
var arrayIndexOf = __webpack_require__(44389)(false);
var IE_PROTO = __webpack_require__(46210)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 99656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(36152);
var enumBugKeys = __webpack_require__(35568);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 43416:
/***/ (function(__unused_webpack_module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 44903:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(49901);
var core = __webpack_require__(94731);
var fails = __webpack_require__(93777);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ 64997:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ 60749:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(26504);
var isObject = __webpack_require__(89151);
var newPromiseCapability = __webpack_require__(81351);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ 38051:
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 77271:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hide = __webpack_require__(96519);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ 11865:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(96519);


/***/ }),

/***/ 32894:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(49901);
var aFunction = __webpack_require__(71449);
var ctx = __webpack_require__(11821);
var forOf = __webpack_require__(12859);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ 23773:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(49901);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ 29300:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(89151);
var anObject = __webpack_require__(26504);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(11821)(Function.call, __webpack_require__(18437).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ 38539:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(99362);
var core = __webpack_require__(94731);
var dP = __webpack_require__(21738);
var DESCRIPTORS = __webpack_require__(95810);
var SPECIES = __webpack_require__(25346)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ 10420:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var def = __webpack_require__(21738).f;
var has = __webpack_require__(3571);
var TAG = __webpack_require__(25346)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ 46210:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(77571)('keys');
var uid = __webpack_require__(3535);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 77571:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var core = __webpack_require__(94731);
var global = __webpack_require__(99362);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(57346) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 81402:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(26504);
var aFunction = __webpack_require__(71449);
var SPECIES = __webpack_require__(25346)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ 2222:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(41485);
var defined = __webpack_require__(11605);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ 50746:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ctx = __webpack_require__(11821);
var invoke = __webpack_require__(29029);
var html = __webpack_require__(10203);
var cel = __webpack_require__(72571);
var global = __webpack_require__(99362);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(84499)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ 9838:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(41485);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 41485:
/***/ (function(module) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 64874:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(72312);
var defined = __webpack_require__(11605);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 68317:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(41485);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 19411:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(11605);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 25408:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(89151);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 3535:
/***/ (function(module) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 59690:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(99362);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ 8758:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(89151);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ 21875:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(99362);
var core = __webpack_require__(94731);
var LIBRARY = __webpack_require__(57346);
var wksExt = __webpack_require__(27613);
var defineProperty = __webpack_require__(21738).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ 27613:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

exports.f = __webpack_require__(25346);


/***/ }),

/***/ 25346:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var store = __webpack_require__(77571)('wks');
var uid = __webpack_require__(3535);
var Symbol = __webpack_require__(99362).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 93898:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(93965);
var ITERATOR = __webpack_require__(25346)('iterator');
var Iterators = __webpack_require__(33135);
module.exports = __webpack_require__(94731).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 41764:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(26504);
var get = __webpack_require__(93898);
module.exports = __webpack_require__(94731).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ 50861:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(93965);
var ITERATOR = __webpack_require__(25346)('iterator');
var Iterators = __webpack_require__(33135);
module.exports = __webpack_require__(94731).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ 48385:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(11821);
var $export = __webpack_require__(49901);
var toObject = __webpack_require__(19411);
var call = __webpack_require__(13749);
var isArrayIter = __webpack_require__(4034);
var toLength = __webpack_require__(68317);
var createProperty = __webpack_require__(46184);
var getIterFn = __webpack_require__(93898);

$export($export.S + $export.F * !__webpack_require__(18606)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 61092:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(65345);
var step = __webpack_require__(54098);
var Iterators = __webpack_require__(33135);
var toIObject = __webpack_require__(64874);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(54346)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 80529:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(49901);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(50266) });


/***/ }),

/***/ 96924:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $export = __webpack_require__(49901);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(34055) });


/***/ }),

/***/ 1001:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $export = __webpack_require__(49901);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(95810), 'Object', { defineProperty: __webpack_require__(21738).f });


/***/ }),

/***/ 71500:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(19411);
var $getPrototypeOf = __webpack_require__(91146);

__webpack_require__(44903)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ 96559:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(19411);
var $keys = __webpack_require__(99656);

__webpack_require__(44903)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 70845:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(49901);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(29300).set });


/***/ }),

/***/ 6519:
/***/ (function() {



/***/ }),

/***/ 73140:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(57346);
var global = __webpack_require__(99362);
var ctx = __webpack_require__(11821);
var classof = __webpack_require__(93965);
var $export = __webpack_require__(49901);
var isObject = __webpack_require__(89151);
var aFunction = __webpack_require__(71449);
var anInstance = __webpack_require__(77055);
var forOf = __webpack_require__(12859);
var speciesConstructor = __webpack_require__(81402);
var task = __webpack_require__(50746).set;
var microtask = __webpack_require__(22729)();
var newPromiseCapabilityModule = __webpack_require__(81351);
var perform = __webpack_require__(64997);
var userAgent = __webpack_require__(59690);
var promiseResolve = __webpack_require__(60749);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(25346)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(77271)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(10420)($Promise, PROMISE);
__webpack_require__(38539)(PROMISE);
Wrapper = __webpack_require__(94731)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(18606)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ 77347:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(39696);
var validate = __webpack_require__(8758);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(50196)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ 83036:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(2222)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(54346)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 83835:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(99362);
var has = __webpack_require__(3571);
var DESCRIPTORS = __webpack_require__(95810);
var $export = __webpack_require__(49901);
var redefine = __webpack_require__(11865);
var META = __webpack_require__(55965).KEY;
var $fails = __webpack_require__(93777);
var shared = __webpack_require__(77571);
var setToStringTag = __webpack_require__(10420);
var uid = __webpack_require__(3535);
var wks = __webpack_require__(25346);
var wksExt = __webpack_require__(27613);
var wksDefine = __webpack_require__(21875);
var enumKeys = __webpack_require__(52052);
var isArray = __webpack_require__(57539);
var anObject = __webpack_require__(26504);
var isObject = __webpack_require__(89151);
var toObject = __webpack_require__(19411);
var toIObject = __webpack_require__(64874);
var toPrimitive = __webpack_require__(25408);
var createDesc = __webpack_require__(38051);
var _create = __webpack_require__(34055);
var gOPNExt = __webpack_require__(42029);
var $GOPD = __webpack_require__(18437);
var $GOPS = __webpack_require__(32614);
var $DP = __webpack_require__(21738);
var $keys = __webpack_require__(99656);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(51471).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(43416).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(57346)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(96519)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ 89750:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(49901);
var core = __webpack_require__(94731);
var global = __webpack_require__(99362);
var speciesConstructor = __webpack_require__(81402);
var promiseResolve = __webpack_require__(60749);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ 43112:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(49901);
var newPromiseCapability = __webpack_require__(81351);
var perform = __webpack_require__(64997);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ 36891:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(32894)('Set');


/***/ }),

/***/ 3718:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(23773)('Set');


/***/ }),

/***/ 4026:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(49901);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(61227)('Set') });


/***/ }),

/***/ 54427:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(21875)('asyncIterator');


/***/ }),

/***/ 19089:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(21875)('observable');


/***/ }),

/***/ 46740:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(61092);
var global = __webpack_require__(99362);
var hide = __webpack_require__(96519);
var Iterators = __webpack_require__(33135);
var TO_STRING_TAG = __webpack_require__(25346)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ 52548:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(58544);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 58544:
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = "object" === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ 18574:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CodeSandboxButton; }
/* harmony export */ });
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99330);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36176);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_codesandboxer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45779);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95453);
/* harmony import */ var _LoadingProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2285);






var pkgJSON = {
  name: "jacdac-demo",
  version: "0.0.0",
  dependencies: {
    "jacdac-ts": "latest"
  }
};
function CodeSandboxButton(props) {
  var source = props.source;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_codesandboxer__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    examplePath: "index.js",
    example: source,
    pkgJSON: pkgJSON,
    importReplacements: [["src", pkgJSON.name]],
    template: "create-react-app-typescript",
    afterDeploy: console.log
  }, function (_ref) {
    var isLoading = _ref.isLoading,
        error = _ref.error;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_LoadingProgress__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
      type: "submit",
      disabled: !!error
    }, "Try in CodeSandbox"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      severity: "error"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, null, "Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("pre", null, error + "")));
  });
}

/***/ }),

/***/ 2285:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ LoadingProgress; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27136);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function LoadingProgress(props) {
  var size = props.size;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    disableShrink: true,
    variant: "indeterminate",
    size: size || "1em"
  });
}

/***/ })

}]);
//# sourceMappingURL=8574-61ac1f31b811859e672b.js.map