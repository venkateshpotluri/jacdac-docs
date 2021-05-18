(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[636],{

/***/ 12531:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
}), 'Info');

exports.Z = _default;

/***/ }),

/***/ 35899:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SelectServiceGrid; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _useGridBreakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7746);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54774);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31186);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83332);
/* harmony import */ var _DeviceCardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31477);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95453);







function SelectServiceGrid(props) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z),
      bus = _useContext.bus;

  var serviceClass = props.serviceClass,
      buttonText = props.buttonText,
      onSelect = props.onSelect,
      disabled = props.disabled;
  var services = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(bus, function (n) {
    return n.services({
      serviceClass: serviceClass
    });
  }, []);
  var gridBreakpoints = (0,_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)();

  var handleSelect = function handleSelect(service) {
    return function () {
      return onSelect(service);
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !!services.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    container: true,
    spacing: 2
  }, services.map(function (service) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, Object.assign({
      key: service.id,
      item: true
    }, gridBreakpoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      device: service.device,
      showAvatar: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
      variant: "contained",
      color: "primary",
      onClick: handleSelect(service),
      disabled: disabled
    }, buttonText || "Select"))));
  })), !(services !== null && services !== void 0 && services.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    severity: "info"
  }, "Not seeing your device? Try some of the following.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Check that your device is connected"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Use the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "packet console"), " to monitor packets on the bus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Check the class identifier in your annoucement packets"))));
}

/***/ }),

/***/ 98118:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ServiceTest; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83332);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99330);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12531);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95453);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79885);
/* harmony import */ var _jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25606);
/* harmony import */ var _jacdac_ts_src_jdom_flags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21258);
/* harmony import */ var _jacdac_ts_src_test_testspec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45831);
/* harmony import */ var _select_SelectServiceGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35899);
/* harmony import */ var _ServiceTestRunner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43676);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71815);


 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports











function Diagnostics(props) {
  var serviceClass = props.serviceClass;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z),
      bus = _useContext.bus;

  var hostDefinition = (0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_4__/* .serviceProviderDefinitionFromServiceClass */ .vd)(serviceClass);

  var handleStartSimulator = function handleStartSimulator() {
    return (0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_4__/* .addServiceProvider */ .Q6)(bus, hostDefinition);
  };

  if (!hostDefinition) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    severity: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, null, "Developer zone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    variant: "outlined",
    onClick: handleStartSimulator
  }, "start simulator"));
}

function ServiceTestRunnerSelect(props) {
  var serviceClass = props.serviceClass,
      onSelect = props.onSelect;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Select a device to test"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_select_SelectServiceGrid__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    serviceClass: serviceClass,
    onSelect: onSelect
  }));
}

function ServiceTest(props) {
  var serviceSpec = props.serviceSpec,
      showStartSimulator = props.showStartSimulator,
      _props$serviceTest = props.serviceTest,
      serviceTest = _props$serviceTest === void 0 ? (0,_jacdac_ts_src_test_testspec__WEBPACK_IMPORTED_MODULE_6__/* .serviceTestFromServiceClass */ .H)(serviceSpec === null || serviceSpec === void 0 ? void 0 : serviceSpec.classIdentifier) : _props$serviceTest;
  var serviceClass = serviceSpec.classIdentifier;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
      service = _useState[0],
      setService = _useState[1];

  var handleSelect = function handleSelect(service) {
    return setService(service);
  }; // clear selected service when json changes


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setService(undefined);
  }, [serviceTest]); // clear service if device disconnects

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _service$device;

    return service === null || service === void 0 ? void 0 : (_service$device = service.device) === null || _service$device === void 0 ? void 0 : _service$device.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_9__/* .DISCONNECT */ .PYu, function () {
      setService(undefined);
    });
  }, [service]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, serviceSpec.name + " tests", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "go to specification",
    to: "/services/" + serviceSpec.shortId + "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, null))), (_jacdac_ts_src_jdom_flags__WEBPACK_IMPORTED_MODULE_5__/* .default.diagnostics */ .Z.diagnostics || showStartSimulator) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Diagnostics, {
    serviceClass: serviceClass
  }), !service && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ServiceTestRunnerSelect, {
    serviceClass: serviceClass,
    onSelect: handleSelect
  }), service && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ServiceTestRunner__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    service: service,
    serviceTest: serviceTest
  }));
}

/***/ }),

/***/ 88387:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36176);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13173);
/* harmony import */ var _components_test_ServiceTest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98118);




function Page(props) {
  var spec = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromClassIdentifier */ .d5)(props.pageContext.node.classIdentifier);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_test_ServiceTest__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    serviceSpec: spec
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "See Also"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://github.com/microsoft/jacdac/tree/main/services/" + props.pageContext.node.shortId + ".md"
  }, "Edit specification source"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Read ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/reference/service-specification/"
  }, "Service Specification Language"), " reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Create a new service specification using the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/tools/service-editor/"
  }, "Service Editor")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Using services in JavaScript with the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/clients/javascript/jdom"
  }, "Jacdac Object Model (JDOM)"))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-templates-service-test-tsx-e0bfdd1fd35f6741e018.js.map