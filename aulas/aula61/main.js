function* gen1() {
  // código qualquer
  yield 'val1';
  // código qualquer
  yield 'val2';
  // código qualquer
  yield 'val3';
}

function* gen2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const g2 = gen2();
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)

function* gen3() {
  yield 1;
  yield 2;
  yield 3;
}

function* gen4() {
  yield* gen3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = gen4();
for (let val of g4) {
  console.log(val);
}

function* gen5() {
  yield function() {
    console.log('Vim do y1');
  }

  return function() {
    console.log('vim do return');
  }

  // possível código

  yield function() {
    console.log('vim do y2');
  }
}

const g5 = gen5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();