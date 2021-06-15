(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8029],{

/***/ 78029:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ fields_Bar; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-motion/lib/react-motion.js
var react_motion = __webpack_require__(44235);
// EXTERNAL MODULE: ./node_modules/@nivo/core/dist/nivo-core.es.js + 29 modules
var nivo_core_es = __webpack_require__(50928);
// EXTERNAL MODULE: ./node_modules/@nivo/axes/dist/nivo-axes.es.js + 8 modules
var nivo_axes_es = __webpack_require__(33048);
// EXTERNAL MODULE: ./node_modules/@nivo/legends/dist/nivo-legends.es.js
var nivo_legends_es = __webpack_require__(26729);
// EXTERNAL MODULE: ./node_modules/@nivo/recompose/dist/nivo-recompose.es.js
var nivo_recompose_es = __webpack_require__(21566);
// EXTERNAL MODULE: ./node_modules/@nivo/scales/dist/nivo-scales.es.js + 24 modules
var nivo_scales_es = __webpack_require__(30982);
// EXTERNAL MODULE: ./node_modules/d3-scale/src/band.js + 1 modules
var band = __webpack_require__(87286);
;// CONCATENATED MODULE: ./node_modules/d3-shape/src/array.js
var slice = Array.prototype.slice;
// EXTERNAL MODULE: ./node_modules/d3-shape/src/constant.js
var constant = __webpack_require__(21235);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/offset/none.js
var none = __webpack_require__(91662);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/order/none.js
var order_none = __webpack_require__(4775);
;// CONCATENATED MODULE: ./node_modules/d3-shape/src/stack.js





function stackValue(d, key) {
  return d[key];
}

/* harmony default export */ function stack() {
  var keys = (0,constant/* default */.Z)([]),
      order = order_none/* default */.Z,
      offset = none/* default */.Z,
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }

      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function (_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : (0,constant/* default */.Z)(slice.call(_)), stack) : keys;
  };

  stack.value = function (_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), stack) : value;
  };

  stack.order = function (_) {
    return arguments.length ? (order = _ == null ? order_none/* default */.Z : typeof _ === "function" ? _ : (0,constant/* default */.Z)(slice.call(_)), stack) : order;
  };

  stack.offset = function (_) {
    return arguments.length ? (offset = _ == null ? none/* default */.Z : _, stack) : offset;
  };

  return stack;
}
// EXTERNAL MODULE: ./node_modules/d3-shape/src/offset/diverging.js
var diverging = __webpack_require__(69279);
// EXTERNAL MODULE: ./node_modules/lodash/uniqBy.js
var uniqBy = __webpack_require__(45578);
var uniqBy_default = /*#__PURE__*/__webpack_require__.n(uniqBy);
// EXTERNAL MODULE: ./node_modules/@nivo/colors/dist/nivo-colors.es.js + 2 modules
var nivo_colors_es = __webpack_require__(68204);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@nivo/tooltip/dist/nivo-tooltip.es.js
var nivo_tooltip_es = __webpack_require__(62529);
// EXTERNAL MODULE: ./node_modules/@nivo/annotations/dist/nivo-annotations.es.js
var nivo_annotations_es = __webpack_require__(80480);
;// CONCATENATED MODULE: ./node_modules/@nivo/bar/dist/nivo-bar.es.js















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
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
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

var getIndexScale = function getIndexScale(data, getIndex, range, padding, indexScale) {
  return (0,band/* default */.Z)().domain(data.map(getIndex)).range(range).round(Boolean(indexScale.round)).padding(padding);
};

var normalizeData = function normalizeData(data, keys) {
  return data.map(function (item) {
    return _objectSpread2(_objectSpread2({}, keys.reduce(function (acc, key) {
      acc[key] = null;
      return acc;
    }, {})), item);
  });
};

var filterNullValues = function filterNullValues(data) {
  return Object.keys(data).reduce(function (acc, key) {
    if (data[key]) {
      acc[key] = data[key];
    }

    return acc;
  }, {});
};

var gt = function gt(value, other) {
  return value > other;
};

var lt = function lt(value, other) {
  return value < other;
};

var flatten = function flatten(array) {
  var _ref;

  return (_ref = []).concat.apply(_ref, _toConsumableArray(array));
};

var range = function range(start, end) {
  return Array.from(' '.repeat(end - start), function (_, index) {
    return start + index;
  });
};

var clampToZero = function clampToZero(value) {
  return gt(value, 0) ? 0 : value;
};

var generateVerticalGroupedBars = function generateVerticalGroupedBars(_ref2, barWidth, reverse, yRef) {
  var data = _ref2.data,
      getIndex = _ref2.getIndex,
      keys = _ref2.keys,
      getColor = _ref2.getColor,
      innerPadding = _ref2.innerPadding,
      xScale = _ref2.xScale,
      yScale = _ref2.yScale;
  var compare = reverse ? lt : gt;

  var getY = function getY(d) {
    return compare(d, 0) ? yScale(d) : yRef;
  };

  var getHeight = function getHeight(d, y) {
    return compare(d, 0) ? yRef - y : yScale(d) - yRef;
  };

  var cleanedData = data.map(filterNullValues);
  var bars = flatten(keys.map(function (key, i) {
    return range(0, xScale.domain().length).map(function (index) {
      var x = xScale(getIndex(data[index])) + barWidth * i + innerPadding * i;
      var y = getY(data[index][key]);
      var barHeight = getHeight(data[index][key], y);
      var barData = {
        id: key,
        value: data[index][key],
        index: index,
        indexValue: getIndex(data[index]),
        data: cleanedData[index]
      };
      return {
        key: "".concat(key, ".").concat(barData.indexValue),
        data: barData,
        x: x,
        y: y,
        width: barWidth,
        height: barHeight,
        color: getColor(barData)
      };
    });
  }));
  return bars;
};

var generateHorizontalGroupedBars = function generateHorizontalGroupedBars(_ref3, barHeight, reverse, xRef) {
  var data = _ref3.data,
      getIndex = _ref3.getIndex,
      keys = _ref3.keys,
      getColor = _ref3.getColor,
      _ref3$innerPadding = _ref3.innerPadding,
      innerPadding = _ref3$innerPadding === void 0 ? 0 : _ref3$innerPadding,
      xScale = _ref3.xScale,
      yScale = _ref3.yScale;
  var compare = reverse ? lt : gt;

  var getX = function getX(d) {
    return compare(d, 0) ? xRef : xScale(d);
  };

  var getWidth = function getWidth(d, x) {
    return compare(d, 0) ? xScale(d) - xRef : xRef - x;
  };

  var cleanedData = data.map(filterNullValues);
  var bars = flatten(keys.map(function (key, i) {
    return range(0, yScale.domain().length).map(function (index) {
      var x = getX(data[index][key]);
      var y = yScale(getIndex(data[index])) + barHeight * i + innerPadding * i;
      var barWidth = getWidth(data[index][key], x);
      var barData = {
        id: key,
        value: data[index][key],
        index: index,
        indexValue: getIndex(data[index]),
        data: cleanedData[index]
      };
      return {
        key: "".concat(key, ".").concat(barData.indexValue),
        data: barData,
        x: x,
        y: y,
        width: barWidth,
        height: barHeight,
        color: getColor(barData)
      };
    });
  }));
  return bars;
};

var generateGroupedBars = function generateGroupedBars(_ref4) {
  var layout = _ref4.layout,
      keys = _ref4.keys,
      minValue = _ref4.minValue,
      maxValue = _ref4.maxValue,
      reverse = _ref4.reverse,
      width = _ref4.width,
      height = _ref4.height,
      _ref4$padding = _ref4.padding,
      padding = _ref4$padding === void 0 ? 0 : _ref4$padding,
      _ref4$innerPadding = _ref4.innerPadding,
      innerPadding = _ref4$innerPadding === void 0 ? 0 : _ref4$innerPadding,
      valueScale = _ref4.valueScale,
      indexScaleConfig = _ref4.indexScale,
      props = _objectWithoutProperties(_ref4, ["layout", "keys", "minValue", "maxValue", "reverse", "width", "height", "padding", "innerPadding", "valueScale", "indexScale"]);

  var data = normalizeData(props.data, keys);

  var _ref5 = layout === 'vertical' ? ['y', [0, width]] : ['x', [height, 0]],
      _ref6 = _slicedToArray(_ref5, 2),
      axis = _ref6[0],
      range = _ref6[1];

  var indexScale = getIndexScale(data, props.getIndex, range, padding, indexScaleConfig);

  var scaleSpec = _objectSpread2({
    axis: axis,
    max: maxValue,
    min: minValue,
    reverse: reverse
  }, valueScale);

  var clampMin = scaleSpec.min === 'auto' ? clampToZero : function (value) {
    return value;
  };
  var values = data.reduce(function (acc, entry) {
    return [].concat(_toConsumableArray(acc), _toConsumableArray(keys.map(function (k) {
      return entry[k];
    })));
  }, []).filter(Boolean);
  var min = clampMin(Math.min.apply(Math, _toConsumableArray(values)));
  var max = Math.max.apply(Math, _toConsumableArray(values));
  var scale = (0,nivo_scales_es/* computeScale */.ZN)(scaleSpec, _defineProperty({}, axis, {
    min: min,
    max: max
  }), width, height);

  var _ref7 = layout === 'vertical' ? [indexScale, scale] : [scale, indexScale],
      _ref8 = _slicedToArray(_ref7, 2),
      xScale = _ref8[0],
      yScale = _ref8[1];

  var bandwidth = (indexScale.bandwidth() - innerPadding * (keys.length - 1)) / keys.length;
  var params = [_objectSpread2(_objectSpread2({}, props), {}, {
    data: data,
    keys: keys,
    innerPadding: innerPadding,
    xScale: xScale,
    yScale: yScale
  }), bandwidth, scaleSpec.reverse, scale(0)];
  var bars = bandwidth > 0 ? layout === 'vertical' ? generateVerticalGroupedBars.apply(void 0, params) : generateHorizontalGroupedBars.apply(void 0, params) : [];
  return {
    xScale: xScale,
    yScale: yScale,
    bars: bars
  };
};

var flattenDeep = function flattenDeep(array) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return depth > 0 ? array.reduce(function (acc, value) {
    return acc.concat(Array.isArray(value) ? flattenDeep(value, depth - 1) : value);
  }, []) : array.slice();
};

var generateVerticalStackedBars = function generateVerticalStackedBars(_ref, barWidth, reverse) {
  var getIndex = _ref.getIndex,
      getColor = _ref.getColor,
      innerPadding = _ref.innerPadding,
      stackedData = _ref.stackedData,
      xScale = _ref.xScale,
      yScale = _ref.yScale;

  var getY = function getY(d) {
    return yScale(d[reverse ? 0 : 1]);
  };

  var getHeight = function getHeight(d, y) {
    return yScale(d[reverse ? 1 : 0]) - y;
  };

  var bars = flattenDeep(stackedData.map(function (stackedDataItem) {
    return xScale.domain().map(function (index, i) {
      var d = stackedDataItem[i];
      var x = xScale(getIndex(d.data));
      var y = getY(d) + innerPadding * 0.5;
      var barHeight = getHeight(d, y) - innerPadding;
      var barData = {
        id: stackedDataItem.key,
        value: d.data[stackedDataItem.key],
        index: i,
        indexValue: index,
        data: filterNullValues(d.data)
      };
      return {
        key: "".concat(stackedDataItem.key, ".").concat(index),
        data: barData,
        x: x,
        y: y,
        width: barWidth,
        height: barHeight,
        color: getColor(barData)
      };
    });
  }));
  return bars;
};

var generateHorizontalStackedBars = function generateHorizontalStackedBars(_ref2, barHeight, reverse) {
  var getIndex = _ref2.getIndex,
      getColor = _ref2.getColor,
      innerPadding = _ref2.innerPadding,
      stackedData = _ref2.stackedData,
      xScale = _ref2.xScale,
      yScale = _ref2.yScale;

  var getX = function getX(d) {
    return xScale(d[reverse ? 1 : 0]);
  };

  var getWidth = function getWidth(d, x) {
    return xScale(d[reverse ? 0 : 1]) - x;
  };

  var bars = flattenDeep(stackedData.map(function (stackedDataItem) {
    return yScale.domain().map(function (index, i) {
      var d = stackedDataItem[i];
      var y = yScale(getIndex(d.data));
      var x = getX(d) + innerPadding * 0.5;
      var barWidth = getWidth(d, x) - innerPadding;
      var barData = {
        id: stackedDataItem.key,
        value: d.data[stackedDataItem.key],
        index: i,
        indexValue: index,
        data: filterNullValues(d.data)
      };
      return {
        key: "".concat(stackedDataItem.key, ".").concat(index),
        data: barData,
        x: x,
        y: y,
        width: barWidth,
        height: barHeight,
        color: getColor(barData)
      };
    });
  }));
  return bars;
};

var generateStackedBars = function generateStackedBars(_ref3) {
  var data = _ref3.data,
      keys = _ref3.keys,
      layout = _ref3.layout,
      minValue = _ref3.minValue,
      maxValue = _ref3.maxValue,
      reverse = _ref3.reverse,
      width = _ref3.width,
      height = _ref3.height,
      _ref3$padding = _ref3.padding,
      padding = _ref3$padding === void 0 ? 0 : _ref3$padding,
      valueScale = _ref3.valueScale,
      indexScaleConfig = _ref3.indexScale,
      props = _objectWithoutProperties(_ref3, ["data", "keys", "layout", "minValue", "maxValue", "reverse", "width", "height", "padding", "valueScale", "indexScale"]);

  var stackedData = stack().keys(keys).offset(diverging/* default */.Z)(normalizeData(data, keys));

  var _ref4 = layout === 'vertical' ? ['y', [0, width]] : ['x', [height, 0]],
      _ref5 = _slicedToArray(_ref4, 2),
      axis = _ref5[0],
      range = _ref5[1];

  var indexScale = getIndexScale(data, props.getIndex, range, padding, indexScaleConfig);

  var scaleSpec = _objectSpread2({
    axis: axis,
    max: maxValue,
    min: minValue,
    reverse: reverse
  }, valueScale);

  var values = flattenDeep(stackedData, 2);
  var min = Math.min.apply(Math, _toConsumableArray(values));
  var max = Math.max.apply(Math, _toConsumableArray(values));
  var scale = (0,nivo_scales_es/* computeScale */.ZN)(scaleSpec, _defineProperty({}, axis, {
    min: min,
    max: max
  }), width, height);

  var _ref6 = layout === 'vertical' ? [indexScale, scale] : [scale, indexScale],
      _ref7 = _slicedToArray(_ref6, 2),
      xScale = _ref7[0],
      yScale = _ref7[1];

  var innerPadding = props.innerPadding > 0 ? props.innerPadding : 0;
  var bandwidth = indexScale.bandwidth();
  var params = [_objectSpread2(_objectSpread2({}, props), {}, {
    innerPadding: innerPadding,
    stackedData: stackedData,
    xScale: xScale,
    yScale: yScale
  }), bandwidth, scaleSpec.reverse];
  var bars = bandwidth > 0 ? layout === 'vertical' ? generateVerticalStackedBars.apply(void 0, params) : generateHorizontalStackedBars.apply(void 0, params) : [];
  return {
    xScale: xScale,
    yScale: yScale,
    bars: bars
  };
};

var getLegendDataForKeys = function getLegendDataForKeys(bars, layout, direction, groupMode, reverse) {
  var data = uniqBy_default()(bars.map(function (bar) {
    return {
      id: bar.data.id,
      label: bar.data.label || bar.data.id,
      color: bar.color,
      fill: bar.data.fill
    };
  }), function (_ref) {
    var id = _ref.id;
    return id;
  });

  if (layout === 'vertical' && groupMode === 'stacked' && direction === 'column' && reverse !== true || layout === 'horizontal' && groupMode === 'stacked' && reverse === true) {
    data.reverse();
  }

  return data;
};

var getLegendDataForIndexes = function getLegendDataForIndexes(bars) {
  return uniqBy_default()(bars.map(function (bar) {
    return {
      id: bar.data.indexValue,
      label: bar.data.label || bar.data.indexValue,
      color: bar.color,
      fill: bar.data.fill
    };
  }), function (_ref2) {
    var id = _ref2.id;
    return id;
  });
};

var getLegendData = function getLegendData(_ref3) {
  var from = _ref3.from,
      bars = _ref3.bars,
      layout = _ref3.layout,
      direction = _ref3.direction,
      groupMode = _ref3.groupMode,
      reverse = _ref3.reverse;

  if (from === 'indexes') {
    return getLegendDataForIndexes(bars);
  }

  return getLegendDataForKeys(bars, layout, direction, groupMode, reverse);
};

var BarItem = function BarItem(_ref) {
  var data = _ref.data,
      x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height,
      borderRadius = _ref.borderRadius,
      color = _ref.color,
      borderWidth = _ref.borderWidth,
      borderColor = _ref.borderColor,
      label = _ref.label,
      shouldRenderLabel = _ref.shouldRenderLabel,
      labelColor = _ref.labelColor,
      showTooltip = _ref.showTooltip,
      hideTooltip = _ref.hideTooltip,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      tooltip = _ref.tooltip,
      theme = _ref.theme;

  var handleTooltip = function handleTooltip(e) {
    return showTooltip(tooltip, e);
  };

  var handleMouseEnter = function handleMouseEnter(e) {
    onMouseEnter(data, e);
    showTooltip(tooltip, e);
  };

  var handleMouseLeave = function handleMouseLeave(e) {
    onMouseLeave(data, e);
    hideTooltip(e);
  };

  return react.createElement("g", {
    transform: "translate(".concat(x, ", ").concat(y, ")")
  }, react.createElement("rect", {
    width: width,
    height: height,
    rx: borderRadius,
    ry: borderRadius,
    fill: data.fill ? data.fill : color,
    strokeWidth: borderWidth,
    stroke: borderColor,
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleTooltip,
    onMouseLeave: handleMouseLeave,
    onClick: onClick
  }), shouldRenderLabel && react.createElement("text", {
    x: width / 2,
    y: height / 2,
    textAnchor: "middle",
    dominantBaseline: "central",
    style: _objectSpread2(_objectSpread2({}, theme.labels.text), {}, {
      pointerEvents: 'none',
      fill: labelColor
    })
  }, label));
};

var enhance = (0,nivo_recompose_es/* compose */.qC)((0,nivo_recompose_es/* withPropsOnChange */.x3)(['data', 'color', 'onClick'], function (_ref2) {
  var data = _ref2.data,
      color = _ref2.color,
      _onClick = _ref2.onClick;
  return {
    onClick: function onClick(event) {
      return _onClick(_objectSpread2({
        color: color
      }, data), event);
    }
  };
}), (0,nivo_recompose_es/* withPropsOnChange */.x3)(['data', 'color', 'theme', 'tooltip', 'getTooltipLabel', 'tooltipFormat'], function (_ref3) {
  var data = _ref3.data,
      color = _ref3.color,
      theme = _ref3.theme,
      tooltip = _ref3.tooltip,
      getTooltipLabel = _ref3.getTooltipLabel,
      tooltipFormat = _ref3.tooltipFormat;
  return {
    tooltip: react.createElement(nivo_tooltip_es/* BasicTooltip */._5, {
      id: getTooltipLabel(data),
      value: data.value,
      enableChip: true,
      color: color,
      theme: theme,
      format: tooltipFormat,
      renderContent: typeof tooltip === 'function' ? tooltip.bind(null, _objectSpread2({
        color: color,
        theme: theme
      }, data)) : null
    })
  };
}), nivo_recompose_es/* pure */.Le);
var BarItem$1 = enhance(BarItem);

var BarPropTypes = _objectSpread2(_objectSpread2({
  data: prop_types_default().arrayOf((prop_types_default()).object).isRequired,
  indexBy: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).func]).isRequired,
  getIndex: (prop_types_default()).func.isRequired,
  keys: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])).isRequired,
  layers: prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().oneOf(['grid', 'axes', 'bars', 'markers', 'legends', 'annotations']), (prop_types_default()).func])).isRequired,
  groupMode: prop_types_default().oneOf(['stacked', 'grouped']).isRequired,
  layout: prop_types_default().oneOf(['horizontal', 'vertical']).isRequired,
  reverse: (prop_types_default()).bool.isRequired,
  valueScale: nivo_scales_es/* scalePropType.isRequired */.t4.isRequired,
  indexScale: nivo_scales_es/* bandScalePropTypes.isRequired */.bo.isRequired,
  minValue: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().oneOf(['auto'])]).isRequired,
  maxValue: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().oneOf(['auto'])]).isRequired,
  padding: (prop_types_default()).number.isRequired,
  innerPadding: (prop_types_default()).number.isRequired,
  axisTop: nivo_axes_es/* axisPropType */.VT,
  axisRight: nivo_axes_es/* axisPropType */.VT,
  axisBottom: nivo_axes_es/* axisPropType */.VT,
  axisLeft: nivo_axes_es/* axisPropType */.VT,
  enableGridX: (prop_types_default()).bool.isRequired,
  enableGridY: (prop_types_default()).bool.isRequired,
  gridXValues: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]))]),
  gridYValues: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]))]),
  barComponent: (prop_types_default()).func.isRequired,
  enableLabel: (prop_types_default()).bool.isRequired,
  label: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).func]).isRequired,
  labelFormat: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).func]),
  getLabel: (prop_types_default()).func.isRequired,
  labelSkipWidth: (prop_types_default()).number.isRequired,
  labelSkipHeight: (prop_types_default()).number.isRequired,
  labelTextColor: nivo_colors_es/* inheritedColorPropType.isRequired */.UO.isRequired,
  getLabelTextColor: (prop_types_default()).func.isRequired,
  labelLinkColor: nivo_colors_es/* inheritedColorPropType.isRequired */.UO.isRequired,
  getLabelLinkColor: (prop_types_default()).func.isRequired,
  colors: nivo_colors_es/* ordinalColorsPropType.isRequired */.qi.isRequired,
  colorBy: nivo_colors_es/* colorPropertyAccessorPropType.isRequired */.t.isRequired,
  borderRadius: (prop_types_default()).number.isRequired,
  getColor: (prop_types_default()).func.isRequired
}, nivo_core_es/* defsPropTypes */._U), {}, {
  borderWidth: (prop_types_default()).number.isRequired,
  borderColor: nivo_colors_es/* inheritedColorPropType.isRequired */.UO.isRequired,
  getBorderColor: (prop_types_default()).func.isRequired,
  isInteractive: (prop_types_default()).bool,
  onClick: (prop_types_default()).func.isRequired,
  onMouseEnter: (prop_types_default()).func.isRequired,
  onMouseLeave: (prop_types_default()).func.isRequired,
  tooltipLabel: (prop_types_default()).func,
  getTooltipLabel: (prop_types_default()).func.isRequired,
  tooltipFormat: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  tooltip: (prop_types_default()).func,
  legends: prop_types_default().arrayOf(prop_types_default().shape(_objectSpread2({
    dataFrom: prop_types_default().oneOf(['indexes', 'keys']).isRequired
  }, nivo_legends_es/* LegendPropShape */.iQ))).isRequired,
  renderWrapper: (prop_types_default()).bool,
  pixelRatio: (prop_types_default()).number.isRequired
});

var BarSvgPropTypes = _objectSpread2(_objectSpread2({}, BarPropTypes), {}, {
  role: (prop_types_default()).string.isRequired
});

var BarDefaultProps = {
  indexBy: 'id',
  keys: ['value'],
  layers: ['grid', 'axes', 'bars', 'markers', 'legends', 'annotations'],
  groupMode: 'stacked',
  layout: 'vertical',
  reverse: false,
  minValue: 'auto',
  maxValue: 'auto',
  valueScale: {
    type: 'linear'
  },
  indexScale: {
    type: 'band',
    round: true
  },
  padding: 0.1,
  innerPadding: 0,
  axisBottom: {},
  axisLeft: {},
  enableGridX: false,
  enableGridY: true,
  barComponent: BarItem$1,
  enableLabel: true,
  label: 'value',
  labelSkipWidth: 0,
  labelSkipHeight: 0,
  labelLinkColor: 'theme',
  labelTextColor: 'theme',
  colors: {
    scheme: 'nivo'
  },
  colorBy: 'id',
  defs: [],
  fill: [],
  borderRadius: 0,
  borderWidth: 0,
  borderColor: {
    from: 'color'
  },
  isInteractive: true,
  onClick: nivo_core_es/* noop */.ZT,
  onMouseEnter: nivo_core_es/* noop */.ZT,
  onMouseLeave: nivo_core_es/* noop */.ZT,
  legends: [],
  annotations: [],
  pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1
};

var BarSvgDefaultProps = _objectSpread2(_objectSpread2({}, BarDefaultProps), {}, {
  role: 'img'
});

var enhance$1 = function enhance$1(Component) {
  return (0,nivo_recompose_es/* compose */.qC)((0,nivo_recompose_es/* defaultProps */.lG)(BarDefaultProps), (0,nivo_core_es/* withTheme */.Zz)(), (0,nivo_core_es/* withDimensions */.U6)(), (0,nivo_core_es/* withMotion */.Gt)(), (0,nivo_recompose_es/* withPropsOnChange */.x3)(['colors', 'colorBy'], function (_ref) {
    var colors = _ref.colors,
        colorBy = _ref.colorBy;
    return {
      getColor: (0,nivo_colors_es/* getOrdinalColorScale */.Kc)(colors, colorBy)
    };
  }), (0,nivo_recompose_es/* withPropsOnChange */.x3)(['indexBy'], function (_ref2) {
    var indexBy = _ref2.indexBy;
    return {
      getIndex: (0,nivo_core_es/* getPropertyAccessor */.Xc)(indexBy)
    };
  }), (0,nivo_recompose_es/* withPropsOnChange */.x3)(['labelTextColor', 'theme'], function (_ref3) {
    var labelTextColor = _ref3.labelTextColor,
        theme = _ref3.theme;
    return {
      getLabelTextColor: (0,nivo_colors_es/* getInheritedColorGenerator */.B3)(labelTextColor, theme)
    };
  }), (0,nivo_recompose_es/* withPropsOnChange */.x3)(['labelLinkColor', 'theme'], function (_ref4) {
    var labelLinkColor = _ref4.labelLinkColor,
        theme = _ref4.theme;
    return {
      getLabelLinkColor: (0,nivo_colors_es/* getInheritedColorGenerator */.B3)(labelLinkColor, theme)
    };
  }), (0,nivo_recompose_es/* withPropsOnChange */.x3)(['label', 'labelFormat'], function (_ref5) {
    var label = _ref5.label,
        labelFormat = _ref5.labelFormat;
    return {
      getLabel: (0,nivo_core_es/* getLabelGenerator */.ji)(label, labelFormat)
    };
  }), (0,nivo_recompose_es/* withPropsOnChange */.x3)(['borderColor', 'theme'], function (_ref6) {
    var borderColor = _ref6.borderColor,
        theme = _ref6.theme;
    return {
      getBorderColor: (0,nivo_colors_es/* getInheritedColorGenerator */.B3)(borderColor, theme)
    };
  }), (0,nivo_recompose_es/* withPropsOnChange */.x3)(['tooltipLabel'], function (_ref7) {
    var tooltipLabel = _ref7.tooltipLabel;

    var getTooltipLabel = function getTooltipLabel(d) {
      return "".concat(d.id, " - ").concat(d.indexValue);
    };

    if (typeof tooltipLabel === 'function') {
      getTooltipLabel = tooltipLabel;
    }

    return {
      getTooltipLabel: getTooltipLabel
    };
  }), nivo_recompose_es/* pure */.Le)(Component);
};

var BarAnnotations = function BarAnnotations(_ref) {
  var bars = _ref.bars,
      annotations = _ref.annotations,
      animate = _ref.animate,
      innerWidth = _ref.innerWidth,
      innerHeight = _ref.innerHeight,
      motionStiffness = _ref.motionStiffness,
      motionDamping = _ref.motionDamping;
  var boundAnnotations = (0,nivo_annotations_es/* useAnnotations */.O2)({
    items: bars,
    annotations: annotations,
    getPosition: function getPosition(bar) {
      return {
        x: bar.x + bar.width / 2,
        y: bar.y + bar.height / 2
      };
    },
    getDimensions: function getDimensions(bar, offset) {
      var width = bar.width + offset * 2;
      var height = bar.height + offset * 2;
      return {
        width: width,
        height: height,
        size: Math.max(width, height)
      };
    }
  });
  return boundAnnotations.map(function (annotation, i) {
    return react.createElement(nivo_annotations_es/* Annotation */.q6, Object.assign({
      key: i
    }, annotation, {
      containerWidth: innerWidth,
      containerHeight: innerHeight,
      animate: animate,
      motionStiffness: motionStiffness,
      motionDamping: motionDamping
    }));
  });
};

var barWillEnterHorizontal = function barWillEnterHorizontal(_ref) {
  var style = _ref.style;
  return {
    x: style.x.val,
    y: style.y.val,
    width: 0,
    height: style.height.val
  };
};

var barWillEnterVertical = function barWillEnterVertical(_ref2) {
  var style = _ref2.style;
  return {
    x: style.x.val,
    y: style.y.val + style.height.val,
    width: style.width.val,
    height: 0
  };
};

var barWillLeaveHorizontal = function barWillLeaveHorizontal(springConfig) {
  return function (_ref3) {
    var style = _ref3.style;
    return {
      x: style.x,
      y: style.y,
      width: (0,react_motion/* spring */.ST)(0, springConfig),
      height: style.height
    };
  };
};

var barWillLeaveVertical = function barWillLeaveVertical(springConfig) {
  return function (_ref4) {
    var style = _ref4.style;
    return {
      x: style.x,
      y: (0,react_motion/* spring */.ST)(style.y.val + style.height.val, springConfig),
      width: style.width,
      height: (0,react_motion/* spring */.ST)(0, springConfig)
    };
  };
};

var Bar = function Bar(props) {
  var data = props.data,
      getIndex = props.getIndex,
      keys = props.keys,
      groupMode = props.groupMode,
      layout = props.layout,
      reverse = props.reverse,
      minValue = props.minValue,
      maxValue = props.maxValue,
      valueScale = props.valueScale,
      indexScale = props.indexScale,
      margin = props.margin,
      width = props.width,
      height = props.height,
      outerWidth = props.outerWidth,
      outerHeight = props.outerHeight,
      padding = props.padding,
      innerPadding = props.innerPadding,
      axisTop = props.axisTop,
      axisRight = props.axisRight,
      axisBottom = props.axisBottom,
      axisLeft = props.axisLeft,
      enableGridX = props.enableGridX,
      enableGridY = props.enableGridY,
      gridXValues = props.gridXValues,
      gridYValues = props.gridYValues,
      layers = props.layers,
      barComponent = props.barComponent,
      enableLabel = props.enableLabel,
      getLabel = props.getLabel,
      labelSkipWidth = props.labelSkipWidth,
      labelSkipHeight = props.labelSkipHeight,
      getLabelTextColor = props.getLabelTextColor,
      markers = props.markers,
      theme = props.theme,
      getColor = props.getColor,
      defs = props.defs,
      fill = props.fill,
      borderRadius = props.borderRadius,
      borderWidth = props.borderWidth,
      getBorderColor = props.getBorderColor,
      annotations = props.annotations,
      isInteractive = props.isInteractive,
      getTooltipLabel = props.getTooltipLabel,
      tooltipFormat = props.tooltipFormat,
      tooltip = props.tooltip,
      onClick = props.onClick,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      legends = props.legends,
      animate = props.animate,
      motionStiffness = props.motionStiffness,
      motionDamping = props.motionDamping,
      renderWrapper = props.renderWrapper,
      role = props.role;
  var generateBars = groupMode === 'grouped' ? generateGroupedBars : generateStackedBars;
  var result = generateBars({
    layout: layout,
    reverse: reverse,
    data: data,
    getIndex: getIndex,
    keys: keys,
    minValue: minValue,
    maxValue: maxValue,
    width: width,
    height: height,
    getColor: getColor,
    padding: padding,
    innerPadding: innerPadding,
    valueScale: valueScale,
    indexScale: indexScale
  });
  var motionProps = {
    animate: animate,
    motionDamping: motionDamping,
    motionStiffness: motionStiffness
  };
  var springConfig = {
    damping: motionDamping,
    stiffness: motionStiffness
  };
  var willEnter = layout === 'vertical' ? barWillEnterVertical : barWillEnterHorizontal;
  var willLeave = layout === 'vertical' ? barWillLeaveVertical(springConfig) : barWillLeaveHorizontal(springConfig);

  var shouldRenderLabel = function shouldRenderLabel(_ref5) {
    var width = _ref5.width,
        height = _ref5.height;
    if (!enableLabel) return false;
    if (labelSkipWidth > 0 && width < labelSkipWidth) return false;
    if (labelSkipHeight > 0 && height < labelSkipHeight) return false;
    return true;
  };

  var boundDefs = (0,nivo_core_es/* bindDefs */.yU)(defs, result.bars, fill, {
    dataKey: 'data',
    targetKey: 'data.fill'
  });
  return react.createElement(nivo_core_es/* LegacyContainer */.Qf, {
    animate: animate,
    isInteractive: isInteractive,
    motionStiffness: motionStiffness,
    motionDamping: motionDamping,
    renderWrapper: renderWrapper,
    theme: theme
  }, function (_ref6) {
    var showTooltip = _ref6.showTooltip,
        hideTooltip = _ref6.hideTooltip;
    var commonProps = {
      borderRadius: borderRadius,
      borderWidth: borderWidth,
      enableLabel: enableLabel,
      labelSkipWidth: labelSkipWidth,
      labelSkipHeight: labelSkipHeight,
      showTooltip: showTooltip,
      hideTooltip: hideTooltip,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      theme: theme,
      getTooltipLabel: getTooltipLabel,
      tooltipFormat: tooltipFormat,
      tooltip: tooltip
    };
    var bars;

    if (animate === true) {
      bars = react.createElement(react_motion/* TransitionMotion */.bg, {
        key: "bars",
        willEnter: willEnter,
        willLeave: willLeave,
        styles: result.bars.filter(function (bar) {
          return bar.data.value !== null;
        }).map(function (bar) {
          return {
            key: bar.key,
            data: bar,
            style: {
              x: (0,react_motion/* spring */.ST)(bar.x, springConfig),
              y: (0,react_motion/* spring */.ST)(bar.y, springConfig),
              width: (0,react_motion/* spring */.ST)(bar.width, springConfig),
              height: (0,react_motion/* spring */.ST)(bar.height, springConfig)
            }
          };
        })
      }, function (interpolatedStyles) {
        return react.createElement("g", null, interpolatedStyles.map(function (_ref7) {
          var key = _ref7.key,
              style = _ref7.style,
              bar = _ref7.data;

          var baseProps = _objectSpread2(_objectSpread2({}, bar), style);

          return react.createElement(barComponent, _objectSpread2(_objectSpread2(_objectSpread2({
            key: key
          }, baseProps), commonProps), {}, {
            shouldRenderLabel: shouldRenderLabel(baseProps),
            width: Math.max(style.width, 0),
            height: Math.max(style.height, 0),
            label: getLabel(bar.data),
            labelColor: getLabelTextColor(baseProps, theme),
            borderColor: getBorderColor(baseProps),
            theme: theme
          }));
        }));
      });
    } else {
      bars = result.bars.filter(function (bar) {
        return bar.data.value !== null;
      }).map(function (d) {
        return react.createElement(barComponent, _objectSpread2(_objectSpread2(_objectSpread2({
          key: d.key
        }, d), commonProps), {}, {
          label: getLabel(d.data),
          shouldRenderLabel: shouldRenderLabel(d),
          labelColor: getLabelTextColor(d, theme),
          borderColor: getBorderColor(d),
          theme: theme
        }));
      });
    }

    var layerById = {
      grid: react.createElement(nivo_axes_es/* Grid */.rj, {
        key: "grid",
        width: width,
        height: height,
        xScale: enableGridX ? result.xScale : null,
        yScale: enableGridY ? result.yScale : null,
        xValues: gridXValues,
        yValues: gridYValues
      }),
      axes: react.createElement(nivo_axes_es/* Axes */.dk, {
        key: "axes",
        xScale: result.xScale,
        yScale: result.yScale,
        width: width,
        height: height,
        top: axisTop,
        right: axisRight,
        bottom: axisBottom,
        left: axisLeft
      }),
      bars: bars,
      markers: react.createElement(nivo_core_es/* CartesianMarkers */.TL, {
        key: "markers",
        markers: markers,
        width: width,
        height: height,
        xScale: result.xScale,
        yScale: result.yScale,
        theme: theme
      }),
      legends: legends.map(function (legend, i) {
        var legendData = getLegendData({
          from: legend.dataFrom,
          bars: result.bars,
          layout: layout,
          direction: legend.direction,
          groupMode: groupMode,
          reverse: reverse
        });
        if (legendData === undefined) return null;
        return react.createElement(nivo_legends_es/* BoxLegendSvg */.$6, Object.assign({
          key: i
        }, legend, {
          containerWidth: width,
          containerHeight: height,
          data: legendData,
          theme: theme
        }));
      }),
      annotations: react.createElement(BarAnnotations, Object.assign({
        key: "annotations",
        innerWidth: width,
        innerHeight: height,
        bars: result.bars,
        annotations: annotations
      }, motionProps))
    };
    return react.createElement(nivo_core_es/* SvgWrapper */.tM, {
      width: outerWidth,
      height: outerHeight,
      margin: margin,
      defs: boundDefs,
      theme: theme,
      role: role
    }, layers.map(function (layer, i) {
      if (typeof layer === 'function') {
        return react.createElement(react.Fragment, {
          key: i
        }, layer(_objectSpread2(_objectSpread2(_objectSpread2({}, props), result), {}, {
          showTooltip: showTooltip,
          hideTooltip: hideTooltip
        })));
      }

      return layerById[layer];
    }));
  });
};

Bar.defaultProps = BarSvgDefaultProps;
var Bar$1 = (0,nivo_recompose_es/* setDisplayName */.hC)('Bar')(enhance$1(Bar));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var findNodeUnderCursor = function findNodeUnderCursor(nodes, margin, x, y) {
  return nodes.find(function (node) {
    return (0,nivo_core_es/* isCursorInRect */.zn)(node.x + margin.left, node.y + margin.top, node.width, node.height, x, y);
  });
};

var BarCanvas = function (_Component) {
  _inherits(BarCanvas, _Component);

  var _super = _createSuper(BarCanvas);

  function BarCanvas() {
    var _this;

    _classCallCheck(this, BarCanvas);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleMouseHover = function (showTooltip, hideTooltip) {
      return function (event) {
        if (!_this.bars) return;
        var _this$props = _this.props,
            margin = _this$props.margin,
            theme = _this$props.theme,
            tooltip = _this$props.tooltip,
            getTooltipLabel = _this$props.getTooltipLabel,
            tooltipFormat = _this$props.tooltipFormat;

        var _getRelativeCursor = (0,nivo_core_es/* getRelativeCursor */.P6)(_this.surface, event),
            _getRelativeCursor2 = _slicedToArray(_getRelativeCursor, 2),
            x = _getRelativeCursor2[0],
            y = _getRelativeCursor2[1];

        var bar = findNodeUnderCursor(_this.bars, margin, x, y);

        if (bar !== undefined) {
          showTooltip(react.createElement(nivo_tooltip_es/* BasicTooltip */._5, {
            id: getTooltipLabel(bar.data),
            value: bar.data.value,
            enableChip: true,
            color: bar.color,
            theme: theme,
            format: tooltipFormat,
            renderContent: typeof tooltip === 'function' ? tooltip.bind(null, _objectSpread2({
              color: bar.color
            }, bar.data)) : null
          }), event);
        } else {
          hideTooltip();
        }
      };
    };

    _this.handleMouseLeave = function (hideTooltip) {
      return function () {
        hideTooltip();
      };
    };

    _this.handleClick = function (event) {
      if (!_this.bars) return;
      var _this$props2 = _this.props,
          margin = _this$props2.margin,
          onClick = _this$props2.onClick;

      var _getRelativeCursor3 = (0,nivo_core_es/* getRelativeCursor */.P6)(_this.surface, event),
          _getRelativeCursor4 = _slicedToArray(_getRelativeCursor3, 2),
          x = _getRelativeCursor4[0],
          y = _getRelativeCursor4[1];

      var node = findNodeUnderCursor(_this.bars, margin, x, y);
      if (node !== undefined) onClick(node.data, event);
    };

    return _this;
  }

  _createClass(BarCanvas, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ctx = this.surface.getContext('2d');
      this.draw(this.props);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(props) {
      if (this.props.outerWidth !== props.outerWidth || this.props.outerHeight !== props.outerHeight || this.props.isInteractive !== props.isInteractive || this.props.theme !== props.theme) {
        return true;
      } else {
        this.draw(props);
        return false;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.ctx = this.surface.getContext('2d');
      this.draw(this.props);
    }
  }, {
    key: "draw",
    value: function draw(props) {
      var _this2 = this;

      var data = props.data,
          keys = props.keys,
          getIndex = props.getIndex,
          minValue = props.minValue,
          maxValue = props.maxValue,
          valueScale = props.valueScale,
          indexScale = props.indexScale,
          width = props.width,
          height = props.height,
          outerWidth = props.outerWidth,
          outerHeight = props.outerHeight,
          pixelRatio = props.pixelRatio,
          margin = props.margin,
          layout = props.layout,
          reverse = props.reverse,
          groupMode = props.groupMode,
          padding = props.padding,
          innerPadding = props.innerPadding,
          axisTop = props.axisTop,
          axisRight = props.axisRight,
          axisBottom = props.axisBottom,
          axisLeft = props.axisLeft,
          theme = props.theme,
          getColor = props.getColor,
          borderWidth = props.borderWidth,
          getBorderColor = props.getBorderColor,
          legends = props.legends,
          enableGridX = props.enableGridX,
          gridXValues = props.gridXValues,
          enableGridY = props.enableGridY,
          gridYValues = props.gridYValues;
      this.surface.width = outerWidth * pixelRatio;
      this.surface.height = outerHeight * pixelRatio;
      this.ctx.scale(pixelRatio, pixelRatio);
      var options = {
        layout: layout,
        reverse: reverse,
        data: data,
        getIndex: getIndex,
        keys: keys,
        minValue: minValue,
        maxValue: maxValue,
        width: width,
        height: height,
        getColor: getColor,
        padding: padding,
        innerPadding: innerPadding,
        valueScale: valueScale,
        indexScale: indexScale
      };
      var result = groupMode === 'grouped' ? generateGroupedBars(options) : generateStackedBars(options);
      this.bars = result.bars;
      this.ctx.fillStyle = theme.background;
      this.ctx.fillRect(0, 0, outerWidth, outerHeight);
      this.ctx.translate(margin.left, margin.top);

      if (theme.grid.line.strokeWidth > 0) {
        this.ctx.lineWidth = theme.grid.line.strokeWidth;
        this.ctx.strokeStyle = theme.grid.line.stroke;
        enableGridX && (0,nivo_axes_es/* renderGridLinesToCanvas */.FA)(this.ctx, {
          width: width,
          height: height,
          scale: result.xScale,
          axis: 'x',
          values: gridXValues
        });
        enableGridY && (0,nivo_axes_es/* renderGridLinesToCanvas */.FA)(this.ctx, {
          width: width,
          height: height,
          scale: result.yScale,
          axis: 'y',
          values: gridYValues
        });
      }

      this.ctx.strokeStyle = '#dddddd';

      var legendDataForKeys = uniqBy_default()(result.bars.map(function (bar) {
        return {
          id: bar.data.id,
          label: bar.data.id,
          color: bar.color,
          fill: bar.data.fill
        };
      }).reverse(), function (_ref) {
        var id = _ref.id;
        return id;
      });

      var legendDataForIndexes = uniqBy_default()(result.bars.map(function (bar) {
        return {
          id: bar.data.indexValue,
          label: bar.data.indexValue,
          color: bar.color,
          fill: bar.data.fill
        };
      }), function (_ref2) {
        var id = _ref2.id;
        return id;
      });

      legends.forEach(function (legend) {
        var legendData;

        if (legend.dataFrom === 'keys') {
          legendData = legendDataForKeys;
        } else if (legend.dataFrom === 'indexes') {
          legendData = legendDataForIndexes;
        }

        if (legendData === undefined) return null;
        (0,nivo_legends_es/* renderLegendToCanvas */.as)(_this2.ctx, _objectSpread2(_objectSpread2({}, legend), {}, {
          data: legendData,
          containerWidth: width,
          containerHeight: height,
          itemTextColor: '#999',
          symbolSize: 16,
          theme: theme
        }));
      });
      (0,nivo_axes_es/* renderAxesToCanvas */.DZ)(this.ctx, {
        xScale: result.xScale,
        yScale: result.yScale,
        width: width,
        height: height,
        top: axisTop,
        right: axisRight,
        bottom: axisBottom,
        left: axisLeft,
        theme: theme
      });
      result.bars.forEach(function (bar) {
        var x = bar.x,
            y = bar.y,
            color = bar.color,
            width = bar.width,
            height = bar.height;
        _this2.ctx.fillStyle = color;

        if (borderWidth > 0) {
          _this2.ctx.strokeStyle = getBorderColor(bar);
          _this2.ctx.lineWidth = borderWidth;
        }

        _this2.ctx.beginPath();

        _this2.ctx.rect(x, y, width, height);

        _this2.ctx.fill();

        if (borderWidth > 0) {
          _this2.ctx.stroke();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          outerWidth = _this$props3.outerWidth,
          outerHeight = _this$props3.outerHeight,
          pixelRatio = _this$props3.pixelRatio,
          isInteractive = _this$props3.isInteractive,
          renderWrapper = _this$props3.renderWrapper,
          theme = _this$props3.theme,
          canvasRef = _this$props3.canvasRef;
      return react.createElement(nivo_core_es/* LegacyContainer */.Qf, Object.assign({
        isInteractive: isInteractive,
        renderWrapper: renderWrapper,
        theme: theme
      }, {
        animate: false
      }), function (_ref3) {
        var showTooltip = _ref3.showTooltip,
            hideTooltip = _ref3.hideTooltip;
        return react.createElement("canvas", {
          ref: function ref(surface) {
            _this3.surface = surface;
            if (canvasRef) canvasRef.current = surface;
          },
          width: outerWidth * pixelRatio,
          height: outerHeight * pixelRatio,
          style: {
            width: outerWidth,
            height: outerHeight
          },
          onMouseEnter: _this3.handleMouseHover(showTooltip, hideTooltip),
          onMouseMove: _this3.handleMouseHover(showTooltip, hideTooltip),
          onMouseLeave: _this3.handleMouseLeave(hideTooltip),
          onClick: _this3.handleClick
        });
      });
    }
  }]);

  return BarCanvas;
}(react.Component);

BarCanvas.defaultProps = BarDefaultProps;
var EnhancedBarCanvas = (0,nivo_recompose_es/* setDisplayName */.hC)('BarCanvas')(enhance$1(BarCanvas));
var BarCanvas$1 = react.forwardRef(function (props, ref) {
  return react.createElement(EnhancedBarCanvas, Object.assign({}, props, {
    canvasRef: ref
  }));
});

var ResponsiveBar = function ResponsiveBar(props) {
  return React.createElement(ResponsiveWrapper, null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return React.createElement(Bar$1, Object.assign({
      width: width,
      height: height
    }, props));
  });
};

var ResponsiveBarCanvas = function ResponsiveBarCanvas(props, ref) {
  return react.createElement(nivo_core_es/* ResponsiveWrapper */.d, null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return react.createElement(BarCanvas$1, Object.assign({
      width: width,
      height: height
    }, props, {
      ref: ref
    }));
  });
};

var ResponsiveBarCanvas$1 = react.forwardRef(ResponsiveBarCanvas);

;// CONCATENATED MODULE: ./src/components/blockly/fields/Bar.tsx

/* harmony default export */ var fields_Bar = (Bar$1);

/***/ })

}]);