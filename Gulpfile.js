var gulp = require('gulp'),
    require('gulp-stylus'),
    jeet = require('jeet');

gulp.task('jeet', function () {
    gulp.src('./css/style.styl')
        .pipe(stylus({use: ['jeet']}))
        .pipe(gulp.dest('./css/'));
});
