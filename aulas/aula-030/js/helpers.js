export function setDate () {
    const date = new Date();

    const listWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    const listMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const weekDay = listWeekDays[date.getDay()];
    const day = date.getDate();
    const month = listMonths[date.getMonth()];
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');

    return `${weekDay}, ${day} de ${month} de ${year} às ${hour}h${minute}`;
}

export function setElement (element, msg) {
    const set = document.querySelector(element);

    if (!set) {
        console.warn(`Elemento ${element} não encontrado.`);
        return;
    }
    
    set.innerHTML = msg;
}