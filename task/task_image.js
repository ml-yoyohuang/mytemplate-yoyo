const gulp = require('gulp');
const runSequence = require('run-sequence');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');
const merge = require('merge-stream');

const $ = require('gulp-load-plugins')();
const CONFIG = require('./config.js');

const DIST = 'dist/img';
const IMG_SRC = ['src/img/**/*.+(jpg|png|gif|svg)', '!src/img/_*'];
const OTHER_IMG = [];
IMG_SRC.forEach((value) => {
    if (value.indexOf('!') === -1) {
        OTHER_IMG.push(`!${value}`);
    } else {
        OTHER_IMG.push(value.substr(1));
    }
});


if (CONFIG.DEV_MODE) {
    gulp.watch('src/img/**/*', () => runSequence('image', 'browser-sync-reload'));
}
gulp.task('image', () => {
    CONFIG.log('m');

    const taskOtherIMG = gulp.src(OTHER_IMG)
        .pipe($.changed(DIST))
        .pipe($.size({
            title: '',
            showFiles: true,
        }))
        .pipe(gulp.dest(DIST));

    const taskIMGSRC = gulp.src(IMG_SRC)
        .pipe($.changed(DIST))
        .pipe($.size({
            title: '',
            showFiles: true,
        }))
        // .pipe($.imagemin([
        //     imageminMozjpeg({ quality: 90 }),
        //     imageminPngquant({ quality: 90 }),
        // ]))
        .pipe(gulp.dest(DIST))
        .pipe($.size({
            title: 'dist',
        }));

    return merge(taskOtherIMG, taskIMGSRC);
});

