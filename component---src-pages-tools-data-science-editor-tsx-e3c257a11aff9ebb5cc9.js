(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1323],{

/***/ 42164:
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
// EXTERNAL MODULE: ./node_modules/react-blockly/dist/index.js
var dist = __webpack_require__(691);
// EXTERNAL MODULE: ./node_modules/@blockly/theme-modern/src/index.js
var src = __webpack_require__(2990);
// EXTERNAL MODULE: ./node_modules/@blockly/theme-dark/src/index.js
var theme_dark_src = __webpack_require__(26576);
// EXTERNAL MODULE: ./src/components/vm/BlocklyModalDialogs.tsx
var BlocklyModalDialogs = __webpack_require__(50769);
// EXTERNAL MODULE: ./src/components/vm/jsongenerator.ts
var jsongenerator = __webpack_require__(8374);
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(91350);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./src/components/vm/useBlocklyEvents.ts
var useBlocklyEvents = __webpack_require__(52152);
// EXTERNAL MODULE: ./src/components/vm/useBlocklyPlugins.ts + 8 modules
var useBlocklyPlugins = __webpack_require__(30567);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(35313);
// EXTERNAL MODULE: ./node_modules/blockly/index.js
var blockly = __webpack_require__(74640);
var blockly_default = /*#__PURE__*/__webpack_require__.n(blockly);
;// CONCATENATED MODULE: ./src/components/data-science/useDataToolbox.ts



function loadBlocks() {
  // declare all block types here
  var blocks = [{
    kind: "block",
    type: "jacdac_math_arithmetic",
    message0: "%1 %2 %3",
    args0: [{
      type: "input_value",
      name: "A",
      check: "Number"
    }, {
      type: "field_dropdown",
      name: "OP",
      options: [["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"], ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"], ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"], ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"]]
    }, {
      type: "input_value",
      name: "B",
      check: "Number"
    }],
    inputsInline: true,
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
    extensions: ["math_op_tooltip"]
  }]; // re-register blocks with blocklys

  blocks.forEach(function (block) {
    return (blockly_default()).Blocks[block.type] = {
      jacdacDefinition: block,
      init: function init() {
        this.jsonInit(block);
      }
    };
  });
}

function useToolbox(source) {
  var table = [{
    name: "x"
  }, {
    name: "y"
  }];
  (0,react.useMemo)(function () {
    return loadBlocks();
  }, [table]);
  var toolboxConfiguration = {
    kind: "categoryToolbox",
    contents: [{
      kind: "category",
      name: "Mathsdfasfs",
      contents: [{
        kind: "block",
        type: "jacdac_math_arithmetic"
      }, {
        kind: "block",
        type: "jacdac_math_arithmetic"
      }]
    }, {
      kind: "category",
      name: "Yay",
      contents: [{
        kind: "block",
        type: "math_arithmetic"
      }]
    }]
  }; // todo

  return {
    toolboxConfiguration: toolboxConfiguration
  };
}
;// CONCATENATED MODULE: ./src/components/data-science/DSBlockEditor.tsx














var useStyles = (0,makeStyles/* default */.Z)(function (theme) {
  return (0,createStyles/* default */.Z)({
    editor: {
      height: "calc(100vh - 10rem)",
      "& .blocklyTreeLabel": {
        fontFamily: theme.typography.fontFamily
      },
      "& .blocklyText": {
        fontWeight: "normal !important",
        fontFamily: theme.typography.fontFamily + " !important"
      }
    }
  });
});
function DSBlockEditor(props) {
  var className = props.className,
      onXmlChange = props.onXmlChange,
      onJSONChange = props.onJSONChange,
      initialXml = props.initialXml,
      workspaceRef = props.workspaceRef;
  var classes = useStyles();

  var _useContext = (0,react.useContext)(DarkModeContext/* default */.Z),
      darkMode = _useContext.darkMode;

  var _useContext2 = (0,react.useContext)(AppContext/* default */.ZP),
      setError = _useContext2.setError;

  var _useState = (0,react.useState)(),
      source = _useState[0],
      setSource = _useState[1];

  var _useDataToolbox = useToolbox(source),
      toolboxConfiguration = _useDataToolbox.toolboxConfiguration;

  var theme = darkMode === "dark" ? theme_dark_src/* default */.Z : src/* default */.Z;
  var gridColor = darkMode === "dark" ? "#555" : "#ccc"; // ReactBlockly
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var blocklyRef = (0,react.useRef)(null);

  var _ref = (0,dist/* useBlocklyWorkspace */.JP)({
    ref: blocklyRef,
    toolboxConfiguration: toolboxConfiguration,
    workspaceConfiguration: {
      collapse: false,
      disable: false,
      comments: false,
      css: true,
      trashcan: false,
      sounds: false,
      grid: {
        spacing: 25,
        length: 1,
        colour: gridColor,
        snap: true
      },
      renderer: "zelos",
      theme: theme,
      oneBasedIndex: false,
      move: {
        scrollbars: {
          vertical: true,
          horizontal: true
        }
      },
      media: (0,gatsby_browser_entry.withPrefix)("blockly/media/"),
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.1,
        scaleSpeed: 1.2,
        pinch: true
      }
    },
    initialXml: initialXml,
    onImportXmlError: function onImportXmlError() {
      return setError("Error loading blocks...");
    }
  }),
      workspace = _ref.workspace,
      xml = _ref.xml; // store ref


  (0,react.useEffect)(function () {
    if (workspaceRef) {
      workspaceRef.current = workspace;
      return function () {
        return workspaceRef.current = undefined;
      };
    }
  }, [workspace, workspaceRef]); // plugins

  (0,useBlocklyPlugins/* default */.Z)(workspace);
  (0,useBlocklyEvents/* default */.Z)(workspace); // blockly did a change

  (0,react.useEffect)(function () {
    if (!workspace || workspace.isDragging()) return;
    onXmlChange === null || onXmlChange === void 0 ? void 0 : onXmlChange(xml); // save json

    if (onJSONChange) {
      // emit json
      var newSource = (0,jsongenerator/* domToJSON */.iL)(workspace);

      if (JSON.stringify(newSource) !== JSON.stringify(source)) {
        setSource(newSource);
        onJSONChange === null || onJSONChange === void 0 ? void 0 : onJSONChange(newSource);
      }
    }
  }, [workspace, xml]); // resize blockly

  (0,react.useEffect)(function () {
    var observer = new ResizeObserver(function () {
      return workspace === null || workspace === void 0 ? void 0 : workspace.resize();
    });
    observer.observe(blocklyRef.current);
    return function () {
      return observer.disconnect();
    };
  }, [workspace, blocklyRef.current]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)(classes.editor, className),
    ref: blocklyRef
  }), /*#__PURE__*/react.createElement(BlocklyModalDialogs/* default */.Z, null));
}
;// CONCATENATED MODULE: ./src/pages/tools/data-science-editor.tsx


function Page() {
  return /*#__PURE__*/react.createElement(DSBlockEditor, null);
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-data-science-editor-tsx-e3c257a11aff9ebb5cc9.js.map