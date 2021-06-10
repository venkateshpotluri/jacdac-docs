(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2164],{

/***/ 88880:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports.Z = _default;

/***/ }),

/***/ 72164:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardAzureIoTHub; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49013);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(76544);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82677);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73512);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89196);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19640);
/* harmony import */ var _hooks_useEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59626);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54774);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82613);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88880);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91635);














function DashboardAzureIoTHub(props) {
  var service = props.service;
  var connectId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_6__/* .useId */ .Me)();
  var hubNameRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(service, _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_4__/* .AzureIotHubReg.HubName */ .VNh.HubName);
  var deviceIdRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(service, _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_4__/* .AzureIotHubReg.DeviceId */ .VNh.DeviceId);
  var connectionStatusRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(service, _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_4__/* .AzureIotHubReg.ConnectionStatus */ .VNh.ConnectionStatus);

  var _useRegisterUnpackedV = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__/* .useRegisterUnpackedValue */ .Pf)(hubNameRegister, props),
      hubName = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__/* .useRegisterUnpackedValue */ .Pf)(deviceIdRegister, props),
      deviceId = _useRegisterUnpackedV2[0];

  var _useRegisterUnpackedV3 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__/* .useRegisterUnpackedValue */ .Pf)(connectionStatusRegister, props),
      connectionStatus = _useRegisterUnpackedV3[0];

  var changeEvent = (0,_hooks_useEvent__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(service, _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_4__/* .AzureIotHubEvent.Change */ .ogr.Change);
  (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(changeEvent, function () {
    return hubNameRegister === null || hubNameRegister === void 0 ? void 0 : hubNameRegister.refresh();
  });
  var connected = connectionStatus === "ok";
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(service);
  var messages = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(server, function (_) {
    return (_ === null || _ === void 0 ? void 0 : _.messages) || [];
  });

  var handleConnect = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return service.sendCmdAsync(connected ? _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_4__/* .AzureIotHubCmd.Disconnect */ .r8S.Disconnect : _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_4__/* .AzureIotHubCmd.Connect */ .r8S.Connect);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleConnect() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleSendMessage = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var msg;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              msg = {
                timestamp: service.device.bus.timestamp
              };
              _context2.next = 3;
              return service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_4__/* .AzureIotHubCmd.SendMessage */ .r8S.SendMessage, (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_10__/* .jdpack */ .AV)("s", [JSON.stringify(msg)]));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSendMessage() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    component: "span",
    variant: "body1"
  }, "hub: ", hubName, ", device: ", deviceId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
    checked: connected,
    "aria-labelledby": connectId,
    onClick: handleConnect
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    id: connectId
  }, connected ? "connected" : "disconnected"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    title: "Send timestamp message",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, null),
    onClick: handleSendMessage
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("pre", null, messages === null || messages === void 0 ? void 0 : messages.map(function (m) {
    return m.body;
  }).join("\n"))));
}

/***/ })

}]);
//# sourceMappingURL=2164-fd16ff2ef47d7ffa6cec.js.map