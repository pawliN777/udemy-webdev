const userPoints = 999;
const userLevel = userPoints >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const userColor = null;
const standardColor = userColor || 'Preta';

console.log(userLevel, standardColor);

//if (userPoints >= 1000) {
//    console.log('Usuário VIP.');
//} else {
//    console.log('Usuário normal.');
//}
//
