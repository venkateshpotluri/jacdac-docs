(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "35Ra":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardArcadeGamepad; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HaE+");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dYIP");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7/Hy");
/* harmony import */ var _hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("asyI");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Lml+");
/* harmony import */ var _hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("jwKE");
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("aVfY");


var _buttonLabels;










var buttonLabels = (_buttonLabels = {}, _buttonLabels[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* ArcadeGamepadButton */ "g"].Left] = "\u25C0", _buttonLabels[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* ArcadeGamepadButton */ "g"].Up] = "\u25B2", _buttonLabels[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* ArcadeGamepadButton */ "g"].Down] = "\u25BC", _buttonLabels[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* ArcadeGamepadButton */ "g"].Right] = "\u25B6", _buttonLabels);

function ArcadeButton(props) {
  var cx = props.cx,
      cy = props.cy,
      ro = props.ro,
      color = props.color,
      pressure = props.pressure,
      ri = props.ri,
      button = props.button,
      host = props.host,
      onRefresh = props.onRefresh;

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(color),
      textProps = _useWidgetTheme.textProps,
      active = _useWidgetTheme.active,
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground;

  var checked = (pressure || 0) > 0;
  var title = _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* ArcadeGamepadButton */ "g"][button];
  var label = buttonLabels[button] || title[0];

  var handleDown = function handleDown() {
    host === null || host === void 0 ? void 0 : host.down(button, 0.7);
    onRefresh();
  };

  var handleUp = function handleUp() {
    host === null || host === void 0 ? void 0 : host.up(button);
    onRefresh();
  };

  var buttonProps = Object(_hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(title, handleDown, handleUp);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", {
    transform: "translate(" + cx + "," + cy + ")",
    "aria-label": "button " + title + " " + (checked ? "down" : "up")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("circle", {
    cx: 0,
    cy: 0,
    r: ro,
    fill: background
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("circle", Object.assign({
    cx: 0,
    cy: 0,
    r: ri,
    fill: checked ? active : controlBackground
  }, buttonProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("text", Object.assign({
    cx: 0,
    cy: 0,
    fontSize: ri
  }, textProps), label));
}

function DashboardArcadeGamepad(props) {
  var _pos;

  var service = props.service,
      services = props.services,
      variant = props.variant;

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* ArcadeGamepadReg */ "h"].AvailableButtons)),
      available = _useRegisterUnpackedV[0];

  var pressedRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* ArcadeGamepadReg */ "h"].Buttons);

  var _useRegisterUnpackedV2 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__[/* useRegisterUnpackedValue */ "e"])(pressedRegister),
      pressed = _useRegisterUnpackedV2[0];

  var host = Object(_hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme2 = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(color),
      background = _useWidgetTheme2.background;

  if (!(available !== null && available !== void 0 && available.length)) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null);
  var w = 256;
  var h = 128;
  var cw = w / 12;
  var ch = h / 4;
  var ro = cw - 2;
  var ri = ro - 4;
  var sro = ro - 10;
  var sri = sro - 2;
  var scy = sro;
  var pos = (_pos = {}, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* ArcadeGamepadButton */ "g"].Left] = {
    cx: cw * 1.5,
    cy: 2 * ch,
    small: false
  }, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* ArcadeGamepadButton */ "g"].Up] = {
    cx: cw * 3,
    cy: ch,
    small: false
  }, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* ArcadeGamepadButton */ "g"].Right] = {
    cx: cw * 4.5,
    cy: 2 * ch,
    small: false
  }, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* ArcadeGamepadButton */ "g"].Down] = {
    cx: cw * 3,
    cy: 3 * ch,
    small: false
  }, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* ArcadeGamepadButton */ "g"].A] = {
    cx: cw * 10.5,
    cy: ch * 1.25,
    small: false
  }, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* ArcadeGamepadButton */ "g"].B] = {
    cx: cw * 9.5,
    cy: ch * 2.75,
    small: false
  }, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* ArcadeGamepadButton */ "g"].Menu] = {
    cx: cw * 7,
    cy: scy,
    small: true
  }, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* ArcadeGamepadButton */ "g"].Select] = {
    cx: cw * 6,
    cy: scy,
    small: true
  }, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* ArcadeGamepadButton */ "g"].Exit] = {
    cx: cw * 8,
    cy: scy,
    small: true
  }, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* ArcadeGamepadButton */ "g"].Reset] = {
    cx: cw * 9,
    cy: scy,
    small: true
  }, _pos);

  var handleRefresh = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return pressedRegister.refresh();

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleRefresh() {
      return _ref.apply(this, arguments);
    };
  }();

  var abx = cw * 8 + 1;
  var aby = ch * 3 + 4;
  var abr = cw / 2;
  var abw = cw * 5 - 6;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    width: w,
    height: h
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("circle", {
    cx: cw * 3,
    cy: 2 * ch,
    r: 2.6 * cw,
    fill: "none",
    stroke: background,
    strokeWidth: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("rect", {
    transform: "rotate(-66, " + abx + ", " + aby + ")",
    x: abx,
    y: aby,
    rx: abr,
    ry: abr,
    width: abw,
    height: cw * 2.2,
    fill: "none",
    stroke: background,
    strokeWidth: 4
  }), available.map(function (button) {
    return {
      button: button[0],
      pos: pos[button[0]]
    };
  }).map(function (_ref2) {
    var _pressed$find;

    var button = _ref2.button,
        pos = _ref2.pos;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ArcadeButton, {
      key: button,
      cx: pos.cx,
      cy: pos.cy,
      ro: pos.small ? sro : ro,
      ri: pos.small ? sri : ri,
      button: button,
      host: host,
      onRefresh: handleRefresh,
      pressure: (pressed === null || pressed === void 0 ? void 0 : (_pressed$find = pressed.find(function (p) {
        return p[0] === button;
      })) === null || _pressed$find === void 0 ? void 0 : _pressed$find[1]) || 0,
      color: color
    });
  }));
}

/***/ })

}]);
//# sourceMappingURL=109-826347770d4f4bd51987.js.map