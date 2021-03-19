(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "5oJA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DeviceCardHeader; });

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__("9jPY");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__("50B7");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__("dYIP");

// EXTERNAL MODULE: ./src/components/DeviceActions.tsx
var DeviceActions = __webpack_require__("8zWW");

// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__("SCH5");

// EXTERNAL MODULE: ./src/jacdac/useDeviceSpecification.ts
var useDeviceSpecification = __webpack_require__("LoFq");

// EXTERNAL MODULE: ./src/components/devices/useDeviceImage.ts
var useDeviceImage = __webpack_require__("dI3M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js
var CardMedia = __webpack_require__("Ie8z");

// CONCATENATED MODULE: ./src/components/ui/CardMediaWithSkeleton.tsx



var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    media: {
      height: 0,
      paddingTop: '75%' // 4:3

    }
  });
});
/*
        [theme.breakpoints.down('lg')]: {
            paddingTop: '56.72%', // 16:9
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '18%',
        },
        [theme.breakpoints.down('md')]: { // 6:3
            paddingTop: '50%',
        }
*/

function CardMediaWithSkeleton(props) {
  var image = props.image,
      src = props.src,
      className = props.className,
      others = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["image", "src", "className"]);

  var classes = useStyles();
  var hasImage = !!image || !!src;
  return hasImage ? /*#__PURE__*/react_default.a.createElement(CardMedia["a" /* default */], Object.assign({
    className: className || classes.media
  }, others, {
    image: image,
    src: src
  })) : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null);
}
// CONCATENATED MODULE: ./src/components/DeviceCardMedia.tsx




function DeviceCardMedia(props) {
  var device = props.device;
  var specification = Object(useDeviceSpecification["a" /* default */])(device);
  var imageUrl = Object(useDeviceImage["a" /* default */])(specification);
  return /*#__PURE__*/react_default.a.createElement(CardMediaWithSkeleton, {
    image: imageUrl,
    title: specification === null || specification === void 0 ? void 0 : specification.name
  });
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 3 modules
var DeviceAvatar = __webpack_require__("puVa");

// CONCATENATED MODULE: ./src/components/DeviceCardHeader.tsx

 // tslint:disable-next-line: no-submodule-imports











function DeviceFirmwareVersionChip(props) {
  var _device$service;

  var device = props.device;
  var firmwareVersionRegister = device === null || device === void 0 ? void 0 : (_device$service = device.service(0)) === null || _device$service === void 0 ? void 0 : _device$service.register(constants["T" /* ControlReg */].FirmwareVersion);
  var firmwareVersion = Object(useRegisterValue["d" /* useRegisterStringValue */])(firmwareVersionRegister);
  return firmwareVersion && /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
    size: "small",
    label: firmwareVersion
  }) || /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null);
}

function DeviceTemperatureChip(props) {
  var _device$service2;

  var device = props.device;
  var tempRegister = device === null || device === void 0 ? void 0 : (_device$service2 = device.service(0)) === null || _device$service2 === void 0 ? void 0 : _device$service2.register(constants["T" /* ControlReg */].McuTemperature);
  var temperature = Object(useRegisterValue["c" /* useRegisterIntValue */])(tempRegister);
  return temperature !== undefined && /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
    size: "small",
    label: temperature + "\xB0"
  }) || /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null);
}

function DeviceCardHeader(props) {
  var device = props.device,
      showFirmware = props.showFirmware,
      showTemperature = props.showTemperature,
      showMedia = props.showMedia,
      showDeviceId = props.showDeviceId,
      showAvatar = props.showAvatar;
  var specification = Object(useDeviceSpecification["a" /* default */])(device);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, showMedia && /*#__PURE__*/react_default.a.createElement(DeviceCardMedia, {
    device: device
  }), /*#__PURE__*/react_default.a.createElement(CardHeader["a" /* default */], {
    avatar: showAvatar && /*#__PURE__*/react_default.a.createElement(DeviceAvatar["a" /* default */], {
      device: device
    }),
    action: /*#__PURE__*/react_default.a.createElement(DeviceActions["a" /* default */], {
      device: device,
      showReset: true
    }),
    title: /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
      color: "textPrimary",
      to: "/devices/" + (Object(spec["g" /* identifierToUrlPath */])(specification === null || specification === void 0 ? void 0 : specification.id) || "")
    }, /*#__PURE__*/react_default.a.createElement(DeviceName["a" /* default */], {
      device: device
    })),
    subheader: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
      variant: "caption",
      gutterBottom: true
    }, [specification === null || specification === void 0 ? void 0 : specification.name, showDeviceId && device.deviceId].filter(function (s) {
      return !!s;
    }).join(", ")), showFirmware && /*#__PURE__*/react_default.a.createElement(DeviceFirmwareVersionChip, {
      device: device
    }), showTemperature && /*#__PURE__*/react_default.a.createElement(DeviceTemperatureChip, {
      device: device
    }))
  }));
}

/***/ }),

/***/ "Ie8z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");






var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  /* Styles applied to the root element if `component="video, audio, picture, iframe, or img"`. */
  media: {
    width: '100%'
  },

  /* Styles applied to the root element if `component="picture or img"`. */
  img: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
  }
};
var MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
var CardMedia = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function CardMedia(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      image = props.image,
      src = props.src,
      style = props.style,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "component", "image", "src", "style"]);

  var isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1;
  var composedStyle = !isMediaComponent && image ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    backgroundImage: "url(\"".concat(image, "\")")
  }, style) : style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, isMediaComponent && classes.media, "picture img".indexOf(Component) !== -1 && classes.img),
    ref: ref,
    style: composedStyle,
    src: isMediaComponent ? image || src : undefined
  }, other), children);
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiCardMedia'
})(CardMedia));

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
              if (totalSampleSize > _constants__WEBPACK_IMPORTED_MODULE_5__[/* JD_SERIAL_MAX_PAYLOAD_SIZE */ "Eb"]) error("samples won't fit in packet"); // u32 is x[4]

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
    return this.mount(reg.subscribe(_constants__WEBPACK_IMPORTED_MODULE_5__[/* REPORT_RECEIVE */ "Yc"], function () {
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

/***/ "o4QW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");





var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var CardActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function CardActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["disableSpacing", "classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiCardActions'
})(CardActions));

/***/ }),

/***/ "tVbE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("VD++");
/* harmony import */ var _utils_isMuiElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ucBr");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("bfFb");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("MquD");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);











var styles = function styles(theme) {
  return {
    /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      paddingTop: 8,
      paddingBottom: 8,
      '&$focusVisible': {
        backgroundColor: theme.palette.action.selected
      },
      '&$selected, &$selected:hover': {
        backgroundColor: theme.palette.action.selected
      },
      '&$disabled': {
        opacity: 0.5
      }
    },

    /* Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`. */
    container: {
      position: 'relative'
    },

    /* Pseudo-class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
    focusVisible: {},

    /* Styles applied to the `component` element if dense. */
    dense: {
      paddingTop: 4,
      paddingBottom: 4
    },

    /* Styles applied to the `component` element if `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      alignItems: 'flex-start'
    },

    /* Pseudo-class applied to the inner `component` element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the inner `component` element if `divider={true}`. */
    divider: {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      backgroundClip: 'padding-box'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the inner `component` element if `button={true}`. */
    button: {
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`. */
    secondaryAction: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    },

    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {}
  };
};
var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"];
/**
 * Uses an additional container component if `ListItemSecondaryAction` is the last child.
 */

var ListItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ListItem(props, ref) {
  var _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'center' : _props$alignItems,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$button = props.button,
      button = _props$button === void 0 ? false : _props$button,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      componentProp = props.component,
      _props$ContainerCompo = props.ContainerComponent,
      ContainerComponent = _props$ContainerCompo === void 0 ? 'li' : _props$ContainerCompo,
      _props$ContainerProps = props.ContainerProps;
  _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;

  var ContainerClassName = _props$ContainerProps.className,
      ContainerProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_props$ContainerProps, ["className"]),
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? false : _props$dense,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$divider = props.divider,
      divider = _props$divider === void 0 ? false : _props$divider,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["alignItems", "autoFocus", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]);

  var context = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_List_ListContext__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);
  var childContext = {
    dense: dense || context.dense || false,
    alignItems: alignItems
  };
  var listItemRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  useEnhancedEffect(function () {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (false) {}
    }
  }, [autoFocus]);
  var children = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(childrenProp);
  var hasSecondaryAction = children.length && Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(children[children.length - 1], ['ListItemSecondaryAction']);
  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (instance) {
    // #StrictMode ready
    listItemRef.current = react_dom__WEBPACK_IMPORTED_MODULE_9__["findDOMNode"](instance);
  }, []);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(handleOwnRef, ref);

  var componentProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, childContext.dense && classes.dense, !disableGutters && classes.gutters, divider && classes.divider, disabled && classes.disabled, button && classes.button, alignItems !== "center" && classes.alignItemsFlexStart, hasSecondaryAction && classes.secondaryAction, selected && classes.selected),
    disabled: disabled
  }, other);

  var Component = componentProp || 'li';

  if (button) {
    componentProps.component = componentProp || 'div';
    componentProps.focusVisibleClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.focusVisible, focusVisibleClassName);
    Component = _ButtonBase__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"];
  }

  if (hasSecondaryAction) {
    // Use div by default.
    Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

    if (ContainerComponent === 'li') {
      if (Component === 'li') {
        Component = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_List_ListContext__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].Provider, {
      value: childContext
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](ContainerComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.container, ContainerClassName),
      ref: handleRef
    }, ContainerProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, componentProps, children), children.pop()));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_List_ListContext__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].Provider, {
    value: childContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: handleRef
  }, componentProps), children));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiListItem'
})(ListItem));

/***/ })

}]);
//# sourceMappingURL=c733f1ab5716866b4fcee22f30b87eb4d89562eb-776636e3bd08b215f550.js.map