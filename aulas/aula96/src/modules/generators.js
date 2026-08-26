const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const upperGen = () => String.fromCharCode(rand(65, 91));
const lowerGen = () => String.fromCharCode(rand(97, 123));
const numberGen = () => String.fromCharCode(rand(48, 58));

const symbols = ',.;~^[]{}!@#$%&*()-=+';

const symbolGen = () => symbols[rand(0, symbols.length)];

export default function passGen(qtd, uppers, lowers, numbers, symbols) {
  const passArray = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    uppers && passArray.push(upperGen());
    lowers && passArray.push(lowerGen());
    numbers && passArray.push(numberGen());
    symbols && passArray.push(symbolGen());
  }

  return passArray.join('').slice(0, qtd);
}
