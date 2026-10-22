module.exports = class Dog {
  constructor (dogname) {
    this.dogname = dogname;
  }

  bark() {
    console.log(`O cachorro ${this.dogname} latiu!`);
  }
};