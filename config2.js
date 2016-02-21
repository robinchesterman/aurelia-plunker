System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "ignore": ["github:*", "npm:*"],
    "stage": 0,
    "optional": []
  },
  paths: {
    "github:*": "https://cdn.rawgit.com/jdanyow/aurelia-plunker/v0.11.7/jspm_packages/github/*",
    "npm:*": "https://cdn.rawgit.com/jdanyow/aurelia-plunker/v0.11.7/jspm_packages/npm/*",
    "aurelia-bundle": "https://cdn.rawgit.com/jdanyow/aurelia-plunker/v0.11.7/dist/aurelia-bundle"
  },
  bundles: {
    "aurelia-bundle": [
      "npm:core-js@2.1.0/web/timers",
      "npm:core-js@2.1.0/modules/web.timers",
      "npm:core-js@2.1.0/modules/_core",
      "npm:core-js@2.1.0/modules/_global",
      "npm:core-js@2.1.0/modules/_export",
      "npm:core-js@2.1.0/modules/_invoke",
      "npm:core-js@2.1.0/modules/_partial",
      "npm:core-js@2.1.0/modules/_hide",
      "npm:core-js@2.1.0/modules/_redefine",
      "npm:core-js@2.1.0/modules/_ctx",
      "npm:core-js@2.1.0/modules/_path",
      "npm:core-js@2.1.0/modules/_a-function",
      "npm:core-js@2.1.0/modules/_object-dp",
      "npm:core-js@2.1.0/modules/_property-desc",
      "npm:core-js@2.1.0/modules/_descriptors",
      "npm:core-js@2.1.0/modules/_has",
      "npm:core-js@2.1.0/modules/_uid",
      "npm:core-js@2.1.0/modules/_an-object",
      "npm:core-js@2.1.0/modules/_ie8-dom-define",
      "npm:core-js@2.1.0/modules/_to-primitive",
      "npm:core-js@2.1.0/modules/_fails",
      "npm:core-js@2.1.0/modules/_is-object",
      "npm:core-js@2.1.0/modules/_dom-create",
      "npm:core-js@2.1.0/web/index",
      "npm:core-js@2.1.0/modules/web.immediate",
      "npm:core-js@2.1.0/modules/web.dom.iterable",
      "npm:core-js@2.1.0/modules/_task",
      "npm:core-js@2.1.0/modules/es6.array.iterator",
      "npm:core-js@2.1.0/modules/_iterators",
      "npm:core-js@2.1.0/modules/_wks",
      "npm:core-js@2.1.0/modules/_html",
      "npm:core-js@2.1.0/modules/_cof",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:core-js@2.1.0/modules/_add-to-unscopables",
      "npm:core-js@2.1.0/modules/_iter-step",
      "npm:core-js@2.1.0/modules/_to-iobject",
      "npm:core-js@2.1.0/modules/_iter-define",
      "npm:core-js@2.1.0/modules/_shared",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:core-js@2.1.0/modules/_iobject",
      "npm:core-js@2.1.0/modules/_defined",
      "npm:core-js@2.1.0/modules/_library",
      "npm:core-js@2.1.0/modules/_iter-create",
      "npm:core-js@2.1.0/modules/_set-to-string-tag",
      "npm:core-js@2.1.0/modules/_object-gpo",
      "npm:process@0.11.2",
      "npm:core-js@2.1.0/modules/_object-create",
      "npm:core-js@2.1.0/modules/_to-object",
      "npm:core-js@2.1.0/modules/_shared-key",
      "npm:process@0.11.2/browser",
      "npm:core-js@2.1.0/modules/_object-dps",
      "npm:core-js@2.1.0/modules/_enum-bug-keys",
      "npm:core-js@2.1.0/modules/_object-keys",
      "npm:core-js@2.1.0/modules/_object-keys-internal",
      "npm:core-js@2.1.0/modules/_array-includes",
      "npm:core-js@2.1.0/modules/_to-length",
      "npm:core-js@2.1.0/modules/_to-index",
      "npm:core-js@2.1.0/modules/_to-integer",
      "npm:core-js@2.1.0/web/immediate",
      "npm:core-js@2.1.0/web/dom-collections",
      "npm:core-js@2.1.0/es7/system",
      "npm:core-js@2.1.0/modules/es7.system.global",
      "npm:core-js@2.1.0/es7/string",
      "npm:core-js@2.1.0/modules/es7.string.at",
      "npm:core-js@2.1.0/modules/es7.string.pad-start",
      "npm:core-js@2.1.0/modules/es7.string.pad-end",
      "npm:core-js@2.1.0/modules/es7.string.trim-left",
      "npm:core-js@2.1.0/modules/es7.string.trim-right",
      "npm:core-js@2.1.0/modules/_string-at",
      "npm:core-js@2.1.0/modules/_string-pad",
      "npm:core-js@2.1.0/modules/_string-trim",
      "npm:core-js@2.1.0/modules/_string-repeat",
      "npm:core-js@2.1.0/modules/_string-ws",
      "npm:core-js@2.1.0/es7/set",
      "npm:core-js@2.1.0/modules/es7.set.to-json",
      "npm:core-js@2.1.0/modules/_collection-to-json",
      "npm:core-js@2.1.0/modules/_classof",
      "npm:core-js@2.1.0/modules/_array-from-iterable",
      "npm:core-js@2.1.0/modules/_for-of",
      "npm:core-js@2.1.0/modules/_iter-call",
      "npm:core-js@2.1.0/modules/_is-array-iter",
      "npm:core-js@2.1.0/modules/core.get-iterator-method",
      "npm:core-js@2.1.0/es7/reflect",
      "npm:core-js@2.1.0/modules/es7.reflect.define-metadata",
      "npm:core-js@2.1.0/modules/es7.reflect.delete-metadata",
      "npm:core-js@2.1.0/modules/es7.reflect.get-metadata",
      "npm:core-js@2.1.0/modules/es7.reflect.get-metadata-keys",
      "npm:core-js@2.1.0/modules/es7.reflect.get-own-metadata",
      "npm:core-js@2.1.0/modules/es7.reflect.get-own-metadata-keys",
      "npm:core-js@2.1.0/modules/es7.reflect.has-metadata",
      "npm:core-js@2.1.0/modules/es7.reflect.has-own-metadata",
      "npm:core-js@2.1.0/modules/es7.reflect.metadata",
      "npm:core-js@2.1.0/modules/_metadata",
      "npm:core-js@2.1.0/modules/es6.set",
      "npm:core-js@2.1.0/modules/es6.map",
      "npm:core-js@2.1.0/modules/es6.weak-map",
      "npm:core-js@2.1.0/modules/_collection-strong",
      "npm:core-js@2.1.0/modules/_collection",
      "npm:core-js@2.1.0/modules/_array-methods",
      "npm:core-js@2.1.0/modules/_meta",
      "npm:core-js@2.1.0/modules/_object-assign",
      "npm:core-js@2.1.0/modules/_collection-weak",
      "npm:core-js@2.1.0/modules/_redefine-all",
      "npm:core-js@2.1.0/modules/_an-instance",
      "npm:core-js@2.1.0/modules/_set-species",
      "npm:core-js@2.1.0/modules/_iter-detect",
      "npm:core-js@2.1.0/modules/_inherit-if-required",
      "npm:core-js@2.1.0/modules/_array-species-create",
      "npm:core-js@2.1.0/modules/_object-gops",
      "npm:core-js@2.1.0/modules/_object-pie",
      "npm:core-js@2.1.0/modules/_set-proto",
      "npm:core-js@2.1.0/modules/_is-array",
      "npm:core-js@2.1.0/modules/_object-gopd",
      "npm:core-js@2.1.0/es7/object",
      "npm:core-js@2.1.0/modules/es7.object.get-own-property-descriptors",
      "npm:core-js@2.1.0/modules/es7.object.values",
      "npm:core-js@2.1.0/modules/es7.object.entries",
      "npm:core-js@2.1.0/modules/_own-keys",
      "npm:core-js@2.1.0/modules/_object-to-array",
      "npm:core-js@2.1.0/modules/_object-gopn",
      "npm:core-js@2.1.0/es7/math",
      "npm:core-js@2.1.0/modules/es7.math.iaddh",
      "npm:core-js@2.1.0/modules/es7.math.isubh",
      "npm:core-js@2.1.0/modules/es7.math.imulh",
      "npm:core-js@2.1.0/modules/es7.math.umulh",
      "npm:core-js@2.1.0/es7/map",
      "npm:core-js@2.1.0/modules/es7.map.to-json",
      "npm:core-js@2.1.0/es7/index",
      "npm:core-js@2.1.0/modules/es7.array.includes",
      "npm:core-js@2.1.0/modules/es7.error.is-error",
      "npm:core-js@2.1.0/es7/error",
      "npm:core-js@2.1.0/es7/array",
      "npm:core-js@2.1.0/es6/weak-set",
      "npm:core-js@2.1.0/modules/es6.object.to-string",
      "npm:core-js@2.1.0/modules/es6.weak-set",
      "npm:core-js@2.1.0/es6/weak-map",
      "npm:core-js@2.1.0/es6/typed",
      "npm:core-js@2.1.0/modules/es6.typed.array-buffer",
      "npm:core-js@2.1.0/modules/es6.typed.data-view",
      "npm:core-js@2.1.0/modules/es6.typed.int8-array",
      "npm:core-js@2.1.0/modules/es6.typed.uint8-array",
      "npm:core-js@2.1.0/modules/es6.typed.uint8-clamped-array",
      "npm:core-js@2.1.0/modules/es6.typed.int16-array",
      "npm:core-js@2.1.0/modules/es6.typed.uint16-array",
      "npm:core-js@2.1.0/modules/es6.typed.int32-array",
      "npm:core-js@2.1.0/modules/es6.typed.uint32-array",
      "npm:core-js@2.1.0/modules/es6.typed.float32-array",
      "npm:core-js@2.1.0/modules/es6.typed.float64-array",
      "npm:core-js@2.1.0/modules/_typed",
      "npm:core-js@2.1.0/modules/_typed-buffer",
      "npm:core-js@2.1.0/modules/_species-constructor",
      "npm:core-js@2.1.0/modules/_typed-array",
      "npm:core-js@2.1.0/modules/_array-fill",
      "npm:core-js@2.1.0/modules/_is-integer",
      "npm:core-js@2.1.0/modules/_same-value",
      "npm:core-js@2.1.0/modules/core.is-iterable",
      "npm:core-js@2.1.0/modules/_array-copy-within",
      "npm:core-js@2.1.0/es6/symbol",
      "npm:core-js@2.1.0/modules/es6.symbol",
      "npm:core-js@2.1.0/modules/_keyof",
      "npm:core-js@2.1.0/modules/_enum-keys",
      "npm:core-js@2.1.0/modules/_object-gopn-ext",
      "npm:core-js@2.1.0/es6/string",
      "npm:core-js@2.1.0/modules/es6.string.from-code-point",
      "npm:core-js@2.1.0/modules/es6.string.raw",
      "npm:core-js@2.1.0/modules/es6.string.trim",
      "npm:core-js@2.1.0/modules/es6.string.iterator",
      "npm:core-js@2.1.0/modules/es6.string.code-point-at",
      "npm:core-js@2.1.0/modules/es6.string.ends-with",
      "npm:core-js@2.1.0/modules/es6.string.includes",
      "npm:core-js@2.1.0/modules/es6.string.repeat",
      "npm:core-js@2.1.0/modules/es6.string.starts-with",
      "npm:core-js@2.1.0/modules/es6.string.anchor",
      "npm:core-js@2.1.0/modules/es6.string.big",
      "npm:core-js@2.1.0/modules/es6.string.blink",
      "npm:core-js@2.1.0/modules/es6.string.bold",
      "npm:core-js@2.1.0/modules/es6.string.fixed",
      "npm:core-js@2.1.0/modules/es6.string.fontcolor",
      "npm:core-js@2.1.0/modules/es6.string.fontsize",
      "npm:core-js@2.1.0/modules/es6.string.italics",
      "npm:core-js@2.1.0/modules/es6.string.link",
      "npm:core-js@2.1.0/modules/es6.string.small",
      "npm:core-js@2.1.0/modules/es6.string.strike",
      "npm:core-js@2.1.0/modules/es6.string.sub",
      "npm:core-js@2.1.0/modules/es6.string.sup",
      "npm:core-js@2.1.0/modules/es6.regexp.match",
      "npm:core-js@2.1.0/modules/es6.regexp.replace",
      "npm:core-js@2.1.0/modules/es6.regexp.search",
      "npm:core-js@2.1.0/modules/es6.regexp.split",
      "npm:core-js@2.1.0/modules/_string-context",
      "npm:core-js@2.1.0/modules/_fails-is-regexp",
      "npm:core-js@2.1.0/modules/_string-html",
      "npm:core-js@2.1.0/modules/_fix-re-wks",
      "npm:core-js@2.1.0/modules/_is-regexp",
      "npm:core-js@2.1.0/es6/set",
      "npm:core-js@2.1.0/es6/regexp",
      "npm:core-js@2.1.0/modules/es6.regexp.constructor",
      "npm:core-js@2.1.0/modules/es6.regexp.to-string",
      "npm:core-js@2.1.0/modules/es6.regexp.flags",
      "npm:core-js@2.1.0/modules/_flags",
      "npm:core-js@2.1.0/es6/reflect",
      "npm:core-js@2.1.0/modules/es6.reflect.apply",
      "npm:core-js@2.1.0/modules/es6.reflect.construct",
      "npm:core-js@2.1.0/modules/es6.reflect.define-property",
      "npm:core-js@2.1.0/modules/es6.reflect.delete-property",
      "npm:core-js@2.1.0/modules/es6.reflect.enumerate",
      "npm:core-js@2.1.0/modules/es6.reflect.get",
      "npm:core-js@2.1.0/modules/es6.reflect.get-own-property-descriptor",
      "npm:core-js@2.1.0/modules/es6.reflect.get-prototype-of",
      "npm:core-js@2.1.0/modules/es6.reflect.has",
      "npm:core-js@2.1.0/modules/es6.reflect.is-extensible",
      "npm:core-js@2.1.0/modules/es6.reflect.own-keys",
      "npm:core-js@2.1.0/modules/es6.reflect.prevent-extensions",
      "npm:core-js@2.1.0/modules/es6.reflect.set",
      "npm:core-js@2.1.0/modules/es6.reflect.set-prototype-of",
      "npm:core-js@2.1.0/modules/_bind",
      "npm:core-js@2.1.0/es6/promise",
      "npm:core-js@2.1.0/modules/es6.promise",
      "npm:core-js@2.1.0/modules/_microtask",
      "npm:core-js@2.1.0/es6/parse-int",
      "npm:core-js@2.1.0/modules/es6.parse-int",
      "npm:core-js@2.1.0/modules/_parse-int",
      "npm:core-js@2.1.0/es6/parse-float",
      "npm:core-js@2.1.0/modules/es6.parse-float",
      "npm:core-js@2.1.0/modules/_parse-float",
      "npm:core-js@2.1.0/es6/object",
      "npm:core-js@2.1.0/modules/es6.object.create",
      "npm:core-js@2.1.0/modules/es6.object.define-property",
      "npm:core-js@2.1.0/modules/es6.object.define-properties",
      "npm:core-js@2.1.0/modules/es6.object.get-own-property-descriptor",
      "npm:core-js@2.1.0/modules/es6.object.get-prototype-of",
      "npm:core-js@2.1.0/modules/es6.object.keys",
      "npm:core-js@2.1.0/modules/es6.object.get-own-property-names",
      "npm:core-js@2.1.0/modules/es6.object.freeze",
      "npm:core-js@2.1.0/modules/es6.object.seal",
      "npm:core-js@2.1.0/modules/es6.object.prevent-extensions",
      "npm:core-js@2.1.0/modules/es6.object.is-frozen",
      "npm:core-js@2.1.0/modules/es6.object.is-sealed",
      "npm:core-js@2.1.0/modules/es6.object.is-extensible",
      "npm:core-js@2.1.0/modules/es6.object.assign",
      "npm:core-js@2.1.0/modules/es6.object.is",
      "npm:core-js@2.1.0/modules/es6.object.set-prototype-of",
      "npm:core-js@2.1.0/modules/_object-sap",
      "npm:core-js@2.1.0/es6/number",
      "npm:core-js@2.1.0/modules/es6.number.constructor",
      "npm:core-js@2.1.0/modules/es6.number.to-fixed",
      "npm:core-js@2.1.0/modules/es6.number.to-precision",
      "npm:core-js@2.1.0/modules/es6.number.epsilon",
      "npm:core-js@2.1.0/modules/es6.number.is-finite",
      "npm:core-js@2.1.0/modules/es6.number.is-integer",
      "npm:core-js@2.1.0/modules/es6.number.is-nan",
      "npm:core-js@2.1.0/modules/es6.number.is-safe-integer",
      "npm:core-js@2.1.0/modules/es6.number.max-safe-integer",
      "npm:core-js@2.1.0/modules/es6.number.min-safe-integer",
      "npm:core-js@2.1.0/modules/es6.number.parse-float",
      "npm:core-js@2.1.0/modules/es6.number.parse-int",
      "npm:core-js@2.1.0/modules/_a-number-value",
      "npm:core-js@2.1.0/es6/math",
      "npm:core-js@2.1.0/modules/es6.math.acosh",
      "npm:core-js@2.1.0/modules/es6.math.asinh",
      "npm:core-js@2.1.0/modules/es6.math.atanh",
      "npm:core-js@2.1.0/modules/es6.math.cbrt",
      "npm:core-js@2.1.0/modules/es6.math.clz32",
      "npm:core-js@2.1.0/modules/es6.math.cosh",
      "npm:core-js@2.1.0/modules/es6.math.expm1",
      "npm:core-js@2.1.0/modules/es6.math.fround",
      "npm:core-js@2.1.0/modules/es6.math.hypot",
      "npm:core-js@2.1.0/modules/es6.math.imul",
      "npm:core-js@2.1.0/modules/es6.math.log10",
      "npm:core-js@2.1.0/modules/es6.math.log1p",
      "npm:core-js@2.1.0/modules/es6.math.log2",
      "npm:core-js@2.1.0/modules/es6.math.sign",
      "npm:core-js@2.1.0/modules/es6.math.sinh",
      "npm:core-js@2.1.0/modules/es6.math.tanh",
      "npm:core-js@2.1.0/modules/es6.math.trunc",
      "npm:core-js@2.1.0/modules/_math-log1p",
      "npm:core-js@2.1.0/modules/_math-sign",
      "npm:core-js@2.1.0/modules/_math-expm1",
      "npm:core-js@2.1.0/es6/map",
      "npm:core-js@2.1.0/es6/index",
      "npm:core-js@2.1.0/modules/es6.function.bind",
      "npm:core-js@2.1.0/modules/es6.function.name",
      "npm:core-js@2.1.0/modules/es6.function.has-instance",
      "npm:core-js@2.1.0/modules/es6.date.now",
      "npm:core-js@2.1.0/modules/es6.date.to-string",
      "npm:core-js@2.1.0/modules/es6.date.to-iso-string",
      "npm:core-js@2.1.0/modules/es6.date.to-json",
      "npm:core-js@2.1.0/modules/es6.array.is-array",
      "npm:core-js@2.1.0/modules/es6.array.from",
      "npm:core-js@2.1.0/modules/es6.array.of",
      "npm:core-js@2.1.0/modules/es6.array.join",
      "npm:core-js@2.1.0/modules/es6.array.slice",
      "npm:core-js@2.1.0/modules/es6.array.sort",
      "npm:core-js@2.1.0/modules/es6.array.for-each",
      "npm:core-js@2.1.0/modules/es6.array.map",
      "npm:core-js@2.1.0/modules/es6.array.filter",
      "npm:core-js@2.1.0/modules/es6.array.some",
      "npm:core-js@2.1.0/modules/es6.array.every",
      "npm:core-js@2.1.0/modules/es6.array.reduce",
      "npm:core-js@2.1.0/modules/es6.array.reduce-right",
      "npm:core-js@2.1.0/modules/es6.array.index-of",
      "npm:core-js@2.1.0/modules/es6.array.last-index-of",
      "npm:core-js@2.1.0/modules/es6.array.copy-within",
      "npm:core-js@2.1.0/modules/es6.array.fill",
      "npm:core-js@2.1.0/modules/es6.array.find",
      "npm:core-js@2.1.0/modules/es6.array.find-index",
      "npm:core-js@2.1.0/modules/es6.array.species",
      "npm:core-js@2.1.0/modules/_strict-method",
      "npm:core-js@2.1.0/modules/_array-reduce",
      "npm:core-js@2.1.0/es6/function",
      "npm:core-js@2.1.0/es6/date",
      "npm:core-js@2.1.0/es6/array",
      "npm:core-js@2.1.0/es5/index",
      "npm:core-js@2.1.0/core/string",
      "npm:core-js@2.1.0/modules/core.string.escape-html",
      "npm:core-js@2.1.0/modules/core.string.unescape-html",
      "npm:core-js@2.1.0/modules/_replacer",
      "npm:core-js@2.1.0/core/regexp",
      "npm:core-js@2.1.0/modules/core.regexp.escape",
      "npm:core-js@2.1.0/core/object",
      "npm:core-js@2.1.0/modules/core.object.is-object",
      "npm:core-js@2.1.0/modules/core.object.classof",
      "npm:core-js@2.1.0/modules/core.object.define",
      "npm:core-js@2.1.0/modules/core.object.make",
      "npm:core-js@2.1.0/modules/_object-define",
      "npm:core-js@2.1.0/core/number",
      "npm:core-js@2.1.0/modules/core.number.iterator",
      "npm:core-js@2.1.0/core/index",
      "npm:core-js@2.1.0/modules/core.dict",
      "npm:core-js@2.1.0/modules/core.delay",
      "npm:core-js@2.1.0/modules/core.function.part",
      "npm:core-js@2.1.0/modules/core.get-iterator",
      "npm:core-js@2.1.0/core/function",
      "npm:core-js@2.1.0/core/dict",
      "npm:core-js@2.1.0/core/delay",
      "npm:core-js@2.1.0/core/_",
      "npm:core-js@2.1.0",
      "npm:core-js@2.1.0/client/shim.min",
      "github:systemjs/plugin-text@0.0.4",
      "github:systemjs/plugin-text@0.0.4/text",
      "npm:aurelia-templating-binding@1.0.0-beta.1.1.1",
      "npm:aurelia-templating-binding@1.0.0-beta.1.1.1/aurelia-templating-binding",
      "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "npm:aurelia-binding@1.0.0-beta.1.1.3",
      "npm:aurelia-templating@1.0.0-beta.1.1.1",
      "npm:aurelia-logging@1.0.0-beta.1.1.1/aurelia-logging",
      "npm:aurelia-binding@1.0.0-beta.1.1.3/aurelia-binding",
      "npm:aurelia-templating@1.0.0-beta.1.1.1/aurelia-templating",
      "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "npm:aurelia-path@1.0.0-beta.1.1.0",
      "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "npm:aurelia-pal@1.0.0-beta.1.1.1/aurelia-pal",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.1/aurelia-task-queue",
      "npm:aurelia-metadata@1.0.0-beta.1.1.4/aurelia-metadata",
      "npm:aurelia-path@1.0.0-beta.1.1.0/aurelia-path",
      "npm:aurelia-loader@1.0.0-beta.1.1.1/aurelia-loader",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3/aurelia-dependency-injection",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.1.1",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.1.1/aurelia-route-recognizer",
      "npm:aurelia-router@1.0.0-beta.1.1.1",
      "npm:aurelia-router@1.0.0-beta.1.1.1/aurelia-router",
      "npm:aurelia-history@1.0.0-beta.1.1.1",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "npm:aurelia-history@1.0.0-beta.1.1.1/aurelia-history",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1/aurelia-event-aggregator",
      "npm:aurelia-pal-browser@1.0.0-beta.1.1.3",
      "npm:aurelia-pal-browser@1.0.0-beta.1.1.3/aurelia-pal-browser",
      "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
      "npm:aurelia-logging-console@1.0.0-beta.1.1.4/aurelia-logging-console",
      "npm:aurelia-loader-default@1.0.0-beta.1.1.2",
      "npm:aurelia-loader-default@1.0.0-beta.1.1.2/aurelia-loader-default",
      "npm:aurelia-history-browser@1.0.0-beta.1.1.2",
      "npm:aurelia-history-browser@1.0.0-beta.1.1.2/aurelia-history-browser",
      "npm:aurelia-framework@1.0.0-beta.1.1.3",
      "npm:aurelia-framework@1.0.0-beta.1.1.3/aurelia-framework",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.1.2",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.1.2/aurelia-bootstrapper",
      "npm:aurelia-animator-css@1.0.0-beta.1.1.1",
      "npm:aurelia-animator-css@1.0.0-beta.1.1.1/aurelia-animator-css",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.1",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.1/aurelia-templating-router",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.1/route-loader",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.1/router-view",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.1/route-href",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/aurelia-templating-resources",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/if",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/compose",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/with",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/show",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/repeat",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/sanitize-html",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/replaceable",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/view-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/focus",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/compile-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/dynamic-element",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/css-resource",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/html-sanitizer",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/binding-mode-behaviors",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/throttle-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/debounce-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/signal-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/binding-signaler",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/update-trigger-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/repeat-strategy-locator",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/repeat-utilities",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/analyze-view-factory",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/null-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/map-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/array-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/number-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/set-repeat-strategy"
    ]
  },

  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.1.1",
    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.1.2",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
    "aurelia-dialog": "npm:aurelia-dialog@0.5.6",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.1.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.3",
    "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.1.2",
    "aurelia-http-client": "npm:aurelia-http-client@1.0.0-beta.1.1.1",
    "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.1.2",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
    "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.1.1",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.1",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.1.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.1.1",
    "aurelia-validation": "npm:aurelia-validation@0.6.2",
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "core-js": "npm:core-js@2.1.0",
    "css": "github:systemjs/plugin-css@0.1.20",
    "fetch": "github:github/fetch@0.11.0",
    "font-awesome": "npm:font-awesome@4.5.0",
    "moment": "npm:moment@2.11.2",
    "numeral": "npm:numeral@1.5.3",
    "text": "github:systemjs/plugin-text@0.0.4",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.1.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-binding@1.0.0-beta.1.1.3": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.1.2": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.3",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.1.2",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.1.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.1.3",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.1.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-dialog@0.5.6": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.3",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-fetch-client@1.0.0-beta.1.1.0": {
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-framework@1.0.0-beta.1.1.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.1.2": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-http-client@1.0.0-beta.1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.1.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-loader@1.0.0-beta.1.1.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.1.4": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.1.4": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.1.3": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.1.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-router@1.0.0-beta.1.1.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.1.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-templating@1.0.0-beta.1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-validation@0.6.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:moment@2.11.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:numeral@1.5.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
  });
