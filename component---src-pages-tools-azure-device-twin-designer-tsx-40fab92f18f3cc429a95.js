(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "Ryur":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AzureDeviceTwinDesigner; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tRbT");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("r9w1");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Zo1I");
/* harmony import */ var _components_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("kdz+");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("FrwU");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Z8Ma");
/* harmony import */ var _components_AddServiceIconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("T7k7");
/* harmony import */ var _components_ServiceSpecificationSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("8uQ5");
/* harmony import */ var _jacdac_ts_src_azure_iot_dtdl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("tyJ9");
/* harmony import */ var _components_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("l6uw");
/* harmony import */ var _components_ui_Snippet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("81PJ");
/* harmony import */ var _components_ui_PaperBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("YbiL");
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("W1g9");
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("4+mf");



 // tslint:disable-next-line: no-submodule-imports match-default-export-name












function ComponentRow(props) {
  var component = props.component,
      onUpdate = props.onUpdate,
      twin = props.twin;
  var name = component.name,
      service = component.service;

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return validateTwinComponent(twin, component);
  }, [twin, component]),
      nameError = _useMemo.nameError,
      serviceError = _useMemo.serviceError;

  var nameId = Object(react_use_id_hook__WEBPACK_IMPORTED_MODULE_13__[/* useId */ "b"])();

  var handleComponentNameChange = function handleComponentNameChange(ev) {
    component.name = Object(_jacdac_ts_src_azure_iot_dtdl__WEBPACK_IMPORTED_MODULE_9__[/* escapeName */ "c"])(ev.target.value);
    onUpdate();
  };

  var handleSetService = function handleSetService(serviceClass) {
    component.service = Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_6__[/* serviceSpecificationFromClassIdentifier */ "G"])(serviceClass);
    onUpdate();
  };

  var handleComponentDelete = function handleComponentDelete() {
    twin.components.splice(twin.components.indexOf(component), 1);
    onUpdate();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, "Azure Device Twin Designer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "An ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_14__["Link"], {
    href: "https://github.com/Azure/opendigitaltwins-dtdl/"
  }, "device twin"), " is to be used in IoT solutions such as with Azure IoT Hubs, Azure IoT Plug And Play. The repository of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_14__["Link"], {
    to: "/dtmi/"
  }, "Azure IoT Plug And Play models"), " for services can be used to resolve models."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    id: nameId,
    fullWidth: true,
    error: !!nameError,
    variant: "outlined",
    label: "name",
    helperText: nameError,
    value: name,
    onChange: handleComponentNameChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ServiceSpecificationSelect__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    variant: "outlined",
    label: "service",
    serviceClass: service.classIdentifier,
    setServiceClass: handleSetService,
    error: serviceError
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    title: "Remove service",
    onClick: handleComponentDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default.a, null))))));
}

function validateTwinComponent(twin, component) {
  var serviceError = undefined;
  var nameError = undefined;
  var count = twin.components.filter(function (c) {
    return c.service.classIdentifier === component.service.classIdentifier;
  }).length;
  if (count > 1) serviceError = "Multiple same service not supported.";
  return {
    serviceError: serviceError,
    nameError: nameError
  };
}

function AzureDeviceTwinDesigner() {
  var variant = "outlined";

  var _useLocalStorage = Object(_components_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])("jacdac:digitaltwin;1", {
    displayName: "mydesigner",
    components: []
  }),
      twin = _useLocalStorage[0],
      setTwin = _useLocalStorage[1];

  var dtdl = {
    "@type": "Interface",
    "@id": "dtmi:jacdac:devices:" + Object(_jacdac_ts_src_azure_iot_dtdl__WEBPACK_IMPORTED_MODULE_9__[/* escapeName */ "c"])(twin.displayName) + ",1",
    displayName: twin.displayName,
    contents: twin.components.map(function (c) {
      return Object(_jacdac_ts_src_azure_iot_dtdl__WEBPACK_IMPORTED_MODULE_9__[/* serviceSpecificationToComponent */ "d"])(c.service, c.name);
    }),
    "@context": _jacdac_ts_src_azure_iot_dtdl__WEBPACK_IMPORTED_MODULE_9__[/* DTDL_CONTEXT */ "a"]
  };
  var dtdlSource = JSON.stringify(dtdl, null, 2);

  var update = function update() {
    setTwin(Object(_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__[/* clone */ "m"])(twin));
  };

  var handleDisplayNameChange = function handleDisplayNameChange(ev) {
    twin.displayName = ev.target.value;
    update();
  };

  var handleAddService = function handleAddService(service) {
    var names = twin.components.map(function (c) {
      return c.name;
    });
    twin.components.push({
      name: Object(_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__[/* uniqueName */ "ab"])(names, service.shortId),
      service: service
    });
    update();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    container: true,
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    required: true,
    fullWidth: true,
    label: "Display name",
    placeholder: "My device",
    value: twin.displayName || "",
    onChange: handleDisplayNameChange,
    variant: variant
  })), twin.components.map(function (c, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ComponentRow, {
      key: i,
      twin: twin,
      component: c,
      onUpdate: update
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AddServiceIconButton__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    onAdd: handleAddService
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ui_PaperBox__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ui_Snippet__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    value: dtdlSource,
    mode: "json",
    download: "model"
  }))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-azure-device-twin-designer-tsx-40fab92f18f3cc429a95.js.map