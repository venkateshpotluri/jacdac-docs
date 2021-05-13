(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5969],{

/***/ 58590:
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
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Clear');

exports.Z = _default;

/***/ }),

/***/ 82613:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ CmdButton; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(19756);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(37595);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Error.js
var Error = __webpack_require__(13840);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
;// CONCATENATED MODULE: ./src/components/hooks/useAnalytics.ts
/*
requires "@microsoft/applicationinsights-web-basic": "^2.6.1",
import { ApplicationInsights } from "@microsoft/applicationinsights-web-basic"

// YOUR_INSTRUMENTATION_KEY_GOES_HERE
const instrumentationKey: string = undefined
const appInsights =
    instrumentationKey &&
    new ApplicationInsights({
        instrumentationKey,
        isStorageUseDisabled: true,
        isCookieUseDisabled: true,
    })
const page =
    typeof window !== "undefined"
        ? () =>
              appInsights?.track({
                  name: window.location.href,
                  time: new Date().toUTCString(),
                  baseType: "PageData",
              })
        : () => {}
const track =
    typeof window !== "undefined"
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (name: string, properties?: { [key: string]: any }) =>
              appInsights?.track({
                  name,
                  time: new Date().toUTCString(),
                  data: properties,
                  baseType: "EventData",
              })
        : // eslint-disable-next-line @typescript-eslint/no-unused-vars
          (name, properties) => {}
if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).analytics = {
        page,
        track,
    }
}
*/
function useAnalytics() {
  var page = function page() {};

  var track = function track() {};

  return {
    page: page,
    track: track
  };
}
// EXTERNAL MODULE: ./src/components/hooks/useMounted.tsx
var useMounted = __webpack_require__(81888);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
;// CONCATENATED MODULE: ./src/components/CmdButton.tsx






 // tslint:disable-next-line: match-default-export-name no-submodule-imports







var ACK_RESET_DELAY = 500;
var ERROR_RESET_DELAY = 2000;
var useStyles = (0,makeStyles/* default */.Z)(function (theme) {
  var getBackgroundColor = theme.palette.type === "light" ? colorManipulator/* lighten */.$n : colorManipulator/* darken */._j;
  return (0,createStyles/* default */.Z)({
    ack: {
      color: "#fff",
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.success.main
    },
    error: {
      color: "#fff",
      backgroundColor: getBackgroundColor(theme.palette.error.main, 0.6)
    }
  });
});
function CmdButton(props) {
  var onClick = props.onClick,
      className = props.className,
      style = props.style,
      children = props.children,
      icon = props.icon,
      title = props.title,
      disabled = props.disabled,
      disableReset = props.disableReset,
      autoRun = props.autoRun,
      trackName = props.trackName,
      trackProperties = props.trackProperties,
      ackResetDelay = props.ackResetDelay,
      others = (0,objectWithoutPropertiesLoose/* default */.Z)(props, ["onClick", "className", "style", "children", "icon", "title", "disabled", "disableReset", "autoRun", "trackName", "trackProperties", "ackResetDelay"]);

  var _useContext = (0,react.useContext)(AppContext/* default */.ZP),
      setAppError = _useContext.setError;

  var classes = useStyles();

  var _useState = (0,react.useState)(false),
      working = _useState[0],
      setWorking = _useState[1];

  var _useState2 = (0,react.useState)(false),
      ack = _useState2[0],
      setAck = _useState2[1];

  var _useState3 = (0,react.useState)(undefined),
      error = _useState3[0],
      setError = _useState3[1];

  var _useAnalytics = useAnalytics(),
      track = _useAnalytics.track;

  var mounted = (0,useMounted/* default */.Z)();

  var _disabled = disabled || working;

  var run = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!working) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              // already working
              if (trackName) track("cmd." + trackName, trackProperties);
              _context.prev = 3;
              setError(undefined);
              setAck(false);
              setWorking(true);
              _context.next = 9;
              return onClick();

            case 9:
              if (mounted()) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return");

            case 11:
              setAck(true);

              if (disableReset) {
                _context.next = 18;
                break;
              }

              _context.next = 15;
              return (0,utils/* delay */.gw)(ackResetDelay || ACK_RESET_DELAY);

            case 15:
              if (mounted) {
                _context.next = 17;
                break;
              }

              return _context.abrupt("return");

            case 17:
              setAck(false);

            case 18:
              _context.next = 32;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](3);

              if (mounted()) {
                _context.next = 24;
                break;
              }

              return _context.abrupt("return");

            case 24:
              setAppError(_context.t0);
              setError(_context.t0);

              if (disableReset) {
                _context.next = 32;
                break;
              }

              _context.next = 29;
              return (0,utils/* delay */.gw)(ERROR_RESET_DELAY);

            case 29:
              if (mounted()) {
                _context.next = 31;
                break;
              }

              return _context.abrupt("return");

            case 31:
              setError(undefined);

            case 32:
              _context.prev = 32;
              if (mounted()) setWorking(false);
              return _context.finish(32);

            case 35:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 20, 32, 35]]);
    }));

    return function run() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClick = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(ev) {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ev.stopPropagation();
              run();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleClick(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var statusIcon = error ? /*#__PURE__*/react.createElement(Error/* default */.Z, null) : undefined;
  var modeClassName = error ? classes.error : ack ? classes.ack : undefined;
  var elClassName = (0,clsx_m/* default */.Z)(className, modeClassName); // run once

  (0,react.useEffect)(function () {
    if (autoRun) run();
  }, [autoRun]);
  if (!children && icon) return /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, Object.assign({
    className: elClassName,
    style: style,
    onClick: handleClick,
    "aria-label": title,
    title: title,
    disabled: _disabled
  }, others), statusIcon || icon);else return /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, Object.assign({
    className: elClassName,
    style: style,
    startIcon: icon,
    endIcon: statusIcon,
    onClick: handleClick,
    "aria-label": title,
    title: title,
    disabled: _disabled
  }, others), children);
}

/***/ }),

/***/ 25969:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardHIDKeyboard; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85061);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80453);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73512);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91635);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82613);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(58590);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81794);










var selectors = {
  a: 0x04,
  b: 0x05,
  c: 0x06,
  d: 0x07,
  e: 0x08,
  f: 0x09,
  g: 0x0a,
  h: 0x0b,
  i: 0x0c,
  j: 0x0d,
  k: 0x0e,
  l: 0x0f,
  m: 0x10,
  n: 0x11,
  o: 0x12,
  p: 0x13,
  q: 0x14,
  r: 0x15,
  s: 0x16,
  t: 0x17,
  u: 0x18,
  v: 0x19,
  w: 0x1a,
  x: 0x1b,
  y: 0x1c,
  z: 0x1d,
  "1": 0x1e,
  "2": 0x1f,
  "3": 0x20,
  "4": 0x21,
  "5": 0x22,
  "6": 0x23,
  "7": 0x24,
  "8": 0x25,
  "9": 0x26,
  "0": 0x27,
  "!": 0x1e,
  "@": 0x1f,
  "#": 0x20,
  $: 0x21,
  "%": 0x22,
  "^": 0x23,
  "&": 0x24,
  "*": 0x25,
  "(": 0x26,
  ")": 0x27,
  enter: 0x28,
  escape: 0x29,
  backspace: 0x2a,
  tab: 0x2b,
  " ": 0x2c,
  "-": 0x2d,
  _: 0x2d,
  "=": 0x2e,
  "+": 0x2e,
  "[": 0x2f,
  "{": 0x2f,
  "]": 0x30,
  "}": 0x30,
  "\\": 0x31,
  "|": 0x31,
  // non-US #
  "~": 0x32,
  ";": 0x33,
  ":": 0x33,
  "'": 0x34,
  '"': 0x34,
  // grave accent tilde
  ",": 0x36,
  "<": 0x37,
  ".": 0x37,
  ">": 0x37,
  "/": 0x38,
  "?": 0x38,
  capslock: 0x39,
  f1: 0x3a,
  f2: 0x3b,
  f3: 0x3c,
  f4: 0x3d,
  f5: 0x3e,
  f6: 0x3f,
  f7: 0x40,
  f8: 0x41,
  f9: 0x42,
  f10: 0x43,
  f11: 0x44,
  f12: 0x45,
  printscreen: 0x46,
  scrolllock: 0x47,
  pause: 0x48,
  insert: 0x49,
  home: 0x4a,
  pageup: 0x4b,
  delete: 0x4c,
  end: 0x4d,
  pagedown: 0x4e,
  arrowright: 0x4f,
  arrowleft: 0x50,
  arrowdown: 0x51,
  arrowup: 0x52,
  numlock: 0x53,
  numpaddivide: 0x54,
  numpadmultiply: 0x55,
  numpadsubstract: 0x56,
  numpadadd: 0x57,
  numpadenter: 0x58,
  numpad1: 0x59,
  numpad2: 0x5a,
  numpad3: 0x5b,
  numpad4: 0x5c,
  numpad5: 0x5d,
  numpad6: 0x5e,
  numpad7: 0x5f,
  numpad8: 0x60,
  numpad9: 0x61,
  numpad0: 0x62,
  numpaddecimal: 0x63,
  numpadequal: 0x67,
  f13: 0x68,
  f14: 0x69,
  f15: 0x6a,
  f16: 0x6b,
  f17: 0x6c,
  f18: 0x6d,
  f19: 0x6e,
  f20: 0x6f,
  f21: 0x70,
  f22: 0x71,
  f23: 0x72,
  f24: 0x73,
  execute: 0x74,
  help: 0x75,
  contextmenu: 0x76,
  select: 0x77,
  stop: 0x78,
  again: 0x79,
  undo: 0x7a,
  cut: 0x7b,
  copy: 0x7c,
  paste: 0x7d,
  find: 0x7e,
  mute: 0x7f,
  volumeup: 0x80,
  volumedown: 0x81,
  numpadcomma: 0x85
};
var reverseSelectors = Object.keys(selectors).reduce(function (r, key) {
  if (!r[selectors[key]]) r[selectors[key]] = key;
  return r;
}, {});
var modifierCodes = {
  controlleft: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.LeftControl */ .Q2Q.LeftControl,
  controlright: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.RightControl */ .Q2Q.RightControl,
  altleft: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.LeftAlt */ .Q2Q.LeftAlt,
  altright: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.RightAlt */ .Q2Q.RightAlt,
  shiftleft: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.LeftShift */ .Q2Q.LeftShift,
  shiftright: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.RightShift */ .Q2Q.RightShift,
  metaleft: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.LeftGUI */ .Q2Q.LeftGUI,
  metaright: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.RightGUI */ .Q2Q.RightGUI
};
var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({
    capture: {
      cursor: "pointer",
      "&:hover": {
        borderColor: theme.palette.primary.main
      },
      "&:focus": {
        borderColor: theme.palette.action.active
      }
    }
  });
});

function renderKey(selector, modifiers) {
  var flags = ["ctrl", "shift", "alt", "cmd", "right ctrl", "right shift", "right alt", "right cmd"];
  var values = [];
  flags.forEach(function (flag, i) {
    if (modifiers & 1 << i) {
      values.push(flag);
    }
  });
  values.push(reverseSelectors[selector]);
  var value = values.filter(function (v) {
    return !!v;
  }).join(" + ");
  return value;
}

function DashboardHIDKeyboard(props) {
  var service = props.service;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      selector = _useState[0],
      setSelector = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.None */ .Q2Q.None),
      modifiers = _useState2[0],
      setModifiers = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      received = _useState3[0],
      setReceived = _useState3[1];

  var classes = useStyles();
  var inputButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var handleKeyDown = function handleKeyDown(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    var key = ev.key,
        code = ev.code;
    var newSelector = selectors[code.toLowerCase()] || selectors[key.toLowerCase()] || 0;
    var newModifiers = modifiers;
    var mcode = modifierCodes[code.toLowerCase()];

    if (mcode) {
      if (newModifiers & mcode) newModifiers &= ~mcode;else newModifiers |= mcode;
    }

    console.log({
      key: key,
      code: code,
      newModifiers: newModifiers.toString(16),
      newSelector: newSelector.toString(16)
    });
    if (newSelector) setSelector(newSelector);
    setModifiers(newModifiers);
  };

  var handleKeyDownReceived = function handleKeyDownReceived(ev) {
    var code = ev.code;
    setReceived([].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(received), [code.toLocaleLowerCase()]));
  };

  var handleKeyUp = function handleKeyUp(ev) {
    ev.stopPropagation();
    ev.preventDefault();
  };

  var handleClear = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              inputButtonRef.current.value = "";
              setSelector(0);
              setModifiers(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.None */ .Q2Q.None);
              _context.next = 5;
              return service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardCmd.Clear */ .Fnq.Clear);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClear() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClick = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var unpacked, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setReceived([]);
              _context2.next = 3;
              return (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__/* .delay */ .gw)(100);

            case 3:
              unpacked = [[[selector, modifiers, _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardAction.Press */ .gBd.Press]]];
              data = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdpack */ .AV)("r: u16 u8 u8", unpacked);
              _context2.next = 7;
              return service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardCmd.Key */ .Fnq.Key, data);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleClick() {
      return _ref2.apply(this, arguments);
    };
  }();

  var value = renderKey(selector, modifiers);
  var disabled = !selector;
  var clearDisabled = !selector && !modifiers;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("pre", {
    className: classes.capture,
    tabIndex: 0,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp
  }, value || "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    variant: "caption"
  }, "focus and type your key combo (not all keys supported)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    ref: inputButtonRef,
    onFocus: handleClick,
    onKeyDown: handleKeyDownReceived,
    disabled: disabled,
    placeholder: "focus to send",
    type: "text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "clear keys",
    disabled: clearDisabled,
    onClick: handleClear,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, null)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    variant: "caption",
    component: "pre"
  }, "received: ", received.join(" + "))));
}

/***/ }),

/***/ 81888:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useMounted; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

function useMounted() {
  var mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []);
  return function () {
    return mounted.current;
  };
}

/***/ })

}]);
//# sourceMappingURL=5969-88191bab39c9ca95ea4e.js.map