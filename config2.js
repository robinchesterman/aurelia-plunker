System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "ignore": ["github:*", "npm:*"],
    "stage": 0,
    "optional": []
  },
  paths: {
    "github:*": "https://cdn.rawgit.com/jdanyow/aurelia-plunker/v0.11.3/jspm_packages/github/*",
    "npm:*": "https://cdn.rawgit.com/jdanyow/aurelia-plunker/v0.11.3/jspm_packages/npm/*",
    "aurelia-bundle": "https://cdn.rawgit.com/jdanyow/aurelia-plunker/v0.11.3/dist/aurelia-bundle"
  },
  bundles: {
    "aurelia-bundle": [
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
      "npm:core-js@2.1.0",
      "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "npm:aurelia-path@1.0.0-beta.1.1.0",
      "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "npm:core-js@2.1.0/client/shim.min",
      "npm:aurelia-pal@1.0.0-beta.1.1.1/aurelia-pal",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.1/aurelia-task-queue",
      "npm:aurelia-metadata@1.0.0-beta.1.1.4/aurelia-metadata",
      "npm:aurelia-path@1.0.0-beta.1.1.0/aurelia-path",
      "npm:aurelia-loader@1.0.0-beta.1.1.1/aurelia-loader",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3/aurelia-dependency-injection",
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser",
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
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/compose",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/with",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/if",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/show",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/repeat",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/sanitize-html",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/replaceable",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/focus",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/compile-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/view-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/dynamic-element",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/binding-mode-behaviors",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/css-resource",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/html-sanitizer",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/throttle-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/signal-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/debounce-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/binding-signaler",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/update-trigger-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/repeat-strategy-locator",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/repeat-utilities",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/analyze-view-factory",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/null-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/array-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/number-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/map-repeat-strategy",
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
