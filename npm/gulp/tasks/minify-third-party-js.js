/**
 * Task to minify app js
 *
 */

module.exports = function(gulp, $, config, messages) {

    //var gulp   = require('gulp');
    //var path   = require('path');
    var concat = require('gulp-concat');
    var uglify = require('gulp-uglify');
    var cacheBuster = require('gulp-cache-bust');

    gulp.task('minify-third-party-js', function() {
        return gulp.src([
            '../javascript/jquery/jquery-3.3.1.js',
            '../javascript/popper/popper.js',
            '../javascript/bootstrap/bootstrap.js'
        ])
            .pipe(concat('thirdparty.min.js'))
            .pipe(uglify())
            .pipe(cacheBuster())
            .pipe(gulp.dest('static/dist/'));
    });
};