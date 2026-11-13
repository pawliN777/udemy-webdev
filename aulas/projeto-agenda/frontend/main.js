import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';

import './assets/css/style.css';

// Account Validator

import './validators/AccountValidator.js';
import AccountValidator from './validators/AccountValidator.js';

const registerValidator = new AccountValidator('.form-register');
const loginValidator = new AccountValidator('.form-login');

registerValidator.init();
loginValidator.init();

// Contact Validator

import './validators/ContactValidator.js';
import ContactValidator from './validators/ContactValidator.js';

const contactValidator = new ContactValidator('.form-contact');

contactValidator.init();
