var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    jeet = require('jeet');

gulp.task('jeet', function () {
    gulp.src('./style.styl')
        .pipe(stylus({use: [jeet()]}))
        .pipe(gulp.dest('./'));
});
