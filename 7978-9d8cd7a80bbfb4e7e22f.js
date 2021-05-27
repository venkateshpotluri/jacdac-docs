(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7978],{

/***/ 77978:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DashboardLEDMatrixDisplay; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(49013);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__(48059);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(60650);
// EXTERNAL MODULE: ./src/components/hooks/useFireKey.ts
var useFireKey = __webpack_require__(8966);
// EXTERNAL MODULE: ./src/components/hooks/useKeyboardNavigationProps.ts + 2 modules
var useKeyboardNavigationProps = __webpack_require__(68786);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/ledmatrixserver.ts
var ledmatrixserver = __webpack_require__(41441);
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2285);
;// CONCATENATED MODULE: ./src/components/ui/LEDMatrixWidgets.tsx







function LEDMatrixDisplayWidget(props) {
  var leds = props.leds,
      _props$brightness = props.brightness,
      brightness = _props$brightness === void 0 ? 0.5 : _props$brightness,
      rows = props.rows,
      columns = props.columns,
      _props$color = props.color,
      color = _props$color === void 0 ? "primary" : _props$color,
      onChange = props.onChange;
  var widgetRef = (0,react.useRef)();

  var _useWidgetTheme = (0,useWidgetTheme/* default */.Z)(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active;

  var navProps = (0,useKeyboardNavigationProps/* default */.Z)(widgetRef.current); // no data about layout

  if (rows === undefined || columns === undefined) return /*#__PURE__*/react.createElement(LoadingProgress/* default */.Z, null); // compute size

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
      (0,ledmatrixserver/* toggle */.w)(newLeds, bitindex);
      onChange === null || onChange === void 0 ? void 0 : onChange(newLeds);
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
        var box = /*#__PURE__*/react.createElement("rect", {
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
        var fireClick = (0,useFireKey/* default */.Z)(handleClick);
        ledEls.push( /*#__PURE__*/react.createElement("rect", Object.assign({
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

  return /*#__PURE__*/react.createElement(SvgWidget/* default */.Z, {
    width: w,
    height: h
  }, /*#__PURE__*/react.createElement("rect", {
    x: 0,
    y: 0,
    width: w,
    height: h,
    rx: 2,
    ry: 2,
    fill: background
  }), /*#__PURE__*/react.createElement("g", Object.assign({
    ref: widgetRef
  }, navProps), boxEls, ledEls.length && /*#__PURE__*/react.createElement("g", {
    opacity: minOpacity + brightness * (1 - minOpacity)
  }, ledEls)));
}
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardLEDMatrix.tsx






function DashboardLEDMatrixDisplay(props) {
  var service = props.service;
  var ledsRegister = service.register(constants/* LedMatrixReg.Leds */.o$T.Leds);

  var _useRegisterUnpackedV = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(ledsRegister, props),
      leds = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(service.register(constants/* LedMatrixReg.Brightness */.o$T.Brightness), props),
      _useRegisterUnpackedV3 = _useRegisterUnpackedV2[0],
      brightness = _useRegisterUnpackedV3 === void 0 ? 0 : _useRegisterUnpackedV3;

  var _useRegisterUnpackedV4 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(service.register(constants/* LedMatrixReg.Rows */.o$T.Rows), props),
      rows = _useRegisterUnpackedV4[0];

  var _useRegisterUnpackedV5 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(service.register(constants/* LedMatrixReg.Columns */.o$T.Columns), props),
      columns = _useRegisterUnpackedV5[0];

  var server = (0,useServiceServer/* default */.Z)(service);
  var color = server ? "secondary" : "primary";
  (0,useChange/* default */.Z)(server);

  var handleChange = function handleChange(newLeds) {
    ledsRegister.sendSetAsync(newLeds, true);
  };

  return /*#__PURE__*/react.createElement(LEDMatrixDisplayWidget, {
    leds: leds,
    brightness: brightness,
    rows: rows,
    columns: columns,
    color: color,
    onChange: handleChange
  });
}

/***/ })

}]);
//# sourceMappingURL=7978-9d8cd7a80bbfb4e7e22f.js.map