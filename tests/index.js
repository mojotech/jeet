var chai    = require("chai");
var path    = require("path");
var cssDiff = require("css-diff");
var assert  = require("assert");
chai.should();


var basePath = __dirname;

describe("span", function() {
  it("should match", function() {
    return cssDiff({
      omit: [
        "comment"
      ],
      files: [
        path.join(basePath, "functions/span/span.scss"),
        path.join(basePath, "functions/span/span.styl")
      ],
      visual: true
    }).then(function(diff) {
      if (diff.different) {
        console.log(diff.visual)
      }

      return diff.different.should.be.false;
    });
  });
});

describe("column", function() {
  it("should match", function() {
    return cssDiff({
      omit: [
        "comment"
      ],
      files: [
        path.join(basePath, "functions/column/column.scss"),
        path.join(basePath, "functions/column/column.styl")
      ],
      visual: true
    }).then(function(diff) {
      if (diff.different) {
        console.log(diff.visual)
      }

      return diff.different.should.be.false;
    });
  });
});

describe("shift", function() {
  it("should match", function() {
    return cssDiff({
      omit: [
        "comment"
      ],
      files: [
        path.join(basePath, "functions/shift/shift.scss"),
        path.join(basePath, "functions/shift/shift.styl")
      ],
      visual: true
    }).then(function(diff) {
      if (diff.different) {
        console.log(diff.visual)
      }

      return diff.different.should.be.false;
    });
  });
});

describe("unshift", function() {
  it("should match", function() {
    return cssDiff({
      omit: [
        "comment"
      ],
      files: [
        path.join(basePath, "functions/unshift/unshift.scss"),
        path.join(basePath, "functions/unshift/unshift.styl")
      ],
      visual: true
    }).then(function(diff) {
      if (diff.different) {
        console.log(diff.visual)
      }

      return diff.different.should.be.false;
    });
  });
});
