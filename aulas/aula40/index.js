const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {

    if (number === 2) {
        console.log('Number 2 was skipped.');
        continue;
    }

    if (number === 7) {
        console.log('Number 7 found. Ending this program...');
        break;
    }

    console.log(number);
}