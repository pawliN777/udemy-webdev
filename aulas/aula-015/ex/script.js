const number = Number(prompt('Escolha um número'));

const titleNumber = document.querySelector('#title-number');
const text = document.querySelector('#text');

titleNumber.innerHTML = number;
text.innerHTML = '';
text.innerHTML += `<p>Raiz quadrada: ${number ** 0.5}</p>`;
text.innerHTML += `<p>${number} é inteiro: ${Number.isInteger(number)}</p>`;
text.innerHTML += `<p>${number} é NaN: ${isNaN(number)}</p>`;
text.innerHTML += `<p>Arredondado para baixo: ${Math.floor(number)}</p>`;
text.innerHTML += `<p>Arredondado para cima: ${Math.ceil(number)}</p>`;
text.innerHTML += `<p>Com duas casas decimais: ${number.toFixed(2)}</p>`;
