// filter sempre retorna um array com a mesma quantidade de elementos ou menos.

const numbers = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

const fNumbers = numbers.filter(val => val > 10);

console.log(fNumbers);

const people = [
  {name: 'Paulo', age: 22 },
  {name: 'Ethan', age: 17 },
  {name: 'Chris', age: 55 },
  {name: 'Sophien', age: 18 },
  {name: 'Giulia', age: 37 },
  {name: 'Lyah', age: 32 }
];

const peopleWithBigNames = people.filter(obj => obj.name.length >= 6);
const olderPeople = people.filter(obj => obj.age >= 50);
const peopleLastA = people.filter(obj => obj.name.toLowerCase().endsWith('a'));

console.log(peopleWithBigNames);
console.log(olderPeople);
console.log(peopleLastA);