class Person {
  constructor(username, lastname) {
    this.username = username;
    this.lastname = lastname;
  }

  speak() {
    console.log(`${this.username} está falando`);
  }

  eat() {
    console.log(`${this.username} está comendo`);
  }

  drink() {
    console.log(`${this.username} está bebendo`);
  }
}

const p1 = new Person('Paulo', 'Saturno');
const p2 = new Person('Brendhon', 'Oliveira');
const p3 = new Person('Fulano', 'Saturno');
const p4 = new Person('Ciclano', 'Saturno');
console.log(p1);

p1.speak();
p1.eat();
p1.drink();

p4.speak();
p3.drink();
p2.eat();