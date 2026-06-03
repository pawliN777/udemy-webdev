function Product (nametag, price, stock) {
  this.nametag = nametag;
  this.price = price;
  this.stock = stock;

  Object.defineProperty(this, 'stock', {
    enumerable: true, // mostra a chave
    value: stock, // valor
    writable: true, // alterável
    configurable: true, // configurável
  });
}

const p1 = new Product('Camiseta', 59.90, 3);
console.log(Object.keys(p1));