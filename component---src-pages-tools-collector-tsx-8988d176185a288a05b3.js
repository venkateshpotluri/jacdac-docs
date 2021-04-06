(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "22ne":
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

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "8"
}), 'FiberManualRecord');

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

/***/ "FrwU":
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
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.default = _default;

/***/ }),

/***/ "TD2k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useGridBreakpoints; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2K/c");


function useGridBreakpoints(itemCount) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"]),
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

  if (drawerType != _AppContext__WEBPACK_IMPORTED_MODULE_1__[/* DrawerType */ "b"].None) return {
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

/***/ "ax+9":
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
  d: "M6 6h12v12H6z"
}), 'Stop');

exports.default = _default;

/***/ }),

/***/ "dMKM":
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
  d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"
}), 'SaveAlt');

exports.default = _default;

/***/ }),

/***/ "e7gs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorAggregatorClient; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HaE+");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dI71");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("N1P3");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("INgz");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ZfHV");
/* harmony import */ var _pack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("BsyY");
/* harmony import */ var _serviceclient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("eoX3");
/* harmony import */ var _spec__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Z8Ma");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Zo1I");




function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var SensorAggregatorClient = /*#__PURE__*/function (_JDServiceClient) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(SensorAggregatorClient, _JDServiceClient);

  function SensorAggregatorClient(service) {
    var _this;

    _this = _JDServiceClient.call(this, service) || this;
    _this.service.registersUseAcks = true;
    return _this;
  }

  var _proto = SensorAggregatorClient.prototype;

  _proto.setInputs = /*#__PURE__*/function () {
    var _setInputs = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(cfg) {
      var _cfg$inputs;

      var error, mapType, totalSampleSize, inputs;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              mapType = function _mapType(tp) {
                switch (tp) {
                  case 1:
                    return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_3__[/* SensorAggregatorSampleType */ "xc"].U8;

                  case 2:
                    return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_3__[/* SensorAggregatorSampleType */ "xc"].U16;

                  case 4:
                    return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_3__[/* SensorAggregatorSampleType */ "xc"].U32;

                  case -1:
                    return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_3__[/* SensorAggregatorSampleType */ "xc"].I8;

                  case -2:
                    return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_3__[/* SensorAggregatorSampleType */ "xc"].I16;

                  case -4:
                    return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_3__[/* SensorAggregatorSampleType */ "xc"].I32;

                  default:
                    error("unknown storage type");
                }
              };

              error = function _error(msg) {
                throw new Error("Aggregator inputs: " + msg);
              };

              if (!cfg || !cfg.inputs) error("invalid input format");
              totalSampleSize = 0;
              inputs = (_cfg$inputs = cfg.inputs) === null || _cfg$inputs === void 0 ? void 0 : _cfg$inputs.map(function (input) {
                var deviceId = input.deviceId,
                    serviceIndex = input.serviceIndex,
                    serviceClass = input.serviceClass;
                if (!!deviceId !== !!serviceIndex) error("deviceId and serviceIndex must be specified together");
                var specification = Object(_spec__WEBPACK_IMPORTED_MODULE_8__[/* serviceSpecificationFromClassIdentifier */ "D"])(serviceClass);
                if (!specification) error("missing specification from service 0x" + serviceClass.toString(16));
                var freeze = !!deviceId;
                var readingReg = specification.packets.find(_spec__WEBPACK_IMPORTED_MODULE_8__[/* isReading */ "r"]);
                if (!readingReg) error("service 0x" + serviceClass.toString(16) + " does not have a reading register");
                var sampleType = undefined;
                var sampleSize = 0;
                var sampleShift = 0;

                for (var _iterator = _createForOfIteratorHelperLoose(readingReg.fields), _step; !(_step = _iterator()).done;) {
                  var field = _step.value;
                  sampleSize += Math.abs(field.storage);

                  if (sampleType === undefined) {
                    sampleType = mapType(field.storage);
                    sampleShift = field.shift || 0;
                  }

                  if (sampleType != mapType(field.storage) || sampleShift != (field.shift || 0)) error("heterogenous field types");
                }

                totalSampleSize += sampleSize;
                return Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* bufferConcat */ "i"])(freeze ? Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* fromHex */ "u"])(deviceId) : new Uint8Array(8), Object(_pack__WEBPACK_IMPORTED_MODULE_6__[/* jdpack */ "a"])("u32 u8 u8 u8 i8", [serviceClass, freeze ? serviceIndex : 0, sampleSize, sampleType, sampleShift]));
              });
              if (totalSampleSize > _constants__WEBPACK_IMPORTED_MODULE_5__[/* JD_SERIAL_MAX_PAYLOAD_SIZE */ "Fb"]) error("samples won't fit in packet"); // u32 is x[4]

              inputs.unshift(Object(_pack__WEBPACK_IMPORTED_MODULE_6__[/* jdpack */ "a"])("u16 u16 u32", [cfg.samplingInterval, cfg.samplesInWindow, 0]));
              _context.next = 9;
              return this.service.register(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_3__[/* SensorAggregatorReg */ "wc"].Inputs).sendSetAsync(Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* bufferConcatMany */ "j"])(inputs));

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function setInputs(_x) {
      return _setInputs.apply(this, arguments);
    }

    return setInputs;
  }();

  _proto.collect = /*#__PURE__*/function () {
    var _collect = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(numSamples) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.service.register(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_3__[/* SensorAggregatorReg */ "wc"].StreamingSamples).sendSetPackedAsync("u32", [numSamples]);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function collect(_x2) {
      return _collect.apply(this, arguments);
    }

    return collect;
  }();

  _proto.subscribeSample = function subscribeSample(handler) {
    var reg = this.service.register(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_3__[/* SensorAggregatorReg */ "wc"].CurrentSample);
    return this.mount(reg.subscribe(_constants__WEBPACK_IMPORTED_MODULE_5__[/* REPORT_RECEIVE */ "Zc"], function () {
      return handler(Object(_buffer__WEBPACK_IMPORTED_MODULE_4__[/* bufferToArray */ "b"])(reg.data, _buffer__WEBPACK_IMPORTED_MODULE_4__[/* NumberFormat */ "a"].Float32LE));
    }));
  };

  _proto.getReg = /*#__PURE__*/function () {
    var _getReg = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(id, f) {
      var reg;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              reg = this.service.register(id);
              _context3.next = 3;
              return reg.refresh();

            case 3:
              return _context3.abrupt("return", f(reg));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getReg(_x3, _x4) {
      return _getReg.apply(this, arguments);
    }

    return getReg;
  }();

  _proto.stats = /*#__PURE__*/function () {
    var _stats = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
      var info, _i, _Object$keys, id;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              info = {
                "numSamples": this.getReg(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_3__[/* SensorAggregatorReg */ "wc"].NumSamples, function (r) {
                  return r.intValue;
                }),
                "sampleSize": this.getReg(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_3__[/* SensorAggregatorReg */ "wc"].SampleSize, function (r) {
                  return r.intValue;
                })
              };
              _i = 0, _Object$keys = Object.keys(info);

            case 2:
              if (!(_i < _Object$keys.length)) {
                _context4.next = 10;
                break;
              }

              id = _Object$keys[_i];
              _context4.next = 6;
              return info[id];

            case 6:
              info[id] = _context4.sent;

            case 7:
              _i++;
              _context4.next = 2;
              break;

            case 10:
              return _context4.abrupt("return", info);

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function stats() {
      return _stats.apply(this, arguments);
    }

    return stats;
  }();

  return SensorAggregatorClient;
}(_serviceclient__WEBPACK_IMPORTED_MODULE_7__[/* JDServiceClient */ "a"]);

/***/ }),

/***/ "hQyO":
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
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
}), 'Save');

exports.default = _default;

/***/ }),

/***/ "xSPK":
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
  d: "M8 5v14l11-7z"
}), 'PlayArrow');

exports.default = _default;

/***/ }),

/***/ "xVke":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Collector; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("KQm4");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__("30+C");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__("o4QW");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js + 1 modules
var Switch = __webpack_require__("UhlP");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__("Z3vd");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__("r9w1");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js
var InputAdornment = __webpack_require__("7SZd");

// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__("yNWl");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayArrow.js
var PlayArrow = __webpack_require__("xSPK");
var PlayArrow_default = /*#__PURE__*/__webpack_require__.n(PlayArrow);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Stop.js
var Stop = __webpack_require__("ax+9");
var Stop_default = /*#__PURE__*/__webpack_require__.n(Stop);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Save.js
var Save = __webpack_require__("hQyO");
var Save_default = /*#__PURE__*/__webpack_require__.n(Save);

// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// EXTERNAL MODULE: ./src/components/FieldDataSet.ts
var FieldDataSet = __webpack_require__("GAtA");

// EXTERNAL MODULE: ./src/components/Trend.tsx
var Trend = __webpack_require__("pHpC");

// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__("FQT7");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js + 1 modules
var InputLabel = __webpack_require__("1AYd");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__("jjAL");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControl.js
var FormControl = __webpack_require__("ADg1");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 4 modules
var Select = __webpack_require__("cVXz");

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("iuhU");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// CONCATENATED MODULE: ./src/components/EventSelect.tsx
 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

// tslint:disable-next-line: no-submodule-imports
 // tslint:disable-next-line: no-submodule-imports






var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    formControl: {
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  });
});
function EventSelect(props) {
  var eventId = props.eventId,
      onChange = props.onChange,
      label = props.label,
      filter = props.filter,
      className = props.className;

  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var classes = useStyles();
  var events = Object(useChange["a" /* default */])(bus, function () {
    return Object(utils["f" /* arrayConcatMany */])(Object(utils["f" /* arrayConcatMany */])(bus.devices().map(function (device) {
      return device.services().map(function (service) {
        return service.events.filter(function (event) {
          return !filter || filter(event);
        });
      });
    })));
  });
  var selectedEvent = bus.node(eventId);

  var handleChange = function handleChange(ev) {
    onChange(ev.target.value);
  };

  return /*#__PURE__*/react_default.a.createElement(FormControl["a" /* default */], {
    variant: "outlined",
    className: Object(clsx_m["a" /* default */])(className, classes.formControl)
  }, /*#__PURE__*/react_default.a.createElement(InputLabel["a" /* default */], {
    key: "label"
  }, label), /*#__PURE__*/react_default.a.createElement(Select["a" /* default */], {
    key: "select",
    value: selectedEvent ? eventId : "",
    onChange: handleChange,
    label: selectedEvent === null || selectedEvent === void 0 ? void 0 : selectedEvent.qualifiedName
  }, /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
    key: "none",
    value: ""
  }, /*#__PURE__*/react_default.a.createElement("em", null, "None")), events.map(function (ev) {
    return /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
      key: ev.id,
      value: ev.id
    }, ev.friendlyName);
  })));
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__("50B7");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__("oa/T");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__("DMAQ");

// EXTERNAL MODULE: ./src/components/ServiceManagerContext.tsx + 2 modules
var ServiceManagerContext = __webpack_require__("XZCR");

// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__("TD2k");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/SaveAlt.js
var SaveAlt = __webpack_require__("dMKM");
var SaveAlt_default = /*#__PURE__*/__webpack_require__.n(SaveAlt);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Delete.js
var Delete = __webpack_require__("FrwU");
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete);

// CONCATENATED MODULE: ./src/components/DataSetGrid.tsx






 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name


function DataSetGrid(props) {
  var tables = props.tables,
      handleDeleteTable = props.handleDeleteTable;

  var _useContext = Object(react["useContext"])(ServiceManagerContext["b" /* default */]),
      fileStorage = _useContext.fileStorage;

  var gridBreakpoints = Object(useGridBreakpoints["a" /* default */])(tables === null || tables === void 0 ? void 0 : tables.length);

  var handleDownload = function handleDownload(table) {
    return function () {
      var sep = ',';
      var csv = table.toCSV(sep);
      fileStorage.saveText(table.name + ".csv", csv);
    };
  };

  var handelDelete = function handelDelete(table) {
    return function () {
      return handleDeleteTable(table);
    };
  };

  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, tables.map(function (table) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], Object.assign({
      item: true
    }, gridBreakpoints, {
      key: "result" + table.id
    }), /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(CardHeader["a" /* default */], {
      subheader: table.rows.length + " rows, " + Object(pretty["d" /* prettyDuration */])(table.duration)
    }), /*#__PURE__*/react_default.a.createElement(CardContent["a" /* default */], null, /*#__PURE__*/react_default.a.createElement("div", null, table.headers.join(', ')), /*#__PURE__*/react_default.a.createElement(Trend["a" /* default */], {
      dataSet: table,
      height: 8,
      mini: true
    })), /*#__PURE__*/react_default.a.createElement(CardActions["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Button"], {
      variant: "contained",
      color: "primary",
      startIcon: /*#__PURE__*/react_default.a.createElement(SaveAlt_default.a, null),
      onClick: handleDownload(table)
    }, "Save"), handleDeleteTable && /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["IconButton"], {
      onClick: handelDelete(table)
    }, /*#__PURE__*/react_default.a.createElement(Delete_default.a, null)))));
  }));
}
// EXTERNAL MODULE: ./src/components/ReadingFieldGrid.tsx
var ReadingFieldGrid = __webpack_require__("zPMT");

// EXTERNAL MODULE: ./src/components/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__("5oJA");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/sensoraggregatorclient.ts
var sensoraggregatorclient = __webpack_require__("e7gs");

// EXTERNAL MODULE: ./src/components/useChartPalette.ts
var useChartPalette = __webpack_require__("Ufew");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// CONCATENATED MODULE: ./src/pages/tools/collector.tsx



 // tslint:disable-next-line: no-submodule-imports



 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name




 // tslint:disable-next-line: no-submodule-imports













var collector_useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    root: {
      marginBottom: theme.spacing(1)
    },
    grow: {
      flexGrow: 1
    },
    field: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1.5)
    },
    segment: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    row: {
      marginBottom: theme.spacing(0.5)
    },
    buttons: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(2)
    },
    trend: {
      width: theme.spacing(10)
    },
    vmiddle: {
      verticalAlign: "middle"
    }
  });
});
var LIVE_HORIZON = 24;

function createDataSet(bus, registers, name, live, palette) {
  var fields = Object(utils["f" /* arrayConcatMany */])(registers.map(function (reg) {
    return reg.fields;
  }));
  var colors = fields.map(function (f, i) {
    return palette[i % palette.length];
  });
  var set = new FieldDataSet["a" /* default */](bus, name, fields, colors);
  if (live) set.maxRows = LIVE_HORIZON + 4;
  return set;
}

function Collector() {
  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var classes = collector_useStyles();

  var _useContext2 = Object(react["useContext"])(ServiceManagerContext["b" /* default */]),
      fileStorage = _useContext2.fileStorage;

  var _useState = Object(react["useState"])([]),
      registerIdsChecked = _useState[0],
      setRegisterIdsChecked = _useState[1];

  var _useState2 = Object(react["useState"])(""),
      aggregatorId = _useState2[0],
      setAggregatorId = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      recording = _useState3[0],
      setRecording = _useState3[1];

  var _useState4 = Object(react["useState"])([]),
      tables = _useState4[0],
      setTables = _useState4[1];

  var _useState5 = Object(react["useState"])(0),
      setRecordingLength = _useState5[1];

  var _useState6 = Object(react["useState"])("data"),
      prefix = _useState6[0],
      setPrefix = _useState6[1];

  var _useState7 = Object(react["useState"])("100"),
      samplingIntervalDelay = _useState7[0],
      setSamplingIntervalDelay = _useState7[1];

  var _useState8 = Object(react["useState"])("10"),
      samplingDuration = _useState8[0],
      setSamplingDuration = _useState8[1];

  var _useState9 = Object(react["useState"])(undefined),
      liveDataSet = _useState9[0],
      setLiveDataSet = _useState9[1];

  var _useState10 = Object(react["useState"])(0),
      setLiveDataTimestamp = _useState10[1];

  var _useState11 = Object(react["useState"])(""),
      triggerEventId = _useState11[0],
      setTriggerEventId = _useState11[1];

  var chartPalette = Object(useChartPalette["a" /* default */])();
  var readingRegisters = Object(useChange["a" /* default */])(bus, function (bus) {
    return bus.devices().map(function (device) {
      var _device$services$find;

      return (_device$services$find = device.services().find(function (srv) {
        return Object(spec["u" /* isSensor */])(srv.specification);
      })) === null || _device$services$find === void 0 ? void 0 : _device$services$find.readingRegister;
    }).filter(function (reg) {
      return !!reg;
    });
  });
  var recordingRegisters = readingRegisters.filter(function (reg) {
    return registerIdsChecked.indexOf(reg.id) > -1;
  });
  var aggregators = Object(useChange["a" /* default */])(bus, function (bus) {
    return bus.services({
      serviceClass: constants["ne" /* SRV_SENSOR_AGGREGATOR */]
    });
  });
  var aggregator = aggregators.find(function (srv) {
    return srv.id == aggregatorId;
  });
  var samplingIntervalDelayi = parseInt(samplingIntervalDelay);
  var samplingCount = Math.ceil(parseFloat(samplingDuration) * 1000 / samplingIntervalDelayi);
  var errorSamplingIntervalDelay = isNaN(samplingIntervalDelayi) || !/\d+/.test(samplingIntervalDelay);
  var errorSamplingDuration = isNaN(samplingCount);
  var error = errorSamplingDuration || errorSamplingIntervalDelay;
  var triggerEvent = bus.node(triggerEventId);
  var startEnabled = !!(recordingRegisters !== null && recordingRegisters !== void 0 && recordingRegisters.length);
  Object(react["useEffect"])(function () {
    //console.log(`trigger event`, triggerEventId, triggerEvent)
    var un = triggerEvent === null || triggerEvent === void 0 ? void 0 : triggerEvent.subscribe(constants["nb" /* EVENT */], function () {
      //console.log(`trigger toggle recoring`, recording)
      toggleRecording();
    }); //console.log(`mounted`, triggerEvent)

    return function () {
      //console.log(`unmount trigger`)
      if (un) un();
    };
  }, [triggerEvent, recording, registerIdsChecked, liveDataSet]);

  var createSensorConfig = function createSensorConfig() {
    return {
      samplingInterval: samplingIntervalDelayi,
      samplesInWindow: 10,
      inputs: recordingRegisters.map(function (reg) {
        return {
          serviceClass: reg.service.serviceClass
        };
      })
    };
  };

  var saveConfig = function saveConfig() {
    var sensorConfig = JSON.stringify(createSensorConfig(), null, 2);
    fileStorage.saveText((prefix || "jacdac") + "-sensor-config.json", sensorConfig);
  };

  var newDataSet = function newDataSet(registerIds, live) {
    return registerIds.length ? createDataSet(bus, readingRegisters.filter(function (reg) {
      return registerIds.indexOf(reg.id) > -1;
    }), "" + (prefix || "data") + tables.length, live, chartPalette) : undefined;
  };

  var handleRegisterCheck = function handleRegisterCheck(reg) {
    var i = registerIdsChecked.indexOf(reg.id);
    if (i > -1) registerIdsChecked.splice(i, 1);else registerIdsChecked.push(reg.id);
    registerIdsChecked.sort();
    setRegisterIdsChecked(Object(toConsumableArray["a" /* default */])(registerIdsChecked));
    setLiveDataSet(newDataSet(registerIdsChecked, true));
  };

  var stopRecording = function stopRecording() {
    if (recording) {
      //console.log(`stop recording`, liveDataSet)
      setTables([liveDataSet].concat(Object(toConsumableArray["a" /* default */])(tables)));
      setLiveDataSet(newDataSet(registerIdsChecked, true));
      setRecording(false);
    }
  };

  var startRecording = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var client;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!recording && recordingRegisters.length)) {
                _context.next = 8;
                break;
              }

              setLiveDataSet(newDataSet(registerIdsChecked, false));
              setRecording(true);

              if (!aggregator) {
                _context.next = 8;
                break;
              }

              client = new sensoraggregatorclient["a" /* SensorAggregatorClient */](aggregator);
              _context.next = 7;
              return client.setInputs(createSensorConfig());

            case 7:
              client.collect(samplingCount);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function startRecording() {
      return _ref.apply(this, arguments);
    };
  }();

  var startStreamingRegisters = function startStreamingRegisters() {
    console.log("start streaming");
    var streamers = recordingRegisters === null || recordingRegisters === void 0 ? void 0 : recordingRegisters.map(function (reg) {
      return reg.subscribe(constants["ad" /* REPORT_UPDATE */], function () {});
    });
    return function () {
      console.log("stop streaming");
      streamers.map(function (streamer) {
        return streamer();
      });
    };
  };

  var toggleRecording = function toggleRecording() {
    if (recording) stopRecording();else startRecording();
  };

  var handleSamplingIntervalChange = function handleSamplingIntervalChange(event) {
    setSamplingIntervalDelay(event.target.value.trim());
  };

  var handleSamplingDurationChange = function handleSamplingDurationChange(event) {
    setSamplingDuration(event.target.value.trim());
  };

  var handlePrefixChange = function handlePrefixChange(event) {
    setPrefix(event.target.value.trim());
  };

  var handleTriggerChange = function handleTriggerChange(eventId) {
    return setTriggerEventId(eventId);
  };

  var handleDeleteTable = function handleDeleteTable(table) {
    var i = tables.indexOf(table);

    if (i > -1) {
      tables.splice(i, 1);
      setTables(Object(toConsumableArray["a" /* default */])(tables));
    }
  };

  var handleAggregatorChecked = function handleAggregatorChecked(srv) {
    return function () {
      var id = (srv === null || srv === void 0 ? void 0 : srv.id) == aggregatorId ? '' : srv === null || srv === void 0 ? void 0 : srv.id;
      setAggregatorId(id);
    };
  };

  var updateLiveData = function updateLiveData() {
    setLiveDataSet(liveDataSet);
    setRecordingLength(liveDataSet.rows.length);
    setLiveDataTimestamp(bus.timestamp);
  };

  var throttleUpdate = Object(utils["T" /* throttle */])(function () {
    return updateLiveData();
  }, 30); // data collection
  // interval add data entry

  var addRow = function addRow(values) {
    if (!liveDataSet) return; //console.log(values)

    liveDataSet.addRow(values);

    if (recording && liveDataSet.length >= samplingCount) {
      // stop recording
      updateLiveData();
      stopRecording();
    } else {
      throttleUpdate();
    }
  }; // setting interval


  Object(react["useEffect"])(function () {
    if (error) return;
    console.log("set interval to " + samplingIntervalDelayi);
    recordingRegisters.forEach(function (reg) {
      return reg.sendSetIntAsync(samplingIntervalDelayi);
    });
  }, [samplingIntervalDelayi, registerIdsChecked, errorSamplingIntervalDelay]); // collecting

  Object(react["useEffect"])(function () {
    if (error || aggregator && recording) return undefined;
    var interval = setInterval(function () {
      return addRow();
    }, samplingIntervalDelayi);
    var stopStreaming = startStreamingRegisters();
    return function () {
      clearInterval(interval);
      stopStreaming();
    };
  }, [recording, samplingIntervalDelayi, samplingCount, registerIdsChecked, aggregator]);
  Object(react["useEffect"])(function () {
    if (aggregator) {
      var client = new sensoraggregatorclient["a" /* SensorAggregatorClient */](aggregator);
      return client.subscribeSample(function (values) {
        return addRow(values);
      });
    }

    return function () {};
  }, [recording, liveDataSet, registerIdsChecked, aggregator]);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_default.a.createElement("h1", null, "Data Collector"), /*#__PURE__*/react_default.a.createElement("p", null, "Use this page to collect streaming data from Jacdac devices into various output formats."), !!aggregators.length && /*#__PURE__*/react_default.a.createElement("div", {
    key: "aggregators"
  }, /*#__PURE__*/react_default.a.createElement("h3", null, "(Optional) Choose a data aggregator"), /*#__PURE__*/react_default.a.createElement("p", null, "A ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/services/aggregator"
  }, "data aggregator"), " service collects collects sensor data on the bus and returns an aggregated at regular intervals."), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true
  }, aggregators.map(function (aggregator) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
      key: 'aggregate' + aggregator.id,
      item: true,
      xs: 4
    }, /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(DeviceCardHeader["a" /* default */], {
      device: aggregator.device,
      showMedia: true
    }), /*#__PURE__*/react_default.a.createElement(CardActions["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Switch["a" /* default */], {
      checked: aggregatorId == aggregator.id,
      disabled: recording,
      onChange: handleAggregatorChecked(aggregator)
    }))));
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    key: "sensors"
  }, /*#__PURE__*/react_default.a.createElement("h3", null, "Choose sensors"), !readingRegisters.length && /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    className: classes.grow,
    severity: "info"
  }, "Waiting for sensor..."), !!readingRegisters.length && /*#__PURE__*/react_default.a.createElement(ReadingFieldGrid["a" /* default */], {
    readingRegisters: readingRegisters,
    registerIdsChecked: registerIdsChecked,
    recording: recording,
    liveDataSet: liveDataSet,
    handleRegisterCheck: handleRegisterCheck
  })), /*#__PURE__*/react_default.a.createElement("div", {
    key: "record"
  }, /*#__PURE__*/react_default.a.createElement("h3", null, "Record data"), aggregator && /*#__PURE__*/react_default.a.createElement("p", null, "Record the sensor input configuration in order to up your ML model later on."), /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.buttons
  }, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    size: "large",
    variant: "contained",
    color: recording ? "secondary" : "primary",
    "aria-label": "start/stop recording",
    title: "start/stop recording",
    onClick: toggleRecording,
    startIcon: recording ? /*#__PURE__*/react_default.a.createElement(Stop_default.a, null) : /*#__PURE__*/react_default.a.createElement(PlayArrow_default.a, null),
    disabled: !startEnabled
  }, recording ? "Stop" : "Start"), aggregator && /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    variant: "contained",
    title: "save sensor input configuration",
    onClick: saveConfig,
    startIcon: /*#__PURE__*/react_default.a.createElement(Save_default.a, null),
    disabled: recording
  }, "Save configuration")), /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.row
  }, /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
    className: classes.field,
    error: errorSamplingIntervalDelay,
    disabled: recording,
    label: "Sampling interval",
    value: samplingIntervalDelay,
    variant: "outlined",
    InputProps: {
      startAdornment: /*#__PURE__*/react_default.a.createElement(InputAdornment["a" /* default */], {
        position: "start"
      }, "ms")
    },
    onChange: handleSamplingIntervalChange
  }), /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
    className: classes.field,
    error: errorSamplingDuration,
    disabled: recording,
    label: "Sampling duration",
    value: samplingDuration,
    variant: "outlined",
    InputProps: {
      startAdornment: /*#__PURE__*/react_default.a.createElement(InputAdornment["a" /* default */], {
        position: "start"
      }, "s")
    },
    onChange: handleSamplingDurationChange
  }), /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
    className: classes.field,
    disabled: recording,
    label: "File name prefix",
    value: prefix,
    variant: "outlined",
    onChange: handlePrefixChange
  }), /*#__PURE__*/react_default.a.createElement(EventSelect, {
    className: classes.field,
    eventId: triggerEventId,
    onChange: handleTriggerChange,
    label: "Start Event"
  }))), liveDataSet && /*#__PURE__*/react_default.a.createElement(Trend["a" /* default */], {
    key: "trends",
    height: 12,
    dataSet: liveDataSet,
    horizon: LIVE_HORIZON,
    dot: true,
    gradient: true
  }), !!tables.length && /*#__PURE__*/react_default.a.createElement("div", {
    key: "recordings"
  }, /*#__PURE__*/react_default.a.createElement("h3", null, "Recordings"), /*#__PURE__*/react_default.a.createElement(DataSetGrid, {
    tables: tables,
    handleDeleteTable: handleDeleteTable
  }))); //{liveDataSet && <DataSetTable key="datasettable" className={classes.segment} dataSet={liveDataSet} maxRows={3} minRows={3} />}
}

/***/ }),

/***/ "zPMT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingFieldGrid; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("R/WZ");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZBNC");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tRbT");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("30+C");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("50B7");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("oa/T");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("o4QW");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("UhlP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _DeviceActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("8zWW");
/* harmony import */ var _useGridBreakpoints__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("TD2k");
/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("22ne");
/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _devices_useDeviceName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("mAuX");



 // tslint:disable-next-line: no-submodule-imports match-default-export-name



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function () {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    vmiddle: {
      verticalAlign: "middle"
    }
  });
});

function ReadingFieldGridItem(props) {
  var register = props.register,
      handleRegisterCheck = props.handleRegisterCheck,
      recording = props.recording,
      registerChecked = props.registerChecked,
      liveDataSet = props.liveDataSet;
  var gridBreakpoints = Object(_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])();
  var classes = useStyles();
  var deviceName = Object(_devices_useDeviceName__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(register.service.device);

  var handleCheck = function handleCheck() {
    return handleRegisterCheck(register);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({
    item: true
  }, gridBreakpoints, {
    key: "source" + register.id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    subheader: register.service.name,
    title: deviceName + "/" + register.name,
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_DeviceActions__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      device: register.service.device,
      showReset: true
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, register.fields.map(function (field) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
      key: field.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: classes.vmiddle,
      fontSize: "large",
      style: {
        color: registerChecked && (liveDataSet === null || liveDataSet === void 0 ? void 0 : liveDataSet.colorOf(field)) || "#ccc"
      }
    }), field.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    disabled: recording,
    onChange: handleCheck,
    checked: registerChecked
  }))));
}

function ReadingFieldGrid(props) {
  var readingRegisters = props.readingRegisters,
      registerIdsChecked = props.registerIdsChecked,
      recording = props.recording,
      handleRegisterCheck = props.handleRegisterCheck,
      liveDataSet = props.liveDataSet;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    container: true,
    spacing: 2
  }, readingRegisters.map(function (register) {
    var registerChecked = registerIdsChecked.indexOf(register.id) > -1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ReadingFieldGridItem, {
      key: register.id,
      register: register,
      registerChecked: registerChecked,
      recording: recording,
      handleRegisterCheck: handleRegisterCheck,
      liveDataSet: liveDataSet
    });
  }));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-collector-tsx-8988d176185a288a05b3.js.map