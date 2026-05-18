function createCalculator() {
  return {
    display: document.querySelector('#display'),
    btnClear: document.querySelector('#clear'),

    init() {
      this.clickButtons();
      this.pressEnter();
    },

    pressEnter() {
      this.display.addEventListener('keyup', e => {

        if (e.keycode === 13) {
          this.calculation();
        }
      });
    },

    calculation() {
      let calc = this.display.value;

      try {
        calc = eval(calc);

        if (!calc) {
          alert('Cálculo inválido.');
          return;
        }

        this.display.value = String(calc);

      } catch(e) {
        alert('Cálculo inválido.');
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    backspace() {
      this.display.value = this.display.value.slice(0, -1);
    },

    clickButtons() {
      document.addEventListener('click', e => {
        const el = e.target.closest('button');

        if (el.id === 'number') { this.btnForDisplay(el.innerText); }
        if (el.id === 'clear') { this.clearDisplay(); }
        if (el.id === 'backspace') { this.backspace(); }
        if (el.id === 'equal') { this.calculation(); }

      });
    },

    btnForDisplay(val) {
      this.display.value += val;
    }
  };
}

const calculator = createCalculator();
calculator.init();