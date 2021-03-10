(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "0kry":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_frontmatter", function() { return _frontmatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zLVn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7ljp");
/* harmony import */ var _home_runner_work_jacdac_docs_jacdac_docs_src_components_Page_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("NqE+");


/* @jsx mdx */


/* @jsxRuntime classic */

/* @jsx mdx */


var _frontmatter = {};

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("div", props);
  };
};

var TraceList = makeShortcode("TraceList");
var layoutProps = {
  _frontmatter: _frontmatter
};
var MDXLayout = _home_runner_work_jacdac_docs_jacdac_docs_src_components_Page_tsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])(MDXLayout, Object.assign({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h1", {
    "id": "traces",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "h1",
    "href": "#traces",
    "aria-label": "traces permalink",
    "className": "anchor before"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("svg", {
    parentName: "a",
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("path", {
    parentName: "svg",
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  }))), "Traces"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "The list below contains pre-recorded\ntraces of sessions using various Jacdac\ndevices. Click on a trace to load and replay it."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])(TraceList, {
    mdxType: "TraceList"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h2", {
    "id": "trace-format",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "h2",
    "href": "#trace-format",
    "aria-label": "trace format permalink",
    "className": "anchor before"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("svg", {
    parentName: "a",
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("path", {
    parentName: "svg",
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  }))), "Trace format"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "Jacdac traces can be created by recording them in this web site\nand saving them to files. The trace file contains enough information\nto replay all the packets."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("code", {
    parentName: "pre"
  }, "DESCRIPTION\n\nTIMESTAMP PACKET_HEX INFO\n...\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "where"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("inlineCode", {
    parentName: "li"
  }, "DESCRIPTION"), " is a Markdown-formatted description of the trace."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("inlineCode", {
    parentName: "li"
  }, "TIMESTAMP"), " is the timestamp of the packet, in milliseconds"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("inlineCode", {
    parentName: "li"
  }, "PACKET_HEX"), " is the packet header and data formatted as a hex buffer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("inlineCode", {
    parentName: "li"
  }, "INFO"), " is the human readable description of the packet, ignored by the parser")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "The traces are stored at ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "p",
    "href": "https://github.com/microsoft/jacdac/tree/main/traces",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, "https://github.com/microsoft/jacdac/tree/main/traces"), ".\nIf you want to contribute new traces, please send us a pull request!"));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "NqE+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // eslint-disable-next-line react/prop-types

var Page = function Page(_ref) {
  var props = _ref.props,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], props, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-traces-mdx-627ac94b3593f966b055.js.map