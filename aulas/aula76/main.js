// Produto -> aumento e desconto
// Camisa = cor, caneca = material

function Product(nametag, price) {
  this.nametag = nametag;
  this.price = price;
}

Product.prototype.expanse = function (val) {
  this.price = +val;
};

Product.prototype.discount = function (val) {
  this.price = -val;
};

function TShirt(nametag, price, color) {
  Product.call(this, nametag, price);
}

TShirt.prototype = Object.create(Product.prototype);
TShirt.prototype.constructor = TShirt;

TShirt.prototype.expanse = function (percent) {
  this.price = this.price + this.price * (percent / 100);
};

function Mug(nametag, price, material, stock) {
  Product.call(this, nametag, price);
  this.material = material;

  Object.defineProperty(this, 'stock', {
    enumarable: true,
    configurable: false,
    get: function () {
      return stock;
    },
    set: function (val) {
      if (typeof val !== 'number') return;
      stock = val;
    },
  });
}

Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

const product = new Product('Gen', 111);
const tShirt = new TShirt('Regata', 7.5, 'Preta');
const mug = new Mug('Caneca', 13, 'Plástico', 5);

mug.stock = 'wd';

console.log(mug, mug.stock);
console.log(tShirt);
console.log(product);
