import CpfValidator from './CpfValidator.js';

export default class CpfGenerator {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  format(cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    );
  }

  genNewCpf() {
    const cpfNoDigit = this.rand();
    const digit1 = CpfValidator.genDigit(cpfNoDigit);
    const digit2 = CpfValidator.genDigit(cpfNoDigit + digit1);
    const newCpf = cpfNoDigit + digit1 + digit2;

    return this.format(newCpf);
  }
}