// Factory function

function createPerson(username, lastname, height, weight) {
    return {
        username, 
        lastname,

        // Getter
        get completeName() {
            return `${this.username} ${this.lastname}`;
        },

        //Setter
        set completeName(v) {
            v = v.split(' ');

            this.username = v.shift();
            this.lastname = v.join(' ');

            console.log(v);
        },

        say(phrase = 'está em silêncio') {
            return `${this.username} está ${phrase}`;
        },

        height: height,
        weight: weight,

        // Getter
        get imc() {
            const i = this.weight / (this.height ** 2);
            return i.toFixed(2);
        }
    };
}

const p1 = createPerson('Paulo', 'Brendhon', 1.8, 80);
p1.completeName = 'Ethan Saturno Paulson';
console.log(p1.username);
console.log(p1.lastname);
console.log(p1.say());
console.log(p1.imc);

const p2 = createPerson('Maria', 'Joaquina', 1.6, 60);
console.log(p2.say('falando sobre JS'));
console.log(p2.imc);