/**
 * - define in module
 * - export out side module
 * - require(using out side module): const common = require('../utilities/common');
 */
// private constant and methods
const IS_PRINT_CONSOLE_LOG = true;
const TRACE = 1;
const DEBUG = 2;
const INFO = 3;
const WARN = 4;
const ERROR = 5;
// define method
let sum = (...args) => {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
};

let printConsoleLog = (content, title, logLevel = null) => {
    if (!IS_PRINT_CONSOLE_LOG) {
        return;
    }
    const chalk = require('chalk');
    let color = null;
    switch (logLevel) {
        case TRACE:
            color = chalk.keyword('pink');
            break;
        case DEBUG:
            color = chalk.keyword('green');
            break;
        case INFO:
            color = chalk.keyword('yellow');
            break;
        case WARN:
            color = chalk.keyword('orange');
            break;
        case ERROR:
            color = chalk.keyword('red');
            break;
    }
    if (color != null) {
        console.log(color(title), content);
    } else {
        console.log(title, content);
    }
}

// define class
class Cat {
    sound = 'Meowww';
    constructor(sound = null) {
        if (sound != null) {
            this.sound = sound;
        }
    }
    makeSound() {
        return this.sound;
    }
}

module.exports = {
    // public 
    // constants
    IS_PRINT_CONSOLE_LOG: IS_PRINT_CONSOLE_LOG,
    TRACE: TRACE,
    DEBUG: DEBUG,
    INFO: INFO,
    WARN: WARN,
    ERROR: ERROR,
    // functions
    sum: sum,
    printConsoleLog: printConsoleLog,
    // class
    Cat: Cat,
};