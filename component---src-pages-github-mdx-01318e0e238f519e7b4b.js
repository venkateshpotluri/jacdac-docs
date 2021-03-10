(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

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

/***/ "XINF":
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

var GithubRepositoryList = makeShortcode("GithubRepositoryList");
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
    "id": "github-repositories",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "h1",
    "href": "#github-repositories",
    "aria-label": "github repositories permalink",
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
  }))), "GitHub Repositories"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "Jacdac is Open Source on GitHub. Here is a map to help you find the part you want:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h2", {
    "id": "specification",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "h2",
    "href": "#specification",
    "aria-label": "specification permalink",
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
  }))), "Specification"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])(GithubRepositoryList, {
    repos: ["microsoft/jacdac"],
    showDescription: true,
    mdxType: "GithubRepositoryList"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h2", {
    "id": "module-development",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "h2",
    "href": "#module-development",
    "aria-label": "module development permalink",
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
  }))), "Module Development"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h3", {
    "id": "schematics-and-c-sdk",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "h3",
    "href": "#schematics-and-c-sdk",
    "aria-label": "schematics and c sdk permalink",
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
  }))), "Schematics and C SDK"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])(GithubRepositoryList, {
    repos: ["microsoft/jacdac-mdk", "microsoft/jacdac-c"],
    showDescription: true,
    mdxType: "GithubRepositoryList"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h3", {
    "id": "platforms",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "h3",
    "href": "#platforms",
    "aria-label": "platforms permalink",
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
  }))), "Platforms"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])(GithubRepositoryList, {
    repos: ["microsoft/jacdac-stm32x0", "microsoft/jacdac-esp32", "microsoft/jacdac-padauk"],
    showDescription: true,
    mdxType: "GithubRepositoryList"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h2", {
    "id": "client-frameworks",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "h2",
    "href": "#client-frameworks",
    "aria-label": "client frameworks permalink",
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
  }))), "Client frameworks"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])(GithubRepositoryList, {
    repos: ["microsoft/jacdac-circuitpython", "microsoft/pxt-jacdac", "microsoft/jacdac-ts"],
    showDescription: true,
    mdxType: "GithubRepositoryList"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h2", {
    "id": "tools--integrations",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "h2",
    "href": "#tools--integrations",
    "aria-label": "tools  integrations permalink",
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
  }))), "Tools & Integrations"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])(GithubRepositoryList, {
    repos: ["microsoft/jupyter-jacdac"],
    showDescription: true,
    mdxType: "GithubRepositoryList"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h2", {
    "id": "documentation",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "h2",
    "href": "#documentation",
    "aria-label": "documentation permalink",
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
  }))), "Documentation"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])(GithubRepositoryList, {
    repos: ["microsoft/jacdac-docs"],
    showDescription: true,
    mdxType: "GithubRepositoryList"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h2", {
    "id": "microsoft-open-source-code-of-conduct",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "h2",
    "href": "#microsoft-open-source-code-of-conduct",
    "aria-label": "microsoft open source code of conduct permalink",
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
  }))), "Microsoft Open Source Code of Conduct"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "This project is hosted at ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "p",
    "href": "https://github.com/microsoft/jacdac-docs",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, "https://github.com/microsoft/jacdac-docs"), ". This project has adopted the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "p",
    "href": "https://opensource.microsoft.com/codeofconduct/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, "Microsoft Open Source Code of Conduct"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h3", {
    "id": "resources",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "h3",
    "href": "#resources",
    "aria-label": "resources permalink",
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
  }))), "Resources"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "li",
    "href": "https://opensource.microsoft.com/codeofconduct/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, "Microsoft Open Source Code of Conduct")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "li",
    "href": "https://opensource.microsoft.com/codeofconduct/faq/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, "Microsoft Code of Conduct FAQ")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", {
    parentName: "ul"
  }, "Contact ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", {
    parentName: "li",
    "href": "mailto:opencode@microsoft.com",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, "opencode@microsoft.com"), " with questions or concerns")));
}
;
MDXContent.isMDXComponent = true;

/***/ })

}]);
//# sourceMappingURL=component---src-pages-github-mdx-01318e0e238f519e7b4b.js.map