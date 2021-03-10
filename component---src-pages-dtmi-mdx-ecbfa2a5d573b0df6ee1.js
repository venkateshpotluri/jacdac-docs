(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

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

/***/ }),

/***/ "faxC":
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
    "id": "iot-plug-and-play-models",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "h1",
    "href": "#iot-plug-and-play-models",
    "aria-label": "iot plug and play models permalink",
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
  }))), "IoT Plug And Play Models"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "This route hosts ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "p",
    "href": "https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, "DTDL"), " models\nfor each ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "p",
    "href": "/jacdac-docs/services"
  }, "service"), ", similar to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "p",
    "href": "https://devicemodels.azure.com/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, "https://devicemodels.azure.com/"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "p",
    "href": "https://github.com/Azure/digital-twin-model-identifier",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, "DTMI"), " of each services is formatted based on the class identifier:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("code", {
    parentName: "pre"
  }, "dtmi:jacdac:services:x{id};1\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "where ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("inlineCode", {
    parentName: "p"
  }, "{id}"), " is the class identifer rendered as a hex number.\nThe route is generated following the conventions from ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "p",
    "href": "https://github.com/Azure/iot-plugandplay-models#consuming",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, "iot-plugandplay-models"), "\nwhere the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":"), " are replaced by ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("inlineCode", {
    parentName: "p"
  }, "/"), ", and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("inlineCode", {
    parentName: "p"
  }, ";"), " with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("inlineCode", {
    parentName: "p"
  }, "-"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("code", {
    parentName: "pre"
  }, "/dtmi/jacdac/services/x{id}-1.json\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "For example, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "p",
    "href": "/jacdac-docs/dtmi/jacdac/services/x0-1.json"
  }, "/dtmi/jacdac/services/x0-1.json"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "To download all service models, go use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "p",
    "href": "/jacdac-docs/dtmi/jacdac/services.json"
  }, "/dtmi/jacdac/services.json")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h2", {
    "id": "device-twin-designer",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "h2",
    "href": "#device-twin-designer",
    "aria-label": "device twin designer permalink",
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
  }))), "Device Twin Designer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "You can compose devices from services using the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "p",
    "href": "/jacdac-docs/tools/azure-device-twin-designer"
  }, "Azure Device Twin Designer"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h2", {
    "id": "azure-iot-explorer",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "h2",
    "href": "#azure-iot-explorer",
    "aria-label": "azure iot explorer permalink",
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
  }))), "Azure IoT Explorer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "In the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "p",
    "href": "https://docs.microsoft.com/en-us/azure/iot-pnp/howto-use-iot-explorer",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, "Azure IoT Explorer"), ",\nadd ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("inlineCode", {
    parentName: "p"
  }, "https://microbit.github.io/jacdac-docs/dtmi"), "in the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("strong", {
    parentName: "p"
  }, "IoT Hub Settings"), "."));
}
;
MDXContent.isMDXComponent = true;

/***/ })

}]);
//# sourceMappingURL=component---src-pages-dtmi-mdx-ecbfa2a5d573b0df6ee1.js.map