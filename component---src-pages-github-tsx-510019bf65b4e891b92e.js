(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "7Q8/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubRepositoryCardHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ofer");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hlFM");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("50B7");
/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("LGN/");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("RwSH");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4+mf");
/* harmony import */ var _jacdac_ts_src_jdom_iframeclient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("olu4");
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("aVfY");
 // tslint:disable-next-line: no-submodule-imports







function GithubRepositoryCardHeader(props) {
  var slug = props.slug,
      showRelease = props.showRelease;

  var _useRepository = Object(_github__WEBPACK_IMPORTED_MODULE_4__[/* useRepository */ "h"])(slug),
      repo = _useRepository.response,
      repoLoading = _useRepository.loading,
      status = _useRepository.status;

  var _useLatestRelease = Object(_github__WEBPACK_IMPORTED_MODULE_4__[/* useLatestRelease */ "f"])(showRelease && slug),
      release = _useLatestRelease.response;

  var iframe = Object(_jacdac_ts_src_jdom_iframeclient__WEBPACK_IMPORTED_MODULE_7__[/* inIFrame */ "b"])();
  var target = iframe ? "_blank" : "";
  var title = repo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    href: repo.html_url,
    target: target
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    component: "span",
    variant: "h6"
  }, repo.organization.login)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    component: "span",
    ml: 0.5,
    mr: 0.5
  }, "/"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    href: repo.html_url,
    target: target
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    component: "span",
    variant: "h5"
  }, repo.name))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    href: "https://github.com/" + slug,
    target: target
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    component: "span",
    variant: "h6"
  }, slug)), repoLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null), status !== 403 && !repoLoading && !repo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    component: "p",
    variant: "caption"
  }, "Unable to find repository."));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    title: title,
    subheader: release && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      color: "textSecondary",
      target: "_blank",
      to: release.html_url
    }, release.name),
    avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5___default.a, null)
  });
}

/***/ }),

/***/ "uhGn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Page; });

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__("30+C");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__("oa/T");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./src/components/github.ts + 1 modules
var github = __webpack_require__("LGN/");

// EXTERNAL MODULE: ./src/components/GithubRepositoryCardHeader.tsx
var GithubRepositoryCardHeader = __webpack_require__("7Q8/");

// CONCATENATED MODULE: ./src/components/GithubRepositoryCard.tsx
 // tslint:disable-next-line: no-submodule-imports




function GithubRepositoryCard(props) {
  var slug = props.slug,
      showRelease = props.showRelease,
      showDescription = props.showDescription;

  var _useRepository = Object(github["h" /* useRepository */])(slug),
      repo = _useRepository.response;

  var description = showDescription && (repo === null || repo === void 0 ? void 0 : repo.description);
  return /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(GithubRepositoryCardHeader["a" /* default */], {
    slug: slug,
    showRelease: showRelease
  }), description && /*#__PURE__*/react_default.a.createElement(CardContent["a" /* default */], null, description && /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], null, description)));
}
// CONCATENATED MODULE: ./src/components/GithubRespositoryList.tsx




function GithubRepositoryList(props) {
  var repos = props.repos,
      others = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["repos"]);

  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, repos.map(function (repo) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: 12,
      key: repo
    }, /*#__PURE__*/react_default.a.createElement(GithubRepositoryCard, Object.assign({
      slug: repo
    }, others)));
  }));
}
// CONCATENATED MODULE: ./src/pages/github.tsx



function Page() {
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h1", null, "GitHub Repositories"), /*#__PURE__*/react_default.a.createElement("p", null, "Jacdac is Open Source on GitHub. Here is a map to help you find the part you want:"), /*#__PURE__*/react_default.a.createElement("h2", null, "Specification"), /*#__PURE__*/react_default.a.createElement(GithubRepositoryList, {
    repos: ["microsoft/jacdac"],
    showDescription: true
  }), /*#__PURE__*/react_default.a.createElement("h2", null, "Module Development"), /*#__PURE__*/react_default.a.createElement("h3", null, "Schematics and C SDK"), /*#__PURE__*/react_default.a.createElement(GithubRepositoryList, {
    repos: ["microsoft/jacdac-mdk", "microsoft/jacdac-c"],
    showDescription: true
  }), /*#__PURE__*/react_default.a.createElement("h3", null, " Platforms"), /*#__PURE__*/react_default.a.createElement(GithubRepositoryList, {
    repos: ["microsoft/jacdac-stm32x0", "microsoft/jacdac-esp32", "microsoft/jacdac-padauk"],
    showDescription: true
  }), /*#__PURE__*/react_default.a.createElement("h2", null, " Client frameworks"), /*#__PURE__*/react_default.a.createElement(GithubRepositoryList, {
    repos: ["microsoft/jacdac-circuitpython", "microsoft/pxt-jacdac", "microsoft/jacdac-ts"],
    showDescription: true
  }), /*#__PURE__*/react_default.a.createElement("h2", null, " Tools & Integrations"), /*#__PURE__*/react_default.a.createElement(GithubRepositoryList, {
    repos: ["microsoft/jupyter-jacdac"],
    showDescription: true
  }), /*#__PURE__*/react_default.a.createElement("h2", null, " Documentation"), /*#__PURE__*/react_default.a.createElement(GithubRepositoryList, {
    repos: ["microsoft/jacdac-docs"],
    showDescription: true
  }), /*#__PURE__*/react_default.a.createElement("h2", null, " Microsoft Open Source Code of Conduct"), /*#__PURE__*/react_default.a.createElement("p", null, "This project is hosted at ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    href: "https://github.com/microsoft/jacdac-docs"
  }, "https://github.com/microsoft/jacdac-docs"), ". This project has adopted the ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    href: "https://opensource.microsoft.com/codeofconduct/"
  }, "Microsoft Open Source Code of Conduct"), "."), /*#__PURE__*/react_default.a.createElement("h3", null, "Resources"), /*#__PURE__*/react_default.a.createElement("ul", null, /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    href: "https://opensource.microsoft.com/codeofconduct/"
  }, "Microsoft Open Source Code of Conduct")), /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    href: "https://opensource.microsoft.com/codeofconduct/faq/"
  }, "Microsoft Code of Conduct FAQ")), /*#__PURE__*/react_default.a.createElement("li", null, "Contact ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    href: "mailto:opencode@microsoft.com"
  }, "opencode@microsoft.com"), " with questions or concerns")));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-github-tsx-510019bf65b4e891b92e.js.map