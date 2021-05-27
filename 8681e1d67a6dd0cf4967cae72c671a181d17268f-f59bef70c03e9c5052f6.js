(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4131],{

/***/ 42404:
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
  d: "M8 5v14l11-7z"
}), 'PlayArrow');

exports.Z = _default;

/***/ }),

/***/ 34257:
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
  d: "M6 6h12v12H6z"
}), 'Stop');

exports.Z = _default;

/***/ }),

/***/ 96699:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": function() { return /* binding */ VMServiceEnvironment; },
/* harmony export */   "u": function() { return /* binding */ VMEnvironment; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41788);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13173);
/* harmony import */ var _jdom_serviceclient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56763);
/* harmony import */ var _jdom_eventsource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45484);
/* harmony import */ var _jdom_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71815);
/* harmony import */ var _jdom_pack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91635);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94624);









var VMServiceEnvironment = /*#__PURE__*/function (_JDServiceClient) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(VMServiceEnvironment, _JDServiceClient);

  function VMServiceEnvironment(service) {
    var _this;

    _this = _JDServiceClient.call(this, service) || this;
    _this._registers = {};
    _this._events = {};
    return _this;
  }

  var _proto = VMServiceEnvironment.prototype;

  _proto.registerRegister = function registerRegister(regName, handler) {
    if (!this._registers[regName]) {
      var pkt = this.service.specification.packets.find(function (pkt) {
        return (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isRegister */ .x5)(pkt) && pkt.name === regName;
      });

      if (pkt) {
        var register = this.service.register(pkt.identifier);
        this._registers[regName] = register;
        this.mount(register.subscribe(_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .CHANGE */ .Ver, handler));
      }
    }
  };

  _proto.registerEvent = function registerEvent(eventName, handler) {
    if (!this._events[eventName]) {
      var pkt = this.service.specification.packets.find(function (pkt) {
        return (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isEvent */ .cO)(pkt) && pkt.name === eventName;
      });

      if (pkt) {
        var event = this.service.event(pkt.identifier);
        this._events[eventName] = event;
        this.mount(event.subscribe(_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .EVENT */ .Ks0, handler));
      }
    }
  };

  _proto.sendCommandAsync = /*#__PURE__*/function () {
    var _sendCommandAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(command, values) {
      var commandName, pkt, _this$service;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commandName = command === null || command === void 0 ? void 0 : command.name;
              pkt = this.service.specification.packets.find(function (p) {
                return (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isCommand */ .ao)(p) && p.name === commandName;
              });

              if (!pkt) {
                _context.next = 6;
                break;
              }

              _context.next = 5;
              return this.service.sendCmdAsync(pkt.identifier, (0,_jdom_pack__WEBPACK_IMPORTED_MODULE_5__/* .jdpack */ .AV)(pkt.packFormat, values), true);

            case 5:
              console.log((_this$service = this.service) === null || _this$service === void 0 ? void 0 : _this$service.specification.shortName, command.name, values);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function sendCommandAsync(_x, _x2) {
      return _sendCommandAsync.apply(this, arguments);
    }

    return sendCommandAsync;
  }() // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  _proto.writeRegisterAsync =
  /*#__PURE__*/
  function () {
    var _writeRegisterAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(regName, ev) {
      var _jdreg$specification;

      var jdreg;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              jdreg = this._registers[regName];
              _context2.next = 3;
              return jdreg === null || jdreg === void 0 ? void 0 : jdreg.sendSetPackedAsync((_jdreg$specification = jdreg.specification) === null || _jdreg$specification === void 0 ? void 0 : _jdreg$specification.packFormat, [ev], true);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function writeRegisterAsync(_x3, _x4) {
      return _writeRegisterAsync.apply(this, arguments);
    }

    return writeRegisterAsync;
  }() // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  _proto.lookup = function lookup(e) {
    var root = typeof e === "string" ? e : e.type === "Identifier" ? e.name : e.object.name;
    var fld = typeof e === "string" ? undefined : e.type === "Identifier" ? undefined : e.property.name;

    if (root in this._registers) {
      var _this$_registers$root;

      if (!fld) return (_this$_registers$root = this._registers[root].unpackedValue) === null || _this$_registers$root === void 0 ? void 0 : _this$_registers$root[0];else {
        var field = this._registers[root].fields.find(function (f) {
          return f.name === fld;
        });

        return field === null || field === void 0 ? void 0 : field.value;
      }
    } else if (root in this._events) {
      var _this$_events$root$fi;

      var _field = (_this$_events$root$fi = this._events[root].fields) === null || _this$_events$root$fi === void 0 ? void 0 : _this$_events$root$fi.find(function (f) {
        return f.name === fld;
      });

      return _field === null || _field === void 0 ? void 0 : _field.value;
    }

    return undefined;
  };

  _proto.refreshRegistersAsync = /*#__PURE__*/function () {
    var _refreshRegistersAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      var k, register;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().keys(this._registers);

            case 1:
              if ((_context3.t1 = _context3.t0()).done) {
                _context3.next = 8;
                break;
              }

              k = _context3.t1.value;
              register = this._registers[k];
              _context3.next = 6;
              return register.refresh();

            case 6:
              _context3.next = 1;
              break;

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function refreshRegistersAsync() {
      return _refreshRegistersAsync.apply(this, arguments);
    }

    return refreshRegistersAsync;
  }();

  return VMServiceEnvironment;
}(_jdom_serviceclient__WEBPACK_IMPORTED_MODULE_2__/* .JDServiceClient */ .P);
var VMEnvironment = /*#__PURE__*/function (_JDEventSource) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(VMEnvironment, _JDEventSource);

  function VMEnvironment() {
    var _this2;

    _this2 = _JDEventSource.call(this) || this;
    _this2._currentEvent = undefined;
    _this2._envs = {};
    _this2._locals = {};
    return _this2;
  }

  var _proto2 = VMEnvironment.prototype;

  _proto2.serviceChanged = function serviceChanged(role, service, added) {
    if (this._envs[role]) {
      this._envs[role].unmount();

      this._envs[role] = undefined;
    }

    if (added) {
      this._envs[role] = new VMServiceEnvironment(service);
    }
  };

  _proto2.registerRegister = function registerRegister(role, reg) {
    var _this3 = this;

    var serviceEnv = this.getService(role);

    if (serviceEnv) {
      serviceEnv.registerRegister(reg, function () {
        _this3.emit(_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .CHANGE */ .Ver);
      });
    }
  };

  _proto2.registerEvent = function registerEvent(role, ev) {
    var _this4 = this;

    var serviceEnv = this.getService(role);

    if (serviceEnv) {
      serviceEnv.registerEvent(ev, function () {
        _this4._currentEvent = role + "." + ev;

        _this4.emit(_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .CHANGE */ .Ver);
      });
    }
  };

  _proto2.getRootName = function getRootName(e) {
    if (!e) return undefined;
    if (typeof e === "string") return e;
    if (e.type === "MemberExpression") return e.object.name;
    return undefined;
  };

  _proto2.getService = function getService(e) {
    var root = this.getRootName(e);
    if (!root) return undefined;
    var s = this._envs[root];

    if (!s) {
      this.emit(_utils__WEBPACK_IMPORTED_MODULE_6__/* .JACDAC_ROLE_HAS_NO_SERVICE */ .Ex, root);
    }

    return s;
  };

  _proto2.refreshRegistersAsync = /*#__PURE__*/function () {
    var _refreshRegistersAsync2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
      var _i, _Object$values, s;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _i = 0, _Object$values = Object.values(this._envs);

            case 1:
              if (!(_i < _Object$values.length)) {
                _context4.next = 8;
                break;
              }

              s = _Object$values[_i];
              _context4.next = 5;
              return s === null || s === void 0 ? void 0 : s.refreshRegistersAsync();

            case 5:
              _i++;
              _context4.next = 1;
              break;

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function refreshRegistersAsync() {
      return _refreshRegistersAsync2.apply(this, arguments);
    }

    return refreshRegistersAsync;
  }() // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  _proto2.sendCommandAsync =
  /*#__PURE__*/
  function () {
    var _sendCommandAsync2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(e, values) {
      var serviceEnv;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              serviceEnv = this.getService(e);
              _context5.next = 3;
              return serviceEnv === null || serviceEnv === void 0 ? void 0 : serviceEnv.sendCommandAsync(e.property, values);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function sendCommandAsync(_x5, _x6) {
      return _sendCommandAsync2.apply(this, arguments);
    }

    return sendCommandAsync;
  }() // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  _proto2.lookup = function lookup(e) {
    var roleName = this.getRootName(e);

    if (roleName === "$") {
      var _me = e;

      if (_me.property.type === "Identifier") {
        var local = _me.property.name;
        return this._locals[local];
      }

      return undefined;
    }

    var serviceEnv = this.getService(e);

    if (!serviceEnv) {
      return undefined;
    }

    var me = e;

    if (serviceEnv && me.property.type === "Identifier") {
      var reg = me.property.name;
      return serviceEnv.lookup(reg);
    }

    return undefined;
  };

  _proto2.writeRegisterAsync = /*#__PURE__*/function () {
    var _writeRegisterAsync2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(e, ev) {
      var serviceEnv, me, reg;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              serviceEnv = this.getService(e);
              me = e;

              if (!(serviceEnv && me.property.type === "Identifier")) {
                _context6.next = 6;
                break;
              }

              reg = me.property.name;
              _context6.next = 6;
              return serviceEnv.writeRegisterAsync(reg, ev);

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function writeRegisterAsync(_x7, _x8) {
      return _writeRegisterAsync2.apply(this, arguments);
    }

    return writeRegisterAsync;
  }();

  _proto2.writeLocal = function writeLocal(e, ev) {
    var roleName = this.getRootName(e);
    if (!roleName || roleName !== "$") return undefined;
    var me = e;

    if (me.property.type === "Identifier") {
      var local = me.property.name;
      this._locals[local] = ev;
      return true;
    }

    return false;
  };

  _proto2.consumeEvent = function consumeEvent() {
    this._currentEvent = undefined;
  };

  _proto2.hasEvent = function hasEvent(e) {
    var roleName = this.getRootName(e);
    var serviceEnv = this.getService(e);
    if (!serviceEnv) return false;
    var me = e;

    if (me.property.type === "Identifier") {
      var event = me.property.name;
      return this._currentEvent === roleName + "." + event;
    }

    return false;
  };

  _proto2.unsubscribe = function unsubscribe() {
    for (var _i2 = 0, _Object$values2 = Object.values(this._envs); _i2 < _Object$values2.length; _i2++) {
      var vs = _Object$values2[_i2];
      vs.unmount();
    }
  };

  return VMEnvironment;
}(_jdom_eventsource__WEBPACK_IMPORTED_MODULE_3__/* .JDEventSource */ .a);

/***/ }),

/***/ 18108:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ unparse; },
/* harmony export */   "f": function() { return /* binding */ JDExprEvaluator; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94624);

function unparse(e) {
  switch (e.type) {
    case "ArrayExpression":
      {
        var ae = e;
        return "[" + ae.elements.map(unparse).join(", ") + "]";
      }

    case "CallExpression":
      {
        var caller = e;
        return unparse(caller.callee) + "(" + caller.arguments.map(unparse).join(", ") + ")";
      }

    case "MemberExpression":
      {
        var root = e;
        return root.computed ? unparse(root.object) + "[" + unparse(root.property) + "]" : unparse(root.object) + "." + unparse(root.property);
      }

    case "BinaryExpression":
    case "LogicalExpression":
      {
        var be = e;
        return "(" + unparse(be.left) + " " + be.operator + " " + unparse(be.right) + ")";
      }

    case "UnaryExpression":
      {
        var ue = e;
        return "" + ue.operator + unparse(ue.argument);
      }

    case "Identifier":
      {
        return e.name;
      }

    case "Literal":
      {
        return e.raw;
      }

    default:
      return "TODO";
  }
}
var JDExprEvaluator = /*#__PURE__*/function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function JDExprEvaluator(env, callEval) {
    this.exprStack = [];
    this.env = env;
    this.callEval = callEval;
  }

  var _proto = JDExprEvaluator.prototype;

  _proto.tos = function tos() {
    return this.exprStack[this.exprStack.length - 1];
  };

  _proto.pop = function pop() {
    return this.exprStack.pop();
  };

  _proto.eval = function _eval(e) {
    this.exprStack = [];
    this.visitExpression(e);
    return this.exprStack.pop();
  };

  _proto.visitExpression = function visitExpression(e) {
    switch (e.type) {
      case "ArrayExpression":
        {
          // nothing to do here yet (only used for event function)
          break;
        }

      case "CallExpression":
        {
          if (this.callEval) {
            var ret = this.callEval(e, this);
            this.exprStack.push(ret);
          } else this.exprStack.push(undefined);

          break;
        }

      case "BinaryExpression":
        {
          var be = e;
          this.visitExpression(be.left);
          this.visitExpression(be.right);
          var right = this.exprStack.pop();
          var left = this.exprStack.pop();

          switch (be.operator) {
            case "+":
              this.exprStack.push(left + right);
              return;

            case "-":
              this.exprStack.push(left - right);
              return;

            case "/":
              this.exprStack.push(left / right);
              return;

            case "*":
              this.exprStack.push(left * right);
              return;

            case "%":
              this.exprStack.push(left % right);
              return;

            case ">>":
              this.exprStack.push(left >> right);
              return;

            case ">>>":
              this.exprStack.push(left >>> right);
              return;

            case "<<":
              this.exprStack.push(left << right);
              return;

            case "|":
              this.exprStack.push(left | right);
              return;

            case "&":
              this.exprStack.push(left & right);
              return;

            case "^":
              this.exprStack.push(left ^ right);
              return;

            case "==":
              this.exprStack.push(left == right);
              return;

            case "!=":
              this.exprStack.push(left != right);
              return;

            case "===":
              this.exprStack.push(left === right);
              return;

            case "!==":
              this.exprStack.push(left !== right);
              return;

            case "<":
              this.exprStack.push(left < right);
              return;

            case ">":
              this.exprStack.push(left > right);
              return;

            case "<=":
              this.exprStack.push(left <= right);
              return;

            case ">=":
              this.exprStack.push(left >= right);
              return;
          }

          break;
        }

      case "UnaryExpression":
        {
          var ue = e;
          this.visitExpression(ue.argument);
          var top = this.exprStack.pop();

          switch (ue.operator) {
            case "!":
              this.exprStack.push(!top);
              return;

            case "~":
              this.exprStack.push(~top);
              return;

            case "-":
              this.exprStack.push(-top);
              return;

            case "+":
              this.exprStack.push(+top);
              return;
          }

          break;
        }

      case "LogicalExpression":
        {
          var le = e;
          this.visitExpression(le.left);

          switch (le.operator) {
            case "||":
              if (this.tos()) return;else this.visitExpression(le.right);
              return;

            case "&&":
              if (!this.tos()) return;else this.visitExpression(le.right);
              return;

            default:
          }

          break;
        }

      case "MemberExpression":
        {
          // for now, we don't support evaluation of obj or prop
          // of obj.prop
          var val = this.env(e);
          if (val === undefined) throw new _utils__WEBPACK_IMPORTED_MODULE_0__/* .JDVMError */ .D1("lookup of " + unparse(e) + " failed");
          this.exprStack.push(val);
          return;
        }

      case "Identifier":
        {
          var id = e;

          var _val = this.env(id.name);

          if (_val === undefined) throw new _utils__WEBPACK_IMPORTED_MODULE_0__/* .JDVMError */ .D1("lookup of " + id.name + " failed");
          this.exprStack.push(_val);
          return;
        }

      case "Literal":
        {
          var lit = e;
          this.exprStack.push(lit.value);
          return;
        }

      default:
    }
  };

  return JDExprEvaluator;
}();

/***/ }),

/***/ 68290:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lv": function() { return /* binding */ getServiceFromRole; },
/* harmony export */   "i_": function() { return /* binding */ checkProgram; },
/* harmony export */   "uB": function() { return /* binding */ IT4Functions; }
/* harmony export */ });
/* harmony import */ var _jdom_spec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13173);
/* harmony import */ var _jacdac_spec_spectool_jdutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30055);


var getServiceFromRole = function getServiceFromRole(info) {
  return function (role) {
    // lookup in roles first
    var shortId = info.roles.find(function (pair) {
      return pair.role === role;
    });

    if (shortId) {
      // must succeed
      return (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_0__/* .serviceSpecificationFromName */ .kB)(shortId.serviceShortName);
    } else {
      var service = (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_0__/* .serviceSpecificationFromName */ .kB)(role);
      return service;
    }
  };
};
function checkProgram(prog) {
  prog.errors = [];

  var errorFun = function errorFun(e) {
    prog.errors.push({
      file: "",
      line: undefined,
      message: e
    });
  };

  var symbolResolver = new _jacdac_spec_spectool_jdutils__WEBPACK_IMPORTED_MODULE_1__/* .SpecSymbolResolver */ .ll(undefined, getServiceFromRole(prog), errorFun);
  var checker = new _jacdac_spec_spectool_jdutils__WEBPACK_IMPORTED_MODULE_1__/* .CheckExpression */ .qg(symbolResolver, function (_) {
    return true;
  }, errorFun);
  prog.handlers.forEach(function (h) {
    h.commands.forEach(function (c) {
      checker.check(c.command, IT4Functions);
    });
  });
  return [symbolResolver.registers.map(function (s) {
    var _s$split = s.split("."),
        root = _s$split[0],
        fld = _s$split[1];

    return {
      role: root,
      register: fld
    };
  }), symbolResolver.events.map(function (e) {
    var _e$split = e.split("."),
        root = _e$split[0],
        fld = _e$split[1];

    return {
      role: root,
      event: fld
    };
  })];
}
var IT4Functions = [{
  id: "awaitRegister",
  args: ["register"],
  prompt: "wait on register {1} to change value",
  context: "command"
}, {
  id: "awaitChange",
  args: ["register", "number"],
  prompt: "wait for register {1} to change by {2}",
  context: "command"
}, {
  id: "wait",
  args: ["number"],
  prompt: "wait for {1} milliseconds",
  context: "command"
}, {
  id: "role",
  args: ["Identifier", "Identifier"],
  prompt: "role variable {1} of service type {2}",
  context: "command"
}, {
  id: "awaitEvent",
  args: ["event", ["boolean", true]],
  prompt: "wait for event {1} and then check {2} (other events ignored)",
  context: "command"
}, {
  id: "awaitCondition",
  args: ["boolean"],
  prompt: "wait for condition {1}",
  context: "command"
}, {
  id: "writeRegister",
  args: ["register", "number"],
  prompt: "write value {2:val} to {1}",
  context: "command"
}, {
  id: "writeLocal",
  args: ["register", "number"],
  prompt: "write value {2:val} to {1}",
  context: "command"
}, {
  id: "halt",
  args: [],
  prompt: "terminates the current handler",
  context: "command"
}];

/***/ }),

/***/ 94624:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PY": function() { return /* binding */ JACDAC_ROLE_SERVICE_BOUND; },
/* harmony export */   "AH": function() { return /* binding */ JACDAC_ROLE_SERVICE_UNBOUND; },
/* harmony export */   "Ex": function() { return /* binding */ JACDAC_ROLE_HAS_NO_SERVICE; },
/* harmony export */   "kX": function() { return /* binding */ JACDAC_VM_COMMAND_ATTEMPTED; },
/* harmony export */   "IB": function() { return /* binding */ JACDAC_VM_COMMAND_COMPLETED; },
/* harmony export */   "D1": function() { return /* binding */ JDVMError; }
/* harmony export */ });
/* unused harmony exports JACDAC_VM_ERROR, default */
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41788);
/* harmony import */ var _babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57869);


var JACDAC_VM_ERROR = "JacdacVMError";
var JACDAC_ROLE_SERVICE_BOUND = "JacdacVMRoleServiceBound";
var JACDAC_ROLE_SERVICE_UNBOUND = "JacdacVMRoleServiceUnbound";
var JACDAC_ROLE_HAS_NO_SERVICE = "JacdacVMRoleHasNoService";
var JACDAC_VM_COMMAND_ATTEMPTED = "JacdacVMCommandAttempted";
var JACDAC_VM_COMMAND_COMPLETED = "JacdacVMCommandCompleted";
var JDVMError = /*#__PURE__*/function (_Error) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(JDVMError, _Error);

  function JDVMError(message, jacdacName) {
    var _this;

    _this = _Error.call(this, message) || this;
    _this.jacdacName = jacdacName;
    _this.name = JACDAC_VM_ERROR;
    return _this;
  }

  return JDVMError;
}( /*#__PURE__*/(0,_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(Error));
function errorPath(e) {
  return e === null || e === void 0 ? void 0 : e.jacdacName;
}

/***/ }),

/***/ 88523:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ VMRunner; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(41788);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(5991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/eventsource.ts
var eventsource = __webpack_require__(45484);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/rolemanager.ts



var MyRoleManager = /*#__PURE__*/function (_JDEventSource) {
  (0,inheritsLoose/* default */.Z)(MyRoleManager, _JDEventSource);

  function MyRoleManager(bus, notify) {
    var _this;

    _this = _JDEventSource.call(this) || this;
    _this._roles = {};
    _this._devices = [];
    _this.bus = bus;
    _this.notify = notify;

    _this.bus.on(constants/* DEVICE_ANNOUNCE */.Hob, function (dev) {
      return _this.addServices(dev);
    });

    _this.bus.on(constants/* DEVICE_DISCONNECT */.O55, function (dev) {
      return _this.removeServices(dev);
    });

    return _this;
  }

  var _proto = MyRoleManager.prototype;

  _proto.roles = function roles() {
    return this._roles;
  };

  _proto.addServices = function addServices(dev) {
    var _this2 = this;

    dev.services().forEach(function (s) {
      var roleNeedingService = Object.keys(_this2._roles).find(function (k) {
        return !_this2._roles[k].service && _this2.nameMatch(_this2._roles[k].shortName, s.specification.shortName);
      });

      if (roleNeedingService && _this2._devices.indexOf(dev) === -1) {
        _this2._roles[roleNeedingService] = {
          shortName: s.specification.shortName,
          service: s
        };

        _this2._devices.push(dev);

        if (_this2.notify) _this2.notify(roleNeedingService, s, true);
      }
    });
  };

  _proto.removeServices = function removeServices(dev) {
    var _this3 = this;

    if (this._devices.indexOf(dev) >= 0) {
      this._devices = this._devices.filter(function (d) {
        return d !== dev;
      });
      var rolesToUnmap = Object.keys(this._roles).filter(function (k) {
        return dev.services().indexOf(_this3._roles[k].service) >= 0;
      });

      if (rolesToUnmap.length > 0) {
        rolesToUnmap.forEach(function (role) {
          var service = _this3._roles[role].service;
          _this3._roles[role] = {
            shortName: service.specification.shortName,
            service: undefined
          };
          if (_this3.notify) _this3.notify(role, service, false);
        });
      }
    }
  };

  _proto.getService = function getService(role) {
    return this._roles[role].service;
  };

  _proto.nameMatch = function nameMatch(n1, n2) {
    var cn1 = n1.slice(0).toLowerCase().replace("_", " ").trim();
    var cn2 = n2.slice(0).toLowerCase().replace("_", " ").trim();
    return cn1 === cn2;
  };

  _proto.getServicesFromName = function getServicesFromName(root) {
    var _this4 = this;

    return this.bus.services().filter(function (s) {
      return _this4.nameMatch(s.specification.shortName, root);
    });
  };

  _proto.addRoleService = function addRoleService(role, shortName) {
    if (role in this._roles && this._roles[role].service) return;
    this._roles[role] = {
      shortName: shortName,
      service: undefined
    };
    var existingServices = Object.values(this._roles).filter(function (p) {
      return p.service;
    }).map(function (p) {
      return p.service;
    });
    var ret = this.getServicesFromName(shortName).filter(function (s) {
      return existingServices.indexOf(s) === -1;
    });

    if (ret.length > 0) {
      this._roles[role].service = ret[0];

      this._devices.push(ret[0].device);

      this.notify(role, ret[0], true);
    }
  };

  return MyRoleManager;
}(eventsource/* JDEventSource */.a);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/environment.ts
var environment = __webpack_require__(96699);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/expr.ts
var vm_expr = __webpack_require__(18108);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/ir.ts
var ir = __webpack_require__(68290);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/utils.ts
var utils = __webpack_require__(94624);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/vmrunner.ts




function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










var VMStatus;

(function (VMStatus) {
  VMStatus["Ready"] = "ready";
  VMStatus["Running"] = "running";
  VMStatus["Completed"] = "completed";
  VMStatus["Stopped"] = "stopped";
})(VMStatus || (VMStatus = {}));

var IT4CommandEvaluator = /*#__PURE__*/function () {
  function IT4CommandEvaluator(env, gc) {
    this._regSaved = undefined;
    this._changeSaved = undefined;
    this._started = false;
    this.env = env;
    this.gc = gc;
  }

  var _proto = IT4CommandEvaluator.prototype;

  _proto.evalExpression = function evalExpression(e) {
    var _this = this;

    var expr = new vm_expr/* JDExprEvaluator */.f(function (e) {
      return _this.env.lookup(e);
    }, undefined);
    return expr.eval(e);
  };

  _proto.checkExpression = function checkExpression(e) {
    return this.evalExpression(e) ? true : false;
  };

  _proto.start = function start() {
    if (this.gc.command.callee.type !== "MemberExpression" && (this.inst === "awaitRegister" || this.inst === "awaitChange")) {
      // need to capture register value for awaitChange/awaitRegister
      var args = this.gc.command.arguments;
      this._regSaved = this.evalExpression(args[0]);
      if (this.inst === "awaitChange") this._changeSaved = this.evalExpression(args[1]);
      return true;
    }

    return false;
  };

  _proto.evaluate = /*#__PURE__*/function () {
    var _evaluate = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var _this2 = this;

      var neededStart, args, expr, _values, event, regValue, _expr, ev, reg;

      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this._status = VMStatus.Running;

              if (this._started) {
                _context.next = 6;
                break;
              }

              neededStart = this.start();
              this._started = true;

              if (!neededStart) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return");

            case 6:
              args = this.gc.command.arguments;

              if (!(this.gc.command.callee.type === "MemberExpression")) {
                _context.next = 14;
                break;
              }

              // interpret as a service command (role.comand)
              expr = new vm_expr/* JDExprEvaluator */.f(function (e) {
                return _this2.env.lookup(e);
              }, undefined);
              _values = this.gc.command.arguments.map(function (a) {
                return expr.eval(a);
              });
              _context.next = 12;
              return this.env.sendCommandAsync(this.gc.command.callee, _values);

            case 12:
              this._status = VMStatus.Completed;
              return _context.abrupt("return");

            case 14:
              _context.t0 = this.inst;
              _context.next = _context.t0 === "awaitEvent" ? 17 : _context.t0 === "awaitCondition" ? 20 : _context.t0 === "awaitChange" ? 22 : _context.t0 === "awaitRegister" ? 22 : _context.t0 === "writeRegister" ? 25 : _context.t0 === "writeLocal" ? 25 : _context.t0 === "halt" ? 38 : 40;
              break;

            case 17:
              event = args[0];

              if (this.env.hasEvent(event)) {
                this._status = this.checkExpression(args[1]) ? VMStatus.Completed : VMStatus.Running;
              }

              return _context.abrupt("break", 40);

            case 20:
              this._status = this.checkExpression(args[0]) ? VMStatus.Completed : VMStatus.Running;
              return _context.abrupt("break", 40);

            case 22:
              regValue = this.evalExpression(args[0]);

              if (this.inst === "awaitRegister" && regValue !== this._regSaved || this.inst === "awaitChange" && (this._changeSaved === 0 && regValue !== this._regSaved || this._changeSaved < 0 && regValue <= this._regSaved + this._changeSaved || this._changeSaved > 0 && regValue >= this._regSaved + this._changeSaved)) {
                this._status = VMStatus.Completed;
              }

              return _context.abrupt("break", 40);

            case 25:
              _expr = new vm_expr/* JDExprEvaluator */.f(function (e) {
                return _this2.env.lookup(e);
              }, undefined);
              ev = _expr.eval(args[1]);
              console.log("eval-end", (0,vm_expr/* unparse */.Z)(args[1]));
              reg = args[0];

              if (!(this.inst === "writeRegister")) {
                _context.next = 35;
                break;
              }

              _context.next = 32;
              return this.env.writeRegisterAsync(reg, ev);

            case 32:
              console.log("write-after-wait", (0,vm_expr/* unparse */.Z)(reg), ev);
              _context.next = 36;
              break;

            case 35:
              this.env.writeLocal(reg, ev);

            case 36:
              this._status = VMStatus.Completed;
              return _context.abrupt("break", 40);

            case 38:
              this._status = VMStatus.Stopped;
              return _context.abrupt("break", 40);

            case 40:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function evaluate() {
      return _evaluate.apply(this, arguments);
    }

    return evaluate;
  }();

  (0,createClass/* default */.Z)(IT4CommandEvaluator, [{
    key: "status",
    get: function get() {
      return this._status;
    }
  }, {
    key: "inst",
    get: function get() {
      var _this$gc$command$call;

      return (_this$gc$command$call = this.gc.command.callee) === null || _this$gc$command$call === void 0 ? void 0 : _this$gc$command$call.name;
    }
  }]);

  return IT4CommandEvaluator;
}();

var IT4CommandRunner = /*#__PURE__*/function () {
  function IT4CommandRunner(handlerId, env, gc) {
    this._status = VMStatus.Running;
    this.handlerId = handlerId;
    this.gc = gc;
    this._eval = new IT4CommandEvaluator(env, gc);
  }

  var _proto2 = IT4CommandRunner.prototype;

  _proto2.step = /*#__PURE__*/function () {
    var _step = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!this.isWaiting) {
                _context2.next = 11;
                break;
              }

              _context2.prev = 1;
              console.log(this.handlerId, (0,vm_expr/* unparse */.Z)(this.gc.command));
              _context2.next = 5;
              return this._eval.evaluate();

            case 5:
              this.finish(this._eval.status);
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 8]]);
    }));

    function step() {
      return _step.apply(this, arguments);
    }

    return step;
  }();

  _proto2.cancel = function cancel() {
    this.finish(VMStatus.Stopped);
  };

  _proto2.finish = function finish(s) {
    console.log(this.handlerId, s);

    if (this.isWaiting && s === VMStatus.Completed || s === VMStatus.Stopped) {
      this.status = s;
    }
  };

  (0,createClass/* default */.Z)(IT4CommandRunner, [{
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(s) {
      if (s != this._status) {
        this._status = s; // TODO: emit event
      }
    }
  }, {
    key: "isWaiting",
    get: function get() {
      return this.status === VMStatus.Running;
    }
  }]);

  return IT4CommandRunner;
}();

var IT4HandlerRunner = /*#__PURE__*/function (_JDEventSource) {
  (0,inheritsLoose/* default */.Z)(IT4HandlerRunner, _JDEventSource);

  function IT4HandlerRunner(id, env, handler) {
    var _this3;

    _this3 = _JDEventSource.call(this) || this;
    _this3.stopped = false;
    _this3.id = id;
    _this3.env = env;
    _this3.handler = handler;

    _this3.reset();

    return _this3;
  }

  var _proto3 = IT4HandlerRunner.prototype;

  _proto3.reset = function reset() {
    this._commandIndex = undefined;
    this._currentCommand = undefined;
    this.stopped = false;
  };

  _proto3.cancel = function cancel() {
    this.stopped = true;
    this.env.unsubscribe();
  };

  _proto3.post_process = function post_process() {
    if (this._currentCommand.status === VMStatus.Completed) this.emit(utils/* JACDAC_VM_COMMAND_COMPLETED */.IB, this._currentCommand.gc.blocklyId);
    if (this._currentCommand.status === VMStatus.Stopped) this.stopped = true;
  } // run-to-completion semantics
  ;

  _proto3.step =
  /*#__PURE__*/
  function () {
    var _step2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3() {
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(this.stopped || !this.handler.commands.length)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              // if (this._currentCommand?.status === VMStatus.Completed) return
              console.log(this.id, "handler-step-begin");

              if (this._commandIndex === undefined) {
                this._commandIndex = 0;
                this._currentCommand = new IT4CommandRunner(this.id, this.env, this.handler.commands[this._commandIndex]);
              }

              this.emit(utils/* JACDAC_VM_COMMAND_ATTEMPTED */.kX, this._currentCommand.gc.blocklyId);
              _context3.next = 7;
              return this._currentCommand.step();

            case 7:
              this.post_process();

            case 8:
              if (!(this._currentCommand.status === VMStatus.Completed && this._commandIndex < this.handler.commands.length - 1)) {
                _context3.next = 17;
                break;
              }

              this._commandIndex++;
              this._currentCommand = new IT4CommandRunner(this.id, this.env, this.handler.commands[this._commandIndex]);
              this.emit(utils/* JACDAC_VM_COMMAND_ATTEMPTED */.kX, this._currentCommand.gc.blocklyId);
              _context3.next = 14;
              return this._currentCommand.step();

            case 14:
              this.post_process();
              _context3.next = 8;
              break;

            case 17:
              console.log(this.id, "handler-step-end");

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function step() {
      return _step2.apply(this, arguments);
    }

    return step;
  }();

  (0,createClass/* default */.Z)(IT4HandlerRunner, [{
    key: "status",
    get: function get() {
      return this.stopped ? VMStatus.Stopped : this._currentCommand === undefined ? VMStatus.Ready : this._currentCommand.status;
    }
  }]);

  return IT4HandlerRunner;
}(eventsource/* JDEventSource */.a);

var IT4ProgramRunner = /*#__PURE__*/function (_JDEventSource2) {
  (0,inheritsLoose/* default */.Z)(IT4ProgramRunner, _JDEventSource2);

  function IT4ProgramRunner(program, bus) {
    var _this4;

    _this4 = _JDEventSource2.call(this) || this;
    _this4._waitQueue = [];
    _this4._running = false;
    _this4._in_run = false;
    _this4.program = program;

    try {
      var _checkProgram = (0,ir/* checkProgram */.i_)(program),
          regs = _checkProgram[0],
          events = _checkProgram[1];

      if (program.errors.length > 0) {
        console.debug(program.errors);
      }

      _this4._rm = new MyRoleManager(bus, function (role, service, added) {
        try {
          _this4._env.serviceChanged(role, service, added);

          if (added) {
            _this4.emit(utils/* JACDAC_ROLE_SERVICE_BOUND */.PY, service);

            _this4.emit(constants/* CHANGE */.Ver);

            _this4.program.handlers.forEach(function (h) {
              regs.forEach(function (r) {
                if (r.role === role) {
                  _this4._env.registerRegister(role, r.register);
                }
              });
              events.forEach(function (e) {
                if (e.role === role) {
                  _this4._env.registerEvent(role, e.event);
                }
              });
            });
          } else {
            _this4.emit(utils/* JACDAC_ROLE_SERVICE_UNBOUND */.AH, service);

            _this4.emit(constants/* CHANGE */.Ver);
          }
        } catch (e) {
          console.debug(e);

          _this4.emit(constants/* ERROR */.pnR, e);
        }
      });
      _this4._env = new environment/* VMEnvironment */.u();

      _this4._env.subscribe(constants/* CHANGE */.Ver, function () {
        try {
          _this4.run();
        } catch (e) {
          console.debug(e);

          _this4.emit(constants/* ERROR */.pnR, e);
        }
      });

      _this4._handlers = program.handlers.map(function (h, index) {
        return new IT4HandlerRunner(index, _this4._env, h);
      });
      _this4._waitQueue = _this4._handlers.slice(0);
    } catch (e) {
      console.debug(e);

      _this4.emit(constants/* ERROR */.pnR, e);
    }

    return _this4;
  }

  var _proto4 = IT4ProgramRunner.prototype;

  _proto4.cancel = function cancel() {
    if (!this._running) return; // nothing to cancel

    this._running = false;
    this._waitQueue = this._handlers.slice(0);

    this._waitQueue.forEach(function (h) {
      return h.reset();
    });

    this.emit(constants/* CHANGE */.Ver);
  };

  _proto4.start = function start() {
    var _this5 = this;

    if (this._running) return; // already running

    try {
      this.program.roles.forEach(function (role) {
        _this5._rm.addRoleService(role.role, role.serviceShortName);
      });
      this._running = true;
      this._in_run = false;
      this.run();
    } catch (e) {
      console.debug(e);
      this.emit(constants/* ERROR */.pnR, e);
    }
  };

  _proto4.run = /*#__PURE__*/function () {
    var _run = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee4() {
      var nextTime, _iterator, _step3, h;

      return regenerator_default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (this._running) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return");

            case 2:
              if (!this._in_run) {
                _context4.next = 4;
                break;
              }

              return _context4.abrupt("return");

            case 4:
              this._in_run = true;
              console.log("run-BEGIN");
              _context4.prev = 6;
              _context4.next = 9;
              return this._env.refreshRegistersAsync();

            case 9:
              if (!(this._waitQueue.length > 0)) {
                _context4.next = 23;
                break;
              }

              nextTime = [];
              _iterator = _createForOfIteratorHelperLoose(this._waitQueue);

            case 12:
              if ((_step3 = _iterator()).done) {
                _context4.next = 19;
                break;
              }

              h = _step3.value;
              _context4.next = 16;
              return h.step();

            case 16:
              if (h.status !== VMStatus.Stopped) {
                if (h.status === VMStatus.Completed) h.reset();
                nextTime.push(h);
              }

            case 17:
              _context4.next = 12;
              break;

            case 19:
              this._waitQueue = nextTime;

              this._env.consumeEvent();

              _context4.next = 24;
              break;

            case 23:
              this.emit(constants/* CHANGE */.Ver);

            case 24:
              _context4.next = 30;
              break;

            case 26:
              _context4.prev = 26;
              _context4.t0 = _context4["catch"](6);
              console.debug(_context4.t0);
              this.emit(constants/* ERROR */.pnR, _context4.t0);

            case 30:
              this._in_run = false;
              console.log("run-END");

            case 32:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[6, 26]]);
    }));

    function run() {
      return _run.apply(this, arguments);
    }

    return run;
  }();

  (0,createClass/* default */.Z)(IT4ProgramRunner, [{
    key: "status",
    get: function get() {
      var ret = this._running === false ? VMStatus.Stopped : this._waitQueue.length > 0 ? VMStatus.Running : VMStatus.Completed;
      return ret;
    }
  }, {
    key: "roles",
    get: function get() {
      return this._rm.roles();
    }
  }]);

  return IT4ProgramRunner;
}(eventsource/* JDEventSource */.a);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayArrow.js
var PlayArrow = __webpack_require__(42404);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Stop.js
var Stop = __webpack_require__(34257);
;// CONCATENATED MODULE: ./src/components/vm/VMRunner.tsx

 // tslint:disable-next-line: match-default-export-name no-submodule-imports






function VMRunner(props) {
  var program = props.program,
      autoStartDefault = props.autoStart;

  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var _useState = (0,react.useState)(),
      testRunner = _useState[0],
      setTestRunner = _useState[1];

  var _useState2 = (0,react.useState)(!!autoStartDefault),
      autoStart = _useState2[0],
      setAutoStart = _useState2[1];

  (0,react.useEffect)(function () {
    var runner = program && new IT4ProgramRunner(program, bus);
    setTestRunner(runner);
    if (runner && autoStart) runner.start();
    return function () {
      return runner === null || runner === void 0 ? void 0 : runner.cancel();
    };
  }, [program, autoStart]);
  var disabled = !testRunner;
  var status = (0,useChange/* default */.Z)(testRunner, function (t) {
    return t === null || t === void 0 ? void 0 : t.status;
  });

  var handleRun = function handleRun() {
    setAutoStart(autoStartDefault);

    try {
      testRunner.start();
    } catch (e) {
      console.debug(e);
    }
  };

  var handleCancel = function handleCancel() {
    setAutoStart(false);
    testRunner.cancel();
  };

  var running = status === VMStatus.Running;
  return /*#__PURE__*/react.createElement(Button/* default */.Z, {
    disabled: disabled,
    variant: "contained",
    onClick: running ? handleCancel : handleRun,
    color: running ? "default" : "primary",
    startIcon: running ? /*#__PURE__*/react.createElement(Stop/* default */.Z, null) : /*#__PURE__*/react.createElement(PlayArrow/* default */.Z, null)
  }, running ? "Stop" : "Run");
}

/***/ })

}]);
//# sourceMappingURL=8681e1d67a6dd0cf4967cae72c671a181d17268f-f59bef70c03e9c5052f6.js.map