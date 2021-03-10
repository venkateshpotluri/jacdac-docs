(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "BuIi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardAccelerometer; });
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
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("aVfY");








var CanvasWidget = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(5), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, "cwtP"));
});

var valueDisplay = function valueDisplay(v) {
  return Object(_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__[/* roundWithPrecision */ "L"])(v, 1);
};

function Sliders(props) {
  var host = props.host,
      register = props.register;
  var forces = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(register);
  var handleChangeX = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event, newValue) {
    var _host$reading$values = host.reading.values(),
        y = _host$reading$values[1];

    var n = newValue;
    var nz = -Math.sqrt(1 - (n * n + y * y));
    host.reading.setValues([n, y, nz]);
    register.sendGetAsync();
  }, [host, register]);
  var handleChangeY = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event, newValue) {
    var _host$reading$values2 = host.reading.values(),
        x = _host$reading$values2[0];

    var n = newValue;
    var nz = -Math.sqrt(1 - (x * x + n * n));
    host.reading.setValues([x, n, nz]);
    register.sendGetAsync();
  }, [host, register]);
  if (!(forces !== null && forces !== void 0 && forces.length)) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null);
  var x = forces[0],
      y = forces[1];
  var min = -2;
  var max = 2;
  var step = 0.1;
  var marks = [{
    value: 0
  }, {
    value: -1
  }, {
    value: 1
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    valueLabelDisplay: "auto",
    valueLabelFormat: valueDisplay,
    "aria-label": "x",
    orientation: "vertical",
    min: min,
    max: max,
    step: step,
    value: x,
    onChange: handleChangeX,
    marks: marks
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    valueLabelDisplay: "auto",
    valueLabelFormat: valueDisplay,
    "aria-label": "y",
    orientation: "vertical",
    min: min,
    max: max,
    step: step,
    value: y,
    onChange: handleChangeY,
    marks: marks
  })));
}

function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
}

function DashboardAccelerometer(props) {
  var service = props.service;
  var register = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* AccelerometerReg */ "d"].Forces);
  var host = Object(_hooks_useServiceHost__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(color),
      active = _useWidgetTheme.active;

  var rotator = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (delta, rotation) {
    var forces = register.unpackedValue;
    if (!forces) return undefined;
    var x = forces[0],
        y = forces[1],
        z = forces[2];
    var roll = Math.atan2(-y, z);
    var pitch = Math.atan(x / (y * y + z * z));
    return {
      x: lerp(rotation.x, roll, 0.1),
      y: 0,
      z: lerp(rotation.z, pitch, 0.1)
    };
  }, [register]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    container: true,
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true,
    style: {
      height: "20vh",
      width: "20vw"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CanvasWidget, {
    showAxes: true,
    color: active,
    rotator: rotator
  })))), host && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sliders, {
    host: host,
    register: register
  }));
}

/***/ })

}]);
//# sourceMappingURL=72-7f535902ceab3de7dc21.js.map