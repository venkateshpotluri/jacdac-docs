(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "271P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ RegisterInput; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__("hlFM");

// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__("SCH5");

// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__("FQT7");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__("2K/c");

// EXTERNAL MODULE: ./src/components/fields/MembersInput.tsx + 7 modules
var MembersInput = __webpack_require__("HbaY");

// EXTERNAL MODULE: ./src/components/RegisterTrend.tsx
var RegisterTrend = __webpack_require__("x3jS");

// EXTERNAL MODULE: ./src/components/ui/IconButtonWithProgress.tsx + 1 modules
var IconButtonWithProgress = __webpack_require__("gfZp");

// EXTERNAL MODULE: ./src/components/hooks/useServiceHost.ts
var useServiceHost = __webpack_require__("asyI");

// CONCATENATED MODULE: ./src/components/hooks/useRegisterHost.ts

function useRegisterHost(register) {
  var host = Object(useServiceHost["a" /* default */])(register === null || register === void 0 ? void 0 : register.service);
  return host === null || host === void 0 ? void 0 : host.register(register === null || register === void 0 ? void 0 : register.code);
}
// CONCATENATED MODULE: ./src/components/hooks/useReadingAuxilliaryValue.ts


function useReadingAuxilliaryValue(register, identifier, options) {
  if (identifier === void 0) {
    identifier = constants["cf" /* SystemReg */].ReadingError | constants["cf" /* SystemReg */].ReadingResolution | constants["cf" /* SystemReg */].MaxReading | constants["cf" /* SystemReg */].MinReading | constants["cf" /* SystemReg */].StreamingInterval | constants["cf" /* SystemReg */].StreamingPreferredInterval;
  }

  var service = register.service,
      code = register.code;

  var _ref = options || {},
      visible = _ref.visible;

  var reading = code === constants["cf" /* SystemReg */].Reading || code === constants["cf" /* SystemReg */].Value;
  var auxilliaryRegister = reading ? service.register(identifier) : undefined;

  var _useState = Object(react["useState"])(auxilliaryRegister === null || auxilliaryRegister === void 0 ? void 0 : auxilliaryRegister.unpackedValue),
      value = _useState[0],
      setValue = _useState[1];

  Object(react["useEffect"])(function () {
    return visible && (auxilliaryRegister === null || auxilliaryRegister === void 0 ? void 0 : auxilliaryRegister.subscribe(constants["Zc" /* REPORT_UPDATE */], function () {
      setValue(auxilliaryRegister === null || auxilliaryRegister === void 0 ? void 0 : auxilliaryRegister.unpackedValue);
    }));
  }, [register, auxilliaryRegister, visible]);
  return value;
}
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// CONCATENATED MODULE: ./src/components/RegisterInput.tsx





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
  var fields = register.fields;

  var _useContext = Object(react["useContext"])(AppContext["c" /* default */]),
      setAppError = _useContext.setError;

  var _useState = Object(react["useState"])(false),
      working = _useState[0],
      setWorking = _useState[1]; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var _useState2 = Object(react["useState"])(register.unpackedValue || []),
      args = _useState2[0],
      setArgs = _useState2[1];

  var host = useRegisterHost(register);
  var hasSet = specification.kind === "rw" || host && specification.kind !== "const";
  var hasData = Object(useChange["a" /* default */])(register, function (_) {
    return !!_.data;
  });
  var color = hasSet ? "secondary" : "primary";
  var minReading = useReadingAuxilliaryValue(register, constants["cf" /* SystemReg */].MinReading, {
    visible: visible
  });
  var maxReading = useReadingAuxilliaryValue(register, constants["cf" /* SystemReg */].MaxReading, {
    visible: visible
  });
  var readingError = useReadingAuxilliaryValue(register, constants["cf" /* SystemReg */].ReadingError, {
    visible: visible
  });
  var resolution = useReadingAuxilliaryValue(register, constants["cf" /* SystemReg */].ReadingResolution, {
    visible: visible
  });
  Object(react["useEffect"])(function () {
    return visible && register.subscribe(constants["Zc" /* REPORT_UPDATE */], function () {
      var vs = register.unpackedValue;
      if (vs !== undefined) setArgs(vs);
    });
  }, [register, visible]);

  var handleRefresh = function handleRefresh() {
    register.refresh(true);
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var sendArgs = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(values) {
      return regenerator_default.a.wrap(function _callee$(_context) {
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

              if (!host) {
                _context.next = 10;
                break;
              }

              host.setValues(values);
              _context.next = 8;
              return register.refresh();

            case 8:
              _context.next = 12;
              break;

            case 10:
              _context.next = 12;
              return register.sendSetPackedAsync(specification.packFormat, values, true);

            case 12:
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](2);
              setAppError(_context.t0);

            case 17:
              _context.prev = 17;
              setWorking(false);
              return _context.finish(17);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 14, 17, 20]]);
    }));

    return function sendArgs(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  if (!specification) return /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "error"
  }, "Unknown member " + register.service + ":" + register.code);
  if (!fields.length) return null; // nothing to see here

  if (hideMissingValues && !hasData) return null;
  var serviceName = register.service.name.toLocaleLowerCase().replace(/_/g, " ");
  var registerName = specification.name.replace(/_/g, " ");
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, showDeviceName && /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    component: "span",
    key: "devicenamename"
  }, /*#__PURE__*/react_default.a.createElement(DeviceName["a" /* default */], {
    device: device
  }), "/"), showServiceName && specification && /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "caption",
    key: "servicename",
    "aria-label": serviceName
  }, serviceName), showRegisterName && specification && serviceName !== registerName && /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "caption",
    key: "registername",
    "aria-label": registerName
  }, " " + registerName), !hasData && /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(IconButtonWithProgress["a" /* default */], {
    title: "refresh",
    indeterminate: true,
    onClick: handleRefresh
  })), showTrend && hasData && /*#__PURE__*/react_default.a.createElement(RegisterTrend["a" /* default */], {
    register: register,
    mini: false,
    horizon: 24
  }), hasData && /*#__PURE__*/react_default.a.createElement(MembersInput["a" /* default */], {
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
    min: minReading,
    max: maxReading,
    resolution: resolution,
    error: readingError,
    off: off,
    toggleOff: toggleOff
  }));
}

/***/ }),

/***/ "7/Hy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "relative",
      height: vertical ? size : undefined,
      width: vertical ? undefined : size
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    tabIndex: tabIndex,
    viewBox: viewBox || "0 0 " + width + " " + h,
    "aria-label": title,
    style: {
      height: vertical ? "100%" : undefined,
      width: vertical ? undefined : "100%"
    },
    role: role || "group"
  }, background && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
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

/***/ "APA9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return keyCodeFromEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useFireKey; });
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

/***/ "HbaY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ MembersInput; });

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("iuhU");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/useFormControl.js
var useFormControl = __webpack_require__("EHdT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__("NqtD");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js









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

var FormControlLabel_FormControlLabel = /*#__PURE__*/react["forwardRef"](function FormControlLabel(props, ref) {
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
      other = Object(objectWithoutProperties["a" /* default */])(props, ["checked", "classes", "className", "control", "disabled", "inputRef", "label", "labelPlacement", "name", "onChange", "value"]);

  var muiFormControl = Object(useFormControl["a" /* default */])();
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
  return /*#__PURE__*/react["createElement"]("label", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, labelPlacement !== 'end' && classes["labelPlacement".concat(Object(capitalize["a" /* default */])(labelPlacement))], disabled && classes.disabled),
    ref: ref
  }, other), /*#__PURE__*/react["cloneElement"](control, controlProps), /*#__PURE__*/react["createElement"](Typography["a" /* default */], {
    component: "span",
    className: Object(clsx_m["a" /* default */])(classes.label, disabled && classes.disabled)
  }, label));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_FormControlLabel_FormControlLabel = (Object(withStyles["a" /* default */])(styles, {
  name: 'MuiFormControlLabel'
})(FormControlLabel_FormControlLabel));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slider/Slider.js + 1 modules
var Slider = __webpack_require__("6Obz");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js + 1 modules
var Switch = __webpack_require__("UhlP");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 4 modules
var Select = __webpack_require__("cVXz");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__("jjAL");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__("r9w1");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__("DMAQ");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// EXTERNAL MODULE: ./src/components/widgets/ButtonWidget.tsx
var ButtonWidget = __webpack_require__("R8ow");

// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__("Lml+");

// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__("7/Hy");

// EXTERNAL MODULE: ./src/components/hooks/useThrottledValue.ts
var useThrottledValue = __webpack_require__("cJz4");

// EXTERNAL MODULE: ./src/components/widgets/svgutils.ts
var svgutils = __webpack_require__("bf+Y");

// EXTERNAL MODULE: ./src/components/widgets/PowerButton.tsx
var PowerButton = __webpack_require__("TaZW");

// CONCATENATED MODULE: ./src/components/widgets/GaugeWidget.tsx







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

  var _useWidgetTheme = Object(useWidgetTheme["a" /* default */])(color),
      background = _useWidgetTheme.background,
      active = _useWidgetTheme.active,
      textProps = _useWidgetTheme.textProps;

  var sliderPathRef = Object(react["useRef"])();
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

  var displayValue = Object(useThrottledValue["a" /* default */])(value, (max - min) * 2);

  var computeArc = function computeArc(v) {
    if (variant === "fountain") {
      var mid = (ea + sa) / 2;
      var fraction = v / (max - min) * (ea - sa);
      if (fraction < 0) return Object(svgutils["b" /* describeArc */])(cx, cy, r, mid + fraction, mid);else return Object(svgutils["b" /* describeArc */])(cx, cy, r, mid, mid + fraction);
    } else {
      var _fraction = (v - min) / (max - min);

      var va = sa + _fraction * (ea - sa);
      return Object(svgutils["b" /* describeArc */])(cx, cy, r, sa, va);
    }
  };

  var db = Object(svgutils["b" /* describeArc */])(cx, cy, r, sa, ea);
  var dvalue = computeArc(value);
  var dactual = computeArc(displayValue);
  var lineCap = "round";
  var tvalue = valueLabel(value);
  var clickeable = !!onChange;

  var handlePointerDown = function handlePointerDown(ev) {
    ev.preventDefault();
    if (!ev.buttons) return;
    var svg = sliderPathRef.current.ownerSVGElement;
    var pos = Object(svgutils["c" /* svgPointerPoint */])(svg, ev);
    var closest = Object(svgutils["a" /* closestPoint */])(sliderPathRef.current, _step, pos);
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

  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(SvgWidget["a" /* default */], {
    tabIndex: tabIndex,
    width: w,
    height: h,
    size: size
  }, /*#__PURE__*/react_default.a.createElement("path", Object.assign({
    ref: sliderPathRef,
    strokeWidth: sw,
    stroke: background,
    d: db,
    strokeLinecap: lineCap,
    fill: "transparent"
  }, pathProps)), !off && /*#__PURE__*/react_default.a.createElement("path", Object.assign({
    strokeWidth: sw,
    stroke: active,
    strokeLinecap: lineCap,
    d: dvalue,
    opacity: 0.2,
    fill: "transparent"
  }, pathProps)), !off && /*#__PURE__*/react_default.a.createElement("path", Object.assign({
    strokeWidth: sw,
    stroke: active,
    strokeLinecap: lineCap,
    d: dactual,
    fill: "transparent"
  }, pathProps)), off !== undefined ? /*#__PURE__*/react_default.a.createElement(PowerButton["a" /* default */], {
    off: off,
    label: tvalue,
    cx: cx,
    cy: cy,
    r: roff,
    ri: riff,
    color: color,
    onClick: toggleOff
  }) : /*#__PURE__*/react_default.a.createElement("text", Object.assign({}, textProps, {
    x: cx,
    y: cy,
    "aria-label": tvalue
  }), tvalue))), clickeable && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Slider["a" /* default */], {
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
var useWidgetSize = __webpack_require__("soIx");

// CONCATENATED MODULE: ./src/components/widgets/ValueWithUnitWidget.tsx



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
  var valueText = hasValue ? Object(utils["L" /* roundWithPrecision */])(value, precision).toLocaleString() : "--";
  var valueTextLength = Object(utils["C" /* isSet */])(min) && Object(utils["C" /* isSet */])(max) ? [min, max, min + (min + max) / 3].map(function (v) {
    return Object(utils["L" /* roundWithPrecision */])(v, precision).toLocaleString().replace(/[,.]/, '').length;
  }).reduce(function (l, r) {
    return Math.max(l, r);
  }, 0) + precision : valueText.length; //console.log({ min, max, step, precision })

  var valueVariant = valueTextLength < 4 ? "h1" : valueTextLength < 7 ? "h2" : valueTextLength < 9 ? "h3" : valueTextLength < 12 ? "h4" : "h6";
  var valueStyle = {
    minWidth: Math.max(2, valueTextLength - 1) + "em"
  };
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    direction: "column",
    tabIndex: tabIndex,
    "aria-label": valueText + " " + label
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    direction: "row",
    alignContent: "flex-end"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    role: "timer",
    align: "right",
    variant: valueVariant,
    style: valueStyle
  }, icon, valueText)), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    direction: "column",
    alignContent: "space-between"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: labelVariant
  }, label)), secondaryLabel && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "caption"
  }, secondaryLabel)))))), onChange && value !== undefined && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(Slider["a" /* default */], {
    valueLabelDisplay: "off",
    color: "secondary",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: onChange
  })));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js
var SvgIcon = __webpack_require__("HR5l");

// CONCATENATED MODULE: ./src/components/icons/HumidityIcon.tsx


/* harmony default export */ var HumidityIcon = (function (props) {
  return /*#__PURE__*/react_default.a.createElement(SvgIcon["a" /* default */], props, /*#__PURE__*/react_default.a.createElement("path", {
    d: "M8.8-.03A49.327 49.327 0 00.956 11.112a8.824 8.824 0 1015.693 0A49.327 49.327 0 008.801-.029zm0 3.132a47.244 47.244 0 015.995 8.962 6.74 6.74 0 11-11.986 0A47.243 47.243 0 018.8 3.102z"
  }));
});
// CONCATENATED MODULE: ./src/components/icons/TemperatureIcon.tsx


/* harmony default export */ var TemperatureIcon = (function (props) {
  return /*#__PURE__*/react_default.a.createElement(SvgIcon["a" /* default */], props, /*#__PURE__*/react_default.a.createElement("path", {
    d: "M11.365 14.761a.635.635 0 000-1.27h-1.35a.635.635 0 000 1.27zM11.365 12.062a.635.635 0 000-1.27h-1.35a.635.635 0 000 1.27zM11.365 9.363a.635.635 0 000-1.27h-1.35a.635.635 0 000 1.27zM11.365 6.663a.635.635 0 000-1.27h-1.35a.635.635 0 000 1.27zM11.365 3.964a.635.635 0 000-1.27h-1.35a.635.635 0 000 1.27zM4.04 3.26v14.207a1.979 1.978 0 101.284-.004V3.26a.642.642 0 00-1.285 0z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M4.699 0a3.302 3.301 0 00-3.323 3.3v12.726a4.668 4.666 0 106.605.022V3.3A3.302 3.301 0 004.7 0zm-.047 1.303a2.01 2.008 0 012.041 2.009v13.37a3.354 3.352 0 11-4.017-.027V3.312a2.01 2.008 0 011.976-2.01z"
  }));
});
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__("A5xw");

// CONCATENATED MODULE: ./src/components/hooks/useUnitIcon.tsx




/* harmony default export */ var useUnitIcon = (function (unit, props) {
  var _ref = Object(jdspec["h" /* resolveUnit */])(unit) || {},
      runit = _ref.unit;

  switch (runit) {
    case "%RH":
      return /*#__PURE__*/react_default.a.createElement(HumidityIcon, props);

    case "°C":
    case "K":
      return /*#__PURE__*/react_default.a.createElement(TemperatureIcon, props);

    default:
      return null;
  }
});
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__("W1g9");

// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__("aVfY");

// CONCATENATED MODULE: ./src/components/fields/MemberInput.tsx
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

  var _useState = Object(react["useState"])(""),
      errorText = _useState[0],
      setErrorText = _useState[1];

  var _useState2 = Object(react["useState"])(""),
      textValue = _useState2[0],
      setTextValue = _useState2[1];

  var valueString = Object(spec["x" /* memberValueToString */])(value, specification);
  var name = specification.name === "_" ? serviceMemberSpecification.name : specification.name;
  var label = name;
  var isWidget = variant === "widget";
  var widgetSize = Object(useWidgetSize["a" /* default */])();
  var unitIcon = useUnitIcon(specification.unit, {
    "aria-label": label
  });
  var minValue = Object(utils["E" /* pick */])(min, typicalMin, absoluteMin, /^u/.test(type) ? 0 : undefined);
  var maxValue = Object(utils["E" /* pick */])(max, typicalMax, absoluteMax);
  var errorValue = error ? "±" + Object(utils["L" /* roundWithPrecision */])(error, 1 - Math.floor(Math.log10(error))).toLocaleString() : undefined;
  var unit = Object(pretty["g" /* prettyUnit */])(specification.unit);
  var helperText = errorText || [Object(pretty["e" /* prettyMemberUnit */])(specification, showDataType), errorValue].filter(function (v) {
    return v !== undefined;
  }).join(", ");
  var inputId = Object(react_use_id_hook_esm["b" /* useId */])();
  var inputType = specification.type === "string" || specification.type === "string0" ? "string" : specification.isSimpleType || Object(spec["m" /* isIntegerType */])(specification.type) ? "number" : ""; // update coming from device

  Object(react["useEffect"])(function () {
    setTextValue(valueString);
  }, [valueString]);

  var handleChecked = function handleChecked(ev, checked) {
    setValue(checked);
  };

  var handleChange = function handleChange(ev) {
    var newValue = ev.target.value;
    setTextValue(newValue);
    var r = Object(spec["G" /* tryParseMemberValue */])(newValue, specification);
    if (r.value !== undefined) setValue(r.value);
    setErrorText(r.error);
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var handleEnumChange = function handleEnumChange(event) {
    var v = enumInfo.isFlags ? Object(pretty["c" /* flagsToValue */])(event.target.value) : event.target.value;
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
    return Object(utils["L" /* roundWithPrecision */])(value, 1) + (unit || "");
  };

  var percentValueLabelFormat = function percentValueLabelFormat(v) {
    return Math.round(v * 100) + "%";
  };

  var offFormat = function offFormat() {
    return "off";
  }; // value hasn't been loaded yet


  if (serviceMemberSpecification.kind !== "command" && value === undefined) {
    if (showLoading) return /*#__PURE__*/react_default.a.createElement(LoadingProgress["a" /* default */], null);else return null;
  } //


  if (specification.type === "pipe") {
    return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, "pipe ", /*#__PURE__*/react_default.a.createElement("code", null, specification.name));
  } else if (specification.type === "bool") {
    if (isWidget && !Object(spec["w" /* isValueOrIntensity */])(serviceMemberSpecification)) {
      return /*#__PURE__*/react_default.a.createElement(ButtonWidget["a" /* default */], {
        label: !isWidget && label,
        checked: !!value,
        color: color,
        size: widgetSize
      });
    }

    return /*#__PURE__*/react_default.a.createElement(esm_FormControlLabel_FormControlLabel, {
      control: /*#__PURE__*/react_default.a.createElement(Switch["a" /* default */], {
        checked: !!value,
        onChange: disabled ? undefined : handleChecked,
        color: color
      }),
      label: label
    });
  } else if (enumInfo !== undefined) {
    return /*#__PURE__*/react_default.a.createElement(Select["a" /* default */], {
      "aria-label": label,
      disabled: disabled,
      multiple: enumInfo.isFlags,
      value: enumInfo.isFlags ? Object(pretty["l" /* valueToFlags */])(enumInfo, value) : value,
      onChange: handleEnumChange
    }, Object.keys(enumInfo.members).map(function (n) {
      return /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
        key: n,
        value: enumInfo.members[n]
      }, n);
    }));
  } else if (specification.unit === "/") {
    var signed = specification.storage < 0;

    var _min = signed ? -1 : 0;

    var _max = 1;
    var step = resolution !== undefined ? resolution : 0.01;
    if (isWidget) return /*#__PURE__*/react_default.a.createElement(GaugeWidget, {
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
    return /*#__PURE__*/react_default.a.createElement(Slider["a" /* default */], {
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
  } else if (Object(utils["C" /* isSet */])(minValue) && Object(utils["C" /* isSet */])(maxValue)) {
    var hasTypicalRange = Object(utils["C" /* isSet */])(typicalMin) && Object(utils["C" /* isSet */])(typicalMax);

    var _step = resolution !== undefined ? resolution : hasTypicalRange ? (specification.typicalMax - specification.typicalMin) / 100 : (maxValue - minValue) / 100;

    if (_step === 0 || isNaN(_step)) // edge case
      _step = undefined;
    var marks = hasTypicalRange && (typicalMin !== minValue || typicalMax !== maxValue) ? [{
      value: typicalMin
    }, {
      value: typicalMax
    }] : undefined;
    if (isWidget) return /*#__PURE__*/react_default.a.createElement(ValueWithUnitWidget, {
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
    return /*#__PURE__*/react_default.a.createElement(Slider["a" /* default */], {
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

    return /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
      id: inputId,
      spellCheck: false,
      value: textValue,
      label: label,
      inputProps: (_ref = {}, _ref["aria-label"] = label, _ref),
      helperText: helperText,
      onChange: disabled ? undefined : handleChange,
      required: value === undefined,
      error: !!errorText,
      type: "text"
    });
  } else {
    var _ref2;

    // numbers or string or uintarrays
    if (isWidget) // we need min/max to support a slider
      return /*#__PURE__*/react_default.a.createElement(ValueWithUnitWidget, {
        tabIndex: 0,
        value: Object(utils["L" /* roundWithPrecision */])(value, 1),
        label: specification.unit,
        color: color,
        size: widgetSize
      });
    return /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], {
      id: inputId,
      spellCheck: false,
      value: textValue,
      label: label,
      inputProps: (_ref2 = {}, _ref2["aria-label"] = label, _ref2),
      helperText: helperText,
      onChange: disabled ? undefined : handleChange,
      required: value === undefined,
      error: !!errorText,
      type: inputType
    });
  }
}
// CONCATENATED MODULE: ./src/components/fields/MembersInput.tsx



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

  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1
  }, specifications.map(function (field, fieldi) {
    var value = values === null || values === void 0 ? void 0 : values[fieldi];
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      key: fieldi,
      xs: 12
    }, /*#__PURE__*/react_default.a.createElement(MemberInput, {
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

/***/ "Lml+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useWidgetTheme; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tr08");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_DarkModeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("geQJ");



function useWidgetTheme(color) {
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();
  var palette = theme.palette;
  var background = palette.background;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ui_DarkModeContext__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]),
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

/***/ }),

/***/ "R8ow":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SvgWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7/Hy");
/* harmony import */ var _useWidgetTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Lml+");
/* harmony import */ var _hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("jwKE");




function ButtonWidget(props) {
  var checked = props.checked,
      label = props.label,
      color = props.color,
      size = props.size,
      onDown = props.onDown,
      onUp = props.onUp;

  var _useWidgetTheme = Object(_useWidgetTheme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active;

  var buttonProps = Object(_hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(label, onDown, onUp);
  var w = 64;
  var mo = checked ? 3 : 5;
  var r = w / 2;
  var cx = r;
  var cy = r;
  var ri = r - mo;
  var rn = 8;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgWidget__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    width: w,
    size: size
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: 0,
    y: 0,
    rx: 2,
    ry: 2,
    width: w,
    height: w,
    fill: background
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: rn,
    cy: rn,
    r: rn >> 1,
    fill: controlBackground
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: w - rn,
    cy: rn,
    r: rn >> 1,
    fill: controlBackground
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: w - rn,
    cy: w - rn,
    r: rn >> 1,
    fill: controlBackground
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: rn,
    cy: w - rn,
    r: rn >> 1,
    fill: controlBackground
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", Object.assign({
    cx: cx,
    cy: cy,
    r: ri,
    "aria-live": "polite",
    fill: checked ? active : controlBackground
  }, buttonProps)));
}

/***/ }),

/***/ "TaZW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PowerButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jwKE");
/* harmony import */ var _svgutils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bf+Y");
/* harmony import */ var _useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Lml+");




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

  var _useWidgetTheme = Object(_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(color),
      background = _useWidgetTheme.background,
      active = _useWidgetTheme.active,
      controlBackground = _useWidgetTheme.controlBackground,
      textProps = _useWidgetTheme.textProps;

  var a = 135;
  var d = Object(_svgutils__WEBPACK_IMPORTED_MODULE_2__[/* describeArc */ "b"])(cx, cy, ri, -a, a, true);
  var btnlabel = off ? "turn on" : "turn off";
  var buttonProps = Object(_hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(btnlabel, onClick);
  var sw = strokeWidth || 3;
  var disabled = !onClick;
  var iconStroke = disabled || !off ? background : active;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, btnlabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", Object.assign({
    cx: cx,
    cy: cy,
    r: r,
    fill: controlBackground,
    strokeWidth: sw,
    stroke: borderStroke || background
  }, buttonProps)), (off || !label) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "rotate(180, " + cx + ", " + cy + ")"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: d,
    strokeLinecap: "round",
    fill: "none",
    strokeWidth: sw,
    stroke: iconStroke,
    style: {
      userSelect: "none",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
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
  })), !off && label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", Object.assign({
    "aria-label": label,
    x: cx,
    y: cy
  }, textProps), label));
}

/***/ }),

/***/ "aVfY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProgress; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("iae6");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function LoadingProgress(props) {
  var size = props.size;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    disableShrink: true,
    variant: "indeterminate",
    size: size || "1em"
  });
}

/***/ }),

/***/ "asyI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useServiceHost; });
/* harmony import */ var _useDeviceHost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nyay");

function useServiceHost(service) {
  var host = Object(_useDeviceHost__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(service.device);
  return host === null || host === void 0 ? void 0 : host.service(service === null || service === void 0 ? void 0 : service.serviceIndex);
}

/***/ }),

/***/ "bf+Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return svgPointerPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return closestPoint; });
/* unused harmony export polarToCartesian */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return describeArc; });
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

/***/ "cJz4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useThrottledValue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useAnimationFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("y4gn");


function useThrottledValue(value, maxRate) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value),
      actual = _useState[0],
      setActual = _useState[1];

  var animated = actual;
  Object(_useAnimationFrame__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (time) {
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

/***/ "jwKE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSvgButtonProps; });
/* harmony import */ var _useFireKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("APA9");

function useSvgButtonProps(label, onDown, onUp) {
  var _ref;

  var disabled = !onDown && !onUp;
  var fireDownOnEnter = Object(_useFireKey__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(onDown);
  var fireUpOnEnter = Object(_useFireKey__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(onUp);

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

/***/ "soIx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useWidgetSize; });
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

/***/ "x3jS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterTrend; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yNWl");
/* harmony import */ var _FieldDataSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("GAtA");
/* harmony import */ var _Trend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pHpC");
/* harmony import */ var _useChartPalette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Ufew");
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("IzqI");







var DEFAULT_HORIZON = 50;
var DEFAULT_HEIGHT = 12;
function RegisterTrend(props) {
  var register = props.register,
      mini = props.mini,
      horizon = props.horizon,
      height = props.height,
      interval = props.interval;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_jacdac_Context__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]),
      bus = _useContext.bus;

  var palette = Object(_useChartPalette__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])();
  var dataSet = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(_FieldDataSet__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].create(bus, [register], "output", palette, 100));
  Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(dataSet.current);

  var addRow = function addRow() {
    return dataSet.current.addRow();
  }; // register on change if no intervals


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return interval ? undefined : register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* REPORT_RECEIVE */ "Yc"], addRow);
  }, [interval, register]); // keep logging

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var id = interval && setInterval(addRow, interval);
    return function () {
      return id && clearInterval(id);
    };
  }, [interval]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Trend__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    dataSet: dataSet.current,
    horizon: horizon || DEFAULT_HORIZON,
    gradient: true,
    height: height || DEFAULT_HEIGHT,
    mini: mini
  });
}

/***/ }),

/***/ "y4gn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useAnimationFrame; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useAnimationFrame(callback, deps) {
  var requestRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var previousTimeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    previousTimeRef.current = undefined;
    requestRef.current = requestAnimationFrame(animate);
    return function () {
      return requestRef.current !== undefined && cancelAnimationFrame(requestRef.current);
    };
  }, deps || []);
}

/***/ })

}]);
//# sourceMappingURL=bc1de39814113fdab2fbefae2ee854f0842f6be1-ac278700b14e1e51e451.js.map