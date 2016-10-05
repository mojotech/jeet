var path = require('path');
var pkg = require('./package.json');

var jeetPath = path.join(__dirname, 'styl')

exports = module.exports = function (opts) {
  return function (style) {
    style.import(jeetPath);
  }
}

exports.libname = pkg.name;
exports.path = jeetPath;
exports.version = pkg.version;
