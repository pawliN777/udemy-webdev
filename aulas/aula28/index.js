/*
const date = new Date();

console.log(`Dia ${date.getDate()}`)
console.log(`Mês ${date.getMonth()}`)
console.log(`Ano ${date.getFullYear()}`)
console.log(`Hora ${date.getHours()}`)
console.log(`Min ${date.getMinutes()}`)
console.log(`Seg ${date.getSeconds()}`)
console.log(`ms ${date.getMilliseconds()}`)
console.log(`Dia da semana ${date.getDay()}`)
console.log(date.toString());
*/

function formatDate() {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
}




console.log(formatDate());