const user = {
    name: 'Paulo Brendhon',
    age: 22
};

const b = {...user};

user.name = 'Oliveira';

console.log(user);
console.log(b);