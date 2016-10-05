# Gulp

- http://gulpjs.com
- https://github.com/stevelacy/gulp-stylus

```js
// gulpfile.js
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jeet = require('jeet');

gulp.task('default', function() {
  return gulp.src('./src/style.styl')
    .pipe(stylus({
      use: jeet()
    }))
    .pipe(gulp.dest('./dist'));
});
```
