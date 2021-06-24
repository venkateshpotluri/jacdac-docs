(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8423],{

/***/ 28423:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ fields_Pie; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@nivo/core/dist/nivo-core.es.js + 29 modules
var nivo_core_es = __webpack_require__(50928);
// EXTERNAL MODULE: ./node_modules/@nivo/colors/dist/nivo-colors.es.js + 2 modules
var nivo_colors_es = __webpack_require__(68204);
// EXTERNAL MODULE: ./node_modules/@react-spring/web/dist/react-spring-web.esm.js
var react_spring_web_esm = __webpack_require__(85468);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/line.js
var line = __webpack_require__(84887);
// EXTERNAL MODULE: ./node_modules/d3-path/src/path.js
var path = __webpack_require__(56940);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/constant.js
var constant = __webpack_require__(21235);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/math.js
var math = __webpack_require__(33841);
;// CONCATENATED MODULE: ./node_modules/d3-shape/src/arc.js




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0,
      y10 = y1 - y0,
      x32 = x3 - x2,
      y32 = y3 - y2,
      t = y32 * x10 - x32 * y10;
  if (t * t < math/* epsilon */.Ho) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
} // Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html


function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / (0,math/* sqrt */._b)(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * (0,math/* sqrt */._b)((0,math/* max */.Fp)(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00; // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?

  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* harmony default export */ function arc() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = (0,constant/* default */.Z)(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - math/* halfPi */.ou,
        a1 = endAngle.apply(this, arguments) - math/* halfPi */.ou,
        da = (0,math/* abs */.Wn)(a1 - a0),
        cw = a1 > a0;
    if (!context) context = buffer = (0,path/* default */.Z)(); // Ensure that the outer radius is always larger than the inner radius.

    if (r1 < r0) r = r1, r1 = r0, r0 = r; // Is it a point?

    if (!(r1 > math/* epsilon */.Ho)) context.moveTo(0, 0); // Or is it a circle or annulus?
    else if (da > math/* tau */.BZ - math/* epsilon */.Ho) {
        context.moveTo(r1 * (0,math/* cos */.mC)(a0), r1 * (0,math/* sin */.O$)(a0));
        context.arc(0, 0, r1, a0, a1, !cw);

        if (r0 > math/* epsilon */.Ho) {
          context.moveTo(r0 * (0,math/* cos */.mC)(a1), r0 * (0,math/* sin */.O$)(a1));
          context.arc(0, 0, r0, a1, a0, cw);
        }
      } // Or is it a circular or annular sector?
      else {
          var a01 = a0,
              a11 = a1,
              a00 = a0,
              a10 = a1,
              da0 = da,
              da1 = da,
              ap = padAngle.apply(this, arguments) / 2,
              rp = ap > math/* epsilon */.Ho && (padRadius ? +padRadius.apply(this, arguments) : (0,math/* sqrt */._b)(r0 * r0 + r1 * r1)),
              rc = (0,math/* min */.VV)((0,math/* abs */.Wn)(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
              rc0 = rc,
              rc1 = rc,
              t0,
              t1; // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.

          if (rp > math/* epsilon */.Ho) {
            var p0 = (0,math/* asin */.ZR)(rp / r0 * (0,math/* sin */.O$)(ap)),
                p1 = (0,math/* asin */.ZR)(rp / r1 * (0,math/* sin */.O$)(ap));
            if ((da0 -= p0 * 2) > math/* epsilon */.Ho) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;else da0 = 0, a00 = a10 = (a0 + a1) / 2;
            if ((da1 -= p1 * 2) > math/* epsilon */.Ho) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;else da1 = 0, a01 = a11 = (a0 + a1) / 2;
          }

          var x01 = r1 * (0,math/* cos */.mC)(a01),
              y01 = r1 * (0,math/* sin */.O$)(a01),
              x10 = r0 * (0,math/* cos */.mC)(a10),
              y10 = r0 * (0,math/* sin */.O$)(a10); // Apply rounded corners?

          if (rc > math/* epsilon */.Ho) {
            var x11 = r1 * (0,math/* cos */.mC)(a11),
                y11 = r1 * (0,math/* sin */.O$)(a11),
                x00 = r0 * (0,math/* cos */.mC)(a00),
                y00 = r0 * (0,math/* sin */.O$)(a00),
                oc; // Restrict the corner radius according to the sector angle.

            if (da < math.pi && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
              var ax = x01 - oc[0],
                  ay = y01 - oc[1],
                  bx = x11 - oc[0],
                  by = y11 - oc[1],
                  kc = 1 / (0,math/* sin */.O$)((0,math/* acos */.Kh)((ax * bx + ay * by) / ((0,math/* sqrt */._b)(ax * ax + ay * ay) * (0,math/* sqrt */._b)(bx * bx + by * by))) / 2),
                  lc = (0,math/* sqrt */._b)(oc[0] * oc[0] + oc[1] * oc[1]);
              rc0 = (0,math/* min */.VV)(rc, (r0 - lc) / (kc - 1));
              rc1 = (0,math/* min */.VV)(rc, (r1 - lc) / (kc + 1));
            }
          } // Is the sector collapsed to a line?


          if (!(da1 > math/* epsilon */.Ho)) context.moveTo(x01, y01); // Does the sector’s outer ring have rounded corners?
          else if (rc1 > math/* epsilon */.Ho) {
              t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
              t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
              context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01); // Have the corners merged?

              if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, (0,math/* atan2 */.fv)(t0.y01, t0.x01), (0,math/* atan2 */.fv)(t1.y01, t1.x01), !cw); // Otherwise, draw the two corners and the ring.
              else {
                  context.arc(t0.cx, t0.cy, rc1, (0,math/* atan2 */.fv)(t0.y01, t0.x01), (0,math/* atan2 */.fv)(t0.y11, t0.x11), !cw);
                  context.arc(0, 0, r1, (0,math/* atan2 */.fv)(t0.cy + t0.y11, t0.cx + t0.x11), (0,math/* atan2 */.fv)(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
                  context.arc(t1.cx, t1.cy, rc1, (0,math/* atan2 */.fv)(t1.y11, t1.x11), (0,math/* atan2 */.fv)(t1.y01, t1.x01), !cw);
                }
            } // Or is the outer ring just a circular arc?
            else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw); // Is there no inner ring, and it’s a circular sector?
          // Or perhaps it’s an annular sector collapsed due to padding?

          if (!(r0 > math/* epsilon */.Ho) || !(da0 > math/* epsilon */.Ho)) context.lineTo(x10, y10); // Does the sector’s inner ring (or point) have rounded corners?
          else if (rc0 > math/* epsilon */.Ho) {
              t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
              t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
              context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01); // Have the corners merged?

              if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, (0,math/* atan2 */.fv)(t0.y01, t0.x01), (0,math/* atan2 */.fv)(t1.y01, t1.x01), !cw); // Otherwise, draw the two corners and the ring.
              else {
                  context.arc(t0.cx, t0.cy, rc0, (0,math/* atan2 */.fv)(t0.y01, t0.x01), (0,math/* atan2 */.fv)(t0.y11, t0.x11), !cw);
                  context.arc(0, 0, r0, (0,math/* atan2 */.fv)(t0.cy + t0.y11, t0.cx + t0.x11), (0,math/* atan2 */.fv)(t1.cy + t1.y11, t1.cx + t1.x11), cw);
                  context.arc(t1.cx, t1.cy, rc0, (0,math/* atan2 */.fv)(t1.y11, t1.x11), (0,math/* atan2 */.fv)(t1.y01, t1.x01), !cw);
                }
            } // Or is the inner ring just a circular arc?
            else context.arc(0, 0, r0, a10, a00, cw);
        }
    context.closePath();
    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function () {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - math.pi / 2;
    return [(0,math/* cos */.mC)(a) * r, (0,math/* sin */.O$)(a) * r];
  };

  arc.innerRadius = function (_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), arc) : innerRadius;
  };

  arc.outerRadius = function (_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function (_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), arc) : cornerRadius;
  };

  arc.padRadius = function (_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), arc) : padRadius;
  };

  arc.startAngle = function (_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), arc) : startAngle;
  };

  arc.endAngle = function (_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), arc) : endAngle;
  };

  arc.padAngle = function (_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), arc) : padAngle;
  };

  arc.context = function (_) {
    return arguments.length ? (context = _ == null ? null : _, arc) : context;
  };

  return arc;
}
;// CONCATENATED MODULE: ./node_modules/@nivo/arcs/dist/nivo-arcs.es.js






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

var getNormalizedAngle = function getNormalizedAngle(angle) {
  var normalizedAngle = angle % (Math.PI * 2);

  if (normalizedAngle < 0) {
    normalizedAngle += Math.PI * 2;
  }

  return normalizedAngle;
};

var filterDataBySkipAngle = function filterDataBySkipAngle(data, skipAngle) {
  return data.filter(function (datum) {
    return Math.abs((0,nivo_core_es/* radiansToDegrees */.vi)(datum.arc.endAngle - datum.arc.startAngle)) >= skipAngle;
  });
};

var useFilteredDataBySkipAngle = function useFilteredDataBySkipAngle(data, skipAngle) {
  return (0,react.useMemo)(function () {
    return filterDataBySkipAngle(data, skipAngle);
  }, [data, skipAngle]);
};

var arcTransitionModes = (/* unused pure expression or super */ null && (['startAngle', 'middleAngle', 'endAngle', 'innerRadius', 'centerRadius', 'outerRadius', 'pushIn', 'pushOut']));
var arcTransitionModeById = {
  startAngle: {
    enter: function enter(arc) {
      return _objectSpread2(_objectSpread2({}, arc), {}, {
        endAngle: arc.startAngle
      });
    },
    update: function update(arc) {
      return arc;
    },
    leave: function leave(arc) {
      return _objectSpread2(_objectSpread2({}, arc), {}, {
        startAngle: arc.endAngle
      });
    }
  },
  middleAngle: {
    enter: function enter(arc) {
      var middleAngle = arc.startAngle + (arc.endAngle - arc.startAngle) / 2;
      return _objectSpread2(_objectSpread2({}, arc), {}, {
        startAngle: middleAngle,
        endAngle: middleAngle
      });
    },
    update: function update(arc) {
      return arc;
    },
    leave: function leave(arc) {
      var middleAngle = arc.startAngle + (arc.endAngle - arc.startAngle) / 2;
      return _objectSpread2(_objectSpread2({}, arc), {}, {
        startAngle: middleAngle,
        endAngle: middleAngle
      });
    }
  },
  endAngle: {
    enter: function enter(arc) {
      return _objectSpread2(_objectSpread2({}, arc), {}, {
        startAngle: arc.endAngle
      });
    },
    update: function update(arc) {
      return arc;
    },
    leave: function leave(arc) {
      return _objectSpread2(_objectSpread2({}, arc), {}, {
        endAngle: arc.startAngle
      });
    }
  },
  innerRadius: {
    enter: function enter(arc) {
      return _objectSpread2(_objectSpread2({}, arc), {}, {
        outerRadius: arc.innerRadius
      });
    },
    update: function update(arc) {
      return arc;
    },
    leave: function leave(arc) {
      return _objectSpread2(_objectSpread2({}, arc), {}, {
        innerRadius: arc.outerRadius
      });
    }
  },
  centerRadius: {
    enter: function enter(arc) {
      var centerRadius = arc.innerRadius + (arc.outerRadius - arc.innerRadius) / 2;
      return _objectSpread2(_objectSpread2({}, arc), {}, {
        innerRadius: centerRadius,
        outerRadius: centerRadius
      });
    },
    update: function update(arc) {
      return arc;
    },
    leave: function leave(arc) {
      var centerRadius = arc.innerRadius + (arc.outerRadius - arc.innerRadius) / 2;
      return _objectSpread2(_objectSpread2({}, arc), {}, {
        innerRadius: centerRadius,
        outerRadius: centerRadius
      });
    }
  },
  outerRadius: {
    enter: function enter(arc) {
      return _objectSpread2(_objectSpread2({}, arc), {}, {
        innerRadius: arc.outerRadius
      });
    },
    update: function update(arc) {
      return arc;
    },
    leave: function leave(arc) {
      return _objectSpread2(_objectSpread2({}, arc), {}, {
        outerRadius: arc.innerRadius
      });
    }
  },
  pushIn: {
    enter: function enter(arc) {
      return _objectSpread2(_objectSpread2({}, arc), {}, {
        innerRadius: arc.innerRadius - arc.outerRadius + arc.innerRadius,
        outerRadius: arc.innerRadius
      });
    },
    update: function update(arc) {
      return arc;
    },
    leave: function leave(arc) {
      return _objectSpread2(_objectSpread2({}, arc), {}, {
        innerRadius: arc.outerRadius,
        outerRadius: arc.outerRadius + arc.outerRadius - arc.innerRadius
      });
    }
  },
  pushOut: {
    enter: function enter(arc) {
      return _objectSpread2(_objectSpread2({}, arc), {}, {
        innerRadius: arc.outerRadius,
        outerRadius: arc.outerRadius + arc.outerRadius - arc.innerRadius
      });
    },
    update: function update(arc) {
      return arc;
    },
    leave: function leave(arc) {
      return _objectSpread2(_objectSpread2({}, arc), {}, {
        innerRadius: arc.innerRadius - arc.outerRadius + arc.innerRadius,
        outerRadius: arc.innerRadius
      });
    }
  }
};

var useArcTransitionMode = function useArcTransitionMode(mode, extraTransition) {
  return (0,react.useMemo)(function () {
    var transitionMode = arcTransitionModeById[mode];
    return {
      enter: function enter(datum) {
        return _objectSpread2(_objectSpread2({
          progress: 0
        }, transitionMode.enter(datum.arc)), extraTransition ? extraTransition.enter(datum) : {});
      },
      update: function update(datum) {
        return _objectSpread2(_objectSpread2({
          progress: 1
        }, transitionMode.update(datum.arc)), extraTransition ? extraTransition.update(datum) : {});
      },
      leave: function leave(datum) {
        return _objectSpread2(_objectSpread2({
          progress: 0
        }, transitionMode.leave(datum.arc)), extraTransition ? extraTransition.leave(datum) : {});
      }
    };
  }, [mode, extraTransition]);
};

var computeArcCenter = function computeArcCenter(arc, offset) {
  var angle = (0,nivo_core_es/* midAngle */.Vp)(arc) - Math.PI / 2;
  var radius = arc.innerRadius + (arc.outerRadius - arc.innerRadius) * offset;
  return (0,nivo_core_es/* positionFromAngle */.re)(angle, radius);
};

var interpolateArcCenter = function interpolateArcCenter(offset) {
  return function (startAngleValue, endAngleValue, innerRadiusValue, outerRadiusValue) {
    return (0,react_spring_web_esm.to)([startAngleValue, endAngleValue, innerRadiusValue, outerRadiusValue], function (startAngle, endAngle, innerRadius, outerRadius) {
      var centroid = computeArcCenter({
        startAngle: startAngle,
        endAngle: endAngle,
        innerRadius: innerRadius,
        outerRadius: outerRadius
      }, offset);
      return "translate(".concat(centroid.x, ",").concat(centroid.y, ")");
    });
  };
};

var useArcCentersTransition = function useArcCentersTransition(data) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'innerRadius';
  var extra = arguments.length > 3 ? arguments[3] : undefined;

  var _useMotionConfig = (0,nivo_core_es/* useMotionConfig */.tf)(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.config;

  var phases = useArcTransitionMode(mode, extra);
  var transition = (0,react_spring_web_esm.useTransition)(data, {
    keys: function keys(datum) {
      return datum.id;
    },
    initial: phases.update,
    from: phases.enter,
    enter: phases.update,
    update: phases.update,
    leave: phases.leave,
    config: springConfig,
    immediate: !animate
  });
  return {
    transition: transition,
    interpolate: interpolateArcCenter(offset)
  };
};

var useArcCenters = function useArcCenters(_ref) {
  var data = _ref.data,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? 0.5 : _ref$offset,
      _ref$skipAngle = _ref.skipAngle,
      skipAngle = _ref$skipAngle === void 0 ? 0 : _ref$skipAngle,
      _ref$computeExtraProp = _ref.computeExtraProps,
      computeExtraProps = _ref$computeExtraProp === void 0 ? function () {
    return {};
  } : _ref$computeExtraProp;
  return useMemo(function () {
    return filterDataBySkipAngle(data, skipAngle).map(function (datum) {
      var position = computeArcCenter(datum.arc, offset);
      return _objectSpread2(_objectSpread2({}, computeExtraProps(datum)), {}, {
        x: position.x,
        y: position.y,
        data: datum
      });
    });
  }, [data, offset, skipAngle, computeExtraProps]);
};

var staticStyle = {
  pointerEvents: 'none'
};

var ArcLabel = function ArcLabel(_ref) {
  var label = _ref.label,
      style = _ref.style;
  var theme = (0,nivo_core_es/* useTheme */.Fg)();
  return react.createElement(react_spring_web_esm/* animated.g */.q.g, {
    transform: style.transform,
    opacity: style.progress,
    style: staticStyle
  }, react.createElement(react_spring_web_esm/* animated.text */.q.text, {
    textAnchor: "middle",
    dominantBaseline: "central",
    style: _objectSpread2(_objectSpread2({}, theme.labels.text), {}, {
      fill: style.textColor
    })
  }, label));
};

var ArcLabelsLayer = function ArcLabelsLayer(_ref) {
  var center = _ref.center,
      data = _ref.data,
      transitionMode = _ref.transitionMode,
      labelAccessor = _ref.label,
      radiusOffset = _ref.radiusOffset,
      skipAngle = _ref.skipAngle,
      textColor = _ref.textColor,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? ArcLabel : _ref$component;
  var getLabel = (0,nivo_core_es/* usePropertyAccessor */.LR)(labelAccessor);
  var theme = (0,nivo_core_es/* useTheme */.Fg)();
  var getTextColor = (0,nivo_colors_es/* useInheritedColor */.Bf)(textColor, theme);
  var filteredData = (0,react.useMemo)(function () {
    return data.filter(function (datum) {
      return Math.abs((0,nivo_core_es/* radiansToDegrees */.vi)(datum.arc.endAngle - datum.arc.startAngle)) >= skipAngle;
    });
  }, [data, skipAngle]);

  var _useArcCentersTransit = useArcCentersTransition(filteredData, radiusOffset, transitionMode),
      transition = _useArcCentersTransit.transition,
      interpolate = _useArcCentersTransit.interpolate;

  var Label = component;
  return react.createElement("g", {
    transform: "translate(".concat(center[0], ",").concat(center[1], ")")
  }, transition(function (transitionProps, datum) {
    return react.createElement(Label, {
      key: datum.id,
      datum: datum,
      label: getLabel(datum),
      style: _objectSpread2(_objectSpread2({}, transitionProps), {}, {
        transform: interpolate(transitionProps.startAngle, transitionProps.endAngle, transitionProps.innerRadius, transitionProps.outerRadius),
        textColor: getTextColor(datum)
      })
    });
  }));
};

var nivo_arcs_es_drawCanvasArcLabels = function drawCanvasArcLabels(ctx, labels, theme) {
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = "".concat(theme.labels.text.fontSize, "px ").concat(theme.labels.text.fontFamily);
  labels.forEach(function (label) {
    ctx.fillStyle = label.textColor;
    ctx.fillText("".concat(label.label), label.x, label.y);
  });
};

var nivo_arcs_es_useArcLabels = function useArcLabels(_ref) {
  var data = _ref.data,
      offset = _ref.offset,
      skipAngle = _ref.skipAngle,
      label = _ref.label,
      textColor = _ref.textColor;
  var getLabel = usePropertyAccessor(label);
  var theme = useTheme();
  var getTextColor = useInheritedColor(textColor, theme);
  var computeExtraProps = useCallback(function (datum) {
    return {
      label: getLabel(datum),
      textColor: getTextColor(datum)
    };
  }, [getLabel, getTextColor]);
  return useArcCenters({
    data: data,
    offset: offset,
    skipAngle: skipAngle,
    computeExtraProps: computeExtraProps
  });
};

var computeArcLinkTextAnchor = function computeArcLinkTextAnchor(arc) {
  var centerAngle = getNormalizedAngle(arc.startAngle + (arc.endAngle - arc.startAngle) / 2 - Math.PI / 2);

  if (centerAngle < Math.PI / 2 || centerAngle > Math.PI * 1.5) {
    return 'start';
  }

  return 'end';
};

var computeArcLink = function computeArcLink(arc, offset, diagonalLength, straightLength) {
  var centerAngle = getNormalizedAngle(arc.startAngle + (arc.endAngle - arc.startAngle) / 2 - Math.PI / 2);
  var point0 = (0,nivo_core_es/* positionFromAngle */.re)(centerAngle, arc.outerRadius + offset);
  var point1 = (0,nivo_core_es/* positionFromAngle */.re)(centerAngle, arc.outerRadius + offset + diagonalLength);
  var side;
  var point2;

  if (centerAngle < Math.PI / 2 || centerAngle > Math.PI * 1.5) {
    side = 'after';
    point2 = {
      x: point1.x + straightLength,
      y: point1.y
    };
  } else {
    side = 'before';
    point2 = {
      x: point1.x - straightLength,
      y: point1.y
    };
  }

  return {
    side: side,
    points: [point0, point1, point2]
  };
};

var lineGenerator = (0,line/* default */.Z)().x(function (d) {
  return d.x;
}).y(function (d) {
  return d.y;
});

var useTransitionPhases = function useTransitionPhases(_ref) {
  var offset = _ref.offset,
      diagonalLength = _ref.diagonalLength,
      straightLength = _ref.straightLength,
      textOffset = _ref.textOffset,
      getLinkColor = _ref.getLinkColor,
      getTextColor = _ref.getTextColor;
  return (0,react.useMemo)(function () {
    return {
      enter: function enter(datum) {
        return {
          startAngle: datum.arc.startAngle,
          endAngle: datum.arc.endAngle,
          innerRadius: datum.arc.innerRadius,
          outerRadius: datum.arc.outerRadius,
          offset: offset,
          diagonalLength: 0,
          straightLength: 0,
          textOffset: textOffset,
          linkColor: getLinkColor(datum),
          textColor: getTextColor(datum),
          opacity: 0
        };
      },
      update: function update(d) {
        return {
          startAngle: d.arc.startAngle,
          endAngle: d.arc.endAngle,
          innerRadius: d.arc.innerRadius,
          outerRadius: d.arc.outerRadius,
          offset: offset,
          diagonalLength: diagonalLength,
          straightLength: straightLength,
          textOffset: textOffset,
          linkColor: getLinkColor(d),
          textColor: getTextColor(d),
          opacity: 1
        };
      },
      leave: function leave(d) {
        return {
          startAngle: d.arc.startAngle,
          endAngle: d.arc.endAngle,
          innerRadius: d.arc.innerRadius,
          outerRadius: d.arc.outerRadius,
          offset: offset,
          diagonalLength: 0,
          straightLength: 0,
          textOffset: textOffset,
          linkColor: getLinkColor(d),
          textColor: getTextColor(d),
          opacity: 0
        };
      }
    };
  }, [diagonalLength, straightLength, textOffset, getLinkColor, getTextColor]);
};

var interpolateLink = function interpolateLink(startAngleValue, endAngleValue, innerRadiusValue, outerRadiusValue, offsetValue, diagonalLengthValue, straightLengthValue) {
  return (0,react_spring_web_esm.to)([startAngleValue, endAngleValue, innerRadiusValue, outerRadiusValue, offsetValue, diagonalLengthValue, straightLengthValue], function (startAngle, endAngle, innerRadius, outerRadius, offset, diagonalLengthAnimated, straightLengthAnimated) {
    var _computeArcLink = computeArcLink({
      startAngle: startAngle,
      endAngle: endAngle,
      innerRadius: innerRadius,
      outerRadius: outerRadius
    }, offset, diagonalLengthAnimated, straightLengthAnimated),
        points = _computeArcLink.points;

    return lineGenerator(points);
  });
};

var interpolateTextAnchor = function interpolateTextAnchor(startAngleValue, endAngleValue, innerRadiusValue, outerRadiusValue) {
  return (0,react_spring_web_esm.to)([startAngleValue, endAngleValue, innerRadiusValue, outerRadiusValue], function (startAngle, endAngle, innerRadius, outerRadius) {
    return computeArcLinkTextAnchor({
      startAngle: startAngle,
      endAngle: endAngle,
      innerRadius: innerRadius,
      outerRadius: outerRadius
    });
  });
};

var interpolateTextPosition = function interpolateTextPosition(startAngleValue, endAngleValue, innerRadiusValue, outerRadiusValue, offsetValue, diagonalLengthValue, straightLengthValue, textOffsetValue) {
  return (0,react_spring_web_esm.to)([startAngleValue, endAngleValue, innerRadiusValue, outerRadiusValue, offsetValue, diagonalLengthValue, straightLengthValue, textOffsetValue], function (startAngle, endAngle, innerRadius, outerRadius, offset, diagonalLengthAnimated, straightLengthAnimated, textOffset) {
    var _computeArcLink2 = computeArcLink({
      startAngle: startAngle,
      endAngle: endAngle,
      innerRadius: innerRadius,
      outerRadius: outerRadius
    }, offset, diagonalLengthAnimated, straightLengthAnimated),
        points = _computeArcLink2.points,
        side = _computeArcLink2.side;

    var position = points[2];

    if (side === 'before') {
      position.x -= textOffset;
    } else {
      position.x += textOffset;
    }

    return "translate(".concat(position.x, ",").concat(position.y, ")");
  });
};

var useArcLinkLabelsTransition = function useArcLinkLabelsTransition(_ref2) {
  var data = _ref2.data,
      _ref2$offset = _ref2.offset,
      offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
      diagonalLength = _ref2.diagonalLength,
      straightLength = _ref2.straightLength,
      _ref2$skipAngle = _ref2.skipAngle,
      skipAngle = _ref2$skipAngle === void 0 ? 0 : _ref2$skipAngle,
      textOffset = _ref2.textOffset,
      linkColor = _ref2.linkColor,
      textColor = _ref2.textColor;

  var _useMotionConfig = (0,nivo_core_es/* useMotionConfig */.tf)(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.config;

  var theme = (0,nivo_core_es/* useTheme */.Fg)();
  var getLinkColor = (0,nivo_colors_es/* useInheritedColor */.Bf)(linkColor, theme);
  var getTextColor = (0,nivo_colors_es/* useInheritedColor */.Bf)(textColor, theme);
  var filteredData = useFilteredDataBySkipAngle(data, skipAngle);
  var transitionPhases = useTransitionPhases({
    offset: offset,
    diagonalLength: diagonalLength,
    straightLength: straightLength,
    textOffset: textOffset,
    getLinkColor: getLinkColor,
    getTextColor: getTextColor
  });
  var transition = (0,react_spring_web_esm.useTransition)(filteredData, {
    keys: function keys(datum) {
      return datum.id;
    },
    initial: transitionPhases.update,
    from: transitionPhases.enter,
    enter: transitionPhases.update,
    update: transitionPhases.update,
    leave: transitionPhases.leave,
    config: springConfig,
    immediate: !animate
  });
  return {
    transition: transition,
    interpolateLink: interpolateLink,
    interpolateTextAnchor: interpolateTextAnchor,
    interpolateTextPosition: interpolateTextPosition
  };
};

var ArcLinkLabel = function ArcLinkLabel(_ref) {
  var label = _ref.label,
      style = _ref.style;
  var theme = (0,nivo_core_es/* useTheme */.Fg)();
  return react.createElement(react_spring_web_esm/* animated.g */.q.g, {
    opacity: style.opacity
  }, react.createElement(react_spring_web_esm/* animated.path */.q.path, {
    fill: "none",
    stroke: style.linkColor,
    strokeWidth: style.thickness,
    d: style.path
  }), react.createElement(react_spring_web_esm/* animated.text */.q.text, {
    transform: style.textPosition,
    textAnchor: style.textAnchor,
    dominantBaseline: "central",
    style: _objectSpread2(_objectSpread2({}, theme.labels.text), {}, {
      fill: style.textColor
    })
  }, label));
};

var ArcLinkLabelsLayer = function ArcLinkLabelsLayer(_ref) {
  var center = _ref.center,
      data = _ref.data,
      labelAccessor = _ref.label,
      skipAngle = _ref.skipAngle,
      offset = _ref.offset,
      diagonalLength = _ref.diagonalLength,
      straightLength = _ref.straightLength,
      strokeWidth = _ref.strokeWidth,
      textOffset = _ref.textOffset,
      textColor = _ref.textColor,
      linkColor = _ref.linkColor,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? ArcLinkLabel : _ref$component;
  var getLabel = (0,nivo_core_es/* usePropertyAccessor */.LR)(labelAccessor);

  var _useArcLinkLabelsTran = useArcLinkLabelsTransition({
    data: data,
    skipAngle: skipAngle,
    offset: offset,
    diagonalLength: diagonalLength,
    straightLength: straightLength,
    textOffset: textOffset,
    linkColor: linkColor,
    textColor: textColor
  }),
      transition = _useArcLinkLabelsTran.transition,
      interpolateLink = _useArcLinkLabelsTran.interpolateLink,
      interpolateTextAnchor = _useArcLinkLabelsTran.interpolateTextAnchor,
      interpolateTextPosition = _useArcLinkLabelsTran.interpolateTextPosition;

  var Label = component;
  return react.createElement("g", {
    transform: "translate(".concat(center[0], ",").concat(center[1], ")")
  }, transition(function (transitionProps, datum) {
    return react.createElement(Label, {
      key: datum.id,
      datum: datum,
      label: getLabel(datum),
      style: _objectSpread2(_objectSpread2({}, transitionProps), {}, {
        thickness: strokeWidth,
        path: interpolateLink(transitionProps.startAngle, transitionProps.endAngle, transitionProps.innerRadius, transitionProps.outerRadius, transitionProps.offset, transitionProps.diagonalLength, transitionProps.straightLength),
        textAnchor: interpolateTextAnchor(transitionProps.startAngle, transitionProps.endAngle, transitionProps.innerRadius, transitionProps.outerRadius),
        textPosition: interpolateTextPosition(transitionProps.startAngle, transitionProps.endAngle, transitionProps.innerRadius, transitionProps.outerRadius, transitionProps.offset, transitionProps.diagonalLength, transitionProps.straightLength, transitionProps.textOffset)
      })
    });
  }));
};

var nivo_arcs_es_drawCanvasArcLinkLabels = function drawCanvasArcLinkLabels(ctx, labels, theme, strokeWidth) {
  ctx.textBaseline = 'middle';
  ctx.font = "".concat(theme.labels.text.fontSize, "px ").concat(theme.labels.text.fontFamily);
  labels.forEach(function (label) {
    ctx.fillStyle = label.textColor;
    ctx.textAlign = textPropsByEngine.canvas.align[label.textAnchor];
    ctx.fillText("".concat(label.label), label.x, label.y);
    ctx.beginPath();
    ctx.strokeStyle = label.linkColor;
    ctx.lineWidth = strokeWidth;
    label.points.forEach(function (point, index) {
      if (index === 0) ctx.moveTo(point.x, point.y);else ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();
  });
};

var useArcLinks = function useArcLinks(_ref) {
  var data = _ref.data,
      _ref$skipAngle = _ref.skipAngle,
      skipAngle = _ref$skipAngle === void 0 ? 0 : _ref$skipAngle,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? 0.5 : _ref$offset,
      diagonalLength = _ref.diagonalLength,
      straightLength = _ref.straightLength,
      _ref$computeExtraProp = _ref.computeExtraProps,
      computeExtraProps = _ref$computeExtraProp === void 0 ? function () {
    return {};
  } : _ref$computeExtraProp;
  var links = useMemo(function () {
    return data.filter(function (datum) {
      return Math.abs(radiansToDegrees(datum.arc.endAngle - datum.arc.startAngle)) >= skipAngle;
    }).map(function (datum) {
      return _objectSpread2(_objectSpread2({}, computeArcLink(datum.arc, offset, diagonalLength, straightLength)), {}, {
        data: datum
      });
    });
  }, [data, skipAngle, offset, diagonalLength, straightLength]);
  return useMemo(function () {
    return links.map(function (link) {
      return _objectSpread2(_objectSpread2({}, computeExtraProps(link)), link);
    });
  }, [links, computeExtraProps]);
};

var nivo_arcs_es_useArcLinkLabels = function useArcLinkLabels(_ref) {
  var data = _ref.data,
      skipAngle = _ref.skipAngle,
      offset = _ref.offset,
      diagonalLength = _ref.diagonalLength,
      straightLength = _ref.straightLength,
      _ref$textOffset = _ref.textOffset,
      textOffset = _ref$textOffset === void 0 ? 0 : _ref$textOffset,
      label = _ref.label,
      linkColor = _ref.linkColor,
      textColor = _ref.textColor;
  var getLabel = usePropertyAccessor(label);
  var theme = useTheme();
  var getLinkColor = useInheritedColor(linkColor, theme);
  var getTextColor = useInheritedColor(textColor, theme);
  var computeExtraProps = useCallback(function (link) {
    var position = {
      x: link.points[2].x,
      y: link.points[2].y
    };
    var textAnchor;

    if (link.side === 'before') {
      position.x -= textOffset;
      textAnchor = 'end';
    } else {
      position.x += textOffset;
      textAnchor = 'start';
    }

    return _objectSpread2(_objectSpread2({}, position), {}, {
      label: getLabel(link.data),
      linkColor: getLinkColor(link.data),
      textAnchor: textAnchor,
      textColor: getTextColor(link.data)
    });
  }, [getLabel, getLinkColor, getTextColor, textOffset]);
  return useArcLinks({
    data: data,
    skipAngle: skipAngle,
    offset: offset,
    diagonalLength: diagonalLength,
    straightLength: straightLength,
    computeExtraProps: computeExtraProps
  });
};

var ArcShape = function ArcShape(_ref) {
  var datum = _ref.datum,
      style = _ref.style,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave;
  var handleClick = (0,react.useCallback)(function (event) {
    return onClick === null || onClick === void 0 ? void 0 : onClick(datum, event);
  }, [onClick, datum]);
  var handleMouseEnter = (0,react.useCallback)(function (event) {
    return onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter(datum, event);
  }, [onMouseEnter, datum]);
  var handleMouseMove = (0,react.useCallback)(function (event) {
    return onMouseMove === null || onMouseMove === void 0 ? void 0 : onMouseMove(datum, event);
  }, [onMouseMove, datum]);
  var handleMouseLeave = (0,react.useCallback)(function (event) {
    return onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave(datum, event);
  }, [onMouseLeave, datum]);
  return react.createElement(react_spring_web_esm/* animated.path */.q.path, {
    d: style.path,
    opacity: style.opacity,
    fill: datum.fill || style.color,
    stroke: style.borderColor,
    strokeWidth: style.borderWidth,
    onClick: onClick ? handleClick : undefined,
    onMouseEnter: onMouseEnter ? handleMouseEnter : undefined,
    onMouseMove: onMouseMove ? handleMouseMove : undefined,
    onMouseLeave: onMouseLeave ? handleMouseLeave : undefined
  });
};

var interpolateArc = function interpolateArc(startAngleValue, endAngleValue, innerRadiusValue, outerRadiusValue, arcGenerator) {
  return (0,react_spring_web_esm.to)([startAngleValue, endAngleValue, innerRadiusValue, outerRadiusValue], function (startAngle, endAngle, innerRadius, outerRadius) {
    return arcGenerator({
      startAngle: startAngle,
      endAngle: endAngle,
      innerRadius: Math.max(0, innerRadius),
      outerRadius: Math.max(0, outerRadius)
    });
  });
};

var useArcsTransition = function useArcsTransition(data) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'innerRadius';
  var extra = arguments.length > 2 ? arguments[2] : undefined;

  var _useMotionConfig = (0,nivo_core_es/* useMotionConfig */.tf)(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.config;

  var phases = useArcTransitionMode(mode, extra);
  var transition = (0,react_spring_web_esm.useTransition)(data, {
    keys: function keys(datum) {
      return datum.id;
    },
    initial: phases.update,
    from: phases.enter,
    enter: phases.update,
    update: phases.update,
    leave: phases.leave,
    config: springConfig,
    immediate: !animate
  });
  return {
    transition: transition,
    interpolate: interpolateArc
  };
};

var ArcsLayer = function ArcsLayer(_ref) {
  var center = _ref.center,
      data = _ref.data,
      arcGenerator = _ref.arcGenerator,
      borderWidth = _ref.borderWidth,
      borderColor = _ref.borderColor,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      transitionMode = _ref.transitionMode,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? ArcShape : _ref$component;
  var theme = (0,nivo_core_es/* useTheme */.Fg)();
  var getBorderColor = (0,nivo_colors_es/* useInheritedColor */.Bf)(borderColor, theme);

  var _useArcsTransition = useArcsTransition(data, transitionMode, {
    enter: function enter(datum) {
      return {
        opacity: 0,
        color: datum.color,
        borderColor: getBorderColor(datum)
      };
    },
    update: function update(datum) {
      return {
        opacity: 1,
        color: datum.color,
        borderColor: getBorderColor(datum)
      };
    },
    leave: function leave(datum) {
      return {
        opacity: 0,
        color: datum.color,
        borderColor: getBorderColor(datum)
      };
    }
  }),
      transition = _useArcsTransition.transition,
      interpolate = _useArcsTransition.interpolate;

  var Arc = component;
  return react.createElement("g", {
    transform: "translate(".concat(center[0], ",").concat(center[1], ")")
  }, transition(function (transitionProps, datum) {
    return (0,react.createElement)(Arc, {
      key: datum.id,
      datum: datum,
      style: _objectSpread2(_objectSpread2({}, transitionProps), {}, {
        borderWidth: borderWidth,
        path: interpolate(transitionProps.startAngle, transitionProps.endAngle, transitionProps.innerRadius, transitionProps.outerRadius, arcGenerator)
      }),
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseMove: onMouseMove,
      onMouseLeave: onMouseLeave
    });
  }));
};

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var computeArcBoundingBox = function computeArcBoundingBox(centerX, centerY, radius, startAngle, endAngle) {
  var includeCenter = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
  var points = [];
  var p0 = (0,nivo_core_es/* positionFromAngle */.re)((0,nivo_core_es/* degreesToRadians */.Ht)(startAngle), radius);
  points.push([p0.x, p0.y]);
  var p1 = (0,nivo_core_es/* positionFromAngle */.re)((0,nivo_core_es/* degreesToRadians */.Ht)(endAngle), radius);
  points.push([p1.x, p1.y]);

  for (var angle = Math.round(Math.min(startAngle, endAngle)); angle <= Math.round(Math.max(startAngle, endAngle)); angle++) {
    if (angle % 90 === 0) {
      var p = (0,nivo_core_es/* positionFromAngle */.re)((0,nivo_core_es/* degreesToRadians */.Ht)(angle), radius);
      points.push([p.x, p.y]);
    }
  }

  points = points.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];

    return [centerX + x, centerY + y];
  });

  if (includeCenter === true) {
    points.push([centerX, centerY]);
  }

  var xs = points.map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
        x = _ref4[0];

    return x;
  });
  var ys = points.map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        y = _ref6[1];

    return y;
  });
  var x0 = Math.min.apply(Math, _toConsumableArray(xs));
  var x1 = Math.max.apply(Math, _toConsumableArray(xs));
  var y0 = Math.min.apply(Math, _toConsumableArray(ys));
  var y1 = Math.max.apply(Math, _toConsumableArray(ys));
  return {
    points: points,
    x: x0,
    y: y0,
    width: x1 - x0,
    height: y1 - y0
  };
};

var isCursorInRing = function isCursorInRing(centerX, centerY, radius, innerRadius, cursorX, cursorY) {
  var distance = getDistance(cursorX, cursorY, centerX, centerY);
  return distance < radius && distance > innerRadius;
};

var nivo_arcs_es_findArcUnderCursor = function findArcUnderCursor(centerX, centerY, radius, innerRadius, arcs, cursorX, cursorY) {
  if (!isCursorInRing(centerX, centerY, radius, innerRadius, cursorX, cursorY)) {
    return undefined;
  }

  var cursorAngle = getAngle(cursorX, cursorY, centerX, centerY);
  return arcs.find(function (_ref) {
    var startAngle = _ref.startAngle,
        endAngle = _ref.endAngle;
    return cursorAngle >= startAngle && cursorAngle < endAngle;
  });
};

var useAnimatedArc = function useAnimatedArc(datumWithArc, arcGenerator) {
  var _useMotionConfig = useMotionConfig(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.config;

  var animatedValues = useSpring({
    startAngle: datumWithArc.arc.startAngle,
    endAngle: datumWithArc.arc.endAngle,
    innerRadius: datumWithArc.arc.innerRadius,
    outerRadius: datumWithArc.arc.outerRadius,
    config: springConfig,
    immediate: !animate
  });
  return _objectSpread2(_objectSpread2({}, animatedValues), {}, {
    path: interpolateArc(animatedValues.startAngle, animatedValues.endAngle, animatedValues.innerRadius, animatedValues.outerRadius, arcGenerator)
  });
};

var nivo_arcs_es_useArcGenerator = function useArcGenerator() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$cornerRadius = _ref.cornerRadius,
      cornerRadius = _ref$cornerRadius === void 0 ? 0 : _ref$cornerRadius,
      _ref$padAngle = _ref.padAngle,
      padAngle = _ref$padAngle === void 0 ? 0 : _ref$padAngle;

  return (0,react.useMemo)(function () {
    return arc().innerRadius(function (arc) {
      return arc.innerRadius;
    }).outerRadius(function (arc) {
      return arc.outerRadius;
    }).cornerRadius(cornerRadius).padAngle(padAngle);
  }, [cornerRadius, padAngle]);
};


// EXTERNAL MODULE: ./node_modules/@nivo/legends/dist/nivo-legends.es.js
var nivo_legends_es = __webpack_require__(26729);
;// CONCATENATED MODULE: ./node_modules/d3-shape/src/descending.js
/* harmony default export */ function descending(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
;// CONCATENATED MODULE: ./node_modules/d3-shape/src/identity.js
/* harmony default export */ function identity(d) {
  return d;
}
;// CONCATENATED MODULE: ./node_modules/d3-shape/src/pie.js




/* harmony default export */ function pie() {
  var value = identity,
      sortValues = descending,
      sort = null,
      startAngle = (0,constant/* default */.Z)(0),
      endAngle = (0,constant/* default */.Z)(math/* tau */.BZ),
      padAngle = (0,constant/* default */.Z)(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(math/* tau */.BZ, Math.max(-math/* tau */.BZ, endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    } // Optionally sort the arcs by previously-computed values or by data.


    if (sortValues != null) index.sort(function (i, j) {
      return sortValues(arcs[i], arcs[j]);
    });else if (sort != null) index.sort(function (i, j) {
      return sort(data[i], data[j]);
    }); // Compute the arcs! They are stored in the original data's order.

    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function (_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), pie) : value;
  };

  pie.sortValues = function (_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function (_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function (_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), pie) : startAngle;
  };

  pie.endAngle = function (_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), pie) : endAngle;
  };

  pie.padAngle = function (_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), pie) : padAngle;
  };

  return pie;
}
// EXTERNAL MODULE: ./node_modules/@nivo/tooltip/dist/nivo-tooltip.es.js
var nivo_tooltip_es = __webpack_require__(62529);
;// CONCATENATED MODULE: ./node_modules/@nivo/pie/dist/nivo-pie.es.js








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

var PieLegends = function PieLegends(_ref) {
  var width = _ref.width,
      height = _ref.height,
      legends = _ref.legends,
      data = _ref.data,
      toggleSerie = _ref.toggleSerie;
  return react.createElement(react.Fragment, null, legends.map(function (legend, i) {
    var _legend$data;

    return react.createElement(nivo_legends_es/* BoxLegendSvg */.$6, Object.assign({
      key: i
    }, legend, {
      containerWidth: width,
      containerHeight: height,
      data: (_legend$data = legend.data) !== null && _legend$data !== void 0 ? _legend$data : data,
      toggleSerie: legend.toggleSerie ? toggleSerie : undefined
    }));
  }));
};

function nivo_pie_es_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function nivo_pie_es_arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return nivo_pie_es_arrayLikeToArray(arr);
}

function nivo_pie_es_iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function nivo_pie_es_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return nivo_pie_es_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nivo_pie_es_arrayLikeToArray(o, minLen);
}

function nivo_pie_es_nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function nivo_pie_es_toConsumableArray(arr) {
  return nivo_pie_es_arrayWithoutHoles(arr) || nivo_pie_es_iterableToArray(arr) || nivo_pie_es_unsupportedIterableToArray(arr) || nivo_pie_es_nonIterableSpread();
}

function nivo_pie_es_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function nivo_pie_es_iterableToArrayLimit(arr, i) {
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

function nivo_pie_es_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function nivo_pie_es_slicedToArray(arr, i) {
  return nivo_pie_es_arrayWithHoles(arr) || nivo_pie_es_iterableToArrayLimit(arr, i) || nivo_pie_es_unsupportedIterableToArray(arr, i) || nivo_pie_es_nonIterableRest();
}

function nivo_pie_es_defineProperty(obj, key, value) {
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

function nivo_pie_es_ownKeys(object, enumerableOnly) {
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

function nivo_pie_es_objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      nivo_pie_es_ownKeys(Object(source), true).forEach(function (key) {
        nivo_pie_es_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      nivo_pie_es_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var PieTooltip = function PieTooltip(_ref) {
  var datum = _ref.datum;
  return react.createElement(nivo_tooltip_es/* BasicTooltip */._5, {
    id: datum.id,
    value: datum.formattedValue,
    enableChip: true,
    color: datum.color
  });
};

var _window$devicePixelRa;

var defaultProps = {
  id: 'id',
  value: 'value',
  sortByValue: false,
  innerRadius: 0,
  padAngle: 0,
  cornerRadius: 0,
  layers: ['arcLinkLabels', 'arcs', 'arcLabels', 'legends'],
  startAngle: 0,
  endAngle: 360,
  fit: true,
  activeInnerRadiusOffset: 0,
  activeOuterRadiusOffset: 0,
  borderWidth: 0,
  borderColor: {
    from: 'color',
    modifiers: [['darker', 1]]
  },
  enableArcLabels: true,
  arcLabel: 'formattedValue',
  arcLabelsSkipAngle: 0,
  arcLabelsRadiusOffset: 0.5,
  arcLabelsTextColor: {
    theme: 'labels.text.fill'
  },
  enableArcLinkLabels: true,
  arcLinkLabel: 'id',
  arcLinkLabelsSkipAngle: 0,
  arcLinkLabelsOffset: 0,
  arcLinkLabelsDiagonalLength: 16,
  arcLinkLabelsStraightLength: 24,
  arcLinkLabelsThickness: 1,
  arcLinkLabelsTextOffset: 6,
  arcLinkLabelsTextColor: {
    theme: 'labels.text.fill'
  },
  arcLinkLabelsColor: {
    theme: 'axis.ticks.line.stroke'
  },
  colors: {
    scheme: 'nivo'
  },
  defs: [],
  fill: [],
  isInteractive: true,
  animate: true,
  motionConfig: 'gentle',
  transitionMode: 'innerRadius',
  tooltip: PieTooltip,
  legends: [],
  role: 'img',
  pixelRatio: typeof window !== 'undefined' ? (_window$devicePixelRa = window.devicePixelRatio) !== null && _window$devicePixelRa !== void 0 ? _window$devicePixelRa : 1 : 1
};

var useNormalizedData = function useNormalizedData(_ref) {
  var data = _ref.data,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? defaultProps.id : _ref$id,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? defaultProps.value : _ref$value,
      valueFormat = _ref.valueFormat,
      _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? defaultProps.colors : _ref$colors;
  var getId = (0,nivo_core_es/* usePropertyAccessor */.LR)(id);
  var getValue = (0,nivo_core_es/* usePropertyAccessor */.LR)(value);
  var formatValue = (0,nivo_core_es/* useValueFormatter */.O_)(valueFormat);
  var getColor = (0,nivo_colors_es/* useOrdinalColorScale */.U)(colors, 'id');
  return (0,react.useMemo)(function () {
    return data.map(function (datum) {
      var _datum$label;

      var datumId = getId(datum);
      var datumValue = getValue(datum);
      var normalizedDatum = {
        id: datumId,
        label: (_datum$label = datum.label) !== null && _datum$label !== void 0 ? _datum$label : datumId,
        hidden: false,
        value: datumValue,
        formattedValue: formatValue(datumValue),
        data: datum
      };
      return nivo_pie_es_objectSpread2(nivo_pie_es_objectSpread2({}, normalizedDatum), {}, {
        color: getColor(normalizedDatum)
      });
    });
  }, [data, getId, getValue, formatValue, getColor]);
};

var usePieArcs = function usePieArcs(_ref2) {
  var data = _ref2.data,
      startAngle = _ref2.startAngle,
      endAngle = _ref2.endAngle,
      innerRadius = _ref2.innerRadius,
      outerRadius = _ref2.outerRadius,
      padAngle = _ref2.padAngle,
      sortByValue = _ref2.sortByValue,
      activeId = _ref2.activeId,
      activeInnerRadiusOffset = _ref2.activeInnerRadiusOffset,
      activeOuterRadiusOffset = _ref2.activeOuterRadiusOffset,
      hiddenIds = _ref2.hiddenIds;
  var pie$1 = (0,react.useMemo)(function () {
    var innerPie = pie().value(function (d) {
      return d.value;
    }).startAngle((0,nivo_core_es/* degreesToRadians */.Ht)(startAngle)).endAngle((0,nivo_core_es/* degreesToRadians */.Ht)(endAngle)).padAngle((0,nivo_core_es/* degreesToRadians */.Ht)(padAngle));

    if (!sortByValue) {
      innerPie.sortValues(null);
    }

    return innerPie;
  }, [startAngle, endAngle, padAngle, sortByValue]);
  return (0,react.useMemo)(function () {
    var hiddenData = data.filter(function (item) {
      return !hiddenIds.includes(item.id);
    });
    var dataWithArc = pie$1(hiddenData).map(function (arc) {
      var angle = Math.abs(arc.endAngle - arc.startAngle);
      return nivo_pie_es_objectSpread2(nivo_pie_es_objectSpread2({}, arc.data), {}, {
        arc: {
          index: arc.index,
          startAngle: arc.startAngle,
          endAngle: arc.endAngle,
          innerRadius: activeId === arc.data.id ? innerRadius - activeInnerRadiusOffset : innerRadius,
          outerRadius: activeId === arc.data.id ? outerRadius + activeOuterRadiusOffset : outerRadius,
          thickness: outerRadius - innerRadius,
          padAngle: arc.padAngle,
          angle: angle,
          angleDeg: (0,nivo_core_es/* radiansToDegrees */.vi)(angle)
        }
      });
    });
    var legendData = data.map(function (item) {
      return nivo_pie_es_objectSpread2(nivo_pie_es_objectSpread2({}, item), {}, {
        hidden: hiddenIds.includes(item.id)
      });
    });
    return {
      dataWithArc: dataWithArc,
      legendData: legendData
    };
  }, [pie$1, data, hiddenIds, activeId, innerRadius, activeInnerRadiusOffset, outerRadius, activeOuterRadiusOffset]);
};

var usePie = function usePie(_ref3) {
  var data = _ref3.data,
      radius = _ref3.radius,
      innerRadius = _ref3.innerRadius,
      _ref3$startAngle = _ref3.startAngle,
      startAngle = _ref3$startAngle === void 0 ? defaultProps.startAngle : _ref3$startAngle,
      _ref3$endAngle = _ref3.endAngle,
      endAngle = _ref3$endAngle === void 0 ? defaultProps.endAngle : _ref3$endAngle,
      _ref3$padAngle = _ref3.padAngle,
      padAngle = _ref3$padAngle === void 0 ? defaultProps.padAngle : _ref3$padAngle,
      _ref3$sortByValue = _ref3.sortByValue,
      sortByValue = _ref3$sortByValue === void 0 ? defaultProps.sortByValue : _ref3$sortByValue,
      _ref3$cornerRadius = _ref3.cornerRadius,
      cornerRadius = _ref3$cornerRadius === void 0 ? defaultProps.cornerRadius : _ref3$cornerRadius,
      _ref3$activeInnerRadi = _ref3.activeInnerRadiusOffset,
      activeInnerRadiusOffset = _ref3$activeInnerRadi === void 0 ? defaultProps.activeInnerRadiusOffset : _ref3$activeInnerRadi,
      _ref3$activeOuterRadi = _ref3.activeOuterRadiusOffset,
      activeOuterRadiusOffset = _ref3$activeOuterRadi === void 0 ? defaultProps.activeOuterRadiusOffset : _ref3$activeOuterRadi;

  var _useState = useState(null),
      _useState2 = nivo_pie_es_slicedToArray(_useState, 2),
      activeId = _useState2[0],
      setActiveId = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = nivo_pie_es_slicedToArray(_useState3, 2),
      hiddenIds = _useState4[0],
      setHiddenIds = _useState4[1];

  var pieArcs = usePieArcs({
    data: data,
    startAngle: startAngle,
    endAngle: endAngle,
    innerRadius: innerRadius,
    outerRadius: radius,
    padAngle: padAngle,
    sortByValue: sortByValue,
    activeId: activeId,
    activeInnerRadiusOffset: activeInnerRadiusOffset,
    activeOuterRadiusOffset: activeOuterRadiusOffset,
    hiddenIds: hiddenIds
  });
  var toggleSerie = useCallback(function (id) {
    setHiddenIds(function (state) {
      return state.indexOf(id) > -1 ? state.filter(function (item) {
        return item !== id;
      }) : [].concat(nivo_pie_es_toConsumableArray(state), [id]);
    });
  }, []);
  var arcGenerator = useArcGenerator({
    cornerRadius: cornerRadius,
    padAngle: degreesToRadians(padAngle)
  });
  return nivo_pie_es_objectSpread2(nivo_pie_es_objectSpread2({}, pieArcs), {}, {
    arcGenerator: arcGenerator,
    setActiveId: setActiveId,
    toggleSerie: toggleSerie
  });
};

var usePieFromBox = function usePieFromBox(_ref4) {
  var data = _ref4.data,
      width = _ref4.width,
      height = _ref4.height,
      _ref4$innerRadius = _ref4.innerRadius,
      innerRadiusRatio = _ref4$innerRadius === void 0 ? defaultProps.innerRadius : _ref4$innerRadius,
      _ref4$startAngle = _ref4.startAngle,
      startAngle = _ref4$startAngle === void 0 ? defaultProps.startAngle : _ref4$startAngle,
      _ref4$endAngle = _ref4.endAngle,
      endAngle = _ref4$endAngle === void 0 ? defaultProps.endAngle : _ref4$endAngle,
      _ref4$padAngle = _ref4.padAngle,
      padAngle = _ref4$padAngle === void 0 ? defaultProps.padAngle : _ref4$padAngle,
      _ref4$sortByValue = _ref4.sortByValue,
      sortByValue = _ref4$sortByValue === void 0 ? defaultProps.sortByValue : _ref4$sortByValue,
      _ref4$cornerRadius = _ref4.cornerRadius,
      cornerRadius = _ref4$cornerRadius === void 0 ? defaultProps.cornerRadius : _ref4$cornerRadius,
      _ref4$fit = _ref4.fit,
      fit = _ref4$fit === void 0 ? defaultProps.fit : _ref4$fit,
      _ref4$activeInnerRadi = _ref4.activeInnerRadiusOffset,
      activeInnerRadiusOffset = _ref4$activeInnerRadi === void 0 ? defaultProps.activeInnerRadiusOffset : _ref4$activeInnerRadi,
      _ref4$activeOuterRadi = _ref4.activeOuterRadiusOffset,
      activeOuterRadiusOffset = _ref4$activeOuterRadi === void 0 ? defaultProps.activeOuterRadiusOffset : _ref4$activeOuterRadi;

  var _useState5 = (0,react.useState)(null),
      _useState6 = nivo_pie_es_slicedToArray(_useState5, 2),
      activeId = _useState6[0],
      setActiveId = _useState6[1];

  var _useState7 = (0,react.useState)([]),
      _useState8 = nivo_pie_es_slicedToArray(_useState7, 2),
      hiddenIds = _useState8[0],
      setHiddenIds = _useState8[1];

  var computedProps = (0,react.useMemo)(function () {
    var radius = Math.min(width, height) / 2;
    var innerRadius = radius * Math.min(innerRadiusRatio, 1);
    var centerX = width / 2;
    var centerY = height / 2;
    var boundingBox;

    if (fit) {
      var _computeArcBoundingBo = computeArcBoundingBox(centerX, centerY, radius, startAngle - 90, endAngle - 90),
          points = _computeArcBoundingBo.points,
          box = _objectWithoutProperties(_computeArcBoundingBo, ["points"]);

      var ratio = Math.min(width / box.width, height / box.height);
      var adjustedBox = {
        width: box.width * ratio,
        height: box.height * ratio
      };
      adjustedBox.x = (width - adjustedBox.width) / 2;
      adjustedBox.y = (height - adjustedBox.height) / 2;
      centerX = (centerX - box.x) / box.width * box.width * ratio + adjustedBox.x;
      centerY = (centerY - box.y) / box.height * box.height * ratio + adjustedBox.y;
      boundingBox = {
        box: box,
        ratio: ratio,
        points: points
      };
      radius = radius * ratio;
      innerRadius = innerRadius * ratio;
    }

    return {
      centerX: centerX,
      centerY: centerY,
      radius: radius,
      innerRadius: innerRadius,
      debug: boundingBox
    };
  }, [width, height, innerRadiusRatio, startAngle, endAngle, fit, cornerRadius]);
  var pieArcs = usePieArcs({
    data: data,
    startAngle: startAngle,
    endAngle: endAngle,
    innerRadius: computedProps.innerRadius,
    outerRadius: computedProps.radius,
    padAngle: padAngle,
    sortByValue: sortByValue,
    activeId: activeId,
    activeInnerRadiusOffset: activeInnerRadiusOffset,
    activeOuterRadiusOffset: activeOuterRadiusOffset,
    hiddenIds: hiddenIds
  });
  var toggleSerie = (0,react.useCallback)(function (id) {
    setHiddenIds(function (state) {
      return state.indexOf(id) > -1 ? state.filter(function (item) {
        return item !== id;
      }) : [].concat(nivo_pie_es_toConsumableArray(state), [id]);
    });
  }, []);
  var arcGenerator = nivo_arcs_es_useArcGenerator({
    cornerRadius: cornerRadius,
    padAngle: (0,nivo_core_es/* degreesToRadians */.Ht)(padAngle)
  });
  return nivo_pie_es_objectSpread2(nivo_pie_es_objectSpread2({
    arcGenerator: arcGenerator,
    setActiveId: setActiveId,
    toggleSerie: toggleSerie
  }, pieArcs), computedProps);
};

var usePieLayerContext = function usePieLayerContext(_ref5) {
  var dataWithArc = _ref5.dataWithArc,
      arcGenerator = _ref5.arcGenerator,
      centerX = _ref5.centerX,
      centerY = _ref5.centerY,
      radius = _ref5.radius,
      innerRadius = _ref5.innerRadius;
  return (0,react.useMemo)(function () {
    return {
      dataWithArc: dataWithArc,
      arcGenerator: arcGenerator,
      centerX: centerX,
      centerY: centerY,
      radius: radius,
      innerRadius: innerRadius
    };
  }, [dataWithArc, arcGenerator, centerX, centerY, radius, innerRadius]);
};

var Arcs = function Arcs(_ref) {
  var center = _ref.center,
      data = _ref.data,
      arcGenerator = _ref.arcGenerator,
      borderWidth = _ref.borderWidth,
      borderColor = _ref.borderColor,
      isInteractive = _ref.isInteractive,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      setActiveId = _ref.setActiveId,
      tooltip = _ref.tooltip,
      transitionMode = _ref.transitionMode;

  var _useTooltip = (0,nivo_tooltip_es/* useTooltip */.lL)(),
      showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
      hideTooltip = _useTooltip.hideTooltip;

  var handleClick = (0,react.useMemo)(function () {
    if (!isInteractive) return undefined;
    return function (datum, event) {
      onClick === null || onClick === void 0 ? void 0 : onClick(datum, event);
    };
  }, [isInteractive, onClick]);
  var handleMouseEnter = (0,react.useMemo)(function () {
    if (!isInteractive) return undefined;
    return function (datum, event) {
      showTooltipFromEvent((0,react.createElement)(tooltip, {
        datum: datum
      }), event);
      setActiveId(datum.id);
      onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter(datum, event);
    };
  }, [isInteractive, showTooltipFromEvent, setActiveId, onMouseEnter]);
  var handleMouseMove = (0,react.useMemo)(function () {
    if (!isInteractive) return undefined;
    return function (datum, event) {
      showTooltipFromEvent((0,react.createElement)(tooltip, {
        datum: datum
      }), event);
      onMouseMove === null || onMouseMove === void 0 ? void 0 : onMouseMove(datum, event);
    };
  }, [isInteractive, showTooltipFromEvent, onMouseMove]);
  var handleMouseLeave = (0,react.useMemo)(function () {
    if (!isInteractive) return undefined;
    return function (datum, event) {
      hideTooltip();
      setActiveId(null);
      onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave(datum, event);
    };
  }, [isInteractive, hideTooltip, setActiveId, onMouseLeave]);
  return react.createElement(ArcsLayer, {
    center: center,
    data: data,
    arcGenerator: arcGenerator,
    borderWidth: borderWidth,
    borderColor: borderColor,
    transitionMode: transitionMode,
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  });
};

var InnerPie = function InnerPie(_ref) {
  var data = _ref.data,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? defaultProps.id : _ref$id,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? defaultProps.value : _ref$value,
      valueFormat = _ref.valueFormat,
      _ref$sortByValue = _ref.sortByValue,
      sortByValue = _ref$sortByValue === void 0 ? defaultProps.sortByValue : _ref$sortByValue,
      _ref$layers = _ref.layers,
      layers = _ref$layers === void 0 ? defaultProps.layers : _ref$layers,
      _ref$startAngle = _ref.startAngle,
      startAngle = _ref$startAngle === void 0 ? defaultProps.startAngle : _ref$startAngle,
      _ref$endAngle = _ref.endAngle,
      endAngle = _ref$endAngle === void 0 ? defaultProps.endAngle : _ref$endAngle,
      _ref$padAngle = _ref.padAngle,
      padAngle = _ref$padAngle === void 0 ? defaultProps.padAngle : _ref$padAngle,
      _ref$fit = _ref.fit,
      fit = _ref$fit === void 0 ? defaultProps.fit : _ref$fit,
      _ref$innerRadius = _ref.innerRadius,
      innerRadiusRatio = _ref$innerRadius === void 0 ? defaultProps.innerRadius : _ref$innerRadius,
      _ref$cornerRadius = _ref.cornerRadius,
      cornerRadius = _ref$cornerRadius === void 0 ? defaultProps.cornerRadius : _ref$cornerRadius,
      _ref$activeInnerRadiu = _ref.activeInnerRadiusOffset,
      activeInnerRadiusOffset = _ref$activeInnerRadiu === void 0 ? defaultProps.activeInnerRadiusOffset : _ref$activeInnerRadiu,
      _ref$activeOuterRadiu = _ref.activeOuterRadiusOffset,
      activeOuterRadiusOffset = _ref$activeOuterRadiu === void 0 ? defaultProps.activeOuterRadiusOffset : _ref$activeOuterRadiu,
      width = _ref.width,
      height = _ref.height,
      partialMargin = _ref.margin,
      _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? defaultProps.colors : _ref$colors,
      _ref$borderWidth = _ref.borderWidth,
      borderWidth = _ref$borderWidth === void 0 ? defaultProps.borderWidth : _ref$borderWidth,
      _ref$borderColor = _ref.borderColor,
      borderColor = _ref$borderColor === void 0 ? defaultProps.borderColor : _ref$borderColor,
      _ref$enableArcLabels = _ref.enableArcLabels,
      enableArcLabels = _ref$enableArcLabels === void 0 ? defaultProps.enableArcLabels : _ref$enableArcLabels,
      _ref$arcLabel = _ref.arcLabel,
      arcLabel = _ref$arcLabel === void 0 ? defaultProps.arcLabel : _ref$arcLabel,
      _ref$arcLabelsSkipAng = _ref.arcLabelsSkipAngle,
      arcLabelsSkipAngle = _ref$arcLabelsSkipAng === void 0 ? defaultProps.arcLabelsSkipAngle : _ref$arcLabelsSkipAng,
      _ref$arcLabelsTextCol = _ref.arcLabelsTextColor,
      arcLabelsTextColor = _ref$arcLabelsTextCol === void 0 ? defaultProps.arcLabelsTextColor : _ref$arcLabelsTextCol,
      _ref$arcLabelsRadiusO = _ref.arcLabelsRadiusOffset,
      arcLabelsRadiusOffset = _ref$arcLabelsRadiusO === void 0 ? defaultProps.arcLabelsRadiusOffset : _ref$arcLabelsRadiusO,
      arcLabelsComponent = _ref.arcLabelsComponent,
      _ref$enableArcLinkLab = _ref.enableArcLinkLabels,
      enableArcLinkLabels = _ref$enableArcLinkLab === void 0 ? defaultProps.enableArcLinkLabels : _ref$enableArcLinkLab,
      _ref$arcLinkLabel = _ref.arcLinkLabel,
      arcLinkLabel = _ref$arcLinkLabel === void 0 ? defaultProps.arcLinkLabel : _ref$arcLinkLabel,
      _ref$arcLinkLabelsSki = _ref.arcLinkLabelsSkipAngle,
      arcLinkLabelsSkipAngle = _ref$arcLinkLabelsSki === void 0 ? defaultProps.arcLinkLabelsSkipAngle : _ref$arcLinkLabelsSki,
      _ref$arcLinkLabelsOff = _ref.arcLinkLabelsOffset,
      arcLinkLabelsOffset = _ref$arcLinkLabelsOff === void 0 ? defaultProps.arcLinkLabelsOffset : _ref$arcLinkLabelsOff,
      _ref$arcLinkLabelsDia = _ref.arcLinkLabelsDiagonalLength,
      arcLinkLabelsDiagonalLength = _ref$arcLinkLabelsDia === void 0 ? defaultProps.arcLinkLabelsDiagonalLength : _ref$arcLinkLabelsDia,
      _ref$arcLinkLabelsStr = _ref.arcLinkLabelsStraightLength,
      arcLinkLabelsStraightLength = _ref$arcLinkLabelsStr === void 0 ? defaultProps.arcLinkLabelsStraightLength : _ref$arcLinkLabelsStr,
      _ref$arcLinkLabelsThi = _ref.arcLinkLabelsThickness,
      arcLinkLabelsThickness = _ref$arcLinkLabelsThi === void 0 ? defaultProps.arcLinkLabelsThickness : _ref$arcLinkLabelsThi,
      _ref$arcLinkLabelsTex = _ref.arcLinkLabelsTextOffset,
      arcLinkLabelsTextOffset = _ref$arcLinkLabelsTex === void 0 ? defaultProps.arcLinkLabelsTextOffset : _ref$arcLinkLabelsTex,
      _ref$arcLinkLabelsTex2 = _ref.arcLinkLabelsTextColor,
      arcLinkLabelsTextColor = _ref$arcLinkLabelsTex2 === void 0 ? defaultProps.arcLinkLabelsTextColor : _ref$arcLinkLabelsTex2,
      _ref$arcLinkLabelsCol = _ref.arcLinkLabelsColor,
      arcLinkLabelsColor = _ref$arcLinkLabelsCol === void 0 ? defaultProps.arcLinkLabelsColor : _ref$arcLinkLabelsCol,
      arcLinkLabelComponent = _ref.arcLinkLabelComponent,
      _ref$defs = _ref.defs,
      defs = _ref$defs === void 0 ? defaultProps.defs : _ref$defs,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? defaultProps.fill : _ref$fill,
      _ref$isInteractive = _ref.isInteractive,
      isInteractive = _ref$isInteractive === void 0 ? defaultProps.isInteractive : _ref$isInteractive,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      _ref$tooltip = _ref.tooltip,
      tooltip = _ref$tooltip === void 0 ? defaultProps.tooltip : _ref$tooltip,
      _ref$transitionMode = _ref.transitionMode,
      transitionMode = _ref$transitionMode === void 0 ? defaultProps.transitionMode : _ref$transitionMode,
      _ref$legends = _ref.legends,
      legends = _ref$legends === void 0 ? defaultProps.legends : _ref$legends,
      _ref$role = _ref.role,
      role = _ref$role === void 0 ? defaultProps.role : _ref$role;

  var _useDimensions = (0,nivo_core_es/* useDimensions */.Bs)(width, height, partialMargin),
      outerWidth = _useDimensions.outerWidth,
      outerHeight = _useDimensions.outerHeight,
      margin = _useDimensions.margin,
      innerWidth = _useDimensions.innerWidth,
      innerHeight = _useDimensions.innerHeight;

  var normalizedData = useNormalizedData({
    data: data,
    id: id,
    value: value,
    valueFormat: valueFormat,
    colors: colors
  });

  var _usePieFromBox = usePieFromBox({
    data: normalizedData,
    width: innerWidth,
    height: innerHeight,
    fit: fit,
    innerRadius: innerRadiusRatio,
    startAngle: startAngle,
    endAngle: endAngle,
    padAngle: padAngle,
    sortByValue: sortByValue,
    cornerRadius: cornerRadius,
    activeInnerRadiusOffset: activeInnerRadiusOffset,
    activeOuterRadiusOffset: activeOuterRadiusOffset
  }),
      dataWithArc = _usePieFromBox.dataWithArc,
      legendData = _usePieFromBox.legendData,
      arcGenerator = _usePieFromBox.arcGenerator,
      centerX = _usePieFromBox.centerX,
      centerY = _usePieFromBox.centerY,
      radius = _usePieFromBox.radius,
      innerRadius = _usePieFromBox.innerRadius,
      setActiveId = _usePieFromBox.setActiveId,
      toggleSerie = _usePieFromBox.toggleSerie;

  var boundDefs = (0,nivo_core_es/* bindDefs */.yU)(defs, dataWithArc, fill);
  var layerById = {
    arcLinkLabels: null,
    arcs: null,
    arcLabels: null,
    legends: null
  };

  if (enableArcLinkLabels && layers.includes('arcLinkLabels')) {
    layerById.arcLinkLabels = react.createElement(ArcLinkLabelsLayer, {
      key: "arcLinkLabels",
      center: [centerX, centerY],
      data: dataWithArc,
      label: arcLinkLabel,
      skipAngle: arcLinkLabelsSkipAngle,
      offset: arcLinkLabelsOffset,
      diagonalLength: arcLinkLabelsDiagonalLength,
      straightLength: arcLinkLabelsStraightLength,
      strokeWidth: arcLinkLabelsThickness,
      textOffset: arcLinkLabelsTextOffset,
      textColor: arcLinkLabelsTextColor,
      linkColor: arcLinkLabelsColor,
      component: arcLinkLabelComponent
    });
  }

  if (layers.includes('arcs')) {
    layerById.arcs = react.createElement(Arcs, {
      key: "arcs",
      center: [centerX, centerY],
      data: dataWithArc,
      arcGenerator: arcGenerator,
      borderWidth: borderWidth,
      borderColor: borderColor,
      isInteractive: isInteractive,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseMove: onMouseMove,
      onMouseLeave: onMouseLeave,
      setActiveId: setActiveId,
      tooltip: tooltip,
      transitionMode: transitionMode
    });
  }

  if (enableArcLabels && layers.includes('arcLabels')) {
    layerById.arcLabels = react.createElement(ArcLabelsLayer, {
      key: "arcLabels",
      center: [centerX, centerY],
      data: dataWithArc,
      label: arcLabel,
      radiusOffset: arcLabelsRadiusOffset,
      skipAngle: arcLabelsSkipAngle,
      textColor: arcLabelsTextColor,
      transitionMode: transitionMode,
      component: arcLabelsComponent
    });
  }

  if (legends.length > 0 && layers.includes('legends')) {
    layerById.legends = react.createElement(PieLegends, {
      key: "legends",
      width: innerWidth,
      height: innerHeight,
      data: legendData,
      legends: legends,
      toggleSerie: toggleSerie
    });
  }

  var layerContext = usePieLayerContext({
    dataWithArc: dataWithArc,
    arcGenerator: arcGenerator,
    centerX: centerX,
    centerY: centerY,
    radius: radius,
    innerRadius: innerRadius
  });
  return react.createElement(nivo_core_es/* SvgWrapper */.tM, {
    width: outerWidth,
    height: outerHeight,
    margin: margin,
    defs: boundDefs,
    role: role
  }, layers.map(function (layer, i) {
    if (layerById[layer] !== undefined) {
      return layerById[layer];
    }

    if (typeof layer === 'function') {
      return react.createElement(react.Fragment, {
        key: i
      }, (0,react.createElement)(layer, layerContext));
    }

    return null;
  }));
};

var Pie = function Pie(_ref2) {
  var _ref2$isInteractive = _ref2.isInteractive,
      isInteractive = _ref2$isInteractive === void 0 ? defaultProps.isInteractive : _ref2$isInteractive,
      _ref2$animate = _ref2.animate,
      animate = _ref2$animate === void 0 ? defaultProps.animate : _ref2$animate,
      _ref2$motionConfig = _ref2.motionConfig,
      motionConfig = _ref2$motionConfig === void 0 ? defaultProps.motionConfig : _ref2$motionConfig,
      theme = _ref2.theme,
      renderWrapper = _ref2.renderWrapper,
      otherProps = _objectWithoutProperties(_ref2, ["isInteractive", "animate", "motionConfig", "theme", "renderWrapper"]);

  return react.createElement(nivo_core_es/* Container */.W2, {
    animate: animate,
    isInteractive: isInteractive,
    motionConfig: motionConfig,
    renderWrapper: renderWrapper,
    theme: theme
  }, react.createElement(InnerPie, Object.assign({
    isInteractive: isInteractive
  }, otherProps)));
};

var ResponsivePie = function ResponsivePie(props) {
  return React.createElement(ResponsiveWrapper, null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return React.createElement(Pie, Object.assign({
      width: width,
      height: height
    }, props));
  });
};

var InnerPieCanvas = function InnerPieCanvas(_ref) {
  var data = _ref.data,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? defaultProps.id : _ref$id,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? defaultProps.value : _ref$value,
      valueFormat = _ref.valueFormat,
      _ref$sortByValue = _ref.sortByValue,
      sortByValue = _ref$sortByValue === void 0 ? defaultProps.sortByValue : _ref$sortByValue,
      _ref$startAngle = _ref.startAngle,
      startAngle = _ref$startAngle === void 0 ? defaultProps.startAngle : _ref$startAngle,
      _ref$endAngle = _ref.endAngle,
      endAngle = _ref$endAngle === void 0 ? defaultProps.endAngle : _ref$endAngle,
      _ref$padAngle = _ref.padAngle,
      padAngle = _ref$padAngle === void 0 ? defaultProps.padAngle : _ref$padAngle,
      _ref$fit = _ref.fit,
      fit = _ref$fit === void 0 ? defaultProps.fit : _ref$fit,
      _ref$innerRadius = _ref.innerRadius,
      innerRadiusRatio = _ref$innerRadius === void 0 ? defaultProps.innerRadius : _ref$innerRadius,
      _ref$cornerRadius = _ref.cornerRadius,
      cornerRadius = _ref$cornerRadius === void 0 ? defaultProps.cornerRadius : _ref$cornerRadius,
      _ref$activeInnerRadiu = _ref.activeInnerRadiusOffset,
      activeInnerRadiusOffset = _ref$activeInnerRadiu === void 0 ? defaultProps.activeInnerRadiusOffset : _ref$activeInnerRadiu,
      _ref$activeOuterRadiu = _ref.activeOuterRadiusOffset,
      activeOuterRadiusOffset = _ref$activeOuterRadiu === void 0 ? defaultProps.activeOuterRadiusOffset : _ref$activeOuterRadiu,
      width = _ref.width,
      height = _ref.height,
      partialMargin = _ref.margin,
      _ref$pixelRatio = _ref.pixelRatio,
      pixelRatio = _ref$pixelRatio === void 0 ? 1 : _ref$pixelRatio,
      _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? defaultProps.colors : _ref$colors,
      _ref$borderWidth = _ref.borderWidth,
      borderWidth = _ref$borderWidth === void 0 ? defaultProps.borderWidth : _ref$borderWidth,
      _ref$borderColor = _ref.borderColor,
      borderColor = _ref$borderColor === void 0 ? defaultProps.borderColor : _ref$borderColor,
      _ref$enableArcLabels = _ref.enableArcLabels,
      enableArcLabels = _ref$enableArcLabels === void 0 ? defaultProps.enableArcLabels : _ref$enableArcLabels,
      _ref$arcLabel = _ref.arcLabel,
      arcLabel = _ref$arcLabel === void 0 ? defaultProps.arcLabel : _ref$arcLabel,
      _ref$arcLabelsSkipAng = _ref.arcLabelsSkipAngle,
      arcLabelsSkipAngle = _ref$arcLabelsSkipAng === void 0 ? defaultProps.arcLabelsSkipAngle : _ref$arcLabelsSkipAng,
      _ref$arcLabelsTextCol = _ref.arcLabelsTextColor,
      arcLabelsTextColor = _ref$arcLabelsTextCol === void 0 ? defaultProps.arcLabelsTextColor : _ref$arcLabelsTextCol,
      _ref$arcLabelsRadiusO = _ref.arcLabelsRadiusOffset,
      arcLabelsRadiusOffset = _ref$arcLabelsRadiusO === void 0 ? defaultProps.arcLabelsRadiusOffset : _ref$arcLabelsRadiusO,
      _ref$enableArcLinkLab = _ref.enableArcLinkLabels,
      enableArcLinkLabels = _ref$enableArcLinkLab === void 0 ? defaultProps.enableArcLinkLabels : _ref$enableArcLinkLab,
      _ref$arcLinkLabel = _ref.arcLinkLabel,
      arcLinkLabel = _ref$arcLinkLabel === void 0 ? defaultProps.arcLinkLabel : _ref$arcLinkLabel,
      _ref$arcLinkLabelsSki = _ref.arcLinkLabelsSkipAngle,
      arcLinkLabelsSkipAngle = _ref$arcLinkLabelsSki === void 0 ? defaultProps.arcLinkLabelsSkipAngle : _ref$arcLinkLabelsSki,
      _ref$arcLinkLabelsOff = _ref.arcLinkLabelsOffset,
      arcLinkLabelsOffset = _ref$arcLinkLabelsOff === void 0 ? defaultProps.arcLinkLabelsOffset : _ref$arcLinkLabelsOff,
      _ref$arcLinkLabelsDia = _ref.arcLinkLabelsDiagonalLength,
      arcLinkLabelsDiagonalLength = _ref$arcLinkLabelsDia === void 0 ? defaultProps.arcLinkLabelsDiagonalLength : _ref$arcLinkLabelsDia,
      _ref$arcLinkLabelsStr = _ref.arcLinkLabelsStraightLength,
      arcLinkLabelsStraightLength = _ref$arcLinkLabelsStr === void 0 ? defaultProps.arcLinkLabelsStraightLength : _ref$arcLinkLabelsStr,
      _ref$arcLinkLabelsThi = _ref.arcLinkLabelsThickness,
      arcLinkLabelsThickness = _ref$arcLinkLabelsThi === void 0 ? defaultProps.arcLinkLabelsThickness : _ref$arcLinkLabelsThi,
      _ref$arcLinkLabelsTex = _ref.arcLinkLabelsTextOffset,
      arcLinkLabelsTextOffset = _ref$arcLinkLabelsTex === void 0 ? defaultProps.arcLinkLabelsTextOffset : _ref$arcLinkLabelsTex,
      _ref$arcLinkLabelsTex2 = _ref.arcLinkLabelsTextColor,
      arcLinkLabelsTextColor = _ref$arcLinkLabelsTex2 === void 0 ? defaultProps.arcLinkLabelsTextColor : _ref$arcLinkLabelsTex2,
      _ref$arcLinkLabelsCol = _ref.arcLinkLabelsColor,
      arcLinkLabelsColor = _ref$arcLinkLabelsCol === void 0 ? defaultProps.arcLinkLabelsColor : _ref$arcLinkLabelsCol,
      _ref$isInteractive = _ref.isInteractive,
      isInteractive = _ref$isInteractive === void 0 ? defaultProps.isInteractive : _ref$isInteractive,
      onClick = _ref.onClick,
      onMouseMove = _ref.onMouseMove,
      _ref$tooltip = _ref.tooltip,
      tooltip = _ref$tooltip === void 0 ? defaultProps.tooltip : _ref$tooltip,
      _ref$legends = _ref.legends,
      legends = _ref$legends === void 0 ? defaultProps.legends : _ref$legends;
  var canvasEl = useRef(null);
  var theme = useTheme();

  var _useDimensions = useDimensions(width, height, partialMargin),
      margin = _useDimensions.margin,
      innerWidth = _useDimensions.innerWidth,
      innerHeight = _useDimensions.innerHeight,
      outerWidth = _useDimensions.outerWidth,
      outerHeight = _useDimensions.outerHeight;

  var normalizedData = useNormalizedData({
    data: data,
    id: id,
    value: value,
    valueFormat: valueFormat,
    colors: colors
  });

  var _usePieFromBox = usePieFromBox({
    data: normalizedData,
    width: innerWidth,
    height: innerHeight,
    fit: fit,
    innerRadius: innerRadiusRatio,
    startAngle: startAngle,
    endAngle: endAngle,
    padAngle: padAngle,
    sortByValue: sortByValue,
    cornerRadius: cornerRadius,
    activeInnerRadiusOffset: activeInnerRadiusOffset,
    activeOuterRadiusOffset: activeOuterRadiusOffset
  }),
      dataWithArc = _usePieFromBox.dataWithArc,
      arcGenerator = _usePieFromBox.arcGenerator,
      centerX = _usePieFromBox.centerX,
      centerY = _usePieFromBox.centerY,
      radius = _usePieFromBox.radius,
      innerRadius = _usePieFromBox.innerRadius,
      setActiveId = _usePieFromBox.setActiveId;

  var getBorderColor = useInheritedColor(borderColor, theme);
  var arcLabels = useArcLabels({
    data: dataWithArc,
    label: arcLabel,
    skipAngle: arcLabelsSkipAngle,
    offset: arcLabelsRadiusOffset,
    textColor: arcLabelsTextColor
  });
  var arcLinkLabels = useArcLinkLabels({
    data: dataWithArc,
    skipAngle: arcLinkLabelsSkipAngle,
    offset: arcLinkLabelsOffset,
    diagonalLength: arcLinkLabelsDiagonalLength,
    straightLength: arcLinkLabelsStraightLength,
    label: arcLinkLabel,
    linkColor: arcLinkLabelsColor,
    textOffset: arcLinkLabelsTextOffset,
    textColor: arcLinkLabelsTextColor
  });
  useEffect(function () {
    if (!canvasEl.current) return;
    canvasEl.current.width = outerWidth * pixelRatio;
    canvasEl.current.height = outerHeight * pixelRatio;
    var ctx = canvasEl.current.getContext('2d');
    ctx.scale(pixelRatio, pixelRatio);
    ctx.fillStyle = theme.background;
    ctx.fillRect(0, 0, outerWidth, outerHeight);
    ctx.save();
    ctx.translate(margin.left, margin.top);
    arcGenerator.context(ctx);
    ctx.save();
    ctx.translate(centerX, centerY);
    dataWithArc.forEach(function (arc) {
      ctx.beginPath();
      ctx.fillStyle = arc.color;
      ctx.strokeStyle = getBorderColor(arc);
      ctx.lineWidth = borderWidth;
      arcGenerator(arc.arc);
      ctx.fill();

      if (borderWidth > 0) {
        ctx.stroke();
      }
    });

    if (enableArcLinkLabels === true) {
      drawCanvasArcLinkLabels(ctx, arcLinkLabels, theme, arcLinkLabelsThickness);
    }

    if (enableArcLabels === true) {
      drawCanvasArcLabels(ctx, arcLabels, theme);
    }

    ctx.restore();
    legends.forEach(function (legend) {
      renderLegendToCanvas(ctx, nivo_pie_es_objectSpread2(nivo_pie_es_objectSpread2({}, legend), {}, {
        data: dataWithArc,
        containerWidth: innerWidth,
        containerHeight: innerHeight,
        theme: theme
      }));
    });
  }, [canvasEl, innerWidth, innerHeight, outerWidth, outerHeight, margin.top, margin.left, pixelRatio, centerX, centerY, arcGenerator, dataWithArc, getBorderColor, enableArcLabels, arcLabels, enableArcLinkLabels, arcLinkLabels, arcLinkLabelsThickness, legends, theme]);
  var arcs = useMemo(function () {
    return dataWithArc.map(function (datum) {
      return nivo_pie_es_objectSpread2({
        id: datum.id
      }, datum.arc);
    });
  }, [dataWithArc]);

  var getArcFromMouse = function getArcFromMouse(event) {
    if (!canvasEl.current) return null;

    var _getRelativeCursor = getRelativeCursor(canvasEl.current, event),
        _getRelativeCursor2 = nivo_pie_es_slicedToArray(_getRelativeCursor, 2),
        x = _getRelativeCursor2[0],
        y = _getRelativeCursor2[1];

    var hoveredArc = findArcUnderCursor(margin.left + centerX, margin.top + centerY, radius, innerRadius, arcs, x, y);
    if (!hoveredArc) return null;
    return dataWithArc.find(function (datum) {
      return datum.id === hoveredArc.id;
    });
  };

  var _useTooltip = useTooltip(),
      showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
      hideTooltip = _useTooltip.hideTooltip;

  var handleMouseHover = function handleMouseHover(event) {
    var datum = getArcFromMouse(event);

    if (datum) {
      onMouseMove === null || onMouseMove === void 0 ? void 0 : onMouseMove(datum, event);
      setActiveId(datum.id);
      showTooltipFromEvent(createElement(tooltip, {
        datum: datum
      }), event);
    } else {
      setActiveId(null);
      hideTooltip();
    }
  };

  var handleMouseLeave = function handleMouseLeave() {
    hideTooltip();
  };

  var handleClick = function handleClick(event) {
    if (!onClick) return;
    var arc = getArcFromMouse(event);

    if (arc) {
      onClick(arc, event);
    }
  };

  return React.createElement("canvas", {
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

var PieCanvas = function PieCanvas(_ref2) {
  var _ref2$isInteractive = _ref2.isInteractive,
      isInteractive = _ref2$isInteractive === void 0 ? defaultProps.isInteractive : _ref2$isInteractive,
      theme = _ref2.theme,
      renderWrapper = _ref2.renderWrapper,
      otherProps = _objectWithoutProperties(_ref2, ["isInteractive", "theme", "renderWrapper"]);

  return React.createElement(Container, {
    isInteractive: isInteractive,
    renderWrapper: renderWrapper,
    theme: theme
  }, React.createElement(InnerPieCanvas, Object.assign({
    isInteractive: isInteractive
  }, otherProps)));
};

var ResponsivePieCanvas = function ResponsivePieCanvas(props) {
  return React.createElement(ResponsiveWrapper, null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return React.createElement(PieCanvas, Object.assign({
      width: width,
      height: height
    }, props));
  });
};


;// CONCATENATED MODULE: ./src/components/blockly/fields/Pie.tsx

/* harmony default export */ var fields_Pie = (Pie);

/***/ })

}]);