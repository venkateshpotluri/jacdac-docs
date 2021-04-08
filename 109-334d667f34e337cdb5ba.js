(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "r5hW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardBitRadio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("N1P3");
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BsyY");




function DashboardBitRadio(props) {
  var service = props.service;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      lastEvents = _useState[0],
      setLastEvents = _useState[1];

  var appendMessage = function appendMessage(data) {
    if (!data) return;
    var time = data[0],
        deviceSerial = data[1],
        rssi = data[2],
        payload = data.slice(3);
    var evs = lastEvents.slice(0);
    var msg = {
      time: time,
      deviceSerial: deviceSerial,
      rssi: rssi,
      payload: payload
    };
    evs.push(msg);

    while (evs.length > 10) {
      evs.shift();
    }

    setLastEvents(evs);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return service.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__[/* REPORT_RECEIVE */ "Xc"], function (pkt) {
      var values;
      var data = pkt.data,
          serviceCommand = pkt.serviceCommand;

      switch (serviceCommand) {
        case _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__[/* BitRadioCmd */ "h"].NumberReceived:
          values = Object(_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__[/* jdunpack */ "c"])(data, "u32 u32 i8 x[3] f64 s");
          break;

        case _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__[/* BitRadioCmd */ "h"].StringReceived:
          values = Object(_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__[/* jdunpack */ "c"])(data, "u32 u32 i8 x[1] s");
          break;

        case _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__[/* BitRadioCmd */ "h"].BufferReceived:
          values = Object(_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__[/* jdunpack */ "c"])(data, "u32 u32 i8 x[1] b");
          break;
      }

      appendMessage(values);
    });
  }, [service, lastEvents]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, lastEvents.map(function (lv, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i
    }, lv.payload.filter(function (v) {
      return v !== undefined && v !== "";
    }).join(", "));
  }));
}

/***/ })

}]);
//# sourceMappingURL=109-334d667f34e337cdb5ba.js.map