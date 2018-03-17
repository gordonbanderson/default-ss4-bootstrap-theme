'use strict';

module.exports = function(gulp, $, config, messages) {
    gulp.task('copyjstoresources', function() {
        return gulp.src('../javascript/dist/**/*.js')
			.pipe(gulp.dest('../../../public/resources/themes/suilven_default/javascript/'))
    });
};
