(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "56Ss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("MquD");






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      minWidth: 56,
      color: theme.palette.action.active,
      flexShrink: 0,
      display: 'inline-flex'
    },

    /* Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      marginTop: 8
    }
  };
};
/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 */

var ListItemIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ListItemIcon(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className"]);

  var context = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_List_ListContext__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, context.alignItems === 'flex-start' && classes.alignItemsFlexStart),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiListItemIcon'
})(ListItemIcon));

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
  var firmwareVersionRegister = device === null || device === void 0 ? void 0 : (_device$service = device.service(0)) === null || _device$service === void 0 ? void 0 : _device$service.register(constants["Q" /* ControlReg */].FirmwareVersion);
  var firmwareVersion = Object(useRegisterValue["d" /* useRegisterStringValue */])(firmwareVersionRegister);
  return firmwareVersion && /*#__PURE__*/react_default.a.createElement(Chip["a" /* default */], {
    size: "small",
    label: firmwareVersion
  }) || /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null);
}

function DeviceTemperatureChip(props) {
  var _device$service2;

  var device = props.device;
  var tempRegister = device === null || device === void 0 ? void 0 : (_device$service2 = device.service(0)) === null || _device$service2 === void 0 ? void 0 : _device$service2.register(constants["Q" /* ControlReg */].McuTemperature);
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

/***/ "D5X2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ServiceTestRunner; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/components/useServiceClient.ts
var useServiceClient = __webpack_require__("wsLH");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__("tVbE");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__("56Ss");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__("IsqK");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__("30+C");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__("oa/T");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__("eD//");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js
var ListSubheader = __webpack_require__("hxuT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("iuhU");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js





var styles = {
  /* Styles applied to the root element. */
  root: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: 'translateY(-50%)'
  }
};
/**
 * Must be used as the last child of ListItem to function properly.
 */

var ListItemSecondaryAction_ListItemSecondaryAction = /*#__PURE__*/react["forwardRef"](function ListItemSecondaryAction(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "className"]);

  return /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
ListItemSecondaryAction_ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';
/* harmony default export */ var esm_ListItemSecondaryAction_ListItemSecondaryAction = (Object(withStyles["a" /* default */])(styles, {
  name: 'MuiListItemSecondaryAction'
})(ListItemSecondaryAction_ListItemSecondaryAction));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__("Z3vd");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__("hlFM");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__("o4QW");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__("FQT7");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("JX7q");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__("dI71");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("vuIU");

// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdtestfuns.ts
var jdtestfuns = __webpack_require__("et/c");

// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdtest.ts
var jdtest = __webpack_require__("JK6d");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/eventsource.ts
var eventsource = __webpack_require__("033P");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/serviceclient.ts
var serviceclient = __webpack_require__("eoX3");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// CONCATENATED MODULE: ./jacdac-ts/src/test/testrunner.ts




function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var JDCommandStatus;

(function (JDCommandStatus) {
  JDCommandStatus[JDCommandStatus["NotReady"] = 0] = "NotReady";
  JDCommandStatus[JDCommandStatus["Active"] = 1] = "Active";
  JDCommandStatus[JDCommandStatus["RequiresUserInput"] = 2] = "RequiresUserInput";
  JDCommandStatus[JDCommandStatus["Passed"] = 3] = "Passed";
  JDCommandStatus[JDCommandStatus["Failed"] = 4] = "Failed";
})(JDCommandStatus || (JDCommandStatus = {}));

var JDTestStatus;

(function (JDTestStatus) {
  JDTestStatus[JDTestStatus["NotReady"] = 0] = "NotReady";
  JDTestStatus[JDTestStatus["Active"] = 1] = "Active";
  JDTestStatus[JDTestStatus["Passed"] = 2] = "Passed";
  JDTestStatus[JDTestStatus["Failed"] = 3] = "Failed";
})(JDTestStatus || (JDTestStatus = {}));

function commandStatusToTestStatus(status) {
  switch (status) {
    case JDCommandStatus.Active:
      return JDTestStatus.Active;

    case JDCommandStatus.Passed:
      return JDTestStatus.Passed;

    case JDCommandStatus.Failed:
      return JDTestStatus.Failed;

    case JDCommandStatus.NotReady:
      return JDTestStatus.NotReady;

    case JDCommandStatus.RequiresUserInput:
      return JDTestStatus.Active;
  }
}

function cmdToTestFunction(cmd) {
  var id = cmd.call.callee.name;
  return jdtestfuns["a" /* testCommandFunctions */].find(function (t) {
    return t.id == id;
  });
}

function unparse(e) {
  switch (e.type) {
    case "CallExpression":
      {
        var caller = e;
        return unparse(caller.callee) + "(" + caller.arguments.map(unparse).join(", ") + ")";
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
  function JDExprEvaluator(env, start) {
    this.exprStack = [];
    this.env = env;
    this.start = start;
  }

  var _proto = JDExprEvaluator.prototype;

  _proto.tos = function tos() {
    return this.exprStack[this.exprStack.length - 1];
  };

  _proto.eval = function _eval(e) {
    this.exprStack = [];
    this.visitExpression(e);
    return this.exprStack.pop();
  };

  _proto.visitExpression = function visitExpression(e) {
    switch (e.type) {
      case "CallExpression":
        {
          var caller = e;
          var callee = caller.callee;

          switch (callee.name) {
            case "start":
              this.exprStack.push(this.start.find(function (r) {
                return r.e === caller;
              }).v);
              return;

            default: // ERROR

          }

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
      case "LogicalExpression":
        {
          var le = e;
          this.visitExpression(le.left);

          switch (le.operator) {
            case "||":
              if (this.tos()) return;else this.visitExpression(le.right);
              break;

            case "&&":
              if (!this.tos()) return;else this.visitExpression(le.right);
              break;

            default:
          }

          break;
        }

      case "Identifier":
        {
          var id = e;
          this.exprStack.push(this.env[id.name]);
          break;
        }

      case "Literal":
        {
          var lit = e;
          this.exprStack.push(lit.value);
          break;
        }

      default:
    }
  };

  return JDExprEvaluator;
}();

var testrunner_JDCommandEvaluator = /*#__PURE__*/function () {
  function JDCommandEvaluator(env, command) {
    this._prompt = "";
    this._progress = "";
    this._status = JDCommandStatus.Active;
    this._startExpressions = [];
    this._rangeComplete = undefined;
    this.env = env;
    this.command = command;
  }

  var _proto2 = JDCommandEvaluator.prototype;

  _proto2.start = function start() {
    var _this = this;

    this._startExpressions = [];
    var testFun = cmdToTestFunction(this.command);
    var args = this.command.call.arguments;
    var startExprs = [];

    switch (testFun.id) {
      case "check":
        {
          startExprs = Object(jdtest["a" /* getExpressionsOfType */])(args, 'CallExpression').filter(function (ce) {
            return ce.callee.name === "start";
          }).map(function (ce) {
            return ce.arguments[0];
          });
          break;
        }

      case "changes":
      case "increases":
      case "decreases":
        {
          startExprs.push(args[0]);
          break;
        }

      case "increasesBy":
      case "decreasesBy":
        {
          startExprs.push(args[0]);
          startExprs.push(args[1]);
          break;
        }

      case "rangesFromUpTo":
      case "rangesFromDownTo":
        {
          startExprs.push(args[1]);
          startExprs.push(args[2]);
          break;
        }
    } // evaluate the start expressions and store the results


    startExprs.forEach(function (child) {
      if (_this._startExpressions.findIndex(function (r) {
        return r.e === child;
      }) < 0) {
        var exprEval = new JDExprEvaluator(_this.env, []);

        _this._startExpressions.push({
          e: child,
          v: exprEval.eval(child)
        });
      }
    });
    this.createPrompt();
  };

  _proto2.createPrompt = function createPrompt() {
    var _this2 = this;

    var testFun = cmdToTestFunction(this.command);
    var replace = this.command.call.arguments.map(function (a, i) {
      var aStart = _this2._startExpressions.find(function (r) {
        return r.e === a;
      });

      return ["{" + (i + 1) + "}", aStart && testFun.args[i] !== "register" ? aStart.v.toString() : unparse(a)];
    });
    this._prompt = testFun.id === "ask" || testFun.id === "say" ? this.command.prompt.slice(0) : testFun.prompt.slice(0);
    replace.forEach(function (p) {
      return _this2._prompt = _this2._prompt.replace(p[0], p[1]);
    });
  };

  _proto2.evaluate = function evaluate() {
    var testFun = cmdToTestFunction(this.command);
    this._status = JDCommandStatus.Active;
    this._progress = "";

    switch (testFun.id) {
      case "say":
      case "ask":
        {
          this._status = testFun.id === "say" ? JDCommandStatus.Passed : JDCommandStatus.RequiresUserInput;
          break;
        }

      case "check":
        {
          var expr = new JDExprEvaluator(this.env, this._startExpressions);
          var ev = expr.eval(this.command.call.arguments[0]);
          this._status = ev ? JDCommandStatus.Passed : JDCommandStatus.Active;
          break;
        }

      case "changes":
      case "increases":
      case "decreases":
        {
          var reg = this.command.call.arguments[0];

          var regSaved = this._startExpressions.find(function (r) {
            return r.e === reg;
          });

          var regValue = this.env[unparse(reg)];
          var status = testFun.id === "changes" && regValue !== regSaved.v || testFun.id === "increases" && regValue > regSaved.v || testFun.id === "decreases" && regValue < regSaved.v ? JDCommandStatus.Passed : JDCommandStatus.Active;
          this._status = status;
          regSaved.v = regValue;
          break;
        }

      case "increasesBy":
      case "decreasesBy":
        {
          var _reg = this.command.call.arguments[0];

          var _regSaved = this._startExpressions.find(function (r) {
            return r.e === _reg;
          });

          var amt = this.command.call.arguments[1];

          var amtSaved = this._startExpressions.find(function (r) {
            return r.e === amt;
          });

          var _regValue = this.env[unparse(_reg)];

          if (testFun.id === "increasesBy") {
            if (_regValue === _regSaved.v + amtSaved.v) {
              this._status = JDCommandStatus.Passed;
            } else if (_regValue >= _regSaved.v && _regValue < _regSaved.v + amtSaved.v) {
              this._status = JDCommandStatus.Active;
              this._progress = _regValue - _regSaved.v + " out of " + amtSaved.v;
            } else {
              this._status = JDCommandStatus.Active;
            }
          } else {
            if (_regValue === _regSaved.v - amtSaved.v) {
              this._status = JDCommandStatus.Passed;
              this._progress = "completed";
            } else if (_regValue <= _regSaved.v && _regValue > _regSaved.v - amtSaved.v) {
              this._status = JDCommandStatus.Active;
              this._progress = _regSaved.v - _regValue + " out of " + amtSaved.v;
            } else {
              this._status = JDCommandStatus.Active;
            }
          }

          break;
        }

      case "rangesFromUpTo":
      case "rangesFromDownTo":
        {
          this._status = JDCommandStatus.Active;
          var _reg2 = this.command.call.arguments[0];
          var _regValue2 = this.env[unparse(_reg2)];
          var begin = this.command.call.arguments[1];

          var beginSaved = this._startExpressions.find(function (r) {
            return r.e === begin;
          });

          var end = this.command.call.arguments[2];

          var endSaved = this._startExpressions.find(function (r) {
            return r.e === end;
          });

          if (this._rangeComplete === undefined) {
            if (_regValue2 == beginSaved.v) this._rangeComplete = _regValue2;
          } else {
            if (_regValue2 === this._rangeComplete + (testFun.id == 'rangesFromUpTo' ? 1 : -1)) this._rangeComplete = _regValue2;

            if (this._rangeComplete === endSaved.v) {
              this._status = JDCommandStatus.Passed;
            }
          }

          if (this._rangeComplete != undefined) {
            this._progress = testFun.id == 'rangesFromUpTo' ? "from " + beginSaved.v + " up to " + this._rangeComplete : "from " + beginSaved.v + " down to " + this._rangeComplete;
          }

          break;
        }
    }
  };

  Object(createClass["a" /* default */])(JDCommandEvaluator, [{
    key: "prompt",
    get: function get() {
      return this._prompt;
    }
  }, {
    key: "status",
    get: function get() {
      return this._status;
    }
  }, {
    key: "progress",
    get: function get() {
      return this._progress;
    }
  }]);

  return JDCommandEvaluator;
}();

var testrunner_JDCommandRunner = /*#__PURE__*/function (_JDEventSource) {
  Object(inheritsLoose["a" /* default */])(JDCommandRunner, _JDEventSource);

  // timeout
  function JDCommandRunner(testRunner, env, command) {
    var _this3;

    _this3 = _JDEventSource.call(this) || this;
    _this3._status = JDCommandStatus.NotReady;
    _this3._output = {
      message: "",
      progress: ""
    };
    _this3._timeOut = 5000;
    _this3._timeLeft = 5000;
    _this3._commmandEvaluator = null;
    _this3.testRunner = testRunner;
    _this3.env = env;
    _this3.command = command;
    return _this3;
  }

  var _proto3 = JDCommandRunner.prototype;

  _proto3.reset = function reset() {
    this.output = {
      message: "",
      progress: ""
    };
    this.status = JDCommandStatus.NotReady;
    this._commmandEvaluator = null;
  };

  _proto3.start = function start() {
    this.status = JDCommandStatus.Active;
    this._commmandEvaluator = new testrunner_JDCommandEvaluator(this.env, this.command);

    this._commmandEvaluator.start();

    this.envChange(false);
    this.envChange(true);
  };

  _proto3.envChange = function envChange(finish) {
    if (finish === void 0) {
      finish = true;
    }

    if (this._commmandEvaluator) {
      this._commmandEvaluator.evaluate();

      var newOutput = {
        message: this._commmandEvaluator.prompt,
        progress: this._commmandEvaluator.progress
      };
      this.output = newOutput;
      if (this._commmandEvaluator.status === JDCommandStatus.RequiresUserInput) this.status = JDCommandStatus.RequiresUserInput;else if (finish) this.finish(this._commmandEvaluator.status);
    }
  };

  _proto3.cancel = function cancel() {
    this.finish(JDCommandStatus.Failed);
  };

  _proto3.finish = function finish(s) {
    if ((s === JDCommandStatus.Failed || s === JDCommandStatus.Passed) && (this.status === JDCommandStatus.Active || this.status === JDCommandStatus.RequiresUserInput)) {
      this.status = s;
      this.testRunner.finishCommand();
    }
  };

  Object(createClass["a" /* default */])(JDCommandRunner, [{
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(s) {
      if (s != this._status) {
        this._status = s;
        this.emit(constants["s" /* CHANGE */]);
      }
    }
  }, {
    key: "indeterminate",
    get: function get() {
      return this.status !== JDCommandStatus.Failed && this.status !== JDCommandStatus.Passed;
    }
  }, {
    key: "output",
    get: function get() {
      return this._output;
    },
    set: function set(value) {
      if (!this._output || this._output.message !== value.message || this._output.progress !== value.progress) {
        this._output = value;
        this.emit(constants["s" /* CHANGE */]);
      }
    }
  }]);

  return JDCommandRunner;
}(eventsource["a" /* JDEventSource */]);
var testrunner_JDTestRunner = /*#__PURE__*/function (_JDEventSource2) {
  Object(inheritsLoose["a" /* default */])(JDTestRunner, _JDEventSource2);

  function JDTestRunner(serviceTestRunner, env, testSpec) {
    var _this4;

    _this4 = _JDEventSource2.call(this) || this;
    _this4._status = JDTestStatus.NotReady;
    _this4.serviceTestRunner = serviceTestRunner;
    _this4.env = env;
    _this4.testSpec = testSpec;
    _this4.commands = testSpec.commands.map(function (c) {
      return new testrunner_JDCommandRunner(Object(assertThisInitialized["a" /* default */])(_this4), _this4.env, c);
    });
    _this4._description = testSpec.description;
    return _this4;
  }

  var _proto4 = JDTestRunner.prototype;

  _proto4.reset = function reset() {
    if (this.status !== JDTestStatus.NotReady) {
      this._status = JDTestStatus.NotReady;
      this._commandIndex = undefined;
      this.commands.forEach(function (t) {
        return t.reset();
      });
      this.emit(constants["s" /* CHANGE */]);
    }
  };

  _proto4.start = function start() {
    this.reset();
    this.status = JDTestStatus.Active;
    this.commandIndex = 0;
  };

  _proto4.next = function next() {
    this.serviceTestRunner.next();
  };

  _proto4.cancel = function cancel() {
    this.finish(JDTestStatus.Failed);
  };

  _proto4.finish = function finish(newStatus) {
    if (this.status === JDTestStatus.Active) {
      this.status = newStatus;
    }
  };

  _proto4.envChange = function envChange() {
    var _this$currentCommand;

    (_this$currentCommand = this.currentCommand) === null || _this$currentCommand === void 0 ? void 0 : _this$currentCommand.envChange();
  };

  _proto4.finishCommand = function finishCommand() {
    if (this.commandIndex === this.commands.length - 1) this.finish(commandStatusToTestStatus(this.currentCommand.status)); // (this.commandIndex < this.commands.length)
    else this.commandIndex++;
  };

  Object(createClass["a" /* default */])(JDTestRunner, [{
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(s) {
      if (s != this._status) {
        this._status = s;
        this.emit(constants["s" /* CHANGE */]);
      }
    }
  }, {
    key: "indeterminate",
    get: function get() {
      return this.status !== JDTestStatus.Failed && this.status !== JDTestStatus.Passed;
    }
  }, {
    key: "description",
    get: function get() {
      return this._description;
    }
  }, {
    key: "commandIndex",
    get: function get() {
      return this._commandIndex;
    },
    set: function set(index) {
      if (this._commandIndex !== index) {
        var _this$currentCommand2;

        this._commandIndex = index;
        (_this$currentCommand2 = this.currentCommand) === null || _this$currentCommand2 === void 0 ? void 0 : _this$currentCommand2.start();
        this.emit(constants["s" /* CHANGE */]);
      }
    }
  }, {
    key: "currentCommand",
    get: function get() {
      return this.commands[this._commandIndex];
    }
  }]);

  return JDTestRunner;
}(eventsource["a" /* JDEventSource */]);
var testrunner_JDServiceTestRunner = /*#__PURE__*/function (_JDServiceClient) {
  Object(inheritsLoose["a" /* default */])(JDServiceTestRunner, _JDServiceClient);

  function JDServiceTestRunner(testSpec, service) {
    var _this5;

    _this5 = _JDServiceClient.call(this, service) || this;
    _this5._testIndex = -1;
    _this5.registers = {};
    _this5.environment = {};
    _this5.testSpec = testSpec;
    _this5.tests = _this5.testSpec.tests.map(function (t) {
      return new testrunner_JDTestRunner(Object(assertThisInitialized["a" /* default */])(_this5), _this5.environment, t);
    });
    var serviceSpec = Object(spec["D" /* serviceSpecificationFromClassIdentifier */])(service.serviceClass);

    _this5.testSpec.tests.forEach(function (t) {
      t.registers.forEach(function (regName) {
        if (!_this5.registers[regName]) {
          var pkt = serviceSpec.packets.find(function (pkt) {
            return pkt.name === regName;
          });
          var register = service.register(pkt.identifier);
          _this5.registers[regName] = register;
          _this5.environment[regName] = register.intValue;

          _this5.mount(register.subscribe(constants["s" /* CHANGE */], function () {
            var _this5$currentTest;

            _this5.environment[regName] = register.intValue;
            (_this5$currentTest = _this5.currentTest) === null || _this5$currentTest === void 0 ? void 0 : _this5$currentTest.envChange();
          }));
        }
      });
    });

    _this5.start();

    return _this5;
  }

  var _proto5 = JDServiceTestRunner.prototype;

  _proto5.stats = function stats() {
    var r = {
      total: this.tests.length,
      success: 0,
      failed: 0,
      indeterminate: 0
    };

    for (var _iterator = _createForOfIteratorHelperLoose(this.tests), _step; !(_step = _iterator()).done;) {
      var test = _step.value;

      switch (test.status) {
        case JDTestStatus.Failed:
          r.failed++;
          break;

        case JDTestStatus.Passed:
          r.success++;
          break;

        default:
          r.indeterminate++;
      }
    }

    return r;
  };

  _proto5.start = function start() {
    this.tests.forEach(function (t) {
      return t.reset();
    });
    this.testIndex = 0;
  };

  _proto5.next = function next() {
    this.testIndex++;
  };

  Object(createClass["a" /* default */])(JDServiceTestRunner, [{
    key: "testIndex",
    get: function get() {
      return this._testIndex;
    },
    set: function set(index) {
      if (this._testIndex !== index) {
        // stop previous test if needed
        var ct = this.currentTest;

        if (ct) {
          if (ct.status === JDTestStatus.Active) {
            ct.cancel();
          }
        } // update test


        this._testIndex = index;
        this.emit(constants["s" /* CHANGE */]);
      }
    }
  }, {
    key: "currentTest",
    get: function get() {
      return this.tests[this._testIndex];
    },
    set: function set(test) {
      var index = this.tests.indexOf(test);
      if (index > -1) this.testIndex = index;
    }
  }]);

  return JDServiceTestRunner;
}(serviceclient["a" /* JDServiceClient */]);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Error.js
var Error = __webpack_require__("lPg6");
var Error_default = /*#__PURE__*/__webpack_require__.n(Error);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CheckCircle.js
var CheckCircle = __webpack_require__("oTnw");
var CheckCircle_default = /*#__PURE__*/__webpack_require__.n(CheckCircle);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/HourglassEmpty.js
var HourglassEmpty = __webpack_require__("rsPu");
var HourglassEmpty_default = /*#__PURE__*/__webpack_require__.n(HourglassEmpty);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayCircleFilled.js
var PlayCircleFilled = __webpack_require__("eIxT");
var PlayCircleFilled_default = /*#__PURE__*/__webpack_require__.n(PlayCircleFilled);

// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// EXTERNAL MODULE: ./src/components/dashboard/DashboardDevice.tsx + 4 modules
var DashboardDevice = __webpack_require__("kLoJ");

// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__("aVfY");

// EXTERNAL MODULE: ./jacdac-ts/src/test/testspec.ts
var testspec = __webpack_require__("rNA1");

// CONCATENATED MODULE: ./src/components/test/ServiceTestRunner.tsx


 // tslint:disable-next-line: match-default-export-name no-submodule-imports












function TestStatusIcon(props) {
  var test = props.test;
  var status = Object(useChange["a" /* default */])(test, function (t) {
    return t.status;
  });

  switch (status) {
    case JDTestStatus.Active:
      return /*#__PURE__*/react_default.a.createElement(PlayCircleFilled_default.a, {
        color: "action"
      });

    case JDTestStatus.Failed:
      return /*#__PURE__*/react_default.a.createElement(Error_default.a, {
        color: "error"
      });

    case JDTestStatus.Passed:
      return /*#__PURE__*/react_default.a.createElement(CheckCircle_default.a, {
        color: "primary"
      });

    default:
      return /*#__PURE__*/react_default.a.createElement(HourglassEmpty_default.a, {
        color: "disabled"
      });
  }
}

function TestListItem(props) {
  var test = props.test,
      currentTest = props.currentTest,
      onSelectTest = props.onSelectTest;
  var description = Object(useChange["a" /* default */])(test, function (t) {
    return t.description;
  });
  var selected = test === currentTest;

  var handleSelectTest = function handleSelectTest() {
    return onSelectTest(test);
  };

  return /*#__PURE__*/react_default.a.createElement(ListItem["a" /* default */], {
    selected: selected,
    button: true,
    onClick: handleSelectTest
  }, /*#__PURE__*/react_default.a.createElement(ListItemIcon["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(TestStatusIcon, {
    test: test
  })), /*#__PURE__*/react_default.a.createElement(ListItemText["a" /* default */], {
    primary: description
  }));
}

function TestList(props) {
  var testRunner = props.testRunner,
      currentTest = props.currentTest,
      onSelectTest = props.onSelectTest;
  var tests = testRunner.tests;
  var stats = Object(useChange["a" /* default */])(testRunner, function (r) {
    return r.stats();
  });
  return /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(CardContent["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(List["a" /* default */], {
    dense: true,
    subheader: /*#__PURE__*/react_default.a.createElement(ListSubheader["a" /* default */], null, stats.total + " tests, " + stats.success + " success, " + stats.failed + " failed")
  }, tests === null || tests === void 0 ? void 0 : tests.map(function (test, i) {
    return /*#__PURE__*/react_default.a.createElement(TestListItem, {
      key: i,
      test: test,
      currentTest: currentTest,
      onSelectTest: onSelectTest
    });
  }))));
}

function CommandStatusIcon(props) {
  var command = props.command;
  var status = Object(useChange["a" /* default */])(command, function (c) {
    return c.status;
  });

  switch (status) {
    case JDCommandStatus.Active:
    case JDCommandStatus.RequiresUserInput:
      return /*#__PURE__*/react_default.a.createElement(PlayCircleFilled_default.a, {
        color: "action"
      });

    case JDCommandStatus.Failed:
      return /*#__PURE__*/react_default.a.createElement(Error_default.a, {
        color: "error"
      });

    case JDCommandStatus.Passed:
      return /*#__PURE__*/react_default.a.createElement(CheckCircle_default.a, {
        color: "primary"
      });

    default:
      return /*#__PURE__*/react_default.a.createElement(HourglassEmpty_default.a, {
        color: "disabled"
      });
  }
}

function CommandListItem(props) {
  var command = props.command;

  var _useChange = Object(useChange["a" /* default */])(command, function (c) {
    return c.output;
  }),
      message = _useChange.message,
      progress = _useChange.progress;

  var status = Object(useChange["a" /* default */])(command, function (c) {
    return c.status;
  });

  var handleAnswer = function handleAnswer(status) {
    return function () {
      return command.finish(status);
    };
  };

  return /*#__PURE__*/react_default.a.createElement(ListItem["a" /* default */], {
    selected: status === JDCommandStatus.Active
  }, /*#__PURE__*/react_default.a.createElement(ListItemIcon["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(CommandStatusIcon, {
    command: command
  })), /*#__PURE__*/react_default.a.createElement(ListItemText["a" /* default */], {
    primary: message,
    secondary: progress
  }), status === JDCommandStatus.RequiresUserInput && /*#__PURE__*/react_default.a.createElement(esm_ListItemSecondaryAction_ListItemSecondaryAction, null, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    variant: "outlined",
    onClick: handleAnswer(JDCommandStatus.Passed)
  }, "Yes"), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    variant: "outlined",
    onClick: handleAnswer(JDCommandStatus.Failed)
  }, "No")));
}

function FirstCommand(props) {
  var command = props.command;

  var _useChange2 = Object(useChange["a" /* default */])(command, function (c) {
    return c.output;
  }),
      message = _useChange2.message;

  return /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    m: 2
  }, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "body1"
  }, message));
}

function ActiveTest(props) {
  var test = props.test;
  var commands = test.commands;
  var status = Object(useChange["a" /* default */])(test, function (t) {
    return t.status;
  });

  var handleRestart = function handleRestart() {
    return test.start();
  };

  var handleNext = function handleNext() {
    return test.next();
  };

  var firstCommand = commands[0],
      restOfCommands = commands.slice(1); // auto start

  Object(react["useEffect"])(function () {
    return test.start();
  }, [test]);
  return /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(CardContent["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "h5"
  }, "WHEN"), /*#__PURE__*/react_default.a.createElement(FirstCommand, {
    command: firstCommand
  }), /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "h5"
  }, "TEST"), /*#__PURE__*/react_default.a.createElement(List["a" /* default */], {
    dense: false
  }, restOfCommands.map(function (cmd, i) {
    return /*#__PURE__*/react_default.a.createElement(CommandListItem, {
      key: i,
      command: cmd
    });
  })), status === JDTestStatus.Passed && /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "success"
  }, "Test passed"), status === JDTestStatus.Failed && /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "error"
  }, "Test failed")), /*#__PURE__*/react_default.a.createElement(CardActions["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    variant: status === JDTestStatus.Active ? "outlined" : "contained",
    color: status === JDTestStatus.Passed ? "primary" : undefined,
    onClick: handleNext
  }, "Next"), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    variant: "outlined",
    onClick: handleRestart
  }, "Restart")));
}

function ServiceTestRunner(props) {
  var service = props.service,
      _props$serviceTest = props.serviceTest,
      serviceTest = _props$serviceTest === void 0 ? Object(testspec["a" /* serviceTestFromServiceClass */])(service.serviceClass) : _props$serviceTest;
  var factory = Object(react["useCallback"])(function (service) {
    return serviceTest && new testrunner_JDServiceTestRunner(serviceTest, service);
  }, [service, serviceTest]);
  var testRunner = Object(useServiceClient["a" /* default */])(service, factory);
  var currentTest = Object(useChange["a" /* default */])(testRunner, function (t) {
    return t === null || t === void 0 ? void 0 : t.currentTest;
  });

  var handleSelectTest = function handleSelectTest(test) {
    console.log({
      test: test
    });
    testRunner.currentTest = test;
  };

  if (!serviceTest) return /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "warning"
  }, "Sorry, there are no tests available for service", " ", service.specification.name, ".");
  if (!testRunner) return /*#__PURE__*/react_default.a.createElement(LoadingProgress["a" /* default */], null);
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: true
  }, /*#__PURE__*/react_default.a.createElement(TestList, {
    testRunner: testRunner,
    currentTest: currentTest,
    onSelectTest: handleSelectTest
  })), currentTest && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: true
  }, /*#__PURE__*/react_default.a.createElement(ActiveTest, {
    test: currentTest
  })), service && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: true
  }, /*#__PURE__*/react_default.a.createElement(DashboardDevice["a" /* default */], {
    showAvatar: true,
    showHeader: true,
    device: service.device
  })));
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

/***/ "IsqK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ofer");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("MquD");







var styles = {
  /* Styles applied to the root element. */
  root: {
    flex: '1 1 auto',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4
  },

  /* Styles applied to the `Typography` components if primary and secondary are set. */
  multiline: {
    marginTop: 6,
    marginBottom: 6
  },

  /* Styles applied to the `Typography` components if dense. */
  dense: {},

  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    paddingLeft: 56
  },

  /* Styles applied to the primary `Typography` component. */
  primary: {},

  /* Styles applied to the secondary `Typography` component. */
  secondary: {}
};
var ListItemText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ListItemText(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      _props$inset = props.inset,
      inset = _props$inset === void 0 ? false : _props$inset,
      primaryProp = props.primary,
      primaryTypographyProps = props.primaryTypographyProps,
      secondaryProp = props.secondary,
      secondaryTypographyProps = props.secondaryTypographyProps,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_List_ListContext__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]),
      dense = _React$useContext.dense;

  var primary = primaryProp != null ? primaryProp : children;

  if (primary != null && primary.type !== _Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] && !disableTypography) {
    primary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: "span",
      display: "block"
    }, primaryTypographyProps), primary);
  }

  var secondary = secondaryProp;

  if (secondary != null && secondary.type !== _Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] && !disableTypography) {
    secondary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      variant: "body2",
      className: classes.secondary,
      color: "textSecondary",
      display: "block"
    }, secondaryTypographyProps), secondary);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, dense && classes.dense, inset && classes.inset, primary && secondary && classes.multiline),
    ref: ref
  }, other), primary, secondary);
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiListItemText'
})(ListItemText));

/***/ }),

/***/ "JK6d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getExpressionsOfType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parseSpecificationTestMarkdownToJSON; });
/* harmony import */ var _jdutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3ArF");
/* harmony import */ var _jdtestfuns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("et/c");
/* harmony import */ var jsep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("o8k2");
/* harmony import */ var jsep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsep__WEBPACK_IMPORTED_MODULE_2__);
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="jdspec.d.ts" />
/// <reference path="jdtest.d.ts" />



var supportedExpressions = ["BinaryExpression", "CallExpression", "Identifier", "Literal", "UnaryExpression", "LogicalExpression"];
function getExpressionsOfType(expr, type, returnParent) {
  if (returnParent === void 0) {
    returnParent = false;
  }

  var results = [];
  visit(null, expr);
  return results;

  function visit(parent, current) {
    if (Array.isArray(current)) {
      current.forEach(function (c) {
        return visit(current, c);
      });
    } else if (typeof current === "object") {
      if (parent && (current === null || current === void 0 ? void 0 : current.type) === type) results.push(returnParent ? parent : current);
      Object.keys(current).forEach(function (key) {
        visit(current, current[key]);
      });
    }
  }
} // we parse a test with respect to an existing ServiceSpec

function parseSpecificationTestMarkdownToJSON(filecontent, spec, filename) {
  if (filename === void 0) {
    filename = "";
  }

  filecontent = (filecontent || "").replace(/\r/g, "");
  var info = {
    description: "",
    serviceClassIdentifier: spec.classIdentifier,
    tests: []
  };
  var backticksType = "";
  var errors = [];
  var lineNo = 0;
  var currentTest = null;
  var testHeading = "";
  var testPrompt = "";

  try {
    for (var _iterator = _createForOfIteratorHelperLoose(filecontent.split(/\n/)), _step; !(_step = _iterator()).done;) {
      var line = _step.value;
      lineNo++;
      processLine(line);
    }
  } catch (e) {
    error("exception: " + e.message);
  }

  if (currentTest) finishTest();
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

    var interpret = backticksType == "default" || line.slice(0, 4) == "    ";

    if (!interpret) {
      var _m = /^(#+)\s*(.*)/.exec(line);

      if (_m) {
        testHeading = "";
        testPrompt = "";
        var hd = _m[1],
            cont = _m[2];

        if (hd == "#" && !info.description) {
          info.description = cont.trim();
        } else if (hd == "##") {
          if (currentTest) finishTest();
          testHeading = cont.trim();
        }
      } else {
        testPrompt += line;
      }
    } else {
      var expanded = line.replace(/\/\/.*/, "").trim();
      if (!expanded) return;
      processCommand(expanded);
    }
  }

  function processCommand(expanded) {
    if (!currentTest) {
      if (!testHeading) error("every test must have a description (via ##)");
      currentTest = {
        description: testHeading,
        registers: [],
        commands: []
      };
      testHeading = "";
    }

    var call = /^([a-zA-Z]\w*)\(.*\)$/.exec(expanded);

    if (!call) {
      error("a command must be a call to a registered test function (JavaScript syntax)");
      return;
    }

    var callee = call[1];
    var index = _jdtestfuns__WEBPACK_IMPORTED_MODULE_1__[/* testCommandFunctions */ "a"].findIndex(function (r) {
      return callee == r.id;
    });

    if (index < 0) {
      error(callee + " is not a registered test command function.");
      return;
    }

    var root = jsep__WEBPACK_IMPORTED_MODULE_2___default()(expanded);

    if (!root || !root.type || root.type != "CallExpression" || !root.callee || !root.arguments) {
      error("a command must be a call expression in JavaScript syntax");
    } else {
      // check for unsupported expression types
      if (supportedExpressions.indexOf(root.type) < 0) error("Expression of type " + root.type + " not currently supported"); // check arguments

      var expected = _jdtestfuns__WEBPACK_IMPORTED_MODULE_1__[/* testCommandFunctions */ "a"][index].args.length;
      if (expected !== root.arguments.length) error(callee + " expects " + expected + " arguments; got " + root.arguments.length);else {
        root.arguments.forEach(function (arg, a) {
          if (_jdtestfuns__WEBPACK_IMPORTED_MODULE_1__[/* testCommandFunctions */ "a"][index].args[a] === "register" && arg.type !== "Identifier") {
            error(callee + " expects a register in argument position " + (a + 1));
          }
        });
        var callers = getExpressionsOfType(root, 'CallExpression');
        callers.forEach(function (callExpr) {
          if (callExpr.callee.type !== "Identifier") error("all calls must be direct calls");
          var id = callExpr.callee.name;
          var indexFun = _jdtestfuns__WEBPACK_IMPORTED_MODULE_1__[/* testExpressionFunctions */ "b"].findIndex(function (r) {
            return id == r.id;
          });
          if (indexFun < 0) error(id + " is not a registered test expression function.");

          if (id === 'start') {
            if (callee !== 'check') error("start expression function can only be used inside check test function");
            var callsUnder = getExpressionsOfType(callExpr, 'CallExpression');
            callsUnder.forEach(function (ce) {
              if (ce.callee.type === "Identifier" && ce.callee.name === "start") error("cannot nest start underneath start");
            });
          }

          var expected = _jdtestfuns__WEBPACK_IMPORTED_MODULE_1__[/* testExpressionFunctions */ "b"][indexFun].args.length;
          if (expected !== callExpr.arguments.length) error(callee + " expects " + expected + " arguments; got " + callExpr.arguments.length);
        });
      } // now visit all (p,c), c an Identifier that is not a callee child of CallExpression
      // or a property child of a MemberExpression

      var exprs = getExpressionsOfType(root, 'Identifier', true);
      var visited = [];
      exprs.forEach(function (parent) {
        if (visited.indexOf(parent) < 0) {
          visited.push(parent);
          lookupReplace(parent);
        }
      });
      currentTest.commands.push({
        prompt: testPrompt,
        call: root
      });
      testPrompt = "";
    }
  }

  function lookupReplace(parent) {
    if (Array.isArray(parent)) {
      var exprs = parent;
      exprs.forEach(function (child) {
        if (child.type === "Identifier") lookup(parent, child);
      });
    } else {
      Object.keys(parent).forEach(function (key) {
        var child = parent[key];
        if ((child === null || child === void 0 ? void 0 : child.type) !== "Identifier") return;

        if (parent.type !== "MemberExpression" && parent.type !== "CallExpression" || parent.type === "MemberExpression" && child !== parent.property || parent.type === "CallExpression" && child !== parent.callee) {
          lookup(parent, child);
        }
      });
    }

    function lookup(parent, child) {
      try {
        try {
          var val = Object(_jdutils__WEBPACK_IMPORTED_MODULE_0__[/* parseIntFloat */ "b"])(spec, child.name);
          var lit = {
            type: "Literal",
            value: val,
            raw: val.toString()
          };
          /*TODO: replace the Identifier by the (resolved) Literal
          if (parent.type) {
              Object.keys(parent).forEach((key:string) => {
                  if (Object.getOwnPropertyDescriptor(parent,key) == child)
                      Object.defineProperty(parent, key, lit);
              })
          } else {
               }*/
        } catch (e) {
          Object(_jdutils__WEBPACK_IMPORTED_MODULE_0__[/* getRegister */ "a"])(spec, child.name);
          if (currentTest.registers.indexOf(child.name) < 0) currentTest.registers.push(child.name); // TODO: if parent is MemberExpression, continue to do lookup
        }
      } catch (e) {
        error(child.name + " not found in specification");
      }
    }
  }

  function finishTest() {
    info.tests.push(currentTest);
    currentTest = null;
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

/***/ "eIxT":
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
}), 'PlayCircleFilled');

exports.default = _default;

/***/ }),

/***/ "et/c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return testCommandFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return testExpressionFunctions; });
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="jdtest.d.ts" />
var testCommandFunctions = [{
  id: "reset",
  args: [],
  prompt: "sends a reset command to the module"
}, {
  id: "changes",
  args: ["register"],
  prompt: "did the value of {1} change?"
}, {
  id: "say",
  args: [],
  prompt: undefined
}, {
  id: "ask",
  args: [],
  prompt: undefined
}, {
  id: "check",
  args: ["boolean"],
  prompt: "does the condition {1} hold?"
}, {
  id: "increases",
  args: ["register"],
  prompt: "did the value of register {1} increase?"
}, {
  id: "decreases",
  args: ["register"],
  prompt: "did the value of register {1} decrease?"
}, {
  id: "increasesBy",
  args: ["register", "number"],
  prompt: "did the value of register {1} increase by {2}?"
}, {
  id: "decreasesBy",
  args: ["register", "number"],
  prompt: "did the value of register {1} decrease by {2}?"
}, {
  id: "rangesFromUpTo",
  args: ["register", "number", "number"],
  prompt: "register {1} should range in value from {2} up to {3}"
}, {
  id: "rangesFromDownTo",
  args: ["register", "number", "number"],
  prompt: "register {1} should range in value from {2} down to {3}"
}];
var testExpressionFunctions = [{
  id: "start",
  args: ["any"],
  prompt: undefined
}];

/***/ }),

/***/ "hxuT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("NqtD");






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      boxSizing: 'border-box',
      lineHeight: '48px',
      listStyle: 'none',
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(14)
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the root element if `inset={true}`. */
    inset: {
      paddingLeft: 72
    },

    /* Styles applied to the root element if `disableSticky={false}`. */
    sticky: {
      position: 'sticky',
      top: 0,
      zIndex: 1,
      backgroundColor: 'inherit'
    }
  };
};
var ListSubheader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ListSubheader(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'li' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$disableSticky = props.disableSticky,
      disableSticky = _props$disableSticky === void 0 ? false : _props$disableSticky,
      _props$inset = props.inset,
      inset = _props$inset === void 0 ? false : _props$inset,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "color", "component", "disableGutters", "disableSticky", "inset"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, color !== 'default' && classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(color))], inset && classes.inset, !disableSticky && classes.sticky, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiListSubheader'
})(ListSubheader));

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

/***/ "o8k2":
/***/ (function(module, exports, __webpack_require__) {

//     JavaScript Expression Parser (JSEP) 0.3.5
//     JSEP may be freely distributed under the MIT License
//     https://ericsmekens.github.io/jsep/

/*global module: true, exports: true, console: true */
(function (root) {
  'use strict'; // Node Types
  // ----------
  // This is the full set of types that any JSEP node can be.
  // Store them here to save space when minified

  var COMPOUND = 'Compound',
      IDENTIFIER = 'Identifier',
      MEMBER_EXP = 'MemberExpression',
      LITERAL = 'Literal',
      THIS_EXP = 'ThisExpression',
      CALL_EXP = 'CallExpression',
      UNARY_EXP = 'UnaryExpression',
      BINARY_EXP = 'BinaryExpression',
      LOGICAL_EXP = 'LogicalExpression',
      CONDITIONAL_EXP = 'ConditionalExpression',
      ARRAY_EXP = 'ArrayExpression',
      PERIOD_CODE = 46,
      // '.'
  COMMA_CODE = 44,
      // ','
  SQUOTE_CODE = 39,
      // single quote
  DQUOTE_CODE = 34,
      // double quotes
  OPAREN_CODE = 40,
      // (
  CPAREN_CODE = 41,
      // )
  OBRACK_CODE = 91,
      // [
  CBRACK_CODE = 93,
      // ]
  QUMARK_CODE = 63,
      // ?
  SEMCOL_CODE = 59,
      // ;
  COLON_CODE = 58,
      // :
  throwError = function throwError(message, index) {
    var error = new Error(message + ' at character ' + index);
    error.index = index;
    error.description = message;
    throw error;
  },
      // Operations
  // ----------
  // Set `t` to `true` to save space (when minified, not gzipped)
  t = true,
      // Use a quickly-accessible map to store all of the unary operators
  // Values are set to `true` (it really doesn't matter)
  unary_ops = {
    '-': t,
    '!': t,
    '~': t,
    '+': t
  },
      // Also use a map for the binary operations but set their values to their
  // binary precedence for quick reference:
  // see [Order of operations](http://en.wikipedia.org/wiki/Order_of_operations#Programming_language)
  binary_ops = {
    '||': 1,
    '&&': 2,
    '|': 3,
    '^': 4,
    '&': 5,
    '==': 6,
    '!=': 6,
    '===': 6,
    '!==': 6,
    '<': 7,
    '>': 7,
    '<=': 7,
    '>=': 7,
    '<<': 8,
    '>>': 8,
    '>>>': 8,
    '+': 9,
    '-': 9,
    '*': 10,
    '/': 10,
    '%': 10
  },
      // Get return the longest key length of any object
  getMaxKeyLen = function getMaxKeyLen(obj) {
    var max_len = 0,
        len;

    for (var key in obj) {
      if ((len = key.length) > max_len && obj.hasOwnProperty(key)) {
        max_len = len;
      }
    }

    return max_len;
  },
      max_unop_len = getMaxKeyLen(unary_ops),
      max_binop_len = getMaxKeyLen(binary_ops),
      // Literals
  // ----------
  // Store the values to return for the various literals we may encounter
  literals = {
    'true': true,
    'false': false,
    'null': null
  },
      // Except for `this`, which is special. This could be changed to something like `'self'` as well
  this_str = 'this',
      // Returns the precedence of a binary operator or `0` if it isn't a binary operator
  binaryPrecedence = function binaryPrecedence(op_val) {
    return binary_ops[op_val] || 0;
  },
      // Utility function (gets called from multiple places)
  // Also note that `a && b` and `a || b` are *logical* expressions, not binary expressions
  createBinaryExpression = function createBinaryExpression(operator, left, right) {
    var type = operator === '||' || operator === '&&' ? LOGICAL_EXP : BINARY_EXP;
    return {
      type: type,
      operator: operator,
      left: left,
      right: right
    };
  },
      // `ch` is a character code in the next three functions
  isDecimalDigit = function isDecimalDigit(ch) {
    return ch >= 48 && ch <= 57; // 0...9
  },
      isIdentifierStart = function isIdentifierStart(ch) {
    return ch === 36 || ch === 95 || // `$` and `_`
    ch >= 65 && ch <= 90 || // A...Z
    ch >= 97 && ch <= 122 || // a...z
    ch >= 128 && !binary_ops[String.fromCharCode(ch)]; // any non-ASCII that is not an operator
  },
      isIdentifierPart = function isIdentifierPart(ch) {
    return ch === 36 || ch === 95 || // `$` and `_`
    ch >= 65 && ch <= 90 || // A...Z
    ch >= 97 && ch <= 122 || // a...z
    ch >= 48 && ch <= 57 || // 0...9
    ch >= 128 && !binary_ops[String.fromCharCode(ch)]; // any non-ASCII that is not an operator
  },
      // Parsing
  // -------
  // `expr` is a string with the passed in expression
  jsep = function jsep(expr) {
    // `index` stores the character number we are currently at while `length` is a constant
    // All of the gobbles below will modify `index` as we move along
    var index = 0,
        charAtFunc = expr.charAt,
        charCodeAtFunc = expr.charCodeAt,
        exprI = function exprI(i) {
      return charAtFunc.call(expr, i);
    },
        exprICode = function exprICode(i) {
      return charCodeAtFunc.call(expr, i);
    },
        length = expr.length,
        // Push `index` up to the next non-space character
    gobbleSpaces = function gobbleSpaces() {
      var ch = exprICode(index); // space or tab

      while (ch === 32 || ch === 9 || ch === 10 || ch === 13) {
        ch = exprICode(++index);
      }
    },
        // The main parsing function. Much of this code is dedicated to ternary expressions
    gobbleExpression = function gobbleExpression() {
      var test = gobbleBinaryExpression(),
          consequent,
          alternate;
      gobbleSpaces();

      if (exprICode(index) === QUMARK_CODE) {
        // Ternary expression: test ? consequent : alternate
        index++;
        consequent = gobbleExpression();

        if (!consequent) {
          throwError('Expected expression', index);
        }

        gobbleSpaces();

        if (exprICode(index) === COLON_CODE) {
          index++;
          alternate = gobbleExpression();

          if (!alternate) {
            throwError('Expected expression', index);
          }

          return {
            type: CONDITIONAL_EXP,
            test: test,
            consequent: consequent,
            alternate: alternate
          };
        } else {
          throwError('Expected :', index);
        }
      } else {
        return test;
      }
    },
        // Search for the operation portion of the string (e.g. `+`, `===`)
    // Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
    // and move down from 3 to 2 to 1 character until a matching binary operation is found
    // then, return that binary operation
    gobbleBinaryOp = function gobbleBinaryOp() {
      gobbleSpaces();
      var biop,
          to_check = expr.substr(index, max_binop_len),
          tc_len = to_check.length;

      while (tc_len > 0) {
        // Don't accept a binary op when it is an identifier.
        // Binary ops that start with a identifier-valid character must be followed
        // by a non identifier-part valid character
        if (binary_ops.hasOwnProperty(to_check) && (!isIdentifierStart(exprICode(index)) || index + to_check.length < expr.length && !isIdentifierPart(exprICode(index + to_check.length)))) {
          index += tc_len;
          return to_check;
        }

        to_check = to_check.substr(0, --tc_len);
      }

      return false;
    },
        // This function is responsible for gobbling an individual expression,
    // e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
    gobbleBinaryExpression = function gobbleBinaryExpression() {
      var ch_i, node, biop, prec, stack, biop_info, left, right, i, cur_biop; // First, try to get the leftmost thing
      // Then, check to see if there's a binary operator operating on that leftmost thing

      left = gobbleToken();
      biop = gobbleBinaryOp(); // If there wasn't a binary operator, just return the leftmost node

      if (!biop) {
        return left;
      } // Otherwise, we need to start a stack to properly place the binary operations in their
      // precedence structure


      biop_info = {
        value: biop,
        prec: binaryPrecedence(biop)
      };
      right = gobbleToken();

      if (!right) {
        throwError("Expected expression after " + biop, index);
      }

      stack = [left, biop_info, right]; // Properly deal with precedence using [recursive descent](http://www.engr.mun.ca/~theo/Misc/exp_parsing.htm)

      while (biop = gobbleBinaryOp()) {
        prec = binaryPrecedence(biop);

        if (prec === 0) {
          break;
        }

        biop_info = {
          value: biop,
          prec: prec
        };
        cur_biop = biop; // Reduce: make a binary expression from the three topmost entries.

        while (stack.length > 2 && prec <= stack[stack.length - 2].prec) {
          right = stack.pop();
          biop = stack.pop().value;
          left = stack.pop();
          node = createBinaryExpression(biop, left, right);
          stack.push(node);
        }

        node = gobbleToken();

        if (!node) {
          throwError("Expected expression after " + cur_biop, index);
        }

        stack.push(biop_info, node);
      }

      i = stack.length - 1;
      node = stack[i];

      while (i > 1) {
        node = createBinaryExpression(stack[i - 1].value, stack[i - 2], node);
        i -= 2;
      }

      return node;
    },
        // An individual part of a binary expression:
    // e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
    gobbleToken = function gobbleToken() {
      var ch, to_check, tc_len;
      gobbleSpaces();
      ch = exprICode(index);

      if (isDecimalDigit(ch) || ch === PERIOD_CODE) {
        // Char code 46 is a dot `.` which can start off a numeric literal
        return gobbleNumericLiteral();
      } else if (ch === SQUOTE_CODE || ch === DQUOTE_CODE) {
        // Single or double quotes
        return gobbleStringLiteral();
      } else if (ch === OBRACK_CODE) {
        return gobbleArray();
      } else {
        to_check = expr.substr(index, max_unop_len);
        tc_len = to_check.length;

        while (tc_len > 0) {
          // Don't accept an unary op when it is an identifier.
          // Unary ops that start with a identifier-valid character must be followed
          // by a non identifier-part valid character
          if (unary_ops.hasOwnProperty(to_check) && (!isIdentifierStart(exprICode(index)) || index + to_check.length < expr.length && !isIdentifierPart(exprICode(index + to_check.length)))) {
            index += tc_len;
            return {
              type: UNARY_EXP,
              operator: to_check,
              argument: gobbleToken(),
              prefix: true
            };
          }

          to_check = to_check.substr(0, --tc_len);
        }

        if (isIdentifierStart(ch) || ch === OPAREN_CODE) {
          // open parenthesis
          // `foo`, `bar.baz`
          return gobbleVariable();
        }
      }

      return false;
    },
        // Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
    // keep track of everything in the numeric literal and then calling `parseFloat` on that string
    gobbleNumericLiteral = function gobbleNumericLiteral() {
      var number = '',
          ch,
          chCode;

      while (isDecimalDigit(exprICode(index))) {
        number += exprI(index++);
      }

      if (exprICode(index) === PERIOD_CODE) {
        // can start with a decimal marker
        number += exprI(index++);

        while (isDecimalDigit(exprICode(index))) {
          number += exprI(index++);
        }
      }

      ch = exprI(index);

      if (ch === 'e' || ch === 'E') {
        // exponent marker
        number += exprI(index++);
        ch = exprI(index);

        if (ch === '+' || ch === '-') {
          // exponent sign
          number += exprI(index++);
        }

        while (isDecimalDigit(exprICode(index))) {
          //exponent itself
          number += exprI(index++);
        }

        if (!isDecimalDigit(exprICode(index - 1))) {
          throwError('Expected exponent (' + number + exprI(index) + ')', index);
        }
      }

      chCode = exprICode(index); // Check to make sure this isn't a variable name that start with a number (123abc)

      if (isIdentifierStart(chCode)) {
        throwError('Variable names cannot start with a number (' + number + exprI(index) + ')', index);
      } else if (chCode === PERIOD_CODE) {
        throwError('Unexpected period', index);
      }

      return {
        type: LITERAL,
        value: parseFloat(number),
        raw: number
      };
    },
        // Parses a string literal, staring with single or double quotes with basic support for escape codes
    // e.g. `"hello world"`, `'this is\nJSEP'`
    gobbleStringLiteral = function gobbleStringLiteral() {
      var str = '',
          quote = exprI(index++),
          closed = false,
          ch;

      while (index < length) {
        ch = exprI(index++);

        if (ch === quote) {
          closed = true;
          break;
        } else if (ch === '\\') {
          // Check for all of the common escape codes
          ch = exprI(index++);

          switch (ch) {
            case 'n':
              str += '\n';
              break;

            case 'r':
              str += '\r';
              break;

            case 't':
              str += '\t';
              break;

            case 'b':
              str += '\b';
              break;

            case 'f':
              str += '\f';
              break;

            case 'v':
              str += '\x0B';
              break;

            default:
              str += ch;
          }
        } else {
          str += ch;
        }
      }

      if (!closed) {
        throwError('Unclosed quote after "' + str + '"', index);
      }

      return {
        type: LITERAL,
        value: str,
        raw: quote + str + quote
      };
    },
        // Gobbles only identifiers
    // e.g.: `foo`, `_value`, `$x1`
    // Also, this function checks if that identifier is a literal:
    // (e.g. `true`, `false`, `null`) or `this`
    gobbleIdentifier = function gobbleIdentifier() {
      var ch = exprICode(index),
          start = index,
          identifier;

      if (isIdentifierStart(ch)) {
        index++;
      } else {
        throwError('Unexpected ' + exprI(index), index);
      }

      while (index < length) {
        ch = exprICode(index);

        if (isIdentifierPart(ch)) {
          index++;
        } else {
          break;
        }
      }

      identifier = expr.slice(start, index);

      if (literals.hasOwnProperty(identifier)) {
        return {
          type: LITERAL,
          value: literals[identifier],
          raw: identifier
        };
      } else if (identifier === this_str) {
        return {
          type: THIS_EXP
        };
      } else {
        return {
          type: IDENTIFIER,
          name: identifier
        };
      }
    },
        // Gobbles a list of arguments within the context of a function call
    // or array literal. This function also assumes that the opening character
    // `(` or `[` has already been gobbled, and gobbles expressions and commas
    // until the terminator character `)` or `]` is encountered.
    // e.g. `foo(bar, baz)`, `my_func()`, or `[bar, baz]`
    gobbleArguments = function gobbleArguments(termination) {
      var ch_i,
          args = [],
          node,
          closed = false;
      var separator_count = 0;

      while (index < length) {
        gobbleSpaces();
        ch_i = exprICode(index);

        if (ch_i === termination) {
          // done parsing
          closed = true;
          index++;

          if (termination === CPAREN_CODE && separator_count && separator_count >= args.length) {
            throwError('Unexpected token ' + String.fromCharCode(termination), index);
          }

          break;
        } else if (ch_i === COMMA_CODE) {
          // between expressions
          index++;
          separator_count++;

          if (separator_count !== args.length) {
            // missing argument
            if (termination === CPAREN_CODE) {
              throwError('Unexpected token ,', index);
            } else if (termination === CBRACK_CODE) {
              for (var arg = args.length; arg < separator_count; arg++) {
                args.push(null);
              }
            }
          }
        } else {
          node = gobbleExpression();

          if (!node || node.type === COMPOUND) {
            throwError('Expected comma', index);
          }

          args.push(node);
        }
      }

      if (!closed) {
        throwError('Expected ' + String.fromCharCode(termination), index);
      }

      return args;
    },
        // Gobble a non-literal variable name. This variable name may include properties
    // e.g. `foo`, `bar.baz`, `foo['bar'].baz`
    // It also gobbles function calls:
    // e.g. `Math.acos(obj.angle)`
    gobbleVariable = function gobbleVariable() {
      var ch_i, node;
      ch_i = exprICode(index);

      if (ch_i === OPAREN_CODE) {
        node = gobbleGroup();
      } else {
        node = gobbleIdentifier();
      }

      gobbleSpaces();
      ch_i = exprICode(index);

      while (ch_i === PERIOD_CODE || ch_i === OBRACK_CODE || ch_i === OPAREN_CODE) {
        index++;

        if (ch_i === PERIOD_CODE) {
          gobbleSpaces();
          node = {
            type: MEMBER_EXP,
            computed: false,
            object: node,
            property: gobbleIdentifier()
          };
        } else if (ch_i === OBRACK_CODE) {
          node = {
            type: MEMBER_EXP,
            computed: true,
            object: node,
            property: gobbleExpression()
          };
          gobbleSpaces();
          ch_i = exprICode(index);

          if (ch_i !== CBRACK_CODE) {
            throwError('Unclosed [', index);
          }

          index++;
        } else if (ch_i === OPAREN_CODE) {
          // A function call is being made; gobble all the arguments
          node = {
            type: CALL_EXP,
            'arguments': gobbleArguments(CPAREN_CODE),
            callee: node
          };
        }

        gobbleSpaces();
        ch_i = exprICode(index);
      }

      return node;
    },
        // Responsible for parsing a group of things within parentheses `()`
    // This function assumes that it needs to gobble the opening parenthesis
    // and then tries to gobble everything within that parenthesis, assuming
    // that the next thing it should see is the close parenthesis. If not,
    // then the expression probably doesn't have a `)`
    gobbleGroup = function gobbleGroup() {
      index++;
      var node = gobbleExpression();
      gobbleSpaces();

      if (exprICode(index) === CPAREN_CODE) {
        index++;
        return node;
      } else {
        throwError('Unclosed (', index);
      }
    },
        // Responsible for parsing Array literals `[1, 2, 3]`
    // This function assumes that it needs to gobble the opening bracket
    // and then tries to gobble the expressions as arguments.
    gobbleArray = function gobbleArray() {
      index++;
      return {
        type: ARRAY_EXP,
        elements: gobbleArguments(CBRACK_CODE)
      };
    },
        nodes = [],
        ch_i,
        node;

    while (index < length) {
      ch_i = exprICode(index); // Expressions can be separated by semicolons, commas, or just inferred without any
      // separators

      if (ch_i === SEMCOL_CODE || ch_i === COMMA_CODE) {
        index++; // ignore separators
      } else {
        // Try to gobble each expression individually
        if (node = gobbleExpression()) {
          nodes.push(node); // If we weren't able to find a binary expression and are out of room, then
          // the expression passed in probably has too much
        } else if (index < length) {
          throwError('Unexpected "' + exprI(index) + '"', index);
        }
      }
    } // If there's only one expression just try returning the expression


    if (nodes.length === 1) {
      return nodes[0];
    } else {
      return {
        type: COMPOUND,
        body: nodes
      };
    }
  }; // To be filled in by the template


  jsep.version = '0.3.5';

  jsep.toString = function () {
    return 'JavaScript Expression Parser (JSEP) v' + jsep.version;
  };
  /**
   * @method jsep.addUnaryOp
   * @param {string} op_name The name of the unary op to add
   * @return jsep
   */


  jsep.addUnaryOp = function (op_name) {
    max_unop_len = Math.max(op_name.length, max_unop_len);
    unary_ops[op_name] = t;
    return this;
  };
  /**
   * @method jsep.addBinaryOp
   * @param {string} op_name The name of the binary op to add
   * @param {number} precedence The precedence of the binary op (can be a float)
   * @return jsep
   */


  jsep.addBinaryOp = function (op_name, precedence) {
    max_binop_len = Math.max(op_name.length, max_binop_len);
    binary_ops[op_name] = precedence;
    return this;
  };
  /**
   * @method jsep.addLiteral
   * @param {string} literal_name The name of the literal to add
   * @param {*} literal_value The value of the literal
   * @return jsep
   */


  jsep.addLiteral = function (literal_name, literal_value) {
    literals[literal_name] = literal_value;
    return this;
  };
  /**
   * @method jsep.removeUnaryOp
   * @param {string} op_name The name of the unary op to remove
   * @return jsep
   */


  jsep.removeUnaryOp = function (op_name) {
    delete unary_ops[op_name];

    if (op_name.length === max_unop_len) {
      max_unop_len = getMaxKeyLen(unary_ops);
    }

    return this;
  };
  /**
   * @method jsep.removeAllUnaryOps
   * @return jsep
   */


  jsep.removeAllUnaryOps = function () {
    unary_ops = {};
    max_unop_len = 0;
    return this;
  };
  /**
   * @method jsep.removeBinaryOp
   * @param {string} op_name The name of the binary op to remove
   * @return jsep
   */


  jsep.removeBinaryOp = function (op_name) {
    delete binary_ops[op_name];

    if (op_name.length === max_binop_len) {
      max_binop_len = getMaxKeyLen(binary_ops);
    }

    return this;
  };
  /**
   * @method jsep.removeAllBinaryOps
   * @return jsep
   */


  jsep.removeAllBinaryOps = function () {
    binary_ops = {};
    max_binop_len = 0;
    return this;
  };
  /**
   * @method jsep.removeLiteral
   * @param {string} literal_name The name of the literal to remove
   * @return jsep
   */


  jsep.removeLiteral = function (literal_name) {
    delete literals[literal_name];
    return this;
  };
  /**
   * @method jsep.removeAllLiterals
   * @return jsep
   */


  jsep.removeAllLiterals = function () {
    literals = {};
    return this;
  }; // In desktop environments, have a way to restore the old value for `jsep`


  if (false) { var old_jsep; } else {
    // In Node.JS environments
    if ( true && module.exports) {
      exports = module.exports = jsep;
    } else {
      exports.parse = jsep;
    }
  }
})(this);

/***/ }),

/***/ "rNA1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return serviceTestFromServiceClass; });
/* harmony import */ var _jacdac_spec_dist_services_tests_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("sh2y");
var _jacdac_spec_dist_services_tests_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t("sh2y", 1);
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../jacdac-spec/spectool/jdspec.d.ts" />
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../jacdac-spec/spectool/jdtest.d.ts" />
 // eslint-disable-next-line @typescript-eslint/no-explicit-any

var _serviceTests = _jacdac_spec_dist_services_tests_json__WEBPACK_IMPORTED_MODULE_0__;
/**
 * Given a service specification, see if it has a test
 * @param spec
 */

function serviceTestFromServiceClass(serviceClass) {
  return serviceClass !== undefined && _serviceTests.find(function (test) {
    return test.serviceClassIdentifier === serviceClass;
  });
}

/***/ }),

/***/ "rsPu":
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
  d: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"
}), 'HourglassEmpty');

exports.default = _default;

/***/ }),

/***/ "sh2y":
/***/ (function(module) {

module.exports = JSON.parse("[{\"description\":\"Base tests\",\"serviceClassIdentifier\":536870899,\"tests\":[]},{\"description\":\"Sensor tests\",\"serviceClassIdentifier\":536870898,\"tests\":[]},{\"description\":\"Button tests\",\"serviceClassIdentifier\":343122531,\"tests\":[{\"description\":\"downUp: press down and up\",\"registers\":[],\"commands\":[{\"prompt\":\"press the button and release it immediately\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"did you observe an Up event, followed by a Down event?\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]},{\"description\":\"click: click the button\",\"registers\":[],\"commands\":[{\"prompt\":\"press the button down for 500ms and less than 1500ms and release it\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"did you observe a Click event?\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]},{\"description\":\"long click: hold the button\",\"registers\":[],\"commands\":[{\"prompt\":\"press the button down at least 1500ms and release it\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"did you observe a LongClick event?\\\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]}]},{\"description\":\"Potentiometer tests\",\"serviceClassIdentifier\":522667846,\"tests\":[{\"description\":\"position changes on movement\",\"registers\":[],\"commands\":[{\"prompt\":\"move the slider/potentiometer\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"did the position register's value change?\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]}]},{\"description\":\"Rotary encoder tests\",\"serviceClassIdentifier\":284830153,\"tests\":[{\"description\":\"knob turn\",\"registers\":[\"position\"],\"commands\":[{\"prompt\":\"turn the knob back and forth\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"changes\"}}}]},{\"description\":\"clockwise turn\",\"registers\":[\"position\"],\"commands\":[{\"prompt\":\"turn the knob clockwise\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"increases\"}}}]},{\"description\":\"counter-clockwise turn\",\"registers\":[\"position\"],\"commands\":[{\"prompt\":\"turn the knob counter-clockwise\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"decreases\"}}}]},{\"description\":\"one rotation clockwise\",\"registers\":[\"position\",\"clicks_per_turn\"],\"commands\":[{\"prompt\":\"turn one complete rotation clockwise\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"Identifier\",\"name\":\"clicks_per_turn\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"increasesBy\"}}}]},{\"description\":\"one rotation counter-clockwise\",\"registers\":[\"position\",\"clicks_per_turn\"],\"commands\":[{\"prompt\":\"turn one complete rotation counter-clockwise\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"Identifier\",\"name\":\"clicks_per_turn\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"decreasesBy\"}}}]},{\"description\":\"no missing value clockwise\",\"registers\":[\"position\",\"clicks_per_turn\"],\"commands\":[{\"prompt\":\"slowly turn clockwise one complete rotation\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"Identifier\",\"name\":\"position\"},\"right\":{\"type\":\"Identifier\",\"name\":\"clicks_per_turn\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"rangesFromUpTo\"}}},{\"prompt\":\"is the knob at the same physical position?\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]},{\"description\":\"no missing value counter-clockwise\",\"registers\":[\"position\",\"clicks_per_turn\"],\"commands\":[{\"prompt\":\"slowly turn counter-clockwise one complete rotation\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"BinaryExpression\",\"operator\":\"-\",\"left\":{\"type\":\"Identifier\",\"name\":\"position\"},\"right\":{\"type\":\"Identifier\",\"name\":\"clicks_per_turn\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"rangesFromDownTo\"}}}]},{\"description\":\"reset test\",\"registers\":[\"position\"],\"commands\":[{\"prompt\":\"reset test (automated)\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"reset\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"==\",\"left\":{\"type\":\"Identifier\",\"name\":\"position\"},\"right\":{\"type\":\"Literal\",\"value\":0,\"raw\":\"0\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"check\"}}}]}]}]");

/***/ })

}]);
//# sourceMappingURL=859a83de993caea7524bf57c2975f3be6812c8c3-da1283220d5fe5a2ddce.js.map