export function mouseController(e, calculator) {
  const el = e.target.closest('button');

  if (!el) return;

  if (el.dataset.number !== undefined) {
    calculator.number(el.dataset.number);
  }

  if (el.dataset.clear !== undefined) {
    calculator.clear();
  }

  if (el.dataset.backspace !== undefined) {
    calculator.backspace();
  }

  if (el.dataset.equal !== undefined) {
    calculator.equal();
  }
}

export function keyboardController(e, calculator) {
  const keys = [
    '(',
    ')',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '*',
    '/',
    '+',
    '-',
    'Backspace',
    'Enter',
    'Delete',
  ];

  if (keys.includes(e.key)) {
    calculator.display.focus();
    if (e.key === 'Backspace') {
      e.preventDefault();
      calculator.backspace();
    } else if (e.key === 'Enter') {
      calculator.equal();
    } else if (e.key === 'Delete') {
      calculator.clear();
    } else {
      e.preventDefault();
      calculator.number(e.key);
    }
  } else {
    e.preventDefault();
  }
}
