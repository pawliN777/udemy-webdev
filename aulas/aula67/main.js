const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]; 

const total = numbers.reduce((acum, val) => acum += val); 

console.log(total);

const people = [
  {name: 'Paulo', age: 22 },
  {name: 'Ethan', age: 17 },
  {name: 'Chris', age: 55 },
  {name: 'Sophien', age: 18 },
  {name: 'Giulia', age: 37 },
  {name: 'Lyah', age: 32 }
];

const older = people.reduce((acum, val) => acum.age > val.age ? acum : val);
console.log(older);