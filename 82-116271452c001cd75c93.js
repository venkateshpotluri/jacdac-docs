(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "+AIW":
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
  d: "M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-5 0h-2v-2h2v2zm0-4h-2V8h2v4zm-1 10c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2z"
}), 'NotificationImportant');

exports.default = _default;

/***/ }),

/***/ "0FeW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ JDomTreeView; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("iuhU");

// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__("yNWl");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useControlled.js
var useControlled = __webpack_require__("yCxk");

// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/TreeView/TreeViewContext.js

/**
 * @ignore - internal component.
 */

var TreeViewContext = react["createContext"]({});

if (false) {}

/* harmony default export */ var TreeView_TreeViewContext = (TreeViewContext);
// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/TreeView/TreeView.js








var TreeView_styles = {
  /* Styles applied to the root element. */
  root: {
    padding: 0,
    margin: 0,
    listStyle: 'none'
  }
};

function arrayDiff(arr1, arr2) {
  if (arr1.length !== arr2.length) return true;

  for (var i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) return true;
  }

  return false;
}

var findNextFirstChar = function findNextFirstChar(firstChars, startIndex, char) {
  for (var i = startIndex; i < firstChars.length; i += 1) {
    if (char === firstChars[i]) {
      return i;
    }
  }

  return -1;
};

var defaultExpandedDefault = [];
var defaultSelectedDefault = [];
var TreeView_TreeView = /*#__PURE__*/react["forwardRef"](function TreeView(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      defaultCollapseIcon = props.defaultCollapseIcon,
      defaultEndIcon = props.defaultEndIcon,
      _props$defaultExpande = props.defaultExpanded,
      defaultExpanded = _props$defaultExpande === void 0 ? defaultExpandedDefault : _props$defaultExpande,
      defaultExpandIcon = props.defaultExpandIcon,
      defaultParentIcon = props.defaultParentIcon,
      _props$defaultSelecte = props.defaultSelected,
      defaultSelected = _props$defaultSelecte === void 0 ? defaultSelectedDefault : _props$defaultSelecte,
      _props$disableSelecti = props.disableSelection,
      disableSelection = _props$disableSelecti === void 0 ? false : _props$disableSelecti,
      _props$multiSelect = props.multiSelect,
      multiSelect = _props$multiSelect === void 0 ? false : _props$multiSelect,
      expandedProp = props.expanded,
      onNodeSelect = props.onNodeSelect,
      onNodeToggle = props.onNodeToggle,
      selectedProp = props.selected,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "defaultCollapseIcon", "defaultEndIcon", "defaultExpanded", "defaultExpandIcon", "defaultParentIcon", "defaultSelected", "disableSelection", "multiSelect", "expanded", "onNodeSelect", "onNodeToggle", "selected"]);

  var _React$useState = react["useState"](null),
      tabbable = _React$useState[0],
      setTabbable = _React$useState[1];

  var _React$useState2 = react["useState"](null),
      focusedNodeId = _React$useState2[0],
      setFocusedNodeId = _React$useState2[1];

  var nodeMap = react["useRef"]({});
  var firstCharMap = react["useRef"]({});
  var visibleNodes = react["useRef"]([]);

  var _useControlled = Object(useControlled["a" /* default */])({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'TreeView',
    state: 'expanded'
  }),
      _useControlled2 = Object(slicedToArray["a" /* default */])(_useControlled, 2),
      expanded = _useControlled2[0],
      setExpandedState = _useControlled2[1];

  var _useControlled3 = Object(useControlled["a" /* default */])({
    controlled: selectedProp,
    default: defaultSelected,
    name: 'TreeView',
    state: 'selected'
  }),
      _useControlled4 = Object(slicedToArray["a" /* default */])(_useControlled3, 2),
      selected = _useControlled4[0],
      setSelectedState = _useControlled4[1];
  /*
   * Status Helpers
   */


  var isExpanded = react["useCallback"](function (id) {
    return Array.isArray(expanded) ? expanded.indexOf(id) !== -1 : false;
  }, [expanded]);
  var isSelected = react["useCallback"](function (id) {
    return Array.isArray(selected) ? selected.indexOf(id) !== -1 : selected === id;
  }, [selected]);

  var isTabbable = function isTabbable(id) {
    return tabbable === id;
  };

  var isFocused = function isFocused(id) {
    return focusedNodeId === id;
  };
  /*
   * Node Helpers
   */


  var getNextNode = function getNextNode(id) {
    var nodeIndex = visibleNodes.current.indexOf(id);

    if (nodeIndex !== -1 && nodeIndex + 1 < visibleNodes.current.length) {
      return visibleNodes.current[nodeIndex + 1];
    }

    return null;
  };

  var getPreviousNode = function getPreviousNode(id) {
    var nodeIndex = visibleNodes.current.indexOf(id);

    if (nodeIndex !== -1 && nodeIndex - 1 >= 0) {
      return visibleNodes.current[nodeIndex - 1];
    }

    return null;
  };

  var getLastNode = function getLastNode() {
    return visibleNodes.current[visibleNodes.current.length - 1];
  };

  var getFirstNode = function getFirstNode() {
    return visibleNodes.current[0];
  };

  var getParent = function getParent(id) {
    return nodeMap.current[id].parent;
  };

  var getNodesInRange = function getNodesInRange(a, b) {
    var aIndex = visibleNodes.current.indexOf(a);
    var bIndex = visibleNodes.current.indexOf(b);
    var start = Math.min(aIndex, bIndex);
    var end = Math.max(aIndex, bIndex);
    return visibleNodes.current.slice(start, end + 1);
  };
  /*
   * Focus Helpers
   */


  var focus = function focus(id) {
    if (id) {
      setTabbable(id);
      setFocusedNodeId(id);
    }
  };

  var focusNextNode = function focusNextNode(id) {
    return focus(getNextNode(id));
  };

  var focusPreviousNode = function focusPreviousNode(id) {
    return focus(getPreviousNode(id));
  };

  var focusFirstNode = function focusFirstNode() {
    return focus(getFirstNode());
  };

  var focusLastNode = function focusLastNode() {
    return focus(getLastNode());
  };

  var focusByFirstCharacter = function focusByFirstCharacter(id, char) {
    var start;
    var index;
    var lowercaseChar = char.toLowerCase();
    var firstCharIds = [];
    var firstChars = []; // This really only works since the ids are strings

    Object.keys(firstCharMap.current).forEach(function (nodeId) {
      var firstChar = firstCharMap.current[nodeId];
      var map = nodeMap.current[nodeId];
      var visible = map.parent ? isExpanded(map.parent) : true;

      if (visible) {
        firstCharIds.push(nodeId);
        firstChars.push(firstChar);
      }
    }); // Get start index for search based on position of currentItem

    start = firstCharIds.indexOf(id) + 1;

    if (start === nodeMap.current.length) {
      start = 0;
    } // Check remaining slots in the menu


    index = findNextFirstChar(firstChars, start, lowercaseChar); // If not found in remaining slots, check from beginning

    if (index === -1) {
      index = findNextFirstChar(firstChars, 0, lowercaseChar);
    } // If match was found...


    if (index > -1) {
      focus(firstCharIds[index]);
    }
  };
  /*
   * Expansion Helpers
   */


  var toggleExpansion = function toggleExpansion(event) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : focusedNodeId;
    var newExpanded;

    if (expanded.indexOf(value) !== -1) {
      newExpanded = expanded.filter(function (id) {
        return id !== value;
      });
      setTabbable(function (oldTabbable) {
        var map = nodeMap.current[oldTabbable];

        if (oldTabbable && (map && map.parent ? map.parent.id : null) === value) {
          return value;
        }

        return oldTabbable;
      });
    } else {
      newExpanded = [value].concat(expanded);
    }

    if (onNodeToggle) {
      onNodeToggle(event, newExpanded);
    }

    setExpandedState(newExpanded);
  };

  var expandAllSiblings = function expandAllSiblings(event, id) {
    var map = nodeMap.current[id];
    var parent = nodeMap.current[map.parent];
    var diff;

    if (parent) {
      diff = parent.children.filter(function (child) {
        return !isExpanded(child);
      });
    } else {
      var topLevelNodes = nodeMap.current[-1].children;
      diff = topLevelNodes.filter(function (node) {
        return !isExpanded(node);
      });
    }

    var newExpanded = expanded.concat(diff);

    if (diff.length > 0) {
      setExpandedState(newExpanded);

      if (onNodeToggle) {
        onNodeToggle(event, newExpanded);
      }
    }
  };
  /*
   * Selection Helpers
   */


  var lastSelectedNode = react["useRef"](null);
  var lastSelectionWasRange = react["useRef"](false);
  var currentRangeSelection = react["useRef"]([]);

  var handleRangeArrowSelect = function handleRangeArrowSelect(event, nodes) {
    var base = selected;
    var start = nodes.start,
        next = nodes.next,
        current = nodes.current;

    if (!next || !current) {
      return;
    }

    if (currentRangeSelection.current.indexOf(current) === -1) {
      currentRangeSelection.current = [];
    }

    if (lastSelectionWasRange.current) {
      if (currentRangeSelection.current.indexOf(next) !== -1) {
        base = base.filter(function (id) {
          return id === start || id !== current;
        });
        currentRangeSelection.current = currentRangeSelection.current.filter(function (id) {
          return id === start || id !== current;
        });
      } else {
        base.push(next);
        currentRangeSelection.current.push(next);
      }
    } else {
      base.push(next);
      currentRangeSelection.current.push(current, next);
    }

    if (onNodeSelect) {
      onNodeSelect(event, base);
    }

    setSelectedState(base);
  };

  var handleRangeSelect = function handleRangeSelect(event, nodes) {
    var base = selected;
    var start = nodes.start,
        end = nodes.end; // If last selection was a range selection ignore nodes that were selected.

    if (lastSelectionWasRange.current) {
      base = selected.filter(function (id) {
        return currentRangeSelection.current.indexOf(id) === -1;
      });
    }

    var range = getNodesInRange(start, end);
    currentRangeSelection.current = range;
    var newSelected = base.concat(range);
    newSelected = newSelected.filter(function (id, i) {
      return newSelected.indexOf(id) === i;
    });

    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }

    setSelectedState(newSelected);
  };

  var handleMultipleSelect = function handleMultipleSelect(event, value) {
    var newSelected = [];

    if (selected.indexOf(value) !== -1) {
      newSelected = selected.filter(function (id) {
        return id !== value;
      });
    } else {
      newSelected = [value].concat(selected);
    }

    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }

    setSelectedState(newSelected);
  };

  var handleSingleSelect = function handleSingleSelect(event, value) {
    var newSelected = multiSelect ? [value] : value;

    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }

    setSelectedState(newSelected);
  };

  var selectNode = function selectNode(event, id) {
    var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (id) {
      if (multiple) {
        handleMultipleSelect(event, id);
      } else {
        handleSingleSelect(event, id);
      }

      lastSelectedNode.current = id;
      lastSelectionWasRange.current = false;
      currentRangeSelection.current = [];
      return true;
    }

    return false;
  };

  var selectRange = function selectRange(event, nodes) {
    var stacked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var _nodes$start = nodes.start,
        start = _nodes$start === void 0 ? lastSelectedNode.current : _nodes$start,
        end = nodes.end,
        current = nodes.current;

    if (stacked) {
      handleRangeArrowSelect(event, {
        start: start,
        next: end,
        current: current
      });
    } else {
      handleRangeSelect(event, {
        start: start,
        end: end
      });
    }

    lastSelectionWasRange.current = true;
    return true;
  };

  var rangeSelectToFirst = function rangeSelectToFirst(event, id) {
    if (!lastSelectedNode.current) {
      lastSelectedNode.current = id;
    }

    var start = lastSelectionWasRange.current ? lastSelectedNode.current : id;
    return selectRange(event, {
      start: start,
      end: getFirstNode()
    });
  };

  var rangeSelectToLast = function rangeSelectToLast(event, id) {
    if (!lastSelectedNode.current) {
      lastSelectedNode.current = id;
    }

    var start = lastSelectionWasRange.current ? lastSelectedNode.current : id;
    return selectRange(event, {
      start: start,
      end: getLastNode()
    });
  };

  var selectNextNode = function selectNextNode(event, id) {
    return selectRange(event, {
      end: getNextNode(id),
      current: id
    }, true);
  };

  var selectPreviousNode = function selectPreviousNode(event, id) {
    return selectRange(event, {
      end: getPreviousNode(id),
      current: id
    }, true);
  };

  var selectAllNodes = function selectAllNodes(event) {
    return selectRange(event, {
      start: getFirstNode(),
      end: getLastNode()
    });
  };
  /*
   * Mapping Helpers
   */


  var addNodeToNodeMap = function addNodeToNodeMap(id, childrenIds) {
    var currentMap = nodeMap.current[id];
    nodeMap.current[id] = Object(esm_extends["a" /* default */])({}, currentMap, {
      children: childrenIds,
      id: id
    });
    childrenIds.forEach(function (childId) {
      var currentChildMap = nodeMap.current[childId];
      nodeMap.current[childId] = Object(esm_extends["a" /* default */])({}, currentChildMap, {
        parent: id,
        id: childId
      });
    });
  };

  var getNodesToRemove = react["useCallback"](function (id) {
    var map = nodeMap.current[id];
    var nodes = [];

    if (map) {
      nodes.push(id);

      if (map.children) {
        nodes.concat(map.children);
        map.children.forEach(function (node) {
          nodes.concat(getNodesToRemove(node));
        });
      }
    }

    return nodes;
  }, []);
  var cleanUpFirstCharMap = react["useCallback"](function (nodes) {
    var newMap = Object(esm_extends["a" /* default */])({}, firstCharMap.current);

    nodes.forEach(function (node) {
      if (newMap[node]) {
        delete newMap[node];
      }
    });
    firstCharMap.current = newMap;
  }, []);
  var removeNodeFromNodeMap = react["useCallback"](function (id) {
    var nodes = getNodesToRemove(id);
    cleanUpFirstCharMap(nodes);

    var newMap = Object(esm_extends["a" /* default */])({}, nodeMap.current);

    nodes.forEach(function (node) {
      var map = newMap[node];

      if (map) {
        if (map.parent) {
          var parentMap = newMap[map.parent];

          if (parentMap && parentMap.children) {
            var parentChildren = parentMap.children.filter(function (c) {
              return c !== node;
            });
            newMap[map.parent] = Object(esm_extends["a" /* default */])({}, parentMap, {
              children: parentChildren
            });
          }
        }

        delete newMap[node];
      }
    });
    nodeMap.current = newMap;
    setFocusedNodeId(function (oldFocusedNodeId) {
      if (oldFocusedNodeId === id) {
        return null;
      }

      return oldFocusedNodeId;
    });
  }, [getNodesToRemove, cleanUpFirstCharMap]);

  var mapFirstChar = function mapFirstChar(id, firstChar) {
    firstCharMap.current[id] = firstChar;
  };

  var prevChildIds = react["useRef"]([]);

  var _React$useState3 = react["useState"](false),
      childrenCalculated = _React$useState3[0],
      setChildrenCalculated = _React$useState3[1];

  react["useEffect"](function () {
    var childIds = [];
    react["Children"].forEach(children, function (child) {
      if ( /*#__PURE__*/react["isValidElement"](child) && child.props.nodeId) {
        childIds.push(child.props.nodeId);
      }
    });

    if (arrayDiff(prevChildIds.current, childIds)) {
      nodeMap.current[-1] = {
        parent: null,
        children: childIds
      };
      childIds.forEach(function (id, index) {
        if (index === 0) {
          setTabbable(id);
        }
      });
      visibleNodes.current = nodeMap.current[-1].children;
      prevChildIds.current = childIds;
      setChildrenCalculated(true);
    }
  }, [children]);
  react["useEffect"](function () {
    var buildVisible = function buildVisible(nodes) {
      var list = [];

      for (var i = 0; i < nodes.length; i += 1) {
        var item = nodes[i];
        list.push(item);
        var childs = nodeMap.current[item].children;

        if (isExpanded(item) && childs) {
          list = list.concat(buildVisible(childs));
        }
      }

      return list;
    };

    if (childrenCalculated) {
      visibleNodes.current = buildVisible(nodeMap.current[-1].children);
    }
  }, [expanded, childrenCalculated, isExpanded, children]);

  var noopSelection = function noopSelection() {
    return false;
  };

  return /*#__PURE__*/react["createElement"](TreeView_TreeViewContext.Provider, {
    value: {
      icons: {
        defaultCollapseIcon: defaultCollapseIcon,
        defaultExpandIcon: defaultExpandIcon,
        defaultParentIcon: defaultParentIcon,
        defaultEndIcon: defaultEndIcon
      },
      focus: focus,
      focusFirstNode: focusFirstNode,
      focusLastNode: focusLastNode,
      focusNextNode: focusNextNode,
      focusPreviousNode: focusPreviousNode,
      focusByFirstCharacter: focusByFirstCharacter,
      expandAllSiblings: expandAllSiblings,
      toggleExpansion: toggleExpansion,
      isExpanded: isExpanded,
      isFocused: isFocused,
      isSelected: isSelected,
      selectNode: disableSelection ? noopSelection : selectNode,
      selectRange: disableSelection ? noopSelection : selectRange,
      selectNextNode: disableSelection ? noopSelection : selectNextNode,
      selectPreviousNode: disableSelection ? noopSelection : selectPreviousNode,
      rangeSelectToFirst: disableSelection ? noopSelection : rangeSelectToFirst,
      rangeSelectToLast: disableSelection ? noopSelection : rangeSelectToLast,
      selectAllNodes: disableSelection ? noopSelection : selectAllNodes,
      isTabbable: isTabbable,
      multiSelect: multiSelect,
      getParent: getParent,
      mapFirstChar: mapFirstChar,
      addNodeToNodeMap: addNodeToNodeMap,
      removeNodeFromNodeMap: removeNodeFromNodeMap
    }
  }, /*#__PURE__*/react["createElement"]("ul", Object(esm_extends["a" /* default */])({
    role: "tree",
    "aria-multiselectable": multiSelect,
    className: Object(clsx_m["a" /* default */])(classes.root, className),
    ref: ref
  }, other), children));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_TreeView_TreeView = (Object(withStyles["a" /* default */])(TreeView_styles, {
  name: 'MuiTreeView'
})(TreeView_TreeView));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowDropDown.js
var ArrowDropDown = __webpack_require__("B6OW");
var ArrowDropDown_default = /*#__PURE__*/__webpack_require__.n(ArrowDropDown);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowRight.js
var ArrowRight = __webpack_require__("ZqJb");
var ArrowRight_default = /*#__PURE__*/__webpack_require__.n(ArrowRight);

// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__("tr08");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__("lopY");

// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__("dYIP");

// EXTERNAL MODULE: ./src/jacdac/useEventCount.ts
var useEventCount = __webpack_require__("U/xp");

// EXTERNAL MODULE: ./src/components/DeviceActions.tsx
var DeviceActions = __webpack_require__("8zWW");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./src/jacdac/useEventRaised.ts
var useEventRaised = __webpack_require__("jj5L");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__("Zo1I");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ./src/components/devices/useDeviceName.ts
var useDeviceName = __webpack_require__("mAuX");

// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__("9pTp");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Collapse/Collapse.js
var Collapse = __webpack_require__("JQEk");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__("ye/S");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__("bfFb");

// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/TreeItem/TreeItem.js


/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions  */








var TreeItem_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      outline: 0,
      WebkitTapHighlightColor: 'transparent',
      '&:focus > $content $label': {
        backgroundColor: theme.palette.action.hover
      },
      '&$selected > $content $label': {
        backgroundColor: Object(colorManipulator["c" /* fade */])(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      },
      '&$selected > $content $label:hover, &$selected:focus > $content $label': {
        backgroundColor: Object(colorManipulator["c" /* fade */])(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Pseudo-class applied to the root element when expanded. */
    expanded: {},

    /* Pseudo-class applied to the root element when selected. */
    selected: {},

    /* Styles applied to the `role="group"` element. */
    group: {
      margin: 0,
      padding: 0,
      marginLeft: 17
    },

    /* Styles applied to the tree node content. */
    content: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    },

    /* Styles applied to the tree node icon and collapse/expand icon. */
    iconContainer: {
      marginRight: 4,
      width: 15,
      display: 'flex',
      flexShrink: 0,
      justifyContent: 'center',
      '& svg': {
        fontSize: 18
      }
    },

    /* Styles applied to the label element. */
    label: {
      width: '100%',
      paddingLeft: 4,
      position: 'relative',
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    }
  };
};

var isPrintableCharacter = function isPrintableCharacter(str) {
  return str && str.length === 1 && str.match(/\S/);
};

var TreeItem_TreeItem = /*#__PURE__*/react["forwardRef"](function TreeItem(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      collapseIcon = props.collapseIcon,
      endIcon = props.endIcon,
      expandIcon = props.expandIcon,
      iconProp = props.icon,
      label = props.label,
      nodeId = props.nodeId,
      onClick = props.onClick,
      onLabelClick = props.onLabelClick,
      onIconClick = props.onIconClick,
      onFocus = props.onFocus,
      onKeyDown = props.onKeyDown,
      onMouseDown = props.onMouseDown,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Collapse["a" /* default */] : _props$TransitionComp,
      TransitionProps = props.TransitionProps,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "collapseIcon", "endIcon", "expandIcon", "icon", "label", "nodeId", "onClick", "onLabelClick", "onIconClick", "onFocus", "onKeyDown", "onMouseDown", "TransitionComponent", "TransitionProps"]);

  var _React$useContext = react["useContext"](TreeView_TreeViewContext),
      contextIcons = _React$useContext.icons,
      focus = _React$useContext.focus,
      focusFirstNode = _React$useContext.focusFirstNode,
      focusLastNode = _React$useContext.focusLastNode,
      focusNextNode = _React$useContext.focusNextNode,
      focusPreviousNode = _React$useContext.focusPreviousNode,
      focusByFirstCharacter = _React$useContext.focusByFirstCharacter,
      selectNode = _React$useContext.selectNode,
      selectRange = _React$useContext.selectRange,
      selectNextNode = _React$useContext.selectNextNode,
      selectPreviousNode = _React$useContext.selectPreviousNode,
      rangeSelectToFirst = _React$useContext.rangeSelectToFirst,
      rangeSelectToLast = _React$useContext.rangeSelectToLast,
      selectAllNodes = _React$useContext.selectAllNodes,
      expandAllSiblings = _React$useContext.expandAllSiblings,
      toggleExpansion = _React$useContext.toggleExpansion,
      isExpanded = _React$useContext.isExpanded,
      isFocused = _React$useContext.isFocused,
      isSelected = _React$useContext.isSelected,
      isTabbable = _React$useContext.isTabbable,
      multiSelect = _React$useContext.multiSelect,
      getParent = _React$useContext.getParent,
      mapFirstChar = _React$useContext.mapFirstChar,
      addNodeToNodeMap = _React$useContext.addNodeToNodeMap,
      removeNodeFromNodeMap = _React$useContext.removeNodeFromNodeMap;

  var nodeRef = react["useRef"](null);
  var contentRef = react["useRef"](null);
  var handleRef = Object(useForkRef["a" /* default */])(nodeRef, ref);
  var icon = iconProp;
  var expandable = Boolean(Array.isArray(children) ? children.length : children);
  var expanded = isExpanded ? isExpanded(nodeId) : false;
  var focused = isFocused ? isFocused(nodeId) : false;
  var tabbable = isTabbable ? isTabbable(nodeId) : false;
  var selected = isSelected ? isSelected(nodeId) : false;
  var icons = contextIcons || {};
  var theme = Object(useTheme["a" /* default */])();

  if (!icon) {
    if (expandable) {
      if (!expanded) {
        icon = expandIcon || icons.defaultExpandIcon;
      } else {
        icon = collapseIcon || icons.defaultCollapseIcon;
      }

      if (!icon) {
        icon = icons.defaultParentIcon;
      }
    } else {
      icon = endIcon || icons.defaultEndIcon;
    }
  }

  var handleClick = function handleClick(event) {
    if (!focused) {
      focus(nodeId);
    }

    var multiple = multiSelect && (event.shiftKey || event.ctrlKey || event.metaKey); // If already expanded and trying to toggle selection don't close

    if (expandable && !event.defaultPrevented && !(multiple && isExpanded(nodeId))) {
      toggleExpansion(event, nodeId);
    }

    if (multiple) {
      if (event.shiftKey) {
        selectRange(event, {
          end: nodeId
        });
      } else {
        selectNode(event, nodeId, true);
      }
    } else {
      selectNode(event, nodeId);
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleMouseDown = function handleMouseDown(event) {
    if (event.shiftKey || event.ctrlKey || event.metaKey) {
      event.preventDefault();
    }

    if (onMouseDown) {
      onMouseDown(event);
    }
  };

  var handleNextArrow = function handleNextArrow(event) {
    if (expandable) {
      if (expanded) {
        focusNextNode(nodeId);
      } else {
        toggleExpansion(event);
      }
    }

    return true;
  };

  var handlePreviousArrow = function handlePreviousArrow(event) {
    if (expanded) {
      toggleExpansion(event, nodeId);
      return true;
    }

    var parent = getParent(nodeId);

    if (parent) {
      focus(parent);
      return true;
    }

    return false;
  };

  var handleKeyDown = function handleKeyDown(event) {
    var flag = false;
    var key = event.key;

    if (event.altKey || event.currentTarget !== event.target) {
      return;
    }

    var ctrlPressed = event.ctrlKey || event.metaKey;

    switch (key) {
      case ' ':
        if (nodeRef.current === event.currentTarget) {
          if (multiSelect && event.shiftKey) {
            flag = selectRange(event, {
              end: nodeId
            });
          } else if (multiSelect) {
            flag = selectNode(event, nodeId, true);
          } else {
            flag = selectNode(event, nodeId);
          }
        }

        event.stopPropagation();
        break;

      case 'Enter':
        if (nodeRef.current === event.currentTarget && expandable) {
          toggleExpansion(event);
          flag = true;
        }

        event.stopPropagation();
        break;

      case 'ArrowDown':
        if (multiSelect && event.shiftKey) {
          selectNextNode(event, nodeId);
        }

        focusNextNode(nodeId);
        flag = true;
        break;

      case 'ArrowUp':
        if (multiSelect && event.shiftKey) {
          selectPreviousNode(event, nodeId);
        }

        focusPreviousNode(nodeId);
        flag = true;
        break;

      case 'ArrowRight':
        if (theme.direction === 'rtl') {
          flag = handlePreviousArrow(event);
        } else {
          flag = handleNextArrow(event);
        }

        break;

      case 'ArrowLeft':
        if (theme.direction === 'rtl') {
          flag = handleNextArrow(event);
        } else {
          flag = handlePreviousArrow(event);
        }

        break;

      case 'Home':
        if (multiSelect && ctrlPressed && event.shiftKey) {
          rangeSelectToFirst(event, nodeId);
        }

        focusFirstNode();
        flag = true;
        break;

      case 'End':
        if (multiSelect && ctrlPressed && event.shiftKey) {
          rangeSelectToLast(event, nodeId);
        }

        focusLastNode();
        flag = true;
        break;

      default:
        if (key === '*') {
          expandAllSiblings(event, nodeId);
          flag = true;
        } else if (multiSelect && ctrlPressed && key.toLowerCase() === 'a') {
          flag = selectAllNodes(event);
        } else if (!ctrlPressed && !event.shiftKey && isPrintableCharacter(key)) {
          focusByFirstCharacter(nodeId, key);
          flag = true;
        }

    }

    if (flag) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleFocus = function handleFocus(event) {
    if (!focused && event.currentTarget === event.target) {
      focus(nodeId);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  react["useEffect"](function () {
    if (addNodeToNodeMap) {
      var childIds = [];
      react["Children"].forEach(children, function (child) {
        if ( /*#__PURE__*/react["isValidElement"](child) && child.props.nodeId) {
          childIds.push(child.props.nodeId);
        }
      });
      addNodeToNodeMap(nodeId, childIds);
    }
  }, [children, nodeId, addNodeToNodeMap]);
  react["useEffect"](function () {
    if (removeNodeFromNodeMap) {
      return function () {
        removeNodeFromNodeMap(nodeId);
      };
    }

    return undefined;
  }, [nodeId, removeNodeFromNodeMap]);
  react["useEffect"](function () {
    if (mapFirstChar && label) {
      mapFirstChar(nodeId, contentRef.current.textContent.substring(0, 1).toLowerCase());
    }
  }, [mapFirstChar, nodeId, label]);
  react["useEffect"](function () {
    if (focused) {
      nodeRef.current.focus();
    }
  }, [focused]);
  var ariaSelected;

  if (multiSelect) {
    ariaSelected = selected;
  } else if (selected) {
    // single-selection trees unset aria-selected
    ariaSelected = true;
  }

  return /*#__PURE__*/react["createElement"]("li", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, expanded && classes.expanded, selected && classes.selected),
    role: "treeitem",
    onKeyDown: handleKeyDown,
    onFocus: handleFocus,
    "aria-expanded": expandable ? expanded : null,
    "aria-selected": ariaSelected,
    ref: handleRef,
    tabIndex: tabbable ? 0 : -1
  }, other), /*#__PURE__*/react["createElement"]("div", {
    className: classes.content,
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    ref: contentRef
  }, /*#__PURE__*/react["createElement"]("div", {
    onClick: onIconClick,
    className: classes.iconContainer
  }, icon), /*#__PURE__*/react["createElement"](Typography["a" /* default */], {
    onClick: onLabelClick,
    component: "div",
    className: classes.label
  }, label)), children && /*#__PURE__*/react["createElement"](TransitionComponent, Object(esm_extends["a" /* default */])({
    unmountOnExit: true,
    className: classes.group,
    in: expanded,
    component: "ul",
    role: "group"
  }, TransitionProps), children));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_TreeItem_TreeItem = (Object(withStyles["a" /* default */])(TreeItem_styles, {
  name: 'MuiTreeItem'
})(TreeItem_TreeItem));
// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__("NHHF");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js + 1 modules
var Switch = __webpack_require__("UhlP");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/NotificationImportant.js
var NotificationImportant = __webpack_require__("+AIW");
var NotificationImportant_default = /*#__PURE__*/__webpack_require__.n(NotificationImportant);

// CONCATENATED MODULE: ./src/components/ui/StyledTreeView.tsx

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name


 // tslint:disable-next-line: no-submodule-imports match-default-export-name


var useTreeItemStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    root: {
      color: theme.palette.text.secondary,
      '&:hover > $content': {
        backgroundColor: theme.palette.action.hover
      },
      '&:focus > $content, &$selected > $content': {
        backgroundColor: "var(--tree-view-bg-color, " + theme.palette.grey[400] + ")",
        color: 'var(--tree-view-color)'
      },
      '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
        backgroundColor: 'transparent'
      }
    },
    content: {
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightMedium,
      '$expanded > &': {
        fontWeight: theme.typography.fontWeightRegular
      }
    },
    group: {
      marginLeft: 0,
      '& $content': {
        paddingLeft: theme.spacing(1)
      }
    },
    expanded: {},
    selected: {
      color: theme.palette.background.default
    },
    label: {
      fontWeight: 'inherit',
      color: 'inherit'
    },
    labelRoot: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0.5, 0)
    },
    labelIcon: {
      marginRight: theme.spacing(0.5)
    },
    labelText: {
      fontWeight: 'inherit',
      flexGrow: 1
    }
  });
});
function StyledTreeItem(props) {
  var classes = useTreeItemStyles();

  var labelText = props.labelText,
      kind = props.kind,
      icon = props.icon,
      labelInfo = props.labelInfo,
      color = props.color,
      bgColor = props.bgColor,
      checked = props.checked,
      setChecked = props.setChecked,
      actions = props.actions,
      nodeId = props.nodeId,
      alert = props.alert,
      other = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["labelText", "kind", "icon", "labelInfo", "color", "bgColor", "checked", "setChecked", "actions", "nodeId", "alert"]);

  var _useState = Object(react["useState"])(checked),
      checkedState = _useState[0],
      setCheckedState = _useState[1];

  var handleChecked = function handleChecked(ev, c) {
    ev.stopPropagation();
    setChecked(c);
    setCheckedState(c);
  };

  return /*#__PURE__*/react_default.a.createElement(esm_TreeItem_TreeItem, Object.assign({
    nodeId: nodeId,
    label: /*#__PURE__*/react_default.a.createElement("div", {
      className: classes.labelRoot
    }, setChecked && /*#__PURE__*/react_default.a.createElement(Switch["a" /* default */], {
      checked: checkedState,
      color: "primary",
      inputProps: {
        'aria-label': 'secondary checkbox'
      },
      onChange: handleChecked
    }), kind && /*#__PURE__*/react_default.a.createElement(KindIcon["b" /* default */], {
      kind: kind,
      className: classes.labelIcon
    }), icon, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
      variant: "body2",
      className: classes.labelText
    }, labelText), alert && /*#__PURE__*/react_default.a.createElement(NotificationImportant_default.a, null), /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
      variant: "caption",
      color: "inherit"
    }, alert && /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
      component: "span"
    }, alert), labelInfo, actions)),
    style: {
      '--tree-view-color': color,
      '--tree-view-bg-color': bgColor
    },
    classes: {
      root: classes.root,
      content: classes.content,
      expanded: classes.expanded,
      selected: classes.selected,
      group: classes.group,
      label: classes.label
    }
  }, other));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Launch.js
var Launch = __webpack_require__("AjCI");
var Launch_default = /*#__PURE__*/__webpack_require__.n(Launch);

// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__("2K/c");

// EXTERNAL MODULE: ./src/components/layout.tsx + 16 modules
var layout = __webpack_require__("9Dj+");

// CONCATENATED MODULE: ./src/components/JDomTreeView.tsx



 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name









 // tslint:disable-next-line: no-submodule-imports match-default-export-name





 // tslint:disable-next-line: no-submodule-imports match-default-export-name





function DeviceTreeItem(props) {
  var _services$find;

  var device = props.device,
      checked = props.checked,
      setChecked = props.setChecked,
      checkboxes = props.checkboxes,
      serviceFilter = props.serviceFilter,
      other = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["device", "checked", "setChecked", "checkboxes", "serviceFilter"]);

  var id = device.id;
  var name = Object(useDeviceName["a" /* default */])(device, true);
  var physical = Object(useChange["a" /* default */])(device, function (d) {
    return d.physical;
  });
  var kind = physical ? "device" : "virtualdevice";
  var lost = Object(useEventRaised["a" /* default */])([constants["Nb" /* LOST */], constants["rb" /* FOUND */]], device, function (dev) {
    return !!(dev !== null && dev !== void 0 && dev.lost);
  });
  var services = Object(useChange["a" /* default */])(device, function () {
    return device.services().filter(function (srv) {
      return !serviceFilter || serviceFilter(srv);
    });
  });
  var theme = Object(useTheme["a" /* default */])();
  var showActions = Object(useMediaQuery["a" /* default */])(theme.breakpoints.up("sm"));
  var dropped = Object(useChange["a" /* default */])(device.qos, function (qos) {
    return qos.dropped;
  });
  var serviceNames = Object(utils["s" /* ellipseJoin */])(services.filter(function (service) {
    return service.serviceClass !== constants["Gd" /* SRV_CTRL */] && service.serviceClass !== constants["Td" /* SRV_LOGGER */];
  }).map(function (service) {
    return service.name;
  }), 18);
  var readingRegister = (_services$find = services.find(function (srv) {
    return srv.readingRegister;
  })) === null || _services$find === void 0 ? void 0 : _services$find.readingRegister;
  var reading = Object(useRegisterValue["b" /* useRegisterHumanValue */])(readingRegister);
  var alert = lost ? "Lost device..." : dropped > 2 ? dropped + " lost" : undefined;
  var labelInfo = [!!dropped && dropped + " lost", reading, serviceNames].filter(function (r) {
    return !!r;
  }).join(", ");

  var handleChecked = function handleChecked(c) {
    return setChecked(id, c);
  };

  return /*#__PURE__*/react_default.a.createElement(StyledTreeItem, {
    nodeId: id,
    labelText: name,
    labelInfo: labelInfo,
    alert: alert,
    kind: kind,
    checked: (checked === null || checked === void 0 ? void 0 : checked.indexOf(id)) > -1,
    setChecked: checkboxes && checkboxes.indexOf("device") > -1 && setChecked && handleChecked,
    actions: showActions && /*#__PURE__*/react_default.a.createElement(DeviceActions["a" /* default */], {
      device: device,
      showReset: true
    })
  }, services === null || services === void 0 ? void 0 : services.map(function (service) {
    return /*#__PURE__*/react_default.a.createElement(ServiceTreeItem, Object.assign({
      key: service.id,
      service: service,
      checked: checked,
      setChecked: setChecked,
      checkboxes: checkboxes
    }, other));
  }));
}

function ServiceTreeItem(props) {
  var service = props.service,
      checked = props.checked,
      setChecked = props.setChecked,
      checkboxes = props.checkboxes,
      registerFilter = props.registerFilter,
      eventFilter = props.eventFilter,
      other = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["service", "checked", "setChecked", "checkboxes", "registerFilter", "eventFilter"]);

  var specification = service.specification;
  var showSpecificationAction = false;
  var id = service.id;
  var open = (checked === null || checked === void 0 ? void 0 : checked.indexOf(id)) > -1;
  var packets = specification === null || specification === void 0 ? void 0 : specification.packets;
  var registers = packets === null || packets === void 0 ? void 0 : packets.filter(spec["s" /* isRegister */]).map(function (info) {
    return service.register(info.identifier);
  }).filter(function (reg) {
    return !registerFilter || registerFilter(reg);
  }).sort(function (l, r) {
    return l.name.localeCompare(r.name);
  });
  var events = packets === null || packets === void 0 ? void 0 : packets.filter(spec["j" /* isEvent */]).map(function (info) {
    return service.event(info.identifier);
  }).filter(function (ev) {
    return !eventFilter || eventFilter(ev);
  });
  var readingRegister = service.readingRegister;
  var reading = Object(useRegisterValue["b" /* useRegisterHumanValue */])(readingRegister);
  var instanceName = Object(useRegisterValue["d" /* useRegisterStringValue */])(service.register(constants["m" /* BaseReg */].InstanceName));
  var name = service.name + (instanceName ? " " + instanceName : "");
  var theme = Object(useTheme["a" /* default */])();
  var mobile = Object(useMediaQuery["a" /* default */])(theme.breakpoints.down(layout["c" /* MOBILE_BREAKPOINT */]));

  var _useContext = Object(react["useContext"])(AppContext["c" /* default */]),
      setDrawerType = _useContext.setDrawerType;

  var handleSpecClick = function handleSpecClick() {
    console.log("spec click", {
      mobile: mobile
    });
    if (mobile) setDrawerType(AppContext["b" /* DrawerType */].None);
  };

  var handleChecked = function handleChecked(c) {
    return setChecked(id, c);
  };

  return /*#__PURE__*/react_default.a.createElement(StyledTreeItem, {
    nodeId: id,
    labelText: name,
    labelInfo: reading,
    kind: "service",
    checked: open,
    setChecked: (checkboxes === null || checkboxes === void 0 ? void 0 : checkboxes.indexOf("service")) > -1 && setChecked && handleChecked,
    actions: showSpecificationAction ? /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
      color: "inherit",
      to: "/services/" + specification.shortId + "/",
      "aria-label": "Open specification",
      onClick: handleSpecClick
    }, /*#__PURE__*/react_default.a.createElement(Launch_default.a, {
      fontSize: "small"
    })) : undefined
  }, registers === null || registers === void 0 ? void 0 : registers.map(function (register) {
    return /*#__PURE__*/react_default.a.createElement(RegisterTreeItem, Object.assign({
      key: register.id,
      register: register,
      checked: checked,
      setChecked: setChecked,
      checkboxes: checkboxes
    }, other));
  }), events === null || events === void 0 ? void 0 : events.map(function (event) {
    return /*#__PURE__*/react_default.a.createElement(EventTreeItem, Object.assign({
      key: event.id,
      event: event,
      checked: checked,
      setChecked: setChecked,
      checkboxes: checkboxes
    }, other));
  }));
}

function RegisterTreeItem(props) {
  var register = props.register,
      checked = props.checked,
      setChecked = props.setChecked,
      checkboxes = props.checkboxes;
  var specification = register.specification,
      id = register.id;

  var _useState = Object(react["useState"])(register.lastGetAttempts),
      attempts = _useState[0],
      setAttempts = _useState[1];

  var optional = !!(specification !== null && specification !== void 0 && specification.optional);
  var failedGet = attempts > 2;
  var labelText = "" + ((specification === null || specification === void 0 ? void 0 : specification.name) || register.id) + (optional ? "?" : "");
  var humanValue = Object(useRegisterValue["b" /* useRegisterHumanValue */])(register);
  Object(react["useEffect"])(function () {
    return register === null || register === void 0 ? void 0 : register.subscribe(constants["sb" /* GET_ATTEMPT */], function () {
      setAttempts(register.lastGetAttempts);
    });
  }, [register]);

  var handleChecked = function handleChecked(c) {
    setChecked(id, c);
  }; // if register is optional and no data, hide


  if (optional && failedGet && humanValue === undefined) return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null);
  return /*#__PURE__*/react_default.a.createElement(StyledTreeItem, {
    nodeId: id,
    labelText: labelText,
    labelInfo: humanValue || attempts > 0 && "#" + attempts || "",
    kind: (specification === null || specification === void 0 ? void 0 : specification.kind) || "register",
    alert: failedGet && !optional && humanValue === undefined && "???",
    checked: (checked === null || checked === void 0 ? void 0 : checked.indexOf(id)) > -1,
    setChecked: (checkboxes === null || checkboxes === void 0 ? void 0 : checkboxes.indexOf("register")) > -1 && setChecked && handleChecked
  });
}

function EventTreeItem(props) {
  var event = props.event,
      checked = props.checked,
      setChecked = props.setChecked,
      checkboxes = props.checkboxes;
  var specification = event.specification,
      id = event.id;
  var count = Object(useEventCount["a" /* default */])(event);

  var handleChecked = function handleChecked(c) {
    setChecked(id, c);
  };

  return /*#__PURE__*/react_default.a.createElement(StyledTreeItem, {
    nodeId: id,
    labelText: (specification === null || specification === void 0 ? void 0 : specification.name) || event.id,
    labelInfo: (count || "") + "",
    kind: "event",
    checked: (checked === null || checked === void 0 ? void 0 : checked.indexOf(id)) > -1,
    setChecked: (checkboxes === null || checkboxes === void 0 ? void 0 : checkboxes.indexOf("event")) > -1 && setChecked && handleChecked
  });
}

var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    root: {
      flexGrow: 1
    },
    margins: {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5)
    }
  });
});
function JDomTreeView(props) {
  var defaultExpanded = props.defaultExpanded,
      defaultSelected = props.defaultSelected,
      defaultChecked = props.defaultChecked,
      onChecked = props.onChecked,
      onToggle = props.onToggle,
      onSelect = props.onSelect,
      checkboxes = props.checkboxes,
      dashboard = props.dashboard,
      deviceFilter = props.deviceFilter,
      other = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["defaultExpanded", "defaultSelected", "defaultChecked", "onChecked", "onToggle", "onSelect", "checkboxes", "dashboard", "deviceFilter"]);

  var classes = useStyles();

  var _useState2 = Object(react["useState"])(defaultExpanded || []),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _useState3 = Object(react["useState"])(defaultSelected || []),
      selected = _useState3[0],
      setSelected = _useState3[1];

  var _useState4 = Object(react["useState"])(defaultChecked || []),
      checked = _useState4[0],
      setChecked = _useState4[1];

  var _useContext2 = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext2.bus;

  var devices = Object(useChange["a" /* default */])(bus, function () {
    return bus.devices().filter(function (dev) {
      return !deviceFilter || deviceFilter(dev);
    });
  });

  var handleToggle = function handleToggle(event, nodeIds) {
    setExpanded(nodeIds);
    if (onToggle) onToggle(nodeIds);
  };

  var handleSelect = function handleSelect(event, nodeIds) {
    setSelected(nodeIds);
    if (onSelect) onSelect(nodeIds);
  };

  var handleChecked = function handleChecked(id, v) {
    var i = checked.indexOf(id);
    if (!v && i > -1) checked.splice(i, 1);else if (v && i < 0) checked.push(id);
    setChecked(checked);
    if (onChecked) onChecked(checked);
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(ConnectAlert["a" /* default */], null), /*#__PURE__*/react_default.a.createElement(esm_TreeView_TreeView, {
    className: Object(clsx_m["a" /* default */])(classes.root, classes.margins),
    defaultCollapseIcon: /*#__PURE__*/react_default.a.createElement(ArrowDropDown_default.a, null),
    defaultExpandIcon: /*#__PURE__*/react_default.a.createElement(ArrowRight_default.a, null),
    defaultEndIcon: /*#__PURE__*/react_default.a.createElement("div", {
      style: {
        width: 12
      }
    }),
    expanded: expanded,
    selected: selected,
    onNodeToggle: handleToggle,
    onNodeSelect: handleSelect
  }, devices === null || devices === void 0 ? void 0 : devices.map(function (device) {
    return /*#__PURE__*/react_default.a.createElement(DeviceTreeItem, Object.assign({
      key: device.id,
      device: device,
      checked: checked,
      setChecked: handleChecked,
      checkboxes: checkboxes,
      expanded: expanded,
      selected: selected,
      dashboard: dashboard
    }, other));
  })));
}

/***/ }),

/***/ "3SIa":
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
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
}), 'NotificationsNone');

exports.default = _default;

/***/ }),

/***/ "4hqb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useFormControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var FormControlContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]();

if (false) {}

function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](FormControlContext);
}
/* harmony default export */ __webpack_exports__["a"] = (FormControlContext);

/***/ }),

/***/ "6IG3":
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

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "7.2",
  cy: "14.4",
  r: "3.2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "14.8",
  cy: "18",
  r: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "15.2",
  cy: "8.8",
  r: "4.8"
})), 'BubbleChart');

exports.default = _default;

/***/ }),

/***/ "8dGm":
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
  d: "M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"
}), 'Reply');

exports.default = _default;

/***/ }),

/***/ "9pTp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectAlert; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("R/WZ");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZBNC");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hlFM");
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FQT7");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Z8Ma");
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("yNWl");
/* harmony import */ var _jacdac_ConnectButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nyfv");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Bf0q");
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("IzqI");
// tslint:disable-next-line: no-submodule-imports
 // tslint:disable-next-line: no-submodule-imports








var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    button: {
      marginLeft: theme.spacing(2)
    }
  });
});

function NoSsrConnectAlert(props) {
  var classes = useStyles();
  var serviceClass = props.serviceClass;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_jacdac_Context__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]),
      bus = _useContext.bus;

  var transports = bus.transports;
  var devices = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(bus, function (b) {
    return b.devices({
      serviceClass: serviceClass
    });
  });
  var spec = Object(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_5__[/* serviceSpecificationFromClassIdentifier */ "D"])(serviceClass);
  var disconnected = Object(_jacdac_useChange__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(bus, function (t) {
    return t.disconnected;
  });
  if (!(devices !== null && devices !== void 0 && devices.length) && disconnected) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    displayPrint: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    severity: "info",
    closeable: true
  }, !spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "Did you connect your device?"), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "Did you connect a ", spec.name, " device?"), transports.map(function (transport) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_jacdac_ConnectButton__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      key: transport.type,
      transport: transport,
      className: classes.button,
      full: true,
      transparent: true
    });
  })));
  return null;
}

function ConnectAlert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(NoSsrConnectAlert, props));
}

/***/ }),

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

/***/ "B2Qq":
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
  d: "M7 2v11h3v9l7-12h-4l4-8z"
}), 'FlashOn');

exports.default = _default;

/***/ }),

/***/ "B6OW":
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
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown');

exports.default = _default;

/***/ }),

/***/ "DgOb":
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
  d: "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
}), 'Computer');

exports.default = _default;

/***/ }),

/***/ "EHdT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useFormControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormControlContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4hqb");


function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_FormControlContext__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
}

/***/ }),

/***/ "F3CG":
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
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Create');

exports.default = _default;

/***/ }),

/***/ "FgCT":
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
  d: "M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z"
}), 'ConfirmationNumber');

exports.default = _default;

/***/ }),

/***/ "HK/0":
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
  d: "M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"
}), 'DeviceHub');

exports.default = _default;

/***/ }),

/***/ "Mtft":
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
  d: "M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"
}), 'DataUsage');

exports.default = _default;

/***/ }),

/***/ "NHHF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return KindIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return kindName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allKinds; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("F3CG");
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Y0qX");
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_CallToAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tBi4");
/* harmony import */ var _material_ui_icons_CallToAction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CallToAction__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_FlashOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("B2Qq");
/* harmony import */ var _material_ui_icons_FlashOn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FlashOn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_DataUsage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Mtft");
/* harmony import */ var _material_ui_icons_DataUsage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DataUsage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("8dGm");
/* harmony import */ var _material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_DeviceUnknown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("YNWc");
/* harmony import */ var _material_ui_icons_DeviceUnknown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeviceUnknown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_DeviceHub__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("HK/0");
/* harmony import */ var _material_ui_icons_DeviceHub__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeviceHub__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("6IG3");
/* harmony import */ var _material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("DgOb");
/* harmony import */ var _material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_BlurLinear__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("bhb1");
/* harmony import */ var _material_ui_icons_BlurLinear__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BlurLinear__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ConfirmationNumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("FgCT");
/* harmony import */ var _material_ui_icons_ConfirmationNumber__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ConfirmationNumber__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("3SIa");
/* harmony import */ var _material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("oTnw");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("ZfHV");
/* harmony import */ var _icons_JacdacIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("w8dJ");
 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name




function KindIcon(props) {
  var kind = props.kind,
      className = props.className;
  var icon;

  switch (kind) {
    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_RO */ "nc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DataUsage__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_RW */ "oc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_ANNOUNCE */ "mc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* CONST_NODE_NAME */ "K"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* COMMAND_NODE_NAME */ "G"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CallToAction__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* EVENT_NODE_NAME */ "nb"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_FlashOn__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* REPORT_NODE_NAME */ "Uc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* BUS_NODE_NAME */ "l"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DeviceHub__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* DEVICE_NODE_NAME */ "eb"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_JacdacIcon__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* VIRTUAL_DEVICE_NODE_NAME */ "if"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* SERVICE_NODE_NAME */ "sd"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PIPE_NODE_NAME */ "zc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_BlurLinear__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PIPE_REPORT_NODE_NAME */ "Bc"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_BlurLinear__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* CRC_ACK_NODE_NAME */ "L"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ConfirmationNumber__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: className
      });
      break;

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* SERVICE_TEST_NODE_NAME */ "td"]:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_14___default.a, {
        className: className
      });
      break;

    default:
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DeviceUnknown__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: className
      });
      break;
  }

  return icon;
}
function kindName(kind) {
  switch (kind) {
    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_RO */ "nc"]:
      return "read only";

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_RW */ "oc"]:
      return "read write";

    case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* VIRTUAL_DEVICE_NODE_NAME */ "if"]:
      return "simulated device";

    default:
      return kind;
  }
}
function allKinds() {
  return [_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* REPORT_NODE_NAME */ "Uc"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_RW */ "oc"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* PACKET_KIND_RO */ "nc"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* CONST_NODE_NAME */ "K"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* EVENT_NODE_NAME */ "nb"], _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_15__[/* COMMAND_NODE_NAME */ "G"]];
}

/***/ }),

/***/ "U/xp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useEventCount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfHV");


function useEventCount(event) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(event.count),
      count = _useState[0],
      setCount = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return event.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* CHANGE */ "v"], function () {
      setCount(event.count);
    });
  }, [event]);
  return count;
}

/***/ }),

/***/ "UhlP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("iuhU");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__("ye/S");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__("NqtD");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useControlled.js
var useControlled = __webpack_require__("yCxk");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/useFormControl.js
var useFormControl = __webpack_require__("EHdT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__("PsDL");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/SwitchBase.js










var SwitchBase_styles = {
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

var SwitchBase_SwitchBase = /*#__PURE__*/react["forwardRef"](function SwitchBase(props, ref) {
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
      other = Object(objectWithoutProperties["a" /* default */])(props, ["autoFocus", "checked", "checkedIcon", "classes", "className", "defaultChecked", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"]);

  var _useControlled = Object(useControlled["a" /* default */])({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase',
    state: 'checked'
  }),
      _useControlled2 = Object(slicedToArray["a" /* default */])(_useControlled, 2),
      checked = _useControlled2[0],
      setCheckedState = _useControlled2[1];

  var muiFormControl = Object(useFormControl["a" /* default */])();

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
  return /*#__PURE__*/react["createElement"](IconButton["a" /* default */], Object(esm_extends["a" /* default */])({
    component: "span",
    className: Object(clsx_m["a" /* default */])(classes.root, className, checked && classes.checked, disabled && classes.disabled),
    disabled: disabled,
    tabIndex: null,
    role: undefined,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref: ref
  }, other), /*#__PURE__*/react["createElement"]("input", Object(esm_extends["a" /* default */])({
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

 false ? undefined : void 0;
/* harmony default export */ var internal_SwitchBase = (Object(withStyles["a" /* default */])(SwitchBase_styles, {
  name: 'PrivateSwitchBase'
})(SwitchBase_SwitchBase));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js

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
          backgroundColor: Object(colorManipulator["c" /* fade */])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
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
          backgroundColor: Object(colorManipulator["c" /* fade */])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
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
var Switch_Switch = /*#__PURE__*/react["forwardRef"](function Switch(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'secondary' : _props$color,
      _props$edge = props.edge,
      edge = _props$edge === void 0 ? false : _props$edge,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "className", "color", "edge", "size"]);

  var icon = /*#__PURE__*/react["createElement"]("span", {
    className: classes.thumb
  });
  return /*#__PURE__*/react["createElement"]("span", {
    className: Object(clsx_m["a" /* default */])(classes.root, className, {
      'start': classes.edgeStart,
      'end': classes.edgeEnd
    }[edge], size === "small" && classes["size".concat(Object(capitalize["a" /* default */])(size))])
  }, /*#__PURE__*/react["createElement"](internal_SwitchBase, Object(esm_extends["a" /* default */])({
    type: "checkbox",
    icon: icon,
    checkedIcon: icon,
    classes: {
      root: Object(clsx_m["a" /* default */])(classes.switchBase, classes["color".concat(Object(capitalize["a" /* default */])(color))]),
      input: classes.input,
      checked: classes.checked,
      disabled: classes.disabled
    },
    ref: ref
  }, other)), /*#__PURE__*/react["createElement"]("span", {
    className: classes.track
  }));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Switch_Switch = __webpack_exports__["a"] = (Object(withStyles["a" /* default */])(Switch_styles, {
  name: 'MuiSwitch'
})(Switch_Switch));

/***/ }),

/***/ "Y0qX":
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
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
}), 'Lock');

exports.default = _default;

/***/ }),

/***/ "YNWc":
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
  d: "M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zM12 6.72c-1.96 0-3.5 1.52-3.5 3.47h1.75c0-.93.82-1.75 1.75-1.75s1.75.82 1.75 1.75c0 1.75-2.63 1.57-2.63 4.45h1.76c0-1.96 2.62-2.19 2.62-4.45 0-1.96-1.54-3.47-3.5-3.47zm-.88 8.8h1.76v1.76h-1.76z"
}), 'DeviceUnknown');

exports.default = _default;

/***/ }),

/***/ "ZqJb":
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
  d: "M10 17l5-5-5-5v10z"
}), 'ArrowRight');

exports.default = _default;

/***/ }),

/***/ "bhb1":
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
  d: "M5 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM3 21h18v-2H3v2zM5 9.5c.83 0 1.5-.67 1.5-1.5S5.83 6.5 5 6.5 3.5 7.17 3.5 8 4.17 9.5 5 9.5zm0 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM3 3v2h18V3H3zm14 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm0 4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM13 9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"
}), 'BlurLinear');

exports.default = _default;

/***/ }),

/***/ "dYIP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useRegisterHumanValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useRegisterIntValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useRegisterUnpackedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useRegisterStringValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useRegisterBoolValue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfHV");


function useRegisterHumanValue(register) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(register === null || register === void 0 ? void 0 : register.humanValue),
      value = _useState[0],
      setValue = _useState[1]; // update value


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* REPORT_UPDATE */ "Wc"], function () {
      setValue(register === null || register === void 0 ? void 0 : register.humanValue);
    });
  }, [register]);
  return value;
}
function useRegisterIntValue(register) {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(register === null || register === void 0 ? void 0 : register.intValue),
      value = _useState2[0],
      setValue = _useState2[1]; // update value


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* REPORT_UPDATE */ "Wc"], function () {
      setValue(register === null || register === void 0 ? void 0 : register.intValue);
    });
  }, [register]);
  return value;
}
function useRegisterUnpackedValue(register) {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(register === null || register === void 0 ? void 0 : register.unpackedValue),
      value = _useState3[0],
      setValue = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* REPORT_UPDATE */ "Wc"], function () {
      setValue(register === null || register === void 0 ? void 0 : register.unpackedValue);
    });
  }, [register]);
  return value || [];
}
function useRegisterStringValue(register) {
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(register === null || register === void 0 ? void 0 : register.stringValue),
      value = _useState4[0],
      setValue = _useState4[1]; // update value


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* REPORT_UPDATE */ "Wc"], function () {
      setValue(register === null || register === void 0 ? void 0 : register.stringValue);
    });
  }, [register]);
  return value;
}
function useRegisterBoolValue(register) {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(register === null || register === void 0 ? void 0 : register.boolValue),
      value = _useState5[0],
      setValue = _useState5[1]; // update value


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* REPORT_UPDATE */ "Wc"], function () {
      setValue(register === null || register === void 0 ? void 0 : register.boolValue);
    });
  }, [register]);
  return value;
}

/***/ }),

/***/ "oTnw":
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckCircle');

exports.default = _default;

/***/ }),

/***/ "tBi4":
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
  d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z"
}), 'CallToAction');

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=82-116271452c001cd75c93.js.map