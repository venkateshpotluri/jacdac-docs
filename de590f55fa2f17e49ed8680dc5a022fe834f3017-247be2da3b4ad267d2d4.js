(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "0cSH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PacketSpecification; });

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var jdom_spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__("FQT7");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__("9jPY");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./src/components/DeviceCard.tsx + 1 modules
var DeviceCard = __webpack_require__("yQBs");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__("30+C");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__("oa/T");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./src/components/RegisterInput.tsx + 2 modules
var RegisterInput = __webpack_require__("271P");

// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// CONCATENATED MODULE: ./src/components/ui/AutoGrid.tsx


function AutoGrid(props) {
  var children = props.children,
      spacing = props.spacing;
  if (children && Array.isArray(children)) return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: spacing
  }, children.map(function (child, i) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: 12,
      key: child.key || i
    }, child);
  }));else return children;
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// CONCATENATED MODULE: ./src/components/ServiceRegisters.tsx






function ServiceRegisters(props) {
  var service = props.service,
      registerIdentifiers = props.registerIdentifiers,
      filter = props.filter,
      showRegisterName = props.showRegisterName,
      hideMissingValues = props.hideMissingValues,
      showTrends = props.showTrends;
  var specification = Object(useChange["a" /* default */])(service, function (spec) {
    return spec.specification;
  });
  var registers = Object(react["useMemo"])(function () {
    var _packets$filter, _ids$map;

    var packets = specification === null || specification === void 0 ? void 0 : specification.packets;
    var ids = registerIdentifiers || (packets === null || packets === void 0 ? void 0 : (_packets$filter = packets.filter(function (pkt) {
      return Object(jdom_spec["s" /* isRegister */])(pkt);
    })) === null || _packets$filter === void 0 ? void 0 : _packets$filter.map(function (pkt) {
      return pkt.identifier;
    }));
    var r = (ids === null || ids === void 0 ? void 0 : (_ids$map = ids.map(function (id) {
      return service.register(id);
    })) === null || _ids$map === void 0 ? void 0 : _ids$map.filter(function (reg) {
      return !!reg;
    })) || [];
    if (filter) r = r.filter(filter);
    return r;
  }, [specification, registerIdentifiers, filter]);
  return /*#__PURE__*/react_default.a.createElement(AutoGrid, {
    spacing: 1
  }, registers.map(function (register) {
    return /*#__PURE__*/react_default.a.createElement(RegisterInput["a" /* default */], {
      key: register.id,
      register: register,
      showRegisterName: showRegisterName,
      hideMissingValues: hideMissingValues,
      showTrend: showTrends && register.code === constants["Ze" /* SystemReg */].Reading
    });
  }));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Badge/Badge.js
var Badge = __webpack_require__("IFCi");

// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__("NHHF");

// EXTERNAL MODULE: ./src/jacdac/useEventCount.ts
var useEventCount = __webpack_require__("U/xp");

// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__("SCH5");

// CONCATENATED MODULE: ./src/components/EventInput.tsx





function EventInput(props) {
  var event = props.event,
      showName = props.showName,
      showDeviceName = props.showDeviceName;
  var count = Object(useEventCount["a" /* default */])(event);
  var spec = event.specification;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, showDeviceName && /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(DeviceName["a" /* default */], {
    device: event.service.device
  }), "/"), showName && spec && /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    gutterBottom: true
  }, spec.name), /*#__PURE__*/react_default.a.createElement(Badge["a" /* default */], {
    badgeContent: count,
    color: "primary"
  }, /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
    kind: "event"
  })));
}
// CONCATENATED MODULE: ./src/components/ServiceEvents.tsx




function ServiceEvents(props) {
  var service = props.service,
      eventIdentifiers = props.eventIdentifiers,
      showEventName = props.showEventName;
  var spec = service.specification;
  var packets = spec.packets;
  var events = packets.filter(jdom_spec["j" /* isEvent */]);
  if (eventIdentifiers !== undefined) events = events.filter(function (event) {
    return eventIdentifiers.indexOf(event.identifier) > -1;
  });
  return /*#__PURE__*/react_default.a.createElement(AutoGrid, {
    spacing: 1
  }, events.map(function (event) {
    return /*#__PURE__*/react_default.a.createElement(EventInput, {
      key: "event" + event.identifier,
      event: service.event(event.identifier),
      showName: showEventName
    });
  }));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__("eD//");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__("tVbE");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__("o4QW");

// EXTERNAL MODULE: ./src/components/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__("5oJA");

// EXTERNAL MODULE: ./src/components/alert/DeviceLostAlert.tsx
var DeviceLostAlert = __webpack_require__("LZmX");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pipes.ts
var pipes = __webpack_require__("o8zs");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/buffer.ts
var buffer = __webpack_require__("INgz");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__("W9jF");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// CONCATENATED MODULE: ./jacdac-ts/src/jdom/command.ts





function packArguments(info, args) {
  var repeatIdx = -1;
  var numReps = 0;
  var argIdx = 0;
  var dst = 0;
  var buf = new Uint8Array(256);

  for (var i = 0; i < info.fields.length; ++argIdx, ++i) {
    if (argIdx >= args.length && numReps > 0) break;
    var arg0 = argIdx < args.length ? args[argIdx] : 0;
    var fld = info.fields[i];
    if (repeatIdx == -1 && fld.startRepeats) repeatIdx = i;
    var arg1 = fld.type == "string0" && typeof arg0 == "string" ? arg0 + "\0" : arg0;
    var arg = typeof arg1 == "boolean" ? arg1 ? 1 : 0 : typeof arg1 == "string" ? Object(utils["R" /* stringToUint8Array */])(Object(utils["W" /* toUTF8 */])(arg1)) : arg1;

    if (typeof arg == "number") {
      var intVal = Object(jdom_spec["A" /* scaleFloatToInt */])(arg, fld);
      if (fld.storage == 0) throw new Error("expecting " + fld.type + " got number");
      var fmt = Object(jdom_spec["y" /* numberFormatFromStorageType */])(fld.storage);
      Object(buffer["e" /* setNumber */])(buf, fmt, dst, Object(jdom_spec["a" /* clampToStorage */])(intVal, fld.storage));
      dst += Object(buffer["f" /* sizeOfNumberFormat */])(fmt);
    } else {
      var size = Math.abs(fld.storage);

      if (typeof arg1 == "string") {
        if (size == 0) size = arg.length;
        var argCut = arg.slice(0, size);
        buf.set(argCut, dst);
        dst += size;
      } else if (size == 0 || size == arg.length) {
        buf.set(arg, dst);
        dst += arg.length;
      } else {
        throw new Error("expecting " + Math.abs(fld.storage) + " bytes; got " + arg.length);
      }
    }

    if (dst >= constants["Eb" /* JD_SERIAL_MAX_PAYLOAD_SIZE */]) throw new Error("jacdac packet length too large, " + dst + " > " + constants["Eb" /* JD_SERIAL_MAX_PAYLOAD_SIZE */] + " bytes");

    if (repeatIdx != -1 && i + 1 >= info.fields.length) {
      i = repeatIdx - 1;
      numReps++;
    }
  }

  var cmd = Object(jdom_spec["s" /* isRegister */])(info) ? info.identifier | constants["E" /* CMD_SET_REG */] : info.identifier;
  var pkt = packet["a" /* default */].from(cmd, buf.slice(0, dst));
  if (info.kind != "report") pkt.isCommand = true;
  return pkt;
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__("DMAQ");

// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__("yNWl");

// EXTERNAL MODULE: ./src/components/CmdButton.tsx + 58 modules
var CmdButton = __webpack_require__("mv/Z");

// CONCATENATED MODULE: ./src/components/CommandInput.tsx












function CommandInput(props) {
  var service = props.service,
      command = props.command,
      showDeviceName = props.showDeviceName,
      args = props.args,
      setReports = props.setReports;

  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var specification = service.specification;
  var requiredArgLength = command.fields.length - (Object(jdom_spec["f" /* hasPipeReport */])(command) ? 1 : 0);
  var missingArguments = ((args === null || args === void 0 ? void 0 : args.length) || 0) !== requiredArgLength;
  var disabled = missingArguments;
  var reportSpec = command.hasReport && specification.packets.find(function (p) {
    return Object(jdom_spec["t" /* isReportOf */])(command, p);
  });

  var handleClick = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var pkt, reportPacket, decoded, inp, cmd, _yield$inp$readAll, output, _reports, _inp;

      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pkt = !(args !== null && args !== void 0 && args.length) ? packet["a" /* default */].onlyHeader(command.identifier) : packArguments(command, args);

              if (!(setReports && reportSpec)) {
                _context.next = 9;
                break;
              }

              _context.next = 4;
              return service.sendCmdAwaitResponseAsync(pkt);

            case 4:
              reportPacket = _context.sent;
              decoded = reportPacket === null || reportPacket === void 0 ? void 0 : reportPacket.decoded;
              setReports([decoded]);
              _context.next = 29;
              break;

            case 9:
              if (!(setReports && Object(jdom_spec["f" /* hasPipeReport */])(command))) {
                _context.next = 27;
                break;
              }

              _context.prev = 10;
              inp = new pipes["a" /* InPipeReader */](bus);
              cmd = inp.openCommand(command.identifier);
              _context.next = 15;
              return service.sendPacketAsync(cmd, true);

            case 15:
              console.log(Object(pretty["h" /* printPacket */])(cmd)); // keep this call, it sets up pretty to understand packages

              _context.next = 18;
              return inp.readAll();

            case 18:
              _yield$inp$readAll = _context.sent;
              output = _yield$inp$readAll.output;
              _reports = output.filter(function (ot) {
                var _ot$data;

                return !!((_ot$data = ot.data) !== null && _ot$data !== void 0 && _ot$data.length);
              }).map(function (ot) {
                return ot === null || ot === void 0 ? void 0 : ot.decoded;
              });
              setReports(_reports);

            case 22:
              _context.prev = 22;
              (_inp = inp) === null || _inp === void 0 ? void 0 : _inp.unmount();
              return _context.finish(22);

            case 25:
              _context.next = 29;
              break;

            case 27:
              _context.next = 29;
              return service.sendPacketAsync(pkt, true);

            case 29:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[10,, 22, 25]]);
    }));

    return function handleClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(CmdButton["a" /* default */], {
    trackName: "command.input",
    trackProperties: {
      service: Object(pretty["j" /* serviceName */])(service.serviceClass),
      serviceClass: service.serviceClass
    },
    variant: "contained",
    disabled: disabled,
    onClick: handleClick
  }, showDeviceName && /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(DeviceName["a" /* default */], {
    device: service.device
  }), "/"), command.name.replace(/_/g, " "));
}
// EXTERNAL MODULE: ./src/components/fields/MembersInput.tsx + 6 modules
var MembersInput = __webpack_require__("HbaY");

// CONCATENATED MODULE: ./src/components/DecodedPacketItem.tsx


function DecodedPacketItem(props) {
  var pkt = props.pkt;
  var decoded = pkt.decoded,
      service = pkt.service;
  var specifications = Object(react["useMemo"])(function () {
    return decoded.map(function (d) {
      return d.info;
    });
  }, [decoded]);
  var values = Object(react["useMemo"])(function () {
    return decoded.map(function (d) {
      return d.value;
    });
  }, [decoded]);
  return /*#__PURE__*/react_default.a.createElement(MembersInput["a" /* default */], {
    serviceSpecification: service,
    specifications: specifications,
    values: values
  });
}
// EXTERNAL MODULE: ./src/components/ServiceSpecificationStatusAlert.tsx
var ServiceSpecificationStatusAlert = __webpack_require__("Y6fa");

// CONCATENATED MODULE: ./src/components/ServiceCard.tsx

// tslint:disable-next-line: no-submodule-imports
 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports













var useStyles = Object(makeStyles["a" /* default */])({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});
function ServiceCard(props) {
  var service = props.service,
      linkToService = props.linkToService,
      registerIdentifiers = props.registerIdentifiers,
      showServiceName = props.showServiceName,
      showMemberName = props.showMemberName,
      eventIdentifiers = props.eventIdentifiers,
      commandIdentifier = props.commandIdentifier;
  var specification = service.specification;

  var _useState = Object(react["useState"])(undefined),
      reports = _useState[0],
      setReports = _useState[1]; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var _useState2 = Object(react["useState"])([]),
      commandArgs = _useState2[0],
      setCommandArgs = _useState2[1];

  var classes = useStyles();
  var hasCommandIdentifier = commandIdentifier !== undefined;
  var hasRegisterIdentifiers = !!(registerIdentifiers !== null && registerIdentifiers !== void 0 && registerIdentifiers.length);
  var hasEventIdentifiers = !!(eventIdentifiers !== null && eventIdentifiers !== void 0 && eventIdentifiers.length);
  var command = commandIdentifier !== undefined && (specification === null || specification === void 0 ? void 0 : specification.packets.find(function (pkt) {
    return Object(jdom_spec["h" /* isCommand */])(pkt) && pkt.identifier === commandIdentifier;
  }));
  return /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], {
    className: classes.root
  }, /*#__PURE__*/react_default.a.createElement(DeviceCardHeader["a" /* default */], {
    device: service.device,
    showAvatar: true
  }), /*#__PURE__*/react_default.a.createElement(CardContent["a" /* default */], null, showServiceName && /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true
  }, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: linkToService && service.specification ? "/services/" + service.specification.shortId + "/" : "/clients/web/jdom/service"
  }, service.name)), /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "body2",
    component: "div"
  }, hasRegisterIdentifiers && /*#__PURE__*/react_default.a.createElement(ServiceRegisters, {
    key: 'reg' + service.id,
    service: service,
    showRegisterName: showMemberName,
    registerIdentifiers: registerIdentifiers
  }), hasEventIdentifiers && /*#__PURE__*/react_default.a.createElement(ServiceEvents, {
    key: 'ev' + service.id,
    service: service,
    showEventName: showMemberName,
    eventIdentifiers: eventIdentifiers
  }), command && /*#__PURE__*/react_default.a.createElement(MembersInput["a" /* default */], {
    serviceSpecification: specification,
    serviceMemberSpecification: command,
    specifications: command.fields,
    values: commandArgs,
    setValues: setCommandArgs,
    showDataType: true
  }), !!(reports !== null && reports !== void 0 && reports.length) && /*#__PURE__*/react_default.a.createElement(List["a" /* default */], {
    key: "reports",
    dense: true
  }, reports === null || reports === void 0 ? void 0 : reports.map(function (report, ri) {
    return /*#__PURE__*/react_default.a.createElement(ListItem["a" /* default */], {
      key: "report" + ri
    }, /*#__PURE__*/react_default.a.createElement(DecodedPacketItem, {
      pkt: report
    }));
  }))), !hasCommandIdentifier && !hasRegisterIdentifiers && !hasEventIdentifiers && /*#__PURE__*/react_default.a.createElement(ServiceSpecificationStatusAlert["a" /* default */], {
    specification: specification
  }), /*#__PURE__*/react_default.a.createElement(DeviceLostAlert["a" /* DeviceLostAlert */], {
    device: service === null || service === void 0 ? void 0 : service.device
  })), /*#__PURE__*/react_default.a.createElement(CardActions["a" /* default */], null, command && /*#__PURE__*/react_default.a.createElement(CommandInput, {
    service: service,
    command: command,
    args: commandArgs,
    setReports: setReports
  })));
}
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__("TD2k");

// CONCATENATED MODULE: ./src/components/DeviceList.tsx







var DeviceList_useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    root: {
      marginBottom: theme.spacing(1)
    }
  });
});
function DeviceList(props) {
  var serviceClass = props.serviceClass,
      linkToService = props.linkToService,
      registerIdentifiers = props.registerIdentifiers,
      showServiceName = props.showServiceName,
      showMemberName = props.showMemberName,
      showFirmware = props.showFirmware,
      showTemperature = props.showTemperature,
      showServiceButtons = props.showServiceButtons,
      eventIdentifiers = props.eventIdentifiers,
      commandIdentifier = props.commandIdentifier;

  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var devices = Object(useChange["a" /* default */])(bus, function (n) {
    return n.devices({
      serviceClass: serviceClass
    });
  });
  var services = Object(useChange["a" /* default */])(bus, function (n) {
    return n.services({
      serviceClass: serviceClass
    });
  });
  var classes = DeviceList_useStyles();
  var hasServiceClass = serviceClass !== undefined;
  var gridBreakpoints = Object(useGridBreakpoints["a" /* default */])(devices === null || devices === void 0 ? void 0 : devices.length);
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2,
    className: classes.root
  }, !hasServiceClass && devices.map(function (device) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], Object.assign({
      key: device.id,
      item: true
    }, gridBreakpoints), /*#__PURE__*/react_default.a.createElement(DeviceCard["a" /* default */], {
      device: device,
      showDescription: true,
      showTemperature: showTemperature,
      showFirmware: showFirmware,
      showServices: showServiceButtons
    }));
  }), hasServiceClass && services.map(function (service) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], Object.assign({
      key: service.id,
      item: true
    }, gridBreakpoints), /*#__PURE__*/react_default.a.createElement(ServiceCard, {
      service: service,
      linkToService: linkToService,
      showServiceName: showServiceName,
      showMemberName: showMemberName,
      registerIdentifiers: registerIdentifiers,
      eventIdentifiers: eventIdentifiers,
      commandIdentifier: commandIdentifier
    }));
  }));
}
// EXTERNAL MODULE: ./src/components/IDChip.tsx
var IDChip = __webpack_require__("XsSY");

// EXTERNAL MODULE: ./src/components/KindChip.tsx
var KindChip = __webpack_require__("J89t");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Category.js
var Category = __webpack_require__("qBB9");
var Category_default = /*#__PURE__*/__webpack_require__.n(Category);

// EXTERNAL MODULE: ./src/components/ui/Tooltip.tsx
var Tooltip = __webpack_require__("XfUf");

// CONCATENATED MODULE: ./src/components/PacketMembersChip.tsx
 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports match-default-export-name



function PacketMembersChip(props) {
  var members = props.members,
      className = props.className,
      spec = props.spec;
  if (!(members !== null && members !== void 0 && members.length)) return null;
  var label = spec === null || spec === void 0 ? void 0 : spec.packFormat;
  var title = "pack format";
  return /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
    title: title
  }, /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
    style: {
      textDecoration: "none"
    },
    href: "/reference/pack-format/",
    component: "a",
    clickable: true,
    className: className,
    size: "small",
    icon: /*#__PURE__*/react_default.a.createElement(Category_default.a, null),
    label: label
  }));
}
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__("kmB/");

// CONCATENATED MODULE: ./src/components/PacketSpecification.tsx
 // tslint:disable-next-line: no-submodule-imports


 // tslint:disable-next-line: no-submodule-imports









var PacketSpecification_useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    root: {
      marginBottom: theme.spacing(1)
    },
    field: {
      "& > div": {
        verticalAlign: "middle"
      }
    },
    chip: {
      margin: theme.spacing(0.5)
    }
  });
});

function MemberType(props) {
  var member = props.member;
  var classes = PacketSpecification_useStyles();
  var helperText = Object(pretty["e" /* prettyMemberUnit */])(member, true);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("li", {
    className: classes.field
  }, member.name !== "_" && member.name + ": ", /*#__PURE__*/react_default.a.createElement("code", null, helperText)));
}

function MembersType(props) {
  var members = props.members,
      title = props.title;
  var repeatIndex = members.findIndex(function (m) {
    return !!m.startRepeats;
  });
  if (repeatIndex < 0) repeatIndex = members.length;
  var beforeRepeat = members.slice(0, repeatIndex);
  var afterRepeat = members.slice(repeatIndex);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, !!title && /*#__PURE__*/react_default.a.createElement("h4", null, title), !!beforeRepeat.length && /*#__PURE__*/react_default.a.createElement("ul", null, beforeRepeat.map(function (member, i) {
    return /*#__PURE__*/react_default.a.createElement(MemberType, {
      key: "member" + member.name,
      member: member
    });
  })), !!afterRepeat.length && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h5", null, "starts repeating"), /*#__PURE__*/react_default.a.createElement("ul", null, afterRepeat.map(function (member, i) {
    return /*#__PURE__*/react_default.a.createElement(MemberType, {
      key: "member" + member.name,
      member: member
    });
  }))));
}

function PacketSpecification(props) {
  var serviceClass = props.serviceClass,
      packetInfo = props.packetInfo,
      reportInfo = props.reportInfo,
      pipeReportInfo = props.pipeReportInfo,
      showDevices = props.showDevices;

  var _useState = Object(react["useState"])([]),
      args = _useState[0],
      setArgs = _useState[1];

  var classes = PacketSpecification_useStyles();
  if (!packetInfo) return /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "error"
  }, "Unknown member " + serviceClass.toString(16) + ":" + packetInfo.identifier);
  var fields = packetInfo.fields;
  var isCmd = Object(jdom_spec["h" /* isCommand */])(packetInfo);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    id: packetInfo.kind + ":" + packetInfo.identifier
  }, packetInfo.name, /*#__PURE__*/react_default.a.createElement(PacketMembersChip, {
    spec: packetInfo,
    className: classes.chip,
    members: packetInfo.fields
  }), packetInfo.identifier !== undefined && /*#__PURE__*/react_default.a.createElement(IDChip["a" /* default */], {
    className: classes.chip,
    id: packetInfo.identifier,
    filter: "pkt:0x" + packetInfo.identifier.toString(16)
  }), /*#__PURE__*/react_default.a.createElement(KindChip["a" /* default */], {
    className: classes.chip,
    kind: packetInfo.kind
  }), packetInfo.optional && /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
    className: classes.chip,
    size: "small",
    label: "optional"
  }), packetInfo.derived && /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
    className: classes.chip,
    size: "small",
    label: "derived"
  })), /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
    source: packetInfo.description
  }), !!fields.length && /*#__PURE__*/react_default.a.createElement(MembersType, {
    members: fields,
    title: isCmd && "Arguments"
  }), !!reportInfo && /*#__PURE__*/react_default.a.createElement(MembersType, {
    members: reportInfo.fields,
    title: "Report"
  }), !!pipeReportInfo && /*#__PURE__*/react_default.a.createElement(MembersType, {
    members: pipeReportInfo.fields,
    title: "Pipe report"
  }), showDevices && Object(jdom_spec["h" /* isCommand */])(packetInfo) && /*#__PURE__*/react_default.a.createElement(DeviceList, {
    serviceClass: serviceClass,
    commandIdentifier: packetInfo.identifier
  }), showDevices && Object(jdom_spec["s" /* isRegister */])(packetInfo) && /*#__PURE__*/react_default.a.createElement(DeviceList, {
    serviceClass: serviceClass,
    registerIdentifiers: [packetInfo.identifier]
  }), showDevices && Object(jdom_spec["j" /* isEvent */])(packetInfo) && /*#__PURE__*/react_default.a.createElement(DeviceList, {
    serviceClass: serviceClass,
    eventIdentifiers: [packetInfo.identifier]
  }));
}

/***/ }),

/***/ "5oJA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DeviceCardHeader; });

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__("9jPY");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__("50B7");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__("dYIP");

// EXTERNAL MODULE: ./src/components/DeviceActions.tsx
var DeviceActions = __webpack_require__("8zWW");

// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__("SCH5");

// EXTERNAL MODULE: ./src/jacdac/useDeviceSpecification.ts
var useDeviceSpecification = __webpack_require__("LoFq");

// EXTERNAL MODULE: ./src/components/devices/useDeviceImage.ts
var useDeviceImage = __webpack_require__("dI3M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js
var CardMedia = __webpack_require__("Ie8z");

// CONCATENATED MODULE: ./src/components/ui/CardMediaWithSkeleton.tsx



var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    media: {
      height: 0,
      paddingTop: '75%' // 4:3

    }
  });
});
/*
        [theme.breakpoints.down('lg')]: {
            paddingTop: '56.72%', // 16:9
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '18%',
        },
        [theme.breakpoints.down('md')]: { // 6:3
            paddingTop: '50%',
        }
*/

function CardMediaWithSkeleton(props) {
  var image = props.image,
      src = props.src,
      className = props.className,
      others = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["image", "src", "className"]);

  var classes = useStyles();
  var hasImage = !!image || !!src;
  return hasImage ? /*#__PURE__*/react_default.a.createElement(CardMedia["a" /* default */], Object.assign({
    className: className || classes.media
  }, others, {
    image: image,
    src: src
  })) : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null);
}
// CONCATENATED MODULE: ./src/components/DeviceCardMedia.tsx




function DeviceCardMedia(props) {
  var device = props.device;
  var specification = Object(useDeviceSpecification["a" /* default */])(device);
  var imageUrl = Object(useDeviceImage["a" /* default */])(specification);
  return /*#__PURE__*/react_default.a.createElement(CardMediaWithSkeleton, {
    image: imageUrl,
    title: specification === null || specification === void 0 ? void 0 : specification.name
  });
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 2 modules
var DeviceAvatar = __webpack_require__("puVa");

// CONCATENATED MODULE: ./src/components/DeviceCardHeader.tsx

 // tslint:disable-next-line: no-submodule-imports











function DeviceFirmwareVersionChip(props) {
  var _device$service;

  var device = props.device;
  var firmwareVersionRegister = device === null || device === void 0 ? void 0 : (_device$service = device.service(0)) === null || _device$service === void 0 ? void 0 : _device$service.register(constants["T" /* ControlReg */].FirmwareVersion);
  var firmwareVersion = Object(useRegisterValue["d" /* useRegisterStringValue */])(firmwareVersionRegister);
  return firmwareVersion && /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
    size: "small",
    label: firmwareVersion
  }) || /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null);
}

function DeviceTemperatureChip(props) {
  var _device$service2;

  var device = props.device;
  var tempRegister = device === null || device === void 0 ? void 0 : (_device$service2 = device.service(0)) === null || _device$service2 === void 0 ? void 0 : _device$service2.register(constants["T" /* ControlReg */].McuTemperature);
  var temperature = Object(useRegisterValue["c" /* useRegisterIntValue */])(tempRegister);
  return temperature !== undefined && /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
    size: "small",
    label: temperature + "\xB0"
  }) || /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null);
}

function DeviceCardHeader(props) {
  var device = props.device,
      showFirmware = props.showFirmware,
      showTemperature = props.showTemperature,
      showMedia = props.showMedia,
      showDeviceId = props.showDeviceId,
      showAvatar = props.showAvatar;
  var specification = Object(useDeviceSpecification["a" /* default */])(device);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, showMedia && /*#__PURE__*/react_default.a.createElement(DeviceCardMedia, {
    device: device
  }), /*#__PURE__*/react_default.a.createElement(CardHeader["a" /* default */], {
    avatar: showAvatar && /*#__PURE__*/react_default.a.createElement(DeviceAvatar["a" /* default */], {
      device: device
    }),
    action: /*#__PURE__*/react_default.a.createElement(DeviceActions["a" /* default */], {
      device: device,
      showReset: true
    }),
    title: /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
      color: "textPrimary",
      to: "/devices/" + (Object(spec["g" /* identifierToUrlPath */])(specification === null || specification === void 0 ? void 0 : specification.id) || "")
    }, /*#__PURE__*/react_default.a.createElement(DeviceName["a" /* default */], {
      device: device
    })),
    subheader: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
      variant: "caption",
      gutterBottom: true
    }, [specification === null || specification === void 0 ? void 0 : specification.name, showDeviceId && device.deviceId].filter(function (s) {
      return !!s;
    }).join(", ")), showFirmware && /*#__PURE__*/react_default.a.createElement(DeviceFirmwareVersionChip, {
      device: device
    }), showTemperature && /*#__PURE__*/react_default.a.createElement(DeviceTemperatureChip, {
      device: device
    }))
  }));
}

/***/ }),

/***/ "Ie8z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");






var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  /* Styles applied to the root element if `component="video, audio, picture, iframe, or img"`. */
  media: {
    width: '100%'
  },

  /* Styles applied to the root element if `component="picture or img"`. */
  img: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
  }
};
var MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
var CardMedia = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function CardMedia(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      image = props.image,
      src = props.src,
      style = props.style,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "component", "image", "src", "style"]);

  var isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1;
  var composedStyle = !isMediaComponent && image ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    backgroundImage: "url(\"".concat(image, "\")")
  }, style) : style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, isMediaComponent && classes.media, "picture img".indexOf(Component) !== -1 && classes.img),
    ref: ref,
    style: composedStyle,
    src: isMediaComponent ? image || src : undefined
  }, other), children);
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiCardMedia'
})(CardMedia));

/***/ }),

/***/ "J89t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KindChip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9jPY");
/* harmony import */ var _KindIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("NHHF");
/* harmony import */ var _PacketsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("VKQG");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2K/c");
/* harmony import */ var _ui_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("XfUf");






function KindChip(props) {
  var kind = props.kind,
      className = props.className;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PacketsContext__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"]),
      filter = _useContext.filter,
      setFilter = _useContext.setFilter;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_4__[/* default */ "c"]),
      setDrawerType = _useContext2.setDrawerType;

  var icon = Object(_KindIcon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"])({
    kind: kind
  });
  var chipFilter = "kind:" + kind;
  var filtered = filter && filter.indexOf(chipFilter) > -1;

  var handleClick = function handleClick() {
    var _filter$replace;

    if (filtered) setFilter(filter === null || filter === void 0 ? void 0 : (_filter$replace = filter.replace(chipFilter, '')) === null || _filter$replace === void 0 ? void 0 : _filter$replace.trim());else setFilter((filter === null || filter === void 0 ? void 0 : filter.trim()) + ' ' + chipFilter);
    setDrawerType(_AppContext__WEBPACK_IMPORTED_MODULE_4__[/* DrawerType */ "b"].Packets);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Tooltip__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    title: filtered ? "remove filter " + chipFilter : "add filter " + chipFilter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    onClick: handleClick,
    className: className,
    size: "small",
    label: Object(_KindIcon__WEBPACK_IMPORTED_MODULE_2__[/* kindName */ "c"])(kind),
    icon: icon
  })));
}

/***/ }),

/***/ "LZmX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceLostAlert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_useEventRaised__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jj5L");
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FQT7");




function DeviceLostAlert(props) {
  var device = props.device;
  var lost = Object(_jacdac_useEventRaised__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])([_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* LOST */ "Nb"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* FOUND */ "rb"]], device, function (dev) {
    return !!(dev !== null && dev !== void 0 && dev.lost);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, lost && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    severity: "info"
  }, "Device lost..."));
}

/***/ }),

/***/ "TD2k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useGridBreakpoints; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2K/c");


function useGridBreakpoints(itemCount) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"]),
      drawerType = _useContext.drawerType;

  if (itemCount !== undefined) {
    switch (itemCount) {
      case 1:
      case 2:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6
        };

      case 3:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 4,
          xl: 4
        };
    }
  }

  if (drawerType != _AppContext__WEBPACK_IMPORTED_MODULE_1__[/* DrawerType */ "b"].None) return {
    xs: 12,
    md: 6,
    sm: 6,
    lg: 6,
    xl: 4
  };else return {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 3
  };
}

/***/ }),

/***/ "U/xp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useEventCount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfHV");


function useEventCount(event) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(event.count),
      count = _useState[0],
      setCount = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return event.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* CHANGE */ "v"], function () {
      setCount(event.count);
    });
  }, [event]);
  return count;
}

/***/ }),

/***/ "XsSY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IDChip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("M1Nd");
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9jPY");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("PsDL");
/* harmony import */ var _PacketsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("VKQG");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2K/c");
/* harmony import */ var _ui_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("XfUf");
 // tslint:disable-next-line: no-submodule-imports match-default-export-name






function IDChip(props) {
  var id = props.id,
      className = props.className,
      filter = props.filter;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PacketsContext__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"]),
      packetFilter = _useContext.filter,
      setPacketFilter = _useContext.setFilter;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_5__[/* default */ "c"]),
      setDrawerType = _useContext2.setDrawerType;

  var ids = typeof id === "string" ? id : "0x" + (id !== undefined ? id.toString(16) : "???");
  var filtered = packetFilter && packetFilter.indexOf(filter) > -1;

  var handleFilterClick = function handleFilterClick() {
    var _packetFilter$replace;

    if (filtered) setPacketFilter(packetFilter === null || packetFilter === void 0 ? void 0 : (_packetFilter$replace = packetFilter.replace(filter, '')) === null || _packetFilter$replace === void 0 ? void 0 : _packetFilter$replace.trim());else setPacketFilter((packetFilter === null || packetFilter === void 0 ? void 0 : packetFilter.trim()) + ' ' + filter);
    setDrawerType(_AppContext__WEBPACK_IMPORTED_MODULE_5__[/* DrawerType */ "b"].Packets);
  };

  var icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_1___default.a, null);
  var title = filtered ? "remove filter " + filter : "add filter " + filter;
  if (filter) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Tooltip__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    title: filtered ? "remove filter " + filter : "add filter " + filter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    className: className,
    size: "small",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      "aria-label": title,
      onClick: handleFilterClick
    }, icon),
    label: ids
  })));else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    "aria-label": title,
    className: className,
    size: "small",
    icon: icon,
    title: "identifier " + ids,
    label: ids
  });
}

/***/ }),

/***/ "Y6fa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StatusAlert */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FQT7");


function StatusAlert(props) {
  var specification = props.specification;

  switch (specification === null || specification === void 0 ? void 0 : specification.status) {
    case "deprecated":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        severity: "warning"
      }, "Deprecated");

    case "experimental":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        severity: "info"
      }, "Experimental");

    default:
      return null;
  }
}
var ServiceSpecificationStatusAlert = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(StatusAlert);
/* harmony default export */ __webpack_exports__["a"] = (ServiceSpecificationStatusAlert);

/***/ }),

/***/ "o4QW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");





var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var CardActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function CardActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["disableSpacing", "classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiCardActions'
})(CardActions));

/***/ }),

/***/ "qBB9":
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

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 2l-5.5 9h11z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17.5",
  cy: "17.5",
  r: "4.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 13.5h8v8H3z"
})), 'Category');

exports.default = _default;

/***/ }),

/***/ "yQBs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DeviceCard; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__("30+C");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__("oa/T");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// CONCATENATED MODULE: ./src/components/ServiceButton.tsx



function ServiceButton(props) {
  var service = props.service,
      onClick = props.onClick,
      others = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["service", "onClick"]);

  return /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Button"], Object.assign({}, others, {
    variant: "contained",
    color: "primary",
    onClick: onClick
  }), service.name);
}
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__("o4QW");

// EXTERNAL MODULE: ./src/components/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__("5oJA");

// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__("dYIP");

// EXTERNAL MODULE: ./src/components/alert/DeviceLostAlert.tsx
var DeviceLostAlert = __webpack_require__("LZmX");

// CONCATENATED MODULE: ./src/components/DeviceCard.tsx
 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports










var useStyles = Object(makeStyles["a" /* default */])(function () {
  return Object(createStyles["a" /* default */])({
    root: {},
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  });
});

function navigateToService(service) {
  var spec = service.specification;
  if (spec) Object(gatsby_browser_entry["navigate"])("/services/" + spec.shortId + "/"); // todo spec
}

function DeviceDescription(props) {
  var _device$service;

  var device = props.device;
  var register = device === null || device === void 0 ? void 0 : (_device$service = device.service(0)) === null || _device$service === void 0 ? void 0 : _device$service.register(constants["T" /* ControlReg */].DeviceDescription);
  var description = Object(useRegisterValue["d" /* useRegisterStringValue */])(register);
  return /*#__PURE__*/react_default.a.createElement("span", null, description || "");
}

function DeviceCard(props) {
  var device = props.device,
      children = props.children,
      action = props.action,
      content = props.content,
      showDeviceId = props.showDeviceId,
      showDescription = props.showDescription,
      showTemperature = props.showTemperature,
      showFirmware = props.showFirmware,
      showServices = props.showServices;
  var classes = useStyles();
  var services = Object(useChange["a" /* default */])(device, function () {
    return device.services().filter(function (service) {
      return service.serviceClass != constants["Gd" /* SRV_CTRL */] && service.serviceClass != constants["Td" /* SRV_LOGGER */];
    });
  });
  return /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], {
    className: classes.root
  }, /*#__PURE__*/react_default.a.createElement(DeviceCardHeader["a" /* default */], {
    device: device,
    showDeviceId: showDeviceId,
    showTemperature: showTemperature,
    showFirmware: showFirmware,
    showMedia: true
  }), (showDescription || content) && /*#__PURE__*/react_default.a.createElement(CardContent["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(DeviceLostAlert["a" /* DeviceLostAlert */], {
    device: device
  }), showDescription && /*#__PURE__*/react_default.a.createElement(DeviceDescription, {
    device: device
  }), content), /*#__PURE__*/react_default.a.createElement(CardActions["a" /* default */], null, action, showServices && (services === null || services === void 0 ? void 0 : services.map(function (service) {
    return /*#__PURE__*/react_default.a.createElement(ServiceButton, {
      key: service.id,
      service: service,
      onClick: function onClick() {
        return navigateToService(service);
      }
    });
  }))), children);
}

/***/ })

}]);
//# sourceMappingURL=de590f55fa2f17e49ed8680dc5a022fe834f3017-247be2da3b4ad267d2d4.js.map