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

/***/ 32525:
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
  d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
}), 'Send');

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
/* harmony export */   "default": function() { return /* binding */ DashboardBuzzer; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80453);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73512);
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32525);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91635);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82613);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79885);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(58590);










var selectors = {
  "a": 0x04,
  "b": 0x05,
  "c": 0x06,
  "d": 0x07,
  "e": 0x08,
  "f": 0x09,
  "g": 0x0a,
  "h": 0x0b,
  "i": 0x0c,
  "j": 0x0d,
  "k": 0x0e,
  "l": 0x0f,
  "m": 0x10,
  "n": 0x11,
  "o": 0x12,
  "p": 0x13,
  "q": 0x14,
  "r": 0x15,
  "s": 0x16,
  "t": 0x17,
  "u": 0x18,
  "v": 0x19,
  "w": 0x1a,
  "x": 0x1b,
  "y": 0x1c,
  "z": 0x1d,
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
  "enter": 0x28,
  "escape": 0x29,
  "backspace": 0x2a,
  "tab": 0x2b,
  " ": 0x2c,
  "-": 0x2d,
  "_": 0x2d,
  "=": 0x2e,
  "+": 0x2e // TODO entire list

};
var reverseSelectors = Object.keys(selectors).reduce(function (r, key) {
  r[selectors[key]] = key;
  return r;
}, {});
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
function DashboardBuzzer(props) {
  var service = props.service;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      selector = _useState[0],
      setSelector = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.None */ .Q2Q.None),
      modifiers = _useState2[0],
      setModifiers = _useState2[1];

  var classes = useStyles();
  console.log({
    selector: selector,
    modifiers: modifiers.toString(16)
  });

  var handleKeyDown = function handleKeyDown(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    var altKey = ev.altKey,
        ctrlKey = ev.ctrlKey,
        shiftKey = ev.shiftKey,
        metaKey = ev.metaKey,
        key = ev.key;
    console.log({
      key: key
    });
    var newSelector = selectors[key.toLowerCase()] || 0;
    var newModifiers = modifiers | (altKey && _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.LeftAlt */ .Q2Q.LeftAlt) | (metaKey && _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.LeftGUI */ .Q2Q.LeftGUI) | (ctrlKey && _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.LeftControl */ .Q2Q.LeftControl) | (shiftKey && _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.LeftShift */ .Q2Q.LeftShift);
    if (newSelector) setSelector(newSelector);
    setModifiers(newModifiers);
  };

  var handleKeyUp = function handleKeyUp(ev) {
    ev.stopPropagation();
    ev.preventDefault();
  };

  var handleClear = function handleClear() {
    setSelector(0);
    setModifiers(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.None */ .Q2Q.None);
  };

  var handleClick = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var unpacked, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              unpacked = [[[selector, modifiers, _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardAction.Press */ .gBd.Press]]];
              data = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdpack */ .AV)("r: u16 u8 u8", unpacked);
              _context.next = 4;
              return service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardCmd.Key */ .Fnq.Key, data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick() {
      return _ref.apply(this, arguments);
    };
  }();

  var values = [];
  if ((modifiers & _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.LeftAlt */ .Q2Q.LeftAlt) === _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.LeftAlt */ .Q2Q.LeftAlt) values.push("Alt");
  if ((modifiers & _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.LeftControl */ .Q2Q.LeftControl) === _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.LeftControl */ .Q2Q.LeftControl) values.push("Ctrl");
  if ((modifiers & _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.LeftGUI */ .Q2Q.LeftGUI) === _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.LeftGUI */ .Q2Q.LeftGUI) values.push("Cmd");
  if ((modifiers & _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.LeftShift */ .Q2Q.LeftShift) === _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.LeftShift */ .Q2Q.LeftShift) values.push("Shift");
  if ((modifiers & _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.RightAlt */ .Q2Q.RightAlt) === _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.RightAlt */ .Q2Q.RightAlt) values.push("Right Alt");
  if ((modifiers & _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.RightControl */ .Q2Q.RightControl) === _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.RightControl */ .Q2Q.RightControl) values.push("Right Ctrl");
  if ((modifiers & _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.RightGUI */ .Q2Q.RightGUI) === _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.RightGUI */ .Q2Q.RightGUI) values.push("Right Cmd");
  if ((modifiers & _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.RightShift */ .Q2Q.RightShift) === _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.RightShift */ .Q2Q.RightShift) values.push("Right Shift");
  values.push(reverseSelectors[selector]);
  var value = values.filter(function (v) {
    return !!v;
  }).join(" + ");
  var disabled = !selector;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("pre", {
    className: classes.capture,
    tabIndex: 0,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp
  }, value || "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    variant: "caption"
  }, "select this element and enter your key combo (not all keys supported)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    title: "clear keys",
    onClick: handleClear
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, null),
    disabled: disabled,
    onClick: handleClick,
    title: "send keys"
  })));
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
//# sourceMappingURL=5969-081549788d4a3ff55dd7.js.map