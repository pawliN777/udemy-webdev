export class Calculator {
  constructor(display) {
    this.display = display;
  }

  number(digit) {
    if (this.display.value === '0' || this.display.value === 'Inválido') {
      if (isNaN(digit) && this.display.value !== 'Inválido') {
        this.display.value += digit;
        this.display.scrollLeft = this.display.scrollWidth;
      } else {
        this.display.value = digit;
      }
    } else {
      this.display.value += digit;
      this.display.scrollLeft = this.display.scrollWidth;
    }
  }

  clear() {
    this.display.value = '0';
  }

  backspace() {
    if (
      this.display.value === '' ||
      this.display.value === 'Inválido' ||
      this.display.value === '0'
    ) {
      this.display.value = '0';
      return;
    } else {
      if (this.display.value.length > 1) {
        this.display.value = this.display.value.slice(0, -1);
      } else {
        this.display.value = '0';
        return;
      }
    }
  }

  equal() {
    try {
      const expression = this.display.value;
      const isValidExpression = /^[0-9+\-*/.() ]+$/.test(expression);

      if (!isValidExpression) {
        this.display.value = 'Inválido';
        return;
      }

      const calculation = new Function('return ' + expression);
      const result = calculation();

      if (isNaN(result) || !isFinite(result)) {
        this.display.value = 'Inválido';
        return;
      } else {
        this.display.value = result;
        return;
      }
    } catch (e) {
      this.display.value = 'Inválido';
      return;
    }
  }
}
