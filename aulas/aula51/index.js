function createPerson(username, lastname) {
    return { username, lastname };
}

const p1 = createPerson('Paulo', 'Brendhon');
const p2 = {
    username: 'Henriques',
    lastname: 'Oliveira'
};

console.log(typeof p1);
console.log(typeof p2);

function writePhrase(init) {
    function writeMore(more) {
        return init + ' ' + more;
    }
    return writeMore;
}

const init = writePhrase('Olá,');
const more = init('mundo!');
console.log(more);

function multi(multi) {
    return function(n) {
        return n * multi;
    };
}

const double = multi(2);
const triple = multi(3);
const quadruple = multi(4);

console.log(double(2));
console.log(triple(2));
console.log(quadruple(2));