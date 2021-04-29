(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7675],{

/***/ 27675:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DashboardJoystick; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(49013);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/joystickserver.ts
var joystickserver = __webpack_require__(26708);
// EXTERNAL MODULE: ./src/components/hooks/useAnimationFrame.ts
var useAnimationFrame = __webpack_require__(17368);
// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__(48059);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(60650);
;// CONCATENATED MODULE: ./src/components/widgets/JoystickWidget.tsx







function decay(value, rate, precision) {
  var nv = value * rate;
  if (Math.abs(nv) < precision) nv = 0;
  return nv;
}

function JoystickWidget(props) {
  var color = props.color,
      x = props.x,
      y = props.y,
      buttons = props.buttons,
      onUpdate = props.onUpdate,
      hostValues = props.hostValues;

  var _useWidgetTheme = (0,useWidgetTheme/* default */.Z)(color),
      active = _useWidgetTheme.active,
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground;

  var dragSurfaceRef = (0,react.useRef)();

  var _useState = (0,react.useState)(false),
      grabbing = _useState[0],
      setGrabbing = _useState[1];

  var w = 40;
  var w2 = w >> 1;
  var cx = w2;
  var cy = w2;
  var rp = 2;
  var rc = 6;
  var rj = 10;
  var pw = 12;
  var ph = 8;
  var jx = cx + (x || 0) * rj;
  var jy = cy + (y || 0) * rj;
  var jw = 1;

  var updateJoystickDrag = function updateJoystickDrag(x, y) {
    var bounds = dragSurfaceRef.current.getBoundingClientRect();
    var dx = (x - bounds.left) * (w / bounds.width) - w2;
    var dy = (y - bounds.top) * (w / bounds.height) - w2;
    var angle = Math.atan2(dy, dx);
    var distance = Math.min(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)), rj) / rj;
    var newx = distance * Math.cos(angle);
    var newy = distance * Math.sin(angle);

    var _hostValues = hostValues(),
        buttons = _hostValues[0];

    onUpdate(buttons, newx, newy);
  };

  var handlePointerDown = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(ev) {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ev.preventDefault();
              setGrabbing(true);
              updateJoystickDrag(ev.clientX, ev.clientY);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handlePointerDown(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handlePointerUp = function handlePointerUp(ev) {
    ev.preventDefault();
    setGrabbing(false);
  };

  var handlePointerMove = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(ev) {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ev.preventDefault();
              if (grabbing) updateJoystickDrag(ev.clientX, ev.clientY);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handlePointerMove(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,useAnimationFrame/* default */.Z)(function () {
    if (!hostValues || grabbing) return false; // let use do its thing

    var _hostValues2 = hostValues(),
        buttons = _hostValues2[0],
        ax = _hostValues2[1],
        ay = _hostValues2[2];

    var nx = decay(ax, 0.9, 16);
    var ny = decay(ay, 0.9, 16); // async

    onUpdate(buttons, nx, ny);
    return nx !== 0 || ny !== 0;
  }, [hostValues, grabbing]);
  var handleStyle = {
    cursor: grabbing ? "grabbing" : "grab"
  };
  return /*#__PURE__*/react.createElement(SvgWidget/* default */.Z, {
    width: w,
    height: w
  }, /*#__PURE__*/react.createElement("circle", {
    ref: dragSurfaceRef,
    className: "joystick-background",
    cx: cx,
    cy: cy,
    r: "16",
    fill: background
  }), /*#__PURE__*/react.createElement("rect", {
    className: "dpad-up",
    x: "16",
    y: "6",
    width: ph,
    height: pw,
    rx: rp,
    fill: controlBackground
  }), /*#__PURE__*/react.createElement("rect", {
    className: "dpad-down",
    x: "16",
    y: "22",
    width: ph,
    height: pw,
    rx: rp,
    fill: controlBackground
  }), /*#__PURE__*/react.createElement("rect", {
    className: "dpad-right",
    x: "22",
    y: "16",
    width: pw,
    height: ph,
    ry: rp,
    fill: controlBackground
  }), /*#__PURE__*/react.createElement("rect", {
    className: "dpad-left",
    x: "6",
    y: "16",
    width: pw,
    height: ph,
    ry: rp,
    fill: controlBackground
  }), /*#__PURE__*/react.createElement("circle", {
    className: "dpad-center",
    cx: cx,
    cy: cy,
    r: rc,
    fill: controlBackground
  }), hostValues ? /*#__PURE__*/react.createElement("circle", {
    className: "joystick-handle",
    cx: jx,
    cy: jy,
    r: rc,
    fill: background,
    stroke: active,
    strokeWidth: jw,
    tabIndex: 0,
    role: "button",
    "aria-label": "joystick handle",
    "arial-live": "polite",
    onPointerMove: handlePointerMove,
    onPointerDown: handlePointerDown,
    onPointerUp: handlePointerUp,
    onPointerLeave: handlePointerUp,
    style: handleStyle
  }) : /*#__PURE__*/react.createElement("circle", {
    className: "joystick-handle",
    cx: jx,
    cy: jy,
    r: rc,
    fill: background,
    stroke: active,
    strokeWidth: jw,
    "aria-label": "joystick handle"
  }));
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/components/hooks/useSvgButtonProps.ts
var useSvgButtonProps = __webpack_require__(30833);
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2285);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardJoystick.tsx


var _buttonLabels;













function Thumb(props) {
  var service = props.service;
  var register = service.register(constants/* JoystickReg.Direction */.ztd.Direction);

  var _useRegisterUnpackedV = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(register, props),
      buttons = _useRegisterUnpackedV[0],
      x = _useRegisterUnpackedV[1],
      y = _useRegisterUnpackedV[2];

  var server = (0,useServiceServer/* default */.Z)(service);
  var color = server ? "secondary" : "primary";

  var values = function values() {
    return server.reading.values();
  };

  var onUpdate = function onUpdate(buttons, newx, newy) {
    server.reading.setValues([buttons, newx, newy]);
    register.refresh();
  };

  return /*#__PURE__*/react.createElement(JoystickWidget, {
    x: x,
    y: y,
    buttons: buttons,
    color: color,
    onUpdate: onUpdate,
    hostValues: server && values
  });
}

var buttonLabels = (_buttonLabels = {}, _buttonLabels[constants/* JoystickButtons.Left */.xC.Left] = "\u25C4", _buttonLabels[constants/* JoystickButtons.Up */.xC.Up] = "\u25B2", _buttonLabels[constants/* JoystickButtons.Down */.xC.Down] = "\u25BC", _buttonLabels[constants/* JoystickButtons.Right */.xC.Right] = "\u25BA", _buttonLabels);

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

  var _useWidgetTheme = (0,useWidgetTheme/* default */.Z)(color),
      textProps = _useWidgetTheme.textProps,
      active = _useWidgetTheme.active,
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground;

  var checked = (pressure || 0) > 0;
  var title = constants/* JoystickButtons */.xC[button];
  var label = buttonLabels[button] || title[0];

  var handleDown = function handleDown() {
    server === null || server === void 0 ? void 0 : server.down(button); //, 0.7)

    onRefresh();
  };

  var handleUp = function handleUp() {
    server === null || server === void 0 ? void 0 : server.up(button);
    onRefresh();
  };

  var buttonProps = (0,useSvgButtonProps/* default */.Z)(title, handleDown, handleUp);
  return /*#__PURE__*/react.createElement("g", {
    transform: "translate(" + cx + "," + cy + ")",
    "aria-label": "button " + title + " " + (checked ? "down" : "up")
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 0,
    cy: 0,
    r: ro,
    fill: background
  }), /*#__PURE__*/react.createElement("circle", Object.assign({
    cx: 0,
    cy: 0,
    r: ri,
    fill: checked ? active : controlBackground
  }, buttonProps), /*#__PURE__*/react.createElement("title", null, title)), /*#__PURE__*/react.createElement("text", Object.assign({
    cx: 0,
    cy: 0,
    fontSize: ri
  }, textProps), label));
}

function Gamepad(props) {
  var service = props.service;

  var _useRegisterUnpackedV2 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(service.register(constants/* JoystickReg.ButtonsAvailable */.ztd.ButtonsAvailable), props),
      buttonsAvailable = _useRegisterUnpackedV2[0];

  var directionRegister = service.register(constants/* JoystickReg.Direction */.ztd.Direction);

  var _useRegisterUnpackedV3 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(directionRegister, props),
      buttons = _useRegisterUnpackedV3[0],
      x = _useRegisterUnpackedV3[1],
      y = _useRegisterUnpackedV3[2];

  var server = (0,useServiceServer/* default */.Z)(service);
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme2 = (0,useWidgetTheme/* default */.Z)(color),
      background = _useWidgetTheme2.background; // buttonsAvailable should be defined by now


  var w = 256;
  var h = 128;
  var cw = w / 12;
  var ch = h / 4;
  var ro = cw - 2;
  var ri = ro - 4;
  var sro = ro - 10;
  var sri = sro - 2;
  var scy = sro;
  var pos = (0,react.useMemo)(function () {
    return [{
      id: constants/* JoystickButtons.Left */.xC.Left,
      cx: cw * 1.5,
      cy: 2 * ch,
      small: false
    }, {
      id: constants/* JoystickButtons.Up */.xC.Up,
      cx: cw * 3,
      cy: ch,
      small: false
    }, {
      id: constants/* JoystickButtons.Right */.xC.Right,
      cx: cw * 4.5,
      cy: 2 * ch,
      small: false
    }, {
      id: constants/* JoystickButtons.Down */.xC.Down,
      cx: cw * 3,
      cy: 3 * ch,
      small: false
    }, {
      id: constants/* JoystickButtons.A */.xC.A,
      cx: cw * 10.5,
      cy: ch * 1.25,
      small: false
    }, {
      id: constants/* JoystickButtons.B */.xC.B,
      cx: cw * 9.5,
      cy: ch * 2.75,
      small: false
    }, {
      id: constants/* JoystickButtons.Menu */.xC.Menu,
      cx: cw * 7,
      cy: scy,
      small: true
    }, {
      id: constants/* JoystickButtons.Select */.xC.Select,
      cx: cw * 6,
      cy: scy,
      small: true
    }, {
      id: constants/* JoystickButtons.Exit */.xC.Exit,
      cx: cw * 8,
      cy: scy,
      small: true
    }, {
      id: constants/* JoystickButtons.Reset */.xC.Reset,
      cx: cw * 9,
      cy: scy,
      small: true
    }].filter(function (p) {
      return !!(p.id & buttonsAvailable);
    });
  }, [buttonsAvailable]);

  var handleRefresh = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return directionRegister.refresh();

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
  return /*#__PURE__*/react.createElement(SvgWidget/* default */.Z, {
    width: w,
    height: h
  }, /*#__PURE__*/react.createElement("circle", {
    cx: cw * 3,
    cy: 2 * ch,
    r: 2.6 * cw,
    fill: "none",
    stroke: background,
    strokeWidth: 4
  }), /*#__PURE__*/react.createElement("rect", {
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
  }), pos.map(function (_ref2) {
    var id = _ref2.id,
        cx = _ref2.cx,
        cy = _ref2.cy,
        small = _ref2.small;
    return /*#__PURE__*/react.createElement(ArcadeButton, {
      key: id,
      cx: cx,
      cy: cy,
      ro: small ? sro : ro,
      ri: small ? sri : ri,
      button: id,
      server: server,
      onRefresh: handleRefresh,
      pressure: buttons & id ? 1 : 0,
      color: color
    });
  }));
}

function DashboardJoystick(props) {
  var service = props.service;

  var _useRegisterUnpackedV4 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(service.register(constants/* JoystickReg.Variant */.ztd.Variant), props),
      variant = _useRegisterUnpackedV4[0];

  var _useRegisterUnpackedV5 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(service.register(constants/* JoystickReg.ButtonsAvailable */.ztd.ButtonsAvailable), props),
      buttonsAvailable = _useRegisterUnpackedV5[0]; // need button info


  if (buttonsAvailable === undefined) return /*#__PURE__*/react.createElement(LoadingProgress/* default */.Z, null); // if variant is not specific, infer from buttons

  if (variant === undefined) {
    if (buttonsAvailable & joystickserver/* JOYSTICK_GAMEPAD_EXTRA_BUTTONS */.Jx) variant = constants/* JoystickVariant.Gamepad */.BUi.Gamepad;else if (!buttonsAvailable || buttonsAvailable === constants/* JoystickButtons.A */.xC.A) variant = constants/* JoystickVariant.Thumb */.BUi.Thumb;
  } // render in 2 modes


  return variant == constants/* JoystickVariant.Thumb */.BUi.Thumb ? /*#__PURE__*/react.createElement(Thumb, props) : /*#__PURE__*/react.createElement(Gamepad, props);
}

/***/ })

}]);
//# sourceMappingURL=7675-32b4d04af4da4a047f83.js.map