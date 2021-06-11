(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3],{

/***/ 96699:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pO": function() { return /* binding */ GLOBAL_CHANGE; },
/* harmony export */   "S8": function() { return /* binding */ VMExceptionCode; },
/* harmony export */   "nt": function() { return /* binding */ VMException; },
/* harmony export */   "Kx": function() { return /* binding */ VMServiceEnvironment; },
/* harmony export */   "uH": function() { return /* binding */ VMEnvironment; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85413);
/* harmony import */ var _babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83001);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13173);
/* harmony import */ var _jdom_serviceclient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56763);
/* harmony import */ var _jdom_eventsource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45484);
/* harmony import */ var _jdom_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71815);
/* harmony import */ var _jdom_pack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91635);









var GLOBAL_CHANGE = "vmEnvglobalChange";
var VMExceptionCode;

(function (VMExceptionCode) {
  VMExceptionCode["RoleNoService"] = "vmEnvRoleNoService";
  VMExceptionCode["TypeMismatch"] = "vmEnvTypeMismatch";
  VMExceptionCode["InternalError"] = "vmInternalError";
})(VMExceptionCode || (VMExceptionCode = {}));

var VMException = /*#__PURE__*/function (_Error) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(VMException, _Error);

  function VMException(code, data) {
    var _this;

    _this = _Error.call(this) || this;
    _this.code = code;
    _this.data = data;
    return _this;
  }

  return VMException;
}( /*#__PURE__*/(0,_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(Error));
var VMServiceEnvironment = /*#__PURE__*/function (_JDServiceClient) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(VMServiceEnvironment, _JDServiceClient);

  function VMServiceEnvironment(service) {
    var _this2;

    _this2 = _JDServiceClient.call(this, service) || this;
    _this2._registers = {};
    _this2._events = {};
    return _this2;
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
      var commandName, pkt;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commandName = command === null || command === void 0 ? void 0 : command.name;
              pkt = this.service.specification.packets.find(function (p) {
                return (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isCommand */ .ao)(p) && p.name === commandName;
              });

              if (!pkt) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return this.service.sendCmdAsync(pkt.identifier, (0,_jdom_pack__WEBPACK_IMPORTED_MODULE_5__/* .jdpack */ .AV)(pkt.packFormat, values), true);

            case 5:
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
  }();

  _proto.writeRegisterAsync = /*#__PURE__*/function () {
    var _writeRegisterAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(regName, ev) {
      var register;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              register = this._registers[regName];

              if (!(register.code === _jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SystemReg.Value */ .ZJq.Value)) {
                _context2.next = 4;
                break;
              }

              _context2.next = 4;
              return this.setEnabled();

            case 4:
              _context2.next = 6;
              return this.writeRegAsync(this._registers[regName], ev);

            case 6:
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
  }();

  _proto.writeRegAsync = /*#__PURE__*/function () {
    var _writeRegAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(jdreg, ev) {
      var _jdreg$specification;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return jdreg === null || jdreg === void 0 ? void 0 : jdreg.sendSetPackedAsync((_jdreg$specification = jdreg.specification) === null || _jdreg$specification === void 0 ? void 0 : _jdreg$specification.packFormat, [ev], true);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function writeRegAsync(_x5, _x6) {
      return _writeRegAsync.apply(this, arguments);
    }

    return writeRegAsync;
  }();

  _proto.setEnabled = /*#__PURE__*/function () {
    var _setEnabled = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
      var pkt, jdreg;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              pkt = this.service.specification.packets.find(_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isIntensity */ .tC);

              if (!(pkt && pkt.fields[0].type === "bool")) {
                _context4.next = 5;
                break;
              }

              jdreg = this.service.register(_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SystemReg.Intensity */ .ZJq.Intensity);
              _context4.next = 5;
              return this.writeRegAsync(jdreg, true);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function setEnabled() {
      return _setEnabled.apply(this, arguments);
    }

    return setEnabled;
  }();

  _proto.lookupRegisterAsync = /*#__PURE__*/function () {
    var _lookupRegisterAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(e) {
      var root, fld, _register$unpackedVal, register, field, _this$_events$root$fi, _field;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              root = typeof e === "string" ? e : e.type === "Identifier" ? e.name : e.object.name;
              fld = typeof e === "string" ? undefined : e.type === "Identifier" ? undefined : e.property.name;

              if (!(root in this._registers)) {
                _context5.next = 14;
                break;
              }

              register = this._registers[root];
              _context5.next = 6;
              return register.refresh();

            case 6:
              if (fld) {
                _context5.next = 10;
                break;
              }

              return _context5.abrupt("return", (_register$unpackedVal = register.unpackedValue) === null || _register$unpackedVal === void 0 ? void 0 : _register$unpackedVal[0]);

            case 10:
              field = register.fields.find(function (f) {
                return f.name === fld;
              });
              return _context5.abrupt("return", field === null || field === void 0 ? void 0 : field.value);

            case 12:
              _context5.next = 17;
              break;

            case 14:
              if (!(root in this._events)) {
                _context5.next = 17;
                break;
              }

              _field = (_this$_events$root$fi = this._events[root].fields) === null || _this$_events$root$fi === void 0 ? void 0 : _this$_events$root$fi.find(function (f) {
                return f.name === fld;
              });
              return _context5.abrupt("return", _field === null || _field === void 0 ? void 0 : _field.value);

            case 17:
              return _context5.abrupt("return", undefined);

            case 18:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function lookupRegisterAsync(_x7) {
      return _lookupRegisterAsync.apply(this, arguments);
    }

    return lookupRegisterAsync;
  }();

  return VMServiceEnvironment;
}(_jdom_serviceclient__WEBPACK_IMPORTED_MODULE_2__/* .JDServiceClient */ .P);
var VMEnvironment = /*#__PURE__*/function (_JDEventSource) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(VMEnvironment, _JDEventSource);

  function VMEnvironment(registers, events) {
    var _this3;

    _this3 = _JDEventSource.call(this) || this;
    _this3._currentEvent = undefined;
    _this3._envs = {};
    _this3._globals = {};
    _this3.registers = registers;
    _this3.events = events;
    return _this3;
  }

  var _proto2 = VMEnvironment.prototype;

  _proto2.globals = function globals() {
    return this._globals;
  };

  _proto2.serviceChanged = function serviceChanged(role, service) {
    var _this4 = this;

    if (this._envs[role]) {
      this._envs[role].unmount();

      this._envs[role] = undefined;
    }

    if (service) {
      this._envs[role] = new VMServiceEnvironment(service);
      this.registers.forEach(function (r) {
        if (r.role === role) {
          _this4.registerRegister(role, r.register);
        }
      });
      this.events.forEach(function (e) {
        if (e.role === role) {
          _this4.registerEvent(role, e.event);
        }
      });
    }
  };

  _proto2.registerRegister = function registerRegister(role, reg) {
    var _this5 = this;

    try {
      var serviceEnv = this.getService(role);
      serviceEnv.registerRegister(reg, function () {
        console.log("HERE");

        _this5.emit(_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .CHANGE */ .Ver);
      });
    } catch (e) {// nothing
    }
  };

  _proto2.registerEvent = function registerEvent(role, ev) {
    var _this6 = this;

    try {
      var serviceEnv = this.getService(role);
      serviceEnv.registerEvent(ev, function () {
        _this6._currentEvent = role + "." + ev;

        _this6.emit(_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .CHANGE */ .Ver);
      });
    } catch (e) {// nothing
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
      throw new VMException(VMExceptionCode.RoleNoService, root);
    }

    return s;
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  _proto2.sendCommandAsync =
  /*#__PURE__*/
  function () {
    var _sendCommandAsync2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(e, values) {
      var serviceEnv;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              serviceEnv = this.getService(e); // TODO: need to raise alert if service undefined

              _context6.next = 3;
              return serviceEnv === null || serviceEnv === void 0 ? void 0 : serviceEnv.sendCommandAsync(e.property, values);

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function sendCommandAsync(_x8, _x9) {
      return _sendCommandAsync2.apply(this, arguments);
    }

    return sendCommandAsync;
  }();

  _proto2.lookupAsync = /*#__PURE__*/function () {
    var _lookupAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(e) {
      var roleName, _me, _this$_globals$local, local, serviceEnv, me;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              roleName = this.getRootName(e);

              if (!(roleName === "$")) {
                _context7.next = 7;
                break;
              }

              _me = e;

              if (!(_me.property.type === "Identifier")) {
                _context7.next = 6;
                break;
              }

              local = _me.property.name;
              return _context7.abrupt("return", (_this$_globals$local = this._globals[local]) === null || _this$_globals$local === void 0 ? void 0 : _this$_globals$local.value);

            case 6:
              return _context7.abrupt("return", undefined);

            case 7:
              serviceEnv = this.getService(e);
              me = e;
              _context7.next = 11;
              return serviceEnv.lookupRegisterAsync(me.property);

            case 11:
              return _context7.abrupt("return", _context7.sent);

            case 12:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function lookupAsync(_x10) {
      return _lookupAsync.apply(this, arguments);
    }

    return lookupAsync;
  }();

  _proto2.writeRegisterAsync = /*#__PURE__*/function () {
    var _writeRegisterAsync2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(e, ev) {
      var serviceEnv, me, reg;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              serviceEnv = this.getService(e);
              me = e;

              if (!(me.property.type === "Identifier")) {
                _context8.next = 6;
                break;
              }

              reg = me.property.name;
              _context8.next = 6;
              return serviceEnv.writeRegisterAsync(reg, ev);

            case 6:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function writeRegisterAsync(_x11, _x12) {
      return _writeRegisterAsync2.apply(this, arguments);
    }

    return writeRegisterAsync;
  }();

  _proto2.writeGlobal = function writeGlobal(e, value) {
    var roleName = this.getRootName(e);
    if (!roleName || roleName !== "$") return undefined;
    var me = e;

    if (me.property.type === "Identifier") {
      var local = me.property.name;

      if (this._globals[local]) {
        var firstType = this._globals[local].type;

        if (firstType !== typeof value) {
          throw new VMException(VMExceptionCode.TypeMismatch, "variable " + local + " has first type " + firstType + "; trying to assign " + value.toString());
        }

        if (value !== this._globals[local].value) {
          this._globals[local].value = value;
          this.emit(GLOBAL_CHANGE);
        }
      } else {
        var _firstType = typeof value;

        if (_firstType !== "string" && _firstType !== "boolean" && _firstType !== "number") {
          throw new VMException(VMExceptionCode.TypeMismatch, "Value of type " + _firstType + " not supported");
        }

        this._globals[local] = {
          type: _firstType,
          value: value
        };
        this.emit(GLOBAL_CHANGE);
      }

      return true;
    }

    return false;
  };

  _proto2.consumeEvent = function consumeEvent() {
    this._currentEvent = undefined;
  };

  _proto2.hasEvent = function hasEvent(e) {
    var roleName = this.getRootName(e);
    var me = e;

    if (me.property.type === "Identifier") {
      var event = me.property.name;
      return this._currentEvent === roleName + "." + event;
    }

    return false;
  };

  _proto2.unsubscribe = function unsubscribe() {
    for (var _i = 0, _Object$values = Object.values(this._envs); _i < _Object$values.length; _i++) {
      var vs = _Object$values[_i];
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
/* harmony export */   "W": function() { return /* binding */ VMExprEvaluator; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
var VMExprEvaluator = /*#__PURE__*/function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function VMExprEvaluator(env, callEval) {
    this.exprStack = [];
    this.env = env;
    this.callEval = callEval;
  }

  var _proto = VMExprEvaluator.prototype;

  _proto.tos = function tos() {
    return this.exprStack[this.exprStack.length - 1];
  };

  _proto.pop = function pop() {
    return this.exprStack.pop();
  };

  _proto.evalAsync = /*#__PURE__*/function () {
    var _evalAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.exprStack = [];
              _context.next = 3;
              return this.visitExpressionAsync(e);

            case 3:
              return _context.abrupt("return", this.exprStack.pop());

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function evalAsync(_x) {
      return _evalAsync.apply(this, arguments);
    }

    return evalAsync;
  }();

  _proto.visitExpressionAsync = /*#__PURE__*/function () {
    var _visitExpressionAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(e) {
      var ret, be, right, left, ue, top, le, val, id, _val, lit;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = e.type;
              _context2.next = _context2.t0 === "ArrayExpression" ? 3 : _context2.t0 === "CallExpression" ? 4 : _context2.t0 === "BinaryExpression" ? 6 : _context2.t0 === "UnaryExpression" ? 55 : _context2.t0 === "LogicalExpression" ? 73 : _context2.t0 === "MemberExpression" ? 94 : _context2.t0 === "Identifier" ? 99 : _context2.t0 === "Literal" ? 105 : 108;
              break;

            case 3:
              return _context2.abrupt("break", 108);

            case 4:
              if (this.callEval) {
                ret = this.callEval(e, this);
                this.exprStack.push(ret);
              } else this.exprStack.push(undefined);

              return _context2.abrupt("break", 108);

            case 6:
              be = e;
              _context2.next = 9;
              return this.visitExpressionAsync(be.left);

            case 9:
              _context2.next = 11;
              return this.visitExpressionAsync(be.right);

            case 11:
              right = this.exprStack.pop();
              left = this.exprStack.pop();
              _context2.t1 = be.operator;
              _context2.next = _context2.t1 === "+" ? 16 : _context2.t1 === "-" ? 18 : _context2.t1 === "/" ? 20 : _context2.t1 === "*" ? 22 : _context2.t1 === "%" ? 24 : _context2.t1 === ">>" ? 26 : _context2.t1 === ">>>" ? 28 : _context2.t1 === "<<" ? 30 : _context2.t1 === "|" ? 32 : _context2.t1 === "&" ? 34 : _context2.t1 === "^" ? 36 : _context2.t1 === "==" ? 38 : _context2.t1 === "!=" ? 40 : _context2.t1 === "===" ? 42 : _context2.t1 === "!==" ? 44 : _context2.t1 === "<" ? 46 : _context2.t1 === ">" ? 48 : _context2.t1 === "<=" ? 50 : _context2.t1 === ">=" ? 52 : 54;
              break;

            case 16:
              this.exprStack.push(left + right);
              return _context2.abrupt("return");

            case 18:
              this.exprStack.push(left - right);
              return _context2.abrupt("return");

            case 20:
              this.exprStack.push(left / right);
              return _context2.abrupt("return");

            case 22:
              this.exprStack.push(left * right);
              return _context2.abrupt("return");

            case 24:
              this.exprStack.push(left % right);
              return _context2.abrupt("return");

            case 26:
              this.exprStack.push(left >> right);
              return _context2.abrupt("return");

            case 28:
              this.exprStack.push(left >>> right);
              return _context2.abrupt("return");

            case 30:
              this.exprStack.push(left << right);
              return _context2.abrupt("return");

            case 32:
              this.exprStack.push(left | right);
              return _context2.abrupt("return");

            case 34:
              this.exprStack.push(left & right);
              return _context2.abrupt("return");

            case 36:
              this.exprStack.push(left ^ right);
              return _context2.abrupt("return");

            case 38:
              this.exprStack.push(left == right);
              return _context2.abrupt("return");

            case 40:
              this.exprStack.push(left != right);
              return _context2.abrupt("return");

            case 42:
              this.exprStack.push(left === right);
              return _context2.abrupt("return");

            case 44:
              this.exprStack.push(left !== right);
              return _context2.abrupt("return");

            case 46:
              this.exprStack.push(left < right);
              return _context2.abrupt("return");

            case 48:
              this.exprStack.push(left > right);
              return _context2.abrupt("return");

            case 50:
              this.exprStack.push(left <= right);
              return _context2.abrupt("return");

            case 52:
              this.exprStack.push(left >= right);
              return _context2.abrupt("return");

            case 54:
              return _context2.abrupt("break", 108);

            case 55:
              ue = e;
              _context2.next = 58;
              return this.visitExpressionAsync(ue.argument);

            case 58:
              top = this.exprStack.pop();
              _context2.t2 = ue.operator;
              _context2.next = _context2.t2 === "ABS" ? 62 : _context2.t2 === "!" ? 64 : _context2.t2 === "~" ? 66 : _context2.t2 === "-" ? 68 : _context2.t2 === "+" ? 70 : 72;
              break;

            case 62:
              this.exprStack.push(Math.abs(top));
              return _context2.abrupt("return");

            case 64:
              this.exprStack.push(!top);
              return _context2.abrupt("return");

            case 66:
              this.exprStack.push(~top);
              return _context2.abrupt("return");

            case 68:
              this.exprStack.push(-top);
              return _context2.abrupt("return");

            case 70:
              this.exprStack.push(+top);
              return _context2.abrupt("return");

            case 72:
              return _context2.abrupt("break", 108);

            case 73:
              le = e;
              _context2.next = 76;
              return this.visitExpressionAsync(le.left);

            case 76:
              _context2.t3 = le.operator;
              _context2.next = _context2.t3 === "||" ? 79 : _context2.t3 === "&&" ? 86 : 93;
              break;

            case 79:
              if (!this.tos()) {
                _context2.next = 83;
                break;
              }

              return _context2.abrupt("return");

            case 83:
              _context2.next = 85;
              return this.visitExpressionAsync(le.right);

            case 85:
              return _context2.abrupt("return");

            case 86:
              if (this.tos()) {
                _context2.next = 90;
                break;
              }

              return _context2.abrupt("return");

            case 90:
              _context2.next = 92;
              return this.visitExpressionAsync(le.right);

            case 92:
              return _context2.abrupt("return");

            case 93:
              return _context2.abrupt("break", 108);

            case 94:
              _context2.next = 96;
              return this.env(e);

            case 96:
              val = _context2.sent;
              //if (val === undefined) {
              //    throw new VMError(VMCode.InternalError, `lookup of ${unparse(e)} failed`)
              //}
              this.exprStack.push(val);
              return _context2.abrupt("return");

            case 99:
              id = e;
              _context2.next = 102;
              return this.env(id.name);

            case 102:
              _val = _context2.sent;
              // if (val === undefined)
              //    throw new VMError(VMCode.InternalError, `lookup of ${id.name} failed`)
              this.exprStack.push(_val);
              return _context2.abrupt("return");

            case 105:
              lit = e;
              this.exprStack.push(lit.value);
              return _context2.abrupt("return");

            case 108:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function visitExpressionAsync(_x2) {
      return _visitExpressionAsync.apply(this, arguments);
    }

    return visitExpressionAsync;
  }();

  return VMExprEvaluator;
}();

/***/ })

}]);
//# sourceMappingURL=b4b5e3de7d195d717097f81a5311f716f303ebf6-4596fbdc45b360d65282.js.map