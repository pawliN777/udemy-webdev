export class Calculator {
  constructor(display) {
    this.display = display;
  }

  number(digit) {
    if (this.display.value === 'Inválido') {
      this.display.value = '0';
    }

    if (this.display.value === '0' && !isNaN(digit)) {
      this.display.value = digit;
    } else {
      this.display.value += digit;
    }

    this.display.scrollLeft = this.display.scrollWidth;
  }

  clear() {
    this.display.value = '0';
  }

  backspace() {
    const val = this.display.value;

    if (val === 'Inválido' || val.length <= 1) {
      this.display.value = '0';
    } else {
      this.display.value = val.slice(0, -1);
    }
  }

  equal() {
    try {
      const expression = this.display.value;
      const isValidExpression = /^[0-9+\-*/.() ]+$/.test(expression);

      if (!isValidExpression) {
        this.display.value = 'Inválido';
      }

      const calculation = new Function('return ' + expression);
      const result = calculation();

      if (isNaN(result) || !isFinite(result)) {
        this.display.value = 'Inválido';
      } else {
        this.display.value = result;
      }
    } catch (e) {
      this.display.value = 'Inválido';
    }
  }
}
