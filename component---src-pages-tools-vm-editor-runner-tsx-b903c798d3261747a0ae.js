(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1297],{

/***/ 86795:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/node_modules/jsep/build/jsep.js
var jsep = __webpack_require__(25297);
var jsep_default = /*#__PURE__*/__webpack_require__.n(jsep);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdutils.ts
var jdutils = __webpack_require__(30055);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/ir.ts
var IT4Functions = [{
  id: "role",
  args: ["Identifier", "Identifier"],
  prompt: "role variable {1} of service type {2}",
  context: "command"
}, {
  id: "awaitEvent",
  args: ["event", ["boolean", true]],
  prompt: "wait for event {1} and then check {2} (other events ignored)",
  context: "command"
}, {
  id: "awaitCondition",
  args: ["boolean"],
  prompt: "wait for condition {1}",
  context: "command"
}, {
  id: "writeRegister",
  args: ["register", "number"],
  prompt: "write value {2:val} to {1}",
  context: "command"
}, {
  id: "writeLocal",
  args: ["register", "number"],
  prompt: "write value {2:val} to {1}",
  context: "command"
}, {
  id: "halt",
  args: [],
  prompt: "terminates the current handler",
  context: "command"
}];
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/markdown.ts
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var supportedExpressions = ["MemberExpression", "ArrayExpression", "BinaryExpression", "Identifier", "Literal", "UnaryExpression", "LogicalExpression"];
function parseITTTMarkdownToJSON(filecontent, filename) {
  if (filename === void 0) {
    filename = "";
  }

  filecontent = (filecontent || "").replace(/\r/g, "");
  var info = {
    description: "",
    roles: [],
    registers: [],
    events: [],
    handlers: []
  };
  var backticksType = "";
  var errors = [];
  var lineNo = 0;
  var currentHandler = null;
  var handlerHeading = "";
  var symbolResolver = new jdutils/* SpecSymbolResolver */.ll(undefined, function (role) {
    // lookup in roles first
    var shortId = info.roles.find(function (pair) {
      return pair.role === role;
    });

    if (shortId) {
      // must succeed
      return (0,spec/* serviceSpecificationFromName */.kB)(shortId.serviceShortName);
    } else {
      var service = (0,spec/* serviceSpecificationFromName */.kB)(role);

      if (!service) {
        error("can't find service with shortId=" + role);
        return undefined;
      }

      return service;
    }
  }, function (e) {
    return error(e);
  });
  var parser = new jdutils/* SpecAwareMarkDownParser */.F2(symbolResolver, supportedExpressions, (jsep_default()), function (e) {
    return error(e);
  });

  try {
    for (var _iterator = _createForOfIteratorHelperLoose(filecontent.split(/\n/)), _step; !(_step = _iterator()).done;) {
      var line = _step.value;
      lineNo++;
      processLine(line);
    }
  } catch (e) {
    error("exception: " + e.message);
  }

  if (currentHandler) finishHandler(symbolResolver);
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

    var interpret = backticksType == "default" || line.slice(0, 4) == "    " || /^\t/.exec(line);

    if (!interpret) {
      var _m = /^(#+)\s*(.*)/.exec(line);

      if (_m) {
        handlerHeading = "";
        var hd = _m[1],
            cont = _m[2];

        if (hd == "#") {
          if (!info.description) info.description = cont.trim();else error("use ## to start a handler, not #");
        } else if (hd == "##") {
          if (currentHandler) finishHandler(symbolResolver);
          handlerHeading = cont.trim();
        }
      }
    } else {
      var expanded = line.replace(/\/\/.*/, "").trim();
      if (!expanded) return;
      processCommand(expanded);
    }
  }

  function processCommand(expanded) {
    if (!currentHandler) {
      if (!handlerHeading) error("every handler must have a description (via ##)");
      currentHandler = {
        description: handlerHeading,
        commands: []
      };
      handlerHeading = "";
    }

    var ret = parser.processLine(expanded, IT4Functions);

    if (ret) {
      var command = ret[0],
          root = ret[1];

      if (currentHandler.commands.length === 0) {
        if ((command === null || command === void 0 ? void 0 : command.id) === "role") {
          // TODO: check
          var role = root.arguments[0].name;
          var serviceShortName = root.arguments[1].name;
          var service = (0,spec/* serviceSpecificationFromName */.kB)(serviceShortName);
          if (!service) error("can't find service with shortId=" + serviceShortName);else if (info.roles.find(function (pair) {
            return pair.role === role;
          })) error("role with name " + role + " already declared");else info.roles.push({
            role: role,
            serviceShortName: serviceShortName
          });
          return;
        } else if (!command || command.id !== "awaitEvent" && command.id !== "awaitCondition") {
          error("An ITTT handler must begin with call to an await function (awaitEvent | awaitCondition)");
          return;
        }
      } else {
        if ((command === null || command === void 0 ? void 0 : command.id) === "role") {
          error("roles must be declared at beginning of handler");
        }
      }

      currentHandler.commands.push({
        guard: undefined,
        command: root
      });
    }
  }

  function finishHandler(sym) {
    if (currentHandler.commands.length > 0) info.handlers.push(currentHandler);
    sym.registers.forEach(function (r) {
      if (info.registers.indexOf(r) < 0) info.registers.push(r);
    });
    sym.events.forEach(function (e) {
      if (info.events.indexOf(e) < 0) info.events.push(e);
    });
    sym.reset();
    currentHandler = null;
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
// EXTERNAL MODULE: ./src/components/useLocalStorage.ts
var useLocalStorage = __webpack_require__(86581);
// EXTERNAL MODULE: ./src/components/ui/HighlightTextField.tsx + 1 modules
var HighlightTextField = __webpack_require__(33024);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./src/components/ui/GridHeader.tsx
var GridHeader = __webpack_require__(95393);
// EXTERNAL MODULE: ./src/components/vm/VMRunner.tsx + 2 modules
var VMRunner = __webpack_require__(88523);
// EXTERNAL MODULE: ./src/components/dashboard/Dashboard.tsx + 3 modules
var Dashboard = __webpack_require__(65063);
;// CONCATENATED MODULE: ./src/components/tools/VMEditorRunner.tsx








var VM_MARKDOWN_SOURCE_STORAGE_KEY = "jacdac:vmeditorsource:markdown";
function VMEditorRunner() {
  var _useLocalStorage = (0,useLocalStorage/* default */.Z)(VM_MARKDOWN_SOURCE_STORAGE_KEY, "# VM Handler program\n\n"),
      source = _useLocalStorage[0],
      setSource = _useLocalStorage[1];

  var json = (0,react.useMemo)(function () {
    return parseITTTMarkdownToJSON(source);
  }, [source]);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    spacing: 2,
    container: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(HighlightTextField/* default */.Z, {
    code: source,
    language: "markdown",
    onChange: setSource,
    annotations: json === null || json === void 0 ? void 0 : json.errors
  })), /*#__PURE__*/react.createElement(GridHeader/* default */.Z, {
    title: "Preview"
  }), json && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(VMRunner/* default */.Z, {
    program: json
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Dashboard/* default */.Z, null)));
}
;// CONCATENATED MODULE: ./src/pages/tools/vm-editor-runner.tsx


function Page() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "VM Editor/Runner"), /*#__PURE__*/react.createElement(VMEditorRunner, null));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-vm-editor-runner-tsx-b903c798d3261747a0ae.js.map