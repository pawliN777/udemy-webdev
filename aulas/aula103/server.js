const express = require('express');
const app = express();

          
// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET   PUT     DELETE

// http://meusite.com/ <- GET -> Entregar a página
// http://meusite.com/about <- GET -> Entregar a página sobre
// http://meusite.com/contact <- GET -> Entregar a página de contatos

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
      Nome: <input type="text" name="nome">
      <button>Enviar</button>
    </form>
    `);
});

app.post('/', (req, res) => {
  res.send('Formulário enviado!');
});

app.get('/contact', (req, res) => {
  res.send('Obrigado por entrar em contato!');
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});