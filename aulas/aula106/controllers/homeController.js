exports.homePage = (req, res) => {
  res.send(`
    <form action="/" method="POST">
      Nome: <input type="text" name="name"><br>
      Sobrenome: <input type="text" name=lastname>
      <button>Enviar form</button>
    </form>
    `);
};

exports.postExec = (req, res) => {
  res.send('Nova rota de post');
};