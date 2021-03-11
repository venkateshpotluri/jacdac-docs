(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "1iKp":
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
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore');

exports.default = _default;

/***/ }),

/***/ "HuxJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useServices; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yNWl");
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IzqI");



function useServices(options) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]),
      bus = _useContext.bus;

  var services = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(bus, function (b) {
    return b.services(options);
  }, [JSON.stringify(options)]);
  return services;
}

/***/ }),

/***/ "d+Gs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RequestedRole */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleManagerClient; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JX7q");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dI71");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("HaE+");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vuIU");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("o8zs");
/* harmony import */ var _serviceclient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("eoX3");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ZfHV");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Zo1I");
/* harmony import */ var _packet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("W9jF");
/* harmony import */ var _pack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("BsyY");
/* harmony import */ var _hosts_hosts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("y+c1");





function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









var SCAN_DEBOUNCE = 2000;
var RequestedRole = /*#__PURE__*/function () {
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
    var _select = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee(service) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
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

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(RequestedRole, [{
    key: "parentName",
    get: function get() {
      var parts = this.name.split(/\//g);
      return parts.length > 1 ? parts.slice(0, parts.length - 1).join("/") : undefined;
    }
  }]);

  return RequestedRole;
}();
var RoleManagerClient = /*#__PURE__*/function (_JDServiceClient) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(RoleManagerClient, _JDServiceClient);

  function RoleManagerClient(service) {
    var _this;

    _this = _JDServiceClient.call(this, service) || this;
    _this.scanning = false;
    _this.requestedRoles = undefined;
    console.log("rdp: new");
    var dscan = Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* debounceAsync */ "q"])(_this.scan.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this)), SCAN_DEBOUNCE);

    _this.mount(_this.bus.subscribe(_constants__WEBPACK_IMPORTED_MODULE_7__[/* DEVICE_CHANGE */ "T"], Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* debounceAsync */ "q"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
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

    var changeEvent = _this.service.event(_constants__WEBPACK_IMPORTED_MODULE_7__[/* RoleManagerEvent */ "fd"].Change);

    _this.mount(changeEvent.subscribe(_constants__WEBPACK_IMPORTED_MODULE_7__[/* EVENT */ "jb"], dscan));

    dscan();
    return _this;
  }

  var _proto2 = RoleManagerClient.prototype;

  _proto2.scan = /*#__PURE__*/function () {
    var _scan = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee3() {
      var _this2 = this;

      var addRequested, _this$requestedRoles, inp, localDevs, ordevs, rdevs, _loop, _iterator, _step;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee3$(_context3) {
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
                if (!r) devs.push(r = new RequestedRole(_this2, role, serviceClass));
                return r;
              };

              _context3.prev = 3;
              //console.log(`rdp start`)
              this.scanning = true;
              inp = new _pipes__WEBPACK_IMPORTED_MODULE_5__[/* InPipeReader */ "a"](this.bus);
              _context3.next = 8;
              return this.service.sendPacketAsync(inp.openCommand(_constants__WEBPACK_IMPORTED_MODULE_7__[/* RoleManagerCmd */ "ed"].ListRequiredRoles), true);

            case 8:
              localDevs = this.bus.devices();
              ordevs = ((_this$requestedRoles = this.requestedRoles) === null || _this$requestedRoles === void 0 ? void 0 : _this$requestedRoles.slice(0)) || [];
              rdevs = [];

              _loop = function _loop() {
                var _localDevs$find;

                var buf = _step.value;

                var _jdunpack = Object(_pack__WEBPACK_IMPORTED_MODULE_10__[/* jdunpack */ "c"])(buf, "b[8] u32 u8 s"),
                    devidbuf = _jdunpack[0],
                    serviceClass = _jdunpack[1],
                    serviceIdx = _jdunpack[2],
                    role = _jdunpack[3];

                var devid = Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* toHex */ "V"])(devidbuf); //console.log({ devidbuf, role, serviceClass })

                var r = addRequested(rdevs, role, serviceClass);
                var srv = (_localDevs$find = localDevs.find(function (d) {
                  return d.deviceId == devid;
                })) === null || _localDevs$find === void 0 ? void 0 : _localDevs$find.service(serviceIdx);
                if (srv && srv.serviceClass === serviceClass) r.bound = srv;
              };

              _context3.t0 = _createForOfIteratorHelperLoose;
              _context3.next = 15;
              return inp.readData();

            case 15:
              _context3.t1 = _context3.sent;
              _iterator = (0, _context3.t0)(_context3.t1);

            case 17:
              if ((_step = _iterator()).done) {
                _context3.next = 21;
                break;
              }

              _loop();

            case 19:
              _context3.next = 17;
              break;

            case 21:
              rdevs.sort(function (a, b) {
                return Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* strcmp */ "P"])(a.name, b.name);
              });

              if (rdevs.length !== ordevs.length || rdevs.some(function (dev, i) {
                return dev.name !== ordevs[i].name || dev.bound !== ordevs[i].bound;
              })) {
                this.requestedRoles = rdevs;
                this.recomputeCandidates(); //console.log(`rdp changed`, this.requestedRoles)

                this.emit(_constants__WEBPACK_IMPORTED_MODULE_7__[/* CHANGE */ "s"], this.requestedRoles);
              } //console.log(`rdp done`)


              _context3.next = 28;
              break;

            case 25:
              _context3.prev = 25;
              _context3.t2 = _context3["catch"](3);
              this.emit(_constants__WEBPACK_IMPORTED_MODULE_7__[/* ERROR */ "ib"], _context3.t2);

            case 28:
              _context3.prev = 28;
              this.scanning = false;
              return _context3.finish(28);

            case 31:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[3, 25, 28, 31]]);
    }));

    function scan() {
      return _scan.apply(this, arguments);
    }

    return scan;
  }();

  _proto2.role = function role(service) {
    var _this$requestedRoles2;

    return (_this$requestedRoles2 = this.requestedRoles) === null || _this$requestedRoles2 === void 0 ? void 0 : _this$requestedRoles2.find(function (role) {
      return role.bound === service;
    });
  };

  _proto2.recomputeCandidates = function recomputeCandidates() {
    var _this$requestedRoles3;

    (_this$requestedRoles3 = this.requestedRoles) === null || _this$requestedRoles3 === void 0 ? void 0 : _this$requestedRoles3.forEach(function (rdev) {
      return rdev.computeCandidates();
    });
  };

  _proto2.clearRoles = /*#__PURE__*/function () {
    var _clearRoles = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee4() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.service.sendCmdAsync(_constants__WEBPACK_IMPORTED_MODULE_7__[/* RoleManagerCmd */ "ed"].ClearAllRoles);

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
    var _setRole = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee5(service, role) {
      var device, serviceIndex, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              device = service.device, serviceIndex = service.serviceIndex;
              this.log("set role " + device + ":" + serviceIndex + " to " + role);
              data = Object(_pack__WEBPACK_IMPORTED_MODULE_10__[/* jdpack */ "a"])("b[8] u8 s", [Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* fromHex */ "u"])(device.deviceId), serviceIndex, role || ""]);
              _context5.next = 5;
              return this.service.sendPacketAsync(_packet__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].from(_constants__WEBPACK_IMPORTED_MODULE_7__[/* RoleManagerCmd */ "ed"].SetRole, data), true);

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

    var todos = Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* groupBy */ "w"])(this.requestedRoles.filter(function (role) {
      return !role.bound;
    }).map(function (role) {
      return {
        role: role,
        hostDefinition: Object(_hosts_hosts__WEBPACK_IMPORTED_MODULE_11__[/* hostDefinitionFromServiceClass */ "d"])(role.serviceClass)
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
          return Object(_hosts_hosts__WEBPACK_IMPORTED_MODULE_11__[/* addHost */ "b"])(_this3.bus, t.hostDefinition.services());
        });
      } else {
        // spawn all services into 1
        Object(_hosts_hosts__WEBPACK_IMPORTED_MODULE_11__[/* addHost */ "b"])(_this3.bus, Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* arrayConcatMany */ "f"])(todo.map(function (t) {
          return t.hostDefinition.services();
        })));
      }
    });
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(RoleManagerClient, [{
    key: "missingRoles",
    get: function get() {
      return (this.requestedRoles || []).filter(function (role) {
        return !role.bound;
      }).length > 0;
    }
  }]);

  return RoleManagerClient;
}(_serviceclient__WEBPACK_IMPORTED_MODULE_6__[/* JDServiceClient */ "a"]);

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

/***/ "kLoJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DashboardDevice; });

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__("tr08");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__("lopY");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__("kKAo");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__("30+C");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__("50B7");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__("oa/T");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__("SCH5");

// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__("l6uw");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__("1iKp");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandLess.js
var ExpandLess = __webpack_require__("mYdW");
var ExpandLess_default = /*#__PURE__*/__webpack_require__.n(ExpandLess);

// EXTERNAL MODULE: ./src/jacdac/useDeviceSpecification.ts
var useDeviceSpecification = __webpack_require__("LoFq");

// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 2 modules
var DeviceAvatar = __webpack_require__("puVa");

// EXTERNAL MODULE: ./src/components/dashboard/DashboardServiceWidget.tsx + 4 modules
var DashboardServiceWidget = __webpack_require__("rOp/");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/rolemanagerclient.ts
var rolemanagerclient = __webpack_require__("d+Gs");

// EXTERNAL MODULE: ./src/components/hooks/useServices.ts
var useServices = __webpack_require__("HuxJ");

// EXTERNAL MODULE: ./src/components/useServiceClient.ts
var useServiceClient = __webpack_require__("wsLH");

// CONCATENATED MODULE: ./src/components/services/useServiceRole.ts





function useServiceRole(service) {
  var _useServices = Object(useServices["a" /* default */])({
    serviceClass: constants["ae" /* SRV_ROLE_MANAGER */]
  }),
      roleManager = _useServices[0];

  var roleManagerClient = Object(useServiceClient["a" /* default */])(roleManager, function (srv) {
    return new rolemanagerclient["a" /* RoleManagerClient */](srv);
  });

  var _useState = Object(react["useState"])(roleManagerClient === null || roleManagerClient === void 0 ? void 0 : roleManagerClient.role(service)),
      role = _useState[0],
      setRole = _useState[1];

  Object(react["useEffect"])(function () {
    return roleManagerClient === null || roleManagerClient === void 0 ? void 0 : roleManagerClient.subscribe(constants["s" /* CHANGE */], function () {
      var r = roleManagerClient === null || roleManagerClient === void 0 ? void 0 : roleManagerClient.role(service);
      setRole(r);
    });
  }, [roleManagerClient]);
  return role;
}
// CONCATENATED MODULE: ./src/components/services/ServiceRole.tsx



function ServiceRole(props) {
  var service = props.service;
  var role = useServiceRole(service);
  var name = role === null || role === void 0 ? void 0 : role.name;
  return name ? /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "caption",
    component: "div"
  }, name) : null;
}
// CONCATENATED MODULE: ./src/components/dashboard/DashboardServiceWidgetItem.tsx




function DashboardServiceWidgetItem(props) {
  var service = props.service;
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(ServiceRole, {
    service: service
  }), /*#__PURE__*/react_default.a.createElement(DashboardServiceWidget["b" /* default */], props));
}
// EXTERNAL MODULE: ./src/components/DeviceActions.tsx
var DeviceActions = __webpack_require__("8zWW");

// EXTERNAL MODULE: ./src/components/RegisterInput.tsx + 2 modules
var RegisterInput = __webpack_require__("271P");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// CONCATENATED MODULE: ./src/components/dashboard/DashboardServiceDetails.tsx






// filter out common registers
var ignoreRegisters = [constants["Se" /* SystemReg */].StatusCode, constants["Se" /* SystemReg */].StreamingPreferredInterval, constants["Se" /* SystemReg */].StreamingSamples, constants["Se" /* SystemReg */].StreamingInterval];
var collapsedRegisters = [constants["Se" /* SystemReg */].Reading, constants["Se" /* SystemReg */].Value, constants["Se" /* SystemReg */].Intensity];
function DashboardServiceDetails(props) {
  var service = props.service,
      expanded = props.expanded;
  var specification = Object(useChange["a" /* default */])(service, function (spec) {
    return spec.specification;
  });
  var registers = Object(react["useMemo"])(function () {
    var _packets$filter;

    var packets = specification === null || specification === void 0 ? void 0 : specification.packets;
    var ids = (packets === null || packets === void 0 ? void 0 : (_packets$filter = packets.filter(function (pkt) {
      return Object(spec["s" /* isRegister */])(pkt);
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
    });
  }, [specification, expanded]);
  if (!(registers !== null && registers !== void 0 && registers.length)) // nothing to see here
    return null;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, registers.map(function (register) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
      key: register.id,
      item: true,
      xs: true
    }, /*#__PURE__*/react_default.a.createElement(RegisterInput["a" /* default */], {
      register: register,
      showServiceName: true,
      showRegisterName: true,
      hideMissingValues: false,
      showTrend: false
    }));
  }));
}
// EXTERNAL MODULE: ./src/components/layout.tsx + 16 modules
var layout = __webpack_require__("9Dj+");

// EXTERNAL MODULE: ./src/components/devices/useDeviceName.ts
var useDeviceName = __webpack_require__("mAuX");

// CONCATENATED MODULE: ./src/components/dashboard/DashboardDevice.tsx





 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name









var ignoredServices = [constants["zd" /* SRV_CTRL */], constants["Md" /* SRV_LOGGER */]];
function DashboardDevice(props) {
  var device = props.device,
      expanded = props.expanded,
      toggleExpanded = props.toggleExpanded,
      variant = props.variant,
      showAvatar = props.showAvatar,
      showHeader = props.showHeader;
  var name = Object(useDeviceName["a" /* default */])(device);
  var services = Object(useChange["a" /* default */])(device, function () {
    return device.services().filter(function (service) {
      return ignoredServices.indexOf(service.serviceClass) < 0 && !!service.specification;
    });
  });
  var specification = Object(useDeviceSpecification["a" /* default */])(device);
  var theme = Object(useTheme["a" /* default */])();
  var mobile = Object(useMediaQuery["a" /* default */])(theme.breakpoints.down(layout["c" /* MOBILE_BREAKPOINT */]));

  var ServiceWidgets = function ServiceWidgets() {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
      container: true,
      spacing: 2,
      justify: "center",
      alignItems: "flex-end",
      alignContent: "space-between"
    }, services === null || services === void 0 ? void 0 : services.map(function (service) {
      return /*#__PURE__*/react_default.a.createElement(DashboardServiceWidgetItem, {
        key: service.id,
        service: service,
        expanded: expanded,
        services: services,
        variant: variant
      });
    }));
  };

  if (!showHeader) return /*#__PURE__*/react_default.a.createElement(Paper["a" /* default */], {
    style: {
      padding: "0.25em"
    },
    variant: "outlined"
  }, /*#__PURE__*/react_default.a.createElement(ServiceWidgets, null));
  return /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], {
    "aria-live": "polite",
    "aria-label": "device " + name + " started"
  }, /*#__PURE__*/react_default.a.createElement(CardHeader["a" /* default */], {
    avatar: showAvatar && /*#__PURE__*/react_default.a.createElement(DeviceAvatar["a" /* default */], {
      device: device
    }),
    action: /*#__PURE__*/react_default.a.createElement(DeviceActions["a" /* default */], {
      device: device,
      showStopHost: expanded && !mobile,
      hideIdentity: true,
      showReset: expanded && !mobile
    }, toggleExpanded && /*#__PURE__*/react_default.a.createElement(IconButtonWithTooltip["a" /* default */], {
      onClick: toggleExpanded,
      title: expanded ? "Collapse" : "Expand"
    }, expanded ? /*#__PURE__*/react_default.a.createElement(ExpandLess_default.a, null) : /*#__PURE__*/react_default.a.createElement(ExpandMore_default.a, null))),
    title: /*#__PURE__*/react_default.a.createElement(DeviceName["a" /* default */], {
      showShortId: false,
      device: device
    }),
    subheader: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, !mobile && specification && /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
      variant: "caption",
      gutterBottom: true
    }, specification.name))
  }), /*#__PURE__*/react_default.a.createElement(CardContent["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(ServiceWidgets, null), expanded && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    direction: "column",
    spacing: 1,
    alignContent: "stretch"
  }, services === null || services === void 0 ? void 0 : services.map(function (service) {
    return /*#__PURE__*/react_default.a.createElement(DashboardServiceDetails, {
      key: "details" + service.serviceIndex,
      service: service,
      expanded: expanded
    });
  }))));
}

/***/ }),

/***/ "mYdW":
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
  d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), 'ExpandLess');

exports.default = _default;

/***/ }),

/***/ "rOp/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ DashboardServiceWidget; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ dashboardServiceWeight; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./src/components/RegisterInput.tsx + 2 modules
var RegisterInput = __webpack_require__("271P");

// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__("dYIP");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js
var NoSsr = __webpack_require__("Bf0q");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__("iae6");

// EXTERNAL MODULE: ./src/components/hooks/useServiceHost.ts
var useServiceHost = __webpack_require__("asyI");

// EXTERNAL MODULE: ./src/components/widgets/ButtonWidget.tsx
var ButtonWidget = __webpack_require__("R8ow");

// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__("aVfY");

// CONCATENATED MODULE: ./src/components/dashboard/DashboardButton.tsx





function DashboardButton(props) {
  var service = props.service;

  var _useState = Object(react["useState"])(false),
      pressed = _useState[0],
      setPressed = _useState[1];

  var pressedRegister = service.register(constants["p" /* ButtonReg */].Pressed); // track register

  Object(react["useEffect"])(function () {
    return pressedRegister === null || pressedRegister === void 0 ? void 0 : pressedRegister.subscribe(constants["Rc" /* REPORT_UPDATE */], function () {
      var _ref = (pressedRegister === null || pressedRegister === void 0 ? void 0 : pressedRegister.unpackedValue) || [],
          b = _ref[0];

      if (b !== undefined) setPressed(b);
    });
  }, [pressedRegister]); // track event up/down events

  var downEvent = service.event(constants["o" /* ButtonEvent */].Down);
  Object(react["useEffect"])(function () {
    return downEvent.subscribe(constants["jb" /* EVENT */], function () {
      return setPressed(true);
    });
  }, [downEvent]);
  var upEvent = service.event(constants["o" /* ButtonEvent */].Up);
  Object(react["useEffect"])(function () {
    return upEvent.subscribe(constants["jb" /* EVENT */], function () {
      return setPressed(false);
    });
  }, [upEvent]);
  var host = Object(useServiceHost["a" /* default */])(service);
  var color = host ? "secondary" : "primary";
  var label = "button " + (pressed ? "down" : "up");

  var handleDown = function handleDown() {
    return host === null || host === void 0 ? void 0 : host.down();
  };

  var handleUp = function handleUp() {
    return host === null || host === void 0 ? void 0 : host.up();
  };

  var widgetSize = "clamp(5em, 25vw, 100%)";
  if (pressed === undefined) return /*#__PURE__*/react_default.a.createElement(LoadingProgress["a" /* default */], null);
  return /*#__PURE__*/react_default.a.createElement(ButtonWidget["a" /* default */], {
    checked: !!pressed,
    color: color,
    onDown: host && handleDown,
    onUp: host && handleUp,
    label: label,
    size: widgetSize
  });
}
// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__("7/Hy");

// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__("Lml+");

// EXTERNAL MODULE: ./src/components/hooks/useThrottledValue.ts
var useThrottledValue = __webpack_require__("cJz4");

// EXTERNAL MODULE: ./jacdac-ts/src/hosts/hosts.ts + 22 modules
var hosts = __webpack_require__("y+c1");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./src/components/widgets/PowerButton.tsx
var PowerButton = __webpack_require__("TaZW");

// CONCATENATED MODULE: ./src/components/dashboard/DashboardServo.tsx














function useActualAngle(service) {
  var _useRegisterUnpackedV = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(service.register(constants["Be" /* ServoReg */].Angle)),
      angle = _useRegisterUnpackedV[0]; // sec/60deg


  var _useRegisterUnpackedV2 = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(service.register(constants["Be" /* ServoReg */].ResponseSpeed)),
      responseSpeed = _useRegisterUnpackedV2[0];

  var rotationalSpeed = 60 / (responseSpeed || hosts["a" /* SG90_RESPONSE_SPEED */]);
  var actualAngle = Object(useThrottledValue["a" /* default */])(angle || 0, rotationalSpeed);
  return actualAngle;
}

function DashboardServo(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var enabledRegister = service.register(constants["Be" /* ServoReg */].Enabled);

  var _useRegisterUnpackedV3 = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(enabledRegister),
      enabled = _useRegisterUnpackedV3[0];

  var off = !enabled;
  var angleRegister = service.register(constants["Be" /* ServoReg */].Angle);
  var angle = useActualAngle(service);

  var _useRegisterUnpackedV4 = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(service.register(constants["Be" /* ServoReg */].Offset)),
      offset = _useRegisterUnpackedV4[0];

  var host = Object(useServiceHost["a" /* default */])(service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(useWidgetTheme["a" /* default */])(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active,
      textPrimary = _useWidgetTheme.textPrimary;

  var cx = 78;
  var cy = 55;
  var a = enabled ? angle + (offset || 0) : 0;
  var transform = "rotate(" + -a + ", " + cx + ", " + cy + ")";
  var h = 111.406;
  var w = 158.50195;
  var pr = 14;
  var pri = 6;
  var text = enabled ? Math.round(a) + "\xB0" : 'off';

  var toggleOff = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return enabledRegister.sendSetBoolAsync(!enabled);

            case 2:
              enabledRegister.refresh();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function toggleOff() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    alignContent: "center"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(SvgWidget["a" /* default */], {
    tabIndex: 0,
    title: "servo at angle " + angle,
    width: w,
    height: h
  }, /*#__PURE__*/react_default.a.createElement("path", {
    fill: background,
    d: "M158.502 10.687H0v89.75h158.502z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    fill: controlBackground,
    d: "M125.545 55.641c0-24.994-20.26-45.256-45.254-45.256-17.882.016-34.077 9.446-41.328 25.79-2.655.024-4.192.076-6.35.07-11.158 0-20.204 9.046-20.204 20.204 0 11.158 9.046 20.203 20.203 20.203 2.389-.005 4.354-.332 6.997-.256 7.56 15.59 23.356 24.485 40.682 24.5 24.992 0 45.254-20.264 45.254-45.256z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    fill: enabled ? active : background,
    stroke: active,
    transform: transform,
    d: "M93.782 55.623c-.032-3.809-.19-6.403-.352-7.023h-.002c-.93-3.558-6.621-6.73-14.793-6.73-8.17 0-14.649 3.016-14.795 6.73-.25 6.419-4.049 62.795 13.561 62.806 14.308.008 16.52-39.277 16.38-55.783zm-8.05.08a7.178 7.178 0 010 .012 7.178 7.178 0 01-7.179 7.176 7.178 7.178 0 01-7.177-7.176 7.178 7.178 0 017.177-7.178 7.178 7.178 0 017.178 7.166z"
  }), /*#__PURE__*/react_default.a.createElement("text", {
    x: w / 2,
    y: 30,
    textAnchor: "middle",
    fill: textPrimary
  }, text), /*#__PURE__*/react_default.a.createElement(PowerButton["a" /* default */], {
    r: pr,
    ri: pri,
    cx: w - pr - 4,
    cy: pr + 14,
    color: color,
    strokeWidth: 1.5,
    off: off,
    onClick: toggleOff
  }))), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(RegisterInput["a" /* default */], {
    register: angleRegister
  })));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slider/Slider.js + 1 modules
var Slider = __webpack_require__("6Obz");

// CONCATENATED MODULE: ./src/components/dashboard/DashboardRotaryEncoder.tsx










function DashboardRotaryEncoder(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var positionRegister = service.register(constants["hd" /* RotaryEncoderReg */].Position);

  var _useRegisterUnpackedV = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(positionRegister),
      _useRegisterUnpackedV2 = _useRegisterUnpackedV[0],
      position = _useRegisterUnpackedV2 === void 0 ? 0 : _useRegisterUnpackedV2;

  var clicksPerTurnRegister = service.register(constants["hd" /* RotaryEncoderReg */].ClicksPerTurn);

  var _useRegisterUnpackedV3 = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(clicksPerTurnRegister),
      _useRegisterUnpackedV4 = _useRegisterUnpackedV3[0],
      clicksPerTurn = _useRegisterUnpackedV4 === void 0 ? 12 : _useRegisterUnpackedV4;

  var host = Object(useServiceHost["a" /* default */])(service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(useWidgetTheme["a" /* default */])(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active,
      textProps = _useWidgetTheme.textProps;

  var label = "" + position;
  var w = 37.794;
  var r = 0.06;
  var fs = Math.max(0.2, 0.5 - label.length * 0.1);

  var handleChange = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(ev, newValue) {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              host === null || host === void 0 ? void 0 : host.reading.setValues([newValue]);
              positionRegister.refresh();
              clicksPerTurnRegister.refresh();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleChange(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var throttled = Object(useThrottledValue["a" /* default */])(position, clicksPerTurn);
  var angle = throttled / clicksPerTurn * 360;
  var min = Math.floor(position / clicksPerTurn - 1) * clicksPerTurn;
  var max = Math.ceil(position / clicksPerTurn + 1) * clicksPerTurn;
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(SvgWidget["a" /* default */], {
    title: "rotary encoder at position " + position,
    width: w,
    height: w,
    viewBox: "0 0 1 1"
  }, /*#__PURE__*/react_default.a.createElement("g", {
    transform: "rotate(" + angle + ", 0.5, 0.5)"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    fill: background,
    d: "M.67.029a.037.037 0 01-.072-.02A.5.5 0 00.538 0a.037.037 0 01-.075 0 .5.5 0 00-.061.008.038.038 0 01-.073.02.5.5 0 00-.056.025.037.037 0 01-.064.04A.5.5 0 00.16.13.037.037 0 01.11.186a.5.5 0 00-.035.05.037.037 0 01-.035.066.5.5 0 00-.02.058.037.037 0 01-.016.074A.5.5 0 000 .495.037.037 0 01.005.57a.5.5 0 00.013.06.038.038 0 01.025.07.5.5 0 00.028.056.037.037 0 01.043.06.5.5 0 00.042.046.037.037 0 01.058.047.5.5 0 00.053.032.037.037 0 01.069.03.5.5 0 00.059.016.037.037 0 01.074.01.5.5 0 00.062 0 .037.037 0 01.074-.01.5.5 0 00.06-.016.037.037 0 01.068-.03.5.5 0 00.053-.032.037.037 0 01.058-.047.5.5 0 00.042-.045.037.037 0 01.043-.061A.5.5 0 00.957.7.037.037 0 01.982.63.5.5 0 00.995.57.037.037 0 011 .495.5.5 0 00.996.434.038.038 0 01.98.36.5.5 0 00.96.302.037.037 0 01.925.236.5.5 0 00.89.186.037.037 0 01.839.13.5.5 0 00.79.092.037.037 0 01.727.053.5.5 0 00.671.03z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    fill: controlBackground,
    d: "M.1.499a.4.4 0 10.8 0 .4.4 0 10-.8 0z"
  }), /*#__PURE__*/react_default.a.createElement("circle", {
    cx: 0.5,
    cy: 0.19,
    r: r,
    fill: active
  })), /*#__PURE__*/react_default.a.createElement("text", Object.assign({
    x: 0.5,
    y: 0.5,
    fontSize: fs
  }, textProps), label))), host && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Slider["a" /* default */], {
    color: color,
    min: min,
    max: max,
    step: 1,
    value: position,
    valueLabelDisplay: "off",
    onChange: handleChange
  })));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js + 1 modules
var Switch = __webpack_require__("UhlP");

// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__("W1g9");

// CONCATENATED MODULE: ./src/components/dashboard/DashboardSwitch.tsx








function DashboardSwitch(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var labelId = Object(react_use_id_hook_esm["b" /* useId */])();
  var on = Object(useRegisterValue["a" /* useRegisterBoolValue */])(service.register(constants["Oe" /* SwitchReg */].Active));

  var _useRegisterUnpackedV = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(service.register(constants["Oe" /* SwitchReg */].Variant)),
      switchVariant = _useRegisterUnpackedV[0];

  var host = Object(useServiceHost["a" /* default */])(service);
  var color = host ? "secondary" : "primary";
  var widgetSize = "clamp(5em, 25vw, 100%)";

  var handleToggle = function handleToggle() {
    return host === null || host === void 0 ? void 0 : host.toggle();
  };

  if (on === undefined) return /*#__PURE__*/react_default.a.createElement(LoadingProgress["a" /* default */], null);

  switch (switchVariant) {
    case constants["Pe" /* SwitchVariant */].PushButton:
      return /*#__PURE__*/react_default.a.createElement(ButtonWidget["a" /* default */], {
        checked: on,
        color: color,
        label: on ? "on" : "off",
        onDown: host && handleToggle,
        size: widgetSize
      });

    default:
      return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Switch["a" /* default */], {
        "aria-labelledby": labelId,
        color: color,
        checked: on,
        onChange: host && handleToggle
      }), /*#__PURE__*/react_default.a.createElement("label", {
        id: labelId
      }, on ? "on" : "off"));
  }
}
// CONCATENATED MODULE: ./src/components/dashboard/DashboardServiceWidget.tsx


var _serviceViews;








 // bundled




 // lazy devices

var DashboardAccelerometer = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 107).then(__webpack_require__.bind(null, "BuIi"));
});
var DashboardBuzzer = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 102).then(__webpack_require__.bind(null, "R+TK"));
});
var DashboardLEDPixel = /*#__PURE__*/Object(react["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(13), __webpack_require__.e(86)]).then(__webpack_require__.bind(null, "6t+h"));
});
var DashboardRoleManager = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 121).then(__webpack_require__.bind(null, "W5Co"));
});
var DashboardTrafficLight = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 105).then(__webpack_require__.bind(null, "3zc7"));
});
var DashboardCharacterScreen = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 110).then(__webpack_require__.bind(null, "n8kx"));
});
var DashboardRainGauge = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 117).then(__webpack_require__.bind(null, "Ps5K"));
});
var DashboardLEDMatrix = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 103).then(__webpack_require__.bind(null, "pp1O"));
});
var DashboardArcadeGamepad = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 109).then(__webpack_require__.bind(null, "35Ra"));
});
var DashboardWindDirection = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 128).then(__webpack_require__.bind(null, "ns0S"));
});
var DashboardMatrixKeypad = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 104).then(__webpack_require__.bind(null, "7Zf3"));
});
var DashboardReflectedLight = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 120).then(__webpack_require__.bind(null, "dJYX"));
});
var DashboardPower = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 116).then(__webpack_require__.bind(null, "jSS8"));
});
var DashboardSpeechSynthesis = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 100).then(__webpack_require__.bind(null, "QRI8"));
});
var DashboardSoilMoisture = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 123).then(__webpack_require__.bind(null, "0HhB"));
});
var DashboardRealTimeClock = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 119).then(__webpack_require__.bind(null, "eCSt"));
});
var DashboardLED = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 114).then(__webpack_require__.bind(null, "HqAP"));
});
var DashboardJoystick = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 113).then(__webpack_require__.bind(null, "VuK9"));
});
var DashboardSevenSegmentDisplay = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 122).then(__webpack_require__.bind(null, "hXyX"));
});
var DashboardMotion = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 115).then(__webpack_require__.bind(null, "ummP"));
});
var DashboardWaterLevel = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 127).then(__webpack_require__.bind(null, "zMc1"));
});
var DashboardColor = /*#__PURE__*/Object(react["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(13), __webpack_require__.e(111)]).then(__webpack_require__.bind(null, "a9ED"));
});
var DashboardSoundPlayer = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 101).then(__webpack_require__.bind(null, "Lz8i"));
});
var DashboardAnalogButton = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 108).then(__webpack_require__.bind(null, "SmDE"));
});
var DashboardSoundLevel = /*#__PURE__*/Object(react["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(14), __webpack_require__.e(125)]).then(__webpack_require__.bind(null, "iPqf"));
});
var DashboardSoundSpectrum = /*#__PURE__*/Object(react["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(14), __webpack_require__.e(126)]).then(__webpack_require__.bind(null, "wvcQ"));
});
var DashboardRandomNumberGenerator = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 118).then(__webpack_require__.bind(null, "2rwa"));
});
var DashboardCompass = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 112).then(__webpack_require__.bind(null, "w0oc"));
});
var DashboardGyroscope = /*#__PURE__*/Object(react["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(24), __webpack_require__.e(14), __webpack_require__.e(97)]).then(__webpack_require__.bind(null, "R6i2"));
});
var DashboardSolenoid = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 124).then(__webpack_require__.bind(null, "F4wc"));
});
var serviceViews = (_serviceViews = {}, _serviceViews[constants["ae" /* SRV_ROLE_MANAGER */]] = {
  component: DashboardRoleManager
}, _serviceViews[constants["ud" /* SRV_BUZZER */]] = {
  component: DashboardBuzzer,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants["Kd" /* SRV_LED_PIXEL */]] = {
  component: DashboardLEDPixel,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants["nd" /* SRV_ACCELEROMETER */]] = {
  component: DashboardAccelerometer,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants["be" /* SRV_ROTARY_ENCODER */]] = {
  component: DashboardRotaryEncoder,
  bundled: true
}, _serviceViews[constants["td" /* SRV_BUTTON */]] = {
  component: DashboardButton,
  bundled: true
}, _serviceViews[constants["de" /* SRV_SERVO */]] = {
  component: DashboardServo,
  bundled: true
}, _serviceViews[constants["me" /* SRV_SWITCH */]] = {
  component: DashboardSwitch,
  bundled: true
}, _serviceViews[constants["pe" /* SRV_TRAFFIC_LIGHT */]] = {
  component: DashboardTrafficLight
}, _serviceViews[constants["vd" /* SRV_CHARACTER_SCREEN */]] = {
  component: DashboardCharacterScreen,
  weight: function weight() {
    return 3;
  }
}, _serviceViews[constants["Vd" /* SRV_RAIN_GAUGE */]] = {
  component: DashboardRainGauge
}, _serviceViews[constants["Jd" /* SRV_LED_MATRIX */]] = {
  component: DashboardLEDMatrix,
  weight: function weight() {
    return 3;
  }
}, _serviceViews[constants["pd" /* SRV_ARCADE_GAMEPAD */]] = {
  component: DashboardArcadeGamepad,
  weight: function weight() {
    return 3;
  }
}, _serviceViews[constants["ve" /* SRV_WIND_DIRECTION */]] = {
  component: DashboardWindDirection
}, _serviceViews[constants["Nd" /* SRV_MATRIX_KEYPAD */]] = {
  component: DashboardMatrixKeypad
}, _serviceViews[constants["Xd" /* SRV_REFLECTED_LIGHT */]] = {
  component: DashboardReflectedLight
}, _serviceViews[constants["Sd" /* SRV_POWER */]] = {
  component: DashboardPower
}, _serviceViews[constants["le" /* SRV_SPEECH_SYNTHESIS */]] = {
  component: DashboardSpeechSynthesis
}, _serviceViews[constants["ge" /* SRV_SOIL_MOISTURE */]] = {
  component: DashboardSoilMoisture
}, _serviceViews[constants["Wd" /* SRV_REAL_TIME_CLOCK */]] = {
  component: DashboardRealTimeClock
}, _serviceViews[constants["Id" /* SRV_LED */]] = {
  component: DashboardLED
}, _serviceViews[constants["Hd" /* SRV_JOYSTICK */]] = {
  component: DashboardJoystick
}, _serviceViews[constants["fe" /* SRV_SEVEN_SEGMENT_DISPLAY */]] = {
  component: DashboardSevenSegmentDisplay
}, _serviceViews[constants["Pd" /* SRV_MOTION */]] = {
  component: DashboardMotion
}, _serviceViews[constants["te" /* SRV_WATER_LEVEL */]] = {
  component: DashboardWaterLevel
}, _serviceViews[constants["wd" /* SRV_COLOR */]] = {
  component: DashboardColor,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants["je" /* SRV_SOUND_PLAYER */]] = {
  component: DashboardSoundPlayer,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants["od" /* SRV_ANALOG_BUTTON */]] = {
  component: DashboardAnalogButton
}, _serviceViews[constants["ie" /* SRV_SOUND_LEVEL */]] = {
  component: DashboardSoundLevel,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants["Zd" /* SRV_RNG */]] = {
  component: DashboardRandomNumberGenerator
}, _serviceViews[constants["xd" /* SRV_COMPASS */]] = {
  component: DashboardCompass
}, _serviceViews[constants["Dd" /* SRV_GYROSCOPE */]] = {
  component: DashboardGyroscope,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants["ke" /* SRV_SOUND_SPECTRUM */]] = {
  component: DashboardSoundSpectrum,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants["he" /* SRV_SOLENOID */]] = {
  component: DashboardSolenoid
}, _serviceViews);
var collapsedRegisters = [constants["Se" /* SystemReg */].Reading, constants["Se" /* SystemReg */].Value, constants["Se" /* SystemReg */].Intensity];

function ValueWidget(props) {
  var valueRegister = props.valueRegister,
      intensityRegister = props.intensityRegister;

  var _useRegisterUnpackedV = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(intensityRegister),
      intensity = _useRegisterUnpackedV[0];

  var hasIntensity = intensity !== undefined;
  var off = hasIntensity ? !intensity : undefined;

  var toggleOff = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return intensityRegister.sendSetBoolAsync(off, true);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function toggleOff() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(RegisterInput["a" /* default */], {
    register: valueRegister,
    variant: "widget",
    showServiceName: false,
    showRegisterName: false,
    hideMissingValues: true,
    off: off,
    toggleOff: hasIntensity ? toggleOff : undefined
  });
}

function IntensityWidget(props) {
  var intensityRegister = props.intensityRegister;

  var _useRegisterUnpackedV2 = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(intensityRegister),
      intensity = _useRegisterUnpackedV2[0];

  var off = intensity !== undefined && !intensity;
  return /*#__PURE__*/react_default.a.createElement(RegisterInput["a" /* default */], {
    register: intensityRegister,
    variant: "widget",
    showServiceName: false,
    showRegisterName: false,
    hideMissingValues: true,
    off: off
  });
}

function DefaultWidget(props) {
  var service = props.service;
  var specification = service.specification;
  var register = Object(react["useMemo"])(function () {
    var rspec = specification === null || specification === void 0 ? void 0 : specification.packets.find(function (pkt) {
      return Object(spec["s" /* isRegister */])(pkt) && collapsedRegisters.indexOf(pkt.identifier) > -1;
    });
    return service.register(rspec === null || rspec === void 0 ? void 0 : rspec.identifier);
  }, [service]);
  if (!register) // nothing to see here
    return null; // if register is value, disable if enabled is 0.

  if (register.specification.identifier == constants["Se" /* SystemReg */].Value) {
    var intensityRegister = register.service.register(constants["Se" /* SystemReg */].Intensity);
    return /*#__PURE__*/react_default.a.createElement(ValueWidget, {
      valueRegister: register,
      intensityRegister: intensityRegister
    });
  } // case of no streaming,value just intensity, like a relay


  if (register.specification.identifier === constants["Se" /* SystemReg */].Intensity) return /*#__PURE__*/react_default.a.createElement(IntensityWidget, {
    intensityRegister: register
  });
  return /*#__PURE__*/react_default.a.createElement(RegisterInput["a" /* default */], {
    register: register,
    variant: "widget",
    showServiceName: false,
    showRegisterName: false,
    hideMissingValues: true
  });
}

function DashboardServiceWidget(props) {
  var service = props.service;
  var specification = service.specification;

  var _ref2 = serviceViews[specification.classIdentifier] || {},
      component = _ref2.component,
      bundled = _ref2.bundled;

  var host = Object(useServiceHost["a" /* default */])(service);
  var color = host ? "secondary" : "primary"; // no special support

  if (!component) return /*#__PURE__*/Object(react["createElement"])(DefaultWidget, props); // precompiled

  if (bundled) return /*#__PURE__*/Object(react["createElement"])(component, props); // lazy loading

  return /*#__PURE__*/react_default.a.createElement(NoSsr["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(react["Suspense"], {
    fallback: /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
      color: color,
      disableShrink: true,
      variant: "indeterminate",
      size: "3em"
    })
  }, /*#__PURE__*/Object(react["createElement"])(component, props)));
}
function dashboardServiceWeight(service) {
  var _view$weight;

  var view = serviceViews[service.serviceClass];
  return view === null || view === void 0 ? void 0 : (_view$weight = view.weight) === null || _view$weight === void 0 ? void 0 : _view$weight.call(view, service);
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
//# sourceMappingURL=f45028b77642bb06a1e26ecfd1b9356bfb549ad6-261fb0d63e510bc1cd9a.js.map