(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[264],{

/***/ 88880:
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports.Z = _default;

/***/ }),

/***/ 95067:
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

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "8"
}), 'FiberManualRecord');

exports.Z = _default;

/***/ }),

/***/ 42404:
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
  d: "M8 5v14l11-7z"
}), 'PlayArrow');

exports.Z = _default;

/***/ }),

/***/ 14430:
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
  d: "M19 13H5v-2h14v2z"
}), 'Remove');

exports.Z = _default;

/***/ }),

/***/ 10264:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DashboardLEDPixel; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(85061);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(65541);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/light.ts
var light = __webpack_require__(69130);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(52468);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(65733);
// EXTERNAL MODULE: ./node_modules/react-color/es/index.js + 211 modules
var es = __webpack_require__(52803);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/FiberManualRecord.js
var FiberManualRecord = __webpack_require__(95067);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
;// CONCATENATED MODULE: ./src/components/ui/ColorInput.tsx


 // tslint:disable-next-line: no-submodule-imports match-default-export-name



function ColorInput(props) {
  var value = props.value,
      onChange = props.onChange;

  var _useState = (0,react.useState)(false),
      picker = _useState[0],
      setPicker = _useState[1];

  var handleClick = function handleClick() {
    return setPicker(!picker);
  };

  var handleClose = function handleClose() {
    return setPicker(false);
  };

  var handleChange = function handleChange(color) {
    setPicker(false);
    onChange(color.hex);
  };

  var colorStyle = {
    background: value
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "choose color",
    style: colorStyle,
    onClick: handleClick
  }, /*#__PURE__*/react.createElement(FiberManualRecord/* default */.Z, null)), /*#__PURE__*/react.createElement(Dialog/* default */.Z, {
    open: picker,
    onClose: handleClose
  }, /*#__PURE__*/react.createElement(DialogContent/* default */.Z, null, /*#__PURE__*/react.createElement(es/* CirclePicker */.iY, {
    color: value,
    onChangeComplete: handleChange
  }))));
}
// EXTERNAL MODULE: ./src/components/ui/SelectWithLabel.tsx
var SelectWithLabel = __webpack_require__(15789);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Remove.js
var Remove = __webpack_require__(14430);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(88880);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayArrow.js
var PlayArrow = __webpack_require__(42404);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(49013);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__(48059);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(60650);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2285);
;// CONCATENATED MODULE: ./src/components/widgets/LightWidget.tsx








function rgbToHsl(r, g, b) {
  var r$ = r / 255,
      g$ = g / 255,
      b$ = b / 255;
  var cMin = Math.min(r$, g$, b$);
  var cMax = Math.max(r$, g$, b$);
  var cDelta = cMax - cMin;
  var h;
  var s;
  var l;
  var maxAndMin = cMax + cMin; //lum

  l = maxAndMin / 2 * 100;
  if (cDelta === 0) s = h = 0;else {
    //hue
    if (cMax === r$) h = 60 * ((g$ - b$) / cDelta % 6);else if (cMax === g$) h = 60 * ((b$ - r$) / cDelta + 2);else if (cMax === b$) h = 60 * ((r$ - g$) / cDelta + 4); //sat

    if (l > 50) s = 100 * (cDelta / (2 - maxAndMin));else s = 100 * (cDelta / maxAndMin);
  } // at least 60% luminosity

  l = Math.max(l, 60);
  return [Math.floor(h), Math.floor(s), Math.floor(l)];
}

function setRgb(el, r, g, b, radius) {
  var hsl = rgbToHsl(r, g, b);
  var h = hsl[0],
      s = hsl[1],
      l = hsl[2];
  var fill = "hsl(" + h + ", " + s + "%, " + l + "%)";
  el.setAttribute("fill", fill);

  if (radius !== undefined) {
    var nr = radius * (1 + (l - 60) / 200);
    el.setAttribute("r", "" + nr);
  }
}

function setRgbLeds(pixelsContainer, colors, radius) {
  var pixels = pixelsContainer === null || pixelsContainer === void 0 ? void 0 : pixelsContainer.children;
  if (!colors || !pixels) return;
  var pn = Math.min(pixels.length, colors.length / 3);
  var ci = 0;

  for (var i = 0; i < pn; ++i) {
    var pixel = pixels.item(i);
    setRgb(pixel, colors[ci], colors[ci + 1], colors[ci + 2], radius);
    ci += 3;
  }
}

function LightStripWidget(props) {
  var lightVariant = props.lightVariant,
      numPixels = props.numPixels,
      actualBrightness = props.actualBrightness,
      server = props.server,
      widgetSize = props.widgetSize;

  var _useWidgetTheme = (0,useWidgetTheme/* default */.Z)(),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground;

  var pathRef = (0,react.useRef)(undefined);
  var pixelsRef = (0,react.useRef)(undefined);
  var neoradius = 6;
  var neocircleradius = neoradius + 1;
  var sw = neoradius * 2.8;
  var isJewel = lightVariant === constants/* LedPixelVariant.Jewel */.dQg.Jewel;
  var isRing = lightVariant === constants/* LedPixelVariant.Ring */.dQg.Ring; // paint svg via dom

  var paint = function paint() {
    return setRgbLeds(pixelsRef.current, server === null || server === void 0 ? void 0 : server.colors, neocircleradius);
  }; // reposition pixels along the path


  (0,react.useEffect)(function () {
    var _pixelsRef$current;

    var p = pathRef.current;
    var pixels = (_pixelsRef$current = pixelsRef.current) === null || _pixelsRef$current === void 0 ? void 0 : _pixelsRef$current.children;
    if (!p || !pixels) return;
    var offset = isJewel ? 1 : 0;
    var pn = pixels.length;
    var length = p.getTotalLength();
    var extra = isRing || isJewel ? 0 : 1;
    var step = length / (pn - offset);

    for (var i = offset; i < pn; ++i) {
      var pixel = pixels.item(i);
      var pos = i - offset;
      var point = p.getPointAtLength(step * (pos + extra / 2.0));
      pixel.setAttribute("cx", "" + point.x);
      pixel.setAttribute("cy", "" + point.y);
    }

    paint();
  }, [lightVariant, numPixels, pathRef.current, pixelsRef.current]); // render when new colors are in

  (0,react.useEffect)(function () {
    return server === null || server === void 0 ? void 0 : server.subscribe(constants/* RENDER */.kq7, paint);
  }, [server]);
  var width;
  var height;
  var d = "";

  if (lightVariant === constants/* LedPixelVariant.Stick */.dQg.Stick) {
    var dx = neoradius * 3;
    d = "M 0 " + dx;

    for (var i = 0; i < numPixels; ++i) {
      d += " h " + dx + " 0";
    }

    width = numPixels * dx;
    height = 2 * dx;
  } else if (lightVariant === constants/* LedPixelVariant.Strip */.dQg.Strip) {
    var side = Math.ceil(Math.sqrt(numPixels) * 1.6108);
    var _i = 0;
    var dir = 1;

    var _dx = neoradius * 3;

    var tr = neoradius * 6;
    var line = 1;
    d = "M " + 2 * tr + " " + _dx;

    while (_i < numPixels) {
      d += " h " + _dx * dir;

      if (_i % side === side - 1) {
        // turn around
        d += " c " + tr * dir + " 0, " + tr * dir + " " + tr + ", 0 " + tr;
        dir = -dir;
        line++;
      }

      _i++;
    }

    width = side * _dx + 4 * tr;
    height = line * tr + 2 * _dx;
  } else {
    var n = numPixels - (isJewel ? 1 : 0);
    var neoperimeter = n * (2.7 * neoradius);
    var margin = 2 * neoradius;
    var ringradius = neoperimeter / (2 * Math.PI);
    width = 2 * (margin + ringradius);
    height = width;
    var wm = width - 2 * margin;
    d = "M " + margin + "," + (height >> 1) + " a " + ringradius + "," + ringradius + " 0 1,0 " + wm + ",0 a " + ringradius + "," + ringradius + " 0 1,0 -" + wm + ", 0";
  } // tune opacity to account for global opacity


  var alpha = 0.7;
  var opacity = alpha + (1 - alpha) * ((actualBrightness || 0) / 0xff);
  return /*#__PURE__*/react.createElement(SvgWidget/* default */.Z, {
    width: width,
    height: height,
    size: widgetSize
  }, /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("path", {
    ref: pathRef,
    d: d,
    fill: "transparent",
    stroke: background,
    strokeWidth: sw
  }), /*#__PURE__*/react.createElement("g", {
    ref: pixelsRef,
    opacity: opacity
  }, Array(numPixels).fill(0).map(function (_, i) {
    return /*#__PURE__*/react.createElement("circle", {
      key: "pixel" + i,
      r: neocircleradius,
      cx: width >> 1,
      cy: height >> 1,
      stroke: controlBackground,
      strokeWidth: 1,
      "aria-label": "pixel " + i
    }, /*#__PURE__*/react.createElement("title", null, "pixel ", i));
  }))));
}

function LightMatrixWidget(props) {
  var columns = props.columns,
      rows = props.rows,
      server = props.server,
      widgetSize = props.widgetSize;

  var _useWidgetTheme2 = (0,useWidgetTheme/* default */.Z)(),
      background = _useWidgetTheme2.background,
      controlBackground = _useWidgetTheme2.controlBackground;

  var widgetRef = (0,react.useRef)(); // compute size

  var pw = 8;
  var ph = 8;
  var ps = 0.5;
  var pr = 1;
  var m = 2;
  var w = columns * pw + (columns + 1) * m;
  var h = rows * ph + (rows + 1) * m; // paint svg via dom

  var paint = function paint() {
    return setRgbLeds(widgetRef.current, server === null || server === void 0 ? void 0 : server.colors);
  }; // add leds


  var render = function render() {
    var ledEls = [];
    var y = m;

    for (var row = 0; row < rows; row++) {
      var x = m;

      for (var col = 0; col < columns; col++) {
        var index = row * columns + col;
        var label = "pixel " + index + " at " + row + "," + col;
        ledEls.push( /*#__PURE__*/react.createElement("rect", {
          key: "l" + row + "-" + col,
          x: x,
          y: y,
          width: pw,
          height: ph,
          rx: pr,
          ry: pr,
          fill: controlBackground,
          stroke: "none",
          strokeWidth: ps,
          "aria-label": label
        }, /*#__PURE__*/react.createElement("title", null, label)));
        x += pw + m;
      }

      y += ph + m;
    }

    return ledEls;
  }; // render when DOM render


  (0,react.useEffect)(paint, [columns, rows, widgetRef.current]); // render when new colors are in

  (0,react.useEffect)(function () {
    return server === null || server === void 0 ? void 0 : server.subscribe(constants/* RENDER */.kq7, paint);
  }, [server]);
  return /*#__PURE__*/react.createElement(SvgWidget/* default */.Z, {
    width: w,
    height: h,
    size: widgetSize
  }, /*#__PURE__*/react.createElement("rect", {
    x: 0,
    y: 0,
    width: w,
    height: h,
    rx: pr,
    ry: pr,
    fill: background
  }), /*#__PURE__*/react.createElement("g", {
    ref: widgetRef
  }, render()));
}

function LightWidget(props) {
  var service = props.service;

  var _useRegisterUnpackedV = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(service.register(constants/* LedPixelReg.NumPixels */.k9u.NumPixels), props),
      numPixels = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(service.register(constants/* LedPixelReg.Variant */.k9u.Variant), props),
      lightVariant = _useRegisterUnpackedV2[0];

  var _useRegisterUnpackedV3 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(service.register(constants/* LedPixelReg.ActualBrightness */.k9u.ActualBrightness), props),
      actualBrightness = _useRegisterUnpackedV3[0];

  var _useRegisterUnpackedV4 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(service.register(constants/* LedPixelReg.NumColumns */.k9u.NumColumns), props),
      numColumns = _useRegisterUnpackedV4[0];

  var server = (0,useServiceServer/* default */.Z)(service);
  if (numPixels === undefined || actualBrightness === undefined) return /*#__PURE__*/react.createElement(LoadingProgress/* default */.Z, null); // nothing to render

  if (!numPixels) return null;

  if (lightVariant === constants/* LedPixelVariant.Matrix */.dQg.Matrix) {
    var columns = numColumns || Math.floor(Math.sqrt(numPixels));
    var rows = Math.floor(numPixels / columns);
    return /*#__PURE__*/react.createElement(LightMatrixWidget, {
      lightVariant: lightVariant,
      actualBrightness: actualBrightness,
      server: server,
      columns: columns,
      rows: rows
    });
  } else return /*#__PURE__*/react.createElement(LightStripWidget, {
    numPixels: numPixels,
    lightVariant: lightVariant,
    actualBrightness: actualBrightness,
    server: server
  });
}
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardLEDPixel.tsx








// tslint:disable-next-line: no-submodule-imports match-default-export-name
 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name






/*
0xD6: range P=0 N=length W=1 S=0- range from pixel P, Npixels long (currently unsupported: every Wpixels skip Spixels)
*/

var lightCommands = [{
  name: "setall",
  args: "C+",
  description: "set all pixels in current range to given color pattern"
}, {
  name: "fade",
  args: "C+",
  description: "set pixels in current range to colors between colors in sequence"
}, {
  name: "rotfwd",
  args: "K",
  description: "rotate (shift) pixels away from the connector",
  valueDescription: "pixel positions to rotate"
}, {
  name: "rotback",
  args: "K",
  description: "rotate (shift) pixels towards the connector",
  valueDescription: "pixel positions to rotate"
}];

function LightCommand(props) {
  var service = props.service;

  var _useState = (0,react.useState)(false),
      sending = _useState[0],
      setSending = _useState[1];

  var _useState2 = (0,react.useState)(lightCommands[1]),
      command = _useState2[0],
      setCommand = _useState2[1];

  var _useState3 = (0,react.useState)("1"),
      offset = _useState3[0],
      setOffset = _useState3[1];

  var _useState4 = (0,react.useState)("100"),
      duration = _useState4[0],
      setDuration = _useState4[1];

  var _useState5 = (0,react.useState)(["#0000ff", "#ff0000"]),
      colors = _useState5[0],
      setColors = _useState5[1];

  var _useState6 = (0,react.useState)(0),
      mode = _useState6[0],
      setMode = _useState6[1];

  var name = command.name,
      args = command.args,
      description = command.description,
      valueDescription = command.valueDescription;
  var dcolors = args == "PC" ? colors.slice(0, 1) : colors;
  var encoded = (0,react.useMemo)(function () {
    var sargs = "";
    var vargs = [];

    switch (args) {
      case "C+":
        sargs = Array(colors.length).fill("#").join(" ");
        vargs = colors.map(function (c) {
          return parseInt(c.slice(1), 16);
        });
        break;

      case "K":
        {
          sargs = "%";
          vargs = [parseInt(offset)];
          break;
        }

      case "PC":
        {
          sargs = "% #";
          vargs = [parseInt(offset), parseInt(colors[0].slice(1), 16)];
          break;
        }
    }

    if (mode) vargs.unshift(mode);
    if (vargs.some(function (v) {
      return v === undefined || isNaN(v);
    })) return undefined;
    var ms = parseInt(duration);
    if (isNaN(ms)) ms = 100;
    var src = [mode && "tmpmode %", name + " " + sargs, "show %"].filter(function (l) {
      return !!l;
    }).join('\n');
    var largs = [].concat((0,toConsumableArray/* default */.Z)(vargs), [ms]);
    var r = (0,light/* lightEncode */._S)(src, largs);
    return r;
  }, [command, colors, duration, offset, mode]);

  var sendCommand = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (encoded) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.prev = 2;
              setSending(true);
              _context.next = 6;
              return service.sendCmdAsync(constants/* LedPixelCmd.Run */.yB$.Run, encoded);

            case 6:
              _context.prev = 6;
              setSending(false);
              return _context.finish(6);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2,, 6, 9]]);
    }));

    return function sendCommand() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleCommandChange = function handleCommandChange(ev) {
    var newName = ev.target.value;
    setCommand(lightCommands.find(function (cmd) {
      return cmd.name === newName;
    }));
  };

  var handleOffsetChange = function handleOffsetChange(ev) {
    setOffset(ev.target.value);
  };

  var handleModeChange = function handleModeChange(ev) {
    setMode(ev.target.value);
  };

  var handleDurationChange = function handleDurationChange(ev) {
    setDuration(ev.target.value);
  };

  var handleColorChange = function handleColorChange(index) {
    return /*#__PURE__*/function () {
      var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(color) {
        var cs;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                cs = colors.slice(0);
                cs[index] = color;
                setColors(cs);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();
  };

  var handleRemoveColor = function handleRemoveColor() {
    var cs = colors.slice(0);
    cs.pop();
    setColors(cs);
  };

  var handleAddColor = function handleAddColor() {
    var cs = colors.slice(0);
    cs.push('#ff0000');
    setColors(cs);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1,
    direction: "row",
    alignItems: "center",
    justify: "flex-start"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    key: "descr",
    xs: 12
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "caption"
  }, description)), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    key: "select",
    xs: 12
  }, /*#__PURE__*/react.createElement(SelectWithLabel/* default */.Z, {
    disabled: sending,
    fullWidth: true,
    label: "command",
    value: name,
    onChange: handleCommandChange
  }, lightCommands.map(function (cmd) {
    return /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
      key: cmd.name,
      value: cmd.name
    }, cmd.name);
  }))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    key: "time",
    xs: 6
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    variant: "outlined",
    label: "duration (milliseconds)",
    type: "number",
    value: duration,
    onChange: handleDurationChange
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    key: "mode",
    xs: 6
  }, /*#__PURE__*/react.createElement(SelectWithLabel/* default */.Z, {
    fullWidth: true,
    label: "update mode",
    value: mode + "",
    onChange: handleModeChange
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
    value: 0
  }, "replace"), /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
    value: 1
  }, "add"), /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
    value: 2
  }, "substract"), /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
    value: 3
  }, "multiply"))))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1,
    direction: "row",
    alignItems: "center",
    alignContent: "flex-start",
    justify: "flex-start"
  }, (args === "K" || args === "PC") && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    key: "K"
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    variant: "outlined",
    type: "number",
    helperText: valueDescription,
    value: offset,
    onChange: handleOffsetChange
  })), (args === "C+" || args === "PC") && dcolors.map(function (c, i) {
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
      item: true,
      xs: true,
      key: i
    }, /*#__PURE__*/react.createElement(ColorInput, {
      value: c,
      onChange: handleColorChange(i)
    }));
  }), args === "C+" && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: true,
    key: "minuscolor"
  }, /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    disabled: colors.length < 2,
    title: "Remove color",
    onClick: handleRemoveColor
  }, /*#__PURE__*/react.createElement(Remove/* default */.Z, null)), /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    disabled: colors.length > 4,
    title: "Add color",
    onClick: handleAddColor
  }, /*#__PURE__*/react.createElement(Add/* default */.Z, null))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: true,
    key: "run"
  }, /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    disabled: !encoded,
    title: "Run command",
    onClick: sendCommand
  }, /*#__PURE__*/react.createElement(PlayArrow/* default */.Z, null))))));
}

function DashboardLEDPixel(props) {
  var service = props.service,
      services = props.services,
      expanded = props.expanded;
  var server = (0,useServiceServer/* default */.Z)(service);
  return /*#__PURE__*/react.createElement(react.Fragment, null, server && /*#__PURE__*/react.createElement(LightWidget, Object.assign({
    widgetCount: services.length
  }, props)), expanded && /*#__PURE__*/react.createElement(LightCommand, {
    service: service,
    expanded: expanded
  }));
}

/***/ }),

/***/ 15789:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SelectWithLabel; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31690);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11592);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(706);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78942);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19640);



function SelectWithLabel(props) {
  var label = props.label,
      fullWidth = props.fullWidth,
      required = props.required,
      disabled = props.disabled,
      value = props.value,
      error = props.error,
      placeholder = props.placeholder,
      onChange = props.onChange,
      children = props.children,
      helperText = props.helperText,
      type = props.type;
  var labelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var descrId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var hasDescr = !!helperText || !!error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    fullWidth: fullWidth,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    id: labelId,
    key: "label"
  }, required ? label + " *" : label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    disabled: disabled,
    label: label,
    value: value,
    error: !!error,
    fullWidth: true,
    placeholder: placeholder,
    type: type,
    labelId: labelId,
    "aria-describedby": hasDescr ? descrId : undefined,
    onChange: onChange
  }, children), hasDescr && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    id: descrId
  }, error || helperText));
}

/***/ })

}]);
//# sourceMappingURL=264-3c48af6a94a7b11e1f97.js.map