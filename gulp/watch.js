'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

function isOnlyChange(event) {
  return event.type === 'changed';
}

module.exports = function(options) {

  gulp.task('watch:pre', function(cb) {
    runSequence('cleanServe', 'injectServe', 'symlink:serve', cb)
  });

  gulp.task('watch', ['watch:pre'], function () {

    gulp.watch([options.src + '/*.html', 'bower.json'], ['injectServe']);

    gulp.watch([
      options.src + '/**/*.css',
      options.src + '/**/*.scss'
    ], function(event) {
      if(isOnlyChange(event)) {
        gulp.start('styles');
      } else {
        gulp.start('injectServe');
      }
    });

    gulp.watch(options.src + '/**/*.js', function(event) {
      if(isOnlyChange(event)) {
        gulp.start('scripts', 'copy');
      } else {
        gulp.start('injectServe', 'copy');
      }
    });

    gulp.watch(options.src + '/**/*.html', function(event) {
      browserSync.reload(event.path);
    });
  });

  gulp.task('watch:pre:nohint', function(cb) {
    runSequence('cleanServe', 'injectServe:nohint', 'symlink', cb)
  });

  gulp.task('watch:nohint', ['watch:pre:nohint'], function () {

    gulp.watch([options.src + '/*.html', 'bower.json'], ['injectServe:nohint']);

    gulp.watch([
      options.src + '/**/*.css',
      options.src + '/**/*.scss'
    ], function(event) {
      if(isOnlyChange(event)) {
        gulp.start('styles');
      } else {
        gulp.start('injectServe:nohint');
      }
    });

    gulp.watch(options.src + '/**/*.js', function(event) {
      if(isOnlyChange(event)) {
        gulp.start('scripts:nohint');
      } else {
        gulp.start('injectServe:nohint');
      }
    });

    gulp.watch(options.src + '/**/*.html', function(event) {
      browserSync.reload(event.path);
    });
  });
};
