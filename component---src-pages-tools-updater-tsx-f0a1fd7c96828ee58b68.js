(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "2HUc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircularProgressWithLabel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("hlFM");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iae6");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ofer");


function CircularProgressWithLabel(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    position: "relative",
    display: "inline-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({
    variant: "determinate"
  }, props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    variant: "caption",
    component: "div",
    color: "textSecondary"
  }, Math.round(props.value) + "%")));
}

/***/ }),

/***/ "jv/G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Page; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__("hlFM");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__("dfam");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tab/Tab.js
var Tab = __webpack_require__("JrkS");

// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__("cV++");

// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__("9pTp");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__("TD2k");

// EXTERNAL MODULE: ./src/components/firmware/FirmwareCard.tsx
var FirmwareCard = __webpack_require__("o37L");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__("yNWl");

// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__("06ul");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./src/jacdac/useEventRaised.ts
var useEventRaised = __webpack_require__("jj5L");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__("W9jF");

// CONCATENATED MODULE: ./src/components/firmware/useFirmwareRepos.ts



function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









function useFirmwareRepos(showAllRepos) {
  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var _useState = Object(react["useState"])([]),
      repos = _useState[0],
      setRepos = _useState[1];

  var devices = Object(useEventRaised["a" /* default */])(constants["T" /* DEVICE_CHANGE */], bus, function () {
    return bus.devices().filter(function (dev) {
      return dev.announced;
    });
  });
  var bootloaders = devices.filter(function (device) {
    return device === null || device === void 0 ? void 0 : device.hasService(constants["td" /* SRV_BOOTLOADER */]);
  });
  var registers = devices.filter(function (device) {
    return !(device !== null && device !== void 0 && device.hasService(constants["td" /* SRV_BOOTLOADER */]));
  }) // not a bootloader
  .map(function (device) {
    var _device$service;

    return device === null || device === void 0 ? void 0 : (_device$service = device.service(0)) === null || _device$service === void 0 ? void 0 : _device$service.register(constants["Q" /* ControlReg */].FirmwareIdentifier);
  }).filter(function (reg) {
    return !!reg;
  });
  Object(useEffectAsync["a" /* default */])( /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(mounted) {
      var repos, firmwares, _iterator, _step, register, firmwareIdentifier, _iterator2, _step2, bootloader, boot, bl_announce, resp, _resp$jdunpack, _firmwareIdentifier;

      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              repos = [];

              if (!showAllRepos) {
                _context.next = 5;
                break;
              }

              repos = Object(spec["d" /* deviceSpecifications */])().map(function (spec) {
                return spec.repo;
              });
              _context.next = 34;
              break;

            case 5:
              firmwares = []; // ask firmware registers

              _iterator = _createForOfIteratorHelperLoose(registers);

            case 7:
              if ((_step = _iterator()).done) {
                _context.next = 15;
                break;
              }

              register = _step.value;
              _context.next = 11;
              return register.refresh(true);

            case 11:
              firmwareIdentifier = register.intValue;
              if (firmwareIdentifier !== undefined && firmwares.indexOf(firmwareIdentifier) < 0) firmwares.push(firmwareIdentifier);

            case 13:
              _context.next = 7;
              break;

            case 15:
              _iterator2 = _createForOfIteratorHelperLoose(bootloaders);

            case 16:
              if ((_step2 = _iterator2()).done) {
                _context.next = 33;
                break;
              }

              bootloader = _step2.value;
              boot = bootloader.services({
                serviceClass: constants["td" /* SRV_BOOTLOADER */]
              })[0];
              bl_announce = packet["a" /* default */].onlyHeader(constants["m" /* BootloaderCmd */].Info);
              _context.prev = 20;
              _context.next = 23;
              return boot.sendCmdAwaitResponseAsync(bl_announce);

            case 23:
              resp = _context.sent;
              _resp$jdunpack = resp.jdunpack("u32 u32 u32 u32"), _firmwareIdentifier = _resp$jdunpack[3];
              if (_firmwareIdentifier !== undefined && firmwares.indexOf(_firmwareIdentifier) < 0) firmwares.push(_firmwareIdentifier);
              _context.next = 31;
              break;

            case 28:
              _context.prev = 28;
              _context.t0 = _context["catch"](20);
              console.warn("bootloader firmware identifier failed", _context.t0);

            case 31:
              _context.next = 16;
              break;

            case 33:
              repos = firmwares.map(function (fw) {
                var _deviceSpecificationF;

                return (_deviceSpecificationF = Object(spec["b" /* deviceSpecificationFromFirmwareIdentifier */])(fw)) === null || _deviceSpecificationF === void 0 ? void 0 : _deviceSpecificationF.repo;
              }).filter(function (repo) {
                return !!repo;
              });

            case 34:
              if (mounted) setRepos(Object(utils["Y" /* unique */])(repos));

            case 35:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[20, 28]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [devices.map(function (dev) {
    return dev.id;
  }).join(), registers.map(function (reg) {
    return reg.id;
  }).join(), showAllRepos]);
  return repos;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__("30+C");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__("50B7");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__("oa/T");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__("eD//");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__("tVbE");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__("IsqK");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__("o4QW");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__("Z3vd");

// EXTERNAL MODULE: ./src/components/firmware/useFirmwareBlobs.ts
var useFirmwareBlobs = __webpack_require__("iOk9");

// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__("FQT7");

// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__("OXkz");

// CONCATENATED MODULE: ./src/components/firmware/LocalFileFirmwareCard.tsx







var ImportButton = /*#__PURE__*/Object(react["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "/MSm"));
});
var LOCAL_FILE_SLUG = "local file";
function LocalFileFirmwareCard() {
  var slug = LOCAL_FILE_SLUG;

  var _useState = Object(react["useState"])(false),
      downloading = _useState[0],
      setDownloading = _useState[1];

  var _useState2 = Object(react["useState"])(""),
      error = _useState2[0],
      setError = _useState2[1];

  var _useFirmwareBlob = Object(useFirmwareBlobs["b" /* useFirmwareBlob */])(slug),
      setFirmwareFile = _useFirmwareBlob.setFirmwareFile,
      firmwareBlobs = _useFirmwareBlob.firmwareBlobs;

  var disabled = downloading;
  var version = firmwareBlobs === null || firmwareBlobs === void 0 ? void 0 : firmwareBlobs[0].version;

  var handleFiles = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(files) {
      var file;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              file = files[0];

              if (!file) {
                _context.next = 9;
                break;
              }

              _context.prev = 2;
              setDownloading(true);
              _context.next = 6;
              return setFirmwareFile(undefined, file);

            case 6:
              _context.prev = 6;
              setDownloading(false);
              return _context.finish(6);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2,, 6, 9]]);
    }));

    return function handleFiles(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClear = /*#__PURE__*/function () {
    var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              try {
                setError("");
                setDownloading(true);
                setFirmwareFile(undefined, undefined);
              } finally {
                setDownloading(false);
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleClear() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(CardHeader["a" /* default */], {
    title: slug
  }), /*#__PURE__*/react_default.a.createElement(CardContent["a" /* default */], null, error && /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "error"
  }, error), version && /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "body2"
  }, "version ", /*#__PURE__*/react_default.a.createElement("code", null, version)), !!(firmwareBlobs !== null && firmwareBlobs !== void 0 && firmwareBlobs.length) && /*#__PURE__*/react_default.a.createElement(List["a" /* default */], {
    dense: true
  }, firmwareBlobs.map(function (blob) {
    return /*#__PURE__*/react_default.a.createElement(ListItem["a" /* default */], {
      key: blob.firmwareIdentifier
    }, /*#__PURE__*/react_default.a.createElement(ListItemText["a" /* default */], {
      primary: blob.name,
      secondary: "0x" + blob.firmwareIdentifier.toString(16)
    }));
  }))), /*#__PURE__*/react_default.a.createElement(CardActions["a" /* default */], null, !downloading && /*#__PURE__*/react_default.a.createElement(Suspense["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(ImportButton, {
    text: "Import UF2 file",
    onFilesUploaded: handleFiles
  })), !downloading && (firmwareBlobs === null || firmwareBlobs === void 0 ? void 0 : firmwareBlobs.length) && /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    disabled: disabled,
    variant: "text",
    "arial-label": "Clear",
    onClick: handleClear
  }, "Clear")));
}
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// CONCATENATED MODULE: ./src/components/firmware/FirmwareCardGrid.tsx



 // tslint:disable-next-line: no-submodule-imports





function FirmwareCardGrid() {
  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var gridBreakpoints = Object(useGridBreakpoints["a" /* default */])();
  var safeBoot = Object(useChange["a" /* default */])(bus, function (b) {
    return b.safeBoot;
  });
  var firmwareRepos = useFirmwareRepos(safeBoot);
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], Object.assign({}, gridBreakpoints, {
    item: true,
    key: "localfile"
  }), /*#__PURE__*/react_default.a.createElement(LocalFileFirmwareCard, null)), firmwareRepos.map(function (firmwareRepo) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], Object.assign({}, gridBreakpoints, {
      item: true,
      key: "firmwarerepo" + firmwareRepo
    }), /*#__PURE__*/react_default.a.createElement(FirmwareCard["a" /* default */], {
      slug: firmwareRepo
    }));
  }));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Alert/Alert.js + 4 modules
var Alert_Alert = __webpack_require__("ZiQX");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flashing.ts
var jdom_flashing = __webpack_require__("nYyo");

// EXTERNAL MODULE: ./src/components/ui/CircularProgressWithLabel.tsx
var CircularProgressWithLabel = __webpack_require__("2HUc");

// EXTERNAL MODULE: ./src/components/DeviceCard.tsx + 1 modules
var DeviceCard = __webpack_require__("yQBs");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/bus.ts + 6 modules
var jdom_bus = __webpack_require__("0x9p");

// EXTERNAL MODULE: ./src/components/AppContext.tsx + 1 modules
var AppContext = __webpack_require__("2K/c");

// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__("UJQR");

// EXTERNAL MODULE: ./src/components/hooks/useMounted.tsx
var useMounted = __webpack_require__("VRkU");

// CONCATENATED MODULE: ./src/components/UpdateDeviceList.tsx


















function UpdateDeviceCard(props) {
  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var device = props.device;

  var _useContext2 = Object(react["useContext"])(AppContext["c" /* default */]),
      setError = _useContext2.setError;

  var _useState = Object(react["useState"])(0),
      progress = _useState[0],
      setProgress = _useState[1];

  var blobs = Object(useFirmwareBlobs["a" /* default */])();
  var firmwareInfo = Object(useChange["a" /* default */])(device, function (d) {
    return d.firmwareInfo;
  });
  var blob = firmwareInfo && (blobs === null || blobs === void 0 ? void 0 : blobs.find(function (b) {
    return firmwareInfo.firmwareIdentifier == b.firmwareIdentifier;
  }));
  var update = blob && firmwareInfo && Object(jdom_flashing["f" /* updateApplicable */])(firmwareInfo, blob);
  var flashing = Object(useChange["a" /* default */])(device, function (d) {
    return d.flashing;
  });

  var handleFlashing = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var updateCandidates;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!device.flashing) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.prev = 2;
              setProgress(0);
              device.flashing = true; // don't refresh registers while flashing

              updateCandidates = [firmwareInfo];
              _context.next = 8;
              return Object(jdom_flashing["b" /* flashFirmwareBlob */])(bus, blob, updateCandidates, function (prog) {
                return setProgress(prog);
              });

            case 8:
              // trigger info
              device.firmwareInfo = undefined;
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              setError(_context.t0);

            case 14:
              _context.prev = 14;
              device.flashing = false;
              return _context.finish(14);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11, 14, 17]]);
    }));

    return function handleFlashing() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(DeviceCard["a" /* default */], {
    device: device,
    showFirmware: true,
    content: update && /*#__PURE__*/react_default.a.createElement("span", null, "Update to ", blob.version) // tslint:disable-next-line: react-this-binding-issue
    ,
    action: flashing ? /*#__PURE__*/react_default.a.createElement(CircularProgressWithLabel["a" /* default */], {
      value: progress
    }) : update ? /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
      "aria-label": "deploy new firmware to device",
      disabled: flashing,
      variant: "contained",
      color: "primary",
      onClick: handleFlashing
    }, "Flash") : firmwareInfo ? /*#__PURE__*/react_default.a.createElement(Alert_Alert["a" /* default */], {
      severity: "success"
    }, "Up to date!") : undefined
  });
}

function UpdateDeviceList() {
  var _useContext3 = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext3.bus,
      connectionState = _useContext3.connectionState;

  var _useState2 = Object(react["useState"])(false),
      scanning = _useState2[0],
      setScanning = _useState2[1];

  var gridBreakpoints = Object(useGridBreakpoints["a" /* default */])();
  var safeBoot = Object(useChange["a" /* default */])(bus, function (b) {
    return b.safeBoot;
  });
  var devices = Object(useDevices["a" /* default */])({
    announced: true,
    ignoreSelf: true,
    ignoreSimulators: true,
    firmwareIdentifier: true
  }, [safeBoot]).filter(function (dev) {
    return safeBoot || !dev.hasService(constants["td" /* SRV_BOOTLOADER */]);
  });
  var isFlashing = devices.some(function (dev) {
    return dev.flashing;
  });
  var blobs = Object(useFirmwareBlobs["a" /* default */])();
  var mounted = Object(useMounted["a" /* default */])();

  function scan() {
    return _scan.apply(this, arguments);
  } // load indexed db file once


  function _scan() {
    _scan = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!(blobs !== null && blobs !== void 0 && blobs.length) || isFlashing || scanning || connectionState != jdom_bus["a" /* BusState */].Connected)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              console.log("start scanning bus");
              _context2.prev = 3;
              setScanning(true);
              _context2.next = 7;
              return Object(jdom_flashing["d" /* scanFirmwares */])(bus);

            case 7:
              _context2.prev = 7;
              if (mounted()) setScanning(false);
              return _context2.finish(7);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3,, 7, 10]]);
    }));
    return _scan.apply(this, arguments);
  }

  Object(react["useEffect"])(function () {
    scan();
  }, [isFlashing, connectionState, blobs]);
  Object(react["useEffect"])(function () {
    return bus.subscribe([constants["T" /* DEVICE_CHANGE */], constants["nb" /* FIRMWARE_BLOBS_CHANGE */]], function () {
      return scan();
    });
  }, []);
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, devices.map(function (device) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], Object.assign({
      key: device.id,
      item: true
    }, gridBreakpoints), /*#__PURE__*/react_default.a.createElement(UpdateDeviceCard, {
      device: device
    }));
  }));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js + 1 modules
var Switch = __webpack_require__("UhlP");

// EXTERNAL MODULE: ./src/components/DbContext.tsx
var DbContext = __webpack_require__("lPdd");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/DeleteForever.js
var DeleteForever = __webpack_require__("xMF9");
var DeleteForever_default = /*#__PURE__*/__webpack_require__.n(DeleteForever);

// EXTERNAL MODULE: ./node_modules/notistack/dist/notistack.esm.js
var notistack_esm = __webpack_require__("NKQG");

// CONCATENATED MODULE: ./src/components/firmware/SafeBootAlert.tsx



 // tslint:disable-next-line: no-submodule-imports



 // tslint:disable-next-line: match-default-export-name tslint:disable-next-line: no-submodule-imports



function SafeBootAlert() {
  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var _useContext2 = Object(react["useContext"])(DbContext["c" /* default */]),
      db = _useContext2.db;

  var _useSnackbar = Object(notistack_esm["b" /* useSnackbar */])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var _useState = Object(react["useState"])(bus.safeBoot),
      safeBoot = _useState[0],
      setSafeBoot = _useState[1];

  var firmwares = db === null || db === void 0 ? void 0 : db.firmwares;

  var handleRecovery = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var v;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              v = !safeBoot;
              setSafeBoot(v);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleRecovery() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClear = /*#__PURE__*/function () {
    var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return firmwares.clear();

            case 2:
              enqueueSnackbar("firmwares cleared", {
                variant: "info"
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleClear() {
      return _ref2.apply(this, arguments);
    };
  }(); // turn on and off safeboot mode


  Object(react["useEffect"])(function () {
    bus.safeBoot = safeBoot;
    return function () {
      bus.safeBoot = false;
    };
  }, [safeBoot]);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "info"
  }, /*#__PURE__*/react_default.a.createElement(Switch["a" /* default */], {
    value: safeBoot,
    onChange: handleRecovery
  }), /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    component: "span",
    variant: "body1"
  }, "recovery mode"), /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    mr: 1
  }, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    component: "span",
    variant: "caption"
  }, "If your module is malfunctioning from the start, you can flash it in bootloader mode. Turn on recovery mode and unplug/replug any malfunctioning device to switch it to bootloader mode (glowing status LED). Once your module is flashed, turn off recovery mode and unplug/replug your module again."))), safeBoot && /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "warning"
  }, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    size: "small",
    variant: "outlined",
    disabled: !firmwares,
    onClick: handleClear,
    startIcon: /*#__PURE__*/react_default.a.createElement(DeleteForever_default.a, null)
  }, "clear cache"), /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    mr: 1
  }, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    component: "span",
    variant: "caption"
  }, "Delete all firmware cached in the browser. The firmware will have to be deleted again from this interface."))));
}
// CONCATENATED MODULE: ./src/components/tools/Flash.tsx




 // tslint:disable-next-line: no-submodule-imports



function Flash() {
  var _useState = Object(react["useState"])(0),
      tab = _useState[0],
      setTab = _useState[1];

  var handleTabChange = function handleTabChange(event, newValue) {
    setTab(newValue);
  };

  return /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    mb: 2
  }, /*#__PURE__*/react_default.a.createElement(ConnectAlert["a" /* default */], null), /*#__PURE__*/react_default.a.createElement(Tabs["a" /* default */], {
    value: tab,
    onChange: handleTabChange,
    "aria-label": "View specification formats"
  }, /*#__PURE__*/react_default.a.createElement(Tab["a" /* default */], Object.assign({
    label: "Updates"
  }, Object(TabPanel["a" /* a11yProps */])(1))), /*#__PURE__*/react_default.a.createElement(Tab["a" /* default */], Object.assign({
    label: "Firmwares"
  }, Object(TabPanel["a" /* a11yProps */])(0)))), /*#__PURE__*/react_default.a.createElement(TabPanel["b" /* default */], {
    value: tab,
    index: 0
  }, /*#__PURE__*/react_default.a.createElement(UpdateDeviceList, null)), /*#__PURE__*/react_default.a.createElement(TabPanel["b" /* default */], {
    value: tab,
    index: 1
  }, /*#__PURE__*/react_default.a.createElement(FirmwareCardGrid, null)), /*#__PURE__*/react_default.a.createElement(SafeBootAlert, null));
}
// CONCATENATED MODULE: ./src/pages/tools/updater.tsx


function Page() {
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h1", null, "Firmware Updater"), /*#__PURE__*/react_default.a.createElement("p", null, "This page allows you to update your Jacdac module with new firmware. Find the latest UF2 firmware file from your manufacturer and import it with the button below."), /*#__PURE__*/react_default.a.createElement(Flash, null));
}

/***/ }),

/***/ "o37L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmwareCard; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HaE+");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("30+C");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oa/T");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("hlFM");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("6C/C");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("LvTE");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ofer");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Kpcq");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("eD//");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("tVbE");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("IsqK");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("jjAL");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("o4QW");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("Z3vd");
/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("LGN/");
/* harmony import */ var _useFirmwareBlobs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("iOk9");
/* harmony import */ var _GithubRepositoryCardHeader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("7Q8/");
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("FQT7");
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("4+mf");
/* harmony import */ var _ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("wZLv");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("1iKp");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("aVfY");












function FirmwareCard(props) {
  var slug = props.slug;

  var _useLatestReleases = Object(_github__WEBPACK_IMPORTED_MODULE_16__[/* useLatestReleases */ "g"])(slug),
      releases = _useLatestReleases.response;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      downloading = _useState[0],
      setDownloading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
      release = _useState3[0],
      setRelease = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      firmwaresExpanded = _useState4[0],
      setFirmwaresExpanded = _useState4[1];

  var _useFirmwareBlob = Object(_useFirmwareBlobs__WEBPACK_IMPORTED_MODULE_17__[/* useFirmwareBlob */ "b"])(slug),
      setFirmwareFile = _useFirmwareBlob.setFirmwareFile,
      firmwareBlobs = _useFirmwareBlob.firmwareBlobs;

  var tag = (release === null || release === void 0 ? void 0 : release.tag_name) || "";
  var disabled = downloading;
  var version = firmwareBlobs === null || firmwareBlobs === void 0 ? void 0 : firmwareBlobs[0].version;
  var updateAvailable = !!tag && !!version && tag.slice(1) !== version.substr(0, tag.length - 1);
  var downloadColor = updateAvailable ? "primary" : "inherit";
  var downloadVariant = updateAvailable ? "contained" : "text"; // initialize with latest release

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (releases !== null && releases !== void 0 && releases.length && !release) setRelease(releases[0]);
  }, [releases]);

  var handleReleaseChange = function handleReleaseChange(ev) {
    var v = ev.target.value;
    var rel = releases === null || releases === void 0 ? void 0 : releases.find(function (r) {
      return r.tag_name === v;
    });
    setRelease(rel);
  };

  var handleGitHubReleaseDownload = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var firmware;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setError("");
              setDownloading(true);
              _context.next = 5;
              return Object(_github__WEBPACK_IMPORTED_MODULE_16__[/* fetchReleaseBinary */ "c"])(slug, tag);

            case 5:
              firmware = _context.sent;
              if (firmware) setFirmwareFile(tag, firmware);

            case 7:
              _context.prev = 7;
              setDownloading(false);
              return _context.finish(7);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0,, 7, 10]]);
    }));

    return function handleGitHubReleaseDownload() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClear = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              try {
                setError("");
                setDownloading(true);
                setFirmwareFile(tag, undefined);
              } finally {
                setDownloading(false);
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleClear() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_GithubRepositoryCardHeader__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
    slug: slug
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], {
    severity: "error"
  }, error), !!(firmwareBlobs !== null && firmwareBlobs !== void 0 && firmwareBlobs.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    mb: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    expanded: firmwaresExpanded,
    onChange: function onChange() {
      return setFirmwaresExpanded(!firmwaresExpanded);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_22___default.a, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    variant: "body2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("code", null, "v", version), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, " (", firmwareBlobs.length, " firmwares)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    dense: true
  }, firmwareBlobs.map(function (blob) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
      key: blob.firmwareIdentifier
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
      primary: blob.name,
      secondary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_20__["Link"], {
        to: "/firmwares/0x" + blob.firmwareIdentifier.toString(16)
      }, "0x" + blob.firmwareIdentifier.toString(16))
    }));
  }))))), (releases === null || releases === void 0 ? void 0 : releases.length) === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], {
    severity: "warning"
  }, "No releases found."), !!(releases !== null && releases !== void 0 && releases.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], {
    fullWidth: true,
    helperText: "choose a version",
    value: tag,
    onChange: handleReleaseChange
  }, releases === null || releases === void 0 ? void 0 : releases.map(function (rel) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
      key: rel.tag_name,
      value: rel.tag_name
    }, rel.tag_name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], null, !downloading && release && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
    disabled: downloading,
    color: downloadColor,
    variant: downloadVariant,
    "aria-label": "Download last release from " + slug,
    onClick: handleGitHubReleaseDownload
  }, "Download"), !downloading && (firmwareBlobs === null || firmwareBlobs === void 0 ? void 0 : firmwareBlobs.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
    disabled: disabled,
    variant: "text",
    "arial-label": "Clear",
    onClick: handleClear
  }, "Clear"), downloading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"], null)));
}

/***/ }),

/***/ "xMF9":
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
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
}), 'DeleteForever');

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-updater-tsx-f0a1fd7c96828ee58b68.js.map