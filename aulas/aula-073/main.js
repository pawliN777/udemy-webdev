const product = {name: 'Mug', price: 39.99};
const something = {...product, material: 'Porcelain'};

something.name = 'Keychain';
something.price = 4.99;

console.log(product);
console.log(something);
