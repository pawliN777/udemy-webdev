const person = {
    username: 'Brendhon',
    lastname: 'Oliveira',
    age: 22,
    address: {
        street: 'Rua Genésio da Rocha',
        number: 3
    }
};

const { username: name, lastname, age} = person;

console.log(name, lastname, age);