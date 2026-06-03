function Product(nametag, price, stock) {
  this.nametag = nametag;
  this.price = price;

  let privateStock =  stock;

  Object.defineProperty(this, 'stock', {
    enumerable: true,
    configurable: true,

    get: function() {
      return privateStock;
    },
    set: function(val) {
      if (typeof val !== 'number') {
        throw new TypeError('O valor não é um número');
        return;
      }
      privateStock = val;
    },
  });
}

function createProduct (name) {
  return {
    get name() {
      return name;
    },
    set name(val) {
      val = val.replace('preto', '');
      name = val;
    } 
  };
}

const p1 = new Product('Camiseta', 60, 5);
p1.stock = 10;
console.log(p1.stock);

const p2 = createProduct('Bermuda');
p2.name = 'Casaco preto';
console.log(p2.name);
