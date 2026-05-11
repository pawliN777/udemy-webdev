import { toggleTheme } from './theme.js';
  
const btn = document.querySelector('#theme-toggle');
    
if (btn) {
    btn.addEventListener('click', toggleTheme);
}

const display = document.querySelector('#display');

let input = [];

function format(param) {
    return param.join('');
}

function showOnDisplay(param) {
    display.textContent = param;
}

function unformat(param) {
    let newInput = String(param);

    newInput = newInput.split('');

    return input = newInput;
}

function calculate(param) {
    try {
        const expression = format(param);
        const calc = new Function('return ' + expression);
        const result = calc();
        const unformattedResult = unformat(result);

        return format(unformattedResult);
    } catch (e) {
        return 'Inválido';
    }
}

document.addEventListener('click', function(e) {
    const el = e.target.closest('button');

    if (el.id === 'btn-clear') input = [];
    if (el.id === 'btn-backspace') input.pop();
    if (el.id === 'btn-parenthesis-opened') input.push('(');
    if (el.id === 'btn-parenthesis-closed') input.push(')');
    if (el.id === 'btn-seven') input.push(7);
    if (el.id === 'btn-eight') input.push(8);
    if (el.id === 'btn-nine') input.push(9);
    if (el.id === 'btn-divide') input.push('/');
    if (el.id === 'btn-four') input.push(4);
    if (el.id === 'btn-five') input.push(5);
    if (el.id === 'btn-six') input.push(6);
    if (el.id === 'btn-times') input.push('*');
    if (el.id === 'btn-one') input.push(1);
    if (el.id === 'btn-two') input.push(2);
    if (el.id === 'btn-three') input.push(3);
    if (el.id === 'btn-plus') input.push('+');
    if (el.id === 'btn-dot') input.push('.');
    if (el.id === 'btn-zero') input.push(0);
    if (el.id === 'btn-minus') input.push('-');

    showOnDisplay(format(input));

    if (el.id === 'btn-equal') {
        const result = calculate(input);

        if (result === 'Infinity' || isNaN(result) || result === 'undefined') {
            return showOnDisplay('Inválido');
        } else {
            return showOnDisplay(result);
        }
    } 

});