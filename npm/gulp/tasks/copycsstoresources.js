'use strict';

module.exports = function(gulp, $, config, messages) {
    gulp.task('copycsstoresources', function() {
        //gulp.src('src/css/**/*.css')
        return gulp.src('../css/dist/**/*.css')
			.pipe(gulp.dest('../../../public/resources/themes/suilven_default/css/'))
    });
};
