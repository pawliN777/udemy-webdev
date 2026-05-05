function func() {

    let total = 0;

    for (let argument of arguments) {
        total += argument;
    }

    console.log(total);
}

func(1, 2, 3, 4, 5, 6, 7);

function func2(a, b, c, d, e, f) {

    console.log(a, b, c, d, e, f);
}

func2(1, 2, 3);

function func3(a, b = 2, c = 4) {

    console.log(a + b + c);
}

func3(2, undefined, 2);

function func4([v1, v2, v3]) {

    console.log(v1, v2, v3);
}

let list = ['Paulo Brendhon', 'Oliveira', 22];

func4(list);

function count(operator, acumulator, ...numbers) {

    for (let number of numbers) {
        if (operator === '+') acumulator += number;
        if (operator === '-') acumulator -= number;
        if (operator === '/') acumulator /= number;
        if (operator === '*') acumulator *= number;
    }

    console.log(acumulator);
}

count('+', 0, 20, 30, 40, 50);

const count2 = (...args) => {
    console.log(operator, acumulator, numbers);
};

count2('+', 1, 20, 30, 40, 50);