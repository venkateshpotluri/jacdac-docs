(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7944],{

/***/ 31186:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34621);





var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var CardActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function CardActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["disableSpacing", "classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(styles, {
  name: 'MuiCardActions'
})(CardActions));

/***/ }),

/***/ 57944:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ TraceList; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(35313);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/logparser.ts
var logparser = __webpack_require__(87202);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__(95823);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(29114);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(31186);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__(10913);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
// EXTERNAL MODULE: ./src/components/PacketsContext.tsx + 3 modules
var PacketsContext = __webpack_require__(69882);
;// CONCATENATED MODULE: ./src/components/TraceCard.tsx






function TraceCard(props) {
  var name = props.name,
      trace = props.trace;
  var description = trace.description,
      duration = trace.duration,
      length = trace.length;

  var _useContext = (0,react.useContext)(PacketsContext/* default */.Z),
      setReplayTrace = _useContext.setReplayTrace,
      toggleTracing = _useContext.toggleTracing;

  var _useContext2 = (0,react.useContext)(AppContext/* default */.ZP),
      setDrawerType = _useContext2.setDrawerType;

  var handleClick = function handleClick() {
    setDrawerType(AppContext/* DrawerType.Packets */.jw.Packets);
    setReplayTrace(trace);
    toggleTracing();
  };

  return /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(CardHeader/* default */.Z, {
    title: name,
    subheader: (0,pretty/* prettyDuration */.Xh)(duration) + ", " + length + " packets"
  }), /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, description && /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    source: description
  })), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    onClick: handleClick,
    variant: "outlined"
  }, "import")));
}
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(7746);
;// CONCATENATED MODULE: ./src/components/TraceList.tsx






function TraceList() {
  var gridBreakpoints = (0,useGridBreakpoints/* default */.Z)();
  var data = (0,gatsby_browser_entry.useStaticQuery)("413816803");
  var traces = data.allPlainText.nodes.filter(function (node) {
    var _node$parent;

    return ((_node$parent = node.parent) === null || _node$parent === void 0 ? void 0 : _node$parent.ext) === ".txt";
  }).map(function (node) {
    return {
      trace: (0,logparser/* parseTrace */.k9)(node.content),
      name: node.parent.name
    };
  }).filter(function (trace) {
    return !!trace.trace;
  });
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, traces.map(function (_ref) {
    var trace = _ref.trace,
        name = _ref.name;
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
      item: true,
      key: name
    }, /*#__PURE__*/react.createElement(TraceCard, Object.assign({
      name: name,
      trace: trace
    }, gridBreakpoints)));
  }));
}

/***/ }),

/***/ 7746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useGridBreakpoints; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84377);


function useGridBreakpoints(itemCount) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP),
      drawerType = _useContext.drawerType;

  if (itemCount !== undefined) {
    switch (itemCount) {
      case 1:
      case 2:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6
        };

      case 3:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 4,
          xl: 4
        };
    }
  }

  if (drawerType != _AppContext__WEBPACK_IMPORTED_MODULE_1__/* .DrawerType.None */ .jw.None) return {
    xs: 12,
    md: 6,
    sm: 6,
    lg: 6,
    xl: 4
  };else return {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 3
  };
}

/***/ })

}]);
//# sourceMappingURL=7944-bcb368d23a9264a76c76.js.map