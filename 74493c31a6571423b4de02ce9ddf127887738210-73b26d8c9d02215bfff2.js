(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "3ArF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isRegister */
/* unused harmony export packetsToRegisters */
/* unused harmony export lookupRegister */
/* unused harmony export lookupField */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return parseIntFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return exprVisitor; });
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="jdspec.d.ts" />
function isRegister(pkt) {
  return pkt && (pkt.kind == "const" || pkt.kind == "ro" || pkt.kind == "rw");
}
function packetsToRegisters(packets) {
  return packets.filter(function (pkt) {
    return !pkt.derived && isRegister(pkt);
  });
}
function lookupRegister(spec, id) {
  return spec.packets.find(function (pkt) {
    return isRegister(pkt) && pkt.name === id;
  });
}
function lookupField(pkt, field) {
  return pkt.fields.find(function (member) {
    return member.name === field;
  });
}
function getRegister(spec, root, fld) {
  if (fld === void 0) {
    fld = "";
  }

  var ret = {
    pkt: null
  };
  ret.pkt = lookupRegister(spec, root);

  if (!ret.pkt) {
    throw new Error("no register " + root + " found in service " + spec.shortName);
  } else if (fld) {
    ret.fld = lookupField(ret.pkt, fld);
    if (!ret.fld) throw new Error("no field " + fld + " found in register " + root + " of service " + spec.shortName);
  }

  return ret;
}
function parseIntFloat(spec, w, allowFloat) {
  if (allowFloat === void 0) {
    allowFloat = false;
  }

  if (/^-?0x[a-f\d_]+$/i.test(w) || /^-?[\d_]+$/.test(w)) {
    var v = parseInt(w.replace(/_/g, "")); // allow for 0x3fff_ffff syntax

    if (isNaN(v)) throw new Error("can't parse int: " + w);
    return v;
  }

  if (allowFloat && /^-?\d*(\.\d*)?(e(-?)\d+)?$/.test(w)) {
    var _v = parseFloat(w);

    if (isNaN(_v)) throw new Error("can't parse float: " + w);
    return _v;
  }

  var ww = w.split(/\./);

  if (ww.length != 2) {
    throw new Error("expecting int or enum member here");
  }

  var en = spec.enums[ww[0]];

  if (!en) {
    throw new Error(ww[0] + " is not an enum type");
  } // eslint-disable-next-line no-prototype-builtins


  if (!en.members.hasOwnProperty(ww[1])) throw new Error(ww[1] + " is not a member of " + ww[0]);
  return en.members[ww[1]] || 0;
}
function exprVisitor(parent, current, structVisit) {
  if (Array.isArray(current)) {
    current.forEach(function (c) {
      return exprVisitor(current, c, structVisit);
    });
  } else if (typeof current === "object") {
    if (parent && current) structVisit(parent, current);
    Object.keys(current).forEach(function (key) {
      exprVisitor(current, current[key], structVisit);
    });
  }
}

/***/ }),

/***/ "A5xw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEVICE_IMAGE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEVICE_IMAGE_HEIGHT; });
/* unused harmony export unitDescription */
/* unused harmony export secondaryUnitConverters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return resolveUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return units; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return parseServiceSpecificationMarkdownToJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return camelize; });
/* unused harmony export capitalize */
/* unused harmony export snakify */
/* unused harmony export dashify */
/* unused harmony export humanify */
/* unused harmony export TYPESCRIPT_STATIC_NAMESPACE */
/* unused harmony export packFormat */
/* unused harmony export packInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return normalizeDeviceSpecification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return escapeDeviceIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return escapeDeviceNameIdentifier; });
/* unused harmony export converters */
/* unused harmony export isNumericType */
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KQm4");
/* harmony import */ var _jdutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3ArF");


function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="jdspec.d.ts" />

var DEVICE_IMAGE_WIDTH = 600;
var DEVICE_IMAGE_HEIGHT = 450; // modified subset of SenML

var unitDescription = {
  "°": "angle",
  "°/s": "rotation rate",
  "°/s2": "rotation acceleration",
  m: "meter",
  kg: "kilogram",
  s: "second",
  A: "ampere",
  K: "kelvin",
  cd: "candela",
  mol: "mole",
  Hz: "hertz",
  rad: "radian",
  sr: "steradian",
  N: "newton",
  Pa: "pascal",
  J: "joule",
  W: "watt",
  C: "coulomb",
  V: "volt",
  F: "farad",
  Ohm: "ohm",
  S: "siemens",
  Wb: "weber",
  T: "tesla",
  H: "henry",
  "°C": "degrees Celsius",
  lm: "lumen",
  lx: "lux",
  Bq: "becquerel",
  Gy: "gray",
  Sv: "sievert",
  kat: "katal",
  m2: "square meter (area)",
  m3: "cubic meter (volume)",
  "m/s": "meter per second (velocity)",
  "m/s2": "meter per square second (acceleration)",
  "m3/s": "cubic meter per second (flow rate)",
  "W/m2": "watt per square meter (irradiance)",
  "cd/m2": "candela per square meter (luminance)",
  bit: "bit (information content)",
  "bit/s": "bit per second (data rate)",
  lat: "degrees latitude",
  lon: "degrees longitude",
  pH: "pH value (acidity; logarithmic quantity)",
  dB: "decibel (logarithmic quantity)",
  dBW: "decibel relative to 1 W (power level)",
  count: "1 (counter value)",
  "/": "1 (ratio e.g., value of a switch)",
  "%RH": "Percentage (Relative Humidity)",
  "%EL": "Percentage (remaining battery energy level)",
  EL: "seconds (remaining battery energy level)",
  "1/s": "1 per second (event rate)",
  "S/m": "Siemens per meter (conductivity)",
  B: "Byte (information content)",
  VA: "volt-ampere (Apparent Power)",
  VAs: "volt-ampere second (Apparent Energy)",
  var: "volt-ampere reactive (Reactive Power)",
  vars: "volt-ampere-reactive second (Reactive Energy)",
  "J/m": "joule per meter (Energy per distance)",
  "kg/m3": "kilogram per cubic meter (mass density, mass concentration)",
  "s/60°": "servo speed (time to travel 60°)",
  "kg/cm": "torque",
  hsv: "bit HSV color",
  rgb: "RGB color",
  rpm: "revolutions per minute",
  uv: "UV index",
  lux: "illuminance",
  bpm: "beats per minute",
  mcd: "micro candella",
  px: "pixel"
};
var secondaryUnitConverters = {
  ms: {
    name: "millisecond",
    unit: "s",
    scale: 1 / 1000,
    offset: 0
  },
  min: {
    name: "minute",
    unit: "s",
    scale: 60,
    offset: 0
  },
  h: {
    name: "hour",
    unit: "s",
    scale: 3600,
    offset: 0
  },
  MHz: {
    name: "megahertz",
    unit: "Hz",
    scale: 1000000,
    offset: 0
  },
  kW: {
    name: "kilowatt",
    unit: "W",
    scale: 1000,
    offset: 0
  },
  kVA: {
    name: "kilovolt-ampere",
    unit: "VA",
    scale: 1000,
    offset: 0
  },
  kvar: {
    name: "kilovar",
    unit: "var",
    scale: 1000,
    offset: 0
  },
  Ah: {
    name: "ampere-hour",
    unit: "C",
    scale: 3600,
    offset: 0
  },
  Wh: {
    name: "watt-hour",
    unit: "J",
    scale: 3600,
    offset: 0
  },
  kWh: {
    name: "kilowatt-hour",
    unit: "J",
    scale: 3600000,
    offset: 0
  },
  varh: {
    name: "var-hour",
    unit: "vars",
    scale: 3600,
    offset: 0
  },
  kvarh: {
    name: "kilovar-hour",
    unit: "vars",
    scale: 3600000,
    offset: 0
  },
  kVAh: {
    name: "kilovolt-ampere-hour",
    unit: "VAs",
    scale: 3600000,
    offset: 0
  },
  "Wh/km": {
    name: "watt-hour per kilometer",
    unit: "J/m",
    scale: 3.6,
    offset: 0
  },
  KiB: {
    name: "kibibyte",
    unit: "B",
    scale: 1024,
    offset: 0
  },
  GB: {
    name: "gigabyte",
    unit: "B",
    scale: 1.0e9,
    offset: 0
  },
  "Mbit/s": {
    name: "megabit per second",
    unit: "bit/s",
    scale: 1000000,
    offset: 0
  },
  "B/s": {
    name: "byte per second",
    unit: "bit/s",
    scale: 8,
    offset: 0
  },
  "MB/s": {
    name: "megabyte per second",
    unit: "bit/s",
    scale: 8000000,
    offset: 0
  },
  mV: {
    name: "millivolt",
    unit: "V",
    scale: 1 / 1000,
    offset: 0
  },
  mA: {
    name: "milliampere",
    unit: "A",
    scale: 1 / 1000,
    offset: 0
  },
  dBm: {
    name: "decibel (milliwatt)",
    unit: "dBW",
    scale: 1,
    offset: -30
  },
  "ug/m3": {
    name: "microgram per cubic meter",
    unit: "kg/m3",
    scale: 1.0e-9,
    offset: 0
  },
  "mm/h": {
    name: "millimeter per hour",
    unit: "m/s",
    scale: 1 / 3600000,
    offset: 0
  },
  "m/h": {
    name: "meter per hour",
    unit: "m/s",
    scale: 1 / 3600,
    offset: 0
  },
  "cm/s": {
    name: "centimeter per seconds",
    unit: "m/s",
    scale: 1 / 100,
    offset: 0
  },
  ppm: {
    name: "parts per million",
    unit: "/",
    scale: 1.0e-6,
    offset: 0
  },
  ppb: {
    name: "parts per billion",
    unit: "/",
    scale: 1.0e-9,
    offset: 0
  },
  "/100": {
    name: "percent",
    unit: "/",
    scale: 1 / 100,
    offset: 0
  },
  "%": {
    name: "percent",
    unit: "/",
    scale: 1 / 100,
    offset: 0
  },
  "/1000": {
    name: "permille",
    unit: "/",
    scale: 1 / 1000,
    offset: 0
  },
  hPa: {
    name: "hectopascal",
    unit: "Pa",
    scale: 100,
    offset: 0
  },
  mm: {
    name: "millimeter",
    unit: "m",
    scale: 1 / 1000,
    offset: 0
  },
  cm: {
    name: "centimeter",
    unit: "m",
    scale: 1 / 100,
    offset: 0
  },
  km: {
    name: "kilometer",
    unit: "m",
    scale: 1000,
    offset: 0
  },
  "km/h": {
    name: "kilometer per hour",
    unit: "m/s",
    scale: 1 / 3.6,
    offset: 0
  },
  "8ms": {
    name: "8 milliseconds",
    unit: "s",
    scale: 8 / 1000,
    offset: 0
  },
  nm: {
    name: "nanometer",
    unit: "m",
    scale: 1e-9,
    offset: 0
  },
  nT: {
    name: "nano Tesla",
    unit: "T",
    scale: 1e9,
    offset: 0
  },
  // compat with previous Jacdac versions
  frac: {
    name: "ratio",
    unit: "/",
    scale: 1,
    offset: 0
  },
  us: {
    name: "micro seconds",
    unit: "s",
    scale: 1e-6,
    offset: 0
  },
  mWh: {
    name: "micro watt-hour",
    unit: "J",
    scale: 3.6e-3,
    offset: 0
  },
  g: {
    name: "earth gravity",
    unit: "m/s2",
    scale: 9.80665,
    offset: 0
  },
  "#": {
    name: "count",
    unit: "#",
    scale: 1,
    offset: 0
  }
};
function resolveUnit(unit) {
  if (unit === "") return {
    name: "",
    unit: "",
    scale: 1,
    offset: 1
  }; // indentifier
  // seconary unit?

  var su = secondaryUnitConverters[unit];
  if (su) return su;
  var name = unitDescription[unit];
  if (name) return {
    name: name,
    unit: unit,
    scale: 1,
    offset: 0
  };
  return undefined;
}
function units() {
  var r = [];
  Object.keys(unitDescription).forEach(function (k) {
    r.push({
      name: k,
      description: unitDescription[k]
    });
    Object.keys(secondaryUnitConverters).filter(function (scd) {
      return secondaryUnitConverters[scd].unit === k;
    }).forEach(function (scd) {
      return r.push({
        name: scd,
        description: secondaryUnitConverters[scd].name
      });
    });
  });
  r.sort(function (l, r) {
    return l.name.localeCompare(r.name);
  });
  return r;
}
/* check ranges, see system.md
Registers `0x001-0x07f` - r/w common to all services
Registers `0x080-0x0ff` - r/w defined per-service
Registers `0x100-0x17f` - r/o common to all services
Registers `0x180-0x1ff` - r/o defined per-service
Registers `0x200-0xeff` - custom, defined per-service
Registers `0xf00-0xfff` - reserved for implementation, should not be seen on the wire
*/

var identifierRanges = {
  rw: [[0x001, 0x07f], [0x080, 0x0ff], [0x200, 0xeff], // custom
  [0xf00, 0xfff] // impl
  ],
  ro: [[0x100, 0x17f], [0x180, 0x1ff], [0x200, 0xeff], // custom
  [0xf00, 0xfff] // impl
  ],
  const: [[0x100, 0x17f], [0x180, 0x1ff], [0x200, 0xeff], // custom
  [0xf00, 0xfff] // impl
  ],
  command: [[0x000, 0x07f], [0x080, 0xeff], [0xf00, 0xfff]],
  report: [[0x000, 0x07f], [0x080, 0xeff], [0xf00, 0xfff]],
  event: [[0x00, 0x7f], // system
  [0x80, 0xff]]
};
function parseServiceSpecificationMarkdownToJSON(filecontent, includes, filename) {
  if (filename === void 0) {
    filename = "";
  }

  filecontent = (filecontent || "").replace(/\r/g, "");
  var info = {
    name: "",
    status: "experimental",
    shortId: filename.replace(/\.md$/, "").replace(/.*\//, ""),
    camelName: "",
    shortName: "",
    extends: [],
    notes: {},
    classIdentifier: 0,
    enums: {},
    packets: [],
    tags: []
  };
  var backticksType = "";
  var enumInfo = null;
  var packetInfo = null;
  var pipePacket = null;
  var errors = [];
  var lineNo = 0;
  var noteId = "short";
  var lastCmd;
  var packetsToDescribe;
  var nextModifier = "";
  var systemInfo = includes === null || includes === void 0 ? void 0 : includes["_system"];
  var usedIds = {};

  for (var _iterator = _createForOfIteratorHelperLoose(values(includes || {})), _step; !(_step = _iterator()).done;) {
    var prev = _step.value;
    if (prev.classIdentifier) usedIds[prev.classIdentifier + ""] = prev.name;
  }

  try {
    if (includes["_system"] && includes["_base"]) processInclude("_base");

    for (var _iterator2 = _createForOfIteratorHelperLoose(filecontent.split(/\n/)), _step2; !(_step2 = _iterator2()).done;) {
      var line = _step2.value;
      lineNo++;
      processLine(line);
    }
  } catch (e) {
    error("exception: " + e.message);
  }

  if (errors.length) info.errors = errors;

  for (var _i = 0, _Object$keys = Object.keys(info.notes); _i < _Object$keys.length; _i++) {
    var k = _Object$keys[_i];
    info.notes[k] = normalizeMD(info.notes[k]);
  }

  for (var _iterator3 = _createForOfIteratorHelperLoose(info.packets), _step3; !(_step3 = _iterator3()).done;) {
    var v = _step3.value;
    v.description = normalizeMD(v.description);
  }

  if (!info.camelName) info.camelName = camelize(info.name.replace(/\s+/g, " ").replace(/[ -](.)/g, function (f, l) {
    return l.toUpperCase();
  }).replace(/[^\w]+/g, "_"));
  if (!info.shortName) info.shortName = info.camelName;
  if (info.camelName == "system") info.classIdentifier = 0x1ffffff1;else if (info.camelName == "base") info.classIdentifier = 0x1ffffff3;else if (info.camelName == "sensor") info.classIdentifier = 0x1ffffff2;
  if (info.shortName != "control" && !info.classIdentifier) error("identifier: not specified");
  info.packets.forEach(function (pkt) {
    return pkt.packFormat = packFormat(info, pkt);
  });
  return info;

  function processLine(line) {
    if (backticksType) {
      if (line.trim() == "```") {
        backticksType = null;
        if (backticksType == "default") return;
      }
    } else {
      var m = /^```(.*)/.exec(line);

      if (m) {
        backticksType = m[1] || "default";
        if (backticksType == "default") return;
      }
    }

    var interpret = backticksType == "default" || line.slice(0, 4) == "    ";

    if (!interpret) {
      var _m = /^(#+)\s*(.*)/.exec(line);

      if (_m) {
        var hd = _m[1],
            cont = _m[2];
        packetsToDescribe = null;
        var newNoteId = cont.trim().toLowerCase();

        if (hd == "#" && !info.name) {
          info.name = cont.trim();
          line = "";
        } else if (newNoteId == "registers" || newNoteId == "commands" || newNoteId == "events" || newNoteId == "examples") {
          noteId = newNoteId;
          line = "";
        } else {
          if (noteId == "short") noteId = "long"; // keep line
        }
      }

      if (packetsToDescribe) {
        for (var _iterator4 = _createForOfIteratorHelperLoose(packetsToDescribe), _step4; !(_step4 = _iterator4()).done;) {
          var iface = _step4.value;
          iface.description += line + "\n";
        }
      } else {
        if (line || info.notes[noteId]) {
          if (!info.notes[noteId]) info.notes[noteId] = "";
          info.notes[noteId] += line + "\n";
        }
      }
    } else {
      if (packetsToDescribe && packetsToDescribe[0].description) packetsToDescribe = null;
      var expanded = line.replace(/\/\/.*/, "").replace(/[?@:=,{};]/g, function (s) {
        return " " + s + " ";
      }).trim();
      if (!expanded) return;
      var words = expanded.split(/\s+/);
      if (/^[;,]/.test(words[words.length - 1])) words.pop();
      var cmd = words[0]; // allow for `command = Foo.Bar` etc (ie. command is not a keyword there)

      if (words[1] == ":" || words[1] == "=") cmd = ":";

      switch (cmd) {
        case "enum":
        case "flags":
          startEnum(words);
          break;

        case "meta":
        case "pipe":
        case "report":
        case "command":
        case "const":
        case "ro":
        case "rw":
        case "event":
          startPacket(words);
          break;

        case "}":
          if (packetInfo) {
            finishPacket();
          } else if (enumInfo) {
            enumInfo = null;
          } else {
            error("nothing to end here");
          }

          break;

        default:
          if (packetInfo) packetField(words);else if (enumInfo) enumMember(words);else metadataMember(words);
      }
    }
  }

  function finishPacket() {
    packetInfo.packed = hasNaturalAlignment(packetInfo) ? undefined : true;
    if (packetInfo.packed) warn("you may want to use explicit padding in " + packetInfo.name);
    var repeats = false;
    var hadzero = false;

    for (var _iterator5 = _createForOfIteratorHelperLoose(packetInfo.fields), _step5; !(_step5 = _iterator5()).done;) {
      var p = _step5.value;

      if (hadzero) {
        error("field " + p.name + " in " + packetInfo.kind + " " + packetInfo.name + " follows a variable-sized field");
        break;
      }

      if (p.startRepeats) {
        if (repeats) error("repeats: can only be specified once; in " + packetInfo.kind + " " + packetInfo.name);
        repeats = true;
      }

      if (p.storage == 0 && p.type != "string0") {
        if (repeats) {
          error("variable-sized field " + p.name + " in " + packetInfo.kind + " " + packetInfo.name + " cannot repeat");
          break;
        }

        hadzero = true;
      }
    }

    var pid = packetInfo.identifier;
    var ranges = identifierRanges[packetInfo.kind];
    if (packetInfo.name != "set_register" && packetInfo.name != "get_register" && ranges && !ranges.some(function (range) {
      return range[0] <= pid && pid <= range[1];
    })) error(packetInfo.name + " identifier 0x" + pid.toString(16) + " out of range, expected in " + ranges.map(function (range) {
      return "[" + range.map(function (r) {
        return "0x" + r.toString(16);
      }).join(", ") + "]";
    }).join(", ")); // additional checks for specific packets

    if (["reading_error", "min_reading", "max_reading", "reading_resolution"].indexOf(packetInfo.identifierName) > -1) {
      var regid = packetInfo.identifierName;
      if (packetInfo.fields.length > 1) error(regid + " must be a number");
      var reading = info.packets.find(function (pkt) {
        return pkt.kind === "ro" && pkt.identifierName === "reading";
      });
      if (!reading) error(regid + " register without a reading register");else if (packetInfo.fields[0].unit !== reading.fields[0].unit) error(regid + " unit (" + packetInfo.fields[0].unit + ") and reading unit (" + reading.fields[0].unit + ") must match");
    }

    packetInfo = null;
  }

  function normalizeMD(md) {
    return md.replace(/^\s+/, "").replace(/\s+$/, "");
  }

  function checkBraces(words) {
    if (enumInfo || packetInfo) error("already in braces");

    if (words) {
      if (words[2] != "{") error("expecting: " + words[0] + " NAME {");
    }

    enumInfo = null;
    packetInfo = null;
  }

  function forceSection(sectionId) {
    if (noteId != sectionId) {
      error("this is only allowed in ## " + sectionId + " not in ## " + noteId);
    }
  }

  function startPacket(words) {
    checkBraces(null);
    var kindSt = words.shift();
    var kind = "command";

    if (kindSt == "meta") {
      forceSection("commands");
      var w2 = words.shift();
      if (w2 == "pipe") w2 = words.shift();
      if (w2 == "report" || w2 == "command") kind = "meta_pipe_" + w2;else error("invalid token after meta");
    } else if (kindSt == "pipe") {
      forceSection("commands");

      var _w = words.shift();

      if (_w == "report" || _w == "command") kind = "pipe_" + _w;else error("invalid token after pipe");
    } else {
      kind = kindSt;
    }

    var internal = undefined;

    if (words[0] === "internal") {
      internal = true;
      words.shift();
    }

    var name = words.shift();
    var isReport = kind == "report";

    if (isReport && lastCmd && !/^\w+$/.test(name)) {
      words.unshift(name);
      name = lastCmd.name;
    }

    packetInfo = {
      kind: kind,
      name: normalizeName(name),
      identifier: undefined,
      description: "",
      fields: [],
      internal: internal
    };

    if (isReport && lastCmd && name == lastCmd.name) {
      packetInfo.secondary = true;
      lastCmd.hasReport = true;
    }

    if (!packetsToDescribe) packetsToDescribe = [];
    packetsToDescribe.push(packetInfo);

    if (words[0] == "?") {
      words.shift();
      packetInfo.optional = true;
    }

    var prev = info.packets.filter(function (p) {
      return p.name == packetInfo.name;
    });

    if (prev.length == 0) {// OK
    } else if (prev.length == 1 && prev[0].kind == "command" && packetInfo.kind == "report") {// OK
    } else {
      error("packet redefinition " + prev.map(function (p) {
        return p.name;
      }).join(", ") + " ");
    }

    if (/pipe/.test(kind)) {
      if (!pipePacket) error("pipe definitions can only occur after the pipe-open packet");else packetInfo.pipeType = pipePacket.pipeType;
    }

    var atat = words.indexOf("@");

    if (kind == "pipe_command" || kind == "pipe_report") {
      // no identifier
      packetInfo.identifier = 0;
    } else if (atat >= 0) {
      var w = words[atat + 1];
      var v = parseInt(w);
      var isSet = true;

      if (isNaN(v)) {
        v = 0;
        isSet = false;

        if (systemInfo) {
          var systemPacket = systemInfo.packets.find(function (p) {
            return p.name == w;
          });

          if (systemPacket) {
            v = systemPacket.identifier;
            packetInfo.identifierName = w;
            if (systemPacket.kind != kind) error("kind mismatch on " + w + ": " + systemPacket.kind + " vs " + kind);else isSet = true;
          } else error(w + " not found in _system");
        } else {
          error(w + " cannot be resolved, since _system is missing");
        }
      }

      var isUser = false;
      var isSystem = false;
      var isHigh = 0x200 <= v && v <= 0xeff;

      switch (kind) {
        case "const":
        case "ro":
          forceSection("registers");
          isSystem = 0x100 <= v && v <= 0x17f;
          isUser = 0x180 <= v && v <= 0x1ff;
          break;

        case "rw":
          forceSection("registers");
          isSystem = 0x00 <= v && v <= 0x7f;
          isUser = 0x80 <= v && v <= 0xff;
          break;

        case "report":
        case "command":
          forceSection("commands");
          isSystem = 0x00 <= v && v <= 0x7f;
          isUser = 0x80 <= v && v <= 0xff;
          isHigh = 0x100 <= v && v <= 0xeff;
          break;

        case "event":
          forceSection("events");
          isSystem = 0x00 <= v && v <= 0x7f;
          isUser = 0x80 <= v && v <= 0xff;
          break;
      }

      if (isUser) {// ok
      } else if (isSystem) {
        if (!packetInfo.identifierName) warn(kind + " @ " + toHex(v) + " should be expressed with a name from _system.md");
      } else if (isHigh) {
        if (!info.highCommands) warn(kind + " @ " + toHex(v) + " is from the extended range but 'high: 1' missing");
      }

      packetInfo.identifier = v;
      words.splice(atat, 2);
    } else {
      if (isReport && lastCmd) packetInfo.identifier = lastCmd.identifier;else error("@ not found at " + packetInfo.name);
    }

    if (info.packets.some(function (p) {
      return p.kind == packetInfo.kind && (!/pipe/.test(p.kind) || p.pipeType == packetInfo.pipeType) && p.identifier == packetInfo.identifier;
    })) {
      error("packet identifier already used");
    }

    info.packets.push(packetInfo);
    if (kind == "command") lastCmd = packetInfo;else lastCmd = null;

    if (words[0] == "=" || words[0] == ":") {
      words.unshift("_");
      packetField(words);
      finishPacket();
    } else {
      var last = words.shift();

      if (last == "{") {
        if (words[0] == "...") words.shift();

        if (words[0] == "}") {
          words.shift();
          finishPacket();
        }

        if (words.length) error("excessive tokens: " + words[0] + "...");
      } else {
        if (last === undefined && kind == "event") {
          finishPacket();
        } else {
          error("expecting '{'");
        }
      }
    }
  }

  function rangeCheck(tp, v) {
    var _normalizeStorageType = normalizeStorageType(tp),
        storage = _normalizeStorageType[0],
        type = _normalizeStorageType[1],
        typeShift = _normalizeStorageType[2];

    if (isNaN(v)) return v; // error already reported

    if (storage == 0) {
      error("numeric values like " + v + " not allowed for " + tp);
      return v;
    }

    if (v < 0 && storage > 0) {
      error("negative values like " + v + " not allowed for " + tp);
      return v;
    }

    if (Math.floor(v) != v && typeShift == 0) {
      error("only integer values allowed for " + tp + "; got " + v);
      return v;
    }

    var bits = storage < 0 ? -storage * 8 - 1 : storage * 8;
    bits -= typeShift || 0; // don't use bitshift to allow for more than 32 bits

    var max = 1;

    while (bits--) {
      max *= 2;
    }

    if (-v == max) {// OK - min_int
    } else if (max == 1 && v == 1) {// we make an exception for u0.8 being set to 1
    } else {
      if (Math.abs(v) >= max) {
        error("value " + v + " is out of range for " + tp);
        return v;
      }
    }

    return v;
  }

  function parseVal(words) {
    var eq = words.shift();
    if (eq != "=" && eq != ":") error("expecting '='");
    var val = words.shift();
    return parseIntCheck(val, true);
  }

  function packetField(words) {
    var _packetInfo$fields;

    if (words.length == 2 && (words[0] == "repeats" || words[0] == "segmented" || words[0] == "multi-segmented")) {
      nextModifier = words[0];
      return;
    }

    var name = normalizeName(words.shift());
    var defaultValue = undefined;
    var isOptional = undefined;
    var op = words.shift();

    if (op == "?") {
      isOptional = true;
      op = words.shift();
    }

    if (op == "=") {
      defaultValue = parseIntCheck(words.shift(), true);
      op = words.shift();
    }

    if (op != ":") error("expecting ':'");
    var tp = words.shift();

    var _normalizeStorageType2 = normalizeStorageType(tp),
        storage = _normalizeStorageType2[0],
        type = _normalizeStorageType2[1],
        typeShift = _normalizeStorageType2[2];

    var isFloat = typeShift === null || undefined;
    var tok = words.shift();
    var unit = "";

    if (tok != "{") {
      unit = normalizeUnit(tok);
      tok = words.shift();
    }

    if (defaultValue !== undefined) rangeCheck(tp, defaultValue);
    var shift = typeShift || undefined;

    if (unit == "/") {
      // / units should be used with ui0. data
      if (!/^(u0|i1)\.\d+$/.test(tp)) error("fraction unit must be used with u0.yyy or i1.yyy data types (got " + tp + ")");
      shift = Math.abs(storage) * 8;
      if (storage < 0) shift -= 1;
    }

    var field = {
      name: name,
      unit: unit,
      shift: shift,
      isFloat: isFloat,
      type: type,
      storage: storage,
      isSimpleType: canonicalType(storage) == type || undefined,
      defaultValue: defaultValue,
      isOptional: isOptional,
      multiSegmented: nextModifier == "multi-segmented" || undefined,
      segmented: nextModifier == "segmented" || nextModifier == "multi-segmented" || undefined,
      startRepeats: nextModifier == "repeats" || undefined
    };

    if (tok == "{") {
      while (words.length) {
        tok = words.shift();
        if (tok == "}") break;
        tok = camelize(tok);

        switch (tok) {
          case "maxBytes":
            ;
            field[tok] = rangeCheck("u8", parseVal(words));
            break;

          case "typicalMin":
          case "typicalMax":
          case "absoluteMin":
          case "absoluteMax":
            ;
            field[tok] = rangeCheck(tp, parseVal(words));
            break;

          case "preferredInterval":
            if (packetInfo[tok] !== undefined) error("field " + tok + " already set");
            packetInfo[tok] = rangeCheck("u32", parseVal(words));
            break;

          default:
            error("unknown constraint: " + tok);
            break;
        }

        if (words[0] == ",") words.shift();
      }

      if (tok == "}") tok = null;
    }

    if (tok) error("excessive tokens at the end of member: " + tok + "...");
    if (field.typicalMin === undefined && field.typicalMax !== undefined && storage > 0) field.typicalMin = 0;
    if (field.absoluteMin === undefined && field.absoluteMax !== undefined && storage > 0) field.absoluteMin = 0;
    if (!field.storage && field.maxBytes) field.storage = field.maxBytes;

    if (/pipe/.test(type)) {
      packetInfo.pipeType = packetInfo.name;

      if (pipePacket && pipePacket.name == packetInfo.name && packetInfo.kind == "report") {// keep old pipePacket
      } else {
        pipePacket = packetInfo;
      }
    }

    if (!field.isOptional && (_packetInfo$fields = packetInfo.fields[packetInfo.fields.length - 1]) !== null && _packetInfo$fields !== void 0 && _packetInfo$fields.isOptional) {
      error("all fields after an optional field have to optional");
    }

    packetInfo.fields.push(field);
    nextModifier = undefined;
  }

  function startEnum(words) {
    checkBraces(null);
    if (words[2] != ":" || words[4] != "{") error("expecting: enum NAME : TYPE {");
    enumInfo = {
      name: normalizeName(words[1]),
      storage: normalizeStorageType(words[3])[0],
      isFlags: words[0] == "flags" || undefined,
      members: {}
    };
    if (info.enums[enumInfo.name]) error("enum redefinition");
    info.enums[enumInfo.name] = enumInfo;
  }

  function enumMember(words) {
    if (words[1] != "=" || words.length != 3) error("expecting: FIELD_NAME = INTEGER");
    enumInfo.members[normalizeName(words[0])] = rangeCheck(canonicalType(enumInfo.storage), parseIntCheck(words[2]));
  }

  function parseIntCheck(w, allowFloat) {
    if (allowFloat === void 0) {
      allowFloat = false;
    }

    try {
      return Object(_jdutils__WEBPACK_IMPORTED_MODULE_1__[/* parseIntFloat */ "c"])(info, w, allowFloat);
    } catch (e) {
      error(e.message);
      return 0;
    }
  }

  function looksRandom(n) {
    var s = n.toString(16);
    var h = "0123456789abcdef";

    for (var i = 0; i < h.length; ++i) {
      var hh = h[i];
      if (s.indexOf(hh + hh + hh) >= 0) return false;
    }

    if (/f00d|dead|deaf|beef/.test(s)) return false;
    return true;
  }

  function genRandom() {
    for (;;) {
      var m = Math.random() * 0xfffffff | 0x10000000;
      if (looksRandom(m)) return m;
    }
  }

  function metadataMember(words) {
    if (!((words[1] == "=" || words[1] == ":") && (words[0] == "tags" || words.length == 3))) error("expecting: FIELD_NAME = VALUE or FIELD_NAME : VALUE");

    switch (words[0]) {
      case "extends":
        processInclude(words[2]);
        break;

      case "class":
      case "identifier":
        {
          info.classIdentifier = parseIntCheck(words[2]);
          if (info.name != "Control" && info.classIdentifier == 0) info.classIdentifier = 1;
          var gen = "how about " + toHex(genRandom());
          if (!(info.classIdentifier == 0 || 0x10000001 <= info.classIdentifier && info.classIdentifier <= 0x1fffff00)) error("class identifier out of range; " + gen);
          if (!looksRandom(info.classIdentifier)) error("class identifier doesn't look random; " + gen);
          if (usedIds[info.classIdentifier + ""]) error("class identifier " + toHex(info.classIdentifier) + " already used in " + usedIds[info.classIdentifier + ""] + "; " + gen);
          break;
        }

      case "camel":
        info.camelName = words[2];
        break;

      case "short":
        info.shortName = words[2];
        break;

      case "high":
        info.highCommands = !!parseIntCheck(words[2]);
        break;

      case "status":
        if (["stable", "experimental", "deprecated"].indexOf(words[2]) > -1) info.status = words[2];else error("unknown status");
        break;

      case "group":
        info.group = capitalize(words.slice(2).join(" "));
        break;

      case "tags":
        {
          var tags = words.slice(2).filter(function (w) {
            return w != "," && w != ";";
          });
          info.tags = info.tags.concat(tags);
          break;
        }

      default:
        error("unknown metadata field: " + words[0]);
        break;
    }
  }

  function processInclude(name) {
    if (name == "_system") return;
    var inner = includes[name];
    if (!inner) return error("include file not found: " + name);
    if (info.packets.some(function (pkt) {
      return !pkt.derived;
    }) || values(info.enums).some(function (e) {
      return !e.derived;
    })) error("extends: only allowed on top of the .md file");
    if (inner.errors) errors = errors.concat(inner.errors);
    var innerEnums = clone(inner.enums);
    Object.keys(innerEnums).filter(function (k) {
      return !info.enums[k];
    }).forEach(function (k) {
      var ie = innerEnums[k];
      ie.derived = name;
      info.enums[k] = ie;
    });
    var innerPackets = clone(inner.packets.filter(function (pkt) {
      return !info.packets.find(function (ipkt) {
        return ipkt.kind === pkt.kind && ipkt.identifier === pkt.identifier;
      });
    }));
    innerPackets.forEach(function (pkt) {
      return pkt.derived = name;
    });
    info.packets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(info.packets), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(innerPackets));
    if (inner.highCommands) info.highCommands = true;
    info.extends = inner.extends.concat([name]);
  }

  function clone(v) {
    return JSON.parse(JSON.stringify(v));
  }

  function error(msg) {
    if (!msg) msg = "syntax error";
    if (errors.some(function (e) {
      return e.line == lineNo && e.message == msg;
    })) return;
    errors.push({
      file: filename,
      line: lineNo,
      message: msg
    });
  }

  function warn(msg) {
    if (info.camelName == "system") return; // no warnings in _system

    if (errors.some(function (e) {
      return e.line == lineNo && e.message == msg;
    })) return;
    errors.push({
      file: filename,
      line: lineNo,
      message: msg
    });
  }

  function normalizeName(n) {
    if (!/^\w+$/.test(n)) error("expecting name here");
    if (n.length > 31) error("name '" + n + "' too long");
    return n;
  }

  function normalizeStorageType(tp) {
    if (info.enums[tp]) return [info.enums[tp].storage, tp, 0];
    if (!tp) error("expecting type here");
    var tp2 = tp.replace(/_t$/, "").toLowerCase();
    var m = /^([ui])(\d+)\.(\d+)$/.exec(tp2);

    if (m) {
      var a = parseIntCheck(m[2]);
      var b = parseIntCheck(m[3]);
      var len = a + b;
      if (!(len == 8 || len == 16 || len == 32 || len == 64)) error("fixed point " + tp + " can't be " + len + " bits");
      if (a == 0 && m[1] == "i") error("fixed point " + tp + " can't be i0.X; has to be at least i1.X");
      return [(m[1] == "i" ? -1 : 1) * (len >> 3), tp2, b];
    }

    switch (tp2) {
      case "bool":
        return [1, tp2, 0];

      case "i8":
      case "u8":
      case "i16":
      case "u16":
      case "i32":
      case "u32":
      case "i64":
      case "u64":
        {
          var sz = parseIntCheck(tp2.replace(/^./, "")) >> 3;
          if (tp2[0] == "i") sz = -sz;
          return [sz, tp2, 0];
        }

      case "f16":
        return [2, tp2, null];

      case "f32":
        return [4, tp2, null];

      case "f64":
        return [8, tp2, null];

      case "pipe":
        return [12, tp2, 0];

      case "pipe_port":
        return [2, tp2, 0];

      case "devid":
        return [8, tp2, 0];

      case "bytes":
      case "string":
      case "string0":
        return [0, tp2, 0];

      default:
        {
          var _m2 = /^u8\[(\d+)\]$/.exec(tp2);

          if (_m2) return [parseIntCheck(_m2[1]), tp2, 0];
          error("unknown type: " + tp + " " + tp2);
          return [4, tp2, 0];
        }
    }
  }

  function normalizeUnit(unit) {
    if (unit === undefined || unit === null) return "";
    if (unitDescription[unit] || secondaryUnitConverters[unit]) return unit;
    error("expecting unit, got '" + unit + "'");
    return "";
  }

  function hasNaturalAlignment(iface) {
    var byteOffset = 0;

    for (var _iterator6 = _createForOfIteratorHelperLoose(iface.fields), _step6; !(_step6 = _iterator6()).done;) {
      var m = _step6.value;
      var sz = memberSize(m);
      if (sz == 0) continue;
      var pad = sz > 4 ? 4 : sz;
      if (!/^u8\[/.test(m.type) && byteOffset % pad != 0) return false;
      byteOffset += sz;
    }

    return true;
  }
}

function values(o) {
  var r = [];

  for (var _i2 = 0, _Object$keys2 = Object.keys(o); _i2 < _Object$keys2.length; _i2++) {
    var k = _Object$keys2[_i2];
    r.push(o[k]);
  }

  return r;
}

function fail(msg) {
  throw new Error(msg);
}

function toUpper(name) {
  return name === null || name === void 0 ? void 0 : name.replace(/([a-z])([A-Z])/g, function (x, a, b) {
    return a + "_" + b;
  }).toUpperCase();
}

function toLower(name) {
  return name === null || name === void 0 ? void 0 : name.replace(/([a-z])([A-Z])/g, function (x, a, b) {
    return a + "_" + b;
  }).toLowerCase();
}

function packed(iface) {
  if (!iface.packed) return "";else return " __attribute__((packed))";
}

function cStorage(tp) {
  if (tp == 0 || [1, 2, 4, 8].indexOf(Math.abs(tp)) < 0) return "bytes";
  if (tp < 0) return "int" + -tp * 8 + "_t";else return "uint" + tp * 8 + "_t";
}

function canonicalType(tp) {
  if (tp == 0) return "bytes";
  if (tp < 0) return "i" + -tp * 8;else return "u" + tp * 8;
}

function isRegister(k) {
  return k == "ro" || k == "rw" || k == "const";
}

function toHex(n) {
  if (n === undefined) return "";
  if (n < 0) return "-" + toHex(n);
  return "0x" + n.toString(16);
}

function unitPref(f) {
  if (!f.unit) return "";else return prettyUnit(f.unit) + " ";
}

function prettyUnit(u) {
  switch (u) {
    case "us":
      return "μs";

    case "C":
      return "°C";

    case "/":
      return "ratio";

    default:
      return u;
  }
}

function toH(info) {
  var r = "// Autogenerated C header file for " + info.name + "\n";
  var hdDef = "_JACDAC_SPEC_" + toUpper(info.camelName) + "_H";
  r += "#ifndef " + hdDef + "\n";
  r += "#define " + hdDef + " 1\n";
  var pref = "JD_" + toUpper(info.shortName) + "_";
  if (info.shortId[0] == "_") pref = "JD_";
  if (info.shortId[0] != "_") r += "\n#define JD_SERVICE_CLASS_" + toUpper(info.shortName) + "  " + toHex(info.classIdentifier) + "\n";

  for (var _iterator7 = _createForOfIteratorHelperLoose(values(info.enums).filter(function (en) {
    return !en.derived;
  })), _step7; !(_step7 = _iterator7()).done;) {
    var en = _step7.value;
    var enPref = pref + toUpper(en.name);
    r += "\n// enum " + en.name + " (" + cStorage(en.storage) + ")\n";

    for (var _i3 = 0, _Object$keys3 = Object.keys(en.members); _i3 < _Object$keys3.length; _i3++) {
      var k = _Object$keys3[_i3];
      r += "#define " + enPref + "_" + toUpper(k) + " " + toHex(en.members[k]) + "\n";
    }
  }

  for (var _iterator8 = _createForOfIteratorHelperLoose(info.packets), _step8; !(_step8 = _iterator8()).done;) {
    var pkt = _step8.value;
    if (pkt.derived) continue;
    var cmt = addComment(pkt);
    r += wrapComment(cmt.comment);

    if (!pkt.secondary && pkt.kind != "pipe_command" && pkt.kind != "pipe_report") {
      var inner = "CMD";
      if (isRegister(pkt.kind)) inner = "REG";else if (pkt.kind == "event") inner = "EV";else if (pkt.kind == "meta_pipe_command" || pkt.kind == "meta_pipe_report") inner = "PIPE";
      var val = toHex(pkt.identifier);
      if (pkt.identifierName) val = "JD_" + inner + "_" + toUpper(pkt.identifierName);
      var name = pref + inner + "_" + toUpper(pkt.name);
      if (name != val) r += "#define " + name + " " + val + "\n";
    }

    var isMetaPipe = pkt.kind == "meta_pipe_report" || pkt.kind == "meta_pipe_command";

    if (cmt.needsStruct || isMetaPipe) {
      var tname = "jd_" + toLower(info.camelName) + "_" + toLower(pkt.name);
      if (pkt.kind == "report") tname += "_report";
      r += "typedef struct " + tname + " {\n";

      if (isMetaPipe) {
        r += "    uint32_t identifier; // " + toHex(pkt.identifier) + "\n";
      }

      var unaligned = "";

      for (var i = 0; i < pkt.fields.length; ++i) {
        var f = pkt.fields[i];
        var def = "";
        var cst = cStorage(f.storage);
        var sz = memberSize(f);
        if (f.type == "string" || f.type == "string0") def = "char " + f.name + "[" + sz + "]";else if (cst == "bytes") def = "uint8_t " + f.name + "[" + sz + "]";else def = cst + " " + f.name; // if it's the last field and it start repeats, treat it as an array

        if (f.startRepeats && i == pkt.fields.length - 1) def += "[0]";
        def += ";";
        if (!f.isSimpleType && f.type != "devid") def += "  // " + unitPref(f) + f.type;else if (f.unit) def += " // " + prettyUnit(f.unit);
        r += "    " + unaligned + def + "\n";
        if (f.type == "string0") unaligned = "// ";
      }

      r += "}" + packed(pkt) + " " + tname + "_t;\n\n";
    }
  }

  r += "\n#endif\n";
  return r;
}

function camelize(name) {
  if (!name) return name;
  return name[0].toLowerCase() + name.slice(1).replace(/_([a-z0-9])/gi, function (_, l) {
    return l.toUpperCase();
  });
}
function capitalize(name) {
  if (!name) return name;
  return name[0].toUpperCase() + name.slice(1);
}

function upperCamel(name) {
  var _name;

  name = camelize(name);
  if (!((_name = name) !== null && _name !== void 0 && _name.length)) return name;
  return name[0].toUpperCase() + name.slice(1);
}

function snakify(name) {
  return name === null || name === void 0 ? void 0 : name.replace(/([a-z])([A-Z])/g, function (_, a, b) {
    return a + "_" + b;
  });
}
function dashify(name) {
  if (!name) return name;
  return snakify(name.replace(/^_+/, "")).replace(/_/g, "-").toLowerCase();
}
function humanify(name) {
  return name === null || name === void 0 ? void 0 : name.replace(/([a-z])([A-Z])/g, function (_, a, b) {
    return a + " " + b;
  }).replace(/(-|_)/g, " ");
}

function addComment(pkt) {
  var comment = "";
  var typeInfo = "";
  var needsStruct = false;

  if (pkt.fields.length == 0) {
    if (pkt.kind != "event") typeInfo = "No args";
  } else if (pkt.fields.length == 1 && !pkt.fields[0].startRepeats) {
    var f0 = pkt.fields[0];
    typeInfo = cStorage(f0.storage);
    if (!f0.isSimpleType) typeInfo = f0.type + " (" + typeInfo + ")";
    typeInfo = unitPref(f0) + typeInfo;
    if (f0.name != "_") typeInfo = f0.name + " " + typeInfo;
  } else {
    needsStruct = true;
  }

  if (pkt.fields.length == 1) {
    if (isRegister(pkt.kind)) {
      var info = "";
      if (pkt.kind == "ro") info = "Read-only";else if (pkt.kind == "const") info = "Constant";else info = "Read-write";
      if (typeInfo) typeInfo = info + " " + typeInfo;else typeInfo = info;
    } else if (typeInfo) {
      typeInfo = "Argument: " + typeInfo;
    }
  }

  if (pkt.kind == "report" && pkt.secondary) {
    comment += "Report: " + typeInfo + "\n";
  } else {
    if (pkt.description) {
      var desc = pkt.description.replace(/\n\n[^]*/, "");
      if (typeInfo) desc = typeInfo + ". " + desc;
      comment = desc + "\n" + comment;
    }
  }

  return {
    comment: comment,
    needsStruct: needsStruct
  };
}

function wrapComment(comment) {
  return "\n/**\n * " + comment.replace(/\n+$/, "").replace(/\n/g, "\n * ") + "\n */\n";
}

function wrapSnippet(code) {
  if (!code) return code;
  return "\n```\n" + code.replace(/^\n+/, "").replace(/\n+$/, "") + "\n```\n";
}

var TYPESCRIPT_STATIC_NAMESPACE = "jacdac";

function packFormatForField(info, fld, isStatic, useBooleans) {
  var sz = memberSize(fld);
  var szSuff = sz ? "[" + sz + "]" : "";
  var tsType = "number";
  var fmt = "";

  if (/^[fiu]\d+(\.\d+)?$/.test(fld.type) && 1 <= sz && sz <= 8) {
    fmt = fld.type;
  } else if (/^u8\[\d*\]$/.exec(fld.type)) {
    fmt = "b" + szSuff;
  } else if (info.enums[fld.type]) {
    fmt = canonicalType(info.enums[fld.type].storage);
    tsType = upperCamel(info.camelName) + upperCamel(fld.type);
    if (isStatic) tsType = TYPESCRIPT_STATIC_NAMESPACE + "." + tsType;
  } else {
    switch (fld.type) {
      case "string":
        fmt = "s" + szSuff;
        tsType = "string";
        break;

      case "bytes":
        fmt = "b" + szSuff;
        break;

      case "string0":
        fmt = "z";
        tsType = "string";
        break;

      case "devid":
        fmt = "b[8]";
        break;

      case "pipe_port":
        fmt = "u16";
        break;

      case "pipe":
        fmt = "b[12]";
        break;

      case "bool":
        // TODO native bool support
        fmt = "u8";
        if (useBooleans) tsType = "boolean";
        break;

      default:
        return null;
    }
  }

  if (tsType == "number" && fmt && fmt[0] == "b") tsType = "Buffer";
  return {
    fmt: fmt,
    tsType: tsType
  };
}
/**
 * Generates the format to pack/unpack a data payload for this packet
 * @param pkt
 * TODO fix this
 */


function packFormat(sinfo, pkt, useBooleans) {
  var _pkt$fields;

  if (pkt.packed || !((_pkt$fields = pkt.fields) !== null && _pkt$fields !== void 0 && _pkt$fields.length)) return undefined;
  var fmt = [];

  for (var _iterator9 = _createForOfIteratorHelperLoose(pkt.fields), _step9; !(_step9 = _iterator9()).done;) {
    var fld = _step9.value;
    if (fld.startRepeats) fmt.push("r:");
    var ff = packFormatForField(sinfo, fld, false, useBooleans);
    if (!ff) return undefined;
    fmt.push(ff.fmt);
  }

  return fmt.join(" ");
}
function packInfo(info, pkt, isStatic, useBooleans) {
  var vars = [];
  var vartp = [];
  var fmt = "";
  var repeats;
  var reptp;

  for (var i = 0; i < pkt.fields.length; ++i) {
    var fld = pkt.fields[i];
    var isArray = "";

    if (fld.startRepeats) {
      if (i == pkt.fields.length - 1) {
        isArray = "[]";
      } else {
        fmt += "r: ";
        repeats = [];
        reptp = [];
        vars.push("rest");
      }
    }

    var varname = camelize(fld.name == "_" ? pkt.name : fld.name);
    var f0 = packFormatForField(info, fld, isStatic, useBooleans);

    if (!f0 || /(reserved|padding)/.test(fld.name)) {
      if (!f0) console.log(pkt.name + "/" + fld.name + " - can't get format for '" + fld.type + "'");
      fmt += "x[" + memberSize(fld) + "] ";
    } else {
      fmt += f0.fmt + isArray + " ";
      var tp = f0.tsType;
      if (tp == "Buffer" && !isStatic) tp = "Uint8Array";
      tp += isArray;

      if (repeats) {
        repeats.push(varname);
        reptp.push(tp);
      } else {
        vars.push(varname);
        vartp.push(tp);
      }
    }
  }

  fmt = fmt.replace(/ *$/, "");
  if (reptp) vartp.push("([" + reptp.join(", ") + "])[]");
  var buffers = "";
  buffers += "const [" + vars.join(", ") + "] = jdunpack<[" + vartp.join(", ") + "]>(buf, \"" + fmt + "\")\n";
  if (repeats) buffers += "const [" + repeats.join(", ") + "] = rest[0]\n";
  buffers = buffers.replace(/\n*$/, "");
  return {
    buffers: buffers,
    names: vars,
    types: vartp
  };
}

function memberSize(fld) {
  return Math.abs(fld.storage);
}

function toTypescript(info, staticTypeScript) {
  var indent = staticTypeScript ? "    " : "";
  var indent2 = indent + "    ";
  var enumkw = staticTypeScript ? indent + "export const enum" : "export enum";
  var r = staticTypeScript ? "namespace " + TYPESCRIPT_STATIC_NAMESPACE + " {\n" : "";
  r += indent + "// Service: " + info.name + "\n";

  if (info.shortId[0] != "_") {
    r += indent + ("export const SRV_" + snakify(info.camelName).toLocaleUpperCase() + " = " + toHex(info.classIdentifier) + "\n");
  }

  var pref = upperCamel(info.camelName);

  for (var _iterator10 = _createForOfIteratorHelperLoose(values(info.enums)), _step10; !(_step10 = _iterator10()).done;) {
    var en = _step10.value;
    var enPref = pref + upperCamel(en.name);
    r += "\n" + enumkw + " " + enPref + " { // " + cStorage(en.storage) + "\n";

    for (var _i5 = 0, _Object$keys5 = Object.keys(en.members); _i5 < _Object$keys5.length; _i5++) {
      var _k = _Object$keys5[_i5];
      r += indent2 + _k + " = " + toHex(en.members[_k]) + ",\n";
    }

    r += indent + "}\n\n";
  }

  var tsEnums = {};

  for (var _iterator11 = _createForOfIteratorHelperLoose(info.packets), _step11; !(_step11 = _iterator11()).done;) {
    var pkt = _step11.value;
    if (pkt.derived) continue;
    var cmt = addComment(pkt);
    var pack = pkt.fields.length ? packInfo(info, pkt, staticTypeScript).buffers : "";
    var _inner = "Cmd";
    if (isRegister(pkt.kind)) _inner = "Reg";else if (pkt.kind == "event") _inner = "Event";else if (pkt.kind == "meta_pipe_command" || pkt.kind == "meta_pipe_report") _inner = "PipeCmd";else if (pkt.kind == "pipe_command" || pkt.kind == "pipe_report") _inner = "info";
    var text = "";
    var meta = "";

    if (pkt.secondary || _inner == "info") {
      if (pack) text = wrapComment(pkt.kind + " " + upperCamel(pkt.name) + wrapSnippet(pack));
    } else {
      var val = toHex(pkt.identifier);

      if (staticTypeScript && pkt.kind === "event") {
        meta = "//% block=\"" + snakify(pkt.name).replace(/_/g, " ") + "\"\n";
      }

      text = "" + (wrapComment(cmt.comment + wrapSnippet(pack)) + meta) + upperCamel(pkt.name) + " = " + val + ",\n";
    }

    if (text) tsEnums[_inner] = (tsEnums[_inner] || "") + text; // don't line const strings in makecode,
    // they don't get dropped efficiently
  }

  for (var _i4 = 0, _Object$keys4 = Object.keys(tsEnums); _i4 < _Object$keys4.length; _i4++) {
    var k = _Object$keys4[_i4];
    if (k == "info") r += tsEnums[k].replace(/^/gm, indent) + "\n\n";else {
      var inner = tsEnums[k].replace(/^\n+/, "").replace(/\n$/, "").replace(/\n/g, "\n    " + indent);
      r += enumkw + " " + pref + k + " {\n    " + indent + inner + "\n" + indent + "}\n\n";
    }
  }

  if (staticTypeScript) r += "}\n";
  return r.replace(/ *$/gm, "");
}

function normalizeDeviceSpecification(dev) {
  // reorder fields
  var clone = {
    id: dev.id = escapeDeviceIdentifier(dev.company) + "-" + escapeDeviceNameIdentifier(dev.name),
    name: dev.name,
    company: dev.company,
    description: dev.description,
    repo: dev.repo,
    link: dev.link,
    services: dev.services || [],
    firmwares: dev.firmwares || []
  };
  return clone;
}
function escapeDeviceIdentifier(text) {
  if (!text) text = "";
  var escaped = text.trim().toLowerCase().replace(/([^a-z0-9\_-])+/gi, "-").replace(/^-+/, "").replace(/-+$/, "");
  var id = snakify(escaped);
  return id;
}
function escapeDeviceNameIdentifier(text) {
  return escapeDeviceIdentifier(text).replace(/-/g, "");
}
function converters() {
  return {
    json: function json(j) {
      return JSON.stringify(j, null, 2);
    },
    c: toH,
    ts: function ts(j) {
      return toTypescript(j, false);
    },
    sts: function sts(j) {
      return toTypescript(j, true);
    }
    /*
    "cpp": toHPP,
    */

  };
}
function isNumericType(field) {
  var tp = field.type;
  return !field.startRepeats && /^[uif]\d+(\.\d+)?$/.test(tp) && tp != "pipe_port" && tp != "bool";
}

/***/ })

}]);
//# sourceMappingURL=74493c31a6571423b4de02ce9ddf127887738210-73b26d8c9d02215bfff2.js.map