(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "9pTp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectAlert; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("R/WZ");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZBNC");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hlFM");
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FQT7");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Z8Ma");
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("yNWl");
/* harmony import */ var _jacdac_ConnectButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nyfv");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Bf0q");
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("IzqI");
// tslint:disable-next-line: no-submodule-imports
 // tslint:disable-next-line: no-submodule-imports








var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    button: {
      marginLeft: theme.spacing(2)
    }
  });
});

function NoSsrConnectAlert(props) {
  var classes = useStyles();
  var serviceClass = props.serviceClass;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_jacdac_Context__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]),
      bus = _useContext.bus;

  var transports = bus.transports;
  var devices = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(bus, function (b) {
    return b.devices({
      serviceClass: serviceClass
    });
  });
  var spec = Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_5__[/* serviceSpecificationFromClassIdentifier */ "D"])(serviceClass);
  var disconnected = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(bus, function (t) {
    return t.disconnected;
  });
  if (!(devices !== null && devices !== void 0 && devices.length) && disconnected) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    displayPrint: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    severity: "info",
    closeable: true
  }, !spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "Did you connect your device?"), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "Did you connect a ", spec.name, " device?"), transports.map(function (transport) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_jacdac_ConnectButton__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      key: transport.type,
      transport: transport,
      className: classes.button,
      full: true,
      transparent: true
    });
  })));
  return null;
}

function ConnectAlert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(NoSsrConnectAlert, props));
}

/***/ }),

/***/ "QI7e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tRbT");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("30+C");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oa/T");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ofer");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("o4QW");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Z3vd");
/* harmony import */ var _components_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("TD2k");
/* harmony import */ var _components_hooks_useDevices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("UJQR");
/* harmony import */ var _components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("5oJA");
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("IzqI");
/* harmony import */ var _components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("9pTp");
/* harmony import */ var _components_test_ServiceTestRunner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("D5X2");

 // eslint-disable-next-line @typescript-eslint/no-unused-vars








function DeviceItem(props) {
  var device = props.device,
      serviceUnderTest = props.serviceUnderTest,
      onServiceUnderTestSelected = props.onServiceUnderTestSelected;
  var services = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(device, function (d) {
    return d.services({
      specification: true
    });
  });
  var gridBreakpoints = Object(_components_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])();

  var handleServiceSelected = function handleServiceSelected(service) {
    return function () {
      return onServiceUnderTestSelected(service);
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], Object.assign({
    item: true
  }, gridBreakpoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    device: device,
    showAvatar: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    variant: "caption"
  }, "Select a service to test.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    container: true,
    spacing: 1
  }, services === null || services === void 0 ? void 0 : services.map(function (service) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      item: true,
      key: service.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      variant: serviceUnderTest === service ? "contained" : "outlined",
      color: serviceUnderTest === service ? "primary" : undefined,
      onClick: handleServiceSelected(service)
    }, service.name));
  })))));
}

function Page() {
  var devices = Object(_components_hooks_useDevices__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])({
    announced: true
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      serviceUnderTest = _useState[0],
      setServiceUnderTest = _useState[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Service Tests"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Connect devices to test its services."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    container: true,
    spacing: 2
  }, devices === null || devices === void 0 ? void 0 : devices.map(function (device) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DeviceItem, {
      key: device.id,
      device: device,
      serviceUnderTest: serviceUnderTest,
      onServiceUnderTestSelected: setServiceUnderTest
    });
  })), serviceUnderTest && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_test_ServiceTestRunner__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    service: serviceUnderTest
  })));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-service-test-tsx-6be99c504b1f571c2cd5.js.map