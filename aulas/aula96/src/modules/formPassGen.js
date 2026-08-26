import passGen from './generators.js';

const generatedPassword = document.querySelector('#generated-password');
const size = document.querySelector('#size');
const uppers = document.querySelector('#uppers');
const lowers = document.querySelector('#lowers');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');
const generateButton = document.querySelector('#generate-button');

export default () => {
  generateButton.addEventListener('click', () => {
    generatedPassword.classList = 'card-outline font-center';
    generatedPassword.innerHTML = generate();
  });
};

const generate = () => {
  const password = passGen(
    size.value,
    uppers.checked,
    lowers.checked,
    numbers.checked,
    symbols.checked
  );

  return password || 'Selecione alguma opção';
};