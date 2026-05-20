import { Calculator } from './Calculator.js';
import { mouseController, keyboardController } from './controller.js';

const card = document.querySelector('[data-card]');
const display = card.querySelector('[data-display]');

display.value = 0;
display.focus();

const calculator = new Calculator(display);

card.addEventListener('click', (e) => {
  mouseController(e, calculator);
});

document.addEventListener('keydown', (e) => {
  keyboardController(e, calculator);
});
