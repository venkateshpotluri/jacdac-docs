(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "3zc7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardTrafficLight; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HaE+");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dYIP");
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7/Hy");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Lml+");
/* harmony import */ var _hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("asyI");
/* harmony import */ var _widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("soIx");
/* harmony import */ var _hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("jwKE");
/* harmony import */ var _hooks_useKeyboardNavigationProps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("DbiO");











var m = 2;
var r = 8;
var ri = 7;
var w = 2 * r + 2 * m;
var h = 4 * w + 2 * m;
var cx = w / 2;
var sw = 2;

function TrafficLight(props) {
  var cx = props.cx,
      cy = props.cy,
      fill = props.fill,
      background = props.background,
      label = props.label,
      onDown = props.onDown;
  var buttonProps = Object(_hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(label, onDown);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r,
    fill: background,
    stroke: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("circle", Object.assign({
    cx: cx,
    cy: cy,
    r: ri,
    fill: fill,
    strokeWidth: sw
  }, buttonProps)));
}

function DashboardTrafficLight(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var widgetRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* TrafficLightReg */ "af"].Red)),
      red = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* TrafficLightReg */ "af"].Orange)),
      orange = _useRegisterUnpackedV2[0];

  var _useRegisterUnpackedV3 = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* TrafficLightReg */ "af"].Green)),
      green = _useRegisterUnpackedV3[0];

  var lightRegs = [_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* TrafficLightReg */ "af"].Red, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* TrafficLightReg */ "af"].Orange, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__[/* TrafficLightReg */ "af"].Green];
  var lights = [red, orange, green];
  var host = Object(_hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground;

  var widgetSize = Object(_widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(variant, services.length);
  var cy = 0;
  var names = ["red", "yellow", "green"];
  var colors = ["red", "orange", "green"];
  var navProps = Object(_hooks_useKeyboardNavigationProps__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(widgetRef.current);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    width: w,
    height: h,
    size: widgetSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", Object.assign({
    ref: widgetRef
  }, navProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("rect", {
    x: 0,
    y: 0,
    width: w,
    height: h,
    rx: m,
    fill: background
  }), lights.map(function (v, i) {
    cy += m + 2 * r;
    var fill = v ? colors[i] : controlBackground;

    var onDown = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var reg;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                reg = service.register(lightRegs[i]);
                _context.next = 3;
                return reg.sendSetBoolAsync(!v, true);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function onDown() {
        return _ref.apply(this, arguments);
      };
    }();

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TrafficLight, {
      key: i,
      cx: cx,
      cy: cy,
      background: background,
      fill: fill,
      onDown: onDown,
      label: names[i] + " " + (v ? "on" : "off")
    });
  })));
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
//# sourceMappingURL=62-35f19078fcca344321f1.js.map