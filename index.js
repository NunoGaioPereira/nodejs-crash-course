const Person = require('./person'); // Common JS
// import Person from './person'; // doesn't exist in Node, in Feb 6 2019 -> check!!! ES6

const person1 = new Person('Bob', 20);
person1.greeting();