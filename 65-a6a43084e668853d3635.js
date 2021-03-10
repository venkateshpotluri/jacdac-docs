(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65,72],{

/***/ "3UD+":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "R6i2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardGyroscope; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dYIP");
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Lml+");
/* harmony import */ var _hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("asyI");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("tRbT");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("6Obz");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Bf0q");
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Zo1I");
/* harmony import */ var _widgets_CanvasWidget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cwtP");
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("aVfY");










function Sliders(props) {
  var host = props.host,
      register = props.register;
  var rates = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(register);

  var handleChangeX = function handleChangeX(event, newValue) {
    var _host$reading$values = host.reading.values(),
        y = _host$reading$values[1],
        z = _host$reading$values[2];

    var n = newValue;
    host.reading.setValues([n, y, z]);
    register.sendGetAsync();
  };

  var handleChangeY = function handleChangeY(event, newValue) {
    var _host$reading$values2 = host.reading.values(),
        x = _host$reading$values2[0],
        z = _host$reading$values2[2];

    var n = newValue;
    host.reading.setValues([x, n, z]);
    register.sendGetAsync();
  };

  var handleChangeZ = function handleChangeZ(event, newValue) {
    var _host$reading$values3 = host.reading.values(),
        x = _host$reading$values3[0],
        y = _host$reading$values3[1];

    var n = newValue;
    host.reading.setValues([x, y, n]);
    register.sendGetAsync();
  };

  var valueDisplay = function valueDisplay(v) {
    return Object(_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__[/* roundWithPrecision */ "L"])(v, 1) + "\xB0/s";
  };

  if (!(rates !== null && rates !== void 0 && rates.length)) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null);
  var x = rates[0],
      y = rates[1],
      z = rates[2];
  var step = 1;
  var marks = [{
    value: 0
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    valueLabelDisplay: "auto",
    valueLabelFormat: valueDisplay,
    "aria-label": "x rotation rate slider",
    orientation: "vertical",
    min: -180,
    max: 180,
    step: step,
    value: x,
    marks: marks,
    onChange: handleChangeX
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    valueLabelDisplay: "auto",
    valueLabelFormat: valueDisplay,
    "aria-label": "y rotation rate slider",
    orientation: "vertical",
    min: -180,
    max: 180,
    step: step,
    value: y,
    marks: marks,
    onChange: handleChangeY
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    valueLabelDisplay: "auto",
    valueLabelFormat: valueDisplay,
    "aria-label": "z rotation rate slider",
    orientation: "vertical",
    min: -180,
    max: 180,
    step: step,
    value: z,
    marks: marks,
    onChange: handleChangeZ
  })));
}

function DashboardGyroscope(props) {
  var service = props.service;
  var register = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* GyroscopeReg */ "rb"].RotationRates);
  var host = Object(_hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(color),
      active = _useWidgetTheme.active;

  var rotator = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (delta, rotation) {
    var rates = register.unpackedValue;
    if (!rates) return;
    var x = rates[0],
        y = rates[1],
        z = rates[2]; // degrees

    var degreesToRadians = Math.PI / 180;
    var f = delta * degreesToRadians;
    return {
      x: rotation.x + x * f,
      y: rotation.y - z * f,
      z: rotation.z - y * f
    };
  }, [register]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    container: true,
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true,
    style: {
      height: "20vh",
      width: "20vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_CanvasWidget__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: active,
    rotator: rotator
  })))), host && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sliders, {
    host: host,
    register: register
  }));
}

/***/ }),

/***/ "YuTi":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

}]);
//# sourceMappingURL=65-a6a43084e668853d3635.js.map