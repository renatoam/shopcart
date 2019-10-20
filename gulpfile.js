const { src, dest, watch, series, parallel } = require('gulp');
let     
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cleancss = require('gulp-clean-css'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    babel = require('gulp-babel'),
    browserify = require('gulp-browserify'),
    del = require('del'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    ugly = require('gulp-uglify');

sass.compiler = require('node-sass');

// function replace() {
//     return del(['dist'])
// }

// Javascript tasks
// function jsComp() {
//     return src('src/js/**/*.js')
//         .pipe(babel({
//             presets: ['@babel/preset-env']
//         }))
//         .pipe(browserify())
//         .pipe(source('app.js'))
//         .pipe(buffer())
//         .pipe(ugly())
//         .pipe(dest('dist/js'))
// }

// CSS tasks
function scss() {
    return src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleancss({ compatibility: 'ie8' }))
        .pipe(dest('dist/css'))
}

// function watching() {
//     watch('src/scss/**/*.scss', scss);
//     watch('src/js/**/*.js', jsComp);
// }

// exports.default = series(parallel(scss, jsComp), watching);
exports.default = scss;