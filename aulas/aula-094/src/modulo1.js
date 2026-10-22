export { username, lastname, age, sum };

const username = 'Paulo';
const lastname = 'Brendhon';
const age = 22;

function sum(x, y) {
  return x + y;
}


export class Person {
  constructor(username, lastname) {
    this.username = username;
    this.lastname = lastname;
  }

  get fullName() {
    return `${this.username} ${this.lastname}`;
  }
}

export default (x, y) => x * y;
