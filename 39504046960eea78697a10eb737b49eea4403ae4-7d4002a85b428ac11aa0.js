(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3165],{

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

/***/ 54886:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DashboardDevice; }
});

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(58063);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__(95823);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(29114);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__(26390);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__(47739);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandLess.js
var ExpandLess = __webpack_require__(16993);
// EXTERNAL MODULE: ./src/jacdac/useDeviceSpecification.ts
var useDeviceSpecification = __webpack_require__(77423);
// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 2 modules
var DeviceAvatar = __webpack_require__(1291);
// EXTERNAL MODULE: ./src/components/dashboard/DashboardServiceWidget.tsx + 4 modules
var DashboardServiceWidget = __webpack_require__(73205);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./src/components/services/useRoleManager.ts
var useRoleManager = __webpack_require__(40549);
;// CONCATENATED MODULE: ./src/components/services/useServiceRole.ts


function useServiceRole(service) {
  var _useState = (0,react.useState)(service === null || service === void 0 ? void 0 : service.role),
      role = _useState[0],
      setRole = _useState[1];

  (0,react.useEffect)(function () {
    return service === null || service === void 0 ? void 0 : service.subscribe(constants/* ROLE_CHANGE */.X5h, function () {
      setRole(service.role);
    });
  }, [service]);
  return role;
}
;// CONCATENATED MODULE: ./src/components/services/ServiceRole.tsx






function ServiceRole(props) {
  var service = props.service;

  var _useContext = (0,react.useContext)(AppContext/* default */.ZP),
      showSelectRoleDialog = _useContext.showSelectRoleDialog;

  var roleManager = (0,useRoleManager/* default */.Z)();
  var role = useServiceRole(service);

  var handleClick = function handleClick() {
    return showSelectRoleDialog(service);
  };

  var hasRoleForService = (0,useChange/* default */.Z)(roleManager, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.hasRoleForService(service);
  }); // hide if no role manager or role not compatible with required roles

  if (!hasRoleForService) return null;
  return /*#__PURE__*/react.createElement(Button/* default */.Z, {
    size: "small",
    onClick: handleClick
  }, role || "...");
}
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardServiceWidgetItem.tsx






function DashboardServiceWidgetItem(props) {
  var service = props.service;

  var _useRegisterUnpackedV = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(service.register(constants/* SystemReg.InstanceName */.ZJq.InstanceName), props),
      instanceName = _useRegisterUnpackedV[0];

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1,
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react.createElement(ServiceRole, {
    service: service
  })), instanceName && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    className: "no-pointer-events",
    variant: "caption",
    component: "span",
    style: {
      float: "right"
    }
  }, instanceName))), /*#__PURE__*/react.createElement(DashboardServiceWidget/* default */.ZP, props));
}
// EXTERNAL MODULE: ./src/components/DeviceActions.tsx
var DeviceActions = __webpack_require__(87993);
// EXTERNAL MODULE: ./src/components/RegisterInput.tsx + 2 modules
var RegisterInput = __webpack_require__(24162);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardServiceDetails.tsx






// filter out common registers
var ignoreRegisters = [constants/* SystemReg.StatusCode */.ZJq.StatusCode, constants/* SystemReg.StreamingPreferredInterval */.ZJq.StreamingPreferredInterval, constants/* SystemReg.StreamingSamples */.ZJq.StreamingSamples, constants/* SystemReg.StreamingInterval */.ZJq.StreamingInterval];
var collapsedRegisters = [constants/* SystemReg.Reading */.ZJq.Reading, constants/* SystemReg.Value */.ZJq.Value, constants/* SystemReg.Intensity */.ZJq.Intensity];
function DashboardServiceDetails(props) {
  var service = props.service,
      expanded = props.expanded,
      visible = props.visible;
  var specification = (0,useChange/* default */.Z)(service, function (spec) {
    return spec.specification;
  });
  var registers = (0,react.useMemo)(function () {
    var _packets$filter;

    var packets = specification === null || specification === void 0 ? void 0 : specification.packets;
    var ids = (packets === null || packets === void 0 ? void 0 : (_packets$filter = packets.filter(function (pkt) {
      return (0,spec/* isRegister */.x5)(pkt);
    })) === null || _packets$filter === void 0 ? void 0 : _packets$filter.map(function (pkt) {
      return pkt.identifier;
    })) || [];
    ids = ids.filter(function (id) {
      return ignoreRegisters.indexOf(id) < 0;
    });
    if (!expanded) // grab the first interresting register
      ids = ids.filter(function (id) {
        return collapsedRegisters.indexOf(id) > -1;
      }).slice(0, 1);
    return ids.map(function (id) {
      return service.register(id);
    }).filter(function (reg) {
      return !!reg;
    }) // hide optional const register without values
    .filter(function (reg) {
      var _reg$specification, _reg$specification2;

      return !((_reg$specification = reg.specification) !== null && _reg$specification !== void 0 && _reg$specification.optional) || ((_reg$specification2 = reg.specification) === null || _reg$specification2 === void 0 ? void 0 : _reg$specification2.kind) === "const" && reg.lastGetAttempts < constants/* REGISTER_OPTIONAL_POLL_COUNT */.Go2;
    });
  }, [specification, expanded]);
  if (!(registers !== null && registers !== void 0 && registers.length)) // nothing to see here
    return null;
  return /*#__PURE__*/react.createElement(react.Fragment, null, registers.map(function (register) {
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
      key: register.id,
      item: true,
      xs: true
    }, /*#__PURE__*/react.createElement(RegisterInput/* default */.Z, {
      register: register,
      showServiceName: true,
      showRegisterName: true,
      hideMissingValues: false,
      showTrend: false,
      visible: visible
    }));
  }));
}
// EXTERNAL MODULE: ./src/components/devices/useDeviceName.ts
var useDeviceName = __webpack_require__(5738);
;// CONCATENATED MODULE: ./src/components/hooks/useIntersectionObserver.ts

function useIntersectionObserver(elementRef, options) {
  var _useState = (0,react.useState)(),
      entry = _useState[0],
      setEntry = _useState[1];

  var _ref = options || {},
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0 : _ref$threshold,
      _ref$root = _ref.root,
      root = _ref$root === void 0 ? null : _ref$root,
      _ref$rootMargin = _ref.rootMargin,
      rootMargin = _ref$rootMargin === void 0 ? '0%' : _ref$rootMargin,
      freezeOnceVisible = _ref.freezeOnceVisible;

  var frozen = (entry === null || entry === void 0 ? void 0 : entry.isIntersecting) && freezeOnceVisible;

  var updateEntry = function updateEntry(_ref2) {
    var entry = _ref2[0];
    setEntry(entry);
  };

  (0,react.useEffect)(function () {
    var node = elementRef === null || elementRef === void 0 ? void 0 : elementRef.current; // DOM Ref

    var hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || frozen || !node) return;
    var observerParams = {
      threshold: threshold,
      root: root,
      rootMargin: rootMargin
    };
    var observer = new IntersectionObserver(updateEntry, observerParams); //console.log(`observe`, { node })

    observer.observe(node);
    return function () {
      return observer.disconnect();
    };
  }, [elementRef, threshold, root, rootMargin, frozen]);
  return entry;
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/node.ts
var node = __webpack_require__(60154);
// EXTERNAL MODULE: ./src/components/hooks/useMediaQueries.tsx
var useMediaQueries = __webpack_require__(20509);
// EXTERNAL MODULE: ./node_modules/notistack/dist/notistack.esm.js
var notistack_esm = __webpack_require__(70076);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardDevice.tsx





 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name












var ignoredServices = [constants/* SRV_CONTROL */.gm9, constants/* SRV_LOGGER */.w9j, constants/* SRV_SETTINGS */.B9b, constants/* SRV_PROTO_TEST */.$Bn];
function DashboardDevice(props) {
  var device = props.device,
      serviceFilter = props.serviceFilter,
      expanded = props.expanded,
      toggleExpanded = props.toggleExpanded,
      variant = props.variant,
      showAvatar = props.showAvatar,
      showHeader = props.showHeader;
  var name = (0,useDeviceName/* default */.Z)(device);
  var services = (0,useChange/* default */.Z)(device, function () {
    return device.services({
      specification: true
    }).filter(function (service) {
      return ignoredServices.indexOf(service.serviceClass) < 0;
    });
  });
  var specification = (0,useDeviceSpecification/* default */.Z)(device);

  var _useMediaQueries = (0,useMediaQueries/* default */.Z)(),
      mobile = _useMediaQueries.xs;

  var serviceGridRef = (0,react.useRef)();
  var intersection = useIntersectionObserver(serviceGridRef);
  var visible = !!(intersection !== null && intersection !== void 0 && intersection.isIntersecting);

  var _useSnackbar = (0,notistack_esm/* useSnackbar */.Ds)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  (0,react.useEffect)(function () {
    return device === null || device === void 0 ? void 0 : device.subscribe(constants/* RESTART */.d0K, function () {
      console.debug(device.shortId + " restarted...");
      enqueueSnackbar(device.shortId + " restarted...", {
        variant: "warning"
      });
    });
  });
  var ServiceWidgets = (0,react.useCallback)(function () {
    var _services$filter, _services$filter$filt;

    return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
      ref: serviceGridRef,
      component: "div",
      container: true,
      spacing: 2,
      justify: "center",
      alignItems: "flex-end",
      alignContent: "space-between"
    }, services === null || services === void 0 ? void 0 : (_services$filter = services.filter(function (srv) {
      return expanded || !srv.isMixin;
    })) === null || _services$filter === void 0 ? void 0 : (_services$filter$filt = _services$filter.filter(function (srv) {
      return !serviceFilter || serviceFilter(srv);
    })) === null || _services$filter$filt === void 0 ? void 0 : _services$filter$filt.map(function (service) {
      return /*#__PURE__*/react.createElement(DashboardServiceWidgetItem, {
        key: service.id,
        service: service,
        expanded: expanded,
        services: services,
        variant: variant,
        visible: visible
      });
    }));
  }, [(0,node/* dependencyId */.BX)(services), expanded, variant, visible]);
  if (!showHeader) return /*#__PURE__*/react.createElement(Paper/* default */.Z, {
    style: {
      padding: "0.25em"
    },
    variant: "outlined"
  }, /*#__PURE__*/react.createElement(ServiceWidgets, null));
  return /*#__PURE__*/react.createElement(Card/* default */.Z, {
    "aria-live": "polite",
    "aria-label": "device " + name + " started"
  }, /*#__PURE__*/react.createElement(CardHeader/* default */.Z, {
    style: {
      paddingBottom: 0
    },
    avatar: showAvatar && /*#__PURE__*/react.createElement(DeviceAvatar/* default */.Z, {
      device: device
    }),
    action: /*#__PURE__*/react.createElement(DeviceActions/* default */.Z, {
      device: device,
      showStop: expanded,
      hideIdentity: !expanded,
      showReset: expanded && !mobile,
      showSettings: expanded && !mobile
    }, toggleExpanded && /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
      onClick: toggleExpanded,
      title: expanded ? "Collapse" : "Expand"
    }, expanded ? /*#__PURE__*/react.createElement(ExpandLess/* default */.Z, null) : /*#__PURE__*/react.createElement(ExpandMore/* default */.Z, null))),
    title: /*#__PURE__*/react.createElement(DeviceName/* default */.Z, {
      showShortId: false,
      device: device
    }),
    subheader: /*#__PURE__*/react.createElement(react.Fragment, null, !mobile && specification && /*#__PURE__*/react.createElement(Typography/* default */.Z, {
      variant: "caption",
      gutterBottom: true
    }, specification.name))
  }), /*#__PURE__*/react.createElement(CardContent/* default */.Z, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/react.createElement(ServiceWidgets, null), expanded && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column",
    spacing: 1,
    alignContent: "stretch"
  }, services === null || services === void 0 ? void 0 : services.map(function (service) {
    return /*#__PURE__*/react.createElement(DashboardServiceDetails, {
      key: "details" + service.serviceIndex,
      service: service,
      services: services,
      expanded: expanded,
      variant: variant,
      visible: visible
    });
  }))));
}

/***/ }),

/***/ 40549:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useRoleManager; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20392);



function useRoleManager() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z),
      bus = _useContext.bus;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(bus.roleManager),
      mgr = _useState[0],
      setMgr = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return bus.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .ROLE_MANAGER_CHANGE */ .kqR, function () {
      return setMgr(bus.roleManager);
    });
  });
  return mgr;
}

/***/ })

}]);
//# sourceMappingURL=39504046960eea78697a10eb737b49eea4403ae4-7d4002a85b428ac11aa0.js.map