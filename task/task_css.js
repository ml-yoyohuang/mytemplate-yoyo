const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const runSequence = require('run-sequence');
const autoprefixer = require('gulp-autoprefixer');
const gutil = require('gulp-util');
const gulpPlumber = require('gulp-plumber');
const sass = require('gulp-sass');

const sourcemapsHandler = require('./sourcemapHandler');

const CONFIG = require('./config.js');
const SOURCE_WATCH = 'src/css/**/*.scss';
const SOURCE = [SOURCE_WATCH, '!src/css/**/_*'];

if (CONFIG.DEV_MODE) {
    gulp.watch( SOURCE_WATCH, () => runSequence('css', 'browser-sync-stream'));
}

gulp.task('css', () => {
    CONFIG.log('css');
    let s = sass({
            outputStyle: 'compressed'
        });
    s = s.on('error', sass.logError);
    return gulp.src(SOURCE)
        .pipe(gulpPlumber())
        .pipe(sourcemaps.init())
        .pipe(s)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false,
            remove: false
        }))
        .pipe(sourcemapsHandler())
        .pipe(gulp.dest('dist/css'));
});
