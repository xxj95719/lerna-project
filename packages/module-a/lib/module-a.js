'use strict';

const moduleB = require('module-b');
module.exports = moduleA;

function moduleA () {
    // TODO
    console.log(moduleB.sayHello());
}
