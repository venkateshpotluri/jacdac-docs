(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "MyTZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "_frontmatter", function() { return /* binding */ _frontmatter; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MDXContent; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__("7ljp");

// EXTERNAL MODULE: ./src/components/Page.tsx
var Page = __webpack_require__("NqE+");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var jdom_spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./src/components/IDChip.tsx
var IDChip = __webpack_require__("XsSY");

// EXTERNAL MODULE: ./src/components/ServiceSpecificationCard.tsx
var ServiceSpecificationCard = __webpack_require__("cgyF");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__("TD2k");

// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__("kmB/");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__("dfam");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tab/Tab.js
var Tab = __webpack_require__("JrkS");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__("kKAo");

// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__("cV++");

// EXTERNAL MODULE: ./src/components/ui/Snippet.tsx
var Snippet = __webpack_require__("81PJ");

// EXTERNAL MODULE: ./jacdac-ts/src/azure-iot/dtdl.ts
var azure_iot_dtdl = __webpack_require__("tyJ9");

// CONCATENATED MODULE: ./src/components/DeviceDTDLSnippet.tsx




function DeviceDTDLSnippet(props) {
  var dev = props.dev,
      inlineServices = props.inlineServices;
  var dtdl = Object(react["useMemo"])(function () {
    return JSON.stringify(Object(azure_iot_dtdl["b" /* deviceSpecificationToDTDL */])(dev, {
      inlineServices: inlineServices
    }), null, 2);
  }, [dev]);
  return /*#__PURE__*/react_default.a.createElement(Snippet["a" /* default */], {
    value: dtdl,
    mode: "json",
    download: dev.name + ".json",
    caption: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
      to: "/dtmi"
    }, "DTDL"), " is an open source modelling language developed by Microsoft Azure.")
  });
}
// CONCATENATED MODULE: ./src/components/DeviceSpecificationSource.tsx
 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports







var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      marginBottom: theme.spacing(1)
    },
    pre: {
      margin: "0",
      padding: "0",
      backgroundColor: "transparent",
      whiteSpec: "pre-wrap"
    }
  });
});
function DeviceSpecificationSource(props) {
  var deviceSpecification = props.deviceSpecification,
      showSpecification = props.showSpecification,
      showDTDL = props.showDTDL,
      showJSON = props.showJSON;
  var classes = useStyles();

  var _useState = Object(react["useState"])(0),
      tab = _useState[0],
      setTab = _useState[1];

  var spec = deviceSpecification;

  var handleTabChange = function handleTabChange(event, newValue) {
    setTab(newValue);
  };

  var index = 0;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_default.a.createElement(Paper["a" /* default */], {
    square: true
  }, /*#__PURE__*/react_default.a.createElement(Tabs["a" /* default */], {
    value: tab,
    onChange: handleTabChange,
    "aria-label": "View specification formats"
  }, [showSpecification && "Specification", showJSON && "JSON", showDTDL && "Device Twin"].filter(function (n) {
    return !!n;
  }).map(function (n, i) {
    return /*#__PURE__*/react_default.a.createElement(Tab["a" /* default */], Object.assign({
      key: n,
      label: n
    }, Object(TabPanel["a" /* a11yProps */])(i)));
  })), showSpecification && /*#__PURE__*/react_default.a.createElement(TabPanel["b" /* default */], {
    key: "spec",
    value: tab,
    index: index++
  }, /*#__PURE__*/react_default.a.createElement(DeviceSpecification, {
    device: spec
  })), showJSON && /*#__PURE__*/react_default.a.createElement(TabPanel["b" /* default */], {
    key: "convjson",
    value: tab,
    index: index++
  }, /*#__PURE__*/react_default.a.createElement(Snippet["a" /* default */], {
    value: JSON.stringify(spec, null, 2),
    mode: "json"
  })), showDTDL && /*#__PURE__*/react_default.a.createElement(TabPanel["b" /* default */], {
    key: "dtdl",
    value: tab,
    index: index++
  }, /*#__PURE__*/react_default.a.createElement(DeviceDTDLSnippet, {
    dev: deviceSpecification
  }))));
}
// EXTERNAL MODULE: ./src/components/firmware/FirmwareCard.tsx
var FirmwareCard = __webpack_require__("o37L");

// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__("A5xw");

// EXTERNAL MODULE: ./src/components/devices/useDeviceImage.tsx
var useDeviceImage = __webpack_require__("ykJh");

// CONCATENATED MODULE: ./src/components/DeviceSpecification.tsx












function DeviceSpecification(props) {
  var device = props.device,
      showSource = props.showSource;
  var gridBreakpoints = Object(useGridBreakpoints["a" /* default */])();
  var imageUrl = Object(useDeviceImage["a" /* default */])(device);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h2", {
    key: "title"
  }, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: device.link
  }, device.name)), /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "subtitle1"
  }, "by ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/devices/" + Object(jdom_spec["g" /* identifierToUrlPath */])(Object(jdspec["d" /* escapeDeviceIdentifier */])(device.company))
  }, device.company)), /*#__PURE__*/react_default.a.createElement("img", {
    alt: "image of the device",
    src: imageUrl,
    loading: "lazy"
  }), device.description && /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
    source: device.description
  }), device.repo && /*#__PURE__*/react_default.a.createElement(FirmwareCard["a" /* default */], {
    slug: device.repo
  }), !!device.firmwares.length && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h3", null, "Firmware identifiers"), /*#__PURE__*/react_default.a.createElement("ul", null, device.firmwares.map(function (firmware) {
    return /*#__PURE__*/react_default.a.createElement("li", {
      key: firmware
    }, /*#__PURE__*/react_default.a.createElement(IDChip["a" /* default */], {
      id: firmware,
      filter: "fw:0x" + firmware.toString(16)
    }));
  }))), /*#__PURE__*/react_default.a.createElement("h3", null, "Services"), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, device.services.map(function (sc) {
    return Object(jdom_spec["G" /* serviceSpecificationFromClassIdentifier */])(sc);
  }).map(function (spec) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], Object.assign({
      item: true,
      key: spec.shortId
    }, gridBreakpoints), /*#__PURE__*/react_default.a.createElement(ServiceSpecificationCard["a" /* default */], {
      specification: spec
    }));
  })), showSource && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h2", null, "Specification"), /*#__PURE__*/react_default.a.createElement(DeviceSpecificationSource, {
    deviceSpecification: device,
    showJSON: true,
    showDTDL: true
  })));
}
// CONCATENATED MODULE: ./src/templates/device.mdx


/* @jsx mdx */


/* @jsxRuntime classic */

/* @jsx mdx */





var _frontmatter = {};
var layoutProps = {
  _frontmatter: _frontmatter
};
var MDXLayout = Page["a" /* default */];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["components"]);

  return Object(esm["mdx"])(MDXLayout, Object.assign({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(esm["mdx"])(DeviceSpecification, {
    device: Object(jdom_spec["c" /* deviceSpecificationFromIdentifier */])(props.pageContext.node.id),
    mdxType: "DeviceSpecification"
  }), Object(esm["mdx"])("h2", {
    "id": "see-also",
    "style": {
      "position": "relative"
    }
  }, Object(esm["mdx"])("a", {
    parentName: "h2",
    "href": "#see-also",
    "aria-label": "see also permalink",
    "className": "anchor before"
  }, Object(esm["mdx"])("svg", {
    parentName: "a",
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }, Object(esm["mdx"])("path", {
    parentName: "svg",
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  }))), "See Also"), Object(esm["mdx"])("ul", null, Object(esm["mdx"])("li", {
    parentName: "ul"
  }, Object(esm["mdx"])("a", {
    parentName: "li",
    "href": "/jacdac-docs/reference/device-definition/"
  }, "device definition")), Object(esm["mdx"])("li", {
    parentName: "ul"
  }, Object(esm["mdx"])("a", {
    parentName: "li",
    "href": "/jacdac-docs/tools/device-registration/"
  }, "device registration"))));
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
//# sourceMappingURL=component---src-templates-device-mdx-15a433dc4f251466b870.js.map