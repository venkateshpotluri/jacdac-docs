(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8814],{

/***/ 26954:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80453);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34621);
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46438);







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
var InputAdornment = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function InputAdornment(props, ref) {
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
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["children", "classes", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"]);

  var muiFormControl = (0,_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_2__/* .useFormControl */ .Y)() || {};
  var variant = variantProp;

  if (variantProp && muiFormControl.variant) {
    if (false) {}
  }

  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_2__/* .default.Provider */ .Z.Provider, {
    value: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.root, className, position === 'end' ? classes.positionEnd : classes.positionStart, disablePointerEvents && classes.disablePointerEvents, muiFormControl.hiddenLabel && classes.hiddenLabel, variant === 'filled' && classes.filled, muiFormControl.margin === 'dense' && classes.marginDense),
    ref: ref
  }, other), typeof children === 'string' && !disableTypography ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    color: "textSecondary"
  }, children) : children));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(styles, {
  name: 'MuiInputAdornment'
})(InputAdornment));

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

/***/ 95067:
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

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "8"
}), 'FiberManualRecord');

exports.Z = _default;

/***/ }),

/***/ 8567:
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
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
}), 'Save');

exports.Z = _default;

/***/ }),

/***/ 79312:
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
  d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"
}), 'SaveAlt');

exports.Z = _default;

/***/ }),

/***/ 84264:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ SensorAggregatorClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41788);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73512);
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3482);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71815);
/* harmony import */ var _pack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91635);
/* harmony import */ var _serviceclient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56763);
/* harmony import */ var _spec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13173);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81794);




function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var SensorAggregatorClient = /*#__PURE__*/function (_JDServiceClient) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(SensorAggregatorClient, _JDServiceClient);

  function SensorAggregatorClient(service) {
    var _this;

    _this = _JDServiceClient.call(this, service) || this;
    _this.service.registersUseAcks = true;
    return _this;
  }

  var _proto = SensorAggregatorClient.prototype;

  _proto.setInputs = /*#__PURE__*/function () {
    var _setInputs = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(cfg) {
      var _cfg$inputs;

      var error, mapType, totalSampleSize, inputs;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              mapType = function _mapType(tp) {
                switch (tp) {
                  case 1:
                    return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SensorAggregatorSampleType.U8 */ .HEd.U8;

                  case 2:
                    return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SensorAggregatorSampleType.U16 */ .HEd.U16;

                  case 4:
                    return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SensorAggregatorSampleType.U32 */ .HEd.U32;

                  case -1:
                    return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SensorAggregatorSampleType.I8 */ .HEd.I8;

                  case -2:
                    return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SensorAggregatorSampleType.I16 */ .HEd.I16;

                  case -4:
                    return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SensorAggregatorSampleType.I32 */ .HEd.I32;

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
                var specification = (0,_spec__WEBPACK_IMPORTED_MODULE_6__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass);
                if (!specification) error("missing specification from service 0x" + serviceClass.toString(16));
                var freeze = !!deviceId;
                var readingReg = specification.packets.find(_spec__WEBPACK_IMPORTED_MODULE_6__/* .isReading */ .vz);
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
                return (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .bufferConcat */ .gX)(freeze ? (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .fromHex */ .H_)(deviceId) : new Uint8Array(8), (0,_pack__WEBPACK_IMPORTED_MODULE_4__/* .jdpack */ .AV)("u32 u8 u8 u8 i8", [serviceClass, freeze ? serviceIndex : 0, sampleSize, sampleType, sampleShift]));
              });
              if (totalSampleSize > _constants__WEBPACK_IMPORTED_MODULE_3__/* .JD_SERIAL_MAX_PAYLOAD_SIZE */ .MdP) error("samples won't fit in packet"); // u32 is x[4]

              inputs.unshift((0,_pack__WEBPACK_IMPORTED_MODULE_4__/* .jdpack */ .AV)("u16 u16 u32", [cfg.samplingInterval, cfg.samplesInWindow, 0]));
              _context.next = 9;
              return this.service.register(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SensorAggregatorReg.Inputs */ .HUt.Inputs).sendSetAsync((0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .bufferConcatMany */ .Gb)(inputs));

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
    var _collect = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(numSamples) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.service.register(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SensorAggregatorReg.StreamingSamples */ .HUt.StreamingSamples).sendSetPackedAsync("u32", [numSamples]);

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
    var reg = this.service.register(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SensorAggregatorReg.CurrentSample */ .HUt.CurrentSample);
    return this.mount(reg.subscribe(_constants__WEBPACK_IMPORTED_MODULE_3__/* .REPORT_RECEIVE */ .Gb8, function () {
      return handler((0,_buffer__WEBPACK_IMPORTED_MODULE_2__/* .bufferToArray */ ._W)(reg.data, _buffer__WEBPACK_IMPORTED_MODULE_2__/* .NumberFormat.Float32LE */ .y4.Float32LE));
    }));
  };

  _proto.getReg = /*#__PURE__*/function () {
    var _getReg = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(id, f) {
      var reg;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
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
    var _stats = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
      var info, _i, _Object$keys, id;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              info = {
                numSamples: this.getReg(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SensorAggregatorReg.NumSamples */ .HUt.NumSamples, function (r) {
                  return r.intValue;
                }),
                sampleSize: this.getReg(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SensorAggregatorReg.SampleSize */ .HUt.SampleSize, function (r) {
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
}(_serviceclient__WEBPACK_IMPORTED_MODULE_5__/* .JDServiceClient */ .P);

/***/ }),

/***/ 29065:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ReadingFieldGrid; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95823);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31186);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(76544);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _DeviceActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87993);
/* harmony import */ var _useGridBreakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7746);
/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95067);
/* harmony import */ var _devices_useDeviceName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5738);



 // tslint:disable-next-line: no-submodule-imports match-default-export-name



var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(function () {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
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
  var gridBreakpoints = (0,_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
  var classes = useStyles();
  var deviceName = (0,_devices_useDeviceName__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(register.service.device);

  var handleCheck = function handleCheck() {
    return handleRegisterCheck(register);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, Object.assign({
    item: true
  }, gridBreakpoints, {
    key: "source" + register.id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    subheader: register.service.name,
    title: deviceName + "/" + register.name,
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DeviceActions__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      device: register.service.device,
      showReset: true
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null, register.fields.map(function (field) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      key: field.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
      className: classes.vmiddle,
      fontSize: "large",
      style: {
        color: registerChecked && (liveDataSet === null || liveDataSet === void 0 ? void 0 : liveDataSet.colorOf(field)) || "#ccc"
      }
    }), field.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    container: true,
    spacing: 2
  }, readingRegisters.map(function (register) {
    var registerChecked = registerIdsChecked.indexOf(register.id) > -1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReadingFieldGridItem, {
      key: register.id,
      register: register,
      registerChecked: registerChecked,
      recording: recording,
      handleRegisterCheck: handleRegisterCheck,
      liveDataSet: liveDataSet
    });
  }));
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

/***/ 15789:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SelectWithLabel; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31690);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11592);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(706);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65541);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78942);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19640);



function SelectWithLabel(props) {
  var label = props.label,
      fullWidth = props.fullWidth,
      required = props.required,
      disabled = props.disabled,
      value = props.value,
      error = props.error,
      placeholder = props.placeholder,
      onChange = props.onChange,
      onClose = props.onClose,
      children = props.children,
      helperText = props.helperText,
      type = props.type,
      none = props.none;
  var labelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var descrId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var hasDescr = !!helperText || !!error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    fullWidth: fullWidth,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    id: labelId,
    key: "label"
  }, required ? label + " *" : label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    disabled: disabled,
    label: label,
    value: value,
    error: !!error,
    fullWidth: true,
    placeholder: placeholder,
    type: type,
    labelId: labelId,
    "aria-describedby": hasDescr ? descrId : undefined,
    onChange: onChange,
    onClose: onClose
  }, none && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    key: "none",
    value: ""
  }, none), children), hasDescr && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    id: descrId
  }, error || helperText));
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

/***/ 21586:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Collector; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(85061);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(31186);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(76544);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js
var InputAdornment = __webpack_require__(26954);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayArrow.js
var PlayArrow = __webpack_require__(42404);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Stop.js
var Stop = __webpack_require__(34257);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Save.js
var Save = __webpack_require__(8567);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/FieldDataSet.ts
var FieldDataSet = __webpack_require__(64616);
// EXTERNAL MODULE: ./src/components/Trend.tsx
var Trend = __webpack_require__(25090);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(65541);
// EXTERNAL MODULE: ./src/components/ui/SelectWithLabel.tsx
var SelectWithLabel = __webpack_require__(15789);
;// CONCATENATED MODULE: ./src/components/select/SelectEvent.tsx



function SelectEvent(props) {
  var events = props.events,
      eventId = props.eventId,
      onChange = props.onChange,
      friendlyName = props.friendlyName,
      label = props.label;

  var handleChange = function handleChange(ev) {
    onChange(ev.target.value);
  };

  return /*#__PURE__*/react.createElement(SelectWithLabel/* default */.Z, {
    helperText: label || "choose an event",
    value: eventId,
    onChange: handleChange,
    disabled: !(events !== null && events !== void 0 && events.length)
  }, events === null || events === void 0 ? void 0 : events.map(function (ev) {
    return /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
      key: ev.id,
      value: ev.id
    }, friendlyName ? ev.friendlyName : ev.name);
  }));
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__(95823);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(29114);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__(10913);
// EXTERNAL MODULE: ./src/components/ServiceManagerContext.tsx + 3 modules
var ServiceManagerContext = __webpack_require__(99808);
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(7746);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/SaveAlt.js
var SaveAlt = __webpack_require__(79312);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Delete.js
var Delete = __webpack_require__(94500);
;// CONCATENATED MODULE: ./src/components/DataSetGrid.tsx






 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name


function DataSetGrid(props) {
  var tables = props.tables,
      handleDeleteTable = props.handleDeleteTable;

  var _useContext = (0,react.useContext)(ServiceManagerContext/* default */.ZP),
      fileStorage = _useContext.fileStorage;

  var gridBreakpoints = (0,useGridBreakpoints/* default */.Z)(tables === null || tables === void 0 ? void 0 : tables.length);

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

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, tables.map(function (table) {
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, Object.assign({
      item: true
    }, gridBreakpoints, {
      key: "result" + table.id
    }), /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(CardHeader/* default */.Z, {
      subheader: table.rows.length + " rows, " + (0,pretty/* prettyDuration */.Xh)(table.duration)
    }), /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, /*#__PURE__*/react.createElement("div", null, table.headers.join(', ')), /*#__PURE__*/react.createElement(Trend/* default */.Z, {
      dataSet: table,
      height: 8,
      mini: true
    })), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
      variant: "contained",
      color: "primary",
      startIcon: /*#__PURE__*/react.createElement(SaveAlt/* default */.Z, null),
      onClick: handleDownload(table)
    }, "Save"), handleDeleteTable && /*#__PURE__*/react.createElement(gatsby_theme_material_ui.IconButton, {
      onClick: handelDelete(table)
    }, /*#__PURE__*/react.createElement(Delete/* default */.Z, null)))));
  }));
}
// EXTERNAL MODULE: ./src/components/ReadingFieldGrid.tsx
var ReadingFieldGrid = __webpack_require__(29065);
// EXTERNAL MODULE: ./src/components/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__(31477);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/sensoraggregatorclient.ts
var sensoraggregatorclient = __webpack_require__(84264);
// EXTERNAL MODULE: ./src/components/useChartPalette.ts
var useChartPalette = __webpack_require__(74039);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./src/components/hooks/useServices.ts
var useServices = __webpack_require__(2928);
;// CONCATENATED MODULE: ./src/components/hooks/useEvents.ts


function useEvents(options) {
  var services = (0,useServices/* default */.Z)(options);
  var events = (0,utils/* arrayConcatMany */.ue)(services.map(function (srv) {
    return srv.events;
  }));
  return events;
}
;// CONCATENATED MODULE: ./src/pages/tools/collector.tsx



 // tslint:disable-next-line: no-submodule-imports



 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name




 // tslint:disable-next-line: no-submodule-imports














var useStyles = (0,makeStyles/* default */.Z)(function (theme) {
  return (0,createStyles/* default */.Z)({
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
  var fields = (0,utils/* arrayConcatMany */.ue)(registers.map(function (reg) {
    return reg.fields;
  }));
  var colors = fields.map(function (f, i) {
    return palette[i % palette.length];
  });
  var set = new FieldDataSet/* default */.Z(bus, name, fields, colors);
  if (live) set.maxRows = LIVE_HORIZON + 4;
  return set;
}

function Collector() {
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var classes = useStyles();

  var _useContext2 = (0,react.useContext)(ServiceManagerContext/* default */.ZP),
      fileStorage = _useContext2.fileStorage;

  var _useState = (0,react.useState)([]),
      registerIdsChecked = _useState[0],
      setRegisterIdsChecked = _useState[1];

  var _useState2 = (0,react.useState)(""),
      aggregatorId = _useState2[0],
      setAggregatorId = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      recording = _useState3[0],
      setRecording = _useState3[1];

  var _useState4 = (0,react.useState)([]),
      tables = _useState4[0],
      setTables = _useState4[1];

  var _useState5 = (0,react.useState)(0),
      setRecordingLength = _useState5[1];

  var _useState6 = (0,react.useState)("data"),
      prefix = _useState6[0],
      setPrefix = _useState6[1];

  var _useState7 = (0,react.useState)("100"),
      samplingIntervalDelay = _useState7[0],
      setSamplingIntervalDelay = _useState7[1];

  var _useState8 = (0,react.useState)("10"),
      samplingDuration = _useState8[0],
      setSamplingDuration = _useState8[1];

  var _useState9 = (0,react.useState)(undefined),
      liveDataSet = _useState9[0],
      setLiveDataSet = _useState9[1];

  var _useState10 = (0,react.useState)(0),
      setLiveDataTimestamp = _useState10[1];

  var _useState11 = (0,react.useState)(""),
      triggerEventId = _useState11[0],
      setTriggerEventId = _useState11[1];

  var chartPalette = (0,useChartPalette/* default */.Z)();
  var readingRegisters = (0,useChange/* default */.Z)(bus, function (bus) {
    return (0,utils/* arrayConcatMany */.ue)(bus.devices().map(function (device) {
      return device.services().filter(function (srv) {
        return (0,spec/* isSensor */.rq)(srv.specification);
      }).map(function (srv) {
        return srv.readingRegister;
      });
    }));
  });
  var recordingRegisters = readingRegisters.filter(function (reg) {
    return registerIdsChecked.indexOf(reg.id) > -1;
  });
  var aggregators = (0,useChange/* default */.Z)(bus, function (bus) {
    return bus.services({
      serviceClass: constants/* SRV_SENSOR_AGGREGATOR */.x12
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
  var events = useEvents();
  (0,react.useEffect)(function () {
    //console.log(`trigger event`, triggerEventId, triggerEvent)
    var un = triggerEvent === null || triggerEvent === void 0 ? void 0 : triggerEvent.subscribe(constants/* EVENT */.Ks0, function () {
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
    setRegisterIdsChecked((0,toConsumableArray/* default */.Z)(registerIdsChecked));
    setLiveDataSet(newDataSet(registerIdsChecked, true));
  };

  var stopRecording = function stopRecording() {
    if (recording) {
      //console.log(`stop recording`, liveDataSet)
      setTables([liveDataSet].concat((0,toConsumableArray/* default */.Z)(tables)));
      setLiveDataSet(newDataSet(registerIdsChecked, true));
      setRecording(false);
    }
  };

  var startRecording = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var client;
      return regenerator_default().wrap(function _callee$(_context) {
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

              client = new sensoraggregatorclient/* SensorAggregatorClient */.F(aggregator);
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
      return reg.subscribe(constants/* REPORT_UPDATE */.rGZ, function () {});
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
      setTables((0,toConsumableArray/* default */.Z)(tables));
    }
  };

  var handleAggregatorChecked = function handleAggregatorChecked(srv) {
    return function () {
      var id = (srv === null || srv === void 0 ? void 0 : srv.id) == aggregatorId ? "" : srv === null || srv === void 0 ? void 0 : srv.id;
      setAggregatorId(id);
    };
  };

  var updateLiveData = function updateLiveData() {
    setLiveDataSet(liveDataSet);
    setRecordingLength(liveDataSet.rows.length);
    setLiveDataTimestamp(bus.timestamp);
  };

  var throttleUpdate = (0,utils/* throttle */.P2)(function () {
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


  (0,react.useEffect)(function () {
    if (error) return;
    console.log("set interval to " + samplingIntervalDelayi);
    recordingRegisters.forEach(function (reg) {
      return reg.sendSetIntAsync(samplingIntervalDelayi);
    });
  }, [samplingIntervalDelayi, registerIdsChecked, errorSamplingIntervalDelay]); // collecting

  (0,react.useEffect)(function () {
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
  (0,react.useEffect)(function () {
    if (aggregator) {
      var client = new sensoraggregatorclient/* SensorAggregatorClient */.F(aggregator);
      return client.subscribeSample(function (values) {
        return addRow(values);
      });
    }

    return function () {};
  }, [recording, liveDataSet, registerIdsChecked, aggregator]);
  return /*#__PURE__*/react.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react.createElement("h1", null, "Data Collector"), /*#__PURE__*/react.createElement("p", null, "Use this page to collect streaming data from Jacdac devices into various output formats."), !!aggregators.length && /*#__PURE__*/react.createElement("div", {
    key: "aggregators"
  }, /*#__PURE__*/react.createElement("h3", null, "(Optional) Choose a data aggregator"), /*#__PURE__*/react.createElement("p", null, "A ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: "/services/aggregator"
  }, "data aggregator"), " ", "service collects collects sensor data on the bus and returns an aggregated at regular intervals."), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true
  }, aggregators.map(function (aggregator) {
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
      key: "aggregate" + aggregator.id,
      item: true,
      xs: 4
    }, /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(DeviceCardHeader/* default */.Z, {
      device: aggregator.device,
      showAvatar: true
    }), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, /*#__PURE__*/react.createElement(Switch/* default */.Z, {
      checked: aggregatorId == aggregator.id,
      disabled: recording,
      onChange: handleAggregatorChecked(aggregator)
    }))));
  }))), /*#__PURE__*/react.createElement("div", {
    key: "sensors"
  }, /*#__PURE__*/react.createElement("h3", null, "Choose sensors"), !readingRegisters.length && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    className: classes.grow,
    severity: "info"
  }, "Waiting for sensor..."), !!readingRegisters.length && /*#__PURE__*/react.createElement(ReadingFieldGrid/* default */.Z, {
    readingRegisters: readingRegisters,
    registerIdsChecked: registerIdsChecked,
    recording: recording,
    liveDataSet: liveDataSet,
    handleRegisterCheck: handleRegisterCheck
  })), /*#__PURE__*/react.createElement("div", {
    key: "record"
  }, /*#__PURE__*/react.createElement("h3", null, "Record data"), aggregator && /*#__PURE__*/react.createElement("p", null, "Record the sensor input configuration in order to up your ML model later on."), /*#__PURE__*/react.createElement("div", {
    className: classes.buttons
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    size: "large",
    variant: "contained",
    color: recording ? "secondary" : "primary",
    "aria-label": "start/stop recording",
    title: "start/stop recording",
    onClick: toggleRecording,
    startIcon: recording ? /*#__PURE__*/react.createElement(Stop/* default */.Z, null) : /*#__PURE__*/react.createElement(PlayArrow/* default */.Z, null),
    disabled: !startEnabled
  }, recording ? "Stop" : "Start"), aggregator && /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "contained",
    title: "save sensor input configuration",
    onClick: saveConfig,
    startIcon: /*#__PURE__*/react.createElement(Save/* default */.Z, null),
    disabled: recording
  }, "Save configuration")), /*#__PURE__*/react.createElement("div", {
    className: classes.row
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    className: classes.field,
    error: errorSamplingIntervalDelay,
    disabled: recording,
    label: "Sampling interval",
    value: samplingIntervalDelay,
    variant: "outlined",
    InputProps: {
      startAdornment: /*#__PURE__*/react.createElement(InputAdornment/* default */.Z, {
        position: "start"
      }, "ms")
    },
    onChange: handleSamplingIntervalChange
  }), /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    className: classes.field,
    error: errorSamplingDuration,
    disabled: recording,
    label: "Sampling duration",
    value: samplingDuration,
    variant: "outlined",
    InputProps: {
      startAdornment: /*#__PURE__*/react.createElement(InputAdornment/* default */.Z, {
        position: "start"
      }, "s")
    },
    onChange: handleSamplingDurationChange
  }), /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    className: classes.field,
    disabled: recording,
    label: "File name prefix",
    value: prefix,
    variant: "outlined",
    onChange: handlePrefixChange
  }), /*#__PURE__*/react.createElement(SelectEvent, {
    events: events,
    eventId: triggerEventId,
    onChange: handleTriggerChange,
    label: "Start Event"
  }))), liveDataSet && /*#__PURE__*/react.createElement(Trend/* default */.Z, {
    key: "trends",
    height: 12,
    dataSet: liveDataSet,
    horizon: LIVE_HORIZON,
    dot: true,
    gradient: true
  }), !!tables.length && /*#__PURE__*/react.createElement("div", {
    key: "recordings"
  }, /*#__PURE__*/react.createElement("h3", null, "Recordings"), /*#__PURE__*/react.createElement(DataSetGrid, {
    tables: tables,
    handleDeleteTable: handleDeleteTable
  }))); //{liveDataSet && <DataSetTable key="datasettable" className={classes.segment} dataSet={liveDataSet} maxRows={3} minRows={3} />}
}

/***/ })

}]);