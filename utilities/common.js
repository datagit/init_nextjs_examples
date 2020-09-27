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

// Object vs array
let accessArrayObject = () => {
    let myObject = {
        name: "NAME1",
        age: 100,
    };
    for (let key in myObject) {
        console.log(key); // logs keys in myObject
        console.log(myObject[key]); // logs values in myObject
    }
}

let addItemInArrayObject = () => {
    let products = [
        { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
        { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    ];

    let product = { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' };
    console.log(
        "action",
        [...products, product]
    );
}

let deleteItemInArrayObject = (id) => {
    let products = [
        { id: 1, category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
        { id: 2, category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    ];
    console.log(
        products.filter(product => product.id !== id)
    );
}

let setKeyAndValueInObject = (key, value) => {
    let product = { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' };
    console.log(
        { ...product, [key]: value }
    )
}

let accessSomeThingInObject = () => {
    let product = { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' };
    let { name, price } = product;
    console.log(
        { name, price }
    );
}

let accessItemInArray = () => {
    let names = ['Mohtashim', 'Kannan', 'Kiran']
    let [n1, n2, n3] = names;
    console.log(n1);
    console.log(n2);
    console.log(n3);
}

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
        console.log(color(title));
        console.log(content);
    } else {
        console.log(title);
        console.log(content);
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
    setKeyAndValueInObject: setKeyAndValueInObject,
    deleteItemInArrayObject: deleteItemInArrayObject,
    addItemInArrayObject: addItemInArrayObject,
    accessArrayObject: accessArrayObject,
    accessSomeThingInObject: accessSomeThingInObject,
    accessItemInArray: accessItemInArray,
    // class
    Cat: Cat,
};