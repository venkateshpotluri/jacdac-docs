(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "oijz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toc; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("R/WZ");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZBNC");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tr08");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tVbE");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ofer");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("hlFM");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("eD//");
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4+mf");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("IsqK");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("2K/c");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Wbzz");


 // tslint:disable-next-line: no-submodule-imports




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper
    }
  });
});

function treeifyToc(toc) {
  var tree = toc.slice(0); // reconstruct tree

  var tocNodes = {};
  tree.forEach(function (node, index) {
    var k = node.path.replace(/\/$/, '');

    if (tocNodes[k]) {
      tree[index] = undefined;
    } else tocNodes[k] = node;
  });
  tree = tree.filter(function (node) {
    return !!node;
  });
  tree.forEach(function (node, index) {
    var parts = node.path.replace(/\/$/, '').split("/");
    parts.pop();

    while (parts.length) {
      var parentPath = "" + parts.join("/");
      var parent = tocNodes[parentPath];

      if (parent) {
        if (!parent.children) parent.children = [];
        parent.children.push(node);
        tree[index] = undefined;
        break;
      }

      parts.pop();
    }
  });
  var r = {
    tree: tree.filter(function (node) {
      return !!node;
    }),
    nodes: tocNodes
  };

  function sortNodes(nodes) {
    nodes.sort(function (l, r) {
      return l.order - r.order;
    });
    nodes.forEach(function (node) {
      return node.children && sortNodes(node.children);
    });
  }

  sortNodes(r.tree);
  return r;
}

function Toc(props) {
  var pagePath = props.pagePath;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_10__[/* default */ "c"]),
      setDrawerType = _useContext.setDrawerType;

  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
  var classes = useStyles();
  var data = Object(gatsby__WEBPACK_IMPORTED_MODULE_11__["useStaticQuery"])("1044929081");
  /*
      site {
        siteMetadata {
          title
        }
    }
  
    allServicesJson {
        nodes {
          name
          shortId
        }
      } 
    allDevicesJson {
        nodes {
          id
          name
        }
      }
   */

  var handleClick = function handleClick() {
    setDrawerType(_AppContext__WEBPACK_IMPORTED_MODULE_10__[/* DrawerType */ "b"].None);
  };

  var tree = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    // convert pages into tree
    var toc = [{
      name: "Home",
      path: "/",
      order: 0
    }, {
      name: "Dashboard",
      path: "/dashboard/",
      order: 0.5
    }, {
      name: "Reference",
      path: "/reference/",
      order: 1
    }, {
      name: "Services",
      path: "/services/",
      order: 0.6
    }, {
      name: "Devices",
      path: "/devices/",
      order: 0.7
    }, {
      name: "Tools",
      path: "/tools/",
      order: 4
    }, {
      name: "Clients",
      path: "/clients/",
      order: 5
    }];
    data.allMdx.edges.map(function (node) {
      return node.node;
    }).filter(function (node) {
      var _node$frontmatter;

      return !!((_node$frontmatter = node.frontmatter) !== null && _node$frontmatter !== void 0 && _node$frontmatter.title) || !!node.headings.length && !/404/.test(node.headings[0].value);
    }).filter(function (node) {
      var _node$frontmatter2;

      return !((_node$frontmatter2 = node.frontmatter) !== null && _node$frontmatter2 !== void 0 && _node$frontmatter2.hideToc);
    }).map(function (node) {
      var _node$frontmatter3, _node$frontmatter4, _node$frontmatter5;

      var r = {
        name: ((_node$frontmatter3 = node.frontmatter) === null || _node$frontmatter3 === void 0 ? void 0 : _node$frontmatter3.title) || node.headings[0].value,
        path: node.fields.slug,
        order: ((_node$frontmatter4 = node.frontmatter) === null || _node$frontmatter4 === void 0 ? void 0 : _node$frontmatter4.order) !== undefined ? (_node$frontmatter5 = node.frontmatter) === null || _node$frontmatter5 === void 0 ? void 0 : _node$frontmatter5.order : 50
      };
      return r;
    }).forEach(function (node) {
      return toc.push(node);
    });
    /*
    data.allServicesJson.nodes.map(node => {
      return {
        name: node.name,
        path: `/services/${node.shortId}/`
      }
    }).forEach(node => toc.push(node))
     data.allDevicesJson.nodes.map(node => {
      return {
        name: node.name,
        path: `/devices/${identifierToUrlPath(node.id)}/`
      }
    }).forEach(node => toc.push(node));
    */

    var _treeifyToc = treeifyToc(toc),
        tree = _treeifyToc.tree;

    return tree;
  }, []);

  function TocListItem(props) {
    var entry = props.entry,
        level = props.level;
    var path = entry.path,
        children = entry.children,
        name = entry.name;
    var selected = pagePath === path;
    var sub = level === 1 || !!children && !!children.length;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      button: true,
      selected: selected,
      key: 'tocitem' + path
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_8__["Link"], {
      style: {
        color: theme.palette.text.primary
      },
      onClick: handleClick,
      to: path
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      primary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        variant: sub ? "button" : "caption"
      }, name)
    }))), sub && !!(children !== null && children !== void 0 && children.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      ml: level > 0 ? 1 : 0
    }, children === null || children === void 0 ? void 0 : children.map(function (child) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TocListItem, {
        key: 'tocitem' + child.path,
        entry: child,
        level: level + 1
      });
    })));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    dense: true,
    className: classes.root
  }, tree.map(function (entry, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TocListItem, {
      key: i,
      entry: entry,
      level: 0
    });
  }));
}

/***/ })

}]);
//# sourceMappingURL=67-52caf041c47beb970ff5.js.map