function userName(name = 'Usuário') {
    return `Olá, ${name}!`;
}

const username = userName();
console.log(username);

function sum(x = 0, y = 0) {
    const result = x + y;
    return result;
}

console.log(sum(10, 5));

const root = n => n ** 0.5;

console.log(root(9));