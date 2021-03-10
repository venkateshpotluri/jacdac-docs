(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "DbiO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useKeyboardNavigationProps; });

// EXTERNAL MODULE: ./src/components/hooks/useFireKey.ts
var useFireKey = __webpack_require__("APA9");

// CONCATENATED MODULE: ./src/components/hooks/useArrowKeys.ts

var LEFT_KEY = 37;
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;
function useArrowKeys(options) {
  var _handlers;

  var onLeft = options.onLeft,
      onUp = options.onUp,
      onRight = options.onRight,
      onDown = options.onDown,
      symmetric = options.symmetric;
  if (!onLeft && !onUp && !onRight && !onDown) return undefined;
  var handlers = (_handlers = {}, _handlers[LEFT_KEY] = onLeft, _handlers[RIGHT_KEY] = onRight, _handlers[UP_KEY] = onUp || symmetric && onRight, _handlers[DOWN_KEY] = onDown || symmetric && onLeft, _handlers);
  return function (e) {
    var charCode = Object(useFireKey["b" /* keyCodeFromEvent */])(e);
    var handler = handlers[charCode];

    if (handler) {
      e.preventDefault();
      handler();
    }
  };
}
// CONCATENATED MODULE: ./src/components/hooks/useKeyboardNavigation.ts
function useKeyboardNavigation(parentRef) {
  var query = '[tabindex="0"]';

  var onMove = function onMove(offset) {
    return function () {
      console.log('keyboard move', {
        offset: offset
      });
      var focusable = Array.from((parentRef === null || parentRef === void 0 ? void 0 : parentRef.querySelectorAll(query)) || []);

      if (focusable.length) {
        var me = focusable.findIndex(function (f) {
          return f === document.activeElement;
        });
        var next = (me + offset + focusable.length) % focusable.length;
        focusable[next].focus();
      }
    };
  };

  return onMove;
}
// CONCATENATED MODULE: ./src/components/hooks/useKeyboardNavigationProps.ts


function useKeyboardNavigationProps(parentRef, vertical) {
  var onMove = useKeyboardNavigation(parentRef);
  var onKeyDown = useArrowKeys({
    onLeft: !vertical && onMove(-1),
    onRight: !vertical && onMove(1),
    onDown: vertical && onMove(1),
    onUp: vertical && onMove(-1)
  });
  return {
    onKeyDown: parentRef && onKeyDown
  };
}

/***/ }),

/***/ "R+TK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ DashboardBuzzer; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__("Z3vd");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slider/Slider.js + 1 modules
var Slider = __webpack_require__("6Obz");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__("BsyY");

// EXTERNAL MODULE: ./src/components/hooks/useKeyboardNavigationProps.ts + 2 modules
var useKeyboardNavigationProps = __webpack_require__("DbiO");

// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__("dYIP");

// EXTERNAL MODULE: ./src/components/hooks/useServiceHost.ts
var useServiceHost = __webpack_require__("asyI");

// CONCATENATED MODULE: ./src/components/hooks/usePlayTone.ts

var VOLUME_GAIN = 0.5;
function usePlayTone(defaultVolume) {
  var contextRef = Object(react["useRef"])();
  var volumeRef = Object(react["useRef"])(); // final cleanup

  Object(react["useEffect"])(function () {
    return function () {
      var _contextRef$current;

      return (_contextRef$current = contextRef.current) === null || _contextRef$current === void 0 ? void 0 : _contextRef$current.close();
    };
  }, []);

  var setVolume = function setVolume(v) {
    if (volumeRef.current && !isNaN(v)) {
      volumeRef.current.gain.value = v * VOLUME_GAIN;
    }
  };

  var playTone = function playTone(frequency, duration) {
    if (!contextRef.current) return;

    try {
      var tone = contextRef.current.createOscillator();
      tone.type = "sawtooth";
      tone.connect(volumeRef.current);
      tone.frequency.value = frequency; // update frequency

      tone.start(); // start and stop

      tone.stop(contextRef.current.currentTime + duration / 1000);
    } catch (e) {
      console.log(e);
    }
  }; // needs to be initiated in onClick on safari mobile


  var onClickActivateAudioContext = function onClickActivateAudioContext() {
    if (contextRef.current) return;

    try {
      var ctx = contextRef.current = new (window.AudioContext || window.webkitAudioContext)(); // play silence sound within onlick to unlock it

      var buffer = ctx.createBuffer(1, 1, 22050);
      var source = ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(ctx.destination);
      source.start(); // output node with volume

      var volumeNode = volumeRef.current = ctx.createGain();
      volumeNode.connect(ctx.destination);
      volumeNode.gain.value = (defaultVolume !== undefined ? defaultVolume : 0.2) * VOLUME_GAIN;
    } catch (e) {
      contextRef.current = undefined;
      volumeRef.current = undefined;
      console.error(e);
    }
  };

  return {
    onClickActivateAudioContext: onClickActivateAudioContext,
    setVolume: setVolume,
    playTone: playTone
  };
}
// EXTERNAL MODULE: ./jacdac-ts/src/hosts/buzzerservicehost.ts
var buzzerservicehost = __webpack_require__("swM1");

// CONCATENATED MODULE: ./src/components/dashboard/DashboardBuzzer.tsx











var useStyles = Object(makeStyles["a" /* default */])(function () {
  return Object(createStyles["a" /* default */])({
    btn: {
      minWidth: "1em",
      padding: "1em 0.75em 1em 0.75em"
    }
  });
});
function DashboardBuzzer(props) {
  var service = props.service;
  var classes = useStyles();
  var gridRef = Object(react["useRef"])();
  var host = Object(useServiceHost["a" /* default */])(service);
  var color = host ? "secondary" : "primary";
  var volumeRegister = service.register(constants["r" /* BuzzerReg */].Volume);

  var _useRegisterUnpackedV = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(volumeRegister),
      volume = _useRegisterUnpackedV[0];

  var keyboardProps = Object(useKeyboardNavigationProps["a" /* default */])(gridRef.current);

  var _usePlayTone = usePlayTone(volume),
      playTone = _usePlayTone.playTone,
      setVolume = _usePlayTone.setVolume,
      onClickActivateAudioContext = _usePlayTone.onClickActivateAudioContext; // listen for playTone commands from the buzzer


  Object(react["useEffect"])(function () {
    return host === null || host === void 0 ? void 0 : host.subscribe(buzzerservicehost["a" /* default */].PLAY_TONE, function (args) {
      playTone === null || playTone === void 0 ? void 0 : playTone(args[0], args[1]);
    });
  }, [host]);
  var notes = [{
    name: "C",
    frequency: 261.64
  }, {
    name: "D",
    frequency: 293.68
  }, {
    name: "E",
    frequency: 329.64
  }, {
    name: "F",
    frequency: 349.24
  }, {
    name: "G",
    frequency: 392.00
  }, {
    name: "A",
    frequency: 440
  }, {
    name: "B",
    frequency: 493.92
  }];

  var sendPlayTone = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(f) {
      var vol, period, duty, duration, data;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (host) onClickActivateAudioContext(); // enable audio context within click handler

              vol = 1;
              period = 1000000 / f;
              duty = period * vol / 2;
              duration = 400;
              data = Object(pack["a" /* jdpack */])("u16 u16 u16", [period, duty, duration]);
              _context.next = 8;
              return service.sendCmdAsync(constants["q" /* BuzzerCmd */].PlayTone, data);

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

  var handlePointerEnter = function handlePointerEnter(f) {
    return function (ev) {
      if (ev.buttons) sendPlayTone(f);
    };
  };

  var handlePlayTone = function handlePlayTone(f) {
    return function () {
      return sendPlayTone(f);
    };
  };

  var handleChange = /*#__PURE__*/function () {
    var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2(ev, newValue) {
      return regenerator_default.a.wrap(function _callee2$(_context2) {
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

  Object(react["useEffect"])(function () {
    return setVolume(volume);
  }, [volume]);
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    ref: gridRef,
    container: true,
    alignItems: "center",
    alignContent: "space-between"
  }, notes.map(function (note) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
      key: note.frequency,
      item: true,
      xs: true
    }, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], Object.assign({
      className: classes.btn,
      size: "small",
      variant: "outlined",
      onPointerEnter: handlePointerEnter(note.frequency),
      onPointerDown: handlePlayTone(note.frequency)
    }, keyboardProps), note.name));
  }), volume !== undefined && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(Slider["a" /* default */], {
    valueLabelDisplay: "off",
    min: 0,
    max: 1,
    step: 0.05,
    "aria-label": "volume",
    value: volume,
    color: color,
    onChange: handleChange
  })));
}

/***/ })

}]);
//# sourceMappingURL=66-0c674b8477f8966b6f3a.js.map