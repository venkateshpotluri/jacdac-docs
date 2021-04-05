(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__("Z3vd");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__("hlFM");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__("o4QW");

// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__("FQT7");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("JX7q");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__("dI71");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("vuIU");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdtestfuns.ts
var jdtestfuns = __webpack_require__("et/c");

// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdutils.ts
var jdutils = __webpack_require__("3ArF");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/eventsource.ts
var eventsource = __webpack_require__("033P");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/serviceclient.ts
var serviceclient = __webpack_require__("eoX3");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// CONCATENATED MODULE: ./jacdac-ts/src/test/testrunner.ts






function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var JDTestCommandStatus;

(function (JDTestCommandStatus) {
  JDTestCommandStatus[JDTestCommandStatus["NotReady"] = 0] = "NotReady";
  JDTestCommandStatus[JDTestCommandStatus["Active"] = 1] = "Active";
  JDTestCommandStatus[JDTestCommandStatus["RequiresUserInput"] = 2] = "RequiresUserInput";
  JDTestCommandStatus[JDTestCommandStatus["Passed"] = 3] = "Passed";
  JDTestCommandStatus[JDTestCommandStatus["Failed"] = 4] = "Failed";
})(JDTestCommandStatus || (JDTestCommandStatus = {}));

var JDTestStatus;

(function (JDTestStatus) {
  JDTestStatus[JDTestStatus["NotReady"] = 0] = "NotReady";
  JDTestStatus[JDTestStatus["Active"] = 1] = "Active";
  JDTestStatus[JDTestStatus["Passed"] = 2] = "Passed";
  JDTestStatus[JDTestStatus["Failed"] = 3] = "Failed";
})(JDTestStatus || (JDTestStatus = {}));

function commandStatusToTestStatus(status) {
  switch (status) {
    case JDTestCommandStatus.Active:
      return JDTestStatus.Active;

    case JDTestCommandStatus.Passed:
      return JDTestStatus.Passed;

    case JDTestCommandStatus.Failed:
      return JDTestStatus.Failed;

    case JDTestCommandStatus.NotReady:
      return JDTestStatus.NotReady;

    case JDTestCommandStatus.RequiresUserInput:
      return JDTestStatus.Active;
  }
}

function cmdToTestFunction(cmd) {
  var id = cmd.call.callee.name;
  return Object(jdtestfuns["a" /* getTestCommandFunctions */])().find(function (t) {
    return t.id == id;
  });
}

function unparse(e) {
  switch (e.type) {
    case "ArrayExpression":
      {
        var ae = e;
        return "[" + ae.elements.map(unparse).join(", ") + "]";
      }

    case "CallExpression":
      {
        var caller = e;
        return unparse(caller.callee) + "(" + caller.arguments.map(unparse).join(", ") + ")";
      }

    case "MemberExpression":
      {
        var _root = e;
        return _root.computed ? unparse(_root.object) + "[" + unparse(_root.property) + "]" : unparse(_root.object) + "." + unparse(_root.property);
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

var testrunner_JDExprEvaluator = /*#__PURE__*/function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      case "ArrayExpression":
        {
          // nothing to do here yet (only used for event function)
          break;
        }

      case "CallExpression":
        {
          var caller = e;
          var callee = caller.callee;

          switch (callee.name) {
            case "start":
              {
                this.exprStack.push(this.start.find(function (r) {
                  return r.e === caller.arguments[0];
                }).v);
                return;
              }

            case "closeTo":
              {
                // TODO
                Object(utils["h" /* assert */])(false, "closeTo as expression not yet implemented");
                return;
              }

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
        {
          var ue = e;
          this.visitExpression(ue.argument);
          var top = this.exprStack.pop();

          switch (ue.operator) {
            case "!":
              this.exprStack.push(!top);
              return;

            case "~":
              this.exprStack.push(~top);
              return;

            case "-":
              this.exprStack.push(-top);
              return;

            case "+":
              this.exprStack.push(+top);
              return;
          }

          break;
        }

      case "LogicalExpression":
        {
          var le = e;
          this.visitExpression(le.left);

          switch (le.operator) {
            case "||":
              if (this.tos()) return;else this.visitExpression(le.right);
              return;

            case "&&":
              if (!this.tos()) return;else this.visitExpression(le.right);
              return;

            default:
          }

          break;
        }

      case "MemberExpression":
        {
          // member expressions are of form [register|event].field
          var _root2 = e;
          var lhs = _root2.object;
          var rhs = _root2.property;
          var val = this.env(lhs.name, rhs.name); // console.log(`${lhs.name}.${rhs.name} = ${val}`)

          this.exprStack.push(val);
          return;
        }

      case "Identifier":
        {
          var id = e;
          this.exprStack.push(this.env(id.name, ""));
          return;
        }

      case "Literal":
        {
          var lit = e;
          this.exprStack.push(lit.value);
          return;
        }

      default:
    }
  };

  return JDExprEvaluator;
}();

var testrunner_JDCommandEvaluator = /*#__PURE__*/function () {
  function JDCommandEvaluator(testRunner, command) {
    this._prompt = "";
    this._progress = "";
    this._status = JDTestCommandStatus.Active;
    this._startExpressions = [];
    this._rangeComplete = undefined;
    this._eventsComplete = undefined;
    this.testRunner = testRunner;
    this.command = command;
  }

  var _proto2 = JDCommandEvaluator.prototype;

  // TODO: define an interface between test runner and command evaluator
  // TODO: so this all can be done modularly
  _proto2.start = function start() {
    var _this = this;

    this._startExpressions = [];
    var testFun = cmdToTestFunction(this.command);
    var args = this.command.call.arguments;
    var startExprs = [];

    switch (testFun.id) {
      case "check":
      case "awaitEvent":
      case "nextEvent":
        {
          Object(jdutils["a" /* exprVisitor */])(null, args, function (p, ce) {
            if (ce.type !== 'CallExpression') return;
            if (ce.callee.name === "start") startExprs.push(ce.arguments[0]);else if (ce.callee.name === "closeTo") {
              startExprs.push(ce.arguments[1]);
              startExprs.push(ce.arguments[2]);
            }
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
      case "stepsUpTo":
      case "stepsDownTo":
        {
          startExprs.push(args[0]);
          startExprs.push(args[1]);
          break;
        }

      case "closeTo":
        {
          startExprs.push(args[1]);
          startExprs.push(args[2]);
          break;
        }

      case "assign":
        {
          startExprs.push(args[1]);
          break;
        }

      case "events":
        {
          var eventList = this.command.call.arguments[0];
          this._eventsComplete = eventList.elements.map(function (id) {
            return id.name;
          });
          break;
        }
    } // evaluate the start expressions and store the results


    startExprs.forEach(function (child) {
      if (_this._startExpressions.findIndex(function (r) {
        return r.e === child;
      }) < 0) {
        var exprEval = new testrunner_JDExprEvaluator(_this.env, []);

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
    var replaceId = this.command.call.arguments.map(function (a, i) {
      return ["{" + (i + 1) + "}", unparse(a)];
    });
    var replaceVal = this.command.call.arguments.map(function (a, i) {
      var aStart = _this2._startExpressions.find(function (r) {
        return r.e === a;
      });

      return ["{" + (i + 1) + ":val}", aStart && aStart.v ? Object(utils["L" /* roundWithPrecision */])(aStart.v, 3).toString() : "NA"];
    });
    this._prompt = testFun.id === "ask" || testFun.id === "say" ? this.command.prompt.slice(0) : testFun.prompt.slice(0);
    replaceId.forEach(function (p) {
      return _this2._prompt = _this2._prompt.replace(p[0], p[1]);
    });
    replaceVal.forEach(function (p) {
      return _this2._prompt = _this2._prompt.replace(p[0], p[1]);
    });
  };

  _proto2.setEvent = function setEvent(ev) {};

  _proto2.checkExpression = function checkExpression(e) {
    var expr = new testrunner_JDExprEvaluator(this.env, this._startExpressions);
    return expr.eval(e) ? JDTestCommandStatus.Passed : JDTestCommandStatus.Active;
  };

  _proto2.getStart = function getStart(e) {
    return this._startExpressions.find(function (r) {
      return r.e === e;
    });
  };

  _proto2.evaluate = function evaluate() {
    var testFun = cmdToTestFunction(this.command);
    var args = this.command.call.arguments;
    this._status = JDTestCommandStatus.Active;
    this._progress = "";

    switch (testFun.id) {
      case "ask":
        {
          this._status = JDTestCommandStatus.RequiresUserInput;
          break;
        }

      case "check":
        {
          this._status = this.checkExpression(args[0]);
          break;
        }

      case "closeTo":
        {
          var goal = this.getStart(args[1]);
          var error = this.getStart(args[2]);
          var expr = new testrunner_JDExprEvaluator(this.env, this._startExpressions);
          var ev = expr.eval(args[0]);
          if (Math.abs(ev - goal.v) <= error.v) this._status = JDTestCommandStatus.Passed;
          this._progress = "current: " + pretify(ev) + "; goal: " + pretify(goal.v) + "; error: " + pretify(error.v);
          break;
        }

      case "changes":
      case "increases":
      case "decreases":
        {
          var regSaved = this._startExpressions.find(function (r) {
            return r.e === args[0];
          });

          var regValue = this.env(unparse(args[0]));
          var status = regValue && regSaved.v && (testFun.id === "changes" && regValue !== regSaved.v || testFun.id === "increases" && regValue > regSaved.v || testFun.id === "decreases" && regValue < regSaved.v) ? JDTestCommandStatus.Passed : JDTestCommandStatus.Active;
          this._status = status;
          regSaved.v = regValue;
          break;
        }

      case "increasesBy":
      case "decreasesBy":
        {
          var _regSaved = this.getStart(args[0]);

          var amtSaved = this.getStart(args[1]);

          var _regValue = this.env(unparse(args[0]));

          if (testFun.id === "increasesBy") {
            if (_regValue >= _regSaved.v + amtSaved.v) {
              this._status = JDTestCommandStatus.Passed;
            } else if (_regValue >= _regSaved.v && _regValue < _regSaved.v + amtSaved.v) {
              this._status = JDTestCommandStatus.Active;
              this._progress = "current: " + pretify(_regValue) + ", goal: " + pretify(_regSaved.v + amtSaved.v);
            } else {
              this._status = JDTestCommandStatus.Active;
            }
          } else {
            if (_regValue <= _regSaved.v - amtSaved.v) {
              this._status = JDTestCommandStatus.Passed;
              this._progress = "completed";
            } else if (_regValue <= _regSaved.v && _regValue > _regSaved.v - amtSaved.v) {
              this._status = JDTestCommandStatus.Active;
              this._progress = "current: " + pretify(_regValue) + " goal: " + pretify(_regSaved.v - amtSaved.v);
            } else {
              this._status = JDTestCommandStatus.Active;
            }
          }

          break;
        }

      case "stepsUpTo":
      case "stepsDownTo":
        {
          this._status = JDTestCommandStatus.Active;

          var _regValue2 = this.env(unparse(args[0]));

          var beginSaved = this.getStart(args[0]);
          var endSaved = this.getStart(args[1]);

          if (this._rangeComplete === undefined) {
            this._rangeComplete = _regValue2;
          } else {
            if (_regValue2 === this._rangeComplete + (testFun.id == 'stepsUpTo' ? 1 : -1)) this._rangeComplete = _regValue2;

            if (this._rangeComplete === endSaved.v) {
              this._status = JDTestCommandStatus.Passed;
            }
          }

          if (this._rangeComplete != undefined) {
            this._progress = testFun.id == 'stepsUpTo' ? "from " + pretify(beginSaved.v) + " up to " + pretify(this._rangeComplete) : "from " + pretify(beginSaved.v) + " down to " + pretify(this._rangeComplete);
          }

          break;
        }

      case "events":
        {
          if (this.testRunner.hasEvent) {
            var _ev = this.testRunner.consumeEvent();

            if (_ev === this._eventsComplete[0]) {
              this._eventsComplete.shift();

              if (this._eventsComplete.length === 0) this._status = JDTestCommandStatus.Passed;
            } else {
              this._status = JDTestCommandStatus.Failed;
            }

            this._progress = "got event " + _ev + "; remaining = [" + this._eventsComplete + "]";
          } else {
            this._progress = "no events received; remaining = [" + this._eventsComplete + "]";
          }

          break;
        }

      case "awaitEvent":
      case "nextEvent":
        {
          var event = args[0];
          this._progress = "waiting for event " + event.name;

          if (this.testRunner.hasEvent) {
            var _ev2 = this.testRunner.consumeEvent();

            if (_ev2 !== event.name) {
              if (testFun.id === "nextEvent") this._status = JDTestCommandStatus.Failed;
            } else {
              // this._status = JDTestCommandStatus.Passed
              this._status = this.checkExpression(this.command.call.arguments[1]);
            }
          } else {
            this._progress = "no events received; " + this._progress;
          }

          break;
        }

      case "assign":
        {
          var reg = args[0];
          var jdreg = this.testRunner.serviceTestRunner.registers[reg.name];

          var _expr = new testrunner_JDExprEvaluator(this.env, this._startExpressions);

          var _ev3 = _expr.eval(this.command.call.arguments[1]); // TODO: generalize


          jdreg.sendSetIntAsync(_ev3);
          this._status = JDTestCommandStatus.Passed;
        }
    }

    function pretify(v) {
      return Object(utils["L" /* roundWithPrecision */])(v, 3);
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
  }, {
    key: "env",
    get: function get() {
      var _this3 = this;

      return function (root, fld) {
        if (fld === void 0) {
          fld = "";
        }

        return _this3.testRunner.serviceTestRunner.lookup(root, fld);
      };
    }
  }]);

  return JDCommandEvaluator;
}();

var testrunner_JDTestCommandRunner = /*#__PURE__*/function (_JDEventSource) {
  Object(inheritsLoose["a" /* default */])(JDTestCommandRunner, _JDEventSource);

  function JDTestCommandRunner(testRunner, command) {
    var _this4;

    _this4 = _JDEventSource.call(this) || this;
    _this4._status = JDTestCommandStatus.NotReady;
    _this4._output = {
      message: "",
      progress: ""
    };
    _this4._commmandEvaluator = null;
    _this4.testRunner = testRunner;
    _this4.command = command;
    return _this4;
  }

  var _proto3 = JDTestCommandRunner.prototype;

  _proto3.reset = function reset() {
    this.status = JDTestCommandStatus.NotReady;
    this.output = {
      message: "",
      progress: ""
    };
    this._commmandEvaluator = null;
  };

  _proto3.start = function start() {
    this.status = JDTestCommandStatus.Active;
    this._commmandEvaluator = new testrunner_JDCommandEvaluator(this.testRunner, this.command);

    this._commmandEvaluator.start();

    this.envChange();
  };

  _proto3.envChange = function envChange() {
    if (this.isActive) {
      this._commmandEvaluator.evaluate();

      var newOutput = {
        message: this._commmandEvaluator.prompt,
        progress: this._commmandEvaluator.progress
      };
      this.output = newOutput;
      if (this._commmandEvaluator.status === JDTestCommandStatus.RequiresUserInput) this.status = JDTestCommandStatus.RequiresUserInput;else this.finish(this._commmandEvaluator.status);
    }
  };

  _proto3.cancel = function cancel() {
    this.finish(JDTestCommandStatus.Failed);
  };

  _proto3.finish = function finish(s) {
    if (this.isActive && (s === JDTestCommandStatus.Failed || s === JDTestCommandStatus.Passed)) {
      this.status = s;
      this.testRunner.finishCommand();
    }
  };

  Object(createClass["a" /* default */])(JDTestCommandRunner, [{
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(s) {
      if (s != this._status) {
        this._status = s;
        this.emit(constants["v" /* CHANGE */]);
      }
    }
  }, {
    key: "indeterminate",
    get: function get() {
      return this.status !== JDTestCommandStatus.Failed && this.status !== JDTestCommandStatus.Passed;
    }
  }, {
    key: "isActive",
    get: function get() {
      return this.status === JDTestCommandStatus.Active || this.status === JDTestCommandStatus.RequiresUserInput;
    }
  }, {
    key: "output",
    get: function get() {
      return this._output;
    },
    set: function set(value) {
      if (!this._output || this._output.message !== value.message || this._output.progress !== value.progress) {
        this._output = value;
        this.emit(constants["v" /* CHANGE */]);
      }
    }
  }]);

  return JDTestCommandRunner;
}(eventsource["a" /* JDEventSource */]);
var testrunner_JDTestRunner = /*#__PURE__*/function (_JDEventSource2) {
  Object(inheritsLoose["a" /* default */])(JDTestRunner, _JDEventSource2);

  function JDTestRunner(serviceTestRunner, testSpec) {
    var _this5;

    _this5 = _JDEventSource2.call(this) || this;
    _this5._status = JDTestStatus.NotReady;
    _this5.serviceTestRunner = serviceTestRunner;
    _this5.testSpec = testSpec;
    _this5.commands = testSpec.testCommands.map(function (c) {
      return new testrunner_JDTestCommandRunner(Object(assertThisInitialized["a" /* default */])(_this5), c);
    });
    return _this5;
  }

  var _proto4 = JDTestRunner.prototype;

  _proto4.reset = function reset() {
    if (this.status !== JDTestStatus.NotReady) {
      this._status = JDTestStatus.NotReady;
      this._commandIndex = undefined;
      this._currentEvent = undefined;
      this.commands.forEach(function (t) {
        return t.reset();
      });
      this.emit(constants["v" /* CHANGE */]);
    }
  };

  _proto4.start = function start() {
    this.reset();
    this.status = JDTestStatus.Active;
    this.commandIndex = 0;
    this.serviceTestRunner.refreshEnvironment();
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
    if (this.status === JDTestStatus.Active) {
      var _this$currentCommand;

      (_this$currentCommand = this.currentCommand) === null || _this$currentCommand === void 0 ? void 0 : _this$currentCommand.envChange();
    }
  };

  _proto4.eventChange = function eventChange(event) {
    if (this.status === JDTestStatus.Active) {
      this._currentEvent = event;
      this.envChange();
    }
  };

  _proto4.consumeEvent = function consumeEvent() {
    var ret = this._currentEvent;
    this._currentEvent = undefined;
    return ret;
  };

  _proto4.finishCommand = function finishCommand() {
    if (this.commandIndex === this.commands.length - 1) this.finish(commandStatusToTestStatus(this.currentCommand.status));else this.commandIndex++;
  };

  Object(createClass["a" /* default */])(JDTestRunner, [{
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(s) {
      if (s != this._status) {
        this._status = s;
        this.emit(constants["v" /* CHANGE */]);
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
      return this.testSpec.description;
    }
  }, {
    key: "prompt",
    get: function get() {
      return this.testSpec.prompt;
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
        this.emit(constants["v" /* CHANGE */]);
      }
    }
  }, {
    key: "hasEvent",
    get: function get() {
      return this._currentEvent != undefined;
    }
  }, {
    key: "currentCommand",
    get: function get() {
      return this.commands[this._commandIndex];
    }
  }]);

  return JDTestRunner;
}(eventsource["a" /* JDEventSource */]);

function refresh_env(_x) {
  return _refresh_env.apply(this, arguments);
}

function _refresh_env() {
  _refresh_env = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(registers) {
    var k, register, retry, val, _register$unpackedVal;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = regenerator_default.a.keys(registers);

          case 1:
            if ((_context.t1 = _context.t0()).done) {
              _context.next = 12;
              break;
            }

            k = _context.t1.value;
            register = registers[k];
            retry = 0;
            val = undefined;

          case 6:
            _context.next = 8;
            return register.refresh();

          case 8:
            val = (_register$unpackedVal = register.unpackedValue) === null || _register$unpackedVal === void 0 ? void 0 : _register$unpackedVal[0];

          case 9:
            if (val === undefined && retry++ < 2) {
              _context.next = 6;
              break;
            }

          case 10:
            _context.next = 1;
            break;

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _refresh_env.apply(this, arguments);
}

var testrunner_JDServiceTestRunner = /*#__PURE__*/function (_JDServiceClient) {
  Object(inheritsLoose["a" /* default */])(JDServiceTestRunner, _JDServiceClient);

  function JDServiceTestRunner(testSpec, service) {
    var _this6;

    _this6 = _JDServiceClient.call(this, service) || this;
    _this6._testIndex = -1;
    _this6._registers = {};
    _this6._events = {};
    _this6.testSpec = testSpec;
    _this6.tests = _this6.testSpec.tests.map(function (t) {
      return new testrunner_JDTestRunner(Object(assertThisInitialized["a" /* default */])(_this6), t);
    });
    var serviceSpec = Object(spec["D" /* serviceSpecificationFromClassIdentifier */])(service.serviceClass);

    _this6.testSpec.tests.forEach(function (t) {
      t.events.forEach(function (eventName) {
        if (!_this6.events[eventName]) {
          var pkt = serviceSpec.packets.find(function (pkt) {
            return Object(spec["j" /* isEvent */])(pkt) && pkt.name === eventName;
          });
          var event = service.event(pkt.identifier);
          _this6.events[eventName] = event;

          _this6.mount(event.subscribe(constants["nb" /* EVENT */], function () {
            var _this6$currentTest;

            (_this6$currentTest = _this6.currentTest) === null || _this6$currentTest === void 0 ? void 0 : _this6$currentTest.eventChange(eventName);
          }));
        }
      });
      t.registers.forEach(function (regName) {
        if (!_this6._registers[regName]) {
          var pkt = serviceSpec.packets.find(function (pkt) {
            return Object(spec["s" /* isRegister */])(pkt) && pkt.name === regName;
          });
          var register = service.register(pkt.identifier);
          _this6._registers[regName] = register;

          _this6.mount(register.subscribe(constants["v" /* CHANGE */], function () {
            var _this6$currentTest2;

            (_this6$currentTest2 = _this6.currentTest) === null || _this6$currentTest2 === void 0 ? void 0 : _this6$currentTest2.envChange();
          }));
        }
      });
    });

    _this6.start();

    return _this6;
  }

  var _proto5 = JDServiceTestRunner.prototype;

  _proto5.lookup = function lookup(root, fld) {
    if (fld === void 0) {
      fld = "";
    }

    if (root in this.registers) {
      var _this$registers$root$;

      if (!fld) return (_this$registers$root$ = this.registers[root].unpackedValue) === null || _this$registers$root$ === void 0 ? void 0 : _this$registers$root$[0];else {
        var field = this.registers[root].fields.find(function (f) {
          return f.name === fld;
        });
        return field === null || field === void 0 ? void 0 : field.value;
      }
    } else if (root in this.events) {
      var _this$events$root$fie;

      var _field = (_this$events$root$fie = this.events[root].fields) === null || _this$events$root$fie === void 0 ? void 0 : _this$events$root$fie.find(function (f) {
        return f.name === fld;
      });

      return _field === null || _field === void 0 ? void 0 : _field.value;
    }

    return undefined;
  };

  _proto5.refreshEnvironment = function refreshEnvironment() {
    refresh_env(this.registers);
  };

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
    key: "registers",
    get: function get() {
      return this._registers;
    }
  }, {
    key: "events",
    get: function get() {
      return this._events;
    }
  }, {
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
        this.emit(constants["v" /* CHANGE */]);
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

// EXTERNAL MODULE: ./src/components/dashboard/DashboardDevice.tsx + 5 modules
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
    case JDTestCommandStatus.Active:
    case JDTestCommandStatus.RequiresUserInput:
      return /*#__PURE__*/react_default.a.createElement(PlayCircleFilled_default.a, {
        color: "action"
      });

    case JDTestCommandStatus.Failed:
      return /*#__PURE__*/react_default.a.createElement(Error_default.a, {
        color: "error"
      });

    case JDTestCommandStatus.Passed:
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

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(ListItem["a" /* default */], {
    selected: status === JDTestCommandStatus.Active
  }, /*#__PURE__*/react_default.a.createElement(ListItemIcon["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(CommandStatusIcon, {
    command: command
  })), /*#__PURE__*/react_default.a.createElement(ListItemText["a" /* default */], {
    primary: message,
    secondary: progress
  })), status === JDTestCommandStatus.RequiresUserInput && /*#__PURE__*/react_default.a.createElement(ListItem["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(esm_ListItemSecondaryAction_ListItemSecondaryAction, null, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    variant: "outlined",
    onClick: handleAnswer(JDTestCommandStatus.Passed)
  }, "Yes")), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    variant: "outlined",
    onClick: handleAnswer(JDTestCommandStatus.Failed)
  }, "No"))))));
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
  }; // auto start


  Object(react["useEffect"])(function () {
    return test.start();
  }, [test]);
  return /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(CardContent["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "h5"
  }, "DO"), /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    m: 2
  }, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "body1"
  }, test.prompt)), /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "h5"
  }, "TEST"), /*#__PURE__*/react_default.a.createElement(List["a" /* default */], {
    dense: false
  }, commands.map(function (cmd, i) {
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
    xs: 3
  }, /*#__PURE__*/react_default.a.createElement(TestList, {
    testRunner: testRunner,
    currentTest: currentTest,
    onSelectTest: handleSelectTest
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 6
  }, currentTest ? /*#__PURE__*/react_default.a.createElement(ActiveTest, {
    test: currentTest
  }) : /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "info"
  }, "Select a test to get started.")), service && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react_default.a.createElement(DashboardDevice["a" /* default */], {
    showAvatar: true,
    showHeader: true,
    device: service.device
  })));
}

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

/***/ "et/c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTestCommandFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTestExpressionFunctions; });
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="jdtest.d.ts" />
function getTestCommandFunctions() {
  return testFunctions.filter(function (f) {
    return f.context === "command" || f.context === "either";
  });
}
function getTestExpressionFunctions() {
  return testFunctions.filter(function (f) {
    return f.context === "expression" || f.context === "either";
  });
}
var testFunctions = [{
  id: "changes",
  args: ["register"],
  prompt: "check that {1} changes",
  context: "command"
}, {
  id: "ask",
  args: [],
  prompt: undefined,
  context: "command"
}, {
  id: "events",
  args: ["events"],
  prompt: "check that events {1} are observed",
  context: "command"
}, {
  id: "awaitEvent",
  args: ["event", "boolean"],
  prompt: "wait for event {1} and then check {2} (other events ignored)",
  context: "command"
}, {
  id: "nextEvent",
  args: ["event", "boolean"],
  prompt: "next event must be {1}, then check {2}",
  context: "command"
}, {
  id: "assign",
  args: ["register", "number"],
  prompt: "write value {2:val} to {1}",
  context: "command"
}, {
  id: "check",
  args: ["boolean"],
  prompt: "check that {1}",
  context: "command"
}, {
  id: "increases",
  args: ["register"],
  prompt: "check that {1} increases",
  context: "command"
}, {
  id: "decreases",
  args: ["register"],
  prompt: "check that {1} decreases",
  context: "command"
}, {
  id: "increasesBy",
  args: ["register", "number"],
  prompt: "check that  {1} (initially {1:val}) increases by {2:val}",
  context: "command"
}, {
  id: "decreasesBy",
  args: ["register", "number"],
  prompt: "check that {1} (initially {1:val}) decreases by {2:val}",
  context: "command"
}, {
  id: "stepsUpTo",
  args: ["register", "number"],
  prompt: "{1} should step up (by ones) from {1:val} to {2:val}",
  context: "command"
}, {
  id: "stepsDownTo",
  args: ["register", "number"],
  prompt: "{1} should step down (by ones) from {1:val} to {2:val}",
  context: "command"
}, {
  id: "start",
  args: ["any"],
  prompt: undefined,
  context: "expression"
}, {
  id: "closeTo",
  args: ["number", "number", "number"],
  prompt: "evaluate {1} until it is close to {2:val}, as given by error {3:val}",
  context: "either"
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

module.exports = JSON.parse("[{\"description\":\"Base tests\",\"serviceClassIdentifier\":536870899,\"tests\":[]},{\"description\":\"Sensor tests\",\"serviceClassIdentifier\":536870898,\"tests\":[]},{\"description\":\"Accelerometer tests\",\"serviceClassIdentifier\":521405449,\"tests\":[{\"description\":\"tilt events\",\"prompt\":\"Tilt the device up\",\"registers\":[],\"events\":[\"tilt_up\",\"tilt_down\",\"tilt_left\",\"tilt_right\"],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"tilt_up\"},{\"type\":\"Literal\",\"value\":true,\"raw\":\"true\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"awaitEvent\"}}},{\"prompt\":\"Now, tilt it down\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"tilt_down\"},{\"type\":\"Literal\",\"value\":true,\"raw\":\"true\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"awaitEvent\"}}},{\"prompt\":\"Now, tilt it left\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"tilt_left\"},{\"type\":\"Literal\",\"value\":true,\"raw\":\"true\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"awaitEvent\"}}},{\"prompt\":\"Now, tilt it right\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"tilt_right\"},{\"type\":\"Literal\",\"value\":true,\"raw\":\"true\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"awaitEvent\"}}}]},{\"description\":\"face events\",\"prompt\":\"Place the device face down\",\"registers\":[],\"events\":[\"face_down\",\"face_up\"],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"face_down\"},{\"type\":\"Literal\",\"value\":true,\"raw\":\"true\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"awaitEvent\"}}},{\"prompt\":\"Place the device face up\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"face_up\"},{\"type\":\"Literal\",\"value\":true,\"raw\":\"true\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"awaitEvent\"}}}]},{\"description\":\"3 G event detection\",\"prompt\":\"Move the device quickly in any direction\",\"registers\":[\"forces\"],\"events\":[\"force_3g\"],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"LogicalExpression\",\"operator\":\"||\",\"left\":{\"type\":\"LogicalExpression\",\"operator\":\"||\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\">=\",\"left\":{\"type\":\"MemberExpression\",\"computed\":false,\"object\":{\"type\":\"Identifier\",\"name\":\"forces\"},\"property\":{\"type\":\"Identifier\",\"name\":\"x\"}},\"right\":{\"type\":\"Literal\",\"value\":3,\"raw\":\"3\"}},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\">=\",\"left\":{\"type\":\"MemberExpression\",\"computed\":false,\"object\":{\"type\":\"Identifier\",\"name\":\"forces\"},\"property\":{\"type\":\"Identifier\",\"name\":\"y\"}},\"right\":{\"type\":\"Literal\",\"value\":3,\"raw\":\"3\"}}},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\">=\",\"left\":{\"type\":\"MemberExpression\",\"computed\":false,\"object\":{\"type\":\"Identifier\",\"name\":\"forces\"},\"property\":{\"type\":\"Identifier\",\"name\":\"z\"}},\"right\":{\"type\":\"Literal\",\"value\":3,\"raw\":\"3\"}}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"check\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"force_3g\"},{\"type\":\"Literal\",\"value\":true,\"raw\":\"true\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"awaitEvent\"}}}]},{\"description\":\"6 G event detection\",\"prompt\":\"Move the device quickly in any direction\",\"registers\":[\"forces\"],\"events\":[\"force_6g\"],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"LogicalExpression\",\"operator\":\"||\",\"left\":{\"type\":\"LogicalExpression\",\"operator\":\"||\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\">=\",\"left\":{\"type\":\"MemberExpression\",\"computed\":false,\"object\":{\"type\":\"Identifier\",\"name\":\"forces\"},\"property\":{\"type\":\"Identifier\",\"name\":\"x\"}},\"right\":{\"type\":\"Literal\",\"value\":6,\"raw\":\"6\"}},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\">=\",\"left\":{\"type\":\"MemberExpression\",\"computed\":false,\"object\":{\"type\":\"Identifier\",\"name\":\"forces\"},\"property\":{\"type\":\"Identifier\",\"name\":\"y\"}},\"right\":{\"type\":\"Literal\",\"value\":6,\"raw\":\"6\"}}},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\">=\",\"left\":{\"type\":\"MemberExpression\",\"computed\":false,\"object\":{\"type\":\"Identifier\",\"name\":\"forces\"},\"property\":{\"type\":\"Identifier\",\"name\":\"z\"}},\"right\":{\"type\":\"Literal\",\"value\":6,\"raw\":\"6\"}}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"check\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"force_6g\"},{\"type\":\"Literal\",\"value\":true,\"raw\":\"true\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"awaitEvent\"}}}]},{\"description\":\"8 G event detection\",\"prompt\":\"Move the device quickly in any direction\",\"registers\":[\"forces\"],\"events\":[\"force_8g\"],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"LogicalExpression\",\"operator\":\"||\",\"left\":{\"type\":\"LogicalExpression\",\"operator\":\"||\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\">=\",\"left\":{\"type\":\"MemberExpression\",\"computed\":false,\"object\":{\"type\":\"Identifier\",\"name\":\"forces\"},\"property\":{\"type\":\"Identifier\",\"name\":\"x\"}},\"right\":{\"type\":\"Literal\",\"value\":8,\"raw\":\"8\"}},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\">=\",\"left\":{\"type\":\"MemberExpression\",\"computed\":false,\"object\":{\"type\":\"Identifier\",\"name\":\"forces\"},\"property\":{\"type\":\"Identifier\",\"name\":\"y\"}},\"right\":{\"type\":\"Literal\",\"value\":8,\"raw\":\"8\"}}},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\">=\",\"left\":{\"type\":\"MemberExpression\",\"computed\":false,\"object\":{\"type\":\"Identifier\",\"name\":\"forces\"},\"property\":{\"type\":\"Identifier\",\"name\":\"z\"}},\"right\":{\"type\":\"Literal\",\"value\":8,\"raw\":\"8\"}}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"check\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"force_8g\"},{\"type\":\"Literal\",\"value\":true,\"raw\":\"true\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"awaitEvent\"}}}]}]},{\"description\":\"Button tests\",\"serviceClassIdentifier\":343122531,\"tests\":[{\"description\":\"Press and release\",\"prompt\":\"Press and release the button (once)\",\"registers\":[],\"events\":[\"down\",\"up\"],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"ArrayExpression\",\"elements\":[{\"type\":\"Identifier\",\"name\":\"down\"},{\"type\":\"Identifier\",\"name\":\"up\"}]}],\"callee\":{\"type\":\"Identifier\",\"name\":\"events\"}}}]},{\"description\":\"Register and event correspondence\",\"prompt\":\"Press and release the button\",\"registers\":[\"pressed\"],\"events\":[\"down\",\"up\"],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"LogicalExpression\",\"operator\":\"&&\",\"left\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"UnaryExpression\",\"operator\":\"!\",\"argument\":{\"type\":\"Identifier\",\"name\":\"pressed\"},\"prefix\":true}],\"callee\":{\"type\":\"Identifier\",\"name\":\"start\"}},\"right\":{\"type\":\"Identifier\",\"name\":\"pressed\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"check\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"down\"},{\"type\":\"Literal\",\"value\":true,\"raw\":\"true\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"nextEvent\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"LogicalExpression\",\"operator\":\"&&\",\"left\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"pressed\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"start\"}},\"right\":{\"type\":\"UnaryExpression\",\"operator\":\"!\",\"argument\":{\"type\":\"Identifier\",\"name\":\"pressed\"},\"prefix\":true}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"check\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"up\"},{\"type\":\"Literal\",\"value\":true,\"raw\":\"true\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"nextEvent\"}}}]},{\"description\":\"One hold event\",\"prompt\":\"Press and hold the button for more than 500ms, then release\",\"registers\":[],\"events\":[\"down\",\"hold\",\"up\"],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"ArrayExpression\",\"elements\":[{\"type\":\"Identifier\",\"name\":\"down\"},{\"type\":\"Identifier\",\"name\":\"hold\"},{\"type\":\"Identifier\",\"name\":\"up\"}]}],\"callee\":{\"type\":\"Identifier\",\"name\":\"events\"}}}]},{\"description\":\"Hold for three hold events\",\"prompt\":\"Press and hold the button for 3 hold events, then release\",\"registers\":[],\"events\":[\"down\",\"hold\",\"up\"],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"ArrayExpression\",\"elements\":[{\"type\":\"Identifier\",\"name\":\"down\"},{\"type\":\"Identifier\",\"name\":\"hold\"},{\"type\":\"Identifier\",\"name\":\"hold\"},{\"type\":\"Identifier\",\"name\":\"hold\"}]}],\"callee\":{\"type\":\"Identifier\",\"name\":\"events\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"up\"},{\"type\":\"LogicalExpression\",\"operator\":\"&&\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\">=\",\"left\":{\"type\":\"MemberExpression\",\"computed\":false,\"object\":{\"type\":\"Identifier\",\"name\":\"up\"},\"property\":{\"type\":\"Identifier\",\"name\":\"time\"}},\"right\":{\"type\":\"Literal\",\"value\":1500,\"raw\":\"1500\"}},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\"<\",\"left\":{\"type\":\"MemberExpression\",\"computed\":false,\"object\":{\"type\":\"Identifier\",\"name\":\"up\"},\"property\":{\"type\":\"Identifier\",\"name\":\"time\"}},\"right\":{\"type\":\"Literal\",\"value\":2000,\"raw\":\"2000\"}}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"nextEvent\"}}}]},{\"description\":\"Event timing for hold events\",\"prompt\":\"Press and hold the button for 4 hold events\",\"registers\":[],\"events\":[\"hold\"],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"hold\"},{\"type\":\"BinaryExpression\",\"operator\":\">=\",\"left\":{\"type\":\"MemberExpression\",\"computed\":false,\"object\":{\"type\":\"Identifier\",\"name\":\"hold\"},\"property\":{\"type\":\"Identifier\",\"name\":\"time\"}},\"right\":{\"type\":\"Literal\",\"value\":500,\"raw\":\"500\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"awaitEvent\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"hold\"},{\"type\":\"BinaryExpression\",\"operator\":\">=\",\"left\":{\"type\":\"MemberExpression\",\"computed\":false,\"object\":{\"type\":\"Identifier\",\"name\":\"hold\"},\"property\":{\"type\":\"Identifier\",\"name\":\"time\"}},\"right\":{\"type\":\"Literal\",\"value\":1000,\"raw\":\"1000\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"nextEvent\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"hold\"},{\"type\":\"BinaryExpression\",\"operator\":\">=\",\"left\":{\"type\":\"MemberExpression\",\"computed\":false,\"object\":{\"type\":\"Identifier\",\"name\":\"hold\"},\"property\":{\"type\":\"Identifier\",\"name\":\"time\"}},\"right\":{\"type\":\"Literal\",\"value\":1500,\"raw\":\"1500\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"nextEvent\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"hold\"},{\"type\":\"BinaryExpression\",\"operator\":\">=\",\"left\":{\"type\":\"MemberExpression\",\"computed\":false,\"object\":{\"type\":\"Identifier\",\"name\":\"hold\"},\"property\":{\"type\":\"Identifier\",\"name\":\"time\"}},\"right\":{\"type\":\"Literal\",\"value\":2000,\"raw\":\"2000\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"nextEvent\"}}}]}]},{\"description\":\"Humidity tests\",\"serviceClassIdentifier\":382210232,\"tests\":[{\"description\":\"in range\",\"prompt\":\"Check that thermometer temperature is in expected range\",\"registers\":[\"humidity\",\"max_humidity\",\"humidity_error\",\"min_humidity\"],\"events\":[],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"<=\",\"left\":{\"type\":\"Identifier\",\"name\":\"humidity\"},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"Identifier\",\"name\":\"max_humidity\"},\"right\":{\"type\":\"Identifier\",\"name\":\"humidity_error\"}}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"check\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"<=\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\"-\",\"left\":{\"type\":\"Identifier\",\"name\":\"min_humidity\"},\"right\":{\"type\":\"Identifier\",\"name\":\"humidity_error\"}},\"right\":{\"type\":\"Identifier\",\"name\":\"humidity\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"check\"}}}]},{\"description\":\"increases\",\"prompt\":\"blow on the sensor\",\"registers\":[],\"events\":[],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"humidity\"},{\"type\":\"Literal\",\"value\":10,\"raw\":\"10\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"increasesBy\"}}}]},{\"description\":\"decreases\",\"prompt\":\"let the sensor rest\",\"registers\":[],\"events\":[],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"humidity\"},{\"type\":\"Literal\",\"value\":4,\"raw\":\"4\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"decreasesBy\"}}}]},{\"description\":\"calibrate\",\"prompt\":\"measure humidity using a calibrated sensor and check value\",\"registers\":[],\"events\":[],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]}]},{\"description\":\"Potentiometer Tests\",\"serviceClassIdentifier\":522667846,\"tests\":[{\"description\":\"midpoint\",\"prompt\":\"Adjust the potentiometer to the midpoint (0.5)\",\"registers\":[\"position\"],\"events\":[],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"Literal\",\"value\":0.5,\"raw\":\"0.5\"},{\"type\":\"Literal\",\"value\":0.01,\"raw\":\"0.01\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"closeTo\"}}}]}]},{\"description\":\"Rotary encoder tests\",\"serviceClassIdentifier\":284830153,\"tests\":[{\"description\":\"knob turn\",\"prompt\":\"turn the knob back and forth\",\"registers\":[],\"events\":[],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"changes\"}}}]},{\"description\":\"clockwise turn\",\"prompt\":\"turn the knob clockwise\",\"registers\":[],\"events\":[],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"increases\"}}}]},{\"description\":\"counter-clockwise turn\",\"prompt\":\"turn the knob counter-clockwise\",\"registers\":[],\"events\":[],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"decreases\"}}}]},{\"description\":\"one rotation clockwise\",\"prompt\":\"turn one complete rotation clockwise\",\"registers\":[\"clicks_per_turn\"],\"events\":[],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"Identifier\",\"name\":\"clicks_per_turn\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"increasesBy\"}}}]},{\"description\":\"one rotation counter-clockwise\",\"prompt\":\"turn one complete rotation counter-clockwise\",\"registers\":[\"clicks_per_turn\"],\"events\":[],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"Identifier\",\"name\":\"clicks_per_turn\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"decreasesBy\"}}}]},{\"description\":\"no missing value clockwise\",\"prompt\":\"slowly turn clockwise one complete rotation\",\"registers\":[\"position\",\"clicks_per_turn\"],\"events\":[],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"Identifier\",\"name\":\"position\"},\"right\":{\"type\":\"Identifier\",\"name\":\"clicks_per_turn\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"stepsUpTo\"}}},{\"prompt\":\"is the knob at the same physical position as when you started turning?\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]},{\"description\":\"no missing value counter-clockwise\",\"prompt\":\"slowly turn counter-clockwise one complete rotation\",\"registers\":[\"position\",\"clicks_per_turn\"],\"events\":[],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"position\"},{\"type\":\"BinaryExpression\",\"operator\":\"-\",\"left\":{\"type\":\"Identifier\",\"name\":\"position\"},\"right\":{\"type\":\"Identifier\",\"name\":\"clicks_per_turn\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"stepsDownTo\"}}},{\"prompt\":\"is the knob at the same physical position as when you started turning?\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[],\"callee\":{\"type\":\"Identifier\",\"name\":\"ask\"}}}]}]},{\"description\":\"Sound level tests\",\"serviceClassIdentifier\":346888797,\"tests\":[{\"description\":\"loud event followed by quiet event\",\"prompt\":\"Make a loud noise and then be quiet\",\"registers\":[\"sound_level\",\"loud_threshold\",\"quiet_threshold\"],\"events\":[\"loud\",\"quiet\"],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\">\",\"left\":{\"type\":\"Identifier\",\"name\":\"sound_level\"},\"right\":{\"type\":\"Identifier\",\"name\":\"loud_threshold\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"check\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"loud\"},{\"type\":\"Literal\",\"value\":true,\"raw\":\"true\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"nextEvent\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"<\",\"left\":{\"type\":\"Identifier\",\"name\":\"sound_level\"},\"right\":{\"type\":\"Identifier\",\"name\":\"quiet_threshold\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"check\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"quiet\"},{\"type\":\"Literal\",\"value\":true,\"raw\":\"true\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"nextEvent\"}}}]}]},{\"description\":\"Thermometer tests\",\"serviceClassIdentifier\":337754823,\"tests\":[{\"description\":\"in range\",\"prompt\":\"Check that thermometer temperature is in expected range\",\"registers\":[\"temperature\",\"max_temperature\",\"temperature_error\",\"min_temperature\"],\"events\":[],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"<=\",\"left\":{\"type\":\"Identifier\",\"name\":\"temperature\"},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"Identifier\",\"name\":\"max_temperature\"},\"right\":{\"type\":\"Identifier\",\"name\":\"temperature_error\"}}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"check\"}}},{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"<=\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\"-\",\"left\":{\"type\":\"Identifier\",\"name\":\"min_temperature\"},\"right\":{\"type\":\"Identifier\",\"name\":\"temperature_error\"}},\"right\":{\"type\":\"Identifier\",\"name\":\"temperature\"}}],\"callee\":{\"type\":\"Identifier\",\"name\":\"check\"}}}]},{\"description\":\"increase temperature\",\"prompt\":\"Blow on the sensor to increase the temperature by one degree C\",\"registers\":[],\"events\":[],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"temperature\"},{\"type\":\"Literal\",\"value\":1,\"raw\":\"1.0\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"increasesBy\"}}}]},{\"description\":\"decrease temperature\",\"prompt\":\"Let the sensor cool down to decrease the temperature by one degree C\",\"registers\":[],\"events\":[],\"testCommands\":[{\"prompt\":\"\",\"call\":{\"type\":\"CallExpression\",\"arguments\":[{\"type\":\"Identifier\",\"name\":\"temperature\"},{\"type\":\"Literal\",\"value\":1,\"raw\":\"1.0\"}],\"callee\":{\"type\":\"Identifier\",\"name\":\"decreasesBy\"}}}]}]}]");

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
//# sourceMappingURL=859a83de993caea7524bf57c2975f3be6812c8c3-9bcd9663e98a7e393109.js.map