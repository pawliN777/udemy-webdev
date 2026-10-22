function randomTime(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg, time, cb) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject('O valor não é uma string.');

    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

waitThere('Um', randomTime(1, 3))
  .then((answer) => {
    console.log(answer);
    return waitThere(2, randomTime(1, 3));
  })
  .then((answer) => {
    console.log(answer);
    return waitThere('Três', randomTime(1, 3));
  })
  .then((answer) => {
    console.log(answer);
  })
  .catch((e) => {
    console.log('ERRO:', e);
  });

console.log('Isso será exibido antes de qualquer promise.');
