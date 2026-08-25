export default class CpfValidator {
  constructor(cpf) {
    Object.defineProperty(this, 'cpfPure', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpf.replace(/\D+/g, ''),
    });
  }

  isSequency() {
    return this.cpfPure.charAt(0).repeat(11) === this.cpfPure;
  }

  genNewCpf() {
    const cpfNoDigit = this.cpfPure.slice(0, -2);
    const digit1 = CpfValidator.genDigit(cpfNoDigit);
    const digit2 = CpfValidator.genDigit(cpfNoDigit + digit1);

    this.newCpf = cpfNoDigit + digit1 + digit2;
  }

  static genDigit(cpfNoDigit) {
    let total = 0;
    let reverse = cpfNoDigit.length + 1;

    for (let stringNumber of cpfNoDigit) {
      total += reverse * Number(stringNumber);
      reverse--;
    }

    const digit = 11 - (total % 11);

    return digit <= 9 ? String(digit) : '0';
  }

  validator() {
    if (!this.cpfPure) return false;
    if (typeof this.cpfPure !== 'string') return false;
    if (this.cpfPure.length !== 11) return false;
    if (this.isSequency()) return false;

    this.genNewCpf();

    return this.newCpf === this.cpfPure;
  }
}
