function sum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser números.');
    }
    return x + y;
}

try {
    console.log(sum(1, 2));
    console.log(sum('1', 1));
} catch (error) {
    console.log(error);
}