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

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/eventsource.ts
var eventsource = __webpack_require__("033P");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/serviceclient.ts
var serviceclient = __webpack_require__("eoX3");

// EXTERNAL MODULE: ./jacdac-ts/node_modules/jsonpath-plus/dist/index-browser-esm.js
var index_browser_esm = __webpack_require__("faLi");

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
    this._progress = 0.0;
    this._status = JDCommandStatus.Active;
    this._startExpressions = [];
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
          startExprs = Object(index_browser_esm["a" /* JSONPath */])({
            path: "$..*[?(@.type=='CallExpression')]",
            json: args
          }).filter(function (ce) {
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
    this._progress = undefined;

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

          var _ref = testFun.id === "changes" && regValue !== regSaved.v || testFun.id === "increases" && regValue > regSaved.v || testFun.id === "decreases" && regValue < regSaved.v ? [JDCommandStatus.Passed, 1.0] : [JDCommandStatus.Active, 0.0],
              status = _ref[0],
              progress = _ref[1];

          this._status = status;
          this._progress = progress;
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
              this._progress = 1.0;
            } else if (_regValue >= _regSaved.v && _regValue < _regSaved.v.v + amtSaved.v) {
              this._status = JDCommandStatus.Active;
              this._progress = (_regValue - _regSaved.v) / amtSaved.v;
            } else {
              this._status = JDCommandStatus.Active;
            }
          } else {
            if (_regValue === _regSaved.v - amtSaved.v) {
              this._status = JDCommandStatus.Passed;
              this._progress = 1.0;
            } else if (_regValue <= _regSaved.v && _regValue > _regSaved.v.v - amtSaved.v) {
              this._status = JDCommandStatus.Active;
              this._progress = (_regSaved.v - _regValue) / amtSaved.v;
            } else {
              this._status = JDCommandStatus.Active;
            }
          }

          break;
        }

      case "rangesFromUpTo":
      case "rangesFromDownTo":
        {
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
      progress: 0.0
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
      progress: 0.0
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
      if (finish) this.finish(this._commmandEvaluator.status);
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

// EXTERNAL MODULE: ./src/components/dashboard/DashboardDevice.tsx + 1 modules
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
    secondary: !progress ? "" : progress.toString()
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
  }, "Sorry, there are no tests available for service", " ", service.friendlyName, ".");
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

/***/ "faLi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JSONPath; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
/* eslint-disable unicorn/prefer-spread -- IIRC, Babel's performance
  with this not good */


var hasOwnProp = Object.prototype.hasOwnProperty;
/**
* @typedef {null|boolean|number|string|PlainObject|GenericArray} JSONObject
*/

/**
 * Copies array and then pushes item into it.
 * @param {GenericArray} arr Array to copy and into which to push
 * @param {any} item Array item to add (to end)
 * @returns {GenericArray} Copy of the original array
 */

function push(arr, item) {
  arr = arr.slice();
  arr.push(item);
  return arr;
}
/**
 * Copies array and then unshifts item into it.
 * @param {any} item Array item to add (to beginning)
 * @param {GenericArray} arr Array to copy and into which to unshift
 * @returns {GenericArray} Copy of the original array
 */


function unshift(item, arr) {
  arr = arr.slice();
  arr.unshift(item);
  return arr;
}
/**
 * Caught when JSONPath is used without `new` but rethrown if with `new`
 * @extends Error
 */


var NewError = /*#__PURE__*/function (_Error) {
  _inherits(NewError, _Error);

  var _super = _createSuper(NewError);
  /**
   * @param {any} value The evaluated scalar value
   */


  function NewError(value) {
    var _this;

    _classCallCheck(this, NewError);

    _this = _super.call(this, 'JSONPath should not be called with "new" (it prevents return ' + 'of (unwrapped) scalar values)');
    _this.avoidNew = true;
    _this.value = value;
    _this.name = 'NewError';
    return _this;
  }

  return NewError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
* @typedef {PlainObject} ReturnObject
* @property {string} path
* @property {JSONObject} value
* @property {PlainObject|GenericArray} parent
* @property {string} parentProperty
*/

/**
* @callback JSONPathCallback
* @param {string|PlainObject} preferredOutput
* @param {"value"|"property"} type
* @param {ReturnObject} fullRetObj
* @returns {void}
*/

/**
* @callback OtherTypeCallback
* @param {JSONObject} val
* @param {string} path
* @param {PlainObject|GenericArray} parent
* @param {string} parentPropName
* @returns {boolean}
*/

/* eslint-disable max-len -- Can make multiline type after https://github.com/syavorsky/comment-parser/issues/109 */

/**
 * @typedef {PlainObject} JSONPathOptions
 * @property {JSON} json
 * @property {string|string[]} path
 * @property {"value"|"path"|"pointer"|"parent"|"parentProperty"|"all"} [resultType="value"]
 * @property {boolean} [flatten=false]
 * @property {boolean} [wrap=true]
 * @property {PlainObject} [sandbox={}]
 * @property {boolean} [preventEval=false]
 * @property {PlainObject|GenericArray|null} [parent=null]
 * @property {string|null} [parentProperty=null]
 * @property {JSONPathCallback} [callback]
 * @property {OtherTypeCallback} [otherTypeCallback] Defaults to
 *   function which throws on encountering `@other`
 * @property {boolean} [autostart=true]
 */

/* eslint-enable max-len -- Can make multiline type after https://github.com/syavorsky/comment-parser/issues/109 */

/**
 * @param {string|JSONPathOptions} opts If a string, will be treated as `expr`
 * @param {string} [expr] JSON path to evaluate
 * @param {JSON} [obj] JSON object to evaluate against
 * @param {JSONPathCallback} [callback] Passed 3 arguments: 1) desired payload
 *     per `resultType`, 2) `"value"|"property"`, 3) Full returned object with
 *     all payloads
 * @param {OtherTypeCallback} [otherTypeCallback] If `@other()` is at the end
 *   of one's query, this will be invoked with the value of the item, its
 *   path, its parent, and its parent's property name, and it should return
 *   a boolean indicating whether the supplied value belongs to the "other"
 *   type or not (or it may handle transformations and return `false`).
 * @returns {JSONPath}
 * @class
 */


function JSONPath(opts, expr, obj, callback, otherTypeCallback) {
  // eslint-disable-next-line no-restricted-syntax
  if (!(this instanceof JSONPath)) {
    try {
      return new JSONPath(opts, expr, obj, callback, otherTypeCallback);
    } catch (e) {
      if (!e.avoidNew) {
        throw e;
      }

      return e.value;
    }
  }

  if (typeof opts === 'string') {
    otherTypeCallback = callback;
    callback = obj;
    obj = expr;
    expr = opts;
    opts = null;
  }

  var optObj = opts && _typeof(opts) === 'object';
  opts = opts || {};
  this.json = opts.json || obj;
  this.path = opts.path || expr;
  this.resultType = opts.resultType || 'value';
  this.flatten = opts.flatten || false;
  this.wrap = hasOwnProp.call(opts, 'wrap') ? opts.wrap : true;
  this.sandbox = opts.sandbox || {};
  this.preventEval = opts.preventEval || false;
  this.parent = opts.parent || null;
  this.parentProperty = opts.parentProperty || null;
  this.callback = opts.callback || callback || null;

  this.otherTypeCallback = opts.otherTypeCallback || otherTypeCallback || function () {
    throw new TypeError('You must supply an otherTypeCallback callback option ' + 'with the @other() operator.');
  };

  if (opts.autostart !== false) {
    var args = {
      path: optObj ? opts.path : expr
    };

    if (!optObj) {
      args.json = obj;
    } else if ('json' in opts) {
      args.json = opts.json;
    }

    var ret = this.evaluate(args);

    if (!ret || _typeof(ret) !== 'object') {
      throw new NewError(ret);
    }

    return ret;
  }
} // PUBLIC METHODS


JSONPath.prototype.evaluate = function (expr, json, callback, otherTypeCallback) {
  var _this2 = this;

  var currParent = this.parent,
      currParentProperty = this.parentProperty;
  var flatten = this.flatten,
      wrap = this.wrap;
  this.currResultType = this.resultType;
  this.currPreventEval = this.preventEval;
  this.currSandbox = this.sandbox;
  callback = callback || this.callback;
  this.currOtherTypeCallback = otherTypeCallback || this.otherTypeCallback;
  json = json || this.json;
  expr = expr || this.path;

  if (expr && _typeof(expr) === 'object' && !Array.isArray(expr)) {
    if (!expr.path && expr.path !== '') {
      throw new TypeError('You must supply a "path" property when providing an object ' + 'argument to JSONPath.evaluate().');
    }

    if (!hasOwnProp.call(expr, 'json')) {
      throw new TypeError('You must supply a "json" property when providing an object ' + 'argument to JSONPath.evaluate().');
    }

    var _expr = expr;
    json = _expr.json;
    flatten = hasOwnProp.call(expr, 'flatten') ? expr.flatten : flatten;
    this.currResultType = hasOwnProp.call(expr, 'resultType') ? expr.resultType : this.currResultType;
    this.currSandbox = hasOwnProp.call(expr, 'sandbox') ? expr.sandbox : this.currSandbox;
    wrap = hasOwnProp.call(expr, 'wrap') ? expr.wrap : wrap;
    this.currPreventEval = hasOwnProp.call(expr, 'preventEval') ? expr.preventEval : this.currPreventEval;
    callback = hasOwnProp.call(expr, 'callback') ? expr.callback : callback;
    this.currOtherTypeCallback = hasOwnProp.call(expr, 'otherTypeCallback') ? expr.otherTypeCallback : this.currOtherTypeCallback;
    currParent = hasOwnProp.call(expr, 'parent') ? expr.parent : currParent;
    currParentProperty = hasOwnProp.call(expr, 'parentProperty') ? expr.parentProperty : currParentProperty;
    expr = expr.path;
  }

  currParent = currParent || null;
  currParentProperty = currParentProperty || null;

  if (Array.isArray(expr)) {
    expr = JSONPath.toPathString(expr);
  }

  if (!expr && expr !== '' || !json) {
    return undefined;
  }

  var exprList = JSONPath.toPathArray(expr);

  if (exprList[0] === '$' && exprList.length > 1) {
    exprList.shift();
  }

  this._hasParentSelector = null;

  var result = this._trace(exprList, json, ['$'], currParent, currParentProperty, callback).filter(function (ea) {
    return ea && !ea.isParentSelector;
  });

  if (!result.length) {
    return wrap ? [] : undefined;
  }

  if (!wrap && result.length === 1 && !result[0].hasArrExpr) {
    return this._getPreferredOutput(result[0]);
  }

  return result.reduce(function (rslt, ea) {
    var valOrPath = _this2._getPreferredOutput(ea);

    if (flatten && Array.isArray(valOrPath)) {
      rslt = rslt.concat(valOrPath);
    } else {
      rslt.push(valOrPath);
    }

    return rslt;
  }, []);
}; // PRIVATE METHODS


JSONPath.prototype._getPreferredOutput = function (ea) {
  var resultType = this.currResultType;

  switch (resultType) {
    case 'all':
      {
        var path = Array.isArray(ea.path) ? ea.path : JSONPath.toPathArray(ea.path);
        ea.pointer = JSONPath.toPointer(path);
        ea.path = typeof ea.path === 'string' ? ea.path : JSONPath.toPathString(ea.path);
        return ea;
      }

    case 'value':
    case 'parent':
    case 'parentProperty':
      return ea[resultType];

    case 'path':
      return JSONPath.toPathString(ea[resultType]);

    case 'pointer':
      return JSONPath.toPointer(ea.path);

    default:
      throw new TypeError('Unknown result type');
  }
};

JSONPath.prototype._handleCallback = function (fullRetObj, callback, type) {
  if (callback) {
    var preferredOutput = this._getPreferredOutput(fullRetObj);

    fullRetObj.path = typeof fullRetObj.path === 'string' ? fullRetObj.path : JSONPath.toPathString(fullRetObj.path); // eslint-disable-next-line node/callback-return

    callback(preferredOutput, type, fullRetObj);
  }
};
/**
 *
 * @param {string} expr
 * @param {JSONObject} val
 * @param {string} path
 * @param {PlainObject|GenericArray} parent
 * @param {string} parentPropName
 * @param {JSONPathCallback} callback
 * @param {boolean} hasArrExpr
 * @param {boolean} literalPriority
 * @returns {ReturnObject|ReturnObject[]}
 */


JSONPath.prototype._trace = function (expr, val, path, parent, parentPropName, callback, hasArrExpr, literalPriority) {
  var _this3 = this; // No expr to follow? return path and value as the result of
  //  this trace branch


  var retObj;

  if (!expr.length) {
    retObj = {
      path: path,
      value: val,
      parent: parent,
      parentProperty: parentPropName,
      hasArrExpr: hasArrExpr
    };

    this._handleCallback(retObj, callback, 'value');

    return retObj;
  }

  var loc = expr[0],
      x = expr.slice(1); // We need to gather the return value of recursive trace calls in order to
  // do the parent sel computation.

  var ret = [];
  /**
   *
   * @param {ReturnObject|ReturnObject[]} elems
   * @returns {void}
   */

  function addRet(elems) {
    if (Array.isArray(elems)) {
      // This was causing excessive stack size in Node (with or
      //  without Babel) against our performance test:
      //  `ret.push(...elems);`
      elems.forEach(function (t) {
        ret.push(t);
      });
    } else {
      ret.push(elems);
    }
  }

  if ((typeof loc !== 'string' || literalPriority) && val && hasOwnProp.call(val, loc)) {
    // simple case--directly follow property
    addRet(this._trace(x, val[loc], push(path, loc), val, loc, callback, hasArrExpr));
  } else if (loc === '*') {
    // all child properties
    this._walk(loc, x, val, path, parent, parentPropName, callback, function (m, l, _x, v, p, par, pr, cb) {
      addRet(_this3._trace(unshift(m, _x), v, p, par, pr, cb, true, true));
    });
  } else if (loc === '..') {
    // all descendent parent properties
    // Check remaining expression with val's immediate children
    addRet(this._trace(x, val, path, parent, parentPropName, callback, hasArrExpr));

    this._walk(loc, x, val, path, parent, parentPropName, callback, function (m, l, _x, v, p, par, pr, cb) {
      // We don't join m and x here because we only want parents,
      //   not scalar values
      if (_typeof(v[m]) === 'object') {
        // Keep going with recursive descent on val's
        //   object children
        addRet(_this3._trace(unshift(l, _x), v[m], push(p, m), v, m, cb, true));
      }
    }); // The parent sel computation is handled in the frame above using the
    // ancestor object of val

  } else if (loc === '^') {
    // This is not a final endpoint, so we do not invoke the callback here
    this._hasParentSelector = true;
    return {
      path: path.slice(0, -1),
      expr: x,
      isParentSelector: true
    };
  } else if (loc === '~') {
    // property name
    retObj = {
      path: push(path, loc),
      value: parentPropName,
      parent: parent,
      parentProperty: null
    };

    this._handleCallback(retObj, callback, 'property');

    return retObj;
  } else if (loc === '$') {
    // root only
    addRet(this._trace(x, val, path, null, null, callback, hasArrExpr));
  } else if (/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(loc)) {
    // [start:end:step]  Python slice syntax
    addRet(this._slice(loc, x, val, path, parent, parentPropName, callback));
  } else if (loc.indexOf('?(') === 0) {
    // [?(expr)] (filtering)
    if (this.currPreventEval) {
      throw new Error('Eval [?(expr)] prevented in JSONPath expression.');
    }

    this._walk(loc, x, val, path, parent, parentPropName, callback, function (m, l, _x, v, p, par, pr, cb) {
      if (_this3._eval(l.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/, '$1'), v[m], m, p, par, pr)) {
        addRet(_this3._trace(unshift(m, _x), v, p, par, pr, cb, true));
      }
    });
  } else if (loc[0] === '(') {
    // [(expr)] (dynamic property/index)
    if (this.currPreventEval) {
      throw new Error('Eval [(expr)] prevented in JSONPath expression.');
    } // As this will resolve to a property name (but we don't know it
    //  yet), property and parent information is relative to the
    //  parent of the property to which this expression will resolve


    addRet(this._trace(unshift(this._eval(loc, val, path[path.length - 1], path.slice(0, -1), parent, parentPropName), x), val, path, parent, parentPropName, callback, hasArrExpr));
  } else if (loc[0] === '@') {
    // value type: @boolean(), etc.
    var addType = false;
    var valueType = loc.slice(1, -2);

    switch (valueType) {
      case 'scalar':
        if (!val || !['object', 'function'].includes(_typeof(val))) {
          addType = true;
        }

        break;

      case 'boolean':
      case 'string':
      case 'undefined':
      case 'function':
        // eslint-disable-next-line valid-typeof
        if (_typeof(val) === valueType) {
          addType = true;
        }

        break;

      case 'integer':
        if (Number.isFinite(val) && !(val % 1)) {
          addType = true;
        }

        break;

      case 'number':
        if (Number.isFinite(val)) {
          addType = true;
        }

        break;

      case 'nonFinite':
        if (typeof val === 'number' && !Number.isFinite(val)) {
          addType = true;
        }

        break;

      case 'object':
        // eslint-disable-next-line valid-typeof
        if (val && _typeof(val) === valueType) {
          addType = true;
        }

        break;

      case 'array':
        if (Array.isArray(val)) {
          addType = true;
        }

        break;

      case 'other':
        addType = this.currOtherTypeCallback(val, path, parent, parentPropName);
        break;

      case 'null':
        if (val === null) {
          addType = true;
        }

        break;

      /* istanbul ignore next */

      default:
        throw new TypeError('Unknown value type ' + valueType);
    }

    if (addType) {
      retObj = {
        path: path,
        value: val,
        parent: parent,
        parentProperty: parentPropName
      };

      this._handleCallback(retObj, callback, 'value');

      return retObj;
    } // `-escaped property

  } else if (loc[0] === '`' && val && hasOwnProp.call(val, loc.slice(1))) {
    var locProp = loc.slice(1);
    addRet(this._trace(x, val[locProp], push(path, locProp), val, locProp, callback, hasArrExpr, true));
  } else if (loc.includes(',')) {
    // [name1,name2,...]
    var parts = loc.split(',');

    var _iterator = _createForOfIteratorHelper(parts),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var part = _step.value;
        addRet(this._trace(unshift(part, x), val, path, parent, parentPropName, callback, true));
      } // simple case--directly follow property

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else if (!literalPriority && val && hasOwnProp.call(val, loc)) {
    addRet(this._trace(x, val[loc], push(path, loc), val, loc, callback, hasArrExpr, true));
  } // We check the resulting values for parent selections. For parent
  // selections we discard the value object and continue the trace with the
  // current val object


  if (this._hasParentSelector) {
    for (var t = 0; t < ret.length; t++) {
      var rett = ret[t];

      if (rett && rett.isParentSelector) {
        var tmp = this._trace(rett.expr, val, rett.path, parent, parentPropName, callback, hasArrExpr);

        if (Array.isArray(tmp)) {
          ret[t] = tmp[0];
          var tl = tmp.length;

          for (var tt = 1; tt < tl; tt++) {
            t++;
            ret.splice(t, 0, tmp[tt]);
          }
        } else {
          ret[t] = tmp;
        }
      }
    }
  }

  return ret;
};

JSONPath.prototype._walk = function (loc, expr, val, path, parent, parentPropName, callback, f) {
  if (Array.isArray(val)) {
    var n = val.length;

    for (var i = 0; i < n; i++) {
      f(i, loc, expr, val, path, parent, parentPropName, callback);
    }
  } else if (val && _typeof(val) === 'object') {
    Object.keys(val).forEach(function (m) {
      f(m, loc, expr, val, path, parent, parentPropName, callback);
    });
  }
};

JSONPath.prototype._slice = function (loc, expr, val, path, parent, parentPropName, callback) {
  if (!Array.isArray(val)) {
    return undefined;
  }

  var len = val.length,
      parts = loc.split(':'),
      step = parts[2] && Number.parseInt(parts[2]) || 1;
  var start = parts[0] && Number.parseInt(parts[0]) || 0,
      end = parts[1] && Number.parseInt(parts[1]) || len;
  start = start < 0 ? Math.max(0, start + len) : Math.min(len, start);
  end = end < 0 ? Math.max(0, end + len) : Math.min(len, end);
  var ret = [];

  for (var i = start; i < end; i += step) {
    var tmp = this._trace(unshift(i, expr), val, path, parent, parentPropName, callback, true); // Should only be possible to be an array here since first part of
    //   ``unshift(i, expr)` passed in above would not be empty, nor `~`,
    //     nor begin with `@` (as could return objects)
    // This was causing excessive stack size in Node (with or
    //  without Babel) against our performance test: `ret.push(...tmp);`


    tmp.forEach(function (t) {
      ret.push(t);
    });
  }

  return ret;
};

JSONPath.prototype._eval = function (code, _v, _vname, path, parent, parentPropName) {
  if (code.includes('@parentProperty')) {
    this.currSandbox._$_parentProperty = parentPropName;
    code = code.replace(/@parentProperty/g, '_$_parentProperty');
  }

  if (code.includes('@parent')) {
    this.currSandbox._$_parent = parent;
    code = code.replace(/@parent/g, '_$_parent');
  }

  if (code.includes('@property')) {
    this.currSandbox._$_property = _vname;
    code = code.replace(/@property/g, '_$_property');
  }

  if (code.includes('@path')) {
    this.currSandbox._$_path = JSONPath.toPathString(path.concat([_vname]));
    code = code.replace(/@path/g, '_$_path');
  }

  if (code.includes('@root')) {
    this.currSandbox._$_root = this.json;
    code = code.replace(/@root/g, '_$_root');
  }

  if (/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/.test(code)) {
    this.currSandbox._$_v = _v;
    code = code.replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g, '_$_v$1');
  }

  try {
    return this.vm.runInNewContext(code, this.currSandbox);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    throw new Error('jsonPath: ' + e.message + ': ' + code);
  }
}; // PUBLIC CLASS PROPERTIES AND METHODS
// Could store the cache object itself


JSONPath.cache = {};
/**
 * @param {string[]} pathArr Array to convert
 * @returns {string} The path string
 */

JSONPath.toPathString = function (pathArr) {
  var x = pathArr,
      n = x.length;
  var p = '$';

  for (var i = 1; i < n; i++) {
    if (!/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(x[i])) {
      p += /^[\*0-9]+$/.test(x[i]) ? '[' + x[i] + ']' : "['" + x[i] + "']";
    }
  }

  return p;
};
/**
 * @param {string} pointer JSON Path
 * @returns {string} JSON Pointer
 */


JSONPath.toPointer = function (pointer) {
  var x = pointer,
      n = x.length;
  var p = '';

  for (var i = 1; i < n; i++) {
    if (!/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(x[i])) {
      p += '/' + x[i].toString().replace(/~/g, '~0').replace(/\//g, '~1');
    }
  }

  return p;
};
/**
 * @param {string} expr Expression to convert
 * @returns {string[]}
 */


JSONPath.toPathArray = function (expr) {
  var cache = JSONPath.cache;

  if (cache[expr]) {
    return cache[expr].concat();
  }

  var subx = [];
  var normalized = expr // Properties
  .replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g, ';$&;') // Parenthetical evaluations (filtering and otherwise), directly
  //   within brackets or single quotes
  .replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]]/g, function ($0, $1) {
    return '[#' + (subx.push($1) - 1) + ']';
  }) // Escape periods and tildes within properties
  .replace(/\['((?:(?!['\]])[\s\S])*)'\]/g, function ($0, prop) {
    return "['" + prop.replace(/\./g, '%@%').replace(/~/g, '%%@@%%') + "']";
  }) // Properties operator
  .replace(/~/g, ';~;') // Split by property boundaries
  .replace(/'?\.'?(?!(?:(?!\[)[\s\S])*\])|\['?/g, ';') // Reinsert periods within properties
  .replace(/%@%/g, '.') // Reinsert tildes within properties
  .replace(/%%@@%%/g, '~') // Parent
  .replace(/(?:;)?(\^+)(?:;)?/g, function ($0, ups) {
    return ';' + ups.split('').join(';') + ';';
  }) // Descendents
  .replace(/;;;|;;/g, ';..;') // Remove trailing
  .replace(/;$|'?\]|'$/g, '');
  var exprList = normalized.split(';').map(function (exp) {
    var match = exp.match(/#([0-9]+)/);
    return !match || !match[1] ? exp : subx[match[1]];
  });
  cache[expr] = exprList;
  return cache[expr];
};
/**
* @callback ConditionCallback
* @param {any} item
* @returns {boolean}
*/

/**
 * Copy items out of one array into another.
 * @param {GenericArray} source Array with items to copy
 * @param {GenericArray} target Array to which to copy
 * @param {ConditionCallback} conditionCb Callback passed the current item;
 *     will move item if evaluates to `true`
 * @returns {void}
 */


var moveToAnotherArray = function moveToAnotherArray(source, target, conditionCb) {
  var il = source.length;

  for (var i = 0; i < il; i++) {
    var item = source[i];

    if (conditionCb(item)) {
      target.push(source.splice(i--, 1)[0]);
    }
  }
};

JSONPath.prototype.vm = {
  /**
   * @param {string} expr Expression to evaluate
   * @param {PlainObject} context Object whose items will be added
   *   to evaluation
   * @returns {any} Result of evaluated code
   */
  runInNewContext: function runInNewContext(expr, context) {
    var keys = Object.keys(context);
    var funcs = [];
    moveToAnotherArray(keys, funcs, function (key) {
      return typeof context[key] === 'function';
    });
    var values = keys.map(function (vr, i) {
      return context[vr];
    });
    var funcString = funcs.reduce(function (s, func) {
      var fString = context[func].toString();

      if (!/function/.test(fString)) {
        fString = 'function ' + fString;
      }

      return 'var ' + func + '=' + fString + ';' + s;
    }, '');
    expr = funcString + expr; // Mitigate http://perfectionkills.com/global-eval-what-are-the-options/#new_function

    if (!/(["'])use strict\1/.test(expr) && !keys.includes('arguments')) {
      expr = 'var arguments = undefined;' + expr;
    } // Remove last semi so `return` will be inserted before
    //  the previous one instead, allowing for the return
    //  of a bare ending expression


    expr = expr.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/, ''); // Insert `return`

    var lastStatementEnd = expr.lastIndexOf(';');
    var code = lastStatementEnd > -1 ? expr.slice(0, lastStatementEnd + 1) + ' return ' + expr.slice(lastStatementEnd + 1) : ' return ' + expr; // eslint-disable-next-line no-new-func

    return _construct(Function, _toConsumableArray(keys).concat([code])).apply(void 0, _toConsumableArray(values));
  }
};


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

module.exports = JSON.parse("[{\"description\":\"Base tests\",\"serviceClassIdentifier\":536870899,\"tests\":[]},{\"description\":\"Sensor tests\",\"serviceClassIdentifier\":536870898,\"tests\":[]},{\"description\":\"Button tests\",\"serviceClassIdentifier\":343122531,\"tests\":[{\"description\":\"downUp: press down and up\",\"registers\":[],\"commands\":[{\"prompt\":\"press the button and release it immediately\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"did you observe an Up event, followed by a Down event?\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]},{\"description\":\"click: click the button\",\"registers\":[],\"commands\":[{\"prompt\":\"press the button down for 500ms and less than 1500ms and release it\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"did you observe a Click event?\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]},{\"description\":\"long click: hold the button\",\"registers\":[],\"commands\":[{\"prompt\":\"press the button down at least 1500ms and release it\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"did you observe a LongClick event?\\\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]}]},{\"description\":\"Potentiometer tests\",\"serviceClassIdentifier\":522667846,\"tests\":[{\"description\":\"position changes on movement\",\"registers\":[],\"commands\":[{\"prompt\":\"move the slider/potentiometer\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"did the position register's value change?\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]}]},{\"description\":\"Rotary encoder tests\",\"serviceClassIdentifier\":284830153,\"tests\":[{\"description\":\"knob turn\",\"registers\":[\"position\"],\"commands\":[{\"prompt\":\"turn the knob back and forth\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"changes\"}}}]},{\"description\":\"clockwise turn\",\"registers\":[\"position\"],\"commands\":[{\"prompt\":\"turn the knob clockwise\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"increases\"}}}]},{\"description\":\"counter-clockwise turn\",\"registers\":[\"position\"],\"commands\":[{\"prompt\":\"turn the knob counter-clockwise\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"decreases\"}}}]},{\"description\":\"one rotation clockwise\",\"registers\":[\"position\",\"clicks_per_turn\"],\"commands\":[{\"prompt\":\"turn one complete rotation clockwise\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"Identifier\",\"name\":\"clicks_per_turn\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"increasesBy\"}}}]},{\"description\":\"one rotation counter-clockwise\",\"registers\":[\"position\",\"clicks_per_turn\"],\"commands\":[{\"prompt\":\"turn one complete rotation counter-clockwise\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"Identifier\",\"name\":\"clicks_per_turn\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"decreasesBy\"}}}]},{\"description\":\"no missing value clockwise\",\"registers\":[\"position\",\"clicks_per_turn\"],\"commands\":[{\"prompt\":\"slowly turn clockwise one complete rotation\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"Identifier\",\"name\":\"position\"},\"right\":{\"type\":\"Identifier\",\"name\":\"clicks_per_turn\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"rangesFromUpTo\"}}}]},{\"description\":\"no missing value counter-clockwise\",\"registers\":[\"position\",\"clicks_per_turn\"],\"commands\":[{\"prompt\":\"slowly turn counter-clockwise one complete rotation\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"BinaryExpression\",\"operator\":\"-\",\"left\":{\"type\":\"Identifier\",\"name\":\"position\"},\"right\":{\"type\":\"Identifier\",\"name\":\"clicks_per_turn\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"rangesFromDownTo\"}}}]},{\"description\":\"check physical position clockwise\",\"registers\":[\"position\",\"clicks_per_turn\"],\"commands\":[{\"prompt\":\"note knob's physical position and quickly turn clockwise one complete rotation\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"Identifier\",\"name\":\"clicks_per_turn\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"increasesBy\"}}},{\"prompt\":\"is the knob at the same physical position?\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]},{\"description\":\"check physical position counter-clockwise\",\"registers\":[\"position\",\"clicks_per_turn\"],\"commands\":[{\"prompt\":\"note knob's physical position and quickly turn counter-clockwise one complete rotation\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"Identifier\",\"name\":\"clicks_per_turn\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"decreasesBy\"}}},{\"prompt\":\"is the knob at the same physical position?\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]},{\"description\":\"reset test\",\"registers\":[\"position\"],\"commands\":[{\"prompt\":\"reset test (automated)\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"say\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"reset\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"==\",\"left\":{\"type\":\"Identifier\",\"name\":\"position\"},\"right\":{\"type\":\"Literal\",\"value\":0,\"raw\":\"0\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"check\"}}}]}]}]");

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
//# sourceMappingURL=859a83de993caea7524bf57c2975f3be6812c8c3-553632e215c003af9d8a.js.map