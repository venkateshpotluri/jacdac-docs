(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5444],{

/***/ 49400:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81253);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22122);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34621);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81664);
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37595);
/* harmony import */ var _Table_TableContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83604);
/* harmony import */ var _Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78847);









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({}, theme.typography.body2, {
      display: 'table-cell',
      verticalAlign: 'inherit',
      // Workaround for a rendering bug with spanned columns in Chrome 62.0.
      // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
      borderBottom: "1px solid\n    ".concat(theme.palette.type === 'light' ? (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .lighten */ .$n)((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .fade */ .U1)(theme.palette.divider, 1), 0.88) : (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .darken */ ._j)((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .fade */ .U1)(theme.palette.divider, 1), 0.68)),
      textAlign: 'left',
      padding: 16
    }),

    /* Styles applied to the root element if `variant="head"` or `context.table.head`. */
    head: {
      color: theme.palette.text.primary,
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightMedium
    },

    /* Styles applied to the root element if `variant="body"` or `context.table.body`. */
    body: {
      color: theme.palette.text.primary
    },

    /* Styles applied to the root element if `variant="footer"` or `context.table.footer`. */
    footer: {
      color: theme.palette.text.secondary,
      lineHeight: theme.typography.pxToRem(21),
      fontSize: theme.typography.pxToRem(12)
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: '6px 24px 6px 16px',
      '&:last-child': {
        paddingRight: 16
      },
      '&$paddingCheckbox': {
        width: 24,
        // prevent the checkbox column from growing
        padding: '0 12px 0 16px',
        '&:last-child': {
          paddingLeft: 12,
          paddingRight: 16
        },
        '& > *': {
          padding: 0
        }
      }
    },

    /* Styles applied to the root element if `padding="checkbox"`. */
    paddingCheckbox: {
      width: 48,
      // prevent the checkbox column from growing
      padding: '0 0 0 4px',
      '&:last-child': {
        paddingLeft: 0,
        paddingRight: 4
      }
    },

    /* Styles applied to the root element if `padding="none"`. */
    paddingNone: {
      padding: 0,
      '&:last-child': {
        padding: 0
      }
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },

    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right',
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    },

    /* Styles applied to the root element if `context.table.stickyHeader={true}`. */
    stickyHeader: {
      position: 'sticky',
      top: 0,
      left: 0,
      zIndex: 2,
      backgroundColor: theme.palette.background.default
    }
  };
};
/**
 * The component renders a `<th>` element when the parent context is a header
 * or otherwise a `<td>` element.
 */

var TableCell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function TableCell(props, ref) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'inherit' : _props$align,
      classes = props.classes,
      className = props.className,
      component = props.component,
      paddingProp = props.padding,
      scopeProp = props.scope,
      sizeProp = props.size,
      sortDirection = props.sortDirection,
      variantProp = props.variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(props, ["align", "classes", "className", "component", "padding", "scope", "size", "sortDirection", "variant"]);

  var table = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Table_TableContext__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z);
  var tablelvl2 = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z);
  var isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
  var role;
  var Component;

  if (component) {
    Component = component;
    role = isHeadCell ? 'columnheader' : 'cell';
  } else {
    Component = isHeadCell ? 'th' : 'td';
  }

  var scope = scopeProp;

  if (!scope && isHeadCell) {
    scope = 'col';
  }

  var padding = paddingProp || (table && table.padding ? table.padding : 'default');
  var size = sizeProp || (table && table.size ? table.size : 'medium');
  var variant = variantProp || tablelvl2 && tablelvl2.variant;
  var ariaSort = null;

  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(classes.root, classes[variant], className, align !== 'inherit' && classes["align".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(align))], padding !== 'default' && classes["padding".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(padding))], size !== 'medium' && classes["size".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(size))], variant === 'head' && table && table.stickyHeader && classes.stickyHeader),
    "aria-sort": ariaSort,
    role: role,
    scope: scope
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(styles, {
  name: 'MuiTableCell'
})(TableCell));

/***/ }),

/***/ 88880:
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports.Z = _default;

/***/ }),

/***/ 94500:
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
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.Z = _default;

/***/ }),

/***/ 43771:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SettingsClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41788);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _pack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91635);
/* harmony import */ var _packet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57683);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93642);
/* harmony import */ var _serviceclient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56763);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81794);










var SettingsClient = /*#__PURE__*/function (_JDServiceClient) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(SettingsClient, _JDServiceClient);

  function SettingsClient(service) {
    var _this;

    _this = _JDServiceClient.call(this, service) || this;
    service.registersUseAcks = true;
    return _this;
  }

  var _proto = SettingsClient.prototype;

  _proto.clear = /*#__PURE__*/function () {
    var _clear = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.service.sendCmdAsync(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SettingsCmd.Clear */ .vnb.Clear);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function clear() {
      return _clear.apply(this, arguments);
    }

    return clear;
  }();

  _proto.listKeys = /*#__PURE__*/function () {
    var _listKeys = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var inp, _yield$inp$readAll, output, keys;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              inp = new _pipes__WEBPACK_IMPORTED_MODULE_4__/* .InPipeReader */ .oI(this.bus);
              _context2.next = 3;
              return this.service.sendPacketAsync(inp.openCommand(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SettingsCmd.ListKeys */ .vnb.ListKeys), true);

            case 3:
              _context2.next = 5;
              return inp.readAll();

            case 5:
              _yield$inp$readAll = _context2.sent;
              output = _yield$inp$readAll.output;
              keys = output.map(function (pkt) {
                return pkt.stringData;
              });
              return _context2.abrupt("return", keys.filter(function (k) {
                return !!k;
              }));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function listKeys() {
      return _listKeys.apply(this, arguments);
    }

    return listKeys;
  }();

  _proto.list = /*#__PURE__*/function () {
    var _list = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      var inp, _yield$inp$readAll2, output;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              inp = new _pipes__WEBPACK_IMPORTED_MODULE_4__/* .InPipeReader */ .oI(this.bus);
              _context3.next = 3;
              return this.service.sendPacketAsync(inp.openCommand(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SettingsCmd.List */ .vnb.List), true);

            case 3:
              _context3.next = 5;
              return inp.readAll();

            case 5:
              _yield$inp$readAll2 = _context3.sent;
              output = _yield$inp$readAll2.output;
              return _context3.abrupt("return", output.map(function (pkt) {
                var _pkt$jdunpack = pkt.jdunpack("z b"),
                    key = _pkt$jdunpack[0],
                    value = _pkt$jdunpack[1];

                return key && {
                  key: key,
                  value: value
                };
              }).filter(function (kv) {
                return !!kv;
              }));

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function list() {
      return _list.apply(this, arguments);
    }

    return list;
  }();

  _proto.setValue = /*#__PURE__*/function () {
    var _setValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(key, value) {
      var pkt;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              key = key.trim();

              if (!(value === undefined)) {
                _context4.next = 6;
                break;
              }

              _context4.next = 4;
              return this.deleteValue(key);

            case 4:
              _context4.next = 10;
              break;

            case 6:
              pkt = _packet__WEBPACK_IMPORTED_MODULE_3__/* .default.from */ .Z.from(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SettingsCmd.Set */ .vnb.Set, (0,_pack__WEBPACK_IMPORTED_MODULE_2__/* .jdpack */ .AV)("z b", [key, value]));
              _context4.next = 9;
              return this.service.sendPacketAsync(pkt);

            case 9:
              this.emit(_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE */ .Ver);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function setValue(_x, _x2) {
      return _setValue.apply(this, arguments);
    }

    return setValue;
  }();

  _proto.setStringValue = /*#__PURE__*/function () {
    var _setStringValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(key, value) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.setValue(key, value ? (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .stringToBuffer */ .k8)(value) : undefined);

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function setStringValue(_x3, _x4) {
      return _setStringValue.apply(this, arguments);
    }

    return setStringValue;
  }();

  _proto.getValue = /*#__PURE__*/function () {
    var _getValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(key) {
      var pkt, resp, _jdunpack, rkey, value;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (key) {
                _context6.next = 2;
                break;
              }

              return _context6.abrupt("return", undefined);

            case 2:
              key = key.trim();
              pkt = _packet__WEBPACK_IMPORTED_MODULE_3__/* .default.from */ .Z.from(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SettingsCmd.Get */ .vnb.Get, (0,_pack__WEBPACK_IMPORTED_MODULE_2__/* .jdpack */ .AV)("s", [key]));
              _context6.next = 6;
              return this.service.sendCmdAwaitResponseAsync(pkt);

            case 6:
              resp = _context6.sent;
              _jdunpack = (0,_pack__WEBPACK_IMPORTED_MODULE_2__/* .jdunpack */ .TE)(resp.data, "z b"), rkey = _jdunpack[0], value = _jdunpack[1];

              if (!(key !== rkey)) {
                _context6.next = 11;
                break;
              }

              console.error("device returned different key, got \"" + rkey + "\", expected \"" + key + "\"");
              return _context6.abrupt("return", undefined);

            case 11:
              return _context6.abrupt("return", value);

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function getValue(_x5) {
      return _getValue.apply(this, arguments);
    }

    return getValue;
  }();

  _proto.getStringValue = /*#__PURE__*/function () {
    var _getStringValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(key) {
      var value;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.getValue(key);

            case 2:
              value = _context7.sent;
              return _context7.abrupt("return", value && (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .bufferToString */ .zT)(value));

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function getStringValue(_x6) {
      return _getStringValue.apply(this, arguments);
    }

    return getStringValue;
  }();

  _proto.deleteValue = /*#__PURE__*/function () {
    var _deleteValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(key) {
      var pkt;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (key) {
                _context8.next = 2;
                break;
              }

              return _context8.abrupt("return");

            case 2:
              key = key.trim();
              pkt = _packet__WEBPACK_IMPORTED_MODULE_3__/* .default.from */ .Z.from(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SettingsCmd.Delete */ .vnb.Delete, (0,_pack__WEBPACK_IMPORTED_MODULE_2__/* .jdpack */ .AV)("s", [key]));
              _context8.next = 6;
              return this.service.sendPacketAsync(pkt);

            case 6:
              this.emit(_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE */ .Ver);

            case 7:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function deleteValue(_x7) {
      return _deleteValue.apply(this, arguments);
    }

    return deleteValue;
  }();

  return SettingsClient;
}(_serviceclient__WEBPACK_IMPORTED_MODULE_5__/* .JDServiceClient */ .P);



/***/ }),

/***/ 2928:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServices; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54774);



function useServices(options) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z),
      bus = _useContext.bus;

  var services = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(bus, function (b) {
    return b.services(options);
  }, [JSON.stringify(options)]);
  return services;
}

/***/ }),

/***/ 51001:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SelectDevice; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65541);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20392);
/* harmony import */ var _ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15789);






function SelectDevice(props) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z),
      bus = _useContext.bus;

  var devices = props.devices,
      deviceId = props.deviceId,
      onChange = props.onChange;

  var handleDeviceChange = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ev) {
      var id, device;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = ev.target.value;
              onChange(id);
              device = bus.node(id);
              _context.next = 5;
              return device === null || device === void 0 ? void 0 : device.identify();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDeviceChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    helperText: "choose a device",
    value: deviceId,
    onChange: handleDeviceChange,
    disabled: !(devices !== null && devices !== void 0 && devices.length)
  }, devices === null || devices === void 0 ? void 0 : devices.map(function (dev) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      key: dev.id,
      value: dev.id
    }, dev.describe());
  }));
}

/***/ }),

/***/ 16354:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SelectEvent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65541);
/* harmony import */ var _ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15789);



function SelectEvent(props) {
  var events = props.events,
      eventId = props.eventId,
      onChange = props.onChange,
      friendlyName = props.friendlyName,
      label = props.label;

  var handleChange = function handleChange(ev) {
    onChange(ev.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    helperText: label || "choose an event",
    value: eventId,
    onChange: handleChange,
    disabled: !(events !== null && events !== void 0 && events.length)
  }, events === null || events === void 0 ? void 0 : events.map(function (ev) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      key: ev.id,
      value: ev.id
    }, friendlyName ? ev.friendlyName : ev.name);
  }));
}

/***/ }),

/***/ 82860:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": function() { return /* binding */ renderKey; },
/* harmony export */   "Z": function() { return /* binding */ KeyboardKeyInput; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70274);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73512);
/* harmony import */ var react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81751);
/* harmony import */ var react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DarkModeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91350);






var selectors = {
  a: 0x04,
  b: 0x05,
  c: 0x06,
  d: 0x07,
  e: 0x08,
  f: 0x09,
  g: 0x0a,
  h: 0x0b,
  i: 0x0c,
  j: 0x0d,
  k: 0x0e,
  l: 0x0f,
  m: 0x10,
  n: 0x11,
  o: 0x12,
  p: 0x13,
  q: 0x14,
  r: 0x15,
  s: 0x16,
  t: 0x17,
  u: 0x18,
  v: 0x19,
  w: 0x1a,
  x: 0x1b,
  y: 0x1c,
  z: 0x1d,
  "1": 0x1e,
  "2": 0x1f,
  "3": 0x20,
  "4": 0x21,
  "5": 0x22,
  "6": 0x23,
  "7": 0x24,
  "8": 0x25,
  "9": 0x26,
  "0": 0x27,
  "!": 0x1e,
  "@": 0x1f,
  "#": 0x20,
  $: 0x21,
  "%": 0x22,
  "^": 0x23,
  "&": 0x24,
  "*": 0x25,
  "(": 0x26,
  ")": 0x27,
  enter: 0x28,
  escape: 0x29,
  backspace: 0x2a,
  tab: 0x2b,
  " ": 0x2c,
  "-": 0x2d,
  _: 0x2d,
  "=": 0x2e,
  "+": 0x2e,
  "[": 0x2f,
  "{": 0x2f,
  "]": 0x30,
  "}": 0x30,
  "\\": 0x31,
  "|": 0x31,
  // non-US #
  "~": 0x32,
  ";": 0x33,
  ":": 0x33,
  "'": 0x34,
  '"': 0x34,
  // grave accent tilde
  ",": 0x36,
  "<": 0x37,
  ".": 0x37,
  ">": 0x37,
  "/": 0x38,
  "?": 0x38,
  capslock: 0x39,
  f1: 0x3a,
  f2: 0x3b,
  f3: 0x3c,
  f4: 0x3d,
  f5: 0x3e,
  f6: 0x3f,
  f7: 0x40,
  f8: 0x41,
  f9: 0x42,
  f10: 0x43,
  f11: 0x44,
  f12: 0x45,
  printscreen: 0x46,
  scrolllock: 0x47,
  pause: 0x48,
  insert: 0x49,
  home: 0x4a,
  pageup: 0x4b,
  delete: 0x4c,
  end: 0x4d,
  pagedown: 0x4e,
  arrowright: 0x4f,
  arrowleft: 0x50,
  arrowdown: 0x51,
  arrowup: 0x52,
  numlock: 0x53,
  numpaddivide: 0x54,
  numpadmultiply: 0x55,
  numpadsubstract: 0x56,
  numpadadd: 0x57,
  numpadenter: 0x58,
  numpad1: 0x59,
  numpad2: 0x5a,
  numpad3: 0x5b,
  numpad4: 0x5c,
  numpad5: 0x5d,
  numpad6: 0x5e,
  numpad7: 0x5f,
  numpad8: 0x60,
  numpad9: 0x61,
  numpad0: 0x62,
  numpaddecimal: 0x63,
  numpadequal: 0x67,
  f13: 0x68,
  f14: 0x69,
  f15: 0x6a,
  f16: 0x6b,
  f17: 0x6c,
  f18: 0x6d,
  f19: 0x6e,
  f20: 0x6f,
  f21: 0x70,
  f22: 0x71,
  f23: 0x72,
  f24: 0x73,
  execute: 0x74,
  help: 0x75,
  contextmenu: 0x76,
  select: 0x77,
  stop: 0x78,
  again: 0x79,
  undo: 0x7a,
  cut: 0x7b,
  copy: 0x7c,
  paste: 0x7d,
  find: 0x7e,
  mute: 0x7f,
  volumeup: 0x80,
  volumedown: 0x81,
  numpadcomma: 0x85
};
var reverseSelectors = Object.keys(selectors).reduce(function (r, key) {
  if (!r[selectors[key]]) r[selectors[key]] = key;
  return r;
}, {});
var modifierCodes = {
  controlleft: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftControl */ .Q2Q.LeftControl,
  altleft: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftAlt */ .Q2Q.LeftAlt,
  shiftleft: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftShift */ .Q2Q.LeftShift,
  metaleft: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.LeftGUI */ .Q2Q.LeftGUI,
  controlright: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.RightControl */ .Q2Q.RightControl,
  altright: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.RightAlt */ .Q2Q.RightAlt,
  shiftright: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.RightShift */ .Q2Q.RightShift,
  metaright: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.RightGUI */ .Q2Q.RightGUI
};
var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
    capture: {
      cursor: "pointer",
      "&:hover": {
        borderColor: theme.palette.primary.main
      },
      "&:focus": {
        borderColor: theme.palette.action.active
      }
    },
    darkKeyboard: {
      backgroundColor: "#333 !important",
      borderColor: "#777 !important",
      color: "white !important",
      "& .hg-button": {
        background: "rgba(0, 0, 0, 0.5) !important",
        color: "white"
      },
      "& .hg-button.buttonSelected": {
        background: theme.palette.primary.dark + " !important",
        color: "white !important"
      }
    },
    keyboard: {
      "& .buttonSelected": {
        background: theme.palette.primary.dark + " !important",
        color: "white !important"
      }
    }
  });
});
function renderKey(selector, modifiers) {
  var flags = ["controlleft", "shiftleft", "altleft", "metaleft", "controlright", "shiftright", "altright", "metaright"];
  var values = [];
  flags.forEach(function (flag, i) {
    if (modifiers & 1 << i) {
      values.push("{" + flag + "}");
    }
  });
  var sel = reverseSelectors[selector];
  if (sel !== undefined) values.push(sel.length > 1 ? "{" + sel + "}" : sel);
  var value = values.filter(function (v) {
    return !!v;
  }).join(" ");
  return value;
}
function KeyboardKeyInput(props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var _keyboardRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var selector = props.selector,
      modifiers = props.modifiers,
      onChange = props.onChange;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_DarkModeContext__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z),
      darkMode = _useContext.darkMode;

  var classes = useStyles();
  var theme = "hg-theme-default hg-layout-default " + (darkMode === "dark" ? classes.darkKeyboard : classes.keyboard);
  var layout = {
    default: ["{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}", "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}", "{tab} q w e r t y u i o p [ ] \\", "{capslock} a s d f g h j k l ; ' {enter}", "{shiftleft} z x c v b n m , . / {shiftright}", "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}"]
  };
  var display = {
    "{escape}": "esc ⎋",
    "{tab}": "tab ⇥",
    "{backspace}": "backspace ⌫",
    "{enter}": "enter ↵",
    "{capslock}": "caps lock ⇪",
    "{shiftleft}": "shift ⇧",
    "{shiftright}": "shift ⇧",
    "{controlleft}": "ctrl ⌃",
    "{controlright}": "ctrl ⌃",
    "{altleft}": "alt ⌥",
    "{altright}": "alt ⌥",
    "{metaleft}": "cmd ⌘",
    "{metaright}": "cmd ⌘"
  };

  var handleKeyboardKeyPress = function handleKeyboardKeyPress(code) {
    code = code.toLowerCase().replace(/[{}]/g, "");
    var newSelector = selector;
    var newModifiers = modifiers;
    var msel = selectors[code];
    var mcode = modifierCodes[code];

    if (msel) {
      if (msel === selector) newSelector = undefined;else newSelector = msel;
    } else {
      if (mcode) {
        if (newModifiers & mcode) newModifiers &= ~mcode;else newModifiers |= mcode;
      }
    }

    onChange(newSelector, newModifiers);
  }; // todo: render value to simple-keyboard selectors


  var value = renderKey(selector, modifiers);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _keyboardRef$current;

    (_keyboardRef$current = _keyboardRef.current) === null || _keyboardRef$current === void 0 ? void 0 : _keyboardRef$current.addButtonTheme(value, "buttonSelected");
    return function () {
      var _keyboardRef$current2;

      return (_keyboardRef$current2 = _keyboardRef.current) === null || _keyboardRef$current2 === void 0 ? void 0 : _keyboardRef$current2.removeButtonTheme(value, "buttonSelected");
    };
  }, [value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2___default()), {
    keyboardRef: function keyboardRef(r) {
      return _keyboardRef.current = r;
    },
    onKeyPress: handleKeyboardKeyPress,
    layout: layout,
    theme: theme,
    display: display,
    mergeDisplay: true
  });
}

/***/ }),

/***/ 15789:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SelectWithLabel; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31690);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11592);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(706);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65541);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78942);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19640);



function SelectWithLabel(props) {
  var label = props.label,
      fullWidth = props.fullWidth,
      required = props.required,
      disabled = props.disabled,
      value = props.value,
      error = props.error,
      placeholder = props.placeholder,
      onChange = props.onChange,
      onClose = props.onClose,
      children = props.children,
      helperText = props.helperText,
      type = props.type,
      none = props.none;
  var labelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var descrId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var hasDescr = !!helperText || !!error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    fullWidth: fullWidth,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    id: labelId,
    key: "label"
  }, required ? label + " *" : label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    disabled: disabled,
    label: label,
    value: value,
    error: !!error,
    fullWidth: true,
    placeholder: placeholder,
    type: type,
    labelId: labelId,
    "aria-describedby": hasDescr ? descrId : undefined,
    onChange: onChange,
    onClose: onClose
  }, none && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    key: "none",
    value: ""
  }, none), children), hasDescr && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    id: descrId
  }, error || helperText));
}

/***/ }),

/***/ 79465:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServiceClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85061);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function useServiceClient(service, factory, deps) {
  if (deps === void 0) {
    deps = [];
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
      client = _useState[0],
      setClient = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var c = service && factory(service);
    setClient(c);
    return function () {
      return c === null || c === void 0 ? void 0 : c.unmount();
    };
  }, [service].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(deps))); // don't use factory in cache!

  return client;
}

/***/ }),

/***/ 60997:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ HIDEvents; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/select/SelectEvent.tsx
var SelectEvent = __webpack_require__(16354);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__(53074);
// EXTERNAL MODULE: ./src/components/select/SelectDevice.tsx
var SelectDevice = __webpack_require__(51001);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/Table.js
var Table = __webpack_require__(49683);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableHead/TableHead.js
var TableHead = __webpack_require__(4093);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(99395);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(49400);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(86300);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(65541);
// EXTERNAL MODULE: ./src/components/ui/SelectWithLabel.tsx
var SelectWithLabel = __webpack_require__(15789);
;// CONCATENATED MODULE: ./src/components/select/SelectService.tsx





function SelectService(props) {
  var services = props.services,
      serviceId = props.serviceId,
      onChange = props.onChange,
      helperText = props.helperText,
      friendlyName = props.friendlyName;

  var handleChange = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(ev) {
      var id;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = ev.target.value;
              onChange(id);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(SelectWithLabel/* default */.Z, {
    helperText: helperText || "choose a service",
    value: serviceId,
    onChange: handleChange,
    disabled: !(services !== null && services !== void 0 && services.length)
  }, services === null || services === void 0 ? void 0 : services.map(function (srv) {
    return /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
      key: srv.id,
      value: srv.id
    }, friendlyName ? srv.friendlyName : srv.instanceName || srv.name);
  }));
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/components/ui/KeyboardKeyInput.tsx
var KeyboardKeyInput = __webpack_require__(82860);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(88880);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Delete.js
var Delete = __webpack_require__(94500);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/settingsclient.ts
var settingsclient = __webpack_require__(43771);
// EXTERNAL MODULE: ./src/components/useServiceClient.ts
var useServiceClient = __webpack_require__(79465);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__(91635);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/random.ts
var random = __webpack_require__(80303);
// EXTERNAL MODULE: ./src/components/hooks/useServices.ts
var useServices = __webpack_require__(2928);
;// CONCATENATED MODULE: ./src/pages/tools/hid-events.tsx



function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



















 // all settings keys are prefixed with this string

var PREFIX = "@ke_"; // data layout format (18bytes)

var FORMAT = "b[8] u32 u8 u8 u16 u16"; // data layout types

function HIDEventToBuffer(event, ev) {
  var deviceId = (0,utils/* fromHex */.H_)(event.service.device.deviceId);
  var service = event.service,
      code = event.code;
  var serviceClass = service.serviceClass,
      serviceIndex = service.serviceIndex;
  var selector = ev.selector,
      modifiers = ev.modifiers;
  var payload = (0,pack/* jdpack */.AV)(FORMAT, [deviceId, serviceClass, serviceIndex, code, selector, modifiers]);
  return payload;
}

function bufferToHIDEvent(key, data, bus) {
  var _device$service;

  if ((data === null || data === void 0 ? void 0 : data.length) !== 18) return undefined;

  var _jdunpack = (0,pack/* jdunpack */.TE)(data, FORMAT),
      deviceId = _jdunpack[0],
      serviceClass = _jdunpack[1],
      serviceIndex = _jdunpack[2],
      eventCode = _jdunpack[3],
      selector = _jdunpack[4],
      modifiers = _jdunpack[5];

  var deviceIds = (0,utils/* toHex */.NC)(deviceId);
  var device = bus.device(deviceIds, true);
  var event = device === null || device === void 0 ? void 0 : (_device$service = device.service(serviceIndex)) === null || _device$service === void 0 ? void 0 : _device$service.event(eventCode);
  if (!event || event.service.serviceClass !== serviceClass) return undefined;
  return {
    key: key,
    eventId: event.id,
    selector: selector,
    modifiers: modifiers
  };
}

function SelectHIDEvent(props) {
  var onAdd = props.onAdd;

  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var _useState = (0,react.useState)(""),
      deviceId = _useState[0],
      setDeviceId = _useState[1];

  var _useState2 = (0,react.useState)(""),
      serviceId = _useState2[0],
      setServiceId = _useState2[1];

  var _useState3 = (0,react.useState)(""),
      eventId = _useState3[0],
      setEventId = _useState3[1];

  var _useState4 = (0,react.useState)(0),
      selector = _useState4[0],
      setSelector = _useState4[1];

  var _useState5 = (0,react.useState)(constants/* HidKeyboardModifiers.None */.Q2Q.None),
      modifiers = _useState5[0],
      setModifiers = _useState5[1];

  var excludedServices = [constants/* SRV_CONTROL */.gm9, constants/* SRV_PROTO_TEST */.$Bn, constants/* SRV_ROLE_MANAGER */.igi, constants/* SRV_SETTINGS */.B9b, constants/* SRV_LOGGER */.w9j];

  var eventFilter = function eventFilter(ev) {
    return ev.code !== constants/* SystemEvent.StatusCodeChanged */.nSK.StatusCodeChanged;
  };

  var devices = (0,useDevices/* default */.Z)({
    ignoreSelf: true
  });
  var device = bus.node(deviceId);
  var services = (0,useChange/* default */.Z)(device, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.services({
      specification: true
    }).filter(function (srv) {
      return excludedServices.indexOf(srv.serviceClass) < 0;
    }).filter(function (srv) {
      return srv.events.some(eventFilter);
    });
  });
  var service = bus.node(serviceId);
  var events = (0,useChange/* default */.Z)(service, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.events.filter(eventFilter);
  });

  var handleDeviceChange = function handleDeviceChange(deviceId) {
    setDeviceId(deviceId);
    setServiceId("");
    setEventId("");
  };

  var handleServiceChange = function handleServiceChange(serviceId) {
    setServiceId(serviceId);
    setEventId("");
  };

  var handleEventChange = function handleEventChange(id) {
    return setEventId(id);
  };

  var handleKeyChange = function handleKeyChange(newSelector, newModifiers) {
    setSelector(newSelector);
    setModifiers(newModifiers);
  };

  var disabled = !eventId || !selector;

  var handleAdd = function handleAdd() {
    onAdd({
      eventId: eventId,
      selector: selector,
      modifiers: modifiers
    });
  };

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(SelectDevice/* default */.Z, {
    devices: devices,
    deviceId: deviceId,
    onChange: handleDeviceChange
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(SelectService, {
    services: services,
    serviceId: serviceId,
    onChange: handleServiceChange
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(SelectEvent/* default */.Z, {
    events: events,
    eventId: eventId,
    onChange: handleEventChange
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react.createElement(KeyboardKeyInput/* default */.Z, {
    selector: selector,
    modifiers: modifiers,
    onChange: handleKeyChange
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "Add binding",
    disabled: disabled,
    onClick: handleAdd
  }, /*#__PURE__*/react.createElement(Add/* default */.Z, null))));
}

function HIDEvents() {
  var _useContext2 = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext2.bus;

  var services = (0,useServices/* default */.Z)({
    serviceClass: constants/* SRV_SETTINGS */.B9b
  });

  var _useState6 = (0,react.useState)(),
      settingsService = _useState6[0],
      setSettingsService = _useState6[1];

  var _useState7 = (0,react.useState)([]),
      hidEvents = _useState7[0],
      setHIDEvents = _useState7[1];

  var settings = (0,useServiceClient/* default */.Z)(settingsService, function (srv) {
    return new settingsclient/* default */.Z(srv);
  });
  (0,useChange/* default */.Z)(settings, /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
    var hes, all, _iterator, _step, kv, key, value, he;

    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            hes = [];

            if (!settings) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return settings.list();

          case 4:
            all = _context.sent;

            for (_iterator = _createForOfIteratorHelperLoose(all.filter(function (entry) {
              var _entry$key;

              return (_entry$key = entry.key) === null || _entry$key === void 0 ? void 0 : _entry$key.startsWith(PREFIX);
            })); !(_step = _iterator()).done;) {
              kv = _step.value;
              key = kv.key, value = kv.value;
              he = bufferToHIDEvent(key, value, bus);
              if (he) hes.push(he);
            }

          case 6:
            if (JSON.stringify(hes) !== JSON.stringify(hidEvents)) setHIDEvents(hes);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));

  var handleAdd = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(hidEvent) {
      var event, payload;
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event = bus.node(hidEvent.eventId);

              if (event) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return");

            case 3:
              payload = HIDEventToBuffer(event, hidEvent);
              settings.setValue(PREFIX + (0,random/* randomDeviceId */.b_)(), payload);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleAdd(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleRemoveBinding = function handleRemoveBinding(index) {
    return function () {
      var key = hidEvents[index].key;
      if (key) settings.deleteValue(key);
    };
  };

  var handleSelectHub = function handleSelectHub(newServiceId) {
    return setSettingsService(bus.node(newServiceId));
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Map events to Keyboard combos"), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(SelectService, {
    helperText: "choose a hub",
    friendlyName: true,
    services: services,
    serviceId: settingsService === null || settingsService === void 0 ? void 0 : settingsService.id,
    onChange: handleSelectHub
  })), settings && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(SelectHIDEvent, {
    onAdd: handleAdd
  })), settings && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Table/* default */.Z, null, /*#__PURE__*/react.createElement(TableHead/* default */.Z, null, /*#__PURE__*/react.createElement(TableRow/* default */.Z, null, /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "Device"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "Service"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "Event"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "Key"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null))), /*#__PURE__*/react.createElement(TableBody/* default */.Z, null, hidEvents.map(function (_ref3, index) {
    var eventId = _ref3.eventId,
        selector = _ref3.selector,
        modifiers = _ref3.modifiers;
    var event = bus.node(eventId);
    return /*#__PURE__*/react.createElement(TableRow/* default */.Z, {
      key: index
    }, /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, event.service.device.friendlyName), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, event.service.name), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, event.name), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, /*#__PURE__*/react.createElement("code", null, (0,KeyboardKeyInput/* renderKey */.w)(selector, modifiers))), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
      title: "Remove binding",
      onClick: handleRemoveBinding(index)
    }, /*#__PURE__*/react.createElement(Delete/* default */.Z, null))));
  }))))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-hid-events-tsx-6213b579fffd2ded00d5.js.map