/**
 * Task to minify app js
 *
 */

module.exports = function(gulp, $, config, messages) {
    var concat = require('gulp-concat');
    var uglify = require('gulp-uglify');

    gulp.task('minify-app-js', function() {
        return gulp.src([
                '../javascript/thirdparty/aos.js',
                '../javascript/thirdparty/smartcrop.js'
        ])
            .pipe(concat('app.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('../javascript/dist/'));
    });
};