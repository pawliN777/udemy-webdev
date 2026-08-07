import { FormValidator } from './FormValidator.js';

const formField = document.querySelector('#form-field');
const formCpf = document.querySelector('#form-cpf');
const formUser = document.querySelector('#form-user');
const formPassword = document.querySelector('#form-password');
const formPasswordAgain = document.querySelector('#form-password-again');

const formValidator = new FormValidator();

formField.addEventListener('submit', (e) => {
  e.preventDefault();

  const validFields = formValidator.isValidFields(
    formField,
    formCpf,
    formUser,
    formPassword,
    formPasswordAgain,
  );

  if (validFields === true) {
    alert('Formulário enviado');
  }
});
