(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "uvdN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Page; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__("yNWl");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/bus.ts + 6 modules
var jdom_bus = __webpack_require__("0x9p");

// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__("9pTp");

// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__("FQT7");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__("r9w1");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js + 1 modules
var Switch = __webpack_require__("UhlP");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__("30+C");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__("oa/T");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__("o4QW");

// EXTERNAL MODULE: ./src/components/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__("5oJA");

// EXTERNAL MODULE: ./src/components/useServiceClient.ts
var useServiceClient = __webpack_require__("wsLH");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__("dI71");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__("BsyY");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__("W9jF");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pipes.ts
var pipes = __webpack_require__("o8zs");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/serviceclient.ts
var serviceclient = __webpack_require__("eoX3");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// CONCATENATED MODULE: ./jacdac-ts/src/jdom/settingsclient.ts










var settingsclient_SettingsClient = /*#__PURE__*/function (_JDServiceClient) {
  Object(inheritsLoose["a" /* default */])(SettingsClient, _JDServiceClient);

  function SettingsClient(service) {
    var _this;

    _this = _JDServiceClient.call(this, service) || this;
    service.registersUseAcks = true;
    return _this;
  }

  var _proto = SettingsClient.prototype;

  _proto.clear = /*#__PURE__*/function () {
    var _clear = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.service.sendCmdAsync(constants["De" /* SettingsCmd */].Clear);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function clear() {
      return _clear.apply(this, arguments);
    }

    return clear;
  }();

  _proto.listKeys = /*#__PURE__*/function () {
    var _listKeys = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      var inp, _yield$inp$readAll, output, keys;

      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              inp = new pipes["a" /* InPipeReader */](this.bus);
              _context2.next = 3;
              return this.service.sendPacketAsync(inp.openCommand(constants["De" /* SettingsCmd */].ListKeys), true);

            case 3:
              _context2.next = 5;
              return inp.readAll();

            case 5:
              _yield$inp$readAll = _context2.sent;
              output = _yield$inp$readAll.output;
              keys = output.map(function (pkt) {
                return pkt.stringData;
              });
              return _context2.abrupt("return", keys.filter(function (k) {
                return !!k;
              }));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function listKeys() {
      return _listKeys.apply(this, arguments);
    }

    return listKeys;
  }();

  _proto.list = /*#__PURE__*/function () {
    var _list = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
      var inp, _yield$inp$readAll2, output;

      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              inp = new pipes["a" /* InPipeReader */](this.bus);
              _context3.next = 3;
              return this.service.sendPacketAsync(inp.openCommand(constants["De" /* SettingsCmd */].List), true);

            case 3:
              _context3.next = 5;
              return inp.readAll();

            case 5:
              _yield$inp$readAll2 = _context3.sent;
              output = _yield$inp$readAll2.output;
              return _context3.abrupt("return", output.map(function (pkt) {
                var _pkt$jdunpack = pkt.jdunpack("z b"),
                    key = _pkt$jdunpack[0],
                    valueb = _pkt$jdunpack[1];

                var value = valueb.length > 0 ? Object(utils["l" /* bufferToString */])(valueb) : undefined;
                return key && {
                  key: key,
                  value: value
                };
              }).filter(function (kv) {
                return !!kv;
              }));

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function list() {
      return _list.apply(this, arguments);
    }

    return list;
  }();

  _proto.setValue = /*#__PURE__*/function () {
    var _setValue = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee4(key, value) {
      var pkt;
      return regenerator_default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              key = key.trim();

              if (!(value === undefined)) {
                _context4.next = 6;
                break;
              }

              _context4.next = 4;
              return this.deleteValue(key);

            case 4:
              _context4.next = 10;
              break;

            case 6:
              pkt = packet["a" /* default */].from(constants["De" /* SettingsCmd */].Set, Object(pack["a" /* jdpack */])("z b", [key, Object(utils["Q" /* stringToBuffer */])(value)]));
              _context4.next = 9;
              return this.service.sendPacketAsync(pkt);

            case 9:
              this.emit(constants["s" /* CHANGE */]);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function setValue(_x, _x2) {
      return _setValue.apply(this, arguments);
    }

    return setValue;
  }();

  _proto.getValue = /*#__PURE__*/function () {
    var _getValue = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee5(key) {
      var pkt, resp, _jdunpack, rkey, value;

      return regenerator_default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (key) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return", undefined);

            case 2:
              key = key.trim();
              pkt = packet["a" /* default */].from(constants["De" /* SettingsCmd */].Get, Object(pack["a" /* jdpack */])("s", [key]));
              _context5.next = 6;
              return this.service.sendCmdAwaitResponseAsync(pkt);

            case 6:
              resp = _context5.sent;
              _jdunpack = Object(pack["c" /* jdunpack */])(resp.data, "z b"), rkey = _jdunpack[0], value = _jdunpack[1];

              if (!(key !== rkey)) {
                _context5.next = 11;
                break;
              }

              console.error("device returned different key, got \"" + rkey + "\", expected \"" + key + "\"");
              return _context5.abrupt("return", undefined);

            case 11:
              return _context5.abrupt("return", Object(utils["l" /* bufferToString */])(value));

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function getValue(_x3) {
      return _getValue.apply(this, arguments);
    }

    return getValue;
  }();

  _proto.deleteValue = /*#__PURE__*/function () {
    var _deleteValue = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee6(key) {
      var pkt;
      return regenerator_default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (key) {
                _context6.next = 2;
                break;
              }

              return _context6.abrupt("return");

            case 2:
              key = key.trim();
              pkt = packet["a" /* default */].from(constants["De" /* SettingsCmd */].Delete, Object(pack["a" /* jdpack */])("s", [key]));
              _context6.next = 6;
              return this.service.sendPacketAsync(pkt);

            case 6:
              this.emit(constants["s" /* CHANGE */]);

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function deleteValue(_x4) {
      return _deleteValue.apply(this, arguments);
    }

    return deleteValue;
  }();

  return SettingsClient;
}(serviceclient["a" /* JDServiceClient */]);


// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Delete.js
var Delete = __webpack_require__("FrwU");
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__("1waj");
var Add_default = /*#__PURE__*/__webpack_require__.n(Add);

// EXTERNAL MODULE: ./src/components/CmdButton.tsx + 58 modules
var CmdButton = __webpack_require__("mv/Z");

// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__("W1g9");

// CONCATENATED MODULE: ./src/components/SettingsCard.tsx







 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: match-default-export-name no-submodule-imports





function SettingRow(props) {
  var client = props.client,
      name = props.name,
      value = props.value,
      mutable = props.mutable;
  var isSecret = name[0] == "$";
  var displayName = isSecret ? name.slice(1) : name;

  var handleComponentDelete = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return client.deleteValue(name);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleComponentDelete() {
      return _ref.apply(this, arguments);
    };
  }();

  var nameError = "";
  var valueError = "";
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
    fullWidth: true,
    error: !!nameError,
    variant: "outlined",
    label: "key",
    helperText: nameError,
    value: displayName,
    disabled: true
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
    fullWidth: true,
    error: !!valueError,
    variant: "outlined",
    helperText: valueError,
    value: isSecret ? "..." : value,
    disabled: true
  })), mutable && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(CmdButton["a" /* default */], {
    trackName: "settings.delete",
    title: "Delete settings",
    onClick: handleComponentDelete,
    icon: /*#__PURE__*/react_default.a.createElement(Delete_default.a, null)
  }))));
}

function AddSettingRow(props) {
  var client = props.client;

  var _useState = Object(react["useState"])(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react["useState"])(""),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react["useState"])(true),
      secret = _useState3[0],
      setSecret = _useState3[1];

  var secretLabelId = Object(react_use_id_hook_esm["b" /* useId */])();

  var handleNameChange = function handleNameChange(ev) {
    setName(ev.target.value.trim());
  };

  var handleValueChange = function handleValueChange(ev) {
    setValue(ev.target.value);
  };

  var handleChecked = function handleChecked(ev, checked) {
    setSecret(checked);
  };

  var handleAdd = /*#__PURE__*/function () {
    var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return client.setValue("" + (secret ? "$" : "") + name, value);

            case 2:
              setName("");
              setValue("");
              setSecret(true);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleAdd() {
      return _ref2.apply(this, arguments);
    };
  }();

  var keyError = "";
  var valueError = "";
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
    fullWidth: true,
    error: !!keyError,
    variant: "outlined",
    label: "Add key",
    helperText: keyError,
    value: name,
    onChange: handleNameChange
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
    fullWidth: true,
    error: !!valueError,
    variant: "outlined",
    label: "value",
    helperText: valueError,
    value: value,
    onChange: handleValueChange
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Switch["a" /* default */], {
    checked: secret,
    onChange: handleChecked,
    "aria-labelledby": secretLabelId
  }), /*#__PURE__*/react_default.a.createElement("label", {
    id: secretLabelId
  }, "Secret")), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(CmdButton["a" /* default */], {
    trackName: "settings.add",
    disabled: !name || !!keyError || !!valueError,
    title: "Add setting",
    onClick: handleAdd,
    icon: /*#__PURE__*/react_default.a.createElement(Add_default.a, null)
  }))));
}

function SettingsCard(props) {
  var service = props.service,
      mutable = props.mutable;
  var client = Object(useServiceClient["a" /* default */])(service, function (srv) {
    return new settingsclient_SettingsClient(srv);
  });
  var values = Object(useChange["b" /* useChangeAsync */])(client, function (c) {
    return c === null || c === void 0 ? void 0 : c.list();
  });
  if (!client) return null; // wait till loaded

  var handleClear = /*#__PURE__*/function () {
    var _ref3 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return client === null || client === void 0 ? void 0 : client.clear();

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleClear() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(DeviceCardHeader["a" /* default */], {
    device: service.device,
    showMedia: true
  }), /*#__PURE__*/react_default.a.createElement(CardContent["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, values === null || values === void 0 ? void 0 : values.map(function (_ref4) {
    var key = _ref4.key,
        value = _ref4.value;
    return /*#__PURE__*/react_default.a.createElement(SettingRow, {
      key: key,
      name: key,
      value: value,
      client: client,
      mutable: mutable
    });
  }), mutable && /*#__PURE__*/react_default.a.createElement(AddSettingRow, {
    client: client,
    key: "add"
  }))), mutable && /*#__PURE__*/react_default.a.createElement(CardActions["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(CmdButton["a" /* default */], {
    trackName: "settings.clearall",
    title: "Clear all settings",
    icon: /*#__PURE__*/react_default.a.createElement(Delete_default.a, null),
    onClick: handleClear
  }, "Clear")));
}
// CONCATENATED MODULE: ./src/components/tools/SettingsManager.tsx









function SettingsManager() {
  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus,
      connectionState = _useContext.connectionState;

  var services = Object(useChange["a" /* default */])(bus, function (b) {
    return b.services({
      serviceClass: constants["fe" /* SRV_SETTINGS */]
    });
  });
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(ConnectAlert["a" /* default */], {
    serviceClass: constants["fe" /* SRV_SETTINGS */]
  }), !services.length && connectionState == jdom_bus["a" /* BusState */].Connected && /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "info"
  }, "We could not find any device with the settings storage service on the bus!"), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, services.map(function (service) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
      key: service.id,
      item: true,
      xs: 12
    }, /*#__PURE__*/react_default.a.createElement(SettingsCard, {
      service: service,
      mutable: true
    }));
  })));
}
// CONCATENATED MODULE: ./src/pages/tools/settings-manager.tsx


function Page() {
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h1", null, "Settings Manager"), /*#__PURE__*/react_default.a.createElement("p", null, "Configure settings in a ", /*#__PURE__*/react_default.a.createElement(Link, {
    to: "/services/settings/"
  }, "setting store"), "."), /*#__PURE__*/react_default.a.createElement(SettingsManager, null));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-settings-manager-tsx-9aac79d9962fd672b932.js.map