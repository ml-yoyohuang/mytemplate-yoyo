const gulp = require('gulp');
const concat = require('gulp-concat');
const hash = require('gulp-hash-filename');
const uglify = require('gulp-uglify');

const CONFIG = require('./config.js');

gulp.task('vendor', () => {
    CONFIG.log('vendor');
    const VENDOR_ARR = [
        'bower_components/device.js/lib/device.min.js',
        'bower_components/jquery/dist/jquery.min.js',
    ];
    const SOURCE = [
        'src/js/vendor/**/*.js',    
    ];;
    
    return gulp.src(SOURCE)
        .pipe(concat('vendor.js', { newLine: ';' }))
        .pipe(uglify())
        .pipe(hash({
            format: '{name}.{hash:10}{ext}',
        }))
        .pipe(gulp.dest('dist/js'));
});