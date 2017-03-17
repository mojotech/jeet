var path = require('path');
var pkg = require('./package.json');

var jeetPath = path.join(__dirname, 'styl');

exports = module.exports = function (opts) {
  var implicit = (opts && opts.implicit == false) ? false : true;

  return function (style) {
    style.include(__dirname);

    if (implicit) {
      style.import(jeetPath);
    }
  };
};

exports.libname = pkg.name;
exports.path = jeetPath;
exports.version = pkg.version;
