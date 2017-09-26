const chalk = require('chalk');
const gutil = require('gulp-util');
const DEV_MODE = gutil.env._[0] !== 'p';

const devStr = `
    ########  ######## ##     ##
    ##     ## ##       ##     ##
    ##     ## ##       ##     ##
    ##     ## ######   ##     ##
    ##     ## ##        ##   ##
    ##     ## ##         ## ##
    ########  ########    ###
    `;
const proStr = `
    ########  ########   #######
    ##     ## ##     ## ##     ##
    ##     ## ##     ## ##     ##
    ########  ########  ##     ##
    ##        ##   ##   ##     ##
    ##        ##    ##  ##     ##
    ##        ##     ##  #######   `;
function logDevelopment(str) {
    console.log(chalk.black.bgYellow(str));
}
function logProduction(str) {
    console.log(chalk.bgCyan.white.bold(str));
}

module.exports = {
    DEV_MODE: DEV_MODE,
    /*setDevMode(mode) {
        this.DEV_MODE = mode;
        this.log(this.DEV_MODE ? devStr : proStr);
    },*/
    log(value) {
        if (this.DEV_MODE) {
            logDevelopment(value);
        } else {
            logProduction(value);
        }
    },
};
