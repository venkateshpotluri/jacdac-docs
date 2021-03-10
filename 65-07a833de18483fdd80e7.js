(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "HT1B":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12l-4-3.2V14H6V6h8v3.2L18 6v8z"
}), 'VoiceChat');

exports.default = _default;

/***/ }),

/***/ "QRI8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardSpeechSynthesis; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HaE+");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZfHV");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tRbT");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("r9w1");
/* harmony import */ var _material_ui_icons_VoiceChat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("HT1B");
/* harmony import */ var _material_ui_icons_VoiceChat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VoiceChat__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("mv/Z");
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("BsyY");
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("W1g9");









function DashboardSpeechSynthesis(props) {
  var service = props.service;
  var enabled = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* SpeechSynthesisReg */ "Ne"].Enabled);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("jacdac"),
      text = _useState[0],
      setText = _useState[1];

  var textId = Object(react_use_id_hook__WEBPACK_IMPORTED_MODULE_9__[/* useId */ "b"])();

  var handleChange = function handleChange(ev) {
    var newValue = ev.target.value;
    setText(newValue);
  };

  var handleSpeak = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("speak " + text);

              if (enabled.boolValue) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return enabled.sendSetAsync(Object(_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_8__[/* jdpack */ "a"])("u8", [true]), true);

            case 4:
              _context.next = 6;
              return service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* SpeechSynthesisCmd */ "Me"].Speak, Object(_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_8__[/* jdpack */ "a"])("s", [text]));

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    id: textId,
    spellCheck: false,
    value: text,
    label: "speech synthesis",
    helperText: "Enter text to speak out",
    onChange: handleChange,
    type: "text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    disabled: !text,
    title: "speak text",
    onClick: handleSpeak,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_VoiceChat__WEBPACK_IMPORTED_MODULE_6___default.a, null)
  })));
}

/***/ })

}]);
//# sourceMappingURL=65-07a833de18483fdd80e7.js.map