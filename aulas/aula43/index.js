function fizzBuzz (x) {
    if (!Number.isFinite(x)) return 'O argumento não é um número';
    if (x % 3 === 0 && x % 5 === 0) return 'FizzBuzz';
    if (x % 3 === 0) return 'Fizz';
    if (x % 5 === 0) return 'Buzz';
    return x;
}

for (let i = 0; i <= 100; i++) { console.log(i, fizzBuzz(i)); }