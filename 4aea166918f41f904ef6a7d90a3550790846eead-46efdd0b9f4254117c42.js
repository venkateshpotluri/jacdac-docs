(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

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

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/makecode.ts
var makecode = __webpack_require__("ys11");

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


  var mkcds = Object(makecode["a" /* makeCodeServices */])();
  mkcds.filter(function (info) {
    var src = (ghost || "") + "\n" + (code || "");
    return src.indexOf(info.client.qName) > -1 || info.client.default && src.indexOf(info.client.default) > -1;
  }).map(function (info) {
    return info.client.name.replace(/^pxt-/, '') + "=github:" + info.client.repo;
  }).forEach(function (dep) {
    return meta.dependencies.push(dep);
  }); // add jacdac by default

  if (!meta.dependencies.length) meta.dependencies.push("jacdac=github:microsoft/pxt-jacdac"); // ensure unique deps

  meta.dependencies = Object(utils["X" /* unique */])(meta.dependencies);
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






var useStyles = Object(makeStyles["a" /* default */])(function () {
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
  var url = simUrl + "#single=1&fullscren=1&nofooter=1&deps=" + encodeURIComponent(dependencies.join(",")) + "&code=" + encodeURIComponent(src);
  var origin = new URL(url).origin;
  Object(react["useEffect"])(function () {
    return bus.subscribe([constants["uc" /* PACKET_SEND */], constants["qc" /* PACKET_PROCESS */]], function (pkt) {
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
  return Promise.all(/* import() */[__webpack_require__.e(13), __webpack_require__.e(80)]).then(__webpack_require__.bind(null, "0U36"));
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

/***/ "xCA3":
/***/ (function(module) {

module.exports = JSON.parse("[{\"service\":\"accelerometer\",\"client\":{\"name\":\"jacdac-accelerometer\",\"repo\":\"microsoft/pxt-jacdac/accelerometer\",\"qName\":\"modules.AccelerometerClient\",\"default\":\"modules.accelerometer\"}},{\"service\":\"barometer\",\"client\":{\"name\":\"jacdac-barometer\",\"repo\":\"microsoft/pxt-jacdac/barometer\",\"qName\":\"modules.BarometerClient\",\"default\":\"modules.barometer\"}},{\"service\":\"button\",\"client\":{\"name\":\"jacdac-button\",\"repo\":\"microsoft/pxt-jacdac/button\",\"qName\":\"modules.ButtonClient\",\"default\":\"modules.button\"}},{\"service\":\"buzzer\",\"client\":{\"name\":\"jacdac-buzzer\",\"repo\":\"microsoft/pxt-jacdac/buzzer\",\"qName\":\"modules.BuzzerClient\",\"default\":\"modules.buzzer\"}},{\"service\":\"characterscreen\",\"client\":{\"name\":\"jacdac-character-screen\",\"repo\":\"microsoft/pxt-jacdac/character-screen\",\"qName\":\"modules.CharacterScreenClient\",\"default\":\"modules.characterScreen\"}},{\"service\":\"compass\",\"client\":{\"name\":\"jacdac-compass\",\"repo\":\"microsoft/pxt-jacdac/compass\",\"qName\":\"modules.CompassClient\",\"default\":\"modules.compass\"}},{\"service\":\"distance\",\"client\":{\"name\":\"jacdac-distance\",\"repo\":\"microsoft/pxt-jacdac/distance\",\"qName\":\"modules.DistanceClient\",\"default\":\"modules.distance\"}},{\"service\":\"dmx\",\"client\":{\"name\":\"jacdac-dmx\",\"repo\":\"microsoft/pxt-jacdac/dmx\",\"qName\":\"modules.DmxClient\",\"default\":\"modules.dmx\"}},{\"service\":\"eco2\",\"client\":{\"name\":\"jacdac-e-co2\",\"repo\":\"microsoft/pxt-jacdac/e-co2\",\"qName\":\"modules.ECO2Client\",\"default\":\"modules.eCO2\"}},{\"service\":\"gyroscope\",\"client\":{\"name\":\"jacdac-gyroscope\",\"repo\":\"microsoft/pxt-jacdac/gyroscope\",\"qName\":\"modules.GyroscopeClient\",\"default\":\"modules.gyroscope\"}},{\"service\":\"heartrate\",\"client\":{\"name\":\"jacdac-heart-rate\",\"repo\":\"microsoft/pxt-jacdac/heart-rate\",\"qName\":\"modules.HeartRateClient\",\"default\":\"modules.heartRate\"}},{\"service\":\"humidity\",\"client\":{\"name\":\"jacdac-humidity\",\"repo\":\"microsoft/pxt-jacdac/humidity\",\"qName\":\"modules.HumidityClient\",\"default\":\"modules.humidity\"}},{\"service\":\"illuminance\",\"client\":{\"name\":\"jacdac-illuminance\",\"repo\":\"microsoft/pxt-jacdac/illuminance\",\"qName\":\"modules.IlluminanceClient\",\"default\":\"modules.illuminance\"}},{\"service\":\"joystick\",\"client\":{\"name\":\"jacdac-joystick\",\"repo\":\"microsoft/pxt-jacdac/joystick\",\"qName\":\"modules.JoystickClient\",\"default\":\"modules.joystick\"}},{\"service\":\"led\",\"client\":{\"name\":\"jacdac-led\",\"repo\":\"microsoft/pxt-jacdac/led\",\"qName\":\"modules.LedClient\",\"default\":\"modules.led\"}},{\"service\":\"ledpixel\",\"client\":{\"name\":\"jacdac-led-pixel\",\"repo\":\"microsoft/pxt-jacdac/led-pixel\",\"qName\":\"modules.LedPixelClient\",\"default\":\"modules.ledPixel\"}},{\"service\":\"lightlevel\",\"client\":{\"name\":\"jacdac-light-level\",\"repo\":\"microsoft/pxt-jacdac/light-level\",\"qName\":\"modules.LightLevelClient\",\"default\":\"modules.lightLevel\"}},{\"service\":\"magnetomer\",\"client\":{\"name\":\"jacdac-magnetometer\",\"repo\":\"microsoft/pxt-jacdac/magnetometer\",\"qName\":\"modules.MagnetometerClient\",\"default\":\"modules.magnetometer\"}},{\"service\":\"modelrunner\",\"client\":{\"name\":\"jacdac-model-runner\",\"repo\":\"microsoft/pxt-jacdac/model-runner\",\"qName\":\"modules.ModelRunnerClient\",\"default\":\"modules.modelRunner\"}},{\"service\":\"motion\",\"client\":{\"name\":\"jacdac-motion\",\"repo\":\"microsoft/pxt-jacdac/motion\",\"qName\":\"modules.MotionClient\",\"default\":\"modules.motion\"}},{\"service\":\"motor\",\"client\":{\"name\":\"jacdac-motor\",\"repo\":\"microsoft/pxt-jacdac/motor\",\"qName\":\"modules.MotorClient\",\"default\":\"modules.motor\"}},{\"service\":\"multitouch\",\"client\":{\"name\":\"jacdac-multitouch\",\"repo\":\"microsoft/pxt-jacdac/multitouch\",\"qName\":\"modules.MultitouchClient\",\"default\":\"modules.multitouch\"}},{\"service\":\"potentiometer\",\"client\":{\"name\":\"jacdac-potentiometer\",\"repo\":\"microsoft/pxt-jacdac/potentiometer\",\"qName\":\"modules.PotentiometerClient\",\"default\":\"modules.potentiometer\"}},{\"service\":\"pulseoximeter\",\"client\":{\"name\":\"jacdac-pulse-oximeter\",\"repo\":\"microsoft/pxt-jacdac/pulse-oximeter\",\"qName\":\"modules.PulseOximeterClient\",\"default\":\"modules.pulseOximeter\"}},{\"service\":\"raingauge\",\"client\":{\"name\":\"jacdac-rain-gauge\",\"repo\":\"microsoft/pxt-jacdac/rain-gauge\",\"qName\":\"modules.RainGaugeClient\",\"default\":\"modules.rainGauge\"}},{\"service\":\"realtimeclock\",\"client\":{\"name\":\"jacdac-real-time-clock\",\"repo\":\"microsoft/pxt-jacdac/real-time-clock\",\"qName\":\"modules.RealTimeClockClient\",\"default\":\"modules.realTimeClock\"}},{\"service\":\"reflectedlight\",\"client\":{\"name\":\"jacdac-reflected-light\",\"repo\":\"microsoft/pxt-jacdac/reflected-light\",\"qName\":\"modules.ReflectedLightClient\",\"default\":\"modules.reflectedLight\"}},{\"service\":\"rotaryencoder\",\"client\":{\"name\":\"jacdac-rotary-encoder\",\"repo\":\"microsoft/pxt-jacdac/rotary-encoder\",\"qName\":\"modules.RotaryEncoderClient\",\"default\":\"modules.rotaryEncoder\"}},{\"service\":\"sensoraggregator\",\"client\":{\"name\":\"jacdac-sensor-aggregator\",\"repo\":\"microsoft/pxt-jacdac/sensor-aggregator\",\"qName\":\"modules.SensorAggregatorClient\",\"default\":\"modules.sensorAggregator\"}},{\"service\":\"servo\",\"client\":{\"name\":\"jacdac-servo\",\"repo\":\"microsoft/pxt-jacdac/servo\",\"qName\":\"modules.ServoClient\",\"default\":\"modules.servo\"}},{\"service\":\"settings\",\"client\":{\"name\":\"jacdac-settings\",\"repo\":\"microsoft/pxt-jacdac/settings\",\"qName\":\"modules.SettingsClient\",\"default\":\"modules.settings\"}},{\"service\":\"soilmoisture\",\"client\":{\"name\":\"jacdac-soil-moisture\",\"repo\":\"microsoft/pxt-jacdac/soil-moisture\",\"qName\":\"modules.SoilMoistureClient\",\"default\":\"modules.soilMoisture\"}},{\"service\":\"solenoid\",\"client\":{\"name\":\"jacdac-solenoid\",\"repo\":\"microsoft/pxt-jacdac/solenoid\",\"qName\":\"modules.SolenoidClient\",\"default\":\"modules.solenoid\"}},{\"service\":\"tcp\",\"client\":{\"name\":\"jacdac-tcp\",\"repo\":\"microsoft/pxt-jacdac/tcp\",\"qName\":\"modules.TcpClient\",\"default\":\"modules.tcp\"}},{\"service\":\"thermocouple\",\"client\":{\"name\":\"jacdac-thermocouple\",\"repo\":\"microsoft/pxt-jacdac/thermocouple\",\"qName\":\"modules.ThermocoupleClient\",\"default\":\"modules.thermocouple\"}},{\"service\":\"thermometer\",\"client\":{\"name\":\"jacdac-thermometer\",\"repo\":\"microsoft/pxt-jacdac/thermometer\",\"qName\":\"modules.ThermometerClient\",\"default\":\"modules.thermometer\"}},{\"service\":\"tvoc\",\"client\":{\"name\":\"jacdac-tvoc\",\"repo\":\"microsoft/pxt-jacdac/tvoc\",\"qName\":\"modules.TvocClient\",\"default\":\"modules.tvoc\"}},{\"service\":\"uvindex\",\"client\":{\"name\":\"jacdac-uv-index\",\"repo\":\"microsoft/pxt-jacdac/uv-index\",\"qName\":\"modules.UvIndexClient\",\"default\":\"modules.uvIndex\"}},{\"service\":\"waterlevel\",\"client\":{\"name\":\"jacdac-water-level\",\"repo\":\"microsoft/pxt-jacdac/water-level\",\"qName\":\"modules.WaterLevelClient\",\"default\":\"modules.waterLevel\"}},{\"service\":\"weightscale\",\"client\":{\"name\":\"jacdac-weight-scale\",\"repo\":\"microsoft/pxt-jacdac/weight-scale\",\"qName\":\"modules.WeightScaleClient\",\"default\":\"modules.weightScale\"}},{\"service\":\"wifi\",\"client\":{\"name\":\"jacdac-wifi\",\"repo\":\"microsoft/pxt-jacdac/wifi\",\"qName\":\"modules.WifiClient\",\"default\":\"modules.wifi\"}},{\"service\":\"winddirection\",\"client\":{\"name\":\"jacdac-wind-direction\",\"repo\":\"microsoft/pxt-jacdac/wind-direction\",\"qName\":\"modules.WindDirectionClient\",\"default\":\"modules.windDirection\"}},{\"service\":\"windspeed\",\"client\":{\"name\":\"jacdac-wind-speed\",\"repo\":\"microsoft/pxt-jacdac/wind-speed\",\"qName\":\"modules.WindSpeedClient\",\"default\":\"modules.windSpeed\"}}]");

/***/ }),

/***/ "ys11":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeCodeServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resolveMakecodeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return resolveMakecodeServiceFromClassIdentifier; });
/* harmony import */ var _jacdac_spec_services_makecode_extensions_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xCA3");
var _jacdac_spec_services_makecode_extensions_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t("xCA3", 1);
/* harmony import */ var _spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Z8Ma");


function makeCodeServices() {
  return _jacdac_spec_services_makecode_extensions_json__WEBPACK_IMPORTED_MODULE_0__.slice(0);
}
function resolveMakecodeService(service) {
  return service && _jacdac_spec_services_makecode_extensions_json__WEBPACK_IMPORTED_MODULE_0__.find(function (mk) {
    return mk.service === service.shortId;
  });
}
function resolveMakecodeServiceFromClassIdentifier(serviceClass) {
  var srv = Object(_spec__WEBPACK_IMPORTED_MODULE_1__[/* serviceSpecificationFromClassIdentifier */ "D"])(serviceClass);
  return srv && resolveMakecodeService(srv);
}

/***/ })

}]);
//# sourceMappingURL=4aea166918f41f904ef6a7d90a3550790846eead-46efdd0b9f4254117c42.js.map