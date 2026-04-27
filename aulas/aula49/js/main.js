// Declaração de função (Function hoisting)
// Não diferença se chamar antes ou depois da função
function sayHi() {
    console.log('Hi!');
}

sayHi();

// First-class objects (Objetos de primeira classe)
// Function expression

const justData = function() {
    console.log('Apenas um dado');
};

justData();

// Funções podem receber funções omo parâmetro e executá-las

function execFunc(func) {
    func();
}

execFunc(justData);

// Arrow function

const arrowFunc = () => {
    console.log('Arrow function');
};

arrowFunc();

// Função dentro de um objeto

const obj = {
    speak() {
        console.log('Estou falando');
    }
};

obj.speak();