(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1297],{

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
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41788);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13173);
/* harmony import */ var _jdom_serviceclient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56763);
/* harmony import */ var _jdom_eventsource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45484);
/* harmony import */ var _jdom_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71815);







function refresh_env(_x) {
  return _refresh_env.apply(this, arguments);
} // TODO: you want [ev] to be PackedValues and handle the arrays yourself.

function _refresh_env() {
  _refresh_env = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(registers) {
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
  _writeReg = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(reg, fmt, ev) {
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

var VMServiceEnvironment = /*#__PURE__*/function (_JDServiceClient) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(VMServiceEnvironment, _JDServiceClient);

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
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(VMEnvironment, _JDEventSource);

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
          this.exprStack.push(val);
          return;
        }

      case "Identifier":
        {
          var id = e;
          this.exprStack.push(this.env(id.name));
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

/***/ 36227:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/node_modules/jsep/build/jsep.js
var jsep = __webpack_require__(25297);
var jsep_default = /*#__PURE__*/__webpack_require__.n(jsep);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdutils.ts
var jdutils = __webpack_require__(30055);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/ir.ts
var IT4Functions = [{
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
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/markdown.ts
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var supportedExpressions = ["MemberExpression", "ArrayExpression", "BinaryExpression", "Identifier", "Literal", "UnaryExpression", "LogicalExpression"];
function parseITTTMarkdownToJSON(filecontent, filename) {
  if (filename === void 0) {
    filename = "";
  }

  filecontent = (filecontent || "").replace(/\r/g, "");
  var info = {
    description: "",
    roles: [],
    registers: [],
    events: [],
    handlers: []
  };
  var backticksType = "";
  var errors = [];
  var lineNo = 0;
  var currentHandler = null;
  var handlerHeading = "";
  var symbolResolver = new jdutils/* SpecSymbolResolver */.ll(undefined, function (role) {
    // lookup in roles first
    var shortId = info.roles.find(function (pair) {
      return pair.role === role;
    });

    if (shortId) {
      // must succeed
      return (0,spec/* serviceSpecificationFromName */.kB)(shortId.serviceShortName);
    } else {
      var service = (0,spec/* serviceSpecificationFromName */.kB)(role);

      if (!service) {
        error("can't find service with shortId=" + role);
        return undefined;
      }

      return service;
    }
  }, supportedExpressions, (jsep_default()), function (e) {
    return error(e);
  });

  try {
    for (var _iterator = _createForOfIteratorHelperLoose(filecontent.split(/\n/)), _step; !(_step = _iterator()).done;) {
      var line = _step.value;
      lineNo++;
      processLine(line);
    }
  } catch (e) {
    error("exception: " + e.message);
  }

  if (currentHandler) finishHandler(symbolResolver);
  if (errors.length) info.errors = errors;
  return info;

  function processLine(line) {
    if (backticksType) {
      if (line.trim() == "```") {
        backticksType = null;
        if (backticksType == "default") return;
      }
    } else {
      var m = /^```(.*)/.exec(line);

      if (m) {
        backticksType = m[1] || "default";
        if (backticksType == "default") return;
      }
    }

    var interpret = backticksType == "default" || line.slice(0, 4) == "    " || /^\t/.exec(line);

    if (!interpret) {
      var _m = /^(#+)\s*(.*)/.exec(line);

      if (_m) {
        handlerHeading = "";
        var hd = _m[1],
            cont = _m[2];

        if (hd == "#") {
          if (!info.description) info.description = cont.trim();else error("use ## to start a handler, not #");
        } else if (hd == "##") {
          if (currentHandler) finishHandler(symbolResolver);
          handlerHeading = cont.trim();
        }
      }
    } else {
      var expanded = line.replace(/\/\/.*/, "").trim();
      if (!expanded) return;
      processCommand(expanded);
    }
  }

  function processCommand(expanded) {
    if (!currentHandler) {
      if (!handlerHeading) error("every handler must have a description (via ##)");
      currentHandler = {
        description: handlerHeading,
        commands: []
      };
      handlerHeading = "";
    }

    var ret = symbolResolver.processLine(expanded, IT4Functions);

    if (ret) {
      var command = ret[0],
          root = ret[1];

      if (currentHandler.commands.length === 0) {
        if (command.id === "role") {
          // TODO: check
          var role = root.arguments[0].name;
          var serviceShortName = root.arguments[1].name;
          var service = (0,spec/* serviceSpecificationFromName */.kB)(serviceShortName);
          if (!service) error("can't find service with shortId=" + serviceShortName);else if (info.roles.find(function (pair) {
            return pair.role === role;
          })) error("role with name " + role + " already declared");else info.roles.push({
            role: role,
            serviceShortName: serviceShortName
          });
          return;
        } else if (command.id !== "awaitEvent" && command.id !== "awaitCondition") {
          error("An ITTT handler must begin with call to an await function (awaitEvent | awaitCondition)");
          return;
        }
      } else {
        if (command.id === "role") {
          error("roles must be declared at beginning of handler");
        }
      }

      currentHandler.commands.push({
        guard: undefined,
        command: root
      });
    }
  }

  function finishHandler(sym) {
    if (currentHandler.commands.length > 0) info.handlers.push(currentHandler);
    sym.registers.forEach(function (r) {
      if (info.registers.indexOf(r) < 0) info.registers.push(r);
    });
    sym.events.forEach(function (e) {
      if (info.events.indexOf(e) < 0) info.events.push(e);
    });
    sym.reset();
    currentHandler = null;
  }

  function error(msg) {
    if (!msg) msg = "syntax error";
    if (errors.some(function (e) {
      return e.line == lineNo && e.message == msg;
    })) return;
    errors.push({
      file: filename,
      line: lineNo,
      message: msg
    });
  }
}
// EXTERNAL MODULE: ./src/components/useLocalStorage.ts
var useLocalStorage = __webpack_require__(86581);
// EXTERNAL MODULE: ./src/components/ui/HighlightTextField.tsx + 1 modules
var HighlightTextField = __webpack_require__(33024);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./src/components/ui/GridHeader.tsx
var GridHeader = __webpack_require__(95393);
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
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 24 modules
var servers = __webpack_require__(25606);
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
      var key = Object.keys(_this2._roles).find(function (k) {
        return typeof _this2._roles[k] === "string" && _this2.nameMatch(_this2._roles[k], s.specification.shortName);
      });

      if (key && _this2._devices.indexOf(dev) === -1) {
        _this2._roles[key] = s;

        _this2._devices.push(dev);

        if (_this2.notify) _this2.notify(key, s, true);
      }
    });
  };

  _proto.removeServices = function removeServices(dev) {
    var _this3 = this;

    if (this._devices.indexOf(dev) >= 0) {
      this._devices = this._devices.filter(function (d) {
        return d !== dev;
      });
      var key = Object.keys(this._roles).find(function (k) {
        return typeof _this3._roles[k] !== "string" && dev.services().indexOf(_this3._roles[k]) >= 0;
      });

      if (key) {
        var _service = this._roles[key];
        this._roles[key] = this._roles[key].specification.shortName;
        if (this.notify) this.notify(key, _service, false);
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
    var _this5 = this;

    var s = this._roles[role];
    if (s && typeof s !== "string") return;
    var existingInstance = Object.values(this._roles).find(function (r) {
      return typeof r === "string" && _this5.nameMatch(r, serviceShortName) || typeof r === "object" && _this5.nameMatch(r.specification.shortName, serviceShortName);
    });
    this._roles[role] = serviceShortName;
    var ret = this.getServicesFromName(serviceShortName);

    if (existingInstance || ret.length === 0) {
      // spin up a new simulator
      var _service2 = (0,spec/* serviceSpecificationFromName */.kB)(serviceShortName);

      if (_service2) {
        var provider = (0,servers/* serviceProviderDefinitionFromServiceClass */.vd)(_service2 === null || _service2 === void 0 ? void 0 : _service2.classIdentifier);
        if (provider) (0,servers/* addServiceProvider */.Q6)(this.bus, provider);
      }
    } else {
      this._roles[role] = ret[0];
    }
  };

  return MyRoleManager;
}(eventsource/* JDEventSource */.a);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/environment.ts
var environment = __webpack_require__(96699);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/expr.ts
var vm_expr = __webpack_require__(18108);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/vmrunner.ts







var VMStatus;

(function (VMStatus) {
  VMStatus[VMStatus["Ready"] = 0] = "Ready";
  VMStatus[VMStatus["Running"] = 1] = "Running";
  VMStatus[VMStatus["Completed"] = 2] = "Completed";
  VMStatus[VMStatus["Stopped"] = 3] = "Stopped";
})(VMStatus || (VMStatus = {}));

var IT4CommandEvaluator = /*#__PURE__*/function () {
  function IT4CommandEvaluator(env, gc) {
    this.env = env;
    this.gc = gc;
  }

  var _proto = IT4CommandEvaluator.prototype;

  _proto.checkExpression = function checkExpression(e) {
    var _this = this;

    var expr = new vm_expr/* JDExprEvaluator */.f(function (e) {
      return _this.env.lookup(e);
    }, undefined);
    return expr.eval(e) ? true : false;
  };

  _proto.evaluate = function evaluate() {
    var _this2 = this;

    // console.log(unparse(this.gc.command))
    this._status = VMStatus.Running;
    var args = this.gc.command.arguments;

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

      case "writeRegister":
      case "writeLocal":
        {
          var expr = new vm_expr/* JDExprEvaluator */.f(function (e) {
            return _this2.env.lookup(e);
          }, undefined);
          var ev = expr.eval(args[1]);
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
      return this.gc.command.callee.name;
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

  _proto2.reset = function reset() {
    this.status = VMStatus.Running;
  };

  _proto2.step = function step() {
    if (this.isWaiting) {
      this._eval.evaluate();

      this.finish(this._eval.status);
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
    if (this.stopped) return;

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
    _this3._rm = new MyRoleManager(bus, function (role, service, added) {
      _this3._env.serviceChanged(role, service, added);

      if (added) {
        _this3.program.registers.forEach(function (r) {
          var _r$split = r.split("."),
              root = _r$split[0],
              reg = _r$split[1];

          if (root === role) {
            _this3._env.registerRegister(role, reg);
          }
        });

        _this3.program.events.forEach(function (e) {
          var _e$split = e.split("."),
              root = _e$split[0],
              ev = _e$split[1];

          if (root === role) {
            _this3._env.registerEvent(role, ev);
          }
        });
      }
    });
    _this3._env = new environment/* VMEnvironment */.uH(function () {
      _this3.run();
    });
    _this3._handlers = program.handlers.map(function (h, index) {
      return new IT4HandlerRunner(index, _this3._env, h);
    });
    _this3._waitQueue = _this3._handlers.slice(0);
    return _this3;
  }

  var _proto4 = IT4ProgramRunner.prototype;

  _proto4.cancel = function cancel() {
    this._running = false;
    this._waitQueue = this._handlers.slice(0);

    this._waitQueue.forEach(function (h) {
      return h.reset();
    });

    this.emit(constants/* CHANGE */.Ver);
  };

  _proto4.start = function start() {
    var _this4 = this;

    this.program.roles.forEach(function (role) {
      _this4._rm.addRoleService(role.role, role.serviceShortName);
    });
    this._running = true;
    this.emit(constants/* CHANGE */.Ver);
    this.run();
  };

  _proto4.run = function run() {
    if (!this._running) return;

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
;// CONCATENATED MODULE: ./src/components/vm/VMRunner.tsx

 // tslint:disable-next-line: match-default-export-name no-submodule-imports





function VMRunner(props) {
  var json = props.json,
      bus = props.bus;
  var factory = (0,react.useCallback)(function (bus) {
    return json && new IT4ProgramRunner(json, bus);
  }, [json]);
  var testRunner = (0,react.useMemo)(function () {
    return factory(bus);
  }, [json]);
  var status = (0,useChange/* default */.Z)(testRunner, function (t) {
    return t.status;
  });

  var handleRun = function handleRun() {
    return testRunner.start();
  };

  var handleCancel = function handleCancel() {
    return testRunner.cancel();
  };

  var running = status === VMStatus.Running;
  return /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "contained",
    onClick: running ? handleCancel : handleRun,
    color: running ? "default" : "primary",
    startIcon: running ? /*#__PURE__*/react.createElement(LoadingProgress/* default */.Z, null) : /*#__PURE__*/react.createElement(PlayArrow/* default */.Z, null)
  }, running ? "Stop" : "Run");
}
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./src/components/dashboard/Dashboard.tsx + 3 modules
var Dashboard = __webpack_require__(65063);
;// CONCATENATED MODULE: ./src/components/tools/VMEditorRunner.tsx









var VM_MARKDOWN_SOURCE_STORAGE_KEY = "jacdac:vmeditorsource:markdown";
function VMEditorRunner() {
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var _useLocalStorage = (0,useLocalStorage/* default */.Z)(VM_MARKDOWN_SOURCE_STORAGE_KEY, "# VM Handler program\n\n"),
      source = _useLocalStorage[0],
      setSource = _useLocalStorage[1];

  var json = (0,react.useMemo)(function () {
    return parseITTTMarkdownToJSON(source);
  }, [source]);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    spacing: 2,
    container: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(HighlightTextField/* default */.Z, {
    code: source,
    language: "markdown",
    onChange: setSource,
    annotations: json === null || json === void 0 ? void 0 : json.errors
  })), /*#__PURE__*/react.createElement(GridHeader/* default */.Z, {
    title: "Preview"
  }), json && bus && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(VMRunner, {
    json: json,
    bus: bus
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Dashboard/* default */.Z, null)));
}
;// CONCATENATED MODULE: ./src/pages/tools/vm-editor-runner.tsx


function Page() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "VM Editor/Runner"), /*#__PURE__*/react.createElement(VMEditorRunner, null));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-vm-editor-runner-tsx-d2456a388c08b26f3dc5.js.map