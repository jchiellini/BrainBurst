'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var wrench = require('wrench');

var options = {
  src: 'app',
  dist: 'www',
  tmp: '.tmp',
  e2e: 'e2e',
  vendor: '/vendor',
  errorHandler: function(title) {
    return function(err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  },
  wiredep: {
    directory: 'bower_components',
    exclude: [/bootstrap-sass\/.*\.js/],
    ignorePath: '../'
  },
  wiredepDist: {
    directory: 'bower_components',
    exclude: [/bootstrap-sass\/.*\.js/]
  },
  skipLintErrorFiles: [
    '!app/vendor/*.js'
  ]
};

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)(options);
});

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
