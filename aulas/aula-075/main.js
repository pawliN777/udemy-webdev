// // new Object -> Object.prototype

// const objA = {
//   keyA: 'A'
// };

// const objB = {
//   keyB: 'B'
// };

// const objC = new Object();
// objC.keyC = 'C';

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);

// console.log(objA.keyA);

function Product(nametag, price) {
  this.nametag = nametag;
  this.price = price;
}

Product.prototype.discount = function (percent) {
  this.price = this.price - (this.price * (percent / 100));
};

Product.prototype.expanse = function (percent) {
  this.price = this.price + (this.price * (percent / 100));
};

const p1 = new Product('Camiseta', 50);

const p2 = {
  nametag: 'Caneca',
  price: 15
};

Object.setPrototypeOf(p2, Product.prototype);

p2.expanse(10);

const p3 = Object.create(Product.prototype);

console.log(p1);
console.log(p2);