const number = 10;

if (number <= 10) {
  console.log('O número é menor ou igual a 10');
}

if (number >= 0 && number <= 5) {
    console.log('O número está entre 0 e 5');
} else if (number >= 6 && number <= 8) {
  console.log('O número NÃO está entre 0 e 5');
} else if (number >= 9 && number <= 11) {
  console.log('O número está entre 9 e 11');
} else {
  console.log('O número não está entre 0 e 11');
}