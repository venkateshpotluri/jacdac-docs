(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7927],{

/***/ 4381:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34621);
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67055);
/* harmony import */ var _utils_isMuiElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61008);
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11291);
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38582);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73935);











var styles = function styles(theme) {
  return {
    /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      paddingTop: 8,
      paddingBottom: 8,
      '&$focusVisible': {
        backgroundColor: theme.palette.action.selected
      },
      '&$selected, &$selected:hover': {
        backgroundColor: theme.palette.action.selected
      },
      '&$disabled': {
        opacity: 0.5
      }
    },

    /* Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`. */
    container: {
      position: 'relative'
    },

    /* Pseudo-class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
    focusVisible: {},

    /* Styles applied to the `component` element if dense. */
    dense: {
      paddingTop: 4,
      paddingBottom: 4
    },

    /* Styles applied to the `component` element if `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      alignItems: 'flex-start'
    },

    /* Pseudo-class applied to the inner `component` element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the inner `component` element if `divider={true}`. */
    divider: {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      backgroundClip: 'padding-box'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the inner `component` element if `button={true}`. */
    button: {
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`. */
    secondaryAction: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    },

    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {}
  };
};
var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;
/**
 * Uses an additional container component if `ListItemSecondaryAction` is the last child.
 */

var ListItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ListItem(props, ref) {
  var _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'center' : _props$alignItems,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$button = props.button,
      button = _props$button === void 0 ? false : _props$button,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      componentProp = props.component,
      _props$ContainerCompo = props.ContainerComponent,
      ContainerComponent = _props$ContainerCompo === void 0 ? 'li' : _props$ContainerCompo,
      _props$ContainerProps = props.ContainerProps;
  _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;

  var ContainerClassName = _props$ContainerProps.className,
      ContainerProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(_props$ContainerProps, ["className"]),
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? false : _props$dense,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$divider = props.divider,
      divider = _props$divider === void 0 ? false : _props$divider,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(props, ["alignItems", "autoFocus", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]);

  var context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z);
  var childContext = {
    dense: dense || context.dense || false,
    alignItems: alignItems
  };
  var listItemRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  useEnhancedEffect(function () {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (false) {}
    }
  }, [autoFocus]);
  var children = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(childrenProp);
  var hasSecondaryAction = children.length && (0,_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(children[children.length - 1], ['ListItemSecondaryAction']);
  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (instance) {
    // #StrictMode ready
    listItemRef.current = react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(instance);
  }, []);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(handleOwnRef, ref);

  var componentProps = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(classes.root, className, childContext.dense && classes.dense, !disableGutters && classes.gutters, divider && classes.divider, disabled && classes.disabled, button && classes.button, alignItems !== "center" && classes.alignItemsFlexStart, hasSecondaryAction && classes.secondaryAction, selected && classes.selected),
    disabled: disabled
  }, other);

  var Component = componentProp || 'li';

  if (button) {
    componentProps.component = componentProp || 'div';
    componentProps.focusVisibleClassName = (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(classes.focusVisible, focusVisibleClassName);
    Component = _ButtonBase__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z;
  }

  if (hasSecondaryAction) {
    // Use div by default.
    Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

    if (ContainerComponent === 'li') {
      if (Component === 'li') {
        Component = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_List_ListContext__WEBPACK_IMPORTED_MODULE_3__/* .default.Provider */ .Z.Provider, {
      value: childContext
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ContainerComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(classes.container, ContainerClassName),
      ref: handleRef
    }, ContainerProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, componentProps, children), children.pop()));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_List_ListContext__WEBPACK_IMPORTED_MODULE_3__/* .default.Provider */ .Z.Provider, {
    value: childContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({
    ref: handleRef
  }, componentProps), children));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(styles, {
  name: 'MuiListItem'
})(ListItem));

/***/ }),

/***/ 65541:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81253);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96156);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22122);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34621);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4381);







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({}, theme.typography.body1, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: 'border-box',
      width: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }, theme.breakpoints.up('sm'), {
      minHeight: 'auto'
    })),
    // TODO v5: remove

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: {},

    /* Styles applied to the root element if `selected={true}`. */
    selected: {},

    /* Styles applied to the root element if dense. */
    dense: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({}, theme.typography.body2, {
      minHeight: 'auto'
    })
  };
};
var MenuItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function MenuItem(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      component = _props$component === void 0 ? 'li' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      ListItemClasses = props.ListItemClasses,
      _props$role = props.role,
      role = _props$role === void 0 ? 'menuitem' : _props$role,
      selected = props.selected,
      tabIndexProp = props.tabIndex,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(props, ["classes", "className", "component", "disableGutters", "ListItemClasses", "role", "selected", "tabIndex"]);

  var tabIndex;

  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({
    button: true,
    role: role,
    tabIndex: tabIndex,
    component: component,
    selected: selected,
    disableGutters: disableGutters,
    classes: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({
      dense: classes.dense
    }, ListItemClasses),
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.root, className, selected && classes.selected, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(styles, {
  name: 'MuiMenuItem'
})(MenuItem));

/***/ }),

/***/ 76544:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Switch_Switch; }
});

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(81253);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(37595);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(81664);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(28481);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useControlled.js
var useControlled = __webpack_require__(12933);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/useFormControl.js
var useFormControl = __webpack_require__(68725);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(23729);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/SwitchBase.js










var styles = {
  root: {
    padding: 9
  },
  checked: {},
  disabled: {},
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
  }
};
/**
 * @ignore - internal component.
 */

var SwitchBase = /*#__PURE__*/react.forwardRef(function SwitchBase(props, ref) {
  var autoFocus = props.autoFocus,
      checkedProp = props.checked,
      checkedIcon = props.checkedIcon,
      classes = props.classes,
      className = props.className,
      defaultChecked = props.defaultChecked,
      disabledProp = props.disabled,
      icon = props.icon,
      id = props.id,
      inputProps = props.inputProps,
      inputRef = props.inputRef,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      readOnly = props.readOnly,
      required = props.required,
      tabIndex = props.tabIndex,
      type = props.type,
      value = props.value,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["autoFocus", "checked", "checkedIcon", "classes", "className", "defaultChecked", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"]);

  var _useControlled = (0,useControlled/* default */.Z)({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase',
    state: 'checked'
  }),
      _useControlled2 = (0,slicedToArray/* default */.Z)(_useControlled, 2),
      checked = _useControlled2[0],
      setCheckedState = _useControlled2[1];

  var muiFormControl = (0,useFormControl/* default */.Z)();

  var handleFocus = function handleFocus(event) {
    if (onFocus) {
      onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };

  var handleInputChange = function handleInputChange(event) {
    var newChecked = event.target.checked;
    setCheckedState(newChecked);

    if (onChange) {
      // TODO v5: remove the second argument.
      onChange(event, newChecked);
    }
  };

  var disabled = disabledProp;

  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }

  var hasLabelFor = type === 'checkbox' || type === 'radio';
  return /*#__PURE__*/react.createElement(IconButton/* default */.Z, (0,esm_extends/* default */.Z)({
    component: "span",
    className: (0,clsx_m/* default */.Z)(classes.root, className, checked && classes.checked, disabled && classes.disabled),
    disabled: disabled,
    tabIndex: null,
    role: undefined,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref: ref
  }, other), /*#__PURE__*/react.createElement("input", (0,esm_extends/* default */.Z)({
    autoFocus: autoFocus,
    checked: checkedProp,
    defaultChecked: defaultChecked,
    className: classes.input,
    disabled: disabled,
    id: hasLabelFor && id,
    name: name,
    onChange: handleInputChange,
    readOnly: readOnly,
    ref: inputRef,
    required: required,
    tabIndex: tabIndex,
    type: type,
    value: value
  }, inputProps)), checked ? checkedIcon : icon);
}); // NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.

 false ? 0 : void 0;
/* harmony default export */ var internal_SwitchBase = ((0,withStyles/* default */.Z)(styles, {
  name: 'PrivateSwitchBase'
})(SwitchBase));
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js

 // @inheritedComponent IconButton








var Switch_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      width: 34 + 12 * 2,
      height: 14 + 12 * 2,
      overflow: 'hidden',
      padding: 12,
      boxSizing: 'border-box',
      position: 'relative',
      flexShrink: 0,
      zIndex: 0,
      // Reset the stacking context.
      verticalAlign: 'middle',
      // For correct alignment with the text.
      '@media print': {
        colorAdjust: 'exact'
      }
    },

    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
      marginLeft: -8
    },

    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
      marginRight: -8
    },

    /* Styles applied to the internal `SwitchBase` component's `root` class. */
    switchBase: {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      // Render above the focus ripple.
      color: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
      transition: theme.transitions.create(['left', 'transform'], {
        duration: theme.transitions.duration.shortest
      }),
      '&$checked': {
        transform: 'translateX(20px)'
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        opacity: 0.5
      },
      '&$disabled + $track': {
        opacity: theme.palette.type === 'light' ? 0.12 : 0.1
      }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="primary"`. */
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: (0,colorManipulator/* fade */.U1)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.primary.main
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
      }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="secondary"`. */
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: (0,colorManipulator/* fade */.U1)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.secondary.main
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
      }
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      width: 40,
      height: 24,
      padding: 7,
      '& $thumb': {
        width: 16,
        height: 16
      },
      '& $switchBase': {
        padding: 4,
        '&$checked': {
          transform: 'translateX(16px)'
        }
      }
    },

    /* Pseudo-class applied to the internal `SwitchBase` component's `checked` class. */
    checked: {},

    /* Pseudo-class applied to the internal SwitchBase component's disabled class. */
    disabled: {},

    /* Styles applied to the internal SwitchBase component's input element. */
    input: {
      left: '-100%',
      width: '300%'
    },

    /* Styles used to create the thumb passed to the internal `SwitchBase` component `icon` prop. */
    thumb: {
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%'
    },

    /* Styles applied to the track element. */
    track: {
      height: '100%',
      width: '100%',
      borderRadius: 14 / 2,
      zIndex: -1,
      transition: theme.transitions.create(['opacity', 'background-color'], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
      opacity: theme.palette.type === 'light' ? 0.38 : 0.3
    }
  };
};
var Switch = /*#__PURE__*/react.forwardRef(function Switch(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'secondary' : _props$color,
      _props$edge = props.edge,
      edge = _props$edge === void 0 ? false : _props$edge,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["classes", "className", "color", "edge", "size"]);

  var icon = /*#__PURE__*/react.createElement("span", {
    className: classes.thumb
  });
  return /*#__PURE__*/react.createElement("span", {
    className: (0,clsx_m/* default */.Z)(classes.root, className, {
      'start': classes.edgeStart,
      'end': classes.edgeEnd
    }[edge], size === "small" && classes["size".concat((0,capitalize/* default */.Z)(size))])
  }, /*#__PURE__*/react.createElement(internal_SwitchBase, (0,esm_extends/* default */.Z)({
    type: "checkbox",
    icon: icon,
    checkedIcon: icon,
    classes: {
      root: (0,clsx_m/* default */.Z)(classes.switchBase, classes["color".concat((0,capitalize/* default */.Z)(color))]),
      input: classes.input,
      checked: classes.checked,
      disabled: classes.disabled
    },
    ref: ref
  }, other)), /*#__PURE__*/react.createElement("span", {
    className: classes.track
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Switch_Switch = ((0,withStyles/* default */.Z)(Switch_styles, {
  name: 'MuiSwitch'
})(Switch));

/***/ }),

/***/ 1059:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85505);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15343);
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25137);
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40016);
/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11592);
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31690);
/* harmony import */ var _FormHelperText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78942);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(706);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34621);













var variantComponent = {
  standard: _Input__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z,
  filled: _FilledInput__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z,
  outlined: _OutlinedInput__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z
};
var styles = {
  /* Styles applied to the root element. */
  root: {}
};
/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/api/form-control/)
 * - [InputLabel](/api/input-label/)
 * - [FilledInput](/api/filled-input/)
 * - [OutlinedInput](/api/outlined-input/)
 * - [Input](/api/input/)
 * - [FormHelperText](/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */

var TextField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function TextField(props, ref) {
  var autoComplete = props.autoComplete,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      defaultValue = props.defaultValue,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      FormHelperTextProps = props.FormHelperTextProps,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      helperText = props.helperText,
      hiddenLabel = props.hiddenLabel,
      id = props.id,
      InputLabelProps = props.InputLabelProps,
      inputProps = props.inputProps,
      InputProps = props.InputProps,
      inputRef = props.inputRef,
      label = props.label,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      placeholder = props.placeholder,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      rows = props.rows,
      rowsMax = props.rowsMax,
      _props$select = props.select,
      select = _props$select === void 0 ? false : _props$select,
      SelectProps = props.SelectProps,
      type = props.type,
      value = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(props, ["autoComplete", "autoFocus", "children", "classes", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "hiddenLabel", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "select", "SelectProps", "type", "value", "variant"]);

  if (false) {}

  var InputMore = {};

  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }

    if (label) {
      var _InputLabelProps$requ;

      var displayRequired = (_InputLabelProps$requ = InputLabelProps === null || InputLabelProps === void 0 ? void 0 : InputLabelProps.required) !== null && _InputLabelProps$requ !== void 0 ? _InputLabelProps$requ : required;
      InputMore.label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, label, displayRequired && "\xA0*");
    }
  }

  if (select) {
    // unset defaults from textbox inputs
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = undefined;
    }

    InputMore['aria-describedby'] = undefined;
  }

  var helperTextId = helperText && id ? "".concat(id, "-helper-text") : undefined;
  var inputLabelId = label && id ? "".concat(id, "-label") : undefined;
  var InputComponent = variantComponent[variant];
  var InputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(InputComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
    "aria-describedby": helperTextId,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    rowsMax: rowsMax,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    inputProps: inputProps
  }, InputMore, InputProps));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormControl__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(classes.root, className),
    disabled: disabled,
    error: error,
    fullWidth: fullWidth,
    hiddenLabel: hiddenLabel,
    ref: ref,
    required: required,
    color: color,
    variant: variant
  }, other), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_InputLabel__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
    htmlFor: id,
    id: inputLabelId
  }, InputLabelProps), label), select ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Select__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
    "aria-describedby": helperTextId,
    id: id,
    labelId: inputLabelId,
    value: value,
    input: InputElement
  }, SelectProps), children) : InputElement, helperText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormHelperText__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
    id: helperTextId
  }, FormHelperTextProps), helperText));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)(styles, {
  name: 'MuiTextField'
})(TextField));

/***/ }),

/***/ 64616:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ FieldDataSet; }
/* harmony export */ });
/* unused harmony export Example */
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85061);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5991);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41788);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45484);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81794);






var Example = /*#__PURE__*/function () {
  function Example(timestamp, data) {
    this.timestamp = timestamp;
    this.data = data;
  }

  var _proto = Example.prototype;

  _proto.toVector = function toVector(startTimestamp) {
    var t = this.timestamp - (startTimestamp || 0);
    return [t].concat(this.data);
  };

  return Example;
}();

var FieldDataSet = /*#__PURE__*/function (_JDEventSource) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(FieldDataSet, _JDEventSource);

  FieldDataSet.create = function create(bus, registers, name, palette, maxRows) {
    var fields = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__/* .arrayConcatMany */ .ue)(registers.map(function (reg) {
      return reg.fields;
    }));
    var colors = fields.map(function (f, i) {
      return palette[i % palette.length];
    });
    var set = new FieldDataSet(bus, name, fields, colors);
    if (maxRows !== undefined) set.maxRows = maxRows;
    return set;
  };

  function FieldDataSet(bus, name, fields, colors) {
    var _this;

    if (colors === void 0) {
      colors = ["#000"];
    }

    _this = _JDEventSource.call(this) || this;
    _this.id = Math.random().toString();
    _this.maxRows = -1;
    _this.bus = bus;
    _this.name = name;
    _this.fields = fields;
    _this.colors = colors;
    _this.rows = [];
    _this.headers = fields.map(function (field) {
      return field.friendlyName;
    });
    _this.units = fields.map(function (field) {
      return field.unit;
    });
    return _this;
  }

  var _proto2 = FieldDataSet.prototype;

  _proto2.data = function data(flatten) {
    if (flatten && this.headers.length == 1) return this.rows.map(function (row) {
      return row.data[0];
    });else return this.rows.map(function (row) {
      return row.data;
    });
  };

  _proto2.indexOf = function indexOf(field) {
    return this.fields.indexOf(field);
  };

  _proto2.colorOf = function colorOf(field) {
    return this.colors[this.indexOf(field)];
  };

  _proto2.addRow = function addRow(data) {
    var timestamp = this.bus.timestamp;
    if (!data) data = this.fields.map(function (f) {
      return f.value;
    });
    this.addExample(timestamp, data);
  };

  _proto2.addExample = function addExample(timestamp, data) {
    this.rows.push(new Example(timestamp, data)); // drop rows if needed

    var refreshminmax = false;

    while (this.maxRows > 0 && this.rows.length > this.maxRows * 1.1) {
      var d = this.rows.shift();
      refreshminmax = true;
    }

    if (refreshminmax) {
      // refresh entire mins/max
      for (var r = 0; r < this.rows.length; ++r) {
        var row = this.rows[r];

        if (r == 0) {
          this.mins = row.data.slice(0);
          this.maxs = row.data.slice(0);
        } else {
          for (var i = 0; i < row.data.length; ++i) {
            this.mins[i] = Math.min(this.mins[i], row.data[i]);
            this.maxs[i] = Math.max(this.maxs[i], row.data[i]);
          }
        }
      }
    } else {
      // incremental update
      if (!this.mins) {
        this.mins = data.slice(0);
        this.maxs = data.slice(0);
      } else {
        for (var _i = 0; _i < data.length; ++_i) {
          this.mins[_i] = Math.min(this.mins[_i], data[_i]);
          this.maxs[_i] = Math.max(this.maxs[_i], data[_i]);
        }
      }
    }

    this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHANGE */ .Ver);
  };

  _proto2.toCSV = function toCSV(sep, options) {
    if (sep === void 0) {
      sep = ",";
    }

    var allheaders = ["time"].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this.headers)).join(sep);
    var start = this.startTimestamp;
    var csv = [allheaders];
    if (options !== null && options !== void 0 && options.units) csv.push(["ms"].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this.units)).join(sep));
    this.rows.forEach(function (row) {
      return csv.push(row.toVector(start).map(function (cell) {
        return cell !== undefined ? cell.toString() : "";
      }).join(sep));
    });
    return csv.join('\n');
  };

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(FieldDataSet, [{
    key: "startTimestamp",
    get: function get() {
      var row = this.rows[0];
      return row === null || row === void 0 ? void 0 : row.timestamp;
    }
  }, {
    key: "duration",
    get: function get() {
      var first = this.rows[0];
      var last = this.rows[this.rows.length - 1];
      return first && last && last.timestamp - first.timestamp || 0;
    }
  }, {
    key: "length",
    get: function get() {
      return this.rows.length;
    }
  }]);

  return FieldDataSet;
}(_jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_1__/* .JDEventSource */ .a);



/***/ }),

/***/ 25090:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Trend; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81794);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58063);



var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
    graph: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    mini: {
      display: "inline-block",
      width: "10rem"
    }
  });
});

function UnitTrendChart(props) {
  var dataSet = props.dataSet,
      useGradient = props.useGradient,
      data = props.data,
      unit = props.unit,
      horizon = props.horizon,
      vpw = props.vpw,
      vph = props.vph,
      dot = props.dot;
  var shape = unit == "#" ? "step" : "line";
  var symmetric = unit == "g" ? true : false;
  var indexes = dataSet.units.map(function (u, index) {
    return (u || "/") === unit ? index : undefined;
  }).filter(function (index) {
    return index !== undefined;
  });
  var colors = indexes.map(function (i) {
    return dataSet.colors[i];
  });
  var times = data.map(function (ex) {
    return ex.timestamp;
  });
  var maxt = Math.max.apply(null, times);
  var mint = Math.min.apply(null, times);
  var minv = unit == "/" ? 0 : Math.min.apply(null, indexes.map(function (i) {
    return dataSet.mins[i];
  }));
  var maxv = unit == "/" ? 1 : Math.max.apply(null, indexes.map(function (i) {
    return dataSet.maxs[i];
  }));
  var opposite = unit != "/" && Math.sign(minv) != Math.sign(maxv);

  if (isNaN(minv) && isNaN(maxv)) {
    minv = 0;
    maxv = 1;
  }

  if (symmetric) {
    maxv = Math.max(Math.abs(minv), Math.abs(maxv));
    minv = -maxv;
  }

  var rv = maxv - minv;
  var margin = 2;
  var h = maxv - minv || 10;
  var w = maxt - mint || 10;
  var strokeWidth = 0.25;
  var axisWidth = 0.2;
  var axisColor = "#ccc";
  var pointRadius = strokeWidth * 1.5;
  var toffset = -pointRadius * 3;

  function x(t) {
    return (t - mint) / w * vpw;
  }

  function y(v) {
    if (v === undefined || isNaN(v)) v = minv; // adding random for lineragradient bug workaround
    // which does not render perfectly
    // horizontal lines

    return (Math.random() * 0.0001 * rv - (v - minv)) / h * (vph - 2 * margin);
  }

  var lastRow = data[data.length - 1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, useGradient && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
    key: "gradaxis",
    id: "gradientaxis",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: "0%",
    stopOpacity: "0",
    stopColor: axisColor
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: "5%",
    stopOpacity: "0",
    stopColor: axisColor
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: "40%",
    stopOpacity: "1",
    stopColor: axisColor
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: "100%",
    stopOpacity: "1",
    stopColor: axisColor
  })), indexes.map(function (index, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
      key: "grad" + i,
      id: "gradient" + index,
      x1: "0%",
      y1: "0%",
      x2: "100%",
      y2: "0%"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
      offset: "0%",
      stopOpacity: "0",
      stopColor: colors[i]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
      offset: "5%",
      stopOpacity: "0",
      stopColor: colors[i]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
      offset: "40%",
      stopOpacity: "1",
      stopColor: colors[i]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
      offset: "100%",
      stopOpacity: "1",
      stopColor: colors[i]
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    transform: "translate(" + toffset + ", " + (vph - margin) + ")"
  }, opposite && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {
    x1: x(mint),
    x2: x(maxt),
    y1: y(0),
    y2: y(0),
    strokeWidth: axisWidth,
    stroke: useGradient ? "url(#gradientaxis)" : axisColor
  }), indexes.map(function (index, i) {
    var color = colors[i];
    var path = shape == "step" ? data.map(function (row, ri) {
      return ri == 0 ? "M " + x(row.timestamp) + " " + y(row.data[index]) : "H " + x(row.timestamp) + " V " + y(row.data[index]);
    }).join(' ') : data.map(function (row, ri) {
      return (ri == 0 ? "M" : "L") + " " + x(row.timestamp) + " " + y(row.data[index]);
    }).join(' ');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
      key: "line" + index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      d: path,
      fill: "none",
      stroke: useGradient ? "url(#gradient" + index + ")" : color,
      strokeWidth: strokeWidth,
      strokeLinejoin: "round"
    }), dot && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
      cx: x(lastRow.timestamp),
      cy: y(lastRow.data[index]),
      r: pointRadius,
      fill: color
    }));
  })));
}

function UnitTrend(props) {
  var dataSet = props.dataSet,
      horizon = props.horizon,
      width = props.width,
      height = props.height,
      mini = props.mini,
      gradient = props.gradient;
  var rows = dataSet.rows;
  var classes = useStyles();
  var vpw = width || 80;
  var vph = height || 15;
  var data = rows.slice(-horizon);
  var useGradient = gradient || data.length < rows.length;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    className: classes.graph,
    square: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    viewBox: "0 0 " + vpw + " " + vph,
    style: {
      maxHeight: mini ? "5vh" : "10vh",
      maxWidth: "100%"
    }
  }, data.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UnitTrendChart, Object.assign({
    data: data,
    useGradient: useGradient,
    vpw: vpw,
    vph: vph
  }, props))));
}

function Trend(props) {
  var dataSet = props.dataSet,
      mini = props.mini;
  var classes = useStyles();
  var units = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__/* .unique */ .Tw)(dataSet.units.map(function (unit) {
    return unit || "/";
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: mini ? classes.mini : undefined
  }, units.map(function (unit) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UnitTrend, Object.assign({
      key: "graph" + unit,
      unit: unit
    }, props));
  }));
}

/***/ }),

/***/ 74039:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useChartPalette; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _ui_DarkModeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91350);


function useChartPalette() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ui_DarkModeContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z),
      darkMode = _useContext.darkMode;

  if (darkMode == 'light') return ["#003f5c", "#ffa600", "#665191", "#a05195", "#ff7c43", "#d45087", "#f95d6a", "#2f4b7c"];else return ["#60ccfe", "#ffdd9e", "#c3b9d8", "#dcbbd7", "#fecdb7", "#eebcd1", "#fcc1c6", "#a1b6db"];
}

/***/ })

}]);
//# sourceMappingURL=ce17b3ec6c995876b8efd4c7eb2ef5516df991cd-da6e44e706c995f07291.js.map