// Função construtora => objetos
// Função fábrica => objetos

// Construtora => Pessoa (new)

function Person(username, lastname) {
  // Atributos ou métodos privados
  const id = 171203;

  const methodIn = function() {

  };

  // Atributos ou métodos públicos
  this.username = username;
  this.lastname = lastname;

  this.method = function() {
    console.log(this.username + ': sou um método');
  };
}

const p1 = new Person('Paulo', 'Henriques');
const p2 = new Person('Brendhon', 'Oliveira');

p2.method();