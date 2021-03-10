(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

/***/ "w3fS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LedAnimationFrameDesigner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("30+C");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("50B7");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oa/T");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tRbT");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("r9w1");
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("l6uw");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("1waj");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("FrwU");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("15kH");
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("W1g9");


 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports match-default-export-name




function LedAnimationFrameDesigner(props) {
  var frame = props.frame,
      setFrame = props.setFrame,
      onRemove = props.onRemove,
      onClone = props.onClone;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    h: frame[0] * 360 / 0xff,
    s: frame[1] / 0xff,
    v: frame[2] / 0xff
  }),
      hsv = _useState[0],
      setHsv = _useState[1];

  var durationId = Object(react_use_id_hook__WEBPACK_IMPORTED_MODULE_10__[/* useId */ "b"])();

  var handleValue = function handleValue(i) {
    return function (ev) {
      var v = parseInt(ev.target.value);

      if (!isNaN(v)) {
        var newFrame = frame.slice(0);
        newFrame[i] = v >> 3; // 8ms units

        setFrame(newFrame);
      }
    };
  };

  var handleColorChangeComplete = function handleColorChangeComplete(c) {
    var newFrame = frame.slice(0);
    var hsv = c.hsv;
    var h = hsv.h,
        s = hsv.s,
        v = hsv.v;
    newFrame[0] = h / 360 * 0xff & 0xff;
    newFrame[1] = s * 0xff & 0xff;
    newFrame[2] = v * 0xff & 0xff;
    setFrame(newFrame);
    setHsv(hsv);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      title: "remove animation frame",
      disabled: !onRemove,
      onClick: onRemove
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      title: "clone animation frame",
      disabled: !onClone,
      onClick: onClone
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7___default.a, null)))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_9__[/* SliderPicker */ "c"], {
    triangle: "hide",
    color: hsv,
    onChangeComplete: handleColorChangeComplete
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    id: durationId,
    label: "duration",
    helperText: "ms",
    inputProps: {
      type: "number",
      min: 0
    },
    value: frame[3] << 3,
    onChange: handleValue(3)
  })))));
}

/***/ })

}]);
//# sourceMappingURL=96-91b0cbf8c710ba67b939.js.map