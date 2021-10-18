// var gulp = require('gulp');
// const minify = require('gulp-minify');
 
// gulp.task('compress', function() {
//   gulp.src(['index.js'])
//     .pipe(minify())
//     .pipe(gulp.dest('dist'))
// });


const { src, dest }  = require("gulp");
const minify = require("gulp-minify");

function minifyjs() {

    return src('index.js', { allowEmpty: true }) 
        .pipe(minify({noSource: true}))
        .pipe(dest('dist'))
}

exports.default = minifyjs;