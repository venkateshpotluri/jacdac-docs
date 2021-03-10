(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "9pTp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectAlert; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("R/WZ");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZBNC");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hlFM");
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FQT7");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jacdac_ts_src_jdom_bus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0x9p");
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Z8Ma");
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("yNWl");
/* harmony import */ var _jacdac_ConnectButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("nyfv");
/* harmony import */ var _jacdac_ts_src_jdom_usb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("zzfW");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Bf0q");
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("IzqI");
// tslint:disable-next-line: no-submodule-imports
 // tslint:disable-next-line: no-submodule-imports










var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    button: {
      marginLeft: theme.spacing(2)
    }
  });
});

function NoSsrConnectAlert(props) {
  var classes = useStyles();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_jacdac_Context__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]),
      bus = _useContext.bus,
      connectionState = _useContext.connectionState;

  var serviceClass = props.serviceClass;
  var devices = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(bus, function (b) {
    return b.devices({
      serviceClass: serviceClass
    });
  });
  var spec = Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_6__[/* serviceSpecificationFromClassIdentifier */ "G"])(serviceClass);
  var webusb = Object(_jacdac_ts_src_jdom_usb__WEBPACK_IMPORTED_MODULE_9__[/* isWebUSBEnabled */ "b"])() && Object(_jacdac_ts_src_jdom_usb__WEBPACK_IMPORTED_MODULE_9__[/* isWebUSBSupported */ "c"])();
  if (!(devices !== null && devices !== void 0 && devices.length) && webusb && connectionState === _jacdac_ts_src_jdom_bus__WEBPACK_IMPORTED_MODULE_5__[/* BusState */ "a"].Disconnected) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    displayPrint: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    severity: "info",
    closeable: true
  }, !spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "Did you connect your device?"), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "Did you connect a ", spec.name, " device?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_jacdac_ConnectButton__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    className: classes.button,
    full: true,
    transparent: true
  })));
  return null;
}

function ConnectAlert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(NoSsrConnectAlert, props));
}

/***/ }),

/***/ "eoX3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JDServiceClient; });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vuIU");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dI71");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("v+ZI");



var JDServiceClient = /*#__PURE__*/function (_JDClient) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(JDServiceClient, _JDClient);

  function JDServiceClient(service) {
    var _this;

    _this = _JDClient.call(this) || this;
    _this.service = service;
    return _this;
  }

  var _proto = JDServiceClient.prototype;

  _proto.toString = function toString() {
    return "client of " + this.service;
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(JDServiceClient, [{
    key: "device",
    get: function get() {
      return this.service.device;
    }
  }, {
    key: "bus",
    get: function get() {
      return this.device.bus;
    }
  }]);

  return JDServiceClient;
}(_client__WEBPACK_IMPORTED_MODULE_2__[/* JDClient */ "a"]);

/***/ }),

/***/ "tdEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Page; });

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__("9pTp");

// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__("FQT7");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__("jjAL");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__("30+C");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__("oa/T");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__("o4QW");

// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("JX7q");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__("dI71");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("vuIU");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pipes.ts
var pipes = __webpack_require__("o8zs");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/serviceclient.ts
var serviceclient = __webpack_require__("eoX3");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__("W9jF");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__("BsyY");

// EXTERNAL MODULE: ./jacdac-ts/src/hosts/hosts.ts + 22 modules
var hosts = __webpack_require__("y+c1");

// CONCATENATED MODULE: ./jacdac-ts/src/jdom/rolemanagerclient.ts





function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









var SCAN_DEBOUNCE = 2000;
var rolemanagerclient_RequestedRole = /*#__PURE__*/function () {
  function RequestedRole(parent, name, serviceClass) {
    this.candidates = [];
    this.parent = parent;
    this.name = name;
    this.serviceClass = serviceClass;
  }

  var _proto = RequestedRole.prototype;

  _proto.computeCandidates = function computeCandidates() {
    var bus = this.parent.service.device.bus;
    this.candidates = bus.services({
      serviceClass: this.serviceClass
    }); // check that bound service is stil update to date

    if (this.candidates.indexOf(this.bound) < 0) this.bound = undefined;
  };

  _proto.select = /*#__PURE__*/function () {
    var _select = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(service) {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(service === this.bound)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              if (!this.bound) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return this.parent.setRole(this.bound, "");

            case 5:
              _context.next = 7;
              return this.parent.setRole(service, this.name);

            case 7:
              this.bound = service;

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function select(_x) {
      return _select.apply(this, arguments);
    }

    return select;
  }();

  _proto.toString = function toString() {
    var info = this.name + ":" + this.serviceClass.toString(16);
    if (this.bound) info += " -> " + this.bound;
    info += ", " + this.candidates.map(function (c) {
      return c.toString();
    }).join();
    return info;
  };

  Object(createClass["a" /* default */])(RequestedRole, [{
    key: "parentName",
    get: function get() {
      var parts = this.name.split(/\//g);
      return parts.length > 1 ? parts.slice(0, parts.length - 1).join("/") : undefined;
    }
  }]);

  return RequestedRole;
}();
var rolemanagerclient_RoleManagerClient = /*#__PURE__*/function (_JDServiceClient) {
  Object(inheritsLoose["a" /* default */])(RoleManagerClient, _JDServiceClient);

  function RoleManagerClient(service) {
    var _this;

    _this = _JDServiceClient.call(this, service) || this;
    _this.scanning = false;
    _this.requestedRoles = undefined;
    console.log("rdp: new");
    var dscan = Object(utils["q" /* debounceAsync */])(_this.scan.bind(Object(assertThisInitialized["a" /* default */])(_this)), SCAN_DEBOUNCE);

    _this.mount(_this.bus.subscribe(constants["T" /* DEVICE_CHANGE */], Object(utils["q" /* debounceAsync */])( /*#__PURE__*/Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.recomputeCandidates();

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })), SCAN_DEBOUNCE)));

    var changeEvent = _this.service.event(constants["hd" /* RoleManagerEvent */].Change);

    _this.mount(changeEvent.subscribe(constants["kb" /* EVENT */], dscan));

    dscan();
    return _this;
  }

  var _proto2 = RoleManagerClient.prototype;

  _proto2.scan = /*#__PURE__*/function () {
    var _scan = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
      var _this2 = this;

      var addRequested, _this$requestedRoles, inp, localDevs, ordevs, rdevs, _loop, _iterator, _step;

      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(this.scanning || !this.service.device.connected)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              addRequested = function addRequested(devs, role, serviceClass) {
                var r = devs.find(function (d) {
                  return d.name == role;
                });
                if (!r) devs.push(r = new rolemanagerclient_RequestedRole(_this2, role, serviceClass));
                return r;
              };

              _context3.prev = 3;
              console.log("rdp start");
              this.scanning = true;
              inp = new pipes["a" /* InPipeReader */](this.bus);
              _context3.next = 9;
              return this.service.sendPacketAsync(inp.openCommand(constants["gd" /* RoleManagerCmd */].ListRequiredRoles), true);

            case 9:
              localDevs = this.bus.devices();
              ordevs = ((_this$requestedRoles = this.requestedRoles) === null || _this$requestedRoles === void 0 ? void 0 : _this$requestedRoles.slice(0)) || [];
              rdevs = [];

              _loop = function _loop() {
                var _localDevs$find;

                var buf = _step.value;

                var _jdunpack = Object(pack["c" /* jdunpack */])(buf, "b[8] u32 u8 s"),
                    devidbuf = _jdunpack[0],
                    serviceClass = _jdunpack[1],
                    serviceIdx = _jdunpack[2],
                    role = _jdunpack[3];

                var devid = Object(utils["V" /* toHex */])(devidbuf);
                console.log({
                  devidbuf: devidbuf,
                  role: role,
                  serviceClass: serviceClass
                });
                var r = addRequested(rdevs, role, serviceClass);
                var srv = (_localDevs$find = localDevs.find(function (d) {
                  return d.deviceId == devid;
                })) === null || _localDevs$find === void 0 ? void 0 : _localDevs$find.service(serviceIdx);
                if (srv && srv.serviceClass === serviceClass) r.bound = srv;
              };

              _context3.t0 = _createForOfIteratorHelperLoose;
              _context3.next = 16;
              return inp.readData();

            case 16:
              _context3.t1 = _context3.sent;
              _iterator = (0, _context3.t0)(_context3.t1);

            case 18:
              if ((_step = _iterator()).done) {
                _context3.next = 22;
                break;
              }

              _loop();

            case 20:
              _context3.next = 18;
              break;

            case 22:
              rdevs.sort(function (a, b) {
                return Object(utils["P" /* strcmp */])(a.name, b.name);
              });

              if (rdevs.length !== ordevs.length || rdevs.some(function (dev, i) {
                return dev.name !== ordevs[i].name || dev.bound !== ordevs[i].bound;
              })) {
                this.requestedRoles = rdevs;
                this.recomputeCandidates();
                console.log("rdp changed", this.requestedRoles);
                this.emit(constants["s" /* CHANGE */], this.requestedRoles);
              }

              console.log("rdp done");
              _context3.next = 30;
              break;

            case 27:
              _context3.prev = 27;
              _context3.t2 = _context3["catch"](3);
              this.emit(constants["jb" /* ERROR */], _context3.t2);

            case 30:
              _context3.prev = 30;
              this.scanning = false;
              return _context3.finish(30);

            case 33:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[3, 27, 30, 33]]);
    }));

    function scan() {
      return _scan.apply(this, arguments);
    }

    return scan;
  }();

  _proto2.recomputeCandidates = function recomputeCandidates() {
    var _this$requestedRoles2;

    (_this$requestedRoles2 = this.requestedRoles) === null || _this$requestedRoles2 === void 0 ? void 0 : _this$requestedRoles2.forEach(function (rdev) {
      return rdev.computeCandidates();
    });
  };

  _proto2.clearRoles = /*#__PURE__*/function () {
    var _clearRoles = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
      return regenerator_default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.service.sendCmdAsync(constants["gd" /* RoleManagerCmd */].ClearAllRoles);

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function clearRoles() {
      return _clearRoles.apply(this, arguments);
    }

    return clearRoles;
  }();

  _proto2.setRole = /*#__PURE__*/function () {
    var _setRole = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee5(service, role) {
      var device, serviceIndex, data;
      return regenerator_default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              device = service.device, serviceIndex = service.serviceIndex;
              this.log("set role " + device + ":" + serviceIndex + " to " + role);
              data = Object(pack["a" /* jdpack */])("b[8] u8 s", [Object(utils["u" /* fromHex */])(device.deviceId), serviceIndex, role || ""]);
              _context5.next = 5;
              return this.service.sendPacketAsync(packet["a" /* default */].from(constants["gd" /* RoleManagerCmd */].SetRole, data), true);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function setRole(_x2, _x3) {
      return _setRole.apply(this, arguments);
    }

    return setRole;
  }();

  _proto2.toString = function toString() {
    return (this.requestedRoles || []).map(function (rdp) {
      return rdp.toString();
    }).join('\n');
  };

  _proto2.startSimulators = function startSimulators() {
    var _this3 = this;

    if (!this.requestedRoles) return; // collect roles that need to be bound

    var todos = Object(utils["w" /* groupBy */])(this.requestedRoles.filter(function (role) {
      return !role.bound;
    }).map(function (role) {
      return {
        role: role,
        hostDefinition: Object(hosts["d" /* hostDefinitionFromServiceClass */])(role.serviceClass)
      };
    }).filter(function (todo) {
      return !!todo.hostDefinition;
    }), function (todo) {
      return todo.role.parentName || "";
    }); // spawn devices with group of devices

    Object.keys(todos).forEach(function (parentName) {
      var todo = todos[parentName]; // no parent, spawn individual services

      if (!parentName) {
        todo.forEach(function (t) {
          return Object(hosts["b" /* addHost */])(_this3.bus, t.hostDefinition.services(), t.hostDefinition.name);
        });
      } else {
        // spawn all services into 1
        Object(hosts["b" /* addHost */])(_this3.bus, Object(utils["f" /* arrayConcatMany */])(todo.map(function (t) {
          return t.hostDefinition.services();
        })), parentName);
      }
    });
  };

  Object(createClass["a" /* default */])(RoleManagerClient, [{
    key: "missingRoles",
    get: function get() {
      return (this.requestedRoles || []).filter(function (role) {
        return !role.bound;
      }).length > 0;
    }
  }]);

  return RoleManagerClient;
}(serviceclient["a" /* JDServiceClient */]);
// EXTERNAL MODULE: ./src/components/CmdButton.tsx + 58 modules
var CmdButton = __webpack_require__("mv/Z");

// EXTERNAL MODULE: ./src/components/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__("5oJA");

// EXTERNAL MODULE: ./src/components/useServiceClient.ts
var useServiceClient = __webpack_require__("wsLH");

// EXTERNAL MODULE: ./src/components/ui/SelectWithLabel.tsx
var SelectWithLabel = __webpack_require__("wZLv");

// EXTERNAL MODULE: ./src/components/DeviceName.tsx
var DeviceName = __webpack_require__("5eZE");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__("DMAQ");

// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__("yNWl");

// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__("aVfY");

// CONCATENATED MODULE: ./src/components/RoleManagerService.tsx















var START_SIMULATOR = "__start_simulator";
var NO_CANDIDATES = "__no_candidates";

function RequestedRoleView(props) {
  var _requestedRole$candid, _requestedRole$bound, _requestedRole$candid2;

  var requestedRole = props.requestedRole,
      client = props.client;

  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var _useState = Object(react["useState"])(false),
      working = _useState[0],
      setWorking = _useState[1];

  var role = requestedRole.name,
      serviceClass = requestedRole.serviceClass;

  var handleStartClick = function handleStartClick() {
    Object(hosts["b" /* addHost */])(bus, hostDefinition.services(), hostDefinition.name);
  };

  var handleChange = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(ev) {
      var value, srv;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = ev.target.value;

              if (!(value === START_SIMULATOR)) {
                _context.next = 5;
                break;
              }

              handleStartClick();
              _context.next = 19;
              break;

            case 5:
              if (!(value === NO_CANDIDATES)) {
                _context.next = 8;
                break;
              }

              _context.next = 19;
              break;

            case 8:
              srv = requestedRole.candidates.find(function (c) {
                return c.id == value;
              });

              if (!(srv && client)) {
                _context.next = 19;
                break;
              }

              _context.prev = 10;
              setWorking(true);
              _context.next = 14;
              return client.setRole(srv, role);

            case 14:
              _context.next = 16;
              return srv.device.identify();

            case 16:
              _context.prev = 16;
              setWorking(false);
              return _context.finish(16);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[10,, 16, 19]]);
    }));

    return function handleChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var noCandidates = !((_requestedRole$candid = requestedRole.candidates) !== null && _requestedRole$candid !== void 0 && _requestedRole$candid.length);
  var disabled = working;
  var value = ((_requestedRole$bound = requestedRole.bound) === null || _requestedRole$bound === void 0 ? void 0 : _requestedRole$bound.id) || "";
  var error = !value && "select a device";
  var hostDefinition = Object(hosts["d" /* hostDefinitionFromServiceClass */])(serviceClass);
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    xl: 3
  }, /*#__PURE__*/react_default.a.createElement(SelectWithLabel["a" /* default */], {
    fullWidth: true,
    disabled: disabled,
    label: role,
    value: value,
    onChange: handleChange,
    error: error
  }, (_requestedRole$candid2 = requestedRole.candidates) === null || _requestedRole$candid2 === void 0 ? void 0 : _requestedRole$candid2.map(function (candidate) {
    return /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
      key: candidate.nodeId,
      value: candidate.id
    }, /*#__PURE__*/react_default.a.createElement(DeviceName["a" /* default */], {
      device: candidate.device
    }), "[", candidate.serviceIndex, "]");
  }), noCandidates && !hostDefinition && /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
    value: NO_CANDIDATES
  }, "Please connect a device with a ", /*#__PURE__*/react_default.a.createElement("b", null, Object(pretty["j" /* serviceName */])(requestedRole.serviceClass)), " service"), hostDefinition && /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
    value: START_SIMULATOR
  }, "start simulator")));
}

function RoleManagerService(props) {
  var _useContext2 = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext2.bus;

  var service = props.service,
      clearRoles = props.clearRoles;
  var client = Object(useServiceClient["a" /* default */])(service, function (srv) {
    return new rolemanagerclient_RoleManagerClient(srv);
  });
  var requestedRoles = Object(useChange["a" /* default */])(client, function (c) {
    return c === null || c === void 0 ? void 0 : c.requestedRoles;
  });

  var handleClearRoles = /*#__PURE__*/function () {
    var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return client === null || client === void 0 ? void 0 : client.clearRoles();

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleClearRoles() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleStartSimulators = /*#__PURE__*/function () {
    var _ref3 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", client.startSimulators());

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleStartSimulators() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(DeviceCardHeader["a" /* default */], {
    device: service.device,
    showMedia: true
  }), /*#__PURE__*/react_default.a.createElement(CardContent["a" /* default */], null, !(requestedRoles !== null && requestedRoles !== void 0 && requestedRoles.length) && /*#__PURE__*/react_default.a.createElement(LoadingProgress["a" /* default */], null), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1
  }, requestedRoles === null || requestedRoles === void 0 ? void 0 : requestedRoles.map(function (rdev) {
    return /*#__PURE__*/react_default.a.createElement(RequestedRoleView, {
      key: rdev.name,
      requestedRole: rdev,
      client: client
    });
  }))), /*#__PURE__*/react_default.a.createElement(CardActions["a" /* default */], null, clearRoles && client && /*#__PURE__*/react_default.a.createElement(CmdButton["a" /* default */], {
    variant: "outlined",
    trackName: "rolemgr.clearroles",
    size: "small",
    onClick: handleClearRoles
  }, "Clear roles"), /*#__PURE__*/react_default.a.createElement(CmdButton["a" /* default */], {
    variant: "outlined",
    trackName: "rolemgr.startsims",
    disabled: !requestedRoles,
    size: "small",
    onClick: handleStartSimulators
  }, "Start simulators")));
}
// CONCATENATED MODULE: ./src/components/hooks/useServices.ts



function useServices(options) {
  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var services = Object(useChange["a" /* default */])(bus, function (b) {
    return b.services(options);
  }, [JSON.stringify(options)]);
  return services;
}
// CONCATENATED MODULE: ./src/components/tools/RoleManager.tsx







function RoleManager(props) {
  var clearRoles = props.clearRoles;
  var services = useServices({
    serviceClass: constants["be" /* SRV_ROLE_MANAGER */]
  });
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(ConnectAlert["a" /* default */], {
    serviceClass: constants["be" /* SRV_ROLE_MANAGER */]
  }), !services.length && /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "info"
  }, "We could not find any device with the role manager service on the bus!"), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, services.map(function (service) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
      key: service.id,
      item: true,
      xs: 12
    }, /*#__PURE__*/react_default.a.createElement(RoleManagerService, {
      service: service,
      clearRoles: clearRoles
    }));
  })));
}
// CONCATENATED MODULE: ./src/pages/tools/role-manager.tsx



function Page() {
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h1", null, "Role Manager"), /*#__PURE__*/react_default.a.createElement("p", null, "Use this page to configure the roles of devices using the", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/services/rolemanager/"
  }, "role manager service"), "."), /*#__PURE__*/react_default.a.createElement(RoleManager, {
    clearRoles: true
  }));
}

/***/ }),

/***/ "wsLH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useServiceClient; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KQm4");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useServiceClient(service, factory, deps) {
  if (deps === void 0) {
    deps = [];
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined),
      client = _useState[0],
      setClient = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var c = service && factory(service);
    setClient(c);
    return function () {
      return c === null || c === void 0 ? void 0 : c.unmount();
    };
  }, [service].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(deps))); // don't use factory in cache!

  return client;
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-role-manager-tsx-0ce4777f522d73490809.js.map