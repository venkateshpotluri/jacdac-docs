(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ "4l/8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return statusAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useDeviceStatusLightStyle; });
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IzqI");
/* harmony import */ var _hooks_useLedAnimationStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XEv/");



var statusHue = 32;
var statusSaturation = 255; //Every 524ms it changes from 5.9% and 1.6% (i.e. 1 sec duty cycle)

var bootloaderAnimation = [0, [[statusHue, statusSaturation, 96, 524 / 8], [statusHue, statusSaturation, 96, 0.1], [statusHue, statusSaturation, 72, 524 / 8], [statusHue, statusSaturation, 72, 0.1]]]; // 50ms every 150ms (50 on, 100 off) seven times (i.e. for 1 second)

var identifyAnimation = [7, [[statusHue, statusSaturation, 255, 50 / 8], [statusHue, statusSaturation, 255, 0.1], [statusHue, statusSaturation, 0, 100 / 8], [statusHue, statusSaturation, 0, 0.1]]]; // lights at 100% for 270ms, then 5.9% for rest of 530ms,
// then goes into application that turns it on full for 200ms

var startupAnimation = [1, [[statusHue, statusSaturation, 255, 270 / 8], [statusHue, statusSaturation, 255, 0.1], [statusHue, statusSaturation, 6 / 100 * 0xff, 530 / 8], [statusHue, statusSaturation, 6 / 100 * 0xff, 0.1], [statusHue, statusSaturation, 255, 200 / 8], [statusHue, statusSaturation, 255, 0.1], [statusHue, statusSaturation, 0, 0.1]]]; // Synchronized fast blink 50us every 500ms

var connectedAnimation = [0, [[statusHue, statusSaturation, 0, 500 / 8], [statusHue, statusSaturation, 0, 0.1], [statusHue, statusSaturation, 96, 24 / 8], [statusHue, statusSaturation, 96, 0.1], [statusHue, statusSaturation, 0, 0.1]]]; //5ms every 250ms

var disconnectedAnimation = [0, [[statusHue, statusSaturation, 128, 40 / 8], [statusHue, statusSaturation, 128, 0.1], [statusHue, statusSaturation, 16, 250 / 8], [statusHue, statusSaturation, 16, 0.1]]]; // fast blink 70ms on, 70ms off - 30 times (4.2 seconds) before a reboot

var panicFrames = [30, [[statusHue, statusSaturation, 128, 70 / 8], [statusHue, statusSaturation, 128, 0.1], [statusHue, statusSaturation, 16, 70 / 8], [statusHue, statusSaturation, 16, 0.1]]];
function statusAnimation(status) {
  switch (status) {
    case "startup":
      return startupAnimation;

    case "identify":
      return identifyAnimation;

    case "connected":
      return connectedAnimation;

    case "disconnected":
      return disconnectedAnimation;

    case "panic":
      return panicFrames;

    case "bootloader":
      return bootloaderAnimation;

    default:
      return [0, []];
  }
}
function useDeviceStatusLightStyle(device, options) {
  var bootloader = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(device, function (d) {
    return d.hasService(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__[/* SRV_BOOTLOADER */ "Bd"]);
  });
  var identifying = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(device, function (d) {
    return d === null || d === void 0 ? void 0 : d.identifying;
  });
  /*
  TODO
  const registerAnimation = useRegisterUnpackedValue<LedAnimationData>(
      register
  ) || [0, []]
  */
  // pick animation step

  var animation = identifying ? identifyAnimation : bootloader ? bootloaderAnimation : undefined;
  return Object(_hooks_useLedAnimationStyle__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(animation, options);
}

/***/ }),

/***/ "7/Hy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function SvgWidget(props) {
  var width = props.width,
      height = props.height,
      _props$size = props.size,
      size = _props$size === void 0 ? "100%" : _props$size,
      background = props.background,
      children = props.children,
      role = props.role,
      title = props.title,
      viewBox = props.viewBox,
      tabIndex = props.tabIndex;
  var h = height || width;
  var aspectRatio = width / height;
  var vertical = aspectRatio < 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "relative",
      height: vertical ? size : undefined,
      width: vertical ? undefined : size
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    tabIndex: tabIndex,
    viewBox: viewBox || "0 0 " + width + " " + h,
    "aria-label": title,
    style: {
      height: vertical ? "100%" : undefined,
      width: vertical ? undefined : "100%"
    },
    role: role || "group"
  }, background && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: 0,
    y: 0,
    width: width,
    height: height,
    fill: background,
    rx: 1,
    ry: 1
  }), children));
}

/***/ }),

/***/ "Lml+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useWidgetTheme; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tr08");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_DarkModeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("geQJ");



function useWidgetTheme(color) {
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();
  var palette = theme.palette;
  var background = palette.background;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ui_DarkModeContext__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]),
      darkMode = _useContext.darkMode;

  var active = color === "primary" ? palette.primary.main : color === "secondary" ? palette.secondary.main : palette.info.main;
  var backgroundColor = darkMode === "dark" ? background.default : palette.grey[800];
  var controlBackground = darkMode === "dark" ? palette.grey[800] : palette.grey[400];
  var textPrimary = palette.text.primary;
  var textProps = {
    fill: textPrimary,
    alignmentBaseline: "central",
    dominantBaseline: "middle",
    textAnchor: "middle",
    pointerEvents: "none",
    letterSpacing: 0,
    style: {
      userSelect: "none",
      pointerEvents: "none"
    }
  };
  return {
    background: backgroundColor,
    controlBackground: controlBackground,
    active: active,
    textPrimary: textPrimary,
    textProps: textProps
  };
}

/***/ }),

/***/ "XEv/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useLedAnimationStyle; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// CONCATENATED MODULE: ./jacdac-ts/src/jdom/color.ts
function hsvToCss(hue, saturation, value, brightness, monochrome) {
  var csshue = hue * 360 / 0xff;
  var csssat = (monochrome ? 0xff : saturation) / 0xff;
  var cssval = value / 0xff;

  var _hsv_to_hsl = hsv_to_hsl(csshue, csssat, cssval),
      h = _hsv_to_hsl[0],
      s = _hsv_to_hsl[1],
      l = _hsv_to_hsl[2];

  var mixl = 0.3;
  var alpha = (mixl + (1 - mixl) * l) * brightness;
  return "hsla(" + h + ", " + s * 100 + "%, " + l * 100 + "%, " + alpha;
}

function hsv_to_hsl(h, s, v) {
  // both hsv and hsl values are in [0, 1]
  var l = (2 - s) * v / 2;

  if (l != 0) {
    if (l == 1) {
      s = 0;
    } else if (l < 0.5) {
      s = s * v / (l * 2);
    } else {
      s = s * v / (2 - l * 2);
    }
  }

  return [h, s, l];
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// CONCATENATED MODULE: ./src/components/hooks/useLedAnimationStyle.ts




function interpolate(frames, time) {
  var framet = 0;
  var nframes = frames.length;

  for (var i = 0; i < nframes; ++i) {
    var frame = frames[i];

    if (i == nframes - 1 || time >= framet && time < framet + frame[3]) {
      // found time interval
      var frame1 = i == nframes - 1 ? frames[0] : frames[i + 1];
      var ratio = (time - framet) / frame[3];
      var ratiom1 = 1 - ratio;
      return {
        hue: ratio * frame[0] + ratiom1 * frame1[0],
        saturation: ratio * frame[1] + ratiom1 * frame1[1],
        value: ratio * frame[2] + ratiom1 * frame1[2]
      };
    } else {
      // keep adding time
      framet += frame[3]; // current start time of frame
    }
  }

  return {
    hue: 0,
    saturation: 0,
    value: 0
  };
}

function useLedAnimationStyle(animation, options) {
  var _ref = animation || [0, []],
      repetitions = _ref[0],
      frames = _ref[1];

  var _ref2 = options || {},
      monochrome = _ref2.monochrome,
      cssProperty = _ref2.cssProperty,
      step = _ref2.step,
      interval = _ref2.interval; // generate a CSS animation for the curren frames


  var _useMemo = Object(react["useMemo"])(function () {
    if (!(frames !== null && frames !== void 0 && frames.length) || repetitions < 0) return {
      className: "",
      helmetStyle: undefined
    };
    var className = "a-" + (Math.random() + "").replace(/^.*\./, '');
    var DURATION = 3;
    var property = cssProperty || "background-color";
    var total8ms = frames.reduce(function (t, row) {
      return t + row[DURATION];
    }, 0);
    var totals = total8ms * 8 / 1000 + (interval || 0) / 1000;
    var kf = "@keyframes " + className + " {\n";

    if (step) {
      var t8ms = 0;
      frames.forEach(function (frame) {
        var hue = frame[0],
            sat = frame[1],
            value = frame[2],
            duration = frame[3];
        var csscolor = hsvToCss(hue, sat, value, 0xff, monochrome);
        var percent = t8ms * 8 / 1000 / totals * 100;
        kf += "  " + Object(utils["K" /* roundWithPrecision */])(percent, 5) + "% { " + property + ": " + csscolor + "); }\n";
        t8ms += duration; // console.log({ total8ms, totals, t8ms, duration, percent })
      });
    } else {
      // 30fps
      var KEYFRAME_DURATION = 30 >> 3;
      var nkframes = Math.ceil(total8ms / KEYFRAME_DURATION);

      for (var kframei = 0; kframei < nkframes; ++kframei) {
        var kt = kframei / nkframes * total8ms;

        var _interpolate = interpolate(frames, kt),
            hue = _interpolate.hue,
            saturation = _interpolate.saturation,
            value = _interpolate.value; // generate new keyframe


        var percent = Math.round(kframei / (nkframes - 1) * 100);
        var csscolor = hsvToCss(hue, saturation, value, 0xff, monochrome);
        kf += "  " + Object(utils["K" /* roundWithPrecision */])(percent, 5) + "% { " + property + ": " + csscolor + "); }\n";
      }
    }

    kf += "}\n"; // @keyframes
    // class

    kf += "." + className + " {\nanimation-duration: " + totals + "s;\nanimation-name: " + className + ";\nanimation-delay: 0s;\nanimation-timing-function: linear;\nanimation-iteration-count: " + (!repetitions ? 'infinite' : repetitions) + ";\n}";
    return {
      helmetStyle: kf,
      className: className
    };
  }, [frames === null || frames === void 0 ? void 0 : frames.map(function (frame) {
    return frame.toString();
  }).join(), monochrome, step, cssProperty, interval, repetitions]),
      helmetStyle = _useMemo.helmetStyle,
      className = _useMemo.className;

  return {
    className: className,
    helmetStyle: helmetStyle
  };
}

/***/ }),

/***/ "k2qb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatusLEDAnimation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _devices_useDeviceStatusLightStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4l/8");
/* harmony import */ var _hooks_useLedAnimationStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XEv/");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7/Hy");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("qhky");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Lml+");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("NqtD");







function StatusLEDAnimation(props) {
  var status = props.status;
  var interval = 0;
  var count = 1;

  switch (status) {
    case "connected":
      count = 5;
      break;

    case "startup":
      interval = 2000;
      break;

    case "identify":
      interval = 2000;
      break;

    case "panic":
      interval = 5000;
      break;
  }

  var frames = Object(_devices_useDeviceStatusLightStyle__WEBPACK_IMPORTED_MODULE_1__[/* statusAnimation */ "b"])(status);

  var _useLedAnimationStyle = Object(_hooks_useLedAnimationStyle__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(frames, {
    cssProperty: "fill",
    monochrome: true,
    step: true,
    interval: interval
  }),
      helmetStyle = _useLedAnimationStyle.helmetStyle,
      className = _useLedAnimationStyle.className;

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(),
      controlBackground = _useWidgetTheme.controlBackground;

  var n = count || 1;
  var wc = 32;
  var h = wc;
  var w = wc * n + 6;
  var r = (wc >> 1) - 1;
  var cx = wc >> 1;
  var cy = h >> 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, helmetStyle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    width: w,
    height: h,
    size: "1em"
  }, Array(n).fill(0).map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      key: i,
      transform: "translate(" + wc * i + ", 0)"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: cx,
      cy: cy,
      r: r,
      fill: controlBackground
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: cx,
      cy: cy,
      r: r,
      className: className,
      stroke: controlBackground,
      strokeWidth: 1
    }));
  })), Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(status));
}

/***/ })

}]);
//# sourceMappingURL=93-d81b70bb0a1b95a266f3.js.map