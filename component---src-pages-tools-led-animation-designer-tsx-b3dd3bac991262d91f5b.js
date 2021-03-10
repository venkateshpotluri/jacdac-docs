(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "/xI6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Page; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("KQm4");

// EXTERNAL MODULE: ./src/components/hooks/useLedAnimationStyle.ts
var useLedAnimationStyle = __webpack_require__("XEv/");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__("tr08");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__("30+C");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__("50B7");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__("oa/T");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__("r9w1");

// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__("7/Hy");

// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__("qhky");

// EXTERNAL MODULE: ./src/components/ui/Snippet.tsx
var Snippet = __webpack_require__("81PJ");

// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__("l6uw");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__("1waj");
var Add_default = /*#__PURE__*/__webpack_require__.n(Add);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__("OXkz");

// CONCATENATED MODULE: ./src/components/tools/LedAnimationDesigner.tsx







 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports match-default-export-name



var LedAnimationFrameDesigner = /*#__PURE__*/Object(react["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(98)]).then(__webpack_require__.bind(null, "w3fS"));
});
function LedAnimationDesigner() {
  var _useState = Object(react["useState"])(0),
      repetitions = _useState[0],
      setRepetitions = _useState[1];

  var _useState2 = Object(react["useState"])([[0, 255, 0, 128], [0, 255, 100, 128]]),
      frames = _useState2[0],
      setFrames = _useState2[1];

  var animation = [repetitions, frames];

  var _useLedAnimationStyle = Object(useLedAnimationStyle["a" /* default */])(animation, {
    cssProperty: "fill"
  }),
      className = _useLedAnimationStyle.className,
      helmetStyle = _useLedAnimationStyle.helmetStyle;

  var theme = Object(useTheme["a" /* default */])();

  var handleFrame = function handleFrame(i) {
    return function (frame) {
      var newFrames = frames.slice(0);
      newFrames[i] = frame;
      setFrames(newFrames);
    };
  };

  var handleRemove = function handleRemove(i) {
    return function () {
      var newFrames = frames.slice(0);
      newFrames.splice(i, 1);
      setFrames(newFrames);
    };
  };

  var handleClone = function handleClone(i) {
    return function () {
      var frame = frames[i];
      var newFrame = Object(utils["m" /* clone */])(frame);
      var newFrames = [].concat(Object(toConsumableArray["a" /* default */])(frames.slice(0, i)), [newFrame], Object(toConsumableArray["a" /* default */])(frames.slice(i)));
      setFrames(newFrames);
    };
  };

  var handleAdd = function handleAdd() {
    return setFrames([].concat(Object(toConsumableArray["a" /* default */])(frames), [frames[frames.length - 1].slice(0)]));
  };

  var handleRepetitionChange = function handleRepetitionChange(event) {
    var v = parseInt(event.target.value);
    if (!isNaN(v)) setRepetitions(v);
  };

  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, helmetStyle && /*#__PURE__*/react_default.a.createElement(Helmet["b" /* default */], null, /*#__PURE__*/react_default.a.createElement("style", null, helmetStyle)), /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(CardHeader["a" /* default */], {
    title: "preview"
  }), /*#__PURE__*/react_default.a.createElement(CardContent["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(SvgWidget["a" /* default */], {
    size: "14vh",
    width: 64,
    height: 64
  }, /*#__PURE__*/react_default.a.createElement("circle", {
    cx: 32,
    cy: 32,
    r: 30,
    className: className,
    stroke: theme.palette.background.default,
    strokeWidth: 1
  }))))), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(CardHeader["a" /* default */], {
    title: "repetition"
  }), /*#__PURE__*/react_default.a.createElement(CardContent["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
    "aria-label": "number of repetitions",
    value: repetitions,
    type: "number",
    onChange: handleRepetitionChange
  })))), frames.map(function (frame, i) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: 12,
      sm: 6,
      lg: 4,
      key: i
    }, /*#__PURE__*/react_default.a.createElement(Suspense["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(LedAnimationFrameDesigner, {
      key: i,
      frame: frame,
      setFrame: handleFrame(i),
      onClone: handleClone(i),
      onRemove: frames.length > 1 ? handleRemove(i) : undefined
    })));
  }), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(CardContent["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(IconButtonWithTooltip["a" /* default */], {
    title: "add animation frame",
    onClick: handleAdd
  }, /*#__PURE__*/react_default.a.createElement(Add_default.a, null))))), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(CardHeader["a" /* default */], {
    title: "code"
  }), /*#__PURE__*/react_default.a.createElement(CardContent["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Snippet["a" /* default */], {
    value: function value() {
      return JSON.stringify(animation, null, 2);
    },
    mode: "json"
  })))));
}
// CONCATENATED MODULE: ./src/pages/tools/led-animation-designer.tsx


function Page() {
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h1", null, "LED Animation Designer"), /*#__PURE__*/react_default.a.createElement(LedAnimationDesigner, null));
}

/***/ }),

/***/ "81PJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Snippet; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ofer");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Indg");



function Snippet(props) {
  var value = props.value,
      mode = props.mode,
      download = props.download,
      url = props.url,
      caption = props.caption;
  var v = typeof value === 'function' ? value() : value;
  var className = mode && "language-" + (mode === "sts" ? "ts" : mode);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CodeBlock__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    className: className,
    downloadName: download,
    downloadText: download && v,
    url: url
  }, v), caption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    variant: "caption"
  }, caption));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-led-animation-designer-tsx-b3dd3bac991262d91f5b.js.map