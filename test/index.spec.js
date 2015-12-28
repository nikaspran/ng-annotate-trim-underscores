var expect = require('chai').expect;

describe('ng-annotate-trim-underscores', function () {
  var ngAnnotate = require("ng-annotate");
  var trimUnderscores = require("./../index");

  function annotate(src) {
    return ngAnnotate(src, {
      add: true,
      plugin: [trimUnderscores]
    }).src;
  }

  it('should strip underscores in controllers', function () {
    expect(annotate('angular.controller("Ctrl", function(_$http_){})')).to.equal(
      'angular.controller("Ctrl", ["$http", function(_$http_){}])'
    )
  });

  it('should not do anything if the underscore is the only character', function () {
    expect(annotate('angular.controller("Ctrl", function(_){})')).to.equal(
      'angular.controller("Ctrl", ["_", function(_){}])'
    )
  });
});
