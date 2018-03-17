/**
 * Task to minify css
 *
 */

module.exports = function (gulp, $, config, messages) {

   var cleanCSS = require('gulp-clean-css');
    var rename = require('gulp-rename');
   var concat = require('gulp-concat');

    gulp.task('minify-css-bootstrap', function () {
        return gulp.src(config.css.src)
            //.pipe(concat('../css/thirdparty/aos.css')
            .pipe(cleanCSS())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest(config.css.dest))
            ;
    });
};