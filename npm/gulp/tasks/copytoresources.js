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
    gulp.task('copytoresources', function() {
        return gulp.src(config.css.src)
			.pipe(gulp.dest(config.resources.css))
    });
};
