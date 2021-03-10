(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "7Zf3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardMatrixKeypad; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dYIP");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7/Hy");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Lml+");
/* harmony import */ var _hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("asyI");
/* harmony import */ var _hooks_useFireKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("APA9");
/* harmony import */ var _hooks_useKeyboardNavigationProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("DbiO");
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("aVfY");
/* harmony import */ var _widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("soIx");










function DashboardMatrixKeypad(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var widgetRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var pressedRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* MatrixKeypadReg */ "Zb"].Pressed);

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(pressedRegister),
      pressed = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* MatrixKeypadReg */ "Zb"].Labels)),
      labels = _useRegisterUnpackedV2[0];

  var _useRegisterUnpackedV3 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* MatrixKeypadReg */ "Zb"].Rows)),
      rows = _useRegisterUnpackedV3[0];

  var _useRegisterUnpackedV4 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* MatrixKeypadReg */ "Zb"].Columns)),
      columns = _useRegisterUnpackedV4[0];

  var host = Object(_hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active,
      textProps = _useWidgetTheme.textProps;

  var widgetSize = Object(_widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(variant, services.length); // no data about layout

  if (rows === undefined || columns === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null);
  var clickeable = !!host; // compute size

  var pw = 8;
  var ph = 8;
  var ps = 0.5;
  var pr = 1;
  var m = 2;
  var w = columns * pw + (columns + 1) * m;
  var h = rows * ph + (rows + 1) * m;

  var handleButtonUp = function handleButtonUp(index) {
    return function () {
      host.up(index);
      pressedRegister.refresh();
    };
  };

  var handleButtonDown = function handleButtonDown(index) {
    return function () {
      host.down(index);
      pressedRegister.refresh();
    };
  }; // add leds


  var render = function render() {
    var ledEls = [];
    var ledProps = {
      className: clickeable ? "clickeable" : undefined,
      role: clickeable ? "button" : "",
      tabIndex: clickeable ? 0 : undefined
    };
    var y = m;

    for (var row = 0; row < rows; row++) {
      var x = m;

      var _loop = function _loop(col) {
        var _labels$index;

        var index = row * columns + col;
        var on = (pressed === null || pressed === void 0 ? void 0 : pressed.findIndex(function (p) {
          return p[0] === index;
        })) > -1;
        var label = labels === null || labels === void 0 ? void 0 : (_labels$index = labels[index]) === null || _labels$index === void 0 ? void 0 : _labels$index[0];
        var handleUp = clickeable ? handleButtonUp(index) : undefined;
        var handleDown = clickeable ? handleButtonDown(index) : undefined;
        var fireUp = Object(_hooks_useFireKey__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(handleUp);
        var fireDown = Object(_hooks_useFireKey__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(handleDown);
        ledEls.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", Object.assign({
          key: "l" + row + "-" + col,
          x: x,
          y: y,
          width: pw,
          height: ph,
          rx: pr,
          ry: pr,
          fill: on ? active : controlBackground,
          stroke: "none",
          strokeWidth: ps
        }, ledProps, {
          "aria-label": label || "key " + row + "," + col,
          onKeyDown: fireDown,
          onKeyUp: fireUp,
          onPointerDown: handleDown,
          onPointerUp: handleUp
        })));

        if (label) {
          ledEls.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", Object.assign({
            key: "t" + row + "-" + col,
            fontSize: ph * 2 / 3
          }, textProps, {
            x: x + pw / 2,
            y: y + ph / 2
          }), label));
        }

        x += pw + m;
      };

      for (var col = 0; col < columns; col++) {
        _loop(col);
      }

      y += ph + m;
    }

    return {
      ledEls: ledEls
    };
  };

  var _render = render(),
      ledEls = _render.ledEls;

  var navProps = Object(_hooks_useKeyboardNavigationProps__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(widgetRef.current);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    width: w,
    height: h,
    size: widgetSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: 0,
    y: 0,
    width: w,
    height: h,
    rx: pr,
    ry: pr,
    fill: background
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", Object.assign({
    ref: widgetRef
  }, navProps), ledEls));
}

/***/ }),

/***/ "DbiO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useKeyboardNavigationProps; });

// EXTERNAL MODULE: ./src/components/hooks/useFireKey.ts
var useFireKey = __webpack_require__("APA9");

// CONCATENATED MODULE: ./src/components/hooks/useArrowKeys.ts

var LEFT_KEY = 37;
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;
function useArrowKeys(options) {
  var _handlers;

  var onLeft = options.onLeft,
      onUp = options.onUp,
      onRight = options.onRight,
      onDown = options.onDown,
      symmetric = options.symmetric;
  if (!onLeft && !onUp && !onRight && !onDown) return undefined;
  var handlers = (_handlers = {}, _handlers[LEFT_KEY] = onLeft, _handlers[RIGHT_KEY] = onRight, _handlers[UP_KEY] = onUp || symmetric && onRight, _handlers[DOWN_KEY] = onDown || symmetric && onLeft, _handlers);
  return function (e) {
    var charCode = Object(useFireKey["b" /* keyCodeFromEvent */])(e);
    var handler = handlers[charCode];

    if (handler) {
      e.preventDefault();
      handler();
    }
  };
}
// CONCATENATED MODULE: ./src/components/hooks/useKeyboardNavigation.ts
function useKeyboardNavigation(parentRef) {
  var query = '[tabindex="0"]';

  var onMove = function onMove(offset) {
    return function () {
      console.log('keyboard move', {
        offset: offset
      });
      var focusable = Array.from((parentRef === null || parentRef === void 0 ? void 0 : parentRef.querySelectorAll(query)) || []);

      if (focusable.length) {
        var me = focusable.findIndex(function (f) {
          return f === document.activeElement;
        });
        var next = (me + offset + focusable.length) % focusable.length;
        focusable[next].focus();
      }
    };
  };

  return onMove;
}
// CONCATENATED MODULE: ./src/components/hooks/useKeyboardNavigationProps.ts


function useKeyboardNavigationProps(parentRef, vertical) {
  var onMove = useKeyboardNavigation(parentRef);
  var onKeyDown = useArrowKeys({
    onLeft: !vertical && onMove(-1),
    onRight: !vertical && onMove(1),
    onDown: vertical && onMove(1),
    onUp: vertical && onMove(-1)
  });
  return {
    onKeyDown: parentRef && onKeyDown
  };
}

/***/ })

}]);
//# sourceMappingURL=67-4f61e00ba941e0ed74bb.js.map