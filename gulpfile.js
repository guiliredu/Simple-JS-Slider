var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('js:uglify', function(){
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});