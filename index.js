const person = require('./person');
console.log(person);
console.log(person.name);

const Person = require('./person');

const person1 = new Person('Bob', 20);
person1.greeting();