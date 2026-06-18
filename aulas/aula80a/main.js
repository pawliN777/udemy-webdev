const users = [
  { id: 3, username: 'Brendhon' },
  { id: 2, username: 'Paulo' },
  { id: 1, username: 'Saturno' },
];

// const newUsers = {};

// for (const user of users) {
//   const { id } = user;
//   newUsers[id] = { ...user };  
// }

const newUsers = new Map();

for (const user of users) {
  const { id } = user;
  newUsers.set(id, {...user});  
}

// for (const key of newUsers.keys()) {
//   console.log(key);
// }

newUsers.delete(2);

console.log(newUsers);
console.log(newUsers.get(2));