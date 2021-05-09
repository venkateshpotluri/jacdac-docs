(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8946],{

/***/ 24162:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ RegisterInput; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__(8266);
// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__(26390);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./src/components/fields/MembersInput.tsx + 5 modules
var MembersInput = __webpack_require__(49456);
// EXTERNAL MODULE: ./src/components/RegisterTrend.tsx
var RegisterTrend = __webpack_require__(88251);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithProgress.tsx + 1 modules
var IconButtonWithProgress = __webpack_require__(16845);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(49013);
;// CONCATENATED MODULE: ./src/components/hooks/useRegisterServer.ts

function useRegisterServer(register) {
  var server = (0,useServiceServer/* default */.Z)(register === null || register === void 0 ? void 0 : register.service);
  return server === null || server === void 0 ? void 0 : server.register(register === null || register === void 0 ? void 0 : register.code);
}
;// CONCATENATED MODULE: ./src/components/hooks/useReadingAuxilliaryValue.ts


function useReadingAuxilliaryValue(register, identifier, options) {
  if (identifier === void 0) {
    identifier = constants/* SystemReg.ReadingError */.ZJq.ReadingError | constants/* SystemReg.ReadingResolution */.ZJq.ReadingResolution | constants/* SystemReg.MaxReading */.ZJq.MaxReading | constants/* SystemReg.MinReading */.ZJq.MinReading | constants/* SystemReg.MinValue */.ZJq.MinValue | constants/* SystemReg.MaxValue */.ZJq.MaxValue | constants/* SystemReg.StreamingInterval */.ZJq.StreamingInterval | constants/* SystemReg.StreamingPreferredInterval */.ZJq.StreamingPreferredInterval;
  }

  var _ref = register || {},
      service = _ref.service,
      code = _ref.code;

  var _ref2 = options || {
    visible: true
  },
      visible = _ref2.visible;

  var reading = code === constants/* SystemReg.Reading */.ZJq.Reading || code === constants/* SystemReg.Value */.ZJq.Value;
  var auxilliaryRegister = reading && identifier ? service.register(identifier) : undefined;

  var _useState = (0,react.useState)(auxilliaryRegister === null || auxilliaryRegister === void 0 ? void 0 : auxilliaryRegister.unpackedValue),
      value = _useState[0],
      setValue = _useState[1];

  (0,react.useEffect)(function () {
    return visible && (auxilliaryRegister === null || auxilliaryRegister === void 0 ? void 0 : auxilliaryRegister.subscribe(constants/* REPORT_UPDATE */.rGZ, function () {
      setValue(auxilliaryRegister === null || auxilliaryRegister === void 0 ? void 0 : auxilliaryRegister.unpackedValue);
    }));
  }, [register, auxilliaryRegister, visible]);
  return value;
}
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
;// CONCATENATED MODULE: ./src/components/RegisterInput.tsx





 // tslint:disable-next-line: no-submodule-imports









function RegisterInput(props) {
  var register = props.register,
      showRegisterName = props.showRegisterName,
      showDeviceName = props.showDeviceName,
      showServiceName = props.showServiceName,
      hideMissingValues = props.hideMissingValues,
      showTrend = props.showTrend,
      showDataType = props.showDataType,
      variant = props.variant,
      off = props.off,
      toggleOff = props.toggleOff,
      visible = props.visible;
  var service = register.service,
      specification = register.specification;
  var device = service.device;
  var fields = register.fields,
      code = register.code;

  var _useContext = (0,react.useContext)(AppContext/* default */.ZP),
      setAppError = _useContext.setError;

  var _useState = (0,react.useState)(false),
      working = _useState[0],
      setWorking = _useState[1]; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var _useState2 = (0,react.useState)(register.unpackedValue || []),
      args = _useState2[0],
      setArgs = _useState2[1];

  var server = useRegisterServer(register);
  var hasSet = specification.kind === "rw" || server && specification.kind !== "const";
  var hasData = (0,useChange/* default */.Z)(register, function (_) {
    return !!_.data;
  });
  var color = hasSet ? "secondary" : "primary";
  var regProps = visible !== undefined ? {
    visible: visible
  } : undefined;
  var isReading = code === constants/* SystemReg.Reading */.ZJq.Reading;
  var isValue = !isReading && code === constants/* SystemReg.Value */.ZJq.Value;
  var min = useReadingAuxilliaryValue(register, isReading ? constants/* SystemReg.MinReading */.ZJq.MinReading : isValue ? constants/* SystemReg.MinValue */.ZJq.MinValue : undefined, regProps);
  var max = useReadingAuxilliaryValue(register, isReading ? constants/* SystemReg.MaxReading */.ZJq.MaxReading : isValue ? constants/* SystemReg.MaxValue */.ZJq.MaxValue : undefined, regProps);
  var readingError = useReadingAuxilliaryValue(register, constants/* SystemReg.ReadingError */.ZJq.ReadingError, regProps);
  var resolution = useReadingAuxilliaryValue(register, constants/* SystemReg.ReadingResolution */.ZJq.ReadingResolution, regProps);
  (0,react.useEffect)(function () {
    return visible && register.subscribe(constants/* REPORT_UPDATE */.rGZ, function () {
      var vs = register.unpackedValue;
      if (vs !== undefined) setArgs(vs);
    });
  }, [register, visible]);

  var handleRefresh = function handleRefresh() {
    register.refresh(true);
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var sendArgs = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(values) {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!working) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.prev = 2;
              setWorking(true);
              if (server) server.setValues(values);
              _context.next = 7;
              return register.sendSetPackedAsync(specification.packFormat, values, true);

            case 7:
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              setAppError(_context.t0);

            case 12:
              _context.prev = 12;
              setWorking(false);
              return _context.finish(12);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9, 12, 15]]);
    }));

    return function sendArgs(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  if (!specification) return /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "error"
  }, "Unknown member " + register.service + ":" + register.code);
  if (!fields.length) return null; // nothing to see here

  if (hideMissingValues && !hasData) return null;
  var serviceName = register.service.name.toLocaleLowerCase().replace(/_/g, " ");
  var registerName = specification.name.replace(/_/g, " ");
  return /*#__PURE__*/react.createElement(react.Fragment, null, showDeviceName && /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    component: "span",
    key: "devicenamename"
  }, /*#__PURE__*/react.createElement(DeviceName/* default */.Z, {
    device: device
  }), "/"), showServiceName && specification && /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "caption",
    key: "servicename",
    "aria-label": serviceName
  }, serviceName), showRegisterName && specification && serviceName !== registerName && /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "caption",
    key: "registername",
    "aria-label": registerName
  }, " " + registerName), !hasData && /*#__PURE__*/react.createElement(Box/* default */.Z, null, /*#__PURE__*/react.createElement(IconButtonWithProgress/* default */.Z, {
    title: "refresh",
    indeterminate: true,
    onClick: handleRefresh
  })), showTrend && hasData && /*#__PURE__*/react.createElement(RegisterTrend/* default */.Z, {
    register: register,
    mini: false,
    horizon: 24
  }), hasData && /*#__PURE__*/react.createElement(MembersInput/* default */.Z, {
    color: color,
    serviceSpecification: service.specification,
    serviceMemberSpecification: specification,
    specifications: fields.map(function (f) {
      return f.specification;
    }),
    values: args,
    setValues: hasSet && sendArgs,
    showDataType: showDataType,
    variant: variant,
    min: min,
    max: max,
    resolution: resolution,
    error: readingError,
    off: off,
    toggleOff: toggleOff
  }));
}

/***/ }),

/***/ 88251:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ RegisterTrend; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20392);
/* harmony import */ var _FieldDataSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64616);
/* harmony import */ var _Trend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25090);
/* harmony import */ var _useChartPalette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74039);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54774);







var DEFAULT_HORIZON = 50;
var DEFAULT_HEIGHT = 12;
function RegisterTrend(props) {
  var register = props.register,
      mini = props.mini,
      horizon = props.horizon,
      height = props.height,
      interval = props.interval;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z),
      bus = _useContext.bus;

  var palette = (0,_useChartPalette__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)();
  var dataSet = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_FieldDataSet__WEBPACK_IMPORTED_MODULE_3__/* .default.create */ .Z.create(bus, [register], "output", palette, 100));
  (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(dataSet.current);

  var addRow = function addRow() {
    return dataSet.current.addRow();
  }; // register on change if no intervals


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return interval ? undefined : register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .REPORT_RECEIVE */ .Gb8, addRow);
  }, [interval, register]); // keep logging

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var id = interval && setInterval(addRow, interval);
    return function () {
      return id && clearInterval(id);
    };
  }, [interval]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Trend__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    dataSet: dataSet.current,
    horizon: horizon || DEFAULT_HORIZON,
    gradient: true,
    height: height || DEFAULT_HEIGHT,
    mini: mini
  });
}

/***/ }),

/***/ 49456:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ MembersInput; }
});

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(81253);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/useFormControl.js
var useFormControl = __webpack_require__(68725);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(81664);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      // For correct alignment with the text.
      verticalAlign: 'middle',
      WebkitTapHighlightColor: 'transparent',
      marginLeft: -11,
      marginRight: 16,
      // used for row presentation of radio/checkbox
      '&$disabled': {
        cursor: 'default'
      }
    },

    /* Styles applied to the root element if `labelPlacement="start"`. */
    labelPlacementStart: {
      flexDirection: 'row-reverse',
      marginLeft: 16,
      // used for row presentation of radio/checkbox
      marginRight: -11
    },

    /* Styles applied to the root element if `labelPlacement="top"`. */
    labelPlacementTop: {
      flexDirection: 'column-reverse',
      marginLeft: 16
    },

    /* Styles applied to the root element if `labelPlacement="bottom"`. */
    labelPlacementBottom: {
      flexDirection: 'column',
      marginLeft: 16
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the label's Typography component. */
    label: {
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    }
  };
};
/**
 * Drop in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */

var FormControlLabel = /*#__PURE__*/react.forwardRef(function FormControlLabel(props, ref) {
  var checked = props.checked,
      classes = props.classes,
      className = props.className,
      control = props.control,
      disabledProp = props.disabled,
      inputRef = props.inputRef,
      label = props.label,
      _props$labelPlacement = props.labelPlacement,
      labelPlacement = _props$labelPlacement === void 0 ? 'end' : _props$labelPlacement,
      name = props.name,
      onChange = props.onChange,
      value = props.value,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["checked", "classes", "className", "control", "disabled", "inputRef", "label", "labelPlacement", "name", "onChange", "value"]);

  var muiFormControl = (0,useFormControl/* default */.Z)();
  var disabled = disabledProp;

  if (typeof disabled === 'undefined' && typeof control.props.disabled !== 'undefined') {
    disabled = control.props.disabled;
  }

  if (typeof disabled === 'undefined' && muiFormControl) {
    disabled = muiFormControl.disabled;
  }

  var controlProps = {
    disabled: disabled
  };
  ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(function (key) {
    if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
      controlProps[key] = props[key];
    }
  });
  return /*#__PURE__*/react.createElement("label", (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className, labelPlacement !== 'end' && classes["labelPlacement".concat((0,capitalize/* default */.Z)(labelPlacement))], disabled && classes.disabled),
    ref: ref
  }, other), /*#__PURE__*/react.cloneElement(control, controlProps), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    component: "span",
    className: (0,clsx_m/* default */.Z)(classes.label, disabled && classes.disabled)
  }, label));
});
 false ? 0 : void 0;
/* harmony default export */ var FormControlLabel_FormControlLabel = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiFormControlLabel'
})(FormControlLabel));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slider/Slider.js + 1 modules
var Slider = __webpack_require__(50514);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(76544);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 4 modules
var Select = __webpack_require__(706);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(65541);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__(10913);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/widgets/ButtonWidget.tsx
var ButtonWidget = __webpack_require__(43746);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(60650);
// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__(48059);
// EXTERNAL MODULE: ./src/components/hooks/useThrottledValue.ts
var useThrottledValue = __webpack_require__(72901);
// EXTERNAL MODULE: ./src/components/widgets/svgutils.ts
var svgutils = __webpack_require__(92526);
// EXTERNAL MODULE: ./src/components/widgets/PowerButton.tsx
var PowerButton = __webpack_require__(2250);
;// CONCATENATED MODULE: ./src/components/widgets/GaugeWidget.tsx







function GaugeWidget(props) {
  var value = props.value,
      color = props.color,
      size = props.size,
      min = props.min,
      max = props.max,
      step = props.step,
      variant = props.variant,
      valueLabel = props.valueLabel,
      off = props.off,
      toggleOff = props.toggleOff,
      onChange = props.onChange,
      tabIndex = props.tabIndex;

  var _useWidgetTheme = (0,useWidgetTheme/* default */.Z)(color),
      background = _useWidgetTheme.background,
      active = _useWidgetTheme.active,
      textProps = _useWidgetTheme.textProps;

  var sliderPathRef = (0,react.useRef)();
  var w = 120;
  var h = 120;
  var m = 8;
  var roff = 30;
  var riff = 10;
  var sw = m << 1;
  var cx = w >> 1;
  var cy = h >> 1;
  var r = (w >> 1) - m;
  var sa = -135;
  var ea = 135;

  var _step = step || (max - min) / 10;

  var displayValue = (0,useThrottledValue/* default */.Z)(value, (max - min) * 2);

  var computeArc = function computeArc(v) {
    if (variant === "fountain") {
      var mid = (ea + sa) / 2;
      var fraction = v / (max - min) * (ea - sa);
      if (fraction < 0) return (0,svgutils/* describeArc */.x8)(cx, cy, r, mid + fraction, mid);else return (0,svgutils/* describeArc */.x8)(cx, cy, r, mid, mid + fraction);
    } else {
      var _fraction = (v - min) / (max - min);

      var va = sa + _fraction * (ea - sa);
      return (0,svgutils/* describeArc */.x8)(cx, cy, r, sa, va);
    }
  };

  var db = (0,svgutils/* describeArc */.x8)(cx, cy, r, sa, ea);
  var dvalue = computeArc(value);
  var dactual = computeArc(displayValue);
  var lineCap = "round";
  var tvalue = valueLabel(value);
  var clickeable = !!onChange;

  var handlePointerDown = function handlePointerDown(ev) {
    ev.preventDefault();
    if (!ev.buttons) return;
    var svg = sliderPathRef.current.ownerSVGElement;
    var pos = (0,svgutils/* svgPointerPoint */.PW)(svg, ev);
    var closest = (0,svgutils/* closestPoint */.JI)(sliderPathRef.current, _step, pos);
    onChange(ev, min + (1 - closest) * (max - min));
  };

  var pointerStyle = clickeable && {
    cursor: "pointer"
  };
  var pathProps = {
    onPointerDown: clickeable ? handlePointerDown : undefined,
    onPointerMove: clickeable ? handlePointerDown : undefined,
    style: clickeable ? pointerStyle : undefined
  };

  var handleSliderChange = function handleSliderChange(ev, newValue) {
    onChange(ev, newValue);
  };

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(SvgWidget/* default */.Z, {
    tabIndex: tabIndex,
    width: w,
    height: h,
    size: size
  }, /*#__PURE__*/react.createElement("path", Object.assign({
    ref: sliderPathRef,
    strokeWidth: sw,
    stroke: background,
    d: db,
    strokeLinecap: lineCap,
    fill: "transparent"
  }, pathProps)), !off && /*#__PURE__*/react.createElement("path", Object.assign({
    strokeWidth: sw,
    stroke: active,
    strokeLinecap: lineCap,
    d: dvalue,
    opacity: 0.2,
    fill: "transparent"
  }, pathProps)), !off && /*#__PURE__*/react.createElement("path", Object.assign({
    strokeWidth: sw,
    stroke: active,
    strokeLinecap: lineCap,
    d: dactual,
    fill: "transparent"
  }, pathProps)), off !== undefined ? /*#__PURE__*/react.createElement(PowerButton/* default */.Z, {
    off: off,
    label: tvalue,
    cx: cx,
    cy: cy,
    r: roff,
    ri: riff,
    color: color,
    onClick: toggleOff
  }) : /*#__PURE__*/react.createElement("text", Object.assign({}, textProps, {
    x: cx,
    y: cy,
    "aria-label": tvalue
  }), tvalue))), clickeable && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Slider/* default */.Z, {
    disabled: off,
    color: color,
    min: min,
    max: max,
    step: _step,
    valueLabelDisplay: "off",
    value: value,
    onChange: handleSliderChange
  })));
}
// EXTERNAL MODULE: ./src/components/widgets/useWidgetSize.ts
var useWidgetSize = __webpack_require__(8584);
;// CONCATENATED MODULE: ./src/components/widgets/ValueWithUnitWidget.tsx



function ValueWithUnitWidget(props) {
  var value = props.value,
      min = props.min,
      max = props.max,
      step = props.step,
      secondaryLabel = props.secondaryLabel,
      icon = props.icon,
      label = props.label,
      tabIndex = props.tabIndex,
      onChange = props.onChange;
  var labelVariant = "subtitle1";
  var precision = step === undefined ? 1 : step < 1 ? Math.ceil(-Math.log10(step)) : 0;
  var hasValue = !isNaN(value);
  var valueText = hasValue ? (0,utils/* roundWithPrecision */.JI)(value, precision).toLocaleString() : "--";
  var valueTextLength = (0,utils/* isSet */.DM)(min) && (0,utils/* isSet */.DM)(max) ? [min, max, min + (min + max) / 3].map(function (v) {
    return (0,utils/* roundWithPrecision */.JI)(v, precision).toLocaleString().replace(/[,.]/, '').length;
  }).reduce(function (l, r) {
    return Math.max(l, r);
  }, 0) + precision : valueText.length; //console.log({ min, max, step, precision })

  var valueVariant = valueTextLength < 4 ? "h1" : valueTextLength < 7 ? "h2" : valueTextLength < 9 ? "h3" : valueTextLength < 12 ? "h4" : "h6";
  var valueStyle = {
    minWidth: Math.max(2, valueTextLength - 1) + "em"
  };
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column",
    tabIndex: tabIndex,
    "aria-label": valueText + " " + label
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "row",
    alignContent: "flex-end"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    role: "timer",
    align: "right",
    variant: valueVariant,
    style: valueStyle
  }, icon, valueText)), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column",
    alignContent: "space-between"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: labelVariant
  }, label)), secondaryLabel && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "caption"
  }, secondaryLabel)))))), onChange && value !== undefined && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Slider/* default */.Z, {
    valueLabelDisplay: "off",
    color: "secondary",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: onChange
  })));
}
// EXTERNAL MODULE: ./src/components/icons/HumidityIcon.tsx
var HumidityIcon = __webpack_require__(37557);
// EXTERNAL MODULE: ./src/components/icons/TemperatureIcon.tsx
var TemperatureIcon = __webpack_require__(74741);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(13996);
;// CONCATENATED MODULE: ./src/components/hooks/useUnitIcon.tsx




/* harmony default export */ var useUnitIcon = (function (unit, props) {
  var _ref = (0,jdspec/* resolveUnit */.bM)(unit) || {},
      runit = _ref.unit;

  switch (runit) {
    case "%RH":
      return /*#__PURE__*/react.createElement(HumidityIcon/* default */.Z, props);

    case "°C":
    case "K":
      return /*#__PURE__*/react.createElement(TemperatureIcon/* default */.Z, props);

    default:
      return null;
  }
});
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2285);
;// CONCATENATED MODULE: ./src/components/fields/MemberInput.tsx
 // tslint:disable-next-line: no-submodule-imports













function MemberInput(props) {
  var _serviceSpecification;

  var specification = props.specification,
      serviceSpecification = props.serviceSpecification,
      serviceMemberSpecification = props.serviceMemberSpecification,
      value = props.value,
      setValue = props.setValue,
      showDataType = props.showDataType,
      color = props.color,
      variant = props.variant,
      min = props.min,
      max = props.max,
      resolution = props.resolution,
      error = props.error,
      showLoading = props.showLoading,
      off = props.off,
      toggleOff = props.toggleOff;
  var typicalMin = specification.typicalMin,
      typicalMax = specification.typicalMax,
      absoluteMin = specification.absoluteMin,
      absoluteMax = specification.absoluteMax,
      type = specification.type;
  var enumInfo = (_serviceSpecification = serviceSpecification.enums) === null || _serviceSpecification === void 0 ? void 0 : _serviceSpecification[specification.type];
  var disabled = !setValue;

  var _useState = (0,react.useState)(""),
      errorText = _useState[0],
      setErrorText = _useState[1];

  var _useState2 = (0,react.useState)(""),
      textValue = _useState2[0],
      setTextValue = _useState2[1];

  var valueString = (0,spec/* memberValueToString */.Mn)(value, specification);
  var name = specification.name === "_" ? serviceMemberSpecification.name : specification.name;
  var label = name;
  var isWidget = variant === "widget";
  var widgetSize = (0,useWidgetSize/* default */.Z)();
  var unitIcon = useUnitIcon(specification.unit, {
    "aria-label": label
  });
  var minValue = (0,utils/* pick */.ei)(min, typicalMin, absoluteMin, /^u/.test(type) ? 0 : undefined);
  var maxValue = (0,utils/* pick */.ei)(max, typicalMax, absoluteMax);
  var errorValue = error ? "±" + (0,utils/* roundWithPrecision */.JI)(error, 1 - Math.floor(Math.log10(error))).toLocaleString() : undefined;
  var unit = (0,pretty/* prettyUnit */.QP)(specification.unit);
  var helperText = errorText || [(0,pretty/* prettyMemberUnit */.Zn)(specification, showDataType), errorValue].filter(function (v) {
    return v !== undefined;
  }).join(", ");
  var inputId = (0,react_use_id_hook_esm/* useId */.Me)();
  var inputType = specification.type === "string" || specification.type === "string0" ? "string" : specification.isSimpleType || (0,spec/* isIntegerType */.YF)(specification.type) ? "number" : ""; // update coming from device

  (0,react.useEffect)(function () {
    setTextValue(valueString);
  }, [valueString]);

  var handleChecked = function handleChecked(ev, checked) {
    setValue(checked);
  };

  var handleChange = function handleChange(ev) {
    var newValue = ev.target.value;
    setTextValue(newValue);
    var r = (0,spec/* tryParseMemberValue */.Xg)(newValue, specification);
    if (r.value !== undefined) setValue(r.value);
    setErrorText(r.error);
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var handleEnumChange = function handleEnumChange(event) {
    var v = enumInfo.isFlags ? (0,pretty/* flagsToValue */.zi)(event.target.value) : event.target.value;
    setValue(v);
  };

  var handleSliderChange = function handleSliderChange(event, newValue) {
    var v = newValue;
    setValue(v);
  };

  var percentValueFormat = function percentValueFormat(value) {
    // avoid super long floats
    return (value * 100 >> 0) + "%";
  };

  var valueLabelFormat = function valueLabelFormat(value) {
    // avoid super long floats
    return (0,utils/* roundWithPrecision */.JI)(value, 1) + (unit || "");
  };

  var percentValueLabelFormat = function percentValueLabelFormat(v) {
    return Math.round(v * 100) + "%";
  };

  var offFormat = function offFormat() {
    return "off";
  }; // value hasn't been loaded yet


  if (serviceMemberSpecification.kind !== "command" && value === undefined) {
    if (showLoading) return /*#__PURE__*/react.createElement(LoadingProgress/* default */.Z, null);else return null;
  } //


  if (specification.type === "pipe") {
    return /*#__PURE__*/react.createElement(react.Fragment, null, "pipe ", /*#__PURE__*/react.createElement("code", null, specification.name));
  } else if (specification.type === "bool") {
    if (isWidget && !(0,spec/* isValueOrIntensity */.sX)(serviceMemberSpecification)) {
      return /*#__PURE__*/react.createElement(ButtonWidget/* default */.Z, {
        label: !isWidget && label,
        checked: !!value,
        color: color,
        size: widgetSize
      });
    }

    return /*#__PURE__*/react.createElement(FormControlLabel_FormControlLabel, {
      control: /*#__PURE__*/react.createElement(Switch/* default */.Z, {
        checked: !!value,
        onChange: disabled ? undefined : handleChecked,
        color: color
      }),
      label: label
    });
  } else if (enumInfo !== undefined) {
    return /*#__PURE__*/react.createElement(Select/* default */.Z, {
      "aria-label": label,
      disabled: disabled,
      multiple: enumInfo.isFlags,
      value: enumInfo.isFlags ? (0,pretty/* valueToFlags */.Cg)(enumInfo, value) : value,
      onChange: handleEnumChange
    }, Object.keys(enumInfo.members).map(function (n) {
      return /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
        key: n,
        value: enumInfo.members[n]
      }, n);
    }));
  } else if (specification.unit === "/") {
    var signed = specification.storage < 0;

    var _min = signed ? -1 : 0;

    var _max = 1;
    var step = resolution !== undefined ? resolution : 0.01;
    if (isWidget) return /*#__PURE__*/react.createElement(GaugeWidget, {
      tabIndex: 0,
      label: label,
      value: value,
      color: color,
      variant: signed ? "fountain" : undefined,
      min: _min,
      max: _max,
      step: step,
      valueLabel: percentValueLabelFormat,
      onChange: disabled ? undefined : handleSliderChange,
      off: off,
      toggleOff: toggleOff
    });
    return /*#__PURE__*/react.createElement(Slider/* default */.Z, {
      "aria-label": label,
      color: color,
      value: value,
      valueLabelFormat: percentValueFormat,
      onChange: disabled ? undefined : handleSliderChange,
      min: _min,
      max: _max,
      step: step,
      valueLabelDisplay: "auto"
    });
  } else if ((0,utils/* isSet */.DM)(minValue) && (0,utils/* isSet */.DM)(maxValue)) {
    var hasTypicalRange = (0,utils/* isSet */.DM)(typicalMin) && (0,utils/* isSet */.DM)(typicalMax);

    var _step = resolution !== undefined ? resolution : hasTypicalRange ? (specification.typicalMax - specification.typicalMin) / 100 : (maxValue - minValue) / 100;

    if (_step === 0 || isNaN(_step)) // edge case
      _step = undefined;
    var marks = hasTypicalRange && (typicalMin !== minValue || typicalMax !== maxValue) ? [{
      value: typicalMin
    }, {
      value: typicalMax
    }] : undefined;
    if (isWidget) return /*#__PURE__*/react.createElement(ValueWithUnitWidget, {
      tabIndex: 0,
      label: specification.unit,
      value: value,
      min: minValue,
      max: maxValue,
      icon: unitIcon,
      step: _step,
      secondaryLabel: errorValue,
      color: color,
      onChange: disabled ? undefined : handleSliderChange
    });
    return /*#__PURE__*/react.createElement(Slider/* default */.Z, {
      value: value,
      color: color,
      valueLabelFormat: off ? offFormat : valueLabelFormat,
      onChange: disabled ? undefined : handleSliderChange,
      min: minValue,
      max: maxValue,
      step: _step,
      marks: marks,
      valueLabelDisplay: "auto"
    });
  } else if (specification.type === "bytes") {
    var _ref;

    return /*#__PURE__*/react.createElement(TextField/* default */.Z, {
      id: inputId,
      spellCheck: false,
      value: textValue,
      label: label,
      inputProps: (_ref = {}, _ref["aria-label"] = label, _ref["aria-readonly"] = disabled, _ref.readOnly = disabled, _ref),
      helperText: helperText,
      onChange: disabled ? undefined : handleChange,
      required: value === undefined,
      error: !!errorText,
      type: "text"
    });
  } else {
    // numbers or string or uintarrays
    if (isWidget) // we need min/max to support a slider
      return /*#__PURE__*/react.createElement(ValueWithUnitWidget, {
        tabIndex: 0,
        value: (0,utils/* roundWithPrecision */.JI)(value, 1),
        label: specification.unit,
        color: color,
        size: widgetSize
      });
    return /*#__PURE__*/react.createElement(TextField/* default */.Z, {
      id: inputId,
      spellCheck: false,
      value: textValue,
      label: label,
      inputProps: {
        "aria-label": label,
        "aria-readonly": disabled,
        readOnly: disabled
      },
      helperText: helperText,
      onChange: disabled ? undefined : handleChange,
      required: value === undefined,
      error: !!errorText,
      type: inputType
    });
  }
}
;// CONCATENATED MODULE: ./src/components/fields/MembersInput.tsx



function MembersInput(props) {
  var serviceSpecification = props.serviceSpecification,
      serviceMemberSpecification = props.serviceMemberSpecification,
      specifications = props.specifications,
      values = props.values,
      setValues = props.setValues,
      showDataType = props.showDataType,
      color = props.color,
      variant = props.variant,
      min = props.min,
      max = props.max,
      resolution = props.resolution,
      error = props.error,
      off = props.off,
      toggleOff = props.toggleOff;

  var setValue = function setValue(index) {
    return function (value) {
      var c = values.slice(0);
      c[index] = value;
      setValues(c);
    };
  };

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, specifications.map(function (field, fieldi) {
    var value = values === null || values === void 0 ? void 0 : values[fieldi];
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
      item: true,
      key: fieldi,
      xs: 12
    }, /*#__PURE__*/react.createElement(MemberInput, {
      serviceSpecification: serviceSpecification,
      serviceMemberSpecification: serviceMemberSpecification,
      specification: field,
      showDataType: showDataType,
      value: value,
      color: color,
      setValue: values && setValues && setValue(fieldi),
      variant: variant,
      min: min === null || min === void 0 ? void 0 : min[fieldi],
      max: max === null || max === void 0 ? void 0 : max[fieldi],
      resolution: resolution === null || resolution === void 0 ? void 0 : resolution[fieldi],
      error: error === null || error === void 0 ? void 0 : error[fieldi],
      off: off,
      toggleOff: toggleOff
    }));
  }));
}

/***/ }),

/***/ 17368:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useAnimationFrame; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

function useAnimationFrame(callback, deps) {
  var requestRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var previousTimeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var animate = function animate(time) {
    var active = true;

    if (previousTimeRef.current != undefined) {
      var deltaTime = time - previousTimeRef.current;
      active = callback(deltaTime);
    }

    previousTimeRef.current = time;
    if (active) requestRef.current = requestAnimationFrame(animate);else // we're done
      requestRef.current = undefined;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    previousTimeRef.current = undefined;
    requestRef.current = requestAnimationFrame(animate);
    return function () {
      return requestRef.current !== undefined && cancelAnimationFrame(requestRef.current);
    };
  }, deps || []);
}

/***/ }),

/***/ 8966:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ keyCodeFromEvent; },
/* harmony export */   "Z": function() { return /* binding */ useFireKey; }
/* harmony export */ });
var ENTER_KEY = 13;
var SPACE_KEY = 32;
function keyCodeFromEvent(e) {
  return typeof e.which == "number" ? e.which : e.keyCode;
}
function useFireKey(handler) {
  if (!handler) return undefined;
  return function (e) {
    var charCode = keyCodeFromEvent(e);

    if (charCode === ENTER_KEY || charCode === SPACE_KEY) {
      e.preventDefault();
      handler();
    }
  };
}

/***/ }),

/***/ 49013:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServiceServer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _useServiceProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63793);


function useServiceServer(service, createTwin) {
  var provider = (0,_useServiceProvider__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(service.device);
  var twin = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (provider) return undefined;
    var twin = service.twin;

    if (!twin && createTwin) {
      twin = createTwin();
      console.debug("create twin", {
        twin: twin
      });
      if (twin) service.twin = twin;
    }

    return twin;
  }, [service, provider, service === null || service === void 0 ? void 0 : service.changeId]);
  return (provider === null || provider === void 0 ? void 0 : provider.service(service === null || service === void 0 ? void 0 : service.serviceIndex)) || twin;
}

/***/ }),

/***/ 30833:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useSvgButtonProps; }
/* harmony export */ });
/* harmony import */ var _useFireKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8966);

function useSvgButtonProps(label, onDown, onUp) {
  var _ref;

  var disabled = !onDown && !onUp;
  var fireDownOnEnter = (0,_useFireKey__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(onDown);
  var fireUpOnEnter = (0,_useFireKey__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(onUp);

  var preventify = function preventify(handler) {
    if (handler) return function (event) {
      event.preventDefault();
      handler(event);
    };else return undefined;
  };

  return _ref = {
    className: disabled ? undefined : "clickeable",
    role: disabled ? undefined : "button",
    tabIndex: disabled ? undefined : 0
  }, _ref["aria-label"] = label, _ref.onPointerDown = preventify(onDown), _ref.onPointerUp = preventify(onUp), _ref.onPointerLeave = preventify(onUp), _ref.onKeyDown = fireDownOnEnter, _ref.onKeyUp = fireUpOnEnter, _ref;
}

/***/ }),

/***/ 72901:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useThrottledValue; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _useAnimationFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17368);


function useThrottledValue(value, maxRate) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value),
      actual = _useState[0],
      setActual = _useState[1];

  var animated = actual;
  (0,_useAnimationFrame__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(function (time) {
    // no valid rate
    if (isNaN(maxRate) || isNaN(animated)) {
      setActual(value);
      return false;
    } // increment towards value


    var dt = time / 1000; // s

    var error = value - animated;
    var maxError = maxRate * dt; // deg

    var active = true;
    animated += Math.sign(error) * Math.min(Math.abs(error), maxError);

    if (Math.abs(value - animated) / maxRate < 0.01) {
      animated = value;
      active = false;
    }

    setActual(animated);
    return active;
  }, [value, maxRate]);
  return actual;
}

/***/ }),

/***/ 37557:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46982);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


/* harmony default export */ __webpack_exports__["Z"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8.8-.03A49.327 49.327 0 00.956 11.112a8.824 8.824 0 1015.693 0A49.327 49.327 0 008.801-.029zm0 3.132a47.244 47.244 0 015.995 8.962 6.74 6.74 0 11-11.986 0A47.243 47.243 0 018.8 3.102z"
  }));
});

/***/ }),

/***/ 74741:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46982);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


/* harmony default export */ __webpack_exports__["Z"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11.365 14.761a.635.635 0 000-1.27h-1.35a.635.635 0 000 1.27zM11.365 12.062a.635.635 0 000-1.27h-1.35a.635.635 0 000 1.27zM11.365 9.363a.635.635 0 000-1.27h-1.35a.635.635 0 000 1.27zM11.365 6.663a.635.635 0 000-1.27h-1.35a.635.635 0 000 1.27zM11.365 3.964a.635.635 0 000-1.27h-1.35a.635.635 0 000 1.27zM4.04 3.26v14.207a1.979 1.978 0 101.284-.004V3.26a.642.642 0 00-1.285 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4.699 0a3.302 3.301 0 00-3.323 3.3v12.726a4.668 4.666 0 106.605.022V3.3A3.302 3.301 0 004.7 0zm-.047 1.303a2.01 2.008 0 012.041 2.009v13.37a3.354 3.352 0 11-4.017-.027V3.312a2.01 2.008 0 011.976-2.01z"
  }));
});

/***/ }),

/***/ 2285:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ LoadingProgress; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27136);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function LoadingProgress(props) {
  var size = props.size;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    disableShrink: true,
    variant: "indeterminate",
    size: size || "1em"
  });
}

/***/ }),

/***/ 43746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ButtonWidget; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _SvgWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48059);
/* harmony import */ var _useWidgetTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60650);
/* harmony import */ var _hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30833);




function ButtonWidget(props) {
  var checked = props.checked,
      label = props.label,
      color = props.color,
      size = props.size,
      onDown = props.onDown,
      onUp = props.onUp;

  var _useWidgetTheme = (0,_useWidgetTheme__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active;

  var buttonProps = (0,_hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(label, onDown, onUp);
  var w = 64;
  var mo = checked ? 3 : 5;
  var r = w / 2;
  var cx = r;
  var cy = r;
  var ri = r - mo;
  var rn = 8;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SvgWidget__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    width: w,
    size: size
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: 0,
    y: 0,
    rx: 2,
    ry: 2,
    width: w,
    height: w,
    fill: background
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: rn,
    cy: rn,
    r: rn >> 1,
    fill: controlBackground
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: w - rn,
    cy: rn,
    r: rn >> 1,
    fill: controlBackground
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: w - rn,
    cy: w - rn,
    r: rn >> 1,
    fill: controlBackground
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: rn,
    cy: w - rn,
    r: rn >> 1,
    fill: controlBackground
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", Object.assign({
    cx: cx,
    cy: cy,
    r: ri,
    "aria-live": "polite",
    fill: checked ? active : controlBackground
  }, buttonProps)));
}

/***/ }),

/***/ 2250:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ PowerButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30833);
/* harmony import */ var _svgutils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92526);
/* harmony import */ var _useWidgetTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60650);




function PowerButton(props) {
  var cx = props.cx,
      cy = props.cy,
      r = props.r,
      ri = props.ri,
      onClick = props.onClick,
      off = props.off,
      color = props.color,
      label = props.label,
      strokeWidth = props.strokeWidth,
      borderStroke = props.borderStroke;

  var _useWidgetTheme = (0,_useWidgetTheme__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(color),
      background = _useWidgetTheme.background,
      active = _useWidgetTheme.active,
      controlBackground = _useWidgetTheme.controlBackground,
      textProps = _useWidgetTheme.textProps;

  var a = 135;
  var d = (0,_svgutils__WEBPACK_IMPORTED_MODULE_2__/* .describeArc */ .x8)(cx, cy, ri, -a, a, true);
  var btnlabel = off ? "turn on" : "turn off";
  var buttonProps = (0,_hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(btnlabel, onClick);
  var sw = strokeWidth || 3;
  var disabled = !onClick;
  var iconStroke = disabled || !off ? background : active;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, btnlabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", Object.assign({
    cx: cx,
    cy: cy,
    r: r,
    fill: controlBackground,
    strokeWidth: sw,
    stroke: borderStroke || background
  }, buttonProps)), (off || !label) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    transform: "rotate(180, " + cx + ", " + cy + ")"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: d,
    strokeLinecap: "round",
    fill: "none",
    strokeWidth: sw,
    stroke: iconStroke,
    style: {
      userSelect: "none",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {
    strokeLinecap: "round",
    x1: cx,
    y1: cy + ri / 4,
    x2: cx,
    y2: cy + ri,
    stroke: iconStroke,
    strokeWidth: sw,
    style: {
      userSelect: "none",
      pointerEvents: "none"
    }
  })), !off && label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", Object.assign({
    "aria-label": label,
    x: cx,
    y: cy
  }, textProps), label));
}

/***/ }),

/***/ 48059:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SvgWidget; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

function SvgWidget(props) {
  var width = props.width,
      height = props.height,
      _props$size = props.size,
      size = _props$size === void 0 ? "100%" : _props$size,
      background = props.background,
      children = props.children,
      role = props.role,
      title = props.title,
      viewBox = props.viewBox,
      tabIndex = props.tabIndex;
  var h = height || width;
  var aspectRatio = width / height;
  var vertical = aspectRatio < 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      position: "relative",
      height: vertical ? size : undefined,
      width: vertical ? undefined : size
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    tabIndex: tabIndex,
    viewBox: viewBox || "0 0 " + width + " " + h,
    "aria-label": title,
    style: {
      height: vertical ? "100%" : undefined,
      width: vertical ? undefined : "100%"
    },
    role: role || "group"
  }, background && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: 0,
    y: 0,
    width: width,
    height: height,
    fill: background,
    rx: 1,
    ry: 1
  }), children));
}

/***/ }),

/***/ 92526:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PW": function() { return /* binding */ svgPointerPoint; },
/* harmony export */   "JI": function() { return /* binding */ closestPoint; },
/* harmony export */   "x8": function() { return /* binding */ describeArc; }
/* harmony export */ });
/* unused harmony export polarToCartesian */
function svgPointerPoint(svg, event) {
  var point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  var res = point.matrixTransform(svg.getScreenCTM().inverse());
  return res;
}
function closestPoint(pathNode, step, point) {
  var pathLength = pathNode.getTotalLength();

  var distance2 = function distance2(p) {
    var dx = p.x - point.x;
    var dy = p.y - point.y;
    return dx * dx + dy * dy;
  };

  var bestLength = 0;
  var bestDistance = Infinity;

  for (var scanLength = 0; scanLength <= pathLength; scanLength += step) {
    var scan = pathNode.getPointAtLength(scanLength);
    var scanDistance = distance2(scan);

    if (scanDistance < bestDistance) {
      bestLength = scanLength;
      bestDistance = scanDistance;
    }
  }

  return bestLength / pathLength;
}
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}
function describeArc(x, y, radius, startAngle, endAngle, large) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);
  var largeArcFlag = large !== true && endAngle - startAngle <= 180 ? "0" : "1";
  var d = ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(" ");
  return d;
}

/***/ }),

/***/ 8584:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useWidgetSize; }
/* harmony export */ });
function useWidgetSize(variant, widgetCount) {
  var icon = variant === "icon";
  var mini = icon;
  var widgetSize;

  switch (widgetCount || 1) {
    case 1:
    case 2:
      widgetSize = mini ? "12em" : "16em";
      break;

    case 3:
    case 4:
    case 5:
    case 6:
      widgetSize = mini ? "10em" : "14em";
      break;

    default:
      widgetSize = mini ? "4em" : "5em";
      break;
  }

  return widgetSize;
}

/***/ }),

/***/ 60650:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useWidgetTheme; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59355);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _ui_DarkModeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91350);



function useWidgetTheme(color) {
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
  var palette = theme.palette;
  var background = palette.background;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ui_DarkModeContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z),
      darkMode = _useContext.darkMode;

  var active = color === "primary" ? palette.primary.main : color === "secondary" ? palette.secondary.main : palette.info.main;
  var backgroundColor = darkMode === "dark" ? background.default : palette.grey[800];
  var controlBackground = darkMode === "dark" ? palette.grey[800] : palette.grey[400];
  var textPrimary = palette.text.primary;
  var textProps = {
    fill: textPrimary,
    alignmentBaseline: "central",
    dominantBaseline: "middle",
    textAnchor: "middle",
    pointerEvents: "none",
    letterSpacing: 0,
    style: {
      userSelect: "none",
      pointerEvents: "none"
    }
  };
  return {
    background: backgroundColor,
    controlBackground: controlBackground,
    active: active,
    textPrimary: textPrimary,
    textProps: textProps
  };
}

/***/ })

}]);
//# sourceMappingURL=150ada739521e5c11dec5c68ed0d383bc7ffd57e-1f18585331cd3c9d9334.js.map