import { Calculator } from './Calculator.js';
import { mouseController, keyboardController, inputController } from './controller.js';
import { toggleTheme } from './theme.js';
  
const btn = document.querySelector('#theme-toggle');
    
if (btn) {
    btn.addEventListener('click', toggleTheme);
}

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

display.addEventListener('input', (e) => {
  inputController(e);
});