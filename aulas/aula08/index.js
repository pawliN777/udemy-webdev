const userName = "Paulo Brendhon";
let userAge = 22;
let userWeight = 95;
let userHeight = 1.8;
const userBirth = "17/12/2003";
const imc = userWeight / (userHeight * userHeight);

console.log(`
  Usuário     ${userName}
  Idade       ${userAge} anos
  Peso        ${userWeight}kg
  Altura      ${userHeight}m
  Aniversário ${userBirth}
  IMC         ${imc.toFixed(2)}
`);
