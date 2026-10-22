class Device {
  constructor(nameItem) {
    this.nameItem = nameItem;
    this.isOn = false;
  }

  turnOn() {
    if (this.isOn) {
      console.log(`O dispositivo ${this.nameItem} já está ligado.`);
      return;
    }

    this.isOn = true;
  }

  turnOff() {
    if (!this.isOn) {
      console.log(`O dispositivo ${this.nameItem} já está desligado`);
      return;
    }

    this.isOn = false;
  }
}

class Smartphone extends Device {
  constructor(nameItem, color, model) {
    super(nameItem);
    this.color = color;
    this.model = model;
  }
}

class Tablet extends Device {
  constructor(nameItem, hasWifi) {
    super(nameItem);
    this.hasWifi = hasWifi;
  }

  turnOn() {
    console.log('Você alterou o método ligar');
  }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);

const t1 = new Tablet('Apple', true);
console.log(t1);
t1.turnOn();
console.log(t1);