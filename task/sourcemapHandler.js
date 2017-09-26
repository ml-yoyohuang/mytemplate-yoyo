const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const path = require('path');
const CONFIG = require('./config.js');
const ROOT = path.resolve(__dirname,'../dist');

const sourcemapsHandler = () => {
    if (!CONFIG.DEV_MODE)
        return gutil.noop();
    return sourcemaps.write( ROOT + '/_maps', {
        sourceMappingURL: function (file) {
            return 'http://localhost:3000/_maps/' + file.relative + '.map';
        }
    });
}
module.exports = sourcemapsHandler;