
function getMax(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

const writeMax = (x, y) => x > y ? x : y;

console.log(getMax(10, 50));
console.log(writeMax(10, 50));