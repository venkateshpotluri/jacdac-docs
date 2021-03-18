(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[126],{

/***/ "iPqf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ DashboardSoundLevel; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__("dYIP");

// EXTERNAL MODULE: ./src/components/hooks/useServiceHost.ts
var useServiceHost = __webpack_require__("asyI");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slider/Slider.js + 1 modules
var Slider = __webpack_require__("6Obz");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Mic.js
var Mic = __webpack_require__("3NjB");
var Mic_default = /*#__PURE__*/__webpack_require__.n(Mic);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./src/components/ui/IconButtonWithProgress.tsx + 1 modules
var IconButtonWithProgress = __webpack_require__("gfZp");

// EXTERNAL MODULE: ./src/components/hooks/useAudioAnalyzer.ts + 1 modules
var useAudioAnalyzer = __webpack_require__("sgTi");

// CONCATENATED MODULE: ./src/components/hooks/useMicrophoneVolume.ts


function useMicrophoneVolume(enabled, options) {
  var _useMicrophoneAnalyze = Object(useAudioAnalyzer["a" /* useMicrophoneAnalyzer */])(options),
      analyser = _useMicrophoneAnalyze.analyser,
      onClickActivateMicrophone = _useMicrophoneAnalyze.onClickActivateMicrophone,
      closeMicrophone = _useMicrophoneAnalyze.closeMicrophone;

  var frequencies = Object(react["useRef"])(new Uint8Array(0));
  Object(react["useEffect"])(function () {
    if (!enabled) closeMicrophone();
  }, [enabled]);
  return {
    onClickActivateMicrophone: onClickActivateMicrophone,
    volume: function volume() {
      var a = analyser();
      if (!a) return 0;
      if (frequencies.current.length !== a.frequencyBinCount) frequencies.current = new Uint8Array(a.frequencyBinCount);
      a.getByteFrequencyData(frequencies.current);
      var max = 0;
      var bins = frequencies.current;
      var n = bins.length;

      for (var i = 0; i < n; ++i) {
        max = Math.max(max, bins[i]);
      }

      return max / 0xff;
    }
  };
}
// EXTERNAL MODULE: ./src/components/hooks/useAnimationFrame.ts
var useAnimationFrame = __webpack_require__("y4gn");

// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__("7/Hy");

// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__("Lml+");

// CONCATENATED MODULE: ./src/components/widgets/TrendWidget.tsx






function TrendWidget(props) {
  var register = props.register,
      min = props.min,
      max = props.max,
      horizon = props.horizon,
      size = props.size;
  var host = Object(useServiceHost["a" /* default */])(register.service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(useWidgetTheme["a" /* default */])(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active;

  var dataRef = Object(react["useRef"])(undefined);
  var pathRef = Object(react["useRef"])();
  var dx = 4;
  var m = 2;
  var w = horizon * dx + 2 * m;
  var h = w / 1.612;
  var dy = (h - 2 * m) / (max - min);
  Object(react["useEffect"])(function () {
    dataRef.current = register ? [] : undefined; // reset data

    return register === null || register === void 0 ? void 0 : register.subscribe(constants["v" /* CHANGE */], function () {
      // register new value
      var _ref = register.unpackedValue,
          v = _ref[0];
      var data = dataRef.current;
      data.unshift(v);

      while (data.length > horizon) {
        data.pop();
      }
    });
  }, [register, horizon, min, max]);
  Object(useAnimationFrame["a" /* default */])(function () {
    // update dom
    var data = dataRef.current;
    if (!data) return false; // nothing to render

    if (pathRef.current) {
      var d = "M " + w + " " + h + " ";
      var x = w - m;

      for (var i = 0; i < data.length; ++i) {
        var v = data[i];
        var y = h - m - (v - min) * dy;
        d += "L " + x + " " + y;
        x -= dx;
      }

      d += " V " + h + " z";
      pathRef.current.setAttribute("d", d);
    }

    return true;
  }, [dataRef.current]);
  return /*#__PURE__*/react_default.a.createElement(SvgWidget["a" /* default */], {
    width: w,
    height: h,
    size: size,
    background: background
  }, /*#__PURE__*/react_default.a.createElement("path", {
    fill: active,
    stroke: controlBackground,
    strokeWidth: m / 2,
    ref: pathRef
  }));
}
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__("aVfY");

// CONCATENATED MODULE: ./src/components/dashboard/DashboardSoundLevel.tsx













function HostMicrophoneButton(props) {
  var host = props.host,
      service = props.service,
      visible = props.visible;
  var enabledRegister = service.register(constants["Qe" /* SoundLevelReg */].Enabled);
  var enabled = Object(useRegisterValue["a" /* useRegisterBoolValue */])(enabledRegister, props);

  var _useRegisterUnpackedV = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(service.register(constants["Qe" /* SoundLevelReg */].MinDecibels), props),
      minDecibels = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(service.register(constants["Qe" /* SoundLevelReg */].MaxDecibels), props),
      maxDecibels = _useRegisterUnpackedV2[0];

  var _useMicrophoneVolume = useMicrophoneVolume(enabled && !!host, {
    fftSize: 64,
    smoothingTimeConstant: 0,
    minDecibels: minDecibels,
    maxDecibels: maxDecibels
  }),
      volume = _useMicrophoneVolume.volume,
      onClickActivateMicrophone = _useMicrophoneVolume.onClickActivateMicrophone;

  var title = enabled ? "Stop microphone" : "Start microphone";

  var handleClick = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (enabled) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return onClickActivateMicrophone();

            case 3:
              _context.next = 5;
              return enabledRegister.sendSetBoolAsync(!enabled, true);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick() {
      return _ref.apply(this, arguments);
    };
  }(); // update volume on demand


  Object(react["useEffect"])(function () {
    return visible && (host === null || host === void 0 ? void 0 : host.subscribe(constants["Jc" /* REFRESH */], function () {
      var v = volume === null || volume === void 0 ? void 0 : volume();

      if (v !== undefined) {
        host.reading.setValues([v]);
      }
    }));
  }, [host, volume, visible]);
  return /*#__PURE__*/react_default.a.createElement(IconButtonWithProgress["a" /* default */], {
    "aria-label": title,
    title: title,
    indeterminate: enabled,
    onClick: handleClick
  }, /*#__PURE__*/react_default.a.createElement(Mic_default.a, null));
}

function DashboardSoundLevel(props) {
  var visible = props.visible,
      service = props.service;
  var soundLevelRegister = service.register(constants["Qe" /* SoundLevelReg */].SoundLevel);

  var _useRegisterUnpackedV3 = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(soundLevelRegister, props),
      soundLevel = _useRegisterUnpackedV3[0];

  var host = Object(useServiceHost["a" /* default */])(service);
  var color = host ? "secondary" : "primary";

  var onChange = function onChange(event, newValue) {
    var svalue = newValue;
    host === null || host === void 0 ? void 0 : host.reading.setValues([svalue]);
    soundLevelRegister.sendGetAsync(); // refresh
  };

  if (soundLevel === undefined) return /*#__PURE__*/react_default.a.createElement(LoadingProgress["a" /* default */], null);
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(TrendWidget, {
    register: soundLevelRegister,
    min: 0,
    max: 1,
    horizon: 64
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2,
    alignItems: "center"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(HostMicrophoneButton, {
    service: service,
    host: host,
    visible: visible
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: true
  }, /*#__PURE__*/react_default.a.createElement(Slider["a" /* default */], {
    disabled: !host,
    valueLabelDisplay: "off",
    min: 0,
    max: 1,
    step: 0.1,
    value: soundLevel,
    onChange: onChange,
    color: color
  })))));
}

/***/ })

}]);
//# sourceMappingURL=126-80878c664a54a9ce3869.js.map