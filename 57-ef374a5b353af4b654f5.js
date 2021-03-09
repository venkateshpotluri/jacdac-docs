(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

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

// EXTERNAL MODULE: ./src/components/useDeviceName.ts
var useDeviceName = __webpack_require__("aJrF");

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

// EXTERNAL MODULE: ./src/components/AppContext.tsx + 1 modules
var AppContext = __webpack_require__("2K/c");

// EXTERNAL MODULE: ./src/components/layout.tsx + 42 modules
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
  var lost = Object(useEventRaised["a" /* default */])([constants["Lb" /* LOST */], constants["pb" /* FOUND */]], device, function (dev) {
    return !!(dev !== null && dev !== void 0 && dev.lost);
  });
  var services = Object(useChange["a" /* default */])(device, function () {
    return device.services().filter(function (srv) {
      return !serviceFilter || serviceFilter(srv);
    });
  });
  var theme = Object(useTheme["a" /* default */])();
  var showActions = Object(useMediaQuery["a" /* default */])(theme.breakpoints.up('sm'));
  var dropped = Object(useChange["a" /* default */])(device.qos, function (qos) {
    return qos.dropped;
  });
  var serviceNames = Object(utils["s" /* ellipseJoin */])(services.filter(function (service) {
    return service.serviceClass !== constants["Ad" /* SRV_CTRL */] && service.serviceClass !== constants["Nd" /* SRV_LOGGER */];
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
  }).join(', ');

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
  var registers = packets === null || packets === void 0 ? void 0 : packets.filter(spec["t" /* isRegister */]).map(function (info) {
    return service.register(info.identifier);
  }).filter(function (reg) {
    return !registerFilter || registerFilter(reg);
  }).sort(function (l, r) {
    return l.name.localeCompare(r.name);
  });
  var events = packets === null || packets === void 0 ? void 0 : packets.filter(spec["k" /* isEvent */]).map(function (info) {
    return service.event(info.identifier);
  }).filter(function (ev) {
    return !eventFilter || eventFilter(ev);
  });
  var readingRegister = service.readingRegister;
  var reading = Object(useRegisterValue["b" /* useRegisterHumanValue */])(readingRegister);
  var instanceName = Object(useRegisterValue["d" /* useRegisterStringValue */])(service.register(constants["j" /* BaseReg */].InstanceName));
  var name = service.name + (instanceName ? " " + instanceName : '');
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
    return register === null || register === void 0 ? void 0 : register.subscribe(constants["qb" /* GET_ATTEMPT */], function () {
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

/***/ })

}]);
//# sourceMappingURL=57-ef374a5b353af4b654f5.js.map