const gulp = require('gulp');
const gutil = require('gulp-util');
const proxyMiddleware = require('http-proxy-middleware');
const browserSync = require('browser-sync');

const CONFIG = require('./config.js');
// const proxy = proxyMiddleware('/form.ashx', { target: '', changeOrigin: true });

const OPEN_BROWSER = gutil.env._[0] === 'd';
const SERVE_CONFIG = {
    port: 3000,
    open: OPEN_BROWSER,
    files: ['dist/**/*/*'],
    server: {
        baseDir: './dist/',
        // middleware: [proxy],
    },
    ui: {
        port: 3001,
    },
};
const server = browserSync.create();
gulp.task('browser-sync', () => {
    if (CONFIG.DEV_MODE) {
        server.init(SERVE_CONFIG);
    }
});
gulp.task('browser-sync-stream', (cb) => {
    server.stream({ match: '**/*.css' });
    cb();
});
gulp.task('browser-sync-reload', (cb) => {
    server.reload();
    cb();
});
