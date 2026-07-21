class CPF {
  constructor(cpf) {
    Object.defineProperty(this, 'formatedCpf', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpf.replace(/\D+/g, '')
    });
  }

  isSequence() {
    return this.formatedCpf.charAt(0).repeat(11) === this.formatedCpf;
  }

  createNewCpf() {
    const noDigitCpf = this.formatedCpf.slice(0, -2);
    const digit1 = CPF.createDigit(noDigitCpf);
    const digit2 = CPF.createDigit(noDigitCpf + digit1);
    this.newCpf = noDigitCpf + digit1 + digit2;
  }

  static createDigit(noDigitCpf) {
    let total = 0;
    let reverse = noDigitCpf.length + 1;

    for (let numberString of noDigitCpf) {
      // console.log(numberString, reverse);
      total += reverse * Number(numberString);
      reverse--;
    }

    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : '0';
    console.log(total);
  }

  valid() {
    if (!this.formatedCpf) return false;
    if (typeof this.formatedCpf !== 'string') return false;
    if (this.formatedCpf.length !== 11) return false;
    if (this.isSequence()) return false;
    this.createNewCpf();

    return this.newCpf === this.formatedCpf;
  }
}

let cpf = new CPF('070.987.720-03');
// cpf = new CPF('999.999.999-99');

if (cpf.valid()) {
  console.log('CPF válido');
} else {
  console.log('CPF inválido');
}