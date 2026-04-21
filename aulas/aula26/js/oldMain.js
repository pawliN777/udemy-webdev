function imc() {
    const form = document.querySelector('#form-imc');
    const showResult = document.querySelector('#show-result');
    const showSection = document.querySelector('#show-section');

    function getEventImc(event) {
        event.preventDefault();

        const weight = Number(document.querySelector('#input-weight').value);
        const height = Number(document.querySelector('#input-height').value);

        if (!weight || !height) {
            alert('Preencha corretamente os campos.');
            return;
        }

        let diag = '';
        const result = weight / height ** 2;

        if (result < 18.5) {
            diag = 'Abaixo do peso';
        } else if (result < 25) {
            diag = 'Peso normal';
        } else if (result < 30) {
            diag = 'Sobrepeso';
        } else if (result < 35) {
            diag = 'Obesidade grau 1';
        } else if (result < 40) {
            diag = 'Obesidade grau 2';
        } else {
            diag = 'Obesidade grau 3';
        }

        showResult.innerHTML = `<p>${result.toFixed(2)} (${diag})</p>`;
        showSection.classList.remove('hidden');
    }
    form.addEventListener('submit', getEventImc);
}
imc();