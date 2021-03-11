(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "8uQ5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceSpecificationSelect; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("R/WZ");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZBNC");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("r9w1");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("jjAL");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Z8Ma");



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function () {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    root: {
      minWidth: "18rem"
    }
  });
});
function ServiceSpecificationSelect(props) {
  var label = props.label,
      serviceClass = props.serviceClass,
      setServiceClass = props.setServiceClass,
      variant = props.variant,
      fullWidth = props.fullWidth,
      error = props.error;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('select-' + Math.random()),
      labelId = _useState[0];

  var classes = useStyles();
  var specs = Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_5__[/* serviceSpecifications */ "F"])().filter(function (spec) {
    return !/^_/.test(spec.shortId);
  });

  var handleChange = function handleChange(event) {
    return setServiceClass(parseInt(event.target.value));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    id: labelId,
    className: classes.root,
    label: label,
    error: !!error,
    helperText: error,
    value: serviceClass,
    select: true,
    variant: variant,
    fullWidth: fullWidth,
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    key: "none",
    value: "NaN"
  }, "No service selected"), specs.map(function (spec) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      key: spec.classIdentifier,
      value: spec.classIdentifier
    }, spec.name);
  }));
}

/***/ }),

/***/ "9Nrx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Page; });

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__("Z3vd");

// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdtest.ts
var jdtest = __webpack_require__("JK6d");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./src/components/useLocalStorage.ts
var useLocalStorage = __webpack_require__("kdz+");

// EXTERNAL MODULE: ./src/components/ui/HighlightTextField.tsx
var HighlightTextField = __webpack_require__("lhji");

// EXTERNAL MODULE: ./src/components/ServiceSpecificationSelect.tsx
var ServiceSpecificationSelect = __webpack_require__("8uQ5");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./src/components/test/ServiceTest.tsx + 1 modules
var ServiceTest = __webpack_require__("P1Ev");

// EXTERNAL MODULE: ./src/components/github.ts + 1 modules
var github = __webpack_require__("LGN/");

// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__("2K/c");

// CONCATENATED MODULE: ./src/components/tools/ServiceTestEditor.tsx













var SERVICE_TEST_STORAGE_KEY = "jacdac:servicetesteditorsource";
function ServiceTestEditor() {
  var _useContext = Object(react["useContext"])(AppContext["c" /* default */]),
      setError = _useContext.setError;

  var _useState = Object(react["useState"])(constants["td" /* SRV_BUTTON */]),
      serviceClass = _useState[0],
      setServiceClass = _useState[1];

  var _useLocalStorage = Object(useLocalStorage["a" /* default */])(SERVICE_TEST_STORAGE_KEY, ""),
      source = _useLocalStorage[0],
      setSource = _useLocalStorage[1];

  var serviceSpec = Object(react["useMemo"])(function () {
    return Object(spec["D" /* serviceSpecificationFromClassIdentifier */])(serviceClass);
  }, [serviceClass]);
  var json = Object(react["useMemo"])(function () {
    return Object(jdtest["b" /* parseSpecificationTestMarkdownToJSON */])(source, serviceSpec);
  }, [source, serviceSpec]);
  var servicePath = json && "services/tests/" + (serviceSpec.camelName || serviceSpec.shortId || "0x" + serviceSpec.classIdentifier.toString(16)).toLowerCase();

  var handleLoadFromGithub = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var ghSource;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(github["d" /* fetchText */])("microsoft/jacdac", "main", "services/tests/" + serviceSpec.shortId + ".md", "text/plain");

            case 3:
              ghSource = _context.sent;
              if (ghSource) setSource(ghSource);else setError("Test source not found");
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              setError(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function handleLoadFromGithub() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    spacing: 2,
    container: true
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2,
    direction: "row"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(ServiceSpecificationSelect["a" /* default */], {
    label: "Select a service to test",
    serviceClass: serviceClass,
    setServiceClass: setServiceClass
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    variant: "outlined",
    disabled: !serviceSpec,
    onClick: handleLoadFromGithub
  }, "Load tests from GitHub")))), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    xl: 6
  }, /*#__PURE__*/react_default.a.createElement(HighlightTextField["a" /* default */], {
    code: source,
    language: "markdown",
    onChange: setSource,
    annotations: json === null || json === void 0 ? void 0 : json.errors,
    pullRequestTitle: json && "Service test: " + serviceSpec.name,
    pullRequestPath: servicePath
  })), json && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    xl: 6
  }, /*#__PURE__*/react_default.a.createElement(ServiceTest["a" /* default */], {
    showStartSimulator: true,
    serviceSpec: serviceSpec,
    serviceTest: json
  })));
}
// CONCATENATED MODULE: ./src/pages/tools/service-test-editor.tsx



function Page() {
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h1", null, "Service Test Editor"), /*#__PURE__*/react_default.a.createElement("p", null, "Read the", " ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/reference/service-tests"
  }, "service test"), " ", "documentation."), /*#__PURE__*/react_default.a.createElement(ServiceTestEditor, null));
}

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

/***/ "P1Ev":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ServiceTest; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__("yNWl");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__("Z3vd");

// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/AlertTitle/AlertTitle.js
var AlertTitle = __webpack_require__("DObr");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Info.js
var Info = __webpack_require__("E8kk");
var Info_default = /*#__PURE__*/__webpack_require__.n(Info);

// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__("FQT7");

// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__("l6uw");

// EXTERNAL MODULE: ./jacdac-ts/src/hosts/hosts.ts + 22 modules
var hosts = __webpack_require__("y+c1");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__("c5x+");

// EXTERNAL MODULE: ./jacdac-ts/src/test/testspec.ts
var testspec = __webpack_require__("rNA1");

// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__("TD2k");

// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__("30+C");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__("o4QW");

// EXTERNAL MODULE: ./src/components/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__("5oJA");

// CONCATENATED MODULE: ./src/components/SelectService.tsx







function SelectService(props) {
  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var serviceClass = props.serviceClass,
      onSelect = props.onSelect;
  var services = Object(useChange["a" /* default */])(bus, function (n) {
    return n.services({
      serviceClass: serviceClass
    });
  }, []);
  var gridBreakpoints = Object(useGridBreakpoints["a" /* default */])();

  var handleSelect = function handleSelect(service) {
    return function () {
      return onSelect(service);
    };
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, !!services.length && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, services.map(function (service) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], Object.assign({
      key: service.id,
      item: true
    }, gridBreakpoints), /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(DeviceCardHeader["a" /* default */], {
      device: service.device
    }), /*#__PURE__*/react_default.a.createElement(CardActions["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
      variant: "contained",
      color: "primary",
      onClick: handleSelect(service)
    }, "Select"))));
  })), !(services !== null && services !== void 0 && services.length) && /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "info"
  }, "Not seeing your device? Try some of the following.", /*#__PURE__*/react_default.a.createElement("ul", null, /*#__PURE__*/react_default.a.createElement("li", null, "Check that your device is connected"), /*#__PURE__*/react_default.a.createElement("li", null, "Use the ", /*#__PURE__*/react_default.a.createElement("strong", null, "packet console"), " to monitor packets on the bus"), /*#__PURE__*/react_default.a.createElement("li", null, "Check the class identifier in your annoucement packets"))));
}
// EXTERNAL MODULE: ./src/components/test/ServiceTestRunner.tsx + 2 modules
var ServiceTestRunner = __webpack_require__("D5X2");

// CONCATENATED MODULE: ./src/components/test/ServiceTest.tsx


 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports










function Diagnostics(props) {
  var serviceClass = props.serviceClass;

  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var hostDefinition = Object(hosts["d" /* hostDefinitionFromServiceClass */])(serviceClass);

  var handleStartSimulator = function handleStartSimulator() {
    return Object(hosts["b" /* addHost */])(bus, hostDefinition.services());
  };

  if (!hostDefinition) return null;
  return /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "info"
  }, /*#__PURE__*/react_default.a.createElement(AlertTitle["a" /* default */], null, "Developer zone"), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    variant: "outlined",
    onClick: handleStartSimulator
  }, "start simulator"));
}

function ServiceTestRunnerSelect(props) {
  var serviceClass = props.serviceClass,
      onSelect = props.onSelect;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h3", null, "Select a device to test"), /*#__PURE__*/react_default.a.createElement(SelectService, {
    serviceClass: serviceClass,
    onSelect: onSelect
  }));
}

function ServiceTest(props) {
  var serviceSpec = props.serviceSpec,
      showStartSimulator = props.showStartSimulator,
      _props$serviceTest = props.serviceTest,
      serviceTest = _props$serviceTest === void 0 ? Object(testspec["a" /* serviceTestFromServiceClass */])(serviceSpec === null || serviceSpec === void 0 ? void 0 : serviceSpec.classIdentifier) : _props$serviceTest;
  var serviceClass = serviceSpec.classIdentifier;

  var _useState = Object(react["useState"])(undefined),
      service = _useState[0],
      setService = _useState[1];

  var handleSelect = function handleSelect(service) {
    return setService(service);
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h1", null, serviceSpec.name + " tests", /*#__PURE__*/react_default.a.createElement(IconButtonWithTooltip["a" /* default */], {
    title: "go to specification",
    to: "/services/" + serviceSpec.shortId + "/"
  }, /*#__PURE__*/react_default.a.createElement(Info_default.a, null))), (flags["a" /* default */].diagnostics || showStartSimulator) && /*#__PURE__*/react_default.a.createElement(Diagnostics, {
    serviceClass: serviceClass
  }), !service && /*#__PURE__*/react_default.a.createElement(ServiceTestRunnerSelect, {
    serviceClass: serviceClass,
    onSelect: handleSelect
  }), service && /*#__PURE__*/react_default.a.createElement(ServiceTestRunner["a" /* default */], {
    service: service,
    serviceTest: serviceTest
  }));
}

/***/ }),

/***/ "lhji":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightTextField; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rePB");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3Mpw");
/* harmony import */ var prism_react_renderer_themes_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nY9v");
/* harmony import */ var prism_react_renderer_themes_vsDark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("SoeO");
/* harmony import */ var _DarkModeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("geQJ");
/* harmony import */ var use_editable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("kWdF");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ZiQX");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("H2TA");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("csfp");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("tRbT");
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("OXkz");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react/jsx-key */

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name







var GithubPullRequestButton = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(14), __webpack_require__.e(87)]).then(__webpack_require__.bind(null, "ha5o"));
});
var AnnotationTooltip = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(function (theme) {
  return {
    arrow: {
      color: theme.palette.error.main
    },
    tooltip: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.common.white,
      boxShadow: theme.shadows[1],
      fontSize: theme.typography.body2.fontSize
    }
  };
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);
function HighlightTextField(props) {
  var _ref2;

  var code = props.code,
      onChange = props.onChange,
      language = props.language,
      annotations = props.annotations,
      pullRequestTitle = props.pullRequestTitle,
      pullRequestPath = props.pullRequestPath,
      pullRequestDescription = props.pullRequestDescription;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_DarkModeContext__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]),
      darkMode = _useContext.darkMode;

  var theme = darkMode === "dark" ? prism_react_renderer_themes_vsDark__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"] : prism_react_renderer_themes_github__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"];
  var editorRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(use_editable__WEBPACK_IMPORTED_MODULE_6__[/* useEditable */ "a"])(editorRef, onChange, {
    disabled: false,
    indentation: 4
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    container: true,
    spacing: 1,
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__[/* defaultProps */ "b"], {
    code: code,
    language: language,
    theme: theme
  }), function (_ref) {
    var className = _ref.className,
        style = _ref.style,
        tokens = _ref.tokens,
        getTokenProps = _ref.getTokenProps;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("pre", {
      ref: editorRef,
      className: className,
      spellCheck: false,
      style: _objectSpread(_objectSpread({}, style), {
        minHeight: "12rem",
        whiteSpace: "pre-wrap"
      })
    }, tokens.map(function (line, i) {
      var annotation = annotations === null || annotations === void 0 ? void 0 : annotations.find(function (a) {
        return a.line === i + 1;
      });
      var title = annotation === null || annotation === void 0 ? void 0 : annotation.message;
      var el = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        key: i,
        style: annotation && {
          borderBottom: "dashed 1px red"
        }
      }, line.filter(function (token) {
        return !token.empty;
      }).map(function (token, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", getTokenProps({
          token: token,
          key: key
        }));
      }), i < tokens.length - 1 ? "\n" : null);
      return title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AnnotationTooltip, {
        title: title,
        arrow: true,
        key: i
      }, el) : el;
    }));
  })), !!(annotations !== null && annotations !== void 0 && annotations.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    severity: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, annotations.map(function (a, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: i
    }, "line ", a.line, ": ", a.message);
  })))), pullRequestTitle && pullRequestPath && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GithubPullRequestButton, {
    title: pullRequestTitle,
    head: pullRequestPath,
    description: pullRequestDescription,
    files: (_ref2 = {}, _ref2[pullRequestPath + ".md"] = code, _ref2)
  }))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-service-test-editor-tsx-2961d088c6dbfd439125.js.map