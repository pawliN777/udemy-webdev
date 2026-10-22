// const username = 'Paulo';
// const lastname = 'Saturno';

// const sayName = () => username + ' ' + lastname;

// // module.exports.username = username;
// // module.exports.lastname = lastname;
// // module.exports.sayName = sayName;

// exports.username = username;
// exports.lastname = lastname;
// exports.sayName = sayName;

// this.anything = 'Qualquer coisa';

class Person {
  constructor(username) {
    this.username = username;
  }
}

const username = 'Paulo';
const lastname = 'Saturno';

module.exports = {
  username, lastname, Person
};