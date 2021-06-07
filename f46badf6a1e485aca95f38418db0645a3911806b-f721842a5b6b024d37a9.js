(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4841],{

/***/ 88880:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports.Z = _default;

/***/ }),

/***/ 51223:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);
var create = __webpack_require__(70030);
var definePropertyModule = __webpack_require__(3070);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 65417:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(70111);
var isArray = __webpack_require__(43157);
var wellKnownSymbol = __webpack_require__(5112);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ 6790:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(43157);
var toLength = __webpack_require__(17466);
var bind = __webpack_require__(49974);

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ 49974:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aFunction = __webpack_require__(13099);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 60490:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(35005);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 43157:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(84326);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ 70030:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(19670);
var defineProperties = __webpack_require__(36048);
var enumBugKeys = __webpack_require__(80748);
var hiddenKeys = __webpack_require__(3501);
var html = __webpack_require__(60490);
var documentCreateElement = __webpack_require__(80317);
var sharedKey = __webpack_require__(6200);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ 36048:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(19781);
var definePropertyModule = __webpack_require__(3070);
var anObject = __webpack_require__(19670);
var objectKeys = __webpack_require__(81956);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ 81956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(16324);
var enumBugKeys = __webpack_require__(80748);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 47908:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(84488);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 86535:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(82109);
var flattenIntoArray = __webpack_require__(6790);
var toObject = __webpack_require__(47908);
var toLength = __webpack_require__(17466);
var aFunction = __webpack_require__(13099);
var arraySpeciesCreate = __webpack_require__(65417);

// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A;
    aFunction(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});


/***/ }),

/***/ 99244:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(51223);

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flatMap');


/***/ }),

/***/ 2864:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LM": function() { return /* binding */ DTDL_CONTEXT; },
/* harmony export */   "Jg": function() { return /* binding */ escapeName; },
/* harmony export */   "d0": function() { return /* binding */ DTDLUnits; }
/* harmony export */ });
/* unused harmony exports DTDL_REFERENCE_URL, DTDL_NAME, objectSchema, arraySchema, escapeDisplayName */
/***
 *  DTDL specification: https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md.
 */
var DTDL_REFERENCE_URL = "https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md";
var DTDL_NAME = "Digital Twins Definition Language";
var DTDL_CONTEXT = "dtmi:dtdl:context;2"; // warps fields into an object

function objectSchema(schemas) {
  return {
    "@type": "Object",
    fields: schemas
  };
} // wraps a schema into an array

function arraySchema(schema) {
  return {
    "@type": "Array",
    elementSchema: schema
  };
}
function escapeName(name) {
  name = name.trim().replace(/[^a-zA-Z0-9_]/g, "_");
  if (!/^[a-zA-Z]/.test(name)) name = "a" + name;
  name = name[0].toLowerCase() + name.slice(1);
  return name.slice(0, 64);
}
function escapeDisplayName(name) {
  return name.slice(0, 64);
}
function DTDLUnits() {
  return ["metrePerSecondSquared", "centimetrePerSecondSquared", "gForce", "radian", "degreeOfArc", "minuteOfArc", "secondOfArc", "turn", "radianPerSecondSquared", "radianPerSecond", "degreePerSecond", "revolutionPerSecond", "revolutionPerMinute", "squareMetre", "squareCentimetre", "squareMillimetre", "squareKilometre", "hectare", "squareFoot", "squareInch", "acre", "farad", "millifarad", "microfarad", "nanofarad", "picofarad", "ampere", "microampere", "milliampere", "bitPerSecond", "kibibitPerSecond", "mebibitPerSecond", "gibibitPerSecond", "tebibitPerSecond", "exbibitPerSecond", "zebibitPerSecond", "yobibitPerSecond", "bytePerSecond", "kibibytePerSecond", "mebibytePerSecond", "gibibytePerSecond", "tebibytePerSecond", "exbibytePerSecond", "zebibytePerSecond", "yobibytePerSecond", "bit", "kibibit", "mebibit", "gibibit", "tebibit", "exbibit", "zebibit", "yobibit", "byte", "kibibyte", "mebibyte", "gibibyte", "tebibyte", "exbibyte", "zebibyte", "yobibyte", "kilogramPerCubicMetre", "gramPerCubicMetre", "metre", "centimetre", "millimetre", "micrometre", "nanometre", "kilometre", "foot", "inch", "mile", "nauticalMile", "astronomicalUnit", "coulomb", "joule", "kilojoule", "megajoule", "gigajoule", "electronvolt", "megaelectronvolt", "kilowattHour", "newton", "pound", "ounce", "ton", "hertz", "kilohertz", "megahertz", "gigahertz", "kilogramPerCubicMetre", "gramPerCubicMetre", "lux", "footcandle", "henry", "millihenry", "microhenry", "radian", "degreeOfArc", "minuteOfArc", "secondOfArc", "turn", "radian", "degreeOfArc", "minuteOfArc", "secondOfArc", "turn", "metre", "centimetre", "millimetre", "micrometre", "nanometre", "kilometre", "foot", "inch", "mile", "nauticalMile", "astronomicalUnit", "candelaPerSquareMetre", "watt", "microwatt", "milliwatt", "kilowatt", "megawatt", "gigawatt", "horsepower", "kilowattHourPerYear", "lumen", "candela", "weber", "maxwell", "tesla", "kilogram", "gram", "milligram", "microgram", "tonne", "slug", "gramPerSecond", "kilogramPerSecond", "gramPerHour", "kilogramPerHour", "watt", "microwatt", "milliwatt", "kilowatt", "megawatt", "gigawatt", "horsepower", "kilowattHourPerYear", "pascal", "kilopascal", "bar", "millibar", "millimetresOfMercury", "poundPerSquareInch", "inchesOfMercury", "inchesOfWater", "unity percent", "ohm", "milliohm", "kiloohm", "megaohm", "decibel", "bel", "kelvin", "degreeCelsius", "degreeFahrenheit", "newton", "pound", "ounce", "ton", "second", "millisecond", "microsecond", "nanosecond", "minute", "hour", "day", "year", "newtonMetre", "metrePerSecond", "centimetrePerSecond", "kilometrePerSecond", "metrePerHour", "kilometrePerHour", "milePerHour", "milePerSecond", "knot", "volt", "millivolt", "microvolt", "kilovolt", "megavolt", "cubicMetre", "cubicCentimetre", "litre", "millilitre", "cubicFoot", "cubicInch", "fluidOunce", "gallon", "litrePerSecond", "millilitrePerSecond", "litrePerHour", "millilitrePerHour"];
}

/***/ }),

/***/ 79973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i_": function() { return /* binding */ checkProgram; },
  "IJ": function() { return /* binding */ compileProgram; },
  "EB": function() { return /* binding */ toIdentifier; },
  "vf": function() { return /* binding */ toMemberExpression; }
});

// UNUSED EXPORTS: getServiceFromRole

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/ir.ts
var VMFunctions = [{
  id: "label",
  args: ["Identifier"],
  prompt: "label target {1}",
  context: "command"
}, {
  id: "jump",
  args: ["Identifier"],
  prompt: "jump to label {1}",
  context: "command"
}, {
  id: "branchOnCondition",
  args: ["boolean", "Identifier"],
  prompt: "if {1} then jump to label {2}",
  context: "command"
}, {
  id: "awaitRegister",
  args: ["register"],
  prompt: "wait on register {1} to change value",
  context: "command"
}, {
  id: "awaitChange",
  args: ["register", "number"],
  prompt: "wait for register {1} to change by {2}",
  context: "command"
}, {
  id: "wait",
  args: ["number"],
  prompt: "wait for {1} milliseconds",
  context: "command"
}, {
  id: "watch",
  args: ["number"],
  prompt: "watch expression {1}",
  context: "command"
}, {
  id: "awaitEvent",
  args: ["event", ["boolean", true]],
  prompt: "wait for event {1} and then check {2} (other events ignored)",
  context: "command"
}, {
  id: "awaitCondition",
  args: ["boolean"],
  prompt: "wait for condition {1}",
  context: "command"
}, {
  id: "writeRegister",
  args: ["register", "number"],
  prompt: "write value {2:val} to {1}",
  context: "command"
}, {
  id: "writeLocal",
  args: ["register", "number"],
  prompt: "write value {2:val} to {1}",
  context: "command"
}, {
  id: "halt",
  args: [],
  prompt: "terminates the current handler",
  context: "command"
}, {
  id: "nop",
  args: [],
  prompt: "no operation",
  context: "command"
}, {
  id: "onRoleConnected",
  args: ["Identifier"],
  prompt: "fires when a role is connected",
  context: "command"
}, {
  id: "onRoleDisconnected",
  args: ["Identifier"],
  prompt: "fires when a role is disconnected",
  context: "command"
}];
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdutils.ts
var jdutils = __webpack_require__(30055);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/compile.ts




function toIdentifier(id) {
  return {
    type: "Identifier",
    name: id
  };
}
function toMemberExpression(root, field) {
  return {
    type: "MemberExpression",
    object: toIdentifier(root),
    property: typeof field === "string" ? toIdentifier(field) : field,
    computed: false
  };
}

function handlerVisitor(handler, visitITE, visitCommand) {
  handler.commands.forEach(visitBase);

  function visitBase(base) {
    switch (base.type) {
      case "cmd":
        {
          if (visitCommand) visitCommand(base);
          break;
        }

      case "ite":
        {
          var _ite$else, _ite$then;

          var _ite = base;
          if (visitITE) visitITE(_ite, 0);
          _ite === null || _ite === void 0 ? void 0 : (_ite$else = _ite.else) === null || _ite$else === void 0 ? void 0 : _ite$else.forEach(visitBase);
          if (visitITE) visitITE(_ite, 1);
          _ite === null || _ite === void 0 ? void 0 : (_ite$then = _ite.then) === null || _ite$then === void 0 ? void 0 : _ite$then.forEach(visitBase);
          if (visitITE) visitITE(_ite, 2);
        }
    }
  }
}

function compileProgram(prog) {
  var newProgram = {
    roles: prog.roles.slice(0),
    handlers: []
  };
  newProgram.handlers = prog.handlers.map(function (h) {
    return {
      commands: removeIfThenElse(h),
      errors: h === null || h === void 0 ? void 0 : h.errors
    };
  });
  return newProgram;
}

function removeIfThenElse(handler) {
  var newSequence = [];
  var labels = [];
  var labelId = 1;
  handlerVisitor(handler, function (ite, time) {
    switch (time) {
      case 0:
        {
          // create the labels and branch instruction
          var then = "then_" + labelId;
          var end = "end_" + labelId;
          labels.push({
            then: then,
            end: end
          });
          labelId++;
          newSequence.push({
            type: "cmd",
            command: {
              type: "CallExpression",
              callee: toIdentifier("branchOnCondition"),
              arguments: [ite.expr, toIdentifier(then)]
            }
          });
          break;
        }

      case 1:
        {
          // insert the jump and then label
          var _labels = labels[labels.length - 1],
              _then = _labels.then,
              _end = _labels.end;
          newSequence.push({
            type: "cmd",
            command: {
              type: "CallExpression",
              callee: toIdentifier("jump"),
              arguments: [toIdentifier(_end)]
            }
          });
          newSequence.push({
            type: "cmd",
            command: {
              type: "CallExpression",
              callee: toIdentifier("label"),
              arguments: [toIdentifier(_then)]
            }
          });
          break;
        }

      case 2:
        {
          (0,utils/* assert */.hu)(labels.length > 0);
          var _end2 = labels[labels.length - 1].end;
          newSequence.push({
            type: "cmd",
            command: {
              type: "CallExpression",
              callee: toIdentifier("label"),
              arguments: [toIdentifier(_end2)]
            }
          });
          labels.pop();
        }
    }
  }, function (cmd) {
    newSequence.push(cmd);
  });
  return newSequence;
}

var getServiceFromRole = function getServiceFromRole(info) {
  return function (role) {
    // lookup in roles first
    var shortId = info.roles.find(function (pair) {
      return pair.role === role;
    });

    if (shortId) {
      // must succeed
      var def = (0,spec/* serviceSpecificationFromName */.kB)(shortId.serviceShortId);
      (0,utils/* assert */.hu)(!!def, "service " + shortId.serviceShortId + " not resolved");
      return def;
    } else {
      var service = (0,spec/* serviceSpecificationFromName */.kB)(role);
      return service;
    }
  };
};
function checkProgram(prog) {
  var allErrors = [];
  var goodHandlers = [];
  var currentId = undefined;

  var errorFun = function errorFun(e) {
    allErrors.push({
      sourceId: currentId,
      message: e
    });
  };

  var symbolResolver = new jdutils/* SpecSymbolResolver */.ll(undefined, getServiceFromRole(prog), errorFun);
  var checker = new jdutils/* VMChecker */.Ys(symbolResolver, function (_) {
    return true;
  }, errorFun);
  prog.handlers.forEach(function (h) {
    if (h !== null && h !== void 0 && h.errors.length) {
      h === null || h === void 0 ? void 0 : h.errors.forEach(function (e) {
        return allErrors.push(e);
      });
      return;
    }

    var errorCount = allErrors.length;
    symbolResolver.roles = [];
    handlerVisitor(h, undefined, function (c) {
      return checker.checkCommand(c.command, VMFunctions);
    });

    if ((h === null || h === void 0 ? void 0 : h.errors.length) === 0 && allErrors.length === errorCount) {
      h.roles = symbolResolver.roles;
      goodHandlers.push(h);
    } else {
      h === null || h === void 0 ? void 0 : h.errors.forEach(function (e) {
        return allErrors.push(e);
      });
    }
  });
  prog.handlers = goodHandlers;
  return {
    registers: symbolResolver.registers.map(function (s) {
      var _s$split = s.split("."),
          root = _s$split[0],
          fld = _s$split[1];

      return {
        role: root,
        register: fld
      };
    }),
    events: symbolResolver.events.map(function (e) {
      var _e$split = e.split("."),
          root = _e$split[0],
          fld = _e$split[1];

      return {
        role: root,
        event: fld
      };
    }),
    errors: allErrors
  };
}

/***/ }),

/***/ 66775:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": function() { return /* binding */ createToneContext; }
/* harmony export */ });
var VOLUME_GAIN = 0.4;
function createToneContext(defaultVolume) {
  try {
    console.log("create tone context");
    var ctx = new (window.AudioContext || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.webkitAudioContext)(); // play silence sound within onlick to unlock it

    var buffer = ctx.createBuffer(1, 1, 22050);
    var source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.start(); // output node with volume

    var volume = ctx.createGain();
    volume.connect(ctx.destination);
    volume.gain.value = (defaultVolume !== undefined ? defaultVolume : 0.2) * VOLUME_GAIN;

    var setVolume = function setVolume(v) {
      if (volume && !isNaN(v)) {
        volume.gain.value = v * VOLUME_GAIN;
      }
    };

    var playTone = function playTone(frequency, duration) {
      try {
        var tone = ctx.createOscillator();
        tone.type = "sawtooth";
        tone.connect(volume);
        tone.frequency.value = frequency; // update frequency

        tone.start(); // start and stop

        tone.stop(ctx.currentTime + duration / 1000);
      } catch (e) {
        console.debug(e);
      }
    };

    var close = function close() {
      try {
        if (ctx.state === "running") ctx.close();
      } catch (e) {
        console.warn(e);
      }
    };

    console.log("tone context created");
    return {
      setVolume: setVolume,
      playTone: playTone,
      close: close
    };
  } catch (e) {
    return undefined;
  }
}

/***/ }),

/***/ 2928:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServices; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54774);



function useServices(options) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z),
      bus = _useContext.bus;

  var services = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(bus, function (b) {
    return b.services(options);
  }, [JSON.stringify(options)]);
  return services;
}

/***/ }),

/***/ 79739:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ PaperBox; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19756);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59355);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8266);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58063);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);



function PaperBox(props) {
  var children = props.children,
      padding = props.padding,
      elevation = props.elevation,
      bgcolor = props.bgcolor,
      others = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["children", "padding", "elevation", "bgcolor"]);

  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, Object.assign({}, others, {
    bgcolor: bgcolor,
    mb: theme.spacing(0.25)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    square: true,
    elevation: elevation
  }, padding !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    p: theme.spacing(padding || 0.25)
  }, children), padding === 0 && children));
}

/***/ }),

/***/ 62437:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ VMBlockEditor; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-blockly/dist/index.js
var dist = __webpack_require__(691);
// EXTERNAL MODULE: ./node_modules/@blockly/theme-modern/src/index.js
var src = __webpack_require__(2990);
// EXTERNAL MODULE: ./node_modules/@blockly/theme-dark/src/index.js
var theme_dark_src = __webpack_require__(26576);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(85061);
// EXTERNAL MODULE: ./node_modules/blockly/index.js
var blockly = __webpack_require__(74640);
var blockly_default = /*#__PURE__*/__webpack_require__.n(blockly);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(13996);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var jdom_spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/hooks/useServices.ts
var useServices = __webpack_require__(2928);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(21258);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(59355);
// EXTERNAL MODULE: ./node_modules/gatsby-link/index.js
var gatsby_link = __webpack_require__(38037);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(5991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(41788);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./src/components/hooks/toneContext.ts
var toneContext = __webpack_require__(66775);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
// EXTERNAL MODULE: ./src/components/vm/fields/ReactField.tsx
var ReactField = __webpack_require__(15171);
;// CONCATENATED MODULE: ./src/components/vm/fields/NoteField.tsx








var PianoWidget = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(532), __webpack_require__.e(317)]).then(__webpack_require__.bind(__webpack_require__, 28937));
});

var NoteField = /*#__PURE__*/function (_ReactField) {
  (0,inheritsLoose/* default */.Z)(NoteField, _ReactField);

  NoteField.fromJson = function fromJson(options) {
    return new NoteField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function NoteField(options) {
    var _this;

    _this = _ReactField.call(this, options === null || options === void 0 ? void 0 : options.value, undefined, options) || this;

    _this.events.on(ReactField/* UNMOUNT */.lo, function () {
      var _this$toneContext;

      (_this$toneContext = _this.toneContext) === null || _this$toneContext === void 0 ? void 0 : _this$toneContext.close();
      _this.toneContext = undefined;
    });

    return _this;
  }

  var _proto = NoteField.prototype;

  _proto.getText_ = function getText_() {
    return (this.value | 0) + "";
  };

  _proto.renderField = function renderField() {
    var _this2 = this;

    var handlePlayTone = /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(newFrequency) {
        var _this2$toneContext;

        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.value = newFrequency;
                if (!_this2.toneContext) _this2.toneContext = (0,toneContext/* createToneContext */.W)();
                (_this2$toneContext = _this2.toneContext) === null || _this2$toneContext === void 0 ? void 0 : _this2$toneContext.playTone(newFrequency, 400);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function handlePlayTone(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(PianoWidget, {
      playTone: handlePlayTone
    }));
  };

  (0,createClass/* default */.Z)(NoteField, [{
    key: "defaultValue",
    get: function get() {
      return 440;
    }
  }]);

  return NoteField;
}(ReactField/* default */.ZP);

NoteField.KEY = "jacdac_field_note";
NoteField.SHADOW = (0,ReactField/* toShadowDefinition */._t)(NoteField);

// EXTERNAL MODULE: ./jacdac-ts/src/servers/hidkeyboardserver.ts
var hidkeyboardserver = __webpack_require__(41577);
;// CONCATENATED MODULE: ./src/components/vm/fields/KeyboardKeyField.tsx






var KeyboardKeyInput = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(532), __webpack_require__.e(7919), __webpack_require__.e(2860)]).then(__webpack_require__.bind(__webpack_require__, 82860));
});

var KeyboardKeyField = /*#__PURE__*/function (_ReactField) {
  (0,inheritsLoose/* default */.Z)(KeyboardKeyField, _ReactField);

  function KeyboardKeyField() {
    return _ReactField.apply(this, arguments) || this;
  }

  KeyboardKeyField.fromJson = function fromJson(options) {
    return new KeyboardKeyField(options === null || options === void 0 ? void 0 : options.value, undefined, options);
  };

  var _proto = KeyboardKeyField.prototype;

  _proto.getText_ = function getText_() {
    var _this$value = this.value,
        selector = _this$value.selector,
        modifiers = _this$value.modifiers;
    return (0,hidkeyboardserver/* renderKeyboardKey */.OJ)(selector, modifiers, true);
  };

  _proto.renderField = function renderField() {
    var _this = this;

    var _this$value2 = this.value,
        selector = _this$value2.selector,
        modifiers = _this$value2.modifiers;

    var handleChange = function handleChange(newSelector, newModifiers) {
      _this.value = {
        selector: newSelector,
        modifiers: newModifiers
      };
    };

    return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(KeyboardKeyInput, {
      initialSelector: selector,
      initialModifiers: modifiers,
      onChange: handleChange
    }));
  };

  (0,createClass/* default */.Z)(KeyboardKeyField, [{
    key: "defaultValue",
    get: function get() {
      return {
        selector: 4,
        modifiers: 0
      };
    }
  }]);

  return KeyboardKeyField;
}(ReactField/* default */.ZP);

KeyboardKeyField.KEY = "jacdac_field_keyboard_key";

;// CONCATENATED MODULE: ./src/components/widgets/svg.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
function mkTitle(txt) {
  var t = elt("title");
  t.textContent = txt;
  return t;
}

function title(el, txt) {
  var t = mkTitle(txt);
  el.appendChild(t);
  return t;
}
function hydrate(el, props) {
  for (var k in props) {
    if (k == "title") {
      title(el, props[k]);
    } else el.setAttributeNS(null, k, props[k]);
  }
}
function elt(name, props) {
  var el = document.createElementNS("http://www.w3.org/2000/svg", name);
  if (props) hydrate(el, props);
  return el;
}
function child(parent, name, props) {
  var el = elt(name, props);
  parent.appendChild(el);
  return el;
}
;// CONCATENATED MODULE: ./src/components/vm/fields/ReactImageField.tsx





var ReactImageField = /*#__PURE__*/function (_ReactField) {
  (0,inheritsLoose/* default */.Z)(ReactImageField, _ReactField);

  function ReactImageField(value, width, height) {
    if (width === void 0) {
      width = 32;
    }

    if (height === void 0) {
      height = 32;
    }

    return _ReactField.call(this, value, undefined, undefined, {
      width: width,
      height: height
    }) || this;
  }

  var _proto = ReactImageField.prototype;

  _proto.setSize = function setSize(width, height) {
    this.size_ = new (blockly_default()).utils.Size(width, height);
    var img = this.view;

    if (img) {
      img.setAttribute("width", width + "");
      img.setAttribute("height", height + "");
    }
  };

  _proto.updateView = function updateView() {
    var imgUri = this.renderValue();
    var img = this.view;

    if (imgUri) {
      img === null || img === void 0 ? void 0 : img.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", imgUri);
      img === null || img === void 0 ? void 0 : img.setAttribute("alt", this.getText());
    }
  }
  /**
   * Renders the value to a data uri string
   */
  ;

  _proto.renderValue = function renderValue() {
    return undefined;
  };

  _proto.initCustomView = function initCustomView() {
    var _this$size_ = this.size_,
        width = _this$size_.width,
        height = _this$size_.height;
    return child(this.fieldGroup_, "image", {
      height: height,
      width: width,
      alt: this.getText()
    });
  };

  return ReactImageField;
}(ReactField/* default */.ZP);


;// CONCATENATED MODULE: ./src/components/vm/fields/LEDMatrixField.tsx







var LEDMatrixWidget = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 317).then(__webpack_require__.bind(__webpack_require__, 71598));
});

var LEDMatrixField = /*#__PURE__*/function (_ReactImageField) {
  (0,inheritsLoose/* default */.Z)(LEDMatrixField, _ReactImageField);

  function LEDMatrixField(value) {
    var _this;

    _this = _ReactImageField.call(this, value) || this;

    _this.events.on(ReactField/* VALUE_CHANGE */.Z8, function () {
      var _this$value = _this.value,
          rows = _this$value.rows,
          columns = _this$value.columns;

      _this.setSize(32, 32 / columns * rows);
    });

    return _this;
  }

  LEDMatrixField.fromJson = function fromJson(options) {
    return new LEDMatrixField(options === null || options === void 0 ? void 0 : options.value);
  };

  var _proto = LEDMatrixField.prototype;

  _proto.getText_ = function getText_() {
    var _this$value2 = this.value,
        leds = _this$value2.leds,
        rows = _this$value2.rows,
        columns = _this$value2.columns;
    return leds + " (" + rows + "x" + columns + ")";
  };

  _proto.renderValue = function renderValue() {
    var _this$value3 = this.value,
        leds = _this$value3.leds,
        rows = _this$value3.rows,
        columns = _this$value3.columns; // render current state to LEDmatrix field

    var columnspadded = columns + (8 - columns % 8);
    var ledsBytes = (0,utils/* fromHex */.H_)(leds);
    var cvs = document.createElement("canvas");
    var b = 3;
    var pw = 8;
    var ph = 8;
    var w = rows * pw + (rows - 1) * b;
    var h = columns * ph + (columns - 1) * b;
    cvs.width = w + 2 * b;
    cvs.height = h + 2 * b;
    var ctx = cvs.getContext("2d");
    ctx.fillStyle = "#444";
    ctx.fillRect(b, b, w, h);
    ctx.fillStyle = "blue";

    for (var x = 0; x < columns; ++x) {
      for (var y = 0; y < rows; ++y) {
        var bitindex = y * columnspadded + x;
        var byte = ledsBytes[bitindex >> 3];
        var bit = bitindex % 8;
        var on = 1 === (byte >> bit & 1);
        ctx.fillStyle = on ? "#ffc400" : "#000";
        ctx.fillRect(x * (pw + b) + b, y * (ph + b) + b, pw, ph);
      }
    }

    var dataUri = cvs.toDataURL("image/png");
    return dataUri;
  };

  _proto.renderField = function renderField() {
    var _this2 = this;

    var _this$value4 = this.value,
        leds = _this$value4.leds,
        rows = _this$value4.rows,
        columns = _this$value4.columns;
    var ledsBytes = (0,utils/* fromHex */.H_)(leds);

    var onChange = function onChange(newLeds) {
      return _this2.value = {
        leds: (0,utils/* toHex */.NC)(newLeds),
        rows: rows,
        columns: columns
      };
    };

    return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(LEDMatrixWidget, {
      color: "secondary",
      brightness: 1,
      leds: ledsBytes,
      rows: rows,
      columns: columns,
      onChange: onChange
    }));
  };

  (0,createClass/* default */.Z)(LEDMatrixField, [{
    key: "defaultValue",
    get: function get() {
      return {
        leds: (0,utils/* toHex */.NC)(new Uint8Array(4)),
        rows: 5,
        columns: 5
      };
    }
  }]);

  return LEDMatrixField;
}(ReactImageField);

LEDMatrixField.KEY = "jacdac_field_led_matrix";

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slider/Slider.js + 1 modules
var Slider = __webpack_require__(50514);
// EXTERNAL MODULE: ./src/components/vm/fields/ValueContext.tsx
var ValueContext = __webpack_require__(84419);
;// CONCATENATED MODULE: ./src/components/vm/fields/SliderField.tsx









function FieldWithSlider(props) {
  var children = props.children;

  var _useContext = (0,react.useContext)(ValueContext/* default */.ZP),
      value = _useContext.value,
      onValueChange = _useContext.onValueChange;

  var handleChange = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(ev, nv) {
      var newValue;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newValue = nv;
              onValueChange(newValue);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleChange(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, children), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Slider/* default */.Z, {
    color: "secondary",
    valueLabelDisplay: "auto",
    valueLabelFormat: Math.round(value) + "\xB0",
    min: -90,
    max: 90,
    step: 5,
    value: value,
    onChange: handleChange,
    "aria-label": "angle"
  })));
}

var SliderField = /*#__PURE__*/function (_ReactField) {
  (0,inheritsLoose/* default */.Z)(SliderField, _ReactField);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function SliderField(value, options) {
    return _ReactField.call(this, value, undefined, options) || this;
  }

  var _proto = SliderField.prototype;

  _proto.getText_ = function getText_() {
    return this.value + "";
  };

  _proto.renderField = function renderField() {
    return /*#__PURE__*/react.createElement(FieldWithSlider, null, this.renderWidget());
  };

  _proto.renderWidget = function renderWidget() {
    return null;
  };

  (0,createClass/* default */.Z)(SliderField, [{
    key: "defaultValue",
    get: function get() {
      return 0;
    }
  }]);

  return SliderField;
}(ReactField/* default */.ZP);


;// CONCATENATED MODULE: ./src/components/vm/fields/ServoAngleField.tsx






var ServoWidget = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 9422));
});

function ServiceFieldWidget() {
  var _useContext = (0,react.useContext)(ValueContext/* default */.ZP),
      value = _useContext.value;

  return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(ServoWidget, {
    angle: value,
    offset: 0,
    color: "secondary",
    enabled: true
  }));
}

var ServoAngleField = /*#__PURE__*/function (_SliderField) {
  (0,inheritsLoose/* default */.Z)(ServoAngleField, _SliderField);

  function ServoAngleField() {
    return _SliderField.apply(this, arguments) || this;
  }

  ServoAngleField.fromJson = function fromJson(options) {
    return new ServoAngleField(options === null || options === void 0 ? void 0 : options.value, options);
  };

  var _proto = ServoAngleField.prototype;

  _proto.getText_ = function getText_() {
    return this.value + "°";
  };

  _proto.renderWidget = function renderWidget() {
    return /*#__PURE__*/react.createElement(ServiceFieldWidget, null);
  };

  return ServoAngleField;
}(SliderField);

ServoAngleField.KEY = "jacdac_field_servo_angle";
ServoAngleField.SHADOW = (0,ReactField/* toShadowDefinition */._t)(ServoAngleField);

;// CONCATENATED MODULE: ./src/components/vm/fields/LEDColorField.tsx







var LEDWidget = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 317).then(__webpack_require__.bind(__webpack_require__, 56931));
});

function LEDColorFieldWidget() {
  var _useContext = (0,react.useContext)(ValueContext/* default */.ZP),
      value = _useContext.value,
      onValueChange = _useContext.onValueChange;

  return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(LEDWidget, {
    ledColor: value,
    onLedColorChange: onValueChange,
    ledCount: 3,
    color: "secondary"
  }));
}

var LEDColorField = /*#__PURE__*/function (_ReactField) {
  (0,inheritsLoose/* default */.Z)(LEDColorField, _ReactField);

  LEDColorField.fromJson = function fromJson(options) {
    return new LEDColorField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function LEDColorField(options) {
    return _ReactField.call(this, options === null || options === void 0 ? void 0 : options.value, undefined, options, {
      width: 28,
      height: 28
    }) || this;
  }

  var _proto = LEDColorField.prototype;

  _proto.initCustomView = function initCustomView() {
    var width = this.size_.width;
    var r = width >> 1;
    return child(this.fieldGroup_, "circle", {
      r: width >> 1,
      cx: r,
      cy: r,
      strokeWidth: 2,
      stroke: "#777"
    });
  };

  _proto.updateView = function updateView() {
    var c = (0,utils/* rgbToHtmlColor */.b)(this.value);
    var circle = this.view;

    if (c) {
      circle === null || circle === void 0 ? void 0 : circle.setAttribute("fill", c);
    }
  };

  _proto.getText_ = function getText_() {
    return (0,utils/* rgbToHtmlColor */.b)(this.value);
  };

  _proto.renderField = function renderField() {
    return /*#__PURE__*/react.createElement(LEDColorFieldWidget, null);
  };

  return LEDColorField;
}(ReactField/* default */.ZP);

LEDColorField.KEY = "jacdac_field_led_color";
LEDColorField.SHADOW = (0,ReactField/* toShadowDefinition */._t)(LEDColorField);

// EXTERNAL MODULE: ./src/components/dashboard/DashboardServiceWidget.tsx + 5 modules
var DashboardServiceWidget = __webpack_require__(23069);
// EXTERNAL MODULE: ./src/components/vm/WorkspaceContext.tsx
var WorkspaceContext = __webpack_require__(26934);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./src/components/ui/DarkModeProvider.tsx
var DarkModeProvider = __webpack_require__(7796);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
// EXTERNAL MODULE: ./src/jacdac/Provider.tsx
var Provider = __webpack_require__(727);
// EXTERNAL MODULE: ./src/components/ui/AppTheme.tsx
var AppTheme = __webpack_require__(25853);
;// CONCATENATED MODULE: ./src/components/vm/fields/ReactInlineField.tsx












var ReactInlineField = /*#__PURE__*/function (_ReactField) {
  (0,inheritsLoose/* default */.Z)(ReactInlineField, _ReactField);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function ReactInlineField(options) {
    return _ReactField.call(this, options === null || options === void 0 ? void 0 : options.value, undefined, options, {
      width: 1,
      height: 1
    }) || this;
  }

  var _proto = ReactInlineField.prototype;

  _proto.createContainer = function createContainer() {
    var c = document.createElement("div");
    c.style.display = "inline-block";
    c.style.minWidth = "14rem";
    return c;
  };

  _proto.initCustomView = function initCustomView() {
    var _this = this;

    var _this$size_ = this.size_,
        width = _this$size_.width,
        height = _this$size_.height;
    var fo = child(this.fieldGroup_, "foreignObject", {
      x: 0,
      y: 0,
      width: width,
      height: height
    });
    this.container = this.createContainer();
    fo.appendChild(this.container);
    this.resizeObserver = new ResizeObserver(function (entries) {
      var entry = entries[0];
      var contentRect = entry.contentRect;
      _this.size_.width = contentRect.width;
      _this.size_.height = contentRect.height;
      fo.setAttribute("width", _this.size_.width + "");
      fo.setAttribute("height", _this.size_.height + "");

      _this.forceRerender();
    });
    this.resizeObserver.observe(this.container);
    react_dom.render(this.renderBlock(), this.container);
    return fo;
  };

  _proto.dispose = function dispose() {
    if (this.container) {
      react_dom.unmountComponentAtNode(this.container);
      this.container = undefined;
    }

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = undefined;
    }

    _ReactField.prototype.dispose.call(this);
  };

  _proto.renderField = function renderField() {
    return /*#__PURE__*/react.createElement("div", null, "not used");
  };

  _proto.renderInlineField = function renderInlineField() {
    return null;
  };

  _proto.renderBlock = function renderBlock() {
    return /*#__PURE__*/react.createElement(WorkspaceContext/* WorkspaceProvider */.W5, {
      field: this
    }, /*#__PURE__*/react.createElement(DarkModeProvider/* default */.Z, {
      fixedDarkMode: "dark"
    }, /*#__PURE__*/react.createElement(react_use_id_hook_esm/* IdProvider */.vc, null, /*#__PURE__*/react.createElement(Provider/* default */.Z, null, /*#__PURE__*/react.createElement(AppTheme/* default */.Z, null, this.renderInlineField())))));
  };

  _proto.getText_ = function getText_() {
    return "...";
  } // don't bind any mouse event
  ;

  _proto.bindEvents_ = function bindEvents_() {
    blockly_default().Tooltip.bindMouseEvents(this.getClickTarget_());
  };

  return ReactInlineField;
}(ReactField/* default */.ZP);


// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(88880);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 23 modules
var servers = __webpack_require__(37801);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(6809);
;// CONCATENATED MODULE: ./src/components/vm/fields/NoServiceAlert.tsx








function NoServiceAlert() {
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var _useContext2 = (0,react.useContext)(WorkspaceContext/* default */.ZP),
      roleService = _useContext2.roleService,
      roleServiceShortId = _useContext2.roleServiceShortId,
      flyout = _useContext2.flyout;

  var spec = (0,jdom_spec/* serviceSpecificationFromName */.kB)(roleServiceShortId);

  var handleStartSimulator = function handleStartSimulator() {
    return (0,servers/* startServiceProviderFromServiceClass */.V6)(bus, spec.classIdentifier);
  }; // nothing to do here


  if (roleService || flyout) return null; // unresolved, unknown service

  if (!roleService && !roleServiceShortId) return null; // unknown spec

  if (!spec) return /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "warning"
  }, "Unknown service");
  return /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "outlined",
    color: "default",
    startIcon: /*#__PURE__*/react.createElement(Add/* default */.Z, null),
    onClick: handleStartSimulator
  }, "start ", spec.name);
}
;// CONCATENATED MODULE: ./src/components/vm/fields/PointerBoundary.tsx

function PointerBoundary(props) {
  var className = props.className,
      children = props.children;

  var onPointerStopPropagation = function onPointerStopPropagation(event) {
    // make sure blockly does not handle drags when interacting with UI
    event.stopPropagation();
  };

  return /*#__PURE__*/react.createElement("div", {
    className: className,
    style: {
      cursor: "inherit"
    },
    onPointerDown: onPointerStopPropagation,
    onPointerUp: onPointerStopPropagation,
    onPointerMove: onPointerStopPropagation
  }, children);
}
;// CONCATENATED MODULE: ./src/components/vm/fields/TwinField.tsx









function TwinWidget() {
  var _useContext = (0,react.useContext)(WorkspaceContext/* default */.ZP),
      roleService = _useContext.roleService,
      flyout = _useContext.flyout;

  if (flyout) return null;
  if (!roleService) return /*#__PURE__*/react.createElement(NoServiceAlert, null);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    alignItems: "center",
    alignContent: "center",
    justify: "center",
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(PointerBoundary, null, /*#__PURE__*/react.createElement(DashboardServiceWidget/* default */.ZP, {
    service: roleService,
    visible: true,
    variant: "icon"
  }))));
}

var TwinField = /*#__PURE__*/function (_ReactInlineField) {
  (0,inheritsLoose/* default */.Z)(TwinField, _ReactInlineField);

  TwinField.fromJson = function fromJson(options) {
    return new TwinField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function TwinField(options) {
    return _ReactInlineField.call(this, options) || this;
  }

  var _proto = TwinField.prototype;

  _proto.renderInlineField = function renderInlineField() {
    return /*#__PURE__*/react.createElement(TwinWidget, null);
  };

  return TwinField;
}(ReactInlineField);

TwinField.KEY = "jacdac_field_twin";
TwinField.EDITABLE = false;

;// CONCATENATED MODULE: ./src/components/vm/fields/JDomTreeField.tsx






var JDomServiceTreeView = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(272)]).then(__webpack_require__.bind(__webpack_require__, 60272));
});

function JDomTreeWidget() {
  var _useContext = (0,react.useContext)(WorkspaceContext/* default */.ZP),
      roleService = _useContext.roleService,
      flyout = _useContext.flyout;

  var onPointerStopPropagation = function onPointerStopPropagation(event) {
    // make sure blockly does not handle drags when interacting with UI
    event.stopPropagation();
  };

  if (flyout) return null;
  if (!roleService) return /*#__PURE__*/react.createElement(NoServiceAlert, null);
  return /*#__PURE__*/react.createElement("div", {
    style: {
      minWidth: "12rem",
      cursor: "inherit"
    },
    onPointerDown: onPointerStopPropagation,
    onPointerUp: onPointerStopPropagation,
    onPointerMove: onPointerStopPropagation
  }, roleService && /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(JDomServiceTreeView, {
    service: roleService,
    defaultExpanded: [roleService.id]
  })));
}

var JDomTreeField = /*#__PURE__*/function (_ReactInlineField) {
  (0,inheritsLoose/* default */.Z)(JDomTreeField, _ReactInlineField);

  JDomTreeField.fromJson = function fromJson(options) {
    return new JDomTreeField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function JDomTreeField(options) {
    return _ReactInlineField.call(this, options) || this;
  }

  var _proto = JDomTreeField.prototype;

  _proto.renderInlineField = function renderInlineField() {
    return /*#__PURE__*/react.createElement(JDomTreeWidget, null);
  };

  return JDomTreeField;
}(ReactInlineField);

JDomTreeField.KEY = "jacdac_jdom_service_tree";
JDomTreeField.EDITABLE = false;

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__(8266);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(76544);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/utils.ts
var vm_utils = __webpack_require__(94624);
;// CONCATENATED MODULE: ./src/components/vm/fields/WatchValueField.tsx









function WatchValueWidget() {
  var _useContext = (0,react.useContext)(WorkspaceContext/* default */.ZP),
      runner = _useContext.runner,
      sourceId = _useContext.sourceId;

  var theme = (0,useTheme/* default */.Z)(); // track changes

  var _useState = (0,react.useState)(runner === null || runner === void 0 ? void 0 : runner.lookupWatch(sourceId)),
      value = _useState[0],
      setValue = _useState[1];

  (0,react.useEffect)(function () {
    setValue(undefined);
    return runner === null || runner === void 0 ? void 0 : runner.subscribe(vm_utils/* VM_WATCH_CHANGE */.UM, function (watchSourceId) {
      if (watchSourceId === sourceId) {
        var newValue = runner.lookupWatch(sourceId);
        setValue(newValue);
      }
    });
  }, [runner, sourceId]);
  var valueNumber = typeof value === "number" ? value : undefined;

  if (!isNaN(valueNumber)) {
    var step = Math.ceil(Math.abs(valueNumber)) / 10;
    var precision = step < 1 ? Math.ceil(-Math.log10(step)) : 0;
    valueNumber = (0,utils/* roundWithPrecision */.JI)(valueNumber, precision);
  }

  return /*#__PURE__*/react.createElement(Box/* default */.Z, {
    bgcolor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
    color: theme.palette.text.primary
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    alignItems: "flex-end",
    alignContent: "center",
    justify: "center",
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(PointerBoundary, null, !isNaN(valueNumber) ? /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "body1"
  }, valueNumber) : typeof value === "boolean" ? /*#__PURE__*/react.createElement(Switch/* default */.Z, {
    value: !!value
  }) : /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "body1"
  }, value === undefined ? "..." : value + "")))));
}

var WatchValueField = /*#__PURE__*/function (_ReactInlineField) {
  (0,inheritsLoose/* default */.Z)(WatchValueField, _ReactInlineField);

  WatchValueField.fromJson = function fromJson(options) {
    return new WatchValueField(options);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  function WatchValueField(options) {
    return _ReactInlineField.call(this, options) || this;
  }

  var _proto = WatchValueField.prototype;

  _proto.createContainer = function createContainer() {
    var c = document.createElement("div");
    c.style.display = "inline-block";
    c.style.minWidth = "4rem";
    return c;
  };

  _proto.renderInlineField = function renderInlineField() {
    return /*#__PURE__*/react.createElement(WatchValueWidget, null);
  };

  return WatchValueField;
}(ReactInlineField);

WatchValueField.KEY = "jacdac_watch_value";
WatchValueField.EDITABLE = false;

;// CONCATENATED MODULE: ./src/components/vm/fields/fields.ts










var reactFieldShadows;
function registerFields() {
  if (reactFieldShadows) return;
  reactFieldShadows = []; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var registerType = function registerType(fieldType) {
    var key = fieldType.KEY;
    (0,utils/* assert */.hu)(!!key);
    blockly_default().fieldRegistry.unregister(key); // hot reload issues

    blockly_default().fieldRegistry.register(key, fieldType);
    if (fieldType.SHADOW) reactFieldShadows.push(fieldType.SHADOW);
  };

  var fieldTypes = [KeyboardKeyField, NoteField, LEDMatrixField, ServoAngleField, LEDColorField, TwinField, JDomTreeField, WatchValueField];
  fieldTypes.forEach(registerType);
}
function fieldShadows() {
  registerFields();
  return reactFieldShadows.slice(0);
}
// EXTERNAL MODULE: ./src/components/vm/toolbox.ts
var toolbox = __webpack_require__(20055);
// EXTERNAL MODULE: ./jacdac-ts/src/azure-iot/dtdl.ts
var dtdl = __webpack_require__(2864);
;// CONCATENATED MODULE: ./src/components/vm/useToolbox.ts





















 // overrides blockly emboss filter for svg elements

(blockly_default()).BlockSvg.prototype.setHighlighted = function (highlighted) {
  if (!this.rendered) {
    return;
  }

  if (highlighted) {
    this.addSelect();
  } else {
    this.removeSelect();
  }
};

function isBooleanField(field) {
  return field.type === "bool";
}

function isStringField(field) {
  return field.type === "string";
}

function toBlocklyType(field) {
  return isBooleanField(field) ? "Boolean" : isStringField(field) ? "String" : (0,jdspec/* isNumericType */.FV)(field) ? "Number" : undefined;
}

function enumInfo(srv, field) {
  var _srv$enums;

  var e = (_srv$enums = srv.enums) === null || _srv$enums === void 0 ? void 0 : _srv$enums[field.type];
  return e;
}

var ignoredServices = [constants/* SRV_CONTROL */.gm9, constants/* SRV_LOGGER */.w9j, constants/* SRV_ROLE_MANAGER */.igi, constants/* SRV_PROTO_TEST */.$Bn, constants/* SRV_SETTINGS */.B9b, constants/* SRV_BOOTLOADER */.PWm];
var ignoredEvents = [constants/* SystemEvent.StatusCodeChanged */.nSK.StatusCodeChanged];
var includedRegisters = [constants/* SystemReg.Reading */.ZJq.Reading, constants/* SystemReg.Value */.ZJq.Value, constants/* SystemReg.Intensity */.ZJq.Intensity];
var customMessages = [{
  service: constants/* SRV_JOYSTICK */.vRO,
  register: constants/* JoystickReg.Direction */.ztd.Direction,
  field: "buttons",
  get: "is %1 %2 pressed"
}];

function createBlockTheme(theme) {
  var sensorColor = theme.palette.success.main;
  var otherColor = theme.palette.info.main;
  var commandColor = theme.palette.warning.main;
  var debuggerColor = theme.palette.grey[600];
  var deviceTwinColor = theme.palette.error.light;

  var serviceColor = function serviceColor(srv) {
    return (0,jdom_spec/* isSensor */.rq)(srv) ? sensorColor : otherColor;
  };

  return {
    serviceColor: serviceColor,
    sensorColor: sensorColor,
    commandColor: commandColor,
    debuggerColor: debuggerColor,
    otherColor: otherColor,
    deviceTwinColor: deviceTwinColor
  };
}

var codeStatementType = "Code";
var deviceTwinContentType = "DeviceTwinContent";
var deviceTwinCommonOptionType = "DeviceTwinCommonOption";
var deviceTwinPropertyOptionType = "DeviceTwinPropertyOption";
var deviceTwinStatementType = [deviceTwinContentType];
var deviceTwinCommonOptionStatementType = [deviceTwinCommonOptionType];
var deviceTwinPropertyOptionStatementType = [deviceTwinPropertyOptionType].concat(deviceTwinCommonOptionStatementType);

function loadBlocks(serviceColor, commandColor, debuggerColor, deviceTwinColor) {
  // blocks
  var customShadows = [{
    serviceClass: constants/* SRV_SERVO */.$X_,
    kind: "rw",
    identifier: constants/* ServoReg.Angle */.pmu.Angle,
    field: "_",
    shadow: {
      kind: "block",
      type: ServoAngleField.SHADOW.type
    }
  }, {
    serviceClass: constants/* SRV_BUZZER */.J1$,
    kind: "command",
    identifier: constants/* BuzzerCmd.PlayNote */.Rv2.PlayNote,
    field: "frequency",
    shadow: {
      kind: "block",
      type: NoteField.SHADOW.type
    }
  }];

  var lookupCustomShadow = function lookupCustomShadow(service, info, field) {
    var _customShadows$find;

    return (_customShadows$find = customShadows.find(function (cs) {
      return cs.serviceClass === service.classIdentifier && cs.kind == info.kind && cs.identifier === info.identifier && cs.field == field.name;
    })) === null || _customShadows$find === void 0 ? void 0 : _customShadows$find.shadow;
  };

  var serviceHelp = function serviceHelp(service) {
    return (0,gatsby_link/* withPrefix */.dq)("/services/" + service.shortId);
  };

  var fieldsSupported = function fieldsSupported(pkt) {
    return pkt.fields.every(toBlocklyType);
  };

  var fieldName = function fieldName(reg, field) {
    return field.name === "_" ? reg.name : field.name;
  };

  var fieldToShadow = function fieldToShadow(service, info, field) {
    return lookupCustomShadow(service, info, field) || (isBooleanField(field) ? {
      kind: "block",
      type: "jacdac_on_off"
    } : isStringField(field) ? {
      kind: "block",
      type: "text"
    } : field.unit === "°" ? {
      kind: "block",
      type: "jacdac_angle"
    } : field.unit === "/" ? {
      kind: "block",
      type: "jacdac_ratio"
    } : /^%/.test(field.unit) ? {
      kind: "block",
      type: "jacdac_percent"
    } : field.type === "u8" ? {
      kind: "block",
      type: "jacdac_byte"
    } : {
      kind: "block",
      type: "math_number",
      value: field.defaultValue || 0,
      min: field.typicalMin || field.absoluteMin,
      max: field.typicalMax || field.absoluteMax
    });
  };

  var variableName = function variableName(srv) {
    return (0,jdspec/* humanify */.lW)(srv.camelName).toLowerCase() + " 1";
  };

  var fieldVariable = function fieldVariable(service) {
    return {
      type: "field_variable",
      name: "role",
      variable: variableName(service),
      variableTypes: [service.shortId],
      defaultType: service.shortId
    };
  };

  var fieldsToFieldInputs = function fieldsToFieldInputs(info) {
    return info.fields.map(function (field) {
      return {
        type: "input_value",
        name: fieldName(info, field),
        check: toBlocklyType(field)
      };
    });
  };

  var fieldsToValues = function fieldsToValues(service, info) {
    return (0,utils/* toMap */.qL)(info.fields, function (field) {
      return fieldName(info, field);
    }, function (field) {
      return fieldToShadow(service, info, field);
    });
  };

  var fieldsToMessage = function fieldsToMessage(info) {
    return info.fields.map(function (field, i) {
      return (0,jdspec/* humanify */.lW)(field.name) + " %" + (2 + i);
    }).join(" ");
  };

  var isEnabledRegister = function isEnabledRegister(info) {
    return info.fields.length === 1 && info.fields[0].type === "bool" && info.name === "enabled";
  };

  var customMessage = function customMessage(srv, reg, field) {
    return customMessages.find(function (m) {
      return m.service === srv.classIdentifier && m.register === reg.identifier && m.field === field.name;
    });
  };

  var allServices = (0,jdom_spec/* serviceSpecifications */.Le)();
  var supportedServices = allServices.filter(function (service) {
    return !/^_/.test(service.shortId) && service.status !== "deprecated";
  }).filter(function (service) {
    return ignoredServices.indexOf(service.classIdentifier) < 0;
  });

  var resolveService = function resolveService(cls) {
    return allServices.filter(function (srv) {
      return srv.classIdentifier === cls;
    });
  };

  var registers = (0,utils/* arrayConcatMany */.ue)(supportedServices.map(function (service) {
    return service.packets.filter(function (pkt) {
      return (0,jdom_spec/* isRegister */.x5)(pkt) && !pkt.lowLevel && includedRegisters.indexOf(pkt.identifier) > -1;
    }).map(function (register) {
      return {
        service: service,
        register: register
      };
    });
  }));
  var events = supportedServices.map(function (service) {
    return {
      service: service,
      events: service.packets.filter(function (pkt) {
        return (0,jdom_spec/* isEvent */.cO)(pkt) && !pkt.lowLevel && ignoredEvents.indexOf(pkt.identifier) < 0;
      })
    };
  }).filter(function (kv) {
    return !!kv.events.length;
  });
  var commands = (0,utils/* arrayConcatMany */.ue)(supportedServices.map(function (service) {
    return service.packets.filter(function (pkt) {
      return (0,jdom_spec/* isCommand */.ao)(pkt) && !pkt.lowLevel && fieldsSupported(pkt);
    }).map(function (pkt) {
      return {
        service: service,
        command: pkt
      };
    });
  }));
  var customBlockDefinitions = [].concat((0,toConsumableArray/* default */.Z)(resolveService(constants/* SRV_LOGGER */.w9j).map(function (service) {
    return {
      kind: "block",
      type: "log",
      // do not rename
      message0: "log %1 with value %2",
      args0: [{
        type: "field_input",
        name: "message"
      }, {
        type: "input_value",
        name: "value"
      }],
      colour: commandColor,
      inputsInline: true,
      previousStatement: codeStatementType,
      nextStatement: codeStatementType,
      tooltip: "Logs a message and an optional value to the logger",
      helpUrl: serviceHelp(service),
      service: service,
      template: "custom"
    };
  })), (0,toConsumableArray/* default */.Z)(resolveService(constants/* SRV_HID_KEYBOARD */.Hg9).map(function (service) {
    return {
      kind: "block",
      type: "key",
      message0: "send %1 key %2",
      args0: [fieldVariable(service), {
        type: KeyboardKeyField.KEY,
        name: "combo"
      }],
      colour: serviceColor(service),
      inputsInline: true,
      previousStatement: codeStatementType,
      nextStatement: codeStatementType,
      tooltip: "Send a keyboard key combo",
      helpUrl: serviceHelp(service),
      service: service,
      expression: "role.key(combo.selectors, combo.modifiers)",
      template: "custom"
    };
  })), (0,toConsumableArray/* default */.Z)(resolveService(constants/* SRV_LED */.i04).map(function (service) {
    return {
      kind: "block",
      type: "fade",
      message0: "fade %1 to %2 at speed %3",
      args0: [fieldVariable(service), {
        type: "input_value",
        name: "color",
        check: "Number"
      }, {
        type: "input_value",
        name: "speed",
        check: "Number"
      }],
      values: {
        color: {
          kind: "block",
          type: LEDColorField.SHADOW.type
        },
        speed: {
          kind: "block",
          type: "jacdac_ratio",
          shadow: true
        }
      },
      colour: serviceColor(service),
      inputsInline: true,
      previousStatement: codeStatementType,
      nextStatement: codeStatementType,
      tooltip: "Fade LED color",
      helpUrl: serviceHelp(service),
      service: service,
      expression: "role.animate((color >> 16) & 0xff, (color >> 8) & 0xff, (color >> 0) & 0xff, speed * 0xff)",
      template: "custom"
    };
  })), (0,toConsumableArray/* default */.Z)(resolveService(constants/* SRV_SEVEN_SEGMENT_DISPLAY */.hvg).map(function (service) {
    return {
      kind: "block",
      type: "set_digits",
      message0: "set %1 digits to %2",
      args0: [fieldVariable(service), {
        type: "input_value",
        name: "digits",
        check: "Number"
      }],
      values: {
        digits: {
          kind: "block",
          type: "math_number"
        }
      },
      colour: serviceColor(service),
      inputsInline: true,
      previousStatement: codeStatementType,
      nextStatement: codeStatementType,
      tooltip: "Display a number of the screen",
      helpUrl: serviceHelp(service),
      service: service,
      // encode digits
      template: "custom"
    };
  })), (0,toConsumableArray/* default */.Z)(resolveService(constants/* SRV_LED_MATRIX */.ZmS).map(function (service) {
    return {
      kind: "block",
      type: "_show_leds",
      message0: "show %1 leds %2",
      args0: [fieldVariable(service), {
        type: LEDMatrixField.KEY,
        name: "leds"
      }],
      colour: serviceColor(service),
      inputsInline: true,
      previousStatement: codeStatementType,
      nextStatement: codeStatementType,
      tooltip: "Display LEDs on the LED matrix",
      helpUrl: serviceHelp(service),
      service: service,
      // encode digits
      template: "custom"
    };
  }))).map(function (def) {
    def.type = "jacdac_custom_" + def.service.shortId.toLowerCase() + "_" + def.type;
    return def;
  });
  console.log("custom blocks", customBlockDefinitions);
  var eventBlocks = events.map(function (_ref) {
    var service = _ref.service,
        events = _ref.events;
    return {
      kind: "block",
      type: "jacdac_events_" + service.shortId,
      message0: "on %1 %2",
      args0: [fieldVariable(service), {
        type: "field_dropdown",
        name: "event",
        options: events.map(function (event) {
          return [(0,jdspec/* humanify */.lW)(event.name), event.name];
        })
      }],
      colour: serviceColor(service),
      inputsInline: true,
      nextStatement: codeStatementType,
      tooltip: "Events for the " + service.name + " service",
      helpUrl: serviceHelp(service),
      service: service,
      events: events,
      template: "event"
    };
  }); // generate accessor blocks for event data with numbers

  var eventFieldBlocks = (0,utils/* arrayConcatMany */.ue)(events.map(function (_ref2) {
    var service = _ref2.service,
        events = _ref2.events;
    return events.filter(function (event) {
      return event.fields.filter(jdspec/* isNumericType */.FV).length > 0;
    }).map(function (event) {
      return {
        service: service,
        event: event
      };
    }).map(function (_ref3) {
      var service = _ref3.service,
          event = _ref3.event;
      return {
        kind: "block",
        type: "jacdac_event_field_" + service.shortId + "_" + event.name,
        message0: event.name + " %1",
        args0: [{
          type: "field_dropdown",
          name: "field",
          options: event.fields.map(function (field) {
            return [(0,jdspec/* humanify */.lW)(field.name), field.name];
          })
        }],
        colour: serviceColor(service),
        inputsInline: true,
        tooltip: "Data fields of the " + event.name + " event",
        helpUrl: serviceHelp(service),
        service: service,
        event: event,
        output: "Number",
        template: "event_field"
      };
    });
  }));
  var registerChangeByEventBlocks = registers.filter(function (_ref4) {
    var service = _ref4.service;
    return !service.packets.some(function (pkt) {
      return (0,jdom_spec/* isEvent */.cO)(pkt) && ignoredEvents.indexOf(pkt.identifier) < 0;
    });
  }).filter(function (_ref5) {
    var register = _ref5.register;
    return register.fields.length === 1 && (0,jdspec/* isNumericType */.FV)(register.fields[0]) && register.identifier !== constants/* SystemReg.Intensity */.ZJq.Intensity;
  }).map(function (_ref6) {
    var service = _ref6.service,
        register = _ref6.register;
    return {
      kind: "block",
      type: "jacdac_change_by_events_" + service.shortId + "_" + register.name,
      message0: "on %1 " + (0,jdspec/* humanify */.lW)(register.name) + " change by %2",
      args0: [fieldVariable(service)].concat((0,toConsumableArray/* default */.Z)(fieldsToFieldInputs(register))).filter(function (v) {
        return !!v;
      }),
      values: fieldsToValues(service, register),
      inputsInline: true,
      nextStatement: codeStatementType,
      colour: serviceColor(service),
      tooltip: "Event raised when " + register.name + " changes",
      helpUrl: serviceHelp(service),
      service: service,
      register: register,
      template: "register_change_event"
    };
  });

  var _splitFilter = (0,utils/* splitFilter */.ap)(registers, function (reg) {
    return reg.register.fields.length == 1;
  }),
      registerSimples = _splitFilter[0],
      registerComposites = _splitFilter[1];

  var _splitFilter2 = (0,utils/* splitFilter */.ap)(registerSimples, function (_ref7) {
    var register = _ref7.register;
    return !!toBlocklyType(register.fields[0]);
  }),
      registerSimpleTypes = _splitFilter2[0],
      registerSimpleOthers = _splitFilter2[1];

  var registerSimplesGetBlocks = registerSimpleTypes.map(function (_ref8) {
    var _customMessage;

    var service = _ref8.service,
        register = _ref8.register;
    return {
      kind: "block",
      type: "jacdac_get_simple_" + service.shortId + "_" + register.name,
      message0: ((_customMessage = customMessage(service, register, register.fields[0])) === null || _customMessage === void 0 ? void 0 : _customMessage.get) || "%1 " + (0,jdspec/* humanify */.lW)(register.name),
      args0: [fieldVariable(service)],
      inputsInline: true,
      output: toBlocklyType(register.fields[0]),
      colour: serviceColor(service),
      tooltip: register.description,
      helpUrl: serviceHelp(service),
      service: service,
      register: register,
      field: register.fields[0],
      template: "register_get"
    };
  });
  var registerSimpleEnumTypes = registerSimpleOthers.filter(function (_ref9) {
    var service = _ref9.service,
        register = _ref9.register;
    return !!enumInfo(service, register.fields[0]);
  }).map(function (_ref10) {
    var service = _ref10.service,
        register = _ref10.register;
    return {
      service: service,
      register: register,
      field: register.fields[0],
      einfo: enumInfo(service, register.fields[0])
    };
  });
  var registerCompositeEnumTypes = (0,utils/* arrayConcatMany */.ue)(registerComposites.map(function (_ref11) {
    var service = _ref11.service,
        register = _ref11.register;
    return register.fields.map(function (field) {
      return {
        service: service,
        register: register,
        field: field,
        einfo: enumInfo(service, field)
      };
    }).filter(function (_ref12) {
      var einfo = _ref12.einfo;
      return !!einfo;
    });
  }));
  var registerEnumGetBlocks = [].concat((0,toConsumableArray/* default */.Z)(registerSimpleEnumTypes), (0,toConsumableArray/* default */.Z)(registerCompositeEnumTypes)).map(function (_ref13) {
    var _customMessage2;

    var service = _ref13.service,
        register = _ref13.register,
        field = _ref13.field,
        einfo = _ref13.einfo;
    return {
      kind: "block",
      type: "jacdac_get_enum_" + service.shortId + "_" + register.name + "_" + field.name,
      message0: ((_customMessage2 = customMessage(service, register, field)) === null || _customMessage2 === void 0 ? void 0 : _customMessage2.get) || "%1 " + (0,jdspec/* humanify */.lW)(register.name) + (field.name === "_" ? "" : " " + field.name) + " %2",
      args0: [fieldVariable(service), {
        type: "field_dropdown",
        name: field.name,
        options: Object.keys(einfo.members).map(function (member) {
          return [(0,jdspec/* humanify */.lW)(member), member];
        })
      }],
      inputsInline: true,
      output: "Boolean",
      colour: serviceColor(service),
      tooltip: register.description,
      helpUrl: serviceHelp(service),
      service: service,
      register: register,
      field: field,
      template: "register_get"
    };
  });
  var registerNumericsGetBlocks = registerComposites.filter(function (re) {
    return re.register.fields.some(jdspec/* isNumericType */.FV);
  }).map(function (_ref14) {
    var service = _ref14.service,
        register = _ref14.register;
    return {
      kind: "block",
      type: "jacdac_get_numerics_" + service.shortId + "_" + register.name,
      message0: "%1 " + (0,jdspec/* humanify */.lW)(register.name) + (register.fields.length > 1 ? " %2" : ""),
      args0: [fieldVariable(service), register.fields.length > 1 ? {
        type: "field_dropdown",
        name: "field",
        options: register.fields.filter(function (f) {
          return (0,jdspec/* isNumericType */.FV)(f);
        }).map(function (field) {
          return [(0,jdspec/* humanify */.lW)(field.name), fieldName(register, field)];
        })
      } : undefined].filter(function (v) {
        return !!v;
      }),
      inputsInline: true,
      output: "Number",
      colour: serviceColor(service),
      tooltip: register.description,
      helpUrl: serviceHelp(service),
      service: service,
      register: register,
      template: "register_get"
    };
  });
  var registerSetBlocks = registers.filter(function (_ref15) {
    var register = _ref15.register;
    return register.kind === "rw";
  }).filter(function (_ref16) {
    var register = _ref16.register;
    return fieldsSupported(register);
  }).map(function (_ref17) {
    var service = _ref17.service,
        register = _ref17.register;
    return {
      kind: "block",
      type: "jacdac_set_" + service.shortId + "_" + register.name,
      message0: isEnabledRegister(register) ? "set %1 %2" : "set %1 " + register.name + " to " + (register.fields.length === 1 ? "%2" : fieldsToMessage(register)),
      args0: [fieldVariable(service)].concat((0,toConsumableArray/* default */.Z)(fieldsToFieldInputs(register))),
      values: fieldsToValues(service, register),
      inputsInline: true,
      colour: serviceColor(service),
      tooltip: register.description,
      helpUrl: serviceHelp(service),
      service: service,
      register: register,
      previousStatement: codeStatementType,
      nextStatement: codeStatementType,
      template: "register_set"
    };
  });
  var commandBlocks = commands.map(function (_ref18) {
    var service = _ref18.service,
        command = _ref18.command;
    return {
      kind: "block",
      type: "jacdac_command_" + service.shortId + "_" + command.name,
      message0: !command.fields.length ? (0,jdspec/* humanify */.lW)(command.name) + " %1" : (0,jdspec/* humanify */.lW)(command.name) + " %1 with " + fieldsToMessage(command),
      args0: [fieldVariable(service)].concat((0,toConsumableArray/* default */.Z)(fieldsToFieldInputs(command))),
      values: fieldsToValues(service, command),
      inputsInline: true,
      colour: serviceColor(service),
      tooltip: command.description,
      helpUrl: serviceHelp(service),
      service: service,
      command: command,
      previousStatement: codeStatementType,
      nextStatement: codeStatementType,
      template: "command"
    };
  });
  var serviceBlocks = [].concat((0,toConsumableArray/* default */.Z)(eventBlocks), (0,toConsumableArray/* default */.Z)(registerChangeByEventBlocks), (0,toConsumableArray/* default */.Z)(registerSimplesGetBlocks), (0,toConsumableArray/* default */.Z)(registerEnumGetBlocks), (0,toConsumableArray/* default */.Z)(registerNumericsGetBlocks), (0,toConsumableArray/* default */.Z)(registerSetBlocks), (0,toConsumableArray/* default */.Z)(customBlockDefinitions), (0,toConsumableArray/* default */.Z)(commandBlocks));
  var shadowBlocks = [].concat((0,toConsumableArray/* default */.Z)(fieldShadows()), [{
    kind: "block",
    type: "jacdac_on_off",
    message0: "%1",
    args0: [{
      type: "field_dropdown",
      name: "value",
      options: [["enabled", "on"], ["disabled", "off"]]
    }],
    style: "logic_blocks",
    output: "Boolean"
  }, {
    kind: "block",
    type: "jacdac_yes_no",
    message0: "%1",
    args0: [{
      type: "field_dropdown",
      name: "value",
      options: [["yes", "on"], ["no", "off"]]
    }],
    style: "logic_blocks",
    output: "Boolean"
  }, {
    kind: "block",
    type: "jacdac_time_picker",
    message0: "%1",
    args0: [{
      type: "field_dropdown",
      name: "value",
      options: [["0.1", "0.1"], ["1", "1"], ["5", "5"], ["30", "30"], ["60", "60"]]
    }],
    style: "math_blocks",
    output: "Number"
  }, {
    kind: "block",
    type: "jacdac_angle",
    message0: "%1",
    args0: [{
      type: "field_angle",
      name: "value",
      min: 0,
      max: 360,
      precision: 10
    }],
    style: "math_blocks",
    output: "Number"
  }, {
    kind: "block",
    type: "jacdac_percent",
    message0: "%1",
    args0: [{
      type: "field_slider",
      name: "value",
      min: 0,
      max: 100,
      precision: 1
    }],
    style: "math_blocks",
    output: "Number"
  }, {
    kind: "block",
    type: "jacdac_byte",
    message0: "%1",
    args0: [{
      type: "field_slider",
      name: "value",
      min: 0,
      max: 255,
      precision: 1
    }],
    style: "math_blocks",
    output: "Number"
  }, {
    kind: "block",
    type: "jacdac_ratio",
    message0: "%1",
    args0: [{
      type: "field_slider",
      name: "value",
      min: 0,
      max: 1,
      precision: 0.1
    }],
    style: "math_blocks",
    output: "Number"
  }, {
    kind: "block",
    type: "jacdac_color",
    message0: "%1",
    args0: [{
      type: "field_colour",
      name: "col",
      colour: "#ff0000",
      colourOptions: ["#ff0000", "#ff8000", "#ffff00", "#ff9da5", "#00ff00", "#b09eff", "#00ffff", "#007fff", "#65471f", "#0000ff", "#7f00ff", "#ff0080", "#ff00ff", "#ffffff", "#999999", "#000000"],
      columns: 4
    }],
    style: "math_blocks",
    output: "Color"
  }]);
  var runtimeBlocks = [{
    kind: "block",
    type: toolbox/* WAIT_BLOCK */.sX,
    message0: "wait %1 s",
    args0: [{
      type: "input_value",
      name: "time",
      check: "Number"
    }],
    inputsInline: true,
    previousStatement: codeStatementType,
    nextStatement: codeStatementType,
    colour: commandColor,
    tooltip: "Wait the desired time",
    helpUrl: ""
  }, {
    kind: "block",
    type: toolbox/* CONNECTION_BLOCK */.CW,
    message0: "on %1 %2",
    args0: [{
      type: "field_variable",
      name: "role",
      variable: "any",
      variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(supportedServices.map(function (service) {
        return service.shortId;
      }))),
      defaultType: "client"
    }, {
      type: "field_dropdown",
      name: "event",
      options: [["connected", "connected"], ["disconnected", "disconnected"]]
    }],
    inputsInline: true,
    nextStatement: codeStatementType,
    colour: commandColor,
    tooltip: "Runs code when a role is connected or disconnected",
    helpUrl: "",
    template: "connection"
  }, {
    kind: "block",
    type: toolbox/* CONNECTED_BLOCK */.rF,
    message0: "%1 connected",
    args0: [{
      type: "field_variable",
      name: "role",
      variable: "any",
      variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(supportedServices.map(function (service) {
        return service.shortId;
      }))),
      defaultType: "client"
    }],
    output: "Boolean",
    inputsInline: true,
    colour: commandColor,
    tooltip: "Runs code when a role is connected or disconnected",
    helpUrl: "",
    template: "connected"
  }, {
    kind: "block",
    type: toolbox/* SET_STATUS_LIGHT_BLOCK */.OU,
    message0: "set %1 status light to %2",
    args0: [{
      type: "field_variable",
      name: "role",
      variable: "all",
      variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(supportedServices.map(function (service) {
        return service.shortId;
      }))),
      defaultType: "client"
    }, {
      type: "input_value",
      name: "color",
      check: "Number"
    }],
    values: {
      color: {
        kind: "block",
        type: LEDColorField.SHADOW.type
      }
    },
    inputsInline: true,
    previousStatement: codeStatementType,
    nextStatement: codeStatementType,
    colour: commandColor,
    tooltip: "Sets the color on the status light",
    helpUrl: ""
  }, {
    kind: "block",
    type: toolbox/* TWIN_BLOCK */.Zt,
    message0: "view %1 %2 %3",
    args0: [{
      type: "field_variable",
      name: "role",
      variable: "none",
      variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(supportedServices.map(function (service) {
        return service.shortId;
      }))),
      defaultType: "client"
    }, {
      type: "input_dummy"
    }, {
      type: TwinField.KEY,
      name: "twin"
    }],
    colour: debuggerColor,
    inputsInline: false,
    tooltip: "Twin of the selected service",
    helpUrl: "",
    template: "twin"
  }, {
    kind: "block",
    type: toolbox/* INSPECT_BLOCK */.Xd,
    message0: "inspect %1 %2 %3",
    args0: [{
      type: "field_variable",
      name: "role",
      variable: "none",
      variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(supportedServices.map(function (service) {
        return service.shortId;
      }))),
      defaultType: "client"
    }, {
      type: "input_dummy"
    }, {
      type: JDomTreeField.KEY,
      name: "twin"
    }],
    colour: debuggerColor,
    inputsInline: false,
    tooltip: "Inspect a service",
    helpUrl: "",
    template: "twin"
  }, {
    kind: "block",
    type: toolbox/* WATCH_BLOCK */.HN,
    message0: "watch %1 %2",
    args0: [{
      type: "input_value",
      name: "value",
      check: ["Number", "Boolean", "String"]
    }, {
      type: WatchValueField.KEY,
      name: "watch"
    }],
    colour: debuggerColor,
    inputsInline: true,
    tooltip: "Watch a value in the editor",
    helpUrl: "",
    template: "watch"
  }, {
    kind: "block",
    type: toolbox/* REPEAT_EVERY_BLOCK */.BB,
    message0: "repeat every %1s",
    args0: [{
      type: "input_value",
      name: "interval",
      check: "Number"
    }],
    colour: commandColor,
    inputsInline: true,
    tooltip: "Repeats code at a given interval in seconds",
    helpUrl: "",
    template: "every",
    nextStatement: codeStatementType
  }];
  var mathBlocks = [{
    kind: "block",
    type: "jacdac_math_arithmetic",
    message0: "%1 %2 %3",
    args0: [{
      type: "input_value",
      name: "A",
      check: "Number"
    }, {
      type: "field_dropdown",
      name: "OP",
      options: [["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"], ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"], ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"], ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"]]
    }, {
      type: "input_value",
      name: "B",
      check: "Number"
    }],
    inputsInline: true,
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
    extensions: ["math_op_tooltip"]
  }, {
    kind: "block",
    type: "jacdac_math_single",
    message0: "%1 %2",
    args0: [{
      type: "field_dropdown",
      name: "OP",
      options: [["-", "NEG"], ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", "ABS"]]
    }, {
      type: "input_value",
      name: "NUM",
      check: "Number"
    }],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_SINGLE_HELPURL}",
    extensions: ["math_op_tooltip"]
  }, {
    kind: "block",
    type: "jacdac_math_random",
    message0: "random",
    args0: [],
    output: "Number",
    style: "math_blocks"
  }, {
    kind: "block",
    type: "jacdac_math_random_range",
    message0: "random from %1 to %2",
    args0: [{
      type: "input_value",
      name: "min",
      check: "Number"
    }, {
      type: "input_value",
      name: "max",
      check: "Number"
    }],
    output: "Number",
    style: "math_blocks",
    inputsInline: true
  }, {
    kind: "block",
    type: "jacdac_math_map",
    message0: "map %1 from [%2, %3] to [%4, %5]",
    args0: [{
      type: "input_value",
      name: "value",
      check: "Number"
    }, {
      type: "input_value",
      name: "fromMin",
      check: "Number"
    }, {
      type: "input_value",
      name: "fromMax",
      check: "Number"
    }, {
      type: "input_value",
      name: "toMin",
      check: "Number"
    }, {
      type: "input_value",
      name: "toMax",
      check: "Number"
    }],
    output: "Number",
    style: "math_blocks"
  }];
  var deviceTwinsBlocks = [{
    kind: "block",
    type: toolbox/* DEVICE_TWIN_DEFINITION_BLOCK */.M1,
    message0: "device twin id %1",
    args0: [{
      type: "field_input",
      name: "id"
    }],
    inputsInline: true,
    nextStatement: deviceTwinStatementType,
    template: "dtdl",
    colour: deviceTwinColor
  }, {
    kind: "block",
    type: toolbox/* DEVICE_TWIN_DESIRED_PROPERTY_BLOCK */.A9,
    message0: "desired property %1 %2 %3",
    args0: [{
      type: "field_variable",
      name: "name",
      variable: "reported property 1",
      variableTypes: [toolbox/* DEVICE_TWIN_PROPERTY_TYPE */.pv],
      defaultType: toolbox/* DEVICE_TWIN_PROPERTY_TYPE */.pv
    }, {
      type: "input_dummy"
    }, {
      type: "input_statement",
      name: "options",
      check: deviceTwinPropertyOptionStatementType
    }],
    previousStatement: deviceTwinStatementType,
    nextStatement: deviceTwinStatementType,
    template: "dtdl",
    colour: deviceTwinColor,
    inputsInline: false
  }, {
    kind: "block",
    type: "device_twin_option_desired_value",
    message0: "desired value %1 %2 %3",
    args0: [{
      type: "field_variable",
      name: "variable",
      variable: "desired value 1",
      variableTypes: [toolbox/* DEVICE_TWIN_VALUE_TYPE */.wz],
      defaultType: toolbox/* DEVICE_TWIN_VALUE_TYPE */.wz
    }, {
      type: "field_dropdown",
      name: "type",
      options: ["float", "boolean", "string", "integer"].map(function (unit) {
        return [unit, unit];
      })
    }, {
      type: "field_dropdown",
      name: "unit",
      options: (0,dtdl/* DTDLUnits */.d0)().map(function (unit) {
        return [unit, unit];
      })
    }],
    previousStatement: deviceTwinCommonOptionStatementType,
    nextStatement: deviceTwinCommonOptionStatementType,
    template: "dtdlOption",
    colour: deviceTwinColor,
    inputsInline: false
  }, {
    kind: "block",
    type: toolbox/* DEVICE_TWIN_REPORTED_PROPERTY_BLOCK */.e3,
    message0: "reported property %1 %2 %3",
    args0: [{
      type: "field_variable",
      name: "name",
      variable: "desired property 1",
      variableTypes: [toolbox/* DEVICE_TWIN_PROPERTY_TYPE */.pv],
      defaultType: toolbox/* DEVICE_TWIN_PROPERTY_TYPE */.pv
    }, {
      type: "input_dummy"
    }, {
      type: "input_statement",
      name: "options",
      check: deviceTwinPropertyOptionStatementType
    }],
    previousStatement: deviceTwinStatementType,
    nextStatement: deviceTwinStatementType,
    template: "dtdl",
    colour: deviceTwinColor,
    inputsInline: false
  }, // options
  {
    kind: "block",
    type: "device_twin_option_reported_value",
    message0: "reported value %1 %2 %3 %4",
    args0: [{
      type: "field_variable",
      name: "variable",
      variable: "reported value 1",
      variableTypes: [toolbox/* DEVICE_TWIN_VALUE_TYPE */.wz],
      defaultType: toolbox/* DEVICE_TWIN_VALUE_TYPE */.wz
    }, {
      type: "field_dropdown",
      name: "type",
      options: ["float", "boolean", "string", "integer"].map(function (unit) {
        return [unit, unit];
      })
    }, {
      type: "field_dropdown",
      name: "unit",
      options: (0,dtdl/* DTDLUnits */.d0)().map(function (unit) {
        return [unit, unit];
      })
    }, {
      type: "input_value",
      name: "value"
    }],
    previousStatement: deviceTwinCommonOptionStatementType,
    nextStatement: deviceTwinCommonOptionStatementType,
    template: "dtdlOption",
    colour: deviceTwinColor,
    inputsInline: false
  }, {
    kind: "block",
    type: "device_twin_option_comment",
    message0: "%1 %2",
    args0: [{
      type: "field_dropdown",
      name: "type",
      options: [["comment", "comment"], ["description", "description"], ["display name", "displayName"]]
    }, {
      type: "field_multilinetext",
      name: "text"
    }],
    previousStatement: deviceTwinCommonOptionStatementType,
    nextStatement: deviceTwinCommonOptionStatementType,
    template: "dtdlOption",
    colour: deviceTwinColor,
    inputsInline: false
  }, // events
  {
    kind: "block",
    type: "device_twin_reported_property_change",
    message0: "on reported property change",
    args0: [],
    nextStatement: codeStatementType,
    colour: deviceTwinColor
  }];
  var blocks = [].concat((0,toConsumableArray/* default */.Z)(serviceBlocks), (0,toConsumableArray/* default */.Z)(eventFieldBlocks), runtimeBlocks, (0,toConsumableArray/* default */.Z)(shadowBlocks), mathBlocks, deviceTwinsBlocks); // register field editors

  registerFields(); // re-register blocks with blocklys

  blocks.forEach(function (block) {
    return (blockly_default()).Blocks[block.type] = {
      jacdacDefinition: block,
      init: function init() {
        this.jsonInit(block);
      }
    };
  }); // final mapping

  var jdBlocks = serviceBlocks.filter(function (block) {
    return !!block.service;
  });
  var services = (0,utils/* uniqueMap */.EM)(jdBlocks, function (block) {
    return block.service.shortId;
  }, function (block) {
    return block.service;
  });
  console.debug("vmblocks", {
    blocks: blocks,
    serviceBlocks: serviceBlocks,
    services: services
  });
  return {
    blocks: blocks,
    serviceBlocks: serviceBlocks,
    eventFieldBlocks: eventFieldBlocks,
    deviceTwinsBlocks: deviceTwinsBlocks,
    services: services
  };
}

function patchCategoryJSONtoXML(cat) {
  var _cat$contents;

  if (cat.button) {
    if (!cat.contents) cat.contents = [];
    cat.contents.unshift(cat.button);
  }

  (_cat$contents = cat.contents) === null || _cat$contents === void 0 ? void 0 : _cat$contents.filter(function (node) {
    return node.kind === "block";
  }).map(function (node) {
    return node;
  }).filter(function (block) {
    var exists = (blockly_default()).Blocks[block.type];
    if (!exists && flags/* default.diagnostics */.Z.diagnostics) console.warn("block type '" + block.type + "' not found, consider refreshing page...");
    return !!block.values && exists;
  }) // avoid broken blocks
  .forEach(function (block) {
    // yup, this suck but we have to go through it
    block.blockxml = "<block type=\"" + block.type + "\">" + Object.keys(block.values).map(function (name) {
      var type = block.values[name].type;
      return "<value name=\"" + name + "\"><shadow type=\"" + type + "\" /></value>";
    }).join("\n") + "</block>";
    delete block.type;
  });
  return cat;
}

function useToolbox(props) {
  var _source$blocks;

  var serviceClass = props.serviceClass,
      source = props.source,
      program = props.program;
  var theme = (0,useTheme/* default */.Z)();

  var _createBlockTheme = createBlockTheme(theme),
      serviceColor = _createBlockTheme.serviceColor,
      commandColor = _createBlockTheme.commandColor,
      debuggerColor = _createBlockTheme.debuggerColor,
      deviceTwinColor = _createBlockTheme.deviceTwinColor;

  var _useMemo = (0,react.useMemo)(function () {
    return loadBlocks(serviceColor, commandColor, debuggerColor, deviceTwinColor);
  }, [theme]),
      serviceBlocks = _useMemo.serviceBlocks,
      eventFieldBlocks = _useMemo.eventFieldBlocks,
      deviceTwinsBlocks = _useMemo.deviceTwinsBlocks,
      services = _useMemo.services;

  var blockServices = (program === null || program === void 0 ? void 0 : program.roles.map(function (r) {
    return r.serviceShortId;
  })) || (source === null || source === void 0 ? void 0 : source.variables.map(function (v) {
    return v.type;
  })) || [];
  var liveServices = (0,useServices/* default */.Z)({
    specification: true
  });
  var usedEvents = new Set(source === null || source === void 0 ? void 0 : (_source$blocks = source.blocks) === null || _source$blocks === void 0 ? void 0 : _source$blocks.map(function (block) {
    return {
      block: block,
      definition: (0,toolbox/* resolveServiceBlockDefinition */.yn)(block.type)
    };
  }).filter(function (_ref19) {
    var definition = _ref19.definition;
    return definition.template === "event";
  }).map(function (_ref20) {
    var block = _ref20.block,
        definition = _ref20.definition;
    var eventName = block.inputs[0].fields["event"].value;
    return definition.events.find(function (ev) {
      return ev.name === eventName;
    });
  }).filter(function (ev) {
    return !!ev;
  }));
  var toolboxServices = (0,utils/* uniqueMap */.EM)(flags/* default.diagnostics */.Z.diagnostics ? services : [].concat((0,toConsumableArray/* default */.Z)(blockServices.map(function (srvid) {
    return services.find(function (service) {
      return service.shortId === srvid;
    });
  }).filter(function (srv) {
    return !!srv;
  })), (0,toConsumableArray/* default */.Z)(liveServices.map(function (srv) {
    return srv.specification;
  }))).filter(function (srv) {
    return !serviceClass || srv.classIdentifier === serviceClass;
  }), function (srv) {
    return srv.shortId;
  }, function (srv) {
    return srv;
  }).filter(function (srv) {
    return srv && ignoredServices.indexOf(srv.classIdentifier) < 0;
  }).sort(function (l, r) {
    return l.name.localeCompare(r.name);
  });
  var servicesCategories = toolboxServices.map(function (service) {
    return {
      service: service,
      serviceBlocks: serviceBlocks.filter(function (block) {
        return block.service === service;
      })
    };
  }).map(function (_ref21) {
    var service = _ref21.service,
        serviceBlocks = _ref21.serviceBlocks;
    return {
      kind: "category",
      name: service.name,
      colour: serviceColor(service),
      contents: [].concat((0,toConsumableArray/* default */.Z)(serviceBlocks.map(function (block) {
        return {
          kind: "block",
          type: block.type,
          values: block.values
        };
      })), (0,toConsumableArray/* default */.Z)(eventFieldBlocks.filter(function (ev) {
        return ev.service === service && usedEvents.has(ev.event);
      }).map(function (block) {
        return {
          kind: "block",
          type: block.type,
          values: block.values
        };
      }))),
      button: {
        kind: "button",
        text: "Add " + service.name + " role",
        callbackKey: "jacdac_add_role_callback_" + service.shortId,
        service: service
      }
    };
  }).filter(function (cat) {
    var _cat$contents2;

    return !!((_cat$contents2 = cat.contents) !== null && _cat$contents2 !== void 0 && _cat$contents2.length);
  });
  var commandsCategory = {
    kind: "category",
    name: "Commands",
    colour: commandColor,
    contents: [{
      kind: "block",
      type: toolbox/* REPEAT_EVERY_BLOCK */.BB,
      values: {
        interval: {
          kind: "block",
          type: "jacdac_time_picker"
        }
      }
    }, {
      kind: "block",
      type: toolbox/* WAIT_BLOCK */.sX,
      values: {
        time: {
          kind: "block",
          type: "jacdac_time_picker"
        }
      }
    }, {
      kind: "block",
      type: toolbox/* CONNECTION_BLOCK */.CW
    }, {
      kind: "block",
      type: toolbox/* CONNECTED_BLOCK */.rF
    }, {
      kind: "block",
      type: toolbox/* SET_STATUS_LIGHT_BLOCK */.OU,
      values: {
        color: {
          kind: "block",
          type: LEDColorField.SHADOW.type
        }
      }
    }, {
      kind: "block",
      type: toolbox/* LOG_BLOCK */.NK
    }].filter(function (b) {
      return !!b;
    })
  };
  var toolsCategory = {
    kind: "category",
    name: "Tools",
    colour: debuggerColor,
    contents: [{
      kind: "block",
      type: toolbox/* WATCH_BLOCK */.HN
    }, {
      kind: "block",
      type: toolbox/* TWIN_BLOCK */.Zt
    }, {
      kind: "block",
      type: toolbox/* INSPECT_BLOCK */.Xd
    }].filter(function (b) {
      return !!b;
    })
  };
  var logicCategory = {
    kind: "category",
    name: "Logic",
    colour: "%{BKY_LOGIC_HUE}",
    contents: [{
      kind: "block",
      type: "dynamic_if"
    }, {
      kind: "block",
      type: "logic_compare",
      values: {
        A: {
          kind: "block",
          type: "math_number"
        },
        B: {
          kind: "block",
          type: "math_number"
        }
      }
    }, {
      kind: "block",
      type: "logic_operation",
      values: {
        A: {
          kind: "block",
          type: "logic_boolean"
        },
        B: {
          kind: "block",
          type: "logic_boolean"
        }
      }
    }, {
      kind: "block",
      type: "logic_negate",
      values: {
        BOOL: {
          kind: "block",
          type: "logic_boolean"
        }
      }
    }, {
      kind: "block",
      type: "logic_boolean"
    }]
  };
  var mathCategory = {
    kind: "category",
    name: "Math",
    colour: "%{BKY_MATH_HUE}",
    contents: [{
      kind: "block",
      type: "jacdac_math_arithmetic",
      values: {
        A: {
          kind: "block",
          type: "math_number"
        },
        B: {
          kind: "block",
          type: "math_number"
        }
      }
    }, {
      kind: "block",
      type: "jacdac_math_single",
      values: {
        NUM: {
          kind: "block",
          type: "math_number"
        }
      }
    }, {
      kind: "block",
      type: "jacdac_math_random"
    }, {
      kind: "block",
      type: "jacdac_math_random_range"
    }, {
      kind: "block",
      type: "jacdac_math_map"
    }, {
      kind: "block",
      type: "math_number"
    }]
  };
  var variablesCategory = {
    kind: "category",
    name: "Variables",
    colour: "%{BKY_VARIABLES_HUE}",
    custom: "VARIABLE"
  };
  var deviceTwinsCategory = {
    kind: "category",
    name: "Device Twin",
    colour: deviceTwinColor,
    contents: (0,toConsumableArray/* default */.Z)(deviceTwinsBlocks.map(function (_ref22) {
      var type = _ref22.type;
      return {
        kind: "block",
        type: type
      };
    }))
  };
  var toolboxConfiguration = {
    kind: "categoryToolbox",
    contents: [deviceTwinsCategory].concat((0,toConsumableArray/* default */.Z)(servicesCategories), [{
      kind: "sep"
    }, commandsCategory, logicCategory, mathCategory, variablesCategory, {
      kind: "sep"
    }, toolsCategory]).filter(function (cat) {
      return !!cat;
    }).map(function (node) {
      return node.kind === "category" ? patchCategoryJSONtoXML(node) : node;
    })
  };
  return {
    serviceBlocks: serviceBlocks,
    toolboxConfiguration: toolboxConfiguration,
    newProjectXml: toolbox/* NEW_PROJET_XML */.Uz
  };
}
function useToolboxButtons(workspace, toolboxConfiguration) {
  // track workspace changes and update callbacks
  (0,react.useEffect)(function () {
    if (!workspace) return; // collect buttons

    var buttons = toolboxConfiguration === null || toolboxConfiguration === void 0 ? void 0 : toolboxConfiguration.contents // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map(function (cat) {
      return cat.button;
    }).filter(function (btn) {
      return !!btn;
    });
    buttons === null || buttons === void 0 ? void 0 : buttons.forEach(function (button) {
      return workspace.registerButtonCallback(button.callbackKey, function () {
        return blockly_default().Variables.createVariableButtonHandler(workspace, null, button.service.shortId);
      });
    });
  }, [workspace, JSON.stringify(toolboxConfiguration)]);
}
// EXTERNAL MODULE: ./src/components/vm/BlocklyModalDialogs.tsx
var BlocklyModalDialogs = __webpack_require__(50769);
// EXTERNAL MODULE: ./src/components/vm/jsongenerator.ts
var jsongenerator = __webpack_require__(8374);
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(91350);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js + 1 modules
var wrapNativeSuper = __webpack_require__(57869);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat-map.js
var es_array_flat_map = __webpack_require__(86535);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unscopables.flat-map.js
var es_array_unscopables_flat_map = __webpack_require__(99244);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/compile.ts + 1 modules
var compile = __webpack_require__(79973);
;// CONCATENATED MODULE: ./src/components/vm/VMgenerator.ts









var ops = {
  AND: "&&",
  OR: "||",
  EQ: "===",
  NEQ: "!==",
  LT: "<",
  GT: ">",
  LTE: "<=",
  GTE: ">=",
  NEG: "-",
  ADD: "+",
  MULTIPLY: "*",
  DIVIDE: "/",
  MINUS: "-"
};
var BUILTIN_TYPES = ["", "Boolean", "Number", "String"];
function workspaceJSONToVMProgram(workspace) {
  console.debug("compile vm", {
    workspace: workspace
  });
  var roles = workspace.variables.filter(function (v) {
    return BUILTIN_TYPES.indexOf(v.type) < 0;
  }).map(function (v) {
    return {
      role: v.name,
      serviceShortId: v.type
    };
  });

  var EmptyExpression = /*#__PURE__*/function (_Error) {
    (0,inheritsLoose/* default */.Z)(EmptyExpression, _Error);

    function EmptyExpression() {
      return _Error.apply(this, arguments) || this;
    }

    return EmptyExpression;
  }( /*#__PURE__*/(0,wrapNativeSuper/* default */.Z)(Error));

  var blockToExpression = function blockToExpression(ev, blockIn) {
    var errors = [];

    var blockToExpressionInner = function blockToExpressionInner(ev, block) {
      if (!block) {
        throw new EmptyExpression();
      }

      var type = block.type,
          value = block.value,
          inputs = block.inputs;
      console.log("block2e", {
        ev: ev,
        block: block,
        type: type,
        value: value,
        inputs: inputs
      });
      if (value !== undefined) // literal
        return {
          type: "Literal",
          value: value,
          raw: value + ""
        };

      switch (type) {
        case "jacdac_math_single":
          {
            var argument = blockToExpressionInner(ev, inputs[0].child);
            var op = inputs[0].fields["op"].value;
            return {
              type: "UnaryExpression",
              operator: ops[op] || op,
              argument: argument,
              prefix: false // TODO:?

            };
          }

        case "jacdac_math_arithmetic":
          {
            var left = blockToExpressionInner(ev, inputs[0].child);
            var right = blockToExpressionInner(ev, inputs[1].child);
            var _op = inputs[1].fields["op"].value;
            return {
              type: "BinaryExpression",
              operator: ops[_op] || _op,
              left: left,
              right: right
            };
          }

        case "logic_operation":
          {
            var _left = blockToExpressionInner(ev, inputs[0].child);

            var _right = blockToExpressionInner(ev, inputs[1].child);

            var _op2 = inputs[1].fields["op"].value;
            return {
              type: "LogicalExpression",
              operator: ops[_op2] || _op2,
              left: _left,
              right: _right
            };
          }

        case "logic_negate":
          {
            var _argument = blockToExpressionInner(ev, inputs[0].child);

            return {
              type: "UnaryExpression",
              operator: "!",
              argument: _argument,
              prefix: false // TODO:?

            };
          }

        case "logic_compare":
          {
            var _left2 = blockToExpressionInner(ev, inputs[0].child);

            var _right2 = blockToExpressionInner(ev, inputs[1].child);

            var _op3 = inputs[1].fields["op"].value;
            return {
              type: "BinaryExpression",
              operator: ops[_op3] || _op3,
              left: _left2,
              right: _right2
            };
          }

        default:
          {
            var def = (0,toolbox/* resolveServiceBlockDefinition */.yn)(type);

            if (!def) {
              console.warn("unknown block " + type, {
                type: type,
                ev: ev,
                block: block,
                d: (blockly_default()).Blocks[type]
              });
            } else {
              var template = def.template;
              console.log("get", {
                type: type,
                def: def,
                template: template
              });

              switch (template) {
                case "register_get":
                  {
                    var _ref = def,
                        register = _ref.register;
                    var role = inputs[0].fields["role"].value;
                    var field = inputs[0].fields["field"];
                    return (0,compile/* toMemberExpression */.vf)(role, field ? (0,compile/* toMemberExpression */.vf)(register.name, field.value) : register.name);
                  }

                case "event_field":
                  {
                    var _ref2 = def,
                        event = _ref2.event;

                    if (ev.event !== event.name) {
                      errors.push({
                        sourceId: block.id,
                        message: "Event " + event.name + " is not available in this handler."
                      });
                    }

                    var _field = inputs[0].fields["field"];
                    return (0,compile/* toMemberExpression */.vf)(ev.role, (0,compile/* toMemberExpression */.vf)(ev.event, _field.value));
                  }

                case "shadow":
                  {
                    var _field2 = inputs[0].fields["value"];
                    var _value = _field2.value;
                    return {
                      type: "Literal",
                      value: _value,
                      raw: _value + ""
                    };
                  }

                default:
                  {
                    console.warn("unsupported block template " + template + " for " + type, {
                      ev: ev,
                      block: block
                    });
                    break;
                  }
              }

              break;
            }
          }
      }

      throw new EmptyExpression();
    };

    return {
      expr: blockToExpressionInner(ev, blockIn),
      errors: errors
    };
  };

  var makeVMBase = function makeVMBase(block, command) {
    return {
      sourceId: block.id,
      type: "cmd",
      command: command
    };
  };

  var processErrors = function processErrors(block, errors) {
    return errors.map(function (e) {
      return {
        sourceId: e.sourceId ? e.sourceId : block.id,
        message: e.message
      };
    });
  };

  var makeWait = function makeWait(event, block) {
    var inputs = block.inputs;
    {
      var _blockToExpression = blockToExpression(event, inputs[0].child),
          time = _blockToExpression.expr,
          errors = _blockToExpression.errors;

      return {
        cmd: makeVMBase(block, {
          type: "CallExpression",
          arguments: [time],
          callee: (0,compile/* toIdentifier */.EB)("wait")
        }),
        errors: processErrors(block, errors)
      };
    }
  };

  var blockToCommand = function blockToCommand(event, block) {
    var type = block.type,
        inputs = block.inputs;

    switch (type) {
      case toolbox/* WAIT_BLOCK */.sX:
        return makeWait(event, block);

      case "dynamic_if":
        {
          var _inputs$, _inputs$2;

          var thenHandler = {
            commands: [],
            errors: []
          };
          var elseHandler = {
            commands: [],
            errors: []
          };
          var t = (_inputs$ = inputs[1]) === null || _inputs$ === void 0 ? void 0 : _inputs$.child;
          var e = (_inputs$2 = inputs[2]) === null || _inputs$2 === void 0 ? void 0 : _inputs$2.child;

          if (t) {
            addCommands(event, [t].concat((0,toConsumableArray/* default */.Z)(t.children ? t.children : [])), thenHandler);
          }

          if (e) {
            addCommands(event, [e].concat((0,toConsumableArray/* default */.Z)(e.children ? e.children : [])), elseHandler);
          }

          var exprErrors = undefined;

          try {
            var _inputs$3;

            exprErrors = blockToExpression(event, (_inputs$3 = inputs[0]) === null || _inputs$3 === void 0 ? void 0 : _inputs$3.child);
          } catch (e) {
            if (e instanceof EmptyExpression) {
              exprErrors = {
                expr: {
                  type: "Literal",
                  value: false,
                  raw: "false "
                },
                errors: []
              };
            } else {
              throw e;
            }
          }

          var _exprErrors = exprErrors,
              expr = _exprErrors.expr,
              errors = _exprErrors.errors;
          var ifThenElse = {
            sourceId: block.id,
            type: "ite",
            expr: expr,
            then: thenHandler.commands,
            else: elseHandler.commands
          };
          return {
            cmd: ifThenElse,
            errors: processErrors(block, errors.concat(thenHandler.errors).concat(elseHandler.errors))
          };
        }
      // more builts

      default:
        {
          var def = (0,toolbox/* resolveServiceBlockDefinition */.yn)(type);

          if (def) {
            var template = def.template;

            switch (template) {
              case "register_set":
                {
                  var _ref3 = def,
                      register = _ref3.register;

                  var _blockToExpression2 = blockToExpression(event, inputs[0].child),
                      _expr = _blockToExpression2.expr,
                      _errors = _blockToExpression2.errors;

                  var role = inputs[0].fields.role.value;
                  return {
                    cmd: makeVMBase(block, {
                      type: "CallExpression",
                      arguments: [(0,compile/* toMemberExpression */.vf)(role, register.name), _expr],
                      callee: (0,compile/* toIdentifier */.EB)("writeRegister")
                    }),
                    errors: processErrors(block, _errors)
                  };
                }

              case "command":
                {
                  var _ref4 = def,
                      serviceCommand = _ref4.command;
                  var _role = inputs[0].fields.role.value;
                  var exprsErrors = inputs.map(function (a) {
                    return blockToExpression(event, a.child);
                  });
                  return {
                    cmd: makeVMBase(block, {
                      type: "CallExpression",
                      arguments: exprsErrors.map(function (p) {
                        return p.expr;
                      }),
                      callee: (0,compile/* toMemberExpression */.vf)(_role, serviceCommand.name)
                    }),
                    errors: processErrors(block, exprsErrors.flatMap(function (p) {
                      return p.errors;
                    }))
                  };
                }

              default:
                {
                  console.warn("unsupported block template " + template + " for " + type, {
                    block: block
                  });
                  return {
                    cmd: undefined,
                    errors: []
                  };
                }
            }
          }
        }
    }
  };

  var nop = {
    type: "CallExpression",
    arguments: [],
    callee: (0,compile/* toIdentifier */.EB)("nop")
  };

  var addCommands = function addCommands(event, blocks, handler) {
    blocks === null || blocks === void 0 ? void 0 : blocks.forEach(function (child) {
      if (child) {
        try {
          var _blockToCommand = blockToCommand(event, child),
              cmd = _blockToCommand.cmd,
              errors = _blockToCommand.errors;

          if (cmd) handler.commands.push(cmd);
          errors.forEach(function (e) {
            return handler.errors.push(e);
          });
        } catch (e) {
          if (e instanceof EmptyExpression) {
            handler.commands.push({
              sourceId: child.id,
              type: "cmd",
              command: nop
            });
          }
        }
      }
    });
  };

  var handlers = workspace.blocks.map(function (top) {
    var type = top.type,
        inputs = top.inputs;
    var command = undefined;
    var topEvent = undefined;
    var topErrors = [];
    var def = (0,toolbox/* resolveServiceBlockDefinition */.yn)(type);
    (0,utils/* assert */.hu)(!!def);
    var template = def.template;

    try {
      switch (template) {
        case "twin":
          break;
        // ignore

        case "every":
          {
            var _makeWait = makeWait(undefined, top),
                cmd = _makeWait.cmd,
                errors = _makeWait.errors;

            command = cmd.command;
            topErrors = errors;
            break;
          }

        case "event":
          {
            var role = inputs[0].fields["role"].value;
            var eventName = inputs[0].fields["event"].value;
            command = {
              type: "CallExpression",
              arguments: [(0,compile/* toMemberExpression */.vf)(role.toString(), eventName.toString())],
              callee: (0,compile/* toIdentifier */.EB)("awaitEvent")
            };
            topEvent = {
              role: role.toString(),
              event: eventName.toString()
            };
            break;
          }

        case "register_change_event":
          {
            var _role2 = inputs[0].fields["role"].value;
            var _ref5 = def,
                register = _ref5.register;

            var _blockToExpression3 = blockToExpression(undefined, inputs[0].child),
                expr = _blockToExpression3.expr,
                _errors2 = _blockToExpression3.errors;

            command = {
              type: "CallExpression",
              arguments: [(0,compile/* toMemberExpression */.vf)(_role2.toString(), register.name), expr],
              callee: (0,compile/* toIdentifier */.EB)("awaitChange")
            };
            topErrors = _errors2;
            break;
          }

        case "watch":
          {
            var _blockToExpression4 = blockToExpression(undefined, inputs[0].child),
                _expr2 = _blockToExpression4.expr,
                _errors3 = _blockToExpression4.errors;

            command = {
              type: "CallExpression",
              arguments: [_expr2],
              callee: (0,compile/* toIdentifier */.EB)("watch")
            };
            topErrors = _errors3;
            break;
          }

        default:
          {
            console.warn("unsupported handler template " + template + " for " + type, {
              top: top
            });
            break;
          }
      }
    } catch (e) {
      if (e instanceof EmptyExpression) {
        command = nop;
        topErrors = [];
      } else {
        throw e;
      }
    }

    var handler = {
      commands: [{
        sourceId: top.id,
        type: "cmd",
        command: command
      }],
      errors: topErrors
    };
    addCommands(topEvent, top.children, handler);
    return handler;
  });
  return {
    roles: roles,
    handlers: handlers
  };
}
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./src/components/vm/useBlocklyEvents.ts
var useBlocklyEvents = __webpack_require__(52152);
// EXTERNAL MODULE: ./src/components/vm/useBlocklyPlugins.ts + 8 modules
var useBlocklyPlugins = __webpack_require__(30567);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(35313);
;// CONCATENATED MODULE: ./src/components/vm/VMBlockEditor.tsx

















var useStyles = (0,makeStyles/* default */.Z)(function (theme) {
  return (0,createStyles/* default */.Z)({
    editor: {
      height: "calc(100vh - 10rem)",
      "& .blocklyTreeLabel": {
        fontFamily: theme.typography.fontFamily
      },
      "& .blocklyText": {
        fontWeight: "normal !important",
        fontFamily: theme.typography.fontFamily + " !important"
      }
    }
  });
});
function VMBlockEditor(props) {
  var className = props.className,
      onXmlChange = props.onXmlChange,
      onJSONChange = props.onJSONChange,
      onVMProgramChange = props.onVMProgramChange,
      initialXml = props.initialXml,
      serviceClass = props.serviceClass,
      runner = props.runner,
      roleManager = props.roleManager,
      workspaceRef = props.workspaceRef;
  var classes = useStyles();

  var _useContext = (0,react.useContext)(DarkModeContext/* default */.Z),
      darkMode = _useContext.darkMode;

  var _useContext2 = (0,react.useContext)(AppContext/* default */.ZP),
      setError = _useContext2.setError;

  var _useState = (0,react.useState)(),
      source = _useState[0],
      setSource = _useState[1];

  var _useState2 = (0,react.useState)(),
      program = _useState2[0],
      setProgram = _useState2[1];

  var _useToolbox = useToolbox({
    serviceClass: serviceClass,
    source: source,
    program: program
  }),
      toolboxConfiguration = _useToolbox.toolboxConfiguration,
      newProjectXml = _useToolbox.newProjectXml;

  var theme = darkMode === "dark" ? theme_dark_src/* default */.Z : src/* default */.Z;
  var gridColor = darkMode === "dark" ? "#555" : "#ccc"; // ReactBlockly
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var blocklyRef = (0,react.useRef)(null);

  var _ref = (0,dist/* useBlocklyWorkspace */.JP)({
    ref: blocklyRef,
    toolboxConfiguration: toolboxConfiguration,
    workspaceConfiguration: {
      collapse: false,
      disable: false,
      comments: false,
      css: true,
      trashcan: false,
      sounds: false,
      grid: {
        spacing: 25,
        length: 1,
        colour: gridColor,
        snap: true
      },
      renderer: "zelos",
      theme: theme,
      oneBasedIndex: false,
      move: {
        scrollbars: {
          vertical: true,
          horizontal: true
        }
      },
      media: (0,gatsby_browser_entry.withPrefix)("blockly/media/"),
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.1,
        scaleSpeed: 1.2,
        pinch: true
      }
    },
    initialXml: initialXml || newProjectXml,
    onImportXmlError: function onImportXmlError() {
      return setError("Error loading blocks...");
    }
  }),
      workspace = _ref.workspace,
      xml = _ref.xml; // store ref


  (0,react.useEffect)(function () {
    if (workspaceRef) {
      workspaceRef.current = workspace;
      return function () {
        return workspaceRef.current = undefined;
      };
    }
  }, [workspace, workspaceRef]); // surface state to react

  (0,react.useEffect)(function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var ws = workspace;
    if (ws) ws.jacdacServices = new WorkspaceContext/* WorkspaceServices */.yq();
  }, [workspace]);
  (0,react.useEffect)(function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var ws = workspace;
    var services = ws === null || ws === void 0 ? void 0 : ws.jacdacServices;

    if (services) {
      services.runner = runner;
    }
  }, [workspace, runner]);
  (0,react.useEffect)(function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var ws = workspace;
    var services = ws === null || ws === void 0 ? void 0 : ws.jacdacServices;

    if (services) {
      services.roleManager = roleManager;
    }
  }, [workspace, roleManager]); // plugins

  (0,useBlocklyPlugins/* default */.Z)(workspace);
  (0,useBlocklyEvents/* default */.Z)(workspace);
  useToolboxButtons(workspace, toolboxConfiguration); // blockly did a change

  (0,react.useEffect)(function () {
    if (!workspace || workspace.isDragging()) return;
    onXmlChange === null || onXmlChange === void 0 ? void 0 : onXmlChange(xml); // save json

    if (onJSONChange || onVMProgramChange) {
      // emit json
      var newSource = (0,jsongenerator/* domToJSON */.iL)(workspace);

      if (JSON.stringify(newSource) !== JSON.stringify(source)) {
        setSource(newSource);
        onJSONChange === null || onJSONChange === void 0 ? void 0 : onJSONChange(newSource);

        if (onVMProgramChange) {
          try {
            var newProgram = workspaceJSONToVMProgram(newSource);

            if (JSON.stringify(newProgram) !== JSON.stringify(program)) {
              setProgram(newProgram);
              onVMProgramChange(newProgram);
            }
          } catch (e) {
            console.error(e);
            onVMProgramChange(undefined);
          }
        }
      }
    }
  }, [workspace, xml]); // apply errors

  (0,react.useEffect)(function () {
    if (!workspace) return;
    var allErrors = (0,utils/* toMap */.qL)((0,utils/* arrayConcatMany */.ue)(program === null || program === void 0 ? void 0 : program.handlers.map(function (h) {
      var _h$errors;

      return (_h$errors = h.errors) === null || _h$errors === void 0 ? void 0 : _h$errors.filter(function (e) {
        return !!e.sourceId;
      });
    })) || [], function (e) {
      return e.sourceId;
    }, function (e) {
      return e.message;
    });
    workspace.getAllBlocks(false).forEach(function (b) {
      return b.setWarningText(allErrors[b.id] || null);
    });
  }, [workspace, program]); // resize blockly

  (0,react.useEffect)(function () {
    var observer = new ResizeObserver(function () {
      return workspace === null || workspace === void 0 ? void 0 : workspace.resize();
    });
    observer.observe(blocklyRef.current);
    return function () {
      return observer.disconnect();
    };
  }, [workspace, blocklyRef.current]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)(classes.editor, className),
    ref: blocklyRef
  }), /*#__PURE__*/react.createElement(BlocklyModalDialogs/* default */.Z, null));
}

/***/ })

}]);
//# sourceMappingURL=f46badf6a1e485aca95f38418db0645a3911806b-f721842a5b6b024d37a9.js.map