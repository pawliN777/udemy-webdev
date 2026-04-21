let number1 = 9.49;
let numberFloor = Math.floor(number1);
let numberCeil = Math.ceil(number1);
let numberRound = Math.round(number1);

console.log(numberFloor); // areedonda pra baixo
console.log(numberCeil); // arredonda pra cima
console.log(numberRound); // arredonda pra cima se acima ou igual a metade ou pra baixo se menor que a metade
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));

const random = Math.round(Math.random() * (10 - 5) + 5);
console.log(random);

console.log(Math.pow(2, 10));
console.log(2 ** 10);

let number2 = 9;
console.log(number2 ** 0.5);

console.log(100 / 0); // retorna infinity e bizarramente é true