function getDayText (dayWeek) {
    let dayWeekText = 'Domingo';    
    
    switch (dayWeek) {
        case 0: dayWeekText = 'Domingo'; return dayWeekText;
        case 1: dayWeekText = 'Segunda-feira'; return dayWeekText;
        case 2: dayWeekText = 'Terça-feira'; return dayWeekText;
        case 3: dayWeekText = 'Quarta-feira'; return dayWeekText;
        case 4: dayWeekText = 'Quinta-feira'; return dayWeekText;
        case 5: dayWeekText = 'Sexta-feira'; return dayWeekText;
        case 6: dayWeekText = 'Sábado'; return dayWeekText;
        default: dayWeekText = 'Domingo'; return dayWeekText;
    }
}

const date = new Date('2026-04-10 00:00');
const dayWeek = date.getDay();

// if (dayWeek === 0) {
//     dayWeekText = 'Domingo';
// } else if (dayWeek === 1) {
//     dayWeekText = 'Segunda';
// } else if (dayWeek === 2) {
//     dayWeekText = 'Terça-feira';
// } else if (dayWeek === 3) {
//     dayWeekText = 'Quarta-feira';
// } else if (dayWeek === 4) {
//     dayWeekText = 'Quinta-feira';
// } else if (dayWeek === 5) {
//     dayWeekText = 'Sexta-feira';
// } else if (dayWeek === 6) {
//     dayWeekText = 'Sábado';
// } else {
//     dayWeekText = 'Domingo';
// }

console.log(getDayText(dayWeek));