(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "9ZaH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtocolTestServiceHost; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HaE+");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JX7q");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dI71");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jdom_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZfHV");
/* harmony import */ var _pack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("BsyY");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("o8zs");
/* harmony import */ var _servicehost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("adpw");









var ProtocolTestServiceHost = /*#__PURE__*/function (_ServiceHost) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(ProtocolTestServiceHost, _ServiceHost);

  function ProtocolTestServiceHost() {
    var _this;

    _this = _ServiceHost.call(this, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* SRV_PROTO_TEST */ "ae"]) || this;

    _this.init(_jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestReg */ "Hc"].RwBool, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestReg */ "Hc"].RoBool, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestCmd */ "Fc"].CBool, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestEvent */ "Gc"].EBool, false);

    _this.init(_jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestReg */ "Hc"].RwI32, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestReg */ "Hc"].RoI32, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestCmd */ "Fc"].CI32, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestEvent */ "Gc"].EI32, 0);

    _this.init(_jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestReg */ "Hc"].RwU32, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestReg */ "Hc"].RoU32, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestCmd */ "Fc"].CU32, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestEvent */ "Gc"].EU32, 0);

    _this.init(_jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestReg */ "Hc"].RwString, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestReg */ "Hc"].RoString, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestCmd */ "Fc"].CString, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestEvent */ "Gc"].EString, "");

    _this.rwBytes = _this.init(_jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestReg */ "Hc"].RwBytes, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestReg */ "Hc"].RoBytes, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestCmd */ "Fc"].CBytes, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestEvent */ "Gc"].EBytes, new Uint8Array(0));

    _this.init(_jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestReg */ "Hc"].RwI8U8U16I32, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestReg */ "Hc"].RoI8U8U16I32, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestCmd */ "Fc"].CI8U8U16I32, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestEvent */ "Gc"].EI8U8U16I32, 0, 0, 0, 0);

    _this.init(_jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestReg */ "Hc"].RwU8String, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestReg */ "Hc"].RoU8String, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestCmd */ "Fc"].CU8String, _jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestEvent */ "Gc"].EU8String, 0, "");

    _this.addCommand(_jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* ProtoTestCmd */ "Fc"].CReportPipe, _this.handleReportPipe.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this)));

    return _this;
  }

  var _proto = ProtocolTestServiceHost.prototype;

  _proto.init = function init(rwi, roi, ci, ei) {
    var _this2 = this;

    for (var _len = arguments.length, values = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      values[_key - 4] = arguments[_key];
    }

    var rw = this.addRegister(rwi, values);
    var ro = this.addRegister(roi, rw.values());
    rw.on(_jdom_constants__WEBPACK_IMPORTED_MODULE_4__[/* CHANGE */ "v"], function () {
      ro.setValues(rw.values());

      _this2.sendEvent(ei, rw.data);
    });
    this.addCommand(ci, function (pkt) {
      return rw.setValues(Object(_pack__WEBPACK_IMPORTED_MODULE_5__[/* jdunpack */ "c"])(pkt.data, rw.specification.packFormat));
    });
    return rw;
  };

  _proto.handleReportPipe = /*#__PURE__*/function () {
    var _handleReportPipe = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(pkt) {
      var pipe;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pipe = _pipes__WEBPACK_IMPORTED_MODULE_6__[/* OutPipe */ "b"].from(this.device.bus, pkt, true);
              _context.next = 3;
              return pipe.respondForEach(this.rwBytes.data, function (b) {
                var buf = new Uint8Array(1);
                buf[0] = b;
                return Object(_pack__WEBPACK_IMPORTED_MODULE_5__[/* jdpack */ "a"])("b", [buf]);
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function handleReportPipe(_x) {
      return _handleReportPipe.apply(this, arguments);
    }

    return handleReportPipe;
  }();

  return ProtocolTestServiceHost;
}(_servicehost__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);



/***/ }),

/***/ "IS43":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LEDMatrixServiceHost; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JX7q");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dI71");
/* harmony import */ var _jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZfHV");
/* harmony import */ var _jdom_servicehost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("adpw");




function toggle(data, bitindex) {
  // find bit to flip
  var byte = data[bitindex >> 3];
  var bit = bitindex % 8;
  var on = 1 === (byte >> bit & 1); // flip bit

  if (on) {
    byte &= ~(1 << bit);
  } else {
    byte |= 1 << bit;
  } // save


  data[bitindex >> 3] = byte;
}

var LEDMatrixServiceHost = /*#__PURE__*/function (_ServiceHost) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(LEDMatrixServiceHost, _ServiceHost);

  function LEDMatrixServiceHost(columns, rows) {
    var _this;

    _this = _ServiceHost.call(this, _jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* SRV_LED_MATRIX */ "Qd"], {
      intensityValues: [0xff >> 1]
    }) || this;
    _this.leds = _this.addRegister(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* LedMatrixReg */ "Ob"].Leds, [new Uint8Array(0)]);
    _this.rows = _this.addRegister(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* LedMatrixReg */ "Ob"].Rows, [rows]);
    _this.columns = _this.addRegister(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* LedMatrixReg */ "Ob"].Columns, [columns]);
    _this.brightness = _this.addRegister(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* LedMatrixReg */ "Ob"].Brightness, [128]);
    _this.rows.skipBoundaryCheck = true;
    _this.rows.skipErrorInjection = true; // 20fps

    _this.addRegister(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* SensorReg */ "He"].StreamingPreferredInterval, [50]);

    _this.rows.on(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* CHANGE */ "v"], _this.updateLedBuffer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this)));

    _this.columns.on(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* CHANGE */ "v"], _this.updateLedBuffer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this)));

    _this.updateLedBuffer();

    return _this;
  }

  var _proto = LEDMatrixServiceHost.prototype;

  _proto.updateLedBuffer = function updateLedBuffer() {
    var _this$leds$data;

    // columns must be byte aligned
    var _this$rows$values = this.rows.values(),
        rows = _this$rows$values[0];

    var _this$columns$values = this.columns.values(),
        columns = _this$columns$values[0]; // there's probably a much smarter way to do this


    var columnspadded = columns + (8 - columns % 8); // total bits needed

    var n = rows * columnspadded;

    if (((_this$leds$data = this.leds.data) === null || _this$leds$data === void 0 ? void 0 : _this$leds$data.length) !== n) {
      // skip serialization
      this.leds.data = new Uint8Array(n); // testing

      this.leds.data.fill(0x01 | 0x04 | 0x10 | 0x40);
      this.leds.emit(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* CHANGE */ "v"]);
    }
  };

  return LEDMatrixServiceHost;
}(_jdom_servicehost__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);



/***/ }),

/***/ "KeJ3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LIGHT_PROG_SET_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LIGHT_PROG_FADE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LIGHT_PROG_FADE_HSV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LIGHT_PROG_ROTATE_FWD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LIGHT_PROG_ROTATE_BACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LIGHT_PROG_SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LIGHT_PROG_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LIGHT_PROG_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LIGHT_PROG_MODE1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LIGHT_MODE_REPLACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LIGHT_MODE_ADD_RGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LIGHT_MODE_SUBTRACT_RGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LIGHT_MODE_MULTIPLY_RGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LIGHT_MODE_LAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LIGHT_PROG_COLN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LIGHT_PROG_COL1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LIGHT_PROG_COL2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LIGHT_PROG_COL3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LIGHT_PROG_COL1_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return lightEncode; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Zo1I");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/*
* `0xD0: set_all(C+)` - set all pixels in current range to given color pattern
* `0xD1: fade(C+)` - set `N` pixels to color between colors in sequence
* `0xD2: fade_hsv(C+)` - similar to `fade()`, but colors are specified and faded in HSV
* `0xD3: rotate_fwd(K)` - rotate (shift) pixels by `K` positions away from the connector
* `0xD4: rotate_back(K)` - same, but towards the connector
* `0xD5: show(M=50)` - send buffer to strip and wait `M` milliseconds
* `0xD6: range(P=0, N=length)` - range from pixel `P`, `N` pixels long
* `0xD7: mode(K=0)` - set update mode
* `0xD8: mode1(K=0)` - set update mode for next command only
*/

var LIGHT_PROG_SET_ALL = 0xD0;
var LIGHT_PROG_FADE = 0xD1;
var LIGHT_PROG_FADE_HSV = 0xD2;
var LIGHT_PROG_ROTATE_FWD = 0xD3;
var LIGHT_PROG_ROTATE_BACK = 0xD4;
var LIGHT_PROG_SHOW = 0xD5;
var LIGHT_PROG_RANGE = 0xD6;
var LIGHT_PROG_MODE = 0xD7;
var LIGHT_PROG_MODE1 = 0xD8;
var LIGHT_MODE_REPLACE = 0x00;
var LIGHT_MODE_ADD_RGB = 0x01;
var LIGHT_MODE_SUBTRACT_RGB = 0x02;
var LIGHT_MODE_MULTIPLY_RGB = 0x03;
var LIGHT_MODE_LAST = 0x03;
var LIGHT_PROG_COLN = 0xC0;
var LIGHT_PROG_COL1 = 0xC1;
var LIGHT_PROG_COL2 = 0xC2;
var LIGHT_PROG_COL3 = 0xC3;
var LIGHT_PROG_COL1_SET = 0xCF;

function cmdCode(cmd) {
  switch (cmd) {
    case "setall":
      return LIGHT_PROG_SET_ALL;

    case "fade":
      return LIGHT_PROG_FADE;

    case "fadehsv":
      return LIGHT_PROG_FADE_HSV;

    case "rotfwd":
      return LIGHT_PROG_ROTATE_FWD;

    case "rotback":
      return LIGHT_PROG_ROTATE_BACK;

    case "show":
    case "wait":
      return LIGHT_PROG_SHOW;

    case "range":
      return LIGHT_PROG_RANGE;

    case "mode":
      return LIGHT_PROG_MODE;

    case "tmpmode":
      return LIGHT_PROG_MODE1;

    case "setone":
      return LIGHT_PROG_COL1_SET;

    case "mult":
      return 0x100;

    default:
      return undefined;
  }
}

function isWhiteSpace(code) {
  return code == 32 || code == 13 || code == 10 || code == 9;
}

function lightEncode(format, args) {
  // tokens are white-space separated
  // % - number from args[]
  // # - color from args[]
  // #0123ff - color
  // 123 - number
  // commands: set, fade, fadehsv, rotfwd, rotback, pause
  // fadehsv 0 12 #00ffff #ffffff
  var outarr = [];
  var colors = [];
  var pos = 0;
  var currcmd = 0;

  function pushNumber(n) {
    if (n == null || (n | 0) != n || n < 0 || n >= 16383) throw new Error("number out of range: " + n);
    if (n < 128) outarr.push(n);else {
      outarr.push(0x80 | n >> 8);
      outarr.push(n & 0xff);
    }
  }

  function flush() {
    if (currcmd == 0xCF) {
      if (colors.length != 1) throw new Error("setone requires 1 color");
    } else {
      if (colors.length == 0) return;
      if (colors.length <= 3) outarr.push(0xC0 | colors.length);else {
        outarr.push(0xC0);
        outarr.push(colors.length);
      }
    }

    for (var _iterator = _createForOfIteratorHelperLoose(colors), _step; !(_step = _iterator()).done;) {
      var c = _step.value;
      outarr.push(c >> 16 & 0xff);
      outarr.push(c >> 8 & 0xff);
      outarr.push(c >> 0 & 0xff);
    }

    colors = [];
  }

  function nextToken() {
    while (isWhiteSpace(format.charCodeAt(pos))) {
      pos++;
    }

    var beg = pos;

    while (pos < format.length && !isWhiteSpace(format.charCodeAt(pos))) {
      pos++;
    }

    return format.slice(beg, pos);
  }

  while (pos < format.length) {
    var token = nextToken();
    var t0 = token.charCodeAt(0);

    if (97 <= t0 && t0 <= 122) {
      // a-z
      flush();
      currcmd = cmdCode(token);
      if (currcmd == undefined) throw new Error("unknown light command: " + token);

      if (currcmd == 0x100) {
        var f = parseFloat(nextToken());
        if (isNaN(f) || f < 0 || f > 2) throw new Error("expecting scale");
        outarr.push(0xD8); // tmpmode

        outarr.push(3); // mult

        outarr.push(0xD0); // setall

        var mm = Math.round(128 * f) & 0xff;
        outarr.push(0xC1);
        outarr.push(mm);
        outarr.push(mm);
        outarr.push(mm);
      } else {
        outarr.push(currcmd);
      }
    } else if (48 <= t0 && t0 <= 57) {
      // 0-9
      pushNumber(parseInt(token));
    } else if (t0 == 37) {
      // %
      if (args.length == 0) throw new Error("out of args, %");
      var v = args.shift();
      if (typeof v != "number") throw new Error("expecting number");
      pushNumber(v);
    } else if (t0 == 35) {
      // #
      if (token.length == 1) {
        if (args.length == 0) throw new Error("out of args, #");

        var _v = args.shift();

        if (typeof _v == "number") colors.push(_v);else {
          for (var _iterator2 = _createForOfIteratorHelperLoose(_v), _step2; !(_step2 = _iterator2()).done;) {
            var vv = _step2.value;
            colors.push(vv);
          }
        }
      } else {
        if (token.length == 7) {
          var b = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* fromHex */ "u"])(token.slice(1));
          var c = b[0] << 16 | b[1] << 8 | b[2];
          colors.push(c);
        } else {
          throw new Error("invalid color: " + token);
        }
      }
    }
  }

  flush();
  return new Uint8Array(outarr);
}

/***/ }),

/***/ "NttO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LEDServiceHost; });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vuIU");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dI71");
/* harmony import */ var _jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZfHV");
/* harmony import */ var _jdom_eventsource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("033P");
/* harmony import */ var _jdom_servicehost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("adpw");





var LedAnimation = /*#__PURE__*/function (_JDEventSource) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(LedAnimation, _JDEventSource);

  function LedAnimation(data) {
    var _this;

    _this = _JDEventSource.call(this) || this;
    _this.data = data;
    _this._currentStep = 0;
    _this._currentStepStartTime = 0;
    _this._currentHsv = 0;
    return _this;
  }

  var _proto = LedAnimation.prototype;

  _proto.update = function update(now) {
    // grab current step
    var _ref = this.data || [],
        repetitions = _ref[0],
        steps = _ref[1];

    if (!(steps !== null && steps !== void 0 && steps.length)) {
      // nothing to do
      return;
    } // find the step we are in


    if (this._currentStepStartTime == 0) this._currentStepStartTime = now;

    while (this._currentStep < steps.length) {
      var _steps$this$_currentS = steps[this._currentStep],
          h = _steps$this$_currentS[0],
          s = _steps$this$_currentS[1],
          v = _steps$this$_currentS[2],
          duration8 = _steps$this$_currentS[3];
      var duration = duration8 << 3;
      if (duration === 0) break;
      var elapsed = now - this._currentStepStartTime;

      if (elapsed < duration) {
        break;
      } // restart iteration if needed


      if (this._currentStep === steps.length - 1) {
        // restart
        this._currentStep = 0;
        this._currentStepStartTime = now;
      } else {
        // try next step
        this._currentStep++;
        this._currentStepStartTime += duration;
      }
    } // render


    if (this._currentStep < steps.length) {
      var _steps$this$_currentS2 = steps[this._currentStep],
          startHue = _steps$this$_currentS2[0],
          startSat = _steps$this$_currentS2[1],
          startValue = _steps$this$_currentS2[2],
          _duration = _steps$this$_currentS2[3];

      var _duration2 = _duration << 3;

      var _steps = steps[(this._currentStep + 1) % steps.length],
          endHue = _steps[0],
          endSat = _steps[1],
          endValue = _steps[2];

      var _elapsed = now - this._currentStepStartTime;

      var alpha = _elapsed / _duration2;
      var oneAlpha = 1 - alpha;

      var _h = oneAlpha * startHue + alpha * endHue;

      var _s = oneAlpha * startSat + alpha * endSat;

      var _v = oneAlpha * startValue + alpha * endValue;

      var hsv = (_h & 0xff) << 16 | (_s & 0xff) << 8 | _v & 0xff;

      if (hsv !== this._currentHsv) {
        this._currentHsv = hsv;
        this.emit(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* CHANGE */ "v"]);
      }
    }
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(LedAnimation, [{
    key: "hsv",
    get: function get() {
      return [this._currentHsv >> 16 & 0xff, this._currentHsv >> 8 & 0xff, this._currentHsv & 0xff];
    }
  }]);

  return LedAnimation;
}(_jdom_eventsource__WEBPACK_IMPORTED_MODULE_3__[/* JDEventSource */ "a"]);

var LEDServiceHost = /*#__PURE__*/function (_ServiceHost) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(LEDServiceHost, _ServiceHost);

  function LEDServiceHost(options) {
    var _this2;

    _this2 = _ServiceHost.call(this, _jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* SRV_LED */ "Pd"]) || this;

    var _ref2 = options || {},
        _ref2$ledCount = _ref2.ledCount,
        ledCount = _ref2$ledCount === void 0 ? 1 : _ref2$ledCount,
        _ref2$variant = _ref2.variant,
        variant = _ref2$variant === void 0 ? _jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* LedVariant */ "Ub"].ThroughHole : _ref2$variant,
        _ref2$brightness = _ref2.brightness,
        brightness = _ref2$brightness === void 0 ? 0.5 : _ref2$brightness,
        luminousIntensity = _ref2.luminousIntensity,
        waveLength = _ref2.waveLength,
        _ref2$animation = _ref2.animation,
        animation = _ref2$animation === void 0 ? [0, []] : _ref2$animation,
        _ref2$maxPower = _ref2.maxPower,
        maxPower = _ref2$maxPower === void 0 ? 200 : _ref2$maxPower;

    _this2.animation = _this2.addRegister(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* LedReg */ "Tb"].Animation, animation);
    _this2.brightness = _this2.addRegister(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* LedReg */ "Tb"].Brightness, [brightness]);
    _this2.maxPower = _this2.addRegister(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* LedReg */ "Tb"].MaxPower, [maxPower]);
    _this2.ledCount = _this2.addRegister(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* LedReg */ "Tb"].LedCount, [ledCount]);
    if (luminousIntensity !== undefined) _this2.luminousIntensity = _this2.addRegister(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* LedReg */ "Tb"].LuminousIntensity, [luminousIntensity]);
    if (waveLength !== undefined) _this2.waveLength = _this2.addRegister(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* LedReg */ "Tb"].WaveLength, [waveLength]);
    _this2.variant = _this2.addRegister(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* LedReg */ "Tb"].Variant, [variant]);
    return _this2;
  }

  return LEDServiceHost;
}(_jdom_servicehost__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);



/***/ }),

/***/ "swM1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuzzerServiceHost; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JX7q");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dI71");
/* harmony import */ var _jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZfHV");
/* harmony import */ var _jdom_pack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BsyY");
/* harmony import */ var _jdom_servicehost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("adpw");






var BuzzerServiceHost = /*#__PURE__*/function (_ServiceHost) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(BuzzerServiceHost, _ServiceHost);

  function BuzzerServiceHost() {
    var _this;

    _this = _ServiceHost.call(this, _jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* SRV_BUZZER */ "Bd"]) || this;
    _this.volume = _this.addRegister(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* BuzzerReg */ "u"].Volume, [0.2]);

    _this.addCommand(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* BuzzerCmd */ "t"].PlayTone, _this.handlePlayTone.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this)));

    return _this;
  }

  var _proto = BuzzerServiceHost.prototype;

  _proto.handlePlayTone = function handlePlayTone(pkt) {
    var _jdunpack = Object(_jdom_pack__WEBPACK_IMPORTED_MODULE_3__[/* jdunpack */ "c"])(pkt.data, "u16 u16 u16"),
        period = _jdunpack[0],
        duty = _jdunpack[1],
        duration = _jdunpack[2];

    var _this$volume$values = this.volume.values(),
        v = _this$volume$values[0];

    var frequency = 1000000 / period;
    this.emit(BuzzerServiceHost.PLAY_TONE, [frequency, duration]);
  };

  return BuzzerServiceHost;
}(_jdom_servicehost__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);

BuzzerServiceHost.PLAY_TONE = "playTone";


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

/***/ }),

/***/ "y+c1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SG90_RESPONSE_SPEED; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ hosts; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ addHost; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ hostDefinitionFromServiceClass; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/devicehost.ts + 1 modules
var devicehost = __webpack_require__("A5+n");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/protocoltestservicehost.ts
var protocoltestservicehost = __webpack_require__("9ZaH");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/servicehost.ts + 1 modules
var servicehost = __webpack_require__("adpw");

// EXTERNAL MODULE: ./jacdac-ts/src/hosts/arcadegamepadservicehost.ts
var arcadegamepadservicehost = __webpack_require__("nbr6");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("JX7q");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__("dI71");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./jacdac-ts/src/hosts/sensorservicehost.ts
var sensorservicehost = __webpack_require__("Lle0");

// CONCATENATED MODULE: ./jacdac-ts/src/hosts/buttonservicehost.ts






var LONG_CLICK_DELAY = 500;
var HOLD_DELAY = 1500;

var buttonservicehost_ButtonServiceHost = /*#__PURE__*/function (_SensorServiceHost) {
  Object(inheritsLoose["a" /* default */])(ButtonServiceHost, _SensorServiceHost);

  function ButtonServiceHost(instanceName) {
    var _this;

    _this = _SensorServiceHost.call(this, constants["Ad" /* SRV_BUTTON */], {
      instanceName: instanceName,
      readingValues: [false],
      streamingInterval: 50
    }) || this;
    _this._held = false;
    _this._longClick = false;

    _this.on(constants["Jc" /* REFRESH */], _this.handleRefresh.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    return _this;
  }

  var _proto = ButtonServiceHost.prototype;

  _proto.handleRefresh = /*#__PURE__*/function () {
    var _handleRefresh = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var _this$reading$values, v, delay;

      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$reading$values = this.reading.values(), v = _this$reading$values[0];

              if (!v) {
                _context.next = 11;
                break;
              }

              delay = this.device.bus.timestamp - this._downTime;

              if (!(!this._longClick && delay > LONG_CLICK_DELAY)) {
                _context.next = 7;
                break;
              }

              this._longClick = true;
              _context.next = 7;
              return this.sendEvent(constants["r" /* ButtonEvent */].LongClick);

            case 7:
              if (!(!this._held && delay > HOLD_DELAY)) {
                _context.next = 11;
                break;
              }

              this._held = true;
              _context.next = 11;
              return this.sendEvent(constants["r" /* ButtonEvent */].Hold);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function handleRefresh() {
      return _handleRefresh.apply(this, arguments);
    }

    return handleRefresh;
  }();

  _proto.down = /*#__PURE__*/function () {
    var _down = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      var _this$reading$values2, v;

      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$reading$values2 = this.reading.values(), v = _this$reading$values2[0];

              if (!v) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return");

            case 3:
              this._downTime = this.device.bus.timestamp;
              this._held = false;
              this._longClick = false;
              this.reading.setValues([true]);
              _context2.next = 9;
              return this.sendEvent(constants["r" /* ButtonEvent */].Down);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function down() {
      return _down.apply(this, arguments);
    }

    return down;
  }();

  _proto.up = /*#__PURE__*/function () {
    var _up = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
      var _this$reading$values3, v, upTime;

      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this$reading$values3 = this.reading.values(), v = _this$reading$values3[0];

              if (v) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt("return");

            case 3:
              upTime = this.device.bus.timestamp;
              this.reading.setValues([false]);
              _context3.next = 7;
              return this.sendEvent(constants["r" /* ButtonEvent */].Up);

            case 7:
              if (!(this._downTime !== undefined)) {
                _context3.next = 11;
                break;
              }

              if (this._longClick) {
                _context3.next = 11;
                break;
              }

              _context3.next = 11;
              return this.sendEvent(constants["r" /* ButtonEvent */].Click);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function up() {
      return _up.apply(this, arguments);
    }

    return up;
  }();

  return ButtonServiceHost;
}(sensorservicehost["a" /* default */]);


// EXTERNAL MODULE: ./jacdac-ts/src/hosts/buzzerservicehost.ts
var buzzerservicehost = __webpack_require__("swM1");

// CONCATENATED MODULE: ./jacdac-ts/src/hosts/characterscreenservicehost.ts




var characterscreenservicehost_CharacterScreenServiceHost = /*#__PURE__*/function (_ServiceHost) {
  Object(inheritsLoose["a" /* default */])(CharacterScreenServiceHost, _ServiceHost);

  function CharacterScreenServiceHost(options) {
    var _this;

    _this = _ServiceHost.call(this, constants["Cd" /* SRV_CHARACTER_SCREEN */]) || this;

    var _ref = options || {},
        message = _ref.message,
        _ref$rows = _ref.rows,
        rows = _ref$rows === void 0 ? 2 : _ref$rows,
        _ref$columns = _ref.columns,
        columns = _ref$columns === void 0 ? 16 : _ref$columns,
        variant = _ref.variant,
        textDirection = _ref.textDirection;

    _this.message = _this.addRegister(constants["M" /* CharacterScreenReg */].Message, [message || ""]);
    _this.rows = _this.addRegister(constants["M" /* CharacterScreenReg */].Rows, [rows]);
    _this.columns = _this.addRegister(constants["M" /* CharacterScreenReg */].Columns, [columns]);
    _this.variant = _this.addRegister(constants["M" /* CharacterScreenReg */].Variant, [variant || constants["O" /* CharacterScreenVariant */].LCD]);
    _this.message = _this.addRegister(constants["M" /* CharacterScreenReg */].Message, [""]);
    _this.textDirection = _this.addRegister(constants["M" /* CharacterScreenReg */].TextDirection, [textDirection || constants["N" /* CharacterScreenTextDirection */].LeftToRight]);
    return _this;
  }

  return CharacterScreenServiceHost;
}(servicehost["a" /* default */]);


// CONCATENATED MODULE: ./jacdac-ts/src/hosts/humidityservicehost.ts




var humidityservicehost_HumidityServiceHost = /*#__PURE__*/function (_SensorServiceHost) {
  Object(inheritsLoose["a" /* default */])(HumidityServiceHost, _SensorServiceHost);

  function HumidityServiceHost() {
    return _SensorServiceHost.call(this, constants["Md" /* SRV_HUMIDITY */], {
      readingValues: [40],
      readingError: [0.1],
      streamingInterval: 1000
    }) || this;
  }

  return HumidityServiceHost;
}(sensorservicehost["a" /* default */]);


// CONCATENATED MODULE: ./jacdac-ts/src/hosts/joystickservicehost.ts




var joystickservicehost_JoystickSensorServiceHost = /*#__PURE__*/function (_SensorServiceHost) {
  Object(inheritsLoose["a" /* default */])(JoystickSensorServiceHost, _SensorServiceHost);

  function JoystickSensorServiceHost(variant, digital) {
    var _this;

    _this = _SensorServiceHost.call(this, constants["Od" /* SRV_JOYSTICK */], {
      readingValues: [0, 0]
    }) || this;
    _this.variant = _this.addRegister(constants["Kb" /* JoystickReg */].Variant, [variant || constants["Lb" /* JoystickVariant */].Thumb]);
    _this.digital = _this.addRegister(constants["Kb" /* JoystickReg */].Digital, [digital || false]);
    return _this;
  }

  return JoystickSensorServiceHost;
}(sensorservicehost["a" /* default */]);


// EXTERNAL MODULE: ./jacdac-ts/src/hosts/ledmatrixservicehost.ts
var ledmatrixservicehost = __webpack_require__("IS43");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("vuIU");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/light.ts
var light = __webpack_require__("KeJ3");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// CONCATENATED MODULE: ./jacdac-ts/src/hosts/ledpixelservicehost.ts







var PROG_EOF = 0;
var PROG_CMD = 1;
var PROG_NUMBER = 3;
var PROG_COLOR_BLOCK = 4;

function rgb(r, g, b) {
  return {
    r: r,
    g: g,
    b: b
  };
}

function hsv(hue, sat, val) {
  // scale down to 0..192
  hue = hue * 192 >> 8; // reference: based on FastLED's hsv2rgb rainbow algorithm
  // [https://github.com/FastLED/FastLED](MIT)

  var invsat = 255 - sat;
  var brightness_floor = val * invsat >> 8;
  var color_amplitude = val - brightness_floor;
  var section = hue / 0x40 >> 0; // [0..2]

  var offset = hue % 0x40 >> 0; // [0..63]

  var rampup = offset;
  var rampdown = 0x40 - 1 - offset;
  var rampup_amp_adj = rampup * color_amplitude / (256 / 4) >> 0;
  var rampdown_amp_adj = rampdown * color_amplitude / (256 / 4) >> 0;
  var rampup_adj_with_floor = rampup_amp_adj + brightness_floor;
  var rampdown_adj_with_floor = rampdown_amp_adj + brightness_floor;
  var r = 0,
      g = 0,
      b = 0;

  if (section) {
    if (section == 1) {
      // section 1: 0x40..0x7F
      r = brightness_floor;
      g = rampdown_adj_with_floor;
      b = rampup_adj_with_floor;
    } else {
      // section 2; 0x80..0xBF
      r = rampup_adj_with_floor;
      g = brightness_floor;
      b = rampdown_adj_with_floor;
    }
  } else {
    // section 0: 0x00..0x3F
    r = rampdown_adj_with_floor;
    g = rampup_adj_with_floor;
    b = brightness_floor;
  }

  return rgb(r, g, b);
}

function mulcol(c, m) {
  var c2 = c * m >> 7;
  if (m < 128 && c == c2) c2--;else if (m > 128 && c == c2) c2++;
  return c2;
}

function clamp(c) {
  if (c < 0) return 0;
  if (c > 255) return 255;
  return c;
}

function SCALE0(c, i) {
  return (c & 0xff) * (1 + (i & 0xff)) >> 8;
}

var ledpixelservicehost_LedPixelServiceHost = /*#__PURE__*/function (_ServiceHost) {
  Object(inheritsLoose["a" /* default */])(LedPixelServiceHost, _ServiceHost);

  function LedPixelServiceHost(options) {
    var _this;

    _this = _ServiceHost.call(this, constants["Rd" /* SRV_LED_PIXEL */], options) || this;
    _this.pxbuffer = new Uint8Array(0);
    _this.prog_mode = 0;
    _this.prog_tmpmode = 0;
    _this.range_start = 0;
    _this.range_end = 0;
    _this.range_len = 0;
    _this.range_ptr = 0;
    _this.prog_ptr = 0;
    _this.prog_size = 0;
    _this.prog_data = new Uint8Array(0);
    _this.dirty = true;
    _this.inited = false;
    _this.power_enable = false;

    var _ref = options || {},
        numColumns = _ref.numColumns,
        _ref$maxPower = _ref.maxPower,
        maxPower = _ref$maxPower === void 0 ? 200 : _ref$maxPower,
        _ref$maxPixels = _ref.maxPixels,
        maxPixels = _ref$maxPixels === void 0 ? 300 : _ref$maxPixels,
        _ref$numPixels = _ref.numPixels,
        numPixels = _ref$numPixels === void 0 ? 15 : _ref$numPixels;

    _this.brightness = _this.addRegister(constants["Rb" /* LedPixelReg */].Brightness, [15]);
    _this.actualBrightness = _this.addRegister(constants["Rb" /* LedPixelReg */].ActualBrightness, [15]);
    _this.lightType = _this.addRegister(constants["Rb" /* LedPixelReg */].LightType, [constants["Qb" /* LedPixelLightType */].WS2812B_GRB]);
    _this.numPixels = _this.addRegister(constants["Rb" /* LedPixelReg */].NumPixels, [numPixels]);
    _this.maxPower = _this.addRegister(constants["Rb" /* LedPixelReg */].MaxPower, [maxPower]);
    _this.maxPixels = _this.addRegister(constants["Rb" /* LedPixelReg */].MaxPixels, [maxPixels]);
    _this.variant = _this.addRegister(constants["Rb" /* LedPixelReg */].Variant, [constants["Sb" /* LedPixelVariant */].Strip]);
    _this.numRepeats = _this.addRegister(constants["Rb" /* LedPixelReg */].NumRepeats, [0]);
    if (numColumns !== undefined) _this.numColumns = _this.addRegister(constants["Rb" /* LedPixelReg */].NumColumns, [numColumns]);

    _this.brightness.on(constants["v" /* CHANGE */], function () {
      return _this.intensity = _this.requested_intensity;
    });

    _this.numPixels.on(constants["v" /* CHANGE */], _this.allocRxBuffer.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    _this.maxPixels.on(constants["v" /* CHANGE */], _this.allocRxBuffer.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    _this.addCommand(constants["Pb" /* LedPixelCmd */].Run, _this.handleRun.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    _this.allocRxBuffer();

    return _this;
  }
  /**
   * Gets an array of RGB color numbers
   */


  var _proto = LedPixelServiceHost.prototype;

  _proto.jd_power_enable = function jd_power_enable(value) {
    this.power_enable = value;
  };

  _proto.is_enabled = function is_enabled() {
    return this.numpixels > 0 && this.requested_intensity > 0;
  };

  _proto.allocRxBuffer = function allocRxBuffer() {
    if (this.numpixels > this.maxpixels) this.numPixels.setValues([this.maxpixels]);
    var n = this.numpixels * 3; // don't need to prealloc here

    if (n !== this.pxbuffer.length) this.pxbuffer = new Uint8Array(n);
  };

  _proto.reset_range = function reset_range() {
    this.range_ptr = this.range_start;
  };

  _proto.set_next = function set_next(c) {
    if (this.range_ptr >= this.range_end) return false;
    var p = this.pxbuffer;
    var pi = this.range_ptr++ * 3; // fast path

    if (this.prog_tmpmode == light["d" /* LIGHT_MODE_REPLACE */]) {
      p[pi + 0] = c.r;
      p[pi + 1] = c.g;
      p[pi + 2] = c.b;
      return true;
    }

    var r = p[pi + 0],
        g = p[pi + 1],
        b = p[pi + 2];

    switch (this.prog_tmpmode) {
      case light["a" /* LIGHT_MODE_ADD_RGB */]:
        r += c.r;
        g += c.g;
        b += c.b;
        break;

      case light["e" /* LIGHT_MODE_SUBTRACT_RGB */]:
        r -= c.r;
        g -= c.g;
        b -= c.b;
        break;

      case light["c" /* LIGHT_MODE_MULTIPLY_RGB */]:
        r = mulcol(r, c.r);
        g = mulcol(g, c.g);
        b = mulcol(b, c.b);
        break;
    }

    p[pi + 0] = clamp(r);
    p[pi + 1] = clamp(g);
    p[pi + 2] = clamp(b);
    return true;
  };

  _proto.limit_intensity = function limit_intensity() {
    var numpixels = this.numpixels;
    var requested_intensity = this.requested_intensity;
    var maxpower = this.maxpower;
    var pxbuffer = this.pxbuffer;
    var n = numpixels * 3;
    var prev_intensity = this.intensity;
    var intensity = this.intensity;
    intensity += 1 + (intensity >> 5);
    if (intensity > requested_intensity) intensity = requested_intensity;
    var current_full = 0;
    var current = 0;
    var current_prev = 0;
    var di = 0;

    while (n--) {
      var v = pxbuffer[di++];
      current += SCALE0(v, intensity);
      current_prev += SCALE0(v, prev_intensity);
      current_full += v;
    } // 46uA per step of LED


    current *= 46;
    current_prev *= 46;
    current_full *= 46; // 14mA is the chip at 48MHz, 930uA per LED is static

    var base_current = 14000 + 930 * numpixels;
    var current_limit = maxpower * 1000 - base_current;

    if (current <= current_limit) {
      this.intensity = intensity; // LOG("curr: %dmA; not limiting %d", (base_current + current) / 1000, state->intensity);

      return;
    }

    if (current_prev <= current_limit) {
      return; // no change needed
    }

    var inten = current_limit / (current_full >> 8) - 1;
    if (inten < 0) inten = 0;
    this.intensity = inten;
  };

  _proto.prog_fetch_color = function prog_fetch_color() {
    var ptr = this.prog_ptr;
    if (ptr + 3 > this.prog_size) return rgb(0, 0, 0);
    var d = this.prog_data;
    this.prog_ptr = ptr + 3;
    return rgb(d[ptr + 0], d[ptr + 1], d[ptr + 2]);
  };

  _proto.prog_fetch = function prog_fetch() {
    if (this.prog_ptr >= this.prog_size) return {
      prog: PROG_EOF
    };
    var d = this.prog_data;
    var c = d[this.prog_ptr++];

    if (!(c & 0x80)) {
      return {
        dst: c,
        prog: PROG_NUMBER
      };
    } else if ((c & 0xc0) == 0x80) {
      return {
        dst: (c & 0x3f) << 8 | d[this.prog_ptr++],
        prog: PROG_NUMBER
      };
    } else switch (c) {
      case light["f" /* LIGHT_PROG_COL1 */]:
        return {
          dst: 1,
          prog: PROG_COLOR_BLOCK
        };

      case light["h" /* LIGHT_PROG_COL2 */]:
        return {
          dst: 2,
          prog: PROG_COLOR_BLOCK
        };

      case light["i" /* LIGHT_PROG_COL3 */]:
        return {
          dst: 3,
          prog: PROG_COLOR_BLOCK
        };

      case light["j" /* LIGHT_PROG_COLN */]:
        return {
          dst: d[this.prog_ptr++],
          prog: PROG_COLOR_BLOCK
        };

      default:
        return {
          dst: c,
          prog: PROG_CMD
        };
    }
  };

  _proto.prog_fetch_num = function prog_fetch_num(defl) {
    var prev = this.prog_ptr;
    var fr = this.prog_fetch();
    var res = fr.dst,
        r = fr.prog;
    if (r == PROG_NUMBER) return res;else {
      this.prog_ptr = prev; // rollback

      return defl;
    }
  };

  _proto.prog_fetch_cmd = function prog_fetch_cmd() {
    var cmd; // skip until there's a command

    for (;;) {
      var c = this.prog_fetch();

      switch (c.prog) {
        case PROG_CMD:
          return c.dst;

        case PROG_COLOR_BLOCK:
          while (cmd--) {
            this.prog_fetch_color();
          }

          break;

        case PROG_EOF:
          return 0;
      }
    }
  };

  _proto.prog_set = function prog_set(len) {
    this.reset_range();
    var start = this.prog_ptr;

    for (;;) {
      this.prog_ptr = start;
      var ok = false;

      for (var i = 0; i < len; ++i) {
        // don't break the loop immediately if !ok - make sure the prog counter advances
        ok = this.set_next(this.prog_fetch_color());
      }

      if (!ok) break;
    }
  };

  _proto.prog_fade = function prog_fade(len, usehsv) {
    if (len < 2) {
      this.prog_set(len);
      return;
    }

    var colidx = 0;
    var endp = this.prog_ptr + 3 * len;
    var col0 = this.prog_fetch_color();
    var col1 = this.prog_fetch_color();
    var colstep = (len - 1 << 16) / this.range_len;
    var colpos = 0;
    this.reset_range();

    for (;;) {
      while (colidx < colpos >> 16) {
        colidx++;
        col0 = col1;
        col1 = this.prog_fetch_color();
      }

      var fade1 = colpos & 0xffff;
      var fade0 = 0xffff - fade1;
      var col = rgb(col0.r * fade0 + col1.r * fade1 + 0x8000 >> 16, col0.g * fade0 + col1.g * fade1 + 0x8000 >> 16, col0.b * fade0 + col1.b * fade1 + 0x8000 >> 16);
      if (!this.set_next(usehsv ? hsv(col.r, col.g, col.b) : col)) break;
      colpos += colstep;
    }

    this.prog_ptr = endp;
  };

  _proto.prog_rot = function prog_rot(shift) {
    if (shift <= 0 || shift >= this.range_len) return;
    var range_start = this.range_start;
    var range_end = this.range_end;
    var buf = this.pxbuffer;
    var first = range_start * 3;
    var middle = (range_start + shift) * 3;
    var last = range_end * 3;
    var next = middle;

    while (first != next) {
      var tmp = buf[first];
      var tmp1 = buf[first + 1];
      var tmp2 = buf[first + 2];
      buf[first] = buf[next];
      buf[first + 1] = buf[next + 1];
      buf[first + 2] = buf[next + 2];
      buf[next] = tmp;
      buf[next + 1] = tmp1;
      buf[next + 2] = tmp2;
      first += 3;
      next += 3;
      if (next === last) next = middle;else if (first === middle) middle = next;
    }
  };

  _proto.fetch_mode = function fetch_mode() {
    var m = this.prog_fetch_num(0);
    if (m > light["b" /* LIGHT_MODE_LAST */]) return 0;
    return m;
  };

  _proto.prog_process = function prog_process() {
    var data = this.prog_data;
    if (this.prog_ptr >= this.prog_size) return false; // check that the program wasn't restarted
    // concurrently

    while (data === this.prog_data) {
      var cmd = this.prog_fetch_cmd();
      if (!cmd) break;

      if (cmd == light["s" /* LIGHT_PROG_SHOW */]) {
        var k = this.prog_fetch_num(50);
        this.dirty = true;
        setInterval(this.animationFrame.bind(this), k); // check data is still current;

        return data === this.prog_data;
      }

      switch (cmd) {
        case light["g" /* LIGHT_PROG_COL1_SET */]:
          this.range_ptr = this.range_start + this.prog_fetch_num(0);
          this.set_next(this.prog_fetch_color());
          break;

        case light["k" /* LIGHT_PROG_FADE */]:
        case light["l" /* LIGHT_PROG_FADE_HSV */]:
        case light["r" /* LIGHT_PROG_SET_ALL */]:
          {
            var _this$prog_fetch = this.prog_fetch(),
                len = _this$prog_fetch.dst,
                pcmd = _this$prog_fetch.prog;

            if (pcmd != PROG_COLOR_BLOCK || len == 0) continue; // bailout

            if (cmd == light["r" /* LIGHT_PROG_SET_ALL */]) this.prog_set(len);else this.prog_fade(len, cmd == light["l" /* LIGHT_PROG_FADE_HSV */]);
            break;
          }

        case light["p" /* LIGHT_PROG_ROTATE_BACK */]:
        case light["q" /* LIGHT_PROG_ROTATE_FWD */]:
          {
            var _k = this.prog_fetch_num(1);

            var _len = this.range_len;
            if (_len == 0) continue;

            while (_k >= _len) {
              _k -= _len;
            }

            if (cmd == light["q" /* LIGHT_PROG_ROTATE_FWD */] && _k != 0) _k = _len - _k;
            this.prog_rot(_k);
            break;
          }

        case light["n" /* LIGHT_PROG_MODE1 */]:
          this.prog_tmpmode = this.fetch_mode();
          break;

        case light["m" /* LIGHT_PROG_MODE */]:
          this.prog_mode = this.fetch_mode();
          break;

        case light["o" /* LIGHT_PROG_RANGE */]:
          {
            var start = this.prog_fetch_num(0);

            var _len2 = this.prog_fetch_num(this.numpixels);

            var numpixels = this.numpixels;
            if (start > numpixels) start = numpixels;
            var end = start + _len2;
            if (end > numpixels) end = numpixels;
            this.range_start = start;
            this.range_end = end;
            this.range_len = end - start;
            break;
          }
      }

      if (cmd != light["n" /* LIGHT_PROG_MODE1 */]) this.prog_tmpmode = this.prog_mode;
    }

    return false;
  }
  /**
   * Perform an animation step
   */
  ;

  _proto.animationFrame = function animationFrame() {
    if (!this.prog_process()) return; // concurrently udpated

    if (!this.is_enabled()) return;

    if (this.dirty) {
      this.dirty = false;

      if (Object(utils["A" /* isBufferEmpty */])(this.pxbuffer)) {
        this.jd_power_enable(false);
        return;
      } else {
        this.jd_power_enable(true);
      }

      this.limit_intensity(); // we're ready to render...

      this.emit(constants["Tc" /* RENDER */]);
    }
  };

  _proto.sync_config = function sync_config() {
    if (!this.is_enabled()) {
      this.jd_power_enable(false);
      return;
    }

    if (!this.inited) {
      this.inited = true; // initialize?
      // px_init(this.lighttype);
    }

    this.jd_power_enable(true);
  };

  _proto.handleRun = function handleRun(pkt) {
    console.log("run", {
      data: Object(utils["V" /* toHex */])(pkt.data)
    });
    this.prog_data = pkt.data;
    this.prog_size = this.prog_data.length;
    this.prog_ptr = 0;
    this.range_start = 0;
    this.range_end = this.range_len = this.numpixels;
    this.prog_tmpmode = this.prog_mode = 0;
    this.sync_config();
    this.animationFrame();
  };

  Object(createClass["a" /* default */])(LedPixelServiceHost, [{
    key: "colors",
    get: function get() {
      return this.pxbuffer;
    }
  }, {
    key: "maxpower",
    get: function get() {
      var _this$maxPower$values = this.maxPower.values(),
          r = _this$maxPower$values[0];

      return r;
    }
  }, {
    key: "maxpixels",
    get: function get() {
      var _this$maxPixels$value = this.maxPixels.values(),
          r = _this$maxPixels$value[0];

      return r;
    }
  }, {
    key: "numpixels",
    get: function get() {
      var _this$numPixels$value = this.numPixels.values(),
          r = _this$numPixels$value[0];

      return r;
    }
  }, {
    key: "requested_intensity",
    get: function get() {
      var _this$brightness$valu = this.brightness.values(),
          r = _this$brightness$valu[0];

      return r;
    }
  }, {
    key: "intensity",
    get: function get() {
      var _this$actualBrightnes = this.actualBrightness.values(),
          r = _this$actualBrightnes[0];

      return r;
    },
    set: function set(v) {
      this.actualBrightness.setValues([v]);
    }
  }]);

  return LedPixelServiceHost;
}(servicehost["a" /* default */]);


// CONCATENATED MODULE: ./jacdac-ts/src/hosts/matrixkeypadservicehost.ts






var matrixkeypadservicehost_MatrixKeypadServiceHost = /*#__PURE__*/function (_SensorServiceHost) {
  Object(inheritsLoose["a" /* default */])(MatrixKeypadServiceHost, _SensorServiceHost);

  function MatrixKeypadServiceHost(columns, rows, labels) {
    var _this;

    _this = _SensorServiceHost.call(this, constants["Ud" /* SRV_MATRIX_KEYPAD */], {
      readingValues: [[]]
    }) || this;
    _this.columns = _this.addRegister(constants["dc" /* MatrixKeypadReg */].Columns, [columns]);
    _this.rows = _this.addRegister(constants["dc" /* MatrixKeypadReg */].Rows, [rows]);
    _this.labels = _this.addRegister(constants["dc" /* MatrixKeypadReg */].Labels, labels ? [labels.map(function (l) {
      return [l];
    })] : undefined);
    return _this;
  }

  var _proto = MatrixKeypadServiceHost.prototype;

  _proto.down = /*#__PURE__*/function () {
    var _down = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(button) {
      var _this$reading$values, values, valuei;

      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$reading$values = this.reading.values(), values = _this$reading$values[0];
              valuei = values.findIndex(function (v) {
                return v[0] === button;
              });

              if (valuei < 0) {
                values.push([button]);
                this.reading.setValues([values]);
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function down(_x) {
      return _down.apply(this, arguments);
    }

    return down;
  }();

  _proto.up = /*#__PURE__*/function () {
    var _up = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2(button) {
      var _this$reading$values2, values, valuei;

      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$reading$values2 = this.reading.values(), values = _this$reading$values2[0];
              valuei = values.findIndex(function (v) {
                return v[0] === button;
              });

              if (valuei > -1) {
                values.splice(valuei, 1);
                this.reading.setValues([values]);
              }

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function up(_x2) {
      return _up.apply(this, arguments);
    }

    return up;
  }();

  return MatrixKeypadServiceHost;
}(sensorservicehost["a" /* default */]);


// CONCATENATED MODULE: ./jacdac-ts/src/hosts/motorservicehost.ts




var motorservicehost_MotorServiceHost = /*#__PURE__*/function (_ServiceHost) {
  Object(inheritsLoose["a" /* default */])(MotorServiceHost, _ServiceHost);

  function MotorServiceHost(instanceName) {
    var _this;

    _this = _ServiceHost.call(this, constants["Xd" /* SRV_MOTOR */], {
      instanceName: instanceName
    }) || this;
    _this.duty = _this.addRegister(constants["hc" /* MotorReg */].Duty, [0]);
    _this.enabled = _this.addRegister(constants["hc" /* MotorReg */].Enabled, [false]);
    _this.loadTorque = _this.addRegister(constants["hc" /* MotorReg */].LoadTorque);
    _this.loadSpeed = _this.addRegister(constants["hc" /* MotorReg */].LoadSpeed);
    return _this;
  }

  return MotorServiceHost;
}(servicehost["a" /* default */]);


// EXTERNAL MODULE: ./jacdac-ts/src/jdom/client.ts
var client = __webpack_require__("v+ZI");

// CONCATENATED MODULE: ./jacdac-ts/src/hosts/leveldetector.ts




var leveldetector_LevelDetector = /*#__PURE__*/function (_JDClient) {
  Object(inheritsLoose["a" /* default */])(LevelDetector, _JDClient);

  function LevelDetector(service) {
    var _this;

    _this = _JDClient.call(this) || this;
    _this.service = service;

    _this.reset();

    if (_this.service.lowThreshold) _this.mount(_this.service.lowThreshold.subscribe(constants["v" /* CHANGE */], _this.reset.bind(Object(assertThisInitialized["a" /* default */])(_this))));
    if (_this.service.highThreshold) _this.mount(_this.service.highThreshold.subscribe(constants["v" /* CHANGE */], _this.reset.bind(Object(assertThisInitialized["a" /* default */])(_this))));

    _this.mount(_this.service.reading.subscribe(constants["v" /* CHANGE */], _this.update.bind(Object(assertThisInitialized["a" /* default */])(_this))));

    return _this;
  }

  var _proto = LevelDetector.prototype;

  _proto.reset = function reset() {
    this._state = constants["Ye" /* SystemReadingThreshold */].Neutral;
  };

  _proto.update = function update() {
    var _this$service$highThr2, _this$service$lowThre2;

    var _this$service$reading = this.service.reading.values(),
        level = _this$service$reading[0];

    if (level === undefined) {
      this.setState(constants["Ye" /* SystemReadingThreshold */].Neutral);
      return;
    }

    var _this$service$highThr = (_this$service$highThr2 = this.service.highThreshold) === null || _this$service$highThr2 === void 0 ? void 0 : _this$service$highThr2.values(),
        high = _this$service$highThr[0];

    if (high !== undefined && level >= high) {
      this.setState(constants["Ye" /* SystemReadingThreshold */].High);
      return;
    }

    var _this$service$lowThre = (_this$service$lowThre2 = this.service.lowThreshold) === null || _this$service$lowThre2 === void 0 ? void 0 : _this$service$lowThre2.values(),
        low = _this$service$lowThre[0];

    if (low !== undefined && level <= low) {
      this.setState(constants["Ye" /* SystemReadingThreshold */].Low);
      return;
    } // neutral


    this.setState(constants["Ye" /* SystemReadingThreshold */].Neutral);
  };

  _proto.setState = function setState(state) {
    if (state === this._state) return;
    this._state = state;

    switch (state) {
      case constants["Ye" /* SystemReadingThreshold */].High:
        this.service.sendEvent(constants["Xe" /* SystemEvent */].High);
        break;

      case constants["Ye" /* SystemReadingThreshold */].Low:
        this.service.sendEvent(constants["Xe" /* SystemEvent */].Low);
        break;

      case constants["Ye" /* SystemReadingThreshold */].Neutral:
        this.service.sendEvent(constants["Xe" /* SystemEvent */].Neutral);
        break;
    }
  };

  return LevelDetector;
}(client["a" /* JDClient */]);
// CONCATENATED MODULE: ./jacdac-ts/src/hosts/analogsensorservicehost.ts






var analogsensorservicehost_AnalogSensorServiceHost = /*#__PURE__*/function (_SensorServiceHost) {
  Object(inheritsLoose["a" /* default */])(AnalogSensorServiceHost, _SensorServiceHost);

  function AnalogSensorServiceHost(serviceClass, options) {
    var _this;

    _this = _SensorServiceHost.call(this, serviceClass, options) || this;

    var _ref = options || {},
        minReading = _ref.minReading,
        maxReading = _ref.maxReading,
        lowThreshold = _ref.lowThreshold,
        highThreshold = _ref.highThreshold,
        readingResolution = _ref.readingResolution;

    if (minReading !== undefined) _this.addRegister(constants["Ze" /* SystemReg */].MinReading, [minReading]);
    if (maxReading !== undefined) _this.addRegister(constants["Ze" /* SystemReg */].MaxReading, [maxReading]);
    if (readingResolution !== undefined) _this.addRegister(constants["Ze" /* SystemReg */].ReadingResolution, [readingResolution]);

    if (lowThreshold !== undefined || _this.highThreshold !== undefined) {
      if (lowThreshold !== undefined) _this.lowThreshold = _this.addRegister(constants["Ze" /* SystemReg */].LowThreshold, [lowThreshold]);
      if (highThreshold !== undefined) _this.highThreshold = _this.addRegister(constants["Ze" /* SystemReg */].HighThreshold, [highThreshold]);
      _this.levelDetector = new leveldetector_LevelDetector(Object(assertThisInitialized["a" /* default */])(_this));
    }

    return _this;
  }

  return AnalogSensorServiceHost;
}(sensorservicehost["a" /* default */]);


// CONCATENATED MODULE: ./jacdac-ts/src/hosts/raingaugeservicehost.ts







var raingaugeservicehost_RainGaugeServiceHost = /*#__PURE__*/function (_AnalogSensorServiceH) {
  Object(inheritsLoose["a" /* default */])(RainGaugeServiceHost, _AnalogSensorServiceH);

  function RainGaugeServiceHost(options) {
    var _this;

    _this = _AnalogSensorServiceH.call(this, constants["ce" /* SRV_RAIN_GAUGE */], {
      readingValues: [0]
    }) || this;
    _this._tiltCount = 0;
    _this._level = 0;

    var _ref = options || {},
        bucketSize = _ref.bucketSize;

    _this.precipitationPrecision = _this.addRegister(constants["bd" /* RainGaugeReg */].PrecipitationPrecision, [bucketSize || 0.2794]);
    _this._level = 0;
    return _this;
  }

  var _proto = RainGaugeServiceHost.prototype;

  _proto.rain = /*#__PURE__*/function () {
    var _rain = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(fraction) {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (fraction) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              this._level += fraction;

              if (!(this._level >= 0.7)) {
                _context.next = 8;
                break;
              }

              _context.next = 6;
              return this.tilt();

            case 6:
              _context.next = 9;
              break;

            case 8:
              this.emit(constants["v" /* CHANGE */]);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function rain(_x) {
      return _rain.apply(this, arguments);
    }

    return rain;
  }();

  _proto.tilt = /*#__PURE__*/function () {
    var _tilt = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      var _this$precipitationPr, bucket, _this$reading$values, current;

      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this._tiltCount++;
              this._level = 0;
              _this$precipitationPr = this.precipitationPrecision.values(), bucket = _this$precipitationPr[0];
              _this$reading$values = this.reading.values(), current = _this$reading$values[0];
              this.reading.setValues([current + (bucket || 0.2)]);
              this.emit(constants["v" /* CHANGE */]);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function tilt() {
      return _tilt.apply(this, arguments);
    }

    return tilt;
  }();

  Object(createClass["a" /* default */])(RainGaugeServiceHost, [{
    key: "tiltCount",
    get: function get() {
      return this._tiltCount;
    }
  }, {
    key: "level",
    get: function get() {
      return this._level;
    }
  }]);

  return RainGaugeServiceHost;
}(analogsensorservicehost_AnalogSensorServiceHost);


// EXTERNAL MODULE: ./jacdac-ts/src/hosts/realtimeclockservicehost.ts
var realtimeclockservicehost = __webpack_require__("ge0e");

// CONCATENATED MODULE: ./jacdac-ts/src/hosts/reflectedlightservicehost.ts




var reflectedlightservicehost_ReflectedLightServiceHost = /*#__PURE__*/function (_AnalogSensorServiceH) {
  Object(inheritsLoose["a" /* default */])(ReflectedLightServiceHost, _AnalogSensorServiceH);

  function ReflectedLightServiceHost(options) {
    var _this;

    _this = _AnalogSensorServiceH.call(this, constants["ee" /* SRV_REFLECTED_LIGHT */], {
      readingValues: [0]
    }) || this;

    var _ref = options || {},
        variant = _ref.variant;

    _this.variant = _this.addRegister(constants["fd" /* ReflectedLightReg */].Variant, [variant || constants["gd" /* ReflectedLightVariant */].InfraredDigital]);
    return _this;
  }

  return ReflectedLightServiceHost;
}(analogsensorservicehost_AnalogSensorServiceHost);


// CONCATENATED MODULE: ./jacdac-ts/src/hosts/rotaryencoderservicehost.ts






var rotaryencoderservicehost_RotaryEncoderServiceHost = /*#__PURE__*/function (_SensorServiceHost) {
  Object(inheritsLoose["a" /* default */])(RotaryEncoderServiceHost, _SensorServiceHost);

  function RotaryEncoderServiceHost() {
    var _this;

    _this = _SensorServiceHost.call(this, constants["ie" /* SRV_ROTARY_ENCODER */], {
      readingValues: [0],
      streamingInterval: 50
    }) || this;
    _this.clicksPerTurn = _this.addRegister(constants["od" /* RotaryEncoderReg */].ClicksPerTurn, [12]);
    return _this;
  }

  var _proto = RotaryEncoderServiceHost.prototype;

  _proto.rotate = /*#__PURE__*/function () {
    var _rotate = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(clicks) {
      var _this$reading$values, position;

      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$reading$values = this.reading.values(), position = _this$reading$values[0];
              this.reading.setValues([position + (clicks >> 0)]);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function rotate(_x) {
      return _rotate.apply(this, arguments);
    }

    return rotate;
  }();

  return RotaryEncoderServiceHost;
}(sensorservicehost["a" /* default */]);


// CONCATENATED MODULE: ./jacdac-ts/src/hosts/servoservicehost.ts




var servoservicehost_ServoServiceHost = /*#__PURE__*/function (_ServiceHost) {
  Object(inheritsLoose["a" /* default */])(ServoServiceHost, _ServiceHost);

  function ServoServiceHost(options) {
    var _this;

    _this = _ServiceHost.call(this, constants["ke" /* SRV_SERVO */], options) || this;

    var _ref = options || {},
        minAngle = _ref.minAngle,
        maxAngle = _ref.maxAngle,
        responseSpeed = _ref.responseSpeed,
        stallTorque = _ref.stallTorque;

    _this.angle = _this.addRegister(constants["Ie" /* ServoReg */].Angle, [0]);
    _this.enabled = _this.addRegister(constants["Ie" /* ServoReg */].Enabled, [false]);
    _this.minAngle = _this.addRegister(constants["Ie" /* ServoReg */].MinAngle, minAngle !== undefined ? [minAngle] : undefined);
    _this.maxAngle = _this.addRegister(constants["Ie" /* ServoReg */].MaxAngle, maxAngle !== undefined ? [maxAngle] : undefined);
    _this.offset = _this.addRegister(constants["Ie" /* ServoReg */].Offset, [0]);
    _this.responseSpeed = _this.addRegister(constants["Ie" /* ServoReg */].ResponseSpeed, responseSpeed !== undefined ? [responseSpeed] : undefined);
    _this.stallTorque = _this.addRegister(constants["Ie" /* ServoReg */].StallTorque, stallTorque !== undefined ? [stallTorque] : undefined);
    return _this;
  }

  return ServoServiceHost;
}(servicehost["a" /* default */]);


// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__("BsyY");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__("W9jF");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pipes.ts
var pipes = __webpack_require__("o8zs");

// CONCATENATED MODULE: ./jacdac-ts/src/hosts/settingsservicehost.ts











var settingsservicehost_SettingsServiceHost = /*#__PURE__*/function (_ServiceHost) {
  Object(inheritsLoose["a" /* default */])(SettingsServiceHost, _ServiceHost);

  function SettingsServiceHost(storageKey) {
    var _this;

    _this = _ServiceHost.call(this, constants["le" /* SRV_SETTINGS */]) || this;
    _this.storageKey = storageKey;

    _this.addCommand(constants["Je" /* SettingsCmd */].Get, _this.handleGet.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    _this.addCommand(constants["Je" /* SettingsCmd */].Set, _this.handleSet.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    _this.addCommand(constants["Je" /* SettingsCmd */].Delete, _this.handleDelete.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    _this.addCommand(constants["Je" /* SettingsCmd */].ListKeys, _this.handleListKeys.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    _this.addCommand(constants["Je" /* SettingsCmd */].List, _this.handleList.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    _this.addCommand(constants["Je" /* SettingsCmd */].Clear, _this.handleClear.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    _this.settings = _this.read();
    return _this;
  }

  var _proto = SettingsServiceHost.prototype;

  _proto.getPayload = function getPayload(key) {
    var value = this.settings[key];
    var secret = /^$/.test(key);
    var payload;

    if (value === undefined) {
      payload = new Uint8Array(0);
    } else if (secret) {
      var _payload = new Uint8Array(1);

      _payload[0] = 0;
    } else {
      // return value
      payload = Object(utils["Q" /* stringToBuffer */])(value);
    }

    return payload;
  };

  _proto.handleGet = /*#__PURE__*/function () {
    var _handleGet = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(pkt) {
      var _pkt$jdunpack, key, payload, resp;

      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _pkt$jdunpack = pkt.jdunpack("s"), key = _pkt$jdunpack[0];
              payload = this.getPayload(key);
              resp = packet["a" /* default */].jdpacked(constants["Je" /* SettingsCmd */].Get, "z b", [key, payload]);
              _context.next = 5;
              return this.sendPacketAsync(resp);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function handleGet(_x) {
      return _handleGet.apply(this, arguments);
    }

    return handleGet;
  }();

  _proto.handleSet = /*#__PURE__*/function () {
    var _handleSet = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2(pkt) {
      var _pkt$jdunpack2, key, value;

      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _pkt$jdunpack2 = pkt.jdunpack("z b"), key = _pkt$jdunpack2[0], value = _pkt$jdunpack2[1];
              console.log({
                cmd: "set",
                key: key,
                value: value
              });
              this.settings[key] = Object(utils["l" /* bufferToString */])(value);
              _context2.next = 5;
              return this.save();

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function handleSet(_x2) {
      return _handleSet.apply(this, arguments);
    }

    return handleSet;
  }();

  _proto.handleDelete = /*#__PURE__*/function () {
    var _handleDelete = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee3(pkt) {
      var _pkt$jdunpack3, key;

      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _pkt$jdunpack3 = pkt.jdunpack("s"), key = _pkt$jdunpack3[0];
              delete this.settings[key];
              _context3.next = 4;
              return this.save();

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function handleDelete(_x3) {
      return _handleDelete.apply(this, arguments);
    }

    return handleDelete;
  }();

  _proto.handleListKeys = /*#__PURE__*/function () {
    var _handleListKeys = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee4(pkt) {
      var pipe;
      return regenerator_default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              pipe = pipes["b" /* OutPipe */].from(this.device.bus, pkt, true);
              _context4.next = 3;
              return pipe.respondForEach(Object.keys(this.settings), function (k) {
                return Object(pack["a" /* jdpack */])("s", [k]);
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function handleListKeys(_x4) {
      return _handleListKeys.apply(this, arguments);
    }

    return handleListKeys;
  }();

  _proto.handleList = /*#__PURE__*/function () {
    var _handleList = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee5(pkt) {
      var _this2 = this;

      var pipe;
      return regenerator_default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              pipe = pipes["b" /* OutPipe */].from(this.device.bus, pkt, true);
              _context5.next = 3;
              return pipe.respondForEach(Object.keys(this.settings), function (k) {
                var payload = _this2.getPayload(k);

                return Object(pack["a" /* jdpack */])("z b", [k, payload]);
              });

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function handleList(_x5) {
      return _handleList.apply(this, arguments);
    }

    return handleList;
  }();

  _proto.handleClear = function handleClear() {
    this.settings = {};
    this.save();
  };

  _proto.read = function read() {
    if (!this.storageKey) return {};

    try {
      var payload = typeof window !== "undefined" && window.localStorage.getItem(this.storageKey);
      return JSON.parse(payload || "{}");
    } catch (e) {
      console.log(e);
      return {};
    }
  };

  _proto.save = /*#__PURE__*/function () {
    var _save = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee6() {
      return regenerator_default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (this.storageKey) {
                try {
                  if (typeof window !== "undefined") window.localStorage.setItem(this.storageKey, JSON.stringify(this.settings));
                } catch (e) {
                  console.log(e);
                }
              }

              _context6.next = 3;
              return this.sendEvent(constants["Ke" /* SettingsEvent */].Change);

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function save() {
      return _save.apply(this, arguments);
    }

    return save;
  }();

  return SettingsServiceHost;
}(servicehost["a" /* default */]);


// CONCATENATED MODULE: ./jacdac-ts/src/hosts/speechsynthesisservicehost.ts





var speechsynthesisservicehost_SpeechSynthesisServiceHost = /*#__PURE__*/function (_ServiceHost) {
  Object(inheritsLoose["a" /* default */])(SpeechSynthesisServiceHost, _ServiceHost);

  function SpeechSynthesisServiceHost() {
    var _this$synthesis;

    var _this;

    _this = _ServiceHost.call(this, constants["se" /* SRV_SPEECH_SYNTHESIS */]) || this;
    _this.synthesis = typeof window !== "undefined" && window.speechSynthesis;
    _this.enabled = _this.addRegister(constants["Te" /* SpeechSynthesisReg */].Enabled, [!((_this$synthesis = _this.synthesis) !== null && _this$synthesis !== void 0 && _this$synthesis.paused)]);
    _this.pitch = _this.addRegister(constants["Te" /* SpeechSynthesisReg */].Pitch, [1]);
    _this.rate = _this.addRegister(constants["Te" /* SpeechSynthesisReg */].Rate, [1]);
    _this.lang = _this.addRegister(constants["Te" /* SpeechSynthesisReg */].Lang, [""]);
    _this.volume = _this.addRegister(constants["Te" /* SpeechSynthesisReg */].Volume, [0.5]);

    _this.addCommand(constants["Se" /* SpeechSynthesisCmd */].Speak, _this.handleSpeak.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    _this.addCommand(constants["Se" /* SpeechSynthesisCmd */].Cancel, _this.handleCancel.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    return _this;
  }

  var _proto = SpeechSynthesisServiceHost.prototype;

  _proto.handleSpeak = function handleSpeak(pkt) {
    var _pkt$jdunpack = pkt.jdunpack("s"),
        text = _pkt$jdunpack[0];

    if (!this.synthesis || !text) return;

    var _this$pitch$values = this.pitch.values(),
        pitch = _this$pitch$values[0];

    var _this$pitch$values2 = this.pitch.values(),
        rate = _this$pitch$values2[0];

    var _this$lang$values = this.lang.values(),
        lang = _this$lang$values[0];

    var _this$volume$values = this.volume.values(),
        volume = _this$volume$values[0];

    var utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = pitch;
    utterance.rate = rate;
    utterance.lang = lang;
    utterance.volume = volume;
    this.synthesis.speak(utterance);
  };

  _proto.handleCancel = function handleCancel(pkt) {
    var _this$synthesis2;

    (_this$synthesis2 = this.synthesis) === null || _this$synthesis2 === void 0 ? void 0 : _this$synthesis2.cancel();
  };

  return SpeechSynthesisServiceHost;
}(servicehost["a" /* default */]);


// CONCATENATED MODULE: ./jacdac-ts/src/hosts/switchservicehost.ts






var switchservicehost_SwitchServiceHost = /*#__PURE__*/function (_SensorServiceHost) {
  Object(inheritsLoose["a" /* default */])(SwitchServiceHost, _SensorServiceHost);

  function SwitchServiceHost(options) {
    var _this;

    _this = _SensorServiceHost.call(this, constants["te" /* SRV_SWITCH */], {
      readingValues: [false],
      streamingInterval: 50
    }) || this;

    var _ref = options || {},
        autoOffDelay = _ref.autoOffDelay,
        variant = _ref.variant;

    _this.variant = _this.addRegister(constants["Ve" /* SwitchReg */].Variant, variant !== undefined ? [variant] : undefined);
    _this.autoOffDelay = _this.addRegister(constants["Ve" /* SwitchReg */].AutoOffDelay, autoOffDelay !== undefined ? [autoOffDelay] : undefined);
    return _this;
  }

  var _proto = SwitchServiceHost.prototype;

  _proto.toggle = /*#__PURE__*/function () {
    var _toggle = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var _this$reading$values, v;

      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$reading$values = this.reading.values(), v = _this$reading$values[0];

              if (v) {
                _context.next = 6;
                break;
              }

              _context.next = 4;
              return this.switchOn();

            case 4:
              _context.next = 8;
              break;

            case 6:
              _context.next = 8;
              return this.switchOff();

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function toggle() {
      return _toggle.apply(this, arguments);
    }

    return toggle;
  }();

  _proto.switchOn = /*#__PURE__*/function () {
    var _switchOn = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      var _this$reading$values2, v;

      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$reading$values2 = this.reading.values(), v = _this$reading$values2[0];

              if (v) {
                _context2.next = 6;
                break;
              }

              this.reading.setValues([true]);
              _context2.next = 5;
              return this.sendEvent(constants["Ue" /* SwitchEvent */].On);

            case 5:
              this.startAutoOff();

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function switchOn() {
      return _switchOn.apply(this, arguments);
    }

    return switchOn;
  }();

  _proto.switchOff = /*#__PURE__*/function () {
    var _switchOff = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
      var _this$reading$values3, v;

      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this$reading$values3 = this.reading.values(), v = _this$reading$values3[0];

              if (!v) {
                _context3.next = 6;
                break;
              }

              this.reading.setValues([false]);
              _context3.next = 5;
              return this.sendEvent(constants["Ue" /* SwitchEvent */].Off);

            case 5:
              this.stopAutoOff();

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function switchOff() {
      return _switchOff.apply(this, arguments);
    }

    return switchOff;
  }();

  _proto.startAutoOff = function startAutoOff() {
    this.stopAutoOff();

    if (this.autoOffDelay.data !== undefined) {
      var _this$autoOffDelay$va = this.autoOffDelay.values(),
          delay = _this$autoOffDelay$va[0];

      this.autoOffInterval = setTimeout(this.switchOn.bind(this), delay);
    }
  };

  _proto.stopAutoOff = function stopAutoOff() {
    if (this.autoOffInterval) {
      clearTimeout(this.autoOffInterval);
      this.autoOffInterval = undefined;
    }
  };

  return SwitchServiceHost;
}(sensorservicehost["a" /* default */]);


// CONCATENATED MODULE: ./jacdac-ts/src/hosts/trafficlightservicehost.ts




var trafficlightservicehost_TrafficLightServiceHost = /*#__PURE__*/function (_ServiceHost) {
  Object(inheritsLoose["a" /* default */])(TrafficLightServiceHost, _ServiceHost);

  function TrafficLightServiceHost() {
    var _this;

    _this = _ServiceHost.call(this, constants["we" /* SRV_TRAFFIC_LIGHT */]) || this;
    _this.red = _this.addRegister(constants["gf" /* TrafficLightReg */].Red, [true]);
    _this.orange = _this.addRegister(constants["gf" /* TrafficLightReg */].Orange, [false]);
    _this.green = _this.addRegister(constants["gf" /* TrafficLightReg */].Green, [false]);
    return _this;
  }

  return TrafficLightServiceHost;
}(servicehost["a" /* default */]);


// EXTERNAL MODULE: ./jacdac-ts/src/hosts/ledservicehost.ts
var ledservicehost = __webpack_require__("NttO");

// CONCATENATED MODULE: ./jacdac-ts/src/hosts/soundplayerservicehost.ts









var soundplayerservicehost_SoundPlayerServiceHost = /*#__PURE__*/function (_ServiceHost) {
  Object(inheritsLoose["a" /* default */])(SoundPlayerServiceHost, _ServiceHost);

  function SoundPlayerServiceHost(sounds) {
    var _this;

    _this = _ServiceHost.call(this, constants["qe" /* SRV_SOUND_PLAYER */]) || this;
    _this.sounds = sounds;
    _this.volume = _this.addRegister(constants["Qe" /* SoundPlayerReg */].Volume, [0.5]);

    _this.addCommand(constants["Pe" /* SoundPlayerCmd */].ListSounds, _this.handleListSounds.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    _this.addCommand(constants["Pe" /* SoundPlayerCmd */].Play, _this.handlePlay.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    return _this;
  }

  var _proto = SoundPlayerServiceHost.prototype;

  _proto.handleListSounds = /*#__PURE__*/function () {
    var _handleListSounds = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(pkt) {
      var pipe;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pipe = pipes["b" /* OutPipe */].from(this.device.bus, pkt, true);
              _context.next = 3;
              return pipe.respondForEach(this.sounds, function (sound) {
                return Object(pack["a" /* jdpack */])("u32 s", sound);
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function handleListSounds(_x) {
      return _handleListSounds.apply(this, arguments);
    }

    return handleListSounds;
  }();

  _proto.handlePlay = function handlePlay(pkt) {
    var _this$onPlay;

    var _pkt$jdunpack = pkt.jdunpack("u0.16 s"),
        volume = _pkt$jdunpack[0],
        name = _pkt$jdunpack[1];

    (_this$onPlay = this.onPlay) === null || _this$onPlay === void 0 ? void 0 : _this$onPlay.call(this, volume, name);
  };

  return SoundPlayerServiceHost;
}(servicehost["a" /* default */]);


// CONCATENATED MODULE: ./jacdac-ts/src/hosts/randomnumbergeneratorservicehost.ts





var randomnumbergeneratorservicehost_RandomNumberGeneratorServiceHost = /*#__PURE__*/function (_SensorServiceHost) {
  Object(inheritsLoose["a" /* default */])(RandomNumberGeneratorServiceHost, _SensorServiceHost);

  function RandomNumberGeneratorServiceHost() {
    var _this;

    _this = _SensorServiceHost.call(this, constants["ge" /* SRV_RNG */], {
      variant: constants["kd" /* RngVariant */].WebCrypto,
      streamingInterval: 10000
    }) || this;

    _this.on(constants["Jc" /* REFRESH */], _this.handleRefresh.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    return _this;
  }

  var _proto = RandomNumberGeneratorServiceHost.prototype;

  _proto.handleRefresh = function handleRefresh() {
    // generate new data
    var data = new Uint8Array(64);
    console.log("rnd", {
      data: data
    });
    if (typeof window !== "undefined") window.crypto.getRandomValues(data);
    this.reading.setValues([data], true);
  };

  return RandomNumberGeneratorServiceHost;
}(sensorservicehost["a" /* default */]);


// CONCATENATED MODULE: ./jacdac-ts/src/hosts/compassservicehost.ts




var compassservicehost_CompassServiceHost = /*#__PURE__*/function (_AnalogSensorServiceH) {
  Object(inheritsLoose["a" /* default */])(CompassServiceHost, _AnalogSensorServiceH);

  function CompassServiceHost() {
    var _this;

    _this = _AnalogSensorServiceH.call(this, constants["Ed" /* SRV_COMPASS */], {
      readingValues: [0],
      minReading: 0,
      maxReading: 360,
      readingError: [1]
    }) || this;
    _this.enabled = _this.addRegister(constants["Q" /* CompassReg */].Enabled, [false]);

    _this.enabled.on(constants["v" /* CHANGE */], function () {
      var _this$statusCode$valu = _this.statusCode.values(),
          status = _this$statusCode$valu[0];

      if (status === constants["af" /* SystemStatusCodes */].CalibrationNeeded) {
        console.log("start calibration");

        _this.calibrate();
      }
    });

    return _this;
  }

  return CompassServiceHost;
}(analogsensorservicehost_AnalogSensorServiceHost);


// CONCATENATED MODULE: ./jacdac-ts/src/hosts/dmxservicehost.ts






var dmxservicehost_DMXServiceHost = /*#__PURE__*/function (_ServiceHost) {
  Object(inheritsLoose["a" /* default */])(DMXServiceHost, _ServiceHost);

  function DMXServiceHost() {
    var _this;

    _this = _ServiceHost.call(this, constants["Id" /* SRV_DMX */], {
      intensityValues: [0]
    }) || this;

    _this.addCommand(constants["jb" /* DmxCmd */].Send, _this.handleSend.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    return _this;
  }

  var _proto = DMXServiceHost.prototype;

  _proto.handleSend = function handleSend(pkt) {
    // ignore
    console.log("dmx send", Object(utils["V" /* toHex */])(pkt.data));
  };

  return DMXServiceHost;
}(servicehost["a" /* default */]);


// EXTERNAL MODULE: ./jacdac-ts/src/jdom/buffer.ts
var buffer = __webpack_require__("INgz");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/iframeclient.ts
var iframeclient = __webpack_require__("olu4");

// CONCATENATED MODULE: ./jacdac-ts/src/hosts/bitradioservicehost.ts







 // keep in sync with CODAL

var RADIO_MAX_PACKET_SIZE = 32;
var MAX_FIELD_DOUBLE_NAME_LENGTH = 8;
var MAX_PAYLOAD_LENGTH = 20;
var PACKET_PREFIX_LENGTH = 9;
var VALUE_PACKET_NAME_LEN_OFFSET = 13;
var DOUBLE_VALUE_PACKET_NAME_LEN_OFFSET = 17; // Packet Spec:
// | 0              | 1 ... 4       | 5 ... 8           | 9 ... 28
// ----------------------------------------------------------------
// | packet type    | system time   | serial number     | payload
//
// Serial number defaults to 0 unless enabled by user
// payload: number (9 ... 12)

var PACKET_TYPE_NUMBER = 0; // payload: number (9 ... 12), name length (13), name (14 ... 26)

var PACKET_TYPE_VALUE = 1; // payload: string length (9), string (10 ... 28)

var PACKET_TYPE_STRING = 2; // payload: buffer length (9), buffer (10 ... 28)

var PACKET_TYPE_BUFFER = 3; // payload: number (9 ... 16)

var PACKET_TYPE_DOUBLE = 4; // payload: number (9 ... 16), name length (17), name (18 ... 26)

var PACKET_TYPE_DOUBLE_VALUE = 5;

function getStringOffset(packetType) {
  switch (packetType) {
    case PACKET_TYPE_STRING:
      return PACKET_PREFIX_LENGTH;

    case PACKET_TYPE_VALUE:
      return VALUE_PACKET_NAME_LEN_OFFSET;

    case PACKET_TYPE_DOUBLE_VALUE:
      return DOUBLE_VALUE_PACKET_NAME_LEN_OFFSET;

    default:
      return undefined;
  }
}
/*
function getMaxStringLength(packetType: number) {
    switch (packetType) {
        case PACKET_TYPE_STRING:
            return MAX_PAYLOAD_LENGTH - 2;
        case PACKET_TYPE_VALUE:
        case PACKET_TYPE_DOUBLE_VALUE:
            return MAX_FIELD_DOUBLE_NAME_LENGTH;
        default:
            return undefined;
    }
}
*/


function truncateString(str) {
  // TODO
  return str;
}

var bitradioservicehost_RadioPacket = /*#__PURE__*/function () {
  RadioPacket.getPacket = function getPacket(data) {
    if (!data) return undefined; // last 4 bytes is RSSi

    return new RadioPacket(data);
  };

  RadioPacket.mkPacket = function mkPacket(packetType) {
    var res = new RadioPacket();
    res.data[0] = packetType;
    return res;
  };

  function RadioPacket(data) {
    this.data = data;
    if (!data) this.data = new Uint8Array(RADIO_MAX_PACKET_SIZE + 4);
  }

  var _proto = RadioPacket.prototype;

  _proto.hasString = function hasString() {
    return this.packetType === PACKET_TYPE_STRING || this.packetType === PACKET_TYPE_VALUE || this.packetType === PACKET_TYPE_DOUBLE_VALUE;
  };

  _proto.hasNumber = function hasNumber() {
    return this.packetType === PACKET_TYPE_NUMBER || this.packetType === PACKET_TYPE_DOUBLE || this.packetType === PACKET_TYPE_VALUE || this.packetType === PACKET_TYPE_DOUBLE_VALUE;
  };

  Object(createClass["a" /* default */])(RadioPacket, [{
    key: "signal",
    get: function get() {
      return Object(buffer["c" /* getNumber */])(this.data, buffer["a" /* NumberFormat */].Int32LE, this.data.length - 4);
    }
  }, {
    key: "packetType",
    get: function get() {
      return this.data[0];
    }
  }, {
    key: "time",
    get: function get() {
      return Object(buffer["c" /* getNumber */])(this.data, buffer["a" /* NumberFormat */].Int32LE, 1);
    },
    set: function set(val) {
      Object(buffer["e" /* setNumber */])(this.data, buffer["a" /* NumberFormat */].Int32LE, 1, val);
    }
  }, {
    key: "serial",
    get: function get() {
      return Object(buffer["c" /* getNumber */])(this.data, buffer["a" /* NumberFormat */].Int32LE, 5);
    },
    set: function set(val) {
      Object(buffer["e" /* setNumber */])(this.data, buffer["a" /* NumberFormat */].Int32LE, 5, val);
    }
  }, {
    key: "stringPayload",
    get: function get() {
      var offset = getStringOffset(this.packetType);
      return offset ? this.data.slice(offset + 1, this.data[offset]).toString() : undefined;
    },
    set: function set(val) {
      var offset = getStringOffset(this.packetType);

      if (offset) {
        var buf = Object(utils["Q" /* stringToBuffer */])(truncateString(val));
        this.data[offset] = buf.length;
        Object(utils["D" /* memcpy */])(this.data, offset + 1, buf);
      }
    }
  }, {
    key: "numberPayload",
    get: function get() {
      switch (this.packetType) {
        case PACKET_TYPE_NUMBER:
        case PACKET_TYPE_VALUE:
          return Object(buffer["c" /* getNumber */])(this.data, buffer["a" /* NumberFormat */].Int32LE, PACKET_PREFIX_LENGTH);

        case PACKET_TYPE_DOUBLE:
        case PACKET_TYPE_DOUBLE_VALUE:
          return Object(buffer["c" /* getNumber */])(this.data, buffer["a" /* NumberFormat */].Float64LE, PACKET_PREFIX_LENGTH);
      }

      return undefined;
    },
    set: function set(val) {
      switch (this.packetType) {
        case PACKET_TYPE_NUMBER:
        case PACKET_TYPE_VALUE:
          Object(buffer["e" /* setNumber */])(this.data, buffer["a" /* NumberFormat */].Int32LE, PACKET_PREFIX_LENGTH, val);
          break;

        case PACKET_TYPE_DOUBLE:
        case PACKET_TYPE_DOUBLE_VALUE:
          Object(buffer["e" /* setNumber */])(this.data, buffer["a" /* NumberFormat */].Float64LE, PACKET_PREFIX_LENGTH, val);
          break;
      }
    }
  }, {
    key: "bufferPayload",
    get: function get() {
      var len = this.data[PACKET_PREFIX_LENGTH];
      return this.data.slice(PACKET_PREFIX_LENGTH + 1, PACKET_PREFIX_LENGTH + 1 + len);
    },
    set: function set(b) {
      var len = Math.min(b.length, MAX_PAYLOAD_LENGTH - 1);
      this.data[PACKET_PREFIX_LENGTH] = len;
      Object(utils["D" /* memcpy */])(this.data, PACKET_PREFIX_LENGTH + 1, b, 0, len);
    }
  }]);

  return RadioPacket;
}();

var bitradioservicehost_BitRadioServiceHost = /*#__PURE__*/function (_ServiceHost) {
  Object(inheritsLoose["a" /* default */])(BitRadioServiceHost, _ServiceHost);

  function BitRadioServiceHost() {
    var _this;

    _this = _ServiceHost.call(this, constants["yd" /* SRV_BIT_RADIO */]) || this;
    _this.enabled = _this.addRegister(constants["o" /* BitRadioReg */].Enabled, [0]);
    _this.group = _this.addRegister(constants["o" /* BitRadioReg */].Group, [1]);
    _this.transmissionPower = _this.addRegister(constants["o" /* BitRadioReg */].TransmissionPower, [6]);
    _this.frequencyBand = _this.addRegister(constants["o" /* BitRadioReg */].FrequencyBand, [7]);

    _this.addCommand(constants["n" /* BitRadioCmd */].SendString, _this.handleSendString.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    _this.addCommand(constants["n" /* BitRadioCmd */].SendNumber, _this.handleSendNumber.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    _this.addCommand(constants["n" /* BitRadioCmd */].SendValue, _this.handleSendValue.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    _this.addCommand(constants["n" /* BitRadioCmd */].SendBuffer, _this.handleSendBuffer.bind(Object(assertThisInitialized["a" /* default */])(_this)));

    return _this;
  }

  var _proto2 = BitRadioServiceHost.prototype;

  _proto2.handleSendString = function handleSendString(pkt) {
    var _pkt$jdunpack = pkt.jdunpack("s"),
        message = _pkt$jdunpack[0];

    var rpkt = bitradioservicehost_RadioPacket.mkPacket(PACKET_TYPE_STRING);
    rpkt.stringPayload = message;
    this.sendRadioPacket(rpkt);
  };

  _proto2.handleSendNumber = function handleSendNumber(pkt) {
    var _pkt$jdunpack2 = pkt.jdunpack("f64"),
        value = _pkt$jdunpack2[0];

    var rpkt = bitradioservicehost_RadioPacket.mkPacket(PACKET_TYPE_DOUBLE);
    rpkt.numberPayload = value;
    this.sendRadioPacket(rpkt);
  };

  _proto2.handleSendValue = function handleSendValue(pkt) {
    var _pkt$jdunpack3 = pkt.jdunpack("f64 s"),
        value = _pkt$jdunpack3[0],
        name = _pkt$jdunpack3[1];

    var rpkt = bitradioservicehost_RadioPacket.mkPacket(PACKET_TYPE_DOUBLE_VALUE);
    rpkt.stringPayload = name;
    rpkt.numberPayload = value;
    this.sendRadioPacket(rpkt);
  };

  _proto2.handleSendBuffer = function handleSendBuffer(pkt) {
    var data = pkt.data;
    var rpkt = bitradioservicehost_RadioPacket.mkPacket(PACKET_TYPE_BUFFER);
    rpkt.bufferPayload = data;
    this.sendRadioPacket(rpkt);
  };

  _proto2.sendRadioPacket = function sendRadioPacket(rpkt) {
    var _this$enabled$values = this.enabled.values(),
        on = _this$enabled$values[0];

    if (!on) return; // radio is off

    var bus = this.device.bus;
    var timestamp = bus.timestamp;

    var _this$group$values = this.group.values(),
        group = _this$group$values[0];

    rpkt.time = timestamp;
    rpkt.serial = 0; // todo

    var msg = {
      type: "radiopacket",
      broadcast: true,
      // TODO
      rssi: -75,
      // TODO
      serial: 0,
      time: bus.timestamp,
      payload: {
        groupId: group,
        type: 0,
        // buffer
        bufferData: rpkt.data
      }
    }; // send message to parent

    console.log("bitradio: send", msg);

    if (Object(iframeclient["b" /* inIFrame */])()) {
      window.parent.postMessage(msg, "*");
    }
  };

  return BitRadioServiceHost;
}(servicehost["a" /* default */]);


// CONCATENATED MODULE: ./jacdac-ts/src/hosts/hosts.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

































var indoorThermometerOptions = {
  readingValues: [21.5],
  streamingInterval: 1000,
  minReading: -5,
  maxReading: 50,
  readingError: [0.25],
  variant: constants["ff" /* ThermometerVariant */].Indoor
};
var outdoorThermometerOptions = {
  readingValues: [21.5],
  streamingInterval: 1000,
  minReading: -40,
  maxReading: 120,
  readingError: [0.25],
  variant: constants["ff" /* ThermometerVariant */].Outdoor
};
var medicalThermometerOptions = {
  readingValues: [37.5],
  streamingInterval: 1000,
  minReading: 35,
  maxReading: 42,
  readingError: [0.5],
  variant: constants["ff" /* ThermometerVariant */].Body
};
var barometerOptions = {
  readingValues: [1013]
};
var sonarOptions = {
  variant: constants["ib" /* DistanceVariant */].Ultrasonic,
  minReading: 0.02,
  maxReading: 4,
  readingValues: [1]
};
var SG90_STALL_TORQUE = 1.8;
var SG90_RESPONSE_SPEED = 0.12; // deg/60deg

var microServoOptions = {
  stallTorque: SG90_STALL_TORQUE,
  // kg/cm
  responseSpeed: SG90_RESPONSE_SPEED // s/60deg

};
var microServo270Options = {
  stallTorque: SG90_STALL_TORQUE,
  // kg/cm
  responseSpeed: SG90_RESPONSE_SPEED,
  // s/60deg
  minAngle: -135,
  maxAngle: 135
};
var microServo360Options = {
  stallTorque: SG90_STALL_TORQUE,
  // kg/cm
  responseSpeed: SG90_RESPONSE_SPEED * 2,
  // s/60deg
  minAngle: -180,
  maxAngle: 180
};
var windDirectionOptions = {
  readingValues: [0],
  readingError: [5]
};
var windSpeedOptions = {
  readingValues: [0],
  readingError: [0.5],
  registerValues: [{
    code: constants["mf" /* WindSpeedReg */].MaxWindSpeed,
    values: [55]
  }]
};
var eCO2Options = {
  readingValues: [4000],
  variant: constants["kb" /* ECO2Variant */].VOC
};
var CO2Options = {
  readingValues: [4000],
  variant: constants["kb" /* ECO2Variant */].NDIR
};
var tvocOptions = {
  readingValues: [500]
};
var microbitSounds = [[0, "giggle"], [0, "happy"], [0, "hello"], [0, "mysterious"], [0, "sad"], [0, "slide"], [0, "soaring"], [0, "spring"], [0, "twinkle"], [0, "yawn"]];
var touchButton = {
  lowThreshold: 0.3,
  highThreshold: 0.8,
  readingValues: [0],
  variant: constants["f" /* AnalogButtonVariant */].Capacitive
};
var soundLevel = {
  readingValues: [0],
  lowThreshold: 10,
  highThreshold: 70,
  intensityValues: [false],
  registerValues: [{
    code: constants["Oe" /* SoundLevelReg */].MinDecibels,
    values: [-100]
  }, {
    code: constants["Oe" /* SoundLevelReg */].MaxDecibels,
    values: [-30]
  }]
};
var soundSpectrum = {
  readingValues: [new Uint8Array(0)],
  intensityValues: [false],
  registerValues: [{
    code: constants["Re" /* SoundSpectrumReg */].FftPow2Size,
    values: [5]
  }, {
    code: constants["Re" /* SoundSpectrumReg */].MinDecibels,
    values: [-100]
  }, {
    code: constants["Re" /* SoundSpectrumReg */].MaxDecibels,
    values: [-30]
  }, {
    code: constants["Re" /* SoundSpectrumReg */].SmoothingTimeConstant,
    values: [0.8]
  }]
};
var _hosts = [{
  name: "7-segment (4 segments)",
  serviceClasses: [constants["me" /* SRV_SEVEN_SEGMENT_DISPLAY */]],
  services: function services() {
    return [new servicehost["a" /* default */](constants["me" /* SRV_SEVEN_SEGMENT_DISPLAY */], {
      intensityValues: [0xffff],
      valueValues: [Object(utils["u" /* fromHex */])("ff112233")],
      registerValues: [{
        code: constants["Le" /* SevenSegmentDisplayReg */].DigitCount,
        values: [4]
      }, {
        code: constants["Le" /* SevenSegmentDisplayReg */].DecimalPoint,
        values: [true]
      }]
    })];
  }
}, {
  name: "7-segment (8 segments)",
  serviceClasses: [constants["me" /* SRV_SEVEN_SEGMENT_DISPLAY */]],
  services: function services() {
    return [new servicehost["a" /* default */](constants["me" /* SRV_SEVEN_SEGMENT_DISPLAY */], {
      intensityValues: [0xffff],
      valueValues: [Object(utils["u" /* fromHex */])("0102040810204080")],
      registerValues: [{
        code: constants["Le" /* SevenSegmentDisplayReg */].DigitCount,
        values: [8]
      }, {
        code: constants["Le" /* SevenSegmentDisplayReg */].DecimalPoint,
        values: [true]
      }]
    })];
  }
}, {
  name: "accelerometer",
  serviceClasses: [constants["ud" /* SRV_ACCELEROMETER */]],
  services: function services() {
    return [new sensorservicehost["a" /* default */](constants["ud" /* SRV_ACCELEROMETER */], {
      readingValues: [0.5, 0.5, -(1 - (0.5 * 0.5 + 0.5 * 0.5))]
    })];
  }
}, {
  name: "arcade gamepad (all buttons)",
  serviceClasses: [constants["wd" /* SRV_ARCADE_GAMEPAD */]],
  services: function services() {
    return [new arcadegamepadservicehost["a" /* default */]()];
  }
}, {
  name: "arcade gamepad (only DPad+A/B)",
  serviceClasses: [constants["wd" /* SRV_ARCADE_GAMEPAD */]],
  services: function services() {
    return [new arcadegamepadservicehost["a" /* default */]([constants["g" /* ArcadeGamepadButton */].Left, constants["g" /* ArcadeGamepadButton */].Right, constants["g" /* ArcadeGamepadButton */].Up, constants["g" /* ArcadeGamepadButton */].Down, constants["g" /* ArcadeGamepadButton */].A, constants["g" /* ArcadeGamepadButton */].B])];
  }
}, {
  name: "barometer",
  serviceClasses: [constants["xd" /* SRV_BAROMETER */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["xd" /* SRV_BAROMETER */], barometerOptions)];
  }
}, {
  name: "bitradio",
  serviceClasses: [constants["yd" /* SRV_BIT_RADIO */]],
  services: function services() {
    return [new bitradioservicehost_BitRadioServiceHost()];
  }
}, {
  name: "button",
  serviceClasses: [constants["Ad" /* SRV_BUTTON */]],
  services: function services() {
    return [new buttonservicehost_ButtonServiceHost()];
  }
}, {
  name: "button (2x)",
  serviceClasses: [constants["Ad" /* SRV_BUTTON */]],
  services: function services() {
    return [new buttonservicehost_ButtonServiceHost("B0"), new buttonservicehost_ButtonServiceHost("B1")];
  }
}, {
  name: "button (4x)",
  serviceClasses: [constants["Ad" /* SRV_BUTTON */]],
  services: function services() {
    return Array(4).fill(0).map(function (_, i) {
      return new buttonservicehost_ButtonServiceHost("B" + i);
    });
  }
}, {
  name: "buzzer",
  serviceClasses: [constants["Bd" /* SRV_BUZZER */]],
  services: function services() {
    return [new buzzerservicehost["a" /* default */]()];
  }
}, {
  name: "capacitive button",
  serviceClasses: [constants["vd" /* SRV_ANALOG_BUTTON */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["vd" /* SRV_ANALOG_BUTTON */], touchButton)];
  }
}, {
  name: "capacitive button (6x)",
  serviceClasses: [constants["vd" /* SRV_ANALOG_BUTTON */]],
  services: function services() {
    return Array(6).fill(0).map(function (_, i) {
      return new analogsensorservicehost_AnalogSensorServiceHost(constants["vd" /* SRV_ANALOG_BUTTON */], _objectSpread(_objectSpread({}, touchButton), {
        instanceName: "C" + i
      }));
    });
  }
}, {
  name: "capacitive button (12x)",
  serviceClasses: [constants["vd" /* SRV_ANALOG_BUTTON */]],
  services: function services() {
    return Array(12).fill(0).map(function (_, i) {
      return new analogsensorservicehost_AnalogSensorServiceHost(constants["vd" /* SRV_ANALOG_BUTTON */], _objectSpread(_objectSpread({}, touchButton), {
        instanceName: "C" + i
      }));
    });
  }
}, {
  name: "character screen (LDC, 16x2)",
  serviceClasses: [constants["Cd" /* SRV_CHARACTER_SCREEN */]],
  services: function services() {
    return [new characterscreenservicehost_CharacterScreenServiceHost({
      message: "hello\nworld!"
    })];
  }
}, {
  name: "character screen (OLED, 32x8, RTL)",
  serviceClasses: [constants["Cd" /* SRV_CHARACTER_SCREEN */]],
  services: function services() {
    return [new characterscreenservicehost_CharacterScreenServiceHost({
      message: "hello\nworld!",
      columns: 32,
      rows: 8,
      variant: constants["O" /* CharacterScreenVariant */].OLED,
      textDirection: constants["N" /* CharacterScreenTextDirection */].RightToLeft
    })];
  }
}, {
  name: "color",
  serviceClasses: [constants["Dd" /* SRV_COLOR */]],
  services: function services() {
    return [new sensorservicehost["a" /* default */](constants["Dd" /* SRV_COLOR */], {
      readingValues: [0.5, 0, 0.5]
    })];
  }
}, {
  name: "compass",
  serviceClasses: [constants["Ed" /* SRV_COMPASS */]],
  services: function services() {
    return [new compassservicehost_CompassServiceHost()];
  }
}, {
  name: "distance (sonar)",
  serviceClasses: [constants["Hd" /* SRV_DISTANCE */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["Hd" /* SRV_DISTANCE */], sonarOptions)];
  }
}, {
  name: "DMX",
  serviceClasses: [constants["Id" /* SRV_DMX */]],
  services: function services() {
    return [new dmxservicehost_DMXServiceHost()];
  }
}, {
  name: "eCO₂",
  serviceClasses: [constants["Jd" /* SRV_E_CO2 */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["Jd" /* SRV_E_CO2 */], eCO2Options)];
  }
}, {
  name: "eCO₂ + TVOC",
  serviceClasses: [constants["Jd" /* SRV_E_CO2 */], constants["xe" /* SRV_TVOC */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["Jd" /* SRV_E_CO2 */], eCO2Options), new analogsensorservicehost_AnalogSensorServiceHost(constants["xe" /* SRV_TVOC */], tvocOptions)];
  }
}, {
  name: "eCO₂ + humidity + thermometer",
  serviceClasses: [constants["Jd" /* SRV_E_CO2 */], constants["Md" /* SRV_HUMIDITY */], constants["ve" /* SRV_THERMOMETER */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["Jd" /* SRV_E_CO2 */], CO2Options), new humidityservicehost_HumidityServiceHost(), new analogsensorservicehost_AnalogSensorServiceHost(constants["ve" /* SRV_THERMOMETER */], indoorThermometerOptions)];
  }
}, {
  name: "gyroscope",
  serviceClasses: [constants["Kd" /* SRV_GYROSCOPE */]],
  services: function services() {
    return [new sensorservicehost["a" /* default */](constants["Kd" /* SRV_GYROSCOPE */], {
      readingValues: [0, 0, 0]
    })];
  }
}, {
  name: "heart rate",
  serviceClasses: [constants["Ld" /* SRV_HEART_RATE */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["Ld" /* SRV_HEART_RATE */], {
      readingValues: [80],
      variant: constants["ub" /* HeartRateVariant */].Finger
    })];
  }
}, {
  name: "humidity",
  serviceClasses: [constants["Md" /* SRV_HUMIDITY */]],
  services: function services() {
    return [new humidityservicehost_HumidityServiceHost()];
  }
}, {
  name: "humidity + temperature",
  serviceClasses: [constants["Md" /* SRV_HUMIDITY */], constants["ve" /* SRV_THERMOMETER */]],
  services: function services() {
    return [new humidityservicehost_HumidityServiceHost(), new analogsensorservicehost_AnalogSensorServiceHost(constants["ve" /* SRV_THERMOMETER */], outdoorThermometerOptions)];
  }
}, {
  name: "humidity + temperature + barometer",
  serviceClasses: [constants["Md" /* SRV_HUMIDITY */], constants["ve" /* SRV_THERMOMETER */], constants["xd" /* SRV_BAROMETER */]],
  services: function services() {
    return [new humidityservicehost_HumidityServiceHost(), new analogsensorservicehost_AnalogSensorServiceHost(constants["ve" /* SRV_THERMOMETER */], outdoorThermometerOptions), new analogsensorservicehost_AnalogSensorServiceHost(constants["xd" /* SRV_BAROMETER */], barometerOptions)];
  }
}, {
  name: "illuminance",
  serviceClasses: [constants["Nd" /* SRV_ILLUMINANCE */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["Nd" /* SRV_ILLUMINANCE */], {
      readingValues: [1]
    })];
  }
}, {
  name: "joystick (thumbstick)",
  serviceClasses: [constants["Od" /* SRV_JOYSTICK */]],
  services: function services() {
    return [new joystickservicehost_JoystickSensorServiceHost(constants["Lb" /* JoystickVariant */].Thumb)];
  }
}, {
  name: "joystick (arcade stick digital)",
  serviceClasses: [constants["Od" /* SRV_JOYSTICK */]],
  services: function services() {
    return [new joystickservicehost_JoystickSensorServiceHost(constants["Lb" /* JoystickVariant */].ArcadeStick, true)];
  }
}, {
  name: "LED (RGB through hole)",
  serviceClasses: [constants["Pd" /* SRV_LED */]],
  services: function services() {
    return [new ledservicehost["b" /* default */]({
      variant: constants["Ub" /* LedVariant */].ThroughHole,
      ledCount: 1,
      animation: [0, [[0xff >> 1, 0xff, 0xff >> 1, 3000 >> 3], [0xff, 0xff, 0xff, 30000 >> 3]]]
    })];
  }
}, {
  name: "LED (blue through hole)",
  serviceClasses: [constants["Pd" /* SRV_LED */]],
  services: function services() {
    return [new ledservicehost["b" /* default */]({
      variant: constants["Ub" /* LedVariant */].ThroughHole,
      waveLength: 624,
      ledCount: 3,
      animation: [0, [[0, 0, 0xff, 0xff]]]
    })];
  }
}, {
  name: "LED matrix (5x5 micro:bit)",
  serviceClasses: [constants["Qd" /* SRV_LED_MATRIX */]],
  services: function services() {
    return [new ledmatrixservicehost["a" /* default */](5, 5)];
  }
}, {
  name: "LED matrix (8x8)",
  serviceClasses: [constants["Qd" /* SRV_LED_MATRIX */]],
  services: function services() {
    return [new ledmatrixservicehost["a" /* default */](8, 8)];
  }
}, {
  name: "LED matrix (11x7)",
  serviceClasses: [constants["Qd" /* SRV_LED_MATRIX */]],
  services: function services() {
    return [new ledmatrixservicehost["a" /* default */](11, 7)];
  }
}, {
  name: "LED pixel ring 10",
  serviceClasses: [constants["Rd" /* SRV_LED_PIXEL */]],
  services: function services() {
    return [new ledpixelservicehost_LedPixelServiceHost({
      numPixels: 10,
      variant: constants["Sb" /* LedPixelVariant */].Ring
    })];
  }
}, {
  name: "LED pixel ring 12",
  serviceClasses: [constants["Rd" /* SRV_LED_PIXEL */]],
  services: function services() {
    return [new ledpixelservicehost_LedPixelServiceHost({
      numPixels: 12,
      variant: constants["Sb" /* LedPixelVariant */].Ring
    })];
  }
}, {
  name: "LED pixel ring 16",
  serviceClasses: [constants["Rd" /* SRV_LED_PIXEL */]],
  services: function services() {
    return [new ledpixelservicehost_LedPixelServiceHost({
      numPixels: 16,
      variant: constants["Sb" /* LedPixelVariant */].Ring
    })];
  }
}, {
  name: "LED pixel ring 24",
  serviceClasses: [constants["Rd" /* SRV_LED_PIXEL */]],
  services: function services() {
    return [new ledpixelservicehost_LedPixelServiceHost({
      numPixels: 24,
      variant: constants["Sb" /* LedPixelVariant */].Ring
    })];
  }
}, {
  name: "LED pixel jewel 7",
  serviceClasses: [constants["Rd" /* SRV_LED_PIXEL */]],
  services: function services() {
    return [new ledpixelservicehost_LedPixelServiceHost({
      numPixels: 7,
      variant: constants["Sb" /* LedPixelVariant */].Jewel
    })];
  }
}, {
  name: "LED pixel stick 8",
  serviceClasses: [constants["Rd" /* SRV_LED_PIXEL */]],
  services: function services() {
    return [new ledpixelservicehost_LedPixelServiceHost({
      numPixels: 8,
      variant: constants["Sb" /* LedPixelVariant */].Stick
    })];
  }
}, {
  name: "LED pixel strip 30",
  serviceClasses: [constants["Rd" /* SRV_LED_PIXEL */]],
  services: function services() {
    return [new ledpixelservicehost_LedPixelServiceHost({
      numPixels: 60,
      maxPower: 1000,
      variant: constants["Sb" /* LedPixelVariant */].Strip
    })];
  }
}, {
  name: "LED pixel strip 60",
  serviceClasses: [constants["Rd" /* SRV_LED_PIXEL */]],
  services: function services() {
    return [new ledpixelservicehost_LedPixelServiceHost({
      numPixels: 60,
      maxPower: 2000,
      variant: constants["Sb" /* LedPixelVariant */].Strip
    })];
  }
}, {
  name: "LED pixel strip 150",
  serviceClasses: [constants["Rd" /* SRV_LED_PIXEL */]],
  services: function services() {
    return [new ledpixelservicehost_LedPixelServiceHost({
      numPixels: 150,
      maxPower: 5000,
      variant: constants["Sb" /* LedPixelVariant */].Strip
    })];
  }
}, {
  name: "LED pixel strip 300",
  serviceClasses: [constants["Rd" /* SRV_LED_PIXEL */]],
  services: function services() {
    return [new ledpixelservicehost_LedPixelServiceHost({
      numPixels: 300,
      maxPower: 5000,
      variant: constants["Sb" /* LedPixelVariant */].Strip
    })];
  }
}, {
  name: "LED pixel matrix (4x4)",
  serviceClasses: [constants["Rd" /* SRV_LED_PIXEL */]],
  services: function services() {
    return [new ledpixelservicehost_LedPixelServiceHost({
      numPixels: 16,
      variant: constants["Sb" /* LedPixelVariant */].Matrix
    })];
  }
}, {
  name: "LED pixel matrix (8x8)",
  serviceClasses: [constants["Rd" /* SRV_LED_PIXEL */]],
  services: function services() {
    return [new ledpixelservicehost_LedPixelServiceHost({
      numPixels: 64,
      variant: constants["Sb" /* LedPixelVariant */].Matrix
    })];
  }
}, {
  name: "LED pixel matrix (16x4)",
  serviceClasses: [constants["Rd" /* SRV_LED_PIXEL */]],
  services: function services() {
    return [new ledpixelservicehost_LedPixelServiceHost({
      numPixels: 64,
      numColumns: 16,
      variant: constants["Sb" /* LedPixelVariant */].Matrix
    })];
  }
}, {
  name: "light level (photo-resistor)",
  serviceClasses: [constants["Sd" /* SRV_LIGHT_LEVEL */]],
  services: function services() {
    return [new sensorservicehost["a" /* default */](constants["Sd" /* SRV_LIGHT_LEVEL */], {
      readingValues: [0.5],
      variant: constants["Vb" /* LightLevelVariant */].PhotoResistor
    })];
  }
}, {
  name: "line tracker (digital)",
  serviceClasses: [constants["ee" /* SRV_REFLECTED_LIGHT */]],
  services: function services() {
    return [new reflectedlightservicehost_ReflectedLightServiceHost()];
  }
}, {
  name: "line tracker (2x digital)",
  serviceClasses: [constants["ee" /* SRV_REFLECTED_LIGHT */]],
  services: function services() {
    return [new reflectedlightservicehost_ReflectedLightServiceHost(), new reflectedlightservicehost_ReflectedLightServiceHost()];
  }
}, {
  name: "line tracker (analog)",
  serviceClasses: [constants["ee" /* SRV_REFLECTED_LIGHT */]],
  services: function services() {
    return [new reflectedlightservicehost_ReflectedLightServiceHost({
      variant: constants["gd" /* ReflectedLightVariant */].InfraredAnalog
    })];
  }
}, {
  name: "matrix keypad (3x4)",
  serviceClasses: [constants["Ud" /* SRV_MATRIX_KEYPAD */]],
  services: function services() {
    return [new matrixkeypadservicehost_MatrixKeypadServiceHost(3, 4, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "*", "0", "#"])];
  }
}, {
  name: "matrix keypad (4x4)",
  serviceClasses: [constants["Ud" /* SRV_MATRIX_KEYPAD */]],
  services: function services() {
    return [new matrixkeypadservicehost_MatrixKeypadServiceHost(4, 4, ["0", "1", "2", "A", "3", "4", "5", "B", "6", "7", "8", "C", "*", "0", "#", "D"])];
  }
}, {
  name: "matrix keypad (1x4)",
  serviceClasses: [constants["Ud" /* SRV_MATRIX_KEYPAD */]],
  services: function services() {
    return [new matrixkeypadservicehost_MatrixKeypadServiceHost(4, 1, ["1", "2", "3", "4"])];
  }
}, {
  name: "motion",
  serviceClasses: [constants["Wd" /* SRV_MOTION */]],
  services: function services() {
    return [new sensorservicehost["a" /* default */](constants["Wd" /* SRV_MOTION */], {
      readingValues: [false]
    })];
  }
}, {
  name: "motor",
  serviceClasses: [constants["Xd" /* SRV_MOTOR */]],
  services: function services() {
    return [new motorservicehost_MotorServiceHost()];
  }
}, {
  name: "protocol test",
  serviceClasses: [constants["ae" /* SRV_PROTO_TEST */]],
  services: function services() {
    return [new protocoltestservicehost["a" /* default */]()];
  }
}, {
  name: "pulse oxymeter",
  serviceClasses: [constants["be" /* SRV_PULSE_OXIMETER */]],
  services: function services() {
    return [new sensorservicehost["a" /* default */](constants["be" /* SRV_PULSE_OXIMETER */], {
      readingValues: [98]
    })];
  }
}, {
  name: "oxymeter + heart beat",
  serviceClasses: [constants["be" /* SRV_PULSE_OXIMETER */], constants["Ld" /* SRV_HEART_RATE */]],
  services: function services() {
    return [new sensorservicehost["a" /* default */](constants["be" /* SRV_PULSE_OXIMETER */], {
      readingValues: [98]
    }), new analogsensorservicehost_AnalogSensorServiceHost(constants["Ld" /* SRV_HEART_RATE */], {
      readingValues: [80],
      variant: constants["ub" /* HeartRateVariant */].Finger
    })];
  }
}, {
  name: "RNG (random number generator)",
  serviceClasses: [constants["ge" /* SRV_RNG */]],
  services: function services() {
    return [new randomnumbergeneratorservicehost_RandomNumberGeneratorServiceHost()];
  }
}, {
  name: "rain gauge",
  serviceClasses: [constants["ce" /* SRV_RAIN_GAUGE */]],
  services: function services() {
    return [new raingaugeservicehost_RainGaugeServiceHost()];
  }
}, {
  name: "real time clock",
  serviceClasses: [constants["de" /* SRV_REAL_TIME_CLOCK */]],
  services: function services() {
    return [new realtimeclockservicehost["a" /* default */]()];
  }
}, {
  name: "relay (EM/10A)",
  serviceClasses: [constants["fe" /* SRV_RELAY */]],
  services: function services() {
    return [new servicehost["a" /* default */](constants["fe" /* SRV_RELAY */], {
      intensityValues: [false],
      variant: constants["id" /* RelayVariant */].Electromechanical,
      registerValues: [{
        code: constants["hd" /* RelayReg */].MaxSwitchingCurrent,
        values: [10]
      }]
    })];
  }
}, {
  name: "relay 4x (SSR/5A)",
  serviceClasses: [constants["fe" /* SRV_RELAY */]],
  services: function services() {
    return Array(4).fill(0).map(function () {
      return new servicehost["a" /* default */](constants["fe" /* SRV_RELAY */], {
        intensityValues: [false],
        variant: constants["id" /* RelayVariant */].SolidState,
        registerValues: [{
          code: constants["hd" /* RelayReg */].MaxSwitchingCurrent,
          values: [5]
        }]
      });
    });
  }
}, {
  name: "rotary encoder",
  serviceClasses: [constants["ie" /* SRV_ROTARY_ENCODER */]],
  services: function services() {
    return [new rotaryencoderservicehost_RotaryEncoderServiceHost()];
  }
}, {
  name: "rotary encoder + button",
  serviceClasses: [constants["ie" /* SRV_ROTARY_ENCODER */], constants["Ad" /* SRV_BUTTON */]],
  services: function services() {
    return [new rotaryencoderservicehost_RotaryEncoderServiceHost(), new buttonservicehost_ButtonServiceHost()];
  }
}, {
  name: "rotary potentiometer",
  serviceClasses: [constants["Yd" /* SRV_POTENTIOMETER */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["Yd" /* SRV_POTENTIOMETER */], {
      variant: constants["Dc" /* PotentiometerVariant */].Rotary,
      readingValues: [0.5]
    })];
  }
}, {
  name: "servo",
  serviceClasses: [constants["ke" /* SRV_SERVO */]],
  services: function services() {
    return [new servoservicehost_ServoServiceHost(microServoOptions)];
  }
}, {
  name: "servo (270°)",
  serviceClasses: [constants["ke" /* SRV_SERVO */]],
  services: function services() {
    return [new servoservicehost_ServoServiceHost(microServo270Options)];
  }
}, {
  name: "servo (360°)",
  serviceClasses: [constants["ke" /* SRV_SERVO */]],
  services: function services() {
    return [new servoservicehost_ServoServiceHost(microServo360Options)];
  }
}, {
  name: "servo x 2",
  serviceClasses: [constants["ke" /* SRV_SERVO */]],
  services: function services() {
    return Array(2).fill(0).map(function () {
      return new servoservicehost_ServoServiceHost(microServoOptions);
    });
  }
}, {
  name: "servo x 4",
  serviceClasses: [constants["ke" /* SRV_SERVO */]],
  services: function services() {
    return Array(4).fill(0).map(function () {
      return new servoservicehost_ServoServiceHost(microServoOptions);
    });
  }
}, {
  name: "servo x 6",
  serviceClasses: [constants["ke" /* SRV_SERVO */]],
  services: function services() {
    return Array(6).fill(0).map(function (_, i) {
      return new servoservicehost_ServoServiceHost(microServoOptions);
    });
  }
}, {
  name: "servo x 16",
  serviceClasses: [constants["ke" /* SRV_SERVO */]],
  services: function services() {
    return Array(16).fill(0).map(function (_, i) {
      return new servoservicehost_ServoServiceHost(microServoOptions);
    });
  }
}, {
  name: "settings",
  serviceClasses: [constants["le" /* SRV_SETTINGS */]],
  services: function services() {
    return [new settingsservicehost_SettingsServiceHost()];
  }
}, {
  name: "slider",
  serviceClasses: [constants["Yd" /* SRV_POTENTIOMETER */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["Yd" /* SRV_POTENTIOMETER */], {
      variant: constants["Dc" /* PotentiometerVariant */].Slider
    })];
  }
}, {
  name: "soil moisture",
  serviceClasses: [constants["ne" /* SRV_SOIL_MOISTURE */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["ne" /* SRV_SOIL_MOISTURE */], {
      readingValues: [0.5]
    })];
  }
}, {
  name: "speech synthesis",
  serviceClasses: [constants["se" /* SRV_SPEECH_SYNTHESIS */]],
  services: function services() {
    return [new speechsynthesisservicehost_SpeechSynthesisServiceHost()];
  }
}, {
  name: "solenoid",
  serviceClasses: [constants["oe" /* SRV_SOLENOID */]],
  services: function services() {
    return [new servicehost["a" /* default */](constants["oe" /* SRV_SOLENOID */], {
      intensityValues: [0]
    })];
  }
}, {
  name: "sound level",
  serviceClasses: [constants["pe" /* SRV_SOUND_LEVEL */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["pe" /* SRV_SOUND_LEVEL */], soundLevel)];
  }
}, {
  name: "sound spectrum",
  serviceClasses: [constants["re" /* SRV_SOUND_SPECTRUM */]],
  services: function services() {
    return [new sensorservicehost["a" /* default */](constants["re" /* SRV_SOUND_SPECTRUM */], soundSpectrum)];
  }
}, {
  name: "sound player (micro:bit v2 sounds)",
  serviceClasses: [constants["qe" /* SRV_SOUND_PLAYER */]],
  services: function services() {
    return [new soundplayerservicehost_SoundPlayerServiceHost(microbitSounds)];
  }
}, {
  name: "switch (slide)",
  serviceClasses: [constants["te" /* SRV_SWITCH */]],
  services: function services() {
    return [new switchservicehost_SwitchServiceHost({
      variant: constants["We" /* SwitchVariant */].Slide
    })];
  }
}, {
  name: "switch (push button)",
  serviceClasses: [constants["te" /* SRV_SWITCH */]],
  services: function services() {
    return [new switchservicehost_SwitchServiceHost({
      variant: constants["We" /* SwitchVariant */].PushButton
    })];
  }
}, {
  name: "switch (toggle)",
  serviceClasses: [constants["te" /* SRV_SWITCH */]],
  services: function services() {
    return [new switchservicehost_SwitchServiceHost({
      variant: constants["We" /* SwitchVariant */].Toggle
    })];
  }
}, {
  name: "switch (tilt)",
  serviceClasses: [constants["te" /* SRV_SWITCH */]],
  services: function services() {
    return [new switchservicehost_SwitchServiceHost({
      variant: constants["We" /* SwitchVariant */].Tilt
    })];
  }
}, {
  name: "switch (proximity)",
  serviceClasses: [constants["te" /* SRV_SWITCH */]],
  services: function services() {
    return [new switchservicehost_SwitchServiceHost({
      variant: constants["We" /* SwitchVariant */].Proximity,
      autoOffDelay: 30
    })];
  }
}, {
  name: "thermometer (outdoor)",
  serviceClasses: [constants["ve" /* SRV_THERMOMETER */]],
  services: function services() {
    return [new sensorservicehost["a" /* default */](constants["ve" /* SRV_THERMOMETER */], outdoorThermometerOptions)];
  }
}, {
  name: "thermometer (medical)",
  serviceClasses: [constants["ve" /* SRV_THERMOMETER */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["ve" /* SRV_THERMOMETER */], medicalThermometerOptions)];
  }
}, {
  name: "traffic light",
  serviceClasses: [constants["we" /* SRV_TRAFFIC_LIGHT */]],
  services: function services() {
    return [new trafficlightservicehost_TrafficLightServiceHost()];
  }
}, {
  name: "traffic crossing (4 x lights)",
  serviceClasses: [constants["we" /* SRV_TRAFFIC_LIGHT */]],
  services: function services() {
    return Array(4).fill(0).map(function (_) {
      return new trafficlightservicehost_TrafficLightServiceHost();
    });
  }
}, {
  name: "thermocouple",
  serviceClasses: [constants["ue" /* SRV_THERMOCOUPLE */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["ue" /* SRV_THERMOCOUPLE */], {
      readingValues: [550],
      streamingInterval: 1000,
      minReading: 0,
      maxReading: 1100,
      readingError: [2.2],
      variant: constants["ef" /* ThermocoupleVariant */].TypeB
    })];
  }
}, {
  name: "TVOC",
  serviceClasses: [constants["xe" /* SRV_TVOC */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["xe" /* SRV_TVOC */], tvocOptions)];
  }
}, {
  name: "UV index",
  serviceClasses: [constants["ye" /* SRV_UV_INDEX */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["ye" /* SRV_UV_INDEX */], {
      readingValues: [5]
    })];
  }
}, {
  name: "water level",
  serviceClasses: [constants["Ae" /* SRV_WATER_LEVEL */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["Ae" /* SRV_WATER_LEVEL */], {
      readingValues: [0.5]
    })];
  }
}, {
  name: "weight scale (jewelry)",
  serviceClasses: [constants["Be" /* SRV_WEIGHT_SCALE */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["Be" /* SRV_WEIGHT_SCALE */], {
      readingValues: [0.001],
      variant: constants["kf" /* WeightScaleVariant */].Jewelry,
      maxReading: 0.2,
      minReading: 0.0005,
      readingResolution: 0.00001
    })];
  }
}, {
  name: "weight scale (body)",
  serviceClasses: [constants["Be" /* SRV_WEIGHT_SCALE */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["Be" /* SRV_WEIGHT_SCALE */], {
      readingValues: [60],
      variant: constants["kf" /* WeightScaleVariant */].Body,
      maxReading: 180,
      readingResolution: 0.1
    })];
  }
}, {
  name: "weight scale (food)",
  serviceClasses: [constants["Be" /* SRV_WEIGHT_SCALE */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["Be" /* SRV_WEIGHT_SCALE */], {
      readingValues: [0.5],
      variant: constants["kf" /* WeightScaleVariant */].Food,
      maxReading: 6,
      readingResolution: 0.001
    })];
  }
}, {
  name: "wind direction",
  serviceClasses: [constants["Ce" /* SRV_WIND_DIRECTION */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["Ce" /* SRV_WIND_DIRECTION */], windDirectionOptions)];
  }
}, {
  name: "wind speed",
  serviceClasses: [constants["De" /* SRV_WIND_SPEED */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["De" /* SRV_WIND_SPEED */], windSpeedOptions)];
  }
}, {
  name: "weather station (wind speed, direction, rain)",
  serviceClasses: [constants["De" /* SRV_WIND_SPEED */], constants["Ce" /* SRV_WIND_DIRECTION */], constants["ce" /* SRV_RAIN_GAUGE */]],
  services: function services() {
    return [new analogsensorservicehost_AnalogSensorServiceHost(constants["De" /* SRV_WIND_SPEED */], windSpeedOptions), new analogsensorservicehost_AnalogSensorServiceHost(constants["Ce" /* SRV_WIND_DIRECTION */], windDirectionOptions), new raingaugeservicehost_RainGaugeServiceHost()];
  }
}, {
  name: "vibration motor",
  serviceClasses: [constants["ze" /* SRV_VIBRATION_MOTOR */]],
  services: function services() {
    return [new servicehost["a" /* default */](constants["ze" /* SRV_VIBRATION_MOTOR */])];
  }
}, {
  name: "chassis (motor x 2 + sonar + light)",
  serviceClasses: [constants["Hd" /* SRV_DISTANCE */], constants["Rd" /* SRV_LED_PIXEL */], constants["Xd" /* SRV_MOTOR */]],
  services: function services() {
    return [new motorservicehost_MotorServiceHost("L"), new motorservicehost_MotorServiceHost("R"), new analogsensorservicehost_AnalogSensorServiceHost(constants["Hd" /* SRV_DISTANCE */], sonarOptions), new ledpixelservicehost_LedPixelServiceHost({
      numPixels: 5,
      variant: constants["Sb" /* LedPixelVariant */].Stick
    })];
  }
}, {
  name: "railway crossing (2 x lights, 2 x servos, 1 x buffer)",
  serviceClasses: [constants["we" /* SRV_TRAFFIC_LIGHT */], constants["ke" /* SRV_SERVO */], constants["Bd" /* SRV_BUZZER */]],
  services: function services() {
    return [new trafficlightservicehost_TrafficLightServiceHost(), new servoservicehost_ServoServiceHost({
      minAngle: 0,
      maxAngle: 90
    }), new trafficlightservicehost_TrafficLightServiceHost(), new servoservicehost_ServoServiceHost({
      minAngle: 0,
      maxAngle: 90
    }), new buzzerservicehost["a" /* default */]()];
  }
}, {
  name: "micro:bit v2",
  serviceClasses: [constants["Qd" /* SRV_LED_MATRIX */], constants["Ad" /* SRV_BUTTON */], constants["ud" /* SRV_ACCELEROMETER */], constants["pe" /* SRV_SOUND_LEVEL */], constants["Sd" /* SRV_LIGHT_LEVEL */], constants["Bd" /* SRV_BUZZER */], constants["qe" /* SRV_SOUND_PLAYER */]],
  services: function services() {
    return [new ledmatrixservicehost["a" /* default */](5, 5), new buttonservicehost_ButtonServiceHost("A"), new buttonservicehost_ButtonServiceHost("B"), new sensorservicehost["a" /* default */](constants["ud" /* SRV_ACCELEROMETER */], {
      readingValues: [0.5, 0.5, -(1 - (0.5 * 0.5 + 0.5 * 0.5))]
    }), new analogsensorservicehost_AnalogSensorServiceHost(constants["pe" /* SRV_SOUND_LEVEL */], soundLevel), new sensorservicehost["a" /* default */](constants["Sd" /* SRV_LIGHT_LEVEL */], {
      readingValues: [0.5],
      variant: constants["Vb" /* LightLevelVariant */].LEDMatrix
    }), new buzzerservicehost["a" /* default */](), new soundplayerservicehost_SoundPlayerServiceHost(microbitSounds)];
  }
}];
function hosts() {
  return _hosts.slice(0);
}
function addHost(bus, services) {
  var d = new devicehost["a" /* default */](services);
  var device = bus.addDeviceHost(d);
  return d;
}
function hostDefinitionFromServiceClass(serviceClass) {
  return _hosts.find(function (host) {
    return host.serviceClasses.length === 1 && host.serviceClasses[0] === serviceClass;
  });
}

/***/ })

}]);
//# sourceMappingURL=e577ed790312093c60d6f42a2eefa9c8fa2c70c1-e4db17de004e11d2f759.js.map