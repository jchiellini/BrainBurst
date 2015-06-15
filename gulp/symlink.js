'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {

  gulp.task('copy', function () {
    return gulp.src([options.src + '/scripts/**/*', options.src + '/scripts/*.js'], {
      base: options.src
    }).pipe(gulp.dest(options.tmp + '/serve'));
  });

  gulp.task('symlink', function() {
    gulp.src('bower_components/').pipe($.symlink(options.tmp + '/serve/bower_components'));
    gulp.src(options.src + '/fonts').pipe($.symlink(options.tmp + '/serve/fonts'));
    gulp.src(options.src + '/images').pipe($.symlink(options.tmp + '/serve/images'));
    gulp.src(options.src + '/scripts').pipe($.symlink(options.tmp + '/serve/scripts'));
    gulp.src(options.src + '/components').pipe($.symlink(options.tmp + '/serve/components'));
    gulp.src(options.src + '/fixtures').pipe($.symlink(options.tmp + '/serve/fixtures'));
    gulp.src(options.src + '/vendor').pipe($.symlink(options.tmp + '/serve/vendor'));
    gulp.src(options.src + '/views').pipe($.symlink(options.tmp + '/serve/views'));
  });

  gulp.task('symlink:serve', ['copy'], function() {
    gulp.src('bower_components/').pipe($.symlink(options.tmp + '/serve/bower_components'));
    gulp.src(options.src + '/fonts').pipe($.symlink(options.tmp + '/serve/fonts'));
    gulp.src(options.src + '/images').pipe($.symlink(options.tmp + '/serve/images'));
    gulp.src(options.src + '/components').pipe($.symlink(options.tmp + '/serve/components'));
    gulp.src(options.src + '/fixtures').pipe($.symlink(options.tmp + '/serve/fixtures'));
    gulp.src(options.src + '/lib').pipe($.symlink(options.tmp + '/serve/lib'));
    gulp.src(options.src + '/vendor').pipe($.symlink(options.tmp + '/serve/vendor'));
    gulp.src(options.src + '/views').pipe($.symlink(options.tmp + '/serve/views'));
  });
};
