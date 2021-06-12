(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2850],{

/***/ 72850:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ fields_ScatterPlot; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@nivo/core/dist/nivo-core.es.js + 34 modules
var nivo_core_es = __webpack_require__(24715);
// EXTERNAL MODULE: ./node_modules/@nivo/axes/dist/nivo-axes.es.js + 8 modules
var nivo_axes_es = __webpack_require__(33048);
// EXTERNAL MODULE: ./node_modules/@nivo/legends/dist/nivo-legends.es.js
var nivo_legends_es = __webpack_require__(26729);
// EXTERNAL MODULE: ./node_modules/@nivo/colors/dist/nivo-colors.es.js + 2 modules
var nivo_colors_es = __webpack_require__(68204);
// EXTERNAL MODULE: ./node_modules/@nivo/scales/dist/nivo-scales.es.js + 26 modules
var nivo_scales_es = __webpack_require__(59774);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/lodash/isPlainObject.js
var isPlainObject = __webpack_require__(68630);
var isPlainObject_default = /*#__PURE__*/__webpack_require__.n(isPlainObject);
// EXTERNAL MODULE: ./node_modules/lodash/filter.js
var filter = __webpack_require__(63105);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(57557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/@react-spring/web/index.js
var web = __webpack_require__(9514);
;// CONCATENATED MODULE: ./node_modules/@nivo/annotations/dist/nivo-annotations.es.js







var annotationSpecPropType = prop_types_default().shape({
  match: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object]).isRequired,
  type: prop_types_default().oneOf(['circle', 'rect', 'dot']).isRequired,
  noteX: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().shape({
    abs: (prop_types_default()).number.isRequired
  })]).isRequired,
  noteY: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().shape({
    abs: (prop_types_default()).number.isRequired
  })]).isRequired,
  noteWidth: (prop_types_default()).number,
  noteTextOffset: (prop_types_default()).number,
  note: prop_types_default().oneOfType([(prop_types_default()).node, (prop_types_default()).func]).isRequired,
  offset: (prop_types_default()).number
});
var defaultProps = {
  noteWidth: 120,
  noteTextOffset: 8,
  animate: true,
  motionStiffness: 90,
  motionDamping: 13
};

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

var defaultPositionAccessor = function defaultPositionAccessor(item) {
  return {
    x: item.x,
    y: item.y
  };
};

var bindAnnotations = function bindAnnotations(_ref) {
  var items = _ref.items,
      annotations = _ref.annotations,
      _ref$getPosition = _ref.getPosition,
      getPosition = _ref$getPosition === void 0 ? defaultPositionAccessor : _ref$getPosition,
      getDimensions = _ref.getDimensions;
  return annotations.reduce(function (acc, annotation) {
    filter_default()(items, annotation.match).forEach(function (item) {
      var position = getPosition(item);
      var dimensions = getDimensions(item, annotation.offset || 0);
      acc.push(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, omit_default()(annotation, ['match', 'offset'])), position), dimensions), {}, {
        datum: item,
        size: annotation.size || dimensions.size
      }));
    });
    return acc;
  }, []);
};

var getLinkAngle = function getLinkAngle(sourceX, sourceY, targetX, targetY) {
  var angle = Math.atan2(targetY - sourceY, targetX - sourceX);
  return (0,nivo_core_es/* absoluteAngleDegrees */.bt)((0,nivo_core_es/* radiansToDegrees */.vi)(angle));
};

var computeAnnotation = function computeAnnotation(_ref2) {
  var type = _ref2.type,
      x = _ref2.x,
      y = _ref2.y,
      size = _ref2.size,
      width = _ref2.width,
      height = _ref2.height,
      noteX = _ref2.noteX,
      noteY = _ref2.noteY,
      _ref2$noteWidth = _ref2.noteWidth,
      noteWidth = _ref2$noteWidth === void 0 ? defaultProps.noteWidth : _ref2$noteWidth,
      _ref2$noteTextOffset = _ref2.noteTextOffset,
      noteTextOffset = _ref2$noteTextOffset === void 0 ? defaultProps.noteTextOffset : _ref2$noteTextOffset;
  var computedNoteX;
  var computedNoteY;

  if (isPlainObject_default()(noteX)) {
    if (noteX.abs !== undefined) {
      computedNoteX = noteX.abs;
    }
  } else {
    computedNoteX = x + noteX;
  }

  if (isPlainObject_default()(noteY)) {
    if (noteY.abs !== undefined) {
      computedNoteY = noteY.abs;
    }
  } else {
    computedNoteY = y + noteY;
  }

  var computedX = x;
  var computedY = y;
  var angle = getLinkAngle(x, y, computedNoteX, computedNoteY);

  if (type === 'circle') {
    var position = (0,nivo_core_es/* positionFromAngle */.re)((0,nivo_core_es/* degreesToRadians */.Ht)(angle), size / 2);
    computedX += position.x;
    computedY += position.y;
  }

  if (type === 'rect') {
    var eighth = Math.round((angle + 90) / 45) % 8;

    if (eighth === 0) {
      computedY -= height / 2;
    }

    if (eighth === 1) {
      computedX += width / 2;
      computedY -= height / 2;
    }

    if (eighth === 2) {
      computedX += width / 2;
    }

    if (eighth === 3) {
      computedX += width / 2;
      computedY += height / 2;
    }

    if (eighth === 4) {
      computedY += height / 2;
    }

    if (eighth === 5) {
      computedX -= width / 2;
      computedY += height / 2;
    }

    if (eighth === 6) {
      computedX -= width / 2;
    }

    if (eighth === 7) {
      computedX -= width / 2;
      computedY -= height / 2;
    }
  }

  var textX = computedNoteX;
  var textY = computedNoteY - noteTextOffset;
  var noteLineX = computedNoteX;
  var noteLineY = computedNoteY;

  if ((angle + 90) % 360 > 180) {
    textX -= noteWidth;
    noteLineX -= noteWidth;
  } else {
    noteLineX += noteWidth;
  }

  return {
    points: [[computedX, computedY], [computedNoteX, computedNoteY], [noteLineX, noteLineY]],
    text: [textX, textY],
    angle: angle + 90
  };
};

var useAnnotations = function useAnnotations(_ref) {
  var items = _ref.items,
      annotations = _ref.annotations,
      getPosition = _ref.getPosition,
      getDimensions = _ref.getDimensions;
  return (0,react.useMemo)(function () {
    return bindAnnotations({
      items: items,
      annotations: annotations,
      getPosition: getPosition,
      getDimensions: getDimensions
    });
  }, [items, annotations, getPosition, getDimensions]);
};

var useComputedAnnotations = function useComputedAnnotations(_ref2) {
  var annotations = _ref2.annotations,
      containerWidth = _ref2.containerWidth,
      containerHeight = _ref2.containerHeight;
  return useMemo(function () {
    return annotations.map(function (annotation) {
      return _objectSpread2(_objectSpread2({}, annotation), {}, {
        computed: computeAnnotation(_objectSpread2({
          containerWidth: containerWidth,
          containerHeight: containerHeight
        }, annotation))
      });
    });
  }, [annotations, containerWidth, containerHeight]);
};

var useComputedAnnotation = function useComputedAnnotation(_ref3) {
  var type = _ref3.type,
      containerWidth = _ref3.containerWidth,
      containerHeight = _ref3.containerHeight,
      x = _ref3.x,
      y = _ref3.y,
      size = _ref3.size,
      width = _ref3.width,
      height = _ref3.height,
      noteX = _ref3.noteX,
      noteY = _ref3.noteY,
      noteWidth = _ref3.noteWidth,
      noteTextOffset = _ref3.noteTextOffset;
  return (0,react.useMemo)(function () {
    return computeAnnotation({
      type: type,
      containerWidth: containerWidth,
      containerHeight: containerHeight,
      x: x,
      y: y,
      size: size,
      width: width,
      height: height,
      noteX: noteX,
      noteY: noteY,
      noteWidth: noteWidth,
      noteTextOffset: noteTextOffset
    });
  }, [type, containerWidth, containerHeight, x, y, size, width, height, noteX, noteY, noteWidth, noteTextOffset]);
};

var AnnotationNote = (0,react.memo)(function (_ref) {
  var datum = _ref.datum,
      x = _ref.x,
      y = _ref.y,
      note = _ref.note;
  var theme = (0,nivo_core_es/* useTheme */.Fg)();

  var _useMotionConfig = (0,nivo_core_es/* useMotionConfig */.tf)(),
      animate = _useMotionConfig.animate,
      springConfiig = _useMotionConfig.config;

  var animatedProps = (0,web.useSpring)({
    x: x,
    y: y,
    config: springConfiig,
    immediate: !animate
  });

  if (typeof note === 'function') {
    return note({
      x: x,
      y: y,
      datum: datum
    });
  }

  return react.createElement(react.Fragment, null, theme.annotations.text.outlineWidth > 0 && react.createElement(web/* animated.text */.q.text, {
    x: animatedProps.x,
    y: animatedProps.y,
    style: _objectSpread2(_objectSpread2({}, theme.annotations.text), {}, {
      strokeLinejoin: 'round',
      strokeWidth: theme.annotations.text.outlineWidth * 2,
      stroke: theme.annotations.text.outlineColor
    })
  }, note), react.createElement(web/* animated.text */.q.text, {
    x: animatedProps.x,
    y: animatedProps.y,
    style: omit_default()(theme.annotations.text, ['outlineWidth', 'outlineColor'])
  }, note));
});
AnnotationNote.displayName = 'AnnotationNote';
AnnotationNote.defaultProps = {};

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

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
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

var AnnotationLink = (0,react.memo)(function (_ref) {
  var isOutline = _ref.isOutline,
      props = _objectWithoutProperties(_ref, ["isOutline"]);

  var theme = (0,nivo_core_es/* useTheme */.Fg)();

  var _props$points = _toArray(props.points),
      point = _props$points[0],
      points = _props$points.slice(1);

  var path = points.reduce(function (acc, _ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        x = _ref3[0],
        y = _ref3[1];

    return "".concat(acc, " L").concat(x, ",").concat(y);
  }, "M".concat(point[0], ",").concat(point[1]));
  var animatedPath = (0,nivo_core_es/* useAnimatedPath */.NS)(path);

  if (isOutline && theme.annotations.link.outlineWidth <= 0) {
    return null;
  }

  var style = _objectSpread2({}, theme.annotations.link);

  if (isOutline) {
    style.strokeLinecap = 'square';
    style.strokeWidth = theme.annotations.link.strokeWidth + theme.annotations.link.outlineWidth * 2;
    style.stroke = theme.annotations.link.outlineColor;
  }

  return react.createElement(web/* animated.path */.q.path, {
    fill: "none",
    d: animatedPath,
    style: style
  });
});
AnnotationLink.displayName = 'AnnotationLink';
AnnotationLink.defaultProps = {
  isOutline: false
};
var CircleAnnotationOutline = (0,react.memo)(function (_ref) {
  var x = _ref.x,
      y = _ref.y,
      size = _ref.size;
  var theme = (0,nivo_core_es/* useTheme */.Fg)();

  var _useMotionConfig = (0,nivo_core_es/* useMotionConfig */.tf)(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.config;

  var animatedProps = (0,web.useSpring)({
    x: x,
    y: y,
    radius: size / 2,
    config: springConfig,
    immediate: !animate
  });
  return react.createElement(react.Fragment, null, theme.annotations.outline.outlineWidth > 0 && react.createElement(web/* animated.circle */.q.circle, {
    cx: animatedProps.x,
    cy: animatedProps.y,
    r: animatedProps.radius,
    style: _objectSpread2(_objectSpread2({}, theme.annotations.outline), {}, {
      fill: 'none',
      strokeWidth: theme.annotations.outline.strokeWidth + theme.annotations.outline.outlineWidth * 2,
      stroke: theme.annotations.outline.outlineColor
    })
  }), react.createElement(web/* animated.circle */.q.circle, {
    cx: animatedProps.x,
    cy: animatedProps.y,
    r: animatedProps.radius,
    style: theme.annotations.outline
  }));
});
CircleAnnotationOutline.displayName = 'CircleAnnotationOutline';
var DotAnnotationOutline = (0,react.memo)(function (_ref) {
  var x = _ref.x,
      y = _ref.y,
      size = _ref.size;
  var theme = (0,nivo_core_es/* useTheme */.Fg)();

  var _useMotionConfig = (0,nivo_core_es/* useMotionConfig */.tf)(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.config;

  var animatedProps = (0,web.useSpring)({
    x: x,
    y: y,
    radius: size / 2,
    config: springConfig,
    immediate: !animate
  });
  return react.createElement(react.Fragment, null, theme.annotations.outline.outlineWidth > 0 && react.createElement(web/* animated.circle */.q.circle, {
    cx: animatedProps.x,
    cy: animatedProps.y,
    r: animatedProps.radius,
    style: _objectSpread2(_objectSpread2({}, theme.annotations.outline), {}, {
      fill: 'none',
      strokeWidth: theme.annotations.outline.outlineWidth * 2,
      stroke: theme.annotations.outline.outlineColor
    })
  }), react.createElement(web/* animated.circle */.q.circle, {
    cx: animatedProps.x,
    cy: animatedProps.y,
    r: animatedProps.radius,
    style: theme.annotations.symbol
  }));
});
DotAnnotationOutline.displayName = 'DotAnnotationOutline';
DotAnnotationOutline.defaultProps = {
  size: 4
};
var RectAnnotationOutline = (0,react.memo)(function (_ref) {
  var x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height;
  var theme = (0,nivo_core_es/* useTheme */.Fg)();

  var _useMotionConfig = (0,nivo_core_es/* useMotionConfig */.tf)(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.config;

  var animatedProps = (0,web.useSpring)({
    x: x - width / 2,
    y: y - height / 2,
    width: width,
    height: height,
    config: springConfig,
    immediate: !animate
  });
  return react.createElement(react.Fragment, null, theme.annotations.outline.outlineWidth > 0 && react.createElement(web/* animated.rect */.q.rect, {
    x: animatedProps.x,
    y: animatedProps.y,
    width: animatedProps.width,
    height: animatedProps.height,
    style: _objectSpread2(_objectSpread2({}, theme.annotations.outline), {}, {
      fill: 'none',
      strokeWidth: theme.annotations.outline.strokeWidth + theme.annotations.outline.outlineWidth * 2,
      stroke: theme.annotations.outline.outlineColor
    })
  }), react.createElement(web/* animated.rect */.q.rect, {
    x: animatedProps.x,
    y: animatedProps.y,
    width: animatedProps.width,
    height: animatedProps.height,
    style: theme.annotations.outline
  }));
});
RectAnnotationOutline.displayName = 'RectAnnotationOutline';
var Annotation = (0,react.memo)(function (_ref) {
  var datum = _ref.datum,
      type = _ref.type,
      containerWidth = _ref.containerWidth,
      containerHeight = _ref.containerHeight,
      x = _ref.x,
      y = _ref.y,
      size = _ref.size,
      width = _ref.width,
      height = _ref.height,
      noteX = _ref.noteX,
      noteY = _ref.noteY,
      noteWidth = _ref.noteWidth,
      noteTextOffset = _ref.noteTextOffset,
      note = _ref.note;
  var computed = useComputedAnnotation({
    type: type,
    containerWidth: containerWidth,
    containerHeight: containerHeight,
    x: x,
    y: y,
    size: size,
    width: width,
    height: height,
    noteX: noteX,
    noteY: noteY,
    noteWidth: noteWidth,
    noteTextOffset: noteTextOffset
  });
  return react.createElement(react.Fragment, null, react.createElement(AnnotationLink, {
    points: computed.points,
    isOutline: true
  }), type === 'circle' && react.createElement(CircleAnnotationOutline, {
    x: x,
    y: y,
    size: size
  }), type === 'dot' && react.createElement(DotAnnotationOutline, {
    x: x,
    y: y,
    size: size
  }), type === 'rect' && react.createElement(RectAnnotationOutline, {
    x: x,
    y: y,
    width: width,
    height: height
  }), react.createElement(AnnotationLink, {
    points: computed.points
  }), react.createElement(AnnotationNote, {
    datum: datum,
    x: computed.text[0],
    y: computed.text[1],
    note: note
  }));
});
Annotation.displayName = 'Annotation';
Annotation.defaultProps = {
  noteWidth: defaultProps.noteWidth,
  noteTextOffset: defaultProps.noteTextOffset
};

var drawPoints = function drawPoints(ctx, points) {
  points.forEach(function (_ref, index) {
    var _ref2 = _slicedToArray(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];

    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
};

var renderAnnotationsToCanvas = function renderAnnotationsToCanvas(ctx, _ref3) {
  var annotations = _ref3.annotations,
      theme = _ref3.theme;
  if (annotations.length === 0) return;
  ctx.save();
  annotations.forEach(function (annotation) {
    if (theme.annotations.link.outlineWidth > 0) {
      ctx.lineCap = 'square';
      ctx.strokeStyle = theme.annotations.link.outlineColor;
      ctx.lineWidth = theme.annotations.link.strokeWidth + theme.annotations.link.outlineWidth * 2;
      ctx.beginPath();
      drawPoints(ctx, annotation.computed.points);
      ctx.stroke();
      ctx.lineCap = 'butt';
    }

    if (annotation.type === 'circle' && theme.annotations.outline.outlineWidth > 0) {
      ctx.strokeStyle = theme.annotations.outline.outlineColor;
      ctx.lineWidth = theme.annotations.outline.strokeWidth + theme.annotations.outline.outlineWidth * 2;
      ctx.beginPath();
      ctx.arc(annotation.x, annotation.y, annotation.size / 2, 0, 2 * Math.PI);
      ctx.stroke();
    }

    if (annotation.type === 'dot' && theme.annotations.symbol.outlineWidth > 0) {
      ctx.strokeStyle = theme.annotations.symbol.outlineColor;
      ctx.lineWidth = theme.annotations.symbol.outlineWidth * 2;
      ctx.beginPath();
      ctx.arc(annotation.x, annotation.y, annotation.size / 2, 0, 2 * Math.PI);
      ctx.stroke();
    }

    if (annotation.type === 'rect' && theme.annotations.outline.outlineWidth > 0) {
      ctx.strokeStyle = theme.annotations.outline.outlineColor;
      ctx.lineWidth = theme.annotations.outline.strokeWidth + theme.annotations.outline.outlineWidth * 2;
      ctx.beginPath();
      ctx.rect(annotation.x - annotation.width / 2, annotation.y - annotation.height / 2, annotation.width, annotation.height);
      ctx.stroke();
    }

    ctx.strokeStyle = theme.annotations.link.stroke;
    ctx.lineWidth = theme.annotations.link.strokeWidth;
    ctx.beginPath();
    drawPoints(ctx, annotation.computed.points);
    ctx.stroke();

    if (annotation.type === 'circle') {
      ctx.strokeStyle = theme.annotations.outline.stroke;
      ctx.lineWidth = theme.annotations.outline.strokeWidth;
      ctx.beginPath();
      ctx.arc(annotation.x, annotation.y, annotation.size / 2, 0, 2 * Math.PI);
      ctx.stroke();
    }

    if (annotation.type === 'dot') {
      ctx.fillStyle = theme.annotations.symbol.fill;
      ctx.beginPath();
      ctx.arc(annotation.x, annotation.y, annotation.size / 2, 0, 2 * Math.PI);
      ctx.fill();
    }

    if (annotation.type === 'rect') {
      ctx.strokeStyle = theme.annotations.outline.stroke;
      ctx.lineWidth = theme.annotations.outline.strokeWidth;
      ctx.beginPath();
      ctx.rect(annotation.x - annotation.width / 2, annotation.y - annotation.height / 2, annotation.width, annotation.height);
      ctx.stroke();
    }

    if (typeof annotation.note === 'function') {
      annotation.note(ctx, {
        datum: annotation.datum,
        x: annotation.computed.text[0],
        y: annotation.computed.text[1],
        theme: theme
      });
    } else {
      ctx.font = "".concat(theme.annotations.text.fontSize, "px ").concat(theme.annotations.text.fontFamily);
      ctx.fillStyle = theme.annotations.text.fill;
      ctx.strokeStyle = theme.annotations.text.outlineColor;
      ctx.lineWidth = theme.annotations.text.outlineWidth * 2;

      if (theme.annotations.text.outlineWidth > 0) {
        ctx.lineJoin = 'round';
        ctx.strokeText(annotation.note, annotation.computed.text[0], annotation.computed.text[1]);
        ctx.lineJoin = 'miter';
      }

      ctx.fillText(annotation.note, annotation.computed.text[0], annotation.computed.text[1]);
    }
  });
  ctx.restore();
};


// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/isString.js
var isString = __webpack_require__(47037);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);
// EXTERNAL MODULE: ./node_modules/lodash/isNumber.js
var isNumber = __webpack_require__(81763);
var isNumber_default = /*#__PURE__*/__webpack_require__.n(isNumber);
// EXTERNAL MODULE: ./node_modules/d3-scale/src/linear.js + 4 modules
var linear = __webpack_require__(44076);
// EXTERNAL MODULE: ./node_modules/@nivo/tooltip/dist/nivo-tooltip.es.js
var nivo_tooltip_es = __webpack_require__(62529);
// EXTERNAL MODULE: ./node_modules/react-motion/lib/react-motion.js
var react_motion = __webpack_require__(44235);
// EXTERNAL MODULE: ./node_modules/@nivo/voronoi/dist/nivo-voronoi.es.js + 5 modules
var nivo_voronoi_es = __webpack_require__(8374);
;// CONCATENATED MODULE: ./node_modules/@nivo/scatterplot/dist/nivo-scatterplot.es.js

















function nivo_scatterplot_es_defineProperty(obj, key, value) {
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

function nivo_scatterplot_es_ownKeys(object, enumerableOnly) {
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

function nivo_scatterplot_es_objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      nivo_scatterplot_es_ownKeys(Object(source), true).forEach(function (key) {
        nivo_scatterplot_es_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      nivo_scatterplot_es_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function nivo_scatterplot_es_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return nivo_scatterplot_es_arrayLikeToArray(arr);
}

function nivo_scatterplot_es_iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function nivo_scatterplot_es_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return nivo_scatterplot_es_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nivo_scatterplot_es_arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || nivo_scatterplot_es_iterableToArray(arr) || nivo_scatterplot_es_unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var getNodeSizeGenerator = function getNodeSizeGenerator(size) {
  if (typeof size === 'function') return size;
  if (isNumber_default()(size)) return function () {
    return size;
  };

  if (isPlainObject_default()(size)) {
    if (!isString_default()(size.key)) {
      throw new Error('symbolSize is invalid, key should be a string pointing to the property to use to determine node size');
    }

    if (!Array.isArray(size.values) || size.values.length !== 2) {
      throw new Error('symbolSize is invalid, values spec should be an array containing two values, min and max');
    }

    if (!Array.isArray(size.sizes) || size.sizes.length !== 2) {
      throw new Error('symbolSize is invalid, sizes spec should be an array containing two values, min and max');
    }

    var sizeScale = (0,linear/* default */.Z)().domain([size.values[0], size.values[1]]).range([size.sizes[0], size.sizes[1]]);
    return function (d) {
      return sizeScale(get_default()(d, size.key));
    };
  }

  throw new Error('symbolSize is invalid, it should be either a function, a number or an object');
};

var computePoints = function computePoints(_ref) {
  var series = _ref.series,
      formatX = _ref.formatX,
      formatY = _ref.formatY;
  return series.reduce(function (agg, serie) {
    return [].concat(_toConsumableArray(agg), _toConsumableArray(serie.data.map(function (d, i) {
      return {
        index: agg.length + i,
        id: "".concat(serie.id, ".").concat(i),
        x: d.position.x,
        y: d.position.y,
        data: nivo_scatterplot_es_objectSpread2(nivo_scatterplot_es_objectSpread2({}, d.data), {}, {
          id: "".concat(serie.id, ".").concat(i),
          serieId: serie.id,
          formattedX: formatX(d.data.x),
          formattedY: formatY(d.data.y)
        })
      };
    })));
  }, []);
};

var useNodeSize = function useNodeSize(size) {
  return (0,react.useMemo)(function () {
    return getNodeSizeGenerator(size);
  }, [size]);
};

var useScatterPlot = function useScatterPlot(_ref) {
  var data = _ref.data,
      xScaleSpec = _ref.xScaleSpec,
      xFormat = _ref.xFormat,
      yScaleSpec = _ref.yScaleSpec,
      yFormat = _ref.yFormat,
      width = _ref.width,
      height = _ref.height,
      nodeSize = _ref.nodeSize,
      colors = _ref.colors;

  var _useMemo = (0,react.useMemo)(function () {
    return (0,nivo_scales_es/* computeXYScalesForSeries */.Gi)(data, xScaleSpec, yScaleSpec, width, height);
  }, [data, xScaleSpec, yScaleSpec, width, height]),
      series = _useMemo.series,
      xScale = _useMemo.xScale,
      yScale = _useMemo.yScale;

  var formatX = (0,nivo_core_es/* useValueFormatter */.O_)(xFormat);
  var formatY = (0,nivo_core_es/* useValueFormatter */.O_)(yFormat);
  var rawNodes = (0,react.useMemo)(function () {
    return computePoints({
      series: series,
      formatX: formatX,
      formatY: formatY
    });
  }, [series, formatX, formatY]);
  var getNodeSize = useNodeSize(nodeSize);
  var getColor = (0,nivo_colors_es/* useOrdinalColorScale */.U)(colors, 'serieId');
  var nodes = (0,react.useMemo)(function () {
    return rawNodes.map(function (rawNode) {
      return nivo_scatterplot_es_objectSpread2(nivo_scatterplot_es_objectSpread2({}, rawNode), {}, {
        size: getNodeSize(rawNode.data),
        style: {
          color: getColor(rawNode.data)
        }
      });
    });
  }, [rawNodes, getNodeSize, getColor]);
  var legendData = (0,react.useMemo)(function () {
    return series.map(function (serie) {
      return {
        id: serie.id,
        label: serie.id,
        color: getColor({
          serieId: serie.id
        })
      };
    });
  }, [series, getColor]);
  return {
    xScale: xScale,
    yScale: yScale,
    nodes: nodes,
    legendData: legendData
  };
};

var useScatterPlotAnnotations = function useScatterPlotAnnotations(items, annotations) {
  return useAnnotations({
    items: items,
    annotations: annotations,
    getDimensions: function getDimensions(node, offset) {
      var size = node.size + offset * 2;
      return {
        size: size,
        width: size,
        height: size
      };
    }
  });
};

var Node = function Node(_ref) {
  var x = _ref.x,
      y = _ref.y,
      size = _ref.size,
      color = _ref.color,
      blendMode = _ref.blendMode,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick;
  return react.createElement("circle", {
    cx: x,
    cy: y,
    r: size / 2,
    fill: color,
    style: {
      mixBlendMode: blendMode
    },
    onMouseEnter: onMouseEnter,
    onMouseMove: onMouseMove,
    onMouseLeave: onMouseLeave,
    onClick: onClick
  });
};

var Node$1 = (0,react.memo)(Node);

var Tooltip = function Tooltip(_ref) {
  var node = _ref.node;
  return react.createElement(nivo_tooltip_es/* BasicTooltip */._5, {
    id: node.data.serieId,
    value: "x: ".concat(node.data.formattedX, ", y: ").concat(node.data.formattedY),
    enableChip: true,
    color: node.style.color
  });
};

var Tooltip$1 = (0,react.memo)(Tooltip);
var commonPropTypes = {
  data: prop_types_default().arrayOf(prop_types_default().shape({
    id: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
    data: prop_types_default().arrayOf(prop_types_default().shape({
      x: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string, prop_types_default().instanceOf(Date)]).isRequired,
      y: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string, prop_types_default().instanceOf(Date)]).isRequired
    })).isRequired
  })).isRequired,
  xScale: nivo_scales_es/* scalePropType.isRequired */.t4.isRequired,
  xFormat: (prop_types_default()).any,
  yScale: nivo_scales_es/* scalePropType.isRequired */.t4.isRequired,
  yFormat: (prop_types_default()).any,
  layers: prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().oneOf(['grid', 'axes', 'nodes', 'markers', 'mesh', 'legends', 'annotations']), (prop_types_default()).func])).isRequired,
  enableGridX: (prop_types_default()).bool.isRequired,
  enableGridY: (prop_types_default()).bool.isRequired,
  axisTop: nivo_axes_es/* axisPropType */.VT,
  axisRight: nivo_axes_es/* axisPropType */.VT,
  axisBottom: nivo_axes_es/* axisPropType */.VT,
  axisLeft: nivo_axes_es/* axisPropType */.VT,
  annotations: prop_types_default().arrayOf(annotationSpecPropType).isRequired,
  nodeSize: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().shape({
    key: (prop_types_default()).string.isRequired,
    values: prop_types_default().arrayOf((prop_types_default()).number).isRequired,
    sizes: prop_types_default().arrayOf((prop_types_default()).number).isRequired
  }), (prop_types_default()).func]).isRequired,
  renderNode: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object]).isRequired,
  colors: nivo_colors_es/* ordinalColorsPropType.isRequired */.qi.isRequired,
  blendMode: nivo_core_es/* blendModePropType.isRequired */.wM.isRequired,
  isInteractive: (prop_types_default()).bool.isRequired,
  debugMesh: (prop_types_default()).bool.isRequired,
  onMouseEnter: (prop_types_default()).func,
  onMouseMove: (prop_types_default()).func,
  onMouseLeave: (prop_types_default()).func,
  onClick: (prop_types_default()).func,
  tooltip: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object]).isRequired,
  markers: prop_types_default().arrayOf(prop_types_default().shape({
    axis: prop_types_default().oneOf(['x', 'y']).isRequired,
    value: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]).isRequired,
    style: (prop_types_default()).object
  })),
  legends: prop_types_default().arrayOf(prop_types_default().shape(nivo_legends_es/* LegendPropShape */.iQ)).isRequired
};

var ScatterPlotPropTypes = nivo_scatterplot_es_objectSpread2(nivo_scatterplot_es_objectSpread2({}, commonPropTypes), {}, {
  role: (prop_types_default()).string.isRequired,
  useMesh: (prop_types_default()).bool.isRequired
}, nivo_core_es/* motionPropTypes */.w$);

var ScatterPlotCanvasPropTypes = nivo_scatterplot_es_objectSpread2(nivo_scatterplot_es_objectSpread2({}, commonPropTypes), {}, {
  pixelRatio: (prop_types_default()).number.isRequired
});

var commonDefaultProps = {
  xScale: {
    type: 'linear',
    min: 0,
    max: 'auto'
  },
  yScale: {
    type: 'linear',
    min: 0,
    max: 'auto'
  },
  enableGridX: true,
  enableGridY: true,
  axisBottom: {},
  axisLeft: {},
  nodeSize: 9,
  renderNode: Node$1,
  colors: {
    scheme: 'nivo'
  },
  blendMode: 'normal',
  isInteractive: true,
  debugMesh: false,
  tooltip: Tooltip$1,
  markers: [],
  legends: [],
  annotations: []
};

var ScatterPlotDefaultProps = nivo_scatterplot_es_objectSpread2(nivo_scatterplot_es_objectSpread2({}, commonDefaultProps), {}, {
  layers: ['grid', 'axes', 'nodes', 'markers', 'mesh', 'legends', 'annotations'],
  role: 'img',
  useMesh: true,
  animate: true,
  motionStiffness: 90,
  motionDamping: 15
});

var ScatterPlotCanvasDefaultProps = nivo_scatterplot_es_objectSpread2(nivo_scatterplot_es_objectSpread2({}, commonDefaultProps), {}, {
  layers: ['grid', 'axes', 'nodes', 'mesh', 'legends', 'annotations'],
  pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1
});

var NodePropType = prop_types_default().shape({
  id: (prop_types_default()).string.isRequired,
  x: (prop_types_default()).number.isRequired,
  y: (prop_types_default()).number.isRequired,
  size: (prop_types_default()).number.isRequired,
  data: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    serieId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
    x: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string, prop_types_default().instanceOf(Date)]).isRequired,
    formattedX: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
    y: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string, prop_types_default().instanceOf(Date)]).isRequired,
    formattedY: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
  }).isRequired,
  style: prop_types_default().shape({
    color: (prop_types_default()).string.isRequired
  }).isRequired
});

var NodeWrapper = function NodeWrapper(_ref) {
  var node = _ref.node,
      NodeComponent = _ref.renderNode,
      x = _ref.x,
      y = _ref.y,
      size = _ref.size,
      color = _ref.color,
      isInteractive = _ref.isInteractive,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      tooltip = _ref.tooltip,
      blendMode = _ref.blendMode;

  var _useTooltip = (0,nivo_tooltip_es/* useTooltip */.lL)(),
      showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
      hideTooltip = _useTooltip.hideTooltip;

  var handleMouseEnter = (0,react.useCallback)(function (event) {
    showTooltipFromEvent(react.createElement(tooltip, {
      node: node
    }), event);
    onMouseEnter && onMouseEnter(node, event);
  }, [node, tooltip, showTooltipFromEvent, onMouseEnter]);
  var handleMouseMove = (0,react.useCallback)(function (event) {
    showTooltipFromEvent(react.createElement(tooltip, {
      node: node
    }), event);
    onMouseMove && onMouseMove(node, event);
  }, [node, tooltip, showTooltipFromEvent, onMouseMove]);
  var handleMouseLeave = (0,react.useCallback)(function (event) {
    hideTooltip();
    onMouseLeave && onMouseLeave(node, event);
  }, [node, hideTooltip, onMouseLeave]);
  var handleClick = (0,react.useCallback)(function (event) {
    onClick && onClick(node, event);
  }, [node, onClick]);
  return react.createElement(NodeComponent, {
    node: node,
    x: x,
    y: y,
    size: size,
    color: color,
    blendMode: blendMode,
    onMouseEnter: isInteractive ? handleMouseEnter : undefined,
    onMouseMove: isInteractive ? handleMouseMove : undefined,
    onMouseLeave: isInteractive ? handleMouseLeave : undefined,
    onClick: isInteractive && onClick ? handleClick : undefined
  });
};

var NodeWrapper$1 = (0,react.memo)(NodeWrapper);

var AnimatedNodes = function AnimatedNodes(_ref) {
  var nodes = _ref.nodes,
      renderNode = _ref.renderNode,
      isInteractive = _ref.isInteractive,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      tooltip = _ref.tooltip,
      blendMode = _ref.blendMode;

  var _useMotionConfig = (0,nivo_core_es/* useMotionConfig */.tf)(),
      springConfig = _useMotionConfig.springConfig;

  return react.createElement(react_motion/* TransitionMotion */.bg, {
    styles: nodes.map(function (node) {
      return {
        key: node.id,
        data: node,
        style: {
          x: (0,react_motion/* spring */.ST)(node.x, springConfig),
          y: (0,react_motion/* spring */.ST)(node.y, springConfig),
          size: (0,react_motion/* spring */.ST)(node.size, springConfig)
        }
      };
    })
  }, function (interpolatedStyles) {
    return react.createElement(react.Fragment, null, interpolatedStyles.map(function (_ref2) {
      var key = _ref2.key,
          style = _ref2.style,
          node = _ref2.data;
      return react.createElement(NodeWrapper$1, {
        key: key,
        node: node,
        renderNode: renderNode,
        x: style.x,
        y: style.y,
        size: style.size,
        color: node.style.color,
        isInteractive: isInteractive,
        onMouseEnter: onMouseEnter,
        onMouseMove: onMouseMove,
        onMouseLeave: onMouseLeave,
        onClick: onClick,
        tooltip: tooltip,
        blendMode: blendMode
      });
    }));
  });
};

var AnimatedNodes$1 = (0,react.memo)(AnimatedNodes);

var ScatterPlotAnnotations = function ScatterPlotAnnotations(_ref) {
  var nodes = _ref.nodes,
      annotations = _ref.annotations,
      innerWidth = _ref.innerWidth,
      innerHeight = _ref.innerHeight;
  var boundAnnotations = useScatterPlotAnnotations(nodes, annotations);
  return boundAnnotations.map(function (annotation, i) {
    return react.createElement(Annotation, Object.assign({
      key: i
    }, annotation, {
      containerWidth: innerWidth,
      containerHeight: innerHeight
    }));
  });
};

var StaticNodes = function StaticNodes(_ref) {
  var nodes = _ref.nodes,
      renderNode = _ref.renderNode,
      isInteractive = _ref.isInteractive,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      tooltip = _ref.tooltip,
      blendMode = _ref.blendMode;
  return nodes.map(function (node) {
    return react.createElement(NodeWrapper$1, {
      key: node.id,
      node: node,
      renderNode: renderNode,
      x: node.x,
      y: node.y,
      size: node.size,
      color: node.style.color,
      isInteractive: isInteractive,
      onMouseEnter: onMouseEnter,
      onMouseMove: onMouseMove,
      onMouseLeave: onMouseLeave,
      onClick: onClick,
      tooltip: tooltip,
      blendMode: blendMode
    });
  });
};

var StaticNodes$1 = (0,react.memo)(StaticNodes);

var Mesh = function Mesh(_ref) {
  var nodes = _ref.nodes,
      width = _ref.width,
      height = _ref.height,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      tooltip = _ref.tooltip,
      debug = _ref.debug;

  var _useTooltip = (0,nivo_tooltip_es/* useTooltip */.lL)(),
      showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
      hideTooltip = _useTooltip.hideTooltip;

  var handleMouseEnter = (0,react.useCallback)(function (node, event) {
    showTooltipFromEvent(react.createElement(tooltip, {
      node: node
    }), event);
    onMouseEnter && onMouseEnter(node, event);
  }, [showTooltipFromEvent, tooltip, onMouseEnter]);
  var handleMouseMove = (0,react.useCallback)(function (node, event) {
    showTooltipFromEvent(react.createElement(tooltip, {
      node: node
    }), event);
    onMouseMove && onMouseMove(node, event);
  }, [showTooltipFromEvent, tooltip, onMouseMove]);
  var handleMouseLeave = (0,react.useCallback)(function (node, event) {
    hideTooltip();
    onMouseLeave && onMouseLeave(node, event);
  }, [hideTooltip, onMouseLeave]);
  var handleClick = (0,react.useCallback)(function (node, event) {
    onClick && onClick(node, event);
  }, [onClick]);
  return react.createElement(nivo_voronoi_es/* Mesh */.Kj, {
    nodes: nodes,
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

var ScatterPlot = function ScatterPlot(props) {
  var data = props.data,
      xScaleSpec = props.xScale,
      xFormat = props.xFormat,
      yScaleSpec = props.yScale,
      yFormat = props.yFormat,
      width = props.width,
      height = props.height,
      partialMargin = props.margin,
      layers = props.layers,
      colors = props.colors,
      blendMode = props.blendMode,
      nodeSize = props.nodeSize,
      renderNode = props.renderNode,
      enableGridX = props.enableGridX,
      enableGridY = props.enableGridY,
      gridXValues = props.gridXValues,
      gridYValues = props.gridYValues,
      axisTop = props.axisTop,
      axisRight = props.axisRight,
      axisBottom = props.axisBottom,
      axisLeft = props.axisLeft,
      annotations = props.annotations,
      isInteractive = props.isInteractive,
      useMesh = props.useMesh,
      debugMesh = props.debugMesh,
      onMouseEnter = props.onMouseEnter,
      onMouseMove = props.onMouseMove,
      onMouseLeave = props.onMouseLeave,
      onClick = props.onClick,
      tooltip = props.tooltip,
      markers = props.markers,
      legends = props.legends,
      role = props.role;

  var _useDimensions = (0,nivo_core_es/* useDimensions */.Bs)(width, height, partialMargin),
      margin = _useDimensions.margin,
      innerWidth = _useDimensions.innerWidth,
      innerHeight = _useDimensions.innerHeight,
      outerWidth = _useDimensions.outerWidth,
      outerHeight = _useDimensions.outerHeight;

  var theme = (0,nivo_core_es/* useTheme */.Fg)();

  var _useMotionConfig = (0,nivo_core_es/* useMotionConfig */.tf)(),
      animate = _useMotionConfig.animate;

  var _useScatterPlot = useScatterPlot({
    data: data,
    xScaleSpec: xScaleSpec,
    xFormat: xFormat,
    yScaleSpec: yScaleSpec,
    yFormat: yFormat,
    width: innerWidth,
    height: innerHeight,
    nodeSize: nodeSize,
    colors: colors
  }),
      xScale = _useScatterPlot.xScale,
      yScale = _useScatterPlot.yScale,
      nodes = _useScatterPlot.nodes,
      legendData = _useScatterPlot.legendData;

  var customLayerProps = (0,react.useMemo)(function () {
    return nivo_scatterplot_es_objectSpread2(nivo_scatterplot_es_objectSpread2({}, props), {}, {
      xScale: xScale,
      yScale: yScale,
      nodes: nodes,
      margin: margin,
      innerWidth: innerWidth,
      innerHeight: innerHeight,
      outerWidth: outerWidth,
      outerHeight: outerHeight
    });
  }, [xScale, yScale, nodes, margin, innerWidth, innerHeight, outerWidth, outerHeight]);
  var Nodes = animate ? AnimatedNodes$1 : StaticNodes$1;
  var layerById = {
    grid: react.createElement(nivo_axes_es/* Grid */.rj, {
      key: "grid",
      width: innerWidth,
      height: innerHeight,
      xScale: enableGridX ? xScale : null,
      yScale: enableGridY ? yScale : null,
      xValues: gridXValues,
      yValues: gridYValues
    }),
    axes: react.createElement(nivo_axes_es/* Axes */.dk, {
      key: "axes",
      xScale: xScale,
      yScale: yScale,
      width: innerWidth,
      height: innerHeight,
      top: axisTop,
      right: axisRight,
      bottom: axisBottom,
      left: axisLeft
    }),
    nodes: react.createElement(Nodes, {
      key: 'nodes',
      nodes: nodes,
      renderNode: renderNode,
      isInteractive: isInteractive,
      onMouseEnter: onMouseEnter,
      onMouseMove: onMouseMove,
      onMouseLeave: onMouseLeave,
      onClick: onClick,
      tooltip: tooltip,
      blendMode: blendMode
    }),
    markers: react.createElement(nivo_core_es/* CartesianMarkers */.TL, {
      key: "markers",
      markers: markers,
      width: innerWidth,
      height: innerHeight,
      xScale: xScale,
      yScale: yScale
    }),
    mesh: null,
    annotations: react.createElement(ScatterPlotAnnotations, {
      key: "annotations",
      nodes: nodes,
      annotations: annotations,
      innerWidth: innerWidth,
      innerHeight: innerHeight,
      animate: animate
    }),
    legends: legends.map(function (legend, i) {
      return react.createElement(nivo_legends_es/* BoxLegendSvg */.$6, Object.assign({
        key: i
      }, legend, {
        containerWidth: innerWidth,
        containerHeight: innerHeight,
        data: legendData,
        theme: theme
      }));
    })
  };

  if (isInteractive === true && useMesh === true) {
    layerById.mesh = react.createElement(Mesh$1, {
      key: "mesh",
      nodes: nodes,
      width: innerWidth,
      height: innerHeight,
      onMouseEnter: onMouseEnter,
      onMouseMove: onMouseMove,
      onMouseLeave: onMouseLeave,
      onClick: onClick,
      tooltip: tooltip,
      debug: debugMesh
    });
  }

  return react.createElement(nivo_core_es/* SvgWrapper */.tM, {
    width: outerWidth,
    height: outerHeight,
    margin: margin,
    theme: theme,
    role: role
  }, layers.map(function (layer, i) {
    if (layerById[layer] !== undefined) {
      return layerById[layer];
    }

    if (typeof layer === 'function') {
      return react.createElement(react.Fragment, {
        key: i
      }, react.createElement(layer, customLayerProps));
    }

    throw new Error("Unknown layer (".concat(layer, ")"));
  }));
};

ScatterPlot.defaultProps = ScatterPlotDefaultProps;
var ScatterPlot$1 = (0,react.memo)((0,nivo_core_es/* withContainer */.li)(ScatterPlot));

var ResponsiveScatterPlot = function ResponsiveScatterPlot(props) {
  return React.createElement(ResponsiveWrapper, null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return React.createElement(ScatterPlot$1, Object.assign({
      width: width,
      height: height
    }, props));
  });
};

function nivo_scatterplot_es_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function nivo_scatterplot_es_iterableToArrayLimit(arr, i) {
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

function nivo_scatterplot_es_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function nivo_scatterplot_es_slicedToArray(arr, i) {
  return nivo_scatterplot_es_arrayWithHoles(arr) || nivo_scatterplot_es_iterableToArrayLimit(arr, i) || nivo_scatterplot_es_unsupportedIterableToArray(arr, i) || nivo_scatterplot_es_nonIterableRest();
}

var ScatterPlotCanvas = function ScatterPlotCanvas(props) {
  var data = props.data,
      xScaleSpec = props.xScale,
      xFormat = props.xFormat,
      yScaleSpec = props.yScale,
      yFormat = props.yFormat,
      width = props.width,
      height = props.height,
      partialMargin = props.margin,
      pixelRatio = props.pixelRatio,
      layers = props.layers,
      colors = props.colors,
      nodeSize = props.nodeSize,
      renderNode = props.renderNode,
      enableGridX = props.enableGridX,
      gridXValues = props.gridXValues,
      enableGridY = props.enableGridY,
      gridYValues = props.gridYValues,
      axisTop = props.axisTop,
      axisRight = props.axisRight,
      axisBottom = props.axisBottom,
      axisLeft = props.axisLeft,
      annotations = props.annotations,
      isInteractive = props.isInteractive,
      debugMesh = props.debugMesh,
      onMouseEnter = props.onMouseEnter,
      onMouseMove = props.onMouseMove,
      onMouseLeave = props.onMouseLeave,
      onClick = props.onClick,
      tooltip = props.tooltip,
      legends = props.legends;
  var canvasEl = (0,react.useRef)(null);
  var theme = (0,nivo_core_es/* useTheme */.Fg)();

  var _useState = (0,react.useState)(null),
      _useState2 = nivo_scatterplot_es_slicedToArray(_useState, 2),
      currentNode = _useState2[0],
      setCurrentNode = _useState2[1];

  var _useDimensions = (0,nivo_core_es/* useDimensions */.Bs)(width, height, partialMargin),
      margin = _useDimensions.margin,
      innerWidth = _useDimensions.innerWidth,
      innerHeight = _useDimensions.innerHeight,
      outerWidth = _useDimensions.outerWidth,
      outerHeight = _useDimensions.outerHeight;

  var _useScatterPlot = useScatterPlot({
    data: data,
    xScaleSpec: xScaleSpec,
    xFormat: xFormat,
    yScaleSpec: yScaleSpec,
    yFormat: yFormat,
    width: innerWidth,
    height: innerHeight,
    nodeSize: nodeSize,
    colors: colors
  }),
      xScale = _useScatterPlot.xScale,
      yScale = _useScatterPlot.yScale,
      nodes = _useScatterPlot.nodes,
      legendData = _useScatterPlot.legendData;

  var boundAnnotations = useScatterPlotAnnotations(nodes, annotations);

  var _useVoronoiMesh = (0,nivo_voronoi_es/* useVoronoiMesh */.ZR)({
    points: nodes,
    width: innerWidth,
    height: innerHeight,
    debug: debugMesh
  }),
      delaunay = _useVoronoiMesh.delaunay,
      voronoi = _useVoronoiMesh.voronoi;

  var customLayerProps = (0,react.useMemo)(function () {
    return nivo_scatterplot_es_objectSpread2(nivo_scatterplot_es_objectSpread2({}, props), {}, {
      xScale: xScale,
      yScale: yScale,
      nodes: nodes,
      margin: margin,
      innerWidth: innerWidth,
      innerHeight: innerHeight,
      outerWidth: outerWidth,
      outerHeight: outerHeight
    });
  }, [xScale, yScale, nodes, margin, innerWidth, innerHeight, outerWidth, outerHeight]);
  (0,react.useEffect)(function () {
    canvasEl.current.width = outerWidth * pixelRatio;
    canvasEl.current.height = outerHeight * pixelRatio;
    var ctx = canvasEl.current.getContext('2d');
    ctx.scale(pixelRatio, pixelRatio);
    ctx.fillStyle = theme.background;
    ctx.fillRect(0, 0, outerWidth, outerHeight);
    ctx.translate(margin.left, margin.top);
    layers.forEach(function (layer) {
      if (layer === 'grid') {
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
      } else if (layer === 'annotations') {
        renderAnnotationsToCanvas(ctx, {
          annotations: boundAnnotations,
          theme: theme
        });
      } else if (layer === 'axes') {
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
      } else if (layer === 'nodes') {
        nodes.forEach(function (node) {
          renderNode(ctx, node);
        });
      } else if (layer === 'mesh') {
        if (debugMesh === true) {
          (0,nivo_voronoi_es/* renderVoronoiToCanvas */.qF)(ctx, voronoi);

          if (currentNode) {
            (0,nivo_voronoi_es/* renderVoronoiCellToCanvas */.r$)(ctx, voronoi, currentNode.index);
          }
        }
      } else if (layer === 'legends') {
        legends.forEach(function (legend) {
          (0,nivo_legends_es/* renderLegendToCanvas */.as)(ctx, nivo_scatterplot_es_objectSpread2(nivo_scatterplot_es_objectSpread2({}, legend), {}, {
            data: legendData,
            containerWidth: innerWidth,
            containerHeight: innerHeight,
            theme: theme
          }));
        });
      } else if (typeof layer === 'function') {
        layer(ctx, customLayerProps);
      } else {
        throw new Error("Invalid layer: ".concat(layer));
      }
    });
  }, [canvasEl, innerWidth, innerHeight, outerWidth, outerHeight, margin.top, margin.left, pixelRatio, renderNode, layers, customLayerProps, theme, xScale, yScale, nodes, enableGridX, enableGridY, axisTop, axisRight, axisBottom, axisLeft, legends, legendData, debugMesh, voronoi, currentNode]);

  var _useTooltip = (0,nivo_tooltip_es/* useTooltip */.lL)(),
      showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
      hideTooltip = _useTooltip.hideTooltip;

  var getNodeFromMouseEvent = (0,react.useCallback)(function (event) {
    var _getRelativeCursor = (0,nivo_core_es/* getRelativeCursor */.P6)(canvasEl.current, event),
        _getRelativeCursor2 = nivo_scatterplot_es_slicedToArray(_getRelativeCursor, 2),
        x = _getRelativeCursor2[0],
        y = _getRelativeCursor2[1];

    if (!(0,nivo_core_es/* isCursorInRect */.zn)(margin.left, margin.top, innerWidth, innerHeight, x, y)) return null;
    var nodeIndex = delaunay.find(x - margin.left, y - margin.top);
    return nodes[nodeIndex];
  }, [canvasEl, margin, innerWidth, innerHeight, delaunay]);
  var handleMouseHover = (0,react.useCallback)(function (event) {
    var node = getNodeFromMouseEvent(event);
    setCurrentNode(node);

    if (node) {
      showTooltipFromEvent(react.createElement(tooltip, {
        node: node
      }), event);

      if (currentNode && currentNode.id !== node.id) {
        onMouseLeave && onMouseLeave(currentNode, event);
        onMouseEnter && onMouseEnter(node, event);
      }

      if (!currentNode) {
        onMouseEnter && onMouseEnter(node, event);
      }

      onMouseMove && onMouseMove(node, event);
    } else {
      hideTooltip();
      currentNode && onMouseLeave && onMouseLeave(currentNode, event);
    }
  }, [getNodeFromMouseEvent, currentNode, setCurrentNode, showTooltipFromEvent, hideTooltip, tooltip, onMouseEnter, onMouseMove, onMouseLeave]);
  var handleMouseLeave = (0,react.useCallback)(function (event) {
    hideTooltip();
    setCurrentNode(null);
    currentNode && onMouseLeave && onMouseLeave(currentNode, event);
  }, [hideTooltip, currentNode, setCurrentNode, onMouseLeave]);
  var handleClick = (0,react.useCallback)(function (event) {
    if (onClick) {
      var node = getNodeFromMouseEvent(event);
      node && onClick(node, event);
    }
  }, [getNodeFromMouseEvent, onClick]);
  return react.createElement("canvas", {
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

ScatterPlotCanvas.defaultProps = nivo_scatterplot_es_objectSpread2(nivo_scatterplot_es_objectSpread2({}, ScatterPlotCanvasDefaultProps), {}, {
  renderNode: function renderNode(ctx, node) {
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.size / 2, 0, 2 * Math.PI);
    ctx.fillStyle = node.style.color;
    ctx.fill();
  }
});
var ScatterPlotCanvas$1 = (0,react.memo)((0,nivo_core_es/* withContainer */.li)(ScatterPlotCanvas));

var ResponsiveScatterPlotCanvas = function ResponsiveScatterPlotCanvas(props) {
  return React.createElement(ResponsiveWrapper, null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return React.createElement(ScatterPlotCanvas$1, Object.assign({
      width: width,
      height: height
    }, props));
  });
};


;// CONCATENATED MODULE: ./src/components/blockly/fields/ScatterPlot.tsx

/* harmony default export */ var fields_ScatterPlot = (ScatterPlot$1);

/***/ }),

/***/ 80760:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseEach = __webpack_require__(89881);

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),

/***/ 14259:
/***/ (function(module) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ 57406:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var castPath = __webpack_require__(71811),
    last = __webpack_require__(10928),
    parent = __webpack_require__(40292),
    toKey = __webpack_require__(40327);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ 60696:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isPlainObject = __webpack_require__(68630);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ 40292:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGet = __webpack_require__(97786),
    baseSlice = __webpack_require__(14259);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ 63105:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayFilter = __webpack_require__(34963),
    baseFilter = __webpack_require__(80760),
    baseIteratee = __webpack_require__(67206),
    isArray = __webpack_require__(1469);

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),

/***/ 81763:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(44239),
    isObjectLike = __webpack_require__(37005);

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),

/***/ 57557:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayMap = __webpack_require__(29932),
    baseClone = __webpack_require__(85990),
    baseUnset = __webpack_require__(57406),
    castPath = __webpack_require__(71811),
    copyObject = __webpack_require__(98363),
    customOmitClone = __webpack_require__(60696),
    flatRest = __webpack_require__(99021),
    getAllKeysIn = __webpack_require__(46904);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ })

}]);