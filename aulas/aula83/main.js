class remoteControl {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  increaseVolume() {
    this.volume += 2;
  }

  decreaseVolume() {
    this.volume -= 2;
  }

  static changeBatteries() {
    console.log('Pilhas trocadas');
  }
}

const ctrl1 = new remoteControl('LG');

ctrl1.increaseVolume();
ctrl1.increaseVolume();
ctrl1.increaseVolume();
remoteControl.changeBatteries();

console.log(ctrl1);
