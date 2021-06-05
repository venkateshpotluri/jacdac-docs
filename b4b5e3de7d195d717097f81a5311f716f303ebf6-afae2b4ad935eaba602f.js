(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3],{

/***/ 75133:
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
/* harmony import */ var _rolemanager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37073);









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
  }() // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  _proto.writeRegisterAsync =
  /*#__PURE__*/
  function () {
    var _writeRegisterAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(regName, ev) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.setEnabled();

            case 2:
              _context2.next = 4;
              return this.writeRegAsync(this._registers[regName], ev);

            case 4:
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
    var _refreshRegistersAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
      var k, register;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().keys(this._registers);

            case 1:
              if ((_context5.t1 = _context5.t0()).done) {
                _context5.next = 8;
                break;
              }

              k = _context5.t1.value;
              register = this._registers[k];
              _context5.next = 6;
              return register.refresh();

            case 6:
              _context5.next = 1;
              break;

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
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

  function VMEnvironment(registers, events) {
    var _this2;

    _this2 = _JDEventSource.call(this) || this;
    _this2._currentEvent = undefined;
    _this2._envs = {};
    _this2._locals = {};
    _this2.registers = registers;
    _this2.events = events;
    return _this2;
  }

  var _proto2 = VMEnvironment.prototype;

  _proto2.serviceChanged = function serviceChanged(role, service) {
    var _this3 = this;

    if (this._envs[role]) {
      this._envs[role].unmount();

      this._envs[role] = undefined;
    }

    if (service) {
      this._envs[role] = new VMServiceEnvironment(service);
      this.registers.forEach(function (r) {
        if (r.role === role) {
          _this3.registerRegister(role, r.register);
        }
      });
      this.events.forEach(function (e) {
        if (e.role === role) {
          _this3.registerEvent(role, e.event);
        }
      });
    }
  };

  _proto2.registerRegister = function registerRegister(role, reg) {
    var _this4 = this;

    var serviceEnv = this.getService(role);

    if (serviceEnv) {
      serviceEnv.registerRegister(reg, function () {
        _this4.emit(_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .CHANGE */ .Ver);
      });
    }
  };

  _proto2.registerEvent = function registerEvent(role, ev) {
    var _this5 = this;

    var serviceEnv = this.getService(role);

    if (serviceEnv) {
      serviceEnv.registerEvent(ev, function () {
        _this5._currentEvent = role + "." + ev;

        _this5.emit(_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .CHANGE */ .Ver);
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
      this.emit(_rolemanager__WEBPACK_IMPORTED_MODULE_6__/* .ROLE_HAS_NO_SERVICE */ .ky, root);
    }

    return s;
  };

  _proto2.refreshRegistersAsync = /*#__PURE__*/function () {
    var _refreshRegistersAsync2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
      var _i, _Object$values, s;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _i = 0, _Object$values = Object.values(this._envs);

            case 1:
              if (!(_i < _Object$values.length)) {
                _context6.next = 8;
                break;
              }

              s = _Object$values[_i];
              _context6.next = 5;
              return s === null || s === void 0 ? void 0 : s.refreshRegistersAsync();

            case 5:
              _i++;
              _context6.next = 1;
              break;

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
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
    var _sendCommandAsync2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(e, values) {
      var serviceEnv;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              serviceEnv = this.getService(e);
              _context7.next = 3;
              return serviceEnv === null || serviceEnv === void 0 ? void 0 : serviceEnv.sendCommandAsync(e.property, values);

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function sendCommandAsync(_x7, _x8) {
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
    return serviceEnv.lookup(me.property);
  };

  _proto2.writeRegisterAsync = /*#__PURE__*/function () {
    var _writeRegisterAsync2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(e, ev) {
      var serviceEnv, me, reg;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              serviceEnv = this.getService(e);
              me = e;

              if (!(serviceEnv && me.property.type === "Identifier")) {
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

    function writeRegisterAsync(_x9, _x10) {
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

/***/ 22036:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ unparse; },
/* harmony export */   "W": function() { return /* binding */ VMExprEvaluator; }
/* harmony export */ });
/* harmony import */ var _VMutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69705);

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
            case "ABS":
              this.exprStack.push(Math.abs(top));
              return;

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

          if (val === undefined) {
            throw new _VMutils__WEBPACK_IMPORTED_MODULE_0__/* .VMError */ .L1("lookup of " + unparse(e) + " failed");
          }

          this.exprStack.push(val);
          return;
        }

      case "Identifier":
        {
          var id = e;

          var _val = this.env(id.name);

          if (_val === undefined) throw new _VMutils__WEBPACK_IMPORTED_MODULE_0__/* .VMError */ .L1("lookup of " + id.name + " failed");
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

  return VMExprEvaluator;
}();

/***/ }),

/***/ 69705:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UM": function() { return /* binding */ VM_WATCH_CHANGE; },
/* harmony export */   "Di": function() { return /* binding */ VM_BREAKPOINT; },
/* harmony export */   "Ed": function() { return /* binding */ VM_COMMAND_ATTEMPTED; },
/* harmony export */   "p_": function() { return /* binding */ VM_COMMAND_COMPLETED; },
/* harmony export */   "gf": function() { return /* binding */ VM_WAKE_SLEEPER; },
/* harmony export */   "L1": function() { return /* binding */ VMError; },
/* harmony export */   "WU": function() { return /* binding */ Mutex; }
/* harmony export */ });
/* unused harmony exports VM_ERROR, VM_MISSING_ROLE_WARNING, VM_MISSING_DEVICE_WARNING, default */
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41788);
/* harmony import */ var _babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57869);


var VM_ERROR = "vmError";
var VM_WATCH_CHANGE = "vmWatchChange";
var VM_MISSING_ROLE_WARNING = "vmMissingRole";
var VM_MISSING_DEVICE_WARNING = "vmMissingDevice";
var VM_BREAKPOINT = "vmBreakpoint";
var VM_COMMAND_ATTEMPTED = "vmCommandAttempted";
var VM_COMMAND_COMPLETED = "vmCommandCompleted";
var VM_WAKE_SLEEPER = "vmWakeSleeper";
var VMError = /*#__PURE__*/function (_Error) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(VMError, _Error);

  function VMError(message, jacdacName) {
    var _this;

    _this = _Error.call(this, message) || this;
    _this.jacdacName = jacdacName;
    _this.name = VM_ERROR;
    return _this;
  }

  return VMError;
}( /*#__PURE__*/(0,_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(Error));
function errorPath(e) {
  return e === null || e === void 0 ? void 0 : e.jacdacName;
}
var Mutex = /*#__PURE__*/function () {
  function Mutex() {
    this.promises = [];
  }

  var _proto = Mutex.prototype;

  _proto.shift = function shift() {
    this.promises.shift();
    if (this.promises[0]) this.promises[0]();
  };

  _proto.acquire = function acquire(f) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      _this2.promises.push(function () {
        return f().then(function (v) {
          _this2.shift();

          resolve(v);
        }, function (e) {
          _this2.shift();

          reject(e);
        });
      });

      if (_this2.promises.length == 1) _this2.promises[0]();
    });
  };

  return Mutex;
}();

/***/ }),

/***/ 37073:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l9": function() { return /* binding */ ROLE_BOUND; },
/* harmony export */   "CC": function() { return /* binding */ ROLE_UNBOUND; },
/* harmony export */   "ky": function() { return /* binding */ ROLE_HAS_NO_SERVICE; },
/* harmony export */   "aw": function() { return /* binding */ RoleManager; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96156);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5991);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63349);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41788);
/* harmony import */ var _jdom_eventsource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45484);
/* harmony import */ var _jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71815);
/* harmony import */ var _jdom_spec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13173);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var ROLE_BOUND = "roleBound";
var ROLE_UNBOUND = "roleUnbound";
var ROLE_HAS_NO_SERVICE = "roleHasNoService";
// TODO: replicate MakeCode role manager logic
var RoleManager = /*#__PURE__*/function (_JDEventSource) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(RoleManager, _JDEventSource);

  function RoleManager(bus) {
    var _this;

    _this = _JDEventSource.call(this) || this;
    _this._roles = [];
    _this.bus = bus;

    _this.bus.on(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .DEVICE_ANNOUNCE */ .Hob, _this.addServices.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(_this)));

    _this.bus.on(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .DEVICE_DISCONNECT */ .O55, _this.removeServices.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(_this)));

    _this.bus.devices({
      ignoreSelf: true,
      announced: true
    }).forEach(function (dev) {
      return _this.addServices(dev);
    });

    _this.on(ROLE_UNBOUND, function (role) {
      return console.log("role unbound", {
        role: role
      });
    });

    _this.on(ROLE_BOUND, function (role) {
      return console.log("role bound", {
        role: role
      });
    });

    return _this;
  }

  var _proto = RoleManager.prototype;

  _proto.setRoles = function setRoles(newRoles) {
    var _this2 = this;

    var changed = false; // remove unknown roles

    var supportedNewRoles = newRoles.filter(function (_ref) {
      var serviceShortId = _ref.serviceShortId;
      return (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_3__/* .serviceSpecificationFromName */ .kB)(serviceShortId);
    }); // unbind removed roles

    var i = 0;

    var _loop = function _loop() {
      var role = _this2._roles[i];

      if (!supportedNewRoles.find(function (r) {
        return r.role === role.role;
      })) {
        changed = true;

        _this2._roles.splice(i, 1);

        _this2.emit(ROLE_UNBOUND, role.role);
      } else {
        i++;
      }
    };

    while (i < this._roles.length) {
      _loop();
    } // update or add roles


    var _loop2 = function _loop2() {
      var newRole = _step.value;

      var existingRole = _this2._roles.find(function (r) {
        return r.role === newRole.role;
      });

      if (!existingRole) {
        // added role
        changed = true;

        _this2._roles.push(_objectSpread({}, newRole));
      } else if (existingRole.serviceShortId !== newRole.serviceShortId) {
        // modified type, force rebinding
        changed = true;
        existingRole.serviceShortId = newRole.serviceShortId;

        if (existingRole.service) {
          existingRole.service = undefined;

          _this2.emit(ROLE_UNBOUND, existingRole.role);
        }
      } // else unmodifed role

    };

    for (var _iterator = _createForOfIteratorHelperLoose(supportedNewRoles), _step; !(_step = _iterator()).done;) {
      _loop2();
    } // emit change as needed


    if (changed) this.emit(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHANGE */ .Ver); // bound services

    this.bindServices();
  };

  _proto.bindServices = function bindServices() {
    var _this3 = this;

    var changed = false;
    this.unboundRoles.forEach(function (binding) {
      var boundRoles = _this3.boundRoles;

      var service = _this3.bus.services({
        ignoreSelf: true,
        serviceName: binding.serviceShortId
      }).find(function (srv) {
        return !boundRoles.find(function (b) {
          return b.service === srv;
        });
      });

      binding.service = service;

      _this3.emit(ROLE_BOUND, binding.role);

      changed = true;
    });
    if (changed) this.emit(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHANGE */ .Ver);
  };

  _proto.addServices = function addServices(dev) {
    if (dev === this.bus.selfDevice) return;
    this.bindServices();
  };

  _proto.removeServices = function removeServices(dev) {
    var _this4 = this;

    var changed = false;

    this._roles.filter(function (r) {
      var _r$service;

      return ((_r$service = r.service) === null || _r$service === void 0 ? void 0 : _r$service.device) === dev;
    }).forEach(function (r) {
      r.service = undefined;

      _this4.emit(ROLE_UNBOUND, r.role);

      changed = true;
    });

    if (changed) this.emit(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHANGE */ .Ver);
  };

  _proto.getService = function getService(role) {
    var _this$_roles$find;

    return (_this$_roles$find = this._roles.find(function (r) {
      return r.role === role;
    })) === null || _this$_roles$find === void 0 ? void 0 : _this$_roles$find.service;
  };

  _proto.addRoleService = function addRoleService(role, serviceShortId) {
    var _this5 = this;

    if (!(0,_jdom_spec__WEBPACK_IMPORTED_MODULE_3__/* .serviceSpecificationFromName */ .kB)(serviceShortId)) return; // unknown role type

    var binding = this._roles.find(function (r) {
      return r.role === role;
    }); // check if we already have this role


    if (binding && serviceShortId === binding.serviceShortId) return; // new role

    binding = {
      role: role,
      serviceShortId: serviceShortId
    };

    this._roles.push(binding);

    var ret = this.bus.services({
      ignoreSelf: true,
      serviceName: serviceShortId
    }).find(function (s) {
      return !_this5._roles.find(function (r) {
        return r.service === s;
      });
    });

    if (ret) {
      binding.service = ret;
      this.emit(ROLE_BOUND, role);
    } else {
      this.emit(ROLE_UNBOUND, role);
    }

    this.emit(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHANGE */ .Ver);
  };

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(RoleManager, [{
    key: "roles",
    get: function get() {
      return this._roles.slice(0);
    }
  }, {
    key: "boundRoles",
    get: function get() {
      return this._roles.filter(function (r) {
        return !!r.service;
      });
    }
  }, {
    key: "unboundRoles",
    get: function get() {
      return this._roles.filter(function (r) {
        return !r.service;
      });
    }
  }]);

  return RoleManager;
}(_jdom_eventsource__WEBPACK_IMPORTED_MODULE_1__/* .JDEventSource */ .a);

/***/ })

}]);
//# sourceMappingURL=b4b5e3de7d195d717097f81a5311f716f303ebf6-afae2b4ad935eaba602f.js.map