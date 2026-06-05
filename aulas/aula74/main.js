function User(username, lastname) {
  this.username = username;
  this.lastname = lastname;
}

User.prototype.completeName = function() {
  return this.username + ' ' + this.lastname
}; 

const user1 = new User('Paulo', 'Saturno');
const user2 = new User('Brendhon', 'Oliveira');

console.log(user1.completeName());
console.dir(user2);