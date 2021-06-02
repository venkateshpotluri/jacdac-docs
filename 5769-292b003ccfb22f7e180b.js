(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5769],{

/***/ 27729:
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
  d: "M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"
}), 'VolumeDown');

exports.Z = _default;

/***/ }),

/***/ 32377:
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
  d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
}), 'VolumeUp');

exports.Z = _default;

/***/ }),

/***/ 15769:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DashboardBuzzer; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slider/Slider.js + 1 modules
var Slider = __webpack_require__(50514);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__(91635);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(49013);
// EXTERNAL MODULE: ./src/components/hooks/toneContext.ts
var toneContext = __webpack_require__(66775);
;// CONCATENATED MODULE: ./src/components/hooks/usePlayTone.ts


function usePlayTone(defaultVolume) {
  var context = (0,react.useRef)(); // final cleanup

  (0,react.useEffect)(function () {
    return function () {
      var _context$current;

      (_context$current = context.current) === null || _context$current === void 0 ? void 0 : _context$current.close();
    };
  }, []); // needs to be initiated in onClick on safari mobile

  var onClickActivateAudioContext = function onClickActivateAudioContext() {
    if (context.current) return;

    try {
      context.current = (0,toneContext/* createToneContext */.W)(defaultVolume);
    } catch (e) {
      console.warn(e);
    }
  };

  var setVolume = function setVolume(volume) {
    var _context$current2;

    return (_context$current2 = context.current) === null || _context$current2 === void 0 ? void 0 : _context$current2.setVolume(volume);
  };

  var playTone = function playTone(frequency, duration) {
    var _context$current3;

    return (_context$current3 = context.current) === null || _context$current3 === void 0 ? void 0 : _context$current3.playTone(frequency, duration);
  };

  return {
    onClickActivateAudioContext: onClickActivateAudioContext,
    setVolume: setVolume,
    playTone: playTone
  };
}
// EXTERNAL MODULE: ./jacdac-ts/src/servers/buzzerserver.ts
var buzzerserver = __webpack_require__(69589);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/VolumeDown.js
var VolumeDown = __webpack_require__(27729);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/VolumeUp.js
var VolumeUp = __webpack_require__(32377);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
// EXTERNAL MODULE: ./src/components/hooks/useRegister.ts
var useRegister = __webpack_require__(82677);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardBuzzer.tsx














var PianoWidget = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(532), __webpack_require__.e(317)]).then(__webpack_require__.bind(__webpack_require__, 28937));
});
function DashboardBuzzer(props) {
  var service = props.service;
  var server = (0,useServiceServer/* default */.Z)(service);
  var color = server ? "secondary" : "primary";
  var volumeRegister = (0,useRegister/* default */.Z)(service, constants/* BuzzerReg.Volume */.CGK.Volume);

  var _useRegisterUnpackedV = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(volumeRegister, props),
      volume = _useRegisterUnpackedV[0];

  var _usePlayTone = usePlayTone(volume),
      playTone = _usePlayTone.playTone,
      setVolume = _usePlayTone.setVolume,
      onClickActivateAudioContext = _usePlayTone.onClickActivateAudioContext; // listen for playTone commands from the buzzer


  (0,react.useEffect)(function () {
    return server === null || server === void 0 ? void 0 : server.subscribe(buzzerserver/* default.PLAY_TONE */.Z.PLAY_TONE, function (args) {
      playTone === null || playTone === void 0 ? void 0 : playTone(args[0], args[1]);
    });
  }, [server]);

  var sendPlayTone = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(f) {
      var vol, period, duty, duration, data;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (server) onClickActivateAudioContext(); // enable audio context within click handler

              vol = 1;
              period = 1000000 / f;
              duty = period * vol / 2;
              duration = 400;
              data = (0,pack/* jdpack */.AV)("u16 u16 u16", [period, duty, duration]);
              _context.next = 8;
              return service.sendCmdAsync(constants/* BuzzerCmd.PlayTone */.Rv2.PlayTone, data);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function sendPlayTone(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleChange = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(ev, newValue) {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              volumeRegister.sendSetPackedAsync("u0.8", [newValue], true);

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleChange(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react.useEffect)(function () {
    return setVolume === null || setVolume === void 0 ? void 0 : setVolume(volume);
  }, [volume]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(PianoWidget, {
    playTone: sendPlayTone
  }))), volume !== undefined && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(VolumeDown/* default */.Z, {
    color: "disabled"
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react.createElement(Slider/* default */.Z, {
    valueLabelDisplay: "off",
    min: 0,
    max: 1,
    step: 0.05,
    "aria-label": "volume",
    value: volume,
    color: color,
    onChange: handleChange
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(VolumeUp/* default */.Z, {
    color: "disabled"
  })))));
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

/***/ })

}]);
//# sourceMappingURL=5769-292b003ccfb22f7e180b.js.map