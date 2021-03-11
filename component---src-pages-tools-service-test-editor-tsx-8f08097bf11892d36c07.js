(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

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

/***/ "9Nrx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Page; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__("Z3vd");

// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdutils.ts
var jdutils = __webpack_require__("3ArF");

// EXTERNAL MODULE: ./jacdac-ts/node_modules/jsonpath-plus/dist/index-browser-esm.js
var index_browser_esm = __webpack_require__("faLi");

// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdtestfuns.ts
var jdtestfuns = __webpack_require__("et/c");

// EXTERNAL MODULE: ./jacdac-ts/node_modules/jsep/build/jsep.js
var jsep = __webpack_require__("o8k2");
var jsep_default = /*#__PURE__*/__webpack_require__.n(jsep);

// CONCATENATED MODULE: ./jacdac-ts/jacdac-spec/spectool/jdtest.ts
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="jdspec.d.ts" />
/// <reference path="jdtest.d.ts" />




var supportedExpressions = ["BinaryExpression", "CallExpression", "Identifier", "Literal", "UnaryExpression", "LogicalExpression"]; // we parse a test with respect to an existing ServiceSpec

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
    var index = jdtestfuns["a" /* testCommandFunctions */].findIndex(function (r) {
      return callee == r.id;
    });

    if (index < 0) {
      error(callee + " is not a registered test command function.");
      return;
    }

    var root = jsep_default()(expanded);

    if (!root || !root.type || root.type != "CallExpression" || !root.callee || !root.arguments) {
      error("a command must be a call expression in JavaScript syntax");
    } else {
      // check for unsupported expression types
      if (supportedExpressions.indexOf(root.type) < 0) error("Expression of type " + root.type + " not currently supported"); // check arguments

      var expected = jdtestfuns["a" /* testCommandFunctions */][index].args.length;
      if (expected !== root.arguments.length) error(callee + " expects " + expected + " arguments; got " + root.arguments.length);else {
        root.arguments.forEach(function (arg, a) {
          if (jdtestfuns["a" /* testCommandFunctions */][index].args[a] === "register" && arg.type !== "Identifier") {
            error(callee + " expects a register in argument position " + (a + 1));
          }
        });
        var callers = Object(index_browser_esm["a" /* JSONPath */])({
          path: "$..*[?(@.type=='CallExpression')]",
          json: root
        });
        callers.forEach(function (callExpr) {
          if (callExpr.callee.type !== "Identifier") error("all calls must be direct calls");
          var id = callExpr.callee.name;
          var indexFun = jdtestfuns["b" /* testExpressionFunctions */].findIndex(function (r) {
            return id == r.id;
          });
          if (indexFun < 0) error(id + " is not a registered test expression function.");

          if (id === 'start') {
            if (callee !== 'check') error("start expression function can only be used inside check test function");
            var callsUnder = Object(index_browser_esm["a" /* JSONPath */])({
              path: "$..*[?(@.type=='CallExpression')]",
              json: callExpr
            });
            callsUnder.forEach(function (ce) {
              if (ce.callee.type === "Identifier" && ce.callee.name === "start") error("cannot nest start underneath start");
            });
          }

          var expected = jdtestfuns["b" /* testExpressionFunctions */][indexFun].args.length;
          if (expected !== callExpr.arguments.length) error(callee + " expects " + expected + " arguments; got " + callExpr.arguments.length);
        });
      } // now visit all (p,c), c an Identifier that is not a callee child of CallExpression
      // or a property child of a MemberExpression

      var exprs = Object(index_browser_esm["a" /* JSONPath */])({
        path: "$..*[?(@.type=='Identifier')]^",
        json: root
      });
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
    if (parent.length) {
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
          var val = Object(jdutils["b" /* parseIntFloat */])(spec, child.name);
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
          Object(jdutils["a" /* getRegister */])(spec, child.name);
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
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var jdom_spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./src/components/useLocalStorage.ts
var useLocalStorage = __webpack_require__("kdz+");

// EXTERNAL MODULE: ./src/components/ui/HighlightTextField.tsx
var HighlightTextField = __webpack_require__("lhji");

// EXTERNAL MODULE: ./src/components/ServiceSpecificationSelect.tsx
var ServiceSpecificationSelect = __webpack_require__("8uQ5");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./src/components/test/ServiceTest.tsx + 1 modules
var ServiceTest = __webpack_require__("P1Ev");

// EXTERNAL MODULE: ./src/components/github.ts + 1 modules
var github = __webpack_require__("LGN/");

// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__("2K/c");

// CONCATENATED MODULE: ./src/components/tools/ServiceTestEditor.tsx













var SERVICE_TEST_STORAGE_KEY = "jacdac:servicetesteditorsource";
function ServiceTestEditor() {
  var _useContext = Object(react["useContext"])(AppContext["c" /* default */]),
      setError = _useContext.setError;

  var _useState = Object(react["useState"])(constants["ud" /* SRV_BUTTON */]),
      serviceClass = _useState[0],
      setServiceClass = _useState[1];

  var _useLocalStorage = Object(useLocalStorage["a" /* default */])(SERVICE_TEST_STORAGE_KEY, ""),
      source = _useLocalStorage[0],
      setSource = _useLocalStorage[1];

  var serviceSpec = Object(react["useMemo"])(function () {
    return Object(jdom_spec["D" /* serviceSpecificationFromClassIdentifier */])(serviceClass);
  }, [serviceClass]);
  var json = Object(react["useMemo"])(function () {
    return parseSpecificationTestMarkdownToJSON(source, serviceSpec);
  }, [source, serviceSpec]);
  var servicePath = json && "services/tests/" + (serviceSpec.camelName || serviceSpec.shortId || "0x" + serviceSpec.classIdentifier.toString(16)).toLowerCase();

  var handleLoadFromGithub = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var ghSource;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(github["d" /* fetchText */])("microsoft/jacdac", "main", "services/tests/" + serviceSpec.shortId + ".md", "text/plain");

            case 3:
              ghSource = _context.sent;
              if (ghSource) setSource(ghSource);else setError("Test source not found");
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              setError(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function handleLoadFromGithub() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    spacing: 2,
    container: true
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2,
    direction: "row"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(ServiceSpecificationSelect["a" /* default */], {
    label: "Select a service to test",
    serviceClass: serviceClass,
    setServiceClass: setServiceClass
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    variant: "outlined",
    disabled: !serviceSpec,
    onClick: handleLoadFromGithub
  }, "Load tests from GitHub")))), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(HighlightTextField["a" /* default */], {
    code: source,
    language: "markdown",
    onChange: setSource,
    annotations: json === null || json === void 0 ? void 0 : json.errors,
    pullRequestTitle: json && "Service test: " + serviceSpec.name,
    pullRequestPath: servicePath
  })), json && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(ServiceTest["a" /* default */], {
    showStartSimulator: true,
    serviceSpec: serviceSpec,
    serviceTest: json
  })));
}
// CONCATENATED MODULE: ./src/pages/tools/service-test-editor.tsx


function Page() {
  return /*#__PURE__*/react_default.a.createElement(ServiceTestEditor, null);
}

/***/ }),

/***/ "DObr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("H2TA");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ofer");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("iuhU");






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      fontWeight: theme.typography.fontWeightMedium,
      marginTop: -2
    }
  };
};
var AlertTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function AlertTitle(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    gutterBottom: true,
    component: "div",
    ref: ref,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(classes.root, className)
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(styles, {
  name: 'MuiAlertTitle'
})(AlertTitle));

/***/ }),

/***/ "E8kk":
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
}), 'Info');

exports.default = _default;

/***/ }),

/***/ "P1Ev":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ServiceTest; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__("yNWl");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__("Z3vd");

// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/AlertTitle/AlertTitle.js
var AlertTitle = __webpack_require__("DObr");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Info.js
var Info = __webpack_require__("E8kk");
var Info_default = /*#__PURE__*/__webpack_require__.n(Info);

// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__("FQT7");

// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__("l6uw");

// EXTERNAL MODULE: ./jacdac-ts/src/hosts/hosts.ts + 22 modules
var hosts = __webpack_require__("y+c1");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__("c5x+");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/test.ts
var test = __webpack_require__("3GY0");

// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__("TD2k");

// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__("30+C");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__("o4QW");

// EXTERNAL MODULE: ./src/components/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__("5oJA");

// CONCATENATED MODULE: ./src/components/SelectService.tsx







function SelectService(props) {
  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var serviceClass = props.serviceClass,
      onSelect = props.onSelect;
  var services = Object(useChange["a" /* default */])(bus, function (n) {
    return n.services({
      serviceClass: serviceClass
    });
  }, []);
  var gridBreakpoints = Object(useGridBreakpoints["a" /* default */])();

  var handleSelect = function handleSelect(service) {
    return function () {
      return onSelect(service);
    };
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, !!services.length && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, services.map(function (service) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], Object.assign({
      key: service.id,
      item: true
    }, gridBreakpoints), /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(DeviceCardHeader["a" /* default */], {
      device: service.device
    }), /*#__PURE__*/react_default.a.createElement(CardActions["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
      variant: "contained",
      color: "primary",
      onClick: handleSelect(service)
    }, "Select"))));
  })), !(services !== null && services !== void 0 && services.length) && /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "info"
  }, "Not seeing your device? Try some of the following.", /*#__PURE__*/react_default.a.createElement("ul", null, /*#__PURE__*/react_default.a.createElement("li", null, "Check that your device is connected"), /*#__PURE__*/react_default.a.createElement("li", null, "Use the ", /*#__PURE__*/react_default.a.createElement("strong", null, "packet console"), " to monitor packets on the bus"), /*#__PURE__*/react_default.a.createElement("li", null, "Check the class identifier in your annoucement packets"))));
}
// EXTERNAL MODULE: ./src/components/test/ServiceTestRunner.tsx + 2 modules
var ServiceTestRunner = __webpack_require__("D5X2");

// CONCATENATED MODULE: ./src/components/test/ServiceTest.tsx


 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports










function Diagnostics(props) {
  var serviceClass = props.serviceClass;

  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var hostDefinition = Object(hosts["d" /* hostDefinitionFromServiceClass */])(serviceClass);

  var handleStartSimulator = function handleStartSimulator() {
    return Object(hosts["b" /* addHost */])(bus, hostDefinition.services());
  };

  if (!hostDefinition) return null;
  return /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "info"
  }, /*#__PURE__*/react_default.a.createElement(AlertTitle["a" /* default */], null, "Developer zone"), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    variant: "outlined",
    onClick: handleStartSimulator
  }, "start simulator"));
}

function ServiceTestRunnerSelect(props) {
  var serviceClass = props.serviceClass,
      onSelect = props.onSelect;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h3", null, "Select a device to test"), /*#__PURE__*/react_default.a.createElement(SelectService, {
    serviceClass: serviceClass,
    onSelect: onSelect
  }));
}

function ServiceTest(props) {
  var serviceSpec = props.serviceSpec,
      showStartSimulator = props.showStartSimulator,
      _props$serviceTest = props.serviceTest,
      serviceTest = _props$serviceTest === void 0 ? Object(test["a" /* serviceTestFromServiceClass */])(serviceSpec === null || serviceSpec === void 0 ? void 0 : serviceSpec.classIdentifier) : _props$serviceTest;
  var serviceClass = serviceSpec.classIdentifier;

  var _useState = Object(react["useState"])(undefined),
      service = _useState[0],
      setService = _useState[1];

  var handleSelect = function handleSelect(service) {
    return setService(service);
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h1", null, serviceSpec.name + " tests", /*#__PURE__*/react_default.a.createElement(IconButtonWithTooltip["a" /* default */], {
    title: "go to specification",
    to: "/services/" + serviceSpec.shortId + "/"
  }, /*#__PURE__*/react_default.a.createElement(Info_default.a, null))), (flags["a" /* default */].diagnostics || showStartSimulator) && /*#__PURE__*/react_default.a.createElement(Diagnostics, {
    serviceClass: serviceClass
  }), !service && /*#__PURE__*/react_default.a.createElement(ServiceTestRunnerSelect, {
    serviceClass: serviceClass,
    onSelect: handleSelect
  }), service && /*#__PURE__*/react_default.a.createElement(ServiceTestRunner["a" /* default */], {
    service: service,
    serviceTest: serviceTest
  }));
}

/***/ }),

/***/ "lhji":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightTextField; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rePB");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3Mpw");
/* harmony import */ var prism_react_renderer_themes_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nY9v");
/* harmony import */ var prism_react_renderer_themes_vsDark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("SoeO");
/* harmony import */ var _DarkModeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("geQJ");
/* harmony import */ var use_editable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("kWdF");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ZiQX");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("H2TA");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("csfp");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("tRbT");
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("OXkz");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react/jsx-key */

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name







var GithubPullRequestButton = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(14), __webpack_require__.e(87)]).then(__webpack_require__.bind(null, "ha5o"));
});
var AnnotationTooltip = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(function (theme) {
  return {
    arrow: {
      color: theme.palette.error.main
    },
    tooltip: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.common.white,
      boxShadow: theme.shadows[1],
      fontSize: theme.typography.body2.fontSize
    }
  };
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);
function HighlightTextField(props) {
  var _ref2;

  var code = props.code,
      onChange = props.onChange,
      language = props.language,
      annotations = props.annotations,
      pullRequestTitle = props.pullRequestTitle,
      pullRequestPath = props.pullRequestPath,
      pullRequestDescription = props.pullRequestDescription;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_DarkModeContext__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]),
      darkMode = _useContext.darkMode;

  var theme = darkMode === "dark" ? prism_react_renderer_themes_vsDark__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"] : prism_react_renderer_themes_github__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"];
  var editorRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(use_editable__WEBPACK_IMPORTED_MODULE_6__[/* useEditable */ "a"])(editorRef, onChange, {
    disabled: false,
    indentation: 4
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    container: true,
    spacing: 1,
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__[/* defaultProps */ "b"], {
    code: code,
    language: language,
    theme: theme
  }), function (_ref) {
    var className = _ref.className,
        style = _ref.style,
        tokens = _ref.tokens,
        getTokenProps = _ref.getTokenProps;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("pre", {
      ref: editorRef,
      className: className,
      spellCheck: false,
      style: _objectSpread(_objectSpread({}, style), {
        minHeight: "12rem",
        whiteSpace: "pre-wrap"
      })
    }, tokens.map(function (line, i) {
      var annotation = annotations === null || annotations === void 0 ? void 0 : annotations.find(function (a) {
        return a.line === i + 1;
      });
      var title = annotation === null || annotation === void 0 ? void 0 : annotation.message;
      var el = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        key: i,
        style: annotation && {
          borderBottom: "dashed 1px red"
        }
      }, line.filter(function (token) {
        return !token.empty;
      }).map(function (token, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", getTokenProps({
          token: token,
          key: key
        }));
      }), i < tokens.length - 1 ? "\n" : null);
      return title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AnnotationTooltip, {
        title: title,
        arrow: true,
        key: i
      }, el) : el;
    }));
  })), !!(annotations !== null && annotations !== void 0 && annotations.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    severity: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, annotations.map(function (a, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: i
    }, "line ", a.line, ": ", a.message);
  })))), pullRequestTitle && pullRequestPath && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GithubPullRequestButton, {
    title: pullRequestTitle,
    head: pullRequestPath,
    description: pullRequestDescription,
    files: (_ref2 = {}, _ref2[pullRequestPath + ".md"] = code, _ref2)
  }))));
}

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

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-service-test-editor-tsx-8f08097bf11892d36c07.js.map