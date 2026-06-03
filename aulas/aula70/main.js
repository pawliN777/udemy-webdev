const user = {
  username: 'Brendhon',
  lastname: 'Oliveira',
};

const key = 'username';

console.log(user[key]);
console.log(user.lastname);

const user2 = new Object();
user2.username = 'Paulo';
user2.lastname = 'Saturno';
user2.age = 22;

user2.saySomething = () => `${this.username} está falando alguma coisa!`;

user2.getBirthday = () => {
  const date = new Date();
  return date.getFullYear() - this.age;
};

console.log(user2.saySomething());
console.log(user2.getBirthday());

for (let key in user2) {
  console.log(key);
}

const createUser = (username, lastname) => {
  return {
    username,
    lastname,
    completeName() {
      return `${this.username} ${this.lastname}`;
    },
  };
}

const user3 = createUser('Brendhon', 'Oliveira');
console.log(user3.completeName());

const User = (username, lastname) => {
  this.username = username;
  this.lastname = lastname;
};

const user4 = new User('Paulo', 'Saturno');
 