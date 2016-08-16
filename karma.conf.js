/* eslint-env node*/

module.exports = function (config) {
  "use strict";

  config.set({

    basePath: "./",

    files: [
      "app/bower_components/angular/angular.js",
      "app/bower_components/angular-route/angular-route.js",
      "app/bower_components/angular-mocks/angular-mocks.js",
      "app/bower_components/underscore/underscore.js",
      "app/klondike/piles/pile.js",
      "app/klondike/piles/foundationPile.js",
      "app/klondike/piles/remainderPile.js",
      "app/klondike/piles/tableauPile.js",
    ],

    proxies: {
      // Whenever during tests execution Karma looks for a node_modules, this
      // will be resolved though base/ which is where Karma is serving files
      // from
      "/node_modules": "/base/node_modules"
    },

    jspm: {
      // Tells where the config file for SystemJS is
      config: "app/config.js",
      // Points to a folder that contains a copy of system.js to use that for
      // testing
      packages: "app/bower_components/system.js/dist",
      // A set of files Karma will serve but will not included in the test page,
      // not loaded through SystemJS either.
      serveFiles: [
        "app/**/*.js",
        "node_modules/babel-core/lib/api/browser.js"
      ],
      // Treats the files here as modules to be imported through the
      // System.import instead of being just scripts like the files above
      loadFiles: [
        "tests/cards/card_test.js"
      ]
    },

    autoWatch: true,

    frameworks: ["jspm", "jasmine"],

    browsers: ["Chrome"],

    plugins: [
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-jasmine",
      "karma-junit-reporter",
      "karma-jspm"
    ],

    junitReporter: {
      outputFile: "test_out/unit.xml",
      suite: "unit"
    }

  });
};
