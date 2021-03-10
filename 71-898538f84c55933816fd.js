(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "0U36":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ TraceSnippet; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/logparser.ts
var logparser = __webpack_require__("hkpt");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__("eD//");

// EXTERNAL MODULE: ./src/components/PacketListItem.tsx
var PacketListItem = __webpack_require__("7qUl");

// CONCATENATED MODULE: ./src/components/TraceView.tsx



function TraceView(props) {
  var trace = props.trace;
  var packets = trace.packets;
  return /*#__PURE__*/react_default.a.createElement(List["a" /* default */], null, packets.map(function (packet) {
    return /*#__PURE__*/react_default.a.createElement(PacketListItem["a" /* default */], {
      key: 'pkt' + packet.key,
      packet: packet,
      count: 1,
      showTime: true
    });
  }));
}
// CONCATENATED MODULE: ./src/components/TraceSnippet.tsx



function TraceSnippet(props) {
  var source = props.source;
  var trace = Object(react["useMemo"])(function () {
    return Object(logparser["b" /* parseTrace */])(source);
  }, [source]);
  return /*#__PURE__*/react_default.a.createElement(TraceView, {
    trace: trace
  });
}

/***/ })

}]);
//# sourceMappingURL=71-898538f84c55933816fd.js.map