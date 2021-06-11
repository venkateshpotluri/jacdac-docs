(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1323],{

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

  _proto.lookupRegister = function lookupRegister(e) {
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
              serviceEnv = this.getService(e); // TODO: need to raise alert if service undefined

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
  }();

  _proto2.lookup = function lookup(e) {
    var roleName = this.getRootName(e);

    if (roleName === "$") {
      var _me = e;

      if (_me.property.type === "Identifier") {
        var _this$_globals$local;

        var local = _me.property.name;
        return (_this$_globals$local = this._globals[local]) === null || _this$_globals$local === void 0 ? void 0 : _this$_globals$local.value;
      }

      return undefined;
    }

    var serviceEnv = this.getService(e);
    var me = e;
    return serviceEnv.lookupRegister(me.property);
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

    function writeRegisterAsync(_x9, _x10) {
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
    for (var _i2 = 0, _Object$values2 = Object.values(this._envs); _i2 < _Object$values2.length; _i2++) {
      var vs = _Object$values2[_i2];
      vs.unmount();
    }
  };

  return VMEnvironment;
}(_jdom_eventsource__WEBPACK_IMPORTED_MODULE_3__/* .JDEventSource */ .a);

/***/ }),

/***/ 29870:
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js
var NoSsr = __webpack_require__(42862);
// EXTERNAL MODULE: ./src/components/blockly/BlockContext.tsx + 14 modules
var BlockContext = __webpack_require__(85379);
// EXTERNAL MODULE: ./src/components/blockly/BlockEditor.tsx + 3 modules
var BlockEditor = __webpack_require__(85105);
// EXTERNAL MODULE: ./src/components/blockly/dsl/variablesdsl.ts
var variablesdsl = __webpack_require__(86947);
// EXTERNAL MODULE: ./src/components/blockly/dsl/shadowdsl.ts
var shadowdsl = __webpack_require__(96958);
;// CONCATENATED MODULE: ./src/components/data-science/datadsl.ts
var colour = "#123456";
var DataScienceBlockDomainSpecificLanguage = /*#__PURE__*/function () {
  function DataScienceBlockDomainSpecificLanguage() {
    this.id = "dataScience";
  }

  var _proto = DataScienceBlockDomainSpecificLanguage.prototype;

  _proto.createBlocks = function createBlocks() {
    var blocks = [{
      kind: "block",
      type: "ds_some_event",
      message0: "some event",
      args0: [],
      inputsInline: true,
      nextStatement: null,
      colour: colour
    }, {
      kind: "block",
      type: "ds_some_block",
      message0: "some block data",
      args0: [],
      inputsInline: true,
      output: "Number",
      colour: colour
    }];
    return blocks;
  };

  _proto.createCategory = function createCategory() {
    return [{
      kind: "category",
      name: "Data Science",
      colour: colour,
      contents: [{
        kind: "block",
        type: "ds_some_event"
      }, {
        kind: "block",
        type: "ds_some_block"
      }]
    }];
  };

  return DataScienceBlockDomainSpecificLanguage;
}();
var dataDsl = new DataScienceBlockDomainSpecificLanguage();
/* harmony default export */ var datadsl = (dataDsl);
// EXTERNAL MODULE: ./src/components/blockly/dsl/fieldsdsl.ts
var fieldsdsl = __webpack_require__(76658);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(21258);
// EXTERNAL MODULE: ./src/components/blockly/BlockDiagnostics.tsx
var BlockDiagnostics = __webpack_require__(9370);
;// CONCATENATED MODULE: ./src/components/blockly/jsonvisitor.ts
function visitBlock(block, visitor) {
  var _visitor$visitBlock;

  if (!block) return;
  (_visitor$visitBlock = visitor.visitBlock) === null || _visitor$visitBlock === void 0 ? void 0 : _visitor$visitBlock.call(visitor, block);
  var inputs = block.inputs,
      children = block.children;
  inputs === null || inputs === void 0 ? void 0 : inputs.forEach(function (input) {
    return visitInput(input, visitor);
  });
  children === null || children === void 0 ? void 0 : children.forEach(function (child) {
    return visitBlock(child, visitor);
  });
}
function visitInput(input, visitor) {
  var _visitor$visitInput;

  if (!input) return;
  (_visitor$visitInput = visitor.visitInput) === null || _visitor$visitInput === void 0 ? void 0 : _visitor$visitInput.call(visitor, input);
  var fields = input.fields,
      child = input.child;
  if (fields) Object.keys(fields).map(function (k) {
    return visitField(k, fields[k], visitor);
  });
  visitBlock(child, visitor);
}
function visitField(name, field, visitor) {
  var _visitor$visitField;

  if (!field) return;
  (_visitor$visitField = visitor.visitField) === null || _visitor$visitField === void 0 ? void 0 : _visitor$visitField.call(visitor, name, field);
}
function visitWorkspace(workspace, visitor) {
  workspace === null || workspace === void 0 ? void 0 : workspace.blocks.forEach(function (block) {
    return visitBlock(block, visitor);
  });
}
;// CONCATENATED MODULE: ./src/components/data-science/DSBlockEditor.tsx











var DS_SOURCE_STORAGE_KEY = "data-science-blockly-xml";

function DSEditorWithContext() {
  // block context handles hosting blockly
  var _useContext = (0,react.useContext)(BlockContext/* default */.C),
      workspaceJSON = _useContext.workspaceJSON; // run this when workspaceJSON changes


  (0,react.useEffect)(function () {
    visitWorkspace(workspaceJSON, {
      visitBlock: function visitBlock(block) {
        return console.log("block " + block.type, {
          block: block
        });
      },
      visitInput: function visitInput(input) {
        return console.log("input " + input.name, {
          input: input
        });
      },
      visitField: function visitField(name, field) {
        return console.log("field " + name + ": " + field.value, {
          field: field
        });
      }
    });
  }, [workspaceJSON]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(BlockEditor/* default */.Z, null), flags/* default.diagnostics */.Z.diagnostics && /*#__PURE__*/react.createElement(BlockDiagnostics/* default */.Z, null));
}

function DScienceEditor() {
  var dsls = (0,react.useMemo)(function () {
    return [datadsl, variablesdsl/* default */.Z, shadowdsl/* default */.Z, fieldsdsl/* default */.Z];
  }, []);
  return /*#__PURE__*/react.createElement(NoSsr/* default */.Z, null, /*#__PURE__*/react.createElement(BlockContext/* BlockProvider */.Z, {
    storageKey: DS_SOURCE_STORAGE_KEY,
    dsls: dsls
  }, /*#__PURE__*/react.createElement(DSEditorWithContext, null)));
}
;// CONCATENATED MODULE: ./src/pages/tools/data-science-editor.tsx


function Page() {
  return /*#__PURE__*/react.createElement(DScienceEditor, null);
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-data-science-editor-tsx-b19ff66e4c59ce6952ef.js.map