(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "GnY1":
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
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4+mf");
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Z8Ma");
/* harmony import */ var _components_ServiceTest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("kKGk");


/* @jsx mdx */


/* @jsxRuntime classic */

/* @jsx mdx */





var _frontmatter = {};
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])(_components_ServiceTest__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    serviceSpec: Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_5__[/* serviceSpecificationFromClassIdentifier */ "G"])(props.pageContext.node.classIdentifier),
    mdxType: "ServiceTest"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h2", {
    "id": "see-also",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "h2",
    "href": "#see-also",
    "aria-label": "see also permalink",
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
  }))), "See Also"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    href: "https://github.com/microsoft/jacdac/tree/main/services/" + props.pageContext.node.shortId + ".md"
  }, "Edit specification source"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", null, "Read ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/reference/service-specification/",
    mdxType: "Link"
  }, "Service Specification Language"), " reference"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", null, "Create a new service specification using the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/tools/service-editor/",
    mdxType: "Link"
  }, "Service Editor")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", null, "Using services in JavaScript with the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/clients/web/jdom",
    mdxType: "Link"
  }, "Jacdac Object Model (JDOM)"))));
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
//# sourceMappingURL=component---src-templates-service-test-mdx-adffc1875bb3bcc675c9.js.map