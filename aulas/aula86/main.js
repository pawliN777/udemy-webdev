function waitThere(msg, time) {
  setTimeout(() => {
    console.log(msg);
  }, time);
}

waitThere('Olá', 1000);