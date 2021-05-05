(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3887],{

/***/ 83219:
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
  d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12l-4-3.2V14H6V6h8v3.2L18 6v8z"
}), 'VoiceChat');

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
  console.log({
    props: props,
    others: others
  });
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

/***/ 83887:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardSpeechSynthesis; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71815);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1059);
/* harmony import */ var _material_ui_icons_VoiceChat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83219);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82613);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91635);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19640);









function DashboardSpeechSynthesis(props) {
  var service = props.service;
  var enabled = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .SpeechSynthesisReg.Enabled */ .b3j.Enabled);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("jacdac"),
      text = _useState[0],
      setText = _useState[1];

  var textId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_5__/* .useId */ .Me)();

  var handleChange = function handleChange(ev) {
    var newValue = ev.target.value;
    setText(newValue);
  };

  var handleSpeak = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("speak " + text);

              if (enabled.boolValue) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return enabled.sendSetAsync((0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_4__/* .jdpack */ .AV)("u8", [true]), true);

            case 4:
              _context.next = 6;
              return service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .SpeechSynthesisCmd.Speak */ .AWi.Speak, (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_4__/* .jdpack */ .AV)("s", [text]));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSpeak() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    id: textId,
    spellCheck: false,
    value: text,
    label: "speech synthesis",
    helperText: "Enter text to speak out",
    onChange: handleChange,
    type: "text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    disabled: !text,
    title: "speak text",
    onClick: handleSpeak,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_VoiceChat__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null)
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
//# sourceMappingURL=3887-cf79804e0c4c81408ae7.js.map