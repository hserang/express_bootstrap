requirejs.config({
  baseUrl: "../../",
  paths: {
    underscore: "app/assets/libs/lodash/dist/lodash.underscore",
    jquery: "app/assets/libs/jquery/dist/jquery",
    backbone: "app/assets/libs/backbone-amd/backbone",
    mocha: "node_modules/mocha/mocha",
    chai: "node_modules/chai/chai",
    sinon: "node_modules/sinon/pkg/sinon"
  },
  shim: {
    mocha: {
      exports: "mocha"
    },
    chai: {
      deps: ['mocha'],
      exports: "chai"
    },
    sinon: {
      deps: ['mocha'],
      exports: "sinon"
    }
  }
});

requirejs(
  ['app/assets/scripts/app', 'mocha', 'chai', 'sinon'],
  function(App, mocha, chai, sinon) {
    "use strict";

    // bdd setup
    window.expect = chai.expect;

    mocha.setup('bdd');
    mocha.reporter('html');

    require([
      'js/spec/hello.spec.js'
    ], function(require) {
      if (window.mochaPhantomJS) {
        window.mochaPhantomJS.run();
      } else {
        mocha.run();
      }
    });
});


      //window.onload = function() {
        //(window.mochaPhantomJS || mocha).run();
      //};

