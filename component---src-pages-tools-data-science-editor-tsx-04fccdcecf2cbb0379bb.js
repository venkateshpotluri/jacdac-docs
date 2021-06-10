(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1323],{

/***/ 59448:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": function() { return /* binding */ VM_EVENT; },
/* harmony export */   "H": function() { return /* binding */ VMCode; }
/* harmony export */ });
var VM_EVENT = "vmEvent";
var VMCode;

(function (VMCode) {
  VMCode["WatchChange"] = "vmWatchChange";
  VMCode["Breakpoint"] = "vmBreakpoint";
  VMCode["CommandStarted"] = "vmCommandStarted";
  VMCode["CommandCompleted"] = "vmCommandCompleted";
  VMCode["CommandFailed"] = "vmCommandFailed";
  VMCode["RoleMissing"] = "vmRoleMissing";
  VMCode["InternalError"] = "vmInternalError";
})(VMCode || (VMCode = {}));

/***/ }),

/***/ 24116:
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
// EXTERNAL MODULE: ./src/components/blockly/dsl/variablesdsl.ts
var variablesdsl = __webpack_require__(86947);
// EXTERNAL MODULE: ./src/components/blockly/dsl/shadowdsl.ts
var shadowdsl = __webpack_require__(96958);
;// CONCATENATED MODULE: ./src/components/data-science/datadsl.ts
var colour = "#123456";
var DataScienceBlockDomainSpecificLanguage = /*#__PURE__*/function () {
  function DataScienceBlockDomainSpecificLanguage() {
    this.id = "dataScience";
  }

  var _proto = DataScienceBlockDomainSpecificLanguage.prototype;

  _proto.createBlocks = function createBlocks() {
    var blocks = [{
      kind: "block",
      type: "ds_some_block",
      message0: "some block data",
      args0: [],
      inputsInline: true,
      output: "Number",
      colour: colour
    }];
    return blocks;
  };

  _proto.createCategory = function createCategory() {
    return [{
      kind: "category",
      name: "Data Science",
      colour: colour,
      contents: [{
        kind: "block",
        type: "ds_some_block"
      }]
    }];
  };

  return DataScienceBlockDomainSpecificLanguage;
}();
var dataDsl = new DataScienceBlockDomainSpecificLanguage();
/* harmony default export */ var datadsl = (dataDsl);
;// CONCATENATED MODULE: ./src/components/data-science/DSBlockEditor.tsx







var DS_SOURCE_STORAGE_KEY = "data-science-blockly-xml";
function VMEditor() {
  var dsls = (0,react.useMemo)(function () {
    return [datadsl, variablesdsl/* default */.Z, shadowdsl/* default */.Z];
  }, []);
  return /*#__PURE__*/react.createElement(NoSsr/* default */.Z, null, /*#__PURE__*/react.createElement(BlockContext/* BlockProvider */.Z, {
    storageKey: DS_SOURCE_STORAGE_KEY,
    dsls: dsls
  }, /*#__PURE__*/react.createElement(BlockEditor/* default */.Z, null)));
}
;// CONCATENATED MODULE: ./src/pages/tools/data-science-editor.tsx


function Page() {
  return /*#__PURE__*/react.createElement(VMEditor, null);
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-data-science-editor-tsx-04fccdcecf2cbb0379bb.js.map