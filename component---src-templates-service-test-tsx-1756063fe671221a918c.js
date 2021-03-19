(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "69L9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4+mf");
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Z8Ma");
/* harmony import */ var _components_test_ServiceTest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("P1Ev");




function Page(props) {
  var spec = Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__[/* serviceSpecificationFromClassIdentifier */ "D"])(props.pageContext.node.classIdentifier);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_test_ServiceTest__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    serviceSpec: spec
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "See Also"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/microsoft/jacdac/tree/main/services/" + props.pageContext.node.shortId + ".md"
  }, "Edit specification source"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Read ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/reference/service-specification/"
  }, "Service Specification Language"), " reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Create a new service specification using the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/tools/service-editor/"
  }, "Service Editor")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Using services in JavaScript with the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/clients/web/jdom"
  }, "Jacdac Object Model (JDOM)"))));
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

// EXTERNAL MODULE: ./jacdac-ts/src/hosts/hosts.ts + 23 modules
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

/***/ })

}]);
//# sourceMappingURL=component---src-templates-service-test-tsx-1756063fe671221a918c.js.map