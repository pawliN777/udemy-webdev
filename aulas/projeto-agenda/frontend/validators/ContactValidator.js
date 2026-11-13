import validator from 'validator';

export default class ContactValidator {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;

    const forenameInput = el.querySelector('input[name="forename"]');
    const emailInput = el.querySelector('input[name="email"]');
    const phoneInput = el.querySelector('input[name="phone"]');

    let error = false;

    if (!forenameInput.value) {
      alert('A name is mandatory');
      error = true;
    }

    if (emailInput.value && !validator.isEmail(emailInput.value)) {
      alert('Invalid Email');
      error = true;
    }

    if (!emailInput.value && !phoneInput.value) {
      alert('One way of contact is required at least.');
      error - true;
    }

    if (!error) el.submit();
  }
}
