(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1323],{

/***/ 67807:
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js
var NoSsr = __webpack_require__(42862);
// EXTERNAL MODULE: ./src/components/blockly/BlockContext.tsx + 14 modules
var BlockContext = __webpack_require__(85379);
// EXTERNAL MODULE: ./src/components/blockly/BlockEditor.tsx + 3 modules
var BlockEditor = __webpack_require__(85105);
// EXTERNAL MODULE: ./src/components/blockly/dsl/datadsl.ts + 1 modules
var datadsl = __webpack_require__(79018);
// EXTERNAL MODULE: ./src/components/blockly/dsl/variablesdsl.ts
var variablesdsl = __webpack_require__(86947);
// EXTERNAL MODULE: ./src/components/blockly/dsl/shadowdsl.ts
var shadowdsl = __webpack_require__(96958);
// EXTERNAL MODULE: ./src/components/blockly/dsl/fieldsdsl.ts
var fieldsdsl = __webpack_require__(76658);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(21258);
// EXTERNAL MODULE: ./src/components/blockly/BlockDiagnostics.tsx
var BlockDiagnostics = __webpack_require__(9370);
;// CONCATENATED MODULE: ./src/components/blockly/jsonvisitor.ts
function visitBlock(block, visitor) {
  var _visitor$visitBlock;

  if (!block) return;
  (_visitor$visitBlock = visitor.visitBlock) === null || _visitor$visitBlock === void 0 ? void 0 : _visitor$visitBlock.call(visitor, block);
  var inputs = block.inputs,
      children = block.children;
  inputs === null || inputs === void 0 ? void 0 : inputs.forEach(function (input) {
    return visitInput(input, visitor);
  });
  children === null || children === void 0 ? void 0 : children.forEach(function (child) {
    return visitBlock(child, visitor);
  });
}
function visitInput(input, visitor) {
  var _visitor$visitInput;

  if (!input) return;
  (_visitor$visitInput = visitor.visitInput) === null || _visitor$visitInput === void 0 ? void 0 : _visitor$visitInput.call(visitor, input);
  var fields = input.fields,
      child = input.child;
  if (fields) Object.keys(fields).map(function (k) {
    return visitField(k, fields[k], visitor);
  });
  visitBlock(child, visitor);
}
function visitField(name, field, visitor) {
  var _visitor$visitField;

  if (!field) return;
  (_visitor$visitField = visitor.visitField) === null || _visitor$visitField === void 0 ? void 0 : _visitor$visitField.call(visitor, name, field);
}
function visitWorkspace(workspace, visitor) {
  workspace === null || workspace === void 0 ? void 0 : workspace.blocks.forEach(function (block) {
    return visitBlock(block, visitor);
  });
}
;// CONCATENATED MODULE: ./src/components/data-science/DSBlockEditor.tsx











var DS_SOURCE_STORAGE_KEY = "data-science-blockly-xml";

function DSEditorWithContext() {
  // block context handles hosting blockly
  var _useContext = (0,react.useContext)(BlockContext/* default */.C),
      workspaceJSON = _useContext.workspaceJSON; // run this when workspaceJSON changes


  (0,react.useEffect)(function () {
    visitWorkspace(workspaceJSON, {
      visitBlock: function visitBlock(block) {
        return console.log("block " + block.type, {
          block: block
        });
      },
      visitInput: function visitInput(input) {
        return console.log("input " + input.name, {
          input: input
        });
      },
      visitField: function visitField(name, field) {
        return console.log("field " + name + ": " + field.value, {
          field: field
        });
      }
    });
  }, [workspaceJSON]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(BlockEditor/* default */.Z, null), flags/* default.diagnostics */.Z.diagnostics && /*#__PURE__*/react.createElement(BlockDiagnostics/* default */.Z, null));
}

function DScienceEditor() {
  var dsls = (0,react.useMemo)(function () {
    return [datadsl/* default */.Z, variablesdsl/* default */.Z, shadowdsl/* default */.Z, fieldsdsl/* default */.Z];
  }, []);
  return /*#__PURE__*/react.createElement(NoSsr/* default */.Z, null, /*#__PURE__*/react.createElement(BlockContext/* BlockProvider */.Z, {
    storageKey: DS_SOURCE_STORAGE_KEY,
    dsls: dsls
  }, /*#__PURE__*/react.createElement(DSEditorWithContext, null)));
}
;// CONCATENATED MODULE: ./src/pages/tools/data-science-editor.tsx


function Page() {
  return /*#__PURE__*/react.createElement(DScienceEditor, null);
}

/***/ })

}]);