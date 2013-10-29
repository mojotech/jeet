var autoprefixer = require('autoprefixer-stylus');

module.exports = function(opts) {
    var implicit = (opts && opts.implicit == false) ? false : true;
    
    return function(style){
        // Include Jeet
        style.include(__dirname);

        // Implicit import handling
        if (implicit) style.import('jeet');

        // Autoprefixer integration
        autoprefixer()(style);
    }
}