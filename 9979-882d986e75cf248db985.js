(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9979],{

/***/ 79979:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardLEDMatrixDisplay; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89196);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48059);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var _hooks_useFireKey__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8966);
/* harmony import */ var _hooks_useKeyboardNavigationProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68786);
/* harmony import */ var _jacdac_ts_src_servers_ledmatrixserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41441);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2285);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49013);










function DashboardLEDMatrixDisplay(props) {
  var service = props.service;
  var widgetRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var ledsRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .LedMatrixReg.Leds */ .o$T.Leds);

  var _useRegisterUnpackedV = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(ledsRegister, props),
      leds = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .LedMatrixReg.Brightness */ .o$T.Brightness), props),
      _useRegisterUnpackedV3 = _useRegisterUnpackedV2[0],
      brightness = _useRegisterUnpackedV3 === void 0 ? 0 : _useRegisterUnpackedV3;

  var _useRegisterUnpackedV4 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .LedMatrixReg.Rows */ .o$T.Rows), props),
      rows = _useRegisterUnpackedV4[0];

  var _useRegisterUnpackedV5 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .LedMatrixReg.Columns */ .o$T.Columns), props),
      columns = _useRegisterUnpackedV5[0];

  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(service);
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active; // no data about layout


  if (rows === undefined || columns === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, null); // compute size

  var minOpacity = 0.3;
  var pw = 8;
  var ph = 8;
  var ps = 0.5;
  var pr = 2;
  var m = 2;
  var w = columns * pw + (columns + 1) * m;
  var h = rows * ph + (rows + 1) * m;
  var columnspadded = columns + (8 - columns % 8);

  var handleLedClick = function handleLedClick(bitindex) {
    return function (ev) {
      if (ev && !ev.buttons) return;
      var newLeds = leds.slice(0);
      (0,_jacdac_ts_src_servers_ledmatrixserver__WEBPACK_IMPORTED_MODULE_5__/* .toggle */ .w)(newLeds, bitindex);
      ledsRegister.sendSetAsync(newLeds, true);
    };
  }; // add leds


  var render = function render() {
    var boxEls = [];
    var ledEls = [];
    var onFill = active;
    var onStroke = undefined;
    var offFill = controlBackground;
    var offStroke = "transparent";
    var ledProps = {
      className: "clickeable",
      role: "button",
      tabIndex: 0
    };
    var y = m;

    for (var row = 0; row < rows; row++) {
      var x = m;

      for (var col = 0; col < columns; col++) {
        var box = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
          key: "b" + row + "-" + col,
          x: x,
          y: y,
          width: pw,
          height: ph,
          rx: pr,
          ry: pr,
          fill: controlBackground
        });
        boxEls.push(box);
        var bitindex = row * columnspadded + col;
        var byte = leds === null || leds === void 0 ? void 0 : leds[bitindex >> 3];
        var bit = bitindex % 8;
        var on = 1 === (byte >> bit & 1);
        var handleClick = handleLedClick(bitindex);
        var fireClick = (0,_hooks_useFireKey__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(handleClick);
        ledEls.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", Object.assign({
          key: "l" + row + "-" + col,
          x: x,
          y: y,
          width: pw,
          height: ph,
          rx: pr,
          ry: pr,
          fill: on ? onFill : offFill,
          stroke: on ? onStroke : offStroke,
          strokeWidth: ps
        }, ledProps, {
          "aria-label": "led " + row + ", " + col + " " + (on ? "on" : "off"),
          onPointerDown: handleClick,
          onPointerEnter: handleClick,
          onKeyDown: fireClick
        })));
        x += pw + m;
      }

      y += ph + m;
    }

    return {
      boxEls: boxEls,
      ledEls: ledEls
    };
  };

  var _render = render(),
      boxEls = _render.boxEls,
      ledEls = _render.ledEls;

  var navProps = (0,_hooks_useKeyboardNavigationProps__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(widgetRef.current);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    width: w,
    height: h
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: 0,
    y: 0,
    width: w,
    height: h,
    rx: 2,
    ry: 2,
    fill: background
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", Object.assign({
    ref: widgetRef
  }, navProps), boxEls, ledEls.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    opacity: minOpacity + brightness * (1 - minOpacity)
  }, ledEls)));
}

/***/ }),

/***/ 68786:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useKeyboardNavigationProps; }
});

// EXTERNAL MODULE: ./src/components/hooks/useFireKey.ts
var useFireKey = __webpack_require__(8966);
;// CONCATENATED MODULE: ./src/components/hooks/useArrowKeys.ts

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
    var charCode = (0,useFireKey/* keyCodeFromEvent */.$)(e);
    var handler = handlers[charCode];

    if (handler) {
      e.preventDefault();
      handler();
    }
  };
}
;// CONCATENATED MODULE: ./src/components/hooks/useKeyboardNavigation.ts
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
;// CONCATENATED MODULE: ./src/components/hooks/useKeyboardNavigationProps.ts


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
//# sourceMappingURL=9979-882d986e75cf248db985.js.map