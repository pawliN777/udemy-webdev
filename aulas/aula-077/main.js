function cpfValidator(cpf) {
  Object.defineProperty(this, 'cpfCode', {
    enumerable: true,

    get: function () {
      return cpf.replace(/\D+/g, '');
    },
  });
}

cpfValidator.prototype.validate = function () {
  if (typeof this.cpfCode === 'undefined') return false;
  if (this.cpfCode.length !== 11) return false;
  if (this.isSequence()) return false;

  const partialCpf = this.cpfCode.slice(0, -2);
  const digit1 = this.createDigit(partialCpf);
  const digit2 = this.createDigit(partialCpf + digit1);

  const newCpf = partialCpf + digit1 + digit2;

  return newCpf === this.cpfCode;
};

cpfValidator.prototype.createDigit = function (partialCpf) {
  const cpfArray = Array.from(partialCpf);
  let regress = cpfArray.length + 1;
  let total = cpfArray.reduce((ac, val) => {
    ac += regress * Number(val);
    regress--;
    return ac;
  }, 0);

  const digit = 11 - (total % 11);
  return digit > 9 ? '0' : String(digit);
};

cpfValidator.prototype.isSequence = function () {
  const sequence = this.cpfCode[0].repeat(this.cpfCode.length);
  return sequence === this.cpfCode;
}; 

const cpf = new cpfValidator('070.987.720-03');

if (cpf.validate()) {
  console.log('CPF Válido.');
} else {
  console.log('CPF Inválido.');
}
