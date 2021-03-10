(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "1waj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports.default = _default;

/***/ }),

/***/ "2RYT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Page; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createMuiTheme.js + 14 modules
var createMuiTheme = __webpack_require__("viY9");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js + 1 modules
var responsiveFontSizes = __webpack_require__("q4d2");

// EXTERNAL MODULE: ./src/components/ui/ThemedLayout.tsx + 3 modules
var ThemedLayout = __webpack_require__("kxJ/");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__("r9w1");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Delete.js
var Delete = __webpack_require__("FrwU");
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./src/components/AddServiceIconButton.tsx
var AddServiceIconButton = __webpack_require__("T7k7");

// EXTERNAL MODULE: ./src/components/ServiceSpecificationSelect.tsx
var ServiceSpecificationSelect = __webpack_require__("8uQ5");

// EXTERNAL MODULE: ./jacdac-ts/src/azure-iot/dtdl.ts
var dtdl = __webpack_require__("tyJ9");

// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__("l6uw");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("vuIU");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("JX7q");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__("dI71");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/client.ts
var jdom_client = __webpack_require__("v+ZI");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/iframeclient.ts
var iframeclient = __webpack_require__("olu4");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__("W9jF");

// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__("yNWl");

// CONCATENATED MODULE: ./src/components/makecode/MakeCodeEditorExtensionClient.ts





function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var READ = "read";
var MESSAGE_PACKET = "messagepacket";
var HIDDEN = "hidden";
var SHOWN = "shown";
var SENDER = "jacdac-editor-extension";
var MakeCodeEditorExtensionClient_MakeCodeEditorExtensionClient = /*#__PURE__*/function (_JDClient) {
  Object(inheritsLoose["a" /* default */])(MakeCodeEditorExtensionClient, _JDClient);

  // full apptarget
  function MakeCodeEditorExtensionClient() {
    var _this;

    _this = _JDClient.call(this) || this;
    _this.pendingCommands = {};
    _this.extensionId = Object(iframeclient["b" /* inIFrame */])() ? window.location.hash.substr(1) : undefined;
    _this._connected = false;
    _this._visible = false;
    _this.nextRequestId = 1;
    _this.handleMessage = _this.handleMessage.bind(Object(assertThisInitialized["a" /* default */])(_this));

    if (typeof window !== "undefined") {
      window.addEventListener("message", _this.handleMessage, false);

      _this.mount(function () {
        return window.removeEventListener("message", _this.handleMessage);
      });
    } // always refresh on load


    _this.on(SHOWN, function () {
      return _this.refresh();
    }); // notify parent that we're ready


    _this.init();

    return _this;
  }

  var _proto = MakeCodeEditorExtensionClient.prototype;

  _proto.setVisible = function setVisible(vis) {
    if (this._visible !== vis) {
      this._visible = vis;
      this.emit(constants["s" /* CHANGE */]);
    }
  };

  _proto.mkRequest = function mkRequest(resolve, reject, action, body) {
    var id = "jd_" + this.nextRequestId++;
    this.pendingCommands[id] = {
      action: action,
      resolve: resolve,
      reject: reject
    };
    return {
      type: "pxtpkgext",
      action: action,
      extId: this.extensionId,
      response: true,
      id: id,
      body: body
    };
  };

  _proto.sendRequest = function sendRequest(action, body) {
    var _this2 = this;

    this.log("send " + action);
    if (!this.extensionId) return Promise.resolve(undefined);
    return new Promise(function (resolve, reject) {
      var msg = _this2.mkRequest(resolve, reject, action, body);

      window.parent.postMessage(msg, "*");
    });
  };

  _proto.handleMessage = function handleMessage(ev) {
    var msg = ev.data;
    if ((msg === null || msg === void 0 ? void 0 : msg.type) !== "pxtpkgext") return;

    if (!msg.id) {
      switch (msg.event) {
        case "extinit":
          this.log("init");
          this._target = msg.target;
          this._connected = true;
          this.emit(constants["E" /* CONNECT */]);
          this.emit(constants["s" /* CHANGE */]);
          break;

        case "extloaded":
          this.log("loaded");
          break;

        case "extshown":
          this.setVisible(true);
          this.emit(SHOWN);
          this.emit(constants["s" /* CHANGE */]);
          break;

        case "exthidden":
          this.setVisible(false);
          this.emit(HIDDEN);
          this.emit(constants["s" /* CHANGE */]);
          break;

        case "extdatastream":
          this.emit('datastream', true);
          break;

        case "extconsole":
          this.emit('console', msg.body);
          break;

        case "extmessagepacket":
          this.emit(MESSAGE_PACKET, msg.body);
          break;

        default:
          console.debug("Unhandled event", msg);
      }
    } else {
      var _ref = this.pendingCommands[msg.id] || {},
          action = _ref.action,
          resolve = _ref.resolve,
          reject = _ref.reject;

      delete this.pendingCommands[msg.id];
      if (msg.success && resolve) resolve(msg.resp);else if (!msg.success && reject) reject(msg.resp); // raise event as well

      switch (action) {
        case "extinit":
          this._connected = true;
          this.emit(constants["E" /* CONNECT */]);
          this.emit(constants["s" /* CHANGE */]);
          break;

        case "extusercode":
          // Loaded, set the target
          this.emit('readuser', msg.resp);
          this.emit(constants["s" /* CHANGE */]);
          break;

        case "extreadcode":
          // Loaded, set the target
          this.emit(READ, msg.resp);
          this.emit(constants["s" /* CHANGE */]);
          break;

        case "extwritecode":
          this.emit('written', undefined);
          break;
      }
    }
  };

  _proto.init = /*#__PURE__*/function () {
    var _init = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.log("initializing");
              _context.next = 3;
              return this.sendRequest('extinit');

            case 3:
              this.log("connected");
              _context.next = 6;
              return this.refresh();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function init() {
      return _init.apply(this, arguments);
    }

    return init;
  }();

  _proto.refresh = /*#__PURE__*/function () {
    var _refresh = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      var r;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.log("refresh");
              _context2.next = 3;
              return this.read();

            case 3:
              r = _context2.sent;

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function refresh() {
      return _refresh.apply(this, arguments);
    }

    return refresh;
  }();

  _proto.read = /*#__PURE__*/function () {
    var _read = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
      var r, _resp;

      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (this.extensionId) {
                _context3.next = 6;
                break;
              }

              r = {};
              this.emit(READ, r);
              return _context3.abrupt("return", r);

            case 6:
              _context3.next = 8;
              return this.sendRequest('extreadcode');

            case 8:
              _resp = _context3.sent;
              return _context3.abrupt("return", _resp);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function read() {
      return _read.apply(this, arguments);
    }

    return read;
  }();

  _proto.readUser = /*#__PURE__*/function () {
    var _readUser = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
      return regenerator_default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.sendRequest('extusercode');

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function readUser() {
      return _readUser.apply(this, arguments);
    }

    return readUser;
  }();

  _proto.write = /*#__PURE__*/function () {
    var _write = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee5(code, json, jres, dependencies) {
      return regenerator_default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (this.extensionId) {
                _context5.next = 4;
                break;
              }

              // Write to local storage instead
              this.emit('written', undefined);
              _context5.next = 6;
              break;

            case 4:
              _context5.next = 6;
              return this.sendRequest('extwritecode', {
                code: code || undefined,
                json: json || undefined,
                jres: jres || undefined,
                dependencies: dependencies
              });

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function write(_x, _x2, _x3, _x4) {
      return _write.apply(this, arguments);
    }

    return write;
  }();

  _proto.queryPermission = /*#__PURE__*/function () {
    var _queryPermission = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee6() {
      return regenerator_default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.sendRequest('extquerypermission');

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function queryPermission() {
      return _queryPermission.apply(this, arguments);
    }

    return queryPermission;
  }();

  _proto.requestPermission = /*#__PURE__*/function () {
    var _requestPermission = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee7(console) {
      return regenerator_default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.sendRequest('extrequestpermission', {
                console: console
              });

            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function requestPermission(_x5) {
      return _requestPermission.apply(this, arguments);
    }

    return requestPermission;
  }();

  _proto.dataStreamConsole = /*#__PURE__*/function () {
    var _dataStreamConsole = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee8(console) {
      return regenerator_default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.sendRequest('extdatastream', {
                console: console
              });

            case 2:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function dataStreamConsole(_x6) {
      return _dataStreamConsole.apply(this, arguments);
    }

    return dataStreamConsole;
  }();

  _proto.dataStreamMessages = /*#__PURE__*/function () {
    var _dataStreamMessages = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee9(messages) {
      return regenerator_default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this.sendRequest('extdatastream', {
                messages: messages
              });

            case 2:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function dataStreamMessages(_x7) {
      return _dataStreamMessages.apply(this, arguments);
    }

    return dataStreamMessages;
  }();

  Object(createClass["a" /* default */])(MakeCodeEditorExtensionClient, [{
    key: "target",
    get: function get() {
      return this._target;
    }
  }, {
    key: "connected",
    get: function get() {
      return this._connected;
    }
  }, {
    key: "visible",
    get: function get() {
      return this._visible;
    }
  }]);

  return MakeCodeEditorExtensionClient;
}(jdom_client["a" /* JDClient */]);
function useMakeCodeEditorExtensionClient() {
  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var _useState = Object(react["useState"])(undefined),
      client = _useState[0],
      setClient = _useState[1];

  Object(react["useEffect"])(function () {
    console.log("mkcd: new editor client");
    var c = new MakeCodeEditorExtensionClient_MakeCodeEditorExtensionClient();
    c.on(constants["E" /* CONNECT */], function () {
      console.log("mkcd: stream messages");
      c.dataStreamMessages(true);
    });
    c.on([HIDDEN, SHOWN], function () {
      return bus.clear();
    });
    c.on(MESSAGE_PACKET, function (msg) {
      if (msg.channel === "jacdac" && msg.source !== SENDER) {
        var pkts = packet["a" /* default */].fromFrame(msg.data, bus.timestamp);

        for (var _iterator = _createForOfIteratorHelperLoose(pkts), _step; !(_step = _iterator()).done;) {
          var pkt = _step.value;
          pkt.sender = msg.source || "makecode";
          bus.processPacket(pkt);
        }
      }
    });
    setClient(c);
    return function () {
      return c === null || c === void 0 ? void 0 : c.unmount();
    };
  }, []);
  return client;
}
// EXTERNAL MODULE: ./src/components/CmdButton.tsx + 58 modules
var CmdButton = __webpack_require__("mv/Z");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Save.js
var Save = __webpack_require__("hQyO");
var Save_default = /*#__PURE__*/__webpack_require__.n(Save);

// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__("A5xw");

// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__("W1g9");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/makecode.ts
var makecode = __webpack_require__("ys11");

// CONCATENATED MODULE: ./src/components/makecode/MakeCodeEditorExtension.tsx





 // tslint:disable-next-line: no-submodule-imports match-default-export-name








 // tslint:disable-next-line: no-submodule-imports match-default-export-name






function toTypescript(config) {
  var ns = "myModules";
  return "// auto-generated, do not edit.\nnamespace " + ns + " {\n" + config.roles.map(function (role) {
    return "\n    //% fixedInstance block=\"" + role.name + "\"\n    export const " + Object(jdspec["c" /* camelize */])(role.name) + " = new " + Object(makecode["c" /* resolveMakecodeServiceFromClassIdentifier */])(role.service).client.qName + "(\"" + Object(jdspec["c" /* camelize */])(role.name) + "\");\n";
  }).join("") + "\n\n    // start after main\n    control.runInParallel(function() {\n        " + config.roles.map(function (role) {
    return "    " + ns + "." + Object(jdspec["c" /* camelize */])(role.name) + ".start();\n        ";
  }).join("") + "\n    })\n}\n    ";
}

function toDependencies(config) {
  var r = {};
  config === null || config === void 0 ? void 0 : config.roles.forEach(function (role) {
    var mk = Object(makecode["c" /* resolveMakecodeServiceFromClassIdentifier */])(role.service);
    r[mk.client.name] = "github:" + mk.client.repo;
  });
  return r;
}

function toJSON(config) {
  return config && JSON.stringify(config, null, 4);
}

function ClientRoleRow(props) {
  var component = props.component,
      onUpdate = props.onUpdate,
      config = props.config;
  var name = component.name,
      service = component.service;

  var _useMemo = Object(react["useMemo"])(function () {
    return validateClientRole(config, component);
  }, [config, component]),
      nameError = _useMemo.nameError,
      serviceError = _useMemo.serviceError;

  var textId = Object(react_use_id_hook_esm["b" /* useId */])();

  var handleComponentNameChange = function handleComponentNameChange(ev) {
    component.name = Object(dtdl["c" /* escapeName */])(ev.target.value);
    onUpdate();
  };

  var handleSetService = function handleSetService(serviceClass) {
    component.service = serviceClass;
    onUpdate();
  };

  var handleComponentDelete = function handleComponentDelete() {
    config.roles.splice(config.roles.indexOf(component), 1);
    onUpdate();
  };

  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 4,
    md: 6
  }, /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
    id: textId,
    fullWidth: true,
    error: !!nameError,
    variant: "outlined",
    label: "name",
    helperText: nameError,
    value: name,
    onChange: handleComponentNameChange
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 4,
    md: 4
  }, /*#__PURE__*/react_default.a.createElement(ServiceSpecificationSelect["a" /* default */], {
    variant: "outlined",
    label: "service",
    serviceClass: service,
    setServiceClass: handleSetService,
    error: serviceError
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(IconButtonWithTooltip["a" /* default */], {
    title: "Remove service",
    onClick: handleComponentDelete
  }, /*#__PURE__*/react_default.a.createElement(Delete_default.a, null)))));
} // eslint-disable-next-line @typescript-eslint/no-unused-vars


function validateClientRole(config, role) {
  var serviceError = undefined;
  var nameError = undefined; // TODO

  return {
    serviceError: serviceError,
    nameError: nameError
  };
}

function MakeCodeEditorExtension() {
  var _configuration$roles;

  var client = useMakeCodeEditorExtensionClient();
  var connected = Object(useChange["a" /* default */])(client, function (c) {
    return c === null || c === void 0 ? void 0 : c.connected;
  });

  var _useState = Object(react["useState"])({
    roles: []
  }),
      configuration = _useState[0],
      setConfiguration = _useState[1];

  Object(react["useEffect"])(function () {
    return client === null || client === void 0 ? void 0 : client.subscribe(READ, function (resp) {
      console.log("mkcd: read received");
      var cfg = Object(utils["b" /* JSONTryParse */])(resp.json);
      console.log({
        resp: resp,
        cfg: cfg
      });
      if (cfg) setConfiguration(cfg);
    });
  }, [client]);

  var hasMakeCodeService = function hasMakeCodeService(srv) {
    return !!Object(makecode["b" /* resolveMakecodeService */])(srv);
  };

  var update = function update() {
    setConfiguration(Object(utils["m" /* clone */])(configuration));
  };

  var handleAddService = function handleAddService(service) {
    if (!configuration.roles) configuration.roles = [];
    var names = configuration.roles.map(function (c) {
      return c.name;
    }).concat(Object(spec["F" /* serviceSpecifications */])().map(function (spec) {
      return spec.camelName;
    })).filter(function (n) {
      return !!n;
    });
    configuration.roles.push({
      name: Object(utils["ab" /* uniqueName */])(names, service.camelName || service.shortId),
      service: service.classIdentifier
    });
    update();
  };

  var handleSave = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var ts, json, deps;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ts = toTypescript(configuration);
              json = toJSON(configuration);
              deps = toDependencies(configuration);
              console.log("mkcd: saving...");
              _context.next = 6;
              return client.write(ts, json, undefined, deps);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSave() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    direction: "row",
    spacing: 2
  }, (_configuration$roles = configuration.roles) === null || _configuration$roles === void 0 ? void 0 : _configuration$roles.map(function (c, i) {
    return /*#__PURE__*/react_default.a.createElement(ClientRoleRow, {
      key: "config" + i,
      config: configuration,
      component: c,
      onUpdate: update
    });
  }), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(AddServiceIconButton["a" /* default */], {
    serviceFilter: hasMakeCodeService,
    onAdd: handleAddService
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(CmdButton["a" /* default */], {
    trackName: "makecode.save",
    variant: "contained",
    disabled: !connected,
    icon: /*#__PURE__*/react_default.a.createElement(Save_default.a, null),
    onClick: handleSave
  }, "save")));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./src/components/ui/PaperBox.tsx
var PaperBox = __webpack_require__("YbiL");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__("c5x+");

// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__("geQJ");

// CONCATENATED MODULE: ./src/components/makecode/MakeCodeEditorExtensionPage.tsx








var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    content: {
      display: 'flex',
      minHeight: '100vh',
      minWidth: '10rem',
      flexDirection: 'column',
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      flexGrow: 1
    }
  });
});
function MakeCodeEditorExtensionPage() {
  var _useContext = Object(react["useContext"])(DarkModeContext["a" /* default */]),
      toggleDarkMode = _useContext.toggleDarkMode;

  var rawTheme = Object(createMuiTheme["a" /* default */])({
    palette: {
      primary: {
        main: '#2e7d32'
      },
      secondary: {
        main: '#ffc400'
      },
      contrastThreshold: 5.1,
      type: 'dark'
    }
  });
  var classes = useStyles();
  var theme = Object(responsiveFontSizes["a" /* default */])(rawTheme);
  Object(react["useEffect"])(function () {
    flags["a" /* default */].webUSB = false;
    toggleDarkMode('dark');
  }, []);
  return /*#__PURE__*/react_default.a.createElement(ThemedLayout["a" /* default */], {
    theme: theme
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.content
  }, /*#__PURE__*/react_default.a.createElement(PaperBox["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(MakeCodeEditorExtension, null))));
}
// CONCATENATED MODULE: ./src/pages/tools/makecode-editor-extension.tsx


function Page() {
  return /*#__PURE__*/react_default.a.createElement(MakeCodeEditorExtensionPage, null);
}

/***/ }),

/***/ "8uQ5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceSpecificationSelect; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("R/WZ");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZBNC");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("r9w1");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("jjAL");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Z8Ma");



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function () {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    root: {
      minWidth: "18rem"
    }
  });
});
function ServiceSpecificationSelect(props) {
  var label = props.label,
      serviceClass = props.serviceClass,
      setServiceClass = props.setServiceClass,
      variant = props.variant,
      fullWidth = props.fullWidth,
      error = props.error;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('select-' + Math.random()),
      labelId = _useState[0];

  var classes = useStyles();
  var specs = Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_5__[/* serviceSpecifications */ "F"])().filter(function (spec) {
    return !/^_/.test(spec.shortId);
  });

  var handleChange = function handleChange(event) {
    return setServiceClass(parseInt(event.target.value));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    id: labelId,
    className: classes.root,
    label: label,
    error: !!error,
    helperText: error,
    value: serviceClass,
    select: true,
    variant: variant,
    fullWidth: fullWidth,
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    key: "none",
    value: "NaN"
  }, "No service selected"), specs.map(function (spec) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      key: spec.classIdentifier,
      value: spec.classIdentifier
    }, spec.name);
  }));
}

/***/ }),

/***/ "FrwU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.default = _default;

/***/ }),

/***/ "T7k7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddServiceIconButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("gd/W");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jjAL");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ofer");
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Z8Ma");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1waj");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("l6uw");
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("W1g9");


 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports



function AddServiceIconButton(props) {
  var error = props.error,
      onAdd = props.onAdd,
      children = props.children,
      serviceFilter = props.serviceFilter;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null),
      servicesAnchorEl = _React$useState[0],
      setServicesAnchorEl = _React$useState[1];

  var servicesMenuId = Object(react_use_id_hook__WEBPACK_IMPORTED_MODULE_7__[/* useId */ "b"])();
  var services = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_4__[/* serviceSpecifications */ "F"])().filter(function (srv) {
      return !Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_4__[/* isInfrastructure */ "k"])(srv);
    }).filter(function (srv) {
      return !serviceFilter || serviceFilter(srv);
    });
  }, [serviceFilter]);

  var handleServiceAddClick = function handleServiceAddClick(event) {
    setServicesAnchorEl(event.currentTarget);
  };

  var handleServiceAddClose = function handleServiceAddClose(id) {
    return function () {
      setServicesAnchorEl(null);

      if (id !== undefined) {
        var srv = Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_4__[/* serviceSpecificationFromClassIdentifier */ "D"])(id);
        onAdd(srv);
      }
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    title: "Add a service",
    "aria-controls": servicesMenuId,
    "aria-haspopup": "true",
    onClick: handleServiceAddClick
  }, children || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    id: servicesMenuId,
    anchorEl: servicesAnchorEl,
    keepMounted: true,
    open: Boolean(servicesAnchorEl),
    onClose: handleServiceAddClose(undefined)
  }, services.map(function (srv) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      key: srv.classIdentifier,
      value: srv.classIdentifier.toString(16),
      onClick: handleServiceAddClose(srv.classIdentifier)
    }, srv.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    variant: "caption",
    color: error ? "error" : "inherit",
    component: "div"
  }, error || "Select one or more services."));
}

/***/ }),

/***/ "VRkU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMounted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMounted() {
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []);
  return function () {
    return mounted.current;
  };
}

/***/ }),

/***/ "XZ9v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strShimFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return strShimObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return strShimUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return strShimPrototype; });
/* unused harmony export strShimHasOwnProperty */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return objCreateFn; });
/* unused harmony export __assignFn */
/* unused harmony export __extendsFn */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var strShimFunction = "function";
var strShimObject = "object";
var strShimUndefined = "undefined";
var strShimPrototype = "prototype";
var strShimHasOwnProperty = "hasOwnProperty";
/**
 * Returns the current global scope object, for a normal web page this will be the current
 * window, for a Web Worker this will be current worker global scope via "self". The internal
 * implementation returns the first available instance object in the following order
 * - globalThis (New standard)
 * - self (Will return the current window instance for supported browsers)
 * - window (fallback for older browser implementations)
 * - global (NodeJS standard)
 * - <null> (When all else fails)
 * While the return type is a Window for the normal case, not all environments will support all
 * of the properties or functions.
 */

function getGlobal() {
  if (typeof globalThis !== strShimUndefined && globalThis) {
    return globalThis;
  }

  if (typeof self !== strShimUndefined && self) {
    return self;
  }

  if (typeof window !== strShimUndefined && window) {
    return window;
  }

  if (typeof global !== strShimUndefined && global) {
    return global;
  }

  return null;
}
/**
 * Creates an object that has the specified prototype, and that optionally contains specified properties. This helper exists to avoid adding a polyfil
 * for older browsers that do not define Object.create eg. ES3 only, IE8 just in case any page checks for presence/absence of the prototype implementation.
 * Note: For consistency this will not use the Object.create implementation if it exists as this would cause a testing requirement to test with and without the implementations
 * @param obj Object to use as a prototype. May be null
 */

function objCreateFn(obj) {
  var func = Object["create"]; // Use build in Object.create

  if (func) {
    // Use Object create method if it exists
    return func(obj);
  }

  if (obj == null) {
    return {};
  }

  var type = typeof obj;

  if (type !== strShimObject && type !== strShimFunction) {
    throw new TypeError('Object prototype may only be an Object:' + obj);
  }

  function tmpFunc() {}

  tmpFunc[strShimPrototype] = obj;
  return new tmpFunc();
}
function __assignFn(t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];

    for (var p in s) {
      if (Object[strShimPrototype][strShimHasOwnProperty].call(s, p)) {
        t[p] = s[p];
      }
    }
  }

  return t;
} // tslint:disable-next-line: only-arrow-functions

var _extendStaticsFn = function __extendStaticsFn(d, b) {
  _extendStaticsFn = Object["setPrototypeOf"] || // tslint:disable-next-line: only-arrow-functions
  {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || // tslint:disable-next-line: only-arrow-functions
  function (d, b) {
    for (var p in b) {
      if (b[strShimHasOwnProperty](p)) {
        d[p] = b[p];
      }
    }
  };

  return _extendStaticsFn(d, b);
};

function __extendsFn(d, b) {
  _extendStaticsFn(d, b);

  function __() {
    this.constructor = d;
  } // tslint:disable-next-line: ban-comma-operator


  d[strShimPrototype] = b === null ? objCreateFn(b) : (__[strShimPrototype] = b[strShimPrototype], new __());
}
var globalObj = getGlobal() || {}; // tslint:disable: only-arrow-functions

(function (root, assignFn, extendsFn) {
  // Assign the globally scoped versions of the functions -- used when consuming individual ts files
  // If check is to support NativeScript where these are marked as readonly
  if (!root.__assign) {
    root.__assign = Object.assign || assignFn;
  }

  if (!root.__extends) {
    root.__extends = extendsFn;
  }
})(globalObj, __assignFn, __extendsFn); // Assign local variables that will be used for embedded scenarios, if check is to support NativeScript where these are marked as readonly


if (!__assign) {
  __assign = globalObj.__assign;
}

if (!__extends) {
  __extends = globalObj.__extends;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "YbiL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperBox; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zLVn");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tr08");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hlFM");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("kKAo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



function PaperBox(props) {
  var children = props.children,
      padding = props.padding,
      elevation = props.elevation,
      bgcolor = props.bgcolor,
      others = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(props, ["children", "padding", "elevation", "bgcolor"]);

  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({}, others, {
    bgcolor: bgcolor,
    mb: theme.spacing(0.25)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    square: true,
    elevation: elevation
  }, padding !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    p: theme.spacing(padding || 0.25)
  }, children), padding === 0 && children));
}

/***/ }),

/***/ "hQyO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
}), 'Save');

exports.default = _default;

/***/ }),

/***/ "jjAL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ff2n");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rePB");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wx14");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("H2TA");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("tVbE");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, theme.typography.body1, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: 'border-box',
      width: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }, theme.breakpoints.up('sm'), {
      minHeight: 'auto'
    })),
    // TODO v5: remove

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: {},

    /* Styles applied to the root element if `selected={true}`. */
    selected: {},

    /* Styles applied to the root element if dense. */
    dense: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, theme.typography.body2, {
      minHeight: 'auto'
    })
  };
};
var MenuItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function MenuItem(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      component = _props$component === void 0 ? 'li' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      ListItemClasses = props.ListItemClasses,
      _props$role = props.role,
      role = _props$role === void 0 ? 'menuitem' : _props$role,
      selected = props.selected,
      tabIndexProp = props.tabIndex,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(props, ["classes", "className", "component", "disableGutters", "ListItemClasses", "role", "selected", "tabIndex"]);

  var tabIndex;

  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_ListItem__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
    button: true,
    role: role,
    tabIndex: tabIndex,
    component: component,
    selected: selected,
    disableGutters: disableGutters,
    classes: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
      dense: classes.dense
    }, ListItemClasses),
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.root, className, selected && classes.selected, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(styles, {
  name: 'MuiMenuItem'
})(MenuItem));

/***/ }),

/***/ "lPg6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
}), 'Error');

exports.default = _default;

/***/ }),

/***/ "mv/Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CmdButton; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__("ye/S");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__("2K/c");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Error.js
var icons_Error = __webpack_require__("lPg6");
var Error_default = /*#__PURE__*/__webpack_require__.n(icons_Error);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__("l6uw");

// EXTERNAL MODULE: ./node_modules/@microsoft/applicationinsights-shims/dist-esm/applicationinsights-shims.js
var applicationinsights_shims = __webpack_require__("XZ9v");

// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/EnvUtils.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.



/**
 * This file exists to hold environment utilities that are requied to check and
 * validate the current operating environment. Unless otherwise required, please
 * only defined methods (functions) in this class so that users of these
 * functions/properties only need to include those that are used within their own modules.
 */

var strUndefined = applicationinsights_shims["f" /* strShimUndefined */];
var strObject = applicationinsights_shims["d" /* strShimObject */];
var strPrototype = applicationinsights_shims["e" /* strShimPrototype */];
var strFunction = applicationinsights_shims["c" /* strShimFunction */];
var strWindow = "window";
var strDocument = "document";
var strNavigator = "navigator";
var strHistory = "history";
var strLocation = "location";
var strConsole = "console";
var strPerformance = "performance";
var strJSON = "JSON";
var strCrypto = "crypto";
var strMsCrypto = "msCrypto";
var strReactNative = "ReactNative";
/**
 * Returns the current global scope object, for a normal web page this will be the current
 * window, for a Web Worker this will be current worker global scope via "self". The internal
 * implementation returns the first available instance object in the following order
 * - globalThis (New standard)
 * - self (Will return the current window instance for supported browsers)
 * - window (fallback for older browser implementations)
 * - global (NodeJS standard)
 * - <null> (When all else fails)
 * While the return type is a Window for the normal case, not all environments will support all
 * of the properties or functions.
 */

var getGlobal = applicationinsights_shims["a" /* getGlobal */];
/**
 * Return the named global object if available, will return null if the object is not available.
 * @param name The globally named object
 */

function getGlobalInst(name) {
  var gbl = getGlobal();

  if (gbl && gbl[name]) {
    return gbl[name];
  } // Test workaround, for environments where <global>.window (when global == window) doesn't return the base window


  if (name === strWindow && hasWindow()) {
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    return window;
  }

  return null;
}
/**
 * Checks if window object is available, this is required as we support the API running without a
 * window /document (eg. Node server, electron webworkers) and if we attempt to assign a window
 * object to a local variable or pass as an argument an "Uncaught ReferenceError: window is not defined"
 * exception will be thrown.
 * Defined as a function to support lazy / late binding environments.
 */

function hasWindow() {
  return Boolean(typeof window === strObject && window);
}
/**
 * Returns the global window object if it is present otherwise null.
 * This helper is used to access the window object without causing an exception
 * "Uncaught ReferenceError: window is not defined"
 */

function getWindow() {
  if (hasWindow()) {
    return window;
  } // Return the global instance or null


  return getGlobalInst(strWindow);
}
/**
 * Checks if document object is available, this is required as we support the API running without a
 * window /document (eg. Node server, electron webworkers) and if we attempt to assign a document
 * object to a local variable or pass as an argument an "Uncaught ReferenceError: document is not defined"
 * exception will be thrown.
 * Defined as a function to support lazy / late binding environments.
 */

function hasDocument() {
  return Boolean(typeof document === strObject && document);
}
/**
 * Returns the global document object if it is present otherwise null.
 * This helper is used to access the document object without causing an exception
 * "Uncaught ReferenceError: document is not defined"
 */

function getDocument() {
  if (hasDocument()) {
    return document;
  }

  return getGlobalInst(strDocument);
}
/**
 * Checks if navigator object is available, this is required as we support the API running without a
 * window /document (eg. Node server, electron webworkers) and if we attempt to assign a navigator
 * object to a local variable or pass as an argument an "Uncaught ReferenceError: navigator is not defined"
 * exception will be thrown.
 * Defined as a function to support lazy / late binding environments.
 */

function hasNavigator() {
  return Boolean(typeof navigator === strObject && navigator);
}
/**
 * Returns the global navigator object if it is present otherwise null.
 * This helper is used to access the navigator object without causing an exception
 * "Uncaught ReferenceError: navigator is not defined"
 */

function getNavigator() {
  if (hasNavigator()) {
    return navigator;
  }

  return getGlobalInst(strNavigator);
}
/**
 * Checks if history object is available, this is required as we support the API running without a
 * window /document (eg. Node server, electron webworkers) and if we attempt to assign a history
 * object to a local variable or pass as an argument an "Uncaught ReferenceError: history is not defined"
 * exception will be thrown.
 * Defined as a function to support lazy / late binding environments.
 */

function hasHistory() {
  return Boolean(typeof history === strObject && history);
}
/**
 * Returns the global history object if it is present otherwise null.
 * This helper is used to access the history object without causing an exception
 * "Uncaught ReferenceError: history is not defined"
 */

function getHistory() {
  if (hasHistory()) {
    return history;
  }

  return getGlobalInst(strHistory);
}
/**
 * Returns the global location object if it is present otherwise null.
 * This helper is used to access the location object without causing an exception
 * "Uncaught ReferenceError: location is not defined"
 */

function getLocation() {
  if (typeof location === strObject && location) {
    return location;
  }

  return getGlobalInst(strLocation);
}
/**
 * Returns the global console object
 */

function getConsole() {
  if (typeof console !== strUndefined) {
    return console;
  }

  return getGlobalInst(strConsole);
}
/**
 * Returns the performance object if it is present otherwise null.
 * This helper is used to access the performance object from the current
 * global instance which could be window or globalThis for a web worker
 */

function getPerformance() {
  return getGlobalInst(strPerformance);
}
/**
 * Checks if JSON object is available, this is required as we support the API running without a
 * window /document (eg. Node server, electron webworkers) and if we attempt to assign a history
 * object to a local variable or pass as an argument an "Uncaught ReferenceError: JSON is not defined"
 * exception will be thrown.
 * Defined as a function to support lazy / late binding environments.
 */

function hasJSON() {
  return Boolean(typeof JSON === strObject && JSON || getGlobalInst(strJSON) !== null);
}
/**
 * Returns the global JSON object if it is present otherwise null.
 * This helper is used to access the JSON object without causing an exception
 * "Uncaught ReferenceError: JSON is not defined"
 */

function getJSON() {
  if (hasJSON()) {
    return JSON || getGlobalInst(strJSON);
  }

  return null;
}
/**
 * Returns the crypto object if it is present otherwise null.
 * This helper is used to access the crypto object from the current
 * global instance which could be window or globalThis for a web worker
 */

function getCrypto() {
  return getGlobalInst(strCrypto);
}
/**
 * Returns the crypto object if it is present otherwise null.
 * This helper is used to access the crypto object from the current
 * global instance which could be window or globalThis for a web worker
 */

function getMsCrypto() {
  return getGlobalInst(strMsCrypto);
}
/**
 * Returns whether the environment is reporting that we are running in a React Native Environment
 */

function isReactNative() {
  // If running in React Native, navigator.product will be populated
  var nav = getNavigator();

  if (nav && nav.product) {
    return nav.product === strReactNative;
  }

  return false;
}
// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/CoreUtils.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.



 // Added to help with minfication

var Undefined = applicationinsights_shims["f" /* strShimUndefined */];
var strOnPrefix = "on";
var strAttachEvent = "attachEvent";
var strAddEventHelper = "addEventListener";
var strDetachEvent = "detachEvent";
var strRemoveEventListener = "removeEventListener";
var UInt32Mask = 0x100000000;
var MaxUInt32 = 0xffffffff;
var _isTrident = null; // MWC based Random generator (for IE)

var _mwcSeeded = false;
var _mwcW = 123456789;
var _mwcZ = 987654321; // Takes any integer

function _mwcSeed(seedValue) {
  if (seedValue < 0) {
    // Make sure we end up with a positive number and not -ve one.
    seedValue >>>= 0;
  }

  _mwcW = 123456789 + seedValue & MaxUInt32;
  _mwcZ = 987654321 - seedValue & MaxUInt32;
  _mwcSeeded = true;
}

function _autoSeedMwc() {
  // Simple initialization using default Math.random() - So we inherit any entropy from the browser
  // and bitwise XOR with the current milliseconds
  _mwcSeed(Math.random() * UInt32Mask ^ new Date().getTime());
}

function _isTypeof(value, theType) {
  return typeof value === theType;
}

;

function _isUndefined(value) {
  return _isTypeof(value, applicationinsights_shims["f" /* strShimUndefined */]) || value === undefined;
}

;

function _isNullOrUndefined(value) {
  return _isUndefined(value) || value === null;
}

function _hasOwnProperty(obj, prop) {
  return obj && Object[applicationinsights_shims["e" /* strShimPrototype */]].hasOwnProperty.call(obj, prop);
}

;

function _isObject(value) {
  return _isTypeof(value, applicationinsights_shims["d" /* strShimObject */]);
}

;

function _isFunction(value) {
  return _isTypeof(value, applicationinsights_shims["c" /* strShimFunction */]);
}

;
/**
 * Binds the specified function to an event, so that the function gets called whenever the event fires on the object
 * @param obj Object to add the event too.
 * @param eventNameWithoutOn String that specifies any of the standard DHTML Events without "on" prefix
 * @param handlerRef Pointer that specifies the function to call when event fires
 * @param useCapture [Optional] Defaults to false
 * @returns True if the function was bound successfully to the event, otherwise false
 */

function _attachEvent(obj, eventNameWithoutOn, handlerRef, useCapture) {
  if (useCapture === void 0) {
    useCapture = false;
  }

  var result = false;

  if (!_isNullOrUndefined(obj)) {
    try {
      if (!_isNullOrUndefined(obj[strAddEventHelper])) {
        // all browsers except IE before version 9
        obj[strAddEventHelper](eventNameWithoutOn, handlerRef, useCapture);
        result = true;
      } else if (!_isNullOrUndefined(obj[strAttachEvent])) {
        // IE before version 9                    
        obj[strAttachEvent](strOnPrefix + eventNameWithoutOn, handlerRef);
        result = true;
      }
    } catch (e) {// Just Ignore any error so that we don't break any execution path
    }
  }

  return result;
}
/**
 * Removes an event handler for the specified event
 * @param Object to remove the event from
 * @param eventNameWithoutOn {string} - The name of the event
 * @param handlerRef {any} - The callback function that needs to be executed for the given event
 * @param useCapture [Optional] Defaults to false
 */


function _detachEvent(obj, eventNameWithoutOn, handlerRef, useCapture) {
  if (useCapture === void 0) {
    useCapture = false;
  }

  if (!_isNullOrUndefined(obj)) {
    try {
      if (!_isNullOrUndefined(obj[strRemoveEventListener])) {
        obj[strRemoveEventListener](eventNameWithoutOn, handlerRef, useCapture);
      } else if (!_isNullOrUndefined(obj[strDetachEvent])) {
        obj[strDetachEvent](strOnPrefix + eventNameWithoutOn, handlerRef);
      }
    } catch (e) {// Just Ignore any error so that we don't break any execution path
    }
  }
}
/**
 * Try to define get/set object property accessors for the target object/prototype, this will provide compatibility with
 * existing API definition when run within an ES5+ container that supports accessors but still enable the code to be loaded
 * and executed in an ES3 container, providing basic IE8 compatibility.
 * @param target The object on which to define the property.
 * @param prop The name of the property to be defined or modified.
 * @param getProp The getter function to wire against the getter.
 * @param setProp The setter function to wire against the setter.
 * @returns True if it was able to create the accessors otherwise false
 */


function objDefineAccessors(target, prop, getProp, setProp) {
  var defineProp = Object["defineProperty"];

  if (defineProp) {
    try {
      var descriptor = {
        enumerable: true,
        configurable: true
      };

      if (getProp) {
        descriptor.get = getProp;
      }

      if (setProp) {
        descriptor.set = setProp;
      }

      defineProp(target, prop, descriptor);
      return true;
    } catch (e) {// IE8 Defines a defineProperty on Object but it's only supported for DOM elements so it will throw
      // We will just ignore this here.
    }
  }

  return false;
}
/**
 * Validates that the string name conforms to the JS IdentifierName specification and if not
 * normalizes the name so that it would. This method does not identify or change any keywords
 * meaning that if you pass in a known keyword the same value will be returned.
 * This is a simplified version
 * @param name The name to validate
 */

function normalizeJsName(name) {
  var value = name;
  var match = /([^\w\d_$])/g;

  if (match.test(name)) {
    value = name.replace(match, "_");
  }

  return value;
}
/**
 * This is a helper function for the equivalent of arForEach(objKeys(target), callbackFn), this is a
 * performance optimization to avoid the creation of a new array for large objects
 * @param target The target object to find and process the keys
 * @param callbackfn The function to call with the details
 */

function objForEachKey(target, callbackfn) {
  if (target && _isObject(target)) {
    for (var prop in target) {
      if (_hasOwnProperty(target, prop)) {
        callbackfn.call(target, prop, target[prop]);
      }
    }
  }
}
/**
 * Effectively assigns all enumerable properties (not just own properties) and functions (including inherited prototype) from
 * the source object to the target, it attempts to use proxy getters / setters (if possible) and proxy functions to avoid potential
 * implementation issues by assigning prototype functions as instance ones
 *
 * This method is the primary method used to "update" the snippet proxy with the ultimate implementations.
 *
 * Special ES3 Notes:
 * Updates (setting) of direct property values on the target or indirectly on the source object WILL NOT WORK PROPERLY, updates to the
 * properties of "referenced" object will work (target.context.newValue = 10 => will be reflected in the source.context as it's the
 * same object). ES3 Failures: assigning target.myProp = 3 -> Won't change source.myProp = 3, likewise the reverse would also fail.
 * @param target - The target object to be assigned with the source properties and functions
 * @param source - The source object which will be assigned / called by setting / calling the targets proxies
 * @param chkSet - An optional callback to determine whether a specific property/function should be proxied
 * @memberof Initialization
 */

function proxyAssign(target, source, chkSet) {
  if (target && source && target !== source && _isObject(target) && _isObject(source)) {
    var _loop_1 = function _loop_1(field) {
      if (CoreUtils_CoreUtils.isString(field)) {
        var value = source[field];

        if (_isFunction(value)) {
          if (!chkSet || chkSet(field, true, source, target)) {
            // Create a proxy function rather than just copying the (possible) prototype to the new object as an instance function
            target[field] = function (funcName) {
              return function () {
                // Capture the original arguments passed to the method
                var originalArguments = arguments;
                return source[funcName].apply(source, originalArguments);
              };
            }(field);
          }
        } else if (!chkSet || chkSet(field, false, source, target)) {
          if (_hasOwnProperty(target, field)) {
            // Remove any previous instance property
            delete target[field];
          }

          if (!objDefineAccessors(target, field, function () {
            return source[field];
          }, function (theValue) {
            source[field] = theValue;
          })) {
            // Unable to create an accessor, so just assign the values as a fallback
            // -- this will (mostly) work for objects
            // -- but will fail for accessing primitives (if the source changes it) and all types of "setters" as the source won't be modified
            target[field] = value;
          }
        }
      }
    }; // effectively apply/proxy full source to the target instance


    for (var field in source) {
      _loop_1(field);
    }
  }

  return target;
}

var CoreUtils_CoreUtils =
/** @class */
function () {
  function CoreUtils() {}
  /**
   * Check if an object is of type Date
   */


  CoreUtils.isDate = function (obj) {
    return Object[applicationinsights_shims["e" /* strShimPrototype */]].toString.call(obj) === "[object Date]";
  };
  /**
   * Check if an object is of type Array
   */


  CoreUtils.isArray = function (obj) {
    return Object[applicationinsights_shims["e" /* strShimPrototype */]].toString.call(obj) === "[object Array]";
  };
  /**
   * Check if an object is of type Error
   */


  CoreUtils.isError = function (obj) {
    return Object[applicationinsights_shims["e" /* strShimPrototype */]].toString.call(obj) === "[object Error]";
  };
  /**
   * Checks if the type of value is a string.
   * @param {any} value - Value to be checked.
   * @return {boolean} True if the value is a string, false otherwise.
   */


  CoreUtils.isString = function (value) {
    return _isTypeof(value, "string");
  };
  /**
   * Checks if the type of value is a number.
   * @param {any} value - Value to be checked.
   * @return {boolean} True if the value is a number, false otherwise.
   */


  CoreUtils.isNumber = function (value) {
    return _isTypeof(value, "number");
  };
  /**
   * Checks if the type of value is a boolean.
   * @param {any} value - Value to be checked.
   * @return {boolean} True if the value is a boolean, false otherwise.
   */


  CoreUtils.isBoolean = function (value) {
    return _isTypeof(value, "boolean");
  };
  /**
   * Creates a new GUID.
   * @return {string} A GUID.
   */


  CoreUtils.disableCookies = function () {
    CoreUtils._canUseCookies = false;
  };

  CoreUtils.newGuid = function () {
    function randomHexDigit() {
      return CoreUtils.randomValue(15); // Get a random value from 0..15
    }

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(GuidRegex, function (c) {
      var r = randomHexDigit() | 0,
          v = c === 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  };
  /**
   * Convert a date to I.S.O. format in IE8
   */


  CoreUtils.toISOString = function (date) {
    if (CoreUtils.isDate(date)) {
      var pad = function pad(num) {
        var r = String(num);

        if (r.length === 1) {
          r = "0" + r;
        }

        return r;
      };

      return date.getUTCFullYear() + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate()) + "T" + pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + "." + String((date.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5) + "Z";
    }
  };
  /**
   * Performs the specified action for each element in an array. This helper exists to avoid adding a polyfil for older browsers
   * that do not define Array.prototype.xxxx (eg. ES3 only, IE8) just in case any page checks for presence/absence of the prototype
   * implementation. Note: For consistency this will not use the Array.prototype.xxxx implementation if it exists as this would
   * cause a testing requirement to test with and without the implementations
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg  [Optional] An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */


  CoreUtils.arrForEach = function (arr, callbackfn, thisArg) {
    var len = arr.length;

    for (var idx = 0; idx < len; idx++) {
      if (idx in arr) {
        callbackfn.call(thisArg || arr, arr[idx], idx, arr);
      }
    }
  };
  /**
   * Returns the index of the first occurrence of a value in an array. This helper exists to avoid adding a polyfil for older browsers
   * that do not define Array.prototype.xxxx (eg. ES3 only, IE8) just in case any page checks for presence/absence of the prototype
   * implementation. Note: For consistency this will not use the Array.prototype.xxxx implementation if it exists as this would
   * cause a testing requirement to test with and without the implementations
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */


  CoreUtils.arrIndexOf = function (arr, searchElement, fromIndex) {
    var len = arr.length;
    var from = fromIndex || 0;

    for (var lp = Math.max(from >= 0 ? from : len - Math.abs(from), 0); lp < len; lp++) {
      if (lp in arr && arr[lp] === searchElement) {
        return lp;
      }
    }

    return -1;
  };
  /**
   * Calls a defined callback function on each element of an array, and returns an array that contains the results. This helper exists
   * to avoid adding a polyfil for older browsers that do not define Array.prototype.xxxx (eg. ES3 only, IE8) just in case any page
   * checks for presence/absence of the prototype implementation. Note: For consistency this will not use the Array.prototype.xxxx
   * implementation if it exists as this would cause a testing requirement to test with and without the implementations
   * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */


  CoreUtils.arrMap = function (arr, callbackfn, thisArg) {
    var len = arr.length;

    var _this = thisArg || arr;

    var results = new Array(len);

    for (var lp = 0; lp < len; lp++) {
      if (lp in arr) {
        results[lp] = callbackfn.call(_this, arr[lp], arr);
      }
    }

    return results;
  };
  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is
   * provided as an argument in the next call to the callback function. This helper exists to avoid adding a polyfil for older browsers that do not define
   * Array.prototype.xxxx (eg. ES3 only, IE8) just in case any page checks for presence/absence of the prototype implementation. Note: For consistency
   * this will not use the Array.prototype.xxxx implementation if it exists as this would cause a testing requirement to test with and without the implementations
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */


  CoreUtils.arrReduce = function (arr, callbackfn, initialValue) {
    var len = arr.length;
    var lp = 0;
    var value; // Specifically checking the number of passed arguments as the value could be anything

    if (arguments.length >= 3) {
      value = arguments[2];
    } else {
      while (lp < len && !(lp in arr)) {
        lp++;
      }

      value = arr[lp++];
    }

    while (lp < len) {
      if (lp in arr) {
        value = callbackfn(value, arr[lp], lp, arr);
      }

      lp++;
    }

    return value;
  };
  /**
   * helper method to trim strings (IE8 does not implement String.prototype.trim)
   */


  CoreUtils.strTrim = function (str) {
    if (!CoreUtils.isString(str)) {
      return str;
    }

    return str.replace(/^\s+|\s+$/g, "");
  };
  /**
   * Returns the names of the enumerable string properties and methods of an object. This helper exists to avoid adding a polyfil for older browsers
   * that do not define Object.keys eg. ES3 only, IE8 just in case any page checks for presence/absence of the prototype implementation.
   * Note: For consistency this will not use the Object.keys implementation if it exists as this would cause a testing requirement to test with and without the implementations
   * @param obj Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */


  CoreUtils.objKeys = function (obj) {
    var hasDontEnumBug = !{
      toString: null
    }.propertyIsEnumerable('toString');

    if (!_isFunction(obj) && (!_isObject(obj) || obj === null)) {
      throw new TypeError('objKeys called on non-object');
    }

    var result = [];

    for (var prop in obj) {
      if (_hasOwnProperty(obj, prop)) {
        result.push(prop);
      }
    }

    if (hasDontEnumBug) {
      var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
      var dontEnumsLength = dontEnums.length;

      for (var lp = 0; lp < dontEnumsLength; lp++) {
        if (_hasOwnProperty(obj, dontEnums[lp])) {
          result.push(dontEnums[lp]);
        }
      }
    }

    return result;
  };
  /**
   * Trys to add an event handler for the specified event to the window, body and document
   * @param eventName {string} - The name of the event
   * @param callback {any} - The callback function that needs to be executed for the given event
   * @return {boolean} - true if the handler was successfully added
   */


  CoreUtils.addEventHandler = function (eventName, callback) {
    var result = false;
    var w = getWindow();

    if (w) {
      result = _attachEvent(w, eventName, callback);
      result = _attachEvent(w["body"], eventName, callback) || result;
    }

    var doc = getDocument();

    if (doc) {
      result = EventHelper.Attach(doc, eventName, callback) || result;
    }

    return result;
  };
  /**
   * Return the current time via the Date now() function (if available) and falls back to (new Date()).getTime() if now() is unavailable (IE8 or less)
   * https://caniuse.com/#search=Date.now
   */


  CoreUtils.dateNow = function () {
    var dt = Date;

    if (dt.now) {
      return dt.now();
    }

    return new dt().getTime();
  };
  /**
   * Return the current value of the Performance Api now() function (if available) and fallback to CoreUtils.dateNow() if it is unavailable (IE9 or less)
   * https://caniuse.com/#search=performance.now
   */


  CoreUtils.perfNow = function () {
    var perf = getPerformance();

    if (perf && perf.now) {
      return perf.now();
    }

    return CoreUtils.dateNow();
  };
  /**
   * Generate random base64 id string.
   * The default length is 22 which is 132-bits so almost the same as a GUID but as base64 (the previous default was 5)
   * @param maxLength - Optional value to specify the length of the id to be generated, defaults to 22
   */


  CoreUtils.newId = function (maxLength) {
    if (maxLength === void 0) {
      maxLength = 22;
    }

    var base64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; // Start with an initial random number, consuming the value in reverse byte order

    var number = CoreUtils.random32() >>> 0; // Make sure it's a +ve number

    var chars = 0;
    var result = "";

    while (result.length < maxLength) {
      chars++;
      result += base64chars.charAt(number & 0x3F);
      number >>>= 6; // Zero fill with right shift

      if (chars === 5) {
        // 5 base64 characters === 30 bits so we don't have enough bits for another base64 char
        // So add on another 30 bits and make sure it's +ve
        number = (CoreUtils.random32() << 2 & 0xFFFFFFFF | number & 0x03) >>> 0;
        chars = 0; // We need to reset the number every 5 chars (30 bits)
      }
    }

    return result;
  };
  /**
   * Identifies whether the current environment appears to be IE
   */


  CoreUtils.isIE = function () {
    if (_isTrident === null) {
      var navigator_1 = getNavigator() || {};
      var userAgent = (navigator_1.userAgent || "").toLowerCase();
      _isTrident = userAgent.indexOf("msie") !== -1 || userAgent.indexOf("trident/") !== -1;
    }

    return _isTrident;
  };
  /**
   * Generate a random value between 0 and maxValue, max value should be limited to a 32-bit maximum.
   * So maxValue(16) will produce a number from 0..16 (range of 17)
   * @param maxValue
   */


  CoreUtils.randomValue = function (maxValue) {
    if (maxValue > 0) {
      return Math.floor(CoreUtils.random32() / MaxUInt32 * (maxValue + 1)) >>> 0;
    }

    return 0;
  };
  /**
   * generate a random 32-bit number (0x000000..0xFFFFFFFF) or (-0x80000000..0x7FFFFFFF), defaults un-unsigned.
   * @param signed - True to return a signed 32-bit number (-0x80000000..0x7FFFFFFF) otherwise an unsigned one (0x000000..0xFFFFFFFF)
   */


  CoreUtils.random32 = function (signed) {
    var value;
    var c = getCrypto() || getMsCrypto();

    if (c && c.getRandomValues) {
      // Make sure the number is converted into the specified range (-0x80000000..0x7FFFFFFF)
      value = c.getRandomValues(new Uint32Array(1))[0] & MaxUInt32;
    } else if (CoreUtils.isIE()) {
      // For IE 6, 7, 8 (especially on XP) Math.random is not very random
      if (!_mwcSeeded) {
        // Set the seed for the Mwc algorithm
        _autoSeedMwc();
      } // Don't use Math.random for IE
      // Make sure the number is converted into the specified range (-0x80000000..0x7FFFFFFF)


      value = CoreUtils.mwcRandom32() & MaxUInt32;
    } else {
      // Make sure the number is converted into the specified range (-0x80000000..0x7FFFFFFF)
      value = Math.floor(UInt32Mask * Math.random() | 0);
    }

    if (!signed) {
      // Make sure we end up with a positive number and not -ve one.
      value >>>= 0;
    }

    return value;
  };
  /**
   * Seed the MWC random number generator with the specified seed or a random value
   * @param value - optional the number to used as the seed, if undefined, null or zero a random value will be chosen
   */


  CoreUtils.mwcRandomSeed = function (value) {
    if (!value) {
      _autoSeedMwc();
    } else {
      _mwcSeed(value);
    }
  };
  /**
   * Generate a random 32-bit number between (0x000000..0xFFFFFFFF) or (-0x80000000..0x7FFFFFFF), using MWC (Multiply with carry)
   * instead of Math.random() defaults to un-signed.
   * Used as a replacement random generator for IE to avoid issues with older IE instances.
   * @param signed - True to return a signed 32-bit number (-0x80000000..0x7FFFFFFF) otherwise an unsigned one (0x000000..0xFFFFFFFF)
   */


  CoreUtils.mwcRandom32 = function (signed) {
    _mwcZ = 36969 * (_mwcZ & 0xFFFF) + (_mwcZ >> 16) & MaxUInt32;
    _mwcW = 18000 * (_mwcW & 0xFFFF) + (_mwcW >> 16) & MaxUInt32;
    var value = (_mwcZ << 16) + (_mwcW & 0xFFFF) >>> 0 & MaxUInt32 | 0;

    if (!signed) {
      // Make sure we end up with a positive number and not -ve one.
      value >>>= 0;
    }

    return value;
  };
  /**
   * generate W3C trace id
   */


  CoreUtils.generateW3CId = function () {
    var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]; // rfc4122 version 4 UUID without dashes and with lowercase letters

    var oct = "",
        tmp;

    for (var a = 0; a < 4; a++) {
      tmp = CoreUtils.random32();
      oct += hexValues[tmp & 0xF] + hexValues[tmp >> 4 & 0xF] + hexValues[tmp >> 8 & 0xF] + hexValues[tmp >> 12 & 0xF] + hexValues[tmp >> 16 & 0xF] + hexValues[tmp >> 20 & 0xF] + hexValues[tmp >> 24 & 0xF] + hexValues[tmp >> 28 & 0xF];
    } // "Set the two most significant bits (bits 6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively"


    var clockSequenceHi = hexValues[8 + (CoreUtils.random32() & 0x03) | 0];
    return oct.substr(0, 8) + oct.substr(9, 4) + "4" + oct.substr(13, 3) + clockSequenceHi + oct.substr(16, 3) + oct.substr(19, 12);
  };

  CoreUtils.isTypeof = _isTypeof;
  CoreUtils.isUndefined = _isUndefined;
  CoreUtils.isNullOrUndefined = _isNullOrUndefined;
  CoreUtils.hasOwnProperty = _hasOwnProperty;
  /**
   * Checks if the passed of value is a function.
   * @param {any} value - Value to be checked.
   * @return {boolean} True if the value is a boolean, false otherwise.
   */

  CoreUtils.isFunction = _isFunction;
  /**
   * Checks if the passed of value is a function.
   * @param {any} value - Value to be checked.
   * @return {boolean} True if the value is a boolean, false otherwise.
   */

  CoreUtils.isObject = _isObject;
  /**
   * Creates an object that has the specified prototype, and that optionally contains specified properties. This helper exists to avoid adding a polyfil
   * for older browsers that do not define Object.create eg. ES3 only, IE8 just in case any page checks for presence/absence of the prototype implementation.
   * Note: For consistency this will not use the Object.create implementation if it exists as this would cause a testing requirement to test with and without the implementations
   * @param obj Object to use as a prototype. May be null
   */
  // tslint:disable-next-line: member-ordering

  CoreUtils.objCreate = applicationinsights_shims["b" /* objCreateFn */];
  /**
   * Try to define get/set object property accessors for the target object/prototype, this will provide compatibility with
   * existing API definition when run within an ES5+ container that supports accessors but still enable the code to be loaded
   * and executed in an ES3 container, providing basic IE8 compatibility.
   * @param target The object on which to define the property.
   * @param prop The name of the property to be defined or modified.
   * @param getProp The getter function to wire against the getter.
   * @param setProp The setter function to wire against the setter.
   * @returns True if it was able to create the accessors otherwise false
   */

  CoreUtils.objDefineAccessors = objDefineAccessors;
  return CoreUtils;
}();


var GuidRegex = /[xy]/g;

var EventHelper =
/** @class */
function () {
  function EventHelper() {}
  /**
   * Binds the specified function to an event, so that the function gets called whenever the event fires on the object
   * @param obj Object to add the event too.
   * @param eventNameWithoutOn String that specifies any of the standard DHTML Events without "on" prefix
   * @param handlerRef Pointer that specifies the function to call when event fires
   * @returns True if the function was bound successfully to the event, otherwise false
   */


  EventHelper.Attach = _attachEvent;
  /**
   * Binds the specified function to an event, so that the function gets called whenever the event fires on the object
   * @deprecated Use {@link EventHelper#Attach} as we are already in a class call EventHelper the extra "Event" just causes a larger result
   * @param obj Object to add the event too.
   * @param eventNameWithoutOn String that specifies any of the standard DHTML Events without "on" prefix
   * @param handlerRef Pointer that specifies the function to call when event fires
   * @returns True if the function was bound successfully to the event, otherwise false
   */

  EventHelper.AttachEvent = _attachEvent;
  /**
   * Removes an event handler for the specified event
   * @param eventName {string} - The name of the event
   * @param callback {any} - The callback function that needs to be executed for the given event
   * @return {boolean} - true if the handler was successfully added
   */

  EventHelper.Detach = _detachEvent;
  /**
   * Removes an event handler for the specified event
   * @deprecated Use {@link EventHelper#Detach} as we are already in a class call EventHelper the extra "Event" just causes a larger result
   * @param eventName {string} - The name of the event
   * @param callback {any} - The callback function that needs to be executed for the given event
   * @return {boolean} - true if the handler was successfully added
   */

  EventHelper.DetachEvent = _detachEvent;
  return EventHelper;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK.Enums/LoggingEnums.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var LoggingSeverity;

(function (LoggingSeverity) {
  /**
   * Error will be sent as internal telemetry
   */
  LoggingSeverity[LoggingSeverity["CRITICAL"] = 1] = "CRITICAL";
  /**
   * Error will NOT be sent as internal telemetry, and will only be shown in browser console
   */

  LoggingSeverity[LoggingSeverity["WARNING"] = 2] = "WARNING";
})(LoggingSeverity || (LoggingSeverity = {}));
/**
 * Internal message ID. Please create a new one for every conceptually different message. Please keep alphabetically ordered
 */


var _InternalMessageId = {
  // Non user actionable
  BrowserDoesNotSupportLocalStorage: 0,
  BrowserCannotReadLocalStorage: 1,
  BrowserCannotReadSessionStorage: 2,
  BrowserCannotWriteLocalStorage: 3,
  BrowserCannotWriteSessionStorage: 4,
  BrowserFailedRemovalFromLocalStorage: 5,
  BrowserFailedRemovalFromSessionStorage: 6,
  CannotSendEmptyTelemetry: 7,
  ClientPerformanceMathError: 8,
  ErrorParsingAISessionCookie: 9,
  ErrorPVCalc: 10,
  ExceptionWhileLoggingError: 11,
  FailedAddingTelemetryToBuffer: 12,
  FailedMonitorAjaxAbort: 13,
  FailedMonitorAjaxDur: 14,
  FailedMonitorAjaxOpen: 15,
  FailedMonitorAjaxRSC: 16,
  FailedMonitorAjaxSend: 17,
  FailedMonitorAjaxGetCorrelationHeader: 18,
  FailedToAddHandlerForOnBeforeUnload: 19,
  FailedToSendQueuedTelemetry: 20,
  FailedToReportDataLoss: 21,
  FlushFailed: 22,
  MessageLimitPerPVExceeded: 23,
  MissingRequiredFieldSpecification: 24,
  NavigationTimingNotSupported: 25,
  OnError: 26,
  SessionRenewalDateIsZero: 27,
  SenderNotInitialized: 28,
  StartTrackEventFailed: 29,
  StopTrackEventFailed: 30,
  StartTrackFailed: 31,
  StopTrackFailed: 32,
  TelemetrySampledAndNotSent: 33,
  TrackEventFailed: 34,
  TrackExceptionFailed: 35,
  TrackMetricFailed: 36,
  TrackPVFailed: 37,
  TrackPVFailedCalc: 38,
  TrackTraceFailed: 39,
  TransmissionFailed: 40,
  FailedToSetStorageBuffer: 41,
  FailedToRestoreStorageBuffer: 42,
  InvalidBackendResponse: 43,
  FailedToFixDepricatedValues: 44,
  InvalidDurationValue: 45,
  TelemetryEnvelopeInvalid: 46,
  CreateEnvelopeError: 47,
  // User actionable
  CannotSerializeObject: 48,
  CannotSerializeObjectNonSerializable: 49,
  CircularReferenceDetected: 50,
  ClearAuthContextFailed: 51,
  ExceptionTruncated: 52,
  IllegalCharsInName: 53,
  ItemNotInArray: 54,
  MaxAjaxPerPVExceeded: 55,
  MessageTruncated: 56,
  NameTooLong: 57,
  SampleRateOutOfRange: 58,
  SetAuthContextFailed: 59,
  SetAuthContextFailedAccountName: 60,
  StringValueTooLong: 61,
  StartCalledMoreThanOnce: 62,
  StopCalledWithoutStart: 63,
  TelemetryInitializerFailed: 64,
  TrackArgumentsNotSpecified: 65,
  UrlTooLong: 66,
  SessionStorageBufferFull: 67,
  CannotAccessCookie: 68,
  IdTooLong: 69,
  InvalidEvent: 70,
  FailedMonitorAjaxSetRequestHeader: 71,
  SendBrowserInfoOnUserInit: 72,
  PluginException: 73,
  NotificationException: 74,
  SnippetScriptLoadFailure: 99,
  InvalidInstrumentationKey: 100,
  CannotParseAiBlobValue: 101,
  InvalidContentBlob: 102,
  TrackPageActionEventFailed: 103
};
// CONCATENATED MODULE: ./node_modules/@microsoft/dynamicproto-js/lib/dist/esm/dynamicproto-js.js
/*!
 * Microsoft Dynamic Proto Utility, 1.1.0
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */

/**
 * Constant string defined to support minimization
 * @ignore
 */
var Constructor = 'constructor';
/**
 * Constant string defined to support minimization
 * @ignore
 */

var Prototype = 'prototype';
/**
 * Constant string defined to support minimization
 * @ignore
 */

var dynamicproto_js_strFunction = 'function';
/**
 * Used to define the name of the instance function lookup table
 * @ignore
 */

var DynInstFuncTable = '_dynInstFuncs';
/**
 * Name used to tag the dynamic prototype function
 * @ignore
 */

var DynProxyTag = '_isDynProxy';
/**
 * Name added to a prototype to define the dynamic prototype "class" name used to lookup the function table
 * @ignore
 */

var DynClassName = '_dynClass';
/**
 * Prefix added to the classname to avoid any name clashes with other instance level properties
 * @ignore
 */

var DynClassNamePrefix = '_dynCls$';
/**
 * A tag which is used to check if we have already to attempted to set the instance function if one is not present
 * @ignore
 */

var DynInstChkTag = '_dynInstChk';
/**
 * A tag which is used to check if we are allows to try and set an instance function is one is not present. Using the same
 * tag name as the function level but a different const name for readability only.
 */

var DynAllowInstChkTag = DynInstChkTag;
/**
 * The global (imported) instances where the global performance options are stored
 */

var DynProtoDefaultOptions = '_dfOpts';
/**
 * Value used as the name of a class when it cannot be determined
 * @ignore
 */

var UnknownValue = '_unknown_';
/**
 * Constant string defined to support minimization
 * @ignore
 */

var str__Proto = "__proto__";
/**
 * Constant string defined to support minimization
 * @ignore
 */

var strUseBaseInst = 'useBaseInst';
/**
 * Constant string defined to support minimization
 * @ignore
 */

var strSetInstFuncs = 'setInstFuncs';
/**
 * Pre-lookup to check if we are running on a modern browser (i.e. not IE8)
 * @ignore
 */

var _objGetPrototypeOf = Object["getPrototypeOf"];
/**
 * Internal Global used to generate a unique dynamic class name, every new class will increase this value
 * @ignore
 */

var _dynamicNames = 0;
/**
 * Helper to check if the object contains a property of the name
 * @ignore
 */

function dynamicproto_js_hasOwnProperty(obj, prop) {
  return obj && Object[Prototype].hasOwnProperty.call(obj, prop);
}
/**
 * Checks if the passed of value is a function.
 * @param {any} value - Value to be checked.
 * @return {boolean} True if the value is a boolean, false otherwise.
 * @ignore
 */


function dynamicproto_js_isFunction(value) {
  return typeof value === dynamicproto_js_strFunction;
}
/**
 * Helper used to check whether the target is an Object prototype or Array prototype
 * @ignore
 */


function _isObjectOrArrayPrototype(target) {
  return target && (target === Object[Prototype] || target === Array[Prototype]);
}
/**
 * Helper used to check whether the target is an Object prototype, Array prototype or Function prototype
 * @ignore
 */


function _isObjectArrayOrFunctionPrototype(target) {
  return _isObjectOrArrayPrototype(target) || target === Function[Prototype];
}
/**
 * Helper used to get the prototype of the target object as getPrototypeOf is not available in an ES3 environment.
 * @ignore
 */


function _getObjProto(target) {
  if (target) {
    // This method doesn't existing in older browsers (e.g. IE8)
    if (_objGetPrototypeOf) {
      return _objGetPrototypeOf(target);
    } // target[Constructor] May break if the constructor has been changed or removed


    var newProto = target[str__Proto] || target[Prototype] || target[Constructor];

    if (newProto) {
      return newProto;
    }
  }

  return null;
}
/**
 * Helper function to check whether the provided function name is a potential candidate for dynamic
 * callback and prototype generation.
 * @param target The target object, may be a prototype or class object
 * @param funcName The function name
 * @param skipOwn Skips the check for own property
 * @ignore
 */


function _isDynamicCandidate(target, funcName, skipOwn) {
  return funcName !== Constructor && dynamicproto_js_isFunction(target[funcName]) && (skipOwn || dynamicproto_js_hasOwnProperty(target, funcName));
}
/**
 * Helper to throw a TypeError exception
 * @param message the message
 * @ignore
 */


function _throwTypeError(message) {
  throw new TypeError("DynamicProto: " + message);
}
/**
 * Returns a collection of the instance functions that are defined directly on the thisTarget object, it does
 * not return any inherited functions
 * @param thisTarget The object to get the instance functions from
 * @ignore
 */


function _getInstanceFuncs(thisTarget) {
  // Get the base proto
  var instFuncs = {}; // Save any existing instance functions

  for (var name in thisTarget) {
    // Don't include any dynamic prototype instances - as we only want the real functions
    if (!instFuncs[name] && _isDynamicCandidate(thisTarget, name, false)) {
      // Create an instance callback for passing the base function to the caller
      instFuncs[name] = thisTarget[name];
    }
  }

  return instFuncs;
}
/**
 * Returns whether the value is included in the array
 * @param values The array of values
 * @param value  The value
 */


function _hasVisited(values, value) {
  for (var lp = values.length - 1; lp >= 0; lp--) {
    if (values[lp] === value) {
      return true;
    }
  }

  return false;
}
/**
 * Returns an object that contains callback functions for all "base/super" functions, this is used to "save"
 * enabling calling super.xxx() functions without requiring that the base "class" has defined a prototype references
 * @param target The current instance
 * @ignore
 */


function _getBaseFuncs(classProto, thisTarget, instFuncs, useBaseInst) {
  function _instFuncProxy(target, funcHost, funcName) {
    var theFunc = funcHost[name];

    if (theFunc[DynProxyTag] && useBaseInst) {
      // grab and reuse the hosted looking function (if available) otherwise the original passed function
      var instFuncTable = target[DynInstFuncTable] || {};

      if (instFuncTable[DynAllowInstChkTag] !== false) {
        theFunc = (instFuncTable[funcHost[DynClassName]] || {})[funcName] || theFunc;
      }
    }

    return function () {
      return theFunc.apply(target, arguments);
    };
  } // Start creating a new baseFuncs by creating proxies for the instance functions (as they may get replaced)


  var baseFuncs = {};

  for (var name in instFuncs) {
    // Create an instance callback for passing the base function to the caller
    baseFuncs[name] = _instFuncProxy(thisTarget, instFuncs, name);
  } // Get the base prototype functions


  var baseProto = _getObjProto(classProto);

  var visited = []; // Don't include base object functions for Object, Array or Function

  while (baseProto && !_isObjectArrayOrFunctionPrototype(baseProto) && !_hasVisited(visited, baseProto)) {
    // look for prototype functions
    for (var name in baseProto) {
      // Don't include any dynamic prototype instances - as we only want the real functions
      // For IE 7/8 the prototype lookup doesn't provide the full chain so we need to bypass the 
      // hasOwnProperty check we get all of the methods, main difference is that IE7/8 doesn't return
      // the Object prototype methods while bypassing the check
      if (!baseFuncs[name] && _isDynamicCandidate(baseProto, name, !_objGetPrototypeOf)) {
        // Create an instance callback for passing the base function to the caller
        baseFuncs[name] = _instFuncProxy(thisTarget, baseProto, name);
      }
    } // We need to find all possible functions that might be overloaded by walking the entire prototype chain
    // This avoids the caller from needing to check whether it's direct base class implements the function or not
    // by walking the entire chain it simplifies the usage and issues from upgrading any of the base classes.


    visited.push(baseProto);
    baseProto = _getObjProto(baseProto);
  }

  return baseFuncs;
}

function _getInstFunc(target, funcName, proto, currentDynProtoProxy) {
  var instFunc = null; // We need to check whether the class name is defined directly on this prototype otherwise
  // it will walk the proto chain and return any parent proto classname.

  if (target && dynamicproto_js_hasOwnProperty(proto, DynClassName)) {
    var instFuncTable = target[DynInstFuncTable] || {};
    instFunc = (instFuncTable[proto[DynClassName]] || {})[funcName];

    if (!instFunc) {
      // Avoid stack overflow from recursive calling the same function
      _throwTypeError("Missing [" + funcName + "] " + dynamicproto_js_strFunction);
    } // We have the instance function, lets check it we can speed up further calls
    // by adding the instance function back directly on the instance (avoiding the dynamic func lookup)


    if (!instFunc[DynInstChkTag] && instFuncTable[DynAllowInstChkTag] !== false) {
      // If the instance already has an instance function we can't replace it
      var canAddInst = !dynamicproto_js_hasOwnProperty(target, funcName); // Get current prototype

      var objProto = _getObjProto(target);

      var visited = []; // Lookup the function starting at the top (instance level prototype) and traverse down, if the first matching function
      // if nothing is found or if the first hit is a dynamic proto instance then we can safely add an instance shortcut

      while (canAddInst && objProto && !_isObjectArrayOrFunctionPrototype(objProto) && !_hasVisited(visited, objProto)) {
        var protoFunc = objProto[funcName];

        if (protoFunc) {
          canAddInst = protoFunc === currentDynProtoProxy;
          break;
        } // We need to find all possible initial functions to ensure that we don't bypass a valid override function


        visited.push(objProto);
        objProto = _getObjProto(objProto);
      }

      try {
        if (canAddInst) {
          // This instance doesn't have an instance func and the class hierarchy does have a higher level prototype version
          // so it's safe to directly assign for any subsequent calls (for better performance)
          target[funcName] = instFunc;
        } // Block further attempts to set the instance function for any


        instFunc[DynInstChkTag] = 1;
      } catch (e) {
        // Don't crash if the object is readonly or the runtime doesn't allow changing this
        // And set a flag so we don't try again for any function
        instFuncTable[DynAllowInstChkTag] = false;
      }
    }
  }

  return instFunc;
}

function _getProtoFunc(funcName, proto, currentDynProtoProxy) {
  var protoFunc = proto[funcName]; // Check that the prototype function is not a self reference -- try to avoid stack overflow!

  if (protoFunc === currentDynProtoProxy) {
    // It is so lookup the base prototype
    protoFunc = _getObjProto(proto)[funcName];
  }

  if (!dynamicproto_js_isFunction(protoFunc)) {
    _throwTypeError("[" + funcName + "] is not a " + dynamicproto_js_strFunction);
  }

  return protoFunc;
}
/**
 * Add the required dynamic prototype methods to the the class prototype
 * @param proto - The class prototype
 * @param className - The instance classname
 * @param target - The target instance
 * @param baseInstFuncs - The base instance functions
 * @param setInstanceFunc - Flag to allow prototype function to reset the instance function if one does not exist
 * @ignore
 */


function _populatePrototype(proto, className, target, baseInstFuncs, setInstanceFunc) {
  function _createDynamicPrototype(proto, funcName) {
    var dynProtoProxy = function dynProtoProxy() {
      // Use the instance or prototype function
      var instFunc = _getInstFunc(this, funcName, proto, dynProtoProxy) || _getProtoFunc(funcName, proto, dynProtoProxy);

      return instFunc.apply(this, arguments);
    }; // Tag this function as a proxy to support replacing dynamic proxy elements (primary use case is for unit testing
    // via which can dynamically replace the prototype function reference)


    dynProtoProxy[DynProxyTag] = 1;
    return dynProtoProxy;
  }

  if (!_isObjectOrArrayPrototype(proto)) {
    var instFuncTable = target[DynInstFuncTable] = target[DynInstFuncTable] || {};
    var instFuncs = instFuncTable[className] = instFuncTable[className] || {}; // fetch and assign if as it may not exist yet
    // Set whether we are allow to lookup instances, if someone has set to false then do not re-enable

    if (instFuncTable[DynAllowInstChkTag] !== false) {
      instFuncTable[DynAllowInstChkTag] = !!setInstanceFunc;
    }

    for (var name in target) {
      // Only add overridden functions
      if (_isDynamicCandidate(target, name, false) && target[name] !== baseInstFuncs[name]) {
        // Save the instance Function to the lookup table and remove it from the instance as it's not a dynamic proto function
        instFuncs[name] = target[name];
        delete target[name]; // Add a dynamic proto if one doesn't exist or if a prototype function exists and it's not a dynamic one

        if (!dynamicproto_js_hasOwnProperty(proto, name) || proto[name] && !proto[name][DynProxyTag]) {
          proto[name] = _createDynamicPrototype(proto, name);
        }
      }
    }
  }
}
/**
 * Checks whether the passed prototype object appears to be correct by walking the prototype hierarchy of the instance
 * @param classProto The class prototype instance
 * @param thisTarget The current instance that will be checked whether the passed prototype instance is in the hierarchy
 * @ignore
 */


function _checkPrototype(classProto, thisTarget) {
  var thisProto = _getObjProto(thisTarget);

  while (thisProto && !_isObjectArrayOrFunctionPrototype(thisProto)) {
    if (thisProto === classProto) {
      return true;
    }

    thisProto = _getObjProto(thisProto);
  }

  return false;
}
/**
 * Gets the current prototype name using the ES6 name if available otherwise falling back to a use unknown as the name.
 * It's not critical for this to return a name, it's used to decorate the generated unique name for easier debugging only.
 * @param target
 * @param unknownValue
 * @ignore
 */


function _getObjName(target, unknownValue) {
  if (dynamicproto_js_hasOwnProperty(target, Prototype)) {
    // Look like a prototype
    return target.name || unknownValue || UnknownValue;
  }

  return ((target || {})[Constructor] || {}).name || unknownValue || UnknownValue;
}
/**
 * Helper function when creating dynamic (inline) functions for classes, this helper performs the following tasks :-
 * - Saves references to all defined base class functions
 * - Calls the delegateFunc with the current target (this) and a base object reference that can be used to call all "super" functions.
 * - Will populate the class prototype for all overridden functions to support class extension that call the prototype instance.
 * Callers should use this helper when declaring all function within the constructor of a class, as mentioned above the delegateFunc is
 * passed both the target "this" and an object that can be used to call any base (super) functions, using this based object in place of
 * super.XXX() (which gets expanded to _super.prototype.XXX()) provides a better minification outcome and also ensures the correct "this"
 * context is maintained as TypeScript creates incorrect references using super.XXXX() for dynamically defined functions i.e. Functions
 * defined in the constructor or some other function (rather than declared as complete typescript functions).
 * ### Usage
 * ```typescript
 * import dynamicProto from "@microsoft/dynamicproto-js";
 * class ExampleClass extends BaseClass {
 *     constructor() {
 *         dynamicProto(ExampleClass, this, (_self, base) => {
 *             // This will define a function that will be converted to a prototype function
 *             _self.newFunc = () => {
 *                 // Access any "this" instance property
 *                 if (_self.someProperty) {
 *                     ...
 *                 }
 *             }
 *             // This will define a function that will be converted to a prototype function
 *             _self.myFunction = () => {
 *                 // Access any "this" instance property
 *                 if (_self.someProperty) {
 *                     // Call the base version of the function that we are overriding
 *                     base.myFunction();
 *                 }
 *                 ...
 *             }
 *             _self.initialize = () => {
 *                 ...
 *             }
 *             // Warnings: While the following will work as _self is simply a reference to
 *             // this, if anyone overrides myFunction() the overridden will be called first
 *             // as the normal JavaScript method resolution will occur and the defined
 *             // _self.initialize() function is actually gets removed from the instance and
 *             // a proxy prototype version is created to reference the created method.
 *             _self.initialize();
 *         });
 *     }
 * }
 * ```
 * @typeparam DPType This is the generic type of the class, used to keep intellisense valid
 * @typeparam DPCls The type that contains the prototype of the current class
 * @param theClass - This is the current class instance which contains the prototype for the current class
 * @param target - The current "this" (target) reference, when the class has been extended this.prototype will not be the 'theClass' value.
 * @param delegateFunc - The callback function (closure) that will create the dynamic function
 * @param options - Additional options to configure how the dynamic prototype operates
 */


function dynamicProto(theClass, target, delegateFunc, options) {
  // Make sure that the passed theClass argument looks correct
  if (!dynamicproto_js_hasOwnProperty(theClass, Prototype)) {
    _throwTypeError("theClass is an invalid class definition.");
  } // Quick check to make sure that the passed theClass argument looks correct (this is a common copy/paste error)


  var classProto = theClass[Prototype];

  if (!_checkPrototype(classProto, target)) {
    _throwTypeError("[" + _getObjName(theClass) + "] is not in class hierarchy of [" + _getObjName(target) + "]");
  }

  var className = null;

  if (dynamicproto_js_hasOwnProperty(classProto, DynClassName)) {
    // Only grab the class name if it's defined on this prototype (i.e. don't walk the prototype chain)
    className = classProto[DynClassName];
  } else {
    // As not all browser support name on the prototype creating a unique dynamic one if we have not already
    // assigned one, so we can use a simple string as the lookup rather than an object for the dynamic instance
    // function table lookup.
    className = DynClassNamePrefix + _getObjName(theClass, "_") + "$" + _dynamicNames;
    _dynamicNames++;
    classProto[DynClassName] = className;
  }

  var perfOptions = dynamicProto[DynProtoDefaultOptions];
  var useBaseInst = !!perfOptions[strUseBaseInst];

  if (useBaseInst && options && options[strUseBaseInst] !== undefined) {
    useBaseInst = !!options[strUseBaseInst];
  } // Get the current instance functions


  var instFuncs = _getInstanceFuncs(target); // Get all of the functions for any base instance (before they are potentially overridden)


  var baseFuncs = _getBaseFuncs(classProto, target, instFuncs, useBaseInst); // Execute the delegate passing in both the current target "this" and "base" function references
  // Note casting the same type as we don't actually have the base class here and this will provide some intellisense support


  delegateFunc(target, baseFuncs); // Don't allow setting instance functions for older IE instances

  var setInstanceFunc = !!_objGetPrototypeOf && !!perfOptions[strSetInstFuncs];

  if (setInstanceFunc && options) {
    setInstanceFunc = !!options[strSetInstFuncs];
  } // Populate the Prototype for any overridden instance functions


  _populatePrototype(classProto, className, target, instFuncs, setInstanceFunc !== false);
}
/**
 * Exposes the default global options to allow global configuration, if the global values are disabled these will override
 * any passed values. This is primarily exposed to support unit-testing without the need for individual classes to expose
 * their internal usage of dynamic proto.
 */


var perfDefaults = {
  setInstFuncs: true,
  useBaseInst: true
}; // And expose for testing

dynamicProto[DynProtoDefaultOptions] = perfDefaults;
/* harmony default export */ var dynamicproto_js = (dynamicProto);
// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/DiagnosticLogger.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.






/**
 * For user non actionable traces use AI Internal prefix.
 */

var AiNonUserActionablePrefix = "AI (Internal): ";
/**
 * Prefix of the traces in portal.
 */

var AiUserActionablePrefix = "AI: ";
/**
 *  Session storage key for the prefix for the key indicating message type already logged
 */

var AIInternalMessagePrefix = "AITR_";

function _sanitizeDiagnosticText(text) {
  if (text) {
    return "\"" + text.replace(/\"/g, "") + "\"";
  }

  return "";
}

var DiagnosticLogger_InternalLogMessage =
/** @class */
function () {
  function _InternalLogMessage(msgId, msg, isUserAct, properties) {
    if (isUserAct === void 0) {
      isUserAct = false;
    }

    var _self = this;

    _self.messageId = msgId;
    _self.message = (isUserAct ? AiUserActionablePrefix : AiNonUserActionablePrefix) + msgId;
    var strProps = "";

    if (hasJSON()) {
      strProps = getJSON().stringify(properties);
    }

    var diagnosticText = (msg ? " message:" + _sanitizeDiagnosticText(msg) : "") + (properties ? " props:" + _sanitizeDiagnosticText(strProps) : "");
    _self.message += diagnosticText;
  }

  _InternalLogMessage.dataType = "MessageData";
  return _InternalLogMessage;
}();



var DiagnosticLogger_DiagnosticLogger =
/** @class */
function () {
  function DiagnosticLogger(config) {
    this.identifier = 'DiagnosticLogger';
    /**
     * The internal logging queue
     */

    this.queue = [];
    /**
     * Count of internal messages sent
     */

    var _messageCount = 0;
    /**
     * Holds information about what message types were already logged to console or sent to server.
     */

    var _messageLogged = {};
    dynamicproto_js(DiagnosticLogger, this, function (_self) {
      var isNullOrUndefined = CoreUtils_CoreUtils.isNullOrUndefined;
      var isUndefined = CoreUtils_CoreUtils.isUndefined;
      var isFunction = CoreUtils_CoreUtils.isFunction;

      if (isNullOrUndefined(config)) {
        config = {};
      }

      _self.consoleLoggingLevel = function () {
        return _getConfigValue('loggingLevelConsole', 0);
      };

      _self.telemetryLoggingLevel = function () {
        return _getConfigValue('loggingLevelTelemetry', 1);
      };

      _self.maxInternalMessageLimit = function () {
        return _getConfigValue('maxMessageLimit', 25);
      };

      _self.enableDebugExceptions = function () {
        return _getConfigValue('enableDebugExceptions', false);
      };
      /**
       * This method will throw exceptions in debug mode or attempt to log the error as a console warning.
       * @param severity {LoggingSeverity} - The severity of the log message
       * @param message {_InternalLogMessage} - The log message.
       */


      _self.throwInternal = function (severity, msgId, msg, properties, isUserAct) {
        if (isUserAct === void 0) {
          isUserAct = false;
        }

        var message = new DiagnosticLogger_InternalLogMessage(msgId, msg, isUserAct, properties);

        if (_self.enableDebugExceptions()) {
          throw message;
        } else {
          if (!isUndefined(message) && !!message) {
            if (!isUndefined(message.message)) {
              if (isUserAct) {
                // check if this message type was already logged to console for this page view and if so, don't log it again
                var messageKey = +message.messageId;

                if (!_messageLogged[messageKey] && _self.consoleLoggingLevel() >= LoggingSeverity.WARNING) {
                  _self.warnToConsole(message.message);

                  _messageLogged[messageKey] = true;
                }
              } else {
                // don't log internal AI traces in the console, unless the verbose logging is enabled
                if (_self.consoleLoggingLevel() >= LoggingSeverity.WARNING) {
                  _self.warnToConsole(message.message);
                }
              }

              _self.logInternalMessage(severity, message);
            }
          }
        }
      };
      /**
       * This will write a warning to the console if possible
       * @param message {string} - The warning message
       */


      _self.warnToConsole = function (message) {
        var theConsole = getConsole();

        if (!!theConsole) {
          var logFunc = 'log';

          if (theConsole.warn) {
            logFunc = 'warn';
          }

          if (isFunction(theConsole[logFunc])) {
            theConsole[logFunc](message);
          }
        }
      };
      /**
       * Resets the internal message count
       */


      _self.resetInternalMessageCount = function () {
        _messageCount = 0;
        _messageLogged = {};
      };
      /**
       * Logs a message to the internal queue.
       * @param severity {LoggingSeverity} - The severity of the log message
       * @param message {_InternalLogMessage} - The message to log.
       */


      _self.logInternalMessage = function (severity, message) {
        if (_areInternalMessagesThrottled()) {
          return;
        } // check if this message type was already logged for this session and if so, don't log it again


        var logMessage = true;
        var messageKey = AIInternalMessagePrefix + message.messageId; // if the session storage is not available, limit to only one message type per page view

        if (_messageLogged[messageKey]) {
          logMessage = false;
        } else {
          _messageLogged[messageKey] = true;
        }

        if (logMessage) {
          // Push the event in the internal queue
          if (severity <= _self.telemetryLoggingLevel()) {
            _self.queue.push(message);

            _messageCount++;
          } // When throttle limit reached, send a special event


          if (_messageCount === _self.maxInternalMessageLimit()) {
            var throttleLimitMessage = "Internal events throttle limit per PageView reached for this app.";
            var throttleMessage = new DiagnosticLogger_InternalLogMessage(_InternalMessageId.MessageLimitPerPVExceeded, throttleLimitMessage, false);

            _self.queue.push(throttleMessage);

            _self.warnToConsole(throttleLimitMessage);
          }
        }
      };

      function _getConfigValue(name, defValue) {
        var value = config[name];

        if (!isNullOrUndefined(value)) {
          return value;
        }

        return defValue;
      }

      function _areInternalMessagesThrottled() {
        return _messageCount >= _self.maxInternalMessageLimit();
      }
    });
  }
  /**
   * When this is true the SDK will throw exceptions to aid in debugging.
   */


  DiagnosticLogger.prototype.enableDebugExceptions = function () {
    // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    return false;
  };
  /**
   * 0: OFF (default)
   * 1: CRITICAL
   * 2: >= WARNING
   */


  DiagnosticLogger.prototype.consoleLoggingLevel = function () {
    // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    return 0;
  };
  /**
   * 0: OFF
   * 1: CRITICAL (default)
   * 2: >= WARNING
   */


  DiagnosticLogger.prototype.telemetryLoggingLevel = function () {
    // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    return 1;
  };
  /**
   * The maximum number of internal messages allowed to be sent per page view
   */


  DiagnosticLogger.prototype.maxInternalMessageLimit = function () {
    // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    return 25;
  };
  /**
   * This method will throw exceptions in debug mode or attempt to log the error as a console warning.
   * @param severity {LoggingSeverity} - The severity of the log message
   * @param message {_InternalLogMessage} - The log message.
   */


  DiagnosticLogger.prototype.throwInternal = function (severity, msgId, msg, properties, isUserAct) {
    if (isUserAct === void 0) {
      isUserAct = false;
    } // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging

  };
  /**
   * This will write a warning to the console if possible
   * @param message {string} - The warning message
   */


  DiagnosticLogger.prototype.warnToConsole = function (message) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };
  /**
   * Resets the internal message count
   */


  DiagnosticLogger.prototype.resetInternalMessageCount = function () {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };
  /**
   * Logs a message to the internal queue.
   * @param severity {LoggingSeverity} - The severity of the log message
   * @param message {_InternalLogMessage} - The message to log.
   */


  DiagnosticLogger.prototype.logInternalMessage = function (severity, message) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };

  return DiagnosticLogger;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/PerfManager.js


var strExecutionContextKey = "ctx";

var PerfManager_PerfEvent =
/** @class */
function () {
  function PerfEvent(name, payloadDetails, isAsync) {
    var _self = this;

    var accessorDefined = false;
    _self.start = CoreUtils_CoreUtils.dateNow();
    _self.name = name;
    _self.isAsync = isAsync;

    _self.isChildEvt = function () {
      return false;
    };

    if (CoreUtils_CoreUtils.isFunction(payloadDetails)) {
      // Create an accessor to minimize the potential performance impact of executing the payloadDetails callback
      var theDetails_1;
      accessorDefined = CoreUtils_CoreUtils.objDefineAccessors(_self, 'payload', function () {
        // Delay the execution of the payloadDetails until needed
        if (!theDetails_1 && CoreUtils_CoreUtils.isFunction(payloadDetails)) {
          theDetails_1 = payloadDetails(); // clear it out now so the referenced objects can be garbage collected

          payloadDetails = null;
        }

        return theDetails_1;
      });
    }

    _self.getCtx = function (key) {
      if (key) {
        // The parent and child links are located directly on the object (for better viewing in the DebugPlugin)
        if (key === PerfEvent.ParentContextKey || key === PerfEvent.ChildrenContextKey) {
          return _self[key];
        }

        return (_self[strExecutionContextKey] || {})[key];
      }

      return null;
    };

    _self.setCtx = function (key, value) {
      if (key) {
        // Put the parent and child links directly on the object (for better viewing in the DebugPlugin)
        if (key === PerfEvent.ParentContextKey) {
          // Simple assumption, if we are setting a parent then we must be a child
          if (!_self[key]) {
            _self.isChildEvt = function () {
              return true;
            };
          }

          _self[key] = value;
        } else if (key === PerfEvent.ChildrenContextKey) {
          _self[key] = value;
        } else {
          var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
          ctx[key] = value;
        }
      }
    };

    _self.complete = function () {
      var childTime = 0;

      var childEvts = _self.getCtx(PerfEvent.ChildrenContextKey);

      if (CoreUtils_CoreUtils.isArray(childEvts)) {
        for (var lp = 0; lp < childEvts.length; lp++) {
          var childEvt = childEvts[lp];

          if (childEvt) {
            childTime += childEvt.time;
          }
        }
      }

      _self.time = CoreUtils_CoreUtils.dateNow() - _self.start;
      _self.exTime = _self.time - childTime;

      _self.complete = function () {};

      if (!accessorDefined && CoreUtils_CoreUtils.isFunction(payloadDetails)) {
        // If we couldn't define the property set during complete -- to minimize the perf impact until after the time
        _self.payload = payloadDetails();
      }
    };
  }

  PerfEvent.ParentContextKey = "parent";
  PerfEvent.ChildrenContextKey = "childEvts";
  return PerfEvent;
}();



var PerfManager_PerfManager =
/** @class */
function () {
  function PerfManager(manager) {
    /**
     * General bucket used for execution context set and retrieved via setCtx() and getCtx.
     * Defined as private so it can be visualized via the DebugPlugin
     */
    this.ctx = {};
    dynamicproto_js(PerfManager, this, function (_self) {
      _self.create = function (src, payloadDetails, isAsync) {
        // TODO (@MSNev): at some point we will want to add additional configuration to "select" which events to instrument
        // for now this is just a simple do everything.
        return new PerfManager_PerfEvent(src, payloadDetails, isAsync);
      };

      _self.fire = function (perfEvent) {
        if (perfEvent) {
          perfEvent.complete();

          if (manager) {
            manager.perfEvent(perfEvent);
          }
        }
      };

      _self.setCtx = function (key, value) {
        if (key) {
          var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
          ctx[key] = value;
        }
      };

      _self.getCtx = function (key) {
        return (_self[strExecutionContextKey] || {})[key];
      };
    });
  }
  /**
   * Create a new event and start timing, the manager may return null/undefined to indicate that it does not
   * want to monitor this source event.
   * @param src The source name of the event
   * @param payloadDetails - An optional callback function to fetch the payload details for the event.
   * @param isAsync - Is the event occurring from a async event
   */


  PerfManager.prototype.create = function (src, payload, isAsync) {
    // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    return null;
  };
  /**
   * Complete the perfEvent and fire any notifications.
   * @param perfEvent Fire the event which will also complete the passed event
   */


  PerfManager.prototype.fire = function (perfEvent) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };
  /**
   * Set an execution context value
   * @param key - The context key name
   * @param value - The value
   */


  PerfManager.prototype.setCtx = function (key, value) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };
  /**
   * Get the execution context value
   * @param key - The context key
   */


  PerfManager.prototype.getCtx = function (key) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };

  return PerfManager;
}();


var doPerfActiveKey = "CoreUtils.doPerf";
/**
 * Helper function to wrap a function with a perf event
 * @param mgrSource - The Performance Manager or a Performance provider source (may be null)
 * @param getSource - The callback to create the source name for the event (if perf monitoring is enabled)
 * @param func - The function to call and measure
 * @param details - A function to return the payload details
 * @param isAsync - Is the event / function being call asynchronously or synchronously
 */

function doPerf(mgrSource, getSource, func, details, isAsync) {
  if (mgrSource) {
    var perfMgr = mgrSource;

    if (perfMgr && CoreUtils_CoreUtils.isFunction(perfMgr["getPerfMgr"])) {
      // Looks like a perf manager provider object
      perfMgr = perfMgr["getPerfMgr"]();
    }

    if (perfMgr) {
      var perfEvt = void 0;
      var currentActive = perfMgr.getCtx(doPerfActiveKey);

      try {
        perfEvt = perfMgr.create(getSource(), details, isAsync);

        if (perfEvt) {
          if (currentActive && perfEvt.setCtx) {
            perfEvt.setCtx(PerfManager_PerfEvent.ParentContextKey, currentActive);

            if (currentActive.getCtx && currentActive.setCtx) {
              var children = currentActive.getCtx(PerfManager_PerfEvent.ChildrenContextKey);

              if (!children) {
                children = [];
                currentActive.setCtx(PerfManager_PerfEvent.ChildrenContextKey, children);
              }

              children.push(perfEvt);
            }
          } // Set this event as the active event now


          perfMgr.setCtx(doPerfActiveKey, perfEvt);
          return func(perfEvt);
        }
      } catch (ex) {
        if (perfEvt && perfEvt.setCtx) {
          perfEvt.setCtx("exception", ex);
        }
      } finally {
        // fire the perf event
        if (perfEvt) {
          perfMgr.fire(perfEvt);
        } // Reset the active event to the previous value


        perfMgr.setCtx(doPerfActiveKey, currentActive);
      }
    }
  }

  return func();
}
// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/TelemetryPluginChain.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.





var TelemetryPluginChain_isFunction = CoreUtils_CoreUtils.isFunction;

var TelemetryPluginChain_TelemetryPluginChain =
/** @class */
function () {
  function TelemetryPluginChain(plugin, defItemCtx) {
    var _self = this;

    var _nextProxy = null;

    var _hasProcessTelemetry = TelemetryPluginChain_isFunction(plugin.processTelemetry);

    var _hasSetNext = TelemetryPluginChain_isFunction(plugin.setNextPlugin);

    _self._hasRun = false;

    _self.getPlugin = function () {
      return plugin;
    };

    _self.getNext = function () {
      return _nextProxy;
    };

    _self.setNext = function (nextPlugin) {
      _nextProxy = nextPlugin;
    };

    _self.processTelemetry = function (env, itemCtx) {
      if (!itemCtx) {
        // Looks like a plugin didn't pass the (optional) context, so restore to the default
        itemCtx = defItemCtx;
      }

      var identifier = plugin ? plugin.identifier : "TelemetryPluginChain";
      doPerf(itemCtx ? itemCtx.core() : null, function () {
        return identifier + ":processTelemetry";
      }, function () {
        if (plugin && _hasProcessTelemetry) {
          _self._hasRun = true;

          try {
            // Ensure that we keep the context in sync (for processNext()), just in case a plugin
            // doesn't calls processTelemetry() instead of itemContext.processNext() or some 
            // other form of error occurred
            itemCtx.setNext(_nextProxy);

            if (_hasSetNext) {
              // Backward compatibility setting the next plugin on the instance
              plugin.setNextPlugin(_nextProxy);
            } // Set a flag on the next plugin so we know if it was attempted to be executed


            _nextProxy && (_nextProxy._hasRun = false);
            plugin.processTelemetry(env, itemCtx);
          } catch (error) {
            var hasRun = _nextProxy && _nextProxy._hasRun;

            if (!_nextProxy || !hasRun) {
              // Either we have no next plugin or the current one did not attempt to call the next plugin
              // Which means the current one is the root of the failure so log/report this failure
              itemCtx.diagLog().throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.PluginException, "Plugin [" + plugin.identifier + "] failed during processTelemetry - " + error);
            }

            if (_nextProxy && !hasRun) {
              // As part of the failure the current plugin did not attempt to call the next plugin in the cahin
              // So rather than leave the pipeline dead in the water we call the next plugin
              _nextProxy.processTelemetry(env, itemCtx);
            }
          }
        } else if (_nextProxy) {
          _self._hasRun = true; // The underlying plugin is either not defined or does not have a processTelemetry implementation
          // so we still want the next plugin to be executed.

          _nextProxy.processTelemetry(env, itemCtx);
        }
      }, function () {
        return {
          item: env
        };
      }, !env.sync);
    };
  }

  return TelemetryPluginChain;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/ProcessTelemetryContext.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.





var ProcessTelemetryContext_isNullOrUndefined = CoreUtils_CoreUtils.isNullOrUndefined;
/**
 * Creates the instance execution chain for the plugins
 */

function _createProxyChain(plugins, itemCtx) {
  var proxies = [];

  if (plugins && plugins.length > 0) {
    // Create the proxies and wire up the next plugin chain
    var lastProxy = null;

    for (var idx = 0; idx < plugins.length; idx++) {
      var thePlugin = plugins[idx];

      if (thePlugin && CoreUtils_CoreUtils.isFunction(thePlugin.processTelemetry)) {
        // Only add plugins that are processors
        var newProxy = new TelemetryPluginChain_TelemetryPluginChain(thePlugin, itemCtx);
        proxies.push(newProxy);

        if (lastProxy) {
          // Set this new proxy as the next for the previous one
          lastProxy.setNext(newProxy);
        }

        lastProxy = newProxy;
      }
    }
  }

  return proxies.length > 0 ? proxies[0] : null;
}

function _copyProxyChain(proxy, itemCtx, startAt) {
  var plugins = [];
  var add = startAt ? false : true;

  if (proxy) {
    while (proxy) {
      var thePlugin = proxy.getPlugin();

      if (add || thePlugin === startAt) {
        add = true;
        plugins.push(thePlugin);
      }

      proxy = proxy.getNext();
    }
  }

  if (!add) {
    plugins.push(startAt);
  }

  return _createProxyChain(plugins, itemCtx);
}

function _copyPluginChain(srcPlugins, itemCtx, startAt) {
  var plugins = srcPlugins;
  var add = false;

  if (startAt && srcPlugins) {
    plugins = [];
    CoreUtils_CoreUtils.arrForEach(srcPlugins, function (thePlugin) {
      if (add || thePlugin === startAt) {
        add = true;
        plugins.push(thePlugin);
      }
    });
  }

  if (startAt && !add) {
    if (!plugins) {
      plugins = [];
    }

    plugins.push(startAt);
  }

  return _createProxyChain(plugins, itemCtx);
}

var ProcessTelemetryContext_ProcessTelemetryContext =
/** @class */
function () {
  /**
   * Creates a new Telemetry Item context with the current config, core and plugin execution chain
   * @param plugins - The plugin instances that will be executed
   * @param config - The current config
   * @param core - The current core instance
   */
  function ProcessTelemetryContext(plugins, config, core, startAt) {
    var _self = this;

    var _nextProxy = null; // Null == No next plugin
    // There is no next element (null) vs not defined (undefined)

    if (startAt !== null) {
      if (plugins && CoreUtils_CoreUtils.isFunction(plugins.getPlugin)) {
        // We have a proxy chain object
        _nextProxy = _copyProxyChain(plugins, _self, startAt || plugins.getPlugin());
      } else {
        // We just have an array
        if (startAt) {
          _nextProxy = _copyPluginChain(plugins, _self, startAt);
        } else if (CoreUtils_CoreUtils.isUndefined(startAt)) {
          // Undefined means copy the existing chain
          _nextProxy = _createProxyChain(plugins, _self);
        }
      }
    }

    _self.core = function () {
      return core;
    };

    _self.diagLog = function () {
      var logger = (core || {}).logger;

      if (!logger) {
        // Fallback so we always have a logger
        logger = new DiagnosticLogger_DiagnosticLogger(config || {});
      }

      return logger;
    };

    _self.getCfg = function () {
      return config;
    };

    _self.getExtCfg = function (identifier, defaultValue) {
      if (defaultValue === void 0) {
        defaultValue = {};
      }

      var theConfig;

      if (config) {
        var extConfig = config.extensionConfig;

        if (extConfig && identifier) {
          theConfig = extConfig[identifier];
        }
      }

      return theConfig ? theConfig : defaultValue;
    };

    _self.getConfig = function (identifier, field, defaultValue) {
      if (defaultValue === void 0) {
        defaultValue = false;
      }

      var theValue;

      var extConfig = _self.getExtCfg(identifier, null);

      if (extConfig && !ProcessTelemetryContext_isNullOrUndefined(extConfig[field])) {
        theValue = extConfig[field];
      } else if (config && !ProcessTelemetryContext_isNullOrUndefined(config[field])) {
        theValue = config[field];
      }

      return !ProcessTelemetryContext_isNullOrUndefined(theValue) ? theValue : defaultValue;
    };

    _self.hasNext = function () {
      return _nextProxy != null;
    };

    _self.getNext = function () {
      return _nextProxy;
    };

    _self.setNext = function (nextPlugin) {
      _nextProxy = nextPlugin;
    };

    _self.processNext = function (env) {
      var nextPlugin = _nextProxy;

      if (nextPlugin) {
        // Automatically move to the next plugin
        _nextProxy = nextPlugin.getNext();
        nextPlugin.processTelemetry(env, _self);
      }
    };

    _self.createNew = function (plugins, startAt) {
      if (plugins === void 0) {
        plugins = null;
      }

      return new ProcessTelemetryContext(plugins || _nextProxy, config, core, startAt);
    };
  }

  return ProcessTelemetryContext;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/BaseTelemetryPlugin.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.




var BaseTelemetryPlugin_isFunction = CoreUtils_CoreUtils.isFunction;
var getPlugin = "getPlugin";
/**
 * BaseTelemetryPlugin provides a basic implementation of the ITelemetryPlugin interface so that plugins
 * can avoid implementation the same set of boiler plate code as well as provide a base
 * implementation so that new default implementations can be added without breaking all plugins.
 */

var BaseTelemetryPlugin_BaseTelemetryPlugin =
/** @class */
function () {
  function BaseTelemetryPlugin() {
    var _self = this;

    var _isinitialized = false;
    var _rootCtx = null; // Used as the root context, holding the current config and initialized core

    var _nextPlugin = null; // Used for backward compatibility where plugins don't call the main pipeline

    _self.core = null;

    _self.diagLog = function (itemCtx) {
      return _self._getTelCtx(itemCtx).diagLog();
    };

    _self.isInitialized = function () {
      return _isinitialized;
    };

    _self.setInitialized = function (isInitialized) {
      _isinitialized = isInitialized;
    }; // _self.getNextPlugin = () => DO NOT IMPLEMENT
    // Sub-classes of this base class *should* not be relying on this value and instead
    // should use processNext() function. If you require access to the plugin use the
    // IProcessTelemetryContext.getNext().getPlugin() while in the pipeline, Note getNext() may return null.


    _self.setNextPlugin = function (next) {
      _nextPlugin = next;
    };

    _self.processNext = function (env, itemCtx) {
      if (itemCtx) {
        // Normal core execution sequence
        itemCtx.processNext(env);
      } else if (_nextPlugin && BaseTelemetryPlugin_isFunction(_nextPlugin.processTelemetry)) {
        // Looks like backward compatibility or out of band processing. And as it looks 
        // like a ITelemetryPlugin or ITelemetryPluginChain, just call processTelemetry
        _nextPlugin.processTelemetry(env, null);
      }
    };

    _self._getTelCtx = function (currentCtx) {
      if (currentCtx === void 0) {
        currentCtx = null;
      }

      var itemCtx = currentCtx;

      if (!itemCtx) {
        var rootCtx = _rootCtx || new ProcessTelemetryContext_ProcessTelemetryContext(null, {}, _self.core); // tslint:disable-next-line: prefer-conditional-expression

        if (_nextPlugin && _nextPlugin[getPlugin]) {
          // Looks like a chain object
          itemCtx = rootCtx.createNew(null, _nextPlugin[getPlugin]);
        } else {
          itemCtx = rootCtx.createNew(null, _nextPlugin);
        }
      }

      return itemCtx;
    };

    _self._baseTelInit = function (config, core, extensions, pluginChain) {
      if (config) {
        // Make sure the extensionConfig exists
        config.extensionConfig = config.extensionConfig || [];
      }

      if (!pluginChain && core) {
        // Get the first plugin from the core
        pluginChain = core.getProcessTelContext().getNext();
      }

      var nextPlugin = _nextPlugin;

      if (_nextPlugin && _nextPlugin[getPlugin]) {
        // If it looks like a proxy/chain then get the plugin
        nextPlugin = _nextPlugin[getPlugin]();
      } // Support legacy plugins where core was defined as a property


      _self.core = core;
      _rootCtx = new ProcessTelemetryContext_ProcessTelemetryContext(pluginChain, config, core, nextPlugin);
      _isinitialized = true;
    };
  }

  BaseTelemetryPlugin.prototype.initialize = function (config, core, extensions, pluginChain) {
    this._baseTelInit(config, core, extensions, pluginChain);
  };

  return BaseTelemetryPlugin;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/TelemetryHelpers.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.



var TelemetryHelpers_isFunction = CoreUtils_CoreUtils.isFunction;
var processTelemetry = "processTelemetry";
var priority = "priority";
var setNextPlugin = "setNextPlugin";
var isInitialized = "isInitialized";
/**
 * Initialize the queue of plugins
 * @param plugins - The array of plugins to initialize and setting of the next plugin
 * @param config The current config for the instance
 * @param core THe current core instance
 * @param extensions The extensions
 */

function initializePlugins(processContext, extensions) {
  // Set the next plugin and identified the uninitialized plugins
  var initPlugins = [];
  var lastPlugin = null;
  var proxy = processContext.getNext();

  while (proxy) {
    var thePlugin = proxy.getPlugin();

    if (thePlugin) {
      if (lastPlugin && TelemetryHelpers_isFunction(lastPlugin[setNextPlugin]) && TelemetryHelpers_isFunction(thePlugin[processTelemetry])) {
        // Set this plugin as the next for the previous one
        lastPlugin[setNextPlugin](thePlugin);
      }

      if (!TelemetryHelpers_isFunction(thePlugin[isInitialized]) || !thePlugin[isInitialized]()) {
        initPlugins.push(thePlugin);
      }

      lastPlugin = thePlugin;
      proxy = proxy.getNext();
    }
  } // Now initiatilize the plugins


  CoreUtils_CoreUtils.arrForEach(initPlugins, function (thePlugin) {
    thePlugin.initialize(processContext.getCfg(), processContext.core(), extensions, processContext.getNext());
  });
}
function sortPlugins(plugins) {
  // Sort by priority
  return plugins.sort(function (extA, extB) {
    var result = 0;

    var bHasProcess = TelemetryHelpers_isFunction(extB[processTelemetry]);

    if (TelemetryHelpers_isFunction(extA[processTelemetry])) {
      result = bHasProcess ? extA[priority] - extB[priority] : 1;
    } else if (bHasProcess) {
      result = -1;
    }

    return result;
  }); // sort complete    
}
// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/ChannelController.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.







var ChannelControllerPriority = 500;
var ChannelValidationMessage = "Channel has invalid priority";
var _objDefineAccessors = CoreUtils_CoreUtils.objDefineAccessors;

var ChannelController_ChannelController =
/** @class */
function (_super) {
  __extends(ChannelController, _super);

  function ChannelController() {
    var _this = _super.call(this) || this;

    _this.identifier = "ChannelControllerPlugin";
    _this.priority = ChannelControllerPriority; // in reserved range 100 to 200

    var _arrForEach = CoreUtils_CoreUtils.arrForEach;

    var _channelQueue;

    dynamicproto_js(ChannelController, _this, function (_self, _base) {
      _self.setNextPlugin = function (next) {// The Channel controller is last in pipeline
      };

      _self.processTelemetry = function (item, itemCtx) {
        if (_channelQueue) {
          _arrForEach(_channelQueue, function (queues) {
            // pass on to first item in queue
            if (queues.length > 0) {
              // Copying the item context as we could have mutiple chains that are executing asynchronously
              // and calling _getDefTelCtx as it's possible that the caller doesn't pass any context
              var chainCtx = _this._getTelCtx(itemCtx).createNew(queues);

              chainCtx.processNext(item);
            }
          });
        }
      };

      _self.getChannelControls = function () {
        return _channelQueue;
      };

      _self.initialize = function (config, core, extensions) {
        if (_self.isInitialized()) {
          // already initialized
          return;
        }

        _base.initialize(config, core, extensions);

        if (config.isCookieUseDisabled) {
          CoreUtils_CoreUtils.disableCookies();
        }

        _createChannelQueues((config || {}).channels, extensions); // Initialize the Queues


        _arrForEach(_channelQueue, function (queue) {
          return initializePlugins(new ProcessTelemetryContext_ProcessTelemetryContext(queue, config, core), extensions);
        });
      };
    });

    function _checkQueuePriority(queue) {
      _arrForEach(queue, function (queueItem) {
        if (queueItem.priority < ChannelControllerPriority) {
          throw Error(ChannelValidationMessage + queueItem.identifier);
        }
      });
    }

    function _addChannelQueue(queue) {
      if (queue && queue.length > 0) {
        queue = queue.sort(function (a, b) {
          return a.priority - b.priority;
        });

        _checkQueuePriority(queue);

        _channelQueue.push(queue);
      }
    }

    function _createChannelQueues(channels, extensions) {
      _channelQueue = [];

      if (channels) {
        // Add and sort the configuration channel queues
        _arrForEach(channels, function (queue) {
          return _addChannelQueue(queue);
        });
      }

      if (extensions) {
        // Create a new channel queue for any extensions with a priority > the ChannelControllerPriority
        var extensionQueue_1 = [];

        _arrForEach(extensions, function (plugin) {
          if (plugin.priority > ChannelControllerPriority) {
            extensionQueue_1.push(plugin);
          }
        });

        _addChannelQueue(extensionQueue_1);
      }
    }

    return _this;
  }

  ChannelController.prototype.processTelemetry = function (item, itemCtx) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };

  ;

  ChannelController.prototype.getChannelControls = function () {
    // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    return null;
  };

  ChannelController.prototype.initialize = function (config, core, extensions) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };
  /**
   * Static constructor, attempt to create accessors
   */
  // tslint:disable-next-line


  ChannelController._staticInit = function () {
    // Dynamically create get/set property accessors
    _objDefineAccessors(ChannelController.prototype, "ChannelControls", ChannelController.prototype.getChannelControls);

    _objDefineAccessors(ChannelController.prototype, "channelQueue", ChannelController.prototype.getChannelControls);
  }();

  return ChannelController;
}(BaseTelemetryPlugin_BaseTelemetryPlugin);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/BaseCore.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.








var validationError = "Extensions must provide callback to initialize";
var BaseCore_arrForEach = CoreUtils_CoreUtils.arrForEach;
var BaseCore_isNullOrUndefined = CoreUtils_CoreUtils.isNullOrUndefined;
var strNotificationManager = "_notificationManager";

var BaseCore_BaseCore =
/** @class */
function () {
  function BaseCore() {
    var _isInitialized = false;

    var _eventQueue;

    var _channelController;

    var _notificationManager;

    var _perfManager;

    dynamicproto_js(BaseCore, this, function (_self) {
      _self._extensions = new Array();
      _channelController = new ChannelController_ChannelController();
      _self.logger = CoreUtils_CoreUtils.objCreate({
        throwInternal: function throwInternal(severity, msgId, msg, properties, isUserAct) {
          if (isUserAct === void 0) {
            isUserAct = false;
          }
        },
        warnToConsole: function warnToConsole(message) {},
        resetInternalMessageCount: function resetInternalMessageCount() {}
      });
      _eventQueue = [];

      _self.isInitialized = function () {
        return _isInitialized;
      };

      _self.initialize = function (config, extensions, logger, notificationManager) {
        // Make sure core is only initialized once
        if (_self.isInitialized()) {
          throw Error("Core should not be initialized more than once");
        }

        if (!config || BaseCore_isNullOrUndefined(config.instrumentationKey)) {
          throw Error("Please provide instrumentation key");
        }

        _notificationManager = notificationManager; // For backward compatibility only

        _self[strNotificationManager] = notificationManager;
        _self.config = config || {};
        config.extensions = BaseCore_isNullOrUndefined(config.extensions) ? [] : config.extensions; // add notification to the extensions in the config so other plugins can access it

        var extConfig = config.extensionConfig = BaseCore_isNullOrUndefined(config.extensionConfig) ? {} : config.extensionConfig;
        extConfig.NotificationManager = notificationManager;

        if (logger) {
          _self.logger = logger;
        } // Concat all available extensions


        var allExtensions = [];
        allExtensions.push.apply(allExtensions, extensions.concat(config.extensions));
        allExtensions = sortPlugins(allExtensions);
        var coreExtensions = [];
        var channelExtensions = []; // Check if any two extensions have the same priority, then warn to console
        // And extract the local extensions from the 

        var extPriorities = {}; // Extension validation

        BaseCore_arrForEach(allExtensions, function (ext) {
          if (BaseCore_isNullOrUndefined(ext) || BaseCore_isNullOrUndefined(ext.initialize)) {
            throw Error(validationError);
          }

          var extPriority = ext.priority;
          var identifier = ext.identifier;

          if (ext && extPriority) {
            if (!BaseCore_isNullOrUndefined(extPriorities[extPriority])) {
              logger.warnToConsole("Two extensions have same priority #" + extPriority + " - " + extPriorities[extPriority] + ", " + identifier);
            } else {
              // set a value
              extPriorities[extPriority] = identifier;
            }
          } // Split extensions to core and channelController


          if (!extPriority || extPriority < _channelController.priority) {
            // Add to core extension that will be managed by BaseCore
            coreExtensions.push(ext);
          } else {
            // Add all other extensions to be managed by the channel controller
            channelExtensions.push(ext);
          }
        }); // Validation complete
        // Add the channelController to the complete extension collection and
        // to the end of the core extensions


        allExtensions.push(_channelController);
        coreExtensions.push(_channelController); // Sort the complete set of extensions by priority

        allExtensions = sortPlugins(allExtensions);
        _self._extensions = allExtensions; // initialize channel controller first, this will initialize all channel plugins

        initializePlugins(new ProcessTelemetryContext_ProcessTelemetryContext([_channelController], config, _self), allExtensions);
        initializePlugins(new ProcessTelemetryContext_ProcessTelemetryContext(coreExtensions, config, _self), allExtensions); // Now reset the extensions to just those being managed by Basecore

        _self._extensions = coreExtensions;

        if (_self.getTransmissionControls().length === 0) {
          throw new Error("No channels available");
        }

        _isInitialized = true;

        _self.releaseQueue();
      };

      _self.getTransmissionControls = function () {
        return _channelController.getChannelControls();
      };

      _self.track = function (telemetryItem) {
        if (!telemetryItem.iKey) {
          // setup default iKey if not passed in
          telemetryItem.iKey = _self.config.instrumentationKey;
        }

        if (!telemetryItem.time) {
          // add default timestamp if not passed in
          telemetryItem.time = CoreUtils_CoreUtils.toISOString(new Date());
        }

        if (BaseCore_isNullOrUndefined(telemetryItem.ver)) {
          // CommonSchema 4.0
          telemetryItem.ver = "4.0";
        }

        if (_self.isInitialized()) {
          // Process the telemetry plugin chain
          _self.getProcessTelContext().processNext(telemetryItem);
        } else {
          // Queue events until all extensions are initialized
          _eventQueue.push(telemetryItem);
        }
      };

      _self.getProcessTelContext = function () {
        var extensions = _self._extensions;
        var thePlugins = extensions; // invoke any common telemetry processors before sending through pipeline

        if (!extensions || extensions.length === 0) {
          // Pass to Channel controller so data is sent to correct channel queues
          thePlugins = [_channelController];
        }

        return new ProcessTelemetryContext_ProcessTelemetryContext(thePlugins, _self.config, _self);
      };

      _self.getNotifyMgr = function () {
        if (!_notificationManager) {
          // Create Dummy notification manager
          _notificationManager = CoreUtils_CoreUtils.objCreate({
            addNotificationListener: function addNotificationListener(listener) {},
            removeNotificationListener: function removeNotificationListener(listener) {},
            eventsSent: function eventsSent(events) {},
            eventsDiscarded: function eventsDiscarded(events, reason) {},
            eventsSendRequest: function eventsSendRequest(sendReason, isAsync) {}
          }); // For backward compatibility only

          _self[strNotificationManager] = _notificationManager;
        }

        return _notificationManager;
      };

      _self.getPerfMgr = function () {
        if (!_perfManager) {
          if (_self.config && _self.config.enablePerfMgr) {
            _perfManager = new PerfManager_PerfManager(_self.getNotifyMgr());
          }
        }

        return _perfManager;
      };

      _self.setPerfMgr = function (perfMgr) {
        _perfManager = perfMgr;
      };

      _self.eventCnt = function () {
        return _eventQueue.length;
      };

      _self.releaseQueue = function () {
        if (_eventQueue.length > 0) {
          BaseCore_arrForEach(_eventQueue, function (event) {
            _self.getProcessTelContext().processNext(event);
          });

          _eventQueue = [];
        }
      };
    });
  }

  BaseCore.prototype.initialize = function (config, extensions, logger, notificationManager) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };

  BaseCore.prototype.getTransmissionControls = function () {
    // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    return null;
  };

  BaseCore.prototype.track = function (telemetryItem) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };

  BaseCore.prototype.getProcessTelContext = function () {
    // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    return null;
  };

  BaseCore.prototype.getNotifyMgr = function () {
    // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    return null;
  };

  BaseCore.prototype.getPerfMgr = function () {
    // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    return null;
  };

  BaseCore.prototype.setPerfMgr = function (perfMgr) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };

  BaseCore.prototype.eventCnt = function () {
    // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    return 0;
  };

  BaseCore.prototype.releaseQueue = function () {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };

  return BaseCore;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK.Enums/EventsDiscardedReason.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * The EventsDiscardedReason enumeration contains a set of values that specify the reason for discarding an event.
 */
var EventsDiscardedReason = {
  /**
   * Unknown.
   */
  Unknown: 0,

  /**
   * Status set to non-retryable.
   */
  NonRetryableStatus: 1,

  /**
   * The event is invalid.
   */
  InvalidEvent: 2,

  /**
   * The size of the event is too large.
   */
  SizeLimitExceeded: 3,

  /**
   * The server is not accepting events from this instrumentation key.
   */
  KillSwitch: 4,

  /**
   * The event queue is full.
   */
  QueueFull: 5
};
// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/NotificationManager.js


/**
 * Class to manage sending notifications to all the listeners.
 */

var NotificationManager_NotificationManager =
/** @class */
function () {
  function NotificationManager(config) {
    this.listeners = [];
    var arrForEach = CoreUtils_CoreUtils.arrForEach;
    var perfEvtsSendAll = !!(config || {}).perfEvtsSendAll;
    dynamicproto_js(NotificationManager, this, function (_self) {
      _self.addNotificationListener = function (listener) {
        _self.listeners.push(listener);
      };
      /**
       * Removes all instances of the listener.
       * @param {INotificationListener} listener - AWTNotificationListener to remove.
       */


      _self.removeNotificationListener = function (listener) {
        var index = CoreUtils_CoreUtils.arrIndexOf(_self.listeners, listener);

        while (index > -1) {
          _self.listeners.splice(index, 1);

          index = CoreUtils_CoreUtils.arrIndexOf(_self.listeners, listener);
        }
      };
      /**
       * Notification for events sent.
       * @param {ITelemetryItem[]} events - The array of events that have been sent.
       */


      _self.eventsSent = function (events) {
        arrForEach(_self.listeners, function (listener) {
          if (listener && listener.eventsSent) {
            setTimeout(function () {
              return listener.eventsSent(events);
            }, 0);
          }
        });
      };
      /**
       * Notification for events being discarded.
       * @param {ITelemetryItem[]} events - The array of events that have been discarded by the SDK.
       * @param {number} reason           - The reason for which the SDK discarded the events. The EventsDiscardedReason
       * constant should be used to check the different values.
       */


      _self.eventsDiscarded = function (events, reason) {
        arrForEach(_self.listeners, function (listener) {
          if (listener && listener.eventsDiscarded) {
            setTimeout(function () {
              return listener.eventsDiscarded(events, reason);
            }, 0);
          }
        });
      };
      /**
       * [Optional] A function called when the events have been requested to be sent to the sever.
       * @param {number} sendReason - The reason why the event batch is being sent.
       * @param {boolean} isAsync   - A flag which identifies whether the requests are being sent in an async or sync manner.
       */


      _self.eventsSendRequest = function (sendReason, isAsync) {
        arrForEach(_self.listeners, function (listener) {
          if (listener && listener.eventsSendRequest) {
            if (isAsync) {
              setTimeout(function () {
                return listener.eventsSendRequest(sendReason, isAsync);
              }, 0);
            } else {
              try {
                listener.eventsSendRequest(sendReason, isAsync);
              } catch (e) {// Catch errors to ensure we don't block sending the requests
              }
            }
          }
        });
      };

      _self.perfEvent = function (perfEvent) {
        if (perfEvent) {
          // Send all events or only parent events
          if (perfEvtsSendAll || !perfEvent.isChildEvt()) {
            arrForEach(_self.listeners, function (listener) {
              if (listener && listener.perfEvent) {
                if (perfEvent.isAsync) {
                  setTimeout(function () {
                    return listener.perfEvent(perfEvent);
                  }, 0);
                } else {
                  try {
                    listener.perfEvent(perfEvent);
                  } catch (e) {// Catch errors to ensure we don't block sending the requests
                  }
                }
              }
            });
          }
        }
      };
    });
  }
  /**
   * Adds a notification listener.
   * @param {INotificationListener} listener - The notification listener to be added.
   */


  NotificationManager.prototype.addNotificationListener = function (listener) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };
  /**
   * Removes all instances of the listener.
   * @param {INotificationListener} listener - AWTNotificationListener to remove.
   */


  NotificationManager.prototype.removeNotificationListener = function (listener) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };
  /**
   * Notification for events sent.
   * @param {ITelemetryItem[]} events - The array of events that have been sent.
   */


  NotificationManager.prototype.eventsSent = function (events) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };
  /**
   * Notification for events being discarded.
   * @param {ITelemetryItem[]} events - The array of events that have been discarded by the SDK.
   * @param {number} reason           - The reason for which the SDK discarded the events. The EventsDiscardedReason
   * constant should be used to check the different values.
   */


  NotificationManager.prototype.eventsDiscarded = function (events, reason) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };
  /**
   * [Optional] A function called when the events have been requested to be sent to the sever.
   * @param {number} sendReason - The reason why the event batch is being sent.
   * @param {boolean} isAsync   - A flag which identifies whether the requests are being sent in an async or sync manner.
   */


  NotificationManager.prototype.eventsSendRequest = function (sendReason, isAsync) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };

  return NotificationManager;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/AppInsightsCore.js







"use strict";

var AppInsightsCore_AppInsightsCore =
/** @class */
function (_super) {
  __extends(AppInsightsCore, _super);

  function AppInsightsCore() {
    var _this = _super.call(this) || this;

    dynamicproto_js(AppInsightsCore, _this, function (_self, _base) {
      _self.initialize = function (config, extensions, logger, notificationManager) {
        _base.initialize(config, extensions, logger || new DiagnosticLogger_DiagnosticLogger(config), notificationManager || new NotificationManager_NotificationManager(config));
      };

      _self.track = function (telemetryItem) {
        doPerf(_self.getPerfMgr(), function () {
          return "AppInsightsCore:track";
        }, function () {
          if (telemetryItem === null) {
            _notifyInvalidEvent(telemetryItem); // throw error


            throw Error("Invalid telemetry item");
          } // do basic validation before sending it through the pipeline


          _validateTelemetryItem(telemetryItem);

          _base.track(telemetryItem);
        }, function () {
          return {
            item: telemetryItem
          };
        }, !telemetryItem.sync);
      };
      /**
       * Adds a notification listener. The SDK calls methods on the listener when an appropriate notification is raised.
       * The added plugins must raise notifications. If the plugins do not implement the notifications, then no methods will be
       * called.
       * @param {INotificationListener} listener - An INotificationListener object.
       */


      _self.addNotificationListener = function (listener) {
        var manager = _self.getNotifyMgr();

        if (manager) {
          manager.addNotificationListener(listener);
        }
      };
      /**
       * Removes all instances of the listener.
       * @param {INotificationListener} listener - INotificationListener to remove.
       */


      _self.removeNotificationListener = function (listener) {
        var manager = _self.getNotifyMgr();

        if (manager) {
          manager.removeNotificationListener(listener);
        }
      };
      /**
       * Periodically check logger.queue for
       */


      _self.pollInternalLogs = function (eventName) {
        var interval = _self.config.diagnosticLogInterval;

        if (!interval || !(interval > 0)) {
          interval = 10000;
        }

        return setInterval(function () {
          var queue = _self.logger ? _self.logger.queue : [];
          CoreUtils_CoreUtils.arrForEach(queue, function (logMessage) {
            var item = {
              name: eventName ? eventName : "InternalMessageId: " + logMessage.messageId,
              iKey: _self.config.instrumentationKey,
              time: CoreUtils_CoreUtils.toISOString(new Date()),
              baseType: DiagnosticLogger_InternalLogMessage.dataType,
              baseData: {
                message: logMessage.message
              }
            };

            _self.track(item);
          });
          queue.length = 0;
        }, interval);
      };

      function _validateTelemetryItem(telemetryItem) {
        if (CoreUtils_CoreUtils.isNullOrUndefined(telemetryItem.name)) {
          _notifyInvalidEvent(telemetryItem);

          throw Error("telemetry name required");
        }
      }

      function _notifyInvalidEvent(telemetryItem) {
        var manager = _self.getNotifyMgr();

        if (manager) {
          manager.eventsDiscarded([telemetryItem], EventsDiscardedReason.InvalidEvent);
        }
      }
    });
    return _this;
  }

  AppInsightsCore.prototype.initialize = function (config, extensions, logger, notificationManager) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };

  AppInsightsCore.prototype.track = function (telemetryItem) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };
  /**
   * Adds a notification listener. The SDK calls methods on the listener when an appropriate notification is raised.
   * The added plugins must raise notifications. If the plugins do not implement the notifications, then no methods will be
   * called.
   * @param {INotificationListener} listener - An INotificationListener object.
   */


  AppInsightsCore.prototype.addNotificationListener = function (listener) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };
  /**
   * Removes all instances of the listener.
   * @param {INotificationListener} listener - INotificationListener to remove.
   */


  AppInsightsCore.prototype.removeNotificationListener = function (listener) {// @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
  };
  /**
   * Periodically check logger.queue for
   */


  AppInsightsCore.prototype.pollInternalLogs = function (eventName) {
    // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    return 0;
  };

  return AppInsightsCore;
}(BaseCore_BaseCore);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Enums.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * Type of storage to differentiate between local storage and session storage
 */
var StorageType;

(function (StorageType) {
  StorageType[StorageType["LocalStorage"] = 0] = "LocalStorage";
  StorageType[StorageType["SessionStorage"] = 1] = "SessionStorage";
})(StorageType || (StorageType = {}));
/**
 * Enum is used in aiDataContract to describe how fields are serialized.
 * For instance: (Fieldtype.Required | FieldType.Array) will mark the field as required and indicate it's an array
 */


var FieldType;

(function (FieldType) {
  FieldType[FieldType["Default"] = 0] = "Default";
  FieldType[FieldType["Required"] = 1] = "Required";
  FieldType[FieldType["Array"] = 2] = "Array";
  FieldType[FieldType["Hidden"] = 4] = "Hidden";
})(FieldType || (FieldType = {}));

;
var DistributedTracingModes;

(function (DistributedTracingModes) {
  /**
   * (Default) Send Application Insights correlation headers
   */
  DistributedTracingModes[DistributedTracingModes["AI"] = 0] = "AI";
  /**
   * Send both W3C Trace Context headers and back-compatibility Application Insights headers
   */

  DistributedTracingModes[DistributedTracingModes["AI_AND_W3C"] = 1] = "AI_AND_W3C";
  /**
   * Send W3C Trace Context headers
   */

  DistributedTracingModes[DistributedTracingModes["W3C"] = 2] = "W3C";
})(DistributedTracingModes || (DistributedTracingModes = {}));
// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/RequestResponseHeaders.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var RequestHeaders =
/** @class */
function () {
  function RequestHeaders() {}
  /**
   * Request-Context header
   */


  RequestHeaders.requestContextHeader = "Request-Context";
  /**
   * Target instrumentation header that is added to the response and retrieved by the
   * calling application when processing incoming responses.
   */

  RequestHeaders.requestContextTargetKey = "appId";
  /**
   * Request-Context appId format
   */

  RequestHeaders.requestContextAppIdFormat = "appId=cid-v1:";
  /**
   * Request-Id header
   */

  RequestHeaders.requestIdHeader = "Request-Id";
  /**
   * W3C distributed tracing protocol header
   */

  RequestHeaders.traceParentHeader = "traceparent";
  /**
   * Sdk-Context header
   * If this header passed with appId in content then appId will be returned back by the backend.
   */

  RequestHeaders.sdkContextHeader = "Sdk-Context";
  /**
   * String to pass in header for requesting appId back from the backend.
   */

  RequestHeaders.sdkContextHeaderAppIdRequest = "appId";
  RequestHeaders.requestContextHeaderLowerCase = "request-context";
  return RequestHeaders;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Common/DataSanitizer.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.


var DataSanitizer_DataSanitizer =
/** @class */
function () {
  function DataSanitizer() {}

  DataSanitizer.sanitizeKeyAndAddUniqueness = function (logger, key, map) {
    var origLength = key.length;
    var field = DataSanitizer.sanitizeKey(logger, key); // validation truncated the length.  We need to add uniqueness

    if (field.length !== origLength) {
      var i = 0;
      var uniqueField = field;

      while (map[uniqueField] !== undefined) {
        i++;
        uniqueField = field.substring(0, DataSanitizer.MAX_NAME_LENGTH - 3) + DataSanitizer.padNumber(i);
      }

      field = uniqueField;
    }

    return field;
  };

  DataSanitizer.sanitizeKey = function (logger, name) {
    var nameTrunc;

    if (name) {
      // Remove any leading or trailing whitepace
      name = DataSanitizer.trim(name.toString()); // truncate the string to 150 chars

      if (name.length > DataSanitizer.MAX_NAME_LENGTH) {
        nameTrunc = name.substring(0, DataSanitizer.MAX_NAME_LENGTH);
        logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.NameTooLong, "name is too long.  It has been truncated to " + DataSanitizer.MAX_NAME_LENGTH + " characters.", {
          name: name
        }, true);
      }
    }

    return nameTrunc || name;
  };

  DataSanitizer.sanitizeString = function (logger, value, maxLength) {
    if (maxLength === void 0) {
      maxLength = DataSanitizer.MAX_STRING_LENGTH;
    }

    var valueTrunc;

    if (value) {
      maxLength = maxLength ? maxLength : DataSanitizer.MAX_STRING_LENGTH; // in case default parameters dont work

      value = DataSanitizer.trim(value);

      if (value.toString().length > maxLength) {
        valueTrunc = value.toString().substring(0, maxLength);
        logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.StringValueTooLong, "string value is too long. It has been truncated to " + maxLength + " characters.", {
          value: value
        }, true);
      }
    }

    return valueTrunc || value;
  };

  DataSanitizer.sanitizeUrl = function (logger, url) {
    return DataSanitizer.sanitizeInput(logger, url, DataSanitizer.MAX_URL_LENGTH, _InternalMessageId.UrlTooLong);
  };

  DataSanitizer.sanitizeMessage = function (logger, message) {
    var messageTrunc;

    if (message) {
      if (message.length > DataSanitizer.MAX_MESSAGE_LENGTH) {
        messageTrunc = message.substring(0, DataSanitizer.MAX_MESSAGE_LENGTH);
        logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.MessageTruncated, "message is too long, it has been truncated to " + DataSanitizer.MAX_MESSAGE_LENGTH + " characters.", {
          message: message
        }, true);
      }
    }

    return messageTrunc || message;
  };

  DataSanitizer.sanitizeException = function (logger, exception) {
    var exceptionTrunc;

    if (exception) {
      if (exception.length > DataSanitizer.MAX_EXCEPTION_LENGTH) {
        exceptionTrunc = exception.substring(0, DataSanitizer.MAX_EXCEPTION_LENGTH);
        logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.ExceptionTruncated, "exception is too long, it has been truncated to " + DataSanitizer.MAX_EXCEPTION_LENGTH + " characters.", {
          exception: exception
        }, true);
      }
    }

    return exceptionTrunc || exception;
  };

  DataSanitizer.sanitizeProperties = function (logger, properties) {
    if (properties) {
      var tempProps_1 = {};
      objForEachKey(properties, function (prop, value) {
        if (CoreUtils_CoreUtils.isObject(value) && hasJSON()) {
          // Stringify any part C properties
          try {
            value = getJSON().stringify(value);
          } catch (e) {
            logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.CannotSerializeObjectNonSerializable, "custom property is not valid", {
              exception: e
            }, true);
          }
        }

        value = DataSanitizer.sanitizeString(logger, value, DataSanitizer.MAX_PROPERTY_LENGTH);
        prop = DataSanitizer.sanitizeKeyAndAddUniqueness(logger, prop, tempProps_1);
        tempProps_1[prop] = value;
      });
      properties = tempProps_1;
    }

    return properties;
  };

  DataSanitizer.sanitizeMeasurements = function (logger, measurements) {
    if (measurements) {
      var tempMeasurements_1 = {};
      objForEachKey(measurements, function (measure, value) {
        measure = DataSanitizer.sanitizeKeyAndAddUniqueness(logger, measure, tempMeasurements_1);
        tempMeasurements_1[measure] = value;
      });
      measurements = tempMeasurements_1;
    }

    return measurements;
  };

  DataSanitizer.sanitizeId = function (logger, id) {
    return id ? DataSanitizer.sanitizeInput(logger, id, DataSanitizer.MAX_ID_LENGTH, _InternalMessageId.IdTooLong).toString() : id;
  };

  DataSanitizer.sanitizeInput = function (logger, input, maxLength, _msgId) {
    var inputTrunc;

    if (input) {
      input = DataSanitizer.trim(input);

      if (input.length > maxLength) {
        inputTrunc = input.substring(0, maxLength);
        logger.throwInternal(LoggingSeverity.WARNING, _msgId, "input is too long, it has been truncated to " + maxLength + " characters.", {
          data: input
        }, true);
      }
    }

    return inputTrunc || input;
  };

  DataSanitizer.padNumber = function (num) {
    var s = "00" + num;
    return s.substr(s.length - 3);
  };
  /**
   * helper method to trim strings (IE8 does not implement String.prototype.trim)
   */


  DataSanitizer.trim = function (str) {
    if (!CoreUtils_CoreUtils.isString(str)) {
      return str;
    }

    return str.replace(/^\s+|\s+$/g, "");
  };
  /**
   * Max length allowed for custom names.
   */


  DataSanitizer.MAX_NAME_LENGTH = 150;
  /**
   * Max length allowed for Id field in page views.
   */

  DataSanitizer.MAX_ID_LENGTH = 128;
  /**
   * Max length allowed for custom values.
   */

  DataSanitizer.MAX_PROPERTY_LENGTH = 8192;
  /**
   * Max length allowed for names
   */

  DataSanitizer.MAX_STRING_LENGTH = 1024;
  /**
   * Max length allowed for url.
   */

  DataSanitizer.MAX_URL_LENGTH = 2048;
  /**
   * Max length allowed for messages.
   */

  DataSanitizer.MAX_MESSAGE_LENGTH = 32768;
  /**
   * Max length allowed for exceptions.
   */

  DataSanitizer.MAX_EXCEPTION_LENGTH = 32768;
  return DataSanitizer;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Util.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.





var Util_navigator = getNavigator();

var _isString = CoreUtils_CoreUtils.isString;
var _uaDisallowsSameSiteNone = null;

function _endsWith(value, search) {
  var len = value.length;
  var start = len - search.length;
  return value.substring(start >= 0 ? start : 0, len) === search;
}

var Util_Util =
/** @class */
function () {
  function Util() {}

  Util.createDomEvent = function (eventName) {
    var event = null;

    if (CoreUtils_CoreUtils.isFunction(Event)) {
      event = new Event(eventName);
    } else {
      var doc = getDocument();

      if (doc && doc.createEvent) {
        event = doc.createEvent("Event");
        event.initEvent(eventName, true, true);
      }
    }

    return event;
  };
  /*
   * Force the SDK not to use local and session storage
  */


  Util.disableStorage = function () {
    Util._canUseLocalStorage = false;
    Util._canUseSessionStorage = false;
  };
  /**
   * Gets the localStorage object if available
   * @return {Storage} - Returns the storage object if available else returns null
   */


  Util._getLocalStorageObject = function () {
    if (Util.canUseLocalStorage()) {
      return Util._getVerifiedStorageObject(StorageType.LocalStorage);
    }

    return null;
  };
  /**
   * Tests storage object (localStorage or sessionStorage) to verify that it is usable
   * More details here: https://mathiasbynens.be/notes/localstorage-pattern
   * @param storageType Type of storage
   * @return {Storage} Returns storage object verified that it is usable
   */


  Util._getVerifiedStorageObject = function (storageType) {
    var storage = null;
    var fail;
    var uid;

    try {
      if (CoreUtils_CoreUtils.isNullOrUndefined(getGlobal())) {
        return null;
      }

      uid = new Date();
      storage = storageType === StorageType.LocalStorage ? getGlobalInst("localStorage") : getGlobalInst("sessionStorage");
      storage.setItem(uid.toString(), uid.toString());
      fail = storage.getItem(uid.toString()) !== uid.toString();
      storage.removeItem(uid.toString());

      if (fail) {
        storage = null;
      }
    } catch (exception) {
      storage = null;
    }

    return storage;
  };
  /**
   *  Checks if endpoint URL is application insights internal injestion service URL.
   *
   *  @param endpointUrl Endpoint URL to check.
   *  @returns {boolean} True if if endpoint URL is application insights internal injestion service URL.
   */


  Util.isInternalApplicationInsightsEndpoint = function (endpointUrl) {
    return Util._internalEndpoints.indexOf(endpointUrl.toLowerCase()) !== -1;
  };
  /**
   *  Check if the browser supports local storage.
   *
   *  @returns {boolean} True if local storage is supported.
   */


  Util.canUseLocalStorage = function () {
    if (Util._canUseLocalStorage === undefined) {
      Util._canUseLocalStorage = !!Util._getVerifiedStorageObject(StorageType.LocalStorage);
    }

    return Util._canUseLocalStorage;
  };
  /**
   *  Get an object from the browser's local storage
   *
   *  @param {string} name - the name of the object to get from storage
   *  @returns {string} The contents of the storage object with the given name. Null if storage is not supported.
   */


  Util.getStorage = function (logger, name) {
    var storage = Util._getLocalStorageObject();

    if (storage !== null) {
      try {
        return storage.getItem(name);
      } catch (e) {
        Util._canUseLocalStorage = false;
        logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserCannotReadLocalStorage, "Browser failed read of local storage. " + Util.getExceptionName(e), {
          exception: Util.dump(e)
        });
      }
    }

    return null;
  };
  /**
   *  Set the contents of an object in the browser's local storage
   *
   *  @param {string} name - the name of the object to set in storage
   *  @param {string} data - the contents of the object to set in storage
   *  @returns {boolean} True if the storage object could be written.
   */


  Util.setStorage = function (logger, name, data) {
    var storage = Util._getLocalStorageObject();

    if (storage !== null) {
      try {
        storage.setItem(name, data);
        return true;
      } catch (e) {
        Util._canUseLocalStorage = false;
        logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserCannotWriteLocalStorage, "Browser failed write to local storage. " + Util.getExceptionName(e), {
          exception: Util.dump(e)
        });
      }
    }

    return false;
  };
  /**
   *  Remove an object from the browser's local storage
   *
   *  @param {string} name - the name of the object to remove from storage
   *  @returns {boolean} True if the storage object could be removed.
   */


  Util.removeStorage = function (logger, name) {
    var storage = Util._getLocalStorageObject();

    if (storage !== null) {
      try {
        storage.removeItem(name);
        return true;
      } catch (e) {
        Util._canUseLocalStorage = false;
        logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserFailedRemovalFromLocalStorage, "Browser failed removal of local storage item. " + Util.getExceptionName(e), {
          exception: Util.dump(e)
        });
      }
    }

    return false;
  };
  /**
   * Gets the sessionStorage object if available
   * @return {Storage} - Returns the storage object if available else returns null
   */


  Util._getSessionStorageObject = function () {
    if (Util.canUseSessionStorage()) {
      return Util._getVerifiedStorageObject(StorageType.SessionStorage);
    }

    return null;
  };
  /**
   *  Check if the browser supports session storage.
   *
   *  @returns {boolean} True if session storage is supported.
   */


  Util.canUseSessionStorage = function () {
    if (Util._canUseSessionStorage === undefined) {
      Util._canUseSessionStorage = !!Util._getVerifiedStorageObject(StorageType.SessionStorage);
    }

    return Util._canUseSessionStorage;
  };
  /**
   *  Gets the list of session storage keys
   *
   *  @returns {string[]} List of session storage keys
   */


  Util.getSessionStorageKeys = function () {
    var keys = [];

    if (Util.canUseSessionStorage()) {
      objForEachKey(getGlobalInst("sessionStorage"), function (key) {
        keys.push(key);
      });
    }

    return keys;
  };
  /**
   *  Get an object from the browser's session storage
   *
   *  @param {string} name - the name of the object to get from storage
   *  @returns {string} The contents of the storage object with the given name. Null if storage is not supported.
   */


  Util.getSessionStorage = function (logger, name) {
    var storage = Util._getSessionStorageObject();

    if (storage !== null) {
      try {
        return storage.getItem(name);
      } catch (e) {
        Util._canUseSessionStorage = false;
        logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserCannotReadSessionStorage, "Browser failed read of session storage. " + Util.getExceptionName(e), {
          exception: Util.dump(e)
        });
      }
    }

    return null;
  };
  /**
   *  Set the contents of an object in the browser's session storage
   *
   *  @param {string} name - the name of the object to set in storage
   *  @param {string} data - the contents of the object to set in storage
   *  @returns {boolean} True if the storage object could be written.
   */


  Util.setSessionStorage = function (logger, name, data) {
    var storage = Util._getSessionStorageObject();

    if (storage !== null) {
      try {
        storage.setItem(name, data);
        return true;
      } catch (e) {
        Util._canUseSessionStorage = false;
        logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserCannotWriteSessionStorage, "Browser failed write to session storage. " + Util.getExceptionName(e), {
          exception: Util.dump(e)
        });
      }
    }

    return false;
  };
  /**
   *  Remove an object from the browser's session storage
   *
   *  @param {string} name - the name of the object to remove from storage
   *  @returns {boolean} True if the storage object could be removed.
   */


  Util.removeSessionStorage = function (logger, name) {
    var storage = Util._getSessionStorageObject();

    if (storage !== null) {
      try {
        storage.removeItem(name);
        return true;
      } catch (e) {
        Util._canUseSessionStorage = false;
        logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserFailedRemovalFromSessionStorage, "Browser failed removal of session storage item. " + Util.getExceptionName(e), {
          exception: Util.dump(e)
        });
      }
    }

    return false;
  };
  /*
   * Force the SDK not to store and read any data from cookies
   */


  Util.disableCookies = function () {
    CoreUtils_CoreUtils.disableCookies();
  };
  /*
   * helper method to tell if document.cookie object is available
   */


  Util.canUseCookies = function (logger) {
    if (CoreUtils_CoreUtils._canUseCookies === undefined) {
      CoreUtils_CoreUtils._canUseCookies = false;

      try {
        CoreUtils_CoreUtils._canUseCookies = Util.document.cookie !== undefined;
      } catch (e) {
        logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.CannotAccessCookie, "Cannot access document.cookie - " + Util.getExceptionName(e), {
          exception: Util.dump(e)
        });
      }

      ;
    }

    return CoreUtils_CoreUtils._canUseCookies;
  };

  Util.disallowsSameSiteNone = function (userAgent) {
    if (!_isString(userAgent)) {
      return false;
    } // Cover all iOS based browsers here. This includes:
    // - Safari on iOS 12 for iPhone, iPod Touch, iPad
    // - WkWebview on iOS 12 for iPhone, iPod Touch, iPad
    // - Chrome on iOS 12 for iPhone, iPod Touch, iPad
    // All of which are broken by SameSite=None, because they use the iOS networking stack


    if (userAgent.indexOf("CPU iPhone OS 12") !== -1 || userAgent.indexOf("iPad; CPU OS 12") !== -1) {
      return true;
    } // Cover Mac OS X based browsers that use the Mac OS networking stack. This includes:
    // - Safari on Mac OS X
    // This does not include:
    // - Internal browser on Mac OS X
    // - Chrome on Mac OS X
    // - Chromium on Mac OS X
    // Because they do not use the Mac OS networking stack.


    if (userAgent.indexOf("Macintosh; Intel Mac OS X 10_14") !== -1 && userAgent.indexOf("Version/") !== -1 && userAgent.indexOf("Safari") !== -1) {
      return true;
    } // Cover Mac OS X internal browsers that use the Mac OS networking stack. This includes:
    // - Internal browser on Mac OS X
    // This does not include:
    // - Safari on Mac OS X
    // - Chrome on Mac OS X
    // - Chromium on Mac OS X
    // Because they do not use the Mac OS networking stack.


    if (userAgent.indexOf("Macintosh; Intel Mac OS X 10_14") !== -1 && _endsWith(userAgent, "AppleWebKit/605.1.15 (KHTML, like Gecko)")) {
      return true;
    } // Cover Chrome 50-69, because some versions are broken by SameSite=None, and none in this range require it.
    // Note: this covers some pre-Chromium Edge versions, but pre-Chromim Edge does not require SameSite=None, so this is fine.
    // Note: this regex applies to Windows, Mac OS X, and Linux, deliberately.


    if (userAgent.indexOf("Chrome/5") !== -1 || userAgent.indexOf("Chrome/6") !== -1) {
      return true;
    } // Unreal Engine runs Chromium 59, but does not advertise as Chrome until 4.23. Treat versions of Unreal
    // that don't specify their Chrome version as lacking support for SameSite=None.


    if (userAgent.indexOf("UnrealEngine") !== -1 && userAgent.indexOf("Chrome") === -1) {
      return true;
    } // UCBrowser < 12.13.2 ignores Set-Cookie headers with SameSite=None
    // NB: this rule isn't complete - you need regex to make a complete rule.
    // See: https://www.chromium.org/updates/same-site/incompatible-clients


    if (userAgent.indexOf("UCBrowser/12") !== -1 || userAgent.indexOf("UCBrowser/11") !== -1) {
      return true;
    }

    return false;
  };
  /**
   * helper method to set userId and sessionId cookie
   */


  Util.setCookie = function (logger, name, value, domain) {
    if (Util.canUseCookies(logger)) {
      var domainAttrib = "";
      var secureAttrib = "";

      if (domain) {
        domainAttrib = ";domain=" + domain;
      }

      var location_1 = getLocation();

      if (location_1 && location_1.protocol === "https:") {
        secureAttrib = ";secure";

        if (_uaDisallowsSameSiteNone === null) {
          _uaDisallowsSameSiteNone = Util.disallowsSameSiteNone((getNavigator() || {}).userAgent);
        }

        if (!_uaDisallowsSameSiteNone) {
          value = value + ";SameSite=None"; // SameSite can only be set on secure pages
        }
      }

      Util.document.cookie = name + "=" + value + domainAttrib + ";path=/" + secureAttrib;
    }
  };

  Util.stringToBoolOrDefault = function (str, defaultValue) {
    if (defaultValue === void 0) {
      defaultValue = false;
    }

    if (str === undefined || str === null) {
      return defaultValue;
    }

    return str.toString().toLowerCase() === "true";
  };
  /**
   * helper method to access userId and sessionId cookie
   */


  Util.getCookie = function (logger, name) {
    if (!Util.canUseCookies(logger)) {
      return;
    }

    var value = "";

    if (name && name.length) {
      var cookieName = name + "=";
      var cookies = Util.document.cookie.split(";");

      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        cookie = Util.trim(cookie);

        if (cookie && cookie.indexOf(cookieName) === 0) {
          value = cookie.substring(cookieName.length, cookies[i].length);
          break;
        }
      }
    }

    return value;
  };
  /**
   * Deletes a cookie by setting it's expiration time in the past.
   * @param name - The name of the cookie to delete.
   */


  Util.deleteCookie = function (logger, name) {
    if (Util.canUseCookies(logger)) {
      // Setting the expiration date in the past immediately removes the cookie
      Util.document.cookie = name + "=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
  };
  /**
   * generate a random 32bit number (-0x80000000..0x7FFFFFFF).
   */


  Util.random32 = function () {
    return CoreUtils_CoreUtils.random32(true);
  };
  /**
   * Gets IE version returning the document emulation mode if we are running on IE, or null otherwise
   */


  Util.getIEVersion = function (userAgentStr) {
    if (userAgentStr === void 0) {
      userAgentStr = null;
    }

    var myNav = userAgentStr ? userAgentStr.toLowerCase() : Util_navigator ? (Util_navigator.userAgent || "").toLowerCase() : "";

    if (myNav.indexOf("msie") !== -1) {
      return parseInt(myNav.split("msie")[1]);
    } else if (myNav.indexOf("trident/")) {
      var tridentVer = parseInt(myNav.split("trident/")[1]);

      if (tridentVer) {
        return tridentVer + 4;
      }
    }

    return null;
  };
  /**
   * Convert ms to c# time span format
   */


  Util.msToTimeSpan = function (totalms) {
    if (isNaN(totalms) || totalms < 0) {
      totalms = 0;
    }

    totalms = Math.round(totalms);
    var ms = "" + totalms % 1000;
    var sec = "" + Math.floor(totalms / 1000) % 60;
    var min = "" + Math.floor(totalms / (1000 * 60)) % 60;
    var hour = "" + Math.floor(totalms / (1000 * 60 * 60)) % 24;
    var days = Math.floor(totalms / (1000 * 60 * 60 * 24));
    ms = ms.length === 1 ? "00" + ms : ms.length === 2 ? "0" + ms : ms;
    sec = sec.length < 2 ? "0" + sec : sec;
    min = min.length < 2 ? "0" + min : min;
    hour = hour.length < 2 ? "0" + hour : hour;
    return (days > 0 ? days + "." : "") + hour + ":" + min + ":" + sec + "." + ms;
  };
  /**
   * Checks if error has no meaningful data inside. Ususally such errors are received by window.onerror when error
   * happens in a script from other domain (cross origin, CORS).
   */


  Util.isCrossOriginError = function (message, url, lineNumber, columnNumber, error) {
    return (message === "Script error." || message === "Script error") && !error;
  };
  /**
   * Returns string representation of an object suitable for diagnostics logging.
   */


  Util.dump = function (object) {
    var objectTypeDump = Object[strPrototype].toString.call(object);
    var propertyValueDump = "";

    if (objectTypeDump === "[object Error]") {
      propertyValueDump = "{ stack: '" + object.stack + "', message: '" + object.message + "', name: '" + object.name + "'";
    } else if (hasJSON()) {
      propertyValueDump = getJSON().stringify(object);
    }

    return objectTypeDump + propertyValueDump;
  };
  /**
   * Returns the name of object if it's an Error. Otherwise, returns empty string.
   */


  Util.getExceptionName = function (object) {
    var objectTypeDump = Object[strPrototype].toString.call(object);

    if (objectTypeDump === "[object Error]") {
      return object.name;
    }

    return "";
  };
  /**
   * Adds an event handler for the specified event to the window
   * @param eventName {string} - The name of the event
   * @param callback {any} - The callback function that needs to be executed for the given event
   * @return {boolean} - true if the handler was successfully added
   */


  Util.addEventHandler = function (eventName, callback) {
    return EventHelper.Attach(getWindow(), eventName, callback);
  };
  /**
   * Tells if a browser supports a Beacon API
   */


  Util.IsBeaconApiSupported = function () {
    return 'sendBeacon' in Util_navigator && Util_navigator.sendBeacon;
  };

  Util.getExtension = function (extensions, identifier) {
    var extension = null;
    var extIx = 0;

    while (!extension && extIx < extensions.length) {
      if (extensions[extIx] && extensions[extIx].identifier === identifier) {
        extension = extensions[extIx];
      }

      extIx++;
    }

    return extension;
  };

  Util.document = getDocument() || {};
  Util._canUseLocalStorage = undefined;
  Util._canUseSessionStorage = undefined; // listing only non-geo specific locations

  Util._internalEndpoints = ["https://dc.services.visualstudio.com/v2/track", "https://breeze.aimon.applicationinsights.io/v2/track", "https://dc-int.services.visualstudio.com/v2/track"];
  Util.NotSpecified = "not_specified";
  /**
   * helper method to trim strings (IE8 does not implement String.prototype.trim)
   */

  Util.trim = CoreUtils_CoreUtils.strTrim;
  /**
   * generate random id string
   */

  Util.newId = CoreUtils_CoreUtils.newId;
  /**
   * generate W3C trace id
   */

  Util.generateW3CId = CoreUtils_CoreUtils.generateW3CId;
  /**
   * Check if an object is of type Array
   */

  Util.isArray = CoreUtils_CoreUtils.isArray;
  /**
   * Check if an object is of type Error
   */

  Util.isError = CoreUtils_CoreUtils.isError;
  /**
   * Check if an object is of type Date
   */

  Util.isDate = CoreUtils_CoreUtils.isDate; // Keeping this name for backward compatibility (for now)

  Util.toISOStringForIE8 = CoreUtils_CoreUtils.toISOString;
  return Util;
}();



var Util_UrlHelper =
/** @class */
function () {
  function UrlHelper() {}

  UrlHelper.parseUrl = function (url) {
    var anchorIdx = UrlHelper._htmlAnchorIdx;
    var anchorCache = UrlHelper._htmlAnchorElement;
    var tempAnchor = anchorCache[anchorIdx];

    if (!UrlHelper.document.createElement) {
      // Always create the temp instance if createElement is not available
      tempAnchor = {
        host: UrlHelper.parseHost(url, true)
      };
    } else if (!anchorCache[anchorIdx]) {
      // Create and cache the unattached anchor instance 
      tempAnchor = anchorCache[anchorIdx] = UrlHelper.document.createElement('a');
    }

    tempAnchor.href = url; // Move the cache index forward

    anchorIdx++;

    if (anchorIdx >= anchorCache.length) {
      anchorIdx = 0;
    }

    UrlHelper._htmlAnchorIdx = anchorIdx;
    return tempAnchor;
  };

  UrlHelper.getAbsoluteUrl = function (url) {
    var result;
    var a = UrlHelper.parseUrl(url);

    if (a) {
      result = a.href;
    }

    return result;
  };

  UrlHelper.getPathName = function (url) {
    var result;
    var a = UrlHelper.parseUrl(url);

    if (a) {
      result = a.pathname;
    }

    return result;
  };

  UrlHelper.getCompleteUrl = function (method, absoluteUrl) {
    if (method) {
      return method.toUpperCase() + " " + absoluteUrl;
    } else {
      return absoluteUrl;
    }
  }; // Fallback method to grab host from url if document.createElement method is not available


  UrlHelper.parseHost = function (url, inclPort) {
    var fullHost = UrlHelper.parseFullHost(url, inclPort);

    if (fullHost) {
      var match = fullHost.match(/(www[0-9]?\.)?(.[^/:]+)(\:[\d]+)?/i);

      if (match != null && match.length > 3 && _isString(match[2]) && match[2].length > 0) {
        return match[2] + (match[3] || "");
      }
    }

    return fullHost;
  };
  /**
   * Get the full host from the url, optionally including the port
   */


  UrlHelper.parseFullHost = function (url, inclPort) {
    var result = null;

    if (url) {
      var match = url.match(/(\w*):\/\/(.[^/:]+)(\:[\d]+)?/i);

      if (match != null && match.length > 2 && _isString(match[2]) && match[2].length > 0) {
        result = match[2] || "";

        if (inclPort && match.length > 2) {
          var protocol = (match[1] || "").toLowerCase();
          var port = match[3] || ""; // IE includes the standard port so pass it off if it's the same as the protocol

          if (protocol === "http" && port === ":80") {
            port = "";
          } else if (protocol === "https" && port === ":443") {
            port = "";
          }

          result += port;
        }
      }
    }

    return result;
  };

  UrlHelper.document = getDocument() || {};
  UrlHelper._htmlAnchorIdx = 0; // Use an array of temporary values as it's possible for multiple calls to parseUrl() will be called with different URLs
  // Using a cache size of 5 for now as it current depth usage is at least 2, so adding a minor buffer to handle future updates

  UrlHelper._htmlAnchorElement = [null, null, null, null, null];
  return UrlHelper;
}();



var Util_CorrelationIdHelper =
/** @class */
function () {
  function CorrelationIdHelper() {}
  /**
   * Checks if a request url is not on a excluded domain list and if it is safe to add correlation headers.
   * Headers are always included if the current domain matches the request domain. If they do not match (CORS),
   * they are regex-ed across correlationHeaderDomains and correlationHeaderExcludedDomains to determine if headers are included.
   * Some environments don't give information on currentHost via window.location.host (e.g. Cordova). In these cases, the user must
   * manually supply domains to include correlation headers on. Else, no headers will be included at all.
   */


  CorrelationIdHelper.canIncludeCorrelationHeader = function (config, requestUrl, currentHost) {
    if (!requestUrl || config && config.disableCorrelationHeaders) {
      return false;
    }

    if (config && config.correlationHeaderExcludePatterns) {
      for (var i = 0; i < config.correlationHeaderExcludePatterns.length; i++) {
        if (config.correlationHeaderExcludePatterns[i].test(requestUrl)) {
          return false;
        }
      }
    }

    var requestHost = Util_UrlHelper.parseUrl(requestUrl).host.toLowerCase();

    if (requestHost && (requestHost.indexOf(":443") !== -1 || requestHost.indexOf(":80") !== -1)) {
      // [Bug #1260] IE can include the port even for http and https URLs so if present 
      // try and parse it to remove if it matches the default protocol port
      requestHost = (Util_UrlHelper.parseFullHost(requestUrl, true) || "").toLowerCase();
    }

    if ((!config || !config.enableCorsCorrelation) && requestHost !== currentHost) {
      return false;
    }

    var includedDomains = config && config.correlationHeaderDomains;

    if (includedDomains) {
      var matchExists_1;
      CoreUtils_CoreUtils.arrForEach(includedDomains, function (domain) {
        var regex = new RegExp(domain.toLowerCase().replace(/\./g, "\.").replace(/\*/g, ".*"));
        matchExists_1 = matchExists_1 || regex.test(requestHost);
      });

      if (!matchExists_1) {
        return false;
      }
    }

    var excludedDomains = config && config.correlationHeaderExcludedDomains;

    if (!excludedDomains || excludedDomains.length === 0) {
      return true;
    }

    for (var i = 0; i < excludedDomains.length; i++) {
      var regex = new RegExp(excludedDomains[i].toLowerCase().replace(/\./g, "\.").replace(/\*/g, ".*"));

      if (regex.test(requestHost)) {
        return false;
      }
    } // if we don't know anything about the requestHost, require the user to use included/excludedDomains.
    // Previously we always returned false for a falsy requestHost


    return requestHost && requestHost.length > 0;
  };
  /**
   * Combines target appId and target role name from response header.
   */


  CorrelationIdHelper.getCorrelationContext = function (responseHeader) {
    if (responseHeader) {
      var correlationId = CorrelationIdHelper.getCorrelationContextValue(responseHeader, RequestHeaders.requestContextTargetKey);

      if (correlationId && correlationId !== CorrelationIdHelper.correlationIdPrefix) {
        return correlationId;
      }
    }
  };
  /**
   * Gets key from correlation response header
   */


  CorrelationIdHelper.getCorrelationContextValue = function (responseHeader, key) {
    if (responseHeader) {
      var keyValues = responseHeader.split(",");

      for (var i = 0; i < keyValues.length; ++i) {
        var keyValue = keyValues[i].split("=");

        if (keyValue.length === 2 && keyValue[0] === key) {
          return keyValue[1];
        }
      }
    }
  };

  CorrelationIdHelper.correlationIdPrefix = "cid-v1:";
  return CorrelationIdHelper;
}();



var Util_AjaxHelper =
/** @class */
function () {
  function AjaxHelper() {}

  AjaxHelper.ParseDependencyPath = function (logger, absoluteUrl, method, commandName) {
    var target,
        name = commandName,
        data = commandName;

    if (absoluteUrl && absoluteUrl.length > 0) {
      var parsedUrl = Util_UrlHelper.parseUrl(absoluteUrl);
      target = parsedUrl.host;

      if (!name) {
        if (parsedUrl.pathname != null) {
          var pathName = parsedUrl.pathname.length === 0 ? "/" : parsedUrl.pathname;

          if (pathName.charAt(0) !== '/') {
            pathName = "/" + pathName;
          }

          data = parsedUrl.pathname;
          name = DataSanitizer_DataSanitizer.sanitizeString(logger, method ? method + " " + pathName : pathName);
        } else {
          name = DataSanitizer_DataSanitizer.sanitizeString(logger, absoluteUrl);
        }
      }
    } else {
      target = commandName;
      name = commandName;
    }

    return {
      target: target,
      name: name,
      data: data
    };
  };

  return AjaxHelper;
}();


/**
 * A utility class that helps getting time related parameters
 */

var Util_DateTimeUtils =
/** @class */
function () {
  function DateTimeUtils() {}
  /**
   * Get the number of milliseconds since 1970/01/01 in local timezone
   */


  DateTimeUtils.Now = function () {
    // returns the window or webworker performance object
    var perf = getPerformance();

    if (perf && perf.now && perf.timing) {
      var now = perf.now() + perf.timing.navigationStart; // Known issue with IE where this calculation can be negative, so if it is then ignore and fallback

      if (now > 0) {
        return now;
      }
    }

    return new Date().getTime();
  };
  /**
   * Gets duration between two timestamps
   */


  DateTimeUtils.GetDuration = function (start, end) {
    var result = null;

    if (start !== 0 && end !== 0 && !CoreUtils_CoreUtils.isNullOrUndefined(start) && !CoreUtils_CoreUtils.isNullOrUndefined(end)) {
      result = end - start;
    }

    return result;
  };

  return DateTimeUtils;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-channel-js/dist-esm/SendBuffer.js
/*!
 * Application Insights JavaScript SDK - Channel, 2.5.11
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */



/*
 * An array based send buffer.
 */

var SendBuffer_ArraySendBuffer =
/** @class */
function () {
  function ArraySendBuffer(config) {
    var _buffer = [];
    dynamicproto_js(ArraySendBuffer, this, function (_self) {
      _self.enqueue = function (payload) {
        _buffer.push(payload);
      };

      _self.count = function () {
        return _buffer.length;
      };

      _self.clear = function () {
        _buffer.length = 0;
      };

      _self.getItems = function () {
        return _buffer.slice(0);
      };

      _self.batchPayloads = function (payload) {
        if (payload && payload.length > 0) {
          var batch = config.emitLineDelimitedJson() ? payload.join("\n") : "[" + payload.join(",") + "]";
          return batch;
        }

        return null;
      };

      _self.markAsSent = function (payload) {
        _self.clear();
      };

      _self.clearSent = function (payload) {// not supported
      };
    });
  } // Removed Stub for ArraySendBuffer.prototype.enqueue.
  // Removed Stub for ArraySendBuffer.prototype.count.
  // Removed Stub for ArraySendBuffer.prototype.clear.
  // Removed Stub for ArraySendBuffer.prototype.getItems.
  // Removed Stub for ArraySendBuffer.prototype.batchPayloads.
  // Removed Stub for ArraySendBuffer.prototype.markAsSent.
  // Removed Stub for ArraySendBuffer.prototype.clearSent.


  return ArraySendBuffer;
}();


/*
 * Session storage buffer holds a copy of all unsent items in the browser session storage.
 */

var SendBuffer_SessionStorageSendBuffer =
/** @class */
function () {
  function SessionStorageSendBuffer(logger, config) {
    var _bufferFullMessageSent = false; // An in-memory copy of the buffer. A copy is saved to the session storage on enqueue() and clear().
    // The buffer is restored in a constructor and contains unsent events from a previous page.

    var _buffer;

    dynamicproto_js(SessionStorageSendBuffer, this, function (_self) {
      var bufferItems = _getBuffer(SessionStorageSendBuffer.BUFFER_KEY);

      var notDeliveredItems = _getBuffer(SessionStorageSendBuffer.SENT_BUFFER_KEY);

      _buffer = bufferItems.concat(notDeliveredItems); // If the buffer has too many items, drop items from the end.

      if (_buffer.length > SessionStorageSendBuffer.MAX_BUFFER_SIZE) {
        _buffer.length = SessionStorageSendBuffer.MAX_BUFFER_SIZE;
      }

      _setBuffer(SessionStorageSendBuffer.SENT_BUFFER_KEY, []);

      _setBuffer(SessionStorageSendBuffer.BUFFER_KEY, _buffer);

      _self.enqueue = function (payload) {
        if (_buffer.length >= SessionStorageSendBuffer.MAX_BUFFER_SIZE) {
          // sent internal log only once per page view
          if (!_bufferFullMessageSent) {
            logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.SessionStorageBufferFull, "Maximum buffer size reached: " + _buffer.length, true);
            _bufferFullMessageSent = true;
          }

          return;
        }

        _buffer.push(payload);

        _setBuffer(SessionStorageSendBuffer.BUFFER_KEY, _buffer);
      };

      _self.count = function () {
        return _buffer.length;
      };

      _self.clear = function () {
        _buffer = [];

        _setBuffer(SessionStorageSendBuffer.BUFFER_KEY, []);

        _setBuffer(SessionStorageSendBuffer.SENT_BUFFER_KEY, []);

        _bufferFullMessageSent = false;
      };

      _self.getItems = function () {
        return _buffer.slice(0);
      };

      _self.batchPayloads = function (payload) {
        if (payload && payload.length > 0) {
          var batch = config.emitLineDelimitedJson() ? payload.join("\n") : "[" + payload.join(",") + "]";
          return batch;
        }

        return null;
      };

      _self.markAsSent = function (payload) {
        _buffer = _removePayloadsFromBuffer(payload, _buffer);

        _setBuffer(SessionStorageSendBuffer.BUFFER_KEY, _buffer);

        var sentElements = _getBuffer(SessionStorageSendBuffer.SENT_BUFFER_KEY);

        if (sentElements instanceof Array && payload instanceof Array) {
          sentElements = sentElements.concat(payload);

          if (sentElements.length > SessionStorageSendBuffer.MAX_BUFFER_SIZE) {
            // We send telemetry normally. If the SENT_BUFFER is too big we don't add new elements
            // until we receive a response from the backend and the buffer has free space again (see clearSent method)
            logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.SessionStorageBufferFull, "Sent buffer reached its maximum size: " + sentElements.length, true);
            sentElements.length = SessionStorageSendBuffer.MAX_BUFFER_SIZE;
          }

          _setBuffer(SessionStorageSendBuffer.SENT_BUFFER_KEY, sentElements);
        }
      };

      _self.clearSent = function (payload) {
        var sentElements = _getBuffer(SessionStorageSendBuffer.SENT_BUFFER_KEY);

        sentElements = _removePayloadsFromBuffer(payload, sentElements);

        _setBuffer(SessionStorageSendBuffer.SENT_BUFFER_KEY, sentElements);
      };

      function _removePayloadsFromBuffer(payloads, buffer) {
        var remaining = [];
        CoreUtils_CoreUtils.arrForEach(buffer, function (value) {
          if (!CoreUtils_CoreUtils.isFunction(value) && CoreUtils_CoreUtils.arrIndexOf(payloads, value) === -1) {
            remaining.push(value);
          }
        });
        return remaining;
      }

      function _getBuffer(key) {
        var prefixedKey = key;

        try {
          prefixedKey = config.namePrefix && config.namePrefix() ? config.namePrefix() + "_" + prefixedKey : prefixedKey;
          var bufferJson = Util_Util.getSessionStorage(logger, prefixedKey);

          if (bufferJson) {
            var buffer = getJSON().parse(bufferJson);

            if (CoreUtils_CoreUtils.isString(buffer)) {
              // When using some version prototype.js the stringify / parse cycle does not decode array's correctly
              buffer = getJSON().parse(buffer);
            }

            if (buffer && Util_Util.isArray(buffer)) {
              return buffer;
            }
          }
        } catch (e) {
          logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.FailedToRestoreStorageBuffer, " storage key: " + prefixedKey + ", " + Util_Util.getExceptionName(e), {
            exception: Util_Util.dump(e)
          });
        }

        return [];
      }

      function _setBuffer(key, buffer) {
        var prefixedKey = key;

        try {
          prefixedKey = config.namePrefix && config.namePrefix() ? config.namePrefix() + "_" + prefixedKey : prefixedKey;
          var bufferJson = JSON.stringify(buffer);
          Util_Util.setSessionStorage(logger, prefixedKey, bufferJson);
        } catch (e) {
          // if there was an error, clear the buffer
          // telemetry is stored in the _buffer array so we won't loose any items
          Util_Util.setSessionStorage(logger, prefixedKey, JSON.stringify([]));
          logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.FailedToSetStorageBuffer, " storage key: " + prefixedKey + ", " + Util_Util.getExceptionName(e) + ". Buffer cleared", {
            exception: Util_Util.dump(e)
          });
        }
      }
    });
  } // Removed Stub for SessionStorageSendBuffer.prototype.enqueue.
  // Removed Stub for SessionStorageSendBuffer.prototype.count.
  // Removed Stub for SessionStorageSendBuffer.prototype.clear.
  // Removed Stub for SessionStorageSendBuffer.prototype.getItems.
  // Removed Stub for SessionStorageSendBuffer.prototype.batchPayloads.
  // Removed Stub for SessionStorageSendBuffer.prototype.markAsSent.
  // Removed Stub for SessionStorageSendBuffer.prototype.clearSent.


  SessionStorageSendBuffer.BUFFER_KEY = "AI_buffer";
  SessionStorageSendBuffer.SENT_BUFFER_KEY = "AI_sentBuffer"; // Maximum number of payloads stored in the buffer. If the buffer is full, new elements will be dropped.

  SessionStorageSendBuffer.MAX_BUFFER_SIZE = 2000;
  return SessionStorageSendBuffer;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/Generated/Envelope.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * System variables for a telemetry item.
 */
var Envelope_Envelope =
/** @class */
function () {
  function Envelope() {
    this.ver = 1;
    this.sampleRate = 100.0;
    this.tags = {};
  }

  return Envelope;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Common/Envelope.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.






var Common_Envelope_Envelope =
/** @class */
function (_super) {
  __extends(Envelope, _super);
  /**
   * Constructs a new instance of telemetry data.
   */


  function Envelope(logger, data, name) {
    var _this = _super.call(this) || this;

    _this.name = DataSanitizer_DataSanitizer.sanitizeString(logger, name) || Util_Util.NotSpecified;
    _this.data = data;
    _this.time = CoreUtils_CoreUtils.toISOString(new Date());
    _this.aiDataContract = {
      time: FieldType.Required,
      iKey: FieldType.Required,
      name: FieldType.Required,
      sampleRate: function sampleRate() {
        return _this.sampleRate === 100 ? FieldType.Hidden : FieldType.Required;
      },
      tags: FieldType.Required,
      data: FieldType.Required
    };
    return _this;
  }

  return Envelope;
}(Envelope_Envelope);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Constants.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * This is an internal property used to cause internal (reporting) requests to be ignored from reporting
 * additional telemetry, to handle polyfil implementations ALL urls used with a disabled request will
 * also be ignored for future requests even when this property is not provided.
 * Tagging as Ignore as this is an internal value and is not expected to be used outside of the SDK
 * @ignore
 */
var DisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
var SampleRate = "sampleRate";
var ProcessLegacy = "ProcessLegacy";
var HttpMethod = "http.method";
var DEFAULT_BREEZE_ENDPOINT = "https://dc.services.visualstudio.com";
// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/Generated/ContextTagKeys.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// THIS FILE WAS AUTOGENERATED
var ContextTagKeys =
/** @class */
function () {
  function ContextTagKeys() {
    this.applicationVersion = "ai.application.ver";
    this.applicationBuild = "ai.application.build";
    this.applicationTypeId = "ai.application.typeId";
    this.applicationId = "ai.application.applicationId";
    this.applicationLayer = "ai.application.layer";
    this.deviceId = "ai.device.id";
    this.deviceIp = "ai.device.ip";
    this.deviceLanguage = "ai.device.language";
    this.deviceLocale = "ai.device.locale";
    this.deviceModel = "ai.device.model";
    this.deviceFriendlyName = "ai.device.friendlyName";
    this.deviceNetwork = "ai.device.network";
    this.deviceNetworkName = "ai.device.networkName";
    this.deviceOEMName = "ai.device.oemName";
    this.deviceOS = "ai.device.os";
    this.deviceOSVersion = "ai.device.osVersion";
    this.deviceRoleInstance = "ai.device.roleInstance";
    this.deviceRoleName = "ai.device.roleName";
    this.deviceScreenResolution = "ai.device.screenResolution";
    this.deviceType = "ai.device.type";
    this.deviceMachineName = "ai.device.machineName";
    this.deviceVMName = "ai.device.vmName";
    this.deviceBrowser = "ai.device.browser";
    this.deviceBrowserVersion = "ai.device.browserVersion";
    this.locationIp = "ai.location.ip";
    this.locationCountry = "ai.location.country";
    this.locationProvince = "ai.location.province";
    this.locationCity = "ai.location.city";
    this.operationId = "ai.operation.id";
    this.operationName = "ai.operation.name";
    this.operationParentId = "ai.operation.parentId";
    this.operationRootId = "ai.operation.rootId";
    this.operationSyntheticSource = "ai.operation.syntheticSource";
    this.operationCorrelationVector = "ai.operation.correlationVector";
    this.sessionId = "ai.session.id";
    this.sessionIsFirst = "ai.session.isFirst";
    this.sessionIsNew = "ai.session.isNew";
    this.userAccountAcquisitionDate = "ai.user.accountAcquisitionDate";
    this.userAccountId = "ai.user.accountId";
    this.userAgent = "ai.user.userAgent";
    this.userId = "ai.user.id";
    this.userStoreRegion = "ai.user.storeRegion";
    this.userAuthUserId = "ai.user.authUserId";
    this.userAnonymousUserAcquisitionDate = "ai.user.anonUserAcquisitionDate";
    this.userAuthenticatedUserAcquisitionDate = "ai.user.authUserAcquisitionDate";
    this.cloudName = "ai.cloud.name";
    this.cloudRole = "ai.cloud.role";
    this.cloudRoleVer = "ai.cloud.roleVer";
    this.cloudRoleInstance = "ai.cloud.roleInstance";
    this.cloudEnvironment = "ai.cloud.environment";
    this.cloudLocation = "ai.cloud.location";
    this.cloudDeploymentUnit = "ai.cloud.deploymentUnit";
    this.internalNodeName = "ai.internal.nodeName";
    this.internalSdkVersion = "ai.internal.sdkVersion";
    this.internalAgentVersion = "ai.internal.agentVersion";
    this.internalSnippet = "ai.internal.snippet";
    this.internalSdkSrc = "ai.internal.sdkSrc";
  }

  return ContextTagKeys;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/PartAExtensions.js


var Extensions =
/** @class */
function () {
  function Extensions() {}

  Extensions.UserExt = "user";
  Extensions.DeviceExt = "device";
  Extensions.TraceExt = "trace";
  Extensions.WebExt = "web";
  Extensions.AppExt = "app";
  Extensions.OSExt = "os";
  Extensions.SessionExt = "ses";
  Extensions.SDKExt = "sdk";
  return Extensions;
}();


var CtxTagKeys = new ContextTagKeys();
// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/Generated/Domain.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// THIS FILE WAS AUTOGENERATED

/**
 * The abstract common base of all domains.
 */
var Domain =
/** @class */
function () {
  function Domain() {}

  return Domain;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/Generated/RemoteDependencyData.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// THIS FILE WAS AUTOGENERATED

/**
 * An instance of Remote Dependency represents an interaction of the monitored component with a remote component/service like SQL or an HTTP endpoint.
 */

var RemoteDependencyData_RemoteDependencyData =
/** @class */
function (_super) {
  __extends(RemoteDependencyData, _super);

  function RemoteDependencyData() {
    var _this = _super.call(this) || this;

    _this.ver = 2;
    _this.success = true;
    _this.properties = {};
    _this.measurements = {};
    return _this;
  }

  return RemoteDependencyData;
}(Domain);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/RemoteDependencyData.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.





var Telemetry_RemoteDependencyData_RemoteDependencyData =
/** @class */
function (_super) {
  __extends(RemoteDependencyData, _super);
  /**
   * Constructs a new instance of the RemoteDependencyData object
   */


  function RemoteDependencyData(logger, id, absoluteUrl, commandName, value, success, resultCode, method, requestAPI, correlationContext, properties, measurements) {
    if (requestAPI === void 0) {
      requestAPI = "Ajax";
    }

    var _this = _super.call(this) || this;

    _this.aiDataContract = {
      id: FieldType.Required,
      ver: FieldType.Required,
      name: FieldType.Default,
      resultCode: FieldType.Default,
      duration: FieldType.Default,
      success: FieldType.Default,
      data: FieldType.Default,
      target: FieldType.Default,
      type: FieldType.Default,
      properties: FieldType.Default,
      measurements: FieldType.Default,
      kind: FieldType.Default,
      value: FieldType.Default,
      count: FieldType.Default,
      min: FieldType.Default,
      max: FieldType.Default,
      stdDev: FieldType.Default,
      dependencyKind: FieldType.Default,
      dependencySource: FieldType.Default,
      commandName: FieldType.Default,
      dependencyTypeName: FieldType.Default
    };
    _this.id = id;
    _this.duration = Util_Util.msToTimeSpan(value);
    _this.success = success;
    _this.resultCode = resultCode + "";
    _this.type = DataSanitizer_DataSanitizer.sanitizeString(logger, requestAPI);
    var dependencyFields = Util_AjaxHelper.ParseDependencyPath(logger, absoluteUrl, method, commandName);
    _this.data = DataSanitizer_DataSanitizer.sanitizeUrl(logger, commandName) || dependencyFields.data; // get a value from hosturl if commandName not available

    _this.target = DataSanitizer_DataSanitizer.sanitizeString(logger, dependencyFields.target);

    if (correlationContext) {
      _this.target = _this.target + " | " + correlationContext;
    }

    _this.name = DataSanitizer_DataSanitizer.sanitizeString(logger, dependencyFields.name);
    _this.properties = DataSanitizer_DataSanitizer.sanitizeProperties(logger, properties);
    _this.measurements = DataSanitizer_DataSanitizer.sanitizeMeasurements(logger, measurements);
    return _this;
  }

  RemoteDependencyData.envelopeType = "Microsoft.ApplicationInsights.{0}.RemoteDependency";
  RemoteDependencyData.dataType = "RemoteDependencyData";
  return RemoteDependencyData;
}(RemoteDependencyData_RemoteDependencyData);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/Generated/Base.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// THIS FILE WAS AUTOGENERATED

/**
 * Data struct to contain only C section with custom fields.
 */
var Base =
/** @class */
function () {
  function Base() {}

  return Base;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/Generated/Data.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// THIS FILE WAS AUTOGENERATED

/**
 * Data struct to contain both B and C sections.
 */

var Data_Data =
/** @class */
function (_super) {
  __extends(Data, _super);

  function Data() {
    return _super.call(this) || this;
  }

  return Data;
}(Base);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Common/Data.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.



var Common_Data_Data =
/** @class */
function (_super) {
  __extends(Data, _super);
  /**
   * Constructs a new instance of telemetry data.
   */


  function Data(baseType, data) {
    var _this = _super.call(this) || this;
    /**
     * The data contract for serializing this object.
     */


    _this.aiDataContract = {
      baseType: FieldType.Required,
      baseData: FieldType.Required
    };
    _this.baseType = baseType;
    _this.baseData = data;
    return _this;
  }

  return Data;
}(Data_Data);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/Generated/EventData.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// THIS FILE WAS AUTOGENERATED

/**
 * Instances of Event represent structured event records that can be grouped and searched by their properties. Event data item also creates a metric of event count by name.
 */

var EventData =
/** @class */
function (_super) {
  __extends(EventData, _super);

  function EventData() {
    var _this = _super.call(this) || this;

    _this.ver = 2;
    _this.properties = {};
    _this.measurements = {};
    return _this;
  }

  return EventData;
}(Domain);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Event.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.





var Event_Event =
/** @class */
function (_super) {
  __extends(Event, _super);
  /**
   * Constructs a new instance of the EventTelemetry object
   */


  function Event(logger, name, properties, measurements) {
    var _this = _super.call(this) || this;

    _this.aiDataContract = {
      ver: FieldType.Required,
      name: FieldType.Required,
      properties: FieldType.Default,
      measurements: FieldType.Default
    };
    _this.name = DataSanitizer_DataSanitizer.sanitizeString(logger, name) || Util_Util.NotSpecified;
    _this.properties = DataSanitizer_DataSanitizer.sanitizeProperties(logger, properties);
    _this.measurements = DataSanitizer_DataSanitizer.sanitizeMeasurements(logger, measurements);
    return _this;
  }

  Event.envelopeType = "Microsoft.ApplicationInsights.{0}.Event";
  Event.dataType = "EventData";
  return Event;
}(EventData);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/Generated/StackFrame.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// THIS FILE WAS AUTOGENERATED

/**
 * Stack frame information.
 */
var StackFrame =
/** @class */
function () {
  function StackFrame() {}

  return StackFrame;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/Generated/ExceptionData.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * An instance of Exception represents a handled or unhandled exception that occurred during execution of the monitored application.
 */

var ExceptionData =
/** @class */
function (_super) {
  __extends(ExceptionData, _super);

  function ExceptionData() {
    var _this = _super.call(this) || this;

    _this.ver = 2;
    _this.exceptions = [];
    _this.properties = {};
    _this.measurements = {};
    return _this;
  }

  return ExceptionData;
}(Domain);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/Generated/ExceptionDetails.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * Exception details of the exception in a chain.
 */
var ExceptionDetails =
/** @class */
function () {
  function ExceptionDetails() {
    this.hasFullStack = true;
    this.parsedStack = [];
  }

  return ExceptionDetails;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Exception.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.







var strError = "error";

function _isExceptionDetailsInternal(value) {
  return "hasFullStack" in value && "typeName" in value;
}

function _isExceptionInternal(value) {
  return "ver" in value && "exceptions" in value && "properties" in value;
}

function _getErrorType(errorType) {
  // Gets the Error Type by passing the constructor (used to get the true type of native error object).
  var typeName = "";

  if (errorType) {
    typeName = errorType.typeName || errorType.name || "";

    if (!typeName) {
      try {
        var funcNameRegex = /function (.{1,})\(/;
        var results = funcNameRegex.exec(errorType.constructor.toString());
        typeName = results && results.length > 1 ? results[1] : "";
      } catch (e) {// Ignore
      }
    }
  }

  return typeName;
}

var Exception_Exception =
/** @class */
function (_super) {
  __extends(Exception, _super);
  /**
   * Constructs a new instance of the ExceptionTelemetry object
   */


  function Exception(logger, exception, properties, measurements, severityLevel, id) {
    var _this = _super.call(this) || this;

    _this.aiDataContract = {
      ver: FieldType.Required,
      exceptions: FieldType.Required,
      severityLevel: FieldType.Default,
      properties: FieldType.Default,
      measurements: FieldType.Default
    };

    if (!_isExceptionInternal(exception)) {
      _this.exceptions = [new Exception_ExceptionDetails(logger, exception)];
      _this.properties = DataSanitizer_DataSanitizer.sanitizeProperties(logger, properties) || {};
      _this.measurements = DataSanitizer_DataSanitizer.sanitizeMeasurements(logger, measurements);

      if (severityLevel) {
        _this.severityLevel = severityLevel;
      }

      if (id) {
        _this.id = id;
      }
    } else {
      _this.exceptions = exception.exceptions;
      _this.properties = exception.properties;
      _this.measurements = exception.measurements;

      if (exception.severityLevel) {
        _this.severityLevel = exception.severityLevel;
      }

      if (exception.id) {
        _this.id = exception.id;
      }

      if (exception.problemGroup) {
        _this.problemGroup = exception.problemGroup;
      } // bool/int types, use isNullOrUndefined


      _this.ver = 2; // TODO: handle the CS"4.0" ==> breeze 2 conversion in a better way

      if (!CoreUtils_CoreUtils.isNullOrUndefined(exception.isManual)) {
        _this.isManual = exception.isManual;
      }
    }

    return _this;
  }

  Exception.CreateFromInterface = function (logger, exception, properties, measurements) {
    var exceptions = exception.exceptions && CoreUtils_CoreUtils.arrMap(exception.exceptions, function (ex) {
      return Exception_ExceptionDetails.CreateFromInterface(logger, ex);
    });
    var exceptionData = new Exception(logger, __assign({}, exception, {
      exceptions: exceptions
    }), properties, measurements);
    return exceptionData;
  };

  Exception.prototype.toInterface = function () {
    var _a = this,
        exceptions = _a.exceptions,
        properties = _a.properties,
        measurements = _a.measurements,
        severityLevel = _a.severityLevel,
        ver = _a.ver,
        problemGroup = _a.problemGroup,
        id = _a.id,
        isManual = _a.isManual;

    var exceptionDetailsInterface = exceptions instanceof Array && CoreUtils_CoreUtils.arrMap(exceptions, function (exception) {
      return exception.toInterface();
    }) || undefined;
    return {
      ver: "4.0",
      exceptions: exceptionDetailsInterface,
      severityLevel: severityLevel,
      properties: properties,
      measurements: measurements,
      problemGroup: problemGroup,
      id: id,
      isManual: isManual
    };
  };
  /**
   * Creates a simple exception with 1 stack frame. Useful for manual constracting of exception.
   */


  Exception.CreateSimpleException = function (message, typeName, assembly, fileName, details, line) {
    return {
      exceptions: [{
        hasFullStack: true,
        message: message,
        stack: details,
        typeName: typeName
      }]
    };
  };

  Exception.envelopeType = "Microsoft.ApplicationInsights.{0}.Exception";
  Exception.dataType = "ExceptionData";
  return Exception;
}(ExceptionData);



var Exception_ExceptionDetails =
/** @class */
function (_super) {
  __extends(_ExceptionDetails, _super);

  function _ExceptionDetails(logger, exception) {
    var _this = _super.call(this) || this;

    _this.aiDataContract = {
      id: FieldType.Default,
      outerId: FieldType.Default,
      typeName: FieldType.Required,
      message: FieldType.Required,
      hasFullStack: FieldType.Default,
      stack: FieldType.Default,
      parsedStack: FieldType.Array
    };

    if (!_isExceptionDetailsInternal(exception)) {
      var error = exception;

      if (!Util_Util.isError(error)) {
        error = error[strError] || error.evt || error;
      }

      _this.typeName = DataSanitizer_DataSanitizer.sanitizeString(logger, _getErrorType(error)) || Util_Util.NotSpecified;
      _this.message = DataSanitizer_DataSanitizer.sanitizeMessage(logger, exception.message) || Util_Util.NotSpecified;
      var stack = exception.stack;
      _this.parsedStack = _ExceptionDetails.parseStack(stack);
      _this.stack = DataSanitizer_DataSanitizer.sanitizeException(logger, stack);
      _this.hasFullStack = Util_Util.isArray(_this.parsedStack) && _this.parsedStack.length > 0;
    } else {
      _this.typeName = exception.typeName;
      _this.message = exception.message;
      _this.stack = exception.stack;
      _this.parsedStack = exception.parsedStack;
      _this.hasFullStack = exception.hasFullStack;
    }

    return _this;
  }

  _ExceptionDetails.prototype.toInterface = function () {
    var parsedStack = this.parsedStack instanceof Array && CoreUtils_CoreUtils.arrMap(this.parsedStack, function (frame) {
      return frame.toInterface();
    });
    var exceptionDetailsInterface = {
      id: this.id,
      outerId: this.outerId,
      typeName: this.typeName,
      message: this.message,
      hasFullStack: this.hasFullStack,
      stack: this.stack,
      parsedStack: parsedStack || undefined
    };
    return exceptionDetailsInterface;
  };

  _ExceptionDetails.CreateFromInterface = function (logger, exception) {
    var parsedStack = exception.parsedStack instanceof Array && CoreUtils_CoreUtils.arrMap(exception.parsedStack, function (frame) {
      return Exception_StackFrame.CreateFromInterface(frame);
    }) || exception.parsedStack;
    var exceptionDetails = new _ExceptionDetails(logger, __assign({}, exception, {
      parsedStack: parsedStack
    }));
    return exceptionDetails;
  };

  _ExceptionDetails.parseStack = function (stack) {
    var parsedStack;

    if (CoreUtils_CoreUtils.isString(stack)) {
      var frames_1 = stack.split('\n');
      parsedStack = [];
      var level = 0;
      var totalSizeInBytes = 0;

      for (var i = 0; i <= frames_1.length; i++) {
        var frame = frames_1[i];

        if (Exception_StackFrame.regex.test(frame)) {
          var parsedFrame = new Exception_StackFrame(frames_1[i], level++);
          totalSizeInBytes += parsedFrame.sizeInBytes;
          parsedStack.push(parsedFrame);
        }
      } // DP Constraint - exception parsed stack must be < 32KB
      // remove frames from the middle to meet the threshold


      var exceptionParsedStackThreshold = 32 * 1024;

      if (totalSizeInBytes > exceptionParsedStackThreshold) {
        var left = 0;
        var right = parsedStack.length - 1;
        var size = 0;
        var acceptedLeft = left;
        var acceptedRight = right;

        while (left < right) {
          // check size
          var lSize = parsedStack[left].sizeInBytes;
          var rSize = parsedStack[right].sizeInBytes;
          size += lSize + rSize;

          if (size > exceptionParsedStackThreshold) {
            // remove extra frames from the middle
            var howMany = acceptedRight - acceptedLeft + 1;
            parsedStack.splice(acceptedLeft, howMany);
            break;
          } // update pointers


          acceptedLeft = left;
          acceptedRight = right;
          left++;
          right--;
        }
      }
    }

    return parsedStack;
  };

  return _ExceptionDetails;
}(ExceptionDetails);



var Exception_StackFrame =
/** @class */
function (_super) {
  __extends(_StackFrame, _super);

  function _StackFrame(sourceFrame, level) {
    var _this = _super.call(this) || this;

    _this.sizeInBytes = 0;
    _this.aiDataContract = {
      level: FieldType.Required,
      method: FieldType.Required,
      assembly: FieldType.Default,
      fileName: FieldType.Default,
      line: FieldType.Default
    }; // Not converting this to CoreUtils.isString() as typescript uses this logic to "understand" the different
    // types for the 2 different code paths

    if (typeof sourceFrame === "string") {
      var frame = sourceFrame;
      _this.level = level;
      _this.method = "<no_method>";
      _this.assembly = Util_Util.trim(frame);
      _this.fileName = "";
      _this.line = 0;
      var matches = frame.match(_StackFrame.regex);

      if (matches && matches.length >= 5) {
        _this.method = Util_Util.trim(matches[2]) || _this.method;
        _this.fileName = Util_Util.trim(matches[4]);
        _this.line = parseInt(matches[5]) || 0;
      }
    } else {
      _this.level = sourceFrame.level;
      _this.method = sourceFrame.method;
      _this.assembly = sourceFrame.assembly;
      _this.fileName = sourceFrame.fileName;
      _this.line = sourceFrame.line;
      _this.sizeInBytes = 0;
    }

    _this.sizeInBytes += _this.method.length;
    _this.sizeInBytes += _this.fileName.length;
    _this.sizeInBytes += _this.assembly.length; // todo: these might need to be removed depending on how the back-end settles on their size calculation

    _this.sizeInBytes += _StackFrame.baseSize;
    _this.sizeInBytes += _this.level.toString().length;
    _this.sizeInBytes += _this.line.toString().length;
    return _this;
  }

  _StackFrame.CreateFromInterface = function (frame) {
    return new _StackFrame(frame, null
    /* level is available in frame interface */
    );
  };

  _StackFrame.prototype.toInterface = function () {
    return {
      level: this.level,
      method: this.method,
      assembly: this.assembly,
      fileName: this.fileName,
      line: this.line
    };
  }; // regex to match stack frames from ie/chrome/ff
  // methodName=$2, fileName=$4, lineNo=$5, column=$6


  _StackFrame.regex = /^([\s]+at)?(.*?)(\@|\s\(|\s)([^\(\@\n]+):([0-9]+):([0-9]+)(\)?)$/;
  _StackFrame.baseSize = 58; // '{"method":"","level":,"assembly":"","fileName":"","line":}'.length

  return _StackFrame;
}(StackFrame);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/Generated/MetricData.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// THIS FILE WAS AUTOGENERATED

/**
 * An instance of the Metric item is a list of measurements (single data points) and/or aggregations.
 */

var MetricData =
/** @class */
function (_super) {
  __extends(MetricData, _super);

  function MetricData() {
    var _this = _super.call(this) || this;

    _this.ver = 2;
    _this.metrics = [];
    _this.properties = {};
    _this.measurements = {};
    return _this;
  }

  return MetricData;
}(Domain);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/Generated/DataPointType.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// THIS FILE WAS AUTOGENERATED

/**
 * Type of the metric data measurement.
 */
var DataPointType;

(function (DataPointType) {
  DataPointType[DataPointType["Measurement"] = 0] = "Measurement";
  DataPointType[DataPointType["Aggregation"] = 1] = "Aggregation";
})(DataPointType || (DataPointType = {}));
// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/Generated/DataPoint.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// THIS FILE WAS AUTOGENERATED

/**
 * Metric data single measurement.
 */

var DataPoint_DataPoint =
/** @class */
function () {
  function DataPoint() {
    this.kind = DataPointType.Measurement;
  }

  return DataPoint;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Common/DataPoint.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.



var Common_DataPoint_DataPoint =
/** @class */
function (_super) {
  __extends(DataPoint, _super);

  function DataPoint() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    /**
     * The data contract for serializing this object.
     */


    _this.aiDataContract = {
      name: FieldType.Required,
      kind: FieldType.Default,
      value: FieldType.Required,
      count: FieldType.Default,
      min: FieldType.Default,
      max: FieldType.Default,
      stdDev: FieldType.Default
    };
    return _this;
  }

  return DataPoint;
}(DataPoint_DataPoint);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Metric.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.






var Metric_Metric =
/** @class */
function (_super) {
  __extends(Metric, _super);
  /**
   * Constructs a new instance of the MetricTelemetry object
   */


  function Metric(logger, name, value, count, min, max, properties, measurements) {
    var _this = _super.call(this) || this;

    _this.aiDataContract = {
      ver: FieldType.Required,
      metrics: FieldType.Required,
      properties: FieldType.Default
    };
    var dataPoint = new Common_DataPoint_DataPoint();
    dataPoint.count = count > 0 ? count : undefined;
    dataPoint.max = isNaN(max) || max === null ? undefined : max;
    dataPoint.min = isNaN(min) || min === null ? undefined : min;
    dataPoint.name = DataSanitizer_DataSanitizer.sanitizeString(logger, name) || Util_Util.NotSpecified;
    dataPoint.value = value;
    _this.metrics = [dataPoint];
    _this.properties = DataSanitizer_DataSanitizer.sanitizeProperties(logger, properties);
    _this.measurements = DataSanitizer_DataSanitizer.sanitizeMeasurements(logger, measurements);
    return _this;
  }

  Metric.envelopeType = "Microsoft.ApplicationInsights.{0}.Metric";
  Metric.dataType = "MetricData";
  return Metric;
}(MetricData);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/Generated/PageViewData.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// THIS FILE WAS AUTOGENERATED

/**
 * An instance of PageView represents a generic action on a page like a button click. It is also the base type for PageView.
 */

var PageViewData =
/** @class */
function (_super) {
  __extends(PageViewData, _super);

  function PageViewData() {
    var _this = _super.call(this) || this;

    _this.ver = 2;
    _this.properties = {};
    _this.measurements = {};
    return _this;
  }

  return PageViewData;
}(EventData);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/PageView.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.





var PageView_PageView =
/** @class */
function (_super) {
  __extends(PageView, _super);
  /**
   * Constructs a new instance of the PageEventTelemetry object
   */


  function PageView(logger, name, url, durationMs, properties, measurements, id) {
    var _this = _super.call(this) || this;

    _this.aiDataContract = {
      ver: FieldType.Required,
      name: FieldType.Default,
      url: FieldType.Default,
      duration: FieldType.Default,
      properties: FieldType.Default,
      measurements: FieldType.Default,
      id: FieldType.Default
    };
    _this.id = DataSanitizer_DataSanitizer.sanitizeId(logger, id);
    _this.url = DataSanitizer_DataSanitizer.sanitizeUrl(logger, url);
    _this.name = DataSanitizer_DataSanitizer.sanitizeString(logger, name) || Util_Util.NotSpecified;

    if (!isNaN(durationMs)) {
      _this.duration = Util_Util.msToTimeSpan(durationMs);
    }

    _this.properties = DataSanitizer_DataSanitizer.sanitizeProperties(logger, properties);
    _this.measurements = DataSanitizer_DataSanitizer.sanitizeMeasurements(logger, measurements);
    return _this;
  }

  PageView.envelopeType = "Microsoft.ApplicationInsights.{0}.Pageview";
  PageView.dataType = "PageviewData";
  return PageView;
}(PageViewData);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/Generated/PageViewPerfData.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// THIS FILE WAS AUTOGENERATED

/**
 * An instance of PageViewPerf represents: a page view with no performance data, a page view with performance data, or just the performance data of an earlier page request.
 */

var PageViewPerfData =
/** @class */
function (_super) {
  __extends(PageViewPerfData, _super);

  function PageViewPerfData() {
    var _this = _super.call(this) || this;

    _this.ver = 2;
    _this.properties = {};
    _this.measurements = {};
    return _this;
  }

  return PageViewPerfData;
}(PageViewData);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/PageViewPerformance.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.





var PageViewPerformance_PageViewPerformance =
/** @class */
function (_super) {
  __extends(PageViewPerformance, _super);
  /**
   * Constructs a new instance of the PageEventTelemetry object
   */


  function PageViewPerformance(logger, name, url, unused, properties, measurements, cs4BaseData) {
    var _this = _super.call(this) || this;

    _this.aiDataContract = {
      ver: FieldType.Required,
      name: FieldType.Default,
      url: FieldType.Default,
      duration: FieldType.Default,
      perfTotal: FieldType.Default,
      networkConnect: FieldType.Default,
      sentRequest: FieldType.Default,
      receivedResponse: FieldType.Default,
      domProcessing: FieldType.Default,
      properties: FieldType.Default,
      measurements: FieldType.Default
    };
    _this.url = DataSanitizer_DataSanitizer.sanitizeUrl(logger, url);
    _this.name = DataSanitizer_DataSanitizer.sanitizeString(logger, name) || Util_Util.NotSpecified;
    _this.properties = DataSanitizer_DataSanitizer.sanitizeProperties(logger, properties);
    _this.measurements = DataSanitizer_DataSanitizer.sanitizeMeasurements(logger, measurements);

    if (cs4BaseData) {
      _this.domProcessing = cs4BaseData.domProcessing;
      _this.duration = cs4BaseData.duration;
      _this.networkConnect = cs4BaseData.networkConnect;
      _this.perfTotal = cs4BaseData.perfTotal;
      _this.receivedResponse = cs4BaseData.receivedResponse;
      _this.sentRequest = cs4BaseData.sentRequest;
    }

    return _this;
  }

  PageViewPerformance.envelopeType = "Microsoft.ApplicationInsights.{0}.PageviewPerformance";
  PageViewPerformance.dataType = "PageviewPerformanceData";
  return PageViewPerformance;
}(PageViewPerfData);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/Generated/MessageData.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// THIS FILE WAS AUTOGENERATED

/**
 * Instances of Message represent printf-like trace statements that are text-searched. Log4Net, NLog and other text-based log file entries are translated into intances of this type. The message does not have measurements.
 */

var MessageData =
/** @class */
function (_super) {
  __extends(MessageData, _super);

  function MessageData() {
    var _this = _super.call(this) || this;

    _this.ver = 2;
    _this.properties = {};
    _this.measurements = {};
    return _this;
  }

  return MessageData;
}(Domain);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Trace.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.





var Trace_Trace =
/** @class */
function (_super) {
  __extends(Trace, _super);
  /**
   * Constructs a new instance of the TraceTelemetry object
   */


  function Trace(logger, message, severityLevel, properties, measurements) {
    var _this = _super.call(this) || this;

    _this.aiDataContract = {
      ver: FieldType.Required,
      message: FieldType.Required,
      severityLevel: FieldType.Default,
      properties: FieldType.Default
    };
    message = message || Util_Util.NotSpecified;
    _this.message = DataSanitizer_DataSanitizer.sanitizeMessage(logger, message);
    _this.properties = DataSanitizer_DataSanitizer.sanitizeProperties(logger, properties);
    _this.measurements = DataSanitizer_DataSanitizer.sanitizeMeasurements(logger, measurements);

    if (severityLevel) {
      _this.severityLevel = severityLevel;
    }

    return _this;
  }

  Trace.envelopeType = "Microsoft.ApplicationInsights.{0}.Message";
  Trace.dataType = "MessageData";
  return Trace;
}(MessageData);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-channel-js/dist-esm/EnvelopeCreator.js
/*!
 * Application Insights JavaScript SDK - Channel, 2.5.11
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */

 // these two constants are used to filter out properties not needed when trying to extract custom properties and measurements from the incoming payload

var strBaseType = 'baseType';
var strBaseData = 'baseData';
var strProperties = 'properties';
var strTrue = 'true';
var EnvelopeCreator_arrForEach = CoreUtils_CoreUtils.arrForEach;
var EnvelopeCreator_isNullOrUndefined = CoreUtils_CoreUtils.isNullOrUndefined;

function _setValueIf(target, field, value) {
  if (target && value) {
    target[field] = value;
    return target[field];
  }

  return null;
}

var EnvelopeCreator_EnvelopeCreator =
/** @class */
function () {
  function EnvelopeCreator() {}

  EnvelopeCreator.extractPropsAndMeasurements = function (data, properties, measurements) {
    if (!EnvelopeCreator_isNullOrUndefined(data)) {
      objForEachKey(data, function (key, value) {
        if (CoreUtils_CoreUtils.isNumber(value)) {
          measurements[key] = value;
        } else if (CoreUtils_CoreUtils.isString(value)) {
          properties[key] = value;
        } else if (hasJSON()) {
          properties[key] = getJSON().stringify(value);
        }
      });
    }
  }; // TODO: Do we want this to take logger as arg or use this._logger as nonstatic?


  EnvelopeCreator.createEnvelope = function (logger, envelopeType, telemetryItem, data) {
    var envelope = new Common_Envelope_Envelope(logger, data, envelopeType);

    _setValueIf(envelope, 'sampleRate', telemetryItem[SampleRate]);

    if ((telemetryItem[strBaseData] || {}).startTime) {
      envelope.time = CoreUtils_CoreUtils.toISOString(telemetryItem[strBaseData].startTime);
    }

    envelope.iKey = telemetryItem.iKey;
    var iKeyNoDashes = telemetryItem.iKey.replace(/-/g, "");
    envelope.name = envelope.name.replace("{0}", iKeyNoDashes); // extract all extensions from ctx

    EnvelopeCreator.extractPartAExtensions(telemetryItem, envelope); // loop through the envelope tags (extension of Part A) and pick out the ones that should go in outgoing envelope tags

    telemetryItem.tags = telemetryItem.tags || [];
    return envelope;
  };
  /*
   * Maps Part A data from CS 4.0
   */


  EnvelopeCreator.extractPartAExtensions = function (item, env) {
    // todo: switch to keys from common in this method
    var envTags = env.tags = env.tags || {};
    var itmExt = item.ext = item.ext || {};
    var itmTags = item.tags = item.tags || [];
    var extUser = itmExt.user;

    if (extUser) {
      _setValueIf(envTags, CtxTagKeys.userAuthUserId, extUser.authId);

      _setValueIf(envTags, CtxTagKeys.userId, extUser.id || extUser.localId);
    }

    var extApp = itmExt.app;

    if (extApp) {
      _setValueIf(envTags, CtxTagKeys.sessionId, extApp.sesId);
    }

    var extDevice = itmExt.device;

    if (extDevice) {
      _setValueIf(envTags, CtxTagKeys.deviceId, extDevice.id || extDevice.localId);

      _setValueIf(envTags, CtxTagKeys.deviceType, extDevice.deviceClass);

      _setValueIf(envTags, CtxTagKeys.deviceIp, extDevice.ip);

      _setValueIf(envTags, CtxTagKeys.deviceModel, extDevice.model);

      _setValueIf(envTags, CtxTagKeys.deviceType, extDevice.deviceType);
    }

    var web = item.ext.web;

    if (web) {
      _setValueIf(envTags, CtxTagKeys.deviceLanguage, web.browserLang);

      _setValueIf(envTags, CtxTagKeys.deviceBrowserVersion, web.browserVer);

      _setValueIf(envTags, CtxTagKeys.deviceBrowser, web.browser);

      var envData = env.data = env.data || {};
      var envBaseData = envData[strBaseData] = envData[strBaseData] || {};
      var envProps = envBaseData[strProperties] = envBaseData[strProperties] || {};

      _setValueIf(envProps, 'domain', web.domain);

      _setValueIf(envProps, 'isManual', web.isManual ? strTrue : null);

      _setValueIf(envProps, 'screenRes', web.screenRes);

      _setValueIf(envProps, 'userConsent', web.userConsent ? strTrue : null);
    }

    var extOs = itmExt.os;

    if (extOs) {
      _setValueIf(envTags, CtxTagKeys.deviceOS, extOs.name);
    } // No support for mapping Trace.traceState to 2.0 as it is currently empty


    var extTrace = itmExt.trace;

    if (extTrace) {
      _setValueIf(envTags, CtxTagKeys.operationParentId, extTrace.parentID);

      _setValueIf(envTags, CtxTagKeys.operationName, extTrace.name);

      _setValueIf(envTags, CtxTagKeys.operationId, extTrace.traceID);
    } // Sample 4.0 schema
    //  {
    //     "time" : "2018-09-05T22:51:22.4936Z",
    //     "name" : "MetricWithNamespace",
    //     "iKey" : "ABC-5a4cbd20-e601-4ef5-a3c6-5d6577e4398e",
    //     "ext": {  "cloud": {
    //          "role": "WATSON3",
    //          "roleInstance": "CO4AEAP00000260"
    //      },
    //      "device": {}, "correlation": {} },
    //      "tags": [
    //        { "amazon.region" : "east2" },
    //        { "os.expid" : "wp:02df239" }
    //     ]
    //   }


    var tgs = {}; // deals with tags.push({object})

    for (var i = itmTags.length - 1; i >= 0; i--) {
      var tg = itmTags[i];
      objForEachKey(tg, function (key, value) {
        tgs[key] = value;
      });
      itmTags.splice(i, 1);
    } // deals with tags[key]=value (and handles hasOwnProperty)


    objForEachKey(itmTags, function (tg, value) {
      tgs[tg] = value;
    });
    env.tags = __assign({}, envTags, tgs);

    if (!env.tags[CtxTagKeys.internalSdkVersion]) {
      // Append a version in case it is not already set
      env.tags[CtxTagKeys.internalSdkVersion] = "javascript:" + EnvelopeCreator.Version;
    }
  };

  EnvelopeCreator.prototype.Init = function (logger, telemetryItem) {
    this._logger = logger;

    if (EnvelopeCreator_isNullOrUndefined(telemetryItem[strBaseData])) {
      this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.TelemetryEnvelopeInvalid, "telemetryItem.baseData cannot be null.");
    }
  };

  EnvelopeCreator.Version = "2.5.11";
  return EnvelopeCreator;
}();



var EnvelopeCreator_DependencyEnvelopeCreator =
/** @class */
function (_super) {
  __extends(DependencyEnvelopeCreator, _super);

  function DependencyEnvelopeCreator() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  DependencyEnvelopeCreator.prototype.Create = function (logger, telemetryItem) {
    _super.prototype.Init.call(this, logger, telemetryItem);

    var customMeasurements = telemetryItem[strBaseData].measurements || {};
    var customProperties = telemetryItem[strBaseData][strProperties] || {};
    EnvelopeCreator_EnvelopeCreator.extractPropsAndMeasurements(telemetryItem.data, customProperties, customMeasurements);
    var bd = telemetryItem[strBaseData];

    if (EnvelopeCreator_isNullOrUndefined(bd)) {
      logger.warnToConsole("Invalid input for dependency data");
      return null;
    }

    var method = bd[strProperties] && bd[strProperties][HttpMethod] ? bd[strProperties][HttpMethod] : "GET";
    var remoteDepData = new Telemetry_RemoteDependencyData_RemoteDependencyData(logger, bd.id, bd.target, bd.name, bd.duration, bd.success, bd.responseCode, method, bd.type, bd.correlationContext, customProperties, customMeasurements);
    var data = new Common_Data_Data(Telemetry_RemoteDependencyData_RemoteDependencyData.dataType, remoteDepData);
    return EnvelopeCreator_EnvelopeCreator.createEnvelope(logger, Telemetry_RemoteDependencyData_RemoteDependencyData.envelopeType, telemetryItem, data);
  };

  DependencyEnvelopeCreator.DependencyEnvelopeCreator = new DependencyEnvelopeCreator();
  return DependencyEnvelopeCreator;
}(EnvelopeCreator_EnvelopeCreator);



var EnvelopeCreator_EventEnvelopeCreator =
/** @class */
function (_super) {
  __extends(EventEnvelopeCreator, _super);

  function EventEnvelopeCreator() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  EventEnvelopeCreator.prototype.Create = function (logger, telemetryItem) {
    _super.prototype.Init.call(this, logger, telemetryItem);

    var customProperties = {};
    var customMeasurements = {};

    if (telemetryItem[strBaseType] !== Event_Event.dataType) {
      customProperties['baseTypeSource'] = telemetryItem[strBaseType]; // save the passed in base type as a property
    }

    if (telemetryItem[strBaseType] === Event_Event.dataType) {
      customProperties = telemetryItem[strBaseData][strProperties] || {};
      customMeasurements = telemetryItem[strBaseData].measurements || {};
    } else {
      if (telemetryItem[strBaseData]) {
        EnvelopeCreator_EnvelopeCreator.extractPropsAndMeasurements(telemetryItem[strBaseData], customProperties, customMeasurements);
      }
    } // Extract root level properties from part C telemetryItem.data


    EnvelopeCreator_EnvelopeCreator.extractPropsAndMeasurements(telemetryItem.data, customProperties, customMeasurements);
    var eventName = telemetryItem[strBaseData].name;
    var eventData = new Event_Event(logger, eventName, customProperties, customMeasurements);
    var data = new Common_Data_Data(Event_Event.dataType, eventData);
    return EnvelopeCreator_EnvelopeCreator.createEnvelope(logger, Event_Event.envelopeType, telemetryItem, data);
  };

  EventEnvelopeCreator.EventEnvelopeCreator = new EventEnvelopeCreator();
  return EventEnvelopeCreator;
}(EnvelopeCreator_EnvelopeCreator);



var EnvelopeCreator_ExceptionEnvelopeCreator =
/** @class */
function (_super) {
  __extends(ExceptionEnvelopeCreator, _super);

  function ExceptionEnvelopeCreator() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ExceptionEnvelopeCreator.prototype.Create = function (logger, telemetryItem) {
    _super.prototype.Init.call(this, logger, telemetryItem); // Extract root level properties from part C telemetryItem.data


    var customMeasurements = telemetryItem[strBaseData].measurements || {};
    var customProperties = telemetryItem[strBaseData][strProperties] || {};
    EnvelopeCreator_EnvelopeCreator.extractPropsAndMeasurements(telemetryItem.data, customProperties, customMeasurements);
    var bd = telemetryItem[strBaseData];
    var exData = Exception_Exception.CreateFromInterface(logger, bd, customProperties, customMeasurements);
    var data = new Common_Data_Data(Exception_Exception.dataType, exData);
    return EnvelopeCreator_EnvelopeCreator.createEnvelope(logger, Exception_Exception.envelopeType, telemetryItem, data);
  };

  ExceptionEnvelopeCreator.ExceptionEnvelopeCreator = new ExceptionEnvelopeCreator();
  return ExceptionEnvelopeCreator;
}(EnvelopeCreator_EnvelopeCreator);



var EnvelopeCreator_MetricEnvelopeCreator =
/** @class */
function (_super) {
  __extends(MetricEnvelopeCreator, _super);

  function MetricEnvelopeCreator() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MetricEnvelopeCreator.prototype.Create = function (logger, telemetryItem) {
    _super.prototype.Init.call(this, logger, telemetryItem);

    var baseData = telemetryItem[strBaseData];
    var props = baseData[strProperties] || {};
    var measurements = baseData.measurements || {};
    EnvelopeCreator_EnvelopeCreator.extractPropsAndMeasurements(telemetryItem.data, props, measurements);
    var baseMetricData = new Metric_Metric(logger, baseData.name, baseData.average, baseData.sampleCount, baseData.min, baseData.max, props, measurements);
    var data = new Common_Data_Data(Metric_Metric.dataType, baseMetricData);
    return EnvelopeCreator_EnvelopeCreator.createEnvelope(logger, Metric_Metric.envelopeType, telemetryItem, data);
  };

  MetricEnvelopeCreator.MetricEnvelopeCreator = new MetricEnvelopeCreator();
  return MetricEnvelopeCreator;
}(EnvelopeCreator_EnvelopeCreator);



var EnvelopeCreator_PageViewEnvelopeCreator =
/** @class */
function (_super) {
  __extends(PageViewEnvelopeCreator, _super);

  function PageViewEnvelopeCreator() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PageViewEnvelopeCreator.prototype.Create = function (logger, telemetryItem) {
    _super.prototype.Init.call(this, logger, telemetryItem); // Since duration is not part of the domain properties in Common Schema, extract it from part C


    var strDuration = "duration";
    var duration;
    var baseData = telemetryItem[strBaseData];

    if (!EnvelopeCreator_isNullOrUndefined(baseData) && !EnvelopeCreator_isNullOrUndefined(baseData[strProperties]) && !EnvelopeCreator_isNullOrUndefined(baseData[strProperties][strDuration])) {
      duration = baseData[strProperties][strDuration];
      delete baseData[strProperties][strDuration];
    } else if (!EnvelopeCreator_isNullOrUndefined(telemetryItem.data) && !EnvelopeCreator_isNullOrUndefined(telemetryItem.data[strDuration])) {
      duration = telemetryItem.data[strDuration];
      delete telemetryItem.data[strDuration];
    }

    var bd = telemetryItem[strBaseData]; // special case: pageview.id is grabbed from current operation id. Analytics plugin is decoupled from properties plugin, so this is done here instead. This can be made a default telemetry intializer instead if needed to be decoupled from channel

    var currentContextId;

    if (((telemetryItem.ext || {}).trace || {}).traceID) {
      currentContextId = telemetryItem.ext.trace.traceID;
    }

    var id = bd.id || currentContextId;
    var name = bd.name;
    var url = bd.uri;
    var properties = bd[strProperties] || {};
    var measurements = bd.measurements || {}; // refUri is a field that Breeze still does not recognize as part of Part B. For now, put it in Part C until it supports it as a domain property

    if (!EnvelopeCreator_isNullOrUndefined(bd.refUri)) {
      properties["refUri"] = bd.refUri;
    } // pageType is a field that Breeze still does not recognize as part of Part B. For now, put it in Part C until it supports it as a domain property


    if (!EnvelopeCreator_isNullOrUndefined(bd.pageType)) {
      properties["pageType"] = bd.pageType;
    } // isLoggedIn is a field that Breeze still does not recognize as part of Part B. For now, put it in Part C until it supports it as a domain property


    if (!EnvelopeCreator_isNullOrUndefined(bd.isLoggedIn)) {
      properties["isLoggedIn"] = bd.isLoggedIn.toString();
    } // pageTags is a field that Breeze still does not recognize as part of Part B. For now, put it in Part C until it supports it as a domain property


    if (!EnvelopeCreator_isNullOrUndefined(bd[strProperties])) {
      var pageTags = bd[strProperties];
      objForEachKey(pageTags, function (key, value) {
        properties[key] = value;
      });
    }

    EnvelopeCreator_EnvelopeCreator.extractPropsAndMeasurements(telemetryItem.data, properties, measurements);
    var pageViewData = new PageView_PageView(logger, name, url, duration, properties, measurements, id);
    var data = new Common_Data_Data(PageView_PageView.dataType, pageViewData);
    return EnvelopeCreator_EnvelopeCreator.createEnvelope(logger, PageView_PageView.envelopeType, telemetryItem, data);
  };

  PageViewEnvelopeCreator.PageViewEnvelopeCreator = new PageViewEnvelopeCreator();
  return PageViewEnvelopeCreator;
}(EnvelopeCreator_EnvelopeCreator);



var EnvelopeCreator_PageViewPerformanceEnvelopeCreator =
/** @class */
function (_super) {
  __extends(PageViewPerformanceEnvelopeCreator, _super);

  function PageViewPerformanceEnvelopeCreator() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PageViewPerformanceEnvelopeCreator.prototype.Create = function (logger, telemetryItem) {
    _super.prototype.Init.call(this, logger, telemetryItem);

    var bd = telemetryItem[strBaseData];
    var name = bd.name;
    var url = bd.uri || bd.url;
    var properties = bd[strProperties] || {};
    var measurements = bd.measurements || {};
    EnvelopeCreator_EnvelopeCreator.extractPropsAndMeasurements(telemetryItem.data, properties, measurements);
    var baseData = new PageViewPerformance_PageViewPerformance(logger, name, url, undefined, properties, measurements, bd);
    var data = new Common_Data_Data(PageViewPerformance_PageViewPerformance.dataType, baseData);
    return EnvelopeCreator_EnvelopeCreator.createEnvelope(logger, PageViewPerformance_PageViewPerformance.envelopeType, telemetryItem, data);
  };

  PageViewPerformanceEnvelopeCreator.PageViewPerformanceEnvelopeCreator = new PageViewPerformanceEnvelopeCreator();
  return PageViewPerformanceEnvelopeCreator;
}(EnvelopeCreator_EnvelopeCreator);



var EnvelopeCreator_TraceEnvelopeCreator =
/** @class */
function (_super) {
  __extends(TraceEnvelopeCreator, _super);

  function TraceEnvelopeCreator() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TraceEnvelopeCreator.prototype.Create = function (logger, telemetryItem) {
    _super.prototype.Init.call(this, logger, telemetryItem);

    var message = telemetryItem[strBaseData].message;
    var severityLevel = telemetryItem[strBaseData].severityLevel;
    var props = telemetryItem[strBaseData][strProperties] || {};
    var measurements = telemetryItem[strBaseData].measurements || {};
    EnvelopeCreator_EnvelopeCreator.extractPropsAndMeasurements(telemetryItem.data, props, measurements);
    var baseData = new Trace_Trace(logger, message, severityLevel, props, measurements);
    var data = new Common_Data_Data(Trace_Trace.dataType, baseData);
    return EnvelopeCreator_EnvelopeCreator.createEnvelope(logger, Trace_Trace.envelopeType, telemetryItem, data);
  };

  TraceEnvelopeCreator.TraceEnvelopeCreator = new TraceEnvelopeCreator();
  return TraceEnvelopeCreator;
}(EnvelopeCreator_EnvelopeCreator);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-channel-js/dist-esm/Serializer.js
/*!
 * Application Insights JavaScript SDK - Channel, 2.5.11
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */




var Serializer_Serializer =
/** @class */
function () {
  function Serializer(logger) {
    dynamicproto_js(Serializer, this, function (_self) {
      /**
       * Serializes the current object to a JSON string.
       */
      _self.serialize = function (input) {
        var output = _serializeObject(input, "root");

        try {
          return getJSON().stringify(output);
        } catch (e) {
          // if serialization fails return an empty string
          logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.CannotSerializeObject, e && CoreUtils_CoreUtils.isFunction(e.toString) ? e.toString() : "Error serializing object", null, true);
        }
      };

      function _serializeObject(source, name) {
        var circularReferenceCheck = "__aiCircularRefCheck";
        var output = {};

        if (!source) {
          logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.CannotSerializeObject, "cannot serialize object because it is null or undefined", {
            name: name
          }, true);
          return output;
        }

        if (source[circularReferenceCheck]) {
          logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.CircularReferenceDetected, "Circular reference detected while serializing object", {
            name: name
          }, true);
          return output;
        }

        if (!source.aiDataContract) {
          // special case for measurements/properties/tags
          if (name === "measurements") {
            output = _serializeStringMap(source, "number", name);
          } else if (name === "properties") {
            output = _serializeStringMap(source, "string", name);
          } else if (name === "tags") {
            output = _serializeStringMap(source, "string", name);
          } else if (Util_Util.isArray(source)) {
            output = _serializeArray(source, name);
          } else {
            logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.CannotSerializeObjectNonSerializable, "Attempting to serialize an object which does not implement ISerializable", {
              name: name
            }, true);

            try {
              // verify that the object can be stringified
              getJSON().stringify(source);
              output = source;
            } catch (e) {
              // if serialization fails return an empty string
              logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.CannotSerializeObject, e && CoreUtils_CoreUtils.isFunction(e.toString) ? e.toString() : "Error serializing object", null, true);
            }
          }

          return output;
        }

        source[circularReferenceCheck] = true;
        objForEachKey(source.aiDataContract, function (field, contract) {
          var isRequired = CoreUtils_CoreUtils.isFunction(contract) ? contract() & FieldType.Required : contract & FieldType.Required;
          var isHidden = CoreUtils_CoreUtils.isFunction(contract) ? contract() & FieldType.Hidden : contract & FieldType.Hidden;
          var isArray = contract & FieldType.Array;
          var isPresent = source[field] !== undefined;
          var isObject = CoreUtils_CoreUtils.isObject(source[field]) && source[field] !== null;

          if (isRequired && !isPresent && !isArray) {
            logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.MissingRequiredFieldSpecification, "Missing required field specification. The field is required but not present on source", {
              field: field,
              name: name
            }); // If not in debug mode, continue and hope the error is permissible
          } else if (!isHidden) {
            var value = void 0;

            if (isObject) {
              if (isArray) {
                // special case; recurse on each object in the source array
                value = _serializeArray(source[field], field);
              } else {
                // recurse on the source object in this field
                value = _serializeObject(source[field], field);
              }
            } else {
              // assign the source field to the output even if undefined or required
              value = source[field];
            } // only emit this field if the value is defined


            if (value !== undefined) {
              output[field] = value;
            }
          }
        });
        delete source[circularReferenceCheck];
        return output;
      }

      function _serializeArray(sources, name) {
        var output;

        if (!!sources) {
          if (!Util_Util.isArray(sources)) {
            logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.ItemNotInArray, "This field was specified as an array in the contract but the item is not an array.\r\n", {
              name: name
            }, true);
          } else {
            output = [];

            for (var i = 0; i < sources.length; i++) {
              var source = sources[i];

              var item = _serializeObject(source, name + "[" + i + "]");

              output.push(item);
            }
          }
        }

        return output;
      }

      function _serializeStringMap(map, expectedType, name) {
        var output;

        if (map) {
          output = {};
          objForEachKey(map, function (field, value) {
            if (expectedType === "string") {
              if (value === undefined) {
                output[field] = "undefined";
              } else if (value === null) {
                output[field] = "null";
              } else if (!value.toString) {
                output[field] = "invalid field: toString() is not defined.";
              } else {
                output[field] = value.toString();
              }
            } else if (expectedType === "number") {
              if (value === undefined) {
                output[field] = "undefined";
              } else if (value === null) {
                output[field] = "null";
              } else {
                var num = parseFloat(value);

                if (isNaN(num)) {
                  output[field] = "NaN";
                } else {
                  output[field] = num;
                }
              }
            } else {
              output[field] = "invalid field: " + name + " is of unknown type.";
              logger.throwInternal(LoggingSeverity.CRITICAL, output[field], null, true);
            }
          });
        }

        return output;
      }
    });
  } // Removed Stub for Serializer.prototype.serialize.


  return Serializer;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-common/dist-esm/applicationinsights-common.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

























var PropertiesPluginIdentifier = "AppInsightsPropertiesPlugin";
var BreezeChannelIdentifier = "AppInsightsChannelPlugin";
var AnalyticsPluginIdentifier = "ApplicationInsightsAnalytics";
// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-channel-js/dist-esm/Offline.js
/*!
 * Application Insights JavaScript SDK - Channel, 2.5.11
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */


/**
 * @description Monitors browser for offline events
 * @export default - Offline: Static instance of OfflineListener
 * @class OfflineListener
 */

var Offline_OfflineListener =
/** @class */
function () {
  function OfflineListener() {
    var _window = getWindow();

    var _document = getDocument();

    var isListening = false;
    var _onlineStatus = true;
    dynamicproto_js(OfflineListener, this, function (_self) {
      try {
        if (_window) {
          if (EventHelper.Attach(_window, 'online', _setOnline)) {
            EventHelper.Attach(_window, 'offline', _setOffline);
            isListening = true;
          }
        }

        if (_document) {
          // Also attach to the document.body or document
          var target = _document.body || _document;

          if (!CoreUtils_CoreUtils.isUndefined(target.ononline)) {
            target.ononline = _setOnline;
            target.onoffline = _setOffline;
            isListening = true;
          }
        }
      } catch (e) {
        // this makes react-native less angry
        isListening = false;
      }

      _self.isListening = isListening;

      _self.isOnline = function () {
        var result = true;

        var _navigator = getNavigator();

        if (isListening) {
          result = _onlineStatus;
        } else if (_navigator && !CoreUtils_CoreUtils.isNullOrUndefined(_navigator.onLine)) {
          result = _navigator.onLine;
        }

        return result;
      };

      _self.isOffline = function () {
        return !_self.isOnline();
      };

      function _setOnline() {
        _onlineStatus = true;
      }

      function _setOffline() {
        _onlineStatus = false;
      }
    });
  } // Removed Stub for OfflineListener.prototype.isOnline.
  // Removed Stub for OfflineListener.prototype.isOffline.


  OfflineListener.Offline = new OfflineListener();
  return OfflineListener;
}();


var Offline = Offline_OfflineListener.Offline;
// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-channel-js/dist-esm/TelemetryProcessors/SamplingScoreGenerators/HashCodeScoreGenerator.js
/*!
 * Application Insights JavaScript SDK - Channel, 2.5.11
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */
var HashCodeScoreGenerator =
/** @class */
function () {
  function HashCodeScoreGenerator() {}

  HashCodeScoreGenerator.prototype.getHashCodeScore = function (key) {
    var score = this.getHashCode(key) / HashCodeScoreGenerator.INT_MAX_VALUE;
    return score * 100;
  };

  HashCodeScoreGenerator.prototype.getHashCode = function (input) {
    if (input === "") {
      return 0;
    }

    while (input.length < HashCodeScoreGenerator.MIN_INPUT_LENGTH) {
      input = input.concat(input);
    } // 5381 is a magic number: http://stackoverflow.com/questions/10696223/reason-for-5381-number-in-djb-hash-function


    var hash = 5381;

    for (var i = 0; i < input.length; ++i) {
      hash = (hash << 5) + hash + input.charCodeAt(i); // 'hash' is of number type which means 53 bit integer (http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types-number-type)
      // 'hash & hash' will keep it 32 bit integer - just to make it clearer what the result is.

      hash = hash & hash;
    }

    return Math.abs(hash);
  }; // We're using 32 bit math, hence max value is (2^31 - 1)


  HashCodeScoreGenerator.INT_MAX_VALUE = 2147483647; // (Magic number) DJB algorithm can't work on shorter strings (results in poor distribution

  HashCodeScoreGenerator.MIN_INPUT_LENGTH = 8;
  return HashCodeScoreGenerator;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-channel-js/dist-esm/TelemetryProcessors/SamplingScoreGenerators/SamplingScoreGenerator.js
/*!
 * Application Insights JavaScript SDK - Channel, 2.5.11
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */



var SamplingScoreGenerator_SamplingScoreGenerator =
/** @class */
function () {
  function SamplingScoreGenerator() {
    this.hashCodeGeneragor = new HashCodeScoreGenerator();
    this.keys = new ContextTagKeys();
  }

  SamplingScoreGenerator.prototype.getSamplingScore = function (item) {
    var score = 0;

    if (item.tags && item.tags[this.keys.userId]) {
      score = this.hashCodeGeneragor.getHashCodeScore(item.tags[this.keys.userId]);
    } else if (item.ext && item.ext.user && item.ext.user.id) {
      score = this.hashCodeGeneragor.getHashCodeScore(item.ext.user.id);
    } else if (item.tags && item.tags[this.keys.operationId]) {
      score = this.hashCodeGeneragor.getHashCodeScore(item.tags[this.keys.operationId]);
    } else if (item.ext && item.ext.telemetryTrace && item.ext.telemetryTrace.traceID) {
      score = this.hashCodeGeneragor.getHashCodeScore(item.ext.telemetryTrace.traceID);
    } else {
      // tslint:disable-next-line:insecure-random
      score = Math.random() * 100;
    }

    return score;
  };

  return SamplingScoreGenerator;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-channel-js/dist-esm/TelemetryProcessors/Sample.js
/*!
 * Application Insights JavaScript SDK - Channel, 2.5.11
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */




var Sample_Sample =
/** @class */
function () {
  function Sample(sampleRate, logger) {
    // We're using 32 bit math, hence max value is (2^31 - 1)
    this.INT_MAX_VALUE = 2147483647;
    this._logger = CoreUtils_CoreUtils.isNullOrUndefined(logger) ? new DiagnosticLogger_DiagnosticLogger() : logger;

    if (sampleRate > 100 || sampleRate < 0) {
      this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.SampleRateOutOfRange, "Sampling rate is out of range (0..100). Sampling will be disabled, you may be sending too much data which may affect your AI service level.", {
        samplingRate: sampleRate
      }, true);

      this.sampleRate = 100;
    }

    this.sampleRate = sampleRate;
    this.samplingScoreGenerator = new SamplingScoreGenerator_SamplingScoreGenerator();
  }
  /**
   * Determines if an envelope is sampled in (i.e. will be sent) or not (i.e. will be dropped).
   */


  Sample.prototype.isSampledIn = function (envelope) {
    var samplingPercentage = this.sampleRate; // 0 - 100

    var isSampledIn = false;

    if (samplingPercentage === null || samplingPercentage === undefined || samplingPercentage >= 100) {
      return true;
    } else if (envelope.baseType === Metric_Metric.dataType) {
      // exclude MetricData telemetry from sampling
      return true;
    }

    isSampledIn = this.samplingScoreGenerator.getSamplingScore(envelope) < samplingPercentage;
    return isSampledIn;
  };

  return Sample;
}();


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-channel-js/dist-esm/Sender.js
/*!
 * Application Insights JavaScript SDK - Channel, 2.5.11
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */


 // todo move to channel







function _getResponseText(xhr) {
  try {
    return xhr.responseText;
  } catch (e) {// Best effort, as XHR may throw while XDR wont so just ignore
  }

  return null;
}

var Sender_Sender =
/** @class */
function (_super) {
  __extends(Sender, _super);

  function Sender() {
    var _this = _super.call(this) || this;

    _this.priority = 1001;
    _this.identifier = BreezeChannelIdentifier;
    /**
     * Whether XMLHttpRequest object is supported. Older version of IE (8,9) do not support it.
     */

    _this._XMLHttpRequestSupported = false;
    /**
     * How many times in a row a retryable error condition has occurred.
     */

    var _consecutiveErrors;
    /**
     * The time to retry at in milliseconds from 1970/01/01 (this makes the timer calculation easy).
     */


    var _retryAt;
    /**
     * The time of the last send operation.
     */


    var _lastSend;
    /**
     * Handle to the timer for delayed sending of batches of data.
     */


    var _timeoutHandle;

    var _serializer;

    dynamicproto_js(Sender, _this, function (_self, _base) {
      function _notImplemented() {
        throw new Error("Method not implemented.");
      }

      _self.pause = _notImplemented;
      _self.resume = _notImplemented;

      _self.flush = function () {
        try {
          _self.triggerSend(true, null, 1
          /* ManualFlush */
          );
        } catch (e) {
          _self.diagLog().throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.FlushFailed, "flush failed, telemetry will not be collected: " + Util_Util.getExceptionName(e), {
            exception: Util_Util.dump(e)
          });
        }
      };

      _self.onunloadFlush = function () {
        if ((_self._senderConfig.onunloadDisableBeacon() === false || _self._senderConfig.isBeaconApiDisabled() === false) && Util_Util.IsBeaconApiSupported()) {
          try {
            _self.triggerSend(true, _beaconSender, 2
            /* Unload */
            );
          } catch (e) {
            _self.diagLog().throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.FailedToSendQueuedTelemetry, "failed to flush with beacon sender on page unload, telemetry will not be collected: " + Util_Util.getExceptionName(e), {
              exception: Util_Util.dump(e)
            });
          }
        } else {
          _self.flush();
        }
      };

      _self.teardown = _notImplemented;

      _self.initialize = function (config, core, extensions, pluginChain) {
        _base.initialize(config, core, extensions, pluginChain);

        var ctx = _self._getTelCtx();

        var identifier = _self.identifier;
        _serializer = new Serializer_Serializer(core.logger);
        _consecutiveErrors = 0;
        _retryAt = null;
        _lastSend = 0;
        _self._sender = null;

        var defaultConfig = Sender._getDefaultAppInsightsChannelConfig();

        _self._senderConfig = Sender._getEmptyAppInsightsChannelConfig();
        objForEachKey(defaultConfig, function (field, value) {
          _self._senderConfig[field] = function () {
            return ctx.getConfig(identifier, field, value());
          };
        });
        _self._buffer = _self._senderConfig.enableSessionStorageBuffer() && Util_Util.canUseSessionStorage() ? new SendBuffer_SessionStorageSendBuffer(_self.diagLog(), _self._senderConfig) : new SendBuffer_ArraySendBuffer(_self._senderConfig);
        _self._sample = new Sample_Sample(_self._senderConfig.samplingPercentage(), _self.diagLog());

        if (!_validateInstrumentationKey(config)) {
          _self.diagLog().throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.InvalidInstrumentationKey, "Invalid Instrumentation key " + config.instrumentationKey);
        }

        if (!_self._senderConfig.isBeaconApiDisabled() && Util_Util.IsBeaconApiSupported()) {
          _self._sender = _beaconSender;
        } else {
          if (typeof XMLHttpRequest !== undefined) {
            var xhr = getGlobalInst("XMLHttpRequest");

            if (xhr) {
              var testXhr = new xhr();

              if ("withCredentials" in testXhr) {
                _self._sender = _xhrSender;
                _self._XMLHttpRequestSupported = true;
              } else if (typeof XDomainRequest !== undefined) {
                _self._sender = _xdrSender; // IE 8 and 9
              }
            }
          }
        }
      };

      _self.processTelemetry = function (telemetryItem, itemCtx) {
        itemCtx = _self._getTelCtx(itemCtx);

        try {
          // if master off switch is set, don't send any data
          if (_self._senderConfig.disableTelemetry()) {
            // Do not send/save data
            return;
          } // validate input


          if (!telemetryItem) {
            itemCtx.diagLog().throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.CannotSendEmptyTelemetry, "Cannot send empty telemetry");
            return;
          } // validate event


          if (telemetryItem.baseData && !telemetryItem.baseType) {
            itemCtx.diagLog().throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.InvalidEvent, "Cannot send telemetry without baseData and baseType");
            return;
          }

          if (!telemetryItem.baseType) {
            // Default
            telemetryItem.baseType = "EventData";
          } // ensure a sender was constructed


          if (!_self._sender) {
            itemCtx.diagLog().throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.SenderNotInitialized, "Sender was not initialized");
            return;
          } // check if this item should be sampled in, else add sampleRate tag


          if (!_isSampledIn(telemetryItem)) {
            // Item is sampled out, do not send it
            itemCtx.diagLog().throwInternal(LoggingSeverity.WARNING, _InternalMessageId.TelemetrySampledAndNotSent, "Telemetry item was sampled out and not sent", {
              SampleRate: _self._sample.sampleRate
            });
            return;
          } else {
            telemetryItem[SampleRate] = _self._sample.sampleRate;
          } // construct an envelope that Application Insights endpoint can understand


          var aiEnvelope_1 = Sender.constructEnvelope(telemetryItem, _self._senderConfig.instrumentationKey(), itemCtx.diagLog());

          if (!aiEnvelope_1) {
            itemCtx.diagLog().throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.CreateEnvelopeError, "Unable to create an AppInsights envelope");
            return;
          }

          var doNotSendItem_1 = false; // this is for running in legacy mode, where customer may already have a custom initializer present

          if (telemetryItem.tags && telemetryItem.tags[ProcessLegacy]) {
            CoreUtils_CoreUtils.arrForEach(telemetryItem.tags[ProcessLegacy], function (callBack) {
              try {
                if (callBack && callBack(aiEnvelope_1) === false) {
                  doNotSendItem_1 = true;
                  itemCtx.diagLog().warnToConsole("Telemetry processor check returns false");
                }
              } catch (e) {
                // log error but dont stop executing rest of the telemetry initializers
                // doNotSendItem = true;
                itemCtx.diagLog().throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.TelemetryInitializerFailed, "One of telemetry initializers failed, telemetry item will not be sent: " + Util_Util.getExceptionName(e), {
                  exception: Util_Util.dump(e)
                }, true);
              }
            });
            delete telemetryItem.tags[ProcessLegacy];
          }

          if (doNotSendItem_1) {
            return; // do not send, no need to execute next plugin
          } // check if the incoming payload is too large, truncate if necessary


          var payload = _serializer.serialize(aiEnvelope_1); // flush if we would exceed the max-size limit by adding this item


          var bufferPayload = _self._buffer.getItems();

          var batch = _self._buffer.batchPayloads(bufferPayload);

          if (batch && batch.length + payload.length > _self._senderConfig.maxBatchSizeInBytes()) {
            _self.triggerSend(true, null, 10
            /* MaxBatchSize */
            );
          } // enqueue the payload


          _self._buffer.enqueue(payload); // ensure an invocation timeout is set


          _setupTimer();
        } catch (e) {
          itemCtx.diagLog().throwInternal(LoggingSeverity.WARNING, _InternalMessageId.FailedAddingTelemetryToBuffer, "Failed adding telemetry to the sender's buffer, some telemetry will be lost: " + Util_Util.getExceptionName(e), {
            exception: Util_Util.dump(e)
          });
        } // hand off the telemetry item to the next plugin


        _self.processNext(telemetryItem, itemCtx);
      };
      /**
       * xhr state changes
       */


      _self._xhrReadyStateChange = function (xhr, payload, countOfItemsInPayload) {
        if (xhr.readyState === 4) {
          var response = null;

          if (!_self._appId) {
            response = _parseResponse(_getResponseText(xhr) || xhr.response);

            if (response && response.appId) {
              _self._appId = response.appId;
            }
          }

          if ((xhr.status < 200 || xhr.status >= 300) && xhr.status !== 0) {
            if (!_self._senderConfig.isRetryDisabled() && _isRetriable(xhr.status)) {
              _resendPayload(payload);

              _self.diagLog().throwInternal(LoggingSeverity.WARNING, _InternalMessageId.TransmissionFailed, ". " + "Response code " + xhr.status + ". Will retry to send " + payload.length + " items.");
            } else {
              _self._onError(payload, _formatErrorMessageXhr(xhr));
            }
          } else if (Offline.isOffline()) {
            // Note: Don't check for status == 0, since adblock gives this code
            if (!_self._senderConfig.isRetryDisabled()) {
              var offlineBackOffMultiplier = 10; // arbritrary number

              _resendPayload(payload, offlineBackOffMultiplier);

              _self.diagLog().throwInternal(LoggingSeverity.WARNING, _InternalMessageId.TransmissionFailed, ". Offline - Response Code: " + xhr.status + ". Offline status: " + Offline.isOffline() + ". Will retry to send " + payload.length + " items.");
            }
          } else {
            if (xhr.status === 206) {
              if (!response) {
                response = _parseResponse(_getResponseText(xhr) || xhr.response);
              }

              if (response && !_self._senderConfig.isRetryDisabled()) {
                _self._onPartialSuccess(payload, response);
              } else {
                _self._onError(payload, _formatErrorMessageXhr(xhr));
              }
            } else {
              _consecutiveErrors = 0;

              _self._onSuccess(payload, countOfItemsInPayload);
            }
          }
        }
      };
      /**
       * Immediately send buffered data
       * @param async {boolean} - Indicates if the events should be sent asynchronously
       * @param forcedSender {SenderFunction} - Indicates the forcedSender, undefined if not passed
       */


      _self.triggerSend = function (async, forcedSender, sendReason) {
        if (async === void 0) {
          async = true;
        }

        try {
          // Send data only if disableTelemetry is false
          if (!_self._senderConfig.disableTelemetry()) {
            if (_self._buffer.count() > 0) {
              var payload = _self._buffer.getItems();

              _notifySendRequest(sendReason || 0
              /* Undefined */
              , async); // invoke send


              if (forcedSender) {
                forcedSender.call(_this, payload, async);
              } else {
                _self._sender(payload, async);
              }
            } // update lastSend time to enable throttling


            _lastSend = +new Date();
          } else {
            _self._buffer.clear();
          }

          clearTimeout(_timeoutHandle);
          _timeoutHandle = null;
          _retryAt = null;
        } catch (e) {
          /* Ignore this error for IE under v10 */
          var ieVer = Util_Util.getIEVersion();

          if (!ieVer || ieVer > 9) {
            _self.diagLog().throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.TransmissionFailed, "Telemetry transmission failed, some telemetry will be lost: " + Util_Util.getExceptionName(e), {
              exception: Util_Util.dump(e)
            });
          }
        }
      };
      /**
       * error handler
       */


      _self._onError = function (payload, message, event) {
        _self.diagLog().throwInternal(LoggingSeverity.WARNING, _InternalMessageId.OnError, "Failed to send telemetry.", {
          message: message
        });

        _self._buffer.clearSent(payload);
      };
      /**
       * partial success handler
       */


      _self._onPartialSuccess = function (payload, results) {
        var failed = [];
        var retry = []; // Iterate through the reversed array of errors so that splicing doesn't have invalid indexes after the first item.

        var errors = results.errors.reverse();

        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
          var error = errors_1[_i];
          var extracted = payload.splice(error.index, 1)[0];

          if (_isRetriable(error.statusCode)) {
            retry.push(extracted);
          } else {
            // All other errors, including: 402 (Monthly quota exceeded) and 439 (Too many requests and refresh cache).
            failed.push(extracted);
          }
        }

        if (payload.length > 0) {
          _self._onSuccess(payload, results.itemsAccepted);
        }

        if (failed.length > 0) {
          _self._onError(failed, _formatErrorMessageXhr(null, ['partial success', results.itemsAccepted, 'of', results.itemsReceived].join(' ')));
        }

        if (retry.length > 0) {
          _resendPayload(retry);

          _self.diagLog().throwInternal(LoggingSeverity.WARNING, _InternalMessageId.TransmissionFailed, "Partial success. " + "Delivered: " + payload.length + ", Failed: " + failed.length + ". Will retry to send " + retry.length + " our of " + results.itemsReceived + " items");
        }
      };
      /**
       * success handler
       */


      _self._onSuccess = function (payload, countOfItemsInPayload) {
        _self._buffer.clearSent(payload);
      };
      /**
       * xdr state changes
       */


      _self._xdrOnLoad = function (xdr, payload) {
        var responseText = _getResponseText(xdr);

        if (xdr && (responseText + "" === "200" || responseText === "")) {
          _consecutiveErrors = 0;

          _self._onSuccess(payload, 0);
        } else {
          var results = _parseResponse(responseText);

          if (results && results.itemsReceived && results.itemsReceived > results.itemsAccepted && !_self._senderConfig.isRetryDisabled()) {
            _self._onPartialSuccess(payload, results);
          } else {
            _self._onError(payload, _formatErrorMessageXdr(xdr));
          }
        }
      };

      function _isSampledIn(envelope) {
        return _self._sample.isSampledIn(envelope);
      }
      /**
       * Send Beacon API request
       * @param payload {string} - The data payload to be sent.
       * @param isAsync {boolean} - not used
       * Note: Beacon API does not support custom headers and we are not able to get
       * appId from the backend for the correct correlation.
       */


      function _beaconSender(payload, isAsync) {
        var url = _self._senderConfig.endpointUrl();

        var batch = _self._buffer.batchPayloads(payload); // Chrome only allows CORS-safelisted values for the sendBeacon data argument
        // see: https://bugs.chromium.org/p/chromium/issues/detail?id=720283


        var plainTextBatch = new Blob([batch], {
          type: 'text/plain;charset=UTF-8'
        }); // The sendBeacon method returns true if the user agent is able to successfully queue the data for transfer. Otherwise it returns false.

        var queued = getNavigator().sendBeacon(url, plainTextBatch);

        if (queued) {
          _self._buffer.markAsSent(payload); // no response from beaconSender, clear buffer


          _self._onSuccess(payload, payload.length);
        } else {
          _xhrSender(payload, true);

          _self.diagLog().throwInternal(LoggingSeverity.WARNING, _InternalMessageId.TransmissionFailed, ". " + "Failed to send telemetry with Beacon API, retried with xhrSender.");
        }
      }
      /**
       * Send XMLHttpRequest
       * @param payload {string} - The data payload to be sent.
       * @param isAsync {boolean} - Indicates if the request should be sent asynchronously
       */


      function _xhrSender(payload, isAsync) {
        var xhr = new XMLHttpRequest();

        var endPointUrl = _self._senderConfig.endpointUrl();

        try {
          xhr[DisabledPropertyName] = true;
        } catch (e) {// If the environment has locked down the XMLHttpRequest (preventExtensions and/or freeze), this would
          // cause the request to fail and we no telemetry would be sent
        }

        xhr.open("POST", endPointUrl, isAsync);
        xhr.setRequestHeader("Content-type", "application/json"); // append Sdk-Context request header only in case of breeze endpoint

        if (Util_Util.isInternalApplicationInsightsEndpoint(endPointUrl)) {
          xhr.setRequestHeader(RequestHeaders.sdkContextHeader, RequestHeaders.sdkContextHeaderAppIdRequest);
        }

        xhr.onreadystatechange = function () {
          return _self._xhrReadyStateChange(xhr, payload, payload.length);
        };

        xhr.onerror = function (event) {
          return _self._onError(payload, _formatErrorMessageXhr(xhr), event);
        }; // compose an array of payloads


        var batch = _self._buffer.batchPayloads(payload);

        xhr.send(batch);

        _self._buffer.markAsSent(payload);
      }
      /**
       * Parses the response from the backend.
       * @param response - XMLHttpRequest or XDomainRequest response
       */


      function _parseResponse(response) {
        try {
          if (response && response !== "") {
            var result = getJSON().parse(response);

            if (result && result.itemsReceived && result.itemsReceived >= result.itemsAccepted && result.itemsReceived - result.itemsAccepted === result.errors.length) {
              return result;
            }
          }
        } catch (e) {
          _self.diagLog().throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.InvalidBackendResponse, "Cannot parse the response. " + Util_Util.getExceptionName(e), {
            response: response
          });
        }

        return null;
      }
      /**
       * Resend payload. Adds payload back to the send buffer and setup a send timer (with exponential backoff).
       * @param payload
       */


      function _resendPayload(payload, linearFactor) {
        if (linearFactor === void 0) {
          linearFactor = 1;
        }

        if (!payload || payload.length === 0) {
          return;
        }

        _self._buffer.clearSent(payload);

        _consecutiveErrors++;

        for (var _i = 0, payload_1 = payload; _i < payload_1.length; _i++) {
          var item = payload_1[_i];

          _self._buffer.enqueue(item);
        } // setup timer


        _setRetryTime(linearFactor);

        _setupTimer();
      }
      /**
       * Calculates the time to wait before retrying in case of an error based on
       * http://en.wikipedia.org/wiki/Exponential_backoff
       */


      function _setRetryTime(linearFactor) {
        var SlotDelayInSeconds = 10;
        var delayInSeconds;

        if (_consecutiveErrors <= 1) {
          delayInSeconds = SlotDelayInSeconds;
        } else {
          var backOffSlot = (Math.pow(2, _consecutiveErrors) - 1) / 2; // tslint:disable-next-line:insecure-random

          var backOffDelay = Math.floor(Math.random() * backOffSlot * SlotDelayInSeconds) + 1;
          backOffDelay = linearFactor * backOffDelay;
          delayInSeconds = Math.max(Math.min(backOffDelay, 3600), SlotDelayInSeconds);
        } // TODO: Log the backoff time like the C# version does.


        var retryAfterTimeSpan = CoreUtils_CoreUtils.dateNow() + delayInSeconds * 1000; // TODO: Log the retry at time like the C# version does.

        _retryAt = retryAfterTimeSpan;
      }
      /**
       * Sets up the timer which triggers actually sending the data.
       */


      function _setupTimer() {
        if (!_timeoutHandle) {
          var retryInterval = _retryAt ? Math.max(0, _retryAt - CoreUtils_CoreUtils.dateNow()) : 0;
          var timerValue = Math.max(_self._senderConfig.maxBatchInterval(), retryInterval);
          _timeoutHandle = setTimeout(function () {
            _self.triggerSend(true, null, 1
            /* NormalSchedule */
            );
          }, timerValue);
        }
      }
      /**
       * Checks if the SDK should resend the payload after receiving this status code from the backend.
       * @param statusCode
       */


      function _isRetriable(statusCode) {
        return statusCode === 408 // Timeout
        || statusCode === 429 // Too many requests.
        || statusCode === 500 // Internal server error.
        || statusCode === 503; // Service unavailable.
      }

      function _formatErrorMessageXhr(xhr, message) {
        if (xhr) {
          return "XMLHttpRequest,Status:" + xhr.status + ",Response:" + _getResponseText(xhr) || false || false;
        }

        return message;
      }
      /**
       * Send XDomainRequest
       * @param payload {string} - The data payload to be sent.
       * @param isAsync {boolean} - Indicates if the request should be sent asynchronously
       *
       * Note: XDomainRequest does not support sync requests. This 'isAsync' parameter is added
       * to maintain consistency with the xhrSender's contract
       * Note: XDomainRequest does not support custom headers and we are not able to get
       * appId from the backend for the correct correlation.
       */


      function _xdrSender(payload, isAsync) {
        var _window = getWindow();

        var xdr = new XDomainRequest();

        xdr.onload = function () {
          return _self._xdrOnLoad(xdr, payload);
        };

        xdr.onerror = function (event) {
          return _self._onError(payload, _formatErrorMessageXdr(xdr), event);
        }; // XDomainRequest requires the same protocol as the hosting page.
        // If the protocol doesn't match, we can't send the telemetry :(.


        var hostingProtocol = _window && _window.location && _window.location.protocol || "";

        if (_self._senderConfig.endpointUrl().lastIndexOf(hostingProtocol, 0) !== 0) {
          _self.diagLog().throwInternal(LoggingSeverity.WARNING, _InternalMessageId.TransmissionFailed, ". " + "Cannot send XDomain request. The endpoint URL protocol doesn't match the hosting page protocol.");

          _self._buffer.clear();

          return;
        }

        var endpointUrl = _self._senderConfig.endpointUrl().replace(/^(https?:)/, "");

        xdr.open('POST', endpointUrl); // compose an array of payloads

        var batch = _self._buffer.batchPayloads(payload);

        xdr.send(batch);

        _self._buffer.markAsSent(payload);
      }

      function _formatErrorMessageXdr(xdr, message) {
        if (xdr) {
          return "XDomainRequest,Response:" + _getResponseText(xdr) || false;
        }

        return message;
      } // Using function lookups for backward compatibility as the getNotifyMgr() did not exist until after v2.5.6


      function _getNotifyMgr() {
        var func = 'getNotifyMgr';

        if (_self.core[func]) {
          return _self.core[func]();
        } // using _self.core['_notificationManager'] for backward compatibility


        return _self.core['_notificationManager'];
      }

      function _notifySendRequest(sendRequest, isAsync) {
        var manager = _getNotifyMgr();

        if (manager && manager.eventsSendRequest) {
          try {
            manager.eventsSendRequest(sendRequest, isAsync);
          } catch (e) {
            _self.diagLog().throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.NotificationException, "send request notification failed: " + Util_Util.getExceptionName(e), {
              exception: Util_Util.dump(e)
            });
          }
        }
      }
      /**
       * Validate UUID Format
       * Specs taken from https://tools.ietf.org/html/rfc4122 and breeze repo
       */


      function _validateInstrumentationKey(config) {
        var disableIKeyValidationFlag = CoreUtils_CoreUtils.isNullOrUndefined(config.disableInstrumentationKeyValidation) ? false : config.disableInstrumentationKeyValidation;

        if (disableIKeyValidationFlag) {
          return true;
        }

        var UUID_Regex = '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$';
        var regexp = new RegExp(UUID_Regex);
        return regexp.test(config.instrumentationKey);
      }
    });
    return _this;
  }

  Sender.constructEnvelope = function (orig, iKey, logger) {
    var envelope;

    if (iKey !== orig.iKey && !CoreUtils_CoreUtils.isNullOrUndefined(iKey)) {
      envelope = __assign({}, orig, {
        iKey: iKey
      });
    } else {
      envelope = orig;
    }

    switch (envelope.baseType) {
      case Event_Event.dataType:
        return EnvelopeCreator_EventEnvelopeCreator.EventEnvelopeCreator.Create(logger, envelope);

      case Trace_Trace.dataType:
        return EnvelopeCreator_TraceEnvelopeCreator.TraceEnvelopeCreator.Create(logger, envelope);

      case PageView_PageView.dataType:
        return EnvelopeCreator_PageViewEnvelopeCreator.PageViewEnvelopeCreator.Create(logger, envelope);

      case PageViewPerformance_PageViewPerformance.dataType:
        return EnvelopeCreator_PageViewPerformanceEnvelopeCreator.PageViewPerformanceEnvelopeCreator.Create(logger, envelope);

      case Exception_Exception.dataType:
        return EnvelopeCreator_ExceptionEnvelopeCreator.ExceptionEnvelopeCreator.Create(logger, envelope);

      case Metric_Metric.dataType:
        return EnvelopeCreator_MetricEnvelopeCreator.MetricEnvelopeCreator.Create(logger, envelope);

      case Telemetry_RemoteDependencyData_RemoteDependencyData.dataType:
        return EnvelopeCreator_DependencyEnvelopeCreator.DependencyEnvelopeCreator.Create(logger, envelope);

      default:
        return EnvelopeCreator_EventEnvelopeCreator.EventEnvelopeCreator.Create(logger, envelope);
    }
  };

  Sender._getDefaultAppInsightsChannelConfig = function () {
    // set default values
    return {
      endpointUrl: function endpointUrl() {
        return "https://dc.services.visualstudio.com/v2/track";
      },
      emitLineDelimitedJson: function emitLineDelimitedJson() {
        return false;
      },
      maxBatchInterval: function maxBatchInterval() {
        return 15000;
      },
      maxBatchSizeInBytes: function maxBatchSizeInBytes() {
        return 102400;
      },
      disableTelemetry: function disableTelemetry() {
        return false;
      },
      enableSessionStorageBuffer: function enableSessionStorageBuffer() {
        return true;
      },
      isRetryDisabled: function isRetryDisabled() {
        return false;
      },
      isBeaconApiDisabled: function isBeaconApiDisabled() {
        return true;
      },
      onunloadDisableBeacon: function onunloadDisableBeacon() {
        return false;
      },
      instrumentationKey: function instrumentationKey() {
        return undefined;
      },
      namePrefix: function namePrefix() {
        return undefined;
      },
      samplingPercentage: function samplingPercentage() {
        return 100;
      }
    };
  };

  Sender._getEmptyAppInsightsChannelConfig = function () {
    return {
      endpointUrl: undefined,
      emitLineDelimitedJson: undefined,
      maxBatchInterval: undefined,
      maxBatchSizeInBytes: undefined,
      disableTelemetry: undefined,
      enableSessionStorageBuffer: undefined,
      isRetryDisabled: undefined,
      isBeaconApiDisabled: undefined,
      onunloadDisableBeacon: undefined,
      instrumentationKey: undefined,
      namePrefix: undefined,
      samplingPercentage: undefined
    };
  }; // Removed Stub for Sender.prototype.pause.
  // Removed Stub for Sender.prototype.resume.
  // Removed Stub for Sender.prototype.flush.
  // Removed Stub for Sender.prototype.onunloadFlush.
  // Removed Stub for Sender.prototype.teardown.
  // Removed Stub for Sender.prototype.initialize.
  // Removed Stub for Sender.prototype.processTelemetry.
  // Removed Stub for Sender.prototype._xhrReadyStateChange.
  // Removed Stub for Sender.prototype.triggerSend.
  // Removed Stub for Sender.prototype._onError.
  // Removed Stub for Sender.prototype._onPartialSuccess.
  // Removed Stub for Sender.prototype._onSuccess.
  // Removed Stub for Sender.prototype._xdrOnLoad.


  return Sender;
}(BaseTelemetryPlugin_BaseTelemetryPlugin);


// CONCATENATED MODULE: ./node_modules/@microsoft/applicationinsights-web-basic/dist-esm/index.js
/*!
 * Application Insights JavaScript Web SDK - Basic, 2.5.11
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */



"use strict";
/**
 * @export
 * @class ApplicationInsights
 */


var dist_esm_ApplicationInsights =
/** @class */
function () {
  /**
   * Creates an instance of ApplicationInsights.
   * @param {IConfiguration & IConfig} config
   * @memberof ApplicationInsights
   */
  function ApplicationInsights(config) {
    // initialize the queue and config in case they are undefined
    if (CoreUtils_CoreUtils.isNullOrUndefined(config) || CoreUtils_CoreUtils.isNullOrUndefined(config.instrumentationKey)) {
      throw new Error("Invalid input configuration");
    }

    this.config = config;
    this.getSKUDefaults();
    this.initialize();
  }
  /**
   * Initialize this instance of ApplicationInsights
   *
   * @memberof ApplicationInsights
   */


  ApplicationInsights.prototype.initialize = function () {
    this.core = new AppInsightsCore_AppInsightsCore();
    var extensions = [];
    var appInsightsChannel = new Sender_Sender();
    extensions.push(appInsightsChannel); // initialize core

    this.core.initialize(this.config, extensions); // initialize extensions

    appInsightsChannel.initialize(this.config, this.core, extensions);
    this.pollInternalLogs();
  };
  /**
   * Send a manually constructed custom event
   *
   * @param {ITelemetryItem} item
   * @memberof ApplicationInsights
   */


  ApplicationInsights.prototype.track = function (item) {
    this.core.track(item);
  };
  /**
   * Immediately send all batched telemetry
   * @param {boolean} [async=true]
   * @memberof ApplicationInsights
   */


  ApplicationInsights.prototype.flush = function (async) {
    if (async === void 0) {
      async = true;
    }

    CoreUtils_CoreUtils.arrForEach(this.core.getTransmissionControls(), function (controls) {
      CoreUtils_CoreUtils.arrForEach(controls, function (plugin) {
        async ? plugin.flush() : plugin.triggerSend(async, null, 1
        /* ManualFlush */
        );
      });
    });
  };

  ApplicationInsights.prototype.pollInternalLogs = function () {
    this.core.pollInternalLogs();
  };

  ApplicationInsights.prototype.getSKUDefaults = function () {
    this.config.diagnosticLogInterval = this.config.diagnosticLogInterval && this.config.diagnosticLogInterval > 0 ? this.config.diagnosticLogInterval : 10000;
  };

  return ApplicationInsights;
}();





// CONCATENATED MODULE: ./src/components/hooks/useAnalytics.ts

var appInsights = new dist_esm_ApplicationInsights({
  instrumentationKey: 'YOUR_INSTRUMENTATION_KEY_GOES_HERE',
  isStorageUseDisabled: true,
  isCookieUseDisabled: true
});
var page = typeof window !== "undefined" ? function () {
  return appInsights.track({
    name: window.location.href,
    time: new Date().toUTCString(),
    baseType: "PageData"
  });
} : function () {};
var useAnalytics_track = typeof window !== "undefined" ? function (name, properties) {
  return appInsights.track({
    name: name,
    time: new Date().toUTCString(),
    data: properties,
    baseType: "EventData"
  });
} : function (name, properties) {};

if (typeof window !== "undefined") {
  window.analytics = {
    page: page,
    track: useAnalytics_track
  };
}

function useAnalytics() {
  return {
    page: page,
    track: useAnalytics_track
  };
}
// EXTERNAL MODULE: ./src/components/hooks/useMounted.tsx
var useMounted = __webpack_require__("VRkU");

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("iuhU");

// CONCATENATED MODULE: ./src/components/CmdButton.tsx






 // tslint:disable-next-line: match-default-export-name no-submodule-imports







var ACK_RESET_DELAY = 500;
var ERROR_RESET_DELAY = 2000;
var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  var getBackgroundColor = theme.palette.type === 'light' ? colorManipulator["e" /* lighten */] : colorManipulator["a" /* darken */];
  return Object(createStyles["a" /* default */])({
    ack: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.success.main
    },
    error: {
      color: '#fff',
      backgroundColor: getBackgroundColor(theme.palette.error.main, 0.6)
    }
  });
});
function CmdButton(props) {
  var onClick = props.onClick,
      className = props.className,
      children = props.children,
      icon = props.icon,
      title = props.title,
      disabled = props.disabled,
      disableReset = props.disableReset,
      autoRun = props.autoRun,
      trackName = props.trackName,
      trackProperties = props.trackProperties,
      ackResetDelay = props.ackResetDelay,
      others = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["onClick", "className", "children", "icon", "title", "disabled", "disableReset", "autoRun", "trackName", "trackProperties", "ackResetDelay"]);

  var _useContext = Object(react["useContext"])(AppContext["c" /* default */]),
      setAppError = _useContext.setError;

  var classes = useStyles();

  var _useState = Object(react["useState"])(false),
      working = _useState[0],
      setWorking = _useState[1];

  var _useState2 = Object(react["useState"])(false),
      ack = _useState2[0],
      setAck = _useState2[1];

  var _useState3 = Object(react["useState"])(undefined),
      error = _useState3[0],
      setError = _useState3[1];

  var _useAnalytics = useAnalytics(),
      track = _useAnalytics.track;

  var mounted = Object(useMounted["a" /* default */])();

  var _disabled = disabled || working;

  var run = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!working) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              // already working
              if (trackName) track('cmd.' + trackName, trackProperties);
              _context.prev = 3;
              setError(undefined);
              setAck(false);
              setWorking(true);
              _context.next = 9;
              return onClick();

            case 9:
              if (mounted()) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return");

            case 11:
              setAck(true);

              if (disableReset) {
                _context.next = 18;
                break;
              }

              _context.next = 15;
              return Object(utils["r" /* delay */])(ackResetDelay || ACK_RESET_DELAY);

            case 15:
              if (mounted) {
                _context.next = 17;
                break;
              }

              return _context.abrupt("return");

            case 17:
              setAck(false);

            case 18:
              _context.next = 32;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](3);

              if (mounted()) {
                _context.next = 24;
                break;
              }

              return _context.abrupt("return");

            case 24:
              setAppError(_context.t0);
              setError(_context.t0);

              if (disableReset) {
                _context.next = 32;
                break;
              }

              _context.next = 29;
              return Object(utils["r" /* delay */])(ERROR_RESET_DELAY);

            case 29:
              if (mounted()) {
                _context.next = 31;
                break;
              }

              return _context.abrupt("return");

            case 31:
              setError(undefined);

            case 32:
              _context.prev = 32;
              if (mounted()) setWorking(false);
              return _context.finish(32);

            case 35:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 20, 32, 35]]);
    }));

    return function run() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClick = /*#__PURE__*/function () {
    var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2(ev) {
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ev.stopPropagation();
              run();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleClick(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var statusIcon = error ? /*#__PURE__*/react_default.a.createElement(Error_default.a, null) : undefined;
  var modeClassName = error ? classes.error : ack ? classes.ack : undefined;
  var elClassName = Object(clsx_m["a" /* default */])(className, modeClassName); // run once

  Object(react["useEffect"])(function () {
    if (autoRun) run();
  }, [autoRun]);
  if (!children && icon) return /*#__PURE__*/react_default.a.createElement(IconButtonWithTooltip["a" /* default */], Object.assign({
    className: elClassName,
    onClick: handleClick,
    "aria-label": title,
    title: title,
    disabled: _disabled
  }, others), statusIcon || icon);else return /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Button"], Object.assign({
    className: elClassName,
    startIcon: icon,
    endIcon: statusIcon,
    onClick: handleClick,
    "aria-label": title,
    title: title,
    disabled: _disabled
  }, others), children);
}

/***/ }),

/***/ "r9w1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pdwK");
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("TLZQ");
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("KmP9");
/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("1AYd");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ADg1");
/* harmony import */ var _FormHelperText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Spdj");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cVXz");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("H2TA");













var variantComponent = {
  standard: _Input__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
  filled: _FilledInput__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
  outlined: _OutlinedInput__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]
};
var styles = {
  /* Styles applied to the root element. */
  root: {}
};
/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/api/form-control/)
 * - [InputLabel](/api/input-label/)
 * - [FilledInput](/api/filled-input/)
 * - [OutlinedInput](/api/outlined-input/)
 * - [Input](/api/input/)
 * - [FormHelperText](/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */

var TextField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TextField(props, ref) {
  var autoComplete = props.autoComplete,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      defaultValue = props.defaultValue,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      FormHelperTextProps = props.FormHelperTextProps,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      helperText = props.helperText,
      hiddenLabel = props.hiddenLabel,
      id = props.id,
      InputLabelProps = props.InputLabelProps,
      inputProps = props.inputProps,
      InputProps = props.InputProps,
      inputRef = props.inputRef,
      label = props.label,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      placeholder = props.placeholder,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      rows = props.rows,
      rowsMax = props.rowsMax,
      _props$select = props.select,
      select = _props$select === void 0 ? false : _props$select,
      SelectProps = props.SelectProps,
      type = props.type,
      value = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["autoComplete", "autoFocus", "children", "classes", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "hiddenLabel", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "select", "SelectProps", "type", "value", "variant"]);

  if (false) {}

  var InputMore = {};

  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }

    if (label) {
      var _InputLabelProps$requ;

      var displayRequired = (_InputLabelProps$requ = InputLabelProps === null || InputLabelProps === void 0 ? void 0 : InputLabelProps.required) !== null && _InputLabelProps$requ !== void 0 ? _InputLabelProps$requ : required;
      InputMore.label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, label, displayRequired && "\xA0*");
    }
  }

  if (select) {
    // unset defaults from textbox inputs
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = undefined;
    }

    InputMore['aria-describedby'] = undefined;
  }

  var helperTextId = helperText && id ? "".concat(id, "-helper-text") : undefined;
  var inputLabelId = label && id ? "".concat(id, "-label") : undefined;
  var InputComponent = variantComponent[variant];
  var InputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](InputComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    "aria-describedby": helperTextId,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    rowsMax: rowsMax,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    inputProps: inputProps
  }, InputMore, InputProps));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormControl__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className),
    disabled: disabled,
    error: error,
    fullWidth: fullWidth,
    hiddenLabel: hiddenLabel,
    ref: ref,
    required: required,
    color: color,
    variant: variant
  }, other), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_InputLabel__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    htmlFor: id,
    id: inputLabelId
  }, InputLabelProps), label), select ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Select__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    "aria-describedby": helperTextId,
    id: id,
    labelId: inputLabelId,
    value: value,
    input: InputElement
  }, SelectProps), children) : InputElement, helperText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormHelperText__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    id: helperTextId
  }, FormHelperTextProps), helperText));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(styles, {
  name: 'MuiTextField'
})(TextField));

/***/ }),

/***/ "tRbT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ff2n");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wx14");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");

 // A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/





var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  var styles = {};
  GRID_SIZES.forEach(function (size) {
    var key = "grid-".concat(breakpoint, "-").concat(size);

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      };
      return;
    } // Keep 7 significant numbers.


    var width = "".concat(Math.round(size / 12 * 10e7) / 10e5, "%"); // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  }); // No need for a media query for the first size.

  if (breakpoint === 'xs') {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function getOffset(val) {
  var div = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var parse = parseFloat(val);
  return "".concat(parse / div).concat(String(val).replace(String(parse), '') || 'px');
}

function generateGutter(theme, breakpoint) {
  var styles = {};
  SPACINGS.forEach(function (spacing) {
    var themeSpacing = theme.spacing(spacing);

    if (themeSpacing === 0) {
      return;
    }

    styles["spacing-".concat(breakpoint, "-").concat(spacing)] = {
      margin: "-".concat(getOffset(themeSpacing, 2)),
      width: "calc(100% + ".concat(getOffset(themeSpacing), ")"),
      '& > $item': {
        padding: getOffset(themeSpacing, 2)
      }
    };
  });
  return styles;
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',


var styles = function styles(theme) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `container={true}`. */
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },

    /* Styles applied to the root element if `item={true}`. */
    item: {
      boxSizing: 'border-box',
      margin: '0' // For instance, it's useful when used with a `figure` element.

    },

    /* Styles applied to the root element if `zeroMinWidth={true}`. */
    zeroMinWidth: {
      minWidth: 0
    },

    /* Styles applied to the root element if `direction="column"`. */
    'direction-xs-column': {
      flexDirection: 'column'
    },

    /* Styles applied to the root element if `direction="column-reverse"`. */
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },

    /* Styles applied to the root element if `direction="row-reverse"`. */
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `wrap="nowrap"`. */
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },

    /* Styles applied to the root element if `wrap="reverse"`. */
    'wrap-xs-wrap-reverse': {
      flexWrap: 'wrap-reverse'
    },

    /* Styles applied to the root element if `alignItems="center"`. */
    'align-items-xs-center': {
      alignItems: 'center'
    },

    /* Styles applied to the root element if `alignItems="flex-start"`. */
    'align-items-xs-flex-start': {
      alignItems: 'flex-start'
    },

    /* Styles applied to the root element if `alignItems="flex-end"`. */
    'align-items-xs-flex-end': {
      alignItems: 'flex-end'
    },

    /* Styles applied to the root element if `alignItems="baseline"`. */
    'align-items-xs-baseline': {
      alignItems: 'baseline'
    },

    /* Styles applied to the root element if `alignContent="center"`. */
    'align-content-xs-center': {
      alignContent: 'center'
    },

    /* Styles applied to the root element if `alignContent="flex-start"`. */
    'align-content-xs-flex-start': {
      alignContent: 'flex-start'
    },

    /* Styles applied to the root element if `alignContent="flex-end"`. */
    'align-content-xs-flex-end': {
      alignContent: 'flex-end'
    },

    /* Styles applied to the root element if `alignContent="space-between"`. */
    'align-content-xs-space-between': {
      alignContent: 'space-between'
    },

    /* Styles applied to the root element if `alignContent="space-around"`. */
    'align-content-xs-space-around': {
      alignContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="center"`. */
    'justify-xs-center': {
      justifyContent: 'center'
    },

    /* Styles applied to the root element if `justify="flex-end"`. */
    'justify-xs-flex-end': {
      justifyContent: 'flex-end'
    },

    /* Styles applied to the root element if `justify="space-between"`. */
    'justify-xs-space-between': {
      justifyContent: 'space-between'
    },

    /* Styles applied to the root element if `justify="space-around"`. */
    'justify-xs-space-around': {
      justifyContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="space-evenly"`. */
    'justify-xs-space-evenly': {
      justifyContent: 'space-evenly'
    }
  }, generateGutter(theme, 'xs'), theme.breakpoints.keys.reduce(function (accumulator, key) {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}));
};
var Grid = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Grid(props, ref) {
  var _props$alignContent = props.alignContent,
      alignContent = _props$alignContent === void 0 ? 'stretch' : _props$alignContent,
      _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'stretch' : _props$alignItems,
      classes = props.classes,
      classNameProp = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$container = props.container,
      container = _props$container === void 0 ? false : _props$container,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'row' : _props$direction,
      _props$item = props.item,
      item = _props$item === void 0 ? false : _props$item,
      _props$justify = props.justify,
      justify = _props$justify === void 0 ? 'flex-start' : _props$justify,
      _props$lg = props.lg,
      lg = _props$lg === void 0 ? false : _props$lg,
      _props$md = props.md,
      md = _props$md === void 0 ? false : _props$md,
      _props$sm = props.sm,
      sm = _props$sm === void 0 ? false : _props$sm,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 0 : _props$spacing,
      _props$wrap = props.wrap,
      wrap = _props$wrap === void 0 ? 'wrap' : _props$wrap,
      _props$xl = props.xl,
      xl = _props$xl === void 0 ? false : _props$xl,
      _props$xs = props.xs,
      xs = _props$xs === void 0 ? false : _props$xs,
      _props$zeroMinWidth = props.zeroMinWidth,
      zeroMinWidth = _props$zeroMinWidth === void 0 ? false : _props$zeroMinWidth,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justify", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);

  var className = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, classNameProp, container && [classes.container, spacing !== 0 && classes["spacing-xs-".concat(String(spacing))]], item && classes.item, zeroMinWidth && classes.zeroMinWidth, direction !== 'row' && classes["direction-xs-".concat(String(direction))], wrap !== 'wrap' && classes["wrap-xs-".concat(String(wrap))], alignItems !== 'stretch' && classes["align-items-xs-".concat(String(alignItems))], alignContent !== 'stretch' && classes["align-content-xs-".concat(String(alignContent))], justify !== 'flex-start' && classes["justify-xs-".concat(String(justify))], xs !== false && classes["grid-xs-".concat(String(xs))], sm !== false && classes["grid-sm-".concat(String(sm))], md !== false && classes["grid-md-".concat(String(md))], lg !== false && classes["grid-lg-".concat(String(lg))], xl !== false && classes["grid-xl-".concat(String(xl))]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    className: className,
    ref: ref
  }, other));
});
 false ? undefined : void 0;
var StyledGrid = Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiGrid'
})(Grid);

if (false) { var requireProp; }

/* harmony default export */ __webpack_exports__["a"] = (StyledGrid);

/***/ }),

/***/ "tVbE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("VD++");
/* harmony import */ var _utils_isMuiElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ucBr");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("bfFb");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("MquD");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);











var styles = function styles(theme) {
  return {
    /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      paddingTop: 8,
      paddingBottom: 8,
      '&$focusVisible': {
        backgroundColor: theme.palette.action.selected
      },
      '&$selected, &$selected:hover': {
        backgroundColor: theme.palette.action.selected
      },
      '&$disabled': {
        opacity: 0.5
      }
    },

    /* Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`. */
    container: {
      position: 'relative'
    },

    /* Pseudo-class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
    focusVisible: {},

    /* Styles applied to the `component` element if dense. */
    dense: {
      paddingTop: 4,
      paddingBottom: 4
    },

    /* Styles applied to the `component` element if `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      alignItems: 'flex-start'
    },

    /* Pseudo-class applied to the inner `component` element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the inner `component` element if `divider={true}`. */
    divider: {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      backgroundClip: 'padding-box'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the inner `component` element if `button={true}`. */
    button: {
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`. */
    secondaryAction: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    },

    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {}
  };
};
var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"];
/**
 * Uses an additional container component if `ListItemSecondaryAction` is the last child.
 */

var ListItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ListItem(props, ref) {
  var _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'center' : _props$alignItems,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$button = props.button,
      button = _props$button === void 0 ? false : _props$button,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      componentProp = props.component,
      _props$ContainerCompo = props.ContainerComponent,
      ContainerComponent = _props$ContainerCompo === void 0 ? 'li' : _props$ContainerCompo,
      _props$ContainerProps = props.ContainerProps;
  _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;

  var ContainerClassName = _props$ContainerProps.className,
      ContainerProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_props$ContainerProps, ["className"]),
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? false : _props$dense,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$divider = props.divider,
      divider = _props$divider === void 0 ? false : _props$divider,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["alignItems", "autoFocus", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]);

  var context = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_List_ListContext__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);
  var childContext = {
    dense: dense || context.dense || false,
    alignItems: alignItems
  };
  var listItemRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  useEnhancedEffect(function () {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (false) {}
    }
  }, [autoFocus]);
  var children = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(childrenProp);
  var hasSecondaryAction = children.length && Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(children[children.length - 1], ['ListItemSecondaryAction']);
  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (instance) {
    // #StrictMode ready
    listItemRef.current = react_dom__WEBPACK_IMPORTED_MODULE_9__["findDOMNode"](instance);
  }, []);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(handleOwnRef, ref);

  var componentProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, childContext.dense && classes.dense, !disableGutters && classes.gutters, divider && classes.divider, disabled && classes.disabled, button && classes.button, alignItems !== "center" && classes.alignItemsFlexStart, hasSecondaryAction && classes.secondaryAction, selected && classes.selected),
    disabled: disabled
  }, other);

  var Component = componentProp || 'li';

  if (button) {
    componentProps.component = componentProp || 'div';
    componentProps.focusVisibleClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.focusVisible, focusVisibleClassName);
    Component = _ButtonBase__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"];
  }

  if (hasSecondaryAction) {
    // Use div by default.
    Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

    if (ContainerComponent === 'li') {
      if (Component === 'li') {
        Component = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_List_ListContext__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].Provider, {
      value: childContext
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](ContainerComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.container, ContainerClassName),
      ref: handleRef
    }, ContainerProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, componentProps, children), children.pop()));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_List_ListContext__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].Provider, {
    value: childContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: handleRef
  }, componentProps), children));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiListItem'
})(ListItem));

/***/ }),

/***/ "tyJ9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DTDL_REFERENCE_URL */
/* unused harmony export DTDL_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DTDL_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return escapeName; });
/* unused harmony export serviceSpecificationToDTDL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return serviceSpecificationToComponent; });
/* unused harmony export serviceSpecificationDTMI */
/* unused harmony export deviceSpecificationDTMI */
/* unused harmony export DTMIToRoute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deviceSpecificationToDTDL; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KQm4");
/* harmony import */ var _jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Z8Ma");
/* harmony import */ var _jdom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Zo1I");


/* eslint-disable @typescript-eslint/no-explicit-any */

/***
 * Jacdac service/device specification to DTDL
 *
 *  DTDL specification: https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md.
 */


var DTDL_REFERENCE_URL = "https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md";
var DTDL_NAME = "Digital Twins Definition Language";
var DTDL_CONTEXT = "dtmi:dtdl:context;2"; // https://github.com/Azure/digital-twin-model-identifier
// ^dtmi:(?:_+[A-Za-z0-9]|[A-Za-z])(?:[A-Za-z0-9_]*[A-Za-z0-9])?(?::(?:_+[A-Za-z0-9]|[A-Za-z])(?:[A-Za-z0-9_]*[A-Za-z0-9])?)*;[1-9][0-9]{0,8}$

function toDTMI(segments, version) {
  return ("dtmi:jacdac:" + Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(segments).map(function (seg) {
    return seg === undefined ? "???" : typeof seg === "string" ? seg : "x" + seg.toString(16);
  }).map(function (seg) {
    return seg.replace(/(-|_)/g, "");
  }).join(":") + ";" + (version !== undefined ? version : 1)).toLowerCase();
}

function toUnit(pkt) {
  if (pkt.fields.length !== 1) return undefined;
  var field = pkt.fields[0];
  if (!field.unit) return undefined;
  /**
   *     type Unit = "m" | "kg" | "g" | "s" | "A" | "K" | "cd" | "mol" | "Hz" | "rad" | "sr" | "N" | "Pa" | "J" | "W" | "C" | "V" | "F" | "Ohm"
      | "S" | "Wb" | "T" | "H" | "Cel" | "lm" | "lx" | "Bq" | "Gy" | "Sv" | "kat" | "m2" | "m3" | "l" | "m/s" | "m/s2" | "m3/s" | "l/s"
      | "W/m2" | "cd/m2" | "bit" | "bit/s" | "lat" | "lon" | "pH" | "dB" | "dBW" | "Bspl" | "count" | "/" | "%RH" | "%EL" | "EL"
      | "1/s" | "1/min" | "beat/min" | "beats" | "S/m" | "B" | "VA" | "VAs" | "var" | "vars" | "J/m" | "kg/m3" | "deg";
   type SecondaryUnit = "ms" | "min" | "h" | "MHz" | "kW" | "kVA" | "kvar" | "Ah" | "Wh" | "kWh"
      | "varh" | "kvarh" | "kVAh" | "Wh/km" | "KiB" | "GB" | "Mbit/s" | "B/s" | "MB/s" | "mV" | "mA" | "dBm" | "ug/m3"
      | "mm/h" | "m/h" | "ppm" | "/100" | "/1000" | "hPa" | "mm" | "cm" | "km" | "km/h";
   */

  var units = {
    "m/s2": {
      semantic: "Acceleration",
      unit: "metrePerSecondSquared"
    },
    rad: {
      semantic: "Angle",
      unit: "radian"
    },
    "rad/s": {
      semantic: "AngularVelocity",
      unit: "radianPerSecond"
    },
    "rad/s2": {
      semantic: "AngularAcceleration",
      unit: "radianPerSecondSquared"
    },
    m: {
      semantic: "Length",
      unit: "metre"
    },
    m2: {
      semantic: "Area",
      unit: "squareMetre"
    },
    s: {
      semantic: "TimeSpan",
      unit: "second"
    },
    ms: {
      semantic: "TimeSpan",
      unit: "millisecond"
    },
    us: {
      semantic: "TimeSpan",
      unit: "microsecond"
    },
    K: {
      semantic: "Temperature",
      unit: "kelvin"
    },
    C: {
      semantic: "Temperature",
      unit: "degreeCelsius"
    },
    F: {
      semantic: "Temperature",
      unit: "degreeFahrenheit"
    },
    g: {
      semantic: "Acceleration",
      unit: "gForce"
    },
    mA: {
      semantic: "Current",
      unit: "milliampere"
    },
    uA: {
      semantic: "Current",
      unit: "microampere"
    },
    A: {
      semantic: "Current",
      unit: "ampere"
    },
    mV: {
      semantic: "Voltage",
      unit: "millivolt"
    },
    uV: {
      semantic: "Voltage",
      unit: "microvolt"
    },
    V: {
      semantic: "Voltage",
      unit: "volt"
    }
  };
  var unit = units[field.unit];
  if (unit) return unit; // ignoring some known units

  if (["#", "/"].indexOf(field.unit) > -1) return undefined; //console.warn(`unsupported unit ${field.unit}`)

  return undefined;
} // https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md#primitive-schemas


function enumDTDI(srv, en) {
  return toDTMI([srv.classIdentifier, en.name]);
}

function enumSchema(srv, en) {
  var dtdl = {
    "@type": "Enum",
    "@id": enumDTDI(srv, en),
    valueSchema: "integer",
    enumValues: Object.keys(en.members).map(function (k) {
      return {
        name: escapeName(k),
        displayName: k,
        enumValue: en.members[k]
      };
    })
  };
  return dtdl;
}

function fieldType(srv, pkt, field) {
  var type;
  if (field.type == "bool") type = "boolean";else if (field.isFloat) type = "float";else if (field.isSimpleType) {
    if (/^(u|i)/.test(field.type)) type = "integer";else if (field.type === "B") // base64 encoded binary data
      type = "string";
  } else if (field.type === "string" || field.type == "string0") type = "string";else if (field.shift && /^(u|i)/.test(field.type)) type = "float"; // decimal type
  else {
      var en = srv.enums[field.type];
      if (en) type = enumDTDI(srv, en);
    } //if (!type)
  //    console.warn(`unknown field type ${field.type}`, field)

  return {
    name: field.name == "_" ? pkt.name : field.name,
    type: type
  };
} // warps fields into an object


function objectSchema(schemas) {
  return {
    "@type": "Object",
    fields: schemas
  };
} // wraps a schema into an array


function arraySchema(schema) {
  return {
    "@type": "Array",
    elementSchema: schema
  };
} // converts JADAC pkt data layout into a DTDL schema


function toSchema(srv, pkt, supportsArray) {
  var fields = pkt.fields.map(function (field) {
    return fieldType(srv, pkt, field);
  });
  if (!fields.length) return undefined; // a single data entry

  if (fields.length === 1 && !pkt.fields[0].startRepeats) return fields[0].type; // map fields into schema

  var schemas = fields.map(function (field) {
    return {
      name: field.name,
      schema: field.type
    };
  }); // is there an array?

  var repeatIndex = pkt.fields.findIndex(function (field) {
    return field.startRepeats;
  });

  if (repeatIndex < 0) {
    // no array
    // wrap schemas into an object
    return objectSchema(schemas);
  } // check if arrays are supported


  if (!supportsArray) {
    //console.warn(`arrays not supported in ${srv.shortName}.${pkt.name}`)
    return undefined;
  }

  if (repeatIndex == 0) {
    // the whole structure is an array
    return arraySchema(objectSchema(schemas));
  } else {
    // split fields into prelude and array data
    var nonRepeat = schemas.slice(0, repeatIndex);
    var repeats = schemas.slice(repeatIndex);
    return objectSchema([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nonRepeat), [{
      name: "repeat",
      schema: arraySchema(repeats.length > 1 ? objectSchema(repeats) : repeats[0])
    }]));
  }
}

function packetToDTDL(srv, pkt) {
  var types = {
    const: "Property",
    rw: "Property",
    ro: "Telemetry",
    event: "Telemetry"
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var dtdl = {
    "@type": types[pkt.kind] || "Unsupported" + pkt.kind,
    name: pkt.name,
    "@id": toDTMI([srv.classIdentifier, pkt.kind, pkt.name]),
    description: pkt.description
  };

  switch (pkt.kind) {
    case "report":
    case "command":
      // https://docs.microsoft.com/en-us/azure/digital-twins/concepts-models#azure-digital-twins-dtdl-implementation-specifics
      return undefined;

    case "const":
    case "rw":
    case "ro":
    case "event":
      {
        var unit = toUnit(pkt);

        if (unit) {
          dtdl.unit = unit.unit;
        }

        dtdl.schema = toSchema(srv, pkt, false);
        if (pkt.kind === "rw") dtdl.writable = true;

        if (!dtdl.schema && pkt.kind === "event") {
          // keep a count of the events
          dtdl["@type"] = [dtdl["@type"], "Event"];
          dtdl.schema = toDTMI([srv.classIdentifier, "event"]);
        } else if (unit && unit.semantic) dtdl["@type"] = [dtdl["@type"], unit.semantic];

        break;
      }

    default:
      //console.log(`unknown packet kind ${pkt.kind}`)
      break;
  }

  if (!dtdl.schema) {
    //console.log(`unknown schema for ${srv.name}.${pkt.name}`);
    return undefined;
  }

  return dtdl;
}

function escapeName(name) {
  name = name.trim().replace(/[^a-zA-Z0-9_]/g, "_");
  if (!/^[a-zA-Z]/.test(name)) name = "a" + name;
  name = name[0].toLowerCase() + name.slice(1);
  return name.slice(0, 64);
}

function escapeDisplayName(name) {
  return name.slice(0, 64);
}

function serviceSpecificationToDTDL(srv) {
  var dtdl = {
    "@type": "Interface",
    "@id": serviceSpecificationDTMI(srv),
    displayName: escapeDisplayName(srv.name),
    description: srv.notes["short"],
    contents: srv.packets.filter(function (pkt) {
      return !pkt.derived && !pkt.internal;
    }).map(function (pkt) {
      try {
        return packetToDTDL(srv, pkt);
      } catch (e) {
        console.log("failed to generate DTDL for " + srv.name, e);
        return undefined;
      }
    }).filter(function (c) {
      return !!c;
    })
  };
  if (srv.extends.length) dtdl.extends = srv.extends.map(function (id) {
    return serviceSpecificationDTMI(Object(_jdom_spec__WEBPACK_IMPORTED_MODULE_1__[/* serviceSpecificationFromName */ "E"])(id));
  });
  var hasEvents = srv.packets.find(function (pkt) {
    return pkt.kind === "event";
  });
  var hasEnums = Object.keys(srv.enums).length;

  if (hasEvents || hasEnums) {
    dtdl.schemas = [];
    if (hasEvents) dtdl.schemas.push({
      "@id": toDTMI([srv.classIdentifier, "event"]),
      "@type": "Object",
      fields: [{
        name: "count",
        schema: "integer"
      }]
    });
    if (hasEnums) dtdl.schemas = dtdl.schemas.concat(Object.keys(srv.enums).map(function (en) {
      return enumSchema(srv, srv.enums[en]);
    }));
  }

  dtdl["@context"] = DTDL_CONTEXT;
  return dtdl;
}
function serviceSpecificationToComponent(srv, name) {
  var dtdl = {
    "@type": "Component",
    name: name,
    displayName: escapeDisplayName(srv.name),
    schema: serviceSpecificationDTMI(srv)
  };
  return dtdl;
}
function serviceSpecificationDTMI(srv) {
  return toDTMI(["services", srv.classIdentifier]);
}
function deviceSpecificationDTMI(dev) {
  return toDTMI(["devices", dev.id.replace(/-/g, ":")]);
}
function DTMIToRoute(dtmi) {
  var route = dtmi.toLowerCase().replace(/;/, "-").replace(/:/g, "/") + ".json";
  return route;
}
function deviceSpecificationToDTDL(dev, options) {
  var services = dev.services.map(function (srv) {
    return Object(_jdom_spec__WEBPACK_IMPORTED_MODULE_1__[/* serviceSpecificationFromClassIdentifier */ "D"])(srv);
  });
  var uniqueServices = Object(_jdom_utils__WEBPACK_IMPORTED_MODULE_2__[/* uniqueMap */ "Z"])(services, function (srv) {
    return srv.classIdentifier.toString();
  }, function (srv) {
    return srv;
  });
  var schemas = uniqueServices.map(function (srv) {
    return serviceSpecificationToDTDL(srv);
  }); // allocate names

  var names = [];
  services.forEach(function (srv) {
    var name = escapeName(srv.shortId || srv.shortName);
    if (names.indexOf(name) < 0) names.push(name);else {
      var count = 2;

      while (names.indexOf(name + count) > -1) {
        count++;
      }

      names.push(name + count);
    }
  });
  var dtdl = {
    "@type": "Interface",
    "@id": deviceSpecificationDTMI(dev),
    displayName: escapeDisplayName(dev.name),
    description: dev.description,
    contents: services.map(function (srv, i) {
      return serviceSpecificationToComponent(srv, names[i]);
    }),
    "@context": DTDL_CONTEXT
  };
  if (options !== null && options !== void 0 && options.inlineServices) return [dtdl].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(schemas));else return dtdl;
}

/***/ }),

/***/ "xCA3":
/***/ (function(module) {

module.exports = JSON.parse("[{\"service\":\"accelerometer\",\"client\":{\"name\":\"jacdac-accelerometer\",\"repo\":\"microsoft/pxt-jacdac/accelerometer\",\"qName\":\"modules.AccelerometerClient\",\"default\":\"modules.accelerometer\"}},{\"service\":\"barometer\",\"client\":{\"name\":\"jacdac-barometer\",\"repo\":\"microsoft/pxt-jacdac/barometer\",\"qName\":\"modules.BarometerClient\",\"default\":\"modules.barometer\"}},{\"service\":\"button\",\"client\":{\"name\":\"jacdac-button\",\"repo\":\"microsoft/pxt-jacdac/button\",\"qName\":\"modules.ButtonClient\",\"default\":\"modules.button\"}},{\"service\":\"buzzer\",\"client\":{\"name\":\"jacdac-buzzer\",\"repo\":\"microsoft/pxt-jacdac/buzzer\",\"qName\":\"modules.BuzzerClient\",\"default\":\"modules.buzzer\"}},{\"service\":\"characterscreen\",\"client\":{\"name\":\"jacdac-character-screen\",\"repo\":\"microsoft/pxt-jacdac/character-screen\",\"qName\":\"modules.CharacterScreenClient\",\"default\":\"modules.characterScreen\"}},{\"service\":\"compass\",\"client\":{\"name\":\"jacdac-compass\",\"repo\":\"microsoft/pxt-jacdac/compass\",\"qName\":\"modules.CompassClient\",\"default\":\"modules.compass\"}},{\"service\":\"distance\",\"client\":{\"name\":\"jacdac-distance\",\"repo\":\"microsoft/pxt-jacdac/distance\",\"qName\":\"modules.DistanceClient\",\"default\":\"modules.distance\"}},{\"service\":\"dmx\",\"client\":{\"name\":\"jacdac-dmx\",\"repo\":\"microsoft/pxt-jacdac/dmx\",\"qName\":\"modules.DmxClient\",\"default\":\"modules.dmx\"}},{\"service\":\"eco2\",\"client\":{\"name\":\"jacdac-e-co2\",\"repo\":\"microsoft/pxt-jacdac/e-co2\",\"qName\":\"modules.ECO2Client\",\"default\":\"modules.eCO2\"}},{\"service\":\"gyroscope\",\"client\":{\"name\":\"jacdac-gyroscope\",\"repo\":\"microsoft/pxt-jacdac/gyroscope\",\"qName\":\"modules.GyroscopeClient\",\"default\":\"modules.gyroscope\"}},{\"service\":\"heartrate\",\"client\":{\"name\":\"jacdac-heart-rate\",\"repo\":\"microsoft/pxt-jacdac/heart-rate\",\"qName\":\"modules.HeartRateClient\",\"default\":\"modules.heartRate\"}},{\"service\":\"humidity\",\"client\":{\"name\":\"jacdac-humidity\",\"repo\":\"microsoft/pxt-jacdac/humidity\",\"qName\":\"modules.HumidityClient\",\"default\":\"modules.humidity\"}},{\"service\":\"illuminance\",\"client\":{\"name\":\"jacdac-illuminance\",\"repo\":\"microsoft/pxt-jacdac/illuminance\",\"qName\":\"modules.IlluminanceClient\",\"default\":\"modules.illuminance\"}},{\"service\":\"joystick\",\"client\":{\"name\":\"jacdac-joystick\",\"repo\":\"microsoft/pxt-jacdac/joystick\",\"qName\":\"modules.JoystickClient\",\"default\":\"modules.joystick\"}},{\"service\":\"led\",\"client\":{\"name\":\"jacdac-led\",\"repo\":\"microsoft/pxt-jacdac/led\",\"qName\":\"modules.LedClient\",\"default\":\"modules.led\"}},{\"service\":\"ledpixel\",\"client\":{\"name\":\"jacdac-led-pixel\",\"repo\":\"microsoft/pxt-jacdac/led-pixel\",\"qName\":\"modules.LedPixelClient\",\"default\":\"modules.ledPixel\"}},{\"service\":\"lightlevel\",\"client\":{\"name\":\"jacdac-light-level\",\"repo\":\"microsoft/pxt-jacdac/light-level\",\"qName\":\"modules.LightLevelClient\",\"default\":\"modules.lightLevel\"}},{\"service\":\"magnetomer\",\"client\":{\"name\":\"jacdac-magnetometer\",\"repo\":\"microsoft/pxt-jacdac/magnetometer\",\"qName\":\"modules.MagnetometerClient\",\"default\":\"modules.magnetometer\"}},{\"service\":\"modelrunner\",\"client\":{\"name\":\"jacdac-model-runner\",\"repo\":\"microsoft/pxt-jacdac/model-runner\",\"qName\":\"modules.ModelRunnerClient\",\"default\":\"modules.modelRunner\"}},{\"service\":\"motion\",\"client\":{\"name\":\"jacdac-motion\",\"repo\":\"microsoft/pxt-jacdac/motion\",\"qName\":\"modules.MotionClient\",\"default\":\"modules.motion\"}},{\"service\":\"motor\",\"client\":{\"name\":\"jacdac-motor\",\"repo\":\"microsoft/pxt-jacdac/motor\",\"qName\":\"modules.MotorClient\",\"default\":\"modules.motor\"}},{\"service\":\"multitouch\",\"client\":{\"name\":\"jacdac-multitouch\",\"repo\":\"microsoft/pxt-jacdac/multitouch\",\"qName\":\"modules.MultitouchClient\",\"default\":\"modules.multitouch\"}},{\"service\":\"potentiometer\",\"client\":{\"name\":\"jacdac-potentiometer\",\"repo\":\"microsoft/pxt-jacdac/potentiometer\",\"qName\":\"modules.PotentiometerClient\",\"default\":\"modules.potentiometer\"}},{\"service\":\"pulseoximeter\",\"client\":{\"name\":\"jacdac-pulse-oximeter\",\"repo\":\"microsoft/pxt-jacdac/pulse-oximeter\",\"qName\":\"modules.PulseOximeterClient\",\"default\":\"modules.pulseOximeter\"}},{\"service\":\"raingauge\",\"client\":{\"name\":\"jacdac-rain-gauge\",\"repo\":\"microsoft/pxt-jacdac/rain-gauge\",\"qName\":\"modules.RainGaugeClient\",\"default\":\"modules.rainGauge\"}},{\"service\":\"realtimeclock\",\"client\":{\"name\":\"jacdac-real-time-clock\",\"repo\":\"microsoft/pxt-jacdac/real-time-clock\",\"qName\":\"modules.RealTimeClockClient\",\"default\":\"modules.realTimeClock\"}},{\"service\":\"reflectedlight\",\"client\":{\"name\":\"jacdac-reflected-light\",\"repo\":\"microsoft/pxt-jacdac/reflected-light\",\"qName\":\"modules.ReflectedLightClient\",\"default\":\"modules.reflectedLight\"}},{\"service\":\"rotaryencoder\",\"client\":{\"name\":\"jacdac-rotary-encoder\",\"repo\":\"microsoft/pxt-jacdac/rotary-encoder\",\"qName\":\"modules.RotaryEncoderClient\",\"default\":\"modules.rotaryEncoder\"}},{\"service\":\"sensoraggregator\",\"client\":{\"name\":\"jacdac-sensor-aggregator\",\"repo\":\"microsoft/pxt-jacdac/sensor-aggregator\",\"qName\":\"modules.SensorAggregatorClient\",\"default\":\"modules.sensorAggregator\"}},{\"service\":\"servo\",\"client\":{\"name\":\"jacdac-servo\",\"repo\":\"microsoft/pxt-jacdac/servo\",\"qName\":\"modules.ServoClient\",\"default\":\"modules.servo\"}},{\"service\":\"settings\",\"client\":{\"name\":\"jacdac-settings\",\"repo\":\"microsoft/pxt-jacdac/settings\",\"qName\":\"modules.SettingsClient\",\"default\":\"modules.settings\"}},{\"service\":\"soilmoisture\",\"client\":{\"name\":\"jacdac-soil-moisture\",\"repo\":\"microsoft/pxt-jacdac/soil-moisture\",\"qName\":\"modules.SoilMoistureClient\",\"default\":\"modules.soilMoisture\"}},{\"service\":\"solenoid\",\"client\":{\"name\":\"jacdac-solenoid\",\"repo\":\"microsoft/pxt-jacdac/solenoid\",\"qName\":\"modules.SolenoidClient\",\"default\":\"modules.solenoid\"}},{\"service\":\"tcp\",\"client\":{\"name\":\"jacdac-tcp\",\"repo\":\"microsoft/pxt-jacdac/tcp\",\"qName\":\"modules.TcpClient\",\"default\":\"modules.tcp\"}},{\"service\":\"thermocouple\",\"client\":{\"name\":\"jacdac-thermocouple\",\"repo\":\"microsoft/pxt-jacdac/thermocouple\",\"qName\":\"modules.ThermocoupleClient\",\"default\":\"modules.thermocouple\"}},{\"service\":\"thermometer\",\"client\":{\"name\":\"jacdac-thermometer\",\"repo\":\"microsoft/pxt-jacdac/thermometer\",\"qName\":\"modules.ThermometerClient\",\"default\":\"modules.thermometer\"}},{\"service\":\"tvoc\",\"client\":{\"name\":\"jacdac-tvoc\",\"repo\":\"microsoft/pxt-jacdac/tvoc\",\"qName\":\"modules.TvocClient\",\"default\":\"modules.tvoc\"}},{\"service\":\"uvindex\",\"client\":{\"name\":\"jacdac-uv-index\",\"repo\":\"microsoft/pxt-jacdac/uv-index\",\"qName\":\"modules.UvIndexClient\",\"default\":\"modules.uvIndex\"}},{\"service\":\"waterlevel\",\"client\":{\"name\":\"jacdac-water-level\",\"repo\":\"microsoft/pxt-jacdac/water-level\",\"qName\":\"modules.WaterLevelClient\",\"default\":\"modules.waterLevel\"}},{\"service\":\"weightscale\",\"client\":{\"name\":\"jacdac-weight-scale\",\"repo\":\"microsoft/pxt-jacdac/weight-scale\",\"qName\":\"modules.WeightScaleClient\",\"default\":\"modules.weightScale\"}},{\"service\":\"wifi\",\"client\":{\"name\":\"jacdac-wifi\",\"repo\":\"microsoft/pxt-jacdac/wifi\",\"qName\":\"modules.WifiClient\",\"default\":\"modules.wifi\"}},{\"service\":\"winddirection\",\"client\":{\"name\":\"jacdac-wind-direction\",\"repo\":\"microsoft/pxt-jacdac/wind-direction\",\"qName\":\"modules.WindDirectionClient\",\"default\":\"modules.windDirection\"}},{\"service\":\"windspeed\",\"client\":{\"name\":\"jacdac-wind-speed\",\"repo\":\"microsoft/pxt-jacdac/wind-speed\",\"qName\":\"modules.WindSpeedClient\",\"default\":\"modules.windSpeed\"}}]");

/***/ }),

/***/ "ys11":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeCodeServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resolveMakecodeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return resolveMakecodeServiceFromClassIdentifier; });
/* harmony import */ var _jacdac_spec_services_makecode_extensions_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xCA3");
var _jacdac_spec_services_makecode_extensions_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t("xCA3", 1);
/* harmony import */ var _spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Z8Ma");


function makeCodeServices() {
  return _jacdac_spec_services_makecode_extensions_json__WEBPACK_IMPORTED_MODULE_0__.slice(0);
}
function resolveMakecodeService(service) {
  return service && _jacdac_spec_services_makecode_extensions_json__WEBPACK_IMPORTED_MODULE_0__.find(function (mk) {
    return mk.service === service.shortId;
  });
}
function resolveMakecodeServiceFromClassIdentifier(serviceClass) {
  var srv = Object(_spec__WEBPACK_IMPORTED_MODULE_1__[/* serviceSpecificationFromClassIdentifier */ "D"])(serviceClass);
  return srv && resolveMakecodeService(srv);
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-makecode-editor-extension-tsx-c25b9c08b21aa8d1c51e.js.map