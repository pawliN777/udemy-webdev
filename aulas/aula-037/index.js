const names = ['Paulo', 'Brendhon', 'Henriques', 'Oliveira'];

// for (let i in username) {
//     console.log(username[i]);
// }

for (let value of names) {
    console.log(value);
}

names.forEach(function(value, index, array) {
    console.log(value, index, array);
}) 