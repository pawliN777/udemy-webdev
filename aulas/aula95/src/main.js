import CpfGenerator from './modules/CpfGenerator.js';

import './PipaStyle/index.css';

const generatedCpf = document.querySelector('#generated-cpf');
const cpfGenerator = new CpfGenerator();

document.addEventListener('click', (e) => {
  const el = e.target;

  if (el.id === 'gen-button') {
    generatedCpf.classList = 'card-fill font-center';
    generatedCpf.innerHTML = cpfGenerator.genNewCpf();
  }
});