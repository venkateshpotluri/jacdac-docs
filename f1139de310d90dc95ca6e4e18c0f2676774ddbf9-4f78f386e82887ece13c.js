(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[115],{

/***/ 25297:
/***/ (function(module, exports) {

//     JavaScript Expression Parser (JSEP) 0.4.0
//     JSEP may be freely distributed under the MIT License
//     https://ericsmekens.github.io/jsep/

/*global module: true, exports: true, console: true */
(function (root) {
  'use strict'; // Node Types
  // ----------
  // This is the full set of types that any JSEP node can be.
  // Store them here to save space when minified

  var COMPOUND = 'Compound',
      IDENTIFIER = 'Identifier',
      MEMBER_EXP = 'MemberExpression',
      LITERAL = 'Literal',
      THIS_EXP = 'ThisExpression',
      CALL_EXP = 'CallExpression',
      UNARY_EXP = 'UnaryExpression',
      BINARY_EXP = 'BinaryExpression',
      LOGICAL_EXP = 'LogicalExpression',
      CONDITIONAL_EXP = 'ConditionalExpression',
      ARRAY_EXP = 'ArrayExpression',
      PERIOD_CODE = 46,
      // '.'
  COMMA_CODE = 44,
      // ','
  SQUOTE_CODE = 39,
      // single quote
  DQUOTE_CODE = 34,
      // double quotes
  OPAREN_CODE = 40,
      // (
  CPAREN_CODE = 41,
      // )
  OBRACK_CODE = 91,
      // [
  CBRACK_CODE = 93,
      // ]
  QUMARK_CODE = 63,
      // ?
  SEMCOL_CODE = 59,
      // ;
  COLON_CODE = 58,
      // :
  throwError = function throwError(message, index) {
    var error = new Error(message + ' at character ' + index);
    error.index = index;
    error.description = message;
    throw error;
  },
      // Operations
  // ----------
  // Set `t` to `true` to save space (when minified, not gzipped)
  t = true,
      // Use a quickly-accessible map to store all of the unary operators
  // Values are set to `true` (it really doesn't matter)
  unary_ops = {
    '-': t,
    '!': t,
    '~': t,
    '+': t
  },
      // Also use a map for the binary operations but set their values to their
  // binary precedence for quick reference:
  // see [Order of operations](http://en.wikipedia.org/wiki/Order_of_operations#Programming_language)
  binary_ops = {
    '||': 1,
    '&&': 2,
    '|': 3,
    '^': 4,
    '&': 5,
    '==': 6,
    '!=': 6,
    '===': 6,
    '!==': 6,
    '<': 7,
    '>': 7,
    '<=': 7,
    '>=': 7,
    '<<': 8,
    '>>': 8,
    '>>>': 8,
    '+': 9,
    '-': 9,
    '*': 10,
    '/': 10,
    '%': 10
  },
      // Additional valid identifier chars, apart from a-z, A-Z and 0-9 (except on the starting char)
  additional_identifier_chars = {
    '$': t,
    '_': t
  },
      // Get return the longest key length of any object
  getMaxKeyLen = function getMaxKeyLen(obj) {
    var max_len = 0,
        len;

    for (var key in obj) {
      if ((len = key.length) > max_len && obj.hasOwnProperty(key)) {
        max_len = len;
      }
    }

    return max_len;
  },
      max_unop_len = getMaxKeyLen(unary_ops),
      max_binop_len = getMaxKeyLen(binary_ops),
      // Literals
  // ----------
  // Store the values to return for the various literals we may encounter
  literals = {
    'true': true,
    'false': false,
    'null': null
  },
      // Except for `this`, which is special. This could be changed to something like `'self'` as well
  this_str = 'this',
      // Returns the precedence of a binary operator or `0` if it isn't a binary operator
  binaryPrecedence = function binaryPrecedence(op_val) {
    return binary_ops[op_val] || 0;
  },
      // Utility function (gets called from multiple places)
  // Also note that `a && b` and `a || b` are *logical* expressions, not binary expressions
  createBinaryExpression = function createBinaryExpression(operator, left, right) {
    var type = operator === '||' || operator === '&&' ? LOGICAL_EXP : BINARY_EXP;
    return {
      type: type,
      operator: operator,
      left: left,
      right: right
    };
  },
      // `ch` is a character code in the next three functions
  isDecimalDigit = function isDecimalDigit(ch) {
    return ch >= 48 && ch <= 57; // 0...9
  },
      isIdentifierStart = function isIdentifierStart(ch) {
    return ch >= 65 && ch <= 90 || // A...Z
    ch >= 97 && ch <= 122 || // a...z
    ch >= 128 && !binary_ops[String.fromCharCode(ch)] || // any non-ASCII that is not an operator
    additional_identifier_chars.hasOwnProperty(String.fromCharCode(ch)); // additional characters
  },
      isIdentifierPart = function isIdentifierPart(ch) {
    return ch >= 65 && ch <= 90 || // A...Z
    ch >= 97 && ch <= 122 || // a...z
    ch >= 48 && ch <= 57 || // 0...9
    ch >= 128 && !binary_ops[String.fromCharCode(ch)] || // any non-ASCII that is not an operator
    additional_identifier_chars.hasOwnProperty(String.fromCharCode(ch)); // additional characters
  },
      // Parsing
  // -------
  // `expr` is a string with the passed in expression
  jsep = function jsep(expr) {
    // `index` stores the character number we are currently at while `length` is a constant
    // All of the gobbles below will modify `index` as we move along
    var index = 0,
        charAtFunc = expr.charAt,
        charCodeAtFunc = expr.charCodeAt,
        exprI = function exprI(i) {
      return charAtFunc.call(expr, i);
    },
        exprICode = function exprICode(i) {
      return charCodeAtFunc.call(expr, i);
    },
        length = expr.length,
        // Push `index` up to the next non-space character
    gobbleSpaces = function gobbleSpaces() {
      var ch = exprICode(index); // space or tab

      while (ch === 32 || ch === 9 || ch === 10 || ch === 13) {
        ch = exprICode(++index);
      }
    },
        // The main parsing function. Much of this code is dedicated to ternary expressions
    gobbleExpression = function gobbleExpression() {
      var test = gobbleBinaryExpression(),
          consequent,
          alternate;
      gobbleSpaces();

      if (exprICode(index) === QUMARK_CODE) {
        // Ternary expression: test ? consequent : alternate
        index++;
        consequent = gobbleExpression();

        if (!consequent) {
          throwError('Expected expression', index);
        }

        gobbleSpaces();

        if (exprICode(index) === COLON_CODE) {
          index++;
          alternate = gobbleExpression();

          if (!alternate) {
            throwError('Expected expression', index);
          }

          return {
            type: CONDITIONAL_EXP,
            test: test,
            consequent: consequent,
            alternate: alternate
          };
        } else {
          throwError('Expected :', index);
        }
      } else {
        return test;
      }
    },
        // Search for the operation portion of the string (e.g. `+`, `===`)
    // Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
    // and move down from 3 to 2 to 1 character until a matching binary operation is found
    // then, return that binary operation
    gobbleBinaryOp = function gobbleBinaryOp() {
      gobbleSpaces();
      var biop,
          to_check = expr.substr(index, max_binop_len),
          tc_len = to_check.length;

      while (tc_len > 0) {
        // Don't accept a binary op when it is an identifier.
        // Binary ops that start with a identifier-valid character must be followed
        // by a non identifier-part valid character
        if (binary_ops.hasOwnProperty(to_check) && (!isIdentifierStart(exprICode(index)) || index + to_check.length < expr.length && !isIdentifierPart(exprICode(index + to_check.length)))) {
          index += tc_len;
          return to_check;
        }

        to_check = to_check.substr(0, --tc_len);
      }

      return false;
    },
        // This function is responsible for gobbling an individual expression,
    // e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
    gobbleBinaryExpression = function gobbleBinaryExpression() {
      var ch_i, node, biop, prec, stack, biop_info, left, right, i, cur_biop; // First, try to get the leftmost thing
      // Then, check to see if there's a binary operator operating on that leftmost thing

      left = gobbleToken();
      biop = gobbleBinaryOp(); // If there wasn't a binary operator, just return the leftmost node

      if (!biop) {
        return left;
      } // Otherwise, we need to start a stack to properly place the binary operations in their
      // precedence structure


      biop_info = {
        value: biop,
        prec: binaryPrecedence(biop)
      };
      right = gobbleToken();

      if (!right) {
        throwError("Expected expression after " + biop, index);
      }

      stack = [left, biop_info, right]; // Properly deal with precedence using [recursive descent](http://www.engr.mun.ca/~theo/Misc/exp_parsing.htm)

      while (biop = gobbleBinaryOp()) {
        prec = binaryPrecedence(biop);

        if (prec === 0) {
          break;
        }

        biop_info = {
          value: biop,
          prec: prec
        };
        cur_biop = biop; // Reduce: make a binary expression from the three topmost entries.

        while (stack.length > 2 && prec <= stack[stack.length - 2].prec) {
          right = stack.pop();
          biop = stack.pop().value;
          left = stack.pop();
          node = createBinaryExpression(biop, left, right);
          stack.push(node);
        }

        node = gobbleToken();

        if (!node) {
          throwError("Expected expression after " + cur_biop, index);
        }

        stack.push(biop_info, node);
      }

      i = stack.length - 1;
      node = stack[i];

      while (i > 1) {
        node = createBinaryExpression(stack[i - 1].value, stack[i - 2], node);
        i -= 2;
      }

      return node;
    },
        // An individual part of a binary expression:
    // e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
    gobbleToken = function gobbleToken() {
      var ch, to_check, tc_len, node;
      gobbleSpaces();
      ch = exprICode(index);

      if (isDecimalDigit(ch) || ch === PERIOD_CODE) {
        // Char code 46 is a dot `.` which can start off a numeric literal
        return gobbleNumericLiteral();
      }

      if (ch === SQUOTE_CODE || ch === DQUOTE_CODE) {
        // Single or double quotes
        node = gobbleStringLiteral();
      } else if (ch === OBRACK_CODE) {
        node = gobbleArray();
      } else {
        to_check = expr.substr(index, max_unop_len);
        tc_len = to_check.length;

        while (tc_len > 0) {
          // Don't accept an unary op when it is an identifier.
          // Unary ops that start with a identifier-valid character must be followed
          // by a non identifier-part valid character
          if (unary_ops.hasOwnProperty(to_check) && (!isIdentifierStart(exprICode(index)) || index + to_check.length < expr.length && !isIdentifierPart(exprICode(index + to_check.length)))) {
            index += tc_len;
            return {
              type: UNARY_EXP,
              operator: to_check,
              argument: gobbleToken(),
              prefix: true
            };
          }

          to_check = to_check.substr(0, --tc_len);
        }

        if (isIdentifierStart(ch)) {
          node = gobbleIdentifier();
        } else if (ch === OPAREN_CODE) {
          // open parenthesis
          node = gobbleGroup();
        }
      }

      if (!node) {
        return false;
      }

      gobbleSpaces();
      ch = exprICode(index); // Gobble properties of of identifiers/strings/arrays/groups.
      // e.g. `foo`, `bar.baz`, `foo['bar'].baz`
      // It also gobbles function calls:
      // e.g. `Math.acos(obj.angle)`

      while (ch === PERIOD_CODE || ch === OBRACK_CODE || ch === OPAREN_CODE) {
        index++;

        if (ch === PERIOD_CODE) {
          gobbleSpaces();
          node = {
            type: MEMBER_EXP,
            computed: false,
            object: node,
            property: gobbleIdentifier()
          };
        } else if (ch === OBRACK_CODE) {
          node = {
            type: MEMBER_EXP,
            computed: true,
            object: node,
            property: gobbleExpression()
          };
          gobbleSpaces();
          ch = exprICode(index);

          if (ch !== CBRACK_CODE) {
            throwError('Unclosed [', index);
          }

          index++;
        } else if (ch === OPAREN_CODE) {
          // A function call is being made; gobble all the arguments
          node = {
            type: CALL_EXP,
            'arguments': gobbleArguments(CPAREN_CODE),
            callee: node
          };
        }

        gobbleSpaces();
        ch = exprICode(index);
      }

      return node;
    },
        // Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
    // keep track of everything in the numeric literal and then calling `parseFloat` on that string
    gobbleNumericLiteral = function gobbleNumericLiteral() {
      var number = '',
          ch,
          chCode;

      while (isDecimalDigit(exprICode(index))) {
        number += exprI(index++);
      }

      if (exprICode(index) === PERIOD_CODE) {
        // can start with a decimal marker
        number += exprI(index++);

        while (isDecimalDigit(exprICode(index))) {
          number += exprI(index++);
        }
      }

      ch = exprI(index);

      if (ch === 'e' || ch === 'E') {
        // exponent marker
        number += exprI(index++);
        ch = exprI(index);

        if (ch === '+' || ch === '-') {
          // exponent sign
          number += exprI(index++);
        }

        while (isDecimalDigit(exprICode(index))) {
          //exponent itself
          number += exprI(index++);
        }

        if (!isDecimalDigit(exprICode(index - 1))) {
          throwError('Expected exponent (' + number + exprI(index) + ')', index);
        }
      }

      chCode = exprICode(index); // Check to make sure this isn't a variable name that start with a number (123abc)

      if (isIdentifierStart(chCode)) {
        throwError('Variable names cannot start with a number (' + number + exprI(index) + ')', index);
      } else if (chCode === PERIOD_CODE) {
        throwError('Unexpected period', index);
      }

      return {
        type: LITERAL,
        value: parseFloat(number),
        raw: number
      };
    },
        // Parses a string literal, staring with single or double quotes with basic support for escape codes
    // e.g. `"hello world"`, `'this is\nJSEP'`
    gobbleStringLiteral = function gobbleStringLiteral() {
      var str = '',
          quote = exprI(index++),
          closed = false,
          ch;

      while (index < length) {
        ch = exprI(index++);

        if (ch === quote) {
          closed = true;
          break;
        } else if (ch === '\\') {
          // Check for all of the common escape codes
          ch = exprI(index++);

          switch (ch) {
            case 'n':
              str += '\n';
              break;

            case 'r':
              str += '\r';
              break;

            case 't':
              str += '\t';
              break;

            case 'b':
              str += '\b';
              break;

            case 'f':
              str += '\f';
              break;

            case 'v':
              str += '\x0B';
              break;

            default:
              str += ch;
          }
        } else {
          str += ch;
        }
      }

      if (!closed) {
        throwError('Unclosed quote after "' + str + '"', index);
      }

      return {
        type: LITERAL,
        value: str,
        raw: quote + str + quote
      };
    },
        // Gobbles only identifiers
    // e.g.: `foo`, `_value`, `$x1`
    // Also, this function checks if that identifier is a literal:
    // (e.g. `true`, `false`, `null`) or `this`
    gobbleIdentifier = function gobbleIdentifier() {
      var ch = exprICode(index),
          start = index,
          identifier;

      if (isIdentifierStart(ch)) {
        index++;
      } else {
        throwError('Unexpected ' + exprI(index), index);
      }

      while (index < length) {
        ch = exprICode(index);

        if (isIdentifierPart(ch)) {
          index++;
        } else {
          break;
        }
      }

      identifier = expr.slice(start, index);

      if (literals.hasOwnProperty(identifier)) {
        return {
          type: LITERAL,
          value: literals[identifier],
          raw: identifier
        };
      } else if (identifier === this_str) {
        return {
          type: THIS_EXP
        };
      } else {
        return {
          type: IDENTIFIER,
          name: identifier
        };
      }
    },
        // Gobbles a list of arguments within the context of a function call
    // or array literal. This function also assumes that the opening character
    // `(` or `[` has already been gobbled, and gobbles expressions and commas
    // until the terminator character `)` or `]` is encountered.
    // e.g. `foo(bar, baz)`, `my_func()`, or `[bar, baz]`
    gobbleArguments = function gobbleArguments(termination) {
      var ch_i,
          args = [],
          node,
          closed = false;
      var separator_count = 0;

      while (index < length) {
        gobbleSpaces();
        ch_i = exprICode(index);

        if (ch_i === termination) {
          // done parsing
          closed = true;
          index++;

          if (termination === CPAREN_CODE && separator_count && separator_count >= args.length) {
            throwError('Unexpected token ' + String.fromCharCode(termination), index);
          }

          break;
        } else if (ch_i === COMMA_CODE) {
          // between expressions
          index++;
          separator_count++;

          if (separator_count !== args.length) {
            // missing argument
            if (termination === CPAREN_CODE) {
              throwError('Unexpected token ,', index);
            } else if (termination === CBRACK_CODE) {
              for (var arg = args.length; arg < separator_count; arg++) {
                args.push(null);
              }
            }
          }
        } else {
          node = gobbleExpression();

          if (!node || node.type === COMPOUND) {
            throwError('Expected comma', index);
          }

          args.push(node);
        }
      }

      if (!closed) {
        throwError('Expected ' + String.fromCharCode(termination), index);
      }

      return args;
    },
        // Responsible for parsing a group of things within parentheses `()`
    // This function assumes that it needs to gobble the opening parenthesis
    // and then tries to gobble everything within that parenthesis, assuming
    // that the next thing it should see is the close parenthesis. If not,
    // then the expression probably doesn't have a `)`
    gobbleGroup = function gobbleGroup() {
      index++;
      var node = gobbleExpression();
      gobbleSpaces();

      if (exprICode(index) === CPAREN_CODE) {
        index++;
        return node;
      } else {
        throwError('Unclosed (', index);
      }
    },
        // Responsible for parsing Array literals `[1, 2, 3]`
    // This function assumes that it needs to gobble the opening bracket
    // and then tries to gobble the expressions as arguments.
    gobbleArray = function gobbleArray() {
      index++;
      return {
        type: ARRAY_EXP,
        elements: gobbleArguments(CBRACK_CODE)
      };
    },
        nodes = [],
        ch_i,
        node;

    while (index < length) {
      ch_i = exprICode(index); // Expressions can be separated by semicolons, commas, or just inferred without any
      // separators

      if (ch_i === SEMCOL_CODE || ch_i === COMMA_CODE) {
        index++; // ignore separators
      } else {
        // Try to gobble each expression individually
        if (node = gobbleExpression()) {
          nodes.push(node); // If we weren't able to find a binary expression and are out of room, then
          // the expression passed in probably has too much
        } else if (index < length) {
          throwError('Unexpected "' + exprI(index) + '"', index);
        }
      }
    } // If there's only one expression just try returning the expression


    if (nodes.length === 1) {
      return nodes[0];
    } else {
      return {
        type: COMPOUND,
        body: nodes
      };
    }
  }; // To be filled in by the template


  jsep.version = '0.4.0';

  jsep.toString = function () {
    return 'JavaScript Expression Parser (JSEP) v' + jsep.version;
  };
  /**
   * @method jsep.addUnaryOp
   * @param {string} op_name The name of the unary op to add
   * @return jsep
   */


  jsep.addUnaryOp = function (op_name) {
    max_unop_len = Math.max(op_name.length, max_unop_len);
    unary_ops[op_name] = t;
    return this;
  };
  /**
   * @method jsep.addBinaryOp
   * @param {string} op_name The name of the binary op to add
   * @param {number} precedence The precedence of the binary op (can be a float)
   * @return jsep
   */


  jsep.addBinaryOp = function (op_name, precedence) {
    max_binop_len = Math.max(op_name.length, max_binop_len);
    binary_ops[op_name] = precedence;
    return this;
  };
  /**
   * @method jsep.addIdentifierChar
   * @param {string} char The additional character to treat as a valid part of an identifier
   * @return jsep
   */


  jsep.addIdentifierChar = function (char) {
    additional_identifier_chars[char] = t;
    return this;
  };
  /**
   * @method jsep.addLiteral
   * @param {string} literal_name The name of the literal to add
   * @param {*} literal_value The value of the literal
   * @return jsep
   */


  jsep.addLiteral = function (literal_name, literal_value) {
    literals[literal_name] = literal_value;
    return this;
  };
  /**
   * @method jsep.removeUnaryOp
   * @param {string} op_name The name of the unary op to remove
   * @return jsep
   */


  jsep.removeUnaryOp = function (op_name) {
    delete unary_ops[op_name];

    if (op_name.length === max_unop_len) {
      max_unop_len = getMaxKeyLen(unary_ops);
    }

    return this;
  };
  /**
   * @method jsep.removeAllUnaryOps
   * @return jsep
   */


  jsep.removeAllUnaryOps = function () {
    unary_ops = {};
    max_unop_len = 0;
    return this;
  };
  /**
   * @method jsep.removeIdentifierChar
   * @param {string} char The additional character to stop treating as a valid part of an identifier
   * @return jsep
   */


  jsep.removeIdentifierChar = function (char) {
    delete additional_identifier_chars[char];
    return this;
  };
  /**
   * @method jsep.removeBinaryOp
   * @param {string} op_name The name of the binary op to remove
   * @return jsep
   */


  jsep.removeBinaryOp = function (op_name) {
    delete binary_ops[op_name];

    if (op_name.length === max_binop_len) {
      max_binop_len = getMaxKeyLen(binary_ops);
    }

    return this;
  };
  /**
   * @method jsep.removeAllBinaryOps
   * @return jsep
   */


  jsep.removeAllBinaryOps = function () {
    binary_ops = {};
    max_binop_len = 0;
    return this;
  };
  /**
   * @method jsep.removeLiteral
   * @param {string} literal_name The name of the literal to remove
   * @return jsep
   */


  jsep.removeLiteral = function (literal_name) {
    delete literals[literal_name];
    return this;
  };
  /**
   * @method jsep.removeAllLiterals
   * @return jsep
   */


  jsep.removeAllLiterals = function () {
    literals = {};
    return this;
  }; // In desktop environments, have a way to restore the old value for `jsep`


  if (false) { var old_jsep; } else {
    // In Node.JS environments
    if ( true && module.exports) {
      exports = module.exports = jsep;
    } else {
      exports.parse = jsep;
    }
  }
})(this);

/***/ }),

/***/ 33024:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ HighlightTextField; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96156);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.js + 2 modules
var dist = __webpack_require__(18328);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/github/index.js
var github = __webpack_require__(13019);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/vsDark/index.js
var vsDark = __webpack_require__(41194);
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(91350);
;// CONCATENATED MODULE: ./node_modules/use-editable/dist/use-editable.es.js

var m = {
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
};

function p(c) {
  var a = window.getSelection();
  a.empty();
  a.addRange(c);
}

function q(c) {
  return (c.metaKey || c.ctrlKey) && !c.altKey && "KeyZ" === c.code;
}

function r(c) {
  c = [c.firstChild];

  for (var b, a = ""; b = c.pop();) {
    b.nodeType === Node.TEXT_NODE ? a += b.textContent : b.nodeType === Node.ELEMENT_NODE && "BR" === b.nodeName && (a += "\n"), b.nextSibling && c.push(b.nextSibling), b.firstChild && c.push(b.firstChild);
  }

  "\n" !== a[a.length - 1] && (a += "\n");
  return a;
}

function w(c) {
  var a = window.getSelection().getRangeAt(0),
      b = a.collapsed ? 0 : a.toString().length,
      f = document.createRange();
  f.setStart(c, 0);
  f.setEnd(a.startContainer, a.startOffset);
  return {
    position: c = (f = f.toString()).length,
    extent: b,
    content: f = (f = f.split("\n"))[a = f.length - 1],
    line: a
  };
}

function C(c, a, b) {
  0 >= a && (a = 0);

  if (!b || 0 > b) {
    b = a;
  }

  var f = document.createRange();
  c = [c.firstChild];

  for (var d, l = 0, g = a; d = c[c.length - 1];) {
    if (d.nodeType === Node.TEXT_NODE) {
      if (l + d.textContent.length >= g) {
        var h = g - l;

        if (g === a) {
          if (g = f, h < d.textContent.length ? g.setStart(d, h) : g.setStartAfter(d), b !== a) {
            g = b;
            continue;
          } else {
            break;
          }
        } else {
          a = f;
          h < (b = d).textContent.length ? a.setEnd(b, h) : a.setEndAfter(b);
          break;
        }
      }

      l += d.textContent.length;
    } else if (d.nodeType === Node.ELEMENT_NODE && "BR" === d.nodeName) {
      if (l + 1 >= g) {
        if (g === a) {
          if (h = f, 0 < d.textContent.length ? h.setStart(d, 0) : h.setStartAfter(d), b !== a) {
            g = b;
            continue;
          } else {
            break;
          }
        } else {
          a = f;
          0 < (b = d).textContent.length ? a.setEnd(b, 0) : a.setEndAfter(b);
          break;
        }
      }

      l++;
    }

    c.pop();
    d.nextSibling && c.push(d.nextSibling);
    d.firstChild && c.push(d.firstChild);
  }

  return f;
}

function useEditable(c, a, b) {
  function f(k) {
    var b = c.current;

    if (b) {
      var a = w(b);
      b = r(b);
      a.position += k.length - b.length;
      e.position = a;
      e.onChange(k, a);
    }
  }

  function l(k, b) {
    var e = c.current;

    if (e) {
      var a = window.getSelection().getRangeAt(0);
      a.deleteContents();
      a.collapse();
      var d = b || 0;
      (a = C(e, b = (a = w(e)).position + (0 > d ? d : 0), a.position + (0 < d ? d : 0))).deleteContents();
      k && a.insertNode(document.createTextNode(k));
      p(C(e, b + k.length));
    }
  }

  function d(b) {
    var a = c.current;

    if (a) {
      a.focus();
      var e = 0;

      if ("number" == typeof b) {
        e = b;
      } else {
        var k = r(a).split("\n").slice(0, b.row);
        b.row && (e += k.join("\n").length + 1);
        e += b.column;
      }

      p(C(a, e));
    }
  }

  function g() {
    var b = c.current;
    return {
      text: r(b),
      position: b = w(b)
    };
  }

  function h() {
    e.observer.disconnect();
  }

  b || (b = {});
  var D = (0,react.useState)([])[1],
      e = (0,react.useState)(function () {
    var e = {
      observer: null,
      disconnected: !1,
      onChange: a,
      queue: [],
      history: [],
      historyAt: -1,
      position: null
    };
    "undefined" != typeof MutationObserver && (e.observer = new MutationObserver(function b(b) {
      var a;
      (a = e.queue).push.apply(a, b);
    }));
    return e;
  })[0],
      n = (0,react.useMemo)(function () {
    return {
      update: f,
      insert: l,
      move: d,
      getState: g
    };
  }, []);

  if ("object" != typeof navigator) {
    return n;
  }

  (0,react.useLayoutEffect)(function () {
    e.onChange = a;

    if (c.current && !b.disabled) {
      e.disconnected = !1;
      e.observer.observe(c.current, m);

      if (e.position) {
        var k = e.position,
            d = k.position;
        p(C(c.current, d, d + k.extent));
      }

      return h;
    }
  });
  (0,react.useLayoutEffect)(function () {
    if (!c.current || b.disabled) {
      e.history.length = 0, e.historyAt = -1;
    } else {
      var a = c.current;

      if (e.position) {
        a.focus();
        var d = e.position,
            f = d.position;
        p(C(a, f, f + d.extent));
      }

      var g = a.style.whiteSpace,
          h = a.contentEditable,
          l = !0;

      try {
        a.contentEditable = "plaintext-only";
      } catch (u) {
        a.contentEditable = "true", l = !1;
      }

      "pre" !== g && (a.style.whiteSpace = "pre-wrap");
      b.indentation && (a.style.tabSize = a.style.MozTabSize = "" + b.indentation);
      d = "" + " ".repeat(b.indentation || 0);

      var x,
          E = new RegExp("^(?:" + d + ")"),
          F = new RegExp("^(?:" + d + ")*(" + d + ")$"),
          t = function t(b) {
        if (c.current && e.position) {
          var u = r(a),
              d = w(a),
              f = new Date().valueOf(),
              g = e.history[e.historyAt];
          !b && 500 > f - x || g && g[1] === u ? x = f : (b = ++e.historyAt, e.history[b] = [d, u], e.history.splice(b + 1), 500 < b && (e.historyAt--, e.history.shift()));
        }
      },
          v = function v() {
        var b;
        (b = e.queue).push.apply(b, e.observer.takeRecords());
        b = w(a);

        if (e.queue.length) {
          e.observer.disconnect();
          e.disconnected = !0;
          var d = r(a);
          e.position = b;

          for (var c, f; c = e.queue.pop();) {
            null !== c.oldValue && (c.target.textContent = c.oldValue);

            for (f = c.removedNodes.length - 1; 0 <= f; f--) {
              c.target.insertBefore(c.removedNodes[f], c.nextSibling);
            }

            for (f = c.addedNodes.length - 1; 0 <= f; f--) {
              c.addedNodes[f].parentNode && c.target.removeChild(c.addedNodes[f]);
            }
          }

          e.onChange(d, b);
        }
      },
          y = function y(c) {
        if (!c.defaultPrevented && c.target === a) {
          if (e.disconnected) {
            return c.preventDefault(), D([]);
          }

          if (q(c)) {
            c.preventDefault(), c.shiftKey ? (c = ++e.historyAt, (c = e.history[c]) || (e.historyAt = e.history.length - 1)) : (c = --e.historyAt, (c = e.history[c]) || (e.historyAt = 0)), c && (e.observer.disconnect(), e.disconnected = !0, e.position = c[0], e.onChange(c[1], c[0]));
          } else {
            t();

            if ("Enter" === c.key) {
              c.preventDefault();
              var d = w(a),
                  f = /\S/g.exec(d.content);
              d = "\n" + d.content.slice(0, f ? f.index : d.content.length);
              n.insert(d);
            } else if ((!l || b.indentation) && "Backspace" === c.key) {
              c.preventDefault(), window.getSelection().getRangeAt(0).collapsed ? (d = w(a), d = F.exec(d.content), n.insert("", d ? -d[1].length : -1)) : n.insert("", 0);
            } else if (b.indentation && "Tab" === c.key) {
              c.preventDefault();
              f = (d = w(a)).position - d.content.length;
              var g = r(a);
              d = c.shiftKey ? g.slice(0, f) + d.content.replace(E, "") + g.slice(f + d.content.length) : g.slice(0, f) + (b.indentation ? " ".repeat(b.indentation) : "\t") + g.slice(f);
              n.update(d);
            }

            c.repeat && v();
          }
        }
      },
          z = function z(b) {
        b.defaultPrevented || b.isComposing || (q(b) || t(), v(), a.focus());
      },
          A = function A(b) {
        e.position = window.getSelection().rangeCount && b.target === a ? w(a) : null;
      },
          B = function B(a) {
        a.preventDefault();
        t(!0);
        n.insert(a.clipboardData.getData("text/plain"));
        t(!0);
        v();
      };

      document.addEventListener("selectstart", A);
      window.addEventListener("keydown", y);
      a.addEventListener("paste", B);
      a.addEventListener("keyup", z);
      return function () {
        document.removeEventListener("selectstart", A);
        window.removeEventListener("keydown", y);
        a.removeEventListener("paste", B);
        a.removeEventListener("keyup", z);
        a.style.whiteSpace = g;
        a.contentEditable = h;
      };
    }
  }, [c.current, b.disabled, b.indentation]);
  return n;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(6809);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(14685);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
;// CONCATENATED MODULE: ./src/components/ui/HighlightTextField.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react/jsx-key */

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name







var GithubPullRequestButton = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(9819)]).then(__webpack_require__.bind(__webpack_require__, 87051));
});
var AnnotationTooltip = (0,withStyles/* default */.Z)(function (theme) {
  return {
    arrow: {
      color: theme.palette.error.main
    },
    tooltip: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.common.white,
      boxShadow: theme.shadows[1],
      fontSize: theme.typography.body2.fontSize
    }
  };
})(Tooltip/* default */.ZP);
function HighlightTextField(props) {
  var _ref2;

  var code = props.code,
      onChange = props.onChange,
      language = props.language,
      annotations = props.annotations,
      pullRequestTitle = props.pullRequestTitle,
      pullRequestPath = props.pullRequestPath,
      pullRequestDescription = props.pullRequestDescription;

  var _useContext = (0,react.useContext)(DarkModeContext/* default */.Z),
      darkMode = _useContext.darkMode;

  var theme = darkMode === "dark" ? vsDark/* default */.Z : github/* default */.Z;
  var editorRef = (0,react.useRef)(null);
  useEditable(editorRef, onChange, {
    disabled: false,
    indentation: 4
  });
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1,
    direction: "row"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(dist/* default */.ZP, Object.assign({}, dist/* defaultProps */.lG, {
    code: code,
    language: language,
    theme: theme
  }), function (_ref) {
    var className = _ref.className,
        style = _ref.style,
        tokens = _ref.tokens,
        getTokenProps = _ref.getTokenProps;
    return /*#__PURE__*/react.createElement("pre", {
      ref: editorRef,
      className: className,
      spellCheck: false,
      style: _objectSpread(_objectSpread({}, style), {
        minHeight: "12rem",
        whiteSpace: "pre-wrap"
      })
    }, tokens.map(function (line, i) {
      var annotation = annotations === null || annotations === void 0 ? void 0 : annotations.find(function (a) {
        return a.line === i + 1;
      });
      var title = annotation === null || annotation === void 0 ? void 0 : annotation.message;
      var el = /*#__PURE__*/react.createElement("span", {
        key: i,
        style: annotation && {
          borderBottom: "dashed 1px red"
        }
      }, line.filter(function (token) {
        return !token.empty;
      }).map(function (token, key) {
        return /*#__PURE__*/react.createElement("span", getTokenProps({
          token: token,
          key: key
        }));
      }), i < tokens.length - 1 ? "\n" : null);
      return title ? /*#__PURE__*/react.createElement(AnnotationTooltip, {
        title: title,
        arrow: true,
        key: i
      }, el) : el;
    }));
  })), !!(annotations !== null && annotations !== void 0 && annotations.length) && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "error"
  }, /*#__PURE__*/react.createElement("ul", null, annotations.map(function (a, i) {
    return /*#__PURE__*/react.createElement("li", {
      key: i
    }, "line ", a.line, ": ", a.message);
  })))), pullRequestTitle && pullRequestPath && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(GithubPullRequestButton, {
    title: pullRequestTitle,
    head: pullRequestPath,
    description: pullRequestDescription,
    files: (_ref2 = {}, _ref2[pullRequestPath + ".md"] = code, _ref2)
  }))));
}

/***/ })

}]);
//# sourceMappingURL=f1139de310d90dc95ca6e4e18c0f2676774ddbf9-4f78f386e82887ece13c.js.map