/**
 * Task to compile stylesheets from Sass files.
 *
 * Tasks:
 * - Compiles stylesheets
 * - Autoprefixes
 * - Puts to destination
 * - Success/error message
 */

'use strict';

module.exports = function(gulp, $, config, messages) {
    var rename = require('gulp-rename');


    gulp.task('styles-app', function() {
  	return gulp.src(config.sass.src.app)
  		.pipe($.plumber({
  			errorHandler: messages.error
  		}))
  		.pipe($.sass(config.sass.config))
  		.pipe($.autoprefixer({
  			browsers: config.sass.autoprefixer
  		}))
  		.pipe(gulp.dest(config.sass.destination.app))
  		.pipe($.notify(messages.success));
  });
};
