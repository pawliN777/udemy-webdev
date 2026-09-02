function promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Sou a promise');
      resolve();
    }, 200);
  });
}

export default async function () {
  await promise();
  console.log('Terminou');
}