var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('watch', ['browserSync', 'js:uglify'], function(){
  gulp.watch('src/*.js', ['js:uglify']); 
});

gulp.task('js:uglify', function(){
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'demo'
    },
  })
})