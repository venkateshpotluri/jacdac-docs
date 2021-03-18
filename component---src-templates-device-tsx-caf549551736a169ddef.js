(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "30+C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("kKAo");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("H2TA");






var styles = {
  /* Styles applied to the root element. */
  root: {
    overflow: 'hidden'
  }
};
var Card = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Card(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$raised = props.raised,
      raised = _props$raised === void 0 ? false : _props$raised,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "raised"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Paper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className),
    elevation: raised ? 8 : 1,
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(styles, {
  name: 'MuiCard'
})(Card));

/***/ }),

/***/ "50B7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ofer");






var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 16
  },

  /* Styles applied to the avatar element. */
  avatar: {
    flex: '0 0 auto',
    marginRight: 16
  },

  /* Styles applied to the action element. */
  action: {
    flex: '0 0 auto',
    alignSelf: 'flex-start',
    marginTop: -8,
    marginRight: -8
  },

  /* Styles applied to the content wrapper element. */
  content: {
    flex: '1 1 auto'
  },

  /* Styles applied to the title Typography element. */
  title: {},

  /* Styles applied to the subheader Typography element. */
  subheader: {}
};
var CardHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function CardHeader(props, ref) {
  var action = props.action,
      avatar = props.avatar,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      subheaderProp = props.subheader,
      subheaderTypographyProps = props.subheaderTypographyProps,
      titleProp = props.title,
      titleTypographyProps = props.titleTypographyProps,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["action", "avatar", "classes", "className", "component", "disableTypography", "subheader", "subheaderTypographyProps", "title", "titleTypographyProps"]);

  var title = titleProp;

  if (title != null && title.type !== _Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] && !disableTypography) {
    title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      variant: avatar ? 'body2' : 'h5',
      className: classes.title,
      component: "span",
      display: "block"
    }, titleTypographyProps), title);
  }

  var subheader = subheaderProp;

  if (subheader != null && subheader.type !== _Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] && !disableTypography) {
    subheader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      variant: avatar ? 'body2' : 'body1',
      className: classes.subheader,
      color: "textSecondary",
      component: "span",
      display: "block"
    }, subheaderTypographyProps), subheader);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className),
    ref: ref
  }, other), avatar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classes.avatar
  }, avatar), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classes.content
  }, title, subheader), action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classes.action
  }, action));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiCardHeader'
})(CardHeader));

/***/ }),

/***/ "81PJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Snippet; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ofer");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Indg");



function Snippet(props) {
  var value = props.value,
      mode = props.mode,
      download = props.download,
      url = props.url,
      caption = props.caption;
  var v = typeof value === 'function' ? value() : value;
  var className = mode && "language-" + (mode === "sts" ? "ts" : mode);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CodeBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: className,
    downloadName: download,
    downloadText: download && v,
    url: url
  }, v), caption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    variant: "caption"
  }, caption));
}

/***/ }),

/***/ "M1Nd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"
}), 'Fingerprint');

exports.default = _default;

/***/ }),

/***/ "TD2k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useGridBreakpoints; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2K/c");


function useGridBreakpoints(itemCount) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"]),
      drawerType = _useContext.drawerType;

  if (itemCount !== undefined) {
    switch (itemCount) {
      case 1:
      case 2:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6
        };

      case 3:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 4,
          xl: 4
        };
    }
  }

  if (drawerType != _AppContext__WEBPACK_IMPORTED_MODULE_1__[/* DrawerType */ "b"].None) return {
    xs: 12,
    md: 6,
    sm: 6,
    lg: 6,
    xl: 4
  };else return {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 3
  };
}

/***/ }),

/***/ "XsSY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IDChip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("M1Nd");
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9jPY");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("PsDL");
/* harmony import */ var _PacketsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("VKQG");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2K/c");
/* harmony import */ var _ui_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("XfUf");
 // tslint:disable-next-line: no-submodule-imports match-default-export-name






function IDChip(props) {
  var id = props.id,
      className = props.className,
      filter = props.filter;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PacketsContext__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"]),
      packetFilter = _useContext.filter,
      setPacketFilter = _useContext.setFilter;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_5__[/* default */ "c"]),
      setDrawerType = _useContext2.setDrawerType;

  var ids = typeof id === "string" ? id : "0x" + (id !== undefined ? id.toString(16) : "???");
  var filtered = packetFilter && packetFilter.indexOf(filter) > -1;

  var handleFilterClick = function handleFilterClick() {
    var _packetFilter$replace;

    if (filtered) setPacketFilter(packetFilter === null || packetFilter === void 0 ? void 0 : (_packetFilter$replace = packetFilter.replace(filter, '')) === null || _packetFilter$replace === void 0 ? void 0 : _packetFilter$replace.trim());else setPacketFilter((packetFilter === null || packetFilter === void 0 ? void 0 : packetFilter.trim()) + ' ' + filter);
    setDrawerType(_AppContext__WEBPACK_IMPORTED_MODULE_5__[/* DrawerType */ "b"].Packets);
  };

  var icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_1___default.a, null);
  var title = filtered ? "remove filter " + filter : "add filter " + filter;
  if (filter) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Tooltip__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    title: filtered ? "remove filter " + filter : "add filter " + filter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    className: className,
    size: "small",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      "aria-label": title,
      onClick: handleFilterClick
    }, icon),
    label: ids
  })));else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    "aria-label": title,
    className: className,
    size: "small",
    icon: icon,
    title: "identifier " + ids,
    label: ids
  });
}

/***/ }),

/***/ "Y6fa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StatusAlert */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FQT7");


function StatusAlert(props) {
  var specification = props.specification;

  switch (specification === null || specification === void 0 ? void 0 : specification.status) {
    case "deprecated":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        severity: "warning"
      }, "Deprecated");

    case "experimental":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        severity: "info"
      }, "Experimental");

    default:
      return null;
  }
}
var ServiceSpecificationStatusAlert = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(StatusAlert);
/* harmony default export */ __webpack_exports__["a"] = (ServiceSpecificationStatusAlert);

/***/ }),

/***/ "cgyF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceSpecificationCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("30+C");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("50B7");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9jPY");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oa/T");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ofer");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("o4QW");
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Z8Ma");
/* harmony import */ var _IDChip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("XsSY");
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4+mf");
/* harmony import */ var _ui_Markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("kmB/");
/* harmony import */ var _ServiceSpecificationStatusAlert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Y6fa");
/* harmony import */ var _jacdac_ts_src_hosts_hosts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("y+c1");
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("yNWl");
/* harmony import */ var _KindIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("NHHF");
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("ZfHV");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("Wbzz");












function ServiceSpecificationCard(props) {
  var _spec, _spec2, _spec3, _spec4, _spec5;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_jacdac_Context__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"]),
      bus = _useContext.bus;

  var serviceClass = props.serviceClass,
      specification = props.specification,
      showReleaseStatus = props.showReleaseStatus,
      showServiceClass = props.showServiceClass;
  var spec = specification;
  if (!spec && serviceClass !== undefined) spec = Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_7__[/* serviceSpecificationFromClassIdentifier */ "D"])(serviceClass);
  var sc = ((_spec = spec) === null || _spec === void 0 ? void 0 : _spec.classIdentifier) || serviceClass;
  var srv = ((_spec2 = spec) === null || _spec2 === void 0 ? void 0 : _spec2.shortId) || (sc === null || sc === void 0 ? void 0 : sc.toString(16));
  var hostDefinition = Object(_jacdac_ts_src_hosts_hosts__WEBPACK_IMPORTED_MODULE_12__[/* hostDefinitionFromServiceClass */ "d"])(sc);

  var handleSimulatorClick = function handleSimulatorClick() {
    Object(_jacdac_ts_src_hosts_hosts__WEBPACK_IMPORTED_MODULE_12__[/* addHost */ "b"])(bus, hostDefinition.services());
    Object(gatsby__WEBPACK_IMPORTED_MODULE_16__["navigate"])("/dashboard/");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: ((_spec3 = spec) === null || _spec3 === void 0 ? void 0 : _spec3.name) || "???",
    subheader: showServiceClass && srv && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IDChip__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      id: sc,
      filter: "srv:" + srv
    }),
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, hostDefinition && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      size: "small",
      onClick: handleSimulatorClick,
      avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KindIcon__WEBPACK_IMPORTED_MODULE_14__[/* default */ "b"], {
        kind: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* VIRTUAL_DEVICE_NODE_NAME */ "kf"]
      }),
      "aria-label": "start simulator and open dashboard",
      label: "simulator"
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, ((_spec4 = spec) === null || _spec4 === void 0 ? void 0 : _spec4.notes["short"]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    variant: "body2",
    component: "div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Markdown__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    source: ((_spec5 = spec) === null || _spec5 === void 0 ? void 0 : _spec5.notes["short"].split(".", 1)[0]) + "."
  })), showReleaseStatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ServiceSpecificationStatusAlert__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    specification: spec
  })), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    variant: "outlined",
    "aria-label": "open service " + spec.shortId + " page",
    to: "/services/" + spec.shortId + "/"
  }, "More...")));
}

/***/ }),

/***/ "dI3M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useDeviceImage; });
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+ZDr");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Z8Ma");


function useDeviceImage(specification, suffix) {
  return specification && Object(gatsby_link__WEBPACK_IMPORTED_MODULE_0__["withPrefix"])("images/devices/" + Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__[/* identifierToUrlPath */ "g"])(specification.id) + (suffix ? "." + suffix : '') + ".jpg");
}

/***/ }),

/***/ "mZal":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Page; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var jdom_spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./src/components/IDChip.tsx
var IDChip = __webpack_require__("XsSY");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

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

// EXTERNAL MODULE: ./src/components/devices/useDeviceImage.ts
var useDeviceImage = __webpack_require__("dI3M");

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
    return Object(jdom_spec["D" /* serviceSpecificationFromClassIdentifier */])(sc);
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
// CONCATENATED MODULE: ./src/templates/device.tsx



function Page(props) {
  var id = props.pageContext.node.id;
  var specification = Object(jdom_spec["c" /* deviceSpecificationFromIdentifier */])(id);
  return /*#__PURE__*/react_default.a.createElement(DeviceSpecification, {
    device: specification
  });
}

/***/ }),

/***/ "oa/T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");





var styles = {
  /* Styles applied to the root element. */
  root: {
    padding: 16,
    '&:last-child': {
      paddingBottom: 24
    }
  }
};
var CardContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function CardContent(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiCardContent'
})(CardContent));

/***/ }),

/***/ "tyJ9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DTDL_REFERENCE_URL */
/* unused harmony export DTDL_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DTDL_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return escapeName; });
/* unused harmony export serviceSpecificationToDTDL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return serviceSpecificationToComponent; });
/* unused harmony export serviceSpecificationDTMI */
/* unused harmony export deviceSpecificationDTMI */
/* unused harmony export DTMIToRoute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deviceSpecificationToDTDL; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KQm4");
/* harmony import */ var _jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Z8Ma");
/* harmony import */ var _jdom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Zo1I");


/* eslint-disable @typescript-eslint/no-explicit-any */

/***
 * Jacdac service/device specification to DTDL
 *
 *  DTDL specification: https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md.
 */


var DTDL_REFERENCE_URL = "https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md";
var DTDL_NAME = "Digital Twins Definition Language";
var DTDL_CONTEXT = "dtmi:dtdl:context;2"; // https://github.com/Azure/digital-twin-model-identifier
// ^dtmi:(?:_+[A-Za-z0-9]|[A-Za-z])(?:[A-Za-z0-9_]*[A-Za-z0-9])?(?::(?:_+[A-Za-z0-9]|[A-Za-z])(?:[A-Za-z0-9_]*[A-Za-z0-9])?)*;[1-9][0-9]{0,8}$

function toDTMI(segments, version) {
  return ("dtmi:jacdac:" + Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(segments).map(function (seg) {
    return seg === undefined ? "???" : typeof seg === "string" ? seg : "x" + seg.toString(16);
  }).map(function (seg) {
    return seg.replace(/(-|_)/g, "");
  }).join(":") + ";" + (version !== undefined ? version : 1)).toLowerCase();
}

function toUnit(pkt) {
  if (pkt.fields.length !== 1) return undefined;
  var field = pkt.fields[0];
  if (!field.unit) return undefined;
  /**
   *     type Unit = "m" | "kg" | "g" | "s" | "A" | "K" | "cd" | "mol" | "Hz" | "rad" | "sr" | "N" | "Pa" | "J" | "W" | "C" | "V" | "F" | "Ohm"
      | "S" | "Wb" | "T" | "H" | "Cel" | "lm" | "lx" | "Bq" | "Gy" | "Sv" | "kat" | "m2" | "m3" | "l" | "m/s" | "m/s2" | "m3/s" | "l/s"
      | "W/m2" | "cd/m2" | "bit" | "bit/s" | "lat" | "lon" | "pH" | "dB" | "dBW" | "Bspl" | "count" | "/" | "%RH" | "%EL" | "EL"
      | "1/s" | "1/min" | "beat/min" | "beats" | "S/m" | "B" | "VA" | "VAs" | "var" | "vars" | "J/m" | "kg/m3" | "deg";
   type SecondaryUnit = "ms" | "min" | "h" | "MHz" | "kW" | "kVA" | "kvar" | "Ah" | "Wh" | "kWh"
      | "varh" | "kvarh" | "kVAh" | "Wh/km" | "KiB" | "GB" | "Mbit/s" | "B/s" | "MB/s" | "mV" | "mA" | "dBm" | "ug/m3"
      | "mm/h" | "m/h" | "ppm" | "/100" | "/1000" | "hPa" | "mm" | "cm" | "km" | "km/h";
   */

  var units = {
    "m/s2": {
      semantic: "Acceleration",
      unit: "metrePerSecondSquared"
    },
    rad: {
      semantic: "Angle",
      unit: "radian"
    },
    "rad/s": {
      semantic: "AngularVelocity",
      unit: "radianPerSecond"
    },
    "rad/s2": {
      semantic: "AngularAcceleration",
      unit: "radianPerSecondSquared"
    },
    m: {
      semantic: "Length",
      unit: "metre"
    },
    m2: {
      semantic: "Area",
      unit: "squareMetre"
    },
    s: {
      semantic: "TimeSpan",
      unit: "second"
    },
    ms: {
      semantic: "TimeSpan",
      unit: "millisecond"
    },
    us: {
      semantic: "TimeSpan",
      unit: "microsecond"
    },
    K: {
      semantic: "Temperature",
      unit: "kelvin"
    },
    C: {
      semantic: "Temperature",
      unit: "degreeCelsius"
    },
    F: {
      semantic: "Temperature",
      unit: "degreeFahrenheit"
    },
    g: {
      semantic: "Acceleration",
      unit: "gForce"
    },
    mA: {
      semantic: "Current",
      unit: "milliampere"
    },
    uA: {
      semantic: "Current",
      unit: "microampere"
    },
    A: {
      semantic: "Current",
      unit: "ampere"
    },
    mV: {
      semantic: "Voltage",
      unit: "millivolt"
    },
    uV: {
      semantic: "Voltage",
      unit: "microvolt"
    },
    V: {
      semantic: "Voltage",
      unit: "volt"
    }
  };
  var unit = units[field.unit];
  if (unit) return unit; // ignoring some known units

  if (["#", "/"].indexOf(field.unit) > -1) return undefined; //console.warn(`unsupported unit ${field.unit}`)

  return undefined;
} // https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md#primitive-schemas


function enumDTDI(srv, en) {
  return toDTMI([srv.classIdentifier, en.name]);
}

function enumSchema(srv, en) {
  var dtdl = {
    "@type": "Enum",
    "@id": enumDTDI(srv, en),
    valueSchema: "integer",
    enumValues: Object.keys(en.members).map(function (k) {
      return {
        name: escapeName(k),
        displayName: k,
        enumValue: en.members[k]
      };
    })
  };
  return dtdl;
}

function fieldType(srv, pkt, field) {
  var type;
  if (field.type == "bool") type = "boolean";else if (field.isFloat) type = "float";else if (field.isSimpleType) {
    if (/^(u|i)/.test(field.type)) type = "integer";else if (field.type === "B") // base64 encoded binary data
      type = "string";
  } else if (field.type === "string" || field.type == "string0") type = "string";else if (field.shift && /^(u|i)/.test(field.type)) type = "float"; // decimal type
  else {
      var en = srv.enums[field.type];
      if (en) type = enumDTDI(srv, en);
    } //if (!type)
  //    console.warn(`unknown field type ${field.type}`, field)

  return {
    name: field.name == "_" ? pkt.name : field.name,
    type: type
  };
} // warps fields into an object


function objectSchema(schemas) {
  return {
    "@type": "Object",
    fields: schemas
  };
} // wraps a schema into an array


function arraySchema(schema) {
  return {
    "@type": "Array",
    elementSchema: schema
  };
} // converts JADAC pkt data layout into a DTDL schema


function toSchema(srv, pkt, supportsArray) {
  var fields = pkt.fields.map(function (field) {
    return fieldType(srv, pkt, field);
  });
  if (!fields.length) return undefined; // a single data entry

  if (fields.length === 1 && !pkt.fields[0].startRepeats) return fields[0].type; // map fields into schema

  var schemas = fields.map(function (field) {
    return {
      name: field.name,
      schema: field.type
    };
  }); // is there an array?

  var repeatIndex = pkt.fields.findIndex(function (field) {
    return field.startRepeats;
  });

  if (repeatIndex < 0) {
    // no array
    // wrap schemas into an object
    return objectSchema(schemas);
  } // check if arrays are supported


  if (!supportsArray) {
    //console.warn(`arrays not supported in ${srv.shortName}.${pkt.name}`)
    return undefined;
  }

  if (repeatIndex == 0) {
    // the whole structure is an array
    return arraySchema(objectSchema(schemas));
  } else {
    // split fields into prelude and array data
    var nonRepeat = schemas.slice(0, repeatIndex);
    var repeats = schemas.slice(repeatIndex);
    return objectSchema([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nonRepeat), [{
      name: "repeat",
      schema: arraySchema(repeats.length > 1 ? objectSchema(repeats) : repeats[0])
    }]));
  }
}

function packetToDTDL(srv, pkt) {
  var types = {
    const: "Property",
    rw: "Property",
    ro: "Telemetry",
    event: "Telemetry"
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var dtdl = {
    "@type": types[pkt.kind] || "Unsupported" + pkt.kind,
    name: pkt.name,
    "@id": toDTMI([srv.classIdentifier, pkt.kind, pkt.name]),
    description: pkt.description
  };

  switch (pkt.kind) {
    case "report":
    case "command":
      // https://docs.microsoft.com/en-us/azure/digital-twins/concepts-models#azure-digital-twins-dtdl-implementation-specifics
      return undefined;

    case "const":
    case "rw":
    case "ro":
    case "event":
      {
        var unit = toUnit(pkt);

        if (unit) {
          dtdl.unit = unit.unit;
        }

        dtdl.schema = toSchema(srv, pkt, false);
        if (pkt.kind === "rw") dtdl.writable = true;

        if (!dtdl.schema && pkt.kind === "event") {
          // keep a count of the events
          dtdl["@type"] = [dtdl["@type"], "Event"];
          dtdl.schema = toDTMI([srv.classIdentifier, "event"]);
        } else if (unit && unit.semantic) dtdl["@type"] = [dtdl["@type"], unit.semantic];

        break;
      }

    default:
      //console.log(`unknown packet kind ${pkt.kind}`)
      break;
  }

  if (!dtdl.schema) {
    //console.log(`unknown schema for ${srv.name}.${pkt.name}`);
    return undefined;
  }

  return dtdl;
}

function escapeName(name) {
  name = name.trim().replace(/[^a-zA-Z0-9_]/g, "_");
  if (!/^[a-zA-Z]/.test(name)) name = "a" + name;
  name = name[0].toLowerCase() + name.slice(1);
  return name.slice(0, 64);
}

function escapeDisplayName(name) {
  return name.slice(0, 64);
}

function serviceSpecificationToDTDL(srv) {
  var dtdl = {
    "@type": "Interface",
    "@id": serviceSpecificationDTMI(srv),
    displayName: escapeDisplayName(srv.name),
    description: srv.notes["short"],
    contents: srv.packets.filter(function (pkt) {
      return !pkt.derived && !pkt.internal;
    }).map(function (pkt) {
      try {
        return packetToDTDL(srv, pkt);
      } catch (e) {
        console.log("failed to generate DTDL for " + srv.name, e);
        return undefined;
      }
    }).filter(function (c) {
      return !!c;
    })
  };
  if (srv.extends.length) dtdl.extends = srv.extends.map(function (id) {
    return serviceSpecificationDTMI(Object(_jdom_spec__WEBPACK_IMPORTED_MODULE_1__[/* serviceSpecificationFromName */ "E"])(id));
  });
  var hasEvents = srv.packets.find(function (pkt) {
    return pkt.kind === "event";
  });
  var hasEnums = Object.keys(srv.enums).length;

  if (hasEvents || hasEnums) {
    dtdl.schemas = [];
    if (hasEvents) dtdl.schemas.push({
      "@id": toDTMI([srv.classIdentifier, "event"]),
      "@type": "Object",
      fields: [{
        name: "count",
        schema: "integer"
      }]
    });
    if (hasEnums) dtdl.schemas = dtdl.schemas.concat(Object.keys(srv.enums).map(function (en) {
      return enumSchema(srv, srv.enums[en]);
    }));
  }

  dtdl["@context"] = DTDL_CONTEXT;
  return dtdl;
}
function serviceSpecificationToComponent(srv, name) {
  var dtdl = {
    "@type": "Component",
    name: name,
    displayName: escapeDisplayName(srv.name),
    schema: serviceSpecificationDTMI(srv)
  };
  return dtdl;
}
function serviceSpecificationDTMI(srv) {
  return toDTMI(["services", srv.classIdentifier]);
}
function deviceSpecificationDTMI(dev) {
  return toDTMI(["devices", dev.id.replace(/-/g, ":")]);
}
function DTMIToRoute(dtmi) {
  var route = dtmi.toLowerCase().replace(/;/, "-").replace(/:/g, "/") + ".json";
  return route;
}
function deviceSpecificationToDTDL(dev, options) {
  var services = dev.services.map(function (srv) {
    return Object(_jdom_spec__WEBPACK_IMPORTED_MODULE_1__[/* serviceSpecificationFromClassIdentifier */ "D"])(srv);
  });
  var uniqueServices = Object(_jdom_utils__WEBPACK_IMPORTED_MODULE_2__[/* uniqueMap */ "Y"])(services, function (srv) {
    return srv.classIdentifier.toString();
  }, function (srv) {
    return srv;
  });
  var schemas = uniqueServices.map(function (srv) {
    return serviceSpecificationToDTDL(srv);
  }); // allocate names

  var names = [];
  services.forEach(function (srv) {
    var name = escapeName(srv.shortId || srv.shortName);
    if (names.indexOf(name) < 0) names.push(name);else {
      var count = 2;

      while (names.indexOf(name + count) > -1) {
        count++;
      }

      names.push(name + count);
    }
  });
  var dtdl = {
    "@type": "Interface",
    "@id": deviceSpecificationDTMI(dev),
    displayName: escapeDisplayName(dev.name),
    description: dev.description,
    contents: services.map(function (srv, i) {
      return serviceSpecificationToComponent(srv, names[i]);
    }),
    "@context": DTDL_CONTEXT
  };
  if (options !== null && options !== void 0 && options.inlineServices) return [dtdl].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(schemas));else return dtdl;
}

/***/ })

}]);
//# sourceMappingURL=component---src-templates-device-tsx-caf549551736a169ddef.js.map