const gulp = require('gulp');
const ejs = require("gulp-ejs");
const runSequence = require('run-sequence');
const gutil = require('gulp-util');
const merge = require('merge-stream');
const moment = require('moment');
const insert = require('gulp-insert');
const extender = require('gulp-html-extend');
const CONFIG = require('./config.js');
const SOURCE_WATCH = 'src/html/**/*.ejs';
const SOURCE = [
    SOURCE_WATCH,
    '!*src/html/**/_*',
];

if (CONFIG.DEV_MODE) {
    gulp.watch(SOURCE_WATCH, () => runSequence('html', 'browser-sync-reload'));
}

gulp.task('html', () => {
    CONFIG.log('html');
    let dateName =`<!--${moment().format('YYYY_M_D_hh_mm')}-->`;
    let data = {};
    let options = {};
    let settings = {
        ext: '.html'
    };
    const htmlTask = gulp.src(SOURCE)
        .pipe(extender({annotations:true,verbose:false})) // default options
        .pipe(ejs(data, options, settings).on('error', gutil.log))
        .pipe(insert.append(dateName))
        .pipe(gulp.dest('dist'));

    const ejsTask = gulp.src(SOURCE_WATCH)
        .pipe(insert.append(dateName))
        .pipe(gulp.dest('dist'));

    return CONFIG.DEV_MODE ? htmlTask : merge(htmlTask, ejsTask);
});