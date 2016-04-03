var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
var del     = require('del');
var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');
var karma   = require('gulp-karma');
var ghPages = require('gulp-gh-pages');

gulp.task('minify', function () {
  gulp.src('temperature.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'));

  gulp.src('./index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'))

  gulp.src('./*.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/'))
});

gulp.task('deploy', function() {
  return gulp.src('./dist/')
    .pipe(ghPages());
});

gulp.task('test', function() {
  // Be sure to return the stream
  return gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('clean', function(cb) {
  del(['minified/*'], cb);
});

gulp.task('default', ['minify'], function() {
  gulp.src([])
      .pipe(karma({
       configFile: 'karma.conf.js',
       action: 'watch'
     }));
 });
