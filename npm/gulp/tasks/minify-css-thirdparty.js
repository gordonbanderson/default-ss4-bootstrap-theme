/**
 * Task to minify css
 *
 */

module.exports = function (gulp, $, config, messages) {

   var cleanCSS = require('gulp-clean-css');
    var rename = require('gulp-rename');
   var concat = require('gulp-concat');

    gulp.task('minify-css-thirdparty', function () {
        return gulp.src(config.css.thirdpartysrc)
            .pipe(cleanCSS())
            .pipe(concat('app.min.css'))
            .pipe(gulp.dest(config.css.dest))
            ;
    });
};