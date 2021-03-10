(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "5+va":
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
  d: "M12 3c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28c.35.6.98 1 1.72 1s1.38-.4 1.72-1H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46C18.09 13.95 19 12.08 19 10c0-3.87-3.13-7-7-7zm2 16h-4v-1h4v1zm0-2h-4v-1h4v1zm-1.5-5.59V14h-1v-2.59L9.67 9.59l.71-.71L12 10.5l1.62-1.62.71.71-1.83 1.82z"
}), 'EmojiObjects');

exports.default = _default;

/***/ }),

/***/ "56Ss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("MquD");






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      minWidth: 56,
      color: theme.palette.action.active,
      flexShrink: 0,
      display: 'inline-flex'
    },

    /* Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      marginTop: 8
    }
  };
};
/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 */

var ListItemIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ListItemIcon(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className"]);

  var context = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_List_ListContext__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, context.alignItems === 'flex-start' && classes.alignItemsFlexStart),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiListItemIcon'
})(ListItemIcon));

/***/ }),

/***/ "DzGZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HR5l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M4.703 2.615s-.505.05-.72.15a3.011 3.011 0 00-.391.221c-.22.12-.42.266-.6.444-.52.516-.795 1.2-.834 2.05a6.857 6.857 0 00-.066.961V8.36a5.117 5.117 0 01-.137 1.032 1.73 1.73 0 01-.4.773 2.006 2.006 0 00-.15.149 6.534 6.534 0 01-.848.617c-.303.196-.481.474-.537.83v.017c-.01.07-.017.14-.018.215L0 12.006v.008c0 .08.003.156.012.226h.002c.024.214.082.378.177.492.129.153.345.328.649.52.304.192.552.398.74.62.19.221.332.549.428.985.037.17.065.54.084 1.106v1.514c0 .285.023.542.056.787.001.047 0 .092.002.14.007.587.135 1.107.385 1.559.25.453.604.803 1.063 1.05.458.248.978.372 1.56.372h14.139c.262 0 .505-.05.72-.15.139-.064.267-.14.391-.221.218-.12.42-.266.6-.444.52-.516.795-1.2.834-2.05.042-.299.066-.618.066-.963v-1.918c.014-.372.059-.715.137-1.03.078-.314.213-.572.4-.775a1.98 1.98 0 00.15-.146c.2-.179.48-.384.848-.618.303-.196.481-.475.537-.832l.002-.015a1.66 1.66 0 00.018-.217V11.988c0-.08-.004-.156-.012-.226h-.002c-.024-.214-.082-.378-.177-.492-.129-.153-.345-.328-.649-.52a3.208 3.208 0 01-.74-.62c-.19-.221-.332-.55-.428-.987-.037-.17-.065-.538-.084-1.104V6.523c0-.285-.023-.542-.056-.787-.001-.047 0-.092-.002-.14-.007-.587-.135-1.107-.385-1.559a2.598 2.598 0 00-1.063-1.05c-.458-.248-.978-.372-1.56-.372H4.703zm1.22 1.24c.307 0 .533.058.673.172.115.096.168.24.168.453a.885.885 0 01-.069.36.501.501 0 01-.142.201.346.346 0 01-.18.07c-.31.042-.543.095-.713.164a1.03 1.03 0 00-.543.536c-.093.201-.149.47-.174.818-.022.301-.033.725-.033 1.293-.012.796-.058 1.422-.137 1.861-.07.398-.206.74-.4 1.02-.197.282-.499.552-.898.804l-.616.39.618.386c.286.18.52.368.695.558.166.18.304.407.414.672.115.277.2.614.248 1.004.051.413.076.908.076 1.47 0 .587.013 1.025.037 1.34.03.367.094.64.196.835.123.236.303.403.537.496.168.067.395.114.693.148a.404.404 0 01.268.16c.081.1.123.259.123.471 0 .308-.064.608-.84.608-.477 0-.898-.094-1.25-.282a2.006 2.006 0 01-.813-.785 2.402 2.402 0 01-.31-1.197c-.048-2.666-.098-3.199-.139-3.37-.115-.472-.286-.83-.525-1.097a3.373 3.373 0 00-.776-.633c-.216-.13-.375-.254-.47-.369-.027-.032-.088-.136-.088-.416 0-.288.09-.471.293-.596.454-.28.781-.522.998-.746.244-.251.415-.565.51-.931.084-.328.132-.788.148-1.407.015-.58.03-1.305.049-2.177.016-.706.229-1.25.654-1.666.426-.416.988-.618 1.719-.618zm12.153 0c.477 0 .898.095 1.25.282.348.185.612.442.813.785.2.343.305.746.31 1.197.048 2.666.098 3.199.139 3.37.115.472.286.83.525 1.097.216.24.476.452.776.633.217.131.376.255.47.369.027.032.088.136.088.416 0 .287-.09.471-.293.596-.454.28-.78.522-.998.746-.243.25-.415.565-.51.931-.084.328-.132.788-.148 1.407-.015.58-.03 1.305-.049 2.177-.016.706-.229 1.25-.654 1.666-.426.416-.988.618-1.719.618-.307 0-.533-.058-.672-.172-.116-.096-.168-.24-.168-.453 0-.135.021-.253.069-.36a.512.512 0 01.14-.201.353.353 0 01.182-.07c.31-.042.543-.095.713-.164.238-.099.424-.284.54-.538.094-.201.152-.468.177-.816.021-.301.033-.727.033-1.295.012-.796.058-1.42.137-1.86.07-.397.204-.74.398-1.019.196-.281.499-.552.898-.804l.616-.39-.616-.386a3.412 3.412 0 01-.695-.558 2.275 2.275 0 01-.416-.672 3.871 3.871 0 01-.246-1.004 12.22 12.22 0 01-.078-1.47c0-.587-.012-1.025-.037-1.34-.03-.367-.092-.64-.194-.835a1.021 1.021 0 00-.539-.496 2.76 2.76 0 00-.691-.148.4.4 0 01-.268-.16c-.082-.1-.123-.259-.123-.471 0-.308.064-.608.84-.608zm-6.29 1.348c.052-.005.341-.005.394 0v.01a1.524 1.524 0 011.287 1.457c0 .62-.332.891-.332.916-.33.346-.123.744.467.695 0 0 2.4.012 2.445 0a.576.576 0 01.422.555l-.002 2.574c-.106.3-.396.36-.658.111-.025 0-.296-.332-.916-.332a1.521 1.521 0 00-1.457 1.286h-.008a4.897 4.897 0 000 .394h.008a1.524 1.524 0 001.457 1.287c.62 0 .89-.332.916-.332.27-.256.557-.225.658.112v2.783a.562.562 0 01-.563.562H8.061a.561.561 0 01-.563-.562V8.836c0-.261.18-.492.422-.555.046.012 2.443 0 2.443 0 .659.032.798-.349.469-.695 0-.025-.332-.296-.332-.916a1.521 1.521 0 011.285-1.457v-.01z",
    strokeWidth: ".75"
  }));
});

/***/ }),

/***/ "E2gh":
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
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'ChevronRight');

exports.default = _default;

/***/ }),

/***/ "IsqK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ofer");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("MquD");







var styles = {
  /* Styles applied to the root element. */
  root: {
    flex: '1 1 auto',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4
  },

  /* Styles applied to the `Typography` components if primary and secondary are set. */
  multiline: {
    marginTop: 6,
    marginBottom: 6
  },

  /* Styles applied to the `Typography` components if dense. */
  dense: {},

  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    paddingLeft: 56
  },

  /* Styles applied to the primary `Typography` component. */
  primary: {},

  /* Styles applied to the secondary `Typography` component. */
  secondary: {}
};
var ListItemText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ListItemText(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      _props$inset = props.inset,
      inset = _props$inset === void 0 ? false : _props$inset,
      primaryProp = props.primary,
      primaryTypographyProps = props.primaryTypographyProps,
      secondaryProp = props.secondary,
      secondaryTypographyProps = props.secondaryTypographyProps,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_List_ListContext__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]),
      dense = _React$useContext.dense;

  var primary = primaryProp != null ? primaryProp : children;

  if (primary != null && primary.type !== _Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] && !disableTypography) {
    primary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: "span",
      display: "block"
    }, primaryTypographyProps), primary);
  }

  var secondary = secondaryProp;

  if (secondary != null && secondary.type !== _Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] && !disableTypography) {
    secondary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      variant: "body2",
      className: classes.secondary,
      color: "textSecondary",
      display: "block"
    }, secondaryTypographyProps), secondary);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, dense && classes.dense, inset && classes.inset, primary && secondary && classes.multiline),
    ref: ref
  }, other), primary, secondary);
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiListItemText'
})(ListItemText));

/***/ }),

/***/ "M2yH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ToolsDrawer; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__("tVbE");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__("56Ss");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__("IsqK");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Drawer/Drawer.js
var Drawer = __webpack_require__("IIOH");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__("eD//");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Divider/Divider.js
var Divider = __webpack_require__("wb2y");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./src/components/layout.tsx + 16 modules
var layout = __webpack_require__("9Dj+");

// EXTERNAL MODULE: ./src/components/AppContext.tsx + 1 modules
var AppContext = __webpack_require__("2K/c");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__("5AJ6");

// CONCATENATED MODULE: ./node_modules/@material-ui/icons/esm/OpenInNew.js


/* harmony default export */ var OpenInNew = (Object(createSvgIcon["a" /* default */])( /*#__PURE__*/react["createElement"]("path", {
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
}), 'OpenInNew'));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ChevronRight.js
var ChevronRight = __webpack_require__("E2gh");
var ChevronRight_default = /*#__PURE__*/__webpack_require__.n(ChevronRight);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/EmojiObjects.js
var EmojiObjects = __webpack_require__("5+va");
var EmojiObjects_default = /*#__PURE__*/__webpack_require__.n(EmojiObjects);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/SettingsBrightness.js
var SettingsBrightness = __webpack_require__("pLOG");
var SettingsBrightness_default = /*#__PURE__*/__webpack_require__.n(SettingsBrightness);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/SystemUpdateAlt.js
var SystemUpdateAlt = __webpack_require__("Yqxg");
var SystemUpdateAlt_default = /*#__PURE__*/__webpack_require__.n(SystemUpdateAlt);

// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__("geQJ");

// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__("NHHF");

// EXTERNAL MODULE: ./src/components/icons/MakeCodeIcon.tsx
var MakeCodeIcon = __webpack_require__("DzGZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js
var SvgIcon = __webpack_require__("HR5l");

// CONCATENATED MODULE: ./src/components/icons/JupyterIcon.tsx


/* harmony default export */ var JupyterIcon = (function (props) {
  return /*#__PURE__*/react_default.a.createElement(SvgIcon["a" /* default */], props, /*#__PURE__*/react_default.a.createElement("g", {
    transform: "scale(0.046, 0.046)"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    d: "M363.1749878,34.3386345c0.8400269,19.7925911-14.3702087,36.5211449-33.9805298,37.3691826c-19.6002808,0.8480377-36.1755371-14.5075035-37.015564-34.3000946S306.5491333,0.8815286,326.1544189,0.033491S362.3349609,14.5460396,363.1749878,34.3386345 M193.5356445,384.5007019c-78.2163391,0-146.3281555-28.4102173-181.7874756-70.3781433c26.833786,75.240448,98.0906677,129.0350952,181.7874756,129.0350952s154.9537048-53.7946472,181.7874756-129.0350952C339.8638,356.0904846,271.7519836,384.5007019,193.5356445,384.5007019 M193.5356445,111.3343964c78.2163391,0,146.3281555,28.4065704,181.7874756,70.3781586c-26.8337708-75.2404785-98.0906677-129.0387421-181.7874756-129.0387421S38.581955,106.4720764,11.7481689,181.7125549C47.2074814,139.7409668,115.3193054,111.3343964,193.5356445,111.3343964 M101.3917084,467.5608215c0.996994,23.5126343-17.0774078,43.38797-40.3688049,44.3994751c-23.2914047,1.0064392-42.9797745-17.239624-43.9767761-40.7522583c-1.0019455-23.5126343,17.072464-43.3930054,40.3638611-44.3994751C80.7013855,425.802124,100.3946991,444.0481873,101.3917084,467.5608215 M26.9179688,95.017662C12.6761246,95.6327286,0.6337129,84.4763947,0.0244142,70.0946655c-0.6142578-14.3767166,10.4374084-26.5331802,24.6842041-27.1482506c14.2418442-0.6150742,26.2842484,10.5412636,26.8935547,24.9179802C52.2164307,82.2461243,41.1598053,94.4025803,26.9179688,95.017662z"
  })));
});
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// CONCATENATED MODULE: ./src/components/ToolsDrawer.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name







var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  var _drawer, _drawerPaper;

  return Object(createStyles["a" /* default */])({
    drawer: (_drawer = {
      width: layout["f" /* TOOLS_DRAWER_WIDTH */] + "rem",
      flexShrink: 0
    }, _drawer[theme.breakpoints.down(layout["c" /* MOBILE_BREAKPOINT */])] = {
      width: layout["d" /* MOBILE_TOOLS_DRAWER_WIDTH */] + "rem"
    }, _drawer),
    drawerPaper: (_drawerPaper = {
      width: layout["f" /* TOOLS_DRAWER_WIDTH */] + "rem"
    }, _drawerPaper[theme.breakpoints.down(layout["c" /* MOBILE_BREAKPOINT */])] = {
      width: layout["d" /* MOBILE_TOOLS_DRAWER_WIDTH */] + "rem"
    }, _drawerPaper),
    drawerHeader: _objectSpread(_objectSpread({
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar), {}, {
      justifyContent: 'flex-start'
    })
  });
});

function ToolsListItem(props) {
  var text = props.text,
      url = props.url,
      icon = props.icon,
      onClick = props.onClick;
  return url ? /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: url,
    "aria-label": "Toggle Dark Mode"
  }, /*#__PURE__*/react_default.a.createElement(ListItem["a" /* default */], {
    button: true
  }, /*#__PURE__*/react_default.a.createElement(ListItemIcon["a" /* default */], null, icon), /*#__PURE__*/react_default.a.createElement(ListItemText["a" /* default */], {
    primaryTypographyProps: {
      color: "textPrimary"
    },
    primary: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("span", null, text), /^https:\/\//.test(url) && /*#__PURE__*/react_default.a.createElement(OpenInNew, {
      fontSize: "small",
      color: "action"
    }))
  }))) : /*#__PURE__*/react_default.a.createElement(ListItem["a" /* default */], {
    button: true,
    onClick: onClick,
    "aria-label": text
  }, /*#__PURE__*/react_default.a.createElement(ListItemIcon["a" /* default */], null, icon), /*#__PURE__*/react_default.a.createElement(ListItemText["a" /* default */], {
    primaryTypographyProps: {
      color: "textPrimary"
    },
    primary: text
  }));
}

function ToolsDrawer() {
  var classes = useStyles();

  var _useContext = Object(react["useContext"])(AppContext["c" /* default */]),
      toolsMenu = _useContext.toolsMenu,
      setToolsMenu = _useContext.setToolsMenu,
      toggleShowDeviceHostsDialog = _useContext.toggleShowDeviceHostsDialog;

  var _useContext2 = Object(react["useContext"])(DarkModeContext["a" /* default */]),
      toggleDarkMode = _useContext2.toggleDarkMode,
      darkMode = _useContext2.darkMode;

  var handleClick = function handleClick(link) {
    return function () {
      if (link.action) link.action();else setToolsMenu(false);
    };
  };

  var handleDrawerClose = function handleDrawerClose() {
    setToolsMenu(false);
  };

  var handleDarkMode = function handleDarkMode() {
    toggleDarkMode();
    setToolsMenu(false);
  };

  var links = [{
    text: "Role Manager",
    url: "/tools/role-manager",
    icon: /*#__PURE__*/react_default.a.createElement(EmojiObjects_default.a, null)
  }, {
    text: "Firmware Update",
    url: "/tools/updater",
    icon: /*#__PURE__*/react_default.a.createElement(SystemUpdateAlt_default.a, null)
  }, {// separator
  }, {
    text: "Start simulator",
    action: toggleShowDeviceHostsDialog,
    icon: /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
      kind: constants["cf" /* VIRTUAL_DEVICE_NODE_NAME */]
    })
  }, {// separator
  }, {
    text: "MakeCode",
    url: "/tools/makecode",
    icon: /*#__PURE__*/react_default.a.createElement(MakeCodeIcon["a" /* default */], null)
  }, {
    text: "Jupyter Lab",
    url: "/tools/jupyterlab",
    icon: /*#__PURE__*/react_default.a.createElement(JupyterIcon, null)
  },
  /*
      {
          text: "Edge Impulse",
          url: "/tools/edge-impulse",
          icon: <EdgeImpulseIcon />
      },
      {
      text: "Azure IoT Hub",
              url: "/tools/azure-iot-hub",
              icon: <CloudIcon />
      },
  */
  {// separator
  }, {
    text: "Service editor",
    url: "/tools/service-editor",
    icon: /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
      kind: "service"
    })
  }, {
    text: "Device registration",
    url: "/tools/device-registration",
    icon: /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
      kind: "device"
    })
  }];
  if (!toolsMenu) return null;
  return /*#__PURE__*/react_default.a.createElement(Drawer["a" /* default */], {
    className: classes.drawer,
    variant: "persistent",
    anchor: "right",
    open: toolsMenu,
    classes: {
      paper: classes.drawerPaper
    }
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.drawerHeader
  }, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["IconButton"], {
    "aria-label": "Collapse",
    onClick: handleDrawerClose
  }, /*#__PURE__*/react_default.a.createElement(ChevronRight_default.a, null))), /*#__PURE__*/react_default.a.createElement(List["a" /* default */], null, links.map(function (link, i) {
    return link.text ? /*#__PURE__*/react_default.a.createElement(ToolsListItem, Object.assign({
      key: link.text
    }, link, {
      onClick: handleClick(link)
    })) : /*#__PURE__*/react_default.a.createElement(Divider["a" /* default */], {
      key: "div" + i
    });
  }), /*#__PURE__*/react_default.a.createElement(Divider["a" /* default */], null), /*#__PURE__*/react_default.a.createElement(ListItem["a" /* default */], {
    button: true,
    onClick: handleDarkMode,
    "aria-label": "Toggle Dark Mode"
  }, /*#__PURE__*/react_default.a.createElement(ListItemIcon["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(SettingsBrightness_default.a, null)), /*#__PURE__*/react_default.a.createElement(ListItemText["a" /* default */], null, darkMode === 'light' ? "Dark Mode" : "Light mode"))));
}

/***/ }),

/***/ "pLOG":
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
  d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"
}), 'SettingsBrightness');

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=75-b00f4eb843c5a977fd6b.js.map