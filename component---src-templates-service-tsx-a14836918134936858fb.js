(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73,92],{

/***/ "E8kk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
}), 'Info');

exports.default = _default;

/***/ }),

/***/ "USxY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("r2IW");
} else {}

/***/ }),

/***/ "XXVM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ DeviceSpecificationList; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__("tr08");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__("lopY");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/node_modules/react-is/index.js
var react_is = __webpack_require__("USxY");

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("iuhU");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/GridList/GridList.js






var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'auto',
    listStyle: 'none',
    padding: 0,
    WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.

  }
};
var GridList_GridList = /*#__PURE__*/react["forwardRef"](function GridList(props, ref) {
  var _props$cellHeight = props.cellHeight,
      cellHeight = _props$cellHeight === void 0 ? 180 : _props$cellHeight,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$cols = props.cols,
      cols = _props$cols === void 0 ? 2 : _props$cols,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'ul' : _props$component,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 4 : _props$spacing,
      style = props.style,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["cellHeight", "children", "classes", "className", "cols", "component", "spacing", "style"]);

  return /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className),
    ref: ref,
    style: Object(esm_extends["a" /* default */])({
      margin: -spacing / 2
    }, style)
  }, other), react["Children"].map(children, function (child) {
    if (! /*#__PURE__*/react["isValidElement"](child)) {
      return null;
    }

    if (false) {}

    var childCols = child.props.cols || 1;
    var childRows = child.props.rows || 1;
    return /*#__PURE__*/react["cloneElement"](child, {
      style: Object(esm_extends["a" /* default */])({
        width: "".concat(100 / cols * childCols, "%"),
        height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + spacing,
        padding: spacing / 2
      }, child.props.style)
    });
  }));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_GridList_GridList = (Object(withStyles["a" /* default */])(styles, {
  name: 'MuiGridList'
})(GridList_GridList));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("KQm4");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/debounce.js
var debounce = __webpack_require__("l3Wi");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/isMuiElement.js
var isMuiElement = __webpack_require__("ucBr");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/GridListTile/GridListTile.js








var GridListTile_styles = {
  /* Styles applied to the root element. */
  root: {
    boxSizing: 'border-box',
    flexShrink: 0
  },

  /* Styles applied to the `div` element that wraps the children. */
  tile: {
    position: 'relative',
    display: 'block',
    // In case it's not rendered with a div.
    height: '100%',
    overflow: 'hidden'
  },

  /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
  imgFullHeight: {
    height: '100%',
    transform: 'translateX(-50%)',
    position: 'relative',
    left: '50%'
  },

  /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
  imgFullWidth: {
    width: '100%',
    position: 'relative',
    transform: 'translateY(-50%)',
    top: '50%'
  }
};

var GridListTile_fit = function fit(imgEl, classes) {
  if (!imgEl || !imgEl.complete) {
    return;
  }

  if (imgEl.width / imgEl.height > imgEl.parentElement.offsetWidth / imgEl.parentElement.offsetHeight) {
    var _imgEl$classList, _imgEl$classList2;

    (_imgEl$classList = imgEl.classList).remove.apply(_imgEl$classList, Object(toConsumableArray["a" /* default */])(classes.imgFullWidth.split(' ')));

    (_imgEl$classList2 = imgEl.classList).add.apply(_imgEl$classList2, Object(toConsumableArray["a" /* default */])(classes.imgFullHeight.split(' ')));
  } else {
    var _imgEl$classList3, _imgEl$classList4;

    (_imgEl$classList3 = imgEl.classList).remove.apply(_imgEl$classList3, Object(toConsumableArray["a" /* default */])(classes.imgFullHeight.split(' ')));

    (_imgEl$classList4 = imgEl.classList).add.apply(_imgEl$classList4, Object(toConsumableArray["a" /* default */])(classes.imgFullWidth.split(' ')));
  }
};

function ensureImageCover(imgEl, classes) {
  if (!imgEl) {
    return;
  }

  if (imgEl.complete) {
    GridListTile_fit(imgEl, classes);
  } else {
    imgEl.addEventListener('load', function () {
      GridListTile_fit(imgEl, classes);
    });
  }
}

var GridListTile_GridListTile = /*#__PURE__*/react["forwardRef"](function GridListTile(props, ref) {
  // cols rows default values are for docs only
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$cols = props.cols,
      cols = _props$cols === void 0 ? 1 : _props$cols,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'li' : _props$component,
      _props$rows = props.rows,
      rows = _props$rows === void 0 ? 1 : _props$rows,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "cols", "component", "rows"]);

  var imgRef = react["useRef"](null);
  react["useEffect"](function () {
    ensureImageCover(imgRef.current, classes);
  });
  react["useEffect"](function () {
    var handleResize = Object(debounce["a" /* default */])(function () {
      GridListTile_fit(imgRef.current, classes);
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [classes]);
  return /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className),
    ref: ref
  }, other), /*#__PURE__*/react["createElement"]("div", {
    className: classes.tile
  }, react["Children"].map(children, function (child) {
    if (! /*#__PURE__*/react["isValidElement"](child)) {
      return null;
    }

    if (child.type === 'img' || Object(isMuiElement["a" /* default */])(child, ['Image'])) {
      return /*#__PURE__*/react["cloneElement"](child, {
        ref: imgRef
      });
    }

    return child;
  })));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_GridListTile_GridListTile = (Object(withStyles["a" /* default */])(GridListTile_styles, {
  name: 'MuiGridListTile'
})(GridListTile_GridListTile));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/GridListTileBar/GridListTileBar.js





var GridListTileBar_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 48,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      fontFamily: theme.typography.fontFamily
    },

    /* Styles applied to the root element if `titlePosition="bottom"`. */
    titlePositionBottom: {
      bottom: 0
    },

    /* Styles applied to the root element if `titlePosition="top"`. */
    titlePositionTop: {
      top: 0
    },

    /* Styles applied to the root element if a `subtitle` is provided. */
    rootSubtitle: {
      height: 68
    },

    /* Styles applied to the title and subtitle container element. */
    titleWrap: {
      flexGrow: 1,
      marginLeft: 16,
      marginRight: 16,
      color: theme.palette.common.white,
      overflow: 'hidden'
    },

    /* Styles applied to the container element if `actionPosition="left"`. */
    titleWrapActionPosLeft: {
      marginLeft: 0
    },

    /* Styles applied to the container element if `actionPosition="right"`. */
    titleWrapActionPosRight: {
      marginRight: 0
    },

    /* Styles applied to the title container element. */
    title: {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: '24px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the subtitle container element. */
    subtitle: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the actionIcon if supplied. */
    actionIcon: {},

    /* Styles applied to the actionIcon if `actionPosition="left"`. */
    actionIconActionPosLeft: {
      order: -1
    }
  };
};
var GridListTileBar_GridListTileBar = /*#__PURE__*/react["forwardRef"](function GridListTileBar(props, ref) {
  var actionIcon = props.actionIcon,
      _props$actionPosition = props.actionPosition,
      actionPosition = _props$actionPosition === void 0 ? 'right' : _props$actionPosition,
      classes = props.classes,
      className = props.className,
      subtitle = props.subtitle,
      title = props.title,
      _props$titlePosition = props.titlePosition,
      titlePosition = _props$titlePosition === void 0 ? 'bottom' : _props$titlePosition,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["actionIcon", "actionPosition", "classes", "className", "subtitle", "title", "titlePosition"]);

  var actionPos = actionIcon && actionPosition;
  return /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, titlePosition === 'top' ? classes.titlePositionTop : classes.titlePositionBottom, subtitle && classes.rootSubtitle),
    ref: ref
  }, other), /*#__PURE__*/react["createElement"]("div", {
    className: Object(clsx_m["a" /* default */])(classes.titleWrap, {
      'left': classes.titleWrapActionPosLeft,
      'right': classes.titleWrapActionPosRight
    }[actionPos])
  }, /*#__PURE__*/react["createElement"]("div", {
    className: classes.title
  }, title), subtitle ? /*#__PURE__*/react["createElement"]("div", {
    className: classes.subtitle
  }, subtitle) : null), actionIcon ? /*#__PURE__*/react["createElement"]("div", {
    className: Object(clsx_m["a" /* default */])(classes.actionIcon, actionPos === 'left' && classes.actionIconActionPosLeft)
  }, actionIcon) : null);
});
 false ? undefined : void 0;
/* harmony default export */ var esm_GridListTileBar_GridListTileBar = (Object(withStyles["a" /* default */])(GridListTileBar_styles, {
  name: 'MuiGridListTileBar'
})(GridListTileBar_GridListTileBar));
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var jdom_spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Info.js
var Info = __webpack_require__("E8kk");
var Info_default = /*#__PURE__*/__webpack_require__.n(Info);

// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__("kmB/");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// EXTERNAL MODULE: ./src/components/layout.tsx + 16 modules
var layout = __webpack_require__("9Dj+");

// EXTERNAL MODULE: ./src/components/devices/useDeviceImage.ts
var useDeviceImage = __webpack_require__("dI3M");

// CONCATENATED MODULE: ./src/components/DeviceSpecificationList.tsx


 // tslint:disable-next-line: match-default-export-name no-submodule-imports







var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    },
    ellipsis: {
      textOverflow: 'ellipsis'
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)'
    }
  });
});
function DeviceSpecificationList(props) {
  var count = props.count,
      shuffle = props.shuffle,
      requiredServiceClasses = props.requiredServiceClasses,
      company = props.company;
  var theme = Object(useTheme["a" /* default */])();
  var classes = useStyles();
  var mobile = Object(useMediaQuery["a" /* default */])(theme.breakpoints.down(layout["c" /* MOBILE_BREAKPOINT */]));
  var medium = Object(useMediaQuery["a" /* default */])(theme.breakpoints.down(layout["b" /* MEDIUM_BREAKPOINT */]));
  var cols = mobile ? 1 : medium ? 3 : 4;
  var specs = Object(react["useMemo"])(function () {
    var r = Object(jdom_spec["d" /* deviceSpecifications */])();
    if (company) r = r.filter(function (spec) {
      return spec.company === company;
    });
    if (requiredServiceClasses) r = r.filter(function (spec) {
      return spec.services.length && requiredServiceClasses.every(function (srv) {
        return spec.services.indexOf(srv) > -1;
      });
    });
    if (shuffle) Object(utils["g" /* arrayShuffle */])(r);
    if (count !== undefined) r = r.slice(0, count);
    return r;
  }, [requiredServiceClasses, shuffle, count]);
  if (!specs.length) return /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "body1"
  }, "No device registered yet.");
  return /*#__PURE__*/react_default.a.createElement(esm_GridList_GridList, {
    className: classes.root,
    cols: cols
  }, specs.map(function (spec) {
    var imageUrl = Object(useDeviceImage["a" /* default */])(spec);
    return /*#__PURE__*/react_default.a.createElement(esm_GridListTile_GridListTile, {
      key: spec.id
    }, /*#__PURE__*/react_default.a.createElement("img", {
      src: imageUrl,
      alt: spec.name,
      loading: "lazy"
    }), /*#__PURE__*/react_default.a.createElement(esm_GridListTileBar_GridListTileBar, {
      title: spec.name,
      subtitle: /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
        className: classes.ellipsis,
        source: spec.description.split('.', 1)[0]
      }),
      actionIcon: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["IconButton"], {
        to: "/devices/" + Object(jdom_spec["g" /* identifierToUrlPath */])(spec.id),
        "aria-label": "info about " + spec.name,
        className: classes.icon
      }, /*#__PURE__*/react_default.a.createElement(Info_default.a, null)))
    }));
  }));
}

/***/ }),

/***/ "Y6fa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StatusAlert */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FQT7");


function StatusAlert(props) {
  var specification = props.specification;

  switch (specification === null || specification === void 0 ? void 0 : specification.status) {
    case "deprecated":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        severity: "warning"
      }, "Deprecated");

    case "experimental":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        severity: "info"
      }, "Experimental");

    default:
      return null;
  }
}
var ServiceSpecificationStatusAlert = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(StatusAlert);
/* harmony default export */ __webpack_exports__["a"] = (ServiceSpecificationStatusAlert);

/***/ }),

/***/ "dI3M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useDeviceImage; });
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+ZDr");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Z8Ma");


function useDeviceImage(specification, suffix) {
  return specification && Object(gatsby_link__WEBPACK_IMPORTED_MODULE_0__["withPrefix"])("images/devices/" + Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__[/* identifierToUrlPath */ "g"])(specification.id) + (suffix ? "." + suffix : '') + ".jpg");
}

/***/ }),

/***/ "qnco":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Page; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__("kmB/");

// EXTERNAL MODULE: ./src/components/ServiceSpecificationStatusAlert.tsx
var ServiceSpecificationStatusAlert = __webpack_require__("Y6fa");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./src/components/DeviceSpecificationList.tsx + 3 modules
var DeviceSpecificationList = __webpack_require__("XXVM");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// CONCATENATED MODULE: ./src/components/ServiceMarkdown.tsx







function ServiceMarkdown(props) {
  var classIdentifier = props.classIdentifier,
      source = props.source;
  var service = Object(spec["G" /* serviceSpecificationFromClassIdentifier */])(classIdentifier);
  var test = Object(spec["J" /* serviceTestFromServiceSpec */])(service);
  var shortId = service.shortId;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(ServiceSpecificationStatusAlert["a" /* default */], {
    specification: service
  }), /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
    source: source
  }), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Button"], {
    variant: "contained",
    to: "/services/" + shortId + "/playground/"
  }, "Playground")), test && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Button"], {
    variant: "contained",
    to: "/services/" + shortId + "/test/"
  }, "Test"))), /*#__PURE__*/react_default.a.createElement("h2", null, "Registered Devices"), /*#__PURE__*/react_default.a.createElement(DeviceSpecificationList["default"], {
    requiredServiceClasses: [classIdentifier]
  }), /*#__PURE__*/react_default.a.createElement("h2", null, " See Also"), /*#__PURE__*/react_default.a.createElement("ul", null, /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("a", {
    href: "https://github.com/microsoft/jacdac/edit/main/services/" + shortId + ".md"
  }, "Edit specification source"), "."), /*#__PURE__*/react_default.a.createElement("li", null, "Read ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/reference/service-specification/"
  }, "Service Specification Language"), " reference"), /*#__PURE__*/react_default.a.createElement("li", null, "Create a new service specification using the ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/tools/service-editor/"
  }, "Service Editor")), /*#__PURE__*/react_default.a.createElement("li", null, "Using services in JavaScript with the ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/clients/web/jdom/"
  }, "Jacdac Object Model (JDOM)"))));
}
// CONCATENATED MODULE: ./src/templates/service.tsx

 // eslint-disable-next-line @typescript-eslint/no-explicit-any

function Page(props) {
  return /*#__PURE__*/react_default.a.createElement(ServiceMarkdown, props.pageContext);
}

/***/ }),

/***/ "r2IW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var b = 60103,
    c = 60106,
    d = 60107,
    e = 60108,
    f = 60114,
    g = 60109,
    h = 60110,
    k = 60112,
    l = 60113,
    m = 60120,
    n = 60115,
    p = 60116,
    q = 60121,
    r = 60122,
    u = 60117,
    v = 60129,
    w = 60131;

if ("function" === typeof Symbol && Symbol.for) {
  var x = Symbol.for;
  b = x("react.element");
  c = x("react.portal");
  d = x("react.fragment");
  e = x("react.strict_mode");
  f = x("react.profiler");
  g = x("react.provider");
  h = x("react.context");
  k = x("react.forward_ref");
  l = x("react.suspense");
  m = x("react.suspense_list");
  n = x("react.memo");
  p = x("react.lazy");
  q = x("react.block");
  r = x("react.server.block");
  u = x("react.fundamental");
  v = x("react.debug_trace_mode");
  w = x("react.legacy_hidden");
}

function y(a) {
  if ("object" === typeof a && null !== a) {
    var t = a.$$typeof;

    switch (t) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case l:
          case m:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case h:
              case k:
              case p:
              case n:
              case g:
                return a;

              default:
                return t;
            }

        }

      case c:
        return t;
    }
  }
}

var z = g,
    A = b,
    B = k,
    C = d,
    D = p,
    E = n,
    F = c,
    G = f,
    H = e,
    I = l;
exports.ContextConsumer = h;
exports.ContextProvider = z;
exports.Element = A;
exports.ForwardRef = B;
exports.Fragment = C;
exports.Lazy = D;
exports.Memo = E;
exports.Portal = F;
exports.Profiler = G;
exports.StrictMode = H;
exports.Suspense = I;

exports.isAsyncMode = function () {
  return !1;
};

exports.isConcurrentMode = function () {
  return !1;
};

exports.isContextConsumer = function (a) {
  return y(a) === h;
};

exports.isContextProvider = function (a) {
  return y(a) === g;
};

exports.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === b;
};

exports.isForwardRef = function (a) {
  return y(a) === k;
};

exports.isFragment = function (a) {
  return y(a) === d;
};

exports.isLazy = function (a) {
  return y(a) === p;
};

exports.isMemo = function (a) {
  return y(a) === n;
};

exports.isPortal = function (a) {
  return y(a) === c;
};

exports.isProfiler = function (a) {
  return y(a) === f;
};

exports.isStrictMode = function (a) {
  return y(a) === e;
};

exports.isSuspense = function (a) {
  return y(a) === l;
};

exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === v || a === e || a === l || a === m || a === w || "object" === typeof a && null !== a && (a.$$typeof === p || a.$$typeof === n || a.$$typeof === g || a.$$typeof === h || a.$$typeof === k || a.$$typeof === u || a.$$typeof === q || a[0] === r) ? !0 : !1;
};

exports.typeOf = y;

/***/ }),

/***/ "tRbT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ff2n");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wx14");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");

 // A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/





var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  var styles = {};
  GRID_SIZES.forEach(function (size) {
    var key = "grid-".concat(breakpoint, "-").concat(size);

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      };
      return;
    } // Keep 7 significant numbers.


    var width = "".concat(Math.round(size / 12 * 10e7) / 10e5, "%"); // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  }); // No need for a media query for the first size.

  if (breakpoint === 'xs') {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function getOffset(val) {
  var div = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var parse = parseFloat(val);
  return "".concat(parse / div).concat(String(val).replace(String(parse), '') || 'px');
}

function generateGutter(theme, breakpoint) {
  var styles = {};
  SPACINGS.forEach(function (spacing) {
    var themeSpacing = theme.spacing(spacing);

    if (themeSpacing === 0) {
      return;
    }

    styles["spacing-".concat(breakpoint, "-").concat(spacing)] = {
      margin: "-".concat(getOffset(themeSpacing, 2)),
      width: "calc(100% + ".concat(getOffset(themeSpacing), ")"),
      '& > $item': {
        padding: getOffset(themeSpacing, 2)
      }
    };
  });
  return styles;
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',


var styles = function styles(theme) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `container={true}`. */
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },

    /* Styles applied to the root element if `item={true}`. */
    item: {
      boxSizing: 'border-box',
      margin: '0' // For instance, it's useful when used with a `figure` element.

    },

    /* Styles applied to the root element if `zeroMinWidth={true}`. */
    zeroMinWidth: {
      minWidth: 0
    },

    /* Styles applied to the root element if `direction="column"`. */
    'direction-xs-column': {
      flexDirection: 'column'
    },

    /* Styles applied to the root element if `direction="column-reverse"`. */
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },

    /* Styles applied to the root element if `direction="row-reverse"`. */
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `wrap="nowrap"`. */
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },

    /* Styles applied to the root element if `wrap="reverse"`. */
    'wrap-xs-wrap-reverse': {
      flexWrap: 'wrap-reverse'
    },

    /* Styles applied to the root element if `alignItems="center"`. */
    'align-items-xs-center': {
      alignItems: 'center'
    },

    /* Styles applied to the root element if `alignItems="flex-start"`. */
    'align-items-xs-flex-start': {
      alignItems: 'flex-start'
    },

    /* Styles applied to the root element if `alignItems="flex-end"`. */
    'align-items-xs-flex-end': {
      alignItems: 'flex-end'
    },

    /* Styles applied to the root element if `alignItems="baseline"`. */
    'align-items-xs-baseline': {
      alignItems: 'baseline'
    },

    /* Styles applied to the root element if `alignContent="center"`. */
    'align-content-xs-center': {
      alignContent: 'center'
    },

    /* Styles applied to the root element if `alignContent="flex-start"`. */
    'align-content-xs-flex-start': {
      alignContent: 'flex-start'
    },

    /* Styles applied to the root element if `alignContent="flex-end"`. */
    'align-content-xs-flex-end': {
      alignContent: 'flex-end'
    },

    /* Styles applied to the root element if `alignContent="space-between"`. */
    'align-content-xs-space-between': {
      alignContent: 'space-between'
    },

    /* Styles applied to the root element if `alignContent="space-around"`. */
    'align-content-xs-space-around': {
      alignContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="center"`. */
    'justify-xs-center': {
      justifyContent: 'center'
    },

    /* Styles applied to the root element if `justify="flex-end"`. */
    'justify-xs-flex-end': {
      justifyContent: 'flex-end'
    },

    /* Styles applied to the root element if `justify="space-between"`. */
    'justify-xs-space-between': {
      justifyContent: 'space-between'
    },

    /* Styles applied to the root element if `justify="space-around"`. */
    'justify-xs-space-around': {
      justifyContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="space-evenly"`. */
    'justify-xs-space-evenly': {
      justifyContent: 'space-evenly'
    }
  }, generateGutter(theme, 'xs'), theme.breakpoints.keys.reduce(function (accumulator, key) {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}));
};
var Grid = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Grid(props, ref) {
  var _props$alignContent = props.alignContent,
      alignContent = _props$alignContent === void 0 ? 'stretch' : _props$alignContent,
      _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'stretch' : _props$alignItems,
      classes = props.classes,
      classNameProp = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$container = props.container,
      container = _props$container === void 0 ? false : _props$container,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'row' : _props$direction,
      _props$item = props.item,
      item = _props$item === void 0 ? false : _props$item,
      _props$justify = props.justify,
      justify = _props$justify === void 0 ? 'flex-start' : _props$justify,
      _props$lg = props.lg,
      lg = _props$lg === void 0 ? false : _props$lg,
      _props$md = props.md,
      md = _props$md === void 0 ? false : _props$md,
      _props$sm = props.sm,
      sm = _props$sm === void 0 ? false : _props$sm,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 0 : _props$spacing,
      _props$wrap = props.wrap,
      wrap = _props$wrap === void 0 ? 'wrap' : _props$wrap,
      _props$xl = props.xl,
      xl = _props$xl === void 0 ? false : _props$xl,
      _props$xs = props.xs,
      xs = _props$xs === void 0 ? false : _props$xs,
      _props$zeroMinWidth = props.zeroMinWidth,
      zeroMinWidth = _props$zeroMinWidth === void 0 ? false : _props$zeroMinWidth,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justify", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);

  var className = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, classNameProp, container && [classes.container, spacing !== 0 && classes["spacing-xs-".concat(String(spacing))]], item && classes.item, zeroMinWidth && classes.zeroMinWidth, direction !== 'row' && classes["direction-xs-".concat(String(direction))], wrap !== 'wrap' && classes["wrap-xs-".concat(String(wrap))], alignItems !== 'stretch' && classes["align-items-xs-".concat(String(alignItems))], alignContent !== 'stretch' && classes["align-content-xs-".concat(String(alignContent))], justify !== 'flex-start' && classes["justify-xs-".concat(String(justify))], xs !== false && classes["grid-xs-".concat(String(xs))], sm !== false && classes["grid-sm-".concat(String(sm))], md !== false && classes["grid-md-".concat(String(md))], lg !== false && classes["grid-lg-".concat(String(lg))], xl !== false && classes["grid-xl-".concat(String(xl))]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    className: className,
    ref: ref
  }, other));
});
 false ? undefined : void 0;
var StyledGrid = Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiGrid'
})(Grid);

if (false) { var requireProp; }

/* harmony default export */ __webpack_exports__["a"] = (StyledGrid);

/***/ })

}]);
//# sourceMappingURL=component---src-templates-service-tsx-a14836918134936858fb.js.map