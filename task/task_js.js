const gulp = require('gulp');
const babel = require('gulp-babel');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const path = require('path');
const sourcemaps = require('gulp-sourcemaps');
const gulpPlumber = require('gulp-plumber');
const CONFIG = require('./config.js');

const SOURCE = [
    'src/js/**/*.js',    
];

if( CONFIG.DEV_MODE ){
    gulp.watch(SOURCE, () => runSequence('js', 'browser-sync-reload'));
}

const sourcemapsHandler = require('./sourcemapHandler');

gulp.task('js', () => {
    CONFIG.log('js');
    return gulp.src(SOURCE)
	    .pipe(babel({
	      presets: ['es2015']
	    }))
        .pipe(gulpPlumber())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemapsHandler())
        .pipe(gulp.dest('dist/js'));
});

