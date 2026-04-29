import { imcCalc, imcDiag } from './logic.js';
import { setElement, removeClass, getNumber, setClass } from './helpers.js';
import { toggleTheme } from './theme.js';

const imcForm = document.querySelector('#form-imc');

imcForm.addEventListener('submit', function (e) {
    e.preventDefault();

    setElement('#input-error', '');
    setClass('#show-section', 'd-none');
    setClass('#input-error', 'd-none');

    const weight = getNumber('#input-weight');
    const height = getNumber('#input-height');

    if (!weight) { 
        setElement('#input-error', '<p>Peso inválido</p>');
        removeClass('#input-error', 'd-none');
        return; 
    }
    
    if (!height) { 
        setElement('#input-error', '<p>Altura inválida</p>'); 
        removeClass('#input-error', 'd-none');
        return; 
    }

    const imc = imcCalc(weight, height);
    const diag = imcDiag(imc);

    setElement('#show-result', `<p>${imc.toFixed(2)} (${diag})</p>`);
    setClass('#show-result', 'text-center');
    removeClass('#show-section', 'd-none');
});
  
const btn = document.querySelector('#theme-toggle');
    
if (btn) {
    btn.addEventListener('click', toggleTheme);
}