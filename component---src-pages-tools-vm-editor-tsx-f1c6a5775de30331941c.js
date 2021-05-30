(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1762],{

/***/ 52377:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
}), 'GetApp');

exports.Z = _default;

/***/ }),

/***/ 58504:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
}), 'Launch');

exports.Z = _default;

/***/ }),

/***/ 42404:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M8 5v14l11-7z"
}), 'PlayArrow');

exports.Z = _default;

/***/ }),

/***/ 34257:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M6 6h12v12H6z"
}), 'Stop');

exports.Z = _default;

/***/ }),

/***/ 50274:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CodeBlock; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96156);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.js + 2 modules
var dist = __webpack_require__(18328);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/github/index.js
var github = __webpack_require__(13019);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/vsDark/index.js
var vsDark = __webpack_require__(41194);
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(91350);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/GetApp.js
var GetApp = __webpack_require__(52377);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Launch.js
var Launch = __webpack_require__(58504);
// EXTERNAL MODULE: ./src/components/ui/Tooltip.tsx
var Tooltip = __webpack_require__(60102);
// EXTERNAL MODULE: ./src/components/ui/PaperBox.tsx
var PaperBox = __webpack_require__(79739);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__(44942);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tab/Tab.js
var Tab = __webpack_require__(342);
// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__(3263);
// EXTERNAL MODULE: ./src/components/makecode/MakeCodeSnippetContext.tsx
var makecode_MakeCodeSnippetContext = __webpack_require__(54888);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/makecode.ts + 1 modules
var makecode = __webpack_require__(93127);
;// CONCATENATED MODULE: ./src/components/hooks/useWindowEvent.ts

function useWindowEvent_useWindowEvent(type, listener, passive, deps) {
  if (passive === void 0) {
    passive = false;
  }

  useEffect(function () {
    if (typeof window === "undefined") return undefined; // SSR
    // initiate the event handler

    window.addEventListener(type, listener, passive); // this will clean up the event every time the component is re-rendered

    return function () {
      window.removeEventListener(type, listener);
    };
  }, [type, listener, passive].concat(deps || []));
}
;// CONCATENATED MODULE: ./src/components/makecode/useMakeCodeRenderer.ts





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


  var mkcds = (0,makecode/* makeCodeServices */.qs)();
  mkcds.filter(function (info) {
    var src = (ghost || "") + "\n" + (code || "");
    return src.indexOf(info.client.qName) > -1 || info.client.default && src.indexOf(info.client.default) > -1;
  }).map(function (info) {
    return info.client.name.replace(/^pxt-/, '') + "=github:" + info.client.repo;
  }).forEach(function (dep) {
    return meta.dependencies.push(dep);
  }); // add jacdac by default

  if (!meta.dependencies.length) meta.dependencies.push("jacdac=github:microsoft/pxt-jacdac"); // ensure unique deps

  meta.dependencies = (0,utils/* unique */.Tw)(meta.dependencies);
  return {
    code: code,
    ghost: ghost,
    meta: meta
  };
}
function useMakeCodeRenderer() {
  var _useContext = useContext(MakeCodeSnippetContext),
      target = _useContext.target,
      rendererUrl = _useContext.rendererUrl;

  var lang = "";
  var iframeId = "makecoderenderer" + target;
  var pendingRequests = useMemo(function () {
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
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
;// CONCATENATED MODULE: ./src/components/makecode/MakeCodeSimulator.tsx






var useStyles = (0,makeStyles/* default */.Z)(function () {
  return (0,createStyles/* default */.Z)({
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

  var _useContext = (0,react.useContext)(makecode_MakeCodeSnippetContext/* default */.Z),
      simUrl = _useContext.simUrl;

  var snippet = props.snippet;
  var code = snippet.code,
      ghost = snippet.ghost,
      meta = snippet.meta;
  var dependencies = meta.dependencies;

  var _useContext2 = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext2.bus;

  var frameRef = (0,react.useRef)();
  var classes = useStyles();
  var src = (ghost || "") + "\n" + (code || "");
  var url = simUrl + "#single=1&fullscren=1&nofooter=1&deps=" + encodeURIComponent(dependencies.join(",")) + "&code=" + encodeURIComponent(src);
  var origin = new URL(url).origin;
  (0,react.useEffect)(function () {
    return bus.subscribe([constants/* PACKET_SEND */.RaS, constants/* PACKET_PROCESS */.wY8], function (pkt) {
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
  return /*#__PURE__*/react.createElement(PaperBox/* default */.Z, null, /*#__PURE__*/react.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.root2
  }, /*#__PURE__*/react.createElement("iframe", {
    ref: frameRef,
    className: classes.iframe,
    src: url,
    "aria-label": "MakeCode rendering iframe to generate blocks images."
  }))));
}
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(35313);
;// CONCATENATED MODULE: ./src/components/makecode/MakeCodeSnippet.tsx









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

  var _useContext = (0,react.useContext)(makecode_MakeCodeSnippetContext/* default */.Z),
      editor = _useContext.editor,
      setEditor = _useContext.setEditor;

  var _useState = (0,react.useState)(tabs.indexOf(editor) || 0),
      tab = _useState[0],
      setTab = _useState[1];

  var handleTabChange = function handleTabChange(event, newValue) {
    if (newValue < tabs.length - 1) setEditor(tabs[newValue]);
    setTab(newValue);
  };

  var snippet = (0,react.useMemo)(function () {
    return parseMakeCodeSnippet(source);
  }, [source]);
  var code = snippet.code;
  return /*#__PURE__*/react.createElement(PaperBox/* default */.Z, null, /*#__PURE__*/react.createElement(Tabs/* default */.Z, {
    value: tab,
    onChange: handleTabChange,
    "aria-label": "Select MakeCode editor"
  }, /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "Blocks"
  }), /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "JavaScript"
  }), /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "Simulator"
  })), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 0
  }, /*#__PURE__*/react.createElement("img", {
    src: (0,gatsby_browser_entry.withPrefix)(url),
    alt: source,
    loading: "lazy"
  })), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 1
  }, /*#__PURE__*/react.createElement(CodeBlock, {
    className: "typescript"
  }, code)), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 2
  }, /*#__PURE__*/react.createElement(MakeCodeSimulator, {
    snippet: snippet
  })));
}
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
;// CONCATENATED MODULE: ./src/components/CodeBlock.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name



 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name





var TraceSnippet = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(8695), __webpack_require__.e(7510)]).then(__webpack_require__.bind(__webpack_require__, 27510));
});
var CodeSandboxButton = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 8574).then(__webpack_require__.bind(__webpack_require__, 18574));
});

function HighlightedCode(props) {
  var children = props.children,
      codeSandbox = props.codeSandbox,
      className = props.className,
      downloadName = props.downloadName,
      downloadText = props.downloadText,
      url = props.url;

  var _useContext = (0,react.useContext)(DarkModeContext/* default */.Z),
      darkMode = _useContext.darkMode;

  var language = (className === null || className === void 0 ? void 0 : className.replace(/language-/, "")) || "";
  var theme = darkMode === "dark" ? vsDark/* default */.Z : github/* default */.Z;
  var valueUri = !!downloadText && "data:application/json;charset=UTF-8," + encodeURIComponent(downloadText);
  return /*#__PURE__*/react.createElement(dist/* default */.ZP, Object.assign({}, dist/* defaultProps */.lG, {
    code: (children === null || children === void 0 ? void 0 : children.replace(/[\s\r\n]*$/g, "")) || "",
    language: language,
    theme: theme
  }), function (_ref) {
    var className = _ref.className,
        style = _ref.style,
        tokens = _ref.tokens,
        getLineProps = _ref.getLineProps,
        getTokenProps = _ref.getTokenProps;
    return /*#__PURE__*/react.createElement("pre", {
      className: className,
      style: _objectSpread({}, style)
    }, !!url && /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
      style: {
        float: "right"
      },
      href: url
    }, /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
      title: "Open " + url
    }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.IconButton, null, /*#__PURE__*/react.createElement(Launch/* default */.Z, null)))), !!downloadText && /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
      style: {
        float: "right"
      },
      href: valueUri,
      download: downloadName || "download"
    }, /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
      title: "Download"
    }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.IconButton, null, /*#__PURE__*/react.createElement(GetApp/* default */.Z, null)))), codeSandbox && /*#__PURE__*/react.createElement("div", {
      style: {
        float: "right"
      }
    }, /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(CodeSandboxButton, {
      source: children
    }))), tokens === null || tokens === void 0 ? void 0 : tokens.map(function (line, index) {
      var lineProps = getLineProps({
        line: line,
        key: index
      });
      return /*#__PURE__*/react.createElement("div", Object.assign({
        key: index
      }, lineProps), line.map(function (token, key) {
        return /*#__PURE__*/react.createElement("span", Object.assign({
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
  var language = (className === null || className === void 0 ? void 0 : className.replace(/language-/, "")) || "";

  switch (language) {
    case "trace":
      return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(TraceSnippet, {
        source: children
      }));

    case "blocks":
      return /*#__PURE__*/react.createElement(MakeCodeSnippet, {
        renderedSource: children
      });

    case "vanilla":
      return /*#__PURE__*/react.createElement(HighlightedCode, Object.assign({}, props, {
        className: "javascript",
        codeSandbox: true
      }));

    default:
      return /*#__PURE__*/react.createElement(HighlightedCode, props);
  }
}

/***/ }),

/***/ 25166:
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js
var NoSsr = __webpack_require__(42862);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(21258);
// EXTERNAL MODULE: ./src/components/vm/VMBlockEditor.tsx + 29 modules
var VMBlockEditor = __webpack_require__(43906);
// EXTERNAL MODULE: ./src/components/dashboard/Dashboard.tsx + 3 modules
var Dashboard = __webpack_require__(65063);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./src/components/useLocalStorage.ts
var useLocalStorage = __webpack_require__(86581);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(63349);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(41788);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96156);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(5991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/eventsource.ts
var eventsource = __webpack_require__(45484);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/rolemanager.ts



var MyRoleManager = /*#__PURE__*/function (_JDEventSource) {
  (0,inheritsLoose/* default */.Z)(MyRoleManager, _JDEventSource);

  function MyRoleManager(bus, notify) {
    var _this;

    _this = _JDEventSource.call(this) || this;
    _this._roles = {};
    _this._devices = [];
    _this.bus = bus;
    _this.notify = notify;

    _this.bus.on(constants/* DEVICE_ANNOUNCE */.Hob, function (dev) {
      return _this.addServices(dev);
    });

    _this.bus.on(constants/* DEVICE_DISCONNECT */.O55, function (dev) {
      return _this.removeServices(dev);
    });

    return _this;
  }

  var _proto = MyRoleManager.prototype;

  _proto.roles = function roles() {
    return this._roles;
  };

  _proto.addServices = function addServices(dev) {
    var _this2 = this;

    dev.services().forEach(function (s) {
      var roleNeedingService = Object.keys(_this2._roles).find(function (k) {
        return !_this2._roles[k].service && _this2.nameMatch(_this2._roles[k].shortName, s.specification.shortName);
      });

      if (roleNeedingService && _this2._devices.indexOf(dev) === -1) {
        _this2._roles[roleNeedingService] = {
          shortName: s.specification.shortName,
          service: s
        };

        _this2._devices.push(dev);

        if (_this2.notify) _this2.notify(roleNeedingService, s, true);
      }
    });
  };

  _proto.removeServices = function removeServices(dev) {
    var _this3 = this;

    if (this._devices.indexOf(dev) >= 0) {
      this._devices = this._devices.filter(function (d) {
        return d !== dev;
      });
      var rolesToUnmap = Object.keys(this._roles).filter(function (k) {
        return dev.services().indexOf(_this3._roles[k].service) >= 0;
      });

      if (rolesToUnmap.length > 0) {
        rolesToUnmap.forEach(function (role) {
          var service = _this3._roles[role].service;
          _this3._roles[role] = {
            shortName: service.specification.shortName,
            service: undefined
          };
          if (_this3.notify) _this3.notify(role, service, false);
        });
      }
    }
  };

  _proto.getService = function getService(role) {
    return this._roles[role].service;
  };

  _proto.nameMatch = function nameMatch(n1, n2) {
    var cn1 = n1.slice(0).toLowerCase().replace("_", " ").trim();
    var cn2 = n2.slice(0).toLowerCase().replace("_", " ").trim();
    return cn1 === cn2;
  };

  _proto.getServicesFromName = function getServicesFromName(root) {
    var _this4 = this;

    return this.bus.services().filter(function (s) {
      return _this4.nameMatch(s.specification.shortName, root);
    });
  };

  _proto.addRoleService = function addRoleService(role, shortName) {
    if (role in this._roles && this._roles[role].service) return;
    this._roles[role] = {
      shortName: shortName,
      service: undefined
    };
    var existingServices = Object.values(this._roles).filter(function (p) {
      return p.service;
    }).map(function (p) {
      return p.service;
    });
    var ret = this.getServicesFromName(shortName).filter(function (s) {
      return existingServices.indexOf(s) === -1;
    });

    if (ret.length > 0) {
      this._roles[role].service = ret[0];

      this._devices.push(ret[0].device);

      this.notify(role, ret[0], true);
    }
  };

  return MyRoleManager;
}(eventsource/* JDEventSource */.a);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/environment.ts
var environment = __webpack_require__(96699);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/expr.ts
var vm_expr = __webpack_require__(18108);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/ir.ts
var ir = __webpack_require__(68290);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/utils.ts
var utils = __webpack_require__(94624);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/vmrunner.ts






function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var VMStatus;

(function (VMStatus) {
  VMStatus["ProgramError"] = "programerror";
  VMStatus["Ready"] = "ready";
  VMStatus["Running"] = "running";
  VMStatus["Completed"] = "completed";
  VMStatus["Stopped"] = "stopped";
})(VMStatus || (VMStatus = {}));

var JumpException = function JumpException(label) {
  this.label = label;
};

var IT4CommandEvaluator = /*#__PURE__*/function () {
  function IT4CommandEvaluator(parent, env, gc) {
    this._regSaved = undefined;
    this._changeSaved = undefined;
    this._started = false;
    this.parent = parent;
    this.env = env;
    this.gc = gc;
  }

  var _proto = IT4CommandEvaluator.prototype;

  _proto.trace = function trace(msg, context) {
    if (context === void 0) {
      context = {};
    }

    this.parent.trace(msg, _objectSpread({
      command: this.gc.command.type
    }, context));
  };

  _proto.evalExpression = function evalExpression(e) {
    var _this = this;

    var expr = new vm_expr/* JDExprEvaluator */.f(function (e) {
      return _this.env.lookup(e);
    }, undefined);
    return expr.eval(e);
  };

  _proto.checkExpression = function checkExpression(e) {
    return this.evalExpression(e) ? true : false;
  };

  _proto.start = function start() {
    if (this.gc.command.callee.type !== "MemberExpression" && (this.inst === "awaitRegister" || this.inst === "awaitChange")) {
      // need to capture register value for awaitChange/awaitRegister
      var args = this.gc.command.arguments;
      this._regSaved = this.evalExpression(args[0]);
      if (this.inst === "awaitChange") this._changeSaved = this.evalExpression(args[1]);
      return true;
    }

    return false;
  };

  _proto.evaluate = /*#__PURE__*/function () {
    var _evaluate = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var _this2 = this;

      var neededStart, args, expr, _values, _expr, event, regValue, _expr2, ev, reg;

      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this._status = VMStatus.Running;

              if (this._started) {
                _context.next = 6;
                break;
              }

              neededStart = this.start();
              this._started = true;

              if (!neededStart) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return");

            case 6:
              args = this.gc.command.arguments;

              if (!(this.gc.command.callee.type === "MemberExpression")) {
                _context.next = 14;
                break;
              }

              // interpret as a service command (role.comand)
              expr = new vm_expr/* JDExprEvaluator */.f(function (e) {
                return _this2.env.lookup(e);
              }, undefined);
              _values = this.gc.command.arguments.map(function (a) {
                return expr.eval(a);
              });
              _context.next = 12;
              return this.env.sendCommandAsync(this.gc.command.callee, _values);

            case 12:
              this._status = VMStatus.Completed;
              return _context.abrupt("return");

            case 14:
              _context.t0 = this.inst;
              _context.next = _context.t0 === "branchOnCondition" ? 17 : _context.t0 === "jump" ? 22 : _context.t0 === "label" ? 24 : _context.t0 === "awaitEvent" ? 26 : _context.t0 === "awaitCondition" ? 29 : _context.t0 === "awaitChange" ? 31 : _context.t0 === "awaitRegister" ? 31 : _context.t0 === "writeRegister" ? 34 : _context.t0 === "writeLocal" ? 34 : _context.t0 === "halt" ? 47 : 49;
              break;

            case 17:
              _expr = this.checkExpression(args[0]);

              if (!_expr) {
                _context.next = 20;
                break;
              }

              throw new JumpException(args[1].name);

            case 20:
              this._status = VMStatus.Completed;
              return _context.abrupt("break", 50);

            case 22:
              this._status = VMStatus.Completed;
              throw new JumpException(args[0].name);

            case 24:
              this._status = VMStatus.Completed;
              return _context.abrupt("break", 50);

            case 26:
              event = args[0];

              if (this.env.hasEvent(event)) {
                this._status = this.checkExpression(args[1]) ? VMStatus.Completed : VMStatus.Running;
              }

              return _context.abrupt("break", 50);

            case 29:
              this._status = this.checkExpression(args[0]) ? VMStatus.Completed : VMStatus.Running;
              return _context.abrupt("break", 50);

            case 31:
              regValue = this.evalExpression(args[0]);

              if (this.inst === "awaitRegister" && regValue !== this._regSaved || this.inst === "awaitChange" && (this._changeSaved === 0 && regValue !== this._regSaved || this._changeSaved < 0 && regValue <= this._regSaved + this._changeSaved || this._changeSaved > 0 && regValue >= this._regSaved + this._changeSaved)) {
                this._status = VMStatus.Completed;
              }

              return _context.abrupt("break", 50);

            case 34:
              _expr2 = new vm_expr/* JDExprEvaluator */.f(function (e) {
                return _this2.env.lookup(e);
              }, undefined);
              ev = _expr2.eval(args[1]);
              this.trace("eval-end", {
                expr: (0,vm_expr/* unparse */.Z)(args[1])
              });
              reg = args[0];

              if (!(this.inst === "writeRegister")) {
                _context.next = 44;
                break;
              }

              _context.next = 41;
              return this.env.writeRegisterAsync(reg, ev);

            case 41:
              this.trace("write-after-wait", {
                reg: (0,vm_expr/* unparse */.Z)(reg),
                expr: ev
              });
              _context.next = 45;
              break;

            case 44:
              this.env.writeLocal(reg, ev);

            case 45:
              this._status = VMStatus.Completed;
              return _context.abrupt("break", 50);

            case 47:
              this._status = VMStatus.Stopped;
              return _context.abrupt("break", 50);

            case 49:
              throw new utils/* JDVMError */.D1("Unknown instruction " + this.inst);

            case 50:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function evaluate() {
      return _evaluate.apply(this, arguments);
    }

    return evaluate;
  }();

  (0,createClass/* default */.Z)(IT4CommandEvaluator, [{
    key: "status",
    get: function get() {
      return this._status;
    }
  }, {
    key: "inst",
    get: function get() {
      var _this$gc$command$call;

      return (_this$gc$command$call = this.gc.command.callee) === null || _this$gc$command$call === void 0 ? void 0 : _this$gc$command$call.name;
    }
  }]);

  return IT4CommandEvaluator;
}();

var IT4CommandRunner = /*#__PURE__*/function () {
  function IT4CommandRunner(parent, handlerId, env, gc) {
    this._status = VMStatus.Running;
    this.parent = parent;
    this.handlerId = handlerId;
    this.gc = gc;
    this._eval = new IT4CommandEvaluator(this, env, gc);
  }

  var _proto2 = IT4CommandRunner.prototype;

  _proto2.trace = function trace(msg, context) {
    if (context === void 0) {
      context = {};
    }

    this.parent.trace(msg, _objectSpread({
      handler: this.handlerId
    }, context));
  };

  _proto2.step = /*#__PURE__*/function () {
    var _step = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!this.isWaiting) {
                _context2.next = 5;
                break;
              }

              this.trace((0,vm_expr/* unparse */.Z)(this.gc.command));
              _context2.next = 4;
              return this._eval.evaluate();

            case 4:
              this.finish(this._eval.status);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function step() {
      return _step.apply(this, arguments);
    }

    return step;
  }();

  _proto2.cancel = function cancel() {
    this.finish(VMStatus.Stopped);
  };

  _proto2.finish = function finish(s) {
    this.trace(s);

    if (this.isWaiting && s === VMStatus.Completed || s === VMStatus.Stopped) {
      this.status = s;
    }
  };

  (0,createClass/* default */.Z)(IT4CommandRunner, [{
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(s) {
      if (s != this._status) {
        this._status = s; // TODO: emit event
      }
    }
  }, {
    key: "isWaiting",
    get: function get() {
      return this.status === VMStatus.Running;
    }
  }]);

  return IT4CommandRunner;
}();

var IT4HandlerRunner = /*#__PURE__*/function (_JDEventSource) {
  (0,inheritsLoose/* default */.Z)(IT4HandlerRunner, _JDEventSource);

  function IT4HandlerRunner(parent, id, env, handler) {
    var _this3;

    _this3 = _JDEventSource.call(this) || this; // find the label commands (targets of jumps)

    _this3.stopped = false;
    _this3._labelToIndex = {};
    _this3.parent = parent;
    _this3.id = id;
    _this3.env = env;
    _this3.handler = handler;

    _this3.handler.commands.forEach(function (c, index) {
      var _cmd$command;

      var cmd = c;
      var id = (_cmd$command = cmd.command) === null || _cmd$command === void 0 ? void 0 : _cmd$command.callee;

      if ((id === null || id === void 0 ? void 0 : id.name) === "label") {
        var _label = cmd.command.arguments[0];
        _this3._labelToIndex[_label.name] = index;
      }
    });

    _this3.reset();

    return _this3;
  }

  var _proto3 = IT4HandlerRunner.prototype;

  _proto3.trace = function trace(msg, context) {
    if (context === void 0) {
      context = {};
    }

    this.parent.trace(msg, _objectSpread({
      id: this.id
    }, context));
  };

  _proto3.reset = function reset() {
    this.commandIndex = undefined;
    this.stopped = false;
  };

  _proto3.cancel = function cancel() {
    this.stopped = true;
    this.env.unsubscribe();
  };

  _proto3.getCommand = function getCommand() {
    var cmd = this.handler.commands[this._commandIndex];

    if (cmd.type === "ite") {
      throw new utils/* JDVMError */.D1("ite not compiled away");
    }

    return cmd;
  };

  _proto3.executeCommandAsync = /*#__PURE__*/function () {
    var _executeCommandAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3() {
      var _ref, _label2, index;

      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              this.emit(utils/* JACDAC_VM_COMMAND_ATTEMPTED */.kX, this._currentCommand.gc.sourceId);
              _context3.prev = 1;
              _context3.next = 4;
              return this._currentCommand.step();

            case 4:
              _context3.next = 16;
              break;

            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](1);

              if (!(_context3.t0 instanceof JumpException)) {
                _context3.next = 15;
                break;
              }

              _ref = _context3.t0, _label2 = _ref.label;
              index = this._labelToIndex[_label2];
              this.commandIndex = index; // since it's a label it executes successfully

              this._currentCommand.status = VMStatus.Completed;
              _context3.next = 16;
              break;

            case 15:
              throw _context3.t0;

            case 16:
              if (this._currentCommand.status === VMStatus.Completed) this.emit(utils/* JACDAC_VM_COMMAND_COMPLETED */.IB, this._currentCommand.gc.sourceId);
              if (this._currentCommand.status === VMStatus.Stopped) this.stopped = true;

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[1, 6]]);
    }));

    function executeCommandAsync() {
      return _executeCommandAsync.apply(this, arguments);
    }

    return executeCommandAsync;
  }();

  // run-to-completion semantics
  _proto3.step =
  /*#__PURE__*/
  function () {
    var _step2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee4() {
      return regenerator_default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(this.stopped || !this.handler.commands.length)) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return");

            case 2:
              this.trace("step begin");

              if (this.commandIndex === undefined) {
                this.commandIndex = 0;
              }

              _context4.next = 6;
              return this.executeCommandAsync();

            case 6:
              if (!(this._currentCommand.status === VMStatus.Completed && this.commandIndex < this.handler.commands.length - 1)) {
                _context4.next = 12;
                break;
              }

              this.commandIndex++;
              _context4.next = 10;
              return this.executeCommandAsync();

            case 10:
              _context4.next = 6;
              break;

            case 12:
              this.trace("step end");

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function step() {
      return _step2.apply(this, arguments);
    }

    return step;
  }();

  (0,createClass/* default */.Z)(IT4HandlerRunner, [{
    key: "status",
    get: function get() {
      return this.stopped ? VMStatus.Stopped : this._currentCommand === undefined ? VMStatus.Ready : this._currentCommand.status;
    }
  }, {
    key: "commandIndex",
    get: function get() {
      return this._commandIndex;
    },
    set: function set(index) {
      if (index === undefined) {
        this._commandIndex = undefined;
        this._currentCommand = undefined;
      } else if (index !== this._commandIndex) {
        this._commandIndex = index;
        this._currentCommand = new IT4CommandRunner(this, this.id, this.env, this.getCommand());
      }
    }
  }]);

  return IT4HandlerRunner;
}(eventsource/* JDEventSource */.a);

var IT4ProgramRunner = /*#__PURE__*/function (_JDEventSource2) {
  (0,inheritsLoose/* default */.Z)(IT4ProgramRunner, _JDEventSource2);

  var _proto4 = IT4ProgramRunner.prototype;

  _proto4.trace = function trace(message, context) {
    if (context === void 0) {
      context = {};
    }

    this.emit(constants/* TRACE */.jes, {
      message: message,
      context: context
    });
  };

  function IT4ProgramRunner(prog, bus) {
    var _this4;

    _this4 = _JDEventSource2.call(this) || this;
    _this4._handlers = [];
    _this4._waitQueue = [];
    _this4._running = false;
    _this4._in_run = false;

    try {
      _this4._program = (0,ir/* compileProgram */.IJ)(prog);

      var _checkProgram = (0,ir/* checkProgram */.i_)(_this4._program),
          regs = _checkProgram[0],
          events = _checkProgram[1];

      if (_this4._program.errors.length > 0) {
        if (_this4._program.handlers.length === 0) throw _this4._program.errors;else console.debug(_this4._program.errors);
      }

      _this4._rm = new MyRoleManager(bus, function (role, service, added) {
        try {
          _this4._env.serviceChanged(role, service, added);

          if (added) {
            _this4.emit(utils/* JACDAC_ROLE_SERVICE_BOUND */.PY, service);

            _this4.emit(constants/* CHANGE */.Ver);

            _this4._program.handlers.forEach(function (h) {
              regs.forEach(function (r) {
                if (r.role === role) {
                  _this4._env.registerRegister(role, r.register);
                }
              });
              events.forEach(function (e) {
                if (e.role === role) {
                  _this4._env.registerEvent(role, e.event);
                }
              });
            });
          } else {
            _this4.emit(utils/* JACDAC_ROLE_SERVICE_UNBOUND */.AH, service);

            _this4.emit(constants/* CHANGE */.Ver);
          }
        } catch (e) {
          console.debug(e);

          _this4.emit(constants/* ERROR */.pnR, e);
        }
      });
      _this4._env = new environment/* VMEnvironment */.u();

      _this4._env.subscribe(constants/* CHANGE */.Ver, function () {
        try {
          _this4.run();
        } catch (e) {
          console.debug(e);

          _this4.emit(constants/* ERROR */.pnR, e);
        }
      });

      _this4._handlers = _this4._program.handlers.map(function (h, index) {
        return new IT4HandlerRunner((0,assertThisInitialized/* default */.Z)(_this4), index, _this4._env, h);
      });
      _this4._waitQueue = _this4._handlers.slice(0);
    } catch (e) {
      _this4._program = undefined;
      console.debug(e);

      _this4.emit(constants/* ERROR */.pnR, e);
    }

    return _this4;
  }

  _proto4.cancel = function cancel() {
    if (!this._program || !this._running) return; // nothing to cancel

    this._running = false;
    this._waitQueue = this._handlers.slice(0);

    this._waitQueue.forEach(function (h) {
      return h.reset();
    });

    this.emit(constants/* CHANGE */.Ver);
    this.trace("cancelled");
  };

  _proto4.start = function start() {
    var _this5 = this;

    if (!this._program || this._running) return; // already running

    this.trace("start");

    try {
      this._program.roles.forEach(function (role) {
        _this5._rm.addRoleService(role.role, role.serviceShortId);
      });

      this._running = true;
      this._in_run = false;
      this.run();
    } catch (e) {
      console.debug(e);
      this.emit(constants/* ERROR */.pnR, e);
    }
  };

  _proto4.run = /*#__PURE__*/function () {
    var _run = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee5() {
      var nextTime, _iterator, _step3, h;

      return regenerator_default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (this._program) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return");

            case 2:
              if (this._running) {
                _context5.next = 4;
                break;
              }

              return _context5.abrupt("return");

            case 4:
              if (!this._in_run) {
                _context5.next = 6;
                break;
              }

              return _context5.abrupt("return");

            case 6:
              this.trace("run");
              this._in_run = true;
              _context5.prev = 8;
              _context5.next = 11;
              return this._env.refreshRegistersAsync();

            case 11:
              if (!(this._waitQueue.length > 0)) {
                _context5.next = 25;
                break;
              }

              nextTime = [];
              _iterator = _createForOfIteratorHelperLoose(this._waitQueue);

            case 14:
              if ((_step3 = _iterator()).done) {
                _context5.next = 21;
                break;
              }

              h = _step3.value;
              _context5.next = 18;
              return h.step();

            case 18:
              if (h.status !== VMStatus.Stopped) {
                if (h.status === VMStatus.Completed) h.reset();
                nextTime.push(h);
              }

            case 19:
              _context5.next = 14;
              break;

            case 21:
              this._waitQueue = nextTime;

              this._env.consumeEvent();

              _context5.next = 26;
              break;

            case 25:
              this.emit(constants/* CHANGE */.Ver);

            case 26:
              _context5.next = 32;
              break;

            case 28:
              _context5.prev = 28;
              _context5.t0 = _context5["catch"](8);
              console.debug(_context5.t0);
              this.emit(constants/* ERROR */.pnR, _context5.t0);

            case 32:
              this._in_run = false;
              this.trace("run end");

            case 34:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[8, 28]]);
    }));

    function run() {
      return _run.apply(this, arguments);
    }

    return run;
  }();

  (0,createClass/* default */.Z)(IT4ProgramRunner, [{
    key: "status",
    get: function get() {
      var ret = this._program === undefined ? VMStatus.ProgramError : this._running === false ? VMStatus.Stopped : this._waitQueue.length > 0 ? VMStatus.Running : VMStatus.Completed;
      return ret;
    }
  }, {
    key: "roles",
    get: function get() {
      var _this$_rm;

      return this._program ? (_this$_rm = this._rm) === null || _this$_rm === void 0 ? void 0 : _this$_rm.roles() : {};
    }
  }]);

  return IT4ProgramRunner;
}(eventsource/* JDEventSource */.a);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayArrow.js
var PlayArrow = __webpack_require__(42404);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Stop.js
var Stop = __webpack_require__(34257);
;// CONCATENATED MODULE: ./src/components/vm/VMRunner.tsx

 // tslint:disable-next-line: match-default-export-name no-submodule-imports





function VMRunner(props) {
  var runner = props.runner,
      autoStartDefault = props.autoStart;
  var disabled = !runner;
  var status = (0,useChange/* default */.Z)(runner, function (t) {
    return t === null || t === void 0 ? void 0 : t.status;
  });

  var _useState = (0,react.useState)(!!autoStartDefault),
      autoStart = _useState[0],
      setAutoStart = _useState[1];

  var handleRun = function handleRun() {
    setAutoStart(!!autoStartDefault);

    try {
      runner.start();
    } catch (e) {
      console.debug(e);
    }
  };

  var handleCancel = function handleCancel() {
    setAutoStart(false);
    runner.cancel();
  };

  var running = status === VMStatus.Running; // auto start

  (0,react.useEffect)(function () {
    if (autoStart && runner) runner.start();
    return function () {
      return runner === null || runner === void 0 ? void 0 : runner.cancel();
    };
  }, [runner, autoStart]);
  return /*#__PURE__*/react.createElement(Button/* default */.Z, {
    disabled: disabled,
    variant: "contained",
    onClick: running ? handleCancel : handleRun,
    color: running ? "default" : "primary",
    startIcon: running ? /*#__PURE__*/react.createElement(Stop/* default */.Z, null) : /*#__PURE__*/react.createElement(PlayArrow/* default */.Z, null)
  }, running ? "Stop" : "Run");
}
// EXTERNAL MODULE: ./src/components/CodeBlock.tsx + 4 modules
var CodeBlock = __webpack_require__(50274);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
;// CONCATENATED MODULE: ./src/components/vm/useVMRunner.ts
 // tslint:disable-next-line: match-default-export-name no-submodule-imports






function useVMRunner(program) {
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var _useContext2 = (0,react.useContext)(AppContext/* default */.ZP),
      setError = _useContext2.setError;

  var _useState = (0,react.useState)(),
      testRunner = _useState[0],
      setTestRunner = _useState[1]; // create runner


  (0,react.useEffect)(function () {
    var runner = program && new IT4ProgramRunner(program, bus);
    setTestRunner(runner);
  }, [program]); // errors

  (0,react.useEffect)(function () {
    return testRunner === null || testRunner === void 0 ? void 0 : testRunner.subscribe(constants/* ERROR */.pnR, function (e) {
      return setError(e);
    });
  }); // traces

  var handleTrace = function handleTrace(value) {
    var message = value.message,
        context = value.context;
    if (flags/* default.diagnostics */.Z.diagnostics) console.debug("vm> " + message, context);
  };

  (0,react.useEffect)(function () {
    return testRunner === null || testRunner === void 0 ? void 0 : testRunner.subscribe(constants/* TRACE */.jes, handleTrace);
  });
  return {
    runner: testRunner
  };
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(14685);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 3 modules
var DeviceAvatar = __webpack_require__(4726);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 23 modules
var servers = __webpack_require__(37801);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(88880);
;// CONCATENATED MODULE: ./src/components/vm/VMRoles.tsx

 // tslint:disable-next-line: match-default-export-name no-submodule-imports







function VMRoles(props) {
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var runner = props.runner;
  var roles = (0,useChange/* default */.Z)(runner, function (_) {
    var r = _ === null || _ === void 0 ? void 0 : _.roles;
    if (r) console.debug("vm roles", {
      roles: r
    });
    return r;
  });

  var handleRoleClick = function handleRoleClick(role, service, specification) {
    return function () {
      if (!service && specification) {
        (0,servers/* addServiceProvider */.Q6)(bus, (0,servers/* serviceProviderDefinitionFromServiceClass */.vd)(specification.classIdentifier));
      } else {// do nothing
      }
    };
  };

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, roles && Object.keys(roles).map(function (role) {
    return {
      role: role,
      service: roles[role].service,
      specification: (0,spec/* serviceSpecificationFromName */.kB)(roles[role].shortName)
    };
  }).map(function (_ref) {
    var role = _ref.role,
        service = _ref.service,
        specification = _ref.specification;
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
      item: true,
      key: role
    }, /*#__PURE__*/react.createElement(Tooltip/* default */.ZP, {
      title: service ? "bound to " + service.device.friendlyName : "start simulator"
    }, /*#__PURE__*/react.createElement(Chip/* default */.Z, {
      label: role,
      variant: service ? "default" : "outlined",
      avatar: service ? /*#__PURE__*/react.createElement(DeviceAvatar/* default */.Z, {
        device: service.device
      }) : /*#__PURE__*/react.createElement(Add/* default */.Z, null),
      onClick: handleRoleClick(role, service, specification)
    })));
  }));
}
;// CONCATENATED MODULE: ./src/components/vm/VMEditor.tsx












function Diagnostics(props) {
  var program = props.program,
      source = props.source,
      xml = props.xml;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "subtitle1"
  }, "IT4"), /*#__PURE__*/react.createElement(CodeBlock.default, {
    className: "json",
    downloadName: "test.json.it4",
    downloadText: JSON.stringify(program, null, 2)
  }, JSON.stringify(program, null, 2))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "subtitle1"
  }, "Blockly JSON"), /*#__PURE__*/react.createElement(CodeBlock.default, {
    className: "json",
    downloadName: "test.json",
    downloadText: JSON.stringify(source, null, 2)
  }, JSON.stringify(source, null, 2))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "subtitle1"
  }, "Blockly XML"), /*#__PURE__*/react.createElement(CodeBlock.default, {
    className: "xml"
  }, xml)));
}

var VM_SOURCE_STORAGE_KEY = "jacdac:tools:vmeditor";
function VMEditor(props) {
  var _source$blocks;

  var storageKey = props.storageKey,
      showDashboard = props.showDashboard;

  var _useLocalStorage = (0,useLocalStorage/* default */.Z)(storageKey || VM_SOURCE_STORAGE_KEY, ""),
      xml = _useLocalStorage[0],
      setXml = _useLocalStorage[1];

  var _useState = (0,react.useState)(),
      source = _useState[0],
      setSource = _useState[1];

  var _useState2 = (0,react.useState)(),
      program = _useState2[0],
      setProgram = _useState2[1];

  var _useVMRunner = useVMRunner(program),
      runner = _useVMRunner.runner;

  var handleXml = function handleXml(xml) {
    setXml(xml);
  };

  var handleJSON = function handleJSON(json) {
    var newSource = JSON.stringify(json);
    if (JSON.stringify(source) !== newSource) setSource(json);
  };

  var handleI4Program = function handleI4Program(json) {
    var newProgram = JSON.stringify(json);
    if (JSON.stringify(program) !== newProgram) setProgram(json);
  };

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column",
    spacing: 1
  }, !(source !== null && source !== void 0 && (_source$blocks = source.blocks) !== null && _source$blocks !== void 0 && _source$blocks.length) && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info",
    closeable: true
  }, "Start a simulator or connect a device to load the blocks automatically.")), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(NoSsr/* default */.Z, null, /*#__PURE__*/react.createElement(VMBlockEditor/* default */.Z, {
    initialXml: xml,
    onXmlChange: handleXml,
    onJSONChange: handleJSON,
    onIT4ProgramChange: handleI4Program,
    runner: runner
  }))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(VMRunner, {
    autoStart: true,
    runner: runner
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(VMRoles, {
    runner: runner
  })), flags/* default.diagnostics */.Z.diagnostics && /*#__PURE__*/react.createElement(Diagnostics, {
    program: program,
    source: source,
    xml: xml
  }), showDashboard && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Dashboard/* default */.Z, {
    showStartSimulators: true,
    showHeader: true,
    showAvatar: true
  })));
}
;// CONCATENATED MODULE: ./src/pages/tools/vm-editor.tsx


function Page() {
  return /*#__PURE__*/react.createElement(VMEditor, {
    showDashboard: true
  });
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-vm-editor-tsx-f1c6a5775de30331941c.js.map