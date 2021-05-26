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

/***/ 96699:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kx": function() { return /* binding */ VMServiceEnvironment; },
/* harmony export */   "uH": function() { return /* binding */ VMEnvironment; }
/* harmony export */ });
/* unused harmony export refresh_env */
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41788);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13173);
/* harmony import */ var _jdom_serviceclient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56763);
/* harmony import */ var _jdom_eventsource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45484);
/* harmony import */ var _jdom_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71815);
/* harmony import */ var _jdom_pack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91635);








function refresh_env(_x) {
  return _refresh_env.apply(this, arguments);
} // TODO: you want [ev] to be PackedValues and handle the arrays yourself.

function _refresh_env() {
  _refresh_env = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(registers) {
    var k, register, retry, val, _register$unpackedVal;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().keys(registers);

          case 1:
            if ((_context.t1 = _context.t0()).done) {
              _context.next = 12;
              break;
            }

            k = _context.t1.value;
            register = registers[k];
            retry = 0;
            val = undefined;

          case 6:
            _context.next = 8;
            return register.refresh();

          case 8:
            val = (_register$unpackedVal = register.unpackedValue) === null || _register$unpackedVal === void 0 ? void 0 : _register$unpackedVal[0];

          case 9:
            if (val === undefined && retry++ < 2) {
              _context.next = 6;
              break;
            }

          case 10:
            _context.next = 1;
            break;

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _refresh_env.apply(this, arguments);
}

function writeReg(_x2, _x3, _x4) {
  return _writeReg.apply(this, arguments);
}

function _writeReg() {
  _writeReg = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(reg, fmt, ev) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return reg.sendSetPackedAsync(fmt, [ev], true);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _writeReg.apply(this, arguments);
}

function _sendCommand2(_x5, _x6, _x7) {
  return _sendCommand.apply(this, arguments);
}

function _sendCommand() {
  _sendCommand = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(service, pkt, values) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return service.sendCmdAsync(pkt.identifier, (0,_jdom_pack__WEBPACK_IMPORTED_MODULE_5__/* .jdpack */ .AV)(pkt.packFormat, values), true);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _sendCommand.apply(this, arguments);
}

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

  _proto.sendCommand = function sendCommand(command, values) {
    var commandName = command === null || command === void 0 ? void 0 : command.name;
    var pkt = this.service.specification.packets.find(function (p) {
      return (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isCommand */ .ao)(p) && p.name === commandName;
    });
    if (pkt) _sendCommand2(this.service, pkt, values);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  _proto.writeRegister = function writeRegister(regName, ev) {
    var jdreg = this._registers[regName];

    if (jdreg) {
      var _jdreg$specification;

      writeReg(jdreg, (_jdreg$specification = jdreg.specification) === null || _jdreg$specification === void 0 ? void 0 : _jdreg$specification.packFormat, ev);
      return true;
    }

    return false;
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  _proto.refreshEnvironment = function refreshEnvironment() {
    refresh_env(this._registers);
  };

  return VMServiceEnvironment;
}(_jdom_serviceclient__WEBPACK_IMPORTED_MODULE_2__/* .JDServiceClient */ .P);
var VMEnvironment = /*#__PURE__*/function (_JDEventSource) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(VMEnvironment, _JDEventSource);

  function VMEnvironment(notifyOnChange) {
    var _this2;

    _this2 = _JDEventSource.call(this) || this;
    _this2._currentEvent = undefined;
    _this2._envs = {};
    _this2._locals = {};
    _this2.notifyOnChange = notifyOnChange;
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
    var serviceEnv = this.getService(role);

    if (serviceEnv) {
      serviceEnv.registerRegister(reg, this.notifyOnChange);
    }
  };

  _proto2.registerEvent = function registerEvent(role, ev) {
    var _this3 = this;

    var serviceEnv = this.getService(role);

    if (serviceEnv) {
      serviceEnv.registerEvent(ev, function () {
        _this3._currentEvent = role + "." + ev;

        _this3.notifyOnChange();
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
    return this._envs[root];
  };

  _proto2.refreshEnvironment = function refreshEnvironment() {
    Object.values(this._envs).forEach(function (s) {
      return s === null || s === void 0 ? void 0 : s.refreshEnvironment();
    });
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  _proto2.sendCommand = function sendCommand(e, values) {
    var serviceEnv = this.getService(e);

    if (serviceEnv) {
      serviceEnv.sendCommand(e.property, values);
    }
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    if (!serviceEnv) return undefined;
    var me = e;

    if (serviceEnv && me.property.type === "Identifier") {
      var reg = me.property.name;
      return serviceEnv.lookup(reg);
    }

    return undefined;
  };

  _proto2.writeRegister = function writeRegister(e, ev) {
    var serviceEnv = this.getService(e);
    var me = e;

    if (serviceEnv && me.property.type === "Identifier") {
      var reg = me.property.name;
      return serviceEnv.writeRegister(reg, ev);
    }

    return false;
  };

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
    Object.values(this._envs).forEach(function (vs) {
      return vs.unmount();
    });
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
/*
The JD-VM runs a program, which is a set of handlers. Each handler is of the form
•	wait on event/condition, followed by a
•	sequence of guarded commands – the sequence is executed atomically (though may suspend if it contains a wait)
After a handler finishes executing, it restarts (there is an implicit event loop around all the handlers, as usual). 
 
We will have a small key-value store to keep program state (perhaps we will have the ability to store lists of values as well as basic values) across the handler executions.
 
Commands can talk to JD services (probably via roles), as well as read/write program state, and wait on events/expressions. Any command can be guarded by an expression, for conditional execution.
 
Expressions can be against service registers (as in the test case) and program state.
 
*/
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
          if (val === undefined) throw "undefined-register";
          this.exprStack.push(val);
          return;
        }

      case "Identifier":
        {
          var id = e;

          var _val = this.env(id.name);

          if (_val === undefined) throw "undefined-register";
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(5991);
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

  _proto.addServices = function addServices(dev) {
    var _this2 = this;

    dev.services().forEach(function (s) {
      var role = Object.keys(_this2._roles).find(function (k) {
        return typeof _this2._roles[k] === "string" && _this2.nameMatch(_this2._roles[k], s.specification.shortName);
      });

      if (role && _this2._devices.indexOf(dev) === -1) {
        _this2._roles[role] = s;

        _this2._devices.push(dev);

        if (_this2.notify) _this2.notify(role, s, true);
      }
    });
  };

  _proto.removeServices = function removeServices(dev) {
    var _this3 = this;

    if (this._devices.indexOf(dev) >= 0) {
      this._devices = this._devices.filter(function (d) {
        return d !== dev;
      });

      var _role = Object.keys(this._roles).find(function (k) {
        return typeof _this3._roles[k] !== "string" && dev.services().indexOf(_this3._roles[k]) >= 0;
      });

      if (_role) {
        var _service = this._roles[_role];
        this._roles[_role] = this._roles[_role].specification.shortName;
        if (this.notify) this.notify(_role, _service, false);
      }
    }
  };

  _proto.getService = function getService(role) {
    var s = this._roles[role];
    return !s || typeof s === "string" ? undefined : s;
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

  _proto.addRoleService = function addRoleService(role, serviceShortName) {
    var s = this._roles[role];
    if (s && typeof s !== "string") return;
    this._roles[role] = serviceShortName;
    var existingServices = Object.values(this._roles).filter(function (s) {
      return typeof s !== "string";
    });
    var ret = this.getServicesFromName(serviceShortName).filter(function (s) {
      return existingServices.indexOf(s) === -1;
    });

    if (ret.length > 0) {
      this._roles[role] = ret[0];
      this.notify(role, ret[0], true);
    } else {// spin up a new simulator
      // let service = serviceSpecificationFromName(serviceShortName)
      // if (service) {
      //     let provider = serviceProviderDefinitionFromServiceClass(
      //         service?.classIdentifier
      //     )
      //     if (provider) {
      //         let serviceProvider = addServiceProvider(this.bus, provider)
      //     }
      // }
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
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/vmrunner.ts








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
    }
  };

  _proto.evaluate = function evaluate() {
    var _this2 = this;

    this._status = VMStatus.Running;

    if (!this._started) {
      this.start();
      this._started = true;
      return;
    }

    var args = this.gc.command.arguments;

    if (this.gc.command.callee.type === "MemberExpression") {
      // interpret as a service command (role.comand)
      var expr = new vm_expr/* JDExprEvaluator */.f(function (e) {
        return _this2.env.lookup(e);
      }, undefined);

      var _values = this.gc.command.arguments.map(function (a) {
        return expr.eval(a);
      });

      this.env.sendCommand(this.gc.command.callee, _values);
      this._status = VMStatus.Completed;
      return;
    }

    switch (this.inst) {
      case "awaitEvent":
        {
          var event = args[0];

          if (this.env.hasEvent(event)) {
            this._status = this.checkExpression(args[1]) ? VMStatus.Completed : VMStatus.Running;
          }

          break;
        }

      case "awaitCondition":
        {
          this._status = this.checkExpression(args[0]) ? VMStatus.Completed : VMStatus.Running;
          break;
        }

      case "awaitChange":
      case "awaitRegister":
        {
          var regValue = this.evalExpression(args[0]);

          if (this.inst === "awaitRegister" && regValue !== this._regSaved || this.inst === "awaitChange" && (regValue >= this._regSaved + this._changeSaved || regValue <= this._regSaved - this._changeSaved)) {
            this._status = VMStatus.Completed;
          }

          break;
        }

      case "writeRegister":
      case "writeLocal":
        {
          var _expr = new vm_expr/* JDExprEvaluator */.f(function (e) {
            return _this2.env.lookup(e);
          }, undefined);

          var ev = _expr.eval(args[1]);

          var reg = args[0];

          if (this.inst === "writeRegister" && this.env.writeRegister(reg, ev) || this.inst === "writeLocal" && this.env.writeLocal(reg, ev)) {
            this._status = VMStatus.Completed;
          }

          this._status = VMStatus.Completed;
          break;
        }

      case "halt":
        {
          this._status = VMStatus.Stopped;
          break;
        }
    }
  };

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
  function IT4CommandRunner(env, gc) {
    this._status = VMStatus.Running;
    this._eval = new IT4CommandEvaluator(env, gc);
  }

  var _proto2 = IT4CommandRunner.prototype;

  _proto2.step = function step() {
    if (this.isWaiting) {
      try {
        this._eval.evaluate();

        this.finish(this._eval.status);
      } catch (e) {// we will try again
      }
    }
  };

  _proto2.cancel = function cancel() {
    this.finish(VMStatus.Stopped);
  };

  _proto2.finish = function finish(s) {
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
        this._status = s;
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

var IT4HandlerRunner = /*#__PURE__*/function () {
  function IT4HandlerRunner(id, env, handler) {
    this.stopped = false;
    this.id = id;
    this.env = env;
    this.handler = handler;
    this.reset();
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
    if (this._currentCommand.status === VMStatus.Stopped) this.stopped = true;
  } // run-to-completion semantics
  ;

  _proto3.step = function step() {
    // handler stopped or empty
    if (this.stopped || !this.handler.commands.length) return;

    if (this._commandIndex === undefined) {
      this._commandIndex = 0;
      this._currentCommand = new IT4CommandRunner(this.env, this.handler.commands[this._commandIndex]);
    }

    this._currentCommand.step();

    this.post_process();

    while (this._currentCommand.status === VMStatus.Completed && this._commandIndex < this.handler.commands.length - 1) {
      this._commandIndex++;
      this._currentCommand = new IT4CommandRunner(this.env, this.handler.commands[this._commandIndex]);

      this._currentCommand.step();

      this.post_process();
    }
  };

  (0,createClass/* default */.Z)(IT4HandlerRunner, [{
    key: "status",
    get: function get() {
      return this.stopped ? VMStatus.Stopped : this._currentCommand === undefined ? VMStatus.Ready : this._currentCommand.status;
    }
  }]);

  return IT4HandlerRunner;
}();

var IT4ProgramRunner = /*#__PURE__*/function (_JDEventSource) {
  (0,inheritsLoose/* default */.Z)(IT4ProgramRunner, _JDEventSource);

  function IT4ProgramRunner(program, bus) {
    var _this3;

    _this3 = _JDEventSource.call(this) || this;
    _this3._waitQueue = [];
    _this3._running = false;
    _this3.program = program;

    try {
      var _checkProgram = (0,ir/* checkProgram */.i_)(program),
          regs = _checkProgram[0],
          events = _checkProgram[1];

      if (program.errors.length > 0) {
        console.debug(program.errors);
      }

      _this3._rm = new MyRoleManager(bus, function (role, service, added) {
        try {
          _this3._env.serviceChanged(role, service, added);

          if (added) {
            _this3.program.handlers.forEach(function (h) {
              regs.forEach(function (r) {
                if (r.role === role) {
                  _this3._env.registerRegister(role, r.register);
                }
              });
              events.forEach(function (e) {
                if (e.role === role) {
                  _this3._env.registerEvent(role, e.event);
                }
              });
            });
          }
        } catch (e) {
          _this3.emit(constants/* ERROR */.pnR, e);
        }
      });
      _this3._env = new environment/* VMEnvironment */.uH(function () {
        _this3.run();
      });
      _this3._handlers = program.handlers.map(function (h, index) {
        return new IT4HandlerRunner(index, _this3._env, h);
      });
      _this3._waitQueue = _this3._handlers.slice(0);
    } catch (e) {
      _this3.emit(constants/* ERROR */.pnR, e);
    }

    return _this3;
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
    var _this4 = this;

    if (this._running) return; // already running

    try {
      this.program.roles.forEach(function (role) {
        _this4._rm.addRoleService(role.role, role.serviceShortName);
      });
      this._running = true;
      this.emit(constants/* CHANGE */.Ver);
      this.run();
    } catch (e) {
      this.emit(constants/* ERROR */.pnR, e);
    }
  };

  _proto4.run = function run() {
    if (!this._running) return;

    try {
      this._env.refreshEnvironment();

      if (this._waitQueue.length > 0) {
        var nextTime = [];

        this._waitQueue.forEach(function (h) {
          h.step();

          if (h.status !== VMStatus.Stopped) {
            if (h.status === VMStatus.Completed) h.reset();
            nextTime.push(h);
          }
        });

        this._waitQueue = nextTime;

        this._env.consumeEvent();
      } else {
        this.emit(constants/* CHANGE */.Ver);
      }
    } catch (e) {
      this.emit(constants/* ERROR */.pnR, e);
    }
  };

  (0,createClass/* default */.Z)(IT4ProgramRunner, [{
    key: "status",
    get: function get() {
      var ret = this._running === false ? VMStatus.Stopped : this._waitQueue.length > 0 ? VMStatus.Running : VMStatus.Completed;
      return ret;
    }
  }]);

  return IT4ProgramRunner;
}(eventsource/* JDEventSource */.a);
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2285);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayArrow.js
var PlayArrow = __webpack_require__(42404);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
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
    testRunner.start();
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
    startIcon: running ? /*#__PURE__*/react.createElement(LoadingProgress/* default */.Z, null) : /*#__PURE__*/react.createElement(PlayArrow/* default */.Z, null)
  }, running ? "Stop" : "Run");
}

/***/ })

}]);
//# sourceMappingURL=8681e1d67a6dd0cf4967cae72c671a181d17268f-4e97ef72969a7a1ac149.js.map