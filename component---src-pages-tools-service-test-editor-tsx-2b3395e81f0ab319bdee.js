(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6091,9819],{

/***/ 14247:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ServiceSpecificationSelect; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1059);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65541);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13173);



var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(function () {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
    root: {
      minWidth: "18rem"
    }
  });
});
function ServiceSpecificationSelect(props) {
  var label = props.label,
      serviceClass = props.serviceClass,
      setServiceClass = props.setServiceClass,
      variant = props.variant,
      fullWidth = props.fullWidth,
      error = props.error;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('select-' + Math.random()),
      labelId = _useState[0];

  var classes = useStyles();
  var specs = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecifications */ .Le)().filter(function (spec) {
    return !/^_/.test(spec.shortId);
  });

  var handleChange = function handleChange(event) {
    return setServiceClass(parseInt(event.target.value));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    id: labelId,
    className: classes.root,
    label: label,
    error: !!error,
    helperText: error,
    value: serviceClass,
    select: true,
    variant: variant,
    fullWidth: fullWidth,
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    key: "none",
    value: "NaN"
  }, "No service selected"), specs.map(function (spec) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      key: spec.classIdentifier,
      value: spec.classIdentifier
    }, spec.name);
  }));
}

/***/ }),

/***/ 99819:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "nJ": function() { return /* binding */ GITHUB_API_KEY; },
  "pY": function() { return /* binding */ fetchLatestRelease; },
  "dW": function() { return /* binding */ fetchReleaseBinary; },
  "s8": function() { return /* binding */ fetchText; },
  "E1": function() { return /* binding */ normalizeSlug; },
  "Jo": function() { return /* binding */ parseRepoUrl; },
  "J$": function() { return /* binding */ useFetchJSON; },
  "G$": function() { return /* binding */ useLatestRelease; },
  "Fm": function() { return /* binding */ useLatestReleases; },
  "Ux": function() { return /* binding */ useRepository; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96156);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// CONCATENATED MODULE: ./src/components/semver.ts
function cmp(a, b) {
  if (!a) {
    if (!b) return 0;else return 1;
  } else if (!b) return -1;else {
    var d = a.major - b.major || a.minor - b.minor || a.patch - b.patch;
    if (d) return d;
    if (a.pre.length == 0 && b.pre.length > 0) return 1;
    if (a.pre.length > 0 && b.pre.length == 0) return -1;

    for (var i = 0; i < a.pre.length + 1; ++i) {
      var aa = a.pre[i];
      var bb = b.pre[i];
      if (!aa) {
        if (!bb) return 0;else return -1;
      } else if (!bb) return 1;else if (/^\d+$/.test(aa)) {
        if (/^\d+$/.test(bb)) {
          d = parseInt(aa) - parseInt(bb);
          if (d) return d;
        } else return -1;
      } else if (/^\d+$/.test(bb)) return 1;else {
        d = strcmp(aa, bb);
        if (d) return d;
      }
    }

    return 0;
  }
}

function tryParse(v) {
  if (!v) return null;

  if ("*" === v) {
    return {
      major: Number.MAX_SAFE_INTEGER,
      minor: Number.MAX_SAFE_INTEGER,
      patch: Number.MAX_SAFE_INTEGER,
      pre: [],
      build: []
    };
  }

  if (/^v\d/i.test(v)) v = v.slice(1);
  var m = /^(\d+)\.(\d+)\.(\d+)(-([0-9a-zA-Z\-\.]+))?(\+([0-9a-zA-Z\-\.]+))?$/.exec(v);
  if (m) return {
    major: parseInt(m[1]),
    minor: parseInt(m[2]),
    patch: parseInt(m[3]),
    pre: m[5] ? m[5].split(".") : [],
    build: m[7] ? m[7].split(".") : []
  };
  return null;
}

function strcmp(a, b) {
  if (a === b) return 0;
  if (a < b) return -1;else return 1;
}

function semverCmp(a, b) {
  var aa = tryParse(a);
  var bb = tryParse(b);
  if (!aa && !bb) return strcmp(a, b);else return cmp(aa, bb);
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(7751);
;// CONCATENATED MODULE: ./src/components/useFetch.ts




function useFetch(url, options) {
  var _useState = (0,react.useState)(undefined),
      response = _useState[0],
      setResponse = _useState[1]; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var _useState2 = (0,react.useState)(undefined),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0,react.useState)(undefined),
      status = _useState3[0],
      setStatus = _useState3[1];

  var _useState4 = (0,react.useState)(true),
      loading = _useState4[0],
      setLoading = _useState4[1]; // start in loading mode


  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(mounted) {
      var res, _status, json;

      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.prev = 1;
              _context.next = 4;
              return fetch(url, options);

            case 4:
              res = _context.sent;

              if (mounted()) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return");

            case 7:
              _status = res.status;
              setStatus(_status);

              if (!(_status >= 200 && _status <= 204)) {
                _context.next = 16;
                break;
              }

              _context.next = 12;
              return res.json();

            case 12:
              json = _context.sent;

              if (mounted()) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return");

            case 15:
              setResponse(json);

            case 16:
              _context.next = 23;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](1);

              if (mounted()) {
                _context.next = 22;
                break;
              }

              return _context.abrupt("return");

            case 22:
              setError(_context.t0);

            case 23:
              _context.prev = 23;
              if (mounted()) setLoading(false);
              return _context.finish(23);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 18, 23, 26]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [url]);
  return {
    response: response,
    error: error,
    status: status,
    loading: loading
  };
}
;// CONCATENATED MODULE: ./src/components/github.ts




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var ROOT = "https://api.github.com/";
var GITHUB_API_KEY = "githubtoken";

function contentToFirmwareRelease(content) {
  var _$exec;

  // filter out non-file, non-uf2
  var version = (content === null || content === void 0 ? void 0 : content.type) === "file" && ((_$exec = /^fw-(\d+\.\d+.\d+)\.uf2$/.exec(content.name)) === null || _$exec === void 0 ? void 0 : _$exec[1]);
  if (!version) return undefined;
  return {
    version: version,
    sha: content.sha,
    size: content.size,
    html_url: content.html_url,
    download_url: content.download_url
  };
}

function contentsToFirmwareReleases(contents) {
  return contents === null || contents === void 0 ? void 0 : contents.map(contentToFirmwareRelease).filter(function (r) {
    return !!r;
  }).sort(function (l, r) {
    return -semverCmp(l.version, r.version);
  });
}

function normalizeSlug(slug) {
  var cleaned = slug.replace(/^https:\/\/github.com\//, "");
  var parts = cleaned.split("/");
  return {
    repoPath: parts[0] + "/" + parts[1],
    folder: parts.slice(2).join("/")
  };
}
function parseRepoUrl(url) {
  var m = /^https:\/\/github\.com\/([^/ \t]+)\/([^/ \t]+)\/?$/.exec(url || "");
  if (m) return {
    owner: m[1],
    name: m[2]
  };
  return undefined;
}
function fetchLatestRelease(_x, _x2) {
  return _fetchLatestRelease.apply(this, arguments);
}

function _fetchLatestRelease() {
  _fetchLatestRelease = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(slug, options) {
    var _normalizeSlug4, repoPath, uri, resp, contents, releases;

    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // https://api.github.com/repos/microsoft/jacdac-msr-modules/contents/dist
            _normalizeSlug4 = normalizeSlug(slug), repoPath = _normalizeSlug4.repoPath;
            uri = ROOT + "repos/" + repoPath + "/contents/dist";
            _context.next = 4;
            return fetch(uri);

          case 4:
            resp = _context.sent;
            _context.t0 = resp.status;
            _context.next = _context.t0 === 200 ? 8 : _context.t0 === 204 ? 8 : _context.t0 === 404 ? 13 : _context.t0 === 403 ? 14 : 17;
            break;

          case 8:
            _context.next = 10;
            return resp.json();

          case 10:
            contents = _context.sent;
            releases = contentsToFirmwareReleases(contents);
            return _context.abrupt("return", releases[0]);

          case 13:
            return _context.abrupt("return", undefined);

          case 14:
            if (!(options !== null && options !== void 0 && options.ignoreThrottled)) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", undefined);

          case 16:
            throw new Error("Too many calls to GitHub, try again later");

          case 17:
            throw new Error("unknown status code " + resp.status);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchLatestRelease.apply(this, arguments);
}

function fetchReleaseBinary(_x3, _x4) {
  return _fetchReleaseBinary.apply(this, arguments);
}

function _fetchReleaseBinary() {
  _fetchReleaseBinary = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(slug, version) {
    var _normalizeSlug5, repoPath, downloadUrl, req, firmware;

    return regenerator_default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // we are not using the release api because of CORS.
            _normalizeSlug5 = normalizeSlug(slug), repoPath = _normalizeSlug5.repoPath;
            downloadUrl = "https://raw.githubusercontent.com/" + repoPath + "/main/dist/fw-" + version + ".uf2";
            _context2.next = 4;
            return fetch(downloadUrl, {
              headers: {
                Accept: "application/octet-stream"
              }
            });

          case 4:
            req = _context2.sent;

            if (!(req.status == 200)) {
              _context2.next = 10;
              break;
            }

            _context2.next = 8;
            return req.blob();

          case 8:
            firmware = _context2.sent;
            return _context2.abrupt("return", firmware);

          case 10:
            return _context2.abrupt("return", undefined);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchReleaseBinary.apply(this, arguments);
}

function fetchText(_x5, _x6, _x7, _x8) {
  return _fetchText.apply(this, arguments);
}

function _fetchText() {
  _fetchText = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3(slug, tag, path, mimeType) {
    var _normalizeSlug6, repoPath, folder, downloadUrl, req, src;

    return regenerator_default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _normalizeSlug6 = normalizeSlug(slug), repoPath = _normalizeSlug6.repoPath, folder = _normalizeSlug6.folder;
            downloadUrl = "https://raw.githubusercontent.com/" + repoPath + "/" + tag + "/" + (folder ? folder + "/" : "") + path;
            _context3.next = 4;
            return fetch(downloadUrl, {
              headers: {
                Accept: mimeType
              }
            });

          case 4:
            req = _context3.sent;

            if (!(req.status == 200)) {
              _context3.next = 10;
              break;
            }

            _context3.next = 8;
            return req.text();

          case 8:
            src = _context3.sent;
            return _context3.abrupt("return", src);

          case 10:
            return _context3.abrupt("return", undefined);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _fetchText.apply(this, arguments);
}

function useFetchApi(path, options) {
  var res = useFetch("" + ROOT + path);
  if (res.status !== undefined) switch (res.status) {
    case 200:
    case 201:
    case 202:
    case 203:
    case 204:
      break;

    case 404:
      // unknow repo or no access
      res.response = undefined;
      break;

    case 403:
      // throttled
      if (options !== null && options !== void 0 && options.ignoreThrottled) {
        res.response = undefined;
        return res;
      } else throw new Error("Too many calls to GitHub, try again later");

    default:
      console.log("unknown status", res);
      throw new Error("Unknown response from GitHub " + res.status);
  }
  return res;
}

function useFetchJSON(slug, tag, path, mimeType) {
  var _normalizeSlug = normalizeSlug(slug),
      repoPath = _normalizeSlug.repoPath,
      folder = _normalizeSlug.folder;

  var downloadUrl = "https://raw.githubusercontent.com/" + repoPath + "/" + tag + "/" + (folder ? folder + "/" : "") + path;
  return useFetch(downloadUrl, {
    headers: {
      Accept: mimeType
    }
  });
}
function useRepository(slug) {
  var _normalizeSlug2 = normalizeSlug(slug),
      repoPath = _normalizeSlug2.repoPath;

  var path = "repos/" + repoPath;
  var res = useFetchApi(path, {
    ignoreThrottled: true
  });
  return res;
}
function useLatestRelease(slug, options) {
  var _resp$response;

  var resp = useLatestReleases(slug, options);
  return _objectSpread(_objectSpread({}, resp), {}, {
    response: (_resp$response = resp.response) === null || _resp$response === void 0 ? void 0 : _resp$response[0]
  });
}
function useLatestReleases(slug, options) {
  if (!slug) return {
    response: undefined,
    loading: false,
    error: undefined,
    status: undefined
  };

  var _normalizeSlug3 = normalizeSlug(slug),
      repoPath = _normalizeSlug3.repoPath;

  var uri = "repos/" + repoPath + "/contents/dist";
  var res = useFetchApi(uri, _objectSpread(_objectSpread({}, options || {}), {}, {
    ignoreThrottled: true
  }));
  return _objectSpread(_objectSpread({}, res), {}, {
    response: contentsToFirmwareReleases(res.response)
  });
}

/***/ }),

/***/ 99202:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ServiceTest; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/AlertTitle/AlertTitle.js
var AlertTitle = __webpack_require__(99330);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Info.js
var Info = __webpack_require__(12531);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 24 modules
var servers = __webpack_require__(25606);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(21258);
// EXTERNAL MODULE: ./jacdac-ts/src/test/testspec.ts + 1 modules
var testspec = __webpack_require__(45831);
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(7746);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(31186);
// EXTERNAL MODULE: ./src/components/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__(31477);
;// CONCATENATED MODULE: ./src/components/select/SelectServiceGrid.tsx







function SelectServiceGrid(props) {
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var serviceClass = props.serviceClass,
      buttonText = props.buttonText,
      onSelect = props.onSelect,
      disabled = props.disabled;
  var services = (0,useChange/* default */.Z)(bus, function (n) {
    return n.services({
      serviceClass: serviceClass
    });
  }, []);
  var gridBreakpoints = (0,useGridBreakpoints/* default */.Z)();

  var handleSelect = function handleSelect(service) {
    return function () {
      return onSelect(service);
    };
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, !!services.length && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, services.map(function (service) {
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, Object.assign({
      key: service.id,
      item: true
    }, gridBreakpoints), /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(DeviceCardHeader/* default */.Z, {
      device: service.device,
      showAvatar: true
    }), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, /*#__PURE__*/react.createElement(Button/* default */.Z, {
      variant: "contained",
      color: "primary",
      onClick: handleSelect(service),
      disabled: disabled
    }, buttonText || "Select"))));
  })), !(services !== null && services !== void 0 && services.length) && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, "Not seeing your device? Try some of the following.", /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, "Check that your device is connected"), /*#__PURE__*/react.createElement("li", null, "Use the ", /*#__PURE__*/react.createElement("strong", null, "packet console"), " to monitor packets on the bus"), /*#__PURE__*/react.createElement("li", null, "Check the class identifier in your annoucement packets"))));
}
// EXTERNAL MODULE: ./src/components/test/ServiceTestRunner.tsx + 2 modules
var ServiceTestRunner = __webpack_require__(43676);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
;// CONCATENATED MODULE: ./src/components/test/ServiceTest.tsx


 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports











function Diagnostics(props) {
  var serviceClass = props.serviceClass;

  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var hostDefinition = (0,servers/* serviceProviderDefinitionFromServiceClass */.vd)(serviceClass);

  var handleStartSimulator = function handleStartSimulator() {
    return (0,servers/* addServiceProvider */.Q6)(bus, hostDefinition);
  };

  if (!hostDefinition) return null;
  return /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, /*#__PURE__*/react.createElement(AlertTitle/* default */.Z, null, "Developer zone"), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "outlined",
    onClick: handleStartSimulator
  }, "start simulator"));
}

function ServiceTestRunnerSelect(props) {
  var serviceClass = props.serviceClass,
      onSelect = props.onSelect;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", null, "Select a device to test"), /*#__PURE__*/react.createElement(SelectServiceGrid, {
    serviceClass: serviceClass,
    onSelect: onSelect
  }));
}

function ServiceTest(props) {
  var serviceSpec = props.serviceSpec,
      showStartSimulator = props.showStartSimulator,
      _props$serviceTest = props.serviceTest,
      serviceTest = _props$serviceTest === void 0 ? (0,testspec/* serviceTestFromServiceClass */.H)(serviceSpec === null || serviceSpec === void 0 ? void 0 : serviceSpec.classIdentifier) : _props$serviceTest;
  var serviceClass = serviceSpec.classIdentifier;

  var _useState = (0,react.useState)(undefined),
      service = _useState[0],
      setService = _useState[1];

  var handleSelect = function handleSelect(service) {
    return setService(service);
  }; // clear selected service when json changes


  (0,react.useEffect)(function () {
    setService(undefined);
  }, [serviceTest]); // clear service if device disconnects

  (0,react.useEffect)(function () {
    var _service$device;

    return service === null || service === void 0 ? void 0 : (_service$device = service.device) === null || _service$device === void 0 ? void 0 : _service$device.subscribe(constants/* DISCONNECT */.PYu, function () {
      setService(undefined);
    });
  }, [service]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, serviceSpec.name + " tests", /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "go to specification",
    to: "/services/" + serviceSpec.shortId + "/"
  }, /*#__PURE__*/react.createElement(Info/* default */.Z, null))), (flags/* default.diagnostics */.Z.diagnostics || showStartSimulator) && /*#__PURE__*/react.createElement(Diagnostics, {
    serviceClass: serviceClass
  }), !service && /*#__PURE__*/react.createElement(ServiceTestRunnerSelect, {
    serviceClass: serviceClass,
    onSelect: handleSelect
  }), service && /*#__PURE__*/react.createElement(ServiceTestRunner/* default */.Z, {
    service: service,
    serviceTest: serviceTest
  }));
}

/***/ }),

/***/ 95393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ GridHeader; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8266);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4998);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);



var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    hr: {
      background: theme.palette.text.disabled,
      marginBottom: "unset"
    },
    start: {
      width: theme.spacing(2)
    }
  });
});
function GridHeader(props) {
  var title = props.title,
      count = props.count,
      variant = props.variant,
      action = props.action;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    container: true,
    direction: "row",
    spacing: 1,
    justify: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.hr, classes.start)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true
  }, action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    component: "span",
    mr: 1
  }, action), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    component: "span",
    variant: variant || "subtitle1"
  }, title), count !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    component: "span",
    ml: 0.5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    label: count
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: classes.hr
  }))));
}

/***/ }),

/***/ 21838:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdutils.ts
var jdutils = __webpack_require__(30055);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdtestfuns.ts
var jdtestfuns = __webpack_require__(92671);
// EXTERNAL MODULE: ./jacdac-ts/node_modules/jsep/build/jsep.js
var jsep = __webpack_require__(25297);
var jsep_default = /*#__PURE__*/__webpack_require__.n(jsep);
;// CONCATENATED MODULE: ./jacdac-ts/jacdac-spec/spectool/jdtest.ts
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var supportedExpressions = ["MemberExpression", "ArrayExpression", "BinaryExpression", "CallExpression", "Identifier", "Literal", "UnaryExpression", "LogicalExpression"]; // we parse a test with respect to an existing ServiceSpec

function parseSpecificationTestMarkdownToJSON(filecontent, spec, filename) {
  if (filename === void 0) {
    filename = "";
  }

  if (!spec) return undefined;
  filecontent = (filecontent || "").replace(/\r/g, "");
  var info = {
    description: "",
    serviceClassIdentifier: spec.classIdentifier,
    tests: []
  };
  var backticksType = "";
  var errors = [];
  var lineNo = 0;
  var currentTest = null;
  var testHeading = "";
  var testPrompt = "";
  var symbolResolver = new jdutils/* SpecSymbolResolver */.ll(spec, undefined, function (e) {
    return error(e);
  });
  var checkExpression = new jdutils/* CheckExpression */.qg(symbolResolver, function (t) {
    return supportedExpressions.indexOf(t) >= 0;
  }, function (e) {
    return error(e);
  });

  try {
    for (var _iterator = _createForOfIteratorHelperLoose(filecontent.split(/\n/)), _step; !(_step = _iterator()).done;) {
      var line = _step.value;
      lineNo++;
      processLine(line);
    }
  } catch (e) {
    error("exception: " + e.message);
  }

  if (currentTest) finishTest(symbolResolver);
  if (errors.length) info.errors = errors;
  return info;

  function processLine(line) {
    if (backticksType) {
      if (line.trim() == "```") {
        backticksType = null;
        if (backticksType == "default") return;
      }
    } else {
      var m = /^```(.*)/.exec(line);

      if (m) {
        backticksType = m[1] || "default";
        if (backticksType == "default") return;
      }
    }

    var interpret = backticksType == "default" || line.slice(0, 4) == "    " || /^\t/.exec(line);

    if (!interpret) {
      var _m = /^(#+)\s*(.*)/.exec(line);

      if (_m) {
        testHeading = "";
        testPrompt = "";
        var hd = _m[1],
            cont = _m[2];

        if (hd == "#") {
          if (!info.description) info.description = cont.trim();else error("use ## to start a test, not #");
        } else if (hd == "##") {
          if (currentTest) finishTest(symbolResolver);
          testHeading = cont.trim();
        }
      } else {
        testPrompt += line;
      }
    } else {
      var expanded = line.replace(/\/\/.*/, "").trim();
      if (!expanded) return;
      processCommand(expanded);
    }
  }

  function processCommand(expanded) {
    // TODO: if there is a prompt, the test has no commands, and
    // TODO: the first command is not ask/say
    // TODO: then add a say command
    if (!currentTest) {
      if (!testHeading) error("every test must have a description (via ##)");
      currentTest = {
        description: testHeading,
        prompt: testPrompt,
        registers: [],
        events: [],
        testCommands: []
      };
      testHeading = "";
      testPrompt = "";
    }

    var root = jsep_default()(expanded);
    var ret = checkExpression.check(root, (0,jdtestfuns/* getTestCommandFunctions */.f)());

    if (ret) {
      var command = ret[0],
          _root = ret[1]; // check all calls in subexpressions

      processCalls(command, _root);
      currentTest.testCommands.push({
        prompt: testPrompt,
        call: _root
      });
      testPrompt = "";
    } // this checking is specific to test functions (for now)


    function processCalls(command, root) {
      var args = root.arguments;
      var testExpressionFunctions = (0,jdtestfuns/* getTestExpressionFunctions */.V)();
      args.forEach(function (arg, a) {
        var argType = command.args[a];
        (0,jdutils/* exprVisitor */.ao)(root, arg, function (parent, callExpr) {
          if (callExpr.type !== 'CallExpression') return;
          if (callExpr.callee.type !== "Identifier") error("all calls must be direct calls");
          var id = callExpr.callee.name;
          var tef = testExpressionFunctions.find(function (r) {
            return id == r.id;
          });
          if (!tef) error(id + " is not a registered test expression function.");

          if (tef.context === "expression" || tef.context === "either") {
            if (argType != "boolean") error(id + " expression function can only be used inside a boolean expression"); // no nested calls

            if (command.context === "expression" || command.context === "either") error("cannot nest " + tef.id + " underneath " + command.id); // look under tef

            (0,jdutils/* exprVisitor */.ao)(null, callExpr, function (parent, ce) {
              if (ce.type !== 'CallExpression') return;
              if (ce.callee.type === "Identifier" && ce.callee.name) error("cannot nest " + ce.callee.name + " underneath " + id);
            });
          }

          var expected = tef.args.length;
          if (expected !== callExpr.arguments.length) error("Expected " + expected + " arguments; got " + callExpr.arguments.length);
        });
      });
    }
  }

  function finishTest(s) {
    currentTest.registers = s.registers;
    currentTest.events = s.events;
    s.reset();
    info.tests.push(currentTest);
    currentTest = null;
  }

  function error(msg) {
    if (!msg) msg = "syntax error";
    if (errors.some(function (e) {
      return e.line == lineNo && e.message == msg;
    })) return;
    errors.push({
      file: filename,
      line: lineNo,
      message: msg
    });
  }
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./src/components/useLocalStorage.ts
var useLocalStorage = __webpack_require__(86581);
// EXTERNAL MODULE: ./src/components/ui/HighlightTextField.tsx + 1 modules
var HighlightTextField = __webpack_require__(33024);
// EXTERNAL MODULE: ./src/components/ServiceSpecificationSelect.tsx
var ServiceSpecificationSelect = __webpack_require__(14247);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/components/test/ServiceTest.tsx + 1 modules
var ServiceTest = __webpack_require__(99202);
// EXTERNAL MODULE: ./src/components/github.ts + 2 modules
var github = __webpack_require__(99819);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
// EXTERNAL MODULE: ./src/components/ui/GridHeader.tsx
var GridHeader = __webpack_require__(95393);
;// CONCATENATED MODULE: ./src/components/tools/ServiceTestEditor.tsx















var SERVICE_TEST_SERVICE_STORAGE_KEY = "jacdac:servicetesteditor:service";
var SERVICE_TEST_SOURCE_STORAGE_KEY = "jacdac:servicetesteditorsource";
var SERVICE_MARKDOWN_SOURCE_STORAGE_KEY = "jacdac:servicetesteditorsource:markdown";
function ServiceTestEditor() {
  var _useContext = (0,react.useContext)(AppContext/* default */.ZP),
      setError = _useContext.setError;

  var _useLocalStorage = (0,useLocalStorage/* default */.Z)(SERVICE_TEST_SERVICE_STORAGE_KEY, constants/* SRV_BUTTON */.XJR),
      serviceClass = _useLocalStorage[0],
      setServiceClass = _useLocalStorage[1];

  var _useLocalStorage2 = (0,useLocalStorage/* default */.Z)(SERVICE_TEST_SOURCE_STORAGE_KEY, ""),
      source = _useLocalStorage2[0],
      setSource = _useLocalStorage2[1];

  var _useLocalStorage3 = (0,useLocalStorage/* default */.Z)(SERVICE_MARKDOWN_SOURCE_STORAGE_KEY, ""),
      markdownSource = _useLocalStorage3[0],
      setMarkdownSource = _useLocalStorage3[1];

  var serviceSpec = (0,react.useMemo)(function () {
    return (0,spec/* serviceSpecificationFromClassIdentifier */.d5)(serviceClass);
  }, [serviceClass]);
  var json = (0,react.useMemo)(function () {
    return parseSpecificationTestMarkdownToJSON(source, serviceSpec);
  }, [source, serviceSpec]);
  var servicePath = json && "services/tests/" + (serviceSpec.camelName || serviceSpec.shortId || "0x" + serviceSpec.classIdentifier.toString(16)).toLowerCase();

  var handleLoadFromGithub = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var ghSource, _ghSource;

      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0,github/* fetchText */.s8)("microsoft/jacdac", "main", "services/tests/" + serviceSpec.shortId + ".md", "text/plain");

            case 3:
              ghSource = _context.sent;
              setSource(ghSource || "");
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              setError(_context.t0);

            case 10:
              _context.prev = 10;
              _context.next = 13;
              return (0,github/* fetchText */.s8)("microsoft/jacdac", "main", "services/" + serviceSpec.shortId + ".md", "text/plain");

            case 13:
              _ghSource = _context.sent;
              if (_ghSource) setMarkdownSource(_ghSource);else setError("Specification source not found");
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t1 = _context["catch"](10);
              setError(_context.t1);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7], [10, 17]]);
    }));

    return function handleLoadFromGithub() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    spacing: 2,
    container: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2,
    direction: "row"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(ServiceSpecificationSelect/* default */.Z, {
    label: "Select a service to test",
    serviceClass: serviceClass,
    setServiceClass: setServiceClass
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "outlined",
    disabled: !serviceSpec,
    onClick: handleLoadFromGithub
  }, "Load from GitHub")))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    spacing: 2,
    container: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12,
    sm: 7
  }, /*#__PURE__*/react.createElement(HighlightTextField/* default */.Z, {
    code: source,
    language: "markdown",
    onChange: setSource,
    annotations: json === null || json === void 0 ? void 0 : json.errors,
    pullRequestTitle: json && "Service test: " + serviceSpec.name,
    pullRequestPath: servicePath
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12,
    sm: 5
  }, /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    source: markdownSource
  }))), /*#__PURE__*/react.createElement(GridHeader/* default */.Z, {
    title: "Preview"
  }), json && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12,
    xl: 7
  }, /*#__PURE__*/react.createElement(ServiceTest/* default */.Z, {
    showStartSimulator: true,
    serviceSpec: serviceSpec,
    serviceTest: json
  })));
}
;// CONCATENATED MODULE: ./src/pages/tools/service-test-editor.tsx



function Page() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Service Test Editor"), /*#__PURE__*/react.createElement("p", null, "Read the", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: "/reference/service-tests"
  }, "service test"), " ", "documentation."), /*#__PURE__*/react.createElement(ServiceTestEditor, null));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-service-test-editor-tsx-2b3395e81f0ab319bdee.js.map