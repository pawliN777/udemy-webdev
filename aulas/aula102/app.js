const path = require('path');
const dir = path.resolve(__dirname, 'test.json');
const write = require('./modules/write');
const read = require('./modules/read');

const people = [
  { username: 'Paulo' },
  { username: 'João' },
  { username: 'Maria' },
  { username: 'Antônio' },
];

const json = JSON.stringify(people, '', 2);

write(dir, json);

async function readFile(dir) {
  const data = await read(dir);
  showData(data);
}

function showData(data) {
  data = JSON.parse(data);

  data.forEach(val => console.log(val));
}

readFile(dir);