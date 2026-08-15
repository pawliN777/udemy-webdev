function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg, timing) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('CAI NO ERRO');
        return;
      }

      resolve(msg.toUpperCase() + ' - Passei na promise');
      return;
    }, timing);
  });
}

// waitThere('Fase 1', rand())
//   .then((val) => {
//     console.log(val);
//     return waitThere('Fase 2', rand());
//   })
//   .then((fase) => {
//     console.log(fase);
//     return waitThere('Fase 3', rand());
//   })
//   .then((fase) => {
//     console.log(fase);
//     return fase;
//   })
//   .then((fase) => {
//     console.log('Terminamos na fase: ', fase);
//   })
//   .catch((e) => console.log(e));

async function exec() {
  try {
    const fase1 = waitThere('Fase 1', rand());
    console.log(fase1);

    setTimeout(function() {
      console.log('Essa promise estava pendente', fase1);
    }, 1100);

    const fase2 = await waitThere(2, rand());
    console.log(fase2);

    const fase3 = await waitThere('Fase 3', rand());
    console.log(fase3);

    console.log('Terminamos na fase: ', fase3);
  } catch(e) {
    console.log(e)
  }
}

// exec();

const test2 = waitThere('Qualquer coisa', 5000);
console.log(test2);

// pending -> pendente
// fullfilled -> resolvida
// reject -> reject
