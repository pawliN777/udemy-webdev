// const names = ['Paulo', 'Brendhon', 'Henriques'];
const names = new Array('Paulo', 'Brendhon', 'Henriques');
const newie = [...names];
const removed = names.pop();

names[2] = 'Oliveira';

newie.pop();

console.log(names);
console.log(newie);
console.log(removed);