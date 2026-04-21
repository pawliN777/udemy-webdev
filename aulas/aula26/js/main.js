import { imcCalc, imcDiag } from './logic.js';
import { setElement, removeClass, getNumber, setClass } from './helpers.js';

const imcForm = document.querySelector('#form-imc');

imcForm.addEventListener('submit', function (e) {
    e.preventDefault();

    setElement('#input-error', '');
    removeClass('#input-error', 'error');
    setClass('#show-section', 'hidden');

    const weight = getNumber('#input-weight');
    const height = getNumber('#input-height');

    if (!weight) { 
        setElement('#input-error', '<p>Peso inválido</p>');
        setClass('#input-error', 'error');
        return; 
    }
    
    if (!height) { 
        setElement('#input-error', '<p>Altura inválida</p>'); 
        setClass('#input-error', 'error');
        return; 
    }

    const imc = imcCalc(weight, height);
    const diag = imcDiag(imc);

    setElement('#show-result', `<p>${imc.toFixed(2)} (${diag})</p>`);
    removeClass('#show-section', 'hidden');
});