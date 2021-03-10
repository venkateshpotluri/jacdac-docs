(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "NHNr":
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

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__("hlFM");

// EXTERNAL MODULE: ./src/components/DeviceSpecificationList.tsx + 3 modules
var DeviceSpecificationList = __webpack_require__("XXVM");

// EXTERNAL MODULE: ./src/components/ServiceSpecificationSelect.tsx
var ServiceSpecificationSelect = __webpack_require__("8uQ5");

// CONCATENATED MODULE: ./src/components/FilteredDeviceSpecificationList.tsx




function FilteredDeviceSpecificationList(props) {
  var others = Object.assign({}, props);

  var _useState = Object(react["useState"])(NaN),
      serviceClass = _useState[0],
      setServiceClass = _useState[1];

  var handleServiceChanged = function handleServiceChanged(value) {
    return setServiceClass(value);
  };

  var requiredServiceClasses = !isNaN(serviceClass) && [serviceClass];
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    mb: 1
  }, /*#__PURE__*/react_default.a.createElement(ServiceSpecificationSelect["a" /* default */], {
    label: "Filter by Service",
    serviceClass: serviceClass,
    setServiceClass: handleServiceChanged
  })), /*#__PURE__*/react_default.a.createElement(DeviceSpecificationList["a" /* default */], Object.assign({}, others, {
    requiredServiceClasses: requiredServiceClasses
  })));
}
// CONCATENATED MODULE: ./src/pages/devices.tsx



function Page() {
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(FilteredDeviceSpecificationList, {
    count: 20,
    shuffle: true
  }), /*#__PURE__*/react_default.a.createElement("p", null, "Known devices are specified in the ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/reference/device-definition/"
  }, "device catalog repository"), ". New devices can be submitted with the ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/tools/device-registration/"
  }, "device registration"), "."));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-devices-tsx-c6a7605d0c0637c2cbcd.js.map