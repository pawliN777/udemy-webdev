/* 

Entre 00h e 11h - bom dia
Entre 12h e 17h - boa tarde
Entre 18h e 23h - boa noite

'if' pode ser usado sozinho
Sempre que utilizo a palavra 'else', eu preciso de um 'if' antes
Eu posso ter vários else 'ifs' na checagem
Só posso ter um 'else' na checagem
Podemos usar condições sem 'else if', utilizando apenas 'if' e 'else'

*/


const hour = 25;

if (hour >= 0 && hour <= 12) {
    console.log('Bom dia!');
} else if (hour >= 12 && hour <= 17) {
    console.log('Boa tarde!');
} else if (hour >= 18 && hour <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Hora não existente.');
}