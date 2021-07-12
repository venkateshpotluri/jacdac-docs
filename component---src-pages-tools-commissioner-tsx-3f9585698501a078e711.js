(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1322],{

/***/ 49400:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47895);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27490);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34621);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81664);
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37595);
/* harmony import */ var _Table_TableContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83604);
/* harmony import */ var _Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78847);









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({}, theme.typography.body2, {
      display: 'table-cell',
      verticalAlign: 'inherit',
      // Workaround for a rendering bug with spanned columns in Chrome 62.0.
      // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
      borderBottom: "1px solid\n    ".concat(theme.palette.type === 'light' ? (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .lighten */ .$n)((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .fade */ .U1)(theme.palette.divider, 1), 0.88) : (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .darken */ ._j)((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .fade */ .U1)(theme.palette.divider, 1), 0.68)),
      textAlign: 'left',
      padding: 16
    }),

    /* Styles applied to the root element if `variant="head"` or `context.table.head`. */
    head: {
      color: theme.palette.text.primary,
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightMedium
    },

    /* Styles applied to the root element if `variant="body"` or `context.table.body`. */
    body: {
      color: theme.palette.text.primary
    },

    /* Styles applied to the root element if `variant="footer"` or `context.table.footer`. */
    footer: {
      color: theme.palette.text.secondary,
      lineHeight: theme.typography.pxToRem(21),
      fontSize: theme.typography.pxToRem(12)
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: '6px 24px 6px 16px',
      '&:last-child': {
        paddingRight: 16
      },
      '&$paddingCheckbox': {
        width: 24,
        // prevent the checkbox column from growing
        padding: '0 12px 0 16px',
        '&:last-child': {
          paddingLeft: 12,
          paddingRight: 16
        },
        '& > *': {
          padding: 0
        }
      }
    },

    /* Styles applied to the root element if `padding="checkbox"`. */
    paddingCheckbox: {
      width: 48,
      // prevent the checkbox column from growing
      padding: '0 0 0 4px',
      '&:last-child': {
        paddingLeft: 0,
        paddingRight: 4
      }
    },

    /* Styles applied to the root element if `padding="none"`. */
    paddingNone: {
      padding: 0,
      '&:last-child': {
        padding: 0
      }
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },

    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right',
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    },

    /* Styles applied to the root element if `context.table.stickyHeader={true}`. */
    stickyHeader: {
      position: 'sticky',
      top: 0,
      left: 0,
      zIndex: 2,
      backgroundColor: theme.palette.background.default
    }
  };
};
/**
 * The component renders a `<th>` element when the parent context is a header
 * or otherwise a `<td>` element.
 */

var TableCell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function TableCell(props, ref) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'inherit' : _props$align,
      classes = props.classes,
      className = props.className,
      component = props.component,
      paddingProp = props.padding,
      scopeProp = props.scope,
      sizeProp = props.size,
      sortDirection = props.sortDirection,
      variantProp = props.variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(props, ["align", "classes", "className", "component", "padding", "scope", "size", "sortDirection", "variant"]);

  var table = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Table_TableContext__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z);
  var tablelvl2 = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z);
  var isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
  var role;
  var Component;

  if (component) {
    Component = component;
    role = isHeadCell ? 'columnheader' : 'cell';
  } else {
    Component = isHeadCell ? 'th' : 'td';
  }

  var scope = scopeProp;

  if (!scope && isHeadCell) {
    scope = 'col';
  }

  var padding = paddingProp || (table && table.padding ? table.padding : 'default');
  var size = sizeProp || (table && table.size ? table.size : 'medium');
  var variant = variantProp || tablelvl2 && tablelvl2.variant;
  var ariaSort = null;

  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(classes.root, classes[variant], className, align !== 'inherit' && classes["align".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(align))], padding !== 'default' && classes["padding".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(padding))], size !== 'medium' && classes["size".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(size))], variant === 'head' && table && table.stickyHeader && classes.stickyHeader),
    "aria-sort": ariaSort,
    role: role,
    scope: scope
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(styles, {
  name: 'MuiTableCell'
})(TableCell));

/***/ }),

/***/ 8567:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
}), 'Save');

exports.Z = _default;

/***/ }),

/***/ 7877:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSetTable": function() { return /* binding */ DataSetTable; },
/* harmony export */   "default": function() { return /* binding */ Commissioner; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(83332);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8567);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(39545);
/* harmony import */ var _components_hooks_useDevices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53074);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71815);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(49683);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86300);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(49400);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78475);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4093);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(99395);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58063);
/* harmony import */ var _components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95393);
/* harmony import */ var _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65063);
/* harmony import */ var _components_ServiceManagerContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99808);

// tslint:disable-next-line: no-submodule-imports



// tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports



// tslint:disable-next-line: no-submodule-imports
 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports





var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
    table: {
      minWidth: "10rem"
    },
    root: {
      marginBottom: theme.spacing(1)
    },
    grow: {
      flexGrow: 1
    },
    field: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1.5)
    },
    segment: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    row: {
      marginBottom: theme.spacing(0.5)
    },
    buttons: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(2)
    },
    trend: {
      width: theme.spacing(10)
    },
    vmiddle: {
      verticalAlign: "middle"
    },
    check: {
      color: "green"
    }
  });
});

function serviceArrayMatched(descriptor) {
  var matched = true;
  descriptor.services.forEach(function (service) {
    var srv = descriptor.servicesSeen.filter(function (srv) {
      return srv.serviceClass == service.serviceClass && srv.serviceIndex == service.serviceIndex;
    });
    if (srv.length == 0) matched = false;
  });
  return matched;
}

function dateString() {
  var date = new Date();
  return date.toDateString().replace(/ /g, "-");
}

function DataSetTable(props) {
  var _dataSet$descriptors;

  var dataSet = props.dataSet,
      maxRows = props.maxRows,
      minRows = props.minRows,
      className = props.className;
  var headers = dataSet.headers,
      descriptors = dataSet.descriptors;
  var classes = useStyles();
  var data = (_dataSet$descriptors = dataSet.descriptors) === null || _dataSet$descriptors === void 0 ? void 0 : _dataSet$descriptors.slice(maxRows !== undefined ? -maxRows : 0);

  while (minRows !== undefined && data.length < minRows) {
    data.push(undefined);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    className: className,
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    className: classes.table,
    "aria-label": "simple table",
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, null, headers.map(function (header) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
      align: "right",
      key: "header" + header
    }, header);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, null, data === null || data === void 0 ? void 0 : data.map(function (descriptor, index) {
    var _descriptor$services$;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
      key: "row" + index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
      key: "cell0",
      align: "center"
    }, descriptor.deviceIdentifier), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
      key: "cell1",
      align: "center"
    }, descriptor.firmwareIdentifier && descriptor.firmwareIdentifier.toString(16), ((_descriptor$services$ = descriptor.services.filter(function (service) {
      return service.serviceClass == _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_ROLE_MANAGER */ .igi;
    })) === null || _descriptor$services$ === void 0 ? void 0 : _descriptor$services$.length) && "BRAIN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
      key: "cell2",
      align: "center"
    }, descriptor.services.map(function (service) {
      return service.name + " ";
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
      key: "cell3",
      align: "center"
    }, descriptor.servicesSeen.map(function (service) {
      return service.name + " ";
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
      key: "cell4",
      align: "center"
    }, serviceArrayMatched(descriptor) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classes.check
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, null), "PASS")));
  }))));
}
function Commissioner() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z),
      bus = _useContext.bus;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      filterBrains = _useState[0],
      setFilterBrains = _useState[1]; // todo allow remove brains


  var devices = (0,_components_hooks_useDevices__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    ignoreSelf: true,
    ignoreSimulators: true
  }).filter(function (d) {
    var _d$services;

    if (filterBrains && (_d$services = d.services({
      serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_ROLE_MANAGER */ .igi
    })) !== null && _d$services !== void 0 && _d$services.length) return false;
    return true;
  });

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      dataSet = _useState2[0],
      setDataSet = _useState2[1];

  var tableHeaders = ["Device identifier", "Firmware identifier", "Services advertised", "Services seen", "Functional test pass"];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    descriptors: [],
    headers: tableHeaders
  }),
      table = _useState3[0],
      setTable = _useState3[1];

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_ServiceManagerContext__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP),
      fileStorage = _useContext2.fileStorage;

  var classes = useStyles();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var usubArray = [];
    var newDataSet = dataSet || [];
    devices.forEach(function (d) {
      var _newDataSet$filter;

      if ((_newDataSet$filter = newDataSet.filter(function (entry) {
        return entry.deviceIdentifier == d.deviceId;
      })) !== null && _newDataSet$filter !== void 0 && _newDataSet$filter.length) return;
      var services = [];
      d.services().filter(function (service) {
        return service.serviceClass != _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_CONTROL */ .gm9;
      }).forEach(function (s) {
        services.push({
          name: s.name,
          serviceClass: s.serviceClass,
          serviceIndex: s.serviceIndex
        });
      });
      newDataSet.push({
        deviceIdentifier: d.deviceId,
        firmwareIdentifier: d.firmwareIdentifier,
        services: services,
        servicesSeen: []
      });
    });
    setDataSet(newDataSet);
    return function () {
      usubArray.forEach(function (usub) {
        return usub();
      });
    };
  }, [devices]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log("UPDATE");
    var newObj = {
      headers: tableHeaders,
      descriptors: dataSet
    };
    setTable(newObj);
  }, [dataSet]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return bus.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .PACKET_RECEIVE */ .u_S, function (packet) {
      var _newDataSet$find;

      var newDataSet = dataSet.slice(0);
      var contains = newDataSet.find(function (descriptor) {
        return descriptor.deviceIdentifier == packet.deviceIdentifier;
      }).servicesSeen.filter(function (service) {
        return service.serviceClass == packet.serviceClass && service.serviceIndex == packet.serviceIndex;
      });
      if (contains.length) return;
      (_newDataSet$find = newDataSet.find(function (descriptor) {
        return descriptor.deviceIdentifier == packet.deviceIdentifier;
      })) === null || _newDataSet$find === void 0 ? void 0 : _newDataSet$find.servicesSeen.push({
        name: packet.friendlyServiceName,
        serviceClass: packet.serviceClass,
        serviceIndex: packet.serviceIndex
      });
      setDataSet(newDataSet);
    });
  }, [bus, dataSet]);

  var handleOnClearClick = function handleOnClearClick() {
    setDataSet(undefined);
  };

  var handleDownloadCSV = function handleDownloadCSV() {
    var sep = ",";
    var lineEnding = "\r\n";
    var str = "device identifier" + sep + "firmware identifier" + sep + "services" + sep + "functional test pass" + lineEnding;
    dataSet.forEach(function (descriptor) {
      str += "" + descriptor.deviceIdentifier + sep;
      if (descriptor.firmwareIdentifier) str += "" + descriptor.firmwareIdentifier + sep;else if (descriptor.services.find(function (service) {
        return service.serviceClass == _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_ROLE_MANAGER */ .igi;
      })) str += "BRAIN" + sep;else str += "UNKNOWN" + sep;
      str += "" + descriptor.services.map(function (service) {
        return service.name;
      }).join(" ") + sep;
      if (serviceArrayMatched(descriptor)) str += "PASS" + lineEnding;else str += "FAIL" + lineEnding;
    });
    fileStorage.saveText("commissioning-" + dateString() + ".csv", str);
  };

  var handleFilterBrains = function handleFilterBrains() {
    filterBrains ? setFilterBrains(false) : setFilterBrains(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Commissioner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    showAvatar: true,
    showHeader: true,
    showConnect: true,
    showStartSimulators: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Commissioning data"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
    item: true,
    xs: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, {
    "aria-label": "Clear data",
    variant: "contained",
    color: "primary",
    onClick: handleOnClearClick
  }, "Clear")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, {
    "aria-label": "Clear data",
    variant: "contained",
    color: "secondary",
    onClick: handleDownloadCSV,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_19__/* .default */ .Z, null)
  }, "Download CSV")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, {
    "aria-label": "Clear data",
    variant: "contained",
    onClick: handleFilterBrains
  }, filterBrains ? "Stop filtering brains" : "Start filtering brains")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataSetTable, {
    key: "datasettable",
    className: classes.segment,
    dataSet: table
  }))));
}

/***/ })

}]);