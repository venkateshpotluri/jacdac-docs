(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ "W5Co":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardRoleManager; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HaE+");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tRbT");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("eD//");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("UhlP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ZfHV");
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("W1g9");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("dYIP");
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("aVfY");
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("yNWl");
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("4+mf");
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("IzqI");
/* harmony import */ var _services_RoleListItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("1T35");












function DashboardRoleManager(props) {
  var service = props.service,
      expanded = props.expanded;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_jacdac_Context__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]),
      bus = _useContext.bus;

  var autoBindRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_6__[/* RoleManagerReg */ "rd"].AutoBind);
  var autoBind = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_8__[/* useRegisterBoolValue */ "a"])(autoBindRegister, props);

  var handleChecked = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(ev, checked) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return autoBindRegister.sendSetBoolAsync(checked, true);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleChecked(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var switchId = Object(react_use_id_hook__WEBPACK_IMPORTED_MODULE_7__[/* useId */ "b"])();
  var labelId = Object(react_use_id_hook__WEBPACK_IMPORTED_MODULE_7__[/* useId */ "b"])();
  var roleManager = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(bus, function (_) {
    return _.roleManager;
  });
  var roles = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(roleManager, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.roles;
  });

  var handleClick = function handleClick() {
    return roleManager === null || roleManager === void 0 ? void 0 : roleManager.startSimulators();
  };

  if (autoBind === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, expanded && !!(roles !== null && roles !== void 0 && roles.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    dense: true
  }, roles.map(function (role) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_services_RoleListItem__WEBPACK_IMPORTED_MODULE_13__[/* RoleListItem */ "a"], {
      key: role.name,
      role: role
    });
  }))), expanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    id: switchId,
    checked: autoBind,
    onChange: handleChecked,
    "aria-labelledby": labelId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
    id: labelId
  }, "auto assign roles")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_11__["Button"], {
    disabled: !roleManager,
    variant: "outlined",
    onClick: handleClick
  }, "Start simulators")));
}

/***/ })

}]);
//# sourceMappingURL=119-98a123634492b32f00a1.js.map