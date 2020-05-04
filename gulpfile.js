var gulp = require('gulp');
var sass = require('gulp-sass');

var cfg = require('./gulpconfig.json');
var paths = cfg.paths;

function scss() {
    return gulp.src( paths.sass + '/**/*.scss' )
    .pipe(sass({
        errLogToConsole: false,
        onError: function(err) {
        return notify().write(err);
        }
    }))
    .pipe( gulp.dest( paths.css ) )
}

function watch() {

    gulp.watch( paths.sass + '/**/*.scss', scss );

}

exports.scss = scss;
exports.watch = watch;