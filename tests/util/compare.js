var cssDiff = require("css-diff");
var path    = require("path");
var chai    = require("chai");
chai.should();

module.exports = function(opts) {
  var files = opts.files.map(function(path) {
    return opts.basePath + "/"+path;
  });

  return cssDiff({
    omit: [
      "comment"
    ],
    files: files,
    visual: true
  }).then(function(diff) {
    if (diff.different) {
      console.log(diff.visual)
    }

    return diff.different.should.be.false;
  });
}