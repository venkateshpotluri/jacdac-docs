(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4973],{

/***/ 64973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ fields_Line; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@nivo/core/dist/nivo-core.es.js + 30 modules
var nivo_core_es = __webpack_require__(67587);
// EXTERNAL MODULE: ./node_modules/@nivo/colors/dist/nivo-colors.es.js + 2 modules
var nivo_colors_es = __webpack_require__(68204);
// EXTERNAL MODULE: ./node_modules/@nivo/axes/dist/nivo-axes.es.js + 14 modules
var nivo_axes_es = __webpack_require__(21100);
// EXTERNAL MODULE: ./node_modules/@nivo/legends/dist/nivo-legends.es.js
var nivo_legends_es = __webpack_require__(26729);
// EXTERNAL MODULE: ./node_modules/@nivo/tooltip/dist/nivo-tooltip.es.js
var nivo_tooltip_es = __webpack_require__(62529);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/line.js
var line = __webpack_require__(84887);
// EXTERNAL MODULE: ./node_modules/d3-path/src/path.js
var path = __webpack_require__(56940);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/constant.js
var constant = __webpack_require__(21235);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/curve/linear.js
var linear = __webpack_require__(42431);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/point.js
var point = __webpack_require__(94882);
;// CONCATENATED MODULE: ./node_modules/d3-shape/src/area.js





/* harmony default export */ function src_area() {
  var x0 = point.x,
      x1 = null,
      y0 = (0,constant/* default */.Z)(0),
      y1 = point.y,
      defined = (0,constant/* default */.Z)(true),
      context = null,
      curve = linear/* default */.Z,
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);
    if (context == null) output = curve(buffer = (0,path/* default */.Z)());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();

          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }

          output.lineEnd();
          output.areaEnd();
        }
      }

      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return (0,line/* default */.Z)().defined(defined).curve(curve).context(context);
  }

  area.x = function (_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), x1 = null, area) : x0;
  };

  area.x0 = function (_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), area) : x0;
  };

  area.x1 = function (_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), area) : x1;
  };

  area.y = function (_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), y1 = null, area) : y0;
  };

  area.y0 = function (_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), area) : y0;
  };

  area.y1 = function (_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), area) : y1;
  };

  area.lineX0 = area.lineY0 = function () {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function () {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function () {
    return arealine().x(x1).y(y0);
  };

  area.defined = function (_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : (0,constant/* default */.Z)(!!_), area) : defined;
  };

  area.curve = function (_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function (_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
}
// EXTERNAL MODULE: ./node_modules/@nivo/scales/dist/nivo-scales.es.js + 24 modules
var nivo_scales_es = __webpack_require__(12685);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@react-spring/web/dist/react-spring-web.esm.js
var react_spring_web_esm = __webpack_require__(85468);
// EXTERNAL MODULE: ./node_modules/@nivo/voronoi/dist/nivo-voronoi.es.js + 5 modules
var nivo_voronoi_es = __webpack_require__(8374);
;// CONCATENATED MODULE: ./node_modules/@nivo/line/dist/nivo-line.es.js













function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var LinePointTooltip = function LinePointTooltip(_ref) {
  var point = _ref.point;
  return (0,jsx_runtime.jsx)(nivo_tooltip_es/* BasicTooltip */._5, {
    id: (0,jsx_runtime.jsxs)("span", {
      children: ["x: ", (0,jsx_runtime.jsx)("strong", {
        children: point.data.xFormatted
      }), ", y:", ' ', (0,jsx_runtime.jsx)("strong", {
        children: point.data.yFormatted
      })]
    }),
    enableChip: true,
    color: point.serieColor
  });
};

var PointTooltip = (0,react.memo)(LinePointTooltip);

var SliceTooltip = function SliceTooltip(_ref) {
  var slice = _ref.slice,
      axis = _ref.axis;
  var theme = (0,nivo_core_es/* useTheme */.Fg)();
  var otherAxis = axis === 'x' ? 'y' : 'x';
  return (0,jsx_runtime.jsx)(nivo_tooltip_es/* TableTooltip */.zI, {
    rows: slice.points.map(function (point) {
      return [(0,jsx_runtime.jsx)(nivo_tooltip_es/* Chip */.Af, {
        color: point.serieColor,
        style: theme.tooltip.chip
      }, "chip"), point.serieId, (0,jsx_runtime.jsx)("span", {
        style: theme.tooltip.tableCellValue,
        children: point.data["".concat(otherAxis, "Formatted")]
      }, "value")];
    })
  });
};

var SliceTooltip$1 = (0,react.memo)(SliceTooltip);
var commonPropTypes = {
  data: prop_types_default().arrayOf(prop_types_default().shape({
    id: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
    data: prop_types_default().arrayOf(prop_types_default().shape({
      x: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string, prop_types_default().instanceOf(Date)]),
      y: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string, prop_types_default().instanceOf(Date)])
    })).isRequired
  })).isRequired,
  xScale: (prop_types_default()).object.isRequired,
  xFormat: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  yScale: (prop_types_default()).object.isRequired,
  yFormat: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  layers: prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().oneOf(['grid', 'markers', 'axes', 'areas', 'crosshair', 'lines', 'slices', 'points', 'mesh', 'legends']), (prop_types_default()).func])).isRequired,
  curve: nivo_core_es/* lineCurvePropType.isRequired */.VZ.isRequired,
  axisTop: nivo_axes_es/* axisPropType */.VT,
  axisRight: nivo_axes_es/* axisPropType */.VT,
  axisBottom: nivo_axes_es/* axisPropType */.VT,
  axisLeft: nivo_axes_es/* axisPropType */.VT,
  enableGridX: (prop_types_default()).bool.isRequired,
  enableGridY: (prop_types_default()).bool.isRequired,
  gridXValues: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string, prop_types_default().instanceOf(Date)]))]),
  gridYValues: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string, prop_types_default().instanceOf(Date)]))]),
  enablePoints: (prop_types_default()).bool.isRequired,
  pointSymbol: (prop_types_default()).func,
  pointSize: (prop_types_default()).number.isRequired,
  pointColor: (prop_types_default()).any.isRequired,
  pointBorderWidth: (prop_types_default()).number.isRequired,
  pointBorderColor: (prop_types_default()).any.isRequired,
  enablePointLabel: (prop_types_default()).bool.isRequired,
  pointLabel: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).func]).isRequired,
  markers: prop_types_default().arrayOf(prop_types_default().shape({
    axis: prop_types_default().oneOf(['x', 'y']).isRequired,
    value: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string, prop_types_default().instanceOf(Date)]).isRequired,
    style: (prop_types_default()).object
  })),
  colors: nivo_colors_es/* ordinalColorsPropType.isRequired */.qi.isRequired,
  enableArea: (prop_types_default()).bool.isRequired,
  areaOpacity: (prop_types_default()).number.isRequired,
  areaBlendMode: nivo_core_es/* blendModePropType.isRequired */.wM.isRequired,
  areaBaselineValue: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string, prop_types_default().instanceOf(Date)]).isRequired,
  lineWidth: (prop_types_default()).number.isRequired,
  legends: prop_types_default().arrayOf(prop_types_default().shape(nivo_legends_es/* LegendPropShape */.iQ)).isRequired,
  isInteractive: (prop_types_default()).bool.isRequired,
  debugMesh: (prop_types_default()).bool.isRequired,
  tooltip: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object]).isRequired,
  enableSlices: prop_types_default().oneOf(['x', 'y', false]).isRequired,
  debugSlices: (prop_types_default()).bool.isRequired,
  sliceTooltip: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object]).isRequired,
  enableCrosshair: (prop_types_default()).bool.isRequired,
  crosshairType: (prop_types_default()).string.isRequired
};

var LinePropTypes = _objectSpread2(_objectSpread2(_objectSpread2({}, commonPropTypes), {}, {
  enablePointLabel: (prop_types_default()).bool.isRequired,
  role: (prop_types_default()).string.isRequired,
  useMesh: (prop_types_default()).bool.isRequired
}, nivo_core_es/* motionPropTypes */.w$), nivo_core_es/* defsPropTypes */._U);

var LineCanvasPropTypes = _objectSpread2({
  pixelRatio: (prop_types_default()).number.isRequired
}, commonPropTypes);

var commonDefaultProps = {
  curve: 'linear',
  xScale: {
    type: 'point'
  },
  yScale: {
    type: 'linear',
    min: 0,
    max: 'auto'
  },
  layers: ['grid', 'markers', 'axes', 'areas', 'crosshair', 'lines', 'points', 'slices', 'mesh', 'legends'],
  axisBottom: {},
  axisLeft: {},
  enableGridX: true,
  enableGridY: true,
  enablePoints: true,
  pointSize: 6,
  pointColor: {
    from: 'color'
  },
  pointBorderWidth: 0,
  pointBorderColor: {
    theme: 'background'
  },
  enablePointLabel: false,
  pointLabel: 'yFormatted',
  colors: {
    scheme: 'nivo'
  },
  enableArea: false,
  areaBaselineValue: 0,
  areaOpacity: 0.2,
  areaBlendMode: 'normal',
  lineWidth: 2,
  legends: [],
  isInteractive: true,
  tooltip: PointTooltip,
  enableSlices: false,
  debugSlices: false,
  sliceTooltip: SliceTooltip$1,
  debugMesh: false,
  enableCrosshair: true,
  crosshairType: 'bottom-left'
};

var LineDefaultProps = _objectSpread2(_objectSpread2({}, commonDefaultProps), {}, {
  enablePointLabel: false,
  useMesh: false,
  animate: true,
  motionConfig: 'gentle',
  defs: [],
  fill: [],
  role: 'img'
});

var LineCanvasDefaultProps = _objectSpread2(_objectSpread2({}, commonDefaultProps), {}, {
  pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1
});

var useLineGenerator = function useLineGenerator(_ref) {
  var curve = _ref.curve;
  return (0,react.useMemo)(function () {
    return (0,line/* default */.Z)().defined(function (d) {
      return d.x !== null && d.y !== null;
    }).x(function (d) {
      return d.x;
    }).y(function (d) {
      return d.y;
    }).curve((0,nivo_core_es/* curveFromProp */.Bg)(curve));
  }, [curve]);
};

var useAreaGenerator = function useAreaGenerator(_ref2) {
  var curve = _ref2.curve,
      yScale = _ref2.yScale,
      areaBaselineValue = _ref2.areaBaselineValue;
  return (0,react.useMemo)(function () {
    return src_area().defined(function (d) {
      return d.x !== null && d.y !== null;
    }).x(function (d) {
      return d.x;
    }).y1(function (d) {
      return d.y;
    }).curve((0,nivo_core_es/* curveFromProp */.Bg)(curve)).y0(yScale(areaBaselineValue));
  }, [curve, yScale, areaBaselineValue]);
};

var usePoints = function usePoints(_ref3) {
  var series = _ref3.series,
      getPointColor = _ref3.getPointColor,
      getPointBorderColor = _ref3.getPointBorderColor,
      formatX = _ref3.formatX,
      formatY = _ref3.formatY;
  return (0,react.useMemo)(function () {
    return series.reduce(function (acc, serie) {
      return [].concat(_toConsumableArray(acc), _toConsumableArray(serie.data.filter(function (datum) {
        return datum.position.x !== null && datum.position.y !== null;
      }).map(function (datum, i) {
        var point = {
          id: "".concat(serie.id, ".").concat(i),
          index: acc.length + i,
          serieId: serie.id,
          serieColor: serie.color,
          x: datum.position.x,
          y: datum.position.y
        };
        point.color = getPointColor(serie);
        point.borderColor = getPointBorderColor(point);
        point.data = _objectSpread2(_objectSpread2({}, datum.data), {}, {
          xFormatted: formatX(datum.data.x),
          yFormatted: formatY(datum.data.y)
        });
        return point;
      })));
    }, []);
  }, [series, getPointColor, getPointBorderColor, formatX, formatY]);
};

var useSlices = function useSlices(_ref4) {
  var enableSlices = _ref4.enableSlices,
      points = _ref4.points,
      width = _ref4.width,
      height = _ref4.height;
  return (0,react.useMemo)(function () {
    if (enableSlices === false) return [];

    if (enableSlices === 'x') {
      var map = new Map();
      points.forEach(function (point) {
        if (point.data.x === null || point.data.y === null) return;
        if (!map.has(point.x)) map.set(point.x, [point]);else map.get(point.x).push(point);
      });
      return Array.from(map.entries()).sort(function (a, b) {
        return a[0] - b[0];
      }).map(function (_ref5, i, slices) {
        var _ref6 = _slicedToArray(_ref5, 2),
            x = _ref6[0],
            slicePoints = _ref6[1];

        var prevSlice = slices[i - 1];
        var nextSlice = slices[i + 1];
        var x0;
        if (!prevSlice) x0 = x;else x0 = x - (x - prevSlice[0]) / 2;
        var sliceWidth;
        if (!nextSlice) sliceWidth = width - x0;else sliceWidth = x - x0 + (nextSlice[0] - x) / 2;
        return {
          id: x,
          x0: x0,
          x: x,
          y0: 0,
          y: 0,
          width: sliceWidth,
          height: height,
          points: slicePoints.reverse()
        };
      });
    } else if (enableSlices === 'y') {
      var _map = new Map();

      points.forEach(function (point) {
        if (point.data.x === null || point.data.y === null) return;
        if (!_map.has(point.y)) _map.set(point.y, [point]);else _map.get(point.y).push(point);
      });
      return Array.from(_map.entries()).sort(function (a, b) {
        return a[0] - b[0];
      }).map(function (_ref7, i, slices) {
        var _ref8 = _slicedToArray(_ref7, 2),
            y = _ref8[0],
            slicePoints = _ref8[1];

        var prevSlice = slices[i - 1];
        var nextSlice = slices[i + 1];
        var y0;
        if (!prevSlice) y0 = y;else y0 = y - (y - prevSlice[0]) / 2;
        var sliceHeight;
        if (!nextSlice) sliceHeight = height - y0;else sliceHeight = y - y0 + (nextSlice[0] - y) / 2;
        return {
          id: y,
          x0: 0,
          x: 0,
          y0: y0,
          y: y,
          width: width,
          height: sliceHeight,
          points: slicePoints.reverse()
        };
      });
    }
  }, [enableSlices, points]);
};

var useLine = function useLine(_ref9) {
  var data = _ref9.data,
      _ref9$xScale = _ref9.xScale,
      xScaleSpec = _ref9$xScale === void 0 ? LineDefaultProps.xScale : _ref9$xScale,
      xFormat = _ref9.xFormat,
      _ref9$yScale = _ref9.yScale,
      yScaleSpec = _ref9$yScale === void 0 ? LineDefaultProps.yScale : _ref9$yScale,
      yFormat = _ref9.yFormat,
      width = _ref9.width,
      height = _ref9.height,
      _ref9$colors = _ref9.colors,
      colors = _ref9$colors === void 0 ? LineDefaultProps.colors : _ref9$colors,
      _ref9$curve = _ref9.curve,
      curve = _ref9$curve === void 0 ? LineDefaultProps.curve : _ref9$curve,
      _ref9$areaBaselineVal = _ref9.areaBaselineValue,
      areaBaselineValue = _ref9$areaBaselineVal === void 0 ? LineDefaultProps.areaBaselineValue : _ref9$areaBaselineVal,
      _ref9$pointColor = _ref9.pointColor,
      pointColor = _ref9$pointColor === void 0 ? LineDefaultProps.pointColor : _ref9$pointColor,
      _ref9$pointBorderColo = _ref9.pointBorderColor,
      pointBorderColor = _ref9$pointBorderColo === void 0 ? LineDefaultProps.pointBorderColor : _ref9$pointBorderColo,
      _ref9$enableSlices = _ref9.enableSlices,
      enableSlices = _ref9$enableSlices === void 0 ? LineDefaultProps.enableSlicesTooltip : _ref9$enableSlices;
  var formatX = (0,nivo_core_es/* useValueFormatter */.O_)(xFormat);
  var formatY = (0,nivo_core_es/* useValueFormatter */.O_)(yFormat);
  var getColor = (0,nivo_colors_es/* useOrdinalColorScale */.U)(colors, 'id');
  var theme = (0,nivo_core_es/* useTheme */.Fg)();
  var getPointColor = (0,nivo_colors_es/* useInheritedColor */.Bf)(pointColor, theme);
  var getPointBorderColor = (0,nivo_colors_es/* useInheritedColor */.Bf)(pointBorderColor, theme);

  var _useState = (0,react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      hiddenIds = _useState2[0],
      setHiddenIds = _useState2[1];

  var _useMemo = (0,react.useMemo)(function () {
    return (0,nivo_scales_es/* computeXYScalesForSeries */.Gi)(data.filter(function (item) {
      return hiddenIds.indexOf(item.id) === -1;
    }), xScaleSpec, yScaleSpec, width, height);
  }, [data, hiddenIds, xScaleSpec, yScaleSpec, width, height]),
      xScale = _useMemo.xScale,
      yScale = _useMemo.yScale,
      rawSeries = _useMemo.series;

  var _useMemo2 = (0,react.useMemo)(function () {
    var dataWithColor = data.map(function (line) {
      return {
        id: line.id,
        label: line.id,
        color: getColor(line)
      };
    });
    var series = dataWithColor.map(function (datum) {
      return _objectSpread2(_objectSpread2({}, rawSeries.find(function (serie) {
        return serie.id === datum.id;
      })), {}, {
        color: datum.color
      });
    }).filter(function (item) {
      return Boolean(item.id);
    });
    var legendData = dataWithColor.map(function (item) {
      return _objectSpread2(_objectSpread2({}, item), {}, {
        hidden: !series.find(function (serie) {
          return serie.id === item.id;
        })
      });
    }).reverse();
    return {
      legendData: legendData,
      series: series
    };
  }, [data, rawSeries, getColor]),
      legendData = _useMemo2.legendData,
      series = _useMemo2.series;

  var toggleSerie = (0,react.useCallback)(function (id) {
    setHiddenIds(function (state) {
      return state.indexOf(id) > -1 ? state.filter(function (item) {
        return item !== id;
      }) : [].concat(_toConsumableArray(state), [id]);
    });
  }, []);
  var points = usePoints({
    series: series,
    getPointColor: getPointColor,
    getPointBorderColor: getPointBorderColor,
    formatX: formatX,
    formatY: formatY
  });
  var slices = useSlices({
    enableSlices: enableSlices,
    points: points,
    width: width,
    height: height
  });
  var lineGenerator = useLineGenerator({
    curve: curve
  });
  var areaGenerator = useAreaGenerator({
    curve: curve,
    yScale: yScale,
    areaBaselineValue: areaBaselineValue
  });
  return {
    legendData: legendData,
    toggleSerie: toggleSerie,
    lineGenerator: lineGenerator,
    areaGenerator: areaGenerator,
    getColor: getColor,
    series: series,
    xScale: xScale,
    yScale: yScale,
    slices: slices,
    points: points
  };
};

var AreaPath = function AreaPath(_ref) {
  var areaBlendMode = _ref.areaBlendMode,
      areaOpacity = _ref.areaOpacity,
      color = _ref.color,
      fill = _ref.fill,
      path = _ref.path;

  var _useMotionConfig = (0,nivo_core_es/* useMotionConfig */.tf)(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.config;

  var animatedPath = (0,nivo_core_es/* useAnimatedPath */.NS)(path);
  var animatedProps = (0,react_spring_web_esm.useSpring)({
    color: color,
    config: springConfig,
    immediate: !animate
  });
  return (0,jsx_runtime.jsx)(react_spring_web_esm/* animated.path */.q.path, {
    d: animatedPath,
    fill: fill ? fill : animatedProps.color,
    fillOpacity: areaOpacity,
    strokeWidth: 0,
    style: {
      mixBlendMode: areaBlendMode
    }
  });
};

var Areas = function Areas(_ref2) {
  var areaGenerator = _ref2.areaGenerator,
      areaOpacity = _ref2.areaOpacity,
      areaBlendMode = _ref2.areaBlendMode,
      lines = _ref2.lines;
  var computedLines = lines.slice(0).reverse();
  return (0,jsx_runtime.jsx)("g", {
    children: computedLines.map(function (line) {
      return (0,jsx_runtime.jsx)(AreaPath, _objectSpread2({
        path: areaGenerator(line.data.map(function (d) {
          return d.position;
        }))
      }, _objectSpread2({
        areaOpacity: areaOpacity,
        areaBlendMode: areaBlendMode
      }, line)), line.id);
    })
  });
};

var Areas$1 = (0,react.memo)(Areas);

var LinesItem = function LinesItem(_ref) {
  var lineGenerator = _ref.lineGenerator,
      points = _ref.points,
      color = _ref.color,
      thickness = _ref.thickness;
  var path = (0,react.useMemo)(function () {
    return lineGenerator(points);
  }, [lineGenerator, points]);
  var animatedPath = (0,nivo_core_es/* useAnimatedPath */.NS)(path);
  return (0,jsx_runtime.jsx)(react_spring_web_esm/* animated.path */.q.path, {
    d: animatedPath,
    fill: "none",
    strokeWidth: thickness,
    stroke: color
  });
};

var LinesItem$1 = (0,react.memo)(LinesItem);

var Lines = function Lines(_ref) {
  var lines = _ref.lines,
      lineGenerator = _ref.lineGenerator,
      lineWidth = _ref.lineWidth;
  return lines.reverse().map(function (_ref2) {
    var id = _ref2.id,
        data = _ref2.data,
        color = _ref2.color;
    return (0,jsx_runtime.jsx)(LinesItem$1, {
      id: id,
      points: data.map(function (d) {
        return d.position;
      }),
      lineGenerator: lineGenerator,
      color: color,
      thickness: lineWidth
    }, id);
  });
};

var Lines$1 = (0,react.memo)(Lines);

var SlicesItem = function SlicesItem(_ref) {
  var slice = _ref.slice,
      axis = _ref.axis,
      debug = _ref.debug,
      tooltip = _ref.tooltip,
      isCurrent = _ref.isCurrent,
      setCurrent = _ref.setCurrent;

  var _useTooltip = (0,nivo_tooltip_es/* useTooltip */.lL)(),
      showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
      hideTooltip = _useTooltip.hideTooltip;

  var handleMouseEnter = (0,react.useCallback)(function (event) {
    showTooltipFromEvent((0,react.createElement)(tooltip, {
      slice: slice,
      axis: axis
    }), event, 'right');
    setCurrent(slice);
  }, [showTooltipFromEvent, tooltip, slice]);
  var handleMouseMove = (0,react.useCallback)(function (event) {
    showTooltipFromEvent((0,react.createElement)(tooltip, {
      slice: slice,
      axis: axis
    }), event, 'right');
  }, [showTooltipFromEvent, tooltip, slice]);
  var handleMouseLeave = (0,react.useCallback)(function () {
    hideTooltip();
    setCurrent(null);
  }, [hideTooltip]);
  return (0,jsx_runtime.jsx)("rect", {
    x: slice.x0,
    y: slice.y0,
    width: slice.width,
    height: slice.height,
    stroke: "red",
    strokeWidth: debug ? 1 : 0,
    strokeOpacity: 0.75,
    fill: "red",
    fillOpacity: isCurrent && debug ? 0.35 : 0,
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  });
};

var SlicesItem$1 = (0,react.memo)(SlicesItem);

var Slices = function Slices(_ref) {
  var slices = _ref.slices,
      axis = _ref.axis,
      debug = _ref.debug,
      height = _ref.height,
      tooltip = _ref.tooltip,
      current = _ref.current,
      setCurrent = _ref.setCurrent;
  return slices.map(function (slice) {
    return (0,jsx_runtime.jsx)(SlicesItem$1, {
      slice: slice,
      axis: axis,
      debug: debug,
      height: height,
      tooltip: tooltip,
      setCurrent: setCurrent,
      isCurrent: current !== null && current.id === slice.id
    }, slice.id);
  });
};

var Slices$1 = (0,react.memo)(Slices);

var Points = function Points(_ref) {
  var points = _ref.points,
      symbol = _ref.symbol,
      size = _ref.size,
      borderWidth = _ref.borderWidth,
      enableLabel = _ref.enableLabel,
      label = _ref.label,
      labelYOffset = _ref.labelYOffset;
  var theme = (0,nivo_core_es/* useTheme */.Fg)();
  var getLabel = (0,nivo_core_es/* getLabelGenerator */.ji)(label);
  var mappedPoints = points.reverse().map(function (point) {
    var mappedPoint = {
      id: point.id,
      x: point.x,
      y: point.y,
      datum: point.data,
      fill: point.color,
      stroke: point.borderColor,
      label: enableLabel ? getLabel(point.data) : null
    };
    return mappedPoint;
  });
  return (0,jsx_runtime.jsx)("g", {
    children: mappedPoints.map(function (point) {
      return (0,jsx_runtime.jsx)(nivo_core_es/* DotsItem */.F_, {
        x: point.x,
        y: point.y,
        datum: point.datum,
        symbol: symbol,
        size: size,
        color: point.fill,
        borderWidth: borderWidth,
        borderColor: point.stroke,
        label: point.label,
        labelYOffset: labelYOffset,
        theme: theme
      }, point.id);
    })
  });
};

var Points$1 = (0,react.memo)(Points);

var Mesh = function Mesh(_ref) {
  var points = _ref.points,
      width = _ref.width,
      height = _ref.height,
      margin = _ref.margin,
      setCurrent = _ref.setCurrent,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      tooltip = _ref.tooltip,
      debug = _ref.debug;

  var _useTooltip = (0,nivo_tooltip_es/* useTooltip */.lL)(),
      showTooltipAt = _useTooltip.showTooltipAt,
      hideTooltip = _useTooltip.hideTooltip;

  var handleMouseEnter = (0,react.useCallback)(function (point, event) {
    showTooltipAt((0,react.createElement)(tooltip, {
      point: point
    }), [point.x + margin.left, point.y + margin.top], 'top');
    setCurrent(point);
    onMouseEnter && onMouseEnter(point, event);
  }, [setCurrent, showTooltipAt, tooltip, onMouseEnter, margin]);
  var handleMouseMove = (0,react.useCallback)(function (point, event) {
    showTooltipAt((0,react.createElement)(tooltip, {
      point: point
    }), [point.x + margin.left, point.y + margin.top], 'top');
    setCurrent(point);
    onMouseMove && onMouseMove(point, event);
  }, [setCurrent, showTooltipAt, tooltip, onMouseMove]);
  var handleMouseLeave = (0,react.useCallback)(function (point, event) {
    hideTooltip();
    setCurrent(null);
    onMouseLeave && onMouseLeave(point, event);
  }, [hideTooltip, setCurrent, onMouseLeave]);
  var handleClick = (0,react.useCallback)(function (point, event) {
    onClick && onClick(point, event);
  }, [onClick]);
  return (0,jsx_runtime.jsx)(nivo_voronoi_es/* Mesh */.Kj, {
    nodes: points,
    width: width,
    height: height,
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick,
    debug: debug
  });
};

var Mesh$1 = (0,react.memo)(Mesh);

var Line = function Line(props) {
  var data = props.data,
      xScaleSpec = props.xScale,
      xFormat = props.xFormat,
      yScaleSpec = props.yScale,
      yFormat = props.yFormat,
      layers = props.layers,
      curve = props.curve,
      areaBaselineValue = props.areaBaselineValue,
      colors = props.colors,
      partialMargin = props.margin,
      width = props.width,
      height = props.height,
      axisTop = props.axisTop,
      axisRight = props.axisRight,
      axisBottom = props.axisBottom,
      axisLeft = props.axisLeft,
      enableGridX = props.enableGridX,
      enableGridY = props.enableGridY,
      gridXValues = props.gridXValues,
      gridYValues = props.gridYValues,
      lineWidth = props.lineWidth,
      enableArea = props.enableArea,
      areaOpacity = props.areaOpacity,
      areaBlendMode = props.areaBlendMode,
      enablePoints = props.enablePoints,
      pointSymbol = props.pointSymbol,
      pointSize = props.pointSize,
      pointColor = props.pointColor,
      pointBorderWidth = props.pointBorderWidth,
      pointBorderColor = props.pointBorderColor,
      enablePointLabel = props.enablePointLabel,
      pointLabel = props.pointLabel,
      pointLabelYOffset = props.pointLabelYOffset,
      defs = props.defs,
      fill = props.fill,
      markers = props.markers,
      legends = props.legends,
      isInteractive = props.isInteractive,
      useMesh = props.useMesh,
      debugMesh = props.debugMesh,
      onMouseEnter = props.onMouseEnter,
      onMouseMove = props.onMouseMove,
      onMouseLeave = props.onMouseLeave,
      onClick = props.onClick,
      tooltip = props.tooltip,
      enableSlices = props.enableSlices,
      debugSlices = props.debugSlices,
      sliceTooltip = props.sliceTooltip,
      enableCrosshair = props.enableCrosshair,
      crosshairType = props.crosshairType,
      role = props.role;

  var _useDimensions = (0,nivo_core_es/* useDimensions */.Bs)(width, height, partialMargin),
      margin = _useDimensions.margin,
      innerWidth = _useDimensions.innerWidth,
      innerHeight = _useDimensions.innerHeight,
      outerWidth = _useDimensions.outerWidth,
      outerHeight = _useDimensions.outerHeight;

  var _useLine = useLine({
    data: data,
    xScale: xScaleSpec,
    xFormat: xFormat,
    yScale: yScaleSpec,
    yFormat: yFormat,
    width: innerWidth,
    height: innerHeight,
    colors: colors,
    curve: curve,
    areaBaselineValue: areaBaselineValue,
    pointColor: pointColor,
    pointBorderColor: pointBorderColor,
    enableSlices: enableSlices
  }),
      legendData = _useLine.legendData,
      toggleSerie = _useLine.toggleSerie,
      lineGenerator = _useLine.lineGenerator,
      areaGenerator = _useLine.areaGenerator,
      series = _useLine.series,
      xScale = _useLine.xScale,
      yScale = _useLine.yScale,
      slices = _useLine.slices,
      points = _useLine.points;

  var theme = (0,nivo_core_es/* useTheme */.Fg)();
  var getPointColor = (0,nivo_colors_es/* useInheritedColor */.Bf)(pointColor, theme);
  var getPointBorderColor = (0,nivo_colors_es/* useInheritedColor */.Bf)(pointBorderColor, theme);

  var _useState = (0,react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      currentPoint = _useState2[0],
      setCurrentPoint = _useState2[1];

  var _useState3 = (0,react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      currentSlice = _useState4[0],
      setCurrentSlice = _useState4[1];

  var layerById = {
    grid: (0,jsx_runtime.jsx)(nivo_axes_es/* Grid */.rj, {
      theme: theme,
      width: innerWidth,
      height: innerHeight,
      xScale: enableGridX ? xScale : null,
      yScale: enableGridY ? yScale : null,
      xValues: gridXValues,
      yValues: gridYValues
    }, "grid"),
    markers: (0,jsx_runtime.jsx)(nivo_core_es/* CartesianMarkers */.TL, {
      markers: markers,
      width: innerWidth,
      height: innerHeight,
      xScale: xScale,
      yScale: yScale,
      theme: theme
    }, "markers"),
    axes: (0,jsx_runtime.jsx)(nivo_axes_es/* Axes */.dk, {
      xScale: xScale,
      yScale: yScale,
      width: innerWidth,
      height: innerHeight,
      theme: theme,
      top: axisTop,
      right: axisRight,
      bottom: axisBottom,
      left: axisLeft
    }, "axes"),
    areas: null,
    lines: (0,jsx_runtime.jsx)(Lines$1, {
      lines: series,
      lineGenerator: lineGenerator,
      lineWidth: lineWidth
    }, "lines"),
    slices: null,
    points: null,
    crosshair: null,
    mesh: null,
    legends: legends.map(function (legend, i) {
      return (0,jsx_runtime.jsx)(nivo_legends_es/* BoxLegendSvg */.$6, _objectSpread2(_objectSpread2({}, legend), {}, {
        containerWidth: innerWidth,
        containerHeight: innerHeight,
        data: legend.data || legendData,
        theme: theme,
        toggleSerie: legend.toggleSerie ? toggleSerie : undefined
      }), "legend.".concat(i));
    })
  };
  var boundDefs = (0,nivo_core_es/* bindDefs */.yU)(defs, series, fill);

  if (enableArea) {
    layerById.areas = (0,jsx_runtime.jsx)(Areas$1, {
      areaGenerator: areaGenerator,
      areaOpacity: areaOpacity,
      areaBlendMode: areaBlendMode,
      lines: series
    }, "areas");
  }

  if (isInteractive && enableSlices !== false) {
    layerById.slices = (0,jsx_runtime.jsx)(Slices$1, {
      slices: slices,
      axis: enableSlices,
      debug: debugSlices,
      height: innerHeight,
      tooltip: sliceTooltip,
      current: currentSlice,
      setCurrent: setCurrentSlice
    }, "slices");
  }

  if (enablePoints) {
    layerById.points = (0,jsx_runtime.jsx)(Points$1, {
      points: points,
      symbol: pointSymbol,
      size: pointSize,
      color: getPointColor,
      borderWidth: pointBorderWidth,
      borderColor: getPointBorderColor,
      enableLabel: enablePointLabel,
      label: pointLabel,
      labelYOffset: pointLabelYOffset
    }, "points");
  }

  if (isInteractive && enableCrosshair) {
    if (currentPoint !== null) {
      layerById.crosshair = (0,jsx_runtime.jsx)(nivo_tooltip_es/* Crosshair */.YS, {
        width: innerWidth,
        height: innerHeight,
        x: currentPoint.x,
        y: currentPoint.y,
        type: crosshairType
      }, "crosshair");
    }

    if (currentSlice !== null) {
      layerById.crosshair = (0,jsx_runtime.jsx)(nivo_tooltip_es/* Crosshair */.YS, {
        width: innerWidth,
        height: innerHeight,
        x: currentSlice.x,
        y: currentSlice.y,
        type: enableSlices
      }, "crosshair");
    }
  }

  if (isInteractive && useMesh && enableSlices === false) {
    layerById.mesh = (0,jsx_runtime.jsx)(Mesh$1, {
      points: points,
      width: innerWidth,
      height: innerHeight,
      margin: margin,
      current: currentPoint,
      setCurrent: setCurrentPoint,
      onMouseEnter: onMouseEnter,
      onMouseMove: onMouseMove,
      onMouseLeave: onMouseLeave,
      onClick: onClick,
      tooltip: tooltip,
      debug: debugMesh
    }, "mesh");
  }

  return (0,jsx_runtime.jsx)(nivo_core_es/* SvgWrapper */.tM, {
    defs: boundDefs,
    width: outerWidth,
    height: outerHeight,
    margin: margin,
    role: role,
    children: layers.map(function (layer, i) {
      if (typeof layer === 'function') {
        return (0,jsx_runtime.jsx)(react.Fragment, {
          children: layer(_objectSpread2(_objectSpread2({}, props), {}, {
            innerWidth: innerWidth,
            innerHeight: innerHeight,
            series: series,
            slices: slices,
            points: points,
            xScale: xScale,
            yScale: yScale,
            lineGenerator: lineGenerator,
            areaGenerator: areaGenerator,
            currentPoint: currentPoint,
            setCurrentPoint: setCurrentPoint,
            currentSlice: currentSlice,
            setCurrentSlice: setCurrentSlice
          }))
        }, i);
      }

      return layerById[layer];
    })
  });
};

Line.defaultProps = LineDefaultProps;
var Line$1 = (0,nivo_core_es/* withContainer */.li)(Line);

var ResponsiveLine = function ResponsiveLine(props) {
  return jsx(ResponsiveWrapper, {
    children: function children(_ref) {
      var width = _ref.width,
          height = _ref.height;
      return jsx(Line$1, _objectSpread2({
        width: width,
        height: height
      }, props));
    }
  });
};

var LineCanvas = function LineCanvas(_ref) {
  var width = _ref.width,
      height = _ref.height,
      partialMargin = _ref.margin,
      pixelRatio = _ref.pixelRatio,
      data = _ref.data,
      xScaleSpec = _ref.xScale,
      xFormat = _ref.xFormat,
      yScaleSpec = _ref.yScale,
      yFormat = _ref.yFormat,
      curve = _ref.curve,
      layers = _ref.layers,
      colors = _ref.colors,
      lineWidth = _ref.lineWidth,
      enableArea = _ref.enableArea,
      areaBaselineValue = _ref.areaBaselineValue,
      areaOpacity = _ref.areaOpacity,
      enablePoints = _ref.enablePoints,
      pointSize = _ref.pointSize,
      pointColor = _ref.pointColor,
      pointBorderWidth = _ref.pointBorderWidth,
      pointBorderColor = _ref.pointBorderColor,
      enableGridX = _ref.enableGridX,
      gridXValues = _ref.gridXValues,
      enableGridY = _ref.enableGridY,
      gridYValues = _ref.gridYValues,
      axisTop = _ref.axisTop,
      axisRight = _ref.axisRight,
      axisBottom = _ref.axisBottom,
      axisLeft = _ref.axisLeft,
      legends = _ref.legends,
      isInteractive = _ref.isInteractive,
      debugMesh = _ref.debugMesh,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      tooltip = _ref.tooltip,
      canvasRef = _ref.canvasRef;
  var canvasEl = (0,react.useRef)(null);

  var _useDimensions = (0,nivo_core_es/* useDimensions */.Bs)(width, height, partialMargin),
      margin = _useDimensions.margin,
      innerWidth = _useDimensions.innerWidth,
      innerHeight = _useDimensions.innerHeight,
      outerWidth = _useDimensions.outerWidth,
      outerHeight = _useDimensions.outerHeight;

  var theme = (0,nivo_core_es/* useTheme */.Fg)();

  var _useState = (0,react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      currentPoint = _useState2[0],
      setCurrentPoint = _useState2[1];

  var _useLine = useLine({
    data: data,
    xScale: xScaleSpec,
    xFormat: xFormat,
    yScale: yScaleSpec,
    yFormat: yFormat,
    width: innerWidth,
    height: innerHeight,
    colors: colors,
    curve: curve,
    areaBaselineValue: areaBaselineValue,
    pointColor: pointColor,
    pointBorderColor: pointBorderColor
  }),
      lineGenerator = _useLine.lineGenerator,
      areaGenerator = _useLine.areaGenerator,
      series = _useLine.series,
      xScale = _useLine.xScale,
      yScale = _useLine.yScale,
      points = _useLine.points;

  var _useVoronoiMesh = (0,nivo_voronoi_es/* useVoronoiMesh */.ZR)({
    points: points,
    width: innerWidth,
    height: innerHeight,
    debug: debugMesh
  }),
      delaunay = _useVoronoiMesh.delaunay,
      voronoi = _useVoronoiMesh.voronoi;

  (0,react.useEffect)(function () {
    if (canvasRef) {
      canvasRef.current = canvasEl.current;
    }

    canvasEl.current.width = outerWidth * pixelRatio;
    canvasEl.current.height = outerHeight * pixelRatio;
    var ctx = canvasEl.current.getContext('2d');
    ctx.scale(pixelRatio, pixelRatio);
    ctx.fillStyle = theme.background;
    ctx.fillRect(0, 0, outerWidth, outerHeight);
    ctx.translate(margin.left, margin.top);
    layers.forEach(function (layer) {
      if (typeof layer === 'function') {
        layer({
          ctx: ctx,
          innerWidth: innerWidth,
          innerHeight: innerHeight,
          series: series,
          points: points,
          xScale: xScale,
          yScale: yScale,
          lineWidth: lineWidth,
          lineGenerator: lineGenerator,
          areaGenerator: areaGenerator,
          currentPoint: currentPoint,
          setCurrentPoint: setCurrentPoint
        });
      }

      if (layer === 'grid' && theme.grid.line.strokeWidth > 0) {
        ctx.lineWidth = theme.grid.line.strokeWidth;
        ctx.strokeStyle = theme.grid.line.stroke;
        enableGridX && (0,nivo_axes_es/* renderGridLinesToCanvas */.FA)(ctx, {
          width: innerWidth,
          height: innerHeight,
          scale: xScale,
          axis: 'x',
          values: gridXValues
        });
        enableGridY && (0,nivo_axes_es/* renderGridLinesToCanvas */.FA)(ctx, {
          width: innerWidth,
          height: innerHeight,
          scale: yScale,
          axis: 'y',
          values: gridYValues
        });
      }

      if (layer === 'axes') {
        (0,nivo_axes_es/* renderAxesToCanvas */.DZ)(ctx, {
          xScale: xScale,
          yScale: yScale,
          width: innerWidth,
          height: innerHeight,
          top: axisTop,
          right: axisRight,
          bottom: axisBottom,
          left: axisLeft,
          theme: theme
        });
      }

      if (layer === 'areas' && enableArea === true) {
        ctx.save();
        ctx.globalAlpha = areaOpacity;
        areaGenerator.context(ctx);
        series.forEach(function (serie) {
          ctx.fillStyle = serie.color;
          ctx.beginPath();
          areaGenerator(serie.data.map(function (d) {
            return d.position;
          }));
          ctx.fill();
        });
        ctx.restore();
      }

      if (layer === 'lines') {
        lineGenerator.context(ctx);
        series.forEach(function (serie) {
          ctx.strokeStyle = serie.color;
          ctx.lineWidth = lineWidth;
          ctx.beginPath();
          lineGenerator(serie.data.map(function (d) {
            return d.position;
          }));
          ctx.stroke();
        });
      }

      if (layer === 'points' && enablePoints === true && pointSize > 0) {
        points.forEach(function (point) {
          ctx.fillStyle = point.color;
          ctx.beginPath();
          ctx.arc(point.x, point.y, pointSize / 2, 0, 2 * Math.PI);
          ctx.fill();

          if (pointBorderWidth > 0) {
            ctx.strokeStyle = point.borderColor;
            ctx.lineWidth = pointBorderWidth;
            ctx.stroke();
          }
        });
      }

      if (layer === 'mesh' && debugMesh === true) {
        (0,nivo_voronoi_es/* renderVoronoiToCanvas */.qF)(ctx, voronoi);

        if (currentPoint) {
          (0,nivo_voronoi_es/* renderVoronoiCellToCanvas */.r$)(ctx, voronoi, currentPoint.index);
        }
      }

      if (layer === 'legends') {
        var legendData = series.map(function (serie) {
          return {
            id: serie.id,
            label: serie.id,
            color: serie.color
          };
        }).reverse();
        legends.forEach(function (legend) {
          (0,nivo_legends_es/* renderLegendToCanvas */.as)(ctx, _objectSpread2(_objectSpread2({}, legend), {}, {
            data: legend.data || legendData,
            containerWidth: innerWidth,
            containerHeight: innerHeight,
            theme: theme
          }));
        });
      }
    });
  }, [canvasEl, outerWidth, outerHeight, layers, theme, lineGenerator, series, xScale, yScale, enableGridX, gridXValues, enableGridY, gridYValues, axisTop, axisRight, axisBottom, axisLeft, legends, points, enablePoints, pointSize, currentPoint]);
  var getPointFromMouseEvent = (0,react.useCallback)(function (event) {
    var _getRelativeCursor = (0,nivo_core_es/* getRelativeCursor */.P6)(canvasEl.current, event),
        _getRelativeCursor2 = _slicedToArray(_getRelativeCursor, 2),
        x = _getRelativeCursor2[0],
        y = _getRelativeCursor2[1];

    if (!(0,nivo_core_es/* isCursorInRect */.zn)(margin.left, margin.top, innerWidth, innerHeight, x, y)) return null;
    var pointIndex = delaunay.find(x - margin.left, y - margin.top);
    return points[pointIndex];
  }, [canvasEl, margin, innerWidth, innerHeight, delaunay]);

  var _useTooltip = (0,nivo_tooltip_es/* useTooltip */.lL)(),
      showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
      hideTooltip = _useTooltip.hideTooltip;

  var handleMouseHover = (0,react.useCallback)(function (event) {
    var point = getPointFromMouseEvent(event);
    setCurrentPoint(point);

    if (point) {
      showTooltipFromEvent((0,react.createElement)(tooltip, {
        point: point
      }), event);
    } else {
      hideTooltip();
    }
  }, [getPointFromMouseEvent, setCurrentPoint, showTooltipFromEvent, hideTooltip, tooltip]);
  var handleMouseLeave = (0,react.useCallback)(function (event) {
    hideTooltip();
    setCurrentPoint(null);
    currentPoint && onMouseLeave && onMouseLeave(currentPoint, event);
  }, [hideTooltip, setCurrentPoint, onMouseLeave]);
  var handleClick = (0,react.useCallback)(function (event) {
    if (onClick) {
      var point = getPointFromMouseEvent(event);
      point && onClick(point, event);
    }
  }, [getPointFromMouseEvent, onClick]);
  return (0,jsx_runtime.jsx)("canvas", {
    ref: canvasEl,
    width: outerWidth * pixelRatio,
    height: outerHeight * pixelRatio,
    style: {
      width: outerWidth,
      height: outerHeight,
      cursor: isInteractive ? 'auto' : 'normal'
    },
    onMouseEnter: isInteractive ? handleMouseHover : undefined,
    onMouseMove: isInteractive ? handleMouseHover : undefined,
    onMouseLeave: isInteractive ? handleMouseLeave : undefined,
    onClick: isInteractive ? handleClick : undefined
  });
};

LineCanvas.defaultProps = LineCanvasDefaultProps;
var LineCanvasWithContainer = (0,nivo_core_es/* withContainer */.li)(LineCanvas);
var LineCanvas$1 = (0,react.forwardRef)(function (props, ref) {
  return (0,jsx_runtime.jsx)(LineCanvasWithContainer, _objectSpread2(_objectSpread2({}, props), {}, {
    canvasRef: ref
  }));
});

var ResponsiveLineCanvas = function ResponsiveLineCanvas(props, ref) {
  return (0,jsx_runtime.jsx)(nivo_core_es/* ResponsiveWrapper */.d, {
    children: function children(_ref) {
      var width = _ref.width,
          height = _ref.height;
      return (0,jsx_runtime.jsx)(LineCanvas$1, _objectSpread2(_objectSpread2({
        width: width,
        height: height
      }, props), {}, {
        ref: ref
      }));
    }
  });
};

var ResponsiveLineCanvas$1 = (0,react.forwardRef)(ResponsiveLineCanvas);

;// CONCATENATED MODULE: ./src/components/blockly/fields/Line.tsx

/* harmony default export */ var fields_Line = (Line$1);

/***/ })

}]);