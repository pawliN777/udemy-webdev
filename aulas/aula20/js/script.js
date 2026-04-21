function formUser() {
    const form = document.querySelector('.form-user');
    const result = document.querySelector('.form-result');

    const users = [];

    function getEventForm (event) {
        event.preventDefault();

        const name = form.querySelector('.name');
        const lastname = form.querySelector('.lastname');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        users.push({
            name: name.value,
            lastname: lastname.value,
            weight: weight.value,
            height: height.value
        });

        console.log(users);

        result.innerHTML += `<p>${name.value} ${lastname.value} ${weight.value} ${height.value}</p>`
    }

    form.addEventListener('submit', getEventForm);
}

formUser();