(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5969,8590],{

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

/***/ 86481:
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
  d: "M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"
}), 'Keyboard');

exports.Z = _default;

/***/ }),

/***/ 25969:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardHIDKeyboard; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80838);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73512);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91635);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82613);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58590);
/* harmony import */ var _ui_KeyboardKeyInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82860);
/* harmony import */ var _material_ui_icons_Keyboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86481);










function DashboardHIDKeyboard(props) {
  var service = props.service;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      selector = _useState[0],
      setSelector = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.None */ .Q2Q.None),
      modifiers = _useState2[0],
      setModifiers = _useState2[1];

  var handleKeyChange = function handleKeyChange(newSelector, newModifiers) {
    setSelector(newSelector);
    setModifiers(newModifiers);
  };

  var handleClear = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setSelector(0);
              setModifiers(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.None */ .Q2Q.None);
              _context.next = 4;
              return service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardCmd.Clear */ .Fnq.Clear);

            case 4:
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
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var unpacked, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              unpacked = [[[selector, modifiers, _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardAction.Press */ .gBd.Press]]];
              data = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdpack */ .AV)("r: u16 u8 u8", unpacked);
              _context2.next = 4;
              return service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardCmd.Key */ .Fnq.Key, data);

            case 4:
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

  var disabled = !selector && !modifiers;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_KeyboardKeyInput__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    selector: selector,
    modifiers: modifiers,
    onChange: handleKeyChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "send keys",
    disabled: disabled,
    onClick: handleClick,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Keyboard__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "clear keys",
    disabled: disabled,
    onClick: handleClear,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null)
  })));
}

/***/ }),

/***/ 82860:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": function() { return /* binding */ renderKey; },
/* harmony export */   "Z": function() { return /* binding */ KeyboardKeyInput; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70274);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73512);
/* harmony import */ var react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81751);
/* harmony import */ var react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DarkModeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91350);






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
  controlleft: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftControl */ .Q2Q.LeftControl,
  altleft: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftAlt */ .Q2Q.LeftAlt,
  shiftleft: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftShift */ .Q2Q.LeftShift,
  metaleft: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftGUI */ .Q2Q.LeftGUI,
  controlright: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.RightControl */ .Q2Q.RightControl,
  altright: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.RightAlt */ .Q2Q.RightAlt,
  shiftright: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.RightShift */ .Q2Q.RightShift,
  metaright: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.RightGUI */ .Q2Q.RightGUI
};
var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
    capture: {
      cursor: "pointer",
      "&:hover": {
        borderColor: theme.palette.primary.main
      },
      "&:focus": {
        borderColor: theme.palette.action.active
      }
    },
    darkKeyboard: {
      backgroundColor: "#333 !important",
      borderColor: "#777 !important",
      color: "white !important",
      "& .hg-button": {
        background: "rgba(0, 0, 0, 0.5) !important",
        color: "white"
      },
      "& .hg-button.buttonSelected": {
        background: theme.palette.primary.dark + " !important",
        color: "white !important"
      }
    },
    keyboard: {
      "& .buttonSelected": {
        background: theme.palette.primary.dark + " !important",
        color: "white !important"
      }
    }
  });
});
function renderKey(selector, modifiers) {
  var flags = ["controlleft", "shiftleft", "altleft", "metaleft", "controlright", "shiftright", "altright", "metaright"];
  var values = [];
  flags.forEach(function (flag, i) {
    if (modifiers & 1 << i) {
      values.push("{" + flag + "}");
    }
  });
  var sel = reverseSelectors[selector];
  if (sel !== undefined) values.push(sel.length > 1 ? "{" + sel + "}" : sel);
  var value = values.filter(function (v) {
    return !!v;
  }).join(" ");
  return value;
}
function KeyboardKeyInput(props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var _keyboardRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var selector = props.selector,
      modifiers = props.modifiers,
      onChange = props.onChange;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_DarkModeContext__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z),
      darkMode = _useContext.darkMode;

  var classes = useStyles();
  var theme = "hg-theme-default hg-layout-default " + (darkMode === "dark" ? classes.darkKeyboard : classes.keyboard);
  var layout = {
    default: ["{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}", "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}", "{tab} q w e r t y u i o p [ ] \\", "{capslock} a s d f g h j k l ; ' {enter}", "{shiftleft} z x c v b n m , . / {shiftright}", "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}"]
  };
  var display = {
    "{escape}": "esc ⎋",
    "{tab}": "tab ⇥",
    "{backspace}": "backspace ⌫",
    "{enter}": "enter ↵",
    "{capslock}": "caps lock ⇪",
    "{shiftleft}": "shift ⇧",
    "{shiftright}": "shift ⇧",
    "{controlleft}": "ctrl ⌃",
    "{controlright}": "ctrl ⌃",
    "{altleft}": "alt ⌥",
    "{altright}": "alt ⌥",
    "{metaleft}": "cmd ⌘",
    "{metaright}": "cmd ⌘"
  };

  var handleKeyboardKeyPress = function handleKeyboardKeyPress(code) {
    code = code.toLowerCase().replace(/[{}]/g, "");
    var newSelector = selector;
    var newModifiers = modifiers;
    var msel = selectors[code];
    var mcode = modifierCodes[code];

    if (msel) {
      if (msel === selector) newSelector = undefined;else newSelector = msel;
    } else {
      if (mcode) {
        if (newModifiers & mcode) newModifiers &= ~mcode;else newModifiers |= mcode;
      }
    }

    onChange(newSelector, newModifiers);
  }; // todo: render value to simple-keyboard selectors


  var value = renderKey(selector, modifiers);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _keyboardRef$current;

    (_keyboardRef$current = _keyboardRef.current) === null || _keyboardRef$current === void 0 ? void 0 : _keyboardRef$current.addButtonTheme(value, "buttonSelected");
    return function () {
      var _keyboardRef$current2;

      return (_keyboardRef$current2 = _keyboardRef.current) === null || _keyboardRef$current2 === void 0 ? void 0 : _keyboardRef$current2.removeButtonTheme(value, "buttonSelected");
    };
  }, [value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2___default()), {
    keyboardRef: function keyboardRef(r) {
      return _keyboardRef.current = r;
    },
    onKeyPress: handleKeyboardKeyPress,
    layout: layout,
    theme: theme,
    display: display,
    mergeDisplay: true
  });
}

/***/ })

}]);
//# sourceMappingURL=5969-2b15af6354fbdfc5c1c2.js.map