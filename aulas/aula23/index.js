/* 

Falsy



False

0, string vazias ''
null, undefined
NaN

*/
/*
const userColor = null;
const standardColor = userColor || 'Preto';

console.log(standardColor);
*/

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);