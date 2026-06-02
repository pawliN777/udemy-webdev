const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const doubleNumbers = numbers.map(val => val * 2);

console.log(doubleNumbers);

const people = [
  {name: 'Paulo', age: 22 },
  {name: 'Ethan', age: 17 },
  {name: 'Chris', age: 55 },
  {name: 'Sophien', age: 18 },
  {name: 'Giulia', age: 37 },
  {name: 'Lyah', age: 32 }
];

const names = people.map(obj => obj.name);
console.log(names);

const ages = people.map(obj => ({ age: obj.age }));
console.log(ages);

const ids = people.map((obj, index) => { 
  const newObj = {...obj};
  newObj.id = index;
  return newObj;
});

console.log(people);
console.log(ids);