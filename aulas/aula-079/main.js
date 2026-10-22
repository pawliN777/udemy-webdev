const speak = {
  speak() {
    console.log(`${this.username} está falando.`);
  },
};

const eat = {
  eat() {
    console.log(`${this.username} está comendo.`);
  },
};

const drink = {
  drink() {
    console.log(`${this.username} está bebendo.`);
  },
};

const personPrototype = { ...speak, ...eat, ...drink };

function person(username, lastname) {
  return Object.create(personPrototype, {
    username: { value: username },
    lastname: { value: lastname },
  });
}

const p1 = person('Paulo', 'Saturno');
const p2 = person('Brendhon', 'Oliveira');

p1.speak();
p2.eat();
p1.drink();
