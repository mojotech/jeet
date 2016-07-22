// like axis/index.js

var path = require('path'),
        pkg = require('../package.json');

exports = module.exports = function(opts) {
	  var implicit = (opts && opts.implicit == false) ? false : true;

	    return function(style){
		        style.include(__dirname); // include jeet

			    if (implicit) {
				          style.import('jeet');
					      }
			      }

}

exports.libname = pkg.name;
exports.path = __dirname;
exports.version = pkg.version;
