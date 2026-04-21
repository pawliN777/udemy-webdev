let a = '1';
let b = '2';
let c = '3';

const tempA = a;

a = b; // Certo, retorna 2
b = c; // Certo, retorna 3
c = tempA; // Errado, retorna 2. Deveria retonar 1. Fica correto com o tempA

// o jeito mais moderno seria fazer listas:
// [a, b, c] = [b, c, a];

console.log(a, b, c);