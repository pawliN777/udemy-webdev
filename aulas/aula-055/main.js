// IIFE -> Immediately invoked function expression

(function (age, weight, height) {
    
    const lastname = 'Oliveira';
    function createName(name) {
        return name + ' ' + lastname; 
    }

    function sayName() {
        console.log(createName('Paulo'));
    }

    sayName();
    console.log(age, weight, height);

})(22, 80, 1.8);

