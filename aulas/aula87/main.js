function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg, timing) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject(false);

    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise');
    }, timing);
  });
}

// Promise.all Promise.race Promise.resolve Promise.reject

function downloadPage() {
  const inCache = true;

  if (inCache) {
    return Promise.reject('Página em cache');
  } else {
    return waitThere('Página baixada', 3000);
  }
}

downloadPage()
  .then((pageData) => {
    console.log(pageData);
  })
  .catch((e) => console.log('ERRO', e));
