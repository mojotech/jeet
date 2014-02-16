var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jeet = require('jeet');

gulp.task('jeet', function () {
    gulp.src('./css/style.styl')
        .pipe(stylus({use: ['jeet']}))
        .pipe(gulp.dest('./css/'));
});
