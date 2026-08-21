import mult, { username as user, lastname, age, sum, Person } from './modulo1.js';

const username = 'Saturno';

console.log(username, user, lastname, age);
console.log(sum(5, 5));

const p1 = new Person('Brendhon', 'de Oliveira');

console.log(p1.fullName);
console.log(mult(5, 10));
