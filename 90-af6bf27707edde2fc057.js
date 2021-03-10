(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "AjCI":
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
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
}), 'Launch');

exports.default = _default;

/***/ }),

/***/ "Indg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ CodeBlock; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.js + 2 modules
var dist = __webpack_require__("3Mpw");

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/github/index.js
var github = __webpack_require__("nY9v");

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/vsDark/index.js
var vsDark = __webpack_require__("SoeO");

// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__("geQJ");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/GetApp.js
var GetApp = __webpack_require__("p2q9");
var GetApp_default = /*#__PURE__*/__webpack_require__.n(GetApp);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Launch.js
var Launch = __webpack_require__("AjCI");
var Launch_default = /*#__PURE__*/__webpack_require__.n(Launch);

// EXTERNAL MODULE: ./src/components/ui/Tooltip.tsx
var Tooltip = __webpack_require__("XfUf");

// EXTERNAL MODULE: ./src/components/ui/PaperBox.tsx
var PaperBox = __webpack_require__("YbiL");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__("dfam");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tab/Tab.js
var Tab = __webpack_require__("JrkS");

// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__("cV++");

// EXTERNAL MODULE: ./src/components/makecode/MakeCodeSnippetContext.tsx
var MakeCodeSnippetContext = __webpack_require__("FD1s");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// CONCATENATED MODULE: ./src/components/hooks/useWindowEvent.ts

function useWindowEvent(type, listener, passive, deps) {
  if (passive === void 0) {
    passive = false;
  }

  Object(react["useEffect"])(function () {
    if (typeof window === "undefined") return undefined; // SSR
    // initiate the event handler

    window.addEventListener(type, listener, passive); // this will clean up the event every time the component is re-rendered

    return function () {
      window.removeEventListener(type, listener);
    };
  }, [type, listener, passive].concat(deps || []));
}
// CONCATENATED MODULE: ./src/components/makecode/useMakeCodeRenderer.ts





function parseMakeCodeSnippet(source) {
  var ghost;
  var code;
  var meta = {
    dependencies: []
  };

  if (/^---\n/.test(source)) {
    var _front;

    var front;
    var parts = source.replace(/^---\n/, '').split(/---\n/gm);

    switch (parts.length) {
      case 1:
        front = ghost = undefined;
        code = source;
        break;

      case 2:
        front = parts[0];
        code = parts[1];
        break;

      default:
        front = parts[0];
        ghost = parts[1];
        code = parts[2];
        break;
    } // parse front matter


    (_front = front) === null || _front === void 0 ? void 0 : _front.replace(/(.+):\s*(.+)\s*\n/g, function (m, name, value) {
      switch (name) {
        case "dep":
          meta.dependencies.push(value);
          break;

        case "snippet":
          meta.snippet = !!value;
          break;

        default:
          meta[name] = value;
      }

      return "";
    });
  } else {
    code = source;
  } // sniff services


  var mkcds = Object(spec["x" /* makeCodeServices */])();
  mkcds.filter(function (info) {
    var src = (ghost || "") + "\n" + (code || "");
    return src.indexOf(info.client.qName) > -1 || info.client.default && src.indexOf(info.client.default) > -1;
  }).map(function (info) {
    return info.client.name.replace(/^pxt-/, '') + "=github:" + info.client.repo;
  }).forEach(function (dep) {
    return meta.dependencies.push(dep);
  }); // add jacdac by default

  if (!meta.dependencies.length) meta.dependencies.push("jacdac=github:microsoft/pxt-jacdac"); // ensure unique deps

  meta.dependencies = Object(utils["Y" /* unique */])(meta.dependencies);
  return {
    code: code,
    ghost: ghost,
    meta: meta
  };
}
function useMakeCodeRenderer() {
  var _useContext = Object(react["useContext"])(MakeCodeSnippetContext["b" /* default */]),
      target = _useContext.target,
      rendererUrl = _useContext.rendererUrl;

  var lang = "";
  var iframeId = "makecoderenderer" + target;
  var pendingRequests = Object(react["useMemo"])(function () {
    return {};
  }, [target, lang]);

  var sendRequest = function sendRequest(req) {
    var iframe = typeof document !== "undefined" && document.getElementById(iframeId);
    if (iframe !== null && iframe !== void 0 && iframe.dataset.ready) iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow.postMessage(req, rendererUrl);
  };

  var render = function render(source) {
    var code = source.code,
        ghost = source.ghost,
        meta = source.meta;
    var dependencies = meta.dependencies,
        snippet = meta.snippet; // spin up iframe on demans

    if (typeof document !== "undefined" && !document.getElementById(iframeId)) {
      console.log("mkcd: loading iframe");
      var f = document.createElement("iframe");
      f.id = iframeId;
      f.style.position = "absolute";
      f.style.left = "0";
      f.style.bottom = "0";
      f.style.width = "1px";
      f.style.height = "1px";
      f.src = rendererUrl + "?render=1" + (lang ? "&lang=" + lang : '');
      document.body.appendChild(f);
    }

    var req = {
      type: "renderblocks",
      id: "r" + Math.random(),
      code: code,
      ghost: ghost,
      options: {
        dependencies: dependencies,
        snippetMode: snippet
      }
    };
    return new Promise(function (resolve, reject) {
      pendingRequests[req.id] = {
        req: req,
        resolve: resolve,
        reject: reject
      };
      sendRequest(req);
    });
  }; // listen for messages


  var handleMessage = function handleMessage(ev) {
    var msg = ev.data;
    if (msg.source != "makecode") return;

    switch (msg.type) {
      case "renderready":
        {
          console.log("mkcd: renderer ready, " + Object.keys(pendingRequests).length + " pending");
          var iframe = typeof document !== "undefined" && document.getElementById(iframeId);

          if (iframe) {
            console.log("flushing messages");
            iframe.dataset.ready = "1";
            Object.keys(pendingRequests).forEach(function (k) {
              return sendRequest(pendingRequests[k].req);
            });
          }

          break;
        }

      case "renderblocks":
        {
          var id = msg.id; // this is the id you sent

          var r = pendingRequests[id];
          if (!r) return;
          delete pendingRequests[id];
          r.resolve(msg);
          break;
        }
    }
  };

  useWindowEvent("message", handleMessage, false, []);
  return {
    render: render
  };
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__("yNWl");

// CONCATENATED MODULE: ./src/components/makecode/MakeCodeSimulator.tsx






var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    root: {
      width: "100%"
    },
    root2: {
      position: "relative",
      paddingTop: "86.75%"
    },
    iframe: {
      position: "absolute",
      left: 0,
      top: 0,
      border: "none",
      width: "100%",
      height: "100%"
    }
  });
});
function MakeCodeSimulator(props) {
  var _this = this;

  var _useContext = Object(react["useContext"])(MakeCodeSnippetContext["b" /* default */]),
      simUrl = _useContext.simUrl;

  var snippet = props.snippet;
  var code = snippet.code,
      ghost = snippet.ghost,
      meta = snippet.meta;
  var dependencies = meta.dependencies;

  var _useContext2 = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext2.bus;

  var frameRef = Object(react["useRef"])();
  var classes = useStyles();
  var src = (ghost || "") + "\n" + (code || "");
  var url = simUrl + "#single=1&fullscren=1&nofooter=1&deps=" + encodeURIComponent(dependencies.join(',')) + "&code=" + encodeURIComponent(src);
  var origin = new URL(url).origin;
  Object(react["useEffect"])(function () {
    return bus.subscribe([constants["rc" /* PACKET_SEND */], constants["nc" /* PACKET_PROCESS */]], function (pkt) {
      var _frameRef$current, _frameRef$current$con;

      _this.packetSent++;
      var msg = {
        type: "messagepacket",
        channel: "jacdac",
        broadcast: true,
        data: pkt.toBuffer(),
        sender: pkt.sender
      };
      (_frameRef$current = frameRef.current) === null || _frameRef$current === void 0 ? void 0 : (_frameRef$current$con = _frameRef$current.contentWindow) === null || _frameRef$current$con === void 0 ? void 0 : _frameRef$current$con.postMessage(msg, origin);
    });
  });
  return /*#__PURE__*/react_default.a.createElement(PaperBox["a" /* default */], null, /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root2
  }, /*#__PURE__*/react_default.a.createElement("iframe", {
    ref: frameRef,
    className: classes.iframe,
    src: url,
    "aria-label": "MakeCode rendering iframe to generate blocks images."
  }))));
}
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// CONCATENATED MODULE: ./src/components/makecode/MakeCodeSnippet.tsx









function MakeCodeSnippet(props) {
  var renderedSource = props.renderedSource;

  var _ref = JSON.parse(renderedSource),
      source = _ref.source,
      rendered = _ref.rendered;

  var _ref2 = rendered || {},
      height = _ref2.height,
      width = _ref2.width,
      url = _ref2.url;

  var tabs = ["blocks", "typescript", "sim"];

  var _useContext = Object(react["useContext"])(MakeCodeSnippetContext["b" /* default */]),
      editor = _useContext.editor,
      setEditor = _useContext.setEditor;

  var _useState = Object(react["useState"])(tabs.indexOf(editor) || 0),
      tab = _useState[0],
      setTab = _useState[1];

  var handleTabChange = function handleTabChange(event, newValue) {
    if (newValue < tabs.length - 1) setEditor(tabs[newValue]);
    setTab(newValue);
  };

  var snippet = Object(react["useMemo"])(function () {
    return parseMakeCodeSnippet(source);
  }, [source]);
  var code = snippet.code;
  return /*#__PURE__*/react_default.a.createElement(PaperBox["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Tabs["a" /* default */], {
    value: tab,
    onChange: handleTabChange,
    "aria-label": "Select MakeCode editor"
  }, /*#__PURE__*/react_default.a.createElement(Tab["a" /* default */], {
    label: "Blocks"
  }), /*#__PURE__*/react_default.a.createElement(Tab["a" /* default */], {
    label: "JavaScript"
  }), /*#__PURE__*/react_default.a.createElement(Tab["a" /* default */], {
    label: "Simulator"
  })), /*#__PURE__*/react_default.a.createElement(TabPanel["b" /* default */], {
    value: tab,
    index: 0
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: Object(gatsby_browser_entry["withPrefix"])(url),
    alt: source,
    loading: "lazy"
  })), /*#__PURE__*/react_default.a.createElement(TabPanel["b" /* default */], {
    value: tab,
    index: 1
  }, /*#__PURE__*/react_default.a.createElement(CodeBlock, {
    className: "typescript"
  }, code)), /*#__PURE__*/react_default.a.createElement(TabPanel["b" /* default */], {
    value: tab,
    index: 2
  }, /*#__PURE__*/react_default.a.createElement(MakeCodeSimulator, {
    snippet: snippet
  })));
}
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__("kmB/");

// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Alert/Alert.js + 4 modules
var Alert = __webpack_require__("ZiQX");

// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__("OXkz");

// CONCATENATED MODULE: ./src/components/CodeBlock.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name



 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name







var TraceSnippet = /*#__PURE__*/Object(react["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(12), __webpack_require__.e(78)]).then(__webpack_require__.bind(null, "0U36"));
});

function HighlightedCode(props) {
  var children = props.children,
      className = props.className,
      downloadName = props.downloadName,
      downloadText = props.downloadText,
      url = props.url;

  var _useContext = Object(react["useContext"])(DarkModeContext["a" /* default */]),
      darkMode = _useContext.darkMode;

  var language = (className === null || className === void 0 ? void 0 : className.replace(/language-/, '')) || "";
  var theme = darkMode === "dark" ? vsDark["a" /* default */] : github["a" /* default */];
  var valueUri = !!downloadText && "data:application/json;charset=UTF-8," + encodeURIComponent(downloadText);
  return /*#__PURE__*/react_default.a.createElement(dist["a" /* default */], Object.assign({}, dist["b" /* defaultProps */], {
    code: children,
    language: language,
    theme: theme
  }), function (_ref) {
    var className = _ref.className,
        style = _ref.style,
        tokens = _ref.tokens,
        getLineProps = _ref.getLineProps,
        getTokenProps = _ref.getTokenProps;
    return /*#__PURE__*/react_default.a.createElement("pre", {
      className: className,
      style: _objectSpread({}, style)
    }, !!url && /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
      style: {
        float: "right"
      },
      href: url
    }, /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
      title: "Open " + url
    }, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["IconButton"], null, /*#__PURE__*/react_default.a.createElement(Launch_default.a, null)))), !!downloadText && /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
      style: {
        float: "right"
      },
      href: valueUri,
      download: downloadName || "download"
    }, /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
      title: "Download"
    }, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["IconButton"], null, /*#__PURE__*/react_default.a.createElement(GetApp_default.a, null)))), tokens === null || tokens === void 0 ? void 0 : tokens.map(function (line, index) {
      var lineProps = getLineProps({
        line: line,
        key: index
      });
      return /*#__PURE__*/react_default.a.createElement("div", Object.assign({
        key: index
      }, lineProps), line.map(function (token, key) {
        return /*#__PURE__*/react_default.a.createElement("span", Object.assign({
          key: key
        }, getTokenProps({
          token: token,
          key: key
        })));
      }));
    }));
  });
}

function CodeBlock(props) {
  var children = props.children,
      className = props.className;
  var language = (className === null || className === void 0 ? void 0 : className.replace(/language-/, '')) || "";

  switch (language) {
    case "trace":
      return /*#__PURE__*/react_default.a.createElement(Suspense["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(TraceSnippet, {
        source: children
      }));

    case "blocks":
      return /*#__PURE__*/react_default.a.createElement(MakeCodeSnippet, {
        renderedSource: children
      });

    case "info":
    case "error":
    case "warning":
    case "success":
      return /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
        severity: language
      }, /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
        source: children.trim()
      }));

    default:
      return /*#__PURE__*/react_default.a.createElement(HighlightedCode, props);
  }
}

/***/ }),

/***/ "USxY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("r2IW");
} else {}

/***/ }),

/***/ "YbiL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperBox; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zLVn");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tr08");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hlFM");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("kKAo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



function PaperBox(props) {
  var children = props.children,
      padding = props.padding,
      elevation = props.elevation,
      bgcolor = props.bgcolor,
      others = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(props, ["children", "padding", "elevation", "bgcolor"]);

  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({}, others, {
    bgcolor: bgcolor,
    mb: theme.spacing(0.25)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    square: true,
    elevation: elevation
  }, padding !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    p: theme.spacing(padding || 0.25)
  }, children), padding === 0 && children));
}

/***/ }),

/***/ "p2q9":
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
  d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
}), 'GetApp');

exports.default = _default;

/***/ }),

/***/ "r2IW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var b = 60103,
    c = 60106,
    d = 60107,
    e = 60108,
    f = 60114,
    g = 60109,
    h = 60110,
    k = 60112,
    l = 60113,
    m = 60120,
    n = 60115,
    p = 60116,
    q = 60121,
    r = 60122,
    u = 60117,
    v = 60129,
    w = 60131;

if ("function" === typeof Symbol && Symbol.for) {
  var x = Symbol.for;
  b = x("react.element");
  c = x("react.portal");
  d = x("react.fragment");
  e = x("react.strict_mode");
  f = x("react.profiler");
  g = x("react.provider");
  h = x("react.context");
  k = x("react.forward_ref");
  l = x("react.suspense");
  m = x("react.suspense_list");
  n = x("react.memo");
  p = x("react.lazy");
  q = x("react.block");
  r = x("react.server.block");
  u = x("react.fundamental");
  v = x("react.debug_trace_mode");
  w = x("react.legacy_hidden");
}

function y(a) {
  if ("object" === typeof a && null !== a) {
    var t = a.$$typeof;

    switch (t) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case l:
          case m:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case h:
              case k:
              case p:
              case n:
              case g:
                return a;

              default:
                return t;
            }

        }

      case c:
        return t;
    }
  }
}

var z = g,
    A = b,
    B = k,
    C = d,
    D = p,
    E = n,
    F = c,
    G = f,
    H = e,
    I = l;
exports.ContextConsumer = h;
exports.ContextProvider = z;
exports.Element = A;
exports.ForwardRef = B;
exports.Fragment = C;
exports.Lazy = D;
exports.Memo = E;
exports.Portal = F;
exports.Profiler = G;
exports.StrictMode = H;
exports.Suspense = I;

exports.isAsyncMode = function () {
  return !1;
};

exports.isConcurrentMode = function () {
  return !1;
};

exports.isContextConsumer = function (a) {
  return y(a) === h;
};

exports.isContextProvider = function (a) {
  return y(a) === g;
};

exports.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === b;
};

exports.isForwardRef = function (a) {
  return y(a) === k;
};

exports.isFragment = function (a) {
  return y(a) === d;
};

exports.isLazy = function (a) {
  return y(a) === p;
};

exports.isMemo = function (a) {
  return y(a) === n;
};

exports.isPortal = function (a) {
  return y(a) === c;
};

exports.isProfiler = function (a) {
  return y(a) === f;
};

exports.isStrictMode = function (a) {
  return y(a) === e;
};

exports.isSuspense = function (a) {
  return y(a) === l;
};

exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === v || a === e || a === l || a === m || a === w || "object" === typeof a && null !== a && (a.$$typeof === p || a.$$typeof === n || a.$$typeof === g || a.$$typeof === h || a.$$typeof === k || a.$$typeof === u || a.$$typeof === q || a[0] === r) ? !0 : !1;
};

exports.typeOf = y;

/***/ })

}]);
//# sourceMappingURL=90-af6bf27707edde2fc057.js.map