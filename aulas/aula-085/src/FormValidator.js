import { CpfValidator } from './CpfValidator.js';

export class FormValidator {
  isValidFields(formField, formCpf, formUser, formPassword, formPasswordAgain) {
    let valid = true;

    for (let errorText of formField.querySelectorAll('.text-danger')) {
      errorText.remove();
    }

    for (let field of formField.querySelectorAll('.form-control')) {
      const placeholderText = field.placeholder;

      if (!field.value) {
        this.createError(
          field,
          `O campo "${placeholderText}" não pode estar vazio`,
        );
        valid = false;
      }
    }

    if (formCpf) {
      const cpf = new CpfValidator(formCpf.value);

      if (cpf.valid() === false) {
        this.createError(formCpf, 'O CPF é inválido');
        valid = false;
      }
    }

    if (formUser) {
      const user = formUser.value;

      if (!/^[a-zA-Z0-9]+$/g.test(user)) {
        this.createError(formUser, 'O usuário deve conter apenas números e letras');
        valid = false;
      }

      if (user.length < 3 || user.length > 12) {
        this.createError(formUser, 'O usuário deve conter entre 3 e 12 caracteres');
        valid = false;
      }
    }

    if (formPassword) {
      const password = formPassword.value.length;

      if (password < 6 || password > 12) {
        this.createError(formPassword, 'A senha deve conter entre 6 e 12 caracteres');
        valid = false;
      }
    }

    if (formPasswordAgain) {
      const passwordAgain = formPasswordAgain.value;
      const password = formPassword.value;

      if (passwordAgain !== password) {
        this.createError(formPasswordAgain, 'A senha não é igual a primeira');
        valid = false;
      }
    }

    return valid;
  }

  createError(field, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('text-danger', 'text-xs', 'text-center');
    field.insertAdjacentElement('afterend', div);
  }
}
