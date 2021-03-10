(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "1iKp":
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
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore');

exports.default = _default;

/***/ }),

/***/ "22ne":
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

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "8"
}), 'FiberManualRecord');

exports.default = _default;

/***/ }),

/***/ "47th":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ApiKeyAccordion; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/components/useDbValue.ts
var useDbValue = __webpack_require__("2Opq");

// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__("06ul");

// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__("FQT7");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Accordion/Accordion.js
var Accordion = __webpack_require__("6C/C");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionSummary/AccordionSummary.js
var AccordionSummary = __webpack_require__("LvTE");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__("hlFM");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionDetails/AccordionDetails.js
var AccordionDetails = __webpack_require__("Kpcq");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__("r9w1");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("iuhU");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/AccordionActions/AccordionActions.js





var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end'
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var AccordionActions_AccordionActions = /*#__PURE__*/react["forwardRef"](function AccordionActions(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "className", "disableSpacing"]);

  return /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_AccordionActions_AccordionActions = (Object(withStyles["a" /* default */])(styles, {
  name: 'MuiAccordionActions'
})(AccordionActions_AccordionActions));
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__("1iKp");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CheckCircleOutline.js
var CheckCircleOutline = __webpack_require__("aMX1");
var CheckCircleOutline_default = /*#__PURE__*/__webpack_require__.n(CheckCircleOutline);

// EXTERNAL MODULE: ./node_modules/notistack/dist/notistack.esm.js
var notistack_esm = __webpack_require__("NKQG");

// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__("W1g9");

// CONCATENATED MODULE: ./src/components/ApiKeyAccordion.tsx







 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports




function ApiKeyAccordion(props) {
  var apiName = props.apiName,
      validateKey = props.validateKey,
      instructions = props.instructions,
      title = props.title;

  var _useDbValue = Object(useDbValue["a" /* default */])(apiName, ""),
      apiKey = _useDbValue.value,
      setApiKey = _useDbValue.setValue;

  var apiKeyId = Object(react_use_id_hook_esm["b" /* useId */])();

  var _useState = Object(react["useState"])(""),
      key = _useState[0],
      setKey = _useState[1];

  var _useState2 = Object(react["useState"])(!apiKey),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      validated = _useState3[0],
      setValidated = _useState3[1];

  var _useSnackbar = Object(notistack_esm["b" /* useSnackbar */])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  Object(useEffectAsync["a" /* default */])( /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(mounted) {
      var _ref2, statusCode;

      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (apiKey) {
                _context.next = 4;
                break;
              }

              setValidated(false);
              _context.next = 16;
              break;

            case 4:
              if (!validateKey) {
                _context.next = 10;
                break;
              }

              _context.next = 7;
              return validateKey(apiKey);

            case 7:
              _context.t0 = _context.sent;
              _context.next = 11;
              break;

            case 10:
              _context.t0 = {
                statusCode: 200
              };

            case 11:
              _ref2 = _context.t0;
              statusCode = _ref2.statusCode;

              if (mounted()) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return");

            case 15:
              if (statusCode === 200) {
                setValidated(true);
                setExpanded(false);
              } else {
                setValidated(false);
                if (statusCode === 403) setApiKey(undefined);
              }

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [apiKey]);

  var handleApiChange = function handleApiChange(event) {
    setKey(event.target.value);
  };

  var handleSave = function handleSave() {
    setApiKey(key);
    setKey("");
    enqueueSnackbar("key saved...");
  };

  var handleReset = function handleReset() {
    setApiKey("");
    enqueueSnackbar("key cleared...");
  };

  var handleExpanded = function handleExpanded() {
    setExpanded(!expanded);
  };

  return /*#__PURE__*/react_default.a.createElement(Accordion["a" /* default */], {
    expanded: expanded,
    onChange: handleExpanded
  }, /*#__PURE__*/react_default.a.createElement(AccordionSummary["a" /* default */], {
    expandIcon: /*#__PURE__*/react_default.a.createElement(ExpandMore_default.a, null)
  }, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "body1"
  }, (title || "API key") + " Configuration"), validated && /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    ml: 1,
    color: "success.main"
  }, /*#__PURE__*/react_default.a.createElement(CheckCircleOutline_default.a, null))), /*#__PURE__*/react_default.a.createElement(AccordionDetails["a" /* default */], {
    style: {
      display: "block"
    }
  }, validated && /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "success"
  }, "API key ready!"), instructions, /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
    id: apiKeyId,
    autoFocus: true,
    label: "API key",
    fullWidth: true,
    value: key,
    onChange: handleApiChange
  })), /*#__PURE__*/react_default.a.createElement(esm_AccordionActions_AccordionActions, null, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Button"], {
    "aria-label": "save api key",
    disabled: !key,
    variant: "contained",
    color: "primary",
    onClick: handleSave
  }, "Save"), /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Button"], {
    "aria-label": "clear api key",
    disabled: !apiKey,
    variant: "contained",
    onClick: handleReset
  }, "Clear")));
}

/***/ }),

/***/ "6C/C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("T5bk");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ODXe");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("USxY");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("iuhU");
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("JQEk");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("kKAo");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("H2TA");
/* harmony import */ var _AccordionContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("A7vI");
/* harmony import */ var _utils_useControlled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("yCxk");













var styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      transition: theme.transitions.create(['margin'], transition),
      '&:before': {
        position: 'absolute',
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.divider,
        transition: theme.transitions.create(['opacity', 'background-color'], transition)
      },
      '&:first-child': {
        '&:before': {
          display: 'none'
        }
      },
      '&$expanded': {
        margin: '16px 0',
        '&:first-child': {
          marginTop: 0
        },
        '&:last-child': {
          marginBottom: 0
        },
        '&:before': {
          opacity: 0
        }
      },
      '&$expanded + &': {
        '&:before': {
          display: 'none'
        }
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground
      }
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: 0,
      '&:first-child': {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius
      },
      '&:last-child': {
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        // Fix a rendering issue on Edge
        '@supports (-ms-ime-align: auto)': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    },

    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {}
  };
};
var Accordion = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"](function Accordion(props, ref) {
  var childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$defaultExpande = props.defaultExpanded,
      defaultExpanded = _props$defaultExpande === void 0 ? false : _props$defaultExpande,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      expandedProp = props.expanded,
      onChange = props.onChange,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Collapse__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"] : _props$TransitionComp,
      TransitionProps = props.TransitionProps,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(props, ["children", "classes", "className", "defaultExpanded", "disabled", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"]);

  var _useControlled = Object(_utils_useControlled__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'Accordion',
    state: 'expanded'
  }),
      _useControlled2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useControlled, 2),
      expanded = _useControlled2[0],
      setExpandedState = _useControlled2[1];

  var handleChange = react__WEBPACK_IMPORTED_MODULE_4__["useCallback"](function (event) {
    setExpandedState(!expanded);

    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpandedState]);

  var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_4__["Children"].toArray(childrenProp),
      _React$Children$toArr2 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_React$Children$toArr),
      summary = _React$Children$toArr2[0],
      children = _React$Children$toArr2.slice(1);

  var contextValue = react__WEBPACK_IMPORTED_MODULE_4__["useMemo"](function () {
    return {
      expanded: expanded,
      disabled: disabled,
      toggle: handleChange
    };
  }, [expanded, disabled, handleChange]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Paper__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(classes.root, className, expanded && classes.expanded, disabled && classes.disabled, !square && classes.rounded),
    ref: ref,
    square: square
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_AccordionContext__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].Provider, {
    value: contextValue
  }, summary), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](TransitionComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    in: expanded,
    timeout: "auto"
  }, TransitionProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    "aria-labelledby": summary.props.id,
    id: summary.props['aria-controls'],
    role: "region"
  }, children)));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(styles, {
  name: 'MuiAccordion'
})(Accordion));

/***/ }),

/***/ "A7vI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 * @type {React.Context<{} | {expanded: boolean, disabled: boolean, toggle: () => void}>}
 */

var AccordionContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});

if (false) {}

/* harmony default export */ __webpack_exports__["a"] = (AccordionContext);

/***/ }),

/***/ "DObr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("H2TA");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ofer");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("iuhU");






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      fontWeight: theme.typography.fontWeightMedium,
      marginTop: -2
    }
  };
};
var AlertTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function AlertTitle(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    gutterBottom: true,
    component: "div",
    ref: ref,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(classes.root, className)
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(styles, {
  name: 'MuiAlertTitle'
})(AlertTitle));

/***/ }),

/***/ "Kpcq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");





var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      padding: theme.spacing(1, 2, 2)
    }
  };
};
var AccordionDetails = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function AccordionDetails(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiAccordionDetails'
})(AccordionDetails));

/***/ }),

/***/ "Lfy6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EdgeImpulse; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KQm4");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HaE+");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vuIU");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JX7q");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dI71");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("p532");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("30+C");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("50B7");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Ie8z");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("o4QW");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("Z3vd");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("tr08");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("hlFM");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("iae6");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("oa/T");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("UhlP");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("ofer");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("tRbT");
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("4+mf");
/* harmony import */ var _components_useDbValue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("2Opq");
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("yNWl");
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("IzqI");
/* harmony import */ var _components_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("TD2k");
/* harmony import */ var _jacdac_ts_src_jdom_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("v+ZI");
/* harmony import */ var _components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("5oJA");
/* harmony import */ var _components_ui_Alert__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("FQT7");
/* harmony import */ var _components_useEffectAsync__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("06ul");
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("ZfHV");
/* harmony import */ var _components_FieldDataSet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("GAtA");
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("Z8Ma");
/* harmony import */ var _components_ui_CircularProgressWithLabel__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("2HUc");
/* harmony import */ var _components_Trend__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("pHpC");
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("p2q9");
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _components_ServiceList__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("hDAI");
/* harmony import */ var _model_uploader__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("tM5R");
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("Zo1I");
/* harmony import */ var _components_useDeviceName__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("aJrF");
/* harmony import */ var _components_ReadingFieldGrid__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("zPMT");
/* harmony import */ var _components_useChartPalette__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("Ufew");
/* harmony import */ var _jacdac_ts_src_jdom_sensoraggregatorclient__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__("e7gs");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__("DObr");
/* harmony import */ var _jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__("DMAQ");
/* harmony import */ var _components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__("9pTp");
/* harmony import */ var _components_ApiKeyAccordion__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__("47th");






















 // tslint:disable-next-line: match-default-export-name no-submodule-imports













var EDGE_IMPULSE_API_KEY = "edgeimpulseapikey";
var IDLE = "idle";
var STARTING = "starting";
var SAMPLING = "sampling";
var UPLOADING = "uploading";
var SAMPLING_STATE = "samplingState";

/*
A client for the EdgeImpulse remote management
https://docs.edgeimpulse.com/reference#remote-management
*/
var EdgeImpulseClient = /*#__PURE__*/function (_JDClient) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(EdgeImpulseClient, _JDClient);

  function EdgeImpulseClient(apiKey, aggregator, inputRegisters, palette) {
    var _this;

    _this = _JDClient.call(this) || this;
    _this.connectionState = _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* DISCONNECT */ "eb"];
    _this.samplingState = IDLE;
    _this.apiKey = apiKey;
    _this.aggregator = aggregator;
    _this.inputRegisters = inputRegisters;
    _this.palette = palette;
    _this.handleMessage = _this.handleMessage.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
    _this.handleOpen = _this.handleOpen.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
    _this.handleError = _this.handleError.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
    _this.handleReport = _this.handleReport.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
    _this.handlePing = _this.handlePing.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
    _this.aggregatorClient = new _jacdac_ts_src_jdom_sensoraggregatorclient__WEBPACK_IMPORTED_MODULE_41__[/* SensorAggregatorClient */ "a"](_this.aggregator);

    _this.aggregatorClient.subscribeSample(_this.handleReport);

    _this.mount(function () {
      return _this.disconnect();
    });

    _this.mount(function () {
      return _this.aggregatorClient.unmount();
    });

    return _this;
  }

  var _proto = EdgeImpulseClient.prototype;

  _proto.disconnect = function disconnect() {
    this.clearSampling();

    if (this._pingInterval) {
      clearInterval(this._pingInterval);
      this._pingInterval = undefined;
    } // stop socket


    if (this._ws) {
      var w = this._ws;
      this._ws = undefined;

      try {
        w.close();
      } catch (e) {
        console.debug(e);
      } finally {
        this.setConnectionState(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* DISCONNECT */ "eb"]);
      }
    }
  };

  _proto.setConnectionState = function setConnectionState(state) {
    if (this.connectionState !== state) {
      this.connectionState = state;
      this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* CONNECTION_STATE */ "G"], this.connectionState);
      console.log("ei: connection state changed", this.connectionState);
    }
  };

  _proto.setSamplingState = function setSamplingState(state) {
    if (this.samplingState !== state) {
      this.samplingState = state;
      this.emit(SAMPLING_STATE, this.samplingState);
      this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* CHANGE */ "s"]);
      console.log("ei: sampling state changed", this.samplingState);
    }
  };

  _proto.send = function send(msg) {
    var _this$_ws;

    (_this$_ws = this._ws) === null || _this$_ws === void 0 ? void 0 : _this$_ws.send(JSON.stringify(msg));
  };

  _proto.handleOpen = /*#__PURE__*/function () {
    var _handleOpen = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee() {
      var service, device, firmwareIdentifier, deviceSpec;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("ws: open");
              service = this.aggregator;
              device = service.device; // fetch device spec

              _context.next = 5;
              return service.device.resolveFirmwareIdentifier();

            case 5:
              firmwareIdentifier = _context.sent;
              deviceSpec = Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_31__[/* deviceSpecificationFromFirmwareIdentifier */ "b"])(firmwareIdentifier);
              this._hello = {
                "version": 2,
                "apiKey": this.apiKey,
                "deviceId": device.deviceId,
                "deviceType": (deviceSpec === null || deviceSpec === void 0 ? void 0 : deviceSpec.name) || (firmwareIdentifier === null || firmwareIdentifier === void 0 ? void 0 : firmwareIdentifier.toString(16)) || "Jacdac device",
                "connection": "ip",
                // direct connection
                "sensors": [{
                  "name": this.inputRegisters.map(function (reg) {
                    return Object(_jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_43__[/* serviceName */ "j"])(reg.service.serviceClass);
                  }).join(','),
                  "maxSampleLengthS": 10000,
                  "frequencies": [50, 30, 20, 10]
                }]
              };
              this.send({
                "hello": this._hello
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function handleOpen() {
      return _handleOpen.apply(this, arguments);
    }

    return handleOpen;
  }();

  _proto.reconnect = function reconnect() {
    this.disconnect();
    this.connect();
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  _proto.handleMessage = function handleMessage(msg) {
    // response to ping?
    if (msg.data === "pong") {
      this.pong = true;
      return;
    }

    var data = JSON.parse(msg.data);

    if (data.hello !== undefined) {
      var hello = data;

      if (!hello.hello) {
        this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* ERROR */ "jb"], hello.err);
        this.disconnect();
      } else {
        this.setConnectionState(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* CONNECT */ "E"]);
      }
    } else if (data.sample) {
      var sample = data.sample;
      this.startSampling(sample);
    }
  };

  _proto.handleReport = function handleReport(row) {
    console.log("ei: aggregator report", this.connected, this.sampling);
    if (!this.connected) return; // ignore
    // partial data? ignore

    if (row.some(function (r) {
      return r === undefined;
    })) return;
    var bus = this.aggregator.device.bus;
    var timestamp = bus.timestamp; // first sample, notify we're started

    if (this.samplingState == STARTING) {
      this._sample.startTimestamp = this._sample.lastProgressTimestamp = timestamp;
      this.send({
        "sampleStarted": true
      });
      this.setSamplingState(SAMPLING);
    } // store sample


    if (this.samplingState == SAMPLING) {
      var ds = this.dataSet;
      ds.addRow(row);
      this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* REPORT_RECEIVE */ "Sc"]); // debounced progress update

      if (timestamp - this._sample.lastProgressTimestamp > 100) {
        this._sample.lastProgressTimestamp = timestamp;
        this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* PROGRESS */ "zc"], this.progress);
      }

      if (timestamp - this._sample.startTimestamp >= this._sample.length) {
        // first stop the sampling
        this.stopSampling(); // we're done!

        this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* PROGRESS */ "zc"], this.progress); // and upload...

        this.uploadData();
      }
    }
  };

  _proto.uploadData = function uploadData() {
    var _this2 = this;

    this.setSamplingState(UPLOADING);
    var ds = this.dataSet;
    var payload = {
      "protected": {
        "ver": "v1",
        "alg": "none",
        "iat": Date.now()
      },
      "signature": "",
      "payload": {
        "device_name": this._hello.deviceId,
        "device_type": this._hello.deviceType,
        "interval_ms": this._sample.interval,
        "sensors": ds.headers.map(function (h, i) {
          return {
            "name": ds.headers[i],
            "units": ds.units[i] || "/"
          };
        }),
        "values": ds.data(true)
      }
    };
    console.log("payload", payload); // upload dataset
    // https://docs.edgeimpulse.com/reference#ingestion-api

    return fetch("https://ingestion.edgeimpulse.com" + this._sample.path, {
      method: "POST",
      headers: {
        "x-api-key": this.apiKey,
        "x-label": this._sample.label,
        "x-file-name": ds.name,
        "x-disallow-duplicates": "true",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then( /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2(resp) {
        var filename;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return resp.text();

              case 2:
                filename = _context2.sent;
                _this2._sample.generatedFilename = filename;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).finally(function () {
      _this2.send({
        "sampleFinished": true
      });

      _this2.setSamplingState(IDLE);
    });
  };

  _proto.handleError = function handleError(ev) {
    this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* ERROR */ "jb"], ev);
    this.reconnect();
  };

  _proto.startSampling = /*#__PURE__*/function () {
    var _startSampling = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee3(sample) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              this._sample = sample;
              this._sample.dataSet = _components_FieldDataSet__WEBPACK_IMPORTED_MODULE_30__[/* default */ "a"].create(this.aggregator.device.bus, this.inputRegisters, "sample", this.palette);
              this._sample.unsubscribers = [];
              this.send({
                "sample": true
              });
              this.setSamplingState(STARTING); // prepare configuration

              this._sample.aggregatorConfig = {
                samplingInterval: this._sample.interval,
                samplesInWindow: 10,
                inputs: this.inputRegisters.map(function (reg) {
                  return {
                    serviceClass: reg.service.serviceClass,
                    deviceId: reg.service.device.deviceId,
                    serviceIndex: reg.service.serviceIndex
                  };
                })
              };
              console.log("ei: input", this._sample.aggregatorConfig); // setup aggregator client

              _context3.next = 9;
              return this.aggregatorClient.setInputs(this._sample.aggregatorConfig);

            case 9:
              _context3.next = 11;
              return this.aggregatorClient.collect(this._sample.length * 1.1);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function startSampling(_x2) {
      return _startSampling.apply(this, arguments);
    }

    return startSampling;
  }();

  _proto.stopSampling = function stopSampling() {
    var sample = this._sample;

    if (sample) {
      sample.unsubscribers.forEach(function (unsub) {
        try {
          unsub();
        } catch (e) {
          console.log(e);
        }
      });
      sample.unsubscribers = [];
    }
  };

  _proto.clearSampling = function clearSampling() {
    this.stopSampling();

    if (this._sample) {
      this._sample = undefined;
      this._hello = undefined;
      this.setSamplingState(IDLE);
    }
  };

  _proto.connect = function connect() {
    if (this._ws) return; // already connected

    console.log("ei: connect");
    this.setConnectionState(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* CONNECTING */ "F"]);
    this._ws = new WebSocket("wss://remote-mgmt.edgeimpulse.com");
    this._ws.onmessage = this.handleMessage;
    this._ws.onopen = this.handleOpen;
    this._ws.onerror = this.handleError;
    this.pong = true;
    this._pingInterval = setInterval(this.handlePing, 3000);
  };

  _proto.handlePing = function handlePing() {
    if (!this.connected) return;

    if (!this.pong) {
      // the socket did not response
      console.log("missing pong");
      this.reconnect();
    } else {
      // send a new ping and wait for pong
      this.pong = false;

      this._ws.send("ping");
    }
  };

  EdgeImpulseClient.currentProjectInfo = /*#__PURE__*/function () {
    var _currentProjectInfo = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee4(apiKey) {
      var _rsj$projects, _rsj$projects$;

      var rsj, projectId, project;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (apiKey) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return", {
                valid: false
              });

            case 2:
              _context4.next = 4;
              return EdgeImpulseClient.apiFetch(apiKey, "projects");

            case 4:
              rsj = _context4.sent;

              if (rsj.success) {
                _context4.next = 7;
                break;
              }

              return _context4.abrupt("return", {
                valid: false,
                errorStatus: rsj.errorStatus
              });

            case 7:
              // the API returns the current project when using the API key
              projectId = (_rsj$projects = rsj.projects) === null || _rsj$projects === void 0 ? void 0 : (_rsj$projects$ = _rsj$projects[0]) === null || _rsj$projects$ === void 0 ? void 0 : _rsj$projects$.id;

              if (!(!(rsj !== null && rsj !== void 0 && rsj.success) || projectId === undefined)) {
                _context4.next = 10;
                break;
              }

              return _context4.abrupt("return", {
                valid: true,
                errorStatus: 402
              });

            case 10:
              _context4.next = 12;
              return EdgeImpulseClient.apiFetch(apiKey, projectId);

            case 12:
              project = _context4.sent;
              return _context4.abrupt("return", {
                valid: true,
                errorStatus: project.errorStatus,
                project: project
              });

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function currentProjectInfo(_x3) {
      return _currentProjectInfo.apply(this, arguments);
    }

    return currentProjectInfo;
  }();

  EdgeImpulseClient.apiFetch = /*#__PURE__*/function () {
    var _apiFetch = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee5(apiKey, path, body) {
      var API_ROOT, url, options, resp, payload;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              API_ROOT = "https://studio.edgeimpulse.com/v1/api/";
              url = "" + API_ROOT + path;
              options = {
                method: body ? "POST" : "GET",
                headers: {
                  "x-api-key": apiKey,
                  "Accept": "application/json"
                },
                body: body && JSON.stringify(body)
              };
              if (options.method === "POST") options.headers["Content-Type"] = "application/json";
              _context5.next = 6;
              return fetch(url, options);

            case 6:
              resp = _context5.sent;

              if (!(resp.status !== 200)) {
                _context5.next = 9;
                break;
              }

              return _context5.abrupt("return", {
                success: false,
                errorStatus: resp.status,
                error: resp.statusText
              });

            case 9:
              _context5.prev = 9;
              _context5.next = 12;
              return resp.json();

            case 12:
              payload = _context5.sent;
              return _context5.abrupt("return", payload);

            case 16:
              _context5.prev = 16;
              _context5.t0 = _context5["catch"](9);
              return _context5.abrupt("return", {
                success: false,
                errorStatus: 500,
                error: _context5.t0.message
              });

            case 19:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[9, 16]]);
    }));

    function apiFetch(_x4, _x5, _x6) {
      return _apiFetch.apply(this, arguments);
    }

    return apiFetch;
  }();

  EdgeImpulseClient.deviceInfo = /*#__PURE__*/function () {
    var _deviceInfo = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee6(apiKey, projectId, deviceId) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return EdgeImpulseClient.apiFetch(apiKey, projectId + "/device/" + deviceId);

            case 2:
              return _context6.abrupt("return", _context6.sent);

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function deviceInfo(_x7, _x8, _x9) {
      return _deviceInfo.apply(this, arguments);
    }

    return deviceInfo;
  }();

  EdgeImpulseClient.renameDevice = /*#__PURE__*/function () {
    var _renameDevice = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee7(apiKey, projectId, deviceId, name) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return EdgeImpulseClient.apiFetch(apiKey, projectId + "/devices/" + deviceId + "/rename", {
                name: name
              });

            case 2:
              return _context7.abrupt("return", _context7.sent);

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function renameDevice(_x10, _x11, _x12, _x13) {
      return _renameDevice.apply(this, arguments);
    }

    return renameDevice;
  }();

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(EdgeImpulseClient, [{
    key: "dataSet",
    get: function get() {
      var _this$_sample;

      return (_this$_sample = this._sample) === null || _this$_sample === void 0 ? void 0 : _this$_sample.dataSet;
    }
  }, {
    key: "connected",
    get: function get() {
      return this.connectionState === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* CONNECT */ "E"];
    }
  }, {
    key: "sampling",
    get: function get() {
      return this.samplingState !== IDLE;
    }
  }, {
    key: "generatedSampleName",
    get: function get() {
      var _this$_sample2;

      return (_this$_sample2 = this._sample) === null || _this$_sample2 === void 0 ? void 0 : _this$_sample2.generatedFilename;
    }
  }, {
    key: "aggregatorConfig",
    get: function get() {
      var _this$_sample3;

      return (_this$_sample3 = this._sample) === null || _this$_sample3 === void 0 ? void 0 : _this$_sample3.aggregatorConfig;
    }
  }, {
    key: "progress",
    get: function get() {
      var timestamp = this.aggregator.device.bus.timestamp;
      return this.samplingState !== IDLE && (timestamp - this._sample.startTimestamp) / this._sample.length;
    }
  }]);

  return EdgeImpulseClient;
}(_jacdac_ts_src_jdom_client__WEBPACK_IMPORTED_MODULE_25__[/* JDClient */ "a"]);

function ApiKeyManager() {
  var validateKey = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee8(key) {
      var r;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return EdgeImpulseClient.currentProjectInfo(key);

            case 2:
              r = _context8.sent;
              return _context8.abrupt("return", {
                statusCode: (r === null || r === void 0 ? void 0 : r.valid) && 200 || (r === null || r === void 0 ? void 0 : r.errorStatus) || 500
              });

            case 4:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function validateKey(_x14) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ApiKeyAccordion__WEBPACK_IMPORTED_MODULE_45__[/* default */ "a"], {
    apiName: EDGE_IMPULSE_API_KEY,
    validateKey: validateKey,
    instructions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "To get an ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "API key"), ", navigate to \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_20__["Link"], {
      to: "https://studio.edgeimpulse.com/studio/8698/keys",
      target: "_blank"
    }, "https://studio.edgeimpulse.com/studio/8698/keys"), "\xA0 and generate a new key.")
  });
}

function useEdgeImpulseProjectInfo(apiKey) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(undefined),
      info = _useState[0],
      setInfo = _useState[1];

  Object(_components_useEffectAsync__WEBPACK_IMPORTED_MODULE_28__[/* default */ "a"])( /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee9(mounted) {
      var r;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (apiKey) {
                _context9.next = 4;
                break;
              }

              if (mounted()) setInfo(undefined);
              _context9.next = 8;
              break;

            case 4:
              _context9.next = 6;
              return EdgeImpulseClient.currentProjectInfo(apiKey);

            case 6:
              r = _context9.sent;
              if (mounted()) setInfo(r === null || r === void 0 ? void 0 : r.project);

            case 8:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function (_x15) {
      return _ref3.apply(this, arguments);
    };
  }(), [apiKey]);
  return info;
}

function ProjectInfo(props) {
  var _info$project, _info$dataSummary, _info$project2, _info$project3, _info$project4;

  var info = props.info;
  var disabled = !(info !== null && info !== void 0 && info.success);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    title: (info === null || info === void 0 ? void 0 : (_info$project = info.project) === null || _info$project === void 0 ? void 0 : _info$project.name) || "...",
    subheader: (info === null || info === void 0 ? void 0 : info.dataSummary) && (info === null || info === void 0 ? void 0 : (_info$dataSummary = info.dataSummary) === null || _info$dataSummary === void 0 ? void 0 : _info$dataSummary.dataCount) + " samples"
  }), (info === null || info === void 0 ? void 0 : (_info$project2 = info.project) === null || _info$project2 === void 0 ? void 0 : _info$project2.logo) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    image: info === null || info === void 0 ? void 0 : (_info$project3 = info.project) === null || _info$project3 === void 0 ? void 0 : _info$project3.logo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    disabled: disabled,
    target: "_blank",
    href: "https://studio.edgeimpulse.com/studio/" + (info === null || info === void 0 ? void 0 : (_info$project4 = info.project) === null || _info$project4 === void 0 ? void 0 : _info$project4.id) + "/",
    variant: "contained",
    color: "primary"
  }, "Open EdgeImpulse")));
}

function ModelDownloadButton(props) {
  var apiKey = props.apiKey,
      info = props.info,
      setModel = props.setModel;
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      downloading = _useState2[0],
      setDownloading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      error = _useState3[0],
      setError = _useState3[1];

  var download = info === null || info === void 0 ? void 0 : info.downloads.find(function (download) {
    return download.type === "TensorFlow Lite (float32)";
  });

  var handleDownload = function handleDownload(url) {
    return /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee10() {
      var resp, res, bytes;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              setDownloading(true);
              setError("");
              _context10.next = 5;
              return fetch(url, {
                headers: {
                  "x-api-key": apiKey
                }
              });

            case 5:
              resp = _context10.sent;
              _context10.next = 8;
              return resp.blob();

            case 8:
              res = _context10.sent;
              _context10.next = 11;
              return Object(_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_37__[/* readBlobToUint8Array */ "K"])(res);

            case 11:
              bytes = _context10.sent;
              setModel(bytes);
              _context10.next = 19;
              break;

            case 15:
              _context10.prev = 15;
              _context10.t0 = _context10["catch"](0);
              console.log(_context10.t0);
              setError("Oops, download failed.");

            case 19:
              _context10.prev = 19;
              setDownloading(false);
              return _context10.finish(19);

            case 22:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[0, 15, 19, 22]]);
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
    mb: 1
  }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"], {
    severity: "error"
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    variant: "contained",
    disabled: !download || downloading,
    startIcon: downloading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
      size: theme.spacing(2)
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_34___default.a, null),
    onClick: handleDownload("https://studio.edgeimpulse.com" + (download === null || download === void 0 ? void 0 : download.link))
  }, "DOWNLOAD MODEL"));
}

function AggregatorCard(props) {
  var aggregator = props.aggregator,
      selected = props.selected,
      onChecked = props.onChecked;
  var device = aggregator.device;

  var handleChecked = function handleChecked() {
    return onChecked();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"], {
    device: device,
    showMedia: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
    checked: selected,
    onChange: handleChecked
  })));
}

function Acquisition(props) {
  var aggregator = props.aggregator,
      inputs = props.inputs,
      apiKey = props.apiKey,
      info = props.info;
  var device = aggregator.device;

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(undefined),
      client = _useState4[0],
      setClient = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      error = _useState5[0],
      setError = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* DISCONNECT */ "eb"]),
      connectionState = _useState6[0],
      setConnectionState = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(IDLE),
      samplingState = _useState7[0],
      setSamplingState = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(0),
      samplingProgress = _useState8[0],
      setSamplingProgress = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(undefined),
      setDeviceInfo = _useState9[1];

  var deviceId = device.deviceId;
  var deviceName = Object(_components_useDeviceName__WEBPACK_IMPORTED_MODULE_38__[/* default */ "a"])(device, false);
  var projectId = info === null || info === void 0 ? void 0 : info.id;
  var palette = Object(_components_useChartPalette__WEBPACK_IMPORTED_MODULE_40__[/* default */ "a"])();
  var connected = connectionState === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* CONNECT */ "E"];
  var sampling = samplingState !== IDLE;
  var dataSet = client === null || client === void 0 ? void 0 : client.dataSet;
  var generatedSampleName = client === null || client === void 0 ? void 0 : client.generatedSampleName;
  var aggregatorConfig = client === null || client === void 0 ? void 0 : client.aggregatorConfig;
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (!apiKey || !aggregator || !(inputs !== null && inputs !== void 0 && inputs.length)) {
      setClient(undefined);
      setError(undefined);
      return undefined;
    } else {
      console.log("ei: start client");
      var c = new EdgeImpulseClient(apiKey, aggregator, inputs, palette);
      c.connect();
      setClient(c);
      setError(undefined);
      return function () {
        return c.unmount();
      };
    }
  }, [apiKey, aggregator, inputs === null || inputs === void 0 ? void 0 : inputs.map(function (ip) {
    return ip.id;
  }).join(",")]); // subscribe to client changes

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    return client === null || client === void 0 ? void 0 : client.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* CONNECTION_STATE */ "G"], function (v) {
      return setConnectionState(v);
    });
  }, [client]); // subscribe to client changes

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    return client === null || client === void 0 ? void 0 : client.subscribe(SAMPLING_STATE, function (v) {
      return setSamplingState(v);
    });
  }, [client]); // listen to errors

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    return client === null || client === void 0 ? void 0 : client.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* ERROR */ "jb"], function (e) {
      return setError(e);
    });
  }, [client]); // progress

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    return client === null || client === void 0 ? void 0 : client.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* PROGRESS */ "zc"], function (p) {
      return setSamplingProgress(p * 100);
    });
  }, [client]); // name checking

  Object(_components_useEffectAsync__WEBPACK_IMPORTED_MODULE_28__[/* default */ "a"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee11() {
    var resp, _info, rename;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            if (!(!apiKey || projectId === undefined)) {
              _context11.next = 4;
              break;
            }

            setDeviceInfo(undefined);
            _context11.next = 20;
            break;

          case 4:
            _context11.next = 6;
            return EdgeImpulseClient.deviceInfo(apiKey, projectId, deviceId);

          case 6:
            resp = _context11.sent;
            _info = resp.success && resp.device;

            if (!(_info && _info.name !== deviceName)) {
              _context11.next = 19;
              break;
            }

            if (!(_info.name === deviceId)) {
              _context11.next = 17;
              break;
            }

            console.log("ei: sync name");
            _context11.next = 13;
            return EdgeImpulseClient.renameDevice(apiKey, projectId, deviceId, deviceName);

          case 13:
            rename = _context11.sent;

            if (rename.success) {
              _info.name = deviceName;
            }

            _context11.next = 19;
            break;

          case 17:
            // name assigned in EI, pull it in
            console.log("ei: pull name");
            device.name = _info.name;

          case 19:
            setDeviceInfo(_info);

          case 20:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  })), [apiKey, projectId, deviceName]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], null, connected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"], {
    severity: "success"
  }, "Connected to EdgeImpulse"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"], {
    severity: "error"
  }, error), sampling && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"], {
    severity: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_42__[/* default */ "a"], null, "Sampling..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ui_CircularProgressWithLabel__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"], {
    value: samplingProgress
  })), !!dataSet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Trend__WEBPACK_IMPORTED_MODULE_33__[/* default */ "a"], {
    dataSet: dataSet
  }), generatedSampleName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
    variant: "body2"
  }, "sample name: ", generatedSampleName), aggregatorConfig && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("pre", null, JSON.stringify(aggregatorConfig, null, 2)));
}

function EdgeImpulse() {
  var _useDbValue = Object(_components_useDbValue__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"])(EDGE_IMPULSE_API_KEY, ""),
      apiKey = _useDbValue.value;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_7__["useContext"])(_jacdac_Context__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"]),
      bus = _useContext.bus;

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(undefined),
      model = _useState10[0],
      setModel = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      registerIdsChecked = _useState11[0],
      setRegisterIdsChecked = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      aggregatorId = _useState12[0],
      setAggregatorId = _useState12[1];

  var gridBreakPoints = Object(_components_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"])();
  var info = useEdgeImpulseProjectInfo(apiKey);
  var aggregators = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"])(bus, function (bus) {
    return bus.services({
      serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* SRV_SENSOR_AGGREGATOR */ "de"]
    });
  });
  var currentAggregator = aggregators.find(function (srv) {
    return srv.id == aggregatorId;
  }) || aggregators[0];
  var readingRegisters = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"])(bus, function (bus) {
    return bus.devices().map(function (device) {
      var _device$services$find;

      return (_device$services$find = device.services().find(function (srv) {
        return Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_31__[/* isSensor */ "u"])(srv.specification);
      })) === null || _device$services$find === void 0 ? void 0 : _device$services$find.readingRegister;
    }).filter(function (reg) {
      return !!reg;
    });
  });
  var inputs = readingRegisters.filter(function (reg) {
    return registerIdsChecked.indexOf(reg.id) > -1;
  });

  var handleAggregatorChecked = function handleAggregatorChecked(srv) {
    return function () {
      var id = (srv === null || srv === void 0 ? void 0 : srv.id) == aggregatorId ? '' : srv === null || srv === void 0 ? void 0 : srv.id;
      setAggregatorId(id);
    };
  };

  var handleRegisterCheck = function handleRegisterCheck(reg) {
    var i = registerIdsChecked.indexOf(reg.id);
    if (i > -1) registerIdsChecked.splice(i, 1);else registerIdsChecked.push(reg.id);
    registerIdsChecked.sort();
    setRegisterIdsChecked(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(registerIdsChecked));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "Edge Impulse"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Use Jacdac to inject data and download models into ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_20__["Link"], {
    href: "https://studio.edgeimpulse.com"
  }, "https://studio.edgeimpulse.com"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_44__[/* default */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ApiKeyManager, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
    mb: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ProjectInfo, {
    info: info
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Data"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, "Select Sensors"), !(readingRegisters !== null && readingRegisters !== void 0 && readingRegisters.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"], {
    severity: "info"
  }, "No sensor found..."), !!readingRegisters.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ReadingFieldGrid__WEBPACK_IMPORTED_MODULE_39__[/* default */ "a"], {
    readingRegisters: readingRegisters,
    registerIdsChecked: registerIdsChecked,
    handleRegisterCheck: handleRegisterCheck
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, "Select Sensor Aggregator"), !(aggregators !== null && aggregators !== void 0 && aggregators.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"], {
    severity: "info"
  }, "No data aggregator found..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], {
    container: true,
    spacing: 2
  }, aggregators.map(function (aggregator) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], Object.assign({
      key: aggregator.id,
      item: true
    }, gridBreakPoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(AggregatorCard, {
      aggregator: aggregator,
      selected: currentAggregator === aggregator,
      onChecked: handleAggregatorChecked(aggregator)
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, "Acquisition status"), !currentAggregator && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"], {
    severity: "info"
  }, "No data aggregator selected..."), !(inputs !== null && inputs !== void 0 && inputs.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"], {
    severity: "info"
  }, "Select sensors to collect data from..."), currentAggregator && !!(inputs !== null && inputs !== void 0 && inputs.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Acquisition, {
    aggregator: currentAggregator,
    inputs: inputs,
    apiKey: apiKey,
    info: info === null || info === void 0 ? void 0 : info.project
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Deployment"), model && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
    mb: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"], {
    severity: "success"
  }, "Model downloaded!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ModelDownloadButton, {
    apiKey: apiKey,
    info: info,
    setModel: setModel
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ServiceList__WEBPACK_IMPORTED_MODULE_35__[/* default */ "a"], {
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_29__[/* SRV_MODEL_RUNNER */ "Pd"],
    content: function content(service) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_model_uploader__WEBPACK_IMPORTED_MODULE_36__["ModelContent"], {
        service: service
      });
    },
    actions: function actions(service) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_model_uploader__WEBPACK_IMPORTED_MODULE_36__["ModelActions"], {
        service: service,
        model: model
      });
    },
    alertMissing: "No model runner found..."
  }));
}

/***/ }),

/***/ "LvTE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("VD++");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("PsDL");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("H2TA");
/* harmony import */ var _Accordion_AccordionContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("A7vI");


/* eslint-disable jsx-a11y/aria-role */







var styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      minHeight: 8 * 6,
      transition: theme.transitions.create(['min-height', 'background-color'], transition),
      padding: theme.spacing(0, 2),
      '&:hover:not($disabled)': {
        cursor: 'pointer'
      },
      '&$expanded': {
        minHeight: 64
      },
      '&$focused': {
        backgroundColor: theme.palette.action.focus
      },
      '&$disabled': {
        opacity: theme.palette.action.disabledOpacity
      }
    },

    /* Pseudo-class applied to the root element, children wrapper element and `IconButton` component if `expanded={true}`. */
    expanded: {},

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the children wrapper element. */
    content: {
      display: 'flex',
      flexGrow: 1,
      transition: theme.transitions.create(['margin'], transition),
      margin: '12px 0',
      '&$expanded': {
        margin: '20px 0'
      }
    },

    /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
    expandIcon: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', transition),
      '&:hover': {
        // Disable the hover effect for the IconButton,
        // because a hover effect should apply to the entire Expand button and
        // not only to the IconButton.
        backgroundColor: 'transparent'
      },
      '&$expanded': {
        transform: 'rotate(180deg)'
      }
    }
  };
};
var AccordionSummary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function AccordionSummary(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      expandIcon = props.expandIcon,
      IconButtonProps = props.IconButtonProps,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onFocusVisible = props.onFocusVisible,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "expandIcon", "IconButtonProps", "onBlur", "onClick", "onFocusVisible"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      focusedState = _React$useState[0],
      setFocusedState = _React$useState[1];

  var handleFocusVisible = function handleFocusVisible(event) {
    setFocusedState(true);

    if (onFocusVisible) {
      onFocusVisible(event);
    }
  };

  var handleBlur = function handleBlur(event) {
    setFocusedState(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_Accordion_AccordionContext__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]),
      _React$useContext$dis = _React$useContext.disabled,
      disabled = _React$useContext$dis === void 0 ? false : _React$useContext$dis,
      expanded = _React$useContext.expanded,
      toggle = _React$useContext.toggle;

  var handleChange = function handleChange(event) {
    if (toggle) {
      toggle(event);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ButtonBase__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    focusRipple: false,
    disableRipple: true,
    disabled: disabled,
    component: "div",
    "aria-expanded": expanded,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, disabled && classes.disabled, expanded && classes.expanded, focusedState && classes.focused),
    onFocusVisible: handleFocusVisible,
    onBlur: handleBlur,
    onClick: handleChange,
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.content, expanded && classes.expanded)
  }, children), expandIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_IconButton__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.expandIcon, expanded && classes.expanded),
    edge: "end",
    component: "div",
    tabIndex: null,
    role: null,
    "aria-hidden": true
  }, IconButtonProps), expandIcon));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(styles, {
  name: 'MuiAccordionSummary'
})(AccordionSummary));

/***/ }),

/***/ "T5bk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("DSFK");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("25BE");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BsWD");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("PYwp");




function _toArray(arr) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "aMX1":
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
  d: "M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'CheckCircleOutline');

exports.default = _default;

/***/ }),

/***/ "p2q9":
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
  d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
}), 'GetApp');

exports.default = _default;

/***/ }),

/***/ "zPMT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingFieldGrid; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("R/WZ");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZBNC");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tRbT");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("30+C");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("50B7");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("oa/T");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("o4QW");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("UhlP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _DeviceActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("8zWW");
/* harmony import */ var _useGridBreakpoints__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("TD2k");
/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("22ne");
/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _useDeviceName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("aJrF");



 // tslint:disable-next-line: no-submodule-imports match-default-export-name



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    vmiddle: {
      verticalAlign: "middle"
    }
  });
});

function ReadingFieldGridItem(props) {
  var register = props.register,
      handleRegisterCheck = props.handleRegisterCheck,
      recording = props.recording,
      registerChecked = props.registerChecked,
      liveDataSet = props.liveDataSet;
  var gridBreakpoints = Object(_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])();
  var classes = useStyles();
  var deviceName = Object(_useDeviceName__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(register.service.device);

  var handleCheck = function handleCheck() {
    return handleRegisterCheck(register);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({
    item: true
  }, gridBreakpoints, {
    key: 'source' + register.id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    subheader: register.service.name,
    title: deviceName + "/" + register.name,
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_DeviceActions__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      device: register.service.device,
      showReset: true
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, register.fields.map(function (field) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
      key: field.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: classes.vmiddle,
      fontSize: "large",
      style: {
        color: registerChecked && (liveDataSet === null || liveDataSet === void 0 ? void 0 : liveDataSet.colorOf(field)) || "#ccc"
      }
    }), field.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    disabled: recording,
    onChange: handleCheck,
    checked: registerChecked
  }))));
}

function ReadingFieldGrid(props) {
  var readingRegisters = props.readingRegisters,
      registerIdsChecked = props.registerIdsChecked,
      recording = props.recording,
      handleRegisterCheck = props.handleRegisterCheck,
      liveDataSet = props.liveDataSet;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    container: true,
    spacing: 2
  }, readingRegisters.map(function (register) {
    var registerChecked = registerIdsChecked.indexOf(register.id) > -1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ReadingFieldGridItem, {
      key: register.id,
      register: register,
      registerChecked: registerChecked,
      recording: recording,
      handleRegisterCheck: handleRegisterCheck,
      liveDataSet: liveDataSet
    });
  }));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-edge-impulse-tsx-36c3fc6c8aa0a9d30473.js.map