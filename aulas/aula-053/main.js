function returnFunc(name) {
    return function() {
        return name;
    };
}

const func = returnFunc('Paulo');
const func2 = returnFunc('Brendhon');

console.log(func);
console.log(func2);