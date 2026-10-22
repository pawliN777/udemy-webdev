const _speed = Symbol('Velocidade');

class Car {
  constructor(brand) {
    this.brand = brand;
    this[_speed] = 0;
  }

  set speed(val) {
    if (typeof val !== 'number') return;
    if (val >= 100 || val <= 0) return;
    this[_speed] = val;
  }

  get speed() {
    return this[_speed];
  }

  accelerate() {
    if (this[_speed] >= 100) return;
    this[_speed]++;
  }

  stop() {
    if (this[_speed] <= 100) return;
    this[_speed]--;
  }
}

const c1 = new Car('Fusca');

for (let i = 0; i <= 200; i++) {
  c1.accelerate();
  console.log(c1);
}

c1.speed = 2000;
console.log(c1.speed);