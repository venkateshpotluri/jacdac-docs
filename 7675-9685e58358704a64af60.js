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

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(49013);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
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
    onUpdate(newx, newy);
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

    var _hostValues = hostValues(),
        ax = _hostValues[0],
        ay = _hostValues[1];

    var nx = decay(ax, 0.9, 16);
    var ny = decay(ay, 0.9, 16); // async

    onUpdate(nx, ny);
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
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardJoystick.tsx





function DashboardJoystick(props) {
  var service = props.service;
  var register = service.register(constants/* JoystickReg.Direction */.ztd.Direction);

  var _useRegisterUnpackedV = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(register, props),
      x = _useRegisterUnpackedV[0],
      y = _useRegisterUnpackedV[1];

  var server = (0,useServiceServer/* default */.Z)(service);
  var color = server ? "secondary" : "primary";

  var values = function values() {
    return server.reading.values();
  };

  var onUpdate = function onUpdate(newx, newy) {
    server.reading.setValues([newx, newy]);
    register.refresh();
  };

  return /*#__PURE__*/react.createElement(JoystickWidget, {
    x: x,
    y: y,
    color: color,
    onUpdate: onUpdate,
    hostValues: server && values
  });
}

/***/ })

}]);
//# sourceMappingURL=7675-9685e58358704a64af60.js.map