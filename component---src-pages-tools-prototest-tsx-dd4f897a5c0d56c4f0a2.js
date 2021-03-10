(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "81PJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Snippet; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ofer");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Indg");



function Snippet(props) {
  var value = props.value,
      mode = props.mode,
      download = props.download,
      url = props.url,
      caption = props.caption;
  var v = typeof value === 'function' ? value() : value;
  var className = mode && "language-" + (mode === "sts" ? "ts" : mode);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CodeBlock__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    className: className,
    downloadName: download,
    downloadText: download && v,
    url: url
  }, v), caption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    variant: "caption"
  }, caption));
}

/***/ }),

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

/***/ "QQfx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ProtocolTest; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js + 1 modules
var Switch = __webpack_require__("UhlP");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__("yNWl");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__("9pTp");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__("BsyY");

// EXTERNAL MODULE: ./src/components/DeviceName.tsx
var DeviceName = __webpack_require__("5eZE");

// EXTERNAL MODULE: ./src/components/DeviceActions.tsx
var DeviceActions = __webpack_require__("8zWW");

// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__("06ul");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__("30+C");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__("50B7");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__("oa/T");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__("o4QW");

// EXTERNAL MODULE: ./src/components/CmdButton.tsx + 58 modules
var CmdButton = __webpack_require__("mv/Z");

// EXTERNAL MODULE: ./src/components/ui/Snippet.tsx
var Snippet = __webpack_require__("81PJ");

// CONCATENATED MODULE: ./src/components/TestCard.tsx







function TestCard(props) {
  var title = props.title,
      subheader = props.subheader,
      onTest = props.onTest,
      children = props.children,
      autoRun = props.autoRun;

  var _useState = Object(react["useState"])(""),
      output = _useState[0],
      setOutput = _useState[1];

  var runTest = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var log, toValue, logger;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              log = [];

              toValue = function toValue(msg) {
                if (msg === undefined || msg === null) return "";else if (typeof msg === "string") return msg;else if (msg instanceof Uint8Array) return Object(utils["V" /* toHex */])(msg);else if (Array.isArray(msg)) return msg.map(toValue);else return JSON.stringify(msg);
              };

              logger = function logger(msg) {
                if (msg instanceof Error) log.push(msg + "");

                if (typeof msg === "object") {
                  Object.keys(msg).forEach(function (k) {
                    return log.push(k + ": " + toValue(msg[k]));
                  });
                } else log.push(toValue(msg));
              };

              _context.prev = 3;
              _context.next = 6;
              return onTest(logger);

            case 6:
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](3);
              logger(_context.t0);
              throw _context.t0;

            case 12:
              _context.prev = 12;
              setOutput(log.join('\n'));
              return _context.finish(12);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 8, 12, 15]]);
    }));

    return function runTest() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClick = /*#__PURE__*/function () {
    var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return runTest();

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleClick() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(CardHeader["a" /* default */], {
    title: title,
    subheader: subheader
  }), /*#__PURE__*/react_default.a.createElement(CardContent["a" /* default */], null, children, output && /*#__PURE__*/react_default.a.createElement(Snippet["a" /* default */], {
    value: output
  })), /*#__PURE__*/react_default.a.createElement(CardActions["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(CmdButton["a" /* default */], {
    variant: "outlined",
    onClick: handleClick,
    disableReset: true,
    autoRun: autoRun
  }, "Test")));
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__("W9jF");

// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/AlertTitle/AlertTitle.js
var AlertTitle = __webpack_require__("DObr");

// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__("FQT7");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/devicehost.ts + 1 modules
var devicehost = __webpack_require__("A5+n");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/protocoltestservicehost.ts
var protocoltestservicehost = __webpack_require__("9ZaH");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// CONCATENATED MODULE: ./src/pages/tools/prototest.tsx




 // tslint:disable-next-line: no-submodule-imports match-default-export-name

















function randomFieldPayload(field) {
  var specification = field.specification; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var r = undefined;

  switch (specification.type) {
    case "bool":
      r = Math.random() > 0.5 ? 1 : 0;
      break;

    case "i8":
    case "i16":
    case "i32":
    case "u8":
    case "u16":
    case "u32":
      {
        var unsigned = specification.type[0] === "u";
        var n = Math.min(30, parseInt(specification.type.slice(1)));
        var min = Object(utils["E" /* pick */])(specification.typicalMin, specification.absoluteMin, unsigned ? 0 : -((1 << n - 1) - 1));
        var max = Object(utils["E" /* pick */])(specification.typicalMax, specification.absoluteMax, unsigned ? (1 << n) - 1 : (1 << n - 1) - 1);
        r = Object(utils["F" /* randomRange */])(min, max);
        break;
      }

    case "bytes":
      {
        // maxBytes?
        var a = Object(utils["o" /* cryptoRandomUint32 */])(Object(utils["F" /* randomRange */])(1, 3));
        r = new Uint8Array(a.buffer);
        break;
      }

    case "string":
    case "string0":
      {
        var ch_a = "a".charCodeAt(0);
        var ch_z = "z".charCodeAt(0);

        var _n = Object(utils["F" /* randomRange */])(4, 10);

        var s = "";

        for (var i = 0; i < _n; ++i) {
          s += String.fromCharCode(Object(utils["F" /* randomRange */])(ch_a, ch_z));
        }

        r = s;
        break;
      }
  }

  return r;
}

function randomPayload(packFormat, fields) {
  if (!packFormat) throw new Error("pack format unknown");
  var rs = fields.map(randomFieldPayload);
  if (rs.some(function (r) {
    return r === undefined;
  })) throw new Error("unsupported data layout");
  return rs;
}

function RegisterProtocolTest(props) {
  var rw = props.rw,
      ro = props.ro,
      ev = props.ev;
  var specification = rw.specification,
      fields = rw.fields;
  var name = specification.name.replace(/^rw_/, ""); // event code and command code are the same as rw register

  Object(useEffectAsync["a" /* default */])( /*#__PURE__*/Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return rw.sendGetAsync();

          case 2:
            _context.next = 4;
            return ro.sendGetAsync();

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  var testRwRo = /*#__PURE__*/function () {
    var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2(log) {
      var packFormat, payload, data, evCount, rwpayload, ropayload;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              log("-- testing rw");
              packFormat = specification.packFormat;
              payload = randomPayload(packFormat, fields);
              log({
                payload: payload
              });
              data = Object(pack["a" /* jdpack */])(packFormat, payload);
              log({
                data: Object(utils["V" /* toHex */])(data)
              }); // setup observer for event counts

              evCount = ev.count; // send over packet

              _context2.next = 9;
              return rw.sendSetAsync(data);

            case 9:
              _context2.next = 11;
              return rw.sendGetAsync();

            case 11:
              _context2.next = 13;
              return Object(utils["r" /* delay */])(100);

            case 13:
              // check read
              log({
                rwdata: Object(utils["V" /* toHex */])(rw.data)
              });
              rwpayload = Object(pack["c" /* jdunpack */])(rw.data, packFormat);
              log({
                rwpayload: rwpayload
              });

              if (Object(pack["b" /* jdpackEqual */])(packFormat, payload, rwpayload)) {
                _context2.next = 18;
                break;
              }

              throw new Error("expected rw " + payload + ", got " + rwpayload);

            case 18:
              // check ro
              log("-- testing ro");
              _context2.next = 21;
              return ro.sendGetAsync();

            case 21:
              _context2.next = 23;
              return Object(utils["r" /* delay */])(100);

            case 23:
              ropayload = Object(pack["c" /* jdunpack */])(ro.data, packFormat);
              log({
                ropayload: ropayload
              });

              if (Object(pack["b" /* jdpackEqual */])(packFormat, payload, ropayload)) {
                _context2.next = 27;
                break;
              }

              throw new Error("expected ro " + payload + ", got " + ropayload);

            case 27:
              // the event should have triggered once
              log("-- testing event");

              if (!(packFormat !== "u8" && evCount + 1 !== ev.count)) {
                _context2.next = 30;
                break;
              }

              throw new Error("expected 1 event, got " + (ev.count - evCount));

            case 30:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function testRwRo(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var testCommand = /*#__PURE__*/function () {
    var _ref3 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee3(log) {
      var packFormat, payload, data, rwpayload;
      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              log("-- testing cmd");
              packFormat = specification.packFormat;
              payload = randomPayload(packFormat, fields);
              log({
                payload: payload
              });
              data = Object(pack["a" /* jdpack */])(packFormat, payload);
              log({
                data: Object(utils["V" /* toHex */])(data)
              }); // send over cmd packet

              _context3.next = 8;
              return rw.service.sendPacketAsync(packet["a" /* default */].from(rw.code, data));

            case 8:
              _context3.next = 10;
              return rw.sendGetAsync();

            case 10:
              _context3.next = 12;
              return Object(utils["r" /* delay */])(100);

            case 12:
              // check read
              log({
                rwdata: Object(utils["V" /* toHex */])(rw.data)
              });
              rwpayload = Object(pack["c" /* jdunpack */])(rw.data, packFormat);
              log({
                rwpayload: rwpayload
              });

              if (Object(pack["b" /* jdpackEqual */])(packFormat, payload, rwpayload)) {
                _context3.next = 17;
                break;
              }

              throw new Error("expected rw " + payload + ", got " + rwpayload);

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function testCommand(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var test = /*#__PURE__*/function () {
    var _ref4 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee4(log) {
      return regenerator_default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              log("- testing no acks");
              rw.service.registersUseAcks = false;
              _context4.next = 4;
              return testRwRo(log);

            case 4:
              _context4.next = 6;
              return testCommand(log);

            case 6:
              log("- testing acks");
              rw.service.registersUseAcks = true;
              _context4.next = 10;
              return testRwRo(log);

            case 10:
              _context4.next = 12;
              return testCommand(log);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function test(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(TestCard, {
    title: name,
    subheader: specification.packFormat || "?",
    onTest: test
  });
}

function ServiceProtocolTest(props) {
  var service = props.service;
  var device = service.device;
  var regs = service.registers();
  var rws = service.registers().filter(function (reg) {
    return reg.specification.kind == "rw";
  }).map(function (rw) {
    var roname = rw.name.replace(/^rw_/, "ro_");
    var ro = regs.find(function (r) {
      return r.specification.kind === "ro" && r.specification.name === roname;
    });
    var ev = service.event(rw.code);
    return {
      rw: rw,
      ro: ro,
      ev: ev
    };
  });

  var outPipeTest = /*#__PURE__*/function () {
    var _ref5 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee5(log) {
      var rw, _randomPayload, data, recv, recvu;

      return regenerator_default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              // fill bytes with data
              rw = service.register(constants["Ec" /* ProtoTestReg */].RwBytes);
              _randomPayload = randomPayload("b", rw.fields), data = _randomPayload[0];
              log("data: " + Object(utils["V" /* toHex */])(data)); // send over cmd packet

              rw.service.registersUseAcks = true;
              _context5.next = 6;
              return rw.sendSetAsync(data);

            case 6:
              _context5.next = 8;
              return rw.sendGetAsync();

            case 8:
              _context5.next = 10;
              return Object(utils["r" /* delay */])(100);

            case 10:
              log("data recv: " + Object(utils["V" /* toHex */])(rw.data));

              if (Object(utils["k" /* bufferEq */])(data, rw.data)) {
                _context5.next = 13;
                break;
              }

              throw new Error("rw write failed, expected " + Object(utils["V" /* toHex */])(data) + ", got " + Object(utils["V" /* toHex */])(rw.data));

            case 13:
              _context5.next = 15;
              return service.receiveWithInPipe(constants["Cc" /* ProtoTestCmd */].CReportPipe, "u8");

            case 15:
              recv = _context5.sent;
              recvu = new Uint8Array(recv.map(function (buf) {
                return buf[0];
              }));
              log("received " + Object(utils["V" /* toHex */])(recvu));

              if (Object(utils["k" /* bufferEq */])(data, recvu)) {
                _context5.next = 20;
                break;
              }

              throw new Error("expected " + Object(utils["V" /* toHex */])(data) + ", got " + Object(utils["V" /* toHex */])(recv.map(function (buf) {
                return buf[0];
              })));

            case 20:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function outPipeTest(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "h4"
  }, /*#__PURE__*/react_default.a.createElement(DeviceName["a" /* default */], {
    device: device
  }))), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react_default.a.createElement(DeviceActions["a" /* default */], {
    device: device,
    showReset: true
  })), rws === null || rws === void 0 ? void 0 : rws.map(function (rw) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
      key: rw.rw.id,
      item: true,
      xs: 12,
      md: 6
    }, /*#__PURE__*/react_default.a.createElement(RegisterProtocolTest, rw));
  }), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    key: "cpipe",
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react_default.a.createElement(TestCard, {
    title: "out pipe",
    subheader: "",
    onTest: outPipeTest
  })));
}

function ProtocolTest() {
  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var _useState = Object(react["useState"])(false),
      host = _useState[0],
      setHost = _useState[1];

  var services = Object(useChange["a" /* default */])(bus, function (b) {
    return b.services({
      serviceClass: constants["Ud" /* SRV_PROTO_TEST */]
    });
  });

  var toggleHost = function toggleHost() {
    return setHost(!host);
  }; // add virtual device


  Object(react["useEffect"])(function () {
    if (!host) return function () {};
    var d = new devicehost["a" /* default */]([new protocoltestservicehost["a" /* default */]()]);
    bus.addDeviceHost(d);
    return function () {
      return bus.removeDeviceHost(d);
    };
  }, [host]);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h1", null, "Protocol Test"), /*#__PURE__*/react_default.a.createElement("p", null, "A helper page to test the Jacdac protocol against a", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/services/prototest/"
  }, "protocol test"), " service."), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    key: "connect",
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(ConnectAlert["a" /* default */], {
    serviceClass: constants["Ud" /* SRV_PROTO_TEST */]
  })), services === null || services === void 0 ? void 0 : services.map(function (service) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
      key: service.id,
      item: true,
      xs: 12
    }, /*#__PURE__*/react_default.a.createElement(ServiceProtocolTest, {
      service: service
    }));
  }), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "info"
  }, /*#__PURE__*/react_default.a.createElement(AlertTitle["a" /* default */], null, "Developer zone"), /*#__PURE__*/react_default.a.createElement(Switch["a" /* default */], {
    checked: host,
    onChange: toggleHost
  }), /*#__PURE__*/react_default.a.createElement("label", null, "Add simulator")))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-prototest-tsx-dd4f897a5c0d56c4f0a2.js.map