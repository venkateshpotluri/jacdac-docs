(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5830],{

/***/ 5830:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardArcadeGamepad; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89196);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48059);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49013);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60650);
/* harmony import */ var _hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30833);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2285);


var _buttonLabels;










var buttonLabels = (_buttonLabels = {}, _buttonLabels[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeGamepadButton.Left */ .PHW.Left] = "\u25C4", _buttonLabels[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeGamepadButton.Up */ .PHW.Up] = "\u25B2", _buttonLabels[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeGamepadButton.Down */ .PHW.Down] = "\u25BC", _buttonLabels[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeGamepadButton.Right */ .PHW.Right] = "\u25BA", _buttonLabels);

function ArcadeButton(props) {
  var cx = props.cx,
      cy = props.cy,
      ro = props.ro,
      color = props.color,
      pressure = props.pressure,
      ri = props.ri,
      button = props.button,
      server = props.server,
      onRefresh = props.onRefresh;

  var _useWidgetTheme = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(color),
      textProps = _useWidgetTheme.textProps,
      active = _useWidgetTheme.active,
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground;

  var checked = (pressure || 0) > 0;
  var title = _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeGamepadButton */ .PHW[button];
  var label = buttonLabels[button] || title[0];

  var handleDown = function handleDown() {
    server === null || server === void 0 ? void 0 : server.down(button, 0.7);
    onRefresh();
  };

  var handleUp = function handleUp() {
    server === null || server === void 0 ? void 0 : server.up(button);
    onRefresh();
  };

  var buttonProps = (0,_hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(title, handleDown, handleUp);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("g", {
    transform: "translate(" + cx + "," + cy + ")",
    "aria-label": "button " + title + " " + (checked ? "down" : "up")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("circle", {
    cx: 0,
    cy: 0,
    r: ro,
    fill: background
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("circle", Object.assign({
    cx: 0,
    cy: 0,
    r: ri,
    fill: checked ? active : controlBackground
  }, buttonProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("text", Object.assign({
    cx: 0,
    cy: 0,
    fontSize: ri
  }, textProps), label));
}

function DashboardArcadeGamepad(props) {
  var _pos;

  var service = props.service;

  var _useRegisterUnpackedV = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__/* .useRegisterUnpackedValue */ .Pf)(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeGamepadReg.AvailableButtons */ .WF2.AvailableButtons), props),
      available = _useRegisterUnpackedV[0];

  var pressedRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeGamepadReg.Buttons */ .WF2.Buttons);

  var _useRegisterUnpackedV2 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__/* .useRegisterUnpackedValue */ .Pf)(pressedRegister, props),
      pressed = _useRegisterUnpackedV2[0];

  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(service);
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme2 = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(color),
      background = _useWidgetTheme2.background;

  if (!(available !== null && available !== void 0 && available.length)) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, null);
  var w = 256;
  var h = 128;
  var cw = w / 12;
  var ch = h / 4;
  var ro = cw - 2;
  var ri = ro - 4;
  var sro = ro - 10;
  var sri = sro - 2;
  var scy = sro;
  var pos = (_pos = {}, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeGamepadButton.Left */ .PHW.Left] = {
    cx: cw * 1.5,
    cy: 2 * ch,
    small: false
  }, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeGamepadButton.Up */ .PHW.Up] = {
    cx: cw * 3,
    cy: ch,
    small: false
  }, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeGamepadButton.Right */ .PHW.Right] = {
    cx: cw * 4.5,
    cy: 2 * ch,
    small: false
  }, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeGamepadButton.Down */ .PHW.Down] = {
    cx: cw * 3,
    cy: 3 * ch,
    small: false
  }, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeGamepadButton.A */ .PHW.A] = {
    cx: cw * 10.5,
    cy: ch * 1.25,
    small: false
  }, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeGamepadButton.B */ .PHW.B] = {
    cx: cw * 9.5,
    cy: ch * 2.75,
    small: false
  }, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeGamepadButton.Menu */ .PHW.Menu] = {
    cx: cw * 7,
    cy: scy,
    small: true
  }, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeGamepadButton.Select */ .PHW.Select] = {
    cx: cw * 6,
    cy: scy,
    small: true
  }, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeGamepadButton.Exit */ .PHW.Exit] = {
    cx: cw * 8,
    cy: scy,
    small: true
  }, _pos[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeGamepadButton.Reset */ .PHW.Reset] = {
    cx: cw * 9,
    cy: scy,
    small: true
  }, _pos);

  var handleRefresh = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    width: w,
    height: h
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("circle", {
    cx: cw * 3,
    cy: 2 * ch,
    r: 2.6 * cw,
    fill: "none",
    stroke: background,
    strokeWidth: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("rect", {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ArcadeButton, {
      key: button,
      cx: pos.cx,
      cy: pos.cy,
      ro: pos.small ? sro : ro,
      ri: pos.small ? sri : ri,
      button: button,
      server: server,
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
//# sourceMappingURL=5830-7ef385b1aba33d6a1f49.js.map