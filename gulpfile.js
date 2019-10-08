const { src, dest, watch, series, parallel } = require('gulp');
let     
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cleancss = require('gulp-clean-css'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    webpack = require('webpack-stream');

sass.compiler = require('node-sass');

// Javascript tasks
function jsComp() {
    return src('src/js/**/*.js')
        .pipe(webpack())
        .pipe(concat('bundle.js'))
        .pipe(dest('dist/js'))
}

// CSS tasks
function scss() {
    return src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleancss({ compatibility: 'ie8' }))
        .pipe(dest('dist/css'))
}

function watching() {
    watch('src/scss/**/*.scss', scss);
    watch('src/js/**/*.js', jsComp);
}

exports.default = series(parallel(scss, jsComp), watching);