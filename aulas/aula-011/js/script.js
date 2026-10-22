import { isName, toCapitalize } from './userUtils.js';

alert('Bem-vindo ao meu site!');

let userName = prompt("Qual o seu nome?");
userName = toCapitalize(userName);

while (isName(userName) === false) {
    alert('O seu nome não pode ser vazio ou conter números!');
    userName = prompt('Por favor, digite o seu nome novamente:');
}

alert(`O seu nome é ${userName}`);

if (confirm('Deseja alterar o seu nome?') === true) {
    let newUserName = prompt("Qual o seu novo nome?");
    while (isName(newUserName) === false || toCapitalize(newUserName) === toCapitalize(userName)) {
        alert('O seu nome não pode ser vazio, conter números ou ser igual ao anterior!');
        newUserName = prompt('Por favor, digite o seu novo nome novamente:');
    }
    userName = toCapitalize(newUserName);
    alert(`Você alterou seu nome para ${userName}!`);
}
else {
    alert(`Olá, ${userName}, o seu nome continua o mesmo!`);
}
