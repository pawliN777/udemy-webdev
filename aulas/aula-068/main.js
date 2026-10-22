const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pairNumbers = numbers
  .filter(val => val % 2 === 0)
  .map(val => val * 2)
  .reduce((acum, val) => acum += val);

console.log(pairNumbers);